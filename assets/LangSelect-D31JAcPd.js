import{D as t,F as f,aq as j,u as S,c as x,j as s,g as A,I as b,H as N,ar as I,as as C,v as _,am as P,U as k,at as U,b as L}from"./index-D6RYBNhe.js";import{d as w}from"./FilterList-B_0xrp9g.js";import{c as u}from"./cloneObject-DrOPTG0J.js";import{S as B}from"./Switch-uJK7KaYC.js";var y=(e=>(e.INSTALLED="INSTALLED",e.UPDATE_PENDING="UPDATE_PENDING",e.OBSOLETE="OBSOLETE",e))(y||{});const R={INSTALLED:"extension.state.label.installed",UPDATE_PENDING:"extension.state.label.update_pending",OBSOLETE:"extension.state.label.obsolete",[t.ALL]:"extension.language.all",[t.OTHER]:"extension.language.other",[t.LOCAL_SOURCE]:"source.local_source.title"},v=e=>["INSTALLED","UPDATE_PENDING","OBSOLETE",t.ALL,t.OTHER,t.LOCAL_SOURCE].includes(e),G=e=>v(e)?f(R[e]):j(e);function H(e,a){return a.forEach(r=>{const o=e.indexOf(r);o!==-1&&e.splice(o,1)}),e}function F(e){const{t:a}=S(),{shownLangs:r,setShownLangs:o,allLangs:h,forcedLangs:E}=e,[l,g]=x.useState(H(u(r),E)),[m,c]=x.useState(!1),p=()=>{c(!1)},O=()=>{c(!1),o(l)},T=(n,i)=>{const{checked:D}=n.target;if(D)g([...l,i]);else{const d=u(l);d.splice(d.indexOf(i),1),g(d)}};return s.jsxs(s.Fragment,{children:[s.jsx(A,{title:a("settings.title"),children:s.jsx(b,{onClick:()=>c(!0),"aria-label":"display more actions",edge:"end",color:"inherit",size:"large",children:s.jsx(w,{})})}),s.jsxs(N,{sx:{".MuiDialog-paper":{maxHeight:435,width:"80%"}},maxWidth:"xs",open:m,children:[s.jsx(I,{children:a("global.language.title.enabled_languages")}),s.jsx(C,{dividers:!0,sx:{padding:0},children:s.jsx(_,{children:h.map(n=>s.jsxs(P,{children:[s.jsx(k,{primary:G(n)}),s.jsx(B,{checked:l.indexOf(n)!==-1,onChange:i=>T(i,n)})]},n))})}),s.jsxs(U,{children:[s.jsx(L,{autoFocus:!0,onClick:p,color:"primary",children:a("global.button.cancel")}),s.jsx(L,{onClick:O,color:"primary",children:a("global.button.ok")})]})]})]})}F.defaultProps={forcedLangs:[]};export{y as E,F as L,v as i,G as t};
