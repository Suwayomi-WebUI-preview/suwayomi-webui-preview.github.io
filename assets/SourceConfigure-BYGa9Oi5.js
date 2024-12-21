import{j as e,f as h,aL as _,aA as k,a0 as L,u as E,aQ as D,ao as O,aJ as B,aK as M,bg as A,aM as F,e as j,ax as V,b9 as G,N,aB as R,c as b,bh as H,l as U,E as W,m as w,n as q,w as J,o as K}from"./index-DU51TenU.js";import{c as y}from"./cloneObject-DrOPTG0J.js";import{S as Q}from"./Switch-SfFozTJY.js";import{F as $,L as z}from"./ListPreference-lmqny-zy.js";import{T as X}from"./TextField-DeB6wrZP.js";function Y(t){return t==="Switch"?Q:L}const Z=t=>t.type==="CheckBoxPreference"?{title:t.CheckBoxTitle,defaultValue:t.CheckBoxDefault,currentValue:t.CheckBoxCheckBoxCurrentValue}:{title:t.SwitchPreferenceTitle,defaultValue:t.SwitchPreferenceDefault,currentValue:t.SwitchPreferenceCurrentValue};function I(t){const{title:a,defaultValue:i,currentValue:n,summary:f,updateValue:m,twoStateType:s}={...t,...Z(t)},[o,u]=h.useState(n!=null?n:i);h.useEffect(()=>{u(n!=null?n:i)},[n]);const x=h.useMemo(()=>Y(s),[s]);return e.jsxs(_,{children:[e.jsx(k,{primary:a,secondary:f}),e.jsx(x,{edge:"end",checked:o,onChange:()=>{m(s==="Switch"?"switchState":"checkBoxState",!n),u(!n)}})]})}function v(t){return e.jsx(I,{...t,twoStateType:"Checkbox"})}function ee(t){return e.jsx(I,{...t,twoStateType:"Switch"})}function te(t){const{t:a}=E(),{EditTextPreferenceTitle:i,summary:n,dialogTitle:f,dialogMessage:m,EditTextPreferenceCurrentValue:s,updateValue:o}=t,[u,x]=h.useState(s!=null?s:""),[g,d]=h.useState(!1),c=()=>{d(!1),x(s!=null?s:"")},l=()=>{d(!1),o("editTextState",u)};return e.jsxs(e.Fragment,{children:[e.jsx(D,{onClick:()=>d(!0),children:e.jsx(k,{primary:i,secondary:n})}),e.jsxs(O,{open:g,onClose:c,children:[e.jsx(B,{children:f}),e.jsxs(M,{children:[e.jsx(A,{children:m}),e.jsx(X,{autoFocus:!0,margin:"dense",id:"name",type:"text",fullWidth:!0,value:u,onChange:C=>x(C.target.value)})]}),e.jsxs(F,{children:[e.jsx(j,{onClick:c,color:"primary",children:a("global.button.cancel")}),e.jsx(j,{onClick:l,color:"primary",children:a("global.button.ok")})]})]})]})}function ne(t){const{t:a}=E(),{selectedValues:i,open:n,onClose:f,values:m,title:s}=t,[o,u]=V.useState(i);V.useEffect(()=>{n||u(i)},[i,n]);const x=()=>{f(null)},g=()=>{f(o)},d=(c,l)=>{const{checked:C}=c.target,p=o.some(r=>l===r);if(C){if(!p){const r=y(o);r.push(l),u(r)}}else if(p){const r=y(o),S=r.indexOf(l);r.splice(S,1),u(r)}};return e.jsxs(O,{sx:{"& .MuiDialog-paper":{width:"80%",maxHeight:435}},maxWidth:"xs",open:n,onClose:x,children:[e.jsx(B,{children:s}),e.jsx(M,{dividers:!0,children:e.jsx($,{children:m.map(c=>e.jsx(G,{control:e.jsx(L,{checked:o.some(l=>c===l),onChange:l=>d(l,c)}),label:c},c))})}),e.jsxs(F,{children:[e.jsx(j,{autoFocus:!0,onClick:x,children:a("global.button.cancel")}),e.jsx(j,{onClick:g,children:a("global.button.ok")})]})]})}function re(t){const{MultiSelectListPreferenceTitle:a,summary:i,MultiSelectListPreferenceCurrentValue:n,MultiSelectListPreferenceDefault:f,updateValue:m,entryValues:s,entries:o}=t,[u,x]=h.useState(n!=null?n:f),[g,d]=h.useState(!1);h.useEffect(()=>{x(n)},[n]);const c=r=>{var S;return(S=r==null?void 0:r.map(T=>{const P=s.indexOf(T);return o[P]}))!=null?S:[]},l=r=>{var S;return(S=r==null?void 0:r.map(T=>{const P=o.indexOf(T);return s[P]}))!=null?S:[]},C=()=>i,p=r=>{r!==null&&(m("multiSelectState",l(r)),x(r)),d(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(D,{onClick:()=>d(!0),children:e.jsx(k,{primary:a,secondary:C()})}),e.jsx(ne,{title:a!=null?a:"",open:g,onClose:p,selectedValues:c(u),values:o})]})}function se(t){switch(t){case"CheckBoxPreference":return v;case"SwitchPreference":return ee;case"ListPreference":return z;case"EditTextPreference":return te;case"MultiSelectListPreference":return re;default:throw new Error('Unexpected preference type "'.concat(t,'"'))}}function ue(){var g;const{t}=E(),{setTitle:a,setAction:i}=h.useContext(N);h.useLayoutEffect(()=>(a(t("source.configuration.title")),i(null),()=>{a(""),i(null)}),[t]);const{sourceId:n}=R(),{data:f,loading:m,error:s,refetch:o}=b.useGetSource(H,n,{notifyOnNetworkStatusChange:!0}),u=(g=f==null?void 0:f.source.preferences)!=null?g:[],x=d=>(c,l)=>{b.setSourcePreferences(n,{position:d,[c]:l}).response.catch(C=>K(t("global.error.label.failed_to_save_changes"),"error",w(C)))};return m?e.jsx(U,{}):s?e.jsx(W,{message:t("global.error.label.failed_to_load_data"),messageExtra:w(s),retry:()=>o().catch(q())}):e.jsx(J,{sx:{padding:0},children:u.map((d,c)=>{const l=y(d);return h.createElement(se(d.type),{...l,updateValue:x(c)})})})}export{ue as SourceConfigure};
