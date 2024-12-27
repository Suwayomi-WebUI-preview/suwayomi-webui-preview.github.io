import{u as k,r as b,f as m,j as e,aS as L,aC as u,ap as M,aM as A,aL as D,Z as R,aO as G,e as T,aa as x,n as C,l as f,v as y,aN as _,aX as N,N as w,bf as V,q as O,k as F,E as H,m as I,aP as P,A as q,bN as B,a6 as X,y as Z}from"./index-BUJyb_rr.js";import{C as z,a as J}from"./CategoriesInclusionSetting-DytEiQic.js";import{N as K}from"./NumberSetting-ZDh6kp7O.js";import{u as Q,g as W}from"./usePersistedValue-DM-aB-72.js";import{S}from"./Switch-fqhMazHD.js";import"./ThreeStateCheckboxInput-CQDxXVLD.js";import"./Info-BFq5LZ58.js";const v={excludeUnreadChapters:"library.settings.global_update.entries.label.unread_chapters",excludeNotStarted:"library.settings.global_update.entries.label.not_started",excludeCompleted:"library.settings.global_update.entries.label.completed"},Y=t=>{const r=[];return t.excludeUnreadChapters&&r.push(x(v.excludeUnreadChapters)),t.excludeNotStarted&&r.push(x(v.excludeNotStarted)),t.excludeCompleted&&r.push(x(v.excludeCompleted)),!r.length&&r.push(x("global.label.none")),r.join(", ")},$=t=>({excludeCompleted:t.excludeCompleted,excludeNotStarted:t.excludeNotStarted,excludeUnreadChapters:t.excludeUnreadChapters}),ee=({serverSettings:t})=>{const{t:r}=k(),a=$(t),[i]=b.useUpdateServerSettings(),[s,l]=m.useState(a),[d,o]=m.useState(!1),p=Y(a),n=async()=>{const g=(a==null?void 0:a.excludeCompleted)!==s.excludeCompleted||a.excludeNotStarted!==s.excludeNotStarted||a.excludeUnreadChapters!==s.excludeUnreadChapters;if(o(!1),!!g)try{await i({variables:{input:{settings:s}}})}catch(h){C(r("global.error.label.failed_to_save_changes"),"error",f(h))}},j=()=>{l(a),o(!1)};return m.useEffect(()=>{a&&l(a)},[a==null?void 0:a.excludeCompleted,a==null?void 0:a.excludeNotStarted,a==null?void 0:a.excludeUnreadChapters]),e.jsxs(e.Fragment,{children:[e.jsx(L,{onClick:()=>o(!0),children:e.jsx(u,{primary:r("library.settings.global_update.entries.title"),secondary:p,onClick:()=>o(!0)})}),e.jsxs(M,{open:d,onClose:j,children:[e.jsxs(A,{children:[e.jsx(D,{sx:{paddingLeft:0},children:r("library.settings.global_update.entries.title")}),e.jsx(z,{children:Object.entries(s).map(([g,h])=>e.jsx(R,{label:r(v[g]),checked:h,onChange:(E,c)=>{l({...s,[g]:c})}},g))})]}),e.jsxs(G,{children:[e.jsx(T,{onClick:j,color:"primary",children:r("global.button.cancel")}),e.jsx(T,{onClick:n,color:"primary",children:r("global.button.ok")})]})]})]})},U=12,te=6,ae=24*7*4,re=({globalUpdateInterval:t})=>{const{t:r}=k(),a=t,i=!!a,[s]=b.useUpdateServerSettings(),[l,d]=Q("lastGlobalUpdateInterval",U,a,W),o=m.useCallback(n=>{d(n===0?l:n),s({variables:{input:{settings:{globalUpdateInterval:n}}}})},[l]),p=n=>{o(n?l:0)};return e.jsxs(y,{children:[e.jsxs(_,{children:[e.jsx(u,{primary:r("library.settings.global_update.auto_update.label.title")}),e.jsx(S,{edge:"end",checked:i,onChange:n=>p(n.target.checked)})]}),e.jsx(K,{settingTitle:r("library.settings.global_update.auto_update.interval.label.title"),settingValue:r("library.settings.global_update.auto_update.interval.label.value",{hours:l}),value:l,minValue:te,maxValue:ae,defaultValue:U,showSlider:!0,valueUnit:r("global.time.hour_short"),handleUpdate:o,disabled:!i})]})},se=({serverSettings:t,categories:r})=>{const{t:a}=k(),{updateMangas:i}=t,[s]=b.useUpdateServerSettings(),l=async(d,o)=>{try{await s({variables:{input:{settings:{[d]:o}}}})}catch(p){C(a("global.error.label.failed_to_save_changes"),"error",f(p))}};return e.jsxs(y,{subheader:e.jsx(N,{component:"div",id:"global-update-settings",children:a("library.settings.global_update.title")}),children:[e.jsx(re,{globalUpdateInterval:t.globalUpdateInterval}),e.jsx(ee,{serverSettings:t}),e.jsx(J,{categories:r,includeField:"includeInUpdate",dialogText:a("library.settings.global_update.categories.label.info")}),e.jsxs(_,{children:[e.jsx(u,{primary:a("library.settings.global_update.metadata.label.title"),secondary:a("library.settings.global_update.metadata.label.description")}),e.jsx(S,{edge:"end",checked:i,onChange:d=>l("updateMangas",d.target.checked)})]})]})},le=async()=>{try{const t=await b.getMangas(B,{filter:{inLibrary:{equalTo:!1},categoryId:{isNull:!1}}}).response,r=X.getIds(t.data.mangas.nodes);r.length&&await b.updateMangasCategories(r,{clearCategories:!0}).response,C(x("library.settings.advanced.database.cleanup.label.success"),"success")}catch(t){C(x("library.settings.advanced.database.cleanup.label.error"),"error",f(t))}};function pe(){var h,E;const{t}=k(),{setTitle:r,setAction:a}=m.useContext(w);m.useLayoutEffect(()=>(r(t("library.settings.title")),a(null),()=>{r(""),a(null)}),[t]);const i=b.useGetCategories(V),s=b.useGetServerSettings({notifyOnNetworkStatusChange:!0}),{settings:l,loading:d,request:{error:o,refetch:p}}=O(),n=Z(c=>C(t("search.error.label.failed_to_save_settings"),"error",f(c)));if(s.loading||d||i.loading)return e.jsx(F,{});const g=(E=(h=s.error)!=null?h:o)!=null?E:i.error;return g?e.jsx(H,{message:t("global.error.label.failed_to_load_data"),messageExtra:f(g),retry:()=>{s.error&&(s==null||s.refetch().catch(I())),o&&p().catch(I()),i.error&&i.refetch().catch(I())}}):e.jsxs(y,{sx:{pt:0},children:[e.jsxs(y,{subheader:e.jsx(N,{component:"div",id:"library-general-settings",children:t("global.label.general")}),children:[e.jsxs(_,{children:[e.jsx(u,{primary:t("library.settings.general.search.ignore_filters.label.title"),secondary:t("library.settings.general.search.ignore_filters.label.description")}),e.jsx(S,{edge:"end",checked:l.ignoreFilters,onChange:c=>n("ignoreFilters",c.target.checked)})]}),e.jsxs(_,{children:[e.jsx(u,{primary:t("library.settings.general.add_to_library.category_selection.label.title"),secondary:t("library.settings.general.add_to_library.category_selection.label.description")}),e.jsx(S,{edge:"end",checked:l.showAddToLibraryCategorySelectDialog,onChange:c=>n("showAddToLibraryCategorySelectDialog",c.target.checked)})]}),e.jsxs(_,{children:[e.jsx(u,{primary:t("library.settings.general.remove_from_library.remove_from_categories.label.title"),secondary:t("library.settings.general.remove_from_library.remove_from_categories.label.description")}),e.jsx(S,{edge:"end",checked:l.removeMangaFromCategories,onChange:c=>n("removeMangaFromCategories",c.target.checked)})]})]}),e.jsx(se,{serverSettings:s.data.settings,categories:i.data.categories.nodes}),e.jsxs(y,{subheader:e.jsx(N,{component:"div",id:"library-advanced",children:t("global.label.advanced")}),children:[e.jsx(L,{onClick:()=>le(),children:e.jsx(u,{primary:t("library.settings.advanced.database.cleanup.label.title"),secondary:t("library.settings.advanced.database.cleanup.label.description")})}),e.jsx(P,{to:q.settings.childRoutes.library.childRoutes.duplicates.path,children:e.jsx(u,{primary:t("library.settings.advanced.duplicates.label.title"),secondary:t("library.settings.advanced.duplicates.label.description")})})]})]})}export{pe as LibrarySettings};