!function(){function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},r(t)}System.register(["./index-legacy-D9Ga1UuC.js"],(function(t,n){"use strict";var u,e;return{setters:[function(r){u=r.bj,e=r.ct,r.bO}],execute:function(){function n(r,t){for(var n=function(){var n=t[u];if("string"!=typeof n&&!Array.isArray(n)){var e=function(t){if("default"!==t&&!(t in r)){var u=Object.getOwnPropertyDescriptor(n,t);u&&Object.defineProperty(r,t,u.get?u:{enumerable:!0,get:function(){return n[t]}})}};for(var a in n)e(a)}},u=0;u<t.length;u++)n();return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var a={exports:{}};!function(t){t.exports=function(t){function n(t){return t&&"object"==r(t)&&"default"in t?t:{default:t}}var u=n(t),e={s:["nokkrar sekúndur","nokkrar sekúndur","nokkrum sekúndum"],m:["mínúta","mínútu","mínútu"],mm:["mínútur","mínútur","mínútum"],h:["klukkustund","klukkustund","klukkustund"],hh:["klukkustundir","klukkustundir","klukkustundum"],d:["dagur","dag","degi"],dd:["dagar","daga","dögum"],M:["mánuður","mánuð","mánuði"],MM:["mánuðir","mánuði","mánuðum"],y:["ár","ár","ári"],yy:["ár","ár","árum"]};function a(r,t,n,u){var a=function(r,t,n,u){var a=u?0:n?1:2,o=2===r.length&&t%10==1?r[0]:r,i=e[o][a];return 1===r.length?i:"%d "+i}(n,r,u,t);return a.replace("%d",r)}var o={name:"is",weekdays:"sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),months:"janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),weekStart:1,weekdaysShort:"sun_mán_þri_mið_fim_fös_lau".split("_"),monthsShort:"jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),weekdaysMin:"Su_Má_Þr_Mi_Fi_Fö_La".split("_"),ordinal:function(r){return r},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] H:mm",LLLL:"dddd, D. MMMM YYYY [kl.] H:mm"},relativeTime:{future:"eftir %s",past:"fyrir %s síðan",s:a,m:a,mm:a,h:a,hh:a,d:a,dd:a,M:a,MM:a,y:a,yy:a}};return u.default.locale(o,null,!0),o}(e)}(a);var o=a.exports;t("i",n({__proto__:null,default:u(o)},[o]))}}}))}();
