import{u as E,d as b,z as f,c as s,N as S,j as t,P as A,I as B,R as _,bk as D,Y as F,U as P,a5 as w,a as N,bE as U,g as V,h as R,T as j,B as W}from"./index-G18IN795.js";import{G as z}from"./GridLayouts-C2EZYG2-.js";import{C as H}from"./CheckboxInput-Z-_HgYvB.js";import{E as K}from"./EmptyViewAbsoluteCentered-BYw38H0A.js";import{b as $}from"./MangaGrid-CwNcWk2X.js";import{V as q,S as O,a as C,b as Q}from"./Virtuoso.util-DFpobF4K.js";import{B as Y}from"./BaseMangaGrid-Jr7pC-ID.js";import"./Checkbox-D4S952Xx.js";import"./TextField-Bws0qK-H.js";import"./SwitchBase-Bw-7GSmT.js";import"./ListPreference-DxuT2Euq.js";import"./index-CfHvLnxp.js";import"./useManageMangaLibraryState-TRhv5jbt.js";import"./Trackers-D4pSmk7a.js";import"./Card-BuKIIboA.js";import"./CardContent-5o4qcQ3_.js";import"./Avatar-CmQ0qMBk.js";import"./Info-B4mhTGOz.js";import"./InputAdornment-Be-wuiYS.js";import"./CheckCircle-BL8HOtNV.js";import"./SpinnerImage-Bt-_wxc3.js";import"./Refresh-DbpC5PTI.js";import"./TypographyMaxLines-B6UUi4xn.js";import"./Mangas-D4rvQAR7.js";import"./Chapters-_zzpCI-k.js";import"./CardActionArea-DvFKKWYE.js";import"./Collapse-xJLzclEC.js";import"./Link-COiAf_Ie.js";import"./NumberSetting-CHkyDFFa.js";import"./useMobilePicker-B22eqTb9.js";import"./Chip-5gnAzm2l.js";import"./SelectSetting-yfJQ6hxN.js";import"./Select-DszgPRW6.js";import"./ThreeStateCheckboxInput-Z37WI6oh.js";import"./Delete-DVT59Tyv.js";import"./Download-C4l022Ez.js";import"./Sync-WhRUvYtE.js";import"./PlayArrow-Cl8hR9f2.js";import"./StyledFab-BRQd5m1b.js";const Pe=()=>{const{t:l}=E(),[n,L]=b("libraryDuplicatesGridLayout",f.List),[m,M]=b("libraryDuplicatesCheckAlternativeTitles",!1),{setTitle:u,setAction:d}=s.useContext(S);s.useLayoutEffect(()=>(u(l("library.settings.advanced.duplicates.label.title")),d(t.jsxs(t.Fragment,{children:[t.jsx(z,{gridLayout:n,onChange:L}),t.jsx(A,{variant:"popover",popupId:"library-dupliactes-settings",children:e=>t.jsxs(t.Fragment,{children:[t.jsx(B,{..._(e),color:"inherit",children:t.jsx(D,{})}),t.jsx(F,{...P(e),children:t.jsx(w,{children:t.jsx(H,{label:l("library.settings.advanced.duplicates.settings.label.check_description"),checked:m,onChange:(r,p)=>M(p)})})})]})})]})),()=>{u(""),d(null)}),[l,n,m]);const{data:i,loading:k,error:g,refetch:T}=N.useGetMangas(U,{condition:{inLibrary:!0}}),[G,h]=s.useState(!0),[o,x]=s.useState({});s.useEffect(()=>{var p;h(!0);const e=(p=i==null?void 0:i.mangas.nodes)!=null?p:[];if(!e.length)return x({}),()=>{};const r=new Worker(new URL("/assets/LibraryDuplicatesWorker-Q48iwAfs.js",import.meta.url),{type:"module"});return r.onmessage=v=>{x(v.data),h(!1)},r.postMessage({mangas:e,checkAlternativeTitles:m}),()=>r.terminate()},[i==null?void 0:i.mangas.nodes,m]);const a=s.useMemo(()=>Object.keys(o).toSorted((e,r)=>e.localeCompare(r)),[o]),c=s.useMemo(()=>a.map(e=>o[e]).flat(),[o]),y=s.useMemo(()=>a.map(e=>o[e]).map(e=>e.length),[o]),I=q.useCreateGroupedComputeItemKey(y,s.useCallback(e=>a[e],[a]),s.useCallback((e,r)=>"".concat(a[r],"-").concat(c[e].id,"}"),[a,c]));return k||G?t.jsx(V,{}):g?t.jsx(K,{message:l("global.error.label.failed_to_load_data"),messageExtra:g.message,retry:()=>T().catch(R())}):n===f.List?t.jsx(O,{groupCounts:y,groupContent:e=>t.jsx(C,{isFirstItem:e===0,children:t.jsx(j,{variant:"h5",component:"h2",children:a[e]})}),computeItemKey:I,itemContent:e=>t.jsx(Q,{children:t.jsx($,{manga:c[e],gridLayout:n,selected:null,mode:"duplicate"})})}):a.map((e,r)=>t.jsxs(W,{children:[t.jsx(C,{sx:{pt:r===0?void 0:0,pb:0},isFirstItem:!1,children:t.jsx(j,{variant:"h5",component:"h2",children:e})}),t.jsx(Y,{mangas:o[e],hasNextPage:!1,loadMore:()=>{},isLoading:!1,gridLayout:n,inLibraryIndicator:!1,horizontal:!0,mode:"duplicate"})]},e))};export{Pe as LibraryDuplicates};
