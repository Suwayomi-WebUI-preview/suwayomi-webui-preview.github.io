!function(){var e=["aria-label","aria-valuetext","aria-labelledby","component","components","componentsProps","color","classes","className","disableSwap","disabled","getAriaLabel","getAriaValueText","marks","max","min","name","onChange","onChangeCommitted","orientation","shiftStep","size","step","scale","slotProps","slots","tabIndex","track","value","valueLabelDisplay","valueLabelFormat"];function t(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function r(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?t(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=s(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==s(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||i(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,i,l=[],s=!0,u=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=o.call(r)).done)&&(l.push(n.value),l.length!==t);s=!0);}catch(e){u=!0,a=e}finally{try{if(!s&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw a}}return l}}(e,t)||i(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){if(e){if("string"==typeof e)return l(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}System.register(["./index-legacy-BJXUhyM2.js","./Info-legacy-D0ThK2Sh.js","./TextField-legacy-Csb_zahn.js","./InputAdornment-legacy-DgF7ZTvm.js"],(function(t,i){"use strict";var l,u,c,d,v,p,m,f,b,h,g,y,x,k,S,w,j,L,C,P,A,O,T,I,R,z,N,E,M,V,D,F,Y,B,U,X,W,H,K,_;return{setters:[function(e){l=e.c,u=e.ca,c=e.cB,d=e.ao,v=e.ag,p=e.am,m=e.an,f=e.cC,b=e.cA,h=e.cD,g=e.a8,y=e.a9,x=e.ae,k=e.j,S=e.x,w=e.ab,j=e.ac,L=e.cw,C=e.cx,P=e.aP,A=e.cE,O=e.ad,T=e.ak,I=e.al,R=e.af,z=e.u,N=e.aL,E=e.a2,M=e.a3,V=e.W,D=e.aG,F=e.aF,Y=e.b7,B=e.T,U=e.S,X=e.aH,W=e.b},function(e){H=e.d},function(e){K=e.T},function(e){_=e.I}],execute:function(){var i={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"};function q(e,t){return e-t}function G(e,t){var r;return(null!==(r=e.reduce((function(e,r,n){var a=Math.abs(t-r);return null===e||a<e.distance||a===e.distance?{distance:a,index:n}:e}),null))&&void 0!==r?r:{}).index}function $(e,t){if(void 0!==t.current&&e.changedTouches){for(var r=e,n=0;n<r.changedTouches.length;n+=1){var a=r.changedTouches[n];if(a.identifier===t.current)return{x:a.clientX,y:a.clientY}}return!1}return{x:e.clientX,y:e.clientY}}function J(e,t,r){return 100*(e-t)/(r-t)}function Q(e,t,r){var n=Math.round((e-r)/t)*t+r;return Number(n.toFixed(function(e){if(Math.abs(e)<1){var t=e.toExponential().split("e-"),r=t[0].split(".")[1];return(r?r.length:0)+parseInt(t[1],10)}var n=e.toString().split(".")[1];return n?n.length:0}(t)))}function Z(e){var t=e.values,r=e.newValue,n=e.index,a=t.slice();return a[n]=r,a.sort(q)}function ee(e){var t,r,n,a=e.sliderRef,o=e.activeIndex,i=e.setActive,l=m(a.current);null!==(t=a.current)&&void 0!==t&&t.contains(l.activeElement)&&Number(null==l||null===(r=l.activeElement)||void 0===r?void 0:r.getAttribute("data-index"))===o||(null===(n=a.current)||void 0===n||n.querySelector('[type="range"][data-index="'.concat(o,'"]')).focus());i&&i(o)}function te(e,t){return"number"==typeof e&&"number"==typeof t?e===t:"object"===s(e)&&"object"===s(t)&&function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e,t){return e===t};return e.length===t.length&&e.every((function(e,n){return r(e,t[n])}))}(e,t)}var re,ne={horizontal:{offset:function(e){return{left:"".concat(e,"%")}},leap:function(e){return{width:"".concat(e,"%")}}},"horizontal-reverse":{offset:function(e){return{right:"".concat(e,"%")}},leap:function(e){return{width:"".concat(e,"%")}}},vertical:{offset:function(e){return{bottom:"".concat(e,"%")}},leap:function(e){return{height:"".concat(e,"%")}}}},ae=function(e){return e};function oe(){return void 0===re&&(re="undefined"==typeof CSS||"function"!=typeof CSS.supports||CSS.supports("touch-action","none")),re}function ie(e){var t=e["aria-labelledby"],n=e.defaultValue,s=e.disabled,h=void 0!==s&&s,g=e.disableSwap,y=void 0!==g&&g,x=e.isRtl,k=void 0!==x&&x,S=e.marks,w=void 0!==S&&S,j=e.max,L=void 0===j?100:j,C=e.min,P=void 0===C?0:C,A=e.name,O=e.onChange,T=e.onChangeCommitted,I=e.orientation,R=void 0===I?"horizontal":I,z=e.rootRef,N=e.scale,E=void 0===N?ae:N,M=e.step,V=void 0===M?1:M,D=e.shiftStep,F=void 0===D?10:D,Y=e.tabIndex,B=e.value,U=l.useRef(void 0),X=o(l.useState(-1),2),W=X[0],H=X[1],K=o(l.useState(-1),2),_=K[0],re=K[1],ie=o(l.useState(!1),2),le=ie[0],se=ie[1],ue=l.useRef(0),ce=o(u({controlled:B,default:null!=n?n:P,name:"Slider"}),2),de=ce[0],ve=ce[1],pe=O&&function(e,t,r){var n=e.nativeEvent||e,a=new n.constructor(n.type,n);Object.defineProperty(a,"target",{writable:!0,value:{value:t,name:A}}),O(a,t,r)},me=Array.isArray(de),fe=me?de.slice().sort(q):[de];fe=fe.map((function(e){return null==e?P:c(e,P,L)}));var be=!0===w&&null!==V?a(Array(Math.floor((L-P)/V)+1)).map((function(e,t){return{value:P+V*t}})):w||[],he=be.map((function(e){return e.value})),ge=o(l.useState(-1),2),ye=ge[0],xe=ge[1],ke=l.useRef(null),Se=d(z,ke),we=function(e){return function(t){var r,n=Number(t.currentTarget.getAttribute("data-index"));b(t.target)&&xe(n),re(n),null==e||null===(r=e.onFocus)||void 0===r||r.call(e,t)}},je=function(e){return function(t){var r;b(t.target)||xe(-1),re(-1),null==e||null===(r=e.onBlur)||void 0===r||r.call(e,t)}},Le=function(e,t){var r=Number(e.currentTarget.getAttribute("data-index")),n=fe[r],a=he.indexOf(n),o=t;if(be&&null==V){var i=he[he.length-1];o=o>i?i:o<he[0]?he[0]:o<n?he[a-1]:he[a+1]}if(o=c(o,P,L),me){y&&(o=c(o,fe[r-1]||-1/0,fe[r+1]||1/0));var l=o;o=Z({values:fe,newValue:o,index:r});var s=r;y||(s=o.indexOf(l)),ee({sliderRef:ke,activeIndex:s})}ve(o),xe(r),pe&&!te(o,de)&&pe(e,o,r),T&&T(e,o)},Ce=function(e){return function(t){var r;if(null!==V){var n=Number(t.currentTarget.getAttribute("data-index")),a=fe[n],o=null;("ArrowLeft"===t.key||"ArrowDown"===t.key)&&t.shiftKey||"PageDown"===t.key?o=Math.max(a-F,P):(("ArrowRight"===t.key||"ArrowUp"===t.key)&&t.shiftKey||"PageUp"===t.key)&&(o=Math.min(a+F,L)),null!==o&&(Le(t,o),t.preventDefault())}null==e||null===(r=e.onKeyDown)||void 0===r||r.call(e,t)}};v((function(){var e;h&&ke.current.contains(document.activeElement)&&(null===(e=document.activeElement)||void 0===e||e.blur())}),[h]),h&&-1!==W&&H(-1),h&&-1!==ye&&xe(-1);var Pe=l.useRef(void 0),Ae=R;k&&"horizontal"===R&&(Ae+="-reverse");var Oe=function(e){var t,r,n=e.finger,a=e.move,o=void 0!==a&&a,i=ke.current.getBoundingClientRect(),l=i.width,s=i.height,u=i.bottom,d=i.left;if(t=0===Ae.indexOf("vertical")?(u-n.y)/s:(n.x-d)/l,-1!==Ae.indexOf("-reverse")&&(t=1-t),r=function(e,t,r){return(r-t)*e+t}(t,P,L),V)r=Q(r,V,P);else{var v=G(he,r);r=he[v]}r=c(r,P,L);var p=0;if(me){p=o?Pe.current:G(fe,r),y&&(r=c(r,fe[p-1]||-1/0,fe[p+1]||1/0));var m=r;r=Z({values:fe,newValue:r,index:p}),y&&o||(p=r.indexOf(m),Pe.current=p)}return{newValue:r,activeIndex:p}},Te=p((function(e){var t=$(e,U);if(t)if(ue.current+=1,"mousemove"!==e.type||0!==e.buttons){var r=Oe({finger:t,move:!0}),n=r.newValue,a=r.activeIndex;ee({sliderRef:ke,activeIndex:a,setActive:H}),ve(n),!le&&ue.current>2&&se(!0),pe&&!te(n,de)&&pe(e,n,a)}else Ie(e)})),Ie=p((function(e){var t=$(e,U);if(se(!1),t){var r=Oe({finger:t,move:!0}).newValue;H(-1),"touchend"===e.type&&re(-1),T&&T(e,r),U.current=void 0,ze()}})),Re=p((function(e){if(!h){oe()||e.preventDefault();var t=e.changedTouches[0];null!=t&&(U.current=t.identifier);var r=$(e,U);if(!1!==r){var n=Oe({finger:r}),a=n.newValue,o=n.activeIndex;ee({sliderRef:ke,activeIndex:o,setActive:H}),ve(a),pe&&!te(a,de)&&pe(e,a,o)}ue.current=0;var i=m(ke.current);i.addEventListener("touchmove",Te,{passive:!0}),i.addEventListener("touchend",Ie,{passive:!0})}})),ze=l.useCallback((function(){var e=m(ke.current);e.removeEventListener("mousemove",Te),e.removeEventListener("mouseup",Ie),e.removeEventListener("touchmove",Te),e.removeEventListener("touchend",Ie)}),[Ie,Te]);l.useEffect((function(){var e=ke.current;return e.addEventListener("touchstart",Re,{passive:oe()}),function(){e.removeEventListener("touchstart",Re),ze()}}),[ze,Re]),l.useEffect((function(){h&&ze()}),[h,ze]);var Ne=J(me?fe[0]:P,P,L),Ee=J(fe[fe.length-1],P,L)-Ne,Me=function(e){return function(t){var r;null===(r=e.onMouseLeave)||void 0===r||r.call(e,t),re(-1)}};return{active:W,axis:Ae,axisProps:ne,dragging:le,focusedThumbIndex:ye,getHiddenInputProps:function(){var n,a,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=f(o),s={onChange:(a=l||{},function(e){var t;null===(t=a.onChange)||void 0===t||t.call(a,e),Le(e,e.target.valueAsNumber)}),onFocus:we(l||{}),onBlur:je(l||{}),onKeyDown:Ce(l||{})},u=r(r({},l),s);return r(r(r({tabIndex:Y,"aria-labelledby":t,"aria-orientation":R,"aria-valuemax":E(L),"aria-valuemin":E(P),name:A,type:"range",min:e.min,max:e.max,step:null===e.step&&e.marks?"any":null!==(n=e.step)&&void 0!==n?n:void 0,disabled:h},o),u),{},{style:r(r({},i),{},{direction:k?"rtl":"ltr",width:"100%",height:"100%"})})},getRootProps:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=f(t),a={onMouseDown:(e=n||{},function(t){var r;if(null===(r=e.onMouseDown)||void 0===r||r.call(e,t),!h&&!t.defaultPrevented&&0===t.button){t.preventDefault();var n=$(t,U);if(!1!==n){var a=Oe({finger:n}),o=a.newValue,i=a.activeIndex;ee({sliderRef:ke,activeIndex:i,setActive:H}),ve(o),pe&&!te(o,de)&&pe(t,o,i)}ue.current=0;var l=m(ke.current);l.addEventListener("mousemove",Te,{passive:!0}),l.addEventListener("mouseup",Ie)}})},o=r(r({},n),a);return r(r({},t),{},{ref:Se},o)},getThumbProps:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=f(t),a={onMouseOver:(e=n||{},function(t){var r;null===(r=e.onMouseOver)||void 0===r||r.call(e,t);var n=Number(t.currentTarget.getAttribute("data-index"));re(n)}),onMouseLeave:Me(n||{})};return r(r(r({},t),n),a)},marks:be,open:_,range:me,rootRef:Se,trackLeap:Ee,trackOffset:Ne,values:fe,getThumbStyle:function(e){return{pointerEvents:-1!==W&&W!==e?"none":void 0}}}}function le(e){return y("MuiSlider",e)}var se=g("MuiSlider",["root","active","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","disabled","dragging","focusVisible","mark","markActive","marked","markLabel","markLabelActive","rail","sizeSmall","thumb","thumbColorPrimary","thumbColorSecondary","thumbColorError","thumbColorSuccess","thumbColorInfo","thumbColorWarning","track","trackInverted","trackFalse","thumbSizeSmall","valueLabel","valueLabelOpen","valueLabelCircle","valueLabelLabel","vertical"]);function ue(e){return e}var ce=S("span",{name:"MuiSlider",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t["color".concat(w(r.color))],"medium"!==r.size&&t["size".concat(w(r.size))],r.marked&&t.marked,"vertical"===r.orientation&&t.vertical,"inverted"===r.track&&t.trackInverted,!1===r.track&&t.trackFalse]}})(j((function(e){var t=e.theme;return n(n(n({borderRadius:12,boxSizing:"content-box",display:"inline-block",position:"relative",cursor:"pointer",touchAction:"none",WebkitTapHighlightColor:"transparent","@media print":{colorAdjust:"exact"}},"&.".concat(se.disabled),{pointerEvents:"none",cursor:"default",color:(t.vars||t).palette.grey[400]}),"&.".concat(se.dragging),n({},"& .".concat(se.thumb,", & .").concat(se.track),{transition:"none"})),"variants",[].concat(a(Object.entries(t.palette).filter((function(e){var t=o(e,2)[1];return t&&t.main})).map((function(e){var r=o(e,1)[0];return{props:{color:r},style:{color:(t.vars||t).palette[r].main}}}))),[{props:{orientation:"horizontal"},style:{height:4,width:"100%",padding:"13px 0","@media (pointer: coarse)":{padding:"20px 0"}}},{props:{orientation:"horizontal",size:"small"},style:{height:2}},{props:{orientation:"horizontal",marked:!0},style:{marginBottom:20}},{props:{orientation:"vertical"},style:{height:"100%",width:4,padding:"0 13px","@media (pointer: coarse)":{padding:"0 20px"}}},{props:{orientation:"vertical",size:"small"},style:{width:2}},{props:{orientation:"vertical",marked:!0},style:{marginRight:44}}]))}))),de=S("span",{name:"MuiSlider",slot:"Rail",overridesResolver:function(e,t){return t.rail}})({display:"block",position:"absolute",borderRadius:"inherit",backgroundColor:"currentColor",opacity:.38,variants:[{props:{orientation:"horizontal"},style:{width:"100%",height:"inherit",top:"50%",transform:"translateY(-50%)"}},{props:{orientation:"vertical"},style:{height:"100%",width:"inherit",left:"50%",transform:"translateX(-50%)"}},{props:{track:"inverted"},style:{opacity:1}}]}),ve=S("span",{name:"MuiSlider",slot:"Track",overridesResolver:function(e,t){return t.track}})(j((function(e){var t=e.theme;return{display:"block",position:"absolute",borderRadius:"inherit",border:"1px solid currentColor",backgroundColor:"currentColor",transition:t.transitions.create(["left","width","bottom","height"],{duration:t.transitions.duration.shortest}),variants:[{props:{size:"small"},style:{border:"none"}},{props:{orientation:"horizontal"},style:{height:"inherit",top:"50%",transform:"translateY(-50%)"}},{props:{orientation:"vertical"},style:{width:"inherit",left:"50%",transform:"translateX(-50%)"}},{props:{track:!1},style:{display:"none"}}].concat(a(Object.entries(t.palette).filter((function(e){var t=o(e,2)[1];return t&&t.main})).map((function(e){var n=o(e,1)[0];return{props:{color:n,track:"inverted"},style:r({},t.vars?{backgroundColor:t.vars.palette.Slider["".concat(n,"Track")],borderColor:t.vars.palette.Slider["".concat(n,"Track")]}:r(r({backgroundColor:L(t.palette[n].main,.62),borderColor:L(t.palette[n].main,.62)},t.applyStyles("dark",{backgroundColor:C(t.palette[n].main,.5)})),t.applyStyles("dark",{borderColor:C(t.palette[n].main,.5)})))}}))))}}))),pe=S("span",{name:"MuiSlider",slot:"Thumb",overridesResolver:function(e,t){var r=e.ownerState;return[t.thumb,t["thumbColor".concat(w(r.color))],"medium"!==r.size&&t["thumbSize".concat(w(r.size))]]}})(j((function(e){var t=e.theme;return n(n({position:"absolute",width:20,height:20,boxSizing:"border-box",borderRadius:"50%",outline:0,backgroundColor:"currentColor",display:"flex",alignItems:"center",justifyContent:"center",transition:t.transitions.create(["box-shadow","left","bottom"],{duration:t.transitions.duration.shortest}),"&::before":{position:"absolute",content:'""',borderRadius:"inherit",width:"100%",height:"100%",boxShadow:(t.vars||t).shadows[2]},"&::after":{position:"absolute",content:'""',borderRadius:"50%",width:42,height:42,top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},"&.".concat(se.disabled),{"&:hover":{boxShadow:"none"}}),"variants",[{props:{size:"small"},style:{width:12,height:12,"&::before":{boxShadow:"none"}}},{props:{orientation:"horizontal"},style:{top:"50%",transform:"translate(-50%, -50%)"}},{props:{orientation:"vertical"},style:{left:"50%",transform:"translate(-50%, 50%)"}}].concat(a(Object.entries(t.palette).filter((function(e){var t=o(e,2)[1];return t&&t.main})).map((function(e){var a=o(e,1)[0];return{props:{color:a},style:n(n({},"&:hover, &.".concat(se.focusVisible),r(r({},t.vars?{boxShadow:"0px 0px 0px 8px rgba(".concat(t.vars.palette[a].mainChannel," / 0.16)")}:{boxShadow:"0px 0px 0px 8px ".concat(P(t.palette[a].main,.16))}),{},{"@media (hover: none)":{boxShadow:"none"}})),"&.".concat(se.active),r({},t.vars?{boxShadow:"0px 0px 0px 14px rgba(".concat(t.vars.palette[a].mainChannel," / 0.16)")}:{boxShadow:"0px 0px 0px 14px ".concat(P(t.palette[a].main,.16))}))}})))))}))),me=S((function(e){var t=e.children,r=e.className,n=e.value,a=function(e){var t=e.open;return{offset:x(t&&se.valueLabelOpen),circle:se.valueLabelCircle,label:se.valueLabelLabel}}(e);return t?l.cloneElement(t,{className:x(t.props.className)},k.jsxs(l.Fragment,{children:[t.props.children,k.jsx("span",{className:x(a.offset,r),"aria-hidden":!0,children:k.jsx("span",{className:a.circle,children:k.jsx("span",{className:a.label,children:n})})})]})):null}),{name:"MuiSlider",slot:"ValueLabel",overridesResolver:function(e,t){return t.valueLabel}})(j((function(e){var t=e.theme;return r(r({zIndex:1,whiteSpace:"nowrap"},t.typography.body2),{},{fontWeight:500,transition:t.transitions.create(["transform"],{duration:t.transitions.duration.shortest}),position:"absolute",backgroundColor:(t.vars||t).palette.grey[600],borderRadius:2,color:(t.vars||t).palette.common.white,display:"flex",alignItems:"center",justifyContent:"center",padding:"0.25rem 0.75rem",variants:[{props:{orientation:"horizontal"},style:n({transform:"translateY(-100%) scale(0)",top:"-10px",transformOrigin:"bottom center","&::before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, 50%) rotate(45deg)",backgroundColor:"inherit",bottom:0,left:"50%"}},"&.".concat(se.valueLabelOpen),{transform:"translateY(-100%) scale(1)"})},{props:{orientation:"vertical"},style:n({transform:"translateY(-50%) scale(0)",right:"30px",top:"50%",transformOrigin:"right center","&::before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, -50%) rotate(45deg)",backgroundColor:"inherit",right:-8,top:"50%"}},"&.".concat(se.valueLabelOpen),{transform:"translateY(-50%) scale(1)"})},{props:{size:"small"},style:{fontSize:t.typography.pxToRem(12),padding:"0.25rem 0.5rem"}},{props:{orientation:"vertical",size:"small"},style:{right:"20px"}}]})}))),fe=S("span",{name:"MuiSlider",slot:"Mark",shouldForwardProp:function(e){return A(e)&&"markActive"!==e},overridesResolver:function(e,t){var r=e.markActive;return[t.mark,r&&t.markActive]}})(j((function(e){var t=e.theme;return{position:"absolute",width:2,height:2,borderRadius:1,backgroundColor:"currentColor",variants:[{props:{orientation:"horizontal"},style:{top:"50%",transform:"translate(-1px, -50%)"}},{props:{orientation:"vertical"},style:{left:"50%",transform:"translate(-50%, 1px)"}},{props:{markActive:!0},style:{backgroundColor:(t.vars||t).palette.background.paper,opacity:.8}}]}}))),be=S("span",{name:"MuiSlider",slot:"MarkLabel",shouldForwardProp:function(e){return A(e)&&"markLabelActive"!==e},overridesResolver:function(e,t){return t.markLabel}})(j((function(e){var t=e.theme;return r(r({},t.typography.body2),{},{color:(t.vars||t).palette.text.secondary,position:"absolute",whiteSpace:"nowrap",variants:[{props:{orientation:"horizontal"},style:{top:30,transform:"translateX(-50%)","@media (pointer: coarse)":{top:40}}},{props:{orientation:"vertical"},style:{left:36,transform:"translateY(50%)","@media (pointer: coarse)":{left:44}}},{props:{markLabelActive:!0},style:{color:(t.vars||t).palette.text.primary}}]})}))),he=function(e){return e.children},ge=l.forwardRef((function(t,n){var a,o,i,s,u,c,d,v,p,m,f,b,g,y,S,j,L,C,P,A,z,N,E,M,V=O({props:t,name:"MuiSlider"}),D=T(),F=V["aria-label"],Y=V["aria-valuetext"],B=V["aria-labelledby"],U=V.component,X=void 0===U?"span":U,W=V.components,H=void 0===W?{}:W,K=V.componentsProps,_=void 0===K?{}:K,q=V.color,G=void 0===q?"primary":q,$=V.classes,Q=V.className,Z=V.disableSwap,ee=void 0!==Z&&Z,te=V.disabled,re=void 0!==te&&te,ne=V.getAriaLabel,ae=V.getAriaValueText,oe=V.marks,se=void 0!==oe&&oe,ge=V.max,ye=void 0===ge?100:ge,xe=V.min,ke=void 0===xe?0:xe,Se=(V.name,V.onChange,V.onChangeCommitted,V.orientation),we=void 0===Se?"horizontal":Se,je=V.shiftStep,Le=void 0===je?10:je,Ce=V.size,Pe=void 0===Ce?"medium":Ce,Ae=V.step,Oe=void 0===Ae?1:Ae,Te=V.scale,Ie=void 0===Te?ue:Te,Re=V.slotProps,ze=V.slots,Ne=(V.tabIndex,V.track),Ee=void 0===Ne?"normal":Ne,Me=(V.value,V.valueLabelDisplay),Ve=void 0===Me?"off":Me,De=V.valueLabelFormat,Fe=void 0===De?ue:De,Ye=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.includes(r)||{}.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(V,e),Be=r(r({},V),{},{isRtl:D,max:ye,min:ke,classes:$,disabled:re,disableSwap:ee,orientation:we,marks:se,color:G,size:Pe,step:Oe,shiftStep:Le,scale:Ie,track:Ee,valueLabelDisplay:Ve,valueLabelFormat:Fe}),Ue=ie(r(r({},Be),{},{rootRef:n})),Xe=Ue.axisProps,We=Ue.getRootProps,He=Ue.getHiddenInputProps,Ke=Ue.getThumbProps,_e=Ue.open,qe=Ue.active,Ge=Ue.axis,$e=Ue.focusedThumbIndex,Je=Ue.range,Qe=Ue.dragging,Ze=Ue.marks,et=Ue.values,tt=Ue.trackOffset,rt=Ue.trackLeap,nt=Ue.getThumbStyle;Be.marked=Ze.length>0&&Ze.some((function(e){return e.label})),Be.dragging=Qe,Be.focusedThumbIndex=$e;var at,ot=function(e){var t=e.disabled,r=e.dragging,n=e.marked,a=e.orientation,o=e.track,i=e.classes,l=e.color,s=e.size,u={root:["root",t&&"disabled",r&&"dragging",n&&"marked","vertical"===a&&"vertical","inverted"===o&&"trackInverted",!1===o&&"trackFalse",l&&"color".concat(w(l)),s&&"size".concat(w(s))],rail:["rail"],track:["track"],mark:["mark"],markActive:["markActive"],markLabel:["markLabel"],markLabelActive:["markLabelActive"],valueLabel:["valueLabel"],thumb:["thumb",t&&"disabled",s&&"thumbSize".concat(w(s)),l&&"thumbColor".concat(w(l))],active:["active"],disabled:["disabled"],focusVisible:["focusVisible"]};return R(u,le,i)}(Be),it=null!==(a=null!==(o=null==ze?void 0:ze.root)&&void 0!==o?o:H.Root)&&void 0!==a?a:ce,lt=null!==(i=null!==(s=null==ze?void 0:ze.rail)&&void 0!==s?s:H.Rail)&&void 0!==i?i:de,st=null!==(u=null!==(c=null==ze?void 0:ze.track)&&void 0!==c?c:H.Track)&&void 0!==u?u:ve,ut=null!==(d=null!==(v=null==ze?void 0:ze.thumb)&&void 0!==v?v:H.Thumb)&&void 0!==d?d:pe,ct=null!==(p=null!==(m=null==ze?void 0:ze.valueLabel)&&void 0!==m?m:H.ValueLabel)&&void 0!==p?p:me,dt=null!==(f=null!==(b=null==ze?void 0:ze.mark)&&void 0!==b?b:H.Mark)&&void 0!==f?f:fe,vt=null!==(g=null!==(y=null==ze?void 0:ze.markLabel)&&void 0!==y?y:H.MarkLabel)&&void 0!==g?g:be,pt=null!==(S=null!==(j=null==ze?void 0:ze.input)&&void 0!==j?j:H.Input)&&void 0!==S?S:"input",mt=null!==(L=null==Re?void 0:Re.root)&&void 0!==L?L:_.root,ft=null!==(C=null==Re?void 0:Re.rail)&&void 0!==C?C:_.rail,bt=null!==(P=null==Re?void 0:Re.track)&&void 0!==P?P:_.track,ht=null!==(A=null==Re?void 0:Re.thumb)&&void 0!==A?A:_.thumb,gt=null!==(z=null==Re?void 0:Re.valueLabel)&&void 0!==z?z:_.valueLabel,yt=null!==(N=null==Re?void 0:Re.mark)&&void 0!==N?N:_.mark,xt=null!==(E=null==Re?void 0:Re.markLabel)&&void 0!==E?E:_.markLabel,kt=null!==(M=null==Re?void 0:Re.input)&&void 0!==M?M:_.input,St=I({elementType:it,getSlotProps:We,externalSlotProps:mt,externalForwardedProps:Ye,additionalProps:r({},(at=it,(!at||!h(at))&&{as:X})),ownerState:r(r({},Be),null==mt?void 0:mt.ownerState),className:[ot.root,Q]}),wt=I({elementType:lt,externalSlotProps:ft,ownerState:Be,className:ot.rail}),jt=I({elementType:st,externalSlotProps:bt,additionalProps:{style:r(r({},Xe[Ge].offset(tt)),Xe[Ge].leap(rt))},ownerState:r(r({},Be),null==bt?void 0:bt.ownerState),className:ot.track}),Lt=I({elementType:ut,getSlotProps:Ke,externalSlotProps:ht,ownerState:r(r({},Be),null==ht?void 0:ht.ownerState),className:ot.thumb}),Ct=I({elementType:ct,externalSlotProps:gt,ownerState:r(r({},Be),null==gt?void 0:gt.ownerState),className:ot.valueLabel}),Pt=I({elementType:dt,externalSlotProps:yt,ownerState:Be,className:ot.mark}),At=I({elementType:vt,externalSlotProps:xt,ownerState:Be,className:ot.markLabel}),Ot=I({elementType:pt,getSlotProps:He,externalSlotProps:kt,ownerState:Be});return k.jsxs(it,r(r({},St),{},{children:[k.jsx(lt,r({},wt)),k.jsx(st,r({},jt)),Ze.filter((function(e){return e.value>=ke&&e.value<=ye})).map((function(e,t){var n,a=J(e.value,ke,ye),o=Xe[Ge].offset(a);return n=!1===Ee?et.includes(e.value):"normal"===Ee&&(Je?e.value>=et[0]&&e.value<=et[et.length-1]:e.value<=et[0])||"inverted"===Ee&&(Je?e.value<=et[0]||e.value>=et[et.length-1]:e.value>=et[0]),k.jsxs(l.Fragment,{children:[k.jsx(dt,r(r(r({"data-index":t},Pt),!h(dt)&&{markActive:n}),{},{style:r(r({},o),Pt.style),className:x(Pt.className,n&&ot.markActive)})),null!=e.label?k.jsx(vt,r(r(r({"aria-hidden":!0,"data-index":t},At),!h(vt)&&{markLabelActive:n}),{},{style:r(r({},o),At.style),className:x(ot.markLabel,At.className,n&&ot.markLabelActive),children:e.label})):null]},t)})),et.map((function(e,t){var n=J(e,ke,ye),a=Xe[Ge].offset(n),o="off"===Ve?he:ct;return k.jsx(o,r(r(r({},!h(o)&&{valueLabelFormat:Fe,valueLabelDisplay:Ve,value:"function"==typeof Fe?Fe(Ie(e),t):Fe,index:t,open:_e===t||qe===t||"on"===Ve,disabled:re}),Ct),{},{children:k.jsx(ut,r(r({"data-index":t},Lt),{},{className:x(ot.thumb,Lt.className,qe===t&&ot.active,$e===t&&ot.focusVisible),style:r(r(r({},a),nt(t)),Lt.style),children:k.jsx(pt,r({"data-index":t,"aria-label":ne?ne(t):F,"aria-valuenow":Ie(e),"aria-labelledby":B,"aria-valuetext":ae?ae(Ie(e),t):Y,value:et[t]},Ot))}))}),t)}))]}))}));t("N",(function(e){var t=e.settingTitle,r=e.settingValue,n=e.settingIcon,a=e.dialogDescription,i=e.dialogDisclaimer,s=e.value,u=e.defaultValue,c=e.minValue,d=e.maxValue,v=e.stepSize,p=e.dialogTitle,m=void 0===p?t:p,f=e.valueUnit,b=e.handleUpdate,h=e.showSlider,g=e.disabled,y=void 0!==g&&g,x=e.handleLiveUpdate,S=e.listItemTextSx,w=z().t,j=o(l.useState(!1),2),L=j[0],C=j[1],P=o(l.useState(s),2),A=P[0],O=P[1],T=o(l.useState(s),2),I=T[0],R=T[1],q=l.useCallback((function(e,t){O(e),t&&e!==I?b(e):x&&x(e)}),[I,O,x,b]),G=l.useCallback((function(){q(I,!0),R(I),C(!1)}),[I,b]),$=l.useCallback((function(){void 0!==u&&(q(u,!0),R(u),C(!1))}),[u,b]);return k.jsxs(k.Fragment,{children:[k.jsxs(N,{disabled:y,onClick:function(){return C(!0)},children:[n?k.jsx(E,{children:n}):null,k.jsx(M,{primary:t,secondary:r,sx:S,secondaryTypographyProps:{style:{display:"flex",flexDirection:"column"}}})]}),k.jsxs(V,{open:L,onClose:G,children:[k.jsxs(D,{children:[k.jsx(F,{sx:{paddingLeft:0},children:m}),(!!a||!!i)&&k.jsxs(Y,{sx:{paddingBottom:"10px"},component:"div",children:[a&&k.jsx(B,{variant:"body1",sx:{whiteSpace:"pre-line"},children:a}),i&&k.jsxs(U,{direction:"row",sx:{alignItems:"center"},children:[k.jsx(H,{color:"warning"}),k.jsx(B,{variant:"body1",sx:{marginLeft:"10px",marginTop:"5px",whiteSpace:"pre-line"},children:i})]})]}),k.jsx(K,{sx:{width:"100%",margin:"auto"},autoFocus:!0,value:A,type:"number",onChange:function(e){var t=Number(e.target.value);q(t,!1)},slotProps:{input:{inputProps:{min:c,max:d,step:v},endAdornment:k.jsx(_,{position:"end",children:f})}}}),h?k.jsx(ge,{"aria-label":"number-setting-slider",defaultValue:u,value:A,step:v,min:c,max:d,onChange:function(e,t){q(t,!1)}}):null]}),k.jsxs(X,{children:[void 0!==u?k.jsx(W,{onClick:$,color:"primary",children:w("global.button.reset_to_default")}):null,k.jsx(W,{onClick:G,color:"primary",children:w("global.button.cancel")}),k.jsx(W,{onClick:function(){q(A,!0),R(A),C(!1)},color:"primary",children:w("global.button.ok")})]})]})]})}))}}}))}();
