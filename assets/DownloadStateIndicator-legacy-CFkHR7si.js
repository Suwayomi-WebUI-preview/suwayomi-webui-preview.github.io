System.register(["./index-legacy-DrnYub19.js"],(function(e,t){"use strict";var n,o,a,s,r,i;return{setters:[function(e){n=e.u,o=e.w,a=e.j,s=e.B,r=e.aa,i=e.T}],execute:function(){var t={DOWNLOADING:"download.state.label.downloading",ERROR:"download.state.label.error",FINISHED:"download.state.label.finished",QUEUED:"download.state.label.queued"};e("D",(function(e){var l=e.download,d=n().t,c=l.state===o.Downloading,u=0!==l.progress;return a.jsxs(s,{sx:{position:"relative",display:"inline-flex",width:"50px",justifyContent:"center"},children:[c&&a.jsx(r,{variant:"determinate",value:100*l.progress}),a.jsx(s,{sx:{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},children:a.jsx(i,{variant:"caption",component:"div",sx:{color:"text.secondary"},children:a.jsxs(a.Fragment,{children:[(c||u)&&"".concat(Math.round(100*l.progress),"%"),!c&&!u&&d(t[l.state])]})})})]})}))}}}));
