!function(){var e=["showFilteredOutMessage","message","messageExtra"];function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function n(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a,o,i=[],u=!0,s=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=a.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){s=!0,l=e}finally{try{if(!u&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(s)throw l}}return i}}(e,t)||l(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){if(e){if("string"==typeof e)return a(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,n,r){return(n=function(e){var n=function(e,n){if("object"!=t(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var l=r.call(e,n||"default");if("object"!=t(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"==t(n)?n:n+""}(n))in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}System.register(["./index-legacy-DuStmmwR.js","./AppbarSearch-legacy-CriAZm_D.js","./Tabs-legacy-B8WejBt-.js","./FilterList-legacy-BDqwKubL.js","./CheckboxInput-legacy-BbrzI25A.js","./SortRadioInput-legacy-3IECq-4H.js","./ThreeStateCheckboxInput-legacy-D9de9kz5.js","./SelectionFAB-legacy-Bstm0Snc.js","./Trackers-legacy-CN_LuGVd.js","./TextField-legacy-C04HWFDx.js","./ListPreference-legacy-Dy_njXs8.js","./MangaGrid-legacy-Dq1VlWBa.js","./UpdateChecker-legacy-BED1iqie.js","./useManageMangaLibraryState-legacy-Cbc_ePwO.js","./Checkbox-legacy-CSi_jY84.js","./Strings-legacy-I1Ww2TW7.js","./TabsMenu-legacy-CrYcv9Ja.js","./Mangas-legacy-CqqcRala.js","./Chip-legacy-Dbms6tmE.js","./StyledFab-legacy-J9bGWJcg.js","./SwitchBase-legacy-VHqQZMrF.js","./index-legacy-BL4CMZKR.js","./Delete-legacy-D8r0EeNK.js","./Sync-legacy-InnEMUO_.js","./SpinnerImage-legacy-JJaN9Ffy.js","./TypographyMaxLines-legacy-_7yUJ7Dq.js","./Link-legacy-D6uOqf2U.js","./CardContent-legacy-B6FtOr0d.js","./Avatar-legacy-DJtDvgXW.js","./PlayArrow-legacy-DiwJfjwO.js","./Progress-legacy-HrNce5QE.js","./Info-legacy-Bfurgh9C.js","./InputAdornment-legacy-CJ7zNnu7.js","./Collapse-legacy-CRlp_zub.js","./NumberSetting-legacy-NfxEQ-Ca.js","./useMobilePicker-legacy-D-_Ra1Kr.js","./SelectSetting-legacy-wUxSgjre.js","./Select-legacy-BnY3xNVB.js","./Chapters-legacy-B-5WrL2J.js"],(function(t,l){"use strict";var a,o,s,c,d,f,g,b,y,h,p,m,j,v,x,C,S,k,w,O,A,M,_,I,F,L,T,D,P,E,N,R,U,B,q,G,z,H,K,Y,$,J,Q,V,Z;return{setters:[function(e){a=e.u,o=e.o,s=e.a,c=e.G,d=e.j,f=e.p,g=e.c,b=e.f,y=e.I,h=e.q,p=e.s,m=e.t,j=e.h,v=e.v,x=e.N,C=e.E,S=e.g},function(e){k=e.u,w=e.S,O=e.A,A=e.N},function(e){M=e.T,_=e.a},function(e){I=e.d},function(e){F=e.C},function(e){L=e.S,T=e.R},function(e){D=e.T},function(e){P=e.O,E=e.S,N=e.a},function(e){R=e.T},function(e){U=e.F},function(e){B=e.R},function(e){q=e.M,G=e.a},function(e){z=e.d,H=e.U},function(e){K=e.u},function(e){Y=e.C},function(e){$=e.e},function(e){J=e.T,Q=e.a},function(e){V=e.M},function(e){Z=e.C},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){t("Library",(function(){var e,t,l=a().t,i=o().options,u=s.useGetCategories(m,{notifyOnNetworkStatusChange:!0}),c=u.data,f=u.error,b=u.loading,y=u.refetch,h=null==c?void 0:c.categories.nodes.filter((function(e){return 0!==e.id||0===e.id&&e.mangas.totalCount})),p=null!=h?h:[],w=g.useMemo((function(){return p.map((function(e){return e.mangas.totalCount})).reduce((function(e,t){return e+t}),0)}),[p]),I=r(k("tab",A),2),F=I[0],L=I[1],T=null!==(e=p.find((function(e){return e.order===F})))&&void 0!==e?e:p[0],D=s.useGetCategoryMangas(null==T?void 0:T.id,{skip:!T,notifyOnNetworkStatusChange:!0}),P=D.data,E=D.error,R=D.loading,U=D.refetch,B=null!==(t=null==P?void 0:P.mangas.nodes)&&void 0!==t?t:[],q=se(B),z=q.visibleMangas,Y=q.showFilteredOutMessage,$=g.useCallback((function(){return U().catch(j())}),[U,T]),Z=g.useMemo((function(){return z.map((function(e){return e.id}))}),[z]),W=r(g.useState(!1),2),X=W[0],re=W[1],le=K(z.length,{itemIds:Z,currentKey:null==T?void 0:T.id.toString()}),ae=le.areNoItemsForKeySelected,oe=le.areAllItemsForKeySelected,ie=le.selectedItemIds,ue=le.handleSelectAll,fe=le.handleSelection,ge=le.clearSelection,be=function(e,t,n){re(!!(ie.length+(t?1:-1))),fe(e,t,n)},ye=g.useMemo((function(){return ie.map((function(e){return V.getFromCache(e,v,"MANGA_CHAPTER_STAT_FIELDS")})).filter((function(e){return!!e}))}),[ie.length,z]),he=g.useMemo((function(){return X?d.jsx(N,{selectedItemsCount:ie.length,title:"manga.title",children:function(e,t){return d.jsx(G,{selectedMangas:ye,onClose:function(){e(),re(!1),ge()},setHideMenu:t})}}):null}),[X,ye]),pe=g.useContext(x),me=pe.setTitle,je=pe.setAction;g.useEffect((function(){var e=l("library.title"),t=d.jsxs(ce,{children:[e,i.showTabSize&&d.jsx(de,{label:w})]});return me(t,e),je(d.jsxs(d.Fragment,{children:[!X&&d.jsxs(d.Fragment,{children:[d.jsx(O,{}),d.jsx(ee,{}),d.jsx(H,{categoryId:null==T?void 0:T.id})]}),d.jsx(ne,{isActive:X,areAllItemsSelected:oe,areNoItemsSelected:ae,onSelectAll:function(e){return ue(e,n(new Set(z.map((function(e){return e.id})))))},onModeChange:function(e){re(e),e?ue(!0,n(new Set(z.map((function(e){return e.id}))))):p.forEach((function(e){return ue(!1,[],e.id.toString())}))}})]})),function(){me(""),je(null)}}),[l,w,b,i,X,ae,oe,ie.length,z.length,T]);if(null!=f)return d.jsx(C,{message:l("category.error.label.request_failure"),messageExtra:f.message,retry:function(){return y().catch(j())}});if(b)return d.jsx(S,{});if(0===p.length)return d.jsx(C,{message:l("library.error.label.empty")});if(1===p.length)return d.jsxs(d.Fragment,{children:[d.jsx(te,{mangas:z,message:l(E?"manga.error.label.request_failure":"library.error.label.empty"),messageExtra:null==E?void 0:E.message,isLoading:R,selectedMangaIds:ie,isSelectModeActive:X,handleSelection:be,showFilteredOutMessage:!E&&Y,retry:E&&$}),he]});return d.jsxs(J,{children:[d.jsx(Q,{value:T.order,onChange:function(e,t){return function(e){L(e)}(t)},tabsCount:p.length,children:p.map((function(e){return d.jsx(M,{sx:{display:"flex"},label:d.jsxs(ce,{children:[e.name,i.showTabSize?d.jsx(de,{label:e.mangas.totalCount}):null]}),value:e.order},e.id)}))}),p.map((function(e){return d.jsx(_,{index:e.order,currentIndex:T.order,children:e===T&&d.jsx(te,{mangas:z,message:l(E?"manga.error.label.request_failure":"library.error.label.empty"),messageExtra:null==E?void 0:E.message,isLoading:R,selectedMangaIds:ie,isSelectModeActive:X,handleSelection:be,showFilteredOutMessage:!E&&Y,retry:E&&$})},e.order)})),he]})}));var l={filter:"global.label.filter",sort:"global.label.sort",display:"global.label.display"},W=[["sortToRead","library.option.sort.label.by_unread_chapters"],["sortAlph","library.option.sort.label.alphabetically"],["sortDateAdded","library.option.sort.label.by_date_added"],["sortLastRead","library.option.sort.label.by_last_read"],["sortLatestFetchedChapter","library.option.sort.label.by_latest_fetched_chapter"],["sortLatestUploadedChapter","library.option.sort.label.by_latest_uploaded_chapter"]],X=function(e){var t,n,g=e.open,b=e.onClose,y=a().t,h=o(),p=h.options,m=h.setOptions,j=s.useGetTrackerList(c),v=R.getLoggedIn(null!==(t=null===(n=j.data)||void 0===n?void 0:n.trackers.nodes)&&void 0!==t?t:[]),x=function(e,t){m((function(n){return i(i({},n),{},u({},e,t))}))};return d.jsx(P,{open:g,onClose:b,tabs:["filter","sort","display"],tabTitle:function(e){return y(l[e])},tabContent:function(e){if("filter"===e)return d.jsxs(d.Fragment,{children:[d.jsx(D,{label:y("global.filter.label.unread"),checked:p.unread,onChange:function(e){return x("unread",e)}}),d.jsx(D,{label:y("global.filter.label.downloaded"),checked:p.downloaded,onChange:function(e){return x("downloaded",e)}}),d.jsx(D,{label:y("global.filter.label.bookmarked"),checked:p.bookmarked,onChange:function(e){return x("bookmarked",e)}}),d.jsx(D,{label:y("global.filter.label.duplicate_chapters"),checked:p.hasDuplicateChapters,onChange:function(e){return x("hasDuplicateChapters",e)}}),d.jsx(U,{sx:{mt:2},children:y("global.filter.label.tracked")}),v.map((function(e){return d.jsx(D,{label:e.name,checked:p.tracker[e.id],onChange:function(t){return x("tracker",i(i({},p.tracker),{},u({},e.id,t)))}},e.id)}))]});if("sort"===e)return W.map((function(e){var t=r(e,2),n=t[0],l=t[1];return d.jsx(L,{label:y(l),checked:p.sorts===n,sortDescending:p.sortDesc,onClick:function(){return n!==p.sorts?x("sorts",n):x("sortDesc",!p.sortDesc)}},n)}));if("display"===e){var t=p.gridLayout,n=p.showContinueReadingButton,l=p.showDownloadBadge,a=p.showUnreadBadge,o=p.showTabSize;return d.jsxs(d.Fragment,{children:[d.jsx(U,{children:y("global.grid_layout.title")}),d.jsxs(B,{onChange:function(e){return x("gridLayout",Number(e.target.value))},value:t,children:[d.jsx(T,{label:y("global.grid_layout.label.compact_grid"),value:f.Compact,checked:null==t||t===f.Compact}),d.jsx(T,{label:y("global.grid_layout.label.comfortable_grid"),value:f.Comfortable,checked:t===f.Comfortable}),d.jsx(T,{label:y("global.grid_layout.label.list"),value:f.List,checked:t===f.List})]}),d.jsx(U,{sx:{mt:2},children:y("library.option.display.badge.title")}),d.jsx(F,{label:y("library.option.display.badge.label.unread_badges"),checked:a,onChange:function(){return x("showUnreadBadge",!a)}}),d.jsx(F,{label:y("library.option.display.badge.label.download_badges"),checked:l,onChange:function(){return x("showDownloadBadge",!l)}}),d.jsx(U,{sx:{mt:2},children:y("library.option.display.tab.title")}),d.jsx(F,{label:y("library.option.display.tab.label.show_number_of_items"),checked:o,onChange:function(){return x("showTabSize",!o)}}),d.jsx(U,{sx:{mt:2},children:y("global.label.other")}),d.jsx(F,{label:y("library.option.display.other.label.show_continue_reading_button"),checked:n,onChange:function(){return x("showContinueReadingButton",!n)}})]})}return null}})},ee=function(){var e=a().t,t=r(g.useState(!1),2),n=t[0],l=t[1],i=o().options,u=null!=i.downloaded||null!=i.unread||Object.values(i.tracker).some((function(e){return null!=e}));return d.jsxs(d.Fragment,{children:[d.jsx(b,{title:e("settings.title"),children:d.jsx(y,{onClick:function(){return l(!n)},color:u?"warning":"default",children:d.jsx(I,{})})}),d.jsx(X,{open:n,onClose:function(){return l(!1)}})]})},te=function(t){var n=t.showFilteredOutMessage,l=t.message,u=t.messageExtra,s=function(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||{}.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(t,e),c=a().t,b=r(k("query",w),1)[0],y=o().options,h=y.unread,p=y.downloaded;return g.useEffect((function(){window.scrollTo(0,0)}),[b,h,p]),g.useLayoutEffect((function(){return document.body.style.overflowY=y.gridLayout===f.List?"auto":"scroll",function(){document.body.style.overflowY="auto"}}),[]),d.jsx(q,i(i({},s),{},{hasNextPage:!1,loadMore:function(){},message:n?c("library.error.label.no_matches"):l,messageExtra:n?void 0:u,gridLayout:y.gridLayout}))},ne=function(e){var t=e.isActive,n=e.areAllItemsSelected,r=e.areNoItemsSelected,l=e.onSelectAll,o=e.onModeChange,i=a().t;return d.jsxs(d.Fragment,{children:[t&&d.jsx(E,{areAllItemsSelected:n,areNoItemsSelected:r,onChange:l}),d.jsx(b,{title:i(t?"global.button.cancel":"global.button.select_all"),children:d.jsx(Y,{checkedIcon:d.jsx(z,{}),sx:{padding:"8px"},checked:t,onChange:function(e,t){return o(t)}})})]})},re=function(e,t,n){switch(e){case!0:return t();case!1:return n();default:return!0}},le=function(e,t){return re(e,(function(){return!!t&&t>=1}),(function(){return 0===t}))},ae=function(e,t){var n=null==e?void 0:e.filter((function(e){return null!=e})),r=null==t?void 0:t.filter((function(e){return null!=e}));if(null==n||!n.length)return!0;var l=n.map($),a=r.map($).join(", ");return l.every((function(e){return a.includes(e)}))},oe=function(e,t){var n,l,a=t.unread,o=t.downloaded,i=t.bookmarked,u=t.hasDuplicateChapters,s=t.tracker;return le(o,e.downloadCount)&&le(a,e.unreadCount)&&le(i,e.bookmarkCount)&&(n=u,l=e.hasDuplicateChapters,re(n,(function(){return!!l}),(function(){return!l})))&&function(e,t){return Object.entries(e).map((function(e){var n=r(e,2),l=n[0],a=n[1],o=t.trackRecords.nodes.some((function(e){return e.trackerId===Number(l)}));return re(a,(function(){return o}),(function(){return!o}))})).every((function(e){return e}))}(s,e)},ie=function(e,t,n){var r=n.ignoreFilters&&(null==t?void 0:t.length);return e.filter((function(e){var l=function(e,t){var n=t.title,r=t.genre,l=t.description,a=t.artist,o=t.author,i=t.source;return ae([e],[n])||ae(null==e?void 0:e.split(","),r.map((function(e){return $(e)})))||ae([e],[l])||ae([e],[a])||ae([e],[o])||ae([e],[null==i?void 0:i.displayName])}(t,e),a=r||oe(e,n);return l&&a}))},ue=function(){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Number(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)-Number(e)},se=function(e){var t=r(k("query",w),1)[0],l=o().options,a=l.unread,i=l.downloaded,u=l.bookmarked,s=l.tracker,c=l.hasDuplicateChapters,d=h().settings,f=g.useMemo((function(){return ie(e,t,{unread:a,downloaded:i,bookmarked:u,hasDuplicateChapters:c,tracker:s,ignoreFilters:d.ignoreFilters})}),[e,t,a,i,u,c,s,d.ignoreFilters]),b=g.useMemo((function(){return function(e,t,r){var l=n(e);switch(t){case"sortAlph":l.sort((function(e,t){return function(e,t){return e.localeCompare(t)}(e.title,t.title)}));break;case"sortDateAdded":l.sort((function(e,t){return ue(e.inLibraryAt,t.inLibraryAt)}));break;case"sortToRead":l.sort((function(e,t){return ue(e.unreadCount,t.unreadCount)}));break;case"sortLastRead":l.sort((function(e,t){var n,r;return ue(null===(n=e.lastReadChapter)||void 0===n?void 0:n.lastReadAt,null===(r=t.lastReadChapter)||void 0===r?void 0:r.lastReadAt)}));break;case"sortLatestUploadedChapter":l.sort((function(e,t){var n,r;return ue(null===(n=e.latestUploadedChapter)||void 0===n?void 0:n.uploadDate,null===(r=t.latestUploadedChapter)||void 0===r?void 0:r.uploadDate)}));break;case"sortLatestFetchedChapter":l.sort((function(e,t){var n,r;return ue(null===(n=e.latestFetchedChapter)||void 0===n?void 0:n.fetchedAt,null===(r=t.latestFetchedChapter)||void 0===r?void 0:r.fetchedAt)}))}return r&&l.reverse(),l}(f,l.sorts,l.sortDesc)}),[f,l.sorts,l.sortDesc]),y=Object.values(l.tracker).some((function(e){return null!=e}));return{visibleMangas:b,showFilteredOutMessage:(null!=a||null!=i||null!=u||!!t||y)&&0===f.length&&e.length>0}},ce=p("span")({display:"flex",alignItems:"center"}),de=function(e){return d.jsx(Z,i(i({},e),{},{size:"small",sx:{marginLeft:"5px"}}))}}}}))}();
