import{a1 as H,u as T,a as F,c as n,j as s,L as I,T as v,h as q,N as O,av as Q,d as B,g as V,B as _}from"./index-BVmGrBUs.js";import{u as W,A as z,S as J}from"./AppbarSearch-4TGDPsKn.js";import{s as A,l as K,a as U}from"./Languages-BE7dBnqD.js";import{t as X,L as Y}from"./LangSelect-CbiT0O0R.js";import{u as P}from"./useDebounce-0mfXh0oQ.js";import{a as Z,E as ee}from"./EmptyViewAbsoluteCentered-C87ddrgD.js";import{B as se}from"./BaseMangaGrid-BVh8Y5k_.js";import{C as re}from"./Card-BRxUt46b.js";import{C as te}from"./CardActionArea-CIgIk5nK.js";import"./useManageMangaLibraryState-DqOFXj3D.js";import"./Trackers-D4pSmk7a.js";import"./CardContent-CS62nbBb.js";import"./Avatar-BY9Dze0_.js";import"./Info-D-LxlH9c.js";import"./TextField-Dkp98Bg7.js";import"./InputAdornment-CJBsuTiY.js";import"./CheckCircle-DXYWI0az.js";import"./SpinnerImage-DjAkUmuY.js";import"./Refresh-CKR4F3wd.js";import"./TypographyMaxLines-CpFLMsBV.js";import"./Collapse-zSSvrfGh.js";import"./Link-pQ27zRdd.js";import"./ListPreference-zwTaKqgL.js";import"./Checkbox-CH2sJXA1.js";import"./SwitchBase-DREOMkff.js";import"./NumberSetting-D3hgxZzY.js";import"./useMobilePicker-CfFeUaZQ.js";import"./Chip-2KPIsYJv.js";import"./SelectSetting-DgSLNqiW.js";import"./Select-DaY8zb3t.js";import"./CheckboxInput-D_MKFGrG.js";import"./Mangas-Be0-HAcX.js";import"./Chapters-CK-JPigc.js";import"./ThreeStateCheckboxInput-DzETotRm.js";import"./FilterList-6gaWnDnn.js";import"./cloneObject-DrOPTG0J.js";import"./Switch-UO4_To1Z.js";import"./MangaGrid-BIRADhdp.js";import"./index-CN7lqFi0.js";import"./Delete-Bgotw3rN.js";import"./Download-QLG0gbzi.js";import"./Sync-BAwuVjDv.js";import"./PlayArrow-C_yh1jYA.js";import"./StyledFab-Dz6Ea34h.js";function oe(r){const t=[];return r.forEach(e=>{t.indexOf(e.lang)===-1&&t.push(e.lang)}),t.sort(K),t}const ae=(r,t)=>r.displayName<t.displayName?-1:r.displayName>t.displayName?1:0,ne=(r,t,e)=>{var l,x,i,p;const g=!((l=e.get(r.id))!=null&&l.isLoading),c=!((x=e.get(t.id))!=null&&x.isLoading);if(g&&!c)return-1;if(!g&&c)return 1;if(!g&&!c)return 0;const m=!((i=e.get(r.id))!=null&&i.hasResults),u=!((p=e.get(t.id))!=null&&p.hasResults);return m&&!u?1:u&&!m?-1:0},ie=1e3,ce=H.memo(({source:r,onSearchRequestFinished:t,searchString:e,emptyQuery:g,mode:c})=>{var y,E;const{t:m}=T(),{id:u,displayName:l,lang:x}=r,[i,p]=F.useSourceSearch(u,e!=null?e:"",void 0,1,{skipRequest:!e,addAbortSignal:!0}),{data:S,isLoading:a,error:L,abortRequest:w}=p[0],j=(E=(y=S==null?void 0:S.fetchSourceManga)==null?void 0:y.mangas)!=null?E:[],d=!a&&!j.length;n.useEffect(()=>{t(r,a,!d,!e)},[a,d,e]);let f;return L?f=m("search.error.label.source_search_failed"):d&&(f=m("manga.error.label.no_mangas_found")),n.useEffect(()=>()=>{w(new Error("SourceSearchPreview(".concat(u,", ").concat(l,"): search string changed")))},[e]),!a&&!e||g?null:s.jsxs(s.Fragment,{children:[s.jsx(re,{sx:{mb:1},children:s.jsxs(te,{component:I,to:"/sources/".concat(u,"?query=").concat(e),sx:{p:3},children:[s.jsx(v,{variant:"h5",children:l}),s.jsx(v,{variant:"caption",children:X(x)})]})}),f?s.jsx(Z,{sx:{alignItems:"start",height:void 0},noFaces:!0,message:f,messageExtra:L&&L.message,retry:L?()=>i(1).catch(q("SourceSearchPreview(".concat(r.id,")::refetch"))):void 0}):s.jsx(se,{gridWrapperProps:{sx:{px:0}},mangas:j,isLoading:a,hasNextPage:!1,loadMore:()=>{},horizontal:!0,noFaces:!0,message:f,inLibraryIndicator:!0,mode:c})]})}),Ze=()=>{const{t:r}=T(),{setTitle:t,setAction:e}=n.useContext(O),{pathname:g,state:c}=Q(),m=g.startsWith("/migrate/source"),u=c==null?void 0:c.mangaTitle,[l]=W("query",J),x=P(l,ie),[i,p]=B("shownSourceLangs",U()),[S]=B("showNsfw",!0),{data:a,loading:L,error:w,refetch:j}=F.useGetSourceList({notifyOnNetworkStatusChange:!0}),d=n.useMemo(()=>{var o;return(o=a==null?void 0:a.sources.nodes)!=null?o:[]},[a==null?void 0:a.sources.nodes]),[f,y]=n.useState(new Map),E=P(f,500),b=n.useMemo(()=>[...d].sort(ae),[d]),M=n.useMemo(()=>b.filter(o=>i.includes(o.lang)),[b,i]),N=n.useMemo(()=>M.filter(o=>S||!o.isNsfw),[M,S]),R=n.useMemo(()=>[...N].sort((o,h)=>ne(o,h,E)),[N,E]),D=n.useCallback(({id:o},h,$,k)=>{y(G=>{const C=new Map(G);return C.set(o,{isLoading:h,hasResults:$,emptySearch:k}),C})},[y]);return n.useLayoutEffect(()=>(t(r(m?"migrate.search.title":"search.title.global_search",{title:u})),e(s.jsxs(s.Fragment,{children:[s.jsx(z,{isClosable:!1}),s.jsx(Y,{shownLangs:i,setShownLangs:p,allLangs:oe(d),forcedLangs:A()})]})),()=>{t(""),e(null)}),[r,i,p,d]),n.useEffect(()=>{const o=A().filter(h=>!i.includes(h));p([...i,...o])},[]),L?s.jsx(V,{}):w?s.jsx(ee,{message:r("global.error.label.failed_to_load_data"),messageExtra:w.message,retry:()=>j().catch(q())}):s.jsx(_,{sx:{p:1},children:R.map((o,h)=>s.jsx(_,{sx:{pb:h+1!==R.length?2:0},children:s.jsx(ce,{source:o,onSearchRequestFinished:D,searchString:x,emptyQuery:!l,mode:m?"migrate.select":"source"})},o.id))})};export{Ze as SearchAll};
