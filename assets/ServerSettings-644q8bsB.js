import{u as L,c as h,N as V,q,a as b,d as F,j as s,l as d,aM as c,ao as o,W as n,g as M,E as D,h as k,bg as R,m as H}from"./index-DUxXg8iH.js";import{T as l}from"./TextSetting-1gwhCUbs.js";import{N as m}from"./NumberSetting-3AAEww5u.js";import{S as I}from"./SelectSetting-9SSHH-KU.js";import{S as i}from"./Switch-CgbLCr72.js";import{T as B}from"./Trans-D1HLThxR.js";import{L as z}from"./Link-D-WMnR99.js";import"./PasswordTextField-ChOAKTEi.js";import"./TextField-C9O1SlXj.js";import"./InputAdornment-CyyA-vkU.js";import"./Info-CdsGsehq.js";import"./Select-BKigGwKA.js";import"./SwitchBase-DmwV1WlT.js";const G=e=>({ip:e.ip,port:e.port,socksProxyEnabled:e.socksProxyEnabled,socksProxyVersion:e.socksProxyVersion,socksProxyHost:e.socksProxyHost,socksProxyPort:e.socksProxyPort,socksProxyUsername:e.socksProxyUsername,socksProxyPassword:e.socksProxyPassword,debugLogsEnabled:e.debugLogsEnabled,gqlDebugLogsEnabled:e.gqlDebugLogsEnabled,systemTrayEnabled:e.systemTrayEnabled,basicAuthEnabled:e.basicAuthEnabled,basicAuthUsername:e.basicAuthUsername,basicAuthPassword:e.basicAuthPassword,flareSolverrEnabled:e.flareSolverrEnabled,flareSolverrTimeout:e.flareSolverrTimeout,flareSolverrUrl:e.flareSolverrUrl,flareSolverrSessionName:e.flareSolverrSessionName,flareSolverrSessionTtl:e.flareSolverrSessionTtl,flareSolverrAsResponseFallback:e.flareSolverrAsResponseFallback}),le=()=>{const{t:e}=L(),{setTitle:x,setAction:p}=h.useContext(V);h.useEffect(()=>(x(e("settings.server.title.settings")),p(null),()=>{x(""),p(null)}),[e]);const{settings:{serverInformAvailableUpdate:f},loading:P,request:{error:g,refetch:E}}=q(),T=R(()=>H(e("global.error.label.failed_to_save_changes"),"error")),{data:A,loading:C,error:S,refetch:U}=b.useGetServerSettings({notifyOnNetworkStatusChange:!0}),[_]=b.useUpdateServerSettings(),[y,w]=F("serverBaseURL",window.location.origin),N=r=>{const u=r.replaceAll(/(\/)+$/g,"");w(u),b.reset()},t=(r,u)=>{_({variables:{input:{settings:{[r]:u}}}})},v=h.useMemo(()=>s.jsxs(d,{subheader:s.jsx(c,{component:"div",id:"server-settings-client",children:e("global.label.client")}),children:[s.jsx(l,{settingName:e("settings.about.server.label.address"),handleChange:N,value:y,placeholder:"http://localhost:4567"}),s.jsxs(o,{children:[s.jsx(n,{primary:e("global.update.settings.inform.label.title"),secondary:e("global.update.settings.inform.label.description")}),s.jsx(i,{edge:"end",checked:f,onChange:r=>T("serverInformAvailableUpdate",r.target.checked)})]})]}),[y,f]);if(P||C)return s.jsxs(s.Fragment,{children:[v,s.jsx(M,{})]});const j=g!=null?g:S;if(j)return s.jsxs(s.Fragment,{children:[v,s.jsx(D,{message:e("global.error.label.failed_to_load_data"),messageExtra:j.message,retry:()=>{g&&E().catch(k()),S&&U().catch(k())}})]});const a=G(A.settings);return s.jsxs(d,{children:[v,s.jsxs(d,{subheader:s.jsx(c,{component:"div",id:"server-settings-server-address",children:e("settings.server.address.server.title")}),children:[s.jsx(l,{settingName:e("settings.server.address.server.label.ip"),handleChange:r=>t("ip",r),value:a.ip,placeholder:"0.0.0.0"}),s.jsx(m,{settingTitle:e("settings.server.address.server.label.port"),settingValue:a.port.toString(),handleUpdate:r=>t("port",r),value:a.port,defaultValue:4567,valueUnit:e("settings.server.address.server.label.port")})]}),s.jsxs(d,{subheader:s.jsx(c,{component:"div",id:"server-settings-socks-proxy",children:e("settings.server.socks_proxy.title")}),children:[s.jsxs(o,{children:[s.jsx(n,{primary:e("settings.server.socks_proxy.label.enable")}),s.jsx(i,{edge:"end",checked:a.socksProxyEnabled,onChange:r=>t("socksProxyEnabled",r.target.checked)})]}),s.jsx(I,{settingName:e("settings.server.socks_proxy.label.version"),value:a.socksProxyVersion,values:[[4,{text:"4"}],[5,{text:"5"}]],handleChange:r=>t("socksProxyVersion",r)}),s.jsx(l,{settingName:e("settings.server.socks_proxy.label.host"),value:a.socksProxyHost,handleChange:r=>t("socksProxyHost",r)}),s.jsx(l,{settingName:e("settings.server.socks_proxy.label.port"),value:a.socksProxyPort,handleChange:r=>t("socksProxyPort",r)}),s.jsx(l,{settingName:e("settings.server.socks_proxy.label.username"),value:a.socksProxyUsername,handleChange:r=>t("socksProxyUsername",r)}),s.jsx(l,{settingName:e("settings.server.socks_proxy.label.password"),value:a.socksProxyPassword,handleChange:r=>t("socksProxyPassword",r),isPassword:!0})]}),s.jsxs(d,{subheader:s.jsx(c,{component:"div",id:"server-settings-auth",children:e("settings.server.auth.title")}),children:[s.jsxs(o,{children:[s.jsx(n,{primary:e("settings.server.auth.basic.label.enable")}),s.jsx(i,{edge:"end",checked:a.basicAuthEnabled,onChange:r=>t("basicAuthEnabled",r.target.checked)})]}),s.jsx(l,{settingName:e("settings.server.auth.basic.label.username"),value:a.basicAuthUsername,handleChange:r=>t("basicAuthUsername",r)}),s.jsx(l,{settingName:e("settings.server.auth.basic.label.password"),value:a.basicAuthPassword,isPassword:!0,handleChange:r=>t("basicAuthPassword",r)})]}),s.jsxs(d,{subheader:s.jsx(c,{component:"div",id:"server-settings-clouadflare-bypass",children:e("settings.server.cloudflare.title")}),children:[s.jsxs(o,{children:[s.jsx(n,{primary:e("settings.server.cloudflare.flaresolverr.enabled.label.title"),secondary:s.jsxs(B,{i18nKey:"settings.server.cloudflare.flaresolverr.enabled.label.description",children:["See"," ",s.jsx(z,{href:"https://github.com/FlareSolverr/FlareSolverr?tab=readme-ov-file#installation",target:"_blank",rel:"noreferrer",children:"FlareSolverr"})," ","for information on how to set it up"]})}),s.jsx(i,{edge:"end",checked:a.flareSolverrEnabled,onChange:r=>t("flareSolverrEnabled",r.target.checked)})]}),s.jsx(l,{settingName:e("settings.server.cloudflare.flaresolverr.url.label.title"),dialogDescription:e("settings.server.cloudflare.flaresolverr.url.label.description"),value:a.flareSolverrUrl,handleChange:r=>t("flareSolverrUrl",r)}),s.jsx(m,{settingTitle:e("settings.server.cloudflare.flaresolverr.timeout.label.title"),settingValue:e("global.time.seconds.value",{count:a.flareSolverrTimeout}),dialogDescription:e("settings.server.cloudflare.flaresolverr.timeout.label.description"),value:a.flareSolverrTimeout,defaultValue:60,minValue:20,maxValue:60*5,stepSize:1,showSlider:!0,valueUnit:e("global.time.seconds.second_other"),handleUpdate:r=>t("flareSolverrTimeout",r)}),s.jsx(l,{settingName:e("settings.server.cloudflare.flaresolverr.session.name.label.title"),value:a.flareSolverrSessionName,handleChange:r=>t("flareSolverrSessionName",r)}),s.jsx(m,{settingTitle:e("settings.server.cloudflare.flaresolverr.session.ttl.label.title"),settingValue:e("global.time.minutes.value",{count:a.flareSolverrSessionTtl}),dialogDescription:e("settings.server.cloudflare.flaresolverr.session.ttl.label.description"),value:a.flareSolverrSessionTtl,defaultValue:15,minValue:1,maxValue:60,stepSize:1,showSlider:!0,valueUnit:e("global.time.minutes.minute_other"),handleUpdate:r=>t("flareSolverrSessionTtl",r)}),s.jsxs(o,{children:[s.jsx(n,{primary:e("settings.server.cloudflare.flaresolverr.response_fallback.label.title"),secondary:e("settings.server.cloudflare.flaresolverr.response_fallback.label.description")}),s.jsx(i,{edge:"end",checked:a.flareSolverrAsResponseFallback,onChange:r=>t("flareSolverrAsResponseFallback",r.target.checked)})]})]}),s.jsxs(d,{subheader:s.jsx(c,{component:"div",id:"server-settings-misc",children:e("settings.server.misc.title")}),children:[s.jsxs(o,{children:[s.jsx(n,{primary:e("settings.server.misc.log_level.label.server")}),s.jsx(i,{edge:"end",checked:a.debugLogsEnabled,onChange:r=>t("debugLogsEnabled",r.target.checked)})]}),s.jsxs(o,{children:[s.jsx(n,{primary:e("settings.server.misc.log_level.graphql.label.title"),secondary:e("settings.server.misc.log_level.graphql.label.description")}),s.jsx(i,{edge:"end",checked:a.gqlDebugLogsEnabled,onChange:r=>t("gqlDebugLogsEnabled",r.target.checked)})]}),s.jsxs(o,{children:[s.jsx(n,{primary:e("settings.server.misc.tray_icon.label.title"),secondary:e("settings.server.misc.tray_icon.label.description")}),s.jsx(i,{edge:"end",checked:a.systemTrayEnabled,onChange:r=>t("systemTrayEnabled",r.target.checked)})]})]})]})};export{le as ServerSettings};
