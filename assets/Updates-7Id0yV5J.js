import{u as K,aH as z,f as n,N as Q,c as m,j as e,E as S,m as J,T as v,bE as W,l as $,C as X,a as Y,L as _,A as I,b as Z,B as E,S as ee,bF as L,J as te,K as ae,k as G,I as M,O as se,ag as oe,bG as re,bH as ne,n as R}from"./index-CsKI2UB9.js";import{U as ie}from"./UpdateChecker-CKK4W-WN.js";import{V as le,S as de,a as ce,b as pe}from"./Virtuoso.util-Ji2LPbEz.js";import{M as ue}from"./Mangas-Drbmf7vp.js";import{A as me}from"./Avatar-DwatiGVC.js";import"./Progress-Cz9s7g2W.js";const he=s=>{if(!s.length)return[];const d=new Map;return s.forEach(h=>{var o;const c=re(ne(Number(h.fetchedAt)));d.set(c,((o=d.get(c))!=null?o:0)+1)}),[...d.entries()]},Ce=()=>{var T,k;const{t:s}=K(),d=z(),{setTitle:h,setAction:c}=n.useContext(Q),{data:o,loading:y,error:j,fetchMore:A,refetch:P}=m.useGetRecentlyUpdatedChapters(void 0,{fetchPolicy:"cache-and-network",notifyOnNetworkStatusChange:!0}),C=!!(o!=null&&o.chapters.pageInfo.hasNextPage),H=o==null?void 0:o.chapters.pageInfo.endCursor,i=(T=o==null?void 0:o.chapters.nodes)!=null?T:[],p=n.useMemo(()=>he(i),[i]),w=n.useMemo(()=>p.map(t=>t[1]),[p]),{data:g}=m.useGetDownloadStatus(),F=(k=g==null?void 0:g.downloadStatus.queue)!=null?k:[],U=le.useCreateGroupedComputeItemKey(w,n.useCallback(t=>p[t][0],[p]),n.useCallback(t=>i[t].id,[i])),x=n.useRef(null),[B,D]=n.useState(0);n.useLayoutEffect(()=>{var t,a;D((a=(t=x.current)==null?void 0:t.clientHeight)!=null?a:0)},[x.current]);const{data:f}=m.useGetLastGlobalUpdateTimestamp({fetchPolicy:"cache-only"}),b=f==null?void 0:f.lastUpdateTimestamp.timestamp;n.useLayoutEffect(()=>(h(s("updates.title")),c(e.jsx(ie,{})),()=>{h(""),c(null)}),[s,b]);const N=t=>{const{sourceOrder:a,mangaId:u}=t;return F.find(r=>a===r.chapter.sourceOrder&&u===r.manga.id)},O=async t=>{try{await m.addChapterToDownloadQueue(t.id).response}catch(a){R(s("download.queue.error.label.failed_to_remove"),"error")}},V=t=>{m.addChapterToDownloadQueue(t.id).response.catch(()=>R(s("global.error.label.failed_to_save_changes"),"error"))},q=n.useCallback(()=>{C&&A({variables:{offset:i.length}})},[C,H]);return j?e.jsx(S,{message:s("global.error.label.failed_to_load_data"),messageExtra:j.message,retry:()=>P().catch(J())}):!y&&i.length===0?e.jsx(S,{message:s("updates.error.label.no_updates_available")}):e.jsxs(e.Fragment,{children:[e.jsx(v,{ref:x,sx:{marginLeft:"10px",paddingTop:t=>({[t.breakpoints.up("sm")]:{paddingTop:"6px"}})},children:s("library.settings.global_update.label.last_update",{date:b?W.format(+b):"-"})}),e.jsx(de,{heightToSubtract:B,style:{height:"undefined"},components:{Footer:()=>y?e.jsx($,{usePadding:!0}):null},overscan:window.innerHeight*.5,endReached:q,groupCounts:w,groupContent:t=>e.jsx(ce,{sx:{pt:t===0?void 0:0,pb:0},isFirstItem:t===0,children:e.jsx(v,{variant:"h5",component:"h2",children:p[t][0]})}),computeItemKey:U,itemContent:t=>{const a=i[t],{manga:u}=a,r=N(a);return e.jsx(pe,{children:e.jsx(X,{children:e.jsx(Y,{component:_,to:I.reader.path(a.manga.id,a.sourceOrder),state:d.state,sx:{color:l=>l.palette.text[a.isRead?"disabled":"primary"]},children:e.jsxs(Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:1.5},children:[e.jsxs(E,{sx:{display:"flex"},children:[e.jsx(_,{to:I.manga.path(a.manga.id),style:{textDecoration:"none"},children:e.jsx(me,{variant:"rounded",sx:{width:56,height:56,flex:"0 0 auto",marginRight:1,background:"transparent"},children:e.jsx(ee,{imgStyle:{objectFit:"cover",width:"100%",height:"100%",imageRendering:"pixelated"},spinnerStyle:{small:!0},alt:u.title,src:ue.getThumbnailUrl(u)})})}),e.jsxs(E,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",flexGrow:1,flexShrink:1,wordBreak:"break-word"},children:[e.jsx(L,{variant:"h6",component:"h3",children:u.title}),e.jsx(L,{variant:"caption",display:"block",lines:1,children:a.name})]})]}),r&&e.jsx(te,{download:r}),(r==null?void 0:r.state)===ae.Error&&e.jsx(G,{title:s("global.button.retry"),children:e.jsx(M,{onClick:l=>{l.preventDefault(),l.stopPropagation(),O(r.chapter)},size:"large",children:e.jsx(se,{})})}),r==null&&!a.isDownloaded&&e.jsx(G,{title:s("chapter.action.download.add.label.action"),children:e.jsx(M,{onClick:l=>{l.stopPropagation(),l.preventDefault(),V(a)},size:"large",children:e.jsx(oe,{})})})]})})})})}})]})};export{Ce as Updates};
