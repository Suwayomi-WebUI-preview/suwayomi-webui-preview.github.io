import{c2 as Re,c3 as Ge,c4 as Ee,f as m,c5 as $e,j as t,b2 as _e,c6 as Pe,c7 as Be,b3 as Oe,b1 as Ae,a2 as q,bZ as Le,at as Fe,aA as Ne,aB as he,aC as ze,M as oe,B as F,aj as We,c8 as te,c9 as He,ca as Ke,u as U,a6 as S,cb as P,cc as Ue,ai as Ve,O as Ye,cd as qe,ce as Xe,L as X,A as Y,ap as be,cf as Ze,cg as Je,ch as Qe,m as ye,ci as et,h as tt,aD as nt,q as ot,aL as st,aM as rt,Z as J,aO as it,d as H,e as A,y as at,n as ct,ah as lt,i as L,a0 as dt,I as ut,cj as ge,ar as ft,C as je,av as ht,a as Ce,S as we,Y as B,bK as ne,b as gt,a8 as pt,T as ke,$ as Me,ck as mt,ag as xt,aI as bt,ak as yt,az as jt,k as ve,aK as Ct,bA as wt,cl as kt,bB as Mt,p as vt,g as It,z as pe,E as St}from"./index-BQ2qmr0P.js";import{c as Dt,C as Tt,S as Rt,L as Gt,F as Et,T as $t,a as _t}from"./useManageMangaLibraryState-XdSYZocN.js";import{S as Pt}from"./Sync-DLT2crCM.js";import{F as Bt}from"./ListPreference-Ds9D9qx2.js";import{A as Ot}from"./Avatar-Lf367_5r.js";import{P as At}from"./PlayArrow-DNzKg0it.js";import{D as Lt}from"./StyledFab-CTWIGqjz.js";const Ft=(e,n)=>e.filter(o=>n.includes(o)),V=(e,n,o)=>{const i=e.keys[0];Array.isArray(n)?n.forEach((r,s)=>{o((a,p)=>{s<=e.keys.length-1&&(s===0?Object.assign(a,p):a[e.up(e.keys[s])]=p)},r)}):n&&typeof n=="object"?(Object.keys(n).length>e.keys.length?e.keys:Ft(e.keys,Object.keys(n))).forEach(s=>{if(e.keys.includes(s)){const a=n[s];a!==void 0&&o((p,f)=>{i===s?Object.assign(p,f):p[e.up(s)]=f},a)}}):(typeof n=="number"||typeof n=="string")&&o((r,s)=>{Object.assign(r,s)},n)};function Q(e){return"--Grid-".concat(e,"Spacing")}function ee(e){return"--Grid-parent-".concat(e,"Spacing")}const me="--Grid-columns",K="--Grid-parent-columns",Nt=({theme:e,ownerState:n})=>{const o={};return V(e.breakpoints,n.size,(i,r)=>{let s={};r==="grow"&&(s={flexBasis:0,flexGrow:1,maxWidth:"100%"}),r==="auto"&&(s={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),typeof r=="number"&&(s={flexGrow:0,flexBasis:"auto",width:"calc(100% * ".concat(r," / var(").concat(K,") - (var(").concat(K,") - ").concat(r,") * (var(").concat(ee("column"),") / var(").concat(K,")))")}),i(o,s)}),o},zt=({theme:e,ownerState:n})=>{const o={};return V(e.breakpoints,n.offset,(i,r)=>{let s={};r==="auto"&&(s={marginLeft:"auto"}),typeof r=="number"&&(s={marginLeft:r===0?"0px":"calc(100% * ".concat(r," / var(").concat(K,") + var(").concat(ee("column"),") * ").concat(r," / var(").concat(K,"))")}),i(o,s)}),o},Wt=({theme:e,ownerState:n})=>{if(!n.container)return{};const o={[me]:12};return V(e.breakpoints,n.columns,(i,r)=>{const s=r!=null?r:12;i(o,{[me]:s,"> *":{[K]:s}})}),o},Ht=({theme:e,ownerState:n})=>{if(!n.container)return{};const o={};return V(e.breakpoints,n.rowSpacing,(i,r)=>{var a;const s=typeof r=="string"?r:(a=e.spacing)==null?void 0:a.call(e,r);i(o,{[Q("row")]:s,"> *":{[ee("row")]:s}})}),o},Kt=({theme:e,ownerState:n})=>{if(!n.container)return{};const o={};return V(e.breakpoints,n.columnSpacing,(i,r)=>{var a;const s=typeof r=="string"?r:(a=e.spacing)==null?void 0:a.call(e,r);i(o,{[Q("column")]:s,"> *":{[ee("column")]:s}})}),o},Ut=({theme:e,ownerState:n})=>{if(!n.container)return{};const o={};return V(e.breakpoints,n.direction,(i,r)=>{i(o,{flexDirection:r})}),o},Vt=({ownerState:e})=>({minWidth:0,boxSizing:"border-box",...e.container&&{display:"flex",flexWrap:"wrap",...e.wrap&&e.wrap!=="wrap"&&{flexWrap:e.wrap},gap:"var(".concat(Q("row"),") var(").concat(Q("column"),")")}}),Yt=e=>{const n=[];return Object.entries(e).forEach(([o,i])=>{i!==!1&&i!==void 0&&n.push("grid-".concat(o,"-").concat(String(i)))}),n},qt=(e,n="xs")=>{function o(i){return i===void 0?!1:typeof i=="string"&&!Number.isNaN(Number(i))||typeof i=="number"&&i>0}if(o(e))return["spacing-".concat(n,"-").concat(String(e))];if(typeof e=="object"&&!Array.isArray(e)){const i=[];return Object.entries(e).forEach(([r,s])=>{o(s)&&i.push("spacing-".concat(r,"-").concat(String(s)))}),i}return[]},Xt=e=>e===void 0?[]:typeof e=="object"?Object.entries(e).map(([n,o])=>"direction-".concat(n,"-").concat(o)):["direction-xs-".concat(String(e))],Zt=Re(),Jt=Ge("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,n)=>n.root});function Qt(e){return Be({props:e,name:"MuiGrid",defaultTheme:Zt})}function en(e={}){const{createStyledComponent:n=Jt,useThemeProps:o=Qt,useTheme:i=Ee,componentName:r="MuiGrid"}=e,s=(l,c)=>{const{container:x,direction:g,spacing:u,wrap:h,size:d}=l,b={root:["root",x&&"container",h!=="wrap"&&"wrap-xs-".concat(String(h)),...Xt(g),...Yt(d),...x?qt(u,c.breakpoints.keys[0]):[]]};return Oe(b,y=>Ae(r,y),{})};function a(l,c,x=()=>!0){const g={};return l===null||(Array.isArray(l)?l.forEach((u,h)=>{u!==null&&x(u)&&c.keys[h]&&(g[c.keys[h]]=u)}):typeof l=="object"?Object.keys(l).forEach(u=>{const h=l[u];h!=null&&x(h)&&(g[u]=h)}):g[c.keys[0]]=l),g}const p=n(Wt,Kt,Ht,Nt,Ut,Vt,zt),f=m.forwardRef(function(c,x){var re,ie,ae,ce,le,de;const g=i(),u=o(c),h=$e(u),{className:d,children:b,columns:y=12,container:M=!1,component:I="div",direction:D="row",wrap:T="wrap",size:E={},offset:C={},spacing:w=0,rowSpacing:R=w,columnSpacing:$=w,unstable_level:k=0,...v}=h,G=a(E,g.breakpoints,_=>_!==!1),j=a(C,g.breakpoints),N=(re=c.columns)!=null?re:k?void 0:y,O=(ie=c.spacing)!=null?ie:k?void 0:w,z=(ce=(ae=c.rowSpacing)!=null?ae:c.spacing)!=null?ce:k?void 0:R,Z=(de=(le=c.columnSpacing)!=null?le:c.spacing)!=null?de:k?void 0:$,W={...h,level:k,columns:N,container:M,direction:D,wrap:T,spacing:O,rowSpacing:z,columnSpacing:Z,size:G,offset:j},Te=s(W,g);return t.jsx(p,{ref:x,as:I,ownerState:W,className:_e(Te.root,d),...v,children:m.Children.map(b,_=>{var ue,fe;return m.isValidElement(_)&&Pe(_,["Grid"])&&M&&_.props.container?m.cloneElement(_,{unstable_level:(fe=(ue=_.props)==null?void 0:ue.unstable_level)!=null?fe:k+1}):_})})});return f.muiName="Grid",f}const se=en({createStyledComponent:q("div",{name:"MuiGrid2",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:o}=e;return[n.root,o.container&&n.container]}}),componentName:"MuiGrid2",useThemeProps:e=>Le({props:e,name:"MuiGrid2"}),useTheme:Fe}),tn=m.forwardRef(({MenuItemProps:e,className:n,label:o,LeftIcon:i,renderLabel:r,RightIcon:s,...a},p)=>t.jsxs(Ne,{...e,ref:p,className:n,...a,children:[i&&t.jsx(he,{children:t.jsx(i,{fontSize:"small"})}),t.jsx(ze,{children:o}),s&&t.jsx(he,{style:{minWidth:0},children:t.jsx(s,{fontSize:"small"})})]})),Ie=m.forwardRef((e,n)=>{const{parentMenuOpen:o,label:i,renderLabel:r,RightIcon:s=te(Ke,He),LeftIcon:a,children:p,className:f,tabIndex:l,ContainerProps:c={},MenuProps:x,...g}=e,u=oe.useIsTouchDevice(),{ref:h,...d}=c,b=m.useRef(null);m.useImperativeHandle(n,()=>b.current);const y=m.useRef(null);m.useImperativeHandle(h,()=>y.current);const M=m.useRef(null),[I,D]=m.useState(!1),T=j=>{if(I!==j){if(e.disabled){D(!1);return}D(j)}},E=j=>{u||(T(!0),d.onMouseEnter&&d.onMouseEnter(j))},C=j=>{T(!1),d.onMouseLeave&&d.onMouseLeave(j)},w=()=>{var N,O;const j=(O=(N=y.current)==null?void 0:N.ownerDocument.activeElement)!=null?O:null;if(M.current==null)return!1;for(const z of M.current.children)if(z===j)return!0;return!1},R=j=>{u||(j.target===y.current&&T(!0),d.onFocus&&d.onFocus(j))},$=j=>{T(!I),d.onClick&&d.onClick(j)},k=j=>{var O,z,Z;if(j.key==="Escape")return;w()&&j.stopPropagation();const N=(O=y.current)==null?void 0:O.ownerDocument.activeElement;if(j.key==="ArrowLeft"&&w()&&((z=y.current)==null||z.focus()),j.key==="ArrowRight"&&j.target===y.current&&j.target===N){const W=(Z=M.current)==null?void 0:Z.children[0];W==null||W.focus()}},v=I&&o;let G;return e.disabled||(G=l!==void 0?l:-1),t.jsxs(F,{...d,ref:y,onFocus:R,onClick:$,tabIndex:G,onMouseEnter:E,onMouseLeave:C,onKeyDown:k,children:[t.jsx(tn,{MenuItemProps:g,className:f,ref:b,LeftIcon:a,RightIcon:s,label:i,renderLabel:r}),t.jsx(We,{style:{pointerEvents:"none"},anchorEl:b.current,anchorOrigin:{horizontal:te("right","left"),vertical:"top"},transformOrigin:{horizontal:te("left","right"),vertical:"top"},open:v,autoFocus:!1,disableAutoFocus:!0,disableEnforceFocus:!0,onClose:()=>{T(!1)},...x,children:t.jsx(F,{ref:M,style:{pointerEvents:"auto"},children:p})})]})});Ie.displayName="NestedMenuItem";const nn=["remove_from_library"],on=({manga:e,handleSelection:n,selectedMangas:o,onClose:i,setHideMenu:r})=>{var R,$;const{t:s}=U(),[a,p]=m.useState(!1),f=!!e,l=o!=null?o:[],c=Ze(f,et),x=Je(f),g=Qe(f),u=!!e&&e.downloadCount===e.chapters.totalCount,h=!!(e!=null&&e.downloadCount),d=!!(e!=null&&e.unreadCount),b=!!e&&e.unreadCount!==e.chapters.totalCount,{openCategorySelect:y,CategorySelectComponent:M}=Dt({mangaId:e==null?void 0:e.id,mangaIds:o?S.getIds(l):void 0,onClose:()=>i(!0),addToLibrary:!1}),I=()=>{n==null||n(e.id,!0),i(!0)},D=(k,v)=>{S.performAction(k,e?[e.id]:S.getIds(v),{wasManuallyMarkedAsRead:!0}).catch(ye()),i(!nn.includes(k))},{downloadableMangas:T,downloadedMangas:E,unreadMangas:C,readMangas:w}=m.useMemo(()=>({downloadableMangas:[...S.getNotDownloaded(l),...S.getPartiallyDownloaded(l)],downloadedMangas:[...S.getPartiallyDownloaded(l),...S.getFullyDownloaded(l)],unreadMangas:[...S.getUnread(l),...S.getPartiallyRead(l)],readMangas:[...S.getPartiallyRead(l),...S.getFullyRead(l)]}),[l]);return t.jsxs(t.Fragment,{children:[!!n&&f&&t.jsx(P,{onClick:I,Icon:Ue,title:s("chapter.action.label.select")}),x(!u)&&t.jsx(Ie,{disabled:g(!T.length),LeftIcon:Ve,label:c("download",T.length),parentMenuOpen:!0,children:t.jsx(Tt,{mangaIds:f?[e.id]:S.getIds(l),closeMenu:()=>i(!0)})}),x(h)&&t.jsx(P,{Icon:Ye,disabled:g(!E.length),onClick:()=>D("delete",E),title:c("delete",E.length)}),x(d)&&t.jsx(P,{Icon:qe,disabled:g(!C.length),onClick:()=>D("mark_as_read",C),title:c("mark_as_read",C.length)}),x(b)&&t.jsx(P,{Icon:Xe,disabled:g(!w.length),onClick:()=>D("mark_as_unread",w),title:c("mark_as_unread",w.length)}),f&&t.jsx(X,{to:"".concat(Y.migrate.childRoutes.search.path((R=e==null?void 0:e.sourceId)!=null?R:-1,($=e==null?void 0:e.id)!=null?$:-1),"?query=").concat(e==null?void 0:e.title),state:{mangaTitle:e==null?void 0:e.title},style:{textDecoration:"none",color:"inherit"},children:t.jsx(P,{Icon:Rt,title:c("migrate",l.length)})}),f&&t.jsx(P,{onClick:()=>{p(!0),r(!0)},Icon:Pt,title:c("track",l.length)}),t.jsx(P,{onClick:()=>{y(!0),r(!0)},Icon:Gt,title:c("change_categories",l.length)}),t.jsx(P,{onClick:()=>D("remove_from_library",l),Icon:Et,title:c("remove_from_library",l.length)}),M,a&&t.jsx(be,{open:!0,maxWidth:"md",fullWidth:!0,scroll:"paper",onClose:()=>{p(!1),i(!0)},children:t.jsx($t,{manga:e})})]})},sn=({mangaIdToMigrateTo:e,onClose:n})=>{const{t:o}=U(),i=tt(),{mangaId:r}=nt(),s=Number(r),{settings:{migrateChapters:a,migrateCategories:p,migrateTracking:f,deleteChapters:l}}=ot(),[c,x]=m.useState(!1),g=at(ye()),u=async h=>{if(s==null)throw new Error('MigrateDialog::migrate: unexpected mangaId "'.concat(s,'"'));ct(o("migrate.label.info"),"info"),x(!0);try{await S.migrate(s,e,{mode:h,migrateChapters:a,migrateCategories:p,migrateTracking:f,deleteChapters:l}),i(Y.manga.path(e),{replace:!0})}catch(d){x(!1)}};return t.jsxs(be,{open:!0,fullWidth:!0,onClose:n,children:[t.jsx(st,{children:o("migrate.dialog.title")}),t.jsx(rt,{dividers:!0,children:t.jsxs(Bt,{children:[t.jsx(J,{disabled:c,label:o("chapter.title_one"),checked:a,onChange:(h,d)=>g("migrateChapters",d)}),t.jsx(J,{disabled:c,label:o("category.title.category_one"),checked:p,onChange:(h,d)=>g("migrateCategories",d)}),t.jsx(J,{disabled:c,label:o("tracking.title"),checked:f,onChange:(h,d)=>g("migrateTracking",d)}),t.jsx(J,{disabled:c,label:o("migrate.dialog.label.delete_downloaded"),checked:l,onChange:(h,d)=>g("deleteChapters",d)})]})}),t.jsx(it,{children:t.jsxs(H,{direction:"row",sx:{justifyContent:"space-between",width:"100%"},children:[t.jsx(A,{disabled:c,component:X,to:Y.manga.path(e),children:o("migrate.dialog.action.button.show_entry")}),t.jsxs(H,{direction:"row",children:[t.jsx(A,{disabled:c,onClick:n,children:o("global.button.cancel")}),t.jsx(A,{disabled:c,onClick:()=>u("copy"),children:o("global.button.copy")}),t.jsx(A,{disabled:c,onClick:()=>u("migrate"),children:o("global.button.migrate")})]})]})})]})},Se=m.forwardRef(({id:e,selected:n,handleSelection:o,asCheckbox:i=!1,popupState:r},s)=>{const{t:a}=U(),p=oe.useIsTouchDevice(),f=m.useMemo(()=>lt(r),[r]),l=u=>{u.stopPropagation(),u.preventDefault()},c=(u,h)=>{l(u),o==null||o(e,h)},x=u=>{p||(l(u),r.open(u),f.onClick(u))};return o?n!==null?i?t.jsx(L,{title:a(n?"global.button.deselect":"global.button.select"),children:t.jsx(dt,{checked:n,onMouseDown:l,onChange:c})}):null:i?t.jsx(L,{title:a("global.button.options"),children:t.jsx(ut,{ref:s,...f,onClick:x,onTouchStart:x,"aria-label":"more",size:"large",onMouseDown:l,children:t.jsx(ge,{})})}):t.jsx(L,{title:a("global.button.options"),children:t.jsx(A,{ref:s,...f,onClick:x,onTouchStart:x,className:"manga-option-button",size:"small",variant:"contained",sx:{minWidth:"unset",paddingX:"0",paddingY:"2.5px",visibility:r.isOpen?"visible":"hidden",pointerEvents:"none","@media not (pointer: fine)":{visibility:"hidden",pointerEvents:void 0}},onMouseDown:u=>u.stopPropagation(),children:t.jsx(ge,{})})}):null}),rn=q("div")({position:"absolute",bottom:0,width:"100%",height:"30%",background:"linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)"}),an=q("div")({position:"absolute",bottom:0,width:"100%",height:"20%",background:"linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)"}),cn=({manga:e,longPressBind:n,popupState:o,handleClick:i,mangaLinkTo:r,selected:s,inLibraryIndicator:a,isInLibrary:p,gridLayout:f,handleSelection:l,continueReadingButton:c,mangaBadges:x,mode:g})=>{const u=m.useRef(null),{id:h,title:d}=e;return t.jsx(ft,{component:X,...n(()=>o.open(u.current)),onClick:i,to:r,state:{mangaTitle:d},sx:{textDecoration:"none",touchCallout:"none"},children:t.jsxs(F,{sx:{display:"flex",flexDirection:"column",m:.25,outline:s?"4px solid":void 0,borderRadius:s?"1px":void 0,outlineColor:b=>b.palette.primary.main,backgroundColor:b=>s?b.palette.primary.main:void 0,"@media (hover: hover) and (pointer: fine)":{"&:hover .manga-option-button":{visibility:"visible",pointerEvents:"all"},"&:hover .source-manga-library-state-button":{display:"inline-flex"},"&:hover .source-manga-library-state-indicator":{display:g==="source"?"none":"flex"}}},children:[t.jsx(je,{sx:{aspectRatio:ht,display:"flex"},children:t.jsxs(Ce,{sx:{position:"relative",height:"100%"},children:[t.jsx(we,{alt:d,src:S.getThumbnailUrl(e),imgStyle:a&&p?{height:"100%",width:"100%",objectFit:"cover",filter:"brightness(0.4)"}:{height:"100%",width:"100%",objectFit:"cover"},spinnerStyle:{display:"grid",placeItems:"center"}}),t.jsxs(H,{direction:"row",sx:{alignItems:"start",justifyContent:"space-between",position:"absolute",top:b=>b.spacing(1),left:b=>b.spacing(1),right:b=>b.spacing(1)},children:[x,t.jsx(Se,{ref:u,popupState:o,id:h,selected:s,handleSelection:l})]}),t.jsxs(t.Fragment,{children:[f!==B.Comfortable&&t.jsxs(t.Fragment,{children:[t.jsx(rn,{}),t.jsx(an,{})]}),t.jsxs(H,{direction:"row",sx:{justifyContent:f!==B.Comfortable?"space-between":"end",alignItems:"end",position:"absolute",bottom:0,width:"100%",p:1,gap:1},children:[f!==B.Comfortable&&t.jsx(L,{title:d,placement:"top",children:t.jsx(ne,{component:"h3",sx:{color:"white",textShadow:"0px 0px 3px #000000"},children:d})}),c]})]})]})}),f===B.Comfortable&&t.jsx(H,{sx:{pb:1},children:t.jsx(L,{title:d,placement:"top",children:t.jsx(ne,{component:"h3",sx:{color:b=>s?b.palette.primary.contrastText:"text.primary",height:"3rem",pt:.5},children:d})})})]})})},ln=({manga:e,longPressBind:n,popupState:o,handleClick:i,mangaLinkTo:r,selected:s,inLibraryIndicator:a,isInLibrary:p,handleSelection:f,continueReadingButton:l,mangaBadges:c,mode:x})=>{const g=m.useRef(null),{id:u,title:h}=e;return t.jsx(je,{children:t.jsx(Ce,{component:X,to:r,state:{mangaTitle:h},onClick:i,...n(()=>o.open(g.current)),sx:{touchCallout:"none","@media (hover: hover) and (pointer: fine)":{"&:hover .manga-option-button":{visibility:"visible",pointerEvents:"all"},"&:hover .source-manga-library-state-button":{display:"inline-flex"},"&:hover .source-manga-library-state-indicator":{display:x==="source"?"none":"inline-flex"}}},children:t.jsxs(gt,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:1.5,position:"relative"},children:[t.jsx(Ot,{variant:"rounded",sx:{width:56,height:56,flex:"0 0 auto",marginRight:1},children:t.jsx(we,{spinnerStyle:{small:!0},imgStyle:{objectFit:"cover",width:"100%",height:"100%",imageRendering:"pixelated",filter:a&&p?"brightness(0.4)":void 0},alt:e.title,src:S.getThumbnailUrl(e)})}),t.jsx(F,{sx:{display:"flex",flexDirection:"row",flexGrow:1,width:"min-content"},children:t.jsx(L,{title:h,placement:"top",children:t.jsx(ne,{variant:"h6",component:"h3",children:h})})}),t.jsxs(H,{direction:"row",sx:{alignItems:"center",gap:.5},children:[c,l,t.jsx(Se,{ref:g,popupState:o,id:u,selected:s,handleSelection:f,asCheckbox:!0})]})]})})})},dn=({showContinueReadingButton:e,chapter:n,mangaLinkTo:o})=>{const{t:i}=U();if(!e||!n)return null;const{sourceOrder:r}=n,s=r===1;return t.jsx(L,{title:i(s?"global.button.start":"global.button.resume"),children:t.jsx(A,{variant:"contained",size:"small",sx:{minWidth:"unset",py:.5,px:.75},component:X,to:"".concat(o,"/chapter/").concat(n.sourceOrder),state:{resumeMode:pt.getReaderResumeMode(n)},onClick:a=>a.stopPropagation(),onMouseDown:a=>a.stopPropagation(),children:t.jsx(At,{})})})},un=q("div")(({theme:e})=>({display:"flex",height:"fit-content",borderRadius:e.shape.borderRadius,overflow:"hidden"})),xe=q(ke)(({theme:e})=>({color:e.palette.primary.contrastText,paddingInline:e.spacing(.3)})),fn=({inLibraryIndicator:e,updateLibraryState:n,isInLibrary:o,unread:i,downloadCount:r,mode:s})=>{const{t:a}=U(),p=oe.useIsTouchDevice(),{options:{showUnreadBadge:f,showDownloadBadge:l}}=Me();return t.jsxs(un,{children:[!p&&e&&s==="source"&&t.jsx(A,{className:"source-manga-library-state-button",component:"div",variant:"contained",size:"small",onMouseDown:c=>c.stopPropagation(),onClick:c=>{c.preventDefault(),c.stopPropagation(),n()},sx:{display:"none"},color:o?"error":"primary",children:a(o?"manga.action.library.remove.label.action":"manga.button.add_to_library")}),e&&o&&t.jsx(ke,{className:"source-manga-library-state-indicator",sx:{backgroundColor:"primary.dark",color:"primary.contrastText",p:.3},children:a("manga.button.in_library")}),(f&&s==="default"||s==="duplicate")&&(i!=null?i:0)>0&&t.jsx(xe,{sx:{backgroundColor:"primary.main",color:"primary.contrastText"},children:i}),(l&&s==="default"||s==="duplicate")&&(r!=null?r:0)>0&&t.jsx(xe,{sx:{backgroundColor:"secondary.main",color:"secondary.contrastText"},children:r})]})},hn=(e,n,o,i)=>{switch(e){case"default":case"source":case"duplicate":return Y.manga.path(n);case"migrate.search":return"".concat(Y.migrate.childRoutes.search.path(o!=null?o:"-1",n),"?query=").concat(i);case"migrate.select":return"";default:throw new Error('getMangaLinkTo: unexpected MangaCardMode "'.concat(e,'"'))}},gn=e=>{const{manga:n,gridLayout:o,inLibraryIndicator:i,selected:r,handleSelection:s,mode:a="default"}=e,{id:p,firstUnreadChapter:f,downloadCount:l,unreadCount:c}=n,{options:{showContinueReadingButton:x}}=Me(),{CategorySelectComponent:g,updateLibraryState:u,isInLibrary:h}=_t(n,a==="source"),d=hn(a,n.id,n.sourceId,n.title),[b,y]=m.useState(!1),M=(C,w)=>{const R=a==="default",$=a==="source",k=a==="migrate.select",v=r!==null;if(k||v||(R||$)&&w){if(C.preventDefault(),$){u();return}if(v){s==null||s(p,!r,{selectRange:C.shiftKey});return}if(R){w==null||w();return}k&&y(!0)}},I=mt((C,{context:w})=>{C.shiftKey=!0,M(C,w)}),D=m.useMemo(()=>o===B.List?ln:cn,[o]),T=m.useMemo(()=>t.jsx(dn,{showContinueReadingButton:x&&a==="default",chapter:f,mangaLinkTo:d}),[x,f,d]),E=m.useMemo(()=>t.jsx(fn,{inLibraryIndicator:i,isInLibrary:h,unread:c,downloadCount:l,updateLibraryState:u,mode:a}),[i,h,c,l,u]);return t.jsxs(t.Fragment,{children:[b&&t.jsx(sn,{mangaIdToMigrateTo:n.id,onClose:()=>y(!1)}),t.jsx(xt,{variant:"popover",popupId:"manga-card-action-menu",children:C=>t.jsxs(t.Fragment,{children:[t.jsx(D,{...e,longPressBind:I,popupState:C,handleClick:M,mangaLinkTo:d,isInLibrary:h,inLibraryIndicator:i,continueReadingButton:T,mangaBadges:E}),!!s&&C.isOpen&&t.jsx(bt,{...yt(C),children:(w,R)=>t.jsx(on,{manga:n,handleSelection:s,onClose:w,setHideMenu:R})}),g]})})]})},pn=jt.forwardRef(({children:e,...n},o)=>t.jsx(se,{...n,ref:o,container:!0,spacing:1,children:e})),mn=(e,n,o,i=12)=>{const r=Math.ceil(e/n),s=o===B.List?i:i/r;return({children:a,...p})=>t.jsx(se,{...p,size:s,children:a})},De=(e,n,o,i=!1,r,s,a)=>t.jsx(gn,{manga:e,gridLayout:n,inLibraryIndicator:o,selected:i?r==null?void 0:r.includes(e.id):null,handleSelection:s,mode:a}),xn=m.forwardRef(({isLoading:e,mangas:n,inLibraryIndicator:o,GridItemContainer:i,gridLayout:r,isSelectModeActive:s,selectedMangaIds:a,handleSelection:p,mode:f},l)=>t.jsx(se,{ref:l,container:!0,spacing:1,sx:{width:"100%",overflowX:"auto",display:"-webkit-inline-box",flexWrap:"nowrap"},children:e?t.jsx(ve,{}):n.map(c=>t.jsx(i,{children:De(c,r,o,s,a,p,f)},c.id))})),bn=e=>"MangaGrid-snapshot-location-".concat(e.key),yn=m.forwardRef(({isLoading:e,mangas:n,inLibraryIndicator:o,GridItemContainer:i,gridLayout:r,hasNextPage:s,loadMore:a,isSelectModeActive:p,selectedMangaIds:f,handleSelection:l,mode:c},x)=>{const g=Ct(),u=bn(g),[h]=wt(u,void 0),d=m.useRef(),b=y=>{const M=window.location.href;clearTimeout(d.current),d.current=setTimeout(()=>{M===window.location.href&&Mt.session.setItem(u,y,!1)},250)};return m.useEffect(()=>clearTimeout(d.current),[g.key,d.current]),t.jsxs(t.Fragment,{children:[t.jsx(F,{ref:x,children:t.jsx(kt,{useWindowScroll:!0,overscan:window.innerHeight*.25,totalCount:n.length,components:{List:pn,Item:i},restoreStateFrom:h,stateChanged:b,endReached:()=>a(),computeItemKey:y=>n[y].id,itemContent:y=>De(n[y],r,o,p,f,l,c)})}),p&&r===B.List?t.jsx(F,{sx:{paddingBottom:Lt}}):e?t.jsx(ve,{}):s?t.jsx("div",{style:{height:"75px"}}):null]})}),Sn=({mangas:e,isLoading:n,message:o,messageExtra:i,hasNextPage:r,loadMore:s,gridLayout:a,horizontal:p,noFaces:f,inLibraryIndicator:l,isSelectModeActive:c,selectedMangaIds:x,handleSelection:g,mode:u,retry:h,gridWrapperProps:d})=>{var R,$;const{t:b}=U(),{navBarWidth:y}=vt(),M=m.useRef(null),I=m.useRef(null),[D,T]=m.useState(($=(R=I.current)==null?void 0:R.offsetWidth)!=null?$:Math.max(0,document.documentElement.offsetWidth-y)),[E]=It("ItemWidth",300),C=m.useMemo(()=>mn(D,E,a),[D,E,a]);return m.useLayoutEffect(()=>{let k;const v=G=>{k=setTimeout(()=>{if(document.body.style.overflow.includes("hidden")){v(250);return}document.body.style.overflowY=a===B.List?"auto":"scroll"},G)};return v(0),()=>{clearTimeout(k)}},[a]),m.useLayoutEffect(()=>()=>{document.body.style.overflowY="auto"},[]),pe(I,m.useCallback(()=>{T((()=>{var G;const v=(G=I.current)==null?void 0:G.offsetWidth;return v||document.documentElement.offsetWidth-y})())},[y])),pe(M,m.useCallback((k,v)=>{const G=k[0].target.clientHeight,j=G>document.documentElement.clientHeight;if(!n&&G){if(j){v.disconnect();return}s(),v.disconnect()}},[M,s,n])),!n&&e.length===0?t.jsx(St,{noFaces:f,message:o!=null?o:b("manga.error.label.no_mangas_found"),messageExtra:i,retry:h}):t.jsx(F,{...d,ref:I,sx:{...d==null?void 0:d.sx,overflow:"hidden"},children:p?t.jsx(xn,{ref:M,isLoading:n,mangas:e,inLibraryIndicator:l,GridItemContainer:C,gridLayout:a,isSelectModeActive:c,selectedMangaIds:x,handleSelection:g,mode:u}):t.jsx(yn,{ref:M,isLoading:n,mangas:e,inLibraryIndicator:l,GridItemContainer:C,hasNextPage:r,loadMore:s,gridLayout:a,isSelectModeActive:c,selectedMangaIds:x,handleSelection:g,mode:u})})};export{Sn as M,on as a,gn as b,bn as g};
