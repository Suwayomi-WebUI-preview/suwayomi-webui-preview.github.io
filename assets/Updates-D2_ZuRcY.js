import{u as B,aj as F,c as n,N,a as u,j as e,E as U,T as C,h as H,L as S,B as v,g as _,I as D,x as O}from"./index-B5aGC8by.js";import{D as $}from"./DownloadStateIndicator-ANp5kvFO.js";import{U as q}from"./UpdateChecker-CWBMqB6Q.js";import{S as V,a as z,b as Q}from"./StyledGroupItemWrapper-DTIl6cp8.js";import{M as W}from"./Mangas-D61wmQuB.js";import{S as J}from"./SpinnerImage-DY7PfT9m.js";import{d as K,g as X,e as Y}from"./date-KKlYDx6w.js";import{C as Z,a as ee}from"./index-Chhl_QrM.js";import{C as te}from"./CardContent-yoxmt5xa.js";import{A as ae}from"./Avatar-inmYLceb.js";import"./Progress-CR8zqlQh.js";import"./Chapters-CR-FHP0x.js";import"./metadataServerSettings-nxgrz9XV.js";import"./metadata-Bm3ZnyOZ.js";const se=o=>{if(!o.length)return[];const d=new Map;return o.forEach(p=>{var s;const l=X(Y(Number(p.fetchedAt)));d.set(l,((s=d.get(l))!=null?s:0)+1)}),[...d.entries()]},je=()=>{var T,w;const{t:o}=B(),d=F(),{setTitle:p,setAction:l}=n.useContext(N),{data:s,loading:y,fetchMore:I}=u.useGetRecentlyUpdatedChapters(void 0,{fetchPolicy:"cache-and-network",notifyOnNetworkStatusChange:!0}),b=!!(s!=null&&s.chapters.pageInfo.hasNextPage),L=s==null?void 0:s.chapters.pageInfo.endCursor,r=(T=s==null?void 0:s.chapters.nodes)!=null?T:[],g=n.useMemo(()=>se(r),[r]),k=n.useMemo(()=>g.map(t=>t[1]),[g]),{data:h}=u.useGetDownloadStatus(),M=(w=h==null?void 0:h.downloadStatus.queue)!=null?w:[],x=n.useRef(null),[E,R]=n.useState(0);n.useLayoutEffect(()=>{var t,a;R((a=(t=x.current)==null?void 0:t.clientHeight)!=null?a:0)},[x.current]);const{data:f}=u.useGetLastGlobalUpdateTimestamp({fetchPolicy:"cache-only"}),j=f==null?void 0:f.lastUpdateTimestamp.timestamp;n.useEffect(()=>(p(o("updates.title")),l(e.jsx(q,{})),()=>{p(""),l(null)}),[o,j]);const A=t=>{const{sourceOrder:a,manga:{id:c}}=t;return M.find(i=>a===i.chapter.sourceOrder&&c===i.chapter.manga.id)},G=t=>{u.addChapterToDownloadQueue(t.id)},P=n.useCallback(()=>{b&&I({variables:{offset:r.length}})},[b,L]);return!y&&r.length===0?e.jsx(U,{message:o("updates.error.label.no_updates_available")}):e.jsxs(e.Fragment,{children:[e.jsx(C,{ref:x,sx:{marginLeft:"10px",paddingTop:t=>({[t.breakpoints.up("sm")]:{paddingTop:"6px"}})},children:o("library.settings.global_update.label.last_update",{date:j?K.format(+j):"-"})}),e.jsx(V,{heightToSubtract:E,style:{height:"undefined"},components:{Footer:()=>y?e.jsx(H,{usePadding:!0}):null},overscan:window.innerHeight*.5,endReached:P,groupCounts:k,groupContent:t=>e.jsx(z,{variant:"h5",isFirstItem:t===0,children:g[t][0]}),itemContent:t=>{const a=r[t],{manga:c}=a,i=A(a);return e.jsx(Q,{isLastItem:t===r.length-1,children:e.jsx(Z,{children:e.jsx(ee,{component:S,to:"/manga/".concat(a.manga.id,"/chapter/").concat(a.sourceOrder),state:d.state,sx:{color:m=>m.palette.text[a.isRead?"disabled":"primary"]},children:e.jsxs(te,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:2},children:[e.jsxs(v,{sx:{display:"flex"},children:[e.jsx(S,{to:"/manga/".concat(a.manga.id),style:{textDecoration:"none"},children:e.jsx(ae,{variant:"rounded",sx:{width:56,height:56,flex:"0 0 auto",marginRight:2,background:"transparent"},children:e.jsx(J,{imgStyle:{objectFit:"cover",width:"100%",height:"100%",imageRendering:"pixelated"},spinnerStyle:{small:!0},alt:c.title,src:W.getThumbnailUrl(c)})})}),e.jsxs(v,{sx:{display:"flex",flexDirection:"column"},children:[e.jsx(C,{variant:"h5",component:"h2",children:c.title}),e.jsx(C,{variant:"caption",display:"block",gutterBottom:!0,children:a.name})]})]}),i&&e.jsx($,{download:i}),i==null&&!a.isDownloaded&&e.jsx(_,{title:o("chapter.action.download.add.label.action"),children:e.jsx(D,{onClick:m=>{m.stopPropagation(),m.preventDefault(),G(a)},size:"large",children:e.jsx(O,{})})})]})})})},t)}})]})};export{je as Updates};