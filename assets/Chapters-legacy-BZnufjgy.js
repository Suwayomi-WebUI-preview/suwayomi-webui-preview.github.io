!function(){var e,t=["isBookmarked"],r=["offset"];function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e,t,r){return(t=d(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */i=function(){return t};var e,t={},r=Object.prototype,o=r.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",s=c.toStringTag||"@@toStringTag";function f(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{f({},"")}catch(e){f=function(e,t,r){return e[t]=r}}function d(e,t,r,n){var o=t&&t.prototype instanceof g?t:g,i=Object.create(o.prototype),c=new T(n||[]);return a(i,"_invoke",{value:P(e,r,c)}),i}function p(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=d;var h="suspendedStart",v="suspendedYield",y="executing",m="completed",b={};function g(){}function k(){}function w(){}var _={};f(_,u,(function(){return this}));var x=Object.getPrototypeOf,O=x&&x(x(A([])));O&&O!==r&&o.call(O,u)&&(_=O);var E=w.prototype=g.prototype=Object.create(_);function j(e){["next","throw","return"].forEach((function(t){f(e,t,(function(e){return this._invoke(t,e)}))}))}function L(e,t){function r(a,i,c,u){var l=p(e[a],e,i);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==n(f)&&o.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,c,u)}),(function(e){r("throw",e,c,u)})):t.resolve(f).then((function(e){s.value=e,c(s)}),(function(e){return r("throw",e,c,u)}))}u(l.arg)}var i;a(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return i=i?i.then(o,o):o()}})}function P(t,r,n){var o=h;return function(a,i){if(o===y)throw Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:e,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=C(c,n);if(u){if(u===b)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var l=p(t,r,n);if("normal"===l.type){if(o=n.done?m:v,l.arg===b)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=m,n.method="throw",n.arg=l.arg)}}}function C(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,C(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),b;var a=p(o,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,b;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,b):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,b)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function D(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function A(t){if(t||""===t){var r=t[u];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function r(){for(;++a<t.length;)if(o.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw new TypeError(n(t)+" is not iterable")}return k.prototype=w,a(E,"constructor",{value:w,configurable:!0}),a(w,"constructor",{value:k,configurable:!0}),k.displayName=f(w,s,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===k||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,f(e,s,"GeneratorFunction")),e.prototype=Object.create(E),e},t.awrap=function(e){return{__await:e}},j(L.prototype),f(L.prototype,l,(function(){return this})),t.AsyncIterator=L,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new L(d(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},j(E),f(E,s,"Generator"),f(E,u,(function(){return this})),f(E,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=A,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(D),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),l=o.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,b):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),b},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),D(r),b}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;D(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:A(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),b}},t}function c(e,t,r,n,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,o)}function u(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){c(a,n,o,i,u,"next",e)}function u(e){c(a,n,o,i,u,"throw",e)}i(void 0)}))}}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.includes(r)||{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function s(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,d(n.key),n)}}function d(e){var t=function(e,t){if("object"!=n(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==n(t)?t:t+""}System.register(["./index-legacy-Ckt-jmvZ.js"],(function(n,c){"use strict";var d,p,h,v,y,m;return{setters:[function(e){d=e.a,p=e.ch,h=e.b_,v=e.b$,y=e.m,m=e.F}],execute:function(){var c=n("b",function(e){return e[e.PREV=-1]="PREV",e[e.NEXT=1]="NEXT",e}(c||{})),b=n("a",{download:{action:{single:"chapter.action.download.add.label.action",selected:"chapter.action.download.add.button.selected"},success:"chapter.action.download.add.label.success",error:"chapter.action.download.add.label.error"},delete:{action:{single:"chapter.action.download.delete.label.action",selected:"chapter.action.download.delete.button.selected"},success:"chapter.action.download.delete.label.success",error:"chapter.action.download.delete.label.error"},bookmark:{action:{single:"chapter.action.bookmark.add.label.action",selected:"chapter.action.bookmark.add.button.selected"},success:"chapter.action.bookmark.add.label.success",error:"chapter.action.bookmark.add.label.error"},unbookmark:{action:{single:"chapter.action.bookmark.remove.label.action",selected:"chapter.action.bookmark.remove.button.selected"},success:"chapter.action.bookmark.remove.label.success",error:"chapter.action.bookmark.remove.label.error"},mark_as_read:{action:{single:"chapter.action.mark_as_read.add.label.action.current",selected:"chapter.action.mark_as_read.add.button.selected"},success:"chapter.action.mark_as_read.add.label.success",error:"chapter.action.mark_as_read.add.label.error"},mark_as_unread:{action:{single:"chapter.action.mark_as_read.remove.label.action",selected:"chapter.action.mark_as_read.remove.button.selected"},success:"chapter.action.mark_as_read.remove.label.success",error:"chapter.action.mark_as_read.remove.label.error"}}),g=function(){function n(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n)}return function(e,t,r){return t&&f(e.prototype,t),r&&f(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}(n,null,[{key:"getIds",value:function(e){return e.map((function(e){return e.id}))}},{key:"getFromCache",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"CHAPTER_LIST_FIELDS";return d.graphQLClient.client.cache.readFragment({id:d.graphQLClient.client.cache.identify({__typename:"ChapterType",id:e}),fragment:t,fragmentName:r})}},{key:"isDownloading",value:function(t){return!!d.graphQLClient.client.cache.readFragment({id:d.graphQLClient.client.cache.identify({__typename:"DownloadType",chapter:{__ref:d.graphQLClient.client.cache.identify({__typename:"ChapterType",id:t})}}),fragment:h(e||(e=s(["\n                fragment CHAPTER_DOWNLOAD_QUEUE_CHECK on ChapterType {\n                    id\n                }\n            "]))),fragmentName:"CHAPTER_DOWNLOAD_QUEUE_CHECK"})}},{key:"isDownloaded",value:function(e){return e.isDownloaded}},{key:"getDownloaded",value:function(e){return e.filter(n.isDownloaded)}},{key:"isDeletable",value:function(e){var r=e.isBookmarked,o=l(e,t),a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return n.isDownloaded(o)&&(!r||a)}},{key:"getDeletable",value:function(e,t){return e.filter((function(e){return n.isDeletable(e,t)}))}},{key:"isBookmarked",value:function(e){return e.isBookmarked}},{key:"getBookmarked",value:function(e){return e.filter(n.isBookmarked)}},{key:"getNonBookmarked",value:function(e){return e.filter((function(e){return!n.isBookmarked(e)}))}},{key:"isRead",value:function(e){return e.isRead}},{key:"getRead",value:function(e){return e.filter(n.isRead)}},{key:"getNonRead",value:function(e){return e.filter((function(e){return!n.isRead(e)}))}},{key:"getMatchingChapterNumberChapters",value:function(e,t){return e.map((function(e){var r=t.find((function(t){return e.chapterNumber===t.chapterNumber}));return r?[e,r]:null})).filter((function(e){return null!==e}))}},{key:"download",value:(j=u(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.executeAction("download",t.length,(function(){return d.addChaptersToDownloadQueue(t).response})));case 1:case"end":return e.stop()}}),e)}))),function(e){return j.apply(this,arguments)})},{key:"delete",value:(E=u(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.executeAction("delete",t.length,(function(){return d.deleteDownloadedChapters(t).response})));case 1:case"end":return e.stop()}}),e)}))),function(e){return E.apply(this,arguments)})},{key:"markAsRead",value:(O=u(i().mark((function e(t){var r,o,a,c,u,l,s,f=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=f.length>1&&void 0!==f[1]&&f[1],o=f.length>2?f[2]:void 0,e.next=4,v();case 4:return a=e.sent,c=a.deleteChaptersManuallyMarkedRead,u=a.deleteChaptersWithBookmark,l=a.updateProgressManualMarkRead,s=c&&r?n.getIds(n.getDeletable(t,u)):[],e.abrupt("return",n.executeAction("mark_as_read",t.length,(function(){return d.updateChapters(n.getIds(t),{isRead:!0,lastPageRead:0,chapterIdsToDelete:s,trackProgressMangaId:l&&r?o:void 0}).response})));case 10:case"end":return e.stop()}}),e)}))),function(e){return O.apply(this,arguments)})},{key:"markAsUnread",value:(x=u(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.executeAction("mark_as_unread",t.length,(function(){return d.updateChapters(t,{isRead:!1}).response})));case 1:case"end":return e.stop()}}),e)}))),function(e){return x.apply(this,arguments)})},{key:"bookmark",value:(_=u(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.executeAction("bookmark",t.length,(function(){return d.updateChapters(t,{isBookmarked:!0}).response})));case 1:case"end":return e.stop()}}),e)}))),function(e){return _.apply(this,arguments)})},{key:"unBookmark",value:(w=u(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.executeAction("unbookmark",t.length,(function(){return d.updateChapters(t,{isBookmarked:!1}).response})));case 1:case"end":return e.stop()}}),e)}))),function(e){return w.apply(this,arguments)})},{key:"executeAction",value:(k=u(i().mark((function e(t,r,n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n();case 3:y(m(b[t].success,{count:r}),"success"),e.next=10;break;case 6:throw e.prev=6,e.t0=e.catch(0),y(m(b[t].error,{count:r}),"error"),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,6]])}))),function(e,t,r){return k.apply(this,arguments)})},{key:"performAction",value:(g=u(i().mark((function e(t,r,o){var a,c,u;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=o.wasManuallyMarkedAsRead,c=o.trackProgressMangaId,u=o.chapters,e.t0=t,e.next="download"===e.t0?4:"delete"===e.t0?5:"mark_as_read"===e.t0?6:"mark_as_unread"===e.t0?7:"bookmark"===e.t0?8:"unbookmark"===e.t0?9:10;break;case 4:return e.abrupt("return",n.download(r));case 5:return e.abrupt("return",n.delete(r));case 6:return e.abrupt("return",n.markAsRead(u,a,c));case 7:return e.abrupt("return",n.markAsUnread(r));case 8:return e.abrupt("return",n.bookmark(r));case 9:return e.abrupt("return",n.unBookmark(r));case 10:throw new Error('Chapters::performAction: unknown action "'.concat(t,'"'));case 11:case"end":return e.stop()}}),e)}))),function(e,t,r){return g.apply(this,arguments)})},{key:"addDuplicates",value:function(e,t){var r=Object.groupBy(t,(function(e){return e.chapterNumber}));return e.map((function(e){var t;return null!==(t=r[e.chapterNumber])&&void 0!==t?t:[e]})).flat()}},{key:"removeDuplicates",value:function(e,t){var r=Object.groupBy(t,(function(e){return e.chapterNumber})),n=Object.values(r).map((function(t){var r,n;return null!==(r=null!==(n=t.find((function(t){return t.id===e.id})))&&void 0!==n?n:t.findLast((function(t){return t.scanlator===e.scanlator})))&&void 0!==r?r:t.slice(-1)[0]}));return t.map((function(e){var t=e.id;return n.find((function(e){return e.id===t}))})).filter((function(e){return!!e}))}},{key:"getNextChapter",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},u=i.offset,s=void 0===u?c.NEXT:u,f=l(i,r),d=n.getNextChapters(e,t,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({offset:s},f)),p=s===c.NEXT,h=p?-1:0,v=p?void 0:1;return d.slice(h,v)[0]}},{key:"getNextChapters",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=r.offset,a=void 0===o?c.NEXT:o,i=r.onlyUnread,u=void 0!==i&&i,l=r.skipDupe,s=void 0!==l&&l,f=r.skipDupeChapter,d=void 0===f?e:f,p=t.findIndex((function(t){return t.id===e.id})),h=a===c.NEXT,v=h?0:p,y=h?p+1:void 0,m=t.slice(v,y),b=(s?n.removeDuplicates(d,m):m).toSpliced(h?-1:0,1);return u?n.getNonRead(b):b}}]);var g,k,w,_,x,O,E,j}();n("C",g)}}}))}();
