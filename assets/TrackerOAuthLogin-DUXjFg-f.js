import{u as c,e as l,a as g,c as u,m as k}from"./index-DUjAQRrY.js";const p=()=>{var t;const{t:a}=c(),n=l(),o=new URL(window.location.href),{trackerId:e,trackerName:r}=JSON.parse((t=o.searchParams.get("state"))!=null?t:"{}"),[s,{loading:i}]=g.useLoginToTrackerOauth();return u.useEffect(()=>{(async()=>{try{await s({variables:{input:{callbackUrl:window.location.href,trackerId:e}}})}catch(f){k(a("tracking.action.login.label.failure",{name:r}),"error")}n("/settings/trackingSettings",{replace:!0})})()},[e]),i?a("tracking.action.login.label.progress",{name:r}):null};export{p as TrackerOAuthLogin};