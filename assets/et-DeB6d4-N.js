import{df as c,cn as v}from"./index-BBxBRE3D.js";function M(n,_){for(var u=0;u<_.length;u++){const a=_[u];if(typeof a!="string"&&!Array.isArray(a)){for(const r in a)if(r!=="default"&&!(r in n)){const e=Object.getOwnPropertyDescriptor(a,r);e&&Object.defineProperty(n,r,e.get?e:{enumerable:!0,get:()=>a[r]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var o={exports:{}},k=o.exports,p;function y(){return p||(p=1,function(n,_){(function(u,a){n.exports=a(c())})(k,function(u){function a(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var r=a(u);function e(t,l,s,f){var i={s:["mõne sekundi","mõni sekund","paar sekundit"],m:["ühe minuti","üks minut"],mm:["%d minuti","%d minutit"],h:["ühe tunni","tund aega","üks tund"],hh:["%d tunni","%d tundi"],d:["ühe päeva","üks päev"],M:["kuu aja","kuu aega","üks kuu"],MM:["%d kuu","%d kuud"],y:["ühe aasta","aasta","üks aasta"],yy:["%d aasta","%d aastat"]};return l?(i[s][2]?i[s][2]:i[s][1]).replace("%d",t):(f?i[s][0]:i[s][1]).replace("%d",t)}var d={name:"et",weekdays:"pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),weekdaysShort:"P_E_T_K_N_R_L".split("_"),weekdaysMin:"P_E_T_K_N_R_L".split("_"),months:"jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),monthsShort:"jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),ordinal:function(t){return t+"."},weekStart:1,relativeTime:{future:"%s pärast",past:"%s tagasi",s:e,m:e,mm:e,h:e,hh:e,d:e,dd:"%d päeva",M:e,MM:e,y:e,yy:e},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"}};return r.default.locale(d,null,!0),d})}(o)),o.exports}var m=y();const h=v(m),j=M({__proto__:null,default:h},[m]);export{j as e};
