import{a6 as A,a5 as D,s as C,a7 as G,ca as H,c as J,cc as K,j as w,ab as M,a8 as Q,ac as T}from"./index-dhITQ7sJ.js";import{u as V}from"./TextField-Bi_u0wfz.js";function W(s){return A("PrivateSwitchBase",s)}D("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const X=s=>{const{classes:t,checked:c,disabled:r,edge:o}=s,d={root:["root",c&&"checked",r&&"disabled",o&&"edge".concat(Q(o))],input:["input"]};return T(d,W,t)},Y=C(G)({padding:9,borderRadius:"50%",variants:[{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:({edge:s,ownerState:t})=>s==="start"&&t.size!=="small",style:{marginLeft:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}},{props:({edge:s,ownerState:t})=>s==="end"&&t.size!=="small",style:{marginRight:-12}}]}),Z=C("input",{shouldForwardProp:H})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),se=J.forwardRef(function(t,c){const{autoFocus:r,checked:o,checkedIcon:d,className:y,defaultChecked:u,disabled:S,disableFocusRipple:p=!1,edge:x=!1,icon:F,id:R,inputProps:P,inputRef:v,name:z,onBlur:h,onChange:f,onFocus:g,readOnly:I,required:j=!1,tabIndex:E,type:i,value:m,...U}=t,[b,L]=K({controlled:o,default:!!u,name:"SwitchBase",state:"checked"}),a=V(),N=e=>{g&&g(e),a&&a.onFocus&&a.onFocus(e)},q=e=>{h&&h(e),a&&a.onBlur&&a.onBlur(e)},O=e=>{if(e.nativeEvent.defaultPrevented)return;const k=e.target.checked;L(k),f&&f(e,k)};let n=S;a&&typeof n>"u"&&(n=a.disabled);const $=i==="checkbox"||i==="radio",l={...t,checked:b,disabled:n,disableFocusRipple:p,edge:x},B=X(l);return w.jsxs(Y,{component:"span",className:M(B.root,y),centerRipple:!0,focusRipple:!p,disabled:n,tabIndex:null,role:void 0,onFocus:N,onBlur:q,ownerState:l,ref:c,...U,children:[w.jsx(Z,{autoFocus:r,checked:o,defaultChecked:u,className:B.input,disabled:n,id:$?R:void 0,name:z,onChange:O,readOnly:I,ref:v,required:j,ownerState:l,tabIndex:E,type:i,...i==="checkbox"&&m===void 0?{}:{value:m},...P}),b?d:F]})});export{se as S};
