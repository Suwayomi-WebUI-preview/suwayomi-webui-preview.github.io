import{u as V,f as n,j as t,ao as S,aL as k,aK as w,bl as F,aN as B,e as j,aR as I,aB as L}from"./index-CquUQo3v.js";import{P as E}from"./PasswordTextField-CRQoBgLP.js";import{T as P}from"./TextField-C2-uV8Pc.js";const N=({settingName:r,dialogTitle:l=r,dialogDescription:s,value:e,handleChange:o,isPassword:a=!1,placeholder:i="",isDialogOpen:c,setIsDialogOpen:T,validate:b=()=>!0})=>{const{t:d}=V(),[x,g]=n.useState(e!=null?e:""),[m,D]=n.useState(!0),f=!m&&!!x.length,y=n.useMemo(()=>a?E:P,[a]);n.useEffect(()=>{e&&g(e)},[e]);const u=(p=!0)=>{p&&g(e!=null?e:""),T(!1)},C=()=>{u(!1),o(x)};return t.jsxs(S,{open:c,onClose:()=>u(),fullWidth:!0,children:[t.jsxs(k,{children:[t.jsx(w,{sx:{paddingLeft:0},children:l}),!!s&&t.jsx(F,{sx:{paddingBottom:"10px"},children:s}),t.jsx(y,{sx:{width:"100%",margin:"auto"},autoFocus:!0,placeholder:i,value:x,error:f,helperText:f?d("global.error.label.invalid_input"):"",onChange:p=>{const h=p.target.value;D(b(h)),g(h)}})]}),t.jsxs(B,{children:[t.jsx(j,{onClick:()=>u(),color:"primary",children:d("global.button.cancel")}),t.jsx(j,{onClick:()=>C(),disabled:!m,color:"primary",children:d("global.button.ok")})]})]})},A=r=>{const[l,s]=n.useState(!1),{settingName:e,settingDescription:o,value:a,isPassword:i=!1,disabled:c=!1}=r;return t.jsxs(t.Fragment,{children:[t.jsx(I,{disabled:c,onClick:()=>s(!0),children:t.jsx(L,{primary:e,secondary:o!=null?o:i?a.replace(/./g,"*"):a,secondaryTypographyProps:{sx:{display:"flex",flexDirection:"column",wordWrap:"break-word"}}})}),t.jsx(N,{...r,isDialogOpen:l,setIsDialogOpen:s})]})};export{A as T,N as a};
