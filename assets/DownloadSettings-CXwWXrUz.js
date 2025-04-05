import{u as f,j as a,G as p,a_ as i,aS as h,a$ as c,a3 as M,q as D,n as m,g as U,i as R,r as x,bk as P,x as V,m as W,E as z,o as C,y as O,bb as j}from"./index-Mw6rWbQu.js";import{T as G}from"./TextSetting-BfrAJnpE.js";import{N as k}from"./NumberSetting-DV2fIxXP.js";import{u as H,g as q}from"./usePersistedValue-BcDZA29I.js";import{S as B}from"./SelectSetting-4uV2gT0M.js";import{a as F}from"./CategoriesInclusionSetting-CzKvCfXb.js";import"./PasswordTextField-CmoxQK59.js";const N=2,K=10,v=N,X=({downloadAheadLimit:e})=>{const{t:d}=f(),n=!!e,[s,r]=H("lastDownloadAheadLimit",v,e,q),_=l=>{r(l===0?s:l),M("downloadAheadLimit",l).catch(w=>D(d("global.error.label.failed_to_save_changes"),"error",m(w)))},g=l=>{_(l?s:0)};return a.jsxs(p,{children:[a.jsxs(i,{children:[a.jsx(h,{primary:d("download.settings.download_ahead.label.while_reading")}),a.jsx(c,{edge:"end",checked:n,onChange:l=>g(l.target.checked)})]}),a.jsx(k,{settingTitle:d("download.settings.download_ahead.label.unread_chapters_to_download"),settingValue:d("download.settings.download_ahead.label.value",{chapters:s,count:s}),value:s,minValue:N,maxValue:K,defaultValue:v,showSlider:!0,dialogDescription:d("download.settings.download_ahead.label.description"),dialogDisclaimer:d("download.settings.download_ahead.label.disclaimer"),valueUnit:d("chapter.title_one"),handleUpdate:_,disabled:!n})]})},Y=[0,1,2,3,4,5],$={0:{text:"global.label.disabled"},1:{text:"download.settings.delete_chapters.while_reading.option.label.first"},2:{text:"download.settings.delete_chapters.while_reading.option.label.second"},3:{text:"download.settings.delete_chapters.while_reading.option.label.third"},4:{text:"download.settings.delete_chapters.while_reading.option.label.fourth"},5:{text:"download.settings.delete_chapters.while_reading.option.label.fifth"}},J=Y.map(e=>[e,$[e]]),Q=e=>typeof e=="boolean"?Number(e):e,Z=({chapterToDelete:e,handleChange:d})=>{const{t:n}=f(),s=Q(e);return a.jsx(B,{settingName:n("download.settings.delete_chapters.while_reading.label.title"),value:s,values:J,handleChange:d})},ee=e=>({downloadAsCbz:e.downloadAsCbz,downloadsPath:e.downloadsPath,autoDownloadNewChapters:e.autoDownloadNewChapters,autoDownloadNewChaptersLimit:e.autoDownloadNewChaptersLimit,excludeEntryWithUnreadChapters:e.excludeEntryWithUnreadChapters,autoDownloadIgnoreReUploads:e.autoDownloadIgnoreReUploads}),ie=()=>{var S,T,L;const{t:e}=f(),{setTitle:d,setAction:n}=U();R.useLayoutEffect(()=>(d(e("download.title.download")),n(null),()=>{d(""),n(null)}),[e]);const s=x.useGetCategories(P),r=x.useGetServerSettings({notifyOnNetworkStatusChange:!0}),[_]=x.useUpdateServerSettings(),{settings:g,loading:l,request:{error:w,refetch:A}}=V();if(r.loading||l||s.loading)return a.jsx(W,{});const E=(T=(S=r.error)!=null?S:w)!=null?T:s.error;if(E)return a.jsx(z,{message:e("global.error.label.failed_to_load_data"),messageExtra:m(E),retry:()=>{r.error&&r.refetch().catch(C()),w&&A().catch(C()),s.error&&s.refetch().catch(C())}});const t=ee(r.data.settings),u=(o,y)=>{_({variables:{input:{settings:{[o]:y}}}}).catch(I=>D(e("global.error.label.failed_to_save_changes"),"error",m(I)))},b=O(o=>D(e("global.error.label.failed_to_save_changes"),"error",m(o)));return a.jsxs(p,{sx:{pt:0},children:[a.jsx(G,{settingName:e("download.settings.download_path.label.title"),dialogDescription:e("download.settings.download_path.label.description"),value:t==null?void 0:t.downloadsPath,settingDescription:t!=null&&t.downloadsPath.length?t.downloadsPath:e("global.label.default"),handleChange:o=>u("downloadsPath",o)}),a.jsxs(i,{children:[a.jsx(h,{primary:e("download.settings.file_type.label.cbz")}),a.jsx(c,{edge:"end",checked:!!(t!=null&&t.downloadAsCbz),onChange:o=>u("downloadAsCbz",o.target.checked)})]}),a.jsxs(p,{subheader:a.jsx(j,{component:"div",id:"download-settings-auto-delete-downloads",children:e("download.settings.delete_chapters.title")}),children:[a.jsxs(i,{children:[a.jsx(h,{primary:e("download.settings.delete_chapters.label.manually_marked_as_read")}),a.jsx(c,{edge:"end",checked:g.deleteChaptersManuallyMarkedRead,onChange:o=>b("deleteChaptersManuallyMarkedRead",o.target.checked)})]}),a.jsx(Z,{chapterToDelete:g.deleteChaptersWhileReading,handleChange:o=>b("deleteChaptersWhileReading",o)}),a.jsxs(i,{children:[a.jsx(h,{primary:e("download.settings.delete_chapters.label.allow_deletion_of_bookmarked")}),a.jsx(c,{edge:"end",checked:g.deleteChaptersWithBookmark,onChange:o=>b("deleteChaptersWithBookmark",o.target.checked)})]})]}),a.jsxs(p,{subheader:a.jsx(j,{component:"div",id:"download-settings-auto-download",children:e("download.settings.auto_download.title")}),children:[a.jsxs(i,{children:[a.jsx(h,{primary:e("download.settings.auto_download.label.new_chapters")}),a.jsx(c,{edge:"end",checked:!!(t!=null&&t.autoDownloadNewChapters),onChange:o=>u("autoDownloadNewChapters",o.target.checked)})]}),a.jsx(k,{disabled:!(t!=null&&t.autoDownloadNewChapters),settingTitle:e("download.settings.auto_download.download_limit.label.title"),dialogDescription:e("download.settings.auto_download.download_limit.label.description"),value:(L=t==null?void 0:t.autoDownloadNewChaptersLimit)!=null?L:0,settingValue:t.autoDownloadNewChaptersLimit?e("download.settings.download_ahead.label.value",{chapters:t.autoDownloadNewChaptersLimit,count:t.autoDownloadNewChaptersLimit}):e("global.label.none"),defaultValue:0,minValue:0,maxValue:20,showSlider:!0,valueUnit:e("chapter.title_one"),handleUpdate:o=>u("autoDownloadNewChaptersLimit",o)}),a.jsxs(i,{children:[a.jsx(h,{primary:e("download.settings.auto_download.label.ignore_with_unread_chapters")}),a.jsx(c,{edge:"end",checked:!!(t!=null&&t.excludeEntryWithUnreadChapters),onChange:o=>u("excludeEntryWithUnreadChapters",o.target.checked),disabled:!(t!=null&&t.autoDownloadNewChapters)})]}),a.jsxs(i,{children:[a.jsx(h,{primary:e("download.settings.auto_download.label.ignore_re_uploads")}),a.jsx(c,{edge:"end",checked:!!(t!=null&&t.autoDownloadIgnoreReUploads),onChange:o=>u("autoDownloadIgnoreReUploads",o.target.checked),disabled:!(t!=null&&t.autoDownloadNewChapters)})]}),a.jsx(F,{categories:s.data.categories.nodes,includeField:"includeInDownload",dialogText:e("download.settings.auto_download.categories.label.include_in_download")})]}),a.jsx(p,{subheader:a.jsx(j,{component:"div",id:"download-settings-download-ahead",children:e("download.settings.download_ahead.title")}),children:a.jsx(X,{downloadAheadLimit:g.downloadAheadLimit})})]})};export{ie as DownloadSettings};
