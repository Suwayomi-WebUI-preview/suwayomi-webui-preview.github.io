!function(){var e=["wasManuallyMarkedAsRead","changeCategoriesPatch","mangaIdToMigrateTo","downloadAhead","onlyUnread","size"];function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function r(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||{}.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function n(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||o(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,i,c=[],u=!0,s=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=o.call(r)).done)&&(c.push(n.value),c.length!==t);u=!0);}catch(e){s=!0,a=e}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw a}}return c}}(e,t)||o(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){if(e){if("string"==typeof e)return i(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function c(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */c=function(){return r};var e,r={},n=Object.prototype,a=n.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},u=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function d(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch(e){d=function(e,t,r){return e[t]=r}}function f(e,t,r,n){var a=t&&t.prototype instanceof b?t:b,i=Object.create(a.prototype),c=new O(n||[]);return o(i,"_invoke",{value:S(e,r,c)}),i}function h(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}r.wrap=f;var p="suspendedStart",g="suspendedYield",m="executing",y="completed",v={};function b(){}function w(){}function k(){}var x={};d(x,u,(function(){return this}));var C=Object.getPrototypeOf,_=C&&C(C(P([])));_&&_!==n&&a.call(_,u)&&(x=_);var E=k.prototype=b.prototype=Object.create(x);function L(e){["next","throw","return"].forEach((function(t){d(e,t,(function(e){return this._invoke(t,e)}))}))}function M(e,r){function n(o,i,c,u){var s=h(e[o],e,i);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"==t(d)&&a.call(d,"__await")?r.resolve(d.__await).then((function(e){n("next",e,c,u)}),(function(e){n("throw",e,c,u)})):r.resolve(d).then((function(e){l.value=e,c(l)}),(function(e){return n("throw",e,c,u)}))}u(s.arg)}var i;o(this,"_invoke",{value:function(e,t){function a(){return new r((function(r,a){n(e,t,r,a)}))}return i=i?i.then(a,a):a()}})}function S(t,r,n){var a=p;return function(o,i){if(a===m)throw Error("Generator is already running");if(a===y){if("throw"===o)throw i;return{value:e,done:!0}}for(n.method=o,n.arg=i;;){var c=n.delegate;if(c){var u=A(c,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===p)throw a=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=m;var s=h(t,r,n);if("normal"===s.type){if(a=n.done?y:g,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(a=y,n.method="throw",n.arg=s.arg)}}}function A(t,r){var n=r.method,a=t.iterator[n];if(a===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,A(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var o=h(a,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function I(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(I,this),this.reset(!0)}function P(r){if(r||""===r){var n=r[u];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function t(){for(;++o<r.length;)if(a.call(r,o))return t.value=r[o],t.done=!1,t;return t.value=e,t.done=!0,t};return i.next=i}}throw new TypeError(t(r)+" is not iterable")}return w.prototype=k,o(E,"constructor",{value:k,configurable:!0}),o(k,"constructor",{value:w,configurable:!0}),w.displayName=d(k,l,"GeneratorFunction"),r.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,k):(e.__proto__=k,d(e,l,"GeneratorFunction")),e.prototype=Object.create(E),e},r.awrap=function(e){return{__await:e}},L(M.prototype),d(M.prototype,s,(function(){return this})),r.AsyncIterator=M,r.async=function(e,t,n,a,o){void 0===o&&(o=Promise);var i=new M(f(e,t,n,a),o);return r.isGeneratorFunction(t)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},L(E),d(E,l,"Generator"),d(E,u,(function(){return this})),d(E,"toString",(function(){return"[object Generator]"})),r.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},r.values=P,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,a){return c.type="throw",c.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=a.call(i,"catchLoc"),s=a.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;j(r)}return a}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:P(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},r}function u(e,t,r,n,a,o,i){try{var c=e[o](i),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,a)}function s(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){u(o,n,a,i,c,"next",e)}function c(e){u(o,n,a,i,c,"throw",e)}i(void 0)}))}}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,d(n.key),n)}}function d(e){var r=function(e,r){if("object"!=t(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,r||"default");if("object"!=t(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==t(r)?r:r+""}System.register(["./index-legacy-C_UnwvGt.js","./Chapters-legacy-DAGnWAMR.js"],(function(t,o){"use strict";var i,u,d,f,h,p,g;return{setters:[function(e){i=e.a,u=e.c7,d=e.bf,f=e.bX,h=e.m,p=e.C},function(e){g=e.C}],execute:function(){var o=t("a",{download:{action:{single:"chapter.action.download.add.label.action",selected:"chapter.action.download.add.button.selected"},success:"chapter.action.download.add.label.success",error:"chapter.action.download.add.label.error"},delete:{action:{single:"chapter.action.download.delete.label.action",selected:"chapter.action.download.delete.button.selected"},success:"chapter.action.download.delete.label.success",error:"chapter.action.download.delete.label.error"},mark_as_read:{action:{single:"chapter.action.mark_as_read.add.label.action.current",selected:"chapter.action.mark_as_read.add.button.selected"},success:"chapter.action.mark_as_read.add.label.success",error:"chapter.action.mark_as_read.add.label.error"},mark_as_unread:{action:{single:"chapter.action.mark_as_read.remove.label.action",selected:"chapter.action.mark_as_read.remove.button.selected"},success:"chapter.action.mark_as_read.remove.label.success",error:"chapter.action.mark_as_read.remove.label.error"},remove_from_library:{action:{single:"manga.action.library.remove.label.action",selected:"manga.action.library.remove.button.selected"},success:"manga.action.library.remove.label.success",error:"manga.action.library.remove.label.error"},change_categories:{action:{single:"manga.action.category.label.action",selected:"manga.action.category.button.selected"},success:"manga.action.category.label.success",error:"manga.action.category.label.error"},migrate:{action:{single:"global.button.migrate",selected:"global.button.migrate"},success:"manga.action.migrate.label.success",error:"manga.action.migrate.label.error"},track:{action:{single:"manga.action.track.add.label.action",selected:"manga.action.track.add.label.action"},success:"manga.action.track.add.label.success",error:"manga.action.track.add.label.error"}}),m=function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t)}return function(e,t,r){return t&&l(e.prototype,t),r&&l(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}(t,null,[{key:"getIds",value:function(e){return e.map((function(e){return e.id}))}},{key:"getFromCache",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"MANGA_BASE_FIELDS";return i.graphQLClient.client.cache.readFragment({id:i.graphQLClient.client.cache.identify({__typename:"MangaType",id:e}),fragment:t,fragmentName:r})}},{key:"isNotDownloaded",value:function(e){return 0===e.downloadCount}},{key:"getNotDownloaded",value:function(e){return e.filter(t.isNotDownloaded)}},{key:"isFullyDownloaded",value:function(e){return e.downloadCount===e.chapters.totalCount}},{key:"getFullyDownloaded",value:function(e){return e.filter(t.isFullyDownloaded)}},{key:"isPartiallyDownloaded",value:function(e){return!t.isNotDownloaded(e)&&!t.isFullyDownloaded(e)}},{key:"getPartiallyDownloaded",value:function(e){return e.filter(t.isPartiallyDownloaded)}},{key:"isUnread",value:function(e){return e.unreadCount===e.chapters.totalCount}},{key:"getUnread",value:function(e){return e.filter(t.isUnread)}},{key:"isFullyRead",value:function(e){return 0===e.unreadCount}},{key:"getFullyRead",value:function(e){return e.filter(t.isFullyRead)}},{key:"isPartiallyRead",value:function(e){return!t.isUnread(e)&&!t.isFullyRead(e)}},{key:"getPartiallyRead",value:function(e){return e.filter(t.isPartiallyRead)}},{key:"getThumbnailUrl",value:function(e){var t=e.thumbnailUrl?"".concat(e.thumbnailUrl,"?fetchedAt=").concat(e.thumbnailUrlLastFetched):"nonExistingMangaUrl";return i.getValidImgUrlFor(t)}},{key:"getDuplicateLibraryMangas",value:function(e){return i.getMangas(d,{condition:{inLibrary:!0},filter:{title:{likeInsensitive:e}}})}},{key:"getChapterIdsWithState",value:(S=s(c().mark((function e(t,r){var n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.getMangasChapterIdsWithState(t,r).response;case 2:return n=e.sent,a=n.data,e.abrupt("return",a.chapters.nodes);case 5:case"end":return e.stop()}}),e)}))),function(e,t){return S.apply(this,arguments)})},{key:"downloadChapters",value:(M=s(c().mark((function e(r){var o,i,u,s,l,d,f,h,p,m,y,v,b,w,k,x=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=(o=x.length>1&&void 0!==x[1]?x[1]:{}).size,u=o.onlyUnread,s=o.downloadAhead,l=void 0!==s&&s,e.next=3,Promise.all([t.getChapterIdsWithState(r,{isRead:!u&&void 0,isDownloaded:!1}),l?t.getChapterIdsWithState(r,{isRead:!1,isDownloaded:!0}):[]]);case 3:if(d=e.sent,f=a(d,2),h=f[0],p=f[1],m=r.map((function(e){return[String(e),i]})),y=Object.groupBy(h,(function(e){return e.mangaId})),v=Object.groupBy(p,(function(e){return e.mangaId})),b=Object.entries(v).map((function(e){var t=a(e,2),r=t[0],n=t[1],o=void 0===n?[]:n,c=Math.max(0,(null!=i?i:o.length)-o.length);return[r,l?c:i]})),w=Object.entries(Object.fromEntries([].concat(n(m),n(b)))),(k=w.map((function(e){var t,r=a(e,2),n=r[0],o=r[1],i=null!==(t=y[Number(n)])&&void 0!==t?t:[];if(!i.length)return[];if(void 0===o)return i;var c=g.removeDuplicates(i[0],i).slice(0,o);return g.addDuplicates(c,i)})).flat()).length){e.next=15;break}return e.abrupt("return",Promise.resolve());case 15:return e.abrupt("return",g.download(g.getIds(k)));case 16:case"end":return e.stop()}}),e)}))),function(e){return M.apply(this,arguments)})},{key:"deleteChapters",value:(L=s(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getChapterIdsWithState(r,{isDownloaded:!0});case 2:return n=e.sent,e.abrupt("return",g.delete(g.getIds(n)));case 4:case"end":return e.stop()}}),e)}))),function(e){return L.apply(this,arguments)})},{key:"markAsRead",value:(E=s(c().mark((function e(r){var n,a,o=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]&&o[1],e.next=3,t.getChapterIdsWithState(r,{isRead:!1});case 3:return a=e.sent,e.abrupt("return",g.markAsRead(a,n,1===r.length?r[0]:void 0));case 5:case"end":return e.stop()}}),e)}))),function(e){return E.apply(this,arguments)})},{key:"markAsUnread",value:(_=s(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getChapterIdsWithState(r,{isRead:!0});case 2:return n=e.sent,e.abrupt("return",g.markAsUnread(g.getIds(n)));case 4:case"end":return e.stop()}}),e)}))),function(e){return _.apply(this,arguments)})},{key:"removeFromLibrary",value:(C=s(c().mark((function e(r){var n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:return n=e.sent,a=n.removeMangaFromCategories,e.abrupt("return",t.executeAction("remove_from_library",r.length,(function(){return i.updateMangas(r,{updateMangas:{inLibrary:!1},updateMangasCategories:a?{clearCategories:!0}:void 0}).response})));case 5:case"end":return e.stop()}}),e)}))),function(e){return C.apply(this,arguments)})},{key:"changeCategories",value:(x=s(c().mark((function e(r,n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.executeAction("change_categories",r.length,(function(){return i.updateMangasCategories(r,n).response})));case 1:case"end":return e.stop()}}),e)}))),function(e,t){return x.apply(this,arguments)})},{key:"migrateChapters",value:(k=s(c().mark((function e(t,r){var n,o,u,s,l,d,f;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.chapters&&null!==(n=r.fetchChapters)&&void 0!==n&&n.chapters){e.next=2;break}throw new Error("Chapters are missing");case 2:return u=t.chapters.nodes,s=null===(o=r.fetchChapters)||void 0===o?void 0:o.chapters,l=g.getMatchingChapterNumberChapters(u,s),d=[],f=[],l.forEach((function(e){var t=a(e,2),r=t[0],n=t[1],o=r.isRead,i=r.isBookmarked;o&&d.push(n.id),i&&f.push(n.id)})),e.next=10,Promise.all([d.length&&i.updateChapters(d,{isRead:!0}).response,f.length&&i.updateChapters(f,{isBookmarked:!0}).response]);case 10:case"end":return e.stop()}}),e)}))),function(e,t){return k.apply(this,arguments)})},{key:"migrateCategories",value:(w=s(c().mark((function e(t,r){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=t&&t.categories){e.next=2;break}throw new Error("Categories are missing");case 2:return e.next=4,i.updateMangasCategories([r.id],{addToCategories:t.categories.nodes.map((function(e){return e.id}))}).response;case 4:case"end":return e.stop()}}),e)}))),function(e,t){return w.apply(this,arguments)})},{key:"migrateTracking",value:(b=s(c().mark((function e(t,r,a){var o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.trackRecords){e.next=2;break}throw new Error("TrackRecords of manga to migrate are missing");case 2:if(a.trackRecords){e.next=4;break}throw new Error("TrackRecords of manga to migrate to are missing");case 4:return o=r.trackRecords.nodes.filter((function(e){return a.trackRecords.nodes.every((function(t){return e.remoteId!==t.remoteId}))})),e.next=7,Promise.all([].concat(n("migrate"===t?r.trackRecords.nodes.map((function(e){return i.unbindTracker(e.id).response})):[]),n(o.map((function(e){return i.bindTracker(a.id,e.trackerId,e.remoteId)})))));case 7:case"end":return e.stop()}}),e)}))),function(e,t,r){return b.apply(this,arguments)})},{key:"migrate",value:(v=s(c().mark((function e(r,n,o){var u,l,d,h,p;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=o.mode,l=o.migrateChapters,d=o.migrateCategories,h=o.migrateTracking,p=o.deleteChapters,e.abrupt("return",t.executeAction("migrate",1,s(c().mark((function e(){var o,s,m,y,v,b,w,k,x;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([i.getMangaToMigrate(r,{migrateChapters:l,migrateCategories:d,migrateTracking:h,deleteChapters:p}).response,i.getMangaToMigrateToFetch(n,{migrateChapters:l,migrateCategories:d,migrateTracking:h}).response,f()]);case 2:if(v=e.sent,b=a(v,3),w=b[0].data,k=b[1].data,x=b[2].removeMangaFromCategories,w.manga&&null!=k&&null!==(o=k.fetchManga)&&void 0!==o&&o.manga){e.next=9;break}throw new Error("Mangas::migrate: missing manga data");case 9:if(!l||w.manga.chapters&&null!==(s=k.fetchChapters)&&void 0!==s&&s.chapters){e.next=11;break}throw new Error("Mangas::migrate: missing chapters data");case 11:return e.next=13,Promise.all([l?t.migrateChapters(w.manga,k):void 0,p?i.deleteDownloadedChapters(g.getIds(g.getDownloaded(null!==(m=null===(y=w.manga.chapters)||void 0===y?void 0:y.nodes)&&void 0!==m?m:[]))).response:void 0,d?t.migrateCategories(w.manga,k.fetchManga.manga):void 0,h?t.migrateTracking(u,w.manga,k.fetchManga.manga):void 0,k.fetchManga.manga.inLibrary?void 0:i.updateManga(n,{updateManga:{inLibrary:!0}}).response,"migrate"===u?i.updateManga(r,{updateManga:{inLibrary:!1},updateMangaCategories:x?{clearCategories:!0}:void 0}).response:void 0]);case 13:case"end":return e.stop()}}),e)})))));case 2:case"end":return e.stop()}}),e)}))),function(e,t,r){return v.apply(this,arguments)})},{key:"executeAction",value:(y=s(c().mark((function e(t,r,n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n();case 3:h(p(o[t].success,{count:r}),"success"),e.next=10;break;case 6:throw e.prev=6,e.t0=e.catch(0),h(p(o[t].error,{count:r}),"error"),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,6]])}))),function(e,t,r){return y.apply(this,arguments)})},{key:"performAction",value:(m=s(c().mark((function n(a,o,i){var u,s,l,d,f,h,p;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:u=i.wasManuallyMarkedAsRead,s=i.changeCategoriesPatch,l=i.mangaIdToMigrateTo,d=i.downloadAhead,f=i.onlyUnread,h=i.size,p=r(i,e),n.t0=a,n.next="download"===n.t0?4:"delete"===n.t0?5:"mark_as_read"===n.t0?6:"mark_as_unread"===n.t0?7:"remove_from_library"===n.t0?8:"change_categories"===n.t0?9:"migrate"===n.t0?10:11;break;case 4:return n.abrupt("return",t.downloadChapters(o,{downloadAhead:d,onlyUnread:f,size:h}));case 5:return n.abrupt("return",t.deleteChapters(o));case 6:return n.abrupt("return",t.markAsRead(o,u));case 7:return n.abrupt("return",t.markAsUnread(o));case 8:return n.abrupt("return",t.removeFromLibrary(o));case 9:return n.abrupt("return",t.changeCategories(o,s));case 10:return n.abrupt("return",t.migrate(o[0],l,p));case 11:throw new Error('Mangas::performAction: unknown action "'.concat(a,'"'));case 12:case"end":return n.stop()}}),n)}))),function(e,t,r){return m.apply(this,arguments)})}]);var m,y,v,b,w,k,x,C,_,E,L,M,S}();t("M",m)}}}))}();
