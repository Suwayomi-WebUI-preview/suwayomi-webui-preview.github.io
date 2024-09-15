import{p as w,a as c,cb as E,bk as U,bX as A,m as D,J as v}from"./index-lMCVQ9L9.js";import{C as p}from"./Chapters-CVHYugbV.js";const _={[w.Cancelled]:"manga.status.cancelled",[w.Completed]:"manga.status.completed",[w.Licensed]:"manga.status.licensed",[w.Ongoing]:"manga.status.ongoing",[w.OnHiatus]:"manga.status.hiatus",[w.PublishingFinished]:"manga.status.publishing_finished",[w.Unknown]:"manga.status.unknown"},R={download:{action:{single:"chapter.action.download.add.label.action",selected:"chapter.action.download.add.button.selected"},success:"chapter.action.download.add.label.success",error:"chapter.action.download.add.label.error"},delete:{action:{single:"chapter.action.download.delete.label.action",selected:"chapter.action.download.delete.button.selected"},success:"chapter.action.download.delete.label.success",error:"chapter.action.download.delete.label.error"},mark_as_read:{action:{single:"chapter.action.mark_as_read.add.label.action.current",selected:"chapter.action.mark_as_read.add.button.selected"},success:"chapter.action.mark_as_read.add.label.success",error:"chapter.action.mark_as_read.add.label.error"},mark_as_unread:{action:{single:"chapter.action.mark_as_read.remove.label.action",selected:"chapter.action.mark_as_read.remove.button.selected"},success:"chapter.action.mark_as_read.remove.label.success",error:"chapter.action.mark_as_read.remove.label.error"},remove_from_library:{action:{single:"manga.action.library.remove.label.action",selected:"manga.action.library.remove.button.selected"},success:"manga.action.library.remove.label.success",error:"manga.action.library.remove.label.error"},change_categories:{action:{single:"manga.action.category.label.action",selected:"manga.action.category.button.selected"},success:"manga.action.category.label.success",error:"manga.action.category.label.error"},migrate:{action:{single:"global.button.migrate",selected:"global.button.migrate"},success:"manga.action.migrate.label.success",error:"manga.action.migrate.label.error"},track:{action:{single:"manga.action.track.add.label.action",selected:"manga.action.track.add.label.action"},success:"manga.action.track.add.label.success",error:"manga.action.track.add.label.error"}};class t{static getIds(e){return e.map(a=>a.id)}static getFromCache(e,a=E,r="MANGA_BASE_FIELDS"){return c.graphQLClient.client.cache.readFragment({id:c.graphQLClient.client.cache.identify({__typename:"MangaType",id:e}),fragment:a,fragmentName:r})}static isNotDownloaded({downloadCount:e}){return e===0}static getNotDownloaded(e){return e.filter(t.isNotDownloaded)}static isFullyDownloaded({downloadCount:e,chapters:{totalCount:a}}){return e===a}static getFullyDownloaded(e){return e.filter(t.isFullyDownloaded)}static isPartiallyDownloaded(e){return!t.isNotDownloaded(e)&&!t.isFullyDownloaded(e)}static getPartiallyDownloaded(e){return e.filter(t.isPartiallyDownloaded)}static isUnread({unreadCount:e,chapters:{totalCount:a}}){return e===a}static getUnread(e){return e.filter(t.isUnread)}static isFullyRead({unreadCount:e}){return e===0}static getFullyRead(e){return e.filter(t.isFullyRead)}static isPartiallyRead(e){return!t.isUnread(e)&&!t.isFullyRead(e)}static getPartiallyRead(e){return e.filter(t.isPartiallyRead)}static getThumbnailUrl(e){const a=e.thumbnailUrl?"".concat(e.thumbnailUrl,"?fetchedAt=").concat(e.thumbnailUrlLastFetched):"";return c.getValidImgUrlFor(a)}static getDuplicateLibraryMangas(e){return c.getMangas(U,{condition:{inLibrary:!0},filter:{title:{likeInsensitive:e}}})}static async getChapterIdsWithState(e,a){const{data:r}=await c.getMangasChapterIdsWithState(e,a).response;return r.chapters.nodes}static async downloadChapters(e,{size:a,onlyUnread:r,downloadAhead:n=!1}={}){const[s,o]=await Promise.all([t.getChapterIdsWithState(e,{isRead:r?!1:void 0,isDownloaded:!1}),n?t.getChapterIdsWithState(e,{isRead:!1,isDownloaded:!0}):[]]),i=e.map(d=>[String(d),a]),u=Object.groupBy(s,({mangaId:d})=>d),l=Object.groupBy(o,({mangaId:d})=>d),f=Object.entries(l).map(([d,g=[]])=>{const h=Math.max(0,(a!=null?a:g.length)-g.length);return[d,n?h:a]}),b=Object.entries(Object.fromEntries([...i,...f])).map(([d,g])=>{var k;const h=(k=u[Number(d)])!=null?k:[];if(!h.length)return[];if(g===void 0)return h;const S=p.removeDuplicates(h[0],h).slice(0,g);return p.addDuplicates(S,h)}).flat();return b.length?p.download(p.getIds(b)):Promise.resolve()}static async deleteChapters(e){const a=await t.getChapterIdsWithState(e,{isDownloaded:!0});return p.delete(p.getIds(a))}static async markAsRead(e,a=!1){const r=await t.getChapterIdsWithState(e,{isRead:!1});return p.markAsRead(r,a,e.length===1?e[0]:void 0)}static async markAsUnread(e){const a=await t.getChapterIdsWithState(e,{isRead:!0});return p.markAsUnread(p.getIds(a))}static async removeFromLibrary(e){const{removeMangaFromCategories:a}=await A();return t.executeAction("remove_from_library",e.length,()=>c.updateMangas(e,{updateMangas:{inLibrary:!1},updateMangasCategories:a?{clearCategories:!0}:void 0}).response)}static async changeCategories(e,a){return t.executeAction("change_categories",e.length,()=>c.updateMangasCategories(e,a).response)}static migrateChapters(e,a,r){var l,f;if(!a.chapters||!((l=r.fetchChapters)!=null&&l.chapters))throw new Error("Chapters are missing");const n=a.chapters.nodes,s=(f=r.fetchChapters)==null?void 0:f.chapters,o=p.getMatchingChapterNumberChapters(n,s),i=[],u=[];return o.forEach(([m,b])=>{const{isRead:d,isBookmarked:g}=m;d&&i.push(b.id),g&&u.push(b.id)}),{copy:()=>[i.length&&c.updateChapters(i,{isRead:!0}).response,u.length&&c.updateChapters(u,{isBookmarked:!0}).response].filter(m=>!!m),cleanup:()=>{var m,b;return e==="migrate"?[c.deleteDownloadedChapters(p.getIds(p.getDownloaded((b=(m=a.chapters)==null?void 0:m.nodes)!=null?b:[]))).response]:[]}}}static migrateTracking(e,a,r){if(!a.trackRecords)throw new Error("TrackRecords of manga to migrate are missing");if(!r.trackRecords)throw new Error("TrackRecords of manga to migrate to are missing");const n=a.trackRecords.nodes.filter(s=>{var o;return(o=r.trackRecords)==null?void 0:o.nodes.every(i=>s.remoteId!==i.remoteId)});return{copy:()=>n.map(s=>c.bindTracker(r.id,s.trackerId,s.remoteId).response),cleanup:()=>{var s,o;return e==="migrate"?(o=(s=a.trackRecords)==null?void 0:s.nodes.map(i=>c.unbindTracker(i.id).response))!=null?o:[]:[]}}}static migrateManga(e,a,r,n,s){if(!(a!=null&&a.categories))throw new Error("Categories are missing");return{copy:()=>{var o;return[c.updateManga(r.id,{updateManga:{inLibrary:!0},updateMangaCategories:n?{addToCategories:(o=a.categories)==null?void 0:o.nodes.map(i=>i.id)}:void 0}).response]},cleanup:()=>e==="migrate"?[c.updateManga(a.id,{updateManga:{inLibrary:!1},updateMangaCategories:s?{clearCategories:!0}:void 0}).response]:[]}}static async migrate(e,a,{mode:r,migrateChapters:n,migrateCategories:s,migrateTracking:o,deleteChapters:i}){return t.executeAction("migrate",1,async()=>{var d,g;const[{data:u},{data:l},{removeMangaFromCategories:f}]=await Promise.all([c.getMangaToMigrate(e,{migrateChapters:n,migrateCategories:s,migrateTracking:o,deleteChapters:i}).response,c.getMangaToMigrateToFetch(a,{migrateChapters:n,migrateCategories:s,migrateTracking:o,apolloOptions:{errorPolicy:"all"}}).response,A()]);if(!u.manga||!((d=l==null?void 0:l.fetchManga)!=null&&d.manga))throw new Error("Mangas::migrate: missing manga data");if(n&&!u.manga.chapters)throw new Error("Mangas::migrate: missing chapters data");(g=l.fetchChapters)!=null&&g.chapters||(l.fetchChapters={chapters:[]});const m=async(h,...C)=>Promise.all(C.filter(([y])=>y).map(([,y])=>y[h]()).flat());await(async(...h)=>{const C=["copy","cleanup"];for(const y of C)await m(y,...h)})([n,t.migrateChapters(r,u.manga,l)],[o,t.migrateTracking(r,u.manga,l.fetchManga.manga)],[!0,t.migrateManga(r,u.manga,l.fetchManga.manga,!!s,f)])})}static async executeAction(e,a,r){try{await r(),D(v(R[e].success,{count:a}),"success")}catch(n){throw D(v(R[e].error,{count:a}),"error"),n}}static async performAction(e,a,{wasManuallyMarkedAsRead:r,changeCategoriesPatch:n,mangaIdToMigrateTo:s,downloadAhead:o,onlyUnread:i,size:u,...l}){switch(e){case"download":return t.downloadChapters(a,{downloadAhead:o,onlyUnread:i,size:u});case"delete":return t.deleteChapters(a);case"mark_as_read":return t.markAsRead(a,r);case"mark_as_unread":return t.markAsUnread(a);case"remove_from_library":return t.removeFromLibrary(a);case"change_categories":return t.changeCategories(a,n);case"migrate":return t.migrate(a[0],s,l);default:throw new Error('Mangas::performAction: unknown action "'.concat(e,'"'))}}}export{t as M,R as a,_ as s};
