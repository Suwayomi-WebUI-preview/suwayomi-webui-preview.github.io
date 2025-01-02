import{u as k,r as b,f as m,j as e,aT as L,aD as u,aq as M,aN as A,aM as D,Z as R,aP as G,e as N,ab as x,n as j,l as C,v as y,aO as _,aY as T,N as w,bg as V,q as O,k as F,E as H,m as I,aQ as P,A as q,bP as B,a7 as Q,y as X}from"./index-BAJWok1j.js";import{C as Y,a as Z}from"./CategoriesInclusionSetting-CEkfQFLN.js";import{N as z}from"./NumberSetting-C9MPMLwj.js";import{u as J,g as K}from"./usePersistedValue-DpmrYLHT.js";import{S}from"./Switch-j2snOgWu.js";import"./ThreeStateCheckboxInput-iBVEC-lL.js";import"./Info-BGEuh4ts.js";const v={excludeUnreadChapters:"library.settings.global_update.entries.label.unread_chapters",excludeNotStarted:"library.settings.global_update.entries.label.not_started",excludeCompleted:"library.settings.global_update.entries.label.completed"},W=t=>{const r=[];return t.excludeUnreadChapters&&r.push(x(v.excludeUnreadChapters)),t.excludeNotStarted&&r.push(x(v.excludeNotStarted)),t.excludeCompleted&&r.push(x(v.excludeCompleted)),!r.length&&r.push(x("global.label.none")),r.join(", ")},$=t=>({excludeCompleted:t.excludeCompleted,excludeNotStarted:t.excludeNotStarted,excludeUnreadChapters:t.excludeUnreadChapters}),ee=({serverSettings:t})=>{const{t:r}=k(),a=$(t),[i]=b.useUpdateServerSettings(),[s,l]=m.useState(a),[d,o]=m.useState(!1),p=W(a),n=async()=>{const g=(a==null?void 0:a.excludeCompleted)!==s.excludeCompleted||a.excludeNotStarted!==s.excludeNotStarted||a.excludeUnreadChapters!==s.excludeUnreadChapters;if(o(!1),!!g)try{await i({variables:{input:{settings:s}}})}catch(h){j(r("global.error.label.failed_to_save_changes"),"error",C(h))}},f=()=>{l(a),o(!1)};return m.useEffect(()=>{a&&l(a)},[a==null?void 0:a.excludeCompleted,a==null?void 0:a.excludeNotStarted,a==null?void 0:a.excludeUnreadChapters]),e.jsxs(e.Fragment,{children:[e.jsx(L,{onClick:()=>o(!0),children:e.jsx(u,{primary:r("library.settings.global_update.entries.title"),secondary:p,onClick:()=>o(!0)})}),e.jsxs(M,{open:d,onClose:f,children:[e.jsxs(A,{children:[e.jsx(D,{sx:{paddingLeft:0},children:r("library.settings.global_update.entries.title")}),e.jsx(Y,{children:Object.entries(s).map(([g,h])=>e.jsx(R,{label:r(v[g]),checked:h,onChange:(E,c)=>{l({...s,[g]:c})}},g))})]}),e.jsxs(G,{children:[e.jsx(N,{onClick:f,color:"primary",children:r("global.button.cancel")}),e.jsx(N,{onClick:n,color:"primary",children:r("global.button.ok")})]})]})]})},U=12,te=6,ae=24*7*4,re=({globalUpdateInterval:t})=>{const{t:r}=k(),a=t,i=!!a,[s]=b.useUpdateServerSettings(),[l,d]=J("lastGlobalUpdateInterval",U,a,K),o=m.useCallback(n=>{d(n===0?l:n),s({variables:{input:{settings:{globalUpdateInterval:n}}}})},[l]),p=n=>{o(n?l:0)};return e.jsxs(y,{children:[e.jsxs(_,{children:[e.jsx(u,{primary:r("library.settings.global_update.auto_update.label.title")}),e.jsx(S,{edge:"end",checked:i,onChange:n=>p(n.target.checked)})]}),e.jsx(z,{settingTitle:r("library.settings.global_update.auto_update.interval.label.title"),settingValue:r("library.settings.global_update.auto_update.interval.label.value",{hours:l}),value:l,minValue:te,maxValue:ae,defaultValue:U,showSlider:!0,valueUnit:r("global.time.hour_short"),handleUpdate:o,disabled:!i})]})},se=({serverSettings:t,categories:r})=>{const{t:a}=k(),{updateMangas:i}=t,[s]=b.useUpdateServerSettings(),l=async(d,o)=>{try{await s({variables:{input:{settings:{[d]:o}}}})}catch(p){j(a("global.error.label.failed_to_save_changes"),"error",C(p))}};return e.jsxs(y,{subheader:e.jsx(T,{component:"div",id:"global-update-settings",children:a("library.settings.global_update.title")}),children:[e.jsx(re,{globalUpdateInterval:t.globalUpdateInterval}),e.jsx(ee,{serverSettings:t}),e.jsx(Z,{categories:r,includeField:"includeInUpdate",dialogText:a("library.settings.global_update.categories.label.info")}),e.jsxs(_,{children:[e.jsx(u,{primary:a("library.settings.global_update.metadata.label.title"),secondary:a("library.settings.global_update.metadata.label.description")}),e.jsx(S,{edge:"end",checked:i,onChange:d=>l("updateMangas",d.target.checked)})]})]})},le=async()=>{try{const t=await b.getMangas(B,{filter:{inLibrary:{equalTo:!1},categoryId:{isNull:!1}}}).response,r=Q.getIds(t.data.mangas.nodes);r.length&&await b.updateMangasCategories(r,{clearCategories:!0}).response,j(x("library.settings.advanced.database.cleanup.label.success"),"success")}catch(t){j(x("library.settings.advanced.database.cleanup.label.error"),"error",C(t))}};function pe(){var h,E;const{t}=k(),{setTitle:r,setAction:a}=m.useContext(w);m.useLayoutEffect(()=>(r(t("library.settings.title")),a(null),()=>{r(""),a(null)}),[t]);const i=b.useGetCategories(V),s=b.useGetServerSettings({notifyOnNetworkStatusChange:!0}),{settings:l,loading:d,request:{error:o,refetch:p}}=O(),n=X(c=>j(t("search.error.label.failed_to_save_settings"),"error",C(c)));if(s.loading||d||i.loading)return e.jsx(F,{});const g=(E=(h=s.error)!=null?h:o)!=null?E:i.error;return g?e.jsx(H,{message:t("global.error.label.failed_to_load_data"),messageExtra:C(g),retry:()=>{s.error&&(s==null||s.refetch().catch(I())),o&&p().catch(I()),i.error&&i.refetch().catch(I())}}):e.jsxs(y,{sx:{pt:0},children:[e.jsxs(y,{subheader:e.jsx(T,{component:"div",id:"library-general-settings",children:t("global.label.general")}),children:[e.jsxs(_,{children:[e.jsx(u,{primary:t("library.settings.general.search.ignore_filters.label.title"),secondary:t("library.settings.general.search.ignore_filters.label.description")}),e.jsx(S,{edge:"end",checked:l.ignoreFilters,onChange:c=>n("ignoreFilters",c.target.checked)})]}),e.jsxs(_,{children:[e.jsx(u,{primary:t("library.settings.general.add_to_library.category_selection.label.title"),secondary:t("library.settings.general.add_to_library.category_selection.label.description")}),e.jsx(S,{edge:"end",checked:l.showAddToLibraryCategorySelectDialog,onChange:c=>n("showAddToLibraryCategorySelectDialog",c.target.checked)})]}),e.jsxs(_,{children:[e.jsx(u,{primary:t("library.settings.general.remove_from_library.remove_from_categories.label.title"),secondary:t("library.settings.general.remove_from_library.remove_from_categories.label.description")}),e.jsx(S,{edge:"end",checked:l.removeMangaFromCategories,onChange:c=>n("removeMangaFromCategories",c.target.checked)})]})]}),e.jsx(se,{serverSettings:s.data.settings,categories:i.data.categories.nodes}),e.jsxs(y,{subheader:e.jsx(T,{component:"div",id:"library-advanced",children:t("global.label.advanced")}),children:[e.jsx(L,{onClick:()=>le(),children:e.jsx(u,{primary:t("library.settings.advanced.database.cleanup.label.title"),secondary:t("library.settings.advanced.database.cleanup.label.description")})}),e.jsx(P,{to:q.settings.childRoutes.library.childRoutes.duplicates.path,children:e.jsx(u,{primary:t("library.settings.advanced.duplicates.label.title"),secondary:t("library.settings.advanced.duplicates.label.description")})})]})]})}export{pe as LibrarySettings};