import{g as m,r as f,c}from"./index-uK60SsyP.js";function M(n,s){for(var r=0;r<s.length;r++){const e=s[r];if(typeof e!="string"&&!Array.isArray(e)){for(const a in e)if(a!=="default"&&!(a in n)){const o=Object.getOwnPropertyDescriptor(e,a);o&&Object.defineProperty(n,a,o.get?o:{enumerable:!0,get:()=>e[a]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var l={exports:{}};(function(n,s){(function(r,e){n.exports=e(f())})(c,function(r){function e(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var a=e(r),o="siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),i="siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_"),d=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/,_=function(t,j){return d.test(j)?o[t.month()]:i[t.month()]};_.s=i,_.f=o;var u={name:"hr",weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),months:_,monthsShort:"sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},relativeTime:{future:"za %s",past:"prije %s",s:"sekunda",m:"minuta",mm:"%d minuta",h:"sat",hh:"%d sati",d:"dan",dd:"%d dana",M:"mjesec",MM:"%d mjeseci",y:"godina",yy:"%d godine"},ordinal:function(t){return t+"."}};return a.default.locale(u,null,!0),u})})(l);var p=l.exports;const v=m(p),Y=M({__proto__:null,default:v},[p]);export{Y as h};
