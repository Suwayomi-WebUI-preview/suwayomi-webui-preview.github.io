!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,r,n){return(r=function(t){var r=function(t,r){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,r||"default");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==e(r)?r:r+""}(r))in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,s,a=[],l=!0,u=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(a.push(n.value),a.length!==t);l=!0);}catch(e){u=!0,o=e}finally{try{if(!l&&null!=r.return&&(s=r.return(),Object(s)!==s))return}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}System.register(["./index-legacy-BC5YaOB9.js","./NumberSetting-legacy-CC4PgFXN.js","./MutableListSetting-legacy-BPA1L0n-.js","./TextSetting-legacy-Bt7owWnC.js","./Switch-legacy-DmSfpSEL.js","./Info-legacy-CgSJdVR7.js","./PasswordTextField-legacy-90sJGMfw.js"],(function(e,n){"use strict";var o,i,s,a,l,u,c,f,g,d,b,h,m,y,p,x,v,S,j,w,_;return{setters:[function(e){o=e.u,i=e.f,s=e.h,a=e.g,l=e.r,u=e.q,c=e.j,f=e.l,g=e.E,d=e.m,b=e.n,h=e.w,m=e.aX,y=e.aM,p=e.s,x=e.bR,v=e.o},function(e){S=e.N},function(e){j=e.M},function(e){w=e.T},function(e){_=e.S},null,null],execute:function(){e("BrowseSettings",(function(){var e=o().t,n=i(),P=n.setTitle,I=n.setAction;s.useLayoutEffect((function(){P(e("global.label.browse")),I(null)}),[e]);var E=r(a("showNsfw",!0),2),T=E[0],C=E[1],A=l.useGetServerSettings({notifyOnNetworkStatusChange:!0}),N=A.data,O=A.loading,M=A.error,R=A.refetch,U=r(l.useUpdateServerSettings(),1)[0],k=function(r,n){U({variables:{input:{settings:t({},r,n)}}}).catch((function(t){return v(e("global.error.label.failed_to_save_changes"),"error",d(t))}))},L=u().settings.hideLibraryEntries,V=p((function(t){return v(e("global.error.label.failed_to_save_changes"),"error",d(t))}));if(O)return c.jsx(f,{});if(M)return c.jsx(g,{message:e("global.error.label.failed_to_load_data"),messageExtra:d(M),retry:function(){return R().catch(b())}});var q,D={maxSourcesInParallel:(q=N.settings).maxSourcesInParallel,localSourcePath:q.localSourcePath,extensionRepos:q.extensionRepos};return c.jsxs(h,{sx:{pt:0},children:[c.jsxs(m,{children:[c.jsx(y,{primary:e("settings.label.hide_library_entries")}),c.jsx(_,{edge:"end",checked:L,onChange:function(){return V("hideLibraryEntries",!L)}})]}),c.jsxs(m,{children:[c.jsx(y,{primary:e("settings.label.show_nsfw"),secondary:e("settings.label.show_nsfw_description")}),c.jsx(_,{edge:"end",checked:T,onChange:function(){return C(!T)}})]}),c.jsx(S,{settingTitle:e("settings.server.requests.sources.parallel.label.title"),settingValue:e("settings.server.requests.sources.parallel.label.value",{value:D.maxSourcesInParallel,count:D.maxSourcesInParallel}),valueUnit:e("source.title_one"),value:D.maxSourcesInParallel,defaultValue:6,minValue:1,maxValue:20,showSlider:!0,stepSize:1,handleUpdate:function(e){return k("maxSourcesInParallel",e)}}),c.jsx(j,{settingName:e("extension.settings.repositories.custom.label.title"),description:e("extension.settings.repositories.custom.label.description"),dialogDisclaimer:c.jsxs(x,{i18nKey:"extension.settings.repositories.custom.label.disclaimer",children:[c.jsx("strong",{children:"Suwayomi does not provide any support for 3rd party repositories or extensions!"}),c.jsx("br",{}),"Use with caution as there could be malicious actors making those repositories.",c.jsx("br",{}),"You as the user need to verify the security and that you trust any repository or extension."]}),handleChange:function(e){k("extensionRepos",e),l.clearExtensionCache()},valueInfos:D.extensionRepos.map((function(e){return[e]})),addItemButtonTitle:e("extension.settings.repositories.custom.dialog.action.button.add"),placeholder:"https://github.com/MY_ACCOUNT/MY_REPO/tree/repo",validateItem:function(e){return!!e.match(/https:\/\/(www\.|raw\.)?(github|githubusercontent)\.com\/([^/]+)\/([^/]+)((\/tree|\/blob)?\/([^/\n]*))?(\/([^/\n]*\.json)?)?/g)},invalidItemError:e("extension.settings.repositories.custom.error.label.invalid_url")}),c.jsx(w,{settingName:e("settings.server.local_source.path.label.title"),dialogDescription:e("settings.server.local_source.path.label.description"),value:D.localSourcePath,settingDescription:D.localSourcePath.length?D.localSourcePath:e("global.label.default"),handleChange:function(e){return k("localSourcePath",e)}})]})}))}}}))}();
