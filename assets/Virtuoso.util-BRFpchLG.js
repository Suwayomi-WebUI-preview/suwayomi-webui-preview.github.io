import{f as u,j as l,bX as x,a7 as i,d as g,aj as f,h as d,B as I}from"./index-D1T6UDnO.js";const v=({heightToSubtract:r=0,style:e,...s})=>{const{appBarHeight:o,bottomBarHeight:t}=u();return l.jsx(x,{...s,style:{...e,height:"calc(100vh - ".concat(r,"px - ").concat(o,"px - ").concat(t,"px - ").concat(t?"0px":"env(safe-area-inset-bottom)",")")}})},G=i(g,{shouldForwardProp:f(["isFirstItem"])})(({theme:r,isFirstItem:e})=>({paddingLeft:r.spacing(3),paddingTop:r.spacing(.75),paddingBottom:r.spacing(2),fontWeight:"bold",backgroundColor:r.palette.background.default,[r.breakpoints.down("sm")]:{paddingTop:e?r.spacing(1):r.spacing(.75)}})),b=d.memo(i(I)(({theme:r})=>({padding:r.spacing(0,1,1,1)})));class h{static convertIndex(e,s,o){for(let t=0;t<s.length;t++){const a=s[t],n=o[t];if(e<=n-1){const p=n-e===a+1;return{type:p?"group":"normal",index:p?t:e-(t+1),groupIndex:t}}}throw new Error('Unexpected "'.concat(e,'" (').concat(e,') and "groupCounts" (').concat(s,")"))}static useCreateConvertIndex(e){const s=d.useMemo(()=>{var t;const o=[];for(let a=0;a<e.length;a++){const n=(t=o[a-1])!=null?t:0;o[a]=e[a]+1+n}return o},[e]);return d.useCallback(o=>this.convertIndex(o,e,s),[s])}static useCreateGroupedComputeItemKey(e,s,o){const t=this.useCreateConvertIndex(e);return d.useCallback(a=>{const{type:n,index:c,groupIndex:p}=t(a);switch(n){case"group":return s(c,p);case"normal":return o(c,p);default:throw new Error('VirtuosoUtil::useCreateGroupedComputeItemKey: unexpected "converted index type" ('.concat(n,")"))}},[t,s,o])}}export{v as S,h as V,b as a,G as b};
