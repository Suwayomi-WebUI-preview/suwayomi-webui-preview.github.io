import{u as N,f as g,j as e,aS as W,aC as z,ap as _,aL as q,aM as M,bn as B,T as A,d as j,v as G,aO as J,e as m,aN as K,i as P,I as Q,O as U,n as V}from"./index-BQ2qmr0P.js";import{I as X}from"./Info-BfNWZLgV.js";import{a as Y,T as Z}from"./TextSetting-D43djioR.js";const $=({handleDelete:o,mutable:r=!0,deletable:a=!0,...n})=>{const{t:u}=N();return e.jsxs(j,{direction:"row",children:[r?e.jsx(Z,{...n,dialogTitle:""}):e.jsx(K,{children:e.jsx(z,{secondary:n.value})}),e.jsx(P,{title:u("chapter.action.download.delete.label.action"),children:e.jsx(Q,{disabled:!a,size:"large",onClick:o,children:e.jsx(U,{})})})]})},E=o=>{var r;return(r=o==null?void 0:o.map(a=>a[0]))!=null?r:[]},se=({settingName:o,description:r,dialogDisclaimer:a,valueInfos:n,handleChange:u,addItemButtonTitle:b,placeholder:f,allowDuplicates:F=!1,validateItem:x=()=>!0,invalidItemError:D})=>{const{t:p}=N(),i=E(n),[H,T]=g.useState(!1),[c,h]=g.useState(i),[k,L]=g.useState(!1);g.useEffect(()=>{n&&h(i)},[n]);const y=(s=!0)=>{s&&h(i),T(!1)},C=(s,t)=>{if(t===void 0){h(c.toSpliced(s,1));return}if(!(!F&&c.includes(t))&&t!==""){if(!(x!=null&&x(t,c))){V(D!=null?D:p("global.error.label.invalid_input"),"error");return}h(c.toSpliced(s,1,t.trim()))}},R=()=>{y(!0);const s=c.filter(l=>l!==""),t=i.filter(l=>!s.includes(l));u(s,t)};return e.jsxs(e.Fragment,{children:[e.jsx(W,{onClick:()=>T(!0),children:e.jsx(z,{primary:o,secondary:i!=null&&i.length?i==null?void 0:i.join(", "):r,secondaryTypographyProps:{style:{display:"flex",flexDirection:"column"}}})}),e.jsxs(_,{open:H,onClose:()=>y(),fullWidth:!0,children:[e.jsx(q,{children:o}),(!!r||!!a)&&e.jsx(M,{children:e.jsxs(B,{sx:{paddingBottom:"10px"},component:"div",children:[r&&e.jsx(A,{variant:"body1",sx:{whiteSpace:"pre-line"},children:r}),a&&e.jsxs(j,{direction:"row",sx:{alignItems:"center"},children:[e.jsx(X,{color:"warning"}),e.jsx(A,{variant:"body1",sx:{marginLeft:"10px",marginTop:"5px",whiteSpace:"pre-line"},children:a})]})]})}),e.jsx(M,{dividers:!0,sx:{maxHeight:"300px"},children:e.jsx(G,{children:c.map((s,t)=>{var l,S,O,w;return e.jsx($,{settingName:"",placeholder:f,handleChange:d=>C(t,d),handleDelete:()=>C(t,void 0),value:s,mutable:(S=(l=n==null?void 0:n.find(([d])=>d===s))==null?void 0:l[1])==null?void 0:S.mutable,deletable:(w=(O=n==null?void 0:n.find(([d])=>d===s))==null?void 0:O[1])==null?void 0:w.deletable},s)})})}),e.jsx(J,{children:e.jsxs(j,{direction:"row",sx:{justifyContent:"space-between",width:"100%"},children:[e.jsx(m,{onClick:()=>L(!0),children:b!=null?b:p("global.button.add")}),e.jsxs(j,{direction:"row",children:[e.jsx(m,{onClick:()=>y(),children:p("global.button.cancel")}),e.jsx(m,{onClick:()=>R(),children:p("global.button.ok")})]})]})})]}),k&&e.jsx(Y,{settingName:"",placeholder:f,handleChange:s=>C(c.length,s),isDialogOpen:k,setIsDialogOpen:L,validate:s=>{var t;return(t=x==null?void 0:x(s,c))!=null?t:!0}})]})};export{se as M};
