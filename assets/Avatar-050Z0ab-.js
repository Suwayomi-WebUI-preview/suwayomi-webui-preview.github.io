import{aa as C,j as u,$ as I,_ as D,s as m,a2 as l,c as g,a4 as F,ck as M,a5 as N,bB as z,a6 as U}from"./index-DUjAQRrY.js";const T=C(u.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function _(a){return I("MuiAvatar",a)}D("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const E=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],L=z(),q=a=>{const{classes:e,variant:t,colorDefault:o}=a;return U({root:["root",t,o&&"colorDefault"],img:["img"],fallback:["fallback"]},_,e)},B=m("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(a,e)=>{const{ownerState:t}=a;return[e.root,e[t.variant],t.colorDefault&&e.colorDefault]}})(({theme:a})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(a.vars||a).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:l({color:(a.vars||a).palette.background.default},a.vars?{backgroundColor:a.vars.palette.Avatar.defaultBg}:l({backgroundColor:a.palette.grey[400]},a.applyStyles("dark",{backgroundColor:a.palette.grey[600]})))}]})),$=m("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(a,e)=>e.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),H=m(T,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(a,e)=>e.fallback})({width:"75%",height:"75%"});function W({crossOrigin:a,referrerPolicy:e,src:t,srcSet:o}){const[n,s]=g.useState(!1);return g.useEffect(()=>{if(!t&&!o)return;s(!1);let i=!0;const r=new Image;return r.onload=()=>{i&&s("loaded")},r.onerror=()=>{i&&s("error")},r.crossOrigin=a,r.referrerPolicy=e,r.src=t,o&&(r.srcset=o),()=>{i=!1}},[a,e,t,o]),n}const G=g.forwardRef(function(e,t){const o=L({props:e,name:"MuiAvatar"}),{alt:n,children:s,className:i,component:r="div",slots:x={},slotProps:A={},imgProps:y,sizes:k,src:p,srcSet:v,variant:P="circular"}=o,R=F(o,E);let c=null;const S=W(l({},y,{src:p,srcSet:v})),b=p||v,h=b&&S!=="error",d=l({},o,{colorDefault:!h,component:r,variant:P}),f=q(d),[j,w]=M("img",{className:f.img,elementType:$,externalForwardedProps:{slots:x,slotProps:{img:l({},y,A.img)}},additionalProps:{alt:n,src:p,srcSet:v,sizes:k},ownerState:d});return h?c=u.jsx(j,l({},w)):s||s===0?c=s:b&&n?c=n[0]:c=u.jsx(H,{ownerState:d,className:f.fallback}),u.jsx(B,l({as:r,ownerState:d,className:N(f.root,i),ref:t},R,{children:c}))}),K=G;export{K as A};