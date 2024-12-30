import{u as M,f as m,N as B,q as D,r as b,g as R,j as s,v as o,aY as c,aO as i,aD as n,k as H,E as I,l as x,m as P,bR as q,as as G,ab as _,y as K,n as L}from"./index-Bp7za-bN.js";import{T as t}from"./TextSetting-Ca59yNhT.js";import{N as v}from"./NumberSetting-pU-MLa9B.js";import{S as $}from"./SelectSetting-cCUzEktz.js";import{S as d}from"./Switch-MCizPxrt.js";import"./PasswordTextField-BBSatqm2.js";import"./Info-CEWiOLXz.js";const O=e=>({ip:e.ip,port:e.port,socksProxyEnabled:e.socksProxyEnabled,socksProxyVersion:e.socksProxyVersion,socksProxyHost:e.socksProxyHost,socksProxyPort:e.socksProxyPort,socksProxyUsername:e.socksProxyUsername,socksProxyPassword:e.socksProxyPassword,debugLogsEnabled:e.debugLogsEnabled,systemTrayEnabled:e.systemTrayEnabled,maxLogFiles:e.maxLogFiles,maxLogFileSize:e.maxLogFileSize,maxLogFolderSize:e.maxLogFolderSize,basicAuthEnabled:e.basicAuthEnabled,basicAuthUsername:e.basicAuthUsername,basicAuthPassword:e.basicAuthPassword,flareSolverrEnabled:e.flareSolverrEnabled,flareSolverrTimeout:e.flareSolverrTimeout,flareSolverrUrl:e.flareSolverrUrl,flareSolverrSessionName:e.flareSolverrSessionName,flareSolverrSessionTtl:e.flareSolverrSessionTtl,flareSolverrAsResponseFallback:e.flareSolverrAsResponseFallback}),Y=e=>e===0?_("global.label.never"):_("settings.server.misc.log_files.file_cleanup.value",{days:e,count:e}),ae=()=>{const{t:e}=M(),{setTitle:f,setAction:p}=m.useContext(B);m.useLayoutEffect(()=>(f(e("settings.server.title.settings")),p(null),()=>{f(""),p(null)}),[e]);const{settings:{serverInformAvailableUpdate:S},loading:E,request:{error:g,refetch:C}}=D(),U=K(r=>L(e("global.error.label.failed_to_save_changes"),"error",x(r))),{data:T,loading:A,error:y,refetch:F}=b.useGetServerSettings({notifyOnNetworkStatusChange:!0}),[N]=b.useUpdateServerSettings(),[j,w]=R("serverBaseURL",window.location.origin),V=r=>{const h=r.replaceAll(/(\/)+$/g,"");w(h),b.reset()},l=(r,h)=>{N({variables:{input:{settings:{[r]:h}}}}).catch(z=>L(e("global.error.label.failed_to_save_changes"),"error",x(z)))},u=m.useMemo(()=>s.jsxs(o,{subheader:s.jsx(c,{component:"div",id:"server-settings-client",children:e("global.label.client")}),children:[s.jsx(t,{settingName:e("settings.about.server.label.address"),handleChange:V,value:j,placeholder:"http://localhost:4567"}),s.jsxs(i,{children:[s.jsx(n,{primary:e("global.update.settings.inform.label.title"),secondary:e("global.update.settings.inform.label.description")}),s.jsx(d,{edge:"end",checked:S,onChange:r=>U("serverInformAvailableUpdate",r.target.checked)})]})]}),[j,S]);if(E||A)return s.jsxs(s.Fragment,{children:[u,s.jsx(H,{})]});const k=g!=null?g:y;if(k)return s.jsxs(s.Fragment,{children:[u,s.jsx(I,{message:e("global.error.label.failed_to_load_data"),messageExtra:x(k),retry:()=>{g&&C().catch(P()),y&&F().catch(P())}})]});const a=O(T.settings);return s.jsxs(o,{sx:{pt:0},children:[u,s.jsxs(o,{subheader:s.jsx(c,{component:"div",id:"server-settings-server-address",children:e("settings.server.address.server.title")}),children:[s.jsx(t,{settingName:e("settings.server.address.server.label.ip"),handleChange:r=>l("ip",r),value:a.ip,placeholder:"0.0.0.0"}),s.jsx(v,{settingTitle:e("settings.server.address.server.label.port"),settingValue:a.port.toString(),handleUpdate:r=>l("port",r),value:a.port,defaultValue:4567,valueUnit:e("settings.server.address.server.label.port")})]}),s.jsxs(o,{subheader:s.jsx(c,{component:"div",id:"server-settings-socks-proxy",children:e("settings.server.socks_proxy.title")}),children:[s.jsxs(i,{children:[s.jsx(n,{primary:e("settings.server.socks_proxy.label.enable")}),s.jsx(d,{edge:"end",checked:a.socksProxyEnabled,onChange:r=>l("socksProxyEnabled",r.target.checked)})]}),s.jsx($,{settingName:e("settings.server.socks_proxy.label.version"),value:a.socksProxyVersion,values:[[4,{text:"4"}],[5,{text:"5"}]],handleChange:r=>l("socksProxyVersion",r)}),s.jsx(t,{settingName:e("settings.server.socks_proxy.label.host"),value:a.socksProxyHost,handleChange:r=>l("socksProxyHost",r)}),s.jsx(t,{settingName:e("settings.server.socks_proxy.label.port"),value:a.socksProxyPort,handleChange:r=>l("socksProxyPort",r)}),s.jsx(t,{settingName:e("settings.server.socks_proxy.label.username"),value:a.socksProxyUsername,handleChange:r=>l("socksProxyUsername",r)}),s.jsx(t,{settingName:e("settings.server.socks_proxy.label.password"),value:a.socksProxyPassword,handleChange:r=>l("socksProxyPassword",r),isPassword:!0})]}),s.jsxs(o,{subheader:s.jsx(c,{component:"div",id:"server-settings-auth",children:e("settings.server.auth.title")}),children:[s.jsxs(i,{children:[s.jsx(n,{primary:e("settings.server.auth.basic.label.enable")}),s.jsx(d,{edge:"end",checked:a.basicAuthEnabled,onChange:r=>l("basicAuthEnabled",r.target.checked)})]}),s.jsx(t,{settingName:e("settings.server.auth.basic.label.username"),value:a.basicAuthUsername,handleChange:r=>l("basicAuthUsername",r)}),s.jsx(t,{settingName:e("settings.server.auth.basic.label.password"),value:a.basicAuthPassword,isPassword:!0,handleChange:r=>l("basicAuthPassword",r)})]}),s.jsxs(o,{subheader:s.jsx(c,{component:"div",id:"server-settings-clouadflare-bypass",children:e("settings.server.cloudflare.title")}),children:[s.jsxs(i,{children:[s.jsx(n,{primary:e("settings.server.cloudflare.flaresolverr.enabled.label.title"),secondary:s.jsxs(q,{i18nKey:"settings.server.cloudflare.flaresolverr.enabled.label.description",children:["See"," ",s.jsx(G,{href:"https://github.com/FlareSolverr/FlareSolverr?tab=readme-ov-file#installation",target:"_blank",rel:"noreferrer",children:"FlareSolverr"})," ","for information on how to set it up"]})}),s.jsx(d,{edge:"end",checked:a.flareSolverrEnabled,onChange:r=>l("flareSolverrEnabled",r.target.checked)})]}),s.jsx(t,{settingName:e("settings.server.cloudflare.flaresolverr.url.label.title"),dialogDescription:e("settings.server.cloudflare.flaresolverr.url.label.description"),value:a.flareSolverrUrl,handleChange:r=>l("flareSolverrUrl",r)}),s.jsx(v,{settingTitle:e("settings.server.cloudflare.flaresolverr.timeout.label.title"),settingValue:e("global.time.seconds.value",{count:a.flareSolverrTimeout}),dialogDescription:e("settings.server.cloudflare.flaresolverr.timeout.label.description"),value:a.flareSolverrTimeout,defaultValue:60,minValue:20,maxValue:60*5,stepSize:1,showSlider:!0,valueUnit:e("global.time.seconds.second_other"),handleUpdate:r=>l("flareSolverrTimeout",r)}),s.jsx(t,{settingName:e("settings.server.cloudflare.flaresolverr.session.name.label.title"),value:a.flareSolverrSessionName,handleChange:r=>l("flareSolverrSessionName",r)}),s.jsx(v,{settingTitle:e("settings.server.cloudflare.flaresolverr.session.ttl.label.title"),settingValue:e("global.time.minutes.value",{count:a.flareSolverrSessionTtl}),dialogDescription:e("settings.server.cloudflare.flaresolverr.session.ttl.label.description"),value:a.flareSolverrSessionTtl,defaultValue:15,minValue:1,maxValue:60,stepSize:1,showSlider:!0,valueUnit:e("global.time.minutes.minute_other"),handleUpdate:r=>l("flareSolverrSessionTtl",r)}),s.jsxs(i,{children:[s.jsx(n,{primary:e("settings.server.cloudflare.flaresolverr.response_fallback.label.title"),secondary:e("settings.server.cloudflare.flaresolverr.response_fallback.label.description")}),s.jsx(d,{edge:"end",checked:a.flareSolverrAsResponseFallback,onChange:r=>l("flareSolverrAsResponseFallback",r.target.checked)})]})]}),s.jsxs(o,{subheader:s.jsx(c,{component:"div",id:"server-settings-misc",children:e("settings.server.misc.title")}),children:[s.jsxs(i,{children:[s.jsx(n,{primary:e("settings.server.misc.log_level.label.server")}),s.jsx(d,{edge:"end",checked:a.debugLogsEnabled,onChange:r=>l("debugLogsEnabled",r.target.checked)})]}),s.jsxs(i,{children:[s.jsx(n,{primary:e("settings.server.misc.tray_icon.label.title"),secondary:e("settings.server.misc.tray_icon.label.description")}),s.jsx(d,{edge:"end",checked:a.systemTrayEnabled,onChange:r=>l("systemTrayEnabled",r.target.checked)})]}),s.jsx(v,{settingTitle:e("settings.server.misc.log_files.file_cleanup.title"),settingValue:Y(a.maxLogFiles),value:a.maxLogFiles,valueUnit:e("global.date.label.day_one"),handleUpdate:r=>l("maxLogFiles",r)}),s.jsx(t,{settingName:e("settings.server.misc.log_files.file_size.title"),value:a.maxLogFileSize,dialogDescription:e("settings.server.misc.log_files.file_size.description"),validate:r=>!!r.match(/^[0-9]+(|kb|KB|mb|MB|gb|GB)$/g),handleChange:r=>l("maxLogFileSize",r)}),s.jsx(t,{settingName:e("settings.server.misc.log_files.total_size.title"),value:a.maxLogFolderSize,dialogDescription:e("settings.server.misc.log_files.total_size.description"),validate:r=>!!r.match(/^[0-9]+(|kb|KB|mb|MB|gb|GB)$/g),handleChange:r=>l("maxLogFolderSize",r)})]})]})};export{ae as ServerSettings};