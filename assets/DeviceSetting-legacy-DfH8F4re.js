!function(){function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./index-legacy-BGeP1VCJ.js","./MutableListSetting-legacy-DzRXrRiK.js","./Select-legacy-CAFnqPh6.js","./Delete-legacy-BEqDH25N.js","./Info-legacy-DIfs54kJ.js","./TextSetting-legacy-DCWeK8Jr.js","./PasswordTextField-legacy-uTg2e71j.js","./TextField-legacy-cLTECR_K.js","./InputAdornment-legacy-SPp2z0L2.js"],(function(t,n){"use strict";var r,a,i,l,c,s,o,u,d,g,f,v,y,m,b,h,j,x;return{setters:[function(e){r=e.u,a=e.c,i=e.N,l=e.p,c=e.bv,s=e.j,o=e.g,u=e.E,d=e.h,g=e.k,f=e.bw,v=e.ax,y=e.a3,m=e.a1,b=e.bo,h=e.m},function(e){j=e.M},function(e){x=e.S},null,null,null,null,null,null],execute:function(){t("DeviceSetting",(function(){var t=r().t,n=a.useContext(i),p=n.setTitle,S=n.setAction;a.useEffect((function(){return p(t("settings.device.title.settings")),S(null),function(){p(""),S(null)}}),[t]);var A=l(),_=A.metadata,I=A.settings.devices,T=A.loading,w=A.request,C=w.error,D=w.refetch,E=a.useContext(c),M=E.activeDevice,F=E.setActiveDevice;return T?s.jsx(o,{}):C?s.jsx(u,{message:t("global.error.label.failed_to_load_data"),messageExtra:C.message,retry:function(){return D().catch(d())}}):s.jsxs(g,{sx:{pt:0},children:[s.jsx(j,{settingName:t("settings.device.devices.label.title"),description:t("settings.device.devices.label.description"),handleChange:function(n){var r,a;r="devices",a=e(new Set([f].concat(e(n)))),_&&(!a.includes(M)&&F(f),b(r,a).catch((function(){return h(t("global.error.label.failed_to_save_changes"),"error")})))},valueInfos:I.map((function(e){return[e,{mutable:!1,deletable:e!==f}]})),addItemButtonTitle:t("global.button.create"),validateItem:function(e){return e.length<=16&&!!e.match(/^[a-zA-Z0-9\-_]+$/g)},placeholder:t("settings.device.label.placeholder")}),s.jsxs(v,{children:[s.jsx(y,{primary:t("settings.device.active_device.label.title"),secondary:t("settings.device.active_device.label.description")}),s.jsx(x,{value:M,onChange:function(e){var t=e.target.value;return F(t)},children:I.map((function(e){return s.jsx(m,{value:e,children:e},e)}))})]})]})}))}}}))}();