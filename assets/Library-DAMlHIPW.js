import{u as F,o as A,a as D,G as ie,j as e,p as S,c as g,f as ae,I as ce,q as de,s as ue,t as be,h as J,M as he,N as me,E as X,g as ge}from"./index-D7pprMrg.js";import{u as G,S as re,A as pe,N as fe}from"./AppbarSearch-CsG-67_n.js";import{T as Ce,a as xe}from"./Tabs-CXQLf_RB.js";import{d as ye}from"./FilterList-DupdP5Sw.js";import{C as I}from"./CheckboxInput-ejvHSd2m.js";import{S as Se,R as N}from"./SortRadioInput-nJlHjj5J.js";import{T as L}from"./ThreeStateCheckboxInput-CYwa41iE.js";import{O as je,S as ke,a as _e}from"./SelectionFAB-MiFFrLHR.js";import{T as Te}from"./Trackers-D4pSmk7a.js";import{F as w}from"./TextField-DfV5K-Aq.js";import{R as Le}from"./ListPreference-s96tsAgG.js";import{M as we,a as Me}from"./MangaGrid-DVIotxE5.js";import{d as Fe,U as Ae}from"./UpdateChecker--f8VBDDO.js";import{u as Ie}from"./useManageMangaLibraryState-Bdg6B1y-.js";import{C as Re}from"./Checkbox-ChinJgjm.js";import{T as Ee,a as ve}from"./TabsMenu-BwztGeBA.js";import{M as Ne}from"./Mangas-ypR8XZdX.js";import{C as Oe}from"./Chip-hFyz_qRE.js";import"./StyledFab-DKdp6vlW.js";import"./SwitchBase-C8OjMmeq.js";import"./index-CGiWvMo3.js";import"./Delete-vki4546q.js";import"./Sync-Bl9lUdx_.js";import"./SpinnerImage-CPviM7o2.js";import"./TypographyMaxLines-QutZLR6f.js";import"./Link-C83zbUcG.js";import"./Avatar-DMhlU6I2.js";import"./PlayArrow-DylcwXlE.js";import"./Progress-SZA2Oihp.js";import"./Info-Bin7_BBP.js";import"./InputAdornment-CCrqpGoa.js";import"./Collapse-D9m5zC_C.js";import"./NumberSetting-B1w5lw3O.js";import"./useMobilePicker-Df2Vw0n8.js";import"./SelectSetting-BCB52YbQ.js";import"./Select-De7Lkx3a.js";import"./Chapters-Cixa5zGU.js";const De={filter:"global.label.filter",sort:"global.label.sort",display:"global.label.display"},Ge=[["sortToRead","library.option.sort.label.by_unread_chapters"],["sortAlph","library.option.sort.label.alphabetically"],["sortDateAdded","library.option.sort.label.by_date_added"],["sortLastRead","library.option.sort.label.by_last_read"],["sortLatestFetchedChapter","library.option.sort.label.by_latest_fetched_chapter"],["sortLatestUploadedChapter","library.option.sort.label.by_latest_uploaded_chapter"]],Be=({open:t,onClose:s})=>{var u,p;const{t:a}=F(),{options:o,setOptions:i}=A(),c=D.useGetTrackerList(ie),d=Te.getLoggedIn((p=(u=c.data)==null?void 0:u.trackers.nodes)!=null?p:[]),l=(m,r)=>{i(h=>({...h,[m]:r}))};return e.jsx(je,{open:t,onClose:s,tabs:["filter","sort","display"],tabTitle:m=>a(De[m]),tabContent:m=>{if(m==="filter")return e.jsxs(e.Fragment,{children:[e.jsx(L,{label:a("global.filter.label.unread"),checked:o.unread,onChange:r=>l("unread",r)}),e.jsx(L,{label:a("global.filter.label.downloaded"),checked:o.downloaded,onChange:r=>l("downloaded",r)}),e.jsx(L,{label:a("global.filter.label.bookmarked"),checked:o.bookmarked,onChange:r=>l("bookmarked",r)}),e.jsx(L,{label:a("global.filter.label.duplicate_chapters"),checked:o.hasDuplicateChapters,onChange:r=>l("hasDuplicateChapters",r)}),e.jsx(w,{sx:{mt:2},children:a("global.filter.label.tracked")}),d.map(r=>e.jsx(L,{label:r.name,checked:o.tracker[r.id],onChange:h=>l("tracker",{...o.tracker,[r.id]:h})},r.id))]});if(m==="sort")return Ge.map(([r,h])=>e.jsx(Se,{label:a(h),checked:o.sorts===r,sortDescending:o.sortDesc,onClick:()=>r!==o.sorts?l("sorts",r):l("sortDesc",!o.sortDesc)},r));if(m==="display"){const{gridLayout:r,showContinueReadingButton:h,showDownloadBadge:b,showUnreadBadge:k,showTabSize:_}=o;return e.jsxs(e.Fragment,{children:[e.jsx(w,{children:a("global.grid_layout.title")}),e.jsxs(Le,{onChange:R=>l("gridLayout",Number(R.target.value)),value:r,children:[e.jsx(N,{label:a("global.grid_layout.label.compact_grid"),value:S.Compact,checked:r==null||r===S.Compact}),e.jsx(N,{label:a("global.grid_layout.label.comfortable_grid"),value:S.Comfortable,checked:r===S.Comfortable}),e.jsx(N,{label:a("global.grid_layout.label.list"),value:S.List,checked:r===S.List})]}),e.jsx(w,{sx:{mt:2},children:a("library.option.display.badge.title")}),e.jsx(I,{label:a("library.option.display.badge.label.unread_badges"),checked:k,onChange:()=>l("showUnreadBadge",!k)}),e.jsx(I,{label:a("library.option.display.badge.label.download_badges"),checked:b,onChange:()=>l("showDownloadBadge",!b)}),e.jsx(w,{sx:{mt:2},children:a("library.option.display.tab.title")}),e.jsx(I,{label:a("library.option.display.tab.label.show_number_of_items"),checked:_,onChange:()=>l("showTabSize",!_)}),e.jsx(w,{sx:{mt:2},children:a("global.label.other")}),e.jsx(I,{label:a("library.option.display.other.label.show_continue_reading_button"),checked:h,onChange:()=>l("showContinueReadingButton",!h)})]})}return null}})},Pe=()=>{const{t}=F(),[s,a]=g.useState(!1),{options:o}=A(),i=o.downloaded!=null||o.unread!=null||Object.values(o.tracker).some(c=>c!=null);return e.jsxs(e.Fragment,{children:[e.jsx(ae,{title:t("settings.title"),children:e.jsx(ce,{onClick:()=>a(!s),color:i?"warning":"default",children:e.jsx(ye,{})})}),e.jsx(Be,{open:s,onClose:()=>a(!1)})]})},Z=({showFilteredOutMessage:t,message:s,messageExtra:a,...o})=>{const{t:i}=F(),[c]=G("query",re),{options:d}=A(),{unread:l,downloaded:u}=d;return g.useEffect(()=>{window.scrollTo(0,0)},[c,l,u]),g.useLayoutEffect(()=>(document.body.style.overflowY=d.gridLayout===S.List?"auto":"scroll",()=>{document.body.style.overflowY="auto"}),[]),e.jsx(we,{...o,hasNextPage:!1,loadMore:()=>{},message:t?i("library.error.label.no_matches"):s,messageExtra:t?void 0:a,gridLayout:d.gridLayout})},ze=({isActive:t,areAllItemsSelected:s,areNoItemsSelected:a,onSelectAll:o,onModeChange:i})=>{const{t:c}=F();return e.jsxs(e.Fragment,{children:[t&&e.jsx(ke,{areAllItemsSelected:s,areNoItemsSelected:a,onChange:o}),e.jsx(ae,{title:c(t?"global.button.cancel":"global.button.select_all"),children:e.jsx(Re,{checkedIcon:e.jsx(Fe,{}),sx:{padding:"8px"},checked:t,onChange:(d,l)=>i(l)})})]})},B=(t,s,a)=>{switch(t){case!0:return s();case!1:return a();default:return!0}},O=(t,s)=>B(t,()=>!!s&&s>=1,()=>s===0),Ue=(t,s)=>B(t,()=>!!s,()=>!s),qe=(t,{title:s})=>t?s.toLowerCase().includes(t.toLowerCase()):!0,Ke=(t,{genre:s})=>t?t.split(",").map(o=>o.toLowerCase().trim()).every(o=>s.map(i=>i.toLowerCase()).includes(o)):!0,He=(t,s)=>Object.entries(t).map(([a,o])=>{const i=s.trackRecords.nodes.some(c=>c.trackerId===Number(a));return B(o,()=>i,()=>!i)}).every(a=>a),We=(t,s,a,o,i,c,d,l)=>t.filter(u=>{const p=l&&(s==null?void 0:s.length),m=qe(s,u)||Ke(s,u),r=p||O(o,u.downloadCount)&&O(a,u.unreadCount)&&O(i,u.bookmarkCount)&&Ue(c,u.hasDuplicateChapters)&&He(d,u);return m&&r}),M=(t=0,s=0)=>Number(t)-Number(s),Ye=(t,s)=>t.localeCompare(s),Ve=(t,s,a)=>{const o=[...t];switch(s){case"sortAlph":o.sort((i,c)=>Ye(i.title,c.title));break;case"sortDateAdded":o.sort((i,c)=>M(i.inLibraryAt,c.inLibraryAt));break;case"sortToRead":o.sort((i,c)=>M(i.unreadCount,c.unreadCount));break;case"sortLastRead":o.sort((i,c)=>{var d,l;return M((d=i.lastReadChapter)==null?void 0:d.lastReadAt,(l=c.lastReadChapter)==null?void 0:l.lastReadAt)});break;case"sortLatestUploadedChapter":o.sort((i,c)=>{var d,l;return M((d=i.latestUploadedChapter)==null?void 0:d.uploadDate,(l=c.latestUploadedChapter)==null?void 0:l.uploadDate)});break;case"sortLatestFetchedChapter":o.sort((i,c)=>{var d,l;return M((d=i.latestFetchedChapter)==null?void 0:d.fetchedAt,(l=c.latestFetchedChapter)==null?void 0:l.fetchedAt)});break}return a&&o.reverse(),o},Qe=t=>{const[s]=G("query",re),{options:a}=A(),{unread:o,downloaded:i,bookmarked:c,tracker:d,hasDuplicateChapters:l}=a,{settings:u}=de(),p=g.useMemo(()=>We(t,s,o,i,c,l,d,u.ignoreFilters),[t,s,o,i,c,l,d,u.ignoreFilters]),m=g.useMemo(()=>Ve(p,a.sorts,a.sortDesc),[p,a.sorts,a.sortDesc]),r=Object.values(a.tracker).some(b=>b!=null),h=(o!=null||i!=null||c!=null||!!s||r)&&p.length===0&&t.length>0;return{visibleMangas:m,showFilteredOutMessage:h}},ee=ue("span")({display:"flex",alignItems:"center"}),te=t=>e.jsx(Oe,{...t,size:"small",sx:{marginLeft:"5px"}});function Et(){var Q,$;const{t}=F(),{options:s}=A(),{data:a,error:o,loading:i,refetch:c}=D.useGetCategories(be,{notifyOnNetworkStatusChange:!0}),d=a==null?void 0:a.categories.nodes.filter(n=>n.id!==0||n.id===0&&n.mangas.totalCount),l=d!=null?d:[],u=g.useMemo(()=>l.map(n=>n.mangas.totalCount).reduce((n,f)=>n+f,0),[l]),[p,m]=G("tab",fe),r=(Q=l.find(n=>n.order===p))!=null?Q:l[0],{data:h,error:b,loading:k,refetch:_}=D.useGetCategoryMangas(r==null?void 0:r.id,{skip:!r,notifyOnNetworkStatusChange:!0}),R=($=h==null?void 0:h.mangas.nodes)!=null?$:[],{visibleMangas:C,showFilteredOutMessage:P}=Qe(R),z=g.useCallback(()=>_().catch(J()),[_,r]),se=g.useMemo(()=>C.map(n=>n.id),[C]),[x,E]=g.useState(!1),{areNoItemsForKeySelected:U,areAllItemsForKeySelected:q,selectedItemIds:y,handleSelectAll:v,handleSelection:oe,clearSelection:le}=Ie(C.length,{itemIds:se,currentKey:r==null?void 0:r.id.toString()}),K=(n,f,j)=>{E(!!(y.length+(f?1:-1))),oe(n,f,j)},H=g.useMemo(()=>y.map(n=>Ne.getFromCache(n,he,"MANGA_CHAPTER_STAT_FIELDS")).filter(n=>!!n),[y.length,C]),W=g.useMemo(()=>x?e.jsx(_e,{selectedItemsCount:y.length,title:"manga.title",children:(n,f)=>e.jsx(Me,{selectedMangas:H,onClose:()=>{n(),E(!1),le()},setHideMenu:f})}):null,[x,H]),{setTitle:Y,setAction:V}=g.useContext(me);g.useEffect(()=>{const n=t("library.title"),f=e.jsxs(ee,{children:[n,s.showTabSize&&e.jsx(te,{label:u})]});return Y(f,n),V(e.jsxs(e.Fragment,{children:[!x&&e.jsxs(e.Fragment,{children:[e.jsx(pe,{}),e.jsx(Pe,{}),e.jsx(Ae,{categoryId:r==null?void 0:r.id})]}),e.jsx(ze,{isActive:x,areAllItemsSelected:q,areNoItemsSelected:U,onSelectAll:j=>v(j,[...new Set(C.map(T=>T.id))]),onModeChange:j=>{E(j),j?v(!0,[...new Set(C.map(T=>T.id))]):l.forEach(T=>v(!1,[],T.id.toString()))}})]})),()=>{Y(""),V(null)}},[t,u,i,s,x,U,q,y.length,C.length,r]);const ne=n=>{m(n)};return o!=null?e.jsx(X,{message:t("category.error.label.request_failure"),messageExtra:o.message,retry:()=>c().catch(J())}):i?e.jsx(ge,{}):l.length===0?e.jsx(X,{message:t("library.error.label.empty")}):l.length===1?e.jsxs(e.Fragment,{children:[e.jsx(Z,{mangas:C,message:t(b?"manga.error.label.request_failure":"library.error.label.empty"),messageExtra:b==null?void 0:b.message,isLoading:k,selectedMangaIds:y,isSelectModeActive:x,handleSelection:K,showFilteredOutMessage:!b&&P,retry:b&&z}),W]}):e.jsxs(Ee,{children:[e.jsx(ve,{value:r.order,onChange:(n,f)=>ne(f),tabsCount:l.length,children:l.map(n=>e.jsx(Ce,{sx:{display:"flex"},label:e.jsxs(ee,{children:[n.name,s.showTabSize?e.jsx(te,{label:n.mangas.totalCount}):null]}),value:n.order},n.id))}),l.map(n=>e.jsx(xe,{index:n.order,currentIndex:r.order,children:n===r&&e.jsx(Z,{mangas:C,message:t(b?"manga.error.label.request_failure":"library.error.label.empty"),messageExtra:b==null?void 0:b.message,isLoading:k,selectedMangaIds:y,isSelectModeActive:x,handleSelection:K,showFilteredOutMessage:!b&&P,retry:b&&z})},n.order)),W]})}export{Et as Library};
