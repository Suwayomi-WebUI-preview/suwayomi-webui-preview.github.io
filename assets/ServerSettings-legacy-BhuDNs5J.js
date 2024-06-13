!function(){function e(r){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(r)}function r(r,s,t){var n;return n=function(r,s){if("object"!=e(r)||!r)return r;var t=r[Symbol.toPrimitive];if(void 0!==t){var n=t.call(r,s||"default");if("object"!=e(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===s?String:Number)(r)}(s,"string"),(s="symbol"==e(n)?n:n+"")in r?Object.defineProperty(r,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[s]=t,r}function s(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var s=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=s){var t,n,l,a,o=[],i=!0,c=!1;try{if(l=(s=s.call(e)).next,0===r){if(Object(s)!==s)return;i=!1}else for(;!(i=(t=l.call(s)).done)&&(o.push(t.value),o.length!==r);i=!0);}catch(e){c=!0,n=e}finally{try{if(!i&&null!=s.return&&(a=s.return(),Object(a)!==a))return}finally{if(c)throw n}}return o}}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return t(e,r);var s=Object.prototype.toString.call(e).slice(8,-1);"Object"===s&&e.constructor&&(s=e.constructor.name);if("Map"===s||"Set"===s)return Array.from(e);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return t(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var s=0,t=new Array(r);s<r;s++)t[s]=e[s];return t}System.register(["./index-legacy-B3mt2r7I.js","./TextSetting-legacy-D8fwdGWM.js","./NumberSetting-legacy-DgNh8yDf.js","./SelectSetting-legacy-BHXePi4b.js","./Switch-legacy-9FMGQXHc.js","./Trans-legacy-DBiZlBBY.js","./Link-legacy-DV2xiH-5.js","./PasswordTextField-legacy-BfI0gEGu.js","./TextField-legacy-CdJmofUj.js","./InputAdornment-legacy-BYZVV_dT.js","./Info-legacy-DwIbohB4.js","./Select-legacy-CdZJLqUn.js","./SwitchBase-legacy-BOonIdRP.js"],(function(e,t){"use strict";var n,l,a,o,i,c,u,d,g,f,v,b,h,m,y,x,p,j,S,k,P,E;return{setters:[function(e){n=e.u,l=e.c,a=e.N,o=e.v,i=e.a,c=e.d,u=e.j,d=e.q,g=e.aM,f=e.ap,v=e.X,b=e.h,h=e.E,m=e.k,y=e.bd,x=e.n},function(e){p=e.T},function(e){j=e.N},function(e){S=e.S},function(e){k=e.S},function(e){P=e.T},function(e){E=e.L},null,null,null,null,null,null],execute:function(){e("ServerSettings",(function(){var e=n().t,t=l.useContext(a),w=t.setTitle,T=t.setAction;l.useEffect((function(){return w(e("settings.server.title.settings")),T(null),function(){w(""),T(null)}}),[e]);var A=o(),U=A.settings.serverInformAvailableUpdate,C=A.loading,_=A.request,N=_.error,V=_.refetch,L=y((function(){return x(e("global.error.label.failed_to_save_changes"),"error")})),q=i.useGetServerSettings({notifyOnNetworkStatusChange:!0}),D=q.data,F=q.loading,I=q.error,O=q.refetch,H=s(i.useUpdateServerSettings(),1)[0],M=s(c("serverBaseURL",window.location.origin),2),z=M[0],B=M[1],K=function(e){var r=e.replaceAll(/(\/)+$/g,"");B(r),i.reset()},$=function(e,s){H({variables:{input:{settings:r({},e,s)}}})},G=l.useMemo((function(){return u.jsxs(d,{subheader:u.jsx(g,{component:"div",id:"server-settings-client",children:e("global.label.client")}),children:[u.jsx(p,{settingName:e("settings.about.server.label.address"),handleChange:K,value:z,placeholder:"http://localhost:4567"}),u.jsxs(f,{children:[u.jsx(v,{primary:e("global.update.settings.inform.label.title"),secondary:e("global.update.settings.inform.label.description")}),u.jsx(k,{edge:"end",checked:U,onChange:function(e){return L("serverInformAvailableUpdate",e.target.checked)}})]})]})}),[z,U]);if(C||F)return u.jsxs(u.Fragment,{children:[G,u.jsx(b,{})]});var R=null!=N?N:I;if(R)return u.jsxs(u.Fragment,{children:[G,u.jsx(h,{message:e("global.error.label.failed_to_load_data"),messageExtra:R.message,retry:function(){N&&V().catch(m()),I&&O().catch(m())}})]});var X,J={ip:(X=D.settings).ip,port:X.port,socksProxyEnabled:X.socksProxyEnabled,socksProxyVersion:X.socksProxyVersion,socksProxyHost:X.socksProxyHost,socksProxyPort:X.socksProxyPort,socksProxyUsername:X.socksProxyUsername,socksProxyPassword:X.socksProxyPassword,debugLogsEnabled:X.debugLogsEnabled,gqlDebugLogsEnabled:X.gqlDebugLogsEnabled,systemTrayEnabled:X.systemTrayEnabled,basicAuthEnabled:X.basicAuthEnabled,basicAuthUsername:X.basicAuthUsername,basicAuthPassword:X.basicAuthPassword,flareSolverrEnabled:X.flareSolverrEnabled,flareSolverrTimeout:X.flareSolverrTimeout,flareSolverrUrl:X.flareSolverrUrl,flareSolverrSessionName:X.flareSolverrSessionName,flareSolverrSessionTtl:X.flareSolverrSessionTtl};return u.jsxs(d,{children:[G,u.jsxs(d,{subheader:u.jsx(g,{component:"div",id:"server-settings-server-address",children:e("settings.server.address.server.title")}),children:[u.jsx(p,{settingName:e("settings.server.address.server.label.ip"),handleChange:function(e){return $("ip",e)},value:J.ip,placeholder:"0.0.0.0"}),u.jsx(j,{settingTitle:e("settings.server.address.server.label.port"),settingValue:J.port.toString(),handleUpdate:function(e){return $("port",e)},value:J.port,defaultValue:4567,valueUnit:e("settings.server.address.server.label.port")})]}),u.jsxs(d,{subheader:u.jsx(g,{component:"div",id:"server-settings-socks-proxy",children:e("settings.server.socks_proxy.title")}),children:[u.jsxs(f,{children:[u.jsx(v,{primary:e("settings.server.socks_proxy.label.enable")}),u.jsx(k,{edge:"end",checked:J.socksProxyEnabled,onChange:function(e){return $("socksProxyEnabled",e.target.checked)}})]}),u.jsx(S,{settingName:e("settings.server.socks_proxy.label.version"),value:J.socksProxyVersion,values:[[4,{text:"4"}],[5,{text:"5"}]],handleChange:function(e){return $("socksProxyVersion",e)}}),u.jsx(p,{settingName:e("settings.server.socks_proxy.label.host"),value:J.socksProxyHost,handleChange:function(e){return $("socksProxyHost",e)}}),u.jsx(p,{settingName:e("settings.server.socks_proxy.label.port"),value:J.socksProxyPort,handleChange:function(e){return $("socksProxyPort",e)}}),u.jsx(p,{settingName:e("settings.server.socks_proxy.label.username"),value:J.socksProxyUsername,handleChange:function(e){return $("socksProxyUsername",e)}}),u.jsx(p,{settingName:e("settings.server.socks_proxy.label.password"),value:J.socksProxyPassword,handleChange:function(e){return $("socksProxyPassword",e)},isPassword:!0})]}),u.jsxs(d,{subheader:u.jsx(g,{component:"div",id:"server-settings-auth",children:e("settings.server.auth.title")}),children:[u.jsxs(f,{children:[u.jsx(v,{primary:e("settings.server.auth.basic.label.enable")}),u.jsx(k,{edge:"end",checked:J.basicAuthEnabled,onChange:function(e){return $("basicAuthEnabled",e.target.checked)}})]}),u.jsx(p,{settingName:e("settings.server.auth.basic.label.username"),value:J.basicAuthUsername,handleChange:function(e){return $("basicAuthUsername",e)}}),u.jsx(p,{settingName:e("settings.server.auth.basic.label.password"),value:J.basicAuthPassword,isPassword:!0,handleChange:function(e){return $("basicAuthPassword",e)}})]}),u.jsxs(d,{subheader:u.jsx(g,{component:"div",id:"server-settings-clouadflare-bypass",children:e("settings.server.cloudflare.title")}),children:[u.jsxs(f,{children:[u.jsx(v,{primary:e("settings.server.cloudflare.flaresolverr.enabled.label.title"),secondary:u.jsxs(P,{i18nKey:"settings.server.cloudflare.flaresolverr.enabled.label.description",children:["See"," ",u.jsx(E,{href:"https://github.com/FlareSolverr/FlareSolverr?tab=readme-ov-file#installation",target:"_blank",rel:"noreferrer",children:"FlareSolverr"})," ","for information on how to set it up"]})}),u.jsx(k,{edge:"end",checked:J.flareSolverrEnabled,onChange:function(e){return $("flareSolverrEnabled",e.target.checked)}})]}),u.jsx(p,{settingName:e("settings.server.cloudflare.flaresolverr.url.label.title"),dialogDescription:e("settings.server.cloudflare.flaresolverr.url.label.description"),value:J.flareSolverrUrl,handleChange:function(e){return $("flareSolverrUrl",e)}}),u.jsx(j,{settingTitle:e("settings.server.cloudflare.flaresolverr.timeout.label.title"),settingValue:e("global.time.seconds.value",{count:J.flareSolverrTimeout}),dialogDescription:e("settings.server.cloudflare.flaresolverr.timeout.label.description"),value:J.flareSolverrTimeout,defaultValue:60,minValue:20,maxValue:300,stepSize:1,showSlider:!0,valueUnit:e("global.time.seconds.second_other"),handleUpdate:function(e){return $("flareSolverrTimeout",e)}}),u.jsx(p,{settingName:e("settings.server.cloudflare.flaresolverr.session.name.label.title"),value:J.flareSolverrSessionName,handleChange:function(e){return $("flareSolverrSessionName",e)}}),u.jsx(j,{settingTitle:e("settings.server.cloudflare.flaresolverr.session.ttl.label.title"),settingValue:e("global.time.minutes.value",{count:J.flareSolverrSessionTtl}),dialogDescription:e("settings.server.cloudflare.flaresolverr.session.ttl.label.description"),value:J.flareSolverrSessionTtl,defaultValue:15,minValue:1,maxValue:60,stepSize:1,showSlider:!0,valueUnit:e("global.time.minutes.minute_other"),handleUpdate:function(e){return $("flareSolverrSessionTtl",e)}})]}),u.jsxs(d,{subheader:u.jsx(g,{component:"div",id:"server-settings-misc",children:e("settings.server.misc.title")}),children:[u.jsxs(f,{children:[u.jsx(v,{primary:e("settings.server.misc.log_level.label.server")}),u.jsx(k,{edge:"end",checked:J.debugLogsEnabled,onChange:function(e){return $("debugLogsEnabled",e.target.checked)}})]}),u.jsxs(f,{children:[u.jsx(v,{primary:e("settings.server.misc.log_level.graphql.label.title"),secondary:e("settings.server.misc.log_level.graphql.label.description")}),u.jsx(k,{edge:"end",checked:J.gqlDebugLogsEnabled,onChange:function(e){return $("gqlDebugLogsEnabled",e.target.checked)}})]}),u.jsxs(f,{children:[u.jsx(v,{primary:e("settings.server.misc.tray_icon.label.title"),secondary:e("settings.server.misc.tray_icon.label.description")}),u.jsx(k,{edge:"end",checked:J.systemTrayEnabled,onChange:function(e){return $("systemTrayEnabled",e.target.checked)}})]})]})]})}))}}}))}();
