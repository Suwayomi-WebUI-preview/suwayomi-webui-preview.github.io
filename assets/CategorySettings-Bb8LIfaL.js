import{u as A,j as e,B as h,C as W,b as Y,T as z,d as J,l as v,I,Y as Q,r as d,g as X,i as r,bt as Z,aD as $,m as ee,E as te,n as D,o as ae,U as oe,w as se,D as ne,s as re,t as le,bu as ie,bv as ce,a8 as de,b1 as ge,e as k,q as F}from"./index-BgT5c6fp.js";import{e as ue,D as xe,a as he,c as me,S as pe,v as fe,b as ye,d as Ce}from"./DndOverlayItem-CG___qRB.js";import{D as je,F as be}from"./StyledFab-B97dIPRR.js";import{E as De}from"./Edit-C7aIViu4.js";const w=({category:a,onEdit:g})=>{const{t:i}=A(),l=()=>{d.deleteCategory(a.id)};return e.jsx(h,{sx:{p:1,pb:0},children:e.jsx(W,{children:e.jsxs(Y,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:1.5,"&:last-child":{paddingBottom:1.5},gap:2},children:[e.jsx(ue,{}),e.jsx(z,{sx:{flexGrow:1},variant:"h6",component:"h2",children:a.name}),e.jsxs(J,{sx:{flexDirection:"row"},children:[e.jsx(v,{title:i("global.button.edit"),children:e.jsx(I,{component:h,onClick:g,children:e.jsx(De,{})})}),e.jsx(v,{title:i("chapter.action.download.delete.label.action"),children:e.jsx(I,{component:h,onClick:l,children:e.jsx(Q,{})})})]})]})})})};function ve(){const{t:a}=A(),{setTitle:g,setAction:i}=X();r.useLayoutEffect(()=>(g(a("category.dialog.title.edit_category_other")),i(null),()=>{g(""),i(null)}),[a]);const{data:l,loading:B,error:E,refetch:O}=d.useGetCategories(Z,{notifyOnNetworkStatusChange:!0}),s=r.useMemo(()=>{var o;const t=[...(o=l==null?void 0:l.categories.nodes)!=null?o:[]];return t.length>0&&t[0].name==="Default"&&t.shift(),t},[l]),[m,S]=r.useState(-1),[L,u]=r.useState(!1),[p,f]=r.useState(""),[y,C]=r.useState(!1),[G,{reset:N}]=d.useReorderCategory(),_=$(),R=xe.useSensorsForDevice(),[c,x]=r.useState(null),H=(t,o,n)=>{const j=t[o];G({variables:{input:{id:j.id,position:n+1}}}).catch(()=>N())},U=t=>{const{active:o,over:n}=t;if(x(null),!n||o.id===n.id)return;const j=s.findIndex(b=>b.id===o.id),V=s.findIndex(b=>b.id===n.id);H(s,j,V)},q=()=>{f(""),C(!1),S(-1)},M=()=>{q(),u(!0)},P=t=>{f(s[t].name),C(s[t].default),S(t),u(!0)},T=()=>{u(!1)},K=()=>{if(u(!1),m===-1)d.createCategory({name:p,default:y}).response.catch(t=>F(a("category.error.label.create_failure"),"error",D(t)));else{const t=s[m];d.updateCategory(t.id,{name:p,default:y}).response.catch(o=>F(a("global.error.label.failed_to_save_changes"),"error",D(o)))}};return B?e.jsx(ee,{}):E?e.jsx(te,{message:a("category.error.label.request_failure"),messageExtra:D(E),retry:()=>O().catch(ae())}):e.jsxs(e.Fragment,{children:[e.jsx(he,{sensors:R,collisionDetection:me,onDragStart:t=>{var o;return x((o=s.find(n=>n.id===t.active.id))!=null?o:null)},onDragEnd:U,onDragCancel:()=>x(null),onDragAbort:()=>x(null),children:e.jsxs(h,{sx:{paddingBottom:je},children:[e.jsx(pe,{items:s,strategy:fe,children:s.map((t,o)=>e.jsx(ye,{id:t.id,isDragging:t.id===(c==null?void 0:c.id),children:e.jsx(w,{category:t,onEdit:()=>P(o)})},t.id))}),e.jsx(Ce,{isActive:!!c,children:e.jsx(w,{category:c,onEdit:oe})})]})}),e.jsx(be,{color:"primary","aria-label":"add",style:{position:"fixed",bottom:_.spacing(2),right:_.spacing(2)},onClick:M,children:e.jsx(se,{})}),e.jsxs(ne,{open:L,onClose:T,children:[e.jsx(re,{id:"form-dialog-title",children:a(m===-1?"category.dialog.title.new_category":"category.dialog.title.edit_category_one")}),e.jsxs(le,{children:[e.jsx(ie,{autoFocus:!0,margin:"dense",id:"name",label:a("category.label.category_name"),type:"text",fullWidth:!0,value:p,onChange:t=>f(t.target.value)}),e.jsx(ce,{control:e.jsx(de,{checked:y,onChange:t=>C(t.target.checked)}),label:a("category.label.use_as_default_category")})]}),e.jsxs(ge,{children:[e.jsx(k,{onClick:T,color:"primary",children:a("global.button.cancel")}),e.jsx(k,{onClick:K,color:"primary",children:a("global.button.submit")})]})]})]})}export{ve as CategorySettings};
