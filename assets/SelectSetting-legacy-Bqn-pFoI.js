!function(){function n(n,r){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var t,i,o,l,a=[],c=!0,u=!1;try{if(o=(r=r.call(n)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(t=o.call(r)).done)&&(a.push(t.value),a.length!==e);c=!0);}catch(n){u=!0,i=n}finally{try{if(!c&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(u)throw i}}return a}}(n,r)||function(n,r){if(n){if("string"==typeof n)return e(n,r);var t={}.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?e(n,r):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=Array(e);r<e;r++)t[r]=n[r];return t}System.register(["./index-legacy-BGeP1VCJ.js","./Info-legacy-DIfs54kJ.js","./Select-legacy-CAFnqPh6.js","./TextField-legacy-cLTECR_K.js"],(function(e,r){"use strict";var t,i,o,l,a,c,u,s,d,f,x,h,p,y,g,m,j;return{setters:[function(n){t=n.u,i=n.c,o=n.j,l=n.aL,a=n.a3,c=n.W,u=n.aG,s=n.aF,d=n.b7,f=n.T,x=n.S,h=n.a1,p=n.aH,y=n.b},function(n){g=n.d},function(n){m=n.S},function(n){j=n.a}],execute:function(){e("S",(function(e){var r=e.settingName,v=e.dialogDescription,b=e.value,S=e.values,w=e.handleChange,C=e.disabled,A=void 0!==C&&C,I=t().t,T=n(i.useState(!1),2),k=T[0],F=T[1],L=n(i.useState(b),2),M=L[0],O=L[1],W=i.useMemo((function(){var e;return null===(e=S.find((function(e){return n(e,1)[0]===b})))||void 0===e||null===(e=e[1])||void 0===e?void 0:e.text}),[b]),B=i.useMemo((function(){return S.find((function(e){return n(e,1)[0]===M}))[1]}),[M]);i.useEffect((function(){b&&O(b)}),[b]);var D=function(){(!(arguments.length>0&&void 0!==arguments[0])||arguments[0])&&O(b),F(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{disabled:A,onClick:function(){return F(!0)},children:o.jsx(a,{primary:r,secondary:I(W||"global.label.loading"),secondaryTypographyProps:{style:{display:"flex",flexDirection:"column"}}})}),o.jsxs(c,{open:k,onClose:function(){return D()},fullWidth:!0,children:[o.jsxs(u,{children:[o.jsx(s,{sx:{paddingLeft:0},children:r}),!!v&&o.jsx(d,{sx:{paddingBottom:"10px"},children:v}),(!!B.description||!!B.disclaimer)&&o.jsxs(d,{sx:{paddingBottom:"10px"},component:"div",children:[B.description&&o.jsx(f,{variant:"body1",sx:{whiteSpace:"pre-line"},children:I(B.description)}),B.disclaimer&&o.jsxs(x,{direction:"row",sx:{alignItems:"center"},children:[o.jsx(g,{color:"warning"}),o.jsx(f,{variant:"body1",sx:{marginLeft:"10px",marginTop:"5px",whiteSpace:"pre-line"},children:I(B.disclaimer)})]})]}),o.jsx(j,{fullWidth:!0,children:o.jsx(m,{id:"dialog-select",value:M,onChange:function(n){return O(n.target.value)},children:S.map((function(e){var r=n(e,2),t=r[0],i=r[1].text;return o.jsx(h,{value:t,children:I(i)},t)}))})})]}),o.jsxs(p,{children:[o.jsx(y,{onClick:function(){return D()},color:"primary",children:I("global.button.cancel")}),o.jsx(y,{onClick:function(){return D(!1),void w(M)},color:"primary",children:I("global.button.ok")})]})]})]})}))}}}))}();