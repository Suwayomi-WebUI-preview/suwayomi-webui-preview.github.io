import{u as V,h as n,bc as S,j as e,D as k,s as w,q as F,br as I,a$ as B,e as j,b3 as E,aR as L}from"./index-iC303V5E.js";import{P}from"./PasswordTextField-CH6MhjoS.js";const O=({settingName:r,dialogTitle:l=r,dialogDescription:s,value:t,handleChange:o,isPassword:a=!1,placeholder:i="",isDialogOpen:c,setIsDialogOpen:b,validate:T=()=>!0})=>{const{t:d}=V(),[x,g]=n.useState(t!=null?t:""),[m,D]=n.useState(!0),f=!m&&!!x.length,y=n.useMemo(()=>a?P:S,[a]);n.useEffect(()=>{t&&g(t)},[t]);const u=(p=!0)=>{p&&g(t!=null?t:""),b(!1)},C=()=>{u(!1),o(x)};return e.jsxs(k,{open:c,onClose:()=>u(),fullWidth:!0,children:[e.jsxs(w,{children:[e.jsx(F,{sx:{paddingLeft:0},children:l}),!!s&&e.jsx(I,{sx:{paddingBottom:"10px"},children:s}),e.jsx(y,{sx:{width:"100%",margin:"auto"},autoFocus:!0,placeholder:i,value:x,error:f,helperText:f?d("global.error.label.invalid_input"):"",onChange:p=>{const h=p.target.value;D(T(h)),g(h)}})]}),e.jsxs(B,{children:[e.jsx(j,{onClick:()=>u(),color:"primary",children:d("global.button.cancel")}),e.jsx(j,{onClick:()=>C(),disabled:!m,color:"primary",children:d("global.button.ok")})]})]})},q=r=>{const[l,s]=n.useState(!1),{settingName:t,settingDescription:o,value:a,isPassword:i=!1,disabled:c=!1}=r;return e.jsxs(e.Fragment,{children:[e.jsx(E,{disabled:c,onClick:()=>s(!0),children:e.jsx(L,{primary:t,secondary:o!=null?o:i?a.replace(/./g,"*"):a,secondaryTypographyProps:{sx:{display:"flex",flexDirection:"column",wordWrap:"break-word"}}})}),e.jsx(O,{...r,isDialogOpen:l,setIsDialogOpen:s})]})};export{q as T,O as a};
