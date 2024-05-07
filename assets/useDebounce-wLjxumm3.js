import{c as o}from"./index-C2-i4E1A.js";const n=(e,t)=>{const[r,s]=o.useState(e);return o.useEffect(()=>{const u=setTimeout(()=>{s(e)},t);return()=>{clearTimeout(u)}},[e,t]),r};export{n as u};
