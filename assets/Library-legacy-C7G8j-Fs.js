!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}var t=["showFilteredOutMessage","message","messageExtra"],r=["sx"];function n(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||o(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.includes(r)||{}.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,l,o,i=[],s=!0,u=!1;try{if(l=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=l.call(r)).done)&&(i.push(n.value),i.length!==t);s=!0);}catch(e){u=!0,a=e}finally{try{if(!s&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(u)throw a}}return i}}(e,t)||o(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){if(e){if("string"==typeof e)return i(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(t,r,n){return(r=function(t){var r=function(t,r){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var a=n.call(t,r||"default");if("object"!=e(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==e(r)?r:r+""}(r))in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}System.register(["./index-legacy-873OMCK7.js","./AppbarSearch-legacy-BX3jWZxN.js","./FilterList-legacy-Ci3ADB5Y.js","./SortRadioInput-legacy-DTfnKHUZ.js","./ThreeStateCheckboxInput-legacy-CuC1rY84.js","./SelectionFAB-legacy-DJxFsbFV.js","./Trackers-legacy-CN_LuGVd.js","./Mangas-legacy-CDPKcEzf.js","./ListPreference-legacy-DK05-ySi.js","./MangaGrid-legacy-DRhXM10Y.js","./UpdateChecker-legacy-Sq0qUKyA.js","./useManageMangaLibraryState-legacy-BdebOQmj.js","./TabsWrapper-legacy-CirNJnr4.js","./Chip-legacy-BKEXS4fj.js","./StyledFab-legacy-rJs84NVa.js","./Sync-legacy-C1a9NjMW.js","./Avatar-legacy-BBto_pti.js","./PlayArrow-legacy-D7XpB8kc.js","./Progress-legacy-i_xuNFNL.js","./CheckCircle-legacy-B74LO0go.js","./NumberSetting-legacy-C3aDxr44.js","./useMobilePicker-legacy-0KgT7xcZ.js","./SelectSetting-legacy-BdSDL7Qa.js"],(function(e,o){"use strict";var i,s,d,f,h,g,b,y,p,m,v,j,C,x,S,k,w,_,O,A,M,I,F,D,B,T,L,P,E,N,U,R,G,W,q,z,Y,K,$,H,Q,V,X,Z,J,ee,te,re,ne,ae,le,oe,ie;return{setters:[function(e){i=e.u,s=e.c,d=e.Q,f=e.R,h=e.q,g=e.j,b=e.U,y=e.W,p=e.X,m=e.Y,v=e.Z,j=e.y,C=e.n,x=e.f,S=e._,k=e.k,w=e.I,_=e.$,O=e.a0,A=e.a1,M=e.a2,I=e.a3,F=e.a4,D=e.m,B=e.a5,T=e.N,L=e.E,P=e.l,E=e.D,N=e.F,U=e.G},function(e){R=e.u,G=e.S,W=e.A,q=e.N},function(e){z=e.d},function(e){Y=e.S,K=e.R},function(e){$=e.T},function(e){H=e.O,Q=e.S,V=e.a},function(e){X=e.T},function(e){Z=e.s,J=e.M},function(e){ee=e.R},function(e){te=e.M,re=e.a},function(e){ne=e.d,ae=e.U},function(e){le=e.u},function(e){oe=e.T},function(e){ie=e.C},null,null,null,null,null,null,null,null,null],execute:function(){e("Library",(function(){var e,t,r,a,o=i().t,u=h().settings.showTabSize,c=s.useGetCategories(M,{notifyOnNetworkStatusChange:!0}),d=c.data,f=c.error,b=c.loading,y=c.refetch,p=null==d?void 0:d.categories.nodes.filter((function(e){return 0!==e.id||0===e.id&&e.mangas.totalCount})),m=null!=p?p:[],v=s.useGetMangas(I,{}),j=null!==(e=null===(t=v.data)||void 0===t?void 0:t.mangas.totalCount)&&void 0!==e?e:0,C=l(R("tab",q),2),k=C[0],w=C[1],_=S().setOptions,O=null!==(r=m.find((function(e){return e.order===k})))&&void 0!==r?r:m[0];x.useLayoutEffect((function(){_(F(null!=O?O:{id:-1}))}),[O]);var A=s.useGetCategoryMangas(null==O?void 0:O.id,{skip:!O,notifyOnNetworkStatusChange:!0}),G=A.data,z=A.error,Y=A.loading,K=A.refetch,$=null!==(a=null==G?void 0:G.mangas.nodes)&&void 0!==a?a:[],H=Ce($,O),Q=H.visibleMangas,X=H.showFilteredOutMessage,Z=x.useCallback((function(){return K().catch(D())}),[K,O]),ee=x.useMemo((function(){return Q.map((function(e){return e.id}))}),[Q]),te=l(x.useState(!1),2),ne=te[0],ie=te[1],se=le(Q.length,{itemIds:ee,currentKey:null==O?void 0:O.id.toString()}),ue=se.areNoItemsForKeySelected,he=se.areAllItemsForKeySelected,ge=se.selectedItemIds,be=se.handleSelectAll,ye=se.handleSelection,pe=se.clearSelection,me=function(e,t,r){ie(!!(ge.length+(t?1:-1))),ye(e,t,r)},ve=x.useMemo((function(){return ge.map((function(e){return J.getFromCache(e,B,"MANGA_CHAPTER_STAT_FIELDS")})).filter((function(e){return!!e}))}),[ge.length,Q]),je=x.useMemo((function(){return ne?g.jsx(V,{selectedItemsCount:ge.length,title:"manga.title",children:function(e,t){return g.jsx(re,{selectedMangas:ve,onClose:function(){e(),ie(!1),pe()},setHideMenu:t})}}):null}),[ne,ve]),ke=x.useContext(T),we=ke.setTitle,_e=ke.setAction;x.useLayoutEffect((function(){var e=o("library.title");return we(g.jsxs(xe,{children:[e,u&&g.jsx(Se,{sx:{color:"inherit"},label:j})]}),e),_e(g.jsxs(g.Fragment,{children:[!ne&&O&&g.jsxs(g.Fragment,{children:[g.jsx(W,{}),g.jsx(ce,{category:O}),g.jsx(ae,{categoryId:null==O?void 0:O.id})]}),g.jsx(fe,{isActive:ne,areAllItemsSelected:he,areNoItemsSelected:ue,onSelectAll:function(e){return be(e,n(new Set(Q.map((function(e){return e.id})))))},onModeChange:function(e){ie(e),e?be(!0,n(new Set(Q.map((function(e){return e.id}))))):m.forEach((function(e){return be(!1,[],e.id.toString())}))}})]})),function(){we(""),_e(null)}}),[o,j,b,ne,ue,he,ge.length,Q.length,O,u]);var Oe,Ae;if(null!=f||v.error)return g.jsx(L,{message:o("global.error.label.failed_to_load_data"),messageExtra:null!==(Oe=null==f?void 0:f.message)&&void 0!==Oe?Oe:null===(Ae=v.error)||void 0===Ae?void 0:Ae.message,retry:function(){f&&y().catch(D()),v.error&&v.refetch().catch(D())}});if(b||v.loading)return g.jsx(P,{});if(0===m.length)return g.jsx(L,{message:o("library.error.label.empty")});if(1===m.length)return g.jsxs(g.Fragment,{children:[g.jsx(de,{mangas:Q,message:o(z?"manga.error.label.request_failure":"library.error.label.empty"),messageExtra:null==z?void 0:z.message,isLoading:Y,selectedMangaIds:ge,isSelectModeActive:ne,handleSelection:me,showFilteredOutMessage:!z&&X,retry:z&&Z}),je]});return g.jsxs(oe,{children:[g.jsx(E,{value:O.order,onChange:function(e,t){return function(e){w(e)}(t)},children:m.map((function(e){return g.jsx(N,{sx:{flexGrow:1,maxWidth:"unset"},label:g.jsxs(xe,{children:[e.name,u?g.jsx(Se,{label:e.mangas.totalCount}):null]}),value:e.order},e.id)}))}),m.map((function(e){return g.jsx(U,{index:e.order,currentIndex:O.order,children:e===O&&g.jsx(de,{mangas:Q,message:o(z?"manga.error.label.request_failure":"library.error.label.empty"),messageExtra:null==z?void 0:z.message,isLoading:Y,selectedMangaIds:ge,isSelectModeActive:ne,handleSelection:me,showFilteredOutMessage:!z&&X,retry:z&&Z})},e.order)})),je]})}));var o={filter:"global.label.filter",sort:"global.label.sort",display:"global.label.display"},se=[["unreadChapters","library.option.sort.label.by_unread_chapters"],["totalChapters","library.option.sort.label.by_total_chapters"],["alphabetically","library.option.sort.label.alphabetically"],["dateAdded","library.option.sort.label.by_date_added"],["lastRead","library.option.sort.label.by_last_read"],["latestFetchedChapter","library.option.sort.label.by_latest_fetched_chapter"],["latestUploadedChapter","library.option.sort.label.by_latest_uploaded_chapter"]],ue=function(e){var t,r,n=e.category,a=e.open,x=e.onClose,S=i().t,k=s.useGetTrackerList(d),w=X.getLoggedIn(null!==(t=null===(r=k.data)||void 0===r?void 0:r.trackers.nodes)&&void 0!==t?t:[]),_=f(n),O=v(n,(function(){return C(S("global.error.label.failed_to_save_changes","error"))})),A=h().settings.showTabSize,M=j((function(){return C(S("search.error.label.failed_to_save_settings"),"warning")}));return g.jsx(H,{open:a,onClose:x,tabs:["filter","sort","display"],tabTitle:function(e){return S(o[e])},tabContent:function(e){if("filter"===e)return g.jsxs(g.Fragment,{children:[g.jsx($,{label:S("global.filter.label.unread"),checked:_.hasUnreadChapters,onChange:function(e){return O("hasUnreadChapters",e)}}),g.jsx($,{label:S("global.filter.label.downloaded"),checked:_.hasDownloadedChapters,onChange:function(e){return O("hasDownloadedChapters",e)}}),g.jsx($,{label:S("global.filter.label.bookmarked"),checked:_.hasBookmarkedChapters,onChange:function(e){return O("hasBookmarkedChapters",e)}}),g.jsx($,{label:S("global.filter.label.duplicate_chapters"),checked:_.hasDuplicateChapters,onChange:function(e){return O("hasDuplicateChapters",e)}}),g.jsx(b,{sx:{mt:2},children:S("manga.label.status")}),Object.values(y).map((function(e){return g.jsx($,{label:S(Z[e]),checked:_.hasStatus[e],onChange:function(t){return O("hasStatus",u(u({},_.hasStatus),{},c({},e,t)))}},e)})),g.jsx(b,{sx:{mt:2},children:S("global.filter.label.tracked")}),w.map((function(e){return g.jsx($,{label:e.name,checked:_.hasTrackerBinding[e.id],onChange:function(t){return O("hasTrackerBinding",u(u({},_.hasTrackerBinding),{},c({},e.id,t)))}},e.id)}))]});if("sort"===e)return se.map((function(e){var t=l(e,2),r=t[0],n=t[1];return g.jsx(Y,{label:S(n),checked:_.sortBy===r,sortDescending:_.sortDesc,onClick:function(){return r!==_.sortBy?O("sortBy",r):O("sortDesc",!_.sortDesc)}},r)}));if("display"===e){var t=_.gridLayout,r=_.showContinueReadingButton,n=_.showDownloadBadge,a=_.showUnreadBadge;return g.jsxs(g.Fragment,{children:[g.jsx(b,{children:S("global.grid_layout.title")}),g.jsxs(ee,{onChange:function(e){return O("gridLayout",Number(e.target.value))},value:t,children:[g.jsx(K,{label:S("global.grid_layout.label.compact_grid"),value:p.Compact,checked:null==t||t===p.Compact}),g.jsx(K,{label:S("global.grid_layout.label.comfortable_grid"),value:p.Comfortable,checked:t===p.Comfortable}),g.jsx(K,{label:S("global.grid_layout.label.list"),value:p.List,checked:t===p.List})]}),g.jsx(b,{sx:{mt:2},children:S("library.option.display.badge.title")}),g.jsx(m,{label:S("library.option.display.badge.label.unread_badges"),checked:a,onChange:function(){return O("showUnreadBadge",!a)}}),g.jsx(m,{label:S("library.option.display.badge.label.download_badges"),checked:n,onChange:function(){return O("showDownloadBadge",!n)}}),g.jsx(b,{sx:{mt:2},children:S("library.option.display.tab.title")}),g.jsx(m,{label:S("library.option.display.tab.label.show_number_of_items"),checked:A,onChange:function(){return M("showTabSize",!A)}}),g.jsx(b,{sx:{mt:2},children:S("global.label.other")}),g.jsx(m,{label:S("library.option.display.other.label.show_continue_reading_button"),checked:r,onChange:function(){return O("showContinueReadingButton",!r)}})]})}return null}})},ce=function(e){var t=e.category,r=i().t,n=l(x.useState(!1),2),a=n[0],o=n[1],s=S().options,u=null!=s.hasDownloadedChapters||null!=s.hasUnreadChapters||null!=s.hasBookmarkedChapters||null!=s.hasDuplicateChapters||Object.values(s.hasStatus).some((function(e){return null!=e}))||Object.values(s.hasTrackerBinding).some((function(e){return null!=e}));return g.jsxs(g.Fragment,{children:[g.jsx(k,{title:r("settings.title"),children:g.jsx(w,{onClick:function(){return o(!a)},color:u?"warning":"inherit",children:g.jsx(z,{})})}),g.jsx(ue,{category:t,open:a,onClose:function(){return o(!1)}})]})},de=function(e){var r=e.showFilteredOutMessage,n=e.message,l=e.messageExtra,o=a(e,t),s=i().t,c=S().options;return x.useLayoutEffect((function(){return document.body.style.overflowY=c.gridLayout===p.List?"auto":"scroll",function(){document.body.style.overflowY="auto"}}),[]),g.jsx(te,u(u({gridWrapperProps:{sx:{p:1}}},o),{},{hasNextPage:!1,loadMore:function(){},message:r?s("library.error.label.no_matches"):n,messageExtra:r?void 0:l,gridLayout:c.gridLayout}))},fe=function(e){var t=e.isActive,r=e.areAllItemsSelected,n=e.areNoItemsSelected,a=e.onSelectAll,l=e.onModeChange,o=i().t;return g.jsxs(g.Fragment,{children:[t&&g.jsx(Q,{areAllItemsSelected:r,areNoItemsSelected:n,onChange:a}),g.jsx(k,{title:o(t?"global.button.cancel":"global.button.select_all"),children:g.jsx(_,{checkedIcon:g.jsx(ne,{}),sx:{padding:"8px",color:"inherit","&.Mui-checked":{color:"inherit"}},checked:t,onChange:function(e,t){return l(t)}})})]})},he=function(e,t,r){switch(e){case!0:return t();case!1:return r();default:return!0}},ge=function(e,t){return he(e,(function(){return!!t&&t>=1}),(function(){return 0===t}))},be=function(e,t){return he(e,(function(){return!!t}),(function(){return!t}))},ye=function(e,t){var r=null==e?void 0:e.filter((function(e){return null!=e})),n=null==t?void 0:t.filter((function(e){return null!=e}));if(null==r||!r.length)return!0;var a=r.map(O),l=n.map(O).join(", ");return a.every((function(e){return l.includes(e)}))},pe=function(e,t){var r=t.hasDownloadedChapters,n=t.hasUnreadChapters,a=t.hasBookmarkedChapters,o=t.hasDuplicateChapters,i=t.hasTrackerBinding,s=t.hasStatus;return ge(r,e.downloadCount)&&ge(n,e.unreadCount)&&ge(a,e.bookmarkCount)&&be(o,e.hasDuplicateChapters)&&function(e,t){return Object.entries(e).map((function(e){var r=l(e,2),n=r[0],a=r[1],o=t.trackRecords.nodes.some((function(e){return e.trackerId===Number(n)}));return he(a,(function(){return o}),(function(){return!o}))})).every(Boolean)}(i,e)&&function(e,t){return Object.entries(e).map((function(e){var r=l(e,2),n=r[0],a=r[1];return be(a,n===t.status)})).every(Boolean)}(s,e)},me=function(e,t,r){var n=r.ignoreFilters&&(null==t?void 0:t.length);return e.filter((function(e){var a=function(e,t){var r=t.title,n=t.genre,a=t.description,l=t.artist,o=t.author,i=t.source;return ye([e],[r])||ye(null==e?void 0:e.split(","),n.map((function(e){return O(e)})))||ye([e],[a])||ye([e],[l])||ye([e],[o])||ye([e],[null==i?void 0:i.displayName])}(t,e),l=n||pe(e,r);return a&&l}))},ve=function(){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Number(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)-Number(e)},je={id:-1},Ce=function(e,t){var r=l(R("query",G),1)[0],a=f(null!=t?t:je),o=a.hasUnreadChapters,i=a.hasDownloadedChapters,s=a.hasBookmarkedChapters,c=a.hasTrackerBinding,d=a.hasDuplicateChapters,g=a.hasStatus,b=h().settings,y=x.useMemo((function(){return me(e,r,u(u({},a),{},{ignoreFilters:b.ignoreFilters}))}),[e,r,o,i,s,c,d,g,b.ignoreFilters]),p=x.useMemo((function(){return function(e,t,r){var a=n(e);switch(t){case"alphabetically":a.sort((function(e,t){return function(e,t){return e.localeCompare(t)}(e.title,t.title)}));break;case"dateAdded":a.sort((function(e,t){return ve(e.inLibraryAt,t.inLibraryAt)}));break;case"unreadChapters":a.sort((function(e,t){return ve(e.unreadCount,t.unreadCount)}));break;case"lastRead":a.sort((function(e,t){var r,n;return ve(null===(r=e.lastReadChapter)||void 0===r?void 0:r.lastReadAt,null===(n=t.lastReadChapter)||void 0===n?void 0:n.lastReadAt)}));break;case"latestUploadedChapter":a.sort((function(e,t){var r,n;return ve(null===(r=e.latestUploadedChapter)||void 0===r?void 0:r.uploadDate,null===(n=t.latestUploadedChapter)||void 0===n?void 0:n.uploadDate)}));break;case"latestFetchedChapter":a.sort((function(e,t){var r,n;return ve(null===(r=e.latestFetchedChapter)||void 0===r?void 0:r.fetchedAt,null===(n=t.latestFetchedChapter)||void 0===n?void 0:n.fetchedAt)}));break;case"totalChapters":a.sort((function(e,t){return ve(e.chapters.totalCount,t.chapters.totalCount)}))}return r&&a.reverse(),a}(y,a.sortBy,a.sortDesc)}),[y,a.sortBy,a.sortDesc]),m=Object.values(a.hasTrackerBinding).some((function(e){return null!=e}));return{visibleMangas:p,showFilteredOutMessage:(null!=o||null!=i||null!=s||!!r||m)&&0===y.length&&e.length>0}},xe=A("span")({display:"flex",alignItems:"center"}),Se=function(e){var t=e.sx,n=a(e,r);return g.jsx(ie,u(u({},n),{},{size:"small",sx:u(u({},t),{},{marginLeft:"5px"})}))}}}}))}();
