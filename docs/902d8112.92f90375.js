(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{135:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var i=t(0),r=t.n(i);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var b=r.a.createContext({}),s=function(e){var n=r.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return r.a.createElement(b.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(t),u=i,m=p["".concat(o,".").concat(u)]||p[u]||d[u]||a;return t?r.a.createElement(m,l(l({ref:n},b),{},{components:t})):r.a.createElement(m,l({ref:n},b))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var b=2;b<a;b++)o[b]=t[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},136:function(e,n,t){"use strict";var i=t(0),r=t(19);n.a=function(){var e=Object(i.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},137:function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return o}));var i=t(136),r=t(138);function a(){var e=Object(i.a)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,a=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,i){var a=void 0===i?{}:i,o=a.forcePrependBaseUrl,l=void 0!==o&&o,c=a.absolute,b=void 0!==c&&c;if(!t)return t;if(t.startsWith("#"))return t;if(Object(r.b)(t))return t;if(l)return n+t;var s=t.startsWith(n)?t:n+t.replace(/^\//,"");return b?e+s:s}(a,t,e,n)}}}function o(e,n){return void 0===n&&(n={}),(0,a().withBaseUrl)(e,n)}},138:function(e,n,t){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!i(e)}t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return r}))},98:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return b})),t.d(n,"default",(function(){return p}));var i=t(2),r=t(6),a=(t(0),t(135)),o=t(137),l={id:"dbcontext-db-first",title:"8.18 \u6570\u636e\u5e93\u751f\u6210\u6a21\u578b",sidebar_label:"8.18 \u6570\u636e\u5e93\u751f\u6210\u6a21\u578b"},c={unversionedId:"dbcontext-db-first",id:"dbcontext-db-first",isDocsHomePage:!1,title:"8.18 \u6570\u636e\u5e93\u751f\u6210\u6a21\u578b",description:"8.18.1 \u6570\u636e\u5e93\u5f00\u53d1\u65b9\u5f0f",source:"@site/docs\\dbcontext-db-first.mdx",slug:"/dbcontext-db-first",permalink:"/docs/dbcontext-db-first",editUrl:"https://gitee.com/monksoul/Fur/tree/rc1/handbook/docs/dbcontext-db-first.mdx",version:"current",sidebar_label:"8.18 \u6570\u636e\u5e93\u751f\u6210\u6a21\u578b",sidebar:"docs",previous:{title:"8.17 \u591a\u6570\u636e\u5e93\u64cd\u4f5c",permalink:"/docs/dbcontext-multi-database"},next:{title:"8.19 \u6a21\u578b\u751f\u6210\u6570\u636e\u5e93",permalink:"/docs/dbcontext-code-first"}},b=[{value:"8.18.1 \u6570\u636e\u5e93\u5f00\u53d1\u65b9\u5f0f",id:"8181-\u6570\u636e\u5e93\u5f00\u53d1\u65b9\u5f0f",children:[]},{value:"8.18.2 \u64cd\u4f5c\u6307\u5357",id:"8182-\u64cd\u4f5c\u6307\u5357",children:[{value:"8.18.2.1 \u6253\u5f00 <code>\u7a0b\u5e8f\u5305\u7ba1\u7406\u63a7\u5236\u53f0</code>",id:"81821-\u6253\u5f00-\u7a0b\u5e8f\u5305\u7ba1\u7406\u63a7\u5236\u53f0",children:[]},{value:"8.18.2.2 \u5207\u6362\u9ed8\u8ba4\u9879\u76ee",id:"81822-\u5207\u6362\u9ed8\u8ba4\u9879\u76ee",children:[]},{value:"8.18.2.3 \u8f93\u5165 <code>cli.ps1</code> \u547d\u4ee4",id:"81823-\u8f93\u5165-clips1-\u547d\u4ee4",children:[]}]},{value:"8.18.3 \u754c\u9762\u64cd\u4f5c\u6a21\u5f0f",id:"8183-\u754c\u9762\u64cd\u4f5c\u6a21\u5f0f",children:[{value:"8.18.3.1 \u542f\u52a8\u754c\u9762\u64cd\u4f5c",id:"81831-\u542f\u52a8\u754c\u9762\u64cd\u4f5c",children:[]},{value:"8.13.3.2 \u52a0\u8f7d\u6570\u636e\u5e93\u8868",id:"81332-\u52a0\u8f7d\u6570\u636e\u5e93\u8868",children:[]},{value:"8.13.3.3 \u9009\u62e9\u8868\u6216\u89c6\u56fe\u751f\u6210",id:"81333-\u9009\u62e9\u8868\u6216\u89c6\u56fe\u751f\u6210",children:[]},{value:"8.13.3.4 \u9009\u62e9\u4fdd\u5b58\u76ee\u5f55",id:"81334-\u9009\u62e9\u4fdd\u5b58\u76ee\u5f55",children:[]},{value:"8.13.3.5 \u751f\u6210\u6700\u7ec8\u5b9e\u4f53\u4ee3\u7801",id:"81335-\u751f\u6210\u6700\u7ec8\u5b9e\u4f53\u4ee3\u7801",children:[]}]},{value:"8.13.4 \u547d\u4ee4\u53c2\u6570\u914d\u7f6e",id:"8134-\u547d\u4ee4\u53c2\u6570\u914d\u7f6e",children:[]},{value:"8.13.5 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"8135-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[]}],s={rightToc:b};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"8181-\u6570\u636e\u5e93\u5f00\u53d1\u65b9\u5f0f"},"8.18.1 \u6570\u636e\u5e93\u5f00\u53d1\u65b9\u5f0f"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Fur")," \u63d0\u4f9b\u4e24\u79cd\u4e3b\u8981\u65b9\u6cd5\u6765 ",Object(a.b)("strong",{parentName:"p"},"\u4fdd\u6301\u5b9e\u4f53\u6a21\u578b\u548c\u6570\u636e\u5e93\u67b6\u6784\u540c\u6b65"),"\u3002"),Object(a.b)("p",null,"\u81f3\u4e8e\u6211\u4eec\u5e94\u8be5\u9009\u7528\u54ea\u4e2a\u65b9\u6cd5\uff0c\u8bf7\u786e\u5b9a\u4f60\u662f\u5e0c\u671b\u4ee5\u5b9e\u4f53\u6a21\u578b\u4e3a\u51c6\u8fd8\u662f\u4ee5\u6570\u636e\u5e93\u4e3a\u51c6\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"\u5982\u679c\u5e0c\u671b ",Object(a.b)("strong",{parentName:"p"},"\u4ee5\u5b9e\u4f53\u6a21\u578b\u4e3a\u51c6"),"\uff0c\u8bf7\u4f7f\u7528\u6b63\u5411\u5de5\u7a0b\uff08Code First\uff09\u3002 \u5bf9\u5b9e\u4f53\u6a21\u578b\u8fdb\u884c\u66f4\u6539\u65f6\uff0c\u6b64\u65b9\u6cd5\u4f1a\u4ee5\u589e\u91cf\u65b9\u5f0f\u5c06\u76f8\u5e94\u67b6\u6784\u66f4\u6539\u5e94\u7528\u5230\u6570\u636e\u5e93\uff0c\u4ee5\u4f7f\u6570\u636e\u5e93\u4fdd\u6301\u4e0e\u5b9e\u4f53\u6a21\u578b\u517c\u5bb9\u3002")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"\u5982\u679c\u5e0c\u671b ",Object(a.b)("strong",{parentName:"p"},"\u4ee5\u6570\u636e\u5e93\u67b6\u6784\u4e3a\u51c6"),"\uff0c\u8bf7\u4f7f\u7528\u53cd\u5411\u5de5\u7a0b\uff08Database First\uff09\u3002 \u4f7f\u7528\u6b64\u65b9\u6cd5\uff0c\u53ef\u901a\u8fc7\u5c06\u6570\u636e\u5e93\u67b6\u6784\u53cd\u5411\u5de5\u7a0b\u5230\u5b9e\u4f53\u6a21\u578b\u6765\u751f\u6210\u76f8\u5e94\u7684\u5b9e\u4f53\u7c7b\u578b\u3002"))),Object(a.b)("p",null,"\u672c\u7ae0\u8282\u662f ",Object(a.b)("strong",{parentName:"p"},"\u53cd\u5411\u5de5\u7a0b\uff08Database First\uff09")," \u7684\u76f8\u5173\u5185\u5bb9\u3002"),Object(a.b)("h2",{id:"8182-\u64cd\u4f5c\u6307\u5357"},"8.18.2 \u64cd\u4f5c\u6307\u5357"),Object(a.b)("h3",{id:"81821-\u6253\u5f00-\u7a0b\u5e8f\u5305\u7ba1\u7406\u63a7\u5236\u53f0"},"8.18.2.1 \u6253\u5f00 ",Object(a.b)("inlineCode",{parentName:"h3"},"\u7a0b\u5e8f\u5305\u7ba1\u7406\u63a7\u5236\u53f0")),Object(a.b)("img",{src:Object(o.a)("img/dbfirst1.png")}),Object(a.b)("h3",{id:"81822-\u5207\u6362\u9ed8\u8ba4\u9879\u76ee"},"8.18.2.2 \u5207\u6362\u9ed8\u8ba4\u9879\u76ee"),Object(a.b)("p",null,"\u5c06 ",Object(a.b)("inlineCode",{parentName:"p"},"\u7a0b\u5e8f\u5305\u7ba1\u7406\u63a7\u5236\u53f0")," \u9ed8\u8ba4\u9879\u76ee\u8bbe\u7f6e\u4e3a ",Object(a.b)("inlineCode",{parentName:"p"},"Fur.Core"),"\uff0c\u5982\u679c\u60a8\u662f\u5176\u4ed6\u540d\u5b57\uff0c\u5219\u5207\u6362\u5bf9\u5e94\u5373\u53ef\u3002"),Object(a.b)("img",{src:Object(o.a)("img/dbfirst2.png")}),Object(a.b)("h3",{id:"81823-\u8f93\u5165-clips1-\u547d\u4ee4"},"8.18.2.3 \u8f93\u5165 ",Object(a.b)("inlineCode",{parentName:"h3"},"cli.ps1")," \u547d\u4ee4"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-shell"}),' &"../tools/cli.ps1"\n')),Object(a.b)("img",{src:Object(o.a)("img/dbfirst3.png")}),Object(a.b)("div",{className:"admonition admonition-important alert alert--info"},Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u7b49\u5f85\u8f93\u5165")),Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"\u6267\u884c\u4e0a\u9762\u547d\u4ee4\u540e\uff0c\u6b64\u65f6\uff0c",Object(a.b)("inlineCode",{parentName:"p"},"Cli")," \u6709\u4e00\u4e2a\u7b49\u5f85\u8f93\u5165\u63d0\u793a\uff1a"),Object(a.b)("pre",{parentName:"div"},Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-shell"}),"Fur Tools v1.0.0 \u8bf7\u952e\u5165\u64cd\u4f5c\u7c7b\u578b\uff1a[G] \u754c\u9762\u64cd\u4f5c\uff0c[\u4efb\u610f\u5b57\u7b26] \u547d\u4ee4\u884c\u64cd\u4f5c\nFur Tools v1.0.0 \u60a8\u7684\u8f93\u5165\u662f:\n")),Object(a.b)("p",{parentName:"div"},Object(a.b)("strong",{parentName:"p"},"\u8f93\u5165\u5927\u5199 ",Object(a.b)("inlineCode",{parentName:"strong"},"G")," \u8fdb\u5165\u754c\u9762\u64cd\u4f5c\u6a21\u5f0f\uff0c\u5176\u4ed6\u4efb\u610f\u5b57\u7b26\u8fdb\u5165\u547d\u4ee4\u884c\u64cd\u4f5c\u6a21\u5f0f\u3002")))),Object(a.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(a.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"\u6ce8\u610f\u4e8b\u9879")),Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"\u76ee\u524d\u53ea\u6709 ",Object(a.b)("inlineCode",{parentName:"p"},"Sql Server")," \u6570\u636e\u5e93\u624d\u652f\u6301 ",Object(a.b)("inlineCode",{parentName:"p"},"GUI \u754c\u9762\u64cd\u4f5c\u6a21\u5f0f"),"\uff0c\u5176\u4ed6\u6570\u636e\u5e93\u8bf7\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u3002"))),Object(a.b)("h2",{id:"8183-\u754c\u9762\u64cd\u4f5c\u6a21\u5f0f"},"8.18.3 \u754c\u9762\u64cd\u4f5c\u6a21\u5f0f"),Object(a.b)("h3",{id:"81831-\u542f\u52a8\u754c\u9762\u64cd\u4f5c"},"8.18.3.1 \u542f\u52a8\u754c\u9762\u64cd\u4f5c"),Object(a.b)("p",null,"\u5f53\u6211\u4eec\u8f93\u5165 ",Object(a.b)("inlineCode",{parentName:"p"},"G")," \u65f6\uff0c\u5c06\u6253\u5f00 ",Object(a.b)("inlineCode",{parentName:"p"},"GUI")," \u754c\u9762\u64cd\u4f5c\u6a21\u5f0f\uff0c\u5982\uff1a"),Object(a.b)("img",{src:Object(o.a)("img/dbfirst4.png")}),Object(a.b)("p",null,"\u8fd9\u65f6\uff0c",Object(a.b)("inlineCode",{parentName:"p"},"Fur Tools")," \u4f1a\u81ea\u52a8\u5c06 ",Object(a.b)("inlineCode",{parentName:"p"},"Fur.Web.Entry")," \u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"appsetting.json")," \u914d\u7f6e\u6570\u636e\u5e93\u8fde\u63a5\u5b57\u7b26\u4e32\u81ea\u52a8\u52a0\u8f7d\u8fdb\u6765\uff0c",Object(a.b)("inlineCode",{parentName:"p"},"appsetting.json")," \u914d\u7f6e\u4ee3\u7801\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json",metastring:"{12-13}","{12-13}":!0}),'{\n  "Logging": {\n    "LogLevel": {\n      "Default": "Information",\n      "Microsoft": "Warning",\n      "Microsoft.Hosting.Lifetime": "Information",\n      "Microsoft.EntityFrameworkCore": "Information"\n    }\n  },\n  "AllowedHosts": "*",\n  "ConnectionStrings": {\n    "DbConnectionString": "Server=localhost;Database=Fur;User=sa;Password=000000;MultipleActiveResultSets=True;",\n    "Sqlite3ConnectionString": "Data Source=./Fur.db"\n  }\n}\n')),Object(a.b)("h3",{id:"81332-\u52a0\u8f7d\u6570\u636e\u5e93\u8868"},"8.13.3.2 \u52a0\u8f7d\u6570\u636e\u5e93\u8868"),Object(a.b)("p",null,"\u9009\u62e9\u8fde\u63a5\u5b57\u7b26\u4e32\u4e4b\u540e\uff0c\u70b9\u51fb ",Object(a.b)("inlineCode",{parentName:"p"},"\u52a0\u8f7d\u6570\u636e\u5e93\u8868\u548c\u89c6\u56fe")," \u6309\u94ae\u52a0\u8f7d\u3002"),Object(a.b)("img",{src:Object(o.a)("img/dbfirst5.png")}),Object(a.b)("h3",{id:"81333-\u9009\u62e9\u8868\u6216\u89c6\u56fe\u751f\u6210"},"8.13.3.3 \u9009\u62e9\u8868\u6216\u89c6\u56fe\u751f\u6210"),Object(a.b)("p",null,"\u52a0\u8f7d\u8868\u5b8c\u6210\u540e\uff0c\u53ef\u4ee5\u9009\u62e9\u60a8\u8981\u751f\u6210\u7684\u8868\u6216\u89c6\u56fe\uff0c",Object(a.b)("strong",{parentName:"p"},"\u652f\u6301\u591a\u9009")),Object(a.b)("img",{src:Object(o.a)("img/dbfirst6.png")}),Object(a.b)("p",null,"\u70b9\u51fb\u5e95\u90e8\u6309\u94ae ",Object(a.b)("inlineCode",{parentName:"p"},"\u7acb\u5373\u751f\u6210")),Object(a.b)("h3",{id:"81334-\u9009\u62e9\u4fdd\u5b58\u76ee\u5f55"},"8.13.3.4 \u9009\u62e9\u4fdd\u5b58\u76ee\u5f55"),Object(a.b)("p",null,"\u70b9\u51fb ",Object(a.b)("inlineCode",{parentName:"p"},"\u7acb\u5373\u751f\u6210")," \u6309\u94ae\u540e\uff0c\u4f1a\u5f39\u51fa\u5b9e\u4f53\u4fdd\u5b58\u9009\u62e9\u76ee\u5f55\u8d44\u6e90\u7ba1\u7406\u5668\uff0c\u9ed8\u8ba4\u5b9e\u4f53\u53ea\u80fd\u4fdd\u5b58\u5728 ",Object(a.b)("inlineCode",{parentName:"p"},"Fur.Core")," \u5c42\uff1a"),Object(a.b)("img",{src:Object(o.a)("img/dbfirst7.png")}),Object(a.b)("p",null,"\u70b9\u51fb\u786e\u5b9a\u540e\u5c31\u53ef\u5b8c\u6210\u6240\u6709\u751f\u6210\u64cd\u4f5c\u3002"),Object(a.b)("h3",{id:"81335-\u751f\u6210\u6700\u7ec8\u5b9e\u4f53\u4ee3\u7801"},"8.13.3.5 \u751f\u6210\u6700\u7ec8\u5b9e\u4f53\u4ee3\u7801"),Object(a.b)("img",{src:Object(o.a)("img/dbfirst8.png")}),Object(a.b)("p",null,"\u6700\u7ec8\u811a\u672c\u5982\u4e0b\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-shell"}),'PM> &"../tools/cli.ps1"\n// -----------------------------------------------------------------------------\n//   ______            _______          _     \n//  |  ____|          |__   __|        | |    \n//  | |__ _   _ _ __     | | ___   ___ | |___ \n//  |  __| | | | \'__|    | |/ _ \\ / _ \\| / __|\n//  | |  | |_| | |       | | (_) | (_) | \\__ \\\n//  |_|   \\__,_|_|       |_|\\___/ \\___/|_|___/\n//                                            \n// -----------------------------------------------------------------------------\n// Fur \u662f .NET 5 \u5e73\u53f0\u4e0b\u6781\u6613\u5165\u95e8\u3001\u6781\u901f\u5f00\u53d1\u7684 Web \u5e94\u7528\u6846\u67b6\u3002\n// Copyright \xa9 2020 Fur, Baiqian Co.,Ltd.\n//\n// \u6846\u67b6\u540d\u79f0\uff1aFur\n// \u6846\u67b6\u4f5c\u8005\uff1a\u767e\u5c0f\u50e7\n// \u6846\u67b6\u7248\u672c\uff1a1.0.0\n// \u6e90\u7801\u5730\u5740\uff1ahttps://gitee.com/monksoul/Fur\n// \u5f00\u6e90\u534f\u8bae\uff1aApache-2.0\uff08http://www.apache.org/licenses/LICENSE-2.0\uff09\n// -----------------------------------------------------------------------------\nFur Tools v1.0.0 \u542f\u52a8\u4e2d......\nFur Tools v1.0.0 \u542f\u52a8\u6210\u529f\uff01\nFur Tools v1.0.0 \u8bf7\u952e\u5165\u64cd\u4f5c\u7c7b\u578b\uff1a[G] \u754c\u9762\u64cd\u4f5c\uff0c[\u4efb\u610f\u5b57\u7b26] \u547d\u4ee4\u884c\u64cd\u4f5c\nFur Tools v1.0.0 \u60a8\u7684\u8f93\u5165\u662f: G\nFur Tools v1.0.0 \u6b63\u5728\u52a0\u8f7d\u6570\u636e\u5e93\u8868\u548c\u89c6\u56fe......\nFur Tools v1.0.0 \u52a0\u8f7d\u6210\u529f\uff01\nFur Tools v1.0.0 \u6b63\u5728\u7f16\u8bd1\u89e3\u51b3\u65b9\u6848\u4ee3\u7801......\nBuild started...\nBuild succeeded.\nFor foreign key FK_PersonDetail_Person_PersonId on table dbo.PersonDetail, unable to model the end of the foreign key on principal table dbo.Person. This is usually because the principal table was not included in the selection set.\nFur Tools v1.0.0 \u7f16\u8bd1\u6210\u529f\uff01\nFur Tools v1.0.0 \u5f00\u59cb\u751f\u6210\u5b9e\u4f53\u6587\u4ef6......\nFur Tools v1.0.0 \u6b63\u5728\u751f\u6210 City.cs \u5b9e\u4f53\u4ee3\u7801......\nFur Tools v1.0.0 \u6210\u529f\u751f\u6210 City.cs \u5b9e\u4f53\u4ee3\u7801\n// -----------------------------------------------------------------------------\n// \u4ee5\u4e0b\u4ee3\u7801\u7531 Fur Tools v1.0.0 \u751f\u6210                                          \n// -----------------------------------------------------------------------------\n\nusing Fur.DatabaseAccessor;\nusing Microsoft.EntityFrameworkCore.Metadata.Builders;\nusing System;\nusing System.Collections.Generic;\n\n#nullable disable\n\nnamespace Fur.Core\n{\n    public partial class City : IEntity, IEntityTypeBuilder<City>\n    {\n\n        public City()\n        {\n            InverseParent = new HashSet<City>();\n        }\n\n        public int Id { get; set; }\n        public string Name { get; set; }\n        public int? ParentId { get; set; }\n        public DateTime CreatedTime { get; set; }\n        public DateTime? UpdatedTime { get; set; }\n        public bool IsDeleted { get; set; }\n\n        public virtual City Parent { get; set; }\n        public virtual ICollection<City> InverseParent { get; set; }\n    \n        public void Configure(EntityTypeBuilder<City> entityBuilder, DbContext dbContext, Type dbContextLocator)\n        {\n                entityBuilder.HasIndex(e => e.ParentId, "IX_City_ParentId");\n\n                entityBuilder.HasOne(d => d.Parent)\n                    .WithMany(p => p.InverseParent)\n                    .HasForeignKey(d => d.ParentId);\n            \n        }\n\n    }\n}\n\nFur Tools v1.0.0 \u6b63\u5728\u751f\u6210 PersonDetail.cs \u5b9e\u4f53\u4ee3\u7801......\nFur Tools v1.0.0 \u6210\u529f\u751f\u6210 PersonDetail.cs \u5b9e\u4f53\u4ee3\u7801\n// -----------------------------------------------------------------------------\n// \u4ee5\u4e0b\u4ee3\u7801\u7531 Fur Tools v1.0.0 \u751f\u6210                                          \n// -----------------------------------------------------------------------------\n\nusing Fur.DatabaseAccessor;\nusing Microsoft.EntityFrameworkCore.Metadata.Builders;\nusing System;\nusing System.Collections.Generic;\n\n#nullable disable\n\nnamespace Fur.Core\n{\n    public partial class PersonDetail : IEntity, IEntityTypeBuilder<PersonDetail>\n    {\n\n        public int Id { get; set; }\n        public string PhoneNumber { get; set; }\n        public string Qq { get; set; }\n        public int PersonId { get; set; }\n    \n        public void Configure(EntityTypeBuilder<PersonDetail> entityBuilder, DbContext dbContext, Type dbContextLocator)\n        {\n                entityBuilder.HasIndex(e => e.PersonId, "IX_PersonDetail_PersonId")\n                    .IsUnique();\n\n                entityBuilder.Property(e => e.Qq).HasColumnName("QQ");\n            \n        }\n\n    }\n}\n\nFur Tools v1.0.0 \u6b63\u5728\u751f\u6210 Post.cs \u5b9e\u4f53\u4ee3\u7801......\nFur Tools v1.0.0 \u6210\u529f\u751f\u6210 Post.cs \u5b9e\u4f53\u4ee3\u7801\n// -----------------------------------------------------------------------------\n// \u4ee5\u4e0b\u4ee3\u7801\u7531 Fur Tools v1.0.0 \u751f\u6210                                          \n// -----------------------------------------------------------------------------\n\nusing Fur.DatabaseAccessor;\nusing Microsoft.EntityFrameworkCore.Metadata.Builders;\nusing System;\nusing System.Collections.Generic;\n\n#nullable disable\n\nnamespace Fur.Core\n{\n    public partial class Post : IEntity\n    {\n\n        public int Id { get; set; }\n        public string Name { get; set; }\n        public DateTime CreatedTime { get; set; }\n        public DateTime? UpdatedTime { get; set; }\n        public bool IsDeleted { get; set; }\n    \n    }\n}\n\nFur Tools v1.0.0 \u6b63\u5728\u751f\u6210 VPerson.cs \u5b9e\u4f53\u4ee3\u7801......\nFur Tools v1.0.0 \u6210\u529f\u751f\u6210 VPerson.cs \u5b9e\u4f53\u4ee3\u7801\n// -----------------------------------------------------------------------------\n// \u4ee5\u4e0b\u4ee3\u7801\u7531 Fur Tools v1.0.0 \u751f\u6210                                          \n// -----------------------------------------------------------------------------\n\nusing Fur.DatabaseAccessor;\nusing Microsoft.EntityFrameworkCore.Metadata.Builders;\nusing System;\nusing System.Collections.Generic;\n\n#nullable disable\n\nnamespace Fur.Core\n{\n    public partial class VPerson : IEntity, IEntityTypeBuilder<VPerson>\n    {\n\n        public int Id { get; set; }\n        public string Name { get; set; }\n        public int Age { get; set; }\n        public string Address { get; set; }\n    \n        public void Configure(EntityTypeBuilder<VPerson> entityBuilder, DbContext dbContext, Type dbContextLocator)\n        {\n                entityBuilder.HasNoKey();\n\n                entityBuilder.ToView("V_Person");\n\n                entityBuilder.Property(e => e.Id).ValueGeneratedOnAdd();\n\n                entityBuilder.Property(e => e.Name).HasMaxLength(32);\n            \n        }\n\n    }\n}\n\nFur Tools v1.0.0 \u5168\u90e8\u5b9e\u4f53\u751f\u6210\u6210\u529f\uff01\nPM> \n')),Object(a.b)("h2",{id:"8134-\u547d\u4ee4\u53c2\u6570\u914d\u7f6e"},"8.13.4 \u547d\u4ee4\u53c2\u6570\u914d\u7f6e"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Fur Tools Cli")," \u652f\u6301\u591a\u4e2a\u53c2\u6570\u914d\u7f6e\uff0c\u4f7f\u7528\u65b9\u6cd5\u53ea\u9700\u8981\u5728\u547d\u4ee4\u540e\u9762\u6dfb\u52a0\u5373\u53ef\uff0c\u5982\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-shell"}),' &"../tools/cli.ps1" -Context \u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u540d -ConnectionName \u8fde\u63a5\u5b57\u7b26\u4e32Key\n')),Object(a.b)("p",null,"\u652f\u6301\u53c2\u6570\u5982\u4e0b\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"-Tables"),"\uff1a\u914d\u7f6e\u8981\u751f\u6210\u7684\u6570\u636e\u5e93\u8868\uff0c\u6570\u7ec4\u7c7b\u578b\uff0c\u5982\u679c\u4e3a\u7a7a\uff0c\u5219\u751f\u6210\u6570\u636e\u5e93\u6240\u6709\u8868\u548c\u89c6\u56fe\u3002\u5982\uff1a",Object(a.b)("inlineCode",{parentName:"li"},"-Tables Person,PersonDetails")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"-Context"),"\uff1a\u914d\u7f6e\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\uff0c\u9ed8\u8ba4 ",Object(a.b)("inlineCode",{parentName:"li"},"FurDbContext"),"\uff0c\u5982\u679c\u6709\u591a\u4e2a\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\uff0c\u5219\u6b64\u53c2\u6570\u5fc5\u987b\u914d\u7f6e"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"-ConnectionName"),"\uff1a\u914d\u7f6e\u6570\u636e\u5e93\u8fde\u63a5\u5b57\u7b26\u4e32\uff0c\u5bf9\u4e8e ",Object(a.b)("inlineCode",{parentName:"li"},"appsetting.json")," \u4e2d\u7684 ",Object(a.b)("inlineCode",{parentName:"li"},"Key")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"-OutputDir"),"\uff1a\u751f\u6210\u5b9e\u4f53\u4ee3\u7801\u8f93\u51fa\u76ee\u5f55\uff0c\u9ed8\u8ba4\u4e3a\uff1a",Object(a.b)("inlineCode",{parentName:"li"},"./Fur.Core/Entities/")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"-DbProvider"),"\uff1a\u6570\u636e\u5e93\u63d0\u4f9b\u5668\uff0c\u9ed8\u8ba4\u662f ",Object(a.b)("inlineCode",{parentName:"li"},"Microsoft.EntityFrameworkCore.SqlServer"),"\uff0c\u5176\u4ed6\u6570\u636e\u5e93\u8bf7\u6307\u5b9a\u5bf9\u5e94\u7a0b\u5e8f\u96c6",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"SqlServer"),"\uff1a",Object(a.b)("inlineCode",{parentName:"li"},"Microsoft.EntityFrameworkCore.SqlServer")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Sqlite"),"\uff1a",Object(a.b)("inlineCode",{parentName:"li"},"Microsoft.EntityFrameworkCore.Sqlite")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Cosmos"),"\uff1a",Object(a.b)("inlineCode",{parentName:"li"},"Microsoft.EntityFrameworkCore.Cosmos")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"InMemory"),"\uff1a",Object(a.b)("inlineCode",{parentName:"li"},"Microsoft.EntityFrameworkCore.InMemory")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"MySql"),"\uff1a",Object(a.b)("inlineCode",{parentName:"li"},"Pomelo.EntityFrameworkCore.MySql")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"PostgreSQL"),"\uff1a",Object(a.b)("inlineCode",{parentName:"li"},"Npgsql.EntityFrameworkCore.PostgreSQL")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Oracle"),"\uff1a",Object(a.b)("inlineCode",{parentName:"li"},"Citms.EntityFrameworkCore.Oracle")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"-EntryProject"),"\uff1aWeb \u542f\u7528\u9879\u76ee\u5c42\u540d\uff0c\u9ed8\u8ba4 ",Object(a.b)("inlineCode",{parentName:"li"},"Fur.Web.Entry")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"-CoreProject"),"\uff1a\u5b9e\u4f53\u9879\u76ee\u5c42\u540d\uff0c\u9ed8\u8ba4 ",Object(a.b)("inlineCode",{parentName:"li"},"Fur.Core")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"-Product"),"\uff1a\u89e3\u51b3\u65b9\u6848\u9ed8\u8ba4\u524d\u7f00\uff0c\u5982 ",Object(a.b)("inlineCode",{parentName:"li"},"Fur"))),Object(a.b)("h2",{id:"8135-\u53cd\u9988\u4e0e\u5efa\u8bae"},"8.13.5 \u53cd\u9988\u4e0e\u5efa\u8bae"),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"\u7ed9 Fur \u63d0 ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://gitee.com/monksoul/Fur/issues/new?issue"}),"Issue"),"\u3002"))))}p.isMDXComponent=!0}}]);