!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return n};var r,n={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},s=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",u=c.toStringTag||"@@toStringTag";function h(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(r){h=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof x?e:x,i=Object.create(o.prototype),c=new k(n||[]);return a(i,"_invoke",{value:E(t,r,c)}),i}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=f;var v="suspendedStart",p="suspendedYield",y="executing",g="completed",m={};function x(){}function j(){}function b(){}var w={};h(w,s,(function(){return this}));var _=Object.getPrototypeOf,L=_&&_(_(R([])));L&&L!==o&&i.call(L,s)&&(w=L);var M=b.prototype=x.prototype=Object.create(w);function O(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function S(e,r){function n(o,a,c,s){var l=d(e[o],e,a);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==t(h)&&i.call(h,"__await")?r.resolve(h.__await).then((function(t){n("next",t,c,s)}),(function(t){n("throw",t,c,s)})):r.resolve(h).then((function(t){u.value=t,c(u)}),(function(t){return n("throw",t,c,s)}))}s(l.arg)}var o;a(this,"_invoke",{value:function(t,e){function i(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(i,i):i()}})}function E(t,e,n){var o=v;return function(i,a){if(o===y)throw Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:r,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var s=z(c,n);if(s){if(s===m)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===v)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var l=d(t,e,n);if("normal"===l.type){if(o=n.done?g:p,l.arg===m)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=g,n.method="throw",n.arg=l.arg)}}}function z(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,z(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var i=d(o,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,m;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,m):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function H(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function R(e){if(e||""===e){var n=e[s];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function t(){for(;++o<e.length;)if(i.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=r,t.done=!0,t};return a.next=a}}throw new TypeError(t(e)+" is not iterable")}return j.prototype=b,a(M,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:j,configurable:!0}),j.displayName=h(b,u,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===j||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,h(t,u,"GeneratorFunction")),t.prototype=Object.create(M),t},n.awrap=function(t){return{__await:t}},O(S.prototype),h(S.prototype,l,(function(){return this})),n.AsyncIterator=S,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new S(f(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(M),h(M,u,"Generator"),h(M,s,(function(){return this})),h(M,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=R,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(H),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=i.call(a,"catchLoc"),l=i.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),H(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;H(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:R(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),m}},n}function r(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,c=[],s=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);s=!0);}catch(t){l=!0,o=t}finally{try{if(!s&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return o(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}System.register(["./index-legacy-873OMCK7.js","./Sync-legacy-C1a9NjMW.js"],(function(t,o){"use strict";var i,a,c,s,l,u,h,f,d,v,p,y,g,m,x,j,b,w,_;return{setters:[function(t){i=t.r,a=t.i,c=t.j,s=t.u,l=t.f,u=t.N,h=t.c,f=t.v,d=t.aM,v=t.A,p=t.ay,y=t.az,g=t.aN,m=t.aO,x=t.aP,j=t.aQ,b=t.aR,w=t.n},function(t){_=t.d}],execute:function(){t("Settings",(function(){var t=s().t,o=l.useContext(u),i=o.setTitle,a=o.setAction;l.useLayoutEffect((function(){return i(t("settings.title")),a(null),function(){i(""),a(null)}}),[t]);var L=n(h.useClearServerCache(),2),O=L[0],S=L[1].loading,E=function(){var n,o=(n=e().mark((function r(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O();case 3:w(t("settings.clear_cache.label.success"),"success"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),w(t("settings.clear_cache.label.failure"),"error");case 9:case"end":return e.stop()}}),r,null,[[0,6]])})),function(){var t=this,e=arguments;return new Promise((function(o,i){var a=n.apply(t,e);function c(t){r(a,o,i,c,s,"next",t)}function s(t){r(a,o,i,c,s,"throw",t)}c(void 0)}))});return function(){return o.apply(this,arguments)}}();return c.jsxs(f,{sx:{padding:0},children:[c.jsxs(d,{to:v.settings.childRoutes.appearance.path,children:[c.jsx(p,{children:c.jsx(at,{})}),c.jsx(y,{primary:t("settings.appearance.title")})]}),c.jsxs(d,{to:v.settings.childRoutes.categories.path,children:[c.jsx(p,{children:c.jsx(P,{})}),c.jsx(y,{primary:t("category.title.category_other")})]}),c.jsxs(d,{to:v.settings.childRoutes.reader.path,children:[c.jsx(p,{children:c.jsx(M,{})}),c.jsx(y,{primary:t("reader.settings.title.reader_settings")})]}),c.jsxs(d,{to:v.settings.childRoutes.library.path,children:[c.jsx(p,{children:c.jsx(g,{})}),c.jsx(y,{primary:t("library.title")})]}),c.jsxs(d,{to:v.settings.childRoutes.download.path,children:[c.jsx(p,{children:c.jsx(m,{})}),c.jsx(y,{primary:t("download.title")})]}),c.jsxs(d,{to:v.settings.childRoutes.tracking.path,children:[c.jsx(p,{children:c.jsx(_,{})}),c.jsx(y,{primary:t("tracking.title")})]}),c.jsxs(d,{to:v.settings.childRoutes.backup.path,children:[c.jsx(p,{children:c.jsx(V,{})}),c.jsx(y,{primary:t("settings.backup.title")})]}),c.jsxs(x,{disabled:S,onClick:E,children:[c.jsx(p,{children:c.jsx(J,{})}),c.jsx(y,{primary:t("settings.clear_cache.label.title"),secondary:t("settings.clear_cache.label.description")})]}),c.jsxs(d,{to:v.settings.childRoutes.browse.path,children:[c.jsx(p,{children:c.jsx(j,{})}),c.jsx(y,{primary:t("global.label.browse")})]}),c.jsxs(d,{to:v.settings.childRoutes.device.path,children:[c.jsx(p,{children:c.jsx(et,{})}),c.jsx(y,{primary:t("settings.device.title.device")})]}),c.jsxs(d,{to:v.settings.childRoutes.webui.path,children:[c.jsx(p,{children:c.jsx(Q,{})}),c.jsx(y,{primary:t("settings.webui.title.webui")})]}),c.jsxs(d,{to:v.settings.childRoutes.server.path,children:[c.jsx(p,{children:c.jsx(F,{})}),c.jsx(y,{primary:t("settings.server.title.server")})]}),c.jsxs(d,{to:v.settings.childRoutes.about.path,children:[c.jsx(p,{children:c.jsx(b,{})}),c.jsx(y,{primary:t("settings.about.title")})]})]})}));var o={},L=a;Object.defineProperty(o,"__esModule",{value:!0});var M=o.default=void 0,O=L(i()),S=c;M=o.default=(0,O.default)((0,S.jsx)("path",{d:"m19 1-5 5v11l5-4.5zM1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6m22 13.5V6c-.6-.45-1.25-.75-2-1v13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5v2c1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5z"}),"AutoStories");var E={},z=a;Object.defineProperty(E,"__esModule",{value:!0});var P=E.default=void 0,H=z(i()),k=c;P=E.default=(0,H.default)((0,k.jsx)("path",{d:"M19 5v14H5V5zm1.1-2H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9M11 7h6v2h-6zm0 4h6v2h-6zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7z"}),"ListAlt");var R={},A=a;Object.defineProperty(R,"__esModule",{value:!0});var V=R.default=void 0,N=A(i()),C=c;V=R.default=(0,N.default)((0,C.jsx)("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M14 13v4h-4v-4H7l5-5 5 5z"}),"Backup");var G={},T=a;Object.defineProperty(G,"__esModule",{value:!0});var F=G.default=void 0,I=T(i()),D=c;F=G.default=(0,I.default)((0,D.jsx)("path",{d:"M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1M7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2M20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1M7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2"}),"Dns");var Y={},B=a;Object.defineProperty(Y,"__esModule",{value:!0});var Q=Y.default=void 0,U=B(i()),W=c;Q=Y.default=(0,U.default)((0,W.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-5 14H4v-4h11zm0-5H4V9h11zm5 5h-4V9h4z"}),"Web");var $={},q=a;Object.defineProperty($,"__esModule",{value:!0});var J=$.default=void 0,K=q(i()),X=c;J=$.default=(0,K.default)((0,X.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteForever");var Z={},tt=a;Object.defineProperty(Z,"__esModule",{value:!0});var et=Z.default=void 0,rt=tt(i()),nt=c;et=Z.default=(0,rt.default)((0,nt.jsx)("path",{d:"M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1m-1 9h-4v-7h4z"}),"Devices");var ot={},it=a;Object.defineProperty(ot,"__esModule",{value:!0});var at=ot.default=void 0,ct=it(i()),st=c;at=ot.default=(0,ct.default)((0,st.jsx)("path",{d:"M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.2-.64-1.67-.08-.1-.13-.21-.13-.33 0-.28.22-.5.5-.5H16c3.31 0 6-2.69 6-6 0-4.96-4.49-9-10-9m5.5 11c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m-3-4c-.83 0-1.5-.67-1.5-1.5S13.67 6 14.5 6s1.5.67 1.5 1.5S15.33 9 14.5 9M5 11.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S7.33 13 6.5 13 5 12.33 5 11.5m6-4c0 .83-.67 1.5-1.5 1.5S8 8.33 8 7.5 8.67 6 9.5 6s1.5.67 1.5 1.5"}),"Palette")}}}))}();
