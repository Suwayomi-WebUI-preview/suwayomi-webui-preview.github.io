System.register(["./index-legacy-GxGsYjoV.js","./ReaderSettingsOptions-legacy-DwdTJpUK.js","./NumberSetting-legacy-Q8CeC8Y1.js","./Info-legacy-BajNpXz4.js","./TextField-legacy-C0PmYBLR.js","./InputAdornment-legacy-C9arIE8s.js","./SpinnerImage-legacy-Bv_jESyI.js","./Select-legacy-CETkoojf.js","./Switch-legacy-CDFNLdQr.js","./SwitchBase-legacy-CS3VuG66.js"],(function(e,t){"use strict";var a,n,s,r,l,i,c,u,g,o,d,f,h,j;return{setters:[function(e){a=e.u,n=e.c,s=e.N,r=e.j,l=e.g,i=e.E,c=e.h,u=e.aO,g=e.aP,o=e.m},function(e){d=e.u,f=e.c,h=e.R,j=e.a},null,null,null,null,null,null,null,null],execute:function(){e("DefaultReaderSettings",(function(){var e=a().t,t=n.useContext(s),y=t.setTitle,m=t.setAction;n.useEffect((function(){return y(e("reader.settings.title.default_reader_settings")),m(null),function(){y(""),m(null)}}),[e]);var p=d(),x=p.metadata,v=p.settings,P=p.loading,S=p.request,N=S.error,_=S.refetch;return P?r.jsx(l,{}):N?r.jsx(i,{message:e("global.error.label.failed_to_load_data"),messageExtra:N.message,retry:function(){return _().catch(c())}}):(f({meta:u(x)},"server",j()).catch(c()),r.jsx(h,{setSettingValue:function(t,a){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];n&&g([[t,a]]).catch((function(){return o(e("reader.settings.error.label.failed_to_save_settings"),"warning")}))},staticNav:v.staticNav,showPageNumber:v.showPageNumber,loadNextOnEnding:v.loadNextOnEnding,skipDupChapters:v.skipDupChapters,fitPageToWindow:v.fitPageToWindow,scalePage:v.scalePage,readerType:v.readerType,offsetFirstPage:v.offsetFirstPage,readerWidth:v.readerWidth}))}))}}}));
