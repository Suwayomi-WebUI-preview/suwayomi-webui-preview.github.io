import{c as re,j as e,u as A,M as Oe,C as oe,a as we,A as _,L as R,b as ae,B as U,S as ie,r as j,T as f,d as ce,e as B,f as X,g as z,h as d,i as Me,k as V,I as W,l as le,E as q,m as N,n as k,o as I,p as Re,q as Ue,s as Be,t as De,v as Fe,w as Pe,x as je,y as Ee,z as Ge,D as He,F as ee,G as te}from"./index-vK5lg1Vd.js";import{u as Le,S as ye,A as ze}from"./AppbarSearch-DadxZDEW.js";import{s as be,l as Te,D as K,a as Ve,e as We}from"./Languages-soGtIzlK.js";import{SourceContentType as se}from"./SourceMangas-Duz4Jh0B.js";import{t as $,L as Ce,g as H,I as qe,a as Ke,E as Ie,b as T,c as Xe,d as $e,e as Ne,f as Qe,i as Ye,h as Je}from"./LangSelect-DqQv3ot3.js";import{A as ue}from"./Avatar-DMsLm6pJ.js";import{f as Ze}from"./file-selector-DlHkLoY8.js";import{V as et,S as tt,a as Ae,b as st}from"./Virtuoso.util-DXu927PF.js";import{T as nt}from"./TabsWrapper-uJhwMMcf.js";import{A as rt,a as ot}from"./SortRadioInput-Bqlc_CE6.js";import{C as at}from"./Chip-xzsY1EjH.js";import"./ChaptersDownloadActionMenuItems-CdviKgen.js";import"./Trackers-D4pSmk7a.js";import"./Info-E8AWyAtl.js";import"./CheckCircle-Bn92eDo4.js";import"./ListPreference-BSD2S1dF.js";import"./NumberSetting-BvZB7dUu.js";import"./useMobilePicker-C7GGIl3g.js";import"./SelectSetting-B3_e33xQ.js";import"./FilterList-D4kF2Bt1.js";import"./GridLayouts-By1qaMLs.js";import"./ExpandMore-CpGTUS4L.js";import"./useDebounce-BjyTDflU.js";import"./StyledFab-DegYVaDc.js";import"./BaseMangaGrid-xA-7O6Yq.js";import"./MangaGrid-s5YqmQDG.js";import"./Sync-BIYvYFtY.js";import"./PlayArrow-DpczGwr-.js";import"./cloneObject-DrOPTG0J.js";const it=re(e.jsx("path",{d:"M19.3 16.9c.4-.7.7-1.5.7-2.4 0-2.5-2-4.5-4.5-4.5S11 12 11 14.5s2 4.5 4.5 4.5c.9 0 1.7-.3 2.4-.7l3.2 3.2 1.4-1.4zm-3.8.1c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5M12 20v2C6.48 22 2 17.52 2 12S6.48 2 12 2c4.84 0 8.87 3.44 9.8 8h-2.07c-.64-2.46-2.4-4.47-4.73-5.41V5c0 1.1-.9 2-2 2h-2v2c0 .55-.45 1-1 1H8v2h2v3H9l-4.79-4.79C4.08 10.79 4 11.38 4 12c0 4.41 3.59 8 8 8"}),"TravelExplore"),ct=c=>{const{t}=A(),n=Oe.useIsMobileWidth(),{source:{id:r,name:u,lang:s,iconUrl:h,supportsLatest:o,isNsfw:g,extension:{repo:a}},showSourceRepo:S}=c,l=Number(r)===0?t("source.local_source.title"):u;return e.jsx(oe,{sx:{margin:1,marginTop:0},children:e.jsx(we,{component:R,to:_.sources.childRoutes.browse.path(r),state:{contentType:se.POPULAR,clearCache:!0},children:e.jsxs(ae,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:1.5},children:[e.jsxs(U,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(ue,{variant:"rounded",alt:l,sx:{width:56,height:56,flex:"0 0 auto",mr:1,background:"transparent"},children:e.jsx(ie,{spinnerStyle:{small:!0},imgStyle:{objectFit:"cover",width:"100%",height:"100%"},alt:l,src:j.getValidImgUrlFor(h)})}),e.jsxs(U,{sx:{display:"flex",flexDirection:"column",justifyContent:"center"},children:[e.jsx(f,{variant:"h6",component:"h3",children:l}),e.jsxs(f,{variant:"caption",sx:{display:"block"},children:[$(s),g&&e.jsx(f,{variant:"caption",color:"error",sx:{display:"inline"},children:" 18+"}),S&&e.jsx(f,{variant:"caption",sx:{display:"block"},children:a})]})]})]}),e.jsxs(ce,{sx:{flexDirection:"row",gap:1},children:[o&&e.jsx(B,{variant:"outlined",component:R,to:_.sources.childRoutes.browse.path(r),state:{contentType:se.LATEST,clearCache:!0},children:t("global.button.latest")}),!n&&e.jsx(B,{variant:"outlined",component:R,to:_.sources.childRoutes.browse.path(r),state:{contentType:se.POPULAR,clearCache:!0},children:t("global.button.popular")})]})]})})})};function lt(c){const t=new Set;return c.forEach(n=>{const u=Number(n.id)===0?K.OTHER:n.lang;t.add(u)}),[...t].sort(Te)}function ut(c){const t={};return c.forEach(n=>{var s;const u=Number(n.id)===0?K.OTHER:n.lang;(s=t[u])!=null||(t[u]=[]),t[u].push(n)}),Object.values(t).forEach(n=>n.sort((r,u)=>r.name.localeCompare(u.name))),t}function dt(){const{t:c}=A(),{setAction:t}=X(),[n,r]=z("shownSourceLangs",Ve()),[u]=z("showNsfw",!0),{data:s,loading:h,error:o,refetch:g}=j.useGetSourceList({notifyOnNetworkStatusChange:!0}),a=s==null?void 0:s.sources.nodes,S=d.useMemo(()=>{if(!a||a!=null&&a.length)return!1;const{repo:l}=a[0].extension;return a.some(m=>m.extension.repo!==l)},[a]),L=Me();return d.useEffect(()=>{be().forEach(l=>{let m=!1;n.forEach(p=>{p===l&&(m=!0)}),m||r(p=>(p.push(l),p))})},[]),d.useLayoutEffect(()=>(t(e.jsxs(e.Fragment,{children:[e.jsx(V,{title:c("search.title.global_search"),children:e.jsx(W,{onClick:()=>L(_.sources.childRoutes.searchAll.path),size:"large",color:"inherit",children:e.jsx(it,{})})}),e.jsx(Ce,{shownLangs:n,setShownLangs:r,allLangs:lt(a!=null?a:[]),forcedLangs:be()})]})),()=>{t(null)}),[c,n,a]),h?e.jsx(le,{}):o?e.jsx(q,{message:c("global.error.label.failed_to_load_data"),messageExtra:N(o),retry:()=>g().catch(k())}):(a==null?void 0:a.length)===0?e.jsx(q,{message:c("source.error.label.no_sources_found")}):e.jsx(e.Fragment,{children:Object.entries(ut(a!=null?a:[])).sort((l,m)=>Te(l[0],m[0])).map(([l,m])=>(l===K.OTHER||n.includes(l))&&e.jsxs(d.Fragment,{children:[e.jsx(f,{variant:"h5",component:"h2",sx:{paddingLeft:3,paddingTop:1,paddingBottom:2,fontWeight:"bold"},children:$(l)},l),m.filter(p=>{if(l===K.OTHER){const E=Number(p.id)===0;if(!(n.includes(l)||E))return!1}return u||!p.isNsfw}).map(p=>e.jsx(ct,{source:p,showSourceRepo:S},p.id))]},l))})}function ht(c){const{t}=A(),{extension:{name:n,lang:r,versionName:u,isInstalled:s,hasUpdate:h,isObsolete:o,pkgName:g,iconUrl:a,isNsfw:S,repo:L},handleUpdate:l,showSourceRepo:m,forcedState:p}=c,[D,E]=d.useState(H(s,o,h)),b=p!=null?p:D;d.useEffect(()=>{E(H(s,o,h))},[H(s,o,h)]);const F=r==="all"?t("extension.language.all"):r.toUpperCase(),O=async y=>{const P=$e[y],M=Xe[y];try{switch(E(M),y){case T.INSTALL:await j.updateExtension(g,{install:!0,isObsolete:o}).response;break;case T.UNINSTALL:await j.updateExtension(g,{uninstall:!0,isObsolete:o}).response;break;case T.UPDATE:await j.updateExtension(g,{update:!0,isObsolete:o}).response;break;default:throw new Error('Unexpected ExtensionAction "'.concat(y,'"'))}E(P),l()}catch(G){E(H(s,o,h)),I(t(Ne[y],{count:1}),"error",N(G))}};function v(){switch(b){case T.INSTALL:case T.UPDATE:case T.UNINSTALL:O(b).catch(k());break;case Ie.OBSOLETE:O(T.UNINSTALL).catch(k());break}}return e.jsx(oe,{children:e.jsxs(ae,{sx:{display:"flex",alignItems:"center",gap:1,p:1.5,"&:last-child":{paddingBottom:1.5}},children:[e.jsx(ue,{variant:"rounded",sx:{width:56,height:56,flex:"0 0 auto",background:"transparent"},alt:n,children:e.jsx(ie,{spinnerStyle:{small:!0},imgStyle:{objectFit:"cover",width:"100%",height:"100%"},alt:n,src:j.getValidImgUrlFor(a)})}),e.jsxs(U,{sx:{display:"flex",flexDirection:"column",flexGrow:1,flexShrink:1,wordBreak:"break-word",justifyContent:"center"},children:[e.jsx(f,{variant:"h6",component:"h3",children:n}),e.jsxs(f,{variant:"caption",sx:{display:"block"},children:[F," ",u,S&&e.jsx(f,{variant:"caption",color:"error",sx:{display:"inline"},children:" 18+"})]}),m&&e.jsx(f,{variant:"caption",sx:{display:"block"},children:L})]}),e.jsx(B,{variant:"outlined",sx:{color:b===Ke.OBSOLETE?"red":"inherit",flexShrink:0},onClick:()=>v(),children:t(qe[b])})]})})}const ne=0,ve=1;function xt({tabsMenuHeight:c}){var me,fe;const{t}=A(),{setAction:n}=X(),{data:r,loading:u,error:s,refetch:h}=j.useGetServerSettings({notifyOnNetworkStatusChange:!0}),o=!!(r!=null&&r.settings.extensionRepos.length),g=((me=r==null?void 0:r.settings.extensionRepos.length)!=null?me:0)>1,a=d.useRef(null),[S,L]=z("shownExtensionLangs",We()),[l]=z("showNsfw",!0),[m]=Le("query",ye),[p,D]=d.useState({}),[E,{data:b,loading:F,error:O}]=j.useExtensionListFetch(),v=(fe=b==null?void 0:b.fetchExtensions)==null?void 0:fe.extensions,[y,P]=d.useState([]),M=d.useCallback(()=>D({}),[]);d.useEffect(()=>{E()},[p]);const G=d.useMemo(()=>(v!=null?v:[]).filter(i=>{const x=l||!i.isNsfw;return m?x&&i.name.toLowerCase().includes(m.toLowerCase()):x}),[v,l,m]),{allLangs:de,groupedExtensions:Q}=d.useMemo(()=>Qe(G),[G]),C=d.useMemo(()=>Q.filter(i=>i[ve].length>0).filter(i=>Ye(i[ne])||S.includes(i[ne])),[S,Q]),he=d.useMemo(()=>C.map(i=>i[ve].length),[C]),Y=d.useMemo(()=>C.map(([,i])=>i).flat(1),[C]),_e=et.useCreateGroupedComputeItemKey(he,d.useCallback(i=>C[i][ne],[C]),d.useCallback(i=>Y[i].pkgName,[Y])),xe=i=>{i.name.toLowerCase().endsWith("apk")?(a.current&&(a.current.value=""),I(t("extension.label.installing_file"),"info"),j.installExternalExtension(i).response.then(()=>{M(),I(t("extension.label.installed_successfully"),"success")}).catch(x=>I(t("extension.label.installation_failed"),"error",N(x)))):I(t("global.error.label.invalid_file_type"),"error")};d.useLayoutEffect(()=>(n(e.jsxs(e.Fragment,{children:[e.jsx(ze,{}),e.jsx(V,{title:t("extension.action.label.install_external"),children:e.jsx(W,{onClick:()=>{var i;return(i=a.current)==null?void 0:i.click()},size:"large",color:"inherit",children:e.jsx(Re,{})})}),e.jsx(Ce,{shownLangs:S,setShownLangs:L,allLangs:de})]})),()=>{n(null)}),[t,S,de]),d.useEffect(()=>{const i=async w=>{w.preventDefault();const J=await Ze(w);xe(J[0])},x=w=>{w.preventDefault()};return document.addEventListener("drop",i),document.addEventListener("dragover",x),()=>{document.removeEventListener("drop",i),document.removeEventListener("dragover",x)}},[]);const pe=d.useMemo(()=>e.jsx("input",{type:"file",style:{display:"none"},ref:a,onChange:i=>{var w;const x=(w=i.target.files)==null?void 0:w[0];x&&xe(x)}}),[]),ke=u||F,ge=s!=null?s:O;return ke?e.jsx(le,{}):ge?e.jsx(q,{message:t("global.error.label.failed_to_load_data"),messageExtra:N(ge),retry:()=>{s&&h().catch(k()),O&&E().catch(k())}}):!(v!=null&&v.length)&&!o?e.jsxs(e.Fragment,{children:[pe,e.jsxs(ce,{sx:{alignItems:"center",justifyContent:"center",rowGap:"10px",paddingTop:"20px"},children:[e.jsx(f,{children:t("extension.label.add_repository_info")}),e.jsx(B,{component:R,variant:"contained",to:_.browse.path,children:t("settings.title")})]})]}):e.jsxs(e.Fragment,{children:[pe,e.jsx(tt,{heightToSubtract:c,overscan:window.innerHeight*.5,groupCounts:he,groupContent:i=>{const[x,w]=C[i],J=x===Je.UPDATE_PENDING;return e.jsxs(st,{isFirstItem:i===0,sx:{flexDirection:"row",justifyContent:"space-between",alignItems:"center",pr:1},children:[e.jsx(f,{variant:"h5",component:"h2",children:$(x)}),J&&e.jsx(B,{disabled:!!y.length,variant:"contained",onClick:()=>{const Se=w.map(Z=>Z.pkgName);P(Se),j.updateExtensions(Se,{update:!0}).response.then(()=>M()).catch(Z=>I(t(Ne[T.UPDATE],{count:Q.length}),"error",N(Z))).finally(()=>P([]))},children:t("extension.action.label.update_all")})]},x)},computeItemKey:_e,itemContent:i=>{const x=Y[i];return e.jsx(Ae,{children:e.jsx(ht,{extension:x,handleUpdate:M,showSourceRepo:g,forcedState:y.includes(x.pkgName)?Ie.UPDATING:void 0})})}})]})}const pt=re(e.jsx("path",{d:"M14.94 4.66h-4.72l2.36-2.36zm-4.69 14.71h4.66l-2.33 2.33zM6.1 6.27 1.6 17.73h1.84l.92-2.45h5.11l.92 2.45h1.84L7.74 6.27zm-1.13 7.37 1.94-5.18 1.94 5.18zm10.76 2.5h6.12v1.59h-8.53v-1.29l5.92-8.56h-5.88v-1.6h8.3v1.26z"}),"SortByAlpha"),gt=re(e.jsx("path",{d:"M20 10V8h-4V4h-2v4h-4V4H8v4H4v2h4v4H4v2h4v4h2v-4h4v4h2v-4h4v-2h-4v-4zm-6 4h-4v-4h4z"}),"Tag"),mt=({id:c,name:t,lang:n,iconUrl:r,mangaCount:u})=>{const{t:s}=A(),o=Number(c)===0?s("source.local_source.title"):t;return e.jsx(oe,{children:e.jsx(we,{component:R,to:_.migrate.path(c),children:e.jsxs(ae,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",p:1.5},children:[e.jsxs(U,{sx:{display:"flex"},children:[e.jsx(ue,{variant:"rounded",sx:{width:56,height:56,flex:"0 0 auto",mr:1,background:"transparent"},children:e.jsx(ie,{spinnerStyle:{small:!0},imgStyle:{objectFit:"cover",width:"100%",height:"100%"},alt:o,src:j.getValidImgUrlFor(r)})}),e.jsxs(U,{sx:{display:"flex",flexDirection:"column",justifyContent:"center"},children:[e.jsx(f,{variant:"h6",component:"h3",children:o}),e.jsx(f,{variant:"caption",sx:{display:"block"},children:$(n)})]})]}),e.jsx(at,{sx:{borderRadius:1},size:"small",label:u})]})})})},ft=(c,{sortBy:t,sortOrder:n})=>{if(!c)return[];const r={};c.forEach(({sourceId:s,source:h})=>{var g;const o=(g=r[s])!=null?g:{id:s,name:s,lang:"unknown",iconUrl:null,mangaCount:0,...h};r[s]={...o,mangaCount:o.mangaCount+1}});const u=Object.values(r).toSorted((s,h)=>{switch(t){case je.SOURCE_NAME:return s.name.localeCompare(h.name);case je.MANGA_COUNT:return s.mangaCount-h.mangaCount;default:throw new Error('Unexpected "sortBy" "'.concat(t,'"'))}});switch(n){case Ee.ASC:return u;case Ee.DESC:return u.toReversed();default:throw new Error('Unexpected "sortOrder" "'.concat(n,'"'))}},St=({tabsMenuHeight:c})=>{const{t}=A(),{appBarHeight:n}=X(),{settings:{migrateSortSettings:r}}=Ue(),u=Be(l=>I(t("global.error.label.failed_to_save_changes"),"error",N(l))),{sortBy:s,sortOrder:h}=r,{data:o,loading:g,error:a,refetch:S}=j.useGetMigratableSources({notifyOnNetworkStatusChange:!0}),L=d.useMemo(()=>ft(o==null?void 0:o.mangas.nodes,r),[o==null?void 0:o.mangas.nodes,r]);return g?e.jsx(le,{}):a?e.jsx(q,{message:t("global.error.label.failed_to_load_data"),messageExtra:N(a),retry:()=>S().catch(k())}):e.jsxs(e.Fragment,{children:[e.jsxs(ce,{sx:{position:"sticky",top:"".concat(n+c,"px"),flexDirection:"row",justifyContent:"end",alignItems:"center",gap:1,p:1,backgroundColor:"background.default",zIndex:1},children:[e.jsx(V,{title:t(De[s]),children:e.jsx(W,{size:"large",color:"inherit",onClick:()=>u("migrateSortSettings",{sortBy:(s+1)%2,sortOrder:h}),children:s?e.jsx(gt,{}):e.jsx(pt,{})})}),e.jsx(V,{title:t(Fe[h]),children:e.jsx(W,{size:"large",color:"inherit",onClick:()=>u("migrateSortSettings",{sortBy:s,sortOrder:(h+1)%2}),children:h?e.jsx(rt,{}):e.jsx(ot,{})})})]}),e.jsx(Pe,{sx:{p:0},children:L.map(l=>e.jsx(Ae,{children:e.jsx(mt,{...l})},l.id))})]})};function $t(){const{t:c}=A(),{setTitle:t}=X();d.useLayoutEffect(()=>{t(c("global.label.browse"))},[c]);const n=d.useRef(null),[r,u]=d.useState(0);Ge(n,d.useCallback(()=>u(n.current.offsetHeight),[n.current]));const[s,h]=Le("tab",ye,{}),o=s!=null?s:"source";return s||h(o,"replaceIn"),e.jsxs(nt,{children:[e.jsxs(He,{ref:n,variant:"fullWidth",value:o,onChange:(g,a)=>h(a,"replaceIn"),children:[e.jsx(ee,{value:"source",sx:{textTransform:"none"},label:c("source.title_one")}),e.jsx(ee,{value:"extensions",sx:{textTransform:"none"},label:c("extension.title_other")}),e.jsx(ee,{value:"migrate",sx:{textTransform:"none"},label:c("migrate.title")})]}),e.jsx(te,{index:"source",currentIndex:o,children:e.jsx(dt,{})}),e.jsx(te,{index:"extensions",currentIndex:o,children:e.jsx(xt,{tabsMenuHeight:r})}),e.jsx(te,{index:"migrate",currentIndex:o,children:e.jsx(St,{tabsMenuHeight:r})})]})}export{$t as Browse};
