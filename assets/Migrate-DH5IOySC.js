import{u as w,c as i,N as I,a5 as j,d as T,y as A,a as n,bv as B,bw as N,j as m,g as b,h as x}from"./index-hGrGI_de.js";import{E as k}from"./EmptyViewAbsoluteCentered-CeUeOoxL.js";import{G as O}from"./GridLayouts-BoJWiiRh.js";import{B as P}from"./BaseMangaGrid-BsKPuKmF.js";import"./Checkbox-BCPWLvFX.js";import"./TextField-DE9RgjWO.js";import"./SwitchBase-Bq0nbTZZ.js";import"./ListPreference-BGRCL_q4.js";import"./MangaGrid-D-ggc-Jc.js";import"./index-DHFHNtf5.js";import"./useManageMangaLibraryState-BCAfmJje.js";import"./Trackers-D4pSmk7a.js";import"./Card-MgQywnP9.js";import"./CardContent-0oshIiMj.js";import"./Avatar-Cf0uFFSV.js";import"./Info-BxTLBuR7.js";import"./InputAdornment-B26zh0L6.js";import"./CheckCircle-B0gxF3zi.js";import"./SpinnerImage-BDp9shPt.js";import"./Refresh-YymEaZ0l.js";import"./TypographyMaxLines-DH1Q6jH2.js";import"./Mangas-1BSWhB_Q.js";import"./Chapters-DETV8P-0.js";import"./CardActionArea-BiLI2PLu.js";import"./Collapse-DqQTbddW.js";import"./Link-06Wt9Ze5.js";import"./NumberSetting-BIhrxw9P.js";import"./useMobilePicker-BSzmavBh.js";import"./Chip-m3IdTiwm.js";import"./SelectSetting-ZJFb-fw4.js";import"./Select-B9_A5Gcc.js";import"./CheckboxInput-BghfBw6n.js";import"./ThreeStateCheckboxInput-CGh51bXo.js";import"./Delete-CH3IrRGL.js";import"./Download-PexyEcY-.js";import"./Sync-gZU7YaOd.js";import"./PlayArrow-06Wt65h1.js";import"./StyledFab-D6OL5W5z.js";const _r=()=>{var y;const{t:c}=w(),{setTitle:h,setAction:L}=i.useContext(I),{sourceId:o}=j(),[p,C]=T("migrateGridLayout",A.List),S=n.graphQLClient.client.cache.readFragment({id:n.graphQLClient.client.cache.identify({__typename:"SourceType",id:o}),fragment:B}),[t,G]=i.useState(S!==null?!0:void 0),{data:e,loading:u,error:r,refetch:_}=n.useGetSource(N,o,{skip:!!t,notifyOnNetworkStatusChange:!0}),{sourceId:d,name:a}={sourceId:o,name:o,...S,...e==null?void 0:e.source},{data:g,loading:E,error:l,refetch:M}=n.useGetMigratableSourceMangas(d,{skip:!t,notifyOnNetworkStatusChange:!0});if(i.useLayoutEffect(()=>{var s;return h((s=a!=null?a:d)!=null?s:c("migrate.title")),L(m.jsx(O,{gridLayout:p,onChange:C})),()=>{h(""),L(null)}},[c,a,d,p]),i.useEffect(()=>{u||t||G(!!e||!!(r!=null&&r.message.includes("The field at path '/source' was declared as a non null type")))},[u,r]),u||!r&&!t||E)return m.jsx(b,{});const f=r&&t===!1;if(f||l){const s=f?r:l;return m.jsx(k,{message:c("global.error.label.failed_to_load_data"),messageExtra:s.message,retry:()=>{f&&_().catch(x()),l&&M().catch(x())}})}return m.jsx(P,{hasNextPage:!1,loadMore:()=>{},isLoading:E,mangas:(y=g==null?void 0:g.mangas.nodes)!=null?y:[],gridLayout:p,mode:"migrate.search"})};export{_r as Migrate};
