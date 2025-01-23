import{u as f,j as a,v as w,aM as i,aB as h,Z as M,o as D,m,f as U,h as R,r as b,b5 as P,q as V,l as W,E as z,n as C,aW as j,y as O}from"./index-b9u_iuUy.js";import{T as G}from"./TextSetting-B2Buaap6.js";import{N}from"./NumberSetting-Cwukzy4v.js";import{u as B,g as H}from"./usePersistedValue-CtMq2EX-.js";import{S as c}from"./Switch-BhhtKYp1.js";import{S as q}from"./SelectSetting-B1fMFSwR.js";import{a as F}from"./CategoriesInclusionSetting-BQQugP8J.js";import"./PasswordTextField-DonXWPVM.js";import"./Info-B3XTEMCU.js";import"./ThreeStateCheckboxInput-DrjWE8CG.js";const k=2,K=10,v=k,X=({downloadAheadLimit:e})=>{const{t:d}=f(),n=!!e,[s,r]=B("lastDownloadAheadLimit",v,e,H),_=l=>{r(l===0?s:l),M("downloadAheadLimit",l).catch(p=>D(d("global.error.label.failed_to_save_changes"),"error",m(p)))},g=l=>{_(l?s:0)};return a.jsxs(w,{children:[a.jsxs(i,{children:[a.jsx(h,{primary:d("download.settings.download_ahead.label.while_reading")}),a.jsx(c,{edge:"end",checked:n,onChange:l=>g(l.target.checked)})]}),a.jsx(N,{settingTitle:d("download.settings.download_ahead.label.unread_chapters_to_download"),settingValue:d("download.settings.download_ahead.label.value",{chapters:s,count:s}),value:s,minValue:k,maxValue:K,defaultValue:v,showSlider:!0,dialogDescription:d("download.settings.download_ahead.label.description"),dialogDisclaimer:d("download.settings.download_ahead.label.disclaimer"),valueUnit:d("chapter.title_one"),handleUpdate:_,disabled:!n})]})},Y=[0,1,2,3,4,5],Z={0:{text:"global.label.disabled"},1:{text:"download.settings.delete_chapters.while_reading.option.label.first"},2:{text:"download.settings.delete_chapters.while_reading.option.label.second"},3:{text:"download.settings.delete_chapters.while_reading.option.label.third"},4:{text:"download.settings.delete_chapters.while_reading.option.label.fourth"},5:{text:"download.settings.delete_chapters.while_reading.option.label.fifth"}},J=Y.map(e=>[e,Z[e]]),Q=e=>typeof e=="boolean"?Number(e):e,$=({chapterToDelete:e,handleChange:d})=>{const{t:n}=f(),s=Q(e);return a.jsx(q,{settingName:n("download.settings.delete_chapters.while_reading.label.title"),value:s,values:J,handleChange:d})},ee=e=>({downloadAsCbz:e.downloadAsCbz,downloadsPath:e.downloadsPath,autoDownloadNewChapters:e.autoDownloadNewChapters,autoDownloadNewChaptersLimit:e.autoDownloadNewChaptersLimit,excludeEntryWithUnreadChapters:e.excludeEntryWithUnreadChapters,autoDownloadIgnoreReUploads:e.autoDownloadIgnoreReUploads}),ge=()=>{var S,T,L;const{t:e}=f(),{setTitle:d,setAction:n}=U();R.useLayoutEffect(()=>(d(e("download.settings.title")),n(null),()=>{d(""),n(null)}),[e]);const s=b.useGetCategories(P),r=b.useGetServerSettings({notifyOnNetworkStatusChange:!0}),[_]=b.useUpdateServerSettings(),{settings:g,loading:l,request:{error:p,refetch:A}}=V();if(r.loading||l||s.loading)return a.jsx(W,{});const E=(T=(S=r.error)!=null?S:p)!=null?T:s.error;if(E)return a.jsx(z,{message:e("global.error.label.failed_to_load_data"),messageExtra:m(E),retry:()=>{r.error&&r.refetch().catch(C()),p&&A().catch(C()),s.error&&s.refetch().catch(C())}});const t=ee(r.data.settings),u=(o,y)=>{_({variables:{input:{settings:{[o]:y}}}}).catch(I=>D(e("global.error.label.failed_to_save_changes"),"error",m(I)))},x=O(o=>D(e("global.error.label.failed_to_save_changes"),"error",m(o)));return a.jsxs(w,{sx:{pt:0},children:[a.jsx(G,{settingName:e("download.settings.download_path.label.title"),dialogDescription:e("download.settings.download_path.label.description"),value:t==null?void 0:t.downloadsPath,settingDescription:t!=null&&t.downloadsPath.length?t.downloadsPath:e("global.label.default"),handleChange:o=>u("downloadsPath",o)}),a.jsxs(i,{children:[a.jsx(h,{primary:e("download.settings.file_type.label.cbz")}),a.jsx(c,{edge:"end",checked:!!(t!=null&&t.downloadAsCbz),onChange:o=>u("downloadAsCbz",o.target.checked)})]}),a.jsxs(w,{subheader:a.jsx(j,{component:"div",id:"download-settings-auto-delete-downloads",children:e("download.settings.delete_chapters.title")}),children:[a.jsxs(i,{children:[a.jsx(h,{primary:e("download.settings.delete_chapters.label.manually_marked_as_read")}),a.jsx(c,{edge:"end",checked:g.deleteChaptersManuallyMarkedRead,onChange:o=>x("deleteChaptersManuallyMarkedRead",o.target.checked)})]}),a.jsx($,{chapterToDelete:g.deleteChaptersWhileReading,handleChange:o=>x("deleteChaptersWhileReading",o)}),a.jsxs(i,{children:[a.jsx(h,{primary:e("download.settings.delete_chapters.label.allow_deletion_of_bookmarked")}),a.jsx(c,{edge:"end",checked:g.deleteChaptersWithBookmark,onChange:o=>x("deleteChaptersWithBookmark",o.target.checked)})]})]}),a.jsxs(w,{subheader:a.jsx(j,{component:"div",id:"download-settings-auto-download",children:e("download.settings.auto_download.title")}),children:[a.jsxs(i,{children:[a.jsx(h,{primary:e("download.settings.auto_download.label.new_chapters")}),a.jsx(c,{edge:"end",checked:!!(t!=null&&t.autoDownloadNewChapters),onChange:o=>u("autoDownloadNewChapters",o.target.checked)})]}),a.jsx(N,{disabled:!(t!=null&&t.autoDownloadNewChapters),settingTitle:e("download.settings.auto_download.download_limit.label.title"),dialogDescription:e("download.settings.auto_download.download_limit.label.description"),value:(L=t==null?void 0:t.autoDownloadNewChaptersLimit)!=null?L:0,settingValue:t.autoDownloadNewChaptersLimit?e("download.settings.download_ahead.label.value",{chapters:t.autoDownloadNewChaptersLimit,count:t.autoDownloadNewChaptersLimit}):e("global.label.none"),defaultValue:0,minValue:0,maxValue:20,showSlider:!0,valueUnit:e("chapter.title_one"),handleUpdate:o=>u("autoDownloadNewChaptersLimit",o)}),a.jsxs(i,{children:[a.jsx(h,{primary:e("download.settings.auto_download.label.ignore_with_unread_chapters")}),a.jsx(c,{edge:"end",checked:!!(t!=null&&t.excludeEntryWithUnreadChapters),onChange:o=>u("excludeEntryWithUnreadChapters",o.target.checked),disabled:!(t!=null&&t.autoDownloadNewChapters)})]}),a.jsxs(i,{children:[a.jsx(h,{primary:e("download.settings.auto_download.label.ignore_re_uploads")}),a.jsx(c,{edge:"end",checked:!!(t!=null&&t.autoDownloadIgnoreReUploads),onChange:o=>u("autoDownloadIgnoreReUploads",o.target.checked),disabled:!(t!=null&&t.autoDownloadNewChapters)})]}),a.jsx(F,{categories:s.data.categories.nodes,includeField:"includeInDownload",dialogText:e("download.settings.auto_download.categories.label.include_in_download")})]}),a.jsx(w,{subheader:a.jsx(j,{component:"div",id:"download-settings-download-ahead",children:e("download.settings.download_ahead.title")}),children:a.jsx(X,{downloadAheadLimit:g.downloadAheadLimit})})]})};export{ge as DownloadSettings};
