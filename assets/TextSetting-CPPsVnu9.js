import{u as V,f as n,j as t,ao as S,aK as k,aJ as w,bg as F,aM as I,e as j,aQ as B,aA as E}from"./index-C-NRbn2J.js";import{P as L}from"./PasswordTextField-cFOjPskF.js";import{T as P}from"./TextField-DbGGHPPy.js";const A=({settingName:r,dialogTitle:l=r,dialogDescription:s,value:e,handleChange:o,isPassword:a=!1,placeholder:i="",isDialogOpen:c,setIsDialogOpen:T,validate:b=()=>!0})=>{const{t:d}=V(),[x,g]=n.useState(e!=null?e:""),[m,D]=n.useState(!0),f=!m&&!!x.length,y=n.useMemo(()=>a?L:P,[a]);n.useEffect(()=>{e&&g(e)},[e]);const u=(p=!0)=>{p&&g(e!=null?e:""),T(!1)},C=()=>{u(!1),o(x)};return t.jsxs(S,{open:c,onClose:()=>u(),fullWidth:!0,children:[t.jsxs(k,{children:[t.jsx(w,{sx:{paddingLeft:0},children:l}),!!s&&t.jsx(F,{sx:{paddingBottom:"10px"},children:s}),t.jsx(y,{sx:{width:"100%",margin:"auto"},autoFocus:!0,placeholder:i,value:x,error:f,helperText:f?d("global.error.label.invalid_input"):"",onChange:p=>{const h=p.target.value;D(b(h)),g(h)}})]}),t.jsxs(I,{children:[t.jsx(j,{onClick:()=>u(),color:"primary",children:d("global.button.cancel")}),t.jsx(j,{onClick:()=>C(),disabled:!m,color:"primary",children:d("global.button.ok")})]})]})},J=r=>{const[l,s]=n.useState(!1),{settingName:e,settingDescription:o,value:a,isPassword:i=!1,disabled:c=!1}=r;return t.jsxs(t.Fragment,{children:[t.jsx(B,{disabled:c,onClick:()=>s(!0),children:t.jsx(E,{primary:e,secondary:o!=null?o:i?a.replace(/./g,"*"):a,secondaryTypographyProps:{sx:{display:"flex",flexDirection:"column",wordWrap:"break-word"}}})}),t.jsx(A,{...r,isDialogOpen:l,setIsDialogOpen:s})]})};export{J as T,A as a};
