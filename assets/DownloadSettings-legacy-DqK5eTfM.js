!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n,a){return(n=function(t){var n=function(t,n){if("object"!=e(t)||!t)return t;var a=t[Symbol.toPrimitive];if(void 0!==a){var o=a.call(t,n||"default");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"==e(n)?n:n+""}(n))in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t}function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,o,l,r,d=[],i=!0,s=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(a=l.call(n)).done)&&(d.push(a.value),d.length!==t);i=!0);}catch(e){s=!0,o=e}finally{try{if(!i&&null!=n.return&&(r=n.return(),Object(r)!==r))return}finally{if(s)throw o}}return d}}(e,t)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=Array(t);n<t;n++)a[n]=e[n];return a}System.register(["./index-legacy-BS5NZc4u.js","./NumberSetting-legacy-DUFgAPG1.js","./usePersistedValue-legacy-dJftie7w.js","./Switch-legacy-DtIXNJmz.js","./SelectSetting-legacy-JAcxT85d.js","./CategoriesInclusionSetting-legacy-B8AngBTM.js","./ThreeStateCheckboxInput-legacy-Bo9Zh1EU.js"],(function(e,a){"use strict";var o,l,r,d,i,s,u,c,h,g,w,p,f,b,m,_,y,x,j,v,C,S,D,k;return{setters:[function(e){o=e.u,l=e.j,r=e.v,d=e.aJ,i=e.ay,s=e.bH,u=e.n,c=e.f,h=e.N,g=e.c,w=e.b9,p=e.q,f=e.l,b=e.E,m=e.m,_=e.b4,y=e.aU,x=e.y},function(e){j=e.N},function(e){v=e.u,C=e.g},function(e){S=e.S},function(e){D=e.S},function(e){k=e.a},null],execute:function(){var a=function(e){var t=e.downloadAheadLimit,a=o().t,c=!!t,h=n(v("lastDownloadAheadLimit",2,t,C),2),g=h[0],w=h[1],p=function(e){w(0===e?g:e),s("downloadAheadLimit",e).catch((function(){return u(a("global.error.label.failed_to_save_changes"),"error")}))};return l.jsxs(r,{children:[l.jsxs(d,{children:[l.jsx(i,{primary:a("download.settings.download_ahead.label.while_reading")}),l.jsx(S,{edge:"end",checked:c,onChange:function(e){return t=e.target.checked,void p(t?g:0);var t}})]}),l.jsx(j,{settingTitle:a("download.settings.download_ahead.label.unread_chapters_to_download"),settingValue:a("download.settings.download_ahead.label.value",{chapters:g,count:g}),value:g,minValue:2,maxValue:10,defaultValue:2,showSlider:!0,dialogDescription:a("download.settings.download_ahead.label.description"),dialogDisclaimer:a("download.settings.download_ahead.label.disclaimer"),valueUnit:a("chapter.title_one"),handleUpdate:p,disabled:!c})]})},N={0:{text:"global.label.disabled"},1:{text:"download.settings.delete_chapters.while_reading.option.label.first"},2:{text:"download.settings.delete_chapters.while_reading.option.label.second"},3:{text:"download.settings.delete_chapters.while_reading.option.label.third"},4:{text:"download.settings.delete_chapters.while_reading.option.label.fourth"},5:{text:"download.settings.delete_chapters.while_reading.option.label.fifth"}},A=[0,1,2,3,4,5].map((function(e){return[e,N[e]]})),U=function(e){var t=e.chapterToDelete,n=e.handleChange,a=o().t,r=function(e){return"boolean"==typeof e?Number(e):e}(t);return l.jsx(D,{settingName:a("download.settings.delete_chapters.while_reading.label.title"),value:r,values:A,handleChange:n})};e("DownloadSettings",(function(){var e,s,v,C=o().t,D=c.useContext(h),N=D.setTitle,A=D.setAction;c.useLayoutEffect((function(){return N(C("download.settings.title")),A(null),function(){N(""),A(null)}}),[C]);var L=g.useGetCategories(w),I=g.useGetServerSettings({notifyOnNetworkStatusChange:!0}),P=n(g.useUpdateServerSettings(),1)[0],T=p(),V=T.settings,E=T.loading,W=T.request,R=W.error,z=W.refetch;if(I.loading||E||L.loading)return l.jsx(f,{});var M=null!==(e=null!==(s=I.error)&&void 0!==s?s:R)&&void 0!==e?e:L.error;if(M)return l.jsx(b,{message:C("global.error.label.failed_to_load_data"),messageExtra:M.message,retry:function(){I.error&&I.refetch().catch(m()),R&&z().catch(m()),L.error&&L.refetch().catch(m())}});var O,q={downloadAsCbz:(O=I.data.settings).downloadAsCbz,downloadsPath:O.downloadsPath,autoDownloadNewChapters:O.autoDownloadNewChapters,autoDownloadNewChaptersLimit:O.autoDownloadNewChaptersLimit,excludeEntryWithUnreadChapters:O.excludeEntryWithUnreadChapters,autoDownloadIgnoreReUploads:O.autoDownloadIgnoreReUploads},B=function(e,n){P({variables:{input:{settings:t({},e,n)}}}).catch((function(){return u(C("global.error.label.failed_to_save_changes"),"error")}))},G=x((function(){return u(C("global.error.label.failed_to_save_changes"),"error")}));return l.jsxs(r,{sx:{pt:0},children:[l.jsx(_,{settingName:C("download.settings.download_path.label.title"),dialogDescription:C("download.settings.download_path.label.description"),value:null==q?void 0:q.downloadsPath,settingDescription:null!=q&&q.downloadsPath.length?q.downloadsPath:C("global.label.default"),handleChange:function(e){return B("downloadsPath",e)}}),l.jsxs(d,{children:[l.jsx(i,{primary:C("download.settings.file_type.label.cbz")}),l.jsx(S,{edge:"end",checked:!(null==q||!q.downloadAsCbz),onChange:function(e){return B("downloadAsCbz",e.target.checked)}})]}),l.jsxs(r,{subheader:l.jsx(y,{component:"div",id:"download-settings-auto-delete-downloads",children:C("download.settings.delete_chapters.title")}),children:[l.jsxs(d,{children:[l.jsx(i,{primary:C("download.settings.delete_chapters.label.manually_marked_as_read")}),l.jsx(S,{edge:"end",checked:V.deleteChaptersManuallyMarkedRead,onChange:function(e){return G("deleteChaptersManuallyMarkedRead",e.target.checked)}})]}),l.jsx(U,{chapterToDelete:V.deleteChaptersWhileReading,handleChange:function(e){return G("deleteChaptersWhileReading",e)}}),l.jsxs(d,{children:[l.jsx(i,{primary:C("download.settings.delete_chapters.label.allow_deletion_of_bookmarked")}),l.jsx(S,{edge:"end",checked:V.deleteChaptersWithBookmark,onChange:function(e){return G("deleteChaptersWithBookmark",e.target.checked)}})]})]}),l.jsxs(r,{subheader:l.jsx(y,{component:"div",id:"download-settings-auto-download",children:C("download.settings.auto_download.title")}),children:[l.jsxs(d,{children:[l.jsx(i,{primary:C("download.settings.auto_download.label.new_chapters")}),l.jsx(S,{edge:"end",checked:!(null==q||!q.autoDownloadNewChapters),onChange:function(e){return B("autoDownloadNewChapters",e.target.checked)}})]}),l.jsx(j,{disabled:!(null!=q&&q.autoDownloadNewChapters),settingTitle:C("download.settings.auto_download.download_limit.label.title"),dialogDescription:C("download.settings.auto_download.download_limit.label.description"),value:null!==(v=null==q?void 0:q.autoDownloadNewChaptersLimit)&&void 0!==v?v:0,settingValue:q.autoDownloadNewChaptersLimit?C("download.settings.download_ahead.label.value",{chapters:q.autoDownloadNewChaptersLimit,count:q.autoDownloadNewChaptersLimit}):C("global.label.none"),defaultValue:0,minValue:0,maxValue:20,showSlider:!0,valueUnit:C("chapter.title_one"),handleUpdate:function(e){return B("autoDownloadNewChaptersLimit",e)}}),l.jsxs(d,{children:[l.jsx(i,{primary:C("download.settings.auto_download.label.ignore_with_unread_chapters")}),l.jsx(S,{edge:"end",checked:!(null==q||!q.excludeEntryWithUnreadChapters),onChange:function(e){return B("excludeEntryWithUnreadChapters",e.target.checked)},disabled:!(null!=q&&q.autoDownloadNewChapters)})]}),l.jsxs(d,{children:[l.jsx(i,{primary:C("download.settings.auto_download.label.ignore_re_uploads")}),l.jsx(S,{edge:"end",checked:!(null==q||!q.autoDownloadIgnoreReUploads),onChange:function(e){return B("autoDownloadIgnoreReUploads",e.target.checked)},disabled:!(null!=q&&q.autoDownloadNewChapters)})]}),l.jsx(k,{categories:L.data.categories.nodes,includeField:"includeInDownload",dialogText:C("download.settings.auto_download.categories.label.include_in_download")})]}),l.jsx(r,{subheader:l.jsx(y,{component:"div",id:"download-settings-download-ahead",children:C("download.settings.download_ahead.title")}),children:l.jsx(a,{downloadAheadLimit:V.downloadAheadLimit})})]})}))}}}))}();
