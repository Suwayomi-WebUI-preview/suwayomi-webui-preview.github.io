!function(){function n(n,r){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var t,i,o,l,a=[],c=!0,u=!1;try{if(o=(r=r.call(n)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(t=o.call(r)).done)&&(a.push(t.value),a.length!==e);c=!0);}catch(n){u=!0,i=n}finally{try{if(!c&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(u)throw i}}return a}}(n,r)||function(n,r){if(n){if("string"==typeof n)return e(n,r);var t={}.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?e(n,r):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=Array(e);r<e;r++)t[r]=n[r];return t}System.register(["./index-legacy-DwNDYHn8.js","./Info-legacy-B1wWnRwQ.js"],(function(e,r){"use strict";var t,i,o,l,a,c,u,s,d,f,x,h,p,y,g,m,v;return{setters:[function(n){t=n.u,i=n.f,o=n.j,l=n.aP,a=n.az,c=n.an,u=n.aJ,s=n.aI,d=n.bf,f=n.T,x=n.d,h=n.bh,p=n.bP,y=n.ax,g=n.aL,m=n.e},function(n){v=n.d}],execute:function(){e("S",(function(e){var r=e.settingName,j=e.dialogDescription,b=e.value,S=e.values,w=e.handleChange,C=e.disabled,A=void 0!==C&&C,I=t().t,k=n(i.useState(!1),2),T=k[0],L=k[1],M=n(i.useState(b),2),O=M[0],P=M[1],B=i.useMemo((function(){var e;return null===(e=S.find((function(e){return n(e,1)[0]===b})))||void 0===e||null===(e=e[1])||void 0===e?void 0:e.text}),[b]),D=i.useMemo((function(){return S.find((function(e){return n(e,1)[0]===O}))[1]}),[O]);i.useEffect((function(){b&&P(b)}),[b]);var E=function(){(!(arguments.length>0&&void 0!==arguments[0])||arguments[0])&&P(b),L(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{disabled:A,onClick:function(){return L(!0)},children:o.jsx(a,{primary:r,secondary:I(B||"global.label.loading"),secondaryTypographyProps:{style:{display:"flex",flexDirection:"column"}}})}),o.jsxs(c,{open:T,onClose:function(){return E()},fullWidth:!0,children:[o.jsxs(u,{children:[o.jsx(s,{sx:{paddingLeft:0},children:r}),!!j&&o.jsx(d,{sx:{paddingBottom:"10px"},children:j}),(!!D.description||!!D.disclaimer)&&o.jsxs(d,{sx:{paddingBottom:"10px"},component:"div",children:[D.description&&o.jsx(f,{variant:"body1",sx:{whiteSpace:"pre-line"},children:I(D.description)}),D.disclaimer&&o.jsxs(x,{direction:"row",sx:{alignItems:"center"},children:[o.jsx(v,{color:"warning"}),o.jsx(f,{variant:"body1",sx:{marginLeft:"10px",marginTop:"5px",whiteSpace:"pre-line"},children:I(D.disclaimer)})]})]}),o.jsx(h,{fullWidth:!0,children:o.jsx(p,{id:"dialog-select",value:O,onChange:function(n){return P(n.target.value)},children:S.map((function(e){var r=n(e,2),t=r[0],i=r[1].text;return o.jsx(y,{value:t,children:I(i)},t)}))})})]}),o.jsxs(g,{children:[o.jsx(m,{onClick:function(){return E()},color:"primary",children:I("global.button.cancel")}),o.jsx(m,{onClick:function(){return E(!1),void w(O)},color:"primary",children:I("global.button.ok")})]})]})]})}))}}}))}();