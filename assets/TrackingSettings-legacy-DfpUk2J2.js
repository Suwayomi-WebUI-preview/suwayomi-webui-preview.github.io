!function(){function t(r){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(r)}var r=["className"];function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return n};var r,n={},o=Object.prototype,a=o.hasOwnProperty,i=Object.defineProperty||function(t,r,e){t[r]=e.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{f({},"")}catch(r){f=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var o=r&&r.prototype instanceof b?r:b,a=Object.create(o.prototype),c=new T(n||[]);return i(a,"_invoke",{value:I(t,e,c)}),a}function g(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}n.wrap=h;var d="suspendedStart",p="suspendedYield",y="executing",v="completed",m={};function b(){}function x(){}function w(){}var j={};f(j,u,(function(){return this}));var k=Object.getPrototypeOf,L=k&&k(k(A([])));L&&L!==o&&a.call(L,u)&&(j=L);var O=w.prototype=b.prototype=Object.create(j);function S(t){["next","throw","return"].forEach((function(r){f(t,r,(function(t){return this._invoke(r,t)}))}))}function _(r,e){function n(o,i,c,u){var s=g(r[o],r,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==t(f)&&a.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)}var o;i(this,"_invoke",{value:function(t,r){function a(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(a,a):a()}})}function I(t,e,n){var o=d;return function(a,i){if(o===y)throw Error("Generator is already running");if(o===v){if("throw"===a)throw i;return{value:r,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=E(c,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var s=g(t,e,n);if("normal"===s.type){if(o=n.done?v:p,s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=v,n.method="throw",n.arg=s.arg)}}}function E(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,E(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var a=g(o,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,m;var i=a.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,m):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function P(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function N(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function A(e){if(e||""===e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function t(){for(;++o<e.length;)if(a.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=r,t.done=!0,t};return i.next=i}}throw new TypeError(t(e)+" is not iterable")}return x.prototype=w,i(O,"constructor",{value:w,configurable:!0}),i(w,"constructor",{value:x,configurable:!0}),x.displayName=f(w,l,"GeneratorFunction"),n.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===x||"GeneratorFunction"===(r.displayName||r.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,f(t,l,"GeneratorFunction")),t.prototype=Object.create(O),t},n.awrap=function(t){return{__await:t}},S(_.prototype),f(_.prototype,s,(function(){return this})),n.AsyncIterator=_,n.async=function(t,r,e,o,a){void 0===a&&(a=Promise);var i=new _(h(t,r,e,o),a);return n.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},S(O),f(O,l,"Generator"),f(O,u,(function(){return this})),f(O,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=A,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(N),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=a.call(i,"catchLoc"),s=a.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=r,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),m},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),N(e),m}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;N(e)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:A(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),m}},n}function n(t,r,e,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void e(t)}c.done?r(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var r=this,e=arguments;return new Promise((function(o,a){var i=t.apply(r,e);function c(t){n(i,o,a,c,u,"next",t)}function u(t){n(i,o,a,c,u,"throw",t)}c(void 0)}))}}function a(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,a,i,c=[],u=!0,s=!1;try{if(a=(e=e.call(t)).next,0===r){if(Object(e)!==e)return;u=!1}else for(;!(u=(n=a.call(e)).done)&&(c.push(n.value),c.length!==r);u=!0);}catch(t){s=!0,o=t}finally{try{if(!u&&null!=e.return&&(i=e.return(),Object(i)!==i))return}finally{if(s)throw o}}return c}}(t,r)||function(t,r){if(t){if("string"==typeof t)return i(t,r);var e={}.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?i(t,r):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=Array(r);e<r;e++)n[e]=t[e];return n}function c(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function u(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?c(Object(e),!0).forEach((function(r){s(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function s(r,e,n){return(e=function(r){var e=function(r,e){if("object"!=t(r)||!r)return r;var n=r[Symbol.toPrimitive];if(void 0!==n){var o=n.call(r,e||"default");if("object"!=t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(r)}(r,"string");return"symbol"==t(e)?e:e+""}(e))in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}System.register(["./index-legacy-DG6JYURr.js","./PasswordTextField-legacy-CN_nbzai.js","./Trackers-legacy-CN_LuGVd.js","./Avatar-legacy-CmTS3Ldq.js","./Chip-legacy-CXV6Mc4f.js","./Switch-legacy-CAhtEU0G.js"],(function(t,n){"use strict";var i,c,s,l,f,h,g,d,p,y,v,m,b,x,w,j,k,L,O,S,_,I,E,P,N,T,A,C,F,M,G,R,U,D,W,q,J,Y,$,Q;return{setters:[function(t){i=t.b0,c=t.b1,s=t.a2,l=t.f,f=t.b_,h=t.b$,g=t.j,d=t.b2,p=t.b3,y=t.u,v=t.r,m=t.ag,b=t.aS,x=t.ah,w=t.aC,j=t.c0,k=t.ap,L=t.aq,O=t.aL,S=t.aM,_=t.a_,I=t.aO,E=t.e,P=t.n,N=t.l,T=t.N,A=t.q,C=t.P,F=t.E,M=t.m,G=t.k,R=t.v,U=t.aN,D=t.aX,W=t.y},function(t){q=t.P},function(t){J=t.T},function(t){Y=t.A},function(t){$=t.C},function(t){Q=t.S}],execute:function(){function n(t){return c("MuiListItemAvatar",t)}i("MuiListItemAvatar",["root","alignItemsFlexStart"]);var V=s("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:function(t,r){var e=t.ownerState;return[r.root,"flex-start"===e.alignItems&&r.alignItemsFlexStart]}})({minWidth:56,flexShrink:0,variants:[{props:{alignItems:"flex-start"},style:{marginTop:8}}]}),X=l.forwardRef((function(t,e){var o=f({props:t,name:"MuiListItemAvatar"}),a=o.className,i=function(t,r){if(null==t)return{};var e,n,o=function(t,r){if(null==t)return{};var e={};for(var n in t)if({}.hasOwnProperty.call(t,n)){if(r.includes(n))continue;e[n]=t[n]}return e}(t,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)e=a[n],r.includes(e)||{}.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}(o,r),c=l.useContext(h),s=u(u({},o),{},{alignItems:c.alignItems}),y=function(t){var r=t.alignItems,e=t.classes;return p({root:["root","flex-start"===r&&"alignItemsFlexStart"]},n,e)}(s);return g.jsx(V,u({className:d(y.root,a),ownerState:s,ref:e},i))})),z=function(t){var r=t.tracker,n=y().t,i=a(v.useLoginToTrackerCredentials(),2),c=i[0],s=i[1].loading,f=a(v.useLogoutFromTracker(),1)[0],h=a(l.useState(""),2),d=h[0],p=h[1],T=a(l.useState(""),2),A=T[0],C=T[1],F=!r.isLoggedIn&&!!r.authUrl,M=function(){var t=o(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f({variables:{trackerId:r.id}});case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),P(n("tracking.action.logout.label.failure",{name:r.name}),"error",N(t.t0));case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(){return t.apply(this,arguments)}}(),G=function(){var t=o(e().mark((function t(){var o;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!F){t.next=4;break}return o={redirectUrl:"".concat(window.location.origin,"/tracker/login/oauth"),clientName:"Suwayomi-WebUI",trackerId:r.id,trackerName:r.name},window.open("".concat(r.authUrl,"&state=").concat(JSON.stringify(o)),"_self"),t.abrupt("return");case 4:return t.prev=4,t.next=7,c({variables:{input:{trackerId:r.id,username:d,password:A}}});case 7:t.next=12;break;case 9:t.prev=9,t.t0=t.catch(4),P(n("tracking.action.login.label.failure",{name:r.name}),"error",N(t.t0));case 12:case"end":return t.stop()}}),t,null,[[4,9]])})));return function(){return t.apply(this,arguments)}}();return g.jsx(m,{variant:"popover",popupId:"tracker-dialog",children:function(t){return g.jsxs(g.Fragment,{children:[g.jsxs(b,u(u({},x(t)),{},{onClick:function(){return r=t.open,void(F?G():r());var r},children:[g.jsx(X,{sx:{paddingRight:"20px"},children:g.jsx(Y,{alt:"".concat(r.name),src:v.getValidImgUrlFor(r.icon),variant:"rounded",sx:{width:64,height:64}})}),g.jsx(w,{primary:r.name}),J.isLoggedIn(r)&&g.jsx(j,{children:g.jsx($,{label:n("global.label.logged_in"),color:"success"})})]})),g.jsxs(k,u(u({},L(t)),{},{open:(J.isLoggedIn(r)||!r.authUrl)&&t.isOpen,disableRestoreFocus:!0,children:[g.jsx(O,{children:n(J.isLoggedIn(r)?"tracking.settings.dialog.title.log_out":"tracking.settings.dialog.title.log_in",{name:r.name})}),!F&&!r.isLoggedIn&&g.jsxs(S,{children:[g.jsx(_,{autoFocus:!0,margin:"dense",id:"username",name:"username",label:n("global.label.username"),type:"text",fullWidth:!0,variant:"standard",onChange:function(t){return p(t.target.value)}}),g.jsx(q,{margin:"dense",fullWidth:!0,variant:"standard",onChange:function(t){return C(t.target.value)}})]}),g.jsxs(I,{children:[g.jsx(E,{onClick:t.close,children:n("global.button.cancel")}),g.jsx(E,{variant:"contained",disabled:!F&&!r.isLoggedIn&&(s||!d.length||!A.length),onClick:function(){return J.isLoggedIn(r)?M():G()},children:n(J.isLoggedIn(r)?"global.button.log_out":"global.button.log_in")})]})]}))]})}})};t("TrackingSettings",(function(){var t,r=y().t,e=l.useContext(T).setTitle;l.useLayoutEffect((function(){e(r("tracking.settings.title.settings"))}),[r]);var n=A(),o=n.settings,a=o.updateProgressAfterReading,i=o.updateProgressManualMarkRead,c=n.loading,u=n.request,s=u.error,f=u.refetch,h=W((function(t){return P(r("global.error.label.failed_to_save_changes"),"error",N(t))})),d=v.useGetTrackerList(C,{notifyOnNetworkStatusChange:!0}),p=d.data,m=d.loading,b=d.error,x=d.refetch,j=null!==(t=null==p?void 0:p.trackers.nodes)&&void 0!==t?t:[],k=c||m,L=null!=s?s:b;return L?g.jsx(F,{message:r("global.error.label.failed_to_load_data"),messageExtra:N(L),retry:function(){s&&f().catch(M()),b&&x().catch(M())}}):k?g.jsx(G,{}):g.jsxs(g.Fragment,{children:[g.jsxs(R,{sx:{pt:0},children:[g.jsxs(U,{children:[g.jsx(w,{primary:r("tracking.settings.label.update_progress_reading")}),g.jsx(Q,{edge:"end",checked:a,onChange:function(t){return h("updateProgressAfterReading",t.target.checked)}})]}),g.jsxs(U,{children:[g.jsx(w,{primary:r("tracking.settings.label.update_progress_manual"),secondary:r("tracking.settings.label.update_progress_reading_description")}),g.jsx(Q,{edge:"end",checked:i,onChange:function(t){return h("updateProgressManualMarkRead",t.target.checked)}})]})]}),g.jsx(R,{subheader:g.jsx(D,{component:"div",id:"tracking-trackers",children:r("tracking.settings.title.trackers")}),children:j.map((function(t){return g.jsx(z,{tracker:t},t.id)}))})]})}))}}}))}();