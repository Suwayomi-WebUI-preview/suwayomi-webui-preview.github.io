import{c3 as Te,c4 as Ge,c5 as Ee,f as m,c6 as _e,j as t,b3 as Pe,c7 as $e,c8 as Be,b4 as Ae,b2 as Oe,a3 as Y,b_ as Le,au as Fe,aB as Ne,aC as ge,aD as ze,M as se,B as F,ak as We,c9 as te,ca as He,cb as Ue,u as K,a7 as S,cc as $,cd as Ke,aj as Ve,O as qe,ce as Ye,cf as Je,L as J,A as q,aq as ye,cg as Xe,ch as Qe,ci as Ze,m as je,cj as et,h as tt,aE as nt,q as oe,aM as st,aN as ot,Z as Q,aP as rt,d as H,e as O,y as it,n as at,ai as ct,i as L,a1 as lt,I as dt,ck as pe,as as ut,C as Ce,aw as ft,a as we,S as ke,Y as B,bM as ne,b as ht,a9 as gt,T as Me,cl as pt,ah as mt,aJ as xt,al as bt,aA as yt,k as ve,aL as jt,bC as Ct,cm as wt,bD as kt,p as Mt,g as vt,z as me,E as It}from"./index-BAJWok1j.js";import{c as St,C as Dt,S as Rt,L as Tt,F as Gt,T as Et,a as _t}from"./useManageMangaLibraryState-DhHcDMd8.js";import{S as Pt}from"./Sync-B90kR44O.js";import{F as $t}from"./ListPreference-BIyUXmO6.js";import{A as Bt}from"./Avatar-oF6XVfcn.js";import{P as At}from"./PlayArrow-DQV0Yw80.js";import{D as Ot}from"./StyledFab-BzCuVMfw.js";const Lt=(e,n)=>e.filter(s=>n.includes(s)),V=(e,n,s)=>{const i=e.keys[0];Array.isArray(n)?n.forEach((r,o)=>{s((a,p)=>{o<=e.keys.length-1&&(o===0?Object.assign(a,p):a[e.up(e.keys[o])]=p)},r)}):n&&typeof n=="object"?(Object.keys(n).length>e.keys.length?e.keys:Lt(e.keys,Object.keys(n))).forEach(o=>{if(e.keys.includes(o)){const a=n[o];a!==void 0&&s((p,f)=>{i===o?Object.assign(p,f):p[e.up(o)]=f},a)}}):(typeof n=="number"||typeof n=="string")&&s((r,o)=>{Object.assign(r,o)},n)};function Z(e){return"--Grid-".concat(e,"Spacing")}function ee(e){return"--Grid-parent-".concat(e,"Spacing")}const xe="--Grid-columns",U="--Grid-parent-columns",Ft=({theme:e,ownerState:n})=>{const s={};return V(e.breakpoints,n.size,(i,r)=>{let o={};r==="grow"&&(o={flexBasis:0,flexGrow:1,maxWidth:"100%"}),r==="auto"&&(o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),typeof r=="number"&&(o={flexGrow:0,flexBasis:"auto",width:"calc(100% * ".concat(r," / var(").concat(U,") - (var(").concat(U,") - ").concat(r,") * (var(").concat(ee("column"),") / var(").concat(U,")))")}),i(s,o)}),s},Nt=({theme:e,ownerState:n})=>{const s={};return V(e.breakpoints,n.offset,(i,r)=>{let o={};r==="auto"&&(o={marginLeft:"auto"}),typeof r=="number"&&(o={marginLeft:r===0?"0px":"calc(100% * ".concat(r," / var(").concat(U,") + var(").concat(ee("column"),") * ").concat(r," / var(").concat(U,"))")}),i(s,o)}),s},zt=({theme:e,ownerState:n})=>{if(!n.container)return{};const s={[xe]:12};return V(e.breakpoints,n.columns,(i,r)=>{const o=r!=null?r:12;i(s,{[xe]:o,"> *":{[U]:o}})}),s},Wt=({theme:e,ownerState:n})=>{if(!n.container)return{};const s={};return V(e.breakpoints,n.rowSpacing,(i,r)=>{var a;const o=typeof r=="string"?r:(a=e.spacing)==null?void 0:a.call(e,r);i(s,{[Z("row")]:o,"> *":{[ee("row")]:o}})}),s},Ht=({theme:e,ownerState:n})=>{if(!n.container)return{};const s={};return V(e.breakpoints,n.columnSpacing,(i,r)=>{var a;const o=typeof r=="string"?r:(a=e.spacing)==null?void 0:a.call(e,r);i(s,{[Z("column")]:o,"> *":{[ee("column")]:o}})}),s},Ut=({theme:e,ownerState:n})=>{if(!n.container)return{};const s={};return V(e.breakpoints,n.direction,(i,r)=>{i(s,{flexDirection:r})}),s},Kt=({ownerState:e})=>({minWidth:0,boxSizing:"border-box",...e.container&&{display:"flex",flexWrap:"wrap",...e.wrap&&e.wrap!=="wrap"&&{flexWrap:e.wrap},gap:"var(".concat(Z("row"),") var(").concat(Z("column"),")")}}),Vt=e=>{const n=[];return Object.entries(e).forEach(([s,i])=>{i!==!1&&i!==void 0&&n.push("grid-".concat(s,"-").concat(String(i)))}),n},qt=(e,n="xs")=>{function s(i){return i===void 0?!1:typeof i=="string"&&!Number.isNaN(Number(i))||typeof i=="number"&&i>0}if(s(e))return["spacing-".concat(n,"-").concat(String(e))];if(typeof e=="object"&&!Array.isArray(e)){const i=[];return Object.entries(e).forEach(([r,o])=>{s(o)&&i.push("spacing-".concat(r,"-").concat(String(o)))}),i}return[]},Yt=e=>e===void 0?[]:typeof e=="object"?Object.entries(e).map(([n,s])=>"direction-".concat(n,"-").concat(s)):["direction-xs-".concat(String(e))],Jt=Te(),Xt=Ge("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,n)=>n.root});function Qt(e){return Be({props:e,name:"MuiGrid",defaultTheme:Jt})}function Zt(e={}){const{createStyledComponent:n=Xt,useThemeProps:s=Qt,useTheme:i=Ee,componentName:r="MuiGrid"}=e,o=(l,c)=>{const{container:x,direction:g,spacing:u,wrap:h,size:d}=l,b={root:["root",x&&"container",h!=="wrap"&&"wrap-xs-".concat(String(h)),...Yt(g),...Vt(d),...x?qt(u,c.breakpoints.keys[0]):[]]};return Ae(b,y=>Oe(r,y),{})};function a(l,c,x=()=>!0){const g={};return l===null||(Array.isArray(l)?l.forEach((u,h)=>{u!==null&&x(u)&&c.keys[h]&&(g[c.keys[h]]=u)}):typeof l=="object"?Object.keys(l).forEach(u=>{const h=l[u];h!=null&&x(h)&&(g[u]=h)}):g[c.keys[0]]=l),g}const p=n(zt,Ht,Wt,Ft,Ut,Kt,Nt),f=m.forwardRef(function(c,x){var ie,ae,ce,le,de,ue;const g=i(),u=s(c),h=_e(u),{className:d,children:b,columns:y=12,container:M=!1,component:I="div",direction:D="row",wrap:R="wrap",size:E={},offset:C={},spacing:w=0,rowSpacing:T=w,columnSpacing:_=w,unstable_level:k=0,...v}=h,G=a(E,g.breakpoints,P=>P!==!1),j=a(C,g.breakpoints),N=(ie=c.columns)!=null?ie:k?void 0:y,A=(ae=c.spacing)!=null?ae:k?void 0:w,z=(le=(ce=c.rowSpacing)!=null?ce:c.spacing)!=null?le:k?void 0:T,X=(ue=(de=c.columnSpacing)!=null?de:c.spacing)!=null?ue:k?void 0:_,W={...h,level:k,columns:N,container:M,direction:D,wrap:R,spacing:A,rowSpacing:z,columnSpacing:X,size:G,offset:j},Re=o(W,g);return t.jsx(p,{ref:x,as:I,ownerState:W,className:Pe(Re.root,d),...v,children:m.Children.map(b,P=>{var fe,he;return m.isValidElement(P)&&$e(P,["Grid"])&&M&&P.props.container?m.cloneElement(P,{unstable_level:(he=(fe=P.props)==null?void 0:fe.unstable_level)!=null?he:k+1}):P})})});return f.muiName="Grid",f}const re=Zt({createStyledComponent:Y("div",{name:"MuiGrid2",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:s}=e;return[n.root,s.container&&n.container]}}),componentName:"MuiGrid2",useThemeProps:e=>Le({props:e,name:"MuiGrid2"}),useTheme:Fe}),en=m.forwardRef(({MenuItemProps:e,className:n,label:s,LeftIcon:i,renderLabel:r,RightIcon:o,...a},p)=>t.jsxs(Ne,{...e,ref:p,className:n,...a,children:[i&&t.jsx(ge,{children:t.jsx(i,{fontSize:"small"})}),t.jsx(ze,{children:s}),o&&t.jsx(ge,{style:{minWidth:0},children:t.jsx(o,{fontSize:"small"})})]})),Ie=m.forwardRef((e,n)=>{const{parentMenuOpen:s,label:i,renderLabel:r,RightIcon:o=te(Ue,He),LeftIcon:a,children:p,className:f,tabIndex:l,ContainerProps:c={},MenuProps:x,...g}=e,u=se.useIsTouchDevice(),{ref:h,...d}=c,b=m.useRef(null);m.useImperativeHandle(n,()=>b.current);const y=m.useRef(null);m.useImperativeHandle(h,()=>y.current);const M=m.useRef(null),[I,D]=m.useState(!1),R=j=>{if(I!==j){if(e.disabled){D(!1);return}D(j)}},E=j=>{u||(R(!0),d.onMouseEnter&&d.onMouseEnter(j))},C=j=>{R(!1),d.onMouseLeave&&d.onMouseLeave(j)},w=()=>{var N,A;const j=(A=(N=y.current)==null?void 0:N.ownerDocument.activeElement)!=null?A:null;if(M.current==null)return!1;for(const z of M.current.children)if(z===j)return!0;return!1},T=j=>{u||(j.target===y.current&&R(!0),d.onFocus&&d.onFocus(j))},_=j=>{R(!I),d.onClick&&d.onClick(j)},k=j=>{var A,z,X;if(j.key==="Escape")return;w()&&j.stopPropagation();const N=(A=y.current)==null?void 0:A.ownerDocument.activeElement;if(j.key==="ArrowLeft"&&w()&&((z=y.current)==null||z.focus()),j.key==="ArrowRight"&&j.target===y.current&&j.target===N){const W=(X=M.current)==null?void 0:X.children[0];W==null||W.focus()}},v=I&&s;let G;return e.disabled||(G=l!==void 0?l:-1),t.jsxs(F,{...d,ref:y,onFocus:T,onClick:_,tabIndex:G,onMouseEnter:E,onMouseLeave:C,onKeyDown:k,children:[t.jsx(en,{MenuItemProps:g,className:f,ref:b,LeftIcon:a,RightIcon:o,label:i,renderLabel:r}),t.jsx(We,{style:{pointerEvents:"none"},anchorEl:b.current,anchorOrigin:{horizontal:te("right","left"),vertical:"top"},transformOrigin:{horizontal:te("left","right"),vertical:"top"},open:v,autoFocus:!1,disableAutoFocus:!0,disableEnforceFocus:!0,onClose:()=>{R(!1)},...x,children:t.jsx(F,{ref:M,style:{pointerEvents:"auto"},children:p})})]})});Ie.displayName="NestedMenuItem";const tn=["remove_from_library"],nn=({manga:e,handleSelection:n,selectedMangas:s,onClose:i,setHideMenu:r})=>{var T,_;const{t:o}=K(),[a,p]=m.useState(!1),f=!!e,l=s!=null?s:[],c=Xe(f,et),x=Qe(f),g=Ze(f),u=!!e&&e.downloadCount===e.chapters.totalCount,h=!!(e!=null&&e.downloadCount),d=!!(e!=null&&e.unreadCount),b=!!e&&e.unreadCount!==e.chapters.totalCount,{openCategorySelect:y,CategorySelectComponent:M}=St({mangaId:e==null?void 0:e.id,mangaIds:s?S.getIds(l):void 0,onClose:()=>i(!0),addToLibrary:!1}),I=()=>{n==null||n(e.id,!0),i(!0)},D=(k,v)=>{S.performAction(k,e?[e.id]:S.getIds(v),{wasManuallyMarkedAsRead:!0}).catch(je()),i(!tn.includes(k))},{downloadableMangas:R,downloadedMangas:E,unreadMangas:C,readMangas:w}=m.useMemo(()=>({downloadableMangas:[...S.getNotDownloaded(l),...S.getPartiallyDownloaded(l)],downloadedMangas:[...S.getPartiallyDownloaded(l),...S.getFullyDownloaded(l)],unreadMangas:[...S.getUnread(l),...S.getPartiallyRead(l)],readMangas:[...S.getPartiallyRead(l),...S.getFullyRead(l)]}),[l]);return t.jsxs(t.Fragment,{children:[!!n&&f&&t.jsx($,{onClick:I,Icon:Ke,title:o("chapter.action.label.select")}),x(!u)&&t.jsx(Ie,{disabled:g(!R.length),LeftIcon:Ve,label:c("download",R.length),parentMenuOpen:!0,children:t.jsx(Dt,{mangaIds:f?[e.id]:S.getIds(l),closeMenu:()=>i(!0)})}),x(h)&&t.jsx($,{Icon:qe,disabled:g(!E.length),onClick:()=>D("delete",E),title:c("delete",E.length)}),x(d)&&t.jsx($,{Icon:Ye,disabled:g(!C.length),onClick:()=>D("mark_as_read",C),title:c("mark_as_read",C.length)}),x(b)&&t.jsx($,{Icon:Je,disabled:g(!w.length),onClick:()=>D("mark_as_unread",w),title:c("mark_as_unread",w.length)}),f&&t.jsx(J,{to:"".concat(q.migrate.childRoutes.search.path((T=e==null?void 0:e.sourceId)!=null?T:-1,(_=e==null?void 0:e.id)!=null?_:-1),"?query=").concat(e==null?void 0:e.title),state:{mangaTitle:e==null?void 0:e.title},style:{textDecoration:"none",color:"inherit"},children:t.jsx($,{Icon:Rt,title:c("migrate",l.length)})}),f&&t.jsx($,{onClick:()=>{p(!0),r(!0)},Icon:Pt,title:c("track",l.length)}),t.jsx($,{onClick:()=>{y(!0),r(!0)},Icon:Tt,title:c("change_categories",l.length)}),t.jsx($,{onClick:()=>D("remove_from_library",l),Icon:Gt,title:c("remove_from_library",l.length)}),M,a&&t.jsx(ye,{open:!0,maxWidth:"md",fullWidth:!0,scroll:"paper",onClose:()=>{p(!1),i(!0)},children:t.jsx(Et,{manga:e})})]})},sn=({mangaIdToMigrateTo:e,onClose:n})=>{const{t:s}=K(),i=tt(),{mangaId:r}=nt(),o=Number(r),{settings:{migrateChapters:a,migrateCategories:p,migrateTracking:f,deleteChapters:l}}=oe(),[c,x]=m.useState(!1),g=it(je()),u=async h=>{if(o==null)throw new Error('MigrateDialog::migrate: unexpected mangaId "'.concat(o,'"'));at(s("migrate.label.info"),"info"),x(!0);try{await S.migrate(o,e,{mode:h,migrateChapters:a,migrateCategories:p,migrateTracking:f,deleteChapters:l}),i(q.manga.path(e),{replace:!0})}catch(d){x(!1)}};return t.jsxs(ye,{open:!0,fullWidth:!0,onClose:n,children:[t.jsx(st,{children:s("migrate.dialog.title")}),t.jsx(ot,{dividers:!0,children:t.jsxs($t,{children:[t.jsx(Q,{disabled:c,label:s("chapter.title_one"),checked:a,onChange:(h,d)=>g("migrateChapters",d)}),t.jsx(Q,{disabled:c,label:s("category.title.category_one"),checked:p,onChange:(h,d)=>g("migrateCategories",d)}),t.jsx(Q,{disabled:c,label:s("tracking.title"),checked:f,onChange:(h,d)=>g("migrateTracking",d)}),t.jsx(Q,{disabled:c,label:s("migrate.dialog.label.delete_downloaded"),checked:l,onChange:(h,d)=>g("deleteChapters",d)})]})}),t.jsx(rt,{children:t.jsxs(H,{direction:"row",sx:{justifyContent:"space-between",width:"100%"},children:[t.jsx(O,{disabled:c,component:J,to:q.manga.path(e),children:s("migrate.dialog.action.button.show_entry")}),t.jsxs(H,{direction:"row",children:[t.jsx(O,{disabled:c,onClick:n,children:s("global.button.cancel")}),t.jsx(O,{disabled:c,onClick:()=>u("copy"),children:s("global.button.copy")}),t.jsx(O,{disabled:c,onClick:()=>u("migrate"),children:s("global.button.migrate")})]})]})})]})},Se=m.forwardRef(({id:e,selected:n,handleSelection:s,asCheckbox:i=!1,popupState:r},o)=>{const{t:a}=K(),p=se.useIsTouchDevice(),f=m.useMemo(()=>ct(r),[r]),l=u=>{u.stopPropagation(),u.preventDefault()},c=(u,h)=>{l(u),s==null||s(e,h)},x=u=>{p||(l(u),r.open(u),f.onClick(u))};return s?n!==null?i?t.jsx(L,{title:a(n?"global.button.deselect":"global.button.select"),children:t.jsx(lt,{checked:n,onMouseDown:l,onChange:c})}):null:i?t.jsx(L,{title:a("global.button.options"),children:t.jsx(dt,{ref:o,...f,onClick:x,"aria-label":"more",size:"large",onMouseDown:l,children:t.jsx(pe,{})})}):t.jsx(L,{title:a("global.button.options"),children:t.jsx(O,{ref:o,...f,onClick:x,className:"manga-option-button",size:"small",variant:"contained",sx:{minWidth:"unset",paddingX:"0",paddingY:"2.5px",visibility:r.isOpen?"visible":"hidden",pointerEvents:"none","@media not (pointer: fine)":{visibility:"hidden",pointerEvents:void 0}},onMouseDown:u=>u.stopPropagation(),children:t.jsx(pe,{})})}):null}),on=Y("div")({position:"absolute",bottom:0,width:"100%",height:"30%",background:"linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)"}),rn=Y("div")({position:"absolute",bottom:0,width:"100%",height:"20%",background:"linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)"}),an=({manga:e,longPressBind:n,popupState:s,handleClick:i,mangaLinkTo:r,selected:o,inLibraryIndicator:a,isInLibrary:p,gridLayout:f,handleSelection:l,continueReadingButton:c,mangaBadges:x,mode:g})=>{const u=m.useRef(null),{id:h,title:d}=e;return t.jsx(ut,{component:J,...n(()=>s.open(u.current)),onClick:i,to:r,state:{mangaTitle:d},sx:{textDecoration:"none",touchCallout:"none"},children:t.jsxs(F,{sx:{display:"flex",flexDirection:"column",m:.25,outline:o?"4px solid":void 0,borderRadius:o?"1px":void 0,outlineColor:b=>b.palette.primary.main,backgroundColor:b=>o?b.palette.primary.main:void 0,"@media (hover: hover) and (pointer: fine)":{"&:hover .manga-option-button":{visibility:"visible",pointerEvents:"all"},"&:hover .source-manga-library-state-button":{display:"inline-flex"},"&:hover .source-manga-library-state-indicator":{display:g==="source"?"none":"flex"}}},children:[t.jsx(Ce,{sx:{aspectRatio:ft,display:"flex"},children:t.jsxs(we,{sx:{position:"relative",height:"100%"},children:[t.jsx(ke,{alt:d,src:S.getThumbnailUrl(e),imgStyle:a&&p?{height:"100%",width:"100%",objectFit:"cover",filter:"brightness(0.4)"}:{height:"100%",width:"100%",objectFit:"cover"},spinnerStyle:{display:"grid",placeItems:"center"}}),t.jsxs(H,{direction:"row",sx:{alignItems:"start",justifyContent:"space-between",position:"absolute",top:b=>b.spacing(1),left:b=>b.spacing(1),right:b=>b.spacing(1)},children:[x,t.jsx(Se,{ref:u,popupState:s,id:h,selected:o,handleSelection:l})]}),t.jsxs(t.Fragment,{children:[f!==B.Comfortable&&t.jsxs(t.Fragment,{children:[t.jsx(on,{}),t.jsx(rn,{})]}),t.jsxs(H,{direction:"row",sx:{justifyContent:f!==B.Comfortable?"space-between":"end",alignItems:"end",position:"absolute",bottom:0,width:"100%",p:1,gap:1},children:[f!==B.Comfortable&&t.jsx(L,{title:d,placement:"top",children:t.jsx(ne,{component:"h3",sx:{color:"white",textShadow:"0px 0px 3px #000000"},children:d})}),c]})]})]})}),f===B.Comfortable&&t.jsx(H,{sx:{pb:1},children:t.jsx(L,{title:d,placement:"top",children:t.jsx(ne,{component:"h3",sx:{color:b=>o?b.palette.primary.contrastText:"text.primary",height:"3rem",pt:.5},children:d})})})]})})},cn=({manga:e,longPressBind:n,popupState:s,handleClick:i,mangaLinkTo:r,selected:o,inLibraryIndicator:a,isInLibrary:p,handleSelection:f,continueReadingButton:l,mangaBadges:c,mode:x})=>{const g=m.useRef(null),{id:u,title:h}=e;return t.jsx(Ce,{children:t.jsx(we,{component:J,to:r,state:{mangaTitle:h},onClick:i,...n(()=>s.open(g.current)),sx:{touchCallout:"none","@media (hover: hover) and (pointer: fine)":{"&:hover .manga-option-button":{visibility:"visible",pointerEvents:"all"},"&:hover .source-manga-library-state-button":{display:"inline-flex"},"&:hover .source-manga-library-state-indicator":{display:x==="source"?"none":"inline-flex"}}},children:t.jsxs(ht,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:1.5,position:"relative"},children:[t.jsx(Bt,{variant:"rounded",sx:{width:56,height:56,flex:"0 0 auto",marginRight:1},children:t.jsx(ke,{spinnerStyle:{small:!0},imgStyle:{objectFit:"cover",width:"100%",height:"100%",imageRendering:"pixelated",filter:a&&p?"brightness(0.4)":void 0},alt:e.title,src:S.getThumbnailUrl(e)})}),t.jsx(F,{sx:{display:"flex",flexDirection:"row",flexGrow:1,width:"min-content"},children:t.jsx(L,{title:h,placement:"top",children:t.jsx(ne,{variant:"h6",component:"h3",children:h})})}),t.jsxs(H,{direction:"row",sx:{alignItems:"center",gap:.5},children:[c,l,t.jsx(Se,{ref:g,popupState:s,id:u,selected:o,handleSelection:f,asCheckbox:!0})]})]})})})},ln=({showContinueReadingButton:e,chapter:n,mangaLinkTo:s})=>{const{t:i}=K();if(!e||!n)return null;const{sourceOrder:r}=n,o=r===1;return t.jsx(L,{title:i(o?"global.button.start":"global.button.resume"),children:t.jsx(O,{variant:"contained",size:"small",sx:{minWidth:"unset",py:.5,px:.75},component:J,to:"".concat(s,"/chapter/").concat(n.sourceOrder),state:{resumeMode:gt.getReaderResumeMode(n)},onClick:a=>a.stopPropagation(),onMouseDown:a=>a.stopPropagation(),children:t.jsx(At,{})})})},dn=Y("div")(({theme:e})=>({display:"flex",height:"fit-content",borderRadius:e.shape.borderRadius,overflow:"hidden"})),be=Y(Me)(({theme:e})=>({color:e.palette.primary.contrastText,paddingInline:e.spacing(.3)})),un=({inLibraryIndicator:e,updateLibraryState:n,isInLibrary:s,unread:i,downloadCount:r,mode:o})=>{const{t:a}=K(),p=se.useIsTouchDevice(),{settings:{showUnreadBadge:f,showDownloadBadge:l}}=oe();return t.jsxs(dn,{children:[!p&&e&&o==="source"&&t.jsx(O,{className:"source-manga-library-state-button",component:"div",variant:"contained",size:"small",onMouseDown:c=>c.stopPropagation(),onClick:c=>{c.preventDefault(),c.stopPropagation(),n()},sx:{display:"none"},color:s?"error":"primary",children:a(s?"manga.action.library.remove.label.action":"manga.button.add_to_library")}),e&&s&&t.jsx(Me,{className:"source-manga-library-state-indicator",sx:{backgroundColor:"primary.dark",color:"primary.contrastText",p:.3},children:a("manga.button.in_library")}),(f&&o==="default"||o==="duplicate")&&(i!=null?i:0)>0&&t.jsx(be,{sx:{backgroundColor:"primary.main",color:"primary.contrastText"},children:i}),(l&&o==="default"||o==="duplicate")&&(r!=null?r:0)>0&&t.jsx(be,{sx:{backgroundColor:"secondary.main",color:"secondary.contrastText"},children:r})]})},fn=(e,n,s,i)=>{switch(e){case"default":case"source":case"duplicate":return q.manga.path(n);case"migrate.search":return"".concat(q.migrate.childRoutes.search.path(s!=null?s:"-1",n),"?query=").concat(i);case"migrate.select":return"";default:throw new Error('getMangaLinkTo: unexpected MangaCardMode "'.concat(e,'"'))}},hn=e=>{const{manga:n,gridLayout:s,inLibraryIndicator:i,selected:r,handleSelection:o,mode:a="default"}=e,{id:p,firstUnreadChapter:f,downloadCount:l,unreadCount:c}=n,{settings:{showContinueReadingButton:x}}=oe(),{CategorySelectComponent:g,updateLibraryState:u,isInLibrary:h}=_t(n,a==="source"),d=fn(a,n.id,n.sourceId,n.title),[b,y]=m.useState(!1),M=(C,w)=>{const T=a==="default",_=a==="source",k=a==="migrate.select",v=r!==null;if(k||v||(T||_)&&w){if(C.preventDefault(),_){u();return}if(v){o==null||o(p,!r,{selectRange:C.shiftKey});return}if(T){w==null||w();return}k&&y(!0)}},I=pt((C,{context:w})=>{C.shiftKey=!0,M(C,w)}),D=m.useMemo(()=>s===B.List?cn:an,[s]),R=m.useMemo(()=>t.jsx(ln,{showContinueReadingButton:x&&a==="default",chapter:f,mangaLinkTo:d}),[x,f,d]),E=m.useMemo(()=>t.jsx(un,{inLibraryIndicator:i,isInLibrary:h,unread:c,downloadCount:l,updateLibraryState:u,mode:a}),[i,h,c,l,u]);return t.jsxs(t.Fragment,{children:[b&&t.jsx(sn,{mangaIdToMigrateTo:n.id,onClose:()=>y(!1)}),t.jsx(mt,{variant:"popover",popupId:"manga-card-action-menu",children:C=>t.jsxs(t.Fragment,{children:[t.jsx(D,{...e,longPressBind:I,popupState:C,handleClick:M,mangaLinkTo:d,isInLibrary:h,inLibraryIndicator:i,continueReadingButton:R,mangaBadges:E}),!!o&&C.isOpen&&t.jsx(xt,{...bt(C),children:(w,T)=>t.jsx(nn,{manga:n,handleSelection:o,onClose:w,setHideMenu:T})}),g]})})]})},gn=yt.forwardRef(({children:e,...n},s)=>t.jsx(re,{...n,ref:s,container:!0,spacing:1,children:e})),pn=(e,n,s,i=12)=>{const r=Math.ceil(e/n),o=s===B.List?i:i/r;return({children:a,...p})=>t.jsx(re,{...p,size:o,children:a})},De=(e,n,s,i=!1,r,o,a)=>t.jsx(hn,{manga:e,gridLayout:n,inLibraryIndicator:s,selected:i?r==null?void 0:r.includes(e.id):null,handleSelection:o,mode:a}),mn=m.forwardRef(({isLoading:e,mangas:n,inLibraryIndicator:s,GridItemContainer:i,gridLayout:r,isSelectModeActive:o,selectedMangaIds:a,handleSelection:p,mode:f},l)=>t.jsx(re,{ref:l,container:!0,spacing:1,sx:{width:"100%",overflowX:"auto",display:"-webkit-inline-box",flexWrap:"nowrap"},children:e?t.jsx(ve,{}):n.map(c=>t.jsx(i,{children:De(c,r,s,o,a,p,f)},c.id))})),xn=e=>"MangaGrid-snapshot-location-".concat(e.key),bn=m.forwardRef(({isLoading:e,mangas:n,inLibraryIndicator:s,GridItemContainer:i,gridLayout:r,hasNextPage:o,loadMore:a,isSelectModeActive:p,selectedMangaIds:f,handleSelection:l,mode:c},x)=>{const g=jt(),u=xn(g),[h]=Ct(u,void 0),d=m.useRef(),b=y=>{const M=window.location.href;clearTimeout(d.current),d.current=setTimeout(()=>{M===window.location.href&&kt.session.setItem(u,y,!1)},250)};return m.useEffect(()=>clearTimeout(d.current),[g.key,d.current]),t.jsxs(t.Fragment,{children:[t.jsx(F,{ref:x,children:t.jsx(wt,{useWindowScroll:!0,overscan:window.innerHeight*.25,totalCount:n.length,components:{List:gn,Item:i},restoreStateFrom:h,stateChanged:b,endReached:()=>a(),computeItemKey:y=>n[y].id,itemContent:y=>De(n[y],r,s,p,f,l,c)})}),p&&r===B.List?t.jsx(F,{sx:{paddingBottom:Ot}}):e?t.jsx(ve,{}):o?t.jsx("div",{style:{height:"75px"}}):null]})}),In=({mangas:e,isLoading:n,message:s,messageExtra:i,hasNextPage:r,loadMore:o,gridLayout:a,horizontal:p,noFaces:f,inLibraryIndicator:l,isSelectModeActive:c,selectedMangaIds:x,handleSelection:g,mode:u,retry:h,gridWrapperProps:d})=>{var T,_;const{t:b}=K(),{navBarWidth:y}=Mt(),M=m.useRef(null),I=m.useRef(null),[D,R]=m.useState((_=(T=I.current)==null?void 0:T.offsetWidth)!=null?_:Math.max(0,document.documentElement.offsetWidth-y)),[E]=vt("ItemWidth",300),C=m.useMemo(()=>pn(D,E,a),[D,E,a]);return m.useLayoutEffect(()=>{let k;const v=G=>{k=setTimeout(()=>{if(document.body.style.overflow.includes("hidden")){v(250);return}document.body.style.overflowY=a===B.List?"auto":"scroll"},G)};return v(0),()=>{clearTimeout(k)}},[a]),m.useLayoutEffect(()=>()=>{document.body.style.overflowY="auto"},[]),me(I,m.useCallback(()=>{R((()=>{var G;const v=(G=I.current)==null?void 0:G.offsetWidth;return v||document.documentElement.offsetWidth-y})())},[y])),me(M,m.useCallback((k,v)=>{const G=k[0].target.clientHeight,j=G>document.documentElement.clientHeight;if(!n&&G){if(j){v.disconnect();return}o(),v.disconnect()}},[M,o,n])),!n&&e.length===0?t.jsx(It,{noFaces:f,message:s!=null?s:b("manga.error.label.no_mangas_found"),messageExtra:i,retry:h}):t.jsx(F,{...d,ref:I,sx:{...d==null?void 0:d.sx,overflow:"hidden"},children:p?t.jsx(mn,{ref:M,isLoading:n,mangas:e,inLibraryIndicator:l,GridItemContainer:C,gridLayout:a,isSelectModeActive:c,selectedMangaIds:x,handleSelection:g,mode:u}):t.jsx(bn,{ref:M,isLoading:n,mangas:e,inLibraryIndicator:l,GridItemContainer:C,hasNextPage:r,loadMore:o,gridLayout:a,isSelectModeActive:c,selectedMangaIds:x,handleSelection:g,mode:u})})};export{In as M,nn as a,hn as b,xn as g};