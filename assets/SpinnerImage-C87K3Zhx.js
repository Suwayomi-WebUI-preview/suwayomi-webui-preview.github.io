import{r as _,i as b,j as e,c as r,u as z,a as D,cc as L,B as T,S as y,a6 as A,b as F,n as S}from"./index-D7SWUMPx.js";var f={},V=b;Object.defineProperty(f,"__esModule",{value:!0});var w=f.default=void 0,K=V(_()),O=e;w=f.default=(0,K.default)((0,O.jsx)("path",{d:"M21 5v6.59l-3-3.01-4 4.01-4-4-4 4-3-3.01V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2m-3 6.42 3 3.01V19c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-6.58l3 2.99 4-4 4 4z"}),"BrokenImage");var h={},U=b;Object.defineProperty(h,"__esModule",{value:!0});var C=h.default=void 0,G=U(_()),J=e;C=h.default=(0,G.default)((0,J.jsx)("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2M8.5 13.5l2.5 3.01L14.5 12l4.5 6H5z"}),"Image");const W=r.forwardRef((R,k)=>{const{useFetchApi:E,src:n,alt:q,onImageLoad:i,spinnerStyle:{small:u,...p}={},imgStyle:o}=R,{t:M}=z(),x=!n.length,[I,P]=r.useState(""),[j,$]=r.useState(0),[c,H]=r.useState(void 0),[l,B]=r.useState(!1),g=(t,a=!1,v=!1)=>{H(t),B(a),!t&&!a&&!v&&(i==null||i())};return r.useEffect(()=>{if(x)return()=>{};const t=D.requestImage(n,L.HIGH,E);let a;return(async()=>{try{const s=async()=>{const d=await t.response;g(!1),P(d)};if(!!await Promise.race([t.response,new Promise(d=>{a=setTimeout(d,50)})])){await s();return}g(!0),await s()}catch(s){const m=s instanceof Error&&(s.name==="AbortError"||s.message==="Component was unmounted");g(!1,!m,m)}})().catch(()=>{}),()=>{t.cleanup(),clearTimeout(a),t.abortRequest(new Error("Component was unmounted"))}},[n,j]),e.jsxs(e.Fragment,{children:[(c||l)&&e.jsx(T,{sx:{height:"100%",...p},children:e.jsxs(y,{sx:{height:"100%",alignItems:"center",justifyContent:"center"},children:[c&&e.jsx(A,{thickness:5}),l&&c===!1&&e.jsxs(e.Fragment,{children:[e.jsx(w,{}),e.jsx(F,{startIcon:!u&&e.jsx(S,{}),onClick:t=>{t.stopPropagation(),t.preventDefault(),$(a=>(a+1)%100)},size:u?"small":"large",children:u?e.jsx(S,{}):M("global.button.retry")})]})]})}),x?e.jsx(y,{sx:{height:"100%",alignItems:"center",justifyContent:"center",background:t=>t.palette.background.default,...p},children:e.jsx(C,{fontSize:"large"})}):e.jsx("img",{style:{...o,display:!I||c||l?"none":o==null?void 0:o.display},ref:k,src:I,alt:q,draggable:!1},"".concat(n,"_").concat(j))]})});export{W as S};