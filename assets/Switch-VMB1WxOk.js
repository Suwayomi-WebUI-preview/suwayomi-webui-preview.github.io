import{$,a0 as S,s as d,a2 as e,bt as b,bu as x,bv as y,c as m,a5 as f,a3 as l,j as n,a6 as C,bw as z,a7 as R}from"./index-5KkoNewZ.js";import{S as B}from"./SwitchBase-DvFmDdme.js";function j(t){return S("MuiSwitch",t)}const s=$("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),M=["className","color","edge","size","sx"],T=z(),_=t=>{const{classes:a,edge:o,size:r,color:p,checked:u,disabled:h}=t,g={root:["root",o&&"edge".concat(e(o)),"size".concat(e(r))],switchBase:["switchBase","color".concat(e(p)),u&&"checked",h&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},w=R(g,j,a);return l({},a,w)},N=d("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:o}=t;return[a.root,o.edge&&a["edge".concat(e(o.edge))],a["size".concat(e(o.size))]]}})({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"},variants:[{props:{edge:"start"},style:{marginLeft:-8}},{props:{edge:"end"},style:{marginRight:-8}},{props:{size:"small"},style:{width:40,height:24,padding:7,["& .".concat(s.thumb)]:{width:16,height:16},["& .".concat(s.switchBase)]:{padding:4,["&.".concat(s.checked)]:{transform:"translateX(16px)"}}}}]}),O=d(B,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(t,a)=>{const{ownerState:o}=t;return[a.switchBase,{["& .".concat(s.input)]:a.input},o.color!=="default"&&a["color".concat(e(o.color))]]}})(({theme:t})=>({position:"absolute",top:0,left:0,zIndex:1,color:t.vars?t.vars.palette.Switch.defaultColor:"".concat(t.palette.mode==="light"?t.palette.common.white:t.palette.grey[300]),transition:t.transitions.create(["left","transform"],{duration:t.transitions.duration.shortest}),["&.".concat(s.checked)]:{transform:"translateX(20px)"},["&.".concat(s.disabled)]:{color:t.vars?t.vars.palette.Switch.defaultDisabledColor:"".concat(t.palette.mode==="light"?t.palette.grey[100]:t.palette.grey[600])},["&.".concat(s.checked," + .").concat(s.track)]:{opacity:.5},["&.".concat(s.disabled," + .").concat(s.track)]:{opacity:t.vars?t.vars.opacity.switchTrackDisabled:"".concat(t.palette.mode==="light"?.12:.2)},["& .".concat(s.input)]:{left:"-100%",width:"300%"}}),({theme:t})=>({"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.action.activeChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):b(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[...Object.entries(t.palette).filter(([,a])=>a.main&&a.light).map(([a])=>({props:{color:a},style:{["&.".concat(s.checked)]:{color:(t.vars||t).palette[a].main,"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette[a].mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):b(t.palette[a].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},["&.".concat(s.disabled)]:{color:t.vars?t.vars.palette.Switch["".concat(a,"DisabledColor")]:"".concat(t.palette.mode==="light"?x(t.palette[a].main,.62):y(t.palette[a].main,.55))}},["&.".concat(s.checked," + .").concat(s.track)]:{backgroundColor:(t.vars||t).palette[a].main}}}))]})),U=d("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(t,a)=>a.track})(({theme:t})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:"".concat(t.palette.mode==="light"?t.palette.common.black:t.palette.common.white),opacity:t.vars?t.vars.opacity.switchTrack:"".concat(t.palette.mode==="light"?.38:.3)})),I=d("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(t,a)=>a.thumb})(({theme:t})=>({boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),P=m.forwardRef(function(a,o){const r=T({props:a,name:"MuiSwitch"}),{className:p,color:u="primary",edge:h=!1,size:g="medium",sx:w}=r,k=f(r,M),i=l({},r,{color:u,edge:h,size:g}),c=_(i),v=n.jsx(I,{className:c.thumb,ownerState:i});return n.jsxs(N,{className:C(c.root,p),sx:w,ownerState:i,children:[n.jsx(O,l({type:"checkbox",icon:v,checkedIcon:v,ref:o,ownerState:i},k,{classes:l({},c,{root:c.switchBase})})),n.jsx(U,{className:c.track,ownerState:i})]})}),A=P;export{A as S};