!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return n};var r,n={},o=Object.prototype,a=o.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},l="function"==typeof Symbol?Symbol:{},c=l.iterator||"@@iterator",s=l.asyncIterator||"@@asyncIterator",u=l.toStringTag||"@@toStringTag";function d(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch(r){d=function(e,t,r){return e[t]=r}}function h(e,t,r,n){var o=t&&t.prototype instanceof v?t:v,a=Object.create(o.prototype),l=new T(n||[]);return i(a,"_invoke",{value:O(e,r,l)}),a}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}n.wrap=h;var p="suspendedStart",g="suspendedYield",m="executing",b="completed",y={};function v(){}function x(){}function j(){}var w={};d(w,c,(function(){return this}));var k=Object.getPrototypeOf,S=k&&k(k(N([])));S&&S!==o&&a.call(S,c)&&(w=S);var C=j.prototype=v.prototype=Object.create(w);function _(e){["next","throw","return"].forEach((function(t){d(e,t,(function(e){return this._invoke(t,e)}))}))}function L(t,r){function n(o,i,l,c){var s=f(t[o],t,i);if("throw"!==s.type){var u=s.arg,d=u.value;return d&&"object"==e(d)&&a.call(d,"__await")?r.resolve(d.__await).then((function(e){n("next",e,l,c)}),(function(e){n("throw",e,l,c)})):r.resolve(d).then((function(e){u.value=e,l(u)}),(function(e){return n("throw",e,l,c)}))}c(s.arg)}var o;i(this,"_invoke",{value:function(e,t){function a(){return new r((function(r,o){n(e,t,r,o)}))}return o=o?o.then(a,a):a()}})}function O(e,t,n){var o=p;return function(a,i){if(o===m)throw Error("Generator is already running");if(o===b){if("throw"===a)throw i;return{value:r,done:!0}}for(n.method=a,n.arg=i;;){var l=n.delegate;if(l){var c=I(l,n);if(c){if(c===y)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=b,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=m;var s=f(e,t,n);if("normal"===s.type){if(o=n.done?b:g,s.arg===y)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=b,n.method="throw",n.arg=s.arg)}}}function I(e,t){var n=t.method,o=e.iterator[n];if(o===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=r,I(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var a=f(o,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,y;var i=a.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,y):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,y)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function F(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function N(t){if(t||""===t){var n=t[c];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function e(){for(;++o<t.length;)if(a.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}throw new TypeError(e(t)+" is not iterable")}return x.prototype=j,i(C,"constructor",{value:j,configurable:!0}),i(j,"constructor",{value:x,configurable:!0}),x.displayName=d(j,u,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===x||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,j):(e.__proto__=j,d(e,u,"GeneratorFunction")),e.prototype=Object.create(C),e},n.awrap=function(e){return{__await:e}},_(L.prototype),d(L.prototype,s,(function(){return this})),n.AsyncIterator=L,n.async=function(e,t,r,o,a){void 0===a&&(a=Promise);var i=new L(h(e,t,r,o),a);return n.isGeneratorFunction(t)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},_(C),d(C,u,"Generator"),d(C,c,(function(){return this})),d(C,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},n.values=N,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(F),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,o){return l.type="throw",l.arg=e,t.next=n,o&&(t.method="next",t.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],l=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=a.call(i,"catchLoc"),s=a.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),F(r),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;F(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:N(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=r),y}},n}function r(e,t,r,n,o,a,i){try{var l=e[a](i),c=l.value}catch(e){return void r(e)}l.done?t(c):Promise.resolve(c).then(n,o)}function n(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var i=e.apply(t,n);function l(e){r(i,o,a,l,c,"next",e)}function c(e){r(i,o,a,l,c,"throw",e)}l(void 0)}))}}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(t,r,n){return(r=function(t){var r=function(t,r){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,r||"default");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==e(r)?r:r+""}(r))in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,l=[],c=!0,s=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(l.push(n.value),l.length!==t);c=!0);}catch(e){s=!0,o=e}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw o}}return l}}(e,t)||s(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||s(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){if(e){if("string"==typeof e)return u(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}System.register(["./index-legacy-CyeEHa1X.js","./PlayArrow-legacy-B0-587qT.js","./StyledFab-legacy-Csg-nzA_.js","./FilterList-legacy--mVlAuBJ.js","./SortRadioInput-legacy-DmnZV13o.js","./ThreeStateCheckboxInput-legacy-dIbStP_d.js","./SelectionFAB-legacy-C9_uY32B.js","./ListPreference-legacy-DNltFc2q.js","./useManageMangaLibraryState-legacy-DIN9cYFd.js","./ExpandMore-legacy-BetSehG8.js","./Sync-legacy-BGrop4HB.js","./Trackers-legacy-CN_LuGVd.js","./Chip-legacy-D6HWod6N.js","./Avatar-legacy-I2HUp19Q.js","./Info-legacy-BNQCptu4.js","./CheckCircle-legacy-rCFGPKg2.js","./NumberSetting-legacy-DqODIOKb.js","./useMobilePicker-legacy-BVHmmT9u.js","./SelectSetting-legacy-C8SbCNHD.js"],(function(e,r){"use strict";var o,s,u,d,h,f,p,g,m,b,y,v,x,j,w,k,S,C,_,L,O,I,E,F,T,N,M,R,P,B,A,z,D,G,U,V,W,H,q,Y,Q,X,J,K,Z,$,ee,te,re,ne,oe,ae,ie,le,ce,se,ue,de,he,fe,pe,ge,me,be,ye,ve,xe,je,we,ke,Se,Ce,_e,Le,Oe,Ie,Ee,Fe,Te,Ne,Me,Re,Pe,Be,Ae,ze,De,Ge,Ue,Ve,We,He,qe;return{setters:[function(e){o=e.c,s=e.j,u=e.u,d=e.L,h=e.a9,f=e.f,p=e.i,g=e.I,m=e.aa,b=e.ab,y=e.a3,v=e.d,x=e.ac,j=e.V,w=e.p,k=e.M,S=e.z,C=e.r,_=e.ad,L=e.k,O=e.E,I=e.l,E=e.m,F=e.T,T=e.ae,N=e.af,M=e.ag,R=e.ah,P=e.ai,B=e.aj,A=e.B,z=e.ak,D=e.al,G=e.a7,U=e.am,V=e.an,W=e.h,H=e.P,q=e.ao,Y=e.ap,Q=e.aq,X=e.n,J=e.A,K=e.q,Z=e.X,$=e.ar,ee=e.as,te=e.at,re=e.au,ne=e.av,oe=e.S,ae=e.aw,ie=e.ax,le=e.g,ce=e.ay,se=e.az,ue=e.R,de=e.aA,he=e.aB,fe=e.aC,pe=e.N,ge=e.aD,me=e.aE,be=e.aF,ye=e.aG},function(e){ve=e.P},function(e){xe=e.S,je=e.D},function(e){we=e.F},function(e){ke=e.S,Se=e.R},function(e){Ce=e.T},function(e){_e=e.O,Le=e.S,Oe=e.a,Ie=e.M},function(e){Ee=e.R},function(e){Fe=e.u,Te=e.C,Ne=e.T,Me=e.a,Re=e.F,Pe=e.M,Be=e.b,Ae=e.c,ze=e.S,De=e.L},function(e){Ge=e.F,Ue=e.E,Ve=e.a},function(e){We=e.S},function(e){He=e.T},function(e){qe=e.C},null,null,null,null,null,null],execute:function(){var r=o(s.jsx("path",{d:"M1 21h22L12 2zm12-3h-2v-2h2zm0-4h-2v-4h2z"}),"Warning");function Ye(e){var t=e.chapter,r=u().t,n=t.sourceOrder;return s.jsxs(xe,{component:d,variant:"extended",color:"primary",to:h.getReaderUrl(t),state:{resumeMode:h.getReaderResumeMode(t)},children:[s.jsx(ve,{}),r(1===n?"global.button.start":"global.button.resume")]})}function Qe(e,t){return function(e,t){var r=t.sortBy,n=t.reverse,o=c(e);switch(r){case"source":o.sort((function(e,t){return e.sourceOrder-t.sourceOrder}));break;case"fetchedAt":o.sort((function(e,t){var r,n;return Number(null!==(r=e.fetchedAt)&&void 0!==r?r:0)-Number(null!==(n=t.fetchedAt)&&void 0!==n?n:0)}));break;case"chapterNumber":o.sort((function(e,t){return e.chapterNumber-t.chapterNumber}));break;case"uploadedAt":o.sort((function(e,t){var r,n;return Number(null!==(r=e.uploadDate)&&void 0!==r?r:0)-Number(null!==(n=t.uploadDate)&&void 0!==n?n:0)}))}return n&&o.reverse(),o}(t.active?e.filter((function(e){return function(e,t){var r=t.isRead;switch(e){case!0:return!r;case!1:return r;default:return!0}}(t.unread,e)&&function(e,t){var r=t.isDownloaded;switch(e){case!0:return r;case!1:return!r;default:return!0}}(t.downloaded,e)&&function(e,t){var r=t.isBookmarked;switch(e){case!0:return r;case!1:return!r;default:return!0}}(t.bookmarked,e)})):c(e),t)}var Xe={active:!1,unread:void 0,downloaded:void 0,bookmarked:void 0,reverse:!0,sortBy:"source",showChapterNumber:!1},Je={source:"global.sort.label.by_source",chapterNumber:"global.sort.label.by_chapter_number",uploadedAt:"global.sort.label.by_upload_date",fetchedAt:"global.sort.label.by_fetch_date"},Ke={filter:"global.label.filter",sort:"global.label.sort",display:"global.label.display"},Ze=function(e){var t=e.open,r=e.onClose,n=e.options,o=e.optionsDispatch,a=u().t;return s.jsx(_e,{open:t,onClose:r,minHeight:150,tabs:["filter","sort","display"],tabTitle:function(e){return a(Ke[e])},tabContent:function(e){return"filter"===e?s.jsxs(s.Fragment,{children:[s.jsx(Ce,{label:a("global.filter.label.unread"),checked:n.unread,onChange:function(e){return o({type:"filter",filterType:"unread",filterValue:e})}}),s.jsx(Ce,{label:a("global.filter.label.downloaded"),checked:n.downloaded,onChange:function(e){return o({type:"filter",filterType:"downloaded",filterValue:e})}}),s.jsx(Ce,{label:a("global.filter.label.bookmarked"),checked:n.bookmarked,onChange:function(e){return o({type:"filter",filterType:"bookmarked",filterValue:e})}})]}):"sort"===e?Object.entries(Je).map((function(e){var t=l(e,2),r=t[0],i=t[1];return s.jsx(ke,{label:a(i),checked:n.sortBy===r,sortDescending:n.reverse,onClick:function(){return r!==n.sortBy?o({type:"sortBy",sortBy:r}):o({type:"sortReverse"})}},r)})):"display"===e?s.jsxs(Ee,{onChange:function(){return o({type:"showChapterNumber"})},value:n.showChapterNumber,children:[s.jsx(Se,{label:a("chapter.option.display.label.source_title"),value:!1}),s.jsx(Se,{label:a("chapter.option.display.label.chapter_number"),value:!0})]}):null}})},$e=function(e){var t=e.options,r=e.optionsDispatch,n=u().t,o=l(f.useState(!1),2),a=o[0],i=o[1],c=function(e){var t=e.unread,r=e.downloaded,n=e.bookmarked;return null!=t||null!=r||null!=n}(t);return s.jsxs(s.Fragment,{children:[s.jsx(p,{title:n("settings.title"),children:s.jsx(g,{onClick:function(){return i(!0)},children:s.jsx(we,{color:c?"warning":void 0})})}),s.jsx(Ze,{open:a,onClose:function(){return i(!1)},options:t,optionsDispatch:r})]})};function et(e,t){switch(t.type){case"filter":return a(a({},e),{},i({active:!1!==e.unread&&!1!==e.downloaded&&!1!==e.bookmarked},t.filterType,t.filterValue));case"sortBy":return a(a({},e),{},{sortBy:t.sortBy});case"sortReverse":return a(a({},e),{},{reverse:!e.reverse});case"showChapterNumber":return a(a({},e),{},{showChapterNumber:!e.showChapterNumber});default:throw Error(b("global.error.label.invalid_action"))}}var tt=y(v,{shouldForwardProp:x(["scrollbarWidth"])})((function(e){var t=e.theme,r=e.scrollbarWidth;return i({padding:t.spacing(1),paddingRight:"calc(".concat(r,"px + ").concat(t.spacing(1),")"),paddingBottom:0},t.breakpoints.down("md"),{paddingRight:t.spacing(1)})})),rt=y(j,{shouldForwardProp:x(["topOffset"])})((function(e){var t=e.theme,r=e.topOffset;return i({listStyle:"none",padding:0},t.breakpoints.up("md"),{height:"calc(100vh - ".concat(r,"px)"),margin:0})})),nt=function(e){var t=e.selectedChapters,r=e.firstUnreadChapter;return t.length?s.jsx(Oe,{selectedItemsCount:t.length,title:"chapter.title_one",children:function(e){return s.jsx(D,{selectedChapters:t,onClose:e})}}):r?s.jsx(Ye,{chapter:r}):null},ot=function(e){var t=e.manga,r=e.isRefreshing,n=u().t,o=w().appBarHeight,i=k.useIsBelowWidth("md"),c=l(f.useState(50),2),d=c[0],b=c[1],y=l(f.useState(null),2),x=y[0],j=y[1];S(x,f.useCallback((function(){var e;return b(null!==(e=null==x?void 0:x.offsetHeight)&&void 0!==e?e:0)}),[x]));var D,U=k.useGetScrollbarSize("width"),V=l((D=t.id,m(et,"".concat(D,"filterOptions"),Xe)),2),W=V[0],H=V[1],q=C.useGetMangaChapters(_,t.id,{notifyOnNetworkStatusChange:!0}),Y=q.data,Q=q.loading,X=q.error,J=q.refetch,K=f.useMemo((function(){var e;return null!==(e=null==Y?void 0:Y.chapters.nodes)&&void 0!==e?e:[]}),[null==Y?void 0:Y.chapters.nodes]),Z=f.useMemo((function(){return K.map((function(e){return e.id}))}),[K]),$=Fe(K.length,{itemIds:Z,currentKey:"default"}),ee=$.areNoItemsSelected,te=$.areAllItemsSelected,re=$.selectedItemIds,ne=$.handleSelectAll,oe=$.handleSelection,ae=f.useMemo((function(){return Qe(K,W)}),[K,W]),ie=G.isFullyRead(t),le=G.isFullyDownloaded(t),ce=0===K.length,se=!ce&&0===ae.length,ue=f.useCallback((function(e,t,r){return oe(e,t,{selectRange:r})}),[]);return Q||ce&&r?s.jsx(v,{sx:{justifyContent:"center",alignItems:"center",position:"relative",flexGrow:1},children:s.jsx(L,{})}):X?s.jsx(v,{sx:{justifyContent:"center",position:"relative",flexGrow:1},children:s.jsx(O,{message:n("global.error.label.failed_to_load_data"),messageExtra:I(X),retry:function(){return J().catch(E())}})}):s.jsxs(s.Fragment,{children:[s.jsxs(v,{direction:"column",sx:{position:"relative",flexBasis:"60%"},children:[s.jsxs(tt,{ref:j,direction:"row",alignItems:"center",justifyContent:"space-between",scrollbarWidth:U,children:[s.jsx(F,{variant:"h5",component:"h3",children:"".concat(ae.length," ").concat(n("chapter.title_one",{count:ae.length}))}),s.jsxs(v,{direction:"row",children:[s.jsx(p,{title:n("chapter.action.mark_as_read.add.label.action.current"),children:s.jsx(g,{disabled:ie,onClick:function(){return h.markAsRead(h.getNonRead(K),!0,t.id)},children:s.jsx(T,{})})}),s.jsx(N,{variant:"popover",popupId:"chapterlist-download-button",children:function(e){return s.jsxs(s.Fragment,{children:[s.jsx(p,{title:n("chapter.action.download.add.label.action"),children:s.jsx(g,a(a({disabled:le},M(e)),{},{children:s.jsx(R,{})}))}),e.isOpen&&s.jsx(P,a(a({},B(e)),{},{children:s.jsx(Te,{mangaIds:[t.id],closeMenu:e.close})}))]})}}),s.jsx($e,{options:W,optionsDispatch:H}),s.jsx(Le,{areAllItemsSelected:te,areNoItemsSelected:ee,onChange:function(e){return ne(e,e?K.map((function(e){return e.id})):[])}})]})]}),ce&&s.jsx(O,{message:n("chapter.error.label.no_chapter_found")}),se&&s.jsx(O,{message:n("chapter.error.label.no_matches")}),s.jsx(rt,{topOffset:o+d,style:{height:"undefined"},components:{Footer:function(){return s.jsx(A,{sx:{paddingBottom:je}})}},totalCount:ae.length,computeItemKey:function(e){return ae[e].id},itemContent:function(e){return s.jsx(z,{chapter:K[e],selected:ee?null:re.includes(K[e].id),showChapterNumber:W.showChapterNumber,onSelect:ue})},useWindowScroll:i,overscan:.5*window.innerHeight})]}),s.jsx(nt,{selectedChapters:re.map((function(e){return K.find((function(t){return t.id===e}))})).filter((function(e){return null!=e})),firstUnreadChapter:t.firstUnreadChapter})]})},at=o(s.jsx("path",{d:"M21 11V3h-8l3.29 3.29-10 10L3 13v8h8l-3.29-3.29 10-10z"}),"OpenInFull"),it=o(s.jsx("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"}),"ContentCopy"),lt=o(s.jsx("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check"),ct=function(e){var t,r,n=e.manga,o=u().t,i=W(),l=C.useGetTrackerList(H),c=null!==(t=null===(r=l.data)||void 0===r?void 0:r.trackers.nodes)&&void 0!==t?t:[],d=n.trackRecords.nodes,h=He.getLoggedIn(c),f=He.getLoggedIn(He.getTrackers(d,c));return s.jsx(N,{variant:"dialog",popupId:"manga-track-modal",children:function(e){return s.jsxs(s.Fragment,{children:[s.jsxs(q,a(a({},M(e)),{},{size:"medium",disabled:l.loading||!!l.error,onClick:function(){return t=e.open,void(l.error?X(o("tracking.error.label.could_not_load_track_info"),"error",null===(r=l.error)||void 0===r?void 0:r.toString()):h.length?t():i(J.tracker.path));var t,r},variant:f.length?"contained":"outlined",children:[f.length?s.jsx(lt,{}):s.jsx(We,{}),f.length?o("manga.button.track.active",{count:f.length}):o("manga.button.track.start")]})),e.isOpen&&s.jsx(Y,a(a({},Q(e)),{},{maxWidth:"md",fullWidth:!0,scroll:"paper",children:s.jsx(Ne,{manga:n})}))]})}})},st=y("div")((function(e){var t=e.theme;return i({display:"flex",flexDirection:"column",gap:t.spacing(2),padding:t.spacing(1)},t.breakpoints.up("md"),{flexBasis:"40%",height:"calc(100vh - 64px)",overflowY:"auto"})})),ut=y("div",{shouldForwardProp:x(["url","mangaThumbnailBackdrop"])})((function(e){var t=e.theme,r=e.url,n=e.mangaThumbnailBackdrop;return{position:"relative",backgroundImage:n?"url(".concat(r,")"):void 0,backgroundRepeat:n?"no-repeat":void 0,backgroundSize:n?"cover":void 0,borderRadius:n?t.shape.borderRadius:void 0,"&::before":n&&{position:"absolute",display:"inline-block",content:'""',top:0,left:0,width:"100%",height:"100%",background:"linear-gradient(to top, ".concat(t.palette.background.default,", transparent 100%, transparent 1px),linear-gradient(to right, ").concat(t.palette.background.default,", transparent 50%, transparent 1px),linear-gradient(to bottom, ").concat(t.palette.background.default,", transparent 50%, transparent 1px),linear-gradient(to left, ").concat(t.palette.background.default,", transparent 50%, transparent 1px)"),backdropFilter:"blur(4.5px) brightness(0.75)"}}})),dt=y("div")((function(e){return{display:"flex",paddingBottom:e.theme.spacing(1)}})),ht=y("div")((function(e){return{zIndex:1,marginLeft:e.theme.spacing(1)}})),ft=function(e){return s.jsx(Pe,a({},e))},pt=y("div")((function(e){return{display:"flex",gap:e.theme.spacing(1)}})),gt=function(e){var t=e.url,r=u().t;return s.jsx(p,{title:r("global.button.open_site"),children:s.jsx(q,{size:"medium",disabled:!t,component:$,href:null!=t?t:void 0,target:"_blank",rel:"noreferrer",variant:"outlined",children:s.jsx(ee,{})})})};function mt(e){return null!=e?e:b("global.label.unknown")}var bt=function(e){var t=e.manga,r=te(),n=re({variant:"popover",popupId:"manga-thumbnail-fullscreen"}),o=l(f.useState(!1),2),c=o[0],u=o[1];return s.jsxs(s.Fragment,{children:[s.jsxs(v,{sx:i(i({position:"relative",borderRadius:1,overflow:"hidden",backgroundColor:"background.paper",width:"150px",maxHeight:"fit-content",aspectRatio:ne,flexShrink:0,flexGrow:0},r.breakpoints.up("lg"),{width:"200px"}),r.breakpoints.up("xl"),{width:"300px"}),children:[s.jsx(oe,{src:G.getThumbnailUrl(t),alt:"Manga Thumbnail",onLoad:function(){return u(!0)},imgStyle:{width:"100%",height:"100%",objectFit:"cover"}}),c&&s.jsx(v,a(a({},M(n)),{},{sx:{position:"absolute",top:0,bottom:0,width:"100%",justifyContent:"center",alignItems:"center",opacity:0,"&:hover":{background:"rgba(0, 0, 0, 0.4)",cursor:"pointer",opacity:1}},children:s.jsx(at,{fontSize:"large",color:"primary"})}))]}),s.jsx(ae,a(a({},ie(n)),{},{sx:{outline:0},children:s.jsx(v,{onClick:function(){return n.close()},sx:{height:"100vh",p:2,outline:0,justifyContent:"center",alignItems:"center"},children:s.jsx(oe,{src:G.getThumbnailUrl(t),alt:"Manga Thumbnail",imgStyle:{height:"100%",width:"100%",objectFit:"contain"}})})}))]})},yt=function(e){var t=e.manga,r=t.description,n=t.genre,o=l(f.useState(null),2),a=o[0],i=o[1],c=l(f.useState(),2),u=c[0],d=c[1];S(a,f.useCallback((function(){return d(null==a?void 0:a.clientHeight)}),[a]));var h=l(le("isDescriptionGenreCollapsed",!0),2),p=h[0],m=h[1],b=r?Math.min(75,null!=u?u:75):0,y=f.useMemo((function(){return n.filter(Boolean)}),[n]);return s.jsxs(s.Fragment,{children:[r&&s.jsxs(v,{sx:{position:"relative"},children:[s.jsx(Be,{collapsedSize:b,in:!p,children:s.jsx(F,{ref:i,style:{whiteSpace:"pre-line",textAlign:"justify",textJustify:"inter-word"},children:r})}),s.jsx(v,{onClick:function(){return m(!p)},sx:{pt:1,alignItems:"center",cursor:"pointer",position:p?"absolute":null,width:"100%",bottom:0,background:function(e){return"linear-gradient(transparent 1px, ".concat(e.palette.background.default,")")}},children:s.jsx(g,{sx:{color:function(e){return"light"===e.palette.mode?"black":"text"}},children:p?s.jsx(Ue,{}):s.jsx(Ve,{})})})]}),s.jsx(v,{sx:{flexDirection:"row",flexWrap:p?"no-wrap":"wrap",gap:1,overflowX:p?"auto":null},children:y.map((function(e){return s.jsx(qe,{label:e,variant:"outlined"},e)}))})]})},vt=function(e){var r=e.manga,o=u().t,a=K().settings.mangaThumbnailBackdrop;f.useEffect((function(){r.source||X(b("source.error.label.source_not_found"),"error")}),[r.source]);var i,l,c=Me(r),d=c.CategorySelectComponent,h=c.updateLibraryState,m=function(){var e=n(t().mark((function e(){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.clipboard.writeText(r.title);case 3:X(o("global.label.copied_clipboard"),"info"),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return s.jsxs(s.Fragment,{children:[s.jsxs(st,{children:[s.jsxs(ut,{url:G.getThumbnailUrl(r),mangaThumbnailBackdrop:a,children:[s.jsxs(dt,{children:[s.jsx(bt,{manga:r}),s.jsxs(ht,{children:[s.jsxs(v,{sx:{flexDirection:"row",gap:1,alignItems:"flex-start",mb:1},children:[s.jsx(F,{variant:"h5",component:"h2",sx:{wordBreak:"break-word"},children:r.title}),s.jsx(p,{title:o("global.button.copy"),children:s.jsx(g,{onClick:m,color:"inherit",children:s.jsx(it,{fontSize:"small"})})})]}),s.jsx(ft,{title:o("manga.label.author"),value:mt(r.author)}),s.jsx(ft,{title:o("manga.label.artist"),value:mt(r.artist)}),s.jsx(ft,{title:o("manga.label.status"),value:o(Z[r.status])}),s.jsx(ft,{title:o("source.title_one"),value:(i=r.source,i?0===Number(i.id)?b("source.local_source.title"):null!==(l=i.displayName)&&void 0!==l?l:i.id:b("global.label.unknown"))})]})]}),s.jsxs(pt,{children:[s.jsxs(q,{size:"medium",onClick:h,variant:r.inLibrary?"contained":"outlined",children:[r.inLibrary?s.jsx(Ge,{}):s.jsx(Re,{}),r.inLibrary?o("manga.button.in_library"):o("manga.button.add_to_library")]}),s.jsx(ct,{manga:r}),s.jsx(gt,{url:r.realUrl})]})]}),s.jsx(yt,{manga:r})]}),d]})},xt=function(e){var t=e.manga,r=e.onRefresh,n=e.refreshing,o=u().t,a=te(),i=ce(a.breakpoints.up("sm")),c=l(se.useState(null),2),h=c[0],f=c[1],m=Boolean(h),b=function(){f(null)},y=Ae({mangaId:t.id}),v=y.openCategorySelect,x=y.CategorySelectComponent;return s.jsxs(s.Fragment,{children:[i&&s.jsxs(s.Fragment,{children:[s.jsx(p,{title:o("manga.label.reload_from_source"),children:s.jsx(g,{onClick:function(){r()},disabled:n,color:"inherit",children:s.jsx(ue,{})})}),t.inLibrary&&s.jsxs(s.Fragment,{children:[s.jsx(p,{title:o("global.button.migrate"),children:s.jsx(d,{to:"".concat(J.migrate.childRoutes.search.path(t.sourceId,t.id),"?query=").concat(t.title),state:{mangaTitle:t.title},style:{textDecoration:"none",color:"inherit"},children:s.jsx(g,{color:"inherit",children:s.jsx(ze,{})})})}),s.jsx(p,{title:o("manga.label.edit_categories"),children:s.jsx(g,{onClick:function(){v(!0)},color:"inherit",children:s.jsx(De,{})})})]})]}),!i&&s.jsxs(s.Fragment,{children:[s.jsx(g,{id:"chaptersMenuButton","aria-controls":m?"chaptersMenu":void 0,"aria-haspopup":"true","aria-expanded":m?"true":void 0,onClick:function(e){return f(e.currentTarget)},color:"inherit",children:s.jsx(Ie,{})}),s.jsxs(P,{id:"chaptersMenu",anchorEl:h,open:m,onClose:b,MenuListProps:{"aria-labelledby":"chaptersMenuButton"},children:[s.jsxs(de,{onClick:function(){r(),b()},disabled:n,children:[s.jsx(he,{children:s.jsx(ue,{fontSize:"small"})}),s.jsx(fe,{children:o("manga.label.reload_from_source")})]}),t.inLibrary&&[s.jsxs(de,{component:d,to:"".concat(J.migrate.childRoutes.search.path(t.sourceId,t.id),"?query=").concat(t.title),state:{mangaTitle:t.title},style:{textDecoration:"none",color:"inherit"},children:[s.jsx(he,{children:s.jsx(ze,{fontSize:"small"})}),s.jsx(fe,{children:o("migrate.title")})]},"migrate"),s.jsxs(de,{onClick:function(){v(!0),b()},children:[s.jsx(he,{children:s.jsx(De,{fontSize:"small"})}),s.jsx(fe,{children:o("manga.label.edit_categories")})]},"categories")]]})]}),x]})};e("Manga",(function(){var e=u().t,o=f.useContext(pe),a=o.setTitle,i=o.setAction,c=ge().id,d=f.useRef(!1),h=C.useGetManga(me,c),m=h.data,b=h.error,y=h.loading,x=h.networkStatus,j=h.refetch,w=ye(x),k=null==m?void 0:m.manga,S=function(e){var r=l(f.useState(!1),2),o=r[0],a=r[1],i=l(f.useState(null),2),c=i[0],s=i[1];return[f.useCallback(n(t().mark((function r(){return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(!0),s(null),t.next=4,Promise.all([C.getMangaFetch(e,{awaitRefetchQueries:!0}).response,C.getMangaChaptersFetch(e,{awaitRefetchQueries:!0}).response]).catch((function(e){e instanceof U&&"no chapters found"===V(e.message)||s(e)})).finally((function(){return a(!1)}));case 4:case"end":return t.stop()}}),r)}))),[e]),{loading:o,error:c}]}(c),_=l(S,2),E=_[0],F=_[1],T=F.loading,N=F.error,M=null!=b?b:N;return f.useEffect((function(){null!=k&&(!d.current&&!k.initialized&&(d.current=!0,E()))}),[k]),f.useLayoutEffect((function(){var t;return a(null!==(t=null==k?void 0:k.title)&&void 0!==t?t:e("manga.title_one")),i(null),function(){a(""),i(null)}}),[e,null==k?void 0:k.title]),f.useLayoutEffect((function(){return i(s.jsxs(v,{direction:"row",sx:{alignItems:"center"},children:[M&&!w&&!T&&s.jsx(p,{title:s.jsxs(s.Fragment,{children:[e("manga.error.label.request_failure"),s.jsx("br",{}),I(M)]}),children:s.jsx(g,{onClick:function(){return j()},children:s.jsx(r,{color:"error"})})}),k&&(T||w)&&s.jsx(g,{disabled:!0,children:s.jsx(be,{size:16})}),k&&s.jsx(xt,{manga:k,onRefresh:E,refreshing:T})]})),function(){i(null)}}),[e,M,w,T,k,E]),M&&!k?s.jsx(O,{message:e("manga.error.label.request_failure"),messageExtra:I(M)}):s.jsxs(A,{sx:{display:{md:"flex"},overflow:"hidden"},children:[y&&s.jsx(L,{}),k&&s.jsx(vt,{manga:k}),k&&s.jsx(ot,{manga:k,isRefreshing:T})]})}))}}}))}();
