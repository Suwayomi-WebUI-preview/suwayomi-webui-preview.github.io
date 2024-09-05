!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}var t=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function n(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||a(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */r=function(){return n};var t,n={},i=Object.prototype,o=i.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},u="function"==typeof Symbol?Symbol:{},c=u.iterator||"@@iterator",s=u.asyncIterator||"@@asyncIterator",l=u.toStringTag||"@@toStringTag";function d(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch(t){d=function(e,t,n){return e[t]=n}}function f(e,t,n,r){var i=t&&t.prototype instanceof x?t:x,o=Object.create(i.prototype),u=new D(r||[]);return a(o,"_invoke",{value:R(e,n,u)}),o}function p(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}n.wrap=f;var h="suspendedStart",g="suspendedYield",v="executing",m="completed",y={};function x(){}function w(){}function b(){}var C={};d(C,c,(function(){return this}));var j=Object.getPrototypeOf,E=j&&j(j(_([])));E&&E!==i&&o.call(E,c)&&(C=E);var L=b.prototype=x.prototype=Object.create(C);function P(e){["next","throw","return"].forEach((function(t){d(e,t,(function(e){return this._invoke(t,e)}))}))}function k(t,n){function r(i,a,u,c){var s=p(t[i],t,a);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"==e(d)&&o.call(d,"__await")?n.resolve(d.__await).then((function(e){r("next",e,u,c)}),(function(e){r("throw",e,u,c)})):n.resolve(d).then((function(e){l.value=e,u(l)}),(function(e){return r("throw",e,u,c)}))}c(s.arg)}var i;a(this,"_invoke",{value:function(e,t){function o(){return new n((function(n,i){r(e,t,n,i)}))}return i=i?i.then(o,o):o()}})}function R(e,n,r){var i=h;return function(o,a){if(i===v)throw Error("Generator is already running");if(i===m){if("throw"===o)throw a;return{value:t,done:!0}}for(r.method=o,r.arg=a;;){var u=r.delegate;if(u){var c=S(u,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(i===h)throw i=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i=v;var s=p(e,n,r);if("normal"===s.type){if(i=r.done?m:g,s.arg===y)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(i=m,r.method="throw",r.arg=s.arg)}}}function S(e,n){var r=n.method,i=e.iterator[r];if(i===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,S(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var o=p(i,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,y;var a=o.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,y):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function D(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function _(n){if(n||""===n){var r=n[c];if(r)return r.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var i=-1,a=function e(){for(;++i<n.length;)if(o.call(n,i))return e.value=n[i],e.done=!1,e;return e.value=t,e.done=!0,e};return a.next=a}}throw new TypeError(e(n)+" is not iterable")}return w.prototype=b,a(L,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:w,configurable:!0}),w.displayName=d(b,l,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,d(e,l,"GeneratorFunction")),e.prototype=Object.create(L),e},n.awrap=function(e){return{__await:e}},P(k.prototype),d(k.prototype,s,(function(){return this})),n.AsyncIterator=k,n.async=function(e,t,r,i,o){void 0===o&&(o=Promise);var a=new k(f(e,t,r,i),o);return n.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},P(L),d(L,l,"Generator"),d(L,c,(function(){return this})),d(L,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},n.values=_,D.prototype={constructor:D,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(r,i){return u.type="throw",u.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),T(n),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;T(n)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:_(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),y}},n}function i(e,t,n,r,i,o,a){try{var u=e[o](a),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,i)}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o,a,u=[],c=!0,s=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=o.call(n)).done)&&(u.push(r.value),u.length!==t);c=!0);}catch(e){s=!0,i=e}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw i}}return u}}(e,t)||a(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){if(e){if("string"==typeof e)return u(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(t,n,r){return(n=function(t){var n=function(t,n){if("object"!=e(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,n||"default");if("object"!=e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"==e(n)?n:n+""}(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}System.register(["./index-legacy-DUr6fylU.js","./Chapters-legacy-ygn-wfqP.js","./ReaderSettingsOptions-legacy-Qtut3E8z.js","./SpinnerImage-legacy-54-zVF2a.js","./Select-legacy-9O0a-g0L.js","./CustomIconButton-legacy-jlaqw35B.js","./Collapse-legacy-DrDQALA9.js","./TextField-legacy-Bms8b2vO.js","./useDebounce-legacy-DEA3Kgod.js","./NumberSetting-legacy-CiJ5gg7P.js","./Info-legacy-D5T2vdS9.js","./InputAdornment-legacy-DaAfJJL0.js","./Switch-legacy-CZbshE0m.js","./SwitchBase-legacy-CM7jDCUv.js"],(function(e,a){"use strict";var u,c,d,f,p,h,g,v,m,y,x,w,b,C,j,E,L,P,k,R,S,O,T,D,_,N,I,A,W,M,z,H,F,V,X,G,B,Y,q,K,U,$,J,Q,Z,ee,te,ne,re,ie,oe,ae,ue,ce;return{setters:[function(e){u=e.c,c=e.n,d=e.j,f=e.B,p=e.a,h=e.al,g=e.r,v=e.i,m=e.y,y=e.am,x=e.an,w=e.ao,b=e.ap,C=e.aq,j=e.s,E=e.u,L=e.w,P=e.e,k=e.ar,R=e.as,S=e.at,O=e.f,T=e.I,D=e.T,_=e.au,N=e.a0,I=e.av,A=e._,W=e.aw,M=e.a1,z=e.ax,H=e.ay,F=e.q,V=e.N,X=e.m,G=e.h,B=e.a3,Y=e.E,q=e.az,K=e.aA},function(e){U=e.b,$=e.C},function(e){J=e.P,Q=e.i,Z=e.R,ee=e.u,te=e.g,ne=e.c},function(e){re=e.S},function(e){ie=e.S},function(e){oe=e.C},function(e){ae=e.C},function(e){ue=e.a},function(e){ce=e.u},null,null,null,null,null],execute:function(){e("Reader",(function(){var e,t,r,i,a,h,g,v,m=E().t,y=P(),x=k(),w=M(),b=w.chapterIndex,C=w.mangaId,j=u.useMemo((function(){return{id:+C,title:"",thumbnailUrl:"",genre:[],inLibraryAt:0,lastReadAt:0,chapters:{totalCount:0},trackRecords:{totalCount:0}}}),[C]),L=p.useGetManga(z,C),R=L.data,S=L.loading,O=L.error,T=L.refetch,D=u.useRef(null),_=Number(C)===(null===(e=D.current)||void 0===e?void 0:e.mangaId)&&Number(b)===(null===(t=D.current)||void 0===t?void 0:t.sourceOrder)&&-1!==(null===(r=D.current)||void 0===r?void 0:r.pageCount),N=null!==(i=null==R?void 0:R.manga)&&void 0!==i?i:j,I=p.useGetChapters(H,{condition:{mangaId:Number(C),sourceOrder:Number(b)}},{notifyOnNetworkStatusChange:!0}),A=I.data,W=I.loading,q=I.error,J=I.refetch,Q=null==A?void 0:A.chapters.nodes[0],Z=u.useRef(!1),re=F().settings.downloadAheadLimit,ie=!!re;D.current=D.current&&_?Q&&(null===(oe=D.current)||void 0===oe?void 0:oe.pageCount)!==Q.pageCount?Q:D.current:(Z.current=!1,Q||null);var oe;var ae=null!==(a=D.current)&&void 0!==a?a:Qe,ue=u.useRef(Qe);ue.current===Qe&&(ue.current=ae);ae.mangaId!==(null===(h=ue.current)||void 0===h?void 0:h.mangaId)&&(ue.current=Qe);var le=o(p.useGetChapterPagesFetch(ae.id),2),de=le[0],fe=le[1],pe=fe.loading,he=fe.error,ge=function(){W||de().then((function(){Z.current=!0})).catch(G())};u.useEffect((function(){ge()}),[ae.id]);var ve=o(u.useState(!1),2),me=ve[0],ye=ve[1],xe=o(u.useState(0),2),we=xe[0],be=xe[1],Ce=we===ae.pageCount-1,je=ce(we,Ce?0:1e3),Ee=o(u.useState(void 0),2),Le=Ee[0],Pe=Ee[1],ke=u.useContext(V),Re=ke.setOverride,Se=ke.setTitle,Oe=ke.readerNavBarWidth,Te=o(u.useState(!1),2),De=Te[0],_e=Te[1],Ne=p.useGetMangaChapters(H,C,{nextFetchPolicy:"standby"}),Ie=Ne.data,Ae=Ne.loading,We=Ne.error,Me=Ne.refetch,ze=null==Ie?void 0:Ie.chapters.nodes,He=S||W||Ae||pe||!Z.current&&!q&&!he,Fe=null!==(g=null!==(v=null!=O?O:q)&&void 0!==v?v:We)&&void 0!==g?g:he,Ve=ee(),Xe=Ve.settings,Ge=Ve.loading,Be=o(u.useState(te(N,Xe)),2),Ye=Be[0],qe=Be[1],Ze=F().settings,et=u.useMemo((function(){return Ye.skipDupChapters?$.removeDuplicates(ue.current,null!=ze?ze:[]):null!=ze?ze:[]}),[ue.current,ze,Ye.skipDupChapters]),tt=u.useMemo((function(){return $.getNextChapters(ae,null!=ze?ze:[],{offset:U.PREV,skipDupe:Ye.skipDupChapters,skipDupeChapter:ue.current})}),[ae,ue.current,ze,Ye.skipDupChapters]),nt=u.useMemo((function(){return $.getNextChapters(ae,null!=ze?ze:[],{skipDupe:Ye.skipDupChapters,skipDupeChapter:ue.current})}),[ae,ue.current,ze,Ye.skipDupChapters]),rt=u.useMemo((function(){return $.getNextChapter(ae,null!=ze?ze:[],{offset:U.PREV,skipDupe:Ye.skipDupChapters,skipDupeChapter:ue.current})}),[ae,ue.current,ze,Ye.skipDupChapters]),it=u.useMemo((function(){return $.getNextChapter(ae,null!=ze?ze:[],{skipDupe:Ye.skipDupChapters,skipDupeChapter:ue.current})}),[ae,ue.current,ze,Ye.skipDupChapters]),ot=function(e){if(ae!==Qe){!function(){var t,n=Ue(ae.id),r=(null!==(t=e.lastPageRead)&&void 0!==t?t:0)/ae.pageCount>.25;if(ie&&N.inLibrary&&!(null==n||!n.isDownloaded)&&r){var i=it?Ue(it.id):null;if(null==i||!i.isDownloaded)return;var o=$.getNonRead(nt).map((function(e){return Ue(e.id)})).slice(-re).filter((function(e){return!e.isDownloaded})).map((function(e){return e.id})).filter((function(e){return!$.isDownloading(e)}));if(!o.length)return;$.download(o).catch(G())}}();var t=Ye.skipDupChapters?$.getIds($.addDuplicates([ae],null!=ze?ze:[ae])):[ae.id];p.updateChapters(t,s(s({},e),{},{chapterIdsToDelete:function(){if(!(!!e.isRead&&!!Ze.deleteChaptersWhileReading)||!ze)return[];var t=[ae].concat(n(tt))[Ze.deleteChaptersWhileReading-1];if(!t)return[];var r=Ue(t.id);return r.isRead&&$.isDeletable(r,Ze.deleteChaptersWithBookmark)?Ye.skipDupChapters?$.getIds($.addDuplicates([t],ze)):$.getIds([t]):[]}(),trackProgressMangaId:Ze.updateProgressAfterReading&&e.isRead&&N.trackRecords.totalCount?N.id:void 0}),{errorPolicy:"all"}).response.catch(G())}},at=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];qe(s(s({},Ye),{},l({},e,t))),n&&K(N,[[e,t]]).catch((function(){return X(m("reader.settings.error.label.failed_to_save_settings"),"warning")}))},ut=u.useCallback((function(e){var t=e===U.NEXT,n=t?it:rt;n?(_e(!0),be(0),y("/manga/".concat(N.id,"/chapter/").concat(n.sourceOrder),{replace:!0,state:x.state}),_e(!1)):X(m(t?"reader.error.label.next_chapter_does_not_exist":"reader.error.label.prev_chapter_does_not_exist"),"error")}),[N.id,null==rt?void 0:rt.id,null==it?void 0:it.id]);u.useEffect((function(){!He&&ae?(ye(!0),ae.lastPageRead===ae.pageCount-1?be(0):be(ae.lastPageRead)):be(0)}),[ae,He]),u.useEffect((function(){null!=N&&N.title&&ae.name!==m("global.label.loading")?Se("".concat(N.title,": ").concat(ae.name)):Se(m("reader.title"))}),[m,N,ae]),u.useEffect((function(){Ge||S||(ne(N,"manga",Xe).catch(G()),qe(te(N,Xe)))}),[Ge,S]),u.useEffect((function(){return Re({status:!0,value:d.jsx(Ke,{settings:Ye,setSettingValue:at,manga:N,chapter:ae,chapters:et,curPage:we,scrollToPage:Pe,openNextChapter:ut,retrievingNextChapter:De})}),function(){return Re({status:!1,value:d.jsx("div",{})})}}),[N,ae,Ye,we,b,De,ut,et]),u.useEffect((function(){if(me&&ae!==Qe){var e=Ue(ae.id);if(je!==(null==e?void 0:e.lastPageRead)){var t=-1!==je,n=je===ae.pageCount-1;(t||n)&&ot({lastPageRead:t?je:void 0,isRead:!!n||void 0})}}}),[je,ie]);var ct=u.useCallback((function(){ot({lastPageRead:ae.pageCount-1,isRead:!0}),ut(U.NEXT)}),[ae.pageCount,ut,ae,N]),st=u.useCallback((function(){ut(U.PREV)}),[ut]),lt=o(u.useState(0),2),dt=lt[0],ft=lt[1];if(c(document.documentElement,u.useCallback((function(){return ft(window.innerHeight-document.documentElement.clientHeight)}),[])),He)return d.jsx(f,{sx:{height:"100vh",width:"100vw",display:"grid",placeItems:"center"},children:d.jsx(B,{thickness:5})});if(Fe)return d.jsx(Y,{message:m("global.error.label.failed_to_load_data"),messageExtra:Fe.message,retry:function(){O&&T().catch(G()),q&&J().catch(G()),We&&Me().catch(G()),he&&ge()}});if(!ae.pageCount)return d.jsx(Y,{message:m("reader.error.label.no_pages_found"),retry:ge});var pt=Je(ae.pageCount).map((function(e){return{index:e,src:p.getChapterPageUrl(C,b,e)}})),ht=$e(Ye.readerType),gt=null!=Le?Le:ae.lastPageRead===ae.pageCount-1?0:ae.lastPageRead,vt=Ye.staticNav?Oe:0;return d.jsxs(f,{sx:{display:"flex",flexDirection:"column",alignContent:"center",alignItems:"center",justifyContent:"center",minWidth:"calc((100vw - (100vw - 100%)) - ".concat(vt,"px)"),minHeight:"calc(100vh - ".concat(dt,"px)"),marginLeft:"".concat(vt,"px")},children:[d.jsx(se,{settings:Ye,curPage:we,pageCount:ae.pageCount}),d.jsx(f,{sx:{alignSelf:"stretch"},children:d.jsx(ht,{pages:pt,pageCount:ae.pageCount,setCurPage:be,initialPage:gt,curPage:we,settings:Ye,manga:N,chapter:ae,nextChapter:ct,prevChapter:st},ae.id)})]})}));function a(e){var t=e.pages,n=e.curPage,r=e.initialPage,i=e.settings,o=e.setCurPage,a=e.prevChapter,s=e.nextChapter,l=u.useRef(r),p=u.useRef(null),h=u.useRef([]);function g(){var e;n<t.length-1?(null===(e=h.current[n+1])||void 0===e||e.scrollIntoView({inline:"center"}),o((function(e){return e+1}))):i.loadNextOnEnding&&s()}function v(){var e;n>0?(null===(e=h.current[n-1])||void 0===e||e.scrollIntoView({inline:"center"}),o(n-1)):0===n&&a()}var m=u.useRef(0);function y(e){window.scrollBy(m.current-e.pageX,0)}function x(e){var t;m.current=e.pageX,null===(t=p.current)||void 0===t||t.addEventListener("mousemove",y)}function w(){var e;null===(e=p.current)||void 0===e||e.removeEventListener("mousemove",y)}var b=function(){"ContinuesHorizontalLTR"===i.readerType?window.scrollX+window.innerWidth>=document.body.scrollWidth&&s():"ContinuesHorizontalRTL"===i.readerType&&window.scrollX<=window.innerWidth&&s()};return c(h.current[r],u.useCallback((function(e,t){var n=h.current[r];null!=n&&n.offsetHeight&&(n.scrollIntoView({inline:"center"}),t.disconnect())}),[h.current[r],r])),u.useEffect((function(){var e,t;return null===(e=p.current)||void 0===e||e.addEventListener("mousedown",x),null===(t=p.current)||void 0===t||t.addEventListener("mouseup",w),function(){var e,t;null===(e=p.current)||void 0===e||e.removeEventListener("mousedown",x),null===(t=p.current)||void 0===t||t.removeEventListener("mouseup",w)}}),[p]),u.useEffect((function(){return i.loadNextOnEnding&&document.addEventListener("scroll",b),function(){document.removeEventListener("scroll",b)}}),[p,n,a,s]),u.useEffect((function(){var e=function(){if(p.current){var e=function(e){for(var t=0;t<e.children.length;t++){var n=e.children.item(t);if(n){var r=n.getBoundingClientRect(),i=r.left,o=r.right;if(i<=window.innerWidth/2&&o>window.innerWidth/2)return t}}return-1}(p.current);e!==l.current&&(l.current=e,o(e)),("ContinuesHorizontalLTR"===i.readerType?window.innerWidth+window.scrollX>=document.body.scrollWidth-5:window.scrollX<=0)&&(l.current=t.length-1,o(l.current))}};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[i.readerType]),d.jsx(f,{ref:p,sx:{display:"flex",flexDirection:"ContinuesHorizontalLTR"===i.readerType?"row":"row-reverse",justifyContent:"ContinuesHorizontalLTR"===i.readerType?"flex-start":"flex-end",width:"auto",height:"auto",overflowX:"visible",userSelect:"none"},onClick:function(e){e.clientX>=.85*window.innerWidth?"ContinuesHorizontalLTR"===i.readerType?g():v():e.clientX<=.15*window.innerWidth&&("ContinuesHorizontalLTR"===i.readerType?v():g())},children:t.map((function(e){return d.jsx(J,{index:e.index,src:e.src,onImageLoad:function(){},settings:i,ref:function(t){h.current[e.index]=t}},e.index)}))})}function se(e){var t=e.settings,n=e.curPage,r=e.pageCount;return d.jsx(f,{sx:{display:t.showPageNumber?"block":"none",position:"fixed",bottom:"50px",padding:"2px",paddingLeft:"4px",paddingRight:"4px",textAlign:"center",backgroundColor:"rgba(0, 0, 0, 0.3)",borderRadius:"10px"},children:"".concat(n+1," / ").concat(r)})}function le(e){var t=e.pages,n=e.settings,r=e.setCurPage,i=e.initialPage,o=e.curPage,a=e.nextChapter,c=e.prevChapter,s=e.chapter,l=u.useRef(null);u.useEffect((function(){var e=t.map((function(e){var t=p.requestImage(e.src);return t.response.catch((function(){})),t}));return function(){e.forEach((function(e){return e.abortRequest(new Error("PagedPager::preload: chapter changed"))}))}}),[s.id]);var h=function(e){r(e),window.scroll({top:0})};function g(){o<t.length-1?h(o+1):n.loadNextOnEnding&&a()}function v(){o>0?h(o-1):c()}function m(){"SingleLTR"===n.readerType?v():"SingleRTL"===n.readerType&&g()}function y(){"SingleLTR"===n.readerType?g():"SingleRTL"===n.readerType&&v()}function x(e){switch(e.key){case"Space":e.preventDefault(),g();break;case"ArrowRight":y();break;case"ArrowLeft":m()}}return u.useEffect((function(){return document.addEventListener("keydown",x),function(){document.removeEventListener("keydown",x)}}),[l,o,n.readerType,c,a]),u.useEffect((function(){setTimeout((function(){h(i)}),0)}),[i]),d.jsx(f,{ref:l,sx:{display:"flex",flexDirection:"column",justifyContent:"center",width:"auto",height:"auto"},onClick:function(e){e.clientX>window.innerWidth/2?y():m()},children:d.jsx(J,{index:o,onImageLoad:function(){},src:t[o].src,settings:n},o)})}var de=u.forwardRef((function(e,t){var n=e.image1src,r=e.image2src,i=e.index,o=e.onImageLoad,a=e.settings,u=Q(a),c=s(s({},u),{},{width:a.fitPageToWindow?u.width:"calc(".concat(u.width," * 0.5)"),minWidth:a.fitPageToWindow&&a.scalePage?"calc(".concat(u.minWidth," * 0.5)"):u.minWidth,maxWidth:a.fitPageToWindow?"calc(".concat(u.maxWidth," * 0.5)"):u.maxWidth}),l=s(s({},c),{},{height:"100vh",width:"50%",backgroundColor:"#525252"});return d.jsxs(f,{ref:t,sx:{display:"flex",flexDirection:"DoubleLTR"===a.readerType?"row":"row-reverse",justifyContent:"center",width:"100%"},children:[d.jsx(re,{src:n,onImageLoad:o,alt:"Page #".concat(i),spinnerStyle:l,imgStyle:s(s({},c),{},{objectPosition:"DoubleLTR"===a.readerType?h("right","left"):h("left","right")})}),d.jsx(re,{src:r,onImageLoad:o,alt:"Page #".concat(i+1),spinnerStyle:s(s({},l),{},{width:"calc(50% - 5px)",marginLeft:"5px"}),imgStyle:s(s({},c),{},{objectPosition:"DoubleLTR"===a.readerType?h("left","right"):h("right","left")})})]})})),fe=function(e,t,n){if(t[e]||t[e+1])return!0;if(e===t.length-1)return!0;var r=e-(t.lastIndexOf(!0,e-1)+1);return n?r%2==0:r%2==1};function pe(e){var t=e.pages,n=e.settings,a=e.setCurPage,c=e.initialPage,s=e.curPage,l=e.chapter,h=e.nextChapter,g=e.prevChapter,v=u.useRef(null),m=o(u.useState(Array(t.length).fill(!1)),2),y=m[0],x=m[1],w=o(u.useState(Array(t.length).fill(!1)),2),b=w[0],C=w[1];function j(){var e=1;if(s<t.length&&b[s]&&(e=1,y[s]))return e;if(s+1<t.length&&b[s+1]){if(fe(s,y,n.offsetFirstPage))return e;e=2}return e}function E(){if(s<t.length-1){var e=s+j();a(e>=t.length?t.length-1:e)}else n.loadNextOnEnding&&h()}function L(){if(s>0){var e=s-(fe(s-2,y,n.offsetFirstPage)?1:2);a(e<0?0:e)}else g()}function P(){"DoubleLTR"===n.readerType?L():E()}function k(){"DoubleLTR"===n.readerType?E():L()}function R(e){switch(e.key){case"Space":e.preventDefault(),E();break;case"ArrowRight":k();break;case"ArrowLeft":P()}}return u.useEffect((function(){return document.addEventListener("keydown",R),function(){document.removeEventListener("keydown",R)}}),[v,s,n.readerType,g,h,b,y]),u.useEffect((function(){a(c)}),[c]),u.useEffect((function(){n.offsetFirstPage?2===j()&&a(s+1):s>0&&!fe(s-1,y,n.offsetFirstPage)&&a(s-1)}),[n.offsetFirstPage]),u.useEffect((function(){var e=t.map((function(e){return[e.index,p.requestImage(e.src)]}));return e.forEach(function(){var e,t=(e=r().mark((function e(t){var n,i,a,u,c;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o(t,2),i=n[0],a=n[1],e.prev=1,e.next=4,a.response;case 4:u=e.sent,(c=new Image).onload=function(){URL.revokeObjectURL(u),C((function(e){return e.toSpliced(i,1,!0)})),x((function(e){return e.toSpliced(i,1,(t=c).height/t.width<1);var t}))},c.src=u,e.next=12;break;case 10:e.prev=10,e.t0=e.catch(1);case 12:case"end":return e.stop()}}),e,null,[[1,10]])})),function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function u(e){i(a,r,o,u,c,"next",e)}function c(e){i(a,r,o,u,c,"throw",e)}u(void 0)}))});return function(e){return t.apply(this,arguments)}}()),function(){e.forEach((function(e){var t=o(e,2),n=t[0];return t[1].abortRequest(new Error("DoublePagedPager::preload(".concat(n,"): chapter changed")))}))}}),[l.id]),d.jsx(f,{ref:v,onClick:function(e){e.clientX>window.innerWidth/2?k():P()},children:d.jsx(f,{id:"display",sx:{display:"flex",flexDirection:"DoubleLTR"===n.readerType?"row":"row-reverse",justifyContent:"center",width:"auto",height:"auto"},children:2===j()?d.jsx(de,{index:s,image1src:t[s].src,image2src:t[s+1].src,settings:n},s):d.jsx(J,{index:s,src:t[s].src,onImageLoad:function(){},settings:n},s)})})}var he=function(){return window.innerHeight+window.scrollY>=document.body.offsetHeight-5};function ge(e){var t=e.pages,n=e.settings,r=e.setCurPage,i=e.initialPage,o=e.nextChapter,a=e.prevChapter,s=u.useRef(i),l=u.useRef(null),p=u.useRef([]);u.useEffect((function(){var e=!1,i=function(){if(l.current)if(he()){if(e)return;e=!0,s.current=t.length-1,r(s.current),n.loadNextOnEnding&&o()}else{e=!1;var i=function(e){for(var t=0;t<e.children.length;t++){var n=e.children.item(t);if(n){var r=n.getBoundingClientRect(),i=r.top,o=r.bottom;if(i<=window.innerHeight&&o>1)return t}}return-1}(l.current);i!==s.current&&(s.current=i,r(i))}};return window.addEventListener("scroll",i),function(){window.removeEventListener("scroll",i)}}),[n.loadNextOnEnding,o]);var h=u.useRef(0),g=u.useRef(!1);function v(e){g.current=!0,window.scrollBy(0,h.current-e.pageY)}function m(e){var t;h.current=e.pageY,null===(t=l.current)||void 0===t||t.addEventListener("mousemove",v)}function y(){var e;null===(e=l.current)||void 0===e||e.removeEventListener("mousemove",v)}u.useEffect((function(){var e,t;return null===(e=l.current)||void 0===e||e.addEventListener("mousedown",m),null===(t=l.current)||void 0===t||t.addEventListener("mouseup",y),function(){var e,t;null===(e=l.current)||void 0===e||e.removeEventListener("mousedown",m),null===(t=l.current)||void 0===t||t.removeEventListener("mouseup",y)}}),[l]);var x=u.useCallback((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.95;"down"===e&&he()?o():"up"===e&&window.scrollY<=0?a():window.scroll({top:window.scrollY+window.innerHeight*t*("up"===e?-1:1),behavior:"smooth"})}),[o,a]);return u.useEffect((function(){var e=function(e){switch(e.key){case"Space":case"ArrowRight":e.preventDefault(),x(e.shiftKey?"up":"down");break;case"ArrowDown":e.preventDefault(),x(e.shiftKey?"up":"down",.25);break;case"ArrowUp":e.preventDefault(),x(e.shiftKey?"down":"up",.25);break;case"ArrowLeft":e.preventDefault(),x(e.shiftKey?"down":"up")}};return document.addEventListener("keydown",e,!1),function(){document.removeEventListener("keydown",e)}}),[x]),c(p.current[i],u.useCallback((function(e,t){var n=p.current[i];null!=n&&n.offsetHeight&&(n.scrollIntoView(),t.disconnect())}),[p.current[i],i])),d.jsx(f,{ref:l,sx:{display:"flex",flexDirection:"column",justifyContent:"center",width:"auto",height:"auto",userSelect:"none"},onClick:function(e){g.current?g.current=!1:x(e.clientX>window.innerWidth/2?"down":"up")},children:t.map((function(e){return d.jsx(J,{index:e.index,src:e.src,onImageLoad:function(){},settings:n,ref:function(t){p.current[e.index]=t}},e.index)}))})}var ve={},me=v;Object.defineProperty(ve,"__esModule",{value:!0});var ye=ve.default=void 0,xe=me(g()),we=d;ye=ve.default=(0,xe.default)((0,we.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");var be={},Ce=v;Object.defineProperty(be,"__esModule",{value:!0});var je=be.default=void 0,Ee=Ce(g()),Le=d;je=be.default=(0,Ee.default)((0,Le.jsx)("path",{d:"M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6z"}),"KeyboardArrowLeft");var Pe={},ke=v;Object.defineProperty(Pe,"__esModule",{value:!0});var Re=Pe.default=void 0,Se=ke(g()),Oe=d;Re=Pe.default=(0,Se.default)((0,Oe.jsx)("path",{d:"M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z"}),"KeyboardArrowRight");var Te={},De=v;Object.defineProperty(Te,"__esModule",{value:!0});var _e=Te.default=void 0,Ne=De(g()),Ie=d;_e=Te.default=(0,Ne.default)((0,Ie.jsx)("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"}),"KeyboardArrowDown");var Ae={},We=v;Object.defineProperty(Ae,"__esModule",{value:!0});var Me=Ae.default=void 0,ze=We(g()),He=d;Me=Ae.default=(0,ze.default)((0,He.jsx)("path",{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"}),"KeyboardArrowUp");var Fe={entering:{transform:"none"},entered:{transform:"none"}},Ve=u.forwardRef((function(e,n){var r=m(),i={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},o=e.addEndListener,a=e.appear,c=void 0===a||a,l=e.children,f=e.easing,p=e.in,h=e.onEnter,g=e.onEntered,v=e.onEntering,j=e.onExit,E=e.onExited,L=e.onExiting,P=e.style,k=e.timeout,R=void 0===k?i:k,S=e.TransitionComponent,O=void 0===S?w:S,T=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.includes(n)||{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,t),D=u.useRef(null),_=y(D,x(l),n),N=function(e){return function(t){if(e){var n=D.current;void 0===t?e(n):e(n,t)}}},I=N(v),A=N((function(e,t){b(e);var n=C({style:P,timeout:R,easing:f},{mode:"enter"});e.style.webkitTransition=r.transitions.create("transform",n),e.style.transition=r.transitions.create("transform",n),h&&h(e,t)})),W=N(g),M=N(L),z=N((function(e){var t=C({style:P,timeout:R,easing:f},{mode:"exit"});e.style.webkitTransition=r.transitions.create("transform",t),e.style.transition=r.transitions.create("transform",t),j&&j(e)})),H=N(E);return d.jsx(O,s(s({appear:c,in:p,nodeRef:D,onEnter:A,onEntered:W,onEntering:I,onExit:z,onExited:H,onExiting:M,addEndListener:function(e){o&&o(D.current,e)},timeout:R},T),{},{children:function(e,t){return u.cloneElement(l,s({style:s(s(s({transform:"scale(0)",visibility:"exited"!==e||p?void 0:"hidden"},Fe[e]),P),l.props.style),ref:_},t))}}))})),Xe=j("div")({zIndex:10}),Ge=j("div")((function(e){var t=e.theme;return{position:"fixed",top:0,left:0,minWidth:"240px",maxWidth:"400px",height:"100vh",overflowY:"auto",backgroundColor:t.palette.background.default,"& header":{backgroundColor:t.palette.action.hover,display:"flex",alignItems:"center",padding:"".concat(t.spacing(1)," ").concat(t.spacing(3)),transition:"left 2s ease"}}})),Be=j("div")((function(e){var t=e.theme;return{margin:"0 ".concat(t.spacing(2))}})),Ye=j("div")({display:"flex",flexWrap:"wrap",alignContent:"center",alignItems:"center",justifyContent:"center"}),qe=j("div")((function(e){var t=e.theme;return{display:"grid",gridTemplateRows:"auto auto auto",gridTemplateColumns:"0fr 1fr 0fr",gridTemplateAreas:'"pre current next"',gridColumnGap:t.spacing(.5),margin:"".concat(t.spacing(1)," 0"),"& a":{textDecoration:"none",color:"inherit",display:"flex",flexWrap:"wrap",alignContent:"center"}}}));function Ke(e){var t,n=E().t,r=L().setReaderNavBarWidth,i=m(),a=P(),l=null!==(t=k().state)&&void 0!==t?t:{},f=l.prevDrawerOpen,p=l.prevSettingsCollapseOpen,g=u.useRef(null);c(g,u.useCallback((function(){var e;void 0!==(null===(e=g.current)||void 0===e?void 0:e.offsetWidth)&&r(g.current.offsetWidth)}),[g.current])),u.useLayoutEffect((function(){return function(){return r(0)}}),[g]);var v=e.settings,y=e.setSettingValue,x=e.manga,w=e.chapter,b=e.chapters,C=e.curPage,j=e.scrollToPage,M=e.openNextChapter,z=e.retrievingNextChapter,H=R(),F=u.useMemo((function(){return new Set(b.map((function(e){return e.scanlator}))).size>1}),[b]),V=o(u.useState(v.staticNav||f),2),X=V[0],G=V[1],B=o(u.useState(!0),2),Y=B[0],q=B[1],K=o(u.useState(v.staticNav||f),2),$=K[0],J=K[1],Q=o(u.useState(0),2),ee=Q[0],te=Q[1],ne=o(u.useState(null==p||p),2),re=ne[0],ce=ne[1],se=z,le=function(e){G(e),J(e)},de=function(){var e=window.pageYOffset;Math.abs(e-ee)>20&&(J(e>ee),te(e))};return u.useEffect((function(){Y&&le(v.staticNav)}),[v.staticNav]),u.useEffect((function(){window.addEventListener("scroll",de);var e=document.querySelector("#root"),t=document.querySelector("#appMainContainer");return e.style.display="flex",e.style.flexDirection="column",t.style.display="none",function(){e.style.display="block",t.style.display="block",window.removeEventListener("scroll",de)}}),[de]),d.jsxs(Xe,{children:[d.jsx(S,{direction:h("right","left"),in:X,timeout:200,appear:!1,mountOnEnter:!0,unmountOnExit:!0,children:d.jsxs(Ge,{ref:g,children:[d.jsxs("header",{children:[!v.staticNav&&d.jsx(O,{title:n("reader.button.close_menu"),children:d.jsx(T,{edge:"start",color:"inherit","aria-label":"menu",onClick:function(){return le(!1)},size:"large",children:h(d.jsx(je,{}),d.jsx(Re,{}))})}),d.jsx(D,{variant:"h6",component:"h1",sx:{textOverflow:"ellipsis",overflow:"hidden",py:1,flexGrow:1},children:w.name}),d.jsx(O,{title:n("reader.button.exit"),children:d.jsx(T,{edge:"start",color:"inherit","aria-label":"menu",onClick:H,size:"large",sx:{mr:-1},children:d.jsx(ye,{})})})]}),d.jsxs(_,{ContainerComponent:"div",sx:{"& span":{fontWeight:"bold"}},children:[d.jsx(N,{primary:n("reader.settings.title.reader_settings")}),d.jsxs(T,{edge:"start",color:"inherit","aria-label":"menu",disableRipple:!0,disableFocusRipple:!0,onClick:function(){return ce(!re)},size:"large",children:[re&&d.jsx(Me,{}),!re&&d.jsx(_e,{})]})]}),d.jsx(ae,{in:re,timeout:"auto",unmountOnExit:!0,children:d.jsx(Z,{setSettingValue:function(e,t,n){q("staticNav"!==e),y(e,t,n)},staticNav:v.staticNav,showPageNumber:v.showPageNumber,loadNextOnEnding:v.loadNextOnEnding,skipDupChapters:v.skipDupChapters,fitPageToWindow:v.fitPageToWindow,scalePage:v.scalePage,readerType:v.readerType,offsetFirstPage:v.offsetFirstPage,readerWidth:v.readerWidth})}),d.jsx(I,{sx:{my:1,mx:2}}),d.jsxs(Be,{children:[d.jsxs(Ye,{children:[d.jsx("span",{children:n("reader.page_info.label.currently_on_page")}),d.jsx(ue,{size:"small",sx:{mx:.5},disabled:se||-1===w.pageCount,children:d.jsx(ie,{value:w.pageCount>-1?"".concat(C):"",displayEmpty:!0,onChange:function(e){var t=e.target.value;j(Number(t))},children:Array(Math.max(0,w.pageCount)).fill(1).map((function(e,t){return d.jsx(A,{value:t,children:t+1},"Page#".concat(t))}))})}),d.jsx("span",{children:n("reader.page_info.label.of_max_pages",{maxPages:w.pageCount})})]}),d.jsxs(qe,{children:[d.jsx(O,{title:n("reader.button.previous_chapter"),children:d.jsx(T,{sx:{gridArea:"pre"},disabled:se||w.sourceOrder<=1,onClick:function(){return M(U.PREV)},children:h(d.jsx(je,{}),d.jsx(Re,{}))})}),d.jsx(ue,{sx:{gridArea:"current"},size:"small",disabled:se||w.sourceOrder<1,children:d.jsx(ie,{value:w.sourceOrder>=1?"".concat(w.sourceOrder):"",displayEmpty:!0,onChange:function(e){var t=e.target.value;a("/manga/".concat(x.id,"/chapter/").concat(t),{replace:!0,state:{prevDrawerOpen:X,prevSettingsCollapseOpen:re}})},children:b.map((function(e){var t=e.id,n=e.sourceOrder,r=e.name,i=e.chapterNumber,o=e.scanlator;return d.jsx(A,{value:n,children:"#".concat(i).concat(F&&null!=o?" (".concat(o,")"):""," | ").concat(r)},t)}))})}),d.jsx(O,{title:n("reader.button.next_chapter"),children:d.jsx(T,{sx:{gridArea:"next"},disabled:se||w.sourceOrder<1||w.sourceOrder>=x.chapters.totalCount,onClick:function(){return M(U.NEXT)},children:h(d.jsx(Re,{}),d.jsx(je,{}))})})]})]})]})}),d.jsx(Ve,{in:!X,children:d.jsx(W,{in:!$,children:d.jsx(O,{title:n("reader.button.open_menu"),children:d.jsx(oe,{sx:s({position:"fixed",top:20,left:20,backgroundColor:"rgba(255, 255, 255, 0.75);",color:"black"},i.applyStyles("dark",{backgroundColor:"rgba(0, 0, 0, 0.75);",color:"white"})),size:"large",variant:"contained",onClick:function(){return le(!0)},children:h(d.jsx(Re,{}),d.jsx(je,{}))})})})})]})}var Ue=function(e){return $.getFromCache(e,q,"CHAPTER_READER_FIELDS")},$e=function(e){switch(e){case"ContinuesVertical":case"Webtoon":default:return ge;case"SingleVertical":case"SingleRTL":case"SingleLTR":return le;case"DoubleVertical":case"DoubleRTL":case"DoubleLTR":return pe;case"ContinuesHorizontalLTR":case"ContinuesHorizontalRTL":return a}},Je=function(e){return Array.from({length:e},(function(e,t){return t}))},Qe={pageCount:-1,sourceOrder:-1,chapterCount:0,lastPageRead:0,name:"Loading...",manga:{id:-1}}}}}))}();
