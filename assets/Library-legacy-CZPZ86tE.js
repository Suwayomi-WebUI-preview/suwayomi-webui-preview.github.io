!function(){var e=["showFilteredOutMessage","message","messageExtra"];function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function n(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||a(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,o,i=[],u=!0,s=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=l.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){s=!0,a=e}finally{try{if(!u&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(s)throw a}}return i}}(e,t)||a(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){if(e){if("string"==typeof e)return l(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,n,r){return(n=function(e){var n=function(e,n){if("object"!=t(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,n||"default");if("object"!=t(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"==t(n)?n:n+""}(n))in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}System.register(["./index-legacy-GxGsYjoV.js","./AppbarSearch-legacy-Bb1xOyGB.js","./Tabs-legacy-DreHEzZW.js","./FilterList-legacy-D5wvudra.js","./CheckboxInput-legacy-qlnUAYJX.js","./SortRadioInput-legacy-CdM0OkpU.js","./ThreeStateCheckboxInput-legacy-DppvNtmg.js","./SelectionFAB-legacy-D9lrtg-r.js","./Trackers-legacy-DSG_pyL8.js","./TextField-legacy-C0PmYBLR.js","./ListPreference-legacy-CCccDnz3.js","./MangaGrid-legacy-DWN67QEh.js","./UpdateChecker-legacy-Bwn_zFL6.js","./useManageMangaLibraryState-legacy-C48Rk-ka.js","./Checkbox-legacy-DIMiZwL1.js","./TabsMenu-legacy-DSwVbeWC.js","./Chip-legacy-BotT4vYt.js","./StyledFab-legacy-D7dQmNYX.js","./SwitchBase-legacy-CS3VuG66.js","./index-legacy-BlXOqfvv.js","./Delete-legacy-DQ5LlrxJ.js","./Sync-legacy-6UnfKBbo.js","./Mangas-legacy-D78ENlLV.js","./Chapters-legacy-D9dKDD69.js","./SpinnerImage-legacy-Bv_jESyI.js","./TypographyMaxLines-legacy-DGSmz8FC.js","./Link-legacy-BuMby-Jr.js","./Avatar-legacy-CKq2XIss.js","./PlayArrow-legacy-1FJE0wSE.js","./Progress-legacy-HvPyyPPw.js","./Info-legacy-BajNpXz4.js","./InputAdornment-legacy-C9arIE8s.js","./Collapse-legacy-B1qSbjLv.js","./NumberSetting-legacy-Q8CeC8Y1.js","./useMobilePicker-legacy-CIhCWqp0.js","./SelectSetting-legacy-BUfsPmU6.js","./Select-legacy-CETkoojf.js"],(function(t,a){"use strict";var l,o,s,c,d,f,g,b,y,h,m,p,j,v,x,C,S,w,k,O,A,M,_,L,I,F,T,P,D,E,N,R,U,B,G,z,q,K,Q,H,Y,$;return{setters:[function(e){l=e.u,o=e.n,s=e.a,c=e.j,d=e.G,f=e.c,g=e.f,b=e.I,y=e.r,h=e.i,m=e.o,p=e.s,j=e.h,v=e.P,x=e.N,C=e.E,S=e.g},function(e){w=e.u,k=e.S,O=e.A,A=e.N},function(e){M=e.T,_=e.a},function(e){L=e.d},function(e){I=e.C},function(e){F=e.S,T=e.R},function(e){P=e.T},function(e){D=e.O,E=e.S,N=e.a},function(e){R=e.T},function(e){U=e.F},function(e){B=e.R},function(e){G=e.M,z=e.a},function(e){q=e.U},function(e){K=e.u},function(e){Q=e.C},function(e){H=e.T,Y=e.a},function(e){$=e.C},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){t("Library",(function(){var e,t,a=l().t,i=o().options,u=s.useGetCategories({notifyOnNetworkStatusChange:!0}),d=u.data,g=u.error,b=u.loading,y=u.refetch,h=null==d?void 0:d.categories.nodes.filter((function(e){return 0!==e.id||0===e.id&&e.mangas.totalCount})),m=null!=h?h:[],p=f.useMemo((function(){return m.map((function(e){return e.mangas.totalCount})).reduce((function(e,t){return e+t}),0)}),[m]),k=r(w("tab",A),2),L=k[0],I=k[1],F=null!==(e=m.find((function(e){return e.order===L})))&&void 0!==e?e:m[0],T=s.useGetCategoryMangas(null==F?void 0:F.id,{skip:!F,notifyOnNetworkStatusChange:!0}),P=T.data,D=T.error,E=T.loading,R=T.refetch,U=null!==(t=null==P?void 0:P.mangas.nodes)&&void 0!==t?t:[],B=se(U),G=B.visibleMangas,Q=B.showFilteredOutMessage,$=f.useCallback((function(){return R().catch(j())}),[R,F]),J=f.useMemo((function(){return G.map((function(e){return e.id}))}),[G]),V=r(f.useState(!1),2),Z=V[0],ee=V[1],te=K(G.length,{itemIds:J,currentKey:null==F?void 0:F.id.toString()}),ne=te.areNoItemsForKeySelected,re=te.areAllItemsForKeySelected,le=te.selectedItemIds,oe=te.handleSelectAll,ie=te.handleSelection,ue=te.clearSelection,fe=function(e,t,n){ee(!!(le.length+(t?1:-1))),ie(e,t,n)},ge=f.useMemo((function(){return le.map((function(e){return s.graphQLClient.client.cache.readFragment({id:s.graphQLClient.client.cache.identify({__typename:"MangaType",id:e}),fragment:v,fragmentName:"PARTIAL_MANGA_FIELDS"})}))}),[le.length,G]),be=f.useMemo((function(){return Z?c.jsx(N,{selectedItemsCount:le.length,title:"manga.title",children:function(e,t){return c.jsx(z,{selectedMangas:ge,onClose:function(){e(),ee(!1),ue()},setHideMenu:t})}}):null}),[Z,ge]),ye=f.useContext(x),he=ye.setTitle,me=ye.setAction;f.useEffect((function(){var e=a("library.title"),t=c.jsxs(ce,{children:[e,i.showTabSize&&c.jsx(de,{label:p})]});return he(t,e),me(c.jsxs(c.Fragment,{children:[!Z&&c.jsxs(c.Fragment,{children:[c.jsx(O,{}),c.jsx(W,{}),c.jsx(q,{})]}),c.jsx(ae,{isActive:Z,areAllItemsSelected:re,areNoItemsSelected:ne,onSelectAll:function(e){return oe(e,n(new Set(G.map((function(e){return e.id})))))},onModeChange:function(e){ee(e),e?oe(!0,n(new Set(G.map((function(e){return e.id}))))):m.forEach((function(e){return oe(!1,[],e.id.toString())}))}})]})),function(){he(""),me(null)}}),[a,p,b,i,Z,ne,re,le.length,G.length]);if(null!=g)return c.jsx(C,{message:a("category.error.label.request_failure"),messageExtra:g.message,retry:function(){return y().catch(j())}});if(b)return c.jsx(S,{});if(0===m.length)return c.jsx(C,{message:a("library.error.label.empty")});if(1===m.length)return c.jsxs(c.Fragment,{children:[c.jsx(X,{mangas:G,message:a(D?"manga.error.label.request_failure":"library.error.label.empty"),messageExtra:null==D?void 0:D.message,isLoading:E,selectedMangaIds:le,isSelectModeActive:Z,handleSelection:fe,showFilteredOutMessage:!D&&Q,retry:D&&$}),be]});return c.jsxs(H,{children:[c.jsx(Y,{value:F.order,onChange:function(e,t){return function(e){I(e)}(t)},tabsCount:m.length,children:m.map((function(e){return c.jsx(M,{sx:{display:"flex"},label:c.jsxs(ce,{children:[e.name,i.showTabSize?c.jsx(de,{label:e.mangas.totalCount}):null]}),value:e.order},e.id)}))}),m.map((function(e){return c.jsx(_,{index:e.order,currentIndex:F.order,children:e===F&&c.jsx(X,{mangas:G,message:a(D?"manga.error.label.request_failure":"library.error.label.empty"),messageExtra:null==D?void 0:D.message,isLoading:E,selectedMangaIds:le,isSelectModeActive:Z,handleSelection:fe,showFilteredOutMessage:!D&&Q,retry:D&&$})},e.order)})),be]})}));var a={filter:"global.label.filter",sort:"global.label.sort",display:"global.label.display"},J=[["sortToRead","library.option.sort.label.by_unread_chapters"],["sortAlph","library.option.sort.label.alphabetically"],["sortDateAdded","library.option.sort.label.by_date_added"],["sortLastRead","library.option.sort.label.by_last_read"],["sortLatestFetchedChapter","library.option.sort.label.by_latest_fetched_chapter"],["sortLatestUploadedChapter","library.option.sort.label.by_latest_uploaded_chapter"]],V=function(e){var t,n,f=e.open,g=e.onClose,b=l().t,y=o(),h=y.options,m=y.setOptions,p=s.useGetTrackerList(),j=R.getLoggedIn(null!==(t=null===(n=p.data)||void 0===n?void 0:n.trackers.nodes)&&void 0!==t?t:[]),v=function(e,t){m((function(n){return i(i({},n),{},u({},e,t))}))};return c.jsx(D,{open:f,onClose:g,tabs:["filter","sort","display"],tabTitle:function(e){return b(a[e])},tabContent:function(e){if("filter"===e)return c.jsxs(c.Fragment,{children:[c.jsx(P,{label:b("global.filter.label.unread"),checked:h.unread,onChange:function(e){return v("unread",e)}}),c.jsx(P,{label:b("global.filter.label.downloaded"),checked:h.downloaded,onChange:function(e){return v("downloaded",e)}}),c.jsx(P,{label:b("global.filter.label.bookmarked"),checked:h.bookmarked,onChange:function(e){return v("bookmarked",e)}}),c.jsx(U,{sx:{mt:2},children:b("global.filter.label.tracked")}),j.map((function(e){return c.jsx(P,{label:e.name,checked:h.tracker[e.id],onChange:function(t){return v("tracker",i(i({},h.tracker),{},u({},e.id,t)))}},e.id)}))]});if("sort"===e)return J.map((function(e){var t=r(e,2),n=t[0],a=t[1];return c.jsx(F,{label:b(a),checked:h.sorts===n,sortDescending:h.sortDesc,onClick:function(){return n!==h.sorts?v("sorts",n):v("sortDesc",!h.sortDesc)}},n)}));if("display"===e){var t=h.gridLayout,n=h.showContinueReadingButton,a=h.showDownloadBadge,l=h.showUnreadBadge,o=h.showTabSize;return c.jsxs(c.Fragment,{children:[c.jsx(U,{children:b("global.grid_layout.title")}),c.jsxs(B,{onChange:function(e){return v("gridLayout",Number(e.target.value))},value:t,children:[c.jsx(T,{label:b("global.grid_layout.label.compact_grid"),value:d.Compact,checked:null==t||t===d.Compact}),c.jsx(T,{label:b("global.grid_layout.label.comfortable_grid"),value:d.Comfortable,checked:t===d.Comfortable}),c.jsx(T,{label:b("global.grid_layout.label.list"),value:d.List,checked:t===d.List})]}),c.jsx(U,{sx:{mt:2},children:b("library.option.display.badge.title")}),c.jsx(I,{label:b("library.option.display.badge.label.unread_badges"),checked:l,onChange:function(){return v("showUnreadBadge",!l)}}),c.jsx(I,{label:b("library.option.display.badge.label.download_badges"),checked:a,onChange:function(){return v("showDownloadBadge",!a)}}),c.jsx(U,{sx:{mt:2},children:b("library.option.display.tab.title")}),c.jsx(I,{label:b("library.option.display.tab.label.show_number_of_items"),checked:o,onChange:function(){return v("showTabSize",!o)}}),c.jsx(U,{sx:{mt:2},children:b("global.label.other")}),c.jsx(I,{label:b("library.option.display.other.label.show_continue_reading_button"),checked:n,onChange:function(){return v("showContinueReadingButton",!n)}})]})}return null}})},W=function(){var e=l().t,t=r(f.useState(!1),2),n=t[0],a=t[1],i=o().options,u=null!=i.downloaded||null!=i.unread||Object.values(i.tracker).some((function(e){return null!=e}));return c.jsxs(c.Fragment,{children:[c.jsx(g,{title:e("settings.title"),children:c.jsx(b,{onClick:function(){return a(!n)},color:u?"warning":"default",children:c.jsx(L,{})})}),c.jsx(V,{open:n,onClose:function(){return a(!1)}})]})},X=function(t){var n=t.showFilteredOutMessage,a=t.message,u=t.messageExtra,s=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(t,e),g=l().t,b=r(w("query",k),1)[0],y=o().options,h=y.unread,m=y.downloaded;return f.useEffect((function(){window.scrollTo(0,0)}),[b,h,m]),f.useLayoutEffect((function(){return document.body.style.overflowY=y.gridLayout===d.List?"auto":"scroll",function(){document.body.style.overflowY="auto"}}),[]),c.jsx(G,i(i({},s),{},{hasNextPage:!1,loadMore:function(){},message:n?g("library.error.label.no_matches"):a,messageExtra:n?void 0:u,gridLayout:y.gridLayout}))},Z={},ee=h;Object.defineProperty(Z,"__esModule",{value:!0});var te=Z.default=void 0,ne=ee(y()),re=c;te=Z.default=(0,ne.default)((0,re.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear");var ae=function(e){var t=e.isActive,n=e.areAllItemsSelected,r=e.areNoItemsSelected,a=e.onSelectAll,o=e.onModeChange,i=l().t;return c.jsxs(c.Fragment,{children:[t&&c.jsx(E,{areAllItemsSelected:n,areNoItemsSelected:r,onChange:a}),c.jsx(g,{title:i(t?"global.button.cancel":"global.button.select_all"),children:c.jsx(Q,{checkedIcon:c.jsx(te,{}),sx:{padding:"8px"},checked:t,onChange:function(e,t){return o(t)}})})]})},le=function(e,t,n){switch(e){case!0:return t();case!1:return n();default:return!0}},oe=function(e,t){return le(e,(function(){return!!t&&t>=1}),(function(){return 0===t}))},ie=function(e,t,n,a,l,o,i){return e.filter((function(e){var u=i&&(null==t?void 0:t.length),s=function(e,t){var n=t.title;return!e||n.toLowerCase().includes(e.toLowerCase())}(t,e)||function(e,t){var n=t.genre;return!e||e.split(",").map((function(e){return e.toLowerCase().trim()})).every((function(e){return n.map((function(e){return e.toLowerCase()})).includes(e)}))}(t,e),c=u||oe(a,e.downloadCount)&&oe(n,e.unreadCount)&&oe(l,e.bookmarkCount)&&function(e,t){return Object.entries(e).map((function(e){var n=r(e,2),a=n[0],l=n[1],o=R.getTrackers(t.trackRecords.nodes).some((function(e){return e.id===Number(a)}));return le(l,(function(){return o}),(function(){return!o}))})).every((function(e){return e}))}(o,e);return s&&c}))},ue=function(){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Number(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)-Number(e)},se=function(e){var t=r(w("query",k),1)[0],a=o().options,l=a.unread,i=a.downloaded,u=a.bookmarked,s=a.tracker,c=m().settings,d=f.useMemo((function(){return ie(e,t,l,i,u,s,c.ignoreFilters)}),[e,t,l,i,u,s,c.ignoreFilters]),g=f.useMemo((function(){return function(e,t,r){var a=n(e);switch(t){case"sortAlph":a.sort((function(e,t){return function(e,t){return e.localeCompare(t)}(e.title,t.title)}));break;case"sortDateAdded":a.sort((function(e,t){return ue(e.inLibraryAt,t.inLibraryAt)}));break;case"sortToRead":a.sort((function(e,t){return ue(e.unreadCount,t.unreadCount)}));break;case"sortLastRead":a.sort((function(e,t){var n,r;return ue(null===(n=e.lastReadChapter)||void 0===n?void 0:n.lastReadAt,null===(r=t.lastReadChapter)||void 0===r?void 0:r.lastReadAt)}));break;case"sortLatestUploadedChapter":a.sort((function(e,t){var n,r;return ue(null===(n=e.latestUploadedChapter)||void 0===n?void 0:n.uploadDate,null===(r=t.latestUploadedChapter)||void 0===r?void 0:r.uploadDate)}));break;case"sortLatestFetchedChapter":a.sort((function(e,t){var n,r;return ue(null===(n=e.latestFetchedChapter)||void 0===n?void 0:n.fetchedAt,null===(r=t.latestFetchedChapter)||void 0===r?void 0:r.fetchedAt)}))}return r&&a.reverse(),a}(d,a.sorts,a.sortDesc)}),[d,a.sorts,a.sortDesc]),b=Object.values(a.tracker).some((function(e){return null!=e}));return{visibleMangas:g,showFilteredOutMessage:(null!=l||null!=i||null!=u||!!t||b)&&0===d.length&&e.length>0}},ce=p("span")({display:"flex",alignItems:"center"}),de=function(e){return c.jsx($,i(i({},e),{},{size:"small",sx:{marginLeft:"5px"}}))}}}}))}();
