!function(){function e(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||t(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,l,s,u=[],i=!0,o=!1;try{if(l=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;i=!1}else for(;!(i=(r=l.call(t)).done)&&(u.push(r.value),u.length!==n);i=!0);}catch(e){o=!0,a=e}finally{try{if(!i&&null!=t.return&&(s=t.return(),Object(s)!==s))return}finally{if(o)throw a}}return u}}(e,n)||t(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,n){if(e){if("string"==typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}}function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}System.register(["./index-legacy-B3mt2r7I.js","./AppbarSearch-legacy-C071w439.js","./LangSelect-legacy-NS-HqoIR.js","./MangaGrid-legacy-UNKzsZSh.js","./useDebounce-legacy-GcNPQnb7.js","./index-legacy-hR_JscRM.js","./useManageMangaLibraryState-legacy-hX8U-Dgc.js","./Trackers-legacy-DSG_pyL8.js","./TypographyMaxLines-legacy-CKOMmhlh.js","./Avatar-legacy-wczMYtxs.js","./Info-legacy-DwIbohB4.js","./TextField-legacy-CdJmofUj.js","./InputAdornment-legacy-BYZVV_dT.js","./SpinnerImage-legacy-BhaV1e1F.js","./Collapse-legacy-COYYq-WV.js","./Link-legacy-DV2xiH-5.js","./ListPreference-legacy-DuN7uWQh.js","./Checkbox-legacy-BEJYiIhS.js","./SwitchBase-legacy-BOonIdRP.js","./NumberSetting-legacy-DgNh8yDf.js","./useMobilePicker-legacy-CztWGIox.js","./Chip-legacy-CxeRSZws.js","./SelectSetting-legacy-BHXePi4b.js","./Select-legacy-CdZJLqUn.js","./CheckboxInput-legacy-DBhLQU56.js","./Mangas-legacy-BHMaHWFW.js","./Chapters-legacy-_pYufyR_.js","./ThreeStateCheckboxInput-legacy-Dr2GpTo6.js","./FilterList-legacy-BHy7bEC9.js","./cloneObject-legacy-D5k1nSvY.js","./Switch-legacy-9FMGQXHc.js","./Delete-legacy-CQ1RVGTn.js","./Sync-legacy-BJiLWDHS.js","./PlayArrow-legacy-sVr7Gqqa.js","./StyledFab-legacy-DOTm5545.js"],(function(t,r){"use strict";var a,l,s,u,i,o,c,g,f,y,d,h,m,j,p,S,b,v,x,w,L,A,M,C,I,N;return{setters:[function(e){a=e.R,l=e.u,s=e.a,u=e.c,i=e.j,o=e.L,c=e.T,g=e.at,f=e.k,y=e.N,d=e.al,h=e.d,m=e.f,j=e.h,p=e.E,S=e.l,b=e.m},function(e){v=e.u,x=e.A,w=e.S},function(e){L=e.t,A=e.L},function(e){M=e.M},function(e){C=e.u},function(e){I=e.C,N=e.a},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){function r(e){var n=[];return e.forEach((function(e){-1===n.indexOf(e.lang)&&n.push(e.lang)})),n.sort(S),n}var E=function(e,n){return e.displayName<n.displayName?-1:e.displayName>n.displayName?1:0},k=a.memo((function(e){var t,r,a,y=e.source,d=e.onSearchRequestFinished,h=e.searchString,m=e.emptyQuery,j=e.mode,p=l().t,S=y.id,b=y.displayName,v=y.lang,x=n(s.useSourceSearch(S,null!=h?h:"",void 0,1,{skipRequest:!h,addAbortSignal:!0}),2),w=x[0],A=x[1][0],C=A.data,E=A.isLoading,k=A.error,F=A.abortRequest,T=null!==(t=null==C||null===(r=C.fetchSourceManga)||void 0===r?void 0:r.mangas)&&void 0!==t?t:[],_=!E&&!T.length;return u.useEffect((function(){d(y,E,!_,!h)}),[E,_,h]),k?a=p("search.error.label.source_search_failed"):_&&(a=p("manga.error.label.no_mangas_found")),u.useEffect((function(){return function(){F(new Error("SourceSearchPreview(".concat(y.id,", ").concat(y.displayName,"): search string changed")))}}),[h]),!E&&!h||m?null:i.jsxs(i.Fragment,{children:[i.jsx(I,{sx:{margin:"10px"},children:i.jsxs(N,{component:o,to:"/sources/".concat(S,"?query=").concat(h),sx:{p:3},children:[i.jsx(c,{variant:"h5",children:b}),i.jsx(c,{variant:"caption",children:L(v)})]})}),a?i.jsx(g,{sx:{alignItems:"start"},noFaces:!0,message:a,messageExtra:k&&k.message,retry:k?function(){return w(1).catch(f("SourceSearchPreview(".concat(y.id,")::refetch")))}:void 0}):i.jsx(M,{mangas:T,isLoading:E,hasNextPage:!1,loadMore:function(){},horizontal:!0,noFaces:!0,message:a,inLibraryIndicator:!0,mode:j})]})}));t("SearchAll",(function(){var t,a=l().t,o=u.useContext(y),c=o.setTitle,g=o.setAction,S=d(),L=S.pathname,M=S.state,I=L.startsWith("/migrate/source"),N=null==M?void 0:M.mangaTitle,F=n(v("query",w),1)[0],T=C(F,1e3),_=n(h("shownSourceLangs",b()),2),R=_[0],q=_[1],O=n(h("showNsfw",!0),1)[0],P=s.useGetSourceList({notifyOnNetworkStatusChange:!0}),D=P.data,z=P.loading,B=P.error,G=P.refetch,Q=null!==(t=null==D?void 0:D.sources.nodes)&&void 0!==t?t:[],$=n(u.useState(new Map),2),U=$[0],W=$[1],Y=C(U,500),Z=u.useMemo((function(){return e(Q).sort(E)}),[Q]),H=u.useMemo((function(){return Z.filter((function(e){return R.includes(e.lang)}))}),[Z,R]),J=u.useMemo((function(){return H.filter((function(e){return O||!e.isNsfw}))}),[H,O]),K=u.useMemo((function(){return e(J).sort((function(e,n){return function(e,n,t){var r,a,l,s,u=!(null!==(r=t.get(e.id))&&void 0!==r&&r.isLoading),i=!(null!==(a=t.get(n.id))&&void 0!==a&&a.isLoading);if(u&&!i)return-1;if(!u&&i)return 1;if(!u&&!i)return 0;var o=!(null!==(l=t.get(e.id))&&void 0!==l&&l.hasResults),c=!(null!==(s=t.get(n.id))&&void 0!==s&&s.hasResults);return o&&!c?1:c&&!o?-1:0}(e,n,Y)}))}),[J,Y]),V=u.useCallback((function(e,n,t,r){var a=e.id;W((function(e){var l=new Map(e);return l.set(a,{isLoading:n,hasResults:t,emptySearch:r}),l}))}),[W]);return u.useEffect((function(){return c(a(I?"migrate.search.title":"search.title.global_search",{title:N})),g(i.jsxs(i.Fragment,{children:[i.jsx(x,{isClosable:!1}),i.jsx(A,{shownLangs:R,setShownLangs:q,allLangs:r(Q),forcedLangs:m()})]})),function(){c(""),g(null)}}),[a,R,q,Q]),u.useEffect((function(){var n=m().filter((function(e){return!R.includes(e)}));q([].concat(e(R),e(n)))}),[]),z?i.jsx(j,{}):B?i.jsx(p,{message:a("global.error.label.failed_to_load_data"),messageExtra:B.message,retry:function(){return G().catch(f())}}):i.jsx(i.Fragment,{children:K.map((function(e){return i.jsx(k,{source:e,onSearchRequestFinished:V,searchString:T,emptyQuery:!F,mode:I?"migrate.select":"source"},e.id)}))})}))}}}))}();
