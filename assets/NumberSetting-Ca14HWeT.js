import{u as N,f as e,j as s,aS as P,aB as E,aC as M,ap as R,aM as q,aL as G,bn as H,T as S,d as J,a_ as K,bt as Q,df as W,aO as X,e as h,dg as Y}from"./index-Br_UsbXy.js";import{I as Z}from"./Info-8DGx28ud.js";const U=({settingTitle:m,settingValue:D,settingIcon:f,dialogDescription:d,dialogDisclaimer:g,value:C,defaultValue:o,minValue:r,maxValue:a,stepSize:y,dialogTitle:v=m,valueUnit:w,handleUpdate:c,showSlider:B,disabled:L=!1,handleLiveUpdate:u,listItemTextSx:O})=>{const{t:j}=N(),[_,x]=e.useState(!1),[p,I]=e.useState(C),[i,b]=e.useState(C),l=e.useCallback((t,n)=>{I(t),n&&t!==i?c(t):u&&u(t)},[i,I,u,c]),T=e.useCallback(()=>{l(i,!0),b(i),x(!1)},[i,c]),A=e.useCallback(()=>{o!==void 0&&(l(o,!0),b(o),x(!1))},[o,c]),F=()=>{l(p,!0),b(p),x(!1)};return s.jsxs(s.Fragment,{children:[s.jsxs(P,{disabled:L,onClick:()=>x(!0),children:[f?s.jsx(E,{children:f}):null,s.jsx(M,{primary:m,secondary:D,sx:O,secondaryTypographyProps:{style:{display:"flex",flexDirection:"column"}}})]}),s.jsxs(R,{open:_,onClose:T,children:[s.jsxs(q,{children:[s.jsx(G,{sx:{paddingLeft:0},children:v}),(!!d||!!g)&&s.jsxs(H,{sx:{paddingBottom:"10px"},component:"div",children:[d&&s.jsx(S,{variant:"body1",sx:{whiteSpace:"pre-line"},children:d}),g&&s.jsxs(J,{direction:"row",sx:{alignItems:"center"},children:[s.jsx(Z,{color:"warning"}),s.jsx(S,{variant:"body1",sx:{marginLeft:"10px",marginTop:"5px",whiteSpace:"pre-line"},children:g})]})]}),s.jsx(K,{sx:{width:"100%",margin:"auto"},autoFocus:!0,value:p,type:"number",onChange:t=>{const n=Number(t.target.value),k=Y(n,r!=null?r:n,a!=null?a:n);l(k,!1)},slotProps:{input:{inputProps:{min:r,max:a,step:y},endAdornment:s.jsx(Q,{position:"end",children:w})}}}),B?s.jsx(W,{"aria-label":"number-setting-slider",defaultValue:o,value:p,step:y,min:r,max:a,onChange:(t,n)=>{l(n,!1)}}):null]}),s.jsxs(X,{children:[o!==void 0?s.jsx(h,{onClick:A,color:"primary",children:j("global.button.reset_to_default")}):null,s.jsx(h,{onClick:T,color:"primary",children:j("global.button.cancel")}),s.jsx(h,{onClick:F,color:"primary",children:j("global.button.ok")})]})]})]})};export{U as N};
