System.register(["./index-legacy-BGeP1VCJ.js","./ReaderSettingsOptions-legacy-DdpKdK2y.js","./NumberSetting-legacy-C88tQpvA.js","./Info-legacy-DIfs54kJ.js","./TextField-legacy-cLTECR_K.js","./InputAdornment-legacy-SPp2z0L2.js","./SpinnerImage-legacy-CC25lVld.js","./Select-legacy-CAFnqPh6.js","./Switch-legacy-BdqWNvsz.js","./SwitchBase-legacy-CCJZJADd.js"],(function(e,t){"use strict";var a,n,s,r,l,i,u,c,g,o,d,f,h,j;return{setters:[function(e){a=e.u,n=e.c,s=e.N,r=e.j,l=e.g,i=e.E,u=e.h,c=e.b3,g=e.b4,o=e.m},function(e){d=e.u,f=e.c,h=e.R,j=e.a},null,null,null,null,null,null,null,null],execute:function(){e("DefaultReaderSettings",(function(){var e=a().t,t=n.useContext(s),y=t.setTitle,m=t.setAction;n.useEffect((function(){return y(e("reader.settings.title.default_reader_settings")),m(null),function(){y(""),m(null)}}),[e]);var p=d(),x=p.metadata,v=p.settings,S=p.loading,b=p.request,w=b.error,N=b.refetch;return S?r.jsx(l,{}):w?r.jsx(i,{message:e("global.error.label.failed_to_load_data"),messageExtra:w.message,retry:function(){return N().catch(u())}}):(f({meta:c(x)},"server",j()).catch(u()),r.jsx(h,{setSettingValue:function(t,a){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];n&&g([[t,a]]).catch((function(){return o(e("reader.settings.error.label.failed_to_save_settings"),"warning")}))},staticNav:v.staticNav,showPageNumber:v.showPageNumber,loadNextOnEnding:v.loadNextOnEnding,skipDupChapters:v.skipDupChapters,fitPageToWindow:v.fitPageToWindow,scalePage:v.scalePage,readerType:v.readerType,offsetFirstPage:v.offsetFirstPage,readerWidth:v.readerWidth}))}))}}}));