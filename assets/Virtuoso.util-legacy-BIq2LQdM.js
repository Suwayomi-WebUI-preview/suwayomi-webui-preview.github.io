!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}var t=["heightToSubtract","style"];function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,u(n.key),n)}}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t,r){return(t=u(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(t){var r=function(t,r){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,r||"default");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==e(r)?r:r+""}System.register(["./index-legacy-BS5NZc4u.js"],(function(e,n){"use strict";var u,c,a,l,p,f,s,b;return{setters:[function(e){u=e.p,c=e.j,a=e.b$,l=e.a0,p=e.d,f=e.a8,s=e.B,b=e.f}],execute:function(){e("S",(function(e){var r=e.heightToSubtract,n=void 0===r?0:r,i=e.style,l=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.includes(r)||{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,t),p=u(),f=p.appBarHeight,s=p.bottomBarHeight;return c.jsx(a,o(o({},l),{},{style:o(o({},i),{},{height:"calc(100vh - ".concat(n,"px - ").concat(f,"px - ").concat(s,"px)")})}))})),e("a",l(p,{shouldForwardProp:f(["isFirstItem"])})((function(e){var t=e.theme,r=e.isFirstItem;return i({paddingLeft:t.spacing(3),paddingTop:t.spacing(.75),paddingBottom:t.spacing(2),fontWeight:"bold",backgroundColor:t.palette.background.default},t.breakpoints.down("sm"),{paddingTop:r?t.spacing(1):t.spacing(.75)})}))),e("b",l(s)((function(e){return{padding:e.theme.spacing(0,1,1,1)}})));e("V",function(){return e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)},n=[{key:"convertIndex",value:function(e,t,r){for(var n=0;n<t.length;n++){var o=t[n],i=r[n];if(e<=i-1){var u=i-e===o+1;return{type:u?"group":"normal",index:u?n:e-(n+1),groupIndex:n}}}throw new Error('Unexpected "'.concat(e,'" (').concat(e,') and "groupCounts" (').concat(t,")"))}},{key:"useCreateConvertIndex",value:function(e){var t=this,r=b.useMemo((function(){for(var t=[],r=0;r<e.length;r++){var n,o=null!==(n=t[r-1])&&void 0!==n?n:0;t[r]=e[r]+1+o}return t}),[e]);return b.useCallback((function(n){return t.convertIndex(n,e,r)}),[r])}},{key:"useCreateGroupedComputeItemKey",value:function(e,t,r){var n=this.useCreateConvertIndex(e);return b.useCallback((function(e){var o=n(e),i=o.type,u=o.index,c=o.groupIndex;switch(i){case"group":return t(u,c);case"normal":return r(u,c);default:throw new Error('VirtuosoUtil::useCreateGroupedComputeItemKey: unexpected "converted index type" ('.concat(i,")"))}}),[n,t,r])}}],(t=null)&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t,n}())}}}))}();
