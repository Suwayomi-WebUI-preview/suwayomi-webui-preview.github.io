import{a as o,h as l,bA as g}from"./index-Zl59rTnr.js";import{b as n,g as u,a as S}from"./metadata-3dsaWhfv.js";const M=(...e)=>{try{return JSON.parse(...e)}catch(t){return null}},r=()=>({deleteChaptersManuallyMarkedRead:!1,deleteChaptersWhileReading:0,deleteChaptersWithBookmark:!1,downloadAheadLimit:0,showAddToLibraryCategorySelectDialog:!0,ignoreFilters:!1,removeMangaFromCategories:!1,devices:[g],migrateChapters:!0,migrateCategories:!0,migrateTracking:!0,deleteChapters:!0,hideLibraryEntries:!1,updateProgressAfterReading:!0,updateProgressManualMarkRead:!1}),i=e=>({...e,devices:JSON.stringify(e.devices)}),m=e=>{var t,a;return{...r(),...e,devices:(a=M((t=e.devices)!=null?t:""))!=null?a:r().devices}},d=(e,t=r(),a=!0)=>m(u({meta:e},i(t),a)),p=()=>{const e=o.useGetGlobalMeta({notifyOnNetworkStatusChange:!0}),{data:t,loading:a}=e,s=n(t==null?void 0:t.metas.nodes),c=d(s);return{metadata:s,settings:c,loading:a,request:e}},C=async()=>{const{data:e,error:t}=await o.getGlobalMeta().response;if(t)throw t;const a=n(e==null?void 0:e.metas.nodes);return d(a)},v=async(e,t)=>S([[e,i({[e]:t})[e]]]),y=(e=l())=>(t,a)=>v(t,a).catch(e);export{v as a,y as c,C as g,p as u};
