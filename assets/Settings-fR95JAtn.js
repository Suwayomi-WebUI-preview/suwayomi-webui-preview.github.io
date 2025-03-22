import{c as a,j as s,u as p,f as u,h as g,r as m,w as v,a_ as i,A as r,aL as t,aM as c,a$ as b,b0 as y,b1 as I,b2 as M,b3 as S,o,m as C}from"./index-vK5lg1Vd.js";import{S as H}from"./Sync-BIYvYFtY.js";const L=a(s.jsx("path",{d:"m19 1-5 5v11l5-4.5zM1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6m22 13.5V6c-.6-.45-1.25-.75-2-1v13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5v2c1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5z"}),"AutoStories"),R=a(s.jsx("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M14 13v4h-4v-4H7l5-5 5 5z"}),"Backup"),k=a(s.jsx("path",{d:"M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1M7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2M20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1M7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2"}),"Dns"),z=a(s.jsx("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-5 14H4v-4h11zm0-5H4V9h11zm5 5h-4V9h4z"}),"Web"),w=a(s.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteForever"),V=a(s.jsx("path",{d:"M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1m-1 9h-4v-7h4z"}),"Devices"),f=a(s.jsx("path",{d:"M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.2-.64-1.67-.08-.1-.13-.21-.13-.33 0-.28.22-.5.5-.5H16c3.31 0 6-2.69 6-6 0-4.96-4.49-9-10-9m5.5 11c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m-3-4c-.83 0-1.5-.67-1.5-1.5S13.67 6 14.5 6s1.5.67 1.5 1.5S15.33 9 14.5 9M5 11.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S7.33 13 6.5 13 5 12.33 5 11.5m6-4c0 .83-.67 1.5-1.5 1.5S8 8.33 8 7.5 8.67 6 9.5 6s1.5.67 1.5 1.5"}),"Palette");function B(){const{t:e}=p(),{setTitle:n,setAction:l}=u();g.useLayoutEffect(()=>(n(e("settings.title")),l(null),()=>{n(""),l(null)}),[e]);const[h,{loading:d}]=m.useClearServerCache(),x=async()=>{try{await h(),o(e("settings.clear_cache.label.success"),"success")}catch(j){o(e("settings.clear_cache.label.failure"),"error",C(j))}};return s.jsxs(v,{sx:{padding:0},children:[s.jsxs(i,{to:r.settings.childRoutes.appearance.path,children:[s.jsx(t,{children:s.jsx(f,{})}),s.jsx(c,{primary:e("settings.appearance.title")})]}),s.jsxs(i,{to:r.settings.childRoutes.reader.path,children:[s.jsx(t,{children:s.jsx(L,{})}),s.jsx(c,{primary:e("reader.settings.title.reader")})]}),s.jsxs(i,{to:r.settings.childRoutes.library.path,children:[s.jsx(t,{children:s.jsx(b,{})}),s.jsx(c,{primary:e("library.title")})]}),s.jsxs(i,{to:r.settings.childRoutes.download.path,children:[s.jsx(t,{children:s.jsx(y,{})}),s.jsx(c,{primary:e("download.title.download")})]}),s.jsxs(i,{to:r.settings.childRoutes.tracking.path,children:[s.jsx(t,{children:s.jsx(H,{})}),s.jsx(c,{primary:e("tracking.title")})]}),s.jsxs(i,{to:r.settings.childRoutes.backup.path,children:[s.jsx(t,{children:s.jsx(R,{})}),s.jsx(c,{primary:e("settings.backup.title")})]}),s.jsxs(I,{disabled:d,onClick:x,children:[s.jsx(t,{children:s.jsx(w,{})}),s.jsx(c,{primary:e("settings.clear_cache.label.title"),secondary:e("settings.clear_cache.label.description")})]}),s.jsxs(i,{to:r.settings.childRoutes.browse.path,children:[s.jsx(t,{children:s.jsx(M,{})}),s.jsx(c,{primary:e("global.label.browse")})]}),s.jsxs(i,{to:r.settings.childRoutes.history.path,children:[s.jsx(t,{children:s.jsx(S,{})}),s.jsx(c,{primary:e("history.title")})]}),s.jsxs(i,{to:r.settings.childRoutes.device.path,children:[s.jsx(t,{children:s.jsx(V,{})}),s.jsx(c,{primary:e("settings.device.title.device")})]}),s.jsxs(i,{to:r.settings.childRoutes.webui.path,children:[s.jsx(t,{children:s.jsx(z,{})}),s.jsx(c,{primary:e("settings.webui.title.webui")})]}),s.jsxs(i,{to:r.settings.childRoutes.server.path,children:[s.jsx(t,{children:s.jsx(k,{})}),s.jsx(c,{primary:e("settings.server.title.server")})]})]})}export{B as Settings};
