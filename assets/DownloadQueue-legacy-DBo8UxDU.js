!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}var e=["children"];function r(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */r=function(){return n};var e,n={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",s=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(e){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,i=Object.create(o.prototype),c=new z(n||[]);return a(i,"_invoke",{value:_(t,r,c)}),i}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=h;var p="suspendedStart",v="suspendedYield",y="executing",m="completed",g={};function b(){}function w(){}function x(){}var j={};f(j,u,(function(){return this}));var O=Object.getPrototypeOf,E=O&&O(O(C([])));E&&E!==o&&i.call(E,u)&&(j=E);var S=x.prototype=b.prototype=Object.create(j);function L(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function P(e,r){function n(o,a,c,u){var l=d(e[o],e,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==t(f)&&i.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return n("throw",t,c,u)}))}u(l.arg)}var o;a(this,"_invoke",{value:function(t,e){function i(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(i,i):i()}})}function _(t,r,n){var o=p;return function(i,a){if(o===y)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:e,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=k(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var l=d(t,r,n);if("normal"===l.type){if(o=n.done?m:v,l.arg===g)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=m,n.method="throw",n.arg=l.arg)}}}function k(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=d(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function D(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function z(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(D,this),this.reset(!0)}function C(r){if(r||""===r){var n=r[u];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,a=function t(){for(;++o<r.length;)if(i.call(r,o))return t.value=r[o],t.done=!1,t;return t.value=e,t.done=!0,t};return a.next=a}}throw new TypeError(t(r)+" is not iterable")}return w.prototype=x,a(S,"constructor",{value:x,configurable:!0}),a(x,"constructor",{value:w,configurable:!0}),w.displayName=f(x,s,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,f(t,s,"GeneratorFunction")),t.prototype=Object.create(S),t},n.awrap=function(t){return{__await:t}},L(P.prototype),f(P.prototype,l,(function(){return this})),n.AsyncIterator=P,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new P(h(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(S),f(S,s,"Generator"),f(S,u,(function(){return this})),f(S,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=C,z.prototype={constructor:z,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(I),!t)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),l=i.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;I(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:C(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},n}function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,c=[],u=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return a(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(e,r,n){return(r=function(e){var r=function(e,r){if("object"!=t(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,r||"default");if("object"!=t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==t(r)?r:r+""}(r))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}System.register(["./index-legacy-D9lHOVJf.js","./StrictModeDroppable-legacy-DgPMOh7-.js","./PlayArrow-legacy-DQrvjwQr.js"],(function(t,n){"use strict";var a,c,l,s,f,h,d,p,v,y,m,g,b,w,x,j,O,E,S,L,P,_,k,D,I,z,C,T,A,N,R,G;return{setters:[function(t){a=t.c,c=t.j,l=t.u,s=t.r,f=t.f,h=t.N,d=t.i,p=t.I,v=t.H,y=t.k,m=t.E,g=t.l,b=t.m,w=t.B,x=t.V,j=t.C,O=t.a,E=t.L,S=t.A,L=t.b,P=t.d,_=t.T,k=t.J,D=t.K,I=t.R,z=t.O,C=t.n},function(t){T=t.D,A=t.S,N=t.P,R=t.a},function(t){G=t.P}],execute:function(){var n=a(c.jsx("path",{d:"M6 19h4V5H6zm8-14v14h4V5z"}),"Pause"),q=a(c.jsx("path",{d:"M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3zM14 5h-3l-1-1H6L5 5H2v2h12z"}),"DeleteSweep"),F=function(t){var r=t.children,n=function(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r={};for(var n in t)if({}.hasOwnProperty.call(t,n)){if(e.includes(n))continue;r[n]=t[n]}return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}(t,e);return c.jsx(w,u(u({},n),{},{style:{height:n["data-known-size"]||void 0},children:r}))},H=function(t){var e=t.provided,r=t.item,n=t.handleDelete,o=t.handleRetry,i=l().t;return c.jsx(w,u(u(u({},e.draggableProps),e.dragHandleProps),{},{ref:e.innerRef,sx:{p:1,pb:0},children:c.jsx(j,{children:c.jsx(O,{component:E,to:S.manga.path(r.manga.id),children:c.jsxs(L,{sx:{display:"flex",alignItems:"center",p:1.5},children:[c.jsx(p,{sx:{pointerEvents:"none"},children:c.jsx(R,{})}),c.jsxs(P,{sx:{flex:1,ml:1},direction:"column",children:[c.jsx(_,{variant:"h6",component:"h3",children:r.manga.title}),c.jsx(_,{variant:"caption",sx:{display:"block"},children:r.chapter.name})]}),c.jsx(k,{download:r}),r.state===D.Error&&c.jsx(d,{title:i("global.button.retry"),children:c.jsx(p,{onClick:function(t){t.preventDefault(),t.stopPropagation(),o(r.chapter)},size:"large",children:c.jsx(I,{})})}),c.jsx(d,{title:i("chapter.action.download.delete.label.action"),children:c.jsx(p,{onClick:function(t){t.preventDefault(),t.stopPropagation(),n(r.chapter)},size:"large",children:c.jsx(z,{})})})]})})})}))};t("DownloadQueue",(function(){var t,e,a=l().t,u=i(s.useReorderChapterInDownloadQueue(),2),j=u[0],O=u[1].reset,E=s.useGetDownloadStatus({notifyOnNetworkStatusChange:!0}),S=E.data,L=E.loading,P=E.error,_=E.refetch,k=null==S?void 0:S.downloadStatus,D=null!==(t=null==k?void 0:k.queue)&&void 0!==t?t:[],I=null!==(e=null==k?void 0:k.state)&&void 0!==e?e:"STARTED",z=!D.length,R=f.useContext(h),M=R.setTitle,Q=R.setAction,V=function(){var t=o(r().mark((function t(){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.clearDownloads().response;case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),C(a("download.queue.error.label.failed_delete_all"),"error",g(t.t0));case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(){return t.apply(this,arguments)}}(),K=function(){I===v.Stopped?s.startDownloads():s.stopDownloads()};f.useLayoutEffect((function(){return M(a("download.queue.title")),Q(c.jsxs(c.Fragment,{children:[c.jsx(d,{title:a("download.queue.label.delete_all"),children:c.jsx(p,{onClick:V,size:"large",color:"inherit",children:c.jsx(q,{})})}),c.jsx(d,{title:a(I===v.Started?"global.button.start":"global.button.stop"),children:c.jsx(p,{onClick:K,size:"large",disabled:z,color:"inherit",children:I===v.Stopped?c.jsx(G,{}):c.jsx(n,{})})})]})),function(){M(""),Q(null)}}),[a,I,z]),f.useEffect((function(){var t=function(t){"ResizeObserver loop completed with undelivered notifications."!==t.message&&"ResizeObserver loop limit exceeded"!==t.message||t.stopImmediatePropagation()};return window.addEventListener("error",t),function(){return window.removeEventListener("error",t)}}),[]);var Y=function(){var t=o(r().mark((function t(e){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.addChapterToDownloadQueue(e.id).response;case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),C(a("download.queue.error.label.failed_to_remove"),"error",g(t.t0));case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(e){return t.apply(this,arguments)}}(),B=function(){var t=o(r().mark((function t(e){var n;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=I===v.Started,t.prev=1,!n){t.next=5;break}return t.next=5,s.stopDownloads().response;case 5:return t.next=7,Promise.all([s.removeChapterFromDownloadQueue(e.id).response,s.deleteDownloadedChapter(e.id).response]);case 7:t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),C(a("download.queue.error.label.failed_to_retry"),"error",g(t.t0));case 12:if(n){t.next=14;break}return t.abrupt("return");case 14:s.startDownloads().response.catch(b());case 15:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}();return L?c.jsx(y,{}):P?c.jsx(m,{message:a("global.error.label.failed_to_load_data"),messageExtra:g(P),retry:function(){return _().catch(b())}}):z?c.jsx(m,{message:a("download.queue.label.no_downloads")}):c.jsx(T,{onDragEnd:function(t){var e,r,n;t.destination&&(e=D,r=t.source.index,n=t.destination.index,r!==n&&j({variables:{input:{chapterId:e[r].chapter.id,to:n}}}).catch((function(){O()})))},children:c.jsx(A,{droppableId:"droppable",mode:"virtual",renderClone:function(t,e,r){return c.jsx(H,{provided:t,item:D[r.source.index],handleDelete:B,handleRetry:Y})},children:function(t){return c.jsx(w,{ref:t.innerRef,children:c.jsx(x,{useWindowScroll:!0,overscan:.5*window.innerHeight,data:D,components:{Item:F},computeItemKey:function(t,e){return e.chapter.id},itemContent:function(t,e){return c.jsx(N,{draggableId:"".concat(e.chapter.id),index:t,children:function(t){return c.jsx(H,{provided:t,item:e,handleDelete:B,handleRetry:Y})}})}})})}})})}))}}}))}();