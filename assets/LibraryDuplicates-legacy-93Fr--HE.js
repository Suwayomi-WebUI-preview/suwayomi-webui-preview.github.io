!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function n(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?t(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(t,n,r){return(n=function(t){var n=function(t,n){if("object"!=e(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var a=r.call(t,n||"default");if("object"!=e(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"==e(n)?n:n+""}(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i,o,l=[],u=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);u=!0);}catch(e){c=!0,a=e}finally{try{if(!u&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(c)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./index-legacy-BS5NZc4u.js","./GridLayouts-legacy-D1JQvbPh.js","./MangaGrid-legacy-DLoEiX3A.js","./Virtuoso.util-legacy-BIq2LQdM.js","./BaseMangaGrid-legacy-Be3uhFpm.js","./ListPreference-legacy-D0ptkKoS.js","./useManageMangaLibraryState-legacy-9KWObnxQ.js","./Trackers-legacy-CN_LuGVd.js","./Avatar-legacy-9hc5l4J8.js","./CheckCircle-legacy-LcXugjZJ.js","./Mangas-legacy-rppH4DH7.js","./NumberSetting-legacy-DUFgAPG1.js","./useMobilePicker-legacy-B1X9nYmQ.js","./Chip-legacy-Cv4gxHis.js","./SelectSetting-legacy-JAcxT85d.js","./ThreeStateCheckboxInput-legacy-Bo9Zh1EU.js","./Sync-legacy-ldANbchP.js","./PlayArrow-legacy-CM-dpLuR.js","./StyledFab-legacy-hlkBdY_G.js"],(function(e,t){"use strict";var r,i,o,l,u,c,s,f,y,g,d,b,p,m,j,h,v,x,S,O,w,C,L,P,k,M,A,I;return{setters:[function(e){r=e.u,i=e.g,o=e.W,l=e.f,u=e.N,c=e.j,s=e.ad,f=e.I,y=e.ae,g=e.bw,d=e.ag,b=e.ah,p=e.aw,m=e.X,j=e.c,h=e.b_,v=e.l,x=e.E,S=e.m,O=e.T,w=e.B},function(e){C=e.G},function(e){L=e.b},function(e){P=e.V,k=e.S,M=e.a,A=e.b},function(e){I=e.B},null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("LibraryDuplicates",(function(){var e=r().t,T=a(i("libraryDuplicatesGridLayout",o.List),2),D=T[0],E=T[1],G=a(i("libraryDuplicatesCheckAlternativeTitles",!1),2),F=G[0],N=G[1],_=l.useContext(u),W=_.setTitle,B=_.setAction;l.useLayoutEffect((function(){return W(e("library.settings.advanced.duplicates.label.title")),B(c.jsxs(c.Fragment,{children:[c.jsx(C,{gridLayout:D,onChange:E}),c.jsx(s,{variant:"popover",popupId:"library-dupliactes-settings",children:function(t){return c.jsxs(c.Fragment,{children:[c.jsx(f,n(n({},y(t)),{},{color:"inherit",children:c.jsx(g,{})})),c.jsx(d,n(n({},b(t)),{},{children:c.jsx(p,{children:c.jsx(m,{label:e("library.settings.advanced.duplicates.settings.label.check_description"),checked:F,onChange:function(e,t){return N(t)}})})}))]})}})]})),function(){W(""),B(null)}}),[e,D,F]);var K=j.useGetMangas(h,{condition:{inLibrary:!0}}),U=K.data,V=K.loading,Q=K.error,R=K.refetch,$=a(l.useState(!0),2),z=$[0],X=$[1],Z=a(l.useState({}),2),q=Z[0],H=Z[1];l.useEffect((function(){var e;X(!0);var n=null!==(e=null==U?void 0:U.mangas.nodes)&&void 0!==e?e:[];if(!n.length)return H({}),function(){};var r=new Worker(new URL("/assets/LibraryDuplicatesWorker-Q48iwAfs.js",t.meta.url),{type:"module"});return r.onmessage=function(e){H(e.data),X(!1)},r.postMessage({mangas:n,checkAlternativeTitles:F}),function(){return r.terminate()}}),[null==U?void 0:U.mangas.nodes,F]);var J=l.useMemo((function(){return Object.keys(q).toSorted((function(e,t){return e.localeCompare(t)}))}),[q]),Y=l.useMemo((function(){return J.map((function(e){return q[e]})).flat()}),[q]),ee=l.useMemo((function(){return J.map((function(e){return q[e]})).map((function(e){return e.length}))}),[q]),te=P.useCreateGroupedComputeItemKey(ee,l.useCallback((function(e){return J[e]}),[J]),l.useCallback((function(e,t){return"".concat(J[t],"-").concat(Y[e].id,"}")}),[J,Y]));return V||z?c.jsx(v,{}):Q?c.jsx(x,{message:e("global.error.label.failed_to_load_data"),messageExtra:Q.message,retry:function(){return R().catch(S())}}):D===o.List?c.jsx(k,{groupCounts:ee,groupContent:function(e){return c.jsx(M,{isFirstItem:0===e,children:c.jsx(O,{variant:"h5",component:"h2",children:J[e]})})},computeItemKey:te,itemContent:function(e){return c.jsx(A,{children:c.jsx(L,{manga:Y[e],gridLayout:D,selected:null,mode:"duplicate"})})}}):J.map((function(e,t){return c.jsxs(w,{children:[c.jsx(M,{sx:{pt:0===t?void 0:0,pb:0},isFirstItem:!1,children:c.jsx(O,{variant:"h5",component:"h2",children:e})}),c.jsx(I,{mangas:q[e],hasNextPage:!1,loadMore:function(){},isLoading:!1,gridLayout:D,inLibraryIndicator:!1,horizontal:!0,mode:"duplicate"})]},e)}))}))}}}))}();
