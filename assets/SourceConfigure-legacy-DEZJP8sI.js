!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,u,o,c,i=[],l=!0,a=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=o.call(r)).done)&&(i.push(n.value),i.length!==t);l=!0);}catch(e){a=!0,u=e}finally{try{if(!l&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(a)throw u}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(t,r,n){return(r=function(t){var r=function(t,r){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var u=n.call(t,r||"default");if("object"!=e(u))return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==e(r)?r:r+""}(r))in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}System.register(["./index-legacy-C3QFrfbs.js","./cloneObject-legacy-D5k1nSvY.js","./Switch-legacy-BoyGReYm.js","./ListPreference-legacy-GujU97k5.js","./TextField-legacy-DhrXARHf.js"],(function(e,r){"use strict";var n,c,i,l,a,s,f,d,y,h,p,x,m,b,j,g,v,S,w,C,P,O,k,V,T,E,L,A,D;return{setters:[function(e){n=e.j,c=e.f,i=e.aK,l=e.az,a=e.$,s=e.u,f=e.aP,d=e.an,y=e.aI,h=e.aJ,p=e.bf,x=e.aL,m=e.e,b=e.aw,j=e.b8,g=e.N,v=e.aA,S=e.c,w=e.bg,C=e.l,P=e.E,O=e.m,k=e.v,V=e.n},function(e){T=e.c},function(e){E=e.S},function(e){L=e.F,A=e.L},function(e){D=e.T}],execute:function(){e("SourceConfigure",(function(){var e,t=s().t,r=c.useContext(g),i=r.setTitle,l=r.setAction;c.useLayoutEffect((function(){return i(t("source.configuration.title")),l(null),function(){i(""),l(null)}}),[t]);var a=v().sourceId,f=S.useGetSource(w,a,{notifyOnNetworkStatusChange:!0}),d=f.data,y=f.loading,h=f.error,p=f.refetch,x=null!==(e=null==d?void 0:d.source.preferences)&&void 0!==e?e:[];if(y)return n.jsx(C,{});if(h)return n.jsx(P,{message:t("global.error.label.failed_to_load_data"),messageExtra:h.message,retry:function(){return p().catch(O())}});return n.jsx(k,{sx:{padding:0},children:x.map((function(e,r){var n,i=T(e);return c.createElement(function(e){switch(e){case"CheckBoxPreference":return B;case"SwitchPreference":return F;case"ListPreference":return A;case"EditTextPreference":return _;case"MultiSelectListPreference":return N;default:throw new Error('Unexpected preference type "'.concat(e,'"'))}}(e.type),u(u({},i),{},{updateValue:(n=r,function(e,r){S.setSourcePreferences(a,o({position:n},e,r)).response.catch((function(){return V(t("global.error.label.failed_to_save_changes"),"error")}))})}))}))})}));var r=function(e){return"CheckBoxPreference"===e.type?{title:e.CheckBoxTitle,defaultValue:e.CheckBoxDefault,currentValue:e.CheckBoxCheckBoxCurrentValue}:{title:e.SwitchPreferenceTitle,defaultValue:e.SwitchPreferenceDefault,currentValue:e.SwitchPreferenceCurrentValue}};function M(e){var o=u(u({},e),r(e)),s=o.title,f=o.defaultValue,d=o.currentValue,y=o.summary,h=o.updateValue,p=o.twoStateType,x=t(c.useState(null!=d?d:f),2),m=x[0],b=x[1];c.useEffect((function(){b(null!=d?d:f)}),[d]);var j=c.useMemo((function(){return"Switch"===p?E:a}),[p]);return n.jsxs(i,{children:[n.jsx(l,{primary:s,secondary:y}),n.jsx(j,u({},{edge:"end",checked:m,onChange:function(){h("Switch"===p?"switchState":"checkBoxState",!d),b(!d)}}))]})}function B(e){return n.jsx(M,u(u({},e),{},{twoStateType:"Checkbox"}))}function F(e){return n.jsx(M,u(u({},e),{},{twoStateType:"Switch"}))}function _(e){var r=s().t,u=e.EditTextPreferenceTitle,o=e.summary,i=e.dialogTitle,a=e.dialogMessage,b=e.EditTextPreferenceCurrentValue,j=e.updateValue,g=t(c.useState(null!=b?b:""),2),v=g[0],S=g[1],w=t(c.useState(!1),2),C=w[0],P=w[1],O=function(){P(!1),S(null!=b?b:"")};return n.jsxs(n.Fragment,{children:[n.jsx(f,{onClick:function(){return P(!0)},children:n.jsx(l,{primary:u,secondary:o})}),n.jsxs(d,{open:C,onClose:O,children:[n.jsx(y,{children:i}),n.jsxs(h,{children:[n.jsx(p,{children:a}),n.jsx(D,{autoFocus:!0,margin:"dense",id:"name",type:"text",fullWidth:!0,value:v,onChange:function(e){return S(e.target.value)}})]}),n.jsxs(x,{children:[n.jsx(m,{onClick:O,color:"primary",children:r("global.button.cancel")}),n.jsx(m,{onClick:function(){P(!1),j("editTextState",v)},color:"primary",children:r("global.button.ok")})]})]})]})}function I(e){var r=s().t,u=e.selectedValues,o=e.open,c=e.onClose,i=e.values,l=e.title,f=t(b.useState(u),2),p=f[0],g=f[1];b.useEffect((function(){o||g(u)}),[u,o]);var v=function(){c(null)};return n.jsxs(d,{sx:{"& .MuiDialog-paper":{width:"80%",maxHeight:435}},maxWidth:"xs",open:o,onClose:v,children:[n.jsx(y,{children:l}),n.jsx(h,{dividers:!0,children:n.jsx(L,{children:i.map((function(e){return n.jsx(j,{control:n.jsx(a,{checked:p.some((function(t){return e===t})),onChange:function(t){return function(e,t){var r=e.target.checked,n=p.some((function(e){return t===e}));if(r){if(!n){var u=T(p);u.push(t),g(u)}}else if(n){var o=T(p),c=o.indexOf(t);o.splice(c,1),g(o)}}(t,e)}}),label:e},e)}))})}),n.jsxs(x,{children:[n.jsx(m,{autoFocus:!0,onClick:v,children:r("global.button.cancel")}),n.jsx(m,{onClick:function(){c(p)},children:r("global.button.ok")})]})]})}function N(e){var r=e.MultiSelectListPreferenceTitle,u=e.summary,o=e.MultiSelectListPreferenceCurrentValue,i=e.MultiSelectListPreferenceDefault,a=e.updateValue,s=e.entryValues,d=e.entries,y=t(c.useState(null!=o?o:i),2),h=y[0],p=y[1],x=t(c.useState(!1),2),m=x[0],b=x[1];c.useEffect((function(){p(o)}),[o]);var j,g;return n.jsxs(n.Fragment,{children:[n.jsx(f,{onClick:function(){return b(!0)},children:n.jsx(l,{primary:r,secondary:u})}),n.jsx(I,{title:null!=r?r:"",open:m,onClose:function(e){var t,r;null!==e&&(a("multiSelectState",null!==(r=null==(t=e)?void 0:t.map((function(e){var t=d.indexOf(e);return s[t]})))&&void 0!==r?r:[]),p(e)),b(!1)},selectedValues:(j=h,null!==(g=null==j?void 0:j.map((function(e){var t=s.indexOf(e);return d[t]})))&&void 0!==g?g:[]),values:d})]})}}}}))}();
