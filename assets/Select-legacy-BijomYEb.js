!function(){function e(r){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(r)}var r=["children","maxSelectionHeightPx"];function t(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function n(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?t(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(r,t,n){return(t=function(r){var t=function(r,t){if("object"!=e(r)||!r)return r;var n=r[Symbol.toPrimitive];if(void 0!==n){var o=n.call(r,t||"default");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(r)}(r,"string");return"symbol"==e(t)?t:t+""}(t))in r?Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[t]=n,r}System.register(["./index-legacy-CFoCjVnF.js","./TextField-legacy-CKvnSqFC.js"],(function(e,t){"use strict";var o,i;return{setters:[function(e){o=e.j},function(e){i=e.S}],execute:function(){e("S",(function(e){var t=e.children,c=e.maxSelectionHeightPx,u=void 0===c?250:c,l=function(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(r.includes(n))continue;t[n]=e[n]}return t}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.includes(t)||{}.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,r);return o.jsx(i,n(n({MenuProps:{PaperProps:{style:{maxHeight:u}}}},l),{},{children:t}))}))}}}))}();