import{df as p,cn as f}from"./index-BBxBRE3D.js";function D(a,n){for(var r=0;r<n.length;r++){const t=n[r];if(typeof t!="string"&&!Array.isArray(t)){for(const s in t)if(s!=="default"&&!(s in a)){const i=Object.getOwnPropertyDescriptor(t,s);i&&Object.defineProperty(a,s,i.get?i:{enumerable:!0,get:()=>t[s]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var l={exports:{}},v=l.exports,Y;function L(){return Y||(Y=1,function(a,n){(function(r,t){a.exports=t(p())})(v,function(r){function t(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var s=t(r),i="sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),d="sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),m=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/,M=function(e,u){return m.test(u)?i[e.month()]:d[e.month()]};M.s=d,M.f=i;var o={name:"lt",weekdays:"sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),weekdaysShort:"sek_pir_ant_tre_ket_pen_šeš".split("_"),weekdaysMin:"s_p_a_t_k_pn_š".split("_"),months:M,monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),ordinal:function(e){return e+"."},weekStart:1,relativeTime:{future:"už %s",past:"prieš %s",s:"kelias sekundes",m:"minutę",mm:"%d minutes",h:"valandą",hh:"%d valandas",d:"dieną",dd:"%d dienas",M:"mėnesį",MM:"%d mėnesius",y:"metus",yy:"%d metus"},format:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"}};return s.default.locale(o,null,!0),o})}(l)),l.exports}var _=L();const g=f(_),c=D({__proto__:null,default:g},[_]);export{c as l};
