import{u as f,c as o,N as h,j as a,g as x,E as P,h as n,b3 as E,b4 as b,m as N}from"./index-D7SWUMPx.js";import{u as S,c as T,R as _,a as v}from"./ReaderSettingsOptions-D3FzY9Nn.js";import"./NumberSetting-DsumE_Fy.js";import"./Info-DA40Kq7v.js";import"./TextField-B2ccOPWR.js";import"./InputAdornment-CGBqzNY1.js";import"./SpinnerImage-C87K3Zhx.js";import"./Select-DRmBqwQg.js";import"./Switch-CcNi1jK-.js";import"./SwitchBase-BUxi2zfe.js";function M(){const{t}=f(),{setTitle:r,setAction:s}=o.useContext(h);o.useEffect(()=>(r(t("reader.settings.title.default_reader_settings")),s(null),()=>{r(""),s(null)}),[t]);const{metadata:d,settings:e,loading:l,request:{error:i,refetch:g}}=S(),u=(c,m,p=!0)=>{p&&b([[c,m]]).catch(()=>N(t("reader.settings.error.label.failed_to_save_settings"),"warning"))};return l?a.jsx(x,{}):i?a.jsx(P,{message:t("global.error.label.failed_to_load_data"),messageExtra:i.message,retry:()=>g().catch(n())}):(T({meta:E(d)},"server",v()).catch(n()),a.jsx(_,{setSettingValue:u,staticNav:e.staticNav,showPageNumber:e.showPageNumber,loadNextOnEnding:e.loadNextOnEnding,skipDupChapters:e.skipDupChapters,fitPageToWindow:e.fitPageToWindow,scalePage:e.scalePage,readerType:e.readerType,offsetFirstPage:e.offsetFirstPage,readerWidth:e.readerWidth}))}export{M as DefaultReaderSettings};