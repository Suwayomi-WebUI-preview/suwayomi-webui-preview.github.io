import{u as I,c as i,N as j,a4 as w,d as T,s as A,a as n,bt as B,bu as N,j as m,g as b,E as k,h as x}from"./index-BwnpkvpE.js";import{G as O}from"./GridLayouts-BADRjrCt.js";import{B as P}from"./BaseMangaGrid-Cm2UfsCD.js";import"./Checkbox-gn5XznFE.js";import"./TextField-BxpA5jQl.js";import"./SwitchBase-CbxL9fNa.js";import"./ListPreference-MWGhpw7L.js";import"./MangaGrid-hDKn5s6X.js";import"./index-CTZK3NPf.js";import"./useManageMangaLibraryState-9AvQWTWo.js";import"./Trackers-D4pSmk7a.js";import"./Card-mUDuBH2-.js";import"./CardContent-4yVbJLAS.js";import"./Avatar-CCBU7naD.js";import"./Info-DNEGDZh4.js";import"./InputAdornment-GDUkZDVc.js";import"./CheckCircle-DWUpZeRK.js";import"./SpinnerImage-IAyR3wM_.js";import"./TypographyMaxLines-D2vIhvjI.js";import"./CardActionArea-B9_n3xJd.js";import"./Collapse-CZnSm_Ed.js";import"./Link-DvJoHc3x.js";import"./NumberSetting-DRL03o7c.js";import"./useMobilePicker-CkIzFh2M.js";import"./Chip-DlIbCQru.js";import"./SelectSetting-D8Wo5cV6.js";import"./Select-BiiXiPsK.js";import"./CheckboxInput-CkukYTex.js";import"./Mangas-DUHlQ_FA.js";import"./Chapters-Htra5weO.js";import"./ThreeStateCheckboxInput-N4N4LV5o.js";import"./Delete-C9FMYo7i.js";import"./Sync-CHa1Rni7.js";import"./PlayArrow-DgyRGmXD.js";import"./StyledFab-B2dx5-fH.js";const xr=()=>{var y;const{t:c}=I(),{setTitle:h,setAction:L}=i.useContext(j),{sourceId:e}=w(),[p,C]=T("migrateGridLayout",A.List),S=n.graphQLClient.client.cache.readFragment({id:n.graphQLClient.client.cache.identify({__typename:"SourceType",id:e}),fragment:B}),[t,G]=i.useState(S!==null?!0:void 0),{data:o,loading:u,error:r,refetch:_}=n.useGetSource(N,e,{skip:!!t,notifyOnNetworkStatusChange:!0}),{sourceId:d,name:a}={sourceId:e,name:e,...S,...o==null?void 0:o.source},{data:g,loading:E,error:l,refetch:M}=n.useGetMigratableSourceMangas(d,{skip:!t,notifyOnNetworkStatusChange:!0});if(i.useEffect(()=>{var s;return h((s=a!=null?a:d)!=null?s:c("migrate.title")),L(m.jsx(O,{gridLayout:p,onChange:C})),()=>{h(""),L(null)}},[c,a,d,p]),i.useEffect(()=>{u||t||G(!!o||!!(r!=null&&r.message.includes("The field at path '/source' was declared as a non null type")))},[u,r]),u||!r&&!t||E)return m.jsx(b,{});const f=r&&t===!1;if(f||l){const s=f?r:l;return m.jsx(k,{message:c("global.error.label.failed_to_load_data"),messageExtra:s.message,retry:()=>{f&&_().catch(x()),l&&M().catch(x())}})}return m.jsx(P,{hasNextPage:!1,loadMore:()=>{},isLoading:E,mangas:(y=g==null?void 0:g.mangas.nodes)!=null?y:[],gridLayout:p,mode:"migrate.search"})};export{xr as Migrate};
