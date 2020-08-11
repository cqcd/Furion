﻿using Microsoft.Extensions.Options;

namespace Fur.Options
{
    /// <summary>
    /// 应用选项依赖接口
    /// </summary>
    public partial interface IAppOptions { }

    /// <summary>
    /// 选项后期配置
    /// </summary>
    /// <typeparam name="TOptions"></typeparam>
    public partial interface IAppOptions<TOptions> : IAppOptions
        where TOptions : class, IAppOptions
    {
        void PostConfigure(TOptions options);
    }

    /// <summary>
    /// 带验证的应用选项依赖接口
    /// </summary>
    /// <typeparam name="TOptions"></typeparam>
    /// <typeparam name="TOptionsValidation"></typeparam>
    public partial interface IAppOptions<TOptions, TOptionsValidation> : IAppOptions<TOptions>
        where TOptions : class, IAppOptions
        where TOptionsValidation : class, IValidateOptions<TOptions>
    {
    }
}