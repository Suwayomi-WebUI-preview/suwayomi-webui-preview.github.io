import{u as E,g as b,Y as f,f as a,N as S,j as t,ag as A,I as B,ah as D,bD as _,aj as F,ak as w,aA as P,Z as N,r as V,c0 as U,k as W,E as H,l as K,m as R,T as j,B as $}from"./index-BUJyb_rr.js";import{G as q}from"./GridLayouts-C9zECeqz.js";import{b as z}from"./MangaGrid-BEo-HihQ.js";import{V as O,S as Q,a as C,b as Y}from"./Virtuoso.util-DA4GTLLC.js";import{B as Z}from"./BaseMangaGrid-X15WYZqu.js";import"./ListPreference-PL7APub7.js";import"./useManageMangaLibraryState-DgB1W9Qh.js";import"./Trackers-D4pSmk7a.js";import"./Avatar-BLn63khu.js";import"./Info-BFq5LZ58.js";import"./CheckCircle-k-rTWxNL.js";import"./NumberSetting-ZDh6kp7O.js";import"./useMobilePicker-WVV3j1A7.js";import"./Chip-Bwm621Cy.js";import"./SelectSetting-BpptScyX.js";import"./ThreeStateCheckboxInput-CQDxXVLD.js";import"./Sync-gYnlc5rw.js";import"./PlayArrow-DZxwJm5V.js";import"./StyledFab-DASxdqgS.js";const ye=()=>{const{t:l}=E(),[n,L]=b("libraryDuplicatesGridLayout",f.List),[c,M]=b("libraryDuplicatesCheckAlternativeTitles",!1),{setTitle:m,setAction:d}=a.useContext(S);a.useLayoutEffect(()=>(m(l("library.settings.advanced.duplicates.label.title")),d(t.jsxs(t.Fragment,{children:[t.jsx(q,{gridLayout:n,onChange:L}),t.jsx(A,{variant:"popover",popupId:"library-dupliactes-settings",children:e=>t.jsxs(t.Fragment,{children:[t.jsx(B,{...D(e),color:"inherit",children:t.jsx(_,{})}),t.jsx(F,{...w(e),children:t.jsx(P,{children:t.jsx(N,{label:l("library.settings.advanced.duplicates.settings.label.check_description"),checked:c,onChange:(s,u)=>M(u)})})})]})})]})),()=>{m(""),d(null)}),[l,n,c]);const{data:i,loading:k,error:g,refetch:I}=V.useGetMangas(U,{condition:{inLibrary:!0}}),[T,h]=a.useState(!0),[o,x]=a.useState({});a.useEffect(()=>{var u;h(!0);const e=(u=i==null?void 0:i.mangas.nodes)!=null?u:[];if(!e.length)return x({}),()=>{};const s=new Worker(new URL("/assets/LibraryDuplicatesWorker-Q48iwAfs.js",import.meta.url),{type:"module"});return s.onmessage=v=>{x(v.data),h(!1)},s.postMessage({mangas:e,checkAlternativeTitles:c}),()=>s.terminate()},[i==null?void 0:i.mangas.nodes,c]);const r=a.useMemo(()=>Object.keys(o).toSorted((e,s)=>e.localeCompare(s)),[o]),p=a.useMemo(()=>r.map(e=>o[e]).flat(),[o]),y=a.useMemo(()=>r.map(e=>o[e]).map(e=>e.length),[o]),G=O.useCreateGroupedComputeItemKey(y,a.useCallback(e=>r[e],[r]),a.useCallback((e,s)=>"".concat(r[s],"-").concat(p[e].id,"}"),[r,p]));return k||T?t.jsx(W,{}):g?t.jsx(H,{message:l("global.error.label.failed_to_load_data"),messageExtra:K(g),retry:()=>I().catch(R())}):n===f.List?t.jsx(Q,{groupCounts:y,groupContent:e=>t.jsx(C,{isFirstItem:e===0,children:t.jsx(j,{variant:"h5",component:"h2",children:r[e]})}),computeItemKey:G,itemContent:e=>t.jsx(Y,{children:t.jsx(z,{manga:p[e],gridLayout:n,selected:null,mode:"duplicate"})})}):r.map((e,s)=>t.jsxs($,{children:[t.jsx(C,{sx:{pt:s===0?void 0:0,pb:0},isFirstItem:!1,children:t.jsx(j,{variant:"h5",component:"h2",children:e})}),t.jsx(Z,{mangas:o[e],hasNextPage:!1,loadMore:()=>{},isLoading:!1,gridLayout:n,inLibraryIndicator:!1,horizontal:!0,mode:"duplicate"})]},e))};export{ye as LibraryDuplicates};