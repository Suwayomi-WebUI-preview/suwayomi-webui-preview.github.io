!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,l=[],c=!0,u=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(l.push(n.value),l.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(u)throw o}}return l}}(e,t)||n(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||n(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){if(e){if("string"==typeof e)return o(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(t,r,n){return(r=function(t){var r=function(t,r){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,r||"default");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==e(r)?r:r+""}(r))in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}System.register(["./index-legacy-DESf5n9D.js","./StrictModeDroppable-legacy-C3xD39MH.js","./StyledFab-legacy-dyWJO50e.js","./Edit-legacy-CbzTj0vs.js"],(function(e,n){"use strict";var o,i,l,c,u,s,f,d,y,g,b,p,m,h,j,x,v,S,O,w,C,P,E,k,A,D,I,_,T,F,B,M,N,R,z;return{setters:[function(e){o=e.u,i=e.j,l=e.B,c=e.C,u=e.b,s=e.T,f=e.d,d=e.k,y=e.I,g=e.K,b=e.r,p=e.f,m=e.h,h=e.b5,j=e.as,x=e.l,v=e.E,S=e.m,O=e.n,w=e.p,C=e.ao,P=e.aK,E=e.aL,k=e.aZ,A=e.b6,D=e.a0,I=e.aN,_=e.e},function(e){T=e.D,F=e.a,B=e.S,M=e.P},function(e){N=e.D,R=e.F},function(e){z=e.E}],execute:function(){e("CategorySettings",(function(){var e=o().t,a=p(),c=a.setTitle,u=a.setAction;m.useLayoutEffect((function(){return c(e("category.title.category_other")),u(null),function(){c(""),u(null)}}),[e]);var s=b.useGetCategories(h,{notifyOnNetworkStatusChange:!0}),f=s.data,d=s.loading,y=s.error,g=s.refetch,T=m.useMemo((function(){var e,t=r(null!==(e=null==f?void 0:f.categories.nodes)&&void 0!==e?e:[]);return t.length>0&&"Default"===t[0].name&&t.shift(),t}),[f]),z=t(m.useState(-1),2),G=z[0],K=z[1],L=t(m.useState(!1),2),q=L[0],H=L[1],U=t(m.useState(""),2),W=U[0],Z=U[1],$=t(m.useState(!1),2),J=$[0],Q=$[1],V=t(b.useReorderCategory(),2),X=V[0],Y=V[1].reset,ee=j(),te=function(){H(!1)};if(d)return i.jsx(x,{});if(y)return i.jsx(v,{message:e("category.error.label.request_failure"),messageExtra:S(y),retry:function(){return g().catch(O())}});return i.jsxs(i.Fragment,{children:[i.jsx(F,{onDragEnd:function(e){var t,r,n,o;e.destination&&(t=T,r=e.source.index,n=e.destination.index,o=t[r],X({variables:{input:{id:o.id,position:n+1}}}).catch((function(){return Y()})))},children:i.jsx(B,{droppableId:"droppable",children:function(e){return i.jsxs(l,{ref:e.innerRef,sx:{paddingBottom:N},children:[T.map((function(e,t){return i.jsx(M,{draggableId:e.id.toString(),index:t,children:function(r){return i.jsx(n,{provided:r,category:e,onEdit:function(){return function(e){Z(T[e].name),Q(T[e].default),K(e),H(!0)}(t)}})}},e.id)})),e.placeholder]})}})}),i.jsx(R,{color:"primary","aria-label":"add",style:{position:"fixed",bottom:ee.spacing(2),right:ee.spacing(2)},onClick:function(){Z(""),Q(!1),K(-1),H(!0)},children:i.jsx(w,{})}),i.jsxs(C,{open:q,onClose:te,children:[i.jsx(P,{id:"form-dialog-title",children:e(-1===G?"category.dialog.title.new_category":"category.dialog.title.edit_category")}),i.jsxs(E,{children:[i.jsx(k,{autoFocus:!0,margin:"dense",id:"name",label:e("category.label.category_name"),type:"text",fullWidth:!0,value:W,onChange:function(e){return Z(e.target.value)}}),i.jsx(A,{control:i.jsx(D,{checked:J,onChange:function(e){return Q(e.target.checked)}}),label:e("category.label.use_as_default_category")})]}),i.jsxs(I,{children:[i.jsx(_,{onClick:te,color:"primary",children:e("global.button.cancel")}),i.jsx(_,{onClick:function(){if(H(!1),-1===G)b.createCategory({name:W,default:J});else{var e=T[G];b.updateCategory(e.id,{name:W,default:J})}},color:"primary",children:e("global.button.submit")})]})]})]})}));var n=function(e){var t=e.category,r=e.provided,n=e.onEdit,p=o().t;return i.jsx(l,a(a(a({sx:{p:1,pb:0}},r.draggableProps),r.dragHandleProps),{},{ref:r.innerRef,children:i.jsx(c,{children:i.jsxs(u,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:1.5,"&:last-child":{paddingBottom:1.5},gap:2},children:[i.jsx(T,{}),i.jsx(s,{sx:{flexGrow:1},variant:"h6",component:"h2",children:t.name}),i.jsxs(f,{sx:{flexDirection:"row"},children:[i.jsx(d,{title:p("global.button.edit"),children:i.jsx(y,{component:l,onClick:n,size:"large",children:i.jsx(z,{})})}),i.jsx(d,{title:p("chapter.action.download.delete.label.action"),children:i.jsx(y,{component:l,onClick:function(){b.deleteCategory(t.id)},size:"large",children:i.jsx(g,{})})})]})]})})}))}}}}))}();
