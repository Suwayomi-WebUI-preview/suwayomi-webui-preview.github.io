import{u as S,f as n,a_ as V,j as e,ap as k,aM as w,aL as F,bn as I,aO as L,e as j,aS as B,aC as E}from"./index-Bzv3cZXu.js";import{P as O}from"./PasswordTextField-BxjRXc2k.js";const P=({settingName:l,dialogTitle:r=l,dialogDescription:s,value:t,handleChange:a,isPassword:o=!1,placeholder:i="",isDialogOpen:c,setIsDialogOpen:T,validate:b=()=>!0})=>{const{t:d}=S(),[x,g]=n.useState(t!=null?t:""),[f,C]=n.useState(!0),m=!f&&!!x.length,D=n.useMemo(()=>o?O:V,[o]);n.useEffect(()=>{t&&g(t)},[t]);const u=(p=!0)=>{p&&g(t!=null?t:""),T(!1)},y=()=>{u(!1),a(x)};return e.jsxs(k,{open:c,onClose:()=>u(),fullWidth:!0,children:[e.jsxs(w,{children:[e.jsx(F,{sx:{paddingLeft:0},children:r}),!!s&&e.jsx(I,{sx:{paddingBottom:"10px"},children:s}),e.jsx(D,{sx:{width:"100%",margin:"auto"},autoFocus:!0,placeholder:i,value:x,error:m,helperText:m?d("global.error.label.invalid_input"):"",onChange:p=>{const h=p.target.value;C(b(h)),g(h)}})]}),e.jsxs(L,{children:[e.jsx(j,{onClick:()=>u(),color:"primary",children:d("global.button.cancel")}),e.jsx(j,{onClick:()=>y(),disabled:!f,color:"primary",children:d("global.button.ok")})]})]})},_=l=>{const[r,s]=n.useState(!1),{settingName:t,settingDescription:a,value:o,isPassword:i=!1,disabled:c=!1}=l;return e.jsxs(e.Fragment,{children:[e.jsx(B,{disabled:c,onClick:()=>s(!0),children:e.jsx(E,{primary:t,secondary:a!=null?a:i?o.replace(/./g,"*"):o,secondaryTypographyProps:{sx:{display:"flex",flexDirection:"column",wordWrap:"break-word"}}})}),e.jsx(P,{...l,isDialogOpen:r,setIsDialogOpen:s})]})};export{_ as T,P as a};
