import{u as E,g as b,X as f,f as s,N as S,j as t,ae as A,I as B,af as _,bu as D,ah as F,ai as w,ax as P,Y as N,c as V,bW as W,l as U,E as H,m as K,T as j,B as R}from"./index-DCoLbMjA.js";import{G as $}from"./GridLayouts-XgESSnds.js";import{b as q}from"./MangaGrid-DWtTlglS.js";import{V as z,S as O,a as C,b as Q}from"./Virtuoso.util-BLr2c_D_.js";import{B as X}from"./BaseMangaGrid-B7fSrGQq.js";import"./ListPreference-BRnS4Htz.js";import"./useManageMangaLibraryState-DfSxDNBs.js";import"./Trackers-D4pSmk7a.js";import"./Avatar-CzKt1jfC.js";import"./Info-CL9iu5FT.js";import"./TextField-Dg_LCFzJ.js";import"./InputAdornment-BDJd29ry.js";import"./CheckCircle-xkArV1s8.js";import"./Mangas-84PL_wCn.js";import"./NumberSetting-D9FD9iaj.js";import"./useMobilePicker-C0KZ8XB1.js";import"./Chip-EZ8XQtIK.js";import"./SelectSetting-DDMcW39h.js";import"./ThreeStateCheckboxInput-CoHTgacU.js";import"./Sync-OBE7YvKv.js";import"./PlayArrow-ZodPhP1O.js";import"./StyledFab-BbuLVg5P.js";const fe=()=>{const{t:l}=E(),[n,L]=b("libraryDuplicatesGridLayout",f.List),[c,M]=b("libraryDuplicatesCheckAlternativeTitles",!1),{setTitle:p,setAction:d}=s.useContext(S);s.useLayoutEffect(()=>(p(l("library.settings.advanced.duplicates.label.title")),d(t.jsxs(t.Fragment,{children:[t.jsx($,{gridLayout:n,onChange:L}),t.jsx(A,{variant:"popover",popupId:"library-dupliactes-settings",children:e=>t.jsxs(t.Fragment,{children:[t.jsx(B,{..._(e),color:"inherit",children:t.jsx(D,{})}),t.jsx(F,{...w(e),children:t.jsx(P,{children:t.jsx(N,{label:l("library.settings.advanced.duplicates.settings.label.check_description"),checked:c,onChange:(a,u)=>M(u)})})})]})})]})),()=>{p(""),d(null)}),[l,n,c]);const{data:i,loading:k,error:g,refetch:T}=V.useGetMangas(W,{condition:{inLibrary:!0}}),[G,h]=s.useState(!0),[o,x]=s.useState({});s.useEffect(()=>{var u;h(!0);const e=(u=i==null?void 0:i.mangas.nodes)!=null?u:[];if(!e.length)return x({}),()=>{};const a=new Worker(new URL("/assets/LibraryDuplicatesWorker-Q48iwAfs.js",import.meta.url),{type:"module"});return a.onmessage=v=>{x(v.data),h(!1)},a.postMessage({mangas:e,checkAlternativeTitles:c}),()=>a.terminate()},[i==null?void 0:i.mangas.nodes,c]);const r=s.useMemo(()=>Object.keys(o).toSorted((e,a)=>e.localeCompare(a)),[o]),m=s.useMemo(()=>r.map(e=>o[e]).flat(),[o]),y=s.useMemo(()=>r.map(e=>o[e]).map(e=>e.length),[o]),I=z.useCreateGroupedComputeItemKey(y,s.useCallback(e=>r[e],[r]),s.useCallback((e,a)=>"".concat(r[a],"-").concat(m[e].id,"}"),[r,m]));return k||G?t.jsx(U,{}):g?t.jsx(H,{message:l("global.error.label.failed_to_load_data"),messageExtra:g.message,retry:()=>T().catch(K())}):n===f.List?t.jsx(O,{groupCounts:y,groupContent:e=>t.jsx(C,{isFirstItem:e===0,children:t.jsx(j,{variant:"h5",component:"h2",children:r[e]})}),computeItemKey:I,itemContent:e=>t.jsx(Q,{children:t.jsx(q,{manga:m[e],gridLayout:n,selected:null,mode:"duplicate"})})}):r.map((e,a)=>t.jsxs(R,{children:[t.jsx(C,{sx:{pt:a===0?void 0:0,pb:0},isFirstItem:!1,children:t.jsx(j,{variant:"h5",component:"h2",children:e})}),t.jsx(X,{mangas:o[e],hasNextPage:!1,loadMore:()=>{},isLoading:!1,gridLayout:n,inLibraryIndicator:!1,horizontal:!0,mode:"duplicate"})]},e))};export{fe as LibraryDuplicates};