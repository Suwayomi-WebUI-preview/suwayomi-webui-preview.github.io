!function(){function e(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,o,i,u=[],l=!0,c=!1;try{if(o=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;l=!1}else for(;!(l=(n=o.call(t)).done)&&(u.push(n.value),u.length!==r);l=!0);}catch(e){c=!0,a=e}finally{try{if(!l&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(c)throw a}}return u}}(e,r)||i(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function t(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function n(e,r,t){return(r=c(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function o(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=i(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,u=!0,l=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return u=e.done,e},e:function(e){l=!0,o=e},f:function(){try{u||null==t.return||t.return()}finally{if(l)throw o}}}}function i(e,r){if(e){if("string"==typeof e)return u(e,r);var t={}.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?u(e,r):void 0}}function u(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function l(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,c(n.key),n)}}function c(e){var r=function(e,r){if("object"!=a(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,r||"default");if("object"!=a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==a(r)?r:r+""}System.register(["./index-legacy-GxGsYjoV.js","./useManageMangaLibraryState-legacy-C48Rk-ka.js"],(function(r,i){"use strict";var u,c,f,s,p,v,d,y,h,g,m,b;return{setters:[function(e){u=e.b2,c=e.c,f=e.b3,s=e.r,p=e.i,v=e.j,d=e.u,y=e.ag,h=e.R,g=e.f,m=e.I},function(e){b=e.S}],execute:function(){function i(e,r){if(null==e)return e;if(0===e.length&&(!r||r&&""!==e))return null;var t=e instanceof Array?e[0]:e;return null==t||r||""!==t?t:null}var j=r("S",{encode:function(e){return null==e?e:String(e)},decode:function(e){var r=i(e,!0);return null==r?r:String(r)}});r("N",{encode:function(e){return null==e?e:String(e)},decode:function(e){var r=i(e);return null==r?r:""===r?null:+r}});var S=new(function(){return e=function e(){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),this.paramsMap=new Map,this.registeredParams=new Map},(r=[{key:"set",value:function(e,r,t,n){this.paramsMap.set(e,{stringified:r,decoded:t,decode:n})}},{key:"has",value:function(e,r,t){if(!this.paramsMap.has(e))return!1;var n=this.paramsMap.get(e);return!!n&&n.stringified===r&&(null==t||n.decode===t)}},{key:"get",value:function(e){var r;if(this.paramsMap.has(e))return null==(r=this.paramsMap.get(e))?void 0:r.decoded}},{key:"registerParams",value:function(e){var r,t=o(e);try{for(t.s();!(r=t.n()).done;){var n=r.value,a=this.registeredParams.get(n)||0;this.registeredParams.set(n,a+1)}}catch(i){t.e(i)}finally{t.f()}}},{key:"unregisterParams",value:function(e){var r,t=o(e);try{for(t.s();!(r=t.n()).done;){var n=r.value,a=(this.registeredParams.get(n)||0)-1;a<=0?(this.registeredParams.delete(n),this.paramsMap.has(n)&&this.paramsMap.delete(n)):this.registeredParams.set(n,a)}}catch(i){t.e(i)}finally{t.f()}}},{key:"clear",value:function(){this.paramsMap.clear(),this.registeredParams.clear()}}])&&l(e.prototype,r),t&&l(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,r,t}());function O(e,r,n,a){var i;if(!n||!r.length)return e;var u,l=t({},e),c=!1,f=o(r);try{for(f.s();!(u=f.n()).done;){var s=u.value;Object.prototype.hasOwnProperty.call(l,s)||(l[s]=null!=(i=n[s])?i:a,c=!0)}}catch(p){f.e(p)}finally{f.f()}return c?l:e}var w,P,k,M=Object.prototype.hasOwnProperty;function C(e,r){return e===r?0!==e||0!==r||1/e==1/r:e!=e&&r!=r}function T(e,r,t){var n,o;if(C(e,r))return!0;if("object"!==a(e)||null===e||"object"!==a(r)||null===r)return!1;var i=Object.keys(e),u=Object.keys(r);if(i.length!==u.length)return!1;for(var l=0;l<i.length;l++){var c=null!=(o=null==(n=null==t?void 0:t[i[l]])?void 0:n.equals)?o:C;if(!M.call(r,i[l])||!c(e[i[l]],r[i[l]]))return!1}return!0}function E(e,r,t){for(var n={},a=0,o=Object.keys(r);a<o.length;a++){var i=o[a],u=r[i],l=e[i],c=void 0;if(t.has(i,l,u.decode))c=t.get(i);else{if(c=u.decode(l),u.equals&&t.has(i,l)){var f=t.get(i);u.equals(c,f)&&(c=f)}void 0!==c&&t.set(i,l,c,u.decode)}void 0===c&&void 0!==u.default&&(c=u.default),n[i]=c}return n}function A(){var e;return function(r,t,n){var a=E(r,t,n);return null!=e&&T(e,a)?e:(e=a,a)}}var x={},D=function(r,t,n){if(w===t&&k===r&&P===n)return x;w=t,k=r;var a=r(null!=t?t:"");P=n;for(var o=function(e){if(e)return Object.fromEntries(e.split("\n").map((function(e){return e.split("\0")})))}(n),i=0,u=Object.entries(a);i<u.length;i++){var l=e(u[i],2),c=l[0],f=l[1];(null==o?void 0:o[c])&&(delete a[c],a[c=o[c]]=f);var s=x[c];T(f,s)&&(a[c]=s)}return x=a,a};function N(e){var r,n=e.changes,a=e.updateType,o=e.currentSearchString,i=e.paramConfigMap,u=e.options,l=u.searchStringToObject,c=u.objectToSearchString;null==a&&(a=u.updateType);var f,s,p=D(l,o),v=O(i,Object.keys(n),u.params);"function"==typeof n?f=n(E(p,v,S)):f=n;return r=function(e,r){for(var t={},n=0,a=Object.keys(r);n<a.length;n++){var o=a[n],i=r[o];e[o]?t[o]=e[o].encode(r[o]):t[o]=null==i?i:String(i)}return t}(v,f),u.removeDefaultsFromUrl&&function(e,r){var t;for(var n in e)void 0!==(null==(t=r[n])?void 0:t.default)&&void 0!==e[n]&&r[n].encode(r[n].default)===e[n]&&(e[n]=void 0)}(r,v),r=function(e,r){var t,n={};for(var a in e)null!=(null==(t=r[a])?void 0:t.urlName)?n[r[a].urlName]=e[a]:n[a]=e[a];return n}(r,v),(null==(s=c("push"===a||"replace"===a?r:t(t({},p),r)))?void 0:s.length)&&"?"!==s[0]&&(s="?".concat(s)),null!=s?s:""}var I=function(e){return e()},q=function(e){return setTimeout((function(){return e()}),0)},K=[];function L(e){var r=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).immediate;K.push(e);var n=r?I:q;1===K.length&&n((function(){var r=K.slice();K.length=0;for(var n,a=r[0].currentSearchString,o=0;o<r.length;++o){n=N(0===o?r[o]:t(t({},r[o]),{},{currentSearchString:n}))}e.options.skipUpdateWhenNoChange&&n===a||function(e){var r=e.searchString,n=e.adapter,a=e.navigate,o=e.updateType,i=t(t({},n.location),{},{search:r});a&&("string"==typeof o&&o.startsWith("replace")?n.replace(i):n.push(i))}({searchString:null!=n?n:"",adapter:r[r.length-1].adapter,navigate:!0,updateType:r[r.length-1].updateType})}))}var R=function(r,t){var n=u(),o=n.adapter,i=n.options,l=e(c.useState(A),1)[0],s=function(e,r){var t,n;void 0===e?(t={},n=r):Array.isArray(e)?(t=Object.fromEntries(e.map((function(e){return[e,"inherit"]}))),n=r):(t=e,n=r);return{paramConfigMap:t,options:n}}(r,t),p=s.paramConfigMap,v=s.options,d=c.useMemo((function(){return f(i,v)}),[i,v]),y=function(e,r){var t,n,o,i={},u=!1,l=Object.keys(e),c=l;if(r.includeKnownParams||!1!==r.includeKnownParams&&0===l.length){var f=Object.keys(null!=(t=r.params)?t:{});c.push.apply(c,f)}for(var s=0,p=c;s<p.length;s++){var v=p[s],d=e[v];null==d||"object"!==a(d)?(u=!0,i[v]=null!=(o=null==(n=r.params)?void 0:n[v])?o:j):i[v]=d}return u?i:e}(p,d),h=D(d.searchStringToObject,o.location.search,function(e){var r;for(var t in e)if(e[t].urlName){var n=e[t].urlName,a="".concat(n,"\0").concat(t);r?r.push(a):r=[a]}return r?r.join("\n"):void 0}(y));d.includeAllParams&&(y=O(y,Object.keys(h),d.params,j));var g=l(h,y,S),m=Object.keys(y).join("\0");c.useEffect((function(){var e=m.split("\0");return S.registerParams(e),function(){S.unregisterParams(e)}}),[m]);var b={adapter:o,paramConfigMap:y,options:d},w=c.useRef(b);return null==w.current&&(w.current=b),c.useEffect((function(){w.current.adapter=o,w.current.paramConfigMap=y,w.current.options=d}),[o,y,d]),[g,e(c.useState((function(){return function(e,r){var t=w.current,n=t.adapter,a=t.paramConfigMap,o=t.options;null==r&&(r=o.updateType),L({changes:e,updateType:r,currentSearchString:n.location.search,paramConfigMap:a,options:o,adapter:n},{immediate:!o.enableBatching})}})),1)[0]]};var F=r("u",(function(r,t,a){var o=c.useMemo((function(){return n({},r,null!=t?t:"inherit")}),[r,t]),i=e(R(o,a),2),u=i[0],l=i[1];return[u[r],c.useCallback((function(e,t){return l("function"==typeof e?function(t){var a=e(t[r]);return n({},r,a)}:n({},r,e),t)}),[r,l])]})),U={},B=p;Object.defineProperty(U,"__esModule",{value:!0});var W=r("d",U.default=void 0),_=B(s()),z=v;r("d",W=U.default=(0,_.default)((0,z.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search"));r("A",(function(r){var t=r.isClosable,n=void 0===t||t,a=d().t,o=e(c.useState(),2),i=o[0],u=o[1],l=y(),f=e(F("query",j),2),s=f[0],p=f[1],S=e(c.useState(!n||!!s),2),O=S[0],w=S[1],P=h.useRef(),k=e(c.useState(null!=s?s:""),2),M=k[0],C=k[1];i!==l.key&&(u(l.key),C(null!=s?s:""),w(!n||!!s));var T=O||!!s,E=function(e){var r;n&&(w(e),e&&(null===(r=P.current)||void 0===r||r.focus()))};var A=function(e){("F3"===e.key||e.ctrlKey&&"f"===e.key)&&(e.preventDefault(),E(!0))};return c.useEffect((function(){return window.addEventListener("keydown",A),function(){window.removeEventListener("keydown",A)}}),[A]),T?v.jsx(b,{autoFocus:!0,variant:"standard",value:M,onCancel:function(){C(""),p(void 0),E(!1)},onChange:function(e){return C(e.target.value)},onKeyDown:function(e){var r;"Enter"===e.key&&""!==(r=M)&&(p(r),E(!1))},onBlur:function(){M||E(!1)},inputRef:P}):v.jsx(g,{title:a("search.title.search"),children:v.jsx(m,{onClick:function(){return E(!0)},children:v.jsx(W,{})})})}))}}}))}();
