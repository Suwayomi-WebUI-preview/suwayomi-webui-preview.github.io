const r=e=>e.toLowerCase().trim(),s=e=>r(e).normalize("NFKC").replace(/[^\p{L}\p{N}]+/gu," ").trim(),a=(e,n="")=>e.split(n).reverse().join(n);export{r as b,s as e,a as r};
