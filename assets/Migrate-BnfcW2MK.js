import{u as I,c as i,N as j,a1 as w,d as T,p as A,a as n,br as B,bs as N,j as m,g as b,E as k,h as x}from"./index-3BgSjiAU.js";import{G as O}from"./GridLayouts-I_T5SwBk.js";import{B as P}from"./BaseMangaGrid-CDFeeIhR.js";import"./Checkbox-CdVFsHbF.js";import"./TextField-zLe547JY.js";import"./SwitchBase-C4xgFcP9.js";import"./ListPreference-CZ2gBqJc.js";import"./MangaGrid-Qn_ESNPX.js";import"./index-DzJ8Uuty.js";import"./useManageMangaLibraryState-Bsg8NOBi.js";import"./Trackers-D4pSmk7a.js";import"./Card-CzE045je.js";import"./CardContent-Ch2wKEDj.js";import"./Avatar-BLk680lt.js";import"./Info-CvwtdBTb.js";import"./InputAdornment-CmbKGJhs.js";import"./CheckCircle-DGPGZ-Mz.js";import"./SpinnerImage-C3UGIXPn.js";import"./TypographyMaxLines-CaAuzfoO.js";import"./CardActionArea-dBFZskxN.js";import"./Collapse-CdT_0pSd.js";import"./Link-BS4yKD0g.js";import"./NumberSetting-DH9l3KL8.js";import"./useMobilePicker-CLvSmTsH.js";import"./Chip-DlEu7Jrx.js";import"./SelectSetting-YpMY6-QU.js";import"./Select-Df9bsSXq.js";import"./CheckboxInput-BzaOoJDd.js";import"./Mangas-BxejpJ2m.js";import"./Chapters-BQSVXONB.js";import"./ThreeStateCheckboxInput-DizKxPXS.js";import"./Delete-C4WlJ5KK.js";import"./Sync-DWL8zJYc.js";import"./PlayArrow-C4i9l6qz.js";import"./StyledFab-Dr4b3v-S.js";const xr=()=>{var y;const{t:c}=I(),{setTitle:h,setAction:L}=i.useContext(j),{sourceId:e}=w(),[p,C]=T("migrateGridLayout",A.List),S=n.graphQLClient.client.cache.readFragment({id:n.graphQLClient.client.cache.identify({__typename:"SourceType",id:e}),fragment:B}),[t,G]=i.useState(S!==null?!0:void 0),{data:o,loading:u,error:r,refetch:_}=n.useGetSource(N,e,{skip:!!t,notifyOnNetworkStatusChange:!0}),{sourceId:d,name:a}={sourceId:e,name:e,...S,...o==null?void 0:o.source},{data:g,loading:E,error:l,refetch:M}=n.useGetMigratableSourceMangas(d,{skip:!t,notifyOnNetworkStatusChange:!0});if(i.useEffect(()=>{var s;return h((s=a!=null?a:d)!=null?s:c("migrate.title")),L(m.jsx(O,{gridLayout:p,onChange:C})),()=>{h(""),L(null)}},[c,a,d,p]),i.useEffect(()=>{u||t||G(!!o||!!(r!=null&&r.message.includes("The field at path '/source' was declared as a non null type")))},[u,r]),u||!r&&!t||E)return m.jsx(b,{});const f=r&&t===!1;if(f||l){const s=f?r:l;return m.jsx(k,{message:c("global.error.label.failed_to_load_data"),messageExtra:s.message,retry:()=>{f&&_().catch(x()),l&&M().catch(x())}})}return m.jsx(P,{hasNextPage:!1,loadMore:()=>{},isLoading:E,mangas:(y=g==null?void 0:g.mangas.nodes)!=null?y:[],gridLayout:p,mode:"migrate.search"})};export{xr as Migrate};
