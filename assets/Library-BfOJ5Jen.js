import{u as A,o as I,a as B,G as de,j as e,p as S,c as m,f as se,I as ue,q as he,s as me,t as be,h as q,v as ge,N as pe,E as ee,g as fe}from"./index-aRdpybDP.js";import{u as P,S as oe,A as xe,N as Ce}from"./AppbarSearch-B03vuL1W.js";import{T as ye,a as Se}from"./Tabs-KALZnYh7.js";import{d as je}from"./FilterList-Y2-Sc-Ed.js";import{C as R}from"./CheckboxInput-DHYzS8d7.js";import{S as ke,R as O}from"./SortRadioInput-B0M-7_Yg.js";import{T as L}from"./ThreeStateCheckboxInput-BbgrBGOX.js";import{O as _e,S as Te,a as Me}from"./SelectionFAB-fEraxjwG.js";import{T as Le}from"./Trackers-D4pSmk7a.js";import{F as w}from"./TextField-DfS5boU6.js";import{R as we}from"./ListPreference-AzBShjVc.js";import{M as Fe,a as Ae}from"./MangaGrid-DmxvSwmR.js";import{d as Ie,U as Re}from"./UpdateChecker-CLnyK2NU.js";import{u as Ee}from"./useManageMangaLibraryState-BW2WFnvP.js";import{C as ve}from"./Checkbox-DITc9wrS.js";import{e as G}from"./Strings-CWt9sr6N.js";import{T as Ne,a as Oe}from"./TabsMenu-DTpXUE91.js";import{M as De}from"./Mangas-BOW8RIyZ.js";import{C as Be}from"./Chip-CHdcBjyC.js";import"./StyledFab-Bj1Ar6Ir.js";import"./SwitchBase-DFtR10K2.js";import"./index-DsS6TrSK.js";import"./Delete-O6q18e_o.js";import"./Sync-1e-a-E2E.js";import"./SpinnerImage-c3XjFys8.js";import"./TypographyMaxLines-BDCzE731.js";import"./Link-Cs1KyJcr.js";import"./CardContent-D1Dp0n3h.js";import"./Avatar-CJ9wqF4h.js";import"./PlayArrow-DMfA4sks.js";import"./Progress-B4Dh0el9.js";import"./Info-Dj2Lixue.js";import"./InputAdornment-CALBSqkc.js";import"./Collapse-CdRNzg6L.js";import"./NumberSetting-tbcxM65U.js";import"./useMobilePicker-CfXLf0Rz.js";import"./SelectSetting-CCia1R9z.js";import"./Select-BUmRC8yt.js";import"./Chapters-DxvYXbnp.js";const Ge={filter:"global.label.filter",sort:"global.label.sort",display:"global.label.display"},Pe=[["sortToRead","library.option.sort.label.by_unread_chapters"],["sortAlph","library.option.sort.label.alphabetically"],["sortDateAdded","library.option.sort.label.by_date_added"],["sortLastRead","library.option.sort.label.by_last_read"],["sortLatestFetchedChapter","library.option.sort.label.by_latest_fetched_chapter"],["sortLatestUploadedChapter","library.option.sort.label.by_latest_uploaded_chapter"]],Ue=({open:t,onClose:r})=>{var g,x;const{t:a}=A(),{options:s,setOptions:n}=I(),i=B.useGetTrackerList(de),c=Le.getLoggedIn((x=(g=i.data)==null?void 0:g.trackers.nodes)!=null?x:[]),l=(b,o)=>{n(h=>({...h,[b]:o}))};return e.jsx(_e,{open:t,onClose:r,tabs:["filter","sort","display"],tabTitle:b=>a(Ge[b]),tabContent:b=>{if(b==="filter")return e.jsxs(e.Fragment,{children:[e.jsx(L,{label:a("global.filter.label.unread"),checked:s.unread,onChange:o=>l("unread",o)}),e.jsx(L,{label:a("global.filter.label.downloaded"),checked:s.downloaded,onChange:o=>l("downloaded",o)}),e.jsx(L,{label:a("global.filter.label.bookmarked"),checked:s.bookmarked,onChange:o=>l("bookmarked",o)}),e.jsx(L,{label:a("global.filter.label.duplicate_chapters"),checked:s.hasDuplicateChapters,onChange:o=>l("hasDuplicateChapters",o)}),e.jsx(w,{sx:{mt:2},children:a("global.filter.label.tracked")}),c.map(o=>e.jsx(L,{label:o.name,checked:s.tracker[o.id],onChange:h=>l("tracker",{...s.tracker,[o.id]:h})},o.id))]});if(b==="sort")return Pe.map(([o,h])=>e.jsx(ke,{label:a(h),checked:s.sorts===o,sortDescending:s.sortDesc,onClick:()=>o!==s.sorts?l("sorts",o):l("sortDesc",!s.sortDesc)},o));if(b==="display"){const{gridLayout:o,showContinueReadingButton:h,showDownloadBadge:u,showUnreadBadge:_,showTabSize:T}=s;return e.jsxs(e.Fragment,{children:[e.jsx(w,{children:a("global.grid_layout.title")}),e.jsxs(we,{onChange:E=>l("gridLayout",Number(E.target.value)),value:o,children:[e.jsx(O,{label:a("global.grid_layout.label.compact_grid"),value:S.Compact,checked:o==null||o===S.Compact}),e.jsx(O,{label:a("global.grid_layout.label.comfortable_grid"),value:S.Comfortable,checked:o===S.Comfortable}),e.jsx(O,{label:a("global.grid_layout.label.list"),value:S.List,checked:o===S.List})]}),e.jsx(w,{sx:{mt:2},children:a("library.option.display.badge.title")}),e.jsx(R,{label:a("library.option.display.badge.label.unread_badges"),checked:_,onChange:()=>l("showUnreadBadge",!_)}),e.jsx(R,{label:a("library.option.display.badge.label.download_badges"),checked:u,onChange:()=>l("showDownloadBadge",!u)}),e.jsx(w,{sx:{mt:2},children:a("library.option.display.tab.title")}),e.jsx(R,{label:a("library.option.display.tab.label.show_number_of_items"),checked:T,onChange:()=>l("showTabSize",!T)}),e.jsx(w,{sx:{mt:2},children:a("global.label.other")}),e.jsx(R,{label:a("library.option.display.other.label.show_continue_reading_button"),checked:h,onChange:()=>l("showContinueReadingButton",!h)})]})}return null}})},ze=()=>{const{t}=A(),[r,a]=m.useState(!1),{options:s}=I(),n=s.downloaded!=null||s.unread!=null||Object.values(s.tracker).some(i=>i!=null);return e.jsxs(e.Fragment,{children:[e.jsx(se,{title:t("settings.title"),children:e.jsx(ue,{onClick:()=>a(!r),color:n?"warning":"default",children:e.jsx(je,{})})}),e.jsx(Ue,{open:r,onClose:()=>a(!1)})]})},te=({showFilteredOutMessage:t,message:r,messageExtra:a,...s})=>{const{t:n}=A(),[i]=P("query",oe),{options:c}=I(),{unread:l,downloaded:g}=c;return m.useEffect(()=>{window.scrollTo(0,0)},[i,l,g]),m.useLayoutEffect(()=>(document.body.style.overflowY=c.gridLayout===S.List?"auto":"scroll",()=>{document.body.style.overflowY="auto"}),[]),e.jsx(Fe,{...s,hasNextPage:!1,loadMore:()=>{},message:t?n("library.error.label.no_matches"):r,messageExtra:t?void 0:a,gridLayout:c.gridLayout})},Ke=({isActive:t,areAllItemsSelected:r,areNoItemsSelected:a,onSelectAll:s,onModeChange:n})=>{const{t:i}=A();return e.jsxs(e.Fragment,{children:[t&&e.jsx(Te,{areAllItemsSelected:r,areNoItemsSelected:a,onChange:s}),e.jsx(se,{title:i(t?"global.button.cancel":"global.button.select_all"),children:e.jsx(ve,{checkedIcon:e.jsx(Ie,{}),sx:{padding:"8px"},checked:t,onChange:(c,l)=>n(l)})})]})},U=(t,r,a)=>{switch(t){case!0:return r();case!1:return a();default:return!0}},D=(t,r)=>U(t,()=>!!r&&r>=1,()=>r===0),He=(t,r)=>U(t,()=>!!r,()=>!r),k=(t,r)=>{const a=t==null?void 0:t.filter(c=>c!=null),s=r==null?void 0:r.filter(c=>c!=null);if(!(a!=null&&a.length))return!0;const n=a.map(G),i=s.map(G).join(", ");return n.every(c=>i.includes(c))},We=(t,{title:r,genre:a,description:s,artist:n,author:i,source:c})=>k([t],[r])||k(t==null?void 0:t.split(","),a.map(l=>G(l)))||k([t],[s])||k([t],[n])||k([t],[i])||k([t],[c==null?void 0:c.displayName]),Ye=(t,r)=>Object.entries(t).map(([a,s])=>{const n=r.trackRecords.nodes.some(i=>i.trackerId===Number(a));return U(s,()=>n,()=>!n)}).every(a=>a),Ve=(t,{unread:r,downloaded:a,bookmarked:s,hasDuplicateChapters:n,tracker:i})=>D(a,t.downloadCount)&&D(r,t.unreadCount)&&D(s,t.bookmarkCount)&&He(n,t.hasDuplicateChapters)&&Ye(i,t),Qe=(t,r,a)=>{const s=a.ignoreFilters&&(r==null?void 0:r.length);return t.filter(n=>{const i=We(r,n),c=s||Ve(n,a);return i&&c})},F=(t=0,r=0)=>Number(t)-Number(r),$e=(t,r)=>t.localeCompare(r),Je=(t,r,a)=>{const s=[...t];switch(r){case"sortAlph":s.sort((n,i)=>$e(n.title,i.title));break;case"sortDateAdded":s.sort((n,i)=>F(n.inLibraryAt,i.inLibraryAt));break;case"sortToRead":s.sort((n,i)=>F(n.unreadCount,i.unreadCount));break;case"sortLastRead":s.sort((n,i)=>{var c,l;return F((c=n.lastReadChapter)==null?void 0:c.lastReadAt,(l=i.lastReadChapter)==null?void 0:l.lastReadAt)});break;case"sortLatestUploadedChapter":s.sort((n,i)=>{var c,l;return F((c=n.latestUploadedChapter)==null?void 0:c.uploadDate,(l=i.latestUploadedChapter)==null?void 0:l.uploadDate)});break;case"sortLatestFetchedChapter":s.sort((n,i)=>{var c,l;return F((c=n.latestFetchedChapter)==null?void 0:c.fetchedAt,(l=i.latestFetchedChapter)==null?void 0:l.fetchedAt)});break}return a&&s.reverse(),s},Xe=t=>{const[r]=P("query",oe),{options:a}=I(),{unread:s,downloaded:n,bookmarked:i,tracker:c,hasDuplicateChapters:l}=a,{settings:g}=he(),x=m.useMemo(()=>Qe(t,r,{unread:s,downloaded:n,bookmarked:i,hasDuplicateChapters:l,tracker:c,ignoreFilters:g.ignoreFilters}),[t,r,s,n,i,l,c,g.ignoreFilters]),b=m.useMemo(()=>Je(x,a.sorts,a.sortDesc),[x,a.sorts,a.sortDesc]),o=Object.values(a.tracker).some(u=>u!=null),h=(s!=null||n!=null||i!=null||!!r||o)&&x.length===0&&t.length>0;return{visibleMangas:b,showFilteredOutMessage:h}},ae=me("span")({display:"flex",alignItems:"center"}),re=t=>e.jsx(Be,{...t,size:"small",sx:{marginLeft:"5px"}});function Dt(){var X,Z;const{t}=A(),{options:r}=I(),{data:a,error:s,loading:n,refetch:i}=B.useGetCategories(be,{notifyOnNetworkStatusChange:!0}),c=a==null?void 0:a.categories.nodes.filter(d=>d.id!==0||d.id===0&&d.mangas.totalCount),l=c!=null?c:[],g=m.useMemo(()=>l.map(d=>d.mangas.totalCount).reduce((d,p)=>d+p,0),[l]),[x,b]=P("tab",Ce),o=(X=l.find(d=>d.order===x))!=null?X:l[0],{data:h,error:u,loading:_,refetch:T}=B.useGetCategoryMangas(o==null?void 0:o.id,{skip:!o,notifyOnNetworkStatusChange:!0}),E=(Z=h==null?void 0:h.mangas.nodes)!=null?Z:[],{visibleMangas:f,showFilteredOutMessage:z}=Xe(E),K=m.useCallback(()=>T().catch(q()),[T,o]),le=m.useMemo(()=>f.map(d=>d.id),[f]),[C,v]=m.useState(!1),{areNoItemsForKeySelected:H,areAllItemsForKeySelected:W,selectedItemIds:y,handleSelectAll:N,handleSelection:ne,clearSelection:ie}=Ee(f.length,{itemIds:le,currentKey:o==null?void 0:o.id.toString()}),Y=(d,p,j)=>{v(!!(y.length+(p?1:-1))),ne(d,p,j)},V=m.useMemo(()=>y.map(d=>De.getFromCache(d,ge,"MANGA_CHAPTER_STAT_FIELDS")).filter(d=>!!d),[y.length,f]),Q=m.useMemo(()=>C?e.jsx(Me,{selectedItemsCount:y.length,title:"manga.title",children:(d,p)=>e.jsx(Ae,{selectedMangas:V,onClose:()=>{d(),v(!1),ie()},setHideMenu:p})}):null,[C,V]),{setTitle:$,setAction:J}=m.useContext(pe);m.useEffect(()=>{const d=t("library.title"),p=e.jsxs(ae,{children:[d,r.showTabSize&&e.jsx(re,{label:g})]});return $(p,d),J(e.jsxs(e.Fragment,{children:[!C&&e.jsxs(e.Fragment,{children:[e.jsx(xe,{}),e.jsx(ze,{}),e.jsx(Re,{categoryId:o==null?void 0:o.id})]}),e.jsx(Ke,{isActive:C,areAllItemsSelected:W,areNoItemsSelected:H,onSelectAll:j=>N(j,[...new Set(f.map(M=>M.id))]),onModeChange:j=>{v(j),j?N(!0,[...new Set(f.map(M=>M.id))]):l.forEach(M=>N(!1,[],M.id.toString()))}})]})),()=>{$(""),J(null)}},[t,g,n,r,C,H,W,y.length,f.length,o]);const ce=d=>{b(d)};return s!=null?e.jsx(ee,{message:t("category.error.label.request_failure"),messageExtra:s.message,retry:()=>i().catch(q())}):n?e.jsx(fe,{}):l.length===0?e.jsx(ee,{message:t("library.error.label.empty")}):l.length===1?e.jsxs(e.Fragment,{children:[e.jsx(te,{mangas:f,message:t(u?"manga.error.label.request_failure":"library.error.label.empty"),messageExtra:u==null?void 0:u.message,isLoading:_,selectedMangaIds:y,isSelectModeActive:C,handleSelection:Y,showFilteredOutMessage:!u&&z,retry:u&&K}),Q]}):e.jsxs(Ne,{children:[e.jsx(Oe,{value:o.order,onChange:(d,p)=>ce(p),tabsCount:l.length,children:l.map(d=>e.jsx(ye,{sx:{display:"flex"},label:e.jsxs(ae,{children:[d.name,r.showTabSize?e.jsx(re,{label:d.mangas.totalCount}):null]}),value:d.order},d.id))}),l.map(d=>e.jsx(Se,{index:d.order,currentIndex:o.order,children:d===o&&e.jsx(te,{mangas:f,message:t(u?"manga.error.label.request_failure":"library.error.label.empty"),messageExtra:u==null?void 0:u.message,isLoading:_,selectedMangaIds:y,isSelectModeActive:C,handleSelection:Y,showFilteredOutMessage:!u&&z,retry:u&&K})},d.order)),Q]})}export{Dt as Library};
