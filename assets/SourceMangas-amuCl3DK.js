import{n as ue,j as e,r as Oe,i as Pe,W as T,T as de,Y as we,B as k,aG as pe,_ as me,S as B,c as f,b4 as I,at as Ae,u as he,b as M,P as De,f as K,I as xe,z as Re,K as Ge,O as qe,aA as Be,aB as Ne,aC as Ue,h as ge,b1 as He,b0 as ze,b5 as Ve,b6 as We,s as Q,N as Ye,$ as Ke,e as Qe,ap as ce,p as Je,b7 as q,b8 as Xe,a as O,b9 as Ze,ba as et,bb as tt,bc as st,m as at}from"./index-DrMaLApM.js";import{d as nt,u as rt,A as ot,S as it}from"./AppbarSearch-Bo8t0XOw.js";import{b as fe,a as Se,d as lt}from"./ExpandMore-DWQYoU9o.js";import{d as be}from"./FilterList-ChpzFF7M.js";import{G as ct}from"./GridLayouts-CFDkwhe5.js";import{d as ut}from"./Delete-ChLidWWe.js";import{S as dt,O as pt}from"./SortRadioInput-CfTF-eQA.js";import{C as mt}from"./CheckboxInput-B_SfADIl.js";import{a as je,I as ve,S as ht,b as xt,T as gt}from"./TextField-aIlb05nB.js";import{C as Ce}from"./Collapse-DZyVCVdY.js";import{u as ft}from"./useDebounce-3jclh9aT.js";import{I as St}from"./InputAdornment-B2WSPuJe.js";import{T as bt}from"./ThreeStateCheckboxInput-BukVnseN.js";import{S as jt}from"./StyledFab-CoMuShYA.js";import{o as vt}from"./useManageMangaLibraryState-Drg7IjS3.js";import{C as Ct}from"./Chip-Q-qxfKpG.js";import{B as yt}from"./BaseMangaGrid-CGpc8Wwp.js";import{g as Tt}from"./MangaGrid-DF15aEgH.js";import{L as Ft}from"./Link-BzZzh5QK.js";import"./Checkbox-EWU1jBqu.js";import"./SwitchBase-NTpreOjo.js";import"./ListPreference-DOf-BlGP.js";import"./Trackers-D4pSmk7a.js";import"./Card-7woGM9TE.js";import"./CardContent-BdJiGkZ7.js";import"./Avatar-CkuqTDLV.js";import"./Info-BytbeKyX.js";import"./CheckCircle-bCfQw2NS.js";import"./SpinnerImage-BGVImmaP.js";import"./TypographyMaxLines-CLXIUzbB.js";import"./CardActionArea-fvZ2Eb_P.js";import"./NumberSetting-CMsxWZno.js";import"./useMobilePicker-B8NeLnvK.js";import"./SelectSetting-CnAuj9Yv.js";import"./Select-BPexeUAg.js";import"./Mangas-DrH5ig5G.js";import"./Chapters-zQI3XOpW.js";import"./index-BePNABZb.js";import"./Sync-CTLPmO34.js";import"./PlayArrow-BbFLK04Z.js";function Lt(){const{options:{SourcegridLayout:t},setOptions:a}=ue();function o(n){a(s=>({...s,SourcegridLayout:n}))}return e.jsx(ct,{gridLayout:t,onChange:o})}var J={},_t=Pe;Object.defineProperty(J,"__esModule",{value:!0});var ye=J.default=void 0,kt=_t(Oe()),It=e;ye=J.default=(0,kt.default)((0,It.jsx)("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3m3-10H5V5h10z"}),"Save");const Et=t=>{const{state:a,name:o,position:n,group:s,updateFilterValue:u,update:r}=t,[c,l]=T.useState(a),x=d=>{l(d.target.checked);const m=r.filter(S=>!(n===S.position&&s===S.group));u([...m,{type:"checkBoxState",position:n,state:d.target.checked,group:s}])};return a!==void 0?e.jsx(mt,{label:o,checked:c,onChange:x}):null},$t=({name:t})=>e.jsx(de,{sx:{mt:2},variant:"subtitle2",children:t},t);function Mt(t,a,o,n,s,u,r){const[c,l]=T.useState(o);if(t){const x=m=>{const S=t.indexOf("".concat(m.target.value));l(S);const j=u.filter(i=>!(n===i.position&&r===i.group));s([...j,{type:"selectState",position:n,state:S,group:r}])},d=t.map(m=>e.jsx(we,{value:m,children:m},"".concat(a," ").concat(m)));return e.jsxs(je,{sx:{my:1},variant:"standard",children:[e.jsx(ve,{children:a}),e.jsx(ht,{name:a,value:t[c],label:a,onChange:x,children:d})]})}return null}const Ot=({values:t,name:a,state:o,position:n,updateFilterValue:s,update:u,group:r})=>Mt(t,a,o,n,s,u,r),Pt=t=>{const{values:a,name:o,state:n,position:s,group:u,updateFilterValue:r,update:c}=t,[l,x]=T.useState(n),[d,m]=T.useState(!1),S=()=>{m(!d)};if(a){const j=i=>{const h=l;h.index===i?h.ascending=!h.ascending:h.ascending=!0,h.index=i,x(h);const C=c.filter(g=>!(s===g.position&&u===g.group));r([...C,{type:"sortState",position:s,state:h,group:u}])};return e.jsxs(k,{sx:{mx:-2},children:[e.jsxs(pe,{onClick:S,children:[e.jsx(me,{primary:o}),d?e.jsx(fe,{}):e.jsx(Se,{})]}),e.jsx(Ce,{in:d,children:e.jsx(B,{sx:{mx:4},children:a.map((i,h)=>e.jsx(dt,{label:i,checked:l.index===h,sortDescending:!l.ascending,onClick:()=>j(h)},"".concat(o," ").concat(i)))})})]})}return null},wt=t=>{const{state:a,name:o,position:n,group:s,updateFilterValue:u,update:r}=t,[c,l]=T.useState(a||""),x=ft(c,500);return f.useEffect(()=>{const d=r.filter(m=>!(n===m.position&&s===m.group));u([...d,{type:"textState",position:n,state:x,group:s}])},[x]),a!==void 0?e.jsxs(je,{sx:{my:1},variant:"standard",children:[e.jsx(ve,{children:o}),e.jsx(xt,{name:o,value:c,onChange:({target:{value:d}})=>l(d),endAdornment:e.jsx(St,{position:"end",children:e.jsx(nt,{})})})]}):null},At=t=>{switch(t){case I.Ignore:return 0;case I.Include:return 1;case I.Exclude:return 2;default:throw new Error("Unexpected TriState ".concat(t))}},Dt=t=>{switch(t){case 0:return I.Ignore;case 1:return I.Include;case 2:return I.Exclude;default:throw new Error("Unexpected state number ".concat(t))}},Rt=t=>{const{state:a,name:o,position:n,group:s,updateFilterValue:u,update:r}=t,[c,l]=T.useState(At(a)),x=d=>{const m=d===void 0?0:d?1:2;l(m);const S=r.filter(j=>!(n===j.position&&s===j.group));u([...S,{type:"triState",position:n,state:Dt(m),group:s}])};return a!==void 0?e.jsx(bt,{label:o,checked:[void 0,!0,!1][c],onChange:d=>x(d)}):null},Gt=t=>{const{state:a,name:o,position:n,updateFilterValue:s,update:u}=t,[r,c]=T.useState(!1);return e.jsxs(k,{sx:{mx:-2},children:[e.jsxs(pe,{onClick:()=>c(!r),children:[e.jsx(me,{primary:o}),r?e.jsx(fe,{}):e.jsx(Se,{})]}),e.jsx(Ce,{in:r,children:e.jsx(B,{sx:{mx:4},children:e.jsx(Te,{sourceFilter:a,group:n,updateFilterValue:s,update:u})})})]})},qt=({name:t})=>e.jsx(Ae,{sx:{my:1},textAlign:"center",children:t},t);function Te({sourceFilter:t,group:a,updateFilterValue:o,update:n}){return e.jsx(B,{children:t.map((s,u)=>{var c,l;let r=n.find(x=>x.group===a&&x.position===u);switch(r=r&&r.state,s.type){case"CheckBoxFilter":return e.jsx(Et,{name:s.name,state:r!=null?r:s.CheckBoxFilterDefault,position:u,group:a,updateFilterValue:o,update:n},"filters ".concat(s.name));case"GroupFilter":return e.jsx(Gt,{name:s.name,state:s.filters,position:u,updateFilterValue:o,update:n},"filters ".concat(s.name));case"HeaderFilter":return e.jsx($t,{name:s.name},"filters ".concat(s.name));case"SelectFilter":return e.jsx(Ot,{name:s.name,values:s.values,state:r!=null?parseInt(r,10):s.SelectFilterDefault,position:u,group:a,updateFilterValue:o,update:n},"filters ".concat(s.name));case"SeparatorFilter":return e.jsx(qt,{name:s.name},"filters ".concat(s.name));case"SortFilter":return e.jsx(Pt,{name:s.name,values:s.values,state:r!=null?r:{ascending:(c=s.SortFilterDefault)==null?void 0:c.ascending,index:(l=s.SortFilterDefault)==null?void 0:l.index},position:u,group:a,updateFilterValue:o,update:n},"filters ".concat(s.name));case"TextFilter":return e.jsx(wt,{name:s.name,state:r!=null?r:s.TextFilterDefault,position:u,group:a,updateFilterValue:o,update:n},"filters ".concat(s.name));case"TriStateFilter":return e.jsx(Rt,{name:s.name,state:r!=null?r:s.TriStateFilterDefault,position:u,group:a,updateFilterValue:o,update:n},"filters ".concat(s.name));default:throw new Error('Unknown source filter "'.concat(s,'"'))}})},"filters ".concat(a))}function Bt({savedSearches:t={},selectSavedSearch:a,updateSavedSearches:o,sourceFilter:n,updateFilterValue:s,resetFilterValue:u,setTriggerUpdate:r,update:c}){const{t:l}=he(),[x,d]=f.useState(!1),[m,S]=f.useState(""),j=Object.keys(t),i=!!j.length;function h(){u(0),d(!1)}function C(){r(0),d(!1)}return e.jsxs(e.Fragment,{children:[e.jsxs(jt,{onClick:()=>d(!x),variant:"extended",color:"primary",children:[e.jsx(be,{}),l("global.button.filter")]}),e.jsxs(pt,{open:x,onClose:()=>d(!1),children:[e.jsxs(k,{sx:{p:2,pb:i?void 0:0},children:[e.jsxs(k,{sx:{display:"flex",pb:1},children:[e.jsx(M,{onClick:h,children:l("global.button.reset")}),e.jsx(De,{variant:"dialog",popupId:"source-browse-save-search",children:g=>e.jsxs(e.Fragment,{children:[e.jsx(K,{title:l("source.filter.save_search.label.save"),children:e.jsx(xe,{sx:{marginLeft:"auto"},...Re(g),children:e.jsx(ye,{})})}),e.jsxs(Ge,{...qe(g),maxWidth:"xs",fullWidth:!0,children:[e.jsx(Be,{children:l("source.filter.save_search.dialog.label.title")}),e.jsx(Ne,{children:e.jsx(gt,{sx:{width:"100%"},value:m,onChange:y=>S(y.target.value),slotProps:{htmlInput:{maxLength:50}}})}),e.jsxs(Ue,{children:[e.jsx(M,{onClick:()=>{S(""),g.close()},children:l("global.button.cancel")}),e.jsx(M,{onClick:()=>{o(m,"create"),S(""),g.close()},children:l("global.button.ok")})]})]})]})}),e.jsx(M,{variant:"contained",onClick:C,children:l("global.button.submit")})]}),i&&e.jsxs(e.Fragment,{children:[e.jsx(de,{sx:{pb:1},children:"Saved searches"}),e.jsx(B,{sx:{flexDirection:"row"},children:j.map(g=>e.jsx(Ct,{label:g,onClick:()=>{d(!1),a(g)},onDelete:()=>{vt({title:l("global.label.are_you_sure"),message:l("source.filter.save_search.dialog.label.delete",{name:g}),actions:{confirm:{title:l("global.button.delete")}}}).then(()=>o(g,"delete")).catch(ge())},deleteIcon:e.jsx(K,{title:l("source.filter.save_search.label.delete"),children:e.jsx(ut,{})}),variant:"outlined"}))})]})]}),e.jsx(k,{sx:{pb:2,mx:2},children:e.jsx(Te,{sourceFilter:n,updateFilterValue:s,group:void 0,update:c})})]})]})}const Nt=t=>({...t,savedSearches:t.savedSearches?JSON.stringify(t.savedSearches):void 0}),Ut=t=>{var a;return{...t,savedSearches:(a=Ve(t.savedSearches))!=null?a:void 0}},Ht=({meta:t}={},a)=>Ut(He({meta:ze(t)},{savedSearches:void 0},a)),zt=async(t,a,o)=>We(t,[[a,Nt({[a]:o})[a]]]),Vt=(t,a=ge())=>(o,n)=>zt(t,o,n).catch(a),Wt=Q("div")(({theme:t})=>({display:"flex",position:"fixed",top:"64px",width:"100%",zIndex:1,backgroundColor:t.palette.background.default,[t.breakpoints.down("sm")]:{top:"56px"}})),Y=Q(M)(()=>({marginTop:"13px",marginBottom:"13px",marginLeft:"13px"})),Yt=Q(k,{shouldForwardProp:t=>t!=="hasContent"})(({theme:t,hasContent:a})=>({marginTop:"calc(62.5px ".concat(a?"- 8px":"",")"),minHeight:"calc(100vh - 64px - 62.5px)",position:"relative",[t.breakpoints.down("sm")]:{marginTop:"calc(62.5px - 8px ".concat(a?"- 8px":"",")"),minHeight:"calc(100vh - 64px - 64px - 62.5px)"}}));var Kt=(t=>(t[t.POPULAR=0]="POPULAR",t[t.LATEST=1]="LATEST",t[t.SEARCH=2]="SEARCH",t))(Kt||{});const Qt={0:"manga.error.label.no_mangas_found",1:"manga.error.label.no_mangas_found",2:"manga.error.label.no_matches"},Jt=t=>{const a={},o=[];return t.forEach(n=>{!!a[n.id]||(a[n.id]=n,o.push(n))}),o},Xt=(t,a,o,n,s,u)=>{var j;let r;switch(a){case 0:r=O.useGetSourcePopularMangas(t,s);break;case 1:r=O.useGetSourceLatestMangas(t,s);break;case 2:r=O.useSourceSearch(t,o!=null?o:"",n.map(i=>{const{position:h,state:C,group:g}=i;return g!==void 0?{position:g,groupChange:{position:h,[i.type]:C}}:{position:h,[i.type]:C}}),s);break;default:throw new Error('Unknown ContentType "'.concat(a,'"'))}const c=r[1],l=c.findLastIndex(i=>{var h;return!!((h=i.data)!=null&&h.fetchSourceManga)}),x=c[l],d=c.slice(-1)[0].isLoading;let m=!d;const S=f.useMemo(()=>{let i=[];return c.forEach((h,C)=>{var A,E,v;const g=(v=(E=(A=h.data)==null?void 0:A.fetchSourceManga)==null?void 0:E.mangas)!=null?v:[],y=g.filter(N=>!u||!N.inLibrary),P=Jt([...i,...y]);m=!d&&c.length===C+1&&!y.length&&!!g.length,i=P}),i},[c,u]);return l===-1?[r[0],{...r[1][r[1].length-1],filteredOutAllItemsOfFetchedPage:m}]:[r[0],{...c[c.length-1],data:{...x.data,fetchSourceManga:{...x.data.fetchSourceManga,hasNextPage:c.length>l+1?!1:!!((j=x.data.fetchSourceManga)!=null&&j.hasNextPage),mangas:S}},filteredOutAllItemsOfFetchedPage:m}]};function Bs(){var ae,ne,re,oe,ie;const{t}=he(),{setTitle:a,setAction:o}=f.useContext(Ye),{sourceId:n}=Ke(),s=Qe(),u=ce(),{key:r,state:c}=u,{contentType:l=0,clearCache:x=!1}=(ae=ce().state)!=null?ae:{},[d,m]=f.useState(!0);f.useEffect(()=>{m(!1)},[]);const{settings:{hideLibraryEntries:S}}=Je(),{options:j}=ue(),[i]=rt("query",it),[h,C]=q("source-mangas-".concat(n,"-filters"),[]),[g,y]=q("source-mangas-location-".concat(r,"-").concat(n,"-filters"),h!=null?h:[]),[P,w]=f.useState(g),[A,E]=q("source-mangas-".concat(n,"-content-type"),l),[v,N]=q("source-mangas-location-".concat(r,"-").concat(n,"-content-type"),i?2:A);f.useEffect(()=>()=>{C(void 0),E(void 0)},[n]);const D=f.useCallback(()=>{Xe.session.setItem(Tt(u),void 0,!1),window.scrollTo(0,0)},[r]),U=b=>{C(b),y(b),D()},X=b=>{E(b),N(b)},[Z,{data:F,isLoading:H,size:z,abortRequest:Fe,filteredOutAllItemsOfFetchedPage:V}]=Xt(n,v,i,g,1,S),ee=H||V,te=(re=(ne=F==null?void 0:F.fetchSourceManga)==null?void 0:ne.mangas)!=null?re:[],R=!!((oe=F==null?void 0:F.fetchSourceManga)!=null&&oe.hasNextPage),{data:W}=O.useGetSource(Ze,n),p=W==null?void 0:W.source,Le=(ie=p==null?void 0:p.filters)!=null?ie:[],{savedSearches:L={}}=f.useMemo(()=>Ht(p),[p,p==null?void 0:p.meta]),se=Vt(p!=null?p:{id:n},()=>at(t("global.error.label.failed_to_save_changes"),"error")),_e=f.useCallback(b=>{const{query:_,filters:$}=L[b];$&&(w($),U($)),s({pathname:"",search:_?"query=".concat(_):void 0},{state:{...c,contentType:2}})},[L,c]),ke=f.useCallback((b,_)=>{if(_==="delete"){const le={...L};delete le[b],se("savedSearches",le);return}const $={...L,[b]:{query:i!=null?i:void 0,filters:g}};se("savedSearches",$)},[L,i,g]),Ie=ee?void 0:t(Qt[v]),Ee=n==="0"?e.jsxs(e.Fragment,{children:[e.jsxs("span",{children:[t("source.local_source.label.checkout")," "]}),e.jsx(Ft,{href:"https://github.com/Suwayomi/Suwayomi-Server/wiki/Local-Source",target:"_blank",rel:"noreferrer",children:t("source.local_source.label.guide")})]}):void 0,G=f.useCallback((b,_)=>{X(b),D(),i&&!_&&s({pathname:""},{state:{...c,contentType:b}})},[X,i,D]);!!i&&v!==2&&G(2,i);const $e=f.useCallback(()=>{R&&Z(z+1)},[z,R,v]),Me=()=>{w([]),U([])};return f.useEffect(()=>{V&&R&&!H&&Z(z+1)},[V,H]),f.useEffect(()=>{!x||!st.REVALIDATION.includes(n)||O.clearBrowseCacheFor(n)},[x]),f.useEffect(()=>()=>{v!==2||d||(Fe(new Error("SourceMangas(".concat(n,"): search string changed"))),D())},[i]),f.useEffect(()=>{var b;return a((b=p==null?void 0:p.displayName)!=null?b:t("source.title_one")),o(e.jsxs(e.Fragment,{children:[e.jsx(ot,{}),e.jsx(Lt,{}),(p==null?void 0:p.isConfigurable)&&e.jsx(K,{title:t("settings.title"),children:e.jsx(xe,{onClick:()=>s("/sources/".concat(n,"/configure/")),"aria-label":"display more actions",edge:"end",color:"inherit",size:"large",children:e.jsx(et,{})})})]})),()=>{a(""),o(null)}},[t,p]),e.jsxs(Yt,{hasContent:!!te.length,children:[e.jsxs(Wt,{children:[e.jsx(Y,{variant:v===0?"contained":"outlined",startIcon:e.jsx(lt,{}),onClick:()=>G(0),children:t("global.button.popular")}),(p==null?void 0:p.supportsLatest)===void 0||p.supportsLatest?e.jsx(Y,{disabled:!(p!=null&&p.supportsLatest),variant:v===1?"contained":"outlined",startIcon:e.jsx(tt,{}),onClick:()=>G(1),children:t("global.button.latest")}):null,e.jsx(Y,{variant:v===2?"contained":"outlined",startIcon:e.jsx(be,{}),onClick:()=>G(2,i),children:t("global.button.filter")})]}),e.jsx(yt,{mangas:te,hasNextPage:R,loadMore:$e,message:Ie,messageExtra:Ee,isLoading:ee,gridLayout:j.SourcegridLayout,mode:"source",inLibraryIndicator:!0},v),v===2&&e.jsx(Bt,{savedSearches:L,selectSavedSearch:_e,updateSavedSearches:ke,sourceFilter:Le,updateFilterValue:w,setTriggerUpdate:()=>{U(P)},resetFilterValue:Me,update:P})]})}export{Kt as SourceContentType,Bs as SourceMangas};
