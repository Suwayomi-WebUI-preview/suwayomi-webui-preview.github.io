!function(){function t(_){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(_)}System.register(["./index-legacy-D9Ga1UuC.js"],(function(_,e){"use strict";var r,n;return{setters:[function(t){r=t.bj,n=t.ct,t.bO}],execute:function(){function e(t,_){for(var e=function(){var e=_[r];if("string"!=typeof e&&!Array.isArray(e)){var n=function(_){if("default"!==_&&!(_ in t)){var r=Object.getOwnPropertyDescriptor(e,_);r&&Object.defineProperty(t,_,r.get?r:{enumerable:!0,get:function(){return e[_]}})}};for(var o in e)n(o)}},r=0;r<_.length;r++)e();return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var o={exports:{}};!function(_){_.exports=function(_){function e(_){return _&&"object"==t(_)&&"default"in _?_:{default:_}}var r=e(_),n="января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),o="январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),i="янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),u="янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"),f=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function s(t,_,e){var r,n;return"m"===e?_?"минута":"минуту":t+" "+(r=+t,n={mm:_?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"}[e].split("_"),r%10==1&&r%100!=11?n[0]:r%10>=2&&r%10<=4&&(r%100<10||r%100>=20)?n[1]:n[2])}var a=function(t,_){return f.test(_)?n[t.month()]:o[t.month()]};a.s=o,a.f=n;var m=function(t,_){return f.test(_)?i[t.month()]:u[t.month()]};m.s=u,m.f=i;var c={name:"ru",weekdays:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),weekdaysShort:"вск_пнд_втр_срд_чтв_птн_сбт".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),months:a,monthsShort:m,weekStart:1,yearStart:4,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., H:mm",LLLL:"dddd, D MMMM YYYY г., H:mm"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:s,mm:s,h:"час",hh:s,d:"день",dd:s,M:"месяц",MM:s,y:"год",yy:s},ordinal:function(t){return t},meridiem:function(t){return t<4?"ночи":t<12?"утра":t<17?"дня":"вечера"}};return r.default.locale(c,null,!0),c}(n)}(o);var i=o.exports;_("r",e({__proto__:null,default:r(i)},[i]))}}}))}();
