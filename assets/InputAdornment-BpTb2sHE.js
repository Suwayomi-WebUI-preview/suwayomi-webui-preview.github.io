import{a0 as y,a1 as A,s as C,a4 as c,c as b,a5 as I,a6 as j,j as i,a7 as L,T as $,a3 as m,a8 as z}from"./index-DNjlRA85.js";import{u as R,d as T}from"./TextField-CemM30lb.js";function F(n){return A("MuiInputAdornment",n)}const M=y("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),x=M;var f;const N=["children","className","component","disablePointerEvents","disableTypography","position","variant"],U=(n,t)=>{const{ownerState:e}=n;return[t.root,t["position".concat(m(e.position))],e.disablePointerEvents===!0&&t.disablePointerEvents,t[e.variant]]},_=n=>{const{classes:t,disablePointerEvents:e,hiddenLabel:o,position:s,size:r,variant:l}=n,d={root:["root",e&&"disablePointerEvents",s&&"position".concat(m(s)),l,o&&"hiddenLabel",r&&"size".concat(m(r))]};return z(d,F,t)},S=C("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:U})(({theme:n,ownerState:t})=>c({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(n.vars||n).palette.action.active},t.variant==="filled"&&{["&.".concat(x.positionStart,"&:not(.").concat(x.hiddenLabel,")")]:{marginTop:16}},t.position==="start"&&{marginRight:8},t.position==="end"&&{marginLeft:8},t.disablePointerEvents===!0&&{pointerEvents:"none"})),w=b.forwardRef(function(t,e){const o=I({props:t,name:"MuiInputAdornment"}),{children:s,className:r,component:l="div",disablePointerEvents:d=!1,disableTypography:g=!1,position:u,variant:v}=o,E=j(o,N),a=R()||{};let p=v;v&&a.variant,a&&!p&&(p=a.variant);const h=c({},o,{hiddenLabel:a.hiddenLabel,size:a.size,disablePointerEvents:d,position:u,variant:p}),P=_(h);return i.jsx(T.Provider,{value:null,children:i.jsx(S,c({as:l,ownerState:h,className:L(P.root,r),ref:e},E,{children:typeof s=="string"&&!g?i.jsx($,{color:"text.secondary",children:s}):i.jsxs(b.Fragment,{children:[u==="start"?f||(f=i.jsx("span",{className:"notranslate",children:"​"})):null,s]})}))})}),k=w;export{k as I};
