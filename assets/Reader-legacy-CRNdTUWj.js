!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||o(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */n=function(){return r};var t,r={},i=Object.prototype,o=i.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},u="function"==typeof Symbol?Symbol:{},c=u.iterator||"@@iterator",s=u.asyncIterator||"@@asyncIterator",l=u.toStringTag||"@@toStringTag";function d(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch(t){d=function(e,t,n){return e[t]=n}}function f(e,t,n,r){var i=t&&t.prototype instanceof x?t:x,o=Object.create(i.prototype),u=new D(r||[]);return a(o,"_invoke",{value:k(e,n,u)}),o}function p(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}r.wrap=f;var h="suspendedStart",g="suspendedYield",v="executing",m="completed",y={};function x(){}function w(){}function b(){}var C={};d(C,c,(function(){return this}));var j=Object.getPrototypeOf,E=j&&j(j(_([])));E&&E!==i&&o.call(E,c)&&(C=E);var L=b.prototype=x.prototype=Object.create(C);function P(e){["next","throw","return"].forEach((function(t){d(e,t,(function(e){return this._invoke(t,e)}))}))}function R(t,n){function r(i,a,u,c){var s=p(t[i],t,a);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"==e(d)&&o.call(d,"__await")?n.resolve(d.__await).then((function(e){r("next",e,u,c)}),(function(e){r("throw",e,u,c)})):n.resolve(d).then((function(e){l.value=e,u(l)}),(function(e){return r("throw",e,u,c)}))}c(s.arg)}var i;a(this,"_invoke",{value:function(e,t){function o(){return new n((function(n,i){r(e,t,n,i)}))}return i=i?i.then(o,o):o()}})}function k(e,n,r){var i=h;return function(o,a){if(i===v)throw Error("Generator is already running");if(i===m){if("throw"===o)throw a;return{value:t,done:!0}}for(r.method=o,r.arg=a;;){var u=r.delegate;if(u){var c=T(u,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(i===h)throw i=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i=v;var s=p(e,n,r);if("normal"===s.type){if(i=r.done?m:g,s.arg===y)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(i=m,r.method="throw",r.arg=s.arg)}}}function T(e,n){var r=n.method,i=e.iterator[r];if(i===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,T(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var o=p(i,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,y;var a=o.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,y):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function D(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function _(n){if(n||""===n){var r=n[c];if(r)return r.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var i=-1,a=function e(){for(;++i<n.length;)if(o.call(n,i))return e.value=n[i],e.done=!1,e;return e.value=t,e.done=!0,e};return a.next=a}}throw new TypeError(e(n)+" is not iterable")}return w.prototype=b,a(L,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:w,configurable:!0}),w.displayName=d(b,l,"GeneratorFunction"),r.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,d(e,l,"GeneratorFunction")),e.prototype=Object.create(L),e},r.awrap=function(e){return{__await:e}},P(R.prototype),d(R.prototype,s,(function(){return this})),r.AsyncIterator=R,r.async=function(e,t,n,i,o){void 0===o&&(o=Promise);var a=new R(f(e,t,n,i),o);return r.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},P(L),d(L,l,"Generator"),d(L,c,(function(){return this})),d(L,"toString",(function(){return"[object Generator]"})),r.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},r.values=_,D.prototype={constructor:D,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(r,i){return u.type="throw",u.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;O(n)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:_(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),y}},r}function r(e,t,n,r,i,o,a){try{var u=e[o](a),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,i)}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o,a,u=[],c=!0,s=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=o.call(n)).done)&&(u.push(r.value),u.length!==t);c=!0);}catch(e){s=!0,i=e}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw i}}return u}}(e,t)||o(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){if(e){if("string"==typeof e)return a(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(t,n,r){return(n=function(t){var n=function(t,n){if("object"!=e(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,n||"default");if("object"!=e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"==e(n)?n:n+""}(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}System.register(["./index-legacy-J7TtOUmz.js","./Chapters-legacy-Cp0XFKyM.js","./ReaderSettingsOptions-legacy-D38fTozz.js","./SpinnerImage-legacy-DLzz0rCv.js","./Select-legacy-C586p3Wf.js","./Collapse-legacy-BmtD5RKZ.js","./TextField-legacy-DIMdHIKb.js","./useDebounce-legacy-Br1NfOUd.js","./NumberSetting-legacy-8DazEamI.js","./Info-legacy-BSa4vCMh.js","./InputAdornment-legacy-BaT1G8sL.js","./Switch-legacy-xhZvYYtQ.js","./SwitchBase-legacy-QqPIQhIN.js"],(function(e,o){"use strict";var a,u,l,d,f,p,h,g,v,m,y,x,w,b,C,j,E,L,P,R,k,T,S,O,D,_,N,I,A,W,z,M,F,H,G,V,X,U,Y,q,K,B,J,Q,$,Z,ee,te,ne;return{setters:[function(e){a=e.c,u=e.j,l=e.B,d=e.a,f=e.ab,p=e.r,h=e.i,g=e.q,v=e.a0,m=e.ac,y=e._,x=e.ad,w=e.ae,b=e.af,C=e.s,j=e.I,E=e.u,L=e.e,P=e.ag,R=e.ah,k=e.ai,T=e.f,S=e.T,O=e.aj,D=e.O,_=e.ak,N=e.J,I=e.al,A=e.Q,W=e.o,z=e.N,M=e.m,F=e.h,H=e.U,G=e.E,V=e.am},function(e){X=e.b,U=e.C},function(e){Y=e.P,q=e.i,K=e.R,B=e.u,J=e.g,Q=e.c},function(e){$=e.S},function(e){Z=e.S},function(e){ee=e.C},function(e){te=e.a},function(e){ne=e.u},null,null,null,null,null],execute:function(){e("Reader",(function(){var e,n,r,o,f,p,h,g,v=E().t,m=L(),y=P(),x=A(),w=x.chapterIndex,b=x.mangaId,C=a.useMemo((function(){return{id:+b,title:"",thumbnailUrl:"",genre:[],inLibraryAt:0,lastReadAt:0,chapters:{totalCount:0},trackRecords:{totalCount:0}}}),[b]),j=d.useGetManga(b),R=j.data,k=j.loading,T=j.error,S=j.refetch,O=a.useRef(null),D=Number(b)===(null===(e=O.current)||void 0===e?void 0:e.manga.id)&&Number(w)===(null===(n=O.current)||void 0===n?void 0:n.sourceOrder)&&-1!==(null===(r=O.current)||void 0===r?void 0:r.pageCount),_=null!==(o=null==R?void 0:R.manga)&&void 0!==o?o:C,N=d.useGetMangaChapter(b,w,{notifyOnNetworkStatusChange:!0}),I=N.data,Y=N.loading,q=N.error,K=N.refetch,$=a.useRef(!1),Z=W().settings.downloadAheadLimit,ee=!!Z;O.current=O.current&&D?(null==I?void 0:I.chapter)&&(null===(te=O.current)||void 0===te?void 0:te.pageCount)!==I.chapter.pageCount?I.chapter:O.current:($.current=!1,null!=I&&I.chapter?I.chapter:null);var te;var ie=null!==(f=O.current)&&void 0!==f?f:qe,oe=a.useRef(qe);oe.current===qe&&(oe.current=ie);ie.manga.id!==(null===(p=oe.current)||void 0===p?void 0:p.manga.id)&&(oe.current=qe);var ae=i(d.useGetChapterPagesFetch(ie.id),2),ue=ae[0],ce=ae[1],se=ce.loading,le=ce.error,de=function(){!Y&&!ie.isDownloaded?ue().then((function(){$.current=!0})).catch(F()):$.current=!0};a.useEffect((function(){de()}),[ie.id]);var fe=i(a.useState(!1),2),pe=fe[0],he=fe[1],ge=i(a.useState(0),2),ve=ge[0],me=ge[1],ye=ve===ie.pageCount-1,xe=ne(ve,ye?0:1e3),we=i(a.useState(void 0),2),be=we[0],Ce=we[1],je=a.useContext(z),Ee=je.setOverride,Le=je.setTitle,Pe=i(a.useState(!1),2),Re=Pe[0],ke=Pe[1],Te=d.useGetMangaChapters(b,{nextFetchPolicy:"standby"}),Se=Te.data,Oe=Te.loading,De=Te.error,_e=Te.refetch,Ne=null==Se?void 0:Se.chapters.nodes,Ie=k||Y||Oe||se||!$.current&&!q&&!le,Ae=null!==(h=null!==(g=null!=T?T:q)&&void 0!==g?g:De)&&void 0!==h?h:le,We=B(),ze=We.settings,Me=We.loading,Fe=i(a.useState(J(_,ze)),2),He=Fe[0],Ge=Fe[1],Ve=W().settings,Ke=a.useMemo((function(){return He.skipDupChapters?U.removeDuplicates(oe.current,null!=Ne?Ne:[]):null!=Ne?Ne:[]}),[oe.current,Ne,He.skipDupChapters]),Be=a.useMemo((function(){return U.getNextChapters(ie,null!=Ne?Ne:[],{offset:X.PREV,skipDupe:He.skipDupChapters,skipDupeChapter:oe.current})}),[ie,oe.current,Ne,He.skipDupChapters]),Je=a.useMemo((function(){return U.getNextChapters(ie,null!=Ne?Ne:[],{skipDupe:He.skipDupChapters,skipDupeChapter:oe.current})}),[ie,oe.current,Ne,He.skipDupChapters]),Qe=a.useMemo((function(){return U.getNextChapter(ie,null!=Ne?Ne:[],{offset:X.PREV,skipDupe:He.skipDupChapters,skipDupeChapter:oe.current})}),[ie,oe.current,Ne,He.skipDupChapters]),$e=a.useMemo((function(){return U.getNextChapter(ie,null!=Ne?Ne:[],{skipDupe:He.skipDupChapters,skipDupeChapter:oe.current})}),[ie,oe.current,Ne,He.skipDupChapters]),Ze=function(e){if(ie!==qe){!function(){var t,n=U.getFromCache(ie.id),r=(null!==(t=e.lastPageRead)&&void 0!==t?t:0)/ie.pageCount>.25;if(ee&&ie.manga.inLibrary&&!(null==n||!n.isDownloaded)&&r){var i=$e?U.getFromCache($e.id):null;if(null==i||!i.isDownloaded)return;var o=U.getNonRead(Je).map((function(e){return U.getFromCache(e.id)})).slice(-Z).filter((function(e){return!e.isDownloaded})).map((function(e){return e.id})).filter((function(e){return!U.isDownloading(e)}));if(!o.length)return;U.download(o).catch(F())}}();var n=He.skipDupChapters?U.getIds(U.addDuplicates([ie],null!=Ne?Ne:[ie])):[ie.id];d.updateChapters(n,c(c({},e),{},{chapterIdsToDelete:function(){if(!(!!e.isRead&&!!Ve.deleteChaptersWhileReading)||!Ne)return[];var n=[ie].concat(t(Be))[Ve.deleteChaptersWhileReading-1];if(!n)return[];var r=U.getFromCache(n.id);return r.isRead&&U.isDeletable(r,Ve.deleteChaptersWithBookmark)?He.skipDupChapters?U.getIds(U.addDuplicates([n],Ne)):U.getIds([n]):[]}(),trackProgressMangaId:Ve.updateProgressAfterReading&&e.isRead&&_.trackRecords.totalCount?_.id:void 0}),{errorPolicy:"all"}).response.catch(F())}},et=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];Ge(c(c({},He),{},s({},e,t))),n&&V(_,[[e,t]]).catch((function(){return M(v("reader.settings.error.label.failed_to_save_settings"),"warning")}))},tt=a.useCallback((function(e){var t=e===X.NEXT,n=t?$e:Qe;n?(ke(!0),me(0),m("/manga/".concat(_.id,"/chapter/").concat(n.sourceOrder),{replace:!0,state:y.state}),ke(!1)):M(v(t?"reader.error.label.next_chapter_does_not_exist":"reader.error.label.prev_chapter_does_not_exist"),"error")}),[_.id,null==Qe?void 0:Qe.id,null==$e?void 0:$e.id]);a.useEffect((function(){!Ie&&ie?(he(!0),ie.lastPageRead===ie.pageCount-1?me(0):me(ie.lastPageRead)):me(0)}),[ie,Ie]),a.useEffect((function(){null!=_&&_.title&&ie.name!==v("global.label.loading")?Le("".concat(_.title,": ").concat(ie.name)):Le(v("reader.title"))}),[v,_,ie]),a.useEffect((function(){Me||k||(Q(_,"manga",ze).catch(F()),Ge(J(_,ze)))}),[Me,k]),a.useEffect((function(){return Ee({status:!0,value:u.jsx(Xe,{settings:He,setSettingValue:et,manga:_,chapter:ie,chapters:Ke,curPage:ve,scrollToPage:Ce,openNextChapter:tt,retrievingNextChapter:Re})}),function(){return Ee({status:!1,value:u.jsx("div",{})})}}),[_,ie,He,ve,w,Re,tt,Ke]),a.useEffect((function(){if(pe&&ie!==qe){var e=U.getFromCache(ie.id);if(xe!==(null==e?void 0:e.lastPageRead)){var t=-1!==xe,n=xe===ie.pageCount-1;(t||n)&&Ze({lastPageRead:t?xe:void 0,isRead:!!n||void 0})}}}),[xe,ee]);var nt=a.useCallback((function(){Ze({lastPageRead:ie.pageCount-1,isRead:!0}),tt(X.NEXT)}),[ie.pageCount,tt,ie,_]),rt=a.useCallback((function(){tt(X.PREV)}),[tt]);if(Ie)return u.jsx(l,{sx:{height:"100vh",width:"100vw",display:"grid",placeItems:"center"},children:u.jsx(H,{thickness:5})});if(Ae)return u.jsx(G,{message:v("global.error.label.failed_to_load_data"),messageExtra:Ae.message,retry:function(){T&&S().catch(F()),q&&K().catch(F()),De&&_e().catch(F()),le&&de()}});if(!ie.pageCount)return u.jsx(G,{message:v("reader.error.label.no_pages_found"),retry:de});var it=Ye(ie.pageCount).map((function(e){return{index:e,src:d.getChapterPageUrl(b,w,e)}})),ot=Ue(He.readerType),at=null!=be?be:ie.lastPageRead===ie.pageCount-1?0:ie.lastPageRead;return u.jsxs(l,{sx:{display:"flex",flexDirection:"column",alignContent:"center",alignItems:"center",justifyContent:"center",minWidth:He.staticNav?"calc((100vw - (100vw - 100%)) - 300px)":"calc(100vw - (100vw - 100%))",minHeight:"100vh",marginLeft:He.staticNav?"300px":"unset"},children:[u.jsx(re,{settings:He,curPage:ve,pageCount:ie.pageCount}),u.jsx(l,{sx:{alignSelf:"stretch"},children:u.jsx(ot,{pages:it,pageCount:ie.pageCount,setCurPage:me,initialPage:at,curPage:ve,settings:He,manga:_,chapter:ie,nextChapter:nt,prevChapter:rt},ie.id)})]})}));function o(e){var t=e.pages,n=e.curPage,r=e.initialPage,i=e.settings,o=e.setCurPage,c=e.prevChapter,s=e.nextChapter,d=a.useRef(r),f=a.useRef(null),p=a.useRef([]);function h(){var e;n<t.length-1?(null===(e=p.current[n+1])||void 0===e||e.scrollIntoView({inline:"center"}),o((function(e){return e+1}))):i.loadNextOnEnding&&s()}function g(){var e;n>0?(null===(e=p.current[n-1])||void 0===e||e.scrollIntoView({inline:"center"}),o(n-1)):0===n&&c()}var v=a.useRef(0);function m(e){window.scrollBy(v.current-e.pageX,0)}function y(e){var t;v.current=e.pageX,null===(t=f.current)||void 0===t||t.addEventListener("mousemove",m)}function x(){var e;null===(e=f.current)||void 0===e||e.removeEventListener("mousemove",m)}var w=function(){"ContinuesHorizontalLTR"===i.readerType?window.scrollX+window.innerWidth>=document.body.scrollWidth&&s():"ContinuesHorizontalRTL"===i.readerType&&window.scrollX<=window.innerWidth&&s()};return a.useLayoutEffect((function(){var e=p.current[r];if(!e)return function(){};var t=new ResizeObserver((function(){e.offsetHeight&&(e.scrollIntoView({inline:"center"}),t.disconnect())}));return t.observe(e),function(){return t.disconnect()}}),[r]),a.useEffect((function(){var e,t;return null===(e=f.current)||void 0===e||e.addEventListener("mousedown",y),null===(t=f.current)||void 0===t||t.addEventListener("mouseup",x),function(){var e,t;null===(e=f.current)||void 0===e||e.removeEventListener("mousedown",y),null===(t=f.current)||void 0===t||t.removeEventListener("mouseup",x)}}),[f]),a.useEffect((function(){return i.loadNextOnEnding&&document.addEventListener("scroll",w),function(){document.removeEventListener("scroll",w)}}),[f,n,c,s]),a.useEffect((function(){var e=function(){if(f.current){var e=function(e){for(var t=0;t<e.children.length;t++){var n=e.children.item(t);if(n){var r=n.getBoundingClientRect(),i=r.left,o=r.right;if(i<=window.innerWidth/2&&o>window.innerWidth/2)return t}}return-1}(f.current);e!==d.current&&(d.current=e,o(e)),("ContinuesHorizontalLTR"===i.readerType?window.innerWidth+window.scrollX>=document.body.scrollWidth-5:window.scrollX<=0)&&(d.current=t.length-1,o(d.current))}};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[i.readerType]),u.jsx(l,{ref:f,sx:{display:"flex",flexDirection:"ContinuesHorizontalLTR"===i.readerType?"row":"row-reverse",justifyContent:"ContinuesHorizontalLTR"===i.readerType?"flex-start":"flex-end",width:"auto",height:"auto",overflowX:"visible",userSelect:"none"},onClick:function(e){e.clientX>=.85*window.innerWidth?"ContinuesHorizontalLTR"===i.readerType?h():g():e.clientX<=.15*window.innerWidth&&("ContinuesHorizontalLTR"===i.readerType?g():h())},children:t.map((function(e){return u.jsx(Y,{index:e.index,src:e.src,onImageLoad:function(){},settings:i,ref:function(t){p.current[e.index]=t}},e.index)}))})}function re(e){var t=e.settings,n=e.curPage,r=e.pageCount;return u.jsx(l,{sx:{display:t.showPageNumber?"block":"none",position:"fixed",bottom:"50px",padding:"2px",paddingLeft:"4px",paddingRight:"4px",textAlign:"center",backgroundColor:"rgba(0, 0, 0, 0.3)",borderRadius:"10px"},children:"".concat(n+1," / ").concat(r)})}function ie(e){var t=e.pages,n=e.settings,r=e.setCurPage,i=e.initialPage,o=e.curPage,c=e.nextChapter,s=e.prevChapter,f=e.chapter,p=a.useRef(null);a.useEffect((function(){var e=t.map((function(e){var t=d.requestImage(e.src);return t.response.catch((function(){})),t}));return function(){e.forEach((function(e){return e.abortRequest(new Error("PagedPager::preload: chapter changed"))}))}}),[f.id]);var h=function(e){r(e),window.scroll({top:0})};function g(){o<t.length-1?h(o+1):n.loadNextOnEnding&&c()}function v(){o>0?h(o-1):s()}function m(){"SingleLTR"===n.readerType?v():"SingleRTL"===n.readerType&&g()}function y(){"SingleLTR"===n.readerType?g():"SingleRTL"===n.readerType&&v()}function x(e){switch(e.key){case"Space":e.preventDefault(),g();break;case"ArrowRight":y();break;case"ArrowLeft":m()}}return a.useEffect((function(){return document.addEventListener("keydown",x),function(){document.removeEventListener("keydown",x)}}),[p,o,n.readerType,s,c]),a.useEffect((function(){setTimeout((function(){h(i)}),0)}),[i]),u.jsx(l,{ref:p,sx:{display:"flex",flexDirection:"column",justifyContent:"center",width:"auto",height:"auto"},onClick:function(e){e.clientX>window.innerWidth/2?y():m()},children:u.jsx(Y,{index:o,onImageLoad:function(){},src:t[o].src,settings:n},o)})}var oe=a.forwardRef((function(e,t){var n=e.image1src,r=e.image2src,i=e.index,o=e.onImageLoad,a=e.settings,s=q(a),d=c(c({},s),{},{width:a.fitPageToWindow?s.width:"calc(".concat(s.width," * 0.5)"),minWidth:a.fitPageToWindow&&a.scalePage?"calc(".concat(s.minWidth," * 0.5)"):s.minWidth,maxWidth:a.fitPageToWindow?"calc(".concat(s.maxWidth," * 0.5)"):s.maxWidth}),p=c(c({},d),{},{height:"100vh",width:"50%",backgroundColor:"#525252"});return u.jsxs(l,{ref:t,sx:{display:"flex",flexDirection:"DoubleLTR"===a.readerType?"row":"row-reverse",justifyContent:"center",width:"100%"},children:[u.jsx($,{src:n,onImageLoad:o,alt:"Page #".concat(i),spinnerStyle:p,imgStyle:c(c({},d),{},{objectPosition:"DoubleLTR"===a.readerType?f("right","left"):f("left","right")})}),u.jsx($,{src:r,onImageLoad:o,alt:"Page #".concat(i+1),spinnerStyle:c(c({},p),{},{width:"calc(50% - 5px)",marginLeft:"5px"}),imgStyle:c(c({},d),{},{objectPosition:"DoubleLTR"===a.readerType?f("left","right"):f("right","left")})})]})})),ae=function(e,t,n){if(t[e]||t[e+1])return!0;if(e===t.length-1)return!0;var r=e-(t.lastIndexOf(!0,e-1)+1);return n?r%2==0:r%2==1};function ue(e){var t=e.pages,o=e.settings,c=e.setCurPage,s=e.initialPage,f=e.curPage,p=e.chapter,h=e.nextChapter,g=e.prevChapter,v=a.useRef(null),m=i(a.useState(Array(t.length).fill(!1)),2),y=m[0],x=m[1],w=i(a.useState(Array(t.length).fill(!1)),2),b=w[0],C=w[1];function j(){var e=1;if(f<t.length&&b[f]&&(e=1,y[f]))return e;if(f+1<t.length&&b[f+1]){if(ae(f,y,o.offsetFirstPage))return e;e=2}return e}function E(){if(f<t.length-1){var e=f+j();c(e>=t.length?t.length-1:e)}else o.loadNextOnEnding&&h()}function L(){if(f>0){var e=f-(ae(f-2,y,o.offsetFirstPage)?1:2);c(e<0?0:e)}else g()}function P(){"DoubleLTR"===o.readerType?L():E()}function R(){"DoubleLTR"===o.readerType?E():L()}function k(e){switch(e.key){case"Space":e.preventDefault(),E();break;case"ArrowRight":R();break;case"ArrowLeft":P()}}return a.useEffect((function(){return document.addEventListener("keydown",k),function(){document.removeEventListener("keydown",k)}}),[v,f,o.readerType,g,h,b,y]),a.useEffect((function(){c(s)}),[s]),a.useEffect((function(){o.offsetFirstPage?2===j()&&c(f+1):f>0&&!ae(f-1,y,o.offsetFirstPage)&&c(f-1)}),[o.offsetFirstPage]),a.useEffect((function(){var e=t.map((function(e){return[e.index,d.requestImage(e.src)]}));return e.forEach(function(){var e,t=(e=n().mark((function e(t){var r,o,a,u,c;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i(t,2),o=r[0],a=r[1],e.prev=1,e.next=4,a.response;case 4:u=e.sent,(c=new Image).onload=function(){URL.revokeObjectURL(u),C((function(e){return e.toSpliced(o,1,!0)})),x((function(e){return e.toSpliced(o,1,(t=c).height/t.width<1);var t}))},c.src=u,e.next=12;break;case 10:e.prev=10,e.t0=e.catch(1);case 12:case"end":return e.stop()}}),e,null,[[1,10]])})),function(){var t=this,n=arguments;return new Promise((function(i,o){var a=e.apply(t,n);function u(e){r(a,i,o,u,c,"next",e)}function c(e){r(a,i,o,u,c,"throw",e)}u(void 0)}))});return function(e){return t.apply(this,arguments)}}()),function(){e.forEach((function(e){var t=i(e,2),n=t[0];return t[1].abortRequest(new Error("DoublePagedPager::preload(".concat(n,"): chapter changed")))}))}}),[p.id]),u.jsx(l,{ref:v,onClick:function(e){e.clientX>window.innerWidth/2?R():P()},children:u.jsx(l,{id:"display",sx:{display:"flex",flexDirection:"DoubleLTR"===o.readerType?"row":"row-reverse",justifyContent:"center",width:"auto",height:"auto"},children:2===j()?u.jsx(oe,{index:f,image1src:t[f].src,image2src:t[f+1].src,settings:o},f):u.jsx(Y,{index:f,src:t[f].src,onImageLoad:function(){},settings:o},f)})})}var ce=function(){return window.innerHeight+window.scrollY>=document.body.offsetHeight-5};function se(e){var t=e.pages,n=e.settings,r=e.setCurPage,i=e.initialPage,o=e.nextChapter,c=e.prevChapter,s=a.useRef(i),d=a.useRef(null),f=a.useRef([]);a.useEffect((function(){var e=!1,i=function(){if(d.current)if(ce()){if(e)return;e=!0,s.current=t.length-1,r(s.current),n.loadNextOnEnding&&o()}else{e=!1;var i=function(e){for(var t=0;t<e.children.length;t++){var n=e.children.item(t);if(n){var r=n.getBoundingClientRect(),i=r.top,o=r.bottom;if(i<=window.innerHeight&&o>1)return t}}return-1}(d.current);i!==s.current&&(s.current=i,r(i))}};return window.addEventListener("scroll",i),function(){window.removeEventListener("scroll",i)}}),[n.loadNextOnEnding,o]);var p=a.useRef(0),h=a.useRef(!1);function g(e){h.current=!0,window.scrollBy(0,p.current-e.pageY)}function v(e){var t;p.current=e.pageY,null===(t=d.current)||void 0===t||t.addEventListener("mousemove",g)}function m(){var e;null===(e=d.current)||void 0===e||e.removeEventListener("mousemove",g)}a.useEffect((function(){var e,t;return null===(e=d.current)||void 0===e||e.addEventListener("mousedown",v),null===(t=d.current)||void 0===t||t.addEventListener("mouseup",m),function(){var e,t;null===(e=d.current)||void 0===e||e.removeEventListener("mousedown",v),null===(t=d.current)||void 0===t||t.removeEventListener("mouseup",m)}}),[d]);var y=a.useCallback((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.95;"down"===e&&ce()?o():"up"===e&&window.scrollY<=0?c():window.scroll({top:window.scrollY+window.innerHeight*t*("up"===e?-1:1),behavior:"smooth"})}),[o,c]);return a.useEffect((function(){var e=function(e){switch(e.key){case"Space":case"ArrowRight":e.preventDefault(),y(e.shiftKey?"up":"down");break;case"ArrowDown":e.preventDefault(),y(e.shiftKey?"up":"down",.25);break;case"ArrowUp":e.preventDefault(),y(e.shiftKey?"down":"up",.25);break;case"ArrowLeft":e.preventDefault(),y(e.shiftKey?"down":"up")}};return document.addEventListener("keydown",e,!1),function(){document.removeEventListener("keydown",e)}}),[y]),a.useLayoutEffect((function(){var e=f.current[i];if(!e)return function(){};var t=new ResizeObserver((function(){e.offsetHeight&&(e.scrollIntoView(),t.disconnect())}));return t.observe(e),function(){return t.disconnect()}}),[i]),u.jsx(l,{ref:d,sx:{display:"flex",flexDirection:"column",justifyContent:"center",width:"auto",height:"auto",userSelect:"none"},onClick:function(e){h.current?h.current=!1:y(e.clientX>window.innerWidth/2?"down":"up")},children:t.map((function(e){return u.jsx(Y,{index:e.index,src:e.src,onImageLoad:function(){},settings:n,ref:function(t){f.current[e.index]=t}},e.index)}))})}var le={},de=h;Object.defineProperty(le,"__esModule",{value:!0});var fe=le.default=void 0,pe=de(p()),he=u;fe=le.default=(0,pe.default)((0,he.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");var ge={},ve=h;Object.defineProperty(ge,"__esModule",{value:!0});var me=ge.default=void 0,ye=ve(p()),xe=u;me=ge.default=(0,ye.default)((0,xe.jsx)("path",{d:"M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6z"}),"KeyboardArrowLeft");var we={},be=h;Object.defineProperty(we,"__esModule",{value:!0});var Ce=we.default=void 0,je=be(p()),Ee=u;Ce=we.default=(0,je.default)((0,Ee.jsx)("path",{d:"M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z"}),"KeyboardArrowRight");var Le={},Pe=h;Object.defineProperty(Le,"__esModule",{value:!0});var Re=Le.default=void 0,ke=Pe(p()),Te=u;Re=Le.default=(0,ke.default)((0,Te.jsx)("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"}),"KeyboardArrowDown");var Se={},Oe=h;Object.defineProperty(Se,"__esModule",{value:!0});var De=Se.default=void 0,_e=Oe(p()),Ne=u;De=Se.default=(0,_e.default)((0,Ne.jsx)("path",{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"}),"KeyboardArrowUp");var Ie=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],Ae={entering:{transform:"none"},entered:{transform:"none"}},We=a.forwardRef((function(e,t){var n=g(),r={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},i=e.addEndListener,o=e.appear,c=void 0===o||o,s=e.children,l=e.easing,d=e.in,f=e.onEnter,p=e.onEntered,h=e.onEntering,C=e.onExit,j=e.onExited,E=e.onExiting,L=e.style,P=e.timeout,R=void 0===P?r:P,k=e.TransitionComponent,T=void 0===k?x:k,S=v(e,Ie),O=a.useRef(null),D=m(O,s.ref,t),_=function(e){return function(t){if(e){var n=O.current;void 0===t?e(n):e(n,t)}}},N=_(h),I=_((function(e,t){w(e);var r=b({style:L,timeout:R,easing:l},{mode:"enter"});e.style.webkitTransition=n.transitions.create("transform",r),e.style.transition=n.transitions.create("transform",r),f&&f(e,t)})),A=_(p),W=_(E),z=_((function(e){var t=b({style:L,timeout:R,easing:l},{mode:"exit"});e.style.webkitTransition=n.transitions.create("transform",t),e.style.transition=n.transitions.create("transform",t),C&&C(e)})),M=_(j);return u.jsx(T,y({appear:c,in:d,nodeRef:O,onEnter:I,onEntered:A,onEntering:N,onExit:z,onExited:M,onExiting:W,addEndListener:function(e){i&&i(O.current,e)},timeout:R},S,{children:function(e,t){return a.cloneElement(s,y({style:y({transform:"scale(0)",visibility:"exited"!==e||d?void 0:"hidden"},Ae[e],L,s.props.style),ref:D},t))}}))})),ze=C("div")({zIndex:10}),Me=C("div")((function(e){var t=e.theme;return{top:0,left:0,width:"300px",minWidth:"300px",height:"100vh",overflowY:"auto",backgroundColor:t.palette.background.default,"& header":{backgroundColor:t.palette.action.hover,display:"flex",alignItems:"center",minHeight:"64px",paddingLeft:"24px",paddingRight:"24px",transition:"left 2s ease","& button":{flexGrow:0,flexShrink:0},"& button:nth-child(1)":{marginRight:"16px"},"& h1":{fontSize:"1.25rem",flexGrow:1}}}})),Fe=C("div")({margin:"0 16px","& > span:nth-child(1)":{textAlign:"center",display:"block",marginTop:"16px"}}),He=C("div")({display:"flex",flexWrap:"wrap",alignContent:"center",alignItems:"center",justifyContent:"center"}),Ge=C("div")({display:"grid",gridTemplateRows:"auto auto auto",gridTemplateColumns:"0fr 1fr 0fr",gridTemplateAreas:'"pre current next"',gridColumnGap:"5px",margin:"10px 0","& a":{textDecoration:"none",color:"inherit",display:"flex",flexWrap:"wrap",alignContent:"center"}}),Ve=C(j)((function(e){var t=e.theme;return{position:"fixed",top:20,left:30,height:"40px",width:"40px",borderRadius:5,backgroundColor:t.palette.custom.main,"&:hover":{backgroundColor:t.palette.custom.light}}}));function Xe(e){var t,n=E().t,r=L(),o=null!==(t=P().state)&&void 0!==t?t:{},c=o.prevDrawerOpen,s=o.prevSettingsCollapseOpen,l=e.settings,d=e.setSettingValue,p=e.manga,h=e.chapter,g=e.chapters,v=e.curPage,m=e.scrollToPage,y=e.openNextChapter,x=e.retrievingNextChapter,w=R(),b=a.useMemo((function(){return!!new Set(g.map((function(e){return e.scanlator}))).size}),[g]),C=i(a.useState(l.staticNav||c),2),A=C[0],W=C[1],z=i(a.useState(!0),2),M=z[0],F=z[1],H=i(a.useState(l.staticNav||c),2),G=H[0],V=H[1],U=i(a.useState(0),2),Y=U[0],q=U[1],B=i(a.useState(null==s||s),2),J=B[0],Q=B[1],$=x,ne=function(e){W(e),V(e)},re=function(){var e=window.pageYOffset;Math.abs(e-Y)>20&&(V(e>Y),q(e))};return a.useEffect((function(){M&&ne(l.staticNav)}),[l.staticNav]),a.useEffect((function(){window.addEventListener("scroll",re);var e=document.querySelector("#root"),t=document.querySelector("#appMainContainer");return e.style.display="flex",e.style.flexDirection="column",t.style.display="none",function(){e.style.display="block",t.style.display="block",window.removeEventListener("scroll",re)}}),[re]),u.jsxs(ze,{children:[u.jsx(k,{direction:f("right","left"),in:A,timeout:200,appear:!1,mountOnEnter:!0,unmountOnExit:!0,children:u.jsxs(Me,{sx:{position:"fixed"},children:[u.jsxs("header",{children:[!l.staticNav&&u.jsx(T,{title:n("reader.button.close_menu"),children:u.jsx(j,{edge:"start",color:"inherit","aria-label":"menu",onClick:function(){return ne(!1)},size:"large",children:f(u.jsx(me,{}),u.jsx(Ce,{}))})}),u.jsx(S,{variant:"h1",textOverflow:"ellipsis",overflow:"hidden",sx:{py:1},children:h.name}),u.jsx(T,{title:n("reader.button.exit"),children:u.jsx(j,{edge:"start",color:"inherit","aria-label":"menu",onClick:w,size:"large",sx:{mr:-1},children:u.jsx(fe,{})})})]}),u.jsxs(O,{ContainerComponent:"div",sx:{"& span":{fontWeight:"bold"}},children:[u.jsx(D,{primary:n("reader.settings.title.reader_settings")}),u.jsxs(j,{edge:"start",color:"inherit","aria-label":"menu",disableRipple:!0,disableFocusRipple:!0,onClick:function(){return Q(!J)},size:"large",children:[J&&u.jsx(De,{}),!J&&u.jsx(Re,{})]})]}),u.jsx(ee,{in:J,timeout:"auto",unmountOnExit:!0,children:u.jsx(K,{setSettingValue:function(e,t,n){F("staticNav"!==e),d(e,t,n)},staticNav:l.staticNav,showPageNumber:l.showPageNumber,loadNextOnEnding:l.loadNextOnEnding,skipDupChapters:l.skipDupChapters,fitPageToWindow:l.fitPageToWindow,scalePage:l.scalePage,readerType:l.readerType,offsetFirstPage:l.offsetFirstPage,readerWidth:l.readerWidth})}),u.jsx(_,{sx:{my:1,mx:2}}),u.jsxs(Fe,{children:[u.jsxs(He,{children:[u.jsx("span",{children:n("reader.page_info.label.currently_on_page")}),u.jsx(te,{size:"small",sx:{margin:"0 5px"},disabled:$||-1===h.pageCount,children:u.jsx(Z,{value:h.pageCount>-1?"".concat(v):"",displayEmpty:!0,onChange:function(e){var t=e.target.value;m(Number(t))},children:Array(Math.max(0,h.pageCount)).fill(1).map((function(e,t){return u.jsx(N,{value:t,children:t+1},"Page#".concat(t))}))})}),u.jsx("span",{children:n("reader.page_info.label.of_max_pages",{maxPages:h.pageCount})})]}),u.jsxs(Ge,{children:[u.jsx(T,{title:n("reader.button.previous_chapter"),children:u.jsx(j,{sx:{gridArea:"pre"},disabled:$||h.sourceOrder<=1,onClick:function(){return y(X.PREV)},children:f(u.jsx(me,{}),u.jsx(Ce,{}))})}),u.jsx(te,{sx:{gridArea:"current"},size:"small",disabled:$||h.sourceOrder<1,children:u.jsx(Z,{value:h.sourceOrder>=1?"".concat(h.sourceOrder):"",displayEmpty:!0,onChange:function(e){var t=e.target.value;r("/manga/".concat(p.id,"/chapter/").concat(t),{replace:!0,state:{prevDrawerOpen:A,prevSettingsCollapseOpen:J}})},children:g.map((function(e){var t=e.id,n=e.sourceOrder,r=e.name,i=e.chapterNumber,o=e.scanlator;return u.jsx(N,{value:n,children:"#".concat(i).concat(b&&null!=o?" (".concat(o,")"):""," | ").concat(r)},t)}))})}),u.jsx(T,{title:n("reader.button.next_chapter"),children:u.jsx(j,{sx:{gridArea:"next"},disabled:$||h.sourceOrder<1||h.sourceOrder>=p.chapters.totalCount,onClick:function(){return y(X.NEXT)},children:f(u.jsx(Ce,{}),u.jsx(me,{}))})})]})]})]})}),u.jsx(We,{in:!A,children:u.jsx(I,{in:!G,children:u.jsx(T,{title:n("reader.button.open_menu"),children:u.jsx(Ve,{edge:"start","aria-label":"menu",disableRipple:!0,disableFocusRipple:!0,onClick:function(){return ne(!0)},size:"large",children:f(u.jsx(Ce,{}),u.jsx(me,{}))})})})})]})}var Ue=function(e){switch(e){case"ContinuesVertical":case"Webtoon":default:return se;case"SingleVertical":case"SingleRTL":case"SingleLTR":return ie;case"DoubleVertical":case"DoubleRTL":case"DoubleLTR":return ue;case"ContinuesHorizontalLTR":case"ContinuesHorizontalRTL":return o}},Ye=function(e){return Array.from({length:e},(function(e,t){return t}))},qe={pageCount:-1,sourceOrder:-1,chapterCount:0,lastPageRead:0,name:"Loading...",manga:{id:-1}}}}}))}();
