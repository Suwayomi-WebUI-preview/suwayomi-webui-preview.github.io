!function(){var e=["className","children","columns","container","component","direction","wrap","size","offset","spacing","rowSpacing","columnSpacing","unstable_level"],n=["MenuItemProps","className","label","LeftIcon","renderLabel","RightIcon"],t=["parentMenuOpen","label","renderLabel","RightIcon","LeftIcon","children","className","tabIndex","ContainerProps","MenuProps"],r=["ref"],o=["children"],i=["children"];function a(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */a=function(){return n};var e,n={},t=Object.prototype,r=t.hasOwnProperty,o=Object.defineProperty||function(e,n,t){e[n]=t.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(e,n,t){return Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}),e[n]}try{s({},"")}catch(e){s=function(e,n,t){return e[n]=t}}function d(e,n,t,r){var i=n&&n.prototype instanceof b?n:b,a=Object.create(i.prototype),c=new P(r||[]);return o(a,"_invoke",{value:M(e,t,c)}),a}function f(e,n,t){try{return{type:"normal",arg:e.call(n,t)}}catch(e){return{type:"throw",arg:e}}}n.wrap=d;var h="suspendedStart",g="suspendedYield",p="executing",v="completed",y={};function b(){}function x(){}function w(){}var j={};s(j,c,(function(){return this}));var S=Object.getPrototypeOf,C=S&&S(S(T([])));C&&C!==t&&r.call(C,c)&&(j=C);var L=w.prototype=b.prototype=Object.create(j);function k(e){["next","throw","return"].forEach((function(n){s(e,n,(function(e){return this._invoke(n,e)}))}))}function I(e,n){function t(o,i,a,c){var l=f(e[o],e,i);if("throw"!==l.type){var u=l.arg,s=u.value;return s&&"object"==m(s)&&r.call(s,"__await")?n.resolve(s.__await).then((function(e){t("next",e,a,c)}),(function(e){t("throw",e,a,c)})):n.resolve(s).then((function(e){u.value=e,a(u)}),(function(e){return t("throw",e,a,c)}))}c(l.arg)}var i;o(this,"_invoke",{value:function(e,r){function o(){return new n((function(n,o){t(e,r,n,o)}))}return i=i?i.then(o,o):o()}})}function M(n,t,r){var o=h;return function(i,a){if(o===p)throw Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:e,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var l=E(c,r);if(l){if(l===y)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===h)throw o=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=p;var u=f(n,t,r);if("normal"===u.type){if(o=r.done?v:g,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(o=v,r.method="throw",r.arg=u.arg)}}}function E(n,t){var r=t.method,o=n.iterator[r];if(o===e)return t.delegate=null,"throw"===r&&n.iterator.return&&(t.method="return",t.arg=e,E(n,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var i=f(o,n.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,y;var a=i.arg;return a?a.done?(t[n.resultName]=a.value,t.next=n.nextLoc,"return"!==t.method&&(t.method="next",t.arg=e),t.delegate=null,y):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,y)}function O(e){var n={tryLoc:e[0]};1 in e&&(n.catchLoc=e[1]),2 in e&&(n.finallyLoc=e[2],n.afterLoc=e[3]),this.tryEntries.push(n)}function _(e){var n=e.completion||{};n.type="normal",delete n.arg,e.completion=n}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function T(n){if(n||""===n){var t=n[c];if(t)return t.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var o=-1,i=function t(){for(;++o<n.length;)if(r.call(n,o))return t.value=n[o],t.done=!1,t;return t.value=e,t.done=!0,t};return i.next=i}}throw new TypeError(m(n)+" is not iterable")}return x.prototype=w,o(L,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:x,configurable:!0}),x.displayName=s(w,u,"GeneratorFunction"),n.isGeneratorFunction=function(e){var n="function"==typeof e&&e.constructor;return!!n&&(n===x||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,s(e,u,"GeneratorFunction")),e.prototype=Object.create(L),e},n.awrap=function(e){return{__await:e}},k(I.prototype),s(I.prototype,l,(function(){return this})),n.AsyncIterator=I,n.async=function(e,t,r,o,i){void 0===i&&(i=Promise);var a=new I(d(e,t,r,o),i);return n.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},k(L),s(L,u,"Generator"),s(L,c,(function(){return this})),s(L,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var n=Object(e),t=[];for(var r in n)t.push(r);return t.reverse(),function e(){for(;t.length;){var r=t.pop();if(r in n)return e.value=r,e.done=!1,e}return e.done=!0,e}},n.values=T,P.prototype={constructor:P,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(_),!n)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var t=this;function o(r,o){return c.type="throw",c.arg=n,t.next=r,o&&(t.method="next",t.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(l&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,n){for(var t=this.tryEntries.length-1;t>=0;--t){var o=this.tryEntries[t];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(e,n){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&n&&(this.next=n),y},finish:function(e){for(var n=this.tryEntries.length-1;n>=0;--n){var t=this.tryEntries[n];if(t.finallyLoc===e)return this.complete(t.completion,t.afterLoc),_(t),y}},catch:function(e){for(var n=this.tryEntries.length-1;n>=0;--n){var t=this.tryEntries[n];if(t.tryLoc===e){var r=t.completion;if("throw"===r.type){var o=r.arg;_(t)}return o}}throw Error("illegal catch attempt")},delegateYield:function(n,t,r){return this.delegate={iterator:T(n),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=e),y}},n}function c(e,n,t,r,o,i,a){try{var c=e[i](a),l=c.value}catch(e){return void t(e)}c.done?n(l):Promise.resolve(l).then(r,o)}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.includes(r))continue;t[r]=e[r]}return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.includes(t)||{}.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function u(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||d(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i,a,c=[],l=!0,u=!1;try{if(i=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;l=!1}else for(;!(l=(r=i.call(t)).done)&&(c.push(r.value),c.length!==n);l=!0);}catch(e){u=!0,o=e}finally{try{if(!l&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(u)throw o}}return c}}(e,n)||d(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,n){if(e){if("string"==typeof e)return f(e,n);var t={}.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?f(e,n):void 0}}function f(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n,t){return(n=function(e){var n=function(e,n){if("object"!=m(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n||"default");if("object"!=m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"==m(n)?n:n+""}(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}System.register(["./index-legacy-B96ufFR1.js","./index-legacy-Db-MzocO.js","./useManageMangaLibraryState-legacy-BGovgqMe.js","./Delete-legacy-CQvluzRA.js","./Sync-legacy-Yb8ZS_Rr.js","./Mangas-legacy-DrGZoJgY.js","./CheckboxInput-legacy-D6uv-bqf.js","./ListPreference-legacy-CFvGUphk.js","./SpinnerImage-legacy-Bf1Fuz9z.js","./Checkbox-legacy-DvQKF4ZI.js","./TypographyMaxLines-legacy-DKjS4MLo.js","./Link-legacy-NUg4qyHI.js","./Card-legacy-CbNxRrVl.js","./CardActionArea-legacy-CfkaLbvA.js","./CardContent-legacy-Czgx0Ghg.js","./Avatar-legacy-Dp7RNyBb.js","./PlayArrow-legacy-BuFWyARI.js","./StyledFab-legacy-BPUY6ehm.js"],(function(f,h){"use strict";var v,y,b,x,w,j,S,C,L,k,I,M,E,O,_,P,T,R,G,A,N,D,F,B,W,z,H,U,K,Y,q,$,J,X,V,Z,Q,ee,ne,te,re,oe,ie,ae,ce,le,ue,se,de,fe,he,ge,pe,me,ve,ye,be,xe,we,je,Se,Ce,Le,ke,Ie,Me,Ee,Oe,_e,Pe,Te,Re,Ge,Ae,Ne,De,Fe,Be,We,ze,He,Ue,Ke,Ye,qe,$e,Je,Xe;return{setters:[function(e){v=e.by,y=e.bz,b=e.c,x=e.bA,w=e.bB,j=e.j,S=e.ab,C=e.bC,L=e.bD,k=e.ac,I=e.a6,M=e.t,E=e.aK,O=e._,_=e.$,P=e.a0,T=e.M,R=e.B,G=e.O,A=e.al,N=e.bE,D=e.bF,F=e.u,B=e.y,W=e.L,z=e.R,H=e.h,U=e.e,K=e.a1,Y=e.s,q=e.aC,$=e.aD,J=e.aE,X=e.S,V=e.b,Z=e.bl,Q=e.m,ee=e.C,ne=e.f,te=e.I,re=e.q,oe=e.T,ie=e.o,ae=e.P,ce=e.F,le=e.Z,ue=e.g,se=e.ar,de=e.b9,fe=e.ba,he=e.x,ge=e.d,pe=e.l,me=e.E},function(e){ve=e.a},function(e){ye=e.l,be=e.M,xe=e.d,we=e.C,je=e.a,Se=e.b,Ce=e.m,Le=e.n,ke=e.j,Ie=e.T,Me=e.c,Ee=e.e,Oe=e.f,_e=e.g,Pe=e.i,Te=e.J,Re=e.h},function(e){Ge=e.d},function(e){Ae=e.d},function(e){Ne=e.M,De=e.a},function(e){Fe=e.C},function(e){Be=e.F},function(e){We=e.S},function(e){ze=e.C},function(e){He=e.T},function(e){Ue=e.L},function(e){Ke=e.C},function(e){Ye=e.C},function(e){qe=e.C},function(e){$e=e.A},function(e){Je=e.d},function(e){Xe=e.D}],execute:function(){var h=function(e,n,t){var r,o,i=e.keys[0];if(Array.isArray(n))n.forEach((function(n,r){t((function(n,t){r<=e.keys.length-1&&(0===r?Object.assign(n,t):n[e.up(e.keys[r])]=t)}),n)}));else if(n&&"object"===m(n)){(Object.keys(n).length>e.keys.length?e.keys:(r=e.keys,o=Object.keys(n),r.filter((function(e){return o.includes(e)})))).forEach((function(r){if(e.keys.includes(r)){var o=n[r];void 0!==o&&t((function(n,t){i===r?Object.assign(n,t):n[e.up(r)]=t}),o)}}))}else"number"!=typeof n&&"string"!=typeof n||t((function(e,n){Object.assign(e,n)}),n)};function Ve(e){return e?"Level".concat(e):""}function Ze(e){return e.unstable_level>0&&e.container}function Qe(e){return function(n){return 0===e.unstable_level?"var(--Grid-".concat(n,"Spacing)"):"var(--Grid-".concat(n,"Spacing").concat(Ve(e.unstable_level-1),")")}}function en(e){return 0===e.unstable_level?"var(--Grid-columns)":"var(--Grid-columns".concat(Ve(e.unstable_level-1),")")}var nn=function(e){var n=e.theme,t=e.ownerState,r=Qe(t),o={};return h(n.breakpoints,t.size,(function(e,n){var i={};"grow"===n&&(i={flexBasis:0,flexGrow:1,maxWidth:"100%"}),"auto"===n&&(i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),"number"==typeof n&&(i={flexGrow:0,flexBasis:"auto",width:"calc(100% * ".concat(n," / ").concat(en(t)," - (").concat(en(t)," - ").concat(n,") * (").concat(r("column")," / ").concat(en(t),"))")}),e(o,i)})),o},tn=function(e){var n=e.theme,t=e.ownerState,r=Qe(t),o={};return h(n.breakpoints,t.offset,(function(e,n){var i={};"auto"===n&&(i={marginLeft:"auto"}),"number"==typeof n&&(i={marginLeft:0===n?"0px":"calc(100% * ".concat(n," / ").concat(en(t)," + ").concat(r("column")," * ").concat(n," / ").concat(en(t),")")}),e(o,i)})),o},rn=function(e){var n=e.theme,t=e.ownerState;if(!t.container)return{};var r=Ze(t)?p({},"--Grid-columns".concat(Ve(t.unstable_level)),en(t)):{"--Grid-columns":12};return h(n.breakpoints,t.columns,(function(e,n){e(r,p({},"--Grid-columns".concat(Ve(t.unstable_level)),n))})),r},on=function(e){var n=e.theme,t=e.ownerState;if(!t.container)return{};var r=Qe(t),o=Ze(t)?p({},"--Grid-rowSpacing".concat(Ve(t.unstable_level)),r("row")):{};return h(n.breakpoints,t.rowSpacing,(function(e,r){var i;e(o,p({},"--Grid-rowSpacing".concat(Ve(t.unstable_level)),"string"==typeof r?r:null===(i=n.spacing)||void 0===i?void 0:i.call(n,r)))})),o},an=function(e){var n=e.theme,t=e.ownerState;if(!t.container)return{};var r=Qe(t),o=Ze(t)?p({},"--Grid-columnSpacing".concat(Ve(t.unstable_level)),r("column")):{};return h(n.breakpoints,t.columnSpacing,(function(e,r){var i;e(o,p({},"--Grid-columnSpacing".concat(Ve(t.unstable_level)),"string"==typeof r?r:null===(i=n.spacing)||void 0===i?void 0:i.call(n,r)))})),o},cn=function(e){var n=e.theme,t=e.ownerState;if(!t.container)return{};var r={};return h(n.breakpoints,t.direction,(function(e,n){e(r,{flexDirection:n})})),r},ln=function(e){var n=e.ownerState,t=function(e){return function(n){return"var(--Grid-".concat(n,"Spacing").concat(Ve(e.unstable_level),")")}}(n);return g({minWidth:0,boxSizing:"border-box"},n.container&&g(g({display:"flex",flexWrap:"wrap"},n.wrap&&"wrap"!==n.wrap&&{flexWrap:n.wrap}),{},{gap:"".concat(t("row")," ").concat(t("column"))}))},un=function(e){var n=[];return Object.entries(e).forEach((function(e){var t=s(e,2),r=t[0],o=t[1];!1!==o&&void 0!==o&&n.push("grid-".concat(r,"-").concat(String(o)))})),n},sn=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"xs";function t(e){return void 0!==e&&("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e&&e>0)}if(t(e))return["spacing-".concat(n,"-").concat(String(e))];if("object"===m(e)&&!Array.isArray(e)){var r=[];return Object.entries(e).forEach((function(e){var n=s(e,2),o=n[0],i=n[1];t(i)&&r.push("spacing-".concat(o,"-").concat(String(i)))})),r}return[]},dn=function(e){return void 0===e?[]:"object"===m(e)?Object.entries(e).map((function(e){var n=s(e,2),t=n[0],r=n[1];return"direction-".concat(t,"-").concat(r)})):["direction-xs-".concat(String(e))]},fn=v(),hn=y("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(e,n){return n.root}});function gn(e){return L({props:e,name:"MuiGrid",defaultTheme:fn})}var pn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.createStyledComponent,r=void 0===t?hn:t,o=n.useThemeProps,i=void 0===o?gn:o,a=n.componentName,c=void 0===a?"MuiGrid":a;function s(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){return!0},r={};return null===e||(Array.isArray(e)?e.forEach((function(e,o){null!==e&&t(e)&&n.keys[o]&&(r[n.keys[o]]=e)})):"object"===m(e)?Object.keys(e).forEach((function(n){var o=e[n];null!=o&&t(o)&&(r[n]=o)})):r[n.keys[0]]=e),r}var d=r(rn,an,on,nn,cn,ln,tn),f=b.forwardRef((function(n,t){var r,o,a,f,h,p,m=x(),v=i(n),y=w(v),L=y.className,M=y.children,E=y.columns,O=void 0===E?12:E,_=y.container,P=void 0!==_&&_,T=y.component,R=void 0===T?"div":T,G=y.direction,A=void 0===G?"row":G,N=y.wrap,D=void 0===N?"wrap":N,F=y.size,B=void 0===F?{}:F,W=y.offset,z=void 0===W?{}:W,H=y.spacing,U=void 0===H?0:H,K=y.rowSpacing,Y=void 0===K?U:K,q=y.columnSpacing,$=void 0===q?U:q,J=y.unstable_level,X=void 0===J?0:J,V=l(y,e),Z=s(B,m.breakpoints,(function(e){return!1!==e})),Q=s(z,m.breakpoints),ee=null!==(r=n.columns)&&void 0!==r?r:X?void 0:O,ne=null!==(o=n.spacing)&&void 0!==o?o:X?void 0:U,te=null!==(a=null!==(f=n.rowSpacing)&&void 0!==f?f:n.spacing)&&void 0!==a?a:X?void 0:Y,re=null!==(h=null!==(p=n.columnSpacing)&&void 0!==p?p:n.spacing)&&void 0!==h?h:X?void 0:$,oe=g(g({},y),{},{level:X,columns:ee,container:P,direction:A,wrap:D,spacing:ne,rowSpacing:te,columnSpacing:re,size:Z,offset:Q}),ie=function(e,n){var t=e.container,r=e.direction,o=e.spacing,i=e.wrap,a=e.size,l={root:["root",t&&"container","wrap"!==i&&"wrap-xs-".concat(String(i))].concat(u(dn(r)),u(un(a)),u(t?sn(o,n.breakpoints.keys[0]):[]))};return k(l,(function(e){return I(c,e)}),{})}(oe,m);return j.jsx(d,g(g({ref:t,as:R,ownerState:oe,className:S(ie.root,L)},V),{},{children:b.Children.map(M,(function(e){var n,t;return b.isValidElement(e)&&C(e,["Grid"])?b.cloneElement(e,{unstable_level:null!==(n=null===(t=e.props)||void 0===t?void 0:t.unstable_level)&&void 0!==n?n:X+1}):e}))}))}));return f.muiName="Grid",f}({createStyledComponent:M("div",{name:"MuiGrid2",slot:"Root",overridesResolver:function(e,n){return n.root}}),componentName:"MuiGrid2",useThemeProps:function(e){return E({props:e,name:"MuiGrid2"})}}),mn=b.forwardRef((function(e,t){var r=e.MenuItemProps,o=e.className,i=e.label,a=e.LeftIcon,c=(e.renderLabel,e.RightIcon),u=l(e,n);return j.jsxs(O,g(g(g({},r),{},{ref:t,className:o},u),{},{children:[a&&j.jsx(_,{children:j.jsx(a,{fontSize:"small"})}),j.jsx(P,{children:i}),c&&j.jsx(_,{style:{minWidth:0},children:j.jsx(c,{fontSize:"small"})})]}))})),vn=b.forwardRef((function(e,n){var o=e.parentMenuOpen,i=e.label,a=e.renderLabel,c=e.RightIcon,u=void 0===c?A(N,D):c,f=e.LeftIcon,h=e.children,p=e.className,m=e.tabIndex,v=e.ContainerProps,y=void 0===v?{}:v,x=e.MenuProps,w=l(e,t),S=T.useIsTouchDevice(),C=y.ref,L=l(y,r),k=b.useRef(null);b.useImperativeHandle(n,(function(){return k.current}));var I=b.useRef(null);b.useImperativeHandle(C,(function(){return I.current}));var M,E=b.useRef(null),O=s(b.useState(!1),2),_=O[0],P=O[1],F=function(n){_!==n&&(e.disabled?P(!1):P(n))},B=function(){var e,n,t=null!==(e=null===(n=I.current)||void 0===n?void 0:n.ownerDocument.activeElement)&&void 0!==e?e:null;if(null==E.current)return!1;var r,o=function(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=d(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==t.return||t.return()}finally{if(c)throw i}}}}(E.current.children);try{for(o.s();!(r=o.n()).done;){if(r.value===t)return!0}}catch(i){o.e(i)}finally{o.f()}return!1},W=_&&o;return e.disabled||(M=void 0!==m?m:-1),j.jsxs(R,g(g({},L),{},{ref:I,onFocus:function(e){S||(e.target===I.current&&F(!0),L.onFocus&&L.onFocus(e))},onClick:function(e){F(!_),L.onClick&&L.onClick(e)},tabIndex:M,onMouseEnter:function(e){S||(F(!0),L.onMouseEnter&&L.onMouseEnter(e))},onMouseLeave:function(e){F(!1),L.onMouseLeave&&L.onMouseLeave(e)},onKeyDown:function(e){var n;if("Escape"!==e.key){B()&&e.stopPropagation();var t,r=null===(n=I.current)||void 0===n?void 0:n.ownerDocument.activeElement;if("ArrowLeft"===e.key&&B())null===(t=I.current)||void 0===t||t.focus();if("ArrowRight"===e.key&&e.target===I.current&&e.target===r){var o,i=null===(o=E.current)||void 0===o?void 0:o.children[0];null==i||i.focus()}}},children:[j.jsx(mn,{MenuItemProps:w,className:p,ref:k,LeftIcon:f,RightIcon:u,label:i,renderLabel:a}),j.jsx(G,g(g({style:{pointerEvents:"none"},anchorEl:k.current,anchorOrigin:{horizontal:A("right","left"),vertical:"top"},transformOrigin:{horizontal:A("left","right"),vertical:"top"},open:W,autoFocus:!1,disableAutoFocus:!0,disableEnforceFocus:!0,onClose:function(){F(!1)}},x),{},{children:j.jsx(R,{ref:E,style:{pointerEvents:"auto"},children:h})}))]}))}));vn.displayName="NestedMenuItem";var yn=["remove_from_library"],bn=f("a",(function(e){var n=e.manga,t=e.handleSelection,r=e.selectedMangas,o=e.onClose,i=e.setHideMenu,a=F().t,c=s(b.useState(!1),2),l=c[0],d=c[1],f=!!n,h=null!=r?r:[],g=Me(f,De),p=Ee(f),m=Oe(f),v=!!n&&n.downloadCount===n.chapters.totalCount,y=!(null==n||!n.downloadCount),x=!(null==n||!n.unreadCount),w=!!n&&n.unreadCount!==n.chapters.totalCount,S=ye({mangaId:null==n?void 0:n.id,mangaIds:r?Ne.getIds(h):void 0,onClose:function(){return o(!0)},addToLibrary:!1}),C=S.openCategorySelect,L=S.CategorySelectComponent,k=function(e,t){Ne.performAction(e,n?[n.id]:Ne.getIds(t),{wasManuallyMarkedAsRead:!0}).catch(H()),o(!yn.includes(e))},I=b.useMemo((function(){return{downloadableMangas:[].concat(u(Ne.getNotDownloaded(h)),u(Ne.getPartiallyDownloaded(h))),downloadedMangas:[].concat(u(Ne.getPartiallyDownloaded(h)),u(Ne.getFullyDownloaded(h))),unreadMangas:[].concat(u(Ne.getUnread(h)),u(Ne.getPartiallyRead(h))),readMangas:[].concat(u(Ne.getPartiallyRead(h)),u(Ne.getFullyRead(h)))}}),[h]),M=I.downloadableMangas,E=I.downloadedMangas,O=I.unreadMangas,_=I.readMangas;return j.jsxs(j.Fragment,{children:[!!t&&f&&j.jsx(be,{onClick:function(){null==t||t(n.id,!0),o(!0)},Icon:xe,title:a("chapter.action.label.select")}),p(!v)&&j.jsx(vn,{disabled:m(!M.length),LeftIcon:B,label:g("download",M.length),parentMenuOpen:!0,children:j.jsx(we,{mangaIds:f?[n.id]:Ne.getIds(h),closeMenu:function(){return o(!0)}})}),p(y)&&j.jsx(be,{Icon:Ge,disabled:m(!E.length),onClick:function(){return k("delete",E)},title:g("delete",E.length)}),p(x)&&j.jsx(be,{Icon:je,disabled:m(!O.length),onClick:function(){return k("mark_as_read",O)},title:g("mark_as_read",O.length)}),p(w)&&j.jsx(be,{Icon:Se,disabled:m(!_.length),onClick:function(){return k("mark_as_unread",_)},title:g("mark_as_unread",_.length)}),f&&j.jsx(W,{to:"/migrate/source/".concat(null==n?void 0:n.sourceId,"/manga/").concat(null==n?void 0:n.id,"/search?query=").concat(null==n?void 0:n.title),state:{mangaTitle:null==n?void 0:n.title},style:{textDecoration:"none",color:"inherit"},children:j.jsx(be,{Icon:Ce,title:g("migrate",h.length)})}),f&&j.jsx(be,{onClick:function(){d(!0),i(!0)},Icon:Ae,title:g("track",h.length)}),j.jsx(be,{onClick:function(){C(!0),i(!0)},Icon:Le,title:g("change_categories",h.length)}),j.jsx(be,{onClick:function(){return k("remove_from_library",h)},Icon:ke,title:g("remove_from_library",h.length)}),L,l&&j.jsx(z,{open:!0,maxWidth:"md",fullWidth:!0,scroll:"paper",onClose:function(){d(!1),o(!0)},children:j.jsx(Ie,{manga:n})})]})})),xn=function(e){var n=e.mangaIdToMigrateTo,t=e.onClose,r=F().t,o=U(),i=K().mangaId,l=Number(i),u=Y().settings,d=u.migrateChapters,f=u.migrateCategories,h=u.migrateTracking,g=u.deleteChapters,p=s(b.useState(!1),2),m=p[0],v=p[1],y=Z(H()),x=function(){var e,t=(e=a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=l){e.next=2;break}throw new Error('MigrateDialog::migrate: unexpected mangaId "'.concat(l,'"'));case 2:return Q(r("migrate.label.info"),"info"),v(!0),e.prev=4,e.next=7,Ne.migrate(l,n,{mode:t,migrateChapters:d,migrateCategories:f,migrateTracking:h,deleteChapters:g});case 7:o("/manga/".concat(n),{replace:!0}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),v(!1);case 13:case"end":return e.stop()}}),e,null,[[4,10]])})),function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function a(e){c(i,r,o,a,l,"next",e)}function l(e){c(i,r,o,a,l,"throw",e)}a(void 0)}))});return function(e){return t.apply(this,arguments)}}();return j.jsxs(z,{open:!0,fullWidth:!0,onClose:t,children:[j.jsx(q,{children:r("migrate.dialog.title")}),j.jsx($,{dividers:!0,children:j.jsxs(Be,{children:[j.jsx(Fe,{disabled:m,label:r("chapter.title_one"),checked:d,onChange:function(e,n){return y("migrateChapters",n)}}),j.jsx(Fe,{disabled:m,label:r("category.title.category_one"),checked:f,onChange:function(e,n){return y("migrateCategories",n)}}),j.jsx(Fe,{disabled:m,label:r("tracking.title"),checked:h,onChange:function(e,n){return y("migrateTracking",n)}}),j.jsx(Fe,{disabled:m,label:r("migrate.dialog.label.delete_downloaded"),checked:g,onChange:function(e,n){return y("deleteChapters",n)}})]})}),j.jsx(J,{children:j.jsxs(X,{direction:"row",sx:{justifyContent:"space-between",width:"100%"},children:[j.jsx(V,{disabled:m,component:W,to:"/manga/".concat(n),children:r("migrate.dialog.action.button.show_entry")}),j.jsxs(X,{direction:"row",children:[j.jsx(V,{disabled:m,onClick:t,children:r("global.button.cancel")}),j.jsx(V,{disabled:m,onClick:function(){return x("copy")},children:r("global.button.copy")}),j.jsx(V,{disabled:m,onClick:function(){return x("migrate")},children:r("global.button.migrate")})]})]})})]})},wn=b.forwardRef((function(e,n){var t=e.id,r=e.selected,o=e.handleSelection,i=e.asCheckbox,a=void 0!==i&&i,c=e.popupState,l=F().t,u=T.useIsTouchDevice(),s=b.useMemo((function(){return ee(c)}),[c]),d=function(e){e.stopPropagation(),e.preventDefault()},f=function(e){u||(d(e),c.open(e),s.onClick(e))};return o?null!==r?a?j.jsx(ne,{title:l(r?"global.button.deselect":"global.button.select"),children:j.jsx(ze,{checked:r,onMouseDown:d,onChange:function(e,n){d(e),null==o||o(t,n)}})}):null:a?j.jsx(ne,{title:l("global.button.options"),children:j.jsx(te,g(g({ref:n},s),{},{onClick:f,onTouchStart:f,"aria-label":"more",size:"large",onMouseDown:d,children:j.jsx(_e,{})}))}):j.jsx(ne,{title:l("global.button.options"),children:j.jsx(V,g(g({ref:n},s),{},{onClick:f,onTouchStart:f,className:"manga-option-button",size:"small",variant:"contained",sx:{minWidth:"unset",paddingX:"0",paddingY:"2.5px",visibility:c.isOpen?"visible":"hidden",pointerEvents:"none","@media not (pointer: fine)":{visibility:"hidden",pointerEvents:void 0}},onMouseDown:function(e){return e.stopPropagation()},children:j.jsx(_e,{})}))}):null})),jn=M("div")({position:"absolute",bottom:0,width:"100%",height:"30%",background:"linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)"}),Sn=M("div")({position:"absolute",bottom:0,width:"100%",height:"20%",background:"linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)"}),Cn=function(e){var n=e.manga,t=e.longPressBind,r=e.popupState,o=e.handleClick,i=e.mangaLinkTo,a=e.selected,c=e.inLibraryIndicator,l=e.isInLibrary,u=e.gridLayout,s=e.handleSelection,d=e.continueReadingButton,f=e.mangaBadges,h=e.mode,p=b.useRef(null),m=n.id,v=n.title;return j.jsx(Ue,g(g({component:W},t((function(){return r.open(p.current)}))),{},{onClick:o,to:i,state:{mangaTitle:v},sx:{textDecoration:"none",touchCallout:"none"},children:j.jsxs(R,{sx:{display:"flex",flexDirection:"column",m:.25,outline:a?"4px solid":void 0,borderRadius:a?"1px":void 0,outlineColor:function(e){return e.palette.primary.main},backgroundColor:function(e){return a?e.palette.primary.main:void 0},"@media (hover: hover) and (pointer: fine)":{"&:hover .manga-option-button":{visibility:"visible",pointerEvents:"all"},"&:hover .source-manga-library-state-button":{display:"inline-flex"},"&:hover .source-manga-library-state-indicator":{display:"source"===h?"none":"flex"}}},children:[j.jsx(Ke,{sx:{aspectRatio:"225/350",display:"flex"},children:j.jsxs(Ye,{sx:{position:"relative",height:"100%"},children:[j.jsx(We,{alt:v,src:Ne.getThumbnailUrl(n),imgStyle:c&&l?{height:"100%",width:"100%",objectFit:"cover",filter:"brightness(0.4)"}:{height:"100%",width:"100%",objectFit:"cover"},spinnerStyle:{display:"grid",placeItems:"center"}}),j.jsxs(X,{direction:"row",sx:{alignItems:"start",justifyContent:"space-between",position:"absolute",top:function(e){return e.spacing(1)},left:function(e){return e.spacing(1)},right:function(e){return e.spacing(1)}},children:[f,j.jsx(wn,{ref:p,popupState:r,id:m,selected:a,handleSelection:s})]}),j.jsxs(j.Fragment,{children:[u!==re.Comfortable&&j.jsxs(j.Fragment,{children:[j.jsx(jn,{}),j.jsx(Sn,{})]}),j.jsxs(X,{direction:"row",sx:{justifyContent:u!==re.Comfortable?"space-between":"end",alignItems:"end",position:"absolute",bottom:0,width:"100%",p:1,gap:1},children:[u!==re.Comfortable&&j.jsx(ne,{title:v,placement:"top",children:j.jsx(He,{component:"h3",sx:{color:"white",textShadow:"0px 0px 3px #000000"},children:v})}),d]})]})]})}),u===re.Comfortable&&j.jsx(X,{sx:{pb:1},children:j.jsx(ne,{title:v,placement:"top",children:j.jsx(He,{component:"h3",sx:{color:function(e){return a?e.palette.primary.contrastText:"text.primary"},height:"3rem",pt:.5},children:v})})})]})}))},Ln=function(e){var n=e.manga,t=e.longPressBind,r=e.popupState,o=e.handleClick,i=e.mangaLinkTo,a=e.selected,c=e.inLibraryIndicator,l=e.isInLibrary,u=e.handleSelection,s=e.continueReadingButton,d=e.mangaBadges,f=e.mode,h=b.useRef(null),p=n.id,m=n.title;return j.jsx(Ke,{children:j.jsx(Ye,g(g({component:W,to:i,state:{mangaTitle:m},onClick:o},t((function(){return r.open(h.current)}))),{},{sx:{touchCallout:"none","@media (hover: hover) and (pointer: fine)":{"&:hover .manga-option-button":{visibility:"visible",pointerEvents:"all"},"&:hover .source-manga-library-state-button":{display:"inline-flex"},"&:hover .source-manga-library-state-indicator":{display:"source"===f?"none":"inline-flex"}}},children:j.jsxs(qe,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:1.5,position:"relative"},children:[j.jsx($e,{variant:"rounded",sx:{width:56,height:56,flex:"0 0 auto",marginRight:1},children:j.jsx(We,{spinnerStyle:{small:!0},imgStyle:{objectFit:"cover",width:"100%",height:"100%",imageRendering:"pixelated",filter:c&&l?"brightness(0.4)":void 0},alt:n.title,src:Ne.getThumbnailUrl(n)})}),j.jsx(R,{sx:{display:"flex",flexDirection:"row",flexGrow:1,width:"min-content"},children:j.jsx(ne,{title:m,placement:"top",children:j.jsx(He,{variant:"h6",component:"h3",children:m})})}),j.jsxs(X,{direction:"row",sx:{alignItems:"center",gap:.5},children:[d,s,j.jsx(wn,{ref:h,popupState:r,id:p,selected:a,handleSelection:u,asCheckbox:!0})]})]})}))})},kn=function(e){var n=e.showContinueReadingButton,t=e.nextChapterIndexToRead,r=e.mangaLinkTo,o=F().t,i=1===t;return n&&void 0!==t?j.jsx(ne,{title:o(i?"global.button.start":"global.button.resume"),children:j.jsx(V,{variant:"contained",size:"small",sx:{minWidth:"unset",py:.5,px:.75},component:W,to:"".concat(r,"chapter/").concat(t),onClick:function(e){return e.stopPropagation()},onMouseDown:function(e){return e.stopPropagation()},children:j.jsx(Je,{})})}):null},In=M("div")((function(e){return{display:"flex",height:"fit-content",borderRadius:e.theme.shape.borderRadius,overflow:"hidden"}})),Mn=M(oe)((function(e){var n=e.theme;return{color:n.palette.primary.contrastText,paddingInline:n.spacing(.3)}})),En=function(e){var n=e.inLibraryIndicator,t=e.updateLibraryState,r=e.isInLibrary,o=e.unread,i=e.downloadCount,a=e.mode,c=F().t,l=T.useIsTouchDevice(),u=ie().options,s=u.showUnreadBadge,d=u.showDownloadBadge;return j.jsxs(In,{children:[!l&&n&&"source"===a&&j.jsx(V,{className:"source-manga-library-state-button",component:"div",variant:"contained",size:"small",onMouseDown:function(e){return e.stopPropagation()},onClick:function(e){e.preventDefault(),e.stopPropagation(),t()},sx:{display:"none"},color:r?"error":"primary",children:c(r?"manga.action.library.remove.label.action":"manga.button.add_to_library")}),n&&r&&j.jsx(oe,{className:"source-manga-library-state-indicator",sx:{backgroundColor:"primary.dark",color:"primary.contrastText",p:.3},children:c("manga.button.in_library")}),(s&&"default"===a||"duplicate"===a)&&(null!=o?o:0)>0&&j.jsx(Mn,{sx:{backgroundColor:"primary.main",color:"primary.contrastText"},children:o}),(d&&"default"===a||"duplicate"===a)&&(null!=i?i:0)>0&&j.jsx(Mn,{sx:{backgroundColor:"secondary.main",color:"secondary.contrastText"},children:i})]})},On=f("b",(function(e){var n=e.manga,t=e.gridLayout,r=e.inLibraryIndicator,o=e.selected,i=e.handleSelection,a=e.mode,c=void 0===a?"default":a,l=n.id,u=n.firstUnreadChapter,d=n.downloadCount,f=n.unreadCount,h=ie().options.showContinueReadingButton,p=Pe(n,"source"===c),m=p.CategorySelectComponent,v=p.updateLibraryState,y=p.isInLibrary,x=function(e,n,t,r){switch(e){case"default":case"source":case"duplicate":return"/manga/".concat(n,"/");case"migrate.search":return"/migrate/source/".concat(t,"/manga/").concat(n,"/search?query=").concat(r);case"migrate.select":return"";default:throw new Error('getMangaLinkTo: unexpected MangaCardMode "'.concat(e,'"'))}}(c,n.id,n.sourceId,n.title),w=null==u?void 0:u.sourceOrder,S=s(b.useState(!1),2),C=S[0],L=S[1],k=function(e,n){var t="default"===c,r="source"===c,a="migrate.select"===c,u=null!==o;(a||u||(t||r)&&!!n)&&(e.preventDefault(),r?v():u?null==i||i(l,!o,{selectRange:e.shiftKey}):t?null==n||n():a&&L(!0))},I=Te((function(e,n){var t=n.context;e.shiftKey=!0,k(e,t)})),M=b.useMemo((function(){return t===re.List?Ln:Cn}),[t]),E=b.useMemo((function(){return j.jsx(kn,{showContinueReadingButton:h&&"default"===c,nextChapterIndexToRead:w,mangaLinkTo:x})}),[h,w,x]),O=b.useMemo((function(){return j.jsx(En,{inLibraryIndicator:r,isInLibrary:y,unread:f,downloadCount:d,updateLibraryState:v,mode:c})}),[r,y,f,d,v]);return j.jsxs(j.Fragment,{children:[C&&j.jsx(xn,{mangaIdToMigrateTo:n.id,onClose:function(){return L(!1)}}),j.jsx(ae,{variant:"popover",popupId:"manga-card-action-menu",children:function(t){return j.jsxs(j.Fragment,{children:[j.jsx(M,g(g({},e),{},{longPressBind:I,popupState:t,handleClick:k,mangaLinkTo:x,isInLibrary:y,inLibraryIndicator:r,continueReadingButton:E,mangaBadges:O})),!!i&&t.isOpen&&j.jsx(Re,g(g({},ce(t)),{},{children:function(e,t){return j.jsx(bn,{manga:n,handleSelection:i,onClose:e,setHideMenu:t})}})),m]})}})]})})),_n=le.forwardRef((function(e,n){var t=e.children,r=l(e,o);return j.jsx(pn,g(g({},r),{},{ref:n,container:!0,spacing:1,children:t}))})),Pn=function(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,a=arguments.length>6?arguments[6]:void 0;return j.jsx(On,{manga:e,gridLayout:n,inLibraryIndicator:t,selected:r?null==o?void 0:o.includes(e.id):null,handleSelection:i,mode:a},e.id)},Tn=b.forwardRef((function(e,n){var t=e.isLoading,r=e.mangas,o=e.inLibraryIndicator,i=e.GridItemContainer,a=e.gridLayout,c=e.isSelectModeActive,l=e.selectedMangaIds,u=e.handleSelection,s=e.mode;return j.jsx(pn,{ref:n,container:!0,spacing:1,sx:{width:"100%",overflowX:"auto",display:"-webkit-inline-box",flexWrap:"nowrap"},children:t?j.jsx(ue,{}):r.map((function(e){return j.jsx(i,{children:Pn(e,a,o,c,l,u,s)},e.id)}))})})),Rn=f("g",(function(e){return"MangaGrid-snapshot-location-".concat(e.key)})),Gn=b.forwardRef((function(e,n){var t=e.isLoading,r=e.mangas,o=e.inLibraryIndicator,i=e.GridItemContainer,a=e.gridLayout,c=e.hasNextPage,l=e.loadMore,u=e.isSelectModeActive,d=e.selectedMangaIds,f=e.handleSelection,h=e.mode,g=se(),p=Rn(g),m=s(de(p,void 0),1)[0],v=b.useRef();return b.useEffect((function(){return clearTimeout(v.current)}),[g.key,v.current]),j.jsxs(j.Fragment,{children:[j.jsx(R,{ref:n,children:j.jsx(ve,{useWindowScroll:!0,overscan:.25*window.innerHeight,totalCount:r.length,components:{List:_n,Item:i},restoreStateFrom:m,stateChanged:function(e){var n=window.location.href;clearTimeout(v.current),v.current=setTimeout((function(){n!==window.location.href||fe.session.setItem(p,e,!1)}),250)},endReached:function(){return l()},itemContent:function(e){return Pn(r[e],a,o,u,d,f,h)}})}),u&&a===re.List?j.jsx(R,{sx:{paddingBottom:Xe}}):t?j.jsx(ue,{}):c?j.jsx("div",{style:{height:"75px"}}):null]})}));f("M",(function(e){var n,t,r=e.mangas,o=e.isLoading,a=e.message,c=e.messageExtra,u=e.hasNextPage,d=e.loadMore,f=e.gridLayout,h=e.horizontal,p=e.noFaces,m=e.inLibraryIndicator,v=e.isSelectModeActive,y=e.selectedMangaIds,x=e.handleSelection,w=e.mode,S=e.retry,C=e.gridWrapperProps,L=F().t,k=he().navBarWidth,I=b.useRef(null),M=b.useRef(null),E=s(b.useState(null!==(n=null===(t=M.current)||void 0===t?void 0:t.offsetWidth)&&void 0!==n?n:Math.max(0,document.documentElement.offsetWidth-k)),2),O=E[0],_=E[1],P=s(ge("ItemWidth",300),1)[0],T=b.useMemo((function(){return function(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:12,o=Math.ceil(e/n),a=t===re.List?r:r/o;return function(e){var n=e.children,t=l(e,i);return j.jsx(pn,g(g({},t),{},{size:a,children:n}))}}(O,P,f)}),[O,P,f]);return b.useLayoutEffect((function(){var e,n=function(t){e=setTimeout((function(){document.body.style.overflow.includes("hidden")?n(250):document.body.style.overflowY=f===re.List?"auto":"scroll"}),t)};return n(0),function(){clearTimeout(e)}}),[f]),b.useLayoutEffect((function(){return function(){document.body.style.overflowY="auto"}}),[]),pe(M,b.useCallback((function(){var e;_((null===(e=M.current)||void 0===e?void 0:e.offsetWidth)||document.documentElement.offsetWidth-k)}),[k])),pe(I,b.useCallback((function(e,n){var t=e[0].target.clientHeight,r=t>document.documentElement.clientHeight;o||t&&(r||d(),n.disconnect())}),[I,d,o])),!o&&0===r.length?j.jsx(me,{noFaces:p,message:null!=a?a:L("manga.error.label.no_mangas_found"),messageExtra:c,retry:S}):j.jsx(R,g(g({},C),{},{ref:M,sx:g(g({},null==C?void 0:C.sx),{},{overflow:"hidden"}),children:h?j.jsx(Tn,{ref:I,isLoading:o,mangas:r,inLibraryIndicator:m,GridItemContainer:T,gridLayout:f,isSelectModeActive:v,selectedMangaIds:y,handleSelection:x,mode:w}):j.jsx(Gn,{ref:I,isLoading:o,mangas:r,inLibraryIndicator:m,GridItemContainer:T,hasNextPage:u,loadMore:d,gridLayout:f,isSelectModeActive:v,selectedMangaIds:y,handleSelection:x,mode:w})}))}))}}}))}();
