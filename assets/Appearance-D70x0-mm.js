import{c as nt,j as r,u as H,q as he,f as w,an as at,aI as st,aJ as it,k as pe,aG as Pe,l as N,m as ge,d as T,T as we,bL as ot,ap as Re,cY as ct,bt as lt,aL as dt,e as de,n as v,y as me,as as Qe,af as ut,i as ie,bF as $e,ao as ze,a1 as ht,B as Q,cZ as Je,c_ as pt,c$ as gt,C as mt,a as ft,d0 as Ct,d1 as bt,I as Te,O as xt,d2 as jt,N as At,d3 as wt,M as Tt,d4 as L,g as vt,E as St,v as ve,aU as Se,aK as G,az as Y,bT as ke,ax as X,d5 as ye}from"./index-BBxBRE3D.js";import{N as kt}from"./NumberSetting-Bc-eOI-L.js";import{b as yt}from"./Languages-BDSBXnj2.js";import{T as Ne}from"./TextField-jroXO8C8.js";import{C as Nt}from"./CheckCircle-PcXQbJFy.js";import{E as It}from"./Edit-w4aEfjD0.js";import{S as Ie}from"./Switch-B4cO5ksk.js";import"./Info-C37ROMPZ.js";import"./InputAdornment-0PRAydS4.js";const _t=nt(r.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m5 11h-4v4h-2v-4H7v-2h4V7h2v4h4z"}),"AddCircle");class R extends Error{constructor(t,n){super("".concat(t," at position ").concat(n)),this.position=n}}const ee=92,le=47,Dt=42,_e=123,te=125,De=91,re=93,Et=41,Ke=32,fe=10,Ce=9,be=13,Mt=8,Lt=12,ce=34,Ee=43,Me=45,qe=39,He=48,Ze=57,O=44,ne=46,ae=58,Ot=59,Bt=65,Wt=97,Ut=69,Ft=101,Vt=70,Pt=102,Rt=160,Qt=8192,$t=8202,zt=8239,Jt=8287,Kt=12288,qt=8220,Ht=8221,Zt=8216,Gt=8217,Yt=96,Xt=180;function er(e){return e>=He&&e<=Ze||e>=Bt&&e<=Vt||e>=Wt&&e<=Pt}function B(e){return e>=He&&e<=Ze}function tr(e){return e>=32&&e<=1114111}function se(e){return rr.test(e)}const rr=/^[,:[\]/{}()\n+]$/,nr=/^[,[\]/{}\n+]$/,ar=/^[a-zA-Z_$]$/,sr=/^[a-zA-Z_$0-9]$/,Le=/^(http|https|ftp|mailto|file|data|irc):\/\/$/,Oe=/^[A-Za-z0-9-._~:/?#@!$&'()*+;=]$/;function Be(e){return nr.test(e)}function We(e){return ir.test(e)||e&&oe(e.charCodeAt(0))}const ir=/^[[{\w-]$/;function or(e){return e===fe||e===be||e===Ce||e===Mt||e===Lt}function W(e){return e===Ke||e===fe||e===Ce||e===be}function cr(e){return e===Ke||e===Ce||e===be}function lr(e){return e===Rt||e>=Qt&&e<=$t||e===zt||e===Jt||e===Kt}function oe(e){return Ge(e)||ue(e)}function Ge(e){return e===ce||e===qt||e===Ht}function Ue(e){return e===ce}function ue(e){return e===qe||e===Zt||e===Gt||e===Yt||e===Xt}function Fe(e){return e===qe}function K(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;const i=e.lastIndexOf(t);return i!==-1?e.substring(0,i)+(n?"":e.substring(i+1)):e}function A(e,t){let n=e.length;if(!W(e.charCodeAt(n-1)))return e+t;for(;W(e.charCodeAt(n-1));)n--;return e.substring(0,n)+t+e.substring(n)}function dr(e,t,n){return e.substring(0,t)+e.substring(t+n)}function ur(e){return/[,\n][ \t\r]*$/.test(e)}const hr={"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t"},pr={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:"\n",r:"\r",t:"	"};function gr(e){let t=0,n="";m()||et();const C=l(O);for(C&&c(),We(e[t])&&ur(n)?(C||(n=A(n,",")),U()):C&&(n=K(n,","));e.charCodeAt(t)===te||e.charCodeAt(t)===re;)t++,c();if(t>=e.length)return n;Xe();function m(){c();const a=I()||$()||j()||V()||d()||_(!1)||k();return c(),a}function c(){let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;const s=t;let o=u(a);do o=b(),o&&(o=u(a));while(o);return t>s}function u(a){const s=a?W:cr;let o="";for(;;){const D=e.charCodeAt(t);if(s(D))o+=e[t],t++;else if(lr(D))o+=" ",t++;else break}return o.length>0?(n+=o,!0):!1}function b(){if(e.charCodeAt(t)===le&&e.charCodeAt(t+1)===Dt){for(;t<e.length&&!mr(e,t);)t++;return t+=2,!0}if(e.charCodeAt(t)===le&&e.charCodeAt(t+1)===le){for(;t<e.length&&e.charCodeAt(t)!==fe;)t++;return!0}return!1}function l(a){return e.charCodeAt(t)===a?(n+=e[t],t++,!0):!1}function f(a){return e.charCodeAt(t)===a?(t++,!0):!1}function g(){return f(ee)}function S(){return c(),e.charCodeAt(t)===ne&&e.charCodeAt(t+1)===ne&&e.charCodeAt(t+2)===ne?(t+=3,c(),f(O),!0):!1}function I(){if(e.charCodeAt(t)===_e){n+="{",t++,c(),f(O)&&c();let a=!0;for(;t<e.length&&e.charCodeAt(t)!==te;){let s;if(a?(s=!0,a=!1):(s=l(O),s||(n=A(n,",")),c()),S(),!(j()||_(!0))){e.charCodeAt(t)===te||e.charCodeAt(t)===_e||e.charCodeAt(t)===re||e.charCodeAt(t)===De||e[t]===void 0?n=K(n,","):tt();break}c();const D=l(ae),E=t>=e.length;D||(We(e[t])||E?n=A(n,":"):je()),m()||(D||E?n+="null":je())}return e.charCodeAt(t)===te?(n+="}",t++):n=A(n,"}"),!0}return!1}function $(){if(e.charCodeAt(t)===De){n+="[",t++,c(),f(O)&&c();let a=!0;for(;t<e.length&&e.charCodeAt(t)!==re;)if(a?a=!1:l(O)||(n=A(n,",")),S(),!m()){n=K(n,",");break}return e.charCodeAt(t)===re?(n+="]",t++):n=A(n,"]"),!0}return!1}function U(){let a=!0,s=!0;for(;s;)a?a=!1:l(O)||(n=A(n,",")),s=m();s||(n=K(n,",")),n="[\n".concat(n,"\n]")}function j(){let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:-1,o=e.charCodeAt(t)===ee;if(o&&(t++,o=!0),oe(e.charCodeAt(t))){const D=Ue(e.charCodeAt(t))?Ue:Fe(e.charCodeAt(t))?Fe:ue(e.charCodeAt(t))?ue:Ge,E=t,J=n.length;let h='"';for(t++;;){if(t>=e.length){const x=z(t-1);return!a&&se(e.charAt(x))?(t=E,n=n.substring(0,J),j(!0)):(h=A(h,'"'),n+=h,!0)}else{if(t===s)return h=A(h,'"'),n+=h,!0;if(D(e.charCodeAt(t))){const x=t,M=h.length;if(h+='"',t++,n+=h,c(!1),a||t>=e.length||se(e.charAt(t))||oe(e.charCodeAt(t))||B(e.charCodeAt(t)))return F(),!0;const y=z(x-1),Ae=e.charAt(y);if(Ae===",")return t=E,n=n.substring(0,J),j(!1,y);if(se(Ae))return t=E,n=n.substring(0,J),j(!0);n=n.substring(0,J),t=x+1,h="".concat(h.substring(0,M),"\\").concat(h.substring(M))}else if(a&&Be(e[t])){if(e.charCodeAt(t-1)===ae&&Le.test(e.substring(E+1,t+2)))for(;t<e.length&&Oe.test(e[t]);)h+=e[t],t++;return h=A(h,'"'),n+=h,F(),!0}else if(e.charCodeAt(t)===ee){const x=e.charAt(t+1);if(pr[x]!==void 0)h+=e.slice(t,t+2),t+=2;else if(x==="u"){let y=2;for(;y<6&&er(e.charCodeAt(t+y));)y++;y===6?(h+=e.slice(t,t+6),t+=6):t+y>=e.length?t=e.length:rt()}else h+=x,t+=2}else{const x=e.charAt(t),M=e.charCodeAt(t);M===ce&&e.charCodeAt(t-1)!==ee?(h+="\\".concat(x),t++):or(M)?(h+=hr[x],t++):(tr(M)||xe(x),h+=x,t++)}}o&&g()}}return!1}function F(){let a=!1;for(c();e.charCodeAt(t)===Ee;){a=!0,t++,c(),n=K(n,'"',!0);const s=n.length;j()?n=dr(n,s,1):n=A(n,'"')}return a}function V(){const a=t;if(e.charCodeAt(t)===Me){if(t++,P())return Z(a),!0;if(!B(e.charCodeAt(t)))return t=a,!1}for(;B(e.charCodeAt(t));)t++;if(e.charCodeAt(t)===ne){if(t++,P())return Z(a),!0;if(!B(e.charCodeAt(t)))return t=a,!1;for(;B(e.charCodeAt(t));)t++}if(e.charCodeAt(t)===Ft||e.charCodeAt(t)===Ut){if(t++,(e.charCodeAt(t)===Me||e.charCodeAt(t)===Ee)&&t++,P())return Z(a),!0;if(!B(e.charCodeAt(t)))return t=a,!1;for(;B(e.charCodeAt(t));)t++}if(!P())return t=a,!1;if(t>a){const s=e.slice(a,t),o=/^0\d/.test(s);return n+=o?'"'.concat(s,'"'):s,!0}return!1}function d(){return p("true","true")||p("false","false")||p("null","null")||p("True","true")||p("False","false")||p("None","null")}function p(a,s){return e.slice(t,t+a.length)===a?(n+=s,t+=a.length,!0):!1}function _(a){const s=t;if(ar.test(e[t])){for(;t<e.length&&sr.test(e[t]);)t++;let o=t;for(;W(e.charCodeAt(o));)o++;if(e[o]==="(")return t=o+1,m(),e.charCodeAt(t)===Et&&(t++,e.charCodeAt(t)===Ot&&t++),!0}for(;t<e.length&&!Be(e[t])&&!oe(e.charCodeAt(t))&&(!a||e.charCodeAt(t)!==ae);)t++;if(e.charCodeAt(t-1)===ae&&Le.test(e.substring(s,t+2)))for(;t<e.length&&Oe.test(e[t]);)t++;if(t>s){for(;W(e.charCodeAt(t-1))&&t>0;)t--;const o=e.slice(s,t);return n+=o==="undefined"?"null":JSON.stringify(o),e.charCodeAt(t)===ce&&t++,!0}}function k(){if(e[t]==="/"){const a=t;for(t++;t<e.length&&(e[t]!=="/"||e[t-1]==="\\");)t++;return t++,n+='"'.concat(e.substring(a,t),'"'),!0}}function z(a){let s=a;for(;s>0&&W(e.charCodeAt(s));)s--;return s}function P(){return t>=e.length||se(e[t])||W(e.charCodeAt(t))}function Z(a){n+="".concat(e.slice(a,t),"0")}function xe(a){throw new R("Invalid character ".concat(JSON.stringify(a)),t)}function Xe(){throw new R("Unexpected character ".concat(JSON.stringify(e[t])),t)}function et(){throw new R("Unexpected end of json string",e.length)}function tt(){throw new R("Object key expected",t)}function je(){throw new R("Colon expected",t)}function rt(){const a=e.slice(t,t+6);throw new R('Invalid unicode character "'.concat(a,'"'),t)}}function mr(e,t){return e[t]==="*"&&e[t+1]==="/"}const fr={id:"",isCustom:!0,getName:()=>"",muiTheme:{palette:{primary:{main:"#1976d2"},secondary:{main:"#9c27b0"}}}},q={create:{title:"settings.appearance.theme.create.title",button:"global.button.ok",action:"settings.appearance.theme.create.action",success:"settings.appearance.theme.create.success",failure:"settings.appearance.theme.create.failure"},edit:{title:"settings.appearance.theme.edit.title",button:"global.button.save",action:"settings.appearance.theme.edit.action",success:"settings.appearance.theme.edit.success",failure:"settings.appearance.theme.edit.failure"}},Ye=({bindDialogProps:e,mode:t,appTheme:n=fr})=>{const{t:i}=H(),{settings:{customThemes:C},request:{loading:m,error:c,refetch:u}}=he(),b=me(d=>{throw d}),[l,f]=w.useState(n),[g,S]=w.useState(!1),[I,$]=w.useState(!1),[U,j]=w.useState(!1),[F,V]=w.useState(t==="create");return r.jsxs(at,{...e,fullWidth:!0,maxWidth:"md",children:[r.jsx(st,{children:i(q[t].title)}),r.jsxs(it,{children:[m&&r.jsx(pe,{}),c&&r.jsx(Pe,{message:i("global.error.label.failed_to_load_data"),messageExtra:N(c),retry:()=>u().catch(ge())}),!c&&r.jsxs(T,{sx:{gap:2},children:[r.jsx(we,{children:r.jsxs(ot,{i18nKey:"settings.appearance.theme.create.dialog.info.creating_theme",children:["Create a custom theme with the"," ",r.jsx(Re,{href:"https://zenoo.github.io/mui-theme-creator/",target:"_blank",rel:"noreferrer",children:"MUI Theme Creator"})," ",', copy everything after "themeOptions" from "',"{",'" to "',"}",'" and paste it into the "theme" text field.']})}),r.jsx(we,{children:i("settings.appearance.theme.create.dialog.info.theme_mode_lock")}),r.jsx(Ne,{disabled:t==="edit",label:i("settings.appearance.theme.create.dialog.theme_name"),value:l.getName(),error:g,helperText:g&&i("settings.appearance.theme.create.dialog.error.invalid_name"),onChange:d=>{const p=d.target.value.trim(),_=p.length<=16,k=ct(p,C);S(!_||!k),f({...l,id:d.target.value,getName:()=>d.target.value})}}),r.jsx(Ne,{label:i("settings.appearance.theme.title"),multiline:!0,error:I,helperText:I&&i("settings.appearance.theme.create.dialog.error.invalid_json"),defaultValue:JSON.stringify(l.muiTheme,null,2),onChange:d=>{const p="invalid",_=(()=>{try{return gr(d.target.value)}catch(xe){return p}})(),k=lt(_),z=_===p||!k,P=JSON.stringify(k)!==JSON.stringify(n.muiTheme);V(t==="create"?!0:P),$(z),!z&&JSON.stringify(k)!==JSON.stringify(l.muiTheme)&&f({...l,muiTheme:k})}})]})]}),r.jsxs(dt,{children:[r.jsx(de,{autoFocus:!0,onClick:e.onClose,color:"primary",children:i("global.button.cancel")}),r.jsx(de,{disabled:I||g||U||!F||!l.id.length,onClick:d=>{v(i(q[t].action,{theme:l.getName()}),"info"),j(!0),b("customThemes",{...C,[l.id]:l}).then(()=>{v(i(q[t].success,{theme:l.getName()}),"success"),e.onClose(d)}).catch(p=>v(i(q[t].failure,{theme:l.getName()}),"error",N(p))).finally(()=>j(!1))},color:"primary",children:i(q[t].button)})]})]})},Cr=()=>{const{t:e}=H(),t=Qe({variant:"popover",popupId:"theme-creation-dialog"});return r.jsxs(r.Fragment,{children:[r.jsxs(T,{sx:{alignItems:"center",gap:1,minWidth:"150px",maxWidth:"150px"},children:[r.jsx(de,{sx:{width:"100%",height:"225px"},variant:"contained",size:"large",...ut(t),children:r.jsx(_t,{fontSize:"large"})}),r.jsx(ie,{title:e("settings.appearance.theme.create.title"),placement:"top",children:r.jsx($e,{sx:{maxWidth:"100%"},children:e("settings.appearance.theme.create.title")})})]}),t.isOpen&&r.jsx(Ye,{bindDialogProps:ze(t),mode:"create"})]})},Ve=ht(Q)(()=>({width:"15px",height:"20px"})),br=({theme:e,onDelete:t})=>{const{getName:n}=e,{t:i}=H(),{themeMode:C,setAppTheme:m,appTheme:c,pureBlackMode:u}=w.useContext(Je),b=Qe({variant:"popover",popupId:"theme-edit-dialog-".concat(e.id)}),l=e.id===c,f=w.useMemo(()=>pt(C,e,u),[e,C,u]);return r.jsxs(r.Fragment,{children:[r.jsxs(T,{sx:{justifyContent:"center",alignItems:"center",minWidth:"150px",maxWidth:"150px",gap:1},children:[r.jsx(gt,{theme:f,children:r.jsxs(mt,{sx:{width:"100%",height:"225px",position:"relative"},children:[r.jsx(Q,{sx:{position:"absolute",top:0,right:0,bottom:0,left:0,border:"4px solid",borderColor:l?f.palette.primary.light:f.palette.background.paper,zIndex:1,pointerEvents:"none",borderRadius:1}}),r.jsx(ft,{sx:{height:"100%",backgroundColor:"background.default"},onClick:()=>{if(!Ct(e.muiTheme)){m(e.id);return}v(i("settings.appearance.theme.select.fonts.loading"),"info"),bt(e.muiTheme).then(()=>m(e.id)).catch(S=>v(i("settings.appearance.theme.select.fonts.error"),"error",N(S)))},children:r.jsxs(T,{sx:{height:"100%",m:0},children:[r.jsxs(T,{sx:{height:"100%",gap:2,p:2},children:[r.jsxs(T,{sx:{maxHeight:"20px",flexDirection:"row",justifyContent:"space-between",alignItems:"flex-start"},children:[r.jsx(Q,{sx:{width:"65%",height:"20px",backgroundColor:"primary.dark",borderRadius:1}}),r.jsxs(T,{sx:{alignItems:"center",gap:1,mt:-.25},children:[l&&r.jsx(Nt,{sx:{visibility:l?"visible":"hidden",color:"primary.light"}}),!l&&e.isCustom&&r.jsx(Te,{onClick:g=>{g.preventDefault(),g.stopPropagation(),t()},component:"div",size:"small",sx:{mt:-.5},children:r.jsx(ie,{title:i("global.button.delete"),children:r.jsx(xt,{})})}),e.isCustom&&r.jsx(Te,{onClick:g=>{g.preventDefault(),g.stopPropagation(),b.open()},component:"div",size:"small",children:r.jsx(ie,{title:i("global.button.edit"),children:r.jsx(It,{})})})]})]}),r.jsx(Q,{sx:{width:"55%",height:"65%",backgroundColor:"background.paper",p:1,borderRadius:1},children:r.jsxs(T,{sx:{width:"max-content",flexDirection:"row",overflow:"hidden",borderRadius:1},children:[r.jsx(Ve,{sx:{backgroundColor:"primary.main"}}),r.jsx(Ve,{sx:{backgroundColor:"secondary.main"}})]})})]}),r.jsxs(T,{sx:{height:"25%",backgroundColor:f.palette.background.paper,alignItems:"center",flexDirection:"row",gap:2,p:2},children:[r.jsx(Q,{sx:{width:"20px",height:"20px",borderRadius:"50%",backgroundColor:"primary.main"}}),r.jsx(Q,{sx:{flexGrow:1,height:"20px",borderRadius:1,backgroundColor:"primary.light"}})]})]})})]})}),r.jsx(ie,{title:n(),placement:"top",children:r.jsx($e,{sx:{maxWidth:"100%"},children:n()})})]}),r.jsx(Ye,{bindDialogProps:ze(b),mode:"edit",appTheme:e})]})},xr=()=>{const{t:e}=H(),{settings:{customThemes:t},request:{loading:n,error:i,refetch:C}}=he(),m=w.useMemo(()=>[...jt,...Object.values(t).map(u=>({...u,getName:()=>u.id}))],[t]),c=me(u=>{throw u});return n?r.jsx(pe,{}):i?r.jsx(Pe,{message:e("global.error.label.failed_to_load_data"),messageExtra:N(i),retry:()=>C().catch(ge())}):r.jsxs(T,{sx:{flexDirection:"row",flexWrap:"no-wrap",alignItems:"start",overflowX:"auto",gap:1,mx:2},children:[r.jsx(Cr,{}),m.map(u=>r.jsx(br,{theme:u,onDelete:()=>{v(e("settings.appearance.theme.delete.action",{theme:u.getName()}),"info"),c("customThemes",Object.fromEntries(Object.entries(t).filter(([b])=>b!==u.id))).then(()=>v(e("settings.appearance.theme.delete.success",{theme:u.getName()}),"success")).catch(b=>v(e("settings.appearance.theme.delete.failure",{theme:u.getName()}),"error",N(b)))}},u.id))]})},Ir=()=>{var V;const{t:e,i18n:t}=H(),{themeMode:n,setThemeMode:i,pureBlackMode:C,setPureBlackMode:m,appTheme:c}=w.useContext(Je),{setTitle:u,setAction:b}=w.useContext(At);w.useLayoutEffect(()=>(u(e("settings.appearance.title")),b(null),()=>{u(""),b(null)}),[e]);const{settings:l,request:{loading:f,error:g,refetch:S}}=he(),I=me(d=>v(e("global.error.label.failed_to_save_changes"),"error",N(d))),$=((V=wt(c).muiTheme.palette)==null?void 0:V.mode)==="dark"||Tt.getThemeMode()===L.DARK,U=300,[j,F]=vt("ItemWidth",U);return f?r.jsx(pe,{}):g?r.jsx(St,{message:e("global.error.label.failed_to_load_data"),messageExtra:N(g),retry:()=>S().catch(ge())}):r.jsxs(ve,{subheader:r.jsx(Se,{component:"div",id:"appearance-theme",children:e("settings.appearance.theme.title")}),children:[r.jsxs(G,{children:[r.jsx(Y,{primary:e("settings.appearance.theme.mode")}),r.jsxs(ke,{value:n,onChange:d=>i(d.target.value),children:[r.jsx(X,{value:L.SYSTEM,children:"System"},L.SYSTEM),r.jsx(X,{value:L.DARK,children:"Dark"},L.DARK),r.jsx(X,{value:L.LIGHT,children:"Light"},L.LIGHT)]})]}),r.jsx(xr,{}),$&&r.jsxs(G,{children:[r.jsx(Y,{primary:e("settings.appearance.theme.pure_black_mode")}),r.jsx(Ie,{checked:C,onChange:(d,p)=>m(p)})]}),r.jsxs(ve,{subheader:r.jsx(Se,{component:"div",id:"appearance-theme",children:e("global.label.display")}),children:[r.jsxs(G,{children:[r.jsx(Y,{primary:e("global.language.label.language"),secondary:r.jsxs(r.Fragment,{children:[r.jsxs("span",{children:[e("settings.label.language_description")," "]}),r.jsx(Re,{href:"https://hosted.weblate.org/projects/suwayomi/suwayomi-webui",target:"_blank",rel:"noreferrer",children:e("global.language.title.weblate")})]})}),r.jsx(ke,{value:ye.includes(t.language)?t.language:"en",onChange:({target:{value:d}})=>t.changeLanguage(d,p=>{p&&v(e("global.language.error.load"),"error",N(p))}),children:ye.map(d=>r.jsx(X,{value:d,children:yt(d)},d))})]}),r.jsx(kt,{settingTitle:e("settings.label.manga_item_width"),settingValue:"px: ".concat(j),value:j,defaultValue:U,minValue:100,maxValue:1e3,stepSize:10,valueUnit:"px",showSlider:!0,handleUpdate:F}),r.jsxs(G,{children:[r.jsx(Y,{primary:e("settings.appearance.manga_thumbnail_backdrop.title"),secondary:e("settings.appearance.manga_thumbnail_backdrop.description")}),r.jsx(Ie,{edge:"end",checked:l.mangaThumbnailBackdrop,onChange:d=>I("mangaThumbnailBackdrop",d.target.checked)})]})]})]})};export{Ir as Appearance};
