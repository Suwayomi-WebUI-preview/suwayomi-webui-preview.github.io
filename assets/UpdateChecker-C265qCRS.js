import{c as U,j as a,u as _,M as J,f as u,r as c,m as C,ah as R,i as I,bL as E,I as G,ai as P,R as L,d as N,ak as S,al as w,aB as j,n as y,l as v}from"./index-BAJWok1j.js";import{P as F}from"./Progress-BbHduxO6.js";const H=U(a.jsx("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear"),B=s=>{if(!s)return 0;const r=s.failedJobs.mangas.totalCount+s.completeJobs.mangas.totalCount,t=r+s.pendingJobs.mangas.totalCount+s.runningJobs.mangas.totalCount,i=100*(r/t);return Number.isNaN(i)?0:i};let n=!1;function Q({categoryId:s,handleFinishedUpdate:r}){const{t}=_(),i=J.useIsTouchDevice(),[b,g]=u.useState(!1),{data:p,refetch:f}=c.useGetLastGlobalUpdateTimestamp(),h=p==null?void 0:p.lastUpdateTimestamp.timestamp,{data:d}=c.useGetGlobalUpdateSummary(),e=d==null?void 0:d.updateStatus,l=!!(e!=null&&e.isRunning),x=u.useMemo(()=>B(e),[e==null?void 0:e.failedJobs.mangas.totalCount,e==null?void 0:e.completeJobs.mangas.totalCount,e==null?void 0:e.pendingJobs.mangas.totalCount,e==null?void 0:e.runningJobs.mangas.totalCount]);u.useEffect(()=>{!n&&(e!=null&&e.isRunning)&&(n=!0),n&&x===100&&(n=!1,r==null||r(),f().catch(C()))},[e==null?void 0:e.isRunning]);const M=async o=>{try{n=!0,await c.startGlobalUpdate(o!==void 0?[o]:void 0).response,f().catch(C("UpdateChecker::reFetchLastTimestamp"))}catch(k){n=!1,y(t("global.error.label.update_failed"),"error",v(k))}},T=async()=>{try{await c.resetGlobalUpdate()}catch(o){y(t("library.error.label.stop_global_update"),"error",v(o))}},m=async o=>{l?T():M(o)};return a.jsx(R,{variant:"popover",popupId:"library-update-checker-menu",children:o=>a.jsxs(a.Fragment,{children:[a.jsx(I,{title:l?t("library.action.label.stop_update"):t("library.settings.global_update.label.last_update_tooltip",{date:h?E.format(+h):"-"}),children:a.jsx(G,{sx:{position:"relative"},...s!==void 0&&!l?P(o):{onClick:()=>m()},onMouseEnter:()=>g(!0),onMouseLeave:()=>g(!1),color:"inherit",children:l?a.jsxs(a.Fragment,{children:[a.jsx(H,{sx:{opacity:Number(i||b)}}),a.jsx(N,{sx:{position:"absolute"},children:a.jsx(F,{progress:x,showText:!i&&!b,progressProps:{color:"inherit"}})})]}):a.jsx(L,{})})}),a.jsxs(S,{...w(o),children:[a.jsx(j,{onClick:()=>{o.close(),m()},children:t("library.action.label.update_library")}),a.jsx(j,{onClick:()=>{o.close(),m(s)},children:t("library.action.label.update_category")})]})]})})}export{H as C,Q as U};