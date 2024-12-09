import{bT as w,bU as A,a0 as U,f as u,bV as M,bW as R,j as t,aZ as F,bX as P,u as _,c as I,ad as E,aO as N,ae as D,ay as L,bY as O,am as W,an as $,aH as q,aI as B,aY as G,bZ as V,aK as H,e as T,n as j,N as J,q as K,P as Y,E as Z,m as C,l as X,v as k,aJ as S,aU as z,y as Q}from"./index-D4N9uJT_.js";import{T as x}from"./Trackers-D4pSmk7a.js";import{A as ee}from"./Avatar-Lrc4_57M.js";import{C as te}from"./Chip-Bo0kue3Q.js";import{S as y}from"./Switch-D6A9xWJw.js";function se(e){return w("MuiListItemAvatar",e)}A("MuiListItemAvatar",["root","alignItemsFlexStart"]);const ae=e=>{const{alignItems:s,classes:n}=e;return P({root:["root",s==="flex-start"&&"alignItemsFlexStart"]},se,n)},ne=U("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:(e,s)=>{const{ownerState:n}=e;return[s.root,n.alignItems==="flex-start"&&s.alignItemsFlexStart]}})({minWidth:56,flexShrink:0,variants:[{props:{alignItems:"flex-start"},style:{marginTop:8}}]}),re=u.forwardRef(function(s,n){const o=M({props:s,name:"MuiListItemAvatar"}),{className:m,...r}=o,h=u.useContext(R),i={...o,alignItems:h.alignItems},l=ae(i);return t.jsx(ne,{className:F(l.root,m),ownerState:i,ref:n,...r})}),ie=({tracker:e})=>{const{t:s}=_(),[n,{loading:o}]=I.useLoginToTrackerCredentials(),[m]=I.useLogoutFromTracker(),[r,h]=u.useState(""),[i,l]=u.useState(""),g=!e.isLoggedIn&&!!e.authUrl,p=async()=>{try{await m({variables:{trackerId:e.id}})}catch(a){j(s("tracking.action.logout.label.failure",{name:e.name}),"error")}},f=async()=>{if(g){const a={redirectUrl:"".concat(window.location.origin,"/tracker/login/oauth"),clientName:"Suwayomi-WebUI",trackerId:e.id,trackerName:e.name};window.open("".concat(e.authUrl,"&state=").concat(JSON.stringify(a)),"_self");return}try{await n({variables:{input:{trackerId:e.id,username:r,password:i}}})}catch(a){j(s("tracking.action.login.label.failure",{name:e.name}),"error")}},b=a=>{if(!g){a();return}f()};return t.jsx(E,{variant:"popover",popupId:"tracker-dialog",children:a=>t.jsxs(t.Fragment,{children:[t.jsxs(N,{...D(a),onClick:()=>b(a.open),onTouchStart:()=>b(a.open),children:[t.jsx(re,{sx:{paddingRight:"20px"},children:t.jsx(ee,{alt:"".concat(e.name),src:I.getValidImgUrlFor(e.icon),variant:"rounded",sx:{width:64,height:64}})}),t.jsx(L,{primary:e.name}),x.isLoggedIn(e)&&t.jsx(O,{children:t.jsx(te,{label:s("global.label.logged_in"),color:"success"})})]}),t.jsxs(W,{...$(a),open:(x.isLoggedIn(e)||!e.authUrl)&&a.isOpen,disableRestoreFocus:!0,children:[t.jsx(q,{children:s(x.isLoggedIn(e)?"tracking.settings.dialog.title.log_out":"tracking.settings.dialog.title.log_in",{name:e.name})}),!g&&!e.isLoggedIn&&t.jsxs(B,{children:[t.jsx(G,{autoFocus:!0,margin:"dense",id:"username",name:"username",label:s("global.label.username"),type:"text",fullWidth:!0,variant:"standard",onChange:d=>h(d.target.value)}),t.jsx(V,{margin:"dense",fullWidth:!0,variant:"standard",onChange:d=>l(d.target.value)})]}),t.jsxs(H,{children:[t.jsx(T,{onClick:a.close,children:s("global.button.cancel")}),t.jsx(T,{variant:"contained",disabled:!g&&!e.isLoggedIn&&(o||!r.length||!i.length),onClick:()=>x.isLoggedIn(e)?p():f(),children:s(x.isLoggedIn(e)?"global.button.log_out":"global.button.log_in")})]})]})]})})},ue=()=>{var v;const{t:e}=_(),{setTitle:s}=u.useContext(J);u.useLayoutEffect(()=>{s(e("tracking.settings.title.settings"))},[e]);const{settings:{updateProgressAfterReading:n,updateProgressManualMarkRead:o},loading:m,request:{error:r,refetch:h}}=K(),i=Q(()=>j(e("global.error.label.failed_to_save_changes"),"error")),{data:l,loading:g,error:p,refetch:f}=I.useGetTrackerList(Y,{notifyOnNetworkStatusChange:!0}),b=(v=l==null?void 0:l.trackers.nodes)!=null?v:[],a=m||g,d=r!=null?r:p;return d?t.jsx(Z,{message:e("global.error.label.failed_to_load_data"),messageExtra:d.message,retry:()=>{r&&h().catch(C()),p&&f().catch(C())}}):a?t.jsx(X,{}):t.jsxs(t.Fragment,{children:[t.jsxs(k,{sx:{pt:0},children:[t.jsxs(S,{children:[t.jsx(L,{primary:e("tracking.settings.label.update_progress_reading")}),t.jsx(y,{edge:"end",checked:n,onChange:c=>i("updateProgressAfterReading",c.target.checked)})]}),t.jsxs(S,{children:[t.jsx(L,{primary:e("tracking.settings.label.update_progress_manual"),secondary:e("tracking.settings.label.update_progress_reading_description")}),t.jsx(y,{edge:"end",checked:o,onChange:c=>i("updateProgressManualMarkRead",c.target.checked)})]})]}),t.jsx(k,{subheader:t.jsx(z,{component:"div",id:"tracking-trackers",children:e("tracking.settings.title.trackers")}),children:b.map(c=>t.jsx(ie,{tracker:c},c.id))})]})};export{ue as TrackingSettings};
