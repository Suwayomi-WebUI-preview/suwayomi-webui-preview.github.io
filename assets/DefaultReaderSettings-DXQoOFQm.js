import{u as f,c as i,N as h,j as a,g as E,h as n,b5 as x,b6 as T,m as P}from"./index-hGrGI_de.js";import{u as _,c as N,R as S,D as b}from"./ReaderSettingsOptions-BlT8hikE.js";import{E as R}from"./EmptyViewAbsoluteCentered-CeUeOoxL.js";import"./NumberSetting-BIhrxw9P.js";import"./Info-BxTLBuR7.js";import"./TextField-DE9RgjWO.js";import"./InputAdornment-B26zh0L6.js";import"./SpinnerImage-BDp9shPt.js";import"./Refresh-YymEaZ0l.js";import"./Select-B9_A5Gcc.js";import"./Switch-CWpgT_ql.js";import"./SwitchBase-Bq0nbTZZ.js";function M(){const{t}=f(),{setTitle:r,setAction:s}=i.useContext(h);i.useLayoutEffect(()=>(r(t("reader.settings.title.default_reader_settings")),s(null),()=>{r(""),s(null)}),[t]);const{metadata:d,settings:e,loading:l,request:{error:o,refetch:g}}=_(),u=(m,p,c=!0)=>{c&&T([[m,p]]).catch(()=>P(t("reader.settings.error.label.failed_to_save_settings"),"warning"))};return l?a.jsx(E,{}):o?a.jsx(R,{message:t("global.error.label.failed_to_load_data"),messageExtra:o.message,retry:()=>g().catch(n())}):(N({meta:x(d)},"server",b).catch(n()),a.jsx(S,{setSettingValue:u,staticNav:e.staticNav,showPageNumber:e.showPageNumber,loadNextOnEnding:e.loadNextOnEnding,skipDupChapters:e.skipDupChapters,fitPageToWindow:e.fitPageToWindow,scalePage:e.scalePage,readerType:e.readerType,offsetFirstPage:e.offsetFirstPage,readerWidth:e.readerWidth}))}export{M as DefaultReaderSettings};