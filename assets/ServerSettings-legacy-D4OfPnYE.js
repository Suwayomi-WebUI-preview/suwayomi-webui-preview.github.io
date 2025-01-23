!function(){function e(r){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(r)}function r(r,s,t){return(s=function(r){var s=function(r,s){if("object"!=e(r)||!r)return r;var t=r[Symbol.toPrimitive];if(void 0!==t){var n=t.call(r,s||"default");if("object"!=e(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===s?String:Number)(r)}(r,"string");return"symbol"==e(s)?s:s+""}(s))in r?Object.defineProperty(r,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[s]=t,r}function s(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var s=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=s){var t,n,l,a,o=[],i=!0,c=!1;try{if(l=(s=s.call(e)).next,0===r){if(Object(s)!==s)return;i=!1}else for(;!(i=(t=l.call(s)).done)&&(o.push(t.value),o.length!==r);i=!0);}catch(e){c=!0,n=e}finally{try{if(!i&&null!=s.return&&(a=s.return(),Object(a)!==a))return}finally{if(c)throw n}}return o}}(e,r)||function(e,r){if(e){if("string"==typeof e)return t(e,r);var s={}.toString.call(e).slice(8,-1);return"Object"===s&&e.constructor&&(s=e.constructor.name),"Map"===s||"Set"===s?Array.from(e):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?t(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var s=0,t=Array(r);s<r;s++)t[s]=e[s];return t}System.register(["./index-legacy-DESf5n9D.js","./TextSetting-legacy-G7h-j4I5.js","./NumberSetting-legacy-Cipj9gC5.js","./SelectSetting-legacy-CydXr4Id.js","./Switch-legacy-DUc9Lf9R.js","./PasswordTextField-legacy-DQWXQoXe.js","./Info-legacy-CcOLL6eh.js"],(function(e,t){"use strict";var n,l,a,o,i,c,u,d,g,f,v,b,h,m,x,y,p,S,j,k,P,_,w,A;return{setters:[function(e){n=e.u,l=e.f,a=e.h,o=e.q,i=e.r,c=e.g,u=e.j,d=e.v,g=e.aW,f=e.aM,v=e.aB,b=e.l,h=e.E,m=e.m,x=e.n,y=e.bG,p=e.aq,S=e.aa,j=e.y,k=e.o},function(e){P=e.T},function(e){_=e.N},function(e){w=e.S},function(e){A=e.S},null,null],execute:function(){var t=function(e){return 0===e?S("global.label.never"):S("settings.server.misc.log_files.file_cleanup.value",{days:e,count:e})};e("ServerSettings",(function(){var e=n().t,S=l(),U=S.setTitle,E=S.setAction;a.useLayoutEffect((function(){return U(e("settings.server.title.settings")),E(null),function(){U(""),E(null)}}),[e]);var T=o(),F=T.settings.serverInformAvailableUpdate,C=T.loading,N=T.request,L=N.error,V=N.refetch,z=j((function(r){return k(e("global.error.label.failed_to_save_changes"),"error",m(r))})),B=i.useGetServerSettings({notifyOnNetworkStatusChange:!0}),I=B.data,R=B.loading,D=B.error,M=B.refetch,O=s(i.useUpdateServerSettings(),1)[0],G=s(c("serverBaseURL",window.location.origin),2),H=G[0],$=G[1],q=function(e){var r=e.replaceAll(/(\/)+$/g,"");$(r),i.reset()},K=function(s,t){O({variables:{input:{settings:r({},s,t)}}}).catch((function(r){return k(e("global.error.label.failed_to_save_changes"),"error",m(r))}))},W=a.useMemo((function(){return u.jsxs(d,{subheader:u.jsx(g,{component:"div",id:"server-settings-client",children:e("global.label.client")}),children:[u.jsx(P,{settingName:e("settings.about.server.label.address"),handleChange:q,value:H,placeholder:"http://localhost:4567"}),u.jsxs(f,{children:[u.jsx(v,{primary:e("global.update.settings.inform.label.title"),secondary:e("global.update.settings.inform.label.description")}),u.jsx(A,{edge:"end",checked:F,onChange:function(e){return z("serverInformAvailableUpdate",e.target.checked)}})]})]})}),[H,F]);if(C||R)return u.jsxs(u.Fragment,{children:[W,u.jsx(b,{})]});var J=null!=L?L:D;if(J)return u.jsxs(u.Fragment,{children:[W,u.jsx(h,{message:e("global.error.label.failed_to_load_data"),messageExtra:m(J),retry:function(){L&&V().catch(x()),D&&M().catch(x())}})]});var Q,X={ip:(Q=I.settings).ip,port:Q.port,socksProxyEnabled:Q.socksProxyEnabled,socksProxyVersion:Q.socksProxyVersion,socksProxyHost:Q.socksProxyHost,socksProxyPort:Q.socksProxyPort,socksProxyUsername:Q.socksProxyUsername,socksProxyPassword:Q.socksProxyPassword,debugLogsEnabled:Q.debugLogsEnabled,systemTrayEnabled:Q.systemTrayEnabled,maxLogFiles:Q.maxLogFiles,maxLogFileSize:Q.maxLogFileSize,maxLogFolderSize:Q.maxLogFolderSize,basicAuthEnabled:Q.basicAuthEnabled,basicAuthUsername:Q.basicAuthUsername,basicAuthPassword:Q.basicAuthPassword,flareSolverrEnabled:Q.flareSolverrEnabled,flareSolverrTimeout:Q.flareSolverrTimeout,flareSolverrUrl:Q.flareSolverrUrl,flareSolverrSessionName:Q.flareSolverrSessionName,flareSolverrSessionTtl:Q.flareSolverrSessionTtl,flareSolverrAsResponseFallback:Q.flareSolverrAsResponseFallback};return u.jsxs(d,{sx:{pt:0},children:[W,u.jsxs(d,{subheader:u.jsx(g,{component:"div",id:"server-settings-server-address",children:e("settings.server.address.server.title")}),children:[u.jsx(P,{settingName:e("settings.server.address.server.label.ip"),handleChange:function(e){return K("ip",e)},value:X.ip,placeholder:"0.0.0.0"}),u.jsx(_,{settingTitle:e("settings.server.address.server.label.port"),settingValue:X.port.toString(),handleUpdate:function(e){return K("port",e)},value:X.port,defaultValue:4567,valueUnit:e("settings.server.address.server.label.port")})]}),u.jsxs(d,{subheader:u.jsx(g,{component:"div",id:"server-settings-socks-proxy",children:e("settings.server.socks_proxy.title")}),children:[u.jsxs(f,{children:[u.jsx(v,{primary:e("settings.server.socks_proxy.label.enable")}),u.jsx(A,{edge:"end",checked:X.socksProxyEnabled,onChange:function(e){return K("socksProxyEnabled",e.target.checked)}})]}),u.jsx(w,{settingName:e("settings.server.socks_proxy.label.version"),value:X.socksProxyVersion,values:[[4,{text:"4"}],[5,{text:"5"}]],handleChange:function(e){return K("socksProxyVersion",e)}}),u.jsx(P,{settingName:e("settings.server.socks_proxy.label.host"),value:X.socksProxyHost,handleChange:function(e){return K("socksProxyHost",e)}}),u.jsx(P,{settingName:e("settings.server.socks_proxy.label.port"),value:X.socksProxyPort,handleChange:function(e){return K("socksProxyPort",e)}}),u.jsx(P,{settingName:e("settings.server.socks_proxy.label.username"),value:X.socksProxyUsername,handleChange:function(e){return K("socksProxyUsername",e)}}),u.jsx(P,{settingName:e("settings.server.socks_proxy.label.password"),value:X.socksProxyPassword,handleChange:function(e){return K("socksProxyPassword",e)},isPassword:!0})]}),u.jsxs(d,{subheader:u.jsx(g,{component:"div",id:"server-settings-auth",children:e("settings.server.auth.title")}),children:[u.jsxs(f,{children:[u.jsx(v,{primary:e("settings.server.auth.basic.label.enable")}),u.jsx(A,{edge:"end",checked:X.basicAuthEnabled,onChange:function(e){return K("basicAuthEnabled",e.target.checked)}})]}),u.jsx(P,{settingName:e("settings.server.auth.basic.label.username"),value:X.basicAuthUsername,handleChange:function(e){return K("basicAuthUsername",e)}}),u.jsx(P,{settingName:e("settings.server.auth.basic.label.password"),value:X.basicAuthPassword,isPassword:!0,handleChange:function(e){return K("basicAuthPassword",e)}})]}),u.jsxs(d,{subheader:u.jsx(g,{component:"div",id:"server-settings-clouadflare-bypass",children:e("settings.server.cloudflare.title")}),children:[u.jsxs(f,{children:[u.jsx(v,{primary:e("settings.server.cloudflare.flaresolverr.enabled.label.title"),secondary:u.jsxs(y,{i18nKey:"settings.server.cloudflare.flaresolverr.enabled.label.description",children:["See"," ",u.jsx(p,{href:"https://github.com/FlareSolverr/FlareSolverr?tab=readme-ov-file#installation",target:"_blank",rel:"noreferrer",children:"FlareSolverr"})," ","for information on how to set it up"]})}),u.jsx(A,{edge:"end",checked:X.flareSolverrEnabled,onChange:function(e){return K("flareSolverrEnabled",e.target.checked)}})]}),u.jsx(P,{settingName:e("settings.server.cloudflare.flaresolverr.url.label.title"),dialogDescription:e("settings.server.cloudflare.flaresolverr.url.label.description"),value:X.flareSolverrUrl,handleChange:function(e){return K("flareSolverrUrl",e)}}),u.jsx(_,{settingTitle:e("settings.server.cloudflare.flaresolverr.timeout.label.title"),settingValue:e("global.time.seconds.value",{count:X.flareSolverrTimeout}),dialogDescription:e("settings.server.cloudflare.flaresolverr.timeout.label.description"),value:X.flareSolverrTimeout,defaultValue:60,minValue:20,maxValue:300,stepSize:1,showSlider:!0,valueUnit:e("global.time.seconds.second_other"),handleUpdate:function(e){return K("flareSolverrTimeout",e)}}),u.jsx(P,{settingName:e("settings.server.cloudflare.flaresolverr.session.name.label.title"),value:X.flareSolverrSessionName,handleChange:function(e){return K("flareSolverrSessionName",e)}}),u.jsx(_,{settingTitle:e("settings.server.cloudflare.flaresolverr.session.ttl.label.title"),settingValue:e("global.time.minutes.value",{count:X.flareSolverrSessionTtl}),dialogDescription:e("settings.server.cloudflare.flaresolverr.session.ttl.label.description"),value:X.flareSolverrSessionTtl,defaultValue:15,minValue:1,maxValue:60,stepSize:1,showSlider:!0,valueUnit:e("global.time.minutes.minute_other"),handleUpdate:function(e){return K("flareSolverrSessionTtl",e)}}),u.jsxs(f,{children:[u.jsx(v,{primary:e("settings.server.cloudflare.flaresolverr.response_fallback.label.title"),secondary:e("settings.server.cloudflare.flaresolverr.response_fallback.label.description")}),u.jsx(A,{edge:"end",checked:X.flareSolverrAsResponseFallback,onChange:function(e){return K("flareSolverrAsResponseFallback",e.target.checked)}})]})]}),u.jsxs(d,{subheader:u.jsx(g,{component:"div",id:"server-settings-misc",children:e("settings.server.misc.title")}),children:[u.jsxs(f,{children:[u.jsx(v,{primary:e("settings.server.misc.log_level.label.server")}),u.jsx(A,{edge:"end",checked:X.debugLogsEnabled,onChange:function(e){return K("debugLogsEnabled",e.target.checked)}})]}),u.jsxs(f,{children:[u.jsx(v,{primary:e("settings.server.misc.tray_icon.label.title"),secondary:e("settings.server.misc.tray_icon.label.description")}),u.jsx(A,{edge:"end",checked:X.systemTrayEnabled,onChange:function(e){return K("systemTrayEnabled",e.target.checked)}})]}),u.jsx(_,{settingTitle:e("settings.server.misc.log_files.file_cleanup.title"),settingValue:t(X.maxLogFiles),value:X.maxLogFiles,valueUnit:e("global.date.label.day_one"),handleUpdate:function(e){return K("maxLogFiles",e)}}),u.jsx(P,{settingName:e("settings.server.misc.log_files.file_size.title"),value:X.maxLogFileSize,dialogDescription:e("settings.server.misc.log_files.file_size.description"),validate:function(e){return!!e.match(/^[0-9]+(|kb|KB|mb|MB|gb|GB)$/g)},handleChange:function(e){return K("maxLogFileSize",e)}}),u.jsx(P,{settingName:e("settings.server.misc.log_files.total_size.title"),value:X.maxLogFolderSize,dialogDescription:e("settings.server.misc.log_files.total_size.description"),validate:function(e){return!!e.match(/^[0-9]+(|kb|KB|mb|MB|gb|GB)$/g)},handleChange:function(e){return K("maxLogFolderSize",e)}})]})]})}))}}}))}();
