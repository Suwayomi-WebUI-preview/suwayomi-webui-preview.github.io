!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}System.register(["./index-legacy-DKT95AOl.js"],(function(t,r){"use strict";var n,o;return{setters:[function(e){n=e.b2,o=e.bW,e.bn}],execute:function(){function r(e,t){for(var r=function(){var r=t[n];if("string"!=typeof r&&!Array.isArray(r)){var o=function(t){if("default"!==t&&!(t in e)){var n=Object.getOwnPropertyDescriptor(r,t);n&&Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})}};for(var a in r)o(a)}},n=0;n<t.length;n++)r();return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var a={exports:{}};!function(t,r){t.exports=function(t){function r(t){return t&&"object"==e(t)&&"default"in t?t:{default:t}}var n=r(t);function o(e){return e>1&&e<5&&1!=~~(e/10)}function a(e,t,r,n){var a=e+" ";switch(r){case"s":return t||n?"pár sekúnd":"pár sekundami";case"m":return t?"minúta":n?"minútu":"minútou";case"mm":return t||n?a+(o(e)?"minúty":"minút"):a+"minútami";case"h":return t?"hodina":n?"hodinu":"hodinou";case"hh":return t||n?a+(o(e)?"hodiny":"hodín"):a+"hodinami";case"d":return t||n?"deň":"dňom";case"dd":return t||n?a+(o(e)?"dni":"dní"):a+"dňami";case"M":return t||n?"mesiac":"mesiacom";case"MM":return t||n?a+(o(e)?"mesiace":"mesiacov"):a+"mesiacmi";case"y":return t||n?"rok":"rokom";case"yy":return t||n?a+(o(e)?"roky":"rokov"):a+"rokmi"}}var i={name:"sk",weekdays:"nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_št_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_št_pi_so".split("_"),months:"január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),monthsShort:"jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_"),weekStart:1,yearStart:4,ordinal:function(e){return e+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},relativeTime:{future:"za %s",past:"pred %s",s:a,m:a,mm:a,h:a,hh:a,d:a,dd:a,M:a,MM:a,y:a,yy:a}};return n.default.locale(i,null,!0),i}(o)}(a);var i=a.exports;t("s",r({__proto__:null,default:n(i)},[i]))}}}))}();
