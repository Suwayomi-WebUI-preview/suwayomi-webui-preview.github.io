import{u as S,a as p,c as x,j as e,az as T,U as g,H as M,as as E,ar as A,at as D,b as U,F as h,n as j,v as y,am as _,aH as N,N as w,W as V,h as F,E as H,k as I,av as R}from"./index-D6RYBNhe.js";import{C as O,a as G}from"./CategoriesInclusionSetting-CMlFVYPv.js";import{C as B}from"./CheckboxInput-CUyC7wfn.js";import{N as P}from"./NumberSetting-B1PCWSx9.js";import{u as q,g as z}from"./usePersistedValue-DdE0zp2b.js";import{S as f}from"./Switch-uJK7KaYC.js";import{u as W,c as X}from"./metadataServerSettings-BzXqSfB-.js";import{M as J}from"./Mangas-DTU0K87K.js";import"./ThreeStateCheckboxInput-C41jOK86.js";import"./Checkbox-CMGh2nfj.js";import"./TextField-BsPhsFsz.js";import"./SwitchBase-B0rT0SwT.js";import"./Info-6eil46u_.js";import"./InputAdornment-BMkJJMlZ.js";import"./metadata-S3rj_Joy.js";import"./Chapters-CPKjKZCN.js";const v={excludeUnreadChapters:"library.settings.global_update.entries.label.unread_chapters",excludeNotStarted:"library.settings.global_update.entries.label.not_started",excludeCompleted:"library.settings.global_update.entries.label.completed"},K=a=>{const r=[];return a.excludeUnreadChapters&&r.push(h(v.excludeUnreadChapters)),a.excludeNotStarted&&r.push(h(v.excludeNotStarted)),a.excludeCompleted&&r.push(h(v.excludeCompleted)),!r.length&&r.push(h("global.label.none")),r.join(", ")},Q=a=>({excludeCompleted:a.excludeCompleted,excludeNotStarted:a.excludeNotStarted,excludeUnreadChapters:a.excludeUnreadChapters}),Y=({serverSettings:a})=>{const{t:r}=S(),t=Q(a),[i]=p.useUpdateServerSettings(),[s,l]=x.useState(t!=null?t:{}),[d,o]=x.useState(!1),b=K(t),n=async()=>{const c=(t==null?void 0:t.excludeCompleted)!==s.excludeCompleted||t.excludeNotStarted!==s.excludeNotStarted||t.excludeUnreadChapters!==s.excludeUnreadChapters;if(o(!1),!!c)try{await i({variables:{input:{settings:s}}})}catch(m){j(r("global.error.label.failed_to_save_changes"),"error")}},C=()=>{l(t!=null?t:{}),o(!1)};return x.useEffect(()=>{t&&l(t)},[t==null?void 0:t.excludeCompleted,t==null?void 0:t.excludeNotStarted,t==null?void 0:t.excludeUnreadChapters]),e.jsxs(e.Fragment,{children:[e.jsx(T,{onClick:()=>o(!0),children:e.jsx(g,{primary:r("library.settings.global_update.entries.title"),secondary:b,onClick:()=>o(!0)})}),e.jsxs(M,{open:d,onClose:C,children:[e.jsxs(E,{children:[e.jsx(A,{sx:{paddingLeft:0},children:r("library.settings.global_update.entries.title")}),e.jsx(O,{children:Object.entries(s).map(([c,m])=>e.jsx(B,{label:r(v[c]),checked:m,onChange:(k,u)=>{l({...s,[c]:u})}},c))})]}),e.jsxs(D,{children:[e.jsx(U,{onClick:C,color:"primary",children:r("global.button.cancel")}),e.jsx(U,{onClick:n,color:"primary",children:r("global.button.ok")})]})]})]})},L=12,Z=6,$=24*7*4,ee=({globalUpdateInterval:a})=>{const{t:r}=S(),t=a,i=!!t,[s]=p.useUpdateServerSettings(),[l,d]=q("lastGlobalUpdateInterval",L,t,z),o=x.useCallback(n=>{d(n===0?l:n),s({variables:{input:{settings:{globalUpdateInterval:n}}}})},[l]),b=n=>{o(n?l:0)};return e.jsxs(y,{children:[e.jsxs(_,{children:[e.jsx(g,{primary:r("library.settings.global_update.auto_update.label.title")}),e.jsx(f,{edge:"end",checked:i,onChange:n=>b(n.target.checked)})]}),e.jsx(P,{settingTitle:r("library.settings.global_update.auto_update.interval.label.title"),settingValue:r("library.settings.global_update.auto_update.interval.label.value",{hours:l}),value:l,minValue:Z,maxValue:$,defaultValue:L,showSlider:!0,valueUnit:r("global.time.hour_short"),handleUpdate:o,disabled:!i})]})},te=({serverSettings:a,categories:r})=>{const{t}=S(),{updateMangas:i}=a,[s]=p.useUpdateServerSettings(),l=async(d,o)=>{try{await s({variables:{input:{settings:{[d]:o}}}})}catch(b){j(t("global.error.label.failed_to_save_changes"),"error")}};return e.jsxs(y,{subheader:e.jsx(N,{component:"div",id:"global-update-settings",children:t("library.settings.global_update.title")}),children:[e.jsx(ee,{globalUpdateInterval:a.globalUpdateInterval}),e.jsx(Y,{serverSettings:a}),e.jsx(G,{categories:r,includeField:"includeInUpdate",dialogText:t("library.settings.global_update.categories.label.info")}),e.jsxs(_,{children:[e.jsx(g,{primary:t("library.settings.global_update.metadata.label.title"),secondary:t("library.settings.global_update.metadata.label.description")}),e.jsx(f,{edge:"end",checked:i,onChange:d=>l("updateMangas",d.target.checked)})]})]})},ae=async()=>{try{const a=await p.getMangas({filter:{inLibrary:{equalTo:!1},categoryId:{isNull:!1}}}).response,r=J.getIds(a.data.mangas.nodes);r.length&&await p.updateMangasCategories(r,{clearCategories:!0}).response,j(h("library.settings.advanced.database.cleanup.label.success"),"success")}catch(a){j(h("library.settings.advanced.database.cleanup.label.error"),"error")}};function _e(){var m,k;const{t:a}=S(),{setTitle:r,setAction:t}=x.useContext(w);x.useEffect(()=>(r(a("library.settings.title")),t(null),()=>{r(""),t(null)}),[a]),V("settings");const i=p.useGetCategories(),s=p.useGetServerSettings({notifyOnNetworkStatusChange:!0}),{settings:l,loading:d,request:{error:o,refetch:b}}=W(),n=X(()=>j(a("search.error.label.failed_to_save_settings"),"warning"));if(s.loading||d||i.loading)return e.jsx(F,{});const c=(k=(m=s.error)!=null?m:o)!=null?k:i.error;return c?e.jsx(H,{message:a("global.error.label.failed_to_load_data"),messageExtra:c.message,retry:()=>{s.error&&(s==null||s.refetch().catch(I())),o&&b().catch(I()),i.error&&i.refetch().catch(I())}}):e.jsxs(y,{children:[e.jsxs(y,{subheader:e.jsx(N,{component:"div",id:"library-general-settings",children:a("global.label.general")}),children:[e.jsxs(_,{children:[e.jsx(g,{primary:a("library.settings.general.search.ignore_filters.label.title"),secondary:a("library.settings.general.search.ignore_filters.label.description")}),e.jsx(f,{edge:"end",checked:l.ignoreFilters,onChange:u=>n("ignoreFilters",u.target.checked)})]}),e.jsxs(_,{children:[e.jsx(g,{primary:a("library.settings.general.add_to_library.category_selection.label.title"),secondary:a("library.settings.general.add_to_library.category_selection.label.description")}),e.jsx(f,{edge:"end",checked:l.showAddToLibraryCategorySelectDialog,onChange:u=>n("showAddToLibraryCategorySelectDialog",u.target.checked)})]}),e.jsxs(_,{children:[e.jsx(g,{primary:a("library.settings.general.remove_from_library.remove_from_categories.label.title"),secondary:a("library.settings.general.remove_from_library.remove_from_categories.label.description")}),e.jsx(f,{edge:"end",checked:l.removeMangaFromCategories,onChange:u=>n("removeMangaFromCategories",u.target.checked)})]})]}),e.jsx(te,{serverSettings:s.data.settings,categories:i.data.categories.nodes}),e.jsxs(y,{subheader:e.jsx(N,{component:"div",id:"library-advanced",children:a("global.label.advanced")}),children:[e.jsx(T,{onClick:()=>ae(),children:e.jsx(g,{primary:a("library.settings.advanced.database.cleanup.label.title"),secondary:a("library.settings.advanced.database.cleanup.label.description")})}),e.jsx(R,{to:"duplicates",children:e.jsx(g,{primary:a("library.settings.advanced.duplicates.label.title"),secondary:a("library.settings.advanced.duplicates.label.description")})})]})]})}export{_e as LibrarySettings};
