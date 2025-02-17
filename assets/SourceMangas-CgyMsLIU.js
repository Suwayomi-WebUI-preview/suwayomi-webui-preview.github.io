import{g as he,Z as xe,j as e,c as Ge,aF as F,_ as qe,T as me,aH as Ne,bn as fe,bo as Se,bp as Ue,B as k,aZ as be,aJ as je,d as B,h as b,bq as Be,br as Ve,Q as He,bs as M,b4 as ze,u as ve,e as w,af as Qe,k as X,I as Ce,ag as We,ap as Je,aq as Ke,aS as Ye,aT as Ze,b5 as Xe,aV as et,N as tt,bt as st,n as ee,bu as at,bv as nt,bw as rt,bx as ot,f as it,aK as ct,by as lt,i as ut,aQ as pe,q as dt,bz as U,bA as pt,r as O,bB as gt,aC as ht,bC as xt,A as mt,aR as ft,E as St,a9 as te,as as bt,bD as jt,m as ge,bE as vt,o as Ct}from"./index-BKHCEc_C.js";import{a as yt,u as Ft,A as Tt,S as Et}from"./AppbarSearch-CyZj6_BN.js";import{F as ye}from"./FilterList-oNHCaHcL.js";import{G as Lt}from"./GridLayouts-DDMffU-e.js";import{S as It,O as kt}from"./SortRadioInput-D3mRl0C3.js";import{a as Fe,E as Te}from"./ExpandMore-B8-_bNo0.js";import{a as Ee}from"./ChaptersDownloadActionMenuItems-B24dkt_n.js";import{u as Mt}from"./useDebounce-BtfEaem6.js";import{S as At}from"./StyledFab-DxzONowe.js";import{C as _t}from"./Chip-0kfDpumZ.js";import{B as Pt}from"./BaseMangaGrid-B8brc8ak.js";import{g as wt}from"./MangaGrid-Bg4zpX8G.js";import"./ListPreference-Ev99m7W4.js";import"./Trackers-D4pSmk7a.js";import"./Avatar-CTaLFrXq.js";import"./Info-Ck-M2yCC.js";import"./CheckCircle-DaVyRjmR.js";import"./NumberSetting-TxBtqche.js";import"./useMobilePicker-BcBW50Dc.js";import"./SelectSetting-CTWbuEPD.js";import"./Sync-D2EV-2TB.js";import"./PlayArrow-BgSVOZGS.js";function Ot(){const[t,a]=he("source-grid-layout",xe.Compact);return e.jsx(Lt,{gridLayout:t,onChange:a})}const Rt=Ge(e.jsx("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3m3-10H5V5h10z"}),"Save"),$t=t=>{const{state:a,name:r,position:o,group:s,updateFilterValue:l,update:n}=t,[u,c]=F.useState(a),p=d=>{c(d.target.checked);const g=n.filter(S=>!(o===S.position&&s===S.group));l([...g,{type:"checkBoxState",position:o,state:d.target.checked,group:s}])};return a!==void 0?e.jsx(qe,{label:r,checked:u,onChange:p}):null},Dt=({name:t})=>e.jsx(me,{sx:{mt:2},variant:"subtitle2",children:t},t);function Gt(t,a,r,o,s,l,n){const[u,c]=F.useState(r);if(t){const p=g=>{const S=t.indexOf("".concat(g.target.value));c(S);const j=l.filter(h=>!(o===h.position&&n===h.group));s([...j,{type:"selectState",position:o,state:S,group:n}])},d=t.map(g=>e.jsx(Ne,{value:g,children:g},"".concat(a," ").concat(g)));return e.jsxs(fe,{sx:{my:1},variant:"standard",children:[e.jsx(Se,{children:a}),e.jsx(Ue,{name:a,value:t[u],label:a,onChange:p,children:d})]})}return null}const qt=({values:t,name:a,state:r,position:o,updateFilterValue:s,update:l,group:n})=>Gt(t,a,r,o,s,l,n),Nt=t=>{const{values:a,name:r,state:o,position:s,group:l,updateFilterValue:n,update:u}=t,[c,p]=F.useState(o),[d,g]=F.useState(!1),S=()=>{g(!d)};if(a){const j=h=>{const i=c;i.index===h?i.ascending=!i.ascending:i.ascending=!0,i.index=h,p(i);const v=u.filter(m=>!(s===m.position&&l===m.group));n([...v,{type:"sortState",position:s,state:i,group:l}])};return e.jsxs(k,{sx:{mx:-2},children:[e.jsxs(be,{onClick:S,children:[e.jsx(je,{primary:r}),d?e.jsx(Fe,{}):e.jsx(Te,{})]}),e.jsx(Ee,{in:d,children:e.jsx(B,{sx:{mx:4},children:a.map((h,i)=>e.jsx(It,{label:h,checked:c.index===i,sortDescending:!c.ascending,onClick:()=>j(i)},"".concat(r," ").concat(h)))})})]})}return null},Ut=t=>{const{state:a,name:r,position:o,group:s,updateFilterValue:l,update:n}=t,[u,c]=F.useState(a||""),p=Mt(u,500);return b.useEffect(()=>{const d=n.filter(g=>!(o===g.position&&s===g.group));l([...d,{type:"textState",position:o,state:p,group:s}])},[p]),a!==void 0?e.jsxs(fe,{sx:{my:1},variant:"standard",children:[e.jsx(Se,{children:r}),e.jsx(Be,{name:r,value:u,onChange:({target:{value:d}})=>c(d),endAdornment:e.jsx(Ve,{position:"end",children:e.jsx(yt,{})})})]}):null},Bt=t=>{switch(t){case M.Ignore:return 0;case M.Include:return 1;case M.Exclude:return 2;default:throw new Error("Unexpected TriState ".concat(t))}},Vt=t=>{switch(t){case 0:return M.Ignore;case 1:return M.Include;case 2:return M.Exclude;default:throw new Error("Unexpected state number ".concat(t))}},Ht=t=>{const{state:a,name:r,position:o,group:s,updateFilterValue:l,update:n}=t,[u,c]=F.useState(Bt(a)),p=d=>{const g=d===void 0?0:d?1:2;c(g);const S=n.filter(j=>!(o===j.position&&s===j.group));l([...S,{type:"triState",position:o,state:Vt(g),group:s}])};return a!==void 0?e.jsx(He,{label:r,checked:[void 0,!0,!1][u],onChange:d=>p(d)}):null},zt=t=>{const{state:a,name:r,position:o,updateFilterValue:s,update:l}=t,[n,u]=F.useState(!1);return e.jsxs(k,{sx:{mx:-2},children:[e.jsxs(be,{onClick:()=>u(!n),children:[e.jsx(je,{primary:r}),n?e.jsx(Fe,{}):e.jsx(Te,{})]}),e.jsx(Ee,{in:n,children:e.jsx(B,{sx:{mx:4},children:e.jsx(Le,{sourceFilter:a,group:o,updateFilterValue:s,update:l})})})]})},Qt=({name:t})=>e.jsx(ze,{sx:{my:1},textAlign:"center",children:t},t);function Le({sourceFilter:t,group:a,updateFilterValue:r,update:o}){return e.jsx(B,{children:t.map((s,l)=>{var u,c;let n=o.find(p=>p.group===a&&p.position===l);switch(n=n&&n.state,s.type){case"CheckBoxFilter":return e.jsx($t,{name:s.name,state:n!=null?n:s.CheckBoxFilterDefault,position:l,group:a,updateFilterValue:r,update:o},"filters ".concat(s.name));case"GroupFilter":return e.jsx(zt,{name:s.name,state:s.filters,position:l,updateFilterValue:r,update:o},"filters ".concat(s.name));case"HeaderFilter":return e.jsx(Dt,{name:s.name},"filters ".concat(s.name));case"SelectFilter":return e.jsx(qt,{name:s.name,values:s.values,state:n!=null?parseInt(n,10):s.SelectFilterDefault,position:l,group:a,updateFilterValue:r,update:o},"filters ".concat(s.name));case"SeparatorFilter":return e.jsx(Qt,{name:s.name},"filters ".concat(s.name));case"SortFilter":return e.jsx(Nt,{name:s.name,values:s.values,state:n!=null?n:{ascending:(u=s.SortFilterDefault)==null?void 0:u.ascending,index:(c=s.SortFilterDefault)==null?void 0:c.index},position:l,group:a,updateFilterValue:r,update:o},"filters ".concat(s.name));case"TextFilter":return e.jsx(Ut,{name:s.name,state:n!=null?n:s.TextFilterDefault,position:l,group:a,updateFilterValue:r,update:o},"filters ".concat(s.name));case"TriStateFilter":return e.jsx(Ht,{name:s.name,state:n!=null?n:s.TriStateFilterDefault,position:l,group:a,updateFilterValue:r,update:o},"filters ".concat(s.name));default:throw new Error('Unknown source filter "'.concat(s,'"'))}})},"filters ".concat(a))}function Wt({savedSearches:t={},selectSavedSearch:a,updateSavedSearches:r,sourceFilter:o,updateFilterValue:s,resetFilterValue:l,setTriggerUpdate:n,update:u}){const{t:c}=ve(),[p,d]=b.useState(!1),[g,S]=b.useState(""),j=Object.keys(t),h=!!j.length;function i(){l(0),d(!1)}function v(){n(0),d(!1)}return e.jsxs(e.Fragment,{children:[e.jsxs(At,{onClick:()=>d(!p),variant:"extended",color:"primary",children:[e.jsx(ye,{}),c("global.button.filter")]}),e.jsxs(kt,{open:p,onClose:()=>d(!1),children:[e.jsxs(k,{sx:{p:2,pb:h?void 0:0},children:[e.jsxs(k,{sx:{display:"flex",pb:1},children:[e.jsx(w,{onClick:i,children:c("global.button.reset")}),e.jsx(Qe,{variant:"dialog",popupId:"source-browse-save-search",children:m=>e.jsxs(e.Fragment,{children:[e.jsx(X,{title:c("source.filter.save_search.label.save"),children:e.jsx(Ce,{sx:{marginLeft:"auto"},...We(m),children:e.jsx(Rt,{})})}),e.jsxs(Je,{...Ke(m),maxWidth:"xs",fullWidth:!0,children:[e.jsx(Ye,{children:c("source.filter.save_search.dialog.label.title")}),e.jsx(Ze,{children:e.jsx(Xe,{sx:{width:"100%"},value:g,onChange:y=>S(y.target.value),slotProps:{htmlInput:{maxLength:50}}})}),e.jsxs(et,{children:[e.jsx(w,{onClick:()=>{S(""),m.close()},children:c("global.button.cancel")}),e.jsx(w,{onClick:()=>{r(g,"create"),S(""),m.close()},children:c("global.button.ok")})]})]})]})}),e.jsx(w,{variant:"contained",onClick:v,children:c("global.button.submit")})]}),h&&e.jsxs(e.Fragment,{children:[e.jsx(me,{sx:{pb:1},children:"Saved searches"}),e.jsx(B,{sx:{flexDirection:"row"},children:j.map(m=>e.jsx(_t,{label:m,onClick:()=>{d(!1),a(m)},onDelete:()=>{st({title:c("global.label.are_you_sure"),message:c("source.filter.save_search.dialog.label.delete",{name:m}),actions:{confirm:{title:c("global.button.delete")}}}).then(()=>r(m,"delete")).catch(ee())},deleteIcon:e.jsx(X,{title:c("source.filter.save_search.label.delete"),children:e.jsx(tt,{})}),variant:"outlined"}))})]})]}),e.jsx(k,{sx:{pb:2,mx:2},children:e.jsx(Le,{sourceFilter:o,updateFilterValue:s,group:void 0,update:u})})]})]})}const Jt={savedSearches:void 0},Ie=t=>({...t,savedSearches:t.savedSearches?JSON.stringify(t.savedSearches):void 0}),Kt=t=>{var a;return{...t,savedSearches:(a=nt(t.savedSearches))!=null?a:void 0}},Yt=(t,a)=>Kt(rt("source",{...t,meta:ot(t.meta)},Ie(Jt),void 0,a)),Zt=t=>{const a=Yt(t,b.useEffect);return b.useMemo(()=>a,[t])},Xt=async(t,a,r)=>at(t,[[a,Ie({[a]:r})[a]]]),es=(t,a=ee())=>(r,o)=>Xt(t,r,o).catch(a),ts={id:"-1"},ss=te("div")(({theme:t})=>({display:"flex",position:"sticky",width:"100%",zIndex:1,padding:t.spacing(1),gap:t.spacing(1),backgroundColor:t.palette.background.default})),Z=te(w)(()=>({})),as=te(k)(()=>({minHeight:"100%",position:"relative"}));var ns=(t=>(t[t.POPULAR=0]="POPULAR",t[t.LATEST=1]="LATEST",t[t.SEARCH=2]="SEARCH",t))(ns||{});const rs={0:"manga.error.label.no_mangas_found",1:"manga.error.label.no_mangas_found",2:"manga.error.label.no_matches"},os=t=>{const a={},r=[];return t.forEach(o=>{!!a[o.id]||(a[o.id]=o,r.push(o))}),r},is=(t,a,r,o,s,l)=>{var j;let n;switch(a){case 0:n=O.useGetSourcePopularMangas(t,s);break;case 1:n=O.useGetSourceLatestMangas(t,s);break;case 2:n=O.useSourceSearch(t,r!=null?r:"",o.map(h=>{const{position:i,state:v,group:m}=h;return m!==void 0?{position:m,groupChange:{position:i,[h.type]:v}}:{position:i,[h.type]:v}}),s);break;default:throw new Error('Unknown ContentType "'.concat(a,'"'))}const u=n[1],c=u.findLastIndex(h=>{var i;return!!((i=h.data)!=null&&i.fetchSourceManga)}),p=u[c],d=u.slice(-1)[0].isLoading;let g=!d;const S=b.useMemo(()=>{let h=[];return u.forEach((i,v)=>{var T,R,_;const m=(_=(R=(T=i.data)==null?void 0:T.fetchSourceManga)==null?void 0:R.mangas)!=null?_:[],y=m.filter(C=>!l||!C.inLibrary),V=os([...h,...y]);g=!d&&u.length===v+1&&!y.length&&!!m.length,h=V}),h},[u,l]);return c===-1?[n[0],{...n[1][n[1].length-1],filteredOutAllItemsOfFetchedPage:g}]:[n[0],{...u[u.length-1],data:{...p.data,fetchSourceManga:{...p.data.fetchSourceManga,hasNextPage:u.length>c+1?!1:!!((j=p.data.fetchSourceManga)!=null&&j.hasNextPage),mangas:S}},filteredOutAllItemsOfFetchedPage:g}]};function Ps(){var oe,ie,ce,le,ue;const{t}=ve(),{setTitle:a,setAction:r,appBarHeight:o}=it(),{sourceId:s}=ct(),[l,n]=lt(),u=ut(),c=pe(),{key:p,state:d}=c,{contentType:g=0,clearCache:S=!1}=(oe=pe().state)!=null?oe:{},{settings:{hideLibraryEntries:j}}=dt(),[h]=he("source-grid-layout",xe.Compact),[i]=Ft("query",Et),[v,m]=U("source-mangas-".concat(s,"-filters"),[]),[y,V]=U("source-mangas-location-".concat(p,"-").concat(s,"-filters"),v!=null?v:[]),[A,T]=b.useState(y),[R,_]=U("source-mangas-".concat(s,"-content-type"),g),[C,ke]=U("source-mangas-location-".concat(p,"-").concat(s,"-content-type"),i?2:R),$=b.useCallback(()=>{pt.session.setItem(wt(c),void 0,!1),window.scrollTo(0,0)},[p]),se=b.useRef(i),ae=b.useRef(()=>{});se.current!==i&&C===2&&(se.current=i,ae.current(new Error("SourceMangas(".concat(s,"): search string changed"))),$()),b.useEffect(()=>()=>{m(void 0),_(void 0)},[s]);const H=f=>{m(f),V(f),$()},ne=f=>{_(f),ke(f)},[z,{data:E,error:D,isLoading:Q,size:G,abortRequest:Me,filteredOutAllItemsOfFetchedPage:W}]=is(s,C,i,y,1,j);ae.current=Me;const J=Q||W,K=(ce=(ie=E==null?void 0:E.fetchSourceManga)==null?void 0:ie.mangas)!=null?ce:[],q=!!((le=E==null?void 0:E.fetchSourceManga)!=null&&le.hasNextPage),{data:Y}=O.useGetSource(gt,s),x=Y==null?void 0:Y.source,Ae=(ue=x==null?void 0:x.filters)!=null?ue:[],{savedSearches:L={}}=Zt(x!=null?x:ts),re=es(x!=null?x:{id:"-1"},f=>Ct(t("global.error.label.failed_to_save_changes"),"error",ge(f))),_e=b.useCallback(f=>{const{query:I,filters:P}=L[f];P&&(T(P),H(P)),I&&(l.set("query",I),n(l))},[L,d]),Pe=b.useCallback((f,I)=>{if(I==="delete"){const de={...L};delete de[f],re("savedSearches",de);return}const P={...L,[f]:{query:i!=null?i:void 0,filters:A}};re("savedSearches",P)},[L,i,A]),we=J?void 0:t(rs[C]),Oe=s==="0"?e.jsxs(e.Fragment,{children:[e.jsxs("span",{children:[t("source.local_source.label.checkout")," "]}),e.jsx(ht,{href:"https://github.com/Suwayomi/Suwayomi-Server/wiki/Local-Source",target:"_blank",rel:"noreferrer",children:t("source.local_source.label.guide")})]}):void 0,N=b.useCallback((f,I)=>{ne(f),$(),i&&!I&&u({pathname:""},{state:{...d,contentType:f}})},[ne,i,$]);!!i&&C!==2&&N(2,i);const Re=b.useCallback(()=>{q&&z(G+1)},[G,q,C]),$e=()=>{T([]),H([])};b.useEffect(()=>{W&&q&&!Q&&z(G+1)},[W,Q]),b.useEffect(()=>{!S||!vt.REVALIDATION.includes(s)||O.clearBrowseCacheFor(s)},[S]),b.useLayoutEffect(()=>{var f;return a((f=x==null?void 0:x.displayName)!=null?f:t("source.title_one")),r(e.jsxs(e.Fragment,{children:[e.jsx(Tt,{}),e.jsx(Ot,{}),(x==null?void 0:x.isConfigurable)&&e.jsx(X,{title:t("settings.title"),children:e.jsx(Ce,{onClick:()=>u(mt.sources.childRoutes.configure.path(s)),"aria-label":"display more actions",edge:"end",color:"inherit",size:"large",children:e.jsx(xt,{})})})]})),()=>{a(""),r(null)}},[t,x]);const De=K.length?ft:St;return e.jsxs(as,{children:[e.jsxs(ss,{sx:{top:"".concat(o,"px")},children:[e.jsx(Z,{variant:C===0?"contained":"outlined",startIcon:e.jsx(bt,{}),onClick:()=>N(0),children:t("global.button.popular")}),(x==null?void 0:x.supportsLatest)===void 0||x.supportsLatest?e.jsx(Z,{disabled:!(x!=null&&x.supportsLatest),variant:C===1?"contained":"outlined",startIcon:e.jsx(jt,{}),onClick:()=>N(1),children:t("global.button.latest")}):null,e.jsx(Z,{variant:C===2?"contained":"outlined",startIcon:e.jsx(ye,{}),onClick:()=>N(2,i),children:t("global.button.filter")})]}),(J||!D||!!D&&!!K.length)&&e.jsx(Pt,{gridWrapperProps:{sx:{px:1,pb:1}},mangas:K,hasNextPage:q,loadMore:Re,message:we,messageExtra:Oe,isLoading:J,gridLayout:h,mode:"source",inLibraryIndicator:!0},C),D&&e.jsx(De,{message:t("global.error.label.failed_to_load_data"),messageExtra:ge(D),retry:()=>z(G).catch(ee())}),C===2&&e.jsx(Wt,{savedSearches:L,selectSavedSearch:_e,updateSavedSearches:Pe,sourceFilter:Ae,updateFilterValue:T,setTriggerUpdate:()=>{H(A)},resetFilterValue:$e,update:A})]})}export{ns as SourceContentType,Ps as SourceMangas};
