import{u as W,i as g,j as e,b4 as H,aS as _,D as N,s as R,t as A,bs as z,T as M,d as j,c2 as B,G as J,b0 as K,e as m,a_ as P,l as Q,I as U,W as V,q as X}from"./index-Mw6rWbQu.js";import{a as Y,T as Z}from"./TextSetting-BfrAJnpE.js";const $=({handleDelete:r,mutable:o=!0,deletable:c=!0,...n})=>{const{t:u}=W();return e.jsxs(j,{sx:{flexDirection:"row",alignItems:"center"},children:[o?e.jsx(Z,{...n,dialogTitle:""}):e.jsx(P,{children:e.jsx(_,{secondary:n.value})}),e.jsx(Q,{title:u("chapter.action.download.delete.label.action"),disabled:!c,children:e.jsx(U,{disabled:!c,onClick:r,children:e.jsx(V,{})})})]})},E=r=>{var o;return(o=r==null?void 0:r.map(c=>c[0]))!=null?o:[]},ee=({settingName:r,description:o,dialogDisclaimer:c,valueInfos:n,handleChange:u,addItemButtonTitle:b,placeholder:T,allowDuplicates:q=!1,validateItem:x=()=>!0,invalidItemError:D})=>{const{t:p}=W(),i=E(n),[F,f]=g.useState(!1),[l,h]=g.useState(i),[k,L]=g.useState(!1);g.useEffect(()=>{n&&h(i)},[n]);const y=(s=!0)=>{s&&h(i),f(!1)},C=(s,t)=>{if(t===void 0){h(l.toSpliced(s,1));return}if(!(!q&&l.includes(t))&&t!==""){if(!(x!=null&&x(t,l))){X(D!=null?D:p("global.error.label.invalid_input"),"error");return}h(l.toSpliced(s,1,t.trim()))}},G=()=>{y(!0);const s=l.filter(a=>a!==""),t=i.filter(a=>!s.includes(a));u(s,t)};return e.jsxs(e.Fragment,{children:[e.jsx(H,{onClick:()=>f(!0),children:e.jsx(_,{primary:r,secondary:i!=null&&i.length?i==null?void 0:i.join(", "):o,secondaryTypographyProps:{style:{display:"flex",flexDirection:"column"}}})}),e.jsxs(N,{open:F,onClose:()=>y(),fullWidth:!0,children:[e.jsx(R,{children:r}),(!!o||!!c)&&e.jsx(A,{children:e.jsxs(z,{sx:{paddingBottom:"10px"},component:"div",children:[o&&e.jsx(M,{variant:"body1",sx:{whiteSpace:"pre-line"},children:o}),c&&e.jsxs(j,{direction:"row",sx:{alignItems:"center"},children:[e.jsx(B,{color:"warning"}),e.jsx(M,{variant:"body1",sx:{marginLeft:"10px",marginTop:"5px",whiteSpace:"pre-line"},children:c})]})]})}),e.jsx(A,{dividers:!0,sx:{maxHeight:"300px"},children:e.jsx(J,{children:l.map((s,t)=>{var a,S,w,O;return e.jsx($,{settingName:"",placeholder:T,handleChange:d=>C(t,d),handleDelete:()=>C(t,void 0),value:s,mutable:(S=(a=n==null?void 0:n.find(([d])=>d===s))==null?void 0:a[1])==null?void 0:S.mutable,deletable:(O=(w=n==null?void 0:n.find(([d])=>d===s))==null?void 0:w[1])==null?void 0:O.deletable},s)})})}),e.jsx(K,{children:e.jsxs(j,{direction:"row",sx:{justifyContent:"space-between",width:"100%"},children:[e.jsx(m,{onClick:()=>L(!0),children:b!=null?b:p("global.button.add")}),e.jsxs(j,{direction:"row",children:[e.jsx(m,{onClick:()=>y(),children:p("global.button.cancel")}),e.jsx(m,{onClick:()=>G(),children:p("global.button.ok")})]})]})})]}),k&&e.jsx(Y,{settingName:"",placeholder:T,handleChange:s=>C(l.length,s),isDialogOpen:k,setIsDialogOpen:L,validate:s=>{var t;return(t=x==null?void 0:x(s,l))!=null?t:!0}})]})};export{ee as M};
