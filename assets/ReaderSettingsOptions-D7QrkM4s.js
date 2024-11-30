import{a as _,c as x,ba as f,bb as T,O as w,a3 as R,j as e,B as k,M as C,u as S,o as L,aC as c,a7 as g,a5 as h}from"./index-DCLtpUvd.js";import{N as P}from"./NumberSetting-Cm-1w_1U.js";import{S as D}from"./SpinnerImage-pue1bji5.js";import{S as M}from"./Select-CRELDKpa.js";import{S as u}from"./Switch-D5pJQoaq.js";const H={staticNav:!1,showPageNumber:!0,loadNextOnEnding:!1,skipDupChapters:!0,fitPageToWindow:!0,scalePage:!1,readerType:"ContinuesVertical",offsetFirstPage:!1,readerWidth:50};function y(t,s,i=H,o){return T(t,s,i,!0,o)}const z=(t,s,i)=>y("manga",{...t,meta:f(t.meta)},s,i),G=(t,s)=>z(t,s),O=()=>{const t=_.useGetGlobalMeta({notifyOnNetworkStatusChange:!0}),{data:s,loading:i}=t,o=x.useMemo(()=>f(s==null?void 0:s.metas.nodes),[s==null?void 0:s.metas.nodes]),l=x.useMemo(()=>({meta:o}),[o]),n=y("global",l,void 0,x.useEffect),d=x.useMemo(()=>n,[l]);return x.useMemo(()=>({metadata:o,settings:d,loading:i,request:t}),[o,d,i,t])},v=t=>["ContinuesHorizontalLTR","ContinuesHorizontalRTL"].includes(t);function E(t){const s=["DoubleRTL","DoubleLTR"].includes(t.readerType),i=t.readerType==="ContinuesVertical",o=v(t.readerType),l=C.useGetScrollbarSize("height"),n={margin:0,width:"".concat(t.readerWidth,"%"),objectFit:"contain"},d={},m={marginBottom:"15px"},b={width:void 0,minHeight:"calc(100vh - ".concat(l,"px)"),maxHeight:"calc(100vh - ".concat(l,"px)"),marginLeft:"7px",marginRight:"7px"},p={width:void 0,height:void 0,minWidth:t.scalePage?"calc(100vw - (100vw - 100%))":void 0,maxWidth:"calc(100vw - (100vw - 100%))",minHeight:t.scalePage?"calc(100vh - ".concat(l,"px)"):void 0,maxHeight:"calc(100vh - ".concat(l,"px)")};return{...n,...s?d:void 0,...o?b:void 0,...i?m:void 0,...t.fitPageToWindow&&!o?p:void 0}}const U=x.forwardRef((t,s)=>{const{src:i,index:o,onImageLoad:l,settings:n,display:d=!0,priority:m}=t,b=w(),p=R(b.breakpoints.down("md")),a=E(n);return e.jsx(k,{ref:s,sx:{display:d?"flex":"none",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:e.jsx(D,{priority:m,src:i,onImageLoad:l,alt:"Page #".concat(o),spinnerStyle:{...a,height:"100vh",width:p?"100vw":v(n.readerType)?"50vw":"calc(100% * 0.5)",backgroundColor:"background.paper"},imgStyle:a})})});function q({staticNav:t,loadNextOnEnding:s,readerType:i,showPageNumber:o,skipDupChapters:l,setSettingValue:n,fitPageToWindow:d,scalePage:m,offsetFirstPage:b,readerWidth:p}){const{t:a}=S(),j=!v(i);return e.jsxs(L,{sx:{pt:0},children:[e.jsxs(c,{children:[e.jsx(g,{primary:a("reader.settings.label.static_navigation")}),e.jsx(u,{edge:"end",checked:t,onChange:r=>n("staticNav",r.target.checked)})]}),e.jsxs(c,{children:[e.jsx(g,{primary:a("reader.settings.label.show_page_number")}),e.jsx(u,{edge:"end",checked:o,onChange:r=>n("showPageNumber",r.target.checked)})]}),e.jsxs(c,{children:[e.jsx(g,{primary:a("reader.settings.label.load_next_chapter")}),e.jsx(u,{edge:"end",checked:s,onChange:r=>n("loadNextOnEnding",r.target.checked)})]}),e.jsxs(c,{children:[e.jsx(g,{primary:a("reader.settings.label.skip_dup_chapters")}),e.jsx(u,{edge:"end",checked:l,onChange:r=>n("skipDupChapters",r.target.checked)})]}),j&&e.jsxs(c,{children:[e.jsx(g,{primary:a("reader.settings.label.fit_page_to_window")}),e.jsx(u,{edge:"end",checked:d,onChange:r=>n("fitPageToWindow",r.target.checked)})]}),j&&d&&e.jsxs(c,{children:[e.jsx(g,{primary:a("reader.settings.label.scale_page")}),e.jsx(u,{edge:"end",checked:m,onChange:r=>n("scalePage",r.target.checked)})]}),(i==="DoubleLTR"||i==="DoubleRTL")&&e.jsxs(c,{children:[e.jsx(g,{primary:a("reader.settings.label.offset_first_page")}),e.jsx(u,{edge:"end",checked:b,onChange:r=>n("offsetFirstPage",r.target.checked)})]}),j&&!d&&e.jsx(P,{settingTitle:a("reader.settings.label.reader_width"),settingValue:"".concat(p,"%"),value:p,minValue:10,maxValue:100,defaultValue:50,valueUnit:"%",showSlider:!0,handleUpdate:r=>n("readerWidth",r),handleLiveUpdate:r=>n("readerWidth",r,!1),listItemTextSx:{display:"flex",alignItems:"center",justifyContent:"space-between"}}),e.jsxs(c,{children:[e.jsx(g,{primary:a("reader.settings.label.reader_type")}),e.jsxs(M,{variant:"standard",value:i,onChange:r=>n("readerType",r.target.value),sx:{p:0},children:[e.jsx(h,{value:"SingleLTR",children:a("reader.settings.reader_type.label.single_page_ltr")}),e.jsx(h,{value:"SingleRTL",children:a("reader.settings.reader_type.label.single_page_rtl")}),e.jsx(h,{value:"DoubleLTR",children:a("reader.settings.reader_type.label.double_page_ltr")}),e.jsx(h,{value:"DoubleRTL",children:a("reader.settings.reader_type.label.double_page_rtl")}),e.jsx(h,{value:"Webtoon",children:a("reader.settings.reader_type.label.webtoon")}),e.jsx(h,{value:"ContinuesVertical",children:a("reader.settings.reader_type.label.continuous_vertical")}),e.jsx(h,{value:"ContinuesHorizontalLTR",children:a("reader.settings.reader_type.label.continuous_horizontal_ltr")}),e.jsx(h,{value:"ContinuesHorizontalRTL",children:a("reader.settings.reader_type.label.continuous_horizontal_rtl")})]})]})]})}export{U as P,q as R,G as g,O as u};