import{r as U,i as k,j as a,u as R,bf as J,c as m,a as c,h as j,P as I,f as P,bd as E,I as G,z as S,Q as q,S as H,H as L,A as N,U as C,m as _}from"./index-BqZ4wM82.js";import{P as w}from"./Progress-DdC-rtiI.js";var b={},F=k;Object.defineProperty(b,"__esModule",{value:!0});var y=b.default=void 0,z=F(U()),D=a;y=b.default=(0,z.default)((0,D.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear");const Q=o=>{if(!o)return 0;const s=o.failedJobs.mangas.totalCount+o.completeJobs.mangas.totalCount,r=s+o.pendingJobs.mangas.totalCount+o.runningJobs.mangas.totalCount,i=100*(s/r);return Number.isNaN(i)?0:i};let n=!1;function $({categoryId:o,handleFinishedUpdate:s}){const{t:r}=R(),i=J.useIsTouchDevice(),[g,f]=m.useState(!1),{data:u,refetch:x}=c.useGetLastGlobalUpdateTimestamp(),v=u==null?void 0:u.lastUpdateTimestamp.timestamp,{data:d}=c.useGetGlobalUpdateSummary(),e=d==null?void 0:d.updateStatus,l=!!(e!=null&&e.isRunning),h=m.useMemo(()=>Q(e),[e==null?void 0:e.failedJobs.mangas.totalCount,e==null?void 0:e.completeJobs.mangas.totalCount,e==null?void 0:e.pendingJobs.mangas.totalCount,e==null?void 0:e.runningJobs.mangas.totalCount]);m.useEffect(()=>{!n&&(e!=null&&e.isRunning)&&(n=!0),n&&h===100&&(n=!1,s==null||s(),x().catch(j()))},[e==null?void 0:e.isRunning]);const T=async t=>{try{n=!0,await c.startGlobalUpdate(t!==void 0?[t]:void 0).response,x().catch(j("UpdateChecker::reFetchLastTimestamp"))}catch(A){n=!1,_(r("global.error.label.update_failed"),"error")}},M=async()=>{try{await c.resetGlobalUpdate()}catch(t){_(r("library.error.label.stop_global_update"),"error")}},p=async t=>{l?M():T(t)};return a.jsx(I,{variant:"popover",popupId:"library-update-checker-menu",children:t=>a.jsxs(a.Fragment,{children:[a.jsx(P,{title:l?r("library.action.label.stop_update"):r("library.settings.global_update.label.last_update_tooltip",{date:v?E.format(+v):"-"}),children:a.jsx(G,{sx:{position:"relative"},...o!==void 0&&!l?S(t):{onClick:()=>p()},onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),children:l?a.jsxs(a.Fragment,{children:[a.jsx(y,{sx:{opacity:Number(i||g)}}),a.jsx(H,{sx:{position:"absolute"},children:a.jsx(w,{progress:h,showText:!i&&!g})})]}):a.jsx(q,{})})}),a.jsxs(L,{...N(t),children:[a.jsx(C,{onClick:()=>{t.close(),p()},children:r("library.action.label.update_library")}),a.jsx(C,{onClick:()=>{t.close(),p(o)},children:r("library.action.label.update_category")})]})]})})}export{$ as U,y as d};
