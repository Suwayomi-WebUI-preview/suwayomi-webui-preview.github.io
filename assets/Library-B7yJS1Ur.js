import{u as M,n as A,a as G,G as ie,j as e,o as S,c as h,f as te,I as de,p as ce,s as ue,q as be,h as $,t as me,N as ge,E as J,g as he}from"./index-DUjAQRrY.js";import{u as B,S as ae,A as pe,N as fe}from"./AppbarSearch-CiXv5Ci_.js";import{T as xe,a as Ce}from"./Tabs-U6bIxYV_.js";import{d as ye}from"./FilterList-D1imri7k.js";import{C as F}from"./CheckboxInput-DbmwjMWz.js";import{S as Se,R as N}from"./SortRadioInput-CPpqdveD.js";import{T as I}from"./ThreeStateCheckboxInput-brauF-wu.js";import{O as je,S as ke,a as Te}from"./SelectionFAB-C2zjWFwR.js";import{T as _e}from"./Trackers-D4pSmk7a.js";import{F as L}from"./TextField-DKipAuXv.js";import{R as Le}from"./ListPreference-C4WCxO6Q.js";import{M as we,a as Me}from"./MangaGrid-CotG5QQf.js";import{d as Ae,U as Fe}from"./UpdateChecker-BuqhNxqx.js";import{u as Ie}from"./useManageMangaLibraryState-BXTNkZCn.js";import{C as Re}from"./Checkbox-DFgtu5-F.js";import{T as Ee,a as ve}from"./TabsMenu-CSRndpxb.js";import{M as Ne}from"./Mangas-Bim3x2l-.js";import{C as Oe}from"./Chip-DTZPKbej.js";import"./StyledFab-Dh0hOvbp.js";import"./SwitchBase-D_MNPrjx.js";import"./index-BNqJm-x8.js";import"./Delete-LG6ztto4.js";import"./Sync-CQWUCWaR.js";import"./SpinnerImage-Cxhh8Fbn.js";import"./TypographyMaxLines-B_8XvgzD.js";import"./Link-D0biBbd8.js";import"./Avatar-050Z0ab-.js";import"./PlayArrow-Du9h7dzu.js";import"./Progress-Bb2RGncH.js";import"./Info-B8LFsl9T.js";import"./InputAdornment-DpFtP99e.js";import"./Collapse-WVnVXI5x.js";import"./NumberSetting-Bck_MzZM.js";import"./useMobilePicker-LfSDzYlp.js";import"./SelectSetting-Bt17QAYT.js";import"./Select-V1jjceNI.js";import"./Chapters-C1zX7iUp.js";const Ge={filter:"global.label.filter",sort:"global.label.sort",display:"global.label.display"},Be=[["sortToRead","library.option.sort.label.by_unread_chapters"],["sortAlph","library.option.sort.label.alphabetically"],["sortDateAdded","library.option.sort.label.by_date_added"],["sortLastRead","library.option.sort.label.by_last_read"],["sortLatestFetchedChapter","library.option.sort.label.by_latest_fetched_chapter"],["sortLatestUploadedChapter","library.option.sort.label.by_latest_uploaded_chapter"]],De=({open:a,onClose:l})=>{var m,x;const{t}=M(),{options:s,setOptions:i}=A(),d=G.useGetTrackerList(ie),c=_e.getLoggedIn((x=(m=d.data)==null?void 0:m.trackers.nodes)!=null?x:[]),r=(g,o)=>{i(b=>({...b,[g]:o}))};return e.jsx(je,{open:a,onClose:l,tabs:["filter","sort","display"],tabTitle:g=>t(Ge[g]),tabContent:g=>{if(g==="filter")return e.jsxs(e.Fragment,{children:[e.jsx(I,{label:t("global.filter.label.unread"),checked:s.unread,onChange:o=>r("unread",o)}),e.jsx(I,{label:t("global.filter.label.downloaded"),checked:s.downloaded,onChange:o=>r("downloaded",o)}),e.jsx(I,{label:t("global.filter.label.bookmarked"),checked:s.bookmarked,onChange:o=>r("bookmarked",o)}),e.jsx(L,{sx:{mt:2},children:t("global.filter.label.tracked")}),c.map(o=>e.jsx(I,{label:o.name,checked:s.tracker[o.id],onChange:b=>r("tracker",{...s.tracker,[o.id]:b})},o.id))]});if(g==="sort")return Be.map(([o,b])=>e.jsx(Se,{label:t(b),checked:s.sorts===o,sortDescending:s.sortDesc,onClick:()=>o!==s.sorts?r("sorts",o):r("sortDesc",!s.sortDesc)},o));if(g==="display"){const{gridLayout:o,showContinueReadingButton:b,showDownloadBadge:u,showUnreadBadge:k,showTabSize:T}=s;return e.jsxs(e.Fragment,{children:[e.jsx(L,{children:t("global.grid_layout.title")}),e.jsxs(Le,{onChange:R=>r("gridLayout",Number(R.target.value)),value:o,children:[e.jsx(N,{label:t("global.grid_layout.label.compact_grid"),value:S.Compact,checked:o==null||o===S.Compact}),e.jsx(N,{label:t("global.grid_layout.label.comfortable_grid"),value:S.Comfortable,checked:o===S.Comfortable}),e.jsx(N,{label:t("global.grid_layout.label.list"),value:S.List,checked:o===S.List})]}),e.jsx(L,{sx:{mt:2},children:t("library.option.display.badge.title")}),e.jsx(F,{label:t("library.option.display.badge.label.unread_badges"),checked:k,onChange:()=>r("showUnreadBadge",!k)}),e.jsx(F,{label:t("library.option.display.badge.label.download_badges"),checked:u,onChange:()=>r("showDownloadBadge",!u)}),e.jsx(L,{sx:{mt:2},children:t("library.option.display.tab.title")}),e.jsx(F,{label:t("library.option.display.tab.label.show_number_of_items"),checked:T,onChange:()=>r("showTabSize",!T)}),e.jsx(L,{sx:{mt:2},children:t("global.label.other")}),e.jsx(F,{label:t("library.option.display.other.label.show_continue_reading_button"),checked:b,onChange:()=>r("showContinueReadingButton",!b)})]})}return null}})},Pe=()=>{const{t:a}=M(),[l,t]=h.useState(!1),{options:s}=A(),i=s.downloaded!=null||s.unread!=null||Object.values(s.tracker).some(d=>d!=null);return e.jsxs(e.Fragment,{children:[e.jsx(te,{title:a("settings.title"),children:e.jsx(de,{onClick:()=>t(!l),color:i?"warning":"default",children:e.jsx(ye,{})})}),e.jsx(De,{open:l,onClose:()=>t(!1)})]})},X=({showFilteredOutMessage:a,message:l,messageExtra:t,...s})=>{const{t:i}=M(),[d]=B("query",ae),{options:c}=A(),{unread:r,downloaded:m}=c;return h.useEffect(()=>{window.scrollTo(0,0)},[d,r,m]),h.useLayoutEffect(()=>(document.body.style.overflowY=c.gridLayout===S.List?"auto":"scroll",()=>{document.body.style.overflowY="auto"}),[]),e.jsx(we,{...s,hasNextPage:!1,loadMore:()=>{},message:a?i("library.error.label.no_matches"):l,messageExtra:a?void 0:t,gridLayout:c.gridLayout})},ze=({isActive:a,areAllItemsSelected:l,areNoItemsSelected:t,onSelectAll:s,onModeChange:i})=>{const{t:d}=M();return e.jsxs(e.Fragment,{children:[a&&e.jsx(ke,{areAllItemsSelected:l,areNoItemsSelected:t,onChange:s}),e.jsx(te,{title:d(a?"global.button.cancel":"global.button.select_all"),children:e.jsx(Re,{checkedIcon:e.jsx(Ae,{}),sx:{padding:"8px"},checked:a,onChange:(c,r)=>i(r)})})]})},re=(a,l,t)=>{switch(a){case!0:return l();case!1:return t();default:return!0}},O=(a,l)=>re(a,()=>!!l&&l>=1,()=>l===0),Ue=(a,{title:l})=>a?l.toLowerCase().includes(a.toLowerCase()):!0,qe=(a,{genre:l})=>a?a.split(",").map(s=>s.toLowerCase().trim()).every(s=>l.map(i=>i.toLowerCase()).includes(s)):!0,Ke=(a,l)=>Object.entries(a).map(([t,s])=>{const i=l.trackRecords.nodes.some(d=>d.trackerId===Number(t));return re(s,()=>i,()=>!i)}).every(t=>t),He=(a,l,t,s,i,d,c)=>a.filter(r=>{const m=c&&(l==null?void 0:l.length),x=Ue(l,r)||qe(l,r),g=m||O(s,r.downloadCount)&&O(t,r.unreadCount)&&O(i,r.bookmarkCount)&&Ke(d,r);return x&&g}),w=(a=0,l=0)=>Number(a)-Number(l),We=(a,l)=>a.localeCompare(l),Ye=(a,l,t)=>{const s=[...a];switch(l){case"sortAlph":s.sort((i,d)=>We(i.title,d.title));break;case"sortDateAdded":s.sort((i,d)=>w(i.inLibraryAt,d.inLibraryAt));break;case"sortToRead":s.sort((i,d)=>w(i.unreadCount,d.unreadCount));break;case"sortLastRead":s.sort((i,d)=>{var c,r;return w((c=i.lastReadChapter)==null?void 0:c.lastReadAt,(r=d.lastReadChapter)==null?void 0:r.lastReadAt)});break;case"sortLatestUploadedChapter":s.sort((i,d)=>{var c,r;return w((c=i.latestUploadedChapter)==null?void 0:c.uploadDate,(r=d.latestUploadedChapter)==null?void 0:r.uploadDate)});break;case"sortLatestFetchedChapter":s.sort((i,d)=>{var c,r;return w((c=i.latestFetchedChapter)==null?void 0:c.fetchedAt,(r=d.latestFetchedChapter)==null?void 0:r.fetchedAt)});break}return t&&s.reverse(),s},Ve=a=>{const[l]=B("query",ae),{options:t}=A(),{unread:s,downloaded:i,bookmarked:d,tracker:c}=t,{settings:r}=ce(),m=h.useMemo(()=>He(a,l,s,i,d,c,r.ignoreFilters),[a,l,s,i,d,c,r.ignoreFilters]),x=h.useMemo(()=>Ye(m,t.sorts,t.sortDesc),[m,t.sorts,t.sortDesc]),g=Object.values(t.tracker).some(b=>b!=null),o=(s!=null||i!=null||d!=null||!!l||g)&&m.length===0&&a.length>0;return{visibleMangas:x,showFilteredOutMessage:o}},Z=ue("span")({display:"flex",alignItems:"center"}),ee=a=>e.jsx(Oe,{...a,size:"small",sx:{marginLeft:"5px"}});function Rt(){var V,Q;const{t:a}=M(),{options:l}=A(),{data:t,error:s,loading:i,refetch:d}=G.useGetCategories(be,{notifyOnNetworkStatusChange:!0}),c=t==null?void 0:t.categories.nodes.filter(n=>n.id!==0||n.id===0&&n.mangas.totalCount),r=c!=null?c:[],m=h.useMemo(()=>r.map(n=>n.mangas.totalCount).reduce((n,p)=>n+p,0),[r]),[x,g]=B("tab",fe),o=(V=r.find(n=>n.order===x))!=null?V:r[0],{data:b,error:u,loading:k,refetch:T}=G.useGetCategoryMangas(o==null?void 0:o.id,{skip:!o,notifyOnNetworkStatusChange:!0}),R=(Q=b==null?void 0:b.mangas.nodes)!=null?Q:[],{visibleMangas:f,showFilteredOutMessage:D}=Ve(R),P=h.useCallback(()=>T().catch($()),[T,o]),se=h.useMemo(()=>f.map(n=>n.id),[f]),[C,E]=h.useState(!1),{areNoItemsForKeySelected:z,areAllItemsForKeySelected:U,selectedItemIds:y,handleSelectAll:v,handleSelection:oe,clearSelection:le}=Ie(f.length,{itemIds:se,currentKey:o==null?void 0:o.id.toString()}),q=(n,p,j)=>{E(!!(y.length+(p?1:-1))),oe(n,p,j)},K=h.useMemo(()=>y.map(n=>Ne.getFromCache(n,me,"MANGA_CHAPTER_STAT_FIELDS")).filter(n=>!!n),[y.length,f]),H=h.useMemo(()=>C?e.jsx(Te,{selectedItemsCount:y.length,title:"manga.title",children:(n,p)=>e.jsx(Me,{selectedMangas:K,onClose:()=>{n(),E(!1),le()},setHideMenu:p})}):null,[C,K]),{setTitle:W,setAction:Y}=h.useContext(ge);h.useEffect(()=>{const n=a("library.title"),p=e.jsxs(Z,{children:[n,l.showTabSize&&e.jsx(ee,{label:m})]});return W(p,n),Y(e.jsxs(e.Fragment,{children:[!C&&e.jsxs(e.Fragment,{children:[e.jsx(pe,{}),e.jsx(Pe,{}),e.jsx(Fe,{categoryId:o==null?void 0:o.id})]}),e.jsx(ze,{isActive:C,areAllItemsSelected:U,areNoItemsSelected:z,onSelectAll:j=>v(j,[...new Set(f.map(_=>_.id))]),onModeChange:j=>{E(j),j?v(!0,[...new Set(f.map(_=>_.id))]):r.forEach(_=>v(!1,[],_.id.toString()))}})]})),()=>{W(""),Y(null)}},[a,m,i,l,C,z,U,y.length,f.length,o]);const ne=n=>{g(n)};return s!=null?e.jsx(J,{message:a("category.error.label.request_failure"),messageExtra:s.message,retry:()=>d().catch($())}):i?e.jsx(he,{}):r.length===0?e.jsx(J,{message:a("library.error.label.empty")}):r.length===1?e.jsxs(e.Fragment,{children:[e.jsx(X,{mangas:f,message:a(u?"manga.error.label.request_failure":"library.error.label.empty"),messageExtra:u==null?void 0:u.message,isLoading:k,selectedMangaIds:y,isSelectModeActive:C,handleSelection:q,showFilteredOutMessage:!u&&D,retry:u&&P}),H]}):e.jsxs(Ee,{children:[e.jsx(ve,{value:o.order,onChange:(n,p)=>ne(p),tabsCount:r.length,children:r.map(n=>e.jsx(xe,{sx:{display:"flex"},label:e.jsxs(Z,{children:[n.name,l.showTabSize?e.jsx(ee,{label:n.mangas.totalCount}):null]}),value:n.order},n.id))}),r.map(n=>e.jsx(Ce,{index:n.order,currentIndex:o.order,children:n===o&&e.jsx(X,{mangas:f,message:a(u?"manga.error.label.request_failure":"library.error.label.empty"),messageExtra:u==null?void 0:u.message,isLoading:k,selectedMangaIds:y,isSelectModeActive:C,handleSelection:q,showFilteredOutMessage:!u&&D,retry:u&&P})},n.order)),H]})}export{Rt as Library};