import{b2 as M,bW as j,bn as Y}from"./index-D6RYBNhe.js";function b(i,c){for(var s=0;s<c.length;s++){const o=c[s];if(typeof o!="string"&&!Array.isArray(o)){for(const u in o)if(u!=="default"&&!(u in i)){const m=Object.getOwnPropertyDescriptor(o,u);m&&Object.defineProperty(i,u,m.get?m:{enumerable:!0,get:()=>o[u]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}var d={exports:{}};(function(i,c){(function(s,o){i.exports=o(j)})(Y,function(s){function o(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var u=o(s);function m(e){return e%100==2}function _(e){return e%100==3||e%100==4}function n(e,t,f,r){var a=e+" ";switch(f){case"s":return t||r?"nekaj sekund":"nekaj sekundami";case"m":return t?"ena minuta":"eno minuto";case"mm":return m(e)?a+(t||r?"minuti":"minutama"):_(e)?a+(t||r?"minute":"minutami"):a+(t||r?"minut":"minutami");case"h":return t?"ena ura":"eno uro";case"hh":return m(e)?a+(t||r?"uri":"urama"):_(e)?a+(t||r?"ure":"urami"):a+(t||r?"ur":"urami");case"d":return t||r?"en dan":"enim dnem";case"dd":return m(e)?a+(t||r?"dneva":"dnevoma"):a+(t||r?"dni":"dnevi");case"M":return t||r?"en mesec":"enim mesecem";case"MM":return m(e)?a+(t||r?"meseca":"mesecema"):_(e)?a+(t||r?"mesece":"meseci"):a+(t||r?"mesecev":"meseci");case"y":return t||r?"eno leto":"enim letom";case"yy":return m(e)?a+(t||r?"leti":"letoma"):_(e)?a+(t||r?"leta":"leti"):a+(t||r?"let":"leti")}}var l={name:"sl",weekdays:"nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),months:"januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),weekStart:1,weekdaysShort:"ned._pon._tor._sre._čet._pet._sob.".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),weekdaysMin:"ne_po_to_sr_če_pe_so".split("_"),ordinal:function(e){return e+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm",l:"D. M. YYYY"},relativeTime:{future:"čez %s",past:"pred %s",s:n,m:n,mm:n,h:n,hh:n,d:n,dd:n,M:n,MM:n,y:n,yy:n}};return u.default.locale(l,null,!0),l})})(d);var p=d.exports;const y=M(p),k=b({__proto__:null,default:y},[p]);export{k as s};
