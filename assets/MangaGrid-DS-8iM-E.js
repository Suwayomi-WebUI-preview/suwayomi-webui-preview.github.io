import{bC as _e,bD as De,c as h,bE as Ge,bF as Te,j as n,af as Se,bG as Re,bH as Ee,ag as Pe,aa as Le,C as J,aQ as Be,a2 as Fe,a3 as ge,a4 as Oe,M as ne,B as z,V as Ne,bI as ee,bJ as Ae,bK as ze,u as U,L as Q,X as xe,h as be,e as We,a5 as He,l as Ke,aF as Ue,aG as Xe,aH as Ye,S as H,b as N,t as qe,m as Je,K as Qe,f as A,I as Ve,y as L,T as ye,A as je,P as Ze,O as et,a1 as tt,g as Ce,av as nt,be as st,bf as ot,k as rt,d as it,v as pe}from"./index-B75kYtqP.js";import{a as at}from"./index-CVCnai7L.js";import{E as ct}from"./EmptyViewAbsoluteCentered-Dv2qmjMZ.js";import{l as lt,M as P,d as ut,C as dt,a as ft,b as gt,m as pt,n as mt,j as ht,T as xt,c as bt,e as yt,f as jt,g as me,i as Ct,J as vt,h as kt}from"./useManageMangaLibraryState-BsrDM68v.js";import{d as wt}from"./Delete-DtNRxYmz.js";import{d as Mt}from"./Download-yfqKuc1p.js";import{d as It}from"./Sync-XLURGeJh.js";import{M as _,a as $t}from"./Mangas-D2HSZsaA.js";import{C as V}from"./CheckboxInput-5tAgWhU1.js";import{F as _t}from"./ListPreference-Bk-axmhK.js";import{S as ve}from"./SpinnerImage-Di1Vm1fZ.js";import{C as Dt}from"./Checkbox-t9Uk7KzA.js";import{T as te}from"./TypographyMaxLines-BeeyZxDi.js";import{L as Gt}from"./Link-Wts2QMdV.js";import{C as ke}from"./Card-B-9pq73x.js";import{C as we}from"./CardActionArea-CWB75ZuS.js";import{C as Tt}from"./CardContent-DC6XoZ_c.js";import{A as St}from"./Avatar-C1SgAJIR.js";import{d as Rt}from"./PlayArrow-FFVJeMYj.js";import{D as Et}from"./StyledFab-CEY0VxfO.js";const Pt=(e,t)=>e.filter(s=>t.includes(s)),X=(e,t,s)=>{const r=e.keys[0];Array.isArray(t)?t.forEach((a,o)=>{s((i,p)=>{o<=e.keys.length-1&&(o===0?Object.assign(i,p):i[e.up(e.keys[o])]=p)},a)}):t&&typeof t=="object"?(Object.keys(t).length>e.keys.length?e.keys:Pt(e.keys,Object.keys(t))).forEach(o=>{if(e.keys.includes(o)){const i=t[o];i!==void 0&&s((p,l)=>{r===o?Object.assign(p,l):p[e.up(o)]=l},i)}}):(typeof t=="number"||typeof t=="string")&&s((a,o)=>{Object.assign(a,o)},t)};function E(e){return e?"Level".concat(e):""}function se(e){return e.unstable_level>0&&e.container}function Lt(e){return function(s){return"var(--Grid-".concat(s,"Spacing").concat(E(e.unstable_level),")")}}function Z(e){return function(s){return e.unstable_level===0?"var(--Grid-".concat(s,"Spacing)"):"var(--Grid-".concat(s,"Spacing").concat(E(e.unstable_level-1),")")}}function K(e){return e.unstable_level===0?"var(--Grid-columns)":"var(--Grid-columns".concat(E(e.unstable_level-1),")")}const Bt=({theme:e,ownerState:t})=>{const s=Z(t),r={};return X(e.breakpoints,t.size,(a,o)=>{let i={};o==="grow"&&(i={flexBasis:0,flexGrow:1,maxWidth:"100%"}),o==="auto"&&(i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),typeof o=="number"&&(i={flexGrow:0,flexBasis:"auto",width:"calc(100% * ".concat(o," / ").concat(K(t)," - (").concat(K(t)," - ").concat(o,") * (").concat(s("column")," / ").concat(K(t),"))")}),a(r,i)}),r},Ft=({theme:e,ownerState:t})=>{const s=Z(t),r={};return X(e.breakpoints,t.offset,(a,o)=>{let i={};o==="auto"&&(i={marginLeft:"auto"}),typeof o=="number"&&(i={marginLeft:o===0?"0px":"calc(100% * ".concat(o," / ").concat(K(t)," + ").concat(s("column")," * ").concat(o," / ").concat(K(t),")")}),a(r,i)}),r},Ot=({theme:e,ownerState:t})=>{if(!t.container)return{};const s=se(t)?{["--Grid-columns".concat(E(t.unstable_level))]:K(t)}:{"--Grid-columns":12};return X(e.breakpoints,t.columns,(r,a)=>{r(s,{["--Grid-columns".concat(E(t.unstable_level))]:a})}),s},Nt=({theme:e,ownerState:t})=>{if(!t.container)return{};const s=Z(t),r=se(t)?{["--Grid-rowSpacing".concat(E(t.unstable_level))]:s("row")}:{};return X(e.breakpoints,t.rowSpacing,(a,o)=>{var i;a(r,{["--Grid-rowSpacing".concat(E(t.unstable_level))]:typeof o=="string"?o:(i=e.spacing)==null?void 0:i.call(e,o)})}),r},At=({theme:e,ownerState:t})=>{if(!t.container)return{};const s=Z(t),r=se(t)?{["--Grid-columnSpacing".concat(E(t.unstable_level))]:s("column")}:{};return X(e.breakpoints,t.columnSpacing,(a,o)=>{var i;a(r,{["--Grid-columnSpacing".concat(E(t.unstable_level))]:typeof o=="string"?o:(i=e.spacing)==null?void 0:i.call(e,o)})}),r},zt=({theme:e,ownerState:t})=>{if(!t.container)return{};const s={};return X(e.breakpoints,t.direction,(r,a)=>{r(s,{flexDirection:a})}),s},Wt=({ownerState:e})=>{const t=Lt(e);return{minWidth:0,boxSizing:"border-box",...e.container&&{display:"flex",flexWrap:"wrap",...e.wrap&&e.wrap!=="wrap"&&{flexWrap:e.wrap},gap:"".concat(t("row")," ").concat(t("column"))}}},Ht=e=>{const t=[];return Object.entries(e).forEach(([s,r])=>{r!==!1&&r!==void 0&&t.push("grid-".concat(s,"-").concat(String(r)))}),t},Kt=(e,t="xs")=>{function s(r){return r===void 0?!1:typeof r=="string"&&!Number.isNaN(Number(r))||typeof r=="number"&&r>0}if(s(e))return["spacing-".concat(t,"-").concat(String(e))];if(typeof e=="object"&&!Array.isArray(e)){const r=[];return Object.entries(e).forEach(([a,o])=>{s(o)&&r.push("spacing-".concat(a,"-").concat(String(o)))}),r}return[]},Ut=e=>e===void 0?[]:typeof e=="object"?Object.entries(e).map(([t,s])=>"direction-".concat(t,"-").concat(s)):["direction-xs-".concat(String(e))],Xt=_e(),Yt=De("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>t.root});function qt(e){return Ee({props:e,name:"MuiGrid",defaultTheme:Xt})}function Jt(e={}){const{createStyledComponent:t=Yt,useThemeProps:s=qt,componentName:r="MuiGrid"}=e,a=(l,c)=>{const{container:u,direction:g,spacing:m,wrap:d,size:x}=l,f={root:["root",u&&"container",d!=="wrap"&&"wrap-xs-".concat(String(d)),...Ut(g),...Ht(x),...u?Kt(m,c.breakpoints.keys[0]):[]]};return Pe(f,b=>Le(r,b),{})};function o(l,c,u=()=>!0){const g={};return l===null||(Array.isArray(l)?l.forEach((m,d)=>{m!==null&&u(m)&&c.keys[d]&&(g[c.keys[d]]=m)}):typeof l=="object"?Object.keys(l).forEach(m=>{const d=l[m];d!=null&&u(d)&&(g[m]=d)}):g[c.keys[0]]=l),g}const i=t(Ot,At,Nt,Bt,zt,Wt,Ft),p=h.forwardRef(function(c,u){var re,ie,ae,ce,le,ue;const g=Ge(),m=s(c),d=Te(m),{className:x,children:f,columns:b=12,container:j=!1,component:v="div",direction:M="row",wrap:D="wrap",size:G={},offset:S={},spacing:T=0,rowSpacing:C=T,columnSpacing:k=T,unstable_level:w=0,...R}=d,I=o(G,g.breakpoints,O=>O!==!1),$=o(S,g.breakpoints),y=(re=c.columns)!=null?re:w?void 0:b,B=(ie=c.spacing)!=null?ie:w?void 0:T,F=(ce=(ae=c.rowSpacing)!=null?ae:c.spacing)!=null?ce:w?void 0:C,W=(ue=(le=c.columnSpacing)!=null?le:c.spacing)!=null?ue:w?void 0:k,Y={...d,level:w,columns:y,container:j,direction:M,wrap:D,spacing:B,rowSpacing:F,columnSpacing:W,size:I,offset:$},q=a(Y,g);return n.jsx(i,{ref:u,as:v,ownerState:Y,className:Se(q.root,x),...R,children:h.Children.map(f,O=>{var de,fe;return h.isValidElement(O)&&Re(O,["Grid"])?h.cloneElement(O,{unstable_level:(fe=(de=O.props)==null?void 0:de.unstable_level)!=null?fe:w+1}):O})})});return p.muiName="Grid",p}const oe=Jt({createStyledComponent:J("div",{name:"MuiGrid2",slot:"Root",overridesResolver:(e,t)=>t.root}),componentName:"MuiGrid2",useThemeProps:e=>Be({props:e,name:"MuiGrid2"})}),Qt=h.forwardRef(({MenuItemProps:e,className:t,label:s,LeftIcon:r,renderLabel:a,RightIcon:o,...i},p)=>n.jsxs(Fe,{...e,ref:p,className:t,...i,children:[r&&n.jsx(ge,{children:n.jsx(r,{fontSize:"small"})}),n.jsx(Oe,{children:s}),o&&n.jsx(ge,{style:{minWidth:0},children:n.jsx(o,{fontSize:"small"})})]})),Me=h.forwardRef((e,t)=>{const{parentMenuOpen:s,label:r,renderLabel:a,RightIcon:o=ee(Ae,ze),LeftIcon:i,children:p,className:l,tabIndex:c,ContainerProps:u={},MenuProps:g,...m}=e,d=ne.useIsTouchDevice(),{ref:x,...f}=u,b=h.useRef(null);h.useImperativeHandle(t,()=>b.current);const j=h.useRef(null);h.useImperativeHandle(x,()=>j.current);const v=h.useRef(null),[M,D]=h.useState(!1),G=y=>{if(M!==y){if(e.disabled){D(!1);return}D(y)}},S=y=>{d||(G(!0),f.onMouseEnter&&f.onMouseEnter(y))},T=y=>{G(!1),f.onMouseLeave&&f.onMouseLeave(y)},C=()=>{var B,F;const y=(F=(B=j.current)==null?void 0:B.ownerDocument.activeElement)!=null?F:null;if(v.current==null)return!1;for(const W of v.current.children)if(W===y)return!0;return!1},k=y=>{d||(y.target===j.current&&G(!0),f.onFocus&&f.onFocus(y))},w=y=>{G(!M),f.onClick&&f.onClick(y)},R=y=>{var F,W,Y;if(y.key==="Escape")return;C()&&y.stopPropagation();const B=(F=j.current)==null?void 0:F.ownerDocument.activeElement;if(y.key==="ArrowLeft"&&C()&&((W=j.current)==null||W.focus()),y.key==="ArrowRight"&&y.target===j.current&&y.target===B){const q=(Y=v.current)==null?void 0:Y.children[0];q==null||q.focus()}},I=M&&s;let $;return e.disabled||($=c!==void 0?c:-1),n.jsxs(z,{...f,ref:j,onFocus:k,onClick:w,tabIndex:$,onMouseEnter:S,onMouseLeave:T,onKeyDown:R,children:[n.jsx(Qt,{MenuItemProps:m,className:l,ref:b,LeftIcon:i,RightIcon:o,label:r,renderLabel:a}),n.jsx(Ne,{style:{pointerEvents:"none"},anchorEl:b.current,anchorOrigin:{horizontal:ee("right","left"),vertical:"top"},transformOrigin:{horizontal:ee("left","right"),vertical:"top"},open:I,autoFocus:!1,disableAutoFocus:!0,disableEnforceFocus:!0,onClose:()=>{G(!1)},...g,children:n.jsx(z,{ref:v,style:{pointerEvents:"auto"},children:p})})]})});Me.displayName="NestedMenuItem";const Vt=["remove_from_library"],Zt=({manga:e,handleSelection:t,selectedMangas:s,onClose:r,setHideMenu:a})=>{const{t:o}=U(),[i,p]=h.useState(!1),l=!!e,c=s!=null?s:[],u=bt(l,$t),g=yt(l),m=jt(l),d=!!e&&e.downloadCount===e.chapters.totalCount,x=!!(e!=null&&e.downloadCount),f=!!(e!=null&&e.unreadCount),b=!!e&&e.unreadCount!==e.chapters.totalCount,{openCategorySelect:j,CategorySelectComponent:v}=lt({mangaId:e==null?void 0:e.id,mangaIds:s?_.getIds(c):void 0,onClose:()=>r(!0),addToLibrary:!1}),M=()=>{t==null||t(e.id,!0),r(!0)},D=(k,w)=>{_.performAction(k,e?[e.id]:_.getIds(w),{wasManuallyMarkedAsRead:!0}).catch(be()),r(!Vt.includes(k))},{downloadableMangas:G,downloadedMangas:S,unreadMangas:T,readMangas:C}=h.useMemo(()=>({downloadableMangas:[..._.getNotDownloaded(c),..._.getPartiallyDownloaded(c)],downloadedMangas:[..._.getPartiallyDownloaded(c),..._.getFullyDownloaded(c)],unreadMangas:[..._.getUnread(c),..._.getPartiallyRead(c)],readMangas:[..._.getPartiallyRead(c),..._.getFullyRead(c)]}),[c]);return n.jsxs(n.Fragment,{children:[!!t&&l&&n.jsx(P,{onClick:M,Icon:ut,title:o("chapter.action.label.select")}),g(!d)&&n.jsx(Me,{disabled:m(!G.length),LeftIcon:Mt,label:u("download",G.length),parentMenuOpen:!0,children:n.jsx(dt,{mangaIds:l?[e.id]:_.getIds(c),closeMenu:()=>r(!0)})}),g(x)&&n.jsx(P,{Icon:wt,disabled:m(!S.length),onClick:()=>D("delete",S),title:u("delete",S.length)}),g(f)&&n.jsx(P,{Icon:ft,disabled:m(!T.length),onClick:()=>D("mark_as_read",T),title:u("mark_as_read",T.length)}),g(b)&&n.jsx(P,{Icon:gt,disabled:m(!C.length),onClick:()=>D("mark_as_unread",C),title:u("mark_as_unread",C.length)}),l&&n.jsx(Q,{to:"/migrate/source/".concat(e==null?void 0:e.sourceId,"/manga/").concat(e==null?void 0:e.id,"/search?query=").concat(e==null?void 0:e.title),state:{mangaTitle:e==null?void 0:e.title},style:{textDecoration:"none",color:"inherit"},children:n.jsx(P,{Icon:pt,title:u("migrate",c.length)})}),l&&n.jsx(P,{onClick:()=>{p(!0),a(!0)},Icon:It,title:u("track",c.length)}),n.jsx(P,{onClick:()=>{j(!0),a(!0)},Icon:mt,title:u("change_categories",c.length)}),n.jsx(P,{onClick:()=>D("remove_from_library",c),Icon:ht,title:u("remove_from_library",c.length)}),v,i&&n.jsx(xe,{open:!0,maxWidth:"md",fullWidth:!0,scroll:"paper",onClose:()=>{p(!1),r(!0)},children:n.jsx(xt,{manga:e})})]})},en=({mangaIdToMigrateTo:e,onClose:t})=>{const{t:s}=U(),r=We(),{mangaId:a}=He(),o=Number(a),{settings:{migrateChapters:i,migrateCategories:p,migrateTracking:l,deleteChapters:c}}=Ke(),[u,g]=h.useState(!1),m=qe(be()),d=async x=>{if(o==null)throw new Error('MigrateDialog::migrate: unexpected mangaId "'.concat(o,'"'));Je(s("migrate.label.info"),"info"),g(!0);try{await _.migrate(o,e,{mode:x,migrateChapters:i,migrateCategories:p,migrateTracking:l,deleteChapters:c}),r("/manga/".concat(e),{replace:!0})}catch(f){g(!1)}};return n.jsxs(xe,{open:!0,fullWidth:!0,onClose:t,children:[n.jsx(Ue,{children:s("migrate.dialog.title")}),n.jsx(Xe,{dividers:!0,children:n.jsxs(_t,{children:[n.jsx(V,{disabled:u,label:s("chapter.title_one"),checked:i,onChange:(x,f)=>m("migrateChapters",f)}),n.jsx(V,{disabled:u,label:s("category.title.category_one"),checked:p,onChange:(x,f)=>m("migrateCategories",f)}),n.jsx(V,{disabled:u,label:s("tracking.title"),checked:l,onChange:(x,f)=>m("migrateTracking",f)}),n.jsx(V,{disabled:u,label:s("migrate.dialog.label.delete_downloaded"),checked:c,onChange:(x,f)=>m("deleteChapters",f)})]})}),n.jsx(Ye,{children:n.jsxs(H,{direction:"row",sx:{justifyContent:"space-between",width:"100%"},children:[n.jsx(N,{disabled:u,component:Q,to:"/manga/".concat(e),children:s("migrate.dialog.action.button.show_entry")}),n.jsxs(H,{direction:"row",children:[n.jsx(N,{disabled:u,onClick:t,children:s("global.button.cancel")}),n.jsx(N,{disabled:u,onClick:()=>d("copy"),children:s("global.button.copy")}),n.jsx(N,{disabled:u,onClick:()=>d("migrate"),children:s("global.button.migrate")})]})]})})]})},Ie=h.forwardRef(({id:e,selected:t,handleSelection:s,asCheckbox:r=!1,popupState:a},o)=>{const{t:i}=U(),p=ne.useIsTouchDevice(),l=h.useMemo(()=>Qe(a),[a]),c=d=>{d.stopPropagation(),d.preventDefault()},u=(d,x)=>{c(d),s==null||s(e,x)},g=d=>{p||(c(d),a.open(d),l.onClick(d))};return s?t!==null?r?n.jsx(A,{title:i(t?"global.button.deselect":"global.button.select"),children:n.jsx(Dt,{checked:t,onMouseDown:c,onChange:u})}):null:r?n.jsx(A,{title:i("global.button.options"),children:n.jsx(Ve,{ref:o,...l,onClick:g,onTouchStart:g,"aria-label":"more",size:"large",onMouseDown:c,children:n.jsx(me,{})})}):n.jsx(A,{title:i("global.button.options"),children:n.jsx(N,{ref:o,...l,onClick:g,onTouchStart:g,className:"manga-option-button",size:"small",variant:"contained",sx:{minWidth:"unset",paddingX:"0",paddingY:"2.5px",visibility:a.isOpen?"visible":"hidden",pointerEvents:"none","@media not (pointer: fine)":{visibility:"hidden",pointerEvents:void 0}},onMouseDown:d=>d.stopPropagation(),children:n.jsx(me,{})})}):null}),tn=J("div")({position:"absolute",bottom:0,width:"100%",height:"30%",background:"linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)"}),nn=J("div")({position:"absolute",bottom:0,width:"100%",height:"20%",background:"linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)"}),sn=({manga:e,longPressBind:t,popupState:s,handleClick:r,mangaLinkTo:a,selected:o,inLibraryIndicator:i,isInLibrary:p,gridLayout:l,handleSelection:c,continueReadingButton:u,mangaBadges:g,mode:m})=>{const d=h.useRef(null),{id:x,title:f}=e;return n.jsx(Gt,{component:Q,...t(()=>s.open(d.current)),onClick:r,to:a,state:{mangaTitle:f},sx:{textDecoration:"none",touchCallout:"none"},children:n.jsxs(z,{sx:{display:"flex",flexDirection:"column",m:.25,outline:o?"4px solid":void 0,borderRadius:o?"1px":void 0,outlineColor:b=>b.palette.primary.main,backgroundColor:b=>o?b.palette.primary.main:void 0,"@media (hover: hover) and (pointer: fine)":{"&:hover .manga-option-button":{visibility:"visible",pointerEvents:"all"},"&:hover .source-manga-library-state-button":{display:"inline-flex"},"&:hover .source-manga-library-state-indicator":{display:m==="source"?"none":"flex"}}},children:[n.jsx(ke,{sx:{aspectRatio:"225/350",display:"flex"},children:n.jsxs(we,{sx:{position:"relative",height:"100%"},children:[n.jsx(ve,{alt:f,src:_.getThumbnailUrl(e),imgStyle:i&&p?{height:"100%",width:"100%",objectFit:"cover",filter:"brightness(0.4)"}:{height:"100%",width:"100%",objectFit:"cover"},spinnerStyle:{display:"grid",placeItems:"center"}}),n.jsxs(H,{direction:"row",sx:{alignItems:"start",justifyContent:"space-between",position:"absolute",top:b=>b.spacing(1),left:b=>b.spacing(1),right:b=>b.spacing(1)},children:[g,n.jsx(Ie,{ref:d,popupState:s,id:x,selected:o,handleSelection:c})]}),n.jsxs(n.Fragment,{children:[l!==L.Comfortable&&n.jsxs(n.Fragment,{children:[n.jsx(tn,{}),n.jsx(nn,{})]}),n.jsxs(H,{direction:"row",sx:{justifyContent:l!==L.Comfortable?"space-between":"end",alignItems:"end",position:"absolute",bottom:0,width:"100%",p:1,gap:1},children:[l!==L.Comfortable&&n.jsx(A,{title:f,placement:"top",children:n.jsx(te,{component:"h3",sx:{color:"white",textShadow:"0px 0px 3px #000000"},children:f})}),u]})]})]})}),l===L.Comfortable&&n.jsx(H,{sx:{pb:1},children:n.jsx(A,{title:f,placement:"top",children:n.jsx(te,{component:"h3",sx:{color:b=>o?b.palette.primary.contrastText:"text.primary",height:"3rem",pt:.5},children:f})})})]})})},on=({manga:e,longPressBind:t,popupState:s,handleClick:r,mangaLinkTo:a,selected:o,inLibraryIndicator:i,isInLibrary:p,handleSelection:l,continueReadingButton:c,mangaBadges:u,mode:g})=>{const m=h.useRef(null),{id:d,title:x}=e;return n.jsx(ke,{children:n.jsx(we,{component:Q,to:a,state:{mangaTitle:x},onClick:r,...t(()=>s.open(m.current)),sx:{touchCallout:"none","@media (hover: hover) and (pointer: fine)":{"&:hover .manga-option-button":{visibility:"visible",pointerEvents:"all"},"&:hover .source-manga-library-state-button":{display:"inline-flex"},"&:hover .source-manga-library-state-indicator":{display:g==="source"?"none":"inline-flex"}}},children:n.jsxs(Tt,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:1.5,position:"relative"},children:[n.jsx(St,{variant:"rounded",sx:{width:56,height:56,flex:"0 0 auto",marginRight:1},children:n.jsx(ve,{spinnerStyle:{small:!0},imgStyle:{objectFit:"cover",width:"100%",height:"100%",imageRendering:"pixelated",filter:i&&p?"brightness(0.4)":void 0},alt:e.title,src:_.getThumbnailUrl(e)})}),n.jsx(z,{sx:{display:"flex",flexDirection:"row",flexGrow:1,width:"min-content"},children:n.jsx(A,{title:x,placement:"top",children:n.jsx(te,{variant:"h6",component:"h3",children:x})})}),n.jsxs(H,{direction:"row",sx:{alignItems:"center",gap:.5},children:[u,c,n.jsx(Ie,{ref:m,popupState:s,id:d,selected:o,handleSelection:l,asCheckbox:!0})]})]})})})},rn=({showContinueReadingButton:e,nextChapterIndexToRead:t,mangaLinkTo:s})=>{const{t:r}=U(),a=t===1;return!e||t===void 0?null:n.jsx(A,{title:r(a?"global.button.start":"global.button.resume"),children:n.jsx(N,{variant:"contained",size:"small",sx:{minWidth:"unset",py:.5,px:.75},component:Q,to:"".concat(s,"chapter/").concat(t),onClick:o=>o.stopPropagation(),onMouseDown:o=>o.stopPropagation(),children:n.jsx(Rt,{})})})},an=J("div")(({theme:e})=>({display:"flex",height:"fit-content",borderRadius:e.shape.borderRadius,overflow:"hidden"})),he=J(ye)(({theme:e})=>({color:e.palette.primary.contrastText,paddingInline:e.spacing(.3)})),cn=({inLibraryIndicator:e,updateLibraryState:t,isInLibrary:s,unread:r,downloadCount:a,mode:o})=>{const{t:i}=U(),p=ne.useIsTouchDevice(),{options:{showUnreadBadge:l,showDownloadBadge:c}}=je();return n.jsxs(an,{children:[!p&&e&&o==="source"&&n.jsx(N,{className:"source-manga-library-state-button",component:"div",variant:"contained",size:"small",onMouseDown:u=>u.stopPropagation(),onClick:u=>{u.preventDefault(),u.stopPropagation(),t()},sx:{display:"none"},color:s?"error":"primary",children:i(s?"manga.action.library.remove.label.action":"manga.button.add_to_library")}),e&&s&&n.jsx(ye,{className:"source-manga-library-state-indicator",sx:{backgroundColor:"primary.dark",color:"primary.contrastText",p:.3},children:i("manga.button.in_library")}),(l&&o==="default"||o==="duplicate")&&(r!=null?r:0)>0&&n.jsx(he,{sx:{backgroundColor:"primary.main",color:"primary.contrastText"},children:r}),(c&&o==="default"||o==="duplicate")&&(a!=null?a:0)>0&&n.jsx(he,{sx:{backgroundColor:"secondary.main",color:"secondary.contrastText"},children:a})]})},ln=(e,t,s,r)=>{switch(e){case"default":case"source":case"duplicate":return"/manga/".concat(t,"/");case"migrate.search":return"/migrate/source/".concat(s,"/manga/").concat(t,"/search?query=").concat(r);case"migrate.select":return"";default:throw new Error('getMangaLinkTo: unexpected MangaCardMode "'.concat(e,'"'))}},un=e=>{const{manga:t,gridLayout:s,inLibraryIndicator:r,selected:a,handleSelection:o,mode:i="default"}=e,{id:p,firstUnreadChapter:l,downloadCount:c,unreadCount:u}=t,{options:{showContinueReadingButton:g}}=je(),{CategorySelectComponent:m,updateLibraryState:d,isInLibrary:x}=Ct(t,i==="source"),f=ln(i,t.id,t.sourceId,t.title),b=l==null?void 0:l.sourceOrder,[j,v]=h.useState(!1),M=(C,k)=>{const w=i==="default",R=i==="source",I=i==="migrate.select",$=a!==null;if(I||$||(w||R)&&k){if(C.preventDefault(),R){d();return}if($){o==null||o(p,!a,{selectRange:C.shiftKey});return}if(w){k==null||k();return}I&&v(!0)}},D=vt((C,{context:k})=>{C.shiftKey=!0,M(C,k)}),G=h.useMemo(()=>s===L.List?on:sn,[s]),S=h.useMemo(()=>n.jsx(rn,{showContinueReadingButton:g&&i==="default",nextChapterIndexToRead:b,mangaLinkTo:f}),[g,b,f]),T=h.useMemo(()=>n.jsx(cn,{inLibraryIndicator:r,isInLibrary:x,unread:u,downloadCount:c,updateLibraryState:d,mode:i}),[r,x,u,c,d]);return n.jsxs(n.Fragment,{children:[j&&n.jsx(en,{mangaIdToMigrateTo:t.id,onClose:()=>v(!1)}),n.jsx(Ze,{variant:"popover",popupId:"manga-card-action-menu",children:C=>n.jsxs(n.Fragment,{children:[n.jsx(G,{...e,longPressBind:D,popupState:C,handleClick:M,mangaLinkTo:f,isInLibrary:x,inLibraryIndicator:r,continueReadingButton:S,mangaBadges:T}),!!o&&C.isOpen&&n.jsx(kt,{...et(C),children:(k,w)=>n.jsx(Zt,{manga:t,handleSelection:o,onClose:k,setHideMenu:w})}),m]})})]})},dn=tt.forwardRef(({children:e,...t},s)=>n.jsx(oe,{...t,ref:s,container:!0,spacing:1,children:e})),fn=(e,t,s,r=12)=>{const a=Math.ceil(e/t),o=s===L.List?r:r/a;return({children:i,...p})=>n.jsx(oe,{...p,size:o,children:i})},$e=(e,t,s,r=!1,a,o,i)=>n.jsx(un,{manga:e,gridLayout:t,inLibraryIndicator:s,selected:r?a==null?void 0:a.includes(e.id):null,handleSelection:o,mode:i},e.id),gn=h.forwardRef(({isLoading:e,mangas:t,inLibraryIndicator:s,GridItemContainer:r,gridLayout:a,isSelectModeActive:o,selectedMangaIds:i,handleSelection:p,mode:l},c)=>n.jsx(oe,{ref:c,container:!0,spacing:1,sx:{width:"100%",overflowX:"auto",display:"-webkit-inline-box",flexWrap:"nowrap"},children:e?n.jsx(Ce,{}):t.map(u=>n.jsx(r,{children:$e(u,a,s,o,i,p,l)},u.id))})),pn=e=>"MangaGrid-snapshot-location-".concat(e.key),mn=h.forwardRef(({isLoading:e,mangas:t,inLibraryIndicator:s,GridItemContainer:r,gridLayout:a,hasNextPage:o,loadMore:i,isSelectModeActive:p,selectedMangaIds:l,handleSelection:c,mode:u},g)=>{const m=nt(),d=pn(m),[x]=st(d,void 0),f=h.useRef(),b=j=>{const v=window.location.href;clearTimeout(f.current),f.current=setTimeout(()=>{v===window.location.href&&ot.session.setItem(d,j,!1)},250)};return h.useEffect(()=>clearTimeout(f.current),[m.key,f.current]),n.jsxs(n.Fragment,{children:[n.jsx(z,{ref:g,children:n.jsx(at,{useWindowScroll:!0,overscan:window.innerHeight*.25,totalCount:t.length,components:{List:dn,Item:r},restoreStateFrom:x,stateChanged:b,endReached:()=>i(),itemContent:j=>$e(t[j],a,s,p,l,c,u)})}),p&&a===L.List?n.jsx(z,{sx:{paddingBottom:Et}}):e?n.jsx(Ce,{}):o?n.jsx("div",{style:{height:"75px"}}):null]})}),Ln=({mangas:e,isLoading:t,message:s,messageExtra:r,hasNextPage:a,loadMore:o,gridLayout:i,horizontal:p,noFaces:l,inLibraryIndicator:c,isSelectModeActive:u,selectedMangaIds:g,handleSelection:m,mode:d,retry:x,gridWrapperProps:f})=>{var k,w;const{t:b}=U(),{navBarWidth:j}=rt(),v=h.useRef(null),M=h.useRef(null),[D,G]=h.useState((w=(k=M.current)==null?void 0:k.offsetWidth)!=null?w:Math.max(0,document.documentElement.offsetWidth-j)),[S]=it("ItemWidth",300),T=h.useMemo(()=>fn(D,S,i),[D,S,i]);return h.useLayoutEffect(()=>{let R;const I=$=>{R=setTimeout(()=>{if(document.body.style.overflow.includes("hidden")){I(250);return}document.body.style.overflowY=i===L.List?"auto":"scroll"},$)};return I(0),()=>{clearTimeout(R)}},[i]),h.useLayoutEffect(()=>()=>{document.body.style.overflowY="auto"},[]),pe(M,h.useCallback(()=>{G((()=>{var $;const I=($=M.current)==null?void 0:$.offsetWidth;return I||document.documentElement.offsetWidth-j})())},[j])),pe(v,h.useCallback((R,I)=>{const $=R[0].target.clientHeight,y=$>document.documentElement.clientHeight;if(!t&&$){if(y){I.disconnect();return}o(),I.disconnect()}},[v,o,t])),!t&&e.length===0?n.jsx(ct,{noFaces:l,message:s!=null?s:b("manga.error.label.no_mangas_found"),messageExtra:r,retry:x}):n.jsx(z,{...f,ref:M,sx:{...f==null?void 0:f.sx,overflow:"hidden"},children:p?n.jsx(gn,{ref:v,isLoading:t,mangas:e,inLibraryIndicator:c,GridItemContainer:T,gridLayout:i,isSelectModeActive:u,selectedMangaIds:g,handleSelection:m,mode:d}):n.jsx(mn,{ref:v,isLoading:t,mangas:e,inLibraryIndicator:c,GridItemContainer:T,hasNextPage:a,loadMore:o,gridLayout:i,isSelectModeActive:u,selectedMangaIds:g,handleSelection:m,mode:d})})};export{Ln as M,Zt as a,un as b,pn as g};
