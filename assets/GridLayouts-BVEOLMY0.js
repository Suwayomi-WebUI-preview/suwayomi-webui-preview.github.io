import{u as p,R as x,j as a,f as g,I as C,H as j,U as i,p as o}from"./index-BqZ4wM82.js";import{d as f}from"./ViewModule-C1YZY3us.js";import{F as c}from"./Checkbox-BKqT02lc.js";import{a as d}from"./ListPreference-B3Kph0Mc.js";function L({gridLayout:n,onChange:b}){const{t:l}=p(),[m,u]=x.useState(null),t=!!m,h=r=>{u(r.currentTarget)},e=()=>{u(null)};function s(r){b(parseInt(r.target.name,10))}return a.jsxs(a.Fragment,{children:[a.jsx(g,{title:l("global.label.display"),children:a.jsx(C,{onClick:h,size:"small",sx:{ml:2},"aria-controls":t?"account-menu":void 0,"aria-haspopup":"true","aria-expanded":t?"true":void 0,children:a.jsx(f,{})})}),a.jsxs(j,{id:"basic-menu",anchorEl:m,open:t,onClose:e,MenuListProps:{"aria-labelledby":"basic-button"},children:[a.jsx(i,{onClick:e,children:a.jsx(c,{label:l("global.grid_layout.label.compact_grid"),value:o.Compact,control:a.jsx(d,{name:o.Compact.toString(),checked:n===o.Compact,onChange:s})})}),a.jsx(i,{onClick:e,children:a.jsx(c,{label:l("global.grid_layout.label.comfortable_grid"),control:a.jsx(d,{name:o.Comfortable.toString(),checked:n===o.Comfortable,onChange:s})})}),a.jsx(i,{onClick:e,children:a.jsx(c,{label:l("global.grid_layout.label.list"),control:a.jsx(d,{name:o.List.toString(),checked:n===o.List,onChange:s})})})]})]})}export{L as G};
