import{u as b,c as i,N as f,l as x,bx as h,j as a,g as j,h as D,o as E,by as s,az as S,a5 as _,a3 as C,bq as A,m as I}from"./index-C4qwXpmq.js";import{M as L}from"./MutableListSetting-DIOQ5co6.js";import{S as y}from"./Select-DPwqeTtk.js";import{E as M}from"./EmptyViewAbsoluteCentered-B72QzW5m.js";import"./Delete-WBPkCX_q.js";import"./Info-B1nwnUwY.js";import"./TextSetting-zA77O6kI.js";import"./PasswordTextField-BM3tWWQ_.js";import"./TextField-BNsfONQP.js";import"./InputAdornment-CXJi4Hxk.js";const R=()=>{const{t}=b(),{setTitle:r,setAction:o}=i.useContext(f);i.useLayoutEffect(()=>(r(t("settings.device.title.settings")),o(null),()=>{r(""),o(null)}),[t]);const{metadata:g,settings:{devices:n},loading:u,request:{error:c,refetch:v}}=x(),{activeDevice:d,setActiveDevice:m}=i.useContext(h),p=(e,l)=>{if(!g)return;!l.includes(d)&&m(s),A(e,l).catch(()=>I(t("global.error.label.failed_to_save_changes"),"error"))};return u?a.jsx(j,{}):c?a.jsx(M,{message:t("global.error.label.failed_to_load_data"),messageExtra:c.message,retry:()=>v().catch(D())}):a.jsxs(E,{sx:{pt:0},children:[a.jsx(L,{settingName:t("settings.device.devices.label.title"),description:t("settings.device.devices.label.description"),handleChange:e=>{p("devices",[...new Set([s,...e].filter(l=>l!==t("global.label.default")))])},valueInfos:n.map(e=>[e===s?t("global.label.default"):e,{mutable:!1,deletable:e!==s}]),addItemButtonTitle:t("global.button.create"),validateItem:e=>e.length<=16&&!!e.match(/^[a-zA-Z0-9\-_]+$/g),placeholder:t("settings.device.label.placeholder")}),a.jsxs(S,{children:[a.jsx(_,{primary:t("settings.device.active_device.label.title"),secondary:t("settings.device.active_device.label.description")}),a.jsx(y,{value:d,onChange:({target:{value:e}})=>m(e),children:n.map(e=>a.jsx(C,{value:e,children:e===s?t("global.label.default"):e},e))})]})]})};export{R as DeviceSetting};
