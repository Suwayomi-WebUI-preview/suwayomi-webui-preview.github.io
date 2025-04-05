!function(){function e(r){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(r)}function r(r,s,t){return(s=function(r){var s=function(r,s){if("object"!=e(r)||!r)return r;var t=r[Symbol.toPrimitive];if(void 0!==t){var n=t.call(r,s||"default");if("object"!=e(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===s?String:Number)(r)}(r,"string");return"symbol"==e(s)?s:s+""}(s))in r?Object.defineProperty(r,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[s]=t,r}function s(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var s=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=s){var t,n,l,a,o=[],i=!0,c=!1;try{if(l=(s=s.call(e)).next,0===r){if(Object(s)!==s)return;i=!1}else for(;!(i=(t=l.call(s)).done)&&(o.push(t.value),o.length!==r);i=!0);}catch(e){c=!0,n=e}finally{try{if(!i&&null!=s.return&&(a=s.return(),Object(a)!==a))return}finally{if(c)throw n}}return o}}(e,r)||function(e,r){if(e){if("string"==typeof e)return t(e,r);var s={}.toString.call(e).slice(8,-1);return"Object"===s&&e.constructor&&(s=e.constructor.name),"Map"===s||"Set"===s?Array.from(e):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?t(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var s=0,t=Array(r);s<r;s++)t[s]=e[s];return t}System.register(["./index-legacy-D8aQ3gEo.js","./TextSetting-legacy-CZozB_JS.js","./NumberSetting-legacy-BL4-xbmn.js","./SelectSetting-legacy-DRr8xHwS.js","./PasswordTextField-legacy-sJeB3SDV.js"],(function(e,t){"use strict";var n,l,a,o,i,c,u,d,g,f,v,b,h,m,x,y,p,S,j,k,P,_,A,w;return{setters:[function(e){n=e.u,l=e.g,a=e.i,o=e.x,i=e.r,c=e.h,u=e.j,d=e.G,g=e.a_,f=e.aS,v=e.a$,b=e.y,h=e.bb,m=e.m,x=e.E,y=e.n,p=e.o,S=e.bV,j=e.aJ,k=e.q,P=e.ak},function(e){_=e.T},function(e){A=e.N},function(e){w=e.S},null],execute:function(){var t=function(e){return 0===e?P("global.label.never"):P("settings.server.misc.log_files.file_cleanup.value",{days:e,count:e})};e("ServerSettings",(function(){var e=n().t,P=l(),E=P.setTitle,U=P.setAction;a.useLayoutEffect((function(){return E(e("settings.server.title.server")),U(null),function(){E(""),U(null)}}),[e]);var T=o(),F=T.settings.serverInformAvailableUpdate,C=T.loading,N=T.request,L=N.error,V=N.refetch,z=b((function(r){return k(e("global.error.label.failed_to_save_changes"),"error",y(r))})),B=i.useGetServerSettings({notifyOnNetworkStatusChange:!0}),D=B.data,I=B.loading,O=B.error,R=B.refetch,$=s(i.useUpdateServerSettings(),1)[0],G=s(c("serverBaseURL",window.location.origin),2),H=G[0],M=G[1],K=function(e){var r=e.replaceAll(/(\/)+$/g,"");M(r),i.reset()},q=function(s,t){$({variables:{input:{settings:r({},s,t)}}}).catch((function(r){return k(e("global.error.label.failed_to_save_changes"),"error",y(r))}))},J=a.useMemo((function(){return u.jsxs(d,{subheader:u.jsx(h,{component:"div",id:"server-settings-client",children:e("global.label.client")}),children:[u.jsx(_,{settingName:e("settings.about.server.label.address"),handleChange:K,value:H,placeholder:"http://localhost:4567"}),u.jsxs(g,{children:[u.jsx(f,{primary:e("global.update.settings.inform.label.title"),secondary:e("global.update.settings.inform.label.description")}),u.jsx(v,{edge:"end",checked:F,onChange:function(e){return z("serverInformAvailableUpdate",e.target.checked)}})]})]})}),[H,F]);if(C||I)return u.jsxs(u.Fragment,{children:[J,u.jsx(m,{})]});var X=null!=L?L:O;if(X)return u.jsxs(u.Fragment,{children:[J,u.jsx(x,{message:e("global.error.label.failed_to_load_data"),messageExtra:y(X),retry:function(){L&&V().catch(p()),O&&R().catch(p())}})]});var Q,W={ip:(Q=D.settings).ip,port:Q.port,socksProxyEnabled:Q.socksProxyEnabled,socksProxyVersion:Q.socksProxyVersion,socksProxyHost:Q.socksProxyHost,socksProxyPort:Q.socksProxyPort,socksProxyUsername:Q.socksProxyUsername,socksProxyPassword:Q.socksProxyPassword,debugLogsEnabled:Q.debugLogsEnabled,systemTrayEnabled:Q.systemTrayEnabled,maxLogFiles:Q.maxLogFiles,maxLogFileSize:Q.maxLogFileSize,maxLogFolderSize:Q.maxLogFolderSize,basicAuthEnabled:Q.basicAuthEnabled,basicAuthUsername:Q.basicAuthUsername,basicAuthPassword:Q.basicAuthPassword,flareSolverrEnabled:Q.flareSolverrEnabled,flareSolverrTimeout:Q.flareSolverrTimeout,flareSolverrUrl:Q.flareSolverrUrl,flareSolverrSessionName:Q.flareSolverrSessionName,flareSolverrSessionTtl:Q.flareSolverrSessionTtl,flareSolverrAsResponseFallback:Q.flareSolverrAsResponseFallback};return u.jsxs(d,{sx:{pt:0},children:[J,u.jsxs(d,{subheader:u.jsx(h,{component:"div",id:"server-settings-server-address",children:e("settings.server.address.server.title")}),children:[u.jsx(_,{settingName:e("settings.server.address.server.label.ip"),handleChange:function(e){return q("ip",e)},value:W.ip,placeholder:"0.0.0.0"}),u.jsx(A,{settingTitle:e("settings.server.address.server.label.port"),settingValue:W.port.toString(),handleUpdate:function(e){return q("port",e)},value:W.port,defaultValue:4567,valueUnit:e("settings.server.address.server.label.port")})]}),u.jsxs(d,{subheader:u.jsx(h,{component:"div",id:"server-settings-socks-proxy",children:e("settings.server.socks_proxy.title")}),children:[u.jsxs(g,{children:[u.jsx(f,{primary:e("settings.server.socks_proxy.label.enable")}),u.jsx(v,{edge:"end",checked:W.socksProxyEnabled,onChange:function(e){return q("socksProxyEnabled",e.target.checked)}})]}),u.jsx(w,{settingName:e("settings.server.socks_proxy.label.version"),value:W.socksProxyVersion,values:[[4,{text:"4"}],[5,{text:"5"}]],handleChange:function(e){return q("socksProxyVersion",e)}}),u.jsx(_,{settingName:e("settings.server.socks_proxy.label.host"),value:W.socksProxyHost,handleChange:function(e){return q("socksProxyHost",e)}}),u.jsx(_,{settingName:e("settings.server.socks_proxy.label.port"),value:W.socksProxyPort,handleChange:function(e){return q("socksProxyPort",e)}}),u.jsx(_,{settingName:e("settings.server.socks_proxy.label.username"),value:W.socksProxyUsername,handleChange:function(e){return q("socksProxyUsername",e)}}),u.jsx(_,{settingName:e("settings.server.socks_proxy.label.password"),value:W.socksProxyPassword,handleChange:function(e){return q("socksProxyPassword",e)},isPassword:!0})]}),u.jsxs(d,{subheader:u.jsx(h,{component:"div",id:"server-settings-auth",children:e("settings.server.auth.title")}),children:[u.jsxs(g,{children:[u.jsx(f,{primary:e("settings.server.auth.basic.label.enable")}),u.jsx(v,{edge:"end",checked:W.basicAuthEnabled,onChange:function(e){return q("basicAuthEnabled",e.target.checked)}})]}),u.jsx(_,{settingName:e("settings.server.auth.basic.label.username"),value:W.basicAuthUsername,handleChange:function(e){return q("basicAuthUsername",e)}}),u.jsx(_,{settingName:e("settings.server.auth.basic.label.password"),value:W.basicAuthPassword,isPassword:!0,handleChange:function(e){return q("basicAuthPassword",e)}})]}),u.jsxs(d,{subheader:u.jsx(h,{component:"div",id:"server-settings-clouadflare-bypass",children:e("settings.server.cloudflare.title")}),children:[u.jsxs(g,{children:[u.jsx(f,{primary:e("settings.server.cloudflare.flaresolverr.enabled.label.title"),secondary:u.jsxs(S,{i18nKey:"settings.server.cloudflare.flaresolverr.enabled.label.description",children:["See"," ",u.jsx(j,{href:"https://github.com/FlareSolverr/FlareSolverr?tab=readme-ov-file#installation",target:"_blank",rel:"noreferrer",children:"FlareSolverr"})," ","for information on how to set it up"]})}),u.jsx(v,{edge:"end",checked:W.flareSolverrEnabled,onChange:function(e){return q("flareSolverrEnabled",e.target.checked)}})]}),u.jsx(_,{settingName:e("settings.server.cloudflare.flaresolverr.url.label.title"),dialogDescription:e("settings.server.cloudflare.flaresolverr.url.label.description"),value:W.flareSolverrUrl,handleChange:function(e){return q("flareSolverrUrl",e)}}),u.jsx(A,{settingTitle:e("settings.server.cloudflare.flaresolverr.timeout.label.title"),settingValue:e("global.time.seconds.value",{count:W.flareSolverrTimeout}),dialogDescription:e("settings.server.cloudflare.flaresolverr.timeout.label.description"),value:W.flareSolverrTimeout,defaultValue:60,minValue:20,maxValue:300,stepSize:1,showSlider:!0,valueUnit:e("global.time.seconds.second_other"),handleUpdate:function(e){return q("flareSolverrTimeout",e)}}),u.jsx(_,{settingName:e("settings.server.cloudflare.flaresolverr.session.name.label.title"),value:W.flareSolverrSessionName,handleChange:function(e){return q("flareSolverrSessionName",e)}}),u.jsx(A,{settingTitle:e("settings.server.cloudflare.flaresolverr.session.ttl.label.title"),settingValue:e("global.time.minutes.value",{count:W.flareSolverrSessionTtl}),dialogDescription:e("settings.server.cloudflare.flaresolverr.session.ttl.label.description"),value:W.flareSolverrSessionTtl,defaultValue:15,minValue:1,maxValue:60,stepSize:1,showSlider:!0,valueUnit:e("global.time.minutes.minute_other"),handleUpdate:function(e){return q("flareSolverrSessionTtl",e)}}),u.jsxs(g,{children:[u.jsx(f,{primary:e("settings.server.cloudflare.flaresolverr.response_fallback.label.title"),secondary:e("settings.server.cloudflare.flaresolverr.response_fallback.label.description")}),u.jsx(v,{edge:"end",checked:W.flareSolverrAsResponseFallback,onChange:function(e){return q("flareSolverrAsResponseFallback",e.target.checked)}})]})]}),u.jsxs(d,{subheader:u.jsx(h,{component:"div",id:"server-settings-misc",children:e("settings.server.misc.title")}),children:[u.jsxs(g,{children:[u.jsx(f,{primary:e("settings.server.misc.log_level.label.server")}),u.jsx(v,{edge:"end",checked:W.debugLogsEnabled,onChange:function(e){return q("debugLogsEnabled",e.target.checked)}})]}),u.jsxs(g,{children:[u.jsx(f,{primary:e("settings.server.misc.tray_icon.label.title"),secondary:e("settings.server.misc.tray_icon.label.description")}),u.jsx(v,{edge:"end",checked:W.systemTrayEnabled,onChange:function(e){return q("systemTrayEnabled",e.target.checked)}})]}),u.jsx(A,{settingTitle:e("settings.server.misc.log_files.file_cleanup.title"),settingValue:t(W.maxLogFiles),value:W.maxLogFiles,valueUnit:e("global.date.label.day_one"),handleUpdate:function(e){return q("maxLogFiles",e)}}),u.jsx(_,{settingName:e("settings.server.misc.log_files.file_size.title"),value:W.maxLogFileSize,dialogDescription:e("settings.server.misc.log_files.file_size.description"),validate:function(e){return!!e.match(/^[0-9]+(|kb|KB|mb|MB|gb|GB)$/g)},handleChange:function(e){return q("maxLogFileSize",e)}}),u.jsx(_,{settingName:e("settings.server.misc.log_files.total_size.title"),value:W.maxLogFolderSize,dialogDescription:e("settings.server.misc.log_files.total_size.description"),validate:function(e){return!!e.match(/^[0-9]+(|kb|KB|mb|MB|gb|GB)$/g)},handleChange:function(e){return q("maxLogFolderSize",e)}})]})]})}))}}}))}();
