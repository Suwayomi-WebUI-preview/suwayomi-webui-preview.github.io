!function(){function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./index-legacy-BC5YaOB9.js","./MutableListSetting-legacy-BPA1L0n-.js","./Info-legacy-CgSJdVR7.js","./TextSetting-legacy-Bt7owWnC.js","./PasswordTextField-legacy-90sJGMfw.js"],(function(t,n){"use strict";var r,a,i,l,c,o,s,u,d,f,g,v,b,m,y,h,j,p,x;return{setters:[function(e){r=e.u,a=e.f,i=e.h,l=e.q,c=e.bX,o=e.j,s=e.l,u=e.E,d=e.m,f=e.n,g=e.w,v=e.bY,b=e.aX,m=e.aM,y=e.bZ,h=e.aK,j=e.Y,p=e.o},function(e){x=e.M},null,null,null],execute:function(){t("DeviceSetting",(function(){var t=r().t,n=a(),A=n.setTitle,S=n.setAction;i.useLayoutEffect((function(){return A(t("settings.device.title.device")),S(null),function(){A(""),S(null)}}),[t]);var _=l(),I=_.metadata,T=_.settings.devices,w=_.loading,C=_.request,E=C.error,M=C.refetch,D=i.useContext(c),q=D.activeDevice,L=D.setActiveDevice;return w?o.jsx(s,{}):E?o.jsx(u,{message:t("global.error.label.failed_to_load_data"),messageExtra:d(E),retry:function(){return M().catch(f())}}):o.jsxs(g,{sx:{pt:0},children:[o.jsx(x,{settingName:t("settings.device.devices.label.title"),description:t("settings.device.devices.label.description"),handleChange:function(n){var r,a;r="devices",a=e(new Set([v].concat(e(n)).filter((function(e){return e!==t("global.label.default")})))),I&&(!a.includes(q)&&L(v),j(r,a).catch((function(e){return p(t("global.error.label.failed_to_save_changes"),"error",d(e))})))},valueInfos:T.map((function(e){return[e===v?t("global.label.default"):e,{mutable:!1,deletable:e!==v}]})),addItemButtonTitle:t("global.button.create"),validateItem:function(e){return e.length<=16&&!!e.match(/^[a-zA-Z0-9\-_]+$/g)},placeholder:t("settings.device.label.placeholder")}),o.jsxs(b,{children:[o.jsx(m,{primary:t("settings.device.active_device.label.title"),secondary:t("settings.device.active_device.label.description")}),o.jsx(y,{value:q,onChange:function(e){var t=e.target.value;return L(t)},children:T.map((function(e){return o.jsx(h,{value:e,children:e===v?t("global.label.default"):e},e)}))})]})]})}))}}}))}();
