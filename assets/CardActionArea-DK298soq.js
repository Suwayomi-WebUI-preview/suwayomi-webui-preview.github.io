import{a4 as A,a5 as f,s as l,a6 as C,a8 as u,c as m,a9 as y,j as c,aa as n,ab as b}from"./index-Dw9heavt.js";function v(s){return f("MuiCardActionArea",s)}const i=A("MuiCardActionArea",["root","focusVisible","focusHighlight"]),H=s=>{const{classes:o}=s;return b({root:["root"],focusHighlight:["focusHighlight"]},v,o)},x=l(C,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(s,o)=>o.root})(u(({theme:s})=>({display:"block",textAlign:"inherit",borderRadius:"inherit",width:"100%",["&:hover .".concat(i.focusHighlight)]:{opacity:(s.vars||s).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},["&.".concat(i.focusVisible," .").concat(i.focusHighlight)]:{opacity:(s.vars||s).palette.action.focusOpacity}}))),R=l("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(s,o)=>o.focusHighlight})(u(({theme:s})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:s.transitions.create("opacity",{duration:s.transitions.duration.short})}))),N=m.forwardRef(function(o,r){const e=y({props:o,name:"MuiCardActionArea"}),{children:d,className:h,focusVisibleClassName:p,...g}=e,t=e,a=H(t);return c.jsxs(x,{className:n(a.root,h),focusVisibleClassName:n(p,a.focusVisible),ref:r,ownerState:t,...g,children:[d,c.jsx(R,{className:a.focusHighlight,ownerState:t})]})});export{N as C};