import{c as g,a6 as Ce,a5 as ve,s as H,aK as ye,y as we,by as Me,j as t,ab as ke,bz as q,bA as J,ac as Ie,_ as Se,$ as oe,a0 as $e,M as ee,B as F,K as De,al as Q,bB as Te,bC as Re,u as N,x as _e,L as K,Q as ce,h as le,e as Ee,a1 as Pe,q as Ge,aC as We,aD as Be,aE as Le,S as L,b as W,bl as Fe,m as Ne,A as Oe,f as B,I as Ae,p as P,T as de,o as ue,P as ze,C as Ue,Y as He,g as pe,ar as Ke,b9 as Ve,ba as Ye,w as qe,d as Ze,n as se,E as Qe}from"./index-3BgSjiAU.js";import{a as Xe}from"./index-DzJ8Uuty.js";import{l as Je,M as E,d as et,C as tt,a as nt,b as ot,m as st,n as rt,j as it,T as at,c as ct,e as lt,f as dt,g as re,i as ut,J as pt,h as ft}from"./useManageMangaLibraryState-Bsg8NOBi.js";import{d as ht}from"./Delete-C4WlJ5KK.js";import{d as gt}from"./Sync-DWL8zJYc.js";import{M as I,a as mt}from"./Mangas-BxejpJ2m.js";import{C as Y}from"./CheckboxInput-BzaOoJDd.js";import{F as xt}from"./ListPreference-CZ2gBqJc.js";import{S as fe}from"./SpinnerImage-C3UGIXPn.js";import{C as bt}from"./Checkbox-CdVFsHbF.js";import{T as X}from"./TypographyMaxLines-CaAuzfoO.js";import{L as jt}from"./Link-BS4yKD0g.js";import{C as he}from"./Card-CzE045je.js";import{C as ge}from"./CardActionArea-dBFZskxN.js";import{C as Ct}from"./CardContent-Ch2wKEDj.js";import{A as vt}from"./Avatar-BLk680lt.js";import{d as yt}from"./PlayArrow-C4i9l6qz.js";import{D as wt}from"./StyledFab-Dr4b3v-S.js";const ie=g.createContext();function Mt(e){return Ce("MuiGrid",e)}const kt=[0,1,2,3,4,5,6,7,8,9,10],It=["column-reverse","column","row-reverse","row"],St=["nowrap","wrap-reverse","wrap"],z=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],U=ve("MuiGrid",["root","container","item","zeroMinWidth",...kt.map(e=>"spacing-xs-".concat(e)),...It.map(e=>"direction-xs-".concat(e)),...St.map(e=>"wrap-xs-".concat(e)),...z.map(e=>"grid-xs-".concat(e)),...z.map(e=>"grid-sm-".concat(e)),...z.map(e=>"grid-md-".concat(e)),...z.map(e=>"grid-lg-".concat(e)),...z.map(e=>"grid-xl-".concat(e))]);function $t({theme:e,ownerState:n}){let o;return e.breakpoints.keys.reduce((r,i)=>{let s={};if(n[i]&&(o=n[i]),!o)return r;if(o===!0)s={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(o==="auto")s={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const a=q({values:n.columns,breakpoints:e.breakpoints.values}),u=typeof a=="object"?a[i]:a;if(u==null)return r;const d="".concat(Math.round(o/u*1e8)/1e6,"%");let c={};if(n.container&&n.item&&n.columnSpacing!==0){const l=e.spacing(n.columnSpacing);if(l!=="0px"){const h="calc(".concat(d," + ").concat(l,")");c={flexBasis:h,maxWidth:h}}}s={flexBasis:d,flexGrow:0,maxWidth:d,...c}}return e.breakpoints.values[i]===0?Object.assign(r,s):r[e.breakpoints.up(i)]=s,r},{})}function Dt({theme:e,ownerState:n}){const o=q({values:n.direction,breakpoints:e.breakpoints.values});return J({theme:e},o,r=>{const i={flexDirection:r};return r.startsWith("column")&&(i["& > .".concat(U.item)]={maxWidth:"none"}),i})}function me({breakpoints:e,values:n}){let o="";Object.keys(n).forEach(i=>{o===""&&n[i]!==0&&(o=i)});const r=Object.keys(e).sort((i,s)=>e[i]-e[s]);return r.slice(0,r.indexOf(o))}function Tt({theme:e,ownerState:n}){const{container:o,rowSpacing:r}=n;let i={};if(o&&r!==0){const s=q({values:r,breakpoints:e.breakpoints.values});let a;typeof s=="object"&&(a=me({breakpoints:e.breakpoints.values,values:s})),i=J({theme:e},s,(u,d)=>{const c=e.spacing(u);return c!=="0px"?{marginTop:e.spacing(-u),["& > .".concat(U.item)]:{paddingTop:c}}:a!=null&&a.includes(d)?{}:{marginTop:0,["& > .".concat(U.item)]:{paddingTop:0}}})}return i}function Rt({theme:e,ownerState:n}){const{container:o,columnSpacing:r}=n;let i={};if(o&&r!==0){const s=q({values:r,breakpoints:e.breakpoints.values});let a;typeof s=="object"&&(a=me({breakpoints:e.breakpoints.values,values:s})),i=J({theme:e},s,(u,d)=>{const c=e.spacing(u);if(c!=="0px"){const l=e.spacing(-u);return{width:"calc(100% + ".concat(c,")"),marginLeft:l,["& > .".concat(U.item)]:{paddingLeft:c}}}return a!=null&&a.includes(d)?{}:{width:"100%",marginLeft:0,["& > .".concat(U.item)]:{paddingLeft:0}}})}return i}function _t(e,n,o={}){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[o["spacing-xs-".concat(String(e))]];const r=[];return n.forEach(i=>{const s=e[i];Number(s)>0&&r.push(o["spacing-".concat(i,"-").concat(String(s))])}),r}const Et=H("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:o}=e,{container:r,direction:i,item:s,spacing:a,wrap:u,zeroMinWidth:d,breakpoints:c}=o;let l=[];r&&(l=_t(a,c,n));const h=[];return c.forEach(m=>{const p=o[m];p&&h.push(n["grid-".concat(m,"-").concat(String(p))])}),[n.root,r&&n.container,s&&n.item,d&&n.zeroMinWidth,...l,i!=="row"&&n["direction-xs-".concat(String(i))],u!=="wrap"&&n["wrap-xs-".concat(String(u))],...h]}})(({ownerState:e})=>({boxSizing:"border-box",...e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},...e.item&&{margin:0},...e.zeroMinWidth&&{minWidth:0},...e.wrap!=="wrap"&&{flexWrap:e.wrap}}),Dt,Tt,Rt,$t);function Pt(e,n){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return["spacing-xs-".concat(String(e))];const o=[];return n.forEach(r=>{const i=e[r];if(Number(i)>0){const s="spacing-".concat(r,"-").concat(String(i));o.push(s)}}),o}const Gt=e=>{const{classes:n,container:o,direction:r,item:i,spacing:s,wrap:a,zeroMinWidth:u,breakpoints:d}=e;let c=[];o&&(c=Pt(s,d));const l=[];d.forEach(m=>{const p=e[m];p&&l.push("grid-".concat(m,"-").concat(String(p)))});const h={root:["root",o&&"container",i&&"item",u&&"zeroMinWidth",...c,r!=="row"&&"direction-xs-".concat(String(r)),a!=="wrap"&&"wrap-xs-".concat(String(a)),...l]};return Ie(h,Mt,n)},te=g.forwardRef(function(n,o){const r=ye({props:n,name:"MuiGrid"}),{breakpoints:i}=we(),s=Me(r),{className:a,columns:u,columnSpacing:d,component:c="div",container:l=!1,direction:h="row",item:m=!1,rowSpacing:p,spacing:x=0,wrap:f="wrap",zeroMinWidth:b=!1,...j}=s,w=p||x,S=d||x,$=g.useContext(ie),k=l?u||12:$,D={},_={...j};i.keys.forEach(y=>{j[y]!=null&&(D[y]=j[y],delete _[y])});const C={...s,columns:k,container:l,direction:h,item:m,rowSpacing:w,columnSpacing:S,wrap:f,zeroMinWidth:b,spacing:x,...D,breakpoints:i.keys},M=Gt(C);return t.jsx(ie.Provider,{value:k,children:t.jsx(Et,{ownerState:C,className:ke(M.root,a),as:c,ref:o,..._})})}),Wt=g.forwardRef(({MenuItemProps:e,className:n,label:o,LeftIcon:r,renderLabel:i,RightIcon:s,...a},u)=>t.jsxs(Se,{...e,ref:u,className:n,...a,children:[r&&t.jsx(oe,{children:t.jsx(r,{fontSize:"small"})}),t.jsx($e,{children:o}),s&&t.jsx(oe,{style:{minWidth:0},children:t.jsx(s,{fontSize:"small"})})]})),xe=g.forwardRef((e,n)=>{const{parentMenuOpen:o,label:r,renderLabel:i,RightIcon:s=Q(Te,Re),LeftIcon:a,children:u,className:d,tabIndex:c,ContainerProps:l={},MenuProps:h,...m}=e,p=ee.useIsTouchDevice(),{ref:x,...f}=l,b=g.useRef(null);g.useImperativeHandle(n,()=>b.current);const j=g.useRef(null);g.useImperativeHandle(x,()=>j.current);const w=g.useRef(null),[S,$]=g.useState(!1),k=v=>{if(S!==v){if(e.disabled){$(!1);return}$(v)}},D=v=>{p||(k(!0),f.onMouseEnter&&f.onMouseEnter(v))},_=v=>{k(!1),f.onMouseLeave&&f.onMouseLeave(v)},C=()=>{var O,A;const v=(A=(O=j.current)==null?void 0:O.ownerDocument.activeElement)!=null?A:null;if(w.current==null)return!1;for(const V of w.current.children)if(V===v)return!0;return!1},M=v=>{p||(v.target===j.current&&k(!0),f.onFocus&&f.onFocus(v))},y=v=>{k(!S),f.onClick&&f.onClick(v)},T=v=>{var A,V,ne;if(v.key==="Escape")return;C()&&v.stopPropagation();const O=(A=j.current)==null?void 0:A.ownerDocument.activeElement;if(v.key==="ArrowLeft"&&C()&&((V=j.current)==null||V.focus()),v.key==="ArrowRight"&&v.target===j.current&&v.target===O){const Z=(ne=w.current)==null?void 0:ne.children[0];Z==null||Z.focus()}},R=S&&o;let G;return e.disabled||(G=c!==void 0?c:-1),t.jsxs(F,{...f,ref:j,onFocus:M,onClick:y,tabIndex:G,onMouseEnter:D,onMouseLeave:_,onKeyDown:T,children:[t.jsx(Wt,{MenuItemProps:m,className:d,ref:b,LeftIcon:a,RightIcon:s,label:r,renderLabel:i}),t.jsx(De,{style:{pointerEvents:"none"},anchorEl:b.current,anchorOrigin:{horizontal:Q("right","left"),vertical:"top"},transformOrigin:{horizontal:Q("left","right"),vertical:"top"},open:R,autoFocus:!1,disableAutoFocus:!0,disableEnforceFocus:!0,onClose:()=>{k(!1)},...h,children:t.jsx(F,{ref:w,style:{pointerEvents:"auto"},children:u})})]})});xe.displayName="NestedMenuItem";const Bt=["remove_from_library"],Lt=({manga:e,handleSelection:n,selectedMangas:o,onClose:r,setHideMenu:i})=>{const{t:s}=N(),[a,u]=g.useState(!1),d=!!e,c=o!=null?o:[],l=ct(d,mt),h=lt(d),m=dt(d),p=!!e&&e.downloadCount===e.chapters.totalCount,x=!!(e!=null&&e.downloadCount),f=!!(e!=null&&e.unreadCount),b=!!e&&e.unreadCount!==e.chapters.totalCount,{openCategorySelect:j,CategorySelectComponent:w}=Je({mangaId:e==null?void 0:e.id,mangaIds:o?I.getIds(c):void 0,onClose:()=>r(!0),addToLibrary:!1}),S=()=>{n==null||n(e.id,!0),r(!0)},$=(M,y)=>{I.performAction(M,e?[e.id]:I.getIds(y),{wasManuallyMarkedAsRead:!0}).catch(le()),r(!Bt.includes(M))},{downloadableMangas:k,downloadedMangas:D,unreadMangas:_,readMangas:C}=g.useMemo(()=>({downloadableMangas:[...I.getNotDownloaded(c),...I.getPartiallyDownloaded(c)],downloadedMangas:[...I.getPartiallyDownloaded(c),...I.getFullyDownloaded(c)],unreadMangas:[...I.getUnread(c),...I.getPartiallyRead(c)],readMangas:[...I.getPartiallyRead(c),...I.getFullyRead(c)]}),[c]);return t.jsxs(t.Fragment,{children:[!!n&&d&&t.jsx(E,{onClick:S,Icon:et,title:s("chapter.action.label.select")}),h(!p)&&t.jsx(xe,{disabled:m(!k.length),LeftIcon:_e,label:l("download",k.length),parentMenuOpen:!0,children:t.jsx(tt,{mangaIds:d?[e.id]:I.getIds(c),closeMenu:()=>r(!0)})}),h(x)&&t.jsx(E,{Icon:ht,disabled:m(!D.length),onClick:()=>$("delete",D),title:l("delete",D.length)}),h(f)&&t.jsx(E,{Icon:nt,disabled:m(!_.length),onClick:()=>$("mark_as_read",_),title:l("mark_as_read",_.length)}),h(b)&&t.jsx(E,{Icon:ot,disabled:m(!C.length),onClick:()=>$("mark_as_unread",C),title:l("mark_as_unread",C.length)}),d&&t.jsx(K,{to:"/migrate/source/".concat(e==null?void 0:e.sourceId,"/manga/").concat(e==null?void 0:e.id,"/search?query=").concat(e==null?void 0:e.title),state:{mangaTitle:e==null?void 0:e.title},style:{textDecoration:"none",color:"inherit"},children:t.jsx(E,{Icon:st,title:l("migrate",c.length)})}),d&&t.jsx(E,{onClick:()=>{u(!0),i(!0)},Icon:gt,title:l("track",c.length)}),t.jsx(E,{onClick:()=>{j(!0),i(!0)},Icon:rt,title:l("change_categories",c.length)}),t.jsx(E,{onClick:()=>$("remove_from_library",c),Icon:it,title:l("remove_from_library",c.length)}),w,a&&t.jsx(ce,{open:!0,maxWidth:"md",fullWidth:!0,scroll:"paper",onClose:()=>{u(!1),r(!0)},children:t.jsx(at,{manga:e})})]})},Ft=({mangaIdToMigrateTo:e,onClose:n})=>{const{t:o}=N(),r=Ee(),{mangaId:i}=Pe(),s=Number(i),{settings:{migrateChapters:a,migrateCategories:u,migrateTracking:d,deleteChapters:c}}=Ge(),[l,h]=g.useState(!1),m=Fe(le()),p=async x=>{if(s==null)throw new Error('MigrateDialog::migrate: unexpected mangaId "'.concat(s,'"'));Ne(o("migrate.label.info"),"info"),h(!0);try{await I.migrate(s,e,{mode:x,migrateChapters:a,migrateCategories:u,migrateTracking:d,deleteChapters:c}),r("/manga/".concat(e),{replace:!0})}catch(f){h(!1)}};return t.jsxs(ce,{open:!0,fullWidth:!0,onClose:n,children:[t.jsx(We,{children:o("migrate.dialog.title")}),t.jsx(Be,{dividers:!0,children:t.jsxs(xt,{children:[t.jsx(Y,{disabled:l,label:o("chapter.title_one"),checked:a,onChange:(x,f)=>m("migrateChapters",f)}),t.jsx(Y,{disabled:l,label:o("category.title.category_one"),checked:u,onChange:(x,f)=>m("migrateCategories",f)}),t.jsx(Y,{disabled:l,label:o("tracking.title"),checked:d,onChange:(x,f)=>m("migrateTracking",f)}),t.jsx(Y,{disabled:l,label:o("migrate.dialog.label.delete_downloaded"),checked:c,onChange:(x,f)=>m("deleteChapters",f)})]})}),t.jsx(Le,{children:t.jsxs(L,{direction:"row",sx:{justifyContent:"space-between",width:"100%"},children:[t.jsx(W,{disabled:l,component:K,to:"/manga/".concat(e),children:o("migrate.dialog.action.button.show_entry")}),t.jsxs(L,{direction:"row",children:[t.jsx(W,{disabled:l,onClick:n,children:o("global.button.cancel")}),t.jsx(W,{disabled:l,onClick:()=>p("copy"),children:o("global.button.copy")}),t.jsx(W,{disabled:l,onClick:()=>p("migrate"),children:o("global.button.migrate")})]})]})})]})},be=g.forwardRef(({id:e,selected:n,handleSelection:o,asCheckbox:r=!1,popupState:i},s)=>{const{t:a}=N(),u=ee.useIsTouchDevice(),d=g.useMemo(()=>Oe(i),[i]),c=p=>{p.stopPropagation(),p.preventDefault()},l=(p,x)=>{c(p),o==null||o(e,x)},h=p=>{u||(c(p),i.open(p),d.onClick(p))};return o?n!==null?r?t.jsx(B,{title:a(n?"global.button.deselect":"global.button.select"),children:t.jsx(bt,{checked:n,onMouseDown:c,onChange:l})}):null:r?t.jsx(B,{title:a("global.button.options"),children:t.jsx(Ae,{ref:s,...d,onClick:h,onTouchStart:h,"aria-label":"more",size:"large",onMouseDown:c,children:t.jsx(re,{})})}):t.jsx(B,{title:a("global.button.options"),children:t.jsx(W,{ref:s,...d,onClick:h,onTouchStart:h,className:"manga-option-button",size:"small",variant:"contained",sx:{minWidth:"unset",paddingX:"0",paddingY:"2.5px",visibility:i.isOpen?"visible":"hidden",pointerEvents:"none","@media not (pointer: fine)":{visibility:"hidden",pointerEvents:void 0}},onMouseDown:p=>p.stopPropagation(),children:t.jsx(re,{})})}):null}),Nt=H("div")({position:"absolute",bottom:0,width:"100%",height:"30%",background:"linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)"}),Ot=H("div")({position:"absolute",bottom:0,width:"100%",height:"20%",background:"linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)"}),At=({manga:e,longPressBind:n,popupState:o,handleClick:r,mangaLinkTo:i,selected:s,inLibraryIndicator:a,isInLibrary:u,gridLayout:d,handleSelection:c,continueReadingButton:l,mangaBadges:h,mode:m})=>{const p=g.useRef(null),{id:x,title:f}=e;return t.jsx(jt,{component:K,...n(()=>o.open(p.current)),onClick:r,to:i,state:{mangaTitle:f},sx:{textDecoration:"none",touchCallout:"none"},children:t.jsxs(F,{sx:{display:"flex",flexDirection:"column",m:.25,outline:s?"4px solid":void 0,borderRadius:s?"1px":void 0,outlineColor:b=>b.palette.primary.main,backgroundColor:b=>s?b.palette.primary.main:void 0,"@media (hover: hover) and (pointer: fine)":{"&:hover .manga-option-button":{visibility:"visible",pointerEvents:"all"},"&:hover .source-manga-library-state-button":{display:"inline-flex"},"&:hover .source-manga-library-state-indicator":{display:m==="source"?"none":"flex"}}},children:[t.jsx(he,{sx:{aspectRatio:"225/350",display:"flex"},children:t.jsxs(ge,{sx:{position:"relative",height:"100%"},children:[t.jsx(fe,{alt:f,src:I.getThumbnailUrl(e),imgStyle:a&&u?{height:"100%",width:"100%",objectFit:"cover",filter:"brightness(0.4)"}:{height:"100%",width:"100%",objectFit:"cover"},spinnerStyle:{display:"grid",placeItems:"center"}}),t.jsxs(L,{direction:"row",sx:{alignItems:"start",justifyContent:"space-between",position:"absolute",top:b=>b.spacing(1),left:b=>b.spacing(1),right:b=>b.spacing(1)},children:[h,t.jsx(be,{ref:p,popupState:o,id:x,selected:s,handleSelection:c})]}),t.jsxs(t.Fragment,{children:[d!==P.Comfortable&&t.jsxs(t.Fragment,{children:[t.jsx(Nt,{}),t.jsx(Ot,{})]}),t.jsxs(L,{direction:"row",sx:{justifyContent:d!==P.Comfortable?"space-between":"end",alignItems:"end",position:"absolute",bottom:0,width:"100%",p:1,gap:1},children:[d!==P.Comfortable&&t.jsx(B,{title:f,placement:"top",children:t.jsx(X,{component:"h3",sx:{color:"white",textShadow:"0px 0px 3px #000000"},children:f})}),l]})]})]})}),d===P.Comfortable&&t.jsx(L,{sx:{pb:1},children:t.jsx(B,{title:f,placement:"top",children:t.jsx(X,{component:"h3",sx:{color:"text.primary",height:"3rem",pt:.5},children:f})})})]})})},zt=({manga:e,longPressBind:n,popupState:o,handleClick:r,mangaLinkTo:i,selected:s,inLibraryIndicator:a,isInLibrary:u,handleSelection:d,continueReadingButton:c,mangaBadges:l,mode:h})=>{const m=g.useRef(null),{id:p,title:x}=e;return t.jsx(he,{children:t.jsx(ge,{component:K,to:i,state:{mangaTitle:x},onClick:r,...n(()=>o.open(m.current)),sx:{touchCallout:"none","@media (hover: hover) and (pointer: fine)":{"&:hover .manga-option-button":{visibility:"visible",pointerEvents:"all"},"&:hover .source-manga-library-state-button":{display:"inline-flex"},"&:hover .source-manga-library-state-indicator":{display:h==="source"?"none":"inline-flex"}}},children:t.jsxs(Ct,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:1.5,position:"relative"},children:[t.jsx(vt,{variant:"rounded",sx:{width:56,height:56,flex:"0 0 auto",marginRight:1},children:t.jsx(fe,{spinnerStyle:{small:!0},imgStyle:{objectFit:"cover",width:"100%",height:"100%",imageRendering:"pixelated",filter:a&&u?"brightness(0.4)":void 0},alt:e.title,src:I.getThumbnailUrl(e)})}),t.jsx(F,{sx:{display:"flex",flexDirection:"row",flexGrow:1,width:"min-content"},children:t.jsx(B,{title:x,placement:"top",children:t.jsx(X,{variant:"h6",component:"h3",children:x})})}),t.jsxs(L,{direction:"row",sx:{alignItems:"center",gap:.5},children:[l,c,t.jsx(be,{ref:m,popupState:o,id:p,selected:s,handleSelection:d,asCheckbox:!0})]})]})})})},Ut=({showContinueReadingButton:e,nextChapterIndexToRead:n,mangaLinkTo:o})=>{const{t:r}=N(),i=n===1;return!e||n===void 0?null:t.jsx(B,{title:r(i?"global.button.start":"global.button.resume"),children:t.jsx(W,{variant:"contained",size:"small",sx:{minWidth:"unset",py:.5,px:.75},component:K,to:"".concat(o,"chapter/").concat(n),onClick:s=>s.stopPropagation(),onMouseDown:s=>s.stopPropagation(),children:t.jsx(yt,{})})})},Ht=H("div")(({theme:e})=>({display:"flex",height:"fit-content",borderRadius:e.shape.borderRadius,overflow:"hidden"})),ae=H(de)(({theme:e})=>({color:e.palette.primary.contrastText,paddingInline:e.spacing(.3)})),Kt=({inLibraryIndicator:e,updateLibraryState:n,isInLibrary:o,unread:r,downloadCount:i,mode:s})=>{const{t:a}=N(),u=ee.useIsTouchDevice(),{options:{showUnreadBadge:d,showDownloadBadge:c}}=ue();return t.jsxs(Ht,{children:[!u&&e&&s==="source"&&t.jsx(W,{className:"source-manga-library-state-button",component:"div",variant:"contained",size:"small",onMouseDown:l=>l.stopPropagation(),onClick:l=>{l.preventDefault(),l.stopPropagation(),n()},sx:{display:"none"},color:o?"error":"primary",children:a(o?"manga.action.library.remove.label.action":"manga.button.add_to_library")}),e&&o&&t.jsx(de,{className:"source-manga-library-state-indicator",sx:{backgroundColor:"primary.dark",color:"primary.contrastText",p:.3},children:a("manga.button.in_library")}),(d&&s==="default"||s==="duplicate")&&(r!=null?r:0)>0&&t.jsx(ae,{sx:{backgroundColor:"primary.main",color:"primary.contrastText"},children:r}),(c&&s==="default"||s==="duplicate")&&(i!=null?i:0)>0&&t.jsx(ae,{sx:{backgroundColor:"secondary.main",color:"secondary.contrastText"},children:i})]})},Vt=(e,n,o,r)=>{switch(e){case"default":case"source":case"duplicate":return"/manga/".concat(n,"/");case"migrate.search":return"/migrate/source/".concat(o,"/manga/").concat(n,"/search?query=").concat(r);case"migrate.select":return"";default:throw new Error('getMangaLinkTo: unexpected MangaCardMode "'.concat(e,'"'))}},Yt=e=>{const{manga:n,gridLayout:o,inLibraryIndicator:r,selected:i,handleSelection:s,mode:a="default"}=e,{id:u,firstUnreadChapter:d,downloadCount:c,unreadCount:l}=n,{options:{showContinueReadingButton:h}}=ue(),{CategorySelectComponent:m,updateLibraryState:p,isInLibrary:x}=ut(n,a==="source"),f=Vt(a,n.id,n.sourceId,n.title),b=d==null?void 0:d.sourceOrder,[j,w]=g.useState(!1),S=(C,M)=>{const y=a==="default",T=a==="source",R=a==="migrate.select",G=i!==null;if(R||G||(y||T)&&M){if(C.preventDefault(),T){p();return}if(G){s==null||s(u,!i,{selectRange:C.shiftKey});return}if(y){M==null||M();return}R&&w(!0)}},$=pt((C,{context:M})=>{C.shiftKey=!0,S(C,M)}),k=g.useMemo(()=>o===P.List?zt:At,[o]),D=g.useMemo(()=>t.jsx(Ut,{showContinueReadingButton:h&&a==="default",nextChapterIndexToRead:b,mangaLinkTo:f}),[h,b,f]),_=g.useMemo(()=>t.jsx(Kt,{inLibraryIndicator:r,isInLibrary:x,unread:l,downloadCount:c,updateLibraryState:p,mode:a}),[r,x,l,c,p]);return t.jsxs(t.Fragment,{children:[j&&t.jsx(Ft,{mangaIdToMigrateTo:n.id,onClose:()=>w(!1)}),t.jsx(ze,{variant:"popover",popupId:"manga-card-action-menu",children:C=>t.jsxs(t.Fragment,{children:[t.jsx(k,{...e,longPressBind:$,popupState:C,handleClick:S,mangaLinkTo:f,isInLibrary:x,inLibraryIndicator:r,continueReadingButton:D,mangaBadges:_}),!!s&&C.isOpen&&t.jsx(ft,{...Ue(C),children:(M,y)=>t.jsx(Lt,{manga:n,handleSelection:s,onClose:M,setHideMenu:y})}),m]})})]})},qt=He.forwardRef(({children:e,...n},o)=>t.jsx(te,{...n,ref:o,container:!0,sx:{paddingLeft:"5px",paddingRight:"13px"},children:e})),Zt=(e,n,o,r=12)=>{const i=Math.ceil(e/n),s=o===P.List?r:r/i;return({children:a,...u})=>t.jsx(te,{...u,item:!0,xs:s,sx:{width:"100%",paddingTop:"8px",paddingLeft:"8px"},children:a})},je=(e,n,o,r=!1,i,s,a)=>t.jsx(Yt,{manga:e,gridLayout:n,inLibraryIndicator:o,selected:r?i==null?void 0:i.includes(e.id):null,handleSelection:s,mode:a},e.id),Qt=g.forwardRef(({isLoading:e,mangas:n,inLibraryIndicator:o,GridItemContainer:r,gridLayout:i,isSelectModeActive:s,selectedMangaIds:a,handleSelection:u,mode:d},c)=>t.jsx(te,{ref:c,container:!0,spacing:1,style:{margin:0,width:"100%",padding:"5px",overflowX:"auto",display:"-webkit-inline-box",flexWrap:"nowrap"},children:e?t.jsx(pe,{}):n.map(l=>t.jsx(r,{children:je(l,i,o,s,a,u,d)},l.id))})),Xt=e=>"MangaGrid-snapshot-location-".concat(e.key),Jt=g.forwardRef(({isLoading:e,mangas:n,inLibraryIndicator:o,GridItemContainer:r,gridLayout:i,hasNextPage:s,loadMore:a,isSelectModeActive:u,selectedMangaIds:d,handleSelection:c,mode:l},h)=>{const m=Ke(),p=Xt(m),[x]=Ve(p,void 0),f=g.useRef(),b=j=>{const w=window.location.href;clearTimeout(f.current),f.current=setTimeout(()=>{w===window.location.href&&Ye.session.setItem(p,j,!1)},250)};return g.useEffect(()=>clearTimeout(f.current),[m.key,f.current]),t.jsxs(t.Fragment,{children:[t.jsx(F,{ref:h,children:t.jsx(Xe,{useWindowScroll:!0,overscan:window.innerHeight*.25,totalCount:n.length,components:{List:qt,Item:r},restoreStateFrom:x,stateChanged:b,endReached:()=>a(),itemContent:j=>je(n[j],i,o,u,d,c,l)})}),u&&i===P.List?t.jsx(F,{sx:{paddingBottom:wt}}):e?t.jsx(pe,{}):s?t.jsx("div",{style:{height:"75px"}}):null]})}),jn=({mangas:e,isLoading:n,message:o,messageExtra:r,hasNextPage:i,loadMore:s,gridLayout:a,horizontal:u,noFaces:d,inLibraryIndicator:c,isSelectModeActive:l,selectedMangaIds:h,handleSelection:m,mode:p,retry:x})=>{var C,M;const{t:f}=N(),{navBarWidth:b}=qe(),j=g.useRef(null),w=g.useRef(null),[S,$]=g.useState((M=(C=w.current)==null?void 0:C.offsetWidth)!=null?M:Math.max(0,document.documentElement.offsetWidth-b)),[k]=Ze("ItemWidth",300),D=g.useMemo(()=>Zt(S,k,a),[S,k,a]);return g.useLayoutEffect(()=>{let y;const T=R=>{y=setTimeout(()=>{if(document.body.style.overflow.includes("hidden")){T(250);return}document.body.style.overflowY=a===P.List?"auto":"scroll"},R)};return T(0),()=>{clearTimeout(y)}},[a]),g.useLayoutEffect(()=>()=>{document.body.style.overflowY="auto"},[]),se(w,g.useCallback(()=>{$((()=>{var R;const T=(R=w.current)==null?void 0:R.offsetWidth;return T||document.documentElement.offsetWidth-b})())},[b])),se(j,g.useCallback((y,T)=>{const R=y[0].target.clientHeight,G=R>document.documentElement.clientHeight;if(!n&&R){if(G){T.disconnect();return}s(),T.disconnect()}},[j,s,n])),!n&&e.length===0?t.jsx(Qe,{noFaces:d,message:o!=null?o:f("manga.error.label.no_mangas_found"),messageExtra:r,retry:x}):t.jsx("div",{ref:w,style:{overflow:"hidden",paddingBottom:"13px"},children:u?t.jsx(Qt,{ref:j,isLoading:n,mangas:e,inLibraryIndicator:c,GridItemContainer:D,gridLayout:a,isSelectModeActive:l,selectedMangaIds:h,handleSelection:m,mode:p}):t.jsx(Jt,{ref:j,isLoading:n,mangas:e,inLibraryIndicator:c,GridItemContainer:D,hasNextPage:i,loadMore:s,gridLayout:a,isSelectModeActive:l,selectedMangaIds:h,handleSelection:m,mode:p})})};export{jn as M,Lt as a,Yt as b,Xt as g};
