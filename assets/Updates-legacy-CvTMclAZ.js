!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,r,n){return(r=function(e){var r=function(e,r){if("object"!=t(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,r||"default");if("object"!=t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==t(r)?r:r+""}(r))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function r(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */r=function(){return n};var e,n={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},u="function"==typeof Symbol?Symbol:{},c=u.iterator||"@@iterator",l=u.asyncIterator||"@@asyncIterator",s=u.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(e){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,i=Object.create(o.prototype),u=new A(n||[]);return a(i,"_invoke",{value:O(t,r,u)}),i}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=h;var p="suspendedStart",y="suspendedYield",v="executing",g="completed",m={};function b(){}function x(){}function w(){}var j={};f(j,c,(function(){return this}));var L=Object.getPrototypeOf,E=L&&L(L(I([])));E&&E!==o&&i.call(E,c)&&(j=E);var S=w.prototype=b.prototype=Object.create(j);function _(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function k(e,r){function n(o,a,u,c){var l=d(e[o],e,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==t(f)&&i.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,u,c)}),(function(t){n("throw",t,u,c)})):r.resolve(f).then((function(t){s.value=t,u(s)}),(function(t){return n("throw",t,u,c)}))}c(l.arg)}var o;a(this,"_invoke",{value:function(t,e){function i(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(i,i):i()}})}function O(t,r,n){var o=p;return function(i,a){if(o===v)throw Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:e,done:!0}}for(n.method=i,n.arg=a;;){var u=n.delegate;if(u){var c=C(u,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var l=d(t,r,n);if("normal"===l.type){if(o=n.done?g:y,l.arg===m)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=g,n.method="throw",n.arg=l.arg)}}}function C(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,C(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var i=d(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,m;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function I(r){if(r||""===r){var n=r[c];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,a=function t(){for(;++o<r.length;)if(i.call(r,o))return t.value=r[o],t.done=!1,t;return t.value=e,t.done=!0,t};return a.next=a}}throw new TypeError(t(r)+" is not iterable")}return x.prototype=w,a(S,"constructor",{value:w,configurable:!0}),a(w,"constructor",{value:x,configurable:!0}),x.displayName=f(w,s,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,f(t,s,"GeneratorFunction")),t.prototype=Object.create(S),t},n.awrap=function(t){return{__await:t}},_(k.prototype),f(k.prototype,l,(function(){return this})),n.AsyncIterator=k,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new k(h(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(S),f(S,s,"Generator"),f(S,c,(function(){return this})),f(S,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=I,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],u=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),l=i.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:I(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},n}function n(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],c=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,e)||a(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||a(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){if(t){if("string"==typeof t)return u(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(t,e):void 0}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}System.register(["./index-legacy-D9lHOVJf.js","./UpdateChecker-legacy-Uw7NIOJB.js","./Virtuoso.util-legacy-1htA3-_f.js","./Avatar-legacy-CplX6aCi.js","./Progress-legacy-Cmj8eFPz.js"],(function(t,a){"use strict";var u,c,l,s,f,h,d,p,y,v,g,m,b,x,w,j,L,E,S,_,k,O,C,P,T,A,I,G,N,F,D,U,R,M,K,J;return{setters:[function(t){u=t.u,c=t.aK,l=t.f,s=t.N,f=t.r,h=t.j,d=t.E,p=t.l,y=t.m,v=t.T,g=t.bJ,m=t.k,b=t.C,x=t.a,w=t.L,j=t.A,L=t.b,E=t.B,S=t.S,_=t.a6,k=t.bK,O=t.J,C=t.K,P=t.i,T=t.I,A=t.R,I=t.ai,G=t.bL,N=t.bM,F=t.n},function(t){D=t.U},function(t){U=t.V,R=t.S,M=t.a,K=t.b},function(t){J=t.A},null],execute:function(){t("Updates",(function(){var t,a,q=u().t,z=c(),B=l.useContext(s),H=B.setTitle,Q=B.setAction,V=f.useGetRecentlyUpdatedChapters(void 0,{fetchPolicy:"cache-and-network",notifyOnNetworkStatusChange:!0}),Y=V.data,$=V.loading,W=V.error,X=V.fetchMore,Z=V.refetch,tt=!(null==Y||!Y.chapters.pageInfo.hasNextPage),et=null==Y?void 0:Y.chapters.pageInfo.endCursor,rt=null!==(t=null==Y?void 0:Y.chapters.nodes)&&void 0!==t?t:[],nt=l.useMemo((function(){return function(t){if(!t.length)return[];var e=new Map;return t.forEach((function(t){var r,n=G(N(Number(t.fetchedAt)));e.set(n,(null!==(r=e.get(n))&&void 0!==r?r:0)+1)})),i(e.entries())}(rt)}),[rt]),ot=l.useMemo((function(){return nt.map((function(t){return t[1]}))}),[nt]),it=f.useGetDownloadStatus().data,at=null!==(a=null==it?void 0:it.downloadStatus.queue)&&void 0!==a?a:[],ut=U.useCreateGroupedComputeItemKey(ot,l.useCallback((function(t){return nt[t][0]}),[nt]),l.useCallback((function(t){return rt[t].id}),[rt])),ct=l.useRef(null),lt=o(l.useState(0),2),st=lt[0],ft=lt[1];l.useLayoutEffect((function(){var t,e;ft(null!==(t=null===(e=ct.current)||void 0===e?void 0:e.clientHeight)&&void 0!==t?t:0)}),[ct.current]);var ht=f.useGetLastGlobalUpdateTimestamp({fetchPolicy:"cache-only"}).data,dt=null==ht?void 0:ht.lastUpdateTimestamp.timestamp;l.useLayoutEffect((function(){return H(q("updates.title")),Q(h.jsx(D,{})),function(){H(""),Q(null)}}),[q,dt]);var pt=function(){var t,e=(t=r().mark((function t(e){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.addChapterToDownloadQueue(e.id).response;case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),F(q("download.queue.error.label.failed_to_remove"),"error",p(t.t0));case 8:case"end":return t.stop()}}),t,null,[[0,5]])})),function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function u(t){n(a,o,i,u,c,"next",t)}function c(t){n(a,o,i,u,c,"throw",t)}u(void 0)}))});return function(t){return e.apply(this,arguments)}}(),yt=l.useCallback((function(){tt&&X({variables:{offset:rt.length}})}),[tt,et]);return W?h.jsx(d,{message:q("global.error.label.failed_to_load_data"),messageExtra:p(W),retry:function(){return Z().catch(y())}}):$||0!==rt.length?h.jsxs(h.Fragment,{children:[h.jsx(v,{ref:ct,sx:{marginLeft:"10px",paddingTop:function(t){return e({},t.breakpoints.up("sm"),{paddingTop:"6px"})}},children:q("library.settings.global_update.label.last_update",{date:dt?g.format(+dt):"-"})}),h.jsx(R,{heightToSubtract:st,style:{height:"undefined"},components:{Footer:function(){return $?h.jsx(m,{usePadding:!0}):null}},overscan:.5*window.innerHeight,endReached:yt,groupCounts:ot,groupContent:function(t){return h.jsx(M,{isFirstItem:0===t,children:h.jsx(v,{variant:"h5",component:"h2",children:nt[t][0]})})},computeItemKey:ut,itemContent:function(t){var e=rt[t],r=e.manga,n=function(t){var e=t.sourceOrder,r=t.mangaId;return at.find((function(t){return e===t.chapter.sourceOrder&&r===t.manga.id}))}(e);return h.jsx(K,{children:h.jsx(b,{children:h.jsx(x,{component:w,to:j.reader.path(e.manga.id,e.sourceOrder),state:z.state,sx:{color:function(t){return t.palette.text[e.isRead?"disabled":"primary"]}},children:h.jsxs(L,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:1.5},children:[h.jsxs(E,{sx:{display:"flex"},children:[h.jsx(w,{to:j.manga.path(e.manga.id),style:{textDecoration:"none"},children:h.jsx(J,{variant:"rounded",sx:{width:56,height:56,flex:"0 0 auto",marginRight:1,background:"transparent"},children:h.jsx(S,{imgStyle:{objectFit:"cover",width:"100%",height:"100%",imageRendering:"pixelated"},spinnerStyle:{small:!0},alt:r.title,src:_.getThumbnailUrl(r)})})}),h.jsxs(E,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",flexGrow:1,flexShrink:1,wordBreak:"break-word"},children:[h.jsx(k,{variant:"h6",component:"h3",children:r.title}),h.jsx(k,{variant:"caption",display:"block",lines:1,children:e.name})]})]}),n&&h.jsx(O,{download:n}),(null==n?void 0:n.state)===C.Error&&h.jsx(P,{title:q("global.button.retry"),children:h.jsx(T,{onClick:function(t){t.preventDefault(),t.stopPropagation(),pt(n.chapter)},size:"large",children:h.jsx(A,{})})}),null==n&&!e.isDownloaded&&h.jsx(P,{title:q("chapter.action.download.add.label.action"),children:h.jsx(T,{onClick:function(t){t.stopPropagation(),t.preventDefault(),function(t){f.addChapterToDownloadQueue(t.id).response.catch((function(t){return F(q("global.error.label.failed_to_save_changes"),"error",p(t))}))}(e)},size:"large",children:h.jsx(I,{})})})]})})})})}})]}):h.jsx(d,{message:q("updates.error.label.no_updates_available")})}))}}}))}();