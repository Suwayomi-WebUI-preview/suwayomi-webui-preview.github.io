import{a1 as k,u as U,f as p,bK as l,j as t,aP as O,az as B,an as _,aJ as v,aI as L,bj as P,aL as A,e as C,a8 as m,n as M,l as $,r as q}from"./index-BBxBRE3D.js";import{T as z}from"./ThreeStateCheckboxInput-BdPmTsJy.js";const H=k("div")({display:"flex",flexDirection:"column",maxHeight:"170px",overflow:"auto"}),J=e=>{switch(e){case!1:return l.Exclude;case!0:return l.Include;case null:case void 0:return l.Unset;default:throw new Error('booleanToIncludeInStatus: unexpected IncludeOrExclude status "'.concat(e,'"'))}},K=e=>{switch(e){case l.Exclude:return!1;case l.Include:return!0;case l.Unset:return null;default:throw new Error('includeInUpdateStatusToBoolean: unexpected IncludeOrExclude status "'.concat(e,'"'))}},I=(e,s,i,a)=>{const o=s&&!e.length&&i,c=e.length===a;return o||c?m("extension.language.all"):e.length?e.map(x=>x.name).join(", "):m("global.label.none")},N=({categories:e,includeField:s,dialogText:i})=>{const{t:a}=U(),[o,c]=p.useState(e),[x,g]=p.useState(!1);p.useEffect(()=>{e&&c(e)},[e]);const h=e.filter(n=>n[s]===l.Unset),j=e.filter(n=>n[s]===l.Exclude),y=e.filter(n=>n[s]===l.Include),b=I(j,!1,h.length,e.length),T=I(y,!0,h.length,e.length),E=n=>q.updateCategory(n.id,{[s]:n[s]}).response,D=async()=>{const n=o.filter(r=>{const u=e==null?void 0:e.find(d=>d.id===r.id);return u?u[s]!==r[s]:!1});g(!1);try{await Promise.all(n.map(r=>E(r)))}catch(r){M(a("global.error.label.failed_to_save_changes"),"error",$(r))}},f=()=>{c(e),g(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(O,{onClick:()=>g(!0),children:t.jsx(B,{primary:a("category.title.category_other"),secondary:t.jsxs(t.Fragment,{children:[t.jsx("span",{children:a("category.settings.inclusion.label.include",{includedCategoriesText:T})}),t.jsx("span",{children:a("category.settings.inclusion.label.exclude",{excludedCategoriesText:b})})]}),secondaryTypographyProps:{style:{display:"flex",flexDirection:"column"}}})}),t.jsxs(_,{open:x,onClose:f,children:[t.jsxs(v,{children:[t.jsx(L,{sx:{paddingLeft:0},children:a("category.title.category_other")}),i&&t.jsx(P,{sx:{paddingBottom:"10px"},children:i}),t.jsx(H,{children:o.map(n=>t.jsx(z,{label:n.name,checked:K(n[s]),onChange:r=>{const u=J(r),d=o.findIndex(w=>w===n),S=[...o.slice(0,d),{...n,[s]:u},...o.slice(d+1,o.length)];c(S)}},n.id))})]}),t.jsxs(A,{children:[t.jsx(C,{onClick:f,color:"primary",children:a("global.button.cancel")}),t.jsx(C,{onClick:D,color:"primary",children:a("global.button.ok")})]})]})]})};export{H as C,N as a};
