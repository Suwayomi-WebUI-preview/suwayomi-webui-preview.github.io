import{c as g,cd as jt,cE as ge,ap as At,ah as Pt,an as Ve,ao as Le,cF as Ye,cD as mt,cG as Te,a9 as zt,aa as Nt,af as ce,j as u,C as se,ac as ee,ad as ue,cz as ft,cA as bt,aS as gt,cH as St,ae as Mt,al as Et,am as H,ag as $t,u as Dt,aL as Ot,a3 as Ft,a4 as Vt,X as Yt,aG as Bt,aF as _t,b9 as Xt,T as ht,S as Kt,aH as Wt,b as Be}from"./index-hGrGI_de.js";import{d as qt}from"./Info-BxTLBuR7.js";import{T as Gt}from"./TextField-DE9RgjWO.js";import{I as Ut}from"./InputAdornment-B26zh0L6.js";const Jt={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"};function Qt(e,t,n=(s,p)=>s===p){return e.length===t.length&&e.every((s,p)=>n(s,t[p]))}const Zt=2;function wt(e,t){return e-t}function vt(e,t){var s;const{index:n}=(s=e.reduce((p,I,v)=>{const f=Math.abs(t-I);return p===null||f<p.distance||f===p.distance?{distance:f,index:v}:p},null))!=null?s:{};return n}function ke(e,t){if(t.current!==void 0&&e.changedTouches){const n=e;for(let s=0;s<n.changedTouches.length;s+=1){const p=n.changedTouches[s];if(p.identifier===t.current)return{x:p.clientX,y:p.clientY}}return!1}return{x:e.clientX,y:e.clientY}}function Ie(e,t,n){return(e-t)*100/(n-t)}function Ht(e,t,n){return(n-t)*e+t}function ea(e){if(Math.abs(e)<1){const n=e.toExponential().split("e-"),s=n[0].split(".")[1];return(s?s.length:0)+parseInt(n[1],10)}const t=e.toString().split(".")[1];return t?t.length:0}function ta(e,t,n){const s=Math.round((e-n)/t)*t+n;return Number(s.toFixed(ea(t)))}function xt({values:e,newValue:t,index:n}){const s=e.slice();return s[n]=t,s.sort(wt)}function Se({sliderRef:e,activeIndex:t,setActive:n}){var p,I,v;const s=Le(e.current);(!((p=e.current)!=null&&p.contains(s.activeElement))||Number((I=s==null?void 0:s.activeElement)==null?void 0:I.getAttribute("data-index"))!==t)&&((v=e.current)==null||v.querySelector('[type="range"][data-index="'.concat(t,'"]')).focus()),n&&n(t)}function we(e,t){return typeof e=="number"&&typeof t=="number"?e===t:typeof e=="object"&&typeof t=="object"?Qt(e,t):!1}const aa={horizontal:{offset:e=>({left:"".concat(e,"%")}),leap:e=>({width:"".concat(e,"%")})},"horizontal-reverse":{offset:e=>({right:"".concat(e,"%")}),leap:e=>({width:"".concat(e,"%")})},vertical:{offset:e=>({bottom:"".concat(e,"%")}),leap:e=>({height:"".concat(e,"%")})}},ra=e=>e;let Ce;function yt(){return Ce===void 0&&(typeof CSS<"u"&&typeof CSS.supports=="function"?Ce=CSS.supports("touch-action","none"):Ce=!0),Ce}function na(e){const{"aria-labelledby":t,defaultValue:n,disabled:s=!1,disableSwap:p=!1,isRtl:I=!1,marks:v=!1,max:f=100,min:m=0,name:w,onChange:z,onChangeCommitted:W,orientation:D="horizontal",rootRef:pe,scale:ie=ra,step:j=1,shiftStep:te=10,tabIndex:q,value:de}=e,C=g.useRef(void 0),[A,_]=g.useState(-1),[G,O]=g.useState(-1),[F,ae]=g.useState(!1),U=g.useRef(0),[$,x]=jt({controlled:de,default:n!=null?n:m,name:"Slider"}),i=z&&((a,r,o)=>{const c=a.nativeEvent||a,b=new c.constructor(c.type,c);Object.defineProperty(b,"target",{writable:!0,value:{value:r,name:w}}),z(b,r,o)}),d=Array.isArray($);let L=d?$.slice().sort(wt):[$];L=L.map(a=>a==null?m:ge(a,m,f));const J=v===!0&&j!==null?[...Array(Math.floor((f-m)/j)+1)].map((a,r)=>({value:m+j*r})):v||[],V=J.map(a=>a.value),[re,Y]=g.useState(-1),N=g.useRef(null),T=At(pe,N),le=a=>r=>{var c;const o=Number(r.currentTarget.getAttribute("data-index"));mt(r.target)&&Y(o),O(o),(c=a==null?void 0:a.onFocus)==null||c.call(a,r)},Re=a=>r=>{var o;mt(r.target)||Y(-1),O(-1),(o=a==null?void 0:a.onBlur)==null||o.call(a,r)},he=(a,r)=>{const o=Number(a.currentTarget.getAttribute("data-index")),c=L[o],b=V.indexOf(c);let l=r;if(J&&j==null){const P=V[V.length-1];l>P?l=P:l<V[0]?l=V[0]:l=l<c?V[b-1]:V[b+1]}if(l=ge(l,m,f),d){p&&(l=ge(l,L[o-1]||-1/0,L[o+1]||1/0));const P=l;l=xt({values:L,newValue:l,index:o});let M=o;p||(M=l.indexOf(P)),Se({sliderRef:N,activeIndex:M})}x(l),Y(o),i&&!we(l,$)&&i(a,l,o),W&&W(a,l)},je=a=>r=>{var o;if(j!==null){const c=Number(r.currentTarget.getAttribute("data-index")),b=L[c];let l=null;(r.key==="ArrowLeft"||r.key==="ArrowDown")&&r.shiftKey||r.key==="PageDown"?l=Math.max(b-te,m):((r.key==="ArrowRight"||r.key==="ArrowUp")&&r.shiftKey||r.key==="PageUp")&&(l=Math.min(b+te,f)),l!==null&&(he(r,l),r.preventDefault())}(o=a==null?void 0:a.onKeyDown)==null||o.call(a,r)};Pt(()=>{var a;s&&N.current.contains(document.activeElement)&&((a=document.activeElement)==null||a.blur())},[s]),s&&A!==-1&&_(-1),s&&re!==-1&&Y(-1);const Ae=a=>r=>{var o;(o=a.onChange)==null||o.call(a,r),he(r,r.target.valueAsNumber)},me=g.useRef(void 0);let X=D;I&&D==="horizontal"&&(X+="-reverse");const ne=({finger:a,move:r=!1})=>{const{current:o}=N,{width:c,height:b,bottom:l,left:P}=o.getBoundingClientRect();let M;X.indexOf("vertical")===0?M=(l-a.y)/b:M=(a.x-P)/c,X.indexOf("-reverse")!==-1&&(M=1-M);let k;if(k=Ht(M,m,f),j)k=ta(k,j,m);else{const be=vt(V,k);k=V[be]}k=ge(k,m,f);let B=0;if(d){r?B=me.current:B=vt(L,k),p&&(k=ge(k,L[B-1]||-1/0,L[B+1]||1/0));const be=k;k=xt({values:L,newValue:k,index:B}),p&&r||(B=k.indexOf(be),me.current=B)}return{newValue:k,activeIndex:B}},Q=Ve(a=>{const r=ke(a,C);if(!r)return;if(U.current+=1,a.type==="mousemove"&&a.buttons===0){Z(a);return}const{newValue:o,activeIndex:c}=ne({finger:r,move:!0});Se({sliderRef:N,activeIndex:c,setActive:_}),x(o),!F&&U.current>Zt&&ae(!0),i&&!we(o,$)&&i(a,o,c)}),Z=Ve(a=>{const r=ke(a,C);if(ae(!1),!r)return;const{newValue:o}=ne({finger:r,move:!0});_(-1),a.type==="touchend"&&O(-1),W&&W(a,o),C.current=void 0,y()}),oe=Ve(a=>{if(s)return;yt()||a.preventDefault();const r=a.changedTouches[0];r!=null&&(C.current=r.identifier);const o=ke(a,C);if(o!==!1){const{newValue:b,activeIndex:l}=ne({finger:o});Se({sliderRef:N,activeIndex:l,setActive:_}),x(b),i&&!we(b,$)&&i(a,b,l)}U.current=0;const c=Le(N.current);c.addEventListener("touchmove",Q,{passive:!0}),c.addEventListener("touchend",Z,{passive:!0})}),y=g.useCallback(()=>{const a=Le(N.current);a.removeEventListener("mousemove",Q),a.removeEventListener("mouseup",Z),a.removeEventListener("touchmove",Q),a.removeEventListener("touchend",Z)},[Z,Q]);g.useEffect(()=>{const{current:a}=N;return a.addEventListener("touchstart",oe,{passive:yt()}),()=>{a.removeEventListener("touchstart",oe),y()}},[y,oe]),g.useEffect(()=>{s&&y()},[s,y]);const Pe=a=>r=>{var b;if((b=a.onMouseDown)==null||b.call(a,r),s||r.defaultPrevented||r.button!==0)return;r.preventDefault();const o=ke(r,C);if(o!==!1){const{newValue:l,activeIndex:P}=ne({finger:o});Se({sliderRef:N,activeIndex:P,setActive:_}),x(l),i&&!we(l,$)&&i(r,l,P)}U.current=0;const c=Le(N.current);c.addEventListener("mousemove",Q,{passive:!0}),c.addEventListener("mouseup",Z)},ve=Ie(d?L[0]:m,m,f),ze=Ie(L[L.length-1],m,f)-ve,R=(a={})=>{const r=Ye(a),o={onMouseDown:Pe(r||{})},c={...r,...o};return{...a,ref:T,...c}},fe=a=>r=>{var c;(c=a.onMouseOver)==null||c.call(a,r);const o=Number(r.currentTarget.getAttribute("data-index"));O(o)},xe=a=>r=>{var o;(o=a.onMouseLeave)==null||o.call(a,r),O(-1)};return{active:A,axis:X,axisProps:aa,dragging:F,focusedThumbIndex:re,getHiddenInputProps:(a={})=>{var b;const r=Ye(a),o={onChange:Ae(r||{}),onFocus:le(r||{}),onBlur:Re(r||{}),onKeyDown:je(r||{})},c={...r,...o};return{tabIndex:q,"aria-labelledby":t,"aria-orientation":D,"aria-valuemax":ie(f),"aria-valuemin":ie(m),name:w,type:"range",min:e.min,max:e.max,step:e.step===null&&e.marks?"any":(b=e.step)!=null?b:void 0,disabled:s,...a,...c,style:{...Jt,direction:I?"rtl":"ltr",width:"100%",height:"100%"}}},getRootProps:R,getThumbProps:(a={})=>{const r=Ye(a),o={onMouseOver:fe(r||{}),onMouseLeave:xe(r||{})};return{...a,...r,...o}},marks:J,open:G,range:d,rootRef:T,trackLeap:ze,trackOffset:ve,values:L,getThumbStyle:a=>({pointerEvents:A!==-1&&A!==a?"none":void 0})}}const oa=e=>!e||!Te(e);function sa(e){return Nt("MuiSlider",e)}const E=zt("MuiSlider",["root","active","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","disabled","dragging","focusVisible","mark","markActive","marked","markLabel","markLabelActive","rail","sizeSmall","thumb","thumbColorPrimary","thumbColorSecondary","thumbColorError","thumbColorSuccess","thumbColorInfo","thumbColorWarning","track","trackInverted","trackFalse","thumbSizeSmall","valueLabel","valueLabelOpen","valueLabelCircle","valueLabelLabel","vertical"]),ia=e=>{const{open:t}=e;return{offset:ce(t&&E.valueLabelOpen),circle:E.valueLabelCircle,label:E.valueLabelLabel}};function la(e){const{children:t,className:n,value:s}=e,p=ia(e);return t?g.cloneElement(t,{className:ce(t.props.className)},u.jsxs(g.Fragment,{children:[t.props.children,u.jsx("span",{className:ce(p.offset,n),"aria-hidden":!0,children:u.jsx("span",{className:p.circle,children:u.jsx("span",{className:p.label,children:s})})})]})):null}function kt(e){return e}const ca=se("span",{name:"MuiSlider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t["color".concat(ee(n.color))],n.size!=="medium"&&t["size".concat(ee(n.size))],n.marked&&t.marked,n.orientation==="vertical"&&t.vertical,n.track==="inverted"&&t.trackInverted,n.track===!1&&t.trackFalse]}})(ue(({theme:e})=>({borderRadius:12,boxSizing:"content-box",display:"inline-block",position:"relative",cursor:"pointer",touchAction:"none",WebkitTapHighlightColor:"transparent","@media print":{colorAdjust:"exact"},["&.".concat(E.disabled)]:{pointerEvents:"none",cursor:"default",color:(e.vars||e).palette.grey[400]},["&.".concat(E.dragging)]:{["& .".concat(E.thumb,", & .").concat(E.track)]:{transition:"none"}},variants:[...Object.entries(e.palette).filter(([,t])=>t&&t.main).map(([t])=>({props:{color:t},style:{color:(e.vars||e).palette[t].main}})),{props:{orientation:"horizontal"},style:{height:4,width:"100%",padding:"13px 0","@media (pointer: coarse)":{padding:"20px 0"}}},{props:{orientation:"horizontal",size:"small"},style:{height:2}},{props:{orientation:"horizontal",marked:!0},style:{marginBottom:20}},{props:{orientation:"vertical"},style:{height:"100%",width:4,padding:"0 13px","@media (pointer: coarse)":{padding:"0 20px"}}},{props:{orientation:"vertical",size:"small"},style:{width:2}},{props:{orientation:"vertical",marked:!0},style:{marginRight:44}}]}))),ua=se("span",{name:"MuiSlider",slot:"Rail",overridesResolver:(e,t)=>t.rail})({display:"block",position:"absolute",borderRadius:"inherit",backgroundColor:"currentColor",opacity:.38,variants:[{props:{orientation:"horizontal"},style:{width:"100%",height:"inherit",top:"50%",transform:"translateY(-50%)"}},{props:{orientation:"vertical"},style:{height:"100%",width:"inherit",left:"50%",transform:"translateX(-50%)"}},{props:{track:"inverted"},style:{opacity:1}}]}),pa=se("span",{name:"MuiSlider",slot:"Track",overridesResolver:(e,t)=>t.track})(ue(({theme:e})=>({display:"block",position:"absolute",borderRadius:"inherit",border:"1px solid currentColor",backgroundColor:"currentColor",transition:e.transitions.create(["left","width","bottom","height"],{duration:e.transitions.duration.shortest}),variants:[{props:{size:"small"},style:{border:"none"}},{props:{orientation:"horizontal"},style:{height:"inherit",top:"50%",transform:"translateY(-50%)"}},{props:{orientation:"vertical"},style:{width:"inherit",left:"50%",transform:"translateX(-50%)"}},{props:{track:!1},style:{display:"none"}},...Object.entries(e.palette).filter(([,t])=>t&&t.main).map(([t])=>({props:{color:t,track:"inverted"},style:{...e.vars?{backgroundColor:e.vars.palette.Slider["".concat(t,"Track")],borderColor:e.vars.palette.Slider["".concat(t,"Track")]}:{backgroundColor:ft(e.palette[t].main,.62),borderColor:ft(e.palette[t].main,.62),...e.applyStyles("dark",{backgroundColor:bt(e.palette[t].main,.5)}),...e.applyStyles("dark",{borderColor:bt(e.palette[t].main,.5)})}}}))]}))),da=se("span",{name:"MuiSlider",slot:"Thumb",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.thumb,t["thumbColor".concat(ee(n.color))],n.size!=="medium"&&t["thumbSize".concat(ee(n.size))]]}})(ue(({theme:e})=>({position:"absolute",width:20,height:20,boxSizing:"border-box",borderRadius:"50%",outline:0,backgroundColor:"currentColor",display:"flex",alignItems:"center",justifyContent:"center",transition:e.transitions.create(["box-shadow","left","bottom"],{duration:e.transitions.duration.shortest}),"&::before":{position:"absolute",content:'""',borderRadius:"inherit",width:"100%",height:"100%",boxShadow:(e.vars||e).shadows[2]},"&::after":{position:"absolute",content:'""',borderRadius:"50%",width:42,height:42,top:"50%",left:"50%",transform:"translate(-50%, -50%)"},["&.".concat(E.disabled)]:{"&:hover":{boxShadow:"none"}},variants:[{props:{size:"small"},style:{width:12,height:12,"&::before":{boxShadow:"none"}}},{props:{orientation:"horizontal"},style:{top:"50%",transform:"translate(-50%, -50%)"}},{props:{orientation:"vertical"},style:{left:"50%",transform:"translate(-50%, 50%)"}},...Object.entries(e.palette).filter(([,t])=>t&&t.main).map(([t])=>({props:{color:t},style:{["&:hover, &.".concat(E.focusVisible)]:{...e.vars?{boxShadow:"0px 0px 0px 8px rgba(".concat(e.vars.palette[t].mainChannel," / 0.16)")}:{boxShadow:"0px 0px 0px 8px ".concat(gt(e.palette[t].main,.16))},"@media (hover: none)":{boxShadow:"none"}},["&.".concat(E.active)]:{...e.vars?{boxShadow:"0px 0px 0px 14px rgba(".concat(e.vars.palette[t].mainChannel," / 0.16)")}:{boxShadow:"0px 0px 0px 14px ".concat(gt(e.palette[t].main,.16))}}}}))]}))),ma=se(la,{name:"MuiSlider",slot:"ValueLabel",overridesResolver:(e,t)=>t.valueLabel})(ue(({theme:e})=>({zIndex:1,whiteSpace:"nowrap",...e.typography.body2,fontWeight:500,transition:e.transitions.create(["transform"],{duration:e.transitions.duration.shortest}),position:"absolute",backgroundColor:(e.vars||e).palette.grey[600],borderRadius:2,color:(e.vars||e).palette.common.white,display:"flex",alignItems:"center",justifyContent:"center",padding:"0.25rem 0.75rem",variants:[{props:{orientation:"horizontal"},style:{transform:"translateY(-100%) scale(0)",top:"-10px",transformOrigin:"bottom center","&::before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, 50%) rotate(45deg)",backgroundColor:"inherit",bottom:0,left:"50%"},["&.".concat(E.valueLabelOpen)]:{transform:"translateY(-100%) scale(1)"}}},{props:{orientation:"vertical"},style:{transform:"translateY(-50%) scale(0)",right:"30px",top:"50%",transformOrigin:"right center","&::before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, -50%) rotate(45deg)",backgroundColor:"inherit",right:-8,top:"50%"},["&.".concat(E.valueLabelOpen)]:{transform:"translateY(-50%) scale(1)"}}},{props:{size:"small"},style:{fontSize:e.typography.pxToRem(12),padding:"0.25rem 0.5rem"}},{props:{orientation:"vertical",size:"small"},style:{right:"20px"}}]}))),fa=se("span",{name:"MuiSlider",slot:"Mark",shouldForwardProp:e=>St(e)&&e!=="markActive",overridesResolver:(e,t)=>{const{markActive:n}=e;return[t.mark,n&&t.markActive]}})(ue(({theme:e})=>({position:"absolute",width:2,height:2,borderRadius:1,backgroundColor:"currentColor",variants:[{props:{orientation:"horizontal"},style:{top:"50%",transform:"translate(-1px, -50%)"}},{props:{orientation:"vertical"},style:{left:"50%",transform:"translate(-50%, 1px)"}},{props:{markActive:!0},style:{backgroundColor:(e.vars||e).palette.background.paper,opacity:.8}}]}))),ba=se("span",{name:"MuiSlider",slot:"MarkLabel",shouldForwardProp:e=>St(e)&&e!=="markLabelActive",overridesResolver:(e,t)=>t.markLabel})(ue(({theme:e})=>({...e.typography.body2,color:(e.vars||e).palette.text.secondary,position:"absolute",whiteSpace:"nowrap",variants:[{props:{orientation:"horizontal"},style:{top:30,transform:"translateX(-50%)","@media (pointer: coarse)":{top:40}}},{props:{orientation:"vertical"},style:{left:36,transform:"translateY(50%)","@media (pointer: coarse)":{left:44}}},{props:{markLabelActive:!0},style:{color:(e.vars||e).palette.text.primary}}]}))),ga=e=>{const{disabled:t,dragging:n,marked:s,orientation:p,track:I,classes:v,color:f,size:m}=e,w={root:["root",t&&"disabled",n&&"dragging",s&&"marked",p==="vertical"&&"vertical",I==="inverted"&&"trackInverted",I===!1&&"trackFalse",f&&"color".concat(ee(f)),m&&"size".concat(ee(m))],rail:["rail"],track:["track"],mark:["mark"],markActive:["markActive"],markLabel:["markLabel"],markLabelActive:["markLabelActive"],valueLabel:["valueLabel"],thumb:["thumb",t&&"disabled",m&&"thumbSize".concat(ee(m)),f&&"thumbColor".concat(ee(f))],active:["active"],disabled:["disabled"],focusVisible:["focusVisible"]};return $t(w,sa,v)},ha=({children:e})=>e,va=g.forwardRef(function(t,n){var _e,Xe,Ke,We,qe,Ge,Ue,Je,Qe,Ze,He,et,tt,at,rt,nt,ot,st,it,lt,ct,ut,pt,dt;const s=Mt({props:t,name:"MuiSlider"}),p=Et(),{"aria-label":I,"aria-valuetext":v,"aria-labelledby":f,component:m="span",components:w={},componentsProps:z={},color:W="primary",classes:D,className:pe,disableSwap:ie=!1,disabled:j=!1,getAriaLabel:te,getAriaValueText:q,marks:de=!1,max:C=100,min:A=0,name:_,onChange:G,onChangeCommitted:O,orientation:F="horizontal",shiftStep:ae=10,size:U="medium",step:$=1,scale:x=kt,slotProps:i,slots:d,tabIndex:L,track:J="normal",value:V,valueLabelDisplay:re="off",valueLabelFormat:Y=kt,...N}=s,T={...s,isRtl:p,max:C,min:A,classes:D,disabled:j,disableSwap:ie,orientation:F,marks:de,color:W,size:U,step:$,shiftStep:ae,scale:x,track:J,valueLabelDisplay:re,valueLabelFormat:Y},{axisProps:le,getRootProps:Re,getHiddenInputProps:he,getThumbProps:je,open:Ae,active:me,axis:X,focusedThumbIndex:ne,range:Q,dragging:Z,marks:oe,values:y,trackOffset:Pe,trackLeap:ve,getThumbStyle:ze}=na({...T,rootRef:n});T.marked=oe.length>0&&oe.some(h=>h.label),T.dragging=Z,T.focusedThumbIndex=ne;const R=ga(T),fe=(Xe=(_e=d==null?void 0:d.root)!=null?_e:w.Root)!=null?Xe:ca,xe=(We=(Ke=d==null?void 0:d.rail)!=null?Ke:w.Rail)!=null?We:ua,Ne=(Ge=(qe=d==null?void 0:d.track)!=null?qe:w.Track)!=null?Ge:pa,Me=(Je=(Ue=d==null?void 0:d.thumb)!=null?Ue:w.Thumb)!=null?Je:da,Ee=(Ze=(Qe=d==null?void 0:d.valueLabel)!=null?Qe:w.ValueLabel)!=null?Ze:ma,a=(et=(He=d==null?void 0:d.mark)!=null?He:w.Mark)!=null?et:fa,r=(at=(tt=d==null?void 0:d.markLabel)!=null?tt:w.MarkLabel)!=null?at:ba,o=(nt=(rt=d==null?void 0:d.input)!=null?rt:w.Input)!=null?nt:"input",c=(ot=i==null?void 0:i.root)!=null?ot:z.root,b=(st=i==null?void 0:i.rail)!=null?st:z.rail,l=(it=i==null?void 0:i.track)!=null?it:z.track,P=(lt=i==null?void 0:i.thumb)!=null?lt:z.thumb,M=(ct=i==null?void 0:i.valueLabel)!=null?ct:z.valueLabel,k=(ut=i==null?void 0:i.mark)!=null?ut:z.mark,B=(pt=i==null?void 0:i.markLabel)!=null?pt:z.markLabel,be=(dt=i==null?void 0:i.input)!=null?dt:z.input,Ct=H({elementType:fe,getSlotProps:Re,externalSlotProps:c,externalForwardedProps:N,additionalProps:{...oa(fe)&&{as:m}},ownerState:{...T,...c==null?void 0:c.ownerState},className:[R.root,pe]}),Lt=H({elementType:xe,externalSlotProps:b,ownerState:T,className:R.rail}),Tt=H({elementType:Ne,externalSlotProps:l,additionalProps:{style:{...le[X].offset(Pe),...le[X].leap(ve)}},ownerState:{...T,...l==null?void 0:l.ownerState},className:R.track}),$e=H({elementType:Me,getSlotProps:je,externalSlotProps:P,ownerState:{...T,...P==null?void 0:P.ownerState},className:R.thumb}),It=H({elementType:Ee,externalSlotProps:M,ownerState:{...T,...M==null?void 0:M.ownerState},className:R.valueLabel}),De=H({elementType:a,externalSlotProps:k,ownerState:T,className:R.mark}),Oe=H({elementType:r,externalSlotProps:B,ownerState:T,className:R.markLabel}),Rt=H({elementType:o,getSlotProps:he,externalSlotProps:be,ownerState:T});return u.jsxs(fe,{...Ct,children:[u.jsx(xe,{...Lt}),u.jsx(Ne,{...Tt}),oe.filter(h=>h.value>=A&&h.value<=C).map((h,S)=>{const Fe=Ie(h.value,A,C),ye=le[X].offset(Fe);let K;return J===!1?K=y.includes(h.value):K=J==="normal"&&(Q?h.value>=y[0]&&h.value<=y[y.length-1]:h.value<=y[0])||J==="inverted"&&(Q?h.value<=y[0]||h.value>=y[y.length-1]:h.value>=y[0]),u.jsxs(g.Fragment,{children:[u.jsx(a,{"data-index":S,...De,...!Te(a)&&{markActive:K},style:{...ye,...De.style},className:ce(De.className,K&&R.markActive)}),h.label!=null?u.jsx(r,{"aria-hidden":!0,"data-index":S,...Oe,...!Te(r)&&{markLabelActive:K},style:{...ye,...Oe.style},className:ce(R.markLabel,Oe.className,K&&R.markLabelActive),children:h.label}):null]},S)}),y.map((h,S)=>{const Fe=Ie(h,A,C),ye=le[X].offset(Fe),K=re==="off"?ha:Ee;return u.jsx(K,{...!Te(K)&&{valueLabelFormat:Y,valueLabelDisplay:re,value:typeof Y=="function"?Y(x(h),S):Y,index:S,open:Ae===S||me===S||re==="on",disabled:j},...It,children:u.jsx(Me,{"data-index":S,...$e,className:ce(R.thumb,$e.className,me===S&&R.active,ne===S&&R.focusVisible),style:{...ye,...ze(S),...$e.style},children:u.jsx(o,{"data-index":S,"aria-label":te?te(S):I,"aria-valuenow":x(h),"aria-labelledby":f,"aria-valuetext":q?q(x(h),S):v,value:y[S],...Rt})})},S)})]})}),wa=({settingTitle:e,settingValue:t,settingIcon:n,dialogDescription:s,dialogDisclaimer:p,value:I,defaultValue:v,minValue:f,maxValue:m,stepSize:w,dialogTitle:z=e,valueUnit:W,handleUpdate:D,showSlider:pe,disabled:ie=!1,handleLiveUpdate:j,listItemTextSx:te})=>{const{t:q}=Dt(),[de,C]=g.useState(!1),[A,_]=g.useState(I),[G,O]=g.useState(I),F=g.useCallback((x,i)=>{_(x),i&&x!==G?D(x):j&&j(x)},[G,_,j,D]),ae=g.useCallback(()=>{F(G,!0),O(G),C(!1)},[G,D]),U=g.useCallback(()=>{v!==void 0&&(F(v,!0),O(v),C(!1))},[v,D]),$=()=>{F(A,!0),O(A),C(!1)};return u.jsxs(u.Fragment,{children:[u.jsxs(Ot,{disabled:ie,onClick:()=>C(!0),children:[n?u.jsx(Ft,{children:n}):null,u.jsx(Vt,{primary:e,secondary:t,sx:te,secondaryTypographyProps:{style:{display:"flex",flexDirection:"column"}}})]}),u.jsxs(Yt,{open:de,onClose:ae,children:[u.jsxs(Bt,{children:[u.jsx(_t,{sx:{paddingLeft:0},children:z}),(!!s||!!p)&&u.jsxs(Xt,{sx:{paddingBottom:"10px"},component:"div",children:[s&&u.jsx(ht,{variant:"body1",sx:{whiteSpace:"pre-line"},children:s}),p&&u.jsxs(Kt,{direction:"row",sx:{alignItems:"center"},children:[u.jsx(qt,{color:"warning"}),u.jsx(ht,{variant:"body1",sx:{marginLeft:"10px",marginTop:"5px",whiteSpace:"pre-line"},children:p})]})]}),u.jsx(Gt,{sx:{width:"100%",margin:"auto"},autoFocus:!0,value:A,type:"number",onChange:x=>{const i=Number(x.target.value);F(i,!1)},slotProps:{input:{inputProps:{min:f,max:m,step:w},endAdornment:u.jsx(Ut,{position:"end",children:W})}}}),pe?u.jsx(va,{"aria-label":"number-setting-slider",defaultValue:v,value:A,step:w,min:f,max:m,onChange:(x,i)=>{F(i,!1)}}):null]}),u.jsxs(Wt,{children:[v!==void 0?u.jsx(Be,{onClick:U,color:"primary",children:q("global.button.reset_to_default")}):null,u.jsx(Be,{onClick:ae,color:"primary",children:q("global.button.cancel")}),u.jsx(Be,{onClick:$,color:"primary",children:q("global.button.ok")})]})]})]})};export{wa as N};