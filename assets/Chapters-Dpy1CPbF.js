var b=Object.freeze,E=Object.defineProperty;var g=(d,e)=>b(E(d,"raw",{value:b(e||d.slice())}));import{a as s,bV as y,bj as D,bU as T,n as p,H as h}from"./index-BUTliqEp.js";var u=(d=>(d[d.PREV=-1]="PREV",d[d.NEXT=1]="NEXT",d))(u||{});const f={download:{action:{single:"chapter.action.download.add.label.action",selected:"chapter.action.download.add.button.selected"},success:"chapter.action.download.add.label.success",error:"chapter.action.download.add.label.error"},delete:{action:{single:"chapter.action.download.delete.label.action",selected:"chapter.action.download.delete.button.selected"},success:"chapter.action.download.delete.label.success",error:"chapter.action.download.delete.label.error"},bookmark:{action:{single:"chapter.action.bookmark.add.label.action",selected:"chapter.action.bookmark.add.button.selected"},success:"chapter.action.bookmark.add.label.success",error:"chapter.action.bookmark.add.label.error"},unbookmark:{action:{single:"chapter.action.bookmark.remove.label.action",selected:"chapter.action.bookmark.remove.button.selected"},success:"chapter.action.bookmark.remove.label.success",error:"chapter.action.bookmark.remove.label.error"},mark_as_read:{action:{single:"chapter.action.mark_as_read.add.label.action.current",selected:"chapter.action.mark_as_read.add.button.selected"},success:"chapter.action.mark_as_read.add.label.success",error:"chapter.action.mark_as_read.add.label.error"},mark_as_unread:{action:{single:"chapter.action.mark_as_read.remove.label.action",selected:"chapter.action.mark_as_read.remove.button.selected"},success:"chapter.action.mark_as_read.remove.label.success",error:"chapter.action.mark_as_read.remove.label.error"}};var w;class t{static getIds(e){return e.map(a=>a.id)}static getFromCache(e,a=y,r="FULL_CHAPTER_FIELDS"){return s.graphQLClient.client.cache.readFragment({id:s.graphQLClient.client.cache.identify({__typename:"ChapterType",id:e}),fragment:a,fragmentName:r})}static isDownloading(e){return!!s.graphQLClient.client.cache.readFragment({id:s.graphQLClient.client.cache.identify({__typename:"DownloadType",chapter:{__ref:s.graphQLClient.client.cache.identify({__typename:"ChapterType",id:e})}}),fragment:D(w||(w=g(["\n                fragment CHAPTER_DOWNLOAD_QUEUE_CHECK on ChapterType {\n                    id\n                }\n            "]))),fragmentName:"CHAPTER_DOWNLOAD_QUEUE_CHECK"})}static isDownloaded({isDownloaded:e}){return e}static getDownloaded(e){return e.filter(t.isDownloaded)}static isDeletable({isBookmarked:e,...a},r=!1){return t.isDownloaded(a)&&(!e||r)}static getDeletable(e,a){return e.filter(r=>t.isDeletable(r,a))}static isBookmarked({isBookmarked:e}){return e}static getBookmarked(e){return e.filter(t.isBookmarked)}static getNonBookmarked(e){return e.filter(a=>!t.isBookmarked(a))}static isRead({isRead:e}){return e}static getRead(e){return e.filter(t.isRead)}static getNonRead(e){return e.filter(a=>!t.isRead(a))}static getMatchingChapterNumberChapters(e,a){return e.map(r=>{const o=a.find(n=>r.chapterNumber===n.chapterNumber);return o?[r,o]:null}).filter(r=>r!==null)}static async download(e){return t.executeAction("download",e.length,()=>s.addChaptersToDownloadQueue(e).response)}static async delete(e){return t.executeAction("delete",e.length,()=>s.deleteDownloadedChapters(e).response)}static async markAsRead(e,a=!1,r){const{deleteChaptersManuallyMarkedRead:o,deleteChaptersWithBookmark:n,updateProgressManualMarkRead:c}=await T(),i=o&&a?t.getIds(t.getDeletable(e,n)):[];return t.executeAction("mark_as_read",e.length,()=>s.updateChapters(t.getIds(e),{isRead:!0,lastPageRead:0,chapterIdsToDelete:i,trackProgressMangaId:c&&a?r:void 0}).response)}static async markAsUnread(e){return t.executeAction("mark_as_unread",e.length,()=>s.updateChapters(e,{isRead:!1}).response)}static async bookmark(e){return t.executeAction("bookmark",e.length,()=>s.updateChapters(e,{isBookmarked:!0}).response)}static async unBookmark(e){return t.executeAction("unbookmark",e.length,()=>s.updateChapters(e,{isBookmarked:!1}).response)}static async executeAction(e,a,r){try{await r(),p(h(f[e].success,{count:a}),"success")}catch(o){throw p(h(f[e].error,{count:a}),"error"),o}}static async performAction(e,a,{wasManuallyMarkedAsRead:r,trackProgressMangaId:o,chapters:n}){switch(e){case"download":return t.download(a);case"delete":return t.delete(a);case"mark_as_read":return t.markAsRead(n,r,o);case"mark_as_unread":return t.markAsUnread(a);case"bookmark":return t.bookmark(a);case"unbookmark":return t.unBookmark(a);default:throw new Error('Chapters::performAction: unknown action "'.concat(e,'"'))}}static addDuplicates(e,a){const r=Object.groupBy(a,({chapterNumber:o})=>o);return e.map(o=>{var n;return(n=r[o.chapterNumber])!=null?n:[o]}).flat()}static removeDuplicates(e,a){const r=Object.groupBy(a,({chapterNumber:n})=>n),o=Object.values(r).map(n=>{var c,i;return(i=(c=n.find(l=>l.id===e.id))!=null?c:n.findLast(l=>l.scanlator===e.scanlator))!=null?i:n.slice(-1)[0]});return a.map(({id:n})=>o.find(c=>c.id===n)).filter(n=>!!n)}static getNextChapter(e,a,{offset:r=u.NEXT,...o}={}){const n=t.getNextChapters(e,a,{offset:r,...o}),c=r===u.NEXT,i=c?-1:0,l=c?void 0:1;return n.slice(i,l)[0]}static getNextChapters(e,a,{offset:r=u.NEXT,onlyUnread:o=!1,skipDupe:n=!1}={}){const c=a.findIndex(x=>x.id===e.id),i=r===u.NEXT,l=i?0:c,N=i?c+1:void 0,m=a.slice(l,N),k=(n?t.removeDuplicates(e,m):m).toSpliced(i?-1:0,1);return o?t.getNonRead(k):k}}export{t as C,f as a,u as b};
