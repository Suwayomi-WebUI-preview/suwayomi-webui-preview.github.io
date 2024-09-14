import{a as n,ca as S,bj as E,bW as k,m as A,H as D}from"./index-Dw9heavt.js";import{C as p}from"./Chapters-CBQhTc1Q.js";const v={download:{action:{single:"chapter.action.download.add.label.action",selected:"chapter.action.download.add.button.selected"},success:"chapter.action.download.add.label.success",error:"chapter.action.download.add.label.error"},delete:{action:{single:"chapter.action.download.delete.label.action",selected:"chapter.action.download.delete.button.selected"},success:"chapter.action.download.delete.label.success",error:"chapter.action.download.delete.label.error"},mark_as_read:{action:{single:"chapter.action.mark_as_read.add.label.action.current",selected:"chapter.action.mark_as_read.add.button.selected"},success:"chapter.action.mark_as_read.add.label.success",error:"chapter.action.mark_as_read.add.label.error"},mark_as_unread:{action:{single:"chapter.action.mark_as_read.remove.label.action",selected:"chapter.action.mark_as_read.remove.button.selected"},success:"chapter.action.mark_as_read.remove.label.success",error:"chapter.action.mark_as_read.remove.label.error"},remove_from_library:{action:{single:"manga.action.library.remove.label.action",selected:"manga.action.library.remove.button.selected"},success:"manga.action.library.remove.label.success",error:"manga.action.library.remove.label.error"},change_categories:{action:{single:"manga.action.category.label.action",selected:"manga.action.category.button.selected"},success:"manga.action.category.label.success",error:"manga.action.category.label.error"},migrate:{action:{single:"global.button.migrate",selected:"global.button.migrate"},success:"manga.action.migrate.label.success",error:"manga.action.migrate.label.error"},track:{action:{single:"manga.action.track.add.label.action",selected:"manga.action.track.add.label.action"},success:"manga.action.track.add.label.success",error:"manga.action.track.add.label.error"}};class t{static getIds(e){return e.map(a=>a.id)}static getFromCache(e,a=S,r="MANGA_BASE_FIELDS"){return n.graphQLClient.client.cache.readFragment({id:n.graphQLClient.client.cache.identify({__typename:"MangaType",id:e}),fragment:a,fragmentName:r})}static isNotDownloaded({downloadCount:e}){return e===0}static getNotDownloaded(e){return e.filter(t.isNotDownloaded)}static isFullyDownloaded({downloadCount:e,chapters:{totalCount:a}}){return e===a}static getFullyDownloaded(e){return e.filter(t.isFullyDownloaded)}static isPartiallyDownloaded(e){return!t.isNotDownloaded(e)&&!t.isFullyDownloaded(e)}static getPartiallyDownloaded(e){return e.filter(t.isPartiallyDownloaded)}static isUnread({unreadCount:e,chapters:{totalCount:a}}){return e===a}static getUnread(e){return e.filter(t.isUnread)}static isFullyRead({unreadCount:e}){return e===0}static getFullyRead(e){return e.filter(t.isFullyRead)}static isPartiallyRead(e){return!t.isUnread(e)&&!t.isFullyRead(e)}static getPartiallyRead(e){return e.filter(t.isPartiallyRead)}static getThumbnailUrl(e){const a=e.thumbnailUrl?"".concat(e.thumbnailUrl,"?fetchedAt=").concat(e.thumbnailUrlLastFetched):"";return n.getValidImgUrlFor(a)}static getDuplicateLibraryMangas(e){return n.getMangas(E,{condition:{inLibrary:!0},filter:{title:{likeInsensitive:e}}})}static async getChapterIdsWithState(e,a){const{data:r}=await n.getMangasChapterIdsWithState(e,a).response;return r.chapters.nodes}static async downloadChapters(e,{size:a,onlyUnread:r,downloadAhead:c=!1}={}){const[o,s]=await Promise.all([t.getChapterIdsWithState(e,{isRead:r?!1:void 0,isDownloaded:!1}),c?t.getChapterIdsWithState(e,{isRead:!1,isDownloaded:!0}):[]]),i=e.map(d=>[String(d),a]),u=Object.groupBy(o,({mangaId:d})=>d),l=Object.groupBy(s,({mangaId:d})=>d),w=Object.entries(l).map(([d,g=[]])=>{const h=Math.max(0,(a!=null?a:g.length)-g.length);return[d,c?h:a]}),b=Object.entries(Object.fromEntries([...i,...w])).map(([d,g])=>{var C;const h=(C=u[Number(d)])!=null?C:[];if(!h.length)return[];if(g===void 0)return h;const R=p.removeDuplicates(h[0],h).slice(0,g);return p.addDuplicates(R,h)}).flat();return b.length?p.download(p.getIds(b)):Promise.resolve()}static async deleteChapters(e){const a=await t.getChapterIdsWithState(e,{isDownloaded:!0});return p.delete(p.getIds(a))}static async markAsRead(e,a=!1){const r=await t.getChapterIdsWithState(e,{isRead:!1});return p.markAsRead(r,a,e.length===1?e[0]:void 0)}static async markAsUnread(e){const a=await t.getChapterIdsWithState(e,{isRead:!0});return p.markAsUnread(p.getIds(a))}static async removeFromLibrary(e){const{removeMangaFromCategories:a}=await k();return t.executeAction("remove_from_library",e.length,()=>n.updateMangas(e,{updateMangas:{inLibrary:!1},updateMangasCategories:a?{clearCategories:!0}:void 0}).response)}static async changeCategories(e,a){return t.executeAction("change_categories",e.length,()=>n.updateMangasCategories(e,a).response)}static migrateChapters(e,a,r){var l,w;if(!a.chapters||!((l=r.fetchChapters)!=null&&l.chapters))throw new Error("Chapters are missing");const c=a.chapters.nodes,o=(w=r.fetchChapters)==null?void 0:w.chapters,s=p.getMatchingChapterNumberChapters(c,o),i=[],u=[];return s.forEach(([m,b])=>{const{isRead:d,isBookmarked:g}=m;d&&i.push(b.id),g&&u.push(b.id)}),{copy:()=>[i.length&&n.updateChapters(i,{isRead:!0}).response,u.length&&n.updateChapters(u,{isBookmarked:!0}).response].filter(m=>!!m),cleanup:()=>{var m,b;return e==="migrate"?[n.deleteDownloadedChapters(p.getIds(p.getDownloaded((b=(m=a.chapters)==null?void 0:m.nodes)!=null?b:[]))).response]:[]}}}static migrateTracking(e,a,r){if(!a.trackRecords)throw new Error("TrackRecords of manga to migrate are missing");if(!r.trackRecords)throw new Error("TrackRecords of manga to migrate to are missing");const c=a.trackRecords.nodes.filter(o=>{var s;return(s=r.trackRecords)==null?void 0:s.nodes.every(i=>o.remoteId!==i.remoteId)});return{copy:()=>c.map(o=>n.bindTracker(r.id,o.trackerId,o.remoteId).response),cleanup:()=>{var o,s;return e==="migrate"?(s=(o=a.trackRecords)==null?void 0:o.nodes.map(i=>n.unbindTracker(i.id).response))!=null?s:[]:[]}}}static migrateManga(e,a,r,c,o){if(!(a!=null&&a.categories))throw new Error("Categories are missing");return{copy:()=>{var s;return[n.updateManga(r.id,{updateManga:{inLibrary:!0},updateMangaCategories:c?{addToCategories:(s=a.categories)==null?void 0:s.nodes.map(i=>i.id)}:void 0}).response]},cleanup:()=>e==="migrate"?[n.updateManga(a.id,{updateManga:{inLibrary:!1},updateMangaCategories:o?{clearCategories:!0}:void 0}).response]:[]}}static async migrate(e,a,{mode:r,migrateChapters:c,migrateCategories:o,migrateTracking:s,deleteChapters:i}){return t.executeAction("migrate",1,async()=>{var d,g;const[{data:u},{data:l},{removeMangaFromCategories:w}]=await Promise.all([n.getMangaToMigrate(e,{migrateChapters:c,migrateCategories:o,migrateTracking:s,deleteChapters:i}).response,n.getMangaToMigrateToFetch(a,{migrateChapters:c,migrateCategories:o,migrateTracking:s,apolloOptions:{errorPolicy:"all"}}).response,k()]);if(!u.manga||!((d=l==null?void 0:l.fetchManga)!=null&&d.manga))throw new Error("Mangas::migrate: missing manga data");if(c&&!u.manga.chapters)throw new Error("Mangas::migrate: missing chapters data");(g=l.fetchChapters)!=null&&g.chapters||(l.fetchChapters={chapters:[]});const m=async(h,...y)=>Promise.all(y.filter(([f])=>f).map(([,f])=>f[h]()).flat());await(async(...h)=>{const y=["copy","cleanup"];for(const f of y)await m(f,...h)})([c,t.migrateChapters(r,u.manga,l)],[s,t.migrateTracking(r,u.manga,l.fetchManga.manga)],[!0,t.migrateManga(r,u.manga,l.fetchManga.manga,!!o,w)])})}static async executeAction(e,a,r){try{await r(),A(D(v[e].success,{count:a}),"success")}catch(c){throw A(D(v[e].error,{count:a}),"error"),c}}static async performAction(e,a,{wasManuallyMarkedAsRead:r,changeCategoriesPatch:c,mangaIdToMigrateTo:o,downloadAhead:s,onlyUnread:i,size:u,...l}){switch(e){case"download":return t.downloadChapters(a,{downloadAhead:s,onlyUnread:i,size:u});case"delete":return t.deleteChapters(a);case"mark_as_read":return t.markAsRead(a,r);case"mark_as_unread":return t.markAsUnread(a);case"remove_from_library":return t.removeFromLibrary(a);case"change_categories":return t.changeCategories(a,c);case"migrate":return t.migrate(a[0],o,l);default:throw new Error('Mangas::performAction: unknown action "'.concat(e,'"'))}}}export{t as M,v as a};