import{u as I,r as b,h as _,j as e,b1 as D,aM as c,ar as G,aW as V,aV as F,_ as O,aZ as H,e as A,ae as y,o as S,m as v,w as m,aX as j,aY as C,b8 as k,f as q,bh as B,q as P,l as X,E as W,n as L,a_ as U,A as R,s as Y,bR as Z,a7 as $}from"./index-vK5lg1Vd.js";import{C as z,a as J}from"./CategoriesInclusionSetting-CpnE-qF9.js";import{N as K}from"./NumberSetting-BvZB7dUu.js";import{u as Q,g as ee}from"./usePersistedValue-C-6AnxIC.js";import"./Info-E8AWyAtl.js";const E={excludeUnreadChapters:"library.settings.global_update.entries.label.unread_chapters",excludeNotStarted:"library.settings.global_update.entries.label.not_started",excludeCompleted:"library.settings.global_update.entries.label.completed"},te=t=>{const r=[];return t.excludeUnreadChapters&&r.push(y(E.excludeUnreadChapters)),t.excludeNotStarted&&r.push(y(E.excludeNotStarted)),t.excludeCompleted&&r.push(y(E.excludeCompleted)),!r.length&&r.push(y("global.label.none")),r.join(", ")},ae=t=>({excludeCompleted:t.excludeCompleted,excludeNotStarted:t.excludeNotStarted,excludeUnreadChapters:t.excludeUnreadChapters}),re=({serverSettings:t})=>{const{t:r}=I(),a=ae(t),[n]=b.useUpdateServerSettings(),[s,l]=_.useState(a!=null?a:{}),[d,o]=_.useState(!1),g=te(a),i=async()=>{const h=(a==null?void 0:a.excludeCompleted)!==s.excludeCompleted||a.excludeNotStarted!==s.excludeNotStarted||a.excludeUnreadChapters!==s.excludeUnreadChapters;if(o(!1),!!h)try{await n({variables:{input:{settings:s}}})}catch(x){S(r("global.error.label.failed_to_save_changes"),"error",v(x))}},p=()=>{l(a!=null?a:{}),o(!1)};return _.useEffect(()=>{a&&l(a)},[a==null?void 0:a.excludeCompleted,a==null?void 0:a.excludeNotStarted,a==null?void 0:a.excludeUnreadChapters]),e.jsxs(e.Fragment,{children:[e.jsx(D,{onClick:()=>o(!0),children:e.jsx(c,{primary:r("library.settings.global_update.entries.title"),secondary:g,onClick:()=>o(!0)})}),e.jsxs(G,{open:d,onClose:p,children:[e.jsxs(V,{children:[e.jsx(F,{sx:{paddingLeft:0},children:r("library.settings.global_update.entries.title")}),e.jsx(z,{children:Object.entries(s).map(([h,x])=>e.jsx(O,{label:r(E[h]),checked:x,onChange:(T,f)=>{l({...s,[h]:f})}},h))})]}),e.jsxs(H,{children:[e.jsx(A,{onClick:p,color:"primary",children:r("global.button.cancel")}),e.jsx(A,{onClick:i,color:"primary",children:r("global.button.ok")})]})]})]})},w=12,se=6,le=24*7*4,ne=({globalUpdateInterval:t})=>{const{t:r}=I(),a=t,n=!!a,[s]=b.useUpdateServerSettings(),[l,d]=Q("lastGlobalUpdateInterval",w,a,ee),o=_.useCallback(i=>{d(i===0?l:i),s({variables:{input:{settings:{globalUpdateInterval:i}}}})},[l]),g=i=>{o(i?l:0)};return e.jsxs(m,{children:[e.jsxs(j,{children:[e.jsx(c,{primary:r("library.settings.global_update.auto_update.label.title")}),e.jsx(C,{edge:"end",checked:n,onChange:i=>g(i.target.checked)})]}),e.jsx(K,{settingTitle:r("library.settings.global_update.auto_update.interval.label.title"),settingValue:r("library.settings.global_update.auto_update.interval.label.value",{hours:l}),value:l,minValue:se,maxValue:le,defaultValue:w,showSlider:!0,valueUnit:r("global.time.hour_short"),handleUpdate:o,disabled:!n})]})},ie=({serverSettings:t,categories:r})=>{const{t:a}=I(),{updateMangas:n}=t,[s]=b.useUpdateServerSettings(),l=async(d,o)=>{try{await s({variables:{input:{settings:{[d]:o}}}})}catch(g){S(a("global.error.label.failed_to_save_changes"),"error",v(g))}};return e.jsxs(m,{subheader:e.jsx(k,{component:"div",id:"global-update-settings",children:a("library.settings.global_update.title")}),children:[e.jsx(ne,{globalUpdateInterval:t.globalUpdateInterval}),e.jsx(re,{serverSettings:t}),e.jsx(J,{categories:r,includeField:"includeInUpdate",dialogText:a("library.settings.global_update.categories.label.info")}),e.jsxs(j,{children:[e.jsx(c,{primary:a("library.settings.global_update.metadata.label.title"),secondary:a("library.settings.global_update.metadata.label.description")}),e.jsx(C,{edge:"end",checked:n,onChange:d=>l("updateMangas",d.target.checked)})]})]})},oe=async()=>{try{const t=await b.getMangas(Z,{filter:{inLibrary:{equalTo:!1},categoryId:{isNull:!1}}}).response,r=$.getIds(t.data.mangas.nodes);r.length&&await b.updateMangasCategories(r,{clearCategories:!0}).response,S(y("library.settings.advanced.database.cleanup.label.success"),"success")}catch(t){S(y("library.settings.advanced.database.cleanup.label.error"),"error",v(t))}};function pe(){var T,f,N,M;const{t}=I(),{setTitle:r,setAction:a}=q();_.useLayoutEffect(()=>(r(t("library.title")),a(null),()=>{r(""),a(null)}),[t]);const n=b.useGetCategories(B),s=b.useGetServerSettings({notifyOnNetworkStatusChange:!0}),{settings:l,loading:d,request:{error:o,refetch:g}}=P(),i=Y(u=>S(t("search.error.label.failed_to_save_settings"),"error",v(u))),p=((f=(T=n.data)==null?void 0:T.categories.nodes.length)!=null?f:1)-1;if(s.loading||d||n.loading)return e.jsx(X,{});const x=(M=(N=s.error)!=null?N:o)!=null?M:n.error;return x?e.jsx(W,{message:t("global.error.label.failed_to_load_data"),messageExtra:v(x),retry:()=>{s.error&&(s==null||s.refetch().catch(L())),o&&g().catch(L()),n.error&&n.refetch().catch(L())}}):e.jsxs(m,{sx:{pt:0},children:[e.jsxs(m,{subheader:e.jsx(k,{component:"div",id:"library-category-settings",children:t("category.title.category_other")}),children:[e.jsx(U,{to:R.settings.childRoutes.categories.path,children:e.jsx(c,{primary:t("category.dialog.title.edit_category_other"),secondary:t("global.value",{value:p,unit:" ".concat(t("category.title.category",{count:p})).toLocaleLowerCase()})})}),e.jsxs(j,{children:[e.jsx(c,{primary:t("library.settings.general.add_to_library.category_selection.label.title"),secondary:t("library.settings.general.add_to_library.category_selection.label.description")}),e.jsx(C,{edge:"end",checked:l.showAddToLibraryCategorySelectDialog,onChange:u=>i("showAddToLibraryCategorySelectDialog",u.target.checked)})]}),e.jsxs(j,{children:[e.jsx(c,{primary:t("library.settings.general.remove_from_library.remove_from_categories.label.title"),secondary:t("library.settings.general.remove_from_library.remove_from_categories.label.description")}),e.jsx(C,{edge:"end",checked:l.removeMangaFromCategories,onChange:u=>i("removeMangaFromCategories",u.target.checked)})]})]}),e.jsx(m,{subheader:e.jsx(k,{component:"div",id:"library-general-settings",children:t("global.label.general")}),children:e.jsxs(j,{children:[e.jsx(c,{primary:t("library.settings.general.search.ignore_filters.label.title"),secondary:t("library.settings.general.search.ignore_filters.label.description")}),e.jsx(C,{edge:"end",checked:l.ignoreFilters,onChange:u=>i("ignoreFilters",u.target.checked)})]})}),e.jsx(ie,{serverSettings:s.data.settings,categories:n.data.categories.nodes}),e.jsxs(m,{subheader:e.jsx(k,{component:"div",id:"library-advanced",children:t("global.label.advanced")}),children:[e.jsx(D,{onClick:()=>oe(),children:e.jsx(c,{primary:t("library.settings.advanced.database.cleanup.label.title"),secondary:t("library.settings.advanced.database.cleanup.label.description")})}),e.jsx(U,{to:R.settings.childRoutes.library.childRoutes.duplicates.path,children:e.jsx(c,{primary:t("library.settings.advanced.duplicates.label.title"),secondary:t("library.settings.advanced.duplicates.label.description")})})]})]})}export{pe as LibrarySettings};
