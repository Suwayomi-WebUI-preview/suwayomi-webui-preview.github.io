!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function n(e){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?t(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):t(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function r(t,n,r){return(n=function(t){var n=function(t,n){if("object"!=e(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var l=r.call(t,n||"default");if("object"!=e(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"==e(n)?n:n+""}(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a,u,o=[],i=!0,c=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=a.call(n)).done)&&(o.push(r.value),o.length!==t);i=!0);}catch(e){c=!0,l=e}finally{try{if(!i&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(c)throw l}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./index-legacy-Cxcn0TRT.js","./GridLayouts-legacy-CnO1jxoY.js","./BaseMangaGrid-legacy-C-JXMmZt.js","./ViewModule-legacy-DS-kFaI-.js","./Checkbox-legacy-DuzLq7yd.js","./TextField-legacy-CPnnrr8x.js","./SwitchBase-legacy-C6JycwB2.js","./ListPreference-legacy-C9CBjrQT.js","./MangaGrid-legacy-BCSrAOxu.js","./index-legacy-BX9BCyM3.js","./useManageMangaLibraryState-legacy-B-kaENZf.js","./Trackers-legacy-CN_LuGVd.js","./TypographyMaxLines-legacy-ZKSWhSkw.js","./Avatar-legacy-ukm10qZH.js","./Info-legacy-IeJ9GUcn.js","./InputAdornment-legacy-Cll7fjP6.js","./SpinnerImage-legacy-BTFa3d_r.js","./Collapse-legacy-BenCpGab.js","./Link-legacy-BfU8NpT3.js","./NumberSetting-legacy-BYTv2NKm.js","./useMobilePicker-legacy-BJ2zI0yw.js","./Chip-legacy-RV8PGVPB.js","./SelectSetting-legacy-HVtBAVVc.js","./Select-legacy-Br4fE6-0.js","./CheckboxInput-legacy-DIelW9zk.js","./Mangas-legacy-DvqSMkpW.js","./Chapters-legacy-a0VDYoMi.js","./ThreeStateCheckboxInput-legacy-CLIZn09F.js","./Delete-legacy-BD6bv3US.js","./Sync-legacy-DXUxg58G.js","./PlayArrow-legacy-CJsB4GNF.js","./StyledFab-legacy-C6mkVLU5.js"],(function(e,t){"use strict";var r,a,u,o,i,c,s,y,g,f,j,d,b,p,m;return{setters:[function(e){r=e.u,a=e.c,u=e.N,o=e.X,i=e.d,c=e.p,s=e.a,y=e.bu,g=e.bv,f=e.j,j=e.g,d=e.E,b=e.h},function(e){p=e.G},function(e){m=e.B},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("Migrate",(function(){var e,t=r().t,h=a.useContext(u),v=h.setTitle,S=h.setAction,O=o().sourceId,w=l(i("migrateGridLayout",c.List),2),x=w[0],P=w[1],C=s.graphQLClient.client.cache.readFragment({id:s.graphQLClient.client.cache.identify({__typename:"SourceType",id:O}),fragment:y}),M=l(a.useState(null!==C||void 0),2),k=M[0],I=M[1],L=s.useGetSource(g,O,{skip:!!k,notifyOnNetworkStatusChange:!0}),A=L.data,T=L.loading,E=L.error,G=L.refetch,N=n(n({sourceId:O,name:O},C),null==A?void 0:A.source),_=N.sourceId,D=N.name,B=s.useGetMigratableSourceMangas(_,{skip:!k,notifyOnNetworkStatusChange:!0}),F=B.data,Q=B.loading,U=B.error,V=B.refetch;if(a.useEffect((function(){var e;return v(null!==(e=null!=D?D:_)&&void 0!==e?e:t("migrate.title")),S(f.jsx(p,{gridLayout:x,onChange:P})),function(){v(""),S(null)}}),[t,D,_,x]),a.useEffect((function(){T||k||I(!!A||!(null==E||!E.message.includes("The field at path '/source' was declared as a non null type")))}),[T,E]),T||!E&&!k||Q)return f.jsx(j,{});var X=E&&!1===k;if(X||U){var $=X?E:U;return f.jsx(d,{message:t("global.error.label.failed_to_load_data"),messageExtra:$.message,retry:function(){X&&G().catch(b()),U&&V().catch(b())}})}return f.jsx(m,{hasNextPage:!1,loadMore:function(){},isLoading:Q,mangas:null!==(e=null==F?void 0:F.mangas.nodes)&&void 0!==e?e:[],gridLayout:x,mode:"migrate.search"})}))}}}))}();
