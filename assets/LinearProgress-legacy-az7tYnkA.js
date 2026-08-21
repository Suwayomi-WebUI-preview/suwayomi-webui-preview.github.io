System.register(["./index-legacy-CXw9Uuf-.js"],function(r,e){var t,a,o,n,i,s,l,p,c,u,b,f,m,d,g,v,y,h,w,x,k,C,S,$,P,j,L,z,M;function O(r){return b("MuiLinearProgress",r)}return{setters:[function(r){t=r.$o,a=r.Fc,o=r.Lc,n=r.Ns,i=r.Pc,s=r.Ps,l=r.Qs,p=r.Us,c=r.Vs,u=r.Xs,b=r.Zs,f=r.es,m=r.nc,d=r.os,g=r.tc}],execute:function(){v=o(i(),1),u("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","bar","bar1","bar2"]),y=a(),h=m`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`,w="string"!=typeof h?g`
        animation: ${h} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      `:null,x=m`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`,k="string"!=typeof x?g`
        animation: ${x} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      `:null,C=m`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`,S="string"!=typeof C?g`
        animation: ${C} 3s infinite linear;
      `:null,$=r=>{const{classes:e,variant:t,color:a}=r;return c({root:["root",`color${f(a)}`,t],dashed:["dashed"],bar1:["bar","bar1"],bar2:["bar","bar2","buffer"===t&&`color${f(a)}`]},O,e)},P=(r,e)=>r.vars?r.vars.palette.LinearProgress[`${e}Bg`]:"light"===r.palette.mode?r.lighten(r.palette[e].main,.62):r.darken(r.palette[e].main,.5),j=s("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.root,e[`color${f(t.color)}`],e[t.variant]]}})(d(({theme:r})=>({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},variants:[...Object.entries(r.palette).filter(t()).map(([e])=>({props:{color:e},style:{backgroundColor:P(r,e)}})),{props:({ownerState:r})=>"inherit"===r.color&&"buffer"!==r.variant,style:{"&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}}},{props:{variant:"buffer"},style:{backgroundColor:"transparent"}},{props:{variant:"query"},style:{transform:"rotate(180deg)"}}]}))),L=s("span",{name:"MuiLinearProgress",slot:"Dashed"})(d(({theme:r})=>({position:"absolute",marginTop:0,height:"100%",width:"100%",backgroundSize:"10px 10px",backgroundPosition:"0 -23px",variants:[{props:{color:"inherit"},style:{opacity:.3,backgroundImage:"radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)"}},...Object.entries(r.palette).filter(t()).map(([e])=>{const t=P(r,e);return{props:{color:e},style:{backgroundImage:`radial-gradient(${t} 0%, ${t} 16%, transparent 42%)`}}})]})),S||{animation:`${C} 3s infinite linear`}),z=s("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(r,e)=>[e.bar,e.bar1]})(d(({theme:r})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[{props:{color:"inherit"},style:{backgroundColor:"currentColor"}},...Object.entries(r.palette).filter(t()).map(([e])=>({props:{color:e},style:{backgroundColor:(r.vars||r).palette[e].main}})),{props:{variant:"determinate"},style:{transition:"transform .4s linear"}},{props:{variant:"buffer"},style:{zIndex:1,transition:"transform .4s linear"}},{props:({ownerState:r})=>"indeterminate"===r.variant||"query"===r.variant,style:{width:"auto"}},{props:({ownerState:r})=>"indeterminate"===r.variant||"query"===r.variant,style:w||{animation:`${h} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`}}]}))),M=s("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(r,e)=>[e.bar,e.bar2]})(d(({theme:r})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[...Object.entries(r.palette).filter(t()).map(([e])=>({props:{color:e},style:{"--LinearProgressBar2-barColor":(r.vars||r).palette[e].main}})),{props:({ownerState:r})=>"buffer"!==r.variant&&"inherit"!==r.color,style:{backgroundColor:"var(--LinearProgressBar2-barColor, currentColor)"}},{props:({ownerState:r})=>"buffer"!==r.variant&&"inherit"===r.color,style:{backgroundColor:"currentColor"}},{props:{color:"inherit"},style:{opacity:.3}},...Object.entries(r.palette).filter(t()).map(([e])=>({props:{color:e,variant:"buffer"},style:{backgroundColor:P(r,e),transition:"transform .4s linear"}})),{props:({ownerState:r})=>"indeterminate"===r.variant||"query"===r.variant,style:{width:"auto"}},{props:({ownerState:r})=>"indeterminate"===r.variant||"query"===r.variant,style:k||{animation:`${x} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`}}]}))),r("t",v.forwardRef(function(r,e){const t=n({props:r,name:"MuiLinearProgress"}),{className:a,color:o="primary",max:i,min:s,value:c,valueBuffer:u,variant:b="indeterminate",...f}=t,m={...t,color:o,variant:b},d=s??0,g=i??100,v=$(m),h=p(),w={},x={bar1:{},bar2:{}};if(("determinate"===b||"buffer"===b)&&void 0!==c){const r=g-d;let e=(c-d)/r*100-100;h&&(e=-e),x.bar1.transform=r>0?`translateX(${e}%)`:"translateX(-100%)",w["aria-valuenow"]=c,w["aria-valuemin"]=d,w["aria-valuemax"]=g}if("buffer"===b&&void 0!==u){const r=g-d;let e=(u-d)/r*100-100;h&&(e=-e),x.bar2.transform=r>0?`translateX(${e}%)`:"translateX(-100%)"}return(0,y.jsxs)(j,{className:l(v.root,a),ownerState:m,role:"progressbar",...w,ref:e,...f,children:["buffer"===b?(0,y.jsx)(L,{className:v.dashed,ownerState:m}):null,(0,y.jsx)(z,{className:v.bar1,ownerState:m,style:x.bar1}),"determinate"===b?null:(0,y.jsx)(M,{className:v.bar2,ownerState:m,style:x.bar2})]})}))}}});