import{u as M,c as p,j as t,aH as F,$ as _,Q as N,aB as Q,aC as O,b3 as R,T as A,S as g,k as W,aD as q,b as C,at as G,f as J,I as K,m as P}from"./index-Dw9heavt.js";import{d as U}from"./Delete-CIgykoAN.js";import{d as X}from"./Info-B1rDU2rr.js";import{a as Y,T as Z}from"./TextSetting-D8Eck8sK.js";const E=({handleDelete:a,mutable:i=!0,deletable:o=!0,...e})=>{const{t:h}=M();return t.jsxs(g,{direction:"row",children:[i?t.jsx(Z,{...e,dialogTitle:""}):t.jsx(G,{children:t.jsx(_,{secondary:e.value})}),t.jsx(J,{title:h("chapter.action.download.delete.label.action"),children:t.jsx(K,{disabled:!o,size:"large",onClick:a,children:t.jsx(U,{})})})]})},V=a=>{var i;return(i=a==null?void 0:a.map(o=>o[0]))!=null?i:[]},st=({settingName:a,description:i,dialogDisclaimer:o,valueInfos:e,handleChange:h,addItemButtonTitle:j,placeholder:S,allowDuplicates:H=!1,validateItem:$=()=>!0,invalidItemError:m})=>{const{t:d}=M(),n=V(e),[z,f]=p.useState(!1),[l,x]=p.useState(n),[T,k]=p.useState(!1);p.useEffect(()=>{e&&x(n)},[e]);const b=(s=!0)=>{s&&x(n),f(!1)},u=(s,r)=>{if(r===void 0){x(l.toSpliced(s,1));return}if(!(!H&&l.includes(r))&&r!==""){if(!$(r)){P(m!=null?m:d("global.error.label.invalid_input"),"error");return}x(l.toSpliced(s,1,r.trim()))}},B=()=>{b(!0),h(l.filter(s=>s!==""))};return t.jsxs(t.Fragment,{children:[t.jsx(F,{onClick:()=>f(!0),children:t.jsx(_,{primary:a,secondary:n!=null&&n.length?n==null?void 0:n.join(", "):i,secondaryTypographyProps:{style:{display:"flex",flexDirection:"column"}}})}),t.jsxs(N,{open:z,onClose:()=>b(),fullWidth:!0,children:[t.jsx(Q,{children:a}),(!!i||!!o)&&t.jsx(O,{children:t.jsxs(R,{sx:{paddingBottom:"10px"},component:"div",children:[i&&t.jsx(A,{variant:"body1",sx:{whiteSpace:"pre-line"},children:i}),o&&t.jsxs(g,{direction:"row",sx:{alignItems:"center"},children:[t.jsx(X,{color:"warning"}),t.jsx(A,{variant:"body1",sx:{marginLeft:"10px",marginTop:"5px",whiteSpace:"pre-line"},children:o})]})]})}),t.jsx(O,{dividers:!0,sx:{maxHeight:"300px"},children:t.jsx(W,{children:l.map((s,r)=>{var D,y,L,w;return t.jsx(E,{settingName:"",placeholder:S,handleChange:c=>u(r,c),handleDelete:()=>u(r,void 0),value:s,mutable:(y=(D=e==null?void 0:e.find(([c])=>c===s))==null?void 0:D[1])==null?void 0:y.mutable,deletable:(w=(L=e==null?void 0:e.find(([c])=>c===s))==null?void 0:L[1])==null?void 0:w.deletable})})})}),t.jsx(q,{children:t.jsxs(g,{direction:"row",sx:{justifyContent:"space-between",width:"100%"},children:[t.jsx(C,{onClick:()=>k(!0),children:j!=null?j:d("global.button.add")}),t.jsxs(g,{direction:"row",children:[t.jsx(C,{onClick:()=>b(),children:d("global.button.cancel")}),t.jsx(C,{onClick:()=>B(),children:d("global.button.ok")})]})]})})]}),T&&t.jsx(Y,{settingName:"",placeholder:S,handleChange:s=>u(l.length,s),isDialogOpen:T,setIsDialogOpen:k})]})};export{st as M};
