import{u as A,c as p,j as t,aE as J,W as M,J as N,aw as R,ax as O,a_ as $,T as _,S as g,l as q,ay as B,b as C,ao as E,f as G,I as K,m as P}from"./index-DcjaYI8c.js";import{d as Q}from"./Delete-B0s0JAXe.js";import{d as U}from"./Info-CoQv9wZa.js";import{a as X,T as Y}from"./TextSetting-BimcZWOI.js";const Z=({handleDelete:a,mutable:i=!0,deletable:o=!0,...e})=>{const{t:h}=A();return t.jsxs(g,{direction:"row",children:[i?t.jsx(Y,{...e,dialogTitle:""}):t.jsx(E,{children:t.jsx(M,{secondary:e.value})}),t.jsx(G,{title:h("chapter.action.download.delete.label.action"),children:t.jsx(K,{disabled:!o,size:"large",onClick:a,children:t.jsx(Q,{})})})]})},V=a=>{var i;return(i=a==null?void 0:a.map(o=>o[0]))!=null?i:[]},st=({settingName:a,description:i,dialogDisclaimer:o,valueInfos:e,handleChange:h,addItemButtonTitle:j,placeholder:S,allowDuplicates:W=!1,validateItem:z=()=>!0,invalidItemError:m})=>{const{t:d}=A(),n=V(e),[F,f]=p.useState(!1),[l,x]=p.useState(n),[T,k]=p.useState(!1);p.useEffect(()=>{e&&x(n)},[e]);const u=(s=!0)=>{s&&x(n),f(!1)},b=(s,r)=>{if(r===void 0){x(l.toSpliced(s,1));return}if(!(!W&&l.includes(r))&&r!==""){if(!z(r)){P(m!=null?m:d("global.error.label.invalid_input"),"error");return}x(l.toSpliced(s,1,r.trim()))}},H=()=>{u(!0),h(l.filter(s=>s!==""))};return t.jsxs(t.Fragment,{children:[t.jsx(J,{onClick:()=>f(!0),children:t.jsx(M,{primary:a,secondary:n!=null&&n.length?n==null?void 0:n.join(", "):i,secondaryTypographyProps:{style:{display:"flex",flexDirection:"column"}}})}),t.jsxs(N,{open:F,onClose:()=>u(),fullWidth:!0,children:[t.jsx(R,{children:a}),(!!i||!!o)&&t.jsx(O,{children:t.jsxs($,{sx:{paddingBottom:"10px"},component:"div",children:[i&&t.jsx(_,{variant:"body1",sx:{whiteSpace:"pre-line"},children:i}),o&&t.jsxs(g,{direction:"row",alignItems:"center",children:[t.jsx(U,{color:"warning"}),t.jsx(_,{variant:"body1",sx:{marginLeft:"10px",marginTop:"5px",whiteSpace:"pre-line"},children:o})]})]})}),t.jsx(O,{dividers:!0,sx:{maxHeight:"300px"},children:t.jsx(q,{children:l.map((s,r)=>{var D,y,w,L;return t.jsx(Z,{settingName:"",placeholder:S,handleChange:c=>b(r,c),handleDelete:()=>b(r,void 0),value:s,mutable:(y=(D=e==null?void 0:e.find(([c])=>c===s))==null?void 0:D[1])==null?void 0:y.mutable,deletable:(L=(w=e==null?void 0:e.find(([c])=>c===s))==null?void 0:w[1])==null?void 0:L.deletable})})})}),t.jsx(B,{children:t.jsxs(g,{sx:{width:"100%"},direction:"row",justifyContent:"space-between",children:[t.jsx(C,{onClick:()=>k(!0),children:j!=null?j:d("global.button.add")}),t.jsxs(g,{direction:"row",children:[t.jsx(C,{onClick:()=>u(),children:d("global.button.cancel")}),t.jsx(C,{onClick:()=>H(),children:d("global.button.ok")})]})]})})]}),T&&t.jsx(X,{settingName:"",placeholder:S,handleChange:s=>b(l.length,s),isDialogOpen:T,setIsDialogOpen:k})]})};export{st as M};
