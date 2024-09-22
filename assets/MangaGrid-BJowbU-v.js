import{bA as _e,bB as De,c as h,bC as Ge,bD as Te,j as n,ae as Se,bE as Re,bF as Ee,af as Pe,a9 as Le,x as X,aN as Be,a1 as Fe,a2 as ge,a3 as Ne,M as ne,B as W,U as Oe,aw as ee,bG as Ae,bH as We,u as K,C as ze,L as Q,W as xe,h as be,e as He,a4 as Ue,p as Ke,aF as Ye,aG as qe,aH as Je,S as H,b as O,v as Xe,m as Qe,J as Ve,f as A,I as Ze,s as L,T as ye,w as je,P as et,K as tt,a0 as nt,g as Ce,at as st,bc as ot,bd as rt,A as it,d as at,l as pe,E as ct}from"./index-D7SWUMPx.js";import{a as lt}from"./index-CL41gnou.js";import{l as ut,M as P,d as dt,C as ft,a as gt,b as pt,m as mt,n as ht,j as xt,T as bt,c as yt,e as jt,f as Ct,g as me,i as vt,J as wt,h as Mt}from"./useManageMangaLibraryState-elOHx5PW.js";import{d as kt}from"./Delete-Cb-cvmNU.js";import{d as It}from"./Sync-DpWpJbrB.js";import{M as _,a as $t}from"./Mangas-CrNLgX32.js";import{C as V}from"./CheckboxInput-CuItB8Y4.js";import{F as _t}from"./ListPreference-BAQPaNmU.js";import{S as ve}from"./SpinnerImage-C87K3Zhx.js";import{C as Dt}from"./Checkbox-CiBXPgmQ.js";import{T as te}from"./TypographyMaxLines-tcESkZIC.js";import{L as Gt}from"./Link-3i_eF2OP.js";import{C as we}from"./Card-BSp48nn6.js";import{C as Me}from"./CardActionArea-DKHQrD7L.js";import{C as Tt}from"./CardContent-AaVrPXZ2.js";import{A as St}from"./Avatar-Cec4o5e3.js";import{d as Rt}from"./PlayArrow-OSYpZGUx.js";import{D as Et}from"./StyledFab-Cw0OwoFq.js";const Pt=(e,t)=>e.filter(s=>t.includes(s)),Y=(e,t,s)=>{const r=e.keys[0];Array.isArray(t)?t.forEach((a,o)=>{s((i,p)=>{o<=e.keys.length-1&&(o===0?Object.assign(i,p):i[e.up(e.keys[o])]=p)},a)}):t&&typeof t=="object"?(Object.keys(t).length>e.keys.length?e.keys:Pt(e.keys,Object.keys(t))).forEach(o=>{if(e.keys.includes(o)){const i=t[o];i!==void 0&&s((p,l)=>{r===o?Object.assign(p,l):p[e.up(o)]=l},i)}}):(typeof t=="number"||typeof t=="string")&&s((a,o)=>{Object.assign(a,o)},t)};function E(e){return e?"Level".concat(e):""}function se(e){return e.unstable_level>0&&e.container}function Lt(e){return function(s){return"var(--Grid-".concat(s,"Spacing").concat(E(e.unstable_level),")")}}function Z(e){return function(s){return e.unstable_level===0?"var(--Grid-".concat(s,"Spacing)"):"var(--Grid-".concat(s,"Spacing").concat(E(e.unstable_level-1),")")}}function U(e){return e.unstable_level===0?"var(--Grid-columns)":"var(--Grid-columns".concat(E(e.unstable_level-1),")")}const Bt=({theme:e,ownerState:t})=>{const s=Z(t),r={};return Y(e.breakpoints,t.size,(a,o)=>{let i={};o==="grow"&&(i={flexBasis:0,flexGrow:1,maxWidth:"100%"}),o==="auto"&&(i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),typeof o=="number"&&(i={flexGrow:0,flexBasis:"auto",width:"calc(100% * ".concat(o," / ").concat(U(t)," - (").concat(U(t)," - ").concat(o,") * (").concat(s("column")," / ").concat(U(t),"))")}),a(r,i)}),r},Ft=({theme:e,ownerState:t})=>{const s=Z(t),r={};return Y(e.breakpoints,t.offset,(a,o)=>{let i={};o==="auto"&&(i={marginLeft:"auto"}),typeof o=="number"&&(i={marginLeft:o===0?"0px":"calc(100% * ".concat(o," / ").concat(U(t)," + ").concat(s("column")," * ").concat(o," / ").concat(U(t),")")}),a(r,i)}),r},Nt=({theme:e,ownerState:t})=>{if(!t.container)return{};const s=se(t)?{["--Grid-columns".concat(E(t.unstable_level))]:U(t)}:{"--Grid-columns":12};return Y(e.breakpoints,t.columns,(r,a)=>{r(s,{["--Grid-columns".concat(E(t.unstable_level))]:a})}),s},Ot=({theme:e,ownerState:t})=>{if(!t.container)return{};const s=Z(t),r=se(t)?{["--Grid-rowSpacing".concat(E(t.unstable_level))]:s("row")}:{};return Y(e.breakpoints,t.rowSpacing,(a,o)=>{var i;a(r,{["--Grid-rowSpacing".concat(E(t.unstable_level))]:typeof o=="string"?o:(i=e.spacing)==null?void 0:i.call(e,o)})}),r},At=({theme:e,ownerState:t})=>{if(!t.container)return{};const s=Z(t),r=se(t)?{["--Grid-columnSpacing".concat(E(t.unstable_level))]:s("column")}:{};return Y(e.breakpoints,t.columnSpacing,(a,o)=>{var i;a(r,{["--Grid-columnSpacing".concat(E(t.unstable_level))]:typeof o=="string"?o:(i=e.spacing)==null?void 0:i.call(e,o)})}),r},Wt=({theme:e,ownerState:t})=>{if(!t.container)return{};const s={};return Y(e.breakpoints,t.direction,(r,a)=>{r(s,{flexDirection:a})}),s},zt=({ownerState:e})=>{const t=Lt(e);return{minWidth:0,boxSizing:"border-box",...e.container&&{display:"flex",flexWrap:"wrap",...e.wrap&&e.wrap!=="wrap"&&{flexWrap:e.wrap},gap:"".concat(t("row")," ").concat(t("column"))}}},Ht=e=>{const t=[];return Object.entries(e).forEach(([s,r])=>{r!==!1&&r!==void 0&&t.push("grid-".concat(s,"-").concat(String(r)))}),t},Ut=(e,t="xs")=>{function s(r){return r===void 0?!1:typeof r=="string"&&!Number.isNaN(Number(r))||typeof r=="number"&&r>0}if(s(e))return["spacing-".concat(t,"-").concat(String(e))];if(typeof e=="object"&&!Array.isArray(e)){const r=[];return Object.entries(e).forEach(([a,o])=>{s(o)&&r.push("spacing-".concat(a,"-").concat(String(o)))}),r}return[]},Kt=e=>e===void 0?[]:typeof e=="object"?Object.entries(e).map(([t,s])=>"direction-".concat(t,"-").concat(s)):["direction-xs-".concat(String(e))],Yt=_e(),qt=De("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>t.root});function Jt(e){return Ee({props:e,name:"MuiGrid",defaultTheme:Yt})}function Xt(e={}){const{createStyledComponent:t=qt,useThemeProps:s=Jt,componentName:r="MuiGrid"}=e,a=(l,c)=>{const{container:u,direction:g,spacing:m,wrap:d,size:x}=l,f={root:["root",u&&"container",d!=="wrap"&&"wrap-xs-".concat(String(d)),...Kt(g),...Ht(x),...u?Ut(m,c.breakpoints.keys[0]):[]]};return Pe(f,b=>Le(r,b),{})};function o(l,c,u=()=>!0){const g={};return l===null||(Array.isArray(l)?l.forEach((m,d)=>{m!==null&&u(m)&&c.keys[d]&&(g[c.keys[d]]=m)}):typeof l=="object"?Object.keys(l).forEach(m=>{const d=l[m];d!=null&&u(d)&&(g[m]=d)}):g[c.keys[0]]=l),g}const i=t(Nt,At,Ot,Bt,Wt,zt,Ft),p=h.forwardRef(function(c,u){var re,ie,ae,ce,le,ue;const g=Ge(),m=s(c),d=Te(m),{className:x,children:f,columns:b=12,container:j=!1,component:v="div",direction:k="row",wrap:D="wrap",size:G={},offset:S={},spacing:T=0,rowSpacing:C=T,columnSpacing:w=T,unstable_level:M=0,...R}=d,I=o(G,g.breakpoints,N=>N!==!1),$=o(S,g.breakpoints),y=(re=c.columns)!=null?re:M?void 0:b,B=(ie=c.spacing)!=null?ie:M?void 0:T,F=(ce=(ae=c.rowSpacing)!=null?ae:c.spacing)!=null?ce:M?void 0:C,z=(ue=(le=c.columnSpacing)!=null?le:c.spacing)!=null?ue:M?void 0:w,q={...d,level:M,columns:y,container:j,direction:k,wrap:D,spacing:B,rowSpacing:F,columnSpacing:z,size:I,offset:$},J=a(q,g);return n.jsx(i,{ref:u,as:v,ownerState:q,className:Se(J.root,x),...R,children:h.Children.map(f,N=>{var de,fe;return h.isValidElement(N)&&Re(N,["Grid"])?h.cloneElement(N,{unstable_level:(fe=(de=N.props)==null?void 0:de.unstable_level)!=null?fe:M+1}):N})})});return p.muiName="Grid",p}const oe=Xt({createStyledComponent:X("div",{name:"MuiGrid2",slot:"Root",overridesResolver:(e,t)=>t.root}),componentName:"MuiGrid2",useThemeProps:e=>Be({props:e,name:"MuiGrid2"})}),Qt=h.forwardRef(({MenuItemProps:e,className:t,label:s,LeftIcon:r,renderLabel:a,RightIcon:o,...i},p)=>n.jsxs(Fe,{...e,ref:p,className:t,...i,children:[r&&n.jsx(ge,{children:n.jsx(r,{fontSize:"small"})}),n.jsx(Ne,{children:s}),o&&n.jsx(ge,{style:{minWidth:0},children:n.jsx(o,{fontSize:"small"})})]})),ke=h.forwardRef((e,t)=>{const{parentMenuOpen:s,label:r,renderLabel:a,RightIcon:o=ee(Ae,We),LeftIcon:i,children:p,className:l,tabIndex:c,ContainerProps:u={},MenuProps:g,...m}=e,d=ne.useIsTouchDevice(),{ref:x,...f}=u,b=h.useRef(null);h.useImperativeHandle(t,()=>b.current);const j=h.useRef(null);h.useImperativeHandle(x,()=>j.current);const v=h.useRef(null),[k,D]=h.useState(!1),G=y=>{if(k!==y){if(e.disabled){D(!1);return}D(y)}},S=y=>{d||(G(!0),f.onMouseEnter&&f.onMouseEnter(y))},T=y=>{G(!1),f.onMouseLeave&&f.onMouseLeave(y)},C=()=>{var B,F;const y=(F=(B=j.current)==null?void 0:B.ownerDocument.activeElement)!=null?F:null;if(v.current==null)return!1;for(const z of v.current.children)if(z===y)return!0;return!1},w=y=>{d||(y.target===j.current&&G(!0),f.onFocus&&f.onFocus(y))},M=y=>{G(!k),f.onClick&&f.onClick(y)},R=y=>{var F,z,q;if(y.key==="Escape")return;C()&&y.stopPropagation();const B=(F=j.current)==null?void 0:F.ownerDocument.activeElement;if(y.key==="ArrowLeft"&&C()&&((z=j.current)==null||z.focus()),y.key==="ArrowRight"&&y.target===j.current&&y.target===B){const J=(q=v.current)==null?void 0:q.children[0];J==null||J.focus()}},I=k&&s;let $;return e.disabled||($=c!==void 0?c:-1),n.jsxs(W,{...f,ref:j,onFocus:w,onClick:M,tabIndex:$,onMouseEnter:S,onMouseLeave:T,onKeyDown:R,children:[n.jsx(Qt,{MenuItemProps:m,className:l,ref:b,LeftIcon:i,RightIcon:o,label:r,renderLabel:a}),n.jsx(Oe,{style:{pointerEvents:"none"},anchorEl:b.current,anchorOrigin:{horizontal:ee("right","left"),vertical:"top"},transformOrigin:{horizontal:ee("left","right"),vertical:"top"},open:I,autoFocus:!1,disableAutoFocus:!0,disableEnforceFocus:!0,onClose:()=>{G(!1)},...g,children:n.jsx(W,{ref:v,style:{pointerEvents:"auto"},children:p})})]})});ke.displayName="NestedMenuItem";const Vt=["remove_from_library"],Zt=({manga:e,handleSelection:t,selectedMangas:s,onClose:r,setHideMenu:a})=>{const{t:o}=K(),[i,p]=h.useState(!1),l=!!e,c=s!=null?s:[],u=yt(l,$t),g=jt(l),m=Ct(l),d=!!e&&e.downloadCount===e.chapters.totalCount,x=!!(e!=null&&e.downloadCount),f=!!(e!=null&&e.unreadCount),b=!!e&&e.unreadCount!==e.chapters.totalCount,{openCategorySelect:j,CategorySelectComponent:v}=ut({mangaId:e==null?void 0:e.id,mangaIds:s?_.getIds(c):void 0,onClose:()=>r(!0),addToLibrary:!1}),k=()=>{t==null||t(e.id,!0),r(!0)},D=(w,M)=>{_.performAction(w,e?[e.id]:_.getIds(M),{wasManuallyMarkedAsRead:!0}).catch(be()),r(!Vt.includes(w))},{downloadableMangas:G,downloadedMangas:S,unreadMangas:T,readMangas:C}=h.useMemo(()=>({downloadableMangas:[..._.getNotDownloaded(c),..._.getPartiallyDownloaded(c)],downloadedMangas:[..._.getPartiallyDownloaded(c),..._.getFullyDownloaded(c)],unreadMangas:[..._.getUnread(c),..._.getPartiallyRead(c)],readMangas:[..._.getPartiallyRead(c),..._.getFullyRead(c)]}),[c]);return n.jsxs(n.Fragment,{children:[!!t&&l&&n.jsx(P,{onClick:k,Icon:dt,title:o("chapter.action.label.select")}),g(!d)&&n.jsx(ke,{disabled:m(!G.length),LeftIcon:ze,label:u("download",G.length),parentMenuOpen:!0,children:n.jsx(ft,{mangaIds:l?[e.id]:_.getIds(c),closeMenu:()=>r(!0)})}),g(x)&&n.jsx(P,{Icon:kt,disabled:m(!S.length),onClick:()=>D("delete",S),title:u("delete",S.length)}),g(f)&&n.jsx(P,{Icon:gt,disabled:m(!T.length),onClick:()=>D("mark_as_read",T),title:u("mark_as_read",T.length)}),g(b)&&n.jsx(P,{Icon:pt,disabled:m(!C.length),onClick:()=>D("mark_as_unread",C),title:u("mark_as_unread",C.length)}),l&&n.jsx(Q,{to:"/migrate/source/".concat(e==null?void 0:e.sourceId,"/manga/").concat(e==null?void 0:e.id,"/search?query=").concat(e==null?void 0:e.title),state:{mangaTitle:e==null?void 0:e.title},style:{textDecoration:"none",color:"inherit"},children:n.jsx(P,{Icon:mt,title:u("migrate",c.length)})}),l&&n.jsx(P,{onClick:()=>{p(!0),a(!0)},Icon:It,title:u("track",c.length)}),n.jsx(P,{onClick:()=>{j(!0),a(!0)},Icon:ht,title:u("change_categories",c.length)}),n.jsx(P,{onClick:()=>D("remove_from_library",c),Icon:xt,title:u("remove_from_library",c.length)}),v,i&&n.jsx(xe,{open:!0,maxWidth:"md",fullWidth:!0,scroll:"paper",onClose:()=>{p(!1),r(!0)},children:n.jsx(bt,{manga:e})})]})},en=({mangaIdToMigrateTo:e,onClose:t})=>{const{t:s}=K(),r=He(),{mangaId:a}=Ue(),o=Number(a),{settings:{migrateChapters:i,migrateCategories:p,migrateTracking:l,deleteChapters:c}}=Ke(),[u,g]=h.useState(!1),m=Xe(be()),d=async x=>{if(o==null)throw new Error('MigrateDialog::migrate: unexpected mangaId "'.concat(o,'"'));Qe(s("migrate.label.info"),"info"),g(!0);try{await _.migrate(o,e,{mode:x,migrateChapters:i,migrateCategories:p,migrateTracking:l,deleteChapters:c}),r("/manga/".concat(e),{replace:!0})}catch(f){g(!1)}};return n.jsxs(xe,{open:!0,fullWidth:!0,onClose:t,children:[n.jsx(Ye,{children:s("migrate.dialog.title")}),n.jsx(qe,{dividers:!0,children:n.jsxs(_t,{children:[n.jsx(V,{disabled:u,label:s("chapter.title_one"),checked:i,onChange:(x,f)=>m("migrateChapters",f)}),n.jsx(V,{disabled:u,label:s("category.title.category_one"),checked:p,onChange:(x,f)=>m("migrateCategories",f)}),n.jsx(V,{disabled:u,label:s("tracking.title"),checked:l,onChange:(x,f)=>m("migrateTracking",f)}),n.jsx(V,{disabled:u,label:s("migrate.dialog.label.delete_downloaded"),checked:c,onChange:(x,f)=>m("deleteChapters",f)})]})}),n.jsx(Je,{children:n.jsxs(H,{direction:"row",sx:{justifyContent:"space-between",width:"100%"},children:[n.jsx(O,{disabled:u,component:Q,to:"/manga/".concat(e),children:s("migrate.dialog.action.button.show_entry")}),n.jsxs(H,{direction:"row",children:[n.jsx(O,{disabled:u,onClick:t,children:s("global.button.cancel")}),n.jsx(O,{disabled:u,onClick:()=>d("copy"),children:s("global.button.copy")}),n.jsx(O,{disabled:u,onClick:()=>d("migrate"),children:s("global.button.migrate")})]})]})})]})},Ie=h.forwardRef(({id:e,selected:t,handleSelection:s,asCheckbox:r=!1,popupState:a},o)=>{const{t:i}=K(),p=ne.useIsTouchDevice(),l=h.useMemo(()=>Ve(a),[a]),c=d=>{d.stopPropagation(),d.preventDefault()},u=(d,x)=>{c(d),s==null||s(e,x)},g=d=>{p||(c(d),a.open(d),l.onClick(d))};return s?t!==null?r?n.jsx(A,{title:i(t?"global.button.deselect":"global.button.select"),children:n.jsx(Dt,{checked:t,onMouseDown:c,onChange:u})}):null:r?n.jsx(A,{title:i("global.button.options"),children:n.jsx(Ze,{ref:o,...l,onClick:g,onTouchStart:g,"aria-label":"more",size:"large",onMouseDown:c,children:n.jsx(me,{})})}):n.jsx(A,{title:i("global.button.options"),children:n.jsx(O,{ref:o,...l,onClick:g,onTouchStart:g,className:"manga-option-button",size:"small",variant:"contained",sx:{minWidth:"unset",paddingX:"0",paddingY:"2.5px",visibility:a.isOpen?"visible":"hidden",pointerEvents:"none","@media not (pointer: fine)":{visibility:"hidden",pointerEvents:void 0}},onMouseDown:d=>d.stopPropagation(),children:n.jsx(me,{})})}):null}),tn=X("div")({position:"absolute",bottom:0,width:"100%",height:"30%",background:"linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)"}),nn=X("div")({position:"absolute",bottom:0,width:"100%",height:"20%",background:"linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)"}),sn=({manga:e,longPressBind:t,popupState:s,handleClick:r,mangaLinkTo:a,selected:o,inLibraryIndicator:i,isInLibrary:p,gridLayout:l,handleSelection:c,continueReadingButton:u,mangaBadges:g,mode:m})=>{const d=h.useRef(null),{id:x,title:f}=e;return n.jsx(Gt,{component:Q,...t(()=>s.open(d.current)),onClick:r,to:a,state:{mangaTitle:f},sx:{textDecoration:"none",touchCallout:"none"},children:n.jsxs(W,{sx:{display:"flex",flexDirection:"column",m:.25,outline:o?"4px solid":void 0,borderRadius:o?"1px":void 0,outlineColor:b=>b.palette.primary.main,backgroundColor:b=>o?b.palette.primary.main:void 0,"@media (hover: hover) and (pointer: fine)":{"&:hover .manga-option-button":{visibility:"visible",pointerEvents:"all"},"&:hover .source-manga-library-state-button":{display:"inline-flex"},"&:hover .source-manga-library-state-indicator":{display:m==="source"?"none":"flex"}}},children:[n.jsx(we,{sx:{aspectRatio:"225/350",display:"flex"},children:n.jsxs(Me,{sx:{position:"relative",height:"100%"},children:[n.jsx(ve,{alt:f,src:_.getThumbnailUrl(e),imgStyle:i&&p?{height:"100%",width:"100%",objectFit:"cover",filter:"brightness(0.4)"}:{height:"100%",width:"100%",objectFit:"cover"},spinnerStyle:{display:"grid",placeItems:"center"}}),n.jsxs(H,{direction:"row",sx:{alignItems:"start",justifyContent:"space-between",position:"absolute",top:b=>b.spacing(1),left:b=>b.spacing(1),right:b=>b.spacing(1)},children:[g,n.jsx(Ie,{ref:d,popupState:s,id:x,selected:o,handleSelection:c})]}),n.jsxs(n.Fragment,{children:[l!==L.Comfortable&&n.jsxs(n.Fragment,{children:[n.jsx(tn,{}),n.jsx(nn,{})]}),n.jsxs(H,{direction:"row",sx:{justifyContent:l!==L.Comfortable?"space-between":"end",alignItems:"end",position:"absolute",bottom:0,width:"100%",p:1,gap:1},children:[l!==L.Comfortable&&n.jsx(A,{title:f,placement:"top",children:n.jsx(te,{component:"h3",sx:{color:"white",textShadow:"0px 0px 3px #000000"},children:f})}),u]})]})]})}),l===L.Comfortable&&n.jsx(H,{sx:{pb:1},children:n.jsx(A,{title:f,placement:"top",children:n.jsx(te,{component:"h3",sx:{color:b=>o?b.palette.primary.contrastText:"text.primary",height:"3rem",pt:.5},children:f})})})]})})},on=({manga:e,longPressBind:t,popupState:s,handleClick:r,mangaLinkTo:a,selected:o,inLibraryIndicator:i,isInLibrary:p,handleSelection:l,continueReadingButton:c,mangaBadges:u,mode:g})=>{const m=h.useRef(null),{id:d,title:x}=e;return n.jsx(we,{children:n.jsx(Me,{component:Q,to:a,state:{mangaTitle:x},onClick:r,...t(()=>s.open(m.current)),sx:{touchCallout:"none","@media (hover: hover) and (pointer: fine)":{"&:hover .manga-option-button":{visibility:"visible",pointerEvents:"all"},"&:hover .source-manga-library-state-button":{display:"inline-flex"},"&:hover .source-manga-library-state-indicator":{display:g==="source"?"none":"inline-flex"}}},children:n.jsxs(Tt,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:1.5,position:"relative"},children:[n.jsx(St,{variant:"rounded",sx:{width:56,height:56,flex:"0 0 auto",marginRight:1},children:n.jsx(ve,{spinnerStyle:{small:!0},imgStyle:{objectFit:"cover",width:"100%",height:"100%",imageRendering:"pixelated",filter:i&&p?"brightness(0.4)":void 0},alt:e.title,src:_.getThumbnailUrl(e)})}),n.jsx(W,{sx:{display:"flex",flexDirection:"row",flexGrow:1,width:"min-content"},children:n.jsx(A,{title:x,placement:"top",children:n.jsx(te,{variant:"h6",component:"h3",children:x})})}),n.jsxs(H,{direction:"row",sx:{alignItems:"center",gap:.5},children:[u,c,n.jsx(Ie,{ref:m,popupState:s,id:d,selected:o,handleSelection:l,asCheckbox:!0})]})]})})})},rn=({showContinueReadingButton:e,nextChapterIndexToRead:t,mangaLinkTo:s})=>{const{t:r}=K(),a=t===1;return!e||t===void 0?null:n.jsx(A,{title:r(a?"global.button.start":"global.button.resume"),children:n.jsx(O,{variant:"contained",size:"small",sx:{minWidth:"unset",py:.5,px:.75},component:Q,to:"".concat(s,"chapter/").concat(t),onClick:o=>o.stopPropagation(),onMouseDown:o=>o.stopPropagation(),children:n.jsx(Rt,{})})})},an=X("div")(({theme:e})=>({display:"flex",height:"fit-content",borderRadius:e.shape.borderRadius,overflow:"hidden"})),he=X(ye)(({theme:e})=>({color:e.palette.primary.contrastText,paddingInline:e.spacing(.3)})),cn=({inLibraryIndicator:e,updateLibraryState:t,isInLibrary:s,unread:r,downloadCount:a,mode:o})=>{const{t:i}=K(),p=ne.useIsTouchDevice(),{options:{showUnreadBadge:l,showDownloadBadge:c}}=je();return n.jsxs(an,{children:[!p&&e&&o==="source"&&n.jsx(O,{className:"source-manga-library-state-button",component:"div",variant:"contained",size:"small",onMouseDown:u=>u.stopPropagation(),onClick:u=>{u.preventDefault(),u.stopPropagation(),t()},sx:{display:"none"},color:s?"error":"primary",children:i(s?"manga.action.library.remove.label.action":"manga.button.add_to_library")}),e&&s&&n.jsx(ye,{className:"source-manga-library-state-indicator",sx:{backgroundColor:"primary.dark",color:"primary.contrastText",p:.3},children:i("manga.button.in_library")}),(l&&o==="default"||o==="duplicate")&&(r!=null?r:0)>0&&n.jsx(he,{sx:{backgroundColor:"primary.main",color:"primary.contrastText"},children:r}),(c&&o==="default"||o==="duplicate")&&(a!=null?a:0)>0&&n.jsx(he,{sx:{backgroundColor:"secondary.main",color:"secondary.contrastText"},children:a})]})},ln=(e,t,s,r)=>{switch(e){case"default":case"source":case"duplicate":return"/manga/".concat(t,"/");case"migrate.search":return"/migrate/source/".concat(s,"/manga/").concat(t,"/search?query=").concat(r);case"migrate.select":return"";default:throw new Error('getMangaLinkTo: unexpected MangaCardMode "'.concat(e,'"'))}},un=e=>{const{manga:t,gridLayout:s,inLibraryIndicator:r,selected:a,handleSelection:o,mode:i="default"}=e,{id:p,firstUnreadChapter:l,downloadCount:c,unreadCount:u}=t,{options:{showContinueReadingButton:g}}=je(),{CategorySelectComponent:m,updateLibraryState:d,isInLibrary:x}=vt(t,i==="source"),f=ln(i,t.id,t.sourceId,t.title),b=l==null?void 0:l.sourceOrder,[j,v]=h.useState(!1),k=(C,w)=>{const M=i==="default",R=i==="source",I=i==="migrate.select",$=a!==null;if(I||$||(M||R)&&w){if(C.preventDefault(),R){d();return}if($){o==null||o(p,!a,{selectRange:C.shiftKey});return}if(M){w==null||w();return}I&&v(!0)}},D=wt((C,{context:w})=>{C.shiftKey=!0,k(C,w)}),G=h.useMemo(()=>s===L.List?on:sn,[s]),S=h.useMemo(()=>n.jsx(rn,{showContinueReadingButton:g&&i==="default",nextChapterIndexToRead:b,mangaLinkTo:f}),[g,b,f]),T=h.useMemo(()=>n.jsx(cn,{inLibraryIndicator:r,isInLibrary:x,unread:u,downloadCount:c,updateLibraryState:d,mode:i}),[r,x,u,c,d]);return n.jsxs(n.Fragment,{children:[j&&n.jsx(en,{mangaIdToMigrateTo:t.id,onClose:()=>v(!1)}),n.jsx(et,{variant:"popover",popupId:"manga-card-action-menu",children:C=>n.jsxs(n.Fragment,{children:[n.jsx(G,{...e,longPressBind:D,popupState:C,handleClick:k,mangaLinkTo:f,isInLibrary:x,inLibraryIndicator:r,continueReadingButton:S,mangaBadges:T}),!!o&&C.isOpen&&n.jsx(Mt,{...tt(C),children:(w,M)=>n.jsx(Zt,{manga:t,handleSelection:o,onClose:w,setHideMenu:M})}),m]})})]})},dn=nt.forwardRef(({children:e,...t},s)=>n.jsx(oe,{...t,ref:s,container:!0,spacing:1,children:e})),fn=(e,t,s,r=12)=>{const a=Math.ceil(e/t),o=s===L.List?r:r/a;return({children:i,...p})=>n.jsx(oe,{...p,size:o,children:i})},$e=(e,t,s,r=!1,a,o,i)=>n.jsx(un,{manga:e,gridLayout:t,inLibraryIndicator:s,selected:r?a==null?void 0:a.includes(e.id):null,handleSelection:o,mode:i},e.id),gn=h.forwardRef(({isLoading:e,mangas:t,inLibraryIndicator:s,GridItemContainer:r,gridLayout:a,isSelectModeActive:o,selectedMangaIds:i,handleSelection:p,mode:l},c)=>n.jsx(oe,{ref:c,container:!0,spacing:1,sx:{width:"100%",overflowX:"auto",display:"-webkit-inline-box",flexWrap:"nowrap"},children:e?n.jsx(Ce,{}):t.map(u=>n.jsx(r,{children:$e(u,a,s,o,i,p,l)},u.id))})),pn=e=>"MangaGrid-snapshot-location-".concat(e.key),mn=h.forwardRef(({isLoading:e,mangas:t,inLibraryIndicator:s,GridItemContainer:r,gridLayout:a,hasNextPage:o,loadMore:i,isSelectModeActive:p,selectedMangaIds:l,handleSelection:c,mode:u},g)=>{const m=st(),d=pn(m),[x]=ot(d,void 0),f=h.useRef(),b=j=>{const v=window.location.href;clearTimeout(f.current),f.current=setTimeout(()=>{v===window.location.href&&rt.session.setItem(d,j,!1)},250)};return h.useEffect(()=>clearTimeout(f.current),[m.key,f.current]),n.jsxs(n.Fragment,{children:[n.jsx(W,{ref:g,children:n.jsx(lt,{useWindowScroll:!0,overscan:window.innerHeight*.25,totalCount:t.length,components:{List:dn,Item:r},restoreStateFrom:x,stateChanged:b,endReached:()=>i(),itemContent:j=>$e(t[j],a,s,p,l,c,u)})}),p&&a===L.List?n.jsx(W,{sx:{paddingBottom:Et}}):e?n.jsx(Ce,{}):o?n.jsx("div",{style:{height:"75px"}}):null]})}),En=({mangas:e,isLoading:t,message:s,messageExtra:r,hasNextPage:a,loadMore:o,gridLayout:i,horizontal:p,noFaces:l,inLibraryIndicator:c,isSelectModeActive:u,selectedMangaIds:g,handleSelection:m,mode:d,retry:x,gridWrapperProps:f})=>{var w,M;const{t:b}=K(),{navBarWidth:j}=it(),v=h.useRef(null),k=h.useRef(null),[D,G]=h.useState((M=(w=k.current)==null?void 0:w.offsetWidth)!=null?M:Math.max(0,document.documentElement.offsetWidth-j)),[S]=at("ItemWidth",300),T=h.useMemo(()=>fn(D,S,i),[D,S,i]);return h.useLayoutEffect(()=>{let R;const I=$=>{R=setTimeout(()=>{if(document.body.style.overflow.includes("hidden")){I(250);return}document.body.style.overflowY=i===L.List?"auto":"scroll"},$)};return I(0),()=>{clearTimeout(R)}},[i]),h.useLayoutEffect(()=>()=>{document.body.style.overflowY="auto"},[]),pe(k,h.useCallback(()=>{G((()=>{var $;const I=($=k.current)==null?void 0:$.offsetWidth;return I||document.documentElement.offsetWidth-j})())},[j])),pe(v,h.useCallback((R,I)=>{const $=R[0].target.clientHeight,y=$>document.documentElement.clientHeight;if(!t&&$){if(y){I.disconnect();return}o(),I.disconnect()}},[v,o,t])),!t&&e.length===0?n.jsx(ct,{noFaces:l,message:s!=null?s:b("manga.error.label.no_mangas_found"),messageExtra:r,retry:x}):n.jsx(W,{...f,ref:k,sx:{...f==null?void 0:f.sx,overflow:"hidden"},children:p?n.jsx(gn,{ref:v,isLoading:t,mangas:e,inLibraryIndicator:c,GridItemContainer:T,gridLayout:i,isSelectModeActive:u,selectedMangaIds:g,handleSelection:m,mode:d}):n.jsx(mn,{ref:v,isLoading:t,mangas:e,inLibraryIndicator:c,GridItemContainer:T,hasNextPage:a,loadMore:o,gridLayout:i,isSelectModeActive:u,selectedMangaIds:g,handleSelection:m,mode:d})})};export{En as M,Zt as a,un as b,pn as g};