import{h,bZ as Re,b_ as Ee,b$ as Ge,c0 as _e,j as t,b0 as $e,c1 as Pe,c2 as Be,c3 as Ae,a2 as q,bT as Oe,at as Le,aB as Ne,aC as ge,aD as Fe,M as oe,B as N,ah as We,c4 as te,c5 as ze,c6 as He,u as K,a6 as D,c7 as P,c8 as Ue,ag as Ke,K as Ve,c9 as Ye,ca as qe,L as J,A as Y,ao as ye,cb as Je,cc as Xe,cd as Ze,ce as Qe,n as je,i as et,aE as tt,q as se,aM as nt,aN as ot,Z,aP as st,d as H,e as O,y as rt,o as it,af as at,k as L,a0 as ct,I as lt,cf as pe,ar as ut,C as Ce,aw as dt,a as we,S as ke,Y as B,bC as ne,b as ft,a8 as ht,T as Me,cg as gt,ae as pt,aJ as mt,ai as xt,aA as bt,l as ve,aL as yt,bt as jt,ch as Ct,bu as wt,f as kt,g as Mt,z as me,E as vt}from"./index-DE9pnj51.js";import{c as It,C as St,S as Dt,L as Tt,F as Rt,T as Et,a as Gt}from"./useManageMangaLibraryState-BK98oyGc.js";import{S as _t}from"./Sync-Ck8lsFel.js";import{F as $t}from"./ListPreference-CqHXRha4.js";import{A as Pt}from"./Avatar-CjxFBfhv.js";import{P as Bt}from"./PlayArrow-BYPDkKNP.js";import{D as At}from"./StyledFab-PY7-sncG.js";function Ot(e,n){var o,i,r,s;return h.isValidElement(e)&&n.indexOf((s=e.type.muiName)!=null?s:(r=(i=(o=e.type)==null?void 0:o._payload)==null?void 0:i.value)==null?void 0:r.muiName)!==-1}const Lt=(e,n)=>e.filter(o=>n.includes(o)),V=(e,n,o)=>{const i=e.keys[0];Array.isArray(n)?n.forEach((r,s)=>{o((a,g)=>{s<=e.keys.length-1&&(s===0?Object.assign(a,g):a[e.up(e.keys[s])]=g)},r)}):n&&typeof n=="object"?(Object.keys(n).length>e.keys.length?e.keys:Lt(e.keys,Object.keys(n))).forEach(s=>{if(e.keys.includes(s)){const a=n[s];a!==void 0&&o((g,f)=>{i===s?Object.assign(g,f):g[e.up(s)]=f},a)}}):(typeof n=="number"||typeof n=="string")&&o((r,s)=>{Object.assign(r,s)},n)};function Q(e){return"--Grid-".concat(e,"Spacing")}function ee(e){return"--Grid-parent-".concat(e,"Spacing")}const xe="--Grid-columns",U="--Grid-parent-columns",Nt=({theme:e,ownerState:n})=>{const o={};return V(e.breakpoints,n.size,(i,r)=>{let s={};r==="grow"&&(s={flexBasis:0,flexGrow:1,maxWidth:"100%"}),r==="auto"&&(s={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),typeof r=="number"&&(s={flexGrow:0,flexBasis:"auto",width:"calc(100% * ".concat(r," / var(").concat(U,") - (var(").concat(U,") - ").concat(r,") * (var(").concat(ee("column"),") / var(").concat(U,")))")}),i(o,s)}),o},Ft=({theme:e,ownerState:n})=>{const o={};return V(e.breakpoints,n.offset,(i,r)=>{let s={};r==="auto"&&(s={marginLeft:"auto"}),typeof r=="number"&&(s={marginLeft:r===0?"0px":"calc(100% * ".concat(r," / var(").concat(U,") + var(").concat(ee("column"),") * ").concat(r," / var(").concat(U,"))")}),i(o,s)}),o},Wt=({theme:e,ownerState:n})=>{if(!n.container)return{};const o={[xe]:12};return V(e.breakpoints,n.columns,(i,r)=>{const s=r!=null?r:12;i(o,{[xe]:s,"> *":{[U]:s}})}),o},zt=({theme:e,ownerState:n})=>{if(!n.container)return{};const o={};return V(e.breakpoints,n.rowSpacing,(i,r)=>{var a;const s=typeof r=="string"?r:(a=e.spacing)==null?void 0:a.call(e,r);i(o,{[Q("row")]:s,"> *":{[ee("row")]:s}})}),o},Ht=({theme:e,ownerState:n})=>{if(!n.container)return{};const o={};return V(e.breakpoints,n.columnSpacing,(i,r)=>{var a;const s=typeof r=="string"?r:(a=e.spacing)==null?void 0:a.call(e,r);i(o,{[Q("column")]:s,"> *":{[ee("column")]:s}})}),o},Ut=({theme:e,ownerState:n})=>{if(!n.container)return{};const o={};return V(e.breakpoints,n.direction,(i,r)=>{i(o,{flexDirection:r})}),o},Kt=({ownerState:e})=>({minWidth:0,boxSizing:"border-box",...e.container&&{display:"flex",flexWrap:"wrap",...e.wrap&&e.wrap!=="wrap"&&{flexWrap:e.wrap},gap:"var(".concat(Q("row"),") var(").concat(Q("column"),")")}}),Vt=e=>{const n=[];return Object.entries(e).forEach(([o,i])=>{i!==!1&&i!==void 0&&n.push("grid-".concat(o,"-").concat(String(i)))}),n},Yt=(e,n="xs")=>{function o(i){return i===void 0?!1:typeof i=="string"&&!Number.isNaN(Number(i))||typeof i=="number"&&i>0}if(o(e))return["spacing-".concat(n,"-").concat(String(e))];if(typeof e=="object"&&!Array.isArray(e)){const i=[];return Object.entries(e).forEach(([r,s])=>{o(s)&&i.push("spacing-".concat(r,"-").concat(String(s)))}),i}return[]},qt=e=>e===void 0?[]:typeof e=="object"?Object.entries(e).map(([n,o])=>"direction-".concat(n,"-").concat(o)):["direction-xs-".concat(String(e))],Jt=Re(),Xt=Ee("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,n)=>n.root});function Zt(e){return Pe({props:e,name:"MuiGrid",defaultTheme:Jt})}function Qt(e={}){const{createStyledComponent:n=Xt,useThemeProps:o=Zt,useTheme:i=Ge,componentName:r="MuiGrid"}=e,s=(l,c)=>{const{container:x,direction:m,spacing:u,wrap:p,size:d}=l,b={root:["root",x&&"container",p!=="wrap"&&"wrap-xs-".concat(String(p)),...qt(m),...Vt(d),...x?Yt(u,c.breakpoints.keys[0]):[]]};return Be(b,y=>Ae(r,y),{})};function a(l,c,x=()=>!0){const m={};return l===null||(Array.isArray(l)?l.forEach((u,p)=>{u!==null&&x(u)&&c.keys[p]&&(m[c.keys[p]]=u)}):typeof l=="object"?Object.keys(l).forEach(u=>{const p=l[u];p!=null&&x(p)&&(m[u]=p)}):m[c.keys[0]]=l),m}const g=n(Wt,Ht,zt,Nt,Ut,Kt,Ft),f=h.forwardRef(function(c,x){var ie,ae,ce,le,ue,de;const m=i(),u=o(c),p=_e(u),{className:d,children:b,columns:y=12,container:w=!1,component:v="div",direction:T="row",wrap:C="wrap",size:k={},offset:I={},spacing:R=0,rowSpacing:E=R,columnSpacing:G=R,unstable_level:M=0,...S}=p,_=a(k,m.breakpoints,$=>$!==!1),j=a(I,m.breakpoints),F=(ie=c.columns)!=null?ie:M?void 0:y,A=(ae=c.spacing)!=null?ae:M?void 0:R,W=(le=(ce=c.rowSpacing)!=null?ce:c.spacing)!=null?le:M?void 0:E,X=(de=(ue=c.columnSpacing)!=null?ue:c.spacing)!=null?de:M?void 0:G,z={...p,level:M,columns:F,container:w,direction:T,wrap:C,spacing:A,rowSpacing:W,columnSpacing:X,size:_,offset:j},Te=s(z,m);return t.jsx(g,{ref:x,as:v,ownerState:z,className:$e(Te.root,d),...S,children:h.Children.map(b,$=>{var fe,he;return h.isValidElement($)&&Ot($,["Grid"])&&w&&$.props.container?h.cloneElement($,{unstable_level:(he=(fe=$.props)==null?void 0:fe.unstable_level)!=null?he:M+1}):$})})});return f.muiName="Grid",f}const re=Qt({createStyledComponent:q("div",{name:"MuiGrid2",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:o}=e;return[n.root,o.container&&n.container]}}),componentName:"MuiGrid2",useThemeProps:e=>Oe({props:e,name:"MuiGrid2"}),useTheme:Le}),en=h.forwardRef(({MenuItemProps:e,className:n,label:o,LeftIcon:i,renderLabel:r,RightIcon:s,...a},g)=>t.jsxs(Ne,{...e,ref:g,className:n,...a,children:[i&&t.jsx(ge,{children:t.jsx(i,{fontSize:"small"})}),t.jsx(Fe,{children:o}),s&&t.jsx(ge,{style:{minWidth:0},children:t.jsx(s,{fontSize:"small"})})]})),Ie=h.forwardRef((e,n)=>{const{parentMenuOpen:o,label:i,renderLabel:r,RightIcon:s=te(He,ze),LeftIcon:a,children:g,className:f,tabIndex:l,ContainerProps:c={},MenuProps:x,...m}=e,u=oe.useIsTouchDevice(),{ref:p,...d}=c,b=h.useRef(null);h.useImperativeHandle(n,()=>b.current);const y=h.useRef(null);h.useImperativeHandle(p,()=>y.current);const w=h.useRef(null),[v,T]=h.useState(!1),C=j=>{if(v!==j){if(e.disabled){T(!1);return}T(j)}},k=j=>{u||(C(!0),d.onMouseEnter&&d.onMouseEnter(j))},I=j=>{C(!1),d.onMouseLeave&&d.onMouseLeave(j)},R=()=>{var F,A;const j=(A=(F=y.current)==null?void 0:F.ownerDocument.activeElement)!=null?A:null;if(w.current==null)return!1;for(const W of w.current.children)if(W===j)return!0;return!1},E=j=>{u||(j.target===y.current&&C(!0),d.onFocus&&d.onFocus(j))},G=j=>{C(!v),d.onClick&&d.onClick(j)},M=j=>{var A,W,X;if(j.key==="Escape")return;R()&&j.stopPropagation();const F=(A=y.current)==null?void 0:A.ownerDocument.activeElement;if(j.key==="ArrowLeft"&&R()&&((W=y.current)==null||W.focus()),j.key==="ArrowRight"&&j.target===y.current&&j.target===F){const z=(X=w.current)==null?void 0:X.children[0];z==null||z.focus()}},S=v&&o;let _;return e.disabled||(_=l!==void 0?l:-1),t.jsxs(N,{...d,ref:y,onFocus:E,onClick:G,tabIndex:_,onMouseEnter:k,onMouseLeave:I,onKeyDown:M,children:[t.jsx(en,{MenuItemProps:m,className:f,ref:b,LeftIcon:a,RightIcon:s,label:i,renderLabel:r}),t.jsx(We,{style:{pointerEvents:"none"},anchorEl:b.current,anchorOrigin:{horizontal:te("right","left"),vertical:"top"},transformOrigin:{horizontal:te("left","right"),vertical:"top"},open:S,autoFocus:!1,disableAutoFocus:!0,disableEnforceFocus:!0,onClose:()=>{C(!1)},...x,children:t.jsx(N,{ref:w,style:{pointerEvents:"auto"},children:g})})]})});Ie.displayName="NestedMenuItem";const tn=["remove_from_library"],nn=({manga:e,handleSelection:n,selectedMangas:o,onClose:i,setHideMenu:r})=>{var E,G;const{t:s}=K(),[a,g]=h.useState(!1),f=!!e,l=o!=null?o:[],c=Je(f,Xe),x=Ze(f),m=Qe(f),u=!!e&&e.downloadCount===e.chapters.totalCount,p=!!(e!=null&&e.downloadCount),d=!!(e!=null&&e.unreadCount),b=!!e&&e.unreadCount!==e.chapters.totalCount,{openCategorySelect:y,CategorySelectComponent:w}=It({mangaId:e==null?void 0:e.id,mangaIds:o?D.getIds(l):void 0,onClose:()=>i(!0),addToLibrary:!1}),v=()=>{n==null||n(e.id,!0),i(!0)},T=(M,S)=>{D.performAction(M,e?[e.id]:D.getIds(S),{wasManuallyMarkedAsRead:!0}).catch(je()),i(!tn.includes(M))},{downloadableMangas:C,downloadedMangas:k,unreadMangas:I,readMangas:R}=h.useMemo(()=>({downloadableMangas:[...D.getNotDownloaded(l),...D.getPartiallyDownloaded(l)],downloadedMangas:[...D.getPartiallyDownloaded(l),...D.getFullyDownloaded(l)],unreadMangas:[...D.getUnread(l),...D.getPartiallyRead(l)],readMangas:[...D.getPartiallyRead(l),...D.getFullyRead(l)]}),[l]);return t.jsxs(t.Fragment,{children:[!!n&&f&&t.jsx(P,{onClick:v,Icon:Ue,title:s("chapter.action.label.select")}),x(!u)&&t.jsx(Ie,{disabled:m(!C.length),LeftIcon:Ke,label:c("download",C.length),parentMenuOpen:!0,children:t.jsx(St,{mangaIds:f?[e.id]:D.getIds(l),closeMenu:()=>i(!0)})}),x(p)&&t.jsx(P,{Icon:Ve,disabled:m(!k.length),onClick:()=>T("delete",k),title:c("delete",k.length)}),x(d)&&t.jsx(P,{Icon:Ye,disabled:m(!I.length),onClick:()=>T("mark_as_read",I),title:c("mark_as_read",I.length)}),x(b)&&t.jsx(P,{Icon:qe,disabled:m(!R.length),onClick:()=>T("mark_as_unread",R),title:c("mark_as_unread",R.length)}),f&&t.jsx(J,{to:"".concat(Y.migrate.childRoutes.search.path((E=e==null?void 0:e.sourceId)!=null?E:-1,(G=e==null?void 0:e.id)!=null?G:-1),"?query=").concat(e==null?void 0:e.title),state:{mangaTitle:e==null?void 0:e.title},style:{textDecoration:"none",color:"inherit"},children:t.jsx(P,{Icon:Dt,title:c("migrate",l.length)})}),f&&t.jsx(P,{onClick:()=>{g(!0),r(!0)},Icon:_t,title:c("track",l.length)}),t.jsx(P,{onClick:()=>{y(!0),r(!0)},Icon:Tt,title:c("change_categories",l.length)}),t.jsx(P,{onClick:()=>T("remove_from_library",l),Icon:Rt,title:c("remove_from_library",l.length)}),w,a&&t.jsx(ye,{open:!0,maxWidth:"md",fullWidth:!0,scroll:"paper",onClose:()=>{g(!1),i(!0)},children:t.jsx(Et,{manga:e})})]})},on=({mangaIdToMigrateTo:e,onClose:n})=>{const{t:o}=K(),i=et(),{mangaId:r}=tt(),s=Number(r),{settings:{migrateChapters:a,migrateCategories:g,migrateTracking:f,deleteChapters:l}}=se(),[c,x]=h.useState(!1),m=rt(je()),u=async p=>{if(s==null)throw new Error('MigrateDialog::migrate: unexpected mangaId "'.concat(s,'"'));it(o("migrate.label.info"),"info"),x(!0);try{await D.migrate(s,e,{mode:p,migrateChapters:a,migrateCategories:g,migrateTracking:f,deleteChapters:l}),i(Y.manga.path(e),{replace:!0})}catch(d){x(!1)}};return t.jsxs(ye,{open:!0,fullWidth:!0,onClose:n,children:[t.jsx(nt,{children:o("migrate.dialog.title")}),t.jsx(ot,{dividers:!0,children:t.jsxs($t,{children:[t.jsx(Z,{disabled:c,label:o("chapter.title_one"),checked:a,onChange:(p,d)=>m("migrateChapters",d)}),t.jsx(Z,{disabled:c,label:o("category.title.category_one"),checked:g,onChange:(p,d)=>m("migrateCategories",d)}),t.jsx(Z,{disabled:c,label:o("tracking.title"),checked:f,onChange:(p,d)=>m("migrateTracking",d)}),t.jsx(Z,{disabled:c,label:o("migrate.dialog.label.delete_downloaded"),checked:l,onChange:(p,d)=>m("deleteChapters",d)})]})}),t.jsx(st,{children:t.jsxs(H,{direction:"row",sx:{justifyContent:"space-between",width:"100%"},children:[t.jsx(O,{disabled:c,component:J,to:Y.manga.path(e),children:o("migrate.dialog.action.button.show_entry")}),t.jsxs(H,{direction:"row",children:[t.jsx(O,{disabled:c,onClick:n,children:o("global.button.cancel")}),t.jsx(O,{disabled:c,onClick:()=>u("copy"),children:o("global.button.copy")}),t.jsx(O,{disabled:c,onClick:()=>u("migrate"),children:o("global.button.migrate")})]})]})})]})},Se=h.forwardRef(({id:e,selected:n,handleSelection:o,asCheckbox:i=!1,popupState:r},s)=>{const{t:a}=K(),g=oe.useIsTouchDevice(),f=h.useMemo(()=>at(r),[r]),l=u=>{u.stopPropagation(),u.preventDefault()},c=(u,p)=>{l(u),o==null||o(e,p)},x=u=>{g||(l(u),r.open(u),f.onClick(u))};return o?n!==null?i?t.jsx(L,{title:a(n?"global.button.deselect":"global.button.select"),children:t.jsx(ct,{checked:n,onMouseDown:l,onChange:c})}):null:i?t.jsx(L,{title:a("global.button.options"),children:t.jsx(lt,{ref:s,...f,onClick:x,"aria-label":"more",size:"large",onMouseDown:l,children:t.jsx(pe,{})})}):t.jsx(L,{title:a("global.button.options"),children:t.jsx(O,{ref:s,...f,onClick:x,className:"manga-option-button",size:"small",variant:"contained",sx:{minWidth:"unset",paddingX:"0",paddingY:"2.5px",visibility:r.isOpen?"visible":"hidden",pointerEvents:"none","@media not (pointer: fine)":{visibility:"hidden",pointerEvents:void 0}},onMouseDown:u=>u.stopPropagation(),children:t.jsx(pe,{})})}):null}),sn=q("div")({position:"absolute",bottom:0,width:"100%",height:"30%",background:"linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)"}),rn=q("div")({position:"absolute",bottom:0,width:"100%",height:"20%",background:"linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)"}),an=h.memo(({manga:e,longPressBind:n,popupState:o,handleClick:i,mangaLinkTo:r,selected:s,inLibraryIndicator:a,isInLibrary:g,gridLayout:f,handleSelection:l,continueReadingButton:c,mangaBadges:x,mode:m})=>{const u=h.useRef(null),{id:p,title:d}=e;return t.jsx(ut,{component:J,...n(()=>o.open(u.current)),onClick:i,to:r,state:{mangaTitle:d},sx:{textDecoration:"none",touchCallout:"none"},children:t.jsxs(N,{sx:{display:"flex",flexDirection:"column",m:.25,outline:s?"4px solid":void 0,borderRadius:s?"1px":void 0,outlineColor:b=>b.palette.primary.main,backgroundColor:b=>s?b.palette.primary.main:void 0,"@media (hover: hover) and (pointer: fine)":{"&:hover .manga-option-button":{visibility:"visible",pointerEvents:"all"},"&:hover .source-manga-library-state-button":{display:"inline-flex"},"&:hover .source-manga-library-state-indicator":{display:m==="source"?"none":"flex"}}},children:[t.jsx(Ce,{sx:{aspectRatio:dt,display:"flex"},children:t.jsxs(we,{sx:{position:"relative",height:"100%"},children:[t.jsx(ke,{alt:d,src:D.getThumbnailUrl(e),imgStyle:a&&g?{height:"100%",width:"100%",objectFit:"cover",filter:"brightness(0.4)"}:{height:"100%",width:"100%",objectFit:"cover"},spinnerStyle:{display:"grid",placeItems:"center"}}),t.jsxs(H,{direction:"row",sx:{alignItems:"start",justifyContent:"space-between",position:"absolute",top:b=>b.spacing(1),left:b=>b.spacing(1),right:b=>b.spacing(1)},children:[x,t.jsx(Se,{ref:u,popupState:o,id:p,selected:s,handleSelection:l})]}),t.jsxs(t.Fragment,{children:[f!==B.Comfortable&&t.jsxs(t.Fragment,{children:[t.jsx(sn,{}),t.jsx(rn,{})]}),t.jsxs(H,{direction:"row",sx:{justifyContent:f!==B.Comfortable?"space-between":"end",alignItems:"end",position:"absolute",bottom:0,width:"100%",p:1,gap:1},children:[f!==B.Comfortable&&t.jsx(L,{title:d,placement:"top",children:t.jsx(ne,{component:"h3",sx:{color:"white",textShadow:"0px 0px 3px #000000"},children:d})}),c]})]})]})}),f===B.Comfortable&&t.jsx(H,{sx:{pb:1},children:t.jsx(L,{title:d,placement:"top",children:t.jsx(ne,{component:"h3",sx:{color:b=>s?b.palette.primary.contrastText:"text.primary",height:"3rem",pt:.5},children:d})})})]})})}),cn=h.memo(({manga:e,longPressBind:n,popupState:o,handleClick:i,mangaLinkTo:r,selected:s,inLibraryIndicator:a,isInLibrary:g,handleSelection:f,continueReadingButton:l,mangaBadges:c,mode:x})=>{const m=h.useRef(null),{id:u,title:p}=e;return t.jsx(Ce,{children:t.jsx(we,{component:J,to:r,state:{mangaTitle:p},onClick:i,...n(()=>o.open(m.current)),sx:{touchCallout:"none","@media (hover: hover) and (pointer: fine)":{"&:hover .manga-option-button":{visibility:"visible",pointerEvents:"all"},"&:hover .source-manga-library-state-button":{display:"inline-flex"},"&:hover .source-manga-library-state-indicator":{display:x==="source"?"none":"inline-flex"}}},children:t.jsxs(ft,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:1.5,position:"relative"},children:[t.jsx(Pt,{variant:"rounded",sx:{width:56,height:56,flex:"0 0 auto",marginRight:1},children:t.jsx(ke,{spinnerStyle:{small:!0},imgStyle:{objectFit:"cover",width:"100%",height:"100%",imageRendering:"pixelated",filter:a&&g?"brightness(0.4)":void 0},alt:e.title,src:D.getThumbnailUrl(e)})}),t.jsx(N,{sx:{display:"flex",flexDirection:"row",flexGrow:1,width:"min-content"},children:t.jsx(L,{title:p,placement:"top",children:t.jsx(ne,{variant:"h6",component:"h3",children:p})})}),t.jsxs(H,{direction:"row",sx:{alignItems:"center",gap:.5},children:[c,l,t.jsx(Se,{ref:m,popupState:o,id:u,selected:s,handleSelection:f,asCheckbox:!0})]})]})})})}),ln=({showContinueReadingButton:e,chapter:n,mangaLinkTo:o})=>{const{t:i}=K();if(!e||!n)return null;const{sourceOrder:r}=n,s=r===1;return t.jsx(L,{title:i(s?"global.button.start":"global.button.resume"),children:t.jsx(O,{variant:"contained",size:"small",sx:{minWidth:"unset",py:.5,px:.75},component:J,to:"".concat(o,"/chapter/").concat(n.sourceOrder),state:{resumeMode:ht.getReaderResumeMode(n)},onClick:a=>a.stopPropagation(),onMouseDown:a=>a.stopPropagation(),children:t.jsx(Bt,{})})})},un=q("div")(({theme:e})=>({display:"flex",height:"fit-content",borderRadius:e.shape.borderRadius,overflow:"hidden"})),be=q(Me)(({theme:e})=>({color:e.palette.primary.contrastText,paddingInline:e.spacing(.3)})),dn=({inLibraryIndicator:e,updateLibraryState:n,isInLibrary:o,unread:i,downloadCount:r,mode:s})=>{const{t:a}=K(),g=oe.useIsTouchDevice(),{settings:{showUnreadBadge:f,showDownloadBadge:l}}=se();return t.jsxs(un,{children:[!g&&e&&s==="source"&&t.jsx(O,{className:"source-manga-library-state-button",component:"div",variant:"contained",size:"small",onMouseDown:c=>c.stopPropagation(),onClick:c=>{c.preventDefault(),c.stopPropagation(),n()},sx:{display:"none"},color:o?"error":"primary",children:a(o?"manga.action.library.remove.label.action":"manga.button.add_to_library")}),e&&o&&t.jsx(Me,{className:"source-manga-library-state-indicator",sx:{backgroundColor:"primary.dark",color:"primary.contrastText",p:.3},children:a("manga.button.in_library")}),(f&&s==="default"||s==="duplicate")&&(i!=null?i:0)>0&&t.jsx(be,{sx:{backgroundColor:"primary.main",color:"primary.contrastText"},children:i}),(l&&s==="default"||s==="duplicate")&&(r!=null?r:0)>0&&t.jsx(be,{sx:{backgroundColor:"secondary.main",color:"secondary.contrastText"},children:r})]})},fn=(e,n,o,i)=>{switch(e){case"default":case"source":case"duplicate":return Y.manga.path(n);case"migrate.search":return"".concat(Y.migrate.childRoutes.search.path(o!=null?o:"-1",n),"?query=").concat(i);case"migrate.select":return"";default:throw new Error('getMangaLinkTo: unexpected MangaCardMode "'.concat(e,'"'))}},hn=h.memo(e=>{const{manga:n,gridLayout:o,inLibraryIndicator:i,selected:r,handleSelection:s,mode:a="default"}=e,{id:g,firstUnreadChapter:f,downloadCount:l,unreadCount:c}=n,{settings:{showContinueReadingButton:x}}=se(),{CategorySelectComponent:m,updateLibraryState:u,isInLibrary:p}=Gt(n,a==="source"),d=fn(a,n.id,n.sourceId,n.title),[b,y]=h.useState(!1),w=h.useCallback((C,k)=>{const I=a==="default",R=a==="source",E=a==="migrate.select",G=r!==null;if(E||G||(I||R)&&k){if(C.preventDefault(),R){u();return}if(G){s==null||s(g,!r,{selectRange:C.shiftKey});return}if(I){k==null||k();return}E&&y(!0)}},[a,r,u,s]),v=gt(h.useCallback((C,{context:k})=>{C.shiftKey=!0,w(C,k)},[w])),T=h.useMemo(()=>o===B.List?cn:an,[o]);return t.jsxs(t.Fragment,{children:[b&&t.jsx(on,{mangaIdToMigrateTo:n.id,onClose:()=>y(!1)}),t.jsx(pt,{variant:"popover",popupId:"manga-card-action-menu",children:C=>t.jsxs(t.Fragment,{children:[t.jsx(T,{...e,longPressBind:v,popupState:C,handleClick:w,mangaLinkTo:d,isInLibrary:p,inLibraryIndicator:i,continueReadingButton:t.jsx(ln,{showContinueReadingButton:x&&a==="default",chapter:f,mangaLinkTo:d}),mangaBadges:t.jsx(dn,{inLibraryIndicator:i,isInLibrary:p,unread:c,downloadCount:l,updateLibraryState:u,mode:a})}),!!s&&C.isOpen&&t.jsx(mt,{...xt(C),children:(k,I)=>t.jsx(nn,{manga:n,handleSelection:s,onClose:k,setHideMenu:I})}),m]})})]})}),gn=bt.forwardRef(({children:e,...n},o)=>t.jsx(re,{...n,ref:o,container:!0,spacing:1,children:e})),pn=(e,n,o,i=12)=>{const r=Math.ceil(e/n),s=o===B.List?i:i/r;return({children:a,...g})=>t.jsx(re,{...g,size:s,children:a})},De=(e,n,o,i=!1,r,s,a)=>t.jsx(hn,{manga:e,gridLayout:n,inLibraryIndicator:o,selected:i?r==null?void 0:r.includes(e.id):null,handleSelection:s,mode:a}),mn=h.forwardRef(({isLoading:e,mangas:n,inLibraryIndicator:o,GridItemContainer:i,gridLayout:r,isSelectModeActive:s,selectedMangaIds:a,handleSelection:g,mode:f},l)=>t.jsx(re,{ref:l,container:!0,spacing:1,sx:{width:"100%",overflowX:"auto",display:"-webkit-inline-box",flexWrap:"nowrap"},children:e?t.jsx(ve,{}):n.map(c=>t.jsx(i,{children:De(c,r,o,s,a,g,f)},c.id))})),xn=e=>"MangaGrid-snapshot-location-".concat(e.key),bn=h.forwardRef(({isLoading:e,mangas:n,inLibraryIndicator:o,GridItemContainer:i,gridLayout:r,hasNextPage:s,loadMore:a,isSelectModeActive:g,selectedMangaIds:f,handleSelection:l,mode:c},x)=>{const m=yt(),u=xn(m),[p]=jt(u,void 0),d=h.useRef(),b=y=>{const w=window.location.href;clearTimeout(d.current),d.current=setTimeout(()=>{w===window.location.href&&wt.session.setItem(u,y,!1)},250)};return h.useEffect(()=>clearTimeout(d.current),[m.key,d.current]),t.jsxs(t.Fragment,{children:[t.jsx(N,{ref:x,children:t.jsx(Ct,{useWindowScroll:!0,increaseViewportBy:window.innerHeight*.5,totalCount:n.length,components:{List:gn,Item:i},restoreStateFrom:p,stateChanged:b,endReached:()=>a(),computeItemKey:y=>n[y].id,itemContent:y=>De(n[y],r,o,g,f,l,c)})}),g&&r===B.List?t.jsx(N,{sx:{paddingBottom:At}}):e?t.jsx(ve,{}):s?t.jsx("div",{style:{height:"75px"}}):null]})}),In=({mangas:e,isLoading:n,message:o,messageExtra:i,hasNextPage:r,loadMore:s,gridLayout:a,horizontal:g,noFaces:f,inLibraryIndicator:l,isSelectModeActive:c,selectedMangaIds:x,handleSelection:m,mode:u,retry:p,gridWrapperProps:d})=>{var E,G;const{t:b}=K(),{navBarWidth:y}=kt(),w=h.useRef(null),v=h.useRef(null),[T,C]=h.useState((G=(E=v.current)==null?void 0:E.offsetWidth)!=null?G:Math.max(0,document.documentElement.offsetWidth-y)),[k]=Mt("ItemWidth",300),I=h.useMemo(()=>pn(T,k,a),[T,k,a]);return h.useLayoutEffect(()=>{if(g)return()=>{};let M;const S=_=>{M=setTimeout(()=>{if(document.body.style.overflow.includes("hidden")){S(250);return}document.body.style.overflowY=a===B.List?"auto":"scroll"},_)};return S(0),()=>{clearTimeout(M)}},[a]),h.useLayoutEffect(()=>()=>{g||(document.body.style.overflowY="auto")},[]),me(v,h.useCallback(()=>{C((()=>{var _;const S=(_=v.current)==null?void 0:_.offsetWidth;return S||document.documentElement.offsetWidth-y})())},[y])),me(w,h.useCallback((M,S)=>{const _=M[0].target.clientHeight,j=_>document.documentElement.clientHeight;if(!n&&_){if(j){S.disconnect();return}s(),S.disconnect()}},[w,s,n])),!n&&e.length===0?t.jsx(vt,{noFaces:f,message:o!=null?o:b("manga.error.label.no_mangas_found"),messageExtra:i,retry:p}):t.jsx(N,{...d,ref:v,sx:{...d==null?void 0:d.sx,overflow:"hidden"},children:g?t.jsx(mn,{ref:w,isLoading:n,mangas:e,inLibraryIndicator:l,GridItemContainer:I,gridLayout:a,isSelectModeActive:c,selectedMangaIds:x,handleSelection:m,mode:u}):t.jsx(bn,{ref:w,isLoading:n,mangas:e,inLibraryIndicator:l,GridItemContainer:I,hasNextPage:r,loadMore:s,gridLayout:a,isSelectModeActive:c,selectedMangaIds:x,handleSelection:m,mode:u})})};export{In as M,nn as a,hn as b,xn as g};
