import{u as P,f as c,N as E,g as I,c as o,s as C,j as t,l as N,E as L,m as T,w as M,aL as u,aA as g,bI as R,n as d,o as m,z as U}from"./index-C-NRbn2J.js";import{N as k}from"./NumberSetting-CWXMAhoj.js";import{M as V}from"./MutableListSetting-4hzYRrEL.js";import{T as A}from"./TextSetting-CPPsVnu9.js";import{S as h}from"./Switch-Cx6nj76p.js";import"./Info-s1022MQE.js";import"./TextField-DbGGHPPy.js";import"./InputAdornment-Ba1B_yfN.js";import"./PasswordTextField-cFOjPskF.js";const B=e=>({maxSourcesInParallel:e.maxSourcesInParallel,localSourcePath:e.localSourcePath,extensionRepos:e.extensionRepos}),J=()=>{const{t:e}=P(),{setTitle:p,setAction:x}=c.useContext(E);c.useLayoutEffect(()=>{p(e("settings.browse.title")),x(null)},[e]);const[i,S]=I("showNsfw",!0),{data:b,loading:f,error:n,refetch:v}=o.useGetServerSettings({notifyOnNetworkStatusChange:!0}),[w]=o.useUpdateServerSettings(),r=(s,j)=>{w({variables:{input:{settings:{[s]:j}}}}).catch(y=>d(e("global.error.label.failed_to_save_changes"),"error",m(y)))},{settings:{hideLibraryEntries:l}}=C(),_=U(s=>d(e("global.error.label.failed_to_save_changes"),"error",m(s)));if(f)return t.jsx(N,{});if(n)return t.jsx(L,{message:e("global.error.label.failed_to_load_data"),messageExtra:n.message,retry:()=>v().catch(T())});const a=B(b.settings);return t.jsxs(M,{sx:{pt:0},children:[t.jsxs(u,{children:[t.jsx(g,{primary:e("settings.label.hide_library_entries")}),t.jsx(h,{edge:"end",checked:l,onChange:()=>_("hideLibraryEntries",!l)})]}),t.jsxs(u,{children:[t.jsx(g,{primary:e("settings.label.show_nsfw"),secondary:e("settings.label.show_nsfw_description")}),t.jsx(h,{edge:"end",checked:i,onChange:()=>S(!i)})]}),t.jsx(k,{settingTitle:e("settings.server.requests.sources.parallel.label.title"),settingValue:e("settings.server.requests.sources.parallel.label.value",{value:a.maxSourcesInParallel,count:a.maxSourcesInParallel}),valueUnit:e("source.title_one"),value:a.maxSourcesInParallel,defaultValue:6,minValue:1,maxValue:20,showSlider:!0,stepSize:1,handleUpdate:s=>r("maxSourcesInParallel",s)}),t.jsx(V,{settingName:e("extension.settings.repositories.custom.label.title"),description:e("extension.settings.repositories.custom.label.description"),dialogDisclaimer:t.jsxs(R,{i18nKey:"extension.settings.repositories.custom.label.disclaimer",children:[t.jsx("strong",{children:"Suwayomi does not provide any support for 3rd party repositories or extensions!"}),t.jsx("br",{}),"Use with caution as there could be malicious actors making those repositories.",t.jsx("br",{}),"You as the user need to verify the security and that you trust any repository or extension."]}),handleChange:s=>{r("extensionRepos",s),o.clearExtensionCache()},valueInfos:a.extensionRepos.map(s=>[s]),addItemButtonTitle:e("extension.settings.repositories.custom.dialog.action.button.add"),placeholder:"https://github.com/MY_ACCOUNT/MY_REPO/tree/repo",validateItem:s=>!!s.match(/https:\/\/(www\.|raw\.)?(github|githubusercontent)\.com\/([^/]+)\/([^/]+)((\/tree|\/blob)?\/([^/\n]*))?(\/([^/\n]*\.json)?)?/g),invalidItemError:e("extension.settings.repositories.custom.error.label.invalid_url")}),t.jsx(A,{settingName:e("settings.server.local_source.path.label.title"),dialogDescription:e("settings.server.local_source.path.label.description"),value:a.localSourcePath,settingDescription:a.localSourcePath.length?a.localSourcePath:e("global.label.default"),handleChange:s=>r("localSourcePath",s)})]})};export{J as BrowseSettings};
