import{r as z,i as H,j as e,u as P,c as s,N as $,a as i,q as G,g as U,E as V,h as K,l as W,aj as J,K as Q,O as X,f as _,I as E,D as Y,ao as Z,ap as ee,aq as te,b as I}from"./index-DfBuIO9L.js";import{D as ae,S as oe,P as re,d as se}from"./StrictModeDroppable-Dajgtjo4.js";import{d as le}from"./Add-BqLMTeAX.js";import{d as ne}from"./Delete-BbgDr3ls.js";import{D as ie,F as ce}from"./StyledFab-DLBwrsRn.js";import{T as de}from"./TextField-Crw1y3Ix.js";import{F as ge,C as ue}from"./Checkbox-DrsGYsRp.js";import"./SwitchBase-miZdTjdG.js";var j={},fe=H;Object.defineProperty(j,"__esModule",{value:!0});var S=j.default=void 0,me=fe(z()),pe=e;S=j.default=(0,me.default)((0,pe.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit");const he=(a,c,d)=>({...c,...a&&{background:d.mode==="dark"?"#424242":"rgb(235,235,235)"}});function Ie(){const{t:a}=P(),{setTitle:c,setAction:d}=s.useContext($);s.useEffect(()=>(c(a("category.title.category_other")),d(null),()=>{c(""),d(null)}),[a]);const{data:g,loading:T,error:C,refetch:k}=i.useGetCategories({notifyOnNetworkStatusChange:!0}),l=s.useMemo(()=>{var o;const t=[...(o=g==null?void 0:g.categories.nodes)!=null?o:[]];return t.length>0&&t[0].name==="Default"&&t.shift(),t},[g]),[f,b]=s.useState(-1),[F,u]=s.useState(!1),[m,p]=s.useState(""),[h,x]=s.useState(!1),[L,{reset:R}]=i.useReorderCategory(),y=G(),v=(t,o,n)=>{const r=t[o];L({variables:{input:{id:r.id,position:n+1}}}).catch(()=>R())},q=t=>{t.destination&&v(l,t.source.index,t.destination.index)},O=()=>{p(""),x(!1),b(-1)},M=()=>{O(),u(!0)},A=t=>{p(l[t].name),x(l[t].default),b(t),u(!0)},D=()=>{u(!1)},B=()=>{if(u(!1),f===-1)i.createCategory({name:m,default:h});else{const t=l[f];i.updateCategory(t.id,{name:m,default:h})}},N=t=>{const o=l[t];i.deleteCategory(o.id)};return T?e.jsx(U,{}):C?e.jsx(V,{message:a("category.error.label.request_failure"),messageExtra:C.message,retry:()=>k().catch(K())}):e.jsxs(e.Fragment,{children:[e.jsx(ae,{onDragEnd:q,children:e.jsx(oe,{droppableId:"droppable",children:t=>e.jsxs(W,{ref:t.innerRef,sx:{paddingBottom:ie},children:[l.map((o,n)=>e.jsx(re,{draggableId:o.id.toString(),index:n,children:(r,w)=>e.jsxs(J,{ContainerProps:{ref:r.innerRef},...r.draggableProps,...r.dragHandleProps,style:he(w.isDragging,r.draggableProps.style,y.palette),ref:r.innerRef,children:[e.jsx(Q,{children:e.jsx(se,{})}),e.jsx(X,{primary:o.name}),e.jsx(_,{title:a("global.button.edit"),children:e.jsx(E,{onClick:()=>{A(n)},size:"large",children:e.jsx(S,{})})}),e.jsx(_,{title:a("chapter.action.download.delete.label.action"),children:e.jsx(E,{onClick:()=>{N(n)},size:"large",children:e.jsx(ne,{})})})]})},o.id)),t.placeholder]})})}),e.jsx(ce,{color:"primary","aria-label":"add",style:{position:"fixed",bottom:y.spacing(2),right:y.spacing(2)},onClick:M,children:e.jsx(le,{})}),e.jsxs(Y,{open:F,onClose:D,children:[e.jsx(Z,{id:"form-dialog-title",children:a(f===-1?"category.dialog.title.new_category":"category.dialog.title.edit_category")}),e.jsxs(ee,{children:[e.jsx(de,{autoFocus:!0,margin:"dense",id:"name",label:a("category.label.category_name"),type:"text",fullWidth:!0,value:m,onChange:t=>p(t.target.value)}),e.jsx(ge,{control:e.jsx(ue,{checked:h,onChange:t=>x(t.target.checked),color:"default"}),label:a("category.label.use_as_default_category")})]}),e.jsxs(te,{children:[e.jsx(I,{onClick:D,color:"primary",children:a("global.button.cancel")}),e.jsx(I,{onClick:B,color:"primary",children:a("global.button.submit")})]})]})]})}export{Ie as Categories};