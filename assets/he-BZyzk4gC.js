import{dj as i,ct as u}from"./index-BUJyb_rr.js";function f(o,s){for(var Y=0;Y<s.length;Y++){const r=s[Y];if(typeof r!="string"&&!Array.isArray(r)){for(const M in r)if(M!=="default"&&!(M in o)){const _=Object.getOwnPropertyDescriptor(r,M);_&&Object.defineProperty(o,M,_.get?_:{enumerable:!0,get:()=>r[M]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}var l={exports:{}},H=l.exports,m;function p(){return m||(m=1,function(o,s){(function(Y,r){o.exports=r(i())})(H,function(Y){function r(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var M=r(Y),_={s:"מספר שניות",ss:"%d שניות",m:"דקה",mm:"%d דקות",h:"שעה",hh:"%d שעות",hh2:"שעתיים",d:"יום",dd:"%d ימים",dd2:"יומיים",M:"חודש",MM:"%d חודשים",MM2:"חודשיים",y:"שנה",yy:"%d שנים",yy2:"שנתיים"};function e(t,c,n){return(_[n+(t===2?"2":"")]||_[n]).replace("%d",t)}var d={name:"he",weekdays:"ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),weekdaysShort:"א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),weekdaysMin:"א׳_ב׳_ג׳_ד׳_ה׳_ו_ש׳".split("_"),months:"ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),monthsShort:"ינו_פבר_מרץ_אפר_מאי_יונ_יול_אוג_ספט_אוק_נוב_דצמ".split("_"),relativeTime:{future:"בעוד %s",past:"לפני %s",s:e,m:e,mm:e,h:e,hh:e,d:e,dd:e,M:e,MM:e,y:e,yy:e},ordinal:function(t){return t},format:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [ב]MMMM YYYY",LLL:"D [ב]MMMM YYYY HH:mm",LLLL:"dddd, D [ב]MMMM YYYY HH:mm",l:"D/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [ב]MMMM YYYY",LLL:"D [ב]MMMM YYYY HH:mm",LLLL:"dddd, D [ב]MMMM YYYY HH:mm",l:"D/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"}};return M.default.locale(d,null,!0),d})}(l)),l.exports}var a=p();const L=u(a),D=f({__proto__:null,default:L},[a]);export{D as h};