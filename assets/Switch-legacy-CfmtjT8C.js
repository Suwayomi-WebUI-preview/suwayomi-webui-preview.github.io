!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var o,a,n,i,c=[],l=!0,s=!1;try{if(n=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(o=n.call(r)).done)&&(c.push(o.value),c.length!==e);l=!0);}catch(t){s=!0,a=t}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw a}}return c}}(t,e)||o(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||o(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){if(t){if("string"==typeof t)return a(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(t,e):void 0}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,o=Array(e);r<e;r++)o[r]=t[r];return o}function n(e,r,o){return(r=function(e){var r=function(e,r){if("object"!=t(e)||!e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var a=o.call(e,r||"default");if("object"!=t(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==t(r)?r:r+""}(r))in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}System.register(["./index-legacy-B09rAWaZ.js","./SwitchBase-legacy-Dnrk_3l3.js"],(function(t,o){"use strict";var a,i,c,l,s,u,d,h,p,m,f,v,b,y,g;return{setters:[function(t){a=t.W,i=t.X,c=t.s,l=t.Z,s=t.bn,u=t.bo,d=t.bp,h=t.c,p=t.a0,m=t._,f=t.j,v=t.a1,b=t.bq,y=t.a2},function(t){g=t.S}],execute:function(){function o(t){return i("MuiSwitch",t)}var w=a("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),S=["className","color","edge","size","sx"],k=b(),x=c("span",{name:"MuiSwitch",slot:"Root",overridesResolver:function(t,e){var r=t.ownerState;return[e.root,r.edge&&e["edge".concat(l(r.edge))],e["size".concat(l(r.size))]]}})({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"},variants:[{props:{edge:"start"},style:{marginLeft:-8}},{props:{edge:"end"},style:{marginRight:-8}},{props:{size:"small"},style:n(n({width:40,height:24,padding:7},"& .".concat(w.thumb),{width:16,height:16}),"& .".concat(w.switchBase),n({padding:4},"&.".concat(w.checked),{transform:"translateX(16px)"}))}]}),j=c(g,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:function(t,e){var r=t.ownerState;return[e.switchBase,n({},"& .".concat(w.input),e.input),"default"!==r.color&&e["color".concat(l(r.color))]]}})((function(t){var e=t.theme;return n(n(n(n(n({position:"absolute",top:0,left:0,zIndex:1,color:e.vars?e.vars.palette.Switch.defaultColor:"".concat("light"===e.palette.mode?e.palette.common.white:e.palette.grey[300]),transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest})},"&.".concat(w.checked),{transform:"translateX(20px)"}),"&.".concat(w.disabled),{color:e.vars?e.vars.palette.Switch.defaultDisabledColor:"".concat("light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[600])}),"&.".concat(w.checked," + .").concat(w.track),{opacity:.5}),"&.".concat(w.disabled," + .").concat(w.track),{opacity:e.vars?e.vars.opacity.switchTrackDisabled:"".concat("light"===e.palette.mode?.12:.2)}),"& .".concat(w.input),{left:"-100%",width:"300%"})}),(function(t){var o=t.theme;return{"&:hover":{backgroundColor:o.vars?"rgba(".concat(o.vars.palette.action.activeChannel," / ").concat(o.vars.palette.action.hoverOpacity,")"):s(o.palette.action.active,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:r(Object.entries(o.palette).filter((function(t){var r=e(t,2)[1];return r.main&&r.light})).map((function(t){var r=e(t,1)[0];return{props:{color:r},style:n(n({},"&.".concat(w.checked),n({color:(o.vars||o).palette[r].main,"&:hover":{backgroundColor:o.vars?"rgba(".concat(o.vars.palette[r].mainChannel," / ").concat(o.vars.palette.action.hoverOpacity,")"):s(o.palette[r].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(w.disabled),{color:o.vars?o.vars.palette.Switch["".concat(r,"DisabledColor")]:"".concat("light"===o.palette.mode?u(o.palette[r].main,.62):d(o.palette[r].main,.55))})),"&.".concat(w.checked," + .").concat(w.track),{backgroundColor:(o.vars||o).palette[r].main})}})))}})),z=c("span",{name:"MuiSwitch",slot:"Track",overridesResolver:function(t,e){return e.track}})((function(t){var e=t.theme;return{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.vars?e.vars.palette.common.onBackground:"".concat("light"===e.palette.mode?e.palette.common.black:e.palette.common.white),opacity:e.vars?e.vars.opacity.switchTrack:"".concat("light"===e.palette.mode?.38:.3)}})),C=c("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:function(t,e){return e.thumb}})((function(t){var e=t.theme;return{boxShadow:(e.vars||e).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}}));t("S",h.forwardRef((function(t,e){var r=k({props:t,name:"MuiSwitch"}),a=r.className,n=r.color,i=void 0===n?"primary":n,c=r.edge,s=void 0!==c&&c,u=r.size,d=void 0===u?"medium":u,h=r.sx,b=p(r,S),g=m({},r,{color:i,edge:s,size:d}),w=function(t){var e=t.classes,r=t.edge,a=t.size,n=t.color,i=t.checked,c=t.disabled,s={root:["root",r&&"edge".concat(l(r)),"size".concat(l(a))],switchBase:["switchBase","color".concat(l(n)),i&&"checked",c&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},u=y(s,o,e);return m({},e,u)}(g),A=f.jsx(C,{className:w.thumb,ownerState:g});return f.jsxs(x,{className:v(w.root,a),sx:h,ownerState:g,children:[f.jsx(j,m({type:"checkbox",icon:A,checkedIcon:A,ref:e,ownerState:g},b,{classes:m({},w,{root:w.switchBase})})),f.jsx(z,{className:w.track,ownerState:g})]})})))}}}))}();