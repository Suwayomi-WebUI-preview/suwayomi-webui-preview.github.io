!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n,a){return(n=function(t){var n=function(t,n){if("object"!=e(t)||!t)return t;var a=t[Symbol.toPrimitive];if(void 0!==a){var o=a.call(t,n||"default");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"==e(n)?n:n+""}(n))in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t}function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,o,l,r,d=[],i=!0,s=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(a=l.call(n)).done)&&(d.push(a.value),d.length!==t);i=!0);}catch(e){s=!0,o=e}finally{try{if(!i&&null!=n.return&&(r=n.return(),Object(r)!==r))return}finally{if(s)throw o}}return d}}(e,t)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=Array(t);n<t;n++)a[n]=e[n];return a}System.register(["./index-legacy-lUE3xiHP.js","./TextSetting-legacy-BKxgxGF1.js","./NumberSetting-legacy-CNh0eQ8K.js","./usePersistedValue-legacy-wDteqQjx.js","./Switch-legacy-CJ3vsyIA.js","./SelectSetting-legacy-CN-kCZdP.js","./CategoriesInclusionSetting-legacy-CqVnP939.js","./PasswordTextField-legacy-OJBIbhQk.js","./Info-legacy-CkMCBXBP.js"],(function(e,a){"use strict";var o,l,r,d,i,s,u,c,h,g,w,f,p,b,m,_,y,x,j,v,C,S,D,k,N;return{setters:[function(e){o=e.u,l=e.j,r=e.w,d=e.aU,i=e.aJ,s=e.Y,u=e.o,c=e.m,h=e.f,g=e.h,w=e.r,f=e.bc,p=e.q,b=e.l,m=e.E,_=e.n,y=e.s,x=e.b3},function(e){j=e.T},function(e){v=e.N},function(e){C=e.u,S=e.g},function(e){D=e.S},function(e){k=e.S},function(e){N=e.a},null,null],execute:function(){var a=function(e){var t=e.downloadAheadLimit,a=o().t,h=!!t,g=n(C("lastDownloadAheadLimit",2,t,S),2),w=g[0],f=g[1],p=function(e){f(0===e?w:e),s("downloadAheadLimit",e).catch((function(e){return u(a("global.error.label.failed_to_save_changes"),"error",c(e))}))};return l.jsxs(r,{children:[l.jsxs(d,{children:[l.jsx(i,{primary:a("download.settings.download_ahead.label.while_reading")}),l.jsx(D,{edge:"end",checked:h,onChange:function(e){return t=e.target.checked,void p(t?w:0);var t}})]}),l.jsx(v,{settingTitle:a("download.settings.download_ahead.label.unread_chapters_to_download"),settingValue:a("download.settings.download_ahead.label.value",{chapters:w,count:w}),value:w,minValue:2,maxValue:10,defaultValue:2,showSlider:!0,dialogDescription:a("download.settings.download_ahead.label.description"),dialogDisclaimer:a("download.settings.download_ahead.label.disclaimer"),valueUnit:a("chapter.title_one"),handleUpdate:p,disabled:!h})]})},A={0:{text:"global.label.disabled"},1:{text:"download.settings.delete_chapters.while_reading.option.label.first"},2:{text:"download.settings.delete_chapters.while_reading.option.label.second"},3:{text:"download.settings.delete_chapters.while_reading.option.label.third"},4:{text:"download.settings.delete_chapters.while_reading.option.label.fourth"},5:{text:"download.settings.delete_chapters.while_reading.option.label.fifth"}},U=[0,1,2,3,4,5].map((function(e){return[e,A[e]]})),L=function(e){var t=e.chapterToDelete,n=e.handleChange,a=o().t,r=function(e){return"boolean"==typeof e?Number(e):e}(t);return l.jsx(k,{settingName:a("download.settings.delete_chapters.while_reading.label.title"),value:r,values:U,handleChange:n})};e("DownloadSettings",(function(){var e,s,C,S=o().t,k=h(),A=k.setTitle,U=k.setAction;g.useLayoutEffect((function(){return A(S("download.settings.title")),U(null),function(){A(""),U(null)}}),[S]);var P=w.useGetCategories(f),T=w.useGetServerSettings({notifyOnNetworkStatusChange:!0}),I=n(w.useUpdateServerSettings(),1)[0],E=p(),R=E.settings,V=E.loading,W=E.request,z=W.error,M=W.refetch;if(T.loading||V||P.loading)return l.jsx(b,{});var O=null!==(e=null!==(s=T.error)&&void 0!==s?s:z)&&void 0!==e?e:P.error;if(O)return l.jsx(m,{message:S("global.error.label.failed_to_load_data"),messageExtra:c(O),retry:function(){T.error&&T.refetch().catch(_()),z&&M().catch(_()),P.error&&P.refetch().catch(_())}});var q,B={downloadAsCbz:(q=T.data.settings).downloadAsCbz,downloadsPath:q.downloadsPath,autoDownloadNewChapters:q.autoDownloadNewChapters,autoDownloadNewChaptersLimit:q.autoDownloadNewChaptersLimit,excludeEntryWithUnreadChapters:q.excludeEntryWithUnreadChapters,autoDownloadIgnoreReUploads:q.autoDownloadIgnoreReUploads},F=function(e,n){I({variables:{input:{settings:t({},e,n)}}}).catch((function(e){return u(S("global.error.label.failed_to_save_changes"),"error",c(e))}))},G=y((function(e){return u(S("global.error.label.failed_to_save_changes"),"error",c(e))}));return l.jsxs(r,{sx:{pt:0},children:[l.jsx(j,{settingName:S("download.settings.download_path.label.title"),dialogDescription:S("download.settings.download_path.label.description"),value:null==B?void 0:B.downloadsPath,settingDescription:null!=B&&B.downloadsPath.length?B.downloadsPath:S("global.label.default"),handleChange:function(e){return F("downloadsPath",e)}}),l.jsxs(d,{children:[l.jsx(i,{primary:S("download.settings.file_type.label.cbz")}),l.jsx(D,{edge:"end",checked:!(null==B||!B.downloadAsCbz),onChange:function(e){return F("downloadAsCbz",e.target.checked)}})]}),l.jsxs(r,{subheader:l.jsx(x,{component:"div",id:"download-settings-auto-delete-downloads",children:S("download.settings.delete_chapters.title")}),children:[l.jsxs(d,{children:[l.jsx(i,{primary:S("download.settings.delete_chapters.label.manually_marked_as_read")}),l.jsx(D,{edge:"end",checked:R.deleteChaptersManuallyMarkedRead,onChange:function(e){return G("deleteChaptersManuallyMarkedRead",e.target.checked)}})]}),l.jsx(L,{chapterToDelete:R.deleteChaptersWhileReading,handleChange:function(e){return G("deleteChaptersWhileReading",e)}}),l.jsxs(d,{children:[l.jsx(i,{primary:S("download.settings.delete_chapters.label.allow_deletion_of_bookmarked")}),l.jsx(D,{edge:"end",checked:R.deleteChaptersWithBookmark,onChange:function(e){return G("deleteChaptersWithBookmark",e.target.checked)}})]})]}),l.jsxs(r,{subheader:l.jsx(x,{component:"div",id:"download-settings-auto-download",children:S("download.settings.auto_download.title")}),children:[l.jsxs(d,{children:[l.jsx(i,{primary:S("download.settings.auto_download.label.new_chapters")}),l.jsx(D,{edge:"end",checked:!(null==B||!B.autoDownloadNewChapters),onChange:function(e){return F("autoDownloadNewChapters",e.target.checked)}})]}),l.jsx(v,{disabled:!(null!=B&&B.autoDownloadNewChapters),settingTitle:S("download.settings.auto_download.download_limit.label.title"),dialogDescription:S("download.settings.auto_download.download_limit.label.description"),value:null!==(C=null==B?void 0:B.autoDownloadNewChaptersLimit)&&void 0!==C?C:0,settingValue:B.autoDownloadNewChaptersLimit?S("download.settings.download_ahead.label.value",{chapters:B.autoDownloadNewChaptersLimit,count:B.autoDownloadNewChaptersLimit}):S("global.label.none"),defaultValue:0,minValue:0,maxValue:20,showSlider:!0,valueUnit:S("chapter.title_one"),handleUpdate:function(e){return F("autoDownloadNewChaptersLimit",e)}}),l.jsxs(d,{children:[l.jsx(i,{primary:S("download.settings.auto_download.label.ignore_with_unread_chapters")}),l.jsx(D,{edge:"end",checked:!(null==B||!B.excludeEntryWithUnreadChapters),onChange:function(e){return F("excludeEntryWithUnreadChapters",e.target.checked)},disabled:!(null!=B&&B.autoDownloadNewChapters)})]}),l.jsxs(d,{children:[l.jsx(i,{primary:S("download.settings.auto_download.label.ignore_re_uploads")}),l.jsx(D,{edge:"end",checked:!(null==B||!B.autoDownloadIgnoreReUploads),onChange:function(e){return F("autoDownloadIgnoreReUploads",e.target.checked)},disabled:!(null!=B&&B.autoDownloadNewChapters)})]}),l.jsx(N,{categories:P.data.categories.nodes,includeField:"includeInDownload",dialogText:S("download.settings.auto_download.categories.label.include_in_download")})]}),l.jsx(r,{subheader:l.jsx(x,{component:"div",id:"download-settings-download-ahead",children:S("download.settings.download_ahead.title")}),children:l.jsx(a,{downloadAheadLimit:R.downloadAheadLimit})})]})}))}}}))}();
