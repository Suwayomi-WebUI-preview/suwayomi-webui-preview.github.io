import{u as C,c as n,j as t,X as V,aG as F,aF as S,b9 as k,aH as w,b as h,aL as I,a4 as L}from"./index-B75kYtqP.js";import{P as B}from"./PasswordTextField-BU3uZ8i8.js";import{T as E}from"./TextField-BakXDSMW.js";const P=({settingName:r,dialogTitle:i=r,dialogDescription:s,value:e,handleChange:a,isPassword:o=!1,placeholder:l="",isDialogOpen:c,setIsDialogOpen:j,validate:T=()=>!0})=>{const{t:d}=C(),[m,x]=n.useState(e!=null?e:""),[g,b]=n.useState(!0),D=n.useMemo(()=>o?B:E,[o]);n.useEffect(()=>{e&&x(e)},[e]);const u=(p=!0)=>{p&&x(e!=null?e:""),j(!1)},y=()=>{u(!1),a(m)};return t.jsxs(V,{open:c,onClose:()=>u(),fullWidth:!0,children:[t.jsxs(F,{children:[t.jsx(S,{sx:{paddingLeft:0},children:i}),!!s&&t.jsx(k,{sx:{paddingBottom:"10px"},children:s}),t.jsx(D,{sx:{width:"100%",margin:"auto"},autoFocus:!0,placeholder:l,value:m,error:!g,helperText:g?"":d("global.error.label.invalid_input"),onChange:p=>{const f=p.target.value;b(T(f)),x(f)}})]}),t.jsxs(w,{children:[t.jsx(h,{onClick:()=>u(),color:"primary",children:d("global.button.cancel")}),t.jsx(h,{onClick:()=>y(),disabled:!g,color:"primary",children:d("global.button.ok")})]})]})},G=r=>{const[i,s]=n.useState(!1),{settingName:e,settingDescription:a,value:o,isPassword:l=!1,disabled:c=!1}=r;return t.jsxs(t.Fragment,{children:[t.jsx(I,{disabled:c,onClick:()=>s(!0),children:t.jsx(L,{primary:e,secondary:a!=null?a:l?o.replace(/./g,"*"):o,secondaryTypographyProps:{sx:{display:"flex",flexDirection:"column",wordWrap:"break-word"}}})}),t.jsx(P,{...r,isDialogOpen:i,setIsDialogOpen:s})]})};export{G as T,P as a};
