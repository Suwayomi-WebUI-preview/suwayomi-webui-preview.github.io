import{c as r,n as ge,j as t,B,a as V,al as q,r as ce,i as le,y as ot,am as Pt,an as Lt,ao as St,ap as Dt,aq as Ke,s as de,u as it,w as jt,e as ct,ar as lt,as as Tt,at as kt,f as ne,I as ae,T as _t,au as Nt,a0 as Ot,av as At,_ as Ue,aw as It,a1 as $t,ax as Wt,ay as Ge,q as Ye,N as Mt,m as Ze,h as K,a3 as Ht,E as Je,az as Bt,aA as zt}from"./index-iYBf07xu.js";import{b as U,C as _}from"./Chapters-DSSc_dFq.js";import{P as he,i as Ft,R as qt,u as Vt,g as Qe,c as Xt}from"./ReaderSettingsOptions-B9ZVIo7L.js";import{S as et}from"./SpinnerImage-rh6L9MsI.js";import{S as tt}from"./Select-DN5XInwK.js";import{C as Kt}from"./CustomIconButton-DK7vWgoC.js";import{C as Ut}from"./Collapse-pheb8-rs.js";import{a as rt}from"./TextField-Bx_wAbM4.js";import{u as Gt}from"./useDebounce-Bevi9Hm9.js";import"./NumberSetting-DWyeHZNp.js";import"./Info-BglGTkIq.js";import"./InputAdornment-Cx_xsPRn.js";import"./Switch-CQM43pyM.js";import"./SwitchBase-DY6rfPFc.js";const Yt=a=>{for(let n=0;n<a.children.length;n++){const s=a.children.item(n);if(s){const{left:f,right:l}=s.getBoundingClientRect();if(f<=window.innerWidth/2&&l>window.innerWidth/2)return n}}return-1},Zt=5,Jt=()=>window.innerWidth+window.scrollX>=document.body.scrollWidth-Zt,Qt=()=>window.scrollX<=0;function er(a){const{pages:n,curPage:s,initialPage:f,settings:l,setCurPage:i,prevChapter:w,nextChapter:g}=a,p=r.useRef(f),d=r.useRef(null),x=r.useRef([]);function P(){var h;s<n.length-1?((h=x.current[s+1])==null||h.scrollIntoView({inline:"center"}),i(e=>e+1)):l.loadNextOnEnding&&g()}function u(){var h;s>0?((h=x.current[s-1])==null||h.scrollIntoView({inline:"center"}),i(s-1)):s===0&&w()}function E(){l.readerType==="ContinuesHorizontalLTR"?u():P()}function S(){l.readerType==="ContinuesHorizontalLTR"?P():u()}const y=r.useRef(0);function c(h){window.scrollBy(y.current-h.pageX,0)}function o(h){var e;y.current=h.pageX,(e=d.current)==null||e.addEventListener("mousemove",c)}function C(){var h;(h=d.current)==null||h.removeEventListener("mousemove",c)}function D(h){h.clientX>=window.innerWidth*.85?S():h.clientX<=window.innerWidth*.15&&E()}const j=()=>{l.readerType==="ContinuesHorizontalLTR"?window.scrollX+window.innerWidth>=document.body.scrollWidth&&g():l.readerType==="ContinuesHorizontalRTL"&&window.scrollX<=window.innerWidth&&g()};return ge(x.current[f],r.useCallback((h,e)=>{const m=x.current[f];m!=null&&m.offsetHeight&&(m.scrollIntoView({inline:"center"}),e.disconnect())},[x.current[f],f])),r.useEffect(()=>{var h,e;return(h=d.current)==null||h.addEventListener("mousedown",o),(e=d.current)==null||e.addEventListener("mouseup",C),()=>{var m,O;(m=d.current)==null||m.removeEventListener("mousedown",o),(O=d.current)==null||O.removeEventListener("mouseup",C)}},[d]),r.useEffect(()=>(l.loadNextOnEnding&&document.addEventListener("scroll",j),()=>{document.removeEventListener("scroll",j)}),[d,s,w,g]),r.useEffect(()=>{const h=()=>{if(!d.current)return;const e=Yt(d.current);e!==p.current&&(p.current=e,i(e)),(l.readerType==="ContinuesHorizontalLTR"?Jt():Qt())&&(p.current=n.length-1,i(p.current))};return window.addEventListener("scroll",h),()=>window.removeEventListener("scroll",h)},[l.readerType]),t.jsx(B,{ref:d,sx:{display:"flex",flexDirection:l.readerType==="ContinuesHorizontalLTR"?"row":"row-reverse",justifyContent:l.readerType==="ContinuesHorizontalLTR"?"flex-start":"flex-end",width:"auto",height:"auto",overflowX:"visible",userSelect:"none"},onClick:D,children:n.map(h=>t.jsx(he,{index:h.index,src:h.src,onImageLoad:()=>{},settings:l,ref:e=>{x.current[h.index]=e}},h.index))})}function tr(a){const{settings:n,curPage:s,pageCount:f}=a;return t.jsx(B,{sx:{display:n.showPageNumber?"block":"none",position:"fixed",bottom:"50px",padding:"2px",paddingLeft:"4px",paddingRight:"4px",textAlign:"center",backgroundColor:"rgba(0, 0, 0, 0.3)",borderRadius:"10px"},children:"".concat(s+1," / ").concat(f)})}function rr(a){const{pages:n,settings:s,setCurPage:f,initialPage:l,curPage:i,nextChapter:w,prevChapter:g,chapter:p}=a,d=r.useRef(null);r.useEffect(()=>{const o=n.map(C=>{const D=V.requestImage(C.src);return D.response.catch(()=>{}),D});return()=>{o.forEach(C=>C.abortRequest(new Error("PagedPager::preload: chapter changed")))}},[p.id]);const x=o=>{f(o),window.scroll({top:0})};function P(){i<n.length-1?x(i+1):s.loadNextOnEnding&&w()}function u(){i>0?x(i-1):g()}function E(){s.readerType==="SingleLTR"?u():s.readerType==="SingleRTL"&&P()}function S(){s.readerType==="SingleLTR"?P():s.readerType==="SingleRTL"&&u()}function y(o){switch(o.key){case"Space":o.preventDefault(),P();break;case"ArrowRight":S();break;case"ArrowLeft":E();break}}function c(o){o.clientX>window.innerWidth/2?S():E()}return r.useEffect(()=>(document.addEventListener("keydown",y),()=>{document.removeEventListener("keydown",y)}),[d,i,s.readerType,g,w]),r.useEffect(()=>{setTimeout(()=>{x(l)},0)},[l]),t.jsx(B,{ref:d,sx:{display:"flex",flexDirection:"column",justifyContent:"center",width:"auto",height:"auto"},onClick:c,children:t.jsx(he,{index:i,onImageLoad:()=>{},src:n[i].src,settings:s},i)})}const nr=r.forwardRef((a,n)=>{const{image1src:s,image2src:f,index:l,onImageLoad:i,settings:w}=a,g=Ft(w),p={...g,width:w.fitPageToWindow?g.width:"calc(".concat(g.width," * 0.5)"),minWidth:w.fitPageToWindow&&w.scalePage?"calc(".concat(g.minWidth," * 0.5)"):g.minWidth,maxWidth:w.fitPageToWindow?"calc(".concat(g.maxWidth," * 0.5)"):g.maxWidth},d={...p,height:"100vh",width:"50%",backgroundColor:"#525252"};return t.jsxs(B,{ref:n,sx:{display:"flex",flexDirection:w.readerType==="DoubleLTR"?"row":"row-reverse",justifyContent:"center",width:"100%"},children:[t.jsx(et,{src:s,onImageLoad:i,alt:"Page #".concat(l),spinnerStyle:d,imgStyle:{...p,objectPosition:w.readerType==="DoubleLTR"?q("right","left"):q("left","right")}}),t.jsx(et,{src:f,onImageLoad:i,alt:"Page #".concat(l+1),spinnerStyle:{...d,width:"calc(50% - 5px)",marginLeft:"5px"},imgStyle:{...p,objectPosition:w.readerType==="DoubleLTR"?q("left","right"):q("right","left")}})]})}),ar=a=>a.height/a.width<1,Ee=(a,n,s)=>{if(n[a]||n[a+1]||a===n.length-1)return!0;const f=n.lastIndexOf(!0,a-1),l=a-(f+1);return s?l%2===0:l%2===1};function sr(a){const{pages:n,settings:s,setCurPage:f,initialPage:l,curPage:i,chapter:w,nextChapter:g,prevChapter:p}=a,d=r.useRef(null),[x,P]=r.useState(Array(n.length).fill(!1)),[u,E]=r.useState(Array(n.length).fill(!1));function S(){let e=1;if(i<n.length&&u[i]&&(e=1,x[i]))return e;if(i+1<n.length&&u[i+1]){if(Ee(i,x,s.offsetFirstPage))return e;e=2}return e}function y(){return Ee(i-2,x,s.offsetFirstPage)?1:2}function c(){if(i<n.length-1){const e=i+S();f(e>=n.length?n.length-1:e)}else s.loadNextOnEnding&&g()}function o(){if(i>0){const e=i-y();f(e<0?0:e)}else p()}function C(){s.readerType==="DoubleLTR"?o():c()}function D(){s.readerType==="DoubleLTR"?c():o()}function j(e){switch(e.key){case"Space":e.preventDefault(),c();break;case"ArrowRight":D();break;case"ArrowLeft":C();break}}function h(e){e.clientX>window.innerWidth/2?D():C()}return r.useEffect(()=>(document.addEventListener("keydown",j),()=>{document.removeEventListener("keydown",j)}),[d,i,s.readerType,p,g,u,x]),r.useEffect(()=>{f(l)},[l]),r.useEffect(()=>{s.offsetFirstPage?S()===2&&f(i+1):i>0&&!Ee(i-1,x,s.offsetFirstPage)&&f(i-1)},[s.offsetFirstPage]),r.useEffect(()=>{const e=n.map(m=>[m.index,V.requestImage(m.src)]);return e.forEach(async([m,O])=>{try{const H=await O.response,A=new Image;A.onload=()=>{URL.revokeObjectURL(H),E(I=>I.toSpliced(m,1,!0)),P(I=>I.toSpliced(m,1,ar(A)))},A.src=H}catch(H){}}),()=>{e.forEach(([m,O])=>O.abortRequest(new Error("DoublePagedPager::preload(".concat(m,"): chapter changed"))))}},[w.id]),t.jsx(B,{ref:d,onClick:h,children:t.jsx(B,{id:"display",sx:{display:"flex",flexDirection:s.readerType==="DoubleLTR"?"row":"row-reverse",justifyContent:"center",width:"auto",height:"auto"},children:S()===2?t.jsx(nr,{index:i,image1src:n[i].src,image2src:n[i+1].src,settings:s},i):t.jsx(he,{index:i,src:n[i].src,onImageLoad:()=>{},settings:s},i)})})}const or=a=>{for(let n=0;n<a.children.length;n++){const s=a.children.item(n);if(s){const{top:f,bottom:l}=s.getBoundingClientRect();if(f<=window.innerHeight&&l>1)return n}}return-1},ir=5,cr=.95,nt=.25,lr="smooth",at=()=>window.innerHeight+window.scrollY>=document.body.offsetHeight-ir,dr=()=>window.scrollY<=0;function st(a){const{pages:n,settings:s,setCurPage:f,initialPage:l,nextChapter:i,prevChapter:w}=a,g=r.useRef(l),p=r.useRef(null),d=r.useRef([]);r.useEffect(()=>{let c=!1;const o=()=>{if(p.current)if(at()){if(c)return;c=!0,g.current=n.length-1,f(g.current),s.loadNextOnEnding&&i()}else{c=!1;const C=or(p.current);C!==g.current&&(g.current=C,f(C))}};return window.addEventListener("scroll",o),()=>{window.removeEventListener("scroll",o)}},[s.loadNextOnEnding,i]);const x=r.useRef(0),P=r.useRef(!1);function u(c){P.current=!0,window.scrollBy(0,x.current-c.pageY)}function E(c){var o;x.current=c.pageY,(o=p.current)==null||o.addEventListener("mousemove",u)}function S(){var c;(c=p.current)==null||c.removeEventListener("mousemove",u)}r.useEffect(()=>{var c,o;return(c=p.current)==null||c.addEventListener("mousedown",E),(o=p.current)==null||o.addEventListener("mouseup",S),()=>{var C,D;(C=p.current)==null||C.removeEventListener("mousedown",E),(D=p.current)==null||D.removeEventListener("mouseup",S)}},[p]);const y=r.useCallback((c,o=cr)=>{if(c==="down"&&at()){i();return}if(c==="up"&&dr()){w();return}window.scroll({top:window.scrollY+window.innerHeight*o*(c==="up"?-1:1),behavior:lr})},[i,w]);return r.useEffect(()=>{const c=o=>{switch(o.key){case"Space":o.preventDefault(),y(o.shiftKey?"up":"down");break;case"ArrowDown":o.preventDefault(),y(o.shiftKey?"up":"down",nt);break;case"ArrowRight":o.preventDefault(),y(o.shiftKey?"up":"down");break;case"ArrowUp":o.preventDefault(),y(o.shiftKey?"down":"up",nt);break;case"ArrowLeft":o.preventDefault(),y(o.shiftKey?"down":"up");break}};return document.addEventListener("keydown",c,!1),()=>{document.removeEventListener("keydown",c)}},[y]),ge(d.current[l],r.useCallback((c,o)=>{const C=d.current[l];C!=null&&C.offsetHeight&&(C.scrollIntoView(),o.disconnect())},[d.current[l],l])),t.jsx(B,{ref:p,sx:{display:"flex",flexDirection:"column",justifyContent:"center",width:"auto",height:"auto",userSelect:"none"},onClick:c=>{if(P.current){P.current=!1;return}y(c.clientX>window.innerWidth/2?"down":"up")},children:n.map(c=>t.jsx(he,{index:c.index,src:c.src,onImageLoad:()=>{},settings:s,ref:o=>{d.current[c.index]=o}},c.index))})}var Pe={},ur=le;Object.defineProperty(Pe,"__esModule",{value:!0});var dt=Pe.default=void 0,fr=ur(ce()),pr=t;dt=Pe.default=(0,fr.default)((0,pr.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");var Le={},gr=le;Object.defineProperty(Le,"__esModule",{value:!0});var oe=Le.default=void 0,hr=gr(ce()),mr=t;oe=Le.default=(0,hr.default)((0,mr.jsx)("path",{d:"M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6z"}),"KeyboardArrowLeft");var Se={},xr=le;Object.defineProperty(Se,"__esModule",{value:!0});var ie=Se.default=void 0,Cr=xr(ce()),vr=t;ie=Se.default=(0,Cr.default)((0,vr.jsx)("path",{d:"M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z"}),"KeyboardArrowRight");var De={},wr=le;Object.defineProperty(De,"__esModule",{value:!0});var ut=De.default=void 0,Rr=wr(ce()),br=t;ut=De.default=(0,Rr.default)((0,br.jsx)("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"}),"KeyboardArrowDown");var je={},yr=le;Object.defineProperty(je,"__esModule",{value:!0});var ft=je.default=void 0,Er=yr(ce()),Pr=t;ft=je.default=(0,Er.default)((0,Pr.jsx)("path",{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"}),"KeyboardArrowUp");const Lr={entering:{transform:"none"},entered:{transform:"none"}},Sr=r.forwardRef(function(n,s){const f=ot(),l={enter:f.transitions.duration.enteringScreen,exit:f.transitions.duration.leavingScreen},{addEndListener:i,appear:w=!0,children:g,easing:p,in:d,onEnter:x,onEntered:P,onEntering:u,onExit:E,onExited:S,onExiting:y,style:c,timeout:o=l,TransitionComponent:C=St,...D}=n,j=r.useRef(null),h=Pt(j,Lt(g),s),e=v=>T=>{if(v){const $=j.current;T===void 0?v($):v($,T)}},m=e(u),O=e((v,T)=>{Dt(v);const $=Ke({style:c,timeout:o,easing:p},{mode:"enter"});v.style.webkitTransition=f.transitions.create("transform",$),v.style.transition=f.transitions.create("transform",$),x&&x(v,T)}),H=e(P),A=e(y),I=e(v=>{const T=Ke({style:c,timeout:o,easing:p},{mode:"exit"});v.style.webkitTransition=f.transitions.create("transform",T),v.style.transition=f.transitions.create("transform",T),E&&E(v)}),z=e(S),te=v=>{i&&i(j.current,v)};return t.jsx(C,{appear:w,in:d,nodeRef:j,onEnter:O,onEntered:H,onEntering:m,onExit:I,onExited:z,onExiting:A,addEndListener:te,timeout:o,...D,children:(v,T)=>r.cloneElement(g,{style:{transform:"scale(0)",visibility:v==="exited"&&!d?"hidden":void 0,...Lr[v],...c,...g.props.style},ref:h,...T})})}),Dr=de("div")({zIndex:10}),jr=de("div")(({theme:a})=>({position:"fixed",top:0,left:0,minWidth:"240px",maxWidth:"400px",height:"100vh",overflowY:"auto",backgroundColor:a.palette.background.default,"& header":{backgroundColor:a.palette.action.hover,display:"flex",alignItems:"center",padding:"".concat(a.spacing(1)," ").concat(a.spacing(3)),transition:"left 2s ease"}})),Tr=de("div")(({theme:a})=>({margin:"0 ".concat(a.spacing(2))})),kr=de("div")({display:"flex",flexWrap:"wrap",alignContent:"center",alignItems:"center",justifyContent:"center"}),_r=de("div")(({theme:a})=>({display:"grid",gridTemplateRows:"auto auto auto",gridTemplateColumns:"0fr 1fr 0fr",gridTemplateAreas:'"pre current next"',gridColumnGap:a.spacing(.5),margin:"".concat(a.spacing(1)," 0"),"& a":{textDecoration:"none",color:"inherit",display:"flex",flexWrap:"wrap",alignContent:"center"}}));function Nr(a){var G;const{t:n}=it(),{setReaderNavBarWidth:s}=jt(),f=ot(),l=ct(),i=lt(),{prevDrawerOpen:w,prevSettingsCollapseOpen:g}=(G=i.state)!=null?G:{},p=r.useRef(null);ge(p,r.useCallback(()=>{var b;((b=p.current)==null?void 0:b.offsetWidth)!==void 0&&s(p.current.offsetWidth)},[p.current])),r.useLayoutEffect(()=>()=>s(0),[p]);const{settings:d,setSettingValue:x,manga:P,chapter:u,chapters:E,curPage:S,scrollToPage:y,openNextChapter:c,retrievingNextChapter:o}=a,C=Tt(),D=r.useMemo(()=>new Set(E.map(({scanlator:b})=>b)).size>1,[E]),[j,h]=r.useState(d.staticNav||w),[e,m]=r.useState(!0),[O,H]=r.useState(d.staticNav||w),[A,I]=r.useState(0),[z,te]=r.useState(g!=null?g:!0),v=o,T=(b,N,Y)=>{m(b!=="staticNav"),x(b,N,Y)},$=b=>{h(b),H(b)},F=()=>{const b=window.pageYOffset;Math.abs(b-A)>20&&(H(b>A),I(b))};return r.useEffect(()=>{e&&$(d.staticNav)},[d.staticNav]),r.useEffect(()=>{window.addEventListener("scroll",F);const b=document.querySelector("#root"),N=document.querySelector("#appMainContainer");return b.style.display="flex",b.style.flexDirection="column",N.style.display="none",()=>{b.style.display="block",N.style.display="block",window.removeEventListener("scroll",F)}},[F]),t.jsxs(Dr,{children:[t.jsx(kt,{direction:q("right","left"),in:j,timeout:200,appear:!1,mountOnEnter:!0,unmountOnExit:!0,children:t.jsxs(jr,{ref:p,children:[t.jsxs("header",{children:[!d.staticNav&&t.jsx(ne,{title:n("reader.button.close_menu"),children:t.jsx(ae,{edge:"start",color:"inherit","aria-label":"menu",onClick:()=>$(!1),size:"large",children:q(t.jsx(oe,{}),t.jsx(ie,{}))})}),t.jsx(_t,{variant:"h6",component:"h1",sx:{textOverflow:"ellipsis",overflow:"hidden",py:1,flexGrow:1},children:u.name}),t.jsx(ne,{title:n("reader.button.exit"),children:t.jsx(ae,{edge:"start",color:"inherit","aria-label":"menu",onClick:C,size:"large",sx:{mr:-1},children:t.jsx(dt,{})})})]}),t.jsxs(Nt,{ContainerComponent:"div",sx:{"& span":{fontWeight:"bold"}},children:[t.jsx(Ot,{primary:n("reader.settings.title.reader_settings")}),t.jsxs(ae,{edge:"start",color:"inherit","aria-label":"menu",disableRipple:!0,disableFocusRipple:!0,onClick:()=>te(!z),size:"large",children:[z&&t.jsx(ft,{}),!z&&t.jsx(ut,{})]})]}),t.jsx(Ut,{in:z,timeout:"auto",unmountOnExit:!0,children:t.jsx(qt,{setSettingValue:T,staticNav:d.staticNav,showPageNumber:d.showPageNumber,loadNextOnEnding:d.loadNextOnEnding,skipDupChapters:d.skipDupChapters,fitPageToWindow:d.fitPageToWindow,scalePage:d.scalePage,readerType:d.readerType,offsetFirstPage:d.offsetFirstPage,readerWidth:d.readerWidth})}),t.jsx(At,{sx:{my:1,mx:2}}),t.jsxs(Tr,{children:[t.jsxs(kr,{children:[t.jsx("span",{children:n("reader.page_info.label.currently_on_page")}),t.jsx(rt,{size:"small",sx:{mx:.5},disabled:v||u.pageCount===-1,children:t.jsx(tt,{value:u.pageCount>-1?"".concat(S):"",displayEmpty:!0,onChange:({target:{value:b}})=>{y(Number(b))},children:Array(Math.max(0,u.pageCount)).fill(1).map((b,N)=>t.jsx(Ue,{value:N,children:N+1},"Page#".concat(N)))})}),t.jsx("span",{children:n("reader.page_info.label.of_max_pages",{maxPages:u.pageCount})})]}),t.jsxs(_r,{children:[t.jsx(ne,{title:n("reader.button.previous_chapter"),children:t.jsx(ae,{sx:{gridArea:"pre"},disabled:v||u.sourceOrder<=1,onClick:()=>c(U.PREV),children:q(t.jsx(oe,{}),t.jsx(ie,{}))})}),t.jsx(rt,{sx:{gridArea:"current"},size:"small",disabled:v||u.sourceOrder<1,children:t.jsx(tt,{value:u.sourceOrder>=1?"".concat(u.sourceOrder):"",displayEmpty:!0,onChange:({target:{value:b}})=>{l("/manga/".concat(P.id,"/chapter/").concat(b),{replace:!0,state:{prevDrawerOpen:j,prevSettingsCollapseOpen:z}})},children:E.map(({id:b,sourceOrder:N,name:Y,chapterNumber:me,scanlator:re})=>t.jsx(Ue,{value:N,children:"#".concat(me).concat(D&&re!=null?" (".concat(re,")"):""," | ").concat(Y)},b))})}),t.jsx(ne,{title:n("reader.button.next_chapter"),children:t.jsx(ae,{sx:{gridArea:"next"},disabled:v||u.sourceOrder<1||u.sourceOrder>=P.chapters.totalCount,onClick:()=>c(U.NEXT),children:q(t.jsx(ie,{}),t.jsx(oe,{}))})})]})]})]})}),t.jsx(Sr,{in:!j,children:t.jsx(It,{in:!O,children:t.jsx(ne,{title:n("reader.button.open_menu"),children:t.jsx(Kt,{sx:{position:"fixed",top:20,left:20,backgroundColor:"rgba(255, 255, 255, 0.75);",color:"black",...f.applyStyles("dark",{backgroundColor:"rgba(0, 0, 0, 0.75);",color:"white"})},size:"large",variant:"contained",onClick:()=>$(!0),children:q(t.jsx(ie,{}),t.jsx(oe,{}))})})})})]})}const se=a=>_.getFromCache(a,Bt,"CHAPTER_READER_FIELDS"),Or=a=>{switch(a){case"ContinuesVertical":case"Webtoon":return st;case"SingleVertical":case"SingleRTL":case"SingleLTR":return rr;case"DoubleVertical":case"DoubleRTL":case"DoubleLTR":return sr;case"ContinuesHorizontalLTR":case"ContinuesHorizontalRTL":return er;default:return st}},Ar=a=>Array.from({length:a},(n,s)=>s),ee={pageCount:-1,sourceOrder:-1,chapterCount:0,lastPageRead:0,name:"Loading...",manga:{id:-1}};function Zr(){var We,Me,He,Be,ze,Fe,qe,Ve;const{t:a}=it(),n=ct(),s=lt(),{chapterIndex:f,mangaId:l}=$t(),i=r.useMemo(()=>({id:+l,title:"",thumbnailUrl:"",genre:[],inLibraryAt:0,lastReadAt:0,chapters:{totalCount:0},trackRecords:{totalCount:0}}),[l]),{data:w,loading:g,error:p,refetch:d}=V.useGetManga(Wt,l),x=r.useRef(null),P=Number(l)===((We=x.current)==null?void 0:We.mangaId)&&Number(f)===((Me=x.current)==null?void 0:Me.sourceOrder)&&((He=x.current)==null?void 0:He.pageCount)!==-1,u=(Be=w==null?void 0:w.manga)!=null?Be:i,{data:E,loading:S,error:y,refetch:c}=V.useGetChapters(Ge,{condition:{mangaId:Number(l),sourceOrder:Number(f)}},{notifyOnNetworkStatusChange:!0}),o=E==null?void 0:E.chapters.nodes[0],C=r.useRef(!1),{settings:{downloadAheadLimit:D}}=Ye(),j=!!D,h=()=>{var M;return x.current&&P?o&&((M=x.current)==null?void 0:M.pageCount)!==o.pageCount?o:x.current:(C.current=!1,o||null)};x.current=h();const e=(ze=x.current)!=null?ze:ee,m=r.useRef(ee);m.current===ee&&(m.current=e),e.mangaId!==((Fe=m.current)==null?void 0:Fe.mangaId)&&(m.current=ee);const[O,{loading:H,error:A}]=V.useGetChapterPagesFetch(e.id),I=()=>{S||O().then(()=>{C.current=!0}).catch(K())};r.useEffect(()=>{I()},[e.id]);const[z,te]=r.useState(!1),[v,T]=r.useState(0),$=v===e.pageCount-1,F=Gt(v,$?0:1e3),[G,b]=r.useState(void 0),{setOverride:N,setTitle:Y,readerNavBarWidth:me}=r.useContext(Mt),[re,Te]=r.useState(!1),{data:xe,loading:pt,error:ke,refetch:gt}=V.useGetMangaChapters(Ge,l,{nextFetchPolicy:"standby"}),R=xe==null?void 0:xe.chapters.nodes,Ce=g||S||pt||H||!C.current&&!y&&!A,_e=(Ve=(qe=p!=null?p:y)!=null?qe:ke)!=null?Ve:A,{settings:ve,loading:Ne}=Vt(),[L,Oe]=r.useState(Qe(u,ve)),{settings:ue}=Ye(),Ae=r.useMemo(()=>L.skipDupChapters?_.removeDuplicates(m.current,R!=null?R:[]):R!=null?R:[],[m.current,R,L.skipDupChapters]),ht=r.useMemo(()=>_.getNextChapters(e,R!=null?R:[],{offset:U.PREV,skipDupe:L.skipDupChapters,skipDupeChapter:m.current}),[e,m.current,R,L.skipDupChapters]),mt=r.useMemo(()=>_.getNextChapters(e,R!=null?R:[],{skipDupe:L.skipDupChapters,skipDupeChapter:m.current}),[e,m.current,R,L.skipDupChapters]),fe=r.useMemo(()=>_.getNextChapter(e,R!=null?R:[],{offset:U.PREV,skipDupe:L.skipDupChapters,skipDupeChapter:m.current}),[e,m.current,R,L.skipDupChapters]),Z=r.useMemo(()=>_.getNextChapter(e,R!=null?R:[],{skipDupe:L.skipDupChapters,skipDupeChapter:m.current}),[e,m.current,R,L.skipDupChapters]),Ie=k=>{if(e===ee)return;const W=()=>{if(!(!!k.isRead&&!!ue.deleteChaptersWhileReading)||!R)return[];const Q=[e,...ht][ue.deleteChaptersWhileReading-1];if(!Q)return[];const Re=se(Q.id);return Re.isRead&&_.isDeletable(Re,ue.deleteChaptersWithBookmark)?L.skipDupChapters?_.getIds(_.addDuplicates([Q],R)):_.getIds([Q]):[]};(()=>{var be;const pe=se(e.id),Q=((be=k.lastPageRead)!=null?be:0)/e.pageCount>.25;if(j&&u.inLibrary&&!!(pe!=null&&pe.isDownloaded)&&Q){const ye=Z?se(Z.id):null;if(!(ye!=null&&ye.isDownloaded))return;const Xe=_.getNonRead(mt).map(X=>se(X.id)).slice(-D).filter(X=>!X.isDownloaded).map(X=>X.id).filter(X=>!_.isDownloading(X));if(!Xe.length)return;_.download(Xe).catch(K())}})();const we=L.skipDupChapters?_.getIds(_.addDuplicates([e],R!=null?R:[e])):[e.id];V.updateChapters(we,{...k,chapterIdsToDelete:W(),trackProgressMangaId:ue.updateProgressAfterReading&&k.isRead&&u.trackRecords.totalCount?u.id:void 0},{errorPolicy:"all"}).response.catch(K())},xt=(k,W,M=!0)=>{Oe({...L,[k]:W}),M&&zt(u,[[k,W]]).catch(()=>Ze(a("reader.settings.error.label.failed_to_save_settings"),"warning"))},J=r.useCallback(k=>{const W=k===U.NEXT,M=W?Z:fe;if(!M){Ze(a(W?"reader.error.label.next_chapter_does_not_exist":"reader.error.label.prev_chapter_does_not_exist"),"error");return}Te(!0),T(0),n("/manga/".concat(u.id,"/chapter/").concat(M.sourceOrder),{replace:!0,state:s.state}),Te(!1)},[u.id,fe==null?void 0:fe.id,Z==null?void 0:Z.id]);r.useEffect(()=>{if(Ce||!e){T(0);return}te(!0),e.lastPageRead===e.pageCount-1?T(0):T(e.lastPageRead)},[e,Ce]),r.useEffect(()=>{!(u!=null&&u.title)||e.name===a("global.label.loading")?Y(a("reader.title")):Y("".concat(u.title,": ").concat(e.name))},[a,u,e]),r.useEffect(()=>{!Ne&&!g&&(Xt(u,"manga",ve).catch(K()),Oe(Qe(u,ve)))},[Ne,g]),r.useEffect(()=>(N({status:!0,value:t.jsx(Nr,{settings:L,setSettingValue:xt,manga:u,chapter:e,chapters:Ae,curPage:v,scrollToPage:b,openNextChapter:J,retrievingNextChapter:re})}),()=>N({status:!1,value:t.jsx("div",{})})),[u,e,L,v,f,re,J,Ae]),r.useEffect(()=>{if(!z||e===ee)return;const k=se(e.id);if(F===(k==null?void 0:k.lastPageRead))return;const W=F!==-1,M=F===e.pageCount-1;(W||M)&&Ie({lastPageRead:W?F:void 0,isRead:M?!0:void 0})},[F,j]);const Ct=r.useCallback(()=>{Ie({lastPageRead:e.pageCount-1,isRead:!0}),J(U.NEXT)},[e.pageCount,J,e,u]),vt=r.useCallback(()=>{J(U.PREV)},[J]),[wt,Rt]=r.useState(0);if(ge(document.documentElement,r.useCallback(()=>Rt(window.innerHeight-document.documentElement.clientHeight),[])),Ce)return t.jsx(B,{sx:{height:"100vh",width:"100vw",display:"grid",placeItems:"center"},children:t.jsx(Ht,{thickness:5})});if(_e)return t.jsx(Je,{message:a("global.error.label.failed_to_load_data"),messageExtra:_e.message,retry:()=>{p&&d().catch(K()),y&&c().catch(K()),ke&&gt().catch(K()),A&&I()}});if(!e.pageCount)return t.jsx(Je,{message:a("reader.error.label.no_pages_found"),retry:I});const bt=Ar(e.pageCount).map(k=>({index:k,src:V.getChapterPageUrl(l,f,k)})),yt=Or(L.readerType),Et=G!=null?G:e.lastPageRead===e.pageCount-1?0:e.lastPageRead,$e=L.staticNav?me:0;return t.jsxs(B,{sx:{display:"flex",flexDirection:"column",alignContent:"center",alignItems:"center",justifyContent:"center",minWidth:"calc((100vw - (100vw - 100%)) - ".concat($e,"px)"),minHeight:"calc(100vh - ".concat(wt,"px)"),marginLeft:"".concat($e,"px")},children:[t.jsx(tr,{settings:L,curPage:v,pageCount:e.pageCount}),t.jsx(B,{sx:{alignSelf:"stretch"},children:t.jsx(yt,{pages:bt,pageCount:e.pageCount,setCurPage:T,initialPage:Et,curPage:v,settings:L,manga:u,chapter:e,nextChapter:Ct,prevChapter:vt},e.id)})]})}export{Zr as Reader};
