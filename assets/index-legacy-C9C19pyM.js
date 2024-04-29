!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function n(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(t,n,r){var o;return o=function(t,n){if("object"!=e(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,n||"default");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(n,"string"),(n="symbol"==e(o)?o:o+"")in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,u,i,c=[],l=!0,a=!1;try{if(u=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=u.call(n)).done)&&(c.push(r.value),c.length!==t);l=!0);}catch(e){a=!0,o=e}finally{try{if(!l&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(a)throw o}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./Chip-legacy-DuTlCU35.js","./index-legacy-C182Zjs5.js"],(function(e,t){"use strict";var r,u;return{setters:[function(e){r=e.P},function(e){u=e.c}],execute:function(){function t(e){if("undefined"==typeof window)return e;var t=u.useRef(null);return u.useLayoutEffect((function(){t.current=e})),u.useCallback((function(){for(var e,n,r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];null===(n=t.current)||void 0===n||(e=n).call.apply(e,[t].concat(o))}),[])}e({P:s,a:function(e){var t=e.isOpen,r=e.anchorEl,o=e.anchorPosition,u=e.close,i=e.popupId,c=e.onMouseLeave,l=e.disableAutoFocus,a=e._openEventType;return n({id:i,anchorEl:r,anchorPosition:o,anchorReference:"contextmenu"===a?"anchorPosition":"anchorEl",open:t,onClose:u,onMouseLeave:c},l&&{autoFocus:!1,disableAutoFocusItem:!0,disableAutoFocus:!0,disableEnforceFocus:!0,disableRestoreFocus:!0})},b:function(e){return n(n({},(t=e,r=t.isOpen,o=t.popupId,u=t.variant,n({},"popover"===u?{"aria-haspopup":!0,"aria-controls":r&&null!=o?o:void 0}:"popper"===u?{"aria-describedby":r&&null!=o?o:void 0}:void 0))),{},{onClick:e.open,onTouchStart:e.open});var t,r,o,u},c:function(e){var t=e.isOpen,n=e.close;return{open:t,onClose:n}}});var i={};var c={isOpen:!1,setAnchorElUsed:!1,anchorEl:void 0,anchorPosition:void 0,hovered:!1,focused:!1,_openEventType:null,_childPopupState:null,_deferNextOpen:!1,_deferNextClose:!1};function l(e){var r=e.parentPopupState,l=e.popupId,f=e.variant,s=e.disableAutoFocus,p=u.useRef(!0);u.useEffect((function(){return p.current=!0,function(){p.current=!1}}),[]);var d=o(u.useState(c),2),v=d[0],y=d[1],b=u.useCallback((function(e){p.current&&y(e)}),[]),h=u.useCallback((function(e){return b((function(t){return n(n({},t),{},{setAnchorElUsed:!0,anchorEl:null!=e?e:void 0})}))}),[]),m=t((function(e){return v.isOpen?E(e):O(e),v})),O=t((function(e){var t=e instanceof Element?void 0:e,o=e instanceof Element?e:(null==e?void 0:e.currentTarget)instanceof Element?e.currentTarget:void 0;if("touchstart"!==(null==t?void 0:t.type)){var u=null==t?void 0:t.clientX,c=null==t?void 0:t.clientY,l="number"==typeof u&&"number"==typeof c?{left:u,top:c}:void 0,a=function(u){var c,a;if(e||u.setAnchorElUsed||"dialog"===f||(a="eventOrAnchorEl should be defined if setAnchorEl is not used",i[c="missingEventOrAnchorEl"]||(i[c]=!0,console.error("[material-ui-popup-state] WARNING",a))),r){if(!r.isOpen)return u;setTimeout((function(){return r._setChildPopupState(_)}))}var s=n(n({},u),{},{isOpen:!0,anchorPosition:l,hovered:"mouseover"===(null==t?void 0:t.type)||u.hovered,focused:"focus"===(null==t?void 0:t.type)||u.focused,_openEventType:null==t?void 0:t.type});return null!=t&&t.currentTarget?u.setAnchorElUsed||(s.anchorEl=null==t?void 0:t.currentTarget):o&&(s.anchorEl=o),s};b((function(e){return e._deferNextOpen?(setTimeout((function(){return b(a)}),0),n(n({},e),{},{_deferNextOpen:!1})):a(e)}))}else b((function(e){return n(n({},e),{},{_deferNextOpen:!0})}))})),g=function(e){var t=e._childPopupState;return setTimeout((function(){null==t||t.close(),null==r||r._setChildPopupState(null)})),n(n({},e),{},{isOpen:!1,hovered:!1,focused:!1})},E=t((function(e){var t=e instanceof Element?void 0:e;"touchstart"!==(null==t?void 0:t.type)?b((function(e){return e._deferNextClose?(setTimeout((function(){return b(g)}),0),n(n({},e),{},{_deferNextClose:!1})):g(e)})):b((function(e){return n(n({},e),{},{_deferNextClose:!0})}))})),P=u.useCallback((function(e,t){e?O(t):E(t)}),[]),S=t((function(e){var t=e.relatedTarget;b((function(e){return!e.hovered||t instanceof Element&&a(t,_)?e:e.focused?n(n({},e),{},{hovered:!1}):g(e)}))})),A=t((function(e){if(e){var t=e.relatedTarget;b((function(e){return!e.focused||t instanceof Element&&a(t,_)?e:e.hovered?n(n({},e),{},{focused:!1}):g(e)}))}})),j=u.useCallback((function(e){return b((function(t){return n(n({},t),{},{_childPopupState:e})}))}),[]),_=n(n({},v),{},{setAnchorEl:h,popupId:l,variant:f,open:O,close:E,toggle:m,setOpen:P,onBlur:A,onMouseLeave:S,disableAutoFocus:null!=s?s:Boolean(v.hovered||v.focused),_setChildPopupState:j});return _}function a(e,t){var n=t.anchorEl,r=t._childPopupState;return f(n,e)||f(function(e,t){var n=t.popupId;if(!n)return null;var r="function"==typeof e.getRootNode?e.getRootNode():document;return"function"==typeof r.getElementById?r.getElementById(n):null}(e,t),e)||null!=r&&a(e,r)}function f(e,t){if(!e)return!1;for(;t;){if(t===e)return!0;t=t.parentElement}return!1}function s(e){var t=(0,e.children)(l({popupId:e.popupId,variant:e.variant,parentPopupState:e.parentPopupState,disableAutoFocus:e.disableAutoFocus}));return null!=t?t:null}s.propTypes={children:r.func.isRequired,popupId:r.string,variant:r.oneOf(["popover","popper"]).isRequired,parentPopupState:r.object,disableAutoFocus:r.bool}}}}))}();
