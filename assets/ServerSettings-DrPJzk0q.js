import{u as V,c as m,N as z,p as D,a as b,d as B,j as s,k as d,aT as c,ax as o,a3 as i,g as M,E as q,h as k,Q as P,v as R,m as _}from"./index-DRMCCeoY.js";import{T as t}from"./TextSetting-D5BSYF_I.js";import{N as v}from"./NumberSetting-7ZnPu6vC.js";import{S as H}from"./SelectSetting-CAITyFpf.js";import{S as n}from"./Switch-Cd_DFV58.js";import{T as I}from"./Trans-DoWxt64_.js";import{L as G}from"./Link-DvjkoWZT.js";import"./PasswordTextField-VTtQM7fv.js";import"./TextField-C00KWYJ7.js";import"./InputAdornment-D6sgKKlS.js";import"./Info-DM8VcukM.js";import"./Select-yKstr75i.js";import"./SwitchBase-DbWKMhI0.js";const K=e=>({ip:e.ip,port:e.port,socksProxyEnabled:e.socksProxyEnabled,socksProxyVersion:e.socksProxyVersion,socksProxyHost:e.socksProxyHost,socksProxyPort:e.socksProxyPort,socksProxyUsername:e.socksProxyUsername,socksProxyPassword:e.socksProxyPassword,debugLogsEnabled:e.debugLogsEnabled,gqlDebugLogsEnabled:e.gqlDebugLogsEnabled,systemTrayEnabled:e.systemTrayEnabled,maxLogFiles:e.maxLogFiles,maxLogFileSize:e.maxLogFileSize,maxLogFolderSize:e.maxLogFolderSize,basicAuthEnabled:e.basicAuthEnabled,basicAuthUsername:e.basicAuthUsername,basicAuthPassword:e.basicAuthPassword,flareSolverrEnabled:e.flareSolverrEnabled,flareSolverrTimeout:e.flareSolverrTimeout,flareSolverrUrl:e.flareSolverrUrl,flareSolverrSessionName:e.flareSolverrSessionName,flareSolverrSessionTtl:e.flareSolverrSessionTtl,flareSolverrAsResponseFallback:e.flareSolverrAsResponseFallback}),$=e=>e===0?P("global.label.never"):P("settings.server.misc.log_files.file_cleanup.value",{days:e,count:e}),ie=()=>{const{t:e}=V(),{setTitle:x,setAction:p}=m.useContext(z);m.useLayoutEffect(()=>(x(e("settings.server.title.settings")),p(null),()=>{x(""),p(null)}),[e]);const{settings:{serverInformAvailableUpdate:f},loading:L,request:{error:g,refetch:E}}=D(),C=R(()=>_(e("global.error.label.failed_to_save_changes"),"error")),{data:T,loading:U,error:S,refetch:A}=b.useGetServerSettings({notifyOnNetworkStatusChange:!0}),[F]=b.useUpdateServerSettings(),[y,N]=B("serverBaseURL",window.location.origin),w=r=>{const h=r.replaceAll(/(\/)+$/g,"");N(h),b.reset()},l=(r,h)=>{F({variables:{input:{settings:{[r]:h}}}}).catch(()=>_(e("global.error.label.failed_to_save_changes"),"error"))},u=m.useMemo(()=>s.jsxs(d,{subheader:s.jsx(c,{component:"div",id:"server-settings-client",children:e("global.label.client")}),children:[s.jsx(t,{settingName:e("settings.about.server.label.address"),handleChange:w,value:y,placeholder:"http://localhost:4567"}),s.jsxs(o,{children:[s.jsx(i,{primary:e("global.update.settings.inform.label.title"),secondary:e("global.update.settings.inform.label.description")}),s.jsx(n,{edge:"end",checked:f,onChange:r=>C("serverInformAvailableUpdate",r.target.checked)})]})]}),[y,f]);if(L||U)return s.jsxs(s.Fragment,{children:[u,s.jsx(M,{})]});const j=g!=null?g:S;if(j)return s.jsxs(s.Fragment,{children:[u,s.jsx(q,{message:e("global.error.label.failed_to_load_data"),messageExtra:j.message,retry:()=>{g&&E().catch(k()),S&&A().catch(k())}})]});const a=K(T.settings);return s.jsxs(d,{sx:{pt:0},children:[u,s.jsxs(d,{subheader:s.jsx(c,{component:"div",id:"server-settings-server-address",children:e("settings.server.address.server.title")}),children:[s.jsx(t,{settingName:e("settings.server.address.server.label.ip"),handleChange:r=>l("ip",r),value:a.ip,placeholder:"0.0.0.0"}),s.jsx(v,{settingTitle:e("settings.server.address.server.label.port"),settingValue:a.port.toString(),handleUpdate:r=>l("port",r),value:a.port,defaultValue:4567,valueUnit:e("settings.server.address.server.label.port")})]}),s.jsxs(d,{subheader:s.jsx(c,{component:"div",id:"server-settings-socks-proxy",children:e("settings.server.socks_proxy.title")}),children:[s.jsxs(o,{children:[s.jsx(i,{primary:e("settings.server.socks_proxy.label.enable")}),s.jsx(n,{edge:"end",checked:a.socksProxyEnabled,onChange:r=>l("socksProxyEnabled",r.target.checked)})]}),s.jsx(H,{settingName:e("settings.server.socks_proxy.label.version"),value:a.socksProxyVersion,values:[[4,{text:"4"}],[5,{text:"5"}]],handleChange:r=>l("socksProxyVersion",r)}),s.jsx(t,{settingName:e("settings.server.socks_proxy.label.host"),value:a.socksProxyHost,handleChange:r=>l("socksProxyHost",r)}),s.jsx(t,{settingName:e("settings.server.socks_proxy.label.port"),value:a.socksProxyPort,handleChange:r=>l("socksProxyPort",r)}),s.jsx(t,{settingName:e("settings.server.socks_proxy.label.username"),value:a.socksProxyUsername,handleChange:r=>l("socksProxyUsername",r)}),s.jsx(t,{settingName:e("settings.server.socks_proxy.label.password"),value:a.socksProxyPassword,handleChange:r=>l("socksProxyPassword",r),isPassword:!0})]}),s.jsxs(d,{subheader:s.jsx(c,{component:"div",id:"server-settings-auth",children:e("settings.server.auth.title")}),children:[s.jsxs(o,{children:[s.jsx(i,{primary:e("settings.server.auth.basic.label.enable")}),s.jsx(n,{edge:"end",checked:a.basicAuthEnabled,onChange:r=>l("basicAuthEnabled",r.target.checked)})]}),s.jsx(t,{settingName:e("settings.server.auth.basic.label.username"),value:a.basicAuthUsername,handleChange:r=>l("basicAuthUsername",r)}),s.jsx(t,{settingName:e("settings.server.auth.basic.label.password"),value:a.basicAuthPassword,isPassword:!0,handleChange:r=>l("basicAuthPassword",r)})]}),s.jsxs(d,{subheader:s.jsx(c,{component:"div",id:"server-settings-clouadflare-bypass",children:e("settings.server.cloudflare.title")}),children:[s.jsxs(o,{children:[s.jsx(i,{primary:e("settings.server.cloudflare.flaresolverr.enabled.label.title"),secondary:s.jsxs(I,{i18nKey:"settings.server.cloudflare.flaresolverr.enabled.label.description",children:["See"," ",s.jsx(G,{href:"https://github.com/FlareSolverr/FlareSolverr?tab=readme-ov-file#installation",target:"_blank",rel:"noreferrer",children:"FlareSolverr"})," ","for information on how to set it up"]})}),s.jsx(n,{edge:"end",checked:a.flareSolverrEnabled,onChange:r=>l("flareSolverrEnabled",r.target.checked)})]}),s.jsx(t,{settingName:e("settings.server.cloudflare.flaresolverr.url.label.title"),dialogDescription:e("settings.server.cloudflare.flaresolverr.url.label.description"),value:a.flareSolverrUrl,handleChange:r=>l("flareSolverrUrl",r)}),s.jsx(v,{settingTitle:e("settings.server.cloudflare.flaresolverr.timeout.label.title"),settingValue:e("global.time.seconds.value",{count:a.flareSolverrTimeout}),dialogDescription:e("settings.server.cloudflare.flaresolverr.timeout.label.description"),value:a.flareSolverrTimeout,defaultValue:60,minValue:20,maxValue:60*5,stepSize:1,showSlider:!0,valueUnit:e("global.time.seconds.second_other"),handleUpdate:r=>l("flareSolverrTimeout",r)}),s.jsx(t,{settingName:e("settings.server.cloudflare.flaresolverr.session.name.label.title"),value:a.flareSolverrSessionName,handleChange:r=>l("flareSolverrSessionName",r)}),s.jsx(v,{settingTitle:e("settings.server.cloudflare.flaresolverr.session.ttl.label.title"),settingValue:e("global.time.minutes.value",{count:a.flareSolverrSessionTtl}),dialogDescription:e("settings.server.cloudflare.flaresolverr.session.ttl.label.description"),value:a.flareSolverrSessionTtl,defaultValue:15,minValue:1,maxValue:60,stepSize:1,showSlider:!0,valueUnit:e("global.time.minutes.minute_other"),handleUpdate:r=>l("flareSolverrSessionTtl",r)}),s.jsxs(o,{children:[s.jsx(i,{primary:e("settings.server.cloudflare.flaresolverr.response_fallback.label.title"),secondary:e("settings.server.cloudflare.flaresolverr.response_fallback.label.description")}),s.jsx(n,{edge:"end",checked:a.flareSolverrAsResponseFallback,onChange:r=>l("flareSolverrAsResponseFallback",r.target.checked)})]})]}),s.jsxs(d,{subheader:s.jsx(c,{component:"div",id:"server-settings-misc",children:e("settings.server.misc.title")}),children:[s.jsxs(o,{children:[s.jsx(i,{primary:e("settings.server.misc.log_level.label.server")}),s.jsx(n,{edge:"end",checked:a.debugLogsEnabled,onChange:r=>l("debugLogsEnabled",r.target.checked)})]}),s.jsxs(o,{children:[s.jsx(i,{primary:e("settings.server.misc.log_level.graphql.label.title"),secondary:e("settings.server.misc.log_level.graphql.label.description")}),s.jsx(n,{edge:"end",checked:a.gqlDebugLogsEnabled,onChange:r=>l("gqlDebugLogsEnabled",r.target.checked)})]}),s.jsxs(o,{children:[s.jsx(i,{primary:e("settings.server.misc.tray_icon.label.title"),secondary:e("settings.server.misc.tray_icon.label.description")}),s.jsx(n,{edge:"end",checked:a.systemTrayEnabled,onChange:r=>l("systemTrayEnabled",r.target.checked)})]}),s.jsx(v,{settingTitle:e("settings.server.misc.log_files.file_cleanup.title"),settingValue:$(a.maxLogFiles),value:a.maxLogFiles,valueUnit:e("global.date.label.day_one"),handleUpdate:r=>l("maxLogFiles",r)}),s.jsx(t,{settingName:e("settings.server.misc.log_files.file_size.title"),value:a.maxLogFileSize,dialogDescription:e("settings.server.misc.log_files.file_size.description"),validate:r=>!!r.match(/^[0-9]+(|kb|KB|mb|MB|gb|GB)$/g),handleChange:r=>l("maxLogFileSize",r)}),s.jsx(t,{settingName:e("settings.server.misc.log_files.total_size.title"),value:a.maxLogFolderSize,dialogDescription:e("settings.server.misc.log_files.total_size.description"),validate:r=>!!r.match(/^[0-9]+(|kb|KB|mb|MB|gb|GB)$/g),handleChange:r=>l("maxLogFolderSize",r)})]})]})};export{ie as ServerSettings};
