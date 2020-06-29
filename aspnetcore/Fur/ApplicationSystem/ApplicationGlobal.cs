﻿using Fur.ApplicationSystem.Models;
using Fur.AttachController.Attributes;
using Fur.AttachController.Dependencies;
using Fur.DependencyInjection.Attributes;
using Fur.Extensions;
using Fur.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Runtime.Loader;

namespace Fur.ApplicationSystem
{
    /// <summary>
    /// 程序启动预热类
    /// </summary>
    public sealed class ApplicationGlobal
    {
        /// <summary>
        /// 应用程序信息
        /// </summary>
        public static IEnumerable<ApplicationAssemblyInfo> ApplicationAssemblies = GetApplicationAssemblyInfos();

        #region 获取类型的应用类型信息 +/*  public static ApplicationTypeInfo GetApplicationTypeInfo(Type type)
        /// <summary>
        /// 获取类型的应用类型信息
        /// </summary>
        /// <param name="type">类型对象</param>
        /// <returns>应用类型信息对象</returns>
        public static ApplicationTypeInfo GetApplicationTypeInfo(Type type)
            => ApplicationAssemblies.SelectMany(a => a.PublicClassTypes).FirstOrDefault(t => t.Type == type);
        #endregion

        #region 获取特定类型的特定方法信息 +/* public static ApplicationMethodInfo GetApplicationMethodInfo(MethodInfo methodInfo)
        /// <summary>
        /// 获取特定类型的特定方法信息
        /// </summary>
        /// <param name="methodInfo">方法对象</param>
        /// <returns>应用方法信息</returns>
        public static ApplicationMethodInfo GetApplicationMethodInfo(MethodInfo methodInfo)
            => GetApplicationTypeInfo(methodInfo.DeclaringType).PublicInstanceMethods.FirstOrDefault(m => m.Method.Equals(methodInfo));
        #endregion

        #region 获取类型指定特性 +/* public static TAttribute GetTypeAttribute<TAttribute>(Type type) where TAttribute : Attribute
        /// <summary>
        /// 获取类型指定特性
        /// </summary>
        /// <typeparam name="TAttribute">特性类型</typeparam>
        /// <param name="type">类型对象</param>
        /// <returns>特性对象</returns>
        public static TAttribute GetTypeAttribute<TAttribute>(Type type) where TAttribute : Attribute
            => GetApplicationTypeInfo(type).CustomAttributes.FirstOrDefault(u => u is TAttribute) as TAttribute;
        #endregion

        #region 获取类型指定特性 +/* public static TAttribute GetMethodAttribute<TAttribute>(MethodInfo methodInfo) where TAttribute : Attribute
        /// <summary>
        /// 获取类型指定特性
        /// </summary>
        /// <typeparam name="TAttribute">泛型特性</typeparam>
        /// <param name="methodInfo">方法对象</param>
        /// <returns>特性对象</returns>
        public static TAttribute GetMethodAttribute<TAttribute>(MethodInfo methodInfo) where TAttribute : Attribute
            => GetApplicationMethodInfo(methodInfo).CustomAttributes.FirstOrDefault(u => u is TAttribute) as TAttribute;
        #endregion

        #region 判断是否是控制器类型 +/* public static bool IsControllerType(TypeInfo typeInfo, bool exceptMvcController = false)
        /// <summary>
        /// 判断是否是控制器类型
        /// </summary>
        /// <param name="typeInfo">类型对象</param>
        /// <param name="exceptMvcController">是否排除Mvc控制器类型</param>
        /// <returns>是或否</returns>
        public static bool IsControllerType(TypeInfo typeInfo, bool exceptMvcController = false)
        {
            // 1）不能是非公开、抽象类、泛型类、接口
            if (!typeInfo.IsPublic || typeInfo.IsAbstract || typeInfo.IsGenericType || typeInfo.IsInterface) return false;

            // 2）必须贴 [AttachController] 特性，且 [AttachController].Attach != false，且需继承 IAttachControllerDependency 接口
            var attachControllerAttribute = typeInfo.GetDeepAttribute<AttachControllerAttribute>();
            if (attachControllerAttribute == null || attachControllerAttribute.Attach == false || !typeof(IAttachControllerDependency).IsAssignableFrom(typeInfo)) return false;

            // 3）贴了 [ApiExplorerSettings] 特性，且 [ApiExplorerSettings].IgnoreApi != true
            var apiExplorerSettingsAttribute = typeInfo.GetDeepAttribute<ApiExplorerSettingsAttribute>();
            if (apiExplorerSettingsAttribute != null && apiExplorerSettingsAttribute.IgnoreApi == true) return false;

            if (exceptMvcController && typeof(ControllerBase).IsAssignableFrom(typeInfo)) return false;

            return true;
        }
        #endregion

