!function(){function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||r(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,a,l,s,u=[],c=!0,o=!1;try{if(l=(r=r.call(e)).next,0===n){if(Object(r)!==r)return;c=!1}else for(;!(c=(t=l.call(r)).done)&&(u.push(t.value),u.length!==n);c=!0);}catch(e){o=!0,a=e}finally{try{if(!c&&null!=r.return&&(s=r.return(),Object(s)!==s))return}finally{if(o)throw a}}return u}}(e,n)||r(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,n){if(e){if("string"==typeof e)return t(e,n);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=Array(n);r<n;r++)t[r]=e[r];return t}System.register(["./index-legacy-DsSBfLPe.js","./AppbarSearch-legacy-fitSWWu0.js","./Languages-legacy-BKk6sKlD.js","./LangSelect-legacy-oiivCHiY.js","./useDebounce-legacy-C906ZQdE.js","./EmptyViewAbsoluteCentered-legacy-BgmYkk9h.js","./BaseMangaGrid-legacy-DadrHYjE.js","./Card-legacy-D7bsNh-7.js","./CardActionArea-legacy-CeO1qHoP.js","./useManageMangaLibraryState-legacy-DNZkcTh1.js","./Trackers-legacy-CN_LuGVd.js","./CardContent-legacy-DbIR8MUq.js","./Avatar-legacy-B-pZwW0g.js","./Info-legacy-Dw5J4mej.js","./TextField-legacy-BOdqvy9i.js","./InputAdornment-legacy-BTx1iInn.js","./CheckCircle-legacy-DkHFlh_Z.js","./SpinnerImage-legacy-Dm-a6ndt.js","./Refresh-legacy-DlNpeoGg.js","./TypographyMaxLines-legacy-D75f1vxb.js","./Mangas-legacy-BeGnMKXR.js","./Chapters-legacy-ClbL4SWD.js","./Collapse-legacy-WOab0Tzc.js","./Link-legacy-DQ8oRoKG.js","./ListPreference-legacy-DXylv8RS.js","./Checkbox-legacy-Dbxk4fKk.js","./SwitchBase-legacy-BovLdX6G.js","./NumberSetting-legacy-DSwOTo04.js","./useMobilePicker-legacy-CcvXaYlw.js","./Chip-legacy-mEq3byt6.js","./SelectSetting-legacy-JayS5d6n.js","./Select-legacy-vqP2wt-d.js","./CheckboxInput-legacy-_xhSd_Dy.js","./ThreeStateCheckboxInput-legacy-CxbXwb2P.js","./FilterList-legacy-JQqS88SS.js","./cloneObject-legacy-D5k1nSvY.js","./Switch-legacy-BaeRGkj3.js","./MangaGrid-legacy-DV1rmKK4.js","./index-legacy-D66AVKyc.js","./Delete-legacy-B7HUT91F.js","./Download-legacy-BNblMcUy.js","./Sync-legacy-DStu8wlx.js","./PlayArrow-legacy-CPqn-Kib.js","./StyledFab-legacy-C3IPTDle.js"],(function(r,t){"use strict";var a,l,s,u,c,o,i,g,f,d,y,h,j,m,p,v,S,b,x,L,w,A,C,M,I,N,k;return{setters:[function(e){a=e.a4,l=e.u,s=e.c,u=e.a,c=e.j,o=e.L,i=e.T,g=e.h,f=e.N,d=e.az,y=e.d,h=e.g,j=e.B},function(e){m=e.u,p=e.A,v=e.S},function(e){S=e.s,b=e.l,x=e.a},function(e){L=e.t,w=e.L},function(e){A=e.u},function(e){C=e.a,M=e.E},function(e){I=e.B},function(e){N=e.C},function(e){k=e.C},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){function t(e){var n=[];return e.forEach((function(e){-1===n.indexOf(e.lang)&&n.push(e.lang)})),n.sort(b),n}var E=function(e,n){return e.displayName<n.displayName?-1:e.displayName>n.displayName?1:0},R=a.memo((function(e){var r,t,a=e.source,f=e.onSearchRequestFinished,d=e.searchString,y=e.emptyQuery,h=e.mode,j=l().t,m=a.id,p=a.displayName,v=a.lang,S=s.useRef(d),b=s.useRef((function(){}));S.current!==d&&(S.current=d,b.current(new Error("SourceSearchPreview(".concat(m,", ").concat(p,"): search string changed"))));var x=n(u.useSourceSearch(m,null!=d?d:"",void 0,1,{skipRequest:!d,addAbortSignal:!0}),2),w=x[0],A=x[1][0],M=A.data,E=A.isLoading,R=A.error,F=A.abortRequest;b.current=F;var T,_=null!==(r=null==M||null===(t=M.fetchSourceManga)||void 0===t?void 0:t.mangas)&&void 0!==r?r:[],q=!R&&!E&&!_.length;return s.useEffect((function(){f(a,E,!q,!d)}),[E,q,d]),R?T=j("search.error.label.source_search_failed"):q&&(T=j("manga.error.label.no_mangas_found")),!E&&!d||y?null:c.jsxs(c.Fragment,{children:[c.jsx(N,{sx:{mb:1},children:c.jsxs(k,{component:o,to:"/sources/".concat(m,"?query=").concat(d),sx:{p:3},children:[c.jsx(i,{variant:"h5",children:p}),c.jsx(i,{variant:"caption",children:L(v)})]})}),T?c.jsx(C,{sx:{alignItems:"start",height:void 0},noFaces:!0,message:T,messageExtra:R&&R.message,retry:R?function(){return w(1).catch(g("SourceSearchPreview(".concat(a.id,")::refetch")))}:void 0}):c.jsx(I,{gridWrapperProps:{sx:{px:0}},mangas:_,isLoading:E,hasNextPage:!1,loadMore:function(){},horizontal:!0,noFaces:!0,message:T,inLibraryIndicator:!0,mode:h})]})}));r("SearchAll",(function(){var r=l().t,a=s.useContext(f),o=a.setTitle,i=a.setAction,b=d(),L=b.pathname,C=b.state,I=L.startsWith("/migrate/source"),N=null==C?void 0:C.mangaTitle,k=n(m("query",v),1)[0],F=A(k,1e3),T=n(y("shownSourceLangs",x()),2),_=T[0],q=T[1],O=n(y("showNsfw",!0),1)[0],P=u.useGetSourceList({notifyOnNetworkStatusChange:!0}),B=P.data,G=P.loading,D=P.error,W=P.refetch,z=s.useMemo((function(){var e;return null!==(e=null==B?void 0:B.sources.nodes)&&void 0!==e?e:[]}),[null==B?void 0:B.sources.nodes]),Q=n(s.useState(new Map),2),V=Q[0],$=Q[1],H=A(V,500),J=s.useMemo((function(){return e(z).sort(E)}),[z]),K=s.useMemo((function(){return J.filter((function(e){return _.includes(e.lang)}))}),[J,_]),U=s.useMemo((function(){return K.filter((function(e){return O||!e.isNsfw}))}),[K,O]),X=s.useMemo((function(){return e(U).sort((function(e,n){return function(e,n,r){var t,a,l,s,u=!(null!==(t=r.get(e.id))&&void 0!==t&&t.isLoading),c=!(null!==(a=r.get(n.id))&&void 0!==a&&a.isLoading);if(u&&!c)return-1;if(!u&&c)return 1;if(!u&&!c)return 0;var o=!(null!==(l=r.get(e.id))&&void 0!==l&&l.hasResults),i=!(null!==(s=r.get(n.id))&&void 0!==s&&s.hasResults);return o&&!i?1:i&&!o?-1:0}(e,n,H)}))}),[U,H]),Y=s.useCallback((function(e,n,r,t){var a=e.id;$((function(e){var l=new Map(e);return l.set(a,{isLoading:n,hasResults:r,emptySearch:t}),l}))}),[$]);return s.useLayoutEffect((function(){return o(r(I?"migrate.search.title":"search.title.global_search",{title:N})),i(c.jsxs(c.Fragment,{children:[c.jsx(p,{isClosable:!1}),c.jsx(w,{shownLangs:_,setShownLangs:q,allLangs:t(z),forcedLangs:S()})]})),function(){o(""),i(null)}}),[r,_,q,z]),s.useEffect((function(){var n=S().filter((function(e){return!_.includes(e)}));q([].concat(e(_),e(n)))}),[]),G?c.jsx(h,{}):D?c.jsx(M,{message:r("global.error.label.failed_to_load_data"),messageExtra:D.message,retry:function(){return W().catch(g())}}):c.jsx(j,{sx:{p:1},children:X.map((function(e,n){return c.jsx(j,{sx:{pb:n+1!==X.length?2:0},children:c.jsx(R,{source:e,onSearchRequestFinished:Y,searchString:F,emptyQuery:!k,mode:I?"migrate.select":"source"})},e.id)}))})}))}}}))}();