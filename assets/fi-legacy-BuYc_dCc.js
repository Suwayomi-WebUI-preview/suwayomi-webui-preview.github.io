!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}System.register(["./index-legacy-BeLCHtXl.js"],(function(e,n){"use strict";var u,i;return{setters:[function(t){u=t.b2,i=t.bW,t.bn}],execute:function(){function n(t,e){for(var n=function(){var n=e[u];if("string"!=typeof n&&!Array.isArray(n)){var i=function(e){if("default"!==e&&!(e in t)){var u=Object.getOwnPropertyDescriptor(n,e);u&&Object.defineProperty(t,e,u.get?u:{enumerable:!0,get:function(){return n[e]}})}};for(var a in n)i(a)}},u=0;u<e.length;u++)n();return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var a={exports:{}};!function(e,n){e.exports=function(e){function n(e){return e&&"object"==t(e)&&"default"in e?e:{default:e}}var u=n(e);function i(t,e,n,u){var i={s:"muutama sekunti",m:"minuutti",mm:"%d minuuttia",h:"tunti",hh:"%d tuntia",d:"päivä",dd:"%d päivää",M:"kuukausi",MM:"%d kuukautta",y:"vuosi",yy:"%d vuotta",numbers:"nolla_yksi_kaksi_kolme_neljä_viisi_kuusi_seitsemän_kahdeksan_yhdeksän".split("_")},a={s:"muutaman sekunnin",m:"minuutin",mm:"%d minuutin",h:"tunnin",hh:"%d tunnin",d:"päivän",dd:"%d päivän",M:"kuukauden",MM:"%d kuukauden",y:"vuoden",yy:"%d vuoden",numbers:"nollan_yhden_kahden_kolmen_neljän_viiden_kuuden_seitsemän_kahdeksan_yhdeksän".split("_")},o=u&&!e?a:i,r=o[n];return t<10?r.replace("%d",o.numbers[t]):r.replace("%d",t)}var a={name:"fi",weekdays:"sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),weekdaysShort:"su_ma_ti_ke_to_pe_la".split("_"),weekdaysMin:"su_ma_ti_ke_to_pe_la".split("_"),months:"tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),monthsShort:"tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),ordinal:function(t){return t+"."},weekStart:1,yearStart:4,relativeTime:{future:"%s päästä",past:"%s sitten",s:i,m:i,mm:i,h:i,hh:i,d:i,dd:i,M:i,MM:i,y:i,yy:i},formats:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"D. MMMM[ta] YYYY",LLL:"D. MMMM[ta] YYYY, [klo] HH.mm",LLLL:"dddd, D. MMMM[ta] YYYY, [klo] HH.mm",l:"D.M.YYYY",ll:"D. MMM YYYY",lll:"D. MMM YYYY, [klo] HH.mm",llll:"ddd, D. MMM YYYY, [klo] HH.mm"}};return u.default.locale(a,null,!0),a}(i)}(a);var o=a.exports;e("f",n({__proto__:null,default:u(o)},[o]))}}}))}();