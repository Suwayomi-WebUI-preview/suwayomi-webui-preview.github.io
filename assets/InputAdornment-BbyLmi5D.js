import{a5 as E,a6 as C,s as I,a9 as P,c as h,aa as A,j as a,ab as j,T as L,a8 as c,ac as S}from"./index-dhITQ7sJ.js";import{u as z,d as R}from"./TextField-Bi_u0wfz.js";function w(t){return C("MuiInputAdornment",t)}const f=E("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var b;const T=(t,e)=>{const{ownerState:n}=t;return[e.root,e["position".concat(c(n.position))],n.disablePointerEvents===!0&&e.disablePointerEvents,e[n.variant]]},$=t=>{const{classes:e,disablePointerEvents:n,hiddenLabel:i,position:s,size:r,variant:l}=t,p={root:["root",n&&"disablePointerEvents",s&&"position".concat(c(s)),l,i&&"hiddenLabel",r&&"size".concat(c(r))]};return S(p,w,e)},F=I("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:T})(P(({theme:t})=>({display:"flex",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(t.vars||t).palette.action.active,variants:[{props:{variant:"filled"},style:{["&.".concat(f.positionStart,"&:not(.").concat(f.hiddenLabel,")")]:{marginTop:16}}},{props:{position:"start"},style:{marginRight:8}},{props:{position:"end"},style:{marginLeft:8}},{props:{disablePointerEvents:!0},style:{pointerEvents:"none"}}]}))),N=h.forwardRef(function(e,n){const i=A({props:e,name:"MuiInputAdornment"}),{children:s,className:r,component:l="div",disablePointerEvents:p=!1,disableTypography:x=!1,position:m,variant:u,...g}=i,o=z()||{};let d=u;u&&o.variant,o&&!d&&(d=o.variant);const v={...i,hiddenLabel:o.hiddenLabel,size:o.size,disablePointerEvents:p,position:m,variant:d},y=$(v);return a.jsx(R.Provider,{value:null,children:a.jsx(F,{as:l,ownerState:v,className:j(y.root,r),ref:n,...g,children:typeof s=="string"&&!x?a.jsx(L,{color:"textSecondary",children:s}):a.jsxs(h.Fragment,{children:[m==="start"?b||(b=a.jsx("span",{className:"notranslate",children:"​"})):null,s]})})})});export{N as I};
