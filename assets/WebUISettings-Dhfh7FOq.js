import{u as N,r as g,i as j,q as m,n as p,j as t,G as T,a$ as U,aT as I,b0 as _,g as P,x as y,m as R,E as M,o as A,b_ as b,y as W,b$ as x,c0 as h}from"./index-BgT5c6fp.js";import{N as B}from"./NumberSetting-fmLnA9A6.js";import{u as D,g as H}from"./usePersistedValue-BWo97ZAb.js";import{T as q}from"./TextSetting-B5L_fnQN.js";import{S}from"./SelectSetting-CQOQRaDP.js";import"./PasswordTextField-D6riaqmF.js";const L=23,K=1,Y=23,G=({disabled:e=!1,updateCheckInterval:r})=>{const{t:l}=N(),d=!!r,[w]=g.useUpdateServerSettings(),[i,v]=D("lastUpdateCheckInterval",L,r,H),u=j.useCallback(s=>{v(s===0?i:s),w({variables:{input:{settings:{webUIUpdateCheckInterval:s}}}}).catch(o=>m(l("global.error.label.failed_to_save_changes"),"error",p(o)))},[i]),f=s=>{u(s?i:0)};return t.jsxs(T,{children:[t.jsxs(U,{children:[t.jsx(I,{primary:l("settings.webui.auto_update.label.title")}),t.jsx(_,{disabled:e,edge:"end",checked:d,onChange:s=>f(s.target.checked)})]}),t.jsx(B,{settingTitle:l("settings.webui.auto_update.label.interval"),settingValue:l("library.settings.global_update.auto_update.interval.label.value",{hours:i}),value:i,minValue:K,maxValue:Y,defaultValue:L,showSlider:!0,valueUnit:l("global.time.hour_short"),handleUpdate:u,disabled:e||!d})]})},$=Object.values(b),Q={[b.Webui]:{text:"settings.webui.title.webui",description:"settings.webui.flavor.option.webui.label.description",disclaimer:"settings.webui.flavor.label.info"},[b.Vui]:{text:"settings.webui.flavor.option.vui.label.title",description:"settings.webui.flavor.option.vui.label.description",disclaimer:"settings.webui.flavor.label.info"},[b.Custom]:{text:"settings.webui.flavor.option.custom.label.title",description:"settings.webui.flavor.option.custom.label.description"}},X=$.map(e=>[e,Q[e]]),z=Object.values(h),J={[h.Bundled]:{text:"settings.webui.channel.option.bundled.label.title",description:"settings.webui.channel.option.bundled.label.description",disclaimer:"settings.webui.flavor.label.info"},[h.Stable]:{text:"settings.webui.channel.option.stable.label.title",description:"settings.webui.channel.option.stable.label.description",disclaimer:"settings.webui.flavor.label.info"},[h.Preview]:{text:"settings.webui.channel.option.preview.label.title",description:"settings.webui.channel.option.preview.label.description",disclaimer:"settings.webui.channel.option.preview.label.disclaimer"}},Z=z.map(e=>[e,J[e]]),ee=Object.values(x),te={[x.Browser]:{text:"settings.webui.interface.option.label.browser",description:"settings.webui.interface.label.description"},[x.Electron]:{text:"settings.webui.interface.option.label.electron",description:"settings.webui.interface.label.description"}},ae=ee.map(e=>[e,te[e]]),ie=e=>({webUIFlavor:e.webUIFlavor,initialOpenInBrowserEnabled:e.initialOpenInBrowserEnabled,webUIInterface:e.webUIInterface,electronPath:e.electronPath,webUIChannel:e.webUIChannel,webUIUpdateCheckInterval:e.webUIUpdateCheckInterval}),de=()=>{const{t:e}=N(),{setTitle:r,setAction:l}=P();j.useLayoutEffect(()=>(r(e("settings.webui.title.webui")),l(null),()=>{r(""),l(null)}),[e]);const{settings:{webUIInformAvailableUpdate:d},loading:w,request:{error:i,refetch:v}}=y(),u=W(a=>m(e("global.error.label.failed_to_save_changes"),"error",p(a))),{data:f,loading:s,error:o,refetch:O}=g.useGetServerSettings({notifyOnNetworkStatusChange:!0}),[V]=g.useUpdateServerSettings(),c=(a,k)=>{a==="webUIChannel"&&g.graphQLClient.client.cache.evict({fieldName:"checkForWebUIUpdate"}),V({variables:{input:{settings:{[a]:k}}}}).catch(F=>m(e("global.error.label.failed_to_save_changes"),"error",p(F)))};if(w||s)return t.jsx(R,{});const E=i!=null?i:o;if(E)return t.jsx(M,{message:e("global.error.label.failed_to_load_data"),messageExtra:p(E),retry:()=>{i&&v().catch(A()),o&&O().catch(A())}});const n=ie(f.settings),C=n.webUIFlavor===b.Custom;return t.jsxs(T,{sx:{pt:0},children:[t.jsx(S,{settingName:e("settings.webui.flavor.label.title"),value:n.webUIFlavor,values:X,handleChange:a=>c("webUIFlavor",a)}),t.jsxs(U,{children:[t.jsx(I,{primary:e("settings.webui.label.initial_open_browser")}),t.jsx(_,{edge:"end",checked:n.initialOpenInBrowserEnabled,onChange:a=>c("initialOpenInBrowserEnabled",a.target.checked)})]}),t.jsx(S,{settingName:e("settings.webui.interface.label.title"),value:n.webUIInterface,values:ae,handleChange:a=>c("webUIInterface",a)}),t.jsx(q,{settingName:e("settings.webui.electron_path.label.title"),dialogDescription:e("settings.webui.electron_path.label.description"),value:n.electronPath,settingDescription:n.electronPath.length?n.electronPath:e("global.label.default"),handleChange:a=>c("electronPath",a)}),t.jsx(S,{settingName:e("settings.webui.channel.label.title"),value:n.webUIChannel,values:Z,handleChange:a=>c("webUIChannel",a),disabled:C}),t.jsx(G,{disabled:C,updateCheckInterval:n.webUIUpdateCheckInterval}),!n.webUIUpdateCheckInterval&&t.jsxs(U,{children:[t.jsx(I,{primary:e("global.update.settings.inform.label.title"),secondary:e("global.update.settings.inform.label.description")}),t.jsx(_,{edge:"end",checked:d,onChange:a=>u("webUIInformAvailableUpdate",a.target.checked)})]})]})};export{de as WebUISettings};
