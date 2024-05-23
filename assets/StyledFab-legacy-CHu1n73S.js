!function(){function e(r){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(r)}function r(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function o(r,o,t){var i;return i=function(r,o){if("object"!=e(r)||!r)return r;var t=r[Symbol.toPrimitive];if(void 0!==t){var i=t.call(r,o||"default");if("object"!=e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===o?String:Number)(r)}(o,"string"),(o="symbol"==e(i)?i:i+"")in r?Object.defineProperty(r,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[o]=t,r}System.register(["./index-legacy-B0YSXsvX.js"],(function(e,t){"use strict";var i,a,n,s,c,l,d,u,b,p,h,v,f;return{setters:[function(e){i=e.a0,a=e.a1,n=e.s,s=e.a2,c=e.b8,l=e.a3,d=e.a4,u=e.c,b=e.a5,p=e.a6,h=e.j,v=e.a7,f=e.a8}],execute:function(){function t(e){return a("MuiFab",e)}var m=i("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),g=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],y=n(s,{name:"MuiFab",slot:"Root",shouldForwardProp:function(e){return c(e)||"classes"===e},overridesResolver:function(e,r){var o=e.ownerState;return[r.root,r[o.variant],r["size".concat(l(o.size))],"inherit"===o.color&&r.colorInherit,r[l(o.size)],r[o.color]]}})((function(e){var r,t,i=e.theme,a=e.ownerState;return d({},i.typography.button,o({minHeight:36,transition:i.transitions.create(["background-color","box-shadow","border-color"],{duration:i.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(i.vars||i).zIndex.fab,boxShadow:(i.vars||i).shadows[6],"&:active":{boxShadow:(i.vars||i).shadows[12]},color:i.vars?i.vars.palette.text.primary:null==(r=(t=i.palette).getContrastText)?void 0:r.call(t,i.palette.grey[300]),backgroundColor:(i.vars||i).palette.grey[300],"&:hover":{backgroundColor:(i.vars||i).palette.grey.A100,"@media (hover: none)":{backgroundColor:(i.vars||i).palette.grey[300]},textDecoration:"none"}},"&.".concat(m.focusVisible),{boxShadow:(i.vars||i).shadows[6]}),"small"===a.size&&{width:40,height:40},"medium"===a.size&&{width:48,height:48},"extended"===a.variant&&{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},"extended"===a.variant&&"small"===a.size&&{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"extended"===a.variant&&"medium"===a.size&&{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40},"inherit"===a.color&&{color:"inherit"})}),(function(e){var r=e.theme,o=e.ownerState;return d({},"inherit"!==o.color&&"default"!==o.color&&null!=(r.vars||r).palette[o.color]&&{color:(r.vars||r).palette[o.color].contrastText,backgroundColor:(r.vars||r).palette[o.color].main,"&:hover":{backgroundColor:(r.vars||r).palette[o.color].dark,"@media (hover: none)":{backgroundColor:(r.vars||r).palette[o.color].main}}})}),(function(e){var r=e.theme;return o({},"&.".concat(m.disabled),{color:(r.vars||r).palette.action.disabled,boxShadow:(r.vars||r).shadows[0],backgroundColor:(r.vars||r).palette.action.disabledBackground})})),w=e("F",u.forwardRef((function(e,r){var o=b({props:e,name:"MuiFab"}),i=o.children,a=o.className,n=o.color,s=void 0===n?"default":n,c=o.component,u=void 0===c?"button":c,m=o.disabled,w=void 0!==m&&m,x=o.disableFocusRipple,S=void 0!==x&&x,O=o.focusVisibleClassName,j=o.size,z=void 0===j?"large":j,P=o.variant,k=void 0===P?"circular":P,C=p(o,g),R=d({},o,{color:s,component:u,disabled:w,disableFocusRipple:S,size:z,variant:k}),F=function(e){var r=e.color,o=e.variant,i=e.classes,a=e.size,n={root:["root",o,"size".concat(l(a)),"inherit"===r?"colorInherit":r]},s=f(n,t,i);return d({},i,s)}(R);return h.jsx(y,d({className:v(F.root,a),component:u,disabled:w,focusRipple:!S,focusVisibleClassName:v(F.focusVisible,O),ownerState:R,ref:r},C,{classes:F,children:i}))}))),x=e("a",{position:"fixed",height:"48px",right:"48px",bottom:"28px"});e("D","calc(".concat(x.bottom," + ").concat(x.height,")")),e("S",n(w)(function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(r){o(e,r,i[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(i,r))}))}return e}({},x)))}}}))}();
