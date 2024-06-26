import{u as F,n as A,a as T,j as e,G as j,c as h,f as te,I as de,o as ce,s as ue,h as $,P as me,N as ge,E as J,g as be}from"./index-DfBuIO9L.js";import{u as B,S as ae,A as he,N as pe}from"./AppbarSearch-A9trfP_O.js";import{T as fe,a as xe}from"./Tabs-B_OqexVG.js";import{d as ye}from"./FilterList-BTt1gxTp.js";import{C as I}from"./CheckboxInput-B1TLArug.js";import{S as Ce,R as E}from"./SortRadioInput-BfI9hd2g.js";import{T as v}from"./ThreeStateCheckboxInput-Dhz3m5HS.js";import{O as je,S as Se,a as ke}from"./SelectionFAB-DnwxzK_w.js";import{T as re}from"./Trackers-y2kGZe-r.js";import{F as _}from"./TextField-Crw1y3Ix.js";import{R as Le}from"./ListPreference-hcYggMjk.js";import{M as we,a as _e}from"./MangaGrid-BP3tMGK7.js";import{d as Me,U as Te}from"./UpdateChecker-9m-jB1Lo.js";import{u as Fe}from"./useManageMangaLibraryState-DdPIApsS.js";import{C as Ae}from"./Checkbox-DrsGYsRp.js";import{T as Ie,a as ve}from"./TabsMenu-9q9dF9rP.js";import{C as Ne}from"./Chip-CWBFb9bn.js";import"./StyledFab-DLBwrsRn.js";import"./SwitchBase-miZdTjdG.js";import"./index-G7-_ctUm.js";import"./Delete-BbgDr3ls.js";import"./Sync-DPT0yh7A.js";import"./Mangas-B3OVvTz3.js";import"./Chapters-BxIe5cMO.js";import"./SpinnerImage-CaUvTm_b.js";import"./TypographyMaxLines-oVEHFE6N.js";import"./Link-B1yr3aoJ.js";import"./Avatar-Dk897tog.js";import"./PlayArrow-UlDove7k.js";import"./Progress-K6h6TQhm.js";import"./Info-CzS2RLVV.js";import"./InputAdornment-l2OmGp6f.js";import"./Collapse-MYtikCd6.js";import"./NumberSetting-BWxo6oce.js";import"./useMobilePicker-XdJ88e_P.js";import"./SelectSetting-sEtG3Uyg.js";import"./Select-DiIJDcsh.js";const Re={filter:"global.label.filter",sort:"global.label.sort",display:"global.label.display"},Oe=[["sortToRead","library.option.sort.label.by_unread_chapters"],["sortAlph","library.option.sort.label.alphabetically"],["sortDateAdded","library.option.sort.label.by_date_added"],["sortLastRead","library.option.sort.label.by_last_read"],["sortLatestFetchedChapter","library.option.sort.label.by_latest_fetched_chapter"],["sortLatestUploadedChapter","library.option.sort.label.by_latest_uploaded_chapter"]],Ee=({open:a,onClose:l})=>{var g,x;const{t}=F(),{options:s,setOptions:i}=A(),d=T.useGetTrackerList(),c=re.getLoggedIn((x=(g=d.data)==null?void 0:g.trackers.nodes)!=null?x:[]),r=(b,o)=>{i(m=>({...m,[b]:o}))};return e.jsx(je,{open:a,onClose:l,tabs:["filter","sort","display"],tabTitle:b=>t(Re[b]),tabContent:b=>{if(b==="filter")return e.jsxs(e.Fragment,{children:[e.jsx(v,{label:t("global.filter.label.unread"),checked:s.unread,onChange:o=>r("unread",o)}),e.jsx(v,{label:t("global.filter.label.downloaded"),checked:s.downloaded,onChange:o=>r("downloaded",o)}),e.jsx(v,{label:t("global.filter.label.bookmarked"),checked:s.bookmarked,onChange:o=>r("bookmarked",o)}),e.jsx(_,{sx:{mt:2},children:t("global.filter.label.tracked")}),c.map(o=>e.jsx(v,{label:o.name,checked:s.tracker[o.id],onChange:m=>r("tracker",{...s.tracker,[o.id]:m})},o.id))]});if(b==="sort")return Oe.map(([o,m])=>e.jsx(Ce,{label:t(m),checked:s.sorts===o,sortDescending:s.sortDesc,onClick:()=>o!==s.sorts?r("sorts",o):r("sortDesc",!s.sortDesc)},o));if(b==="display"){const{gridLayout:o,showContinueReadingButton:m,showDownloadBadge:u,showUnreadBadge:k,showTabSize:L}=s;return e.jsxs(e.Fragment,{children:[e.jsx(_,{children:t("global.grid_layout.title")}),e.jsxs(Le,{onChange:N=>r("gridLayout",Number(N.target.value)),value:o,children:[e.jsx(E,{label:t("global.grid_layout.label.compact_grid"),value:j.Compact,checked:o==null||o===j.Compact}),e.jsx(E,{label:t("global.grid_layout.label.comfortable_grid"),value:j.Comfortable,checked:o===j.Comfortable}),e.jsx(E,{label:t("global.grid_layout.label.list"),value:j.List,checked:o===j.List})]}),e.jsx(_,{sx:{mt:2},children:t("library.option.display.badge.title")}),e.jsx(I,{label:t("library.option.display.badge.label.unread_badges"),checked:k,onChange:()=>r("showUnreadBadge",!k)}),e.jsx(I,{label:t("library.option.display.badge.label.download_badges"),checked:u,onChange:()=>r("showDownloadBadge",!u)}),e.jsx(_,{sx:{mt:2},children:t("library.option.display.tab.title")}),e.jsx(I,{label:t("library.option.display.tab.label.show_number_of_items"),checked:L,onChange:()=>r("showTabSize",!L)}),e.jsx(_,{sx:{mt:2},children:t("global.label.other")}),e.jsx(I,{label:t("library.option.display.other.label.show_continue_reading_button"),checked:m,onChange:()=>r("showContinueReadingButton",!m)})]})}return null}})},Pe=()=>{const{t:a}=F(),[l,t]=h.useState(!1),{options:s}=A(),i=s.downloaded!=null||s.unread!=null||Object.values(s.tracker).some(d=>d!=null);return e.jsxs(e.Fragment,{children:[e.jsx(te,{title:a("settings.title"),children:e.jsx(de,{onClick:()=>t(!l),color:i?"warning":"default",children:e.jsx(ye,{})})}),e.jsx(Ee,{open:l,onClose:()=>t(!1)})]})},X=({showFilteredOutMessage:a,message:l,messageExtra:t,...s})=>{const{t:i}=F(),[d]=B("query",ae),{options:c}=A(),{unread:r,downloaded:g}=c;return h.useEffect(()=>{window.scrollTo(0,0)},[d,r,g]),h.useLayoutEffect(()=>(document.body.style.overflowY=c.gridLayout===j.List?"auto":"scroll",()=>{document.body.style.overflowY="auto"}),[]),e.jsx(we,{...s,hasNextPage:!1,loadMore:()=>{},message:a?i("library.error.label.no_matches"):l,messageExtra:a?void 0:t,gridLayout:c.gridLayout})},Be=({isActive:a,areAllItemsSelected:l,areNoItemsSelected:t,onSelectAll:s,onModeChange:i})=>{const{t:d}=F();return e.jsxs(e.Fragment,{children:[a&&e.jsx(Se,{areAllItemsSelected:l,areNoItemsSelected:t,onChange:s}),e.jsx(te,{title:d(a?"global.button.cancel":"global.button.select_all"),children:e.jsx(Ae,{checkedIcon:e.jsx(Me,{}),sx:{padding:"8px"},checked:a,onChange:(c,r)=>i(r)})})]})},se=(a,l,t)=>{switch(a){case!0:return l();case!1:return t();default:return!0}},P=(a,l)=>se(a,()=>!!l&&l>=1,()=>l===0),De=(a,{title:l})=>a?l.toLowerCase().includes(a.toLowerCase()):!0,Ge=(a,{genre:l})=>a?a.split(",").map(s=>s.toLowerCase().trim()).every(s=>l.map(i=>i.toLowerCase()).includes(s)):!0,ze=(a,l)=>Object.entries(a).map(([t,s])=>{const d=re.getTrackers(l.trackRecords.nodes).some(c=>c.id===Number(t));return se(s,()=>d,()=>!d)}).every(t=>t),Ue=(a,l,t,s,i,d,c)=>a.filter(r=>{const g=c&&(l==null?void 0:l.length),x=De(l,r)||Ge(l,r),b=g||P(s,r.downloadCount)&&P(t,r.unreadCount)&&P(i,r.bookmarkCount)&&ze(d,r);return x&&b}),M=(a=0,l=0)=>Number(a)-Number(l),qe=(a,l)=>a.localeCompare(l),Ke=(a,l,t)=>{const s=[...a];switch(l){case"sortAlph":s.sort((i,d)=>qe(i.title,d.title));break;case"sortDateAdded":s.sort((i,d)=>M(i.inLibraryAt,d.inLibraryAt));break;case"sortToRead":s.sort((i,d)=>M(i.unreadCount,d.unreadCount));break;case"sortLastRead":s.sort((i,d)=>{var c,r;return M((c=i.lastReadChapter)==null?void 0:c.lastReadAt,(r=d.lastReadChapter)==null?void 0:r.lastReadAt)});break;case"sortLatestUploadedChapter":s.sort((i,d)=>{var c,r;return M((c=i.latestUploadedChapter)==null?void 0:c.uploadDate,(r=d.latestUploadedChapter)==null?void 0:r.uploadDate)});break;case"sortLatestFetchedChapter":s.sort((i,d)=>{var c,r;return M((c=i.latestFetchedChapter)==null?void 0:c.fetchedAt,(r=d.latestFetchedChapter)==null?void 0:r.fetchedAt)});break}return t&&s.reverse(),s},Qe=a=>{const[l]=B("query",ae),{options:t}=A(),{unread:s,downloaded:i,bookmarked:d,tracker:c}=t,{settings:r}=ce(),g=h.useMemo(()=>Ue(a,l,s,i,d,c,r.ignoreFilters),[a,l,s,i,d,c,r.ignoreFilters]),x=h.useMemo(()=>Ke(g,t.sorts,t.sortDesc),[g,t.sorts,t.sortDesc]),b=Object.values(t.tracker).some(m=>m!=null),o=(s!=null||i!=null||d!=null||!!l||b)&&g.length===0&&a.length>0;return{visibleMangas:x,showFilteredOutMessage:o}},Z=ue("span")({display:"flex",alignItems:"center"}),ee=a=>e.jsx(Ne,{...a,size:"small",sx:{marginLeft:"5px"}});function Ft(){var Y,H;const{t:a}=F(),{options:l}=A(),{data:t,error:s,loading:i,refetch:d}=T.useGetCategories({notifyOnNetworkStatusChange:!0}),c=t==null?void 0:t.categories.nodes.filter(n=>n.id!==0||n.id===0&&n.mangas.totalCount),r=c!=null?c:[],g=h.useMemo(()=>r.map(n=>n.mangas.totalCount).reduce((n,p)=>n+p,0),[r]),[x,b]=B("tab",pe),o=(Y=r.find(n=>n.order===x))!=null?Y:r[0],{data:m,error:u,loading:k,refetch:L}=T.useGetCategoryMangas(o==null?void 0:o.id,{skip:!o,notifyOnNetworkStatusChange:!0}),N=(H=m==null?void 0:m.mangas.nodes)!=null?H:[],{visibleMangas:f,showFilteredOutMessage:D}=Qe(N),G=h.useCallback(()=>L().catch($()),[L,o]),oe=h.useMemo(()=>f.map(n=>n.id),[f]),[y,R]=h.useState(!1),{areNoItemsForKeySelected:z,areAllItemsForKeySelected:U,selectedItemIds:C,handleSelectAll:O,handleSelection:le,clearSelection:ne}=Fe(f.length,{itemIds:oe,currentKey:o==null?void 0:o.id.toString()}),q=(n,p,S)=>{R(!!(C.length+(p?1:-1))),le(n,p,S)},K=h.useMemo(()=>C.map(n=>T.graphQLClient.client.cache.readFragment({id:T.graphQLClient.client.cache.identify({__typename:"MangaType",id:n}),fragment:me,fragmentName:"PARTIAL_MANGA_FIELDS"})),[C.length,f]),Q=h.useMemo(()=>y?e.jsx(ke,{selectedItemsCount:C.length,title:"manga.title",children:(n,p)=>e.jsx(_e,{selectedMangas:K,onClose:()=>{n(),R(!1),ne()},setHideMenu:p})}):null,[y,K]),{setTitle:W,setAction:V}=h.useContext(ge);h.useEffect(()=>{const n=a("library.title"),p=e.jsxs(Z,{children:[n,l.showTabSize&&e.jsx(ee,{label:g})]});return W(p,n),V(e.jsxs(e.Fragment,{children:[!y&&e.jsxs(e.Fragment,{children:[e.jsx(he,{}),e.jsx(Pe,{}),e.jsx(Te,{categoryId:o==null?void 0:o.id})]}),e.jsx(Be,{isActive:y,areAllItemsSelected:U,areNoItemsSelected:z,onSelectAll:S=>O(S,[...new Set(f.map(w=>w.id))]),onModeChange:S=>{R(S),S?O(!0,[...new Set(f.map(w=>w.id))]):r.forEach(w=>O(!1,[],w.id.toString()))}})]})),()=>{W(""),V(null)}},[a,g,i,l,y,z,U,C.length,f.length,o]);const ie=n=>{b(n)};return s!=null?e.jsx(J,{message:a("category.error.label.request_failure"),messageExtra:s.message,retry:()=>d().catch($())}):i?e.jsx(be,{}):r.length===0?e.jsx(J,{message:a("library.error.label.empty")}):r.length===1?e.jsxs(e.Fragment,{children:[e.jsx(X,{mangas:f,message:a(u?"manga.error.label.request_failure":"library.error.label.empty"),messageExtra:u==null?void 0:u.message,isLoading:k,selectedMangaIds:C,isSelectModeActive:y,handleSelection:q,showFilteredOutMessage:!u&&D,retry:u&&G}),Q]}):e.jsxs(Ie,{children:[e.jsx(ve,{value:o.order,onChange:(n,p)=>ie(p),tabsCount:r.length,children:r.map(n=>e.jsx(fe,{sx:{display:"flex"},label:e.jsxs(Z,{children:[n.name,l.showTabSize?e.jsx(ee,{label:n.mangas.totalCount}):null]}),value:n.order},n.id))}),r.map(n=>e.jsx(xe,{index:n.order,currentIndex:o.order,children:n===o&&e.jsx(X,{mangas:f,message:a(u?"manga.error.label.request_failure":"library.error.label.empty"),messageExtra:u==null?void 0:u.message,isLoading:k,selectedMangaIds:C,isSelectModeActive:y,handleSelection:q,showFilteredOutMessage:!u&&D,retry:u&&G})},n.order)),Q]})}export{Ft as Library};
