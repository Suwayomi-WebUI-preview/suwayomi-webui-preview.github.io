import{u as I,c as i,N as j,a1 as w,d as A,p as B,a as n,bA as T,bB as N,j as m,g as b,E as k,h as x}from"./index-aRdpybDP.js";import{G as O}from"./GridLayouts-C4idoAA-.js";import{B as P}from"./BaseMangaGrid-CCl9xvi5.js";import"./ViewModule-BftJ554t.js";import"./Checkbox-DITc9wrS.js";import"./TextField-DfS5boU6.js";import"./SwitchBase-DFtR10K2.js";import"./ListPreference-AzBShjVc.js";import"./MangaGrid-DmxvSwmR.js";import"./index-DsS6TrSK.js";import"./useManageMangaLibraryState-BW2WFnvP.js";import"./Trackers-D4pSmk7a.js";import"./CardContent-D1Dp0n3h.js";import"./Avatar-CJ9wqF4h.js";import"./Info-Dj2Lixue.js";import"./InputAdornment-CALBSqkc.js";import"./SpinnerImage-c3XjFys8.js";import"./TypographyMaxLines-BDCzE731.js";import"./Collapse-CdRNzg6L.js";import"./Link-Cs1KyJcr.js";import"./NumberSetting-tbcxM65U.js";import"./useMobilePicker-CfXLf0Rz.js";import"./Chip-CHdcBjyC.js";import"./SelectSetting-CCia1R9z.js";import"./Select-BUmRC8yt.js";import"./CheckboxInput-DHYzS8d7.js";import"./Mangas-BOW8RIyZ.js";import"./Chapters-DxvYXbnp.js";import"./ThreeStateCheckboxInput-BbgrBGOX.js";import"./Delete-O6q18e_o.js";import"./Sync-1e-a-E2E.js";import"./PlayArrow-DMfA4sks.js";import"./StyledFab-Bj1Ar6Ir.js";const Er=()=>{var y;const{t:c}=I(),{setTitle:h,setAction:L}=i.useContext(j),{sourceId:e}=w(),[p,C]=A("migrateGridLayout",B.List),S=n.graphQLClient.client.cache.readFragment({id:n.graphQLClient.client.cache.identify({__typename:"SourceType",id:e}),fragment:T}),[t,G]=i.useState(S!==null?!0:void 0),{data:o,loading:u,error:r,refetch:_}=n.useGetSource(N,e,{skip:!!t,notifyOnNetworkStatusChange:!0}),{sourceId:d,name:a}={sourceId:e,name:e,...S,...o==null?void 0:o.source},{data:g,loading:E,error:l,refetch:M}=n.useGetMigratableSourceMangas(d,{skip:!t,notifyOnNetworkStatusChange:!0});if(i.useEffect(()=>{var s;return h((s=a!=null?a:d)!=null?s:c("migrate.title")),L(m.jsx(O,{gridLayout:p,onChange:C})),()=>{h(""),L(null)}},[c,a,d,p]),i.useEffect(()=>{u||t||G(!!o||!!(r!=null&&r.message.includes("The field at path '/source' was declared as a non null type")))},[u,r]),u||!r&&!t||E)return m.jsx(b,{});const f=r&&t===!1;if(f||l){const s=f?r:l;return m.jsx(k,{message:c("global.error.label.failed_to_load_data"),messageExtra:s.message,retry:()=>{f&&_().catch(x()),l&&M().catch(x())}})}return m.jsx(P,{hasNextPage:!1,loadMore:()=>{},isLoading:E,mangas:(y=g==null?void 0:g.mangas.nodes)!=null?y:[],gridLayout:p,mode:"migrate.search"})};export{Er as Migrate};
