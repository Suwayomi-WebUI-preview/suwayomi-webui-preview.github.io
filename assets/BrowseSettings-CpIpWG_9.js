import{u as y,f as P,h as E,g as I,r as o,q as C,j as t,l as M,E as N,m as i,n as T,w as L,aX as u,aM as g,s as R,bR as U,o as d}from"./index-Dy5OnhgT.js";import{N as k}from"./NumberSetting-DocFrHeL.js";import{M as V}from"./MutableListSetting-CAKJERwL.js";import{T as q}from"./TextSetting-Xf60-GJM.js";import{S as h}from"./Switch-H6D39V8H.js";import"./Info-BSu-k2oP.js";import"./PasswordTextField-DzOAp9Ho.js";const B=e=>({maxSourcesInParallel:e.maxSourcesInParallel,localSourcePath:e.localSourcePath,extensionRepos:e.extensionRepos}),K=()=>{const{t:e}=y(),{setTitle:m,setAction:p}=P();E.useLayoutEffect(()=>{m(e("global.label.browse")),p(null)},[e]);const[n,x]=I("showNsfw",!0),{data:b,loading:S,error:l,refetch:f}=o.useGetServerSettings({notifyOnNetworkStatusChange:!0}),[v]=o.useUpdateServerSettings(),r=(s,_)=>{v({variables:{input:{settings:{[s]:_}}}}).catch(j=>d(e("global.error.label.failed_to_save_changes"),"error",i(j)))},{settings:{hideLibraryEntries:c}}=C(),w=R(s=>d(e("global.error.label.failed_to_save_changes"),"error",i(s)));if(S)return t.jsx(M,{});if(l)return t.jsx(N,{message:e("global.error.label.failed_to_load_data"),messageExtra:i(l),retry:()=>f().catch(T())});const a=B(b.settings);return t.jsxs(L,{sx:{pt:0},children:[t.jsxs(u,{children:[t.jsx(g,{primary:e("settings.label.hide_library_entries")}),t.jsx(h,{edge:"end",checked:c,onChange:()=>w("hideLibraryEntries",!c)})]}),t.jsxs(u,{children:[t.jsx(g,{primary:e("settings.label.show_nsfw"),secondary:e("settings.label.show_nsfw_description")}),t.jsx(h,{edge:"end",checked:n,onChange:()=>x(!n)})]}),t.jsx(k,{settingTitle:e("settings.server.requests.sources.parallel.label.title"),settingValue:e("settings.server.requests.sources.parallel.label.value",{value:a.maxSourcesInParallel,count:a.maxSourcesInParallel}),valueUnit:e("source.title_one"),value:a.maxSourcesInParallel,defaultValue:6,minValue:1,maxValue:20,showSlider:!0,stepSize:1,handleUpdate:s=>r("maxSourcesInParallel",s)}),t.jsx(V,{settingName:e("extension.settings.repositories.custom.label.title"),description:e("extension.settings.repositories.custom.label.description"),dialogDisclaimer:t.jsxs(U,{i18nKey:"extension.settings.repositories.custom.label.disclaimer",children:[t.jsx("strong",{children:"Suwayomi does not provide any support for 3rd party repositories or extensions!"}),t.jsx("br",{}),"Use with caution as there could be malicious actors making those repositories.",t.jsx("br",{}),"You as the user need to verify the security and that you trust any repository or extension."]}),handleChange:s=>{r("extensionRepos",s),o.clearExtensionCache()},valueInfos:a.extensionRepos.map(s=>[s]),addItemButtonTitle:e("extension.settings.repositories.custom.dialog.action.button.add"),placeholder:"https://github.com/MY_ACCOUNT/MY_REPO/tree/repo",validateItem:s=>!!s.match(/https:\/\/(www\.|raw\.)?(github|githubusercontent)\.com\/([^/]+)\/([^/]+)((\/tree|\/blob)?\/([^/\n]*))?(\/([^/\n]*\.json)?)?/g),invalidItemError:e("extension.settings.repositories.custom.error.label.invalid_url")}),t.jsx(q,{settingName:e("settings.server.local_source.path.label.title"),dialogDescription:e("settings.server.local_source.path.label.description"),value:a.localSourcePath,settingDescription:a.localSourcePath.length?a.localSourcePath:e("global.label.default"),handleChange:s=>r("localSourcePath",s)})]})};export{K as BrowseSettings};
