import{r as z,i as H,j as e,u as P,c as s,N as $,a as i,x as G,h as U,E as V,k as W,q as K,ap as X,W as J,X as Q,g as _,I as E,K as Y,av as Z,aw as ee,ax as te,b as k}from"./index-HpGObMom.js";import{D as ae,S as re,P as oe,d as se}from"./StrictModeDroppable-CYQn1buL.js";import{d as le}from"./Add-CypgcoMZ.js";import{d as ne}from"./Delete-B3FIqRTh.js";import{D as ie,F as ce}from"./StyledFab-DHN5OgkQ.js";import{T as de}from"./TextField-QJkfze_M.js";import{F as ge,C as ue}from"./Checkbox-BhDseyWc.js";import"./SwitchBase-ZGDbjC0G.js";var j={},fe=H;Object.defineProperty(j,"__esModule",{value:!0});var I=j.default=void 0,me=fe(z()),pe=e;I=j.default=(0,me.default)((0,pe.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit");const xe=(a,c,d)=>({...c,...a&&{background:d.mode==="dark"?"#424242":"rgb(235,235,235)"}});function ke(){const{t:a}=P(),{setTitle:c,setAction:d}=s.useContext($);s.useEffect(()=>(c(a("category.title.category_other")),d(null),()=>{c(""),d(null)}),[a]);const{data:g,loading:S,error:C,refetch:T}=i.useGetCategories({notifyOnNetworkStatusChange:!0}),l=s.useMemo(()=>{var r;const t=[...(r=g==null?void 0:g.categories.nodes)!=null?r:[]];return t.length>0&&t[0].name==="Default"&&t.shift(),t},[g]),[f,b]=s.useState(-1),[v,u]=s.useState(!1),[m,p]=s.useState(""),[x,h]=s.useState(!1),[F,{reset:L}]=i.useReorderCategory(),y=G(),R=(t,r,n)=>{const o=t[r];F({variables:{input:{id:o.id,position:n+1}}}).catch(()=>L())},q=t=>{t.destination&&R(l,t.source.index,t.destination.index)},M=()=>{p(""),h(!1),b(-1)},O=()=>{M(),u(!0)},w=t=>{p(l[t].name),h(l[t].default),b(t),u(!0)},D=()=>{u(!1)},A=()=>{if(u(!1),f===-1)i.createCategory({name:m,default:x});else{const t=l[f];i.updateCategory(t.id,{name:m,default:x})}},B=t=>{const r=l[t];i.deleteCategory(r.id)};return S?e.jsx(U,{}):C?e.jsx(V,{message:a("category.error.label.request_failure"),messageExtra:C.message,retry:()=>T().catch(W())}):e.jsxs(e.Fragment,{children:[e.jsx(ae,{onDragEnd:q,children:e.jsx(re,{droppableId:"droppable",children:t=>e.jsxs(K,{ref:t.innerRef,sx:{paddingBottom:ie},children:[l.map((r,n)=>e.jsx(oe,{draggableId:r.id.toString(),index:n,children:(o,N)=>e.jsxs(X,{ContainerProps:{ref:o.innerRef},...o.draggableProps,...o.dragHandleProps,style:xe(N.isDragging,o.draggableProps.style,y.palette),ref:o.innerRef,children:[e.jsx(J,{children:e.jsx(se,{})}),e.jsx(Q,{primary:r.name}),e.jsx(_,{title:a("global.button.edit"),children:e.jsx(E,{onClick:()=>{w(n)},size:"large",children:e.jsx(I,{})})}),e.jsx(_,{title:a("chapter.action.download.delete.label.action"),children:e.jsx(E,{onClick:()=>{B(n)},size:"large",children:e.jsx(ne,{})})})]})},r.id)),t.placeholder]})})}),e.jsx(ce,{color:"primary","aria-label":"add",style:{position:"fixed",bottom:y.spacing(2),right:y.spacing(2)},onClick:O,children:e.jsx(le,{})}),e.jsxs(Y,{open:v,onClose:D,children:[e.jsx(Z,{id:"form-dialog-title",children:a(f===-1?"category.dialog.title.new_category":"category.dialog.title.edit_category")}),e.jsxs(ee,{children:[e.jsx(de,{autoFocus:!0,margin:"dense",id:"name",label:a("category.label.category_name"),type:"text",fullWidth:!0,value:m,onChange:t=>p(t.target.value)}),e.jsx(ge,{control:e.jsx(ue,{checked:x,onChange:t=>h(t.target.checked),color:"default"}),label:a("category.label.use_as_default_category")})]}),e.jsxs(te,{children:[e.jsx(k,{onClick:D,color:"primary",children:a("global.button.cancel")}),e.jsx(k,{onClick:A,color:"primary",children:a("global.button.submit")})]})]})]})}export{ke as Categories};
