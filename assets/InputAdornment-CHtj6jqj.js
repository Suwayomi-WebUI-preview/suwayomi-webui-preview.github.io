import{bR as E,bQ as C,a1 as I,ch as P,f as b,bS as A,cJ as S,j as a,d6 as j,aY as L,T as R,cN as c,bU as z}from"./index-87a7KjSO.js";function w(t){return C("MuiInputAdornment",t)}const h=E("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var f;const T=(t,e)=>{const{ownerState:n}=t;return[e.root,e["position".concat(c(n.position))],n.disablePointerEvents===!0&&e.disablePointerEvents,e[n.variant]]},U=t=>{const{classes:e,disablePointerEvents:n,hiddenLabel:i,position:s,size:r,variant:l}=t,p={root:["root",n&&"disablePointerEvents",s&&"position".concat(c(s)),l,i&&"hiddenLabel",r&&"size".concat(c(r))]};return z(p,w,e)},$=I("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:T})(P(({theme:t})=>({display:"flex",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(t.vars||t).palette.action.active,variants:[{props:{variant:"filled"},style:{["&.".concat(h.positionStart,"&:not(.").concat(h.hiddenLabel,")")]:{marginTop:16}}},{props:{position:"start"},style:{marginRight:8}},{props:{position:"end"},style:{marginLeft:8}},{props:{disablePointerEvents:!0},style:{pointerEvents:"none"}}]}))),M=b.forwardRef(function(e,n){const i=A({props:e,name:"MuiInputAdornment"}),{children:s,className:r,component:l="div",disablePointerEvents:p=!1,disableTypography:x=!1,position:m,variant:u,...g}=i,o=S()||{};let d=u;u&&o.variant,o&&!d&&(d=o.variant);const v={...i,hiddenLabel:o.hiddenLabel,size:o.size,disablePointerEvents:p,position:m,variant:d},y=U(v);return a.jsx(j.Provider,{value:null,children:a.jsx($,{as:l,ownerState:v,className:L(y.root,r),ref:n,...g,children:typeof s=="string"&&!x?a.jsx(R,{color:"textSecondary",children:s}):a.jsxs(b.Fragment,{children:[m==="start"?f||(f=a.jsx("span",{className:"notranslate",children:"​"})):null,s]})})})});export{M as I};
