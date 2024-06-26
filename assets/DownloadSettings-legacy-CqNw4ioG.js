!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n,a){return(n=function(t){var n=function(t,n){if("object"!=e(t)||!t)return t;var a=t[Symbol.toPrimitive];if(void 0!==a){var o=a.call(t,n||"default");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"==e(n)?n:n+""}(n))in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t}function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,o,l,r,d=[],i=!0,s=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(a=l.call(n)).done)&&(d.push(a.value),d.length!==t);i=!0);}catch(e){s=!0,o=e}finally{try{if(!i&&null!=n.return&&(r=n.return(),Object(r)!==r))return}finally{if(s)throw o}}return d}}(e,t)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=Array(t);n<t;n++)a[n]=e[n];return a}System.register(["./index-legacy-B09rAWaZ.js","./TextSetting-legacy-CIO0IKca.js","./NumberSetting-legacy-DWoaZ-f8.js","./usePersistedValue-legacy-CfiN8oSL.js","./Switch-legacy-CfmtjT8C.js","./SelectSetting-legacy-BG4ta1Ll.js","./CategoriesInclusionSetting-legacy-D8wO4GDr.js","./PasswordTextField-legacy-yyRFSIKU.js","./TextField-legacy-DlXTwxE6.js","./InputAdornment-legacy-DUqEAWjn.js","./Info-legacy-Ca1wyecX.js","./SwitchBase-legacy-Dnrk_3l3.js","./Select-legacy-BxGe-JNN.js","./ThreeStateCheckboxInput-legacy-BEjWW1sR.js","./Checkbox-legacy-DaLzgQM4.js"],(function(e,a){"use strict";var o,l,r,d,i,s,u,c,h,g,w,p,f,b,m,y,_,j,x,v,C,S,D;return{setters:[function(e){o=e.u,l=e.j,r=e.l,d=e.aj,i=e.O,s=e.b7,u=e.m,c=e.c,h=e.N,g=e.a,w=e.o,p=e.g,f=e.E,b=e.h,m=e.aF,y=e.b6},function(e){_=e.T},function(e){j=e.N},function(e){x=e.u,v=e.g},function(e){C=e.S},function(e){S=e.S},function(e){D=e.a},null,null,null,null,null,null,null,null],execute:function(){var a=function(e){var t=e.downloadAheadLimit,a=o().t,c=!!t,h=n(x("lastDownloadAheadLimit",2,t,v),2),g=h[0],w=h[1],p=function(e){w(0===e?g:e),s("downloadAheadLimit",e).catch((function(){return u(a("search.error.label.failed_to_save_settings"),"warning")}))};return l.jsxs(r,{children:[l.jsxs(d,{children:[l.jsx(i,{primary:a("download.settings.download_ahead.label.while_reading")}),l.jsx(C,{edge:"end",checked:c,onChange:function(e){return t=e.target.checked,void p(t?g:0);var t}})]}),l.jsx(j,{settingTitle:a("download.settings.download_ahead.label.unread_chapters_to_download"),settingValue:a("download.settings.download_ahead.label.value",{chapters:g,count:g}),value:g,minValue:2,maxValue:10,defaultValue:2,showSlider:!0,dialogDescription:a("download.settings.download_ahead.label.description"),dialogDisclaimer:a("download.settings.download_ahead.label.disclaimer"),valueUnit:a("chapter.title"),handleUpdate:p,disabled:!c})]})},k={0:{text:"global.label.disabled"},1:{text:"download.settings.delete_chapters.while_reading.option.label.first"},2:{text:"download.settings.delete_chapters.while_reading.option.label.second"},3:{text:"download.settings.delete_chapters.while_reading.option.label.third"},4:{text:"download.settings.delete_chapters.while_reading.option.label.fourth"},5:{text:"download.settings.delete_chapters.while_reading.option.label.fifth"}},N=[0,1,2,3,4,5].map((function(e){return[e,k[e]]})),A=function(e){var t=e.chapterToDelete,n=e.handleChange,a=o().t,r=function(e){return"boolean"==typeof e?Number(e):e}(t);return l.jsx(S,{settingName:a("download.settings.delete_chapters.while_reading.label.title"),value:r,values:N,handleChange:n})};e("DownloadSettings",(function(){var e,s,x,v=o().t,S=c.useContext(h),k=S.setTitle,N=S.setAction;c.useEffect((function(){return k(v("download.settings.title")),N(null),function(){k(""),N(null)}}),[v]);var U=g.useGetCategories(),T=g.useGetServerSettings({notifyOnNetworkStatusChange:!0}),I=n(g.useUpdateServerSettings(),1)[0],L=w(),V=L.settings,E=L.loading,P=L.request,W=P.error,R=P.refetch;if(T.loading||E||U.loading)return l.jsx(p,{});var O=null!==(e=null!==(s=T.error)&&void 0!==s?s:W)&&void 0!==e?e:U.error;if(O)return l.jsx(f,{message:v("global.error.label.failed_to_load_data"),messageExtra:O.message,retry:function(){T.error&&T.refetch().catch(b()),W&&R().catch(b()),U.error&&U.refetch().catch(b())}});var z,M={downloadAsCbz:(z=T.data.settings).downloadAsCbz,downloadsPath:z.downloadsPath,autoDownloadNewChapters:z.autoDownloadNewChapters,autoDownloadNewChaptersLimit:z.autoDownloadNewChaptersLimit,excludeEntryWithUnreadChapters:z.excludeEntryWithUnreadChapters,autoDownloadIgnoreReUploads:z.autoDownloadIgnoreReUploads},F=function(e,n){I({variables:{input:{settings:t({},e,n)}}}).catch((function(){return u(v("global.error.label.failed_to_save_changes"),"error")}))},B=y((function(){return u(v("global.error.label.failed_to_save_changes"),"error")}));return l.jsxs(r,{children:[l.jsx(_,{settingName:v("download.settings.download_path.label.title"),dialogDescription:v("download.settings.download_path.label.description"),value:null==M?void 0:M.downloadsPath,handleChange:function(e){return F("downloadsPath",e)}}),l.jsxs(d,{children:[l.jsx(i,{primary:v("download.settings.file_type.label.cbz")}),l.jsx(C,{edge:"end",checked:!(null==M||!M.downloadAsCbz),onChange:function(e){return F("downloadAsCbz",e.target.checked)}})]}),l.jsxs(r,{subheader:l.jsx(m,{component:"div",id:"download-settings-auto-delete-downloads",children:v("download.settings.delete_chapters.title")}),children:[l.jsxs(d,{children:[l.jsx(i,{primary:v("download.settings.delete_chapters.label.manually_marked_as_read")}),l.jsx(C,{edge:"end",checked:V.deleteChaptersManuallyMarkedRead,onChange:function(e){return B("deleteChaptersManuallyMarkedRead",e.target.checked)}})]}),l.jsx(A,{chapterToDelete:V.deleteChaptersWhileReading,handleChange:function(e){return B("deleteChaptersWhileReading",e)}}),l.jsxs(d,{children:[l.jsx(i,{primary:v("download.settings.delete_chapters.label.allow_deletion_of_bookmarked")}),l.jsx(C,{edge:"end",checked:V.deleteChaptersWithBookmark,onChange:function(e){return B("deleteChaptersWithBookmark",e.target.checked)}})]})]}),l.jsxs(r,{subheader:l.jsx(m,{component:"div",id:"download-settings-auto-download",children:v("download.settings.auto_download.title")}),children:[l.jsxs(d,{children:[l.jsx(i,{primary:v("download.settings.auto_download.label.new_chapters")}),l.jsx(C,{edge:"end",checked:!(null==M||!M.autoDownloadNewChapters),onChange:function(e){return F("autoDownloadNewChapters",e.target.checked)}})]}),l.jsx(j,{disabled:!(null!=M&&M.autoDownloadNewChapters),settingTitle:v("download.settings.auto_download.download_limit.label.title"),dialogDescription:v("download.settings.auto_download.download_limit.label.description"),value:null!==(x=null==M?void 0:M.autoDownloadNewChaptersLimit)&&void 0!==x?x:0,settingValue:M.autoDownloadNewChaptersLimit?v("download.settings.download_ahead.label.value",{chapters:M.autoDownloadNewChaptersLimit,count:M.autoDownloadNewChaptersLimit}):v("global.label.none"),defaultValue:0,minValue:0,maxValue:20,showSlider:!0,valueUnit:v("chapter.title"),handleUpdate:function(e){return F("autoDownloadNewChaptersLimit",e)}}),l.jsxs(d,{disabled:!(null!=M&&M.autoDownloadNewChapters),children:[l.jsx(i,{primary:v("download.settings.auto_download.label.ignore_with_unread_chapters")}),l.jsx(C,{edge:"end",checked:!(null==M||!M.excludeEntryWithUnreadChapters),onChange:function(e){return F("excludeEntryWithUnreadChapters",e.target.checked)},disabled:!(null!=M&&M.autoDownloadNewChapters)})]}),l.jsxs(d,{disabled:!(null!=M&&M.autoDownloadNewChapters),children:[l.jsx(i,{primary:v("download.settings.auto_download.label.ignore_re_uploads")}),l.jsx(C,{edge:"end",checked:!(null==M||!M.autoDownloadIgnoreReUploads),onChange:function(e){return F("autoDownloadIgnoreReUploads",e.target.checked)},disabled:!(null!=M&&M.autoDownloadNewChapters)})]}),l.jsx(D,{categories:U.data.categories.nodes,includeField:"includeInDownload",dialogText:v("download.settings.auto_download.categories.label.include_in_download")})]}),l.jsx(r,{subheader:l.jsx(m,{component:"div",id:"download-settings-download-ahead",children:v("download.settings.download_ahead.title")}),children:l.jsx(a,{downloadAheadLimit:V.downloadAheadLimit})})]})}))}}}))}();