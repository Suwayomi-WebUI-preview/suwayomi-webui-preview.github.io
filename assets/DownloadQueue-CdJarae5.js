import{r as T,i as q,j as e,u as $,a as n,c as m,N as B,f as x,I as u,g as N,E as S,h as R,B as v,L as F,S as G,T as I,D as W,n as J,m as j}from"./index-Dw9heavt.js";import{d as K}from"./Delete-CIgykoAN.js";import{D as U,S as X,P as Y,d as Z}from"./StrictModeDroppable-v-d_BePZ.js";import{d as ee}from"./PlayArrow-JzTux3tJ.js";import{V as re}from"./index-DhU5Pxmd.js";import{D as te}from"./DownloadStateIndicator-C2-1poAx.js";import{C as ae}from"./Card-DK6Yi3vO.js";import{C as oe}from"./CardActionArea-DK298soq.js";import{C as se}from"./CardContent-Cx4ZkK3t.js";var w={},ne=q;Object.defineProperty(w,"__esModule",{value:!0});var k=w.default=void 0,le=ne(T()),ie=e;k=w.default=(0,le.default)((0,ie.jsx)("path",{d:"M6 19h4V5H6zm8-14v14h4V5z"}),"Pause");var D={},de=q;Object.defineProperty(D,"__esModule",{value:!0});var O=D.default=void 0,ce=de(T()),ue=e;O=D.default=(0,ce.default)((0,ue.jsx)("path",{d:"M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3zM14 5h-3l-1-1H6L5 5H2v2h12z"}),"DeleteSweep");const pe=({children:t,...o})=>e.jsx(v,{...o,style:{height:o["data-known-size"]||void 0},children:t}),z=({provided:t,item:o,handleDelete:f,handleRetry:d})=>{const{t:p}=$();return e.jsx(v,{...t.draggableProps,...t.dragHandleProps,ref:t.innerRef,sx:{p:1,pb:0},children:e.jsx(ae,{children:e.jsx(oe,{component:F,to:"/manga/".concat(o.manga.id),children:e.jsxs(se,{sx:{display:"flex",alignItems:"center",p:1.5},children:[e.jsx(u,{sx:{pointerEvents:"none"},children:e.jsx(Z,{})}),e.jsxs(G,{sx:{flex:1,ml:1},direction:"column",children:[e.jsx(I,{variant:"h6",component:"h3",children:o.manga.title}),e.jsx(I,{variant:"caption",sx:{display:"block"},children:o.chapter.name})]}),e.jsx(te,{download:o}),o.state===W.Error&&e.jsx(x,{title:p("global.button.retry"),children:e.jsx(u,{onClick:l=>{l.preventDefault(),l.stopPropagation(),d(o.chapter)},size:"large",children:e.jsx(J,{})})}),e.jsx(x,{title:p("chapter.action.download.delete.label.action"),children:e.jsx(u,{onClick:l=>{l.preventDefault(),l.stopPropagation(),f(o.chapter)},size:"large",children:e.jsx(K,{})})})]})})})})},be=()=>{var E,P;const{t}=$(),[o,{reset:f}]=n.useReorderChapterInDownloadQueue(),{data:d,loading:p,error:l,refetch:H}=n.useGetDownloadStatus({notifyOnNetworkStatusChange:!0}),i=d==null?void 0:d.downloadStatus,h=(E=i==null?void 0:i.queue)!=null?E:[],c=(P=i==null?void 0:i.state)!=null?P:"STARTED",g=!h.length,{setTitle:b,setAction:_}=m.useContext(B),M=async()=>{try{await n.clearDownloads().response}catch(r){j(t("download.queue.error.label.failed_delete_all"),"error")}},L=()=>{c==="STOPPED"?n.startDownloads():n.stopDownloads()};m.useEffect(()=>(b(t("download.queue.title")),_(e.jsxs(e.Fragment,{children:[e.jsx(x,{title:t("download.queue.label.delete_all"),children:e.jsx(u,{onClick:M,size:"large",color:"inherit",children:e.jsx(O,{})})}),e.jsx(x,{title:t(c==="STOPPED"?"global.button.start":"global.button.stop"),children:e.jsx(u,{onClick:L,size:"large",disabled:g,color:"inherit",children:c==="STOPPED"?e.jsx(ee,{}):e.jsx(k,{})})})]})),()=>{b(""),_(null)}),[t,c,g]),m.useEffect(()=>{const r=a=>{(a.message==="ResizeObserver loop completed with undelivered notifications."||a.message==="ResizeObserver loop limit exceeded")&&a.stopImmediatePropagation()};return window.addEventListener("error",r),()=>window.removeEventListener("error",r)},[]);const Q=(r,a,s)=>{a!==s&&o({variables:{input:{chapterId:r[a].chapter.id,to:s}}}).catch(()=>{f()})},A=r=>{r.destination&&Q(h,r.source.index,r.destination.index)},C=async r=>{try{await n.addChapterToDownloadQueue(r.id).response}catch(a){j(t("download.queue.error.label.failed_to_remove"),"error")}},y=async r=>{const a=c==="STARTED";try{a&&await n.stopDownloads().response,await Promise.all([n.removeChapterFromDownloadQueue(r.id).response,n.deleteDownloadedChapter(r.id).response])}catch(s){j(t("download.queue.error.label.failed_to_retry"),"error")}a&&n.startDownloads().response.catch(R())};return p?e.jsx(N,{}):l?e.jsx(S,{message:t("global.error.label.failed_to_load_data"),messageExtra:l.message,retry:()=>H().catch(R())}):g?e.jsx(S,{message:t("download.queue.label.no_downloads")}):e.jsx(U,{onDragEnd:A,children:e.jsx(X,{droppableId:"droppable",mode:"virtual",renderClone:(r,a,s)=>e.jsx(z,{provided:r,item:h[s.source.index],handleDelete:y,handleRetry:C}),children:r=>e.jsx(v,{ref:r.innerRef,children:e.jsx(re,{useWindowScroll:!0,overscan:window.innerHeight*.5,data:h,components:{Item:pe},itemContent:(a,s)=>e.jsx(Y,{draggableId:"".concat(s.manga.id,"-").concat(s.chapter.sourceOrder),index:a,children:V=>e.jsx(z,{provided:V,item:s,handleDelete:y,handleRetry:C})},"".concat(s.manga.id,"-").concat(s.chapter.sourceOrder))})})})})};export{be as DownloadQueue};