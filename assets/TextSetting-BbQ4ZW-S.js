import{u as T,c as i,j as t,K as D,ay as y,ax as b,b0 as C,az as F,b as m,aF as k,X as S}from"./index-BHxGywp1.js";import{P as w}from"./PasswordTextField-mfPl7OaX.js";import{T as B}from"./TextField-mJEqqPMl.js";const E=({settingName:o,dialogTitle:r=o,dialogDescription:e,value:s,handleChange:a,isPassword:n=!1,placeholder:l="",isDialogOpen:f,setIsDialogOpen:u})=>{const{t:g}=T(),[p,c]=i.useState(s!=null?s:""),j=i.useMemo(()=>n?w:B,[n]);i.useEffect(()=>{s&&c(s)},[s]);const x=(d=!0)=>{d&&c(s!=null?s:""),u(!1)},h=()=>{x(!1),a(p)};return t.jsxs(D,{open:f,onClose:()=>x(),fullWidth:!0,children:[t.jsxs(y,{children:[t.jsx(b,{sx:{paddingLeft:0},children:r}),!!e&&t.jsx(C,{sx:{paddingBottom:"10px"},children:e}),t.jsx(j,{sx:{width:"100%",margin:"auto"},autoFocus:!0,placeholder:l,value:p,onChange:d=>c(d.target.value)})]}),t.jsxs(F,{children:[t.jsx(m,{onClick:()=>x(),color:"primary",children:g("global.button.cancel")}),t.jsx(m,{onClick:()=>h(),color:"primary",children:g("global.button.ok")})]})]})},O=o=>{const[r,e]=i.useState(!1),{settingName:s,value:a,isPassword:n=!1,disabled:l=!1}=o;return t.jsxs(t.Fragment,{children:[t.jsx(k,{disabled:l,onClick:()=>e(!0),children:t.jsx(S,{primary:s,secondary:n?a.replace(/./g,"*"):a,secondaryTypographyProps:{sx:{display:"flex",flexDirection:"column",wordWrap:"break-word"}}})}),t.jsx(E,{...o,isDialogOpen:r,setIsDialogOpen:e})]})};export{O as T,E as a};
