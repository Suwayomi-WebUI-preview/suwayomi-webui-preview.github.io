import{R as D,u as v,a as F,c as n,j as r,L as k,T as R,ap as $,k as G,N as H,W as I,aj as O,d as b,f as C,l as Q,m as W}from"./index-B5aGC8by.js";import{u as z,A as V,S as J}from"./AppbarSearch-CnPfJ2mw.js";import{t as K,L as U}from"./LangSelect-Bb4wm7hh.js";import{M as X}from"./MangaGrid-DP-XdEU5.js";import{u as T}from"./useDebounce-BhLQSDhX.js";import{C as Y,a as Z}from"./index-Chhl_QrM.js";import"./useManageMangaLibraryState-ETB_Z_jq.js";import"./CardContent-yoxmt5xa.js";import"./Avatar-inmYLceb.js";import"./TextField-DydWwQbC.js";import"./InputAdornment-zC2HI-g-.js";import"./SpinnerImage-DY7PfT9m.js";import"./Collapse-BQIUub-F.js";import"./Link-CincsVx3.js";import"./ListPreference-Cls_zV2z.js";import"./Checkbox-_9CrxReW.js";import"./SwitchBase-SMFwHQ07.js";import"./NumberSetting-CUaeV-og.js";import"./Info-D2pNk222.js";import"./useMobilePicker-D3Af0UjT.js";import"./Chip-XYuVsKGf.js";import"./SelectSetting-CzaVLHQs.js";import"./Select-BmQhRII8.js";import"./CheckboxInput-C4QZoErh.js";import"./metadataServerSettings-nxgrz9XV.js";import"./metadata-Bm3ZnyOZ.js";import"./Mangas-D61wmQuB.js";import"./Chapters-CR-FHP0x.js";import"./ThreeStateCheckboxInput-jPXIZXel.js";import"./FilterList-DdS9Sf0R.js";import"./cloneObject-DrOPTG0J.js";import"./Switch-BPPAyCDb.js";import"./Delete-CSXImgHK.js";import"./Sync-CH7_VNAq.js";import"./PlayArrow-Ba6jhIqm.js";import"./StyledFab-BQ5uB9n_.js";function ee(s){const t=[];return s.forEach(e=>{t.indexOf(e.lang)===-1&&t.push(e.lang)}),t.sort(Q),t}const se=(s,t)=>s.displayName<t.displayName?-1:s.displayName>t.displayName?1:0,te=(s,t,e)=>{var f,h,o,l;const d=!((f=e.get(s.id))!=null&&f.isLoading),i=!((h=e.get(t.id))!=null&&h.isLoading);if(d&&!i)return-1;if(!d&&i)return 1;if(!d&&!i)return 0;const m=!((o=e.get(s.id))!=null&&o.hasResults),g=!((l=e.get(t.id))!=null&&l.hasResults);return m&&!g?1:g&&!m?-1:0},re=1e3,ae=D.memo(({source:s,onSearchRequestFinished:t,searchString:e,emptyQuery:d,mode:i})=>{var y;const{t:m}=v(),{id:g,displayName:f,lang:h}=s,[o,l]=F.useSourceSearch(g,e!=null?e:"",void 0,1,{skipRequest:!e,addAbortSignal:!0}),{data:S,isLoading:c,error:u,abortRequest:E}=l[0],x=(y=S==null?void 0:S.fetchSourceManga.mangas)!=null?y:[],L=!c&&!x.length;n.useEffect(()=>{t(s,c,!L,!e)},[c,L,e]);let p;return u?p=m("search.error.label.source_search_failed"):L&&(p=m("manga.error.label.no_mangas_found")),n.useEffect(()=>()=>{E(new Error("SourceSearchPreview(".concat(s.id,", ").concat(s.displayName,"): search string changed")))},[e]),!c&&!e||d?null:r.jsxs(r.Fragment,{children:[r.jsx(Y,{sx:{margin:"10px"},children:r.jsxs(Z,{component:k,to:"/sources/".concat(g,"?query=").concat(e),sx:{p:3},children:[r.jsx(R,{variant:"h5",children:f}),r.jsx(R,{variant:"caption",children:K(h)})]})}),p?r.jsx($,{sx:{alignItems:"start"},noFaces:!0,message:p,messageExtra:u&&u.message,retry:u?()=>o(1).catch(G("SourceSearchPreview(".concat(s.id,")::refetch"))):void 0}):r.jsx(X,{mangas:x,isLoading:c,hasNextPage:!1,loadMore:()=>{},horizontal:!0,noFaces:!0,message:p,inLibraryIndicator:!0,mode:i})]})}),He=()=>{var M;const{t:s}=v(),{setTitle:t,setAction:e}=n.useContext(H);I("browse");const{pathname:d,state:i}=O(),m=d.startsWith("/migrate/source"),g=i==null?void 0:i.mangaTitle,[f]=z("query",J),h=T(f,re),[o,l]=b("shownSourceLangs",W()),[S]=b("showNsfw",!0),{data:c}=F.useGetSourceList(),u=(M=c==null?void 0:c.sources.nodes)!=null?M:[],[E,x]=n.useState(new Map),L=T(E,500),p=n.useMemo(()=>[...u].sort(se),[u]),y=n.useMemo(()=>p.filter(a=>o.includes(a.lang)),[p,o]),j=n.useMemo(()=>y.filter(a=>S||!a.isNsfw),[y,S]),A=n.useMemo(()=>[...j].sort((a,w)=>te(a,w,L)),[j,L]),B=n.useCallback(({id:a},w,q,P)=>{x(_=>{const N=new Map(_);return N.set(a,{isLoading:w,hasResults:q,emptySearch:P}),N})},[x]);return n.useEffect(()=>(t(s(m?"migrate.search.title":"search.title.global_search",{title:g})),e(r.jsxs(r.Fragment,{children:[r.jsx(V,{isClosable:!1}),r.jsx(U,{shownLangs:o,setShownLangs:l,allLangs:ee(u),forcedLangs:C()})]})),()=>{t(""),e(null)}),[s,o,l,u]),n.useEffect(()=>{const a=C().filter(w=>!o.includes(w));l([...o,...a])},[]),r.jsx(r.Fragment,{children:A.map(a=>r.jsx(ae,{source:a,onSearchRequestFinished:B,searchString:h,emptyQuery:!f,mode:m?"migrate.select":"source"},a.id))})};export{He as SearchAll};