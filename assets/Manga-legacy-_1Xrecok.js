!function(){var e=["children"];function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function n(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */n=function(){return r};var e,r={},o=Object.prototype,a=o.hasOwnProperty,i=Object.defineProperty||function(e,t,n){e[t]=n.value},l="function"==typeof Symbol?Symbol:{},c=l.iterator||"@@iterator",u=l.asyncIterator||"@@asyncIterator",s=l.toStringTag||"@@toStringTag";function d(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch(e){d=function(e,t,n){return e[t]=n}}function f(e,t,n,r){var o=t&&t.prototype instanceof y?t:y,a=Object.create(o.prototype),l=new D(r||[]);return i(a,"_invoke",{value:I(e,n,l)}),a}function h(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}r.wrap=f;var p="suspendedStart",g="suspendedYield",m="executing",v="completed",b={};function y(){}function x(){}function j(){}var w={};d(w,c,(function(){return this}));var k=Object.getPrototypeOf,C=k&&k(k(N([])));C&&C!==o&&a.call(C,c)&&(w=C);var _=j.prototype=y.prototype=Object.create(w);function S(e){["next","throw","return"].forEach((function(t){d(e,t,(function(e){return this._invoke(t,e)}))}))}function O(e,n){function r(o,i,l,c){var u=h(e[o],e,i);if("throw"!==u.type){var s=u.arg,d=s.value;return d&&"object"==t(d)&&a.call(d,"__await")?n.resolve(d.__await).then((function(e){r("next",e,l,c)}),(function(e){r("throw",e,l,c)})):n.resolve(d).then((function(e){s.value=e,l(s)}),(function(e){return r("throw",e,l,c)}))}c(u.arg)}var o;i(this,"_invoke",{value:function(e,t){function a(){return new n((function(n,o){r(e,t,n,o)}))}return o=o?o.then(a,a):a()}})}function I(t,n,r){var o=p;return function(a,i){if(o===m)throw Error("Generator is already running");if(o===v){if("throw"===a)throw i;return{value:e,done:!0}}for(r.method=a,r.arg=i;;){var l=r.delegate;if(l){var c=L(l,r);if(c){if(c===b)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===p)throw o=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=m;var u=h(t,n,r);if("normal"===u.type){if(o=r.done?v:g,u.arg===b)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(o=v,r.method="throw",r.arg=u.arg)}}}function L(t,n){var r=n.method,o=t.iterator[r];if(o===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,L(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),b;var a=h(o,t.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,b;var i=a.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,b):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,b)}function M(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function D(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(M,this),this.reset(!0)}function N(n){if(n||""===n){var r=n[c];if(r)return r.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var o=-1,i=function t(){for(;++o<n.length;)if(a.call(n,o))return t.value=n[o],t.done=!1,t;return t.value=e,t.done=!0,t};return i.next=i}}throw new TypeError(t(n)+" is not iterable")}return x.prototype=j,i(_,"constructor",{value:j,configurable:!0}),i(j,"constructor",{value:x,configurable:!0}),x.displayName=d(j,s,"GeneratorFunction"),r.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===x||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,j):(e.__proto__=j,d(e,s,"GeneratorFunction")),e.prototype=Object.create(_),e},r.awrap=function(e){return{__await:e}},S(O.prototype),d(O.prototype,u,(function(){return this})),r.AsyncIterator=O,r.async=function(e,t,n,o,a){void 0===a&&(a=Promise);var i=new O(f(e,t,n,o),a);return r.isGeneratorFunction(t)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},S(_),d(_,s,"Generator"),d(_,c,(function(){return this})),d(_,"toString",(function(){return"[object Generator]"})),r.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},r.values=N,D.prototype={constructor:D,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var n in this)"t"===n.charAt(0)&&a.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(r,o){return l.type="throw",l.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],l=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=a.call(i,"catchLoc"),u=a.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,b):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),b},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),P(n),b}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;P(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:N(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),b}},r}function r(e,t,n,r,o,a,i){try{var l=e[a](i),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var i=e.apply(t,n);function l(e){r(i,o,a,l,c,"next",e)}function c(e){r(i,o,a,l,c,"throw",e)}l(void 0)}))}}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,l=[],c=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(e,t)||l(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){if(e){if("string"==typeof e)return c(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return(t=h(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,h(r.key),r)}}function h(e){var n=function(e,n){if("object"!=t(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,n||"default");if("object"!=t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"==t(n)?n:n+""}System.register(["./index-legacy-D4RKJjfN.js","./index-legacy-t67-Z3Gf.js","./useManageMangaLibraryState-legacy-WGp3vsYK.js","./DownloadStateIndicator-legacy-DAoVDaGB.js","./Delete-legacy-CnKc8Hx5.js","./Chapters-legacy-C8fv8zL9.js","./TypographyMaxLines-legacy-MWhha0vP.js","./Checkbox-legacy-BqI0q20k.js","./PlayArrow-legacy-Ct59-__H.js","./StyledFab-legacy-C4GanxNd.js","./FilterList-legacy-D8XAKtFZ.js","./SortRadioInput-legacy-VmnKPKW6.js","./ThreeStateCheckboxInput-legacy-nlcYA1yW.js","./SelectionFAB-legacy-BRKXkhdL.js","./ListPreference-legacy-BUZmUMo_.js","./Mangas-legacy-SCO5wXBr.js","./Strings-legacy-DhR7dDdc.js","./Favorite-legacy-B6WlRsy4.js","./SpinnerImage-legacy-C6fk_dBr.js","./Sync-legacy-C9CiSACx.js","./Trackers-legacy-CN_LuGVd.js","./Link-legacy-tmv7_Xfn.js","./Avatar-legacy-MPnORtl2.js","./Info-legacy-D21R-tYS.js","./TextField-legacy-BVRujXcw.js","./InputAdornment-legacy-krMyNwhM.js","./Collapse-legacy-CK318yRC.js","./NumberSetting-legacy-CiPlldyo.js","./useMobilePicker-legacy-BmjPkH7n.js","./Chip-legacy-DFVHaQw-.js","./SelectSetting-legacy-BtBaF02t.js","./Select-legacy-BpIMiUG-.js","./CheckboxInput-legacy-DjnV5l0a.js","./SwitchBase-legacy-iPfm1lGv.js","./Tabs-legacy-B_Q5PODU.js"],(function(t,r){"use strict";var l,c,u,h,p,g,m,v,b,y,x,j,w,k,C,_,S,O,I,L,M,P,D,N,R,E,T,B,A,F,z,G,W,V,H,U,q,Y,J,K,Q,$,Z,X,ee,te,ne,re,oe,ae,ie,le,ce,ue,se,de,fe,he,pe,ge,me,ve,be,ye,xe,je,we,ke,Ce,_e,Se,Oe,Ie,Le,Me,Pe,De,Ne,Re,Ee,Te,Be,Ae,Fe,ze,Ge,We,Ve,He,Ue,qe,Ye,Je;return{setters:[function(e){l=e.r,c=e.i,u=e.j,h=e.u,p=e.q,g=e.c,m=e.w,v=e.h,b=e.x,y=e.P,x=e.S,j=e.L,w=e.T,k=e.y,C=e.f,_=e.I,S=e.z,O=e.A,I=e.C,L=e.D,M=e.s,P=e.a,D=e.F,N=e.g,R=e.E,E=e.H,T=e.B,B=e.J,A=e.b,F=e.e,z=e.G,G=e.K,W=e.O,V=e.m,H=e.Q,U=e.R,q=e.U,Y=e.V,J=e.W,K=e.X,Q=e.N,$=e.Y,Z=e.Z,X=e._,ee=e.$},function(e){te=e.C,ne=e.a,re=e.V},function(e){oe=e.M,ae=e.d,ie=e.a,le=e.b,ce=e.c,ue=e.e,se=e.f,de=e.J,fe=e.g,he=e.h,pe=e.u,ge=e.C,me=e.T,ve=e.i,be=e.j,ye=e.k,xe=e.l,je=e.m,we=e.n},function(e){ke=e.D},function(e){Ce=e.d},function(e){_e=e.C,Se=e.a},function(e){Oe=e.C,Ie=e.T},function(e){Le=e.C},function(e){Me=e.d},function(e){Pe=e.S,De=e.D},function(e){Ne=e.d},function(e){Re=e.S,Ee=e.R},function(e){Te=e.T},function(e){Be=e.O,Ae=e.a,Fe=e.S,ze=e.d},function(e){Ge=e.R},function(e){We=e.M},function(e){Ve=e.b},function(e){He=e.d},function(e){Ue=e.S},function(e){qe=e.d},function(e){Ye=e.T},function(e){Je=e.L},null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var r={},Ke=c;Object.defineProperty(r,"__esModule",{value:!0});var Qe=r.default=void 0,$e=Ke(l()),Ze=u;Qe=r.default=(0,$e.default)((0,Ze.jsx)("path",{d:"M1 21h22L12 2zm12-3h-2v-2h2zm0-4h-2v-4h2z"}),"Warning");var Xe={},et=c;Object.defineProperty(Xe,"__esModule",{value:!0});var tt=Xe.default=void 0,nt=et(l()),rt=u;tt=Xe.default=(0,nt.default)((0,rt.jsx)("path",{d:"m18 7-1.41-1.41-6.34 6.34 1.41 1.41zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12zM.41 13.41 6 19l1.41-1.41L1.83 12z"}),"DoneAll");var ot={},at=c;Object.defineProperty(ot,"__esModule",{value:!0});var it=ot.default=void 0,lt=at(l()),ct=u;it=ot.default=(0,lt.default)((0,ct.jsx)("path",{d:"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2"}),"Bookmark");var ut={},st=c;Object.defineProperty(ut,"__esModule",{value:!0});var dt=ut.default=void 0,ft=st(l()),ht=u;dt=ut.default=(0,ft.default)((0,ht.jsx)("path",{d:"M21 7h-6V5h6zm-2 3.9c-.32.07-.66.1-1 .1-2.76 0-5-2.24-5-5 0-1.13.37-2.16 1-3H7c-1.1 0-2 .9-2 2v16l7-3 7 3z"}),"BookmarkRemove");var pt={},gt=c;Object.defineProperty(pt,"__esModule",{value:!0});var mt=pt.default=void 0,vt=gt(l()),bt=u;mt=pt.default=(0,vt.default)((0,bt.jsx)("path",{d:"M21 7h-2v2h-2V7h-2V5h2V3h2v2h2zm-2 14-7-3-7 3V5c0-1.1.9-2 2-2h7c-.63.84-1 1.87-1 3 0 2.76 2.24 5 5 5 .34 0 .68-.03 1-.1z"}),"BookmarkAdd");var yt={},xt=c;Object.defineProperty(yt,"__esModule",{value:!0});var jt=yt.default=void 0,wt=xt(l()),kt=u;jt=yt.default=(0,wt.default)((0,kt.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39"}),"Public");var Ct=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return function(e,t,n){return t&&f(e.prototype,t),n&&f(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}(e,null,[{key:"getChapters",value:function(e){return e.map((function(e){return e.chapter}))}},{key:"getIds",value:function(t){return _e.getIds(e.getChapters(t))}},{key:"getDownloaded",value:function(e){return e.filter((function(e){var t=e.chapter;return _e.isDownloaded(t)}))}},{key:"getDeletable",value:function(e,t){return e.filter((function(e){var n=e.chapter;return _e.isDeletable(n,t)}))}},{key:"getNonDownloaded",value:function(e){return e.filter((function(e){var t=e.chapter;return!_e.isDownloaded(t)}))}},{key:"getDownloadable",value:function(e){return e.filter((function(e){var t=e.chapter,n=e.downloadChapter;return!_e.isDownloaded(t)&&!n}))}},{key:"getBookmarked",value:function(e){return e.filter((function(e){var t=e.chapter;return _e.isBookmarked(t)}))}},{key:"getNonBookmarked",value:function(e){return e.filter((function(e){var t=e.chapter;return!_e.isBookmarked(t)}))}},{key:"getRead",value:function(e){return e.filter((function(e){var t=e.chapter;return _e.isRead(t)}))}},{key:"getNonRead",value:function(e){return e.filter((function(e){var t=e.chapter;return!_e.isRead(t)}))}}])}(),_t=function(e){var t=e.chapter,n=e.allChapters,r=e.handleSelection,o=e.canBeDownloaded,a=void 0!==o&&o,i=e.selectedChapters,l=void 0===i?[]:i,c=e.onClose,s=h().t,d=!!t,f=null!=t?t:{},b=f.isDownloaded,y=f.isRead,x=f.isBookmarked,j=p().settings.deleteChaptersWithBookmark,w=ce(d,Se),k=ue(d),C=se(d),_=g.useMemo((function(){return{downloadableChapters:Ct.getDownloadable(l),downloadedChapters:Ct.getDownloaded(l),unbookmarkedChapters:Ct.getNonBookmarked(l),bookmarkedChapters:Ct.getBookmarked(l),unreadChapters:Ct.getNonRead(l),readChapters:Ct.getRead(l)}}),[l]),S=_.downloadableChapters,O=_.downloadedChapters,I=_.unbookmarkedChapters,L=_.bookmarkedChapters,M=_.unreadChapters,P=_.readChapters,D=function(e,r){var o,a="mark_prev_as_read"===e,i=a?"mark_as_read":e;if("delete"===i&&t&&!_e.isDeletable(t,j))return void c();var l=function(){if(!t)return Ct.getChapters(r);if(!a)return[t];var e=n.findIndex((function(e){return e.id===t.id}));return e+1>n.length-1?[]:n.slice(e+1)}();l.length?(_e.performAction(i,_e.getIds(l),{chapters:l,wasManuallyMarkedAsRead:!0,trackProgressMangaId:null===(o=l[0])||void 0===o?void 0:o.mangaId}).catch(v()),c()):c()};return u.jsxs(u.Fragment,{children:[d&&u.jsx(oe,{onClick:function(){null==r||r(t.id,!0),c()},Icon:ae,title:s("chapter.action.label.select")}),d&&u.jsx(oe,{Icon:jt,disabled:!t.realUrl,onClick:function(){window.open(t.realUrl,"_blank","noopener,noreferrer"),c()},title:s("chapter.action.label.open_on_source")}),k(a)&&u.jsx(oe,{Icon:m,disabled:C(!S.length),onClick:function(){return D("download",S)},title:w("download",S.length)}),k(b)&&u.jsx(oe,{Icon:Ce,disabled:C(!O.length),onClick:function(){return D("delete",Ct.getDeletable(O,j))},title:w("delete",O.length)}),k(!x)&&u.jsx(oe,{Icon:mt,disabled:C(!I.length),onClick:function(){return D("bookmark",I)},title:w("bookmark",I.length)}),k(x)&&u.jsx(oe,{Icon:dt,disabled:C(!L.length),onClick:function(){return D("unbookmark",L)},title:w("unbookmark",L.length)}),k(!y)&&u.jsx(oe,{Icon:ie,disabled:C(!M.length),onClick:function(){return D("mark_as_read",M)},title:w("mark_as_read",M.length)}),k(y)&&u.jsx(oe,{Icon:le,disabled:C(!P.length),onClick:function(){return D("mark_as_unread",P)},title:w("mark_as_unread",P.length)}),d&&u.jsx(oe,{onClick:function(){return D("mark_prev_as_read",[])},Icon:tt,title:s("chapter.action.mark_as_read.add.label.action.previous")})]})},St=function(e){var t=h().t,n=b(),r=g.useRef(null),o=e.chapter,a=e.allChapters,i=e.downloadChapter,l=e.showChapterNumber,c=e.onSelect,d=e.selected,f=null!==d,p=o.isDownloaded,m=function(e){f&&(e.preventDefault(),e.stopPropagation(),c(!d,e.shiftKey))},v=function(e,t){e.stopPropagation(),e.preventDefault(),t(e)},I=de((function(e,t){var n=t.context;f||!r.current?(e.shiftKey=!0,m(e)):v(e,(function(){return null==n?void 0:n(r.current)}))}));return u.jsx("li",{children:u.jsx(y,{variant:"popover",popupId:"chapter-card-action-menu",children:function(e){var h;return u.jsxs(x,{sx:{pt:1,px:1},children:[u.jsx(te,{sx:{touchCallout:"none"},children:u.jsx(ne,s(s({component:j,to:"/manga/".concat(o.mangaId,"/chapter/").concat(o.sourceOrder),style:{color:n.palette.text[o.isRead?"disabled":"primary"]},onClick:function(e){return m(e)}},I(e.open)),{},{children:u.jsxs(Oe,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:2,"&:last-child":{pb:2}},children:[u.jsxs(x,{direction:"column",flex:1,children:[u.jsxs(x,{sx:{flexDirection:"row",gap:.5,alignItems:"center"},children:[o.isBookmarked&&u.jsx(it,{color:"primary"}),u.jsx(Ie,{variant:"h5",component:"h2",children:l?"".concat(t("chapter.title_one")," ").concat(o.chapterNumber):o.name})]}),u.jsx(w,{variant:"caption",children:o.scanlator}),u.jsxs(w,{variant:"caption",children:[k(Number(null!==(h=o.uploadDate)&&void 0!==h?h:0),!0),p&&" • ".concat(t("chapter.status.label.downloaded"))]})]}),i&&u.jsx(ke,{download:i}),u.jsx(x,{sx:{minHeight:"48px"},children:null===d?u.jsx(C,{title:t("global.button.options"),children:u.jsx(_,s(s({ref:r},S(e)),{},{onClick:function(t){return v(t,e.open)},onTouchStart:function(t){return v(t,e.open)},"aria-label":"more",size:"large",children:u.jsx(fe,{})}))}):u.jsx(C,{title:t(d?"global.button.deselect":"global.button.select"),children:u.jsx(Le,{checked:d})})})]})}))}),!f&&e.isOpen&&u.jsx(he,s(s({},O(e)),{},{children:function(e){return u.jsx(_t,{onClose:e,chapter:o,allChapters:a,handleSelection:function(){return c(!0)},canBeDownloaded:!o.isDownloaded&&!i})}}))]})}})})};function Ot(e){var t=h().t,n=e.chapterIndex,r=e.mangaId;return u.jsxs(Pe,{component:j,variant:"extended",color:"primary",to:"/manga/".concat(r,"/chapter/").concat(n),children:[u.jsx(Me,{}),t(1===n?"global.button.start":"global.button.resume")]})}var It={active:!1,unread:void 0,downloaded:void 0,bookmarked:void 0,reverse:!0,sortBy:"source",showChapterNumber:!1};function Lt(e,t){switch(t.type){case"filter":return s(s({},e),{},d({active:!1!==e.unread&&!1!==e.downloaded&&!1!==e.bookmarked},t.filterType,t.filterValue));case"sortBy":return s(s({},e),{},{sortBy:t.sortBy});case"sortReverse":return s(s({},e),{},{reverse:!e.reverse});case"showChapterNumber":return s(s({},e),{},{showChapterNumber:!e.showChapterNumber});default:throw Error(L("global.error.label.invalid_action"))}}function Mt(e,t){return function(e,t){var n=t.sortBy,r=t.reverse,o=i(e);switch(n){case"source":o.sort((function(e,t){return e.sourceOrder-t.sourceOrder}));break;case"fetchedAt":o.sort((function(e,t){var n,r;return Number(null!==(n=e.fetchedAt)&&void 0!==n?n:0)-Number(null!==(r=t.fetchedAt)&&void 0!==r?r:0)}));break;case"chapterNumber":o.sort((function(e,t){return e.chapterNumber-t.chapterNumber}));break;case"uploadedAt":o.sort((function(e,t){var n,r;return Number(null!==(n=e.uploadDate)&&void 0!==n?n:0)-Number(null!==(r=t.uploadDate)&&void 0!==r?r:0)}))}return r&&o.reverse(),o}(t.active?e.filter((function(e){return function(e,t){var n=t.isRead;switch(e){case!0:return!n;case!1:return n;default:return!0}}(t.unread,e)&&function(e,t){var n=t.isDownloaded;switch(e){case!0:return n;case!1:return!n;default:return!0}}(t.downloaded,e)&&function(e,t){var n=t.isBookmarked;switch(e){case!0:return n;case!1:return!n;default:return!0}}(t.bookmarked,e)})):i(e),t)}var Pt={source:"global.sort.label.by_source",chapterNumber:"global.sort.label.by_chapter_number",uploadedAt:"global.sort.label.by_upload_date",fetchedAt:"global.sort.label.by_fetch_date"},Dt={filter:"global.label.filter",sort:"global.label.sort",display:"global.label.display"},Nt=function(e){var t=e.open,n=e.onClose,r=e.options,o=e.optionsDispatch,i=h().t;return u.jsx(Be,{open:t,onClose:n,minHeight:150,tabs:["filter","sort","display"],tabTitle:function(e){return i(Dt[e])},tabContent:function(e){return"filter"===e?u.jsxs(u.Fragment,{children:[u.jsx(Te,{label:i("global.filter.label.unread"),checked:r.unread,onChange:function(e){return o({type:"filter",filterType:"unread",filterValue:e})}}),u.jsx(Te,{label:i("global.filter.label.downloaded"),checked:r.downloaded,onChange:function(e){return o({type:"filter",filterType:"downloaded",filterValue:e})}}),u.jsx(Te,{label:i("global.filter.label.bookmarked"),checked:r.bookmarked,onChange:function(e){return o({type:"filter",filterType:"bookmarked",filterValue:e})}})]}):"sort"===e?Object.entries(Pt).map((function(e){var t=a(e,2),n=t[0],l=t[1];return u.jsx(Re,{label:i(l),checked:r.sortBy===n,sortDescending:r.reverse,onClick:function(){return n!==r.sortBy?o({type:"sortBy",sortBy:n}):o({type:"sortReverse"})}},n)})):"display"===e?u.jsxs(Ge,{onChange:function(){return o({type:"showChapterNumber"})},value:r.showChapterNumber,children:[u.jsx(Ee,{label:i("chapter.option.display.label.source_title"),value:!1}),u.jsx(Ee,{label:i("chapter.option.display.label.chapter_number"),value:!0})]}):null}})},Rt=function(e){var t=e.options,n=e.optionsDispatch,r=h().t,o=a(g.useState(!1),2),i=o[0],l=o[1],c=function(e){var t=e.unread,n=e.downloaded,r=e.bookmarked;return null!=t||null!=n||null!=r}(t);return u.jsxs(u.Fragment,{children:[u.jsx(C,{title:r("settings.title"),children:u.jsx(_,{onClick:function(){return l(!0)},children:u.jsx(Ne,{color:c?"warning":void 0})})}),u.jsx(Nt,{open:i,onClose:function(){return l(!1)},options:t,optionsDispatch:n})]})},Et=M(x)((function(e){return d({margin:8,marginBottom:0,marginRight:"10px",minHeight:40},e.theme.breakpoints.down("md"),{marginRight:0})})),Tt=M(re)((function(e){return d({listStyle:"none",padding:0,minHeight:"200px"},e.theme.breakpoints.up("md"),{width:"50vw",height:"calc(100vh - 64px - 48px)",margin:0})})),Bt=function(e){var t,n,r,o=e.manga,i=e.isRefreshing,l=h().t,c=P.useGetDownloadStatus().data,d=null!==(t=null==c?void 0:c.downloadStatus.queue)&&void 0!==t?t:[],f=a((r=o.id,I(Lt,"".concat(r,"filterOptions"),It)),2),p=f[0],b=f[1],j=P.useGetMangaChapters(D,o.id,{notifyOnNetworkStatusChange:!0}),k=j.data,L=j.loading,M=j.error,B=j.refetch,A=g.useMemo((function(){var e;return null!==(e=null==k?void 0:k.chapters.nodes)&&void 0!==e?e:[]}),[null==k?void 0:k.chapters.nodes]),F=g.useMemo((function(){return A.map((function(e){return e.id}))}),[A]),z=pe(A.length,{itemIds:F,currentKey:"default"}),G=z.areNoItemsSelected,W=z.areAllItemsSelected,V=z.selectedItemIds,H=z.handleSelectAll,U=z.handleSelection,q=g.useMemo((function(){return Mt(A,p)}),[A,p]),Y=null===(n=o.firstUnreadChapter)||void 0===n?void 0:n.sourceOrder,J=We.isFullyRead(o),K=We.isFullyDownloaded(o),Q=0===A.length,$=!Q&&0===q.length,Z=g.useMemo((function(){return q.map((function(e){var t=null==d?void 0:d.find((function(t){return t.chapter.id===e.id})),n=G?null:V.includes(e.id);return{chapter:e,downloadChapter:t,selected:n}}))}),[d,V,q]),X=g.useMemo((function(){var e=Z.filter((function(e){return e.selected}));return e.length?u.jsx(Ae,{selectedItemsCount:e.length,title:"chapter.title_one",children:function(t){return u.jsx(_t,{selectedChapters:e,onClose:t})}}):void 0!==Y?u.jsx(Ot,{chapterIndex:Y,mangaId:o.id}):null}),[Z]);return L||Q&&i?u.jsx(x,{sx:{justifyContent:"center",alignItems:"center",position:"relative",flexGrow:1},children:u.jsx(N,{})}):M?u.jsx(x,{sx:{justifyContent:"center",position:"relative",flexGrow:1},children:u.jsx(R,{message:l("global.error.label.failed_to_load_data"),messageExtra:M.message,retry:function(){return B().catch(v())}})}):u.jsxs(u.Fragment,{children:[u.jsxs(x,{direction:"column",sx:{position:"relative"},children:[u.jsxs(Et,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[u.jsx(w,{variant:"h5",children:"".concat(q.length," ").concat(l("chapter.title_one",{count:q.length}))}),u.jsxs(x,{direction:"row",sx:{paddingRight:"24px"},children:[u.jsx(C,{title:l("chapter.action.mark_as_read.add.label.action.current"),children:u.jsx(_,{disabled:J,onClick:function(){return _e.markAsRead(Ct.getChapters(Ct.getNonRead(Z)),!0,o.id)},children:u.jsx(tt,{})})}),u.jsx(y,{variant:"popover",popupId:"chapterlist-download-button",children:function(e){return u.jsxs(u.Fragment,{children:[u.jsx(C,{title:l("chapter.action.download.add.label.action"),children:u.jsx(_,s(s({disabled:K},S(e)),{},{children:u.jsx(m,{})}))}),e.isOpen&&u.jsx(E,s(s({},O(e)),{},{children:u.jsx(ge,{mangaIds:[o.id],closeMenu:e.close})}))]})}}),u.jsx(Rt,{options:p,optionsDispatch:b}),u.jsx(Fe,{areAllItemsSelected:W,areNoItemsSelected:G,onChange:function(e){return H(e,e?A.map((function(e){return e.id})):[])}})]})]}),Q&&u.jsx(R,{message:l("chapter.error.label.no_chapter_found")}),$&&u.jsx(R,{message:l("chapter.error.label.no_matches")}),u.jsx(Tt,{style:{height:"undefined",overflowY:window.innerWidth<900?"visible":"auto"},components:{Footer:function(){return u.jsx(T,{sx:{paddingBottom:De}})}},totalCount:q.length,itemContent:function(e){return u.jsx(St,s(s({},Z[e]),{},{allChapters:A,showChapterNumber:p.showChapterNumber,onSelect:function(t,n){return U(Z[e].chapter.id,t,{selectRange:n})}}))},useWindowScroll:window.innerWidth<900,overscan:.5*window.innerHeight})]}),X]})},At=function(t){var n=t.children,r=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||{}.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(t,e);return u.jsx(A,s(s({},r),{},{children:u.jsx(x,{direction:"row",alignItems:"center",justifyContent:"center",gap:"10px",flexWrap:"wrap",children:n})}))},Ft={},zt=c;Object.defineProperty(Ft,"__esModule",{value:!0});var Gt=Ft.default=void 0,Wt=zt(l()),Vt=u;Gt=Ft.default=(0,Wt.default)((0,Vt.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");var Ht=function(e){var t,n,r=e.manga,o=h().t,a=F(),i=P.useGetTrackerList(z),l=null!==(t=null===(n=i.data)||void 0===n?void 0:n.trackers.nodes)&&void 0!==t?t:[],c=r.trackRecords.nodes,d=Ye.getLoggedIn(l),f=Ye.getLoggedIn(Ye.getTrackers(c,l)),p=function(e){i.error?V(o("tracking.error.label.could_not_load_track_info"),"error"):d.length?e():a("/settings/trackingSettings")};return u.jsx(y,{variant:"dialog",popupId:"manga-track-modal",children:function(e){return u.jsxs(u.Fragment,{children:[u.jsxs(At,s(s({},S(e)),{},{disabled:i.loading||!!i.error,onClick:function(){return p(e.open)},onTouchStart:function(){return p(e.open)},size:"large",sx:{color:f.length?"#2196f3":"inherit"},children:[f.length?u.jsx(Gt,{}):u.jsx(qe,{}),f.length?o("manga.button.track.active",{count:f.length}):o("manga.button.track.start")]})),u.jsx(G,s(s({},W(e)),{},{maxWidth:"md",fullWidth:!0,scroll:"paper",children:u.jsx(me,{manga:r})}))]})}})},Ut=M("div")((function(e){return d({width:"100%"},e.theme.breakpoints.up("md"),{position:"sticky",top:"64px",left:"0px",width:"50vw",height:"calc(100vh - 64px)",alignSelf:"flex-start",overflowY:"auto"})})),qt=M("div")((function(){return{padding:"10px"}})),Yt=M("div")((function(){return{display:"flex"}})),Jt=M("div")((function(){return{"& img":{borderRadius:4,maxWidth:"100%",minWidth:"100%",height:"auto"},maxWidth:"50%"}})),Kt=M("div")((function(e){return d({marginLeft:15,maxWidth:"100%","& span":{fontWeight:"400"}},e.theme.breakpoints.up("lg"),{fontSize:"1.3em"})})),Qt=function(e){return u.jsx(ye,s(s({},e),{},{titleProps:{variant:"h6"},valueProps:{variant:"h6"}}))},$t=M("div")((function(e){return{display:"flex",justifyContent:"space-around","& button, a":d({borderRadius:"25px",textTransform:"none",paddingLeft:"20px",paddingRight:"20px",fontSize:"x-large"},e.theme.breakpoints.down("sm"),{fontSize:"larger"})}})),Zt=M("div")((function(e){var t=e.theme;return d(d({paddingLeft:"10px",paddingRight:"10px"},t.breakpoints.up("md"),{fontSize:"1.2em"}),t.breakpoints.up("lg"),{fontSize:"1.3em"})})),Xt=M("div")((function(){return{"& h4":{marginTop:"1em",marginBottom:0},"& p":{textAlign:"justify",textJustify:"inter-word"}}})),en=M("div")((function(){return{display:"flex",flexWrap:"wrap","& h5":{border:"2px solid #2196f3",borderRadius:"1.13em",marginRight:"1em",marginTop:0,marginBottom:"10px",padding:"0.3em",color:"#2196f3"}}})),tn=function(e){var t=e.url,n=h().t,r=g.useMemo((function(){return u.jsxs(At,{size:"large",disabled:!t,sx:{color:"inherit"},component:Je,href:null!=t?t:void 0,target:"_blank",rel:"noreferrer",children:[u.jsx(jt,{}),n("global.button.open_site")]})}),[t]);return r};function nn(e){return null!=e?e:L("global.label.unknown")}var rn=function(e){var t=e.manga,r=h().t;g.useEffect((function(){t.source||V(L("source.error.label.source_not_found"),"error")}),[t.source]);var a,i,l=ve(t),c=l.CategorySelectComponent,d=l.updateLibraryState,f=de(o(n().mark((function e(){return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.clipboard.writeText(t.title);case 3:V(r("global.label.copied"),"info"),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])}))));return u.jsxs(u.Fragment,{children:[u.jsxs(Ut,{children:[u.jsxs(qt,{children:[u.jsxs(Yt,{children:[u.jsx(Jt,{children:u.jsx(Ue,{src:We.getThumbnailUrl(t),alt:"Manga Thumbnail"})}),u.jsxs(Kt,{children:[u.jsx(w,s(s({variant:"h4",component:"h1",sx:{mb:1,"@media not (pointer: fine)":{userSelect:"none"}}},f()),{},{children:t.title})),u.jsx(Qt,{title:r("manga.label.author"),value:nn(t.author)}),u.jsx(Qt,{title:r("manga.label.artist"),value:nn(t.artist)}),u.jsx(Qt,{title:r("manga.label.status"),value:nn(t.status)}),u.jsx(Qt,{title:r("source.title_one"),value:(a=t.source,a?null!==(i=a.displayName)&&void 0!==i?i:a.id:L("global.label.unknown"))})]})]}),u.jsxs($t,{children:[u.jsxs(At,{onClick:d,size:"large",sx:{color:t.inLibrary?"#2196f3":"inherit"},children:[t.inLibrary?u.jsx(He,{}):u.jsx(be,{}),t.inLibrary?r("manga.button.in_library"):r("manga.button.add_to_library")]}),u.jsx(Ht,{manga:t}),u.jsx(tn,{url:t.realUrl})]})]}),u.jsxs(Zt,{children:[u.jsxs(Xt,{children:[u.jsx("h4",{children:r("settings.about.title")}),u.jsx("p",{style:{whiteSpace:"pre-line"},children:t.description})]}),u.jsx(en,{children:t.genre.map((function(e){return u.jsx("h5",{children:e},e)}))})]})]}),c]})},on=function(e){var t=e.manga,n=e.onRefresh,r=e.refreshing,o=h().t,i=b(),l=H(i.breakpoints.up("sm")),c=a(U.useState(null),2),s=c[0],d=c[1],f=Boolean(s),p=function(){d(null)},g=xe({mangaId:t.id}),m=g.openCategorySelect,v=g.CategorySelectComponent;return u.jsxs(u.Fragment,{children:[l&&u.jsxs(u.Fragment,{children:[u.jsx(C,{title:o("manga.label.reload_from_source"),children:u.jsx(_,{onClick:function(){n()},disabled:r,children:u.jsx(q,{})})}),t.inLibrary&&u.jsxs(u.Fragment,{children:[u.jsx(C,{title:o("global.button.migrate"),children:u.jsx(j,{to:"/migrate/source/".concat(t.sourceId,"/manga/").concat(t.id,"/search?query=").concat(t.title),state:{mangaTitle:t.title},style:{textDecoration:"none",color:"inherit"},children:u.jsx(_,{children:u.jsx(je,{})})})}),u.jsx(C,{title:o("manga.label.edit_categories"),children:u.jsx(_,{onClick:function(){m(!0)},children:u.jsx(we,{})})})]})]}),!l&&u.jsxs(u.Fragment,{children:[u.jsx(_,{id:"chaptersMenuButton","aria-controls":f?"chaptersMenu":void 0,"aria-haspopup":"true","aria-expanded":f?"true":void 0,onClick:function(e){return d(e.currentTarget)},children:u.jsx(ze,{})}),u.jsxs(E,{id:"chaptersMenu",anchorEl:s,open:f,onClose:p,MenuListProps:{"aria-labelledby":"chaptersMenuButton"},children:[u.jsxs(Y,{onClick:function(){n(),p()},disabled:r,children:[u.jsx(J,{children:u.jsx(q,{fontSize:"small"})}),u.jsx(K,{children:o("manga.label.reload_from_source")})]}),t.inLibrary&&[u.jsxs(Y,{component:j,to:"/migrate/source/".concat(t.sourceId,"/manga/").concat(t.id,"/search?query=").concat(t.title),state:{mangaTitle:t.title},style:{textDecoration:"none",color:"inherit"},children:[u.jsx(J,{children:u.jsx(je,{fontSize:"small"})}),u.jsx(K,{children:o("migrate.title")})]},"migrate"),u.jsxs(Y,{onClick:function(){m(!0),p()},children:[u.jsx(J,{children:u.jsx(we,{fontSize:"small"})}),u.jsx(K,{children:o("manga.label.edit_categories")})]},"categories")]]})]}),v]})};t("Manga",(function(){var e=h().t,t=g.useContext(Q),r=t.setTitle,i=t.setAction,l=$().id,c=g.useRef(!1),s=P.useGetManga(Z,l),d=s.data,f=s.error,p=s.loading,m=s.networkStatus,v=s.refetch,b=ee(m),y=null==d?void 0:d.manga,j=function(e){var t=a(g.useState(!1),2),r=t[0],i=t[1],l=a(g.useState(null),2),c=l[0],u=l[1];return[g.useCallback(o(n().mark((function t(){return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i(!0),u(null),t.next=4,Promise.all([P.getMangaFetch(e,{awaitRefetchQueries:!0}).response,P.getMangaChaptersFetch(e,{awaitRefetchQueries:!0}).response]).catch((function(e){e instanceof B&&"no chapters found"===Ve(e.message)||u(e)})).finally((function(){return i(!1)}));case 4:case"end":return t.stop()}}),t)}))),[e]),{loading:r,error:c}]}(l),w=a(j,2),k=w[0],S=w[1],O=S.loading,I=S.error,L=null!=f?f:I;return g.useEffect((function(){null!=y&&(!c.current&&!y.initialized&&(c.current=!0,k()))}),[y]),g.useEffect((function(){var t;return r(null!==(t=null==y?void 0:y.title)&&void 0!==t?t:e("manga.title_one")),i(null),function(){r(""),i(null)}}),[e,null==y?void 0:y.title]),g.useEffect((function(){var t;return i(u.jsxs(x,{direction:"row",alignItems:"center",children:[L&&!b&&!O&&u.jsx(C,{title:u.jsxs(u.Fragment,{children:[e("manga.error.label.request_failure"),u.jsx("br",{}),null!==(t=L.message)&&void 0!==t?t:L]}),children:u.jsx(_,{onClick:function(){return v()},children:u.jsx(Qe,{color:"error"})})}),y&&(O||b)&&u.jsx(_,{disabled:!0,children:u.jsx(X,{size:16})}),y&&u.jsx(on,{manga:y,onRefresh:k,refreshing:O})]})),function(){i(null)}}),[e,L,b,O,y,k]),L&&!y?u.jsx(R,{message:e("manga.error.label.request_failure"),messageExtra:L.message}):u.jsxs(T,{sx:{display:{md:"flex"},overflow:"hidden"},children:[p&&u.jsx(N,{}),y&&u.jsx(rn,{manga:y}),y&&u.jsx(Bt,{manga:y,isRefreshing:O})]})}))}}}))}();
