import{v as i,j as c,B as p,s as x,c as r,n as f}from"./index-DcjaYI8c.js";import{b as h}from"./Tabs-NqnhWSd0.js";const y=({children:t,...s})=>{const{appBarHeight:a}=i();return c.jsx(p,{...s,sx:{...s.sx,position:"relative",height:"calc(100% - ".concat(a,"px)")},children:t})},m=x(h)(({theme:t})=>({display:"flex",position:"sticky",left:0,right:0,zIndex:1,backgroundColor:t.palette.background.default,border:0,borderBottomWidth:2,borderStyle:"solid",borderColor:t.palette.divider})),g=r.forwardRef(({children:t,tabsCount:s,...a},u)=>{const{appBarHeight:d}=i(),e=r.useRef(null);r.useImperativeHandle(u,()=>e.current);const[o,b]=r.useState();f(e,r.useCallback(()=>{var n;return b((n=e.current)==null?void 0:n.clientWidth)},[e.current]));const l=o?o<s*160:!1;return c.jsx(m,{...a,sx:{...a.sx,top:d},ref:e,indicatorColor:"primary",textColor:"primary",centered:!l,variant:l?"scrollable":"fullWidth",scrollButtons:!0,allowScrollButtonsMobile:!0,children:t})});export{y as T,g as a};
