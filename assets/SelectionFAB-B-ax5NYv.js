import{f as m,j as e,aE as b,F as j,G as g,d as v,u as x,k as f,$ as M,r as T,i as _,a1 as F,B as C,ae as k,af as y,aF as B,ai as O}from"./index-DCoLbMjA.js";import{O as S}from"./SortRadioInput-DkJUs2V2.js";import{a as u,F as E}from"./StyledFab-BbuLVg5P.js";const A=({open:a,onClose:r,tabs:t,tabTitle:i,tabContent:s,minHeight:n})=>{const[c,h]=m.useState(0);return e.jsxs(S,{open:a,onClose:r,minHeight:n,children:[e.jsx(b,{value:c,variant:"fullWidth",onChange:(o,l)=>h(l),indicatorColor:"primary",textColor:"primary",children:t.map((o,l)=>e.jsx(j,{value:l,label:i(o)},o))}),t.map((o,l)=>e.jsx(g,{index:l,currentIndex:c,children:e.jsx(v,{sx:{px:3,py:1,minHeight:n},children:s(o)})},o))]})},I=({areAllItemsSelected:a,areNoItemsSelected:r,onChange:t})=>{const{t:i}=x();return e.jsx(f,{title:i(a?"global.button.clear":"global.button.select_all"),children:e.jsx(M,{sx:{padding:"8px",color:"inherit","&.Mui-checked, &.MuiCheckbox-indeterminate":{color:"inherit"}},checked:a,indeterminate:!r&&!a,onChange:(s,n)=>t(n)})})};var d={},z=_;Object.defineProperty(d,"__esModule",{value:!0});var p=d.default=void 0,P=z(T()),R=e;p=d.default=(0,P.default)((0,R.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"}),"MoreHoriz");const $=F(C)(({theme:a})=>({...u,height:"calc(".concat(u.height," + 1)"),paddingTop:"8px",zIndex:1,[a.breakpoints.down("md")]:{marginBottom:"64px"}})),N=({children:a,selectedItemsCount:r,title:t})=>{const{t:i}=x();return e.jsx(k,{variant:"popover",popupId:"selection-fab-menu",children:s=>e.jsxs(e.Fragment,{children:[e.jsx($,{...y(s),children:e.jsxs(E,{variant:"extended",color:"primary",id:"selectionMenuButton",children:["".concat(r," ").concat(i(t,{count:r})),e.jsx(p,{sx:{ml:1}})]})}),e.jsx(B,{...O(s),id:"selectionMenu",anchorOrigin:{horizontal:"right",vertical:"top"},transformOrigin:{horizontal:"right",vertical:"bottom"},MenuListProps:{"aria-labelledby":"selectionMenuButton"},children:(n,c)=>a(n,c)})]})})};export{A as O,I as S,N as a,p as d};