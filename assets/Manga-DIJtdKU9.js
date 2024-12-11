import{r as A,i as O,j as e,u as v,L as G,a6 as V,f as u,k as C,I as g,a7 as $e,a8 as R,a1 as M,d as p,a9 as U,V as Ae,p as Oe,M as se,z as pe,c as T,aa as Ee,ab as Ne,l as fe,E as $,m as Be,T as K,ac as ne,ad as Pe,ae as xe,af as Q,ag as ze,ah as ge,ai as De,B as be,aj as He,ak as Ge,al as Ve,h as We,Q as qe,am as Y,an as Ue,ao as Ke,n as W,A as q,q as Qe,ap as Ye,aq as Je,ar as me,as as Xe,S as oe,at as Ze,au as et,g as tt,av as rt,aw as at,O as le,ax as B,ay as P,az as z,N as st,aA as nt,aB as ot,aC as lt,aD as it}from"./index-CsKI2UB9.js";import{d as ct}from"./PlayArrow-DLW34FcE.js";import{S as dt,D as ut}from"./StyledFab-PX3h5XbN.js";import{d as ht}from"./FilterList-DtsQpiOU.js";import{S as pt,R as ie}from"./SortRadioInput-PUnFFF5x.js";import{T as D}from"./ThreeStateCheckboxInput-CiDfTqTK.js";import{O as ft,a as xt,S as gt,d as bt}from"./SelectionFAB-ByA-yc0Z.js";import{R as mt}from"./ListPreference-C5ARWJ_W.js";import{u as jt,C as Ct,T as vt,a as _t,d as yt,M as kt,b as wt,c as St,e as ce,f as de}from"./useManageMangaLibraryState-C_jdQm8Q.js";import{M as F,s as Mt,a as Tt}from"./Mangas-Drbmf7vp.js";import{d as It,a as Rt,b as Ft}from"./ExpandMore-B9_F6LPN.js";import{d as Lt}from"./Sync-n-jRzj43.js";import{T as H}from"./Trackers-D4pSmk7a.js";import{C as $t}from"./Chip-CghheuL1.js";import"./Avatar-DwatiGVC.js";import"./CheckCircle-CAvAA76D.js";import"./NumberSetting-BaBwUSbs.js";import"./useMobilePicker-B3nRwVmN.js";import"./SelectSetting-DDCMmDR2.js";var J={},At=O;Object.defineProperty(J,"__esModule",{value:!0});var je=J.default=void 0,Ot=At(A()),Et=e;je=J.default=(0,Ot.default)((0,Et.jsx)("path",{d:"M1 21h22L12 2zm12-3h-2v-2h2zm0-4h-2v-4h2z"}),"Warning");function Nt({chapter:t}){const{t:r}=v(),{sourceOrder:a}=t;return e.jsxs(dt,{component:G,variant:"extended",color:"primary",to:V.getReaderUrl(t),state:{resumeMode:V.getReaderResumeMode(t)},children:[e.jsx(ct,{}),r(a===1?"global.button.start":"global.button.resume")]})}function Bt(t,{isRead:r}){switch(t){case!0:return!r;case!1:return r;default:return!0}}function Pt(t,{isDownloaded:r}){switch(t){case!0:return r;case!1:return!r;default:return!0}}function zt(t,{isBookmarked:r}){switch(t){case!0:return r;case!1:return!r;default:return!0}}const Dt=(t,{sortBy:r,reverse:a})=>{const s=[...t];switch(r){case"source":s.sort((n,i)=>n.sourceOrder-i.sourceOrder);break;case"fetchedAt":s.sort((n,i)=>{var o,d;return Number((o=n.fetchedAt)!=null?o:0)-Number((d=i.fetchedAt)!=null?d:0)});break;case"chapterNumber":s.sort((n,i)=>n.chapterNumber-i.chapterNumber);break;case"uploadedAt":s.sort((n,i)=>{var o,d;return Number((o=n.uploadDate)!=null?o:0)-Number((d=i.uploadDate)!=null?d:0)});break}return a&&s.reverse(),s};function Ht(t,r){const a=r.active?t.filter(s=>Bt(r.unread,s)&&Pt(r.downloaded,s)&&zt(r.bookmarked,s)):[...t];return Dt(a,r)}const Gt=t=>{const{unread:r,downloaded:a,bookmarked:s}=t;return r!=null||a!=null||s!=null},Vt={active:!1,unread:void 0,downloaded:void 0,bookmarked:void 0,reverse:!0,sortBy:"source",showChapterNumber:!1},Wt={source:"global.sort.label.by_source",chapterNumber:"global.sort.label.by_chapter_number",uploadedAt:"global.sort.label.by_upload_date",fetchedAt:"global.sort.label.by_fetch_date"},qt={filter:"global.label.filter",sort:"global.label.sort",display:"global.label.display"},Ut=({open:t,onClose:r,options:a,optionsDispatch:s})=>{const{t:n}=v();return e.jsx(ft,{open:t,onClose:r,minHeight:150,tabs:["filter","sort","display"],tabTitle:i=>n(qt[i]),tabContent:i=>i==="filter"?e.jsxs(e.Fragment,{children:[e.jsx(D,{label:n("global.filter.label.unread"),checked:a.unread,onChange:o=>s({type:"filter",filterType:"unread",filterValue:o})}),e.jsx(D,{label:n("global.filter.label.downloaded"),checked:a.downloaded,onChange:o=>s({type:"filter",filterType:"downloaded",filterValue:o})}),e.jsx(D,{label:n("global.filter.label.bookmarked"),checked:a.bookmarked,onChange:o=>s({type:"filter",filterType:"bookmarked",filterValue:o})})]}):i==="sort"?Object.entries(Wt).map(([o,d])=>e.jsx(pt,{label:n(d),checked:a.sortBy===o,sortDescending:a.reverse,onClick:()=>o!==a.sortBy?s({type:"sortBy",sortBy:o}):s({type:"sortReverse"})},o)):i==="display"?e.jsxs(mt,{onChange:()=>s({type:"showChapterNumber"}),value:a.showChapterNumber,children:[e.jsx(ie,{label:n("chapter.option.display.label.source_title"),value:!1}),e.jsx(ie,{label:n("chapter.option.display.label.chapter_number"),value:!0})]}):null})},Kt=({options:t,optionsDispatch:r})=>{const{t:a}=v(),[s,n]=u.useState(!1),i=Gt(t);return e.jsxs(e.Fragment,{children:[e.jsx(C,{title:a("settings.title"),children:e.jsx(g,{onClick:()=>n(!0),children:e.jsx(ht,{color:i?"warning":void 0})})}),e.jsx(Ut,{open:s,onClose:()=>n(!1),options:t,optionsDispatch:r})]})};function Qt(t,r){switch(r.type){case"filter":return{...t,active:t.unread!==!1&&t.downloaded!==!1&&t.bookmarked!==!1,[r.filterType]:r.filterValue};case"sortBy":return{...t,sortBy:r.sortBy};case"sortReverse":return{...t,reverse:!t.reverse};case"showChapterNumber":return{...t,showChapterNumber:!t.showChapterNumber};default:throw Error(R("global.error.label.invalid_action"))}}const Yt=t=>$e(Qt,"".concat(t,"filterOptions"),Vt),Jt=M(p,{shouldForwardProp:U(["scrollbarWidth"])})(({theme:t,scrollbarWidth:r})=>({padding:t.spacing(1),paddingRight:"calc(".concat(r,"px + ").concat(t.spacing(1),")"),paddingBottom:0,[t.breakpoints.down("md")]:{paddingRight:t.spacing(1)}})),Xt=M(Ae,{shouldForwardProp:U(["topOffset"])})(({theme:t,topOffset:r})=>({listStyle:"none",padding:0,[t.breakpoints.up("md")]:{height:"calc(100vh - ".concat(r,"px)"),margin:0}})),Zt=({manga:t,isRefreshing:r})=>{var ae;const{t:a}=v(),{appBarHeight:s}=Oe(),n=se.useIsBelowWidth("md"),[i,o]=u.useState(50),[d,f]=u.useState(null);pe(d,u.useCallback(()=>{var c;return o((c=d==null?void 0:d.offsetHeight)!=null?c:0)},[d]));const x=se.useGetScrollbarSize("width"),{data:h}=T.useGetDownloadStatus(),l=(ae=h==null?void 0:h.downloadStatus.queue)!=null?ae:[],[b,w]=Yt(t.id),{data:_,loading:y,error:m,refetch:ye}=T.useGetMangaChapters(Ee,t.id,{notifyOnNetworkStatusChange:!0}),k=u.useMemo(()=>{var c;return(c=_==null?void 0:_.chapters.nodes)!=null?c:[]},[_==null?void 0:_.chapters.nodes]),ke=u.useMemo(()=>k.map(c=>c.id),[k]),{areNoItemsSelected:te,areAllItemsSelected:we,selectedItemIds:re,handleSelectAll:Se,handleSelection:Me}=jt(k.length,{itemIds:ke,currentKey:"default"}),S=u.useMemo(()=>Ht(k,b),[k,b]),Te=F.isFullyRead(t),Ie=F.isFullyDownloaded(t),E=k.length===0,Re=!E&&S.length===0,I=u.useMemo(()=>S.map(c=>{const j=l==null?void 0:l.find(Le=>Le.chapter.id===c.id),N=te?null:re.includes(c.id);return{chapter:c,downloadChapter:j,selected:N}}),[l,re,S]),Fe=u.useMemo(()=>{const c=I.filter(j=>j.selected);return c.length?e.jsx(xt,{selectedItemsCount:c.length,title:"chapter.title_one",children:j=>e.jsx(Ne,{selectedChapters:c,onClose:j})}):t.firstUnreadChapter?e.jsx(Nt,{chapter:t.firstUnreadChapter}):null},[I]);return y||E&&r?e.jsx(p,{sx:{justifyContent:"center",alignItems:"center",position:"relative",flexGrow:1},children:e.jsx(fe,{})}):m?e.jsx(p,{sx:{justifyContent:"center",position:"relative",flexGrow:1},children:e.jsx($,{message:a("global.error.label.failed_to_load_data"),messageExtra:m.message,retry:()=>ye().catch(Be())})}):e.jsxs(e.Fragment,{children:[e.jsxs(p,{direction:"column",sx:{position:"relative",flexBasis:"60%"},children:[e.jsxs(Jt,{ref:f,direction:"row",alignItems:"center",justifyContent:"space-between",scrollbarWidth:x,children:[e.jsx(K,{variant:"h5",component:"h3",children:"".concat(S.length," ").concat(a("chapter.title_one",{count:S.length}))}),e.jsxs(p,{direction:"row",children:[e.jsx(C,{title:a("chapter.action.mark_as_read.add.label.action.current"),children:e.jsx(g,{disabled:Te,onClick:()=>V.markAsRead(ne.getChapters(ne.getNonRead(I)),!0,t.id),children:e.jsx(Pe,{})})}),e.jsx(xe,{variant:"popover",popupId:"chapterlist-download-button",children:c=>e.jsxs(e.Fragment,{children:[e.jsx(C,{title:a("chapter.action.download.add.label.action"),children:e.jsx(g,{disabled:Ie,...Q(c),children:e.jsx(ze,{})})}),c.isOpen&&e.jsx(ge,{...De(c),children:e.jsx(Ct,{mangaIds:[t.id],closeMenu:c.close})})]})}),e.jsx(Kt,{options:b,optionsDispatch:w}),e.jsx(gt,{areAllItemsSelected:we,areNoItemsSelected:te,onChange:c=>Se(c,c?k.map(j=>j.id):[])})]})]}),E&&e.jsx($,{message:a("chapter.error.label.no_chapter_found")}),Re&&e.jsx($,{message:a("chapter.error.label.no_matches")}),e.jsx(Xt,{topOffset:s+i,style:{height:"undefined"},components:{Footer:()=>e.jsx(be,{sx:{paddingBottom:ut}})},totalCount:S.length,computeItemKey:c=>S[c].id,itemContent:c=>e.jsx(He,{...I[c],allChapters:k,showChapterNumber:b.showChapterNumber,onSelect:(j,N)=>Me(I[c].chapter.id,j,{selectRange:N})}),useWindowScroll:n,overscan:window.innerHeight*.5})]}),Fe]})},er=t=>{const[r,a]=u.useState(!1),[s,n]=u.useState(null);return[u.useCallback(async()=>{a(!0),n(null),await Promise.all([T.getMangaFetch(t,{awaitRefetchQueries:!0}).response,T.getMangaChaptersFetch(t,{awaitRefetchQueries:!0}).response]).catch(o=>{o instanceof Ge&&Ve(o.message)==="no chapters found"||n(o)}).finally(()=>a(!1))},[t]),{loading:r,error:s}]};var X={},tr=O;Object.defineProperty(X,"__esModule",{value:!0});var Ce=X.default=void 0,rr=tr(A()),ar=e;Ce=X.default=(0,rr.default)((0,ar.jsx)("path",{d:"M21 11V3h-8l3.29 3.29-10 10L3 13v8h8l-3.29-3.29 10-10z"}),"OpenInFull");var Z={},sr=O;Object.defineProperty(Z,"__esModule",{value:!0});var ve=Z.default=void 0,nr=sr(A()),or=e;ve=Z.default=(0,nr.default)((0,or.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"}),"ContentCopy");var ee={},lr=O;Object.defineProperty(ee,"__esModule",{value:!0});var _e=ee.default=void 0,ir=lr(A()),cr=e;_e=ee.default=(0,ir.default)((0,cr.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");const dr=({manga:t})=>{var x,h;const{t:r}=v(),a=We(),s=T.useGetTrackerList(qe),n=(h=(x=s.data)==null?void 0:x.trackers.nodes)!=null?h:[],i=t.trackRecords.nodes,o=H.getLoggedIn(n),d=H.getLoggedIn(H.getTrackers(i,n)),f=l=>{if(s.error){W(r("tracking.error.label.could_not_load_track_info"),"error");return}if(!o.length){a(q.tracker.path);return}l()};return e.jsx(xe,{variant:"dialog",popupId:"manga-track-modal",children:l=>e.jsxs(e.Fragment,{children:[e.jsxs(Y,{...Q(l),size:"medium",disabled:s.loading||!!s.error,onClick:()=>f(l.open),onTouchStart:()=>f(l.open),variant:d.length?"contained":"outlined",children:[d.length?e.jsx(_e,{}):e.jsx(Lt,{}),d.length?r("manga.button.track.active",{count:d.length}):r("manga.button.track.start")]}),e.jsx(Ue,{...Ke(l),maxWidth:"md",fullWidth:!0,scroll:"paper",children:e.jsx(vt,{manga:t})})]})})},ur=M("div")(({theme:t})=>({display:"flex",flexDirection:"column",gap:t.spacing(2),padding:t.spacing(1),[t.breakpoints.up("md")]:{flexBasis:"40%",height:"calc(100vh - 64px)",overflowY:"auto"}})),hr=M("div",{shouldForwardProp:U(["url","mangaThumbnailBackdrop"])})(({theme:t,url:r,mangaThumbnailBackdrop:a})=>({position:"relative",backgroundImage:a?"url(".concat(r,")"):void 0,backgroundRepeat:a?"no-repeat":void 0,backgroundSize:a?"cover":void 0,borderRadius:a?t.shape.borderRadius:void 0,"&::before":a&&{position:"absolute",display:"inline-block",content:'""',top:0,left:0,width:"100%",height:"100%",background:"linear-gradient(to top, ".concat(t.palette.background.default,", transparent 100%, transparent 1px),linear-gradient(to right, ").concat(t.palette.background.default,", transparent 50%, transparent 1px),linear-gradient(to bottom, ").concat(t.palette.background.default,", transparent 50%, transparent 1px),linear-gradient(to left, ").concat(t.palette.background.default,", transparent 50%, transparent 1px)"),backdropFilter:"blur(4.5px) brightness(0.75)"}})),pr=M("div")(({theme:t})=>({display:"flex",paddingBottom:t.spacing(1)})),fr=M("div")(({theme:t})=>({zIndex:1,marginLeft:t.spacing(1)})),L=t=>e.jsx(kt,{...t}),xr=M("div")(({theme:t})=>({display:"flex",gap:t.spacing(1)})),gr=({url:t})=>{const{t:r}=v();return e.jsx(C,{title:r("global.button.open_site"),children:e.jsx(Y,{size:"medium",disabled:!t,component:Ye,href:t!=null?t:void 0,target:"_blank",rel:"noreferrer",variant:"outlined",children:e.jsx(Je,{})})})};function br(t){var a;return t?Number(t.id)===0?R("source.local_source.title"):(a=t.displayName)!=null?a:t.id:R("global.label.unknown")}function ue(t){return t!=null?t:R("global.label.unknown")}const mr=({manga:t})=>{const r=me(),a=Xe({variant:"popover",popupId:"manga-thumbnail-fullscreen"}),[s,n]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs(p,{sx:{position:"relative",borderRadius:1,overflow:"hidden",backgroundColor:"background.paper",width:"150px",maxHeight:"fit-content",aspectRatio:Tt,flexShrink:0,flexGrow:0,[r.breakpoints.up("lg")]:{width:"200px"},[r.breakpoints.up("xl")]:{width:"300px"}},children:[e.jsx(oe,{src:F.getThumbnailUrl(t),alt:"Manga Thumbnail",onLoad:()=>n(!0),imgStyle:{width:"100%",height:"100%",objectFit:"cover"}}),s&&e.jsx(p,{...Q(a),sx:{position:"absolute",top:0,bottom:0,width:"100%",justifyContent:"center",alignItems:"center",opacity:0,"&:hover":{background:"rgba(0, 0, 0, 0.4)",cursor:"pointer",opacity:1}},children:e.jsx(Ce,{fontSize:"large",color:"primary"})})]}),e.jsx(Ze,{...et(a),sx:{outline:0},children:e.jsx(p,{onClick:()=>a.close(),sx:{height:"100vh",p:2,outline:0,justifyContent:"center",alignItems:"center"},children:e.jsx(oe,{src:F.getThumbnailUrl(t),alt:"Manga Thumbnail",imgStyle:{height:"100%",width:"100%",objectFit:"contain"}})})})]})},he=75,jr=({manga:{description:t,genre:r}})=>{const[a,s]=u.useState(null),[n,i]=u.useState();pe(a,u.useCallback(()=>i(a==null?void 0:a.clientHeight),[a]));const[o,d]=tt("isDescriptionGenreCollapsed",!0),f=t?Math.min(he,n!=null?n:he):0,x=u.useMemo(()=>r.filter(Boolean),[r]);return e.jsxs(e.Fragment,{children:[t&&e.jsxs(p,{sx:{position:"relative"},children:[e.jsx(wt,{collapsedSize:f,in:!o,children:e.jsx(K,{ref:s,style:{whiteSpace:"pre-line",textAlign:"justify",textJustify:"inter-word"},children:t})}),e.jsx(p,{onClick:()=>d(!o),sx:{pt:1,alignItems:"center",cursor:"pointer",position:o?"absolute":null,width:"100%",bottom:0,background:h=>"linear-gradient(transparent 1px, ".concat(h.palette.background.default,")")},children:e.jsx(g,{sx:{color:h=>h.palette.mode==="light"?"black":"text"},children:o?e.jsx(Rt,{}):e.jsx(Ft,{})})})]}),e.jsx(p,{sx:{flexDirection:"row",flexWrap:o?"no-wrap":"wrap",gap:1,overflowX:o?"auto":null},children:x.map(h=>e.jsx($t,{label:h,variant:"outlined"},h))})]})},Cr=({manga:t})=>{const{t:r}=v(),{settings:{mangaThumbnailBackdrop:a}}=Qe();u.useEffect(()=>{t.source||W(R("source.error.label.source_not_found"),"error")},[t.source]);const{CategorySelectComponent:s,updateLibraryState:n}=_t(t),i=async()=>{try{await navigator.clipboard.writeText(t.title),W(r("global.label.copied_clipboard"),"info")}catch(o){}};return e.jsxs(e.Fragment,{children:[e.jsxs(ur,{children:[e.jsxs(hr,{url:F.getThumbnailUrl(t),mangaThumbnailBackdrop:a,children:[e.jsxs(pr,{children:[e.jsx(mr,{manga:t}),e.jsxs(fr,{children:[e.jsxs(p,{sx:{flexDirection:"row",gap:1,alignItems:"flex-start",mb:1},children:[e.jsx(K,{variant:"h5",component:"h2",sx:{wordBreak:"break-word"},children:t.title}),e.jsx(C,{title:r("global.button.copy"),children:e.jsx(g,{onClick:i,color:"inherit",children:e.jsx(ve,{fontSize:"small"})})})]}),e.jsx(L,{title:r("manga.label.author"),value:ue(t.author)}),e.jsx(L,{title:r("manga.label.artist"),value:ue(t.artist)}),e.jsx(L,{title:r("manga.label.status"),value:r(Mt[t.status])}),e.jsx(L,{title:r("source.title_one"),value:br(t.source)})]})]}),e.jsxs(xr,{children:[e.jsxs(Y,{size:"medium",onClick:n,variant:t.inLibrary?"contained":"outlined",children:[t.inLibrary?e.jsx(It,{}):e.jsx(yt,{}),t.inLibrary?r("manga.button.in_library"):r("manga.button.add_to_library")]}),e.jsx(dr,{manga:t}),e.jsx(gr,{url:t.realUrl})]})]}),e.jsx(jr,{manga:t})]}),s]})},vr=({manga:t,onRefresh:r,refreshing:a})=>{const{t:s}=v(),n=me(),i=rt(n.breakpoints.up("sm")),[o,d]=at.useState(null),f=!!o,x=()=>{d(null)},{openCategorySelect:h,CategorySelectComponent:l}=St({mangaId:t.id});return e.jsxs(e.Fragment,{children:[i&&e.jsxs(e.Fragment,{children:[e.jsx(C,{title:s("manga.label.reload_from_source"),children:e.jsx(g,{onClick:()=>{r()},disabled:a,color:"inherit",children:e.jsx(le,{})})}),t.inLibrary&&e.jsxs(e.Fragment,{children:[e.jsx(C,{title:s("global.button.migrate"),children:e.jsx(G,{to:"".concat(q.migrate.childRoutes.search.path(t.sourceId,t.id),"?query=").concat(t.title),state:{mangaTitle:t.title},style:{textDecoration:"none",color:"inherit"},children:e.jsx(g,{color:"inherit",children:e.jsx(ce,{})})})}),e.jsx(C,{title:s("manga.label.edit_categories"),children:e.jsx(g,{onClick:()=>{h(!0)},color:"inherit",children:e.jsx(de,{})})})]})]}),!i&&e.jsxs(e.Fragment,{children:[e.jsx(g,{id:"chaptersMenuButton","aria-controls":f?"chaptersMenu":void 0,"aria-haspopup":"true","aria-expanded":f?"true":void 0,onClick:b=>d(b.currentTarget),color:"inherit",children:e.jsx(bt,{})}),e.jsxs(ge,{id:"chaptersMenu",anchorEl:o,open:f,onClose:x,MenuListProps:{"aria-labelledby":"chaptersMenuButton"},children:[e.jsxs(B,{onClick:()=>{r(),x()},disabled:a,children:[e.jsx(P,{children:e.jsx(le,{fontSize:"small"})}),e.jsx(z,{children:s("manga.label.reload_from_source")})]}),t.inLibrary&&[e.jsxs(B,{component:G,to:"".concat(q.migrate.childRoutes.search.path(t.sourceId,t.id),"?query=").concat(t.title),state:{mangaTitle:t.title},style:{textDecoration:"none",color:"inherit"},children:[e.jsx(P,{children:e.jsx(ce,{fontSize:"small"})}),e.jsx(z,{children:s("migrate.title")})]},"migrate"),e.jsxs(B,{onClick:()=>{h(!0),x()},children:[e.jsx(P,{children:e.jsx(de,{fontSize:"small"})}),e.jsx(z,{children:s("manga.label.edit_categories")})]},"categories")]]})]}),l]})},Dr=()=>{const{t}=v(),{setTitle:r,setAction:a}=u.useContext(st),{id:s}=nt(),n=u.useRef(!1),{data:i,error:o,loading:d,networkStatus:f,refetch:x}=T.useGetManga(ot,s),h=it(f),l=i==null?void 0:i.manga,[b,{loading:w,error:_}]=er(s),y=o!=null?o:_;return u.useEffect(()=>{if(l==null)return;!n.current&&!l.initialized&&(n.current=!0,b())},[l]),u.useLayoutEffect(()=>{var m;return r((m=l==null?void 0:l.title)!=null?m:t("manga.title_one")),a(null),()=>{r(""),a(null)}},[t,l==null?void 0:l.title]),u.useLayoutEffect(()=>{var m;return a(e.jsxs(p,{direction:"row",sx:{alignItems:"center"},children:[y&&!h&&!w&&e.jsx(C,{title:e.jsxs(e.Fragment,{children:[t("manga.error.label.request_failure"),e.jsx("br",{}),(m=y.message)!=null?m:y]}),children:e.jsx(g,{onClick:()=>x(),children:e.jsx(je,{color:"error"})})}),l&&(w||h)&&e.jsx(g,{disabled:!0,children:e.jsx(lt,{size:16})}),l&&e.jsx(vr,{manga:l,onRefresh:b,refreshing:w})]})),()=>{a(null)}},[t,y,h,w,l,b]),y&&!l?e.jsx($,{message:t("manga.error.label.request_failure"),messageExtra:y.message}):e.jsxs(be,{sx:{display:{md:"flex"},overflow:"hidden"},children:[d&&e.jsx(fe,{}),l&&e.jsx(Cr,{manga:l}),l&&e.jsx(Zt,{manga:l,isRefreshing:w})]})};export{Dr as Manga};
