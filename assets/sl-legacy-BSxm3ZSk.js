!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}System.register(["./index-legacy-D9Ga1UuC.js"],(function(t,n){"use strict";var r,o;return{setters:[function(e){r=e.bj,o=e.ct,e.bO}],execute:function(){function n(e,t){for(var n=function(){var n=t[r];if("string"!=typeof n&&!Array.isArray(n)){var o=function(t){if("default"!==t&&!(t in e)){var r=Object.getOwnPropertyDescriptor(n,t);r&&Object.defineProperty(e,t,r.get?r:{enumerable:!0,get:function(){return n[t]}})}};for(var u in n)o(u)}},r=0;r<t.length;r++)n();return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var u={exports:{}};!function(t){t.exports=function(t){function n(t){return t&&"object"==e(t)&&"default"in t?t:{default:t}}var r=n(t);function o(e){return e%100==2}function u(e){return e%100==3||e%100==4}function a(e,t,n,r){var a=e+" ";switch(n){case"s":return t||r?"nekaj sekund":"nekaj sekundami";case"m":return t?"ena minuta":"eno minuto";case"mm":return o(e)?a+(t||r?"minuti":"minutama"):u(e)?a+(t||r?"minute":"minutami"):a+(t||r?"minut":"minutami");case"h":return t?"ena ura":"eno uro";case"hh":return o(e)?a+(t||r?"uri":"urama"):u(e)?a+(t||r?"ure":"urami"):a+(t||r?"ur":"urami");case"d":return t||r?"en dan":"enim dnem";case"dd":return o(e)?a+(t||r?"dneva":"dnevoma"):a+(t||r?"dni":"dnevi");case"M":return t||r?"en mesec":"enim mesecem";case"MM":return o(e)?a+(t||r?"meseca":"mesecema"):u(e)?a+(t||r?"mesece":"meseci"):a+(t||r?"mesecev":"meseci");case"y":return t||r?"eno leto":"enim letom";case"yy":return o(e)?a+(t||r?"leti":"letoma"):u(e)?a+(t||r?"leta":"leti"):a+(t||r?"let":"leti")}}var i={name:"sl",weekdays:"nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),months:"januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),weekStart:1,weekdaysShort:"ned._pon._tor._sre._čet._pet._sob.".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),weekdaysMin:"ne_po_to_sr_če_pe_so".split("_"),ordinal:function(e){return e+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm",l:"D. M. YYYY"},relativeTime:{future:"čez %s",past:"pred %s",s:a,m:a,mm:a,h:a,hh:a,d:a,dd:a,M:a,MM:a,y:a,yy:a}};return r.default.locale(i,null,!0),i}(o)}(u);var a=u.exports;t("s",n({__proto__:null,default:r(a)},[a]))}}}))}();
