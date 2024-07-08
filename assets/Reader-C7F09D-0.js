import{c as r,j as t,B as F,a as H,af as z,r as se,i as oe,w as Ct,a4 as wt,ag as Rt,a2 as Ce,ah as bt,ai as Et,aj as qe,s as J,I as Q,u as nt,e as at,ak as st,al as yt,am as Pt,f as re,T as Lt,an as St,V as Dt,ao as jt,Q as Ve,ap as Tt,W as kt,aq as _t,ar as Xe,p as Ke,N as Ot,m as Ue,h as X,Y as Nt,E as Ge,as as At}from"./index-DUjAQRrY.js";import{b as K,C as L}from"./Chapters-C1zX7iUp.js";import{P as de,i as It,R as $t,u as Wt,g as Ye,c as Mt}from"./ReaderSettingsOptions-CkPx_E_O.js";import{S as Ze}from"./SpinnerImage-Cxhh8Fbn.js";import{S as Qe}from"./Select-V1jjceNI.js";import{C as Ft}from"./Collapse-WVnVXI5x.js";import{a as Je}from"./TextField-DKipAuXv.js";import{u as zt}from"./useDebounce-tlnskwnD.js";import"./NumberSetting-Bck_MzZM.js";import"./Info-B8LFsl9T.js";import"./InputAdornment-DpFtP99e.js";import"./Switch-qElWw6du.js";import"./SwitchBase-D_MNPrjx.js";const Ht=i=>{for(let n=0;n<i.children.length;n++){const o=i.children.item(n);if(o){const{left:p,right:l}=o.getBoundingClientRect();if(p<=window.innerWidth/2&&l>window.innerWidth/2)return n}}return-1},Bt=5,qt=()=>window.innerWidth+window.scrollX>=document.body.scrollWidth-Bt,Vt=()=>window.scrollX<=0;function Xt(i){const{pages:n,curPage:o,initialPage:p,settings:l,setCurPage:s,prevChapter:d,nextChapter:m}=i,g=r.useRef(p),u=r.useRef(null),x=r.useRef([]);function S(){var f;o<n.length-1?((f=x.current[o+1])==null||f.scrollIntoView({inline:"center"}),s(e=>e+1)):l.loadNextOnEnding&&m()}function h(){var f;o>0?((f=x.current[o-1])==null||f.scrollIntoView({inline:"center"}),s(o-1)):o===0&&d()}function P(){l.readerType==="ContinuesHorizontalLTR"?h():S()}function D(){l.readerType==="ContinuesHorizontalLTR"?S():h()}const E=r.useRef(0);function c(f){window.scrollBy(E.current-f.pageX,0)}function a(f){var e;E.current=f.pageX,(e=u.current)==null||e.addEventListener("mousemove",c)}function b(){var f;(f=u.current)==null||f.removeEventListener("mousemove",c)}function k(f){f.clientX>=window.innerWidth*.85?D():f.clientX<=window.innerWidth*.15&&P()}const O=()=>{l.readerType==="ContinuesHorizontalLTR"?window.scrollX+window.innerWidth>=document.body.scrollWidth&&m():l.readerType==="ContinuesHorizontalRTL"&&window.scrollX<=window.innerWidth&&m()};return r.useLayoutEffect(()=>{const f=x.current[p];if(!f)return()=>{};const e=new ResizeObserver(()=>{f.offsetHeight&&(f.scrollIntoView({inline:"center"}),e.disconnect())});return e.observe(f),()=>e.disconnect()},[p]),r.useEffect(()=>{var f,e;return(f=u.current)==null||f.addEventListener("mousedown",a),(e=u.current)==null||e.addEventListener("mouseup",b),()=>{var v,I;(v=u.current)==null||v.removeEventListener("mousedown",a),(I=u.current)==null||I.removeEventListener("mouseup",b)}},[u]),r.useEffect(()=>(l.loadNextOnEnding&&document.addEventListener("scroll",O),()=>{document.removeEventListener("scroll",O)}),[u,o,d,m]),r.useEffect(()=>{const f=()=>{if(!u.current)return;const e=Ht(u.current);e!==g.current&&(g.current=e,s(e)),(l.readerType==="ContinuesHorizontalLTR"?qt():Vt())&&(g.current=n.length-1,s(g.current))};return window.addEventListener("scroll",f),()=>window.removeEventListener("scroll",f)},[l.readerType]),t.jsx(F,{ref:u,sx:{display:"flex",flexDirection:l.readerType==="ContinuesHorizontalLTR"?"row":"row-reverse",justifyContent:l.readerType==="ContinuesHorizontalLTR"?"flex-start":"flex-end",width:"auto",height:"auto",overflowX:"visible",userSelect:"none"},onClick:k,children:n.map(f=>t.jsx(de,{index:f.index,src:f.src,onImageLoad:()=>{},settings:l,ref:e=>{x.current[f.index]=e}},f.index))})}function Kt(i){const{settings:n,curPage:o,pageCount:p}=i;return t.jsx(F,{sx:{display:n.showPageNumber?"block":"none",position:"fixed",bottom:"50px",padding:"2px",paddingLeft:"4px",paddingRight:"4px",textAlign:"center",backgroundColor:"rgba(0, 0, 0, 0.3)",borderRadius:"10px"},children:"".concat(o+1," / ").concat(p)})}function Ut(i){const{pages:n,settings:o,setCurPage:p,initialPage:l,curPage:s,nextChapter:d,prevChapter:m,chapter:g}=i,u=r.useRef(null);r.useEffect(()=>{const a=n.map(b=>{const k=H.requestImage(b.src);return k.response.catch(()=>{}),k});return()=>{a.forEach(b=>b.abortRequest(new Error("PagedPager::preload: chapter changed")))}},[g.id]);const x=a=>{p(a),window.scroll({top:0})};function S(){s<n.length-1?x(s+1):o.loadNextOnEnding&&d()}function h(){s>0?x(s-1):m()}function P(){o.readerType==="SingleLTR"?h():o.readerType==="SingleRTL"&&S()}function D(){o.readerType==="SingleLTR"?S():o.readerType==="SingleRTL"&&h()}function E(a){switch(a.key){case"Space":a.preventDefault(),S();break;case"ArrowRight":D();break;case"ArrowLeft":P();break}}function c(a){a.clientX>window.innerWidth/2?D():P()}return r.useEffect(()=>(document.addEventListener("keydown",E),()=>{document.removeEventListener("keydown",E)}),[u,s,o.readerType,m,d]),r.useEffect(()=>{setTimeout(()=>{x(l)},0)},[l]),t.jsx(F,{ref:u,sx:{display:"flex",flexDirection:"column",justifyContent:"center",width:"auto",height:"auto"},onClick:c,children:t.jsx(de,{index:s,onImageLoad:()=>{},src:n[s].src,settings:o},s)})}const Gt=r.forwardRef((i,n)=>{const{image1src:o,image2src:p,index:l,onImageLoad:s,settings:d}=i,m=It(d),g={...m,width:d.fitPageToWindow?m.width:"calc(".concat(m.width," * 0.5)"),minWidth:d.fitPageToWindow&&d.scalePage?"calc(".concat(m.minWidth," * 0.5)"):m.minWidth,maxWidth:d.fitPageToWindow?"calc(".concat(m.maxWidth," * 0.5)"):m.maxWidth},u={...g,height:"100vh",width:"50%",backgroundColor:"#525252"};return t.jsxs(F,{ref:n,sx:{display:"flex",flexDirection:d.readerType==="DoubleLTR"?"row":"row-reverse",justifyContent:"center",width:"100%"},children:[t.jsx(Ze,{src:o,onImageLoad:s,alt:"Page #".concat(l),spinnerStyle:u,imgStyle:{...g,objectPosition:d.readerType==="DoubleLTR"?z("right","left"):z("left","right")}}),t.jsx(Ze,{src:p,onImageLoad:s,alt:"Page #".concat(l+1),spinnerStyle:{...u,width:"calc(50% - 5px)",marginLeft:"5px"},imgStyle:{...g,objectPosition:d.readerType==="DoubleLTR"?z("left","right"):z("right","left")}})]})}),Yt=i=>i.height/i.width<1,we=(i,n,o)=>{if(n[i]||n[i+1]||i===n.length-1)return!0;const p=n.lastIndexOf(!0,i-1),l=i-(p+1);return o?l%2===0:l%2===1};function Zt(i){const{pages:n,settings:o,setCurPage:p,initialPage:l,curPage:s,chapter:d,nextChapter:m,prevChapter:g}=i,u=r.useRef(null),[x,S]=r.useState(Array(n.length).fill(!1)),[h,P]=r.useState(Array(n.length).fill(!1));function D(){let e=1;if(s<n.length&&h[s]&&(e=1,x[s]))return e;if(s+1<n.length&&h[s+1]){if(we(s,x,o.offsetFirstPage))return e;e=2}return e}function E(){return we(s-2,x,o.offsetFirstPage)?1:2}function c(){if(s<n.length-1){const e=s+D();p(e>=n.length?n.length-1:e)}else o.loadNextOnEnding&&m()}function a(){if(s>0){const e=s-E();p(e<0?0:e)}else g()}function b(){o.readerType==="DoubleLTR"?a():c()}function k(){o.readerType==="DoubleLTR"?c():a()}function O(e){switch(e.key){case"Space":e.preventDefault(),c();break;case"ArrowRight":k();break;case"ArrowLeft":b();break}}function f(e){e.clientX>window.innerWidth/2?k():b()}return r.useEffect(()=>(document.addEventListener("keydown",O),()=>{document.removeEventListener("keydown",O)}),[u,s,o.readerType,g,m,h,x]),r.useEffect(()=>{p(l)},[l]),r.useEffect(()=>{o.offsetFirstPage?D()===2&&p(s+1):s>0&&!we(s-1,x,o.offsetFirstPage)&&p(s-1)},[o.offsetFirstPage]),r.useEffect(()=>{const e=n.map(v=>[v.index,H.requestImage(v.src)]);return e.forEach(async([v,I])=>{try{const A=await I.response,$=new Image;$.onload=()=>{URL.revokeObjectURL(A),P(N=>N.toSpliced(v,1,!0)),S(N=>N.toSpliced(v,1,Yt($)))},$.src=A}catch(A){}}),()=>{e.forEach(([v,I])=>I.abortRequest(new Error("DoublePagedPager::preload(".concat(v,"): chapter changed"))))}},[d.id]),t.jsx(F,{ref:u,onClick:f,children:t.jsx(F,{id:"display",sx:{display:"flex",flexDirection:o.readerType==="DoubleLTR"?"row":"row-reverse",justifyContent:"center",width:"auto",height:"auto"},children:D()===2?t.jsx(Gt,{index:s,image1src:n[s].src,image2src:n[s+1].src,settings:o},s):t.jsx(de,{index:s,src:n[s].src,onImageLoad:()=>{},settings:o},s)})})}const Qt=i=>{for(let n=0;n<i.children.length;n++){const o=i.children.item(n);if(o){const{top:p,bottom:l}=o.getBoundingClientRect();if(p<=window.innerHeight&&l>1)return n}}return-1},Jt=5,er=.95,et=.25,tr="smooth",tt=()=>window.innerHeight+window.scrollY>=document.body.offsetHeight-Jt,rr=()=>window.scrollY<=0;function rt(i){const{pages:n,settings:o,setCurPage:p,initialPage:l,nextChapter:s,prevChapter:d}=i,m=r.useRef(l),g=r.useRef(null),u=r.useRef([]);r.useEffect(()=>{let c=!1;const a=()=>{if(g.current)if(tt()){if(c)return;c=!0,m.current=n.length-1,p(m.current),o.loadNextOnEnding&&s()}else{c=!1;const b=Qt(g.current);b!==m.current&&(m.current=b,p(b))}};return window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a)}},[o.loadNextOnEnding,s]);const x=r.useRef(0),S=r.useRef(!1);function h(c){S.current=!0,window.scrollBy(0,x.current-c.pageY)}function P(c){var a;x.current=c.pageY,(a=g.current)==null||a.addEventListener("mousemove",h)}function D(){var c;(c=g.current)==null||c.removeEventListener("mousemove",h)}r.useEffect(()=>{var c,a;return(c=g.current)==null||c.addEventListener("mousedown",P),(a=g.current)==null||a.addEventListener("mouseup",D),()=>{var b,k;(b=g.current)==null||b.removeEventListener("mousedown",P),(k=g.current)==null||k.removeEventListener("mouseup",D)}},[g]);const E=r.useCallback((c,a=er)=>{if(c==="down"&&tt()){s();return}if(c==="up"&&rr()){d();return}window.scroll({top:window.scrollY+window.innerHeight*a*(c==="up"?-1:1),behavior:tr})},[s,d]);return r.useEffect(()=>{const c=a=>{switch(a.key){case"Space":a.preventDefault(),E(a.shiftKey?"up":"down");break;case"ArrowDown":a.preventDefault(),E(a.shiftKey?"up":"down",et);break;case"ArrowRight":a.preventDefault(),E(a.shiftKey?"up":"down");break;case"ArrowUp":a.preventDefault(),E(a.shiftKey?"down":"up",et);break;case"ArrowLeft":a.preventDefault(),E(a.shiftKey?"down":"up");break}};return document.addEventListener("keydown",c,!1),()=>{document.removeEventListener("keydown",c)}},[E]),r.useLayoutEffect(()=>{const c=u.current[l];if(!c)return()=>{};const a=new ResizeObserver(()=>{c.offsetHeight&&(c.scrollIntoView(),a.disconnect())});return a.observe(c),()=>a.disconnect()},[l]),t.jsx(F,{ref:g,sx:{display:"flex",flexDirection:"column",justifyContent:"center",width:"auto",height:"auto",userSelect:"none"},onClick:c=>{if(S.current){S.current=!1;return}E(c.clientX>window.innerWidth/2?"down":"up")},children:n.map(c=>t.jsx(de,{index:c.index,src:c.src,onImageLoad:()=>{},settings:o,ref:a=>{u.current[c.index]=a}},c.index))})}var Re={},nr=oe;Object.defineProperty(Re,"__esModule",{value:!0});var ot=Re.default=void 0,ar=nr(se()),sr=t;ot=Re.default=(0,ar.default)((0,sr.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");var be={},or=oe;Object.defineProperty(be,"__esModule",{value:!0});var ne=be.default=void 0,ir=or(se()),cr=t;ne=be.default=(0,ir.default)((0,cr.jsx)("path",{d:"M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6z"}),"KeyboardArrowLeft");var Ee={},lr=oe;Object.defineProperty(Ee,"__esModule",{value:!0});var ae=Ee.default=void 0,dr=lr(se()),ur=t;ae=Ee.default=(0,dr.default)((0,ur.jsx)("path",{d:"M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z"}),"KeyboardArrowRight");var ye={},fr=oe;Object.defineProperty(ye,"__esModule",{value:!0});var it=ye.default=void 0,pr=fr(se()),gr=t;it=ye.default=(0,pr.default)((0,gr.jsx)("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"}),"KeyboardArrowDown");var Pe={},hr=oe;Object.defineProperty(Pe,"__esModule",{value:!0});var ct=Pe.default=void 0,mr=hr(se()),xr=t;ct=Pe.default=(0,mr.default)((0,xr.jsx)("path",{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"}),"KeyboardArrowUp");const vr=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],Cr={entering:{transform:"none"},entered:{transform:"none"}},wr=r.forwardRef(function(n,o){const p=Ct(),l={enter:p.transitions.duration.enteringScreen,exit:p.transitions.duration.leavingScreen},{addEndListener:s,appear:d=!0,children:m,easing:g,in:u,onEnter:x,onEntered:S,onEntering:h,onExit:P,onExited:D,onExiting:E,style:c,timeout:a=l,TransitionComponent:b=bt}=n,k=wt(n,vr),O=r.useRef(null),f=Rt(O,m.ref,o),e=w=>j=>{if(w){const C=O.current;j===void 0?w(C):w(C,j)}},v=e(h),I=e((w,j)=>{Et(w);const C=qe({style:c,timeout:a,easing:g},{mode:"enter"});w.style.webkitTransition=p.transitions.create("transform",C),w.style.transition=p.transitions.create("transform",C),x&&x(w,j)}),A=e(S),$=e(E),N=e(w=>{const j=qe({style:c,timeout:a,easing:g},{mode:"exit"});w.style.webkitTransition=p.transitions.create("transform",j),w.style.transition=p.transitions.create("transform",j),P&&P(w)}),ee=e(D),B=w=>{s&&s(O.current,w)};return t.jsx(b,Ce({appear:d,in:u,nodeRef:O,onEnter:I,onEntered:A,onEntering:v,onExit:N,onExited:ee,onExiting:$,addEndListener:B,timeout:a},k,{children:(w,j)=>r.cloneElement(m,Ce({style:Ce({transform:"scale(0)",visibility:w==="exited"&&!u?"hidden":void 0},Cr[w],c,m.props.style),ref:f},j))}))}),Rr=wr,br=J("div")({zIndex:10}),Er=J("div")(({theme:i})=>({top:0,left:0,width:"300px",minWidth:"300px",height:"100vh",overflowY:"auto",backgroundColor:i.palette.background.default,"& header":{backgroundColor:i.palette.action.hover,display:"flex",alignItems:"center",minHeight:"64px",paddingLeft:"24px",paddingRight:"24px",transition:"left 2s ease","& button":{flexGrow:0,flexShrink:0},"& button:nth-child(1)":{marginRight:"16px"},"& h1":{fontSize:"1.25rem",flexGrow:1}}})),yr=J("div")({margin:"0 16px","& > span:nth-child(1)":{textAlign:"center",display:"block",marginTop:"16px"}}),Pr=J("div")({display:"flex",flexWrap:"wrap",alignContent:"center",alignItems:"center",justifyContent:"center"}),Lr=J("div")({display:"grid",gridTemplateRows:"auto auto auto",gridTemplateColumns:"0fr 1fr 0fr",gridTemplateAreas:'"pre current next"',gridColumnGap:"5px",margin:"10px 0","& a":{textDecoration:"none",color:"inherit",display:"flex",flexWrap:"wrap",alignContent:"center"}}),Sr=J(Q)(({theme:i})=>({position:"fixed",top:20,left:30,height:"40px",width:"40px",borderRadius:5,backgroundColor:i.palette.custom.main,"&:hover":{backgroundColor:i.palette.custom.light}}));function Dr(i){var j;const{t:n}=nt(),o=at(),p=st(),{prevDrawerOpen:l,prevSettingsCollapseOpen:s}=(j=p.state)!=null?j:{},{settings:d,setSettingValue:m,manga:g,chapter:u,chapters:x,curPage:S,scrollToPage:h,openNextChapter:P,retrievingNextChapter:D}=i,E=yt(),c=r.useMemo(()=>new Set(x.map(({scanlator:C})=>C)).size>1,[x]),[a,b]=r.useState(d.staticNav||l),[k,O]=r.useState(!0),[f,e]=r.useState(d.staticNav||l),[v,I]=r.useState(0),[A,$]=r.useState(s!=null?s:!0),N=D,ee=(C,_,q)=>{O(C!=="staticNav"),m(C,_,q)},B=C=>{b(C),e(C)},w=()=>{const C=window.pageYOffset;Math.abs(C-v)>20&&(e(C>v),I(C))};return r.useEffect(()=>{k&&B(d.staticNav)},[d.staticNav]),r.useEffect(()=>{window.addEventListener("scroll",w);const C=document.querySelector("#root"),_=document.querySelector("#appMainContainer");return C.style.display="flex",C.style.flexDirection="column",_.style.display="none",()=>{C.style.display="block",_.style.display="block",window.removeEventListener("scroll",w)}},[w]),t.jsxs(br,{children:[t.jsx(Pt,{direction:z("right","left"),in:a,timeout:200,appear:!1,mountOnEnter:!0,unmountOnExit:!0,children:t.jsxs(Er,{sx:{position:"fixed"},children:[t.jsxs("header",{children:[!d.staticNav&&t.jsx(re,{title:n("reader.button.close_menu"),children:t.jsx(Q,{edge:"start",color:"inherit","aria-label":"menu",onClick:()=>B(!1),size:"large",children:z(t.jsx(ne,{}),t.jsx(ae,{}))})}),t.jsx(Lt,{variant:"h1",textOverflow:"ellipsis",overflow:"hidden",sx:{py:1},children:u.name}),t.jsx(re,{title:n("reader.button.exit"),children:t.jsx(Q,{edge:"start",color:"inherit","aria-label":"menu",onClick:E,size:"large",sx:{mr:-1},children:t.jsx(ot,{})})})]}),t.jsxs(St,{ContainerComponent:"div",sx:{"& span":{fontWeight:"bold"}},children:[t.jsx(Dt,{primary:n("reader.settings.title.reader_settings")}),t.jsxs(Q,{edge:"start",color:"inherit","aria-label":"menu",disableRipple:!0,disableFocusRipple:!0,onClick:()=>$(!A),size:"large",children:[A&&t.jsx(ct,{}),!A&&t.jsx(it,{})]})]}),t.jsx(Ft,{in:A,timeout:"auto",unmountOnExit:!0,children:t.jsx($t,{setSettingValue:ee,staticNav:d.staticNav,showPageNumber:d.showPageNumber,loadNextOnEnding:d.loadNextOnEnding,skipDupChapters:d.skipDupChapters,fitPageToWindow:d.fitPageToWindow,scalePage:d.scalePage,readerType:d.readerType,offsetFirstPage:d.offsetFirstPage,readerWidth:d.readerWidth})}),t.jsx(jt,{sx:{my:1,mx:2}}),t.jsxs(yr,{children:[t.jsxs(Pr,{children:[t.jsx("span",{children:n("reader.page_info.label.currently_on_page")}),t.jsx(Je,{size:"small",sx:{margin:"0 5px"},disabled:N||u.pageCount===-1,children:t.jsx(Qe,{value:u.pageCount>-1?"".concat(S):"",displayEmpty:!0,onChange:({target:{value:C}})=>{h(Number(C))},children:Array(Math.max(0,u.pageCount)).fill(1).map((C,_)=>t.jsx(Ve,{value:_,children:_+1},"Page#".concat(_)))})}),t.jsx("span",{children:n("reader.page_info.label.of_max_pages",{maxPages:u.pageCount})})]}),t.jsxs(Lr,{children:[t.jsx(re,{title:n("reader.button.previous_chapter"),children:t.jsx(Q,{sx:{gridArea:"pre"},disabled:N||u.sourceOrder<=1,onClick:()=>P(K.PREV),children:z(t.jsx(ne,{}),t.jsx(ae,{}))})}),t.jsx(Je,{sx:{gridArea:"current"},size:"small",disabled:N||u.sourceOrder<1,children:t.jsx(Qe,{value:u.sourceOrder>=1?"".concat(u.sourceOrder):"",displayEmpty:!0,onChange:({target:{value:C}})=>{o("/manga/".concat(g.id,"/chapter/").concat(C),{replace:!0,state:{prevDrawerOpen:a,prevSettingsCollapseOpen:A}})},children:x.map(({id:C,sourceOrder:_,name:q,chapterNumber:ue,scanlator:te})=>t.jsx(Ve,{value:_,children:"#".concat(ue).concat(c&&te!=null?" (".concat(te,")"):""," | ").concat(q)},C))})}),t.jsx(re,{title:n("reader.button.next_chapter"),children:t.jsx(Q,{sx:{gridArea:"next"},disabled:N||u.sourceOrder<1||u.sourceOrder>=g.chapters.totalCount,onClick:()=>P(K.NEXT),children:z(t.jsx(ae,{}),t.jsx(ne,{}))})})]})]})]})}),t.jsx(Rr,{in:!a,children:t.jsx(Tt,{in:!f,children:t.jsx(re,{title:n("reader.button.open_menu"),children:t.jsx(Sr,{edge:"start","aria-label":"menu",disableRipple:!0,disableFocusRipple:!0,onClick:()=>B(!0),size:"large",children:z(t.jsx(ae,{}),t.jsx(ne,{}))})})})})]})}const jr=i=>{switch(i){case"ContinuesVertical":case"Webtoon":return rt;case"SingleVertical":case"SingleRTL":case"SingleLTR":return Ut;case"DoubleVertical":case"DoubleRTL":case"DoubleLTR":return Zt;case"ContinuesHorizontalLTR":case"ContinuesHorizontalRTL":return Xt;default:return rt}},Tr=i=>Array.from({length:i},(n,o)=>o),Z={pageCount:-1,sourceOrder:-1,chapterCount:0,lastPageRead:0,name:"Loading...",manga:{id:-1}};function Vr(){var Ae,Ie,$e,We,Me,Fe,ze,He;const{t:i}=nt(),n=at(),o=st(),{chapterIndex:p,mangaId:l}=kt(),s=r.useMemo(()=>({id:+l,title:"",thumbnailUrl:"",genre:[],inLibraryAt:0,lastReadAt:0,chapters:{totalCount:0},trackRecords:{totalCount:0}}),[l]),{data:d,loading:m,error:g,refetch:u}=H.useGetManga(_t,l),x=r.useRef(null),S=Number(l)===((Ae=x.current)==null?void 0:Ae.mangaId)&&Number(p)===((Ie=x.current)==null?void 0:Ie.sourceOrder)&&(($e=x.current)==null?void 0:$e.pageCount)!==-1,h=(We=d==null?void 0:d.manga)!=null?We:s,{data:P,loading:D,error:E,refetch:c}=H.useGetChapters(Xe,{condition:{mangaId:Number(l),sourceOrder:Number(p)}},{notifyOnNetworkStatusChange:!0}),a=P==null?void 0:P.chapters.nodes[0],b=r.useRef(!1),{settings:{downloadAheadLimit:k}}=Ke(),O=!!k,f=()=>{var M;return x.current&&S?a&&((M=x.current)==null?void 0:M.pageCount)!==a.pageCount?a:x.current:(b.current=!1,a||null)};x.current=f();const e=(Me=x.current)!=null?Me:Z,v=r.useRef(Z);v.current===Z&&(v.current=e),e.mangaId!==((Fe=v.current)==null?void 0:Fe.mangaId)&&(v.current=Z);const[I,{loading:A,error:$}]=H.useGetChapterPagesFetch(e.id),N=()=>{!D&&!e.isDownloaded?I().then(()=>{b.current=!0}).catch(X()):b.current=!0};r.useEffect(()=>{N()},[e.id]);const[ee,B]=r.useState(!1),[w,j]=r.useState(0),C=w===e.pageCount-1,_=zt(w,C?0:1e3),[q,ue]=r.useState(void 0),{setOverride:te,setTitle:Le}=r.useContext(Ot),[Se,De]=r.useState(!1),{data:fe,loading:lt,error:je,refetch:dt}=H.useGetMangaChapters(Xe,l,{nextFetchPolicy:"standby"}),R=fe==null?void 0:fe.chapters.nodes,pe=m||D||lt||A||!b.current&&!E&&!$,Te=(He=(ze=g!=null?g:E)!=null?ze:je)!=null?He:$,{settings:ge,loading:ke}=Wt(),[y,_e]=r.useState(Ye(h,ge)),{settings:ie}=Ke(),Oe=r.useMemo(()=>y.skipDupChapters?L.removeDuplicates(v.current,R!=null?R:[]):R!=null?R:[],[v.current,R,y.skipDupChapters]),ut=r.useMemo(()=>L.getNextChapters(e,R!=null?R:[],{offset:K.PREV,skipDupe:y.skipDupChapters,skipDupeChapter:v.current}),[e,v.current,R,y.skipDupChapters]),ft=r.useMemo(()=>L.getNextChapters(e,R!=null?R:[],{skipDupe:y.skipDupChapters,skipDupeChapter:v.current}),[e,v.current,R,y.skipDupChapters]),ce=r.useMemo(()=>L.getNextChapter(e,R!=null?R:[],{offset:K.PREV,skipDupe:y.skipDupChapters,skipDupeChapter:v.current}),[e,v.current,R,y.skipDupChapters]),U=r.useMemo(()=>L.getNextChapter(e,R!=null?R:[],{skipDupe:y.skipDupChapters,skipDupeChapter:v.current}),[e,v.current,R,y.skipDupChapters]),Ne=T=>{if(e===Z)return;const W=()=>{if(!(!!T.isRead&&!!ie.deleteChaptersWhileReading)||!R)return[];const Y=[e,...ut][ie.deleteChaptersWhileReading-1];if(!Y)return[];const me=L.getFromCache(Y.id);return me.isRead&&L.isDeletable(me,ie.deleteChaptersWithBookmark)?y.skipDupChapters?L.getIds(L.addDuplicates([Y],R)):L.getIds([Y]):[]};(()=>{var xe;const le=L.getFromCache(e.id),Y=((xe=T.lastPageRead)!=null?xe:0)/e.pageCount>.25;if(O&&h.inLibrary&&!!(le!=null&&le.isDownloaded)&&Y){const ve=U?L.getFromCache(U.id):null;if(!(ve!=null&&ve.isDownloaded))return;const Be=L.getNonRead(ft).map(V=>L.getFromCache(V.id)).slice(-k).filter(V=>!V.isDownloaded).map(V=>V.id).filter(V=>!L.isDownloading(V));if(!Be.length)return;L.download(Be).catch(X())}})();const he=y.skipDupChapters?L.getIds(L.addDuplicates([e],R!=null?R:[e])):[e.id];H.updateChapters(he,{...T,chapterIdsToDelete:W(),trackProgressMangaId:ie.updateProgressAfterReading&&T.isRead&&h.trackRecords.totalCount?h.id:void 0},{errorPolicy:"all"}).response.catch(X())},pt=(T,W,M=!0)=>{_e({...y,[T]:W}),M&&At(h,[[T,W]]).catch(()=>Ue(i("reader.settings.error.label.failed_to_save_settings"),"warning"))},G=r.useCallback(T=>{const W=T===K.NEXT,M=W?U:ce;if(!M){Ue(i(W?"reader.error.label.next_chapter_does_not_exist":"reader.error.label.prev_chapter_does_not_exist"),"error");return}De(!0),j(0),n("/manga/".concat(h.id,"/chapter/").concat(M.sourceOrder),{replace:!0,state:o.state}),De(!1)},[h.id,ce==null?void 0:ce.id,U==null?void 0:U.id]);r.useEffect(()=>{if(pe||!e){j(0);return}B(!0),e.lastPageRead===e.pageCount-1?j(0):j(e.lastPageRead)},[e,pe]),r.useEffect(()=>{!(h!=null&&h.title)||e.name===i("global.label.loading")?Le(i("reader.title")):Le("".concat(h.title,": ").concat(e.name))},[i,h,e]),r.useEffect(()=>{!ke&&!m&&(Mt(h,"manga",ge).catch(X()),_e(Ye(h,ge)))},[ke,m]),r.useEffect(()=>(te({status:!0,value:t.jsx(Dr,{settings:y,setSettingValue:pt,manga:h,chapter:e,chapters:Oe,curPage:w,scrollToPage:ue,openNextChapter:G,retrievingNextChapter:Se})}),()=>te({status:!1,value:t.jsx("div",{})})),[h,e,y,w,p,Se,G,Oe]),r.useEffect(()=>{if(!ee||e===Z)return;const T=L.getFromCache(e.id);if(_===(T==null?void 0:T.lastPageRead))return;const W=_!==-1,M=_===e.pageCount-1;(W||M)&&Ne({lastPageRead:W?_:void 0,isRead:M?!0:void 0})},[_,O]);const gt=r.useCallback(()=>{Ne({lastPageRead:e.pageCount-1,isRead:!0}),G(K.NEXT)},[e.pageCount,G,e,h]),ht=r.useCallback(()=>{G(K.PREV)},[G]);if(pe)return t.jsx(F,{sx:{height:"100vh",width:"100vw",display:"grid",placeItems:"center"},children:t.jsx(Nt,{thickness:5})});if(Te)return t.jsx(Ge,{message:i("global.error.label.failed_to_load_data"),messageExtra:Te.message,retry:()=>{g&&u().catch(X()),E&&c().catch(X()),je&&dt().catch(X()),$&&N()}});if(!e.pageCount)return t.jsx(Ge,{message:i("reader.error.label.no_pages_found"),retry:N});const mt=Tr(e.pageCount).map(T=>({index:T,src:H.getChapterPageUrl(l,p,T)})),xt=jr(y.readerType),vt=q!=null?q:e.lastPageRead===e.pageCount-1?0:e.lastPageRead;return t.jsxs(F,{sx:{display:"flex",flexDirection:"column",alignContent:"center",alignItems:"center",justifyContent:"center",minWidth:y.staticNav?"calc((100vw - (100vw - 100%)) - 300px)":"calc(100vw - (100vw - 100%))",minHeight:"100vh",marginLeft:y.staticNav?"300px":"unset"},children:[t.jsx(Kt,{settings:y,curPage:w,pageCount:e.pageCount}),t.jsx(F,{sx:{alignSelf:"stretch"},children:t.jsx(xt,{pages:mt,pageCount:e.pageCount,setCurPage:j,initialPage:vt,curPage:w,settings:y,manga:h,chapter:e,nextChapter:gt,prevChapter:ht},e.id)})]})}export{Vr as Reader};