import{dj as m,ct as f}from"./index-BUJyb_rr.js";function p(o,u){for(var n=0;n<u.length;n++){const e=u[n];if(typeof e!="string"&&!Array.isArray(e)){for(const t in e)if(t!=="default"&&!(t in o)){const a=Object.getOwnPropertyDescriptor(e,t);a&&Object.defineProperty(o,t,a.get?a:{enumerable:!0,get:()=>e[t]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}var s={exports:{}},c=s.exports,i;function l(){return i||(i=1,function(o,u){(function(n,e){o.exports=e(m())})(c,function(n){function e(r){return r&&typeof r=="object"&&"default"in r?r:{default:r}}var t=e(n),a={name:"en-nz",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),weekStart:1,weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),ordinal:function(r){var _=["th","st","nd","rd"],d=r%100;return"["+r+(_[(d-20)%10]||_[d]||_[0])+"]"},formats:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"}};return t.default.locale(a,null,!0),a})}(s)),s.exports}var y=l();const M=f(y),Y=p({__proto__:null,default:M},[y]);export{Y as e};