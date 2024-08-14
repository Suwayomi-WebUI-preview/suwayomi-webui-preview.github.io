import{a1 as w,a0 as P,s as F,a4 as L,c as u,a5 as M,a6 as R,bA as U,j as t,a7 as E,a8 as N,u as A,a as b,P as D,aF as O,z as W,X as j,bB as $,K as B,O as G,ax as q,ay as z,az as K,b as C,m as v,N as V,q as H,G as J,E as X,h as k,g as Q,l as S,ap as _,aO as Y,bi as Z}from"./index-BHxGywp1.js";import{P as ee}from"./PasswordTextField-mfPl7OaX.js";import{T as x}from"./Trackers-D4pSmk7a.js";import{A as te}from"./Avatar-A4nyfANs.js";import{C as se}from"./Chip-CkNDbkR0.js";import{T as ae}from"./TextField-mJEqqPMl.js";import{S as y}from"./Switch-tetuyirZ.js";import"./InputAdornment-DZlsCN_s.js";import"./SwitchBase-73P-LJRE.js";function re(e){return w("MuiListItemAvatar",e)}P("MuiListItemAvatar",["root","alignItemsFlexStart"]);const ne=["className"],ie=e=>{const{alignItems:s,classes:r}=e;return N({root:["root",s==="flex-start"&&"alignItemsFlexStart"]},re,r)},oe=F("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:(e,s)=>{const{ownerState:r}=e;return[s.root,r.alignItems==="flex-start"&&s.alignItemsFlexStart]}})(({ownerState:e})=>L({minWidth:56,flexShrink:0},e.alignItems==="flex-start"&&{marginTop:8})),le=u.forwardRef(function(s,r){const i=M({props:s,name:"MuiListItemAvatar"}),{className:m}=i,n=R(i,ne),h=u.useContext(U),o=L({},i,{alignItems:h.alignItems}),l=ie(o);return t.jsx(oe,L({className:E(l.root,m),ownerState:o,ref:r},n))}),ge=le,ce=({tracker:e})=>{const{t:s}=A(),[r,{loading:i}]=b.useLoginToTrackerCredentials(),[m]=b.useLogoutFromTracker(),[n,h]=u.useState(""),[o,l]=u.useState(""),g=!e.isLoggedIn&&!!e.authUrl,p=async()=>{try{await m({variables:{trackerId:e.id}})}catch(a){v(s("tracking.action.logout.label.failure",{name:e.name}),"error")}},f=async()=>{if(g){const a={redirectUrl:"".concat(window.location.origin,"/tracker/login/oauth"),clientName:"Suwayomi-WebUI",trackerId:e.id,trackerName:e.name};window.open("".concat(e.authUrl,"&state=").concat(JSON.stringify(a)),"_self");return}try{await r({variables:{input:{trackerId:e.id,username:n,password:o}}})}catch(a){v(s("tracking.action.login.label.failure",{name:e.name}),"error")}},I=a=>{if(!g){a();return}f()};return t.jsx(D,{variant:"popover",popupId:"tracker-dialog",children:a=>t.jsxs(t.Fragment,{children:[t.jsxs(O,{...W(a),onClick:()=>I(a.open),onTouchStart:()=>I(a.open),children:[t.jsx(ge,{sx:{paddingRight:"20px"},children:t.jsx(te,{alt:"".concat(e.name),src:b.getValidImgUrlFor(e.icon),variant:"rounded",sx:{width:64,height:64}})}),t.jsx(j,{primary:e.name}),x.isLoggedIn(e)&&t.jsx($,{children:t.jsx(se,{label:s("global.label.logged_in"),color:"success"})})]}),t.jsxs(B,{...G(a),open:(x.isLoggedIn(e)||!e.authUrl)&&a.isOpen,disableRestoreFocus:!0,children:[t.jsx(q,{children:s(x.isLoggedIn(e)?"tracking.settings.dialog.title.log_out":"tracking.settings.dialog.title.log_in",{name:e.name})}),!g&&!e.isLoggedIn&&t.jsxs(z,{children:[t.jsx(ae,{autoFocus:!0,margin:"dense",id:"username",name:"username",label:s("global.label.username"),type:"text",fullWidth:!0,variant:"standard",onChange:c=>h(c.target.value)}),t.jsx(ee,{margin:"dense",fullWidth:!0,variant:"standard",onChange:c=>l(c.target.value)})]}),t.jsxs(K,{children:[t.jsx(C,{onClick:a.close,children:s("global.button.cancel")}),t.jsx(C,{variant:"contained",disabled:!g&&!e.isLoggedIn&&(i||!n.length||!o.length),onClick:()=>x.isLoggedIn(e)?p():f(),children:s(x.isLoggedIn(e)?"global.button.log_out":"global.button.log_in")})]})]})]})})},Le=()=>{var T;const{t:e}=A(),{setTitle:s}=u.useContext(V);u.useEffect(()=>{s(e("tracking.settings.title.settings"))},[e]);const{settings:{updateProgressAfterReading:r,updateProgressManualMarkRead:i},loading:m,request:{error:n,refetch:h}}=H(),o=Z(()=>v(e("global.error.label.failed_to_save_changes"),"error")),{data:l,loading:g,error:p,refetch:f}=b.useGetTrackerList(J,{notifyOnNetworkStatusChange:!0}),I=(T=l==null?void 0:l.trackers.nodes)!=null?T:[],a=m||g,c=n!=null?n:p;return c?t.jsx(X,{message:e("global.error.label.failed_to_load_data"),messageExtra:c.message,retry:()=>{n&&h().catch(k()),p&&f().catch(k())}}):a?t.jsx(Q,{}):t.jsxs(t.Fragment,{children:[t.jsxs(S,{children:[t.jsxs(_,{children:[t.jsx(j,{primary:e("tracking.settings.label.update_progress_reading")}),t.jsx(y,{edge:"end",checked:r,onChange:d=>o("updateProgressAfterReading",d.target.checked)})]}),t.jsxs(_,{children:[t.jsx(j,{primary:e("tracking.settings.label.update_progress_manual"),secondary:e("tracking.settings.label.update_progress_reading_description")}),t.jsx(y,{edge:"end",checked:i,onChange:d=>o("updateProgressManualMarkRead",d.target.checked)})]})]}),t.jsx(S,{subheader:t.jsx(Y,{component:"div",id:"tracking-trackers",children:e("tracking.settings.title.trackers")}),children:I.map(d=>t.jsx(ce,{tracker:d},d.id))})]})};export{Le as TrackingSettings};
