import{u as V,h as n,b5 as S,j as e,ap as k,aT as w,aS as F,bk as I,aV as B,e as j,aZ as E,aJ as L}from"./index-BKHCEc_C.js";import{P}from"./PasswordTextField-CGwdle5-.js";const O=({settingName:l,dialogTitle:r=l,dialogDescription:s,value:t,handleChange:a,isPassword:o=!1,placeholder:i="",isDialogOpen:c,setIsDialogOpen:T,validate:b=()=>!0})=>{const{t:d}=V(),[x,g]=n.useState(t!=null?t:""),[m,D]=n.useState(!0),f=!m&&!!x.length,y=n.useMemo(()=>o?P:S,[o]);n.useEffect(()=>{t&&g(t)},[t]);const u=(p=!0)=>{p&&g(t!=null?t:""),T(!1)},C=()=>{u(!1),a(x)};return e.jsxs(k,{open:c,onClose:()=>u(),fullWidth:!0,children:[e.jsxs(w,{children:[e.jsx(F,{sx:{paddingLeft:0},children:r}),!!s&&e.jsx(I,{sx:{paddingBottom:"10px"},children:s}),e.jsx(y,{sx:{width:"100%",margin:"auto"},autoFocus:!0,placeholder:i,value:x,error:f,helperText:f?d("global.error.label.invalid_input"):"",onChange:p=>{const h=p.target.value;D(b(h)),g(h)}})]}),e.jsxs(B,{children:[e.jsx(j,{onClick:()=>u(),color:"primary",children:d("global.button.cancel")}),e.jsx(j,{onClick:()=>C(),disabled:!m,color:"primary",children:d("global.button.ok")})]})]})},J=l=>{const[r,s]=n.useState(!1),{settingName:t,settingDescription:a,value:o,isPassword:i=!1,disabled:c=!1}=l;return e.jsxs(e.Fragment,{children:[e.jsx(E,{disabled:c,onClick:()=>s(!0),children:e.jsx(L,{primary:t,secondary:a!=null?a:i?o.replace(/./g,"*"):o,secondaryTypographyProps:{sx:{display:"flex",flexDirection:"column",wordWrap:"break-word"}}})}),e.jsx(O,{...l,isDialogOpen:r,setIsDialogOpen:s})]})};export{J as T,O as a};
