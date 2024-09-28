!function(){function e(r){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(r)}function r(r,s,t){return(s=function(r){var s=function(r,s){if("object"!=e(r)||!r)return r;var t=r[Symbol.toPrimitive];if(void 0!==t){var n=t.call(r,s||"default");if("object"!=e(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===s?String:Number)(r)}(r,"string");return"symbol"==e(s)?s:s+""}(s))in r?Object.defineProperty(r,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[s]=t,r}function s(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var s=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=s){var t,n,l,a,o=[],i=!0,c=!1;try{if(l=(s=s.call(e)).next,0===r){if(Object(s)!==s)return;i=!1}else for(;!(i=(t=l.call(s)).done)&&(o.push(t.value),o.length!==r);i=!0);}catch(e){c=!0,n=e}finally{try{if(!i&&null!=s.return&&(a=s.return(),Object(a)!==a))return}finally{if(c)throw n}}return o}}(e,r)||function(e,r){if(e){if("string"==typeof e)return t(e,r);var s={}.toString.call(e).slice(8,-1);return"Object"===s&&e.constructor&&(s=e.constructor.name),"Map"===s||"Set"===s?Array.from(e):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?t(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var s=0,t=Array(r);s<r;s++)t[s]=e[s];return t}System.register(["./index-legacy-a7MRAkA8.js","./TextSetting-legacy-DvY6gpDv.js","./NumberSetting-legacy-BmuHJwj1.js","./SelectSetting-legacy-B4czMR2a.js","./Switch-legacy-BcbE1-dN.js","./Trans-legacy-BIbWoHjo.js","./Link-legacy-D7L2zJ5J.js","./PasswordTextField-legacy-BtWxGucc.js","./TextField-legacy-8Jgafatc.js","./InputAdornment-legacy-Cib2E43D.js","./Info-legacy-aCDUI6Wc.js","./Select-legacy-BI6mL2OV.js","./SwitchBase-legacy-CZGiEuev.js"],(function(e,t){"use strict";var n,l,a,o,i,c,u,d,g,f,v,b,h,m,x,y,p,j,S,k,P,_,E;return{setters:[function(e){n=e.u,l=e.c,a=e.N,o=e.p,i=e.a,c=e.d,u=e.j,d=e.k,g=e.aT,f=e.ax,v=e.a3,b=e.g,h=e.E,m=e.h,x=e.Q,y=e.v,p=e.m},function(e){j=e.T},function(e){S=e.N},function(e){k=e.S},function(e){P=e.S},function(e){_=e.T},function(e){E=e.L},null,null,null,null,null,null],execute:function(){var t=function(e){return 0===e?x("global.label.never"):x("settings.server.misc.log_files.file_cleanup.value",{days:e,count:e})};e("ServerSettings",(function(){var e=n().t,x=l.useContext(a),T=x.setTitle,w=x.setAction;l.useLayoutEffect((function(){return T(e("settings.server.title.settings")),w(null),function(){T(""),w(null)}}),[e]);var A=o(),C=A.settings.serverInformAvailableUpdate,L=A.loading,U=A.request,F=U.error,N=U.refetch,V=y((function(){return p(e("global.error.label.failed_to_save_changes"),"error")})),z=i.useGetServerSettings({notifyOnNetworkStatusChange:!0}),D=z.data,B=z.loading,q=z.error,I=z.refetch,O=s(i.useUpdateServerSettings(),1)[0],R=s(c("serverBaseURL",window.location.origin),2),H=R[0],M=R[1],$=function(e){var r=e.replaceAll(/(\/)+$/g,"");M(r),i.reset()},G=function(s,t){O({variables:{input:{settings:r({},s,t)}}}).catch((function(){return p(e("global.error.label.failed_to_save_changes"),"error")}))},K=l.useMemo((function(){return u.jsxs(d,{subheader:u.jsx(g,{component:"div",id:"server-settings-client",children:e("global.label.client")}),children:[u.jsx(j,{settingName:e("settings.about.server.label.address"),handleChange:$,value:H,placeholder:"http://localhost:4567"}),u.jsxs(f,{children:[u.jsx(v,{primary:e("global.update.settings.inform.label.title"),secondary:e("global.update.settings.inform.label.description")}),u.jsx(P,{edge:"end",checked:C,onChange:function(e){return V("serverInformAvailableUpdate",e.target.checked)}})]})]})}),[H,C]);if(L||B)return u.jsxs(u.Fragment,{children:[K,u.jsx(b,{})]});var Q=null!=F?F:q;if(Q)return u.jsxs(u.Fragment,{children:[K,u.jsx(h,{message:e("global.error.label.failed_to_load_data"),messageExtra:Q.message,retry:function(){F&&N().catch(m()),q&&I().catch(m())}})]});var W,X={ip:(W=D.settings).ip,port:W.port,socksProxyEnabled:W.socksProxyEnabled,socksProxyVersion:W.socksProxyVersion,socksProxyHost:W.socksProxyHost,socksProxyPort:W.socksProxyPort,socksProxyUsername:W.socksProxyUsername,socksProxyPassword:W.socksProxyPassword,debugLogsEnabled:W.debugLogsEnabled,gqlDebugLogsEnabled:W.gqlDebugLogsEnabled,systemTrayEnabled:W.systemTrayEnabled,maxLogFiles:W.maxLogFiles,maxLogFileSize:W.maxLogFileSize,maxLogFolderSize:W.maxLogFolderSize,basicAuthEnabled:W.basicAuthEnabled,basicAuthUsername:W.basicAuthUsername,basicAuthPassword:W.basicAuthPassword,flareSolverrEnabled:W.flareSolverrEnabled,flareSolverrTimeout:W.flareSolverrTimeout,flareSolverrUrl:W.flareSolverrUrl,flareSolverrSessionName:W.flareSolverrSessionName,flareSolverrSessionTtl:W.flareSolverrSessionTtl,flareSolverrAsResponseFallback:W.flareSolverrAsResponseFallback};return u.jsxs(d,{sx:{pt:0},children:[K,u.jsxs(d,{subheader:u.jsx(g,{component:"div",id:"server-settings-server-address",children:e("settings.server.address.server.title")}),children:[u.jsx(j,{settingName:e("settings.server.address.server.label.ip"),handleChange:function(e){return G("ip",e)},value:X.ip,placeholder:"0.0.0.0"}),u.jsx(S,{settingTitle:e("settings.server.address.server.label.port"),settingValue:X.port.toString(),handleUpdate:function(e){return G("port",e)},value:X.port,defaultValue:4567,valueUnit:e("settings.server.address.server.label.port")})]}),u.jsxs(d,{subheader:u.jsx(g,{component:"div",id:"server-settings-socks-proxy",children:e("settings.server.socks_proxy.title")}),children:[u.jsxs(f,{children:[u.jsx(v,{primary:e("settings.server.socks_proxy.label.enable")}),u.jsx(P,{edge:"end",checked:X.socksProxyEnabled,onChange:function(e){return G("socksProxyEnabled",e.target.checked)}})]}),u.jsx(k,{settingName:e("settings.server.socks_proxy.label.version"),value:X.socksProxyVersion,values:[[4,{text:"4"}],[5,{text:"5"}]],handleChange:function(e){return G("socksProxyVersion",e)}}),u.jsx(j,{settingName:e("settings.server.socks_proxy.label.host"),value:X.socksProxyHost,handleChange:function(e){return G("socksProxyHost",e)}}),u.jsx(j,{settingName:e("settings.server.socks_proxy.label.port"),value:X.socksProxyPort,handleChange:function(e){return G("socksProxyPort",e)}}),u.jsx(j,{settingName:e("settings.server.socks_proxy.label.username"),value:X.socksProxyUsername,handleChange:function(e){return G("socksProxyUsername",e)}}),u.jsx(j,{settingName:e("settings.server.socks_proxy.label.password"),value:X.socksProxyPassword,handleChange:function(e){return G("socksProxyPassword",e)},isPassword:!0})]}),u.jsxs(d,{subheader:u.jsx(g,{component:"div",id:"server-settings-auth",children:e("settings.server.auth.title")}),children:[u.jsxs(f,{children:[u.jsx(v,{primary:e("settings.server.auth.basic.label.enable")}),u.jsx(P,{edge:"end",checked:X.basicAuthEnabled,onChange:function(e){return G("basicAuthEnabled",e.target.checked)}})]}),u.jsx(j,{settingName:e("settings.server.auth.basic.label.username"),value:X.basicAuthUsername,handleChange:function(e){return G("basicAuthUsername",e)}}),u.jsx(j,{settingName:e("settings.server.auth.basic.label.password"),value:X.basicAuthPassword,isPassword:!0,handleChange:function(e){return G("basicAuthPassword",e)}})]}),u.jsxs(d,{subheader:u.jsx(g,{component:"div",id:"server-settings-clouadflare-bypass",children:e("settings.server.cloudflare.title")}),children:[u.jsxs(f,{children:[u.jsx(v,{primary:e("settings.server.cloudflare.flaresolverr.enabled.label.title"),secondary:u.jsxs(_,{i18nKey:"settings.server.cloudflare.flaresolverr.enabled.label.description",children:["See"," ",u.jsx(E,{href:"https://github.com/FlareSolverr/FlareSolverr?tab=readme-ov-file#installation",target:"_blank",rel:"noreferrer",children:"FlareSolverr"})," ","for information on how to set it up"]})}),u.jsx(P,{edge:"end",checked:X.flareSolverrEnabled,onChange:function(e){return G("flareSolverrEnabled",e.target.checked)}})]}),u.jsx(j,{settingName:e("settings.server.cloudflare.flaresolverr.url.label.title"),dialogDescription:e("settings.server.cloudflare.flaresolverr.url.label.description"),value:X.flareSolverrUrl,handleChange:function(e){return G("flareSolverrUrl",e)}}),u.jsx(S,{settingTitle:e("settings.server.cloudflare.flaresolverr.timeout.label.title"),settingValue:e("global.time.seconds.value",{count:X.flareSolverrTimeout}),dialogDescription:e("settings.server.cloudflare.flaresolverr.timeout.label.description"),value:X.flareSolverrTimeout,defaultValue:60,minValue:20,maxValue:300,stepSize:1,showSlider:!0,valueUnit:e("global.time.seconds.second_other"),handleUpdate:function(e){return G("flareSolverrTimeout",e)}}),u.jsx(j,{settingName:e("settings.server.cloudflare.flaresolverr.session.name.label.title"),value:X.flareSolverrSessionName,handleChange:function(e){return G("flareSolverrSessionName",e)}}),u.jsx(S,{settingTitle:e("settings.server.cloudflare.flaresolverr.session.ttl.label.title"),settingValue:e("global.time.minutes.value",{count:X.flareSolverrSessionTtl}),dialogDescription:e("settings.server.cloudflare.flaresolverr.session.ttl.label.description"),value:X.flareSolverrSessionTtl,defaultValue:15,minValue:1,maxValue:60,stepSize:1,showSlider:!0,valueUnit:e("global.time.minutes.minute_other"),handleUpdate:function(e){return G("flareSolverrSessionTtl",e)}}),u.jsxs(f,{children:[u.jsx(v,{primary:e("settings.server.cloudflare.flaresolverr.response_fallback.label.title"),secondary:e("settings.server.cloudflare.flaresolverr.response_fallback.label.description")}),u.jsx(P,{edge:"end",checked:X.flareSolverrAsResponseFallback,onChange:function(e){return G("flareSolverrAsResponseFallback",e.target.checked)}})]})]}),u.jsxs(d,{subheader:u.jsx(g,{component:"div",id:"server-settings-misc",children:e("settings.server.misc.title")}),children:[u.jsxs(f,{children:[u.jsx(v,{primary:e("settings.server.misc.log_level.label.server")}),u.jsx(P,{edge:"end",checked:X.debugLogsEnabled,onChange:function(e){return G("debugLogsEnabled",e.target.checked)}})]}),u.jsxs(f,{children:[u.jsx(v,{primary:e("settings.server.misc.log_level.graphql.label.title"),secondary:e("settings.server.misc.log_level.graphql.label.description")}),u.jsx(P,{edge:"end",checked:X.gqlDebugLogsEnabled,onChange:function(e){return G("gqlDebugLogsEnabled",e.target.checked)}})]}),u.jsxs(f,{children:[u.jsx(v,{primary:e("settings.server.misc.tray_icon.label.title"),secondary:e("settings.server.misc.tray_icon.label.description")}),u.jsx(P,{edge:"end",checked:X.systemTrayEnabled,onChange:function(e){return G("systemTrayEnabled",e.target.checked)}})]}),u.jsx(S,{settingTitle:e("settings.server.misc.log_files.file_cleanup.title"),settingValue:t(X.maxLogFiles),value:X.maxLogFiles,valueUnit:e("global.date.label.day_one"),handleUpdate:function(e){return G("maxLogFiles",e)}}),u.jsx(j,{settingName:e("settings.server.misc.log_files.file_size.title"),value:X.maxLogFileSize,dialogDescription:e("settings.server.misc.log_files.file_size.description"),validate:function(e){return!!e.match(/^[0-9]+(|kb|KB|mb|MB|gb|GB)$/g)},handleChange:function(e){return G("maxLogFileSize",e)}}),u.jsx(j,{settingName:e("settings.server.misc.log_files.total_size.title"),value:X.maxLogFolderSize,dialogDescription:e("settings.server.misc.log_files.total_size.description"),validate:function(e){return!!e.match(/^[0-9]+(|kb|KB|mb|MB|gb|GB)$/g)},handleChange:function(e){return G("maxLogFolderSize",e)}})]})]})}))}}}))}();
