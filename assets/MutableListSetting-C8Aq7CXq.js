import{u as N,f as g,j as e,aT as P,aD as q,aq as R,aM as W,aN as M,bo as _,T as A,d as j,v as B,aP as G,e as S,aO as J,i as K,I as Q,O as U,n as V}from"./index-BAJWok1j.js";import{I as X}from"./Info-BGEuh4ts.js";import{a as Y,T as Z}from"./TextSetting-w31I2GVH.js";const $=({handleDelete:r,mutable:o=!0,deletable:a=!0,...n})=>{const{t:u}=N();return e.jsxs(j,{direction:"row",children:[o?e.jsx(Z,{...n,dialogTitle:""}):e.jsx(J,{children:e.jsx(q,{secondary:n.value})}),e.jsx(K,{title:u("chapter.action.download.delete.label.action"),children:e.jsx(Q,{disabled:!a,size:"large",onClick:r,children:e.jsx(U,{})})})]})},E=r=>{var o;return(o=r==null?void 0:r.map(a=>a[0]))!=null?o:[]},se=({settingName:r,description:o,dialogDisclaimer:a,valueInfos:n,handleChange:u,addItemButtonTitle:b,placeholder:T,allowDuplicates:z=!1,validateItem:x=()=>!0,invalidItemError:D})=>{const{t:p}=N(),i=E(n),[F,f]=g.useState(!1),[c,h]=g.useState(i),[k,O]=g.useState(!1);g.useEffect(()=>{n&&h(i)},[n]);const y=(s=!0)=>{s&&h(i),f(!1)},C=(s,t)=>{if(t===void 0){h(c.toSpliced(s,1));return}if(!(!z&&c.includes(t))&&t!==""){if(!(x!=null&&x(t,c))){V(D!=null?D:p("global.error.label.invalid_input"),"error");return}h(c.toSpliced(s,1,t.trim()))}},H=()=>{y(!0);const s=c.filter(l=>l!==""),t=i.filter(l=>!s.includes(l));u(s,t)};return e.jsxs(e.Fragment,{children:[e.jsx(P,{onClick:()=>f(!0),children:e.jsx(q,{primary:r,secondary:i!=null&&i.length?i==null?void 0:i.join(", "):o,secondaryTypographyProps:{style:{display:"flex",flexDirection:"column"}}})}),e.jsxs(R,{open:F,onClose:()=>y(),fullWidth:!0,children:[e.jsx(W,{children:r}),(!!o||!!a)&&e.jsx(M,{children:e.jsxs(_,{sx:{paddingBottom:"10px"},component:"div",children:[o&&e.jsx(A,{variant:"body1",sx:{whiteSpace:"pre-line"},children:o}),a&&e.jsxs(j,{direction:"row",sx:{alignItems:"center"},children:[e.jsx(X,{color:"warning"}),e.jsx(A,{variant:"body1",sx:{marginLeft:"10px",marginTop:"5px",whiteSpace:"pre-line"},children:a})]})]})}),e.jsx(M,{dividers:!0,sx:{maxHeight:"300px"},children:e.jsx(B,{children:c.map((s,t)=>{var l,m,L,w;return e.jsx($,{settingName:"",placeholder:T,handleChange:d=>C(t,d),handleDelete:()=>C(t,void 0),value:s,mutable:(m=(l=n==null?void 0:n.find(([d])=>d===s))==null?void 0:l[1])==null?void 0:m.mutable,deletable:(w=(L=n==null?void 0:n.find(([d])=>d===s))==null?void 0:L[1])==null?void 0:w.deletable},s)})})}),e.jsx(G,{children:e.jsxs(j,{direction:"row",sx:{justifyContent:"space-between",width:"100%"},children:[e.jsx(S,{onClick:()=>O(!0),children:b!=null?b:p("global.button.add")}),e.jsxs(j,{direction:"row",children:[e.jsx(S,{onClick:()=>y(),children:p("global.button.cancel")}),e.jsx(S,{onClick:()=>H(),children:p("global.button.ok")})]})]})})]}),k&&e.jsx(Y,{settingName:"",placeholder:T,handleChange:s=>C(c.length,s),isDialogOpen:k,setIsDialogOpen:O,validate:s=>{var t;return(t=x==null?void 0:x(s,c))!=null?t:!0}})]})};export{se as M};