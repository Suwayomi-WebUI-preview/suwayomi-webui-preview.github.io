System.register(["./index-legacy-C182Zjs5.js","./metadata-legacy-Bu0EDDj_.js","./ReaderSettingsOptions-legacy-D36qE1eX.js","./NumberSetting-legacy-CJ0rhIqF.js","./Info-legacy-Do4JPrug.js","./TextField-legacy-9kh-a0h3.js","./InputAdornment-legacy-T7YPfgZU.js","./SpinnerImage-legacy-CokuUiiP.js","./Select-legacy-CRNykG7C.js","./Switch-legacy-BhXYSezi.js","./SwitchBase-legacy-B4rXAfU-.js","./MenuItem-legacy-CdJd6Bkf.js"],(function(e,t){"use strict";var a,n,s,r,l,i,c,u,g,o,d,f,j,y,h;return{setters:[function(e){a=e.u,n=e.c,s=e.N,r=e.A,l=e.j,i=e.g,c=e.E,u=e.h,g=e.m},function(e){o=e.c,d=e.a},function(e){f=e.u,j=e.c,y=e.R,h=e.a},null,null,null,null,null,null,null,null,null],execute:function(){e("DefaultReaderSettings",(function(){var e=a().t,t=n.useContext(s),m=t.setTitle,p=t.setAction;n.useEffect((function(){return m(e("reader.settings.title.default_reader_settings")),p(null),function(){m(""),p(null)}}),[e]);var x=f(),v=x.metadata,S=x.settings,N=x.loading,P=x.request,_=P.error,w=P.refetch;return r("settings"),N?l.jsx(i,{}):_?l.jsx(c,{message:e("global.error.label.failed_to_load_data"),messageExtra:_.message,retry:function(){return w().catch(u())}}):(j({meta:o(v)},"server",h()).catch(u()),l.jsx(y,{setSettingValue:function(t,a){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];n&&d([[t,a]]).catch((function(){return g(e("reader.settings.error.label.failed_to_save_settings"),"warning")}))},staticNav:S.staticNav,showPageNumber:S.showPageNumber,loadNextOnEnding:S.loadNextOnEnding,skipDupChapters:S.skipDupChapters,fitPageToWindow:S.fitPageToWindow,scalePage:S.scalePage,readerType:S.readerType,offsetFirstPage:S.offsetFirstPage,readerWidth:S.readerWidth}))}))}}}));
