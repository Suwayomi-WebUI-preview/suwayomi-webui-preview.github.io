import{u as P,i as e,j as s,b4 as _,aR as E,aS as R,D as q,t as z,s as G,bs as H,T as S,d as J,c2 as K,bd as M,bz as Q,dd as W,de as X,b0 as Y,e as h}from"./index-Mw6rWbQu.js";const $=({settingTitle:m,settingValue:D,settingIcon:y,dialogDescription:p,dialogDisclaimer:g,value:C,defaultValue:o,minValue:r,maxValue:i,stepSize:f,dialogTitle:v=m,valueUnit:w,handleUpdate:l,showSlider:A,disabled:B=!1,handleLiveUpdate:u,listItemTextSx:F})=>{const{t:b}=P(),[L,x]=e.useState(!1),[d,I]=e.useState(C),[a,j]=e.useState(C),c=e.useCallback((t,n)=>{I(t),n&&t!==a?l(t):u&&u(t)},[a,I,u,l]),T=e.useCallback(()=>{c(a,!0),j(a),x(!1)},[a,l]),N=e.useCallback(()=>{o!==void 0&&(c(o,!0),j(o),x(!1))},[o,l]),O=()=>{c(d,!0),j(d),x(!1)};return s.jsxs(s.Fragment,{children:[s.jsxs(_,{disabled:B,onClick:()=>x(!0),children:[y?s.jsx(E,{children:y}):null,s.jsx(R,{primary:m,secondary:D,sx:F,secondaryTypographyProps:{style:{display:"flex",flexDirection:"column"}}})]}),s.jsxs(q,{open:L,onClose:T,children:[s.jsxs(z,{children:[s.jsx(G,{sx:{paddingLeft:0},children:v}),(!!p||!!g)&&s.jsxs(H,{sx:{paddingBottom:"10px"},component:"div",children:[p&&s.jsx(S,{variant:"body1",sx:{whiteSpace:"pre-line"},children:p}),g&&s.jsxs(J,{direction:"row",sx:{alignItems:"center"},children:[s.jsx(K,{color:"warning"}),s.jsx(S,{variant:"body1",sx:{marginLeft:"10px",marginTop:"5px",whiteSpace:"pre-line"},children:g})]})]}),s.jsx(M,{sx:{width:"100%",margin:"auto"},autoFocus:!0,value:d,type:"number",onChange:t=>{const n=Number(t.target.value),k=W(n,r!=null?r:n,i!=null?i:n);c(k,!1)},slotProps:{input:{inputProps:{min:r,max:i,step:f},endAdornment:s.jsx(Q,{position:"end",children:w})}}}),A?s.jsx(X,{"aria-label":"number-setting-slider",defaultValue:o,value:d,step:f,min:r,max:i,onChange:(t,n)=>{c(n,!1)}}):null]}),s.jsxs(Y,{children:[o!==void 0?s.jsx(h,{onClick:N,color:"primary",children:b("global.button.reset_to_default")}):null,s.jsx(h,{onClick:T,color:"primary",children:b("global.button.cancel")}),s.jsx(h,{onClick:O,color:"primary",children:b("global.button.ok")})]})]})]})};export{$ as N};
