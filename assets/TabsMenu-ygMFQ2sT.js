import{v as n,j as c,B as p,s as x,c as r,n as f}from"./index-BqZ4wM82.js";import{b as h}from"./Tabs-UWNhfNXG.js";const y=({children:t,...s})=>{const{appBarHeight:a}=n();return c.jsx(p,{...s,sx:{...s.sx,position:"relative",height:"calc(100% - ".concat(a,"px)")},children:t})},m=x(h)(({theme:t})=>({display:"flex",position:"sticky",left:0,right:0,zIndex:1,backgroundColor:t.palette.background.default,border:0,borderBottomWidth:2,borderStyle:"solid",borderColor:t.palette.divider})),g=r.forwardRef(({children:t,tabsCount:s,...a},d)=>{const{appBarHeight:u}=n(),e=r.useRef(null);r.useImperativeHandle(d,()=>e.current);const[o,b]=r.useState();f(e,r.useCallback(()=>{var i;return b((i=e.current)==null?void 0:i.clientWidth)},[e]));const l=o?o<s*160:!1;return c.jsx(m,{...a,sx:{...a.sx,top:u},ref:e,indicatorColor:"primary",textColor:"primary",centered:!l,variant:l?"scrollable":"fullWidth",scrollButtons:!0,allowScrollButtonsMobile:!0,children:t})});export{y as T,g as a};
