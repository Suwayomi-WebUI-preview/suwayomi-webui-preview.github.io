import{df as c,cn as l}from"./index-BBxBRE3D.js";function m(o,u){for(var n=0;n<u.length;n++){const e=u[n];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in o)){const _=Object.getOwnPropertyDescriptor(e,r);_&&Object.defineProperty(o,r,_.get?_:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}var s={exports:{}},M=s.exports,f;function Y(){return f||(f=1,function(o,u){(function(n,e){o.exports=e(c())})(M,function(n){function e(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var r=e(n),_={1:"১",2:"২",3:"৩",4:"৪",5:"৫",6:"৬",7:"৭",8:"৮",9:"৯",0:"০"},p={"১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9","০":"0"},i={name:"bn",weekdays:"রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),months:"জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),weekdaysShort:"রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),monthsShort:"জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),weekdaysMin:"রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"),preparse:function(t){return t.replace(/[১২৩৪৫৬৭৮৯০]/g,function(a){return p[a]})},postformat:function(t){return t.replace(/\d/g,function(a){return _[a]})},ordinal:function(t){return t},formats:{LT:"A h:mm সময়",LTS:"A h:mm:ss সময়",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm সময়",LLLL:"dddd, D MMMM YYYY, A h:mm সময়"},relativeTime:{future:"%s পরে",past:"%s আগে",s:"কয়েক সেকেন্ড",m:"এক মিনিট",mm:"%d মিনিট",h:"এক ঘন্টা",hh:"%d ঘন্টা",d:"এক দিন",dd:"%d দিন",M:"এক মাস",MM:"%d মাস",y:"এক বছর",yy:"%d বছর"}};return r.default.locale(i,null,!0),i})}(s)),s.exports}var d=Y();const y=l(d),h=m({__proto__:null,default:y},[d]);export{h as b};
