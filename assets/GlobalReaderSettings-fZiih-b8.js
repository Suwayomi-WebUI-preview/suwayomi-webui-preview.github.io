import{u as p,q as E,f as u,da as j,j as r,l as R,E as T,m as _,n as h,db as v,dc as d}from"./index-DU51TenU.js";const A=()=>{const{t}=p(),{setTitle:n,setAction:i}=E();u.useLayoutEffect(()=>(n(t("reader.settings.title.reader_settings")),i(null),()=>{n(""),i(null)}),[t]);const[g,c]=u.useState(0),{settings:f,request:{loading:S,error:l,refetch:x}}=j(),b=(e,a,s,o)=>{d.updateSetting({id:-1},e,a,s,!0,o)};return S?r.jsx(R,{}):l?r.jsx(T,{message:t("global.error.label.failed_to_load_data"),messageExtra:_(l),retry:()=>x().catch(h())}):r.jsx(v,{activeTab:g,setActiveTab:c,areDefaultSettings:!0,settings:f,updateSetting:(e,a,s,o,m)=>b(e,a,s,m),deleteSetting:e=>d.deleteSetting({id:-1},e,!0)})};export{A as GlobalReaderSettings};
