!function(){function r(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,e){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var o,a,n,i,l=[],s=!0,c=!1;try{if(n=(t=t.call(r)).next,0===e){if(Object(t)!==t)return;s=!1}else for(;!(s=(o=n.call(t)).done)&&(l.push(o.value),l.length!==e);s=!0);}catch(r){c=!0,a=r}finally{try{if(!s&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(c)throw a}}return l}}(r,t)||function(r,t){if(r){if("string"==typeof r)return e(r,t);var o={}.toString.call(r).slice(8,-1);return"Object"===o&&r.constructor&&(o=r.constructor.name),"Map"===o||"Set"===o?Array.from(r):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(r,t):void 0}}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,o=Array(e);t<e;t++)o[t]=r[t];return o}System.register(["./index-legacy-DYOAMH_U.js"],(function(e,t){"use strict";var o,a,n,i,l,s,c,u,f,d,v,m;return{setters:[function(r){o=r.ab,a=r.j,n=r.a0,i=r.$,l=r.s,s=r.a3,c=r.c,u=r.a5,f=r.cp,d=r.a6,v=r.bC,m=r.a7}],execute:function(){var t=o(a.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function p(r){return n("MuiAvatar",r)}i("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var g=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],y=v(),h=l("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(r,e){var t=r.ownerState;return[e.root,e[t.variant],t.colorDefault&&e.colorDefault]}})((function(r){var e=r.theme;return{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:s({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:s({backgroundColor:e.palette.grey[400]},e.applyStyles("dark",{backgroundColor:e.palette.grey[600]})))}]}})),b=l("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(r,e){return e.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),S=l(t,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(r,e){return e.fallback}})({width:"75%",height:"75%"});e("A",c.forwardRef((function(e,t){var o=y({props:e,name:"MuiAvatar"}),n=o.alt,i=o.children,l=o.className,v=o.component,A=void 0===v?"div":v,w=o.slots,x=void 0===w?{}:w,j=o.slotProps,k=void 0===j?{}:j,P=o.imgProps,R=o.sizes,M=o.src,D=o.srcSet,I=o.variant,z=void 0===I?"circular":I,C=u(o,g),F=null,N=function(e){var t=e.crossOrigin,o=e.referrerPolicy,a=e.src,n=e.srcSet,i=r(c.useState(!1),2),l=i[0],s=i[1];return c.useEffect((function(){if(a||n){s(!1);var r=!0,e=new Image;return e.onload=function(){r&&s("loaded")},e.onerror=function(){r&&s("error")},e.crossOrigin=t,e.referrerPolicy=o,e.src=a,n&&(e.srcset=n),function(){r=!1}}}),[t,o,a,n]),l}(s({},P,{src:M,srcSet:D})),O=M||D,T=O&&"error"!==N,q=s({},o,{colorDefault:!T,component:A,variant:z}),E=function(r){var e=r.classes,t=r.variant,o=r.colorDefault;return m({root:["root",t,o&&"colorDefault"],img:["img"],fallback:["fallback"]},p,e)}(q),$=r(f("img",{className:E.img,elementType:b,externalForwardedProps:{slots:x,slotProps:{img:s({},P,k.img)}},additionalProps:{alt:n,src:M,srcSet:D,sizes:R},ownerState:q}),2),B=$[0],H=$[1];return F=T?a.jsx(B,s({},H)):i||0===i?i:O&&n?n[0]:a.jsx(S,{ownerState:q,className:E.fallback}),a.jsx(h,s({as:A,ownerState:q,className:d(E.root,l),ref:t},C,{children:F}))})))}}}))}();
