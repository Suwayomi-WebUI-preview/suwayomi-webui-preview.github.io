!function(){var e=["format"],t=["children","count","parent","i18nKey","context","tOptions","values","defaults","components","ns","i18n","t","shouldUnescape"],n=["children","count","parent","i18nKey","context","tOptions","values","defaults","components","ns","i18n","t","shouldUnescape"];function r(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){var r;return r=function(e,t){if("object"!=a(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==a(r)?r:r+"")in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}System.register(["./index-legacy-DvbTrPAB.js"],(function(o,c){"use strict";var l,u,p,f,m,d,y;return{setters:[function(e){l=e.bg,u=e.bh,p=e.bi,f=e.c,m=e.bj,d=e.bk,y=e.bl}],execute:function(){o("T",(function(e){var o=e.children,c=e.count,l=e.parent,m=e.i18nKey,h=e.context,v=e.tOptions,b=void 0===v?{}:v,g=e.values,O=e.defaults,j=e.components,P=e.ns,A=e.i18n,N=e.t,I=e.shouldUnescape,K=i(e,n),V=f.useContext(y)||{},D=V.i18n,T=V.defaultNS,U=A||D||d(),B=N||U&&U.t.bind(U);return function(e){var n=e.children,o=e.count,c=e.parent,l=e.i18nKey,m=e.context,y=e.tOptions,h=void 0===y?{}:y,v=e.values,b=e.defaults,g=e.components,O=e.ns,j=e.i18n,P=e.t,A=e.shouldUnescape,N=i(e,t),I=j||d();if(!I)return u("You will need to pass in an i18next instance by using i18nextReactModule"),n;var K=P||I.t.bind(I)||function(e){return e},V=s(s({},p()),I.options&&I.options.react),D=O||K.ns||I.options&&I.options.defaultNS;D="string"==typeof D?[D]:D||["translation"];var T=k(n,V),U=b||T||V.transEmptyNodeValue||l,B=V.hashTransKey,F=l||(B?B(T||U):T||U);I.options&&I.options.interpolation&&I.options.interpolation.defaultVariables&&(v=v&&Object.keys(v).length>0?s(s({},v),I.options.interpolation.defaultVariables):s({},I.options.interpolation.defaultVariables));var H=v||void 0!==o||!n?h.interpolation:{interpolation:s(s({},h.interpolation),{},{prefix:"#$?",suffix:"?$#"})},L=s(s(s(s({},h),{},{context:m||h.context,count:o},v),H),{},{defaultValue:U,ns:D}),$=F?K(F,L):U;g&&Object.keys(g).forEach((function(e){var t=g[e];function n(){return f.createElement(f.Fragment,null,t)}"function"==typeof t.type||!t.props||!t.props.children||$.indexOf("".concat(e,"/>"))<0&&$.indexOf("".concat(e," />"))<0||(g[e]=f.createElement(n))}));var C=function(e,t,n,o,i,c){if(""===t)return[];var l=o.transKeepBasicHtmlNodesFor||[],u=t&&new RegExp(l.map((function(e){return"<".concat(e)})).join("|")).test(t);if(!e&&!u&&!c)return[t];var p={};function m(e){w(e).forEach((function(e){"string"!=typeof e&&(E(e)?m(S(e)):"object"!==a(e)||f.isValidElement(e)||Object.assign(p,e))}))}m(e);var d=x.parse("<0>".concat(t,"</0>")),y=s(s({},p),i);function h(e,t,n){var r=S(e),o=b(r,t.children,n);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return f.isValidElement(e)}))}(r)&&0===o.length||e.props&&e.props.i18nIsDynamicList?r:o}function v(e,t,n,o,i){e.dummy?(e.children=t,n.push(f.cloneElement(e,{key:o},i?void 0:t))):n.push.apply(n,r(f.Children.map([e],(function(e){var n=s({},e.props);return delete n.i18nIsDynamicList,f.createElement(e.type,s(s({},n),{},{key:o,ref:e.ref}),i?null:t)}))))}function b(t,r,i){var p=w(t);return w(r).reduce((function(t,r,m){var d,g,O,j=r.children&&r.children[0]&&r.children[0].content&&n.services.interpolator.interpolate(r.children[0].content,y,n.language);if("tag"===r.type){var x=p[parseInt(r.name,10)];1!==i.length||x||(x=i[0][r.name]),x||(x={});var S=0!==Object.keys(r.attrs).length?(d={props:r.attrs},(O=s({},g=x)).props=Object.assign(d.props,g.props),O):x,w=f.isValidElement(S),k=w&&E(r,!0)&&!r.voidElement,P=u&&"object"===a(S)&&S.dummy&&!w,A="object"===a(e)&&null!==e&&Object.hasOwnProperty.call(e,r.name);if("string"==typeof S){var N=n.services.interpolator.interpolate(S,y,n.language);t.push(N)}else if(E(S)||k){v(S,h(S,r,i),t,m)}else if(P){v(S,b(p,r.children,i),t,m)}else if(Number.isNaN(parseFloat(r.name))){if(A)v(S,h(S,r,i),t,m,r.voidElement);else if(o.transSupportBasicHtmlNodes&&l.indexOf(r.name)>-1)if(r.voidElement)t.push(f.createElement(r.name,{key:"".concat(r.name,"-").concat(m)}));else{var I=b(p,r.children,i);t.push(f.createElement(r.name,{key:"".concat(r.name,"-").concat(m)},I))}else if(r.voidElement)t.push("<".concat(r.name," />"));else{var K=b(p,r.children,i);t.push("<".concat(r.name,">").concat(K,"</").concat(r.name,">"))}}else if("object"!==a(S)||w)v(S,j,t,m,1!==r.children.length||!j);else{var V=r.children[0]?j:null;V&&t.push(V)}}else if("text"===r.type){var D=o.transWrapTextNodes,T=c?o.unescape(n.services.interpolator.interpolate(r.content,y,n.language)):n.services.interpolator.interpolate(r.content,y,n.language);D?t.push(f.createElement(D,{key:"".concat(r.name,"-").concat(m)},T)):t.push(T)}return t}),[])}var g=b([{dummy:!0,children:e||[]}],d,w(e||[]));return S(g[0])}(g||n,$,I,V,L,A),R=void 0!==c?c:V.defaultTransParent;return R?f.createElement(R,N,C):C}(s({children:o,count:c,parent:l,i18nKey:m,context:h,tOptions:b,values:g,defaults:O,components:j,ns:P||B&&B.ns||T||U&&U.options&&U.options.defaultNS,i18n:U,t:N,shouldUnescape:I},K))}));var c=l({area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}),h=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function v(e){var t={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},n=e.match(/<\/?([^\s]+?)[/\s>]/);if(n&&(t.name=n[1],(c[n[1]]||"/"===e.charAt(e.length-2))&&(t.voidElement=!0),t.name.startsWith("!--"))){var r=e.indexOf("--\x3e");return{type:"comment",comment:-1!==r?e.slice(4,r):""}}for(var o=new RegExp(h),i=null;null!==(i=o.exec(e));)if(i[0].trim())if(i[1]){var a=i[1].trim(),s=[a,""];a.indexOf("=")>-1&&(s=a.split("=")),t.attrs[s[0]]=s[1],o.lastIndex--}else i[2]&&(t.attrs[i[2]]=i[3].trim().substring(1,i[3].length-1));return t}var b=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,g=/^\s*$/,O=Object.create(null);function j(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(e){var t=[];for(var n in e)t.push(n+'="'+e[n]+'"');return t.length?" "+t.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(j,"")+"</"+t.name+">";case"comment":return e+"\x3c!--"+t.comment+"--\x3e"}}var x={parse:function(e,t){t||(t={}),t.components||(t.components=O);var n,r=[],o=[],i=-1,a=!1;if(0!==e.indexOf("<")){var c=e.indexOf("<");r.push({type:"text",content:-1===c?e:e.substring(0,c)})}return e.replace(b,(function(c,s){if(a){if(c!=="</"+n.name+">")return;a=!1}var l,u="/"!==c.charAt(1),p=c.startsWith("\x3c!--"),f=s+c.length,m=e.charAt(f);if(p){var d=v(c);return i<0?(r.push(d),r):((l=o[i]).children.push(d),r)}if(u&&(i++,"tag"===(n=v(c)).type&&t.components[n.name]&&(n.type="component",a=!0),n.voidElement||a||!m||"<"===m||n.children.push({type:"text",content:e.slice(f,e.indexOf("<",f))}),0===i&&r.push(n),(l=o[i-1])&&l.children.push(n),o[i]=n),(!u||n.voidElement)&&(i>-1&&(n.voidElement||n.name===c.slice(2,-1))&&(i--,n=-1===i?r:o[i]),!a&&"<"!==m&&m)){l=-1===i?r:o[i].children;var y=e.indexOf("<",f),h=e.slice(f,-1===y?void 0:y);g.test(h)&&(h=" "),(y>-1&&i+l.length>=0||" "!==h)&&l.push({type:"text",content:h})}})),r},stringify:function(e){return e.reduce((function(e,t){return e+j("",t)}),"")}};function E(e,t){if(!e)return!1;var n=e.props?e.props.children:e.children;return t?n.length>0:!!n}function S(e){if(!e)return[];var t=e.props?e.props.children:e.children;return e.props&&e.props.i18nIsDynamicList?w(t):t}function w(e){return Array.isArray(e)?e:[e]}function k(t,n){if(!t)return"";var r="",o=w(t),c=n.transSupportBasicHtmlNodes&&n.transKeepBasicHtmlNodesFor?n.transKeepBasicHtmlNodesFor:[];return o.forEach((function(t,o){if("string"==typeof t)r+="".concat(t);else if(f.isValidElement(t)){var s=Object.keys(t.props).length,l=c.indexOf(t.type)>-1,u=t.props.children;if(!u&&l&&0===s)r+="<".concat(t.type,"/>");else if(u||l&&0===s)if(t.props.i18nIsDynamicList)r+="<".concat(o,"></").concat(o,">");else if(l&&1===s&&"string"==typeof u)r+="<".concat(t.type,">").concat(u,"</").concat(t.type,">");else{var p=k(u,n);r+="<".concat(o,">").concat(p,"</").concat(o,">")}else r+="<".concat(o,"></").concat(o,">")}else if(null===t)m("Trans: the passed in value is invalid - seems you passed in a null child.");else if("object"===a(t)){var d=t.format,y=i(t,e),h=Object.keys(y);if(1===h.length){var v=d?"".concat(h[0],", ").concat(d):h[0];r+="{{".concat(v,"}}")}else m("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",t)}else m("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",t)})),r}}}}))}();
