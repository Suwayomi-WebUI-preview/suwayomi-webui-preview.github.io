import{u as p,f as i,N as x,q as f,bN as h,j as a,l as j,E as D,m as E,v as _,bO as s,aK as S,az as C,bP as A,ax as I,bF as L,n as M}from"./index-87a7KjSO.js";import{M as T}from"./MutableListSetting-C4E-HRD1.js";import"./Info-CQBc4xDk.js";import"./TextSetting-C-lx0v2F.js";import"./PasswordTextField-CTOTXZN2.js";import"./TextField-CkSZVjz-.js";import"./InputAdornment-CHtj6jqj.js";const V=()=>{const{t}=p(),{setTitle:r,setAction:n}=i.useContext(x);i.useLayoutEffect(()=>(r(t("settings.device.title.settings")),n(null),()=>{r(""),n(null)}),[t]);const{metadata:g,settings:{devices:o},loading:m,request:{error:c,refetch:v}}=f(),{activeDevice:d,setActiveDevice:u}=i.useContext(h),b=(e,l)=>{if(!g)return;!l.includes(d)&&u(s),L(e,l).catch(()=>M(t("global.error.label.failed_to_save_changes"),"error"))};return m?a.jsx(j,{}):c?a.jsx(D,{message:t("global.error.label.failed_to_load_data"),messageExtra:c.message,retry:()=>v().catch(E())}):a.jsxs(_,{sx:{pt:0},children:[a.jsx(T,{settingName:t("settings.device.devices.label.title"),description:t("settings.device.devices.label.description"),handleChange:e=>{b("devices",[...new Set([s,...e].filter(l=>l!==t("global.label.default")))])},valueInfos:o.map(e=>[e===s?t("global.label.default"):e,{mutable:!1,deletable:e!==s}]),addItemButtonTitle:t("global.button.create"),validateItem:e=>e.length<=16&&!!e.match(/^[a-zA-Z0-9\-_]+$/g),placeholder:t("settings.device.label.placeholder")}),a.jsxs(S,{children:[a.jsx(C,{primary:t("settings.device.active_device.label.title"),secondary:t("settings.device.active_device.label.description")}),a.jsx(A,{value:d,onChange:({target:{value:e}})=>u(e),children:o.map(e=>a.jsx(I,{value:e,children:e===s?t("global.label.default"):e},e))})]})]})};export{V as DeviceSetting};
