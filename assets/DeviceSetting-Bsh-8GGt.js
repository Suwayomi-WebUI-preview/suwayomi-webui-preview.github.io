import{u as x,f as i,N as h,q as E,bX as j,j as a,k as D,E as _,l as u,m as C,v as S,bY as s,aN as A,aC as I,bZ as L,aA as M,bP as T,n as y}from"./index-Br_UsbXy.js";import{M as w}from"./MutableListSetting-D7wRb--_.js";import"./Info-8DGx28ud.js";import"./TextSetting-DuE3j9p4.js";import"./PasswordTextField-CIgKehO3.js";const Z=()=>{const{t}=x(),{setTitle:r,setAction:n}=i.useContext(h);i.useLayoutEffect(()=>(r(t("settings.device.title.settings")),n(null),()=>{r(""),n(null)}),[t]);const{metadata:v,settings:{devices:o},loading:m,request:{error:c,refetch:b}}=E(),{activeDevice:d,setActiveDevice:g}=i.useContext(j),p=(e,l)=>{if(!v)return;!l.includes(d)&&g(s),T(e,l).catch(f=>y(t("global.error.label.failed_to_save_changes"),"error",u(f)))};return m?a.jsx(D,{}):c?a.jsx(_,{message:t("global.error.label.failed_to_load_data"),messageExtra:u(c),retry:()=>b().catch(C())}):a.jsxs(S,{sx:{pt:0},children:[a.jsx(w,{settingName:t("settings.device.devices.label.title"),description:t("settings.device.devices.label.description"),handleChange:e=>{p("devices",[...new Set([s,...e].filter(l=>l!==t("global.label.default")))])},valueInfos:o.map(e=>[e===s?t("global.label.default"):e,{mutable:!1,deletable:e!==s}]),addItemButtonTitle:t("global.button.create"),validateItem:e=>e.length<=16&&!!e.match(/^[a-zA-Z0-9\-_]+$/g),placeholder:t("settings.device.label.placeholder")}),a.jsxs(A,{children:[a.jsx(I,{primary:t("settings.device.active_device.label.title"),secondary:t("settings.device.active_device.label.description")}),a.jsx(L,{value:d,onChange:({target:{value:e}})=>g(e),children:o.map(e=>a.jsx(M,{value:e,children:e===s?t("global.label.default"):e},e))})]})]})};export{Z as DeviceSetting};