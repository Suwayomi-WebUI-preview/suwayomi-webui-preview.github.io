!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,r,n){var s;return s=function(t,r){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var s=n.call(t,r||"default");if("object"!=e(s))return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(r,"string"),(r="symbol"==e(s)?s:s+"")in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,s,i,o,a=[],l=!0,u=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(a.push(n.value),a.length!==t);l=!0);}catch(e){u=!0,s=e}finally{try{if(!l&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(u)throw s}}return a}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}System.register(["./index-legacy-C182Zjs5.js","./NumberSetting-legacy-CJ0rhIqF.js","./MutableListSetting-legacy-DfOe8vVQ.js","./TextSetting-legacy-CMKi7w7_.js","./metadataServerSettings-legacy-CM9xljxS.js","./Switch-legacy-BhXYSezi.js","./Trans-legacy-Akb5GYI-.js","./Info-legacy-Do4JPrug.js","./TextField-legacy-9kh-a0h3.js","./InputAdornment-legacy-T7YPfgZU.js","./Delete-legacy-Wt5E139_.js","./PasswordTextField-legacy-CRHOz6Ey.js","./metadata-legacy-Bu0EDDj_.js","./SwitchBase-legacy-B4rXAfU-.js"],(function(e,n){"use strict";var s,i,o,a,l,u,c,f,g,d,y,m,b,h,p,x,j,S,v,w;return{setters:[function(e){s=e.u,i=e.c,o=e.N,a=e.A,l=e.d,u=e.a,c=e.j,f=e.g,g=e.E,d=e.h,y=e.o,m=e.ab,b=e.y},function(e){h=e.N},function(e){p=e.M},function(e){x=e.T},function(e){j=e.u,S=e.c},function(e){v=e.S},function(e){w=e.T},null,null,null,null,null,null,null],execute:function(){e("BrowseSettings",(function(){var e=s().t,n=i.useContext(o),I=n.setTitle,P=n.setAction;a("settings"),i.useEffect((function(){I(e("settings.browse.title")),P(null)}),[e]);var _=r(l("showNsfw",!0),2),T=_[0],E=_[1],A=u.useGetServerSettings({notifyOnNetworkStatusChange:!0}),C=A.data,N=A.loading,O=A.error,U=A.refetch,M=r(u.useUpdateServerSettings(),1)[0],R=function(e,r){M({variables:{input:{settings:t({},e,r)}}})},k=j().settings.hideLibraryEntries,D=S();if(N)return c.jsx(f,{});if(O)return c.jsx(g,{message:e("global.error.label.failed_to_load_data"),messageExtra:O.message,retry:function(){return U().catch(d())}});var V,Y={maxSourcesInParallel:(V=C.settings).maxSourcesInParallel,localSourcePath:V.localSourcePath,extensionRepos:V.extensionRepos};return c.jsxs(y,{children:[c.jsxs(m,{children:[c.jsx(b,{primary:e("settings.label.hide_library_entries")}),c.jsx(v,{edge:"end",checked:k,onChange:function(){return D("hideLibraryEntries",!k)}})]}),c.jsxs(m,{children:[c.jsx(b,{primary:e("settings.label.show_nsfw"),secondary:e("settings.label.show_nsfw_description")}),c.jsx(v,{edge:"end",checked:T,onChange:function(){return E(!T)}})]}),c.jsx(h,{settingTitle:e("settings.server.requests.sources.parallel.label.title"),settingValue:e("settings.server.requests.sources.parallel.label.value",{value:Y.maxSourcesInParallel,count:Y.maxSourcesInParallel}),valueUnit:e("source.title"),value:Y.maxSourcesInParallel,defaultValue:6,minValue:1,maxValue:20,showSlider:!0,stepSize:1,handleUpdate:function(e){return R("maxSourcesInParallel",e)}}),c.jsx(p,{settingName:e("extension.settings.repositories.custom.label.title"),description:e("extension.settings.repositories.custom.label.description"),dialogDisclaimer:c.jsxs(w,{i18nKey:"extension.settings.repositories.custom.label.disclaimer",children:[c.jsx("strong",{children:"Suwayomi does not provide any support for 3rd party repositories or extensions!"}),c.jsx("br",{}),"Use with caution as there could be malicious actors making those repositories.",c.jsx("br",{}),"You as the user need to verify the security and that you trust any repository or extension."]}),handleChange:function(e){R("extensionRepos",e),u.clearExtensionCache()},valueInfos:Y.extensionRepos.map((function(e){return[e]})),addItemButtonTitle:e("extension.settings.repositories.custom.dialog.action.button.add"),placeholder:"https://github.com/MY_ACCOUNT/MY_REPO/tree/repo",validateItem:function(e){return!!e.match(/https:\/\/(www\.|raw\.)?(github|githubusercontent)\.com\/([^/]+)\/([^/]+)((\/tree|\/blob)?\/([^/\n]*))?(\/([^/\n]*\.json)?)?/g)},invalidItemError:e("extension.settings.repositories.custom.error.label.invalid_url")}),c.jsx(x,{settingName:e("settings.server.local_source.path.label.title"),dialogDescription:e("settings.server.local_source.path.label.description"),value:Y.localSourcePath,handleChange:function(e){return R("localSourcePath",e)}})]})}))}}}))}();
