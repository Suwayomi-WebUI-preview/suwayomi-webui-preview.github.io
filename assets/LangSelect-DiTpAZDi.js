import{F as f,u as j,c as x,j as s,f as S,I as b,Q as A,aC as N,aD as I,l as C,au as _,a0 as P,aE as k,b as u}from"./index-aRdpybDP.js";import{d as w}from"./FilterList-Y2-Sc-Ed.js";import{c as L}from"./cloneObject-DrOPTG0J.js";import{D as t,b as B}from"./language-B4ilPs9t.js";import{S as U}from"./Switch-CT8Kf14X.js";var y=(e=>(e.INSTALLED="INSTALLED",e.UPDATE_PENDING="UPDATE_PENDING",e.OBSOLETE="OBSOLETE",e))(y||{});const R={INSTALLED:"extension.state.label.installed",UPDATE_PENDING:"extension.state.label.update_pending",OBSOLETE:"extension.state.label.obsolete",[t.ALL]:"extension.language.all",[t.OTHER]:"extension.language.other",[t.LOCAL_SOURCE]:"source.local_source.title"},G=e=>["INSTALLED","UPDATE_PENDING","OBSOLETE",t.ALL,t.OTHER,t.LOCAL_SOURCE].includes(e),v=e=>G(e)?f(R[e]):B(e);function F(e,a){return a.forEach(r=>{const o=e.indexOf(r);o!==-1&&e.splice(o,1)}),e}function W(e){const{t:a}=j(),{shownLangs:r,setShownLangs:o,allLangs:h,forcedLangs:E=[]}=e,[l,g]=x.useState(F(L(r),E)),[m,c]=x.useState(!1),p=()=>{c(!1)},O=()=>{c(!1),o(l)},T=(n,i)=>{const{checked:D}=n.target;if(D)g([...l,i]);else{const d=L(l);d.splice(d.indexOf(i),1),g(d)}};return s.jsxs(s.Fragment,{children:[s.jsx(S,{title:a("settings.title"),children:s.jsx(b,{onClick:()=>c(!0),"aria-label":"display more actions",edge:"end",color:"inherit",size:"large",children:s.jsx(w,{})})}),s.jsxs(A,{sx:{".MuiDialog-paper":{maxHeight:435,width:"80%"}},maxWidth:"xs",open:m,children:[s.jsx(N,{children:a("global.language.title.enabled_languages")}),s.jsx(I,{dividers:!0,sx:{padding:0},children:s.jsx(C,{children:h.map(n=>s.jsxs(_,{children:[s.jsx(P,{primary:v(n)}),s.jsx(U,{checked:l.indexOf(n)!==-1,onChange:i=>T(i,n)})]},n))})}),s.jsxs(k,{children:[s.jsx(u,{autoFocus:!0,onClick:p,color:"primary",children:a("global.button.cancel")}),s.jsx(u,{onClick:O,color:"primary",children:a("global.button.ok")})]})]})]})}export{y as E,W as L,G as i,v as t};
