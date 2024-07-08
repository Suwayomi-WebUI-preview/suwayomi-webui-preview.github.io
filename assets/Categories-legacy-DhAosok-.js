!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,l=[],c=!0,u=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(l.push(n.value),l.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(u)throw o}}return l}}(e,t)||n(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||n(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){if(e){if("string"==typeof e)return o(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(t,r,n){return(r=function(t){var r=function(t,r){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,r||"default");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==e(r)?r:r+""}(r))in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}System.register(["./index-legacy-C_UnwvGt.js","./StrictModeDroppable-legacy-DjB35c2c.js","./Add-legacy-SB4AFA19.js","./Delete-legacy-BZGmJmtl.js","./StyledFab-legacy-6yP0QZV6.js","./TextField-legacy-BuKn0AuL.js","./Checkbox-legacy-C2KR8XDQ.js","./SwitchBase-legacy-D4SV7oLp.js"],(function(e,n){"use strict";var o,i,l,c,u,s,f,d,y,g,b,p,m,j,h,x,v,S,O,w,C,P,k,A,D,_,E,I,F,M,T,z,R,N;return{setters:[function(e){o=e.r,i=e.i,l=e.j,c=e.u,u=e.c,s=e.N,f=e.a,d=e.aQ,y=e.w,g=e.g,b=e.E,p=e.h,m=e.l,j=e.an,h=e.U,x=e.V,v=e.f,S=e.I,O=e.H,w=e.au,C=e.av,P=e.aw,k=e.b},function(e){A=e.D,D=e.S,_=e.P,E=e.d},function(e){I=e.d},function(e){F=e.d},function(e){M=e.D,T=e.F},function(e){z=e.T},function(e){R=e.F,N=e.C},null],execute:function(){e("Categories",(function(){var e=c().t,n=u.useContext(s),o=n.setTitle,i=n.setAction;u.useEffect((function(){return o(e("category.title.category_other")),i(null),function(){o(""),i(null)}}),[e]);var V=f.useGetCategories(d,{notifyOnNetworkStatusChange:!0}),H=V.data,L=V.loading,W=V.error,q=V.refetch,G=u.useMemo((function(){var e,t=r(null!==(e=null==H?void 0:H.categories.nodes)&&void 0!==e?e:[]);return t.length>0&&"Default"===t[0].name&&t.shift(),t}),[H]),Q=t(u.useState(-1),2),$=Q[0],J=Q[1],K=t(u.useState(!1),2),X=K[0],Y=K[1],Z=t(u.useState(""),2),ee=Z[0],te=Z[1],re=t(u.useState(!1),2),ne=re[0],oe=re[1],ie=t(f.useReorderCategory(),2),ae=ie[0],le=ie[1].reset,ce=y(),ue=function(){Y(!1)};if(L)return l.jsx(g,{});if(W)return l.jsx(b,{message:e("category.error.label.request_failure"),messageExtra:W.message,retry:function(){return q().catch(p())}});return l.jsxs(l.Fragment,{children:[l.jsx(A,{onDragEnd:function(e){var t,r,n,o;e.destination&&(t=G,r=e.source.index,n=e.destination.index,o=t[r],ae({variables:{input:{id:o.id,position:n+1}}}).catch((function(){return le()})))},children:l.jsx(D,{droppableId:"droppable",children:function(t){return l.jsxs(m,{ref:t.innerRef,sx:{paddingBottom:M},children:[G.map((function(t,r){return l.jsx(_,{draggableId:t.id.toString(),index:r,children:function(n,o){return l.jsxs(j,a(a(a({ContainerProps:{ref:n.innerRef}},n.draggableProps),n.dragHandleProps),{},{style:U(o.isDragging,n.draggableProps.style,ce.palette),ref:n.innerRef,children:[l.jsx(h,{children:l.jsx(E,{})}),l.jsx(x,{primary:t.name}),l.jsx(v,{title:e("global.button.edit"),children:l.jsx(S,{onClick:function(){!function(e){te(G[e].name),oe(G[e].default),J(e),Y(!0)}(r)},size:"large",children:l.jsx(B,{})})}),l.jsx(v,{title:e("chapter.action.download.delete.label.action"),children:l.jsx(S,{onClick:function(){!function(e){var t=G[e];f.deleteCategory(t.id)}(r)},size:"large",children:l.jsx(F,{})})})]}))}},t.id)})),t.placeholder]})}})}),l.jsx(T,{color:"primary","aria-label":"add",style:{position:"fixed",bottom:ce.spacing(2),right:ce.spacing(2)},onClick:function(){te(""),oe(!1),J(-1),Y(!0)},children:l.jsx(I,{})}),l.jsxs(O,{open:X,onClose:ue,children:[l.jsx(w,{id:"form-dialog-title",children:e(-1===$?"category.dialog.title.new_category":"category.dialog.title.edit_category")}),l.jsxs(C,{children:[l.jsx(z,{autoFocus:!0,margin:"dense",id:"name",label:e("category.label.category_name"),type:"text",fullWidth:!0,value:ee,onChange:function(e){return te(e.target.value)}}),l.jsx(R,{control:l.jsx(N,{checked:ne,onChange:function(e){return oe(e.target.checked)},color:"default"}),label:e("category.label.use_as_default_category")})]}),l.jsxs(P,{children:[l.jsx(k,{onClick:ue,color:"primary",children:e("global.button.cancel")}),l.jsx(k,{onClick:function(){if(Y(!1),-1===$)f.createCategory({name:ee,default:ne});else{var e=G[$];f.updateCategory(e.id,{name:ee,default:ne})}},color:"primary",children:e("global.button.submit")})]})]})]})}));var n={},V=i;Object.defineProperty(n,"__esModule",{value:!0});var B=n.default=void 0,H=V(o()),L=l;B=n.default=(0,H.default)((0,L.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit");var U=function(e,t,r){return a(a({},t),e&&{background:"dark"===r.mode?"#424242":"rgb(235,235,235)"})}}}}))}();