!function(){function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}var n=["handleDelete","mutable","deletable"];function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,o,l,u=[],c=!0,a=!1;try{if(o=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;c=!1}else for(;!(c=(r=o.call(t)).done)&&(u.push(r.value),u.length!==n);c=!0);}catch(e){a=!0,i=e}finally{try{if(!c&&null!=t.return&&(l=t.return(),Object(l)!==l))return}finally{if(a)throw i}}return u}}(e,n)||function(e,n){if(e){if("string"==typeof e)return r(e,n);var t={}.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(n,t,r){return(t=function(n){var t=function(n,t){if("object"!=e(n)||!n)return n;var r=n[Symbol.toPrimitive];if(void 0!==r){var i=r.call(n,t||"default");if("object"!=e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(n)}(n,"string");return"symbol"==e(t)?t:t+""}(t))in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}System.register(["./index-legacy-B96ufFR1.js","./Delete-legacy-CQvluzRA.js","./Info-legacy-CsfLEH2A.js","./TextSetting-legacy-_Jm3hwXM.js"],(function(e,r){"use strict";var i,l,u,c,a,s,d,f,b,p,y,v,h,m,j,g,x,O,w,S,P,D;return{setters:[function(e){i=e.u,l=e.c,u=e.j,c=e.aI,a=e.a0,s=e.R,d=e.aC,f=e.aD,b=e.b4,p=e.T,y=e.S,v=e.k,h=e.aE,m=e.b,j=e.au,g=e.f,x=e.I,O=e.m},function(e){w=e.d},function(e){S=e.d},function(e){P=e.a,D=e.T}],execute:function(){var r=function(e){var t=e.handleDelete,r=e.mutable,l=void 0===r||r,c=e.deletable,s=void 0===c||c,d=function(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.includes(r))continue;t[r]=e[r]}return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.includes(t)||{}.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}(e,n),f=i().t;return u.jsxs(y,{direction:"row",children:[l?u.jsx(D,o(o({},d),{},{dialogTitle:""})):u.jsx(j,{children:u.jsx(a,{secondary:d.value})}),u.jsx(g,{title:f("chapter.action.download.delete.label.action"),children:u.jsx(x,{disabled:!s,size:"large",onClick:t,children:u.jsx(w,{})})})]})};e("M",(function(e){var n=e.settingName,o=e.description,j=e.dialogDisclaimer,g=e.valueInfos,x=e.handleChange,w=e.addItemButtonTitle,D=e.placeholder,I=e.allowDuplicates,C=void 0!==I&&I,T=e.validateItem,k=void 0===T?function(){return!0}:T,E=e.invalidItemError,A=i().t,N=function(e){var n;return null!==(n=null==e?void 0:e.map((function(e){return e[0]})))&&void 0!==n?n:[]}(g),B=t(l.useState(!1),2),M=B[0],z=B[1],F=t(l.useState(N),2),H=F[0],L=F[1],R=t(l.useState(!1),2),U=R[0],W=R[1];l.useEffect((function(){g&&L(N)}),[g]);var $=function(){(!(arguments.length>0&&void 0!==arguments[0])||arguments[0])&&L(N),z(!1)},_=function(e,n){void 0===n?L(H.toSpliced(e,1)):!C&&H.includes(n)||""!==n&&(k(n)?L(H.toSpliced(e,1,n.trim())):O(null!=E?E:A("global.error.label.invalid_input"),"error"))};return u.jsxs(u.Fragment,{children:[u.jsx(c,{onClick:function(){return z(!0)},children:u.jsx(a,{primary:n,secondary:null!=N&&N.length?null==N?void 0:N.join(", "):o,secondaryTypographyProps:{style:{display:"flex",flexDirection:"column"}}})}),u.jsxs(s,{open:M,onClose:function(){return $()},fullWidth:!0,children:[u.jsx(d,{children:n}),(!!o||!!j)&&u.jsx(f,{children:u.jsxs(b,{sx:{paddingBottom:"10px"},component:"div",children:[o&&u.jsx(p,{variant:"body1",sx:{whiteSpace:"pre-line"},children:o}),j&&u.jsxs(y,{direction:"row",sx:{alignItems:"center"},children:[u.jsx(S,{color:"warning"}),u.jsx(p,{variant:"body1",sx:{marginLeft:"10px",marginTop:"5px",whiteSpace:"pre-line"},children:j})]})]})}),u.jsx(f,{dividers:!0,sx:{maxHeight:"300px"},children:u.jsx(v,{children:H.map((function(e,n){var i,o;return u.jsx(r,{settingName:"",placeholder:D,handleChange:function(e){return _(n,e)},handleDelete:function(){return _(n,void 0)},value:e,mutable:null==g||null===(i=g.find((function(n){return t(n,1)[0]===e})))||void 0===i||null===(i=i[1])||void 0===i?void 0:i.mutable,deletable:null==g||null===(o=g.find((function(n){return t(n,1)[0]===e})))||void 0===o||null===(o=o[1])||void 0===o?void 0:o.deletable})}))})}),u.jsx(h,{children:u.jsxs(y,{direction:"row",sx:{justifyContent:"space-between",width:"100%"},children:[u.jsx(m,{onClick:function(){return W(!0)},children:null!=w?w:A("global.button.add")}),u.jsxs(y,{direction:"row",children:[u.jsx(m,{onClick:function(){return $()},children:A("global.button.cancel")}),u.jsx(m,{onClick:function(){return $(!0),void x(H.filter((function(e){return""!==e})))},children:A("global.button.ok")})]})]})})]}),U&&u.jsx(P,{settingName:"",placeholder:D,handleChange:function(e){return _(H.length,e)},isDialogOpen:U,setIsDialogOpen:W})]})}))}}}))}();
