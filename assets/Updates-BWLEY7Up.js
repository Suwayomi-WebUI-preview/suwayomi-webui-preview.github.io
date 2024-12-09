import{u as $,aG as q,f as n,N as K,c as m,j as e,E as S,m as z,T as v,bC as Q,l as J,C as W,a as X,L as _,b as Y,B as I,S as Z,bD as E,H as ee,J as te,k as L,I as G,K as ae,af as se,bE as oe,bF as re,n as M}from"./index-D4N9uJT_.js";import{U as ne}from"./UpdateChecker-rACkDph-.js";import{V as ie,S as le,a as de,b as ce}from"./Virtuoso.util-GOLVDdCM.js";import{M as ue}from"./Mangas-CKfjhePX.js";import{A as pe}from"./Avatar-Lrc4_57M.js";import"./Progress-D-JSijUG.js";const me=s=>{if(!s.length)return[];const d=new Map;return s.forEach(h=>{var o;const c=oe(re(Number(h.fetchedAt)));d.set(c,((o=d.get(c))!=null?o:0)+1)}),[...d.entries()]},Ce=()=>{var T,k;const{t:s}=$(),d=q(),{setTitle:h,setAction:c}=n.useContext(K),{data:o,loading:y,error:C,fetchMore:P,refetch:R}=m.useGetRecentlyUpdatedChapters(void 0,{fetchPolicy:"cache-and-network",notifyOnNetworkStatusChange:!0}),j=!!(o!=null&&o.chapters.pageInfo.hasNextPage),A=o==null?void 0:o.chapters.pageInfo.endCursor,i=(T=o==null?void 0:o.chapters.nodes)!=null?T:[],u=n.useMemo(()=>me(i),[i]),w=n.useMemo(()=>u.map(t=>t[1]),[u]),{data:g}=m.useGetDownloadStatus(),D=(k=g==null?void 0:g.downloadStatus.queue)!=null?k:[],F=ie.useCreateGroupedComputeItemKey(w,n.useCallback(t=>u[t][0],[u]),n.useCallback(t=>i[t].id,[i])),x=n.useRef(null),[H,U]=n.useState(0);n.useLayoutEffect(()=>{var t,a;U((a=(t=x.current)==null?void 0:t.clientHeight)!=null?a:0)},[x.current]);const{data:f}=m.useGetLastGlobalUpdateTimestamp({fetchPolicy:"cache-only"}),b=f==null?void 0:f.lastUpdateTimestamp.timestamp;n.useLayoutEffect(()=>(h(s("updates.title")),c(e.jsx(ne,{})),()=>{h(""),c(null)}),[s,b]);const B=t=>{const{sourceOrder:a,mangaId:p}=t;return D.find(r=>a===r.chapter.sourceOrder&&p===r.manga.id)},N=async t=>{try{await m.addChapterToDownloadQueue(t.id).response}catch(a){M(s("download.queue.error.label.failed_to_remove"),"error")}},O=t=>{m.addChapterToDownloadQueue(t.id).response.catch(()=>M(s("global.error.label.failed_to_save_changes"),"error"))},V=n.useCallback(()=>{j&&P({variables:{offset:i.length}})},[j,A]);return C?e.jsx(S,{message:s("global.error.label.failed_to_load_data"),messageExtra:C.message,retry:()=>R().catch(z())}):!y&&i.length===0?e.jsx(S,{message:s("updates.error.label.no_updates_available")}):e.jsxs(e.Fragment,{children:[e.jsx(v,{ref:x,sx:{marginLeft:"10px",paddingTop:t=>({[t.breakpoints.up("sm")]:{paddingTop:"6px"}})},children:s("library.settings.global_update.label.last_update",{date:b?Q.format(+b):"-"})}),e.jsx(le,{heightToSubtract:H,style:{height:"undefined"},components:{Footer:()=>y?e.jsx(J,{usePadding:!0}):null},overscan:window.innerHeight*.5,endReached:V,groupCounts:w,groupContent:t=>e.jsx(de,{sx:{pt:t===0?void 0:0,pb:0},isFirstItem:t===0,children:e.jsx(v,{variant:"h5",component:"h2",children:u[t][0]})}),computeItemKey:F,itemContent:t=>{const a=i[t],{manga:p}=a,r=B(a);return e.jsx(ce,{children:e.jsx(W,{children:e.jsx(X,{component:_,to:"/manga/".concat(a.manga.id,"/chapter/").concat(a.sourceOrder),state:d.state,sx:{color:l=>l.palette.text[a.isRead?"disabled":"primary"]},children:e.jsxs(Y,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:1.5},children:[e.jsxs(I,{sx:{display:"flex"},children:[e.jsx(_,{to:"/manga/".concat(a.manga.id),style:{textDecoration:"none"},children:e.jsx(pe,{variant:"rounded",sx:{width:56,height:56,flex:"0 0 auto",marginRight:1,background:"transparent"},children:e.jsx(Z,{imgStyle:{objectFit:"cover",width:"100%",height:"100%",imageRendering:"pixelated"},spinnerStyle:{small:!0},alt:p.title,src:ue.getThumbnailUrl(p)})})}),e.jsxs(I,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",flexGrow:1,flexShrink:1,wordBreak:"break-word"},children:[e.jsx(E,{variant:"h6",component:"h3",children:p.title}),e.jsx(E,{variant:"caption",display:"block",lines:1,children:a.name})]})]}),r&&e.jsx(ee,{download:r}),(r==null?void 0:r.state)===te.Error&&e.jsx(L,{title:s("global.button.retry"),children:e.jsx(G,{onClick:l=>{l.preventDefault(),l.stopPropagation(),N(r.chapter)},size:"large",children:e.jsx(ae,{})})}),r==null&&!a.isDownloaded&&e.jsx(L,{title:s("chapter.action.download.add.label.action"),children:e.jsx(G,{onClick:l=>{l.stopPropagation(),l.preventDefault(),O(a)},size:"large",children:e.jsx(se,{})})})]})})})})}})]})};export{Ce as Updates};
