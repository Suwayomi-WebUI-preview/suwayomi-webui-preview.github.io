!function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a,o,i=[],c=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(i.push(r.value),i.length!==t);c=!0);}catch(e){u=!0,l=e}finally{try{if(!c&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw l}}return i}}(e,n)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./index-legacy-DG6JYURr.js","./ListPreference-legacy-Bf6CJdud.js"],(function(t,n){"use strict";var r,l,a,o,i,c,u,s,d,f,m;return{setters:[function(e){r=e.c,l=e.j,a=e.u,o=e.az,i=e.i,c=e.I,u=e.aj,s=e.aA,d=e.bg,f=e.Y},function(e){m=e.a}],execute:function(){t("G",(function(t){var r=t.gridLayout,b=t.onChange,g=a().t,h=e(o.useState(null),2),y=h[0],j=h[1],p=Boolean(y),x=function(){j(null)};function v(e){b(parseInt(e.target.name,10))}return l.jsxs(l.Fragment,{children:[l.jsx(i,{title:g("global.label.display"),children:l.jsx(c,{onClick:function(e){j(e.currentTarget)},size:"small",sx:{ml:2},"aria-controls":p?"account-menu":void 0,"aria-haspopup":"true","aria-expanded":p?"true":void 0,color:"inherit",children:l.jsx(n,{})})}),l.jsxs(u,{id:"basic-menu",anchorEl:y,open:p,onClose:x,MenuListProps:{"aria-labelledby":"basic-button"},children:[l.jsx(s,{onClick:x,children:l.jsx(d,{label:g("global.grid_layout.label.compact_grid"),value:f.Compact,control:l.jsx(m,{name:f.Compact.toString(),checked:r===f.Compact,onChange:v})})}),l.jsx(s,{onClick:x,children:l.jsx(d,{label:g("global.grid_layout.label.comfortable_grid"),control:l.jsx(m,{name:f.Comfortable.toString(),checked:r===f.Comfortable,onChange:v})})}),l.jsx(s,{onClick:x,children:l.jsx(d,{label:g("global.grid_layout.label.list"),control:l.jsx(m,{name:f.List.toString(),checked:r===f.List,onChange:v})})})]})]})}));var n=r(l.jsx("path",{d:"M14.67 5v6.5H9.33V5zm1 6.5H21V5h-5.33zm-1 7.5v-6.5H9.33V19zm1-6.5V19H21v-6.5zm-7.34 0H3V19h5.33zm0-1V5H3v6.5z"}),"ViewModule")}}}))}();