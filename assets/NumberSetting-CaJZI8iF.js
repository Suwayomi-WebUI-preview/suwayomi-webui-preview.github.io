import{u as N,f as o,j as s,aO as P,ax as E,ay as H,am as K,aI as Q,aH as R,bh as Y,T as S,d as q,aQ as G,aY as J,bn as W,dd as X,aK as Z,e as b}from"./index-D4N9uJT_.js";const z=({settingTitle:y,settingValue:D,settingIcon:f,dialogDescription:d,dialogDisclaimer:u,value:C,defaultValue:n,minValue:a,maxValue:r,stepSize:T,dialogTitle:v=y,valueUnit:w,handleUpdate:c,showSlider:L,disabled:M=!1,handleLiveUpdate:g,listItemTextSx:O})=>{const{t:h}=N(),[_,x]=o.useState(!1),[p,k]=o.useState(C),[i,j]=o.useState(C),l=o.useCallback((t,e)=>{k(t),e&&t!==i?c(t):g&&g(t)},[i,k,g,c]),I=o.useCallback(()=>{l(i,!0),j(i),x(!1)},[i,c]),A=o.useCallback(()=>{n!==void 0&&(l(n,!0),j(n),x(!1))},[n,c]),B=()=>{l(p,!0),j(p),x(!1)};return s.jsxs(s.Fragment,{children:[s.jsxs(P,{disabled:M,onClick:()=>x(!0),children:[f?s.jsx(E,{children:f}):null,s.jsx(H,{primary:y,secondary:D,sx:O,secondaryTypographyProps:{style:{display:"flex",flexDirection:"column"}}})]}),s.jsxs(K,{open:_,onClose:I,children:[s.jsxs(Q,{children:[s.jsx(R,{sx:{paddingLeft:0},children:v}),(!!d||!!u)&&s.jsxs(Y,{sx:{paddingBottom:"10px"},component:"div",children:[d&&s.jsx(S,{variant:"body1",sx:{whiteSpace:"pre-line"},children:d}),u&&s.jsxs(q,{direction:"row",sx:{alignItems:"center"},children:[s.jsx(G,{color:"warning"}),s.jsx(S,{variant:"body1",sx:{marginLeft:"10px",marginTop:"5px",whiteSpace:"pre-line"},children:u})]})]}),s.jsx(J,{sx:{width:"100%",margin:"auto"},autoFocus:!0,value:p,type:"number",onChange:t=>{const e=Number(t.target.value),m=Math.min(e,r!=null?r:e),F=Math.max(m,a!=null?a:m);l(F,!1)},slotProps:{input:{inputProps:{min:a,max:r,step:T},endAdornment:s.jsx(W,{position:"end",children:w})}}}),L?s.jsx(X,{"aria-label":"number-setting-slider",defaultValue:n,value:p,step:T,min:a,max:r,onChange:(t,e)=>{l(e,!1)}}):null]}),s.jsxs(Z,{children:[n!==void 0?s.jsx(b,{onClick:A,color:"primary",children:h("global.button.reset_to_default")}):null,s.jsx(b,{onClick:I,color:"primary",children:h("global.button.cancel")}),s.jsx(b,{onClick:B,color:"primary",children:h("global.button.ok")})]})]})]})};export{z as N};
