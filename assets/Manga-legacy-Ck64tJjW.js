!function(){var e=["children"];function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function r(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */r=function(){return n};var e,n={},o=Object.prototype,a=o.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},l="function"==typeof Symbol?Symbol:{},c=l.iterator||"@@iterator",u=l.asyncIterator||"@@asyncIterator",s=l.toStringTag||"@@toStringTag";function d(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch(e){d=function(e,t,r){return e[t]=r}}function f(e,t,r,n){var o=t&&t.prototype instanceof y?t:y,a=Object.create(o.prototype),l=new D(n||[]);return i(a,"_invoke",{value:I(e,r,l)}),a}function h(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}n.wrap=f;var p="suspendedStart",g="suspendedYield",m="executing",v="completed",b={};function y(){}function x(){}function j(){}var w={};d(w,c,(function(){return this}));var k=Object.getPrototypeOf,C=k&&k(k(N([])));C&&C!==o&&a.call(C,c)&&(w=C);var _=j.prototype=y.prototype=Object.create(w);function S(e){["next","throw","return"].forEach((function(t){d(e,t,(function(e){return this._invoke(t,e)}))}))}function O(e,r){function n(o,i,l,c){var u=h(e[o],e,i);if("throw"!==u.type){var s=u.arg,d=s.value;return d&&"object"==t(d)&&a.call(d,"__await")?r.resolve(d.__await).then((function(e){n("next",e,l,c)}),(function(e){n("throw",e,l,c)})):r.resolve(d).then((function(e){s.value=e,l(s)}),(function(e){return n("throw",e,l,c)}))}c(u.arg)}var o;i(this,"_invoke",{value:function(e,t){function a(){return new r((function(r,o){n(e,t,r,o)}))}return o=o?o.then(a,a):a()}})}function I(t,r,n){var o=p;return function(a,i){if(o===m)throw Error("Generator is already running");if(o===v){if("throw"===a)throw i;return{value:e,done:!0}}for(n.method=a,n.arg=i;;){var l=n.delegate;if(l){var c=L(l,n);if(c){if(c===b)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=m;var u=h(t,r,n);if("normal"===u.type){if(o=n.done?v:g,u.arg===b)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=v,n.method="throw",n.arg=u.arg)}}}function L(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),b;var a=h(o,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,b;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,b):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,b)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function M(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function D(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function N(r){if(r||""===r){var n=r[c];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function t(){for(;++o<r.length;)if(a.call(r,o))return t.value=r[o],t.done=!1,t;return t.value=e,t.done=!0,t};return i.next=i}}throw new TypeError(t(r)+" is not iterable")}return x.prototype=j,i(_,"constructor",{value:j,configurable:!0}),i(j,"constructor",{value:x,configurable:!0}),x.displayName=d(j,s,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===x||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,j):(e.__proto__=j,d(e,s,"GeneratorFunction")),e.prototype=Object.create(_),e},n.awrap=function(e){return{__await:e}},S(O.prototype),d(O.prototype,u,(function(){return this})),n.AsyncIterator=O,n.async=function(e,t,r,o,a){void 0===a&&(a=Promise);var i=new O(f(e,t,r,o),a);return n.isGeneratorFunction(t)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},S(_),d(_,s,"Generator"),d(_,c,(function(){return this})),d(_,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},n.values=N,D.prototype={constructor:D,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(M),!t)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return l.type="throw",l.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],l=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=a.call(i,"catchLoc"),u=a.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,b):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),b},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),M(r),b}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;M(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:N(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),b}},n}function n(e,t,r,n,o,a,i){try{var l=e[a](i),c=l.value}catch(e){return void r(e)}l.done?t(c):Promise.resolve(c).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,a){var i=e.apply(t,r);function l(e){n(i,o,a,l,c,"next",e)}function c(e){n(i,o,a,l,c,"throw",e)}l(void 0)}))}}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,l=[],c=!0,u=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(l.push(n.value),l.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(e,t)||l(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){if(e){if("string"==typeof e)return c(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return(t=h(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,h(n.key),n)}}function h(e){var r=function(e,r){if("object"!=t(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,r||"default");if("object"!=t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==t(r)?r:r+""}System.register(["./index-legacy-C_UnwvGt.js","./index-legacy-CrllOIH1.js","./useManageMangaLibraryState-legacy-fm8ccysi.js","./DownloadStateIndicator-legacy-KeG2etH1.js","./Delete-legacy-BZGmJmtl.js","./Chapters-legacy-DAGnWAMR.js","./TypographyMaxLines-legacy-DW0w5WUT.js","./Checkbox-legacy-C2KR8XDQ.js","./PlayArrow-legacy-BFiIXtPa.js","./StyledFab-legacy-6yP0QZV6.js","./FilterList-legacy-CIz14FtX.js","./SortRadioInput-legacy-p2mWW-aA.js","./ThreeStateCheckboxInput-legacy-P4wuHLQS.js","./SelectionFAB-legacy-CQ5wkQbp.js","./ListPreference-legacy-BNnTPsBU.js","./Favorite-legacy-D4zHARvu.js","./Mangas-legacy-FlrUzfHU.js","./SpinnerImage-legacy-8ogJfrVo.js","./Sync-legacy-DF5zKcPk.js","./Trackers-legacy-CN_LuGVd.js","./Link-legacy-BQS6Zqyp.js","./Avatar-legacy-CqFdwNNl.js","./Info-legacy-6rU_V__C.js","./TextField-legacy-BuKn0AuL.js","./InputAdornment-legacy-CMvm9KtK.js","./Collapse-legacy-B23D4Rr8.js","./NumberSetting-legacy-w6TF1Lgu.js","./useMobilePicker-legacy-CTmplrXC.js","./Chip-legacy--4GFW8vq.js","./SelectSetting-legacy-BR38JMhY.js","./Select-legacy-DDeDRoIj.js","./CheckboxInput-legacy-BM5-zo2E.js","./SwitchBase-legacy-D4SV7oLp.js","./Tabs-legacy-CrSIuT64.js"],(function(t,n){"use strict";var l,c,u,h,p,g,m,v,b,y,x,j,w,k,C,_,S,O,I,L,P,M,D,N,R,E,T,B,A,z,F,G,W,V,H,U,q,Y,J,K,Q,X,$,Z,ee,te,re,ne,oe,ae,ie,le,ce,ue,se,de,fe,he,pe,ge,me,ve,be,ye,xe,je,we,ke,Ce,_e,Se,Oe,Ie,Le,Pe,Me,De,Ne,Re,Ee,Te,Be,Ae,ze,Fe,Ge,We,Ve,He,Ue,qe;return{setters:[function(e){l=e.r,c=e.i,u=e.j,h=e.u,p=e.p,g=e.c,m=e.v,v=e.h,b=e.w,y=e.P,x=e.S,j=e.L,w=e.T,k=e.x,C=e.f,_=e.I,S=e.y,O=e.z,I=e.A,L=e.C,P=e.s,M=e.a,D=e.D,N=e.g,R=e.E,E=e.F,T=e.B,B=e.b,A=e.e,z=e.G,F=e.H,G=e.J,W=e.m,V=e.K,H=e.R,U=e.O,q=e.Q,Y=e.U,J=e.V,K=e.N,Q=e.W,X=e.X,$=e.Y,Z=e.Z},function(e){ee=e.C,te=e.a,re=e.V},function(e){ne=e.M,oe=e.d,ae=e.a,ie=e.b,le=e.c,ce=e.e,ue=e.f,se=e.J,de=e.g,fe=e.h,he=e.u,pe=e.C,ge=e.T,me=e.i,ve=e.j,be=e.k,ye=e.l,xe=e.m,je=e.n},function(e){we=e.D},function(e){ke=e.d},function(e){Ce=e.C,_e=e.a},function(e){Se=e.C,Oe=e.T},function(e){Ie=e.C},function(e){Le=e.d},function(e){Pe=e.S,Me=e.D},function(e){De=e.d},function(e){Ne=e.S,Re=e.R},function(e){Ee=e.T},function(e){Te=e.O,Be=e.a,Ae=e.S,ze=e.d},function(e){Fe=e.R},function(e){Ge=e.d},function(e){We=e.M},function(e){Ve=e.S},function(e){He=e.d},function(e){Ue=e.T},function(e){qe=e.L},null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var n={},Ye=c;Object.defineProperty(n,"__esModule",{value:!0});var Je=n.default=void 0,Ke=Ye(l()),Qe=u;Je=n.default=(0,Ke.default)((0,Qe.jsx)("path",{d:"M1 21h22L12 2zm12-3h-2v-2h2zm0-4h-2v-4h2z"}),"Warning");var Xe={},$e=c;Object.defineProperty(Xe,"__esModule",{value:!0});var Ze=Xe.default=void 0,et=$e(l()),tt=u;Ze=Xe.default=(0,et.default)((0,tt.jsx)("path",{d:"m18 7-1.41-1.41-6.34 6.34 1.41 1.41zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12zM.41 13.41 6 19l1.41-1.41L1.83 12z"}),"DoneAll");var rt={},nt=c;Object.defineProperty(rt,"__esModule",{value:!0});var ot=rt.default=void 0,at=nt(l()),it=u;ot=rt.default=(0,at.default)((0,it.jsx)("path",{d:"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2"}),"Bookmark");var lt={},ct=c;Object.defineProperty(lt,"__esModule",{value:!0});var ut=lt.default=void 0,st=ct(l()),dt=u;ut=lt.default=(0,st.default)((0,dt.jsx)("path",{d:"M21 7h-6V5h6zm-2 3.9c-.32.07-.66.1-1 .1-2.76 0-5-2.24-5-5 0-1.13.37-2.16 1-3H7c-1.1 0-2 .9-2 2v16l7-3 7 3z"}),"BookmarkRemove");var ft={},ht=c;Object.defineProperty(ft,"__esModule",{value:!0});var pt=ft.default=void 0,gt=ht(l()),mt=u;pt=ft.default=(0,gt.default)((0,mt.jsx)("path",{d:"M21 7h-2v2h-2V7h-2V5h2V3h2v2h2zm-2 14-7-3-7 3V5c0-1.1.9-2 2-2h7c-.63.84-1 1.87-1 3 0 2.76 2.24 5 5 5 .34 0 .68-.03 1-.1z"}),"BookmarkAdd");var vt={},bt=c;Object.defineProperty(vt,"__esModule",{value:!0});var yt=vt.default=void 0,xt=bt(l()),jt=u;yt=vt.default=(0,xt.default)((0,jt.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39"}),"Public");var wt=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return function(e,t,r){return t&&f(e.prototype,t),r&&f(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}(e,null,[{key:"getChapters",value:function(e){return e.map((function(e){return e.chapter}))}},{key:"getIds",value:function(t){return Ce.getIds(e.getChapters(t))}},{key:"getDownloaded",value:function(e){return e.filter((function(e){var t=e.chapter;return Ce.isDownloaded(t)}))}},{key:"getDeletable",value:function(e,t){return e.filter((function(e){var r=e.chapter;return Ce.isDeletable(r,t)}))}},{key:"getNonDownloaded",value:function(e){return e.filter((function(e){var t=e.chapter;return!Ce.isDownloaded(t)}))}},{key:"getDownloadable",value:function(e){return e.filter((function(e){var t=e.chapter,r=e.downloadChapter;return!Ce.isDownloaded(t)&&!r}))}},{key:"getBookmarked",value:function(e){return e.filter((function(e){var t=e.chapter;return Ce.isBookmarked(t)}))}},{key:"getNonBookmarked",value:function(e){return e.filter((function(e){var t=e.chapter;return!Ce.isBookmarked(t)}))}},{key:"getRead",value:function(e){return e.filter((function(e){var t=e.chapter;return Ce.isRead(t)}))}},{key:"getNonRead",value:function(e){return e.filter((function(e){var t=e.chapter;return!Ce.isRead(t)}))}}])}(),kt=function(e){var t=e.chapter,r=e.allChapters,n=e.handleSelection,o=e.canBeDownloaded,a=void 0!==o&&o,i=e.selectedChapters,l=void 0===i?[]:i,c=e.onClose,s=h().t,d=!!t,f=null!=t?t:{},b=f.isDownloaded,y=f.isRead,x=f.isBookmarked,j=p().settings.deleteChaptersWithBookmark,w=le(d,_e),k=ce(d),C=ue(d),_=g.useMemo((function(){return{downloadableChapters:wt.getDownloadable(l),downloadedChapters:wt.getDownloaded(l),unbookmarkedChapters:wt.getNonBookmarked(l),bookmarkedChapters:wt.getBookmarked(l),unreadChapters:wt.getNonRead(l),readChapters:wt.getRead(l)}}),[l]),S=_.downloadableChapters,O=_.downloadedChapters,I=_.unbookmarkedChapters,L=_.bookmarkedChapters,P=_.unreadChapters,M=_.readChapters,D=function(e,n){var o,a="mark_prev_as_read"===e,i=a?"mark_as_read":e;if("delete"===i&&t&&!Ce.isDeletable(t,j))return void c();var l=function(){if(!t)return wt.getChapters(n);if(!a)return[t];var e=r.findIndex((function(e){return e.id===t.id}));return e+1>r.length-1?[]:r.slice(e+1)}();l.length?(Ce.performAction(i,Ce.getIds(l),{chapters:l,wasManuallyMarkedAsRead:!0,trackProgressMangaId:null===(o=l[0])||void 0===o?void 0:o.mangaId}).catch(v()),c()):c()};return u.jsxs(u.Fragment,{children:[d&&u.jsx(ne,{onClick:function(){null==n||n(t.id,!0),c()},Icon:oe,title:s("chapter.action.label.select")}),d&&u.jsx(ne,{Icon:yt,disabled:!t.realUrl,onClick:function(){window.open(t.realUrl,"_blank","noopener,noreferrer"),c()},title:s("chapter.action.label.open_on_source")}),k(a)&&u.jsx(ne,{Icon:m,disabled:C(!S.length),onClick:function(){return D("download",S)},title:w("download",S.length)}),k(b)&&u.jsx(ne,{Icon:ke,disabled:C(!O.length),onClick:function(){return D("delete",wt.getDeletable(O,j))},title:w("delete",O.length)}),k(!x)&&u.jsx(ne,{Icon:pt,disabled:C(!I.length),onClick:function(){return D("bookmark",I)},title:w("bookmark",I.length)}),k(x)&&u.jsx(ne,{Icon:ut,disabled:C(!L.length),onClick:function(){return D("unbookmark",L)},title:w("unbookmark",L.length)}),k(!y)&&u.jsx(ne,{Icon:ae,disabled:C(!P.length),onClick:function(){return D("mark_as_read",P)},title:w("mark_as_read",P.length)}),k(y)&&u.jsx(ne,{Icon:ie,disabled:C(!M.length),onClick:function(){return D("mark_as_unread",M)},title:w("mark_as_unread",M.length)}),d&&u.jsx(ne,{onClick:function(){return D("mark_prev_as_read",[])},Icon:Ze,title:s("chapter.action.mark_as_read.add.label.action.previous")})]})},Ct=function(e){var t=h().t,r=b(),n=g.useRef(null),o=e.chapter,a=e.allChapters,i=e.downloadChapter,l=e.showChapterNumber,c=e.onSelect,d=e.selected,f=null!==d,p=o.isDownloaded,m=function(e){f&&(e.preventDefault(),e.stopPropagation(),c(!d,e.shiftKey))},v=function(e,t){e.stopPropagation(),e.preventDefault(),t(e)},I=se((function(e,t){var r=t.context;f||!n.current?(e.shiftKey=!0,m(e)):v(e,(function(){return null==r?void 0:r(n.current)}))}));return u.jsx("li",{children:u.jsx(y,{variant:"popover",popupId:"chapter-card-action-menu",children:function(e){var h;return u.jsxs(x,{sx:{pt:1,px:1},children:[u.jsx(ee,{sx:{touchCallout:"none"},children:u.jsx(te,s(s({component:j,to:"/manga/".concat(o.mangaId,"/chapter/").concat(o.sourceOrder),style:{color:r.palette.text[o.isRead?"disabled":"primary"]},onClick:function(e){return m(e)}},I(e.open)),{},{children:u.jsxs(Se,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:2,"&:last-child":{pb:2}},children:[u.jsxs(x,{direction:"column",flex:1,children:[u.jsxs(x,{sx:{flexDirection:"row",gap:.5,alignItems:"center"},children:[o.isBookmarked&&u.jsx(ot,{color:"primary"}),u.jsx(Oe,{variant:"h5",component:"h2",children:l?"".concat(t("chapter.title_one")," ").concat(o.chapterNumber):o.name})]}),u.jsx(w,{variant:"caption",children:o.scanlator}),u.jsxs(w,{variant:"caption",children:[k(Number(null!==(h=o.uploadDate)&&void 0!==h?h:0),!0),p&&" • ".concat(t("chapter.status.label.downloaded"))]})]}),i&&u.jsx(we,{download:i}),u.jsx(x,{sx:{minHeight:"48px"},children:null===d?u.jsx(C,{title:t("global.button.options"),children:u.jsx(_,s(s({ref:n},S(e)),{},{onClick:function(t){return v(t,e.open)},onTouchStart:function(t){return v(t,e.open)},"aria-label":"more",size:"large",children:u.jsx(de,{})}))}):u.jsx(C,{title:t(d?"global.button.deselect":"global.button.select"),children:u.jsx(Ie,{checked:d})})})]})}))}),!f&&e.isOpen&&u.jsx(fe,s(s({},O(e)),{},{children:function(e){return u.jsx(kt,{onClose:e,chapter:o,allChapters:a,handleSelection:function(){return c(!0)},canBeDownloaded:!o.isDownloaded&&!i})}}))]})}})})};function _t(e){var t=h().t,r=e.chapterIndex,n=e.mangaId;return u.jsxs(Pe,{component:j,variant:"extended",color:"primary",to:"/manga/".concat(n,"/chapter/").concat(r),children:[u.jsx(Le,{}),t(1===r?"global.button.start":"global.button.resume")]})}var St={active:!1,unread:void 0,downloaded:void 0,bookmarked:void 0,reverse:!0,sortBy:"source",showChapterNumber:!1};function Ot(e,t){switch(t.type){case"filter":return s(s({},e),{},d({active:!1!==e.unread&&!1!==e.downloaded&&!1!==e.bookmarked},t.filterType,t.filterValue));case"sortBy":return s(s({},e),{},{sortBy:t.sortBy});case"sortReverse":return s(s({},e),{},{reverse:!e.reverse});case"showChapterNumber":return s(s({},e),{},{showChapterNumber:!e.showChapterNumber});default:throw Error(L("global.error.label.invalid_action"))}}function It(e,t){return function(e,t){var r=t.sortBy,n=t.reverse,o=i(e);switch(r){case"source":o.sort((function(e,t){return e.sourceOrder-t.sourceOrder}));break;case"fetchedAt":o.sort((function(e,t){var r,n;return Number(null!==(r=e.fetchedAt)&&void 0!==r?r:0)-Number(null!==(n=t.fetchedAt)&&void 0!==n?n:0)}));break;case"chapterNumber":o.sort((function(e,t){return e.chapterNumber-t.chapterNumber}));break;case"uploadedAt":o.sort((function(e,t){var r,n;return Number(null!==(r=e.uploadDate)&&void 0!==r?r:0)-Number(null!==(n=t.uploadDate)&&void 0!==n?n:0)}))}return n&&o.reverse(),o}(t.active?e.filter((function(e){return function(e,t){var r=t.isRead;switch(e){case!0:return!r;case!1:return r;default:return!0}}(t.unread,e)&&function(e,t){var r=t.isDownloaded;switch(e){case!0:return r;case!1:return!r;default:return!0}}(t.downloaded,e)&&function(e,t){var r=t.isBookmarked;switch(e){case!0:return r;case!1:return!r;default:return!0}}(t.bookmarked,e)})):i(e),t)}var Lt={source:"global.sort.label.by_source",chapterNumber:"global.sort.label.by_chapter_number",uploadedAt:"global.sort.label.by_upload_date",fetchedAt:"global.sort.label.by_fetch_date"},Pt={filter:"global.label.filter",sort:"global.label.sort",display:"global.label.display"},Mt=function(e){var t=e.open,r=e.onClose,n=e.options,o=e.optionsDispatch,i=h().t;return u.jsx(Te,{open:t,onClose:r,minHeight:150,tabs:["filter","sort","display"],tabTitle:function(e){return i(Pt[e])},tabContent:function(e){return"filter"===e?u.jsxs(u.Fragment,{children:[u.jsx(Ee,{label:i("global.filter.label.unread"),checked:n.unread,onChange:function(e){return o({type:"filter",filterType:"unread",filterValue:e})}}),u.jsx(Ee,{label:i("global.filter.label.downloaded"),checked:n.downloaded,onChange:function(e){return o({type:"filter",filterType:"downloaded",filterValue:e})}}),u.jsx(Ee,{label:i("global.filter.label.bookmarked"),checked:n.bookmarked,onChange:function(e){return o({type:"filter",filterType:"bookmarked",filterValue:e})}})]}):"sort"===e?Object.entries(Lt).map((function(e){var t=a(e,2),r=t[0],l=t[1];return u.jsx(Ne,{label:i(l),checked:n.sortBy===r,sortDescending:n.reverse,onClick:function(){return r!==n.sortBy?o({type:"sortBy",sortBy:r}):o({type:"sortReverse"})}},r)})):"display"===e?u.jsxs(Fe,{onChange:function(){return o({type:"showChapterNumber"})},value:n.showChapterNumber,children:[u.jsx(Re,{label:i("chapter.option.display.label.source_title"),value:!1}),u.jsx(Re,{label:i("chapter.option.display.label.chapter_number"),value:!0})]}):null}})},Dt=function(e){var t=e.options,r=e.optionsDispatch,n=h().t,o=a(g.useState(!1),2),i=o[0],l=o[1],c=function(e){var t=e.unread,r=e.downloaded,n=e.bookmarked;return null!=t||null!=r||null!=n}(t);return u.jsxs(u.Fragment,{children:[u.jsx(C,{title:n("settings.title"),children:u.jsx(_,{onClick:function(){return l(!0)},children:u.jsx(De,{color:c?"warning":void 0})})}),u.jsx(Mt,{open:i,onClose:function(){return l(!1)},options:t,optionsDispatch:r})]})},Nt=P(x)((function(e){return d({margin:8,marginBottom:0,marginRight:"10px",minHeight:40},e.theme.breakpoints.down("md"),{marginRight:0})})),Rt=P(re)((function(e){return d({listStyle:"none",padding:0,minHeight:"200px"},e.theme.breakpoints.up("md"),{width:"50vw",height:"calc(100vh - 64px - 48px)",margin:0})})),Et=function(e){var t,r,n,o,i,l=e.manga,c=e.isRefreshing,d=h().t,f=M.useGetDownloadStatus().data,p=null!==(t=null==f?void 0:f.downloadStatus.queue)&&void 0!==t?t:[],b=a((i=l.id,I(Ot,"".concat(i,"filterOptions"),St)),2),j=b[0],k=b[1],L=M.useGetMangaChapters(D,l.id,{notifyOnNetworkStatusChange:!0}),P=L.data,B=L.loading,A=L.error,z=L.refetch,F=g.useMemo((function(){var e;return null!==(e=null==P?void 0:P.chapters.nodes)&&void 0!==e?e:[]}),[null==P?void 0:P.chapters.nodes]),G=g.useMemo((function(){return F.map((function(e){return e.id}))}),[F]),W=he(F.length,{itemIds:G,currentKey:"default"}),V=W.areNoItemsSelected,H=W.areAllItemsSelected,U=W.selectedItemIds,q=W.handleSelectAll,Y=W.handleSelection,J=g.useMemo((function(){return It(F,j)}),[F,j]),K=null!==(r=null===(n=l.firstUnreadChapter)||void 0===n?void 0:n.sourceOrder)&&void 0!==r?r:1,Q=l.chapters.totalCount===(null===(o=l.latestReadChapter)||void 0===o?void 0:o.sourceOrder),X=0===l.unreadCount,$=l.downloadCount===l.chapters.totalCount,Z=0===F.length,ee=!Z&&0===J.length,te=g.useMemo((function(){return J.map((function(e){var t=null==p?void 0:p.find((function(t){return t.chapter.sourceOrder===e.sourceOrder&&t.chapter.manga.id===e.mangaId})),r=V?null:U.includes(e.id);return{chapter:e,downloadChapter:t,selected:r}}))}),[p,U,J]),re=g.useMemo((function(){var e=te.filter((function(e){return e.selected}));return e.length?u.jsx(Be,{selectedItemsCount:e.length,title:"chapter.title_one",children:function(t){return u.jsx(kt,{selectedChapters:e,onClose:t})}}):Q?null:u.jsx(_t,{chapterIndex:K,mangaId:l.id})}),[te,Q]);return B||Z&&c?u.jsx(x,{sx:{justifyContent:"center",alignItems:"center",position:"relative",flexGrow:1},children:u.jsx(N,{})}):A?u.jsx(x,{sx:{justifyContent:"center",position:"relative",flexGrow:1},children:u.jsx(R,{message:d("global.error.label.failed_to_load_data"),messageExtra:A.message,retry:function(){return z().catch(v())}})}):u.jsxs(u.Fragment,{children:[u.jsxs(x,{direction:"column",sx:{position:"relative"},children:[u.jsxs(Nt,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[u.jsx(w,{variant:"h5",children:"".concat(J.length," ").concat(d("chapter.title_one",{count:J.length}))}),u.jsxs(x,{direction:"row",sx:{paddingRight:"24px"},children:[u.jsx(C,{title:d("chapter.action.mark_as_read.add.label.action.current"),children:u.jsx(_,{disabled:X,onClick:function(){return Ce.markAsRead(wt.getChapters(wt.getNonRead(te)),!0,l.id)},children:u.jsx(Ze,{})})}),u.jsx(y,{variant:"popover",popupId:"chapterlist-download-button",children:function(e){return u.jsxs(u.Fragment,{children:[u.jsx(C,{title:d("chapter.action.download.add.label.action"),children:u.jsx(_,s(s({disabled:$},S(e)),{},{children:u.jsx(m,{})}))}),e.isOpen&&u.jsx(E,s(s({},O(e)),{},{children:u.jsx(pe,{mangaIds:[l.id],closeMenu:e.close})}))]})}}),u.jsx(Dt,{options:j,optionsDispatch:k}),u.jsx(Ae,{areAllItemsSelected:H,areNoItemsSelected:V,onChange:function(e){return q(e,e?F.map((function(e){return e.id})):[])}})]})]}),Z&&u.jsx(R,{message:d("chapter.error.label.no_chapter_found")}),ee&&u.jsx(R,{message:d("chapter.error.label.no_matches")}),u.jsx(Rt,{style:{height:"undefined",overflowY:window.innerWidth<900?"visible":"auto"},components:{Footer:function(){return u.jsx(T,{sx:{paddingBottom:Me}})}},totalCount:J.length,itemContent:function(e){return u.jsx(Ct,s(s({},te[e]),{},{allChapters:F,showChapterNumber:j.showChapterNumber,onSelect:function(t,r){return Y(te[e].chapter.id,t,{selectRange:r})}}))},useWindowScroll:window.innerWidth<900,overscan:.5*window.innerHeight})]}),re]})},Tt=function(t){var r=t.children,n=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(t,e);return u.jsx(B,s(s({},n),{},{children:u.jsx(x,{direction:"row",alignItems:"center",justifyContent:"center",gap:"10px",flexWrap:"wrap",children:r})}))},Bt={},At=c;Object.defineProperty(Bt,"__esModule",{value:!0});var zt=Bt.default=void 0,Ft=At(l()),Gt=u;zt=Bt.default=(0,Ft.default)((0,Gt.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");var Wt=function(e){var t,r,n=e.manga,o=h().t,a=A(),i=M.useGetTrackerList(z),l=null!==(t=null===(r=i.data)||void 0===r?void 0:r.trackers.nodes)&&void 0!==t?t:[],c=n.trackRecords.nodes,d=Ue.getLoggedIn(l),f=Ue.getLoggedIn(Ue.getTrackers(c,l)),p=function(e){i.error?W(o("tracking.error.label.could_not_load_track_info"),"error"):d.length?e():a("/settings/trackingSettings")};return u.jsx(y,{variant:"dialog",popupId:"manga-track-modal",children:function(e){return u.jsxs(u.Fragment,{children:[u.jsxs(Tt,s(s({},S(e)),{},{disabled:i.loading||!!i.error,onClick:function(){return p(e.open)},onTouchStart:function(){return p(e.open)},size:"large",sx:{color:f.length?"#2196f3":"inherit"},children:[f.length?u.jsx(zt,{}):u.jsx(He,{}),f.length?o("manga.button.track.active",{count:f.length}):o("manga.button.track.start")]})),u.jsx(F,s(s({},G(e)),{},{maxWidth:"md",fullWidth:!0,scroll:"paper",children:u.jsx(ge,{manga:n})}))]})}})},Vt=P("div")((function(e){return d({width:"100%"},e.theme.breakpoints.up("md"),{position:"sticky",top:"64px",left:"0px",width:"50vw",height:"calc(100vh - 64px)",alignSelf:"flex-start",overflowY:"auto"})})),Ht=P("div")((function(){return{padding:"10px"}})),Ut=P("div")((function(){return{display:"flex"}})),qt=P("div")((function(){return{"& img":{borderRadius:4,maxWidth:"100%",minWidth:"100%",height:"auto"},maxWidth:"50%"}})),Yt=P("div")((function(e){return d({marginLeft:15,maxWidth:"100%","& span":{fontWeight:"400"}},e.theme.breakpoints.up("lg"),{fontSize:"1.3em"})})),Jt=function(e){return u.jsx(be,s(s({},e),{},{titleProps:{variant:"h6"},valueProps:{variant:"h6"}}))},Kt=P("div")((function(e){return{display:"flex",justifyContent:"space-around","& button, a":d({borderRadius:"25px",textTransform:"none",paddingLeft:"20px",paddingRight:"20px",fontSize:"x-large"},e.theme.breakpoints.down("sm"),{fontSize:"larger"})}})),Qt=P("div")((function(e){var t=e.theme;return d(d({paddingLeft:"10px",paddingRight:"10px"},t.breakpoints.up("md"),{fontSize:"1.2em"}),t.breakpoints.up("lg"),{fontSize:"1.3em"})})),Xt=P("div")((function(){return{"& h4":{marginTop:"1em",marginBottom:0},"& p":{textAlign:"justify",textJustify:"inter-word"}}})),$t=P("div")((function(){return{display:"flex",flexWrap:"wrap","& h5":{border:"2px solid #2196f3",borderRadius:"1.13em",marginRight:"1em",marginTop:0,marginBottom:"10px",padding:"0.3em",color:"#2196f3"}}})),Zt=function(e){var t=e.url,r=h().t,n=g.useMemo((function(){return u.jsxs(Tt,{size:"large",disabled:!t,sx:{color:"inherit"},component:qe,href:null!=t?t:void 0,target:"_blank",rel:"noreferrer",children:[u.jsx(yt,{}),r("global.button.open_site")]})}),[t]);return n};function er(e){return null!=e?e:L("global.label.unknown")}var tr=function(e){var t=e.manga,n=h().t;g.useEffect((function(){t.source||W(L("source.error.label.source_not_found"),"error")}),[t.source]);var a,i,l=me(t),c=l.CategorySelectComponent,d=l.updateLibraryState,f=se(o(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.clipboard.writeText(t.title);case 3:W(n("global.label.copied"),"info"),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])}))));return u.jsxs(u.Fragment,{children:[u.jsxs(Vt,{children:[u.jsxs(Ht,{children:[u.jsxs(Ut,{children:[u.jsx(qt,{children:u.jsx(Ve,{src:We.getThumbnailUrl(t),alt:"Manga Thumbnail"})}),u.jsxs(Yt,{children:[u.jsx(w,s(s({variant:"h4",component:"h1",sx:{mb:1,"@media not (pointer: fine)":{userSelect:"none"}}},f()),{},{children:t.title})),u.jsx(Jt,{title:n("manga.label.author"),value:er(t.author)}),u.jsx(Jt,{title:n("manga.label.artist"),value:er(t.artist)}),u.jsx(Jt,{title:n("manga.label.status"),value:er(t.status)}),u.jsx(Jt,{title:n("source.title_one"),value:(a=t.source,a?null!==(i=a.displayName)&&void 0!==i?i:a.id:L("global.label.unknown"))})]})]}),u.jsxs(Kt,{children:[u.jsxs(Tt,{onClick:d,size:"large",sx:{color:t.inLibrary?"#2196f3":"inherit"},children:[t.inLibrary?u.jsx(Ge,{}):u.jsx(ve,{}),t.inLibrary?n("manga.button.in_library"):n("manga.button.add_to_library")]}),u.jsx(Wt,{manga:t}),u.jsx(Zt,{url:t.realUrl})]})]}),u.jsxs(Qt,{children:[u.jsxs(Xt,{children:[u.jsx("h4",{children:n("settings.about.title")}),u.jsx("p",{style:{whiteSpace:"pre-line"},children:t.description})]}),u.jsx($t,{children:t.genre.map((function(e){return u.jsx("h5",{children:e},e)}))})]})]}),c]})},rr=function(e){var t=e.manga,r=e.onRefresh,n=e.refreshing,o=h().t,i=b(),l=V(i.breakpoints.up("sm")),c=a(H.useState(null),2),s=c[0],d=c[1],f=Boolean(s),p=function(){d(null)},g=ye({mangaId:t.id}),m=g.openCategorySelect,v=g.CategorySelectComponent;return u.jsxs(u.Fragment,{children:[l&&u.jsxs(u.Fragment,{children:[u.jsx(C,{title:o("manga.label.reload_from_source"),children:u.jsx(_,{onClick:function(){r()},disabled:n,children:u.jsx(U,{})})}),t.inLibrary&&u.jsxs(u.Fragment,{children:[u.jsx(C,{title:o("global.button.migrate"),children:u.jsx(j,{to:"/migrate/source/".concat(t.sourceId,"/manga/").concat(t.id,"/search?query=").concat(t.title),state:{mangaTitle:t.title},style:{textDecoration:"none",color:"inherit"},children:u.jsx(_,{children:u.jsx(xe,{})})})}),u.jsx(C,{title:o("manga.label.edit_categories"),children:u.jsx(_,{onClick:function(){m(!0)},children:u.jsx(je,{})})})]})]}),!l&&u.jsxs(u.Fragment,{children:[u.jsx(_,{id:"chaptersMenuButton","aria-controls":f?"chaptersMenu":void 0,"aria-haspopup":"true","aria-expanded":f?"true":void 0,onClick:function(e){return d(e.currentTarget)},children:u.jsx(ze,{})}),u.jsxs(E,{id:"chaptersMenu",anchorEl:s,open:f,onClose:p,MenuListProps:{"aria-labelledby":"chaptersMenuButton"},children:[u.jsxs(q,{onClick:function(){r(),p()},disabled:n,children:[u.jsx(Y,{children:u.jsx(U,{fontSize:"small"})}),u.jsx(J,{children:o("manga.label.reload_from_source")})]}),t.inLibrary&&[u.jsxs(q,{component:j,to:"/migrate/source/".concat(t.sourceId,"/manga/").concat(t.id,"/search?query=").concat(t.title),state:{mangaTitle:t.title},style:{textDecoration:"none",color:"inherit"},children:[u.jsx(Y,{children:u.jsx(xe,{fontSize:"small"})}),u.jsx(J,{children:o("migrate.title")})]},"migrate"),u.jsxs(q,{onClick:function(){m(!0),p()},children:[u.jsx(Y,{children:u.jsx(je,{fontSize:"small"})}),u.jsx(J,{children:o("manga.label.edit_categories")})]},"categories")]]})]}),v]})};t("Manga",(function(){var e=h().t,t=g.useContext(K),n=t.setTitle,i=t.setAction,l=Q().id,c=g.useRef(!1),s=M.useGetManga(X,l),d=s.data,f=s.error,p=s.loading,m=s.networkStatus,v=s.refetch,b=Z(m),y=null==d?void 0:d.manga,j=function(e){var t=a(g.useState(!1),2),n=t[0],i=t[1],l=a(g.useState(null),2),c=l[0],u=l[1];return[g.useCallback(o(r().mark((function t(){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i(!0),u(null),t.next=4,Promise.all([M.getMangaFetch(e,{awaitRefetchQueries:!0}).response,M.getMangaChaptersFetch(e,{awaitRefetchQueries:!0}).response]).catch((function(e){return u(e)})).finally((function(){return i(!1)}));case 4:case"end":return t.stop()}}),t)}))),[e]),{loading:n,error:c}]}(l),w=a(j,2),k=w[0],S=w[1],O=S.loading,I=S.error,L=null!=f?f:I;return g.useEffect((function(){null!=y&&(!c.current&&!y.initialized&&(c.current=!0,k()))}),[y]),g.useEffect((function(){var t;return n(null!==(t=null==y?void 0:y.title)&&void 0!==t?t:e("manga.title_one")),i(null),function(){n(""),i(null)}}),[e,null==y?void 0:y.title]),g.useEffect((function(){var t;return i(u.jsxs(x,{direction:"row",alignItems:"center",children:[L&&!b&&!O&&u.jsx(C,{title:u.jsxs(u.Fragment,{children:[e("manga.error.label.request_failure"),u.jsx("br",{}),null!==(t=L.message)&&void 0!==t?t:L]}),children:u.jsx(_,{onClick:function(){return v()},children:u.jsx(Je,{color:"error"})})}),y&&(O||b)&&u.jsx(_,{disabled:!0,children:u.jsx($,{size:16})}),y&&u.jsx(rr,{manga:y,onRefresh:k,refreshing:O})]})),function(){i(null)}}),[e,L,b,O,y,k]),L&&!y?u.jsx(R,{message:e("manga.error.label.request_failure"),messageExtra:L.message}):u.jsxs(T,{sx:{display:{md:"flex"},overflow:"hidden"},children:[p&&u.jsx(N,{}),y&&u.jsx(tr,{manga:y}),y&&u.jsx(Et,{manga:y,isRefreshing:O})]})}))}}}))}();
