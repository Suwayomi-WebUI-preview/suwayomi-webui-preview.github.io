import{u as I,c as i,N as j,a4 as w,d as T,s as A,a as n,bt as B,bu as N,j as m,g as b,E as k,h as x}from"./index-D7SWUMPx.js";import{G as O}from"./GridLayouts-CnwwXA7t.js";import{B as P}from"./BaseMangaGrid-D9aVOgSb.js";import"./Checkbox-CiBXPgmQ.js";import"./TextField-B2ccOPWR.js";import"./SwitchBase-BUxi2zfe.js";import"./ListPreference-BAQPaNmU.js";import"./MangaGrid-BJowbU-v.js";import"./index-CL41gnou.js";import"./useManageMangaLibraryState-elOHx5PW.js";import"./Trackers-D4pSmk7a.js";import"./Card-BSp48nn6.js";import"./CardContent-AaVrPXZ2.js";import"./Avatar-Cec4o5e3.js";import"./Info-DA40Kq7v.js";import"./InputAdornment-CGBqzNY1.js";import"./CheckCircle-qjH12UpK.js";import"./SpinnerImage-C87K3Zhx.js";import"./TypographyMaxLines-tcESkZIC.js";import"./CardActionArea-DKHQrD7L.js";import"./Collapse-IFz-T9b8.js";import"./Link-3i_eF2OP.js";import"./NumberSetting-DsumE_Fy.js";import"./useMobilePicker-DWhDg4BQ.js";import"./Chip-D-f-GxtK.js";import"./SelectSetting-D-IjkPyD.js";import"./Select-DRmBqwQg.js";import"./CheckboxInput-CuItB8Y4.js";import"./Mangas-CrNLgX32.js";import"./Chapters-DyxnRpKM.js";import"./ThreeStateCheckboxInput-N9-FQLR-.js";import"./Delete-Cb-cvmNU.js";import"./Sync-DpWpJbrB.js";import"./PlayArrow-OSYpZGUx.js";import"./StyledFab-Cw0OwoFq.js";const xr=()=>{var y;const{t:c}=I(),{setTitle:h,setAction:L}=i.useContext(j),{sourceId:e}=w(),[p,C]=T("migrateGridLayout",A.List),S=n.graphQLClient.client.cache.readFragment({id:n.graphQLClient.client.cache.identify({__typename:"SourceType",id:e}),fragment:B}),[t,G]=i.useState(S!==null?!0:void 0),{data:o,loading:u,error:r,refetch:_}=n.useGetSource(N,e,{skip:!!t,notifyOnNetworkStatusChange:!0}),{sourceId:d,name:a}={sourceId:e,name:e,...S,...o==null?void 0:o.source},{data:g,loading:E,error:l,refetch:M}=n.useGetMigratableSourceMangas(d,{skip:!t,notifyOnNetworkStatusChange:!0});if(i.useEffect(()=>{var s;return h((s=a!=null?a:d)!=null?s:c("migrate.title")),L(m.jsx(O,{gridLayout:p,onChange:C})),()=>{h(""),L(null)}},[c,a,d,p]),i.useEffect(()=>{u||t||G(!!o||!!(r!=null&&r.message.includes("The field at path '/source' was declared as a non null type")))},[u,r]),u||!r&&!t||E)return m.jsx(b,{});const f=r&&t===!1;if(f||l){const s=f?r:l;return m.jsx(k,{message:c("global.error.label.failed_to_load_data"),messageExtra:s.message,retry:()=>{f&&_().catch(x()),l&&M().catch(x())}})}return m.jsx(P,{hasNextPage:!1,loadMore:()=>{},isLoading:E,mangas:(y=g==null?void 0:g.mangas.nodes)!=null?y:[],gridLayout:p,mode:"migrate.search"})};export{xr as Migrate};