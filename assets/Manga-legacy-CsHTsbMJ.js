!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return r};var n,r={},a=Object.prototype,o=a.hasOwnProperty,i=Object.defineProperty||function(e,t,n){e[t]=n.value},l="function"==typeof Symbol?Symbol:{},c=l.iterator||"@@iterator",u=l.asyncIterator||"@@asyncIterator",s=l.toStringTag||"@@toStringTag";function d(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch(n){d=function(e,t,n){return e[t]=n}}function h(e,t,n,r){var a=t&&t.prototype instanceof y?t:y,o=Object.create(a.prototype),l=new B(r||[]);return i(o,"_invoke",{value:O(e,n,l)}),o}function f(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}r.wrap=h;var p="suspendedStart",g="suspendedYield",m="executing",v="completed",b={};function y(){}function x(){}function j(){}var k={};d(k,c,(function(){return this}));var w=Object.getPrototypeOf,C=w&&w(w(T([])));C&&C!==a&&o.call(C,c)&&(k=C);var _=j.prototype=y.prototype=Object.create(k);function S(e){["next","throw","return"].forEach((function(t){d(e,t,(function(e){return this._invoke(t,e)}))}))}function I(t,n){function r(a,i,l,c){var u=f(t[a],t,i);if("throw"!==u.type){var s=u.arg,d=s.value;return d&&"object"==e(d)&&o.call(d,"__await")?n.resolve(d.__await).then((function(e){r("next",e,l,c)}),(function(e){r("throw",e,l,c)})):n.resolve(d).then((function(e){s.value=e,l(s)}),(function(e){return r("throw",e,l,c)}))}c(u.arg)}var a;i(this,"_invoke",{value:function(e,t){function o(){return new n((function(n,a){r(e,t,n,a)}))}return a=a?a.then(o,o):o()}})}function O(e,t,r){var a=p;return function(o,i){if(a===m)throw Error("Generator is already running");if(a===v){if("throw"===o)throw i;return{value:n,done:!0}}for(r.method=o,r.arg=i;;){var l=r.delegate;if(l){var c=L(l,r);if(c){if(c===b)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===p)throw a=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=m;var u=f(e,t,r);if("normal"===u.type){if(a=r.done?v:g,u.arg===b)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(a=v,r.method="throw",r.arg=u.arg)}}}function L(e,t){var r=t.method,a=e.iterator[r];if(a===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=n,L(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),b;var o=f(a,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,b;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,b):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,b)}function M(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function D(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function B(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(M,this),this.reset(!0)}function T(t){if(t||""===t){var r=t[c];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function e(){for(;++a<t.length;)if(o.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}throw new TypeError(e(t)+" is not iterable")}return x.prototype=j,i(_,"constructor",{value:j,configurable:!0}),i(j,"constructor",{value:x,configurable:!0}),x.displayName=d(j,s,"GeneratorFunction"),r.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===x||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,j):(e.__proto__=j,d(e,s,"GeneratorFunction")),e.prototype=Object.create(_),e},r.awrap=function(e){return{__await:e}},S(I.prototype),d(I.prototype,u,(function(){return this})),r.AsyncIterator=I,r.async=function(e,t,n,a,o){void 0===o&&(o=Promise);var i=new I(h(e,t,n,a),o);return r.isGeneratorFunction(t)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},S(_),d(_,s,"Generator"),d(_,c,(function(){return this})),d(_,"toString",(function(){return"[object Generator]"})),r.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},r.values=T,B.prototype={constructor:B,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(D),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,a){return l.type="throw",l.arg=e,t.next=r,a&&(t.method="next",t.arg=n),!!a}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],l=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,b):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),b},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),D(n),b}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;D(n)}return a}}throw Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:T(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=n),b}},r}function n(e,t,n,r,a,o,i){try{var l=e[o](i),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(r,a)}function r(e){return function(){var t=this,r=arguments;return new Promise((function(a,o){var i=e.apply(t,r);function l(e){n(i,a,o,l,c,"next",e)}function c(e){n(i,a,o,l,c,"throw",e)}l(void 0)}))}}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,i,l=[],c=!0,u=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw a}}return l}}(e,t)||i(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||i(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){if(e){if("string"==typeof e)return l(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return(t=h(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,h(r.key),r)}}function h(t){var n=function(t,n){if("object"!=e(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var a=r.call(t,n||"default");if("object"!=e(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"==e(n)?n:n+""}System.register(["./index-legacy-Bf8H5TIW.js","./index-legacy-BiFnflbC.js","./Download-legacy-5I8miYse.js","./useManageMangaLibraryState-legacy-CYeT7rKn.js","./DownloadStateIndicator-legacy-C5B2VSht.js","./Delete-legacy-Dkllrmm6.js","./Chapters-legacy-CI9CVZPB.js","./TypographyMaxLines-legacy-CNhDHfT_.js","./Card-legacy-CUur5poF.js","./CardActionArea-legacy-CVroQOq-.js","./CardContent-legacy-NWeVjBom.js","./Checkbox-legacy-gkVUnHdX.js","./PlayArrow-legacy-qZyJ23OG.js","./StyledFab-legacy-BcyV7ueh.js","./EmptyViewAbsoluteCentered-legacy-DOeM88sZ.js","./FilterList-legacy-CLiQYXhV.js","./SortRadioInput-legacy-B1CxyOZM.js","./ThreeStateCheckboxInput-legacy-Cmkvjfj7.js","./SelectionFAB-legacy-C6dvouJg.js","./ListPreference-legacy-QC5SLxX9.js","./Mangas-legacy-DqWq_uy_.js","./Strings-legacy-I1Ww2TW7.js","./ExpandMore-legacy-CwCV3DIS.js","./SpinnerImage-legacy-CamBqehq.js","./CustomIconButton-legacy-h0N-wmOY.js","./Sync-legacy-q7zUVT_A.js","./Trackers-legacy-CN_LuGVd.js","./Link-legacy-9Tpz6JVG.js","./Collapse-legacy-DwF4ZHws.js","./Chip-legacy-D4DdgTNF.js","./Refresh-legacy-BScrlb74.js","./Avatar-legacy-Dv9QdKwv.js","./Info-legacy-Ch-U-A7Y.js","./TextField-legacy-DuesKaTe.js","./InputAdornment-legacy-BIaaN0a2.js","./CheckCircle-legacy-BdSzJr03.js","./NumberSetting-legacy-BjZgiCR7.js","./useMobilePicker-legacy-yCcPlJ7k.js","./SelectSetting-legacy-0_eVDllE.js","./Select-legacy-DgGFBvWf.js","./CheckboxInput-legacy-IIXgcKTa.js","./SwitchBase-legacy-Ce2MELsw.js","./Tabs-legacy-CDZSfqpL.js"],(function(e,n){"use strict";var i,l,c,h,f,p,g,m,v,b,y,x,j,k,w,C,_,S,I,O,L,M,D,B,T,N,P,E,R,F,A,z,V,G,H,W,U,q,K,Y,J,Q,X,$,Z,ee,te,ne,re,ae,oe,ie,le,ce,ue,se,de,he,fe,pe,ge,me,ve,be,ye,xe,je,ke,we,Ce,_e,Se,Ie,Oe,Le,Me,De,Be,Te,Ne,Pe,Ee,Re,Fe,Ae,ze,Ve,Ge,He,We,Ue,qe,Ke,Ye,Je,Qe,Xe,$e,Ze,et,tt,nt,rt,at,ot,it,lt,ct;return{setters:[function(e){i=e.r,l=e.i,c=e.j,h=e.D,f=e.u,p=e.l,g=e.c,m=e.h,v=e.H,b=e.P,y=e.S,x=e.L,j=e.T,k=e.J,w=e.f,C=e.I,_=e.K,S=e.O,I=e.Q,O=e.R,L=e.C,M=e.k,D=e.M,B=e.v,T=e.a,N=e.U,P=e.g,E=e.V,R=e.B,F=e.W,A=e.e,z=e.G,V=e.X,G=e.Y,H=e.m,W=e.Z,U=e._,q=e.$,K=e.d,Y=e.a0,J=e.a1,Q=e.a2,X=e.a3,$=e.a4,Z=e.N,ee=e.a5,te=e.a6,ne=e.a7,re=e.a8},function(e){ae=e.V},function(e){oe=e.d},function(e){ie=e.M,le=e.d,ce=e.a,ue=e.b,se=e.c,de=e.e,he=e.f,fe=e.J,pe=e.g,ge=e.h,me=e.u,ve=e.C,be=e.T,ye=e.i,xe=e.j,je=e.k,ke=e.l,we=e.m,Ce=e.n},function(e){_e=e.D},function(e){Se=e.d},function(e){Ie=e.C,Oe=e.a},function(e){Le=e.T,Me=e.s},function(e){De=e.C},function(e){Be=e.C},function(e){Te=e.C},function(e){Ne=e.C},function(e){Pe=e.d},function(e){Ee=e.S,Re=e.D},function(e){Fe=e.E},function(e){Ae=e.d},function(e){ze=e.S,Ve=e.R},function(e){Ge=e.T},function(e){He=e.O,We=e.a,Ue=e.S,qe=e.d},function(e){Ke=e.R},function(e){Ye=e.M,Je=e.s,Qe=e.a},function(e){Xe=e.b},function(e){$e=e.d,Ze=e.a,et=e.b},function(e){tt=e.S},function(e){nt=e.C},function(e){rt=e.d},function(e){at=e.T},function(e){ot=e.L},function(e){it=e.C},function(e){lt=e.C},function(e){ct=e.d},null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var n={},ut=l;Object.defineProperty(n,"__esModule",{value:!0});var st=n.default=void 0,dt=ut(i()),ht=c;st=n.default=(0,dt.default)((0,ht.jsx)("path",{d:"M1 21h22L12 2zm12-3h-2v-2h2zm0-4h-2v-4h2z"}),"Warning");var ft={},pt=l;Object.defineProperty(ft,"__esModule",{value:!0});var gt=ft.default=void 0,mt=pt(i()),vt=c;gt=ft.default=(0,mt.default)((0,vt.jsx)("path",{d:"m18 7-1.41-1.41-6.34 6.34 1.41 1.41zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12zM.41 13.41 6 19l1.41-1.41L1.83 12z"}),"DoneAll");var bt={},yt=l;Object.defineProperty(bt,"__esModule",{value:!0});var xt=bt.default=void 0,jt=yt(i()),kt=c;xt=bt.default=(0,jt.default)((0,kt.jsx)("path",{d:"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2"}),"Bookmark");var wt={},Ct=l;Object.defineProperty(wt,"__esModule",{value:!0});var _t=wt.default=void 0,St=Ct(i()),It=c;_t=wt.default=(0,St.default)((0,It.jsx)("path",{d:"M21 7h-6V5h6zm-2 3.9c-.32.07-.66.1-1 .1-2.76 0-5-2.24-5-5 0-1.13.37-2.16 1-3H7c-1.1 0-2 .9-2 2v16l7-3 7 3z"}),"BookmarkRemove");var Ot={},Lt=l;Object.defineProperty(Ot,"__esModule",{value:!0});var Mt=Ot.default=void 0,Dt=Lt(i()),Bt=c;Mt=Ot.default=(0,Dt.default)((0,Bt.jsx)("path",{d:"M21 7h-2v2h-2V7h-2V5h2V3h2v2h2zm-2 14-7-3-7 3V5c0-1.1.9-2 2-2h7c-.63.84-1 1.87-1 3 0 2.76 2.24 5 5 5 .34 0 .68-.03 1-.1z"}),"BookmarkAdd");var Tt={},Nt=l;Object.defineProperty(Tt,"__esModule",{value:!0});var Pt=Tt.default=void 0,Et=Nt(i()),Rt=c;Pt=Tt.default=(0,Et.default)((0,Rt.jsx)("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z"}),"Launch");var Ft=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return function(e,t,n){return t&&d(e.prototype,t),n&&d(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}(e,null,[{key:"getChapters",value:function(e){return e.map((function(e){return e.chapter}))}},{key:"getIds",value:function(t){return Ie.getIds(e.getChapters(t))}},{key:"getDownloaded",value:function(e){return e.filter((function(e){var t=e.chapter;return Ie.isDownloaded(t)}))}},{key:"getDeletable",value:function(e,t){return e.filter((function(e){var n=e.chapter;return Ie.isDeletable(n,t)}))}},{key:"getNonDownloaded",value:function(e){return e.filter((function(e){var t=e.chapter;return!Ie.isDownloaded(t)}))}},{key:"isDownloadable",value:function(e){var t=e.chapter,n=e.downloadChapter;return!(Ie.isDownloaded(t)||n&&(null==n?void 0:n.state)!==h.Error)}},{key:"getDownloadable",value:function(e){return e.filter(this.isDownloadable)}},{key:"getBookmarked",value:function(e){return e.filter((function(e){var t=e.chapter;return Ie.isBookmarked(t)}))}},{key:"getNonBookmarked",value:function(e){return e.filter((function(e){var t=e.chapter;return!Ie.isBookmarked(t)}))}},{key:"getRead",value:function(e){return e.filter((function(e){var t=e.chapter;return Ie.isRead(t)}))}},{key:"getNonRead",value:function(e){return e.filter((function(e){var t=e.chapter;return!Ie.isRead(t)}))}}])}(),At=function(e){var t=e.chapter,n=e.allChapters,r=e.handleSelection,a=e.canBeDownloaded,o=void 0!==a&&a,i=e.selectedChapters,l=void 0===i?[]:i,u=e.onClose,s=f().t,d=!!t,h=null!=t?t:{},v=h.isDownloaded,b=h.isRead,y=h.isBookmarked,x=p().settings.deleteChaptersWithBookmark,j=se(d,Oe),k=de(d),w=he(d),C=g.useMemo((function(){return{downloadableChapters:Ft.getDownloadable(l),downloadedChapters:Ft.getDownloaded(l),unbookmarkedChapters:Ft.getNonBookmarked(l),bookmarkedChapters:Ft.getBookmarked(l),unreadChapters:Ft.getNonRead(l),readChapters:Ft.getRead(l)}}),[l]),_=C.downloadableChapters,S=C.downloadedChapters,I=C.unbookmarkedChapters,O=C.bookmarkedChapters,L=C.unreadChapters,M=C.readChapters,D=function(e,r){var a,o="mark_prev_as_read"===e,i=o?"mark_as_read":e;if("delete"===i&&t&&!Ie.isDeletable(t,x))return void u();var l=function(){if(!t)return Ft.getChapters(r);if(!o)return[t];var e=n.findIndex((function(e){return e.id===t.id}));return e+1>n.length-1?[]:n.slice(e+1)}();l.length?(Ie.performAction(i,Ie.getIds(l),{chapters:l,wasManuallyMarkedAsRead:!0,trackProgressMangaId:null===(a=l[0])||void 0===a?void 0:a.mangaId}).catch(m()),u()):u()};return c.jsxs(c.Fragment,{children:[d&&c.jsx(ie,{onClick:function(){null==r||r(t.id,!0),u()},Icon:le,title:s("chapter.action.label.select")}),d&&c.jsx(ie,{Icon:Pt,disabled:!t.realUrl,onClick:function(){window.open(t.realUrl,"_blank","noopener,noreferrer"),u()},title:s("chapter.action.label.open_on_source")}),k(o)&&c.jsx(ie,{Icon:oe,disabled:w(!_.length),onClick:function(){return D("download",_)},title:j("download",_.length)}),k(v)&&c.jsx(ie,{Icon:Se,disabled:w(!S.length),onClick:function(){return D("delete",Ft.getDeletable(S,x))},title:j("delete",S.length)}),k(!y)&&c.jsx(ie,{Icon:Mt,disabled:w(!I.length),onClick:function(){return D("bookmark",I)},title:j("bookmark",I.length)}),k(y)&&c.jsx(ie,{Icon:_t,disabled:w(!O.length),onClick:function(){return D("unbookmark",O)},title:j("unbookmark",O.length)}),k(!b)&&c.jsx(ie,{Icon:ce,disabled:w(!L.length),onClick:function(){return D("mark_as_read",L)},title:j("mark_as_read",L.length)}),k(b)&&c.jsx(ie,{Icon:ue,disabled:w(!M.length),onClick:function(){return D("mark_as_unread",M)},title:j("mark_as_unread",M.length)}),d&&c.jsx(ie,{onClick:function(){return D("mark_prev_as_read",[])},Icon:gt,title:s("chapter.action.mark_as_read.add.label.action.previous")})]})},zt=function(e){var t=f().t,n=v(),r=g.useRef(null),a=e.chapter,o=e.allChapters,i=e.downloadChapter,l=e.showChapterNumber,s=e.onSelect,d=e.selected,h=null!==d,p=a.isDownloaded,m=function(e){h&&(e.preventDefault(),e.stopPropagation(),s(!d,e.shiftKey))},I=function(e,t){e.stopPropagation(),e.preventDefault(),t(e)},O=fe((function(e,t){var n=t.context;h||!r.current?(e.shiftKey=!0,m(e)):I(e,(function(){return null==n?void 0:n(r.current)}))}));return c.jsx("li",{children:c.jsx(b,{variant:"popover",popupId:"chapter-card-action-menu",children:function(e){var f;return c.jsxs(y,{sx:{pt:1,px:1},children:[c.jsx(De,{sx:{touchCallout:"none"},children:c.jsx(Be,u(u({component:x,to:"/manga/".concat(a.mangaId,"/chapter/").concat(a.sourceOrder),style:{color:n.palette.text[a.isRead?"disabled":"primary"]},onClick:function(e){return m(e)}},O(e.open)),{},{children:c.jsxs(Te,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:1.5,"&:last-child":{pb:1.5}},children:[c.jsxs(y,{direction:"column",sx:{flex:1},children:[c.jsxs(y,{sx:{flexDirection:"row",gap:.5,alignItems:"center"},children:[a.isBookmarked&&c.jsx(xt,{color:"primary"}),c.jsx(Le,{variant:"h6",component:"h4",children:l?"".concat(t("chapter.title_one")," ").concat(a.chapterNumber):a.name})]}),c.jsx(j,{variant:"caption",children:a.scanlator}),c.jsxs(j,{variant:"caption",children:[k(Number(null!==(f=a.uploadDate)&&void 0!==f?f:0),!0),p&&" • ".concat(t("chapter.status.label.downloaded"))]})]}),i&&c.jsx(_e,{download:i}),c.jsx(y,{sx:{minHeight:"48px"},children:null===d?c.jsx(w,{title:t("global.button.options"),children:c.jsx(C,u(u({ref:r},_(e)),{},{onClick:function(t){return I(t,e.open)},onTouchStart:function(t){return I(t,e.open)},"aria-label":"more",size:"large",children:c.jsx(pe,{})}))}):c.jsx(w,{title:t(d?"global.button.deselect":"global.button.select"),children:c.jsx(Ne,{checked:d})})})]})}))}),!h&&e.isOpen&&c.jsx(ge,u(u({},S(e)),{},{children:function(e){return c.jsx(At,{onClose:e,chapter:a,allChapters:o,handleSelection:function(){return s(!0)},canBeDownloaded:Ft.isDownloadable({chapter:a,downloadChapter:i})})}}))]})}})})};function Vt(e){var t=f().t,n=e.chapterIndex,r=e.mangaId;return c.jsxs(Ee,{component:x,variant:"extended",color:"primary",to:"/manga/".concat(r,"/chapter/").concat(n),children:[c.jsx(Pe,{}),t(1===n?"global.button.start":"global.button.resume")]})}function Gt(e,t){return function(e,t){var n=t.sortBy,r=t.reverse,a=o(e);switch(n){case"source":a.sort((function(e,t){return e.sourceOrder-t.sourceOrder}));break;case"fetchedAt":a.sort((function(e,t){var n,r;return Number(null!==(n=e.fetchedAt)&&void 0!==n?n:0)-Number(null!==(r=t.fetchedAt)&&void 0!==r?r:0)}));break;case"chapterNumber":a.sort((function(e,t){return e.chapterNumber-t.chapterNumber}));break;case"uploadedAt":a.sort((function(e,t){var n,r;return Number(null!==(n=e.uploadDate)&&void 0!==n?n:0)-Number(null!==(r=t.uploadDate)&&void 0!==r?r:0)}))}return r&&a.reverse(),a}(t.active?e.filter((function(e){return function(e,t){var n=t.isRead;switch(e){case!0:return!n;case!1:return n;default:return!0}}(t.unread,e)&&function(e,t){var n=t.isDownloaded;switch(e){case!0:return n;case!1:return!n;default:return!0}}(t.downloaded,e)&&function(e,t){var n=t.isBookmarked;switch(e){case!0:return n;case!1:return!n;default:return!0}}(t.bookmarked,e)})):o(e),t)}var Ht={active:!1,unread:void 0,downloaded:void 0,bookmarked:void 0,reverse:!0,sortBy:"source",showChapterNumber:!1},Wt={source:"global.sort.label.by_source",chapterNumber:"global.sort.label.by_chapter_number",uploadedAt:"global.sort.label.by_upload_date",fetchedAt:"global.sort.label.by_fetch_date"},Ut={filter:"global.label.filter",sort:"global.label.sort",display:"global.label.display"},qt=function(e){var t=e.open,n=e.onClose,r=e.options,o=e.optionsDispatch,i=f().t;return c.jsx(He,{open:t,onClose:n,minHeight:150,tabs:["filter","sort","display"],tabTitle:function(e){return i(Ut[e])},tabContent:function(e){return"filter"===e?c.jsxs(c.Fragment,{children:[c.jsx(Ge,{label:i("global.filter.label.unread"),checked:r.unread,onChange:function(e){return o({type:"filter",filterType:"unread",filterValue:e})}}),c.jsx(Ge,{label:i("global.filter.label.downloaded"),checked:r.downloaded,onChange:function(e){return o({type:"filter",filterType:"downloaded",filterValue:e})}}),c.jsx(Ge,{label:i("global.filter.label.bookmarked"),checked:r.bookmarked,onChange:function(e){return o({type:"filter",filterType:"bookmarked",filterValue:e})}})]}):"sort"===e?Object.entries(Wt).map((function(e){var t=a(e,2),n=t[0],l=t[1];return c.jsx(ze,{label:i(l),checked:r.sortBy===n,sortDescending:r.reverse,onClick:function(){return n!==r.sortBy?o({type:"sortBy",sortBy:n}):o({type:"sortReverse"})}},n)})):"display"===e?c.jsxs(Ke,{onChange:function(){return o({type:"showChapterNumber"})},value:r.showChapterNumber,children:[c.jsx(Ve,{label:i("chapter.option.display.label.source_title"),value:!1}),c.jsx(Ve,{label:i("chapter.option.display.label.chapter_number"),value:!0})]}):null}})},Kt=function(e){var t=e.options,n=e.optionsDispatch,r=f().t,o=a(g.useState(!1),2),i=o[0],l=o[1],u=function(e){var t=e.unread,n=e.downloaded,r=e.bookmarked;return null!=t||null!=n||null!=r}(t);return c.jsxs(c.Fragment,{children:[c.jsx(w,{title:r("settings.title"),children:c.jsx(C,{onClick:function(){return l(!0)},children:c.jsx(Ae,{color:u?"warning":void 0})})}),c.jsx(qt,{open:i,onClose:function(){return l(!1)},options:t,optionsDispatch:n})]})};function Yt(e,t){switch(t.type){case"filter":return u(u({},e),{},s({active:!1!==e.unread&&!1!==e.downloaded&&!1!==e.bookmarked},t.filterType,t.filterValue));case"sortBy":return u(u({},e),{},{sortBy:t.sortBy});case"sortReverse":return u(u({},e),{},{reverse:!e.reverse});case"showChapterNumber":return u(u({},e),{},{showChapterNumber:!e.showChapterNumber});default:throw Error(O("global.error.label.invalid_action"))}}var Jt=L(y,{shouldForwardProp:Me(["scrollbarWidth"])})((function(e){var t=e.theme,n=e.scrollbarWidth;return s({padding:t.spacing(1),paddingRight:"calc(".concat(n,"px + ").concat(t.spacing(1),")"),paddingBottom:0},t.breakpoints.down("md"),{paddingRight:t.spacing(1)})})),Qt=L(ae,{shouldForwardProp:Me(["topOffset"])})((function(e){var t=e.theme,n=e.topOffset;return s({listStyle:"none",padding:0},t.breakpoints.up("md"),{height:"calc(100vh - ".concat(n,"px)"),margin:0})})),Xt=function(e){var t,n,r=e.manga,o=e.isRefreshing,i=f().t,l=M().appBarHeight,s=D.useIsBelowWidth("md"),d=a(g.useState(50),2),h=d[0],p=d[1],v=a(g.useState(null),2),x=v[0],k=v[1];B(x,g.useCallback((function(){var e;return p(null!==(e=null==x?void 0:x.offsetHeight)&&void 0!==e?e:0)}),[x]));var O,L=D.useGetScrollbarSize("width"),F=T.useGetDownloadStatus().data,A=null!==(t=null==F?void 0:F.downloadStatus.queue)&&void 0!==t?t:[],z=a((O=r.id,I(Yt,"".concat(O,"filterOptions"),Ht)),2),V=z[0],G=z[1],H=T.useGetMangaChapters(N,r.id,{notifyOnNetworkStatusChange:!0}),W=H.data,U=H.loading,q=H.error,K=H.refetch,Y=g.useMemo((function(){var e;return null!==(e=null==W?void 0:W.chapters.nodes)&&void 0!==e?e:[]}),[null==W?void 0:W.chapters.nodes]),J=g.useMemo((function(){return Y.map((function(e){return e.id}))}),[Y]),Q=me(Y.length,{itemIds:J,currentKey:"default"}),X=Q.areNoItemsSelected,$=Q.areAllItemsSelected,Z=Q.selectedItemIds,ee=Q.handleSelectAll,te=Q.handleSelection,ne=g.useMemo((function(){return Gt(Y,V)}),[Y,V]),re=null===(n=r.firstUnreadChapter)||void 0===n?void 0:n.sourceOrder,ae=Ye.isFullyRead(r),ie=Ye.isFullyDownloaded(r),le=0===Y.length,ce=!le&&0===ne.length,ue=g.useMemo((function(){return ne.map((function(e){var t=null==A?void 0:A.find((function(t){return t.chapter.id===e.id})),n=X?null:Z.includes(e.id);return{chapter:e,downloadChapter:t,selected:n}}))}),[A,Z,ne]),se=g.useMemo((function(){var e=ue.filter((function(e){return e.selected}));return e.length?c.jsx(We,{selectedItemsCount:e.length,title:"chapter.title_one",children:function(t){return c.jsx(At,{selectedChapters:e,onClose:t})}}):void 0!==re?c.jsx(Vt,{chapterIndex:re,mangaId:r.id}):null}),[ue]);return U||le&&o?c.jsx(y,{sx:{justifyContent:"center",alignItems:"center",position:"relative",flexGrow:1},children:c.jsx(P,{})}):q?c.jsx(y,{sx:{justifyContent:"center",position:"relative",flexGrow:1},children:c.jsx(Fe,{message:i("global.error.label.failed_to_load_data"),messageExtra:q.message,retry:function(){return K().catch(m())}})}):c.jsxs(c.Fragment,{children:[c.jsxs(y,{direction:"column",sx:{position:"relative",flexBasis:"60%"},children:[c.jsxs(Jt,{ref:k,direction:"row",alignItems:"center",justifyContent:"space-between",scrollbarWidth:L,children:[c.jsx(j,{variant:"h5",component:"h3",children:"".concat(ne.length," ").concat(i("chapter.title_one",{count:ne.length}))}),c.jsxs(y,{direction:"row",children:[c.jsx(w,{title:i("chapter.action.mark_as_read.add.label.action.current"),children:c.jsx(C,{disabled:ae,onClick:function(){return Ie.markAsRead(Ft.getChapters(Ft.getNonRead(ue)),!0,r.id)},children:c.jsx(gt,{})})}),c.jsx(b,{variant:"popover",popupId:"chapterlist-download-button",children:function(e){return c.jsxs(c.Fragment,{children:[c.jsx(w,{title:i("chapter.action.download.add.label.action"),children:c.jsx(C,u(u({disabled:ie},_(e)),{},{children:c.jsx(oe,{})}))}),e.isOpen&&c.jsx(E,u(u({},S(e)),{},{children:c.jsx(ve,{mangaIds:[r.id],closeMenu:e.close})}))]})}}),c.jsx(Kt,{options:V,optionsDispatch:G}),c.jsx(Ue,{areAllItemsSelected:$,areNoItemsSelected:X,onChange:function(e){return ee(e,e?Y.map((function(e){return e.id})):[])}})]})]}),le&&c.jsx(Fe,{message:i("chapter.error.label.no_chapter_found")}),ce&&c.jsx(Fe,{message:i("chapter.error.label.no_matches")}),c.jsx(Qt,{topOffset:l+h,style:{height:"undefined"},components:{Footer:function(){return c.jsx(R,{sx:{paddingBottom:Re}})}},totalCount:ne.length,itemContent:function(e){return c.jsx(zt,u(u({},ue[e]),{},{allChapters:Y,showChapterNumber:V.showChapterNumber,onSelect:function(t,n){return te(ue[e].chapter.id,t,{selectRange:n})}}))},useWindowScroll:s,overscan:.5*window.innerHeight})]}),se]})},$t={},Zt=l;Object.defineProperty($t,"__esModule",{value:!0});var en=$t.default=void 0,tn=Zt(i()),nn=c;en=$t.default=(0,tn.default)((0,nn.jsx)("path",{d:"M21 11V3h-8l3.29 3.29-10 10L3 13v8h8l-3.29-3.29 10-10z"}),"OpenInFull");var rn={},an=l;Object.defineProperty(rn,"__esModule",{value:!0});var on=rn.default=void 0,ln=an(i()),cn=c;on=rn.default=(0,ln.default)((0,cn.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");var un=function(e){var t,n,r=e.manga,a=f().t,o=A(),i=T.useGetTrackerList(z),l=null!==(t=null===(n=i.data)||void 0===n?void 0:n.trackers.nodes)&&void 0!==t?t:[],s=r.trackRecords.nodes,d=at.getLoggedIn(l),h=at.getLoggedIn(at.getTrackers(s,l)),p=function(e){i.error?H(a("tracking.error.label.could_not_load_track_info"),"error"):d.length?e():o("/settings/trackingSettings")};return c.jsx(b,{variant:"dialog",popupId:"manga-track-modal",children:function(e){return c.jsxs(c.Fragment,{children:[c.jsxs(nt,u(u({},_(e)),{},{size:"medium",disabled:i.loading||!!i.error,onClick:function(){return p(e.open)},onTouchStart:function(){return p(e.open)},variant:h.length?"contained":"outlined",children:[h.length?c.jsx(on,{}):c.jsx(rt,{}),h.length?a("manga.button.track.active",{count:h.length}):a("manga.button.track.start")]})),c.jsx(V,u(u({},G(e)),{},{maxWidth:"md",fullWidth:!0,scroll:"paper",children:c.jsx(be,{manga:r})}))]})}})},sn=L("div")((function(e){var t=e.theme;return s({display:"flex",flexDirection:"column",gap:t.spacing(2),padding:t.spacing(1)},t.breakpoints.up("md"),{flexBasis:"40%",height:"calc(100vh - 64px)",overflowY:"auto"})})),dn=L("div",{shouldForwardProp:Me(["url","mangaThumbnailBackdrop"])})((function(e){var t=e.theme,n=e.url,r=e.mangaThumbnailBackdrop;return{position:"relative",backgroundImage:r?"url(".concat(n,")"):void 0,backgroundRepeat:r?"no-repeat":void 0,backgroundSize:r?"cover":void 0,borderRadius:r?t.shape.borderRadius:void 0,"&::before":r&&{position:"absolute",display:"inline-block",content:'""',top:0,left:0,width:"100%",height:"100%",background:"linear-gradient(to top, ".concat(t.palette.background.default,", transparent 100%, transparent 1px),linear-gradient(to right, ").concat(t.palette.background.default,", transparent 50%, transparent 1px),linear-gradient(to bottom, ").concat(t.palette.background.default,", transparent 50%, transparent 1px),linear-gradient(to left, ").concat(t.palette.background.default,", transparent 50%, transparent 1px)"),backdropFilter:"blur(4.5px) brightness(0.75)"}}})),hn=L("div")((function(e){return{display:"flex",paddingBottom:e.theme.spacing(1)}})),fn=L("div")((function(e){return{zIndex:1,marginLeft:e.theme.spacing(1)}})),pn=function(e){return c.jsx(je,u({},e))},gn=L("div")((function(e){return{display:"flex",gap:e.theme.spacing(1)}})),mn=function(e){var t=e.url,n=f().t;return c.jsx(w,{title:n("global.button.open_site"),children:c.jsx(nt,{size:"medium",disabled:!t,component:ot,href:null!=t?t:void 0,target:"_blank",rel:"noreferrer",variant:"outlined",children:c.jsx(Pt,{})})})};function vn(e){return null!=e?e:O("global.label.unknown")}var bn=function(e){var t=e.manga,n=v(),r=W({variant:"popover",popupId:"manga-thumbnail-fullscreen"}),o=a(g.useState(!1),2),i=o[0],l=o[1];return c.jsxs(c.Fragment,{children:[c.jsxs(y,{sx:s(s({position:"relative",borderRadius:1,overflow:"hidden",backgroundColor:"background.paper",width:"150px",maxHeight:"fit-content",aspectRatio:Qe,flexShrink:0,flexGrow:0},n.breakpoints.up("lg"),{width:"200px"}),n.breakpoints.up("xl"),{width:"300px"}),children:[c.jsx(tt,{src:Ye.getThumbnailUrl(t),alt:"Manga Thumbnail",onImageLoad:function(){return l(!0)},imgStyle:{width:"100%",height:"100%",objectFit:"cover"}}),i&&c.jsx(y,u(u({},_(r)),{},{sx:{position:"absolute",top:0,bottom:0,width:"100%",justifyContent:"center",alignItems:"center",opacity:0,"&:hover":{background:"rgba(0, 0, 0, 0.4)",cursor:"pointer",opacity:1}},children:c.jsx(en,{fontSize:"large",color:"primary"})}))]}),c.jsx(U,u(u({},q(r)),{},{sx:{outline:0},children:c.jsx(y,{onClick:function(){return r.close()},sx:{height:"100vh",p:2,outline:0,justifyContent:"center",alignItems:"center"},children:c.jsx(tt,{src:Ye.getThumbnailUrl(t),alt:"Manga Thumbnail",imgStyle:{height:"100%",width:"100%",objectFit:"contain"}})})}))]})},yn=function(e){var t=e.manga,n=t.description,r=t.genre,o=a(g.useState(null),2),i=o[0],l=o[1],u=a(g.useState(),2),s=u[0],d=u[1];B(i,g.useCallback((function(){return d(null==i?void 0:i.clientHeight)}),[i]));var h=a(K("isDescriptionGenreCollapsed",!0),2),f=h[0],p=h[1],m=n?Math.min(75,null!=s?s:75):0,v=g.useMemo((function(){return r.filter(Boolean)}),[r]);return c.jsxs(c.Fragment,{children:[n&&c.jsxs(y,{sx:{position:"relative"},children:[c.jsx(it,{collapsedSize:m,in:!f,children:c.jsx(j,{ref:l,style:{whiteSpace:"pre-line",textAlign:"justify",textJustify:"inter-word"},children:n})}),c.jsx(y,{onClick:function(){return p(!f)},sx:{pt:1,alignItems:"center",cursor:"pointer",position:f?"absolute":null,width:"100%",bottom:0,background:function(e){return"linear-gradient(transparent 1px, ".concat(e.palette.background.default,")")}},children:c.jsx(C,{sx:{color:function(e){return"light"===e.palette.mode?"black":"text"}},children:f?c.jsx(Ze,{}):c.jsx(et,{})})})]}),c.jsx(y,{sx:{flexDirection:"row",flexWrap:f?"no-wrap":"wrap",gap:1,overflowX:f?"auto":null},children:v.map((function(e){return c.jsx(lt,{label:e,variant:"outlined"},e)}))})]})},xn=function(e){var n=e.manga,a=f().t,o=p().settings.mangaThumbnailBackdrop;g.useEffect((function(){n.source||H(O("source.error.label.source_not_found"),"error")}),[n.source]);var i,l,s=ye(n),d=s.CategorySelectComponent,h=s.updateLibraryState,m=fe(r(t().mark((function e(){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.clipboard.writeText(n.title);case 3:H(a("global.label.copied"),"info"),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])}))));return c.jsxs(c.Fragment,{children:[c.jsxs(sn,{children:[c.jsxs(dn,{url:Ye.getThumbnailUrl(n),mangaThumbnailBackdrop:o,children:[c.jsxs(hn,{children:[c.jsx(bn,{manga:n}),c.jsxs(fn,{children:[c.jsx(j,u(u({variant:"h5",component:"h2",sx:{mb:1,"@media not (pointer: fine)":{userSelect:"none"}}},m()),{},{children:n.title})),c.jsx(pn,{title:a("manga.label.author"),value:vn(n.author)}),c.jsx(pn,{title:a("manga.label.artist"),value:vn(n.artist)}),c.jsx(pn,{title:a("manga.label.status"),value:a(Je[n.status])}),c.jsx(pn,{title:a("source.title_one"),value:(i=n.source,i?0===Number(i.id)?O("source.local_source.title"):null!==(l=i.displayName)&&void 0!==l?l:i.id:O("global.label.unknown"))})]})]}),c.jsxs(gn,{children:[c.jsxs(nt,{size:"medium",onClick:h,variant:n.inLibrary?"contained":"outlined",children:[n.inLibrary?c.jsx($e,{}):c.jsx(xe,{}),n.inLibrary?a("manga.button.in_library"):a("manga.button.add_to_library")]}),c.jsx(un,{manga:n}),c.jsx(mn,{url:n.realUrl})]})]}),c.jsx(yn,{manga:n})]}),d]})},jn=function(e){var t=e.manga,n=e.onRefresh,r=e.refreshing,o=f().t,i=v(),l=Y(i.breakpoints.up("sm")),u=a(J.useState(null),2),s=u[0],d=u[1],h=Boolean(s),p=function(){d(null)},g=ke({mangaId:t.id}),m=g.openCategorySelect,b=g.CategorySelectComponent;return c.jsxs(c.Fragment,{children:[l&&c.jsxs(c.Fragment,{children:[c.jsx(w,{title:o("manga.label.reload_from_source"),children:c.jsx(C,{onClick:function(){n()},disabled:r,color:"inherit",children:c.jsx(ct,{})})}),t.inLibrary&&c.jsxs(c.Fragment,{children:[c.jsx(w,{title:o("global.button.migrate"),children:c.jsx(x,{to:"/migrate/source/".concat(t.sourceId,"/manga/").concat(t.id,"/search?query=").concat(t.title),state:{mangaTitle:t.title},style:{textDecoration:"none",color:"inherit"},children:c.jsx(C,{color:"inherit",children:c.jsx(we,{})})})}),c.jsx(w,{title:o("manga.label.edit_categories"),children:c.jsx(C,{onClick:function(){m(!0)},color:"inherit",children:c.jsx(Ce,{})})})]})]}),!l&&c.jsxs(c.Fragment,{children:[c.jsx(C,{id:"chaptersMenuButton","aria-controls":h?"chaptersMenu":void 0,"aria-haspopup":"true","aria-expanded":h?"true":void 0,onClick:function(e){return d(e.currentTarget)},color:"inherit",children:c.jsx(qe,{})}),c.jsxs(E,{id:"chaptersMenu",anchorEl:s,open:h,onClose:p,MenuListProps:{"aria-labelledby":"chaptersMenuButton"},children:[c.jsxs(Q,{onClick:function(){n(),p()},disabled:r,children:[c.jsx(X,{children:c.jsx(ct,{fontSize:"small"})}),c.jsx($,{children:o("manga.label.reload_from_source")})]}),t.inLibrary&&[c.jsxs(Q,{component:x,to:"/migrate/source/".concat(t.sourceId,"/manga/").concat(t.id,"/search?query=").concat(t.title),state:{mangaTitle:t.title},style:{textDecoration:"none",color:"inherit"},children:[c.jsx(X,{children:c.jsx(we,{fontSize:"small"})}),c.jsx($,{children:o("migrate.title")})]},"migrate"),c.jsxs(Q,{onClick:function(){m(!0),p()},children:[c.jsx(X,{children:c.jsx(Ce,{fontSize:"small"})}),c.jsx($,{children:o("manga.label.edit_categories")})]},"categories")]]})]}),b]})};e("Manga",(function(){var e=f().t,n=g.useContext(Z),o=n.setTitle,i=n.setAction,l=ee().id,u=g.useRef(!1),s=T.useGetManga(te,l),d=s.data,h=s.error,p=s.loading,m=s.networkStatus,v=s.refetch,b=re(m),x=null==d?void 0:d.manga,j=function(e){var n=a(g.useState(!1),2),o=n[0],i=n[1],l=a(g.useState(null),2),c=l[0],u=l[1];return[g.useCallback(r(t().mark((function n(){return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i(!0),u(null),t.next=4,Promise.all([T.getMangaFetch(e,{awaitRefetchQueries:!0}).response,T.getMangaChaptersFetch(e,{awaitRefetchQueries:!0}).response]).catch((function(e){e instanceof F&&"no chapters found"===Xe(e.message)||u(e)})).finally((function(){return i(!1)}));case 4:case"end":return t.stop()}}),n)}))),[e]),{loading:o,error:c}]}(l),k=a(j,2),_=k[0],S=k[1],I=S.loading,O=S.error,L=null!=h?h:O;return g.useEffect((function(){null!=x&&(!u.current&&!x.initialized&&(u.current=!0,_()))}),[x]),g.useLayoutEffect((function(){var t;return o(null!==(t=null==x?void 0:x.title)&&void 0!==t?t:e("manga.title_one")),i(null),function(){o(""),i(null)}}),[e,null==x?void 0:x.title]),g.useLayoutEffect((function(){var t;return i(c.jsxs(y,{direction:"row",sx:{alignItems:"center"},children:[L&&!b&&!I&&c.jsx(w,{title:c.jsxs(c.Fragment,{children:[e("manga.error.label.request_failure"),c.jsx("br",{}),null!==(t=L.message)&&void 0!==t?t:L]}),children:c.jsx(C,{onClick:function(){return v()},children:c.jsx(st,{color:"error"})})}),x&&(I||b)&&c.jsx(C,{disabled:!0,children:c.jsx(ne,{size:16})}),x&&c.jsx(jn,{manga:x,onRefresh:_,refreshing:I})]})),function(){i(null)}}),[e,L,b,I,x,_]),L&&!x?c.jsx(Fe,{message:e("manga.error.label.request_failure"),messageExtra:L.message}):c.jsxs(R,{sx:{display:{md:"flex"},overflow:"hidden"},children:[p&&c.jsx(P,{}),x&&c.jsx(xn,{manga:x}),x&&c.jsx(Xt,{manga:x,isRefreshing:I})]})}))}}}))}();
