!function(){function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||r(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,a,l,s,u=[],o=!0,i=!1;try{if(l=(r=r.call(e)).next,0===n){if(Object(r)!==r)return;o=!1}else for(;!(o=(t=l.call(r)).done)&&(u.push(t.value),u.length!==n);o=!0);}catch(e){i=!0,a=e}finally{try{if(!o&&null!=r.return&&(s=r.return(),Object(s)!==s))return}finally{if(i)throw a}}return u}}(e,n)||r(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,n){if(e){if("string"==typeof e)return t(e,n);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=Array(n);r<n;r++)t[r]=e[r];return t}System.register(["./index-legacy-C3QFrfbs.js","./AppbarSearch-legacy-Beai5O4B.js","./Languages-legacy-vubHbtfW.js","./LangSelect-legacy-fq--M70D.js","./useDebounce-legacy-Ckg1BxtM.js","./BaseMangaGrid-legacy-BH_t6KGd.js","./useManageMangaLibraryState-legacy-DXwByfWF.js","./Trackers-legacy-CN_LuGVd.js","./Avatar-legacy-BaISd5Ic.js","./Info-legacy-BpyBcPWO.js","./TextField-legacy-DhrXARHf.js","./InputAdornment-legacy-OR5ZB8Of.js","./CheckCircle-legacy-DCCkDDR9.js","./Mangas-legacy-AGqwrh4k.js","./ListPreference-legacy-GujU97k5.js","./NumberSetting-legacy-DB3u6UGR.js","./useMobilePicker-legacy-BR_Ozfkh.js","./Chip-legacy-Dc4BNOhB.js","./SelectSetting-legacy-meiwnbBb.js","./ThreeStateCheckboxInput-legacy-Cn0Pa74J.js","./FilterList-legacy-BI_R_ce9.js","./cloneObject-legacy-D5k1nSvY.js","./Switch-legacy-BoyGReYm.js","./MangaGrid-legacy-BCigAPfY.js","./Sync-legacy-BGdr5KSF.js","./PlayArrow-legacy-DDXtw5G6.js","./StyledFab-legacy-C4sF6wds.js"],(function(r,t){"use strict";var a,l,s,u,o,i,c,g,f,d,y,h,m,j,v,p,S,b,x,w,L,A,M,N,I,R,C,E;return{setters:[function(e){a=e.aw,l=e.u,s=e.f,u=e.c,o=e.j,i=e.C,c=e.a,g=e.L,f=e.A,d=e.T,y=e.aG,h=e.m,m=e.N,j=e.aH,v=e.g,p=e.l,S=e.E,b=e.B},function(e){x=e.u,w=e.A,L=e.S},function(e){A=e.s,M=e.l,N=e.a},function(e){I=e.t,R=e.L},function(e){C=e.u},function(e){E=e.B},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){function t(e){var n=[];return e.forEach((function(e){-1===n.indexOf(e.lang)&&n.push(e.lang)})),n.sort(M),n}var F=function(e,n){return e.displayName<n.displayName?-1:e.displayName>n.displayName?1:0},T=a.memo((function(e){var r,t,a=e.source,m=e.onSearchRequestFinished,j=e.searchString,v=e.emptyQuery,p=e.mode,S=l().t,b=a.id,x=a.displayName,w=a.lang,L=s.useRef(j),A=s.useRef((function(){}));L.current!==j&&(L.current=j,A.current(new Error("SourceSearchPreview(".concat(b,", ").concat(x,"): search string changed"))));var M=n(u.useSourceSearch(b,null!=j?j:"",void 0,1,{skipRequest:!j,addAbortSignal:!0}),2),N=M[0],R=M[1][0],C=R.data,F=R.isLoading,T=R.error,P=R.abortRequest;A.current=P;var _,k=null!==(r=null==C||null===(t=C.fetchSourceManga)||void 0===t?void 0:t.mangas)&&void 0!==r?r:[],O=!T&&!F&&!k.length;return s.useEffect((function(){m(a,F,!O,!j)}),[F,O,j]),T?_=S("search.error.label.source_search_failed"):O&&(_=S("manga.error.label.no_mangas_found")),!F&&!j||v?null:o.jsxs(o.Fragment,{children:[o.jsx(i,{sx:{mb:1},children:o.jsxs(c,{component:g,to:"".concat(f.sources.childRoutes.browse.path(b),"?query=").concat(j),sx:{p:3},children:[o.jsx(d,{variant:"h5",children:x}),o.jsx(d,{variant:"caption",children:I(w)})]})}),_?o.jsx(y,{sx:{alignItems:"start",height:void 0},noFaces:!0,message:_,messageExtra:T&&T.message,retry:T?function(){return N(1).catch(h("SourceSearchPreview(".concat(a.id,")::refetch")))}:void 0}):o.jsx(E,{gridWrapperProps:{sx:{px:0}},mangas:k,isLoading:F,hasNextPage:!1,loadMore:function(){},horizontal:!0,noFaces:!0,message:_,inLibraryIndicator:!0,mode:p})]})}));r("SearchAll",(function(){var r=l().t,a=s.useContext(m),i=a.setTitle,c=a.setAction,g=j(),f=g.pathname,d=g.state,y=f.startsWith("/migrate/source"),M=null==d?void 0:d.mangaTitle,I=n(x("query",L),1)[0],E=C(I,1e3),P=n(v("shownSourceLangs",N()),2),_=P[0],k=P[1],O=n(v("showNsfw",!0),1)[0],q=u.useGetSourceList({notifyOnNetworkStatusChange:!0}),G=q.data,B=q.loading,Q=q.error,W=q.refetch,H=s.useMemo((function(){var e;return null!==(e=null==G?void 0:G.sources.nodes)&&void 0!==e?e:[]}),[null==G?void 0:G.sources.nodes]),U=n(s.useState(new Map),2),$=U[0],z=U[1],D=C($,500),V=s.useMemo((function(){return e(H).sort(F)}),[H]),X=s.useMemo((function(){return V.filter((function(e){return _.includes(e.lang)}))}),[V,_]),Y=s.useMemo((function(){return X.filter((function(e){return O||!e.isNsfw}))}),[X,O]),Z=s.useMemo((function(){return e(Y).sort((function(e,n){return function(e,n,r){var t,a,l,s,u=!(null!==(t=r.get(e.id))&&void 0!==t&&t.isLoading),o=!(null!==(a=r.get(n.id))&&void 0!==a&&a.isLoading);if(u&&!o)return-1;if(!u&&o)return 1;if(!u&&!o)return 0;var i=!(null!==(l=r.get(e.id))&&void 0!==l&&l.hasResults),c=!(null!==(s=r.get(n.id))&&void 0!==s&&s.hasResults);return i&&!c?1:c&&!i?-1:0}(e,n,D)}))}),[Y,D]),J=s.useCallback((function(e,n,r,t){var a=e.id;z((function(e){var l=new Map(e);return l.set(a,{isLoading:n,hasResults:r,emptySearch:t}),l}))}),[z]);return s.useLayoutEffect((function(){return i(r(y?"migrate.search.title":"search.title.global_search",{title:M})),c(o.jsxs(o.Fragment,{children:[o.jsx(w,{isClosable:!1}),o.jsx(R,{shownLangs:_,setShownLangs:k,allLangs:t(H),forcedLangs:A()})]})),function(){i(""),c(null)}}),[r,_,k,H]),s.useEffect((function(){var n=A().filter((function(e){return!_.includes(e)}));k([].concat(e(_),e(n)))}),[]),B?o.jsx(p,{}):Q?o.jsx(S,{message:r("global.error.label.failed_to_load_data"),messageExtra:Q.message,retry:function(){return W().catch(h())}}):o.jsx(b,{sx:{p:1},children:Z.map((function(e,n){return o.jsx(b,{sx:{pb:n+1!==Z.length?2:0},children:o.jsx(T,{source:e,onSearchRequestFinished:J,searchString:E,emptyQuery:!I,mode:y?"migrate.select":"source"})},e.id)}))})}))}}}))}();
