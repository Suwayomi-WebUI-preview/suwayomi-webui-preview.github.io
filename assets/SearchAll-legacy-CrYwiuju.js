!function(){function e(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||t(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,l,s,u=[],c=!0,i=!1;try{if(l=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;c=!1}else for(;!(c=(r=l.call(t)).done)&&(u.push(r.value),u.length!==n);c=!0);}catch(e){i=!0,a=e}finally{try{if(!c&&null!=t.return&&(s=t.return(),Object(s)!==s))return}finally{if(i)throw a}}return u}}(e,n)||t(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,n){if(e){if("string"==typeof e)return r(e,n);var t={}.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}}function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}System.register(["./index-legacy-BcqlYMih.js","./AppbarSearch-legacy-DRZyt-Fd.js","./language-legacy-Bg3k0iV0.js","./LangSelect-legacy-DVi3tt6z.js","./useDebounce-legacy-BvPF-ARO.js","./BaseMangaGrid-legacy-BE72oz1Z.js","./Card-legacy-C55dfcUE.js","./CardActionArea-legacy-DxdPItCh.js","./useManageMangaLibraryState-legacy-D2754w3V.js","./Trackers-legacy-CN_LuGVd.js","./CardContent-legacy-CztDGWZx.js","./Avatar-legacy-eIJ-m5n6.js","./Info-legacy-BRp8gwJ4.js","./TextField-legacy-Bn-ZxwC1.js","./InputAdornment-legacy-DLAL3gBi.js","./CheckCircle-legacy-D3v9_Jwq.js","./SpinnerImage-legacy-Ch_8Y6Vo.js","./TypographyMaxLines-legacy-Dq6T9vLJ.js","./Collapse-legacy-G0nAKZ_j.js","./Link-legacy-BcTensdl.js","./ListPreference-legacy-G3uOtmh4.js","./Checkbox-legacy-B4G4ikqB.js","./SwitchBase-legacy-CXnL7lN7.js","./NumberSetting-legacy-D2AilVol.js","./useMobilePicker-legacy-lsxpq1gW.js","./Chip-legacy-CZESyDrI.js","./SelectSetting-legacy-Cyf41QXj.js","./Select-legacy-BcHehTJf.js","./CheckboxInput-legacy-DT7bdafX.js","./Mangas-legacy-B8hViibK.js","./Chapters-legacy-B0-9ZMid.js","./ThreeStateCheckboxInput-legacy-BCSsLeO9.js","./FilterList-legacy-BNAtV1h2.js","./cloneObject-legacy-D5k1nSvY.js","./Switch-legacy-8NXA32Ga.js","./MangaGrid-legacy-D31rWaoy.js","./index-legacy-CBpG0E6W.js","./Delete-legacy-DQo7rOUA.js","./Sync-legacy-p1i0ma5b.js","./PlayArrow-legacy-GlBz25le.js","./StyledFab-legacy-Do5DN8C5.js"],(function(t,r){"use strict";var a,l,s,u,c,i,o,g,f,y,d,h,j,m,S,p,b,v,x,L,w,A,C,M,I,k;return{setters:[function(e){a=e.Y,l=e.u,s=e.a,u=e.c,c=e.j,i=e.L,o=e.T,g=e.aB,f=e.h,y=e.N,d=e.ar,h=e.d,j=e.g,m=e.E},function(e){S=e.u,p=e.A,b=e.S},function(e){v=e.s,x=e.l,L=e.a},function(e){w=e.t,A=e.L},function(e){C=e.u},function(e){M=e.B},function(e){I=e.C},function(e){k=e.C},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){function r(e){var n=[];return e.forEach((function(e){-1===n.indexOf(e.lang)&&n.push(e.lang)})),n.sort(x),n}var E=function(e,n){return e.displayName<n.displayName?-1:e.displayName>n.displayName?1:0},F=a.memo((function(e){var t,r,a,y=e.source,d=e.onSearchRequestFinished,h=e.searchString,j=e.emptyQuery,m=e.mode,S=l().t,p=y.id,b=y.displayName,v=y.lang,x=n(s.useSourceSearch(p,null!=h?h:"",void 0,1,{skipRequest:!h,addAbortSignal:!0}),2),L=x[0],A=x[1][0],C=A.data,E=A.isLoading,F=A.error,N=A.abortRequest,T=null!==(t=null==C||null===(r=C.fetchSourceManga)||void 0===r?void 0:r.mangas)&&void 0!==t?t:[],_=!E&&!T.length;return u.useEffect((function(){d(y,E,!_,!h)}),[E,_,h]),F?a=S("search.error.label.source_search_failed"):_&&(a=S("manga.error.label.no_mangas_found")),u.useEffect((function(){return function(){N(new Error("SourceSearchPreview(".concat(p,", ").concat(b,"): search string changed")))}}),[h]),!E&&!h||j?null:c.jsxs(c.Fragment,{children:[c.jsx(I,{sx:{margin:"10px"},children:c.jsxs(k,{component:i,to:"/sources/".concat(p,"?query=").concat(h),sx:{p:3},children:[c.jsx(o,{variant:"h5",children:b}),c.jsx(o,{variant:"caption",children:w(v)})]})}),a?c.jsx(g,{sx:{alignItems:"start",height:void 0},noFaces:!0,message:a,messageExtra:F&&F.message,retry:F?function(){return L(1).catch(f("SourceSearchPreview(".concat(y.id,")::refetch")))}:void 0}):c.jsx(M,{mangas:T,isLoading:E,hasNextPage:!1,loadMore:function(){},horizontal:!0,noFaces:!0,message:a,inLibraryIndicator:!0,mode:m})]})}));t("SearchAll",(function(){var t,a=l().t,i=u.useContext(y),o=i.setTitle,g=i.setAction,x=d(),w=x.pathname,M=x.state,I=w.startsWith("/migrate/source"),k=null==M?void 0:M.mangaTitle,N=n(S("query",b),1)[0],T=C(N,1e3),_=n(h("shownSourceLangs",L()),2),O=_[0],R=_[1],q=n(h("showNsfw",!0),1)[0],P=s.useGetSourceList({notifyOnNetworkStatusChange:!0}),B=P.data,G=P.loading,D=P.error,Q=P.refetch,U=null!==(t=null==B?void 0:B.sources.nodes)&&void 0!==t?t:[],W=n(u.useState(new Map),2),$=W[0],z=W[1],H=C($,500),J=u.useMemo((function(){return e(U).sort(E)}),[U]),K=u.useMemo((function(){return J.filter((function(e){return O.includes(e.lang)}))}),[J,O]),V=u.useMemo((function(){return K.filter((function(e){return q||!e.isNsfw}))}),[K,q]),X=u.useMemo((function(){return e(V).sort((function(e,n){return function(e,n,t){var r,a,l,s,u=!(null!==(r=t.get(e.id))&&void 0!==r&&r.isLoading),c=!(null!==(a=t.get(n.id))&&void 0!==a&&a.isLoading);if(u&&!c)return-1;if(!u&&c)return 1;if(!u&&!c)return 0;var i=!(null!==(l=t.get(e.id))&&void 0!==l&&l.hasResults),o=!(null!==(s=t.get(n.id))&&void 0!==s&&s.hasResults);return i&&!o?1:o&&!i?-1:0}(e,n,H)}))}),[V,H]),Y=u.useCallback((function(e,n,t,r){var a=e.id;z((function(e){var l=new Map(e);return l.set(a,{isLoading:n,hasResults:t,emptySearch:r}),l}))}),[z]);return u.useEffect((function(){return o(a(I?"migrate.search.title":"search.title.global_search",{title:k})),g(c.jsxs(c.Fragment,{children:[c.jsx(p,{isClosable:!1}),c.jsx(A,{shownLangs:O,setShownLangs:R,allLangs:r(U),forcedLangs:v()})]})),function(){o(""),g(null)}}),[a,O,R,U]),u.useEffect((function(){var n=v().filter((function(e){return!O.includes(e)}));R([].concat(e(O),e(n)))}),[]),G?c.jsx(j,{}):D?c.jsx(m,{message:a("global.error.label.failed_to_load_data"),messageExtra:D.message,retry:function(){return Q().catch(f())}}):c.jsx(c.Fragment,{children:X.map((function(e){return c.jsx(F,{source:e,onSearchRequestFinished:Y,searchString:T,emptyQuery:!N,mode:I?"migrate.select":"source"},e.id)}))})}))}}}))}();
