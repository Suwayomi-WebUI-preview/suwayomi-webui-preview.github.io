!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,l,a,o=[],s=!0,u=!1;try{if(l=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;s=!1}else for(;!(s=(r=l.call(t)).done)&&(o.push(r.value),o.length!==n);s=!0);}catch(e){u=!0,i=e}finally{try{if(!s&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(u)throw i}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}System.register(["./index-legacy-BIyfJVfu.js","./Info-legacy-DemB-gPd.js"],(function(n,t){"use strict";var r,i,l,a,o,s,u,c,d,f,p,x,m,h,g,y,b,j,v;return{setters:[function(e){r=e.u,i=e.f,l=e.j,a=e.aT,o=e.aC,s=e.aD,u=e.aq,c=e.aN,d=e.aM,f=e.bo,p=e.T,x=e.d,m=e.a$,h=e.bu,g=e.df,y=e.aP,b=e.e,j=e.dg},function(e){v=e.I}],execute:function(){n("N",(function(n){var t=n.settingTitle,S=n.settingValue,C=n.settingIcon,w=n.dialogDescription,k=n.dialogDisclaimer,I=n.value,T=n.defaultValue,A=n.minValue,V=n.maxValue,D=n.stepSize,P=n.dialogTitle,U=void 0===P?t:P,L=n.valueUnit,N=n.handleUpdate,O=n.showSlider,F=n.disabled,M=void 0!==F&&F,$=n.handleLiveUpdate,_=n.listItemTextSx,q=r().t,z=e(i.useState(!1),2),B=z[0],E=z[1],R=e(i.useState(I),2),G=R[0],H=R[1],J=e(i.useState(I),2),K=J[0],Q=J[1],W=i.useCallback((function(e,n){H(e),n&&e!==K?N(e):$&&$(e)}),[K,H,$,N]),X=i.useCallback((function(){W(K,!0),Q(K),E(!1)}),[K,N]),Y=i.useCallback((function(){void 0!==T&&(W(T,!0),Q(T),E(!1))}),[T,N]);return l.jsxs(l.Fragment,{children:[l.jsxs(a,{disabled:M,onClick:function(){return E(!0)},children:[C?l.jsx(o,{children:C}):null,l.jsx(s,{primary:t,secondary:S,sx:_,secondaryTypographyProps:{style:{display:"flex",flexDirection:"column"}}})]}),l.jsxs(u,{open:B,onClose:X,children:[l.jsxs(c,{children:[l.jsx(d,{sx:{paddingLeft:0},children:U}),(!!w||!!k)&&l.jsxs(f,{sx:{paddingBottom:"10px"},component:"div",children:[w&&l.jsx(p,{variant:"body1",sx:{whiteSpace:"pre-line"},children:w}),k&&l.jsxs(x,{direction:"row",sx:{alignItems:"center"},children:[l.jsx(v,{color:"warning"}),l.jsx(p,{variant:"body1",sx:{marginLeft:"10px",marginTop:"5px",whiteSpace:"pre-line"},children:k})]})]}),l.jsx(m,{sx:{width:"100%",margin:"auto"},autoFocus:!0,value:G,type:"number",onChange:function(e){var n=Number(e.target.value),t=j(n,null!=A?A:n,null!=V?V:n);W(t,!1)},slotProps:{input:{inputProps:{min:A,max:V,step:D},endAdornment:l.jsx(h,{position:"end",children:L})}}}),O?l.jsx(g,{"aria-label":"number-setting-slider",defaultValue:T,value:G,step:D,min:A,max:V,onChange:function(e,n){W(n,!1)}}):null]}),l.jsxs(y,{children:[void 0!==T?l.jsx(b,{onClick:Y,color:"primary",children:q("global.button.reset_to_default")}):null,l.jsx(b,{onClick:X,color:"primary",children:q("global.button.cancel")}),l.jsx(b,{onClick:function(){W(G,!0),Q(G),E(!1)},color:"primary",children:q("global.button.ok")})]})]})]})}))}}}))}();