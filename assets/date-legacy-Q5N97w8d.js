System.register(["./index-legacy-BeLCHtXl.js"],(function(t,e){"use strict";var a;return{setters:[function(t){a=t.F}],execute:function(){var e=new Intl.DateTimeFormat(navigator.language,{hour:"2-digit",minute:"2-digit"}),n=new Intl.DateTimeFormat(navigator.language,{year:"numeric",month:"2-digit",day:"2-digit"}),i=(t("d",new Intl.DateTimeFormat(navigator.language,{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"})),t("e",(function(t){var e=new Date(0);return e.setUTCSeconds(t),e})),function(t,e){return t.getDate()===e.getDate()&&t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()});t("g",(function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],g=t instanceof Date?t:new Date(t),o=new Date,l=new Date;l.setDate(o.getDate()-1);var u=i(o,g),d=i(l,g),m=u||d?e.format(g):"";return u?r?a("global.date.label.today_at",{timeString:m}):a("global.date.label.today"):d?r?a("global.date.label.yesterday_at",{timeString:m}):a("global.date.label.yesterday"):n.format(g)}))}}}));