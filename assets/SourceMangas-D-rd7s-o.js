import{t as fe,j as e,r as Q,i as X,R as T,T as Se,V as De,B as M,aD as ve,X as je,S as N,c as f,a_ as $,aq as Re,u as J,b as E,y as qe,g as K,I as be,A as Ge,K as Ne,O as Be,av as Ue,aw as He,ax as ze,k as Ce,aY as Ve,aX as Ye,a$ as We,b0 as Ke,s as Z,N as Qe,Y as Xe,e as Je,al as he,v as Ze,b1 as G,b2 as et,a as P,b3 as tt,b4 as at,b5 as st,n as nt}from"./index-HpGObMom.js";import{d as rt,u as ot,A as it,S as lt}from"./AppbarSearch-DTf5VeVG.js";import{d as ct}from"./Favorite-D1rZd4E0.js";import{d as ye}from"./FilterList-DRLgUWJg.js";import{G as ut}from"./GridLayouts-QoFmysT2.js";import{d as dt}from"./Delete-B3FIqRTh.js";import{S as pt,O as gt}from"./SortRadioInput-BzjjW6yr.js";import{C as xt}from"./CheckboxInput-DZt_JmI7.js";import{a as Te,I as Fe,M as mt,b as ht,T as ft}from"./TextField-QJkfze_M.js";import{C as _e}from"./Collapse-D127_s4G.js";import{u as St}from"./useDebounce-DgYA6nh_.js";import{I as vt}from"./InputAdornment-E4nPyIb3.js";import{T as jt}from"./ThreeStateCheckboxInput-BsMNiTUI.js";import{S as bt}from"./StyledFab-DHN5OgkQ.js";import{o as Ct}from"./useManageMangaLibraryState-z1JlKftB.js";import{C as yt}from"./Chip-D2mO-luM.js";import{M as Tt,g as Ft}from"./MangaGrid-BaSPn9xT.js";import{L as _t}from"./Link-DQS1Y6B_.js";import"./ViewModule-LPQnA_Jx.js";import"./Checkbox-BhDseyWc.js";import"./SwitchBase-ZGDbjC0G.js";import"./ListPreference-BXtf2M-1.js";import"./Trackers-y2kGZe-r.js";import"./index-DGoyfQ0G.js";import"./TypographyMaxLines-DbM5ohK2.js";import"./Avatar-BxVg5vLD.js";import"./Info-faQbx3vc.js";import"./SpinnerImage-B6Sedis7.js";import"./NumberSetting-CWs4l6U_.js";import"./useMobilePicker-DqaCGJiO.js";import"./SelectSetting-BpJQxFW6.js";import"./Select-BhhiVqsT.js";import"./Mangas-CAWlPm38.js";import"./Chapters-Bk1J_hYC.js";import"./Sync-ekT_FaSF.js";import"./PlayArrow-DV70NZlN.js";function Lt(){const{options:{SourcegridLayout:t},setOptions:s}=fe();function o(n){s(a=>({...a,SourcegridLayout:n}))}return e.jsx(ut,{gridLayout:t,onChange:o})}var ee={},Mt=X;Object.defineProperty(ee,"__esModule",{value:!0});var Le=ee.default=void 0,$t=Mt(Q()),kt=e;Le=ee.default=(0,$t.default)((0,kt.jsx)("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3m3-10H5V5h10z"}),"Save");const It=t=>{const{state:s,name:o,position:n,group:a,updateFilterValue:u,update:r}=t,[c,i]=T.useState(s),p=d=>{i(d.target.checked);const x=r.filter(S=>!(n===S.position&&a===S.group));u([...x,{type:"checkBoxState",position:n,state:d.target.checked,group:a}])};return s!==void 0?e.jsx(xt,{label:o,checked:c,onChange:p}):null},Et=({name:t})=>e.jsx(Se,{sx:{mt:2},variant:"subtitle2",children:t},t);function Pt(t,s,o,n,a,u,r){const[c,i]=T.useState(o);if(t){const p=x=>{const S=t.indexOf("".concat(x.target.value));i(S);const j=u.filter(l=>!(n===l.position&&r===l.group));a([...j,{type:"selectState",position:n,state:S,group:r}])},d=t.map(x=>e.jsx(De,{value:x,children:x},"".concat(s," ").concat(x)));return e.jsxs(Te,{sx:{my:1},variant:"standard",children:[e.jsx(Fe,{children:s}),e.jsx(mt,{name:s,value:t[c],label:s,onChange:p,children:d})]})}return null}const Ot=({values:t,name:s,state:o,position:n,updateFilterValue:a,update:u,group:r})=>Pt(t,s,o,n,a,u,r);var te={},wt=X;Object.defineProperty(te,"__esModule",{value:!0});var ae=te.default=void 0,At=wt(Q()),Dt=e;ae=te.default=(0,At.default)((0,Dt.jsx)("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess");var se={},Rt=X;Object.defineProperty(se,"__esModule",{value:!0});var ne=se.default=void 0,qt=Rt(Q()),Gt=e;ne=se.default=(0,qt.default)((0,Gt.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");const Nt=t=>{const{values:s,name:o,state:n,position:a,group:u,updateFilterValue:r,update:c}=t,[i,p]=T.useState(n),[d,x]=T.useState(!1),S=()=>{x(!d)};if(s){const j=l=>{const m=i;m.index===l?m.ascending=!m.ascending:m.ascending=!0,m.index=l,p(m);const C=c.filter(h=>!(a===h.position&&u===h.group));r([...C,{type:"sortState",position:a,state:m,group:u}])};return e.jsxs(M,{sx:{mx:-2},children:[e.jsxs(ve,{onClick:S,children:[e.jsx(je,{primary:o}),d?e.jsx(ae,{}):e.jsx(ne,{})]}),e.jsx(_e,{in:d,children:e.jsx(N,{sx:{mx:4},children:s.map((l,m)=>e.jsx(pt,{label:l,checked:i.index===m,sortDescending:!i.ascending,onClick:()=>j(m)},"".concat(o," ").concat(l)))})})]})}return null},Bt=t=>{const{state:s,name:o,position:n,group:a,updateFilterValue:u,update:r}=t,[c,i]=T.useState(s||""),p=St(c,500);return f.useEffect(()=>{const d=r.filter(x=>!(n===x.position&&a===x.group));u([...d,{type:"textState",position:n,state:p,group:a}])},[p]),s!==void 0?e.jsxs(Te,{sx:{my:1},variant:"standard",children:[e.jsx(Fe,{children:o}),e.jsx(ht,{name:o,value:c,onChange:({target:{value:d}})=>i(d),endAdornment:e.jsx(vt,{position:"end",children:e.jsx(rt,{})})})]}):null},Ut=t=>{switch(t){case $.Ignore:return 0;case $.Include:return 1;case $.Exclude:return 2;default:throw new Error("Unexpected TriState ".concat(t))}},Ht=t=>{switch(t){case 0:return $.Ignore;case 1:return $.Include;case 2:return $.Exclude;default:throw new Error("Unexpected state number ".concat(t))}},zt=t=>{const{state:s,name:o,position:n,group:a,updateFilterValue:u,update:r}=t,[c,i]=T.useState(Ut(s)),p=d=>{const x=d===void 0?0:d?1:2;i(x);const S=r.filter(j=>!(n===j.position&&a===j.group));u([...S,{type:"triState",position:n,state:Ht(x),group:a}])};return s!==void 0?e.jsx(jt,{label:o,checked:[void 0,!0,!1][c],onChange:d=>p(d)}):null},Vt=t=>{const{state:s,name:o,position:n,updateFilterValue:a,update:u}=t,[r,c]=T.useState(!1);return e.jsxs(M,{sx:{mx:-2},children:[e.jsxs(ve,{onClick:()=>c(!r),children:[e.jsx(je,{primary:o}),r?e.jsx(ae,{}):e.jsx(ne,{})]}),e.jsx(_e,{in:r,children:e.jsx(N,{sx:{mx:4},children:e.jsx(Me,{sourceFilter:s,group:n,updateFilterValue:a,update:u})})})]})},Yt=({name:t})=>e.jsx(Re,{sx:{my:1},textAlign:"center",children:t},t);function Me({sourceFilter:t,group:s,updateFilterValue:o,update:n}){return e.jsx(N,{children:t.map((a,u)=>{var c,i;let r=n.find(p=>p.group===s&&p.position===u);switch(r=r&&r.state,a.type){case"CheckBoxFilter":return e.jsx(It,{name:a.name,state:r!=null?r:a.CheckBoxFilterDefault,position:u,group:s,updateFilterValue:o,update:n},"filters ".concat(a.name));case"GroupFilter":return e.jsx(Vt,{name:a.name,state:a.filters,position:u,updateFilterValue:o,update:n},"filters ".concat(a.name));case"HeaderFilter":return e.jsx(Et,{name:a.name},"filters ".concat(a.name));case"SelectFilter":return e.jsx(Ot,{name:a.name,values:a.values,state:r!=null?parseInt(r,10):a.SelectFilterDefault,position:u,group:s,updateFilterValue:o,update:n},"filters ".concat(a.name));case"SeparatorFilter":return e.jsx(Yt,{name:a.name},"filters ".concat(a.name));case"SortFilter":return e.jsx(Nt,{name:a.name,values:a.values,state:r!=null?r:{ascending:(c=a.SortFilterDefault)==null?void 0:c.ascending,index:(i=a.SortFilterDefault)==null?void 0:i.index},position:u,group:s,updateFilterValue:o,update:n},"filters ".concat(a.name));case"TextFilter":return e.jsx(Bt,{name:a.name,state:r!=null?r:a.TextFilterDefault,position:u,group:s,updateFilterValue:o,update:n},"filters ".concat(a.name));case"TriStateFilter":return e.jsx(zt,{name:a.name,state:r!=null?r:a.TriStateFilterDefault,position:u,group:s,updateFilterValue:o,update:n},"filters ".concat(a.name));default:throw new Error('Unknown source filter "'.concat(a,'"'))}})},"filters ".concat(s))}function Wt({savedSearches:t={},selectSavedSearch:s,updateSavedSearches:o,sourceFilter:n,updateFilterValue:a,resetFilterValue:u,setTriggerUpdate:r,update:c}){const{t:i}=J(),[p,d]=f.useState(!1),[x,S]=f.useState(""),j=Object.keys(t),l=!!j.length;function m(){u(0),d(!1)}function C(){r(0),d(!1)}return e.jsxs(e.Fragment,{children:[e.jsxs(bt,{onClick:()=>d(!p),variant:"extended",color:"primary",children:[e.jsx(ye,{}),i("global.button.filter")]}),e.jsxs(gt,{open:p,onClose:()=>d(!1),children:[e.jsxs(M,{sx:{p:2,pb:l?void 0:0},children:[e.jsxs(M,{sx:{display:"flex",pb:1},children:[e.jsx(E,{onClick:m,children:i("global.button.reset")}),e.jsx(qe,{variant:"dialog",popupId:"source-browse-save-search",children:h=>e.jsxs(e.Fragment,{children:[e.jsx(K,{title:i("source.filter.save_search.label.save"),children:e.jsx(be,{sx:{marginLeft:"auto"},...Ge(h),children:e.jsx(Le,{})})}),e.jsxs(Ne,{...Be(h),maxWidth:"xs",fullWidth:!0,children:[e.jsx(Ue,{children:i("source.filter.save_search.dialog.label.title")}),e.jsx(He,{children:e.jsx(ft,{sx:{width:"100%"},inputProps:{maxLength:50},value:x,onChange:y=>S(y.target.value)})}),e.jsxs(ze,{children:[e.jsx(E,{onClick:()=>{S(""),h.close()},children:i("global.button.cancel")}),e.jsx(E,{onClick:()=>{o(x,"create"),S(""),h.close()},children:i("global.button.ok")})]})]})]})}),e.jsx(E,{variant:"contained",onClick:C,children:i("global.button.submit")})]}),l&&e.jsxs(e.Fragment,{children:[e.jsx(Se,{sx:{pb:1},children:"Saved searches"}),e.jsx(N,{sx:{flexDirection:"row"},children:j.map(h=>e.jsx(yt,{label:h,onClick:()=>{d(!1),s(h)},onDelete:()=>{Ct({title:i("global.label.are_you_sure"),message:i("source.filter.save_search.dialog.label.delete",{name:h}),actions:{confirm:{title:i("global.button.delete")}}}).then(()=>o(h,"delete")).catch(Ce())},deleteIcon:e.jsx(K,{title:i("source.filter.save_search.label.delete"),children:e.jsx(dt,{})}),variant:"outlined"}))})]})]}),e.jsx(M,{sx:{pb:2,mx:2},children:e.jsx(Me,{sourceFilter:n,updateFilterValue:a,group:void 0,update:c})})]})]})}function Kt(t){const{t:s}=J(),{mangas:o,isLoading:n,hasNextPage:a,loadMore:u,message:r,messageExtra:c,gridLayout:i}=t,p=o,d=p.length===0&&o.length>0;return e.jsx(Tt,{mangas:p,isLoading:n,hasNextPage:a,loadMore:u,message:d?s("manga.error.label.no_matches"):r,messageExtra:c,gridLayout:i,inLibraryIndicator:!0,mode:"source"})}const Qt=t=>({...t,savedSearches:t.savedSearches?JSON.stringify(t.savedSearches):void 0}),Xt=t=>{var s;return{...t,savedSearches:(s=We(t.savedSearches))!=null?s:void 0}},Jt=({meta:t}={},s)=>Xt(Ve({meta:Ye(t)},{savedSearches:void 0},s)),Zt=async(t,s,o)=>Ke(t,[[s,Qt({[s]:o})[s]]]),ea=(t,s=Ce())=>(o,n)=>Zt(t,o,n).catch(s),ta=Z("div")(({theme:t})=>({display:"flex",position:"fixed",top:"64px",width:"100%",zIndex:1,backgroundColor:t.palette.background.default,[t.breakpoints.down("sm")]:{top:"56px"}})),W=Z(E)(()=>({marginTop:"13px",marginBottom:"13px",marginLeft:"13px"})),aa=Z(M,{shouldForwardProp:t=>t!=="hasContent"})(({theme:t,hasContent:s})=>({marginTop:"calc(62.5px ".concat(s?"- 8px":"",")"),minHeight:"calc(100vh - 64px - 62.5px)",position:"relative",[t.breakpoints.down("sm")]:{marginTop:"calc(62.5px - 8px ".concat(s?"- 8px":"",")"),minHeight:"calc(100vh - 64px - 64px - 62.5px)"}}));var sa=(t=>(t[t.POPULAR=0]="POPULAR",t[t.LATEST=1]="LATEST",t[t.SEARCH=2]="SEARCH",t))(sa||{});const na={0:"manga.error.label.no_mangas_found",1:"manga.error.label.no_mangas_found",2:"manga.error.label.no_matches"},ra=t=>{const s={},o=[];return t.forEach(n=>{!!s[n.id]||(s[n.id]=n,o.push(n))}),o},oa=(t,s,o,n,a,u)=>{var j;let r;switch(s){case 0:r=P.useGetSourcePopularMangas(t,a);break;case 1:r=P.useGetSourceLatestMangas(t,a);break;case 2:r=P.useSourceSearch(t,o!=null?o:"",n.map(l=>{const{position:m,state:C,group:h}=l;return h!==void 0?{position:h,groupChange:{position:m,[l.type]:C}}:{position:m,[l.type]:C}}),a);break;default:throw new Error('Unknown ContentType "'.concat(s,'"'))}const c=r[1],i=c.findLastIndex(l=>{var m;return!!((m=l.data)!=null&&m.fetchSourceManga)}),p=c[i],d=c.slice(-1)[0].isLoading;let x=!d;const S=f.useMemo(()=>{let l=[];return c.forEach((m,C)=>{var A,k,b;const h=(b=(k=(A=m.data)==null?void 0:A.fetchSourceManga)==null?void 0:k.mangas)!=null?b:[],y=h.filter(B=>!u||!B.inLibrary),O=ra([...l,...y]);x=!d&&c.length===C+1&&!y.length&&!!h.length,l=O}),l},[c,u]);return i===-1?[r[0],{...r[1][r[1].length-1],filteredOutAllItemsOfFetchedPage:x}]:[r[0],{...c[c.length-1],data:{...p.data,fetchSourceManga:{...p.data.fetchSourceManga,hasNextPage:c.length>i+1?!1:!!((j=p.data.fetchSourceManga)!=null&&j.hasNextPage),mangas:S}},filteredOutAllItemsOfFetchedPage:x}]};function za(){var ue,de,pe,ge,xe;const{t}=J(),{setTitle:s,setAction:o}=f.useContext(Qe),{sourceId:n}=Xe(),a=Je(),u=he(),{key:r,state:c}=u,{contentType:i=0,clearCache:p=!1}=(ue=he().state)!=null?ue:{},[d,x]=f.useState(!0);f.useEffect(()=>{x(!1)},[]);const{settings:{hideLibraryEntries:S}}=Ze(),{options:j}=fe(),[l]=ot("query",lt),[m,C]=G("source-mangas-".concat(n,"-filters"),[]),[h,y]=G("source-mangas-location-".concat(r,"-").concat(n,"-filters"),m!=null?m:[]),[O,w]=f.useState(h),[A,k]=G("source-mangas-".concat(n,"-content-type"),i),[b,B]=G("source-mangas-location-".concat(r,"-").concat(n,"-content-type"),l?2:A);f.useEffect(()=>()=>{C(void 0),k(void 0)},[n]);const D=f.useCallback(()=>{et.session.setItem(Ft(u),void 0,!1),window.scrollTo(0,0)},[r]),U=v=>{C(v),y(v),D()},re=v=>{k(v),B(v)},[oe,{data:F,isLoading:H,size:z,abortRequest:$e,filteredOutAllItemsOfFetchedPage:V}]=oa(n,b,l,h,1,S),ie=H||V,le=(pe=(de=F==null?void 0:F.fetchSourceManga)==null?void 0:de.mangas)!=null?pe:[],R=!!((ge=F==null?void 0:F.fetchSourceManga)!=null&&ge.hasNextPage),{data:Y}=P.useGetSource(n),g=Y==null?void 0:Y.source,ke=(xe=g==null?void 0:g.filters)!=null?xe:[],{savedSearches:_={}}=f.useMemo(()=>Jt(g),[g,g==null?void 0:g.meta]),ce=ea(g!=null?g:{id:n},()=>nt(t("global.error.label.failed_to_save_changes"),"error")),Ie=f.useCallback(v=>{const{query:L,filters:I}=_[v];I&&(w(I),U(I)),a({pathname:"",search:L?"query=".concat(L):void 0},{state:{...c,contentType:2}})},[_,c]),Ee=f.useCallback((v,L)=>{if(L==="delete"){const me={..._};delete me[v],ce("savedSearches",me);return}const I={..._,[v]:{query:l!=null?l:void 0,filters:h}};ce("savedSearches",I)},[_,l,h]),Pe=ie?void 0:t(na[b]),Oe=n==="0"?e.jsxs(e.Fragment,{children:[e.jsxs("span",{children:[t("source.local_source.label.checkout")," "]}),e.jsx(_t,{href:"https://github.com/Suwayomi/Suwayomi-Server/wiki/Local-Source",target:"_blank",rel:"noreferrer",children:t("source.local_source.label.guide")})]}):void 0,q=f.useCallback((v,L)=>{re(v),D(),l&&!L&&a({pathname:""},{state:{...c,contentType:v}})},[re,l,D]);!!l&&b!==2&&q(2,l);const we=f.useCallback(()=>{R&&oe(z+1)},[z,R,b]),Ae=()=>{w([]),U([])};return f.useEffect(()=>{V&&R&&!H&&oe(z+1)},[V,H]),f.useEffect(()=>{!p||!st.REVALIDATION.includes(n)||P.clearBrowseCacheFor(n)},[p]),f.useEffect(()=>()=>{b!==2||d||($e(new Error("SourceMangas(".concat(n,"): search string changed"))),D())},[l]),f.useEffect(()=>{var v;return s((v=g==null?void 0:g.displayName)!=null?v:t("source.title")),o(e.jsxs(e.Fragment,{children:[e.jsx(it,{}),e.jsx(Lt,{}),(g==null?void 0:g.isConfigurable)&&e.jsx(K,{title:t("settings.title"),children:e.jsx(be,{onClick:()=>a("/sources/".concat(n,"/configure/")),"aria-label":"display more actions",edge:"end",color:"inherit",size:"large",children:e.jsx(tt,{})})})]})),()=>{s(""),o(null)}},[t,g]),e.jsxs(aa,{hasContent:!!le.length,children:[e.jsxs(ta,{children:[e.jsx(W,{variant:b===0?"contained":"outlined",startIcon:e.jsx(ct,{}),onClick:()=>q(0),children:t("global.button.popular")}),(g==null?void 0:g.supportsLatest)===void 0||g.supportsLatest?e.jsx(W,{disabled:!(g!=null&&g.supportsLatest),variant:b===1?"contained":"outlined",startIcon:e.jsx(at,{}),onClick:()=>q(1),children:t("global.button.latest")}):null,e.jsx(W,{variant:b===2?"contained":"outlined",startIcon:e.jsx(ye,{}),onClick:()=>q(2,l),children:t("global.button.filter")})]}),e.jsx(Kt,{mangas:le,hasNextPage:R,loadMore:we,message:Pe,messageExtra:Oe,isLoading:ie,gridLayout:j.SourcegridLayout},b),b===2&&e.jsx(Wt,{savedSearches:_,selectSavedSearch:Ie,updateSavedSearches:Ee,sourceFilter:ke,updateFilterValue:w,setTriggerUpdate:()=>{U(O)},resetFilterValue:Ae,update:O})]})}export{sa as SourceContentType,za as SourceMangas};
