!function(){function t(r){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(r)}function r(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */r=function(){return n};var e,n={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(t,r,e){t[r]=e.value},u="function"==typeof Symbol?Symbol:{},c=u.iterator||"@@iterator",f=u.asyncIterator||"@@asyncIterator",l=u.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(e){s=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var o=r&&r.prototype instanceof b?r:b,i=Object.create(o.prototype),u=new M(n||[]);return a(i,"_invoke",{value:S(t,e,u)}),i}function p(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}n.wrap=h;var y="suspendedStart",v="suspendedYield",d="executing",g="completed",m={};function b(){}function w(){}function x(){}var O={};s(O,c,(function(){return this}));var j=Object.getPrototypeOf,E=j&&j(j(A([])));E&&E!==o&&i.call(E,c)&&(O=E);var k=x.prototype=b.prototype=Object.create(O);function P(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function L(r,e){function n(o,a,u,c){var f=p(r[o],r,a);if("throw"!==f.type){var l=f.arg,s=l.value;return s&&"object"==t(s)&&i.call(s,"__await")?e.resolve(s.__await).then((function(t){n("next",t,u,c)}),(function(t){n("throw",t,u,c)})):e.resolve(s).then((function(t){l.value=t,u(l)}),(function(t){return n("throw",t,u,c)}))}c(f.arg)}var o;a(this,"_invoke",{value:function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}})}function S(t,r,n){var o=y;return function(i,a){if(o===d)throw Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:e,done:!0}}for(n.method=i,n.arg=a;;){var u=n.delegate;if(u){var c=_(u,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var f=p(t,r,n);if("normal"===f.type){if(o=n.done?g:v,f.arg===m)continue;return{value:f.arg,done:n.done}}"throw"===f.type&&(o=g,n.method="throw",n.arg=f.arg)}}}function _(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,_(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var i=p(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,m;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function N(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function C(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function A(r){if(r||""===r){var n=r[c];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,a=function t(){for(;++o<r.length;)if(i.call(r,o))return t.value=r[o],t.done=!1,t;return t.value=e,t.done=!0,t};return a.next=a}}throw new TypeError(t(r)+" is not iterable")}return w.prototype=x,a(k,"constructor",{value:x,configurable:!0}),a(x,"constructor",{value:w,configurable:!0}),w.displayName=s(x,l,"GeneratorFunction"),n.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===w||"GeneratorFunction"===(r.displayName||r.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,s(t,l,"GeneratorFunction")),t.prototype=Object.create(k),t},n.awrap=function(t){return{__await:t}},P(L.prototype),s(L.prototype,f,(function(){return this})),n.AsyncIterator=L,n.async=function(t,r,e,o,i){void 0===i&&(i=Promise);var a=new L(h(t,r,e,o),i);return n.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},P(k),s(k,l,"Generator"),s(k,c,(function(){return this})),s(k,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=A,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],u=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),f=i.call(a,"finallyLoc");if(c&&f){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!f)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=r,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),m},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),C(e),m}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;C(e)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:A(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},n}function e(t,r,e,n,o,i,a){try{var u=t[i](a),c=u.value}catch(f){return void e(f)}u.done?r(c):Promise.resolve(c).then(n,o)}function n(t){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=t.apply(r,n);function u(t){e(a,o,i,u,c,"next",t)}function c(t){e(a,o,i,u,c,"throw",t)}u(void 0)}))}}function o(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function i(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?o(Object(e),!0).forEach((function(r){a(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function a(r,e,n){var o;return o=function(r,e){if("object"!=t(r)||!r)return r;var n=r[Symbol.toPrimitive];if(void 0!==n){var o=n.call(r,e||"default");if("object"!=t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(r)}(e,"string"),(e="symbol"==t(o)?o:o+"")in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}function u(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,i,a,u=[],c=!0,f=!1;try{if(i=(e=e.call(t)).next,0===r){if(Object(e)!==e)return;c=!1}else for(;!(c=(n=i.call(e)).done)&&(u.push(n.value),u.length!==r);c=!0);}catch(t){f=!0,o=t}finally{try{if(!c&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(f)throw o}}return u}}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return c(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return c(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}System.register(["./index-legacy-C182Zjs5.js"],(function(t,e){"use strict";var o,a,c;return{setters:[function(t){o=t.a,a=t.bH,c=t.bA}],execute:function(){var e="webUI_",f=["deleteChaptersManuallyMarkedRead","deleteChaptersWhileReading","deleteChaptersWithBookmark","showAddToLibraryCategorySelectDialog","ignoreFilters","removeMangaFromCategories","devices","migrateChapters","migrateCategories","migrateTracking","deleteChapters","hideLibraryEntries","updateProgressAfterReading","updateProgressManualMarkRead"],l=[{keys:[{oldKey:"loadNextonEnding",newKey:"loadNextOnEnding"}]},{keys:[{oldKey:"deleteChaptersAutoMarkedRead",newKey:"deleteChaptersWhileReading"}]}],s=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,n=!f.includes(t)&&a()!==c;return"".concat(r).concat(n?"".concat(a(),"_"):"").concat(t)},h=function(t,r,e){return Object.prototype.hasOwnProperty.call(null!=t?t:{},s(r,e))},p=(t("b",(function(t){if(t){var r={};return t.forEach((function(t){var e=t.key,n=t.value;r[e]=n})),r}})),t("c",(function(t){if(t)return Object.entries(t).map((function(t){var r=u(t,2);return{key:r[0],value:r[1]}}))})),function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,n={};return Object.entries(t).forEach((function(t){var e=u(t,2),o=e[0],i=e[1];o.startsWith(r)&&(n[o]=i)})),n}),y=function(t){if(t){var r=[[0,t]];return l.forEach((function(t,n){var o=n+1,a=function(t,r){var e=i({},t);if(!r.appKeyPrefix)return e;var n=r.appKeyPrefix,o=n.oldPrefix,a=n.newPrefix,u=p(t,o),c=p(t,a),f=Object.keys(u).filter((function(t){return!Object.keys(c).includes(t)}));return f.length&&f.forEach((function(t){var r=t.replace(o,a);e[r]=u[t]})),e}(r[o-1][1],t),u=function(t,r,e){var n=i({},t);if(!r.values)return n;var o=p(t,e);return r.values.forEach((function(r){var i=r.key,a=r.oldValue,u=r.newValue,c=function(r){t[r]===a&&(n[r]=u)};void 0===i?Object.keys(o).forEach((function(t){c(t)})):h(t,i,e)&&c(s(i,e))})),n}(a,t,function(t){var r,n,o=l.slice(0,t).reverse().find((function(t){return!!t.appKeyPrefix}));return null!==(r=null==o||null===(n=o.appKeyPrefix)||void 0===n?void 0:n.newPrefix)&&void 0!==r?r:e}(o)),c=function(t,r){var e=i({},t);return r.keys?(r.keys.forEach((function(r){var n=r.oldKey,o=r.newKey;h(t,n)&&(h(t,o)||(e[s(o)]=t[s(n)]))})),e):e}(u,t);r.push([o,c])})),r.length>1?r.pop()[1]:i({},t)}},v=function(t,r,e){var n,o=t.meta,i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3]?y(o):o;return void 0!==i&&h(i,r)?(n=i[s(r)],Number.isNaN(+n)?"true"===n||"false"===n?"true"===n:"undefined"!==n?n:void 0:+n):e},d=(t("g",(function(t,r,e){var n=t.meta,o={};return Object.entries(r).forEach((function(t){var r=u(t,2),i=r[0],a=r[1];o[i]=v({meta:n},i,a,e)})),o})),function(){var t=n(r().mark((function t(e,n,i,a){var u;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:u=s(i),t.t0=n,t.next="category"===t.t0?4:"chapter"===t.t0?7:"global"===t.t0?10:"manga"===t.t0?13:16;break;case 4:return t.next=6,o.setCategoryMeta(e.id,u,a).response;case 6:case 9:case 12:case 15:return t.abrupt("break",17);case 7:return t.next=9,o.setChapterMeta(e.id,u,a).response;case 10:return t.next=12,o.setGlobalMetadata(u,a).response;case 13:return t.next=15,o.setMangaMeta(e.id,u,a).response;case 16:throw new Error('requestUpdateMetadataValue: unknown holderType "'.concat(n,'"'));case 17:case"end":return t.stop()}}),t)})));return function(r,e,n,o){return t.apply(this,arguments)}}()),g=function(){var t=n(r().mark((function t(e,n,o){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Promise.all(o.map((function(t){var r=u(t,2),o=r[0],i=r[1];return d(e,n,o,i)}))));case 1:case"end":return t.stop()}}),t)})));return function(r,e,n){return t.apply(this,arguments)}}();t("a",function(){var t=n(r().mark((function t(e){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",g({},"global",e));case 1:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()),t("r",function(){var t=n(r().mark((function t(e,n){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",g(e,"manga",n));case 1:case"end":return t.stop()}}),t)})));return function(r,e){return t.apply(this,arguments)}}())}}}))}();
