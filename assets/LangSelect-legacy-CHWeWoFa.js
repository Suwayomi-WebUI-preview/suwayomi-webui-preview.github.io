!function(){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n(e)}function e(n){return function(n){if(Array.isArray(n))return i(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||r(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o,a,l=[],u=!0,c=!1;try{if(o=(t=t.call(n)).next,0===e){if(Object(t)!==t)return;u=!1}else for(;!(u=(r=o.call(t)).done)&&(l.push(r.value),l.length!==e);u=!0);}catch(n){c=!0,i=n}finally{try{if(!u&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(c)throw i}}return l}}(n,e)||r(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(n,e){if(n){if("string"==typeof n)return i(n,e);var t={}.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?i(n,e):void 0}}function i(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}function o(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=n(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=n(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==n(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}System.register(["./index-legacy-CZw6QM46.js","./FilterList-legacy-De_mC88M.js","./cloneObject-legacy-D5k1nSvY.js","./Languages-legacy-DEEks6WX.js","./Switch-legacy-BRkMSkqY.js"],(function(n,r){"use strict";var i,a,l,u,c,s,f,y,d,b,g,m,h,p,x,S,j,E,v;return{setters:[function(n){i=n.R,a=n.u,l=n.c,u=n.j,c=n.f,s=n.I,f=n.X,y=n.aF,d=n.aG,b=n.o,g=n.ay,m=n.a4,h=n.aH,p=n.b},function(n){x=n.d},function(n){S=n.c},function(n){j=n.D,E=n.b},function(n){v=n.S}],execute:function(){n("L",(function(n){var r=a().t,i=n.shownLangs,o=n.setShownLangs,j=n.allLangs,E=n.forcedLangs,L=void 0===E?[]:E,O=t(l.useState((P=S(i),C=L,C.forEach((function(n){var e=P.indexOf(n);-1!==e&&P.splice(e,1)})),P)),2),T=O[0],D=O[1],I=t(l.useState(!1),2),N=I[0],w=I[1];var P,C;return u.jsxs(u.Fragment,{children:[u.jsx(c,{title:r("settings.title"),children:u.jsx(s,{onClick:function(){return w(!0)},"aria-label":"display more actions",edge:"end",color:"inherit",size:"large",children:u.jsx(x,{})})}),u.jsxs(f,{sx:{".MuiDialog-paper":{maxHeight:435,width:"80%"}},maxWidth:"xs",open:N,children:[u.jsx(y,{children:r("global.language.title.enabled_languages")}),u.jsx(d,{dividers:!0,sx:{padding:0},children:u.jsx(b,{children:j.map((function(n){return u.jsxs(g,{children:[u.jsx(m,{primary:A(n)}),u.jsx(v,{checked:-1!==T.indexOf(n),onChange:function(t){return function(n,t){if(n.target.checked)D([].concat(e(T),[t]));else{var r=S(T);r.splice(r.indexOf(t),1),D(r)}}(t,n)}})]},n)}))})}),u.jsxs(h,{children:[u.jsx(p,{autoFocus:!0,onClick:function(){w(!1)},color:"primary",children:r("global.button.cancel")}),u.jsx(p,{onClick:function(){w(!1),o(T)},color:"primary",children:r("global.button.ok")})]})]})]})}));var r=n("E",function(n){return n.INSTALLED="INSTALLED",n.UPDATE_PENDING="UPDATE_PENDING",n.OBSOLETE="OBSOLETE",n}(r||{})),L=o(o(o(o(o(o({},"INSTALLED","extension.state.label.installed"),"UPDATE_PENDING","extension.state.label.update_pending"),"OBSOLETE","extension.state.label.obsolete"),j.ALL,"extension.language.all"),j.OTHER,"extension.language.other"),j.LOCAL_SOURCE,"extension.language.other"),O=n("i",(function(n){return["INSTALLED","UPDATE_PENDING","OBSOLETE",j.ALL,j.OTHER,j.LOCAL_SOURCE].includes(n)})),A=n("t",(function(n){return O(n)?i(L[n]):E(n)}))}}}))}();
