import{aP as v,b0 as b}from"./index-Zl59rTnr.js";import{a as g}from"./dayjs.min-ByUHsGI2.js";function D(i,m){for(var o=0;o<m.length;o++){const _=m[o];if(typeof _!="string"&&!Array.isArray(_)){for(const r in _)if(r!=="default"&&!(r in i)){const n=Object.getOwnPropertyDescriptor(_,r);n&&Object.defineProperty(i,r,n.get?n:{enumerable:!0,get:()=>_[r]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}var h={exports:{}};(function(i,m){(function(o,_){i.exports=_(g)})(b,function(o){function _(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var r=_(o),n="января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),p="январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),d="янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),M="янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"),c=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function s(t,a,Y){var e,u;return Y==="m"?a?"минута":"минуту":t+" "+(e=+t,u={mm:a?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"}[Y].split("_"),e%10==1&&e%100!=11?u[0]:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?u[1]:u[2])}var f=function(t,a){return c.test(a)?n[t.month()]:p[t.month()]};f.s=p,f.f=n;var l=function(t,a){return c.test(a)?d[t.month()]:M[t.month()]};l.s=M,l.f=d;var y={name:"ru",weekdays:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),weekdaysShort:"вск_пнд_втр_срд_чтв_птн_сбт".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),months:f,monthsShort:l,weekStart:1,yearStart:4,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., H:mm",LLLL:"dddd, D MMMM YYYY г., H:mm"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:s,mm:s,h:"час",hh:s,d:"день",dd:s,M:"месяц",MM:s,y:"год",yy:s},ordinal:function(t){return t},meridiem:function(t){return t<4?"ночи":t<12?"утра":t<17?"дня":"вечера"}};return r.default.locale(y,null,!0),y})})(h);var L=h.exports;const j=v(L),k=D({__proto__:null,default:j},[L]);export{k as r};
