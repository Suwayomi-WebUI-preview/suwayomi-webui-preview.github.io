import{df as d,cn as m}from"./index-BBxBRE3D.js";function l(n,_){for(var o=0;o<_.length;o++){const e=_[o];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in n)){const s=Object.getOwnPropertyDescriptor(e,r);s&&Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var a={exports:{}},f=a.exports,u;function c(){return u||(u=1,function(n,_){(function(o,e){n.exports=e(d())})(f,function(o){function e(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var r=e(o),s={name:"es-mx",weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(t){return t+"º"},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"}};return r.default.locale(s,null,!0),s})}(a)),a.exports}var i=c();const p=m(i),b=l({__proto__:null,default:p},[i]);export{b as e};
