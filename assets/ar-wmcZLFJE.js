import{g as d,r as m,c as p}from"./index-rBvuIAFq.js";function M(a,s){for(var n=0;n<s.length;n++){const r=s[n];if(typeof r!="string"&&!Array.isArray(r)){for(const t in r)if(t!=="default"&&!(t in a)){const o=Object.getOwnPropertyDescriptor(r,t);o&&Object.defineProperty(a,t,o.get?o:{enumerable:!0,get:()=>r[t]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var i={exports:{}};(function(a,s){(function(n,r){a.exports=r(m())})(p,function(n){function r(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var t=r(n),o="يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),c={1:"١",2:"٢",3:"٣",4:"٤",5:"٥",6:"٦",7:"٧",8:"٨",9:"٩",0:"٠"},l={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"},u={name:"ar",weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),months:o,monthsShort:o,weekStart:6,meridiem:function(e){return e>12?"م":"ص"},relativeTime:{future:"بعد %s",past:"منذ %s",s:"ثانية واحدة",m:"دقيقة واحدة",mm:"%d دقائق",h:"ساعة واحدة",hh:"%d ساعات",d:"يوم واحد",dd:"%d أيام",M:"شهر واحد",MM:"%d أشهر",y:"عام واحد",yy:"%d أعوام"},preparse:function(e){return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g,function(_){return l[_]}).replace(/،/g,",")},postformat:function(e){return e.replace(/\d/g,function(_){return c[_]}).replace(/,/g,"،")},ordinal:function(e){return e},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/‏M/‏YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"}};return t.default.locale(u,null,!0),u})})(i);var f=i.exports;const Y=d(f),g=M({__proto__:null,default:Y},[f]);export{g as a};
