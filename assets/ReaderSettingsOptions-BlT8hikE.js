import{b7 as b,a as j,aE as _,b6 as T,b8 as w,c as k,H as R,a0 as S,j as e,B as C,M as P,u as L,o as D,ay as u,a4 as p,a2 as x}from"./index-hGrGI_de.js";import{N as M}from"./NumberSetting-BIhrxw9P.js";import{S as N}from"./SpinnerImage-BDp9shPt.js";import{S as E}from"./Select-B9_A5Gcc.js";import{S as m}from"./Switch-CWpgT_ql.js";const W={staticNav:!1,showPageNumber:!0,loadNextOnEnding:!1,skipDupChapters:!0,fitPageToWindow:!0,scalePage:!1,readerType:"ContinuesVertical",offsetFirstPage:!1,readerWidth:50},f=(t,n=W,r=!0)=>w({meta:t},n,r),H=(t,n,r)=>f(t,n,r),z=({meta:t}={},n,r)=>H(b(t),n,r),A=()=>{const t=j.useGetGlobalMeta({notifyOnNetworkStatusChange:!0}),{data:n,loading:r}=t,o=b(n==null?void 0:n.metas.nodes),d=f(o);return{metadata:o,settings:d,loading:r,request:t}},G=async(t,n,r)=>{const o=()=>Array.isArray(t)?t:t.meta,d=b(o()),i=f(d,{staticNav:void 0,showPageNumber:void 0,loadNextOnEnding:void 0,skipDupChapters:void 0,fitPageToWindow:void 0,scalePage:void 0,readerType:void 0,offsetFirstPage:void 0,readerWidth:void 0},!1),c=z({meta:o()},r),h=Object.entries(i).filter(l=>l[1]===void 0),g=[];if(h.forEach(l=>{const a=l[0];g.push([a,c[a]])}),!!h.length){if(n==="manga"){await _(t,g);return}await T(g)}},y=t=>["ContinuesHorizontalLTR","ContinuesHorizontalRTL"].includes(t);function F(t){const n=["DoubleRTL","DoubleLTR"].includes(t.readerType),r=t.readerType==="ContinuesVertical",o=y(t.readerType),d=P.useGetScrollbarSize("height"),i={margin:0,width:"".concat(t.readerWidth,"%"),objectFit:"contain"},c={},h={marginBottom:"15px"},g={width:void 0,minHeight:"calc(100vh - ".concat(d,"px)"),maxHeight:"calc(100vh - ".concat(d,"px)"),marginLeft:"7px",marginRight:"7px"},l={width:void 0,height:void 0,minWidth:t.scalePage?"calc(100vw - (100vw - 100%))":void 0,maxWidth:"calc(100vw - (100vw - 100%))",minHeight:t.scalePage?"calc(100vh - ".concat(d,"px)"):void 0,maxHeight:"calc(100vh - ".concat(d,"px)")};return{...i,...n?c:void 0,...o?g:void 0,...r?h:void 0,...t.fitPageToWindow&&!o?l:void 0}}const B=k.forwardRef((t,n)=>{const{src:r,index:o,onImageLoad:d,settings:i,display:c=!0}=t,h=R(),g=S(h.breakpoints.down("md")),l=F(i);return e.jsx(C,{ref:n,sx:{display:c?"flex":"none",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:e.jsx(N,{src:r,onImageLoad:d,alt:"Page #".concat(o),spinnerStyle:{...l,height:"100vh",width:g?"100vw":y(i.readerType)?"50vw":"calc(100% * 0.5)",backgroundColor:"background.paper"},imgStyle:l})})});function Q({staticNav:t,loadNextOnEnding:n,readerType:r,showPageNumber:o,skipDupChapters:d,setSettingValue:i,fitPageToWindow:c,scalePage:h,offsetFirstPage:g,readerWidth:l}){const{t:a}=L(),v=!y(r);return e.jsxs(D,{sx:{pt:0},children:[e.jsxs(u,{children:[e.jsx(p,{primary:a("reader.settings.label.static_navigation")}),e.jsx(m,{edge:"end",checked:t,onChange:s=>i("staticNav",s.target.checked)})]}),e.jsxs(u,{children:[e.jsx(p,{primary:a("reader.settings.label.show_page_number")}),e.jsx(m,{edge:"end",checked:o,onChange:s=>i("showPageNumber",s.target.checked)})]}),e.jsxs(u,{children:[e.jsx(p,{primary:a("reader.settings.label.load_next_chapter")}),e.jsx(m,{edge:"end",checked:n,onChange:s=>i("loadNextOnEnding",s.target.checked)})]}),e.jsxs(u,{children:[e.jsx(p,{primary:a("reader.settings.label.skip_dup_chapters")}),e.jsx(m,{edge:"end",checked:d,onChange:s=>i("skipDupChapters",s.target.checked)})]}),v&&e.jsxs(u,{children:[e.jsx(p,{primary:a("reader.settings.label.fit_page_to_window")}),e.jsx(m,{edge:"end",checked:c,onChange:s=>i("fitPageToWindow",s.target.checked)})]}),v&&c&&e.jsxs(u,{children:[e.jsx(p,{primary:a("reader.settings.label.scale_page")}),e.jsx(m,{edge:"end",checked:h,onChange:s=>i("scalePage",s.target.checked)})]}),(r==="DoubleLTR"||r==="DoubleRTL")&&e.jsxs(u,{children:[e.jsx(p,{primary:a("reader.settings.label.offset_first_page")}),e.jsx(m,{edge:"end",checked:g,onChange:s=>i("offsetFirstPage",s.target.checked)})]}),v&&!c&&e.jsx(M,{settingTitle:a("reader.settings.label.reader_width"),settingValue:"".concat(l,"%"),value:l,minValue:10,maxValue:100,defaultValue:50,valueUnit:"%",showSlider:!0,handleUpdate:s=>i("readerWidth",s),handleLiveUpdate:s=>i("readerWidth",s,!1),listItemTextSx:{display:"flex",alignItems:"center",justifyContent:"space-between"}}),e.jsxs(u,{children:[e.jsx(p,{primary:a("reader.settings.label.reader_type")}),e.jsxs(E,{variant:"standard",value:r,onChange:s=>i("readerType",s.target.value),sx:{p:0},children:[e.jsx(x,{value:"SingleLTR",children:a("reader.settings.reader_type.label.single_page_ltr")}),e.jsx(x,{value:"SingleRTL",children:a("reader.settings.reader_type.label.single_page_rtl")}),e.jsx(x,{value:"DoubleLTR",children:a("reader.settings.reader_type.label.double_page_ltr")}),e.jsx(x,{value:"DoubleRTL",children:a("reader.settings.reader_type.label.double_page_rtl")}),e.jsx(x,{value:"Webtoon",children:a("reader.settings.reader_type.label.webtoon")}),e.jsx(x,{value:"ContinuesVertical",children:a("reader.settings.reader_type.label.continuous_vertical")}),e.jsx(x,{value:"ContinuesHorizontalLTR",children:a("reader.settings.reader_type.label.continuous_horizontal_ltr")}),e.jsx(x,{value:"ContinuesHorizontalRTL",children:a("reader.settings.reader_type.label.continuous_horizontal_rtl")})]})]})]})}export{W as D,B as P,Q as R,G as c,z as g,A as u};