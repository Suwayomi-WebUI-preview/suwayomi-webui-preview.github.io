import{a1 as tt,a0 as et,s as T,a4 as o,c as y,a5 as nt,c2 as it,aj as ot,a6 as st,x as rt,c3 as at,ai as lt,j as C,a7 as pt,a8 as dt,al as P}from"./index-BHxGywp1.js";function ct(n){return tt("MuiCollapse",n)}et("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const ut=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],ht=n=>{const{orientation:e,classes:s}=n,d={root:["root","".concat(e)],entered:["entered"],hidden:["hidden"],wrapper:["wrapper","".concat(e)],wrapperInner:["wrapperInner","".concat(e)]};return dt(d,ct,s)},mt=T("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:s}=n;return[e.root,e[s.orientation],s.state==="entered"&&e.entered,s.state==="exited"&&!s.in&&s.collapsedSize==="0px"&&e.hidden]}})(({theme:n,ownerState:e})=>o({height:0,overflow:"hidden",transition:n.transitions.create("height")},e.orientation==="horizontal"&&{height:"auto",width:0,transition:n.transitions.create("width")},e.state==="entered"&&o({height:"auto",overflow:"visible"},e.orientation==="horizontal"&&{width:"auto"}),e.state==="exited"&&!e.in&&e.collapsedSize==="0px"&&{visibility:"hidden"})),gt=T("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(n,e)=>e.wrapper})(({ownerState:n})=>o({display:"flex",width:"100%"},n.orientation==="horizontal"&&{width:"auto",height:"100%"})),xt=T("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(n,e)=>e.wrapperInner})(({ownerState:n})=>o({width:"100%"},n.orientation==="horizontal"&&{width:"auto",height:"100%"})),U=y.forwardRef(function(e,s){const d=nt({props:e,name:"MuiCollapse"}),{addEndListener:S,children:b,className:A,collapsedSize:g="0px",component:_,easing:$,in:D,onEnter:j,onEntered:W,onEntering:I,onExit:M,onExited:k,onExiting:F,orientation:H="vertical",style:z,timeout:a=it.standard,TransitionComponent:q=ot}=d,B=st(d,ut),x=o({},d,{orientation:H,collapsedSize:g}),c=ht(x),L=rt(),G=at(),l=y.useRef(null),v=y.useRef(),f=typeof g=="number"?"".concat(g,"px"):g,u=H==="horizontal",h=u?"width":"height",E=y.useRef(null),J=lt(s,E),p=t=>i=>{if(t){const r=E.current;i===void 0?t(r):t(r,i)}},R=()=>l.current?l.current[u?"clientWidth":"clientHeight"]:0,K=p((t,i)=>{l.current&&u&&(l.current.style.position="absolute"),t.style[h]=f,j&&j(t,i)}),O=p((t,i)=>{const r=R();l.current&&u&&(l.current.style.position="");const{duration:m,easing:w}=P({style:z,timeout:a,easing:$},{mode:"enter"});if(a==="auto"){const N=L.transitions.getAutoHeightDuration(r);t.style.transitionDuration="".concat(N,"ms"),v.current=N}else t.style.transitionDuration=typeof m=="string"?m:"".concat(m,"ms");t.style[h]="".concat(r,"px"),t.style.transitionTimingFunction=w,I&&I(t,i)}),Q=p((t,i)=>{t.style[h]="auto",W&&W(t,i)}),V=p(t=>{t.style[h]="".concat(R(),"px"),M&&M(t)}),X=p(k),Y=p(t=>{const i=R(),{duration:r,easing:m}=P({style:z,timeout:a,easing:$},{mode:"exit"});if(a==="auto"){const w=L.transitions.getAutoHeightDuration(i);t.style.transitionDuration="".concat(w,"ms"),v.current=w}else t.style.transitionDuration=typeof r=="string"?r:"".concat(r,"ms");t.style[h]=f,t.style.transitionTimingFunction=m,F&&F(t)}),Z=t=>{a==="auto"&&G.start(v.current||0,t),S&&S(E.current,t)};return C.jsx(q,o({in:D,onEnter:K,onEntered:Q,onEntering:O,onExit:V,onExited:X,onExiting:Y,addEndListener:Z,nodeRef:E,timeout:a==="auto"?null:a},B,{children:(t,i)=>C.jsx(mt,o({as:_,className:pt(c.root,A,{entered:c.entered,exited:!D&&f==="0px"&&c.hidden}[t]),style:o({[u?"minWidth":"minHeight"]:f},z),ref:J},i,{ownerState:o({},x,{state:t}),children:C.jsx(gt,{ownerState:o({},x,{state:t}),className:c.wrapper,ref:l,children:C.jsx(xt,{ownerState:o({},x,{state:t}),className:c.wrapperInner,children:b})})}))}))});U.muiSupportAuto=!0;const Et=U;export{Et as C};
