import{c as x,j as a,u as g,aA as p,i as j,I as C,ak as k,aB as c,bh as i,Y as o}from"./index-Bp7za-bN.js";import{a as d}from"./ListPreference-BUWv9EKh.js";const v=x(a.jsx("path",{d:"M14.67 5v6.5H9.33V5zm1 6.5H21V5h-5.33zm-1 7.5v-6.5H9.33V19zm1-6.5V19H21v-6.5zm-7.34 0H3V19h5.33zm0-1V5H3v6.5z"}),"ViewModule");function z({gridLayout:n,onChange:h}){const{t:e}=g(),[m,u]=p.useState(null),t=!!m,b=r=>{u(r.currentTarget)},l=()=>{u(null)};function s(r){h(parseInt(r.target.name,10))}return a.jsxs(a.Fragment,{children:[a.jsx(j,{title:e("global.label.display"),children:a.jsx(C,{onClick:b,size:"small",sx:{ml:2},"aria-controls":t?"account-menu":void 0,"aria-haspopup":"true","aria-expanded":t?"true":void 0,color:"inherit",children:a.jsx(v,{})})}),a.jsxs(k,{id:"basic-menu",anchorEl:m,open:t,onClose:l,MenuListProps:{"aria-labelledby":"basic-button"},children:[a.jsx(c,{onClick:l,children:a.jsx(i,{label:e("global.grid_layout.label.compact_grid"),value:o.Compact,control:a.jsx(d,{name:o.Compact.toString(),checked:n===o.Compact,onChange:s})})}),a.jsx(c,{onClick:l,children:a.jsx(i,{label:e("global.grid_layout.label.comfortable_grid"),control:a.jsx(d,{name:o.Comfortable.toString(),checked:n===o.Comfortable,onChange:s})})}),a.jsx(c,{onClick:l,children:a.jsx(i,{label:e("global.grid_layout.label.list"),control:a.jsx(d,{name:o.List.toString(),checked:n===o.List,onChange:s})})})]})]})}export{z as G};