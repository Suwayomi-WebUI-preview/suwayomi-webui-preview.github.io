!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n,i){var r;return r=function(e,n){if("object"!=t(e)||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,n||"default");if("object"!=t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(n,"string"),(n="symbol"==t(r)?r:r+"")in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}System.register(["./index-legacy-B5q6B0v3.js"],(function(t,n){"use strict";var i,r,o,a,s,u,l,c,d,p,f,h,m,v,y,g;return{setters:[function(t){i=t.a0,r=t.$,o=t.s,a=t.a3,s=t.c,u=t.a4,l=t.bP,c=t.ai,d=t.a5,p=t.x,f=t.bQ,h=t.ah,m=t.j,v=t.a6,y=t.a7,g=t.ak}],execute:function(){function n(t){return i("MuiCollapse",t)}r("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);var w=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],x=o("div",{name:"MuiCollapse",slot:"Root",overridesResolver:function(t,e){var n=t.ownerState;return[e.root,e[n.orientation],"entered"===n.state&&e.entered,"exited"===n.state&&!n.in&&"0px"===n.collapsedSize&&e.hidden]}})((function(t){var e=t.theme,n=t.ownerState;return a({height:0,overflow:"hidden",transition:e.transitions.create("height")},"horizontal"===n.orientation&&{height:"auto",width:0,transition:e.transitions.create("width")},"entered"===n.state&&a({height:"auto",overflow:"visible"},"horizontal"===n.orientation&&{width:"auto"}),"exited"===n.state&&!n.in&&"0px"===n.collapsedSize&&{visibility:"hidden"})})),b=o("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:function(t,e){return e.wrapper}})((function(t){var e=t.ownerState;return a({display:"flex",width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"})})),E=o("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:function(t,e){return e.wrapperInner}})((function(t){var e=t.ownerState;return a({width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"})})),S=s.forwardRef((function(t,i){var r=u({props:t,name:"MuiCollapse"}),o=r.addEndListener,S=r.children,z=r.className,j=r.collapsedSize,C=void 0===j?"0px":j,R=r.component,D=r.easing,I=r.in,M=r.onEnter,N=r.onEntered,T=r.onEntering,H=r.onExit,P=r.onExited,W=r.onExiting,A=r.orientation,L=void 0===A?"vertical":A,F=r.style,k=r.timeout,O=void 0===k?l.standard:k,Q=r.TransitionComponent,$=void 0===Q?c:Q,q=d(r,w),B=a({},r,{orientation:L,collapsedSize:C}),G=function(t){var e=t.orientation,i=t.classes,r={root:["root","".concat(e)],entered:["entered"],hidden:["hidden"],wrapper:["wrapper","".concat(e)],wrapperInner:["wrapperInner","".concat(e)]};return y(r,n,i)}(B),J=p(),K=f(),U=s.useRef(null),V=s.useRef(),X="number"==typeof C?"".concat(C,"px"):C,Y="horizontal"===L,Z=Y?"width":"height",_=s.useRef(null),tt=h(i,_),et=function(t){return function(e){if(t){var n=_.current;void 0===e?t(n):t(n,e)}}},nt=function(){return U.current?U.current[Y?"clientWidth":"clientHeight"]:0},it=et((function(t,e){U.current&&Y&&(U.current.style.position="absolute"),t.style[Z]=X,M&&M(t,e)})),rt=et((function(t,e){var n=nt();U.current&&Y&&(U.current.style.position="");var i=g({style:F,timeout:O,easing:D},{mode:"enter"}),r=i.duration,o=i.easing;if("auto"===O){var a=J.transitions.getAutoHeightDuration(n);t.style.transitionDuration="".concat(a,"ms"),V.current=a}else t.style.transitionDuration="string"==typeof r?r:"".concat(r,"ms");t.style[Z]="".concat(n,"px"),t.style.transitionTimingFunction=o,T&&T(t,e)})),ot=et((function(t,e){t.style[Z]="auto",N&&N(t,e)})),at=et((function(t){t.style[Z]="".concat(nt(),"px"),H&&H(t)})),st=et(P),ut=et((function(t){var e=nt(),n=g({style:F,timeout:O,easing:D},{mode:"exit"}),i=n.duration,r=n.easing;if("auto"===O){var o=J.transitions.getAutoHeightDuration(e);t.style.transitionDuration="".concat(o,"ms"),V.current=o}else t.style.transitionDuration="string"==typeof i?i:"".concat(i,"ms");t.style[Z]=X,t.style.transitionTimingFunction=r,W&&W(t)}));return m.jsx($,a({in:I,onEnter:it,onEntered:ot,onEntering:rt,onExit:at,onExited:st,onExiting:ut,addEndListener:function(t){"auto"===O&&K.start(V.current||0,t),o&&o(_.current,t)},nodeRef:_,timeout:"auto"===O?null:O},q,{children:function(t,n){return m.jsx(x,a({as:R,className:v(G.root,z,{entered:G.entered,exited:!I&&"0px"===X&&G.hidden}[t]),style:a(e({},Y?"minWidth":"minHeight",X),F),ref:tt},n,{ownerState:a({},B,{state:t}),children:m.jsx(b,{ownerState:a({},B,{state:t}),className:G.wrapper,ref:U,children:m.jsx(E,{ownerState:a({},B,{state:t}),className:G.wrapperInner,children:S})})}))}}))}));S.muiSupportAuto=!0;t("C",S)}}}))}();