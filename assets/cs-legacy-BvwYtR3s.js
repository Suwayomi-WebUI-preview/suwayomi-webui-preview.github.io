!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}System.register(["./index-legacy-B5q6B0v3.js"],(function(t,n){"use strict";var r,o;return{setters:[function(e){r=e.bf,o=e.ca,e.bF}],execute:function(){function n(e,t){for(var n=function(){var n=t[r];if("string"!=typeof n&&!Array.isArray(n)){var o=function(t){if("default"!==t&&!(t in e)){var r=Object.getOwnPropertyDescriptor(n,t);r&&Object.defineProperty(e,t,r.get?r:{enumerable:!0,get:function(){return n[t]}})}};for(var u in n)o(u)}},r=0;r<t.length;r++)n();return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var u={exports:{}};!function(t,n){t.exports=function(t){function n(t){return t&&"object"==e(t)&&"default"in t?t:{default:t}}var r=n(t);function o(e){return e>1&&e<5&&1!=~~(e/10)}function u(e,t,n,r){var u=e+" ";switch(n){case"s":return t||r?"pár sekund":"pár sekundami";case"m":return t?"minuta":r?"minutu":"minutou";case"mm":return t||r?u+(o(e)?"minuty":"minut"):u+"minutami";case"h":return t?"hodina":r?"hodinu":"hodinou";case"hh":return t||r?u+(o(e)?"hodiny":"hodin"):u+"hodinami";case"d":return t||r?"den":"dnem";case"dd":return t||r?u+(o(e)?"dny":"dní"):u+"dny";case"M":return t||r?"měsíc":"měsícem";case"MM":return t||r?u+(o(e)?"měsíce":"měsíců"):u+"měsíci";case"y":return t||r?"rok":"rokem";case"yy":return t||r?u+(o(e)?"roky":"let"):u+"lety"}}var s={name:"cs",weekdays:"neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),weekdaysShort:"ne_po_út_st_čt_pá_so".split("_"),weekdaysMin:"ne_po_út_st_čt_pá_so".split("_"),months:"leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),monthsShort:"led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),weekStart:1,yearStart:4,ordinal:function(e){return e+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},relativeTime:{future:"za %s",past:"před %s",s:u,m:u,mm:u,h:u,hh:u,d:u,dd:u,M:u,MM:u,y:u,yy:u}};return r.default.locale(s,null,!0),s}(o)}(u);var s=u.exports;t("c",n({__proto__:null,default:r(s)},[s]))}}}))}();