import{u as b,c as s,N as x,q as h,bs as f,j as a,g as j,E as D,h as E,k as S,bt as i,at as _,$ as A,Z as C,bl as I,m as L}from"./index-Dw9heavt.js";import{M}from"./MutableListSetting-CtXSSPe1.js";import{S as T}from"./Select-DeB7SOXG.js";import"./Delete-CIgykoAN.js";import"./Info-B1rDU2rr.js";import"./TextSetting-D8Eck8sK.js";import"./PasswordTextField-BlhKB4NQ.js";import"./TextField-CNPUFvCA.js";import"./InputAdornment-D5H7myJq.js";const z=()=>{const{t}=b(),{setTitle:r,setAction:l}=s.useContext(x);s.useEffect(()=>(r(t("settings.device.title.settings")),l(null),()=>{r(""),l(null)}),[t]);const{metadata:g,settings:{devices:n},loading:v,request:{error:o,refetch:u}}=h(),{activeDevice:c,setActiveDevice:d}=s.useContext(f),p=(e,m)=>{if(!g)return;!m.includes(c)&&d(i),I(e,m).catch(()=>L(t("global.error.label.failed_to_save_changes"),"error"))};return v?a.jsx(j,{}):o?a.jsx(D,{message:t("global.error.label.failed_to_load_data"),messageExtra:o.message,retry:()=>u().catch(E())}):a.jsxs(S,{sx:{pt:0},children:[a.jsx(M,{settingName:t("settings.device.devices.label.title"),description:t("settings.device.devices.label.description"),handleChange:e=>{p("devices",[...new Set([i,...e])])},valueInfos:n.map(e=>[e,{mutable:!1,deletable:e!==i}]),addItemButtonTitle:t("global.button.create"),validateItem:e=>e.length<=16&&!!e.match(/^[a-zA-Z0-9\-_]+$/g),placeholder:t("settings.device.label.placeholder")}),a.jsxs(_,{children:[a.jsx(A,{primary:t("settings.device.active_device.label.title"),secondary:t("settings.device.active_device.label.description")}),a.jsx(T,{value:c,onChange:({target:{value:e}})=>d(e),children:n.map(e=>a.jsx(C,{value:e,children:e},e))})]})]})};export{z as DeviceSetting};