import{c as r,j as t,B as z,a as B,ab as H,r as se,i as oe,q as xt,a0 as mt,ac as vt,_ as Ce,ad as Ct,ae as wt,af as Be,s as J,I as Z,u as et,e as tt,ag as rt,ah as Rt,ai as bt,f as re,T as yt,aj as Et,O as Pt,ak as Lt,J as qe,al as St,Q as jt,o as Ve,N as Dt,m as Xe,h as V,U as Tt,E as kt,am as _t}from"./index-CrbHiwnJ.js";import{b as X,C as P}from"./Chapters-fV1Kxp25.js";import{P as ue,i as Ot,R as Nt,u as At,g as Ue,c as It}from"./ReaderSettingsOptions-COsRjjt-.js";import{S as Ke}from"./SpinnerImage-BlEl6CTS.js";import{S as Ge}from"./Select-C4Yogjin.js";import{C as $t}from"./Collapse-DFi-ou3-.js";import{a as Ye}from"./TextField-aOMVH-3m.js";import{u as Mt}from"./useDebounce-Cp0jztoQ.js";import"./NumberSetting-CFNS6kqI.js";import"./Info-C8CGaEhJ.js";import"./InputAdornment-Dz-CR9fm.js";import"./Switch-B5Z4d44R.js";import"./SwitchBase-BYwdG6da.js";const Wt=l=>{for(let a=0;a<l.children.length;a++){const i=l.children.item(a);if(i){const{left:p,right:d}=i.getBoundingClientRect();if(p<=window.innerWidth/2&&d>window.innerWidth/2)return a}}return-1},Ft=5,zt=()=>window.innerWidth+window.scrollX>=document.body.scrollWidth-Ft,Ht=()=>window.scrollX<=0;function Bt(l){const{pages:a,curPage:i,initialPage:p,settings:d,setCurPage:o,prevChapter:u,nextChapter:m}=l,g=r.useRef(p),f=r.useRef(null),v=r.useRef([]);function L(){var e;i<a.length-1?((e=v.current[i+1])==null||e.scrollIntoView({inline:"center"}),o(n=>n+1)):d.loadNextOnEnding&&m()}function h(){var e;i>0?((e=v.current[i-1])==null||e.scrollIntoView({inline:"center"}),o(i-1)):i===0&&u()}function R(){d.readerType==="ContinuesHorizontalLTR"?h():L()}function S(){d.readerType==="ContinuesHorizontalLTR"?L():h()}const b=r.useRef(0);function c(e){window.scrollBy(b.current-e.pageX,0)}function s(e){var n;b.current=e.pageX,(n=f.current)==null||n.addEventListener("mousemove",c)}function y(){var e;(e=f.current)==null||e.removeEventListener("mousemove",c)}function D(e){e.clientX>=window.innerWidth*.85?S():e.clientX<=window.innerWidth*.15&&R()}const _=()=>{d.readerType==="ContinuesHorizontalLTR"?window.scrollX+window.innerWidth>=document.body.scrollWidth&&m():d.readerType==="ContinuesHorizontalRTL"&&window.scrollX<=window.innerWidth&&m()};return r.useLayoutEffect(()=>{const e=v.current[p];if(!e)return()=>{};const n=new ResizeObserver(()=>{e.offsetHeight&&(e.scrollIntoView({inline:"center"}),n.disconnect())});return n.observe(e),()=>n.disconnect()},[p]),r.useEffect(()=>{var e,n;return(e=f.current)==null||e.addEventListener("mousedown",s),(n=f.current)==null||n.addEventListener("mouseup",y),()=>{var T,A;(T=f.current)==null||T.removeEventListener("mousedown",s),(A=f.current)==null||A.removeEventListener("mouseup",y)}},[f]),r.useEffect(()=>(d.loadNextOnEnding&&document.addEventListener("scroll",_),()=>{document.removeEventListener("scroll",_)}),[f,i,u,m]),r.useEffect(()=>{const e=()=>{if(!f.current)return;const n=Wt(f.current);n!==g.current&&(g.current=n,o(n)),(d.readerType==="ContinuesHorizontalLTR"?zt():Ht())&&(g.current=a.length-1,o(g.current))};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[d.readerType]),t.jsx(z,{ref:f,sx:{display:"flex",flexDirection:d.readerType==="ContinuesHorizontalLTR"?"row":"row-reverse",justifyContent:d.readerType==="ContinuesHorizontalLTR"?"flex-start":"flex-end",width:"auto",height:"auto",overflowX:"visible",userSelect:"none"},onClick:D,children:a.map(e=>t.jsx(ue,{index:e.index,src:e.src,onImageLoad:()=>{},settings:d,ref:n=>{v.current[e.index]=n}},e.index))})}function qt(l){const{settings:a,curPage:i,pageCount:p}=l;return t.jsx(z,{sx:{display:a.showPageNumber?"block":"none",position:"fixed",bottom:"50px",padding:"2px",paddingLeft:"4px",paddingRight:"4px",textAlign:"center",backgroundColor:"rgba(0, 0, 0, 0.3)",borderRadius:"10px"},children:"".concat(i+1," / ").concat(p)})}function Vt(l){const{pages:a,settings:i,setCurPage:p,initialPage:d,curPage:o,nextChapter:u,prevChapter:m,chapter:g}=l,f=r.useRef(null);r.useEffect(()=>{const s=a.map(y=>{const D=B.requestImage(y.src);return D.response.catch(()=>{}),D});return()=>{s.forEach(y=>y.abortRequest(new Error("PagedPager::preload: chapter changed")))}},[g.id]);const v=s=>{p(s),window.scroll({top:0})};function L(){o<a.length-1?v(o+1):i.loadNextOnEnding&&u()}function h(){o>0?v(o-1):m()}function R(){i.readerType==="SingleLTR"?h():i.readerType==="SingleRTL"&&L()}function S(){i.readerType==="SingleLTR"?L():i.readerType==="SingleRTL"&&h()}function b(s){switch(s.key){case"Space":s.preventDefault(),L();break;case"ArrowRight":S();break;case"ArrowLeft":R();break}}function c(s){s.clientX>window.innerWidth/2?S():R()}return r.useEffect(()=>(document.addEventListener("keydown",b),()=>{document.removeEventListener("keydown",b)}),[f,o,i.readerType,m,u]),r.useEffect(()=>{setTimeout(()=>{v(d)},0)},[d]),t.jsx(z,{ref:f,sx:{display:"flex",flexDirection:"column",justifyContent:"center",width:"auto",height:"auto"},onClick:c,children:t.jsx(ue,{index:o,onImageLoad:()=>{},src:a[o].src,settings:i},o)})}const Xt=r.forwardRef((l,a)=>{const{image1src:i,image2src:p,index:d,onImageLoad:o,settings:u}=l,m=Ot(u),g={...m,width:u.fitPageToWindow?m.width:"calc(".concat(m.width," * 0.5)"),minWidth:u.fitPageToWindow&&u.scalePage?"calc(".concat(m.minWidth," * 0.5)"):m.minWidth,maxWidth:u.fitPageToWindow?"calc(".concat(m.maxWidth," * 0.5)"):m.maxWidth},f={...g,height:"100vh",width:"50%",backgroundColor:"#525252"};return t.jsxs(z,{ref:a,sx:{display:"flex",flexDirection:u.readerType==="DoubleLTR"?"row":"row-reverse",justifyContent:"center",width:"100%"},children:[t.jsx(Ke,{src:i,onImageLoad:o,alt:"Page #".concat(d),spinnerStyle:f,imgStyle:{...g,objectPosition:u.readerType==="DoubleLTR"?H("right","left"):H("left","right")}}),t.jsx(Ke,{src:p,onImageLoad:o,alt:"Page #".concat(d+1),spinnerStyle:{...f,width:"calc(50% - 5px)",marginLeft:"5px"},imgStyle:{...g,objectPosition:u.readerType==="DoubleLTR"?H("left","right"):H("right","left")}})]})}),Ut=l=>l.height/l.width<1,we=(l,a,i)=>{if(a[l]||a[l+1]||l===a.length-1)return!0;const p=a.lastIndexOf(!0,l-1),d=l-(p+1);return i?d%2===0:d%2===1};function Kt(l){const{pages:a,settings:i,setCurPage:p,initialPage:d,curPage:o,chapter:u,nextChapter:m,prevChapter:g}=l,f=r.useRef(null),[v,L]=r.useState(Array(a.length).fill(!1)),[h,R]=r.useState(Array(a.length).fill(!1));function S(){let n=1;if(o<a.length&&h[o]&&(n=1,v[o]))return n;if(o+1<a.length&&h[o+1]){if(we(o,v,i.offsetFirstPage))return n;n=2}return n}function b(){return we(o-2,v,i.offsetFirstPage)?1:2}function c(){if(o<a.length-1){const n=o+S();p(n>=a.length?a.length-1:n)}else i.loadNextOnEnding&&m()}function s(){if(o>0){const n=o-b();p(n<0?0:n)}else g()}function y(){i.readerType==="DoubleLTR"?s():c()}function D(){i.readerType==="DoubleLTR"?c():s()}function _(n){switch(n.key){case"Space":n.preventDefault(),c();break;case"ArrowRight":D();break;case"ArrowLeft":y();break}}function e(n){n.clientX>window.innerWidth/2?D():y()}return r.useEffect(()=>(document.addEventListener("keydown",_),()=>{document.removeEventListener("keydown",_)}),[f,o,i.readerType,g,m,h,v]),r.useEffect(()=>{p(d)},[d]),r.useEffect(()=>{i.offsetFirstPage?S()===2&&p(o+1):o>0&&!we(o-1,v,i.offsetFirstPage)&&p(o-1)},[i.offsetFirstPage]),r.useEffect(()=>{const n=a.map(T=>[T.index,B.requestImage(T.src)]);return n.forEach(async([T,A])=>{try{const k=await A.response,F=new Image;F.onload=()=>{URL.revokeObjectURL(k),R(I=>I.toSpliced(T,1,!0)),L(I=>I.toSpliced(T,1,Ut(F)))},F.src=k}catch(k){}}),()=>{n.forEach(([T,A])=>A.abortRequest(new Error("DoublePagedPager::preload(".concat(T,"): chapter changed"))))}},[u.id]),t.jsx(z,{ref:f,onClick:e,children:t.jsx(z,{id:"display",sx:{display:"flex",flexDirection:i.readerType==="DoubleLTR"?"row":"row-reverse",justifyContent:"center",width:"auto",height:"auto"},children:S()===2?t.jsx(Xt,{index:o,image1src:a[o].src,image2src:a[o+1].src,settings:i},o):t.jsx(ue,{index:o,src:a[o].src,onImageLoad:()=>{},settings:i},o)})})}const Gt=l=>{for(let a=0;a<l.children.length;a++){const i=l.children.item(a);if(i){const{top:p,bottom:d}=i.getBoundingClientRect();if(p<=window.innerHeight&&d>1)return a}}return-1},Yt=5,Zt=.95,Ze=.25,Jt="smooth",Je=()=>window.innerHeight+window.scrollY>=document.body.offsetHeight-Yt,Qt=()=>window.scrollY<=0;function Qe(l){const{pages:a,settings:i,setCurPage:p,initialPage:d,nextChapter:o,prevChapter:u}=l,m=r.useRef(d),g=r.useRef(null),f=r.useRef([]);r.useEffect(()=>{let c=!1;const s=()=>{if(g.current)if(Je()){if(c)return;c=!0,m.current=a.length-1,p(m.current),i.loadNextOnEnding&&o()}else{c=!1;const y=Gt(g.current);y!==m.current&&(m.current=y,p(y))}};return window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s)}},[i.loadNextOnEnding,o]);const v=r.useRef(0),L=r.useRef(!1);function h(c){L.current=!0,window.scrollBy(0,v.current-c.pageY)}function R(c){var s;v.current=c.pageY,(s=g.current)==null||s.addEventListener("mousemove",h)}function S(){var c;(c=g.current)==null||c.removeEventListener("mousemove",h)}r.useEffect(()=>{var c,s;return(c=g.current)==null||c.addEventListener("mousedown",R),(s=g.current)==null||s.addEventListener("mouseup",S),()=>{var y,D;(y=g.current)==null||y.removeEventListener("mousedown",R),(D=g.current)==null||D.removeEventListener("mouseup",S)}},[g]);const b=r.useCallback((c,s=Zt)=>{if(c==="down"&&Je()){o();return}if(c==="up"&&Qt()){u();return}window.scroll({top:window.scrollY+window.innerHeight*s*(c==="up"?-1:1),behavior:Jt})},[o,u]);return r.useEffect(()=>{const c=s=>{switch(s.key){case"Space":s.preventDefault(),b(s.shiftKey?"up":"down");break;case"ArrowDown":s.preventDefault(),b(s.shiftKey?"up":"down",Ze);break;case"ArrowRight":s.preventDefault(),b(s.shiftKey?"up":"down");break;case"ArrowUp":s.preventDefault(),b(s.shiftKey?"down":"up",Ze);break;case"ArrowLeft":s.preventDefault(),b(s.shiftKey?"down":"up");break}};return document.addEventListener("keydown",c,!1),()=>{document.removeEventListener("keydown",c)}},[b]),r.useLayoutEffect(()=>{const c=f.current[d];if(!c)return()=>{};const s=new ResizeObserver(()=>{c.offsetHeight&&(c.scrollIntoView(),s.disconnect())});return s.observe(c),()=>s.disconnect()},[d]),t.jsx(z,{ref:g,sx:{display:"flex",flexDirection:"column",justifyContent:"center",width:"auto",height:"auto",userSelect:"none"},onClick:c=>{if(L.current){L.current=!1;return}b(c.clientX>window.innerWidth/2?"down":"up")},children:a.map(c=>t.jsx(ue,{index:c.index,src:c.src,onImageLoad:()=>{},settings:i,ref:s=>{f.current[c.index]=s}},c.index))})}var Re={},er=oe;Object.defineProperty(Re,"__esModule",{value:!0});var nt=Re.default=void 0,tr=er(se()),rr=t;nt=Re.default=(0,tr.default)((0,rr.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");var be={},nr=oe;Object.defineProperty(be,"__esModule",{value:!0});var ne=be.default=void 0,ar=nr(se()),sr=t;ne=be.default=(0,ar.default)((0,sr.jsx)("path",{d:"M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6z"}),"KeyboardArrowLeft");var ye={},or=oe;Object.defineProperty(ye,"__esModule",{value:!0});var ae=ye.default=void 0,ir=or(se()),cr=t;ae=ye.default=(0,ir.default)((0,cr.jsx)("path",{d:"M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z"}),"KeyboardArrowRight");var Ee={},lr=oe;Object.defineProperty(Ee,"__esModule",{value:!0});var at=Ee.default=void 0,dr=lr(se()),ur=t;at=Ee.default=(0,dr.default)((0,ur.jsx)("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"}),"KeyboardArrowDown");var Pe={},fr=oe;Object.defineProperty(Pe,"__esModule",{value:!0});var st=Pe.default=void 0,pr=fr(se()),gr=t;st=Pe.default=(0,pr.default)((0,gr.jsx)("path",{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"}),"KeyboardArrowUp");const hr=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],xr={entering:{transform:"none"},entered:{transform:"none"}},mr=r.forwardRef(function(a,i){const p=xt(),d={enter:p.transitions.duration.enteringScreen,exit:p.transitions.duration.leavingScreen},{addEndListener:o,appear:u=!0,children:m,easing:g,in:f,onEnter:v,onEntered:L,onEntering:h,onExit:R,onExited:S,onExiting:b,style:c,timeout:s=d,TransitionComponent:y=Ct}=a,D=mt(a,hr),_=r.useRef(null),e=vt(_,m.ref,i),n=w=>O=>{if(w){const x=_.current;O===void 0?w(x):w(x,O)}},T=n(h),A=n((w,O)=>{wt(w);const x=Be({style:c,timeout:s,easing:g},{mode:"enter"});w.style.webkitTransition=p.transitions.create("transform",x),w.style.transition=p.transitions.create("transform",x),v&&v(w,O)}),k=n(L),F=n(b),I=n(w=>{const O=Be({style:c,timeout:s,easing:g},{mode:"exit"});w.style.webkitTransition=p.transitions.create("transform",O),w.style.transition=p.transitions.create("transform",O),R&&R(w)}),Q=n(S),$=w=>{o&&o(_.current,w)};return t.jsx(y,Ce({appear:u,in:f,nodeRef:_,onEnter:A,onEntered:k,onEntering:T,onExit:I,onExited:Q,onExiting:F,addEndListener:$,timeout:s},D,{children:(w,O)=>r.cloneElement(m,Ce({style:Ce({transform:"scale(0)",visibility:w==="exited"&&!f?"hidden":void 0},xr[w],c,m.props.style),ref:e},O))}))}),vr=mr,Cr=J("div")({zIndex:10}),wr=J("div")(({theme:l})=>({top:0,left:0,width:"300px",minWidth:"300px",height:"100vh",overflowY:"auto",backgroundColor:l.palette.background.default,"& header":{backgroundColor:l.palette.action.hover,display:"flex",alignItems:"center",minHeight:"64px",paddingLeft:"24px",paddingRight:"24px",transition:"left 2s ease","& button":{flexGrow:0,flexShrink:0},"& button:nth-child(1)":{marginRight:"16px"},"& h1":{fontSize:"1.25rem",flexGrow:1}}})),Rr=J("div")({margin:"0 16px","& > span:nth-child(1)":{textAlign:"center",display:"block",marginTop:"16px"}}),br=J("div")({display:"flex",flexWrap:"wrap",alignContent:"center",alignItems:"center",justifyContent:"center"}),yr=J("div")({display:"grid",gridTemplateRows:"auto auto auto",gridTemplateColumns:"0fr 1fr 0fr",gridTemplateAreas:'"pre current next"',gridColumnGap:"5px",margin:"10px 0","& a":{textDecoration:"none",color:"inherit",display:"flex",flexWrap:"wrap",alignContent:"center"}}),Er=J(Z)(({theme:l})=>({position:"fixed",top:20,left:30,height:"40px",width:"40px",borderRadius:5,backgroundColor:l.palette.custom.main,"&:hover":{backgroundColor:l.palette.custom.light}}));function Pr(l){var O;const{t:a}=et(),i=tt(),p=rt(),{prevDrawerOpen:d,prevSettingsCollapseOpen:o}=(O=p.state)!=null?O:{},{settings:u,setSettingValue:m,manga:g,chapter:f,chapters:v,curPage:L,scrollToPage:h,openNextChapter:R,retrievingNextChapter:S}=l,b=Rt(),c=r.useMemo(()=>!!new Set(v.map(({scanlator:x})=>x)).size,[v]),[s,y]=r.useState(u.staticNav||d),[D,_]=r.useState(!0),[e,n]=r.useState(u.staticNav||d),[T,A]=r.useState(0),[k,F]=r.useState(o!=null?o:!0),I=S,Q=(x,N,ee)=>{_(x!=="staticNav"),m(x,N,ee)},$=x=>{y(x),n(x)},w=()=>{const x=window.pageYOffset;Math.abs(x-T)>20&&(n(x>T),A(x))};return r.useEffect(()=>{D&&$(u.staticNav)},[u.staticNav]),r.useEffect(()=>{window.addEventListener("scroll",w);const x=document.querySelector("#root"),N=document.querySelector("#appMainContainer");return x.style.display="flex",x.style.flexDirection="column",N.style.display="none",()=>{x.style.display="block",N.style.display="block",window.removeEventListener("scroll",w)}},[w]),t.jsxs(Cr,{children:[t.jsx(bt,{direction:H("right","left"),in:s,timeout:200,appear:!1,mountOnEnter:!0,unmountOnExit:!0,children:t.jsxs(wr,{sx:{position:"fixed"},children:[t.jsxs("header",{children:[!u.staticNav&&t.jsx(re,{title:a("reader.button.close_menu"),children:t.jsx(Z,{edge:"start",color:"inherit","aria-label":"menu",onClick:()=>$(!1),size:"large",children:H(t.jsx(ne,{}),t.jsx(ae,{}))})}),t.jsx(yt,{variant:"h1",textOverflow:"ellipsis",overflow:"hidden",sx:{py:1},children:f.name}),t.jsx(re,{title:a("reader.button.exit"),children:t.jsx(Z,{edge:"start",color:"inherit","aria-label":"menu",onClick:b,size:"large",sx:{mr:-1},children:t.jsx(nt,{})})})]}),t.jsxs(Et,{ContainerComponent:"div",sx:{"& span":{fontWeight:"bold"}},children:[t.jsx(Pt,{primary:a("reader.settings.title.reader_settings")}),t.jsxs(Z,{edge:"start",color:"inherit","aria-label":"menu",disableRipple:!0,disableFocusRipple:!0,onClick:()=>F(!k),size:"large",children:[k&&t.jsx(st,{}),!k&&t.jsx(at,{})]})]}),t.jsx($t,{in:k,timeout:"auto",unmountOnExit:!0,children:t.jsx(Nt,{setSettingValue:Q,staticNav:u.staticNav,showPageNumber:u.showPageNumber,loadNextOnEnding:u.loadNextOnEnding,skipDupChapters:u.skipDupChapters,fitPageToWindow:u.fitPageToWindow,scalePage:u.scalePage,readerType:u.readerType,offsetFirstPage:u.offsetFirstPage,readerWidth:u.readerWidth})}),t.jsx(Lt,{sx:{my:1,mx:2}}),t.jsxs(Rr,{children:[t.jsxs(br,{children:[t.jsx("span",{children:a("reader.page_info.label.currently_on_page")}),t.jsx(Ye,{size:"small",sx:{margin:"0 5px"},disabled:I||f.pageCount===-1,children:t.jsx(Ge,{value:f.pageCount>-1?"".concat(L):"",displayEmpty:!0,onChange:({target:{value:x}})=>{h(Number(x))},children:Array(Math.max(0,f.pageCount)).fill(1).map((x,N)=>t.jsx(qe,{value:N,children:N+1},"Page#".concat(N)))})}),t.jsx("span",{children:a("reader.page_info.label.of_max_pages",{maxPages:f.pageCount})})]}),t.jsxs(yr,{children:[t.jsx(re,{title:a("reader.button.previous_chapter"),children:t.jsx(Z,{sx:{gridArea:"pre"},disabled:I||f.sourceOrder<=1,onClick:()=>R(X.PREV),children:H(t.jsx(ne,{}),t.jsx(ae,{}))})}),t.jsx(Ye,{sx:{gridArea:"current"},size:"small",disabled:I||f.sourceOrder<1,children:t.jsx(Ge,{value:f.sourceOrder>=1?"".concat(f.sourceOrder):"",displayEmpty:!0,onChange:({target:{value:x}})=>{i("/manga/".concat(g.id,"/chapter/").concat(x),{replace:!0,state:{prevDrawerOpen:s,prevSettingsCollapseOpen:k}})},children:v.map(({id:x,sourceOrder:N,name:ee,chapterNumber:ie,scanlator:te})=>t.jsx(qe,{value:N,children:"#".concat(ie).concat(c&&te!=null?" (".concat(te,")"):""," | ").concat(ee)},x))})}),t.jsx(re,{title:a("reader.button.next_chapter"),children:t.jsx(Z,{sx:{gridArea:"next"},disabled:I||f.sourceOrder<1||f.sourceOrder>=g.chapters.totalCount,onClick:()=>R(X.NEXT),children:H(t.jsx(ae,{}),t.jsx(ne,{}))})})]})]})]})}),t.jsx(vr,{in:!s,children:t.jsx(St,{in:!e,children:t.jsx(re,{title:a("reader.button.open_menu"),children:t.jsx(Er,{edge:"start","aria-label":"menu",disableRipple:!0,disableFocusRipple:!0,onClick:()=>$(!0),size:"large",children:H(t.jsx(ae,{}),t.jsx(ne,{}))})})})})]})}const Lr=l=>{switch(l){case"ContinuesVertical":case"Webtoon":return Qe;case"SingleVertical":case"SingleRTL":case"SingleLTR":return Vt;case"DoubleVertical":case"DoubleRTL":case"DoubleLTR":return Kt;case"ContinuesHorizontalLTR":case"ContinuesHorizontalRTL":return Bt;default:return Qe}},Sr=l=>Array.from({length:l},(a,i)=>i),Y={pageCount:-1,sourceOrder:-1,chapterCount:0,lastPageRead:0,name:"Loading...",manga:{id:-1}};function Hr(){var Ne,Ae,Ie,$e,Me,We,Fe,ze;const{t:l}=et(),a=tt(),i=rt(),{chapterIndex:p,mangaId:d}=jt(),o=r.useMemo(()=>({id:+d,title:"",thumbnailUrl:"",genre:[],inLibraryAt:0,lastReadAt:0,chapters:{totalCount:0},trackRecords:{totalCount:0}}),[d]),{data:u,loading:m,error:g,refetch:f}=B.useGetManga(d),v=r.useRef(null),L=Number(d)===((Ne=v.current)==null?void 0:Ne.manga.id)&&Number(p)===((Ae=v.current)==null?void 0:Ae.sourceOrder)&&((Ie=v.current)==null?void 0:Ie.pageCount)!==-1,h=($e=u==null?void 0:u.manga)!=null?$e:o,{data:R,loading:S,error:b,refetch:c}=B.useGetMangaChapter(d,p,{notifyOnNetworkStatusChange:!0}),s=r.useRef(!1),{settings:{downloadAheadLimit:y}}=Ve(),D=!!y,_=()=>{var W;return v.current&&L?(R==null?void 0:R.chapter)&&((W=v.current)==null?void 0:W.pageCount)!==R.chapter.pageCount?R.chapter:v.current:(s.current=!1,R!=null&&R.chapter?R.chapter:null)};v.current=_();const e=(Me=v.current)!=null?Me:Y,n=r.useRef(Y);n.current===Y&&(n.current=e),e.manga.id!==((We=n.current)==null?void 0:We.manga.id)&&(n.current=Y);const[T,{loading:A,error:k}]=B.useGetChapterPagesFetch(e.id),F=()=>{!S&&!e.isDownloaded?T().then(()=>{s.current=!0}).catch(V()):s.current=!0};r.useEffect(()=>{F()},[e.id]);const[I,Q]=r.useState(!1),[$,w]=r.useState(0),O=$===e.pageCount-1,x=Mt($,O?0:1e3),[N,ee]=r.useState(void 0),{setOverride:ie,setTitle:te}=r.useContext(Dt),[Le,Se]=r.useState(!1),{data:fe,loading:ot,error:je,refetch:it}=B.useGetMangaChapters(d,{nextFetchPolicy:"standby"}),C=fe==null?void 0:fe.chapters.nodes,pe=m||S||ot||A||!s.current&&!b&&!k,De=(ze=(Fe=g!=null?g:b)!=null?Fe:je)!=null?ze:k,{settings:ge,loading:Te}=At(),[E,ke]=r.useState(Ue(h,ge)),{settings:ce}=Ve(),_e=r.useMemo(()=>E.skipDupChapters?P.removeDuplicates(n.current,C!=null?C:[]):C!=null?C:[],[n.current,C,E.skipDupChapters]),ct=r.useMemo(()=>P.getNextChapters(e,C!=null?C:[],{offset:X.PREV,skipDupe:E.skipDupChapters,skipDupeChapter:n.current}),[e,n.current,C,E.skipDupChapters]),lt=r.useMemo(()=>P.getNextChapters(e,C!=null?C:[],{skipDupe:E.skipDupChapters,skipDupeChapter:n.current}),[e,n.current,C,E.skipDupChapters]),le=r.useMemo(()=>P.getNextChapter(e,C!=null?C:[],{offset:X.PREV,skipDupe:E.skipDupChapters,skipDupeChapter:n.current}),[e,n.current,C,E.skipDupChapters]),U=r.useMemo(()=>P.getNextChapter(e,C!=null?C:[],{skipDupe:E.skipDupChapters,skipDupeChapter:n.current}),[e,n.current,C,E.skipDupChapters]),Oe=j=>{if(e===Y)return;const M=()=>{if(!(!!j.isRead&&!!ce.deleteChaptersWhileReading)||!C)return[];const G=[e,...ct][ce.deleteChaptersWhileReading-1];if(!G)return[];const xe=P.getFromCache(G.id);return xe.isRead&&P.isDeletable(xe,ce.deleteChaptersWithBookmark)?E.skipDupChapters?P.getIds(P.addDuplicates([G],C)):P.getIds([G]):[]};(()=>{var me;const de=P.getFromCache(e.id),G=((me=j.lastPageRead)!=null?me:0)/e.pageCount>.25;if(D&&e.manga.inLibrary&&!!(de!=null&&de.isDownloaded)&&G){const ve=U?P.getFromCache(U.id):null;if(!(ve!=null&&ve.isDownloaded))return;const He=P.getNonRead(lt).map(q=>P.getFromCache(q.id)).slice(-y).filter(q=>!q.isDownloaded).map(q=>q.id).filter(q=>!P.isDownloading(q));if(!He.length)return;P.download(He).catch(V())}})();const he=E.skipDupChapters?P.getIds(P.addDuplicates([e],C!=null?C:[e])):[e.id];B.updateChapters(he,{...j,chapterIdsToDelete:M(),trackProgressMangaId:ce.updateProgressAfterReading&&j.isRead&&h.trackRecords.totalCount?h.id:void 0},{errorPolicy:"all"}).response.catch(V())},dt=(j,M,W=!0)=>{ke({...E,[j]:M}),W&&_t(h,[[j,M]]).catch(()=>Xe(l("reader.settings.error.label.failed_to_save_settings"),"warning"))},K=r.useCallback(j=>{const M=j===X.NEXT,W=M?U:le;if(!W){Xe(l(M?"reader.error.label.next_chapter_does_not_exist":"reader.error.label.prev_chapter_does_not_exist"),"error");return}Se(!0),w(0),a("/manga/".concat(h.id,"/chapter/").concat(W.sourceOrder),{replace:!0,state:i.state}),Se(!1)},[h.id,le==null?void 0:le.id,U==null?void 0:U.id]);r.useEffect(()=>{if(pe||!e){w(0);return}Q(!0),e.lastPageRead===e.pageCount-1?w(0):w(e.lastPageRead)},[e,pe]),r.useEffect(()=>{!(h!=null&&h.title)||e.name===l("global.label.loading")?te(l("reader.title")):te("".concat(h.title,": ").concat(e.name))},[l,h,e]),r.useEffect(()=>{!Te&&!m&&(It(h,"manga",ge).catch(V()),ke(Ue(h,ge)))},[Te,m]),r.useEffect(()=>(ie({status:!0,value:t.jsx(Pr,{settings:E,setSettingValue:dt,manga:h,chapter:e,chapters:_e,curPage:$,scrollToPage:ee,openNextChapter:K,retrievingNextChapter:Le})}),()=>ie({status:!1,value:t.jsx("div",{})})),[h,e,E,$,p,Le,K,_e]),r.useEffect(()=>{if(!I||e===Y)return;const j=P.getFromCache(e.id);if(x===(j==null?void 0:j.lastPageRead))return;const M=x!==-1,W=x===e.pageCount-1;(M||W)&&Oe({lastPageRead:M?x:void 0,isRead:W?!0:void 0})},[x,D]);const ut=r.useCallback(()=>{Oe({lastPageRead:e.pageCount-1,isRead:!0}),K(X.NEXT)},[e.pageCount,K,e,h]),ft=r.useCallback(()=>{K(X.PREV)},[K]);if(pe)return t.jsx(z,{sx:{height:"100vh",width:"100vw",display:"grid",placeItems:"center"},children:t.jsx(Tt,{thickness:5})});if(De)return t.jsx(kt,{message:l("global.error.label.failed_to_load_data"),messageExtra:De.message,retry:()=>{g&&f().catch(V()),b&&c().catch(V()),je&&it().catch(V()),k&&F()}});const pt=Sr(e.pageCount).map(j=>({index:j,src:B.getChapterPageUrl(d,p,j)})),gt=Lr(E.readerType),ht=N!=null?N:e.lastPageRead===e.pageCount-1?0:e.lastPageRead;return t.jsxs(z,{sx:{display:"flex",flexDirection:"column",alignContent:"center",alignItems:"center",justifyContent:"center",minWidth:E.staticNav?"calc((100vw - (100vw - 100%)) - 300px)":"calc(100vw - (100vw - 100%))",minHeight:"100vh",marginLeft:E.staticNav?"300px":"unset"},children:[t.jsx(qt,{settings:E,curPage:$,pageCount:e.pageCount}),t.jsx(z,{sx:{alignSelf:"stretch"},children:t.jsx(gt,{pages:pt,pageCount:e.pageCount,setCurPage:w,initialPage:ht,curPage:$,settings:E,manga:h,chapter:e,nextChapter:ut,prevChapter:ft},e.id)})]})}export{Hr as Reader};
