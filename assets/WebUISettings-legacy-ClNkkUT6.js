!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n,i){return(n=function(t){var n=function(t,n){if("object"!=e(t)||!t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var r=i.call(t,n||"default");if("object"!=e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"==e(n)?n:n+""}(n))in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i,t}function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i,r,l,a,o=[],s=!0,u=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(i=l.call(n)).done)&&(o.push(i.value),o.length!==t);s=!0);}catch(e){u=!0,r=e}finally{try{if(!s&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw r}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=Array(t);n<t;n++)i[n]=e[n];return i}System.register(["./index-legacy-a7MRAkA8.js","./NumberSetting-legacy-BmuHJwj1.js","./usePersistedValue-legacy-CY9Mt82q.js","./Switch-legacy-BcbE1-dN.js","./TextSetting-legacy-DvY6gpDv.js","./SelectSetting-legacy-B4czMR2a.js","./Info-legacy-aCDUI6Wc.js","./TextField-legacy-8Jgafatc.js","./InputAdornment-legacy-Cib2E43D.js","./SwitchBase-legacy-CZGiEuev.js","./PasswordTextField-legacy-BtWxGucc.js","./Select-legacy-BI6mL2OV.js"],(function(e,i){"use strict";var r,l,a,o,s,u,c,b,d,f,g,p,h,v,w,m,y,I,j,x,U,S,C;return{setters:[function(e){r=e.u,l=e.a,a=e.c,o=e.m,s=e.j,u=e.k,c=e.ax,b=e.a3,d=e.bq,f=e.br,g=e.bs,p=e.N,h=e.p,v=e.g,w=e.E,m=e.h,y=e.v},function(e){I=e.N},function(e){j=e.u,x=e.g},function(e){U=e.S},function(e){S=e.T},function(e){C=e.S},null,null,null,null,null,null],execute:function(){var i=function(e){var t=e.disabled,i=void 0!==t&&t,d=e.updateCheckInterval,f=r().t,g=!!d,p=n(l.useUpdateServerSettings(),1)[0],h=n(j("lastUpdateCheckInterval",23,d,x),2),v=h[0],w=h[1],m=a.useCallback((function(e){w(0===e?v:e),p({variables:{input:{settings:{webUIUpdateCheckInterval:e}}}}).catch((function(){return o(f("global.error.label.failed_to_save_changes"),"error")}))}),[v]);return s.jsxs(u,{children:[s.jsxs(c,{children:[s.jsx(b,{primary:f("settings.webui.auto_update.label.title")}),s.jsx(U,{disabled:i,edge:"end",checked:g,onChange:function(e){return t=e.target.checked,void m(t?v:0);var t}})]}),s.jsx(I,{settingTitle:f("settings.webui.auto_update.label.interval"),settingValue:f("library.settings.global_update.auto_update.interval.label.value",{hours:v}),value:v,minValue:1,maxValue:23,defaultValue:23,showSlider:!0,valueUnit:f("global.time.hour_short"),handleUpdate:m,disabled:i||!g})]})},_=Object.values(d),k=t(t(t({},d.Webui,{text:"settings.webui.title.webui",description:"settings.webui.flavor.option.webui.label.description",disclaimer:"settings.webui.flavor.label.info"}),d.Vui,{text:"settings.webui.flavor.option.vui.label.title",description:"settings.webui.flavor.option.vui.label.description",disclaimer:"settings.webui.flavor.label.info"}),d.Custom,{text:"settings.webui.flavor.option.custom.label.title",description:"settings.webui.flavor.option.custom.label.description"}),O=_.map((function(e){return[e,k[e]]})),P=Object.values(f),A=t(t(t({},f.Bundled,{text:"settings.webui.channel.option.bundled.label.title",description:"settings.webui.channel.option.bundled.label.description",disclaimer:"settings.webui.flavor.label.info"}),f.Stable,{text:"settings.webui.channel.option.stable.label.title",description:"settings.webui.channel.option.stable.label.description",disclaimer:"settings.webui.flavor.label.info"}),f.Preview,{text:"settings.webui.channel.option.preview.label.title",description:"settings.webui.channel.option.preview.label.description",disclaimer:"settings.webui.channel.option.preview.label.disclaimer"}),E=P.map((function(e){return[e,A[e]]})),N=Object.values(g),B=t(t({},g.Browser,{text:"settings.webui.interface.option.label.browser",description:"settings.webui.interface.label.description"}),g.Electron,{text:"settings.webui.interface.option.label.electron",description:"settings.webui.interface.label.description"}),F=N.map((function(e){return[e,B[e]]}));e("WebUISettings",(function(){var e=r().t,f=a.useContext(p),g=f.setTitle,I=f.setAction;a.useLayoutEffect((function(){return g(e("settings.webui.title.settings")),I(null),function(){g(""),I(null)}}),[e]);var j=h(),x=j.settings.webUIInformAvailableUpdate,_=j.loading,k=j.request,P=k.error,A=k.refetch,N=y((function(){return o(e("global.error.label.failed_to_save_changes"),"error")})),B=l.useGetServerSettings({notifyOnNetworkStatusChange:!0}),T=B.data,V=B.loading,W=B.error,q=B.refetch,D=n(l.useUpdateServerSettings(),1)[0],L=function(n,i){"webUIChannel"===n&&l.graphQLClient.client.cache.evict({fieldName:"checkForWebUIUpdate"}),D({variables:{input:{settings:t({},n,i)}}}).catch((function(){return o(e("global.error.label.failed_to_save_changes"),"error")}))};if(_||V)return s.jsx(v,{});var G=null!=P?P:W;if(G)return s.jsx(w,{message:e("global.error.label.failed_to_load_data"),messageExtra:G.message,retry:function(){P&&A().catch(m()),W&&q().catch(m())}});var M,Q={webUIFlavor:(M=T.settings).webUIFlavor,initialOpenInBrowserEnabled:M.initialOpenInBrowserEnabled,webUIInterface:M.webUIInterface,electronPath:M.electronPath,webUIChannel:M.webUIChannel,webUIUpdateCheckInterval:M.webUIUpdateCheckInterval},X=Q.webUIFlavor===d.Custom;return s.jsxs(u,{sx:{pt:0},children:[s.jsx(C,{settingName:e("settings.webui.flavor.label.title"),value:Q.webUIFlavor,values:O,handleChange:function(e){return L("webUIFlavor",e)}}),s.jsxs(c,{children:[s.jsx(b,{primary:e("settings.webui.label.initial_open_browser")}),s.jsx(U,{edge:"end",checked:Q.initialOpenInBrowserEnabled,onChange:function(e){return L("initialOpenInBrowserEnabled",e.target.checked)}})]}),s.jsx(C,{settingName:e("settings.webui.interface.label.title"),value:Q.webUIInterface,values:F,handleChange:function(e){return L("webUIInterface",e)}}),s.jsx(S,{settingName:e("settings.webui.electron_path.label.title"),dialogDescription:e("settings.webui.electron_path.label.description"),value:Q.electronPath,settingDescription:Q.electronPath.length?Q.electronPath:e("global.label.default"),handleChange:function(e){return L("electronPath",e)}}),s.jsx(C,{settingName:e("settings.webui.channel.label.title"),value:Q.webUIChannel,values:E,handleChange:function(e){return L("webUIChannel",e)},disabled:X}),s.jsx(i,{disabled:X,updateCheckInterval:Q.webUIUpdateCheckInterval}),!Q.webUIUpdateCheckInterval&&s.jsxs(c,{children:[s.jsx(b,{primary:e("global.update.settings.inform.label.title"),secondary:e("global.update.settings.inform.label.description")}),s.jsx(U,{edge:"end",checked:x,onChange:function(e){return N("webUIInformAvailableUpdate",e.target.checked)}})]})]})}))}}}))}();
