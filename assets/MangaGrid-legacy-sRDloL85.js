!function(){var e=["MenuItemProps","className","label","LeftIcon","renderLabel","RightIcon"],t=["parentMenuOpen","label","renderLabel","RightIcon","LeftIcon","children","className","tabIndex","ContainerProps","MenuProps"],n=["ref"],r=["children"],o=["children"];function i(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */i=function(){return t};var e,t={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",l=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,n){return e[t]=n}}function d(e,t,n,r){var i=t&&t.prototype instanceof b?t:b,a=Object.create(i.prototype),c=new T(r||[]);return o(a,"_invoke",{value:M(e,n,c)}),a}function h(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=d;var g="suspendedStart",p="suspendedYield",m="executing",v="completed",y={};function b(){}function x(){}function w(){}var j={};s(j,c,(function(){return this}));var S=Object.getPrototypeOf,C=S&&S(S(R([])));C&&C!==n&&r.call(C,c)&&(j=C);var k=w.prototype=b.prototype=Object.create(j);function L(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function I(e,t){function n(o,i,a,c){var l=h(e[o],e,i);if("throw"!==l.type){var u=l.arg,s=u.value;return s&&"object"==f(s)&&r.call(s,"__await")?t.resolve(s.__await).then((function(e){n("next",e,a,c)}),(function(e){n("throw",e,a,c)})):t.resolve(s).then((function(e){u.value=e,a(u)}),(function(e){return n("throw",e,a,c)}))}c(l.arg)}var i;o(this,"_invoke",{value:function(e,r){function o(){return new t((function(t,o){n(e,r,t,o)}))}return i=i?i.then(o,o):o()}})}function M(t,n,r){var o=g;return function(i,a){if(o===m)throw Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:e,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var l=E(c,r);if(l){if(l===y)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===g)throw o=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=m;var u=h(t,n,r);if("normal"===u.type){if(o=r.done?v:p,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(o=v,r.method="throw",r.arg=u.arg)}}}function E(t,n){var r=n.method,o=t.iterator[r];if(o===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,E(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var i=h(o,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,y;var a=i.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,y):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function R(t){if(t||""===t){var n=t[c];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}throw new TypeError(f(t)+" is not iterable")}return x.prototype=w,o(k,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:x,configurable:!0}),x.displayName=s(w,u,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===x||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,s(e,u,"GeneratorFunction")),e.prototype=Object.create(k),e},t.awrap=function(e){return{__await:e}},L(I.prototype),s(I.prototype,l,(function(){return this})),t.AsyncIterator=I,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new I(d(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},L(k),s(k,u,"Generator"),s(k,c,(function(){return this})),s(k,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=R,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(l&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),P(n),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;P(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:R(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),y}},t}function a(e,t,n,r,o,i,a){try{var c=e[i](a),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,o)}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,c=[],l=!0,u=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);l=!0);}catch(e){u=!0,o=e}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw o}}return c}}(e,t)||g(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||{}.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function d(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=f(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==f(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function h(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||g(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){if(e){if("string"==typeof e)return p(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./index-legacy-BMxisgcd.js","./index-legacy-Xm_ybAKa.js","./useManageMangaLibraryState-legacy-2vVhUaV_.js","./Delete-legacy-D0JBstNh.js","./Sync-legacy-DzjTPyTI.js","./Mangas-legacy--fcFgpSm.js","./CheckboxInput-legacy-BlSpbAnT.js","./ListPreference-legacy-CJ-hzJ8F.js","./SpinnerImage-legacy-DmqcbkT9.js","./Checkbox-legacy-gZhxoDqy.js","./TypographyMaxLines-legacy-BIe-F0KN.js","./Link-legacy-D3qPvD01.js","./Avatar-legacy-CxnjG0h4.js","./PlayArrow-legacy-CM5cV8uP.js","./StyledFab-legacy-RIDF4NXk.js","./useDebounce-legacy-DuEN1ooD.js"],(function(l,p){"use strict";var m,v,y,b,x,w,j,S,C,k,L,I,M,E,O,P,T,R,_,N,D,W,F,A,G,z,B,H,U,Y,q,J,K,X,$,V,Z,Q,ee,te,ne,re,oe,ie,ae,ce,le,ue,se,de,fe,he,ge,pe,me,ve,ye,be,xe,we,je,Se,Ce,ke,Le,Ie,Me,Ee,Oe,Pe,Te,Re,_e,Ne,De,We,Fe,Ae,Ge,ze,Be,He,Ue,Ye,qe,Je,Ke,Xe,$e;return{setters:[function(e){m=e.c,v=e.a0,y=e.$,b=e.s,x=e.a3,w=e.a4,j=e.x,S=e.bE,C=e.a5,k=e.j,L=e.a6,I=e.bF,M=e.bG,E=e.a7,O=e.U,P=e.V,T=e.W,R=e.be,_=e.B,N=e.H,D=e.ag,W=e.bH,F=e.bI,A=e.u,G=e.w,z=e.L,B=e.J,H=e.h,U=e.e,Y=e.X,q=e.q,J=e.aw,K=e.ax,X=e.ay,$=e.S,V=e.b,Z=e.bg,Q=e.m,ee=e.z,te=e.f,ne=e.I,re=e.p,oe=e.o,ie=e.T,ae=e.P,ce=e.A,le=e.R,ue=e.g,se=e.al,de=e.b3,fe=e.b4,he=e.d,ge=e.n,pe=e.E},function(e){me=e.C,ve=e.a,ye=e.b},function(e){be=e.l,xe=e.M,we=e.d,je=e.C,Se=e.a,Ce=e.b,ke=e.m,Le=e.n,Ie=e.j,Me=e.T,Ee=e.c,Oe=e.e,Pe=e.f,Te=e.g,Re=e.i,_e=e.J,Ne=e.h},function(e){De=e.d},function(e){We=e.d},function(e){Fe=e.M,Ae=e.a},function(e){Ge=e.C},function(e){ze=e.F},function(e){Be=e.S},function(e){He=e.C},function(e){Ue=e.T,Ye=e.C},function(e){qe=e.L},function(e){Je=e.A},function(e){Ke=e.d},function(e){Xe=e.D},function(e){$e=e.u}],execute:function(){var p=m.createContext();function Ve(e){return v("MuiGrid",e)}var Ze=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],Qe=y("MuiGrid",["root","container","item","zeroMinWidth"].concat(h([0,1,2,3,4,5,6,7,8,9,10].map((function(e){return"spacing-xs-".concat(e)}))),h(["column-reverse","column","row-reverse","row"].map((function(e){return"direction-xs-".concat(e)}))),h(["nowrap","wrap-reverse","wrap"].map((function(e){return"wrap-xs-".concat(e)}))),h(Ze.map((function(e){return"grid-xs-".concat(e)}))),h(Ze.map((function(e){return"grid-sm-".concat(e)}))),h(Ze.map((function(e){return"grid-md-".concat(e)}))),h(Ze.map((function(e){return"grid-lg-".concat(e)}))),h(Ze.map((function(e){return"grid-xl-".concat(e)}))))),et=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function tt(e){var t=parseFloat(e);return"".concat(t).concat(String(e).replace(String(t),"")||"px")}function nt(e){var t=e.breakpoints,n=e.values,r="";Object.keys(n).forEach((function(e){""===r&&0!==n[e]&&(r=e)}));var o=Object.keys(t).sort((function(e,n){return t[e]-t[n]}));return o.slice(0,o.indexOf(r))}var rt=b("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState,r=n.container,o=n.direction,i=n.item,a=n.spacing,c=n.wrap,l=n.zeroMinWidth,u=n.breakpoints,s=[];r&&(s=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[n["spacing-xs-".concat(String(e))]];var r=[];return t.forEach((function(t){var o=e[t];Number(o)>0&&r.push(n["spacing-".concat(t,"-").concat(String(o))])})),r}(a,u,t));var d=[];return u.forEach((function(e){var r=n[e];r&&d.push(t["grid-".concat(e,"-").concat(String(r))])})),[t.root,r&&t.container,i&&t.item,l&&t.zeroMinWidth].concat(h(s),["row"!==o&&t["direction-xs-".concat(String(o))],"wrap"!==c&&t["wrap-xs-".concat(String(c))]],d)}})((function(e){var t=e.ownerState;return x({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},"wrap"!==t.wrap&&{flexWrap:t.wrap})}),(function(e){var t=e.theme,n=e.ownerState,r=I({values:n.direction,breakpoints:t.breakpoints.values});return M({theme:t},r,(function(e){var t={flexDirection:e};return 0===e.indexOf("column")&&(t["& > .".concat(Qe.item)]={maxWidth:"none"}),t}))}),(function(e){var t=e.theme,n=e.ownerState,r=n.container,o=n.rowSpacing,i={};if(r&&0!==o){var a,c=I({values:o,breakpoints:t.breakpoints.values});"object"===f(c)&&(a=nt({breakpoints:t.breakpoints.values,values:c})),i=M({theme:t},c,(function(e,n){var r,o=t.spacing(e);return"0px"!==o?d({marginTop:"-".concat(tt(o))},"& > .".concat(Qe.item),{paddingTop:tt(o)}):null!=(r=a)&&r.includes(n)?{}:d({marginTop:0},"& > .".concat(Qe.item),{paddingTop:0})}))}return i}),(function(e){var t=e.theme,n=e.ownerState,r=n.container,o=n.columnSpacing,i={};if(r&&0!==o){var a,c=I({values:o,breakpoints:t.breakpoints.values});"object"===f(c)&&(a=nt({breakpoints:t.breakpoints.values,values:c})),i=M({theme:t},c,(function(e,n){var r,o=t.spacing(e);return"0px"!==o?d({width:"calc(100% + ".concat(tt(o),")"),marginLeft:"-".concat(tt(o))},"& > .".concat(Qe.item),{paddingLeft:tt(o)}):null!=(r=a)&&r.includes(n)?{}:d({width:"100%",marginLeft:0},"& > .".concat(Qe.item),{paddingLeft:0})}))}return i}),(function(e){var t,n=e.theme,r=e.ownerState;return n.breakpoints.keys.reduce((function(e,o){var i={};if(r[o]&&(t=r[o]),!t)return e;if(!0===t)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===t)i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var a=I({values:r.columns,breakpoints:n.breakpoints.values}),c="object"===f(a)?a[o]:a;if(null==c)return e;var l="".concat(Math.round(t/c*1e8)/1e6,"%"),u={};if(r.container&&r.item&&0!==r.columnSpacing){var s=n.spacing(r.columnSpacing);if("0px"!==s){var d="calc(".concat(l," + ").concat(tt(s),")");u={flexBasis:d,maxWidth:d}}}i=x({flexBasis:l,flexGrow:0,maxWidth:l},u)}return 0===n.breakpoints.values[o]?Object.assign(e,i):e[n.breakpoints.up(o)]=i,e}),{})}));var ot=function(e){var t=e.classes,n=e.container,r=e.direction,o=e.item,i=e.spacing,a=e.wrap,c=e.zeroMinWidth,l=e.breakpoints,u=[];n&&(u=function(e,t){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return["spacing-xs-".concat(String(e))];var n=[];return t.forEach((function(t){var r=e[t];if(Number(r)>0){var o="spacing-".concat(t,"-").concat(String(r));n.push(o)}})),n}(i,l));var s=[];l.forEach((function(t){var n=e[t];n&&s.push("grid-".concat(t,"-").concat(String(n)))}));var d={root:["root",n&&"container",o&&"item",c&&"zeroMinWidth"].concat(h(u),["row"!==r&&"direction-xs-".concat(String(r)),"wrap"!==a&&"wrap-xs-".concat(String(a))],s)};return E(d,Ve,t)},it=m.forwardRef((function(e,t){var n=w({props:e,name:"MuiGrid"}),r=j().breakpoints,o=S(n),i=o.className,a=o.columns,c=o.columnSpacing,l=o.component,u=void 0===l?"div":l,s=o.container,d=void 0!==s&&s,f=o.direction,h=void 0===f?"row":f,g=o.item,v=void 0!==g&&g,y=o.rowSpacing,b=o.spacing,I=void 0===b?0:b,M=o.wrap,E=void 0===M?"wrap":M,O=o.zeroMinWidth,P=void 0!==O&&O,T=C(o,et),R=y||I,_=c||I,N=m.useContext(p),D=d?a||12:N,W={},F=x({},T);r.keys.forEach((function(e){null!=T[e]&&(W[e]=T[e],delete F[e])}));var A=x({},o,{columns:D,container:d,direction:h,item:v,rowSpacing:R,columnSpacing:_,wrap:E,zeroMinWidth:P,spacing:I},W,{breakpoints:r.keys}),G=ot(A);return k.jsx(p.Provider,{value:D,children:k.jsx(rt,x({ownerState:A,className:L(G.root,i),as:u,ref:t},F))})})),at=m.forwardRef((function(t,n){var r=t.MenuItemProps,o=t.className,i=t.label,a=t.LeftIcon,c=(t.renderLabel,t.RightIcon),l=s(t,e);return k.jsxs(O,u(u(u({},r),{},{ref:n,className:o},l),{},{children:[a&&k.jsx(P,{children:k.jsx(a,{fontSize:"small"})}),k.jsx(T,{children:i}),c&&k.jsx(P,{style:{minWidth:0},children:k.jsx(c,{fontSize:"small"})})]}))})),ct=m.forwardRef((function(e,r){var o=e.parentMenuOpen,i=e.label,a=e.renderLabel,l=e.RightIcon,d=void 0===l?D(W,F):l,f=e.LeftIcon,h=e.children,p=e.className,v=e.tabIndex,y=e.ContainerProps,b=void 0===y?{}:y,x=e.MenuProps,w=s(e,t),j=R.useIsTouchDevice(),S=b.ref,C=s(b,n),L=m.useRef(null);m.useImperativeHandle(r,(function(){return L.current}));var I=m.useRef(null);m.useImperativeHandle(S,(function(){return I.current}));var M,E=m.useRef(null),O=c(m.useState(!1),2),P=O[0],T=O[1],A=function(t){P!==t&&(e.disabled?T(!1):T(t))},G=function(){var e,t,n=null!==(e=null===(t=I.current)||void 0===t?void 0:t.ownerDocument.activeElement)&&void 0!==e?e:null;if(null==E.current)return!1;var r,o=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=g(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}(E.current.children);try{for(o.s();!(r=o.n()).done;){if(r.value===n)return!0}}catch(i){o.e(i)}finally{o.f()}return!1},z=P&&o;return e.disabled||(M=void 0!==v?v:-1),k.jsxs(_,u(u({},C),{},{ref:I,onFocus:function(e){j||(e.target===I.current&&A(!0),C.onFocus&&C.onFocus(e))},onClick:function(e){A(!P),C.onClick&&C.onClick(e)},tabIndex:M,onMouseEnter:function(e){j||(A(!0),C.onMouseEnter&&C.onMouseEnter(e))},onMouseLeave:function(e){A(!1),C.onMouseLeave&&C.onMouseLeave(e)},onKeyDown:function(e){var t;if("Escape"!==e.key){G()&&e.stopPropagation();var n,r=null===(t=I.current)||void 0===t?void 0:t.ownerDocument.activeElement;if("ArrowLeft"===e.key&&G())null===(n=I.current)||void 0===n||n.focus();if("ArrowRight"===e.key&&e.target===I.current&&e.target===r){var o,i=null===(o=E.current)||void 0===o?void 0:o.children[0];null==i||i.focus()}}},children:[k.jsx(at,{MenuItemProps:w,className:p,ref:L,LeftIcon:f,RightIcon:d,label:i,renderLabel:a}),k.jsx(N,u(u({style:{pointerEvents:"none"},anchorEl:L.current,anchorOrigin:{horizontal:D("right","left"),vertical:"top"},transformOrigin:{horizontal:D("left","right"),vertical:"top"},open:z,autoFocus:!1,disableAutoFocus:!0,disableEnforceFocus:!0,onClose:function(){A(!1)}},x),{},{children:k.jsx(_,{ref:E,style:{pointerEvents:"auto"},children:h})}))]}))}));ct.displayName="NestedMenuItem";var lt=["remove_from_library"],ut=l("a",(function(e){var t=e.manga,n=e.handleSelection,r=e.selectedMangas,o=e.onClose,i=e.setHideMenu,a=A().t,l=c(m.useState(!1),2),u=l[0],s=l[1],d=!!t,f=null!=r?r:[],g=Ee(d,Ae),p=Oe(d),v=Pe(d),y=!!t&&t.downloadCount===t.chapters.totalCount,b=!(null==t||!t.downloadCount),x=!(null==t||!t.unreadCount),w=!!t&&t.unreadCount!==t.chapters.totalCount,j=be({mangaId:null==t?void 0:t.id,mangaIds:r?Fe.getIds(f):void 0,onClose:function(){return o(!0)},addToLibrary:!1}),S=j.openCategorySelect,C=j.CategorySelectComponent,L=function(e,n){Fe.performAction(e,t?[t.id]:Fe.getIds(n),{wasManuallyMarkedAsRead:!0}).catch(H()),o(!lt.includes(e))},I=m.useMemo((function(){return{downloadableMangas:[].concat(h(Fe.getNotDownloaded(f)),h(Fe.getPartiallyDownloaded(f))),downloadedMangas:[].concat(h(Fe.getPartiallyDownloaded(f)),h(Fe.getFullyDownloaded(f))),unreadMangas:[].concat(h(Fe.getUnread(f)),h(Fe.getPartiallyRead(f))),readMangas:[].concat(h(Fe.getPartiallyRead(f)),h(Fe.getFullyRead(f)))}}),[f]),M=I.downloadableMangas,E=I.downloadedMangas,O=I.unreadMangas,P=I.readMangas;return k.jsxs(k.Fragment,{children:[!!n&&d&&k.jsx(xe,{onClick:function(){null==n||n(t.id,!0),o(!0)},Icon:we,title:a("chapter.action.label.select")}),p(!y)&&k.jsx(ct,{disabled:v(!M.length),LeftIcon:G,label:g("download",M.length),parentMenuOpen:!0,children:k.jsx(je,{mangaIds:d?[t.id]:Fe.getIds(f),closeMenu:function(){return o(!0)}})}),p(b)&&k.jsx(xe,{Icon:De,disabled:v(!E.length),onClick:function(){return L("delete",E)},title:g("delete",E.length)}),p(x)&&k.jsx(xe,{Icon:Se,disabled:v(!O.length),onClick:function(){return L("mark_as_read",O)},title:g("mark_as_read",O.length)}),p(w)&&k.jsx(xe,{Icon:Ce,disabled:v(!P.length),onClick:function(){return L("mark_as_unread",P)},title:g("mark_as_unread",P.length)}),d&&k.jsx(z,{to:"/migrate/source/".concat(null==t?void 0:t.sourceId,"/manga/").concat(null==t?void 0:t.id,"/search?query=").concat(null==t?void 0:t.title),state:{mangaTitle:null==t?void 0:t.title},style:{textDecoration:"none",color:"inherit"},children:k.jsx(xe,{Icon:ke,title:g("migrate",f.length)})}),d&&k.jsx(xe,{onClick:function(){s(!0),i(!0)},Icon:We,title:g("track",f.length)}),k.jsx(xe,{onClick:function(){S(!0),i(!0)},Icon:Le,title:g("change_categories",f.length)}),k.jsx(xe,{onClick:function(){return L("remove_from_library",f)},Icon:Ie,title:g("remove_from_library",f.length)}),C,u&&k.jsx(B,{open:!0,maxWidth:"md",fullWidth:!0,scroll:"paper",onClose:function(){s(!1),o(!0)},children:k.jsx(Me,{manga:t})})]})})),st=function(e){var t=e.mangaIdToMigrateTo,n=e.onClose,r=A().t,o=U(),l=Y().mangaId,u=Number(l),s=q().settings,d=s.migrateChapters,f=s.migrateCategories,h=s.migrateTracking,g=s.deleteChapters,p=c(m.useState(!1),2),v=p[0],y=p[1],b=Z(H()),x=function(){var e,n=(e=i().mark((function e(n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=u){e.next=2;break}throw new Error('MigrateDialog::migrate: unexpected mangaId "'.concat(u,'"'));case 2:return Q(r("migrate.label.info"),"info"),y(!0),e.prev=4,e.next=7,Fe.migrate(u,t,{mode:n,migrateChapters:d,migrateCategories:f,migrateTracking:h,deleteChapters:g});case 7:o("/manga/".concat(t),{replace:!0}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),y(!1);case 13:case"end":return e.stop()}}),e,null,[[4,10]])})),function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function c(e){a(i,r,o,c,l,"next",e)}function l(e){a(i,r,o,c,l,"throw",e)}c(void 0)}))});return function(e){return n.apply(this,arguments)}}();return k.jsxs(B,{open:!0,fullWidth:!0,onClose:n,children:[k.jsx(J,{children:r("migrate.dialog.title")}),k.jsx(K,{dividers:!0,children:k.jsxs(ze,{children:[k.jsx(Ge,{disabled:v,label:r("chapter.title_one"),checked:d,onChange:function(e,t){return b("migrateChapters",t)}}),k.jsx(Ge,{disabled:v,label:r("category.title.category_one"),checked:f,onChange:function(e,t){return b("migrateCategories",t)}}),k.jsx(Ge,{disabled:v,label:r("tracking.title"),checked:h,onChange:function(e,t){return b("migrateTracking",t)}}),k.jsx(Ge,{disabled:v,label:r("migrate.dialog.label.delete_downloaded"),checked:g,onChange:function(e,t){return b("deleteChapters",t)}})]})}),k.jsx(X,{children:k.jsxs($,{sx:{width:"100%"},direction:"row",justifyContent:"space-between",children:[k.jsx(V,{disabled:v,component:z,to:"/manga/".concat(t),children:r("migrate.dialog.action.button.show_entry")}),k.jsxs($,{direction:"row",children:[k.jsx(V,{disabled:v,onClick:n,children:r("global.button.cancel")}),k.jsx(V,{disabled:v,onClick:function(){return x("copy")},children:r("global.button.copy")}),k.jsx(V,{disabled:v,onClick:function(){return x("migrate")},children:r("global.button.migrate")})]})]})})]})},dt=m.forwardRef((function(e,t){var n=e.id,r=e.selected,o=e.handleSelection,i=e.asCheckbox,a=void 0!==i&&i,c=e.popupState,l=A().t,s=R.useIsTouchDevice(),d=m.useMemo((function(){return ee(c)}),[c]),f=function(e){e.stopPropagation(),e.preventDefault()},h=function(e){s||(f(e),c.open(e),d.onClick(e))};return o?null!==r?a?k.jsx(te,{title:l(r?"global.button.deselect":"global.button.select"),children:k.jsx(He,{checked:r,onMouseDown:f,onChange:function(e,t){f(e),null==o||o(n,t)}})}):null:a?k.jsx(te,{title:l("global.button.options"),children:k.jsx(ne,u(u({ref:t},d),{},{onClick:h,onTouchStart:h,"aria-label":"more",size:"large",onMouseDown:f,children:k.jsx(Te,{})}))}):k.jsx(te,{title:l("global.button.options"),children:k.jsx(V,u(u({ref:t},d),{},{onClick:h,onTouchStart:h,className:"manga-option-button",size:"small",variant:"contained",sx:{minWidth:"unset",paddingX:"0",paddingY:"2.5px",visibility:c.isOpen?"visible":"hidden",pointerEvents:"none","@media not (pointer: fine)":{visibility:"hidden",pointerEvents:void 0}},onMouseDown:function(e){return e.stopPropagation()},children:k.jsx(Te,{})}))}):null})),ft=b("div")({position:"absolute",bottom:0,width:"100%",height:"30%",background:"linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)"}),ht=b("div")({position:"absolute",bottom:0,width:"100%",height:"20%",background:"linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)"}),gt=b(Ue)({fontSize:"1.05rem"}),pt=function(e){var t=e.manga,n=e.longPressBind,r=e.popupState,o=e.handleClick,i=e.mangaLinkTo,a=e.selected,c=e.inLibraryIndicator,l=e.isInLibrary,s=e.gridLayout,d=e.handleSelection,f=e.continueReadingButton,h=e.mangaBadges,g=e.mode,p=m.useRef(null),v=t.id,y=t.title;return k.jsx(qe,u(u({component:z},n((function(){return r.open(p.current)}))),{},{onClick:o,to:i,state:{mangaTitle:y},sx:{textDecoration:"none",touchCallout:"none"},children:k.jsxs(_,{sx:{display:"flex",flexDirection:"column",margin:"2px",outline:a?"4px solid":void 0,borderRadius:a?"1px":void 0,outlineColor:function(e){return e.palette.primary.main},backgroundColor:function(e){return a?e.palette.primary.main:void 0},"@media (hover: hover) and (pointer: fine)":{"&:hover .manga-option-button":{visibility:"visible",pointerEvents:"all"},"&:hover .source-manga-library-state-button":{display:"inline-flex"},"&:hover .source-manga-library-state-indicator":{display:"source"===g?"none":"flex"}}},children:[k.jsx(me,{sx:{aspectRatio:"225/350",display:"flex"},children:k.jsxs(ve,{sx:{position:"relative",height:"100%"},children:[k.jsx(Be,{alt:y,src:Fe.getThumbnailUrl(t),imgStyle:c&&l?{height:"100%",width:"100%",objectFit:"cover",filter:"brightness(0.4)"}:{height:"100%",width:"100%",objectFit:"cover"},spinnerStyle:{display:"grid",placeItems:"center"}}),k.jsxs($,{alignItems:"start",justifyContent:"space-between",direction:"row",sx:{position:"absolute",top:5,left:5,right:5},children:[h,k.jsx(dt,{ref:p,popupState:r,id:v,selected:a,handleSelection:d})]}),k.jsxs(k.Fragment,{children:[s!==re.Comfortable&&k.jsxs(k.Fragment,{children:[k.jsx(ft,{}),k.jsx(ht,{})]}),k.jsxs($,{direction:"row",justifyContent:s!==re.Comfortable?"space-between":"end",alignItems:"end",sx:{position:"absolute",bottom:0,width:"100%",margin:"0.5em 0",padding:"0 0.5em",gap:"0.5em"},children:[s!==re.Comfortable&&k.jsx(te,{title:y,placement:"top",children:k.jsx(gt,{sx:{color:"white",textShadow:"0px 0px 3px #000000"},children:y})}),f]})]})]})}),s===re.Comfortable&&k.jsx(te,{title:y,placement:"top",children:k.jsx(gt,{sx:{position:"relative",width:"100%",bottom:0,margin:"0.5em 0",padding:"0 0.5em",color:"text.primary",height:"3rem"},children:y})})]})}))},mt=function(e){var t=e.manga,n=e.longPressBind,r=e.popupState,o=e.handleClick,i=e.mangaLinkTo,a=e.selected,c=e.inLibraryIndicator,l=e.isInLibrary,s=e.handleSelection,d=e.continueReadingButton,f=e.mangaBadges,h=e.mode,g=m.useRef(null),p=t.id,v=t.title;return k.jsx(me,{children:k.jsx(ve,u(u({component:z,to:i,state:{mangaTitle:v},onClick:o},n((function(){return r.open(g.current)}))),{},{sx:{touchCallout:"none","@media (hover: hover) and (pointer: fine)":{"&:hover .manga-option-button":{visibility:"visible",pointerEvents:"all"},"&:hover .source-manga-library-state-button":{display:"inline-flex"},"&:hover .source-manga-library-state-indicator":{display:"source"===h?"none":"inline-flex"}}},children:k.jsxs(Ye,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:2,position:"relative"},children:[k.jsx(Je,{variant:"rounded",sx:{width:56,height:56,flex:"0 0 auto",marginRight:2},children:k.jsx(Be,{spinnerStyle:{small:!0},imgStyle:{objectFit:"cover",width:"100%",height:"100%",imageRendering:"pixelated",filter:c&&l?"brightness(0.4)":void 0},alt:t.title,src:Fe.getThumbnailUrl(t)})}),k.jsx(_,{sx:{display:"flex",flexDirection:"row",flexGrow:1,width:"min-content"},children:k.jsx(te,{title:v,placement:"top",children:k.jsx(Ue,{variant:"h5",children:v})})}),k.jsxs($,{direction:"row",alignItems:"center",gap:"5px",children:[f,d,k.jsx(dt,{ref:g,popupState:r,id:p,selected:a,handleSelection:s,asCheckbox:!0})]})]})}))})},vt=function(e){var t=e.showContinueReadingButton,n=e.isLatestChapterRead,r=e.nextChapterIndexToRead,o=e.mangaLinkTo,i=A().t,a=1===r;return!t||n?null:k.jsx(te,{title:i(a?"global.button.start":"global.button.resume"),children:k.jsx(V,{variant:"contained",size:"small",sx:{minWidth:"unset"},component:z,to:"".concat(o,"chapter/").concat(r),onClick:function(e){return e.stopPropagation()},onMouseDown:function(e){return e.stopPropagation()},children:k.jsx(Ke,{})})})},yt=b("div")({display:"flex",height:"fit-content",borderRadius:"5px",overflow:"hidden","& p":{color:"white",padding:"0.1em",paddingInline:"0.2em",fontSize:"1.05rem"}}),bt=function(e){var t=e.inLibraryIndicator,n=e.updateLibraryState,r=e.isInLibrary,o=e.unread,i=e.downloadCount,a=e.mode,c=A().t,l=R.useIsTouchDevice(),u=oe().options,s=u.showUnreadBadge,d=u.showDownloadBadge;return k.jsxs(yt,{children:[!l&&t&&"source"===a&&k.jsx(V,{className:"source-manga-library-state-button",component:"div",variant:"contained",size:"small",onMouseDown:function(e){return e.stopPropagation()},onClick:function(e){e.preventDefault(),e.stopPropagation(),n()},sx:{display:"none"},color:r?"error":"primary",children:c(r?"manga.action.library.remove.label.action":"manga.button.add_to_library")}),t&&r&&k.jsx(ie,{className:"source-manga-library-state-indicator",sx:{backgroundColor:"primary.dark"},children:c("manga.button.in_library")}),(s&&"default"===a||"duplicate"===a)&&(null!=o?o:0)>0&&k.jsx(ie,{sx:{backgroundColor:"primary.dark"},children:o}),(d&&"default"===a||"duplicate"===a)&&(null!=i?i:0)>0&&k.jsx(ie,{sx:{backgroundColor:"success.dark"},children:i})]})},xt=l("b",(function(e){var t,n=e.manga,r=e.gridLayout,o=e.inLibraryIndicator,i=e.selected,a=e.handleSelection,l=e.mode,s=void 0===l?"default":l,d=n.id,f=n.latestReadChapter,h=n.firstUnreadChapter,g=n.chapters,p=n.downloadCount,v=n.unreadCount,y=oe().options.showContinueReadingButton,b=Re(n,"source"===s),x=b.CategorySelectComponent,w=b.updateLibraryState,j=b.isInLibrary,S=function(e,t,n,r){switch(e){case"default":case"source":case"duplicate":return"/manga/".concat(t,"/");case"migrate.search":return"/migrate/source/".concat(n,"/manga/").concat(t,"/search?query=").concat(r);case"migrate.select":return"";default:throw new Error('getMangaLinkTo: unexpected MangaCardMode "'.concat(e,'"'))}}(s,n.id,n.sourceId,n.title),C=null!==(t=null==h?void 0:h.sourceOrder)&&void 0!==t?t:1,L=(null==g?void 0:g.totalCount)===(null==f?void 0:f.sourceOrder),I=c(m.useState(!1),2),M=I[0],E=I[1],O=function(e,t){var n="default"===s,r="source"===s,o="migrate.select"===s,c=null!==i;(o||c||(n||r)&&!!t)&&(e.preventDefault(),r?w():c?null==a||a(d,!i,{selectRange:e.shiftKey}):n?null==t||t():o&&E(!0))},P=_e((function(e,t){var n=t.context;e.shiftKey=!0,O(e,n)})),T=m.useMemo((function(){return r===re.List?mt:pt}),[r]),R=m.useMemo((function(){var e;return k.jsx(vt,{showContinueReadingButton:y&&"default"===s&&!(null===(e=n.chapters)||void 0===e||!e.totalCount),isLatestChapterRead:L,nextChapterIndexToRead:C,mangaLinkTo:S})}),[y,L,C,S]),_=m.useMemo((function(){return k.jsx(bt,{inLibraryIndicator:o,isInLibrary:j,unread:v,downloadCount:p,updateLibraryState:w,mode:s})}),[o,j,v,p,w]);return k.jsxs(k.Fragment,{children:[M&&k.jsx(st,{mangaIdToMigrateTo:n.id,onClose:function(){return E(!1)}}),k.jsx(ae,{variant:"popover",popupId:"manga-card-action-menu",children:function(t){return k.jsxs(k.Fragment,{children:[k.jsx(T,u(u({},e),{},{longPressBind:P,popupState:t,handleClick:O,mangaLinkTo:S,isInLibrary:j,inLibraryIndicator:o,continueReadingButton:R,mangaBadges:_})),!!a&&t.isOpen&&k.jsx(Ne,u(u({},ce(t)),{},{children:function(e,t){return k.jsx(ut,{manga:n,handleSelection:a,onClose:e,setHideMenu:t})}})),x]})}})]})})),wt=le.forwardRef((function(e,t){var n=e.children,o=s(e,r);return k.jsx(it,u(u({},o),{},{ref:t,container:!0,sx:{paddingLeft:"5px",paddingRight:"13px"},children:n}))})),jt=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,a=arguments.length>6?arguments[6]:void 0;return k.jsx(xt,{manga:e,gridLayout:t,inLibraryIndicator:n,selected:r?null==o?void 0:o.includes(e.id):null,handleSelection:i,mode:a},e.id)},St=m.forwardRef((function(e,t){var n=e.isLoading,r=e.mangas,o=e.inLibraryIndicator,i=e.GridItemContainer,a=e.gridLayout,c=e.isSelectModeActive,l=e.selectedMangaIds,u=e.handleSelection,s=e.mode;return k.jsx(it,{ref:t,container:!0,spacing:1,style:{margin:0,width:"100%",padding:"5px",overflowX:"auto",display:"-webkit-inline-box",flexWrap:"nowrap"},children:n?k.jsx(ue,{}):r.map((function(e){return k.jsx(i,{children:jt(e,a,o,c,l,u,s)},e.id)}))})})),Ct=l("g",(function(e){return"MangaGrid-snapshot-location-".concat(e.key)})),kt=m.forwardRef((function(e,t){var n=e.isLoading,r=e.mangas,o=e.inLibraryIndicator,i=e.GridItemContainer,a=e.gridLayout,l=e.hasNextPage,u=e.loadMore,s=e.isSelectModeActive,d=e.selectedMangaIds,f=e.handleSelection,h=e.mode,g=se(),p=Ct(g),v=c(de(p,void 0),1)[0],y=m.useRef();return m.useEffect((function(){return clearTimeout(y.current)}),[g.key,y.current]),k.jsxs(k.Fragment,{children:[k.jsx(_,{ref:t,children:k.jsx(ye,{useWindowScroll:!0,overscan:.25*window.innerHeight,totalCount:r.length,components:{List:wt,Item:i},restoreStateFrom:v,stateChanged:function(e){var t=window.location.href;clearTimeout(y.current),y.current=setTimeout((function(){t!==window.location.href||fe.session.setItem(p,e,!1)}),250)},endReached:function(){return u()},itemContent:function(e){return jt(r[e],a,o,s,d,f,h)}})}),s&&a===re.List?k.jsx(_,{sx:{paddingBottom:Xe}}):n?k.jsx(ue,{}):l?k.jsx("div",{style:{height:"75px"}}):null]})}));l("M",(function(e){var t=e.mangas,n=e.isLoading,r=e.message,i=e.messageExtra,a=e.hasNextPage,l=e.loadMore,d=e.gridLayout,f=e.horizontal,h=e.noFaces,g=e.inLibraryIndicator,p=e.isSelectModeActive,v=e.selectedMangaIds,y=e.handleSelection,b=e.mode,x=e.retry,w=A().t,j=m.useRef(null),S=c(m.useState(document.documentElement.offsetWidth),2),C=S[0],L=S[1],I=$e(C,500),M=c(he("ItemWidth",300),1)[0],E=m.useRef(null),O=m.useMemo((function(){return function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:12,i=Math.ceil(e/t),a=n===re.List?r:r/i;return function(e){var t=e.children,n=s(e,o);return k.jsx(it,u(u({},n),{},{item:!0,xs:a,sx:{width:"100%",paddingTop:"8px",paddingLeft:"8px"},children:t}))}}(I,M,d)}),[I,M,d]);return m.useLayoutEffect((function(){var e;return function t(n){e=setTimeout((function(){document.body.style.overflow.includes("hidden")?t(250):document.body.style.overflowY=d===re.List?"auto":"scroll"}),n)}(0),function(){clearTimeout(e)}}),[d]),m.useLayoutEffect((function(){return function(){document.body.style.overflowY="auto"}}),[]),ge(E,m.useCallback((function(){var e;L((null===(e=E.current)||void 0===e?void 0:e.offsetWidth)||document.documentElement.offsetWidth)}),[])),ge(j,m.useCallback((function(e,t){var r=e[0].target.clientHeight,o=r>document.documentElement.clientHeight;n||r&&(o||l(),t.disconnect())}),[j,l,n])),!n&&0===t.length?k.jsx(pe,{noFaces:h,message:null!=r?r:w("manga.error.label.no_mangas_found"),messageExtra:i,retry:x}):k.jsx("div",{ref:E,style:{overflow:"hidden",paddingBottom:"13px"},children:f?k.jsx(St,{ref:j,isLoading:n,mangas:t,inLibraryIndicator:g,GridItemContainer:O,gridLayout:d,isSelectModeActive:p,selectedMangaIds:v,handleSelection:y,mode:b}):k.jsx(kt,{ref:j,isLoading:n,mangas:t,inLibraryIndicator:g,GridItemContainer:O,hasNextPage:a,loadMore:l,gridLayout:d,isSelectModeActive:p,selectedMangaIds:v,handleSelection:y,mode:b})})}))}}}))}();
