!function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,i,c=[],u=!0,d=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=o.call(n)).done)&&(c.push(r.value),c.length!==t);u=!0);}catch(e){d=!0,a=e}finally{try{if(!u&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(d)throw a}}return c}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./index-legacy-ByIz4Jpe.js","./TextField-legacy-C1GmD1uV.js"],(function(t,n){"use strict";var r,a,o,i,c,u,d,l,s,f,p,h,b,g;return{setters:[function(e){r=e.$,a=e._,o=e.s,i=e.a0,c=e.a2,u=e.b3,d=e.c,l=e.a4,s=e.bC,f=e.j,p=e.a5,h=e.a1,b=e.a6},function(e){g=e.u}],execute:function(){function n(e){return r("PrivateSwitchBase",e)}a("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var v=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],y=o(i)((function(e){var t=e.ownerState;return c({padding:9,borderRadius:"50%"},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})})),m=o("input",{shouldForwardProp:u})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1});t("S",d.forwardRef((function(t,r){var a=t.autoFocus,o=t.checked,i=t.checkedIcon,u=t.className,d=t.defaultChecked,k=t.disabled,S=t.disableFocusRipple,w=void 0!==S&&S,x=t.edge,F=void 0!==x&&x,j=t.icon,I=t.id,R=t.inputProps,B=t.inputRef,C=t.name,O=t.onBlur,A=t.onChange,P=t.onFocus,N=t.readOnly,q=t.required,z=void 0!==q&&q,E=t.tabIndex,T=t.type,$=t.value,L=l(t,v),M=e(s({controlled:o,default:Boolean(d),name:"SwitchBase",state:"checked"}),2),U=M[0],_=M[1],D=g(),G=k;D&&void 0===G&&(G=D.disabled);var H="checkbox"===T||"radio"===T,J=c({},t,{checked:U,disabled:G,disableFocusRipple:w,edge:F}),K=function(e){var t=e.classes,r=e.checked,a=e.disabled,o=e.edge,i={root:["root",r&&"checked",a&&"disabled",o&&"edge".concat(h(o))],input:["input"]};return b(i,n,t)}(J);return f.jsxs(y,c({component:"span",className:p(K.root,u),centerRipple:!0,focusRipple:!w,disabled:G,tabIndex:null,role:void 0,onFocus:function(e){P&&P(e),D&&D.onFocus&&D.onFocus(e)},onBlur:function(e){O&&O(e),D&&D.onBlur&&D.onBlur(e)},ownerState:J,ref:r},L,{children:[f.jsx(m,c({autoFocus:a,checked:o,defaultChecked:d,className:K.input,disabled:G,id:H?I:void 0,name:C,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var t=e.target.checked;_(t),A&&A(e,t)}},readOnly:N,ref:B,required:z,ownerState:J,tabIndex:E,type:T},"checkbox"===T&&void 0===$?{}:{value:$},R)),U?i:j]}))})))}}}))}();
