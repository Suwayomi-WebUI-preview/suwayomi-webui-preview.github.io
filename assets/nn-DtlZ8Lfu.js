import{df as d,cn as m}from"./index-BBxBRE3D.js";function f(o,_){for(var n=0;n<_.length;n++){const e=_[n];if(typeof e!="string"&&!Array.isArray(e)){for(const t in e)if(t!=="default"&&!(t in o)){const a=Object.getOwnPropertyDescriptor(e,t);a&&Object.defineProperty(o,t,a.get?a:{enumerable:!0,get:()=>e[t]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}var s={exports:{}},l=s.exports,i;function p(){return i||(i=1,function(o,_){(function(n,e){o.exports=e(d())})(l,function(n){function e(r){return r&&typeof r=="object"&&"default"in r?r:{default:r}}var t=e(n),a={name:"nn",weekdays:"sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),weekdaysShort:"sun_mån_tys_ons_tor_fre_lau".split("_"),weekdaysMin:"su_må_ty_on_to_fr_la".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),ordinal:function(r){return r+"."},weekStart:1,relativeTime:{future:"om %s",past:"for %s sidan",s:"nokre sekund",m:"eitt minutt",mm:"%d minutt",h:"ein time",hh:"%d timar",d:"ein dag",dd:"%d dagar",M:"ein månad",MM:"%d månadar",y:"eitt år",yy:"%d år"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] H:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"}};return t.default.locale(a,null,!0),a})}(s)),s.exports}var u=p();const c=m(u),M=f({__proto__:null,default:c},[u]);export{M as n};
