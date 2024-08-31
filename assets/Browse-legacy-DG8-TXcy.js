!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return r};var n,r={},o=Object.prototype,a=o.hasOwnProperty,i=Object.defineProperty||function(e,t,n){e[t]=n.value},l="function"==typeof Symbol?Symbol:{},s=l.iterator||"@@iterator",c=l.asyncIterator||"@@asyncIterator",u=l.toStringTag||"@@toStringTag";function f(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{f({},"")}catch(n){f=function(e,t,n){return e[t]=n}}function h(e,t,n,r){var o=t&&t.prototype instanceof m?t:m,a=Object.create(o.prototype),l=new U(r||[]);return i(a,"_invoke",{value:I(e,n,l)}),a}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}r.wrap=h;var p="suspendedStart",g="suspendedYield",y="executing",x="completed",v={};function m(){}function j(){}function b(){}var L={};f(L,s,(function(){return this}));var S=Object.getPrototypeOf,E=S&&S(S(_([])));E&&E!==o&&a.call(E,s)&&(L=E);var w=b.prototype=m.prototype=Object.create(L);function T(e){["next","throw","return"].forEach((function(t){f(e,t,(function(e){return this._invoke(t,e)}))}))}function N(t,n){function r(o,i,l,s){var c=d(t[o],t,i);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==e(f)&&a.call(f,"__await")?n.resolve(f.__await).then((function(e){r("next",e,l,s)}),(function(e){r("throw",e,l,s)})):n.resolve(f).then((function(e){u.value=e,l(u)}),(function(e){return r("throw",e,l,s)}))}s(c.arg)}var o;i(this,"_invoke",{value:function(e,t){function a(){return new n((function(n,o){r(e,t,n,o)}))}return o=o?o.then(a,a):a()}})}function I(e,t,r){var o=p;return function(a,i){if(o===y)throw Error("Generator is already running");if(o===x){if("throw"===a)throw i;return{value:n,done:!0}}for(r.method=a,r.arg=i;;){var l=r.delegate;if(l){var s=O(l,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===p)throw o=x,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=y;var c=d(e,t,r);if("normal"===c.type){if(o=r.done?x:g,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(o=x,r.method="throw",r.arg=c.arg)}}}function O(e,t){var r=t.method,o=e.iterator[r];if(o===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=n,O(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;var a=d(o,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,v;var i=a.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,v):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,v)}function A(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function U(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(A,this),this.reset(!0)}function _(t){if(t||""===t){var r=t[s];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function e(){for(;++o<t.length;)if(a.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}throw new TypeError(e(t)+" is not iterable")}return j.prototype=b,i(w,"constructor",{value:b,configurable:!0}),i(b,"constructor",{value:j,configurable:!0}),j.displayName=f(b,u,"GeneratorFunction"),r.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===j||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,f(e,u,"GeneratorFunction")),e.prototype=Object.create(w),e},r.awrap=function(e){return{__await:e}},T(N.prototype),f(N.prototype,c,(function(){return this})),r.AsyncIterator=N,r.async=function(e,t,n,o,a){void 0===a&&(a=Promise);var i=new N(h(e,t,n,o),a);return r.isGeneratorFunction(t)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},T(w),f(w,u,"Generator"),f(w,s,(function(){return this})),f(w,"toString",(function(){return"[object Generator]"})),r.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},r.values=_,U.prototype={constructor:U,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(C),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,o){return l.type="throw",l.arg=e,t.next=r,o&&(t.method="next",t.arg=n),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],l=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var s=a.call(i,"catchLoc"),c=a.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),C(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;C(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:_(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=n),v}},r}function n(e,t,n,r,o,a,i){try{var l=e[a](i),s=l.value}catch(e){return void n(e)}l.done?t(s):Promise.resolve(s).then(r,o)}function r(e){return function(){var t=this,r=arguments;return new Promise((function(o,a){var i=e.apply(t,r);function l(e){n(i,o,a,l,s,"next",e)}function s(e){n(i,o,a,l,s,"throw",e)}l(void 0)}))}}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(t,n,r){return(n=function(t){var n=function(t,n){if("object"!=e(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,n||"default");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"==e(n)?n:n+""}(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,l=[],s=!0,c=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(e){c=!0,o=e}finally{try{if(!s&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./index-legacy-DuStmmwR.js","./language-legacy-l1Wv6JmC.js","./LangSelect-legacy-CslGOKub.js","./SourceMangas-legacy-SAz_Z0Rr.js","./SpinnerImage-legacy-JJaN9Ffy.js","./CardContent-legacy-B6FtOr0d.js","./index-legacy-BL4CMZKR.js","./Avatar-legacy-DJtDvgXW.js","./file-selector-legacy-DezG7Mvw.js","./Add-legacy-DfJ0ghPj.js","./AppbarSearch-legacy-CriAZm_D.js","./StyledGroupItemWrapper-legacy-BPPz9Sg-.js","./Tabs-legacy-B8WejBt-.js","./TabsMenu-legacy-CrYcv9Ja.js","./Chip-legacy-Dbms6tmE.js","./FilterList-legacy-BDqwKubL.js","./cloneObject-legacy-D5k1nSvY.js","./Switch-legacy-d0c9le9_.js","./SwitchBase-legacy-VHqQZMrF.js","./TextField-legacy-C04HWFDx.js","./ExpandMore-legacy--RBVdXF2.js","./GridLayouts-legacy-D3a1ZAH3.js","./ViewModule-legacy-BX16S5qi.js","./Checkbox-legacy-CSi_jY84.js","./ListPreference-legacy-Dy_njXs8.js","./Delete-legacy-D8r0EeNK.js","./SortRadioInput-legacy-3IECq-4H.js","./CheckboxInput-legacy-BbrzI25A.js","./Collapse-legacy-CRlp_zub.js","./useDebounce-legacy-C10t0dBw.js","./InputAdornment-legacy-CJ7zNnu7.js","./ThreeStateCheckboxInput-legacy-D9de9kz5.js","./StyledFab-legacy-J9bGWJcg.js","./useManageMangaLibraryState-legacy-Cbc_ePwO.js","./Trackers-legacy-CN_LuGVd.js","./Info-legacy-Bfurgh9C.js","./TypographyMaxLines-legacy-_7yUJ7Dq.js","./Link-legacy-D6uOqf2U.js","./NumberSetting-legacy-NfxEQ-Ca.js","./useMobilePicker-legacy-D-_Ra1Kr.js","./SelectSetting-legacy-wUxSgjre.js","./Select-legacy-BnY3xNVB.js","./Mangas-legacy-CqqcRala.js","./Chapters-legacy-B-5WrL2J.js","./BaseMangaGrid-legacy-Dh1kXdp0.js","./MangaGrid-legacy-Dq1VlWBa.js","./Sync-legacy-InnEMUO_.js","./PlayArrow-legacy-DiwJfjwO.js"],(function(e,n){"use strict";var o,s,c,u,f,h,d,p,g,y,x,v,m,j,b,L,S,E,w,T,N,I,O,A,C,U,_,k,P,D,G,M,F,R,B,H,V,W,z,Y,$,q,J,K,Q,X,Z,ee,te,ne,re,oe;return{setters:[function(e){o=e.r,s=e.i,c=e.j,u=e.u,f=e.M,h=e.L,d=e.B,p=e.a,g=e.T,y=e.S,x=e.b,v=e.c,m=e.N,j=e.d,b=e.e,L=e.f,S=e.I,E=e.g,w=e.E,T=e.h,N=e.m,I=e.k,O=e.l,A=e.n},function(e){C=e.s,U=e.l,_=e.a,k=e.D,P=e.e},function(e){D=e.t,G=e.L,M=e.i,F=e.E},function(e){R=e.SourceContentType},function(e){B=e.S},function(e){H=e.C,V=e.a},function(e){W=e.C},function(e){z=e.A},function(e){Y=e.f},function(e){$=e.d},function(e){q=e.u,J=e.S,K=e.A},function(e){Q=e.S,X=e.a,Z=e.b},function(e){ee=e.T,te=e.a},function(e){ne=e.T,re=e.a},function(e){oe=e.C},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("Browse",(function(){var e=u().t,t=v.useContext(m).setTitle,n=v.useRef(null),r=l(v.useState(0),2),o=r[0],a=r[1];A(n,v.useCallback((function(){return a(n.current.offsetHeight)}),[n.current]));var i=l(v.useState(0),2),s=i[0],f=i[1];return v.useEffect((function(){t(e("global.label.browse"))}),[e]),c.jsxs(ne,{children:[c.jsxs(re,{ref:n,variant:"fullWidth",value:s,tabsCount:2,onChange:function(e,t){return f(t)},children:[c.jsx(ee,{sx:{textTransform:"none"},label:e("source.title_one")}),c.jsx(ee,{sx:{textTransform:"none"},label:e("extension.title_other")}),c.jsx(ee,{sx:{textTransform:"none"},label:e("migrate.title")})]}),c.jsx(te,{index:0,currentIndex:s,children:c.jsx(he,{})}),c.jsx(te,{index:1,currentIndex:s,children:c.jsx(Ee,{tabsMenuHeight:o})}),c.jsx(te,{index:2,currentIndex:s,children:c.jsx(Te,{})})]})}));var n={},ae=s;Object.defineProperty(n,"__esModule",{value:!0});var ie=n.default=void 0,le=ae(o()),se=c;ie=n.default=(0,le.default)((0,se.jsx)("path",{d:"M19.3 16.9c.4-.7.7-1.5.7-2.4 0-2.5-2-4.5-4.5-4.5S11 12 11 14.5s2 4.5 4.5 4.5c.9 0 1.7-.3 2.4-.7l3.2 3.2 1.4-1.4zm-3.8.1c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5M12 20v2C6.48 22 2 17.52 2 12S6.48 2 12 2c4.84 0 8.87 3.44 9.8 8h-2.07c-.64-2.46-2.4-4.47-4.73-5.41V5c0 1.1-.9 2-2 2h-2v2c0 .55-.45 1-1 1H8v2h2v3H9l-4.79-4.79C4.08 10.79 4 11.38 4 12c0 4.41 3.59 8 8 8"}),"TravelExplore");var ce=function(e){var t=u().t,n=f.useIsMobileWidth(),r=e.source,o=r.id,a=r.name,i=r.lang,l=r.iconUrl,s=r.supportsLatest,v=r.isNsfw,m=r.extension.repo,j=e.showSourceRepo;return c.jsx(H,{sx:{margin:1,marginTop:0},children:c.jsx(W,{component:h,to:"/sources/".concat(o),state:{contentType:R.POPULAR,clearCache:!0},children:c.jsxs(V,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:1.5},children:[c.jsxs(d,{sx:{display:"flex",alignItems:"center"},children:[c.jsx(z,{variant:"rounded",alt:a,sx:{width:56,height:56,flex:"0 0 auto",mr:1,background:"transparent"},children:c.jsx(B,{spinnerStyle:{small:!0},imgStyle:{objectFit:"cover",width:"100%",height:"100%"},alt:a,src:p.getValidImgUrlFor(l)})}),c.jsxs(d,{sx:{display:"flex",flexDirection:"column",justifyContent:"center"},children:[c.jsx(g,{variant:"h6",component:"h3",children:a}),"0"!==o&&c.jsxs(g,{variant:"caption",display:"block",children:[D(i),v&&c.jsx(g,{variant:"caption",display:"inline",color:"error",children:" 18+"}),j&&c.jsx(g,{variant:"caption",display:"block",children:m})]})]})]}),c.jsxs(y,{sx:{flexDirection:"row",gap:1},children:[s&&c.jsx(x,{variant:"outlined",component:h,to:"/sources/".concat(o),state:{contentType:R.LATEST,clearCache:!0},children:t("global.button.latest")}),!n&&c.jsx(x,{variant:"outlined",component:h,to:"/sources/".concat(o),state:{contentType:R.POPULAR,clearCache:!0},children:t("global.button.popular")})]})]})})})};function ue(e){var t=[];return e.forEach((function(e){-1===t.indexOf(e.lang)&&t.push(e.lang)})),t.sort(U),t}function fe(e){var t={};return e.forEach((function(e){void 0===t[e.lang]&&(t[e.lang]=[]),t[e.lang].push(e)})),t}function he(){var e=u().t,t=v.useContext(m).setAction,n=l(j("shownSourceLangs",_()),2),r=n[0],o=n[1],a=l(j("showNsfw",!0),1)[0],i=p.useGetSourceList({notifyOnNetworkStatusChange:!0}),s=i.data,f=i.loading,h=i.error,d=i.refetch,y=null==s?void 0:s.sources.nodes,x=v.useMemo((function(){if(!y||null!=y&&y.length)return!1;var e=y[0].extension.repo;return y.some((function(t){return t.extension.repo!==e}))}),[y]),N=b();return v.useEffect((function(){C().forEach((function(e){var t=!1;r.forEach((function(n){n===e&&(t=!0)})),t||o((function(t){return t.push(e),t}))}))}),[]),v.useEffect((function(){return t(c.jsxs(c.Fragment,{children:[c.jsx(L,{title:e("search.title.global_search"),children:c.jsx(S,{onClick:function(){return N("/sources/all/search/")},size:"large",children:c.jsx(ie,{})})}),c.jsx(G,{shownLangs:r,setShownLangs:o,allLangs:ue(null!=y?y:[]),forcedLangs:C()})]})),function(){t(null)}}),[e,r,y]),f?c.jsx(E,{}):h?c.jsx(w,{message:e("global.error.label.failed_to_load_data"),messageExtra:h.message,retry:function(){return d().catch(T())}}):0===(null==y?void 0:y.length)?c.jsx(w,{message:e("source.error.label.no_sources_found")}):c.jsx(c.Fragment,{children:Object.entries(fe(null!=y?y:[])).sort((function(e,t){return U(e[0],t[0])})).map((function(e){var t=l(e,2),n=t[0],o=t[1];return-1!==r.indexOf(n)&&c.jsxs(v.Fragment,{children:[c.jsx(g,{variant:"h5",component:"h2",sx:{paddingLeft:3,paddingTop:1,paddingBottom:2,fontWeight:"bold"},children:D(n)},n),o.filter((function(e){return a||!e.isNsfw})).map((function(e){return c.jsx(ce,{source:e,showSourceRepo:x},e.id)}))]},n)}))})}var de=function(e){return e.UPDATE="UPDATE",e.UNINSTALL="UNINSTALL",e.INSTALL="INSTALL",e}(de||{}),pe=function(e){return e.OBSOLETE="OBSOLETE",e.UPDATING="UPDATING",e.UNINSTALLING="UNINSTALLING",e.INSTALLING="INSTALLING",e}(pe||{}),ge=a(a({},de),pe),ye=i(i(i({},"UPDATE","UPDATING"),"UNINSTALL","UNINSTALLING"),"INSTALL","INSTALLING"),xe=i(i(i({},"UPDATE","UNINSTALL"),"UNINSTALL","INSTALL"),"INSTALL","UNINSTALL"),ve=i(i(i(i(i(i(i({},ge.UNINSTALL,"extension.action.label.uninstall"),ge.INSTALL,"extension.action.label.install"),ge.UPDATE,"extension.action.label.update"),ge.OBSOLETE,"extension.state.label.obsolete"),ge.UPDATING,"extension.state.label.updating"),ge.UNINSTALLING,"extension.state.label.uninstalling"),ge.INSTALLING,"extension.state.label.installing"),me=i(i(i({},"UPDATE","extension.label.update_failed"),"INSTALL","extension.label.installation_failed"),"UNINSTALL","extension.label.uninstallation_failed"),je=function(e,t,n){return t?ge.OBSOLETE:n?ge.UPDATE:e?ge.UNINSTALL:ge.INSTALL};function be(e){var n=u().t,o=e.extension,a=o.name,i=o.lang,s=o.versionName,f=o.isInstalled,h=o.hasUpdate,y=o.isObsolete,m=o.pkgName,j=o.iconUrl,b=o.isNsfw,L=o.repo,S=e.handleUpdate,E=e.showSourceRepo,w=l(v.useState(je(f,y,h)),2),I=w[0],O=w[1],A="all"===i?n("extension.language.all"):i.toUpperCase(),C=function(){var e=r(t().mark((function e(r){var o,a;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=xe[r],a=ye[r],e.prev=2,O(a),e.t0=r,e.next="INSTALL"===e.t0?7:"UNINSTALL"===e.t0?10:"UPDATE"===e.t0?13:16;break;case 7:return e.next=9,p.updateExtension(m,{install:!0,isObsolete:y}).response;case 9:return e.abrupt("break",17);case 10:return e.next=12,p.updateExtension(m,{uninstall:!0,isObsolete:y}).response;case 12:return e.abrupt("break",17);case 13:return e.next=15,p.updateExtension(m,{update:!0,isObsolete:y}).response;case 15:return e.abrupt("break",17);case 16:throw new Error('Unexpected ExtensionAction "'.concat(r,'"'));case 17:O(o),S(),e.next=25;break;case 21:e.prev=21,e.t1=e.catch(2),O(je(f,y,h)),N(n(me[r]),"error");case 25:case"end":return e.stop()}}),e,null,[[2,21]])})));return function(t){return e.apply(this,arguments)}}();return c.jsx(H,{children:c.jsxs(V,{sx:{display:"flex",alignItems:"center",gap:1,p:1.5,"&:last-child":{paddingBottom:1.5}},children:[c.jsx(z,{variant:"rounded",sx:{width:56,height:56,flex:"0 0 auto",background:"transparent"},alt:a,children:c.jsx(B,{spinnerStyle:{small:!0},imgStyle:{objectFit:"cover",width:"100%",height:"100%"},alt:a,src:p.getValidImgUrlFor(j)})}),c.jsxs(d,{sx:{display:"flex",flexDirection:"column",flexGrow:1,flexShrink:1,wordBreak:"break-word",justifyContent:"center"},children:[c.jsx(g,{variant:"h6",component:"h3",children:a}),c.jsxs(g,{variant:"caption",display:"block",children:[A," ",s,b&&c.jsx(g,{variant:"caption",display:"inline",color:"error",children:" 18+"})]}),E&&c.jsx(g,{variant:"caption",display:"block",children:L})]}),c.jsx(x,{variant:"outlined",sx:{color:I===ge.OBSOLETE?"red":"inherit",flexShrink:0},onClick:function(){return function(){switch(I){case"INSTALL":case"UPDATE":case"UNINSTALL":C(I).catch(T());break;case"OBSOLETE":C("UNINSTALL").catch(T())}}()},children:n(ve[I])})]})})}var Le=0,Se=1;function Ee(e){var n,o,a=e.tabsMenuHeight,s=u().t,f=v.useContext(m).setAction,d=p.useGetServerSettings({notifyOnNetworkStatusChange:!0}),b=d.data,N=d.loading,O=d.error,A=d.refetch,C=!(null==b||!b.settings.extensionRepos.length),_=(null!==(n=null==b?void 0:b.settings.extensionRepos.length)&&void 0!==n?n:0)>1,R=v.useRef(null),B=l(j("shownExtensionLangs",P()),2),H=B[0],V=B[1],W=l(j("showNsfw",!0),1)[0],z=l(q("query",J),1)[0],ee=l(v.useState({}),2),te=ee[0],ne=ee[1],re=l(p.useExtensionListFetch(),2),oe=re[0],ae=re[1],ie=ae.data,le=ae.loading,se=ae.error,ce=null==ie||null===(o=ie.fetchExtensions)||void 0===o?void 0:o.extensions,ue=v.useCallback((function(){return ne({})}),[]);v.useEffect((function(){oe()}),[te]);var fe=v.useMemo((function(){return(null!=ce?ce:[]).filter((function(e){var t=W||!e.isNsfw;return z?t&&e.name.toLowerCase().includes(z.toLowerCase()):t}))}),[ce,W,z]),he=v.useMemo((function(){return function(e){var t=[],n=i(i(i(i(i(i({},F.OBSOLETE,[]),F.INSTALLED,[]),F.UPDATE_PENDING,[]),k.ALL,[]),k.OTHER,[]),k.LOCAL_SOURCE,[]);e.forEach((function(e){if(void 0===n[e.lang]&&(n[e.lang]=[],"all"!==e.lang&&t.push(e.lang)),e.isInstalled){if(e.hasUpdate)return void n[F.UPDATE_PENDING].push(e);if(e.isObsolete)return void n[F.OBSOLETE].push(e);n[F.INSTALLED].push(e)}else n[e.lang].push(e)})),t.sort(U);var r=[[F.OBSOLETE,n[F.OBSOLETE]],[F.UPDATE_PENDING,n[F.UPDATE_PENDING]],[F.INSTALLED,n[F.INSTALLED]],[k.ALL,n[k.ALL]],[k.OTHER,n[k.OTHER]],[k.LOCAL_SOURCE,n[k.LOCAL_SOURCE]]],o=t.map((function(e){return[e,n[e]]}));return{allLangs:t,groupedExtensions:r.concat(o)}}(fe)}),[fe]),de=he.allLangs,pe=he.groupedExtensions,ge=v.useMemo((function(){return pe.filter((function(e){return e[Se].length>0})).filter((function(e){return M(e[Le])||H.includes(e[Le])}))}),[H,pe]),ye=v.useMemo((function(){return ge.map((function(e){return e[Se].length}))}),[ge]),xe=v.useMemo((function(){return ge.map((function(e){return l(e,2)[1]})).flat(1)}),[ge]),ve=l(I(v.useState([])),2),me=ve[0],je=ve[1],Ee=function(e){e.name.toLowerCase().endsWith("apk")?(R.current&&(R.current.value=""),je(s("extension.label.installing_file"),"info"),p.installExternalExtension(e).response.then((function(){ue(),je(s("extension.label.installed_successfully"),"success")})).catch((function(){return je(s("extension.label.installation_failed"),"error")}))):je(s("global.error.label.invalid_file_type"),"error")};v.useEffect((function(){return f(c.jsxs(c.Fragment,{children:[c.jsx(K,{}),c.jsx(L,{title:s("extension.action.label.install_external"),children:c.jsx(S,{onClick:function(){var e;return null===(e=R.current)||void 0===e?void 0:e.click()},size:"large",children:c.jsx($,{})})}),c.jsx(G,{shownLangs:H,setShownLangs:V,allLangs:de})]})),function(){f(null)}}),[s,H,de]),v.useEffect((function(){var e=function(){var e=r(t().mark((function e(n){var r;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,Y(n);case 3:r=e.sent,Ee(r[0]);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n=function(e){e.preventDefault()};return document.addEventListener("drop",e),document.addEventListener("dragover",n),function(){document.removeEventListener("drop",e),document.removeEventListener("dragover",n)}}),[]);var we=v.useMemo((function(){return c.jsx("input",{type:"file",style:{display:"none"},ref:R,onChange:function(e){var t,n=null===(t=e.target.files)||void 0===t?void 0:t[0];n&&Ee(n)}})}),[]),Te=null!=O?O:se;return N||le?c.jsx(E,{}):Te?c.jsx(w,{message:s("global.error.label.failed_to_load_data"),messageExtra:Te.message,retry:function(){O&&A().catch(T()),se&&oe().catch(T())}}):!(null!=ce&&ce.length||C)?c.jsxs(c.Fragment,{children:[me,we,c.jsxs(y,{sx:{paddingTop:"20px"},alignItems:"center",justifyContent:"center",rowGap:"10px",children:[c.jsx(g,{children:s("extension.label.add_repository_info")}),c.jsx(x,{component:h,variant:"contained",to:"/settings/browseSettings",children:s("settings.title")})]})]}):c.jsxs(c.Fragment,{children:[me,we,c.jsx(Q,{heightToSubtract:a,overscan:.5*window.innerHeight,groupCounts:ye,groupContent:function(e){var t=l(ge[e],1)[0];return c.jsx(X,{variant:"h5",component:"h2",isFirstItem:0===e,children:D(t)},t)},itemContent:function(e){var t=xe[e];return c.jsx(Z,{children:c.jsx(be,{extension:t,handleUpdate:ue,showSourceRepo:_})},"".concat(t.pkgName,"_").concat(t.isInstalled,"_").concat(t.isObsolete,"_").concat(t.hasUpdate))}})]})}var we=function(e){var t=e.id,n=e.name,r=e.lang,o=e.iconUrl,a=e.mangaCount;return c.jsx(H,{children:c.jsx(W,{component:h,to:"/migrate/source/".concat(t,"/"),children:c.jsxs(V,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",p:1.5},children:[c.jsxs(d,{sx:{display:"flex"},children:[c.jsx(z,{variant:"rounded",sx:{width:56,height:56,flex:"0 0 auto",mr:1,background:"transparent"},children:c.jsx(B,{spinnerStyle:{small:!0},imgStyle:{objectFit:"cover",width:"100%",height:"100%"},alt:n,src:p.getValidImgUrlFor(o)})}),c.jsxs(d,{sx:{display:"flex",flexDirection:"column",justifyContent:"center"},children:[c.jsx(g,{variant:"h6",component:"h3",children:n}),c.jsx(g,{variant:"caption",display:"block",children:D(r)})]})]}),c.jsx(oe,{sx:{borderRadius:1},size:"small",label:a})]})})})},Te=function(){var e=u().t,t=p.useGetMigratableSources({notifyOnNetworkStatusChange:!0}),n=t.data,r=t.loading,o=t.error,i=t.refetch,l=v.useMemo((function(){return function(e){if(!e)return{};var t={};return e.forEach((function(e){var n,r=e.sourceId,o=e.source,i=null!==(n=t[r])&&void 0!==n?n:a({},a({id:r,name:r,lang:"unknown",iconUrl:null,mangaCount:0},o));t[r]=a(a({},i),{},{mangaCount:i.mangaCount+1})})),t}(null==n?void 0:n.mangas.nodes)}),[null==n?void 0:n.mangas.nodes]);return r?c.jsx(E,{}):o?c.jsx(w,{message:e("global.error.label.failed_to_load_data"),messageExtra:o.message,retry:function(){return i().catch(T())}}):c.jsx(O,{children:Object.values(l).map((function(e){return c.jsx(Z,{children:c.jsx(we,a({},e))},e.id)}))})}}}}))}();
