!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,r,n){return(r=function(t){var r=function(t,r){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,r||"default");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==e(r)?r:r+""}(r))in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,s,l=[],a=!0,u=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;a=!1}else for(;!(a=(n=i.call(r)).done)&&(l.push(n.value),l.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{if(!a&&null!=r.return&&(s=r.return(),Object(s)!==s))return}finally{if(u)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}System.register(["./index-legacy-CZw6QM46.js","./NumberSetting-legacy-Dcu2OUQN.js","./MutableListSetting-legacy-DYEZW29d.js","./TextSetting-legacy-D2bzdXsE.js","./EmptyViewAbsoluteCentered-legacy-Dtketmfa.js","./Switch-legacy-BRkMSkqY.js","./Trans-legacy-CPK0wx_8.js","./Info-legacy-1P-HT7jy.js","./TextField-legacy-Dbx-N31z.js","./InputAdornment-legacy-B5xC158c.js","./Delete-legacy-rYrQDDYw.js","./PasswordTextField-legacy-DCzDrSjX.js","./SwitchBase-legacy-B8zXtzBR.js"],(function(e,n){"use strict";var o,i,s,l,a,u,c,f,g,d,y,h,b,m,p,x,v,S,j,w;return{setters:[function(e){o=e.u,i=e.c,s=e.N,l=e.d,a=e.a,u=e.l,c=e.j,f=e.g,g=e.h,d=e.o,y=e.ay,h=e.a4,b=e.m,m=e.t},function(e){p=e.N},function(e){x=e.M},function(e){v=e.T},function(e){S=e.E},function(e){j=e.S},function(e){w=e.T},null,null,null,null,null,null],execute:function(){e("BrowseSettings",(function(){var e=o().t,n=i.useContext(s),_=n.setTitle,P=n.setAction;i.useLayoutEffect((function(){_(e("settings.browse.title")),P(null)}),[e]);var I=r(l("showNsfw",!0),2),C=I[0],T=I[1],E=a.useGetServerSettings({notifyOnNetworkStatusChange:!0}),A=E.data,N=E.loading,O=E.error,U=E.refetch,D=r(a.useUpdateServerSettings(),1)[0],M=function(r,n){D({variables:{input:{settings:t({},r,n)}}}).catch((function(){return b(e("global.error.label.failed_to_save_changes"),"error")}))},R=u().settings.hideLibraryEntries,V=m((function(){return b(e("global.error.label.failed_to_save_changes"),"error")}));if(N)return c.jsx(f,{});if(O)return c.jsx(S,{message:e("global.error.label.failed_to_load_data"),messageExtra:O.message,retry:function(){return U().catch(g())}});var k,L={maxSourcesInParallel:(k=A.settings).maxSourcesInParallel,localSourcePath:k.localSourcePath,extensionRepos:k.extensionRepos};return c.jsxs(d,{sx:{pt:0},children:[c.jsxs(y,{children:[c.jsx(h,{primary:e("settings.label.hide_library_entries")}),c.jsx(j,{edge:"end",checked:R,onChange:function(){return V("hideLibraryEntries",!R)}})]}),c.jsxs(y,{children:[c.jsx(h,{primary:e("settings.label.show_nsfw"),secondary:e("settings.label.show_nsfw_description")}),c.jsx(j,{edge:"end",checked:C,onChange:function(){return T(!C)}})]}),c.jsx(p,{settingTitle:e("settings.server.requests.sources.parallel.label.title"),settingValue:e("settings.server.requests.sources.parallel.label.value",{value:L.maxSourcesInParallel,count:L.maxSourcesInParallel}),valueUnit:e("source.title_one"),value:L.maxSourcesInParallel,defaultValue:6,minValue:1,maxValue:20,showSlider:!0,stepSize:1,handleUpdate:function(e){return M("maxSourcesInParallel",e)}}),c.jsx(x,{settingName:e("extension.settings.repositories.custom.label.title"),description:e("extension.settings.repositories.custom.label.description"),dialogDisclaimer:c.jsxs(w,{i18nKey:"extension.settings.repositories.custom.label.disclaimer",children:[c.jsx("strong",{children:"Suwayomi does not provide any support for 3rd party repositories or extensions!"}),c.jsx("br",{}),"Use with caution as there could be malicious actors making those repositories.",c.jsx("br",{}),"You as the user need to verify the security and that you trust any repository or extension."]}),handleChange:function(e){M("extensionRepos",e),a.clearExtensionCache()},valueInfos:L.extensionRepos.map((function(e){return[e]})),addItemButtonTitle:e("extension.settings.repositories.custom.dialog.action.button.add"),placeholder:"https://github.com/MY_ACCOUNT/MY_REPO/tree/repo",validateItem:function(e){return!!e.match(/https:\/\/(www\.|raw\.)?(github|githubusercontent)\.com\/([^/]+)\/([^/]+)((\/tree|\/blob)?\/([^/\n]*))?(\/([^/\n]*\.json)?)?/g)},invalidItemError:e("extension.settings.repositories.custom.error.label.invalid_url")}),c.jsx(v,{settingName:e("settings.server.local_source.path.label.title"),dialogDescription:e("settings.server.local_source.path.label.description"),value:L.localSourcePath,settingDescription:L.localSourcePath.length?L.localSourcePath:e("global.label.default"),handleChange:function(e){return M("localSourcePath",e)}})]})}))}}}))}();
