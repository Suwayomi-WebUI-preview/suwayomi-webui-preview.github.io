import{g as f,r as m,c as l}from"./index-e0Qo9gO6.js";function d(_,i){for(var s=0;s<i.length;s++){const o=i[s];if(typeof o!="string"&&!Array.isArray(o)){for(const u in o)if(u!=="default"&&!(u in _)){const a=Object.getOwnPropertyDescriptor(o,u);a&&Object.defineProperty(_,u,a.get?a:{enumerable:!0,get:()=>o[u]})}}}return Object.freeze(Object.defineProperty(_,Symbol.toStringTag,{value:"Module"}))}var c={exports:{}};(function(_,i){(function(s,o){_.exports=o(m())})(l,function(s){function o(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var u=o(s),a={name:"hu",weekdays:"vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),weekdaysShort:"vas_hét_kedd_sze_csüt_pén_szo".split("_"),weekdaysMin:"v_h_k_sze_cs_p_szo".split("_"),months:"január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),monthsShort:"jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),ordinal:function(e){return e+"."},weekStart:1,relativeTime:{future:"%s múlva",past:"%s",s:function(e,t,n,r){return"néhány másodperc"+(r||t?"":"e")},m:function(e,t,n,r){return"egy perc"+(r||t?"":"e")},mm:function(e,t,n,r){return e+" perc"+(r||t?"":"e")},h:function(e,t,n,r){return"egy "+(r||t?"óra":"órája")},hh:function(e,t,n,r){return e+" "+(r||t?"óra":"órája")},d:function(e,t,n,r){return"egy "+(r||t?"nap":"napja")},dd:function(e,t,n,r){return e+" "+(r||t?"nap":"napja")},M:function(e,t,n,r){return"egy "+(r||t?"hónap":"hónapja")},MM:function(e,t,n,r){return e+" "+(r||t?"hónap":"hónapja")},y:function(e,t,n,r){return"egy "+(r||t?"év":"éve")},yy:function(e,t,n,r){return e+" "+(r||t?"év":"éve")}},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY. MMMM D.",LLL:"YYYY. MMMM D. H:mm",LLLL:"YYYY. MMMM D., dddd H:mm"}};return u.default.locale(a,null,!0),a})})(c);var p=c.exports;const h=f(p),y=d({__proto__:null,default:h},[p]);export{y as h};
