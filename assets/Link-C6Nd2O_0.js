import{aa as V,ab as A,cC as g,aU as i,C as R,T as S,ad as L,ae as F,c as k,af as M,J as U,j,ag as P,ah as z,cD as m}from"./index-BAST9t1l.js";function B(e){return A("MuiLink",e)}const N=V("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),E=({theme:e,ownerState:r})=>{const n=r.color,o=g(e,"palette.".concat(n),!1)||r.color,t=g(e,"palette.".concat(n,"Channel"));return"vars"in e&&t?"rgba(".concat(t," / 0.4)"):i(o,.4)},v={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},H=e=>{const{classes:r,component:n,focusVisible:o,underline:t}=e,l={root:["root","underline".concat(L(t)),n==="button"&&"button",o&&"focusVisible"]};return z(l,B,r)},W=R(S,{name:"MuiLink",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:n}=e;return[r.root,r["underline".concat(L(n.underline))],n.component==="button"&&r.button]}})(F(({theme:e})=>({variants:[{props:{underline:"none"},style:{textDecoration:"none"}},{props:{underline:"hover"},style:{textDecoration:"none","&:hover":{textDecoration:"underline"}}},{props:{underline:"always"},style:{textDecoration:"underline","&:hover":{textDecorationColor:"inherit"}}},{props:({underline:r,ownerState:n})=>r==="always"&&n.color!=="inherit",style:{textDecorationColor:"var(--Link-underlineColor)"}},...Object.entries(e.palette).filter(([,r])=>r&&r.main).map(([r])=>({props:{underline:"always",color:r},style:{"--Link-underlineColor":e.vars?"rgba(".concat(e.vars.palette[r].mainChannel," / 0.4)"):i(e.palette[r].main,.4)}})),{props:{underline:"always",color:"textPrimary"},style:{"--Link-underlineColor":e.vars?"rgba(".concat(e.vars.palette.text.primaryChannel," / 0.4)"):i(e.palette.text.primary,.4)}},{props:{underline:"always",color:"textSecondary"},style:{"--Link-underlineColor":e.vars?"rgba(".concat(e.vars.palette.text.secondaryChannel," / 0.4)"):i(e.palette.text.secondary,.4)}},{props:{underline:"always",color:"textDisabled"},style:{"--Link-underlineColor":(e.vars||e).palette.text.disabled}},{props:{component:"button"},style:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},["&.".concat(N.focusVisible)]:{outline:"auto"}}}]}))),O=k.forwardRef(function(r,n){const o=M({props:r,name:"MuiLink"}),t=U(),{className:l,color:s="primary",component:p="a",onBlur:d,onFocus:y,TypographyClasses:h,underline:b="always",variant:x="inherit",sx:u,...C}=o,[w,f]=k.useState(!1),D=a=>{m(a.target)||f(!1),d&&d(a)},$=a=>{m(a.target)&&f(!0),y&&y(a)},c={...o,color:s,component:p,focusVisible:w,underline:b,variant:x},T=H(c);return j.jsx(W,{color:s,className:P(T.root,l),classes:h,component:p,onBlur:D,onFocus:$,ref:n,ownerState:c,variant:x,...C,sx:[...v[s]===void 0?[{color:s}]:[],...Array.isArray(u)?u:[u]],style:{...C.style,...b==="always"&&s!=="inherit"&&!v[s]&&{"--Link-underlineColor":E({theme:t,ownerState:c})}}})});export{O as L};
