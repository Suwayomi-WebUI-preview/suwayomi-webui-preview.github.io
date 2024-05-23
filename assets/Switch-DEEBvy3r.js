import{a0 as $,a1 as S,s as d,a3 as e,bv as b,bw as x,bx as y,c as m,a6 as f,a4 as l,j as n,a7 as C,by as z,a8 as R}from"./index-DNjlRA85.js";import{S as B}from"./SwitchBase-C1di-KNF.js";function j(a){return S("MuiSwitch",a)}const s=$("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),M=["className","color","edge","size","sx"],T=z(),_=a=>{const{classes:t,edge:o,size:r,color:p,checked:u,disabled:h}=a,g={root:["root",o&&"edge".concat(e(o)),"size".concat(e(r))],switchBase:["switchBase","color".concat(e(p)),u&&"checked",h&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},w=R(g,j,t);return l({},t,w)},N=d("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(a,t)=>{const{ownerState:o}=a;return[t.root,o.edge&&t["edge".concat(e(o.edge))],t["size".concat(e(o.size))]]}})({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"},variants:[{props:{edge:"start"},style:{marginLeft:-8}},{props:{edge:"end"},style:{marginRight:-8}},{props:{size:"small"},style:{width:40,height:24,padding:7,["& .".concat(s.thumb)]:{width:16,height:16},["& .".concat(s.switchBase)]:{padding:4,["&.".concat(s.checked)]:{transform:"translateX(16px)"}}}}]}),O=d(B,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(a,t)=>{const{ownerState:o}=a;return[t.switchBase,{["& .".concat(s.input)]:t.input},o.color!=="default"&&t["color".concat(e(o.color))]]}})(({theme:a})=>({position:"absolute",top:0,left:0,zIndex:1,color:a.vars?a.vars.palette.Switch.defaultColor:"".concat(a.palette.mode==="light"?a.palette.common.white:a.palette.grey[300]),transition:a.transitions.create(["left","transform"],{duration:a.transitions.duration.shortest}),["&.".concat(s.checked)]:{transform:"translateX(20px)"},["&.".concat(s.disabled)]:{color:a.vars?a.vars.palette.Switch.defaultDisabledColor:"".concat(a.palette.mode==="light"?a.palette.grey[100]:a.palette.grey[600])},["&.".concat(s.checked," + .").concat(s.track)]:{opacity:.5},["&.".concat(s.disabled," + .").concat(s.track)]:{opacity:a.vars?a.vars.opacity.switchTrackDisabled:"".concat(a.palette.mode==="light"?.12:.2)},["& .".concat(s.input)]:{left:"-100%",width:"300%"}}),({theme:a})=>({"&:hover":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.action.activeChannel," / ").concat(a.vars.palette.action.hoverOpacity,")"):b(a.palette.action.active,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[...Object.entries(a.palette).filter(([,t])=>t.main&&t.light).map(([t])=>({props:{color:t},style:{["&.".concat(s.checked)]:{color:(a.vars||a).palette[t].main,"&:hover":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette[t].mainChannel," / ").concat(a.vars.palette.action.hoverOpacity,")"):b(a.palette[t].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},["&.".concat(s.disabled)]:{color:a.vars?a.vars.palette.Switch["".concat(t,"DisabledColor")]:"".concat(a.palette.mode==="light"?x(a.palette[t].main,.62):y(a.palette[t].main,.55))}},["&.".concat(s.checked," + .").concat(s.track)]:{backgroundColor:(a.vars||a).palette[t].main}}}))]})),U=d("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(a,t)=>t.track})(({theme:a})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:a.transitions.create(["opacity","background-color"],{duration:a.transitions.duration.shortest}),backgroundColor:a.vars?a.vars.palette.common.onBackground:"".concat(a.palette.mode==="light"?a.palette.common.black:a.palette.common.white),opacity:a.vars?a.vars.opacity.switchTrack:"".concat(a.palette.mode==="light"?.38:.3)})),I=d("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(a,t)=>t.thumb})(({theme:a})=>({boxShadow:(a.vars||a).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),P=m.forwardRef(function(t,o){const r=T({props:t,name:"MuiSwitch"}),{className:p,color:u="primary",edge:h=!1,size:g="medium",sx:w}=r,k=f(r,M),i=l({},r,{color:u,edge:h,size:g}),c=_(i),v=n.jsx(I,{className:c.thumb,ownerState:i});return n.jsxs(N,{className:C(c.root,p),sx:w,ownerState:i,children:[n.jsx(O,l({type:"checkbox",icon:v,checkedIcon:v,ref:o,ownerState:i},k,{classes:l({},c,{root:c.switchBase})})),n.jsx(U,{className:c.track,ownerState:i})]})}),A=P;export{A as S};
