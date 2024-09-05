import{ag as q,j as y,a5 as G,a6 as J,s as V,a8 as r,a9 as Q,aM as p,c as d,aa as X,am as Y,a7 as L,ab as f,ac as Z}from"./index-dhITQ7sJ.js";const _=q(y.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");function h(a){return J("MuiChip",a)}const e=G("MuiChip",["root","sizeSmall","sizeMedium","colorDefault","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),aa=a=>{const{classes:l,disabled:o,size:t,color:i,iconColor:g,onDelete:v,clickable:c,variant:s}=a,C={root:["root",s,o&&"disabled","size".concat(r(t)),"color".concat(r(i)),c&&"clickable",c&&"clickableColor".concat(r(i)),v&&"deletable",v&&"deletableColor".concat(r(i)),"".concat(s).concat(r(i))],label:["label","label".concat(r(t))],avatar:["avatar","avatar".concat(r(t)),"avatarColor".concat(r(i))],icon:["icon","icon".concat(r(t)),"iconColor".concat(r(g))],deleteIcon:["deleteIcon","deleteIcon".concat(r(t)),"deleteIconColor".concat(r(i)),"deleteIcon".concat(r(s),"Color").concat(r(i))]};return Z(C,h,l)},oa=V("div",{name:"MuiChip",slot:"Root",overridesResolver:(a,l)=>{const{ownerState:o}=a,{color:t,iconColor:i,clickable:g,onDelete:v,size:c,variant:s}=o;return[{["& .".concat(e.avatar)]:l.avatar},{["& .".concat(e.avatar)]:l["avatar".concat(r(c))]},{["& .".concat(e.avatar)]:l["avatarColor".concat(r(t))]},{["& .".concat(e.icon)]:l.icon},{["& .".concat(e.icon)]:l["icon".concat(r(c))]},{["& .".concat(e.icon)]:l["iconColor".concat(r(i))]},{["& .".concat(e.deleteIcon)]:l.deleteIcon},{["& .".concat(e.deleteIcon)]:l["deleteIcon".concat(r(c))]},{["& .".concat(e.deleteIcon)]:l["deleteIconColor".concat(r(t))]},{["& .".concat(e.deleteIcon)]:l["deleteIcon".concat(r(s),"Color").concat(r(t))]},l.root,l["size".concat(r(c))],l["color".concat(r(t))],g&&l.clickable,g&&t!=="default"&&l["clickableColor".concat(r(t),")")],v&&l.deletable,v&&t!=="default"&&l["deletableColor".concat(r(t))],l[s],l["".concat(s).concat(r(t))]]}})(Q(({theme:a})=>{const l=a.palette.mode==="light"?a.palette.grey[700]:a.palette.grey[300];return{maxWidth:"100%",fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(a.vars||a).palette.text.primary,backgroundColor:(a.vars||a).palette.action.selected,borderRadius:32/2,whiteSpace:"nowrap",transition:a.transitions.create(["background-color","box-shadow"]),cursor:"unset",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",["&.".concat(e.disabled)]:{opacity:(a.vars||a).palette.action.disabledOpacity,pointerEvents:"none"},["& .".concat(e.avatar)]:{marginLeft:5,marginRight:-6,width:24,height:24,color:a.vars?a.vars.palette.Chip.defaultAvatarColor:l,fontSize:a.typography.pxToRem(12)},["& .".concat(e.avatarColorPrimary)]:{color:(a.vars||a).palette.primary.contrastText,backgroundColor:(a.vars||a).palette.primary.dark},["& .".concat(e.avatarColorSecondary)]:{color:(a.vars||a).palette.secondary.contrastText,backgroundColor:(a.vars||a).palette.secondary.dark},["& .".concat(e.avatarSmall)]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:a.typography.pxToRem(10)},["& .".concat(e.icon)]:{marginLeft:5,marginRight:-6},["& .".concat(e.deleteIcon)]:{WebkitTapHighlightColor:"transparent",color:a.vars?"rgba(".concat(a.vars.palette.text.primaryChannel," / 0.26)"):p(a.palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:a.vars?"rgba(".concat(a.vars.palette.text.primaryChannel," / 0.4)"):p(a.palette.text.primary,.4)}},variants:[{props:{size:"small"},style:{height:24,["& .".concat(e.icon)]:{fontSize:18,marginLeft:4,marginRight:-4},["& .".concat(e.deleteIcon)]:{fontSize:16,marginRight:4,marginLeft:-4}}},...Object.entries(a.palette).filter(([,o])=>o&&o.main&&o.contrastText).map(([o])=>({props:{color:o},style:{backgroundColor:(a.vars||a).palette[o].main,color:(a.vars||a).palette[o].contrastText,["& .".concat(e.deleteIcon)]:{color:a.vars?"rgba(".concat(a.vars.palette[o].contrastTextChannel," / 0.7)"):p(a.palette[o].contrastText,.7),"&:hover, &:active":{color:(a.vars||a).palette[o].contrastText}}}})),{props:o=>o.iconColor===o.color,style:{["& .".concat(e.icon)]:{color:a.vars?a.vars.palette.Chip.defaultIconColor:l}}},{props:o=>o.iconColor===o.color&&o.color!=="default",style:{["& .".concat(e.icon)]:{color:"inherit"}}},{props:{onDelete:!0},style:{["&.".concat(e.focusVisible)]:{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.action.selectedChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.focusOpacity,"))"):p(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)}}},...Object.entries(a.palette).filter(([,o])=>o&&o.dark).map(([o])=>({props:{color:o,onDelete:!0},style:{["&.".concat(e.focusVisible)]:{background:(a.vars||a).palette[o].dark}}})),{props:{clickable:!0},style:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.action.selectedChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):p(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)},["&.".concat(e.focusVisible)]:{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.action.selectedChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.focusOpacity,"))"):p(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)},"&:active":{boxShadow:(a.vars||a).shadows[1]}}},...Object.entries(a.palette).filter(([,o])=>o&&o.dark).map(([o])=>({props:{color:o,clickable:!0},style:{["&:hover, &.".concat(e.focusVisible)]:{backgroundColor:(a.vars||a).palette[o].dark}}})),{props:{variant:"outlined"},style:{backgroundColor:"transparent",border:a.vars?"1px solid ".concat(a.vars.palette.Chip.defaultBorder):"1px solid ".concat(a.palette.mode==="light"?a.palette.grey[400]:a.palette.grey[700]),["&.".concat(e.clickable,":hover")]:{backgroundColor:(a.vars||a).palette.action.hover},["&.".concat(e.focusVisible)]:{backgroundColor:(a.vars||a).palette.action.focus},["& .".concat(e.avatar)]:{marginLeft:4},["& .".concat(e.avatarSmall)]:{marginLeft:2},["& .".concat(e.icon)]:{marginLeft:4},["& .".concat(e.iconSmall)]:{marginLeft:2},["& .".concat(e.deleteIcon)]:{marginRight:5},["& .".concat(e.deleteIconSmall)]:{marginRight:3}}},...Object.entries(a.palette).filter(([,o])=>o&&o.main).map(([o])=>({props:{variant:"outlined",color:o},style:{color:(a.vars||a).palette[o].main,border:"1px solid ".concat(a.vars?"rgba(".concat(a.vars.palette[o].mainChannel," / 0.7)"):p(a.palette[o].main,.7)),["&.".concat(e.clickable,":hover")]:{backgroundColor:a.vars?"rgba(".concat(a.vars.palette[o].mainChannel," / ").concat(a.vars.palette.action.hoverOpacity,")"):p(a.palette[o].main,a.palette.action.hoverOpacity)},["&.".concat(e.focusVisible)]:{backgroundColor:a.vars?"rgba(".concat(a.vars.palette[o].mainChannel," / ").concat(a.vars.palette.action.focusOpacity,")"):p(a.palette[o].main,a.palette.action.focusOpacity)},["& .".concat(e.deleteIcon)]:{color:a.vars?"rgba(".concat(a.vars.palette[o].mainChannel," / 0.7)"):p(a.palette[o].main,.7),"&:hover, &:active":{color:(a.vars||a).palette[o].main}}}}))]}})),ea=V("span",{name:"MuiChip",slot:"Label",overridesResolver:(a,l)=>{const{ownerState:o}=a,{size:t}=o;return[l.label,l["label".concat(r(t))]]}})({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap",variants:[{props:{variant:"outlined"},style:{paddingLeft:11,paddingRight:11}},{props:{size:"small"},style:{paddingLeft:8,paddingRight:8}},{props:{size:"small",variant:"outlined"},style:{paddingLeft:7,paddingRight:7}}]});function T(a){return a.key==="Backspace"||a.key==="Delete"}const ra=d.forwardRef(function(l,o){const t=X({props:l,name:"MuiChip"}),{avatar:i,className:g,clickable:v,color:c="default",component:s,deleteIcon:C,disabled:k=!1,icon:$,label:M,onClick:R,onDelete:u,onKeyDown:O,onKeyUp:z,size:j="medium",variant:E="filled",tabIndex:N,skipFocusWhenDisabled:K=!1,...U}=t,F=d.useRef(null),W=Y(F,o),P=n=>{n.stopPropagation(),u&&u(n)},B=n=>{n.currentTarget===n.target&&T(n)&&n.preventDefault(),O&&O(n)},A=n=>{n.currentTarget===n.target&&u&&T(n)&&u(n),z&&z(n)},I=v!==!1&&R?!0:v,x=I||u?L:s||"div",S={...t,component:x,disabled:k,size:j,color:c,iconColor:d.isValidElement($)&&$.props.color||c,onDelete:!!u,clickable:I,variant:E},b=aa(S),H=x===L?{component:s||"div",focusVisibleClassName:b.focusVisible,...u&&{disableRipple:!0}}:{};let w=null;u&&(w=C&&d.isValidElement(C)?d.cloneElement(C,{className:f(C.props.className,b.deleteIcon),onClick:P}):y.jsx(_,{className:f(b.deleteIcon),onClick:P}));let D=null;i&&d.isValidElement(i)&&(D=d.cloneElement(i,{className:f(b.avatar,i.props.className)}));let m=null;return $&&d.isValidElement($)&&(m=d.cloneElement($,{className:f(b.icon,$.props.className)})),y.jsxs(oa,{as:x,className:f(b.root,g),disabled:I&&k?!0:void 0,onClick:R,onKeyDown:B,onKeyUp:A,ref:W,tabIndex:K&&k?-1:N,ownerState:S,...H,...U,children:[D||m,y.jsx(ea,{className:f(b.label),ownerState:S,children:M}),w]})});export{ra as C};
