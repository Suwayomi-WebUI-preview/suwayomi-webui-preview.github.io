!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function n(e){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?t(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):t(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function r(t,n,r){return(n=function(t){var n=function(t,n){if("object"!=e(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var l=r.call(t,n||"default");if("object"!=e(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"==e(n)?n:n+""}(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function l(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||a(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,i,a,o=[],u=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(o.push(r.value),o.length!==t);u=!0);}catch(e){c=!0,l=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw l}}return o}}(e,t)||a(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){if(e){if("string"==typeof e)return o(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./index-legacy-DuStmmwR.js","./GridLayouts-legacy-D3a1ZAH3.js","./CheckboxInput-legacy-BbrzI25A.js","./MangaGrid-legacy-Dq1VlWBa.js","./StyledGroupItemWrapper-legacy-BPPz9Sg-.js","./BaseMangaGrid-legacy-Dh1kXdp0.js","./Strings-legacy-I1Ww2TW7.js","./ViewModule-legacy-BX16S5qi.js","./Checkbox-legacy-CSi_jY84.js","./TextField-legacy-C04HWFDx.js","./SwitchBase-legacy-VHqQZMrF.js","./ListPreference-legacy-Dy_njXs8.js","./index-legacy-BL4CMZKR.js","./useManageMangaLibraryState-legacy-Cbc_ePwO.js","./Trackers-legacy-CN_LuGVd.js","./CardContent-legacy-B6FtOr0d.js","./Avatar-legacy-DJtDvgXW.js","./Info-legacy-Bfurgh9C.js","./InputAdornment-legacy-CJ7zNnu7.js","./SpinnerImage-legacy-JJaN9Ffy.js","./TypographyMaxLines-legacy-_7yUJ7Dq.js","./Collapse-legacy-CRlp_zub.js","./Link-legacy-D6uOqf2U.js","./NumberSetting-legacy-NfxEQ-Ca.js","./useMobilePicker-legacy-D-_Ra1Kr.js","./Chip-legacy-Dbms6tmE.js","./SelectSetting-legacy-wUxSgjre.js","./Select-legacy-BnY3xNVB.js","./Mangas-legacy-CqqcRala.js","./Chapters-legacy-B-5WrL2J.js","./ThreeStateCheckboxInput-legacy-D9de9kz5.js","./Delete-legacy-D8r0EeNK.js","./Sync-legacy-InnEMUO_.js","./PlayArrow-legacy-DiwJfjwO.js","./StyledFab-legacy-J9bGWJcg.js"],(function(e,t){"use strict";var r,a,o,u,c,s,f,y,d,g,j,b,p,m,v,h,S,x,O,w,C,I,P,A,L,M,k;return{setters:[function(e){r=e.u,a=e.d,o=e.p,u=e.c,c=e.N,s=e.j,f=e.P,y=e.I,d=e.A,g=e.bd,j=e.K,b=e.C,p=e._,m=e.a,v=e.bJ,h=e.g,S=e.E,x=e.h,O=e.B},function(e){w=e.G},function(e){C=e.C},function(e){I=e.b},function(e){P=e.S,A=e.a,L=e.b},function(e){M=e.B},function(e){k=e.e},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("LibraryDuplicates",(function(){var e=r().t,t=i(a("libraryDuplicatesGridLayout",o.List),2),E=t[0],T=t[1],D=i(a("libraryDuplicatesCheckAlternativeTitles",!1),2),G=D[0],F=D[1],_=u.useContext(c),B=_.setTitle,N=_.setAction;u.useEffect((function(){return B(e("library.settings.advanced.duplicates.label.title")),N(s.jsxs(s.Fragment,{children:[s.jsx(w,{gridLayout:E,onChange:T}),s.jsx(f,{variant:"popover",popupId:"library-dupliactes-settings",children:function(t){return s.jsxs(s.Fragment,{children:[s.jsx(y,n(n({},d(t)),{},{children:s.jsx(g,{})})),s.jsx(j,n(n({},b(t)),{},{children:s.jsx(p,{children:s.jsx(C,{label:e("library.settings.advanced.duplicates.settings.label.check_description"),checked:G,onChange:function(e,t){return F(t)}})})}))]})}})]})),function(){B(""),N(null)}}),[e,E,G]);var J=m.useGetMangas(v,{condition:{inLibrary:!0}}),U=J.data,V=J.loading,$=J.error,q=J.refetch,z=u.useMemo((function(){var e,t=null!==(e=null==U?void 0:U.mangas.nodes)&&void 0!==e?e:[];return G?function(e){var t={},n={};e.forEach((function(r){var l,i,a=k(r.title);null!==(l=t[a])&&void 0!==l||(t[a]=new Set),t[a].add(r),null!==(i=n[a])&&void 0!==i||(n[a]=new Set),n[a].add(r),e.forEach((function(e){var l;if(r.id!==e.id){var i=k(e.title)===a,o=k(null!==(l=null==e?void 0:e.description)&&void 0!==l?l:"").includes(a);(i||o)&&(i&&t[a].add(e),o&&n[a].add(e))}}))}));var r=Object.entries(t).map((function(e){var t,r=i(e,2),a=r[0],o=r[1],u=l(o)[0].title,c=[].concat(l(o),l(null!==(t=n[a])&&void 0!==t?t:[])),s=l(new Set(l(c)));return 1===s.length?null:[u,s]})).filter((function(e){return!!e}));return Object.fromEntries(r)}(t):function(e){var t=Object.groupBy(e,(function(e){var t=e.title;return k(t)}));return Object.fromEntries(Object.entries(t).filter((function(e){var t,n;return(null!==(t=null===(n=e[1])||void 0===n?void 0:n.length)&&void 0!==t?t:0)>1})).map((function(e){var t=i(e,2)[1];return[t[0].title,t]})))}(t)}),[null==U?void 0:U.mangas.nodes,G]),H=u.useMemo((function(){return Object.keys(z).toSorted((function(e,t){return e.localeCompare(t)}))}),[z]),K=u.useMemo((function(){return H.map((function(e){return z[e]})).flat()}),[z]),Q=u.useMemo((function(){return H.map((function(e){return z[e]})).map((function(e){return e.length}))}),[z]);return V?s.jsx(h,{}):$?s.jsx(S,{message:e("global.error.label.failed_to_load_data"),messageExtra:$.message,retry:function(){return q().catch(x())}}):E===o.List?s.jsx(P,{groupCounts:Q,groupContent:function(e){return s.jsx(A,{variant:"h5",isFirstItem:0===e,children:H[e]})},itemContent:function(e){return s.jsx(L,{children:s.jsx(I,{manga:K[e],gridLayout:E,selected:null,mode:"duplicate"})},K[e].id)}}):H.map((function(e,t){return s.jsxs(O,{children:[s.jsx(A,{sx:{pt:0===t?void 0:0,pb:0},variant:"h5",isFirstItem:!1,children:e}),s.jsx(M,{mangas:z[e],hasNextPage:!1,loadMore:function(){},isLoading:!1,gridLayout:E,inLibraryIndicator:!1,horizontal:!0,mode:"duplicate"})]},e)}))}))}}}))}();
