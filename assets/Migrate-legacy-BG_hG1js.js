!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function r(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?t(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(t,r,n){return(r=function(t){var r=function(t,r){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var a=n.call(t,r||"default");if("object"!=e(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==e(r)?r:r+""}(r))in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,l,i=[],u=!0,c=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=o.call(r)).done)&&(i.push(n.value),i.length!==t);u=!0);}catch(e){c=!0,a=e}finally{try{if(!u&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(c)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}System.register(["./index-legacy-lUE3xiHP.js","./GridLayouts-legacy-DF_DejJh.js","./BaseMangaGrid-legacy-DJhLozNq.js","./ListPreference-legacy-BC3DAFJF.js","./MangaGrid-legacy-DMEtXfj4.js","./ChaptersDownloadActionMenuItems-legacy-sGLZE_ce.js","./Trackers-legacy-CN_LuGVd.js","./Avatar-legacy-UsENNj4S.js","./Info-legacy-CkMCBXBP.js","./CheckCircle-legacy-B5gsY5j2.js","./NumberSetting-legacy-CNh0eQ8K.js","./useMobilePicker-legacy-DSkCIOXz.js","./Chip-legacy-C5xAPsH0.js","./SelectSetting-legacy-CN-kCZdP.js","./Sync-legacy-DbGSBFQB.js","./PlayArrow-legacy-BT7DLV9y.js","./StyledFab-legacy-BCQDvcBQ.js"],(function(e,t){"use strict";var n,o,l,i,u,c,s,f,y,g,d,b,m,p,j,h;return{setters:[function(e){n=e.u,o=e.f,l=e.aK,i=e.g,u=e.Z,c=e.r,s=e.bS,f=e.h,y=e.bT,g=e.j,d=e.l,b=e.E,m=e.m,p=e.n},function(e){j=e.G},function(e){h=e.B},null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("Migrate",(function(){var e,t=n().t,v=o(),S=v.setTitle,O=v.setAction,w=l().sourceId,P=a(i("migrateGridLayout",u.List),2),A=P[0],C=P[1],L=c.graphQLClient.client.cache.readFragment({id:c.graphQLClient.client.cache.identify({__typename:"SourceType",id:w}),fragment:s}),x=a(f.useState(null!==L||void 0),2),M=x[0],k=x[1],E=c.useGetSource(y,w,{skip:!!M,notifyOnNetworkStatusChange:!0}),I=E.data,T=E.loading,G=E.error,D=E.refetch,N=r(r({sourceId:w,name:w},L),null==I?void 0:I.source),_=N.sourceId,Q=N.name,B=c.useGetMigratableSourceMangas(_,{skip:!M,notifyOnNetworkStatusChange:!0}),F=B.data,U=B.loading,$=B.error,J=B.refetch;if(f.useLayoutEffect((function(){var e;return S(null!==(e=null!=Q?Q:_)&&void 0!==e?e:t("migrate.title")),O(g.jsx(j,{gridLayout:A,onChange:C})),function(){S(""),O(null)}}),[t,Q,_,A]),f.useEffect((function(){T||M||k(!!I||!(null==G||!G.message.includes("The field at path '/source' was declared as a non null type")))}),[T,G]),T||!G&&!M||U)return g.jsx(d,{});var K=G&&!1===M;if(K||$){var R=K?G:$;return g.jsx(b,{message:t("global.error.label.failed_to_load_data"),messageExtra:m(R),retry:function(){K&&D().catch(p()),$&&J().catch(p())}})}return g.jsx(h,{hasNextPage:!1,loadMore:function(){},isLoading:U,mangas:null!==(e=null==F?void 0:F.mangas.nodes)&&void 0!==e?e:[],gridLayout:A,mode:"migrate.search"})}))}}}))}();
