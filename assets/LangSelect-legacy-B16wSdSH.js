!function(){function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n(t)}function t(n){return function(n){if(Array.isArray(n))return i(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||r(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var r,i,o,a,l=[],u=!0,c=!1;try{if(o=(e=e.call(n)).next,0===t){if(Object(e)!==e)return;u=!1}else for(;!(u=(r=o.call(e)).done)&&(l.push(r.value),l.length!==t);u=!0);}catch(n){c=!0,i=n}finally{try{if(!u&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(c)throw i}}return l}}(n,t)||r(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(n,t){if(n){if("string"==typeof n)return i(n,t);var e={}.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?i(n,t):void 0}}function i(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=Array(t);e<t;e++)r[e]=n[e];return r}function o(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=n(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,e||"default");if("object"!=n(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==n(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}System.register(["./index-legacy-CFoCjVnF.js","./FilterList-legacy-Bly5uyXH.js","./cloneObject-legacy-D5k1nSvY.js","./language-legacy-D8xcgszl.js","./Switch-legacy-DilXfW7R.js"],(function(n,r){"use strict";var i,a,l,u,c,s,f,d,y,b,g,m,h,p,S,x,j,E,v;return{setters:[function(n){i=n.H,a=n.u,l=n.c,u=n.j,c=n.f,s=n.I,f=n.Q,d=n.aB,y=n.aC,b=n.k,g=n.at,m=n.$,h=n.aD,p=n.b},function(n){S=n.d},function(n){x=n.c},function(n){j=n.D,E=n.b},function(n){v=n.S}],execute:function(){n("L",(function(n){var r=a().t,i=n.shownLangs,o=n.setShownLangs,j=n.allLangs,E=n.forcedLangs,L=void 0===E?[]:E,O=e(l.useState((P=x(i),C=L,C.forEach((function(n){var t=P.indexOf(n);-1!==t&&P.splice(t,1)})),P)),2),T=O[0],D=O[1],I=e(l.useState(!1),2),N=I[0],w=I[1];var P,C;return u.jsxs(u.Fragment,{children:[u.jsx(c,{title:r("settings.title"),children:u.jsx(s,{onClick:function(){return w(!0)},"aria-label":"display more actions",edge:"end",color:"inherit",size:"large",children:u.jsx(S,{})})}),u.jsxs(f,{sx:{".MuiDialog-paper":{maxHeight:435,width:"80%"}},maxWidth:"xs",open:N,children:[u.jsx(d,{children:r("global.language.title.enabled_languages")}),u.jsx(y,{dividers:!0,sx:{padding:0},children:u.jsx(b,{children:j.map((function(n){return u.jsxs(g,{children:[u.jsx(m,{primary:A(n)}),u.jsx(v,{checked:-1!==T.indexOf(n),onChange:function(e){return function(n,e){if(n.target.checked)D([].concat(t(T),[e]));else{var r=x(T);r.splice(r.indexOf(e),1),D(r)}}(e,n)}})]},n)}))})}),u.jsxs(h,{children:[u.jsx(p,{autoFocus:!0,onClick:function(){w(!1)},color:"primary",children:r("global.button.cancel")}),u.jsx(p,{onClick:function(){w(!1),o(T)},color:"primary",children:r("global.button.ok")})]})]})]})}));var r=n("E",function(n){return n.INSTALLED="INSTALLED",n.UPDATE_PENDING="UPDATE_PENDING",n.OBSOLETE="OBSOLETE",n}(r||{})),L=o(o(o(o(o(o({},"INSTALLED","extension.state.label.installed"),"UPDATE_PENDING","extension.state.label.update_pending"),"OBSOLETE","extension.state.label.obsolete"),j.ALL,"extension.language.all"),j.OTHER,"extension.language.other"),j.LOCAL_SOURCE,"source.local_source.title"),O=n("i",(function(n){return["INSTALLED","UPDATE_PENDING","OBSOLETE",j.ALL,j.OTHER,j.LOCAL_SOURCE].includes(n)})),A=n("t",(function(n){return O(n)?i(L[n]):E(n)}))}}}))}();
