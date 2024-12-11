import{j as e,f as h,aK as F,az as k,$ as E,u as b,aP as L,an as D,aI as O,aJ as B,bi as _,aZ as A,aL as I,e as j,aw as V,bb as G,N,aA as R,c as w,bj as H,l as U,E as W,m as $,v as q,n as z}from"./index-CsKI2UB9.js";import{c as y}from"./cloneObject-DrOPTG0J.js";import{S as J}from"./Switch-BSAm-ui8.js";import{F as K,L as Z}from"./ListPreference-C5ARWJ_W.js";function Q(t){return t==="Switch"?J:E}const X=t=>t.type==="CheckBoxPreference"?{title:t.CheckBoxTitle,defaultValue:t.CheckBoxDefault,currentValue:t.CheckBoxCheckBoxCurrentValue}:{title:t.SwitchPreferenceTitle,defaultValue:t.SwitchPreferenceDefault,currentValue:t.SwitchPreferenceCurrentValue};function M(t){const{title:a,defaultValue:i,currentValue:n,summary:f,updateValue:m,twoStateType:s}={...t,...X(t)},[o,u]=h.useState(n!=null?n:i);h.useEffect(()=>{u(n!=null?n:i)},[n]);const x=h.useMemo(()=>Q(s),[s]);return e.jsxs(F,{children:[e.jsx(k,{primary:a,secondary:f}),e.jsx(x,{edge:"end",checked:o,onChange:()=>{m(s==="Switch"?"switchState":"checkBoxState",!n),u(!n)}})]})}function Y(t){return e.jsx(M,{...t,twoStateType:"Checkbox"})}function v(t){return e.jsx(M,{...t,twoStateType:"Switch"})}function ee(t){const{t:a}=b(),{EditTextPreferenceTitle:i,summary:n,dialogTitle:f,dialogMessage:m,EditTextPreferenceCurrentValue:s,updateValue:o}=t,[u,x]=h.useState(s!=null?s:""),[C,d]=h.useState(!1),c=()=>{d(!1),x(s!=null?s:"")},l=()=>{d(!1),o("editTextState",u)};return e.jsxs(e.Fragment,{children:[e.jsx(L,{onClick:()=>d(!0),children:e.jsx(k,{primary:i,secondary:n})}),e.jsxs(D,{open:C,onClose:c,children:[e.jsx(O,{children:f}),e.jsxs(B,{children:[e.jsx(_,{children:m}),e.jsx(A,{autoFocus:!0,margin:"dense",id:"name",type:"text",fullWidth:!0,value:u,onChange:S=>x(S.target.value)})]}),e.jsxs(I,{children:[e.jsx(j,{onClick:c,color:"primary",children:a("global.button.cancel")}),e.jsx(j,{onClick:l,color:"primary",children:a("global.button.ok")})]})]})]})}function te(t){const{t:a}=b(),{selectedValues:i,open:n,onClose:f,values:m,title:s}=t,[o,u]=V.useState(i);V.useEffect(()=>{n||u(i)},[i,n]);const x=()=>{f(null)},C=()=>{f(o)},d=(c,l)=>{const{checked:S}=c.target,p=o.some(r=>l===r);if(S){if(!p){const r=y(o);r.push(l),u(r)}}else if(p){const r=y(o),g=r.indexOf(l);r.splice(g,1),u(r)}};return e.jsxs(D,{sx:{"& .MuiDialog-paper":{width:"80%",maxHeight:435}},maxWidth:"xs",open:n,onClose:x,children:[e.jsx(O,{children:s}),e.jsx(B,{dividers:!0,children:e.jsx(K,{children:m.map(c=>e.jsx(G,{control:e.jsx(E,{checked:o.some(l=>c===l),onChange:l=>d(l,c)}),label:c},c))})}),e.jsxs(I,{children:[e.jsx(j,{autoFocus:!0,onClick:x,children:a("global.button.cancel")}),e.jsx(j,{onClick:C,children:a("global.button.ok")})]})]})}function ne(t){const{MultiSelectListPreferenceTitle:a,summary:i,MultiSelectListPreferenceCurrentValue:n,MultiSelectListPreferenceDefault:f,updateValue:m,entryValues:s,entries:o}=t,[u,x]=h.useState(n!=null?n:f),[C,d]=h.useState(!1);h.useEffect(()=>{x(n)},[n]);const c=r=>{var g;return(g=r==null?void 0:r.map(P=>{const T=s.indexOf(P);return o[T]}))!=null?g:[]},l=r=>{var g;return(g=r==null?void 0:r.map(P=>{const T=o.indexOf(P);return s[T]}))!=null?g:[]},S=()=>i,p=r=>{r!==null&&(m("multiSelectState",l(r)),x(r)),d(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(L,{onClick:()=>d(!0),children:e.jsx(k,{primary:a,secondary:S()})}),e.jsx(te,{title:a!=null?a:"",open:C,onClose:p,selectedValues:c(u),values:o})]})}function re(t){switch(t){case"CheckBoxPreference":return Y;case"SwitchPreference":return v;case"ListPreference":return Z;case"EditTextPreference":return ee;case"MultiSelectListPreference":return ne;default:throw new Error('Unexpected preference type "'.concat(t,'"'))}}function le(){var C;const{t}=b(),{setTitle:a,setAction:i}=h.useContext(N);h.useLayoutEffect(()=>(a(t("source.configuration.title")),i(null),()=>{a(""),i(null)}),[t]);const{sourceId:n}=R(),{data:f,loading:m,error:s,refetch:o}=w.useGetSource(H,n,{notifyOnNetworkStatusChange:!0}),u=(C=f==null?void 0:f.source.preferences)!=null?C:[],x=d=>(c,l)=>{w.setSourcePreferences(n,{position:d,[c]:l}).response.catch(()=>z(t("global.error.label.failed_to_save_changes"),"error"))};return m?e.jsx(U,{}):s?e.jsx(W,{message:t("global.error.label.failed_to_load_data"),messageExtra:s.message,retry:()=>o().catch($())}):e.jsx(q,{sx:{padding:0},children:u.map((d,c)=>{const l=y(d);return h.createElement(re(d.type),{...l,updateValue:x(c)})})})}export{le as SourceConfigure};
