import{dk as d,cu as f}from"./index-D29hNJCE.js";function m(o,s){for(var a=0;a<s.length;a++){const e=s[a];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in o)){const n=Object.getOwnPropertyDescriptor(e,r);n&&Object.defineProperty(o,r,n.get?n:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}var _={exports:{}},p=_.exports,u;function l(){return u||(u=1,function(o,s){(function(a,e){o.exports=e(d())})(p,function(a){function e(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var r=e(a),n={name:"af",weekdays:"Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),months:"Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),weekStart:1,weekdaysShort:"Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),monthsShort:"Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),weekdaysMin:"So_Ma_Di_Wo_Do_Vr_Sa".split("_"),ordinal:function(t){return t},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},relativeTime:{future:"oor %s",past:"%s gelede",s:"'n paar sekondes",m:"'n minuut",mm:"%d minute",h:"'n uur",hh:"%d ure",d:"'n dag",dd:"%d dae",M:"'n maand",MM:"%d maande",y:"'n jaar",yy:"%d jaar"}};return r.default.locale(n,null,!0),n})}(_)),_.exports}var i=l();const M=f(i),g=m({__proto__:null,default:M},[i]);export{g as a};