import{u as b,c as s,N as h,v as x,bp as f,j as a,h as j,E as D,k as E,q as S,bq as i,ao as _,X as A,V as C,bd as I,n as L}from"./index-5KkoNewZ.js";import{M}from"./MutableListSetting-DLhBHppE.js";import{S as T}from"./Select-UN34FLGi.js";import"./Delete-C_p54HyE.js";import"./Info-b2hwxFHP.js";import"./TextSetting-kMN0QOei.js";import"./PasswordTextField-C27M5Ihh.js";import"./TextField-BmuHPEnd.js";import"./InputAdornment-CJHOBF5v.js";const H=()=>{const{t}=b(),{setTitle:r,setAction:l}=s.useContext(h);s.useEffect(()=>(r(t("settings.device.title.settings")),l(null),()=>{r(""),l(null)}),[t]);const{metadata:v,settings:{devices:n},loading:u,request:{error:o,refetch:g}}=x(),{activeDevice:c,setActiveDevice:d}=s.useContext(f),p=(e,m)=>{if(!v)return;e==="devices"&&!m.includes(c)&&d(i),I(e,m).catch(()=>L(t("global.error.label.failed_to_save_changes"),"error"))};return u?a.jsx(j,{}):o?a.jsx(D,{message:t("global.error.label.failed_to_load_data"),messageExtra:o.message,retry:()=>g().catch(E())}):a.jsxs(S,{children:[a.jsx(M,{settingName:t("settings.device.devices.label.title"),description:t("settings.device.devices.label.description"),handleChange:e=>{p("devices",[...new Set([i,...e])])},valueInfos:n.map(e=>[e,{mutable:!1,deletable:e!==i}]),addItemButtonTitle:t("global.button.create"),validateItem:e=>e.length<=16&&!!e.match(/^[a-zA-Z0-9\-_]+$/g),placeholder:t("settings.device.label.placeholder")}),a.jsxs(_,{children:[a.jsx(A,{primary:t("settings.device.active_device.label.title"),secondary:t("settings.device.active_device.label.description")}),a.jsx(T,{value:c,onChange:({target:{value:e}})=>d(e),children:n.map(e=>a.jsx(C,{value:e,children:e},e))})]})]})};export{H as DeviceSetting};