import{u as k,j as e,B as u,C as P,b as v,T as H,d as $,k as T,I as _,P as M,c as i,f as r,N as q,b7 as z,ar as U,l as J,E as V,m as W,o as K,an as Q,aI as X,aJ as Y,b8 as Z,$ as ee,aL as te,e as S}from"./index-87a7KjSO.js";import{d as ae,D as oe,S as se,P as re}from"./StrictModeDroppable-Ca3Mz89A.js";import{D as ne,F as le}from"./StyledFab-Cdr7cXa_.js";import{d as ie}from"./Edit-DXyO9HX9.js";import{T as ce}from"./TextField-CkSZVjz-.js";const de=({category:a,provided:n,onEdit:c})=>{const{t:s}=k(),x=()=>{i.deleteCategory(a.id)};return e.jsx(u,{sx:{p:1,pb:0},...n.draggableProps,...n.dragHandleProps,ref:n.innerRef,children:e.jsx(P,{children:e.jsxs(v,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:1.5,"&:last-child":{paddingBottom:1.5},gap:2},children:[e.jsx(ae,{}),e.jsx(H,{sx:{flexGrow:1},variant:"h6",component:"h2",children:a.name}),e.jsxs($,{sx:{flexDirection:"row"},children:[e.jsx(T,{title:s("global.button.edit"),children:e.jsx(_,{component:u,onClick:c,size:"large",children:e.jsx(ie,{})})}),e.jsx(T,{title:s("chapter.action.download.delete.label.action"),children:e.jsx(_,{component:u,onClick:x,size:"large",children:e.jsx(M,{})})})]})]})})})};function fe(){const{t:a}=k(),{setTitle:n,setAction:c}=r.useContext(q);r.useLayoutEffect(()=>(n(a("category.title.category_other")),c(null),()=>{n(""),c(null)}),[a]);const{data:s,loading:x,error:y,refetch:F}=i.useGetCategories(z,{notifyOnNetworkStatusChange:!0}),l=r.useMemo(()=>{var o;const t=[...(o=s==null?void 0:s.categories.nodes)!=null?o:[]];return t.length>0&&t[0].name==="Default"&&t.shift(),t},[s]),[h,b]=r.useState(-1),[I,d]=r.useState(!1),[p,f]=r.useState(""),[m,C]=r.useState(!1),[B,{reset:w}]=i.useReorderCategory(),D=U(),L=(t,o,g)=>{const j=t[o];B({variables:{input:{id:j.id,position:g+1}}}).catch(()=>w())},R=t=>{t.destination&&L(l,t.source.index,t.destination.index)},A=()=>{f(""),C(!1),b(-1)},G=()=>{A(),d(!0)},N=t=>{f(l[t].name),C(l[t].default),b(t),d(!0)},E=()=>{d(!1)},O=()=>{if(d(!1),h===-1)i.createCategory({name:p,default:m});else{const t=l[h];i.updateCategory(t.id,{name:p,default:m})}};return x?e.jsx(J,{}):y?e.jsx(V,{message:a("category.error.label.request_failure"),messageExtra:y.message,retry:()=>F().catch(W())}):e.jsxs(e.Fragment,{children:[e.jsx(oe,{onDragEnd:R,children:e.jsx(se,{droppableId:"droppable",children:t=>e.jsxs(u,{ref:t.innerRef,sx:{paddingBottom:ne},children:[l.map((o,g)=>e.jsx(re,{draggableId:o.id.toString(),index:g,children:j=>e.jsx(de,{provided:j,category:o,onEdit:()=>N(g)})},o.id)),t.placeholder]})})}),e.jsx(le,{color:"primary","aria-label":"add",style:{position:"fixed",bottom:D.spacing(2),right:D.spacing(2)},onClick:G,children:e.jsx(K,{})}),e.jsxs(Q,{open:I,onClose:E,children:[e.jsx(X,{id:"form-dialog-title",children:a(h===-1?"category.dialog.title.new_category":"category.dialog.title.edit_category")}),e.jsxs(Y,{children:[e.jsx(ce,{autoFocus:!0,margin:"dense",id:"name",label:a("category.label.category_name"),type:"text",fullWidth:!0,value:p,onChange:t=>f(t.target.value)}),e.jsx(Z,{control:e.jsx(ee,{checked:m,onChange:t=>C(t.target.checked)}),label:a("category.label.use_as_default_category")})]}),e.jsxs(te,{children:[e.jsx(S,{onClick:E,color:"primary",children:a("global.button.cancel")}),e.jsx(S,{onClick:O,color:"primary",children:a("global.button.submit")})]})]})]})}export{fe as CategorySettings};
