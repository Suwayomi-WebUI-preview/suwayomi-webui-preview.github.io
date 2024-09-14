import{a4 as C,a5 as z,s as h,a6 as k,c5 as R,a7 as l,a8 as d,c as S,a9 as T,j as U,aa as x,ab as m}from"./index-Dw9heavt.js";function E(a){return z("MuiFab",a)}const v=C("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),I=a=>{const{color:o,variant:s,classes:r,size:t}=a,i={root:["root",s,"size".concat(l(t)),o==="inherit"?"colorInherit":o]},e=m(i,E,r);return{...r,...e}},L=h(k,{name:"MuiFab",slot:"Root",shouldForwardProp:a=>R(a)||a==="classes",overridesResolver:(a,o)=>{const{ownerState:s}=a;return[o.root,o[s.variant],o["size".concat(l(s.size))],s.color==="inherit"&&o.colorInherit,o[l(s.size)],o[s.color]]}})(d(({theme:a})=>{var o,s;return{...a.typography.button,minHeight:36,transition:a.transitions.create(["background-color","box-shadow","border-color"],{duration:a.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(a.vars||a).zIndex.fab,boxShadow:(a.vars||a).shadows[6],"&:active":{boxShadow:(a.vars||a).shadows[12]},color:a.vars?a.vars.palette.text.primary:(s=(o=a.palette).getContrastText)==null?void 0:s.call(o,a.palette.grey[300]),backgroundColor:(a.vars||a).palette.grey[300],"&:hover":{backgroundColor:(a.vars||a).palette.grey.A100,"@media (hover: none)":{backgroundColor:(a.vars||a).palette.grey[300]},textDecoration:"none"},["&.".concat(v.focusVisible)]:{boxShadow:(a.vars||a).shadows[6]},variants:[{props:{size:"small"},style:{width:40,height:40}},{props:{size:"medium"},style:{width:48,height:48}},{props:{variant:"extended"},style:{borderRadius:48/2,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48}},{props:{variant:"extended",size:"small"},style:{width:"auto",padding:"0 8px",borderRadius:34/2,minWidth:34,height:34}},{props:{variant:"extended",size:"medium"},style:{width:"auto",padding:"0 16px",borderRadius:40/2,minWidth:40,height:40}},{props:{color:"inherit"},style:{color:"inherit"}}]}}),d(({theme:a})=>({variants:[...Object.entries(a.palette).filter(([,o])=>o&&o.main&&o.dark&&o.contrastText).map(([o])=>({props:{color:o},style:{color:(a.vars||a).palette[o].contrastText,backgroundColor:(a.vars||a).palette[o].main,"&:hover":{backgroundColor:(a.vars||a).palette[o].dark,"@media (hover: none)":{backgroundColor:(a.vars||a).palette[o].main}}}}))]})),d(({theme:a})=>({["&.".concat(v.disabled)]:{color:(a.vars||a).palette.action.disabled,boxShadow:(a.vars||a).shadows[0],backgroundColor:(a.vars||a).palette.action.disabledBackground}}))),$=S.forwardRef(function(o,s){const r=T({props:o,name:"MuiFab"}),{children:t,className:i,color:e="default",component:p="button",disabled:u=!1,disableFocusRipple:b=!1,focusVisibleClassName:w,size:f="large",variant:F="circular",...y}=r,g={...r,color:e,component:p,disabled:u,disableFocusRipple:b,size:f,variant:F},n=I(g);return U.jsx(L,{className:x(n.root,i),component:p,disabled:u,focusRipple:!b,focusVisibleClassName:x(n.focusVisible,w),ownerState:g,ref:s,...y,classes:n,children:t})}),c={position:"fixed",height:"48px",right:"48px",bottom:"28px"},B="calc(".concat(c.bottom," + ").concat(c.height,")"),D=h($)({...c});export{B as D,$ as F,D as S,c as a};