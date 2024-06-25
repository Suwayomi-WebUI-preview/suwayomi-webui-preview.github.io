!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return r};var n,r={},o=Object.prototype,a=o.hasOwnProperty,i=Object.defineProperty||function(e,t,n){e[t]=n.value},l="function"==typeof Symbol?Symbol:{},s=l.iterator||"@@iterator",c=l.asyncIterator||"@@asyncIterator",u=l.toStringTag||"@@toStringTag";function f(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{f({},"")}catch(n){f=function(e,t,n){return e[t]=n}}function h(e,t,n,r){var o=t&&t.prototype instanceof m?t:m,a=Object.create(o.prototype),l=new C(r||[]);return i(a,"_invoke",{value:I(e,n,l)}),a}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}r.wrap=h;var p="suspendedStart",g="suspendedYield",y="executing",x="completed",v={};function m(){}function j(){}function b(){}var L={};f(L,s,(function(){return this}));var S=Object.getPrototypeOf,E=S&&S(S(_([])));E&&E!==o&&a.call(E,s)&&(L=E);var w=b.prototype=m.prototype=Object.create(L);function T(e){["next","throw","return"].forEach((function(t){f(e,t,(function(e){return this._invoke(t,e)}))}))}function N(t,n){function r(o,i,l,s){var c=d(t[o],t,i);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==e(f)&&a.call(f,"__await")?n.resolve(f.__await).then((function(e){r("next",e,l,s)}),(function(e){r("throw",e,l,s)})):n.resolve(f).then((function(e){u.value=e,l(u)}),(function(e){return r("throw",e,l,s)}))}s(c.arg)}var o;i(this,"_invoke",{value:function(e,t){function a(){return new n((function(n,o){r(e,t,n,o)}))}return o=o?o.then(a,a):a()}})}function I(e,t,r){var o=p;return function(a,i){if(o===y)throw Error("Generator is already running");if(o===x){if("throw"===a)throw i;return{value:n,done:!0}}for(r.method=a,r.arg=i;;){var l=r.delegate;if(l){var s=O(l,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===p)throw o=x,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=y;var c=d(e,t,r);if("normal"===c.type){if(o=r.done?x:g,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(o=x,r.method="throw",r.arg=c.arg)}}}function O(e,t){var r=t.method,o=e.iterator[r];if(o===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=n,O(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;var a=d(o,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,v;var i=a.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,v):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,v)}function A(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function U(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(A,this),this.reset(!0)}function _(t){if(t||""===t){var r=t[s];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function e(){for(;++o<t.length;)if(a.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}throw new TypeError(e(t)+" is not iterable")}return j.prototype=b,i(w,"constructor",{value:b,configurable:!0}),i(b,"constructor",{value:j,configurable:!0}),j.displayName=f(b,u,"GeneratorFunction"),r.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===j||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,f(e,u,"GeneratorFunction")),e.prototype=Object.create(w),e},r.awrap=function(e){return{__await:e}},T(N.prototype),f(N.prototype,c,(function(){return this})),r.AsyncIterator=N,r.async=function(e,t,n,o,a){void 0===a&&(a=Promise);var i=new N(h(e,t,n,o),a);return r.isGeneratorFunction(t)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},T(w),f(w,u,"Generator"),f(w,s,(function(){return this})),f(w,"toString",(function(){return"[object Generator]"})),r.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},r.values=_,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(U),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,o){return l.type="throw",l.arg=e,t.next=r,o&&(t.method="next",t.arg=n),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],l=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var s=a.call(i,"catchLoc"),c=a.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),U(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;U(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:_(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=n),v}},r}function n(e,t,n,r,o,a,i){try{var l=e[a](i),s=l.value}catch(e){return void n(e)}l.done?t(s):Promise.resolve(s).then(r,o)}function r(e){return function(){var t=this,r=arguments;return new Promise((function(o,a){var i=e.apply(t,r);function l(e){n(i,o,a,l,s,"next",e)}function s(e){n(i,o,a,l,s,"throw",e)}l(void 0)}))}}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,l=[],s=!0,c=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(e){c=!0,o=e}finally{try{if(!s&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function s(t,n,r){return(n=function(t){var n=function(t,n){if("object"!=e(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,n||"default");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"==e(n)?n:n+""}(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}System.register(["./index-legacy-GxGsYjoV.js","./language-legacy-CYf_Uz1C.js","./LangSelect-legacy-BcVCYZVW.js","./SourceMangas-legacy-BRxXtrDu.js","./SpinnerImage-legacy-Bv_jESyI.js","./index-legacy-BlXOqfvv.js","./TypographyMaxLines-legacy-DGSmz8FC.js","./Avatar-legacy-CKq2XIss.js","./file-selector-legacy-voyyLeHk.js","./Add-legacy-D3_npWX-.js","./AppbarSearch-legacy-Bb1xOyGB.js","./StyledGroupHeader-legacy-BQX-7QVD.js","./StyledGroupItemWrapper-legacy-BWObGcsd.js","./Tabs-legacy-DreHEzZW.js","./TabsMenu-legacy-DSwVbeWC.js","./Chip-legacy-BotT4vYt.js","./FilterList-legacy-D5wvudra.js","./cloneObject-legacy-D5k1nSvY.js","./Switch-legacy-CDFNLdQr.js","./SwitchBase-legacy-CS3VuG66.js","./TextField-legacy-C0PmYBLR.js","./Favorite-legacy-BIHI69CB.js","./GridLayouts-legacy-BiIzP_WS.js","./ViewModule-legacy-oEzqpgsb.js","./Checkbox-legacy-DIMiZwL1.js","./ListPreference-legacy-CCccDnz3.js","./Delete-legacy-DQ5LlrxJ.js","./SortRadioInput-legacy-CdM0OkpU.js","./CheckboxInput-legacy-qlnUAYJX.js","./Collapse-legacy-B1qSbjLv.js","./useDebounce-legacy-DRZ-MchW.js","./InputAdornment-legacy-C9arIE8s.js","./ThreeStateCheckboxInput-legacy-DppvNtmg.js","./StyledFab-legacy-D7dQmNYX.js","./useManageMangaLibraryState-legacy-C48Rk-ka.js","./Trackers-legacy-DSG_pyL8.js","./Info-legacy-BajNpXz4.js","./Link-legacy-BuMby-Jr.js","./NumberSetting-legacy-Q8CeC8Y1.js","./useMobilePicker-legacy-CIhCWqp0.js","./SelectSetting-legacy-BUfsPmU6.js","./Select-legacy-CETkoojf.js","./Mangas-legacy-D78ENlLV.js","./Chapters-legacy-D9dKDD69.js","./MangaGrid-legacy-DWN67QEh.js","./Sync-legacy-6UnfKBbo.js","./PlayArrow-legacy-1FJE0wSE.js"],(function(e,n){"use strict";var o,l,c,u,f,h,d,p,g,y,x,v,m,j,b,L,S,E,w,T,N,I,O,A,U,C,_,P,k,D,G,M,F,B,R,H,V,W,z,Y,$,q,J,K,Q,X,Z,ee,te,ne,re,oe;return{setters:[function(e){o=e.r,l=e.i,c=e.j,u=e.s,f=e.u,h=e.L,d=e.B,p=e.a,g=e.T,y=e.b,x=e.c,v=e.N,m=e.d,j=e.e,b=e.f,L=e.I,S=e.g,E=e.E,w=e.h,T=e.m,N=e.M,I=e.k,O=e.S,A=e.l},function(e){U=e.s,C=e.l,_=e.a,P=e.D,k=e.e},function(e){D=e.t,G=e.L,M=e.i,F=e.E},function(e){B=e.SourceContentType},function(e){R=e.S},function(e){H=e.C,V=e.a},function(e){W=e.C},function(e){z=e.A},function(e){Y=e.f},function(e){$=e.d},function(e){q=e.u,J=e.S,K=e.A},function(e){Q=e.S,X=e.a},function(e){Z=e.S},function(e){ee=e.T,te=e.a},function(e){ne=e.T,re=e.a},function(e){oe=e.C},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("Browse",(function(){var e=f().t,t=x.useContext(v).setTitle,n=i(x.useState(0),2),r=n[0],o=n[1];return x.useEffect((function(){t(e("global.label.browse"))}),[e]),c.jsxs(ne,{children:[c.jsxs(re,{value:r,tabsCount:2,onChange:function(e,t){return o(t)},children:[c.jsx(ee,{sx:{textTransform:"none"},label:e("source.title")}),c.jsx(ee,{sx:{textTransform:"none"},label:e("extension.title")}),c.jsx(ee,{sx:{textTransform:"none"},label:e("migrate.title")})]}),c.jsx(te,{index:0,currentIndex:r,children:c.jsx(pe,{})}),c.jsx(te,{index:1,currentIndex:r,children:c.jsx(Te,{})}),c.jsx(te,{index:2,currentIndex:r,children:c.jsx(Ie,{})})]})}));var n={},ae=l;Object.defineProperty(n,"__esModule",{value:!0});var ie=n.default=void 0,le=ae(o()),se=c;ie=n.default=(0,le.default)((0,se.jsx)("path",{d:"M19.3 16.9c.4-.7.7-1.5.7-2.4 0-2.5-2-4.5-4.5-4.5S11 12 11 14.5s2 4.5 4.5 4.5c.9 0 1.7-.3 2.4-.7l3.2 3.2 1.4-1.4zm-3.8.1c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5M12 20v2C6.48 22 2 17.52 2 12S6.48 2 12 2c4.84 0 8.87 3.44 9.8 8h-2.07c-.64-2.46-2.4-4.47-4.73-5.41V5c0 1.1-.9 2-2 2h-2v2c0 .55-.45 1-1 1H8v2h2v3H9l-4.79-4.79C4.08 10.79 4 11.38 4 12c0 4.41 3.59 8 8 8"}),"TravelExplore");var ce=u("div")((function(e){return s({display:"flex"},e.theme.breakpoints.up("sm"),{display:"none"})})),ue=u("div")((function(e){return s(s({display:"flex"},e.theme.breakpoints.down("sm"),{display:"none"}),"& .MuiButton-root",{marginLeft:"20px"})})),fe=function(e){var t=f().t,n=e.source,r=n.id,o=n.name,a=n.lang,i=n.iconUrl,l=n.supportsLatest,s=n.isNsfw,u=n.extension.repo,x=e.showSourceRepo;return c.jsx(H,{sx:{margin:"10px",marginTop:0},children:c.jsx(V,{component:h,to:"/sources/".concat(r),state:{contentType:B.POPULAR,clearCache:!0},children:c.jsxs(W,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:2},children:[c.jsxs(d,{sx:{display:"flex",alignItems:"center"},children:[c.jsx(z,{variant:"rounded",alt:o,sx:{width:56,height:56,flex:"0 0 auto",mr:2,background:"transparent"},children:c.jsx(R,{spinnerStyle:{small:!0},imgStyle:{objectFit:"cover",width:"100%",height:"100%"},alt:o,src:p.getValidImgUrlFor(i)})}),c.jsxs(d,{sx:{display:"flex",flexDirection:"column",justifyContent:"center"},children:[c.jsx(g,{variant:"h5",component:"h2",children:o}),"0"!==r&&c.jsxs(g,{variant:"caption",display:"block",gutterBottom:!0,children:[D(a),s&&c.jsx(g,{variant:"caption",display:"inline",gutterBottom:!0,color:"red",children:" 18+"}),x&&c.jsx(g,{variant:"caption",display:"block",children:u})]})]})]}),c.jsxs(c.Fragment,{children:[c.jsx(ce,{children:l&&c.jsx(y,{variant:"outlined",component:h,to:"/sources/".concat(r),state:{contentType:B.LATEST,clearCache:!0},children:t("global.button.latest")})}),c.jsxs(ue,{children:[l&&c.jsx(y,{variant:"outlined",component:h,to:"/sources/".concat(r),state:{contentType:B.LATEST,clearCache:!0},children:t("global.button.latest")}),c.jsx(y,{variant:"outlined",component:h,to:"/sources/".concat(r),state:{contentType:B.POPULAR,clearCache:!0},children:t("global.button.popular")})]})]})]})})})};function he(e){var t=[];return e.forEach((function(e){-1===t.indexOf(e.lang)&&t.push(e.lang)})),t.sort(C),t}function de(e){var t={};return e.forEach((function(e){void 0===t[e.lang]&&(t[e.lang]=[]),t[e.lang].push(e)})),t}function pe(){var e=f().t,t=x.useContext(v).setAction,n=i(m("shownSourceLangs",_()),2),r=n[0],o=n[1],a=i(m("showNsfw",!0),1)[0],l=p.useGetSourceList({notifyOnNetworkStatusChange:!0}),s=l.data,u=l.loading,h=l.error,d=l.refetch,y=null==s?void 0:s.sources.nodes,T=x.useMemo((function(){if(!y||null!=y&&y.length)return!1;var e=y[0].extension.repo;return y.some((function(t){return t.extension.repo!==e}))}),[y]),N=j();return x.useEffect((function(){U().forEach((function(e){var t=!1;r.forEach((function(n){n===e&&(t=!0)})),t||o((function(t){return t.push(e),t}))}))}),[]),x.useEffect((function(){return t(c.jsxs(c.Fragment,{children:[c.jsx(b,{title:e("search.title.global_search"),children:c.jsx(L,{onClick:function(){return N("/sources/all/search/")},size:"large",children:c.jsx(ie,{})})}),c.jsx(G,{shownLangs:r,setShownLangs:o,allLangs:he(null!=y?y:[]),forcedLangs:U()})]})),function(){t(null)}}),[e,r,y]),u?c.jsx(S,{}):h?c.jsx(E,{message:e("global.error.label.failed_to_load_data"),messageExtra:h.message,retry:function(){return d().catch(w())}}):0===(null==y?void 0:y.length)?c.jsx(E,{message:e("source.error.label.no_sources_found")}):c.jsx(c.Fragment,{children:Object.entries(de(null!=y?y:[])).sort((function(e,t){return C(e[0],t[0])})).map((function(e){var t=i(e,2),n=t[0],o=t[1];return-1!==r.indexOf(n)&&c.jsxs(x.Fragment,{children:[c.jsx(g,{variant:"h4",style:{paddingLeft:"24px",paddingTop:"6px",paddingBottom:"16px",fontWeight:"bold"},children:D(n)},n),o.filter((function(e){return a||!e.isNsfw})).map((function(e){return c.jsx(fe,{source:e,showSourceRepo:T},e.id)}))]},n)}))})}var ge=function(e){return e.UPDATE="UPDATE",e.UNINSTALL="UNINSTALL",e.INSTALL="INSTALL",e}(ge||{}),ye=function(e){return e.OBSOLETE="OBSOLETE",e.UPDATING="UPDATING",e.UNINSTALLING="UNINSTALLING",e.INSTALLING="INSTALLING",e}(ye||{}),xe=a(a({},ge),ye),ve=s(s(s({},"UPDATE","UPDATING"),"UNINSTALL","UNINSTALLING"),"INSTALL","INSTALLING"),me=s(s(s({},"UPDATE","UNINSTALL"),"UNINSTALL","INSTALL"),"INSTALL","UNINSTALL"),je=s(s(s(s(s(s(s({},xe.UNINSTALL,"extension.action.label.uninstall"),xe.INSTALL,"extension.action.label.install"),xe.UPDATE,"extension.action.label.update"),xe.OBSOLETE,"extension.state.label.obsolete"),xe.UPDATING,"extension.state.label.updating"),xe.UNINSTALLING,"extension.state.label.uninstalling"),xe.INSTALLING,"extension.state.label.installing"),be=s(s(s({},"UPDATE","extension.label.update_failed"),"INSTALL","extension.label.installation_failed"),"UNINSTALL","extension.label.uninstallation_failed"),Le=function(e,t,n){return t?xe.OBSOLETE:n?xe.UPDATE:e?xe.UNINSTALL:xe.INSTALL};function Se(e){var n=f().t,o=e.extension,a=o.name,l=o.lang,s=o.versionName,u=o.isInstalled,h=o.hasUpdate,v=o.isObsolete,m=o.pkgName,j=o.iconUrl,b=o.isNsfw,L=o.repo,S=e.handleUpdate,E=e.showSourceRepo,N=i(x.useState(Le(u,v,h)),2),I=N[0],O=N[1],A="all"===l?n("extension.language.all"):l.toUpperCase(),U=function(){var e=r(t().mark((function e(r){var o,a;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=me[r],a=ve[r],e.prev=2,O(a),e.t0=r,e.next="INSTALL"===e.t0?7:"UNINSTALL"===e.t0?10:"UPDATE"===e.t0?13:16;break;case 7:return e.next=9,p.updateExtension(m,{install:!0,isObsolete:v}).response;case 9:return e.abrupt("break",17);case 10:return e.next=12,p.updateExtension(m,{uninstall:!0,isObsolete:v}).response;case 12:return e.abrupt("break",17);case 13:return e.next=15,p.updateExtension(m,{update:!0,isObsolete:v}).response;case 15:return e.abrupt("break",17);case 16:throw new Error('Unexpected ExtensionAction "'.concat(r,'"'));case 17:O(o),S(),e.next=25;break;case 21:e.prev=21,e.t1=e.catch(2),O(Le(u,v,h)),T(n(be[r]),"error");case 25:case"end":return e.stop()}}),e,null,[[2,21]])})));return function(t){return e.apply(this,arguments)}}();return c.jsx(H,{children:c.jsxs(W,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",p:2,"&:last-child":{paddingBottom:2}},children:[c.jsxs(d,{sx:{display:"flex",alignItems:"center"},children:[c.jsx(z,{variant:"rounded",sx:{width:56,height:56,flex:"0 0 auto",mr:2,background:"transparent"},alt:a,children:c.jsx(R,{spinnerStyle:{small:!0},imgStyle:{objectFit:"cover",width:"100%",height:"100%"},alt:a,src:p.getValidImgUrlFor(j)})}),c.jsxs(d,{sx:{display:"flex",flexDirection:"column"},children:[c.jsx(g,{variant:"h5",component:"h2",children:a}),c.jsxs(g,{variant:"caption",display:"block",children:[A," ",s,b&&c.jsx(g,{variant:"caption",display:"inline",color:"red",children:" 18+"})]}),E&&c.jsx(g,{variant:"caption",display:"block",children:L})]})]}),c.jsx(y,{variant:"outlined",sx:{color:I===xe.OBSOLETE?"red":"inherit"},onClick:function(){return function(){switch(I){case"INSTALL":case"UPDATE":case"UNINSTALL":U(I).catch(w());break;case"OBSOLETE":U("UNINSTALL").catch(w())}}()},children:n(je[I])})]})})}var Ee=0,we=1;function Te(){var e,n,o=f().t,a=x.useContext(v).setAction,l=N.useIsMobileWidth(),u=p.useGetServerSettings({notifyOnNetworkStatusChange:!0}),d=u.data,j=u.loading,T=u.error,A=u.refetch,U=!(null==d||!d.settings.extensionRepos.length),_=(null!==(e=null==d?void 0:d.settings.extensionRepos.length)&&void 0!==e?e:0)>1,B=x.useRef(null),R=i(m("shownExtensionLangs",k()),2),H=R[0],V=R[1],W=i(m("showNsfw",!0),1)[0],z=i(q("query",J),1)[0],ee=i(x.useState({}),2),te=ee[0],ne=ee[1],re=i(p.useExtensionListFetch(),2),oe=re[0],ae=re[1],ie=ae.data,le=ae.loading,se=ae.error,ce=null==ie||null===(n=ie.fetchExtensions)||void 0===n?void 0:n.extensions,ue=x.useCallback((function(){return ne({})}),[]);x.useEffect((function(){oe()}),[te]);var fe=x.useMemo((function(){return(null!=ce?ce:[]).filter((function(e){var t=W||!e.isNsfw;return z?t&&e.name.toLowerCase().includes(z.toLowerCase()):t}))}),[ce,W,z]),he=x.useMemo((function(){return function(e){var t=[],n=s(s(s(s(s(s({},F.OBSOLETE,[]),F.INSTALLED,[]),F.UPDATE_PENDING,[]),P.ALL,[]),P.OTHER,[]),P.LOCAL_SOURCE,[]);e.forEach((function(e){if(void 0===n[e.lang]&&(n[e.lang]=[],"all"!==e.lang&&t.push(e.lang)),e.isInstalled){if(e.hasUpdate)return void n[F.UPDATE_PENDING].push(e);if(e.isObsolete)return void n[F.OBSOLETE].push(e);n[F.INSTALLED].push(e)}else n[e.lang].push(e)})),t.sort(C);var r=[[F.OBSOLETE,n[F.OBSOLETE]],[F.UPDATE_PENDING,n[F.UPDATE_PENDING]],[F.INSTALLED,n[F.INSTALLED]],[P.ALL,n[P.ALL]],[P.OTHER,n[P.OTHER]],[P.LOCAL_SOURCE,n[P.LOCAL_SOURCE]]],o=t.map((function(e){return[e,n[e]]}));return{allLangs:t,groupedExtensions:r.concat(o)}}(fe)}),[fe]),de=he.allLangs,pe=he.groupedExtensions,ge=x.useMemo((function(){return pe.filter((function(e){return e[we].length>0})).filter((function(e){return M(e[Ee])||H.includes(e[Ee])}))}),[H,pe]),ye=x.useMemo((function(){return ge.map((function(e){return e[we].length}))}),[ge]),xe=x.useMemo((function(){return ge.map((function(e){return i(e,2)[1]})).flat(1)}),[ge]),ve=i(I(x.useState([])),2),me=ve[0],je=ve[1],be=function(e){e.name.toLowerCase().endsWith("apk")?(B.current&&(B.current.value=""),je(o("extension.label.installing_file"),"info"),p.installExternalExtension(e).response.then((function(){ue(),je(o("extension.label.installed_successfully"),"success")})).catch((function(){return je(o("extension.label.installation_failed"),"error")}))):je(o("global.error.label.invalid_file_type"),"error")};x.useEffect((function(){return a(c.jsxs(c.Fragment,{children:[c.jsx(K,{}),c.jsx(b,{title:o("extension.action.label.install_external"),children:c.jsx(L,{onClick:function(){var e;return null===(e=B.current)||void 0===e?void 0:e.click()},size:"large",children:c.jsx($,{})})}),c.jsx(G,{shownLangs:H,setShownLangs:V,allLangs:de})]})),function(){a(null)}}),[o,H,de]),x.useEffect((function(){var e=function(){var e=r(t().mark((function e(n){var r;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,Y(n);case 3:r=e.sent,be(r[0]);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n=function(e){e.preventDefault()};return document.addEventListener("drop",e),document.addEventListener("dragover",n),function(){document.removeEventListener("drop",e),document.removeEventListener("dragover",n)}}),[]);var Le=x.useMemo((function(){return c.jsx("input",{type:"file",style:{display:"none"},ref:B,onChange:function(e){var t,n=null===(t=e.target.files)||void 0===t?void 0:t[0];n&&be(n)}})}),[]),Te=null!=T?T:se;return j||le?c.jsx(S,{}):Te?c.jsx(E,{message:o("global.error.label.failed_to_load_data"),messageExtra:Te.message,retry:function(){T&&A().catch(w()),se&&oe().catch(w())}}):!(null!=ce&&ce.length||U)?c.jsxs(c.Fragment,{children:[me,Le,c.jsxs(O,{sx:{paddingTop:"20px"},alignItems:"center",justifyContent:"center",rowGap:"10px",children:[c.jsx(g,{children:o("extension.label.add_repository_info")}),c.jsx(y,{component:h,variant:"contained",to:"/settings/browseSettings",children:o("settings.title")})]})]}):c.jsxs(c.Fragment,{children:[me,Le,c.jsx(Q,{style:{height:"undefined"},heightToSubtract:l?48:53,overscan:.5*window.innerHeight,groupCounts:ye,groupContent:function(e){var t=i(ge[e],1)[0];return c.jsx(X,{variant:"h4",style:{paddingLeft:"24px",paddingTop:"6px",paddingBottom:"16px",fontWeight:"bold"},isFirstItem:0===e,children:D(t)},t)},itemContent:function(e){var t=xe[e];return c.jsx(Z,{isLastItem:e===xe.length-1,children:c.jsx(Se,{extension:t,handleUpdate:ue,showSourceRepo:_})},"".concat(t.pkgName,"_").concat(t.isInstalled,"_").concat(t.isObsolete,"_").concat(t.hasUpdate))}})]})}var Ne=function(e){var t=e.id,n=e.name,r=e.lang,o=e.iconUrl,a=e.mangaCount;return c.jsx(H,{children:c.jsx(V,{component:h,to:"/migrate/source/".concat(t,"/"),children:c.jsxs(W,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",p:2},children:[c.jsxs(d,{sx:{display:"flex"},children:[c.jsx(z,{variant:"rounded",sx:{width:56,height:56,flex:"0 0 auto",mr:2,background:"transparent"},children:c.jsx(R,{spinnerStyle:{small:!0},imgStyle:{objectFit:"cover",width:"100%",height:"100%"},alt:n,src:p.getValidImgUrlFor(o)})}),c.jsxs(d,{sx:{display:"flex",flexDirection:"column"},children:[c.jsx(g,{variant:"h5",component:"h2",children:n}),c.jsx(g,{variant:"caption",display:"block",children:D(r)})]})]}),c.jsx(oe,{sx:{borderRadius:"5px"},size:"small",label:a})]})})})},Ie=function(){var e=f().t,t=p.useGetMigratableSources({notifyOnNetworkStatusChange:!0}),n=t.data,r=t.loading,o=t.error,i=t.refetch,l=x.useMemo((function(){return function(e){if(!e)return{};var t={};return e.forEach((function(e){var n,r=e.sourceId,o=e.source,i=null!==(n=t[r])&&void 0!==n?n:a({},a({id:r,name:r,lang:"unknown",iconUrl:null,mangaCount:0},o));t[r]=a(a({},i),{},{mangaCount:i.mangaCount+1})})),t}(null==n?void 0:n.mangas.nodes)}),[null==n?void 0:n.mangas.nodes]);return r?c.jsx(S,{}):o?c.jsx(E,{message:e("global.error.label.failed_to_load_data"),messageExtra:o.message,retry:function(){return i().catch(w())}}):c.jsx(A,{children:Object.values(l).map((function(e,t){return c.jsx(Z,{isLastItem:t===Object.values(l).length-1,children:c.jsx(Ne,a({},e))},e.id)}))})}}}}))}();
