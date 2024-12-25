import{c as E,j as e,u as C,L as $,a6 as G,f as u,i as j,I as f,a7 as ve,a8 as R,a1 as I,d as x,a9 as q,V as Ie,p as Me,M as ee,z as ce,r as T,aa as Te,ab as _e,k as de,E as A,l as V,m as Re,T as K,ac as te,ad as Fe,ae as ue,af as Q,ag as Le,ah as he,ai as Ae,B as pe,aj as Ee,ak as Ne,al as Oe,h as Be,P as ze,am as Y,an as Pe,ao as He,n as W,A as U,q as De,ap as $e,aq as Ge,ar as xe,as as Ve,S as re,at as We,au as Ue,g as qe,av as Ke,aw as Qe,R as se,ax as B,ay as z,az as P,N as Ye,aA as Je,aB as Xe,aC as Ze,aD as et}from"./index-BBxBRE3D.js";import{P as tt}from"./PlayArrow-DXcXBpYs.js";import{S as rt,D as st}from"./StyledFab-ROdVB3aj.js";import{F as at}from"./FilterList-CoLfjHa_.js";import{S as nt,R as ae}from"./SortRadioInput-BksfpXZC.js";import{T as H}from"./ThreeStateCheckboxInput-BdPmTsJy.js";import{O as ot,a as lt,S as it,M as ct}from"./SelectionFAB-DTG_yJp4.js";import{R as dt}from"./ListPreference-CiABvY_8.js";import{u as ut,C as ht,T as pt,a as xt,F as gt,M as bt,b as ft,c as mt,S as ne,L as oe}from"./useManageMangaLibraryState-C5ZhDVal.js";import{M as F,s as jt,a as Ct}from"./Mangas-Crsv2nGq.js";import{F as kt,E as yt,a as wt}from"./ExpandMore-2p57ex1r.js";import{S as St}from"./Sync-By9unYgF.js";import{T as D}from"./Trackers-D4pSmk7a.js";import{C as vt}from"./Chip-BRQNipLZ.js";import"./Avatar-DHY-7fs9.js";import"./Info-C37ROMPZ.js";import"./TextField-jroXO8C8.js";import"./InputAdornment-0PRAydS4.js";import"./CheckCircle-PcXQbJFy.js";import"./NumberSetting-Bc-eOI-L.js";import"./useMobilePicker-BO3Oa0F-.js";import"./SelectSetting-DHfv4Thi.js";const It=E(e.jsx("path",{d:"M1 21h22L12 2zm12-3h-2v-2h2zm0-4h-2v-4h2z"}),"Warning");function Mt({chapter:t}){const{t:r}=C(),{sourceOrder:s}=t;return e.jsxs(rt,{component:$,variant:"extended",color:"primary",to:G.getReaderUrl(t),state:{resumeMode:G.getReaderResumeMode(t)},children:[e.jsx(tt,{}),r(s===1?"global.button.start":"global.button.resume")]})}function Tt(t,{isRead:r}){switch(t){case!0:return!r;case!1:return r;default:return!0}}function _t(t,{isDownloaded:r}){switch(t){case!0:return r;case!1:return!r;default:return!0}}function Rt(t,{isBookmarked:r}){switch(t){case!0:return r;case!1:return!r;default:return!0}}const Ft=(t,{sortBy:r,reverse:s})=>{const a=[...t];switch(r){case"source":a.sort((n,i)=>n.sourceOrder-i.sourceOrder);break;case"fetchedAt":a.sort((n,i)=>{var o,d;return Number((o=n.fetchedAt)!=null?o:0)-Number((d=i.fetchedAt)!=null?d:0)});break;case"chapterNumber":a.sort((n,i)=>n.chapterNumber-i.chapterNumber);break;case"uploadedAt":a.sort((n,i)=>{var o,d;return Number((o=n.uploadDate)!=null?o:0)-Number((d=i.uploadDate)!=null?d:0)});break}return s&&a.reverse(),a};function Lt(t,r){const s=r.active?t.filter(a=>Tt(r.unread,a)&&_t(r.downloaded,a)&&Rt(r.bookmarked,a)):[...t];return Ft(s,r)}const At=t=>{const{unread:r,downloaded:s,bookmarked:a}=t;return r!=null||s!=null||a!=null},Et={active:!1,unread:void 0,downloaded:void 0,bookmarked:void 0,reverse:!0,sortBy:"source",showChapterNumber:!1},Nt={source:"global.sort.label.by_source",chapterNumber:"global.sort.label.by_chapter_number",uploadedAt:"global.sort.label.by_upload_date",fetchedAt:"global.sort.label.by_fetch_date"},Ot={filter:"global.label.filter",sort:"global.label.sort",display:"global.label.display"},Bt=({open:t,onClose:r,options:s,optionsDispatch:a})=>{const{t:n}=C();return e.jsx(ot,{open:t,onClose:r,minHeight:150,tabs:["filter","sort","display"],tabTitle:i=>n(Ot[i]),tabContent:i=>i==="filter"?e.jsxs(e.Fragment,{children:[e.jsx(H,{label:n("global.filter.label.unread"),checked:s.unread,onChange:o=>a({type:"filter",filterType:"unread",filterValue:o})}),e.jsx(H,{label:n("global.filter.label.downloaded"),checked:s.downloaded,onChange:o=>a({type:"filter",filterType:"downloaded",filterValue:o})}),e.jsx(H,{label:n("global.filter.label.bookmarked"),checked:s.bookmarked,onChange:o=>a({type:"filter",filterType:"bookmarked",filterValue:o})})]}):i==="sort"?Object.entries(Nt).map(([o,d])=>e.jsx(nt,{label:n(d),checked:s.sortBy===o,sortDescending:s.reverse,onClick:()=>o!==s.sortBy?a({type:"sortBy",sortBy:o}):a({type:"sortReverse"})},o)):i==="display"?e.jsxs(dt,{onChange:()=>a({type:"showChapterNumber"}),value:s.showChapterNumber,children:[e.jsx(ae,{label:n("chapter.option.display.label.source_title"),value:!1}),e.jsx(ae,{label:n("chapter.option.display.label.chapter_number"),value:!0})]}):null})},zt=({options:t,optionsDispatch:r})=>{const{t:s}=C(),[a,n]=u.useState(!1),i=At(t);return e.jsxs(e.Fragment,{children:[e.jsx(j,{title:s("settings.title"),children:e.jsx(f,{onClick:()=>n(!0),children:e.jsx(at,{color:i?"warning":void 0})})}),e.jsx(Bt,{open:a,onClose:()=>n(!1),options:t,optionsDispatch:r})]})};function Pt(t,r){switch(r.type){case"filter":return{...t,active:t.unread!==!1&&t.downloaded!==!1&&t.bookmarked!==!1,[r.filterType]:r.filterValue};case"sortBy":return{...t,sortBy:r.sortBy};case"sortReverse":return{...t,reverse:!t.reverse};case"showChapterNumber":return{...t,showChapterNumber:!t.showChapterNumber};default:throw Error(R("global.error.label.invalid_action"))}}const Ht=t=>ve(Pt,"".concat(t,"filterOptions"),Et),Dt=I(x,{shouldForwardProp:q(["scrollbarWidth"])})(({theme:t,scrollbarWidth:r})=>({padding:t.spacing(1),paddingRight:"calc(".concat(r,"px + ").concat(t.spacing(1),")"),paddingBottom:0,[t.breakpoints.down("md")]:{paddingRight:t.spacing(1)}})),$t=I(Ie,{shouldForwardProp:q(["topOffset"])})(({theme:t,topOffset:r})=>({listStyle:"none",padding:0,[t.breakpoints.up("md")]:{height:"calc(100vh - ".concat(r,"px)"),margin:0}})),Gt=({manga:t,isRefreshing:r})=>{var Z;const{t:s}=C(),{appBarHeight:a}=Me(),n=ee.useIsBelowWidth("md"),[i,o]=u.useState(50),[d,g]=u.useState(null);ce(d,u.useCallback(()=>{var c;return o((c=d==null?void 0:d.offsetHeight)!=null?c:0)},[d]));const b=ee.useGetScrollbarSize("width"),{data:h}=T.useGetDownloadStatus(),l=(Z=h==null?void 0:h.downloadStatus.queue)!=null?Z:[],[p,w]=Ht(t.id),{data:k,loading:S,error:M,refetch:ge}=T.useGetMangaChapters(Te,t.id,{notifyOnNetworkStatusChange:!0}),y=u.useMemo(()=>{var c;return(c=k==null?void 0:k.chapters.nodes)!=null?c:[]},[k==null?void 0:k.chapters.nodes]),be=u.useMemo(()=>y.map(c=>c.id),[y]),{areNoItemsSelected:J,areAllItemsSelected:fe,selectedItemIds:X,handleSelectAll:me,handleSelection:je}=ut(y.length,{itemIds:be,currentKey:"default"}),v=u.useMemo(()=>Lt(y,p),[y,p]),Ce=F.isFullyRead(t),ke=F.isFullyDownloaded(t),N=y.length===0,ye=!N&&v.length===0,_=u.useMemo(()=>v.map(c=>{const m=l==null?void 0:l.find(Se=>Se.chapter.id===c.id),O=J?null:X.includes(c.id);return{chapter:c,downloadChapter:m,selected:O}}),[l,X,v]),we=u.useMemo(()=>{const c=_.filter(m=>m.selected);return c.length?e.jsx(lt,{selectedItemsCount:c.length,title:"chapter.title_one",children:m=>e.jsx(_e,{selectedChapters:c,onClose:m})}):t.firstUnreadChapter?e.jsx(Mt,{chapter:t.firstUnreadChapter}):null},[_]);return S||N&&r?e.jsx(x,{sx:{justifyContent:"center",alignItems:"center",position:"relative",flexGrow:1},children:e.jsx(de,{})}):M?e.jsx(x,{sx:{justifyContent:"center",position:"relative",flexGrow:1},children:e.jsx(A,{message:s("global.error.label.failed_to_load_data"),messageExtra:V(M),retry:()=>ge().catch(Re())})}):e.jsxs(e.Fragment,{children:[e.jsxs(x,{direction:"column",sx:{position:"relative",flexBasis:"60%"},children:[e.jsxs(Dt,{ref:g,direction:"row",alignItems:"center",justifyContent:"space-between",scrollbarWidth:b,children:[e.jsx(K,{variant:"h5",component:"h3",children:"".concat(v.length," ").concat(s("chapter.title_one",{count:v.length}))}),e.jsxs(x,{direction:"row",children:[e.jsx(j,{title:s("chapter.action.mark_as_read.add.label.action.current"),children:e.jsx(f,{disabled:Ce,onClick:()=>G.markAsRead(te.getChapters(te.getNonRead(_)),!0,t.id),children:e.jsx(Fe,{})})}),e.jsx(ue,{variant:"popover",popupId:"chapterlist-download-button",children:c=>e.jsxs(e.Fragment,{children:[e.jsx(j,{title:s("chapter.action.download.add.label.action"),children:e.jsx(f,{disabled:ke,...Q(c),children:e.jsx(Le,{})})}),c.isOpen&&e.jsx(he,{...Ae(c),children:e.jsx(ht,{mangaIds:[t.id],closeMenu:c.close})})]})}),e.jsx(zt,{options:p,optionsDispatch:w}),e.jsx(it,{areAllItemsSelected:fe,areNoItemsSelected:J,onChange:c=>me(c,c?y.map(m=>m.id):[])})]})]}),N&&e.jsx(A,{message:s("chapter.error.label.no_chapter_found")}),ye&&e.jsx(A,{message:s("chapter.error.label.no_matches")}),e.jsx($t,{topOffset:a+i,style:{height:"undefined"},components:{Footer:()=>e.jsx(pe,{sx:{paddingBottom:st}})},totalCount:v.length,computeItemKey:c=>v[c].id,itemContent:c=>e.jsx(Ee,{..._[c],allChapters:y,showChapterNumber:p.showChapterNumber,onSelect:(m,O)=>je(_[c].chapter.id,m,{selectRange:O})}),useWindowScroll:n,overscan:window.innerHeight*.5})]}),we]})},Vt=t=>{const[r,s]=u.useState(!1),[a,n]=u.useState(null);return[u.useCallback(async()=>{s(!0),n(null),await Promise.all([T.getMangaFetch(t,{awaitRefetchQueries:!0}).response,T.getMangaChaptersFetch(t,{awaitRefetchQueries:!0}).response]).catch(o=>{o instanceof Ne&&Oe(o.message)==="no chapters found"||n(o)}).finally(()=>s(!1))},[t]),{loading:r,error:a}]},Wt=E(e.jsx("path",{d:"M21 11V3h-8l3.29 3.29-10 10L3 13v8h8l-3.29-3.29 10-10z"}),"OpenInFull"),Ut=E(e.jsx("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"}),"ContentCopy"),qt=E(e.jsx("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check"),Kt=({manga:t})=>{var b,h;const{t:r}=C(),s=Be(),a=T.useGetTrackerList(ze),n=(h=(b=a.data)==null?void 0:b.trackers.nodes)!=null?h:[],i=t.trackRecords.nodes,o=D.getLoggedIn(n),d=D.getLoggedIn(D.getTrackers(i,n)),g=l=>{var p;if(a.error){W(r("tracking.error.label.could_not_load_track_info"),"error",(p=a.error)==null?void 0:p.toString());return}if(!o.length){s(U.tracker.path);return}l()};return e.jsx(ue,{variant:"dialog",popupId:"manga-track-modal",children:l=>e.jsxs(e.Fragment,{children:[e.jsxs(Y,{...Q(l),size:"medium",disabled:a.loading||!!a.error,onClick:()=>g(l.open),onTouchStart:()=>g(l.open),variant:d.length?"contained":"outlined",children:[d.length?e.jsx(qt,{}):e.jsx(St,{}),d.length?r("manga.button.track.active",{count:d.length}):r("manga.button.track.start")]}),e.jsx(Pe,{...He(l),maxWidth:"md",fullWidth:!0,scroll:"paper",children:e.jsx(pt,{manga:t})})]})})},Qt=I("div")(({theme:t})=>({display:"flex",flexDirection:"column",gap:t.spacing(2),padding:t.spacing(1),[t.breakpoints.up("md")]:{flexBasis:"40%",height:"calc(100vh - 64px)",overflowY:"auto"}})),Yt=I("div",{shouldForwardProp:q(["url","mangaThumbnailBackdrop"])})(({theme:t,url:r,mangaThumbnailBackdrop:s})=>({position:"relative",backgroundImage:s?"url(".concat(r,")"):void 0,backgroundRepeat:s?"no-repeat":void 0,backgroundSize:s?"cover":void 0,borderRadius:s?t.shape.borderRadius:void 0,"&::before":s&&{position:"absolute",display:"inline-block",content:'""',top:0,left:0,width:"100%",height:"100%",background:"linear-gradient(to top, ".concat(t.palette.background.default,", transparent 100%, transparent 1px),linear-gradient(to right, ").concat(t.palette.background.default,", transparent 50%, transparent 1px),linear-gradient(to bottom, ").concat(t.palette.background.default,", transparent 50%, transparent 1px),linear-gradient(to left, ").concat(t.palette.background.default,", transparent 50%, transparent 1px)"),backdropFilter:"blur(4.5px) brightness(0.75)"}})),Jt=I("div")(({theme:t})=>({display:"flex",paddingBottom:t.spacing(1)})),Xt=I("div")(({theme:t})=>({zIndex:1,marginLeft:t.spacing(1)})),L=t=>e.jsx(bt,{...t}),Zt=I("div")(({theme:t})=>({display:"flex",gap:t.spacing(1)})),er=({url:t})=>{const{t:r}=C();return e.jsx(j,{title:r("global.button.open_site"),children:e.jsx(Y,{size:"medium",disabled:!t,component:$e,href:t!=null?t:void 0,target:"_blank",rel:"noreferrer",variant:"outlined",children:e.jsx(Ge,{})})})};function tr(t){var s;return t?Number(t.id)===0?R("source.local_source.title"):(s=t.displayName)!=null?s:t.id:R("global.label.unknown")}function le(t){return t!=null?t:R("global.label.unknown")}const rr=({manga:t})=>{const r=xe(),s=Ve({variant:"popover",popupId:"manga-thumbnail-fullscreen"}),[a,n]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs(x,{sx:{position:"relative",borderRadius:1,overflow:"hidden",backgroundColor:"background.paper",width:"150px",maxHeight:"fit-content",aspectRatio:Ct,flexShrink:0,flexGrow:0,[r.breakpoints.up("lg")]:{width:"200px"},[r.breakpoints.up("xl")]:{width:"300px"}},children:[e.jsx(re,{src:F.getThumbnailUrl(t),alt:"Manga Thumbnail",onLoad:()=>n(!0),imgStyle:{width:"100%",height:"100%",objectFit:"cover"}}),a&&e.jsx(x,{...Q(s),sx:{position:"absolute",top:0,bottom:0,width:"100%",justifyContent:"center",alignItems:"center",opacity:0,"&:hover":{background:"rgba(0, 0, 0, 0.4)",cursor:"pointer",opacity:1}},children:e.jsx(Wt,{fontSize:"large",color:"primary"})})]}),e.jsx(We,{...Ue(s),sx:{outline:0},children:e.jsx(x,{onClick:()=>s.close(),sx:{height:"100vh",p:2,outline:0,justifyContent:"center",alignItems:"center"},children:e.jsx(re,{src:F.getThumbnailUrl(t),alt:"Manga Thumbnail",imgStyle:{height:"100%",width:"100%",objectFit:"contain"}})})})]})},ie=75,sr=({manga:{description:t,genre:r}})=>{const[s,a]=u.useState(null),[n,i]=u.useState();ce(s,u.useCallback(()=>i(s==null?void 0:s.clientHeight),[s]));const[o,d]=qe("isDescriptionGenreCollapsed",!0),g=t?Math.min(ie,n!=null?n:ie):0,b=u.useMemo(()=>r.filter(Boolean),[r]);return e.jsxs(e.Fragment,{children:[t&&e.jsxs(x,{sx:{position:"relative"},children:[e.jsx(ft,{collapsedSize:g,in:!o,children:e.jsx(K,{ref:a,style:{whiteSpace:"pre-line",textAlign:"justify",textJustify:"inter-word"},children:t})}),e.jsx(x,{onClick:()=>d(!o),sx:{pt:1,alignItems:"center",cursor:"pointer",position:o?"absolute":null,width:"100%",bottom:0,background:h=>"linear-gradient(transparent 1px, ".concat(h.palette.background.default,")")},children:e.jsx(f,{sx:{color:h=>h.palette.mode==="light"?"black":"text"},children:o?e.jsx(yt,{}):e.jsx(wt,{})})})]}),e.jsx(x,{sx:{flexDirection:"row",flexWrap:o?"no-wrap":"wrap",gap:1,overflowX:o?"auto":null},children:b.map(h=>e.jsx(vt,{label:h,variant:"outlined"},h))})]})},ar=({manga:t})=>{const{t:r}=C(),{settings:{mangaThumbnailBackdrop:s}}=De();u.useEffect(()=>{t.source||W(R("source.error.label.source_not_found"),"error")},[t.source]);const{CategorySelectComponent:a,updateLibraryState:n}=xt(t),i=async()=>{try{await navigator.clipboard.writeText(t.title),W(r("global.label.copied_clipboard"),"info")}catch(o){}};return e.jsxs(e.Fragment,{children:[e.jsxs(Qt,{children:[e.jsxs(Yt,{url:F.getThumbnailUrl(t),mangaThumbnailBackdrop:s,children:[e.jsxs(Jt,{children:[e.jsx(rr,{manga:t}),e.jsxs(Xt,{children:[e.jsxs(x,{sx:{flexDirection:"row",gap:1,alignItems:"flex-start",mb:1},children:[e.jsx(K,{variant:"h5",component:"h2",sx:{wordBreak:"break-word"},children:t.title}),e.jsx(j,{title:r("global.button.copy"),children:e.jsx(f,{onClick:i,color:"inherit",children:e.jsx(Ut,{fontSize:"small"})})})]}),e.jsx(L,{title:r("manga.label.author"),value:le(t.author)}),e.jsx(L,{title:r("manga.label.artist"),value:le(t.artist)}),e.jsx(L,{title:r("manga.label.status"),value:r(jt[t.status])}),e.jsx(L,{title:r("source.title_one"),value:tr(t.source)})]})]}),e.jsxs(Zt,{children:[e.jsxs(Y,{size:"medium",onClick:n,variant:t.inLibrary?"contained":"outlined",children:[t.inLibrary?e.jsx(kt,{}):e.jsx(gt,{}),t.inLibrary?r("manga.button.in_library"):r("manga.button.add_to_library")]}),e.jsx(Kt,{manga:t}),e.jsx(er,{url:t.realUrl})]})]}),e.jsx(sr,{manga:t})]}),a]})},nr=({manga:t,onRefresh:r,refreshing:s})=>{const{t:a}=C(),n=xe(),i=Ke(n.breakpoints.up("sm")),[o,d]=Qe.useState(null),g=!!o,b=()=>{d(null)},{openCategorySelect:h,CategorySelectComponent:l}=mt({mangaId:t.id});return e.jsxs(e.Fragment,{children:[i&&e.jsxs(e.Fragment,{children:[e.jsx(j,{title:a("manga.label.reload_from_source"),children:e.jsx(f,{onClick:()=>{r()},disabled:s,color:"inherit",children:e.jsx(se,{})})}),t.inLibrary&&e.jsxs(e.Fragment,{children:[e.jsx(j,{title:a("global.button.migrate"),children:e.jsx($,{to:"".concat(U.migrate.childRoutes.search.path(t.sourceId,t.id),"?query=").concat(t.title),state:{mangaTitle:t.title},style:{textDecoration:"none",color:"inherit"},children:e.jsx(f,{color:"inherit",children:e.jsx(ne,{})})})}),e.jsx(j,{title:a("manga.label.edit_categories"),children:e.jsx(f,{onClick:()=>{h(!0)},color:"inherit",children:e.jsx(oe,{})})})]})]}),!i&&e.jsxs(e.Fragment,{children:[e.jsx(f,{id:"chaptersMenuButton","aria-controls":g?"chaptersMenu":void 0,"aria-haspopup":"true","aria-expanded":g?"true":void 0,onClick:p=>d(p.currentTarget),color:"inherit",children:e.jsx(ct,{})}),e.jsxs(he,{id:"chaptersMenu",anchorEl:o,open:g,onClose:b,MenuListProps:{"aria-labelledby":"chaptersMenuButton"},children:[e.jsxs(B,{onClick:()=>{r(),b()},disabled:s,children:[e.jsx(z,{children:e.jsx(se,{fontSize:"small"})}),e.jsx(P,{children:a("manga.label.reload_from_source")})]}),t.inLibrary&&[e.jsxs(B,{component:$,to:"".concat(U.migrate.childRoutes.search.path(t.sourceId,t.id),"?query=").concat(t.title),state:{mangaTitle:t.title},style:{textDecoration:"none",color:"inherit"},children:[e.jsx(z,{children:e.jsx(ne,{fontSize:"small"})}),e.jsx(P,{children:a("migrate.title")})]},"migrate"),e.jsxs(B,{onClick:()=>{h(!0),b()},children:[e.jsx(z,{children:e.jsx(oe,{fontSize:"small"})}),e.jsx(P,{children:a("manga.label.edit_categories")})]},"categories")]]})]}),l]})},Tr=()=>{const{t}=C(),{setTitle:r,setAction:s}=u.useContext(Ye),{id:a}=Je(),n=u.useRef(!1),{data:i,error:o,loading:d,networkStatus:g,refetch:b}=T.useGetManga(Xe,a),h=et(g),l=i==null?void 0:i.manga,[p,{loading:w,error:k}]=Vt(a),S=o!=null?o:k;return u.useEffect(()=>{if(l==null)return;!n.current&&!l.initialized&&(n.current=!0,p())},[l]),u.useLayoutEffect(()=>{var M;return r((M=l==null?void 0:l.title)!=null?M:t("manga.title_one")),s(null),()=>{r(""),s(null)}},[t,l==null?void 0:l.title]),u.useLayoutEffect(()=>(s(e.jsxs(x,{direction:"row",sx:{alignItems:"center"},children:[S&&!h&&!w&&e.jsx(j,{title:e.jsxs(e.Fragment,{children:[t("manga.error.label.request_failure"),e.jsx("br",{}),V(S)]}),children:e.jsx(f,{onClick:()=>b(),children:e.jsx(It,{color:"error"})})}),l&&(w||h)&&e.jsx(f,{disabled:!0,children:e.jsx(Ze,{size:16})}),l&&e.jsx(nr,{manga:l,onRefresh:p,refreshing:w})]})),()=>{s(null)}),[t,S,h,w,l,p]),S&&!l?e.jsx(A,{message:t("manga.error.label.request_failure"),messageExtra:V(S)}):e.jsxs(pe,{sx:{display:{md:"flex"},overflow:"hidden"},children:[d&&e.jsx(de,{}),l&&e.jsx(ar,{manga:l}),l&&e.jsx(Gt,{manga:l,isRefreshing:w})]})};export{Tr as Manga};
