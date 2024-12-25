import{c as Z,j as k,aY as _,aZ as q,a1 as j,cO as t,ci as G,b4 as p,cS as y,f as d,bU as J,b5 as Q,cw as m,a_ as f,a$ as X}from"./index-BBxBRE3D.js";const h=Z(k.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");function aa(a){return q("MuiChip",a)}const o=_("MuiChip",["root","sizeSmall","sizeMedium","colorDefault","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),ea=a=>{const{classes:l,disabled:e,size:r,color:i,iconColor:g,onDelete:v,clickable:c,variant:s}=a,C={root:["root",s,e&&"disabled","size".concat(t(r)),"color".concat(t(i)),c&&"clickable",c&&"clickableColor".concat(t(i)),v&&"deletable",v&&"deletableColor".concat(t(i)),"".concat(s).concat(t(i))],label:["label","label".concat(t(r))],avatar:["avatar","avatar".concat(t(r)),"avatarColor".concat(t(i))],icon:["icon","icon".concat(t(r)),"iconColor".concat(t(g))],deleteIcon:["deleteIcon","deleteIcon".concat(t(r)),"deleteIconColor".concat(t(i)),"deleteIcon".concat(t(s),"Color").concat(t(i))]};return X(C,aa,l)},oa=j("div",{name:"MuiChip",slot:"Root",overridesResolver:(a,l)=>{const{ownerState:e}=a,{color:r,iconColor:i,clickable:g,onDelete:v,size:c,variant:s}=e;return[{["& .".concat(o.avatar)]:l.avatar},{["& .".concat(o.avatar)]:l["avatar".concat(t(c))]},{["& .".concat(o.avatar)]:l["avatarColor".concat(t(r))]},{["& .".concat(o.icon)]:l.icon},{["& .".concat(o.icon)]:l["icon".concat(t(c))]},{["& .".concat(o.icon)]:l["iconColor".concat(t(i))]},{["& .".concat(o.deleteIcon)]:l.deleteIcon},{["& .".concat(o.deleteIcon)]:l["deleteIcon".concat(t(c))]},{["& .".concat(o.deleteIcon)]:l["deleteIconColor".concat(t(r))]},{["& .".concat(o.deleteIcon)]:l["deleteIcon".concat(t(s),"Color").concat(t(r))]},l.root,l["size".concat(t(c))],l["color".concat(t(r))],g&&l.clickable,g&&r!=="default"&&l["clickableColor".concat(t(r),")")],v&&l.deletable,v&&r!=="default"&&l["deletableColor".concat(t(r))],l[s],l["".concat(s).concat(t(r))]]}})(G(({theme:a})=>{const l=a.palette.mode==="light"?a.palette.grey[700]:a.palette.grey[300];return{maxWidth:"100%",fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(a.vars||a).palette.text.primary,backgroundColor:(a.vars||a).palette.action.selected,borderRadius:32/2,whiteSpace:"nowrap",transition:a.transitions.create(["background-color","box-shadow"]),cursor:"unset",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",["&.".concat(o.disabled)]:{opacity:(a.vars||a).palette.action.disabledOpacity,pointerEvents:"none"},["& .".concat(o.avatar)]:{marginLeft:5,marginRight:-6,width:24,height:24,color:a.vars?a.vars.palette.Chip.defaultAvatarColor:l,fontSize:a.typography.pxToRem(12)},["& .".concat(o.avatarColorPrimary)]:{color:(a.vars||a).palette.primary.contrastText,backgroundColor:(a.vars||a).palette.primary.dark},["& .".concat(o.avatarColorSecondary)]:{color:(a.vars||a).palette.secondary.contrastText,backgroundColor:(a.vars||a).palette.secondary.dark},["& .".concat(o.avatarSmall)]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:a.typography.pxToRem(10)},["& .".concat(o.icon)]:{marginLeft:5,marginRight:-6},["& .".concat(o.deleteIcon)]:{WebkitTapHighlightColor:"transparent",color:a.vars?"rgba(".concat(a.vars.palette.text.primaryChannel," / 0.26)"):p(a.palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:a.vars?"rgba(".concat(a.vars.palette.text.primaryChannel," / 0.4)"):p(a.palette.text.primary,.4)}},variants:[{props:{size:"small"},style:{height:24,["& .".concat(o.icon)]:{fontSize:18,marginLeft:4,marginRight:-4},["& .".concat(o.deleteIcon)]:{fontSize:16,marginRight:4,marginLeft:-4}}},...Object.entries(a.palette).filter(y(["contrastText"])).map(([e])=>({props:{color:e},style:{backgroundColor:(a.vars||a).palette[e].main,color:(a.vars||a).palette[e].contrastText,["& .".concat(o.deleteIcon)]:{color:a.vars?"rgba(".concat(a.vars.palette[e].contrastTextChannel," / 0.7)"):p(a.palette[e].contrastText,.7),"&:hover, &:active":{color:(a.vars||a).palette[e].contrastText}}}})),{props:e=>e.iconColor===e.color,style:{["& .".concat(o.icon)]:{color:a.vars?a.vars.palette.Chip.defaultIconColor:l}}},{props:e=>e.iconColor===e.color&&e.color!=="default",style:{["& .".concat(o.icon)]:{color:"inherit"}}},{props:{onDelete:!0},style:{["&.".concat(o.focusVisible)]:{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.action.selectedChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.focusOpacity,"))"):p(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)}}},...Object.entries(a.palette).filter(y(["dark"])).map(([e])=>({props:{color:e,onDelete:!0},style:{["&.".concat(o.focusVisible)]:{background:(a.vars||a).palette[e].dark}}})),{props:{clickable:!0},style:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.action.selectedChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):p(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)},["&.".concat(o.focusVisible)]:{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.action.selectedChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.focusOpacity,"))"):p(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)},"&:active":{boxShadow:(a.vars||a).shadows[1]}}},...Object.entries(a.palette).filter(y(["dark"])).map(([e])=>({props:{color:e,clickable:!0},style:{["&:hover, &.".concat(o.focusVisible)]:{backgroundColor:(a.vars||a).palette[e].dark}}})),{props:{variant:"outlined"},style:{backgroundColor:"transparent",border:a.vars?"1px solid ".concat(a.vars.palette.Chip.defaultBorder):"1px solid ".concat(a.palette.mode==="light"?a.palette.grey[400]:a.palette.grey[700]),["&.".concat(o.clickable,":hover")]:{backgroundColor:(a.vars||a).palette.action.hover},["&.".concat(o.focusVisible)]:{backgroundColor:(a.vars||a).palette.action.focus},["& .".concat(o.avatar)]:{marginLeft:4},["& .".concat(o.avatarSmall)]:{marginLeft:2},["& .".concat(o.icon)]:{marginLeft:4},["& .".concat(o.iconSmall)]:{marginLeft:2},["& .".concat(o.deleteIcon)]:{marginRight:5},["& .".concat(o.deleteIconSmall)]:{marginRight:3}}},...Object.entries(a.palette).filter(y()).map(([e])=>({props:{variant:"outlined",color:e},style:{color:(a.vars||a).palette[e].main,border:"1px solid ".concat(a.vars?"rgba(".concat(a.vars.palette[e].mainChannel," / 0.7)"):p(a.palette[e].main,.7)),["&.".concat(o.clickable,":hover")]:{backgroundColor:a.vars?"rgba(".concat(a.vars.palette[e].mainChannel," / ").concat(a.vars.palette.action.hoverOpacity,")"):p(a.palette[e].main,a.palette.action.hoverOpacity)},["&.".concat(o.focusVisible)]:{backgroundColor:a.vars?"rgba(".concat(a.vars.palette[e].mainChannel," / ").concat(a.vars.palette.action.focusOpacity,")"):p(a.palette[e].main,a.palette.action.focusOpacity)},["& .".concat(o.deleteIcon)]:{color:a.vars?"rgba(".concat(a.vars.palette[e].mainChannel," / 0.7)"):p(a.palette[e].main,.7),"&:hover, &:active":{color:(a.vars||a).palette[e].main}}}}))]}})),la=j("span",{name:"MuiChip",slot:"Label",overridesResolver:(a,l)=>{const{ownerState:e}=a,{size:r}=e;return[l.label,l["label".concat(t(r))]]}})({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap",variants:[{props:{variant:"outlined"},style:{paddingLeft:11,paddingRight:11}},{props:{size:"small"},style:{paddingLeft:8,paddingRight:8}},{props:{size:"small",variant:"outlined"},style:{paddingLeft:7,paddingRight:7}}]});function V(a){return a.key==="Backspace"||a.key==="Delete"}const ra=d.forwardRef(function(l,e){const r=J({props:l,name:"MuiChip"}),{avatar:i,className:g,clickable:v,color:c="default",component:s,deleteIcon:C,disabled:I=!1,icon:$,label:E,onClick:O,onDelete:u,onKeyDown:z,onKeyUp:P,size:M="medium",variant:N="filled",tabIndex:U,skipFocusWhenDisabled:F=!1,...K}=r,W=d.useRef(null),B=Q(W,e),w=n=>{n.stopPropagation(),u&&u(n)},A=n=>{n.currentTarget===n.target&&V(n)&&n.preventDefault(),z&&z(n)},H=n=>{n.currentTarget===n.target&&u&&V(n)&&u(n),P&&P(n)},x=v!==!1&&O?!0:v,S=x||u?m:s||"div",R={...r,component:S,disabled:I,size:M,color:c,iconColor:d.isValidElement($)&&$.props.color||c,onDelete:!!u,clickable:x,variant:N},b=ea(R),Y=S===m?{component:s||"div",focusVisibleClassName:b.focusVisible,...u&&{disableRipple:!0}}:{};let D=null;u&&(D=C&&d.isValidElement(C)?d.cloneElement(C,{className:f(C.props.className,b.deleteIcon),onClick:w}):k.jsx(h,{className:f(b.deleteIcon),onClick:w}));let L=null;i&&d.isValidElement(i)&&(L=d.cloneElement(i,{className:f(b.avatar,i.props.className)}));let T=null;return $&&d.isValidElement($)&&(T=d.cloneElement($,{className:f(b.icon,$.props.className)})),k.jsxs(oa,{as:S,className:f(b.root,g),disabled:x&&I?!0:void 0,onClick:O,onKeyDown:A,onKeyUp:H,ref:B,tabIndex:F&&I?-1:U,ownerState:R,...Y,...K,children:[L||T,k.jsx(la,{className:f(b.label),ownerState:R,children:E}),D]})});export{ra as C};
