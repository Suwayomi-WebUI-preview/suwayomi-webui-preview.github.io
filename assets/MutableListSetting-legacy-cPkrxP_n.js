!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}var t=["handleDelete","mutable","deletable"];function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o,l,c=[],u=!0,a=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=o.call(n)).done)&&(c.push(r.value),c.length!==t);u=!0);}catch(e){a=!0,i=e}finally{try{if(!u&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(a)throw i}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(t,n,r){var i;return i=function(t,n){if("object"!=e(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,n||"default");if("object"!=e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(n,"string"),(n="symbol"==e(i)?i:i+"")in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}System.register(["./index-legacy-DKT95AOl.js","./Delete-legacy-DSwyXu9P.js","./Info-legacy-CVhj8Nas.js","./TextSetting-legacy-DvxeAZNI.js"],(function(e,r){"use strict";var i,l,u,a,s,d,f,p,b,y,h,v,j,m,g,x,O,w,S,P,D,I;return{setters:[function(e){i=e.u,l=e.c,u=e.j,a=e.az,s=e.U,d=e.H,f=e.ar,p=e.as,b=e.aR,y=e.T,h=e.S,v=e.v,j=e.at,m=e.b,g=e.am,x=e.g,O=e.I,w=e.n},function(e){S=e.d},function(e){P=e.d},function(e){D=e.a,I=e.T}],execute:function(){var r=function(e){var n=e.handleDelete,r=e.mutable,l=void 0===r||r,a=e.deletable,d=void 0===a||a,f=c(e,t),p=i().t;return u.jsxs(h,{direction:"row",children:[l?u.jsx(I,o(o({},f),{},{dialogTitle:""})):u.jsx(g,{children:u.jsx(s,{secondary:f.value})}),u.jsx(x,{title:p("chapter.action.download.delete.label.action"),children:u.jsx(O,{disabled:!d,size:"large",onClick:n,children:u.jsx(S,{})})})]})};e("M",(function(e){var t=e.settingName,o=e.description,c=e.dialogDisclaimer,g=e.valueInfos,x=e.handleChange,O=e.addItemButtonTitle,S=e.placeholder,I=e.allowDuplicates,C=void 0!==I&&I,T=e.validateItem,k=void 0===T?function(){return!0}:T,E=e.invalidItemError,A=i().t,N=function(e){var t;return null!==(t=null==e?void 0:e.map((function(e){return e[0]})))&&void 0!==t?t:[]}(g),B=n(l.useState(!1),2),z=B[0],H=B[1],L=n(l.useState(N),2),M=L[0],U=L[1],F=n(l.useState(!1),2),R=F[0],W=F[1];l.useEffect((function(){g&&U(N)}),[g]);var $=function(){(!(arguments.length>0&&void 0!==arguments[0])||arguments[0])&&U(N),H(!1)},_=function(e,t){void 0===t?U(M.toSpliced(e,1)):!C&&M.includes(t)||""!==t&&(k(t)?U(M.toSpliced(e,1,t.trim())):w(null!=E?E:A("global.error.label.invalid_input"),"error"))};return u.jsxs(u.Fragment,{children:[u.jsx(a,{onClick:function(){return H(!0)},children:u.jsx(s,{primary:t,secondary:null!=N&&N.length?null==N?void 0:N.join(", "):o,secondaryTypographyProps:{style:{display:"flex",flexDirection:"column"}}})}),u.jsxs(d,{open:z,onClose:function(){return $()},fullWidth:!0,children:[u.jsx(f,{children:t}),(!!o||!!c)&&u.jsx(p,{children:u.jsxs(b,{sx:{paddingBottom:"10px"},component:"div",children:[o&&u.jsx(y,{variant:"body1",sx:{whiteSpace:"pre-line"},children:o}),c&&u.jsxs(h,{direction:"row",alignItems:"center",children:[u.jsx(P,{color:"warning"}),u.jsx(y,{variant:"body1",sx:{marginLeft:"10px",marginTop:"5px",whiteSpace:"pre-line"},children:c})]})]})}),u.jsx(p,{dividers:!0,sx:{maxHeight:"300px"},children:u.jsx(v,{children:M.map((function(e,t){var i,o;return u.jsx(r,{settingName:"",placeholder:S,handleChange:function(e){return _(t,e)},handleDelete:function(){return _(t,void 0)},value:e,mutable:null==g||null===(i=g.find((function(t){return n(t,1)[0]===e})))||void 0===i||null===(i=i[1])||void 0===i?void 0:i.mutable,deletable:null==g||null===(o=g.find((function(t){return n(t,1)[0]===e})))||void 0===o||null===(o=o[1])||void 0===o?void 0:o.deletable})}))})}),u.jsx(j,{children:u.jsxs(h,{sx:{width:"100%"},direction:"row",justifyContent:"space-between",children:[u.jsx(m,{onClick:function(){return W(!0)},children:null!=O?O:A("global.button.add")}),u.jsxs(h,{direction:"row",children:[u.jsx(m,{onClick:function(){return $()},children:A("global.button.cancel")}),u.jsx(m,{onClick:function(){return $(!0),void x(M.filter((function(e){return""!==e})))},children:A("global.button.ok")})]})]})})]}),R&&u.jsx(D,{settingName:"",placeholder:S,handleChange:function(e){return _(M.length,e)},isDialogOpen:R,setIsDialogOpen:W})]})}))}}}))}();