        #region 判断是否是控制器类型 +/*  public static bool IsControllerType(Type type, bool exceptMvcController = false)
        /// <summary>
        /// 判断是否是控制器类型
        /// </summary>
        /// <param name="type">类型对象</param>
        /// <param name="exceptMvcController">是否排除Mvc控制器类型</param>
        /// <returns>是或否</returns>
        public static bool IsControllerType(Type type, bool exceptMvcController = false)
            => IsControllerType(type.GetTypeInfo(), exceptMvcController);
        #endregion

        #region 获取应用程序集，并且不包含Nuget下载 -/* private IEnumerable<Assembly> GetApplicationAssembliesWithoutNuget(string prefix = nameof(Fur))
        /// <summary>
        /// 获取应用程序集，并且不包含Nuget下载
        /// </summary>
        /// <param name="prefix">程序集前缀</param>
        /// <returns>程序集集合</returns>
        internal static IEnumerable<Assembly> GetApplicationAssembliesWithoutNuget(string prefix = nameof(Fur))
        {
            var dependencyConext = DependencyContext.Default;
            return dependencyConext.CompileLibraries
                .Where(u => !u.Serviceable && u.Type != "package")
                .WhereIf(!string.IsNullOrEmpty(prefix), u => u.Name.StartsWith(prefix))
                .Select(u => AssemblyLoadContext.Default.LoadFromAssemblyName(new AssemblyName(u.Name)));
        }
        #endregion

        #region 获取应用程序集信息 -/* private static IEnumerable<ApplicationAssemblyInfo> GetApplicationAssemblyInfos()
        /// <summary>
        /// 获取应用程序集信息
        /// </summary>
        /// <returns>程序集集合对象</returns>
        private static IEnumerable<ApplicationAssemblyInfo> GetApplicationAssemblyInfos()
        {
            var applicationAssemblies = GetApplicationAssembliesWithoutNuget();
            return applicationAssemblies.Select(a => new ApplicationAssemblyInfo()
            {
                Assembly = a,
                Name = a.GetName().Name,
                FullName = a.FullName,
                PublicClassTypes = a.GetTypes().Where(t => !t.IsInterface && !t.IsAbstract && t.IsPublic && !t.IsDefined(typeof(NotInjectAttribute))).Select(t => new ApplicationTypeInfo()
                {
                    Type = t,
                    IsGenericType = t.IsGenericType,
                    IsControllerType = IsControllerType(t),
                    GenericArguments = t.IsGenericType ? t.GetGenericArguments() : null,
                    CustomAttributes = t.GetCustomAttributes(),
                    PublicInstanceMethods = t.GetMethods(BindingFlags.Instance | BindingFlags.Public).Where(m => m.DeclaringType == t && !m.IsDefined(typeof(NotInjectAttribute))).Select(m => new ApplicationMethodInfo()
                    {
                        CustomAttributes = m.GetCustomAttributes(),
                        Method = m,
                        ReturnType = m.ReturnType,
                        Parameters = m.GetParameters().Where(p => !p.IsDefined(typeof(NotInjectAttribute))).Select(p => new ApplicationParameterInfo()
                        {
                            Name = p.Name,
                            Type = p.ParameterType,
                            CustomAttributes = p.GetCustomAttributes()
                        })
                    })
                })
            });
        }
        #endregion
    }
}
