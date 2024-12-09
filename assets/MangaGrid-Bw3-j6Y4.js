import{c0 as _e,c1 as Te,f as m,c2 as De,c3 as Ge,j as n,aZ as Re,c4 as Se,c5 as Ee,bX as Pe,bT as Oe,a0 as Z,aX as Le,aw as Be,ax as ge,ay as Ne,M as ne,B as F,ag as Ae,c6 as ee,c7 as Fe,c8 as ze,u as K,c9 as P,ca as We,af as He,O as Ue,cb as Ke,cc as Xe,L as J,am as xe,cd as qe,ce as Ye,cf as Ze,m as be,h as Je,az as Qe,q as Ve,aH as et,aI as tt,X as Q,aK as nt,d as H,e as N,y as st,n as ot,ae as rt,k as A,_ as it,I as at,cg as he,ao as ct,C as ye,a as je,S as Ce,W as O,bD as te,b as lt,a5 as ut,T as ve,Z as Me,ch as dt,ad as ft,aE as gt,ah as ht,av as pt,l as we,aG as mt,bt as xt,ci as bt,bu as yt,p as jt,g as Ct,z as pe,E as vt}from"./index-D4N9uJT_.js";import{c as Mt,C as wt,e as kt,f as It,d as $t,T as _t,a as Tt}from"./useManageMangaLibraryState-Fm25k4gg.js";import{d as Dt}from"./Sync-D4asNGk7.js";import{M as $,b as Gt,a as Rt}from"./Mangas-CKfjhePX.js";import{F as St}from"./ListPreference-qjRSTIFS.js";import{A as Et}from"./Avatar-Lrc4_57M.js";import{d as Pt}from"./PlayArrow-l9SKjso5.js";import{D as Ot}from"./StyledFab-BgjvDyJy.js";const Lt=(e,t)=>e.filter(s=>t.includes(s)),X=(e,t,s)=>{const r=e.keys[0];Array.isArray(t)?t.forEach((a,o)=>{s((i,h)=>{o<=e.keys.length-1&&(o===0?Object.assign(i,h):i[e.up(e.keys[o])]=h)},a)}):t&&typeof t=="object"?(Object.keys(t).length>e.keys.length?e.keys:Lt(e.keys,Object.keys(t))).forEach(o=>{if(e.keys.includes(o)){const i=t[o];i!==void 0&&s((h,u)=>{r===o?Object.assign(h,u):h[e.up(o)]=u},i)}}):(typeof t=="number"||typeof t=="string")&&s((a,o)=>{Object.assign(a,o)},t)};function E(e){return e?"Level".concat(e):""}function se(e){return e.unstable_level>0&&e.container}function Bt(e){return function(s){return"var(--Grid-".concat(s,"Spacing").concat(E(e.unstable_level),")")}}function V(e){return function(s){return e.unstable_level===0?"var(--Grid-".concat(s,"Spacing)"):"var(--Grid-".concat(s,"Spacing").concat(E(e.unstable_level-1),")")}}function U(e){return e.unstable_level===0?"var(--Grid-columns)":"var(--Grid-columns".concat(E(e.unstable_level-1),")")}const Nt=({theme:e,ownerState:t})=>{const s=V(t),r={};return X(e.breakpoints,t.size,(a,o)=>{let i={};o==="grow"&&(i={flexBasis:0,flexGrow:1,maxWidth:"100%"}),o==="auto"&&(i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),typeof o=="number"&&(i={flexGrow:0,flexBasis:"auto",width:"calc(100% * ".concat(o," / ").concat(U(t)," - (").concat(U(t)," - ").concat(o,") * (").concat(s("column")," / ").concat(U(t),"))")}),a(r,i)}),r},At=({theme:e,ownerState:t})=>{const s=V(t),r={};return X(e.breakpoints,t.offset,(a,o)=>{let i={};o==="auto"&&(i={marginLeft:"auto"}),typeof o=="number"&&(i={marginLeft:o===0?"0px":"calc(100% * ".concat(o," / ").concat(U(t)," + ").concat(s("column")," * ").concat(o," / ").concat(U(t),")")}),a(r,i)}),r},Ft=({theme:e,ownerState:t})=>{if(!t.container)return{};const s=se(t)?{["--Grid-columns".concat(E(t.unstable_level))]:U(t)}:{"--Grid-columns":12};return X(e.breakpoints,t.columns,(r,a)=>{r(s,{["--Grid-columns".concat(E(t.unstable_level))]:a})}),s},zt=({theme:e,ownerState:t})=>{if(!t.container)return{};const s=V(t),r=se(t)?{["--Grid-rowSpacing".concat(E(t.unstable_level))]:s("row")}:{};return X(e.breakpoints,t.rowSpacing,(a,o)=>{var i;a(r,{["--Grid-rowSpacing".concat(E(t.unstable_level))]:typeof o=="string"?o:(i=e.spacing)==null?void 0:i.call(e,o)})}),r},Wt=({theme:e,ownerState:t})=>{if(!t.container)return{};const s=V(t),r=se(t)?{["--Grid-columnSpacing".concat(E(t.unstable_level))]:s("column")}:{};return X(e.breakpoints,t.columnSpacing,(a,o)=>{var i;a(r,{["--Grid-columnSpacing".concat(E(t.unstable_level))]:typeof o=="string"?o:(i=e.spacing)==null?void 0:i.call(e,o)})}),r},Ht=({theme:e,ownerState:t})=>{if(!t.container)return{};const s={};return X(e.breakpoints,t.direction,(r,a)=>{r(s,{flexDirection:a})}),s},Ut=({ownerState:e})=>{const t=Bt(e);return{minWidth:0,boxSizing:"border-box",...e.container&&{display:"flex",flexWrap:"wrap",...e.wrap&&e.wrap!=="wrap"&&{flexWrap:e.wrap},gap:"".concat(t("row")," ").concat(t("column"))}}},Kt=e=>{const t=[];return Object.entries(e).forEach(([s,r])=>{r!==!1&&r!==void 0&&t.push("grid-".concat(s,"-").concat(String(r)))}),t},Xt=(e,t="xs")=>{function s(r){return r===void 0?!1:typeof r=="string"&&!Number.isNaN(Number(r))||typeof r=="number"&&r>0}if(s(e))return["spacing-".concat(t,"-").concat(String(e))];if(typeof e=="object"&&!Array.isArray(e)){const r=[];return Object.entries(e).forEach(([a,o])=>{s(o)&&r.push("spacing-".concat(a,"-").concat(String(o)))}),r}return[]},qt=e=>e===void 0?[]:typeof e=="object"?Object.entries(e).map(([t,s])=>"direction-".concat(t,"-").concat(s)):["direction-xs-".concat(String(e))],Yt=_e(),Zt=Te("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>t.root});function Jt(e){return Ee({props:e,name:"MuiGrid",defaultTheme:Yt})}function Qt(e={}){const{createStyledComponent:t=Zt,useThemeProps:s=Jt,componentName:r="MuiGrid"}=e,a=(u,c)=>{const{container:l,direction:g,spacing:p,wrap:d,size:x}=u,f={root:["root",l&&"container",d!=="wrap"&&"wrap-xs-".concat(String(d)),...qt(g),...Kt(x),...l?Xt(p,c.breakpoints.keys[0]):[]]};return Pe(f,b=>Oe(r,b),{})};function o(u,c,l=()=>!0){const g={};return u===null||(Array.isArray(u)?u.forEach((p,d)=>{p!==null&&l(p)&&c.keys[d]&&(g[c.keys[d]]=p)}):typeof u=="object"?Object.keys(u).forEach(p=>{const d=u[p];d!=null&&l(d)&&(g[p]=d)}):g[c.keys[0]]=u),g}const i=t(Ft,Wt,zt,Nt,Ht,Ut,At),h=m.forwardRef(function(c,l){var re,ie,ae,ce,le,ue;const g=De(),p=s(c),d=Ge(p),{className:x,children:f,columns:b=12,container:j=!1,component:v="div",direction:k="row",wrap:_="wrap",size:T={},offset:R={},spacing:C=0,rowSpacing:M=C,columnSpacing:D=C,unstable_level:w=0,...S}=d,I=o(T,g.breakpoints,B=>B!==!1),G=o(R,g.breakpoints),y=(re=c.columns)!=null?re:w?void 0:b,z=(ie=c.spacing)!=null?ie:w?void 0:C,L=(ce=(ae=c.rowSpacing)!=null?ae:c.spacing)!=null?ce:w?void 0:M,W=(ue=(le=c.columnSpacing)!=null?le:c.spacing)!=null?ue:w?void 0:D,q={...d,level:w,columns:y,container:j,direction:k,wrap:_,spacing:z,rowSpacing:L,columnSpacing:W,size:I,offset:G},Y=a(q,g);return n.jsx(i,{ref:l,as:v,ownerState:q,className:Re(Y.root,x),...S,children:m.Children.map(f,B=>{var de,fe;return m.isValidElement(B)&&Se(B,["Grid"])?m.cloneElement(B,{unstable_level:(fe=(de=B.props)==null?void 0:de.unstable_level)!=null?fe:w+1}):B})})});return h.muiName="Grid",h}const oe=Qt({createStyledComponent:Z("div",{name:"MuiGrid2",slot:"Root",overridesResolver:(e,t)=>t.root}),componentName:"MuiGrid2",useThemeProps:e=>Le({props:e,name:"MuiGrid2"})}),Vt=m.forwardRef(({MenuItemProps:e,className:t,label:s,LeftIcon:r,renderLabel:a,RightIcon:o,...i},h)=>n.jsxs(Be,{...e,ref:h,className:t,...i,children:[r&&n.jsx(ge,{children:n.jsx(r,{fontSize:"small"})}),n.jsx(Ne,{children:s}),o&&n.jsx(ge,{style:{minWidth:0},children:n.jsx(o,{fontSize:"small"})})]})),ke=m.forwardRef((e,t)=>{const{parentMenuOpen:s,label:r,renderLabel:a,RightIcon:o=ee(ze,Fe),LeftIcon:i,children:h,className:u,tabIndex:c,ContainerProps:l={},MenuProps:g,...p}=e,d=ne.useIsTouchDevice(),{ref:x,...f}=l,b=m.useRef(null);m.useImperativeHandle(t,()=>b.current);const j=m.useRef(null);m.useImperativeHandle(x,()=>j.current);const v=m.useRef(null),[k,_]=m.useState(!1),T=y=>{if(k!==y){if(e.disabled){_(!1);return}_(y)}},R=y=>{d||(T(!0),f.onMouseEnter&&f.onMouseEnter(y))},C=y=>{T(!1),f.onMouseLeave&&f.onMouseLeave(y)},M=()=>{var z,L;const y=(L=(z=j.current)==null?void 0:z.ownerDocument.activeElement)!=null?L:null;if(v.current==null)return!1;for(const W of v.current.children)if(W===y)return!0;return!1},D=y=>{d||(y.target===j.current&&T(!0),f.onFocus&&f.onFocus(y))},w=y=>{T(!k),f.onClick&&f.onClick(y)},S=y=>{var L,W,q;if(y.key==="Escape")return;M()&&y.stopPropagation();const z=(L=j.current)==null?void 0:L.ownerDocument.activeElement;if(y.key==="ArrowLeft"&&M()&&((W=j.current)==null||W.focus()),y.key==="ArrowRight"&&y.target===j.current&&y.target===z){const Y=(q=v.current)==null?void 0:q.children[0];Y==null||Y.focus()}},I=k&&s;let G;return e.disabled||(G=c!==void 0?c:-1),n.jsxs(F,{...f,ref:j,onFocus:D,onClick:w,tabIndex:G,onMouseEnter:R,onMouseLeave:C,onKeyDown:S,children:[n.jsx(Vt,{MenuItemProps:p,className:u,ref:b,LeftIcon:i,RightIcon:o,label:r,renderLabel:a}),n.jsx(Ae,{style:{pointerEvents:"none"},anchorEl:b.current,anchorOrigin:{horizontal:ee("right","left"),vertical:"top"},transformOrigin:{horizontal:ee("left","right"),vertical:"top"},open:I,autoFocus:!1,disableAutoFocus:!0,disableEnforceFocus:!0,onClose:()=>{T(!1)},...g,children:n.jsx(F,{ref:v,style:{pointerEvents:"auto"},children:h})})]})});ke.displayName="NestedMenuItem";const en=["remove_from_library"],tn=({manga:e,handleSelection:t,selectedMangas:s,onClose:r,setHideMenu:a})=>{const{t:o}=K(),[i,h]=m.useState(!1),u=!!e,c=s!=null?s:[],l=qe(u,Gt),g=Ye(u),p=Ze(u),d=!!e&&e.downloadCount===e.chapters.totalCount,x=!!(e!=null&&e.downloadCount),f=!!(e!=null&&e.unreadCount),b=!!e&&e.unreadCount!==e.chapters.totalCount,{openCategorySelect:j,CategorySelectComponent:v}=Mt({mangaId:e==null?void 0:e.id,mangaIds:s?$.getIds(c):void 0,onClose:()=>r(!0),addToLibrary:!1}),k=()=>{t==null||t(e.id,!0),r(!0)},_=(D,w)=>{$.performAction(D,e?[e.id]:$.getIds(w),{wasManuallyMarkedAsRead:!0}).catch(be()),r(!en.includes(D))},{downloadableMangas:T,downloadedMangas:R,unreadMangas:C,readMangas:M}=m.useMemo(()=>({downloadableMangas:[...$.getNotDownloaded(c),...$.getPartiallyDownloaded(c)],downloadedMangas:[...$.getPartiallyDownloaded(c),...$.getFullyDownloaded(c)],unreadMangas:[...$.getUnread(c),...$.getPartiallyRead(c)],readMangas:[...$.getPartiallyRead(c),...$.getFullyRead(c)]}),[c]);return n.jsxs(n.Fragment,{children:[!!t&&u&&n.jsx(P,{onClick:k,Icon:We,title:o("chapter.action.label.select")}),g(!d)&&n.jsx(ke,{disabled:p(!T.length),LeftIcon:He,label:l("download",T.length),parentMenuOpen:!0,children:n.jsx(wt,{mangaIds:u?[e.id]:$.getIds(c),closeMenu:()=>r(!0)})}),g(x)&&n.jsx(P,{Icon:Ue,disabled:p(!R.length),onClick:()=>_("delete",R),title:l("delete",R.length)}),g(f)&&n.jsx(P,{Icon:Ke,disabled:p(!C.length),onClick:()=>_("mark_as_read",C),title:l("mark_as_read",C.length)}),g(b)&&n.jsx(P,{Icon:Xe,disabled:p(!M.length),onClick:()=>_("mark_as_unread",M),title:l("mark_as_unread",M.length)}),u&&n.jsx(J,{to:"/migrate/source/".concat(e==null?void 0:e.sourceId,"/manga/").concat(e==null?void 0:e.id,"/search?query=").concat(e==null?void 0:e.title),state:{mangaTitle:e==null?void 0:e.title},style:{textDecoration:"none",color:"inherit"},children:n.jsx(P,{Icon:kt,title:l("migrate",c.length)})}),u&&n.jsx(P,{onClick:()=>{h(!0),a(!0)},Icon:Dt,title:l("track",c.length)}),n.jsx(P,{onClick:()=>{j(!0),a(!0)},Icon:It,title:l("change_categories",c.length)}),n.jsx(P,{onClick:()=>_("remove_from_library",c),Icon:$t,title:l("remove_from_library",c.length)}),v,i&&n.jsx(xe,{open:!0,maxWidth:"md",fullWidth:!0,scroll:"paper",onClose:()=>{h(!1),r(!0)},children:n.jsx(_t,{manga:e})})]})},nn=({mangaIdToMigrateTo:e,onClose:t})=>{const{t:s}=K(),r=Je(),{mangaId:a}=Qe(),o=Number(a),{settings:{migrateChapters:i,migrateCategories:h,migrateTracking:u,deleteChapters:c}}=Ve(),[l,g]=m.useState(!1),p=st(be()),d=async x=>{if(o==null)throw new Error('MigrateDialog::migrate: unexpected mangaId "'.concat(o,'"'));ot(s("migrate.label.info"),"info"),g(!0);try{await $.migrate(o,e,{mode:x,migrateChapters:i,migrateCategories:h,migrateTracking:u,deleteChapters:c}),r("/manga/".concat(e),{replace:!0})}catch(f){g(!1)}};return n.jsxs(xe,{open:!0,fullWidth:!0,onClose:t,children:[n.jsx(et,{children:s("migrate.dialog.title")}),n.jsx(tt,{dividers:!0,children:n.jsxs(St,{children:[n.jsx(Q,{disabled:l,label:s("chapter.title_one"),checked:i,onChange:(x,f)=>p("migrateChapters",f)}),n.jsx(Q,{disabled:l,label:s("category.title.category_one"),checked:h,onChange:(x,f)=>p("migrateCategories",f)}),n.jsx(Q,{disabled:l,label:s("tracking.title"),checked:u,onChange:(x,f)=>p("migrateTracking",f)}),n.jsx(Q,{disabled:l,label:s("migrate.dialog.label.delete_downloaded"),checked:c,onChange:(x,f)=>p("deleteChapters",f)})]})}),n.jsx(nt,{children:n.jsxs(H,{direction:"row",sx:{justifyContent:"space-between",width:"100%"},children:[n.jsx(N,{disabled:l,component:J,to:"/manga/".concat(e),children:s("migrate.dialog.action.button.show_entry")}),n.jsxs(H,{direction:"row",children:[n.jsx(N,{disabled:l,onClick:t,children:s("global.button.cancel")}),n.jsx(N,{disabled:l,onClick:()=>d("copy"),children:s("global.button.copy")}),n.jsx(N,{disabled:l,onClick:()=>d("migrate"),children:s("global.button.migrate")})]})]})})]})},Ie=m.forwardRef(({id:e,selected:t,handleSelection:s,asCheckbox:r=!1,popupState:a},o)=>{const{t:i}=K(),h=ne.useIsTouchDevice(),u=m.useMemo(()=>rt(a),[a]),c=d=>{d.stopPropagation(),d.preventDefault()},l=(d,x)=>{c(d),s==null||s(e,x)},g=d=>{h||(c(d),a.open(d),u.onClick(d))};return s?t!==null?r?n.jsx(A,{title:i(t?"global.button.deselect":"global.button.select"),children:n.jsx(it,{checked:t,onMouseDown:c,onChange:l})}):null:r?n.jsx(A,{title:i("global.button.options"),children:n.jsx(at,{ref:o,...u,onClick:g,onTouchStart:g,"aria-label":"more",size:"large",onMouseDown:c,children:n.jsx(he,{})})}):n.jsx(A,{title:i("global.button.options"),children:n.jsx(N,{ref:o,...u,onClick:g,onTouchStart:g,className:"manga-option-button",size:"small",variant:"contained",sx:{minWidth:"unset",paddingX:"0",paddingY:"2.5px",visibility:a.isOpen?"visible":"hidden",pointerEvents:"none","@media not (pointer: fine)":{visibility:"hidden",pointerEvents:void 0}},onMouseDown:d=>d.stopPropagation(),children:n.jsx(he,{})})}):null}),sn=Z("div")({position:"absolute",bottom:0,width:"100%",height:"30%",background:"linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)"}),on=Z("div")({position:"absolute",bottom:0,width:"100%",height:"20%",background:"linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)"}),rn=({manga:e,longPressBind:t,popupState:s,handleClick:r,mangaLinkTo:a,selected:o,inLibraryIndicator:i,isInLibrary:h,gridLayout:u,handleSelection:c,continueReadingButton:l,mangaBadges:g,mode:p})=>{const d=m.useRef(null),{id:x,title:f}=e;return n.jsx(ct,{component:J,...t(()=>s.open(d.current)),onClick:r,to:a,state:{mangaTitle:f},sx:{textDecoration:"none",touchCallout:"none"},children:n.jsxs(F,{sx:{display:"flex",flexDirection:"column",m:.25,outline:o?"4px solid":void 0,borderRadius:o?"1px":void 0,outlineColor:b=>b.palette.primary.main,backgroundColor:b=>o?b.palette.primary.main:void 0,"@media (hover: hover) and (pointer: fine)":{"&:hover .manga-option-button":{visibility:"visible",pointerEvents:"all"},"&:hover .source-manga-library-state-button":{display:"inline-flex"},"&:hover .source-manga-library-state-indicator":{display:p==="source"?"none":"flex"}}},children:[n.jsx(ye,{sx:{aspectRatio:Rt,display:"flex"},children:n.jsxs(je,{sx:{position:"relative",height:"100%"},children:[n.jsx(Ce,{alt:f,src:$.getThumbnailUrl(e),imgStyle:i&&h?{height:"100%",width:"100%",objectFit:"cover",filter:"brightness(0.4)"}:{height:"100%",width:"100%",objectFit:"cover"},spinnerStyle:{display:"grid",placeItems:"center"}}),n.jsxs(H,{direction:"row",sx:{alignItems:"start",justifyContent:"space-between",position:"absolute",top:b=>b.spacing(1),left:b=>b.spacing(1),right:b=>b.spacing(1)},children:[g,n.jsx(Ie,{ref:d,popupState:s,id:x,selected:o,handleSelection:c})]}),n.jsxs(n.Fragment,{children:[u!==O.Comfortable&&n.jsxs(n.Fragment,{children:[n.jsx(sn,{}),n.jsx(on,{})]}),n.jsxs(H,{direction:"row",sx:{justifyContent:u!==O.Comfortable?"space-between":"end",alignItems:"end",position:"absolute",bottom:0,width:"100%",p:1,gap:1},children:[u!==O.Comfortable&&n.jsx(A,{title:f,placement:"top",children:n.jsx(te,{component:"h3",sx:{color:"white",textShadow:"0px 0px 3px #000000"},children:f})}),l]})]})]})}),u===O.Comfortable&&n.jsx(H,{sx:{pb:1},children:n.jsx(A,{title:f,placement:"top",children:n.jsx(te,{component:"h3",sx:{color:b=>o?b.palette.primary.contrastText:"text.primary",height:"3rem",pt:.5},children:f})})})]})})},an=({manga:e,longPressBind:t,popupState:s,handleClick:r,mangaLinkTo:a,selected:o,inLibraryIndicator:i,isInLibrary:h,handleSelection:u,continueReadingButton:c,mangaBadges:l,mode:g})=>{const p=m.useRef(null),{id:d,title:x}=e;return n.jsx(ye,{children:n.jsx(je,{component:J,to:a,state:{mangaTitle:x},onClick:r,...t(()=>s.open(p.current)),sx:{touchCallout:"none","@media (hover: hover) and (pointer: fine)":{"&:hover .manga-option-button":{visibility:"visible",pointerEvents:"all"},"&:hover .source-manga-library-state-button":{display:"inline-flex"},"&:hover .source-manga-library-state-indicator":{display:g==="source"?"none":"inline-flex"}}},children:n.jsxs(lt,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:1.5,position:"relative"},children:[n.jsx(Et,{variant:"rounded",sx:{width:56,height:56,flex:"0 0 auto",marginRight:1},children:n.jsx(Ce,{spinnerStyle:{small:!0},imgStyle:{objectFit:"cover",width:"100%",height:"100%",imageRendering:"pixelated",filter:i&&h?"brightness(0.4)":void 0},alt:e.title,src:$.getThumbnailUrl(e)})}),n.jsx(F,{sx:{display:"flex",flexDirection:"row",flexGrow:1,width:"min-content"},children:n.jsx(A,{title:x,placement:"top",children:n.jsx(te,{variant:"h6",component:"h3",children:x})})}),n.jsxs(H,{direction:"row",sx:{alignItems:"center",gap:.5},children:[l,c,n.jsx(Ie,{ref:p,popupState:s,id:d,selected:o,handleSelection:u,asCheckbox:!0})]})]})})})},cn=({showContinueReadingButton:e,chapter:t,mangaLinkTo:s})=>{const{t:r}=K();if(!e||!t)return null;const{sourceOrder:a}=t,o=a===1;return n.jsx(A,{title:r(o?"global.button.start":"global.button.resume"),children:n.jsx(N,{variant:"contained",size:"small",sx:{minWidth:"unset",py:.5,px:.75},component:J,to:"".concat(s,"chapter/").concat(t.sourceOrder),state:{resumeMode:ut.getReaderResumeMode(t)},onClick:i=>i.stopPropagation(),onMouseDown:i=>i.stopPropagation(),children:n.jsx(Pt,{})})})},ln=Z("div")(({theme:e})=>({display:"flex",height:"fit-content",borderRadius:e.shape.borderRadius,overflow:"hidden"})),me=Z(ve)(({theme:e})=>({color:e.palette.primary.contrastText,paddingInline:e.spacing(.3)})),un=({inLibraryIndicator:e,updateLibraryState:t,isInLibrary:s,unread:r,downloadCount:a,mode:o})=>{const{t:i}=K(),h=ne.useIsTouchDevice(),{options:{showUnreadBadge:u,showDownloadBadge:c}}=Me();return n.jsxs(ln,{children:[!h&&e&&o==="source"&&n.jsx(N,{className:"source-manga-library-state-button",component:"div",variant:"contained",size:"small",onMouseDown:l=>l.stopPropagation(),onClick:l=>{l.preventDefault(),l.stopPropagation(),t()},sx:{display:"none"},color:s?"error":"primary",children:i(s?"manga.action.library.remove.label.action":"manga.button.add_to_library")}),e&&s&&n.jsx(ve,{className:"source-manga-library-state-indicator",sx:{backgroundColor:"primary.dark",color:"primary.contrastText",p:.3},children:i("manga.button.in_library")}),(u&&o==="default"||o==="duplicate")&&(r!=null?r:0)>0&&n.jsx(me,{sx:{backgroundColor:"primary.main",color:"primary.contrastText"},children:r}),(c&&o==="default"||o==="duplicate")&&(a!=null?a:0)>0&&n.jsx(me,{sx:{backgroundColor:"secondary.main",color:"secondary.contrastText"},children:a})]})},dn=(e,t,s,r)=>{switch(e){case"default":case"source":case"duplicate":return"/manga/".concat(t,"/");case"migrate.search":return"/migrate/source/".concat(s,"/manga/").concat(t,"/search?query=").concat(r);case"migrate.select":return"";default:throw new Error('getMangaLinkTo: unexpected MangaCardMode "'.concat(e,'"'))}},fn=e=>{const{manga:t,gridLayout:s,inLibraryIndicator:r,selected:a,handleSelection:o,mode:i="default"}=e,{id:h,firstUnreadChapter:u,downloadCount:c,unreadCount:l}=t,{options:{showContinueReadingButton:g}}=Me(),{CategorySelectComponent:p,updateLibraryState:d,isInLibrary:x}=Tt(t,i==="source"),f=dn(i,t.id,t.sourceId,t.title),[b,j]=m.useState(!1),v=(C,M)=>{const D=i==="default",w=i==="source",S=i==="migrate.select",I=a!==null;if(S||I||(D||w)&&M){if(C.preventDefault(),w){d();return}if(I){o==null||o(h,!a,{selectRange:C.shiftKey});return}if(D){M==null||M();return}S&&j(!0)}},k=dt((C,{context:M})=>{C.shiftKey=!0,v(C,M)}),_=m.useMemo(()=>s===O.List?an:rn,[s]),T=m.useMemo(()=>n.jsx(cn,{showContinueReadingButton:g&&i==="default",chapter:u,mangaLinkTo:f}),[g,u,f]),R=m.useMemo(()=>n.jsx(un,{inLibraryIndicator:r,isInLibrary:x,unread:l,downloadCount:c,updateLibraryState:d,mode:i}),[r,x,l,c,d]);return n.jsxs(n.Fragment,{children:[b&&n.jsx(nn,{mangaIdToMigrateTo:t.id,onClose:()=>j(!1)}),n.jsx(ft,{variant:"popover",popupId:"manga-card-action-menu",children:C=>n.jsxs(n.Fragment,{children:[n.jsx(_,{...e,longPressBind:k,popupState:C,handleClick:v,mangaLinkTo:f,isInLibrary:x,inLibraryIndicator:r,continueReadingButton:T,mangaBadges:R}),!!o&&C.isOpen&&n.jsx(gt,{...ht(C),children:(M,D)=>n.jsx(tn,{manga:t,handleSelection:o,onClose:M,setHideMenu:D})}),p]})})]})},gn=pt.forwardRef(({children:e,...t},s)=>n.jsx(oe,{...t,ref:s,container:!0,spacing:1,children:e})),hn=(e,t,s,r=12)=>{const a=Math.ceil(e/t),o=s===O.List?r:r/a;return({children:i,...h})=>n.jsx(oe,{...h,size:o,children:i})},$e=(e,t,s,r=!1,a,o,i)=>n.jsx(fn,{manga:e,gridLayout:t,inLibraryIndicator:s,selected:r?a==null?void 0:a.includes(e.id):null,handleSelection:o,mode:i}),pn=m.forwardRef(({isLoading:e,mangas:t,inLibraryIndicator:s,GridItemContainer:r,gridLayout:a,isSelectModeActive:o,selectedMangaIds:i,handleSelection:h,mode:u},c)=>n.jsx(oe,{ref:c,container:!0,spacing:1,sx:{width:"100%",overflowX:"auto",display:"-webkit-inline-box",flexWrap:"nowrap"},children:e?n.jsx(we,{}):t.map(l=>n.jsx(r,{children:$e(l,a,s,o,i,h,u)},l.id))})),mn=e=>"MangaGrid-snapshot-location-".concat(e.key),xn=m.forwardRef(({isLoading:e,mangas:t,inLibraryIndicator:s,GridItemContainer:r,gridLayout:a,hasNextPage:o,loadMore:i,isSelectModeActive:h,selectedMangaIds:u,handleSelection:c,mode:l},g)=>{const p=mt(),d=mn(p),[x]=xt(d,void 0),f=m.useRef(),b=j=>{const v=window.location.href;clearTimeout(f.current),f.current=setTimeout(()=>{v===window.location.href&&yt.session.setItem(d,j,!1)},250)};return m.useEffect(()=>clearTimeout(f.current),[p.key,f.current]),n.jsxs(n.Fragment,{children:[n.jsx(F,{ref:g,children:n.jsx(bt,{useWindowScroll:!0,overscan:window.innerHeight*.25,totalCount:t.length,components:{List:gn,Item:r},restoreStateFrom:x,stateChanged:b,endReached:()=>i(),computeItemKey:j=>t[j].id,itemContent:j=>$e(t[j],a,s,h,u,c,l)})}),h&&a===O.List?n.jsx(F,{sx:{paddingBottom:Ot}}):e?n.jsx(we,{}):o?n.jsx("div",{style:{height:"75px"}}):null]})}),In=({mangas:e,isLoading:t,message:s,messageExtra:r,hasNextPage:a,loadMore:o,gridLayout:i,horizontal:h,noFaces:u,inLibraryIndicator:c,isSelectModeActive:l,selectedMangaIds:g,handleSelection:p,mode:d,retry:x,gridWrapperProps:f})=>{var D,w;const{t:b}=K(),{navBarWidth:j}=jt(),v=m.useRef(null),k=m.useRef(null),[_,T]=m.useState((w=(D=k.current)==null?void 0:D.offsetWidth)!=null?w:Math.max(0,document.documentElement.offsetWidth-j)),[R]=Ct("ItemWidth",300),C=m.useMemo(()=>hn(_,R,i),[_,R,i]);return m.useLayoutEffect(()=>{let S;const I=G=>{S=setTimeout(()=>{if(document.body.style.overflow.includes("hidden")){I(250);return}document.body.style.overflowY=i===O.List?"auto":"scroll"},G)};return I(0),()=>{clearTimeout(S)}},[i]),m.useLayoutEffect(()=>()=>{document.body.style.overflowY="auto"},[]),pe(k,m.useCallback(()=>{T((()=>{var G;const I=(G=k.current)==null?void 0:G.offsetWidth;return I||document.documentElement.offsetWidth-j})())},[j])),pe(v,m.useCallback((S,I)=>{const G=S[0].target.clientHeight,y=G>document.documentElement.clientHeight;if(!t&&G){if(y){I.disconnect();return}o(),I.disconnect()}},[v,o,t])),!t&&e.length===0?n.jsx(vt,{noFaces:u,message:s!=null?s:b("manga.error.label.no_mangas_found"),messageExtra:r,retry:x}):n.jsx(F,{...f,ref:k,sx:{...f==null?void 0:f.sx,overflow:"hidden"},children:h?n.jsx(pn,{ref:v,isLoading:t,mangas:e,inLibraryIndicator:c,GridItemContainer:C,gridLayout:i,isSelectModeActive:l,selectedMangaIds:g,handleSelection:p,mode:d}):n.jsx(xn,{ref:v,isLoading:t,mangas:e,inLibraryIndicator:c,GridItemContainer:C,hasNextPage:a,loadMore:o,gridLayout:i,isSelectModeActive:l,selectedMangaIds:g,handleSelection:p,mode:d})})};export{In as M,tn as a,fn as b,mn as g};
