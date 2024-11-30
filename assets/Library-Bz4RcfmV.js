import{u as B,a as R,G as xe,x as de,l as P,j as t,y as ye,z as j,A as Se,t as je,m as oe,c as g,C as z,f as he,I as _e,E as ke,F as Te,H as Me,J as Ae,h as N,K as Fe,N as Le,g as we}from"./index-DCLtpUvd.js";import{u as pe,S as Be,A as Ie,N as Oe}from"./AppbarSearch-BUOBy0Mo.js";import{E as le}from"./EmptyViewAbsoluteCentered-CW_zNQ4R.js";import{T as Re,a as ve}from"./Tabs-BGUfO7Kn.js";import{d as Ee}from"./FilterList-B8l4q-wU.js";import{C as O}from"./CheckboxInput-BfGyfodi.js";import{S as Ne,R as D}from"./SortRadioInput-D9AiAr4z.js";import{T}from"./ThreeStateCheckboxInput-DuOm1acQ.js";import{O as De,S as Ge,e as U,a as Ue}from"./SelectionFAB-Du28vIUX.js";import{T as Pe}from"./Trackers-D4pSmk7a.js";import{s as ze,M as Ke}from"./Mangas-Cxp4_B5b.js";import{F as M}from"./TextField-CqoTPkms.js";import{R as Ye}from"./ListPreference-C9f9ibuT.js";import{M as He,a as We}from"./MangaGrid-4-IuHkHX.js";import{d as Ve,U as Je}from"./UpdateChecker-Bq6vNQMO.js";import{u as Qe}from"./useManageMangaLibraryState-Bx6W0R_n.js";import{C as $e}from"./Checkbox-NlnQsZB0.js";import{T as Xe,a as Ze}from"./TabsMenu-A9rYhOUF.js";import{C as qe}from"./Chip-DM5qg74-.js";import"./StyledFab-ry5IZvxh.js";import"./Chapters-CHk8tH3E.js";import"./SwitchBase-CWAJmFMY.js";import"./index-CUtiZdHq.js";import"./Delete-CmQHBm0P.js";import"./Download-DJF8ST8_.js";import"./Sync-DC7GNGnY.js";import"./SpinnerImage-pue1bji5.js";import"./Refresh-BvluAULJ.js";import"./TypographyMaxLines-CDFbxbWf.js";import"./Link-DRZ5ywFL.js";import"./Card-C0ry1gLE.js";import"./CardActionArea-BZXNbXAI.js";import"./CardContent-DvoLRTUo.js";import"./Avatar-fZt4MSW-.js";import"./PlayArrow-DYMumPhT.js";import"./Progress-COQCUKnq.js";import"./Info-DVrjJPII.js";import"./InputAdornment-HF4SXBUj.js";import"./CheckCircle-BimjOoSl.js";import"./Collapse-i_efnpIm.js";import"./NumberSetting-Cm-1w_1U.js";import"./useMobilePicker-6omRR1UB.js";import"./SelectSetting-DzhrvHIt.js";import"./Select-CRELDKpa.js";const et={filter:"global.label.filter",sort:"global.label.sort",display:"global.label.display"},tt=[["unreadChapters","library.option.sort.label.by_unread_chapters"],["totalChapters","library.option.sort.label.by_total_chapters"],["alphabetically","library.option.sort.label.alphabetically"],["dateAdded","library.option.sort.label.by_date_added"],["lastRead","library.option.sort.label.by_last_read"],["latestFetchedChapter","library.option.sort.label.by_latest_fetched_chapter"],["latestUploadedChapter","library.option.sort.label.by_latest_uploaded_chapter"]],at=({category:a,open:s,onClose:i})=>{var f,C;const{t:e}=B(),l=R.useGetTrackerList(xe),n=Pe.getLoggedIn((C=(f=l.data)==null?void 0:f.trackers.nodes)!=null?C:[]),o=de(a),c=Se(a,()=>oe(e("global.error.label.failed_to_save_changes","error"))),{settings:{showTabSize:u}}=P(),_=je(()=>oe(e("search.error.label.failed_to_save_settings"),"warning"));return t.jsx(De,{open:s,onClose:i,tabs:["filter","sort","display"],tabTitle:m=>e(et[m]),tabContent:m=>{if(m==="filter")return t.jsxs(t.Fragment,{children:[t.jsx(T,{label:e("global.filter.label.unread"),checked:o.hasUnreadChapters,onChange:r=>c("hasUnreadChapters",r)}),t.jsx(T,{label:e("global.filter.label.downloaded"),checked:o.hasDownloadedChapters,onChange:r=>c("hasDownloadedChapters",r)}),t.jsx(T,{label:e("global.filter.label.bookmarked"),checked:o.hasBookmarkedChapters,onChange:r=>c("hasBookmarkedChapters",r)}),t.jsx(T,{label:e("global.filter.label.duplicate_chapters"),checked:o.hasDuplicateChapters,onChange:r=>c("hasDuplicateChapters",r)}),t.jsx(M,{sx:{mt:2},children:e("manga.label.status")}),Object.values(ye).map(r=>t.jsx(T,{label:e(ze[r]),checked:o.hasStatus[r],onChange:p=>c("hasStatus",{...o.hasStatus,[r]:p})},r)),t.jsx(M,{sx:{mt:2},children:e("global.filter.label.tracked")}),n.map(r=>t.jsx(T,{label:r.name,checked:o.hasTrackerBinding[r.id],onChange:p=>c("hasTrackerBinding",{...o.hasTrackerBinding,[r.id]:p})},r.id))]});if(m==="sort")return tt.map(([r,p])=>t.jsx(Ne,{label:e(p),checked:o.sortBy===r,sortDescending:o.sortDesc,onClick:()=>r!==o.sortBy?c("sortBy",r):c("sortDesc",!o.sortDesc)},r));if(m==="display"){const{gridLayout:r,showContinueReadingButton:p,showDownloadBadge:h,showUnreadBadge:L}=o;return t.jsxs(t.Fragment,{children:[t.jsx(M,{children:e("global.grid_layout.title")}),t.jsxs(Ye,{onChange:I=>c("gridLayout",Number(I.target.value)),value:r,children:[t.jsx(D,{label:e("global.grid_layout.label.compact_grid"),value:j.Compact,checked:r==null||r===j.Compact}),t.jsx(D,{label:e("global.grid_layout.label.comfortable_grid"),value:j.Comfortable,checked:r===j.Comfortable}),t.jsx(D,{label:e("global.grid_layout.label.list"),value:j.List,checked:r===j.List})]}),t.jsx(M,{sx:{mt:2},children:e("library.option.display.badge.title")}),t.jsx(O,{label:e("library.option.display.badge.label.unread_badges"),checked:L,onChange:()=>c("showUnreadBadge",!L)}),t.jsx(O,{label:e("library.option.display.badge.label.download_badges"),checked:h,onChange:()=>c("showDownloadBadge",!h)}),t.jsx(M,{sx:{mt:2},children:e("library.option.display.tab.title")}),t.jsx(O,{label:e("library.option.display.tab.label.show_number_of_items"),checked:u,onChange:()=>_("showTabSize",!u)}),t.jsx(M,{sx:{mt:2},children:e("global.label.other")}),t.jsx(O,{label:e("library.option.display.other.label.show_continue_reading_button"),checked:p,onChange:()=>c("showContinueReadingButton",!p)})]})}return null}})},rt=({category:a})=>{const{t:s}=B(),[i,e]=g.useState(!1),{options:l}=z(),n=l.hasDownloadedChapters!=null||l.hasUnreadChapters!=null||l.hasBookmarkedChapters!=null||l.hasDuplicateChapters!=null||Object.values(l.hasStatus).some(o=>o!=null)||Object.values(l.hasTrackerBinding).some(o=>o!=null);return t.jsxs(t.Fragment,{children:[t.jsx(he,{title:s("settings.title"),children:t.jsx(_e,{onClick:()=>e(!i),color:n?"warning":"inherit",children:t.jsx(Ee,{})})}),t.jsx(at,{category:a,open:i,onClose:()=>e(!1)})]})},ne=({showFilteredOutMessage:a,message:s,messageExtra:i,...e})=>{const{t:l}=B(),{options:n}=z();return g.useLayoutEffect(()=>(document.body.style.overflowY=n.gridLayout===j.List?"auto":"scroll",()=>{document.body.style.overflowY="auto"}),[]),t.jsx(He,{gridWrapperProps:{sx:{p:1}},...e,hasNextPage:!1,loadMore:()=>{},message:a?l("library.error.label.no_matches"):s,messageExtra:a?void 0:i,gridLayout:n.gridLayout})},st=({isActive:a,areAllItemsSelected:s,areNoItemsSelected:i,onSelectAll:e,onModeChange:l})=>{const{t:n}=B();return t.jsxs(t.Fragment,{children:[a&&t.jsx(Ge,{areAllItemsSelected:s,areNoItemsSelected:i,onChange:e}),t.jsx(he,{title:n(a?"global.button.cancel":"global.button.select_all"),children:t.jsx($e,{checkedIcon:t.jsx(Ve,{}),sx:{padding:"8px",color:"inherit","&.Mui-checked":{color:"inherit"}},checked:a,onChange:(o,c)=>l(c)})})]})},K=(a,s,i)=>{switch(a){case!0:return s();case!1:return i();default:return!0}},G=(a,s)=>K(a,()=>!!s&&s>=1,()=>s===0),ge=(a,s)=>K(a,()=>!!s,()=>!s),A=(a,s)=>{const i=a==null?void 0:a.filter(o=>o!=null),e=s==null?void 0:s.filter(o=>o!=null);if(!(i!=null&&i.length))return!0;const l=i.map(U),n=e.map(U).join(", ");return l.every(o=>n.includes(o))},ot=(a,{title:s,genre:i,description:e,artist:l,author:n,source:o})=>A([a],[s])||A(a==null?void 0:a.split(","),i.map(c=>U(c)))||A([a],[e])||A([a],[l])||A([a],[n])||A([a],[o==null?void 0:o.displayName]),lt=(a,s)=>Object.entries(a).map(([i,e])=>{const l=s.trackRecords.nodes.some(n=>n.trackerId===Number(i));return K(e,()=>l,()=>!l)}).every(Boolean),nt=(a,s)=>Object.entries(a).map(([i,e])=>ge(e,i===s.status)).every(Boolean),it=(a,{hasDownloadedChapters:s,hasUnreadChapters:i,hasBookmarkedChapters:e,hasDuplicateChapters:l,hasTrackerBinding:n,hasStatus:o})=>G(s,a.downloadCount)&&G(i,a.unreadCount)&&G(e,a.bookmarkCount)&&ge(l,a.hasDuplicateChapters)&&lt(n,a)&&nt(o,a),ct=(a,s,i)=>{const e=i.ignoreFilters&&(s==null?void 0:s.length);return a.filter(l=>{const n=ot(s,l),o=e||it(l,i);return n&&o})},F=(a=0,s=0)=>Number(a)-Number(s),dt=(a,s)=>a.localeCompare(s),ht=(a,s,i)=>{const e=[...a];switch(s){case"alphabetically":e.sort((l,n)=>dt(l.title,n.title));break;case"dateAdded":e.sort((l,n)=>F(l.inLibraryAt,n.inLibraryAt));break;case"unreadChapters":e.sort((l,n)=>F(l.unreadCount,n.unreadCount));break;case"lastRead":e.sort((l,n)=>{var o,c;return F((o=l.lastReadChapter)==null?void 0:o.lastReadAt,(c=n.lastReadChapter)==null?void 0:c.lastReadAt)});break;case"latestUploadedChapter":e.sort((l,n)=>{var o,c;return F((o=l.latestUploadedChapter)==null?void 0:o.uploadDate,(c=n.latestUploadedChapter)==null?void 0:c.uploadDate)});break;case"latestFetchedChapter":e.sort((l,n)=>{var o,c;return F((o=l.latestFetchedChapter)==null?void 0:o.fetchedAt,(c=n.latestFetchedChapter)==null?void 0:c.fetchedAt)});break;case"totalChapters":e.sort((l,n)=>F(l.chapters.totalCount,n.chapters.totalCount));break}return i&&e.reverse(),e},pt={id:-1},gt=(a,s)=>{const[i]=pe("query",Be),e=de(s!=null?s:pt),{hasUnreadChapters:l,hasDownloadedChapters:n,hasBookmarkedChapters:o,hasTrackerBinding:c,hasDuplicateChapters:u,hasStatus:_}=e,{settings:f}=P(),C=g.useMemo(()=>ct(a,i,{...e,ignoreFilters:f.ignoreFilters}),[a,i,l,n,o,c,u,_,f.ignoreFilters]),m=g.useMemo(()=>ht(C,e.sortBy,e.sortDesc),[C,e.sortBy,e.sortDesc]),r=Object.values(e.hasTrackerBinding).some(h=>h!=null),p=(l!=null||n!=null||o!=null||!!i||r)&&C.length===0&&a.length>0;return{visibleMangas:m,showFilteredOutMessage:p}},ie=ke("span")({display:"flex",alignItems:"center"}),ce=({sx:a,...s})=>t.jsx(qe,{...s,size:"small",sx:{...a,marginLeft:"5px"}});function sa(){var q,ee,te,ae,re,se;const{t:a}=B(),{settings:{showTabSize:s}}=P(),{data:i,error:e,loading:l,refetch:n}=R.useGetCategories(Te,{notifyOnNetworkStatusChange:!0}),o=i==null?void 0:i.categories.nodes.filter(d=>d.id!==0||d.id===0&&d.mangas.totalCount),c=o!=null?o:[],u=R.useGetMangas(Me,{}),_=(ee=(q=u.data)==null?void 0:q.mangas.totalCount)!=null?ee:0,[f,C]=pe("tab",Oe),{setOptions:m}=z(),r=(te=c.find(d=>d.order===f))!=null?te:c[0];g.useLayoutEffect(()=>{m(Ae(r!=null?r:{id:-1}))},[r]);const{data:p,error:h,loading:L,refetch:I}=R.useGetCategoryMangas(r==null?void 0:r.id,{skip:!r,notifyOnNetworkStatusChange:!0}),ue=(ae=p==null?void 0:p.mangas.nodes)!=null?ae:[],{visibleMangas:b,showFilteredOutMessage:Y}=gt(ue,r),H=g.useCallback(()=>I().catch(N()),[I,r]),me=g.useMemo(()=>b.map(d=>d.id),[b]),[x,v]=g.useState(!1),{areNoItemsForKeySelected:W,areAllItemsForKeySelected:V,selectedItemIds:y,handleSelectAll:E,handleSelection:be,clearSelection:Ce}=Qe(b.length,{itemIds:me,currentKey:r==null?void 0:r.id.toString()}),J=(d,S,k)=>{v(!!(y.length+(S?1:-1))),be(d,S,k)},Q=g.useMemo(()=>y.map(d=>Ke.getFromCache(d,Fe,"MANGA_CHAPTER_STAT_FIELDS")).filter(d=>!!d),[y.length,b]),$=g.useMemo(()=>x?t.jsx(Ue,{selectedItemsCount:y.length,title:"manga.title",children:(d,S)=>t.jsx(We,{selectedMangas:Q,onClose:()=>{d(),v(!1),Ce()},setHideMenu:S})}):null,[x,Q]),{setTitle:X,setAction:Z}=g.useContext(Le);g.useLayoutEffect(()=>{const d=a("library.title");return X(t.jsxs(ie,{children:[d,s&&t.jsx(ce,{sx:{color:"inherit"},label:_})]}),d),Z(t.jsxs(t.Fragment,{children:[!x&&r&&t.jsxs(t.Fragment,{children:[t.jsx(Ie,{}),t.jsx(rt,{category:r}),t.jsx(Je,{categoryId:r==null?void 0:r.id})]}),t.jsx(st,{isActive:x,areAllItemsSelected:V,areNoItemsSelected:W,onSelectAll:k=>E(k,[...new Set(b.map(w=>w.id))]),onModeChange:k=>{v(k),k?E(!0,[...new Set(b.map(w=>w.id))]):c.forEach(w=>E(!1,[],w.id.toString()))}})]})),()=>{X(""),Z(null)}},[a,_,l,x,W,V,y.length,b.length,r,s]);const fe=d=>{C(d)};return e!=null||u.error?t.jsx(le,{message:a("global.error.label.failed_to_load_data"),messageExtra:(se=e==null?void 0:e.message)!=null?se:(re=u.error)==null?void 0:re.message,retry:()=>{e&&n().catch(N()),u.error&&u.refetch().catch(N())}}):l||u.loading?t.jsx(we,{}):c.length===0?t.jsx(le,{message:a("library.error.label.empty")}):c.length===1?t.jsxs(t.Fragment,{children:[t.jsx(ne,{mangas:b,message:a(h?"manga.error.label.request_failure":"library.error.label.empty"),messageExtra:h==null?void 0:h.message,isLoading:L,selectedMangaIds:y,isSelectModeActive:x,handleSelection:J,showFilteredOutMessage:!h&&Y,retry:h&&H}),$]}):t.jsxs(Xe,{children:[t.jsx(Ze,{value:r.order,onChange:(d,S)=>fe(S),children:c.map(d=>t.jsx(Re,{sx:{display:"flex"},label:t.jsxs(ie,{children:[d.name,s?t.jsx(ce,{label:d.mangas.totalCount}):null]}),value:d.order},d.id))}),c.map(d=>t.jsx(ve,{index:d.order,currentIndex:r.order,children:d===r&&t.jsx(ne,{mangas:b,message:a(h?"manga.error.label.request_failure":"library.error.label.empty"),messageExtra:h==null?void 0:h.message,isLoading:L,selectedMangaIds:y,isSelectModeActive:x,handleSelection:J,showFilteredOutMessage:!h&&Y,retry:h&&H})},d.order)),$]})}export{sa as Library};