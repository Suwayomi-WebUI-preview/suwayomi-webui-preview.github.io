!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}System.register(["./index-legacy-Bq0DoeYa.js"],(function(t,n){"use strict";var r,a;return{setters:[function(e){r=e.g,a=e.d,e.c}],execute:function(){function n(e,t){for(var n=function(){var n=t[r];if("string"!=typeof n&&!Array.isArray(n)){var a=function(t){if("default"!==t&&!(t in e)){var r=Object.getOwnPropertyDescriptor(n,t);r&&Object.defineProperty(e,t,r.get?r:{enumerable:!0,get:function(){return n[t]}})}};for(var u in n)a(u)}},r=0;r<t.length;r++)n();return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var u={exports:{}};!function(t,n){t.exports=function(t){function n(t){return t&&"object"==e(t)&&"default"in t?t:{default:t}}var r=n(t);function a(e,t,n,r){var a={s:["mõne sekundi","mõni sekund","paar sekundit"],m:["ühe minuti","üks minut"],mm:["%d minuti","%d minutit"],h:["ühe tunni","tund aega","üks tund"],hh:["%d tunni","%d tundi"],d:["ühe päeva","üks päev"],M:["kuu aja","kuu aega","üks kuu"],MM:["%d kuu","%d kuud"],y:["ühe aasta","aasta","üks aasta"],yy:["%d aasta","%d aastat"]};return t?(a[n][2]?a[n][2]:a[n][1]).replace("%d",e):(r?a[n][0]:a[n][1]).replace("%d",e)}var u={name:"et",weekdays:"pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),weekdaysShort:"P_E_T_K_N_R_L".split("_"),weekdaysMin:"P_E_T_K_N_R_L".split("_"),months:"jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),monthsShort:"jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),ordinal:function(e){return e+"."},weekStart:1,relativeTime:{future:"%s pärast",past:"%s tagasi",s:a,m:a,mm:a,h:a,hh:a,d:a,dd:"%d päeva",M:a,MM:a,y:a,yy:a},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"}};return r.default.locale(u,null,!0),u}(a)}(u);var i=u.exports;t("e",n({__proto__:null,default:r(i)},[i]))}}}))}();
