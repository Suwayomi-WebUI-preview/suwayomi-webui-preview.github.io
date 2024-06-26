!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,r,n){return(r=function(t){var r=function(t,r){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var s=n.call(t,r||"default");if("object"!=e(s))return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==e(r)?r:r+""}(r))in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,s,i,o,l=[],a=!0,u=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;a=!1}else for(;!(a=(n=i.call(r)).done)&&(l.push(n.value),l.length!==t);a=!0);}catch(e){u=!0,s=e}finally{try{if(!a&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(u)throw s}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}System.register(["./index-legacy-B09rAWaZ.js","./NumberSetting-legacy-DWoaZ-f8.js","./MutableListSetting-legacy-D11QMwtf.js","./TextSetting-legacy-CIO0IKca.js","./Switch-legacy-CfmtjT8C.js","./Trans-legacy-HWKL0ran.js","./Info-legacy-Ca1wyecX.js","./TextField-legacy-DlXTwxE6.js","./InputAdornment-legacy-DUqEAWjn.js","./Delete-legacy-D56jk_dp.js","./PasswordTextField-legacy-yyRFSIKU.js","./SwitchBase-legacy-Dnrk_3l3.js"],(function(e,n){"use strict";var s,i,o,l,a,u,c,f,g,d,y,m,h,b,p,x,v,j,S;return{setters:[function(e){s=e.u,i=e.c,o=e.N,l=e.d,a=e.a,u=e.o,c=e.j,f=e.g,g=e.E,d=e.h,y=e.l,m=e.aj,h=e.O,b=e.b6},function(e){p=e.N},function(e){x=e.M},function(e){v=e.T},function(e){j=e.S},function(e){S=e.T},null,null,null,null,null,null],execute:function(){e("BrowseSettings",(function(){var e=s().t,n=i.useContext(o),w=n.setTitle,I=n.setAction;i.useEffect((function(){w(e("settings.browse.title")),I(null)}),[e]);var P=r(l("showNsfw",!0),2),_=P[0],T=P[1],C=a.useGetServerSettings({notifyOnNetworkStatusChange:!0}),E=C.data,A=C.loading,N=C.error,O=C.refetch,U=r(a.useUpdateServerSettings(),1)[0],M=function(e,r){U({variables:{input:{settings:t({},e,r)}}})},R=u().settings.hideLibraryEntries,V=b();if(A)return c.jsx(f,{});if(N)return c.jsx(g,{message:e("global.error.label.failed_to_load_data"),messageExtra:N.message,retry:function(){return O().catch(d())}});var k,B={maxSourcesInParallel:(k=E.settings).maxSourcesInParallel,localSourcePath:k.localSourcePath,extensionRepos:k.extensionRepos};return c.jsxs(y,{children:[c.jsxs(m,{children:[c.jsx(h,{primary:e("settings.label.hide_library_entries")}),c.jsx(j,{edge:"end",checked:R,onChange:function(){return V("hideLibraryEntries",!R)}})]}),c.jsxs(m,{children:[c.jsx(h,{primary:e("settings.label.show_nsfw"),secondary:e("settings.label.show_nsfw_description")}),c.jsx(j,{edge:"end",checked:_,onChange:function(){return T(!_)}})]}),c.jsx(p,{settingTitle:e("settings.server.requests.sources.parallel.label.title"),settingValue:e("settings.server.requests.sources.parallel.label.value",{value:B.maxSourcesInParallel,count:B.maxSourcesInParallel}),valueUnit:e("source.title"),value:B.maxSourcesInParallel,defaultValue:6,minValue:1,maxValue:20,showSlider:!0,stepSize:1,handleUpdate:function(e){return M("maxSourcesInParallel",e)}}),c.jsx(x,{settingName:e("extension.settings.repositories.custom.label.title"),description:e("extension.settings.repositories.custom.label.description"),dialogDisclaimer:c.jsxs(S,{i18nKey:"extension.settings.repositories.custom.label.disclaimer",children:[c.jsx("strong",{children:"Suwayomi does not provide any support for 3rd party repositories or extensions!"}),c.jsx("br",{}),"Use with caution as there could be malicious actors making those repositories.",c.jsx("br",{}),"You as the user need to verify the security and that you trust any repository or extension."]}),handleChange:function(e){M("extensionRepos",e),a.clearExtensionCache()},valueInfos:B.extensionRepos.map((function(e){return[e]})),addItemButtonTitle:e("extension.settings.repositories.custom.dialog.action.button.add"),placeholder:"https://github.com/MY_ACCOUNT/MY_REPO/tree/repo",validateItem:function(e){return!!e.match(/https:\/\/(www\.|raw\.)?(github|githubusercontent)\.com\/([^/]+)\/([^/]+)((\/tree|\/blob)?\/([^/\n]*))?(\/([^/\n]*\.json)?)?/g)},invalidItemError:e("extension.settings.repositories.custom.error.label.invalid_url")}),c.jsx(v,{settingName:e("settings.server.local_source.path.label.title"),dialogDescription:e("settings.server.local_source.path.label.description"),value:B.localSourcePath,handleChange:function(e){return M("localSourcePath",e)}})]})}))}}}))}();