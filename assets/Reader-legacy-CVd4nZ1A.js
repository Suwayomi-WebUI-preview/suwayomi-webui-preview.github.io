!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||o(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */n=function(){return r};var t,r={},i=Object.prototype,o=i.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},u="function"==typeof Symbol?Symbol:{},c=u.iterator||"@@iterator",s=u.asyncIterator||"@@asyncIterator",l=u.toStringTag||"@@toStringTag";function d(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch(t){d=function(e,t,n){return e[t]=n}}function f(e,t,n,r){var i=t&&t.prototype instanceof x?t:x,o=Object.create(i.prototype),u=new D(r||[]);return a(o,"_invoke",{value:k(e,n,u)}),o}function p(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}r.wrap=f;var h="suspendedStart",g="suspendedYield",v="executing",m="completed",y={};function x(){}function w(){}function b(){}var C={};d(C,c,(function(){return this}));var j=Object.getPrototypeOf,E=j&&j(j(_([])));E&&E!==i&&o.call(E,c)&&(C=E);var L=b.prototype=x.prototype=Object.create(C);function P(e){["next","throw","return"].forEach((function(t){d(e,t,(function(e){return this._invoke(t,e)}))}))}function R(t,n){function r(i,a,u,c){var s=p(t[i],t,a);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"==e(d)&&o.call(d,"__await")?n.resolve(d.__await).then((function(e){r("next",e,u,c)}),(function(e){r("throw",e,u,c)})):n.resolve(d).then((function(e){l.value=e,u(l)}),(function(e){return r("throw",e,u,c)}))}c(s.arg)}var i;a(this,"_invoke",{value:function(e,t){function o(){return new n((function(n,i){r(e,t,n,i)}))}return i=i?i.then(o,o):o()}})}function k(e,n,r){var i=h;return function(o,a){if(i===v)throw Error("Generator is already running");if(i===m){if("throw"===o)throw a;return{value:t,done:!0}}for(r.method=o,r.arg=a;;){var u=r.delegate;if(u){var c=T(u,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(i===h)throw i=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i=v;var s=p(e,n,r);if("normal"===s.type){if(i=r.done?m:g,s.arg===y)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(i=m,r.method="throw",r.arg=s.arg)}}}function T(e,n){var r=n.method,i=e.iterator[r];if(i===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,T(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var o=p(i,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,y;var a=o.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,y):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function D(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function _(n){if(n||""===n){var r=n[c];if(r)return r.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var i=-1,a=function e(){for(;++i<n.length;)if(o.call(n,i))return e.value=n[i],e.done=!1,e;return e.value=t,e.done=!0,e};return a.next=a}}throw new TypeError(e(n)+" is not iterable")}return w.prototype=b,a(L,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:w,configurable:!0}),w.displayName=d(b,l,"GeneratorFunction"),r.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,d(e,l,"GeneratorFunction")),e.prototype=Object.create(L),e},r.awrap=function(e){return{__await:e}},P(R.prototype),d(R.prototype,s,(function(){return this})),r.AsyncIterator=R,r.async=function(e,t,n,i,o){void 0===o&&(o=Promise);var a=new R(f(e,t,n,i),o);return r.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},P(L),d(L,l,"Generator"),d(L,c,(function(){return this})),d(L,"toString",(function(){return"[object Generator]"})),r.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},r.values=_,D.prototype={constructor:D,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(r,i){return u.type="throw",u.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;O(n)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:_(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),y}},r}function r(e,t,n,r,i,o,a){try{var u=e[o](a),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,i)}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o,a,u=[],c=!0,s=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=o.call(n)).done)&&(u.push(r.value),u.length!==t);c=!0);}catch(e){s=!0,i=e}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw i}}return u}}(e,t)||o(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){if(e){if("string"==typeof e)return a(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(t,n,r){return(n=function(t){var n=function(t,n){if("object"!=e(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,n||"default");if("object"!=e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"==e(n)?n:n+""}(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}System.register(["./index-legacy-DYOAMH_U.js","./Chapters-legacy-BDL6CpAX.js","./ReaderSettingsOptions-legacy-Dstduyz3.js","./SpinnerImage-legacy-ZOvSCVWq.js","./Select-legacy-DomWLVsF.js","./Collapse-legacy-DBdARhdK.js","./TextField-legacy-BB5XV7rM.js","./useDebounce-legacy-Bi1mAIEk.js","./NumberSetting-legacy-DW78BTfB.js","./Info-legacy-1fBYXtH4.js","./InputAdornment-legacy-CblyiS5P.js","./Switch-legacy-B7MEQBhE.js","./SwitchBase-legacy-DZ1AhgV1.js"],(function(e,o){"use strict";var a,u,l,d,f,p,h,g,v,m,y,x,w,b,C,j,E,L,P,R,k,T,S,O,D,_,N,I,A,W,M,z,F,H,G,X,V,q,U,Y,K,B,Z,$,J,Q,ee,te,ne,re,ie,oe,ae;return{setters:[function(e){a=e.c,u=e.n,l=e.j,d=e.B,f=e.a,p=e.ag,h=e.r,g=e.i,v=e.x,m=e.a5,y=e.ah,x=e.a3,w=e.ai,b=e.aj,C=e.ak,j=e.s,E=e.I,L=e.u,P=e.e,R=e.al,k=e.am,T=e.an,S=e.f,O=e.T,D=e.ao,_=e.W,N=e.ap,I=e.U,A=e.aq,W=e.X,M=e.ar,z=e.as,F=e.q,H=e.N,G=e.m,X=e.h,V=e.Z,q=e.E,U=e.at,Y=e.au},function(e){K=e.b,B=e.C},function(e){Z=e.P,$=e.i,J=e.R,Q=e.u,ee=e.g,te=e.c},function(e){ne=e.S},function(e){re=e.S},function(e){ie=e.C},function(e){oe=e.a},function(e){ae=e.u},null,null,null,null,null],execute:function(){e("Reader",(function(){var e,n,r,o,u,p,h,g,v=L().t,m=P(),y=R(),x=W(),w=x.chapterIndex,b=x.mangaId,C=a.useMemo((function(){return{id:+b,title:"",thumbnailUrl:"",genre:[],inLibraryAt:0,lastReadAt:0,chapters:{totalCount:0},trackRecords:{totalCount:0}}}),[b]),j=f.useGetManga(M,b),E=j.data,k=j.loading,T=j.error,S=j.refetch,O=a.useRef(null),D=Number(b)===(null===(e=O.current)||void 0===e?void 0:e.mangaId)&&Number(w)===(null===(n=O.current)||void 0===n?void 0:n.sourceOrder)&&-1!==(null===(r=O.current)||void 0===r?void 0:r.pageCount),_=null!==(o=null==E?void 0:E.manga)&&void 0!==o?o:C,N=f.useGetChapters(z,{condition:{mangaId:Number(b),sourceOrder:Number(w)}},{notifyOnNetworkStatusChange:!0}),I=N.data,A=N.loading,U=N.error,Z=N.refetch,$=null==I?void 0:I.chapters.nodes[0],J=a.useRef(!1),ne=F().settings.downloadAheadLimit,re=!!ne;O.current=O.current&&D?$&&(null===(ie=O.current)||void 0===ie?void 0:ie.pageCount)!==$.pageCount?$:O.current:(J.current=!1,$||null);var ie;var oe=null!==(u=O.current)&&void 0!==u?u:Je,ce=a.useRef(Je);ce.current===Je&&(ce.current=oe);oe.mangaId!==(null===(p=ce.current)||void 0===p?void 0:p.mangaId)&&(ce.current=Je);var se=i(f.useGetChapterPagesFetch(oe.id),2),le=se[0],de=se[1],fe=de.loading,pe=de.error,he=function(){!A&&!oe.isDownloaded?le().then((function(){J.current=!0})).catch(X()):J.current=!0};a.useEffect((function(){he()}),[oe.id]);var ge=i(a.useState(!1),2),ve=ge[0],me=ge[1],ye=i(a.useState(0),2),xe=ye[0],we=ye[1],be=xe===oe.pageCount-1,Ce=ae(xe,be?0:1e3),je=i(a.useState(void 0),2),Ee=je[0],Le=je[1],Pe=a.useContext(H),Re=Pe.setOverride,ke=Pe.setTitle,Te=i(a.useState(!1),2),Se=Te[0],Oe=Te[1],De=f.useGetMangaChapters(z,b,{nextFetchPolicy:"standby"}),_e=De.data,Ne=De.loading,Ie=De.error,Ae=De.refetch,We=null==_e?void 0:_e.chapters.nodes,Me=k||A||Ne||fe||!J.current&&!U&&!pe,ze=null!==(h=null!==(g=null!=T?T:U)&&void 0!==g?g:Ie)&&void 0!==h?h:pe,Fe=Q(),He=Fe.settings,Ge=Fe.loading,Xe=i(a.useState(ee(_,He)),2),Ve=Xe[0],qe=Xe[1],Ue=F().settings,Ye=a.useMemo((function(){return Ve.skipDupChapters?B.removeDuplicates(ce.current,null!=We?We:[]):null!=We?We:[]}),[ce.current,We,Ve.skipDupChapters]),Qe=a.useMemo((function(){return B.getNextChapters(oe,null!=We?We:[],{offset:K.PREV,skipDupe:Ve.skipDupChapters,skipDupeChapter:ce.current})}),[oe,ce.current,We,Ve.skipDupChapters]),et=a.useMemo((function(){return B.getNextChapters(oe,null!=We?We:[],{skipDupe:Ve.skipDupChapters,skipDupeChapter:ce.current})}),[oe,ce.current,We,Ve.skipDupChapters]),tt=a.useMemo((function(){return B.getNextChapter(oe,null!=We?We:[],{offset:K.PREV,skipDupe:Ve.skipDupChapters,skipDupeChapter:ce.current})}),[oe,ce.current,We,Ve.skipDupChapters]),nt=a.useMemo((function(){return B.getNextChapter(oe,null!=We?We:[],{skipDupe:Ve.skipDupChapters,skipDupeChapter:ce.current})}),[oe,ce.current,We,Ve.skipDupChapters]),rt=function(e){if(oe!==Je){!function(){var t,n=Be(oe.id),r=(null!==(t=e.lastPageRead)&&void 0!==t?t:0)/oe.pageCount>.25;if(re&&_.inLibrary&&!(null==n||!n.isDownloaded)&&r){var i=nt?Be(nt.id):null;if(null==i||!i.isDownloaded)return;var o=B.getNonRead(et).map((function(e){return Be(e.id)})).slice(-ne).filter((function(e){return!e.isDownloaded})).map((function(e){return e.id})).filter((function(e){return!B.isDownloading(e)}));if(!o.length)return;B.download(o).catch(X())}}();var n=Ve.skipDupChapters?B.getIds(B.addDuplicates([oe],null!=We?We:[oe])):[oe.id];f.updateChapters(n,c(c({},e),{},{chapterIdsToDelete:function(){if(!(!!e.isRead&&!!Ue.deleteChaptersWhileReading)||!We)return[];var n=[oe].concat(t(Qe))[Ue.deleteChaptersWhileReading-1];if(!n)return[];var r=Be(n.id);return r.isRead&&B.isDeletable(r,Ue.deleteChaptersWithBookmark)?Ve.skipDupChapters?B.getIds(B.addDuplicates([n],We)):B.getIds([n]):[]}(),trackProgressMangaId:Ue.updateProgressAfterReading&&e.isRead&&_.trackRecords.totalCount?_.id:void 0}),{errorPolicy:"all"}).response.catch(X())}},it=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];qe(c(c({},Ve),{},s({},e,t))),n&&Y(_,[[e,t]]).catch((function(){return G(v("reader.settings.error.label.failed_to_save_settings"),"warning")}))},ot=a.useCallback((function(e){var t=e===K.NEXT,n=t?nt:tt;n?(Oe(!0),we(0),m("/manga/".concat(_.id,"/chapter/").concat(n.sourceOrder),{replace:!0,state:y.state}),Oe(!1)):G(v(t?"reader.error.label.next_chapter_does_not_exist":"reader.error.label.prev_chapter_does_not_exist"),"error")}),[_.id,null==tt?void 0:tt.id,null==nt?void 0:nt.id]);a.useEffect((function(){!Me&&oe?(me(!0),oe.lastPageRead===oe.pageCount-1?we(0):we(oe.lastPageRead)):we(0)}),[oe,Me]),a.useEffect((function(){null!=_&&_.title&&oe.name!==v("global.label.loading")?ke("".concat(_.title,": ").concat(oe.name)):ke(v("reader.title"))}),[v,_,oe]),a.useEffect((function(){Ge||k||(te(_,"manga",He).catch(X()),qe(ee(_,He)))}),[Ge,k]),a.useEffect((function(){return Re({status:!0,value:l.jsx(Ke,{settings:Ve,setSettingValue:it,manga:_,chapter:oe,chapters:Ye,curPage:xe,scrollToPage:Le,openNextChapter:ot,retrievingNextChapter:Se})}),function(){return Re({status:!1,value:l.jsx("div",{})})}}),[_,oe,Ve,xe,w,Se,ot,Ye]),a.useEffect((function(){if(ve&&oe!==Je){var e=Be(oe.id);if(Ce!==(null==e?void 0:e.lastPageRead)){var t=-1!==Ce,n=Ce===oe.pageCount-1;(t||n)&&rt({lastPageRead:t?Ce:void 0,isRead:!!n||void 0})}}}),[Ce,re]);var at=a.useCallback((function(){rt({lastPageRead:oe.pageCount-1,isRead:!0}),ot(K.NEXT)}),[oe.pageCount,ot,oe,_]),ut=a.useCallback((function(){ot(K.PREV)}),[ot]);if(Me)return l.jsx(d,{sx:{height:"100vh",width:"100vw",display:"grid",placeItems:"center"},children:l.jsx(V,{thickness:5})});if(ze)return l.jsx(q,{message:v("global.error.label.failed_to_load_data"),messageExtra:ze.message,retry:function(){T&&S().catch(X()),U&&Z().catch(X()),Ie&&Ae().catch(X()),pe&&he()}});if(!oe.pageCount)return l.jsx(q,{message:v("reader.error.label.no_pages_found"),retry:he});var ct=$e(oe.pageCount).map((function(e){return{index:e,src:f.getChapterPageUrl(b,w,e)}})),st=Ze(Ve.readerType),lt=null!=Ee?Ee:oe.lastPageRead===oe.pageCount-1?0:oe.lastPageRead;return l.jsxs(d,{sx:{display:"flex",flexDirection:"column",alignContent:"center",alignItems:"center",justifyContent:"center",minWidth:Ve.staticNav?"calc((100vw - (100vw - 100%)) - 300px)":"calc(100vw - (100vw - 100%))",minHeight:"100vh",marginLeft:Ve.staticNav?"300px":"unset"},children:[l.jsx(ue,{settings:Ve,curPage:xe,pageCount:oe.pageCount}),l.jsx(d,{sx:{alignSelf:"stretch"},children:l.jsx(st,{pages:ct,pageCount:oe.pageCount,setCurPage:we,initialPage:lt,curPage:xe,settings:Ve,manga:_,chapter:oe,nextChapter:at,prevChapter:ut},oe.id)})]})}));function o(e){var t=e.pages,n=e.curPage,r=e.initialPage,i=e.settings,o=e.setCurPage,c=e.prevChapter,s=e.nextChapter,f=a.useRef(r),p=a.useRef(null),h=a.useRef([]);function g(){var e;n<t.length-1?(null===(e=h.current[n+1])||void 0===e||e.scrollIntoView({inline:"center"}),o((function(e){return e+1}))):i.loadNextOnEnding&&s()}function v(){var e;n>0?(null===(e=h.current[n-1])||void 0===e||e.scrollIntoView({inline:"center"}),o(n-1)):0===n&&c()}var m=a.useRef(0);function y(e){window.scrollBy(m.current-e.pageX,0)}function x(e){var t;m.current=e.pageX,null===(t=p.current)||void 0===t||t.addEventListener("mousemove",y)}function w(){var e;null===(e=p.current)||void 0===e||e.removeEventListener("mousemove",y)}var b=function(){"ContinuesHorizontalLTR"===i.readerType?window.scrollX+window.innerWidth>=document.body.scrollWidth&&s():"ContinuesHorizontalRTL"===i.readerType&&window.scrollX<=window.innerWidth&&s()};return u(h.current[r],a.useCallback((function(e,t){var n=h.current[r];null!=n&&n.offsetHeight&&(n.scrollIntoView({inline:"center"}),t.disconnect())}),[h.current[r],r])),a.useEffect((function(){var e,t;return null===(e=p.current)||void 0===e||e.addEventListener("mousedown",x),null===(t=p.current)||void 0===t||t.addEventListener("mouseup",w),function(){var e,t;null===(e=p.current)||void 0===e||e.removeEventListener("mousedown",x),null===(t=p.current)||void 0===t||t.removeEventListener("mouseup",w)}}),[p]),a.useEffect((function(){return i.loadNextOnEnding&&document.addEventListener("scroll",b),function(){document.removeEventListener("scroll",b)}}),[p,n,c,s]),a.useEffect((function(){var e=function(){if(p.current){var e=function(e){for(var t=0;t<e.children.length;t++){var n=e.children.item(t);if(n){var r=n.getBoundingClientRect(),i=r.left,o=r.right;if(i<=window.innerWidth/2&&o>window.innerWidth/2)return t}}return-1}(p.current);e!==f.current&&(f.current=e,o(e)),("ContinuesHorizontalLTR"===i.readerType?window.innerWidth+window.scrollX>=document.body.scrollWidth-5:window.scrollX<=0)&&(f.current=t.length-1,o(f.current))}};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[i.readerType]),l.jsx(d,{ref:p,sx:{display:"flex",flexDirection:"ContinuesHorizontalLTR"===i.readerType?"row":"row-reverse",justifyContent:"ContinuesHorizontalLTR"===i.readerType?"flex-start":"flex-end",width:"auto",height:"auto",overflowX:"visible",userSelect:"none"},onClick:function(e){e.clientX>=.85*window.innerWidth?"ContinuesHorizontalLTR"===i.readerType?g():v():e.clientX<=.15*window.innerWidth&&("ContinuesHorizontalLTR"===i.readerType?v():g())},children:t.map((function(e){return l.jsx(Z,{index:e.index,src:e.src,onImageLoad:function(){},settings:i,ref:function(t){h.current[e.index]=t}},e.index)}))})}function ue(e){var t=e.settings,n=e.curPage,r=e.pageCount;return l.jsx(d,{sx:{display:t.showPageNumber?"block":"none",position:"fixed",bottom:"50px",padding:"2px",paddingLeft:"4px",paddingRight:"4px",textAlign:"center",backgroundColor:"rgba(0, 0, 0, 0.3)",borderRadius:"10px"},children:"".concat(n+1," / ").concat(r)})}function ce(e){var t=e.pages,n=e.settings,r=e.setCurPage,i=e.initialPage,o=e.curPage,u=e.nextChapter,c=e.prevChapter,s=e.chapter,p=a.useRef(null);a.useEffect((function(){var e=t.map((function(e){var t=f.requestImage(e.src);return t.response.catch((function(){})),t}));return function(){e.forEach((function(e){return e.abortRequest(new Error("PagedPager::preload: chapter changed"))}))}}),[s.id]);var h=function(e){r(e),window.scroll({top:0})};function g(){o<t.length-1?h(o+1):n.loadNextOnEnding&&u()}function v(){o>0?h(o-1):c()}function m(){"SingleLTR"===n.readerType?v():"SingleRTL"===n.readerType&&g()}function y(){"SingleLTR"===n.readerType?g():"SingleRTL"===n.readerType&&v()}function x(e){switch(e.key){case"Space":e.preventDefault(),g();break;case"ArrowRight":y();break;case"ArrowLeft":m()}}return a.useEffect((function(){return document.addEventListener("keydown",x),function(){document.removeEventListener("keydown",x)}}),[p,o,n.readerType,c,u]),a.useEffect((function(){setTimeout((function(){h(i)}),0)}),[i]),l.jsx(d,{ref:p,sx:{display:"flex",flexDirection:"column",justifyContent:"center",width:"auto",height:"auto"},onClick:function(e){e.clientX>window.innerWidth/2?y():m()},children:l.jsx(Z,{index:o,onImageLoad:function(){},src:t[o].src,settings:n},o)})}var se=a.forwardRef((function(e,t){var n=e.image1src,r=e.image2src,i=e.index,o=e.onImageLoad,a=e.settings,u=$(a),s=c(c({},u),{},{width:a.fitPageToWindow?u.width:"calc(".concat(u.width," * 0.5)"),minWidth:a.fitPageToWindow&&a.scalePage?"calc(".concat(u.minWidth," * 0.5)"):u.minWidth,maxWidth:a.fitPageToWindow?"calc(".concat(u.maxWidth," * 0.5)"):u.maxWidth}),f=c(c({},s),{},{height:"100vh",width:"50%",backgroundColor:"#525252"});return l.jsxs(d,{ref:t,sx:{display:"flex",flexDirection:"DoubleLTR"===a.readerType?"row":"row-reverse",justifyContent:"center",width:"100%"},children:[l.jsx(ne,{src:n,onImageLoad:o,alt:"Page #".concat(i),spinnerStyle:f,imgStyle:c(c({},s),{},{objectPosition:"DoubleLTR"===a.readerType?p("right","left"):p("left","right")})}),l.jsx(ne,{src:r,onImageLoad:o,alt:"Page #".concat(i+1),spinnerStyle:c(c({},f),{},{width:"calc(50% - 5px)",marginLeft:"5px"}),imgStyle:c(c({},s),{},{objectPosition:"DoubleLTR"===a.readerType?p("left","right"):p("right","left")})})]})})),le=function(e,t,n){if(t[e]||t[e+1])return!0;if(e===t.length-1)return!0;var r=e-(t.lastIndexOf(!0,e-1)+1);return n?r%2==0:r%2==1};function de(e){var t=e.pages,o=e.settings,u=e.setCurPage,c=e.initialPage,s=e.curPage,p=e.chapter,h=e.nextChapter,g=e.prevChapter,v=a.useRef(null),m=i(a.useState(Array(t.length).fill(!1)),2),y=m[0],x=m[1],w=i(a.useState(Array(t.length).fill(!1)),2),b=w[0],C=w[1];function j(){var e=1;if(s<t.length&&b[s]&&(e=1,y[s]))return e;if(s+1<t.length&&b[s+1]){if(le(s,y,o.offsetFirstPage))return e;e=2}return e}function E(){if(s<t.length-1){var e=s+j();u(e>=t.length?t.length-1:e)}else o.loadNextOnEnding&&h()}function L(){if(s>0){var e=s-(le(s-2,y,o.offsetFirstPage)?1:2);u(e<0?0:e)}else g()}function P(){"DoubleLTR"===o.readerType?L():E()}function R(){"DoubleLTR"===o.readerType?E():L()}function k(e){switch(e.key){case"Space":e.preventDefault(),E();break;case"ArrowRight":R();break;case"ArrowLeft":P()}}return a.useEffect((function(){return document.addEventListener("keydown",k),function(){document.removeEventListener("keydown",k)}}),[v,s,o.readerType,g,h,b,y]),a.useEffect((function(){u(c)}),[c]),a.useEffect((function(){o.offsetFirstPage?2===j()&&u(s+1):s>0&&!le(s-1,y,o.offsetFirstPage)&&u(s-1)}),[o.offsetFirstPage]),a.useEffect((function(){var e=t.map((function(e){return[e.index,f.requestImage(e.src)]}));return e.forEach(function(){var e,t=(e=n().mark((function e(t){var r,o,a,u,c;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i(t,2),o=r[0],a=r[1],e.prev=1,e.next=4,a.response;case 4:u=e.sent,(c=new Image).onload=function(){URL.revokeObjectURL(u),C((function(e){return e.toSpliced(o,1,!0)})),x((function(e){return e.toSpliced(o,1,(t=c).height/t.width<1);var t}))},c.src=u,e.next=12;break;case 10:e.prev=10,e.t0=e.catch(1);case 12:case"end":return e.stop()}}),e,null,[[1,10]])})),function(){var t=this,n=arguments;return new Promise((function(i,o){var a=e.apply(t,n);function u(e){r(a,i,o,u,c,"next",e)}function c(e){r(a,i,o,u,c,"throw",e)}u(void 0)}))});return function(e){return t.apply(this,arguments)}}()),function(){e.forEach((function(e){var t=i(e,2),n=t[0];return t[1].abortRequest(new Error("DoublePagedPager::preload(".concat(n,"): chapter changed")))}))}}),[p.id]),l.jsx(d,{ref:v,onClick:function(e){e.clientX>window.innerWidth/2?R():P()},children:l.jsx(d,{id:"display",sx:{display:"flex",flexDirection:"DoubleLTR"===o.readerType?"row":"row-reverse",justifyContent:"center",width:"auto",height:"auto"},children:2===j()?l.jsx(se,{index:s,image1src:t[s].src,image2src:t[s+1].src,settings:o},s):l.jsx(Z,{index:s,src:t[s].src,onImageLoad:function(){},settings:o},s)})})}var fe=function(){return window.innerHeight+window.scrollY>=document.body.offsetHeight-5};function pe(e){var t=e.pages,n=e.settings,r=e.setCurPage,i=e.initialPage,o=e.nextChapter,c=e.prevChapter,s=a.useRef(i),f=a.useRef(null),p=a.useRef([]);a.useEffect((function(){var e=!1,i=function(){if(f.current)if(fe()){if(e)return;e=!0,s.current=t.length-1,r(s.current),n.loadNextOnEnding&&o()}else{e=!1;var i=function(e){for(var t=0;t<e.children.length;t++){var n=e.children.item(t);if(n){var r=n.getBoundingClientRect(),i=r.top,o=r.bottom;if(i<=window.innerHeight&&o>1)return t}}return-1}(f.current);i!==s.current&&(s.current=i,r(i))}};return window.addEventListener("scroll",i),function(){window.removeEventListener("scroll",i)}}),[n.loadNextOnEnding,o]);var h=a.useRef(0),g=a.useRef(!1);function v(e){g.current=!0,window.scrollBy(0,h.current-e.pageY)}function m(e){var t;h.current=e.pageY,null===(t=f.current)||void 0===t||t.addEventListener("mousemove",v)}function y(){var e;null===(e=f.current)||void 0===e||e.removeEventListener("mousemove",v)}a.useEffect((function(){var e,t;return null===(e=f.current)||void 0===e||e.addEventListener("mousedown",m),null===(t=f.current)||void 0===t||t.addEventListener("mouseup",y),function(){var e,t;null===(e=f.current)||void 0===e||e.removeEventListener("mousedown",m),null===(t=f.current)||void 0===t||t.removeEventListener("mouseup",y)}}),[f]);var x=a.useCallback((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.95;"down"===e&&fe()?o():"up"===e&&window.scrollY<=0?c():window.scroll({top:window.scrollY+window.innerHeight*t*("up"===e?-1:1),behavior:"smooth"})}),[o,c]);return a.useEffect((function(){var e=function(e){switch(e.key){case"Space":case"ArrowRight":e.preventDefault(),x(e.shiftKey?"up":"down");break;case"ArrowDown":e.preventDefault(),x(e.shiftKey?"up":"down",.25);break;case"ArrowUp":e.preventDefault(),x(e.shiftKey?"down":"up",.25);break;case"ArrowLeft":e.preventDefault(),x(e.shiftKey?"down":"up")}};return document.addEventListener("keydown",e,!1),function(){document.removeEventListener("keydown",e)}}),[x]),u(p.current[i],a.useCallback((function(e,t){var n=p.current[i];null!=n&&n.offsetHeight&&(n.scrollIntoView(),t.disconnect())}),[p.current[i],i])),l.jsx(d,{ref:f,sx:{display:"flex",flexDirection:"column",justifyContent:"center",width:"auto",height:"auto",userSelect:"none"},onClick:function(e){g.current?g.current=!1:x(e.clientX>window.innerWidth/2?"down":"up")},children:t.map((function(e){return l.jsx(Z,{index:e.index,src:e.src,onImageLoad:function(){},settings:n,ref:function(t){p.current[e.index]=t}},e.index)}))})}var he={},ge=g;Object.defineProperty(he,"__esModule",{value:!0});var ve=he.default=void 0,me=ge(h()),ye=l;ve=he.default=(0,me.default)((0,ye.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");var xe={},we=g;Object.defineProperty(xe,"__esModule",{value:!0});var be=xe.default=void 0,Ce=we(h()),je=l;be=xe.default=(0,Ce.default)((0,je.jsx)("path",{d:"M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6z"}),"KeyboardArrowLeft");var Ee={},Le=g;Object.defineProperty(Ee,"__esModule",{value:!0});var Pe=Ee.default=void 0,Re=Le(h()),ke=l;Pe=Ee.default=(0,Re.default)((0,ke.jsx)("path",{d:"M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z"}),"KeyboardArrowRight");var Te={},Se=g;Object.defineProperty(Te,"__esModule",{value:!0});var Oe=Te.default=void 0,De=Se(h()),_e=l;Oe=Te.default=(0,De.default)((0,_e.jsx)("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"}),"KeyboardArrowDown");var Ne={},Ie=g;Object.defineProperty(Ne,"__esModule",{value:!0});var Ae=Ne.default=void 0,We=Ie(h()),Me=l;Ae=Ne.default=(0,We.default)((0,Me.jsx)("path",{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"}),"KeyboardArrowUp");var ze=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],Fe={entering:{transform:"none"},entered:{transform:"none"}},He=a.forwardRef((function(e,t){var n=v(),r={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},i=e.addEndListener,o=e.appear,u=void 0===o||o,c=e.children,s=e.easing,d=e.in,f=e.onEnter,p=e.onEntered,h=e.onEntering,g=e.onExit,j=e.onExited,E=e.onExiting,L=e.style,P=e.timeout,R=void 0===P?r:P,k=e.TransitionComponent,T=void 0===k?w:k,S=m(e,ze),O=a.useRef(null),D=y(O,c.ref,t),_=function(e){return function(t){if(e){var n=O.current;void 0===t?e(n):e(n,t)}}},N=_(h),I=_((function(e,t){b(e);var r=C({style:L,timeout:R,easing:s},{mode:"enter"});e.style.webkitTransition=n.transitions.create("transform",r),e.style.transition=n.transitions.create("transform",r),f&&f(e,t)})),A=_(p),W=_(E),M=_((function(e){var t=C({style:L,timeout:R,easing:s},{mode:"exit"});e.style.webkitTransition=n.transitions.create("transform",t),e.style.transition=n.transitions.create("transform",t),g&&g(e)})),z=_(j);return l.jsx(T,x({appear:u,in:d,nodeRef:O,onEnter:I,onEntered:A,onEntering:N,onExit:M,onExited:z,onExiting:W,addEndListener:function(e){i&&i(O.current,e)},timeout:R},S,{children:function(e,t){return a.cloneElement(c,x({style:x({transform:"scale(0)",visibility:"exited"!==e||d?void 0:"hidden"},Fe[e],L,c.props.style),ref:D},t))}}))})),Ge=j("div")({zIndex:10}),Xe=j("div")((function(e){var t=e.theme;return{top:0,left:0,width:"300px",minWidth:"300px",height:"100vh",overflowY:"auto",backgroundColor:t.palette.background.default,"& header":{backgroundColor:t.palette.action.hover,display:"flex",alignItems:"center",minHeight:"64px",paddingLeft:"24px",paddingRight:"24px",transition:"left 2s ease","& button":{flexGrow:0,flexShrink:0},"& button:nth-child(1)":{marginRight:"16px"},"& h1":{fontSize:"1.25rem",flexGrow:1}}}})),Ve=j("div")({margin:"0 16px","& > span:nth-child(1)":{textAlign:"center",display:"block",marginTop:"16px"}}),qe=j("div")({display:"flex",flexWrap:"wrap",alignContent:"center",alignItems:"center",justifyContent:"center"}),Ue=j("div")({display:"grid",gridTemplateRows:"auto auto auto",gridTemplateColumns:"0fr 1fr 0fr",gridTemplateAreas:'"pre current next"',gridColumnGap:"5px",margin:"10px 0","& a":{textDecoration:"none",color:"inherit",display:"flex",flexWrap:"wrap",alignContent:"center"}}),Ye=j(E)((function(e){var t=e.theme;return{position:"fixed",top:20,left:30,height:"40px",width:"40px",borderRadius:5,backgroundColor:t.palette.custom.main,"&:hover":{backgroundColor:t.palette.custom.light}}}));function Ke(e){var t,n=L().t,r=P(),o=null!==(t=R().state)&&void 0!==t?t:{},u=o.prevDrawerOpen,c=o.prevSettingsCollapseOpen,s=e.settings,d=e.setSettingValue,f=e.manga,h=e.chapter,g=e.chapters,v=e.curPage,m=e.scrollToPage,y=e.openNextChapter,x=e.retrievingNextChapter,w=k(),b=a.useMemo((function(){return new Set(g.map((function(e){return e.scanlator}))).size>1}),[g]),C=i(a.useState(s.staticNav||u),2),j=C[0],W=C[1],M=i(a.useState(!0),2),z=M[0],F=M[1],H=i(a.useState(s.staticNav||u),2),G=H[0],X=H[1],V=i(a.useState(0),2),q=V[0],U=V[1],Y=i(a.useState(null==c||c),2),B=Y[0],Z=Y[1],$=x,Q=function(e){W(e),X(e)},ee=function(){var e=window.pageYOffset;Math.abs(e-q)>20&&(X(e>q),U(e))};return a.useEffect((function(){z&&Q(s.staticNav)}),[s.staticNav]),a.useEffect((function(){window.addEventListener("scroll",ee);var e=document.querySelector("#root"),t=document.querySelector("#appMainContainer");return e.style.display="flex",e.style.flexDirection="column",t.style.display="none",function(){e.style.display="block",t.style.display="block",window.removeEventListener("scroll",ee)}}),[ee]),l.jsxs(Ge,{children:[l.jsx(T,{direction:p("right","left"),in:j,timeout:200,appear:!1,mountOnEnter:!0,unmountOnExit:!0,children:l.jsxs(Xe,{sx:{position:"fixed"},children:[l.jsxs("header",{children:[!s.staticNav&&l.jsx(S,{title:n("reader.button.close_menu"),children:l.jsx(E,{edge:"start",color:"inherit","aria-label":"menu",onClick:function(){return Q(!1)},size:"large",children:p(l.jsx(be,{}),l.jsx(Pe,{}))})}),l.jsx(O,{variant:"h1",textOverflow:"ellipsis",overflow:"hidden",sx:{py:1},children:h.name}),l.jsx(S,{title:n("reader.button.exit"),children:l.jsx(E,{edge:"start",color:"inherit","aria-label":"menu",onClick:w,size:"large",sx:{mr:-1},children:l.jsx(ve,{})})})]}),l.jsxs(D,{ContainerComponent:"div",sx:{"& span":{fontWeight:"bold"}},children:[l.jsx(_,{primary:n("reader.settings.title.reader_settings")}),l.jsxs(E,{edge:"start",color:"inherit","aria-label":"menu",disableRipple:!0,disableFocusRipple:!0,onClick:function(){return Z(!B)},size:"large",children:[B&&l.jsx(Ae,{}),!B&&l.jsx(Oe,{})]})]}),l.jsx(ie,{in:B,timeout:"auto",unmountOnExit:!0,children:l.jsx(J,{setSettingValue:function(e,t,n){F("staticNav"!==e),d(e,t,n)},staticNav:s.staticNav,showPageNumber:s.showPageNumber,loadNextOnEnding:s.loadNextOnEnding,skipDupChapters:s.skipDupChapters,fitPageToWindow:s.fitPageToWindow,scalePage:s.scalePage,readerType:s.readerType,offsetFirstPage:s.offsetFirstPage,readerWidth:s.readerWidth})}),l.jsx(N,{sx:{my:1,mx:2}}),l.jsxs(Ve,{children:[l.jsxs(qe,{children:[l.jsx("span",{children:n("reader.page_info.label.currently_on_page")}),l.jsx(oe,{size:"small",sx:{margin:"0 5px"},disabled:$||-1===h.pageCount,children:l.jsx(re,{value:h.pageCount>-1?"".concat(v):"",displayEmpty:!0,onChange:function(e){var t=e.target.value;m(Number(t))},children:Array(Math.max(0,h.pageCount)).fill(1).map((function(e,t){return l.jsx(I,{value:t,children:t+1},"Page#".concat(t))}))})}),l.jsx("span",{children:n("reader.page_info.label.of_max_pages",{maxPages:h.pageCount})})]}),l.jsxs(Ue,{children:[l.jsx(S,{title:n("reader.button.previous_chapter"),children:l.jsx(E,{sx:{gridArea:"pre"},disabled:$||h.sourceOrder<=1,onClick:function(){return y(K.PREV)},children:p(l.jsx(be,{}),l.jsx(Pe,{}))})}),l.jsx(oe,{sx:{gridArea:"current"},size:"small",disabled:$||h.sourceOrder<1,children:l.jsx(re,{value:h.sourceOrder>=1?"".concat(h.sourceOrder):"",displayEmpty:!0,onChange:function(e){var t=e.target.value;r("/manga/".concat(f.id,"/chapter/").concat(t),{replace:!0,state:{prevDrawerOpen:j,prevSettingsCollapseOpen:B}})},children:g.map((function(e){var t=e.id,n=e.sourceOrder,r=e.name,i=e.chapterNumber,o=e.scanlator;return l.jsx(I,{value:n,children:"#".concat(i).concat(b&&null!=o?" (".concat(o,")"):""," | ").concat(r)},t)}))})}),l.jsx(S,{title:n("reader.button.next_chapter"),children:l.jsx(E,{sx:{gridArea:"next"},disabled:$||h.sourceOrder<1||h.sourceOrder>=f.chapters.totalCount,onClick:function(){return y(K.NEXT)},children:p(l.jsx(Pe,{}),l.jsx(be,{}))})})]})]})]})}),l.jsx(He,{in:!j,children:l.jsx(A,{in:!G,children:l.jsx(S,{title:n("reader.button.open_menu"),children:l.jsx(Ye,{edge:"start","aria-label":"menu",disableRipple:!0,disableFocusRipple:!0,onClick:function(){return Q(!0)},size:"large",children:p(l.jsx(Pe,{}),l.jsx(be,{}))})})})})]})}var Be=function(e){return B.getFromCache(e,U,"CHAPTER_READER_FIELDS")},Ze=function(e){switch(e){case"ContinuesVertical":case"Webtoon":default:return pe;case"SingleVertical":case"SingleRTL":case"SingleLTR":return ce;case"DoubleVertical":case"DoubleRTL":case"DoubleLTR":return de;case"ContinuesHorizontalLTR":case"ContinuesHorizontalRTL":return o}},$e=function(e){return Array.from({length:e},(function(e,t){return t}))},Je={pageCount:-1,sourceOrder:-1,chapterCount:0,lastPageRead:0,name:"Loading...",manga:{id:-1}}}}}))}();
