!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,r,n){return(r=function(e){var r=function(e,r){if("object"!=t(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,r||"default");if("object"!=t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==t(r)?r:r+""}(r))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],c=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,e)||o(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||o(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){if(t){if("string"==typeof t)return i(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function a(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */a=function(){return r};var e,r={},n=Object.prototype,o=n.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},u="function"==typeof Symbol?Symbol:{},c=u.iterator||"@@iterator",l=u.asyncIterator||"@@asyncIterator",s=u.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(e){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,a=Object.create(o.prototype),u=new A(n||[]);return i(a,"_invoke",{value:C(t,r,u)}),a}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}r.wrap=h;var p="suspendedStart",y="suspendedYield",v="executing",m="completed",g={};function b(){}function x(){}function w(){}var j={};f(j,c,(function(){return this}));var L=Object.getPrototypeOf,E=L&&L(L(I([])));E&&E!==n&&o.call(E,c)&&(j=E);var S=w.prototype=b.prototype=Object.create(j);function _(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function k(e,r){function n(i,a,u,c){var l=d(e[i],e,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==t(f)&&o.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,u,c)}),(function(t){n("throw",t,u,c)})):r.resolve(f).then((function(t){s.value=t,u(s)}),(function(t){return n("throw",t,u,c)}))}c(l.arg)}var a;i(this,"_invoke",{value:function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return a=a?a.then(o,o):o()}})}function C(t,r,n){var o=p;return function(i,a){if(o===v)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:e,done:!0}}for(n.method=i,n.arg=a;;){var u=n.delegate;if(u){var c=O(u,n);if(c){if(c===g)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var l=d(t,r,n);if("normal"===l.type){if(o=n.done?m:y,l.arg===g)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=m,n.method="throw",n.arg=l.arg)}}}function O(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=d(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function I(r){if(r||""===r){var n=r[c];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var i=-1,a=function t(){for(;++i<r.length;)if(o.call(r,i))return t.value=r[i],t.done=!1,t;return t.value=e,t.done=!0,t};return a.next=a}}throw new TypeError(t(r)+" is not iterable")}return x.prototype=w,i(S,"constructor",{value:w,configurable:!0}),i(w,"constructor",{value:x,configurable:!0}),x.displayName=f(w,s,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,f(t,s,"GeneratorFunction")),t.prototype=Object.create(S),t},r.awrap=function(t){return{__await:t}},_(k.prototype),f(k.prototype,l,(function(){return this})),r.AsyncIterator=k,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new k(h(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(S),f(S,s,"Generator"),f(S,c,(function(){return this})),f(S,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=I,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),l=o.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:I(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},r}function u(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}System.register(["./index-legacy-CyeEHa1X.js","./UpdateChecker-legacy-Dy4xP0ce.js","./Virtuoso.util-legacy-zUDE_FvT.js","./Avatar-legacy-I2HUp19Q.js","./Progress-legacy-Ciz-pVPU.js"],(function(t,o){"use strict";var i,c,l,s,f,h,d,p,y,v,m,g,b,x,w,j,L,E,S,_,k,C,O,P,T,A,I,G,N,F,D,U,R,M,K,H,z;return{setters:[function(t){i=t.f,c=t.a9,l=t.u,s=t.aK,f=t.j,h=t.C,d=t.a,p=t.L,y=t.A,v=t.b,m=t.B,g=t.S,b=t.a7,x=t.bK,w=t.H,j=t.J,L=t.i,E=t.I,S=t.R,_=t.ah,k=t.r,C=t.n,O=t.l,P=t.N,T=t.E,A=t.m,I=t.T,G=t.bL,N=t.k,F=t.bM,D=t.bN},function(t){U=t.U},function(t){R=t.V,M=t.S,K=t.a,H=t.b},function(t){z=t.A},null],execute:function(){var o=i.memo((function(t){var e=t.chapter,r=e.manga,n=c.useDownloadStatusFromCache(e.id),o=l().t,i=s(),P=function(){var t,r=(t=a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k.addChapterToDownloadQueue(e.id).response;case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),C(o("download.queue.error.label.failed_to_remove"),"error",O(t.t0));case 8:case"end":return t.stop()}}),t,null,[[0,5]])})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){u(i,n,o,a,c,"next",t)}function c(t){u(i,n,o,a,c,"throw",t)}a(void 0)}))});return function(){return r.apply(this,arguments)}}();return f.jsx(h,{children:f.jsx(d,{component:p,to:y.reader.path(e.manga.id,e.sourceOrder),state:i.state,sx:{color:function(t){return t.palette.text[e.isRead?"disabled":"primary"]}},children:f.jsxs(v,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:1.5},children:[f.jsxs(m,{sx:{display:"flex",flexGrow:1},children:[f.jsx(p,{to:y.manga.path(e.manga.id),style:{textDecoration:"none"},children:f.jsx(z,{variant:"rounded",sx:{width:56,height:56,flex:"0 0 auto",marginRight:1,background:"transparent"},children:f.jsx(g,{imgStyle:{objectFit:"cover",width:"100%",height:"100%",imageRendering:"pixelated"},spinnerStyle:{small:!0},alt:r.title,src:b.getThumbnailUrl(r)})})}),f.jsxs(m,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",flexGrow:1,flexShrink:1,wordBreak:"break-word"},children:[f.jsx(x,{variant:"h6",component:"h3",children:r.title}),f.jsx(x,{variant:"caption",display:"block",lines:1,children:e.name})]})]}),f.jsx(w,{chapterId:e.id}),(null==n?void 0:n.state)===j.Error&&f.jsx(L,{title:o("global.button.retry"),children:f.jsx(E,{onClick:function(t){t.preventDefault(),t.stopPropagation(),P()},size:"large",children:f.jsx(S,{})})}),null==n&&!e.isDownloaded&&f.jsx(L,{title:o("chapter.action.download.add.label.action"),children:f.jsx(E,{onClick:function(t){t.stopPropagation(),t.preventDefault(),k.addChapterToDownloadQueue(e.id).response.catch((function(t){return C(o("global.error.label.failed_to_save_changes"),"error",O(t))}))},size:"large",children:f.jsx(_,{})})})]})})})}));t("Updates",(function(){var t,a=l().t,u=i.useContext(P),c=u.setTitle,s=u.setAction,h=k.useGetRecentlyUpdatedChapters(void 0,{fetchPolicy:"cache-and-network",notifyOnNetworkStatusChange:!0}),d=h.data,p=h.loading,y=h.error,v=h.fetchMore,m=h.refetch,g=!(null==d||!d.chapters.pageInfo.hasNextPage),b=null==d?void 0:d.chapters.pageInfo.endCursor,x=null!==(t=null==d?void 0:d.chapters.nodes)&&void 0!==t?t:[],w=i.useMemo((function(){return function(t){if(!t.length)return[];var e=new Map;return t.forEach((function(t){var r,n=F(D(Number(t.fetchedAt)));e.set(n,(null!==(r=e.get(n))&&void 0!==r?r:0)+1)})),n(e.entries())}(x)}),[x]),j=i.useMemo((function(){return w.map((function(t){return t[1]}))}),[w]),L=R.useCreateGroupedComputeItemKey(j,i.useCallback((function(t){return w[t][0]}),[w]),i.useCallback((function(t){return x[t].id}),[x])),E=i.useRef(null),S=r(i.useState(0),2),_=S[0],C=S[1];i.useLayoutEffect((function(){var t,e;C(null!==(t=null===(e=E.current)||void 0===e?void 0:e.clientHeight)&&void 0!==t?t:0)}),[E.current]);var z=k.useGetLastGlobalUpdateTimestamp({fetchPolicy:"cache-only"}).data,B=null==z?void 0:z.lastUpdateTimestamp.timestamp;i.useLayoutEffect((function(){return c(a("updates.title")),s(f.jsx(U,{})),function(){c(""),s(null)}}),[a,B]);var J=i.useCallback((function(){g&&v({variables:{offset:x.length}})}),[g,b]);return y?f.jsx(T,{message:a("global.error.label.failed_to_load_data"),messageExtra:O(y),retry:function(){return m().catch(A())}}):p||0!==x.length?f.jsxs(f.Fragment,{children:[f.jsx(I,{ref:E,sx:{marginLeft:"10px",paddingTop:function(t){return e({},t.breakpoints.up("sm"),{paddingTop:"6px"})}},children:a("library.settings.global_update.label.last_update",{date:B?G.format(+B):"-"})}),f.jsx(M,{heightToSubtract:_,style:{height:"undefined"},components:{Footer:function(){return p?f.jsx(N,{usePadding:!0}):null}},overscan:.5*window.innerHeight,endReached:J,groupCounts:j,groupContent:function(t){return f.jsx(K,{isFirstItem:0===t,children:f.jsx(I,{variant:"h5",component:"h2",children:w[t][0]})})},computeItemKey:L,itemContent:function(t){return f.jsx(H,{children:f.jsx(o,{chapter:x[t]})})}})]}):f.jsx(T,{message:a("updates.error.label.no_updates_available")})}))}}}))}();
