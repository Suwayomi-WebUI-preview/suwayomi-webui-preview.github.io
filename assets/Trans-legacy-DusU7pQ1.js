!function(){function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}var n=["format"],t=["children","count","parent","i18nKey","context","tOptions","values","defaults","components","ns","i18n","t","shouldUnescape"],r=["children","count","parent","i18nKey","context","tOptions","values","defaults","components","ns","i18n","t","shouldUnescape"];function i(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(e){if("string"==typeof e)return o(e,n);var t={}.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||{}.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(n,t,r){return(t=function(n){var t=function(n,t){if("object"!=e(n)||!n)return n;var r=n[Symbol.toPrimitive];if(void 0!==r){var i=r.call(n,t||"default");if("object"!=e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(n)}(n,"string");return"symbol"==e(t)?t:t+""}(t))in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}System.register(["./index-legacy-D9Ga1UuC.js"],(function(e,o){"use strict";var l,s,u,p,f,d,v,m,y;return{setters:[function(e){l=e.bj,s=e.bk,u=e.bl,p=e.c,f=e.bm,d=e.bn,v=e.bo,m=e.bp,y=e.bq}],execute:function(){e("T",(function(e){var n,i=e.children,o=e.count,l=e.parent,d=e.i18nKey,v=e.context,h=e.tOptions,b=void 0===h?{}:h,g=e.values,O=e.defaults,x=e.components,j=e.ns,E=e.i18n,S=e.t,w=e.shouldUnescape,A=a(e,r),N=p.useContext(y)||{},I=N.i18n,V=N.defaultNS,D=E||I||m(),K=S||(null==D?void 0:D.t.bind(D));return function(e){var n,r,i,o=e.children,l=e.count,d=e.parent,v=e.i18nKey,y=e.context,h=e.tOptions,b=void 0===h?{}:h,g=e.values,O=e.defaults,x=e.components,j=e.ns,E=e.i18n,S=e.t,w=e.shouldUnescape,A=a(e,t),N=E||m();if(!N)return s("You will need to pass in an i18next instance by using i18nextReactModule"),o;var I=S||N.t.bind(N)||function(e){return e},V=c(c({},u()),null===(n=N.options)||void 0===n?void 0:n.react),D=j||I.ns||(null===(r=N.options)||void 0===r?void 0:r.defaultNS);D=f(D)?[D]:D||["translation"];var K=k(o,V),T=O||K||V.transEmptyNodeValue||v,U=V.hashTransKey,B=v||(U?U(K||T):K||T);null!==(i=N.options)&&void 0!==i&&null!==(i=i.interpolation)&&void 0!==i&&i.defaultVariables&&(g=g&&Object.keys(g).length>0?c(c({},g),N.options.interpolation.defaultVariables):c({},N.options.interpolation.defaultVariables));var F=g||void 0!==l||!o?b.interpolation:{interpolation:c(c({},b.interpolation),{},{prefix:"#$?",suffix:"?$#"})},H=c(c(c(c({},b),{},{context:y||b.context,count:l},g),F),{},{defaultValue:T,ns:D}),L=B?I(B,H):T;x&&Object.keys(x).forEach((function(e){var n=x[e];function t(){return p.createElement(p.Fragment,null,n)}"function"==typeof n.type||!n.props||!n.props.children||L.indexOf("".concat(e,"/>"))<0&&L.indexOf("".concat(e," />"))<0||(x[e]=p.createElement(t))}));var $=P(x||o,L,N,V,H,w),C=null!=d?d:V.defaultTransParent;return C?p.createElement(C,A,$):$}(c({children:i,count:o,parent:l,i18nKey:d,context:v,tOptions:b,values:g,defaults:O,components:x,ns:j||(null==K?void 0:K.ns)||V||(null==D||null===(n=D.options)||void 0===n?void 0:n.defaultNS),i18n:D,t:S,shouldUnescape:w},A))}));var o=l({area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}),h=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function b(e){var n={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},t=e.match(/<\/?([^\s]+?)[/\s>]/);if(t&&(n.name=t[1],(o[t[1]]||"/"===e.charAt(e.length-2))&&(n.voidElement=!0),n.name.startsWith("!--"))){var r=e.indexOf("--\x3e");return{type:"comment",comment:-1!==r?e.slice(4,r):""}}for(var i=new RegExp(h),a=null;null!==(a=i.exec(e));)if(a[0].trim())if(a[1]){var l=a[1].trim(),c=[l,""];l.indexOf("=")>-1&&(c=l.split("=")),n.attrs[c[0]]=c[1],i.lastIndex--}else a[2]&&(n.attrs[a[2]]=a[3].trim().substring(1,a[3].length-1));return n}var g=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,O=/^\s*$/,x=Object.create(null);var j=function(e,n){n||(n={}),n.components||(n.components=x);var t,r=[],i=[],o=-1,a=!1;if(0!==e.indexOf("<")){var l=e.indexOf("<");r.push({type:"text",content:-1===l?e:e.substring(0,l)})}return e.replace(g,(function(l,c){if(a){if(l!=="</"+t.name+">")return;a=!1}var s,u="/"!==l.charAt(1),p=l.startsWith("\x3c!--"),f=c+l.length,d=e.charAt(f);if(p){var v=b(l);return o<0?(r.push(v),r):((s=i[o]).children.push(v),r)}if(u&&(o++,"tag"===(t=b(l)).type&&n.components[t.name]&&(t.type="component",a=!0),t.voidElement||a||!d||"<"===d||t.children.push({type:"text",content:e.slice(f,e.indexOf("<",f))}),0===o&&r.push(t),(s=i[o-1])&&s.children.push(t),i[o]=t),(!u||t.voidElement)&&(o>-1&&(t.voidElement||t.name===l.slice(2,-1))&&(o--,t=-1===o?r:i[o]),!a&&"<"!==d&&d)){s=-1===o?r:i[o].children;var m=e.indexOf("<",f),y=e.slice(f,-1===m?void 0:m);O.test(y)&&(y=" "),(m>-1&&o+s.length>=0||" "!==y)&&s.push({type:"text",content:y})}})),r},E=function(e,n){var t,r;if(!e)return!1;var i=null!==(t=null===(r=e.props)||void 0===r?void 0:r.children)&&void 0!==t?t:e.children;return n?i.length>0:!!i},S=function(e){var n,t,r;if(!e)return[];var i=null!==(n=null===(t=e.props)||void 0===t?void 0:t.children)&&void 0!==n?n:e.children;return null!==(r=e.props)&&void 0!==r&&r.i18nIsDynamicList?w(i):i},w=function(e){return Array.isArray(e)?e:[e]},k=function e(t,r){var i;if(!t)return"";var o="",l=w(t),c=null!=r&&r.transSupportBasicHtmlNodes&&null!==(i=r.transKeepBasicHtmlNodesFor)&&void 0!==i?i:[];return l.forEach((function(t,i){if(f(t))o+="".concat(t);else if(p.isValidElement(t)){var l=t.props,s=t.type,u=Object.keys(l).length,m=c.indexOf(s)>-1,y=l.children;if(y||!m||u)if(!y&&(!m||u)||l.i18nIsDynamicList)o+="<".concat(i,"></").concat(i,">");else if(m&&1===u&&f(y))o+="<".concat(s,">").concat(y,"</").concat(s,">");else{var h=e(y,r);o+="<".concat(i,">").concat(h,"</").concat(i,">")}else o+="<".concat(s,"/>")}else if(null===t)d("Trans: the passed in value is invalid - seems you passed in a null child.");else if(v(t)){var b=t.format,g=a(t,n),O=Object.keys(g);if(1===O.length){var x=b?"".concat(O[0],", ").concat(b):O[0];o+="{{".concat(x,"}}")}else d("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",t)}else d("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",t)})),o},P=function(e,n,t,r,o,a){if(""===n)return[];var l=r.transKeepBasicHtmlNodesFor||[],s=n&&new RegExp(l.map((function(e){return"<".concat(e)})).join("|")).test(n);if(!e&&!s&&!a)return[n];var u={};!function e(n){w(n).forEach((function(n){f(n)||(E(n)?e(S(n)):v(n)&&!p.isValidElement(n)&&Object.assign(u,n))}))}(e);var d=j("<0>".concat(n,"</0>")),m=c(c({},u),o),y=function(e,n,t){var r,i=S(e),o=b(i,n.children,t);return function(e){return Array.isArray(e)&&e.every(p.isValidElement)}(i)&&0===o.length||null!==(r=e.props)&&void 0!==r&&r.i18nIsDynamicList?i:o},h=function(e,n,t,r,o){e.dummy?(e.children=n,t.push(p.cloneElement(e,{key:r},o?void 0:n))):t.push.apply(t,i(p.Children.map([e],(function(e){var t=c({},e.props);return delete t.i18nIsDynamicList,p.createElement(e.type,c(c({},t),{},{key:r,ref:e.ref}),o?null:n)}))))},b=function n(i,o,u){var d=w(i);return w(o).reduce((function(i,o,b){var g,O,x,j,S=(null===(g=o.children)||void 0===g||null===(g=g[0])||void 0===g?void 0:g.content)&&t.services.interpolator.interpolate(o.children[0].content,m,t.language);if("tag"===o.type){var w=d[parseInt(o.name,10)];1!==u.length||w||(w=u[0][o.name]),w||(w={});var k=0!==Object.keys(o.attrs).length?(O={props:o.attrs},(j=c({},x=w)).props=Object.assign(O.props,x.props),j):w,P=p.isValidElement(k),A=P&&E(o,!0)&&!o.voidElement,N=s&&v(k)&&k.dummy&&!P,I=v(e)&&Object.hasOwnProperty.call(e,o.name);if(f(k)){var V=t.services.interpolator.interpolate(k,m,t.language);i.push(V)}else if(E(k)||A){var D=y(k,o,u);h(k,D,i,b)}else if(N){var K=n(d,o.children,u);h(k,K,i,b)}else if(Number.isNaN(parseFloat(o.name)))if(I){var T=y(k,o,u);h(k,T,i,b,o.voidElement)}else if(r.transSupportBasicHtmlNodes&&l.indexOf(o.name)>-1)if(o.voidElement)i.push(p.createElement(o.name,{key:"".concat(o.name,"-").concat(b)}));else{var U=n(d,o.children,u);i.push(p.createElement(o.name,{key:"".concat(o.name,"-").concat(b)},U))}else if(o.voidElement)i.push("<".concat(o.name," />"));else{var B=n(d,o.children,u);i.push("<".concat(o.name,">").concat(B,"</").concat(o.name,">"))}else if(v(k)&&!P){var F=o.children[0]?S:null;F&&i.push(F)}else h(k,S,i,b,1!==o.children.length||!S)}else if("text"===o.type){var H=r.transWrapTextNodes,L=a?r.unescape(t.services.interpolator.interpolate(o.content,m,t.language)):t.services.interpolator.interpolate(o.content,m,t.language);H?i.push(p.createElement(H,{key:"".concat(o.name,"-").concat(b)},L)):i.push(L)}return i}),[])},g=b([{dummy:!0,children:e||[]}],d,w(e||[]));return S(g[0])}}}}))}();
