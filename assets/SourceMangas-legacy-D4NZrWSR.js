!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return n};var r,n={},a=Object.prototype,o=a.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},u="function"==typeof Symbol?Symbol:{},c=u.iterator||"@@iterator",l=u.asyncIterator||"@@asyncIterator",s=u.toStringTag||"@@toStringTag";function f(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{f({},"")}catch(r){f=function(e,t,r){return e[t]=r}}function d(e,t,r,n){var a=t&&t.prototype instanceof x?t:x,o=Object.create(a.prototype),u=new I(n||[]);return i(o,"_invoke",{value:O(e,r,u)}),o}function h(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}n.wrap=d;var p="suspendedStart",g="suspendedYield",v="executing",y="completed",m={};function x(){}function b(){}function j(){}var S={};f(S,c,(function(){return this}));var w=Object.getPrototypeOf,F=w&&w(w(A([])));F&&F!==a&&o.call(F,c)&&(S=F);var E=j.prototype=x.prototype=Object.create(S);function L(e){["next","throw","return"].forEach((function(t){f(e,t,(function(e){return this._invoke(t,e)}))}))}function k(t,r){function n(a,i,u,c){var l=h(t[a],t,i);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==e(f)&&o.call(f,"__await")?r.resolve(f.__await).then((function(e){n("next",e,u,c)}),(function(e){n("throw",e,u,c)})):r.resolve(f).then((function(e){s.value=e,u(s)}),(function(e){return n("throw",e,u,c)}))}c(l.arg)}var a;i(this,"_invoke",{value:function(e,t){function o(){return new r((function(r,a){n(e,t,r,a)}))}return a=a?a.then(o,o):o()}})}function O(e,t,n){var a=p;return function(o,i){if(a===v)throw Error("Generator is already running");if(a===y){if("throw"===o)throw i;return{value:r,done:!0}}for(n.method=o,n.arg=i;;){var u=n.delegate;if(u){var c=C(u,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===p)throw a=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=v;var l=h(e,t,n);if("normal"===l.type){if(a=n.done?y:g,l.arg===m)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(a=y,n.method="throw",n.arg=l.arg)}}}function C(e,t){var n=t.method,a=e.iterator[n];if(a===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=r,C(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var o=h(a,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,m;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,m):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function I(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function A(t){if(t||""===t){var n=t[c];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function e(){for(;++a<t.length;)if(o.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}throw new TypeError(e(t)+" is not iterable")}return b.prototype=j,i(E,"constructor",{value:j,configurable:!0}),i(j,"constructor",{value:b,configurable:!0}),b.displayName=f(j,s,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,j):(e.__proto__=j,f(e,s,"GeneratorFunction")),e.prototype=Object.create(E),e},n.awrap=function(e){return{__await:e}},L(k.prototype),f(k.prototype,l,(function(){return this})),n.AsyncIterator=k,n.async=function(e,t,r,a,o){void 0===o&&(o=Promise);var i=new k(d(e,t,r,a),o);return n.isGeneratorFunction(t)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},L(E),f(E,s,"Generator"),f(E,c,(function(){return this})),f(E,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},n.values=A,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(_),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,a){return u.type="throw",u.arg=e,t.next=n,a&&(t.method="next",t.arg=r),!!a}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],u=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),l=o.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),_(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;_(r)}return a}}throw Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:A(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=r),m}},n}function r(e,t,r,n,a,o,i){try{var u=e[o](i),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,a)}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(t,r,n){return(r=function(t){var r=function(t,r){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var a=n.call(t,r||"default");if("object"!=e(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==e(r)?r:r+""}(r))in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}function i(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,i,u=[],c=!0,l=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=o.call(r)).done)&&(u.push(n.value),u.length!==t);c=!0);}catch(e){l=!0,a=e}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(l)throw a}}return u}}(e,t)||c(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){if(e){if("string"==typeof e)return l(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}System.register(["./index-legacy-Cvtb_HX5.js","./AppbarSearch-legacy-Cyem2RFT.js","./FilterList-legacy-BCIwffr7.js","./GridLayouts-legacy-CBYT1A7D.js","./SortRadioInput-legacy-Bs_2_Tpv.js","./ExpandMore-legacy-BIlDg6U9.js","./useDebounce-legacy-Ce3sxdde.js","./StyledFab-legacy-C-BH3SHq.js","./Chip-legacy-MB3yR76N.js","./BaseMangaGrid-legacy-Dv8Ufo7o.js","./MangaGrid-legacy-DH4_m3T9.js","./ChaptersDownloadActionMenuItems-legacy-CZOFIl1k.js","./Trackers-legacy-CN_LuGVd.js","./Avatar-legacy-B9O0_SbZ.js","./CheckCircle-legacy-B-8o_r-M.js","./ListPreference-legacy-DpiA76Sr.js","./NumberSetting-legacy-DNn0Q4eL.js","./useMobilePicker-legacy-Bhfd-8KK.js","./SelectSetting-legacy-CmIBwo5B.js","./Sync-legacy-C7K9LcLA.js","./PlayArrow-legacy-_w6Qo8hY.js"],(function(e,n){"use strict";var c,l,s,f,d,h,p,g,v,y,m,x,b,j,S,w,F,E,L,k,O,C,P,_,I,A,T,M,V,D,N,G,R,U,B,H,q,z,W,Y,$,J,K,Q,X,Z,ee,te,re,ne,ae,oe,ie,ue,ce,le,se,fe,de,he,pe,ge,ve,ye,me,xe,be,je,Se,we,Fe,Ee,Le,ke,Oe,Ce,Pe;return{setters:[function(e){c=e.h,l=e.a5,s=e.j,f=e.c,d=e.aO,h=e.a6,p=e.T,g=e.aR,v=e.bA,y=e.bB,m=e.bC,x=e.B,b=e.b5,j=e.aT,S=e.aM,w=e.d,F=e.i,E=e.bD,L=e.bE,k=e.$,O=e.bF,C=e.bc,P=e.u,_=e.e,I=e.ao,A=e.l,T=e.I,M=e.ap,V=e.D,D=e.ay,N=e.s,G=e.t,R=e.bu,U=e.b1,B=e.Y,H=e.bG,q=e.o,z=e.bH,W=e.bI,Y=e.bJ,$=e.bK,J=e.g,K=e.aU,Q=e.bL,X=e.k,Z=e.v,ee=e.x,te=e.bM,re=e.bN,ne=e.r,ae=e.bO,oe=e.aK,ie=e.p,ue=e.A,ce=e.a_,le=e.E,se=e.ag,fe=e.aA,de=e.bP,he=e.n,pe=e.bQ,ge=e.q},function(e){ve=e.a,ye=e.u,me=e.A,xe=e.S},function(e){be=e.F},function(e){je=e.G},function(e){Se=e.S,we=e.O},function(e){Fe=e.a,Ee=e.E},function(e){Le=e.u},function(e){ke=e.S},function(e){Oe=e.C},function(e){Ce=e.B},function(e){Pe=e.g},null,null,null,null,null,null,null,null,null,null],execute:function(){function n(){var e=u(c("source-grid-layout",l.Compact),2),t=e[0],r=e[1];return s.jsx(je,{gridLayout:t,onChange:r})}e("SourceMangas",(function(){var e,t,r,i,f,d=P().t,h=J(),p=h.setTitle,g=h.setAction,v=h.appBarHeight,y=K().sourceId,m=u(Q(),2),x=m[0],b=m[1],j=X(),S=Z(),w=S.key,E=S.state,L=null!==(e=Z().state)&&void 0!==e?e:{},k=L.contentType,O=void 0===k?0:k,C=L.clearCache,_=void 0!==C&&C,I=ee().settings.hideLibraryEntries,M=u(c("source-grid-layout",l.Compact),1)[0],V=u(ye("query",xe),1)[0],D=u(te("source-mangas-".concat(y,"-filters"),[]),2),N=D[0],G=D[1],R=u(te("source-mangas-location-".concat(w,"-").concat(y,"-filters"),null!=N?N:[]),2),U=R[0],B=R[1],H=u(F.useState(U),2),z=H[0],W=H[1],Y=u(te("source-mangas-".concat(y,"-content-type"),O),2),$=Y[0],se=Y[1],ve=u(te("source-mangas-location-".concat(w,"-").concat(y,"-content-type"),V?2:$),2),je=ve[0],Se=ve[1],we=F.useCallback((function(){re.session.setItem(Pe(S),void 0,!1),window.scrollTo(0,0)}),[w]),Fe=F.useRef(V),Ee=F.useRef((function(){}));Fe.current!==V&&2===je&&(Fe.current=V,Ee.current(new Error("SourceMangas(".concat(y,"): search string changed"))),we());F.useEffect((function(){return function(){G(void 0),se(void 0)}}),[y]);var Le=function(e){G(e),B(e),we()},ke=function(e){se(e),Se(e)},Oe=u(tt(y,je,V,U,1,I),2),_e=Oe[0],Ie=Oe[1],Ae=Ie.data,Te=Ie.error,Me=Ie.isLoading,Ve=Ie.size,De=Ie.abortRequest,Ne=Ie.filteredOutAllItemsOfFetchedPage;Ee.current=De;var Ge=Me||Ne,Re=null!==(t=null==Ae||null===(r=Ae.fetchSourceManga)||void 0===r?void 0:r.mangas)&&void 0!==t?t:[],Ue=!(null==Ae||null===(i=Ae.fetchSourceManga)||void 0===i||!i.hasNextPage),He=ne.useGetSource(ae,y).data,qe=null==He?void 0:He.source,ze=null!==(f=null==qe?void 0:qe.filters)&&void 0!==f?f:[],Ye=We(null!=qe?qe:Je).savedSearches,Ze=void 0===Ye?{}:Ye,rt=$e(null!=qe?qe:{id:"-1"},(function(e){return ge(d("global.error.label.failed_to_save_changes"),"error",he(e))})),nt=F.useCallback((function(e){var t=Ze[e],r=t.query,n=t.filters;n&&(W(n),Le(n)),r&&(x.set("query",r),b(x))}),[Ze,E]),at=F.useCallback((function(e,t){if("delete"===t){var r=a({},Ze);return delete r[e],void rt("savedSearches",r)}var n=a(a({},Ze),{},o({},e,{query:null!=V?V:void 0,filters:z}));rt("savedSearches",n)}),[Ze,V,z]),ot=Ge?void 0:d(et[je]),it="0"===y?s.jsxs(s.Fragment,{children:[s.jsxs("span",{children:[d("source.local_source.label.checkout")," "]}),s.jsx(oe,{href:"https://github.com/Suwayomi/Suwayomi-Server/wiki/Local-Source",target:"_blank",rel:"noreferrer",children:d("source.local_source.label.guide")})]}):void 0,ut=F.useCallback((function(e,t){ke(e),we(),V&&!t&&j({pathname:""},{state:a(a({},E),{},{contentType:e})})}),[ke,V,we]);V&&2!==je&&ut(2,V);var ct=F.useCallback((function(){Ue&&_e(Ve+1)}),[Ve,Ue,je]);F.useEffect((function(){Ne&&Ue&&!Me&&_e(Ve+1)}),[Ne,Me]),F.useEffect((function(){_&&(pe.REVALIDATION.includes(y)&&ne.clearBrowseCacheFor(y))}),[_]),F.useLayoutEffect((function(){var e;return p(null!==(e=null==qe?void 0:qe.displayName)&&void 0!==e?e:d("source.title_one")),g(s.jsxs(s.Fragment,{children:[s.jsx(me,{}),s.jsx(n,{}),(null==qe?void 0:qe.isConfigurable)&&s.jsx(A,{title:d("settings.title"),children:s.jsx(T,{onClick:function(){return j(ue.sources.childRoutes.configure.path(y))},"aria-label":"display more actions",edge:"end",color:"inherit",children:s.jsx(ie,{})})})]})),function(){p(""),g(null)}}),[d,qe]);var lt=Re.length?ce:le;return s.jsxs(Xe,{children:[s.jsxs(Ke,{sx:{top:"".concat(v,"px")},children:[s.jsx(Qe,{variant:0===je?"contained":"outlined",startIcon:s.jsx(fe,{}),onClick:function(){return ut(0)},children:d("global.button.popular")}),void 0===(null==qe?void 0:qe.supportsLatest)||qe.supportsLatest?s.jsx(Qe,{disabled:!(null!=qe&&qe.supportsLatest),variant:1===je?"contained":"outlined",startIcon:s.jsx(de,{}),onClick:function(){return ut(1)},children:d("global.button.latest")}):null,s.jsx(Qe,{variant:2===je?"contained":"outlined",startIcon:s.jsx(be,{}),onClick:function(){return ut(2,V)},children:d("global.button.filter")})]}),(Ge||!Te||!!Te&&!!Re.length)&&s.jsx(Ce,{gridWrapperProps:{sx:{px:1,pb:1}},mangas:Re,hasNextPage:Ue,loadMore:ct,message:ot,messageExtra:it,isLoading:Ge,gridLayout:M,mode:"source",inLibraryIndicator:!0},je),Te&&s.jsx(lt,{message:d("global.error.label.failed_to_load_data"),messageExtra:he(Te),retry:function(){return _e(Ve).catch(q())}}),2===je&&s.jsx(Be,{savedSearches:Ze,selectSavedSearch:nt,updateSavedSearches:at,sourceFilter:ze,updateFilterValue:W,setTriggerUpdate:function(){Le(z)},resetFilterValue:function(){W([]),Le([])},update:z})]})}));var _e=f(s.jsx("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3m3-10H5V5h10z"})),Ie=function(e){var t=e.state,r=e.name,n=e.position,a=e.group,o=e.updateFilterValue,c=e.update,l=u(d.useState(t),2),f=l[0],p=l[1];return void 0!==t?s.jsx(h,{label:r,checked:f,onChange:function(e){p(e.target.checked);var t=c.filter((function(e){return!(n===e.position&&a===e.group)}));o([].concat(i(t),[{type:"checkBoxState",position:n,state:e.target.checked,group:a}]))}}):null},Ae=function(e){var t=e.name;return s.jsx(p,{sx:{mt:2},variant:"subtitle2",children:t},t)};var Te=function(e){return function(e,t,r,n,a,o,c){var l=u(d.useState(r),2),f=l[0],h=l[1];if(e){var p=e.map((function(e){return s.jsx(g,{value:e,children:e},"".concat(t," ").concat(e))}));return s.jsxs(v,{sx:{my:1},variant:"standard",children:[s.jsx(y,{children:t}),s.jsx(m,{name:t,value:e[f],label:t,onChange:function(t){var r=e.indexOf("".concat(t.target.value));h(r);var u=o.filter((function(e){return!(n===e.position&&c===e.group)}));a([].concat(i(u),[{type:"selectState",position:n,state:r,group:c}]))},children:p})]})}return null}(e.values,e.name,e.state,e.position,e.updateFilterValue,e.update,e.group)},Me=function(e){var t=e.values,r=e.name,n=e.state,a=e.position,o=e.group,c=e.updateFilterValue,l=e.update,f=u(d.useState(n),2),h=f[0],p=f[1],g=u(d.useState(!1),2),v=g[0],y=g[1];if(t){return s.jsxs(x,{sx:{mx:-2},children:[s.jsxs(b,{onClick:function(){y(!v)},children:[s.jsx(j,{primary:r}),v?s.jsx(Fe,{}):s.jsx(Ee,{})]}),s.jsx(S,{in:v,children:s.jsx(w,{sx:{mx:4},children:t.map((function(e,t){return s.jsx(Se,{label:e,checked:h.index===t,sortDescending:!h.ascending,onClick:function(){return function(e){var t=h;t.index===e?t.ascending=!t.ascending:t.ascending=!0,t.index=e,p(t);var r=l.filter((function(e){return!(a===e.position&&o===e.group)}));c([].concat(i(r),[{type:"sortState",position:a,state:t,group:o}]))}(t)}},"".concat(r," ").concat(e))}))})})]})}return null},Ve=function(e){var t=e.state,r=e.name,n=e.position,a=e.group,o=e.updateFilterValue,c=e.update,l=u(d.useState(t||""),2),f=l[0],h=l[1],p=Le(f,500);return F.useEffect((function(){var e=c.filter((function(e){return!(n===e.position&&a===e.group)}));o([].concat(i(e),[{type:"textState",position:n,state:p,group:a}]))}),[p]),void 0!==t?s.jsxs(v,{sx:{my:1},variant:"standard",children:[s.jsx(y,{children:r}),s.jsx(E,{name:r,value:f,onChange:function(e){var t=e.target.value;return h(t)},endAdornment:s.jsx(L,{position:"end",children:s.jsx(ve,{})})})]}):null},De=function(e){switch(e){case 0:return O.Ignore;case 1:return O.Include;case 2:return O.Exclude;default:throw new Error("Unexpected state number ".concat(e))}},Ne=function(e){var t=e.state,r=e.name,n=e.position,a=e.group,o=e.updateFilterValue,c=e.update,l=u(d.useState(function(e){switch(e){case O.Ignore:return 0;case O.Include:return 1;case O.Exclude:return 2;default:throw new Error("Unexpected TriState ".concat(e))}}(t)),2),f=l[0],h=l[1];return void 0!==t?s.jsx(k,{label:r,checked:[void 0,!0,!1][f],onChange:function(e){return function(e){var t=void 0===e?0:e?1:2;h(t);var r=c.filter((function(e){return!(n===e.position&&a===e.group)}));o([].concat(i(r),[{type:"triState",position:n,state:De(t),group:a}]))}(e)}}):null},Ge=function(e){var t=e.state,r=e.name,n=e.position,a=e.updateFilterValue,o=e.update,i=u(d.useState(!1),2),c=i[0],l=i[1];return s.jsxs(x,{sx:{mx:-2},children:[s.jsxs(b,{onClick:function(){return l(!c)},children:[s.jsx(j,{primary:r}),c?s.jsx(Fe,{}):s.jsx(Ee,{})]}),s.jsx(S,{in:c,children:s.jsx(w,{sx:{mx:4},children:s.jsx(Ue,{sourceFilter:t,group:n,updateFilterValue:a,update:o})})})]})},Re=function(e){var t=e.name;return s.jsx(C,{sx:{my:1},textAlign:"center",children:t},t)};function Ue(e){var t=e.sourceFilter,r=e.group,n=e.updateFilterValue,a=e.update;return s.jsx(w,{children:t.map((function(e,t){var o,i,u=a.find((function(e){return e.group===r&&e.position===t}));switch(u=u?u.state:u,e.type){case"CheckBoxFilter":return s.jsx(Ie,{name:e.name,state:null!=u?u:e.CheckBoxFilterDefault,position:t,group:r,updateFilterValue:n,update:a},"filters ".concat(e.name));case"GroupFilter":return s.jsx(Ge,{name:e.name,state:e.filters,position:t,updateFilterValue:n,update:a},"filters ".concat(e.name));case"HeaderFilter":return s.jsx(Ae,{name:e.name},"filters ".concat(e.name));case"SelectFilter":return s.jsx(Te,{name:e.name,values:e.values,state:null!=u?parseInt(u,10):e.SelectFilterDefault,position:t,group:r,updateFilterValue:n,update:a},"filters ".concat(e.name));case"SeparatorFilter":return s.jsx(Re,{name:e.name},"filters ".concat(e.name));case"SortFilter":return s.jsx(Me,{name:e.name,values:e.values,state:null!=u?u:{ascending:null===(o=e.SortFilterDefault)||void 0===o?void 0:o.ascending,index:null===(i=e.SortFilterDefault)||void 0===i?void 0:i.index},position:t,group:r,updateFilterValue:n,update:a},"filters ".concat(e.name));case"TextFilter":return s.jsx(Ve,{name:e.name,state:null!=u?u:e.TextFilterDefault,position:t,group:r,updateFilterValue:n,update:a},"filters ".concat(e.name));case"TriStateFilter":return s.jsx(Ne,{name:e.name,state:null!=u?u:e.TriStateFilterDefault,position:t,group:r,updateFilterValue:n,update:a},"filters ".concat(e.name));default:throw new Error('Unknown source filter "'.concat(e,'"'))}}))},"filters ".concat(r))}function Be(e){var t=e.savedSearches,r=void 0===t?{}:t,n=e.selectSavedSearch,o=e.updateSavedSearches,i=e.sourceFilter,c=e.updateFilterValue,l=e.resetFilterValue,f=e.setTriggerUpdate,d=e.update,h=P().t,g=u(F.useState(!1),2),v=g[0],y=g[1],m=u(F.useState(""),2),b=m[0],j=m[1],S=Object.keys(r),E=!!S.length;return s.jsxs(s.Fragment,{children:[s.jsxs(ke,{onClick:function(){return y(!v)},variant:"extended",color:"primary",children:[s.jsx(be,{}),h("global.button.filter")]}),s.jsxs(we,{open:v,onClose:function(){return y(!1)},children:[s.jsxs(x,{sx:{p:2,pb:E?void 0:0},children:[s.jsxs(x,{sx:{display:"flex",pb:1},children:[s.jsx(_,{onClick:function(){l(0),y(!1)},children:h("global.button.reset")}),s.jsx(I,{variant:"dialog",popupId:"source-browse-save-search",children:function(e){return s.jsxs(s.Fragment,{children:[s.jsx(A,{title:h("source.filter.save_search.label.save"),children:s.jsx(T,a(a({sx:{marginLeft:"auto"}},M(e)),{},{children:s.jsx(_e,{})}))}),s.jsxs(V,a(a({},D(e)),{},{maxWidth:"xs",fullWidth:!0,children:[s.jsx(N,{children:h("source.filter.save_search.dialog.label.title")}),s.jsx(G,{children:s.jsx(R,{sx:{width:"100%"},value:b,onChange:function(e){return j(e.target.value)},slotProps:{htmlInput:{maxLength:50}}})}),s.jsxs(U,{children:[s.jsx(_,{onClick:function(){j(""),e.close()},children:h("global.button.cancel")}),s.jsx(_,{onClick:function(){o(b,"create"),j(""),e.close()},children:h("global.button.ok")})]})]}))]})}}),s.jsx(_,{variant:"contained",onClick:function(){f(0),y(!1)},children:h("global.button.submit")})]}),E&&s.jsxs(s.Fragment,{children:[s.jsx(p,{sx:{pb:1},children:"Saved searches"}),s.jsx(w,{sx:{flexDirection:"row"},children:S.map((function(e){return s.jsx(Oe,{label:e,onClick:function(){y(!1),n(e)},onDelete:function(){H({title:h("global.label.are_you_sure"),message:h("source.filter.save_search.dialog.label.delete",{name:e}),actions:{confirm:{title:h("global.button.delete")}}}).then((function(){return o(e,"delete")})).catch(q())},deleteIcon:s.jsx(A,{title:h("source.filter.save_search.label.delete"),children:s.jsx(B,{})}),variant:"outlined"})}))})]})]}),s.jsx(x,{sx:{pb:2,mx:2},children:s.jsx(Ue,{sourceFilter:i,updateFilterValue:c,group:void 0,update:d})})]})]})}var He={savedSearches:void 0},qe=function(e){return a(a({},e),{},{savedSearches:e.savedSearches?JSON.stringify(e.savedSearches):void 0})},ze=function(e,t){return r=Y("source",a(a({},e),{},{meta:$(e.meta)}),qe(He),void 0,t),a(a({},r),{},{savedSearches:null!==(n=W(r.savedSearches))&&void 0!==n?n:void 0});var r,n},We=function(e){var t=ze(e,F.useEffect);return F.useMemo((function(){return t}),[e])},Ye=function(){var e,n=(e=t().mark((function e(r,n,a){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",z(r,[[n,qe(o({},n,a))[n]]]));case 1:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(a,o){var i=e.apply(t,n);function u(e){r(i,a,o,u,c,"next",e)}function c(e){r(i,a,o,u,c,"throw",e)}u(void 0)}))});return function(e,t,r){return n.apply(this,arguments)}}(),$e=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:q();return function(r,n){return Ye(e,r,n).catch(t)}},Je={id:"-1"},Ke=se("div")((function(e){var t=e.theme;return{display:"flex",position:"sticky",width:"100%",zIndex:1,padding:t.spacing(1),gap:t.spacing(1),backgroundColor:t.palette.background.default}})),Qe=se(_)((function(){return{}})),Xe=se(x)((function(){return{minHeight:"100%",position:"relative"}})),Ze=e("SourceContentType",function(e){return e[e.POPULAR=0]="POPULAR",e[e.LATEST=1]="LATEST",e[e.SEARCH=2]="SEARCH",e}(Ze||{})),et=o(o(o({},0,"manga.error.label.no_mangas_found"),1,"manga.error.label.no_mangas_found"),2,"manga.error.label.no_matches"),tt=function(e,t,r,n,u,c){var l,s;switch(t){case 0:s=ne.useGetSourcePopularMangas(e,u);break;case 1:s=ne.useGetSourceLatestMangas(e,u);break;case 2:s=ne.useSourceSearch(e,null!=r?r:"",n.map((function(e){var t=e.position,r=e.state,n=e.group;return void 0!==n?{position:n,groupChange:o({position:t},e.type,r)}:o({position:t},e.type,r)})),u);break;default:throw new Error('Unknown ContentType "'.concat(t,'"'))}var f=s[1],d=f.findLastIndex((function(e){var t;return!(null===(t=e.data)||void 0===t||!t.fetchSourceManga)})),h=f[d],p=f.slice(-1)[0].isLoading,g=!p,v=F.useMemo((function(){var e=[];return f.forEach((function(t,r){var n,a,o,u,l,s=null!==(n=null===(a=t.data)||void 0===a||null===(a=a.fetchSourceManga)||void 0===a?void 0:a.mangas)&&void 0!==n?n:[],d=s.filter((function(e){return!c||!e.inLibrary})),h=(o=[].concat(i(e),i(d)),u={},l=[],o.forEach((function(e){u[e.id]||(u[e.id]=e,l.push(e))})),l),v=!p&&f.length===r+1;g=v&&!d.length&&!!s.length,e=h})),e}),[f,c]);return-1===d?[s[0],a(a({},s[1][s[1].length-1]),{},{filteredOutAllItemsOfFetchedPage:g})]:[s[0],a(a({},f[f.length-1]),{},{data:a(a({},h.data),{},{fetchSourceManga:a(a({},h.data.fetchSourceManga),{},{hasNextPage:!(f.length>d+1)&&!(null===(l=h.data.fetchSourceManga)||void 0===l||!l.hasNextPage),mangas:v})}),filteredOutAllItemsOfFetchedPage:g})]}}}}))}();
