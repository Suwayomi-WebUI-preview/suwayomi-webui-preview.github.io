import{u as C,c as a,j as e,aI as T,a0 as I,R as k,aD as w,aC as B,b4 as h,T as f,S as E,_ as L,aE as M,b as u}from"./index-lMCVQ9L9.js";import{d as F}from"./Info-Dk8WxbOa.js";import{S as O}from"./Select-BMAzkNZu.js";import{a as R}from"./TextField-CxRf_Sst.js";const P=({settingName:x,dialogDescription:p,value:t,values:l,handleChange:j,disabled:y=!1})=>{const{t:i}=C(),[D,m]=a.useState(!1),[n,c]=a.useState(t),g=a.useMemo(()=>{var s,r;return(r=(s=l.find(([b])=>b===t))==null?void 0:s[1])==null?void 0:r.text},[t]),o=a.useMemo(()=>l.find(([s])=>s===n)[1],[n]);a.useEffect(()=>{t&&c(t)},[t]);const d=(s=!0)=>{s&&c(t),m(!1)},S=()=>{d(!1),j(n)};return e.jsxs(e.Fragment,{children:[e.jsx(T,{disabled:y,onClick:()=>m(!0),children:e.jsx(I,{primary:x,secondary:i(g||"global.label.loading"),secondaryTypographyProps:{style:{display:"flex",flexDirection:"column"}}})}),e.jsxs(k,{open:D,onClose:()=>d(),fullWidth:!0,children:[e.jsxs(w,{children:[e.jsx(B,{sx:{paddingLeft:0},children:x}),!!p&&e.jsx(h,{sx:{paddingBottom:"10px"},children:p}),(!!o.description||!!o.disclaimer)&&e.jsxs(h,{sx:{paddingBottom:"10px"},component:"div",children:[o.description&&e.jsx(f,{variant:"body1",sx:{whiteSpace:"pre-line"},children:i(o.description)}),o.disclaimer&&e.jsxs(E,{direction:"row",sx:{alignItems:"center"},children:[e.jsx(F,{color:"warning"}),e.jsx(f,{variant:"body1",sx:{marginLeft:"10px",marginTop:"5px",whiteSpace:"pre-line"},children:i(o.disclaimer)})]})]}),e.jsx(R,{fullWidth:!0,children:e.jsx(O,{id:"dialog-select",value:n,onChange:s=>c(s.target.value),children:l.map(([s,{text:r}])=>e.jsx(L,{value:s,children:i(r)},s))})})]}),e.jsxs(M,{children:[e.jsx(u,{onClick:()=>d(),color:"primary",children:i("global.button.cancel")}),e.jsx(u,{onClick:()=>S(),color:"primary",children:i("global.button.ok")})]})]})]})};export{P as S};
