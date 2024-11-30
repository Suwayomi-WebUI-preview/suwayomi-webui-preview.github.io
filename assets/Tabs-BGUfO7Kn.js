import{ac as ct,ad as dt,E as N,ae as Wt,af as Pt,ag as ut,c,ah as pt,ai as P,j as f,aj as bt,ak as Jt,al as kt,am as zt,an as At,ao as Lt,ap as et,O as Qt,aq as at,ar as Zt}from"./index-DCLtpUvd.js";function _t(e){return dt("MuiTab",e)}const w=ct("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper","icon"]),te=e=>{const{classes:t,textColor:r,fullWidth:s,wrapped:a,icon:d,label:b,selected:h,disabled:p}=e,v={root:["root",d&&b&&"labelIcon","textColor".concat(Pt(r)),s&&"fullWidth",a&&"wrapped",h&&"selected",p&&"disabled"],icon:["iconWrapper","icon"]};return bt(v,_t,t)},ee=N(Wt,{name:"MuiTab",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.label&&r.icon&&t.labelIcon,t["textColor".concat(Pt(r.textColor))],r.fullWidth&&t.fullWidth,r.wrapped&&t.wrapped,{["& .".concat(w.iconWrapper)]:t.iconWrapper},{["& .".concat(w.icon)]:t.icon}]}})(ut(({theme:e})=>({...e.typography.button,maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center",lineHeight:1.25,variants:[{props:({ownerState:t})=>t.label&&(t.iconPosition==="top"||t.iconPosition==="bottom"),style:{flexDirection:"column"}},{props:({ownerState:t})=>t.label&&t.iconPosition!=="top"&&t.iconPosition!=="bottom",style:{flexDirection:"row"}},{props:({ownerState:t})=>t.icon&&t.label,style:{minHeight:72,paddingTop:9,paddingBottom:9}},{props:({ownerState:t,iconPosition:r})=>t.icon&&t.label&&r==="top",style:{["& > .".concat(w.icon)]:{marginBottom:6}}},{props:({ownerState:t,iconPosition:r})=>t.icon&&t.label&&r==="bottom",style:{["& > .".concat(w.icon)]:{marginTop:6}}},{props:({ownerState:t,iconPosition:r})=>t.icon&&t.label&&r==="start",style:{["& > .".concat(w.icon)]:{marginRight:e.spacing(1)}}},{props:({ownerState:t,iconPosition:r})=>t.icon&&t.label&&r==="end",style:{["& > .".concat(w.icon)]:{marginLeft:e.spacing(1)}}},{props:{textColor:"inherit"},style:{color:"inherit",opacity:.6,["&.".concat(w.selected)]:{opacity:1},["&.".concat(w.disabled)]:{opacity:(e.vars||e).palette.action.disabledOpacity}}},{props:{textColor:"primary"},style:{color:(e.vars||e).palette.text.secondary,["&.".concat(w.selected)]:{color:(e.vars||e).palette.primary.main},["&.".concat(w.disabled)]:{color:(e.vars||e).palette.text.disabled}}},{props:{textColor:"secondary"},style:{color:(e.vars||e).palette.text.secondary,["&.".concat(w.selected)]:{color:(e.vars||e).palette.secondary.main},["&.".concat(w.disabled)]:{color:(e.vars||e).palette.text.disabled}}},{props:({ownerState:t})=>t.fullWidth,style:{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"}},{props:({ownerState:t})=>t.wrapped,style:{fontSize:e.typography.pxToRem(12)}}]}))),ge=c.forwardRef(function(t,r){const s=pt({props:t,name:"MuiTab"}),{className:a,disabled:d=!1,disableFocusRipple:b=!1,fullWidth:h,icon:p,iconPosition:v="top",indicator:m,label:x,onChange:S,onClick:C,onFocus:k,selected:I,selectionFollowsFocus:y,textColor:F="inherit",value:g,wrapped:H=!1,...D}=s,U={...s,disabled:d,disableFocusRipple:b,selected:I,icon:!!p,iconPosition:v,label:!!x,fullWidth:h,textColor:F,wrapped:H},X=te(U),z=p&&x&&c.isValidElement(p)?c.cloneElement(p,{className:P(X.icon,p.props.className)}):p,G=M=>{!I&&S&&S(M,g),C&&C(M)},O=M=>{y&&!I&&S&&S(M,g),k&&k(M)};return f.jsxs(ee,{focusRipple:!b,className:P(X.root,a),ref:r,role:"tab","aria-selected":I,disabled:d,onClick:G,onFocus:O,ownerState:U,tabIndex:I?0:-1,...D,children:[v==="top"||v==="start"?f.jsxs(c.Fragment,{children:[z,x]}):f.jsxs(c.Fragment,{children:[x,z]}),m]})});function we(e){const{children:t,index:r,currentIndex:s}=e;return f.jsx("div",{role:"tabpanel",hidden:r!==s,id:"simple-tabpanel-".concat(r),children:s===r&&t})}function oe(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}function le(e,t,r,s={},a=()=>{}){const{ease:d=oe,duration:b=300}=s;let h=null;const p=t[e];let v=!1;const m=()=>{v=!0},x=S=>{if(v){a(new Error("Animation cancelled"));return}h===null&&(h=S);const C=Math.min(1,(S-h)/b);if(t[e]=d(C)*(r-p)+p,C>=1){requestAnimationFrame(()=>{a(null)});return}requestAnimationFrame(x)};return p===r?(a(new Error("Element already at target position")),m):(requestAnimationFrame(x),m)}const re={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function ne(e){const{onChange:t,...r}=e,s=c.useRef(),a=c.useRef(null),d=()=>{s.current=a.current.offsetHeight-a.current.clientHeight};return Jt(()=>{const b=zt(()=>{const p=s.current;d(),p!==s.current&&t(s.current)}),h=kt(a.current);return h.addEventListener("resize",b),()=>{b.clear(),h.removeEventListener("resize",b)}},[t]),c.useEffect(()=>{d(),t(s.current)},[t]),f.jsx("div",{style:re,ref:a,...r})}const se=At(f.jsx("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),ae=At(f.jsx("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight");function ie(e){return dt("MuiTabScrollButton",e)}const ce=ct("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),de=e=>{const{classes:t,orientation:r,disabled:s}=e;return bt({root:["root",r,s&&"disabled"]},ie,t)},ue=N(Wt,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.orientation&&t[r.orientation]]}})({width:40,flexShrink:0,opacity:.8,["&.".concat(ce.disabled)]:{opacity:0},variants:[{props:{orientation:"vertical"},style:{width:"100%",height:40,"& svg":{transform:"var(--TabScrollButton-svgRotate)"}}}]}),pe=c.forwardRef(function(t,r){var g,H;const s=pt({props:t,name:"MuiTabScrollButton"}),{className:a,slots:d={},slotProps:b={},direction:h,orientation:p,disabled:v,...m}=s,x=Lt(),S={isRtl:x,...s},C=de(S),k=(g=d.StartScrollButtonIcon)!=null?g:se,I=(H=d.EndScrollButtonIcon)!=null?H:ae,y=et({elementType:k,externalSlotProps:b.startScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:S}),F=et({elementType:I,externalSlotProps:b.endScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:S});return f.jsx(ue,{component:"div",className:P(C.root,a),ref:r,role:null,ownerState:S,tabIndex:null,...m,style:{...m.style,...p==="vertical"&&{"--TabScrollButton-svgRotate":"rotate(".concat(x?-90:90,"deg)")}},children:h==="left"?f.jsx(k,{...y}):f.jsx(I,{...F})})});function be(e){return dt("MuiTabs",e)}const it=ct("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),Et=(e,t)=>e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:e.firstChild,Mt=(e,t)=>e===t?e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:e.lastChild,tt=(e,t,r)=>{let s=!1,a=r(e,t);for(;a;){if(a===e.firstChild){if(s)return;s=!0}const d=a.disabled||a.getAttribute("aria-disabled")==="true";if(!a.hasAttribute("tabindex")||d)a=r(e,a);else{a.focus();return}}},fe=e=>{const{vertical:t,fixed:r,hideScrollbar:s,scrollableX:a,scrollableY:d,centered:b,scrollButtonsHideMobile:h,classes:p}=e;return bt({root:["root",t&&"vertical"],scroller:["scroller",r&&"fixed",s&&"hideScrollbar",a&&"scrollableX",d&&"scrollableY"],flexContainer:["flexContainer",t&&"flexContainerVertical",b&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",h&&"scrollButtonsHideMobile"],scrollableX:[a&&"scrollableX"],hideScrollbar:[s&&"hideScrollbar"]},be,p)},he=N("div",{name:"MuiTabs",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[{["& .".concat(it.scrollButtons)]:t.scrollButtons},{["& .".concat(it.scrollButtons)]:r.scrollButtonsHideMobile&&t.scrollButtonsHideMobile},t.root,r.vertical&&t.vertical]}})(ut(({theme:e})=>({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex",variants:[{props:({ownerState:t})=>t.vertical,style:{flexDirection:"column"}},{props:({ownerState:t})=>t.scrollButtonsHideMobile,style:{["& .".concat(it.scrollButtons)]:{[e.breakpoints.down("sm")]:{display:"none"}}}}]}))),Se=N("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.scroller,r.fixed&&t.fixed,r.hideScrollbar&&t.hideScrollbar,r.scrollableX&&t.scrollableX,r.scrollableY&&t.scrollableY]}})({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap",variants:[{props:({ownerState:e})=>e.fixed,style:{overflowX:"hidden",width:"100%"}},{props:({ownerState:e})=>e.hideScrollbar,style:{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}},{props:({ownerState:e})=>e.scrollableX,style:{overflowX:"auto",overflowY:"hidden"}},{props:({ownerState:e})=>e.scrollableY,style:{overflowY:"auto",overflowX:"hidden"}}]}),ve=N("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.flexContainer,r.vertical&&t.flexContainerVertical,r.centered&&t.centered]}})({display:"flex",variants:[{props:({ownerState:e})=>e.vertical,style:{flexDirection:"column"}},{props:({ownerState:e})=>e.centered,style:{justifyContent:"center"}}]}),me=N("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(e,t)=>t.indicator})(ut(({theme:e})=>({position:"absolute",height:2,bottom:0,width:"100%",transition:e.transitions.create(),variants:[{props:{indicatorColor:"primary"},style:{backgroundColor:(e.vars||e).palette.primary.main}},{props:{indicatorColor:"secondary"},style:{backgroundColor:(e.vars||e).palette.secondary.main}},{props:({ownerState:t})=>t.vertical,style:{height:"100%",width:2,right:0}}]}))),xe=N(ne)({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),Rt={},Be=c.forwardRef(function(t,r){const s=pt({props:t,name:"MuiTabs"}),a=Qt(),d=Lt(),{"aria-label":b,"aria-labelledby":h,action:p,centered:v=!1,children:m,className:x,component:S="div",allowScrollButtonsMobile:C=!1,indicatorColor:k="primary",onChange:I,orientation:y="horizontal",ScrollButtonComponent:F=pe,scrollButtons:g="auto",selectionFollowsFocus:H,slots:D={},slotProps:U={},TabIndicatorProps:X={},TabScrollButtonProps:z={},textColor:G="primary",value:O,variant:M="standard",visibleScrollbar:ot=!1,...$t}=s,T=M==="scrollable",B=y==="vertical",Y=B?"scrollTop":"scrollLeft",J=B?"top":"left",Q=B?"bottom":"right",lt=B?"clientHeight":"clientWidth",K=B?"height":"width",A={...s,component:S,allowScrollButtonsMobile:C,indicatorColor:k,orientation:y,vertical:B,scrollButtons:g,textColor:G,variant:M,visibleScrollbar:ot,fixed:!T,hideScrollbar:T&&!ot,scrollableX:T&&!B,scrollableY:T&&B,centered:v&&!T,scrollButtonsHideMobile:!C},W=fe(A),jt=et({elementType:D.StartScrollButtonIcon,externalSlotProps:U.startScrollButtonIcon,ownerState:A}),Nt=et({elementType:D.EndScrollButtonIcon,externalSlotProps:U.endScrollButtonIcon,ownerState:A}),[ft,Ft]=c.useState(!1),[L,ht]=c.useState(Rt),[St,Ht]=c.useState(!1),[vt,Dt]=c.useState(!1),[mt,Xt]=c.useState(!1),[xt,Ot]=c.useState({overflow:"hidden",scrollbarWidth:0}),yt=new Map,R=c.useRef(null),$=c.useRef(null),gt=()=>{const o=R.current;let l;if(o){const n=o.getBoundingClientRect();l={clientWidth:o.clientWidth,scrollLeft:o.scrollLeft,scrollTop:o.scrollTop,scrollWidth:o.scrollWidth,top:n.top,bottom:n.bottom,left:n.left,right:n.right}}let i;if(o&&O!==!1){const n=$.current.children;if(n.length>0){const u=n[yt.get(O)];i=u?u.getBoundingClientRect():null}}return{tabsMeta:l,tabMeta:i}},V=at(()=>{const{tabsMeta:o,tabMeta:l}=gt();let i=0,n;B?(n="top",l&&o&&(i=l.top-o.top+o.scrollTop)):(n=d?"right":"left",l&&o&&(i=(d?-1:1)*(l[n]-o[n]+o.scrollLeft)));const u={[n]:i,[K]:l?l[K]:0};if(typeof L[n]!="number"||typeof L[K]!="number")ht(u);else{const E=Math.abs(L[n]-u[n]),j=Math.abs(L[K]-u[K]);(E>=1||j>=1)&&ht(u)}}),rt=(o,{animation:l=!0}={})=>{l?le(Y,R.current,o,{duration:a.transitions.duration.standard}):R.current[Y]=o},wt=o=>{let l=R.current[Y];B?l+=o:l+=o*(d?-1:1),rt(l)},Bt=()=>{const o=R.current[lt];let l=0;const i=Array.from($.current.children);for(let n=0;n<i.length;n+=1){const u=i[n];if(l+u[lt]>o){n===0&&(l=o);break}l+=u[lt]}return l},Ut=()=>{wt(-1*Bt())},Yt=()=>{wt(Bt())},Kt=c.useCallback(o=>{Ot({overflow:null,scrollbarWidth:o})},[]),Vt=()=>{const o={};o.scrollbarSizeListener=T?f.jsx(xe,{onChange:Kt,className:P(W.scrollableX,W.hideScrollbar)}):null;const i=T&&(g==="auto"&&(St||vt)||g===!0);return o.scrollButtonStart=i?f.jsx(F,{slots:{StartScrollButtonIcon:D.StartScrollButtonIcon},slotProps:{startScrollButtonIcon:jt},orientation:y,direction:d?"right":"left",onClick:Ut,disabled:!St,...z,className:P(W.scrollButtons,z.className)}):null,o.scrollButtonEnd=i?f.jsx(F,{slots:{EndScrollButtonIcon:D.EndScrollButtonIcon},slotProps:{endScrollButtonIcon:Nt},orientation:y,direction:d?"left":"right",onClick:Yt,disabled:!vt,...z,className:P(W.scrollButtons,z.className)}):null,o},Ct=at(o=>{const{tabsMeta:l,tabMeta:i}=gt();if(!(!i||!l)){if(i[J]<l[J]){const n=l[Y]+(i[J]-l[J]);rt(n,{animation:o})}else if(i[Q]>l[Q]){const n=l[Y]+(i[Q]-l[Q]);rt(n,{animation:o})}}}),Z=at(()=>{T&&g!==!1&&Xt(!mt)});c.useEffect(()=>{const o=zt(()=>{R.current&&V()});let l;const i=E=>{E.forEach(j=>{j.removedNodes.forEach(q=>{l==null||l.unobserve(q)}),j.addedNodes.forEach(q=>{l==null||l.observe(q)})}),o(),Z()},n=kt(R.current);n.addEventListener("resize",o);let u;return typeof ResizeObserver<"u"&&(l=new ResizeObserver(o),Array.from($.current.children).forEach(E=>{l.observe(E)})),typeof MutationObserver<"u"&&(u=new MutationObserver(i),u.observe($.current,{childList:!0})),()=>{o.clear(),n.removeEventListener("resize",o),u==null||u.disconnect(),l==null||l.disconnect()}},[V,Z]),c.useEffect(()=>{const o=Array.from($.current.children),l=o.length;if(typeof IntersectionObserver<"u"&&l>0&&T&&g!==!1){const i=o[0],n=o[l-1],u={root:R.current,threshold:.99},E=st=>{Ht(!st[0].isIntersecting)},j=new IntersectionObserver(E,u);j.observe(i);const q=st=>{Dt(!st[0].isIntersecting)},Tt=new IntersectionObserver(q,u);return Tt.observe(n),()=>{j.disconnect(),Tt.disconnect()}}},[T,g,mt,m==null?void 0:m.length]),c.useEffect(()=>{Ft(!0)},[]),c.useEffect(()=>{V()}),c.useEffect(()=>{Ct(Rt!==L)},[Ct,L]),c.useImperativeHandle(p,()=>({updateIndicator:V,updateScrollButtons:Z}),[V,Z]);const It=f.jsx(me,{...X,className:P(W.indicator,X.className),ownerState:A,style:{...L,...X.style}});let _=0;const qt=c.Children.map(m,o=>{if(!c.isValidElement(o))return null;const l=o.props.value===void 0?_:o.props.value;yt.set(l,_);const i=l===O;return _+=1,c.cloneElement(o,{fullWidth:M==="fullWidth",indicator:i&&!ft&&It,selected:i,selectionFollowsFocus:H,onChange:I,textColor:G,value:l,..._===1&&O===!1&&!o.props.tabIndex?{tabIndex:0}:{}})}),Gt=o=>{const l=$.current,i=Zt(l).activeElement;if(i.getAttribute("role")!=="tab")return;let u=y==="horizontal"?"ArrowLeft":"ArrowUp",E=y==="horizontal"?"ArrowRight":"ArrowDown";switch(y==="horizontal"&&d&&(u="ArrowRight",E="ArrowLeft"),o.key){case u:o.preventDefault(),tt(l,i,Mt);break;case E:o.preventDefault(),tt(l,i,Et);break;case"Home":o.preventDefault(),tt(l,null,Et);break;case"End":o.preventDefault(),tt(l,null,Mt);break}},nt=Vt();return f.jsxs(he,{className:P(W.root,x),ownerState:A,ref:r,as:S,...$t,children:[nt.scrollButtonStart,nt.scrollbarSizeListener,f.jsxs(Se,{className:W.scroller,ownerState:A,style:{overflow:xt.overflow,[B?"margin".concat(d?"Left":"Right"):"marginBottom"]:ot?void 0:-xt.scrollbarWidth},ref:R,children:[f.jsx(ve,{"aria-label":b,"aria-labelledby":h,"aria-orientation":y==="vertical"?"vertical":null,className:W.flexContainer,ownerState:A,onKeyDown:Gt,ref:$,role:"tablist",children:qt}),ft&&It]}),nt.scrollButtonEnd]})});export{ge as T,we as a,Be as b};