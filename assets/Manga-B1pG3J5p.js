import{r as A,i as E,j as e,u as C,L as G,a7 as V,f as u,k as j,I as b,a8 as Ae,a9 as I,a2 as w,d as f,aa as K,V as Ee,q as Ne,M as ne,D as fe,c as T,ab as Oe,ac as Be,l as xe,E as $,m as W,n as Pe,T as Q,ad as oe,ae as De,af as ge,ag as Y,ah as ze,ai as be,aj as He,B as me,ak as Ge,al as Ve,am as We,h as qe,R as Ue,an as J,ao as Ke,ap as Qe,o as q,A as U,s as Ye,aq as Je,ar as Xe,as as je,at as Ze,S as le,au as et,av as tt,g as rt,aw as at,ax as st,P as ie,ay as B,az as P,aA as D,N as nt,aB as ot,aC as lt,aD as it,aE as ct}from"./index-DU51TenU.js";import{d as dt}from"./PlayArrow-DAK-k5tf.js";import{S as ut,D as ht}from"./StyledFab-BMHInxb1.js";import{d as pt}from"./FilterList-C5_2Ef_u.js";import{S as ft,R as ce}from"./SortRadioInput-DbgMadr3.js";import{T as z}from"./ThreeStateCheckboxInput-DU5aaTj5.js";import{O as xt,a as gt,S as bt,d as mt}from"./SelectionFAB-C4EaWGl6.js";import{R as jt}from"./ListPreference-lmqny-zy.js";import{u as Ct,C as vt,T as _t,a as yt,d as kt,M as St,b as wt,c as Mt,e as de,f as ue}from"./useManageMangaLibraryState-B6a6Yvuk.js";import{M as F,s as Tt,a as Rt}from"./Mangas-B0zberX4.js";import{d as It,a as Ft,b as Lt}from"./ExpandMore-DCNeaXCj.js";import{d as $t}from"./Sync-BpiBGZ__.js";import{T as H}from"./Trackers-D4pSmk7a.js";import{C as At}from"./Chip-BejE5hGD.js";import"./Avatar-CpZBWiSm.js";import"./Info-yh-TQoaT.js";import"./TextField-DeB6wrZP.js";import"./InputAdornment-CFW10Y78.js";import"./CheckCircle-CmWT6i6e.js";import"./NumberSetting-CqDEqpp7.js";import"./useMobilePicker-C-kmpNcM.js";import"./SelectSetting-5sRwo4QJ.js";var X={},Et=E;Object.defineProperty(X,"__esModule",{value:!0});var Ce=X.default=void 0,Nt=Et(A()),Ot=e;Ce=X.default=(0,Nt.default)((0,Ot.jsx)("path",{d:"M1 21h22L12 2zm12-3h-2v-2h2zm0-4h-2v-4h2z"}),"Warning");function Bt({chapter:t}){const{t:r}=C(),{sourceOrder:a}=t;return e.jsxs(ut,{component:G,variant:"extended",color:"primary",to:V.getReaderUrl(t),state:{resumeMode:V.getReaderResumeMode(t)},children:[e.jsx(dt,{}),r(a===1?"global.button.start":"global.button.resume")]})}function Pt(t,{isRead:r}){switch(t){case!0:return!r;case!1:return r;default:return!0}}function Dt(t,{isDownloaded:r}){switch(t){case!0:return r;case!1:return!r;default:return!0}}function zt(t,{isBookmarked:r}){switch(t){case!0:return r;case!1:return!r;default:return!0}}const Ht=(t,{sortBy:r,reverse:a})=>{const s=[...t];switch(r){case"source":s.sort((n,i)=>n.sourceOrder-i.sourceOrder);break;case"fetchedAt":s.sort((n,i)=>{var o,d;return Number((o=n.fetchedAt)!=null?o:0)-Number((d=i.fetchedAt)!=null?d:0)});break;case"chapterNumber":s.sort((n,i)=>n.chapterNumber-i.chapterNumber);break;case"uploadedAt":s.sort((n,i)=>{var o,d;return Number((o=n.uploadDate)!=null?o:0)-Number((d=i.uploadDate)!=null?d:0)});break}return a&&s.reverse(),s};function Gt(t,r){const a=r.active?t.filter(s=>Pt(r.unread,s)&&Dt(r.downloaded,s)&&zt(r.bookmarked,s)):[...t];return Ht(a,r)}const Vt=t=>{const{unread:r,downloaded:a,bookmarked:s}=t;return r!=null||a!=null||s!=null},Wt={active:!1,unread:void 0,downloaded:void 0,bookmarked:void 0,reverse:!0,sortBy:"source",showChapterNumber:!1},qt={source:"global.sort.label.by_source",chapterNumber:"global.sort.label.by_chapter_number",uploadedAt:"global.sort.label.by_upload_date",fetchedAt:"global.sort.label.by_fetch_date"},Ut={filter:"global.label.filter",sort:"global.label.sort",display:"global.label.display"},Kt=({open:t,onClose:r,options:a,optionsDispatch:s})=>{const{t:n}=C();return e.jsx(xt,{open:t,onClose:r,minHeight:150,tabs:["filter","sort","display"],tabTitle:i=>n(Ut[i]),tabContent:i=>i==="filter"?e.jsxs(e.Fragment,{children:[e.jsx(z,{label:n("global.filter.label.unread"),checked:a.unread,onChange:o=>s({type:"filter",filterType:"unread",filterValue:o})}),e.jsx(z,{label:n("global.filter.label.downloaded"),checked:a.downloaded,onChange:o=>s({type:"filter",filterType:"downloaded",filterValue:o})}),e.jsx(z,{label:n("global.filter.label.bookmarked"),checked:a.bookmarked,onChange:o=>s({type:"filter",filterType:"bookmarked",filterValue:o})})]}):i==="sort"?Object.entries(qt).map(([o,d])=>e.jsx(ft,{label:n(d),checked:a.sortBy===o,sortDescending:a.reverse,onClick:()=>o!==a.sortBy?s({type:"sortBy",sortBy:o}):s({type:"sortReverse"})},o)):i==="display"?e.jsxs(jt,{onChange:()=>s({type:"showChapterNumber"}),value:a.showChapterNumber,children:[e.jsx(ce,{label:n("chapter.option.display.label.source_title"),value:!1}),e.jsx(ce,{label:n("chapter.option.display.label.chapter_number"),value:!0})]}):null})},Qt=({options:t,optionsDispatch:r})=>{const{t:a}=C(),[s,n]=u.useState(!1),i=Vt(t);return e.jsxs(e.Fragment,{children:[e.jsx(j,{title:a("settings.title"),children:e.jsx(b,{onClick:()=>n(!0),children:e.jsx(pt,{color:i?"warning":void 0})})}),e.jsx(Kt,{open:s,onClose:()=>n(!1),options:t,optionsDispatch:r})]})};function Yt(t,r){switch(r.type){case"filter":return{...t,active:t.unread!==!1&&t.downloaded!==!1&&t.bookmarked!==!1,[r.filterType]:r.filterValue};case"sortBy":return{...t,sortBy:r.sortBy};case"sortReverse":return{...t,reverse:!t.reverse};case"showChapterNumber":return{...t,showChapterNumber:!t.showChapterNumber};default:throw Error(I("global.error.label.invalid_action"))}}const Jt=t=>Ae(Yt,"".concat(t,"filterOptions"),Wt),Xt=w(f,{shouldForwardProp:K(["scrollbarWidth"])})(({theme:t,scrollbarWidth:r})=>({padding:t.spacing(1),paddingRight:"calc(".concat(r,"px + ").concat(t.spacing(1),")"),paddingBottom:0,[t.breakpoints.down("md")]:{paddingRight:t.spacing(1)}})),Zt=w(Ee,{shouldForwardProp:K(["topOffset"])})(({theme:t,topOffset:r})=>({listStyle:"none",padding:0,[t.breakpoints.up("md")]:{height:"calc(100vh - ".concat(r,"px)"),margin:0}})),er=({manga:t,isRefreshing:r})=>{var se;const{t:a}=C(),{appBarHeight:s}=Ne(),n=ne.useIsBelowWidth("md"),[i,o]=u.useState(50),[d,x]=u.useState(null);fe(d,u.useCallback(()=>{var c;return o((c=d==null?void 0:d.offsetHeight)!=null?c:0)},[d]));const g=ne.useGetScrollbarSize("width"),{data:h}=T.useGetDownloadStatus(),l=(se=h==null?void 0:h.downloadStatus.queue)!=null?se:[],[p,y]=Jt(t.id),{data:v,loading:k,error:M,refetch:ke}=T.useGetMangaChapters(Oe,t.id,{notifyOnNetworkStatusChange:!0}),_=u.useMemo(()=>{var c;return(c=v==null?void 0:v.chapters.nodes)!=null?c:[]},[v==null?void 0:v.chapters.nodes]),Se=u.useMemo(()=>_.map(c=>c.id),[_]),{areNoItemsSelected:re,areAllItemsSelected:we,selectedItemIds:ae,handleSelectAll:Me,handleSelection:Te}=Ct(_.length,{itemIds:Se,currentKey:"default"}),S=u.useMemo(()=>Gt(_,p),[_,p]),Re=F.isFullyRead(t),Ie=F.isFullyDownloaded(t),N=_.length===0,Fe=!N&&S.length===0,R=u.useMemo(()=>S.map(c=>{const m=l==null?void 0:l.find($e=>$e.chapter.id===c.id),O=re?null:ae.includes(c.id);return{chapter:c,downloadChapter:m,selected:O}}),[l,ae,S]),Le=u.useMemo(()=>{const c=R.filter(m=>m.selected);return c.length?e.jsx(gt,{selectedItemsCount:c.length,title:"chapter.title_one",children:m=>e.jsx(Be,{selectedChapters:c,onClose:m})}):t.firstUnreadChapter?e.jsx(Bt,{chapter:t.firstUnreadChapter}):null},[R]);return k||N&&r?e.jsx(f,{sx:{justifyContent:"center",alignItems:"center",position:"relative",flexGrow:1},children:e.jsx(xe,{})}):M?e.jsx(f,{sx:{justifyContent:"center",position:"relative",flexGrow:1},children:e.jsx($,{message:a("global.error.label.failed_to_load_data"),messageExtra:W(M),retry:()=>ke().catch(Pe())})}):e.jsxs(e.Fragment,{children:[e.jsxs(f,{direction:"column",sx:{position:"relative",flexBasis:"60%"},children:[e.jsxs(Xt,{ref:x,direction:"row",alignItems:"center",justifyContent:"space-between",scrollbarWidth:g,children:[e.jsx(Q,{variant:"h5",component:"h3",children:"".concat(S.length," ").concat(a("chapter.title_one",{count:S.length}))}),e.jsxs(f,{direction:"row",children:[e.jsx(j,{title:a("chapter.action.mark_as_read.add.label.action.current"),children:e.jsx(b,{disabled:Re,onClick:()=>V.markAsRead(oe.getChapters(oe.getNonRead(R)),!0,t.id),children:e.jsx(De,{})})}),e.jsx(ge,{variant:"popover",popupId:"chapterlist-download-button",children:c=>e.jsxs(e.Fragment,{children:[e.jsx(j,{title:a("chapter.action.download.add.label.action"),children:e.jsx(b,{disabled:Ie,...Y(c),children:e.jsx(ze,{})})}),c.isOpen&&e.jsx(be,{...He(c),children:e.jsx(vt,{mangaIds:[t.id],closeMenu:c.close})})]})}),e.jsx(Qt,{options:p,optionsDispatch:y}),e.jsx(bt,{areAllItemsSelected:we,areNoItemsSelected:re,onChange:c=>Me(c,c?_.map(m=>m.id):[])})]})]}),N&&e.jsx($,{message:a("chapter.error.label.no_chapter_found")}),Fe&&e.jsx($,{message:a("chapter.error.label.no_matches")}),e.jsx(Zt,{topOffset:s+i,style:{height:"undefined"},components:{Footer:()=>e.jsx(me,{sx:{paddingBottom:ht}})},totalCount:S.length,computeItemKey:c=>S[c].id,itemContent:c=>e.jsx(Ge,{...R[c],allChapters:_,showChapterNumber:p.showChapterNumber,onSelect:(m,O)=>Te(R[c].chapter.id,m,{selectRange:O})}),useWindowScroll:n,overscan:window.innerHeight*.5})]}),Le]})},tr=t=>{const[r,a]=u.useState(!1),[s,n]=u.useState(null);return[u.useCallback(async()=>{a(!0),n(null),await Promise.all([T.getMangaFetch(t,{awaitRefetchQueries:!0}).response,T.getMangaChaptersFetch(t,{awaitRefetchQueries:!0}).response]).catch(o=>{o instanceof Ve&&We(o.message)==="no chapters found"||n(o)}).finally(()=>a(!1))},[t]),{loading:r,error:s}]};var Z={},rr=E;Object.defineProperty(Z,"__esModule",{value:!0});var ve=Z.default=void 0,ar=rr(A()),sr=e;ve=Z.default=(0,ar.default)((0,sr.jsx)("path",{d:"M21 11V3h-8l3.29 3.29-10 10L3 13v8h8l-3.29-3.29 10-10z"}),"OpenInFull");var ee={},nr=E;Object.defineProperty(ee,"__esModule",{value:!0});var _e=ee.default=void 0,or=nr(A()),lr=e;_e=ee.default=(0,or.default)((0,lr.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"}),"ContentCopy");var te={},ir=E;Object.defineProperty(te,"__esModule",{value:!0});var ye=te.default=void 0,cr=ir(A()),dr=e;ye=te.default=(0,cr.default)((0,dr.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");const ur=({manga:t})=>{var g,h;const{t:r}=C(),a=qe(),s=T.useGetTrackerList(Ue),n=(h=(g=s.data)==null?void 0:g.trackers.nodes)!=null?h:[],i=t.trackRecords.nodes,o=H.getLoggedIn(n),d=H.getLoggedIn(H.getTrackers(i,n)),x=l=>{var p;if(s.error){q(r("tracking.error.label.could_not_load_track_info"),"error",(p=s.error)==null?void 0:p.toString());return}if(!o.length){a(U.tracker.path);return}l()};return e.jsx(ge,{variant:"dialog",popupId:"manga-track-modal",children:l=>e.jsxs(e.Fragment,{children:[e.jsxs(J,{...Y(l),size:"medium",disabled:s.loading||!!s.error,onClick:()=>x(l.open),onTouchStart:()=>x(l.open),variant:d.length?"contained":"outlined",children:[d.length?e.jsx(ye,{}):e.jsx($t,{}),d.length?r("manga.button.track.active",{count:d.length}):r("manga.button.track.start")]}),e.jsx(Ke,{...Qe(l),maxWidth:"md",fullWidth:!0,scroll:"paper",children:e.jsx(_t,{manga:t})})]})})},hr=w("div")(({theme:t})=>({display:"flex",flexDirection:"column",gap:t.spacing(2),padding:t.spacing(1),[t.breakpoints.up("md")]:{flexBasis:"40%",height:"calc(100vh - 64px)",overflowY:"auto"}})),pr=w("div",{shouldForwardProp:K(["url","mangaThumbnailBackdrop"])})(({theme:t,url:r,mangaThumbnailBackdrop:a})=>({position:"relative",backgroundImage:a?"url(".concat(r,")"):void 0,backgroundRepeat:a?"no-repeat":void 0,backgroundSize:a?"cover":void 0,borderRadius:a?t.shape.borderRadius:void 0,"&::before":a&&{position:"absolute",display:"inline-block",content:'""',top:0,left:0,width:"100%",height:"100%",background:"linear-gradient(to top, ".concat(t.palette.background.default,", transparent 100%, transparent 1px),linear-gradient(to right, ").concat(t.palette.background.default,", transparent 50%, transparent 1px),linear-gradient(to bottom, ").concat(t.palette.background.default,", transparent 50%, transparent 1px),linear-gradient(to left, ").concat(t.palette.background.default,", transparent 50%, transparent 1px)"),backdropFilter:"blur(4.5px) brightness(0.75)"}})),fr=w("div")(({theme:t})=>({display:"flex",paddingBottom:t.spacing(1)})),xr=w("div")(({theme:t})=>({zIndex:1,marginLeft:t.spacing(1)})),L=t=>e.jsx(St,{...t}),gr=w("div")(({theme:t})=>({display:"flex",gap:t.spacing(1)})),br=({url:t})=>{const{t:r}=C();return e.jsx(j,{title:r("global.button.open_site"),children:e.jsx(J,{size:"medium",disabled:!t,component:Je,href:t!=null?t:void 0,target:"_blank",rel:"noreferrer",variant:"outlined",children:e.jsx(Xe,{})})})};function mr(t){var a;return t?Number(t.id)===0?I("source.local_source.title"):(a=t.displayName)!=null?a:t.id:I("global.label.unknown")}function he(t){return t!=null?t:I("global.label.unknown")}const jr=({manga:t})=>{const r=je(),a=Ze({variant:"popover",popupId:"manga-thumbnail-fullscreen"}),[s,n]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs(f,{sx:{position:"relative",borderRadius:1,overflow:"hidden",backgroundColor:"background.paper",width:"150px",maxHeight:"fit-content",aspectRatio:Rt,flexShrink:0,flexGrow:0,[r.breakpoints.up("lg")]:{width:"200px"},[r.breakpoints.up("xl")]:{width:"300px"}},children:[e.jsx(le,{src:F.getThumbnailUrl(t),alt:"Manga Thumbnail",onLoad:()=>n(!0),imgStyle:{width:"100%",height:"100%",objectFit:"cover"}}),s&&e.jsx(f,{...Y(a),sx:{position:"absolute",top:0,bottom:0,width:"100%",justifyContent:"center",alignItems:"center",opacity:0,"&:hover":{background:"rgba(0, 0, 0, 0.4)",cursor:"pointer",opacity:1}},children:e.jsx(ve,{fontSize:"large",color:"primary"})})]}),e.jsx(et,{...tt(a),sx:{outline:0},children:e.jsx(f,{onClick:()=>a.close(),sx:{height:"100vh",p:2,outline:0,justifyContent:"center",alignItems:"center"},children:e.jsx(le,{src:F.getThumbnailUrl(t),alt:"Manga Thumbnail",imgStyle:{height:"100%",width:"100%",objectFit:"contain"}})})})]})},pe=75,Cr=({manga:{description:t,genre:r}})=>{const[a,s]=u.useState(null),[n,i]=u.useState();fe(a,u.useCallback(()=>i(a==null?void 0:a.clientHeight),[a]));const[o,d]=rt("isDescriptionGenreCollapsed",!0),x=t?Math.min(pe,n!=null?n:pe):0,g=u.useMemo(()=>r.filter(Boolean),[r]);return e.jsxs(e.Fragment,{children:[t&&e.jsxs(f,{sx:{position:"relative"},children:[e.jsx(wt,{collapsedSize:x,in:!o,children:e.jsx(Q,{ref:s,style:{whiteSpace:"pre-line",textAlign:"justify",textJustify:"inter-word"},children:t})}),e.jsx(f,{onClick:()=>d(!o),sx:{pt:1,alignItems:"center",cursor:"pointer",position:o?"absolute":null,width:"100%",bottom:0,background:h=>"linear-gradient(transparent 1px, ".concat(h.palette.background.default,")")},children:e.jsx(b,{sx:{color:h=>h.palette.mode==="light"?"black":"text"},children:o?e.jsx(Ft,{}):e.jsx(Lt,{})})})]}),e.jsx(f,{sx:{flexDirection:"row",flexWrap:o?"no-wrap":"wrap",gap:1,overflowX:o?"auto":null},children:g.map(h=>e.jsx(At,{label:h,variant:"outlined"},h))})]})},vr=({manga:t})=>{const{t:r}=C(),{settings:{mangaThumbnailBackdrop:a}}=Ye();u.useEffect(()=>{t.source||q(I("source.error.label.source_not_found"),"error")},[t.source]);const{CategorySelectComponent:s,updateLibraryState:n}=yt(t),i=async()=>{try{await navigator.clipboard.writeText(t.title),q(r("global.label.copied_clipboard"),"info")}catch(o){}};return e.jsxs(e.Fragment,{children:[e.jsxs(hr,{children:[e.jsxs(pr,{url:F.getThumbnailUrl(t),mangaThumbnailBackdrop:a,children:[e.jsxs(fr,{children:[e.jsx(jr,{manga:t}),e.jsxs(xr,{children:[e.jsxs(f,{sx:{flexDirection:"row",gap:1,alignItems:"flex-start",mb:1},children:[e.jsx(Q,{variant:"h5",component:"h2",sx:{wordBreak:"break-word"},children:t.title}),e.jsx(j,{title:r("global.button.copy"),children:e.jsx(b,{onClick:i,color:"inherit",children:e.jsx(_e,{fontSize:"small"})})})]}),e.jsx(L,{title:r("manga.label.author"),value:he(t.author)}),e.jsx(L,{title:r("manga.label.artist"),value:he(t.artist)}),e.jsx(L,{title:r("manga.label.status"),value:r(Tt[t.status])}),e.jsx(L,{title:r("source.title_one"),value:mr(t.source)})]})]}),e.jsxs(gr,{children:[e.jsxs(J,{size:"medium",onClick:n,variant:t.inLibrary?"contained":"outlined",children:[t.inLibrary?e.jsx(It,{}):e.jsx(kt,{}),t.inLibrary?r("manga.button.in_library"):r("manga.button.add_to_library")]}),e.jsx(ur,{manga:t}),e.jsx(br,{url:t.realUrl})]})]}),e.jsx(Cr,{manga:t})]}),s]})},_r=({manga:t,onRefresh:r,refreshing:a})=>{const{t:s}=C(),n=je(),i=at(n.breakpoints.up("sm")),[o,d]=st.useState(null),x=!!o,g=()=>{d(null)},{openCategorySelect:h,CategorySelectComponent:l}=Mt({mangaId:t.id});return e.jsxs(e.Fragment,{children:[i&&e.jsxs(e.Fragment,{children:[e.jsx(j,{title:s("manga.label.reload_from_source"),children:e.jsx(b,{onClick:()=>{r()},disabled:a,color:"inherit",children:e.jsx(ie,{})})}),t.inLibrary&&e.jsxs(e.Fragment,{children:[e.jsx(j,{title:s("global.button.migrate"),children:e.jsx(G,{to:"".concat(U.migrate.childRoutes.search.path(t.sourceId,t.id),"?query=").concat(t.title),state:{mangaTitle:t.title},style:{textDecoration:"none",color:"inherit"},children:e.jsx(b,{color:"inherit",children:e.jsx(de,{})})})}),e.jsx(j,{title:s("manga.label.edit_categories"),children:e.jsx(b,{onClick:()=>{h(!0)},color:"inherit",children:e.jsx(ue,{})})})]})]}),!i&&e.jsxs(e.Fragment,{children:[e.jsx(b,{id:"chaptersMenuButton","aria-controls":x?"chaptersMenu":void 0,"aria-haspopup":"true","aria-expanded":x?"true":void 0,onClick:p=>d(p.currentTarget),color:"inherit",children:e.jsx(mt,{})}),e.jsxs(be,{id:"chaptersMenu",anchorEl:o,open:x,onClose:g,MenuListProps:{"aria-labelledby":"chaptersMenuButton"},children:[e.jsxs(B,{onClick:()=>{r(),g()},disabled:a,children:[e.jsx(P,{children:e.jsx(ie,{fontSize:"small"})}),e.jsx(D,{children:s("manga.label.reload_from_source")})]}),t.inLibrary&&[e.jsxs(B,{component:G,to:"".concat(U.migrate.childRoutes.search.path(t.sourceId,t.id),"?query=").concat(t.title),state:{mangaTitle:t.title},style:{textDecoration:"none",color:"inherit"},children:[e.jsx(P,{children:e.jsx(de,{fontSize:"small"})}),e.jsx(D,{children:s("migrate.title")})]},"migrate"),e.jsxs(B,{onClick:()=>{h(!0),g()},children:[e.jsx(P,{children:e.jsx(ue,{fontSize:"small"})}),e.jsx(D,{children:s("manga.label.edit_categories")})]},"categories")]]})]}),l]})},Wr=()=>{const{t}=C(),{setTitle:r,setAction:a}=u.useContext(nt),{id:s}=ot(),n=u.useRef(!1),{data:i,error:o,loading:d,networkStatus:x,refetch:g}=T.useGetManga(lt,s),h=ct(x),l=i==null?void 0:i.manga,[p,{loading:y,error:v}]=tr(s),k=o!=null?o:v;return u.useEffect(()=>{if(l==null)return;!n.current&&!l.initialized&&(n.current=!0,p())},[l]),u.useLayoutEffect(()=>{var M;return r((M=l==null?void 0:l.title)!=null?M:t("manga.title_one")),a(null),()=>{r(""),a(null)}},[t,l==null?void 0:l.title]),u.useLayoutEffect(()=>(a(e.jsxs(f,{direction:"row",sx:{alignItems:"center"},children:[k&&!h&&!y&&e.jsx(j,{title:e.jsxs(e.Fragment,{children:[t("manga.error.label.request_failure"),e.jsx("br",{}),W(k)]}),children:e.jsx(b,{onClick:()=>g(),children:e.jsx(Ce,{color:"error"})})}),l&&(y||h)&&e.jsx(b,{disabled:!0,children:e.jsx(it,{size:16})}),l&&e.jsx(_r,{manga:l,onRefresh:p,refreshing:y})]})),()=>{a(null)}),[t,k,h,y,l,p]),k&&!l?e.jsx($,{message:t("manga.error.label.request_failure"),messageExtra:W(k)}):e.jsxs(me,{sx:{display:{md:"flex"},overflow:"hidden"},children:[d&&e.jsx(xe,{}),l&&e.jsx(vr,{manga:l}),l&&e.jsx(er,{manga:l,isRefreshing:y})]})};export{Wr as Manga};
