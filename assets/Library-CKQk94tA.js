import{u as B,c as O,Q as xe,R as de,q as P,j as t,U as T,W as ye,X as j,Y as R,Z as Se,y as je,n as le,f as u,_ as z,k as he,I as _e,$ as ke,a0 as U,a1 as Te,a2 as Me,a3 as Ae,a4 as Le,m as D,a5 as Fe,N as we,E as oe,l as Be,D as Ie,F as Re,G as Oe}from"./index-DCoLbMjA.js";import{u as ge,S as ve,A as Ee,N as De}from"./AppbarSearch-bx4hg7HF.js";import{d as Ne}from"./FilterList-BXWTuWxs.js";import{S as Ge,R as N}from"./SortRadioInput-DkJUs2V2.js";import{T as M}from"./ThreeStateCheckboxInput-CoHTgacU.js";import{O as Ue,S as Pe,a as ze}from"./SelectionFAB-B-ax5NYv.js";import{T as We}from"./Trackers-D4pSmk7a.js";import{s as Ye,M as Ke}from"./Mangas-84PL_wCn.js";import{R as He}from"./ListPreference-BRnS4Htz.js";import{M as Ve,a as Qe}from"./MangaGrid-DWtTlglS.js";import{d as $e,U as Xe}from"./UpdateChecker-DcuqYA-D.js";import{u as Ze}from"./useManageMangaLibraryState-DfSxDNBs.js";import{T as Je}from"./TabsWrapper-BTiNnNop.js";import{C as qe}from"./Chip-EZ8XQtIK.js";import"./StyledFab-BbuLVg5P.js";import"./Sync-OBE7YvKv.js";import"./Avatar-CzKt1jfC.js";import"./PlayArrow-ZodPhP1O.js";import"./Progress-DwqagYLm.js";import"./Info-CL9iu5FT.js";import"./TextField-Dg_LCFzJ.js";import"./InputAdornment-BDJd29ry.js";import"./CheckCircle-xkArV1s8.js";import"./NumberSetting-D9FD9iaj.js";import"./useMobilePicker-C0KZ8XB1.js";import"./SelectSetting-DDMcW39h.js";const et={filter:"global.label.filter",sort:"global.label.sort",display:"global.label.display"},tt=[["unreadChapters","library.option.sort.label.by_unread_chapters"],["totalChapters","library.option.sort.label.by_total_chapters"],["alphabetically","library.option.sort.label.alphabetically"],["dateAdded","library.option.sort.label.by_date_added"],["lastRead","library.option.sort.label.by_last_read"],["latestFetchedChapter","library.option.sort.label.by_latest_fetched_chapter"],["latestUploadedChapter","library.option.sort.label.by_latest_uploaded_chapter"]],at=({category:a,open:r,onClose:i})=>{var f,C;const{t:e}=B(),o=O.useGetTrackerList(xe),n=We.getLoggedIn((C=(f=o.data)==null?void 0:f.trackers.nodes)!=null?C:[]),l=de(a),c=Se(a,()=>le(e("global.error.label.failed_to_save_changes","error"))),{settings:{showTabSize:p}}=P(),_=je(()=>le(e("search.error.label.failed_to_save_settings"),"warning"));return t.jsx(Ue,{open:r,onClose:i,tabs:["filter","sort","display"],tabTitle:b=>e(et[b]),tabContent:b=>{if(b==="filter")return t.jsxs(t.Fragment,{children:[t.jsx(M,{label:e("global.filter.label.unread"),checked:l.hasUnreadChapters,onChange:s=>c("hasUnreadChapters",s)}),t.jsx(M,{label:e("global.filter.label.downloaded"),checked:l.hasDownloadedChapters,onChange:s=>c("hasDownloadedChapters",s)}),t.jsx(M,{label:e("global.filter.label.bookmarked"),checked:l.hasBookmarkedChapters,onChange:s=>c("hasBookmarkedChapters",s)}),t.jsx(M,{label:e("global.filter.label.duplicate_chapters"),checked:l.hasDuplicateChapters,onChange:s=>c("hasDuplicateChapters",s)}),t.jsx(T,{sx:{mt:2},children:e("manga.label.status")}),Object.values(ye).map(s=>t.jsx(M,{label:e(Ye[s]),checked:l.hasStatus[s],onChange:g=>c("hasStatus",{...l.hasStatus,[s]:g})},s)),t.jsx(T,{sx:{mt:2},children:e("global.filter.label.tracked")}),n.map(s=>t.jsx(M,{label:s.name,checked:l.hasTrackerBinding[s.id],onChange:g=>c("hasTrackerBinding",{...l.hasTrackerBinding,[s.id]:g})},s.id))]});if(b==="sort")return tt.map(([s,g])=>t.jsx(Ge,{label:e(g),checked:l.sortBy===s,sortDescending:l.sortDesc,onClick:()=>s!==l.sortBy?c("sortBy",s):c("sortDesc",!l.sortDesc)},s));if(b==="display"){const{gridLayout:s,showContinueReadingButton:g,showDownloadBadge:h,showUnreadBadge:F}=l;return t.jsxs(t.Fragment,{children:[t.jsx(T,{children:e("global.grid_layout.title")}),t.jsxs(He,{onChange:I=>c("gridLayout",Number(I.target.value)),value:s,children:[t.jsx(N,{label:e("global.grid_layout.label.compact_grid"),value:j.Compact,checked:s==null||s===j.Compact}),t.jsx(N,{label:e("global.grid_layout.label.comfortable_grid"),value:j.Comfortable,checked:s===j.Comfortable}),t.jsx(N,{label:e("global.grid_layout.label.list"),value:j.List,checked:s===j.List})]}),t.jsx(T,{sx:{mt:2},children:e("library.option.display.badge.title")}),t.jsx(R,{label:e("library.option.display.badge.label.unread_badges"),checked:F,onChange:()=>c("showUnreadBadge",!F)}),t.jsx(R,{label:e("library.option.display.badge.label.download_badges"),checked:h,onChange:()=>c("showDownloadBadge",!h)}),t.jsx(T,{sx:{mt:2},children:e("library.option.display.tab.title")}),t.jsx(R,{label:e("library.option.display.tab.label.show_number_of_items"),checked:p,onChange:()=>_("showTabSize",!p)}),t.jsx(T,{sx:{mt:2},children:e("global.label.other")}),t.jsx(R,{label:e("library.option.display.other.label.show_continue_reading_button"),checked:g,onChange:()=>c("showContinueReadingButton",!g)})]})}return null}})},st=({category:a})=>{const{t:r}=B(),[i,e]=u.useState(!1),{options:o}=z(),n=o.hasDownloadedChapters!=null||o.hasUnreadChapters!=null||o.hasBookmarkedChapters!=null||o.hasDuplicateChapters!=null||Object.values(o.hasStatus).some(l=>l!=null)||Object.values(o.hasTrackerBinding).some(l=>l!=null);return t.jsxs(t.Fragment,{children:[t.jsx(he,{title:r("settings.title"),children:t.jsx(_e,{onClick:()=>e(!i),color:n?"warning":"inherit",children:t.jsx(Ne,{})})}),t.jsx(at,{category:a,open:i,onClose:()=>e(!1)})]})},ne=({showFilteredOutMessage:a,message:r,messageExtra:i,...e})=>{const{t:o}=B(),{options:n}=z();return u.useLayoutEffect(()=>(document.body.style.overflowY=n.gridLayout===j.List?"auto":"scroll",()=>{document.body.style.overflowY="auto"}),[]),t.jsx(Ve,{gridWrapperProps:{sx:{p:1}},...e,hasNextPage:!1,loadMore:()=>{},message:a?o("library.error.label.no_matches"):r,messageExtra:a?void 0:i,gridLayout:n.gridLayout})},rt=({isActive:a,areAllItemsSelected:r,areNoItemsSelected:i,onSelectAll:e,onModeChange:o})=>{const{t:n}=B();return t.jsxs(t.Fragment,{children:[a&&t.jsx(Pe,{areAllItemsSelected:r,areNoItemsSelected:i,onChange:e}),t.jsx(he,{title:n(a?"global.button.cancel":"global.button.select_all"),children:t.jsx(ke,{checkedIcon:t.jsx($e,{}),sx:{padding:"8px",color:"inherit","&.Mui-checked":{color:"inherit"}},checked:a,onChange:(l,c)=>o(c)})})]})},W=(a,r,i)=>{switch(a){case!0:return r();case!1:return i();default:return!0}},G=(a,r)=>W(a,()=>!!r&&r>=1,()=>r===0),ue=(a,r)=>W(a,()=>!!r,()=>!r),A=(a,r)=>{const i=a==null?void 0:a.filter(l=>l!=null),e=r==null?void 0:r.filter(l=>l!=null);if(!(i!=null&&i.length))return!0;const o=i.map(U),n=e.map(U).join(", ");return o.every(l=>n.includes(l))},lt=(a,{title:r,genre:i,description:e,artist:o,author:n,source:l})=>A([a],[r])||A(a==null?void 0:a.split(","),i.map(c=>U(c)))||A([a],[e])||A([a],[o])||A([a],[n])||A([a],[l==null?void 0:l.displayName]),ot=(a,r)=>Object.entries(a).map(([i,e])=>{const o=r.trackRecords.nodes.some(n=>n.trackerId===Number(i));return W(e,()=>o,()=>!o)}).every(Boolean),nt=(a,r)=>Object.entries(a).map(([i,e])=>ue(e,i===r.status)).every(Boolean),it=(a,{hasDownloadedChapters:r,hasUnreadChapters:i,hasBookmarkedChapters:e,hasDuplicateChapters:o,hasTrackerBinding:n,hasStatus:l})=>G(r,a.downloadCount)&&G(i,a.unreadCount)&&G(e,a.bookmarkCount)&&ue(o,a.hasDuplicateChapters)&&ot(n,a)&&nt(l,a),ct=(a,r,i)=>{const e=i.ignoreFilters&&(r==null?void 0:r.length);return a.filter(o=>{const n=lt(r,o),l=e||it(o,i);return n&&l})},L=(a=0,r=0)=>Number(a)-Number(r),dt=(a,r)=>a.localeCompare(r),ht=(a,r,i)=>{const e=[...a];switch(r){case"alphabetically":e.sort((o,n)=>dt(o.title,n.title));break;case"dateAdded":e.sort((o,n)=>L(o.inLibraryAt,n.inLibraryAt));break;case"unreadChapters":e.sort((o,n)=>L(o.unreadCount,n.unreadCount));break;case"lastRead":e.sort((o,n)=>{var l,c;return L((l=o.lastReadChapter)==null?void 0:l.lastReadAt,(c=n.lastReadChapter)==null?void 0:c.lastReadAt)});break;case"latestUploadedChapter":e.sort((o,n)=>{var l,c;return L((l=o.latestUploadedChapter)==null?void 0:l.uploadDate,(c=n.latestUploadedChapter)==null?void 0:c.uploadDate)});break;case"latestFetchedChapter":e.sort((o,n)=>{var l,c;return L((l=o.latestFetchedChapter)==null?void 0:l.fetchedAt,(c=n.latestFetchedChapter)==null?void 0:c.fetchedAt)});break;case"totalChapters":e.sort((o,n)=>L(o.chapters.totalCount,n.chapters.totalCount));break}return i&&e.reverse(),e},gt={id:-1},ut=(a,r)=>{const[i]=ge("query",ve),e=de(r!=null?r:gt),{hasUnreadChapters:o,hasDownloadedChapters:n,hasBookmarkedChapters:l,hasTrackerBinding:c,hasDuplicateChapters:p,hasStatus:_}=e,{settings:f}=P(),C=u.useMemo(()=>ct(a,i,{...e,ignoreFilters:f.ignoreFilters}),[a,i,o,n,l,c,p,_,f.ignoreFilters]),b=u.useMemo(()=>ht(C,e.sortBy,e.sortDesc),[C,e.sortBy,e.sortDesc]),s=Object.values(e.hasTrackerBinding).some(h=>h!=null),g=(o!=null||n!=null||l!=null||!!i||s)&&C.length===0&&a.length>0;return{visibleMangas:b,showFilteredOutMessage:g}},ie=Te("span")({display:"flex",alignItems:"center"}),ce=({sx:a,...r})=>t.jsx(qe,{...r,size:"small",sx:{...a,marginLeft:"5px"}});function Ut(){var q,ee,te,ae,se,re;const{t:a}=B(),{settings:{showTabSize:r}}=P(),{data:i,error:e,loading:o,refetch:n}=O.useGetCategories(Me,{notifyOnNetworkStatusChange:!0}),l=i==null?void 0:i.categories.nodes.filter(d=>d.id!==0||d.id===0&&d.mangas.totalCount),c=l!=null?l:[],p=O.useGetMangas(Ae,{}),_=(ee=(q=p.data)==null?void 0:q.mangas.totalCount)!=null?ee:0,[f,C]=ge("tab",De),{setOptions:b}=z(),s=(te=c.find(d=>d.order===f))!=null?te:c[0];u.useLayoutEffect(()=>{b(Le(s!=null?s:{id:-1}))},[s]);const{data:g,error:h,loading:F,refetch:I}=O.useGetCategoryMangas(s==null?void 0:s.id,{skip:!s,notifyOnNetworkStatusChange:!0}),pe=(ae=g==null?void 0:g.mangas.nodes)!=null?ae:[],{visibleMangas:m,showFilteredOutMessage:Y}=ut(pe,s),K=u.useCallback(()=>I().catch(D()),[I,s]),be=u.useMemo(()=>m.map(d=>d.id),[m]),[x,v]=u.useState(!1),{areNoItemsForKeySelected:H,areAllItemsForKeySelected:V,selectedItemIds:y,handleSelectAll:E,handleSelection:me,clearSelection:Ce}=Ze(m.length,{itemIds:be,currentKey:s==null?void 0:s.id.toString()}),Q=(d,S,k)=>{v(!!(y.length+(S?1:-1))),me(d,S,k)},$=u.useMemo(()=>y.map(d=>Ke.getFromCache(d,Fe,"MANGA_CHAPTER_STAT_FIELDS")).filter(d=>!!d),[y.length,m]),X=u.useMemo(()=>x?t.jsx(ze,{selectedItemsCount:y.length,title:"manga.title",children:(d,S)=>t.jsx(Qe,{selectedMangas:$,onClose:()=>{d(),v(!1),Ce()},setHideMenu:S})}):null,[x,$]),{setTitle:Z,setAction:J}=u.useContext(we);u.useLayoutEffect(()=>{const d=a("library.title");return Z(t.jsxs(ie,{children:[d,r&&t.jsx(ce,{sx:{color:"inherit"},label:_})]}),d),J(t.jsxs(t.Fragment,{children:[!x&&s&&t.jsxs(t.Fragment,{children:[t.jsx(Ee,{}),t.jsx(st,{category:s}),t.jsx(Xe,{categoryId:s==null?void 0:s.id})]}),t.jsx(rt,{isActive:x,areAllItemsSelected:V,areNoItemsSelected:H,onSelectAll:k=>E(k,[...new Set(m.map(w=>w.id))]),onModeChange:k=>{v(k),k?E(!0,[...new Set(m.map(w=>w.id))]):c.forEach(w=>E(!1,[],w.id.toString()))}})]})),()=>{Z(""),J(null)}},[a,_,o,x,H,V,y.length,m.length,s,r]);const fe=d=>{C(d)};return e!=null||p.error?t.jsx(oe,{message:a("global.error.label.failed_to_load_data"),messageExtra:(re=e==null?void 0:e.message)!=null?re:(se=p.error)==null?void 0:se.message,retry:()=>{e&&n().catch(D()),p.error&&p.refetch().catch(D())}}):o||p.loading?t.jsx(Be,{}):c.length===0?t.jsx(oe,{message:a("library.error.label.empty")}):c.length===1?t.jsxs(t.Fragment,{children:[t.jsx(ne,{mangas:m,message:a(h?"manga.error.label.request_failure":"library.error.label.empty"),messageExtra:h==null?void 0:h.message,isLoading:F,selectedMangaIds:y,isSelectModeActive:x,handleSelection:Q,showFilteredOutMessage:!h&&Y,retry:h&&K}),X]}):t.jsxs(Je,{children:[t.jsx(Ie,{value:s.order,onChange:(d,S)=>fe(S),children:c.map(d=>t.jsx(Re,{sx:{flexGrow:1,maxWidth:"unset"},label:t.jsxs(ie,{children:[d.name,r?t.jsx(ce,{label:d.mangas.totalCount}):null]}),value:d.order},d.id))}),c.map(d=>t.jsx(Oe,{index:d.order,currentIndex:s.order,children:d===s&&t.jsx(ne,{mangas:m,message:a(h?"manga.error.label.request_failure":"library.error.label.empty"),messageExtra:h==null?void 0:h.message,isLoading:F,selectedMangaIds:y,isSelectModeActive:x,handleSelection:Q,showFilteredOutMessage:!h&&Y,retry:h&&K})},d.order)),X]})}export{Ut as Library};