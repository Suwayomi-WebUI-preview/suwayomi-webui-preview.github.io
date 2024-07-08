import{u as v,a as p,c as x,j as e,aC as L,V as g,H as M,av as U,au as A,aw as w,b as T,C as h,m as f,l as y,an as _,aL as E,N as D,aQ as G,p as V,g as R,E as F,h as I,ay as H,bf as O,bg as B}from"./index-DUjAQRrY.js";import{C as P,a as q}from"./CategoriesInclusionSetting-MydBQvTD.js";import{C as Q}from"./CheckboxInput-DbmwjMWz.js";import{N as X}from"./NumberSetting-Bck_MzZM.js";import{u as z,g as J}from"./usePersistedValue-D2vPmHRc.js";import{S as C}from"./Switch-qElWw6du.js";import{M as K}from"./Mangas-Bim3x2l-.js";import"./ThreeStateCheckboxInput-brauF-wu.js";import"./Checkbox-DFgtu5-F.js";import"./TextField-DKipAuXv.js";import"./SwitchBase-D_MNPrjx.js";import"./Info-B8LFsl9T.js";import"./InputAdornment-DpFtP99e.js";import"./Chapters-C1zX7iUp.js";const j={excludeUnreadChapters:"library.settings.global_update.entries.label.unread_chapters",excludeNotStarted:"library.settings.global_update.entries.label.not_started",excludeCompleted:"library.settings.global_update.entries.label.completed"},W=a=>{const r=[];return a.excludeUnreadChapters&&r.push(h(j.excludeUnreadChapters)),a.excludeNotStarted&&r.push(h(j.excludeNotStarted)),a.excludeCompleted&&r.push(h(j.excludeCompleted)),!r.length&&r.push(h("global.label.none")),r.join(", ")},Y=a=>({excludeCompleted:a.excludeCompleted,excludeNotStarted:a.excludeNotStarted,excludeUnreadChapters:a.excludeUnreadChapters}),Z=({serverSettings:a})=>{const{t:r}=v(),t=Y(a),[i]=p.useUpdateServerSettings(),[s,l]=x.useState(t!=null?t:{}),[d,o]=x.useState(!1),b=W(t),n=async()=>{const c=(t==null?void 0:t.excludeCompleted)!==s.excludeCompleted||t.excludeNotStarted!==s.excludeNotStarted||t.excludeUnreadChapters!==s.excludeUnreadChapters;if(o(!1),!!c)try{await i({variables:{input:{settings:s}}})}catch(m){f(r("global.error.label.failed_to_save_changes"),"error")}},S=()=>{l(t!=null?t:{}),o(!1)};return x.useEffect(()=>{t&&l(t)},[t==null?void 0:t.excludeCompleted,t==null?void 0:t.excludeNotStarted,t==null?void 0:t.excludeUnreadChapters]),e.jsxs(e.Fragment,{children:[e.jsx(L,{onClick:()=>o(!0),children:e.jsx(g,{primary:r("library.settings.global_update.entries.title"),secondary:b,onClick:()=>o(!0)})}),e.jsxs(M,{open:d,onClose:S,children:[e.jsxs(U,{children:[e.jsx(A,{sx:{paddingLeft:0},children:r("library.settings.global_update.entries.title")}),e.jsx(P,{children:Object.entries(s).map(([c,m])=>e.jsx(Q,{label:r(j[c]),checked:m,onChange:(k,u)=>{l({...s,[c]:u})}},c))})]}),e.jsxs(w,{children:[e.jsx(T,{onClick:S,color:"primary",children:r("global.button.cancel")}),e.jsx(T,{onClick:n,color:"primary",children:r("global.button.ok")})]})]})]})},N=12,$=6,ee=24*7*4,te=({globalUpdateInterval:a})=>{const{t:r}=v(),t=a,i=!!t,[s]=p.useUpdateServerSettings(),[l,d]=z("lastGlobalUpdateInterval",N,t,J),o=x.useCallback(n=>{d(n===0?l:n),s({variables:{input:{settings:{globalUpdateInterval:n}}}})},[l]),b=n=>{o(n?l:0)};return e.jsxs(y,{children:[e.jsxs(_,{children:[e.jsx(g,{primary:r("library.settings.global_update.auto_update.label.title")}),e.jsx(C,{edge:"end",checked:i,onChange:n=>b(n.target.checked)})]}),e.jsx(X,{settingTitle:r("library.settings.global_update.auto_update.interval.label.title"),settingValue:r("library.settings.global_update.auto_update.interval.label.value",{hours:l}),value:l,minValue:$,maxValue:ee,defaultValue:N,showSlider:!0,valueUnit:r("global.time.hour_short"),handleUpdate:o,disabled:!i})]})},ae=({serverSettings:a,categories:r})=>{const{t}=v(),{updateMangas:i}=a,[s]=p.useUpdateServerSettings(),l=async(d,o)=>{try{await s({variables:{input:{settings:{[d]:o}}}})}catch(b){f(t("global.error.label.failed_to_save_changes"),"error")}};return e.jsxs(y,{subheader:e.jsx(E,{component:"div",id:"global-update-settings",children:t("library.settings.global_update.title")}),children:[e.jsx(te,{globalUpdateInterval:a.globalUpdateInterval}),e.jsx(Z,{serverSettings:a}),e.jsx(q,{categories:r,includeField:"includeInUpdate",dialogText:t("library.settings.global_update.categories.label.info")}),e.jsxs(_,{children:[e.jsx(g,{primary:t("library.settings.global_update.metadata.label.title"),secondary:t("library.settings.global_update.metadata.label.description")}),e.jsx(C,{edge:"end",checked:i,onChange:d=>l("updateMangas",d.target.checked)})]})]})},re=async()=>{try{const a=await p.getMangas(O,{filter:{inLibrary:{equalTo:!1},categoryId:{isNull:!1}}}).response,r=K.getIds(a.data.mangas.nodes);r.length&&await p.updateMangasCategories(r,{clearCategories:!0}).response,f(h("library.settings.advanced.database.cleanup.label.success"),"success")}catch(a){f(h("library.settings.advanced.database.cleanup.label.error"),"error")}};function ye(){var m,k;const{t:a}=v(),{setTitle:r,setAction:t}=x.useContext(D);x.useEffect(()=>(r(a("library.settings.title")),t(null),()=>{r(""),t(null)}),[a]);const i=p.useGetCategories(G),s=p.useGetServerSettings({notifyOnNetworkStatusChange:!0}),{settings:l,loading:d,request:{error:o,refetch:b}}=V(),n=B(()=>f(a("search.error.label.failed_to_save_settings"),"warning"));if(s.loading||d||i.loading)return e.jsx(R,{});const c=(k=(m=s.error)!=null?m:o)!=null?k:i.error;return c?e.jsx(F,{message:a("global.error.label.failed_to_load_data"),messageExtra:c.message,retry:()=>{s.error&&(s==null||s.refetch().catch(I())),o&&b().catch(I()),i.error&&i.refetch().catch(I())}}):e.jsxs(y,{children:[e.jsxs(y,{subheader:e.jsx(E,{component:"div",id:"library-general-settings",children:a("global.label.general")}),children:[e.jsxs(_,{children:[e.jsx(g,{primary:a("library.settings.general.search.ignore_filters.label.title"),secondary:a("library.settings.general.search.ignore_filters.label.description")}),e.jsx(C,{edge:"end",checked:l.ignoreFilters,onChange:u=>n("ignoreFilters",u.target.checked)})]}),e.jsxs(_,{children:[e.jsx(g,{primary:a("library.settings.general.add_to_library.category_selection.label.title"),secondary:a("library.settings.general.add_to_library.category_selection.label.description")}),e.jsx(C,{edge:"end",checked:l.showAddToLibraryCategorySelectDialog,onChange:u=>n("showAddToLibraryCategorySelectDialog",u.target.checked)})]}),e.jsxs(_,{children:[e.jsx(g,{primary:a("library.settings.general.remove_from_library.remove_from_categories.label.title"),secondary:a("library.settings.general.remove_from_library.remove_from_categories.label.description")}),e.jsx(C,{edge:"end",checked:l.removeMangaFromCategories,onChange:u=>n("removeMangaFromCategories",u.target.checked)})]})]}),e.jsx(ae,{serverSettings:s.data.settings,categories:i.data.categories.nodes}),e.jsxs(y,{subheader:e.jsx(E,{component:"div",id:"library-advanced",children:a("global.label.advanced")}),children:[e.jsx(L,{onClick:()=>re(),children:e.jsx(g,{primary:a("library.settings.advanced.database.cleanup.label.title"),secondary:a("library.settings.advanced.database.cleanup.label.description")})}),e.jsx(H,{to:"duplicates",children:e.jsx(g,{primary:a("library.settings.advanced.duplicates.label.title"),secondary:a("library.settings.advanced.duplicates.label.description")})})]})]})}export{ye as LibrarySettings};
