import{h,bX as Te,bY as Ge,bZ as Ee,b_ as _e,j as t,a_ as $e,b$ as Pe,c0 as Be,c1 as Ae,a2 as q,bR as Oe,as as Le,az as Ne,aA as ge,aB as Fe,M as se,B as N,ah as ze,c2 as te,c3 as We,c4 as He,u as U,a6 as D,c5 as P,c6 as Ke,ag as Ue,K as Ve,c7 as Ye,c8 as qe,L as X,A as Y,ao as ye,c9 as Xe,ca as Je,cb as Qe,cc as Ze,n as je,i as et,aC as tt,q as oe,aK as nt,aL as st,Y as Q,aN as ot,d as H,e as O,y as rt,o as it,af as at,k as L,a0 as ct,I as lt,cd as pe,aq as ut,C as Ce,au as dt,a as we,S as ke,X as B,bA as ne,b as ft,a8 as ht,T as Me,ce as gt,ae as pt,aH as mt,ai as xt,ay as bt,l as ve,aJ as yt,br as jt,cf as Ct,bs as wt,f as kt,g as Mt,z as me,E as vt}from"./index-b9u_iuUy.js";import{c as It,C as St,S as Dt,L as Rt,F as Tt,T as Gt,a as Et}from"./useManageMangaLibraryState-DPeqFhZj.js";import{S as _t}from"./Sync-C8Lj_d90.js";import{F as $t}from"./ListPreference-qPZRe6wX.js";import{A as Pt}from"./Avatar-tX7RzUEK.js";import{P as Bt}from"./PlayArrow-B2MJjvwy.js";import{D as At}from"./StyledFab-L36ISSSa.js";function Ot(e,n){var s,i,r,o;return h.isValidElement(e)&&n.indexOf((o=e.type.muiName)!=null?o:(r=(i=(s=e.type)==null?void 0:s._payload)==null?void 0:i.value)==null?void 0:r.muiName)!==-1}const Lt=(e,n)=>e.filter(s=>n.includes(s)),V=(e,n,s)=>{const i=e.keys[0];Array.isArray(n)?n.forEach((r,o)=>{s((a,g)=>{o<=e.keys.length-1&&(o===0?Object.assign(a,g):a[e.up(e.keys[o])]=g)},r)}):n&&typeof n=="object"?(Object.keys(n).length>e.keys.length?e.keys:Lt(e.keys,Object.keys(n))).forEach(o=>{if(e.keys.includes(o)){const a=n[o];a!==void 0&&s((g,f)=>{i===o?Object.assign(g,f):g[e.up(o)]=f},a)}}):(typeof n=="number"||typeof n=="string")&&s((r,o)=>{Object.assign(r,o)},n)};function Z(e){return"--Grid-".concat(e,"Spacing")}function ee(e){return"--Grid-parent-".concat(e,"Spacing")}const xe="--Grid-columns",K="--Grid-parent-columns",Nt=({theme:e,ownerState:n})=>{const s={};return V(e.breakpoints,n.size,(i,r)=>{let o={};r==="grow"&&(o={flexBasis:0,flexGrow:1,maxWidth:"100%"}),r==="auto"&&(o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),typeof r=="number"&&(o={flexGrow:0,flexBasis:"auto",width:"calc(100% * ".concat(r," / var(").concat(K,") - (var(").concat(K,") - ").concat(r,") * (var(").concat(ee("column"),") / var(").concat(K,")))")}),i(s,o)}),s},Ft=({theme:e,ownerState:n})=>{const s={};return V(e.breakpoints,n.offset,(i,r)=>{let o={};r==="auto"&&(o={marginLeft:"auto"}),typeof r=="number"&&(o={marginLeft:r===0?"0px":"calc(100% * ".concat(r," / var(").concat(K,") + var(").concat(ee("column"),") * ").concat(r," / var(").concat(K,"))")}),i(s,o)}),s},zt=({theme:e,ownerState:n})=>{if(!n.container)return{};const s={[xe]:12};return V(e.breakpoints,n.columns,(i,r)=>{const o=r!=null?r:12;i(s,{[xe]:o,"> *":{[K]:o}})}),s},Wt=({theme:e,ownerState:n})=>{if(!n.container)return{};const s={};return V(e.breakpoints,n.rowSpacing,(i,r)=>{var a;const o=typeof r=="string"?r:(a=e.spacing)==null?void 0:a.call(e,r);i(s,{[Z("row")]:o,"> *":{[ee("row")]:o}})}),s},Ht=({theme:e,ownerState:n})=>{if(!n.container)return{};const s={};return V(e.breakpoints,n.columnSpacing,(i,r)=>{var a;const o=typeof r=="string"?r:(a=e.spacing)==null?void 0:a.call(e,r);i(s,{[Z("column")]:o,"> *":{[ee("column")]:o}})}),s},Kt=({theme:e,ownerState:n})=>{if(!n.container)return{};const s={};return V(e.breakpoints,n.direction,(i,r)=>{i(s,{flexDirection:r})}),s},Ut=({ownerState:e})=>({minWidth:0,boxSizing:"border-box",...e.container&&{display:"flex",flexWrap:"wrap",...e.wrap&&e.wrap!=="wrap"&&{flexWrap:e.wrap},gap:"var(".concat(Z("row"),") var(").concat(Z("column"),")")}}),Vt=e=>{const n=[];return Object.entries(e).forEach(([s,i])=>{i!==!1&&i!==void 0&&n.push("grid-".concat(s,"-").concat(String(i)))}),n},Yt=(e,n="xs")=>{function s(i){return i===void 0?!1:typeof i=="string"&&!Number.isNaN(Number(i))||typeof i=="number"&&i>0}if(s(e))return["spacing-".concat(n,"-").concat(String(e))];if(typeof e=="object"&&!Array.isArray(e)){const i=[];return Object.entries(e).forEach(([r,o])=>{s(o)&&i.push("spacing-".concat(r,"-").concat(String(o)))}),i}return[]},qt=e=>e===void 0?[]:typeof e=="object"?Object.entries(e).map(([n,s])=>"direction-".concat(n,"-").concat(s)):["direction-xs-".concat(String(e))],Xt=Te(),Jt=Ge("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,n)=>n.root});function Qt(e){return Pe({props:e,name:"MuiGrid",defaultTheme:Xt})}function Zt(e={}){const{createStyledComponent:n=Jt,useThemeProps:s=Qt,useTheme:i=Ee,componentName:r="MuiGrid"}=e,o=(l,c)=>{const{container:x,direction:m,spacing:u,wrap:p,size:d}=l,b={root:["root",x&&"container",p!=="wrap"&&"wrap-xs-".concat(String(p)),...qt(m),...Vt(d),...x?Yt(u,c.breakpoints.keys[0]):[]]};return Be(b,y=>Ae(r,y),{})};function a(l,c,x=()=>!0){const m={};return l===null||(Array.isArray(l)?l.forEach((u,p)=>{u!==null&&x(u)&&c.keys[p]&&(m[c.keys[p]]=u)}):typeof l=="object"?Object.keys(l).forEach(u=>{const p=l[u];p!=null&&x(p)&&(m[u]=p)}):m[c.keys[0]]=l),m}const g=n(zt,Ht,Wt,Nt,Kt,Ut,Ft),f=h.forwardRef(function(c,x){var ie,ae,ce,le,ue,de;const m=i(),u=s(c),p=_e(u),{className:d,children:b,columns:y=12,container:w=!1,component:v="div",direction:R="row",wrap:C="wrap",size:k={},offset:I={},spacing:T=0,rowSpacing:G=T,columnSpacing:E=T,unstable_level:M=0,...S}=p,_=a(k,m.breakpoints,$=>$!==!1),j=a(I,m.breakpoints),F=(ie=c.columns)!=null?ie:M?void 0:y,A=(ae=c.spacing)!=null?ae:M?void 0:T,z=(le=(ce=c.rowSpacing)!=null?ce:c.spacing)!=null?le:M?void 0:G,J=(de=(ue=c.columnSpacing)!=null?ue:c.spacing)!=null?de:M?void 0:E,W={...p,level:M,columns:F,container:w,direction:R,wrap:C,spacing:A,rowSpacing:z,columnSpacing:J,size:_,offset:j},Re=o(W,m);return t.jsx(g,{ref:x,as:v,ownerState:W,className:$e(Re.root,d),...S,children:h.Children.map(b,$=>{var fe,he;return h.isValidElement($)&&Ot($,["Grid"])&&w&&$.props.container?h.cloneElement($,{unstable_level:(he=(fe=$.props)==null?void 0:fe.unstable_level)!=null?he:M+1}):$})})});return f.muiName="Grid",f}const re=Zt({createStyledComponent:q("div",{name:"MuiGrid2",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:s}=e;return[n.root,s.container&&n.container]}}),componentName:"MuiGrid2",useThemeProps:e=>Oe({props:e,name:"MuiGrid2"}),useTheme:Le}),en=h.forwardRef(({MenuItemProps:e,className:n,label:s,LeftIcon:i,renderLabel:r,RightIcon:o,...a},g)=>t.jsxs(Ne,{...e,ref:g,className:n,...a,children:[i&&t.jsx(ge,{children:t.jsx(i,{fontSize:"small"})}),t.jsx(Fe,{children:s}),o&&t.jsx(ge,{style:{minWidth:0},children:t.jsx(o,{fontSize:"small"})})]})),Ie=h.forwardRef((e,n)=>{const{parentMenuOpen:s,label:i,renderLabel:r,RightIcon:o=te(He,We),LeftIcon:a,children:g,className:f,tabIndex:l,ContainerProps:c={},MenuProps:x,...m}=e,u=se.useIsTouchDevice(),{ref:p,...d}=c,b=h.useRef(null);h.useImperativeHandle(n,()=>b.current);const y=h.useRef(null);h.useImperativeHandle(p,()=>y.current);const w=h.useRef(null),[v,R]=h.useState(!1),C=j=>{if(v!==j){if(e.disabled){R(!1);return}R(j)}},k=j=>{u||(C(!0),d.onMouseEnter&&d.onMouseEnter(j))},I=j=>{C(!1),d.onMouseLeave&&d.onMouseLeave(j)},T=()=>{var F,A;const j=(A=(F=y.current)==null?void 0:F.ownerDocument.activeElement)!=null?A:null;if(w.current==null)return!1;for(const z of w.current.children)if(z===j)return!0;return!1},G=j=>{u||(j.target===y.current&&C(!0),d.onFocus&&d.onFocus(j))},E=j=>{C(!v),d.onClick&&d.onClick(j)},M=j=>{var A,z,J;if(j.key==="Escape")return;T()&&j.stopPropagation();const F=(A=y.current)==null?void 0:A.ownerDocument.activeElement;if(j.key==="ArrowLeft"&&T()&&((z=y.current)==null||z.focus()),j.key==="ArrowRight"&&j.target===y.current&&j.target===F){const W=(J=w.current)==null?void 0:J.children[0];W==null||W.focus()}},S=v&&s;let _;return e.disabled||(_=l!==void 0?l:-1),t.jsxs(N,{...d,ref:y,onFocus:G,onClick:E,tabIndex:_,onMouseEnter:k,onMouseLeave:I,onKeyDown:M,children:[t.jsx(en,{MenuItemProps:m,className:f,ref:b,LeftIcon:a,RightIcon:o,label:i,renderLabel:r}),t.jsx(ze,{style:{pointerEvents:"none"},anchorEl:b.current,anchorOrigin:{horizontal:te("right","left"),vertical:"top"},transformOrigin:{horizontal:te("left","right"),vertical:"top"},open:S,autoFocus:!1,disableAutoFocus:!0,disableEnforceFocus:!0,onClose:()=>{C(!1)},...x,children:t.jsx(N,{ref:w,style:{pointerEvents:"auto"},children:g})})]})});Ie.displayName="NestedMenuItem";const tn=["remove_from_library"],nn=({manga:e,handleSelection:n,selectedMangas:s,onClose:i,setHideMenu:r})=>{var G,E;const{t:o}=U(),[a,g]=h.useState(!1),f=!!e,l=s!=null?s:[],c=Xe(f,Je),x=Qe(f),m=Ze(f),u=!!e&&e.downloadCount===e.chapters.totalCount,p=!!(e!=null&&e.downloadCount),d=!!(e!=null&&e.unreadCount),b=!!e&&e.unreadCount!==e.chapters.totalCount,{openCategorySelect:y,CategorySelectComponent:w}=It({mangaId:e==null?void 0:e.id,mangaIds:s?D.getIds(l):void 0,onClose:()=>i(!0),addToLibrary:!1}),v=()=>{n==null||n(e.id,!0),i(!0)},R=(M,S)=>{D.performAction(M,e?[e.id]:D.getIds(S),{wasManuallyMarkedAsRead:!0}).catch(je()),i(!tn.includes(M))},{downloadableMangas:C,downloadedMangas:k,unreadMangas:I,readMangas:T}=h.useMemo(()=>({downloadableMangas:[...D.getNotDownloaded(l),...D.getPartiallyDownloaded(l)],downloadedMangas:[...D.getPartiallyDownloaded(l),...D.getFullyDownloaded(l)],unreadMangas:[...D.getUnread(l),...D.getPartiallyRead(l)],readMangas:[...D.getPartiallyRead(l),...D.getFullyRead(l)]}),[l]);return t.jsxs(t.Fragment,{children:[!!n&&f&&t.jsx(P,{onClick:v,Icon:Ke,title:o("chapter.action.label.select")}),x(!u)&&t.jsx(Ie,{disabled:m(!C.length),LeftIcon:Ue,label:c("download",C.length),parentMenuOpen:!0,children:t.jsx(St,{mangaIds:f?[e.id]:D.getIds(l),closeMenu:()=>i(!0)})}),x(p)&&t.jsx(P,{Icon:Ve,disabled:m(!k.length),onClick:()=>R("delete",k),title:c("delete",k.length)}),x(d)&&t.jsx(P,{Icon:Ye,disabled:m(!I.length),onClick:()=>R("mark_as_read",I),title:c("mark_as_read",I.length)}),x(b)&&t.jsx(P,{Icon:qe,disabled:m(!T.length),onClick:()=>R("mark_as_unread",T),title:c("mark_as_unread",T.length)}),f&&t.jsx(X,{to:"".concat(Y.migrate.childRoutes.search.path((G=e==null?void 0:e.sourceId)!=null?G:-1,(E=e==null?void 0:e.id)!=null?E:-1),"?query=").concat(e==null?void 0:e.title),state:{mangaTitle:e==null?void 0:e.title},style:{textDecoration:"none",color:"inherit"},children:t.jsx(P,{Icon:Dt,title:c("migrate",l.length)})}),f&&t.jsx(P,{onClick:()=>{g(!0),r(!0)},Icon:_t,title:c("track",l.length)}),t.jsx(P,{onClick:()=>{y(!0),r(!0)},Icon:Rt,title:c("change_categories",l.length)}),t.jsx(P,{onClick:()=>R("remove_from_library",l),Icon:Tt,title:c("remove_from_library",l.length)}),w,a&&t.jsx(ye,{open:!0,maxWidth:"md",fullWidth:!0,scroll:"paper",onClose:()=>{g(!1),i(!0)},children:t.jsx(Gt,{manga:e})})]})},sn=({mangaIdToMigrateTo:e,onClose:n})=>{const{t:s}=U(),i=et(),{mangaId:r}=tt(),o=Number(r),{settings:{migrateChapters:a,migrateCategories:g,migrateTracking:f,deleteChapters:l}}=oe(),[c,x]=h.useState(!1),m=rt(je()),u=async p=>{if(o==null)throw new Error('MigrateDialog::migrate: unexpected mangaId "'.concat(o,'"'));it(s("migrate.label.info"),"info"),x(!0);try{await D.migrate(o,e,{mode:p,migrateChapters:a,migrateCategories:g,migrateTracking:f,deleteChapters:l}),i(Y.manga.path(e),{replace:!0})}catch(d){x(!1)}};return t.jsxs(ye,{open:!0,fullWidth:!0,onClose:n,children:[t.jsx(nt,{children:s("migrate.dialog.title")}),t.jsx(st,{dividers:!0,children:t.jsxs($t,{children:[t.jsx(Q,{disabled:c,label:s("chapter.title_one"),checked:a,onChange:(p,d)=>m("migrateChapters",d)}),t.jsx(Q,{disabled:c,label:s("category.title.category_one"),checked:g,onChange:(p,d)=>m("migrateCategories",d)}),t.jsx(Q,{disabled:c,label:s("tracking.title"),checked:f,onChange:(p,d)=>m("migrateTracking",d)}),t.jsx(Q,{disabled:c,label:s("migrate.dialog.label.delete_downloaded"),checked:l,onChange:(p,d)=>m("deleteChapters",d)})]})}),t.jsx(ot,{children:t.jsxs(H,{direction:"row",sx:{justifyContent:"space-between",width:"100%"},children:[t.jsx(O,{disabled:c,component:X,to:Y.manga.path(e),children:s("migrate.dialog.action.button.show_entry")}),t.jsxs(H,{direction:"row",children:[t.jsx(O,{disabled:c,onClick:n,children:s("global.button.cancel")}),t.jsx(O,{disabled:c,onClick:()=>u("copy"),children:s("global.button.copy")}),t.jsx(O,{disabled:c,onClick:()=>u("migrate"),children:s("global.button.migrate")})]})]})})]})},Se=h.forwardRef(({id:e,selected:n,handleSelection:s,asCheckbox:i=!1,popupState:r},o)=>{const{t:a}=U(),g=se.useIsTouchDevice(),f=h.useMemo(()=>at(r),[r]),l=u=>{u.stopPropagation(),u.preventDefault()},c=(u,p)=>{l(u),s==null||s(e,p)},x=u=>{g||(l(u),r.open(u),f.onClick(u))};return s?n!==null?i?t.jsx(L,{title:a(n?"global.button.deselect":"global.button.select"),children:t.jsx(ct,{checked:n,onMouseDown:l,onChange:c})}):null:i?t.jsx(L,{title:a("global.button.options"),children:t.jsx(lt,{ref:o,...f,onClick:x,"aria-label":"more",size:"large",onMouseDown:l,children:t.jsx(pe,{})})}):t.jsx(L,{title:a("global.button.options"),children:t.jsx(O,{ref:o,...f,onClick:x,className:"manga-option-button",size:"small",variant:"contained",sx:{minWidth:"unset",paddingX:"0",paddingY:"2.5px",visibility:r.isOpen?"visible":"hidden",pointerEvents:"none","@media not (pointer: fine)":{visibility:"hidden",pointerEvents:void 0}},onMouseDown:u=>u.stopPropagation(),children:t.jsx(pe,{})})}):null}),on=q("div")({position:"absolute",bottom:0,width:"100%",height:"30%",background:"linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)"}),rn=q("div")({position:"absolute",bottom:0,width:"100%",height:"20%",background:"linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)"}),an=h.memo(({manga:e,longPressBind:n,popupState:s,handleClick:i,mangaLinkTo:r,selected:o,inLibraryIndicator:a,isInLibrary:g,gridLayout:f,handleSelection:l,continueReadingButton:c,mangaBadges:x,mode:m})=>{const u=h.useRef(null),{id:p,title:d}=e;return t.jsx(ut,{component:X,...n(()=>s.open(u.current)),onClick:i,to:r,state:{mangaTitle:d},sx:{textDecoration:"none",touchCallout:"none"},children:t.jsxs(N,{sx:{display:"flex",flexDirection:"column",m:.25,outline:o?"4px solid":void 0,borderRadius:o?"1px":void 0,outlineColor:b=>b.palette.primary.main,backgroundColor:b=>o?b.palette.primary.main:void 0,"@media (hover: hover) and (pointer: fine)":{"&:hover .manga-option-button":{visibility:"visible",pointerEvents:"all"},"&:hover .source-manga-library-state-button":{display:"inline-flex"},"&:hover .source-manga-library-state-indicator":{display:m==="source"?"none":"flex"}}},children:[t.jsx(Ce,{sx:{aspectRatio:dt,display:"flex"},children:t.jsxs(we,{sx:{position:"relative",height:"100%"},children:[t.jsx(ke,{alt:d,src:D.getThumbnailUrl(e),imgStyle:a&&g?{height:"100%",width:"100%",objectFit:"cover",filter:"brightness(0.4)"}:{height:"100%",width:"100%",objectFit:"cover"},spinnerStyle:{display:"grid",placeItems:"center"}}),t.jsxs(H,{direction:"row",sx:{alignItems:"start",justifyContent:"space-between",position:"absolute",top:b=>b.spacing(1),left:b=>b.spacing(1),right:b=>b.spacing(1)},children:[x,t.jsx(Se,{ref:u,popupState:s,id:p,selected:o,handleSelection:l})]}),t.jsxs(t.Fragment,{children:[f!==B.Comfortable&&t.jsxs(t.Fragment,{children:[t.jsx(on,{}),t.jsx(rn,{})]}),t.jsxs(H,{direction:"row",sx:{justifyContent:f!==B.Comfortable?"space-between":"end",alignItems:"end",position:"absolute",bottom:0,width:"100%",p:1,gap:1},children:[f!==B.Comfortable&&t.jsx(L,{title:d,placement:"top",children:t.jsx(ne,{component:"h3",sx:{color:"white",textShadow:"0px 0px 3px #000000"},children:d})}),c]})]})]})}),f===B.Comfortable&&t.jsx(H,{sx:{pb:1},children:t.jsx(L,{title:d,placement:"top",children:t.jsx(ne,{component:"h3",sx:{color:b=>o?b.palette.primary.contrastText:"text.primary",height:"3rem",pt:.5},children:d})})})]})})}),cn=h.memo(({manga:e,longPressBind:n,popupState:s,handleClick:i,mangaLinkTo:r,selected:o,inLibraryIndicator:a,isInLibrary:g,handleSelection:f,continueReadingButton:l,mangaBadges:c,mode:x})=>{const m=h.useRef(null),{id:u,title:p}=e;return t.jsx(Ce,{children:t.jsx(we,{component:X,to:r,state:{mangaTitle:p},onClick:i,...n(()=>s.open(m.current)),sx:{touchCallout:"none","@media (hover: hover) and (pointer: fine)":{"&:hover .manga-option-button":{visibility:"visible",pointerEvents:"all"},"&:hover .source-manga-library-state-button":{display:"inline-flex"},"&:hover .source-manga-library-state-indicator":{display:x==="source"?"none":"inline-flex"}}},children:t.jsxs(ft,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:1.5,position:"relative"},children:[t.jsx(Pt,{variant:"rounded",sx:{width:56,height:56,flex:"0 0 auto",marginRight:1},children:t.jsx(ke,{spinnerStyle:{small:!0},imgStyle:{objectFit:"cover",width:"100%",height:"100%",imageRendering:"pixelated",filter:a&&g?"brightness(0.4)":void 0},alt:e.title,src:D.getThumbnailUrl(e)})}),t.jsx(N,{sx:{display:"flex",flexDirection:"row",flexGrow:1,width:"min-content"},children:t.jsx(L,{title:p,placement:"top",children:t.jsx(ne,{variant:"h6",component:"h3",children:p})})}),t.jsxs(H,{direction:"row",sx:{alignItems:"center",gap:.5},children:[c,l,t.jsx(Se,{ref:m,popupState:s,id:u,selected:o,handleSelection:f,asCheckbox:!0})]})]})})})}),ln=({showContinueReadingButton:e,chapter:n,mangaLinkTo:s})=>{const{t:i}=U();if(!e||!n)return null;const{sourceOrder:r}=n,o=r===1;return t.jsx(L,{title:i(o?"global.button.start":"global.button.resume"),children:t.jsx(O,{variant:"contained",size:"small",sx:{minWidth:"unset",py:.5,px:.75},component:X,to:"".concat(s,"/chapter/").concat(n.sourceOrder),state:{resumeMode:ht.getReaderResumeMode(n)},onClick:a=>a.stopPropagation(),onMouseDown:a=>a.stopPropagation(),children:t.jsx(Bt,{})})})},un=q("div")(({theme:e})=>({display:"flex",height:"fit-content",borderRadius:e.shape.borderRadius,overflow:"hidden"})),be=q(Me)(({theme:e})=>({color:e.palette.primary.contrastText,paddingInline:e.spacing(.3)})),dn=({inLibraryIndicator:e,updateLibraryState:n,isInLibrary:s,unread:i,downloadCount:r,mode:o})=>{const{t:a}=U(),g=se.useIsTouchDevice(),{settings:{showUnreadBadge:f,showDownloadBadge:l}}=oe();return t.jsxs(un,{children:[!g&&e&&o==="source"&&t.jsx(O,{className:"source-manga-library-state-button",component:"div",variant:"contained",size:"small",onMouseDown:c=>c.stopPropagation(),onClick:c=>{c.preventDefault(),c.stopPropagation(),n()},sx:{display:"none"},color:s?"error":"primary",children:a(s?"manga.action.library.remove.label.action":"manga.button.add_to_library")}),e&&s&&t.jsx(Me,{className:"source-manga-library-state-indicator",sx:{backgroundColor:"primary.dark",color:"primary.contrastText",p:.3},children:a("manga.button.in_library")}),(f&&o==="default"||o==="duplicate")&&(i!=null?i:0)>0&&t.jsx(be,{sx:{backgroundColor:"primary.main",color:"primary.contrastText"},children:i}),(l&&o==="default"||o==="duplicate")&&(r!=null?r:0)>0&&t.jsx(be,{sx:{backgroundColor:"secondary.main",color:"secondary.contrastText"},children:r})]})},fn=(e,n,s,i)=>{switch(e){case"default":case"source":case"duplicate":return Y.manga.path(n);case"migrate.search":return"".concat(Y.migrate.childRoutes.search.path(s!=null?s:"-1",n),"?query=").concat(i);case"migrate.select":return"";default:throw new Error('getMangaLinkTo: unexpected MangaCardMode "'.concat(e,'"'))}},hn=h.memo(e=>{const{manga:n,gridLayout:s,inLibraryIndicator:i,selected:r,handleSelection:o,mode:a="default"}=e,{id:g,firstUnreadChapter:f,downloadCount:l,unreadCount:c}=n,{settings:{showContinueReadingButton:x}}=oe(),{CategorySelectComponent:m,updateLibraryState:u,isInLibrary:p}=Et(n,a==="source"),d=fn(a,n.id,n.sourceId,n.title),[b,y]=h.useState(!1),w=h.useCallback((C,k)=>{const I=a==="default",T=a==="source",G=a==="migrate.select",E=r!==null;if(G||E||(I||T)&&k){if(C.preventDefault(),T){u();return}if(E){o==null||o(g,!r,{selectRange:C.shiftKey});return}if(I){k==null||k();return}G&&y(!0)}},[a,r,u,o]),v=gt(h.useCallback((C,{context:k})=>{C.shiftKey=!0,w(C,k)},[w])),R=h.useMemo(()=>s===B.List?cn:an,[s]);return t.jsxs(t.Fragment,{children:[b&&t.jsx(sn,{mangaIdToMigrateTo:n.id,onClose:()=>y(!1)}),t.jsx(pt,{variant:"popover",popupId:"manga-card-action-menu",children:C=>t.jsxs(t.Fragment,{children:[t.jsx(R,{...e,longPressBind:v,popupState:C,handleClick:w,mangaLinkTo:d,isInLibrary:p,inLibraryIndicator:i,continueReadingButton:t.jsx(ln,{showContinueReadingButton:x&&a==="default",chapter:f,mangaLinkTo:d}),mangaBadges:t.jsx(dn,{inLibraryIndicator:i,isInLibrary:p,unread:c,downloadCount:l,updateLibraryState:u,mode:a})}),!!o&&C.isOpen&&t.jsx(mt,{...xt(C),children:(k,I)=>t.jsx(nn,{manga:n,handleSelection:o,onClose:k,setHideMenu:I})}),m]})})]})}),gn=bt.forwardRef(({children:e,...n},s)=>t.jsx(re,{...n,ref:s,container:!0,spacing:1,children:e})),pn=(e,n,s,i=12)=>{const r=Math.ceil(e/n),o=s===B.List?i:i/r;return({children:a,...g})=>t.jsx(re,{...g,size:o,children:a})},De=(e,n,s,i=!1,r,o,a)=>t.jsx(hn,{manga:e,gridLayout:n,inLibraryIndicator:s,selected:i?r==null?void 0:r.includes(e.id):null,handleSelection:o,mode:a}),mn=h.forwardRef(({isLoading:e,mangas:n,inLibraryIndicator:s,GridItemContainer:i,gridLayout:r,isSelectModeActive:o,selectedMangaIds:a,handleSelection:g,mode:f},l)=>t.jsx(re,{ref:l,container:!0,spacing:1,sx:{width:"100%",overflowX:"auto",display:"-webkit-inline-box",flexWrap:"nowrap"},children:e?t.jsx(ve,{}):n.map(c=>t.jsx(i,{children:De(c,r,s,o,a,g,f)},c.id))})),xn=e=>"MangaGrid-snapshot-location-".concat(e.key),bn=h.forwardRef(({isLoading:e,mangas:n,inLibraryIndicator:s,GridItemContainer:i,gridLayout:r,hasNextPage:o,loadMore:a,isSelectModeActive:g,selectedMangaIds:f,handleSelection:l,mode:c},x)=>{const m=yt(),u=xn(m),[p]=jt(u,void 0),d=h.useRef(),b=y=>{const w=window.location.href;clearTimeout(d.current),d.current=setTimeout(()=>{w===window.location.href&&wt.session.setItem(u,y,!1)},250)};return h.useEffect(()=>clearTimeout(d.current),[m.key,d.current]),t.jsxs(t.Fragment,{children:[t.jsx(N,{ref:x,children:t.jsx(Ct,{useWindowScroll:!0,increaseViewportBy:window.innerHeight*.5,totalCount:n.length,components:{List:gn,Item:i},restoreStateFrom:p,stateChanged:b,endReached:()=>a(),computeItemKey:y=>n[y].id,itemContent:y=>De(n[y],r,s,g,f,l,c)})}),g&&r===B.List?t.jsx(N,{sx:{paddingBottom:At}}):e?t.jsx(ve,{}):o?t.jsx("div",{style:{height:"75px"}}):null]})}),In=({mangas:e,isLoading:n,message:s,messageExtra:i,hasNextPage:r,loadMore:o,gridLayout:a,horizontal:g,noFaces:f,inLibraryIndicator:l,isSelectModeActive:c,selectedMangaIds:x,handleSelection:m,mode:u,retry:p,gridWrapperProps:d})=>{var G,E;const{t:b}=U(),{navBarWidth:y}=kt(),w=h.useRef(null),v=h.useRef(null),[R,C]=h.useState((E=(G=v.current)==null?void 0:G.offsetWidth)!=null?E:Math.max(0,document.documentElement.offsetWidth-y)),[k]=Mt("ItemWidth",300),I=h.useMemo(()=>pn(R,k,a),[R,k,a]);return h.useLayoutEffect(()=>{if(g)return()=>{};let M;const S=_=>{M=setTimeout(()=>{if(document.body.style.overflow.includes("hidden")){S(250);return}document.body.style.overflowY=a===B.List?"auto":"scroll"},_)};return S(0),()=>{clearTimeout(M)}},[a]),h.useLayoutEffect(()=>()=>{g||(document.body.style.overflowY="auto")},[]),me(v,h.useCallback(()=>{C((()=>{var _;const S=(_=v.current)==null?void 0:_.offsetWidth;return S||document.documentElement.offsetWidth-y})())},[y])),me(w,h.useCallback((M,S)=>{const _=M[0].target.clientHeight,j=_>document.documentElement.clientHeight;if(!n&&_){if(j){S.disconnect();return}o(),S.disconnect()}},[w,o,n])),!n&&e.length===0?t.jsx(vt,{noFaces:f,message:s!=null?s:b("manga.error.label.no_mangas_found"),messageExtra:i,retry:p}):t.jsx(N,{...d,ref:v,sx:{...d==null?void 0:d.sx,overflow:"hidden"},children:g?t.jsx(mn,{ref:w,isLoading:n,mangas:e,inLibraryIndicator:l,GridItemContainer:I,gridLayout:a,isSelectModeActive:c,selectedMangaIds:x,handleSelection:m,mode:u}):t.jsx(bn,{ref:w,isLoading:n,mangas:e,inLibraryIndicator:l,GridItemContainer:I,hasNextPage:r,loadMore:o,gridLayout:a,isSelectModeActive:c,selectedMangaIds:x,handleSelection:m,mode:u})})};export{In as M,nn as a,hn as b,xn as g};
