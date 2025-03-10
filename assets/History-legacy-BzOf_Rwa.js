!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return n};var r,n={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",s=c.toStringTag||"@@toStringTag";function h(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(r){h=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof x?e:x,i=Object.create(o.prototype),c=new N(n||[]);return a(i,"_invoke",{value:S(t,r,c)}),i}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=f;var p="suspendedStart",y="suspendedYield",v="executing",g="completed",m={};function x(){}function w(){}function b(){}var j={};h(j,u,(function(){return this}));var L=Object.getPrototypeOf,E=L&&L(L(I([])));E&&E!==o&&i.call(E,u)&&(j=E);var _=b.prototype=x.prototype=Object.create(j);function k(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function O(e,r){function n(o,a,c,u){var l=d(e[o],e,a);if("throw"!==l.type){var s=l.arg,h=s.value;return h&&"object"==t(h)&&i.call(h,"__await")?r.resolve(h.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(h).then((function(t){s.value=t,c(s)}),(function(t){return n("throw",t,c,u)}))}u(l.arg)}var o;a(this,"_invoke",{value:function(t,e){function i(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(i,i):i()}})}function S(t,e,n){var o=p;return function(i,a){if(o===v)throw Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:r,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=C(c,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var l=d(t,e,n);if("normal"===l.type){if(o=n.done?g:y,l.arg===m)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=g,n.method="throw",n.arg=l.arg)}}}function C(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,C(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var i=d(o,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,m;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,m):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function G(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function I(e){if(e||""===e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function t(){for(;++o<e.length;)if(i.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=r,t.done=!0,t};return a.next=a}}throw new TypeError(t(e)+" is not iterable")}return w.prototype=b,a(_,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:w,configurable:!0}),w.displayName=h(b,s,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,h(t,s,"GeneratorFunction")),t.prototype=Object.create(_),t},n.awrap=function(t){return{__await:t}},k(O.prototype),h(O.prototype,l,(function(){return this})),n.AsyncIterator=O,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new O(f(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(_),h(_,s,"Generator"),h(_,u,(function(){return this})),h(_,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=I,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(G),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),l=i.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),G(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;G(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:I(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),m}},n}function r(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}System.register(["./index-legacy-DLGTxi1f.js","./Virtuoso.util-legacy-Dd8yX5DU.js","./Avatar-legacy-CwpL6KkY.js"],(function(t,n){"use strict";var o,i,a,c,u,l,s,h,f,d,p,y,v,g,m,x,w,b,j,L,E,_,k,O,S,C,P,G,N,I,R,T,D,F;return{setters:[function(t){o=t.h,i=t.aa,a=t.u,c=t.j,u=t.C,l=t.a,s=t.A,h=t.L,f=t.b,d=t.B,p=t.S,y=t.a7,v=t.bL,g=t.bN,m=t.bO,x=t.J,w=t.K,b=t.k,j=t.I,L=t.R,E=t.aj,_=t.r,k=t.o,O=t.m,S=t.f,C=t.E,P=t.n,G=t.T,N=t.l},function(t){I=t.V,R=t.S,T=t.a,D=t.b},function(t){F=t.A}],execute:function(){var n=o.memo((function(t){var n=t.chapter,o=n.manga,S=i.useDownloadStatusFromCache(n.id),C=a().t,P=function(){var t,o=(t=e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_.addChapterToDownloadQueue(n.id).response;case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),k(C("download.queue.error.label.failed_to_retry"),"error",O(t.t0));case 8:case"end":return t.stop()}}),t,null,[[0,5]])})),function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)}))});return function(){return o.apply(this,arguments)}}();return c.jsx(u,{children:c.jsx(l,{component:h,to:s.reader.path(n.manga.id,n.sourceOrder),state:i.getReaderOpenChapterLocationState(n),sx:{color:function(t){return t.palette.text[n.isRead?"disabled":"primary"]}},children:c.jsxs(f,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:1.5},children:[c.jsxs(d,{sx:{display:"flex",flexGrow:1},children:[c.jsx(h,{to:s.manga.path(n.manga.id),style:{textDecoration:"none"},children:c.jsx(F,{variant:"rounded",sx:{width:56,height:56,flex:"0 0 auto",marginRight:1,background:"transparent"},children:c.jsx(p,{imgStyle:{objectFit:"cover",width:"100%",height:"100%",imageRendering:"pixelated"},spinnerStyle:{small:!0},alt:o.title,src:y.getThumbnailUrl(o)})})}),c.jsxs(d,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",flexGrow:1,flexShrink:1,wordBreak:"break-word"},children:[c.jsx(v,{variant:"h6",component:"h3",children:o.title}),c.jsx(v,{variant:"caption",display:"block",lines:1,children:"".concat(n.name," — ").concat(g.format(m(Number(n.lastReadAt)).valueOf()))})]})]}),c.jsx(x,{chapterId:n.id}),(null==S?void 0:S.state)===w.Error&&c.jsx(b,{title:C("global.button.retry"),children:c.jsx(j,{onClick:function(t){t.preventDefault(),t.stopPropagation(),P()},size:"large",children:c.jsx(L,{})})}),null==S&&!n.isDownloaded&&c.jsx(b,{title:C("chapter.action.download.add.label.action"),children:c.jsx(j,{onClick:function(t){t.stopPropagation(),t.preventDefault(),_.addChapterToDownloadQueue(n.id).response.catch((function(t){return k(C("global.error.label.failed_to_save_changes"),"error",O(t))}))},size:"large",children:c.jsx(E,{})})})]})})})}));t("History",(function(){var t,e=a().t,r=S().setTitle,u=_.useGetRecentlyReadChapters(void 0,{fetchPolicy:"cache-and-network",notifyOnNetworkStatusChange:!0}),l=u.data,s=u.loading,h=u.error,f=u.fetchMore,d=u.refetch,p=!(null==l||!l.chapters.pageInfo.hasNextPage),y=null==l?void 0:l.chapters.pageInfo.endCursor,v=null!==(t=null==l?void 0:l.chapters.nodes)&&void 0!==t?t:[],g=o.useMemo((function(){return Object.entries(i.groupByDate(v,"lastReadAt"))}),[v]),m=o.useMemo((function(){return g.map((function(t){return t[I.ITEMS].length}))}),[g]),x=I.useCreateGroupedComputeItemKey(m,o.useCallback((function(t){return g[t][I.GROUP]}),[g]),o.useCallback((function(t){return v[t].id}),[v]));o.useLayoutEffect((function(){return r(e("history.title")),function(){r("")}}),[e]);var w=o.useCallback((function(){p&&f({variables:{offset:v.length}})}),[p,y]);return h?c.jsx(C,{message:e("global.error.label.failed_to_load_data"),messageExtra:O(h),retry:function(){return d().catch(P())}}):s||0!==v.length?c.jsx(R,{style:{height:"undefined"},components:{Footer:function(){return s?c.jsx(N,{usePadding:!0}):null}},overscan:.5*window.innerHeight,endReached:w,groupCounts:m,groupContent:function(t){return c.jsx(D,{isFirstItem:0===t,children:c.jsx(G,{variant:"h5",component:"h2",children:g[t][I.GROUP]})})},computeItemKey:x,itemContent:function(t){return c.jsx(T,{children:c.jsx(n,{chapter:v[t]})})}}):c.jsx(C,{message:e("history.error.label.no_history_available")})}))}}}))}();
