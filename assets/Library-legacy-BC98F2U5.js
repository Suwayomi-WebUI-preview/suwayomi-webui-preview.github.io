!function(){var e=["showFilteredOutMessage","message","messageExtra"],t=["sx"];function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function r(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||o(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.includes(n)||{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,o,i=[],s=!0,u=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=l.call(n)).done)&&(i.push(r.value),i.length!==t);s=!0);}catch(e){u=!0,a=e}finally{try{if(!s&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw a}}return i}}(e,t)||o(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){if(e){if("string"==typeof e)return i(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=n(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=n(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==n(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}System.register(["./index-legacy-B96ufFR1.js","./AppbarSearch-legacy-CGWX33Uj.js","./Tabs-legacy-Cn1MPNNv.js","./FilterList-legacy-CDFuFmvG.js","./CheckboxInput-legacy-D6uv-bqf.js","./SortRadioInput-legacy-CZFaFH4u.js","./ThreeStateCheckboxInput-legacy-C3rUgzsC.js","./SelectionFAB-legacy-DRda-bfa.js","./Trackers-legacy-CN_LuGVd.js","./Mangas-legacy-DrGZoJgY.js","./TextField-legacy-oY6p_vO7.js","./ListPreference-legacy-CFvGUphk.js","./MangaGrid-legacy-BKkdehcx.js","./UpdateChecker-legacy-CmEZMJEy.js","./useManageMangaLibraryState-legacy-BGovgqMe.js","./Checkbox-legacy-DvQKF4ZI.js","./Strings-legacy-I1Ww2TW7.js","./TabsMenu-legacy-DXm_LA4W.js","./Chip-legacy-DlIO-fGC.js","./StyledFab-legacy-BPUY6ehm.js","./Chapters-legacy-C1nrOBc5.js","./SwitchBase-legacy-BIwSlPZn.js","./index-legacy-Db-MzocO.js","./Delete-legacy-CQvluzRA.js","./Sync-legacy-Yb8ZS_Rr.js","./SpinnerImage-legacy-Bf1Fuz9z.js","./TypographyMaxLines-legacy-DKjS4MLo.js","./Link-legacy-NUg4qyHI.js","./Card-legacy-CbNxRrVl.js","./CardActionArea-legacy-CfkaLbvA.js","./CardContent-legacy-Czgx0Ghg.js","./Avatar-legacy-Dp7RNyBb.js","./PlayArrow-legacy-BuFWyARI.js","./Progress-legacy-Ds_L9_IY.js","./Info-legacy-CsfLEH2A.js","./InputAdornment-legacy-BUlncPpr.js","./CheckCircle-legacy-2z5gyfxw.js","./Collapse-legacy-DlZ0TmPG.js","./NumberSetting-legacy-Bo5Mz-vH.js","./useMobilePicker-legacy-iBgocusX.js","./SelectSetting-legacy-BTMiqVR2.js","./Select-legacy-DdSGEq36.js"],(function(n,o){"use strict";var i,s,d,f,g,b,h,y,p,m,j,v,x,C,S,k,w,A,O,_,M,I,F,L,T,D,P,E,N,R,B,U,q,G,z,K,H,W,Y,$,J,Q,X,V,Z,ee,te;return{setters:[function(e){i=e.u,s=e.o,d=e.a,f=e.G,g=e.j,b=e.p,h=e.q,y=e.c,p=e.f,m=e.I,j=e.s,v=e.t,x=e.v,C=e.h,S=e.w,k=e.N,w=e.E,A=e.g},function(e){O=e.u,_=e.S,M=e.A,I=e.N},function(e){F=e.T,L=e.a},function(e){T=e.d},function(e){D=e.C},function(e){P=e.S,E=e.R},function(e){N=e.T},function(e){R=e.O,B=e.S,U=e.a},function(e){q=e.T},function(e){G=e.s,z=e.M},function(e){K=e.F},function(e){H=e.R},function(e){W=e.M,Y=e.a},function(e){$=e.d,J=e.U},function(e){Q=e.u},function(e){X=e.C},function(e){V=e.e},function(e){Z=e.T,ee=e.a},function(e){te=e.C},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){n("Library",(function(){var e,t,n=i().t,a=s().options,o=d.useGetCategories(x,{notifyOnNetworkStatusChange:!0}),u=o.data,c=o.error,f=o.loading,b=o.refetch,h=null==u?void 0:u.categories.nodes.filter((function(e){return 0!==e.id||0===e.id&&e.mangas.totalCount})),p=null!=h?h:[],m=y.useMemo((function(){return p.map((function(e){return e.mangas.totalCount})).reduce((function(e,t){return e+t}),0)}),[p]),j=l(O("tab",I),2),v=j[0],_=j[1],T=null!==(e=p.find((function(e){return e.order===v})))&&void 0!==e?e:p[0],D=d.useGetCategoryMangas(null==T?void 0:T.id,{skip:!T,notifyOnNetworkStatusChange:!0}),P=D.data,E=D.error,N=D.loading,R=D.refetch,B=null!==(t=null==P?void 0:P.mangas.nodes)&&void 0!==t?t:[],q=be(B),G=q.visibleMangas,K=q.showFilteredOutMessage,H=y.useCallback((function(){return R().catch(C())}),[R,T]),W=y.useMemo((function(){return G.map((function(e){return e.id}))}),[G]),$=l(y.useState(!1),2),X=$[0],V=$[1],te=Q(G.length,{itemIds:W,currentKey:null==T?void 0:T.id.toString()}),ne=te.areNoItemsForKeySelected,re=te.areAllItemsForKeySelected,ie=te.selectedItemIds,se=te.handleSelectAll,ue=te.handleSelection,ce=te.clearSelection,de=function(e,t,n){V(!!(ie.length+(t?1:-1))),ue(e,t,n)},fe=y.useMemo((function(){return ie.map((function(e){return z.getFromCache(e,S,"MANGA_CHAPTER_STAT_FIELDS")})).filter((function(e){return!!e}))}),[ie.length,G]),ge=y.useMemo((function(){return X?g.jsx(U,{selectedItemsCount:ie.length,title:"manga.title",children:function(e,t){return g.jsx(Y,{selectedMangas:fe,onClose:function(){e(),V(!1),ce()},setHideMenu:t})}}):null}),[X,fe]),pe=y.useContext(k),me=pe.setTitle,je=pe.setAction;y.useEffect((function(){var e=n("library.title"),t=g.jsxs(he,{children:[e,a.showTabSize&&g.jsx(ye,{sx:{color:"inherit"},label:m})]});return me(t,e),je(g.jsxs(g.Fragment,{children:[!X&&g.jsxs(g.Fragment,{children:[g.jsx(M,{}),g.jsx(ae,{}),g.jsx(J,{categoryId:null==T?void 0:T.id})]}),g.jsx(oe,{isActive:X,areAllItemsSelected:re,areNoItemsSelected:ne,onSelectAll:function(e){return se(e,r(new Set(G.map((function(e){return e.id})))))},onModeChange:function(e){V(e),e?se(!0,r(new Set(G.map((function(e){return e.id}))))):p.forEach((function(e){return se(!1,[],e.id.toString())}))}})]})),function(){me(""),je(null)}}),[n,m,f,a,X,ne,re,ie.length,G.length,T]);if(null!=c)return g.jsx(w,{message:n("category.error.label.request_failure"),messageExtra:c.message,retry:function(){return b().catch(C())}});if(f)return g.jsx(A,{});if(0===p.length)return g.jsx(w,{message:n("library.error.label.empty")});if(1===p.length)return g.jsxs(g.Fragment,{children:[g.jsx(le,{mangas:G,message:n(E?"manga.error.label.request_failure":"library.error.label.empty"),messageExtra:null==E?void 0:E.message,isLoading:N,selectedMangaIds:ie,isSelectModeActive:X,handleSelection:de,showFilteredOutMessage:!E&&K,retry:E&&H}),ge]});return g.jsxs(Z,{children:[g.jsx(ee,{value:T.order,onChange:function(e,t){return function(e){_(e)}(t)},tabsCount:p.length,children:p.map((function(e){return g.jsx(F,{sx:{display:"flex"},label:g.jsxs(he,{children:[e.name,a.showTabSize?g.jsx(ye,{label:e.mangas.totalCount}):null]}),value:e.order},e.id)}))}),p.map((function(e){return g.jsx(L,{index:e.order,currentIndex:T.order,children:e===T&&g.jsx(le,{mangas:G,message:n(E?"manga.error.label.request_failure":"library.error.label.empty"),messageExtra:null==E?void 0:E.message,isLoading:N,selectedMangaIds:ie,isSelectModeActive:X,handleSelection:de,showFilteredOutMessage:!E&&K,retry:E&&H})},e.order)})),ge]})}));var o={filter:"global.label.filter",sort:"global.label.sort",display:"global.label.display"},ne=[["sortToRead","library.option.sort.label.by_unread_chapters"],["sortTotalChapters","library.option.sort.label.by_total_chapters"],["sortAlph","library.option.sort.label.alphabetically"],["sortDateAdded","library.option.sort.label.by_date_added"],["sortLastRead","library.option.sort.label.by_last_read"],["sortLatestFetchedChapter","library.option.sort.label.by_latest_fetched_chapter"],["sortLatestUploadedChapter","library.option.sort.label.by_latest_uploaded_chapter"]],re=function(e){var t,n,r=e.open,a=e.onClose,y=i().t,p=s(),m=p.options,j=p.setOptions,v=d.useGetTrackerList(f),x=q.getLoggedIn(null!==(t=null===(n=v.data)||void 0===n?void 0:n.trackers.nodes)&&void 0!==t?t:[]),C=function(e,t){j((function(n){return u(u({},n),{},c({},e,t))}))};return g.jsx(R,{open:r,onClose:a,tabs:["filter","sort","display"],tabTitle:function(e){return y(o[e])},tabContent:function(e){if("filter"===e)return g.jsxs(g.Fragment,{children:[g.jsx(N,{label:y("global.filter.label.unread"),checked:m.unread,onChange:function(e){return C("unread",e)}}),g.jsx(N,{label:y("global.filter.label.downloaded"),checked:m.downloaded,onChange:function(e){return C("downloaded",e)}}),g.jsx(N,{label:y("global.filter.label.bookmarked"),checked:m.bookmarked,onChange:function(e){return C("bookmarked",e)}}),g.jsx(N,{label:y("global.filter.label.duplicate_chapters"),checked:m.hasDuplicateChapters,onChange:function(e){return C("hasDuplicateChapters",e)}}),g.jsx(K,{sx:{mt:2},children:y("manga.label.status")}),Object.values(b).map((function(e){return g.jsx(N,{label:y(G[e]),checked:m.status[e],onChange:function(t){return C("status",u(u({},m.status),{},c({},e,t)))}})})),g.jsx(K,{sx:{mt:2},children:y("global.filter.label.tracked")}),x.map((function(e){return g.jsx(N,{label:e.name,checked:m.tracker[e.id],onChange:function(t){return C("tracker",u(u({},m.tracker),{},c({},e.id,t)))}},e.id)}))]});if("sort"===e)return ne.map((function(e){var t=l(e,2),n=t[0],r=t[1];return g.jsx(P,{label:y(r),checked:m.sorts===n,sortDescending:m.sortDesc,onClick:function(){return n!==m.sorts?C("sorts",n):C("sortDesc",!m.sortDesc)}},n)}));if("display"===e){var t=m.gridLayout,n=m.showContinueReadingButton,r=m.showDownloadBadge,a=m.showUnreadBadge,o=m.showTabSize;return g.jsxs(g.Fragment,{children:[g.jsx(K,{children:y("global.grid_layout.title")}),g.jsxs(H,{onChange:function(e){return C("gridLayout",Number(e.target.value))},value:t,children:[g.jsx(E,{label:y("global.grid_layout.label.compact_grid"),value:h.Compact,checked:null==t||t===h.Compact}),g.jsx(E,{label:y("global.grid_layout.label.comfortable_grid"),value:h.Comfortable,checked:t===h.Comfortable}),g.jsx(E,{label:y("global.grid_layout.label.list"),value:h.List,checked:t===h.List})]}),g.jsx(K,{sx:{mt:2},children:y("library.option.display.badge.title")}),g.jsx(D,{label:y("library.option.display.badge.label.unread_badges"),checked:a,onChange:function(){return C("showUnreadBadge",!a)}}),g.jsx(D,{label:y("library.option.display.badge.label.download_badges"),checked:r,onChange:function(){return C("showDownloadBadge",!r)}}),g.jsx(K,{sx:{mt:2},children:y("library.option.display.tab.title")}),g.jsx(D,{label:y("library.option.display.tab.label.show_number_of_items"),checked:o,onChange:function(){return C("showTabSize",!o)}}),g.jsx(K,{sx:{mt:2},children:y("global.label.other")}),g.jsx(D,{label:y("library.option.display.other.label.show_continue_reading_button"),checked:n,onChange:function(){return C("showContinueReadingButton",!n)}})]})}return null}})},ae=function(){var e=i().t,t=l(y.useState(!1),2),n=t[0],r=t[1],a=s().options,o=null!=a.downloaded||null!=a.unread||Object.values(a.tracker).some((function(e){return null!=e}));return g.jsxs(g.Fragment,{children:[g.jsx(p,{title:e("settings.title"),children:g.jsx(m,{onClick:function(){return r(!n)},color:o?"warning":"inherit",children:g.jsx(T,{})})}),g.jsx(re,{open:n,onClose:function(){return r(!1)}})]})},le=function(t){var n=t.showFilteredOutMessage,r=t.message,o=t.messageExtra,c=a(t,e),d=i().t,f=l(O("query",_),1)[0],b=s().options,p=b.unread,m=b.downloaded;return y.useEffect((function(){window.scrollTo(0,0)}),[f,p,m]),y.useLayoutEffect((function(){return document.body.style.overflowY=b.gridLayout===h.List?"auto":"scroll",function(){document.body.style.overflowY="auto"}}),[]),g.jsx(W,u(u({gridWrapperProps:{sx:{p:1}}},c),{},{hasNextPage:!1,loadMore:function(){},message:n?d("library.error.label.no_matches"):r,messageExtra:n?void 0:o,gridLayout:b.gridLayout}))},oe=function(e){var t=e.isActive,n=e.areAllItemsSelected,r=e.areNoItemsSelected,a=e.onSelectAll,l=e.onModeChange,o=i().t;return g.jsxs(g.Fragment,{children:[t&&g.jsx(B,{areAllItemsSelected:n,areNoItemsSelected:r,onChange:a}),g.jsx(p,{title:o(t?"global.button.cancel":"global.button.select_all"),children:g.jsx(X,{checkedIcon:g.jsx($,{}),sx:{padding:"8px",color:"inherit","&.Mui-checked":{color:"inherit"}},checked:t,onChange:function(e,t){return l(t)}})})]})},ie=function(e,t,n){switch(e){case!0:return t();case!1:return n();default:return!0}},se=function(e,t){return ie(e,(function(){return!!t&&t>=1}),(function(){return 0===t}))},ue=function(e,t){return ie(e,(function(){return!!t}),(function(){return!t}))},ce=function(e,t){var n=null==e?void 0:e.filter((function(e){return null!=e})),r=null==t?void 0:t.filter((function(e){return null!=e}));if(null==n||!n.length)return!0;var a=n.map(V),l=r.map(V).join(", ");return a.every((function(e){return l.includes(e)}))},de=function(e,t){var n=t.unread,r=t.downloaded,a=t.bookmarked,o=t.hasDuplicateChapters,i=t.tracker,s=t.status;return se(r,e.downloadCount)&&se(n,e.unreadCount)&&se(a,e.bookmarkCount)&&ue(o,e.hasDuplicateChapters)&&function(e,t){return Object.entries(e).map((function(e){var n=l(e,2),r=n[0],a=n[1],o=t.trackRecords.nodes.some((function(e){return e.trackerId===Number(r)}));return ie(a,(function(){return o}),(function(){return!o}))})).every(Boolean)}(i,e)&&function(e,t){return Object.entries(e).map((function(e){var n=l(e,2),r=n[0],a=n[1];return ue(a,r===t.status)})).every(Boolean)}(s,e)},fe=function(e,t,n){var r=n.ignoreFilters&&(null==t?void 0:t.length);return e.filter((function(e){var a=function(e,t){var n=t.title,r=t.genre,a=t.description,l=t.artist,o=t.author,i=t.source;return ce([e],[n])||ce(null==e?void 0:e.split(","),r.map((function(e){return V(e)})))||ce([e],[a])||ce([e],[l])||ce([e],[o])||ce([e],[null==i?void 0:i.displayName])}(t,e),l=r||de(e,n);return a&&l}))},ge=function(){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Number(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)-Number(e)},be=function(e){var t=l(O("query",_),1)[0],n=s().options,a=n.unread,o=n.downloaded,i=n.bookmarked,u=n.tracker,c=n.hasDuplicateChapters,d=n.status,f=j().settings,g=y.useMemo((function(){return fe(e,t,{unread:a,downloaded:o,bookmarked:i,hasDuplicateChapters:c,tracker:u,status:d,ignoreFilters:f.ignoreFilters})}),[e,t,a,o,i,c,u,f.ignoreFilters]),b=y.useMemo((function(){return function(e,t,n){var a=r(e);switch(t){case"sortAlph":a.sort((function(e,t){return function(e,t){return e.localeCompare(t)}(e.title,t.title)}));break;case"sortDateAdded":a.sort((function(e,t){return ge(e.inLibraryAt,t.inLibraryAt)}));break;case"sortToRead":a.sort((function(e,t){return ge(e.unreadCount,t.unreadCount)}));break;case"sortLastRead":a.sort((function(e,t){var n,r;return ge(null===(n=e.lastReadChapter)||void 0===n?void 0:n.lastReadAt,null===(r=t.lastReadChapter)||void 0===r?void 0:r.lastReadAt)}));break;case"sortLatestUploadedChapter":a.sort((function(e,t){var n,r;return ge(null===(n=e.latestUploadedChapter)||void 0===n?void 0:n.uploadDate,null===(r=t.latestUploadedChapter)||void 0===r?void 0:r.uploadDate)}));break;case"sortLatestFetchedChapter":a.sort((function(e,t){var n,r;return ge(null===(n=e.latestFetchedChapter)||void 0===n?void 0:n.fetchedAt,null===(r=t.latestFetchedChapter)||void 0===r?void 0:r.fetchedAt)}));break;case"sortTotalChapters":a.sort((function(e,t){return ge(e.chapters.totalCount,t.chapters.totalCount)}))}return n&&a.reverse(),a}(g,n.sorts,n.sortDesc)}),[g,n.sorts,n.sortDesc]),h=Object.values(n.tracker).some((function(e){return null!=e}));return{visibleMangas:b,showFilteredOutMessage:(null!=a||null!=o||null!=i||!!t||h)&&0===g.length&&e.length>0}},he=v("span")({display:"flex",alignItems:"center"}),ye=function(e){var n=e.sx,r=a(e,t);return g.jsx(te,u(u({},r),{},{size:"small",sx:u(u({},n),{},{marginLeft:"5px"})}))}}}}))}();
