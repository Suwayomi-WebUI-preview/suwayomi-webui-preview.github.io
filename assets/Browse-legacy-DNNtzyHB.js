!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function n(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(t,n,r){return(n=function(t){var n=function(t,n){if("object"!=e(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,n||"default");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"==e(n)?n:n+""}(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function o(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */o=function(){return n};var t,n={},r=Object.prototype,a=r.hasOwnProperty,i=Object.defineProperty||function(e,t,n){e[t]=n.value},l="function"==typeof Symbol?Symbol:{},s=l.iterator||"@@iterator",c=l.asyncIterator||"@@asyncIterator",u=l.toStringTag||"@@toStringTag";function f(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{f({},"")}catch(t){f=function(e,t,n){return e[t]=n}}function h(e,t,n,r){var o=t&&t.prototype instanceof m?t:m,a=Object.create(o.prototype),l=new N(r||[]);return i(a,"_invoke",{value:k(e,n,l)}),a}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}n.wrap=h;var p="suspendedStart",g="suspendedYield",y="executing",v="completed",x={};function m(){}function j(){}function b(){}var w={};f(w,s,(function(){return this}));var S=Object.getPrototypeOf,E=S&&S(S(A([])));E&&E!==r&&a.call(E,s)&&(w=E);var L=b.prototype=m.prototype=Object.create(w);function C(e){["next","throw","return"].forEach((function(t){f(e,t,(function(e){return this._invoke(t,e)}))}))}function O(t,n){function r(o,i,l,s){var c=d(t[o],t,i);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==e(f)&&a.call(f,"__await")?n.resolve(f.__await).then((function(e){r("next",e,l,s)}),(function(e){r("throw",e,l,s)})):n.resolve(f).then((function(e){u.value=e,l(u)}),(function(e){return r("throw",e,l,s)}))}s(c.arg)}var o;i(this,"_invoke",{value:function(e,t){function a(){return new n((function(n,o){r(e,t,n,o)}))}return o=o?o.then(a,a):a()}})}function k(e,n,r){var o=p;return function(a,i){if(o===y)throw Error("Generator is already running");if(o===v){if("throw"===a)throw i;return{value:t,done:!0}}for(r.method=a,r.arg=i;;){var l=r.delegate;if(l){var s=_(l,r);if(s){if(s===x)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===p)throw o=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=y;var c=d(e,n,r);if("normal"===c.type){if(o=r.done?v:g,c.arg===x)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(o=v,r.method="throw",r.arg=c.arg)}}}function _(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,_(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),x;var a=d(o,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,x;var i=a.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,x):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,x)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function I(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function A(n){if(n||""===n){var r=n[s];if(r)return r.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var o=-1,i=function e(){for(;++o<n.length;)if(a.call(n,o))return e.value=n[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(e(n)+" is not iterable")}return j.prototype=b,i(L,"constructor",{value:b,configurable:!0}),i(b,"constructor",{value:j,configurable:!0}),j.displayName=f(b,u,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===j||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,f(e,u,"GeneratorFunction")),e.prototype=Object.create(L),e},n.awrap=function(e){return{__await:e}},C(O.prototype),f(O.prototype,c,(function(){return this})),n.AsyncIterator=O,n.async=function(e,t,r,o,a){void 0===a&&(a=Promise);var i=new O(h(e,t,r,o),a);return n.isGeneratorFunction(t)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},C(L),f(L,u,"Generator"),f(L,s,(function(){return this})),f(L,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},n.values=A,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(I),!e)for(var n in this)"t"===n.charAt(0)&&a.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(r,o){return l.type="throw",l.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],l=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var s=a.call(i,"catchLoc"),c=a.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,x):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),x},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),I(n),x}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;I(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:A(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),x}},n}function a(e,t,n,r,o,a,i){try{var l=e[a](i),s=l.value}catch(e){return void n(e)}l.done?t(s):Promise.resolve(s).then(r,o)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function l(e){a(i,r,o,l,s,"next",e)}function s(e){a(i,r,o,l,s,"throw",e)}l(void 0)}))}}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,l=[],s=!0,c=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(e){c=!0,o=e}finally{try{if(!s&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(e,t)||c(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){if(e){if("string"==typeof e)return u(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./index-legacy-DsSBfLPe.js","./AppbarSearch-legacy-fitSWWu0.js","./Languages-legacy-BKk6sKlD.js","./SourceMangas-legacy-DT8Di6BR.js","./SpinnerImage-legacy-Dm-a6ndt.js","./LangSelect-legacy-oiivCHiY.js","./Card-legacy-D7bsNh-7.js","./CardActionArea-legacy-CeO1qHoP.js","./CardContent-legacy-DbIR8MUq.js","./Avatar-legacy-B-pZwW0g.js","./EmptyViewAbsoluteCentered-legacy-BgmYkk9h.js","./file-selector-legacy-BqnDAZHX.js","./Add-legacy-0O6FNMxa.js","./Virtuoso.util-legacy-CasGwVvq.js","./Tabs-legacy-DgIHaQ5L.js","./TabsMenu-legacy-CwRqdIuT.js","./SortRadioInput-legacy-CrZS30T4.js","./Chip-legacy-mEq3byt6.js","./useManageMangaLibraryState-legacy-DNZkcTh1.js","./Trackers-legacy-CN_LuGVd.js","./Info-legacy-Dw5J4mej.js","./TextField-legacy-BOdqvy9i.js","./InputAdornment-legacy-BTx1iInn.js","./CheckCircle-legacy-DkHFlh_Z.js","./TypographyMaxLines-legacy-D75f1vxb.js","./Mangas-legacy-BeGnMKXR.js","./Chapters-legacy-ClbL4SWD.js","./Collapse-legacy-WOab0Tzc.js","./Link-legacy-DQ8oRoKG.js","./ListPreference-legacy-DXylv8RS.js","./Checkbox-legacy-Dbxk4fKk.js","./SwitchBase-legacy-BovLdX6G.js","./NumberSetting-legacy-DSwOTo04.js","./useMobilePicker-legacy-CcvXaYlw.js","./SelectSetting-legacy-JayS5d6n.js","./Select-legacy-vqP2wt-d.js","./CheckboxInput-legacy-_xhSd_Dy.js","./ThreeStateCheckboxInput-legacy-CxbXwb2P.js","./ExpandMore-legacy-DkxAxMq3.js","./FilterList-legacy-JQqS88SS.js","./GridLayouts-legacy-BXuSjmkx.js","./Delete-legacy-B7HUT91F.js","./useDebounce-legacy-C906ZQdE.js","./StyledFab-legacy-C3IPTDle.js","./BaseMangaGrid-legacy-DadrHYjE.js","./MangaGrid-legacy-DV1rmKK4.js","./index-legacy-D66AVKyc.js","./Download-legacy-BNblMcUy.js","./Sync-legacy-DStu8wlx.js","./PlayArrow-legacy-CPqn-Kib.js","./Refresh-legacy-DlNpeoGg.js","./cloneObject-legacy-D5k1nSvY.js","./Switch-legacy-BaeRGkj3.js"],(function(e,t){"use strict";var r,a,c,u,f,h,d,p,g,y,v,x,m,j,b,w,S,E,L,C,O,k,_,T,I,N,A,M,P,U,D,F,G,R,H,B,z,V,W,q,K,Y,$,J,Q,X,Z,ee,te,ne,re,oe,ae,ie,le,se,ce,ue,fe,he,de,pe,ge,ye,ve,xe,me,je,be,we;return{setters:[function(e){r=e.r,a=e.i,c=e.j,u=e.u,f=e.M,h=e.L,d=e.B,p=e.a,g=e.T,y=e.S,v=e.b,x=e.c,m=e.N,j=e.d,b=e.e,w=e.f,S=e.I,E=e.g,L=e.h,C=e.m,O=e.k,k=e.l,_=e.s,T=e.n,I=e.o,N=e.p,A=e.q,M=e.t,P=e.v},function(e){U=e.u,D=e.S,F=e.A},function(e){G=e.s,R=e.l,H=e.D,B=e.a,z=e.e},function(e){V=e.SourceContentType},function(e){W=e.S},function(e){q=e.t,K=e.L,Y=e.g,$=e.I,J=e.a,Q=e.E,X=e.b,Z=e.c,ee=e.d,te=e.e,ne=e.f,re=e.i,oe=e.h},function(e){ae=e.C},function(e){ie=e.C},function(e){le=e.C},function(e){se=e.A},function(e){ce=e.E},function(e){ue=e.f},function(e){fe=e.d},function(e){he=e.V,de=e.S,pe=e.a,ge=e.b},function(e){ye=e.T,ve=e.a},function(e){xe=e.T,me=e.a},function(e){je=e.d,be=e.a},function(e){we=e.C},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("Browse",(function(){var e=u().t,t=x.useContext(m).setTitle;x.useLayoutEffect((function(){t(e("global.label.browse"))}),[e]);var n=x.useRef(null),r=l(x.useState(0),2),o=r[0],a=r[1];P(n,x.useCallback((function(){return a(n.current.offsetHeight)}),[n.current]));var i=l(U("tab",D,{}),2),s=i[0],f=i[1],h=null!=s?s:"source";s||f(h,"replaceIn");return c.jsxs(xe,{children:[c.jsxs(me,{ref:n,variant:"fullWidth",value:h,onChange:function(e,t){return f(t,"replaceIn")},children:[c.jsx(ye,{value:"source",sx:{textTransform:"none"},label:e("source.title_one")}),c.jsx(ye,{value:"extensions",sx:{textTransform:"none"},label:e("extension.title_other")}),c.jsx(ye,{value:"migrate",sx:{textTransform:"none"},label:e("migrate.title")})]}),c.jsx(ve,{index:"source",currentIndex:h,children:c.jsx(Te,{})}),c.jsx(ve,{index:"extensions",currentIndex:h,children:c.jsx(Me,{tabsMenuHeight:o})}),c.jsx(ve,{index:"migrate",currentIndex:h,children:c.jsx(qe,{tabsMenuHeight:o})})]})}));var t={},Se=a;Object.defineProperty(t,"__esModule",{value:!0});var Ee=t.default=void 0,Le=Se(r()),Ce=c;Ee=t.default=(0,Le.default)((0,Ce.jsx)("path",{d:"M19.3 16.9c.4-.7.7-1.5.7-2.4 0-2.5-2-4.5-4.5-4.5S11 12 11 14.5s2 4.5 4.5 4.5c.9 0 1.7-.3 2.4-.7l3.2 3.2 1.4-1.4zm-3.8.1c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5M12 20v2C6.48 22 2 17.52 2 12S6.48 2 12 2c4.84 0 8.87 3.44 9.8 8h-2.07c-.64-2.46-2.4-4.47-4.73-5.41V5c0 1.1-.9 2-2 2h-2v2c0 .55-.45 1-1 1H8v2h2v3H9l-4.79-4.79C4.08 10.79 4 11.38 4 12c0 4.41 3.59 8 8 8"}),"TravelExplore");var Oe=function(e){var t=u().t,n=f.useIsMobileWidth(),r=e.source,o=r.id,a=r.name,i=r.lang,l=r.iconUrl,s=r.supportsLatest,x=r.isNsfw,m=r.extension.repo,j=e.showSourceRepo,b=0===Number(o)?t("source.local_source.title"):a;return c.jsx(ae,{sx:{margin:1,marginTop:0},children:c.jsx(ie,{component:h,to:"/sources/".concat(o),state:{contentType:V.POPULAR,clearCache:!0},children:c.jsxs(le,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:1.5},children:[c.jsxs(d,{sx:{display:"flex",alignItems:"center"},children:[c.jsx(se,{variant:"rounded",alt:b,sx:{width:56,height:56,flex:"0 0 auto",mr:1,background:"transparent"},children:c.jsx(W,{spinnerStyle:{small:!0},imgStyle:{objectFit:"cover",width:"100%",height:"100%"},alt:b,src:p.getValidImgUrlFor(l)})}),c.jsxs(d,{sx:{display:"flex",flexDirection:"column",justifyContent:"center"},children:[c.jsx(g,{variant:"h6",component:"h3",children:b}),c.jsxs(g,{variant:"caption",sx:{display:"block"},children:[q(i),x&&c.jsx(g,{variant:"caption",color:"error",sx:{display:"inline"},children:" 18+"}),j&&c.jsx(g,{variant:"caption",sx:{display:"block"},children:m})]})]})]}),c.jsxs(y,{sx:{flexDirection:"row",gap:1},children:[s&&c.jsx(v,{variant:"outlined",component:h,to:"/sources/".concat(o),state:{contentType:V.LATEST,clearCache:!0},children:t("global.button.latest")}),!n&&c.jsx(v,{variant:"outlined",component:h,to:"/sources/".concat(o),state:{contentType:V.POPULAR,clearCache:!0},children:t("global.button.popular")})]})]})})})};function ke(e){var t=new Set;return e.forEach((function(e){var n=0===Number(e.id)?H.OTHER:e.lang;t.add(n)})),s(t).sort(R)}function _e(e){var t={};return e.forEach((function(e){var n,r=0===Number(e.id)?H.OTHER:e.lang;null!==(n=t[r])&&void 0!==n||(t[r]=[]),t[r].push(e)})),Object.values(t).forEach((function(e){return e.sort((function(e,t){return e.name.localeCompare(t.name)}))})),t}function Te(){var e=u().t,t=x.useContext(m).setAction,n=l(j("shownSourceLangs",B()),2),r=n[0],o=n[1],a=l(j("showNsfw",!0),1)[0],i=p.useGetSourceList({notifyOnNetworkStatusChange:!0}),s=i.data,f=i.loading,h=i.error,d=i.refetch,y=null==s?void 0:s.sources.nodes,v=x.useMemo((function(){if(!y||null!=y&&y.length)return!1;var e=y[0].extension.repo;return y.some((function(t){return t.extension.repo!==e}))}),[y]),C=b();return x.useEffect((function(){G().forEach((function(e){var t=!1;r.forEach((function(n){n===e&&(t=!0)})),t||o((function(t){return t.push(e),t}))}))}),[]),x.useLayoutEffect((function(){return t(c.jsxs(c.Fragment,{children:[c.jsx(w,{title:e("search.title.global_search"),children:c.jsx(S,{onClick:function(){return C("/sources/all/search/")},size:"large",color:"inherit",children:c.jsx(Ee,{})})}),c.jsx(K,{shownLangs:r,setShownLangs:o,allLangs:ke(null!=y?y:[]),forcedLangs:G()})]})),function(){t(null)}}),[e,r,y]),f?c.jsx(E,{}):h?c.jsx(ce,{message:e("global.error.label.failed_to_load_data"),messageExtra:h.message,retry:function(){return d().catch(L())}}):0===(null==y?void 0:y.length)?c.jsx(ce,{message:e("source.error.label.no_sources_found")}):c.jsx(c.Fragment,{children:Object.entries(_e(null!=y?y:[])).sort((function(e,t){return R(e[0],t[0])})).map((function(e){var t=l(e,2),n=t[0],o=t[1];return(n===H.OTHER||r.includes(n))&&c.jsxs(x.Fragment,{children:[c.jsx(g,{variant:"h5",component:"h2",sx:{paddingLeft:3,paddingTop:1,paddingBottom:2,fontWeight:"bold"},children:q(n)},n),o.filter((function(e){if(n===H.OTHER){var t=0===Number(e.id);if(!(r.includes(n)||t))return!1}return a||!e.isNsfw})).map((function(e){return c.jsx(Oe,{source:e,showSourceRepo:v},e.id)}))]},n)}))})}function Ie(e){var t=u().t,n=e.extension,r=n.name,a=n.lang,s=n.versionName,f=n.isInstalled,h=n.hasUpdate,y=n.isObsolete,m=n.pkgName,j=n.iconUrl,b=n.isNsfw,w=n.repo,S=e.handleUpdate,E=e.showSourceRepo,O=e.forcedState,k=l(x.useState(Y(f,y,h)),2),_=k[0],T=k[1],I=null!=O?O:_;x.useEffect((function(){T(Y(f,y,h))}),[Y(f,y,h)]);var N="all"===a?t("extension.language.all"):a.toUpperCase(),A=function(){var e=i(o().mark((function e(n){var r,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=ee[n],a=te[n],e.prev=2,T(a),e.t0=n,e.next=e.t0===X.INSTALL?7:e.t0===X.UNINSTALL?10:e.t0===X.UPDATE?13:16;break;case 7:return e.next=9,p.updateExtension(m,{install:!0,isObsolete:y}).response;case 9:return e.abrupt("break",17);case 10:return e.next=12,p.updateExtension(m,{uninstall:!0,isObsolete:y}).response;case 12:return e.abrupt("break",17);case 13:return e.next=15,p.updateExtension(m,{update:!0,isObsolete:y}).response;case 15:return e.abrupt("break",17);case 16:throw new Error('Unexpected ExtensionAction "'.concat(n,'"'));case 17:T(r),S(),e.next=25;break;case 21:e.prev=21,e.t1=e.catch(2),T(Y(f,y,h)),C(t(Z[n],{count:1}),"error");case 25:case"end":return e.stop()}}),e,null,[[2,21]])})));return function(t){return e.apply(this,arguments)}}();return c.jsx(ae,{children:c.jsxs(le,{sx:{display:"flex",alignItems:"center",gap:1,p:1.5,"&:last-child":{paddingBottom:1.5}},children:[c.jsx(se,{variant:"rounded",sx:{width:56,height:56,flex:"0 0 auto",background:"transparent"},alt:r,children:c.jsx(W,{spinnerStyle:{small:!0},imgStyle:{objectFit:"cover",width:"100%",height:"100%"},alt:r,src:p.getValidImgUrlFor(j)})}),c.jsxs(d,{sx:{display:"flex",flexDirection:"column",flexGrow:1,flexShrink:1,wordBreak:"break-word",justifyContent:"center"},children:[c.jsx(g,{variant:"h6",component:"h3",children:r}),c.jsxs(g,{variant:"caption",sx:{display:"block"},children:[N," ",s,b&&c.jsx(g,{variant:"caption",color:"error",sx:{display:"inline"},children:" 18+"})]}),E&&c.jsx(g,{variant:"caption",sx:{display:"block"},children:w})]}),c.jsx(v,{variant:"outlined",sx:{color:I===$.OBSOLETE?"red":"inherit",flexShrink:0},onClick:function(){return function(){switch(I){case X.INSTALL:case X.UPDATE:case X.UNINSTALL:A(I).catch(L());break;case Q.OBSOLETE:A(X.UNINSTALL).catch(L())}}()},children:t(J[I])})]})})}var Ne=0,Ae=1;function Me(e){var t,n,r=e.tabsMenuHeight,a=u().t,s=x.useContext(m).setAction,f=p.useGetServerSettings({notifyOnNetworkStatusChange:!0}),d=f.data,b=f.loading,O=f.error,k=f.refetch,_=!(null==d||!d.settings.extensionRepos.length),T=(null!==(t=null==d?void 0:d.settings.extensionRepos.length)&&void 0!==t?t:0)>1,I=x.useRef(null),N=l(j("shownExtensionLangs",z()),2),A=N[0],M=N[1],P=l(j("showNsfw",!0),1)[0],G=l(U("query",D),1)[0],R=l(x.useState({}),2),H=R[0],B=R[1],V=l(p.useExtensionListFetch(),2),W=V[0],Y=V[1],$=Y.data,J=Y.loading,ee=Y.error,te=null==$||null===(n=$.fetchExtensions)||void 0===n?void 0:n.extensions,ae=l(x.useState([]),2),ie=ae[0],le=ae[1],se=x.useCallback((function(){return B({})}),[]);x.useEffect((function(){W()}),[H]);var ye=x.useMemo((function(){return(null!=te?te:[]).filter((function(e){var t=P||!e.isNsfw;return G?t&&e.name.toLowerCase().includes(G.toLowerCase()):t}))}),[te,P,G]),ve=x.useMemo((function(){return ne(ye)}),[ye]),xe=ve.allLangs,me=ve.groupedExtensions,je=x.useMemo((function(){return me.filter((function(e){return e[Ae].length>0})).filter((function(e){return re(e[Ne])||A.includes(e[Ne])}))}),[A,me]),be=x.useMemo((function(){return je.map((function(e){return e[Ae].length}))}),[je]),we=x.useMemo((function(){return je.map((function(e){return l(e,2)[1]})).flat(1)}),[je]),Se=he.useCreateGroupedComputeItemKey(be,x.useCallback((function(e){return je[e][0]}),[je]),x.useCallback((function(e){return we[e].pkgName}),[we])),Ee=function(e){e.name.toLowerCase().endsWith("apk")?(I.current&&(I.current.value=""),C(a("extension.label.installing_file"),"info"),p.installExternalExtension(e).response.then((function(){se(),C(a("extension.label.installed_successfully"),"success")})).catch((function(){return C(a("extension.label.installation_failed"),"error")}))):C(a("global.error.label.invalid_file_type"),"error")};x.useLayoutEffect((function(){return s(c.jsxs(c.Fragment,{children:[c.jsx(F,{}),c.jsx(w,{title:a("extension.action.label.install_external"),children:c.jsx(S,{onClick:function(){var e;return null===(e=I.current)||void 0===e?void 0:e.click()},size:"large",color:"inherit",children:c.jsx(fe,{})})}),c.jsx(K,{shownLangs:A,setShownLangs:M,allLangs:xe})]})),function(){s(null)}}),[a,A,xe]),x.useEffect((function(){var e=function(){var e=i(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,ue(t);case 3:n=e.sent,Ee(n[0]);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t=function(e){e.preventDefault()};return document.addEventListener("drop",e),document.addEventListener("dragover",t),function(){document.removeEventListener("drop",e),document.removeEventListener("dragover",t)}}),[]);var Le=x.useMemo((function(){return c.jsx("input",{type:"file",style:{display:"none"},ref:I,onChange:function(e){var t,n=null===(t=e.target.files)||void 0===t?void 0:t[0];n&&Ee(n)}})}),[]),Ce=null!=O?O:ee;return b||J?c.jsx(E,{}):Ce?c.jsx(ce,{message:a("global.error.label.failed_to_load_data"),messageExtra:Ce.message,retry:function(){O&&k().catch(L()),ee&&W().catch(L())}}):!(null!=te&&te.length||_)?c.jsxs(c.Fragment,{children:[Le,c.jsxs(y,{sx:{alignItems:"center",justifyContent:"center",rowGap:"10px",paddingTop:"20px"},children:[c.jsx(g,{children:a("extension.label.add_repository_info")}),c.jsx(v,{component:h,variant:"contained",to:"/settings/browseSettings",children:a("settings.title")})]})]}):c.jsxs(c.Fragment,{children:[Le,c.jsx(de,{heightToSubtract:r,overscan:.5*window.innerHeight,groupCounts:be,groupContent:function(e){var t=l(je[e],2),n=t[0],r=t[1],o=n===oe.UPDATE_PENDING;return c.jsxs(pe,{isFirstItem:0===e,sx:{flexDirection:"row",justifyContent:"space-between",alignItems:"center",pr:1},children:[c.jsx(g,{variant:"h5",component:"h2",children:q(n)}),o&&c.jsx(v,{disabled:!!ie.length,variant:"contained",onClick:function(){var e=r.map((function(e){return e.pkgName}));le(e),p.updateExtensions(e,{update:!0}).response.then((function(){return se()})).catch((function(){return C(a(Z[X.UPDATE],{count:me.length}))})).finally((function(){return le([])}))},children:a("extension.action.label.update_all")})]},n)},computeItemKey:Se,itemContent:function(e){var t=we[e];return c.jsx(ge,{children:c.jsx(Ie,{extension:t,handleUpdate:se,showSourceRepo:T,forcedState:ie.includes(t.pkgName)?Q.UPDATING:void 0})})}})]})}var Pe={},Ue=a;Object.defineProperty(Pe,"__esModule",{value:!0});var De=Pe.default=void 0,Fe=Ue(r()),Ge=c;De=Pe.default=(0,Fe.default)((0,Ge.jsx)("path",{d:"M14.94 4.66h-4.72l2.36-2.36zm-4.69 14.71h4.66l-2.33 2.33zM6.1 6.27 1.6 17.73h1.84l.92-2.45h5.11l.92 2.45h1.84L7.74 6.27zm-1.13 7.37 1.94-5.18 1.94 5.18zm10.76 2.5h6.12v1.59h-8.53v-1.29l5.92-8.56h-5.88v-1.6h8.3v1.26z"}),"SortByAlpha");var Re={},He=a;Object.defineProperty(Re,"__esModule",{value:!0});var Be=Re.default=void 0,ze=He(r()),Ve=c;Be=Re.default=(0,ze.default)((0,Ve.jsx)("path",{d:"M20 10V8h-4V4h-2v4h-4V4H8v4H4v2h4v4H4v2h4v4h2v-4h4v4h2v-4h4v-2h-4v-4zm-6 4h-4v-4h4z"}),"Tag");var We=function(e){var t=e.id,n=e.name,r=e.lang,o=e.iconUrl,a=e.mangaCount,i=u().t,l=0===Number(t)?i("source.local_source.title"):n;return c.jsx(ae,{children:c.jsx(ie,{component:h,to:"/migrate/source/".concat(t,"/"),children:c.jsxs(le,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",p:1.5},children:[c.jsxs(d,{sx:{display:"flex"},children:[c.jsx(se,{variant:"rounded",sx:{width:56,height:56,flex:"0 0 auto",mr:1,background:"transparent"},children:c.jsx(W,{spinnerStyle:{small:!0},imgStyle:{objectFit:"cover",width:"100%",height:"100%"},alt:l,src:p.getValidImgUrlFor(o)})}),c.jsxs(d,{sx:{display:"flex",flexDirection:"column",justifyContent:"center"},children:[c.jsx(g,{variant:"h6",component:"h3",children:l}),c.jsx(g,{variant:"caption",sx:{display:"block"},children:q(r)})]})]}),c.jsx(we,{sx:{borderRadius:1},size:"small",label:a})]})})})},qe=function(e){var t=e.tabsMenuHeight,r=u().t,o=O().appBarHeight,a=k().settings.migrateSortSettings,i=M((function(){return C(r("global.error.label.failed_to_save_changes"),"error")})),l=a.sortBy,s=a.sortOrder,f=p.useGetMigratableSources({notifyOnNetworkStatusChange:!0}),h=f.data,d=f.loading,g=f.error,v=f.refetch,m=x.useMemo((function(){return function(e,t){var r=t.sortBy,o=t.sortOrder;if(!e)return[];var a={};e.forEach((function(e){var t,r=e.sourceId,o=e.source,i=null!==(t=a[r])&&void 0!==t?t:n({},n({id:r,name:r,lang:"unknown",iconUrl:null,mangaCount:0},o));a[r]=n(n({},i),{},{mangaCount:i.mangaCount+1})}));var i=Object.values(a).toSorted((function(e,t){switch(r){case N.SOURCE_NAME:return e.name.localeCompare(t.name);case N.MANGA_COUNT:return e.mangaCount-t.mangaCount;default:throw new Error('Unexpected "sortBy" "'.concat(r,'"'))}}));switch(o){case A.ASC:return i;case A.DESC:return i.toReversed();default:throw new Error('Unexpected "sortOrder" "'.concat(o,'"'))}}(null==h?void 0:h.mangas.nodes,a)}),[null==h?void 0:h.mangas.nodes,a]);return d?c.jsx(E,{}):g?c.jsx(ce,{message:r("global.error.label.failed_to_load_data"),messageExtra:g.message,retry:function(){return v().catch(L())}}):c.jsxs(c.Fragment,{children:[c.jsxs(y,{sx:{position:"sticky",top:"".concat(o+t,"px"),flexDirection:"row",justifyContent:"end",alignItems:"center",gap:1,p:1,backgroundColor:"background.default",zIndex:1},children:[c.jsx(w,{title:r(_[l]),children:c.jsx(S,{size:"large",color:"inherit",onClick:function(){return i("migrateSortSettings",{sortBy:(l+1)%2,sortOrder:s})},children:l?c.jsx(Be,{}):c.jsx(De,{})})}),c.jsx(w,{title:r(T[s]),children:c.jsx(S,{size:"large",color:"inherit",onClick:function(){return i("migrateSortSettings",{sortBy:l,sortOrder:(s+1)%2})},children:s?c.jsx(je,{}):c.jsx(be,{})})})]}),c.jsx(I,{sx:{p:0},children:m.map((function(e){return c.jsx(ge,{children:c.jsx(We,n({},e))},e.id)}))})]})}}}}))}();