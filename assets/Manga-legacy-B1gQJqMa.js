!function(){var e=["children"];function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function n(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function r(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */r=function(){return n};var e,n={},o=Object.prototype,a=o.hasOwnProperty,i=Object.defineProperty||function(e,t,n){e[t]=n.value},l="function"==typeof Symbol?Symbol:{},c=l.iterator||"@@iterator",u=l.asyncIterator||"@@asyncIterator",s=l.toStringTag||"@@toStringTag";function d(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch(e){d=function(e,t,n){return e[t]=n}}function h(e,t,n,r){var o=t&&t.prototype instanceof b?t:b,a=Object.create(o.prototype),l=new E(r||[]);return i(a,"_invoke",{value:I(e,n,l)}),a}function f(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}n.wrap=h;var p="suspendedStart",g="suspendedYield",m="executing",v="completed",y={};function b(){}function x(){}function j(){}var w={};d(w,c,(function(){return this}));var k=Object.getPrototypeOf,C=k&&k(k(R([])));C&&C!==o&&a.call(C,c)&&(w=C);var _=j.prototype=b.prototype=Object.create(w);function S(e){["next","throw","return"].forEach((function(t){d(e,t,(function(e){return this._invoke(t,e)}))}))}function O(e,n){function r(o,i,l,c){var u=f(e[o],e,i);if("throw"!==u.type){var s=u.arg,d=s.value;return d&&"object"==t(d)&&a.call(d,"__await")?n.resolve(d.__await).then((function(e){r("next",e,l,c)}),(function(e){r("throw",e,l,c)})):n.resolve(d).then((function(e){s.value=e,l(s)}),(function(e){return r("throw",e,l,c)}))}c(u.arg)}var o;i(this,"_invoke",{value:function(e,t){function a(){return new n((function(n,o){r(e,t,n,o)}))}return o=o?o.then(a,a):a()}})}function I(t,n,r){var o=p;return function(a,i){if(o===m)throw Error("Generator is already running");if(o===v){if("throw"===a)throw i;return{value:e,done:!0}}for(r.method=a,r.arg=i;;){var l=r.delegate;if(l){var c=L(l,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===p)throw o=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=m;var u=f(t,n,r);if("normal"===u.type){if(o=r.done?v:g,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(o=v,r.method="throw",r.arg=u.arg)}}}function L(t,n){var r=n.method,o=t.iterator[r];if(o===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,L(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var a=f(o,t.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,y;var i=a.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,y):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function M(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(M,this),this.reset(!0)}function R(n){if(n||""===n){var r=n[c];if(r)return r.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var o=-1,i=function t(){for(;++o<n.length;)if(a.call(n,o))return t.value=n[o],t.done=!1,t;return t.value=e,t.done=!0,t};return i.next=i}}throw new TypeError(t(n)+" is not iterable")}return x.prototype=j,i(_,"constructor",{value:j,configurable:!0}),i(j,"constructor",{value:x,configurable:!0}),x.displayName=d(j,s,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===x||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,j):(e.__proto__=j,d(e,s,"GeneratorFunction")),e.prototype=Object.create(_),e},n.awrap=function(e){return{__await:e}},S(O.prototype),d(O.prototype,u,(function(){return this})),n.AsyncIterator=O,n.async=function(e,t,r,o,a){void 0===a&&(a=Promise);var i=new O(h(e,t,r,o),a);return n.isGeneratorFunction(t)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},S(_),d(_,s,"Generator"),d(_,c,(function(){return this})),d(_,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},n.values=R,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var n in this)"t"===n.charAt(0)&&a.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(r,o){return l.type="throw",l.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],l=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=a.call(i,"catchLoc"),u=a.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),P(n),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;P(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:R(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),y}},n}function o(e,t,n,r,o,a,i){try{var l=e[a](i),c=l.value}catch(u){return void n(u)}l.done?t(c):Promise.resolve(c).then(r,o)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function l(e){o(i,r,a,l,c,"next",e)}function c(e){o(i,r,a,l,c,"throw",e)}l(void 0)}))}}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,l=[],c=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(e,t)||c(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t,n){return(t=p(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,p(r.key),r)}}function p(e){var n=function(e,n){if("object"!=t(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,n||"default");if("object"!=t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"==t(n)?n:n+""}System.register(["./index-legacy-DWifwG5Y.js","./index-legacy-cGPTe2QD.js","./useManageMangaLibraryState-legacy-DqYZVhwj.js","./date-legacy-3BTSSEya.js","./DownloadStateIndicator-legacy-DV4S291x.js","./Delete-legacy-Cp1LVFEA.js","./Chapters-legacy-xhaHzdw4.js","./CardContent-legacy-DHj8o_SJ.js","./Checkbox-legacy-CTxcMv2r.js","./PlayArrow-legacy-DQIrD5hZ.js","./StyledFab-legacy-2dsOyWi1.js","./FilterList-legacy-D5Ns0yYv.js","./SortRadioInput-legacy-C1uOtgPh.js","./ThreeStateCheckboxInput-legacy-B8XX7WCV.js","./SelectionFAB-legacy-CVZ_fLvU.js","./ListPreference-legacy-N6xO9216.js","./Favorite-legacy-DlGmSagF.js","./Mangas-legacy-DVqdNs7_.js","./SpinnerImage-legacy-f7NRaBA0.js","./Sync-legacy-N3y9Lc7z.js","./Link-legacy-Rly59gXO.js","./Avatar-legacy-uDJt67es.js","./Info-legacy-CErU-6YU.js","./TextField-legacy-CzbXomfC.js","./InputAdornment-legacy-B3B18AzR.js","./Collapse-legacy-CbLo_j4S.js","./NumberSetting-legacy-XPXSy5GQ.js","./useMobilePicker-legacy-i7IATbbY.js","./Chip-legacy-mcDbBV2S.js","./SelectSetting-legacy-BrwPGMNY.js","./Select-legacy-D5t0HuUt.js","./CheckboxInput-legacy-DvpOJlK_.js","./SwitchBase-legacy-CNOhWym6.js","./Tabs-legacy-DUeym0XB.js"],(function(t,o){"use strict";var c,u,s,p,g,m,v,y,b,x,j,w,k,C,_,S,O,I,L,M,P,E,R,D,N,B,T,A,z,F,W,G,V,H,U,q,K,Y,J,Q,Z,$,X,ee,te,ne,re,oe,ae,ie,le,ce,ue,se,de,he,fe,pe,ge,me,ve,ye,be,xe,je,we,ke,Ce,_e,Se,Oe,Ie,Le,Me,Pe,Ee,Re,De,Ne,Be,Te,Ae,ze,Fe,We,Ge,Ve;return{setters:[function(e){c=e.r,u=e.i,s=e.j,p=e.u,g=e.x,m=e.c,v=e.y,y=e.k,b=e.o,x=e.z,j=e.L,w=e.S,k=e.T,C=e.g,_=e.I,S=e.A,O=e.C,I=e.F,L=e.H,M=e.s,P=e.a,E=e.h,R=e.E,D=e.M,N=e.B,B=e.b,T=e.e,A=e.J,z=e.K,F=e.n,W=e.p,G=e.R,V=e.O,H=e.Q,U=e.U,q=e.V,K=e.N,Y=e.W,J=e.X,Q=e.Y,Z=e.Z},function(e){$=e.C,X=e.a,ee=e.V},function(e){te=e.M,ne=e.d,re=e.a,oe=e.b,ae=e.c,ie=e.e,le=e.f,ce=e.J,ue=e.g,se=e.h,de=e.u,he=e.C,fe=e.T,pe=e.i,ge=e.j,me=e.k,ve=e.l,ye=e.m,be=e.n},function(e){xe=e.g},function(e){je=e.D},function(e){we=e.d},function(e){ke=e.C,Ce=e.a},function(e){_e=e.C},function(e){Se=e.C},function(e){Oe=e.d},function(e){Ie=e.S,Le=e.D},function(e){Me=e.d},function(e){Pe=e.S,Ee=e.R},function(e){Re=e.T},function(e){De=e.O,Ne=e.a,Be=e.S,Te=e.d},function(e){Ae=e.R},function(e){ze=e.d},function(e){Fe=e.M},function(e){We=e.S},function(e){Ge=e.d},function(e){Ve=e.L},null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var o={},He=u;Object.defineProperty(o,"__esModule",{value:!0});var Ue=o.default=void 0,qe=He(c()),Ke=s;Ue=o.default=(0,qe.default)((0,Ke.jsx)("path",{d:"M1 21h22L12 2zm12-3h-2v-2h2zm0-4h-2v-4h2z"}),"Warning");var Ye={},Je=u;Object.defineProperty(Ye,"__esModule",{value:!0});var Qe=Ye.default=void 0,Ze=Je(c()),$e=s;Qe=Ye.default=(0,Ze.default)((0,$e.jsx)("path",{d:"m18 7-1.41-1.41-6.34 6.34 1.41 1.41zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12zM.41 13.41 6 19l1.41-1.41L1.83 12z"}),"DoneAll");var Xe={},et=u;Object.defineProperty(Xe,"__esModule",{value:!0});var tt=Xe.default=void 0,nt=et(c()),rt=s;tt=Xe.default=(0,nt.default)((0,rt.jsx)("path",{d:"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2"}),"Bookmark");var ot={},at=u;Object.defineProperty(ot,"__esModule",{value:!0});var it=ot.default=void 0,lt=at(c()),ct=s;it=ot.default=(0,lt.default)((0,ct.jsx)("path",{d:"M21 7h-6V5h6zm-2 3.9c-.32.07-.66.1-1 .1-2.76 0-5-2.24-5-5 0-1.13.37-2.16 1-3H7c-1.1 0-2 .9-2 2v16l7-3 7 3z"}),"BookmarkRemove");var ut={},st=u;Object.defineProperty(ut,"__esModule",{value:!0});var dt=ut.default=void 0,ht=st(c()),ft=s;dt=ut.default=(0,ht.default)((0,ft.jsx)("path",{d:"M21 7h-2v2h-2V7h-2V5h2V3h2v2h2zm-2 14-7-3-7 3V5c0-1.1.9-2 2-2h7c-.63.84-1 1.87-1 3 0 2.76 2.24 5 5 5 .34 0 .68-.03 1-.1z"}),"BookmarkAdd");var pt={},gt=u;Object.defineProperty(pt,"__esModule",{value:!0});var mt=pt.default=void 0,vt=gt(c()),yt=s;mt=pt.default=(0,vt.default)((0,yt.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39"}),"Public");var bt=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return t=e,r=[{key:"getChapters",value:function(e){return e.map((function(e){return e.chapter}))}},{key:"getIds",value:function(t){return ke.getIds(e.getChapters(t))}},{key:"getDownloaded",value:function(e){return e.filter((function(e){var t=e.chapter;return ke.isDownloaded(t)}))}},{key:"getDeletable",value:function(e,t){return e.filter((function(e){var n=e.chapter;return ke.isDeletable(n,t)}))}},{key:"getNonDownloaded",value:function(e){return e.filter((function(e){var t=e.chapter;return!ke.isDownloaded(t)}))}},{key:"getDownloadable",value:function(e){return e.filter((function(e){var t=e.chapter,n=e.downloadChapter;return!ke.isDownloaded(t)&&!n}))}},{key:"getBookmarked",value:function(e){return e.filter((function(e){var t=e.chapter;return ke.isBookmarked(t)}))}},{key:"getNonBookmarked",value:function(e){return e.filter((function(e){var t=e.chapter;return!ke.isBookmarked(t)}))}},{key:"getRead",value:function(e){return e.filter((function(e){var t=e.chapter;return ke.isRead(t)}))}},{key:"getNonRead",value:function(e){return e.filter((function(e){var t=e.chapter;return!ke.isRead(t)}))}}],(n=null)&&f(t.prototype,n),r&&f(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,n,r}(),xt=function(e){var t=e.chapter,n=e.allChapters,r=e.handleSelection,o=e.canBeDownloaded,a=void 0!==o&&o,i=e.selectedChapters,l=void 0===i?[]:i,c=e.onClose,u=p().t,d=!!t,h=null!=t?t:{},f=h.isDownloaded,b=h.isRead,x=h.isBookmarked,j=g().settings.deleteChaptersWithBookmark,w=ae(d,Ce),k=ie(d),C=le(d),_=m.useMemo((function(){return{downloadableChapters:bt.getDownloadable(l),downloadedChapters:bt.getDownloaded(l),unbookmarkedChapters:bt.getNonBookmarked(l),bookmarkedChapters:bt.getBookmarked(l),unreadChapters:bt.getNonRead(l),readChapters:bt.getRead(l)}}),[l]),S=_.downloadableChapters,O=_.downloadedChapters,I=_.unbookmarkedChapters,L=_.bookmarkedChapters,M=_.unreadChapters,P=_.readChapters,E=function(e,r){var o,a="mark_prev_as_read"===e,i=a?"mark_as_read":e;if("delete"===i&&t&&!ke.isDeletable(t,j))return void c();var l=function(){if(!t)return bt.getChapters(r);if(!a)return[t];var e=n.findIndex((function(e){return e.id===t.id}));return e+1>n.length-1?[]:n.slice(e+1)}();l.length?(ke.performAction(i,ke.getIds(l),{chapters:l,wasManuallyMarkedAsRead:!0,trackProgressMangaId:null===(o=l[0])||void 0===o?void 0:o.mangaId}).catch(y()),c()):c()};return s.jsxs(s.Fragment,{children:[d&&s.jsx(te,{onClick:function(){null==r||r(t.id,!0),c()},Icon:ne,title:u("chapter.action.label.select")}),d&&s.jsx(te,{Icon:mt,disabled:!t.realUrl,onClick:function(){window.open(t.realUrl,"_blank","noopener,noreferrer"),c()},title:u("chapter.action.label.open_on_source")}),k(a)&&s.jsx(te,{Icon:v,disabled:C(!S.length),onClick:function(){return E("download",S)},title:w("download",S.length)}),k(f)&&s.jsx(te,{Icon:we,disabled:C(!O.length),onClick:function(){return E("delete",bt.getDeletable(O,j))},title:w("delete",O.length)}),k(!x)&&s.jsx(te,{Icon:dt,disabled:C(!I.length),onClick:function(){return E("bookmark",I)},title:w("bookmark",I.length)}),k(x)&&s.jsx(te,{Icon:it,disabled:C(!L.length),onClick:function(){return E("unbookmark",L)},title:w("unbookmark",L.length)}),k(!b)&&s.jsx(te,{Icon:re,disabled:C(!M.length),onClick:function(){return E("mark_as_read",M)},title:w("mark_as_read",M.length)}),k(b)&&s.jsx(te,{Icon:oe,disabled:C(!P.length),onClick:function(){return E("mark_as_unread",P)},title:w("mark_as_unread",P.length)}),d&&s.jsx(te,{onClick:function(){return E("mark_prev_as_read",[])},Icon:Qe,title:u("chapter.action.mark_as_read.add.label.action.previous")})]})},jt=function(e){var t=p().t,n=b(),r=m.useRef(null),o=e.chapter,a=e.allChapters,i=e.downloadChapter,l=e.showChapterNumber,c=e.onSelect,u=e.selected,h=null!==u,f=o.isDownloaded,g=function(e){h&&(e.preventDefault(),e.stopPropagation(),c(!u,e.shiftKey))},v=function(e,t){e.stopPropagation(),e.preventDefault(),t(e)},y=ce((function(e,t){var n=t.context;h||!r.current?(e.shiftKey=!0,g(e)):v(e,(function(){return null==n?void 0:n(r.current)}))}));return s.jsx("li",{children:s.jsx(x,{variant:"popover",popupId:"chapter-card-action-menu",children:function(e){var p;return s.jsxs(s.Fragment,{children:[s.jsx($,{sx:{position:"relative",margin:1,touchCallout:"none"},children:s.jsx(X,d(d({component:j,to:"/manga/".concat(o.manga.id,"/chapter/").concat(o.sourceOrder),style:{color:n.palette.text[o.isRead?"disabled":"primary"]},onClick:function(e){return g(e)}},y(e.open)),{},{children:s.jsxs(_e,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:2,"&:last-child":{pb:2}},children:[s.jsxs(w,{direction:"column",flex:1,children:[s.jsxs(k,{variant:"h5",component:"h2",children:[o.isBookmarked&&s.jsx(tt,{color:"primary",sx:{mr:.5,position:"relative",top:"0.15em"}}),l?"".concat(t("chapter.title")," ").concat(o.chapterNumber):o.name]}),s.jsx(k,{variant:"caption",children:o.scanlator}),s.jsxs(k,{variant:"caption",children:[xe(Number(null!==(p=o.uploadDate)&&void 0!==p?p:0),!0),f&&" • ".concat(t("chapter.status.label.downloaded"))]})]}),i&&s.jsx(je,{download:i}),null===u?s.jsx(C,{title:t("global.button.options"),children:s.jsx(_,d(d({ref:r},S(e)),{},{onClick:function(t){return v(t,e.open)},onTouchStart:function(t){return v(t,e.open)},"aria-label":"more",size:"large",children:s.jsx(ue,{})}))}):s.jsx(C,{title:t(u?"global.button.deselect":"global.button.select"),children:s.jsx(Se,{checked:u})})]})}))}),!h&&e.isOpen&&s.jsx(se,d(d({},O(e)),{},{children:function(e){return s.jsx(xt,{onClose:e,chapter:o,allChapters:a,handleSelection:function(){return c(!0)},canBeDownloaded:!o.isDownloaded&&!i})}}))]})}})})};function wt(e){var t=p().t,n=e.chapterIndex,r=e.mangaId;return s.jsxs(Ie,{component:j,variant:"extended",color:"primary",to:"/manga/".concat(r,"/chapter/").concat(n),children:[s.jsx(Oe,{}),t(1===n?"global.button.start":"global.button.resume")]})}var kt={active:!1,unread:void 0,downloaded:void 0,bookmarked:void 0,reverse:!1,sortBy:"source",showChapterNumber:!1};function Ct(e,t){switch(t.type){case"filter":return d(d({},e),{},h({active:!1!==e.unread&&!1!==e.downloaded&&!1!==e.bookmarked},t.filterType,t.filterValue));case"sortBy":return d(d({},e),{},{sortBy:t.sortBy});case"sortReverse":return d(d({},e),{},{reverse:!e.reverse});case"showChapterNumber":return d(d({},e),{},{showChapterNumber:!e.showChapterNumber});default:throw Error(L("global.error.label.invalid_action"))}}var _t=[["source","global.sort.label.by_source"],["fetchedAt","global.sort.label.by_fetch_date"]],St={filter:"global.label.filter",sort:"global.label.sort",display:"global.label.display"},Ot=function(e){var t=e.open,n=e.onClose,r=e.options,o=e.optionsDispatch,a=p().t;return s.jsx(De,{open:t,onClose:n,minHeight:150,tabs:["filter","sort","display"],tabTitle:function(e){return a(St[e])},tabContent:function(e){return"filter"===e?s.jsxs(s.Fragment,{children:[s.jsx(Re,{label:a("global.filter.label.unread"),checked:r.unread,onChange:function(e){return o({type:"filter",filterType:"unread",filterValue:e})}}),s.jsx(Re,{label:a("global.filter.label.downloaded"),checked:r.downloaded,onChange:function(e){return o({type:"filter",filterType:"downloaded",filterValue:e})}}),s.jsx(Re,{label:a("global.filter.label.bookmarked"),checked:r.bookmarked,onChange:function(e){return o({type:"filter",filterType:"bookmarked",filterValue:e})}})]}):"sort"===e?_t.map((function(e){var t=i(e,2),n=t[0],l=t[1];return s.jsx(Pe,{label:a(l),checked:r.sortBy===n,sortDescending:r.reverse,onClick:function(){return n!==r.sortBy?o({type:"sortBy",sortBy:n}):o({type:"sortReverse"})}},n)})):"display"===e?s.jsxs(Ae,{onChange:function(){return o({type:"showChapterNumber"})},value:r.showChapterNumber,children:[s.jsx(Ee,{label:a("chapter.option.display.label.source_title"),value:!1}),s.jsx(Ee,{label:a("chapter.option.display.label.chapter_number"),value:!0})]}):null}})},It=function(e){var t=e.options,n=e.optionsDispatch,r=p().t,o=i(m.useState(!1),2),a=o[0],l=o[1],c=function(e){var t=e.unread,n=e.downloaded,r=e.bookmarked;return null!=t||null!=n||null!=r}(t);return s.jsxs(s.Fragment,{children:[s.jsx(C,{title:r("settings.title"),children:s.jsx(_,{onClick:function(){return l(!0)},children:s.jsx(Me,{color:c?"warning":void 0})})}),s.jsx(Ot,{open:a,onClose:function(){return l(!1)},options:t,optionsDispatch:n})]})},Lt=M(w)((function(e){return h({margin:8,marginBottom:0,marginRight:"10px",minHeight:40},e.theme.breakpoints.down("md"),{marginRight:0})})),Mt=M(ee)((function(e){return h({listStyle:"none",padding:0,minHeight:"200px"},e.theme.breakpoints.up("md"),{width:"50vw",height:"calc(100vh - 64px - 48px)",margin:0})})),Pt=function(e){var t,n,r,o,a,c=e.manga,u=e.isRefreshing,h=p().t,f=P.useGetDownloadStatus().data,g=null!==(t=null==f?void 0:f.downloadStatus.queue)&&void 0!==t?t:[],b=i((a=c.id,I(Ct,"".concat(a,"filterOptions"),kt)),2),j=b[0],L=b[1],M=P.useGetMangaChapters(c.id,{notifyOnNetworkStatusChange:!0}),B=M.data,T=M.loading,A=M.error,z=M.refetch,F=m.useMemo((function(){var e;return null!==(e=null==B?void 0:B.chapters.nodes)&&void 0!==e?e:[]}),[null==B?void 0:B.chapters.nodes]),W=m.useMemo((function(){return F.map((function(e){return e.id}))}),[F]),G=de(F.length,{itemIds:W,currentKey:"default"}),V=G.areNoItemsSelected,H=G.areAllItemsSelected,U=G.selectedItemIds,q=G.handleSelectAll,K=G.handleSelection,Y=m.useMemo((function(){return function(e,t){var n=t.active?e.filter((function(e){return function(e,t){var n=t.isRead;switch(e){case!0:return!n;case!1:return n;default:return!0}}(t.unread,e)&&function(e,t){var n=t.isDownloaded;switch(e){case!0:return n;case!1:return!n;default:return!0}}(t.downloaded,e)&&function(e,t){var n=t.isBookmarked;switch(e){case!0:return n;case!1:return!n;default:return!0}}(t.bookmarked,e)})):l(e),r="fetchedAt"===t.sortBy?n.sort((function(e,t){var n,r;return Number(null!==(n=e.fetchedAt)&&void 0!==n?n:0)-Number(null!==(r=t.fetchedAt)&&void 0!==r?r:0)})):n;return t.reverse&&r.reverse(),r}(F,j)}),[F,j]),J=null!==(n=null===(r=c.firstUnreadChapter)||void 0===r?void 0:r.sourceOrder)&&void 0!==n?n:1,Q=c.chapters.totalCount===(null===(o=c.latestReadChapter)||void 0===o?void 0:o.sourceOrder),Z=0===c.unreadCount,$=c.downloadCount===c.chapters.totalCount,X=0===F.length,ee=!X&&0===Y.length,te=m.useMemo((function(){return Y.map((function(e){var t=null==g?void 0:g.find((function(t){return t.chapter.sourceOrder===e.sourceOrder&&t.chapter.manga.id===e.manga.id})),n=V?null:U.includes(e.id);return{chapter:e,downloadChapter:t,selected:n}}))}),[g,U,Y]),ne=m.useMemo((function(){var e=te.filter((function(e){return e.selected}));return e.length?s.jsx(Ne,{selectedItemsCount:e.length,title:"chapter.title",children:function(t){return s.jsx(xt,{selectedChapters:e,onClose:t})}}):Q?null:s.jsx(wt,{chapterIndex:J,mangaId:c.id})}),[te,Q]);return T||X&&u?s.jsx(w,{sx:{justifyContent:"center",alignItems:"center",position:"relative",flexGrow:1},children:s.jsx(E,{})}):A?s.jsx(w,{sx:{justifyContent:"center",position:"relative",flexGrow:1},children:s.jsx(R,{message:h("global.error.label.failed_to_load_data"),messageExtra:A.message,retry:function(){return z().catch(y())}})}):s.jsxs(s.Fragment,{children:[s.jsxs(w,{direction:"column",sx:{position:"relative"},children:[s.jsxs(Lt,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[s.jsx(k,{variant:"h5",children:"".concat(Y.length," ").concat(h("chapter.title",{count:Y.length}))}),s.jsxs(w,{direction:"row",sx:{paddingRight:"24px"},children:[s.jsx(C,{title:h("chapter.action.mark_as_read.add.label.action.current"),children:s.jsx(_,{disabled:Z,onClick:function(){return ke.markAsRead(bt.getChapters(bt.getNonRead(te)),!0,c.id)},children:s.jsx(Qe,{})})}),s.jsx(x,{variant:"popover",popupId:"chapterlist-download-button",children:function(e){return s.jsxs(s.Fragment,{children:[s.jsx(C,{title:h("chapter.action.download.add.label.action"),children:s.jsx(_,d(d({disabled:$},S(e)),{},{children:s.jsx(v,{})}))}),e.isOpen&&s.jsx(D,d(d({},O(e)),{},{children:s.jsx(he,{mangaIds:[c.id],closeMenu:e.close})}))]})}}),s.jsx(It,{options:j,optionsDispatch:L}),s.jsx(Be,{areAllItemsSelected:H,areNoItemsSelected:V,onChange:function(e){return q(e,e?F.map((function(e){return e.id})):[])}})]})]}),X&&s.jsx(R,{message:h("chapter.error.label.no_chapter_found")}),ee&&s.jsx(R,{message:h("chapter.error.label.no_matches")}),s.jsx(Mt,{style:{height:"undefined",overflowY:window.innerWidth<900?"visible":"auto"},components:{Footer:function(){return s.jsx(N,{sx:{paddingBottom:Le}})}},totalCount:Y.length,itemContent:function(e){return s.jsx(jt,d(d({},te[e]),{},{allChapters:F,showChapterNumber:j.showChapterNumber,onSelect:function(t,n){return K(te[e].chapter.id,t,{selectRange:n})}}))},useWindowScroll:window.innerWidth<900,overscan:.5*window.innerHeight})]}),ne]})},Et=function(t){var r=t.children,o=n(t,e);return s.jsx(B,d(d({},o),{},{children:s.jsx(w,{direction:"row",alignItems:"center",justifyContent:"center",gap:"10px",flexWrap:"wrap",children:r})}))},Rt={},Dt=u;Object.defineProperty(Rt,"__esModule",{value:!0});var Nt=Rt.default=void 0,Bt=Dt(c()),Tt=s;Nt=Rt.default=(0,Bt.default)((0,Tt.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");var At=function(e){var t,n,r=e.manga,o=p().t,a=T(),i=P.useGetTrackerList(),l=r.trackRecords.nodes,c=fe.getLoggedIn(null!==(t=null===(n=i.data)||void 0===n?void 0:n.trackers.nodes)&&void 0!==t?t:[]),u=fe.getLoggedIn(fe.getTrackers(l)),h=function(e){i.error?F(o("tracking.error.label.could_not_load_track_info"),"error"):c.length?e():a("/settings/trackingSettings")};return s.jsx(x,{variant:"dialog",popupId:"manga-track-modal",children:function(e){return s.jsxs(s.Fragment,{children:[s.jsxs(Et,d(d({},S(e)),{},{disabled:i.loading||!!i.error,onClick:function(){return h(e.open)},onTouchStart:function(){return h(e.open)},size:"large",sx:{color:u.length?"#2196f3":"inherit"},children:[u.length?s.jsx(Nt,{}):s.jsx(Ge,{}),u.length?o("manga.button.track.active",{count:u.length}):o("manga.button.track.start")]})),s.jsx(A,d(d({},z(e)),{},{maxWidth:"md",fullWidth:!0,scroll:"paper",children:s.jsx(pe,{manga:r})}))]})}})},zt=M("div")((function(e){return h({width:"100%"},e.theme.breakpoints.up("md"),{position:"sticky",top:"64px",left:"0px",width:"50vw",height:"calc(100vh - 64px)",alignSelf:"flex-start",overflowY:"auto"})})),Ft=M("div")((function(){return{padding:"10px"}})),Wt=M("div")((function(){return{display:"flex"}})),Gt=M("div")((function(){return{"& img":{borderRadius:4,maxWidth:"100%",minWidth:"100%",height:"auto"},maxWidth:"50%"}})),Vt=M("div")((function(e){return h({marginLeft:15,maxWidth:"100%","& span":{fontWeight:"400"}},e.theme.breakpoints.up("lg"),{fontSize:"1.3em"})})),Ht=M("div")((function(e){return{display:"flex",justifyContent:"space-around","& button, a":h({borderRadius:"25px",textTransform:"none",paddingLeft:"20px",paddingRight:"20px",fontSize:"x-large"},e.theme.breakpoints.down("sm"),{fontSize:"larger"})}})),Ut=M("div")((function(e){var t=e.theme;return h(h({paddingLeft:"10px",paddingRight:"10px"},t.breakpoints.up("md"),{fontSize:"1.2em"}),t.breakpoints.up("lg"),{fontSize:"1.3em"})})),qt=M("div")((function(){return{"& h4":{marginTop:"1em",marginBottom:0},"& p":{textAlign:"justify",textJustify:"inter-word"}}})),Kt=M("div")((function(){return{display:"flex",flexWrap:"wrap","& h5":{border:"2px solid #2196f3",borderRadius:"1.13em",marginRight:"1em",marginTop:0,marginBottom:"10px",padding:"0.3em",color:"#2196f3"}}})),Yt=function(e){var t=e.url,n=p().t,r=m.useMemo((function(){return s.jsxs(Et,{size:"large",disabled:!t,sx:{color:"inherit"},component:Ve,href:null!=t?t:void 0,target:"_blank",rel:"noreferrer",children:[s.jsx(mt,{}),n("global.button.open_site")]})}),[t]);return r};function Jt(e){return e||"UNKNOWN"}var Qt=function(e){var t=e.manga,n=p().t;m.useEffect((function(){t.source||F(L("source.error.label.source_not_found"),"error")}),[t.source]);var r,o,a=ge(t),i=a.CategorySelectComponent,l=a.updateLibraryState;return s.jsxs(s.Fragment,{children:[s.jsxs(zt,{children:[s.jsxs(Ft,{children:[s.jsxs(Wt,{children:[s.jsx(Gt,{children:s.jsx(We,{src:Fe.getThumbnailUrl(t),alt:"Manga Thumbnail"})}),s.jsxs(Vt,{children:[s.jsx("h1",{children:t.title}),s.jsxs("h3",{children:["".concat(n("manga.label.author"),": "),s.jsx("span",{children:Jt(t.author)})]}),s.jsxs("h3",{children:["".concat(n("manga.label.artist"),": "),s.jsx("span",{children:Jt(t.artist)})]}),s.jsx("h3",{children:"".concat(n("manga.label.status"),": ").concat(t.status)}),s.jsx("h3",{children:"".concat(n("source.title"),": ").concat((r=t.source,r?null!==(o=r.displayName)&&void 0!==o?o:r.id:L("global.label.unknown")))})]})]}),s.jsxs(Ht,{children:[s.jsxs(Et,{onClick:l,size:"large",sx:{color:t.inLibrary?"#2196f3":"inherit"},children:[t.inLibrary?s.jsx(ze,{}):s.jsx(me,{}),t.inLibrary?n("manga.button.in_library"):n("manga.button.add_to_library")]}),s.jsx(At,{manga:t}),s.jsx(Yt,{url:t.realUrl})]})]}),s.jsxs(Ut,{children:[s.jsxs(qt,{children:[s.jsx("h4",{children:n("settings.about.title")}),s.jsx("p",{style:{whiteSpace:"pre-line"},children:t.description})]}),s.jsx(Kt,{children:t.genre.map((function(e){return s.jsx("h5",{children:e},e)}))})]})]}),i]})},Zt=function(e){var t,n,r=e.manga,o=e.onRefresh,a=e.refreshing,l=p().t,c=b(),u=W(c.breakpoints.up("sm")),d=i(G.useState(null),2),h=d[0],f=d[1],g=Boolean(h),m=function(){f(null)},v=ve({mangaId:r.id}),y=v.openCategorySelect,x=v.CategorySelectComponent;return s.jsxs(s.Fragment,{children:[u&&s.jsxs(s.Fragment,{children:[s.jsx(C,{title:l("manga.label.reload_from_source"),children:s.jsx(_,{onClick:function(){o()},disabled:a,children:s.jsx(V,{})})}),r.inLibrary&&s.jsxs(s.Fragment,{children:[s.jsx(C,{title:l("global.button.migrate"),children:s.jsx(j,{to:"/migrate/source/".concat(null===(t=r.source)||void 0===t?void 0:t.id,"/manga/").concat(r.id,"/search?query=").concat(r.title),state:{mangaTitle:r.title},style:{textDecoration:"none",color:"inherit"},children:s.jsx(_,{children:s.jsx(ye,{})})})}),s.jsx(C,{title:l("manga.label.edit_categories"),children:s.jsx(_,{onClick:function(){y(!0)},children:s.jsx(be,{})})})]})]}),!u&&s.jsxs(s.Fragment,{children:[s.jsx(_,{id:"chaptersMenuButton","aria-controls":g?"chaptersMenu":void 0,"aria-haspopup":"true","aria-expanded":g?"true":void 0,onClick:function(e){return f(e.currentTarget)},children:s.jsx(Te,{})}),s.jsxs(D,{id:"chaptersMenu",anchorEl:h,open:g,onClose:m,MenuListProps:{"aria-labelledby":"chaptersMenuButton"},children:[s.jsxs(H,{onClick:function(){o(),m()},disabled:a,children:[s.jsx(U,{children:s.jsx(V,{fontSize:"small"})}),s.jsx(q,{children:l("manga.label.reload_from_source")})]}),r.inLibrary&&[s.jsxs(H,{component:j,to:"/migrate/source/".concat(null===(n=r.source)||void 0===n?void 0:n.id,"/manga/").concat(r.id,"/search?query=").concat(r.title),state:{mangaTitle:r.title},style:{textDecoration:"none",color:"inherit"},children:[s.jsx(U,{children:s.jsx(ye,{fontSize:"small"})}),s.jsx(q,{children:l("migrate.title")})]},"migrate"),s.jsxs(H,{onClick:function(){y(!0),m()},children:[s.jsx(U,{children:s.jsx(be,{fontSize:"small"})}),s.jsx(q,{children:l("manga.label.edit_categories")})]},"categories")]]})]}),x]})};t("Manga",(function(){var e=p().t,t=m.useContext(K),n=t.setTitle,o=t.setAction,l=Y().id,c=m.useRef(!1),u=P.useGetManga(l),d=u.data,h=u.error,f=u.loading,g=u.networkStatus,v=u.refetch,y=Z(g),b=null==d?void 0:d.manga,x=function(e){var t=i(m.useState(!1),2),n=t[0],o=t[1],l=i(m.useState(null),2),c=l[0],u=l[1];return[m.useCallback(a(r().mark((function t(){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o(!0),u(null),t.next=4,Promise.all([P.getMangaFetch(e,{awaitRefetchQueries:!0}).response,P.getMangaChaptersFetch(e,{awaitRefetchQueries:!0}).response]).catch((function(e){return u(e)})).finally((function(){return o(!1)}));case 4:case"end":return t.stop()}}),t)}))),[e]),{loading:n,error:c}]}(l),j=i(x,2),k=j[0],S=j[1],O=S.loading,I=S.error;J("library");var L=null!=h?h:I;return m.useEffect((function(){null!=b&&(!c.current&&!b.initialized&&(c.current=!0,k()))}),[b]),m.useEffect((function(){var t;return n(null!==(t=null==b?void 0:b.title)&&void 0!==t?t:e("manga.title")),o(null),function(){n(""),o(null)}}),[e,null==b?void 0:b.title]),m.useEffect((function(){var t;return o(s.jsxs(w,{direction:"row",alignItems:"center",children:[L&&!y&&!O&&s.jsx(C,{title:s.jsxs(s.Fragment,{children:[e("manga.error.label.request_failure"),s.jsx("br",{}),null!==(t=L.message)&&void 0!==t?t:L]}),children:s.jsx(_,{onClick:function(){return v()},children:s.jsx(Ue,{color:"error"})})}),b&&(O||y)&&s.jsx(_,{disabled:!0,children:s.jsx(Q,{size:16})}),b&&s.jsx(Zt,{manga:b,onRefresh:k,refreshing:O})]})),function(){o(null)}}),[e,L,y,O,b,k]),L&&!b?s.jsx(R,{message:e("manga.error.label.request_failure"),messageExtra:L.message}):s.jsxs(N,{sx:{display:{md:"flex"},overflow:"hidden"},children:[f&&s.jsx(E,{}),b&&s.jsx(Qt,{manga:b}),b&&s.jsx(Pt,{manga:b,isRefreshing:O})]})}))}}}))}();
