!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n,i){var o;return o=function(e,n){if("object"!=t(e)||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,n||"default");if("object"!=t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(n,"string"),(n="symbol"==t(o)?o:o+"")in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}System.register(["./index-legacy-DKT95AOl.js","./TextField-legacy-HnzG0A2L.js"],(function(t,n){"use strict";var i,o,r,a,s,l,c,d,u,v,p,m,f,b;return{setters:[function(t){i=t.Z,o=t._,r=t.s,a=t.a1,s=t.c,l=t.a2,c=t.a3,d=t.j,u=t.a4,v=t.T,p=t.a0,m=t.a5},function(t){f=t.u,b=t.d}],execute:function(){function n(t){return o("MuiInputAdornment",t)}var y,h=i("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),g=["children","className","component","disablePointerEvents","disableTypography","position","variant"],S=r("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(t,e){var n=t.ownerState;return[e.root,e["position".concat(p(n.position))],!0===n.disablePointerEvents&&e.disablePointerEvents,e[n.variant]]}})((function(t){var n=t.theme,i=t.ownerState;return a({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(n.vars||n).palette.action.active},"filled"===i.variant&&e({},"&.".concat(h.positionStart,"&:not(.").concat(h.hiddenLabel,")"),{marginTop:16}),"start"===i.position&&{marginRight:8},"end"===i.position&&{marginLeft:8},!0===i.disablePointerEvents&&{pointerEvents:"none"})}));t("I",s.forwardRef((function(t,e){var i=l({props:t,name:"MuiInputAdornment"}),o=i.children,r=i.className,h=i.component,P=void 0===h?"div":h,E=i.disablePointerEvents,j=void 0!==E&&E,x=i.disableTypography,w=void 0!==x&&x,L=i.position,I=i.variant,T=c(i,g),z=f()||{},N=I;I&&z.variant,z&&!N&&(N=z.variant);var A=a({},i,{hiddenLabel:z.hiddenLabel,size:z.size,disablePointerEvents:j,position:L,variant:N}),M=function(t){var e=t.classes,i=t.disablePointerEvents,o=t.hiddenLabel,r=t.position,a=t.size,s=t.variant,l={root:["root",i&&"disablePointerEvents",r&&"position".concat(p(r)),s,o&&"hiddenLabel",a&&"size".concat(p(a))]};return m(l,n,e)}(A);return d.jsx(b.Provider,{value:null,children:d.jsx(S,a({as:P,ownerState:A,className:u(M.root,r),ref:e},T,{children:"string"!=typeof o||w?d.jsxs(s.Fragment,{children:["start"===L?y||(y=d.jsx("span",{className:"notranslate",children:"​"})):null,o]}):d.jsx(v,{color:"text.secondary",children:o})}))})})))}}}))}();
