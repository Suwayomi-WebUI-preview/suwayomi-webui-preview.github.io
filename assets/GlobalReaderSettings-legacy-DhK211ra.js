!function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a,u,i=[],o=!0,c=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;o=!1}else for(;!(o=(r=a.call(n)).done)&&(i.push(r.value),i.length!==t);o=!0);}catch(e){c=!0,l=e}finally{try{if(!o&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(c)throw l}}return i}}(e,n)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./index-legacy-7oZR41XK.js","./EmptyViewAbsoluteCentered-legacy-DyUB6z_Q.js","./ReaderSettingsTabs-legacy-Dro0O92B.js","./useAppTitle-legacy-CESHQ5UX.js","./TabsMenu-legacy-BuXqJEcb.js","./Tabs-legacy-_I3JmK4i.js","./Trans-legacy-D3XXNEcs.js","./Slider-legacy-DBzOSIo5.js","./CheckboxInput-legacy-BJpn_Wrp.js","./Checkbox-legacy-D5TWSvzL.js","./formControlState-legacy-eu0RN9F_.js","./useFormControl-legacy-BTo4r-pe.js","./SwitchBase-legacy-Bj4lapIR.js","./ListSubheader-legacy-B8051hSY.js","./Add-legacy-CExk75l4.js"],function(t,n){"use strict";var r,l,a,u,i,o,c,s,f,g,y,d;return{setters:[function(e){r=e.u,l=e.b,a=e.cE,u=e.j,i=e.e,o=e.g,c=e.f,s=e.cF,f=e.cG},function(e){g=e.E},function(e){y=e.R},function(e){d=e.u},null,null,null,null,null,null,null,null,null,null,null],execute:function(){t("GlobalReaderSettings",function(){var t=r().t;d(t("reader.settings.title.reader"));var n=e(l.useState(0),2),b=n[0],j=n[1],S=a(),m=S.settings,h=S.request,p=h.loading,v=h.error,A=h.refetch;return p?u.jsx(i,{}):v?u.jsx(g,{message:t("global.error.label.failed_to_load_data"),messageExtra:o(v),retry:function(){return A().catch(c())}}):u.jsx(y,{activeTab:b,setActiveTab:j,areDefaultSettings:!0,settings:m,updateSetting:function(e,t,n,r,l){return function(e,t,n,r){s.updateSetting(f,e,t,n,!0,r)}(e,t,n,l)},deleteSetting:function(e){return s.deleteSetting(f,e,!0)}})})}}})}();
