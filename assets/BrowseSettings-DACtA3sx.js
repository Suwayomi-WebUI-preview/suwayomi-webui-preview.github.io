import{u as j,c,N as y,d as _,a as o,p as P,j as t,g as E,E as I,h as C,k as N,ax as u,a3 as d,v as T}from"./index-BwnpkvpE.js";import{N as L}from"./NumberSetting-DRL03o7c.js";import{M}from"./MutableListSetting-BTJD5MUr.js";import{T as R}from"./TextSetting-D6EIaRMC.js";import{S as m}from"./Switch-B-FwG5SL.js";import{T as U}from"./Trans-DZ_ydTw8.js";import"./Info-DNEGDZh4.js";import"./TextField-BxpA5jQl.js";import"./InputAdornment-GDUkZDVc.js";import"./Delete-C9FMYo7i.js";import"./PasswordTextField-DQI0yegl.js";import"./SwitchBase-CbxL9fNa.js";const k=e=>({maxSourcesInParallel:e.maxSourcesInParallel,localSourcePath:e.localSourcePath,extensionRepos:e.extensionRepos}),J=()=>{const{t:e}=j(),{setTitle:p,setAction:g}=c.useContext(y);c.useEffect(()=>{p(e("settings.browse.title")),g(null)},[e]);const[i,h]=_("showNsfw",!0),{data:x,loading:S,error:n,refetch:b}=o.useGetServerSettings({notifyOnNetworkStatusChange:!0}),[v]=o.useUpdateServerSettings(),a=(s,w)=>{v({variables:{input:{settings:{[s]:w}}}})},{settings:{hideLibraryEntries:l}}=P(),f=T();if(S)return t.jsx(E,{});if(n)return t.jsx(I,{message:e("global.error.label.failed_to_load_data"),messageExtra:n.message,retry:()=>b().catch(C())});const r=k(x.settings);return t.jsxs(N,{sx:{pt:0},children:[t.jsxs(u,{children:[t.jsx(d,{primary:e("settings.label.hide_library_entries")}),t.jsx(m,{edge:"end",checked:l,onChange:()=>f("hideLibraryEntries",!l)})]}),t.jsxs(u,{children:[t.jsx(d,{primary:e("settings.label.show_nsfw"),secondary:e("settings.label.show_nsfw_description")}),t.jsx(m,{edge:"end",checked:i,onChange:()=>h(!i)})]}),t.jsx(L,{settingTitle:e("settings.server.requests.sources.parallel.label.title"),settingValue:e("settings.server.requests.sources.parallel.label.value",{value:r.maxSourcesInParallel,count:r.maxSourcesInParallel}),valueUnit:e("source.title_one"),value:r.maxSourcesInParallel,defaultValue:6,minValue:1,maxValue:20,showSlider:!0,stepSize:1,handleUpdate:s=>a("maxSourcesInParallel",s)}),t.jsx(M,{settingName:e("extension.settings.repositories.custom.label.title"),description:e("extension.settings.repositories.custom.label.description"),dialogDisclaimer:t.jsxs(U,{i18nKey:"extension.settings.repositories.custom.label.disclaimer",children:[t.jsx("strong",{children:"Suwayomi does not provide any support for 3rd party repositories or extensions!"}),t.jsx("br",{}),"Use with caution as there could be malicious actors making those repositories.",t.jsx("br",{}),"You as the user need to verify the security and that you trust any repository or extension."]}),handleChange:s=>{a("extensionRepos",s),o.clearExtensionCache()},valueInfos:r.extensionRepos.map(s=>[s]),addItemButtonTitle:e("extension.settings.repositories.custom.dialog.action.button.add"),placeholder:"https://github.com/MY_ACCOUNT/MY_REPO/tree/repo",validateItem:s=>!!s.match(/https:\/\/(www\.|raw\.)?(github|githubusercontent)\.com\/([^/]+)\/([^/]+)((\/tree|\/blob)?\/([^/\n]*))?(\/([^/\n]*\.json)?)?/g),invalidItemError:e("extension.settings.repositories.custom.error.label.invalid_url")}),t.jsx(R,{settingName:e("settings.server.local_source.path.label.title"),dialogDescription:e("settings.server.local_source.path.label.description"),value:r.localSourcePath,handleChange:s=>a("localSourcePath",s)})]})};export{J as BrowseSettings};
