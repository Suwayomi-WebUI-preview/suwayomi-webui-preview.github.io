import{u as z,aK as J,f as n,N as Q,r as h,j as e,E as v,l as y,m as W,T as I,bJ as X,k as Y,C as Z,a as $,L as E,A as L,b as ee,B as R,S as te,a6 as ae,bK as _,J as se,K as oe,i as M,I as A,R as re,ai as ne,bL as ie,bM as le,n as G}from"./index-BUJyb_rr.js";import{U as de}from"./UpdateChecker-BIewUXft.js";import{V as ce,S as pe,a as ue,b as he}from"./Virtuoso.util-DA4GTLLC.js";import{A as me}from"./Avatar-BLn63khu.js";import"./Progress-CpQrUta6.js";const ge=s=>{if(!s.length)return[];const d=new Map;return s.forEach(m=>{var o;const c=ie(le(Number(m.fetchedAt)));d.set(c,((o=d.get(c))!=null?o:0)+1)}),[...d.entries()]},Ce=()=>{var k,S;const{t:s}=z(),d=J(),{setTitle:m,setAction:c}=n.useContext(Q),{data:o,loading:j,error:C,fetchMore:P,refetch:D}=h.useGetRecentlyUpdatedChapters(void 0,{fetchPolicy:"cache-and-network",notifyOnNetworkStatusChange:!0}),w=!!(o!=null&&o.chapters.pageInfo.hasNextPage),U=o==null?void 0:o.chapters.pageInfo.endCursor,i=(k=o==null?void 0:o.chapters.nodes)!=null?k:[],p=n.useMemo(()=>ge(i),[i]),T=n.useMemo(()=>p.map(t=>t[1]),[p]),{data:g}=h.useGetDownloadStatus(),B=(S=g==null?void 0:g.downloadStatus.queue)!=null?S:[],F=ce.useCreateGroupedComputeItemKey(T,n.useCallback(t=>p[t][0],[p]),n.useCallback(t=>i[t].id,[i])),x=n.useRef(null),[H,N]=n.useState(0);n.useLayoutEffect(()=>{var t,a;N((a=(t=x.current)==null?void 0:t.clientHeight)!=null?a:0)},[x.current]);const{data:f}=h.useGetLastGlobalUpdateTimestamp({fetchPolicy:"cache-only"}),b=f==null?void 0:f.lastUpdateTimestamp.timestamp;n.useLayoutEffect(()=>(m(s("updates.title")),c(e.jsx(de,{})),()=>{m(""),c(null)}),[s,b]);const K=t=>{const{sourceOrder:a,mangaId:u}=t;return B.find(r=>a===r.chapter.sourceOrder&&u===r.manga.id)},O=async t=>{try{await h.addChapterToDownloadQueue(t.id).response}catch(a){G(s("download.queue.error.label.failed_to_remove"),"error",y(a))}},V=t=>{h.addChapterToDownloadQueue(t.id).response.catch(a=>G(s("global.error.label.failed_to_save_changes"),"error",y(a)))},q=n.useCallback(()=>{w&&P({variables:{offset:i.length}})},[w,U]);return C?e.jsx(v,{message:s("global.error.label.failed_to_load_data"),messageExtra:y(C),retry:()=>D().catch(W())}):!j&&i.length===0?e.jsx(v,{message:s("updates.error.label.no_updates_available")}):e.jsxs(e.Fragment,{children:[e.jsx(I,{ref:x,sx:{marginLeft:"10px",paddingTop:t=>({[t.breakpoints.up("sm")]:{paddingTop:"6px"}})},children:s("library.settings.global_update.label.last_update",{date:b?X.format(+b):"-"})}),e.jsx(pe,{heightToSubtract:H,style:{height:"undefined"},components:{Footer:()=>j?e.jsx(Y,{usePadding:!0}):null},overscan:window.innerHeight*.5,endReached:q,groupCounts:T,groupContent:t=>e.jsx(ue,{isFirstItem:t===0,children:e.jsx(I,{variant:"h5",component:"h2",children:p[t][0]})}),computeItemKey:F,itemContent:t=>{const a=i[t],{manga:u}=a,r=K(a);return e.jsx(he,{children:e.jsx(Z,{children:e.jsx($,{component:E,to:L.reader.path(a.manga.id,a.sourceOrder),state:d.state,sx:{color:l=>l.palette.text[a.isRead?"disabled":"primary"]},children:e.jsxs(ee,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:1.5},children:[e.jsxs(R,{sx:{display:"flex"},children:[e.jsx(E,{to:L.manga.path(a.manga.id),style:{textDecoration:"none"},children:e.jsx(me,{variant:"rounded",sx:{width:56,height:56,flex:"0 0 auto",marginRight:1,background:"transparent"},children:e.jsx(te,{imgStyle:{objectFit:"cover",width:"100%",height:"100%",imageRendering:"pixelated"},spinnerStyle:{small:!0},alt:u.title,src:ae.getThumbnailUrl(u)})})}),e.jsxs(R,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",flexGrow:1,flexShrink:1,wordBreak:"break-word"},children:[e.jsx(_,{variant:"h6",component:"h3",children:u.title}),e.jsx(_,{variant:"caption",display:"block",lines:1,children:a.name})]})]}),r&&e.jsx(se,{download:r}),(r==null?void 0:r.state)===oe.Error&&e.jsx(M,{title:s("global.button.retry"),children:e.jsx(A,{onClick:l=>{l.preventDefault(),l.stopPropagation(),O(r.chapter)},size:"large",children:e.jsx(re,{})})}),r==null&&!a.isDownloaded&&e.jsx(M,{title:s("chapter.action.download.add.label.action"),children:e.jsx(A,{onClick:l=>{l.stopPropagation(),l.preventDefault(),V(a)},size:"large",children:e.jsx(ne,{})})})]})})})})}})]})};export{Ce as Updates};