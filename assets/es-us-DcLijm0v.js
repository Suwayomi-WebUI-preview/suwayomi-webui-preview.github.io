import{df as d,cn as m}from"./index-BBxBRE3D.js";function l(n,u){for(var t=0;t<u.length;t++){const e=u[t];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in n)){const o=Object.getOwnPropertyDescriptor(e,r);o&&Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var a={exports:{}},f=a.exports,_;function c(){return _||(_=1,function(n,u){(function(t,e){n.exports=e(d())})(f,function(t){function e(s){return s&&typeof s=="object"&&"default"in s?s:{default:s}}var r=e(t),o={name:"es-us",weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(s){return s+"º"},formats:{LT:"h:mm A",LTS:"h:mm:ss A",L:"MM/DD/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY h:mm A",LLLL:"dddd, D [de] MMMM [de] YYYY h:mm A"}};return r.default.locale(o,null,!0),o})}(a)),a.exports}var i=c();const p=m(i),b=l({__proto__:null,default:p},[i]);export{b as e};
