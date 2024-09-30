import{r as Ge,i as Xe,j as r,u as z,l as ce,c as j,_ as Ye,aJ as Ze,aK as et,g as le,aI as Me,h as de,S as w,T as Ce,cl as tt,be as rt,aL as at,b as ie,m as v,t as ue,a0 as Le,R as nt,f as re,$ as Oe,F as st,B as F,cm as Be,cn as it,bQ as ot,co as ct,cp as lt,I as be,cq as dt,N as ut,cr as ht,M as pt,cs as D,d as mt,E as gt,o as xe,aX as je,aB as H,a7 as G,a5 as X,ct as Ae}from"./index-CKBxMd_h.js";import{S as we}from"./Select-CummqEgG.js";import{N as ft}from"./NumberSetting-Cyy9C5Bb.js";import{b as Ct}from"./language-Dd9fpF5a.js";import{T as bt}from"./Trans-B4eUaj2p.js";import{L as We}from"./Link-Md8SMvlM.js";import{T as Te}from"./TextField-DKEWl0kG.js";import{T as Re}from"./TypographyMaxLines-CUvaPvl8.js";import{d as xt}from"./CheckCircle-C3BmOyh0.js";import{d as jt}from"./Delete-CgmxhIrM.js";import{d as At}from"./Edit-8-GRzlcI.js";import{C as wt}from"./Card-Cr9utwej.js";import{C as Tt}from"./CardActionArea-BHBGCn9v.js";import{S as ve}from"./Switch-QjdxAlZw.js";import"./Info-2xKqwcLI.js";import"./InputAdornment-0ZrWWhgd.js";import"./SwitchBase-CSUbfhgD.js";var he={},vt=Xe;Object.defineProperty(he,"__esModule",{value:!0});var Fe=he.default=void 0,St=vt(Ge()),yt=r;Fe=he.default=(0,St.default)((0,yt.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m5 11h-4v4h-2v-4H7v-2h4V7h2v4h4z"}),"AddCircle");class R extends Error{constructor(t,a){super(t+" at position "+a),this.position=a}}const Y=92,se=47,kt=42,Se=123,Z=125,ye=91,ee=93,_t=40,Nt=41,Dt=32,pe=10,Pe=9,Ve=13,It=8,Et=12,ne=34,ke=43,_e=45,Qe=39,Ue=48,Je=57,I=44,te=46,Mt=58,Lt=59,Ot=65,Bt=97,Wt=69,Rt=101,Ft=70,Pt=102,Vt=160,Qt=8192,Ut=8202,Jt=8239,Kt=8287,qt=12288,$t=8220,zt=8221,Ht=8216,Gt=8217,Xt=96,Yt=180;function Zt(e){return e>=Ue&&e<=Je||e>=Ot&&e<=Ft||e>=Bt&&e<=Pt}function E(e){return e>=Ue&&e<=Je}function er(e){return e>=32&&e<=1114111}function P(e){return tr.test(e)}const tr=/^[,:[\]/{}()\n+]$/;function rr(e){return P(e)&&e!=="/"}function Ne(e){return ar.test(e)||e&&ae(e.charCodeAt(0))}const ar=/^[[{\w-]$/;function nr(e){return e===pe||e===Ve||e===Pe||e===It||e===Et}function V(e){return e===Dt||e===pe||e===Pe||e===Ve}function sr(e){return e===Vt||e>=Qt&&e<=Ut||e===Jt||e===Kt||e===qt}function ae(e){return Ke(e)||oe(e)}function Ke(e){return e===ne||e===$t||e===zt}function De(e){return e===ne}function oe(e){return e===Qe||e===Ht||e===Gt||e===Xt||e===Yt}function Ie(e){return e===Qe}function q(e,t){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;const i=e.lastIndexOf(t);return i!==-1?e.substring(0,i)+(a?"":e.substring(i+1)):e}function A(e,t){let a=e.length;if(!V(e.charCodeAt(a-1)))return e+t;for(;V(e.charCodeAt(a-1));)a--;return e.substring(0,a)+t+e.substring(a)}function ir(e,t,a){return e.substring(0,t)+e.substring(t+a)}function or(e){return/[,\n][ \t\r]*$/.test(e)}function cr(e){return/^\w+$/.test(e)}const lr={"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t"},dr={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:"\n",r:"\r",t:"	"};function ur(e){let t=0,a="";p()||$e();const f=c(I);for(f&&o(),Ne(e[t])&&or(a)?(f||(a=A(a,",")),L()):f&&(a=q(a,","));e.charCodeAt(t)===Z||e.charCodeAt(t)===ee;)t++,o();if(t>=e.length)return a;ge();function p(){o();const n=S()||Q()||x()||B()||d()||y();return o(),n}function o(){const n=t;let s=l();do s=b(),s&&(s=l());while(s);return t>n}function l(){let n="",s;for(;(s=V(e.charCodeAt(t)))||sr(e.charCodeAt(t));)s?n+=e[t]:n+=" ",t++;return n.length>0?(a+=n,!0):!1}function b(){if(e.charCodeAt(t)===se&&e.charCodeAt(t+1)===kt){for(;t<e.length&&!hr(e,t);)t++;return t+=2,!0}if(e.charCodeAt(t)===se&&e.charCodeAt(t+1)===se){for(;t<e.length&&e.charCodeAt(t)!==pe;)t++;return!0}return!1}function c(n){return e.charCodeAt(t)===n?(a+=e[t],t++,!0):!1}function m(n){return e.charCodeAt(t)===n?(t++,!0):!1}function h(){return m(Y)}function M(){return o(),e.charCodeAt(t)===te&&e.charCodeAt(t+1)===te&&e.charCodeAt(t+2)===te?(t+=3,o(),m(I),!0):!1}function S(){if(e.charCodeAt(t)===Se){a+="{",t++,o(),m(I)&&o();let n=!0;for(;t<e.length&&e.charCodeAt(t)!==Z;){let s;if(n?(s=!0,n=!1):(s=c(I),s||(a=A(a,",")),o()),M(),!(x()||y())){e.charCodeAt(t)===Z||e.charCodeAt(t)===Se||e.charCodeAt(t)===ee||e.charCodeAt(t)===ye||e[t]===void 0?a=q(a,","):ze();break}o();const J=c(Mt),W=t>=e.length;J||(Ne(e[t])||W?a=A(a,":"):fe()),p()||(J||W?a+="null":fe())}return e.charCodeAt(t)===Z?(a+="}",t++):a=A(a,"}"),!0}return!1}function Q(){if(e.charCodeAt(t)===ye){a+="[",t++,o(),m(I)&&o();let n=!0;for(;t<e.length&&e.charCodeAt(t)!==ee;)if(n?n=!1:c(I)||(a=A(a,",")),M(),!p()){a=q(a,",");break}return e.charCodeAt(t)===ee?(a+="]",t++):a=A(a,"]"),!0}return!1}function L(){let n=!0,s=!0;for(;s;)n?n=!1:c(I)||(a=A(a,",")),s=p();s||(a=q(a,",")),a="[\n".concat(a,"\n]")}function x(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,s=e.charCodeAt(t)===Y;if(s&&(t++,s=!0),ae(e.charCodeAt(t))){const _=De(e.charCodeAt(t))?De:Ie(e.charCodeAt(t))?Ie:oe(e.charCodeAt(t))?oe:Ke,J=t,W=a.length;let u='"';for(t++;;){if(t>=e.length){const C=T(t-1);return!n&&P(e.charAt(C))?(t=J,a=a.substring(0,W),x(!0)):(u=A(u,'"'),a+=u,!0)}else if(_(e.charCodeAt(t))){const C=t,N=u.length;if(u+='"',t++,a+=u,o(),n||t>=e.length||P(e.charAt(t))||ae(e.charCodeAt(t))||E(e.charCodeAt(t)))return O(),!0;if(P(e.charAt(T(C-1))))return t=J,a=a.substring(0,W),x(!0);a=a.substring(0,W),t=C+1,u=u.substring(0,N)+"\\"+u.substring(N)}else{if(n&&P(e[t]))return u=A(u,'"'),a+=u,O(),!0;if(e.charCodeAt(t)===Y){const C=e.charAt(t+1);if(dr[C]!==void 0)u+=e.slice(t,t+2),t+=2;else if(C==="u"){let K=2;for(;K<6&&Zt(e.charCodeAt(t+K));)K++;K===6?(u+=e.slice(t,t+6),t+=6):t+K>=e.length?t=e.length:He()}else u+=C,t+=2}else{const C=e.charAt(t),N=e.charCodeAt(t);N===ne&&e.charCodeAt(t-1)!==Y?(u+="\\"+C,t++):nr(N)?(u+=lr[C],t++):(er(N)||me(C),u+=C,t++)}}s&&h()}}return!1}function O(){let n=!1;for(o();e.charCodeAt(t)===ke;){n=!0,t++,o(),a=q(a,'"',!0);const s=a.length;x()?a=ir(a,s,1):a=A(a,'"')}return n}function B(){const n=t;if(e.charCodeAt(t)===_e){if(t++,k())return U(n),!0;if(!E(e.charCodeAt(t)))return t=n,!1}for(;E(e.charCodeAt(t));)t++;if(e.charCodeAt(t)===te){if(t++,k())return U(n),!0;if(!E(e.charCodeAt(t)))return t=n,!1;for(;E(e.charCodeAt(t));)t++}if(e.charCodeAt(t)===Rt||e.charCodeAt(t)===Wt){if(t++,(e.charCodeAt(t)===_e||e.charCodeAt(t)===ke)&&t++,k())return U(n),!0;if(!E(e.charCodeAt(t)))return t=n,!1;for(;E(e.charCodeAt(t));)t++}if(!k())return t=n,!1;if(t>n){const s=e.slice(n,t),_=/^0\d/.test(s);return a+=_?'"'.concat(s,'"'):s,!0}return!1}function d(){return g("true","true")||g("false","false")||g("null","null")||g("True","true")||g("False","false")||g("None","null")}function g(n,s){return e.slice(t,t+n.length)===n?(a+=s,t+=n.length,!0):!1}function y(){const n=t;for(;t<e.length&&!rr(e[t])&&!ae(e.charCodeAt(t));)t++;if(t>n){if(e.charCodeAt(t)===_t&&cr(e.slice(n,t).trim()))return t++,p(),e.charCodeAt(t)===Nt&&(t++,e.charCodeAt(t)===Lt&&t++),!0;{for(;V(e.charCodeAt(t-1))&&t>0;)t--;const s=e.slice(n,t);return a+=s==="undefined"?"null":JSON.stringify(s),e.charCodeAt(t)===ne&&t++,!0}}}function T(n){let s=n;for(;s>0&&V(e.charCodeAt(s));)s--;return s}function k(){return t>=e.length||P(e[t])||V(e.charCodeAt(t))}function U(n){a+=e.slice(n,t)+"0"}function me(n){throw new R("Invalid character "+JSON.stringify(n),t)}function ge(){throw new R("Unexpected character "+JSON.stringify(e[t]),t)}function $e(){throw new R("Unexpected end of json string",e.length)}function ze(){throw new R("Object key expected",t)}function fe(){throw new R("Colon expected",t)}function He(){const n=e.slice(t,t+6);throw new R('Invalid unicode character "'.concat(n,'"'),t)}}function hr(e,t){return e[t]==="*"&&e[t+1]==="/"}const pr={id:"",isCustom:!0,getName:()=>"",muiTheme:{palette:{primary:{main:"#1976d2"},secondary:{main:"#9c27b0"}}}},$={create:{title:"settings.appearance.theme.create.title",button:"global.button.ok",action:"settings.appearance.theme.create.action",success:"settings.appearance.theme.create.success",failure:"settings.appearance.theme.create.failure"},edit:{title:"settings.appearance.theme.edit.title",button:"global.button.save",action:"settings.appearance.theme.edit.action",success:"settings.appearance.theme.edit.success",failure:"settings.appearance.theme.edit.failure"}},qe=({bindDialogProps:e,mode:t,appTheme:a=pr})=>{const{t:i}=z(),{settings:{customThemes:f},request:{loading:p,error:o,refetch:l}}=ce(),b=ue(d=>{throw d}),[c,m]=j.useState(a),[h,M]=j.useState(!1),[S,Q]=j.useState(!1),[L,x]=j.useState(!1),[O,B]=j.useState(t==="create");return r.jsxs(Ye,{...e,fullWidth:!0,maxWidth:"md",children:[r.jsx(Ze,{children:i($[t].title)}),r.jsxs(et,{children:[p&&r.jsx(le,{}),o&&r.jsx(Me,{message:i("global.error.label.failed_to_load_data"),messageExtra:o.message,retry:()=>l().catch(de())}),!o&&r.jsxs(w,{sx:{gap:2},children:[r.jsx(Ce,{children:r.jsxs(bt,{i18nKey:"settings.appearance.theme.create.dialog.info.creating_theme",children:["Create a custom theme with the"," ",r.jsx(We,{href:"https://zenoo.github.io/mui-theme-creator/",target:"_blank",rel:"noreferrer",children:"MUI Theme Creator"})," ",', copy everything after "themeOptions" from "',"{",'" to "',"}",'" and paste it into the "theme" text field.']})}),r.jsx(Ce,{children:i("settings.appearance.theme.create.dialog.info.theme_mode_lock")}),r.jsx(Te,{disabled:t==="edit",label:i("settings.appearance.theme.create.dialog.theme_name"),value:c.getName(),error:h,helperText:h&&i("settings.appearance.theme.create.dialog.error.invalid_name"),onChange:d=>{const g=d.target.value.trim(),y=g.length<=16,T=tt(g,f);M(!y||!T),m({...c,id:d.target.value,getName:()=>d.target.value})}}),r.jsx(Te,{label:i("settings.appearance.theme.title"),multiline:!0,error:S,helperText:S&&i("settings.appearance.theme.create.dialog.error.invalid_json"),defaultValue:JSON.stringify(c.muiTheme,null,2),onChange:d=>{const g="invalid",y=(()=>{try{return ur(d.target.value)}catch(ge){return g}})(),T=rt(y),k=y===g||!T,U=JSON.stringify(T)!==JSON.stringify(a.muiTheme);B(t==="create"?!0:U),Q(k),!k&&JSON.stringify(T)!==JSON.stringify(c.muiTheme)&&m({...c,muiTheme:T})}})]})]}),r.jsxs(at,{children:[r.jsx(ie,{autoFocus:!0,onClick:e.onClose,color:"primary",children:i("global.button.cancel")}),r.jsx(ie,{disabled:S||h||L||!O||!c.id.length,onClick:d=>{v(i($[t].action,{theme:c.getName()}),"info"),x(!0),b("customThemes",{...f,[c.id]:c}).then(()=>{v(i($[t].success,{theme:c.getName()}),"success"),e.onClose(d)}).catch(()=>v(i($[t].failure,{theme:c.getName()}),"error")).finally(()=>x(!1))},color:"primary",children:i($[t].button)})]})]})},mr=()=>{const{t:e}=z(),t=Le({variant:"popover",popupId:"theme-creation-dialog"});return r.jsxs(r.Fragment,{children:[r.jsxs(w,{sx:{alignItems:"center",gap:1,minWidth:"150px",maxWidth:"150px"},children:[r.jsx(ie,{sx:{width:"100%",height:"225px"},variant:"contained",size:"large",...nt(t),children:r.jsx(Fe,{fontSize:"large"})}),r.jsx(re,{title:e("settings.appearance.theme.create.title"),placement:"top",children:r.jsx(Re,{sx:{maxWidth:"100%"},children:e("settings.appearance.theme.create.title")})})]}),t.isOpen&&r.jsx(qe,{bindDialogProps:Oe(t),mode:"create"})]})},Ee=st(F)(()=>({width:"15px",height:"20px"})),gr=({theme:e,onDelete:t})=>{const{getName:a}=e,{t:i}=z(),{themeMode:f,setAppTheme:p,appTheme:o,pureBlackMode:l}=j.useContext(Be),b=Le({variant:"popover",popupId:"theme-edit-dialog-".concat(e.id)}),c=e.id===o,m=j.useMemo(()=>it(f,e,l),[e,f,l]);return r.jsxs(r.Fragment,{children:[r.jsxs(w,{sx:{justifyContent:"center",alignItems:"center",minWidth:"150px",maxWidth:"150px",gap:1},children:[r.jsx(ot,{theme:m,children:r.jsxs(wt,{sx:{width:"100%",height:"225px",position:"relative"},children:[r.jsx(F,{sx:{position:"absolute",top:0,right:0,bottom:0,left:0,border:"4px solid",borderColor:c?m.palette.primary.light:m.palette.background.paper,zIndex:1,pointerEvents:"none",borderRadius:1}}),r.jsx(Tt,{sx:{height:"100%",backgroundColor:"background.default"},onClick:()=>{if(!ct(e.muiTheme)){p(e.id);return}v(i("settings.appearance.theme.select.fonts.loading"),"info"),lt(e.muiTheme).then(()=>p(e.id)).catch(()=>v(i("settings.appearance.theme.select.fonts.error"),"error"))},children:r.jsxs(w,{sx:{height:"100%",m:0},children:[r.jsxs(w,{sx:{height:"100%",gap:2,p:2},children:[r.jsxs(w,{sx:{maxHeight:"20px",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},children:[r.jsx(F,{sx:{width:"65%",height:"20px",backgroundColor:"primary.dark",borderRadius:1}}),r.jsxs(w,{sx:{height:"100%",alignItems:"center",gap:1},children:[c&&r.jsx(xt,{sx:{visibility:c?"visible":"hidden",color:"primary.light"}}),!c&&e.isCustom&&r.jsx(be,{onClick:h=>{h.preventDefault(),h.stopPropagation(),t()},component:"div",size:"small",children:r.jsx(re,{title:i("global.button.delete"),children:r.jsx(jt,{})})}),e.isCustom&&r.jsx(be,{onClick:h=>{h.preventDefault(),h.stopPropagation(),b.open()},component:"div",size:"small",children:r.jsx(re,{title:i("global.button.edit"),children:r.jsx(At,{})})})]})]}),r.jsx(F,{sx:{width:"55%",height:"65%",backgroundColor:"background.paper",p:1,borderRadius:1},children:r.jsxs(w,{sx:{width:"max-content",flexDirection:"row",overflow:"hidden",borderRadius:1},children:[r.jsx(Ee,{sx:{backgroundColor:"primary.main"}}),r.jsx(Ee,{sx:{backgroundColor:"secondary.main"}})]})})]}),r.jsxs(w,{sx:{height:"25%",backgroundColor:m.palette.background.paper,alignItems:"center",flexDirection:"row",gap:2,p:2},children:[r.jsx(F,{sx:{width:"20px",height:"20px",borderRadius:"50%",backgroundColor:"primary.main"}}),r.jsx(F,{sx:{flexGrow:1,height:"20px",borderRadius:1,backgroundColor:"primary.light"}})]})]})})]})}),r.jsx(re,{title:a(),placement:"top",children:r.jsx(Re,{sx:{maxWidth:"100%"},children:a()})})]}),r.jsx(qe,{bindDialogProps:Oe(b),mode:"edit",appTheme:e})]})},fr=()=>{const{t:e}=z(),{settings:{customThemes:t},request:{loading:a,error:i,refetch:f}}=ce(),p=j.useMemo(()=>[...dt,...Object.values(t).map(l=>({...l,getName:()=>l.id}))],[t]),o=ue(l=>{throw l});return a?r.jsx(le,{}):i?r.jsx(Me,{message:e("global.error.label.failed_to_load_data"),messageExtra:i.message,retry:()=>f().catch(de())}):r.jsxs(w,{sx:{flexDirection:"row",flexWrap:"no-wrap",alignItems:"start",overflowX:"auto",gap:1,mx:2},children:[r.jsx(mr,{}),p.map(l=>r.jsx(gr,{theme:l,onDelete:()=>{v(e("settings.appearance.theme.delete.action",{theme:l.getName()}),"info"),o("customThemes",Object.fromEntries(Object.entries(t).filter(([b])=>b!==l.id))).then(()=>v(e("settings.appearance.theme.delete.success",{theme:l.getName()}),"success")).catch(()=>v(e("settings.appearance.theme.delete.failure",{theme:l.getName()}),"error"))}},l.id))]})},Lr=()=>{var B;const{t:e,i18n:t}=z(),{themeMode:a,setThemeMode:i,pureBlackMode:f,setPureBlackMode:p,appTheme:o}=j.useContext(Be),{setTitle:l,setAction:b}=j.useContext(ut);j.useLayoutEffect(()=>(l(e("settings.appearance.title")),b(null),()=>{l(""),b(null)}),[e]);const{settings:c,request:{loading:m,error:h,refetch:M}}=ce(),S=ue(()=>v(e("global.error.label.failed_to_save_changes"),"error")),Q=((B=ht(o).muiTheme.palette)==null?void 0:B.mode)==="dark"||pt.getThemeMode()===D.DARK,L=300,[x,O]=mt("ItemWidth",L);return m?r.jsx(le,{}):h?r.jsx(gt,{message:e("global.error.label.failed_to_load_data"),messageExtra:h.message,retry:()=>M().catch(de())}):r.jsxs(xe,{subheader:r.jsx(je,{component:"div",id:"appearance-theme",children:e("settings.appearance.theme.title")}),children:[r.jsxs(H,{children:[r.jsx(G,{primary:e("settings.appearance.theme.device_theme")}),r.jsxs(we,{value:a,onChange:d=>i(d.target.value),children:[r.jsx(X,{value:D.SYSTEM,children:"System"},D.SYSTEM),r.jsx(X,{value:D.DARK,children:"Dark"},D.DARK),r.jsx(X,{value:D.LIGHT,children:"Light"},D.LIGHT)]})]}),r.jsx(fr,{}),Q&&r.jsxs(H,{children:[r.jsx(G,{primary:e("settings.appearance.theme.pure_black_mode")}),r.jsx(ve,{checked:f,onChange:(d,g)=>p(g)})]}),r.jsxs(xe,{subheader:r.jsx(je,{component:"div",id:"appearance-theme",children:e("global.label.display")}),children:[r.jsxs(H,{children:[r.jsx(G,{primary:e("global.language.label.language"),secondary:r.jsxs(r.Fragment,{children:[r.jsxs("span",{children:[e("settings.label.language_description")," "]}),r.jsx(We,{href:"https://hosted.weblate.org/projects/suwayomi/suwayomi-webui",target:"_blank",rel:"noreferrer",children:e("global.language.title.weblate")})]})}),r.jsx(we,{value:Ae.includes(t.language)?t.language:"en",onChange:({target:{value:d}})=>t.changeLanguage(d),children:Ae.map(d=>r.jsx(X,{value:d,children:Ct(d)},d))})]}),r.jsx(ft,{settingTitle:e("settings.label.manga_item_width"),settingValue:"px: ".concat(x),value:x,defaultValue:L,minValue:100,maxValue:1e3,stepSize:10,valueUnit:"px",showSlider:!0,handleUpdate:O}),r.jsxs(H,{children:[r.jsx(G,{primary:e("settings.appearance.manga_thumbnail_backdrop.title"),secondary:e("settings.appearance.manga_thumbnail_backdrop.description")}),r.jsx(ve,{edge:"end",checked:c.mangaThumbnailBackdrop,onChange:d=>S("mangaThumbnailBackdrop",d.target.checked)})]})]})]})};export{Lr as Appearance};
