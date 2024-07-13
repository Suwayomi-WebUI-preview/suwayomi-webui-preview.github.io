!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n,r){return(n=function(e){var n=function(e,n){if("object"!=t(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,n||"default");if("object"!=t(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"==t(n)?n:n+""}(n))in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}System.register(["./index-legacy-DYOAMH_U.js"],(function(t,n){"use strict";var r,i,o,a,s,u,c,l,d,p,f,h,m,v,y,g;return{setters:[function(t){r=t.a0,i=t.$,o=t.s,a=t.a3,s=t.c,u=t.a4,c=t.c0,l=t.ai,d=t.a5,p=t.x,f=t.c1,h=t.ah,m=t.j,v=t.a6,y=t.a7,g=t.ak}],execute:function(){function n(t){return r("MuiCollapse",t)}i("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);var w=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],x=o("div",{name:"MuiCollapse",slot:"Root",overridesResolver:function(t,e){var n=t.ownerState;return[e.root,e[n.orientation],"entered"===n.state&&e.entered,"exited"===n.state&&!n.in&&"0px"===n.collapsedSize&&e.hidden]}})((function(t){var e=t.theme,n=t.ownerState;return a({height:0,overflow:"hidden",transition:e.transitions.create("height")},"horizontal"===n.orientation&&{height:"auto",width:0,transition:e.transitions.create("width")},"entered"===n.state&&a({height:"auto",overflow:"visible"},"horizontal"===n.orientation&&{width:"auto"}),"exited"===n.state&&!n.in&&"0px"===n.collapsedSize&&{visibility:"hidden"})})),E=o("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:function(t,e){return e.wrapper}})((function(t){var e=t.ownerState;return a({display:"flex",width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"})})),S=o("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:function(t,e){return e.wrapperInner}})((function(t){var e=t.ownerState;return a({width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"})})),b=s.forwardRef((function(t,r){var i=u({props:t,name:"MuiCollapse"}),o=i.addEndListener,b=i.children,z=i.className,j=i.collapsedSize,C=void 0===j?"0px":j,R=i.component,D=i.easing,I=i.in,M=i.onEnter,N=i.onEntered,T=i.onEntering,H=i.onExit,W=i.onExited,A=i.onExiting,L=i.orientation,P=void 0===L?"vertical":L,F=i.style,k=i.timeout,O=void 0===k?c.standard:k,$=i.TransitionComponent,q=void 0===$?l:$,B=d(i,w),G=a({},i,{orientation:P,collapsedSize:C}),J=function(t){var e=t.orientation,r=t.classes,i={root:["root","".concat(e)],entered:["entered"],hidden:["hidden"],wrapper:["wrapper","".concat(e)],wrapperInner:["wrapperInner","".concat(e)]};return y(i,n,r)}(G),K=p(),Q=f(),U=s.useRef(null),V=s.useRef(),X="number"==typeof C?"".concat(C,"px"):C,Y="horizontal"===P,Z=Y?"width":"height",_=s.useRef(null),tt=h(r,_),et=function(t){return function(e){if(t){var n=_.current;void 0===e?t(n):t(n,e)}}},nt=function(){return U.current?U.current[Y?"clientWidth":"clientHeight"]:0},rt=et((function(t,e){U.current&&Y&&(U.current.style.position="absolute"),t.style[Z]=X,M&&M(t,e)})),it=et((function(t,e){var n=nt();U.current&&Y&&(U.current.style.position="");var r=g({style:F,timeout:O,easing:D},{mode:"enter"}),i=r.duration,o=r.easing;if("auto"===O){var a=K.transitions.getAutoHeightDuration(n);t.style.transitionDuration="".concat(a,"ms"),V.current=a}else t.style.transitionDuration="string"==typeof i?i:"".concat(i,"ms");t.style[Z]="".concat(n,"px"),t.style.transitionTimingFunction=o,T&&T(t,e)})),ot=et((function(t,e){t.style[Z]="auto",N&&N(t,e)})),at=et((function(t){t.style[Z]="".concat(nt(),"px"),H&&H(t)})),st=et(W),ut=et((function(t){var e=nt(),n=g({style:F,timeout:O,easing:D},{mode:"exit"}),r=n.duration,i=n.easing;if("auto"===O){var o=K.transitions.getAutoHeightDuration(e);t.style.transitionDuration="".concat(o,"ms"),V.current=o}else t.style.transitionDuration="string"==typeof r?r:"".concat(r,"ms");t.style[Z]=X,t.style.transitionTimingFunction=i,A&&A(t)}));return m.jsx(q,a({in:I,onEnter:rt,onEntered:ot,onEntering:it,onExit:at,onExited:st,onExiting:ut,addEndListener:function(t){"auto"===O&&Q.start(V.current||0,t),o&&o(_.current,t)},nodeRef:_,timeout:"auto"===O?null:O},B,{children:function(t,n){return m.jsx(x,a({as:R,className:v(J.root,z,{entered:J.entered,exited:!I&&"0px"===X&&J.hidden}[t]),style:a(e({},Y?"minWidth":"minHeight",X),F),ref:tt},n,{ownerState:a({},G,{state:t}),children:m.jsx(E,{ownerState:a({},G,{state:t}),className:J.wrapper,ref:U,children:m.jsx(S,{ownerState:a({},G,{state:t}),className:J.wrapperInner,children:b})})}))}}))}));b.muiSupportAuto=!0;t("C",b)}}}))}();
