!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return r};var n,r={},a=Object.prototype,o=a.hasOwnProperty,i=Object.defineProperty||function(e,t,n){e[t]=n.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",s=c.toStringTag||"@@toStringTag";function f(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{f({},"")}catch(n){f=function(e,t,n){return e[t]=n}}function d(e,t,n,r){var a=t&&t.prototype instanceof x?t:x,o=Object.create(a.prototype),c=new T(r||[]);return i(o,"_invoke",{value:E(e,n,c)}),o}function h(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}r.wrap=d;var p="suspendedStart",g="suspendedYield",v="executing",y="completed",m={};function x(){}function b(){}function j(){}var S={};f(S,u,(function(){return this}));var w=Object.getPrototypeOf,k=w&&w(w(_([])));k&&k!==a&&o.call(k,u)&&(S=k);var L=j.prototype=x.prototype=Object.create(S);function F(e){["next","throw","return"].forEach((function(t){f(e,t,(function(e){return this._invoke(t,e)}))}))}function C(t,n){function r(a,i,c,u){var l=h(t[a],t,i);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==e(f)&&o.call(f,"__await")?n.resolve(f.__await).then((function(e){r("next",e,c,u)}),(function(e){r("throw",e,c,u)})):n.resolve(f).then((function(e){s.value=e,c(s)}),(function(e){return r("throw",e,c,u)}))}u(l.arg)}var a;i(this,"_invoke",{value:function(e,t){function o(){return new n((function(n,a){r(e,t,n,a)}))}return a=a?a.then(o,o):o()}})}function E(e,t,r){var a=p;return function(o,i){if(a===v)throw Error("Generator is already running");if(a===y){if("throw"===o)throw i;return{value:n,done:!0}}for(r.method=o,r.arg=i;;){var c=r.delegate;if(c){var u=O(c,r);if(u){if(u===m)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===p)throw a=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=v;var l=h(e,t,r);if("normal"===l.type){if(a=r.done?y:g,l.arg===m)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(a=y,r.method="throw",r.arg=l.arg)}}}function O(e,t){var r=t.method,a=e.iterator[r];if(a===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=n,O(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var o=h(a,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,m;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,m):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function I(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(I,this),this.reset(!0)}function _(t){if(t||""===t){var r=t[u];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function e(){for(;++a<t.length;)if(o.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}throw new TypeError(e(t)+" is not iterable")}return b.prototype=j,i(L,"constructor",{value:j,configurable:!0}),i(j,"constructor",{value:b,configurable:!0}),b.displayName=f(j,s,"GeneratorFunction"),r.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,j):(e.__proto__=j,f(e,s,"GeneratorFunction")),e.prototype=Object.create(L),e},r.awrap=function(e){return{__await:e}},F(C.prototype),f(C.prototype,l,(function(){return this})),r.AsyncIterator=C,r.async=function(e,t,n,a,o){void 0===o&&(o=Promise);var i=new C(d(e,t,n,a),o);return r.isGeneratorFunction(t)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},F(L),f(L,s,"Generator"),f(L,u,(function(){return this})),f(L,"toString",(function(){return"[object Generator]"})),r.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},r.values=_,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(P),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,a){return c.type="throw",c.arg=e,t.next=r,a&&(t.method="next",t.arg=n),!!a}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),l=o.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),P(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;P(n)}return a}}throw Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:_(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=n),m}},r}function n(e,t,n,r,a,o,i){try{var c=e[o](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,a)}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(t,n,r){return(n=function(t){var n=function(t,n){if("object"!=e(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var a=r.call(t,n||"default");if("object"!=e(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"==e(n)?n:n+""}(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function i(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||u(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,i,c=[],u=!0,l=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=o.call(n)).done)&&(c.push(r.value),c.length!==t);u=!0);}catch(e){l=!0,a=e}finally{try{if(!u&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(l)throw a}}return c}}(e,t)||u(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){if(e){if("string"==typeof e)return l(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./index-legacy-BGeP1VCJ.js","./AppbarSearch-legacy-DBooNj5k.js","./ExpandMore-legacy-Db5E0B_c.js","./FilterList-legacy-Be090u20.js","./GridLayouts-legacy-BILUNRSN.js","./Delete-legacy-BEqDH25N.js","./SortRadioInput-legacy-CZ4WIHYa.js","./CheckboxInput-legacy-BBFuouRV.js","./TextField-legacy-cLTECR_K.js","./Collapse-legacy-CH-HsJWt.js","./useDebounce-legacy-DJlBpyZE.js","./InputAdornment-legacy-SPp2z0L2.js","./ThreeStateCheckboxInput-legacy-DRoXC9lB.js","./StyledFab-legacy-CZ0Fhyhr.js","./useManageMangaLibraryState-legacy-BmZ_7O9-.js","./Chip-legacy-BFfAJP-p.js","./BaseMangaGrid-legacy-Bh4LWs2A.js","./MangaGrid-legacy-D8pGLL3O.js","./Link-legacy-BEEbwg9z.js","./Checkbox-legacy-CWLptx0i.js","./SwitchBase-legacy-CCJZJADd.js","./ListPreference-legacy-eoZKpBbD.js","./Trackers-legacy-CN_LuGVd.js","./Card-legacy-BlgwzEPe.js","./CardContent-legacy-DWgnABy6.js","./Avatar-legacy-CPR-VHa5.js","./Info-legacy-DIfs54kJ.js","./CheckCircle-legacy-DmYYPjh4.js","./SpinnerImage-legacy-CC25lVld.js","./TypographyMaxLines-legacy-DxRvtlb8.js","./CardActionArea-legacy-BZhZXI1J.js","./NumberSetting-legacy-C88tQpvA.js","./useMobilePicker-legacy-BdjvUC-_.js","./SelectSetting-legacy-Bqn-pFoI.js","./Select-legacy-CAFnqPh6.js","./Mangas-legacy-CqqwlkZX.js","./Chapters-legacy-Cb6hIgzt.js","./index-legacy-DZ8zA939.js","./Sync-legacy-CNA80I0m.js","./PlayArrow-legacy-CYtOKcvx.js"],(function(e,r){"use strict";var u,l,s,f,d,h,p,g,v,y,m,x,b,j,S,w,k,L,F,C,E,O,I,P,T,_,A,M,V,N,G,D,B,H,U,R,q,z,W,J,Y,X,$,K,Z,Q,ee,te,ne,re,ae,oe,ie,ce,ue,le,se,fe,de,he,pe,ge,ve,ye,me,xe,be,je,Se,we,ke,Le,Fe;return{setters:[function(e){u=e.d,l=e.s,s=e.j,f=e.r,d=e.i,h=e.a0,p=e.T,g=e.a1,v=e.B,y=e.aL,m=e.a3,x=e.S,b=e.c,j=e.b9,S=e.ay,w=e.u,k=e.b,L=e.P,F=e.f,C=e.I,E=e.J,O=e.W,I=e.X,P=e.aF,T=e.aG,_=e.aH,A=e.h,M=e.b6,V=e.b5,N=e.ba,G=e.bb,D=e.x,B=e.N,H=e.a4,U=e.e,R=e.at,q=e.p,z=e.bc,W=e.bd,J=e.a,Y=e.be,X=e.bf,$=e.bg,K=e.bh,Z=e.m},function(e){Q=e.d,ee=e.u,te=e.A,ne=e.S},function(e){re=e.b,ae=e.a,oe=e.d},function(e){ie=e.d},function(e){ce=e.G},function(e){ue=e.d},function(e){le=e.S,se=e.O},function(e){fe=e.C},function(e){de=e.a,he=e.I,pe=e.S,ge=e.b,ve=e.T},function(e){ye=e.C},function(e){me=e.u},function(e){xe=e.I},function(e){be=e.T},function(e){je=e.S},function(e){Se=e.o},function(e){we=e.C},function(e){ke=e.B},function(e){Le=e.g},function(e){Fe=e.L},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){function r(){var e=c(u("source-grid-layout",l.Compact),2),t=e[0],n=e[1];return s.jsx(ce,{gridLayout:t,onChange:n})}e("SourceMangas",(function(){var e,t,n,i,f,d=w().t,h=b.useContext(B),p=h.setTitle,g=h.setAction,v=h.appBarHeight,y=H().sourceId,m=U(),x=R(),j=x.key,S=x.state,k=null!==(e=R().state)&&void 0!==e?e:{},L=k.contentType,E=void 0===L?0:L,O=k.clearCache,I=void 0!==O&&O,P=c(b.useState(!0),2),T=P[0],_=P[1];b.useEffect((function(){_(!1)}),[]);var A=q().settings.hideLibraryEntries,M=c(u("source-grid-layout",l.Compact),1)[0],V=c(ee("query",ne),1)[0],N=c(z("source-mangas-".concat(y,"-filters"),[]),2),G=N[0],D=N[1],Q=c(z("source-mangas-location-".concat(j,"-").concat(y,"-filters"),null!=G?G:[]),2),re=Q[0],ae=Q[1],ce=c(b.useState(re),2),ue=ce[0],le=ce[1],se=c(z("source-mangas-".concat(y,"-content-type"),E),2),fe=se[0],de=se[1],he=c(z("source-mangas-location-".concat(j,"-").concat(y,"-content-type"),V?2:fe),2),pe=he[0],ge=he[1];b.useEffect((function(){return function(){D(void 0),de(void 0)}}),[y]);var ve=b.useCallback((function(){W.session.setItem(Le(x),void 0,!1),window.scrollTo(0,0)}),[j]),ye=function(e){D(e),ae(e),ve()},me=function(e){de(e),ge(e)},xe=c(Ke(y,pe,V,re,1,A),2),be=xe[0],je=xe[1],Se=je.data,we=je.isLoading,Ce=je.size,Ee=je.abortRequest,Oe=je.filteredOutAllItemsOfFetchedPage,Ie=we||Oe,Pe=null!==(t=null==Se||null===(n=Se.fetchSourceManga)||void 0===n?void 0:n.mangas)&&void 0!==t?t:[],Te=!(null==Se||null===(i=Se.fetchSourceManga)||void 0===i||!i.hasNextPage),_e=J.useGetSource(Y,y).data,Ae=null==_e?void 0:_e.source,Me=null!==(f=null==Ae?void 0:Ae.filters)&&void 0!==f?f:[],Ve=b.useMemo((function(){return Re(Ae)}),[Ae,null==Ae?void 0:Ae.meta]).savedSearches,Ne=void 0===Ve?{}:Ve,Ge=ze(null!=Ae?Ae:{id:y},(function(){return Z(d("global.error.label.failed_to_save_changes"),"error")})),De=b.useCallback((function(e){var t=Ne[e],n=t.query,r=t.filters;r&&(le(r),ye(r)),m({pathname:"",search:n?"query=".concat(n):void 0},{state:a(a({},S),{},{contentType:2})})}),[Ne,S]),Be=b.useCallback((function(e,t){if("delete"===t){var n=a({},Ne);return delete n[e],void Ge("savedSearches",n)}var r=a(a({},Ne),{},o({},e,{query:null!=V?V:void 0,filters:re}));Ge("savedSearches",r)}),[Ne,V,re]),He=Ie?void 0:d($e[pe]),qe="0"===y?s.jsxs(s.Fragment,{children:[s.jsxs("span",{children:[d("source.local_source.label.checkout")," "]}),s.jsx(Fe,{href:"https://github.com/Suwayomi/Suwayomi-Server/wiki/Local-Source",target:"_blank",rel:"noreferrer",children:d("source.local_source.label.guide")})]}):void 0,Xe=b.useCallback((function(e,t){me(e),ve(),V&&!t&&m({pathname:""},{state:a(a({},S),{},{contentType:e})})}),[me,V,ve]);V&&2!==pe&&Xe(2,V);var Ze=b.useCallback((function(){Te&&be(Ce+1)}),[Ce,Te,pe]);return b.useEffect((function(){Oe&&Te&&!we&&be(Ce+1)}),[Oe,we]),b.useEffect((function(){I&&(K.REVALIDATION.includes(y)&&J.clearBrowseCacheFor(y))}),[I]),b.useEffect((function(){return function(){2!==pe||T||(Ee(new Error("SourceMangas(".concat(y,"): search string changed"))),ve())}}),[V]),b.useEffect((function(){var e;return p(null!==(e=null==Ae?void 0:Ae.displayName)&&void 0!==e?e:d("source.title_one")),g(s.jsxs(s.Fragment,{children:[s.jsx(te,{}),s.jsx(r,{}),(null==Ae?void 0:Ae.isConfigurable)&&s.jsx(F,{title:d("settings.title"),children:s.jsx(C,{onClick:function(){return m("/sources/".concat(y,"/configure/"))},"aria-label":"display more actions",edge:"end",color:"inherit",size:"large",children:s.jsx(X,{})})})]})),function(){p(""),g(null)}}),[d,Ae]),s.jsxs(Ye,{children:[s.jsxs(We,{sx:{top:"".concat(v,"px")},children:[s.jsx(Je,{variant:0===pe?"contained":"outlined",startIcon:s.jsx(oe,{}),onClick:function(){return Xe(0)},children:d("global.button.popular")}),void 0===(null==Ae?void 0:Ae.supportsLatest)||Ae.supportsLatest?s.jsx(Je,{disabled:!(null!=Ae&&Ae.supportsLatest),variant:1===pe?"contained":"outlined",startIcon:s.jsx($,{}),onClick:function(){return Xe(1)},children:d("global.button.latest")}):null,s.jsx(Je,{variant:2===pe?"contained":"outlined",startIcon:s.jsx(ie,{}),onClick:function(){return Xe(2,V)},children:d("global.button.filter")})]}),s.jsx(ke,{gridWrapperProps:{sx:{px:1,pb:1}},mangas:Pe,hasNextPage:Te,loadMore:Ze,message:He,messageExtra:qe,isLoading:Ie,gridLayout:M,mode:"source",inLibraryIndicator:!0},pe),2===pe&&s.jsx(Ue,{savedSearches:Ne,selectSavedSearch:De,updateSavedSearches:Be,sourceFilter:Me,updateFilterValue:le,setTriggerUpdate:function(){ye(ue)},resetFilterValue:function(){le([]),ye([])},update:ue})]})}));var Ce={},Ee=d;Object.defineProperty(Ce,"__esModule",{value:!0});var Oe=Ce.default=void 0,Ie=Ee(f()),Pe=s;Oe=Ce.default=(0,Ie.default)((0,Pe.jsx)("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3m3-10H5V5h10z"}),"Save");var Te=function(e){var t=e.state,n=e.name,r=e.position,a=e.group,o=e.updateFilterValue,u=e.update,l=c(h.useState(t),2),f=l[0],d=l[1];return void 0!==t?s.jsx(fe,{label:n,checked:f,onChange:function(e){d(e.target.checked);var t=u.filter((function(e){return!(r===e.position&&a===e.group)}));o([].concat(i(t),[{type:"checkBoxState",position:r,state:e.target.checked,group:a}]))}}):null},_e=function(e){var t=e.name;return s.jsx(p,{sx:{mt:2},variant:"subtitle2",children:t},t)};var Ae=function(e){return function(e,t,n,r,a,o,u){var l=c(h.useState(n),2),f=l[0],d=l[1];if(e){var p=e.map((function(e){return s.jsx(g,{value:e,children:e},"".concat(t," ").concat(e))}));return s.jsxs(de,{sx:{my:1},variant:"standard",children:[s.jsx(he,{children:t}),s.jsx(pe,{name:t,value:e[f],label:t,onChange:function(t){var n=e.indexOf("".concat(t.target.value));d(n);var c=o.filter((function(e){return!(r===e.position&&u===e.group)}));a([].concat(i(c),[{type:"selectState",position:r,state:n,group:u}]))},children:p})]})}return null}(e.values,e.name,e.state,e.position,e.updateFilterValue,e.update,e.group)},Me=function(e){var t=e.values,n=e.name,r=e.state,a=e.position,o=e.group,u=e.updateFilterValue,l=e.update,f=c(h.useState(r),2),d=f[0],p=f[1],g=c(h.useState(!1),2),b=g[0],j=g[1];if(t){return s.jsxs(v,{sx:{mx:-2},children:[s.jsxs(y,{onClick:function(){j(!b)},children:[s.jsx(m,{primary:n}),b?s.jsx(re,{}):s.jsx(ae,{})]}),s.jsx(ye,{in:b,children:s.jsx(x,{sx:{mx:4},children:t.map((function(e,t){return s.jsx(le,{label:e,checked:d.index===t,sortDescending:!d.ascending,onClick:function(){return function(e){var t=d;t.index===e?t.ascending=!t.ascending:t.ascending=!0,t.index=e,p(t);var n=l.filter((function(e){return!(a===e.position&&o===e.group)}));u([].concat(i(n),[{type:"sortState",position:a,state:t,group:o}]))}(t)}},"".concat(n," ").concat(e))}))})})]})}return null},Ve=function(e){var t=e.state,n=e.name,r=e.position,a=e.group,o=e.updateFilterValue,u=e.update,l=c(h.useState(t||""),2),f=l[0],d=l[1],p=me(f,500);return b.useEffect((function(){var e=u.filter((function(e){return!(r===e.position&&a===e.group)}));o([].concat(i(e),[{type:"textState",position:r,state:p,group:a}]))}),[p]),void 0!==t?s.jsxs(de,{sx:{my:1},variant:"standard",children:[s.jsx(he,{children:n}),s.jsx(ge,{name:n,value:f,onChange:function(e){var t=e.target.value;return d(t)},endAdornment:s.jsx(xe,{position:"end",children:s.jsx(Q,{})})})]}):null},Ne=function(e){switch(e){case 0:return j.Ignore;case 1:return j.Include;case 2:return j.Exclude;default:throw new Error("Unexpected state number ".concat(e))}},Ge=function(e){var t=e.state,n=e.name,r=e.position,a=e.group,o=e.updateFilterValue,u=e.update,l=c(h.useState(function(e){switch(e){case j.Ignore:return 0;case j.Include:return 1;case j.Exclude:return 2;default:throw new Error("Unexpected TriState ".concat(e))}}(t)),2),f=l[0],d=l[1];return void 0!==t?s.jsx(be,{label:n,checked:[void 0,!0,!1][f],onChange:function(e){return function(e){var t=void 0===e?0:e?1:2;d(t);var n=u.filter((function(e){return!(r===e.position&&a===e.group)}));o([].concat(i(n),[{type:"triState",position:r,state:Ne(t),group:a}]))}(e)}}):null},De=function(e){var t=e.state,n=e.name,r=e.position,a=e.updateFilterValue,o=e.update,i=c(h.useState(!1),2),u=i[0],l=i[1];return s.jsxs(v,{sx:{mx:-2},children:[s.jsxs(y,{onClick:function(){return l(!u)},children:[s.jsx(m,{primary:n}),u?s.jsx(re,{}):s.jsx(ae,{})]}),s.jsx(ye,{in:u,children:s.jsx(x,{sx:{mx:4},children:s.jsx(He,{sourceFilter:t,group:r,updateFilterValue:a,update:o})})})]})},Be=function(e){var t=e.name;return s.jsx(S,{sx:{my:1},textAlign:"center",children:t},t)};function He(e){var t=e.sourceFilter,n=e.group,r=e.updateFilterValue,a=e.update;return s.jsx(x,{children:t.map((function(e,t){var o,i,c,u,l,f=a.find((function(e){return e.group===n&&e.position===t}));switch(f=f?f.state:f,e.type){case"CheckBoxFilter":return s.jsx(Te,{name:e.name,state:null!==(o=f)&&void 0!==o?o:e.CheckBoxFilterDefault,position:t,group:n,updateFilterValue:r,update:a},"filters ".concat(e.name));case"GroupFilter":return s.jsx(De,{name:e.name,state:e.filters,position:t,updateFilterValue:r,update:a},"filters ".concat(e.name));case"HeaderFilter":return s.jsx(_e,{name:e.name},"filters ".concat(e.name));case"SelectFilter":return s.jsx(Ae,{name:e.name,values:e.values,state:null!=f?parseInt(f,10):e.SelectFilterDefault,position:t,group:n,updateFilterValue:r,update:a},"filters ".concat(e.name));case"SeparatorFilter":return s.jsx(Be,{name:e.name},"filters ".concat(e.name));case"SortFilter":return s.jsx(Me,{name:e.name,values:e.values,state:null!==(i=f)&&void 0!==i?i:{ascending:null===(c=e.SortFilterDefault)||void 0===c?void 0:c.ascending,index:null===(u=e.SortFilterDefault)||void 0===u?void 0:u.index},position:t,group:n,updateFilterValue:r,update:a},"filters ".concat(e.name));case"TextFilter":return s.jsx(Ve,{name:e.name,state:null!==(l=f)&&void 0!==l?l:e.TextFilterDefault,position:t,group:n,updateFilterValue:r,update:a},"filters ".concat(e.name));case"TriStateFilter":return s.jsx(Ge,{name:e.name,state:null!=f?f:e.TriStateFilterDefault,position:t,group:n,updateFilterValue:r,update:a},"filters ".concat(e.name));default:throw new Error('Unknown source filter "'.concat(e,'"'))}}))},"filters ".concat(n))}function Ue(e){var t=e.savedSearches,n=void 0===t?{}:t,r=e.selectSavedSearch,o=e.updateSavedSearches,i=e.sourceFilter,u=e.updateFilterValue,l=e.resetFilterValue,f=e.setTriggerUpdate,d=e.update,h=w().t,g=c(b.useState(!1),2),y=g[0],m=g[1],j=c(b.useState(""),2),S=j[0],M=j[1],V=Object.keys(n),N=!!V.length;return s.jsxs(s.Fragment,{children:[s.jsxs(je,{onClick:function(){return m(!y)},variant:"extended",color:"primary",children:[s.jsx(ie,{}),h("global.button.filter")]}),s.jsxs(se,{open:y,onClose:function(){return m(!1)},children:[s.jsxs(v,{sx:{p:2,pb:N?void 0:0},children:[s.jsxs(v,{sx:{display:"flex",pb:1},children:[s.jsx(k,{onClick:function(){l(0),m(!1)},children:h("global.button.reset")}),s.jsx(L,{variant:"dialog",popupId:"source-browse-save-search",children:function(e){return s.jsxs(s.Fragment,{children:[s.jsx(F,{title:h("source.filter.save_search.label.save"),children:s.jsx(C,a(a({sx:{marginLeft:"auto"}},E(e)),{},{children:s.jsx(Oe,{})}))}),s.jsxs(O,a(a({},I(e)),{},{maxWidth:"xs",fullWidth:!0,children:[s.jsx(P,{children:h("source.filter.save_search.dialog.label.title")}),s.jsx(T,{children:s.jsx(ve,{sx:{width:"100%"},value:S,onChange:function(e){return M(e.target.value)},slotProps:{htmlInput:{maxLength:50}}})}),s.jsxs(_,{children:[s.jsx(k,{onClick:function(){M(""),e.close()},children:h("global.button.cancel")}),s.jsx(k,{onClick:function(){o(S,"create"),M(""),e.close()},children:h("global.button.ok")})]})]}))]})}}),s.jsx(k,{variant:"contained",onClick:function(){f(0),m(!1)},children:h("global.button.submit")})]}),N&&s.jsxs(s.Fragment,{children:[s.jsx(p,{sx:{pb:1},children:"Saved searches"}),s.jsx(x,{sx:{flexDirection:"row"},children:V.map((function(e){return s.jsx(we,{label:e,onClick:function(){m(!1),r(e)},onDelete:function(){Se({title:h("global.label.are_you_sure"),message:h("source.filter.save_search.dialog.label.delete",{name:e}),actions:{confirm:{title:h("global.button.delete")}}}).then((function(){return o(e,"delete")})).catch(A())},deleteIcon:s.jsx(F,{title:h("source.filter.save_search.label.delete"),children:s.jsx(ue,{})}),variant:"outlined"})}))})]})]}),s.jsx(v,{sx:{pb:2,mx:2},children:s.jsx(He,{sourceFilter:i,updateFilterValue:u,group:void 0,update:d})})]})]})}var Re=function(){var e,t,n=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).meta,r=arguments.length>1?arguments[1]:void 0;return a(a({},e=M({meta:V(n)},{savedSearches:void 0},r)),{},{savedSearches:null!==(t=N(e.savedSearches))&&void 0!==t?t:void 0})},qe=function(){var e,r=(e=t().mark((function e(n,r,i){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",G(n,[[r,(t=o({},r,i),a(a({},t),{},{savedSearches:t.savedSearches?JSON.stringify(t.savedSearches):void 0}))[r]]]));case 1:case"end":return e.stop()}var t}),e)})),function(){var t=this,r=arguments;return new Promise((function(a,o){var i=e.apply(t,r);function c(e){n(i,a,o,c,u,"next",e)}function u(e){n(i,a,o,c,u,"throw",e)}c(void 0)}))});return function(e,t,n){return r.apply(this,arguments)}}(),ze=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:A();return function(n,r){return qe(e,n,r).catch(t)}},We=D("div")((function(e){var t=e.theme;return{display:"flex",position:"sticky",width:"100%",zIndex:1,padding:t.spacing(1),gap:t.spacing(1),backgroundColor:t.palette.background.default}})),Je=D(k)((function(){return{}})),Ye=D(v)((function(){return{minHeight:"100%",position:"relative"}})),Xe=e("SourceContentType",function(e){return e[e.POPULAR=0]="POPULAR",e[e.LATEST=1]="LATEST",e[e.SEARCH=2]="SEARCH",e}(Xe||{})),$e=o(o(o({},0,"manga.error.label.no_mangas_found"),1,"manga.error.label.no_mangas_found"),2,"manga.error.label.no_matches"),Ke=function(e,t,n,r,c,u){var l,s;switch(t){case 0:s=J.useGetSourcePopularMangas(e,c);break;case 1:s=J.useGetSourceLatestMangas(e,c);break;case 2:s=J.useSourceSearch(e,null!=n?n:"",r.map((function(e){var t=e.position,n=e.state,r=e.group;return void 0!==r?{position:r,groupChange:o({position:t},e.type,n)}:o({position:t},e.type,n)})),c);break;default:throw new Error('Unknown ContentType "'.concat(t,'"'))}var f=s[1],d=f.findLastIndex((function(e){var t;return!(null===(t=e.data)||void 0===t||!t.fetchSourceManga)})),h=f[d],p=f.slice(-1)[0].isLoading,g=!p,v=b.useMemo((function(){var e=[];return f.forEach((function(t,n){var r,a,o,c,l,s=null!==(r=null===(a=t.data)||void 0===a||null===(a=a.fetchSourceManga)||void 0===a?void 0:a.mangas)&&void 0!==r?r:[],d=s.filter((function(e){return!u||!e.inLibrary})),h=(o=[].concat(i(e),i(d)),c={},l=[],o.forEach((function(e){c[e.id]||(c[e.id]=e,l.push(e))})),l),v=!p&&f.length===n+1;g=v&&!d.length&&!!s.length,e=h})),e}),[f,u]);return-1===d?[s[0],a(a({},s[1][s[1].length-1]),{},{filteredOutAllItemsOfFetchedPage:g})]:[s[0],a(a({},f[f.length-1]),{},{data:a(a({},h.data),{},{fetchSourceManga:a(a({},h.data.fetchSourceManga),{},{hasNextPage:!(f.length>d+1)&&!(null===(l=h.data.fetchSourceManga)||void 0===l||!l.hasNextPage),mangas:v})}),filteredOutAllItemsOfFetchedPage:g})]}}}}))}();