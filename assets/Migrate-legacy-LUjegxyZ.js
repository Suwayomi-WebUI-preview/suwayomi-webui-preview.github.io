!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function r(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?t(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(t,r,n){return(r=function(t){var r=function(t,r){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var a=n.call(t,r||"default");if("object"!=e(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==e(r)?r:r+""}(r))in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,l,o,i=[],u=!0,c=!1;try{if(l=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=l.call(r)).done)&&(i.push(n.value),i.length!==t);u=!0);}catch(e){c=!0,a=e}finally{try{if(!u&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(c)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}System.register(["./index-legacy-D9lHOVJf.js","./GridLayouts-legacy-b8nWZXFO.js","./BaseMangaGrid-legacy-CjVm64H_.js","./ListPreference-legacy-CtDVvsE7.js","./MangaGrid-legacy-Ct2djRgx.js","./useManageMangaLibraryState-legacy-DE9AOaEm.js","./Trackers-legacy-CN_LuGVd.js","./Avatar-legacy-CplX6aCi.js","./Info-legacy-q0wgFv_K.js","./CheckCircle-legacy-jsKwY7t3.js","./NumberSetting-legacy-BVYNBrAb.js","./useMobilePicker-legacy-DMjEHPAd.js","./Chip-legacy-tNTmFPG6.js","./SelectSetting-legacy-BjnsEuEM.js","./ThreeStateCheckboxInput-legacy-MDzko6U8.js","./Sync-legacy-BRffRNRO.js","./PlayArrow-legacy-DQrvjwQr.js","./StyledFab-legacy-S0kVGewF.js"],(function(e,t){"use strict";var n,l,o,i,u,c,s,f,y,g,b,d,m,p,j,h;return{setters:[function(e){n=e.u,l=e.f,o=e.N,i=e.aD,u=e.g,c=e.Y,s=e.r,f=e.bU,y=e.bV,g=e.j,b=e.k,d=e.E,m=e.l,p=e.m},function(e){j=e.G},function(e){h=e.B},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("Migrate",(function(){var e,t=n().t,v=l.useContext(o),S=v.setTitle,O=v.setAction,w=i().sourceId,P=a(u("migrateGridLayout",c.List),2),x=P[0],C=P[1],L=s.graphQLClient.client.cache.readFragment({id:s.graphQLClient.client.cache.identify({__typename:"SourceType",id:w}),fragment:f}),k=a(l.useState(null!==L||void 0),2),M=k[0],A=k[1],E=s.useGetSource(y,w,{skip:!!M,notifyOnNetworkStatusChange:!0}),I=E.data,T=E.loading,G=E.error,N=E.refetch,_=r(r({sourceId:w,name:w},L),null==I?void 0:I.source),D=_.sourceId,Q=_.name,U=s.useGetMigratableSourceMangas(D,{skip:!M,notifyOnNetworkStatusChange:!0}),B=U.data,F=U.loading,V=U.error,J=U.refetch;if(l.useLayoutEffect((function(){var e;return S(null!==(e=null!=Q?Q:D)&&void 0!==e?e:t("migrate.title")),O(g.jsx(j,{gridLayout:x,onChange:C})),function(){S(""),O(null)}}),[t,Q,D,x]),l.useEffect((function(){T||M||A(!!I||!(null==G||!G.message.includes("The field at path '/source' was declared as a non null type")))}),[T,G]),T||!G&&!M||F)return g.jsx(b,{});var R=G&&!1===M;if(R||V){var W=R?G:V;return g.jsx(d,{message:t("global.error.label.failed_to_load_data"),messageExtra:m(W),retry:function(){R&&N().catch(p()),V&&J().catch(p())}})}return g.jsx(h,{hasNextPage:!1,loadMore:function(){},isLoading:F,mangas:null!==(e=null==B?void 0:B.mangas.nodes)&&void 0!==e?e:[],gridLayout:x,mode:"migrate.search"})}))}}}))}();