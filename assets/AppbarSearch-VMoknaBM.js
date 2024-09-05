import{bg as R,c as p,bh as T,r as q,i as F,j as k,u as I,ar as A,Y as z,f as G,I as $}from"./index-dhITQ7sJ.js";import{S as W}from"./useManageMangaLibraryState-C5m9Bl5O.js";function L(e,t){if(e==null)return e;if(e.length===0&&(!t||t&&e!==""))return null;const r=e instanceof Array?e[0]:e;return r==null?r:!t&&r===""?null:r}function Y(e){return e==null?e:String(e)}function B(e){const t=L(e);return t==null?t:t===""?null:+t}function H(e){return e==null?e:String(e)}function J(e){const t=L(e,!0);return t==null?t:String(t)}const M={encode:H,decode:J},ke={encode:Y,decode:B};function X(e,t){const r={},n=Object.keys(t);for(const s of n){const a=t[s];e[s]?r[s]=e[s].encode(t[s]):r[s]=a==null?a:String(a)}return r}class Z{constructor(){this.paramsMap=new Map,this.registeredParams=new Map}set(t,r,n,s){this.paramsMap.set(t,{stringified:r,decoded:n,decode:s})}has(t,r,n){if(!this.paramsMap.has(t))return!1;const s=this.paramsMap.get(t);return s?s.stringified===r&&(n==null||s.decode===n):!1}get(t){var r;if(this.paramsMap.has(t))return(r=this.paramsMap.get(t))==null?void 0:r.decoded}registerParams(t){for(const r of t){const n=this.registeredParams.get(r)||0;this.registeredParams.set(r,n+1)}}unregisterParams(t){for(const r of t){const n=(this.registeredParams.get(r)||0)-1;n<=0?(this.registeredParams.delete(r),this.paramsMap.has(r)&&this.paramsMap.delete(r)):this.registeredParams.set(r,n)}}clear(){this.paramsMap.clear(),this.registeredParams.clear()}}const O=new Z;function ee(e,t){var r,n,s;const a={};let o=!1;const c=Object.keys(e);let i=c;if(t.includeKnownParams||t.includeKnownParams!==!1&&c.length===0){const f=Object.keys((r=t.params)!=null?r:{});i.push(...f)}for(const f of i){const u=e[f];if(u!=null&&typeof u=="object"){a[f]=u;continue}o=!0,a[f]=(s=(n=t.params)==null?void 0:n[f])!=null?s:M}return o?a:e}function Q(e,t,r,n){var s;if(!r||!t.length)return e;let a={...e},o=!1;for(const c of t)Object.prototype.hasOwnProperty.call(a,c)||(a[c]=(s=r[c])!=null?s:n,o=!0);return o?a:e}const te=Object.prototype.hasOwnProperty;function _(e,t){return e===t?e!==0||t!==0||1/e===1/t:e!==e&&t!==t}function C(e,t,r){var n,s;if(_(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;const a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(let c=0;c<a.length;c++){const i=(s=(n=void 0)==null?void 0:n.equals)!=null?s:_;if(!te.call(t,a[c])||!i(e[a[c]],t[a[c]]))return!1}return!0}function x(e,t,r){const n={},s=Object.keys(t);for(const a of s){const o=t[a],c=e[a];let i;if(r.has(a,c,o.decode))i=r.get(a);else{if(i=o.decode(c),o.equals&&r.has(a,c)){const l=r.get(a);o.equals(i,l)&&(i=l)}i!==void 0&&r.set(a,c,i,o.decode)}i===void 0&&o.default!==void 0&&(i=o.default),n[a]=i}return n}function re(){let e;function t(r,n,s){const a=x(r,n,s);return e!=null&&C(e,a)?e:(e=a,a)}return t}function ne(e){let t;for(const r in e)if(e[r].urlName){const n=e[r].urlName,s="".concat(n,"\0").concat(r);t?t.push(s):t=[s]}return t?t.join("\n"):void 0}function ae(e){if(e)return Object.fromEntries(e.split("\n").map(t=>t.split("\0")))}function se(e,t){var r;let n={};for(const s in e)((r=t[s])==null?void 0:r.urlName)!=null?n[t[s].urlName]=e[s]:n[s]=e[s];return n}let D,E,K,N={};const V=(e,t,r)=>{if(D===t&&K===e&&E===r)return N;D=t,K=e;const n=e(t!=null?t:"");E=r;const s=ae(r);for(let[a,o]of Object.entries(n)){s!=null&&s[a]&&(delete n[a],a=s[a],n[a]=o);const c=N[a];C(o,c)&&(n[a]=c)}return N=n,n};function oe(e,t){var r;for(const n in e)((r=t[n])==null?void 0:r.default)!==void 0&&e[n]!==void 0&&t[n].encode(t[n].default)===e[n]&&(e[n]=void 0)}function ce({changes:e,updateType:t,currentSearchString:r,paramConfigMap:n,options:s}){const{searchStringToObject:a,objectToSearchString:o}=s;t==null&&(t=s.updateType);let c;const i=V(a,r),l=Q(n,Object.keys(e),s.params);let f;if(typeof e=="function"){const m=x(i,l,O);f=e(m)}else f=e;c=X(l,f),s.removeDefaultsFromUrl&&oe(c,l),c=se(c,l);let u;return t==="push"||t==="replace"?u=o(c):u=o({...i,...c}),u!=null&&u.length&&u[0]!=="?"&&(u="?".concat(u)),u!=null?u:""}function ie({searchString:e,adapter:t,navigate:r,updateType:n}){const a={...t.location,search:e};r&&(typeof n=="string"&&n.startsWith("replace")?t.replace(a):t.push(a))}const ue=e=>e(),le=e=>setTimeout(()=>e(),0),b=[];function fe(e,{immediate:t}={}){b.push(e);let r=t?ue:le;b.length===1&&r(()=>{const n=b.slice();b.length=0;const s=n[0].currentSearchString;let a;for(let o=0;o<n.length;++o){const c=o===0?n[o]:{...n[o],currentSearchString:a};a=ce(c)}e.options.skipUpdateWhenNoChange&&a===s||ie({searchString:a!=null?a:"",adapter:n[n.length-1].adapter,navigate:!0,updateType:n[n.length-1].updateType})})}function de(e,t){const{adapter:r,options:n}=R(),[s]=p.useState(re),{paramConfigMap:a,options:o}=me(e,t),c=p.useMemo(()=>T(n,o),[n,o]);let i=ee(a,c);const l=V(c.searchStringToObject,r.location.search,ne(i));c.includeAllParams&&(i=Q(i,Object.keys(l),c.params,M));const f=s(l,i,O),u=Object.keys(i).join("\0");p.useEffect(()=>{const y=u.split("\0");return O.registerParams(y),()=>{O.unregisterParams(y)}},[u]);const m={adapter:r,paramConfigMap:i,options:c},h=p.useRef(m);h.current==null&&(h.current=m),p.useEffect(()=>{h.current.adapter=r,h.current.paramConfigMap=i,h.current.options=c},[r,i,c]);const[g]=p.useState(()=>(j,P)=>{const{adapter:v,paramConfigMap:d,options:S}=h.current;P==null&&(P=S.updateType),fe({changes:j,updateType:P,currentSearchString:v.location.search,paramConfigMap:d,options:S,adapter:v},{immediate:!S.enableBatching})});return[f,g]}var pe=de;function me(e,t){let r,n;return e===void 0?(r={},n=t):Array.isArray(e)?(r=Object.fromEntries(e.map(s=>[s,"inherit"])),n=t):(r=e,n=t),{paramConfigMap:r,options:n}}const he=(e,t,r)=>{const n=p.useMemo(()=>({[e]:t!=null?t:"inherit"}),[e,t]),[s,a]=pe(n,r),o=s[e],c=p.useCallback((i,l)=>a(typeof i=="function"?f=>{const u=i(f[e]);return{[e]:u}}:{[e]:i},l),[e,a]);return[o,c]};var w={},ge=F;Object.defineProperty(w,"__esModule",{value:!0});var U=w.default=void 0,ve=ge(q()),Se=k;U=w.default=(0,ve.default)((0,Se.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search");const be=e=>{const{isClosable:t=!0}=e,{t:r}=I(),[n,s]=p.useState(),a=A(),[o,c]=he("query",M),[i,l]=p.useState(!t||!!o),f=z.useRef(),[u,m]=p.useState(o!=null?o:"");n!==a.key&&(s(a.key),m(o!=null?o:""),l(!t||!!o));const h=i||!!o,g=d=>{var S;t&&(l(d),d&&((S=f.current)==null||S.focus()))};function y(d){d!==""&&(c(d),g(!1))}const j=()=>{m(""),c(void 0),g(!1)},P=()=>{u||g(!1)},v=d=>{(d.key==="F3"||d.ctrlKey&&d.key==="f")&&(d.preventDefault(),g(!0))};return p.useEffect(()=>(window.addEventListener("keydown",v),()=>{window.removeEventListener("keydown",v)}),[v]),h?k.jsx(W,{autoFocus:!0,variant:"standard",value:u,onCancel:j,onChange:d=>m(d.target.value),onKeyDown:d=>{d.key==="Enter"&&y(u)},onBlur:P,inputRef:f}):k.jsx(G,{title:r("search.title.search"),children:k.jsx($,{onClick:()=>g(!0),children:k.jsx(U,{})})})};export{be as A,ke as N,M as S,U as d,he as u};
