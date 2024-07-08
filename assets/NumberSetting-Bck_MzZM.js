import{c as h,cc as Tt,cd as lt,ce as $t,cf as Ze,cg as Te,ch as Je,a2 as p,ci as $e,_ as _t,$ as It,a5 as fe,j as u,s as se,a1 as te,bz as it,bA as ut,by as ct,cj as ht,ab as Rt,a4 as At,ac as ee,bB as Et,a6 as jt,u as Nt,aC as Mt,U as Vt,V as zt,H as Ft,av as Dt,au as Ot,aZ as Ht,T as dt,S as Bt,aw as Kt,b as Qe}from"./index-DUjAQRrY.js";import{d as Yt}from"./Info-B8LFsl9T.js";import{T as Xt}from"./TextField-DKipAuXv.js";import{I as Ut}from"./InputAdornment-DpFtP99e.js";function Wt({controlled:e,default:t,name:r,state:n="value"}){const{current:l}=h.useRef(e!==void 0),[k,g]=h.useState(t),b=l?e:k,m=h.useCallback(A=>{l||g(A)},[]);return[b,m]}let Ie=!0,tt=!1;const qt=new Tt,Gt={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function Zt(e){const{type:t,tagName:r}=e;return!!(r==="INPUT"&&Gt[t]&&!e.readOnly||r==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function Jt(e){e.metaKey||e.altKey||e.ctrlKey||(Ie=!0)}function et(){Ie=!1}function Qt(){this.visibilityState==="hidden"&&tt&&(Ie=!0)}function er(e){e.addEventListener("keydown",Jt,!0),e.addEventListener("mousedown",et,!0),e.addEventListener("pointerdown",et,!0),e.addEventListener("touchstart",et,!0),e.addEventListener("visibilitychange",Qt,!0)}function tr(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch(r){}return Ie||Zt(t)}function rr(){const e=h.useCallback(l=>{l!=null&&er(l.ownerDocument)},[]),t=h.useRef(!1);function r(){return t.current?(tt=!0,qt.start(100,()=>{tt=!1}),t.current=!1,!0):!1}function n(l){return tr(l)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:n,onBlur:r,ref:e}}const ar={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"},or=ar;function he(e,t=Number.MIN_SAFE_INTEGER,r=Number.MAX_SAFE_INTEGER){return Math.max(t,Math.min(e,r))}function nr(e,t,r=(n,l)=>n===l){return e.length===t.length&&e.every((n,l)=>r(n,t[l]))}const sr=2;function vt(e,t){return e-t}function pt(e,t){var r;const{index:n}=(r=e.reduce((l,k,g)=>{const b=Math.abs(t-k);return l===null||b<l.distance||b===l.distance?{distance:b,index:g}:l},null))!=null?r:{};return n}function we(e,t){if(t.current!==void 0&&e.changedTouches){const r=e;for(let n=0;n<r.changedTouches.length;n+=1){const l=r.changedTouches[n];if(l.identifier===t.current)return{x:l.clientX,y:l.clientY}}return!1}return{x:e.clientX,y:e.clientY}}function _e(e,t,r){return(e-t)*100/(r-t)}function lr(e,t,r){return(r-t)*e+t}function ir(e){if(Math.abs(e)<1){const r=e.toExponential().split("e-"),n=r[0].split(".")[1];return(n?n.length:0)+parseInt(r[1],10)}const t=e.toString().split(".")[1];return t?t.length:0}function ur(e,t,r){const n=Math.round((e-r)/t)*t+r;return Number(n.toFixed(ir(t)))}function ft({values:e,newValue:t,index:r}){const n=e.slice();return n[r]=t,n.sort(vt)}function Le({sliderRef:e,activeIndex:t,setActive:r}){var n,l;const k=Te(e.current);if(!((n=e.current)!=null&&n.contains(k.activeElement))||Number(k==null||(l=k.activeElement)==null?void 0:l.getAttribute("data-index"))!==t){var g;(g=e.current)==null||g.querySelector('[type="range"][data-index="'.concat(t,'"]')).focus()}r&&r(t)}function Ce(e,t){return typeof e=="number"&&typeof t=="number"?e===t:typeof e=="object"&&typeof t=="object"?nr(e,t):!1}const cr={horizontal:{offset:e=>({left:"".concat(e,"%")}),leap:e=>({width:"".concat(e,"%")})},"horizontal-reverse":{offset:e=>({right:"".concat(e,"%")}),leap:e=>({width:"".concat(e,"%")})},vertical:{offset:e=>({bottom:"".concat(e,"%")}),leap:e=>({height:"".concat(e,"%")})}},dr=e=>e;let Pe;function mt(){return Pe===void 0&&(typeof CSS<"u"&&typeof CSS.supports=="function"?Pe=CSS.supports("touch-action","none"):Pe=!0),Pe}function pr(e){const{"aria-labelledby":t,defaultValue:r,disabled:n=!1,disableSwap:l=!1,isRtl:k=!1,marks:g=!1,max:b=100,min:m=0,name:A,onChange:re,onChangeCommitted:X,orientation:V="horizontal",rootRef:le,scale:ae=dr,step:T=1,shiftStep:oe=10,tabIndex:G,value:ie}=e,$=h.useRef(),[E,z]=h.useState(-1),[K,j]=h.useState(-1),[F,Z]=h.useState(!1),U=h.useRef(0),[R,_]=Wt({controlled:ie,default:r!=null?r:m,name:"Slider"}),C=re&&((a,o,s)=>{const c=a.nativeEvent||a,d=new c.constructor(c.type,c);Object.defineProperty(d,"target",{writable:!0,value:{value:o,name:A}}),re(d,o,s)}),J=Array.isArray(R);let w=J?R.slice().sort(vt):[R];w=w.map(a=>a==null?m:he(a,m,b));const me=g===!0&&T!==null?[...Array(Math.floor((b-m)/T)+1)].map((a,o)=>({value:m+T*o})):g||[],S=me.map(a=>a.value),{isFocusVisibleRef:D,onBlur:Re,onFocus:Ae,ref:Ee}=rr(),[ve,ne]=h.useState(-1),I=h.useRef(),ge=lt(Ee,I),ye=lt(le,ge),ue=a=>o=>{var s;const c=Number(o.currentTarget.getAttribute("data-index"));Ae(o),D.current===!0&&ne(c),j(c),a==null||(s=a.onFocus)==null||s.call(a,o)},ce=a=>o=>{var s;Re(o),D.current===!1&&ne(-1),j(-1),a==null||(s=a.onBlur)==null||s.call(a,o)},xe=(a,o)=>{const s=Number(a.currentTarget.getAttribute("data-index")),c=w[s],d=S.indexOf(c);let i=o;if(me&&T==null){const B=S[S.length-1];i>B?i=B:i<S[0]?i=S[0]:i=i<c?S[d-1]:S[d+1]}if(i=he(i,m,b),J){l&&(i=he(i,w[s-1]||-1/0,w[s+1]||1/0));const B=i;i=ft({values:w,newValue:i,index:s});let Y=s;l||(Y=i.indexOf(B)),Le({sliderRef:I,activeIndex:Y})}_(i),ne(s),C&&!Ce(i,R)&&C(a,i,s),X&&X(a,i)},je=a=>o=>{var s;if(T!==null){const c=Number(o.currentTarget.getAttribute("data-index")),d=w[c];let i=null;(o.key==="ArrowLeft"||o.key==="ArrowDown")&&o.shiftKey||o.key==="PageDown"?i=Math.max(d-oe,m):((o.key==="ArrowRight"||o.key==="ArrowUp")&&o.shiftKey||o.key==="PageUp")&&(i=Math.min(d+oe,b)),i!==null&&(xe(o,i),o.preventDefault())}a==null||(s=a.onKeyDown)==null||s.call(a,o)};$t(()=>{if(n&&I.current.contains(document.activeElement)){var a;(a=document.activeElement)==null||a.blur()}},[n]),n&&E!==-1&&z(-1),n&&ve!==-1&&ne(-1);const Ne=a=>o=>{var s;(s=a.onChange)==null||s.call(a,o),xe(o,o.target.valueAsNumber)},ke=h.useRef();let W=V;k&&V==="horizontal"&&(W+="-reverse");const y=({finger:a,move:o=!1})=>{const{current:s}=I,{width:c,height:d,bottom:i,left:B}=s.getBoundingClientRect();let Y;W.indexOf("vertical")===0?Y=(i-a.y)/d:Y=(a.x-B)/c,W.indexOf("-reverse")!==-1&&(Y=1-Y);let f;if(f=lr(Y,m,b),T)f=ur(f,T,m);else{const pe=pt(S,f);f=S[pe]}f=he(f,m,b);let N=0;if(J){o?N=ke.current:N=pt(w,f),l&&(f=he(f,w[N-1]||-1/0,w[N+1]||1/0));const pe=f;f=ft({values:w,newValue:f,index:N}),l&&o||(N=f.indexOf(pe),ke.current=N)}return{newValue:f,activeIndex:N}},v=Ze(a=>{const o=we(a,$);if(!o)return;if(U.current+=1,a.type==="mousemove"&&a.buttons===0){O(a);return}const{newValue:s,activeIndex:c}=y({finger:o,move:!0});Le({sliderRef:I,activeIndex:c,setActive:z}),_(s),!F&&U.current>sr&&Z(!0),C&&!Ce(s,R)&&C(a,s,c)}),O=Ze(a=>{const o=we(a,$);if(Z(!1),!o)return;const{newValue:s}=y({finger:o,move:!0});z(-1),a.type==="touchend"&&j(-1),X&&X(a,s),$.current=void 0,H()}),Q=Ze(a=>{if(n)return;mt()||a.preventDefault();const o=a.changedTouches[0];o!=null&&($.current=o.identifier);const s=we(a,$);if(s!==!1){const{newValue:d,activeIndex:i}=y({finger:s});Le({sliderRef:I,activeIndex:i,setActive:z}),_(d),C&&!Ce(d,R)&&C(a,d,i)}U.current=0;const c=Te(I.current);c.addEventListener("touchmove",v,{passive:!0}),c.addEventListener("touchend",O,{passive:!0})}),H=h.useCallback(()=>{const a=Te(I.current);a.removeEventListener("mousemove",v),a.removeEventListener("mouseup",O),a.removeEventListener("touchmove",v),a.removeEventListener("touchend",O)},[O,v]);h.useEffect(()=>{const{current:a}=I;return a.addEventListener("touchstart",Q,{passive:mt()}),()=>{a.removeEventListener("touchstart",Q),H()}},[H,Q]),h.useEffect(()=>{n&&H()},[n,H]);const Me=a=>o=>{var s;if((s=a.onMouseDown)==null||s.call(a,o),n||o.defaultPrevented||o.button!==0)return;o.preventDefault();const c=we(o,$);if(c!==!1){const{newValue:i,activeIndex:B}=y({finger:c});Le({sliderRef:I,activeIndex:B,setActive:z}),_(i),C&&!Ce(i,R)&&C(o,i,B)}U.current=0;const d=Te(I.current);d.addEventListener("mousemove",v,{passive:!0}),d.addEventListener("mouseup",O)},P=_e(J?w[0]:m,m,b),de=_e(w[w.length-1],m,b)-P,Ve=(a={})=>{const o=Je(a),s={onMouseDown:Me(o||{})},c=p({},o,s);return p({},a,{ref:ye},c)},ze=a=>o=>{var s;(s=a.onMouseOver)==null||s.call(a,o);const c=Number(o.currentTarget.getAttribute("data-index"));j(c)},Fe=a=>o=>{var s;(s=a.onMouseLeave)==null||s.call(a,o),j(-1)};return{active:E,axis:W,axisProps:cr,dragging:F,focusedThumbIndex:ve,getHiddenInputProps:(a={})=>{var o;const s=Je(a),c={onChange:Ne(s||{}),onFocus:ue(s||{}),onBlur:ce(s||{}),onKeyDown:je(s||{})},d=p({},s,c);return p({tabIndex:G,"aria-labelledby":t,"aria-orientation":V,"aria-valuemax":ae(b),"aria-valuemin":ae(m),name:A,type:"range",min:e.min,max:e.max,step:e.step===null&&e.marks?"any":(o=e.step)!=null?o:void 0,disabled:n},a,d,{style:p({},or,{direction:k?"rtl":"ltr",width:"100%",height:"100%"})})},getRootProps:Ve,getThumbProps:(a={})=>{const o=Je(a),s={onMouseOver:ze(o||{}),onMouseLeave:Fe(o||{})};return p({},a,o,s)},marks:me,open:K,range:J,rootRef:ye,trackLeap:de,trackOffset:P,values:w,getThumbStyle:a=>({pointerEvents:E!==-1&&E!==a?"none":void 0})}}const fr=e=>!e||!$e(e);function mr(e){return It("MuiSlider",e)}const br=_t("MuiSlider",["root","active","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","disabled","dragging","focusVisible","mark","markActive","marked","markLabel","markLabelActive","rail","sizeSmall","thumb","thumbColorPrimary","thumbColorSecondary","thumbColorError","thumbColorSuccess","thumbColorInfo","thumbColorWarning","track","trackInverted","trackFalse","thumbSizeSmall","valueLabel","valueLabelOpen","valueLabelCircle","valueLabelLabel","vertical"]),M=br,hr=e=>{const{open:t}=e;return{offset:fe(t&&M.valueLabelOpen),circle:M.valueLabelCircle,label:M.valueLabelLabel}};function vr(e){const{children:t,className:r,value:n}=e,l=hr(e);return t?h.cloneElement(t,{className:fe(t.props.className)},u.jsxs(h.Fragment,{children:[t.props.children,u.jsx("span",{className:fe(l.offset,r),"aria-hidden":!0,children:u.jsx("span",{className:l.circle,children:u.jsx("span",{className:l.label,children:n})})})]})):null}const gr=["aria-label","aria-valuetext","aria-labelledby","component","components","componentsProps","color","classes","className","disableSwap","disabled","getAriaLabel","getAriaValueText","marks","max","min","name","onChange","onChangeCommitted","orientation","shiftStep","size","step","scale","slotProps","slots","tabIndex","track","value","valueLabelDisplay","valueLabelFormat"],yr=Et();function bt(e){return e}const xr=se("span",{name:"MuiSlider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t["color".concat(te(r.color))],r.size!=="medium"&&t["size".concat(te(r.size))],r.marked&&t.marked,r.orientation==="vertical"&&t.vertical,r.track==="inverted"&&t.trackInverted,r.track===!1&&t.trackFalse]}})(({theme:e})=>{var t;return{borderRadius:12,boxSizing:"content-box",display:"inline-block",position:"relative",cursor:"pointer",touchAction:"none",WebkitTapHighlightColor:"transparent","@media print":{colorAdjust:"exact"},["&.".concat(M.disabled)]:{pointerEvents:"none",cursor:"default",color:(e.vars||e).palette.grey[400]},["&.".concat(M.dragging)]:{["& .".concat(M.thumb,", & .").concat(M.track)]:{transition:"none"}},variants:[...Object.keys(((t=e.vars)!=null?t:e).palette).filter(r=>{var n;return((n=e.vars)!=null?n:e).palette[r].main}).map(r=>({props:{color:r},style:{color:(e.vars||e).palette[r].main}})),{props:{orientation:"horizontal"},style:{height:4,width:"100%",padding:"13px 0","@media (pointer: coarse)":{padding:"20px 0"}}},{props:{orientation:"horizontal",size:"small"},style:{height:2}},{props:{orientation:"horizontal",marked:!0},style:{marginBottom:20}},{props:{orientation:"vertical"},style:{height:"100%",width:4,padding:"0 13px","@media (pointer: coarse)":{padding:"0 20px"}}},{props:{orientation:"vertical",size:"small"},style:{width:2}},{props:{orientation:"vertical",marked:!0},style:{marginRight:44}}]}}),kr=se("span",{name:"MuiSlider",slot:"Rail",overridesResolver:(e,t)=>t.rail})({display:"block",position:"absolute",borderRadius:"inherit",backgroundColor:"currentColor",opacity:.38,variants:[{props:{orientation:"horizontal"},style:{width:"100%",height:"inherit",top:"50%",transform:"translateY(-50%)"}},{props:{orientation:"vertical"},style:{height:"100%",width:"inherit",left:"50%",transform:"translateX(-50%)"}},{props:{track:"inverted"},style:{opacity:1}}]}),Sr=se("span",{name:"MuiSlider",slot:"Track",overridesResolver:(e,t)=>t.track})(({theme:e})=>{var t;return{display:"block",position:"absolute",borderRadius:"inherit",border:"1px solid currentColor",backgroundColor:"currentColor",transition:e.transitions.create(["left","width","bottom","height"],{duration:e.transitions.duration.shortest}),variants:[{props:{size:"small"},style:{border:"none"}},{props:{orientation:"horizontal"},style:{height:"inherit",top:"50%",transform:"translateY(-50%)"}},{props:{orientation:"vertical"},style:{width:"inherit",left:"50%",transform:"translateX(-50%)"}},{props:{track:!1},style:{display:"none"}},...Object.keys(((t=e.vars)!=null?t:e).palette).filter(r=>{var n;return((n=e.vars)!=null?n:e).palette[r].main}).map(r=>({props:{color:r,track:"inverted"},style:p({},e.vars?{backgroundColor:e.vars.palette.Slider["".concat(r,"Track")],borderColor:e.vars.palette.Slider["".concat(r,"Track")]}:p({backgroundColor:it(e.palette[r].main,.62),borderColor:it(e.palette[r].main,.62)},e.applyStyles("dark",{backgroundColor:ut(e.palette[r].main,.5)}),e.applyStyles("dark",{borderColor:ut(e.palette[r].main,.5)})))}))]}}),wr=se("span",{name:"MuiSlider",slot:"Thumb",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.thumb,t["thumbColor".concat(te(r.color))],r.size!=="medium"&&t["thumbSize".concat(te(r.size))]]}})(({theme:e})=>{var t;return{position:"absolute",width:20,height:20,boxSizing:"border-box",borderRadius:"50%",outline:0,backgroundColor:"currentColor",display:"flex",alignItems:"center",justifyContent:"center",transition:e.transitions.create(["box-shadow","left","bottom"],{duration:e.transitions.duration.shortest}),"&::before":{position:"absolute",content:'""',borderRadius:"inherit",width:"100%",height:"100%",boxShadow:(e.vars||e).shadows[2]},"&::after":{position:"absolute",content:'""',borderRadius:"50%",width:42,height:42,top:"50%",left:"50%",transform:"translate(-50%, -50%)"},["&.".concat(M.disabled)]:{"&:hover":{boxShadow:"none"}},variants:[{props:{size:"small"},style:{width:12,height:12,"&::before":{boxShadow:"none"}}},{props:{orientation:"horizontal"},style:{top:"50%",transform:"translate(-50%, -50%)"}},{props:{orientation:"vertical"},style:{left:"50%",transform:"translate(-50%, 50%)"}},...Object.keys(((t=e.vars)!=null?t:e).palette).filter(r=>{var n;return((n=e.vars)!=null?n:e).palette[r].main}).map(r=>({props:{color:r},style:{["&:hover, &.".concat(M.focusVisible)]:p({},e.vars?{boxShadow:"0px 0px 0px 8px rgba(".concat(e.vars.palette[r].mainChannel," / 0.16)")}:{boxShadow:"0px 0px 0px 8px ".concat(ct(e.palette[r].main,.16))},{"@media (hover: none)":{boxShadow:"none"}}),["&.".concat(M.active)]:p({},e.vars?{boxShadow:"0px 0px 0px 14px rgba(".concat(e.vars.palette[r].mainChannel," / 0.16)")}:{boxShadow:"0px 0px 0px 14px ".concat(ct(e.palette[r].main,.16))})}}))]}}),Lr=se(vr,{name:"MuiSlider",slot:"ValueLabel",overridesResolver:(e,t)=>t.valueLabel})(({theme:e})=>p({zIndex:1,whiteSpace:"nowrap"},e.typography.body2,{fontWeight:500,transition:e.transitions.create(["transform"],{duration:e.transitions.duration.shortest}),position:"absolute",backgroundColor:(e.vars||e).palette.grey[600],borderRadius:2,color:(e.vars||e).palette.common.white,display:"flex",alignItems:"center",justifyContent:"center",padding:"0.25rem 0.75rem",variants:[{props:{orientation:"horizontal"},style:{transform:"translateY(-100%) scale(0)",top:"-10px",transformOrigin:"bottom center","&::before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, 50%) rotate(45deg)",backgroundColor:"inherit",bottom:0,left:"50%"},["&.".concat(M.valueLabelOpen)]:{transform:"translateY(-100%) scale(1)"}}},{props:{orientation:"vertical"},style:{transform:"translateY(-50%) scale(0)",right:"30px",top:"50%",transformOrigin:"right center","&::before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, -50%) rotate(45deg)",backgroundColor:"inherit",right:-8,top:"50%"},["&.".concat(M.valueLabelOpen)]:{transform:"translateY(-50%) scale(1)"}}},{props:{size:"small"},style:{fontSize:e.typography.pxToRem(12),padding:"0.25rem 0.5rem"}},{props:{orientation:"vertical",size:"small"},style:{right:"20px"}}]})),Cr=se("span",{name:"MuiSlider",slot:"Mark",shouldForwardProp:e=>ht(e)&&e!=="markActive",overridesResolver:(e,t)=>{const{markActive:r}=e;return[t.mark,r&&t.markActive]}})(({theme:e})=>({position:"absolute",width:2,height:2,borderRadius:1,backgroundColor:"currentColor",variants:[{props:{orientation:"horizontal"},style:{top:"50%",transform:"translate(-1px, -50%)"}},{props:{orientation:"vertical"},style:{left:"50%",transform:"translate(-50%, 1px)"}},{props:{markActive:!0},style:{backgroundColor:(e.vars||e).palette.background.paper,opacity:.8}}]})),Pr=se("span",{name:"MuiSlider",slot:"MarkLabel",shouldForwardProp:e=>ht(e)&&e!=="markLabelActive",overridesResolver:(e,t)=>t.markLabel})(({theme:e})=>p({},e.typography.body2,{color:(e.vars||e).palette.text.secondary,position:"absolute",whiteSpace:"nowrap",variants:[{props:{orientation:"horizontal"},style:{top:30,transform:"translateX(-50%)","@media (pointer: coarse)":{top:40}}},{props:{orientation:"vertical"},style:{left:36,transform:"translateY(50%)","@media (pointer: coarse)":{left:44}}},{props:{markLabelActive:!0},style:{color:(e.vars||e).palette.text.primary}}]})),Tr=e=>{const{disabled:t,dragging:r,marked:n,orientation:l,track:k,classes:g,color:b,size:m}=e,A={root:["root",t&&"disabled",r&&"dragging",n&&"marked",l==="vertical"&&"vertical",k==="inverted"&&"trackInverted",k===!1&&"trackFalse",b&&"color".concat(te(b)),m&&"size".concat(te(m))],rail:["rail"],track:["track"],mark:["mark"],markActive:["markActive"],markLabel:["markLabel"],markLabelActive:["markLabelActive"],valueLabel:["valueLabel"],thumb:["thumb",t&&"disabled",m&&"thumbSize".concat(te(m)),b&&"thumbColor".concat(te(b))],active:["active"],disabled:["disabled"],focusVisible:["focusVisible"]};return jt(A,mr,g)},$r=({children:e})=>e,_r=h.forwardRef(function(t,r){var n,l,k,g,b,m,A,re,X,V,le,ae,T,oe,G,ie,$,E,z,K,j,F,Z,U;const R=yr({props:t,name:"MuiSlider"}),_=Rt(),{"aria-label":C,"aria-valuetext":J,"aria-labelledby":w,component:me="span",components:S={},componentsProps:D={},color:Re="primary",classes:Ae,className:Ee,disableSwap:ve=!1,disabled:ne=!1,getAriaLabel:I,getAriaValueText:ge,marks:ye=!1,max:ue=100,min:ce=0,orientation:xe="horizontal",shiftStep:je=10,size:Ne="medium",step:ke=1,scale:W=bt,slotProps:y,slots:v,track:O="normal",valueLabelDisplay:Q="off",valueLabelFormat:H=bt}=R,Me=At(R,gr),P=p({},R,{isRtl:_,max:ue,min:ce,classes:Ae,disabled:ne,disableSwap:ve,orientation:xe,marks:ye,color:Re,size:Ne,step:ke,shiftStep:je,scale:W,track:O,valueLabelDisplay:Q,valueLabelFormat:H}),{axisProps:de,getRootProps:Ve,getHiddenInputProps:ze,getThumbProps:Fe,open:rt,active:De,axis:be,focusedThumbIndex:a,range:o,dragging:s,marks:c,values:d,trackOffset:i,trackLeap:B,getThumbStyle:Y}=pr(p({},P,{rootRef:r}));P.marked=c.length>0&&c.some(x=>x.label),P.dragging=s,P.focusedThumbIndex=a;const f=Tr(P),N=(n=(l=v==null?void 0:v.root)!=null?l:S.Root)!=null?n:xr,pe=(k=(g=v==null?void 0:v.rail)!=null?g:S.Rail)!=null?k:kr,at=(b=(m=v==null?void 0:v.track)!=null?m:S.Track)!=null?b:Sr,ot=(A=(re=v==null?void 0:v.thumb)!=null?re:S.Thumb)!=null?A:wr,nt=(X=(V=v==null?void 0:v.valueLabel)!=null?V:S.ValueLabel)!=null?X:Lr,Oe=(le=(ae=v==null?void 0:v.mark)!=null?ae:S.Mark)!=null?le:Cr,He=(T=(oe=v==null?void 0:v.markLabel)!=null?oe:S.MarkLabel)!=null?T:Pr,st=(G=(ie=v==null?void 0:v.input)!=null?ie:S.Input)!=null?G:"input",Be=($=y==null?void 0:y.root)!=null?$:D.root,gt=(E=y==null?void 0:y.rail)!=null?E:D.rail,Ke=(z=y==null?void 0:y.track)!=null?z:D.track,Ye=(K=y==null?void 0:y.thumb)!=null?K:D.thumb,Xe=(j=y==null?void 0:y.valueLabel)!=null?j:D.valueLabel,yt=(F=y==null?void 0:y.mark)!=null?F:D.mark,xt=(Z=y==null?void 0:y.markLabel)!=null?Z:D.markLabel,kt=(U=y==null?void 0:y.input)!=null?U:D.input,St=ee({elementType:N,getSlotProps:Ve,externalSlotProps:Be,externalForwardedProps:Me,additionalProps:p({},fr(N)&&{as:me}),ownerState:p({},P,Be==null?void 0:Be.ownerState),className:[f.root,Ee]}),wt=ee({elementType:pe,externalSlotProps:gt,ownerState:P,className:f.rail}),Lt=ee({elementType:at,externalSlotProps:Ke,additionalProps:{style:p({},de[be].offset(i),de[be].leap(B))},ownerState:p({},P,Ke==null?void 0:Ke.ownerState),className:f.track}),Ue=ee({elementType:ot,getSlotProps:Fe,externalSlotProps:Ye,ownerState:p({},P,Ye==null?void 0:Ye.ownerState),className:f.thumb}),Ct=ee({elementType:nt,externalSlotProps:Xe,ownerState:p({},P,Xe==null?void 0:Xe.ownerState),className:f.valueLabel}),We=ee({elementType:Oe,externalSlotProps:yt,ownerState:P,className:f.mark}),qe=ee({elementType:He,externalSlotProps:xt,ownerState:P,className:f.markLabel}),Pt=ee({elementType:st,getSlotProps:ze,externalSlotProps:kt,ownerState:P});return u.jsxs(N,p({},St,{children:[u.jsx(pe,p({},wt)),u.jsx(at,p({},Lt)),c.filter(x=>x.value>=ce&&x.value<=ue).map((x,L)=>{const Ge=_e(x.value,ce,ue),Se=de[be].offset(Ge);let q;return O===!1?q=d.indexOf(x.value)!==-1:q=O==="normal"&&(o?x.value>=d[0]&&x.value<=d[d.length-1]:x.value<=d[0])||O==="inverted"&&(o?x.value<=d[0]||x.value>=d[d.length-1]:x.value>=d[0]),u.jsxs(h.Fragment,{children:[u.jsx(Oe,p({"data-index":L},We,!$e(Oe)&&{markActive:q},{style:p({},Se,We.style),className:fe(We.className,q&&f.markActive)})),x.label!=null?u.jsx(He,p({"aria-hidden":!0,"data-index":L},qe,!$e(He)&&{markLabelActive:q},{style:p({},Se,qe.style),className:fe(f.markLabel,qe.className,q&&f.markLabelActive),children:x.label})):null]},L)}),d.map((x,L)=>{const Ge=_e(x,ce,ue),Se=de[be].offset(Ge),q=Q==="off"?$r:nt;return u.jsx(q,p({},!$e(q)&&{valueLabelFormat:H,valueLabelDisplay:Q,value:typeof H=="function"?H(W(x),L):H,index:L,open:rt===L||De===L||Q==="on",disabled:ne},Ct,{children:u.jsx(ot,p({"data-index":L},Ue,{className:fe(f.thumb,Ue.className,De===L&&f.active,a===L&&f.focusVisible),style:p({},Se,Y(L),Ue.style),children:u.jsx(st,p({"data-index":L,"aria-label":I?I(L):C,"aria-valuenow":W(x),"aria-labelledby":w,"aria-valuetext":ge?ge(W(x),L):J,value:d[L]},Pt))}))}),L)})]}))}),Ir=_r,Nr=({settingTitle:e,settingValue:t,settingIcon:r,dialogDescription:n,dialogDisclaimer:l,value:k,defaultValue:g,minValue:b,maxValue:m,stepSize:A,dialogTitle:re=e,valueUnit:X,handleUpdate:V,showSlider:le,disabled:ae=!1,handleLiveUpdate:T,listItemTextSx:oe})=>{const{t:G}=Nt(),[ie,$]=h.useState(!1),[E,z]=h.useState(k),[K,j]=h.useState(k),F=h.useCallback((_,C)=>{z(_),C&&_!==K?V(_):T&&T(_)},[K,z,T,V]),Z=h.useCallback(()=>{F(K,!0),j(K),$(!1)},[K,V]),U=h.useCallback(()=>{g!==void 0&&(F(g,!0),j(g),$(!1))},[g,V]),R=()=>{F(E,!0),j(E),$(!1)};return u.jsxs(u.Fragment,{children:[u.jsxs(Mt,{disabled:ae,onClick:()=>$(!0),children:[r?u.jsx(Vt,{children:r}):null,u.jsx(zt,{primary:e,secondary:t,sx:oe,secondaryTypographyProps:{style:{display:"flex",flexDirection:"column"}}})]}),u.jsxs(Ft,{open:ie,onClose:Z,children:[u.jsxs(Dt,{children:[u.jsx(Ot,{sx:{paddingLeft:0},children:re}),(!!n||!!l)&&u.jsxs(Ht,{sx:{paddingBottom:"10px"},component:"div",children:[n&&u.jsx(dt,{variant:"body1",sx:{whiteSpace:"pre-line"},children:n}),l&&u.jsxs(Bt,{direction:"row",alignItems:"center",children:[u.jsx(Yt,{color:"warning"}),u.jsx(dt,{variant:"body1",sx:{marginLeft:"10px",marginTop:"5px",whiteSpace:"pre-line"},children:l})]})]}),u.jsx(Xt,{sx:{width:"100%",margin:"auto"},InputProps:{inputProps:{min:b,max:m,step:A},endAdornment:u.jsx(Ut,{position:"end",children:X})},autoFocus:!0,value:E,type:"number",onChange:_=>{const C=Number(_.target.value);F(C,!1)}}),le?u.jsx(Ir,{"aria-label":"number-setting-slider",defaultValue:g,value:E,step:A,min:b,max:m,onChange:(_,C)=>{F(C,!1)}}):null]}),u.jsxs(Kt,{children:[g!==void 0?u.jsx(Qe,{onClick:U,color:"primary",children:G("global.button.reset_to_default")}):null,u.jsx(Qe,{onClick:Z,color:"primary",children:G("global.button.cancel")}),u.jsx(Qe,{onClick:R,color:"primary",children:G("global.button.ok")})]})]})]})};export{Nr as N};