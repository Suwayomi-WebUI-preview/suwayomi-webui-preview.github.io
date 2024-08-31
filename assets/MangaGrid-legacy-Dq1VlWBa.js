!function(){var e=["MenuItemProps","className","label","LeftIcon","renderLabel","RightIcon"],n=["parentMenuOpen","label","renderLabel","RightIcon","LeftIcon","children","className","tabIndex","ContainerProps","MenuProps"],t=["ref"],r=["children"],o=["children"];function i(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */i=function(){return n};var e,n={},t=Object.prototype,r=t.hasOwnProperty,o=Object.defineProperty||function(e,n,t){e[n]=t.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",l=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(e,n,t){return Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}),e[n]}try{s({},"")}catch(e){s=function(e,n,t){return e[n]=t}}function d(e,n,t,r){var i=n&&n.prototype instanceof b?n:b,a=Object.create(i.prototype),c=new T(r||[]);return o(a,"_invoke",{value:M(e,t,c)}),a}function h(e,n,t){try{return{type:"normal",arg:e.call(n,t)}}catch(e){return{type:"throw",arg:e}}}n.wrap=d;var p="suspendedStart",g="suspendedYield",m="executing",v="completed",y={};function b(){}function x(){}function w(){}var j={};s(j,c,(function(){return this}));var S=Object.getPrototypeOf,C=S&&S(S(R([])));C&&C!==t&&r.call(C,c)&&(j=C);var k=w.prototype=b.prototype=Object.create(j);function L(e){["next","throw","return"].forEach((function(n){s(e,n,(function(e){return this._invoke(n,e)}))}))}function I(e,n){function t(o,i,a,c){var l=h(e[o],e,i);if("throw"!==l.type){var u=l.arg,s=u.value;return s&&"object"==f(s)&&r.call(s,"__await")?n.resolve(s.__await).then((function(e){t("next",e,a,c)}),(function(e){t("throw",e,a,c)})):n.resolve(s).then((function(e){u.value=e,a(u)}),(function(e){return t("throw",e,a,c)}))}c(l.arg)}var i;o(this,"_invoke",{value:function(e,r){function o(){return new n((function(n,o){t(e,r,n,o)}))}return i=i?i.then(o,o):o()}})}function M(n,t,r){var o=p;return function(i,a){if(o===m)throw Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:e,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var l=E(c,r);if(l){if(l===y)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===p)throw o=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=m;var u=h(n,t,r);if("normal"===u.type){if(o=r.done?v:g,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(o=v,r.method="throw",r.arg=u.arg)}}}function E(n,t){var r=t.method,o=n.iterator[r];if(o===e)return t.delegate=null,"throw"===r&&n.iterator.return&&(t.method="return",t.arg=e,E(n,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var i=h(o,n.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,y;var a=i.arg;return a?a.done?(t[n.resultName]=a.value,t.next=n.nextLoc,"return"!==t.method&&(t.method="next",t.arg=e),t.delegate=null,y):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,y)}function O(e){var n={tryLoc:e[0]};1 in e&&(n.catchLoc=e[1]),2 in e&&(n.finallyLoc=e[2],n.afterLoc=e[3]),this.tryEntries.push(n)}function P(e){var n=e.completion||{};n.type="normal",delete n.arg,e.completion=n}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function R(n){if(n||""===n){var t=n[c];if(t)return t.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var o=-1,i=function t(){for(;++o<n.length;)if(r.call(n,o))return t.value=n[o],t.done=!1,t;return t.value=e,t.done=!0,t};return i.next=i}}throw new TypeError(f(n)+" is not iterable")}return x.prototype=w,o(k,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:x,configurable:!0}),x.displayName=s(w,u,"GeneratorFunction"),n.isGeneratorFunction=function(e){var n="function"==typeof e&&e.constructor;return!!n&&(n===x||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,s(e,u,"GeneratorFunction")),e.prototype=Object.create(k),e},n.awrap=function(e){return{__await:e}},L(I.prototype),s(I.prototype,l,(function(){return this})),n.AsyncIterator=I,n.async=function(e,t,r,o,i){void 0===i&&(i=Promise);var a=new I(d(e,t,r,o),i);return n.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},L(k),s(k,u,"Generator"),s(k,c,(function(){return this})),s(k,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var n=Object(e),t=[];for(var r in n)t.push(r);return t.reverse(),function e(){for(;t.length;){var r=t.pop();if(r in n)return e.value=r,e.done=!1,e}return e.done=!0,e}},n.values=R,T.prototype={constructor:T,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!n)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var t=this;function o(r,o){return c.type="throw",c.arg=n,t.next=r,o&&(t.method="next",t.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(l&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,n){for(var t=this.tryEntries.length-1;t>=0;--t){var o=this.tryEntries[t];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(e,n){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&n&&(this.next=n),y},finish:function(e){for(var n=this.tryEntries.length-1;n>=0;--n){var t=this.tryEntries[n];if(t.finallyLoc===e)return this.complete(t.completion,t.afterLoc),P(t),y}},catch:function(e){for(var n=this.tryEntries.length-1;n>=0;--n){var t=this.tryEntries[n];if(t.tryLoc===e){var r=t.completion;if("throw"===r.type){var o=r.arg;P(t)}return o}}throw Error("illegal catch attempt")},delegateYield:function(n,t,r){return this.delegate={iterator:R(n),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=e),y}},n}function a(e,n,t,r,o,i,a){try{var c=e[i](a),l=c.value}catch(e){return void t(e)}c.done?n(l):Promise.resolve(l).then(r,o)}function c(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i,a,c=[],l=!0,u=!1;try{if(i=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;l=!1}else for(;!(l=(r=i.call(t)).done)&&(c.push(r.value),c.length!==n);l=!0);}catch(e){u=!0,o=e}finally{try{if(!l&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(u)throw o}}return c}}(e,n)||p(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){d(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||{}.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function d(e,n,t){return(n=function(e){var n=function(e,n){if("object"!=f(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n||"default");if("object"!=f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"==f(n)?n:n+""}(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function h(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||p(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,n){if(e){if("string"==typeof e)return g(e,n);var t={}.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?g(e,n):void 0}}function g(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}System.register(["./index-legacy-DuStmmwR.js","./index-legacy-BL4CMZKR.js","./useManageMangaLibraryState-legacy-Cbc_ePwO.js","./Delete-legacy-D8r0EeNK.js","./Sync-legacy-InnEMUO_.js","./Mangas-legacy-CqqcRala.js","./CheckboxInput-legacy-BbrzI25A.js","./ListPreference-legacy-Dy_njXs8.js","./SpinnerImage-legacy-JJaN9Ffy.js","./Checkbox-legacy-CSi_jY84.js","./TypographyMaxLines-legacy-_7yUJ7Dq.js","./Link-legacy-D6uOqf2U.js","./CardContent-legacy-B6FtOr0d.js","./Avatar-legacy-DJtDvgXW.js","./PlayArrow-legacy-DiwJfjwO.js","./StyledFab-legacy-J9bGWJcg.js"],(function(l,g){"use strict";var m,v,y,b,x,w,j,S,C,k,L,I,M,E,O,P,T,R,_,N,D,W,F,A,B,G,z,H,U,Y,K,q,$,J,X,Q,Z,V,ee,ne,te,re,oe,ie,ae,ce,le,ue,se,de,fe,he,pe,ge,me,ve,ye,be,xe,we,je,Se,Ce,ke,Le,Ie,Me,Ee,Oe,Pe,Te,Re,_e,Ne,De,We,Fe,Ae,Be,Ge,ze,He,Ue,Ye,Ke,qe,$e,Je,Xe;return{setters:[function(e){m=e.c,v=e.a6,y=e.a5,b=e.s,x=e.a9,w=e.aa,j=e.y,S=e.bK,C=e.ab,k=e.j,L=e.ac,I=e.bL,M=e.bM,E=e.ad,O=e._,P=e.$,T=e.a0,R=e.M,_=e.B,N=e.K,D=e.am,W=e.bN,F=e.bO,A=e.u,B=e.x,G=e.L,z=e.Q,H=e.h,U=e.e,Y=e.a1,K=e.q,q=e.aC,$=e.aD,J=e.aE,X=e.S,Q=e.b,Z=e.bm,V=e.m,ee=e.A,ne=e.f,te=e.I,re=e.p,oe=e.T,ie=e.o,ae=e.P,ce=e.C,le=e.Y,ue=e.g,se=e.ar,de=e.ba,fe=e.bb,he=e.w,pe=e.d,ge=e.n,me=e.E},function(e){ve=e.C,ye=e.a},function(e){be=e.l,xe=e.M,we=e.d,je=e.C,Se=e.a,Ce=e.b,ke=e.m,Le=e.n,Ie=e.j,Me=e.T,Ee=e.c,Oe=e.e,Pe=e.f,Te=e.g,Re=e.i,_e=e.J,Ne=e.h},function(e){De=e.d},function(e){We=e.d},function(e){Fe=e.M,Ae=e.a},function(e){Be=e.C},function(e){Ge=e.F},function(e){ze=e.S},function(e){He=e.C},function(e){Ue=e.T},function(e){Ye=e.L},function(e){Ke=e.C,qe=e.a},function(e){$e=e.A},function(e){Je=e.d},function(e){Xe=e.D}],execute:function(){var g=m.createContext();function Qe(e){return v("MuiGrid",e)}var Ze=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],Ve=y("MuiGrid",["root","container","item","zeroMinWidth"].concat(h([0,1,2,3,4,5,6,7,8,9,10].map((function(e){return"spacing-xs-".concat(e)}))),h(["column-reverse","column","row-reverse","row"].map((function(e){return"direction-xs-".concat(e)}))),h(["nowrap","wrap-reverse","wrap"].map((function(e){return"wrap-xs-".concat(e)}))),h(Ze.map((function(e){return"grid-xs-".concat(e)}))),h(Ze.map((function(e){return"grid-sm-".concat(e)}))),h(Ze.map((function(e){return"grid-md-".concat(e)}))),h(Ze.map((function(e){return"grid-lg-".concat(e)}))),h(Ze.map((function(e){return"grid-xl-".concat(e)}))))),en=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function nn(e){var n=parseFloat(e);return"".concat(n).concat(String(e).replace(String(n),"")||"px")}function tn(e){var n=e.breakpoints,t=e.values,r="";Object.keys(t).forEach((function(e){""===r&&0!==t[e]&&(r=e)}));var o=Object.keys(n).sort((function(e,t){return n[e]-n[t]}));return o.slice(0,o.indexOf(r))}var rn=b("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState,r=t.container,o=t.direction,i=t.item,a=t.spacing,c=t.wrap,l=t.zeroMinWidth,u=t.breakpoints,s=[];r&&(s=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[t["spacing-xs-".concat(String(e))]];var r=[];return n.forEach((function(n){var o=e[n];Number(o)>0&&r.push(t["spacing-".concat(n,"-").concat(String(o))])})),r}(a,u,n));var d=[];return u.forEach((function(e){var r=t[e];r&&d.push(n["grid-".concat(e,"-").concat(String(r))])})),[n.root,r&&n.container,i&&n.item,l&&n.zeroMinWidth].concat(h(s),["row"!==o&&n["direction-xs-".concat(String(o))],"wrap"!==c&&n["wrap-xs-".concat(String(c))]],d)}})((function(e){var n=e.ownerState;return x({boxSizing:"border-box"},n.container&&{display:"flex",flexWrap:"wrap",width:"100%"},n.item&&{margin:0},n.zeroMinWidth&&{minWidth:0},"wrap"!==n.wrap&&{flexWrap:n.wrap})}),(function(e){var n=e.theme,t=e.ownerState,r=I({values:t.direction,breakpoints:n.breakpoints.values});return M({theme:n},r,(function(e){var n={flexDirection:e};return 0===e.indexOf("column")&&(n["& > .".concat(Ve.item)]={maxWidth:"none"}),n}))}),(function(e){var n=e.theme,t=e.ownerState,r=t.container,o=t.rowSpacing,i={};if(r&&0!==o){var a,c=I({values:o,breakpoints:n.breakpoints.values});"object"===f(c)&&(a=tn({breakpoints:n.breakpoints.values,values:c})),i=M({theme:n},c,(function(e,t){var r,o=n.spacing(e);return"0px"!==o?d({marginTop:"-".concat(nn(o))},"& > .".concat(Ve.item),{paddingTop:nn(o)}):null!=(r=a)&&r.includes(t)?{}:d({marginTop:0},"& > .".concat(Ve.item),{paddingTop:0})}))}return i}),(function(e){var n=e.theme,t=e.ownerState,r=t.container,o=t.columnSpacing,i={};if(r&&0!==o){var a,c=I({values:o,breakpoints:n.breakpoints.values});"object"===f(c)&&(a=tn({breakpoints:n.breakpoints.values,values:c})),i=M({theme:n},c,(function(e,t){var r,o=n.spacing(e);return"0px"!==o?d({width:"calc(100% + ".concat(nn(o),")"),marginLeft:"-".concat(nn(o))},"& > .".concat(Ve.item),{paddingLeft:nn(o)}):null!=(r=a)&&r.includes(t)?{}:d({width:"100%",marginLeft:0},"& > .".concat(Ve.item),{paddingLeft:0})}))}return i}),(function(e){var n,t=e.theme,r=e.ownerState;return t.breakpoints.keys.reduce((function(e,o){var i={};if(r[o]&&(n=r[o]),!n)return e;if(!0===n)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===n)i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var a=I({values:r.columns,breakpoints:t.breakpoints.values}),c="object"===f(a)?a[o]:a;if(null==c)return e;var l="".concat(Math.round(n/c*1e8)/1e6,"%"),u={};if(r.container&&r.item&&0!==r.columnSpacing){var s=t.spacing(r.columnSpacing);if("0px"!==s){var d="calc(".concat(l," + ").concat(nn(s),")");u={flexBasis:d,maxWidth:d}}}i=x({flexBasis:l,flexGrow:0,maxWidth:l},u)}return 0===t.breakpoints.values[o]?Object.assign(e,i):e[t.breakpoints.up(o)]=i,e}),{})}));var on=function(e){var n=e.classes,t=e.container,r=e.direction,o=e.item,i=e.spacing,a=e.wrap,c=e.zeroMinWidth,l=e.breakpoints,u=[];t&&(u=function(e,n){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return["spacing-xs-".concat(String(e))];var t=[];return n.forEach((function(n){var r=e[n];if(Number(r)>0){var o="spacing-".concat(n,"-").concat(String(r));t.push(o)}})),t}(i,l));var s=[];l.forEach((function(n){var t=e[n];t&&s.push("grid-".concat(n,"-").concat(String(t)))}));var d={root:["root",t&&"container",o&&"item",c&&"zeroMinWidth"].concat(h(u),["row"!==r&&"direction-xs-".concat(String(r)),"wrap"!==a&&"wrap-xs-".concat(String(a))],s)};return E(d,Qe,n)},an=m.forwardRef((function(e,n){var t=w({props:e,name:"MuiGrid"}),r=j().breakpoints,o=S(t),i=o.className,a=o.columns,c=o.columnSpacing,l=o.component,u=void 0===l?"div":l,s=o.container,d=void 0!==s&&s,f=o.direction,h=void 0===f?"row":f,p=o.item,v=void 0!==p&&p,y=o.rowSpacing,b=o.spacing,I=void 0===b?0:b,M=o.wrap,E=void 0===M?"wrap":M,O=o.zeroMinWidth,P=void 0!==O&&O,T=C(o,en),R=y||I,_=c||I,N=m.useContext(g),D=d?a||12:N,W={},F=x({},T);r.keys.forEach((function(e){null!=T[e]&&(W[e]=T[e],delete F[e])}));var A=x({},o,{columns:D,container:d,direction:h,item:v,rowSpacing:R,columnSpacing:_,wrap:E,zeroMinWidth:P,spacing:I},W,{breakpoints:r.keys}),B=on(A);return k.jsx(g.Provider,{value:D,children:k.jsx(rn,x({ownerState:A,className:L(B.root,i),as:u,ref:n},F))})})),cn=m.forwardRef((function(n,t){var r=n.MenuItemProps,o=n.className,i=n.label,a=n.LeftIcon,c=(n.renderLabel,n.RightIcon),l=s(n,e);return k.jsxs(O,u(u(u({},r),{},{ref:t,className:o},l),{},{children:[a&&k.jsx(P,{children:k.jsx(a,{fontSize:"small"})}),k.jsx(T,{children:i}),c&&k.jsx(P,{style:{minWidth:0},children:k.jsx(c,{fontSize:"small"})})]}))})),ln=m.forwardRef((function(e,r){var o=e.parentMenuOpen,i=e.label,a=e.renderLabel,l=e.RightIcon,d=void 0===l?D(W,F):l,f=e.LeftIcon,h=e.children,g=e.className,v=e.tabIndex,y=e.ContainerProps,b=void 0===y?{}:y,x=e.MenuProps,w=s(e,n),j=R.useIsTouchDevice(),S=b.ref,C=s(b,t),L=m.useRef(null);m.useImperativeHandle(r,(function(){return L.current}));var I=m.useRef(null);m.useImperativeHandle(S,(function(){return I.current}));var M,E=m.useRef(null),O=c(m.useState(!1),2),P=O[0],T=O[1],A=function(n){P!==n&&(e.disabled?T(!1):T(n))},B=function(){var e,n,t=null!==(e=null===(n=I.current)||void 0===n?void 0:n.ownerDocument.activeElement)&&void 0!==e?e:null;if(null==E.current)return!1;var r,o=function(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=p(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==t.return||t.return()}finally{if(c)throw i}}}}(E.current.children);try{for(o.s();!(r=o.n()).done;){if(r.value===t)return!0}}catch(i){o.e(i)}finally{o.f()}return!1},G=P&&o;return e.disabled||(M=void 0!==v?v:-1),k.jsxs(_,u(u({},C),{},{ref:I,onFocus:function(e){j||(e.target===I.current&&A(!0),C.onFocus&&C.onFocus(e))},onClick:function(e){A(!P),C.onClick&&C.onClick(e)},tabIndex:M,onMouseEnter:function(e){j||(A(!0),C.onMouseEnter&&C.onMouseEnter(e))},onMouseLeave:function(e){A(!1),C.onMouseLeave&&C.onMouseLeave(e)},onKeyDown:function(e){var n;if("Escape"!==e.key){B()&&e.stopPropagation();var t,r=null===(n=I.current)||void 0===n?void 0:n.ownerDocument.activeElement;if("ArrowLeft"===e.key&&B())null===(t=I.current)||void 0===t||t.focus();if("ArrowRight"===e.key&&e.target===I.current&&e.target===r){var o,i=null===(o=E.current)||void 0===o?void 0:o.children[0];null==i||i.focus()}}},children:[k.jsx(cn,{MenuItemProps:w,className:g,ref:L,LeftIcon:f,RightIcon:d,label:i,renderLabel:a}),k.jsx(N,u(u({style:{pointerEvents:"none"},anchorEl:L.current,anchorOrigin:{horizontal:D("right","left"),vertical:"top"},transformOrigin:{horizontal:D("left","right"),vertical:"top"},open:G,autoFocus:!1,disableAutoFocus:!0,disableEnforceFocus:!0,onClose:function(){A(!1)}},x),{},{children:k.jsx(_,{ref:E,style:{pointerEvents:"auto"},children:h})}))]}))}));ln.displayName="NestedMenuItem";var un=["remove_from_library"],sn=l("a",(function(e){var n=e.manga,t=e.handleSelection,r=e.selectedMangas,o=e.onClose,i=e.setHideMenu,a=A().t,l=c(m.useState(!1),2),u=l[0],s=l[1],d=!!n,f=null!=r?r:[],p=Ee(d,Ae),g=Oe(d),v=Pe(d),y=!!n&&n.downloadCount===n.chapters.totalCount,b=!(null==n||!n.downloadCount),x=!(null==n||!n.unreadCount),w=!!n&&n.unreadCount!==n.chapters.totalCount,j=be({mangaId:null==n?void 0:n.id,mangaIds:r?Fe.getIds(f):void 0,onClose:function(){return o(!0)},addToLibrary:!1}),S=j.openCategorySelect,C=j.CategorySelectComponent,L=function(e,t){Fe.performAction(e,n?[n.id]:Fe.getIds(t),{wasManuallyMarkedAsRead:!0}).catch(H()),o(!un.includes(e))},I=m.useMemo((function(){return{downloadableMangas:[].concat(h(Fe.getNotDownloaded(f)),h(Fe.getPartiallyDownloaded(f))),downloadedMangas:[].concat(h(Fe.getPartiallyDownloaded(f)),h(Fe.getFullyDownloaded(f))),unreadMangas:[].concat(h(Fe.getUnread(f)),h(Fe.getPartiallyRead(f))),readMangas:[].concat(h(Fe.getPartiallyRead(f)),h(Fe.getFullyRead(f)))}}),[f]),M=I.downloadableMangas,E=I.downloadedMangas,O=I.unreadMangas,P=I.readMangas;return k.jsxs(k.Fragment,{children:[!!t&&d&&k.jsx(xe,{onClick:function(){null==t||t(n.id,!0),o(!0)},Icon:we,title:a("chapter.action.label.select")}),g(!y)&&k.jsx(ln,{disabled:v(!M.length),LeftIcon:B,label:p("download",M.length),parentMenuOpen:!0,children:k.jsx(je,{mangaIds:d?[n.id]:Fe.getIds(f),closeMenu:function(){return o(!0)}})}),g(b)&&k.jsx(xe,{Icon:De,disabled:v(!E.length),onClick:function(){return L("delete",E)},title:p("delete",E.length)}),g(x)&&k.jsx(xe,{Icon:Se,disabled:v(!O.length),onClick:function(){return L("mark_as_read",O)},title:p("mark_as_read",O.length)}),g(w)&&k.jsx(xe,{Icon:Ce,disabled:v(!P.length),onClick:function(){return L("mark_as_unread",P)},title:p("mark_as_unread",P.length)}),d&&k.jsx(G,{to:"/migrate/source/".concat(null==n?void 0:n.sourceId,"/manga/").concat(null==n?void 0:n.id,"/search?query=").concat(null==n?void 0:n.title),state:{mangaTitle:null==n?void 0:n.title},style:{textDecoration:"none",color:"inherit"},children:k.jsx(xe,{Icon:ke,title:p("migrate",f.length)})}),d&&k.jsx(xe,{onClick:function(){s(!0),i(!0)},Icon:We,title:p("track",f.length)}),k.jsx(xe,{onClick:function(){S(!0),i(!0)},Icon:Le,title:p("change_categories",f.length)}),k.jsx(xe,{onClick:function(){return L("remove_from_library",f)},Icon:Ie,title:p("remove_from_library",f.length)}),C,u&&k.jsx(z,{open:!0,maxWidth:"md",fullWidth:!0,scroll:"paper",onClose:function(){s(!1),o(!0)},children:k.jsx(Me,{manga:n})})]})})),dn=function(e){var n=e.mangaIdToMigrateTo,t=e.onClose,r=A().t,o=U(),l=Y().mangaId,u=Number(l),s=K().settings,d=s.migrateChapters,f=s.migrateCategories,h=s.migrateTracking,p=s.deleteChapters,g=c(m.useState(!1),2),v=g[0],y=g[1],b=Z(H()),x=function(){var e,t=(e=i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=u){e.next=2;break}throw new Error('MigrateDialog::migrate: unexpected mangaId "'.concat(u,'"'));case 2:return V(r("migrate.label.info"),"info"),y(!0),e.prev=4,e.next=7,Fe.migrate(u,n,{mode:t,migrateChapters:d,migrateCategories:f,migrateTracking:h,deleteChapters:p});case 7:o("/manga/".concat(n),{replace:!0}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),y(!1);case 13:case"end":return e.stop()}}),e,null,[[4,10]])})),function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function c(e){a(i,r,o,c,l,"next",e)}function l(e){a(i,r,o,c,l,"throw",e)}c(void 0)}))});return function(e){return t.apply(this,arguments)}}();return k.jsxs(z,{open:!0,fullWidth:!0,onClose:t,children:[k.jsx(q,{children:r("migrate.dialog.title")}),k.jsx($,{dividers:!0,children:k.jsxs(Ge,{children:[k.jsx(Be,{disabled:v,label:r("chapter.title_one"),checked:d,onChange:function(e,n){return b("migrateChapters",n)}}),k.jsx(Be,{disabled:v,label:r("category.title.category_one"),checked:f,onChange:function(e,n){return b("migrateCategories",n)}}),k.jsx(Be,{disabled:v,label:r("tracking.title"),checked:h,onChange:function(e,n){return b("migrateTracking",n)}}),k.jsx(Be,{disabled:v,label:r("migrate.dialog.label.delete_downloaded"),checked:p,onChange:function(e,n){return b("deleteChapters",n)}})]})}),k.jsx(J,{children:k.jsxs(X,{sx:{width:"100%"},direction:"row",justifyContent:"space-between",children:[k.jsx(Q,{disabled:v,component:G,to:"/manga/".concat(n),children:r("migrate.dialog.action.button.show_entry")}),k.jsxs(X,{direction:"row",children:[k.jsx(Q,{disabled:v,onClick:t,children:r("global.button.cancel")}),k.jsx(Q,{disabled:v,onClick:function(){return x("copy")},children:r("global.button.copy")}),k.jsx(Q,{disabled:v,onClick:function(){return x("migrate")},children:r("global.button.migrate")})]})]})})]})},fn=m.forwardRef((function(e,n){var t=e.id,r=e.selected,o=e.handleSelection,i=e.asCheckbox,a=void 0!==i&&i,c=e.popupState,l=A().t,s=R.useIsTouchDevice(),d=m.useMemo((function(){return ee(c)}),[c]),f=function(e){e.stopPropagation(),e.preventDefault()},h=function(e){s||(f(e),c.open(e),d.onClick(e))};return o?null!==r?a?k.jsx(ne,{title:l(r?"global.button.deselect":"global.button.select"),children:k.jsx(He,{checked:r,onMouseDown:f,onChange:function(e,n){f(e),null==o||o(t,n)}})}):null:a?k.jsx(ne,{title:l("global.button.options"),children:k.jsx(te,u(u({ref:n},d),{},{onClick:h,onTouchStart:h,"aria-label":"more",size:"large",onMouseDown:f,children:k.jsx(Te,{})}))}):k.jsx(ne,{title:l("global.button.options"),children:k.jsx(Q,u(u({ref:n},d),{},{onClick:h,onTouchStart:h,className:"manga-option-button",size:"small",variant:"contained",sx:{minWidth:"unset",paddingX:"0",paddingY:"2.5px",visibility:c.isOpen?"visible":"hidden",pointerEvents:"none","@media not (pointer: fine)":{visibility:"hidden",pointerEvents:void 0}},onMouseDown:function(e){return e.stopPropagation()},children:k.jsx(Te,{})}))}):null})),hn=b("div")({position:"absolute",bottom:0,width:"100%",height:"30%",background:"linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)"}),pn=b("div")({position:"absolute",bottom:0,width:"100%",height:"20%",background:"linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)"}),gn=function(e){var n=e.manga,t=e.longPressBind,r=e.popupState,o=e.handleClick,i=e.mangaLinkTo,a=e.selected,c=e.inLibraryIndicator,l=e.isInLibrary,s=e.gridLayout,d=e.handleSelection,f=e.continueReadingButton,h=e.mangaBadges,p=e.mode,g=m.useRef(null),v=n.id,y=n.title;return k.jsx(Ye,u(u({component:G},t((function(){return r.open(g.current)}))),{},{onClick:o,to:i,state:{mangaTitle:y},sx:{textDecoration:"none",touchCallout:"none"},children:k.jsxs(_,{sx:{display:"flex",flexDirection:"column",m:.25,outline:a?"4px solid":void 0,borderRadius:a?"1px":void 0,outlineColor:function(e){return e.palette.primary.main},backgroundColor:function(e){return a?e.palette.primary.main:void 0},"@media (hover: hover) and (pointer: fine)":{"&:hover .manga-option-button":{visibility:"visible",pointerEvents:"all"},"&:hover .source-manga-library-state-button":{display:"inline-flex"},"&:hover .source-manga-library-state-indicator":{display:"source"===p?"none":"flex"}}},children:[k.jsx(Ke,{sx:{aspectRatio:"225/350",display:"flex"},children:k.jsxs(ve,{sx:{position:"relative",height:"100%"},children:[k.jsx(ze,{alt:y,src:Fe.getThumbnailUrl(n),imgStyle:c&&l?{height:"100%",width:"100%",objectFit:"cover",filter:"brightness(0.4)"}:{height:"100%",width:"100%",objectFit:"cover"},spinnerStyle:{display:"grid",placeItems:"center"}}),k.jsxs(X,{alignItems:"start",justifyContent:"space-between",direction:"row",sx:{position:"absolute",top:function(e){return e.spacing(1)},left:function(e){return e.spacing(1)},right:function(e){return e.spacing(1)}},children:[h,k.jsx(fn,{ref:g,popupState:r,id:v,selected:a,handleSelection:d})]}),k.jsxs(k.Fragment,{children:[s!==re.Comfortable&&k.jsxs(k.Fragment,{children:[k.jsx(hn,{}),k.jsx(pn,{})]}),k.jsxs(X,{direction:"row",justifyContent:s!==re.Comfortable?"space-between":"end",alignItems:"end",sx:{position:"absolute",bottom:0,width:"100%",p:1,gap:1},children:[s!==re.Comfortable&&k.jsx(ne,{title:y,placement:"top",children:k.jsx(Ue,{component:"h3",sx:{color:"white",textShadow:"0px 0px 3px #000000"},children:y})}),f]})]})]})}),s===re.Comfortable&&k.jsx(X,{sx:{pb:1},children:k.jsx(ne,{title:y,placement:"top",children:k.jsx(Ue,{component:"h3",sx:{color:"text.primary",height:"3rem",pt:.5},children:y})})})]})}))},mn=function(e){var n=e.manga,t=e.longPressBind,r=e.popupState,o=e.handleClick,i=e.mangaLinkTo,a=e.selected,c=e.inLibraryIndicator,l=e.isInLibrary,s=e.handleSelection,d=e.continueReadingButton,f=e.mangaBadges,h=e.mode,p=m.useRef(null),g=n.id,v=n.title;return k.jsx(Ke,{children:k.jsx(ve,u(u({component:G,to:i,state:{mangaTitle:v},onClick:o},t((function(){return r.open(p.current)}))),{},{sx:{touchCallout:"none","@media (hover: hover) and (pointer: fine)":{"&:hover .manga-option-button":{visibility:"visible",pointerEvents:"all"},"&:hover .source-manga-library-state-button":{display:"inline-flex"},"&:hover .source-manga-library-state-indicator":{display:"source"===h?"none":"inline-flex"}}},children:k.jsxs(qe,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:1.5,position:"relative"},children:[k.jsx($e,{variant:"rounded",sx:{width:56,height:56,flex:"0 0 auto",marginRight:1},children:k.jsx(ze,{spinnerStyle:{small:!0},imgStyle:{objectFit:"cover",width:"100%",height:"100%",imageRendering:"pixelated",filter:c&&l?"brightness(0.4)":void 0},alt:n.title,src:Fe.getThumbnailUrl(n)})}),k.jsx(_,{sx:{display:"flex",flexDirection:"row",flexGrow:1,width:"min-content"},children:k.jsx(ne,{title:v,placement:"top",children:k.jsx(Ue,{variant:"h6",component:"h3",children:v})})}),k.jsxs(X,{direction:"row",alignItems:"center",gap:.5,children:[f,d,k.jsx(fn,{ref:p,popupState:r,id:g,selected:a,handleSelection:s,asCheckbox:!0})]})]})}))})},vn=function(e){var n=e.showContinueReadingButton,t=e.nextChapterIndexToRead,r=e.mangaLinkTo,o=A().t,i=1===t;return n&&void 0!==t?k.jsx(ne,{title:o(i?"global.button.start":"global.button.resume"),children:k.jsx(Q,{variant:"contained",size:"small",sx:{minWidth:"unset",py:.5,px:.75},component:G,to:"".concat(r,"chapter/").concat(t),onClick:function(e){return e.stopPropagation()},onMouseDown:function(e){return e.stopPropagation()},children:k.jsx(Je,{})})}):null},yn=b("div")((function(e){return{display:"flex",height:"fit-content",borderRadius:e.theme.shape.borderRadius,overflow:"hidden"}})),bn=b(oe)((function(e){var n=e.theme;return{color:n.palette.primary.contrastText,paddingInline:n.spacing(.3)}})),xn=function(e){var n=e.inLibraryIndicator,t=e.updateLibraryState,r=e.isInLibrary,o=e.unread,i=e.downloadCount,a=e.mode,c=A().t,l=R.useIsTouchDevice(),u=ie().options,s=u.showUnreadBadge,d=u.showDownloadBadge;return k.jsxs(yn,{children:[!l&&n&&"source"===a&&k.jsx(Q,{className:"source-manga-library-state-button",component:"div",variant:"contained",size:"small",onMouseDown:function(e){return e.stopPropagation()},onClick:function(e){e.preventDefault(),e.stopPropagation(),t()},sx:{display:"none"},color:r?"error":"primary",children:c(r?"manga.action.library.remove.label.action":"manga.button.add_to_library")}),n&&r&&k.jsx(oe,{className:"source-manga-library-state-indicator",sx:{backgroundColor:"primary.dark"},children:c("manga.button.in_library")}),(s&&"default"===a||"duplicate"===a)&&(null!=o?o:0)>0&&k.jsx(bn,{sx:{backgroundColor:"primary.dark"},children:o}),(d&&"default"===a||"duplicate"===a)&&(null!=i?i:0)>0&&k.jsx(bn,{sx:{backgroundColor:"primary.light"},children:i})]})},wn=l("b",(function(e){var n=e.manga,t=e.gridLayout,r=e.inLibraryIndicator,o=e.selected,i=e.handleSelection,a=e.mode,l=void 0===a?"default":a,s=n.id,d=n.firstUnreadChapter,f=n.downloadCount,h=n.unreadCount,p=ie().options.showContinueReadingButton,g=Re(n,"source"===l),v=g.CategorySelectComponent,y=g.updateLibraryState,b=g.isInLibrary,x=function(e,n,t,r){switch(e){case"default":case"source":case"duplicate":return"/manga/".concat(n,"/");case"migrate.search":return"/migrate/source/".concat(t,"/manga/").concat(n,"/search?query=").concat(r);case"migrate.select":return"";default:throw new Error('getMangaLinkTo: unexpected MangaCardMode "'.concat(e,'"'))}}(l,n.id,n.sourceId,n.title),w=null==d?void 0:d.sourceOrder,j=c(m.useState(!1),2),S=j[0],C=j[1],L=function(e,n){var t="default"===l,r="source"===l,a="migrate.select"===l,c=null!==o;(a||c||(t||r)&&!!n)&&(e.preventDefault(),r?y():c?null==i||i(s,!o,{selectRange:e.shiftKey}):t?null==n||n():a&&C(!0))},I=_e((function(e,n){var t=n.context;e.shiftKey=!0,L(e,t)})),M=m.useMemo((function(){return t===re.List?mn:gn}),[t]),E=m.useMemo((function(){return k.jsx(vn,{showContinueReadingButton:p&&"default"===l,nextChapterIndexToRead:w,mangaLinkTo:x})}),[p,w,x]),O=m.useMemo((function(){return k.jsx(xn,{inLibraryIndicator:r,isInLibrary:b,unread:h,downloadCount:f,updateLibraryState:y,mode:l})}),[r,b,h,f,y]);return k.jsxs(k.Fragment,{children:[S&&k.jsx(dn,{mangaIdToMigrateTo:n.id,onClose:function(){return C(!1)}}),k.jsx(ae,{variant:"popover",popupId:"manga-card-action-menu",children:function(t){return k.jsxs(k.Fragment,{children:[k.jsx(M,u(u({},e),{},{longPressBind:I,popupState:t,handleClick:L,mangaLinkTo:x,isInLibrary:b,inLibraryIndicator:r,continueReadingButton:E,mangaBadges:O})),!!i&&t.isOpen&&k.jsx(Ne,u(u({},ce(t)),{},{children:function(e,t){return k.jsx(sn,{manga:n,handleSelection:i,onClose:e,setHideMenu:t})}})),v]})}})]})})),jn=le.forwardRef((function(e,n){var t=e.children,o=s(e,r);return k.jsx(an,u(u({},o),{},{ref:n,container:!0,sx:{paddingLeft:"5px",paddingRight:"13px"},children:t}))})),Sn=function(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,a=arguments.length>6?arguments[6]:void 0;return k.jsx(wn,{manga:e,gridLayout:n,inLibraryIndicator:t,selected:r?null==o?void 0:o.includes(e.id):null,handleSelection:i,mode:a},e.id)},Cn=m.forwardRef((function(e,n){var t=e.isLoading,r=e.mangas,o=e.inLibraryIndicator,i=e.GridItemContainer,a=e.gridLayout,c=e.isSelectModeActive,l=e.selectedMangaIds,u=e.handleSelection,s=e.mode;return k.jsx(an,{ref:n,container:!0,spacing:1,style:{margin:0,width:"100%",padding:"5px",overflowX:"auto",display:"-webkit-inline-box",flexWrap:"nowrap"},children:t?k.jsx(ue,{}):r.map((function(e){return k.jsx(i,{children:Sn(e,a,o,c,l,u,s)},e.id)}))})})),kn=l("g",(function(e){return"MangaGrid-snapshot-location-".concat(e.key)})),Ln=m.forwardRef((function(e,n){var t=e.isLoading,r=e.mangas,o=e.inLibraryIndicator,i=e.GridItemContainer,a=e.gridLayout,l=e.hasNextPage,u=e.loadMore,s=e.isSelectModeActive,d=e.selectedMangaIds,f=e.handleSelection,h=e.mode,p=se(),g=kn(p),v=c(de(g,void 0),1)[0],y=m.useRef();return m.useEffect((function(){return clearTimeout(y.current)}),[p.key,y.current]),k.jsxs(k.Fragment,{children:[k.jsx(_,{ref:n,children:k.jsx(ye,{useWindowScroll:!0,overscan:.25*window.innerHeight,totalCount:r.length,components:{List:jn,Item:i},restoreStateFrom:v,stateChanged:function(e){var n=window.location.href;clearTimeout(y.current),y.current=setTimeout((function(){n!==window.location.href||fe.session.setItem(g,e,!1)}),250)},endReached:function(){return u()},itemContent:function(e){return Sn(r[e],a,o,s,d,f,h)}})}),s&&a===re.List?k.jsx(_,{sx:{paddingBottom:Xe}}):t?k.jsx(ue,{}):l?k.jsx("div",{style:{height:"75px"}}):null]})}));l("M",(function(e){var n,t,r=e.mangas,i=e.isLoading,a=e.message,l=e.messageExtra,d=e.hasNextPage,f=e.loadMore,h=e.gridLayout,p=e.horizontal,g=e.noFaces,v=e.inLibraryIndicator,y=e.isSelectModeActive,b=e.selectedMangaIds,x=e.handleSelection,w=e.mode,j=e.retry,S=A().t,C=he().navBarWidth,L=m.useRef(null),I=m.useRef(null),M=c(m.useState(null!==(n=null===(t=I.current)||void 0===t?void 0:t.offsetWidth)&&void 0!==n?n:Math.max(0,document.documentElement.offsetWidth-C)),2),E=M[0],O=M[1],P=c(pe("ItemWidth",300),1)[0],T=m.useMemo((function(){return function(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:12,i=Math.ceil(e/n),a=t===re.List?r:r/i;return function(e){var n=e.children,t=s(e,o);return k.jsx(an,u(u({},t),{},{item:!0,xs:a,sx:{width:"100%",paddingTop:"8px",paddingLeft:"8px"},children:n}))}}(E,P,h)}),[E,P,h]);return m.useLayoutEffect((function(){var e;return function n(t){e=setTimeout((function(){document.body.style.overflow.includes("hidden")?n(250):document.body.style.overflowY=h===re.List?"auto":"scroll"}),t)}(0),function(){clearTimeout(e)}}),[h]),m.useLayoutEffect((function(){return function(){document.body.style.overflowY="auto"}}),[]),ge(I,m.useCallback((function(){var e;O((null===(e=I.current)||void 0===e?void 0:e.offsetWidth)||document.documentElement.offsetWidth-C)}),[C])),ge(L,m.useCallback((function(e,n){var t=e[0].target.clientHeight,r=t>document.documentElement.clientHeight;i||t&&(r||f(),n.disconnect())}),[L,f,i])),!i&&0===r.length?k.jsx(me,{noFaces:g,message:null!=a?a:S("manga.error.label.no_mangas_found"),messageExtra:l,retry:j}):k.jsx("div",{ref:I,style:{overflow:"hidden",paddingBottom:"13px"},children:p?k.jsx(Cn,{ref:L,isLoading:i,mangas:r,inLibraryIndicator:v,GridItemContainer:T,gridLayout:h,isSelectModeActive:y,selectedMangaIds:b,handleSelection:x,mode:w}):k.jsx(Ln,{ref:L,isLoading:i,mangas:r,inLibraryIndicator:v,GridItemContainer:T,hasNextPage:d,loadMore:f,gridLayout:h,isSelectModeActive:y,selectedMangaIds:b,handleSelection:x,mode:w})})}))}}}))}();
