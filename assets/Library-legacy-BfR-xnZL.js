!function(){var e=["showFilteredOutMessage","message","messageExtra"];function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function n(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||a(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,o,i=[],u=!0,s=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=l.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){s=!0,a=e}finally{try{if(!u&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(s)throw a}}return i}}(e,t)||a(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){if(e){if("string"==typeof e)return l(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,n,r){return(n=function(e){var n=function(e,n){if("object"!=t(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,n||"default");if("object"!=t(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"==t(n)?n:n+""}(n))in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}System.register(["./index-legacy-D4RKJjfN.js","./AppbarSearch-legacy-BOVfc_nk.js","./Tabs-legacy-B_Q5PODU.js","./FilterList-legacy-D8XAKtFZ.js","./CheckboxInput-legacy-DjnV5l0a.js","./SortRadioInput-legacy-VmnKPKW6.js","./ThreeStateCheckboxInput-legacy-nlcYA1yW.js","./SelectionFAB-legacy-BRKXkhdL.js","./Trackers-legacy-CN_LuGVd.js","./TextField-legacy-BVRujXcw.js","./ListPreference-legacy-BUZmUMo_.js","./MangaGrid-legacy-DFEc3mL5.js","./UpdateChecker-legacy-CFxrCIku.js","./useManageMangaLibraryState-legacy-WGp3vsYK.js","./Checkbox-legacy-BqI0q20k.js","./Strings-legacy-DhR7dDdc.js","./TabsMenu-legacy-Dt74kCTH.js","./Mangas-legacy-SCO5wXBr.js","./Chip-legacy-DFVHaQw-.js","./StyledFab-legacy-C4GanxNd.js","./SwitchBase-legacy-iPfm1lGv.js","./index-legacy-t67-Z3Gf.js","./Delete-legacy-CnKc8Hx5.js","./Sync-legacy-C9CiSACx.js","./SpinnerImage-legacy-C6fk_dBr.js","./TypographyMaxLines-legacy-MWhha0vP.js","./Link-legacy-tmv7_Xfn.js","./Avatar-legacy-MPnORtl2.js","./PlayArrow-legacy-Ct59-__H.js","./Progress-legacy-FWxn2Jwn.js","./Info-legacy-D21R-tYS.js","./InputAdornment-legacy-krMyNwhM.js","./Collapse-legacy-CK318yRC.js","./NumberSetting-legacy-CiPlldyo.js","./useMobilePicker-legacy-BmjPkH7n.js","./SelectSetting-legacy-BtBaF02t.js","./Select-legacy-BpIMiUG-.js","./Chapters-legacy-C8fv8zL9.js"],(function(t,a){"use strict";var l,o,s,c,d,f,g,b,y,h,p,m,j,v,x,C,S,w,k,O,A,M,_,I,L,F,T,D,P,E,N,R,U,B,q,G,z,H,K,Y,$,J,Q,V,Z,W;return{setters:[function(e){l=e.u,o=e.o,s=e.a,c=e.G,d=e.j,f=e.p,g=e.c,b=e.f,y=e.I,h=e.q,p=e.s,m=e.t,j=e.h,v=e.M,x=e.N,C=e.E,S=e.g},function(e){w=e.u,k=e.S,O=e.A,A=e.N},function(e){M=e.T,_=e.a},function(e){I=e.d},function(e){L=e.C},function(e){F=e.S,T=e.R},function(e){D=e.T},function(e){P=e.O,E=e.S,N=e.a},function(e){R=e.T},function(e){U=e.F},function(e){B=e.R},function(e){q=e.M,G=e.a},function(e){z=e.d,H=e.U},function(e){K=e.u},function(e){Y=e.C},function(e){$=e.b,J=e.e},function(e){Q=e.T,V=e.a},function(e){Z=e.M},function(e){W=e.C},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){t("Library",(function(){var e,t,a=l().t,i=o().options,u=s.useGetCategories(m,{notifyOnNetworkStatusChange:!0}),c=u.data,f=u.error,b=u.loading,y=u.refetch,h=null==c?void 0:c.categories.nodes.filter((function(e){return 0!==e.id||0===e.id&&e.mangas.totalCount})),p=null!=h?h:[],k=g.useMemo((function(){return p.map((function(e){return e.mangas.totalCount})).reduce((function(e,t){return e+t}),0)}),[p]),I=r(w("tab",A),2),L=I[0],F=I[1],T=null!==(e=p.find((function(e){return e.order===L})))&&void 0!==e?e:p[0],D=s.useGetCategoryMangas(null==T?void 0:T.id,{skip:!T,notifyOnNetworkStatusChange:!0}),P=D.data,E=D.error,R=D.loading,U=D.refetch,B=null!==(t=null==P?void 0:P.mangas.nodes)&&void 0!==t?t:[],q=ue(B),z=q.visibleMangas,Y=q.showFilteredOutMessage,$=g.useCallback((function(){return U().catch(j())}),[U,T]),J=g.useMemo((function(){return z.map((function(e){return e.id}))}),[z]),W=r(g.useState(!1),2),X=W[0],ee=W[1],ae=K(z.length,{itemIds:J,currentKey:null==T?void 0:T.id.toString()}),le=ae.areNoItemsForKeySelected,oe=ae.areAllItemsForKeySelected,ie=ae.selectedItemIds,de=ae.handleSelectAll,fe=ae.handleSelection,ge=ae.clearSelection,be=function(e,t,n){ee(!!(ie.length+(t?1:-1))),fe(e,t,n)},ye=g.useMemo((function(){return ie.map((function(e){return Z.getFromCache(e,v,"MANGA_CHAPTER_STAT_FIELDS")})).filter((function(e){return!!e}))}),[ie.length,z]),he=g.useMemo((function(){return X?d.jsx(N,{selectedItemsCount:ie.length,title:"manga.title",children:function(e,t){return d.jsx(G,{selectedMangas:ye,onClose:function(){e(),ee(!1),ge()},setHideMenu:t})}}):null}),[X,ye]),pe=g.useContext(x),me=pe.setTitle,je=pe.setAction;g.useEffect((function(){var e=a("library.title"),t=d.jsxs(se,{children:[e,i.showTabSize&&d.jsx(ce,{label:k})]});return me(t,e),je(d.jsxs(d.Fragment,{children:[!X&&d.jsxs(d.Fragment,{children:[d.jsx(O,{}),d.jsx(te,{}),d.jsx(H,{categoryId:null==T?void 0:T.id})]}),d.jsx(re,{isActive:X,areAllItemsSelected:oe,areNoItemsSelected:le,onSelectAll:function(e){return de(e,n(new Set(z.map((function(e){return e.id})))))},onModeChange:function(e){ee(e),e?de(!0,n(new Set(z.map((function(e){return e.id}))))):p.forEach((function(e){return de(!1,[],e.id.toString())}))}})]})),function(){me(""),je(null)}}),[a,k,b,i,X,le,oe,ie.length,z.length,T]);if(null!=f)return d.jsx(C,{message:a("category.error.label.request_failure"),messageExtra:f.message,retry:function(){return y().catch(j())}});if(b)return d.jsx(S,{});if(0===p.length)return d.jsx(C,{message:a("library.error.label.empty")});if(1===p.length)return d.jsxs(d.Fragment,{children:[d.jsx(ne,{mangas:z,message:a(E?"manga.error.label.request_failure":"library.error.label.empty"),messageExtra:null==E?void 0:E.message,isLoading:R,selectedMangaIds:ie,isSelectModeActive:X,handleSelection:be,showFilteredOutMessage:!E&&Y,retry:E&&$}),he]});return d.jsxs(Q,{children:[d.jsx(V,{value:T.order,onChange:function(e,t){return function(e){F(e)}(t)},tabsCount:p.length,children:p.map((function(e){return d.jsx(M,{sx:{display:"flex"},label:d.jsxs(se,{children:[e.name,i.showTabSize?d.jsx(ce,{label:e.mangas.totalCount}):null]}),value:e.order},e.id)}))}),p.map((function(e){return d.jsx(_,{index:e.order,currentIndex:T.order,children:e===T&&d.jsx(ne,{mangas:z,message:a(E?"manga.error.label.request_failure":"library.error.label.empty"),messageExtra:null==E?void 0:E.message,isLoading:R,selectedMangaIds:ie,isSelectModeActive:X,handleSelection:be,showFilteredOutMessage:!E&&Y,retry:E&&$})},e.order)})),he]})}));var a={filter:"global.label.filter",sort:"global.label.sort",display:"global.label.display"},X=[["sortToRead","library.option.sort.label.by_unread_chapters"],["sortAlph","library.option.sort.label.alphabetically"],["sortDateAdded","library.option.sort.label.by_date_added"],["sortLastRead","library.option.sort.label.by_last_read"],["sortLatestFetchedChapter","library.option.sort.label.by_latest_fetched_chapter"],["sortLatestUploadedChapter","library.option.sort.label.by_latest_uploaded_chapter"]],ee=function(e){var t,n,g=e.open,b=e.onClose,y=l().t,h=o(),p=h.options,m=h.setOptions,j=s.useGetTrackerList(c),v=R.getLoggedIn(null!==(t=null===(n=j.data)||void 0===n?void 0:n.trackers.nodes)&&void 0!==t?t:[]),x=function(e,t){m((function(n){return i(i({},n),{},u({},e,t))}))};return d.jsx(P,{open:g,onClose:b,tabs:["filter","sort","display"],tabTitle:function(e){return y(a[e])},tabContent:function(e){if("filter"===e)return d.jsxs(d.Fragment,{children:[d.jsx(D,{label:y("global.filter.label.unread"),checked:p.unread,onChange:function(e){return x("unread",e)}}),d.jsx(D,{label:y("global.filter.label.downloaded"),checked:p.downloaded,onChange:function(e){return x("downloaded",e)}}),d.jsx(D,{label:y("global.filter.label.bookmarked"),checked:p.bookmarked,onChange:function(e){return x("bookmarked",e)}}),d.jsx(D,{label:y("global.filter.label.duplicate_chapters"),checked:p.hasDuplicateChapters,onChange:function(e){return x("hasDuplicateChapters",e)}}),d.jsx(U,{sx:{mt:2},children:y("global.filter.label.tracked")}),v.map((function(e){return d.jsx(D,{label:e.name,checked:p.tracker[e.id],onChange:function(t){return x("tracker",i(i({},p.tracker),{},u({},e.id,t)))}},e.id)}))]});if("sort"===e)return X.map((function(e){var t=r(e,2),n=t[0],a=t[1];return d.jsx(F,{label:y(a),checked:p.sorts===n,sortDescending:p.sortDesc,onClick:function(){return n!==p.sorts?x("sorts",n):x("sortDesc",!p.sortDesc)}},n)}));if("display"===e){var t=p.gridLayout,n=p.showContinueReadingButton,a=p.showDownloadBadge,l=p.showUnreadBadge,o=p.showTabSize;return d.jsxs(d.Fragment,{children:[d.jsx(U,{children:y("global.grid_layout.title")}),d.jsxs(B,{onChange:function(e){return x("gridLayout",Number(e.target.value))},value:t,children:[d.jsx(T,{label:y("global.grid_layout.label.compact_grid"),value:f.Compact,checked:null==t||t===f.Compact}),d.jsx(T,{label:y("global.grid_layout.label.comfortable_grid"),value:f.Comfortable,checked:t===f.Comfortable}),d.jsx(T,{label:y("global.grid_layout.label.list"),value:f.List,checked:t===f.List})]}),d.jsx(U,{sx:{mt:2},children:y("library.option.display.badge.title")}),d.jsx(L,{label:y("library.option.display.badge.label.unread_badges"),checked:l,onChange:function(){return x("showUnreadBadge",!l)}}),d.jsx(L,{label:y("library.option.display.badge.label.download_badges"),checked:a,onChange:function(){return x("showDownloadBadge",!a)}}),d.jsx(U,{sx:{mt:2},children:y("library.option.display.tab.title")}),d.jsx(L,{label:y("library.option.display.tab.label.show_number_of_items"),checked:o,onChange:function(){return x("showTabSize",!o)}}),d.jsx(U,{sx:{mt:2},children:y("global.label.other")}),d.jsx(L,{label:y("library.option.display.other.label.show_continue_reading_button"),checked:n,onChange:function(){return x("showContinueReadingButton",!n)}})]})}return null}})},te=function(){var e=l().t,t=r(g.useState(!1),2),n=t[0],a=t[1],i=o().options,u=null!=i.downloaded||null!=i.unread||Object.values(i.tracker).some((function(e){return null!=e}));return d.jsxs(d.Fragment,{children:[d.jsx(b,{title:e("settings.title"),children:d.jsx(y,{onClick:function(){return a(!n)},color:u?"warning":"default",children:d.jsx(I,{})})}),d.jsx(ee,{open:n,onClose:function(){return a(!1)}})]})},ne=function(t){var n=t.showFilteredOutMessage,a=t.message,u=t.messageExtra,s=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(t,e),c=l().t,b=r(w("query",k),1)[0],y=o().options,h=y.unread,p=y.downloaded;return g.useEffect((function(){window.scrollTo(0,0)}),[b,h,p]),g.useLayoutEffect((function(){return document.body.style.overflowY=y.gridLayout===f.List?"auto":"scroll",function(){document.body.style.overflowY="auto"}}),[]),d.jsx(q,i(i({},s),{},{hasNextPage:!1,loadMore:function(){},message:n?c("library.error.label.no_matches"):a,messageExtra:n?void 0:u,gridLayout:y.gridLayout}))},re=function(e){var t=e.isActive,n=e.areAllItemsSelected,r=e.areNoItemsSelected,a=e.onSelectAll,o=e.onModeChange,i=l().t;return d.jsxs(d.Fragment,{children:[t&&d.jsx(E,{areAllItemsSelected:n,areNoItemsSelected:r,onChange:a}),d.jsx(b,{title:i(t?"global.button.cancel":"global.button.select_all"),children:d.jsx(Y,{checkedIcon:d.jsx(z,{}),sx:{padding:"8px"},checked:t,onChange:function(e,t){return o(t)}})})]})},ae=function(e,t,n){switch(e){case!0:return t();case!1:return n();default:return!0}},le=function(e,t){return ae(e,(function(){return!!t&&t>=1}),(function(){return 0===t}))},oe=function(e,t,n,a,l,o,i,u){return e.filter((function(e){var s,c,d=u&&(null==t?void 0:t.length),f=function(e,t){var n=t.title;if(!e)return!0;var r=$(e);return $(n).includes(r)||J(n).includes(r)}(t,e)||function(e,t){var n=t.genre;if(!e)return!0;var r=e.split(",").map($),a=n.map((function(e){var t=$(e),n=J(t);return"".concat(t,", ").concat(n)})).join(", ");return r.every((function(e){return a.includes(e)}))}(t,e),g=d||le(a,e.downloadCount)&&le(n,e.unreadCount)&&le(l,e.bookmarkCount)&&(s=o,c=e.hasDuplicateChapters,ae(s,(function(){return!!c}),(function(){return!c})))&&function(e,t){return Object.entries(e).map((function(e){var n=r(e,2),a=n[0],l=n[1],o=t.trackRecords.nodes.some((function(e){return e.trackerId===Number(a)}));return ae(l,(function(){return o}),(function(){return!o}))})).every((function(e){return e}))}(i,e);return f&&g}))},ie=function(){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Number(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)-Number(e)},ue=function(e){var t=r(w("query",k),1)[0],a=o().options,l=a.unread,i=a.downloaded,u=a.bookmarked,s=a.tracker,c=a.hasDuplicateChapters,d=h().settings,f=g.useMemo((function(){return oe(e,t,l,i,u,c,s,d.ignoreFilters)}),[e,t,l,i,u,c,s,d.ignoreFilters]),b=g.useMemo((function(){return function(e,t,r){var a=n(e);switch(t){case"sortAlph":a.sort((function(e,t){return function(e,t){return e.localeCompare(t)}(e.title,t.title)}));break;case"sortDateAdded":a.sort((function(e,t){return ie(e.inLibraryAt,t.inLibraryAt)}));break;case"sortToRead":a.sort((function(e,t){return ie(e.unreadCount,t.unreadCount)}));break;case"sortLastRead":a.sort((function(e,t){var n,r;return ie(null===(n=e.lastReadChapter)||void 0===n?void 0:n.lastReadAt,null===(r=t.lastReadChapter)||void 0===r?void 0:r.lastReadAt)}));break;case"sortLatestUploadedChapter":a.sort((function(e,t){var n,r;return ie(null===(n=e.latestUploadedChapter)||void 0===n?void 0:n.uploadDate,null===(r=t.latestUploadedChapter)||void 0===r?void 0:r.uploadDate)}));break;case"sortLatestFetchedChapter":a.sort((function(e,t){var n,r;return ie(null===(n=e.latestFetchedChapter)||void 0===n?void 0:n.fetchedAt,null===(r=t.latestFetchedChapter)||void 0===r?void 0:r.fetchedAt)}))}return r&&a.reverse(),a}(f,a.sorts,a.sortDesc)}),[f,a.sorts,a.sortDesc]),y=Object.values(a.tracker).some((function(e){return null!=e}));return{visibleMangas:b,showFilteredOutMessage:(null!=l||null!=i||null!=u||!!t||y)&&0===f.length&&e.length>0}},se=p("span")({display:"flex",alignItems:"center"}),ce=function(e){return d.jsx(W,i(i({},e),{},{size:"small",sx:{marginLeft:"5px"}}))}}}}))}();
