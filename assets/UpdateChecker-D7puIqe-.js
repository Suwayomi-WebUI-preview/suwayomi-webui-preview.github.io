import{u as b,a as i,c as g,k as d,j as s,g as C,I as x,K as J,n as T}from"./index-D6RYBNhe.js";import{P as j}from"./Progress-CXhBsVQ4.js";import{d as U}from"./date-C3_O78wD.js";const h=t=>{if(!t)return 0;const o=t.failedJobs.mangas.totalCount+t.completeJobs.mangas.totalCount,n=o+t.pendingJobs.mangas.totalCount+t.runningJobs.mangas.totalCount,r=100*(o/n);return Number.isNaN(r)?0:r};let e=!1;function _({handleFinishedUpdate:t}){const{t:o}=b(),{data:n,refetch:r}=i.useGetLastGlobalUpdateTimestamp(),c=n==null?void 0:n.lastUpdateTimestamp.timestamp,{data:l}=i.useGetGlobalUpdateSummary(),a=l==null?void 0:l.updateStatus,m=!!(a!=null&&a.isRunning),p=g.useMemo(()=>h(a),[a==null?void 0:a.failedJobs.mangas.totalCount,a==null?void 0:a.completeJobs.mangas.totalCount,a==null?void 0:a.pendingJobs.mangas.totalCount,a==null?void 0:a.runningJobs.mangas.totalCount]);g.useEffect(()=>{!e&&(a!=null&&a.isRunning)&&(e=!0),e&&p===100&&(e=!1,t==null||t(),r().catch(d()))},[a==null?void 0:a.isRunning]);const u=async()=>{try{e=!0,await i.startGlobalUpdate().response,r().catch(d("UpdateChecker::reFetchLastTimestamp"))}catch(f){e=!1,T(o("global.error.label.update_failed"),"error")}};return s.jsx(C,{title:o("library.settings.global_update.label.last_update_tooltip",{date:c?U.format(+c):"-"}),children:s.jsx(x,{onClick:u,disabled:m,children:m?s.jsx(j,{progress:p}):s.jsx(J,{})})})}export{_ as U};
