import{u as _,p as b,f as u,df as A,j as r,k as R,E as T,l as h,m as j,dg as v,dh as d,di as g}from"./index-BUJyb_rr.js";const G=()=>{const{t}=_(),{setTitle:n,setAction:i}=b();u.useLayoutEffect(()=>(n(t("reader.settings.title.reader_settings")),i(null),()=>{n(""),i(null)}),[t]);const[c,f]=u.useState(0),{settings:S,request:{loading:E,error:l,refetch:p}}=A(),x=(e,a,s,o)=>{d.updateSetting(g,e,a,s,!0,o)};return E?r.jsx(R,{}):l?r.jsx(T,{message:t("global.error.label.failed_to_load_data"),messageExtra:h(l),retry:()=>p().catch(j())}):r.jsx(v,{activeTab:c,setActiveTab:f,areDefaultSettings:!0,settings:S,updateSetting:(e,a,s,o,m)=>x(e,a,s,m),deleteSetting:e=>d.deleteSetting(g,e,!0)})};export{G as GlobalReaderSettings};