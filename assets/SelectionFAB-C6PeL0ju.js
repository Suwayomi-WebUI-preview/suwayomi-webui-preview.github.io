import{c as m,j as e,S as b,u as p,f as j,r as f,i as g,t as v,B as M,P as T,C,F as _}from"./index-lMCVQ9L9.js";import{b as F,T as S,a as y}from"./Tabs-6K_UfliD.js";import{O as B}from"./SortRadioInput-CH37YE8G.js";import{C as O}from"./Checkbox-CwiZv_lI.js";import{a as u,F as k}from"./StyledFab-eFyMIcRv.js";import{h as P}from"./useManageMangaLibraryState-DYObCqFJ.js";const w=({open:r,onClose:a,tabs:t,tabTitle:i,tabContent:s,minHeight:o})=>{const[c,h]=m.useState(0);return e.jsxs(B,{open:r,onClose:a,minHeight:o,children:[e.jsx(F,{value:c,variant:"fullWidth",onChange:(n,l)=>h(l),indicatorColor:"primary",textColor:"primary",children:t.map((n,l)=>e.jsx(S,{value:l,label:i(n)},n))}),t.map((n,l)=>e.jsx(y,{index:l,currentIndex:c,children:e.jsx(b,{sx:{px:3,py:1,minHeight:o},children:s(n)})},n))]})},H=({areAllItemsSelected:r,areNoItemsSelected:a,onChange:t})=>{const{t:i}=p();return e.jsx(j,{title:i(r?"global.button.clear":"global.button.select_all"),children:e.jsx(O,{sx:{padding:"8px",color:"inherit","&.Mui-checked, &.MuiCheckbox-indeterminate":{color:"inherit"}},checked:r,indeterminate:!a&&!r,onChange:(s,o)=>t(o)})})};var d={},z=g;Object.defineProperty(d,"__esModule",{value:!0});var x=d.default=void 0,E=z(f()),R=e;x=d.default=(0,E.default)((0,R.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"}),"MoreHoriz");const q=v(M)(({theme:r})=>({...u,height:"calc(".concat(u.height," + 1)"),paddingTop:"8px",zIndex:1,[r.breakpoints.down("md")]:{marginBottom:"64px"}})),U=({children:r,selectedItemsCount:a,title:t})=>{const{t:i}=p();return e.jsx(T,{variant:"popover",popupId:"selection-fab-menu",children:s=>e.jsxs(e.Fragment,{children:[e.jsx(q,{...C(s),children:e.jsxs(k,{variant:"extended",color:"primary",id:"selectionMenuButton",children:["".concat(a," ").concat(i(t,{count:a})),e.jsx(x,{sx:{ml:1}})]})}),e.jsx(P,{..._(s),id:"selectionMenu",anchorOrigin:{horizontal:"right",vertical:"top"},transformOrigin:{horizontal:"right",vertical:"bottom"},MenuListProps:{"aria-labelledby":"selectionMenuButton"},children:(o,c)=>r(o,c)})]})})};export{w as O,H as S,U as a,x as d};
