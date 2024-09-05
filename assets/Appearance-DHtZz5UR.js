import{r as He,i as ze,j as r,u as K,q as Ne,c as j,Q as Ge,aC as Ye,aD as Ze,g as De,aB as _e,h as Ie,S as w,T as ee,cc as Xe,b7 as et,aE as tt,b as ie,m as P,bl as Ee,U as Oe,A as rt,R as Me,s as nt,B as Z,cd as Le,ce as st,bG as at,I as pe,f as me,cf as it,cg as ot,M as ct,ch as _,N as lt,d as ut,l as fe,aQ as ge,au as ne,a0 as se,_ as $,ci as Ce}from"./index-3BgSjiAU.js";import{S as be}from"./Select-Df9bsSXq.js";import{N as dt}from"./NumberSetting-DH9l3KL8.js";import{b as ht}from"./language-DpJ3NWoc.js";import{T as pt}from"./Trans-BI0vYwSW.js";import{L as Be}from"./Link-BS4yKD0g.js";import{T as xe}from"./TextField-zLe547JY.js";import{d as mt}from"./CheckCircle-DGPGZ-Mz.js";import{d as ft}from"./Delete-C4WlJ5KK.js";import{d as gt}from"./Edit-IewvK8-v.js";import{C as Ct}from"./Card-CzE045je.js";import{C as bt}from"./CardActionArea-dBFZskxN.js";import{S as xt}from"./Switch-B-CrynK1.js";import"./Info-CvwtdBTb.js";import"./InputAdornment-CmbKGJhs.js";import"./SwitchBase-C4xgFcP9.js";var ce={},jt=ze;Object.defineProperty(ce,"__esModule",{value:!0});var Re=ce.default=void 0,At=jt(He()),wt=r;Re=ce.default=(0,At.default)((0,wt.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m5 11h-4v4h-2v-4H7v-2h4V7h2v4h4z"}),"AddCircle");class L extends Error{constructor(t,n){super(t+" at position "+n),this.position=n}}const H=92,ae=47,vt=42,je=123,z=125,Ae=91,G=93,Tt=40,St=41,yt=32,le=10,Pe=9,Qe=13,kt=8,Nt=12,te=34,we=43,ve=45,We=39,Ue=48,Ve=57,I=44,Y=46,Dt=58,_t=59,It=65,Et=97,Ot=69,Mt=101,Lt=70,Bt=102,Rt=160,Pt=8192,Qt=8202,Wt=8239,Ut=8287,Vt=12288,Ft=8220,Jt=8221,Kt=8216,qt=8217,$t=96,Ht=180;function zt(e){return e>=Ue&&e<=Ve||e>=It&&e<=Lt||e>=Et&&e<=Bt}function E(e){return e>=Ue&&e<=Ve}function Gt(e){return e>=32&&e<=1114111}function B(e){return Yt.test(e)}const Yt=/^[,:[\]/{}()\n+]$/;function Zt(e){return B(e)&&e!=="/"}function Te(e){return Xt.test(e)||e&&X(e.charCodeAt(0))}const Xt=/^[[{\w-]$/;function er(e){return e===le||e===Qe||e===Pe||e===kt||e===Nt}function R(e){return e===yt||e===le||e===Pe||e===Qe}function tr(e){return e===Rt||e>=Pt&&e<=Qt||e===Wt||e===Ut||e===Vt}function X(e){return Fe(e)||oe(e)}function Fe(e){return e===te||e===Ft||e===Jt}function Se(e){return e===te}function oe(e){return e===We||e===Kt||e===qt||e===$t||e===Ht}function ye(e){return e===We}function F(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;const i=e.lastIndexOf(t);return i!==-1?e.substring(0,i)+(n?"":e.substring(i+1)):e}function A(e,t){let n=e.length;if(!R(e.charCodeAt(n-1)))return e+t;for(;R(e.charCodeAt(n-1));)n--;return e.substring(0,n)+t+e.substring(n)}function rr(e,t,n){return e.substring(0,t)+e.substring(t+n)}function nr(e){return/[,\n][ \t\r]*$/.test(e)}function sr(e){return/^\w+$/.test(e)}const ar={"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t"},ir={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:"\n",r:"\r",t:"	"};function or(e){let t=0,n="";m()||Ke();const p=c(I);for(p&&o(),Te(e[t])&&nr(n)?(p||(n=A(n,",")),Q()):p&&(n=F(n,","));e.charCodeAt(t)===z||e.charCodeAt(t)===G;)t++,o();if(t>=e.length)return n;de();function m(){o();const s=T()||g()||S()||re()||x()||y();return o(),s}function o(){const s=t;let a=l();do a=b(),a&&(a=l());while(a);return t>s}function l(){let s="",a;for(;(a=R(e.charCodeAt(t)))||tr(e.charCodeAt(t));)a?s+=e[t]:s+=" ",t++;return s.length>0?(n+=s,!0):!1}function b(){if(e.charCodeAt(t)===ae&&e.charCodeAt(t+1)===vt){for(;t<e.length&&!cr(e,t);)t++;return t+=2,!0}if(e.charCodeAt(t)===ae&&e.charCodeAt(t+1)===ae){for(;t<e.length&&e.charCodeAt(t)!==le;)t++;return!0}return!1}function c(s){return e.charCodeAt(t)===s?(n+=e[t],t++,!0):!1}function d(s){return e.charCodeAt(t)===s?(t++,!0):!1}function h(){return d(H)}function O(){return o(),e.charCodeAt(t)===Y&&e.charCodeAt(t+1)===Y&&e.charCodeAt(t+2)===Y?(t+=3,o(),d(I),!0):!1}function T(){if(e.charCodeAt(t)===je){n+="{",t++,o(),d(I)&&o();let s=!0;for(;t<e.length&&e.charCodeAt(t)!==z;){let a;if(s?(a=!0,s=!1):(a=c(I),a||(n=A(n,",")),o()),O(),!(S()||y())){e.charCodeAt(t)===z||e.charCodeAt(t)===je||e.charCodeAt(t)===G||e.charCodeAt(t)===Ae||e[t]===void 0?n=F(n,","):qe();break}o();const U=c(Dt),M=t>=e.length;U||(Te(e[t])||M?n=A(n,":"):he()),m()||(U||M?n+="null":he())}return e.charCodeAt(t)===z?(n+="}",t++):n=A(n,"}"),!0}return!1}function g(){if(e.charCodeAt(t)===Ae){n+="[",t++,o(),d(I)&&o();let s=!0;for(;t<e.length&&e.charCodeAt(t)!==G;)if(s?s=!1:c(I)||(n=A(n,",")),O(),!m()){n=F(n,",");break}return e.charCodeAt(t)===G?(n+="]",t++):n=A(n,"]"),!0}return!1}function Q(){let s=!0,a=!0;for(;a;)s?s=!1:c(I)||(n=A(n,",")),a=m();a||(n=F(n,",")),n="[\n".concat(n,"\n]")}function S(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,a=e.charCodeAt(t)===H;if(a&&(t++,a=!0),X(e.charCodeAt(t))){const N=Se(e.charCodeAt(t))?Se:ye(e.charCodeAt(t))?ye:oe(e.charCodeAt(t))?oe:Fe,U=t,M=n.length;let u='"';for(t++;;){if(t>=e.length){const f=v(t-1);return!s&&B(e.charAt(f))?(t=U,n=n.substring(0,M),S(!0)):(u=A(u,'"'),n+=u,!0)}else if(N(e.charCodeAt(t))){const f=t,D=u.length;if(u+='"',t++,n+=u,o(),s||t>=e.length||B(e.charAt(t))||X(e.charCodeAt(t))||E(e.charCodeAt(t)))return q(),!0;if(B(e.charAt(v(f-1))))return t=U,n=n.substring(0,M),S(!0);n=n.substring(0,M),t=f+1,u=u.substring(0,D)+"\\"+u.substring(D)}else{if(s&&B(e[t]))return u=A(u,'"'),n+=u,q(),!0;if(e.charCodeAt(t)===H){const f=e.charAt(t+1);if(ir[f]!==void 0)u+=e.slice(t,t+2),t+=2;else if(f==="u"){let V=2;for(;V<6&&zt(e.charCodeAt(t+V));)V++;V===6?(u+=e.slice(t,t+6),t+=6):t+V>=e.length?t=e.length:$e()}else u+=f,t+=2}else{const f=e.charAt(t),D=e.charCodeAt(t);D===te&&e.charCodeAt(t-1)!==H?(u+="\\"+f,t++):er(D)?(u+=ar[f],t++):(Gt(D)||ue(f),u+=f,t++)}}a&&h()}}return!1}function q(){let s=!1;for(o();e.charCodeAt(t)===we;){s=!0,t++,o(),n=F(n,'"',!0);const a=n.length;S()?n=rr(n,a,1):n=A(n,'"')}return s}function re(){const s=t;if(e.charCodeAt(t)===ve){if(t++,k())return W(s),!0;if(!E(e.charCodeAt(t)))return t=s,!1}for(;E(e.charCodeAt(t));)t++;if(e.charCodeAt(t)===Y){if(t++,k())return W(s),!0;if(!E(e.charCodeAt(t)))return t=s,!1;for(;E(e.charCodeAt(t));)t++}if(e.charCodeAt(t)===Mt||e.charCodeAt(t)===Ot){if(t++,(e.charCodeAt(t)===ve||e.charCodeAt(t)===we)&&t++,k())return W(s),!0;if(!E(e.charCodeAt(t)))return t=s,!1;for(;E(e.charCodeAt(t));)t++}if(!k())return t=s,!1;if(t>s){const a=e.slice(s,t),N=/^0\d/.test(a);return n+=N?'"'.concat(a,'"'):a,!0}return!1}function x(){return C("true","true")||C("false","false")||C("null","null")||C("True","true")||C("False","false")||C("None","null")}function C(s,a){return e.slice(t,t+s.length)===s?(n+=a,t+=s.length,!0):!1}function y(){const s=t;for(;t<e.length&&!Zt(e[t])&&!X(e.charCodeAt(t));)t++;if(t>s){if(e.charCodeAt(t)===Tt&&sr(e.slice(s,t).trim()))return t++,m(),e.charCodeAt(t)===St&&(t++,e.charCodeAt(t)===_t&&t++),!0;{for(;R(e.charCodeAt(t-1))&&t>0;)t--;const a=e.slice(s,t);return n+=a==="undefined"?"null":JSON.stringify(a),e.charCodeAt(t)===te&&t++,!0}}}function v(s){let a=s;for(;a>0&&R(e.charCodeAt(a));)a--;return a}function k(){return t>=e.length||B(e[t])||R(e.charCodeAt(t))}function W(s){n+=e.slice(s,t)+"0"}function ue(s){throw new L("Invalid character "+JSON.stringify(s),t)}function de(){throw new L("Unexpected character "+JSON.stringify(e[t]),t)}function Ke(){throw new L("Unexpected end of json string",e.length)}function qe(){throw new L("Object key expected",t)}function he(){throw new L("Colon expected",t)}function $e(){const s=e.slice(t,t+6);throw new L('Invalid unicode character "'.concat(s,'"'),t)}}function cr(e,t){return e[t]==="*"&&e[t+1]==="/"}const lr={id:"",isCustom:!0,getName:()=>"",muiTheme:{palette:{primary:{main:"#1976d2"},secondary:{main:"#9c27b0"}}}},J={create:{title:"settings.appearance.theme.create.title",button:"global.button.ok",action:"settings.appearance.theme.create.action",success:"settings.appearance.theme.create.success",failure:"settings.appearance.theme.create.failure"},edit:{title:"settings.appearance.theme.edit.title",button:"global.button.save",action:"settings.appearance.theme.edit.action",success:"settings.appearance.theme.edit.success",failure:"settings.appearance.theme.edit.failure"}},Je=({bindDialogProps:e,mode:t,appTheme:n=lr})=>{const{t:i}=K(),{settings:{customThemes:p},request:{loading:m,error:o,refetch:l}}=Ne(),b=Ee(x=>{throw x}),[c,d]=j.useState(n),[h,O]=j.useState(!1),[T,g]=j.useState(!1),[Q,S]=j.useState(!1),[q,re]=j.useState(t==="create");return r.jsxs(Ge,{...e,fullWidth:!0,maxWidth:"md",children:[r.jsx(Ye,{children:i(J[t].title)}),r.jsxs(Ze,{children:[m&&r.jsx(De,{}),o&&r.jsx(_e,{message:i("global.error.label.failed_to_load_data"),messageExtra:o.message,retry:()=>l().catch(Ie())}),!o&&r.jsxs(w,{sx:{gap:2},children:[r.jsx(ee,{children:r.jsxs(pt,{i18nKey:"settings.appearance.theme.create.dialog.info.creating_theme",children:["Create a custom theme with the"," ",r.jsx(Be,{href:"https://zenoo.github.io/mui-theme-creator/",target:"_blank",rel:"noreferrer",children:"MUI Theme Creator"})," ",', copy everything after "themeOptions" from "',"{",'" to "',"}",'" and paste it into the "theme" text field.']})}),r.jsx(ee,{children:i("settings.appearance.theme.create.dialog.info.theme_mode_lock")}),r.jsx(xe,{disabled:t==="edit",label:i("settings.appearance.theme.create.dialog.theme_name"),value:c.getName(),error:h,helperText:h&&i("settings.appearance.theme.create.dialog.error.invalid_name"),onChange:x=>{const C=x.target.value.trim(),y=C.length<=16,v=Xe(C,p);O(!y||!v),d({...c,id:x.target.value,getName:()=>x.target.value})}}),r.jsx(xe,{label:i("settings.appearance.theme.title"),multiline:!0,error:T,helperText:T&&i("settings.appearance.theme.create.dialog.error.invalid_json"),defaultValue:JSON.stringify(c.muiTheme,null,2),onChange:x=>{const C="invalid",y=(()=>{try{return or(x.target.value)}catch(de){return C}})(),v=et(y),k=y===C||!v,W=JSON.stringify(v)!==JSON.stringify(n.muiTheme);re(t==="create"?!0:W),g(k),!k&&JSON.stringify(v)!==JSON.stringify(c.muiTheme)&&d({...c,muiTheme:v})}})]})]}),r.jsxs(tt,{children:[r.jsx(ie,{autoFocus:!0,onClick:e.onClose,color:"primary",children:i("global.button.cancel")}),r.jsx(ie,{disabled:T||h||Q||!q,onClick:x=>{P(i(J[t].action,{theme:c.getName()}),"info"),S(!0),b("customThemes",{...p,[c.id]:c}).then(()=>{P(i(J[t].success,{theme:c.getName()}),"success"),e.onClose(x)}).catch(()=>P(i(J[t].failure,{theme:c.getName()}),"error")).finally(()=>S(!1))},color:"primary",children:i(J[t].button)})]})]})},ur=()=>{const{t:e}=K(),t=Oe({variant:"popover",popupId:"theme-creation-dialog"});return r.jsxs(r.Fragment,{children:[r.jsxs(w,{sx:{alignItems:"center",gap:1},children:[r.jsx(ie,{sx:{minWidth:"150px",height:"225px",m:1,mb:0},variant:"contained",size:"large",...rt(t),children:r.jsx(Re,{})}),r.jsx(ee,{children:e("settings.appearance.theme.create.title")})]}),t.isOpen&&r.jsx(Je,{bindDialogProps:Me(t),mode:"create"})]})},ke=nt(Z)(({theme:e})=>({width:"15px",height:"20px",borderRadius:e.shape.borderRadius})),dr=({theme:e,onDelete:t})=>{const{getName:n}=e,{t:i}=K(),{themeMode:p,setAppTheme:m,appTheme:o,pureBlackMode:l}=j.useContext(Le),b=Oe({variant:"popover",popupId:"theme-edit-dialog-".concat(e.id)}),c=e.id===o,d=j.useMemo(()=>st(p,e,l),[e,p,l]);return r.jsxs(r.Fragment,{children:[r.jsxs(w,{sx:{m:1,justifyContent:"center",alignItems:"center",minWidth:"150px",maxWidth:"150px",gap:1,position:"relative"},children:[r.jsx(at,{theme:d,children:r.jsx(Ct,{sx:{width:"100%",height:"225px",outline:"4px solid",outlineColor:c?d.palette.primary.light:d.palette.background.paper,borderRadius:1,p:0},children:r.jsx(bt,{sx:{height:"100%",backgroundColor:"background.default"},onClick:()=>m(e.id),children:r.jsxs(w,{sx:{height:"100%"},children:[r.jsxs(w,{sx:{height:"100%",gap:2,p:1},children:[r.jsxs(w,{sx:{maxHeight:"20px",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},children:[r.jsx(Z,{sx:{width:"65%",height:"20px",backgroundColor:"primary.dark",borderRadius:1}}),r.jsxs(w,{sx:{height:"100%",alignItems:"center",gap:1},children:[c&&r.jsx(mt,{sx:{visibility:c?"visible":"hidden",color:"primary.light"}}),!c&&e.isCustom&&r.jsx(pe,{onClick:h=>{h.preventDefault(),h.stopPropagation(),t()},component:"div",size:"small",children:r.jsx(me,{title:i("global.button.delete"),children:r.jsx(ft,{})})}),e.isCustom&&r.jsx(pe,{onClick:h=>{h.preventDefault(),h.stopPropagation(),b.open()},component:"div",size:"small",children:r.jsx(me,{title:i("global.button.edit"),children:r.jsx(gt,{})})})]})]}),r.jsxs(w,{sx:{flexDirection:"row",width:"55%",height:"65%",backgroundColor:"background.paper",borderRadius:1,p:1},children:[r.jsx(ke,{sx:{backgroundColor:"primary.main"}}),r.jsx(ke,{sx:{backgroundColor:"secondary.main"}})]})]}),r.jsxs(w,{sx:{height:"80px",backgroundColor:d.palette.background.paper,justifyContent:"center",alignItems:"center",flexDirection:"row",gap:1},children:[r.jsx(Z,{sx:{width:"20px",height:"20px",borderRadius:"50%",backgroundColor:"primary.main"}}),r.jsx(Z,{sx:{flexGrow:.75,height:"20px",borderRadius:1,backgroundColor:"primary.light"}})]})]})})})}),r.jsx(ee,{children:n()})]}),r.jsx(Je,{bindDialogProps:Me(b),mode:"edit",appTheme:e})]})},hr=()=>{const{t:e}=K(),{settings:{customThemes:t},request:{loading:n,error:i,refetch:p}}=Ne(),m=j.useMemo(()=>[...it,...Object.values(t).map(l=>({...l,getName:()=>l.id}))],[t]),o=Ee(l=>{throw l});return n?r.jsx(De,{}):i?r.jsx(_e,{message:e("global.error.label.failed_to_load_data"),messageExtra:i.message,retry:()=>p().catch(Ie())}):r.jsxs(w,{sx:{flexDirection:"row",flexWrap:"no-wrap",overflowX:"auto",gap:1,mx:1},children:[r.jsx(ur,{}),m.map(l=>r.jsx(dr,{theme:l,onDelete:()=>{P(e("settings.appearance.theme.delete.action",{theme:l.getName()}),"info"),o("customThemes",Object.fromEntries(Object.entries(t).filter(([b])=>b!==l.id))).then(()=>P(e("settings.appearance.theme.delete.success",{theme:l.getName()}),"success")).catch(()=>P(e("settings.appearance.theme.delete.failure",{theme:l.getName()}),"error"))}},l.id))]})},Dr=()=>{var T;const{t:e,i18n:t}=K(),{themeMode:n,setThemeMode:i,pureBlackMode:p,setPureBlackMode:m,appTheme:o}=j.useContext(Le),l=((T=ot(o).muiTheme.palette)==null?void 0:T.mode)==="dark"||ct.getThemeMode()===_.DARK,{setTitle:b,setAction:c}=j.useContext(lt);j.useEffect(()=>(b(e("settings.appearance.title")),c(null),()=>{b(""),c(null)}),[e]);const d=300,[h,O]=ut("ItemWidth",d);return r.jsxs(fe,{subheader:r.jsx(ge,{component:"div",id:"appearance-theme",children:e("settings.appearance.theme.title")}),children:[r.jsxs(ne,{children:[r.jsx(se,{primary:e("settings.appearance.theme.device_theme")}),r.jsxs(be,{value:n,onChange:g=>i(g.target.value),children:[r.jsx($,{value:_.SYSTEM,children:"System"},_.SYSTEM),r.jsx($,{value:_.DARK,children:"Dark"},_.DARK),r.jsx($,{value:_.LIGHT,children:"Light"},_.LIGHT)]})]}),r.jsx(hr,{}),l&&r.jsxs(ne,{children:[r.jsx(se,{primary:e("settings.appearance.theme.pure_black_mode")}),r.jsx(xt,{checked:p,onChange:(g,Q)=>m(Q)})]}),r.jsxs(fe,{subheader:r.jsx(ge,{component:"div",id:"appearance-theme",children:e("global.label.display")}),children:[r.jsxs(ne,{children:[r.jsx(se,{primary:e("global.language.label.language"),secondary:r.jsxs(r.Fragment,{children:[r.jsxs("span",{children:[e("settings.label.language_description")," "]}),r.jsx(Be,{href:"https://hosted.weblate.org/projects/suwayomi/suwayomi-webui",target:"_blank",rel:"noreferrer",children:e("global.language.title.weblate")})]})}),r.jsx(be,{value:Ce.includes(t.language)?t.language:"en",onChange:({target:{value:g}})=>t.changeLanguage(g),children:Ce.map(g=>r.jsx($,{value:g,children:ht(g)},g))})]}),r.jsx(dt,{settingTitle:e("settings.label.manga_item_width"),settingValue:"px: ".concat(h),value:h,defaultValue:d,minValue:100,maxValue:1e3,stepSize:10,valueUnit:"px",showSlider:!0,handleUpdate:O})]})]})};export{Dr as Appearance};
