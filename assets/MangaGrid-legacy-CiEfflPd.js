!function(){var e=["className","children","columns","container","component","direction","wrap","size","offset","spacing","rowSpacing","columnSpacing","unstable_level"],t=["MenuItemProps","className","label","LeftIcon","renderLabel","RightIcon"],n=["parentMenuOpen","label","renderLabel","RightIcon","LeftIcon","children","className","tabIndex","ContainerProps","MenuProps"],r=["ref"],o=["children"],i=["children"];function a(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */a=function(){return t};var e,t={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,n){return e[t]=n}}function d(e,t,n,r){var i=t&&t.prototype instanceof b?t:b,a=Object.create(i.prototype),c=new R(r||[]);return o(a,"_invoke",{value:M(e,n,c)}),a}function f(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=d;var h="suspendedStart",p="suspendedYield",g="executing",v="completed",y={};function b(){}function x(){}function w(){}var j={};s(j,c,(function(){return this}));var S=Object.getPrototypeOf,C=S&&S(S(T([])));C&&C!==n&&r.call(C,c)&&(j=C);var k=w.prototype=b.prototype=Object.create(j);function L(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function I(e,t){function n(o,i,a,c){var l=f(e[o],e,i);if("throw"!==l.type){var u=l.arg,s=u.value;return s&&"object"==m(s)&&r.call(s,"__await")?t.resolve(s.__await).then((function(e){n("next",e,a,c)}),(function(e){n("throw",e,a,c)})):t.resolve(s).then((function(e){u.value=e,a(u)}),(function(e){return n("throw",e,a,c)}))}c(l.arg)}var i;o(this,"_invoke",{value:function(e,r){function o(){return new t((function(t,o){n(e,r,t,o)}))}return i=i?i.then(o,o):o()}})}function M(t,n,r){var o=h;return function(i,a){if(o===g)throw Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:e,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var l=E(c,r);if(l){if(l===y)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===h)throw o=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=g;var u=f(t,n,r);if("normal"===u.type){if(o=r.done?v:p,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(o=v,r.method="throw",r.arg=u.arg)}}}function E(t,n){var r=n.method,o=t.iterator[r];if(o===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,E(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var i=f(o,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,y;var a=i.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,y):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function R(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function T(t){if(t||""===t){var n=t[c];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}throw new TypeError(m(t)+" is not iterable")}return x.prototype=w,o(k,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:x,configurable:!0}),x.displayName=s(w,u,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===x||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,s(e,u,"GeneratorFunction")),e.prototype=Object.create(k),e},t.awrap=function(e){return{__await:e}},L(I.prototype),s(I.prototype,l,(function(){return this})),t.AsyncIterator=I,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new I(d(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},L(k),s(k,u,"Generator"),s(k,c,(function(){return this})),s(k,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=T,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(l&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),P(n),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;P(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:T(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),y}},t}function c(e,t,n,r,o,i,a){try{var c=e[i](a),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,o)}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],-1===t.indexOf(n)&&{}.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function u(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||d(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,c=[],l=!0,u=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);l=!0);}catch(e){u=!0,o=e}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw o}}return c}}(e,t)||d(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){if(e){if("string"==typeof e)return f(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=m(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==m(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}System.register(["./index-legacy-DtENRSFB.js","./ChaptersDownloadActionMenuItems-legacy-DoAhKm85.js","./Sync-legacy-C2hyqN0r.js","./Avatar-legacy-Dx70rgPX.js","./PlayArrow-legacy-D-Ehfn8g.js","./StyledFab-legacy-eUzcQCgP.js"],(function(f,h){"use strict";var v,y,b,x,w,j,S,C,k,L,I,M,E,O,P,R,T,_,N,A,G,F,D,B,W,z,H,U,Y,q,K,V,X,J,Q,$,Z,ee,te,ne,re,oe,ie,ae,ce,le,ue,se,de,fe,he,pe,ge,me,ve,ye,be,xe,we,je,Se,Ce,ke,Le,Ie,Me,Ee,Oe,Pe,Re,Te,_e,Ne,Ae,Ge,Fe,De,Be,We,ze,He,Ue,Ye,qe,Ke,Ve,Xe,Je,Qe,$e,Ze,et;return{setters:[function(e){v=e.ca,y=e.cb,b=e.i,x=e.cc,w=e.j,j=e.be,S=e.cd,C=e.ce,k=e.c6,L=e.c2,I=e.cf,M=e.af,E=e.c4,O=e.aC,P=e.aQ,R=e.aR,T=e.aS,_=e.cg,N=e.ch,A=e.ci,G=e.M,F=e.B,D=e.aq,B=e.u,W=e.aO,z=e.ad,H=e.cj,U=e.ck,Y=e.cl,q=e.cm,K=e.ap,V=e.cn,X=e.W,J=e.co,Q=e.cp,$=e.L,Z=e.A,ee=e.aA,te=e.D,ne=e.cq,re=e.o,oe=e.k,ie=e.aT,ae=e.x,ce=e.s,le=e.t,ue=e.bt,se=e.a5,de=e.y,fe=e.b0,he=e.d,pe=e.e,ge=e.q,me=e.ao,ve=e.l,ye=e.a7,be=e.f,xe=e.I,we=e.cr,je=e.aJ,Se=e.C,Ce=e.aF,ke=e.a,Le=e.S,Ie=e.a4,Me=e.cs,Ee=e.b,Oe=e.ag,Pe=e.T,Re=e.ay,Te=e.ct,_e=e.an,Ne=e.aY,Ae=e.ar,Ge=e.g,Fe=e.h,De=e.K,Be=e.E,We=e.m,ze=e.v,He=e.bH,Ue=e.cu,Ye=e.aN,qe=e.bI},function(e){Ke=e.C,Ve=e.S,Xe=e.L,Je=e.T},function(e){Qe=e.S},function(e){$e=e.A},function(e){Ze=e.P},function(e){et=e.D}],execute:function(){var h=function(e,t,n){var r,o,i=e.keys[0];if(Array.isArray(t))t.forEach((function(t,r){n((function(t,n){r<=e.keys.length-1&&(0===r?Object.assign(t,n):t[e.up(e.keys[r])]=n)}),t)}));else if(t&&"object"===m(t)){(Object.keys(t).length>e.keys.length?e.keys:(r=e.keys,o=Object.keys(t),r.filter((function(e){return o.includes(e)})))).forEach((function(r){if(e.keys.includes(r)){var o=t[r];void 0!==o&&n((function(t,n){i===r?Object.assign(t,n):t[e.up(r)]=n}),o)}}))}else"number"!=typeof t&&"string"!=typeof t||n((function(e,t){Object.assign(e,t)}),t)};function tt(e){return"--Grid-".concat(e,"Spacing")}function nt(e){return"--Grid-parent-".concat(e,"Spacing")}var rt="--Grid-columns",ot="--Grid-parent-columns",it=function(e){var t=e.theme,n=e.ownerState,r={};return h(t.breakpoints,n.size,(function(e,t){var n={};"grow"===t&&(n={flexBasis:0,flexGrow:1,maxWidth:"100%"}),"auto"===t&&(n={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),"number"==typeof t&&(n={flexGrow:0,flexBasis:"auto",width:"calc(100% * ".concat(t," / var(").concat(ot,") - (var(").concat(ot,") - ").concat(t,") * (var(").concat(nt("column"),") / var(").concat(ot,")))")}),e(r,n)})),r},at=function(e){var t=e.theme,n=e.ownerState,r={};return h(t.breakpoints,n.offset,(function(e,t){var n={};"auto"===t&&(n={marginLeft:"auto"}),"number"==typeof t&&(n={marginLeft:0===t?"0px":"calc(100% * ".concat(t," / var(").concat(ot,") + var(").concat(nt("column"),") * ").concat(t," / var(").concat(ot,"))")}),e(r,n)})),r},ct=function(e){var t=e.theme,n=e.ownerState;if(!n.container)return{};var r=g({},rt,12);return h(t.breakpoints,n.columns,(function(e,t){var n=null!=t?t:12;e(r,g(g({},rt,n),"> *",g({},ot,n)))})),r},lt=function(e){var t=e.theme,n=e.ownerState;if(!n.container)return{};var r={};return h(t.breakpoints,n.rowSpacing,(function(e,n){var o,i="string"==typeof n?n:null===(o=t.spacing)||void 0===o?void 0:o.call(t,n);e(r,g(g({},tt("row"),i),"> *",g({},nt("row"),i)))})),r},ut=function(e){var t=e.theme,n=e.ownerState;if(!n.container)return{};var r={};return h(t.breakpoints,n.columnSpacing,(function(e,n){var o,i="string"==typeof n?n:null===(o=t.spacing)||void 0===o?void 0:o.call(t,n);e(r,g(g({},tt("column"),i),"> *",g({},nt("column"),i)))})),r},st=function(e){var t=e.theme,n=e.ownerState;if(!n.container)return{};var r={};return h(t.breakpoints,n.direction,(function(e,t){e(r,{flexDirection:t})})),r},dt=function(e){var t=e.ownerState;return p({minWidth:0,boxSizing:"border-box"},t.container&&p(p({display:"flex",flexWrap:"wrap"},t.wrap&&"wrap"!==t.wrap&&{flexWrap:t.wrap}),{},{gap:"var(".concat(tt("row"),") var(").concat(tt("column"),")")}))},ft=function(e){var t=[];return Object.entries(e).forEach((function(e){var n=s(e,2),r=n[0],o=n[1];!1!==o&&void 0!==o&&t.push("grid-".concat(r,"-").concat(String(o)))})),t},ht=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"xs";function n(e){return void 0!==e&&("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e&&e>0)}if(n(e))return["spacing-".concat(t,"-").concat(String(e))];if("object"===m(e)&&!Array.isArray(e)){var r=[];return Object.entries(e).forEach((function(e){var t=s(e,2),o=t[0],i=t[1];n(i)&&r.push("spacing-".concat(o,"-").concat(String(i)))})),r}return[]},pt=function(e){return void 0===e?[]:"object"===m(e)?Object.entries(e).map((function(e){var t=s(e,2),n=t[0],r=t[1];return"direction-".concat(n,"-").concat(r)})):["direction-xs-".concat(String(e))]},gt=I(),mt=v("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(e,t){return t.root}});function vt(e){return C({props:e,name:"MuiGrid",defaultTheme:gt})}var yt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.createStyledComponent,r=void 0===n?mt:n,o=t.useThemeProps,i=void 0===o?vt:o,a=t.useTheme,c=void 0===a?y:a,s=t.componentName,d=void 0===s?"MuiGrid":s;function f(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){return!0},r={};return null===e||(Array.isArray(e)?e.forEach((function(e,o){null!==e&&n(e)&&t.keys[o]&&(r[t.keys[o]]=e)})):"object"===m(e)?Object.keys(e).forEach((function(t){var o=e[t];null!=o&&n(o)&&(r[t]=o)})):r[t.keys[0]]=e),r}var h=r(ct,ut,lt,it,st,dt,at),g=b.forwardRef((function(t,n){var r,o,a,s,g,m,v=c(),y=i(t),C=x(y),I=C.className,M=C.children,E=C.columns,O=void 0===E?12:E,P=C.container,R=void 0!==P&&P,T=C.component,_=void 0===T?"div":T,N=C.direction,A=void 0===N?"row":N,G=C.wrap,F=void 0===G?"wrap":G,D=C.size,B=void 0===D?{}:D,W=C.offset,z=void 0===W?{}:W,H=C.spacing,U=void 0===H?0:H,Y=C.rowSpacing,q=void 0===Y?U:Y,K=C.columnSpacing,V=void 0===K?U:K,X=C.unstable_level,J=void 0===X?0:X,Q=l(C,e),$=f(B,v.breakpoints,(function(e){return!1!==e})),Z=f(z,v.breakpoints),ee=null!==(r=t.columns)&&void 0!==r?r:J?void 0:O,te=null!==(o=t.spacing)&&void 0!==o?o:J?void 0:U,ne=null!==(a=null!==(s=t.rowSpacing)&&void 0!==s?s:t.spacing)&&void 0!==a?a:J?void 0:q,re=null!==(g=null!==(m=t.columnSpacing)&&void 0!==m?m:t.spacing)&&void 0!==g?g:J?void 0:V,oe=p(p({},C),{},{level:J,columns:ee,container:R,direction:A,wrap:F,spacing:te,rowSpacing:ne,columnSpacing:re,size:$,offset:Z}),ie=function(e,t){var n=e.container,r=e.direction,o=e.spacing,i=e.wrap,a=e.size,c={root:["root",n&&"container","wrap"!==i&&"wrap-xs-".concat(String(i))].concat(u(pt(r)),u(ft(a)),u(n?ht(o,t.breakpoints.keys[0]):[]))};return k(c,(function(e){return L(d,e)}),{})}(oe,v);return w.jsx(h,p(p({ref:n,as:_,ownerState:oe,className:j(ie.root,I)},Q),{},{children:b.Children.map(M,(function(e){var t,n;return b.isValidElement(e)&&S(e,["Grid"])&&R&&e.props.container?b.cloneElement(e,{unstable_level:null!==(t=null===(n=e.props)||void 0===n?void 0:n.unstable_level)&&void 0!==t?t:J+1}):e}))}))}));return g.muiName="Grid",g}({createStyledComponent:M("div",{name:"MuiGrid2",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.container&&t.container]}}),componentName:"MuiGrid2",useThemeProps:function(e){return E({props:e,name:"MuiGrid2"})},useTheme:O}),bt=b.forwardRef((function(e,n){var r=e.MenuItemProps,o=e.className,i=e.label,a=e.LeftIcon,c=(e.renderLabel,e.RightIcon),u=l(e,t);return w.jsxs(P,p(p(p({},r),{},{ref:n,className:o},u),{},{children:[a&&w.jsx(R,{children:w.jsx(a,{fontSize:"small"})}),w.jsx(T,{children:i}),c&&w.jsx(R,{style:{minWidth:0},children:w.jsx(c,{fontSize:"small"})})]}))})),xt=b.forwardRef((function(e,t){var o=e.parentMenuOpen,i=e.label,a=e.renderLabel,c=e.RightIcon,u=void 0===c?_(A,N):c,f=e.LeftIcon,h=e.children,g=e.className,m=e.tabIndex,v=e.ContainerProps,y=void 0===v?{}:v,x=e.MenuProps,j=l(e,n),S=G.useIsTouchDevice(),C=y.ref,k=l(y,r),L=b.useRef(null);b.useImperativeHandle(t,(function(){return L.current}));var I=b.useRef(null);b.useImperativeHandle(C,(function(){return I.current}));var M,E=b.useRef(null),O=s(b.useState(!1),2),P=O[0],R=O[1],T=function(t){P!==t&&(e.disabled?R(!1):R(t))},B=function(){var e,t,n=null!==(e=null===(t=I.current)||void 0===t?void 0:t.ownerDocument.activeElement)&&void 0!==e?e:null;if(null==E.current)return!1;var r,o=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=d(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}(E.current.children);try{for(o.s();!(r=o.n()).done;){if(r.value===n)return!0}}catch(i){o.e(i)}finally{o.f()}return!1},W=P&&o;return e.disabled||(M=void 0!==m?m:-1),w.jsxs(F,p(p({},k),{},{ref:I,onFocus:function(e){S||(e.target===I.current&&T(!0),k.onFocus&&k.onFocus(e))},onClick:function(e){T(!P),k.onClick&&k.onClick(e)},tabIndex:M,onMouseEnter:function(e){S||(T(!0),k.onMouseEnter&&k.onMouseEnter(e))},onMouseLeave:function(e){T(!1),k.onMouseLeave&&k.onMouseLeave(e)},onKeyDown:function(e){var t;if("Escape"!==e.key){B()&&e.stopPropagation();var n,r=null===(t=I.current)||void 0===t?void 0:t.ownerDocument.activeElement;if("ArrowLeft"===e.key&&B())null===(n=I.current)||void 0===n||n.focus();if("ArrowRight"===e.key&&e.target===I.current&&e.target===r){var o,i=null===(o=E.current)||void 0===o?void 0:o.children[0];null==i||i.focus()}}},children:[w.jsx(bt,{MenuItemProps:j,className:g,ref:L,LeftIcon:f,RightIcon:u,label:i,renderLabel:a}),w.jsx(D,p(p({style:{pointerEvents:"none"},anchorEl:L.current,anchorOrigin:{horizontal:_("right","left"),vertical:"top"},transformOrigin:{horizontal:_("left","right"),vertical:"top"},open:W,autoFocus:!1,disableAutoFocus:!0,disableEnforceFocus:!0,onClose:function(){T(!1)}},x),{},{children:w.jsx(F,{ref:E,style:{pointerEvents:"auto"},children:h})}))]}))}));xt.displayName="NestedMenuItem";var wt=["remove_from_library"],jt=f("a",(function(e){var t,n,r=e.manga,o=e.handleSelection,i=e.selectedMangas,a=e.onClose,c=e.setHideMenu,l=B().t,d=s(b.useState(!1),2),f=d[0],h=d[1],p=!!r,g=null!=i?i:[],m=q(p,ne),v=H(p),y=V(p),x=!!r&&r.downloadCount===r.chapters.totalCount,j=!(null==r||!r.downloadCount),S=!(null==r||!r.unreadCount),C=!!r&&r.unreadCount!==r.chapters.totalCount,k=W({mangaId:null==r?void 0:r.id,mangaIds:i?z.getIds(g):void 0,onClose:function(){return a(!0)},addToLibrary:!1}),L=k.openCategorySelect,I=k.CategorySelectComponent,M=function(e,t){z.performAction(e,r?[r.id]:z.getIds(t),{wasManuallyMarkedAsRead:!0}).catch(re()),a(!wt.includes(e))},E=b.useMemo((function(){return{downloadableMangas:[].concat(u(z.getNotDownloaded(g)),u(z.getPartiallyDownloaded(g))),downloadedMangas:[].concat(u(z.getPartiallyDownloaded(g)),u(z.getFullyDownloaded(g))),unreadMangas:[].concat(u(z.getUnread(g)),u(z.getPartiallyRead(g))),readMangas:[].concat(u(z.getPartiallyRead(g)),u(z.getFullyRead(g)))}}),[g]),O=E.downloadableMangas,P=E.downloadedMangas,R=E.unreadMangas,T=E.readMangas;return w.jsxs(w.Fragment,{children:[!!o&&p&&w.jsx(U,{onClick:function(){null==o||o(r.id,!0),a(!0)},Icon:Y,title:l("chapter.action.label.select")}),v(!x)&&w.jsx(xt,{disabled:y(!O.length),LeftIcon:K,label:m("download",O.length),parentMenuOpen:!0,children:w.jsx(Ke,{mangaIds:p?[r.id]:z.getIds(g),closeMenu:function(){return a(!0)}})}),v(j)&&w.jsx(U,{Icon:X,disabled:y(!P.length),onClick:function(){return M("delete",P)},title:m("delete",P.length)}),v(S)&&w.jsx(U,{Icon:J,disabled:y(!R.length),onClick:function(){return M("mark_as_read",R)},title:m("mark_as_read",R.length)}),v(C)&&w.jsx(U,{Icon:Q,disabled:y(!T.length),onClick:function(){return M("mark_as_unread",T)},title:m("mark_as_unread",T.length)}),p&&w.jsx($,{to:"".concat(Z.migrate.childRoutes.search.path(null!==(t=null==r?void 0:r.sourceId)&&void 0!==t?t:-1,null!==(n=null==r?void 0:r.id)&&void 0!==n?n:-1),"?query=").concat(null==r?void 0:r.title),state:{mangaTitle:null==r?void 0:r.title},style:{textDecoration:"none",color:"inherit"},children:w.jsx(U,{Icon:Ve,title:m("migrate",g.length)})}),p&&w.jsx(U,{onClick:function(){h(!0),c(!0)},Icon:Qe,title:m("track",g.length)}),w.jsx(U,{onClick:function(){L(!0),c(!0)},Icon:Xe,title:m("change_categories",g.length)}),w.jsx(U,{onClick:function(){return M("remove_from_library",g)},Icon:ee,title:m("remove_from_library",g.length)}),I,f&&w.jsx(te,{open:!0,maxWidth:"md",fullWidth:!0,scroll:"paper",onClose:function(){h(!1),a(!0)},children:w.jsx(Je,{manga:r})})]})})),St=function(e){var t=e.mangaIdToMigrateTo,n=e.onClose,r=B().t,o=oe(),i=ie().mangaId,l=Number(i),u=ae().settings,d=u.migrateChapters,f=u.migrateCategories,h=u.migrateTracking,p=u.deleteChapters,g=s(b.useState(!1),2),m=g[0],v=g[1],y=de(re()),x=function(){var e,n=(e=a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=l){e.next=2;break}throw new Error('MigrateDialog::migrate: unexpected mangaId "'.concat(l,'"'));case 2:return ge(r("migrate.label.info"),"info"),v(!0),e.prev=4,e.next=7,z.migrate(l,t,{mode:n,migrateChapters:d,migrateCategories:f,migrateTracking:h,deleteChapters:p});case 7:o(Z.manga.path(t),{replace:!0}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),v(!1);case 13:case"end":return e.stop()}}),e,null,[[4,10]])})),function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){c(i,r,o,a,l,"next",e)}function l(e){c(i,r,o,a,l,"throw",e)}a(void 0)}))});return function(e){return n.apply(this,arguments)}}();return w.jsxs(te,{open:!0,fullWidth:!0,onClose:n,children:[w.jsx(ce,{children:r("migrate.dialog.title")}),w.jsx(le,{dividers:!0,children:w.jsxs(ue,{children:[w.jsx(se,{disabled:m,label:r("chapter.title_one"),checked:d,onChange:function(e,t){return y("migrateChapters",t)}}),w.jsx(se,{disabled:m,label:r("category.title.category_one"),checked:f,onChange:function(e,t){return y("migrateCategories",t)}}),w.jsx(se,{disabled:m,label:r("tracking.title"),checked:h,onChange:function(e,t){return y("migrateTracking",t)}}),w.jsx(se,{disabled:m,label:r("migrate.dialog.label.delete_downloaded"),checked:p,onChange:function(e,t){return y("deleteChapters",t)}})]})}),w.jsx(fe,{children:w.jsxs(he,{direction:"row",sx:{justifyContent:"space-between",width:"100%"},children:[w.jsx(pe,{disabled:m,component:$,to:Z.manga.path(t),children:r("migrate.dialog.action.button.show_entry")}),w.jsxs(he,{direction:"row",children:[w.jsx(pe,{disabled:m,onClick:n,children:r("global.button.cancel")}),w.jsx(pe,{disabled:m,onClick:function(){return x("copy")},children:r("global.button.copy")}),w.jsx(pe,{disabled:m,onClick:function(){return x("migrate")},children:r("global.button.migrate")})]})]})})]})},Ct=b.forwardRef((function(e,t){var n=e.id,r=e.selected,o=e.handleSelection,i=e.asCheckbox,a=void 0!==i&&i,c=e.popupState,l=B().t,u=b.useMemo((function(){return me(c)}),[c]),s=function(e){e.stopPropagation(),e.preventDefault()};return o?null!==r?a?w.jsx(ve,{title:l(r?"global.button.deselect":"global.button.select"),children:w.jsx(ye,p(p({},be.preventRippleProp()),{},{checked:r,onChange:function(e,t){s(e),null==o||o(n,t)}}))}):null:a?w.jsx(ve,{title:l("global.button.options"),children:w.jsx(xe,p(p({ref:t},be.preventRippleProp(u,{onClick:s})),{},{"aria-label":"more",children:w.jsx(we,{})}))}):w.jsx(ve,{title:l("global.button.options"),children:w.jsx(pe,p(p({ref:t},be.preventRippleProp(u,{onClick:s})),{},{className:"manga-option-button",size:"small",variant:"contained",sx:{minWidth:"unset",paddingX:"0",paddingY:"2.5px",visibility:c.isOpen?"visible":"hidden",pointerEvents:"none","@media not (pointer: fine)":{display:"none"}},children:w.jsx(we,{})}))}):null})),kt=M("div")({position:"absolute",bottom:0,width:"100%",height:"30%",background:"linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)"}),Lt=M("div")({position:"absolute",bottom:0,width:"100%",height:"20%",background:"linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)"}),It=b.memo((function(e){var t=e.manga,n=e.longPressBind,r=e.popupState,o=e.handleClick,i=e.mangaLinkTo,a=e.selected,c=e.inLibraryIndicator,l=e.isInLibrary,u=e.gridLayout,s=e.handleSelection,d=e.continueReadingButton,f=e.mangaBadges,h=e.mode,g=b.useRef(null),m=t.id,v=t.title;return w.jsx(je,p(p({component:$},n((function(){return r.open(g.current)}))),{},{onClick:o,to:i,state:{mangaTitle:v},sx:{textDecoration:"none",touchCallout:"none"},children:w.jsxs(F,{sx:{display:"flex",flexDirection:"column",m:.25,outline:a?"4px solid":void 0,borderRadius:a?"1px":void 0,outlineColor:function(e){return e.palette.primary.main},backgroundColor:function(e){return a?e.palette.primary.main:void 0},"@media (hover: hover) and (pointer: fine)":{"&:hover .manga-option-button":{visibility:"visible",pointerEvents:"all"},"&:hover .source-manga-library-state-button":{display:"inline-flex"},"&:hover .source-manga-library-state-indicator":{display:"source"===h?"none":"flex"}}},children:[w.jsx(Se,{sx:{aspectRatio:Ce,display:"flex"},children:w.jsxs(ke,{sx:{position:"relative",height:"100%"},children:[w.jsx(Le,{alt:v,src:z.getThumbnailUrl(t),imgStyle:c&&l?{height:"100%",width:"100%",objectFit:"cover",filter:"brightness(0.4)"}:{height:"100%",width:"100%",objectFit:"cover"},spinnerStyle:{display:"grid",placeItems:"center"}}),w.jsxs(he,{direction:"row",sx:{alignItems:"start",justifyContent:"space-between",position:"absolute",top:function(e){return e.spacing(1)},left:function(e){return e.spacing(1)},right:function(e){return e.spacing(1)}},children:[f,w.jsx(Ct,{ref:g,popupState:r,id:m,selected:a,handleSelection:s})]}),w.jsxs(w.Fragment,{children:[u!==Ie.Comfortable&&w.jsxs(w.Fragment,{children:[w.jsx(kt,{}),w.jsx(Lt,{})]}),w.jsxs(he,{direction:"row",sx:{justifyContent:u!==Ie.Comfortable?"space-between":"end",alignItems:"end",position:"absolute",bottom:0,width:"100%",p:1,gap:1},children:[u!==Ie.Comfortable&&w.jsx(ve,{title:v,placement:"top",children:w.jsx(Me,{component:"h3",sx:{color:"white",textShadow:"0px 0px 3px #000000"},children:v})}),d]})]})]})}),u===Ie.Comfortable&&w.jsx(he,{sx:{pb:1},children:w.jsx(ve,{title:v,placement:"top",children:w.jsx(Me,{component:"h3",sx:{color:function(e){return a?e.palette.primary.contrastText:"text.primary"},height:"3rem",pt:.5},children:v})})})]})}))})),Mt=b.memo((function(e){var t=e.manga,n=e.longPressBind,r=e.popupState,o=e.handleClick,i=e.mangaLinkTo,a=e.selected,c=e.inLibraryIndicator,l=e.isInLibrary,u=e.handleSelection,s=e.continueReadingButton,d=e.mangaBadges,f=e.mode,h=b.useRef(null),g=t.id,m=t.title;return w.jsx(Se,{children:w.jsx(ke,p(p({component:$,to:i,state:{mangaTitle:m},onClick:o},n((function(){return r.open(h.current)}))),{},{sx:{touchCallout:"none","@media (hover: hover) and (pointer: fine)":{"&:hover .manga-option-button":{visibility:"visible",pointerEvents:"all"},"&:hover .source-manga-library-state-button":{display:"inline-flex"},"&:hover .source-manga-library-state-indicator":{display:"source"===f?"none":"inline-flex"}}},children:w.jsxs(Ee,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:1.5,position:"relative"},children:[w.jsx($e,{variant:"rounded",sx:{width:56,height:56,flex:"0 0 auto",marginRight:1},children:w.jsx(Le,{spinnerStyle:{small:!0},imgStyle:{objectFit:"cover",width:"100%",height:"100%",imageRendering:"pixelated",filter:c&&l?"brightness(0.4)":void 0},alt:t.title,src:z.getThumbnailUrl(t)})}),w.jsx(F,{sx:{display:"flex",flexDirection:"row",flexGrow:1,width:"min-content"},children:w.jsx(ve,{title:m,placement:"top",children:w.jsx(Me,{variant:"h6",component:"h3",children:m})})}),w.jsxs(he,{direction:"row",sx:{alignItems:"center",gap:.5},children:[d,s,w.jsx(Ct,{ref:h,popupState:r,id:g,selected:a,handleSelection:u,asCheckbox:!0})]})]})}))})})),Et=function(e){var t=e.showContinueReadingButton,n=e.chapter,r=e.mangaLinkTo,o=B().t;if(!t||!n)return null;var i=1===n.sourceOrder;return w.jsx(ve,{title:o(i?"global.button.start":"global.button.resume"),children:w.jsx(pe,p(p({},be.preventRippleProp()),{},{variant:"contained",size:"small",sx:{minWidth:"unset",py:.5,px:.75},component:$,to:"".concat(r,"/chapter/").concat(n.sourceOrder),state:Oe.getReaderOpenChapterLocationState(n),onClick:function(e){return e.stopPropagation()},children:w.jsx(Ze,{})}))})},Ot=M("div")((function(e){return{display:"flex",height:"fit-content",borderRadius:e.theme.shape.borderRadius,overflow:"hidden"}})),Pt=M(Pe)((function(e){var t=e.theme;return{color:t.palette.primary.contrastText,paddingInline:t.spacing(.3)}})),Rt=function(e){var t=e.inLibraryIndicator,n=e.updateLibraryState,r=e.isInLibrary,o=e.unread,i=e.downloadCount,a=e.mode,c=B().t,l=G.useIsTouchDevice(),u=ae().settings,s=u.showUnreadBadge,d=u.showDownloadBadge;return w.jsxs(Ot,{children:[!l&&t&&"source"===a&&w.jsx(pe,p(p({className:"source-manga-library-state-button",component:"div",variant:"contained",size:"small"},be.preventRippleProp()),{},{onClick:function(e){e.preventDefault(),e.stopPropagation(),n()},sx:{display:"none"},color:r?"error":"primary",children:c(r?"manga.action.library.remove.label.action":"manga.button.add_to_library")})),t&&r&&w.jsx(Pe,{className:"source-manga-library-state-indicator",sx:{backgroundColor:"primary.dark",color:"primary.contrastText",p:.3},children:c("manga.button.in_library")}),(s&&"default"===a||"duplicate"===a)&&(null!=o?o:0)>0&&w.jsx(Pt,{sx:{backgroundColor:"primary.main",color:"primary.contrastText"},children:o}),(d&&"default"===a||"duplicate"===a)&&(null!=i?i:0)>0&&w.jsx(Pt,{sx:{backgroundColor:"secondary.main",color:"secondary.contrastText"},children:i})]})},Tt=f("b",b.memo((function(e){var t=e.manga,n=e.gridLayout,r=e.inLibraryIndicator,o=e.selected,i=e.handleSelection,a=e.mode,c=void 0===a?"default":a,l=t.id,u=t.firstUnreadChapter,d=t.downloadCount,f=t.unreadCount,h=ae().settings.showContinueReadingButton,g=Re(t,"source"===c),m=g.CategorySelectComponent,v=g.updateLibraryState,y=g.isInLibrary,x=function(e,t,n,r){switch(e){case"default":case"source":case"duplicate":return Z.manga.path(t);case"migrate.search":return"".concat(Z.migrate.childRoutes.search.path(null!=n?n:"-1",t),"?query=").concat(r);case"migrate.select":return"";default:throw new Error('getMangaLinkTo: unexpected MangaCardMode "'.concat(e,'"'))}}(c,t.id,t.sourceId,t.title),j=s(b.useState(!1),2),S=j[0],C=j[1],k=b.useCallback((function(e,t){var n="default"===c,r="source"===c,a="migrate.select"===c,u=null!==o;(a||u||(n||r)&&!!t)&&(e.preventDefault(),r?v():u?null==i||i(l,!o,{selectRange:e.shiftKey}):n?null==t||t():a&&C(!0))}),[c,o,v,i]),L=Te(b.useCallback((function(e,t){var n=t.context;e.shiftKey=!0,k(e,n)}),[k])),I=b.useMemo((function(){return n===Ie.List?Mt:It}),[n]);return w.jsxs(w.Fragment,{children:[S&&w.jsx(St,{mangaIdToMigrateTo:t.id,onClose:function(){return C(!1)}}),w.jsx(_e,{variant:"popover",popupId:"manga-card-action-menu",children:function(n){return w.jsxs(w.Fragment,{children:[w.jsx(I,p(p({},e),{},{longPressBind:L,popupState:n,handleClick:k,mangaLinkTo:x,isInLibrary:y,inLibraryIndicator:r,continueReadingButton:w.jsx(Et,{showContinueReadingButton:h&&"default"===c,chapter:u,mangaLinkTo:x}),mangaBadges:w.jsx(Rt,{inLibraryIndicator:r,isInLibrary:y,unread:f,downloadCount:d,updateLibraryState:v,mode:c})})),!!i&&n.isOpen&&w.jsx(Ne,p(p({},Ae(n)),{},{children:function(e,n){return w.jsx(jt,{manga:t,handleSelection:i,onClose:e,setHideMenu:n})}})),m]})}})]})}))),_t=Ye.forwardRef((function(e,t){var n=e.children,r=l(e,o);return w.jsx(yt,p(p({},r),{},{ref:t,container:!0,spacing:1,children:n}))})),Nt=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,a=arguments.length>6?arguments[6]:void 0;return w.jsx(Tt,{manga:e,gridLayout:t,inLibraryIndicator:n,selected:r?null==o?void 0:o.includes(e.id):null,handleSelection:i,mode:a})},At=b.forwardRef((function(e,t){var n=e.isLoading,r=e.mangas,o=e.inLibraryIndicator,i=e.GridItemContainer,a=e.gridLayout,c=e.isSelectModeActive,l=e.selectedMangaIds,u=e.handleSelection,s=e.mode;return w.jsx(yt,{ref:t,container:!0,spacing:1,sx:{width:"100%",overflowX:"auto",display:"-webkit-inline-box",flexWrap:"nowrap"},children:n?w.jsx(We,{}):r.map((function(e){return w.jsx(i,{children:Nt(e,a,o,c,l,u,s)},e.id)}))})})),Gt=f("g",(function(e){return"MangaGrid-snapshot-location-".concat(e.key)})),Ft=b.forwardRef((function(e,t){var n=e.isLoading,r=e.mangas,o=e.inLibraryIndicator,i=e.GridItemContainer,a=e.gridLayout,c=e.hasNextPage,l=e.loadMore,u=e.isSelectModeActive,d=e.selectedMangaIds,f=e.handleSelection,h=e.mode,p=ze(),g=Gt(p),m=s(He(g,void 0),1)[0],v=b.useRef();return b.useEffect((function(){return clearTimeout(v.current)}),[p.key,v.current]),w.jsxs(w.Fragment,{children:[w.jsx(F,{ref:t,children:w.jsx(Ue,{useWindowScroll:!0,increaseViewportBy:.5*window.innerHeight,totalCount:r.length,components:{List:_t,Item:i},restoreStateFrom:m,stateChanged:function(e){var t=window.location.href;clearTimeout(v.current),v.current=setTimeout((function(){t!==window.location.href||qe.session.setItem(g,e,!1)}),250)},endReached:function(){return l()},computeItemKey:function(e){return r[e].id},itemContent:function(e){return Nt(r[e],a,o,u,d,f,h)}})}),u&&a===Ie.List?w.jsx(F,{sx:{paddingBottom:et}}):n?w.jsx(We,{}):c?w.jsx("div",{style:{height:"75px"}}):null]})}));f("M",(function(e){var t,n,r=e.mangas,o=e.isLoading,a=e.message,c=e.messageExtra,u=e.hasNextPage,d=e.loadMore,f=e.gridLayout,h=e.horizontal,g=e.noFaces,m=e.inLibraryIndicator,v=e.isSelectModeActive,y=e.selectedMangaIds,x=e.handleSelection,j=e.mode,S=e.retry,C=e.gridWrapperProps,k=B().t,L=Ge().navBarWidth,I=b.useRef(null),M=b.useRef(null),E=s(b.useState(null!==(t=null===(n=M.current)||void 0===n?void 0:n.offsetWidth)&&void 0!==t?t:Math.max(0,document.documentElement.offsetWidth-L)),2),O=E[0],P=E[1],R=s(Fe("ItemWidth",300),1)[0],T=b.useMemo((function(){return function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:12,o=Math.ceil(e/t),a=n===Ie.List?r:r/o;return function(e){var t=e.children,n=l(e,i);return w.jsx(yt,p(p({},n),{},{size:a,children:t}))}}(O,R,f)}),[O,R,f]);return b.useLayoutEffect((function(){if(h)return function(){};var e,t=function(n){e=setTimeout((function(){document.body.style.overflow.includes("hidden")?t(250):document.body.style.overflowY=f===Ie.List?"auto":"scroll"}),n)};return t(0),function(){clearTimeout(e)}}),[f]),b.useLayoutEffect((function(){return function(){h||(document.body.style.overflowY="auto")}}),[]),De(M,b.useCallback((function(){var e;P((null===(e=M.current)||void 0===e?void 0:e.offsetWidth)||document.documentElement.offsetWidth-L)}),[L])),De(I,b.useCallback((function(e,t){var n=e[0].target.clientHeight,r=n>document.documentElement.clientHeight;o||n&&(r||d(),t.disconnect())}),[I,d,o])),!o&&0===r.length?w.jsx(Be,{noFaces:g,message:null!=a?a:k("manga.error.label.no_mangas_found"),messageExtra:c,retry:S}):w.jsx(F,p(p({},C),{},{ref:M,sx:p(p({},null==C?void 0:C.sx),{},{overflow:"hidden"}),children:h?w.jsx(At,{ref:I,isLoading:o,mangas:r,inLibraryIndicator:m,GridItemContainer:T,gridLayout:f,isSelectModeActive:v,selectedMangaIds:y,handleSelection:x,mode:j}):w.jsx(Ft,{ref:I,isLoading:o,mangas:r,inLibraryIndicator:m,GridItemContainer:T,hasNextPage:u,loadMore:d,gridLayout:f,isSelectModeActive:v,selectedMangaIds:y,handleSelection:x,mode:j})}))}))}}}))}();
