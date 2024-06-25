import{u as L,c as h,N as V,o as q,a as b,d as D,j as s,l as o,aF as c,aj as n,O as i,g as M,E as F,h as k,b6 as H,m as I}from"./index-CrbHiwnJ.js";import{T as l}from"./TextSetting-BOJJfIFi.js";import{N as m}from"./NumberSetting-CFNS6kqI.js";import{S as B}from"./SelectSetting-OW3Z2h62.js";import{S as d}from"./Switch-B5Z4d44R.js";import{T as z}from"./Trans-AT9oxT67.js";import{L as O}from"./Link-BZKPFvIA.js";import"./PasswordTextField-BjqZNWv-.js";import"./TextField-aOMVH-3m.js";import"./InputAdornment-Dz-CR9fm.js";import"./Info-C8CGaEhJ.js";import"./Select-C4Yogjin.js";import"./SwitchBase-BYwdG6da.js";const R=e=>({ip:e.ip,port:e.port,socksProxyEnabled:e.socksProxyEnabled,socksProxyVersion:e.socksProxyVersion,socksProxyHost:e.socksProxyHost,socksProxyPort:e.socksProxyPort,socksProxyUsername:e.socksProxyUsername,socksProxyPassword:e.socksProxyPassword,debugLogsEnabled:e.debugLogsEnabled,gqlDebugLogsEnabled:e.gqlDebugLogsEnabled,systemTrayEnabled:e.systemTrayEnabled,basicAuthEnabled:e.basicAuthEnabled,basicAuthUsername:e.basicAuthUsername,basicAuthPassword:e.basicAuthPassword,flareSolverrEnabled:e.flareSolverrEnabled,flareSolverrTimeout:e.flareSolverrTimeout,flareSolverrUrl:e.flareSolverrUrl,flareSolverrSessionName:e.flareSolverrSessionName,flareSolverrSessionTtl:e.flareSolverrSessionTtl}),le=()=>{const{t:e}=L(),{setTitle:x,setAction:p}=h.useContext(V);h.useEffect(()=>(x(e("settings.server.title.settings")),p(null),()=>{x(""),p(null)}),[e]);const{settings:{serverInformAvailableUpdate:S},loading:P,request:{error:g,refetch:E}}=q(),T=H(()=>I(e("global.error.label.failed_to_save_changes"),"error")),{data:U,loading:C,error:f,refetch:_}=b.useGetServerSettings({notifyOnNetworkStatusChange:!0}),[w]=b.useUpdateServerSettings(),[y,A]=D("serverBaseURL",window.location.origin),N=r=>{const u=r.replaceAll(/(\/)+$/g,"");A(u),b.reset()},a=(r,u)=>{w({variables:{input:{settings:{[r]:u}}}})},v=h.useMemo(()=>s.jsxs(o,{subheader:s.jsx(c,{component:"div",id:"server-settings-client",children:e("global.label.client")}),children:[s.jsx(l,{settingName:e("settings.about.server.label.address"),handleChange:N,value:y,placeholder:"http://localhost:4567"}),s.jsxs(n,{children:[s.jsx(i,{primary:e("global.update.settings.inform.label.title"),secondary:e("global.update.settings.inform.label.description")}),s.jsx(d,{edge:"end",checked:S,onChange:r=>T("serverInformAvailableUpdate",r.target.checked)})]})]}),[y,S]);if(P||C)return s.jsxs(s.Fragment,{children:[v,s.jsx(M,{})]});const j=g!=null?g:f;if(j)return s.jsxs(s.Fragment,{children:[v,s.jsx(F,{message:e("global.error.label.failed_to_load_data"),messageExtra:j.message,retry:()=>{g&&E().catch(k()),f&&_().catch(k())}})]});const t=R(U.settings);return s.jsxs(o,{children:[v,s.jsxs(o,{subheader:s.jsx(c,{component:"div",id:"server-settings-server-address",children:e("settings.server.address.server.title")}),children:[s.jsx(l,{settingName:e("settings.server.address.server.label.ip"),handleChange:r=>a("ip",r),value:t.ip,placeholder:"0.0.0.0"}),s.jsx(m,{settingTitle:e("settings.server.address.server.label.port"),settingValue:t.port.toString(),handleUpdate:r=>a("port",r),value:t.port,defaultValue:4567,valueUnit:e("settings.server.address.server.label.port")})]}),s.jsxs(o,{subheader:s.jsx(c,{component:"div",id:"server-settings-socks-proxy",children:e("settings.server.socks_proxy.title")}),children:[s.jsxs(n,{children:[s.jsx(i,{primary:e("settings.server.socks_proxy.label.enable")}),s.jsx(d,{edge:"end",checked:t.socksProxyEnabled,onChange:r=>a("socksProxyEnabled",r.target.checked)})]}),s.jsx(B,{settingName:e("settings.server.socks_proxy.label.version"),value:t.socksProxyVersion,values:[[4,{text:"4"}],[5,{text:"5"}]],handleChange:r=>a("socksProxyVersion",r)}),s.jsx(l,{settingName:e("settings.server.socks_proxy.label.host"),value:t.socksProxyHost,handleChange:r=>a("socksProxyHost",r)}),s.jsx(l,{settingName:e("settings.server.socks_proxy.label.port"),value:t.socksProxyPort,handleChange:r=>a("socksProxyPort",r)}),s.jsx(l,{settingName:e("settings.server.socks_proxy.label.username"),value:t.socksProxyUsername,handleChange:r=>a("socksProxyUsername",r)}),s.jsx(l,{settingName:e("settings.server.socks_proxy.label.password"),value:t.socksProxyPassword,handleChange:r=>a("socksProxyPassword",r),isPassword:!0})]}),s.jsxs(o,{subheader:s.jsx(c,{component:"div",id:"server-settings-auth",children:e("settings.server.auth.title")}),children:[s.jsxs(n,{children:[s.jsx(i,{primary:e("settings.server.auth.basic.label.enable")}),s.jsx(d,{edge:"end",checked:t.basicAuthEnabled,onChange:r=>a("basicAuthEnabled",r.target.checked)})]}),s.jsx(l,{settingName:e("settings.server.auth.basic.label.username"),value:t.basicAuthUsername,handleChange:r=>a("basicAuthUsername",r)}),s.jsx(l,{settingName:e("settings.server.auth.basic.label.password"),value:t.basicAuthPassword,isPassword:!0,handleChange:r=>a("basicAuthPassword",r)})]}),s.jsxs(o,{subheader:s.jsx(c,{component:"div",id:"server-settings-clouadflare-bypass",children:e("settings.server.cloudflare.title")}),children:[s.jsxs(n,{children:[s.jsx(i,{primary:e("settings.server.cloudflare.flaresolverr.enabled.label.title"),secondary:s.jsxs(z,{i18nKey:"settings.server.cloudflare.flaresolverr.enabled.label.description",children:["See"," ",s.jsx(O,{href:"https://github.com/FlareSolverr/FlareSolverr?tab=readme-ov-file#installation",target:"_blank",rel:"noreferrer",children:"FlareSolverr"})," ","for information on how to set it up"]})}),s.jsx(d,{edge:"end",checked:t.flareSolverrEnabled,onChange:r=>a("flareSolverrEnabled",r.target.checked)})]}),s.jsx(l,{settingName:e("settings.server.cloudflare.flaresolverr.url.label.title"),dialogDescription:e("settings.server.cloudflare.flaresolverr.url.label.description"),value:t.flareSolverrUrl,handleChange:r=>a("flareSolverrUrl",r)}),s.jsx(m,{settingTitle:e("settings.server.cloudflare.flaresolverr.timeout.label.title"),settingValue:e("global.time.seconds.value",{count:t.flareSolverrTimeout}),dialogDescription:e("settings.server.cloudflare.flaresolverr.timeout.label.description"),value:t.flareSolverrTimeout,defaultValue:60,minValue:20,maxValue:60*5,stepSize:1,showSlider:!0,valueUnit:e("global.time.seconds.second_other"),handleUpdate:r=>a("flareSolverrTimeout",r)}),s.jsx(l,{settingName:e("settings.server.cloudflare.flaresolverr.session.name.label.title"),value:t.flareSolverrSessionName,handleChange:r=>a("flareSolverrSessionName",r)}),s.jsx(m,{settingTitle:e("settings.server.cloudflare.flaresolverr.session.ttl.label.title"),settingValue:e("global.time.minutes.value",{count:t.flareSolverrSessionTtl}),dialogDescription:e("settings.server.cloudflare.flaresolverr.session.ttl.label.description"),value:t.flareSolverrSessionTtl,defaultValue:15,minValue:1,maxValue:60,stepSize:1,showSlider:!0,valueUnit:e("global.time.minutes.minute_other"),handleUpdate:r=>a("flareSolverrSessionTtl",r)})]}),s.jsxs(o,{subheader:s.jsx(c,{component:"div",id:"server-settings-misc",children:e("settings.server.misc.title")}),children:[s.jsxs(n,{children:[s.jsx(i,{primary:e("settings.server.misc.log_level.label.server")}),s.jsx(d,{edge:"end",checked:t.debugLogsEnabled,onChange:r=>a("debugLogsEnabled",r.target.checked)})]}),s.jsxs(n,{children:[s.jsx(i,{primary:e("settings.server.misc.log_level.graphql.label.title"),secondary:e("settings.server.misc.log_level.graphql.label.description")}),s.jsx(d,{edge:"end",checked:t.gqlDebugLogsEnabled,onChange:r=>a("gqlDebugLogsEnabled",r.target.checked)})]}),s.jsxs(n,{children:[s.jsx(i,{primary:e("settings.server.misc.tray_icon.label.title"),secondary:e("settings.server.misc.tray_icon.label.description")}),s.jsx(d,{edge:"end",checked:t.systemTrayEnabled,onChange:r=>a("systemTrayEnabled",r.target.checked)})]})]})]})};export{le as ServerSettings};
