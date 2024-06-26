import{c as h,X as Se,W as $e,s as q,_ as K,$ as De,q as _e,br as Re,a0 as Te,j as t,a1 as Ee,bs as Q,bt as ne,a2 as Le,r as de,i as pe,J as Pe,K as ae,O as Ge,M as oe,B as F,A as We,ab as ee,u as N,p as Be,L as X,D as fe,h as ge,e as Oe,Q as ze,o as Fe,ao as Ne,ap as Ae,aq as Ve,S as H,b as B,b6 as Ke,m as He,w as Ue,f as O,I as qe,G,n as he,T as te,t as Xe,x as Ye,R as Ze,g as me,ag as Je,aW as Qe,aX as et,d as tt,E as nt}from"./index-DfBuIO9L.js";import{C as xe,a as be,b as ot}from"./index-G7-_ctUm.js";import{l as rt,M as P,d as st,C as it,a as at,b as ct,m as lt,n as ut,j as dt,T as pt,c as ft,e as gt,f as ht,g as ce,i as mt,J as xt,h as bt}from"./useManageMangaLibraryState-DdPIApsS.js";import{d as vt}from"./Delete-BbgDr3ls.js";import{d as jt}from"./Sync-DPT0yh7A.js";import{M as I,a as Ct}from"./Mangas-B3OVvTz3.js";import{C as J}from"./CheckboxInput-B1TLArug.js";import{F as wt}from"./ListPreference-hcYggMjk.js";import{S as ve}from"./SpinnerImage-CaUvTm_b.js";import{C as yt}from"./Checkbox-DrsGYsRp.js";import{T as je,C as Mt}from"./TypographyMaxLines-oVEHFE6N.js";import{L as kt}from"./Link-B1yr3aoJ.js";import{A as It}from"./Avatar-Dk897tog.js";import{d as St}from"./PlayArrow-UlDove7k.js";import{D as $t}from"./StyledFab-DLBwrsRn.js";const Dt=h.createContext(),le=Dt;function _t(e){return Se("MuiGrid",e)}const Rt=[0,1,2,3,4,5,6,7,8,9,10],Tt=["column-reverse","column","row-reverse","row"],Et=["nowrap","wrap-reverse","wrap"],V=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],U=$e("MuiGrid",["root","container","item","zeroMinWidth",...Rt.map(e=>"spacing-xs-".concat(e)),...Tt.map(e=>"direction-xs-".concat(e)),...Et.map(e=>"wrap-xs-".concat(e)),...V.map(e=>"grid-xs-".concat(e)),...V.map(e=>"grid-sm-".concat(e)),...V.map(e=>"grid-md-".concat(e)),...V.map(e=>"grid-lg-".concat(e)),...V.map(e=>"grid-xl-".concat(e))]),Lt=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function z(e){const n=parseFloat(e);return"".concat(n).concat(String(e).replace(String(n),"")||"px")}function Pt({theme:e,ownerState:n}){let o;return e.breakpoints.keys.reduce((r,i)=>{let s={};if(n[i]&&(o=n[i]),!o)return r;if(o===!0)s={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(o==="auto")s={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const a=Q({values:n.columns,breakpoints:e.breakpoints.values}),d=typeof a=="object"?a[i]:a;if(d==null)return r;const u="".concat(Math.round(o/d*1e8)/1e6,"%");let l={};if(n.container&&n.item&&n.columnSpacing!==0){const c=e.spacing(n.columnSpacing);if(c!=="0px"){const g="calc(".concat(u," + ").concat(z(c),")");l={flexBasis:g,maxWidth:g}}}s=K({flexBasis:u,flexGrow:0,maxWidth:u},l)}return e.breakpoints.values[i]===0?Object.assign(r,s):r[e.breakpoints.up(i)]=s,r},{})}function Gt({theme:e,ownerState:n}){const o=Q({values:n.direction,breakpoints:e.breakpoints.values});return ne({theme:e},o,r=>{const i={flexDirection:r};return r.indexOf("column")===0&&(i["& > .".concat(U.item)]={maxWidth:"none"}),i})}function Ce({breakpoints:e,values:n}){let o="";Object.keys(n).forEach(i=>{o===""&&n[i]!==0&&(o=i)});const r=Object.keys(e).sort((i,s)=>e[i]-e[s]);return r.slice(0,r.indexOf(o))}function Wt({theme:e,ownerState:n}){const{container:o,rowSpacing:r}=n;let i={};if(o&&r!==0){const s=Q({values:r,breakpoints:e.breakpoints.values});let a;typeof s=="object"&&(a=Ce({breakpoints:e.breakpoints.values,values:s})),i=ne({theme:e},s,(d,u)=>{var l;const c=e.spacing(d);return c!=="0px"?{marginTop:"-".concat(z(c)),["& > .".concat(U.item)]:{paddingTop:z(c)}}:(l=a)!=null&&l.includes(u)?{}:{marginTop:0,["& > .".concat(U.item)]:{paddingTop:0}}})}return i}function Bt({theme:e,ownerState:n}){const{container:o,columnSpacing:r}=n;let i={};if(o&&r!==0){const s=Q({values:r,breakpoints:e.breakpoints.values});let a;typeof s=="object"&&(a=Ce({breakpoints:e.breakpoints.values,values:s})),i=ne({theme:e},s,(d,u)=>{var l;const c=e.spacing(d);return c!=="0px"?{width:"calc(100% + ".concat(z(c),")"),marginLeft:"-".concat(z(c)),["& > .".concat(U.item)]:{paddingLeft:z(c)}}:(l=a)!=null&&l.includes(u)?{}:{width:"100%",marginLeft:0,["& > .".concat(U.item)]:{paddingLeft:0}}})}return i}function Ot(e,n,o={}){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[o["spacing-xs-".concat(String(e))]];const r=[];return n.forEach(i=>{const s=e[i];Number(s)>0&&r.push(o["spacing-".concat(i,"-").concat(String(s))])}),r}const zt=q("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:o}=e,{container:r,direction:i,item:s,spacing:a,wrap:d,zeroMinWidth:u,breakpoints:l}=o;let c=[];r&&(c=Ot(a,l,n));const g=[];return l.forEach(m=>{const p=o[m];p&&g.push(n["grid-".concat(m,"-").concat(String(p))])}),[n.root,r&&n.container,s&&n.item,u&&n.zeroMinWidth,...c,i!=="row"&&n["direction-xs-".concat(String(i))],d!=="wrap"&&n["wrap-xs-".concat(String(d))],...g]}})(({ownerState:e})=>K({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},e.wrap!=="wrap"&&{flexWrap:e.wrap}),Gt,Wt,Bt,Pt);function Ft(e,n){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return["spacing-xs-".concat(String(e))];const o=[];return n.forEach(r=>{const i=e[r];if(Number(i)>0){const s="spacing-".concat(r,"-").concat(String(i));o.push(s)}}),o}const Nt=e=>{const{classes:n,container:o,direction:r,item:i,spacing:s,wrap:a,zeroMinWidth:d,breakpoints:u}=e;let l=[];o&&(l=Ft(s,u));const c=[];u.forEach(m=>{const p=e[m];p&&c.push("grid-".concat(m,"-").concat(String(p)))});const g={root:["root",o&&"container",i&&"item",d&&"zeroMinWidth",...l,r!=="row"&&"direction-xs-".concat(String(r)),a!=="wrap"&&"wrap-xs-".concat(String(a)),...c]};return Le(g,_t,n)},At=h.forwardRef(function(n,o){const r=De({props:n,name:"MuiGrid"}),{breakpoints:i}=_e(),s=Re(r),{className:a,columns:d,columnSpacing:u,component:l="div",container:c=!1,direction:g="row",item:m=!1,rowSpacing:p,spacing:b=0,wrap:f="wrap",zeroMinWidth:j=!1}=s,v=Te(s,Lt),k=p||b,S=u||b,$=h.useContext(le),M=c?d||12:$,D={},R=K({},v);i.keys.forEach(y=>{v[y]!=null&&(D[y]=v[y],delete R[y])});const C=K({},s,{columns:M,container:c,direction:g,item:m,rowSpacing:k,columnSpacing:S,wrap:f,zeroMinWidth:j,spacing:b},D,{breakpoints:i.keys}),w=Nt(C);return t.jsx(le.Provider,{value:M,children:t.jsx(zt,K({ownerState:C,className:Ee(w.root,a),as:l,ref:o},R))})}),re=At;var se={},Vt=pe;Object.defineProperty(se,"__esModule",{value:!0});var we=se.default=void 0,Kt=Vt(de()),Ht=t;we=se.default=(0,Kt.default)((0,Ht.jsx)("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"ChevronRight");var ie={},Ut=pe;Object.defineProperty(ie,"__esModule",{value:!0});var ye=ie.default=void 0,qt=Ut(de()),Xt=t;ye=ie.default=(0,qt.default)((0,Xt.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft");const Yt=h.forwardRef(({MenuItemProps:e,className:n,label:o,LeftIcon:r,renderLabel:i,RightIcon:s,...a},d)=>t.jsxs(Pe,{...e,ref:d,className:n,...a,children:[r&&t.jsx(ae,{children:t.jsx(r,{fontSize:"small"})}),t.jsx(Ge,{children:o}),s&&t.jsx(ae,{style:{minWidth:0},children:t.jsx(s,{fontSize:"small"})})]})),Me=h.forwardRef((e,n)=>{const{parentMenuOpen:o,label:r,renderLabel:i,RightIcon:s=ee(we,ye),LeftIcon:a,children:d,className:u,tabIndex:l,ContainerProps:c={},MenuProps:g,...m}=e,p=oe.useIsTouchDevice(),{ref:b,...f}=c,j=h.useRef(null);h.useImperativeHandle(n,()=>j.current);const v=h.useRef(null);h.useImperativeHandle(b,()=>v.current);const k=h.useRef(null),[S,$]=h.useState(!1),M=x=>{if(S!==x){if(e.disabled){$(!1);return}$(x)}},D=x=>{p||(M(!0),f.onMouseEnter&&f.onMouseEnter(x))},R=x=>{M(!1),f.onMouseLeave&&f.onMouseLeave(x)},C=()=>{var T,L;const x=(L=(T=v.current)==null?void 0:T.ownerDocument.activeElement)!=null?L:null;if(k.current==null)return!1;for(const W of k.current.children)if(W===x)return!0;return!1},w=x=>{p||(x.target===v.current&&M(!0),f.onFocus&&f.onFocus(x))},y=x=>{M(!S),f.onClick&&f.onClick(x)},E=x=>{var L,W,A;if(x.key==="Escape")return;C()&&x.stopPropagation();const T=(L=v.current)==null?void 0:L.ownerDocument.activeElement;if(x.key==="ArrowLeft"&&C()&&((W=v.current)==null||W.focus()),x.key==="ArrowRight"&&x.target===v.current&&x.target===T){const Z=(A=k.current)==null?void 0:A.children[0];Z==null||Z.focus()}},Y=S&&o;let _;return e.disabled||(_=l!==void 0?l:-1),t.jsxs(F,{...f,ref:v,onFocus:w,onClick:y,tabIndex:_,onMouseEnter:D,onMouseLeave:R,onKeyDown:E,children:[t.jsx(Yt,{MenuItemProps:m,className:u,ref:j,LeftIcon:a,RightIcon:s,label:r,renderLabel:i}),t.jsx(We,{style:{pointerEvents:"none"},anchorEl:j.current,anchorOrigin:{horizontal:ee("right","left"),vertical:"top"},transformOrigin:{horizontal:ee("left","right"),vertical:"top"},open:Y,autoFocus:!1,disableAutoFocus:!0,disableEnforceFocus:!0,onClose:()=>{M(!1)},...g,children:t.jsx(F,{ref:k,style:{pointerEvents:"auto"},children:d})})]})});Me.displayName="NestedMenuItem";const Zt=["remove_from_library"],Jt=({manga:e,handleSelection:n,selectedMangas:o,onClose:r,setHideMenu:i})=>{var w;const{t:s}=N(),[a,d]=h.useState(!1),u=!!e,l=o!=null?o:[],c=ft(u,Ct),g=gt(u),m=ht(u),p=!!e&&e.downloadCount===e.chapters.totalCount,b=!!(e!=null&&e.downloadCount),f=!!(e!=null&&e.unreadCount),j=!!e&&e.unreadCount!==e.chapters.totalCount,{openCategorySelect:v,CategorySelectComponent:k}=rt({mangaId:e==null?void 0:e.id,mangaIds:o?I.getIds(l):void 0,onClose:()=>r(!0),addToLibrary:!1}),S=()=>{n==null||n(e.id,!0),r(!0)},$=(y,E)=>{I.performAction(y,e?[e.id]:I.getIds(E),{wasManuallyMarkedAsRead:!0}).catch(ge()),r(!Zt.includes(y))},{downloadableMangas:M,downloadedMangas:D,unreadMangas:R,readMangas:C}=h.useMemo(()=>({downloadableMangas:[...I.getNotDownloaded(l),...I.getPartiallyDownloaded(l)],downloadedMangas:[...I.getPartiallyDownloaded(l),...I.getFullyDownloaded(l)],unreadMangas:[...I.getUnread(l),...I.getPartiallyRead(l)],readMangas:[...I.getPartiallyRead(l),...I.getFullyRead(l)]}),[l]);return t.jsxs(t.Fragment,{children:[!!n&&u&&t.jsx(P,{onClick:S,Icon:st,title:s("chapter.action.label.select")}),g(!p)&&t.jsx(Me,{disabled:m(!M.length),LeftIcon:Be,label:c("download",M.length),parentMenuOpen:!0,children:t.jsx(it,{mangaIds:u?[e.id]:I.getIds(l),closeMenu:()=>r(!0)})}),g(b)&&t.jsx(P,{Icon:vt,disabled:m(!D.length),onClick:()=>$("delete",D),title:c("delete",D.length)}),g(f)&&t.jsx(P,{Icon:at,disabled:m(!R.length),onClick:()=>$("mark_as_read",R),title:c("mark_as_read",R.length)}),g(j)&&t.jsx(P,{Icon:ct,disabled:m(!C.length),onClick:()=>$("mark_as_unread",C),title:c("mark_as_unread",C.length)}),u&&t.jsx(X,{to:"/migrate/source/".concat((w=e==null?void 0:e.source)==null?void 0:w.id,"/manga/").concat(e==null?void 0:e.id,"/search?query=").concat(e==null?void 0:e.title),state:{mangaTitle:e==null?void 0:e.title},style:{textDecoration:"none",color:"inherit"},children:t.jsx(P,{Icon:lt,title:c("migrate",l.length)})}),u&&t.jsx(P,{onClick:()=>{d(!0),i(!0)},Icon:jt,title:c("track",l.length)}),t.jsx(P,{onClick:()=>{v(!0),i(!0)},Icon:ut,title:c("change_categories",l.length)}),t.jsx(P,{onClick:()=>$("remove_from_library",l),Icon:dt,title:c("remove_from_library",l.length)}),k,a&&t.jsx(fe,{open:!0,maxWidth:"md",fullWidth:!0,scroll:"paper",onClose:()=>{d(!1),r(!0)},children:t.jsx(pt,{manga:e})})]})},Qt=({mangaIdToMigrateTo:e,onClose:n})=>{const{t:o}=N(),r=Oe(),{mangaId:i}=ze(),s=Number(i),{settings:{migrateChapters:a,migrateCategories:d,migrateTracking:u,deleteChapters:l}}=Fe(),[c,g]=h.useState(!1),m=Ke(ge()),p=async b=>{if(s==null)throw new Error('MigrateDialog::migrate: unexpected mangaId "'.concat(s,'"'));He(o("migrate.label.info"),"info"),g(!0);try{await I.migrate(s,e,{mode:b,migrateChapters:a,migrateCategories:d,migrateTracking:u,deleteChapters:l}),r("/manga/".concat(e),{replace:!0})}catch(f){g(!1)}};return t.jsxs(fe,{open:!0,fullWidth:!0,onClose:n,children:[t.jsx(Ne,{children:o("migrate.dialog.title")}),t.jsx(Ae,{dividers:!0,children:t.jsxs(wt,{children:[t.jsx(J,{disabled:c,label:o("chapter.title"),checked:a,onChange:(b,f)=>m("migrateChapters",f)}),t.jsx(J,{disabled:c,label:o("category.title.category_one"),checked:d,onChange:(b,f)=>m("migrateCategories",f)}),t.jsx(J,{disabled:c,label:o("tracking.title"),checked:u,onChange:(b,f)=>m("migrateTracking",f)}),t.jsx(J,{disabled:c,label:o("migrate.dialog.label.delete_downloaded"),checked:l,onChange:(b,f)=>m("deleteChapters",f)})]})}),t.jsx(Ve,{children:t.jsxs(H,{sx:{width:"100%"},direction:"row",justifyContent:"space-between",children:[t.jsx(B,{disabled:c,component:X,to:"/manga/".concat(e),children:o("migrate.dialog.action.button.show_entry")}),t.jsxs(H,{direction:"row",children:[t.jsx(B,{disabled:c,onClick:n,children:o("global.button.cancel")}),t.jsx(B,{disabled:c,onClick:()=>p("copy"),children:o("global.button.copy")}),t.jsx(B,{disabled:c,onClick:()=>p("migrate"),children:o("global.button.migrate")})]})]})})]})},ke=h.forwardRef(({id:e,selected:n,handleSelection:o,asCheckbox:r=!1,popupState:i},s)=>{const{t:a}=N(),d=oe.useIsTouchDevice(),u=h.useMemo(()=>Ue(i),[i]),l=p=>{p.stopPropagation(),p.preventDefault()},c=(p,b)=>{l(p),o==null||o(e,b)},g=p=>{d||(l(p),i.open(p),u.onClick(p))};return o?n!==null?r?t.jsx(O,{title:a(n?"global.button.deselect":"global.button.select"),children:t.jsx(yt,{checked:n,onMouseDown:l,onChange:c})}):null:r?t.jsx(O,{title:a("global.button.options"),children:t.jsx(qe,{ref:s,...u,onClick:g,onTouchStart:g,"aria-label":"more",size:"large",onMouseDown:l,children:t.jsx(ce,{})})}):t.jsx(O,{title:a("global.button.options"),children:t.jsx(B,{ref:s,...u,onClick:g,onTouchStart:g,className:"manga-option-button",size:"small",variant:"contained",sx:{minWidth:"unset",paddingX:"0",paddingY:"2.5px",visibility:i.isOpen?"visible":"hidden",pointerEvents:"none","@media not (pointer: fine)":{visibility:"hidden",pointerEvents:void 0}},onMouseDown:p=>p.stopPropagation(),children:t.jsx(ce,{})})}):null}),en=q("div")({position:"absolute",bottom:0,width:"100%",height:"30%",background:"linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)"}),tn=q("div")({position:"absolute",bottom:0,width:"100%",height:"20%",background:"linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)"}),ue=q(je)({fontSize:"1.05rem"}),nn=({manga:e,longPressBind:n,popupState:o,handleClick:r,mangaLinkTo:i,selected:s,inLibraryIndicator:a,isInLibrary:d,gridLayout:u,handleSelection:l,continueReadingButton:c,mangaBadges:g,mode:m})=>{const p=h.useRef(null),{id:b,title:f}=e;return t.jsx(kt,{component:X,...n(()=>o.open(p.current)),onClick:r,to:i,state:{mangaTitle:f},sx:{textDecoration:"none",touchCallout:"none"},children:t.jsxs(F,{sx:{display:"flex",flexDirection:"column",margin:"2px",outline:s?"4px solid":void 0,borderRadius:s?"1px":void 0,outlineColor:j=>j.palette.primary.main,backgroundColor:j=>s?j.palette.primary.main:void 0,"@media (hover: hover) and (pointer: fine)":{"&:hover .manga-option-button":{visibility:"visible",pointerEvents:"all"},"&:hover .source-manga-library-state-button":{display:"inline-flex"},"&:hover .source-manga-library-state-indicator":{display:m==="source"?"none":"flex"}}},children:[t.jsx(xe,{sx:{aspectRatio:"225/350",display:"flex"},children:t.jsxs(be,{sx:{position:"relative",height:"100%"},children:[t.jsx(ve,{alt:f,src:I.getThumbnailUrl(e),imgStyle:a&&d?{height:"100%",width:"100%",objectFit:"cover",filter:"brightness(0.4)"}:{height:"100%",width:"100%",objectFit:"cover"},spinnerStyle:{display:"grid",placeItems:"center"}}),t.jsxs(H,{alignItems:"start",justifyContent:"space-between",direction:"row",sx:{position:"absolute",top:5,left:5,right:5},children:[g,t.jsx(ke,{ref:p,popupState:o,id:b,selected:s,handleSelection:l})]}),t.jsxs(t.Fragment,{children:[u!==G.Comfortable&&t.jsxs(t.Fragment,{children:[t.jsx(en,{}),t.jsx(tn,{})]}),t.jsxs(H,{direction:"row",justifyContent:u!==G.Comfortable?"space-between":"end",alignItems:"end",sx:{position:"absolute",bottom:0,width:"100%",margin:"0.5em 0",padding:"0 0.5em",gap:"0.5em"},children:[u!==G.Comfortable&&t.jsx(O,{title:f,placement:"top",children:t.jsx(ue,{sx:{color:"white",textShadow:"0px 0px 3px #000000"},children:f})}),c]})]})]})}),u===G.Comfortable&&t.jsx(O,{title:f,placement:"top",children:t.jsx(ue,{sx:{position:"relative",width:"100%",bottom:0,margin:"0.5em 0",padding:"0 0.5em",color:"text.primary",height:"3rem"},children:f})})]})})},on=({manga:e,longPressBind:n,popupState:o,handleClick:r,mangaLinkTo:i,selected:s,inLibraryIndicator:a,isInLibrary:d,handleSelection:u,continueReadingButton:l,mangaBadges:c,mode:g})=>{const m=h.useRef(null),{id:p,title:b}=e;return t.jsx(xe,{children:t.jsx(be,{component:X,to:i,state:{mangaTitle:b},onClick:r,...n(()=>o.open(m.current)),sx:{touchCallout:"none","@media (hover: hover) and (pointer: fine)":{"&:hover .manga-option-button":{visibility:"visible",pointerEvents:"all"},"&:hover .source-manga-library-state-button":{display:"inline-flex"},"&:hover .source-manga-library-state-indicator":{display:g==="source"?"none":"inline-flex"}}},children:t.jsxs(Mt,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:2,position:"relative"},children:[t.jsx(It,{variant:"rounded",sx:{width:56,height:56,flex:"0 0 auto",marginRight:2},children:t.jsx(ve,{spinnerStyle:{small:!0},imgStyle:{objectFit:"cover",width:"100%",height:"100%",imageRendering:"pixelated",filter:a&&d?"brightness(0.4)":void 0},alt:e.title,src:I.getThumbnailUrl(e)})}),t.jsx(F,{sx:{display:"flex",flexDirection:"row",flexGrow:1,width:"min-content"},children:t.jsx(O,{title:b,placement:"top",children:t.jsx(je,{variant:"h5",children:b})})}),t.jsxs(H,{direction:"row",alignItems:"center",gap:"5px",children:[c,l,t.jsx(ke,{ref:m,popupState:o,id:p,selected:s,handleSelection:u,asCheckbox:!0})]})]})})})},rn=({showContinueReadingButton:e,isLatestChapterRead:n,nextChapterIndexToRead:o,mangaLinkTo:r})=>{const{t:i}=N(),s=o===1;return!e||n?null:t.jsx(O,{title:i(s?"global.button.start":"global.button.resume"),children:t.jsx(B,{variant:"contained",size:"small",sx:{minWidth:"unset"},component:X,to:"".concat(r,"chapter/").concat(o),onClick:a=>a.stopPropagation(),onMouseDown:a=>a.stopPropagation(),children:t.jsx(St,{})})})},sn=q("div")({display:"flex",height:"fit-content",borderRadius:"5px",overflow:"hidden","& p":{color:"white",padding:"0.1em",paddingInline:"0.2em",fontSize:"1.05rem"}}),an=({inLibraryIndicator:e,updateLibraryState:n,isInLibrary:o,unread:r,downloadCount:i,mode:s})=>{const{t:a}=N(),d=oe.useIsTouchDevice(),{options:{showUnreadBadge:u,showDownloadBadge:l}}=he();return t.jsxs(sn,{children:[!d&&e&&s==="source"&&t.jsx(B,{className:"source-manga-library-state-button",component:"div",variant:"contained",size:"small",onMouseDown:c=>c.stopPropagation(),onClick:c=>{c.preventDefault(),c.stopPropagation(),n()},sx:{display:"none"},color:o?"error":"primary",children:a(o?"manga.action.library.remove.label.action":"manga.button.add_to_library")}),e&&o&&t.jsx(te,{className:"source-manga-library-state-indicator",sx:{backgroundColor:"primary.dark"},children:a("manga.button.in_library")}),(u&&s==="default"||s==="duplicate")&&(r!=null?r:0)>0&&t.jsx(te,{sx:{backgroundColor:"primary.dark"},children:r}),(l&&s==="default"||s==="duplicate")&&(i!=null?i:0)>0&&t.jsx(te,{sx:{backgroundColor:"success.dark"},children:i})]})},cn=(e,n,o,r)=>{switch(e){case"default":case"source":case"duplicate":return"/manga/".concat(n,"/");case"migrate.search":return"/migrate/source/".concat(o,"/manga/").concat(n,"/search?query=").concat(r);case"migrate.select":return"";default:throw new Error('getMangaLinkTo: unexpected MangaCardMode "'.concat(e,'"'))}},ln=e=>{var E,Y;const{manga:n,gridLayout:o,inLibraryIndicator:r,selected:i,handleSelection:s,mode:a="default"}=e,{id:d,latestReadChapter:u,firstUnreadChapter:l,chapters:c,downloadCount:g,unreadCount:m}=n,{options:{showContinueReadingButton:p}}=he(),{CategorySelectComponent:b,updateLibraryState:f,isInLibrary:j}=mt(n,a==="source"),v=cn(a,n.id,(E=n.source)==null?void 0:E.id,n.title),k=(Y=l==null?void 0:l.sourceOrder)!=null?Y:1,S=(c==null?void 0:c.totalCount)===(u==null?void 0:u.sourceOrder),[$,M]=h.useState(!1),D=(_,x)=>{const T=a==="default",L=a==="source",W=a==="migrate.select",A=i!==null;if(W||A||(T||L)&&x){if(_.preventDefault(),L){f();return}if(A){s==null||s(d,!i,{selectRange:_.shiftKey});return}if(T){x==null||x();return}W&&M(!0)}},R=xt((_,{context:x})=>{_.shiftKey=!0,D(_,x)}),C=h.useMemo(()=>o===G.List?on:nn,[o]),w=h.useMemo(()=>t.jsx(rn,{showContinueReadingButton:p&&a==="default",isLatestChapterRead:S,nextChapterIndexToRead:k,mangaLinkTo:v}),[p,S,k,v]),y=h.useMemo(()=>t.jsx(an,{inLibraryIndicator:r,isInLibrary:j,unread:m,downloadCount:g,updateLibraryState:f,mode:a}),[r,j,m,g,f]);return t.jsxs(t.Fragment,{children:[$&&t.jsx(Qt,{mangaIdToMigrateTo:n.id,onClose:()=>M(!1)}),t.jsx(Xe,{variant:"popover",popupId:"manga-card-action-menu",children:_=>t.jsxs(t.Fragment,{children:[t.jsx(C,{...e,longPressBind:R,popupState:_,handleClick:D,mangaLinkTo:v,isInLibrary:j,inLibraryIndicator:r,continueReadingButton:w,mangaBadges:y}),!!s&&_.isOpen&&t.jsx(bt,{...Ye(_),children:(x,T)=>t.jsx(Jt,{manga:n,handleSelection:s,onClose:x,setHideMenu:T})}),b]})})]})},un=Ze.forwardRef(({children:e,...n},o)=>t.jsx(re,{...n,ref:o,container:!0,sx:{paddingLeft:"5px",paddingRight:"13px"},children:e})),dn=(e,n,o,r=12)=>{const i=Math.ceil(e/n),s=o===G.List?r:r/i;return({children:a,...d})=>t.jsx(re,{...d,item:!0,xs:s,sx:{width:"100%",paddingTop:"8px",paddingLeft:"8px"},children:a})},Ie=(e,n,o,r=!1,i,s,a)=>t.jsx(ln,{manga:e,gridLayout:n,inLibraryIndicator:o,selected:r?i==null?void 0:i.includes(e.id):null,handleSelection:s,mode:a},e.id),pn=h.forwardRef(({isLoading:e,mangas:n,inLibraryIndicator:o,GridItemContainer:r,gridLayout:i,isSelectModeActive:s,selectedMangaIds:a,handleSelection:d,mode:u},l)=>t.jsx(re,{ref:l,container:!0,spacing:1,style:{margin:0,width:"100%",padding:"5px",overflowX:"auto",display:"-webkit-inline-box",flexWrap:"nowrap"},children:e?t.jsx(me,{}):n.map(c=>t.jsx(r,{children:Ie(c,i,o,s,a,d,u)},c.id))})),fn=e=>"MangaGrid-snapshot-location-".concat(e.key),gn=h.forwardRef(({isLoading:e,mangas:n,inLibraryIndicator:o,GridItemContainer:r,gridLayout:i,hasNextPage:s,loadMore:a,isSelectModeActive:d,selectedMangaIds:u,handleSelection:l,mode:c},g)=>{const m=Je(),p=fn(m),[b]=Qe(p,void 0),f=h.useRef(),j=v=>{const k=window.location.href;clearTimeout(f.current),f.current=setTimeout(()=>{k===window.location.href&&et.session.setItem(p,v,!1)},250)};return h.useEffect(()=>clearTimeout(f.current),[m.key,f.current]),t.jsxs(t.Fragment,{children:[t.jsx(F,{ref:g,children:t.jsx(ot,{useWindowScroll:!0,overscan:window.innerHeight*.25,totalCount:n.length,components:{List:un,Item:r},restoreStateFrom:b,stateChanged:j,endReached:()=>a(),itemContent:v=>Ie(n[v],i,o,d,u,l,c)})}),d&&i===G.List?t.jsx(F,{sx:{paddingBottom:$t}}):e?t.jsx(me,{}):s?t.jsx("div",{style:{height:"75px"}}):null]})}),Rn=({mangas:e,isLoading:n,message:o,messageExtra:r,hasNextPage:i,loadMore:s,gridLayout:a,horizontal:d,noFaces:u,inLibraryIndicator:l,isSelectModeActive:c,selectedMangaIds:g,handleSelection:m,mode:p,retry:b})=>{const{t:f}=N(),j=h.useRef(null),[v,k]=h.useState(document.documentElement.offsetWidth),[S]=tt("ItemWidth",300),$=h.useRef(null),M=h.useMemo(()=>dn(v,S,a),[v,S,a]),D=()=>{k((()=>{var y;const w=(y=$.current)==null?void 0:y.offsetWidth;return w||document.documentElement.offsetWidth})())};return h.useLayoutEffect(D,[]),h.useLayoutEffect(()=>{let C;const w=y=>{C=setTimeout(()=>{if(document.body.style.overflow.includes("hidden")){w(250);return}document.body.style.overflowY=a===G.List?"auto":"scroll"},y)};return w(0),()=>{clearTimeout(C)}},[a]),h.useLayoutEffect(()=>()=>{document.body.style.overflowY="auto"},[]),h.useEffect(()=>{let C;const w=()=>{clearInterval(C),C=setTimeout(D,100)};return window.addEventListener("resize",w),()=>window.removeEventListener("resize",w)},[]),h.useEffect(()=>{if(!j.current)return()=>{};if(j.current.offsetHeight>document.documentElement.clientHeight)return()=>{};const C=new ResizeObserver(w=>{const y=w[0].target.clientHeight,E=y>document.documentElement.clientHeight;if(!n&&y){if(E){C.disconnect();return}s(),C.disconnect()}});return C.observe(j.current),()=>C.disconnect()},[s,n]),!n&&e.length===0?t.jsx(nt,{noFaces:u,message:o!=null?o:f("manga.error.label.no_mangas_found"),messageExtra:r,retry:b}):t.jsx("div",{ref:$,style:{overflow:"hidden",paddingBottom:"13px"},children:d?t.jsx(pn,{ref:j,isLoading:n,mangas:e,inLibraryIndicator:l,GridItemContainer:M,gridLayout:a,isSelectModeActive:c,selectedMangaIds:g,handleSelection:m,mode:p}):t.jsx(gn,{ref:j,isLoading:n,mangas:e,inLibraryIndicator:l,GridItemContainer:M,hasNextPage:i,loadMore:s,gridLayout:a,isSelectModeActive:c,selectedMangaIds:g,handleSelection:m,mode:p})})};export{Rn as M,Jt as a,ln as b,fn as g};