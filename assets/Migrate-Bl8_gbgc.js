import{u as I,f as i,N as j,aA as w,g as A,X as T,r as n,bP as k,bQ as B,j as c,k as N,E as P,l as b,m as x}from"./index-BBxBRE3D.js";import{G as O}from"./GridLayouts-DG4hyIyS.js";import{B as R}from"./BaseMangaGrid-jPJFFKIk.js";import"./ListPreference-CiABvY_8.js";import"./MangaGrid-DRaSDEwo.js";import"./useManageMangaLibraryState-C5ZhDVal.js";import"./Trackers-D4pSmk7a.js";import"./Avatar-DHY-7fs9.js";import"./Info-C37ROMPZ.js";import"./TextField-jroXO8C8.js";import"./InputAdornment-0PRAydS4.js";import"./CheckCircle-PcXQbJFy.js";import"./Mangas-Crsv2nGq.js";import"./NumberSetting-Bc-eOI-L.js";import"./useMobilePicker-BO3Oa0F-.js";import"./Chip-BRQNipLZ.js";import"./SelectSetting-DHfv4Thi.js";import"./ThreeStateCheckboxInput-BdPmTsJy.js";import"./Sync-By9unYgF.js";import"./PlayArrow-DXcXBpYs.js";import"./StyledFab-ROdVB3aj.js";const ce=()=>{var y;const{t:u}=I(),{setTitle:h,setAction:L}=i.useContext(j),{sourceId:t}=w(),[m,C]=A("migrateGridLayout",T.List),E=n.graphQLClient.client.cache.readFragment({id:n.graphQLClient.client.cache.identify({__typename:"SourceType",id:t}),fragment:k}),[r,G]=i.useState(E!==null?!0:void 0),{data:a,loading:d,error:e,refetch:M}=n.useGetSource(B,t,{skip:!!r,notifyOnNetworkStatusChange:!0}),{sourceId:g,name:o}={sourceId:t,name:t,...E,...a==null?void 0:a.source},{data:p,loading:S,error:l,refetch:_}=n.useGetMigratableSourceMangas(g,{skip:!r,notifyOnNetworkStatusChange:!0});if(i.useLayoutEffect(()=>{var s;return h((s=o!=null?o:g)!=null?s:u("migrate.title")),L(c.jsx(O,{gridLayout:m,onChange:C})),()=>{h(""),L(null)}},[u,o,g,m]),i.useEffect(()=>{d||r||G(!!a||!!(e!=null&&e.message.includes("The field at path '/source' was declared as a non null type")))},[d,e]),d||!e&&!r||S)return c.jsx(N,{});const f=e&&r===!1;if(f||l){const s=f?e:l;return c.jsx(P,{message:u("global.error.label.failed_to_load_data"),messageExtra:b(s),retry:()=>{f&&M().catch(x()),l&&_().catch(x())}})}return c.jsx(R,{hasNextPage:!1,loadMore:()=>{},isLoading:S,mangas:(y=p==null?void 0:p.mangas.nodes)!=null?y:[],gridLayout:m,mode:"migrate.search"})};export{ce as Migrate};
