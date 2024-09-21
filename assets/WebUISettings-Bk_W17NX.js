import{u as N,a as u,c as S,j as t,k as j,ax as f,a3 as U,bq as c,br as g,bs as I,N as V,p as F,g as R,E as P,h as _,v as W,m as A}from"./index-BwnpkvpE.js";import{N as y}from"./NumberSetting-DRL03o7c.js";import{u as M,g as B}from"./usePersistedValue-By0s1SZ-.js";import{S as x}from"./Switch-B-FwG5SL.js";import{T as H}from"./TextSetting-D6EIaRMC.js";import{S as m}from"./SelectSetting-D8Wo5cV6.js";import"./Info-DNEGDZh4.js";import"./TextField-BxpA5jQl.js";import"./InputAdornment-GDUkZDVc.js";import"./SwitchBase-CbxL9fNa.js";import"./PasswordTextField-DQI0yegl.js";import"./Select-BiiXiPsK.js";const L=23,q=1,D=23,K=({disabled:e=!1,updateCheckInterval:r})=>{const{t:l}=N(),b=!!r,[p]=u.useUpdateServerSettings(),[i,h]=M("lastUpdateCheckInterval",L,r,B),d=S.useCallback(s=>{h(s===0?i:s),p({variables:{input:{settings:{webUIUpdateCheckInterval:s}}}})},[i]),w=s=>{d(s?i:0)};return t.jsxs(j,{children:[t.jsxs(f,{children:[t.jsx(U,{primary:l("settings.webui.auto_update.label.title")}),t.jsx(x,{disabled:e,edge:"end",checked:b,onChange:s=>w(s.target.checked)})]}),t.jsx(y,{settingTitle:l("settings.webui.auto_update.label.interval"),settingValue:l("library.settings.global_update.auto_update.interval.label.value",{hours:i}),value:i,minValue:q,maxValue:D,defaultValue:L,showSlider:!0,valueUnit:l("global.time.hour_short"),handleUpdate:d,disabled:e||!b})]})},Y=Object.values(c),G={[c.Webui]:{text:"settings.webui.title.webui",description:"settings.webui.flavor.option.webui.label.description",disclaimer:"settings.webui.flavor.label.info"},[c.Vui]:{text:"settings.webui.flavor.option.vui.label.title",description:"settings.webui.flavor.option.vui.label.description",disclaimer:"settings.webui.flavor.label.info"},[c.Custom]:{text:"settings.webui.flavor.option.custom.label.title",description:"settings.webui.flavor.option.custom.label.description"}},Q=Y.map(e=>[e,G[e]]),X=Object.values(g),z={[g.Bundled]:{text:"settings.webui.channel.option.bundled.label.title",description:"settings.webui.channel.option.bundled.label.description",disclaimer:"settings.webui.flavor.label.info"},[g.Stable]:{text:"settings.webui.channel.option.stable.label.title",description:"settings.webui.channel.option.stable.label.description",disclaimer:"settings.webui.flavor.label.info"},[g.Preview]:{text:"settings.webui.channel.option.preview.label.title",description:"settings.webui.channel.option.preview.label.description",disclaimer:"settings.webui.channel.option.preview.label.disclaimer"}},J=X.map(e=>[e,z[e]]),Z=Object.values(I),$={[I.Browser]:{text:"settings.webui.interface.option.label.browser",description:"settings.webui.interface.label.description"},[I.Electron]:{text:"settings.webui.interface.option.label.electron",description:"settings.webui.interface.label.description"}},ee=Z.map(e=>[e,$[e]]),te=e=>({webUIFlavor:e.webUIFlavor,initialOpenInBrowserEnabled:e.initialOpenInBrowserEnabled,webUIInterface:e.webUIInterface,electronPath:e.electronPath,webUIChannel:e.webUIChannel,webUIUpdateCheckInterval:e.webUIUpdateCheckInterval}),he=()=>{const{t:e}=N(),{setTitle:r,setAction:l}=S.useContext(V);S.useEffect(()=>(r(e("settings.webui.title.settings")),l(null),()=>{r(""),l(null)}),[e]);const{settings:{webUIInformAvailableUpdate:b},loading:p,request:{error:i,refetch:h}}=F(),d=W(()=>A(e("global.error.label.failed_to_save_changes"),"error")),{data:w,loading:s,error:v,refetch:T}=u.useGetServerSettings({notifyOnNetworkStatusChange:!0}),[O]=u.useUpdateServerSettings(),o=(a,k)=>{a==="webUIChannel"&&u.graphQLClient.client.cache.evict({fieldName:"checkForWebUIUpdate"}),O({variables:{input:{settings:{[a]:k}}}}).catch(()=>A(e("global.error.label.failed_to_save_changes"),"error"))};if(p||s)return t.jsx(R,{});const E=i!=null?i:v;if(E)return t.jsx(P,{message:e("global.error.label.failed_to_load_data"),messageExtra:E.message,retry:()=>{i&&h().catch(_()),v&&T().catch(_())}});const n=te(w.settings),C=n.webUIFlavor===c.Custom;return t.jsxs(j,{sx:{pt:0},children:[t.jsx(m,{settingName:e("settings.webui.flavor.label.title"),value:n.webUIFlavor,values:Q,handleChange:a=>o("webUIFlavor",a)}),t.jsxs(f,{children:[t.jsx(U,{primary:e("settings.webui.label.initial_open_browser")}),t.jsx(x,{edge:"end",checked:n.initialOpenInBrowserEnabled,onChange:a=>o("initialOpenInBrowserEnabled",a.target.checked)})]}),t.jsx(m,{settingName:e("settings.webui.interface.label.title"),value:n.webUIInterface,values:ee,handleChange:a=>o("webUIInterface",a)}),t.jsx(H,{settingName:e("settings.webui.electron_path.label.title"),dialogDescription:e("settings.webui.electron_path.label.description"),value:n.electronPath,handleChange:a=>o("electronPath",a)}),t.jsx(m,{settingName:e("settings.webui.channel.label.title"),value:n.webUIChannel,values:J,handleChange:a=>o("webUIChannel",a),disabled:C}),t.jsx(K,{disabled:C,updateCheckInterval:n.webUIUpdateCheckInterval}),!n.webUIUpdateCheckInterval&&t.jsxs(f,{children:[t.jsx(U,{primary:e("global.update.settings.inform.label.title"),secondary:e("global.update.settings.inform.label.description")}),t.jsx(x,{edge:"end",checked:b,onChange:a=>d("webUIInformAvailableUpdate",a.target.checked)})]})]})};export{he as WebUISettings};
