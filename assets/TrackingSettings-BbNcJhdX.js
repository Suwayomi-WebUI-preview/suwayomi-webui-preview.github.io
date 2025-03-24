import{c1 as A,c2 as M,h as x,c3 as R,c4 as F,j as t,ae as P,bd as U,c5 as E,u as w,r as I,am as N,b3 as D,an as W,aR as j,c6 as $,D as O,aw as q,q as B,s as G,bc as V,a$ as H,e as T,p as v,m as b,f as J,w as K,W as Z,E as z,n as k,l as Q,F as S,aZ as _,a_ as y,x as X,ba as Y}from"./index-iC303V5E.js";import{P as ee}from"./PasswordTextField-CH6MhjoS.js";import{T as h}from"./Trackers-D4pSmk7a.js";import{A as te}from"./Avatar-D21H0jVE.js";import{C as se}from"./Chip-DYNu4O_n.js";function ae(e){return A("MuiListItemAvatar",e)}M("MuiListItemAvatar",["root","alignItemsFlexStart"]);const re=e=>{const{alignItems:s,classes:r}=e;return E({root:["root",s==="flex-start"&&"alignItemsFlexStart"]},ae,r)},ne=P("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:(e,s)=>{const{ownerState:r}=e;return[s.root,r.alignItems==="flex-start"&&s.alignItemsFlexStart]}})({minWidth:56,flexShrink:0,variants:[{props:{alignItems:"flex-start"},style:{marginTop:8}}]}),ie=x.forwardRef(function(s,r){const l=R({props:s,name:"MuiListItemAvatar"}),{className:u,...n}=l,m=x.useContext(F),i={...l,alignItems:m.alignItems},g=re(i);return t.jsx(ne,{className:U(g.root,u),ownerState:i,ref:r,...n})}),oe=({tracker:e})=>{const{t:s}=w(),[r,{loading:l}]=I.useLoginToTrackerCredentials(),[u]=I.useLogoutFromTracker(),[n,m]=x.useState(""),[i,g]=x.useState(""),c=!e.isLoggedIn&&!!e.authUrl,p=async()=>{try{await u({variables:{trackerId:e.id}})}catch(a){v(s("tracking.action.logout.label.failure",{name:e.name}),"error",b(a))}},f=async()=>{if(c){const a={redirectUrl:"".concat(window.location.origin,"/tracker/login/oauth"),clientName:"Suwayomi-WebUI",trackerId:e.id,trackerName:e.name};window.open("".concat(e.authUrl,"&state=").concat(JSON.stringify(a)),"_self");return}try{await r({variables:{input:{trackerId:e.id,username:n,password:i}}})}catch(a){v(s("tracking.action.login.label.failure",{name:e.name}),"error",b(a))}},L=a=>{if(!c){a();return}f()};return t.jsx(N,{variant:"popover",popupId:"tracker-dialog",children:a=>t.jsxs(t.Fragment,{children:[t.jsxs(D,{...W(a),onClick:()=>L(a.open),children:[t.jsx(ie,{sx:{paddingRight:"20px"},children:t.jsx(te,{alt:"".concat(e.name),src:I.getValidImgUrlFor(e.icon),variant:"rounded",sx:{width:64,height:64}})}),t.jsx(j,{primary:e.name}),h.isLoggedIn(e)&&t.jsx($,{children:t.jsx(se,{label:s("global.label.logged_in"),color:"success"})})]}),t.jsxs(O,{...q(a),open:(h.isLoggedIn(e)||!e.authUrl)&&a.isOpen,disableRestoreFocus:!0,children:[t.jsx(B,{children:s(h.isLoggedIn(e)?"tracking.settings.dialog.title.log_out":"tracking.settings.dialog.title.log_in",{name:e.name})}),!c&&!e.isLoggedIn&&t.jsxs(G,{children:[t.jsx(V,{autoFocus:!0,margin:"dense",id:"username",name:"username",label:s("global.label.username"),type:"text",fullWidth:!0,variant:"standard",onChange:d=>m(d.target.value)}),t.jsx(ee,{margin:"dense",fullWidth:!0,variant:"standard",onChange:d=>g(d.target.value)})]}),t.jsxs(H,{children:[t.jsx(T,{onClick:a.close,children:s("global.button.cancel")}),t.jsx(T,{variant:"contained",disabled:!c&&!e.isLoggedIn&&(l||!n.length||!i.length),onClick:()=>h.isLoggedIn(e)?p():f(),children:s(h.isLoggedIn(e)?"global.button.log_out":"global.button.log_in")})]})]})]})})},me=()=>{var C;const{t:e}=w(),{setTitle:s}=J();x.useLayoutEffect(()=>{s(e("tracking.title"))},[e]);const{settings:{updateProgressAfterReading:r,updateProgressManualMarkRead:l},loading:u,request:{error:n,refetch:m}}=K(),i=X(o=>v(e("global.error.label.failed_to_save_changes"),"error",b(o))),{data:g,loading:c,error:p,refetch:f}=I.useGetTrackerList(Z,{notifyOnNetworkStatusChange:!0}),L=(C=g==null?void 0:g.trackers.nodes)!=null?C:[],a=u||c,d=n!=null?n:p;return d?t.jsx(z,{message:e("global.error.label.failed_to_load_data"),messageExtra:b(d),retry:()=>{n&&m().catch(k()),p&&f().catch(k())}}):a?t.jsx(Q,{}):t.jsxs(t.Fragment,{children:[t.jsxs(S,{sx:{pt:0},children:[t.jsxs(_,{children:[t.jsx(j,{primary:e("tracking.settings.label.update_progress_reading")}),t.jsx(y,{edge:"end",checked:r,onChange:o=>i("updateProgressAfterReading",o.target.checked)})]}),t.jsxs(_,{children:[t.jsx(j,{primary:e("tracking.settings.label.update_progress_manual"),secondary:e("tracking.settings.label.update_progress_reading_description")}),t.jsx(y,{edge:"end",checked:l,onChange:o=>i("updateProgressManualMarkRead",o.target.checked)})]})]}),t.jsx(S,{subheader:t.jsx(Y,{component:"div",id:"tracking-trackers",children:e("tracking.settings.title.trackers")}),children:L.map(o=>t.jsx(oe,{tracker:o},o.id))})]})};export{me as TrackingSettings};
