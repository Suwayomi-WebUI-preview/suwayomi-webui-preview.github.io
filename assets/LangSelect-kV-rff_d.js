import{D as t,H as f,at as j,u as S,c as u,j as s,g as A,I as b,K as N,au as I,av as C,q as _,ao as P,X as k,aw as w,b as x}from"./index-5KkoNewZ.js";import{d as B}from"./FilterList-BhTAEIPZ.js";import{c as L}from"./cloneObject-DrOPTG0J.js";import{S as U}from"./Switch-VMB1WxOk.js";var y=(e=>(e.INSTALLED="INSTALLED",e.UPDATE_PENDING="UPDATE_PENDING",e.OBSOLETE="OBSOLETE",e))(y||{});const R={INSTALLED:"extension.state.label.installed",UPDATE_PENDING:"extension.state.label.update_pending",OBSOLETE:"extension.state.label.obsolete",[t.ALL]:"extension.language.all",[t.OTHER]:"extension.language.other",[t.LOCAL_SOURCE]:"source.local_source.title"},v=e=>["INSTALLED","UPDATE_PENDING","OBSOLETE",t.ALL,t.OTHER,t.LOCAL_SOURCE].includes(e),G=e=>v(e)?f(R[e]):j(e);function H(e,a){return a.forEach(c=>{const o=e.indexOf(c);o!==-1&&e.splice(o,1)}),e}function F(e){const{t:a}=S(),{shownLangs:c,setShownLangs:o,allLangs:h,forcedLangs:E}=e,[l,g]=u.useState(H(L(c),E)),[p,r]=u.useState(!1),m=()=>{r(!1)},O=()=>{r(!1),o(l)},T=(n,i)=>{const{checked:D}=n.target;if(D)g([...l,i]);else{const d=L(l);d.splice(d.indexOf(i),1),g(d)}};return s.jsxs(s.Fragment,{children:[s.jsx(A,{title:a("settings.title"),children:s.jsx(b,{onClick:()=>r(!0),"aria-label":"display more actions",edge:"end",color:"inherit",size:"large",children:s.jsx(B,{})})}),s.jsxs(N,{sx:{".MuiDialog-paper":{maxHeight:435,width:"80%"}},maxWidth:"xs",open:p,children:[s.jsx(I,{children:a("global.language.title.enabled_languages")}),s.jsx(C,{dividers:!0,sx:{padding:0},children:s.jsx(_,{children:h.map(n=>s.jsxs(P,{children:[s.jsx(k,{primary:G(n)}),s.jsx(U,{checked:l.indexOf(n)!==-1,onChange:i=>T(i,n)})]},n))})}),s.jsxs(w,{children:[s.jsx(x,{autoFocus:!0,onClick:m,color:"primary",children:a("global.button.cancel")}),s.jsx(x,{onClick:O,color:"primary",children:a("global.button.ok")})]})]})]})}F.defaultProps={forcedLangs:[]};export{y as E,F as L,v as i,G as t};