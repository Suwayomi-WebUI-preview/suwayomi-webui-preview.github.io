!function(){function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}var n=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function t(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function r(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(n,t,r){return(t=function(n){var t=function(n,t){if("object"!=e(n)||!n)return n;var r=n[Symbol.toPrimitive];if(void 0!==r){var i=r.call(n,t||"default");if("object"!=e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(n)}(n,"string");return"symbol"==e(t)?t:t+""}(t))in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}function a(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||u(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,a,o,u=[],l=!0,c=!1;try{if(a=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;l=!1}else for(;!(l=(r=a.call(t)).done)&&(u.push(r.value),u.length!==n);l=!0);}catch(e){c=!0,i=e}finally{try{if(!l&&null!=t.return&&(o=t.return(),Object(o)!==o))return}finally{if(c)throw i}}return u}}(e,n)||u(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,n){if(e){if("string"==typeof e)return l(e,n);var t={}.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?l(e,n):void 0}}function l(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}System.register(["./index-legacy-CipcTvEM.js","./ReaderSettingsOptions-legacy-BTMWGM-Y.js","./Select-legacy-8PyGfak2.js","./CustomIconButton-legacy-p-5rDSWN.js","./Chapters-legacy-N4GYtcLi.js","./Collapse-legacy-CG9XdM9u.js","./TextField-legacy-BrgWSVjK.js","./useDebounce-legacy-DodVUfOo.js","./EmptyViewAbsoluteCentered-legacy-BIhSU6um.js","./NumberSetting-legacy-v5AQA1Mp.js","./Info-legacy-BXSJ6_Ee.js","./InputAdornment-legacy-CjvSrgrf.js","./SpinnerImage-legacy-C3MvVE_b.js","./Refresh-legacy-CVp79sfM.js","./Switch-legacy-C4-1CoyQ.js","./SwitchBase-legacy-BUK8XZw2.js"],(function(e,t){"use strict";var u,l,c,s,d,f,p,g,v,h,m,x,y,w,b,C,j,E,R,k,P,S,L,O,T,D,I,N,_,A,W,M,z,H,V,X,B,F,Y,U,K,G,q,J,Z,$,Q,ee,ne,te,re,ie;return{setters:[function(e){u=e.c,l=e.v,c=e.j,s=e.B,d=e.r,f=e.i,p=e.J,g=e.aq,v=e.ar,h=e.as,m=e.at,x=e.au,y=e.C,w=e.u,b=e.k,C=e.av,j=e.e,E=e.aw,R=e.ax,k=e.ay,P=e.f,S=e.I,L=e.T,O=e.az,T=e.a5,D=e.aA,I=e.a3,N=e.aB,_=e.a6,A=e.a,W=e.aC,M=e.aD,z=e.l,H=e.N,V=e.m,X=e.M,B=e.a8,F=e.h,Y=e.aE,U=e.aF},function(e){K=e.P,G=e.R,q=e.u,J=e.g},function(e){Z=e.S},function(e){$=e.C},function(e){Q=e.D,ee=e.C},function(e){ne=e.C},function(e){te=e.a},function(e){re=e.u},function(e){ie=e.E},null,null,null,null,null,null,null],execute:function(){e("Reader",(function(){var e,n,t,l,d,f,p,g,v=w().t,h=j(),m=E(),x=_(),y=x.chapterIndex,b=x.mangaId,C=u.useMemo((function(){return{id:+b,title:"",thumbnailUrl:"",genre:[],inLibraryAt:0,lastReadAt:0,chapters:{totalCount:0},trackRecords:{totalCount:0}}}),[b]),R=A.useGetManga(W,b),k=R.data,P=R.loading,S=R.error,L=R.refetch,O=u.useRef(null),T=Number(b)===(null===(e=O.current)||void 0===e?void 0:e.mangaId)&&Number(y)===(null===(n=O.current)||void 0===n?void 0:n.sourceOrder)&&-1!==(null===(t=O.current)||void 0===t?void 0:t.pageCount),D=null!==(l=null==k?void 0:k.manga)&&void 0!==l?l:C,I=A.useGetChapters(M,{condition:{mangaId:Number(b),sourceOrder:Number(y)}},{notifyOnNetworkStatusChange:!0}),N=I.data,Y=I.loading,K=I.error,G=I.refetch,Z=null==N?void 0:N.chapters.nodes[0],$=u.useRef(!1),ne=z().settings.downloadAheadLimit,te=!!ne;O.current=O.current&&T?Z&&(null===(oe=O.current)||void 0===oe?void 0:oe.pageCount)!==Z.pageCount?Z:O.current:($.current=!1,Z||null);var oe;var ue=null!==(d=O.current)&&void 0!==d?d:Ue,le=u.useRef(Ue);le.current===Ue&&(le.current=ue);ue.mangaId!==(null===(f=le.current)||void 0===f?void 0:f.mangaId)&&(le.current=Ue);var ce=o(A.useGetChapterPagesFetch(ue.id),2),se=ce[0],de=ce[1],fe=de.loading,pe=de.error,ge=function(){Y||se().then((function(){$.current=!0})).catch(F())};u.useEffect((function(){ge()}),[ue.id]);var ve=o(u.useState(!1),2),he=ve[0],me=ve[1],xe=o(u.useState(0),2),ye=xe[0],we=xe[1],be=ye===ue.pageCount-1,Ce=re(ye,be?0:1e3),je=o(u.useState(void 0),2),Ee=je[0],Re=je[1],ke=u.useContext(H),Pe=ke.setOverride,Se=ke.setTitle,Le=ke.readerNavBarWidth,Oe=o(u.useState(!1),2),Te=Oe[0],De=Oe[1],Ie=A.useGetMangaChapters(M,b,{nextFetchPolicy:"standby"}),Ne=Ie.data,_e=Ie.loading,Ae=Ie.error,We=Ie.refetch,Me=null==Ne?void 0:Ne.chapters.nodes,ze=P||Y||_e||fe||!$.current&&!K&&!pe,He=null!==(p=null!==(g=null!=S?S:K)&&void 0!==g?g:Ae)&&void 0!==p?p:pe,Ve=q(),Ke=Ve.settings,Ge=Ve.loading,qe=o(u.useState(Ke),2),Je=qe[0],Ze=qe[1],$e=z().settings,Qe=u.useMemo((function(){return Je.skipDupChapters?ee.removeDuplicates(le.current,null!=Me?Me:[]):null!=Me?Me:[]}),[le.current,Me,Je.skipDupChapters]),en=u.useMemo((function(){return ee.getNextChapters(ue,null!=Me?Me:[],{offset:Q.PREVIOUS,skipDupe:Je.skipDupChapters,skipDupeChapter:le.current})}),[ue,le.current,Me,Je.skipDupChapters]),nn=u.useMemo((function(){return ee.getNextChapters(ue,null!=Me?Me:[],{skipDupe:Je.skipDupChapters,skipDupeChapter:le.current})}),[ue,le.current,Me,Je.skipDupChapters]),tn=u.useMemo((function(){return ee.getNextChapter(ue,null!=Me?Me:[],{offset:Q.PREVIOUS,skipDupe:Je.skipDupChapters,skipDupeChapter:le.current})}),[ue,le.current,Me,Je.skipDupChapters]),rn=u.useMemo((function(){return ee.getNextChapter(ue,null!=Me?Me:[],{skipDupe:Je.skipDupChapters,skipDupeChapter:le.current})}),[ue,le.current,Me,Je.skipDupChapters]),an=function(e){if(ue!==Ue){!function(){var n,t=Be(ue.id),r=(null!==(n=e.lastPageRead)&&void 0!==n?n:0)/ue.pageCount>.25;if(te&&D.inLibrary&&!(null==t||!t.isDownloaded)&&r){var i=rn?Be(rn.id):null;if(null==i||!i.isDownloaded)return;var a=ee.getNonRead(nn).map((function(e){return Be(e.id)})).slice(-ne).filter((function(e){return!e.isDownloaded})).map((function(e){return e.id})).filter((function(e){return!ee.isDownloading(e)}));if(!a.length)return;ee.download(a).catch(F())}}();var n=Je.skipDupChapters?ee.getIds(ee.addDuplicates([ue],null!=Me?Me:[ue])):[ue.id];A.updateChapters(n,r(r({},e),{},{chapterIdsToDelete:function(){if(!(!!e.isRead&&!!$e.deleteChaptersWhileReading)||!Me)return[];var n=[ue].concat(a(en))[$e.deleteChaptersWhileReading-1];if(!n)return[];var t=Be(n.id);return t.isRead&&ee.isDeletable(t,$e.deleteChaptersWithBookmark)?Je.skipDupChapters?ee.getIds(ee.addDuplicates([n],Me)):ee.getIds([n]):[]}(),trackProgressMangaId:$e.updateProgressAfterReading&&e.isRead&&D.trackRecords.totalCount?D.id:void 0}),{errorPolicy:"all"}).response.catch(F())}},on=function(e,n){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];Ze(r(r({},Je),{},i({},e,n))),t&&U(D,[[e,n]]).catch((function(){return V(v("reader.settings.error.label.failed_to_save_settings"),"warning")}))},un=u.useCallback((function(e){var n=e===Q.NEXT,t=n?rn:tn;t?(De(!0),we(0),h("/manga/".concat(D.id,"/chapter/").concat(t.sourceOrder),{replace:!0,state:m.state}),De(!1)):V(v(n?"reader.error.label.next_chapter_does_not_exist":"reader.error.label.prev_chapter_does_not_exist"),"error")}),[D.id,null==tn?void 0:tn.id,null==rn?void 0:rn.id]);u.useEffect((function(){!ze&&ue?(me(!0),ue.lastPageRead===ue.pageCount-1?we(0):we(ue.lastPageRead)):we(0)}),[ue,ze]),u.useLayoutEffect((function(){null!=D&&D.title&&ue.name!==v("global.label.loading")?Se("".concat(D.title,": ").concat(ue.name)):Se(v("reader.title"))}),[v,D,ue]),u.useEffect((function(){Ge||P||Ze(J(D,Ke))}),[Ge,P]),u.useLayoutEffect((function(){return Pe({status:!0,value:c.jsx(Xe,{settings:Je,setSettingValue:on,manga:D,chapter:ue,chapters:Qe,curPage:ye,scrollToPage:Re,openNextChapter:un,retrievingNextChapter:Te})}),function(){return Pe({status:!1,value:c.jsx("div",{})})}}),[D,ue,Je,ye,y,Te,un,Qe]),u.useEffect((function(){if(he&&ue!==Ue){var e=Be(ue.id);if(Ce!==(null==e?void 0:e.lastPageRead)){var n=-1!==Ce,t=Ce===ue.pageCount-1;(n||t)&&an({lastPageRead:n?Ce:void 0,isRead:!!t||void 0})}}}),[Ce,te]);var ln=u.useCallback((function(){an({lastPageRead:ue.pageCount-1,isRead:!0}),un(Q.NEXT)}),[ue.pageCount,un,ue,D]),cn=u.useCallback((function(){un(Q.PREVIOUS)}),[un]),sn=X.useGetScrollbarSize("height");if(ze)return c.jsx(s,{sx:{height:"100vh",width:"100vw",display:"grid",placeItems:"center"},children:c.jsx(B,{thickness:5})});if(He)return c.jsx(ie,{message:v("global.error.label.failed_to_load_data"),messageExtra:He.message,retry:function(){S&&L().catch(F()),K&&G().catch(F()),Ae&&We().catch(F()),pe&&ge()}});if(!ue.pageCount)return c.jsx(ie,{message:v("reader.error.label.no_pages_found"),retry:ge});var dn=Ye(ue.pageCount).map((function(e){return{index:e,src:A.getChapterPageUrl(b,y,e)}})),fn=Fe(Je.readerType),pn=null!=Ee?Ee:ue.lastPageRead===ue.pageCount-1?0:ue.lastPageRead,gn=Je.staticNav?Le:0;return c.jsxs(s,{sx:{display:"flex",flexDirection:"column",alignContent:"center",alignItems:"center",justifyContent:"center",minWidth:"calc((100vw - (100vw - 100%)) - ".concat(gn,"px)"),minHeight:"calc(100vh - ".concat(sn,"px)"),marginLeft:"".concat(gn,"px")},children:[c.jsx(ae,{settings:Je,curPage:ye,pageCount:ue.pageCount}),c.jsx(s,{sx:{alignSelf:"stretch"},children:c.jsx(fn,{pages:dn,pageCount:ue.pageCount,setCurPage:we,initialPage:pn,curPage:ye,settings:Je,manga:D,chapter:ue,nextChapter:ln,prevChapter:cn},ue.id)})]})}));function t(e){var n=e.pages,t=e.curPage,r=e.initialPage,i=e.settings,a=e.setCurPage,o=e.prevChapter,d=e.nextChapter,f=u.useRef(r),p=u.useRef(null),g=u.useRef([]);function v(){var e;t<n.length-1?(null===(e=g.current[t+1])||void 0===e||e.scrollIntoView({inline:"center"}),a((function(e){return e+1}))):i.loadNextOnEnding&&d()}function h(){var e;t>0?(null===(e=g.current[t-1])||void 0===e||e.scrollIntoView({inline:"center"}),a(t-1)):0===t&&o()}var m=u.useRef(0);function x(e){window.scrollBy(m.current-e.pageX,0)}function y(e){var n;m.current=e.pageX,null===(n=p.current)||void 0===n||n.addEventListener("mousemove",x)}function w(){var e;null===(e=p.current)||void 0===e||e.removeEventListener("mousemove",x)}var b=function(){"ContinuesHorizontalLTR"===i.readerType?window.scrollX+window.innerWidth>=document.body.scrollWidth&&d():"ContinuesHorizontalRTL"===i.readerType&&window.scrollX<=window.innerWidth&&d()};return l(g.current[r],u.useCallback((function(e,n){var t=g.current[r];null!=t&&t.offsetHeight&&(t.scrollIntoView({inline:"center"}),n.disconnect())}),[g.current[r],r])),u.useEffect((function(){var e,n;return null===(e=p.current)||void 0===e||e.addEventListener("mousedown",y),null===(n=p.current)||void 0===n||n.addEventListener("mouseup",w),function(){var e,n;null===(e=p.current)||void 0===e||e.removeEventListener("mousedown",y),null===(n=p.current)||void 0===n||n.removeEventListener("mouseup",w)}}),[p]),u.useEffect((function(){return i.loadNextOnEnding&&document.addEventListener("scroll",b),function(){document.removeEventListener("scroll",b)}}),[p,t,o,d]),u.useEffect((function(){var e=function(){if(p.current){var e=function(e){for(var n=0;n<e.children.length;n++){var t=e.children.item(n);if(t){var r=t.getBoundingClientRect(),i=r.left,a=r.right;if(i<=window.innerWidth/2&&a>window.innerWidth/2)return n}}return-1}(p.current);e!==f.current&&(f.current=e,a(e)),("ContinuesHorizontalLTR"===i.readerType?window.innerWidth+window.scrollX>=document.body.scrollWidth-5:window.scrollX<=0)&&(f.current=n.length-1,a(f.current))}};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[i.readerType]),c.jsx(s,{ref:p,sx:{display:"flex",flexDirection:"ContinuesHorizontalLTR"===i.readerType?"row":"row-reverse",justifyContent:"ContinuesHorizontalLTR"===i.readerType?"flex-start":"flex-end",width:"auto",height:"auto",overflowX:"visible",userSelect:"none"},onClick:function(e){e.clientX>=.85*window.innerWidth?"ContinuesHorizontalLTR"===i.readerType?v():h():e.clientX<=.15*window.innerWidth&&("ContinuesHorizontalLTR"===i.readerType?h():v())},onWheel:function(e){window.scrollBy({left:"ContinuesHorizontalLTR"===i.readerType?e.deltaY:-1*e.deltaY})},children:n.map((function(e){return c.jsx(K,{index:e.index,src:e.src,onImageLoad:function(){},settings:i,ref:function(n){g.current[e.index]=n}},e.index)}))})}function ae(e){var n=e.settings,t=e.curPage,r=e.pageCount;return c.jsx(s,{sx:{display:n.showPageNumber?"block":"none",position:"fixed",bottom:"50px",padding:"2px",paddingLeft:"4px",paddingRight:"4px",textAlign:"center",backgroundColor:"rgba(0, 0, 0, 0.3)",borderRadius:"10px"},children:"".concat(t+1," / ").concat(r)})}function oe(e){var n=e.pages,t=e.settings,r=e.setCurPage,i=e.initialPage,a=e.curPage,o=e.nextChapter,l=e.prevChapter,d=u.useRef(null),f=function(e){r(e),window.scroll({top:0})};function p(){a<n.length-1?f(a+1):t.loadNextOnEnding&&o()}function g(){a>0?f(a-1):l()}function v(){"SingleLTR"===t.readerType?g():"SingleRTL"===t.readerType&&p()}function h(){"SingleLTR"===t.readerType?p():"SingleRTL"===t.readerType&&g()}function m(e){switch(e.key){case"Space":e.preventDefault(),p();break;case"ArrowRight":h();break;case"ArrowLeft":v()}}return u.useEffect((function(){return document.addEventListener("keydown",m),function(){document.removeEventListener("keydown",m)}}),[d,a,t.readerType,l,o]),u.useEffect((function(){setTimeout((function(){f(i)}),0)}),[i]),c.jsx(s,{ref:d,sx:{display:"flex",flexDirection:"column",justifyContent:"center",width:"auto",height:"auto"},onClick:function(e){e.clientX>window.innerWidth/2?h():v()},children:n.map((function(e){var n=e.index,r=e.src;return c.jsx(K,{index:n,onImageLoad:function(){},src:r,settings:t,display:n===a},r)}))})}function ue(e){var n=e.pages,t=e.settings,r=e.setCurPage,i=e.initialPage,l=e.curPage,d=e.nextChapter,f=e.prevChapter,p=u.useRef(null),g=u.useRef([]),v=o(u.useState(Array(n.length).fill(!1)),2),h=v[0],m=v[1],x=o(u.useState(Array(n.length).fill(!1)),2),y=x[0],w=x[1],b=u.useMemo((function(){return h.map((function(e,n){return n+h.slice(0,n).filter(Boolean).length}))}),[h]);function C(){var e=function(e){return r(-1===e?n.length-1:e)};if(g.current[n.length-1]&&t.loadNextOnEnding)return l===n.length-1||e(n.length-1),void d();e(g.current.findIndex((function(e,n){return!e&&n>l})))}function j(){var e=function(e){return r(Math.max(e,0))};if(g.current[0])return!l||e(0),void f();e(a(g.current).slice(0,l).findLastIndex((function(e){return!e})))}function E(){"DoubleLTR"===t.readerType?j():C()}function R(){"DoubleLTR"===t.readerType?C():j()}function k(e){switch(e.key){case"Space":e.preventDefault(),C();break;case"ArrowRight":R();break;case"ArrowLeft":E()}}return u.useEffect((function(){return document.addEventListener("keydown",k),function(){document.removeEventListener("keydown",k)}}),[p,l,t.readerType,f,d,y,h]),u.useEffect((function(){r(i)}),[i]),c.jsx(s,{ref:p,onClick:function(e){e.clientX>window.innerWidth/2?R():E()},children:c.jsx(s,{id:"display",sx:{display:"flex",flexDirection:"DoubleLTR"===t.readerType?"row":"row-reverse",justifyContent:"center",width:"auto",height:"auto"},children:n.map((function(e){var n,r=e.index,i=e.src,a=!(b[l]%2),o=(n=t.offsetFirstPage?-1:1,(a?1:-1)*n),u=l+o,s=0===l,d=r===l,f=r===u,p=h[l],v=h[u],x=p||v,y=s&&t.offsetFirstPage,C=d||f&&!x&&!y;return g.current[r]=C,c.jsx(K,{index:r,src:i,onImageLoad:function(){var e=new Image;e.onload=function(){w((function(e){return e.toSpliced(r,1,!0)})),m((function(n){return n.toSpliced(r,1,(t=e).height/t.width<1);var t}))},e.src=i},settings:t,display:C},i)}))})})}var le=function(){return window.innerHeight+window.scrollY>=document.body.offsetHeight-5};function ce(e){var n=e.pages,t=e.settings,r=e.setCurPage,i=e.initialPage,a=e.nextChapter,o=e.prevChapter,d=u.useRef(i),f=u.useRef(null),p=u.useRef([]);u.useEffect((function(){var e=!1,i=function(){if(f.current)if(le()){if(e)return;e=!0,d.current=n.length-1,r(d.current),t.loadNextOnEnding&&a()}else{e=!1;var i=function(e){for(var n=0;n<e.children.length;n++){var t=e.children.item(n);if(t){var r=t.getBoundingClientRect(),i=r.top,a=r.bottom;if(i<=window.innerHeight&&a>1)return n}}return-1}(f.current);i!==d.current&&(d.current=i,r(i))}};return window.addEventListener("scroll",i),function(){window.removeEventListener("scroll",i)}}),[t.loadNextOnEnding,a]);var g=u.useRef(0),v=u.useRef(!1);function h(e){v.current=!0,window.scrollBy(0,g.current-e.pageY)}function m(e){var n;g.current=e.pageY,null===(n=f.current)||void 0===n||n.addEventListener("mousemove",h)}function x(){var e;null===(e=f.current)||void 0===e||e.removeEventListener("mousemove",h)}u.useEffect((function(){var e,n;return null===(e=f.current)||void 0===e||e.addEventListener("mousedown",m),null===(n=f.current)||void 0===n||n.addEventListener("mouseup",x),function(){var e,n;null===(e=f.current)||void 0===e||e.removeEventListener("mousedown",m),null===(n=f.current)||void 0===n||n.removeEventListener("mouseup",x)}}),[f]);var y=u.useCallback((function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.95;"down"===e&&le()?a():"up"===e&&window.scrollY<=0?o():window.scroll({top:window.scrollY+window.innerHeight*n*("up"===e?-1:1),behavior:"smooth"})}),[a,o]);return u.useEffect((function(){var e=function(e){switch(e.key){case"Space":case"ArrowRight":e.preventDefault(),y(e.shiftKey?"up":"down");break;case"ArrowDown":e.preventDefault(),y(e.shiftKey?"up":"down",.25);break;case"ArrowUp":e.preventDefault(),y(e.shiftKey?"down":"up",.25);break;case"ArrowLeft":e.preventDefault(),y(e.shiftKey?"down":"up")}};return document.addEventListener("keydown",e,!1),function(){document.removeEventListener("keydown",e)}}),[y]),l(p.current[i],u.useCallback((function(e,n){var t=p.current[i];null!=t&&t.offsetHeight&&(t.scrollIntoView(),n.disconnect())}),[p.current[i],i])),c.jsx(s,{ref:f,sx:{display:"flex",flexDirection:"column",justifyContent:"center",width:"auto",height:"auto",userSelect:"none"},onClick:function(e){v.current?v.current=!1:y(e.clientX>window.innerWidth/2?"down":"up")},children:n.map((function(e){return c.jsx(K,{index:e.index,src:e.src,onImageLoad:function(){},settings:t,ref:function(n){p.current[e.index]=n}},e.index)}))})}var se={},de=f;Object.defineProperty(se,"__esModule",{value:!0});var fe=se.default=void 0,pe=de(d()),ge=c;fe=se.default=(0,pe.default)((0,ge.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");var ve={},he=f;Object.defineProperty(ve,"__esModule",{value:!0});var me=ve.default=void 0,xe=he(d()),ye=c;me=ve.default=(0,xe.default)((0,ye.jsx)("path",{d:"M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6z"}),"KeyboardArrowLeft");var we={},be=f;Object.defineProperty(we,"__esModule",{value:!0});var Ce=we.default=void 0,je=be(d()),Ee=c;Ce=we.default=(0,je.default)((0,Ee.jsx)("path",{d:"M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z"}),"KeyboardArrowRight");var Re={},ke=f;Object.defineProperty(Re,"__esModule",{value:!0});var Pe=Re.default=void 0,Se=ke(d()),Le=c;Pe=Re.default=(0,Se.default)((0,Le.jsx)("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"}),"KeyboardArrowDown");var Oe={},Te=f;Object.defineProperty(Oe,"__esModule",{value:!0});var De=Oe.default=void 0,Ie=Te(d()),Ne=c;De=Oe.default=(0,Ie.default)((0,Ne.jsx)("path",{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"}),"KeyboardArrowUp");var _e={entering:{transform:"none"},entered:{transform:"none"}},Ae=u.forwardRef((function(e,t){var i=p(),a={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},o=e.addEndListener,l=e.appear,s=void 0===l||l,d=e.children,f=e.easing,y=e.in,w=e.onEnter,b=e.onEntered,C=e.onEntering,j=e.onExit,E=e.onExited,R=e.onExiting,k=e.style,P=e.timeout,S=void 0===P?a:P,L=e.TransitionComponent,O=void 0===L?h:L,T=function(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.includes(r))continue;t[r]=e[r]}return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.includes(t)||{}.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}(e,n),D=u.useRef(null),I=g(D,v(d),t),N=function(e){return function(n){if(e){var t=D.current;void 0===n?e(t):e(t,n)}}},_=N(C),A=N((function(e,n){m(e);var t=x({style:k,timeout:S,easing:f},{mode:"enter"});e.style.webkitTransition=i.transitions.create("transform",t),e.style.transition=i.transitions.create("transform",t),w&&w(e,n)})),W=N(b),M=N(R),z=N((function(e){var n=x({style:k,timeout:S,easing:f},{mode:"exit"});e.style.webkitTransition=i.transitions.create("transform",n),e.style.transition=i.transitions.create("transform",n),j&&j(e)})),H=N(E);return c.jsx(O,r(r({appear:s,in:y,nodeRef:D,onEnter:A,onEntered:W,onEntering:_,onExit:z,onExited:H,onExiting:M,addEndListener:function(e){o&&o(D.current,e)},timeout:S},T),{},{children:function(e,n){return u.cloneElement(d,r({style:r(r(r({transform:"scale(0)",visibility:"exited"!==e||y?void 0:"hidden"},_e[e]),k),d.props.style),ref:I},n))}}))})),We=y("div")({zIndex:10}),Me=y("div")((function(e){var n=e.theme;return{position:"fixed",top:0,left:0,minWidth:"240px",maxWidth:"400px",height:"100vh",overflowY:"auto",backgroundColor:n.palette.background.default,"& header":{backgroundColor:n.palette.action.hover,display:"flex",alignItems:"center",padding:"".concat(n.spacing(1)," ").concat(n.spacing(3)),transition:"left 2s ease"}}})),ze=y("div")((function(e){var n=e.theme;return{margin:"0 ".concat(n.spacing(2))}})),He=y("div")({display:"flex",flexWrap:"wrap",alignContent:"center",alignItems:"center",justifyContent:"center"}),Ve=y("div")((function(e){var n=e.theme;return{display:"grid",gridTemplateRows:"auto auto auto",gridTemplateColumns:"0fr 1fr 0fr",gridTemplateAreas:'"pre current next"',gridColumnGap:n.spacing(.5),margin:"".concat(n.spacing(1)," 0"),"& a":{textDecoration:"none",color:"inherit",display:"flex",flexWrap:"wrap",alignContent:"center"}}}));function Xe(e){var n,t=w().t,i=b().setReaderNavBarWidth,a=p(),s=C(),d=j(),f=null!==(n=E().state)&&void 0!==n?n:{},g=f.prevDrawerOpen,v=f.prevSettingsCollapseOpen,h=u.useRef(null);l(h,u.useCallback((function(){var e;void 0!==(null===(e=h.current)||void 0===e?void 0:e.offsetWidth)&&i(h.current.offsetWidth)}),[h.current])),u.useLayoutEffect((function(){return function(){return i(0)}}),[h]);var m=e.settings,x=e.setSettingValue,y=e.manga,_=e.chapter,A=e.chapters,W=e.curPage,M=e.scrollToPage,z=e.openNextChapter,H=e.retrievingNextChapter,V=R(),X=u.useMemo((function(){return new Set(A.map((function(e){return e.scanlator}))).size>1}),[A]),B=o(u.useState(m.staticNav||g),2),F=B[0],Y=B[1],U=o(u.useState(!0),2),K=U[0],q=U[1],J=o(u.useState(m.staticNav||g),2),ee=J[0],re=J[1],ie=o(u.useState(0),2),ae=ie[0],oe=ie[1],ue=o(u.useState(null==v||v),2),le=ue[0],ce=ue[1],se=H,de=function(e){Y(e),re(e)},pe=function(){var e=window.pageYOffset;Math.abs(e-ae)>20&&(re(e>ae),oe(e))};return u.useEffect((function(){K&&de(m.staticNav)}),[m.staticNav]),u.useEffect((function(){window.addEventListener("scroll",pe);var e=document.querySelector("#root"),n=document.querySelector("#appMainContainer");return e.style.display="flex",e.style.flexDirection="column",n.style.display="none",function(){e.style.display="block",n.style.display="block",window.removeEventListener("scroll",pe)}}),[pe]),c.jsxs(We,{children:[c.jsx(k,{direction:s("right","left"),in:F,timeout:200,appear:!1,mountOnEnter:!0,unmountOnExit:!0,children:c.jsxs(Me,{ref:h,children:[c.jsxs("header",{children:[!m.staticNav&&c.jsx(P,{title:t("reader.button.close_menu"),children:c.jsx(S,{edge:"start",color:"inherit","aria-label":"menu",onClick:function(){return de(!1)},size:"large",children:s(c.jsx(me,{}),c.jsx(Ce,{}))})}),c.jsx(L,{variant:"h6",component:"h1",sx:{textOverflow:"ellipsis",overflow:"hidden",py:1,flexGrow:1},children:_.name}),c.jsx(P,{title:t("reader.button.exit"),children:c.jsx(S,{edge:"start",color:"inherit","aria-label":"menu",onClick:V,size:"large",sx:{mr:-1},children:c.jsx(fe,{})})})]}),c.jsxs(O,{ContainerComponent:"div",sx:{"& span":{fontWeight:"bold"}},children:[c.jsx(T,{primary:t("reader.settings.title.reader_settings")}),c.jsxs(S,{edge:"start",color:"inherit","aria-label":"menu",disableRipple:!0,disableFocusRipple:!0,onClick:function(){return ce(!le)},size:"large",children:[le&&c.jsx(De,{}),!le&&c.jsx(Pe,{})]})]}),c.jsx(ne,{in:le,timeout:"auto",unmountOnExit:!0,children:c.jsx(G,{setSettingValue:function(e,n,t){q("staticNav"!==e),x(e,n,t)},staticNav:m.staticNav,showPageNumber:m.showPageNumber,loadNextOnEnding:m.loadNextOnEnding,skipDupChapters:m.skipDupChapters,fitPageToWindow:m.fitPageToWindow,scalePage:m.scalePage,readerType:m.readerType,offsetFirstPage:m.offsetFirstPage,readerWidth:m.readerWidth})}),c.jsx(D,{sx:{my:1,mx:2}}),c.jsxs(ze,{children:[c.jsxs(He,{children:[c.jsx("span",{children:t("reader.page_info.label.currently_on_page")}),c.jsx(te,{size:"small",sx:{mx:.5},disabled:se||-1===_.pageCount,children:c.jsx(Z,{value:_.pageCount>-1?"".concat(W):"",displayEmpty:!0,onChange:function(e){var n=e.target.value;M(Number(n))},children:Array(Math.max(0,_.pageCount)).fill(1).map((function(e,n){return c.jsx(I,{value:n,children:n+1},"Page#".concat(n))}))})}),c.jsx("span",{children:t("reader.page_info.label.of_max_pages",{maxPages:_.pageCount})})]}),c.jsxs(Ve,{children:[c.jsx(P,{title:t("reader.button.previous_chapter"),children:c.jsx(S,{sx:{gridArea:"pre"},disabled:se||_.sourceOrder<=1,onClick:function(){return z(Q.PREVIOUS)},children:s(c.jsx(me,{}),c.jsx(Ce,{}))})}),c.jsx(te,{sx:{gridArea:"current"},size:"small",disabled:se||_.sourceOrder<1,children:c.jsx(Z,{value:_.sourceOrder>=1?"".concat(_.sourceOrder):"",displayEmpty:!0,onChange:function(e){var n=e.target.value;d("/manga/".concat(y.id,"/chapter/").concat(n),{replace:!0,state:{prevDrawerOpen:F,prevSettingsCollapseOpen:le}})},children:A.map((function(e){var n=e.id,t=e.sourceOrder,r=e.name,i=e.chapterNumber,a=e.scanlator;return c.jsx(I,{value:t,children:"#".concat(i).concat(X&&null!=a?" (".concat(a,")"):""," | ").concat(r)},n)}))})}),c.jsx(P,{title:t("reader.button.next_chapter"),children:c.jsx(S,{sx:{gridArea:"next"},disabled:se||_.sourceOrder<1||_.sourceOrder>=y.chapters.totalCount,onClick:function(){return z(Q.NEXT)},children:s(c.jsx(Ce,{}),c.jsx(me,{}))})})]})]})]})}),c.jsx(Ae,{in:!F,children:c.jsx(N,{in:!ee,children:c.jsx(P,{title:t("reader.button.open_menu"),children:c.jsx($,{sx:r({position:"fixed",top:20,left:20,backgroundColor:"rgba(255, 255, 255, 0.75);",color:"black"},a.applyStyles("dark",{backgroundColor:"rgba(0, 0, 0, 0.75);",color:"white"})),size:"large",variant:"contained",onClick:function(){return de(!0)},children:s(c.jsx(Ce,{}),c.jsx(me,{}))})})})})]})}var Be=function(e){return ee.getFromCache(e,Y,"CHAPTER_READER_FIELDS")},Fe=function(e){switch(e){case"ContinuesVertical":case"Webtoon":default:return ce;case"SingleVertical":case"SingleRTL":case"SingleLTR":return oe;case"DoubleVertical":case"DoubleRTL":case"DoubleLTR":return ue;case"ContinuesHorizontalLTR":case"ContinuesHorizontalRTL":return t}},Ye=function(e){return Array.from({length:e},(function(e,n){return n}))},Ue={pageCount:-1,sourceOrder:-1,chapterCount:0,lastPageRead:0,name:"Loading...",manga:{id:-1}}}}}))}();
