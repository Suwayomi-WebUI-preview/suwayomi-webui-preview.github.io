import{c as h,j as e,S as b,u as p,g,r as j,i as v,s as f,B as T,y as M,z as _,A as y}from"./index-B5aGC8by.js";import{b as C,T as S,a as B}from"./Tabs-BOzEulNn.js";import{O as F}from"./SortRadioInput-91ELAj3V.js";import{C as O}from"./Checkbox-_9CrxReW.js";import{a as u,F as z}from"./StyledFab-BQ5uB9n_.js";import{h as P}from"./useManageMangaLibraryState-ETB_Z_jq.js";const E=({open:a,onClose:r,tabs:t,tabTitle:i,tabContent:s,minHeight:o})=>{const[c,m]=h.useState(0);return e.jsxs(F,{open:a,onClose:r,minHeight:o,children:[e.jsx(C,{value:c,variant:"fullWidth",onChange:(n,l)=>m(l),indicatorColor:"primary",textColor:"primary",children:t.map((n,l)=>e.jsx(S,{value:l,label:i(n)},n))}),t.map((n,l)=>e.jsx(B,{index:l,currentIndex:c,children:e.jsx(b,{sx:{px:3,py:1,minHeight:o},children:s(n)})},n))]})};E.defaultProps={minHeight:void 0};const w=({areAllItemsSelected:a,areNoItemsSelected:r,onChange:t})=>{const{t:i}=p();return e.jsx(g,{title:i(a?"global.button.clear":"global.button.select_all"),children:e.jsx(O,{sx:{padding:"8px"},checked:a,indeterminate:!r&&!a,onChange:(s,o)=>t(o)})})};var d={},k=v;Object.defineProperty(d,"__esModule",{value:!0});var x=d.default=void 0,R=k(j()),q=e;x=d.default=(0,R.default)((0,q.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"}),"MoreHoriz");const A=f(T)(({theme:a})=>({...u,height:"calc(".concat(u.height," + 1)"),paddingTop:"8px",zIndex:1,[a.breakpoints.down("md")]:{marginBottom:"64px"}})),U=({children:a,selectedItemsCount:r,title:t})=>{const{t:i}=p();return e.jsx(M,{variant:"popover",popupId:"selection-fab-menu",children:s=>e.jsxs(e.Fragment,{children:[e.jsx(A,{..._(s),children:e.jsxs(z,{variant:"extended",color:"primary",id:"selectionMenuButton",children:["".concat(r," ").concat(i(t,{count:r})),e.jsx(x,{sx:{ml:1}})]})}),e.jsx(P,{...y(s),id:"selectionMenu",anchorOrigin:{horizontal:"right",vertical:"top"},transformOrigin:{horizontal:"right",vertical:"bottom"},MenuListProps:{"aria-labelledby":"selectionMenuButton"},children:(o,c)=>a(o,c)})]})})};export{E as O,w as S,U as a,x as d};