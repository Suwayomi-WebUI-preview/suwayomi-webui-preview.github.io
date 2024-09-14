import{Y as I,u as q,a as F,c as n,j as s,L as O,T as v,aA as Q,h as D,N as V,aq as W,d as A,g as z,E as Y,B as _}from"./index-Dw9heavt.js";import{u as J,A as K,S as U}from"./AppbarSearch-ByqpsEzi.js";import{s as P,l as X,a as Z}from"./language-j1k9m06k.js";import{t as ee,L as se}from"./LangSelect-DtdvCsyg.js";import{u as T}from"./useDebounce-lHygyAlR.js";import{B as te}from"./BaseMangaGrid-MLdr8x62.js";import{C as re}from"./Card-DK6Yi3vO.js";import{C as oe}from"./CardActionArea-DK298soq.js";import"./useManageMangaLibraryState-BPDKtF-A.js";import"./Trackers-D4pSmk7a.js";import"./CardContent-Cx4ZkK3t.js";import"./Avatar-C140S8eP.js";import"./Info-B1rDU2rr.js";import"./TextField-CNPUFvCA.js";import"./InputAdornment-D5H7myJq.js";import"./CheckCircle-B1mjLfKB.js";import"./SpinnerImage-CftQYwZF.js";import"./TypographyMaxLines-DT1b0jP_.js";import"./Collapse-BjBBEbo1.js";import"./Link-ClqP4Par.js";import"./ListPreference-DyQdlgl8.js";import"./Checkbox-DBlIN38d.js";import"./SwitchBase-0VWIHp6Z.js";import"./NumberSetting-C48fQvnQ.js";import"./useMobilePicker-DJzVZRQ9.js";import"./Chip-BvcCMfdm.js";import"./SelectSetting-SiBgywIB.js";import"./Select-DeB7SOXG.js";import"./CheckboxInput-BVN775mJ.js";import"./Mangas-Z-mW5QFj.js";import"./Chapters-CBQhTc1Q.js";import"./ThreeStateCheckboxInput-DIj5GvsO.js";import"./FilterList-sdUzLC2m.js";import"./cloneObject-DrOPTG0J.js";import"./Switch-By4jV3rb.js";import"./MangaGrid-GM3315jN.js";import"./index-DhU5Pxmd.js";import"./Delete-CIgykoAN.js";import"./Sync-BLV-Xkb7.js";import"./PlayArrow-JzTux3tJ.js";import"./StyledFab-DCGaqm6j.js";function ae(t){const r=[];return t.forEach(e=>{r.indexOf(e.lang)===-1&&r.push(e.lang)}),r.sort(X),r}const ne=(t,r)=>t.displayName<r.displayName?-1:t.displayName>r.displayName?1:0,ie=(t,r,e)=>{var l,x,a,p;const g=!((l=e.get(t.id))!=null&&l.isLoading),i=!((x=e.get(r.id))!=null&&x.isLoading);if(g&&!i)return-1;if(!g&&i)return 1;if(!g&&!i)return 0;const m=!((a=e.get(t.id))!=null&&a.hasResults),u=!((p=e.get(r.id))!=null&&p.hasResults);return m&&!u?1:u&&!m?-1:0},ce=1e3,me=I.memo(({source:t,onSearchRequestFinished:r,searchString:e,emptyQuery:g,mode:i})=>{var y,E;const{t:m}=q(),{id:u,displayName:l,lang:x}=t,[a,p]=F.useSourceSearch(u,e!=null?e:"",void 0,1,{skipRequest:!e,addAbortSignal:!0}),{data:S,isLoading:c,error:L,abortRequest:w}=p[0],j=(E=(y=S==null?void 0:S.fetchSourceManga)==null?void 0:y.mangas)!=null?E:[],d=!c&&!j.length;n.useEffect(()=>{r(t,c,!d,!e)},[c,d,e]);let f;return L?f=m("search.error.label.source_search_failed"):d&&(f=m("manga.error.label.no_mangas_found")),n.useEffect(()=>()=>{w(new Error("SourceSearchPreview(".concat(u,", ").concat(l,"): search string changed")))},[e]),!c&&!e||g?null:s.jsxs(s.Fragment,{children:[s.jsx(re,{sx:{mb:1},children:s.jsxs(oe,{component:O,to:"/sources/".concat(u,"?query=").concat(e),sx:{p:3},children:[s.jsx(v,{variant:"h5",children:l}),s.jsx(v,{variant:"caption",children:ee(x)})]})}),f?s.jsx(Q,{sx:{alignItems:"start",height:void 0},noFaces:!0,message:f,messageExtra:L&&L.message,retry:L?()=>a(1).catch(D("SourceSearchPreview(".concat(t.id,")::refetch"))):void 0}):s.jsx(te,{gridWrapperProps:{sx:{px:0}},mangas:j,isLoading:c,hasNextPage:!1,loadMore:()=>{},horizontal:!0,noFaces:!0,message:f,inLibraryIndicator:!0,mode:i})]})}),Ue=()=>{var C;const{t}=q(),{setTitle:r,setAction:e}=n.useContext(V),{pathname:g,state:i}=W(),m=g.startsWith("/migrate/source"),u=i==null?void 0:i.mangaTitle,[l]=J("query",U),x=T(l,ce),[a,p]=A("shownSourceLangs",Z()),[S]=A("showNsfw",!0),{data:c,loading:L,error:w,refetch:j}=F.useGetSourceList({notifyOnNetworkStatusChange:!0}),d=(C=c==null?void 0:c.sources.nodes)!=null?C:[],[f,y]=n.useState(new Map),E=T(f,500),b=n.useMemo(()=>[...d].sort(ne),[d]),N=n.useMemo(()=>b.filter(o=>a.includes(o.lang)),[b,a]),M=n.useMemo(()=>N.filter(o=>S||!o.isNsfw),[N,S]),R=n.useMemo(()=>[...M].sort((o,h)=>ie(o,h,E)),[M,E]),$=n.useCallback(({id:o},h,k,G)=>{y(H=>{const B=new Map(H);return B.set(o,{isLoading:h,hasResults:k,emptySearch:G}),B})},[y]);return n.useEffect(()=>(r(t(m?"migrate.search.title":"search.title.global_search",{title:u})),e(s.jsxs(s.Fragment,{children:[s.jsx(K,{isClosable:!1}),s.jsx(se,{shownLangs:a,setShownLangs:p,allLangs:ae(d),forcedLangs:P()})]})),()=>{r(""),e(null)}),[t,a,p,d]),n.useEffect(()=>{const o=P().filter(h=>!a.includes(h));p([...a,...o])},[]),L?s.jsx(z,{}):w?s.jsx(Y,{message:t("global.error.label.failed_to_load_data"),messageExtra:w.message,retry:()=>j().catch(D())}):s.jsx(_,{sx:{p:1},children:R.map((o,h)=>s.jsx(_,{sx:{pb:h+1!==R.length?2:0},children:s.jsx(me,{source:o,onSearchRequestFinished:$,searchString:x,emptyQuery:!l,mode:m?"migrate.select":"source"})},o.id))})};export{Ue as SearchAll};
