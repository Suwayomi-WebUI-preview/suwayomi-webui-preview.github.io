import{n as e,r as t,t as n}from"./rolldown-runtime-hePW80VL.js";import{Ct as r,Dt as i,Ht as a,It as o,Lt as s,Mt as c,Rt as l,Vt as u,bt as d,ht as f,jt as p,l as m,n as h,o as g,p as _,r as v,s as y,vt as b,yt as x,zt as S}from"./Base.types-BZNmOJVT.js";import{t as C}from"./dayjs.min-DCUUuXM3.js";var w=10,T=2;function E(e){return D(e,[])}function D(e,t){switch(typeof e){case`string`:return JSON.stringify(e);case`function`:return e.name?`[function ${e.name}]`:`[function]`;case`object`:return ee(e,t);default:return String(e)}}function ee(e,t){if(e===null)return`null`;if(t.includes(e))return`[Circular]`;let n=[...t,e];if(O(e)){let t=e.toJSON();if(t!==e)return typeof t==`string`?t:D(t,n)}else if(Array.isArray(e))return k(e,n);return te(e,n)}function O(e){return typeof e.toJSON==`function`}function te(e,t){let n=Object.entries(e);return n.length===0?`{}`:t.length>T?`[`+ne(e)+`]`:`{ `+n.map(([e,n])=>e+`: `+D(n,t)).join(`, `)+` }`}function k(e,t){if(e.length===0)return`[]`;if(t.length>T)return`[Array]`;let n=Math.min(w,e.length),r=e.length-n,i=[];for(let r=0;r<n;++r)i.push(D(e[r],t));return r===1?i.push(`... 1 more item`):r>1&&i.push(`... ${r} more items`),`[`+i.join(`, `)+`]`}function ne(e){let t=Object.prototype.toString.call(e).replace(/^\[object /,``).replace(/]$/,``);if(t===`Object`&&typeof e.constructor==`function`){let t=e.constructor.name;if(typeof t==`string`&&t!==``)return t}return t}function re(e,t){return e?.__kind===t}var A=re;function ie(e){return typeof e==`object`&&!!e}function ae(e,t){if(!e)throw Error(t??`Unexpected invariant triggered.`)}var oe=/\r\n|[\n\r]/g;function se(e,t){let n=0,r=1;for(let i of e.body.matchAll(oe)){if(typeof i.index!=`number`&&ae(!1),i.index>=t)break;n=i.index+i[0].length,r+=1}return{line:r,column:t+1-n}}function ce(e){return le(e.source,se(e.source,e.start))}function le(e,t){let n=e.locationOffset.column-1,r=``.padStart(n)+e.body,i=t.line-1,a=e.locationOffset.line-1,o=t.line+a,s=t.line===1?n:0,c=t.column+s,l=`${e.name}:${o}:${c}\n`,u=r.split(/\r\n|[\n\r]/g),d=u[i];if(d.length>120){let e=Math.floor(c/80),t=c%80,n=[];for(let e=0;e<d.length;e+=80)n.push(d.slice(e,e+80));return l+ue([[`${o} |`,n[0]],...n.slice(1,e+1).map(e=>[`|`,e]),[`|`,`^`.padStart(t)],[`|`,n[e+1]]])}return l+ue([[`${o-1} |`,u[i-1]],[`${o} |`,d],[`|`,`^`.padStart(c)],[`${o+1} |`,u[i+1]]])}function ue(e){let t=e.filter(([e,t])=>t!==void 0),n=Math.max(...t.map(([e])=>e.length));return t.map(([e,t])=>e.padStart(n)+(t?` `+t:``)).join(`
`)}var de=class e extends Error{constructor(t,n={}){let{nodes:r,source:i,positions:a,path:o,originalError:s,cause:c,extensions:l}=n,u=`cause`in n;super(t,u||s!=null?{cause:u?c:s}:void 0),this.name=`GraphQLError`,this.path=o??void 0;let d=s??(c instanceof Error?c:void 0);this.originalError=d,this.nodes=fe(Array.isArray(r)?r:r?[r]:void 0);let f=fe(this.nodes?.map(e=>e.loc).filter(e=>e!=null));this.source=i??f?.[0]?.source,this.positions=a??f?.map(e=>e.start),this.locations=a&&i?a.map(e=>se(i,e)):f?.map(e=>se(e.source,e.start));let p=ie(d?.extensions)?d.extensions:void 0;this.extensions=l??p??Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),s?.stack==null?Error.captureStackTrace==null?Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0}):Error.captureStackTrace(this,e):Object.defineProperty(this,"stack",{value:s.stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return`GraphQLError`}toString(){let e=this.message;if(this.nodes)for(let t of this.nodes)t.loc&&(e+=`

`+ce(t.loc));else if(this.source&&this.locations)for(let t of this.locations)e+=`

`+le(this.source,t);return e}toJSON(){let e={message:this.message};return this.locations!=null&&(e.locations=this.locations),this.path!=null&&(e.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(e.extensions=this.extensions),e}};function fe(e){return e===void 0||e.length===0?void 0:e}var pe=class{constructor(e,t,n){this.start=e.start,this.end=t.end,this.startToken=e,this.endToken=t,this.source=n}get[Symbol.toStringTag](){return`Location`}toJSON(){return{start:this.start,end:this.end}}},me=class{constructor(e,t,n,r,i,a){this.kind=e,this.start=t,this.end=n,this.line=r,this.column=i,this.value=a,this.prev=null,this.next=null}get[Symbol.toStringTag](){return`Token`}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}},he={Name:[],Document:[`definitions`],OperationDefinition:[`description`,`name`,`variableDefinitions`,`directives`,`selectionSet`],VariableDefinition:[`description`,`variable`,`type`,`defaultValue`,`directives`],Variable:[`name`],SelectionSet:[`selections`],Field:[`alias`,`name`,`arguments`,`directives`,`selectionSet`],Argument:[`name`,`value`],FragmentArgument:[`name`,`value`],FragmentSpread:[`name`,`arguments`,`directives`],InlineFragment:[`typeCondition`,`directives`,`selectionSet`],FragmentDefinition:[`description`,`name`,`variableDefinitions`,`typeCondition`,`directives`,`selectionSet`],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:[`values`],ObjectValue:[`fields`],ObjectField:[`name`,`value`],Directive:[`name`,`arguments`],NamedType:[`name`],ListType:[`type`],NonNullType:[`type`],SchemaDefinition:[`description`,`directives`,`operationTypes`],OperationTypeDefinition:[`type`],ScalarTypeDefinition:[`description`,`name`,`directives`],ObjectTypeDefinition:[`description`,`name`,`interfaces`,`directives`,`fields`],FieldDefinition:[`description`,`name`,`arguments`,`type`,`directives`],InputValueDefinition:[`description`,`name`,`type`,`defaultValue`,`directives`],InterfaceTypeDefinition:[`description`,`name`,`interfaces`,`directives`,`fields`],UnionTypeDefinition:[`description`,`name`,`directives`,`types`],EnumTypeDefinition:[`description`,`name`,`directives`,`values`],EnumValueDefinition:[`description`,`name`,`directives`],InputObjectTypeDefinition:[`description`,`name`,`directives`,`fields`],DirectiveDefinition:[`description`,`name`,`arguments`,`directives`,`locations`],SchemaExtension:[`directives`,`operationTypes`],DirectiveExtension:[`name`,`directives`],ScalarTypeExtension:[`name`,`directives`],ObjectTypeExtension:[`name`,`interfaces`,`directives`,`fields`],InterfaceTypeExtension:[`name`,`interfaces`,`directives`,`fields`],UnionTypeExtension:[`name`,`directives`,`types`],EnumTypeExtension:[`name`,`directives`,`values`],InputObjectTypeExtension:[`name`,`directives`,`fields`],TypeCoordinate:[`name`],MemberCoordinate:[`name`,`memberName`],ArgumentCoordinate:[`name`,`fieldName`,`argumentName`],DirectiveCoordinate:[`name`],DirectiveArgumentCoordinate:[`name`,`argumentName`]},ge=new Set(Object.keys(he));function _e(e){let t=e?.kind;return typeof t==`string`&&ge.has(t)}var ve={QUERY:`query`,MUTATION:`mutation`,SUBSCRIPTION:`subscription`},ye=e({ARGUMENT:()=>Te,ARGUMENT_COORDINATE:()=>ft,BOOLEAN:()=>Pe,DIRECTIVE:()=>Be,DIRECTIVE_ARGUMENT_COORDINATE:()=>mt,DIRECTIVE_COORDINATE:()=>pt,DIRECTIVE_DEFINITION:()=>tt,DIRECTIVE_EXTENSION:()=>rt,DOCUMENT:()=>xe,ENUM:()=>Ie,ENUM_TYPE_DEFINITION:()=>Qe,ENUM_TYPE_EXTENSION:()=>ct,ENUM_VALUE_DEFINITION:()=>$e,FIELD:()=>we,FIELD_DEFINITION:()=>Je,FLOAT:()=>Me,FRAGMENT_ARGUMENT:()=>Ee,FRAGMENT_DEFINITION:()=>ke,FRAGMENT_SPREAD:()=>De,INLINE_FRAGMENT:()=>Oe,INPUT_OBJECT_TYPE_DEFINITION:()=>et,INPUT_OBJECT_TYPE_EXTENSION:()=>lt,INPUT_VALUE_DEFINITION:()=>Ye,INT:()=>je,INTERFACE_TYPE_DEFINITION:()=>Xe,INTERFACE_TYPE_EXTENSION:()=>ot,LIST:()=>Le,LIST_TYPE:()=>He,MEMBER_COORDINATE:()=>dt,NAME:()=>be,NAMED_TYPE:()=>Ve,NON_NULL_TYPE:()=>Ue,NULL:()=>Fe,OBJECT:()=>Re,OBJECT_FIELD:()=>ze,OBJECT_TYPE_DEFINITION:()=>qe,OBJECT_TYPE_EXTENSION:()=>at,OPERATION_DEFINITION:()=>j,OPERATION_TYPE_DEFINITION:()=>Ge,SCALAR_TYPE_DEFINITION:()=>Ke,SCALAR_TYPE_EXTENSION:()=>it,SCHEMA_DEFINITION:()=>We,SCHEMA_EXTENSION:()=>nt,SELECTION_SET:()=>Ce,STRING:()=>Ne,TYPE_COORDINATE:()=>ut,UNION_TYPE_DEFINITION:()=>Ze,UNION_TYPE_EXTENSION:()=>st,VARIABLE:()=>Ae,VARIABLE_DEFINITION:()=>Se}),be=`Name`,xe=`Document`,j=`OperationDefinition`,Se=`VariableDefinition`,Ce=`SelectionSet`,we=`Field`,Te=`Argument`,Ee=`FragmentArgument`,De=`FragmentSpread`,Oe=`InlineFragment`,ke=`FragmentDefinition`,Ae=`Variable`,je=`IntValue`,Me=`FloatValue`,Ne=`StringValue`,Pe=`BooleanValue`,Fe=`NullValue`,Ie=`EnumValue`,Le=`ListValue`,Re=`ObjectValue`,ze=`ObjectField`,Be=`Directive`,Ve=`NamedType`,He=`ListType`,Ue=`NonNullType`,We=`SchemaDefinition`,Ge=`OperationTypeDefinition`,Ke=`ScalarTypeDefinition`,qe=`ObjectTypeDefinition`,Je=`FieldDefinition`,Ye=`InputValueDefinition`,Xe=`InterfaceTypeDefinition`,Ze=`UnionTypeDefinition`,Qe=`EnumTypeDefinition`,$e=`EnumValueDefinition`,et=`InputObjectTypeDefinition`,tt=`DirectiveDefinition`,nt=`SchemaExtension`,rt=`DirectiveExtension`,it=`ScalarTypeExtension`,at=`ObjectTypeExtension`,ot=`InterfaceTypeExtension`,st=`UnionTypeExtension`,ct=`EnumTypeExtension`,lt=`InputObjectTypeExtension`,ut=`TypeCoordinate`,dt=`MemberCoordinate`,ft=`ArgumentCoordinate`,pt=`DirectiveCoordinate`,mt=`DirectiveArgumentCoordinate`;function ht(e,t){if(!e)throw Error(t)}function gt(e){return e===9||e===32}function _t(e){return e>=48&&e<=57}function vt(e){return e>=97&&e<=122||e>=65&&e<=90}function yt(e){return vt(e)||e===95}function bt(e){return vt(e)||_t(e)||e===95}function xt(e){let t=2**53-1,n=null,r=-1;for(let i=0;i<e.length;++i){let a=e[i],o=St(a);o!==a.length&&(n??(n=i),r=i,i!==0&&o<t&&(t=o))}return e.map((e,n)=>n===0?e:e.slice(t)).slice(n??0,r+1)}function St(e){let t=0;for(;t<e.length&&gt(e.charCodeAt(t));)++t;return t}function Ct(e,t){let n=e.replaceAll(`"""`,`\\"""`),r=n.split(/\r\n|[\n\r]/g),i=r.length===1,a=r.length>1&&r.slice(1).every(e=>e.length===0||gt(e.charCodeAt(0))),o=n.endsWith(`\\"""`),s=e.endsWith(`"`)&&!o,c=e.endsWith(`\\`),l=s||c,u=!t?.minimize&&(!i||e.length>70||l||a||o),d=``,f=i&&gt(e.charCodeAt(0));return(u&&!f||a)&&(d+=`
`),d+=n,(u||l)&&(d+=`
`),`"""`+d+`"""`}function wt(e){return`"${e.replace(Tt,Et)}"`}var Tt=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function Et(e){return Dt[e.charCodeAt(0)]}var Dt=`\\u0000.\\u0001.\\u0002.\\u0003.\\u0004.\\u0005.\\u0006.\\u0007.\\b.\\t.\\n.\\u000B.\\f.\\r.\\u000E.\\u000F.\\u0010.\\u0011.\\u0012.\\u0013.\\u0014.\\u0015.\\u0016.\\u0017.\\u0018.\\u0019.\\u001A.\\u001B.\\u001C.\\u001D.\\u001E.\\u001F...\\"..........................................................\\\\...................................\\u007F.\\u0080.\\u0081.\\u0082.\\u0083.\\u0084.\\u0085.\\u0086.\\u0087.\\u0088.\\u0089.\\u008A.\\u008B.\\u008C.\\u008D.\\u008E.\\u008F.\\u0090.\\u0091.\\u0092.\\u0093.\\u0094.\\u0095.\\u0096.\\u0097.\\u0098.\\u0099.\\u009A.\\u009B.\\u009C.\\u009D.\\u009E.\\u009F`.split(`.`),Ot=Object.freeze({});function kt(e,t,n=he){let r=new Map;for(let e of Object.values(ye))r.set(e,At(t,e));let i,a=Array.isArray(e),o=[e],s=-1,c=[],l=e,u,d,f=[],p=[];do{s++;let e=s===o.length,m=e&&c.length!==0;if(e){if(u=p.length===0?void 0:f[f.length-1],l=d,d=p.pop(),m){if(a){l=l.slice();let e=0;for(let[t,n]of c){let r=t-e;n===null?(l.splice(r,1),e++):l[r]=n}}else{l={...l};for(let[e,t]of c)l[e]=t}}s=i.index,o=i.keys,c=i.edits,a=i.inArray,i=i.prev}else if(d!=null){if(u=a?s:o[s],l=d[u],l==null)continue;f.push(u)}let h;if(!Array.isArray(l)){if(_e(l)||ht(!1,`Invalid AST Node: ${E(l)}.`),h=(e?r.get(l.kind)?.leave:r.get(l.kind)?.enter)?.call(t,l,u,d,f,p),h===Ot)break;if(h===!1){if(!e){f.pop();continue}}else if(h!==void 0&&(c.push([u,h]),!e)){if(_e(h))l=h;else{f.pop();continue}}}h===void 0&&m&&c.push([u,l]),e?f.pop():(i={inArray:a,index:s,keys:o,edits:c,prev:i},a=Array.isArray(l),o=a?l:n[l.kind]??[],s=-1,c=[],d!=null&&p.push(d),d=l)}while(i!==void 0);return c.length===0?e:c.at(-1)[1]}function At(e,t){let n=e[t];return typeof n==`object`?n:typeof n==`function`?{enter:n,leave:void 0}:{enter:e.enter,leave:e.leave}}function jt(e){return kt(e,Nt)}var Mt=80,Nt={Name:{leave:e=>e.value},Variable:{leave:e=>`$`+e.name},Document:{leave:e=>M(e.definitions,`

`)},OperationDefinition:{leave(e){let t=It(e.variableDefinitions)?N(`(
`,M(e.variableDefinitions,`
`),`
)`):N(`(`,M(e.variableDefinitions,`, `),`)`),n=N(``,e.description,`
`)+M([e.operation,M([e.name,t]),M(e.directives,` `)],` `);return(n===`query`?``:n+` `)+e.selectionSet}},VariableDefinition:{leave:({variable:e,type:t,defaultValue:n,directives:r,description:i})=>N(``,i,`
`)+e+`: `+t+N(` = `,n)+N(` `,M(r,` `))},SelectionSet:{leave:({selections:e})=>Pt(e)},Field:{leave({alias:e,name:t,arguments:n,directives:r,selectionSet:i}){return M([Lt(M([N(``,e,`: `),t],``),n),N(` `,M(r,` `)),N(` `,i)])}},Argument:{leave:({name:e,value:t})=>e+`: `+t},FragmentArgument:{leave:({name:e,value:t})=>e+`: `+t},FragmentSpread:{leave:({name:e,arguments:t,directives:n})=>Lt(`...`+e,t)+N(` `,M(n,` `))},InlineFragment:{leave:({typeCondition:e,directives:t,selectionSet:n})=>M([`...`,N(`on `,e),M(t,` `),n],` `)},FragmentDefinition:{leave:({name:e,typeCondition:t,variableDefinitions:n,directives:r,selectionSet:i,description:a})=>N(``,a,`
`)+`fragment ${e}${N(`(`,M(n,`, `),`)`)} on ${t} ${N(``,M(r,` `),` `)}`+i},IntValue:{leave:({value:e})=>e},FloatValue:{leave:({value:e})=>e},StringValue:{leave:({value:e,block:t})=>t===!0?Ct(e):wt(e)},BooleanValue:{leave:({value:e})=>e?`true`:`false`},NullValue:{leave:()=>`null`},EnumValue:{leave:({value:e})=>e},ListValue:{leave:({values:e})=>{let t=`[`+M(e,`, `)+`]`;return t.length>Mt?`[
`+Ft(M(e,`
`))+`
]`:t}},ObjectValue:{leave:({fields:e})=>{let t=`{ `+M(e,`, `)+` }`;return t.length>Mt?Pt(e):t}},ObjectField:{leave:({name:e,value:t})=>e+`: `+t},Directive:{leave:({name:e,arguments:t})=>`@`+e+N(`(`,M(t,`, `),`)`)},NamedType:{leave:({name:e})=>e},ListType:{leave:({type:e})=>`[`+e+`]`},NonNullType:{leave:({type:e})=>e+`!`},SchemaDefinition:{leave:({description:e,directives:t,operationTypes:n})=>N(``,e,`
`)+M([`schema`,M(t,` `),Pt(n)],` `)},OperationTypeDefinition:{leave:({operation:e,type:t})=>e+`: `+t},ScalarTypeDefinition:{leave:({description:e,name:t,directives:n})=>N(``,e,`
`)+M([`scalar`,t,M(n,` `)],` `)},ObjectTypeDefinition:{leave:({description:e,name:t,interfaces:n,directives:r,fields:i})=>N(``,e,`
`)+M([`type`,t,N(`implements `,M(n,` & `)),M(r,` `),Pt(i)],` `)},FieldDefinition:{leave:({description:e,name:t,arguments:n,type:r,directives:i})=>N(``,e,`
`)+t+(It(n)?N(`(
`,Ft(M(n,`
`)),`
)`):N(`(`,M(n,`, `),`)`))+`: `+r+N(` `,M(i,` `))},InputValueDefinition:{leave:({description:e,name:t,type:n,defaultValue:r,directives:i})=>N(``,e,`
`)+M([t+`: `+n,N(`= `,r),M(i,` `)],` `)},InterfaceTypeDefinition:{leave:({description:e,name:t,interfaces:n,directives:r,fields:i})=>N(``,e,`
`)+M([`interface`,t,N(`implements `,M(n,` & `)),M(r,` `),Pt(i)],` `)},UnionTypeDefinition:{leave:({description:e,name:t,directives:n,types:r})=>N(``,e,`
`)+M([`union`,t,M(n,` `),N(`= `,M(r,` | `))],` `)},EnumTypeDefinition:{leave:({description:e,name:t,directives:n,values:r})=>N(``,e,`
`)+M([`enum`,t,M(n,` `),Pt(r)],` `)},EnumValueDefinition:{leave:({description:e,name:t,directives:n})=>N(``,e,`
`)+M([t,M(n,` `)],` `)},InputObjectTypeDefinition:{leave:({description:e,name:t,directives:n,fields:r})=>N(``,e,`
`)+M([`input`,t,M(n,` `),Pt(r)],` `)},DirectiveDefinition:{leave:({description:e,name:t,arguments:n,directives:r,repeatable:i,locations:a})=>N(``,e,`
`)+`directive @`+t+(It(n)?N(`(
`,Ft(M(n,`
`)),`
)`):N(`(`,M(n,`, `),`)`))+N(` `,M(r,` `))+(i?` repeatable`:``)+` on `+M(a,` | `)},SchemaExtension:{leave:({directives:e,operationTypes:t})=>M([`extend schema`,M(e,` `),Pt(t)],` `)},ScalarTypeExtension:{leave:({name:e,directives:t})=>M([`extend scalar`,e,M(t,` `)],` `)},ObjectTypeExtension:{leave:({name:e,interfaces:t,directives:n,fields:r})=>M([`extend type`,e,N(`implements `,M(t,` & `)),M(n,` `),Pt(r)],` `)},InterfaceTypeExtension:{leave:({name:e,interfaces:t,directives:n,fields:r})=>M([`extend interface`,e,N(`implements `,M(t,` & `)),M(n,` `),Pt(r)],` `)},UnionTypeExtension:{leave:({name:e,directives:t,types:n})=>M([`extend union`,e,M(t,` `),N(`= `,M(n,` | `))],` `)},EnumTypeExtension:{leave:({name:e,directives:t,values:n})=>M([`extend enum`,e,M(t,` `),Pt(n)],` `)},InputObjectTypeExtension:{leave:({name:e,directives:t,fields:n})=>M([`extend input`,e,M(t,` `),Pt(n)],` `)},DirectiveExtension:{leave:({name:e,directives:t})=>M([`extend directive @`+e,M(t,` `)],` `)},TypeCoordinate:{leave:({name:e})=>e},MemberCoordinate:{leave:({name:e,memberName:t})=>M([e,N(`.`,t)])},ArgumentCoordinate:{leave:({name:e,fieldName:t,argumentName:n})=>M([e,N(`.`,t),N(`(`,n,`:)`)])},DirectiveCoordinate:{leave:({name:e})=>M([`@`,e])},DirectiveArgumentCoordinate:{leave:({name:e,argumentName:t})=>M([`@`,e,N(`(`,t,`:)`)])}};function M(e,t=``){return e?.filter(e=>e!==void 0&&e!==``).join(t)??``}function Pt(e){return N(`{
`,Ft(M(e,`
`)),`
}`)}function N(e,t,n=``){return t!=null&&t!==``?e+t+n:``}function Ft(e){return N(`  `,e.replaceAll(`
`,`
  `))}function It(e){return e?.some(e=>e.includes(`
`))??!1}function Lt(e,t){let n=e+N(`(`,M(t,`, `),`)`);return n.length>Mt&&(n=e+N(`(
`,Ft(M(t,`
`)),`
)`)),n}var Rt={QUERY:`QUERY`,MUTATION:`MUTATION`,SUBSCRIPTION:`SUBSCRIPTION`,FIELD:`FIELD`,FRAGMENT_DEFINITION:`FRAGMENT_DEFINITION`,FRAGMENT_SPREAD:`FRAGMENT_SPREAD`,INLINE_FRAGMENT:`INLINE_FRAGMENT`,VARIABLE_DEFINITION:`VARIABLE_DEFINITION`,FRAGMENT_VARIABLE_DEFINITION:`FRAGMENT_VARIABLE_DEFINITION`,SCHEMA:`SCHEMA`,SCALAR:`SCALAR`,OBJECT:`OBJECT`,FIELD_DEFINITION:`FIELD_DEFINITION`,ARGUMENT_DEFINITION:`ARGUMENT_DEFINITION`,INTERFACE:`INTERFACE`,UNION:`UNION`,ENUM:`ENUM`,ENUM_VALUE:`ENUM_VALUE`,INPUT_OBJECT:`INPUT_OBJECT`,INPUT_FIELD_DEFINITION:`INPUT_FIELD_DEFINITION`,DIRECTIVE_DEFINITION:`DIRECTIVE_DEFINITION`};function P(e,t,n){return new de(`Syntax Error: ${n}`,{source:e,positions:[t]})}function zt(){let e;try{let t=globalThis.process;typeof t?.getBuiltinModule==`function`&&(e=t.getBuiltinModule(`node:diagnostics_channel`))}catch{}return e}var Bt=zt(),Vt=Bt?.tracingChannel(`graphql:parse`);Bt?.tracingChannel(`graphql:validate`),Bt?.tracingChannel(`graphql:execute`),Bt?.tracingChannel(`graphql:execute:variableCoercion`),Bt?.tracingChannel(`graphql:execute:rootSelectionSet`),Bt?.tracingChannel(`graphql:subscribe`),Bt?.tracingChannel(`graphql:resolve`);var Ht=[`start`,`end`,`asyncStart`,`asyncEnd`,`error`];function Ut(e){if(e==null)return!1;let t=e.hasSubscribers;if(t!==void 0)return t;for(let t of Ht)if(e[t].hasSubscribers)return!0;return!1}var F={SOF:`<SOF>`,EOF:`<EOF>`,BANG:`!`,DOLLAR:`$`,AMP:`&`,PAREN_L:`(`,PAREN_R:`)`,DOT:`.`,SPREAD:`...`,COLON:`:`,EQUALS:`=`,AT:`@`,BRACKET_L:`[`,BRACKET_R:`]`,BRACE_L:`{`,PIPE:`|`,BRACE_R:`}`,NAME:`Name`,INT:`Int`,FLOAT:`Float`,STRING:`String`,BLOCK_STRING:`BlockString`,COMMENT:`Comment`},Wt=class{constructor(e){let t=new me(F.SOF,0,0,0,0);this.source=e,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return`Lexer`}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let e=this.token;if(e.kind!==F.EOF)do if(e.next)e=e.next;else{let t=Zt(this,e.end);e.next=t,t.prev=e,e=t}while(e.kind===F.COMMENT);return e}};function Gt(e){return e===F.BANG||e===F.DOLLAR||e===F.AMP||e===F.PAREN_L||e===F.PAREN_R||e===F.DOT||e===F.SPREAD||e===F.COLON||e===F.EQUALS||e===F.AT||e===F.BRACKET_L||e===F.BRACKET_R||e===F.BRACE_L||e===F.PIPE||e===F.BRACE_R}function Kt(e){return e>=0&&e<=55295||e>=57344&&e<=1114111}function qt(e,t){return Jt(e.charCodeAt(t))&&Yt(e.charCodeAt(t+1))}function Jt(e){return e>=55296&&e<=56319}function Yt(e){return e>=56320&&e<=57343}function Xt(e,t){let n=e.source.body.codePointAt(t);if(n===void 0)return F.EOF;if(n>=32&&n<=126){let e=String.fromCodePoint(n);return e===`"`?`'"'`:`"${e}"`}return`U+`+n.toString(16).toUpperCase().padStart(4,`0`)}function I(e,t,n,r,i){let a=e.line;return new me(t,n,r,a,1+n-e.lineStart,i)}function Zt(e,t){let n=e.source.body,r=n.length,i=t;for(;i<r;){let t=n.charCodeAt(i);switch(t){case 65279:case 9:case 32:case 44:++i;continue;case 10:++i,++e.line,e.lineStart=i;continue;case 13:n.charCodeAt(i+1)===10?i+=2:++i,++e.line,e.lineStart=i;continue;case 35:return Qt(e,i);case 33:return I(e,F.BANG,i,i+1);case 36:return I(e,F.DOLLAR,i,i+1);case 38:return I(e,F.AMP,i,i+1);case 40:return I(e,F.PAREN_L,i,i+1);case 41:return I(e,F.PAREN_R,i,i+1);case 46:{let t=n.charCodeAt(i+1);if(t===46&&n.charCodeAt(i+2)===46)return I(e,F.SPREAD,i,i+3);if(t===46)throw P(e.source,i,`Unexpected "..", did you mean "..."?`);if(_t(t)){let n=e.source.body.slice(i+1,en(e,i+1,t));throw P(e.source,i,`Invalid number, expected digit before ".", did you mean "0.${n}"?`)}break}case 58:return I(e,F.COLON,i,i+1);case 61:return I(e,F.EQUALS,i,i+1);case 64:return I(e,F.AT,i,i+1);case 91:return I(e,F.BRACKET_L,i,i+1);case 93:return I(e,F.BRACKET_R,i,i+1);case 123:return I(e,F.BRACE_L,i,i+1);case 124:return I(e,F.PIPE,i,i+1);case 125:return I(e,F.BRACE_R,i,i+1);case 34:return n.charCodeAt(i+1)===34&&n.charCodeAt(i+2)===34?cn(e,i):tn(e,i)}if(_t(t)||t===45)return $t(e,i,t);if(yt(t))return ln(e,i);throw P(e.source,i,t===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:Kt(t)||qt(n,i)?`Unexpected character: ${Xt(e,i)}.`:`Invalid character: ${Xt(e,i)}.`)}return I(e,F.EOF,r,r)}function Qt(e,t){let n=e.source.body,r=n.length,i=t+1;for(;i<r;){let e=n.charCodeAt(i);if(e===10||e===13)break;if(Kt(e))++i;else if(qt(n,i))i+=2;else break}return I(e,F.COMMENT,t,i,n.slice(t+1,i))}function $t(e,t,n){let r=e.source.body,i=t,a=n,o=!1;if(a===45&&(a=r.charCodeAt(++i)),a===48){if(a=r.charCodeAt(++i),_t(a))throw P(e.source,i,`Invalid number, unexpected digit after 0: ${Xt(e,i)}.`)}else i=en(e,i,a),a=r.charCodeAt(i);if(a===46&&(o=!0,a=r.charCodeAt(++i),i=en(e,i,a),a=r.charCodeAt(i)),(a===69||a===101)&&(o=!0,a=r.charCodeAt(++i),(a===43||a===45)&&(a=r.charCodeAt(++i)),i=en(e,i,a),a=r.charCodeAt(i)),a===46||yt(a))throw P(e.source,i,`Invalid number, expected digit but got: ${Xt(e,i)}.`);return I(e,o?F.FLOAT:F.INT,t,i,r.slice(t,i))}function en(e,t,n){if(!_t(n))throw P(e.source,t,`Invalid number, expected digit but got: ${Xt(e,t)}.`);let r=e.source.body,i=t+1;for(;_t(r.charCodeAt(i));)++i;return i}function tn(e,t){let n=e.source.body,r=n.length,i=t+1,a=i,o=``;for(;i<r;){let r=n.charCodeAt(i);if(r===34)return o+=n.slice(a,i),I(e,F.STRING,t,i+1,o);if(r===92){o+=n.slice(a,i);let t=n.charCodeAt(i+1)===117?n.charCodeAt(i+2)===123?nn(e,i):rn(e,i):sn(e,i);o+=t.value,i+=t.size,a=i;continue}if(r===10||r===13)break;if(Kt(r))++i;else if(qt(n,i))i+=2;else throw P(e.source,i,`Invalid character within String: ${Xt(e,i)}.`)}throw P(e.source,i,`Unterminated string.`)}function nn(e,t){let n=e.source.body,r=0,i=3;for(;i<12;){let e=n.charCodeAt(t+i++);if(e===125){if(i<5||!Kt(r))break;return{value:String.fromCodePoint(r),size:i}}if(r=r<<4|on(e),r<0)break}throw P(e.source,t,`Invalid Unicode escape sequence: "${n.slice(t,t+i)}".`)}function rn(e,t){let n=e.source.body,r=an(n,t+2);if(Kt(r))return{value:String.fromCodePoint(r),size:6};if(Jt(r)&&n.charCodeAt(t+6)===92&&n.charCodeAt(t+7)===117){let e=an(n,t+8);if(Yt(e))return{value:String.fromCodePoint(r,e),size:12}}throw P(e.source,t,`Invalid Unicode escape sequence: "${n.slice(t,t+6)}".`)}function an(e,t){return on(e.charCodeAt(t))<<12|on(e.charCodeAt(t+1))<<8|on(e.charCodeAt(t+2))<<4|on(e.charCodeAt(t+3))}function on(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function sn(e,t){let n=e.source.body;switch(n.charCodeAt(t+1)){case 34:return{value:`"`,size:2};case 92:return{value:`\\`,size:2};case 47:return{value:`/`,size:2};case 98:return{value:`\b`,size:2};case 102:return{value:`\f`,size:2};case 110:return{value:`
`,size:2};case 114:return{value:`\r`,size:2};case 116:return{value:`	`,size:2}}throw P(e.source,t,`Invalid character escape sequence: "${n.slice(t,t+2)}".`)}function cn(e,t){let n=e.source.body,r=n.length,i=e.lineStart,a=t+3,o=a,s=``,c=[];for(;a<r;){let r=n.charCodeAt(a);if(r===34&&n.charCodeAt(a+1)===34&&n.charCodeAt(a+2)===34){s+=n.slice(o,a),c.push(s);let r=I(e,F.BLOCK_STRING,t,a+3,xt(c).join(`
`));return e.line+=c.length-1,e.lineStart=i,r}if(r===92&&n.charCodeAt(a+1)===34&&n.charCodeAt(a+2)===34&&n.charCodeAt(a+3)===34){s+=n.slice(o,a),o=a+1,a+=4;continue}if(r===10||r===13){s+=n.slice(o,a),c.push(s),r===13&&n.charCodeAt(a+1)===10?a+=2:++a,s=``,o=a,i=a;continue}if(Kt(r))++a;else if(qt(n,a))a+=2;else throw P(e.source,a,`Invalid character within String: ${Xt(e,a)}.`)}throw P(e.source,a,`Unterminated string.`)}function ln(e,t){let n=e.source.body,r=n.length,i=t+1;for(;i<r&&bt(n.charCodeAt(i));)++i;return I(e,F.NAME,t,i,n.slice(t,i))}var un=Symbol(`Source`),dn=class{constructor(e,t=`GraphQL request`,n={line:1,column:1}){this.__kind=un,this.body=e,this.name=t,this.locationOffset=n,this.locationOffset.line>0||ht(!1,`line in locationOffset is 1-indexed and must be positive.`),this.locationOffset.column>0||ht(!1,`column in locationOffset is 1-indexed and must be positive.`)}get[Symbol.toStringTag](){return`Source`}};function fn(e){return A(e,un,dn)}function pn(e,t){return Ut(Vt)?Vt.traceSync(()=>mn(e,t),{source:e}):mn(e,t)}function mn(e,t){let n=new hn(e,t),r=n.parseDocument();return Object.defineProperty(r,"tokenCount",{enumerable:!1,value:n.tokenCount}),r}var hn=class{constructor(e,t={}){let{lexer:n,...r}=t;if(n)this._lexer=n;else{let t=fn(e)?e:new dn(e);this._lexer=new Wt(t)}this._options=r,this._tokenCounter=0}get tokenCount(){return this._tokenCounter}parseName(){let e=this.expectToken(F.NAME);return this.node(e,{kind:be,value:e.value})}parseDocument(){return this.node(this._lexer.token,{kind:xe,definitions:this.many(F.SOF,this.parseDefinition,F.EOF)})}parseDefinition(){if(this.peek(F.BRACE_L))return this.parseOperationDefinition();let e=this.peekDescription(),t=e?this._lexer.lookahead():this._lexer.token;if(e&&t.kind===F.BRACE_L)throw P(this._lexer.source,this._lexer.token.start,`Unexpected description, descriptions are not supported on shorthand queries.`);if(t.kind===F.NAME){switch(t.value){case`schema`:return this.parseSchemaDefinition();case`scalar`:return this.parseScalarTypeDefinition();case`type`:return this.parseObjectTypeDefinition();case`interface`:return this.parseInterfaceTypeDefinition();case`union`:return this.parseUnionTypeDefinition();case`enum`:return this.parseEnumTypeDefinition();case`input`:return this.parseInputObjectTypeDefinition();case`directive`:return this.parseDirectiveDefinition()}switch(t.value){case`query`:case`mutation`:case`subscription`:return this.parseOperationDefinition();case`fragment`:return this.parseFragmentDefinition()}if(e)throw P(this._lexer.source,this._lexer.token.start,`Unexpected description, only GraphQL definitions support descriptions.`);if(t.value===`extend`)return this.parseTypeSystemExtension()}throw this.unexpected(t)}parseOperationDefinition(){let e=this._lexer.token;if(this.peek(F.BRACE_L))return this.node(e,{kind:j,operation:ve.QUERY,description:void 0,name:void 0,variableDefinitions:void 0,directives:void 0,selectionSet:this.parseSelectionSet()});let t=this.parseDescription(),n=this.parseOperationType(),r;return this.peek(F.NAME)&&(r=this.parseName()),this.node(e,{kind:j,operation:n,description:t,name:r,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){let e=this.expectToken(F.NAME);switch(e.value){case`query`:return ve.QUERY;case`mutation`:return ve.MUTATION;case`subscription`:return ve.SUBSCRIPTION}throw this.unexpected(e)}parseVariableDefinitions(){return this.optionalMany(F.PAREN_L,this.parseVariableDefinition,F.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:Se,description:this.parseDescription(),variable:this.parseVariable(),type:(this.expectToken(F.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(F.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){let e=this._lexer.token;return this.expectToken(F.DOLLAR),this.node(e,{kind:Ae,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:Ce,selections:this.many(F.BRACE_L,this.parseSelection,F.BRACE_R)})}parseSelection(){return this.peek(F.SPREAD)?this.parseFragment():this.parseField()}parseField(){let e=this._lexer.token,t=this.parseName(),n,r;return this.expectOptionalToken(F.COLON)?(n=t,r=this.parseName()):r=t,this.node(e,{kind:we,alias:n,name:r,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(F.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(e){let t=e?this.parseConstArgument:this.parseArgument;return this.optionalMany(F.PAREN_L,t,F.PAREN_R)}parseFragmentArguments(){let e=this.parseFragmentArgument;return this.optionalMany(F.PAREN_L,e,F.PAREN_R)}parseArgument(e=!1){let t=this._lexer.token,n=this.parseName();return this.expectToken(F.COLON),this.node(t,{kind:Te,name:n,value:this.parseValueLiteral(e)})}parseConstArgument(){return this.parseArgument(!0)}parseFragmentArgument(){let e=this._lexer.token,t=this.parseName();return this.expectToken(F.COLON),this.node(e,{kind:Ee,name:t,value:this.parseValueLiteral(!1)})}parseFragment(){let e=this._lexer.token;this.expectToken(F.SPREAD);let t=this.expectOptionalKeyword(`on`);if(!t&&this.peek(F.NAME)){let t=this.parseFragmentName();return this.peek(F.PAREN_L)&&this._options.experimentalFragmentArguments?this.node(e,{kind:De,name:t,arguments:this.parseFragmentArguments(),directives:this.parseDirectives(!1)}):this.node(e,{kind:De,name:t,directives:this.parseDirectives(!1)})}return this.node(e,{kind:Oe,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){let e=this._lexer.token,t=this.parseDescription();return this.expectKeyword(`fragment`),this._options.experimentalFragmentArguments===!0?this.node(e,{kind:ke,description:t,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword(`on`),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(e,{kind:ke,description:t,name:this.parseFragmentName(),typeCondition:(this.expectKeyword(`on`),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value===`on`)throw this.unexpected();return this.parseName()}parseValueLiteral(e){let t=this._lexer.token;switch(t.kind){case F.BRACKET_L:return this.parseList(e);case F.BRACE_L:return this.parseObject(e);case F.INT:return this.advanceLexer(),this.node(t,{kind:je,value:t.value});case F.FLOAT:return this.advanceLexer(),this.node(t,{kind:Me,value:t.value});case F.STRING:case F.BLOCK_STRING:return this.parseStringLiteral();case F.NAME:switch(this.advanceLexer(),t.value){case`true`:return this.node(t,{kind:Pe,value:!0});case`false`:return this.node(t,{kind:Pe,value:!1});case`null`:return this.node(t,{kind:Fe});default:return this.node(t,{kind:Ie,value:t.value})}case F.DOLLAR:if(e){if(this.expectToken(F.DOLLAR),this._lexer.token.kind===F.NAME){let e=this._lexer.token.value;throw P(this._lexer.source,t.start,`Unexpected variable "$${e}" in constant value.`)}throw this.unexpected(t)}return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){let e=this._lexer.token;return this.advanceLexer(),this.node(e,{kind:Ne,value:e.value,block:e.kind===F.BLOCK_STRING})}parseList(e){return this.node(this._lexer.token,{kind:Le,values:this.any(F.BRACKET_L,()=>this.parseValueLiteral(e),F.BRACKET_R)})}parseObject(e){return this.node(this._lexer.token,{kind:Re,fields:this.any(F.BRACE_L,()=>this.parseObjectField(e),F.BRACE_R)})}parseObjectField(e){let t=this._lexer.token,n=this.parseName();return this.expectToken(F.COLON),this.node(t,{kind:ze,name:n,value:this.parseValueLiteral(e)})}parseDirectives(e){let t=[];for(;this.peek(F.AT);)t.push(this.parseDirective(e));if(t.length)return t}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(e){let t=this._lexer.token;return this.expectToken(F.AT),this.node(t,{kind:Be,name:this.parseName(),arguments:this.parseArguments(e)})}parseTypeReference(){let e=this._lexer.token,t;if(this.expectOptionalToken(F.BRACKET_L)){let n=this.parseTypeReference();this.expectToken(F.BRACKET_R),t=this.node(e,{kind:He,type:n})}else t=this.parseNamedType();return this.expectOptionalToken(F.BANG)?this.node(e,{kind:Ue,type:t}):t}parseNamedType(){return this.node(this._lexer.token,{kind:Ve,name:this.parseName()})}peekDescription(){return this.peek(F.STRING)||this.peek(F.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){let e=this._lexer.token,t=this.parseDescription();this.expectKeyword(`schema`);let n=this.parseConstDirectives(),r=this.many(F.BRACE_L,this.parseOperationTypeDefinition,F.BRACE_R);return this.node(e,{kind:We,description:t,directives:n,operationTypes:r})}parseOperationTypeDefinition(){let e=this._lexer.token,t=this.parseOperationType();this.expectToken(F.COLON);let n=this.parseNamedType();return this.node(e,{kind:Ge,operation:t,type:n})}parseScalarTypeDefinition(){let e=this._lexer.token,t=this.parseDescription();this.expectKeyword(`scalar`);let n=this.parseName(),r=this.parseConstDirectives();return this.node(e,{kind:Ke,description:t,name:n,directives:r})}parseObjectTypeDefinition(){let e=this._lexer.token,t=this.parseDescription();this.expectKeyword(`type`);let n=this.parseName(),r=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),a=this.parseFieldsDefinition();return this.node(e,{kind:qe,description:t,name:n,interfaces:r,directives:i,fields:a})}parseImplementsInterfaces(){return this.expectOptionalKeyword(`implements`)?this.delimitedMany(F.AMP,this.parseNamedType):void 0}parseFieldsDefinition(){return this.optionalMany(F.BRACE_L,this.parseFieldDefinition,F.BRACE_R)}parseFieldDefinition(){let e=this._lexer.token,t=this.parseDescription(),n=this.parseName(),r=this.parseArgumentDefs();this.expectToken(F.COLON);let i=this.parseTypeReference(),a=this.parseConstDirectives();return this.node(e,{kind:Je,description:t,name:n,arguments:r,type:i,directives:a})}parseArgumentDefs(){return this.optionalMany(F.PAREN_L,this.parseInputValueDef,F.PAREN_R)}parseInputValueDef(){let e=this._lexer.token,t=this.parseDescription(),n=this.parseName();this.expectToken(F.COLON);let r=this.parseTypeReference(),i;this.expectOptionalToken(F.EQUALS)&&(i=this.parseConstValueLiteral());let a=this.parseConstDirectives();return this.node(e,{kind:Ye,description:t,name:n,type:r,defaultValue:i,directives:a})}parseInterfaceTypeDefinition(){let e=this._lexer.token,t=this.parseDescription();this.expectKeyword(`interface`);let n=this.parseName(),r=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),a=this.parseFieldsDefinition();return this.node(e,{kind:Xe,description:t,name:n,interfaces:r,directives:i,fields:a})}parseUnionTypeDefinition(){let e=this._lexer.token,t=this.parseDescription();this.expectKeyword(`union`);let n=this.parseName(),r=this.parseConstDirectives(),i=this.parseUnionMemberTypes();return this.node(e,{kind:Ze,description:t,name:n,directives:r,types:i})}parseUnionMemberTypes(){return this.expectOptionalToken(F.EQUALS)?this.delimitedMany(F.PIPE,this.parseNamedType):void 0}parseEnumTypeDefinition(){let e=this._lexer.token,t=this.parseDescription();this.expectKeyword(`enum`);let n=this.parseName(),r=this.parseConstDirectives(),i=this.parseEnumValuesDefinition();return this.node(e,{kind:Qe,description:t,name:n,directives:r,values:i})}parseEnumValuesDefinition(){return this.optionalMany(F.BRACE_L,this.parseEnumValueDefinition,F.BRACE_R)}parseEnumValueDefinition(){let e=this._lexer.token,t=this.parseDescription(),n=this.parseEnumValueName(),r=this.parseConstDirectives();return this.node(e,{kind:$e,description:t,name:n,directives:r})}parseEnumValueName(){if(this._lexer.token.value===`true`||this._lexer.token.value===`false`||this._lexer.token.value===`null`)throw P(this._lexer.source,this._lexer.token.start,`${gn(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){let e=this._lexer.token,t=this.parseDescription();this.expectKeyword(`input`);let n=this.parseName(),r=this.parseConstDirectives(),i=this.parseInputFieldsDefinition();return this.node(e,{kind:et,description:t,name:n,directives:r,fields:i})}parseInputFieldsDefinition(){return this.optionalMany(F.BRACE_L,this.parseInputValueDef,F.BRACE_R)}parseTypeSystemExtension(){let e=this._lexer.lookahead();if(e.kind===F.NAME)switch(e.value){case`schema`:return this.parseSchemaExtension();case`scalar`:return this.parseScalarTypeExtension();case`type`:return this.parseObjectTypeExtension();case`interface`:return this.parseInterfaceTypeExtension();case`union`:return this.parseUnionTypeExtension();case`enum`:return this.parseEnumTypeExtension();case`input`:return this.parseInputObjectTypeExtension();case`directive`:return this.parseDirectiveExtension()}throw this.unexpected(e)}parseSchemaExtension(){let e=this._lexer.token;this.expectKeyword(`extend`),this.expectKeyword(`schema`);let t=this.parseConstDirectives(),n=this.optionalMany(F.BRACE_L,this.parseOperationTypeDefinition,F.BRACE_R);if(t===void 0&&n===void 0)throw this.unexpected();return this.node(e,{kind:nt,directives:t,operationTypes:n})}parseScalarTypeExtension(){let e=this._lexer.token;this.expectKeyword(`extend`),this.expectKeyword(`scalar`);let t=this.parseName(),n=this.parseConstDirectives();if(n===void 0)throw this.unexpected();return this.node(e,{kind:it,name:t,directives:n})}parseObjectTypeExtension(){let e=this._lexer.token;this.expectKeyword(`extend`),this.expectKeyword(`type`);let t=this.parseName(),n=this.parseImplementsInterfaces(),r=this.parseConstDirectives(),i=this.parseFieldsDefinition();if(n===void 0&&r===void 0&&i===void 0)throw this.unexpected();return this.node(e,{kind:at,name:t,interfaces:n,directives:r,fields:i})}parseInterfaceTypeExtension(){let e=this._lexer.token;this.expectKeyword(`extend`),this.expectKeyword(`interface`);let t=this.parseName(),n=this.parseImplementsInterfaces(),r=this.parseConstDirectives(),i=this.parseFieldsDefinition();if(n===void 0&&r===void 0&&i===void 0)throw this.unexpected();return this.node(e,{kind:ot,name:t,interfaces:n,directives:r,fields:i})}parseUnionTypeExtension(){let e=this._lexer.token;this.expectKeyword(`extend`),this.expectKeyword(`union`);let t=this.parseName(),n=this.parseConstDirectives(),r=this.parseUnionMemberTypes();if(n===void 0&&r===void 0)throw this.unexpected();return this.node(e,{kind:st,name:t,directives:n,types:r})}parseEnumTypeExtension(){let e=this._lexer.token;this.expectKeyword(`extend`),this.expectKeyword(`enum`);let t=this.parseName(),n=this.parseConstDirectives(),r=this.parseEnumValuesDefinition();if(n===void 0&&r===void 0)throw this.unexpected();return this.node(e,{kind:ct,name:t,directives:n,values:r})}parseInputObjectTypeExtension(){let e=this._lexer.token;this.expectKeyword(`extend`),this.expectKeyword(`input`);let t=this.parseName(),n=this.parseConstDirectives(),r=this.parseInputFieldsDefinition();if(n===void 0&&r===void 0)throw this.unexpected();return this.node(e,{kind:lt,name:t,directives:n,fields:r})}parseDirectiveExtension(){let e=this._lexer.token;this.expectKeyword(`extend`),this.expectKeyword(`directive`),this.expectToken(F.AT);let t=this.parseName(),n=this.parseConstDirectives();if(n===void 0)throw this.unexpected();return this.node(e,{kind:rt,name:t,directives:n})}parseDirectiveDefinition(){let e=this._lexer.token,t=this.parseDescription();this.expectKeyword(`directive`),this.expectToken(F.AT);let n=this.parseName(),r=this.parseArgumentDefs(),i=this.parseConstDirectives(),a=this.expectOptionalKeyword(`repeatable`);this.expectKeyword(`on`);let o=this.parseDirectiveLocations();return this.node(e,{kind:tt,description:t,name:n,arguments:r,directives:i,repeatable:a,locations:o})}parseDirectiveLocations(){return this.delimitedMany(F.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){let e=this._lexer.token,t=this.parseName();if(Object.hasOwn(Rt,t.value))return t;throw this.unexpected(e)}parseSchemaCoordinate(){let e=this._lexer.token,t=this.expectOptionalToken(F.AT),n=this.parseName(),r;!t&&this.expectOptionalToken(F.DOT)&&(r=this.parseName());let i;return(t||r)&&this.expectOptionalToken(F.PAREN_L)&&(i=this.parseName(),this.expectToken(F.COLON),this.expectToken(F.PAREN_R)),t?i?this.node(e,{kind:mt,name:n,argumentName:i}):this.node(e,{kind:pt,name:n}):r?i?this.node(e,{kind:ft,name:n,fieldName:r,argumentName:i}):this.node(e,{kind:dt,name:n,memberName:r}):this.node(e,{kind:ut,name:n})}node(e,t){return this._options.noLocation!==!0&&(t.loc=new pe(e,this._lexer.lastToken,this._lexer.source)),t}peek(e){return this._lexer.token.kind===e}expectToken(e){let t=this._lexer.token;if(t.kind===e)return this.advanceLexer(),t;throw P(this._lexer.source,t.start,`Expected ${_n(e)}, found ${gn(t)}.`)}expectOptionalToken(e){return this._lexer.token.kind===e&&(this.advanceLexer(),!0)}expectKeyword(e){let t=this._lexer.token;if(t.kind===F.NAME&&t.value===e)this.advanceLexer();else throw P(this._lexer.source,t.start,`Expected "${e}", found ${gn(t)}.`)}expectOptionalKeyword(e){let t=this._lexer.token;return t.kind===F.NAME&&t.value===e&&(this.advanceLexer(),!0)}unexpected(e){let t=e??this._lexer.token;return P(this._lexer.source,t.start,`Unexpected ${gn(t)}.`)}any(e,t,n){this.expectToken(e);let r=[];for(;!this.expectOptionalToken(n);)r.push(t.call(this));return r}optionalMany(e,t,n){if(this.expectOptionalToken(e)){let e=[];do e.push(t.call(this));while(!this.expectOptionalToken(n));return e}}many(e,t,n){this.expectToken(e);let r=[];do r.push(t.call(this));while(!this.expectOptionalToken(n));return r}delimitedMany(e,t){this.expectOptionalToken(e);let n=[];do n.push(t.call(this));while(this.expectOptionalToken(e));return n}advanceLexer(){let{maxTokens:e}=this._options,t=this._lexer.advance();if(t.kind!==F.EOF&&(++this._tokenCounter,e!==void 0&&this._tokenCounter>e))throw P(this._lexer.source,t.start,`Document contains more than ${e} tokens. Parsing aborted.`)}};function gn(e){let t=e.value;return _n(e.kind)+(t==null?``:` "${t}"`)}function _n(e){return Gt(e)?`"${e}"`:e}var vn=function(e,t){return vn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},vn(e,t)};function yn(e,t){if(typeof t!=`function`&&t!==null)throw TypeError(`Class extends value `+String(t)+` is not a constructor or null`);vn(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var bn=function(){return bn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},bn.apply(this,arguments)};function xn(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?n(e.value):i(e.value).then(o,s)}c((r=r.apply(e,t||[])).next())})}function Sn(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,o=Object.create((typeof Iterator==`function`?Iterator:Object).prototype);return o.next=s(0),o.throw=s(1),o.return=s(2),typeof Symbol==`function`&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return c([e,t])}}function c(s){if(r)throw TypeError(`Generator is already executing.`);for(;o&&(o=0,s[0]&&(n=0)),n;)try{if(r=1,i&&(a=s[0]&2?i.return:s[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,s[1])).done)return a;switch(i=0,a&&(s=[s[0]&2,a.value]),s[0]){case 0:case 1:a=s;break;case 4:return n.label++,{value:s[1],done:!1};case 5:n.label++,i=s[1],s=[0];continue;case 7:s=n.ops.pop(),n.trys.pop();continue;default:if(a=n.trys,!(a=a.length>0&&a[a.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!a||s[1]>a[0]&&s[1]<a[3])){n.label=s[1];break}if(s[0]===6&&n.label<a[1]){n.label=a[1],a=s;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(s);break}a[2]&&n.ops.pop(),n.trys.pop();continue}s=t.call(e,n)}catch(e){s=[6,e],i=0}finally{r=a=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}}function Cn(e){var t=typeof Symbol==`function`&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length==`number`)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw TypeError(t?`Object is not iterable.`:`Symbol.iterator is not defined.`)}function wn(e,t){var n=typeof Symbol==`function`&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),i,a=[],o;try{for(;(t===void 0||t-->0)&&!(i=r.next()).done;)a.push(i.value)}catch(e){o={error:e}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return a}function Tn(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}function En(e){return this instanceof En?(this.v=e,this):new En(e)}function Dn(e,t,n){if(!Symbol.asyncIterator)throw TypeError(`Symbol.asyncIterator is not defined.`);var r=n.apply(e,t||[]),i,a=[];return i=Object.create((typeof AsyncIterator==`function`?AsyncIterator:Object).prototype),s(`next`),s(`throw`),s(`return`,o),i[Symbol.asyncIterator]=function(){return this},i;function o(e){return function(t){return Promise.resolve(t).then(e,d)}}function s(e,t){r[e]&&(i[e]=function(t){return new Promise(function(n,r){a.push([e,t,n,r])>1||c(e,t)})},t&&(i[e]=t(i[e])))}function c(e,t){try{l(r[e](t))}catch(e){f(a[0][3],e)}}function l(e){e.value instanceof En?Promise.resolve(e.value.v).then(u,d):f(a[0][2],e)}function u(e){c(`next`,e)}function d(e){c(`throw`,e)}function f(e,t){e(t),a.shift(),a.length&&c(a[0][0],a[0][1])}}function On(e){if(!Symbol.asyncIterator)throw TypeError(`Symbol.asyncIterator is not defined.`);var t=e[Symbol.asyncIterator],n;return t?t.call(e):(e=typeof Cn==`function`?Cn(e):e[Symbol.iterator](),n={},r(`next`),r(`throw`),r(`return`),n[Symbol.asyncIterator]=function(){return this},n);function r(t){n[t]=e[t]&&function(n){return new Promise(function(r,a){n=e[t](n),i(r,a,n.done,n.value)})}}function i(e,t,n,r){Promise.resolve(r).then(function(t){e({value:t,done:n})},t)}}function L(e){return typeof e==`function`}function kn(e){var t=e(function(e){Error.call(e),e.stack=Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var An=kn(function(e){return function(t){e(this),this.message=t?t.length+` errors occurred during unsubscription:
`+t.map(function(e,t){return t+1+`) `+e.toString()}).join(`
  `):``,this.name=`UnsubscriptionError`,this.errors=t}});function jn(e,t){if(e){var n=e.indexOf(t);0<=n&&e.splice(n,1)}}var Mn=function(){function e(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return e.prototype.unsubscribe=function(){var e,t,n,r,i;if(!this.closed){this.closed=!0;var a=this._parentage;if(a){if(this._parentage=null,Array.isArray(a))try{for(var o=Cn(a),s=o.next();!s.done;s=o.next())s.value.remove(this)}catch(t){e={error:t}}finally{try{s&&!s.done&&(t=o.return)&&t.call(o)}finally{if(e)throw e.error}}else a.remove(this)}var c=this.initialTeardown;if(L(c))try{c()}catch(e){i=e instanceof An?e.errors:[e]}var l=this._finalizers;if(l){this._finalizers=null;try{for(var u=Cn(l),d=u.next();!d.done;d=u.next()){var f=d.value;try{Fn(f)}catch(e){i=i??[],e instanceof An?i=Tn(Tn([],wn(i)),wn(e.errors)):i.push(e)}}}catch(e){n={error:e}}finally{try{d&&!d.done&&(r=u.return)&&r.call(u)}finally{if(n)throw n.error}}}if(i)throw new An(i)}},e.prototype.add=function(t){if(t&&t!==this){if(this.closed)Fn(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=this._finalizers??[]).push(t)}}},e.prototype._hasParent=function(e){var t=this._parentage;return t===e||Array.isArray(t)&&t.includes(e)},e.prototype._addParent=function(e){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e},e.prototype._removeParent=function(e){var t=this._parentage;t===e?this._parentage=null:Array.isArray(t)&&jn(t,e)},e.prototype.remove=function(t){var n=this._finalizers;n&&jn(n,t),t instanceof e&&t._removeParent(this)},e.EMPTY=(function(){var t=new e;return t.closed=!0,t})(),e}(),Nn=Mn.EMPTY;function Pn(e){return e instanceof Mn||e&&`closed`in e&&L(e.remove)&&L(e.add)&&L(e.unsubscribe)}function Fn(e){L(e)?e():e.unsubscribe()}var In={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},Ln={setTimeout:function(e,t){var n=[...arguments].slice(2),r=Ln.delegate;return r?.setTimeout?r.setTimeout.apply(r,Tn([e,t],wn(n))):setTimeout.apply(void 0,Tn([e,t],wn(n)))},clearTimeout:function(e){return(Ln.delegate?.clearTimeout||clearTimeout)(e)},delegate:void 0};function Rn(e){Ln.setTimeout(function(){var t=In.onUnhandledError;if(t)t(e);else throw e})}function zn(){}var Bn=(function(){return Un(`C`,void 0,void 0)})();function Vn(e){return Un(`E`,void 0,e)}function Hn(e){return Un(`N`,e,void 0)}function Un(e,t,n){return{kind:e,value:t,error:n}}var Wn=null;function Gn(e){if(In.useDeprecatedSynchronousErrorHandling){var t=!Wn;if(t&&(Wn={errorThrown:!1,error:null}),e(),t){var n=Wn,r=n.errorThrown,i=n.error;if(Wn=null,r)throw i}}else e()}function Kn(e){In.useDeprecatedSynchronousErrorHandling&&Wn&&(Wn.errorThrown=!0,Wn.error=e)}var qn=function(e){yn(t,e);function t(t){var n=e.call(this)||this;return n.isStopped=!1,t?(n.destination=t,Pn(t)&&t.add(n)):n.destination=tr,n}return t.create=function(e,t,n){return new Zn(e,t,n)},t.prototype.next=function(e){this.isStopped?er(Hn(e),this):this._next(e)},t.prototype.error=function(e){this.isStopped?er(Vn(e),this):(this.isStopped=!0,this._error(e))},t.prototype.complete=function(){this.isStopped?er(Bn,this):(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(e){this.destination.next(e)},t.prototype._error=function(e){try{this.destination.error(e)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t}(Mn),Jn=Function.prototype.bind;function Yn(e,t){return Jn.call(e,t)}var Xn=function(){function e(e){this.partialObserver=e}return e.prototype.next=function(e){var t=this.partialObserver;if(t.next)try{t.next(e)}catch(e){Qn(e)}},e.prototype.error=function(e){var t=this.partialObserver;if(t.error)try{t.error(e)}catch(e){Qn(e)}else Qn(e)},e.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(e){Qn(e)}},e}(),Zn=function(e){yn(t,e);function t(t,n,r){var i=e.call(this)||this,a;if(L(t)||!t)a={next:t??void 0,error:n??void 0,complete:r??void 0};else{var o;i&&In.useDeprecatedNextContext?(o=Object.create(t),o.unsubscribe=function(){return i.unsubscribe()},a={next:t.next&&Yn(t.next,o),error:t.error&&Yn(t.error,o),complete:t.complete&&Yn(t.complete,o)}):a=t}return i.destination=new Xn(a),i}return t}(qn);function Qn(e){In.useDeprecatedSynchronousErrorHandling?Kn(e):Rn(e)}function $n(e){throw e}function er(e,t){var n=In.onStoppedNotification;n&&Ln.setTimeout(function(){return n(e,t)})}var tr={closed:!0,next:zn,error:$n,complete:zn},nr=(function(){return typeof Symbol==`function`&&Symbol.observable||`@@observable`})();function rr(e){return e}function ir(e){return e.length===0?rr:e.length===1?e[0]:function(t){return e.reduce(function(e,t){return t(e)},t)}}var R=function(){function e(e){e&&(this._subscribe=e)}return e.prototype.lift=function(t){var n=new e;return n.source=this,n.operator=t,n},e.prototype.subscribe=function(e,t,n){var r=this,i=sr(e)?e:new Zn(e,t,n);return Gn(function(){var e=r,t=e.operator,n=e.source;i.add(t?t.call(i,n):n?r._subscribe(i):r._trySubscribe(i))}),i},e.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){e.error(t)}},e.prototype.forEach=function(e,t){var n=this;return t=ar(t),new t(function(t,r){var i=new Zn({next:function(t){try{e(t)}catch(e){r(e),i.unsubscribe()}},error:r,complete:t});n.subscribe(i)})},e.prototype._subscribe=function(e){return this.source?.subscribe(e)},e.prototype[nr]=function(){return this},e.prototype.pipe=function(){return ir([...arguments])(this)},e.prototype.toPromise=function(e){var t=this;return e=ar(e),new e(function(e,n){var r;t.subscribe(function(e){return r=e},function(e){return n(e)},function(){return e(r)})})},e.create=function(t){return new e(t)},e}();function ar(e){return e??In.Promise??Promise}function or(e){return e&&L(e.next)&&L(e.error)&&L(e.complete)}function sr(e){return e&&e instanceof qn||or(e)&&Pn(e)}function cr(e){return L(e?.lift)}function lr(e){return function(t){if(cr(t))return t.lift(function(t){try{return e(t,this)}catch(e){this.error(e)}});throw TypeError(`Unable to lift unknown Observable type`)}}function ur(e,t,n,r,i){return new dr(e,t,n,r,i)}var dr=function(e){yn(t,e);function t(t,n,r,i,a,o){var s=e.call(this,t)||this;return s.onFinalize=a,s.shouldUnsubscribe=o,s._next=n?function(e){try{n(e)}catch(e){t.error(e)}}:e.prototype._next,s._error=i?function(e){try{i(e)}catch(e){t.error(e)}finally{this.unsubscribe()}}:e.prototype._error,s._complete=r?function(){try{r()}catch(e){t.error(e)}finally{this.unsubscribe()}}:e.prototype._complete,s}return t.prototype.unsubscribe=function(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var n=this.closed;e.prototype.unsubscribe.call(this),!n&&((t=this.onFinalize)==null||t.call(this))}},t}(qn),fr=kn(function(e){return function(){e(this),this.name=`ObjectUnsubscribedError`,this.message=`object unsubscribed`}}),pr=function(e){yn(t,e);function t(){var t=e.call(this)||this;return t.closed=!1,t.currentObservers=null,t.observers=[],t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return t.prototype.lift=function(e){var t=new mr(this,this);return t.operator=e,t},t.prototype._throwIfClosed=function(){if(this.closed)throw new fr},t.prototype.next=function(e){var t=this;Gn(function(){var n,r;if(t._throwIfClosed(),!t.isStopped){t.currentObservers||(t.currentObservers=Array.from(t.observers));try{for(var i=Cn(t.currentObservers),a=i.next();!a.done;a=i.next())a.value.next(e)}catch(e){n={error:e}}finally{try{a&&!a.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}}})},t.prototype.error=function(e){var t=this;Gn(function(){if(t._throwIfClosed(),!t.isStopped){t.hasError=t.isStopped=!0,t.thrownError=e;for(var n=t.observers;n.length;)n.shift().error(e)}})},t.prototype.complete=function(){var e=this;Gn(function(){if(e._throwIfClosed(),!e.isStopped){e.isStopped=!0;for(var t=e.observers;t.length;)t.shift().complete()}})},t.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(t.prototype,"observed",{get:function(){return this.observers?.length>0},enumerable:!1,configurable:!0}),t.prototype._trySubscribe=function(t){return this._throwIfClosed(),e.prototype._trySubscribe.call(this,t)},t.prototype._subscribe=function(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)},t.prototype._innerSubscribe=function(e){var t=this,n=this,r=n.hasError,i=n.isStopped,a=n.observers;return r||i?Nn:(this.currentObservers=null,a.push(e),new Mn(function(){t.currentObservers=null,jn(a,e)}))},t.prototype._checkFinalizedStatuses=function(e){var t=this,n=t.hasError,r=t.thrownError,i=t.isStopped;n?e.error(r):i&&e.complete()},t.prototype.asObservable=function(){var e=new R;return e.source=this,e},t.create=function(e,t){return new mr(e,t)},t}(R),mr=function(e){yn(t,e);function t(t,n){var r=e.call(this)||this;return r.destination=t,r.source=n,r}return t.prototype.next=function(e){var t,n;(n=(t=this.destination)?.next)==null||n.call(t,e)},t.prototype.error=function(e){var t,n;(n=(t=this.destination)?.error)==null||n.call(t,e)},t.prototype.complete=function(){var e,t;(t=(e=this.destination)?.complete)==null||t.call(e)},t.prototype._subscribe=function(e){return this.source?.subscribe(e)??Nn},t}(pr),hr=function(e){yn(t,e);function t(t){var n=e.call(this)||this;return n._value=t,n}return Object.defineProperty(t.prototype,"value",{get:function(){return this.getValue()},enumerable:!1,configurable:!0}),t.prototype._subscribe=function(t){var n=e.prototype._subscribe.call(this,t);return!n.closed&&t.next(this._value),n},t.prototype.getValue=function(){var e=this,t=e.hasError,n=e.thrownError,r=e._value;if(t)throw n;return this._throwIfClosed(),r},t.prototype.next=function(t){e.prototype.next.call(this,this._value=t)},t}(pr),gr={now:function(){return(gr.delegate||Date).now()},delegate:void 0},_r=function(e){yn(t,e);function t(t,n,r){t===void 0&&(t=1/0),n===void 0&&(n=1/0),r===void 0&&(r=gr);var i=e.call(this)||this;return i._bufferSize=t,i._windowTime=n,i._timestampProvider=r,i._buffer=[],i._infiniteTimeWindow=!0,i._infiniteTimeWindow=n===1/0,i._bufferSize=Math.max(1,t),i._windowTime=Math.max(1,n),i}return t.prototype.next=function(t){var n=this,r=n.isStopped,i=n._buffer,a=n._infiniteTimeWindow,o=n._timestampProvider,s=n._windowTime;r||(i.push(t),!a&&i.push(o.now()+s)),this._trimBuffer(),e.prototype.next.call(this,t)},t.prototype._subscribe=function(e){this._throwIfClosed(),this._trimBuffer();for(var t=this._innerSubscribe(e),n=this,r=n._infiniteTimeWindow,i=n._buffer.slice(),a=0;a<i.length&&!e.closed;a+=r?1:2)e.next(i[a]);return this._checkFinalizedStatuses(e),t},t.prototype._trimBuffer=function(){var e=this,t=e._bufferSize,n=e._timestampProvider,r=e._buffer,i=e._infiniteTimeWindow,a=(i?1:2)*t;if(t<1/0&&a<r.length&&r.splice(0,r.length-a),!i){for(var o=n.now(),s=0,c=1;c<r.length&&r[c]<=o;c+=2)s=c;s&&r.splice(0,s+1)}},t}(pr),vr=function(e){yn(t,e);function t(t,n){return e.call(this)||this}return t.prototype.schedule=function(e,t){return t===void 0&&(t=0),this},t}(Mn),yr={setInterval:function(e,t){var n=[...arguments].slice(2),r=yr.delegate;return r?.setInterval?r.setInterval.apply(r,Tn([e,t],wn(n))):setInterval.apply(void 0,Tn([e,t],wn(n)))},clearInterval:function(e){return(yr.delegate?.clearInterval||clearInterval)(e)},delegate:void 0},br=function(e){yn(t,e);function t(t,n){var r=e.call(this,t,n)||this;return r.scheduler=t,r.work=n,r.pending=!1,r}return t.prototype.schedule=function(e,t){if(t===void 0&&(t=0),this.closed)return this;this.state=e;var n=this.id,r=this.scheduler;return n!=null&&(this.id=this.recycleAsyncId(r,n,t)),this.pending=!0,this.delay=t,this.id=this.id??this.requestAsyncId(r,this.id,t),this},t.prototype.requestAsyncId=function(e,t,n){return n===void 0&&(n=0),yr.setInterval(e.flush.bind(e,this),n)},t.prototype.recycleAsyncId=function(e,t,n){if(n===void 0&&(n=0),n!=null&&this.delay===n&&this.pending===!1)return t;t!=null&&yr.clearInterval(t)},t.prototype.execute=function(e,t){if(this.closed)return Error(`executing a cancelled action`);this.pending=!1;var n=this._execute(e,t);if(n)return n;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},t.prototype._execute=function(e,t){var n=!1,r;try{this.work(e)}catch(e){n=!0,r=e||Error(`Scheduled action threw falsy error`)}if(n)return this.unsubscribe(),r},t.prototype.unsubscribe=function(){if(!this.closed){var t=this,n=t.id,r=t.scheduler,i=r.actions;this.work=this.state=this.scheduler=null,this.pending=!1,jn(i,this),n!=null&&(this.id=this.recycleAsyncId(r,n,null)),this.delay=null,e.prototype.unsubscribe.call(this)}},t}(vr),xr=1,Sr,Cr={};function wr(e){return e in Cr&&(delete Cr[e],!0)}var Tr={setImmediate:function(e){var t=xr++;return Cr[t]=!0,Sr||(Sr=Promise.resolve()),Sr.then(function(){return wr(t)&&e()}),t},clearImmediate:function(e){wr(e)}},Er=Tr.setImmediate,Dr=Tr.clearImmediate,Or={setImmediate:function(){var e=[...arguments];return(Or.delegate?.setImmediate||Er).apply(void 0,Tn([],wn(e)))},clearImmediate:function(e){return(Or.delegate?.clearImmediate||Dr)(e)},delegate:void 0},kr=function(e){yn(t,e);function t(t,n){var r=e.call(this,t,n)||this;return r.scheduler=t,r.work=n,r}return t.prototype.requestAsyncId=function(t,n,r){return r===void 0&&(r=0),r!==null&&r>0?e.prototype.requestAsyncId.call(this,t,n,r):(t.actions.push(this),t._scheduled||(t._scheduled=Or.setImmediate(t.flush.bind(t,void 0))))},t.prototype.recycleAsyncId=function(t,n,r){if(r===void 0&&(r=0),r==null?this.delay>0:r>0)return e.prototype.recycleAsyncId.call(this,t,n,r);var i=t.actions;n!=null&&i[i.length-1]?.id!==n&&(Or.clearImmediate(n),t._scheduled===n&&(t._scheduled=void 0))},t}(br),Ar=function(){function e(t,n){n===void 0&&(n=e.now),this.schedulerActionCtor=t,this.now=n}return e.prototype.schedule=function(e,t,n){return t===void 0&&(t=0),new this.schedulerActionCtor(this,e).schedule(n,t)},e.now=gr.now,e}(),jr=function(e){yn(t,e);function t(t,n){n===void 0&&(n=Ar.now);var r=e.call(this,t,n)||this;return r.actions=[],r._active=!1,r}return t.prototype.flush=function(e){var t=this.actions;if(this._active){t.push(e);return}var n;this._active=!0;do if(n=e.execute(e.state,e.delay))break;while(e=t.shift());if(this._active=!1,n){for(;e=t.shift();)e.unsubscribe();throw n}},t}(Ar),Mr=new(function(e){yn(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.flush=function(e){this._active=!0;var t=this._scheduled;this._scheduled=void 0;var n=this.actions,r;e=e||n.shift();do if(r=e.execute(e.state,e.delay))break;while((e=n[0])&&e.id===t&&n.shift());if(this._active=!1,r){for(;(e=n[0])&&e.id===t&&n.shift();)e.unsubscribe();throw r}},t}(jr))(kr),Nr=new jr(br),Pr=new R(function(e){return e.complete()});function Fr(e){return e&&L(e.schedule)}function Ir(e){return e[e.length-1]}function Lr(e){return Fr(Ir(e))?e.pop():void 0}var Rr=(function(e){return e&&typeof e.length==`number`&&typeof e!=`function`});function zr(e){return L(e?.then)}function Br(e){return L(e[nr])}function Vr(e){return Symbol.asyncIterator&&L(e?.[Symbol.asyncIterator])}function Hr(e){return TypeError(`You provided `+(typeof e==`object`&&e?`an invalid object`:`'`+e+`'`)+` where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function Ur(){return typeof Symbol!=`function`||!Symbol.iterator?`@@iterator`:Symbol.iterator}var Wr=Ur();function Gr(e){return L(e?.[Wr])}function Kr(e){return Dn(this,arguments,function(){var t,n,r,i;return Sn(this,function(a){switch(a.label){case 0:t=e.getReader(),a.label=1;case 1:a.trys.push([1,,9,10]),a.label=2;case 2:return[4,En(t.read())];case 3:return n=a.sent(),r=n.value,i=n.done,i?[4,En(void 0)]:[3,5];case 4:return[2,a.sent()];case 5:return[4,En(r)];case 6:return[4,a.sent()];case 7:return a.sent(),[3,2];case 8:return[3,10];case 9:return t.releaseLock(),[7];case 10:return[2]}})})}function qr(e){return L(e?.getReader)}function Jr(e){if(e instanceof R)return e;if(e!=null){if(Br(e))return Yr(e);if(Rr(e))return Xr(e);if(zr(e))return Zr(e);if(Vr(e))return $r(e);if(Gr(e))return Qr(e);if(qr(e))return ei(e)}throw Hr(e)}function Yr(e){return new R(function(t){var n=e[nr]();if(L(n.subscribe))return n.subscribe(t);throw TypeError(`Provided object does not correctly implement Symbol.observable`)})}function Xr(e){return new R(function(t){for(var n=0;n<e.length&&!t.closed;n++)t.next(e[n]);t.complete()})}function Zr(e){return new R(function(t){e.then(function(e){t.closed||(t.next(e),t.complete())},function(e){return t.error(e)}).then(null,Rn)})}function Qr(e){return new R(function(t){var n,r;try{for(var i=Cn(e),a=i.next();!a.done;a=i.next()){var o=a.value;if(t.next(o),t.closed)return}}catch(e){n={error:e}}finally{try{a&&!a.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}t.complete()})}function $r(e){return new R(function(t){ti(e,t).catch(function(e){return t.error(e)})})}function ei(e){return $r(Kr(e))}function ti(e,t){var n,r,i,a;return xn(this,void 0,void 0,function(){var o,s;return Sn(this,function(c){switch(c.label){case 0:c.trys.push([0,5,6,11]),n=On(e),c.label=1;case 1:return[4,n.next()];case 2:if(r=c.sent(),r.done)return[3,4];if(o=r.value,t.next(o),t.closed)return[2];c.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return s=c.sent(),i={error:s},[3,11];case 6:return c.trys.push([6,,9,10]),r&&!r.done&&(a=n.return)?[4,a.call(n)]:[3,8];case 7:c.sent(),c.label=8;case 8:return[3,10];case 9:if(i)throw i.error;return[7];case 10:return[7];case 11:return t.complete(),[2]}})})}function ni(e,t,n,r,i){r===void 0&&(r=0),i===void 0&&(i=!1);var a=t.schedule(function(){n(),i?e.add(this.schedule(null,r)):this.unsubscribe()},r);if(e.add(a),!i)return a}function ri(e,t){return t===void 0&&(t=0),lr(function(n,r){n.subscribe(ur(r,function(n){return ni(r,e,function(){return r.next(n)},t)},function(){return ni(r,e,function(){return r.complete()},t)},function(n){return ni(r,e,function(){return r.error(n)},t)}))})}function ii(e,t){return t===void 0&&(t=0),lr(function(n,r){r.add(e.schedule(function(){return n.subscribe(r)},t))})}function ai(e,t){return Jr(e).pipe(ii(t),ri(t))}function oi(e,t){return Jr(e).pipe(ii(t),ri(t))}function si(e,t){return new R(function(n){var r=0;return t.schedule(function(){r===e.length?n.complete():(n.next(e[r++]),n.closed||this.schedule())})})}function ci(e,t){return new R(function(n){var r;return ni(n,t,function(){r=e[Wr](),ni(n,t,function(){var e,t,i;try{e=r.next(),t=e.value,i=e.done}catch(e){n.error(e);return}i?n.complete():n.next(t)},0,!0)}),function(){return L(r?.return)&&r.return()}})}function li(e,t){if(!e)throw Error(`Iterable cannot be null`);return new R(function(n){ni(n,t,function(){var r=e[Symbol.asyncIterator]();ni(n,t,function(){r.next().then(function(e){e.done?n.complete():n.next(e.value)})},0,!0)})})}function ui(e,t){return li(Kr(e),t)}function di(e,t){if(e!=null){if(Br(e))return ai(e,t);if(Rr(e))return si(e,t);if(zr(e))return oi(e,t);if(Vr(e))return li(e,t);if(Gr(e))return ci(e,t);if(qr(e))return ui(e,t)}throw Hr(e)}function fi(e,t){return t?di(e,t):Jr(e)}function pi(){var e=[...arguments];return fi(e,Lr(e))}function mi(e,t){var n=L(e)?e:function(){return e},r=function(e){return e.error(n())};return new R(t?function(e){return t.schedule(r,0,e)}:r)}var hi;(function(e){e.NEXT=`N`,e.ERROR=`E`,e.COMPLETE=`C`})(hi||(hi={}));var gi=function(){function e(e,t,n){this.kind=e,this.value=t,this.error=n,this.hasValue=e===`N`}return e.prototype.observe=function(e){return _i(this,e)},e.prototype.do=function(e,t,n){var r=this,i=r.kind,a=r.value,o=r.error;return i===`N`?e?.(a):i===`E`?t?.(o):n?.()},e.prototype.accept=function(e,t,n){return L(e?.next)?this.observe(e):this.do(e,t,n)},e.prototype.toObservable=function(){var e=this,t=e.kind,n=e.value,r=e.error,i=t===`N`?pi(n):t===`E`?mi(function(){return r}):t===`C`?Pr:0;if(!i)throw TypeError(`Unexpected notification kind `+t);return i},e.createNext=function(t){return new e(`N`,t)},e.createError=function(t){return new e(`E`,void 0,t)},e.createComplete=function(){return e.completeNotification},e.completeNotification=new e(`C`),e}();function _i(e,t){var n,r,i,a=e,o=a.kind,s=a.value,c=a.error;if(typeof o!=`string`)throw TypeError(`Invalid notification, missing "kind"`);o===`N`?(n=t.next)==null||n.call(t,s):o===`E`?(r=t.error)==null||r.call(t,c):(i=t.complete)==null||i.call(t)}var vi=kn(function(e){return function(){e(this),this.name=`EmptyError`,this.message=`no elements in sequence`}});function yi(e,t){var n=typeof t==`object`;return new Promise(function(r,i){var a=!1,o;e.subscribe({next:function(e){o=e,a=!0},error:i,complete:function(){a?r(o):n?r(t.defaultValue):i(new vi)}})})}function bi(e,t){var n=typeof t==`object`;return new Promise(function(r,i){var a=new Zn({next:function(e){r(e),a.unsubscribe()},error:i,complete:function(){n?r(t.defaultValue):i(new vi)}});e.subscribe(a)})}function xi(e){return e instanceof Date&&!isNaN(e)}function Si(e,t){return lr(function(n,r){var i=0;n.subscribe(ur(r,function(n){r.next(e.call(t,n,i++))}))})}function Ci(e,t,n,r,i,a,o,s){var c=[],l=0,u=0,d=!1,f=function(){d&&!c.length&&!l&&t.complete()},p=function(e){return l<r?m(e):c.push(e)},m=function(e){a&&t.next(e),l++;var s=!1;Jr(n(e,u++)).subscribe(ur(t,function(e){i?.(e),a?p(e):t.next(e)},function(){s=!0},void 0,function(){if(s)try{l--;for(var e=function(){var e=c.shift();o?ni(t,o,function(){return m(e)}):m(e)};c.length&&l<r;)e();f()}catch(e){t.error(e)}}))};return e.subscribe(ur(t,p,function(){d=!0,f()})),function(){s?.()}}function wi(e,t,n){return n===void 0&&(n=1/0),L(t)?wi(function(n,r){return Si(function(e,i){return t(n,e,r,i)})(Jr(e(n,r)))},n):(typeof t==`number`&&(n=t),lr(function(t,r){return Ci(t,r,e,n)}))}function Ti(e){return e===void 0&&(e=1/0),wi(rr,e)}function Ei(){return Ti(1)}function Di(){var e=[...arguments];return Ei()(fi(e,Lr(e)))}function Oi(e,t,n){e===void 0&&(e=0),n===void 0&&(n=Nr);var r=-1;return t!=null&&(Fr(t)?n=t:r=t),new R(function(t){var i=xi(e)?+e-n.now():e;i<0&&(i=0);var a=0;return n.schedule(function(){t.closed||(t.next(a++),0<=r?this.schedule(void 0,r):t.complete())},i)})}function ki(e,t){return lr(function(n,r){var i=0;n.subscribe(ur(r,function(n){return e.call(t,n,i++)&&r.next(n)}))})}function Ai(e){return lr(function(t,n){var r=null,i=!1,a;r=t.subscribe(ur(n,void 0,void 0,function(o){a=Jr(e(o,Ai(e)(t))),r?(r.unsubscribe(),r=null,a.subscribe(n)):i=!0})),i&&(r.unsubscribe(),r=null,a.subscribe(n))})}function ji(e,t){return t===void 0&&(t=rr),e=e??Mi,lr(function(n,r){var i,a=!0;n.subscribe(ur(r,function(n){var o=t(n);(a||!e(i,o))&&(a=!1,i=o,r.next(n))}))})}function Mi(e,t){return e===t}function Ni(e){return lr(function(t,n){try{t.subscribe(n)}finally{n.add(e)}})}function Pi(){return lr(function(e,t){e.subscribe(ur(t,function(e){t.next(gi.createNext(e))},function(){t.next(gi.createComplete()),t.complete()},function(e){t.next(gi.createError(e)),t.complete()}))})}function Fi(e){e===void 0&&(e={});var t=e.connector,n=t===void 0?function(){return new pr}:t,r=e.resetOnError,i=r===void 0||r,a=e.resetOnComplete,o=a===void 0||a,s=e.resetOnRefCountZero,c=s===void 0||s;return function(e){var t,r,a,s=0,l=!1,u=!1,d=function(){r?.unsubscribe(),r=void 0},f=function(){d(),t=a=void 0,l=u=!1},p=function(){var e=t;f(),e?.unsubscribe()};return lr(function(e,m){s++,!u&&!l&&d();var h=a=a??n();m.add(function(){s--,s===0&&!u&&!l&&(r=Ii(p,c))}),h.subscribe(m),!t&&s>0&&(t=new Zn({next:function(e){return h.next(e)},error:function(e){u=!0,d(),r=Ii(f,i,e),h.error(e)},complete:function(){l=!0,d(),r=Ii(f,o),h.complete()}}),Jr(e).subscribe(t))})(e)}}function Ii(e,t){var n=[...arguments].slice(2);if(t===!0){e();return}if(t!==!1){var r=new Zn({next:function(){r.unsubscribe(),e()}});return Jr(t.apply(void 0,Tn([],wn(n)))).subscribe(r)}}function Li(e,t,n){var r,i,a,o,s=!1;return e&&typeof e==`object`?(r=e.bufferSize,o=r===void 0?1/0:r,i=e.windowTime,t=i===void 0?1/0:i,a=e.refCount,s=a!==void 0&&a,n=e.scheduler):o=e??1/0,Fi({connector:function(){return new _r(o,t,n)},resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:s})}function Ri(e,t){return lr(function(n,r){var i=null,a=0,o=!1,s=function(){return o&&!i&&r.complete()};n.subscribe(ur(r,function(n){i?.unsubscribe();var o=0,c=a++;Jr(e(n,c)).subscribe(i=ur(r,function(e){return r.next(t?t(n,e,c,o++):e)},function(){i=null,s()}))},function(){o=!0,s()}))})}function zi(e,t,n){var r=L(e)||t||n?{next:e,error:t,complete:n}:e;return r?lr(function(e,t){var n;(n=r.subscribe)==null||n.call(r);var i=!0;e.subscribe(ur(t,function(e){var n;(n=r.next)==null||n.call(r,e),t.next(e)},function(){var e;i=!1,(e=r.complete)==null||e.call(r),t.complete()},function(e){var n;i=!1,(n=r.error)==null||n.call(r,e),t.error(e)},function(){var e,t;i&&((e=r.unsubscribe)==null||e.call(r)),(t=r.finalize)==null||t.call(r)}))}):rr}function Bi(e){try{return e()}catch{}}var Vi=Bi(()=>globalThis)||Bi(()=>window)||Bi(()=>self)||Bi(()=>global)||Bi(function(){return Bi.constructor(`return this`)()}),Hi=`4.2.12`,Ui=new Map;function Wi(e){let t=Ui.get(e)||1;return Ui.set(e,t+1),`${e}:${t}:${Math.random().toString(36).slice(2)}`}function Gi(e,t=0){let n=Wi(`stringifyForDisplay`);return JSON.stringify(e,(e,t)=>t===void 0?n:t,t).split(JSON.stringify(n)).join(`<undefined>`)}var Ki=`Invariant Violation`,qi=class e extends Error{constructor(t=Ki){super(t),this.name=Ki,Object.setPrototypeOf(this,e.prototype)}},Ji=[`debug`,`log`,`warn`,`error`,`silent`],Yi=Ji.indexOf(`silent`);function z(e,...t){if(!e)throw Zi(...t)}function Xi(e){return function(t,...n){if(Ji.indexOf(e)>=Yi){let r=console[e]||console.log;if(typeof t==`number`){let e=t;t=ea(e),t||(t=ta(e,n),n=[])}r(t,...n)}}}z.debug=Xi(`debug`),z.log=Xi(`log`),z.warn=Xi(`warn`),z.error=Xi(`error`);function Zi(e,...t){return new qi(ea(e,t)||ta(e,t))}var Qi=Symbol.for(`ApolloErrorMessageHandler_`+Hi);function $i(e){if(typeof e==`string`)return e;try{return Gi(e,2).slice(0,1e3)}catch{return`<non-serializable>`}}function ea(e,t=[]){if(e)return Vi[Qi]&&Vi[Qi](e,t.map($i))}function ta(e,t=[]){if(e)return typeof e==`string`?t.reduce((e,t)=>e.replace(/%[sdfo]/,$i(t)),e):`An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#${encodeURIComponent(JSON.stringify({version:Hi,message:e,args:t.map($i)}))}`}function na(e,t,n,r){if(n.kind===`IntValue`||n.kind===`FloatValue`)e[t.value]=Number(n.value);else if(n.kind===`BooleanValue`||n.kind===`StringValue`)e[t.value]=n.value;else if(n.kind===`ObjectValue`){let i={};n.fields.map(e=>na(i,e.name,e.value,r)),e[t.value]=i}else if(n.kind===`Variable`){let i=(r||{})[n.name.value];e[t.value]=i}else if(n.kind===`ListValue`)e[t.value]=n.values.map(e=>{let n={};return na(n,t,e,r),n[t.value]});else if(n.kind===`EnumValue`)e[t.value]=n.value;else if(n.kind===`NullValue`)e[t.value]=null;else throw Zi(19,t.value,n.kind)}function ra(e,t){if(e.arguments&&e.arguments.length){let n={};return e.arguments.forEach(({name:e,value:r})=>na(n,e,r,t)),n}return null}var ia=typeof Bi(()=>window.document.createElement)==`function`,aa={...Vi[Symbol.for(`apollo.cacheSize`)]};function oa(e,t){return e.definitions.find(e=>e.kind===`OperationDefinition`&&!!e.name)?.name.value??t}var sa=()=>Object.create(null),{forEach:ca,slice:la}=Array.prototype,{hasOwnProperty:ua}=Object.prototype,da=class e{constructor(e=!0,t=sa){this.weakness=e,this.makeData=t}lookup(){return this.lookupArray(arguments)}lookupArray(e){let t=this;return ca.call(e,e=>t=t.getChildTrie(e)),ua.call(t,`data`)?t.data:t.data=this.makeData(la.call(e))}peek(){return this.peekArray(arguments)}peekArray(e){let t=this;for(let n=0,r=e.length;t&&n<r;++n){let r=t.mapFor(e[n],!1);t=r&&r.get(e[n])}return t&&t.data}remove(){return this.removeArray(arguments)}removeArray(e){let t;if(e.length){let n=e[0],r=this.mapFor(n,!1),i=r&&r.get(n);i&&(t=i.removeArray(la.call(e,1)),!i.data&&!i.weak&&!(i.strong&&i.strong.size)&&r.delete(n))}else t=this.data,delete this.data;return t}getChildTrie(t){let n=this.mapFor(t,!0),r=n.get(t);return r||n.set(t,r=new e(this.weakness,this.makeData)),r}mapFor(e,t){return this.weakness&&fa(e)?this.weak||(t?this.weak=new WeakMap:void 0):this.strong||(t?this.strong=new Map:void 0)}};function fa(e){switch(typeof e){case`object`:if(e===null)break;case`function`:return!0}return!1}function pa(){}var ma=class{constructor(e=1/0,t=pa){this.max=e,this.dispose=t,this.map=new Map,this.newest=null,this.oldest=null}has(e){return this.map.has(e)}get(e){let t=this.getNode(e);return t&&t.value}get size(){return this.map.size}getNode(e){let t=this.map.get(e);if(t&&t!==this.newest){let{older:e,newer:n}=t;n&&(n.older=e),e&&(e.newer=n),t.older=this.newest,t.older.newer=t,t.newer=null,this.newest=t,t===this.oldest&&(this.oldest=n)}return t}set(e,t){let n=this.getNode(e);return n?n.value=t:(n={key:e,value:t,newer:null,older:this.newest},this.newest&&(this.newest.newer=n),this.newest=n,this.oldest=this.oldest||n,this.map.set(e,n),n.value)}clean(){for(;this.oldest&&this.map.size>this.max;)this.delete(this.oldest.key)}delete(e){let t=this.map.get(e);return t?(t===this.newest&&(this.newest=t.older),t===this.oldest&&(this.oldest=t.newer),t.newer&&(t.newer.older=t.older),t.older&&(t.older.newer=t.newer),this.map.delete(e),this.dispose(t.value,e),!0):!1}};function ha(){}var ga=ha,_a=typeof WeakRef<`u`?WeakRef:function(e){return{deref:()=>e}},va=typeof WeakMap<`u`?WeakMap:Map,ya=typeof FinalizationRegistry<`u`?FinalizationRegistry:function(){return{register:ha,unregister:ha}},ba=10024,xa=class{constructor(e=1/0,t=ga){this.max=e,this.dispose=t,this.map=new va,this.newest=null,this.oldest=null,this.unfinalizedNodes=new Set,this.finalizationScheduled=!1,this.size=0,this.finalize=()=>{let e=this.unfinalizedNodes.values();for(let t=0;t<ba;t++){let t=e.next().value;if(!t)break;this.unfinalizedNodes.delete(t);let n=t.key;delete t.key,t.keyRef=new _a(n),this.registry.register(n,t,t)}this.unfinalizedNodes.size>0?queueMicrotask(this.finalize):this.finalizationScheduled=!1},this.registry=new ya(this.deleteNode.bind(this))}has(e){return this.map.has(e)}get(e){let t=this.getNode(e);return t&&t.value}getNode(e){let t=this.map.get(e);if(t&&t!==this.newest){let{older:e,newer:n}=t;n&&(n.older=e),e&&(e.newer=n),t.older=this.newest,t.older.newer=t,t.newer=null,this.newest=t,t===this.oldest&&(this.oldest=n)}return t}set(e,t){let n=this.getNode(e);return n?n.value=t:(n={key:e,value:t,newer:null,older:this.newest},this.newest&&(this.newest.newer=n),this.newest=n,this.oldest=this.oldest||n,this.scheduleFinalization(n),this.map.set(e,n),this.size++,n.value)}clean(){for(;this.oldest&&this.size>this.max;)this.deleteNode(this.oldest)}deleteNode(e){e===this.newest&&(this.newest=e.older),e===this.oldest&&(this.oldest=e.newer),e.newer&&(e.newer.older=e.older),e.older&&(e.older.newer=e.newer),this.size--;let t=e.key||e.keyRef&&e.keyRef.deref();this.dispose(e.value,t),e.keyRef?this.registry.unregister(e):this.unfinalizedNodes.delete(e),t&&this.map.delete(t)}delete(e){let t=this.map.get(e);return t?(this.deleteNode(t),!0):!1}scheduleFinalization(e){this.unfinalizedNodes.add(e),this.finalizationScheduled||(this.finalizationScheduled=!0,queueMicrotask(this.finalize))}},Sa=new WeakSet;function Ca(e){e.size<=(e.max||-1)||Sa.has(e)||(Sa.add(e),setTimeout(()=>{e.clean(),Sa.delete(e)},100))}var wa=function(e,t){let n=new xa(e,t);return n.set=function(e,t){let n=xa.prototype.set.call(this,e,t);return Ca(this),n},n},Ta=function(e,t){let n=new ma(e,t);return n.set=function(e,t){let n=ma.prototype.set.call(this,e,t);return Ca(this),n},n};function Ea(e,{max:t,makeCacheKey:n=e=>e}){let r=new da(!0),i=new wa(t);return(...t)=>{let a=r.lookupArray(n(t)),o=i.get(a);if(o){if(o.error)throw o.error;return o.result}let s=i.set(a,{});try{return s.result=e(...t)}catch(e){throw s.error=e,e}}}var Da=Ea((e,t)=>{z(e&&e.kind===`Document`,1);let n=e.definitions.filter(e=>e.kind===`OperationDefinition`);t&&z(n.length==1&&n[0].operation===t,4,t,t,n[0].operation),kt(e,{Field(t,r,i,a){if(t.alias&&(t.alias.value===`__typename`||t.alias.value.startsWith(`__ac_`))&&t.alias.value!==t.name.value){let r=e,i=[];for(let e of a)r=r[e],r.kind===`Field`&&i.push(r.alias?.value||r.name.value);throw i.splice(-1,1,t.name.value),Zi(5,t.alias.value,i.join(`.`),n[0].operation,oa(e,`(anonymous)`))}}})},{max:aa.checkDocument||2e3}),{toString:Oa}=Object.prototype;function ka(e){return e.length===0?Pr:new R(t=>{let{length:n}=e,r=Array(n),i=new Map;e.forEach((e,t)=>{i.has(e)||i.set(e,new Set),i.get(e).add(t)});let a=i.size,o=i.size,s;i.forEach((n,i)=>{let c=!1,l=i.subscribe({next:a=>{n.forEach(e=>r[e]=a),c||(c=!0,o--),o||(s||(s=new Set(e.filter(e=>e.dirty))),s.delete(i),s.size||(t.next(r.slice()),s=void 0))},complete:()=>{a--,a||t.complete()},error:t.error.bind(t)});t.add(l)})})}function Aa(...e){let t={};return e.forEach(e=>{e&&Reflect.ownKeys(e).forEach(n=>{let r=e[n];r!==void 0&&(t[n]=r)})}),t}function ja(e=[]){let t={};return e.forEach(e=>{t[e.name.value]=e}),t}function Ma(e){return typeof e==`object`&&!!e}var{hasOwnProperty:Na}=Object.prototype,Pa=function(e,t,n){return this.merge(e[n],t[n])},Fa=e=>isNaN(+e)?{}:[],Ia=class{constructor(e={}){S(this,`options`,void 0),S(this,`reconciler`,void 0),S(this,`isObject`,Ma),S(this,`pastCopies`,new Set),this.options=e,this.reconciler=e.reconciler||Pa}merge(e,t,n={}){let r=n.atPath;if(r?.length){let[i,...a]=r;e===void 0&&(e=Fa(i));let o=e[i];o===void 0&&a.length&&(o=Fa(a[0]));let s=this.merge(o,t,{...n,atPath:a});return o!==s&&(e=this.shallowCopyForMerge(e),e[i]=s),e}return Array.isArray(e)&&Array.isArray(t)&&this.options.arrayMerge===`truncate`&&e.length>t.length&&(e=e.slice(0,t.length),this.pastCopies.add(e)),Ma(t)&&Ma(e)?(Object.keys(t).forEach(n=>{if(Na.call(e,n)){let r=e[n];if(t[n]!==r){let i=this.reconciler(e,t,n);i!==r&&(e=this.shallowCopyForMerge(e),e[n]=i)}}else e=this.shallowCopyForMerge(e),e[n]=t[n]}),e):t}shallowCopyForMerge(e){return Ma(e)&&(this.pastCopies.has(e)||(e=Array.isArray(e)?e.slice(0):{__proto__:Object.getPrototypeOf(e),...e},this.pastCopies.add(e))),e}};function La(e){let t={},n=e&&e.variableDefinitions;return n&&n.length&&n.forEach(e=>{e.defaultValue&&na(t,e.variable.name,e.defaultValue)}),t}function Ra(e,t){switch(e.kind){case`InlineFragment`:return e;case`FragmentSpread`:{let n=e.name.value;if(typeof t==`function`)return t(n);let r=t&&t[n];return z(r,9,n),r||null}default:return null}}function za(e,t){let n=t,r=[];return e.definitions.forEach(e=>{if(e.kind===`OperationDefinition`)throw Zi(10,e.operation,e.name?` named '${e.name.value}'`:``);e.kind===`FragmentDefinition`&&r.push(e)}),n===void 0&&(z(r.length===1,11,r.length),n=r[0].name.value),{...e,definitions:[{kind:`OperationDefinition`,operation:`query`,selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:n}}]}},...e.definitions]}}function Ba(e){z(e.kind===`Document`,6),z(e.definitions.length<=1,7);let t=e.definitions[0];return z(t.kind===`FragmentDefinition`,8),t}function Va(e){return e.definitions.filter(e=>e.kind===`FragmentDefinition`)}function Ha(e){Da(e);let t;for(let n of e.definitions){if(n.kind===`OperationDefinition`)return n;n.kind===`FragmentDefinition`&&!t&&(t=n)}if(t)return t;throw Zi(12)}function Ua(e){return Da(e),e.definitions.filter(e=>e.kind===`OperationDefinition`)[0]}function Wa(e){let t=Ua(e);return z(t&&t.operation===`query`,13),t}var Ga=Object.assign(function(e){return JSON.stringify(e,qa)},{reset(){Ka=new Ta(aa.canonicalStringify||1e3)}}),Ka;Ga.reset();function qa(e,t){if(t&&typeof t==`object`){let e=Object.getPrototypeOf(t);if(e===Object.prototype||e===null){let n=Object.keys(t);if(n.every(Ja))return t;let r=JSON.stringify(n),i=Ka.get(r);if(!i){n.sort();let e=JSON.stringify(n);i=Ka.get(e)||n,Ka.set(r,i),Ka.set(e,i)}let a=Object.create(e);return i.forEach(e=>{a[e]=t[e]}),a}}return t}function Ja(e,t,n){return t===0||n[t-1]<=e}var Ya=[`connection`,`include`,`skip`,`client`,`rest`,`export`,`nonreactive`,`stream`],Xa=Ga,Za=Object.assign(function(e,t,n){if(t&&n&&n.connection&&n.connection.key){if(n.connection.filter&&n.connection.filter.length>0){let e=n.connection.filter?n.connection.filter:[];e.sort();let r={};e.forEach(e=>{r[e]=t[e]});let i=Xa(r);if(i!==`{}`)return`${n.connection.key}(${i})`}return n.connection.key}let r=e;if(t){let e=Xa(t);e!==`{}`&&(r+=`(${e})`)}return n&&Object.keys(n).forEach(e=>{Ya.indexOf(e)===-1&&(n[e]&&Object.keys(n[e]).length?r+=`@${e}(${Xa(n[e])})`:r+=`@${e}`)}),r},{setStringify(e){let t=Xa;return Xa=e,t}});function Qa(e){return!!e.errors?.length}function $a(e,t,n){let r=new Set(e),i=r.size;return kt(t,{Directive(e){if(r.delete(e.name.value)&&(!n||!r.size))return Ot}}),n?!r.size:r.size<i}function eo(e){let t=!1;return kt(e,{Directive:{enter(e){if(e.name.value===`client`&&e.arguments&&(t=e.arguments.some(e=>e.name.value===`always`&&e.value.kind===`BooleanValue`&&e.value.value===!0),t))return Ot}}}),t}var B=Array.isArray;function to(e){return Ma(e)&&e.kind===`Document`&&Array.isArray(e.definitions)}function no(e){return e.kind===`Field`}function ro(e){return Array.isArray(e)&&e.length>0}function io(e){return typeof e==`object`&&!!e&&(Object.getPrototypeOf(e)===Object.prototype||Object.getPrototypeOf(e)===null)}function ao(e){return{__ref:String(e)}}function oo(e){return e}function so(e){let t=e[0]||{},n=e.length;if(n>1){let r=new Ia;for(let i=1;i<n;++i)t=r.merge(t,e[i])}return t}function co(e,t){return Aa(e,t,t.variables&&{variables:Aa({...e&&e.variables,...t.variables})})}function lo(e,t){return uo(e,t)}function uo(e,t,n=new Map){if(n.has(e))return n.get(e);let r=!1;if(Array.isArray(e)){let i=[];if(n.set(e,i),e.forEach((e,a)=>{let o=uo(e,t,n);r||(r=o!==e),i[a]=o}),r)return i}else if(io(e)){let i=Object.create(Object.getPrototypeOf(e));if(n.set(e,i),Object.keys(e).forEach(a=>{if(a===t){r=!0;return}let o=uo(e[a],t,n);r||(r=o!==e[a]),i[a]=o}),r)return i}return e}function fo(e){return e.catch(()=>{}),e}function po(e,t){Da(t);let n=mo(``),r=mo(``),i=e=>{for(let t=0,i;t<e.length&&(i=e[t]);++t)if(!B(i)){if(i.kind===`OperationDefinition`)return n(i.name&&i.name.value);if(i.kind===`FragmentDefinition`)return r(i.name.value)}return z.error(14),null},a=0;for(let e=t.definitions.length-1;e>=0;--e)t.definitions[e].kind===`OperationDefinition`&&++a;let o=ho(e),s=e=>ro(e)&&e.map(o).some(e=>e&&e.remove),c=new Map,l=!1,u={enter(e){if(s(e.directives))return l=!0,null}},d=kt(t,{Field:u,InlineFragment:u,VariableDefinition:{enter(){return!1}},Variable:{enter(e,t,n,r,a){let o=i(a);o&&o.variables.add(e.name.value)}},FragmentSpread:{enter(e,t,n,r,a){if(s(e.directives))return l=!0,null;let o=i(a);o&&o.fragmentSpreads.add(e.name.value)}},FragmentDefinition:{enter(e,t,n,r){c.set(JSON.stringify(r),e)},leave(e,t,n,i){if(e===c.get(JSON.stringify(i)))return e;if(a>0&&e.selectionSet.selections.every(e=>e.kind===`Field`&&e.name.value===`__typename`))return r(e.name.value).removed=!0,l=!0,null}},Directive:{leave(e){if(o(e))return l=!0,null}}});if(!l)return t;let f=e=>(e.transitiveVars||(e.transitiveVars=new Set(e.variables),e.removed||e.fragmentSpreads.forEach(t=>{f(r(t)).transitiveVars.forEach(t=>{e.transitiveVars.add(t)})})),e),p=new Set;d.definitions.forEach(e=>{e.kind===`OperationDefinition`?f(n(e.name&&e.name.value)).fragmentSpreads.forEach(e=>{p.add(e)}):e.kind===`FragmentDefinition`&&a===0&&!r(e.name.value).removed&&p.add(e.name.value)}),p.forEach(e=>{f(r(e)).fragmentSpreads.forEach(e=>{p.add(e)})});let m=e=>!!(!p.has(e)||r(e).removed),h={enter(e){if(m(e.name.value))return null}};return _o(kt(d,{FragmentSpread:h,FragmentDefinition:h,OperationDefinition:{leave(e){if(e.variableDefinitions){let t=f(n(e.name&&e.name.value)).transitiveVars;if(t.size<e.variableDefinitions.length)return{...e,variableDefinitions:e.variableDefinitions.filter(e=>t.has(e.variable.name.value))}}}}}))}function mo(e){let t=new Map;return function(n=e){let r=t.get(n);return r||t.set(n,r={variables:new Set,fragmentSpreads:new Set}),r}}function ho(e){let t=new Map,n=new Map;return e.forEach(e=>{e&&(e.name?t.set(e.name,e):e.test&&n.set(e.test,e))}),e=>{let r=t.get(e.name.value);return!r&&n.size&&n.forEach((t,n)=>{n(e)&&(r=t)}),r}}function go(e,t){return!e||e.selectionSet.selections.every(e=>e.kind===`FragmentSpread`&&go(t[e.name.value],t))}function _o(e){return go(Ua(e)||Ba(e),ja(Va(e)))?null:e}function vo(e){return kt(e,{FragmentSpread(e){if(!e.directives?.some(({name:e})=>e.value===`unmask`))return null}})}function yo(e){return e.alias?e.alias.value:e.name.value}function bo({directives:e},t){return!e||!e.length||So(e).every(({directive:e,ifArgument:n})=>{let r=!1;return n.value.kind===`Variable`?(r=t&&t[n.value.name.value],z(r!==void 0,15,e.name.value)):r=n.value.value,e.name.value===`skip`?!r:r})}function xo({name:{value:e}}){return e===`skip`||e===`include`}function So(e){let t=[];return e&&e.length&&e.forEach(e=>{if(!xo(e))return;let n=e.arguments,r=e.name.value;z(n&&n.length===1,16,r);let i=n[0];z(i.name&&i.name.value===`if`,17,r);let a=i.value;z(a&&(a.kind===`Variable`||a.kind===`BooleanValue`),18,r),t.push({directive:e,ifArgument:i})}),t}function Co(e,t){let n=null;e.directives&&(n={},e.directives.forEach(e=>{n[e.name.value]={},e.arguments&&e.arguments.forEach(({name:r,value:i})=>na(n[e.name.value],r,i,t))}));let r=null;return e.arguments&&e.arguments.length&&(r={},e.arguments.forEach(({name:e,value:n})=>na(r,e,n,t))),Za(e.name.value,r,n)}function wo(e){let t={data:e.data};return e.error&&(t.error=e.error),t}function To(e,t=()=>void 0){return n=>new R(r=>{let i=t();return n.subscribe({next(t){let n;try{n=e(t,i)}catch(e){r.error(e)}n!==void 0&&r.next(n)},error(e){r.error(e)},complete(){r.complete()}})})}var{toString:Eo,hasOwnProperty:Do}=Object.prototype,Oo=Function.prototype.toString,ko=new Map;function V(e,t){try{return Ao(e,t)}finally{ko.clear()}}function Ao(e,t){if(e===t)return!0;let n=Eo.call(e);if(n!==Eo.call(t))return!1;switch(n){case`[object Array]`:if(e.length!==t.length)return!1;case`[object Object]`:{if(Fo(e,t))return!0;let n=jo(e),r=jo(t),i=n.length;if(i!==r.length)return!1;for(let e=0;e<i;++e)if(!Do.call(t,n[e]))return!1;for(let r=0;r<i;++r){let i=n[r];if(!Ao(e[i],t[i]))return!1}return!0}case`[object Error]`:return e.name===t.name&&e.message===t.message;case`[object Number]`:if(e!==e)return t!==t;case`[object Boolean]`:case`[object Date]`:return+e==+t;case`[object RegExp]`:case`[object String]`:return e==`${t}`;case`[object Map]`:case`[object Set]`:{if(e.size!==t.size)return!1;if(Fo(e,t))return!0;let r=e.entries(),i=n===`[object Map]`;for(;;){let e=r.next();if(e.done)break;let[n,a]=e.value;if(!t.has(n)||i&&!Ao(a,t.get(n)))return!1}return!0}case`[object Uint16Array]`:case`[object Uint8Array]`:case`[object Uint32Array]`:case`[object Int32Array]`:case`[object Int8Array]`:case`[object Int16Array]`:case`[object ArrayBuffer]`:e=new Uint8Array(e),t=new Uint8Array(t);case`[object DataView]`:{let n=e.byteLength;if(n===t.byteLength)for(;n--&&e[n]===t[n];);return n===-1}case`[object AsyncFunction]`:case`[object GeneratorFunction]`:case`[object AsyncGeneratorFunction]`:case`[object Function]`:{let n=Oo.call(e);return n===Oo.call(t)&&!Po(n,No)}}return!1}function jo(e){return Object.keys(e).filter(Mo,e)}function Mo(e){return this[e]!==void 0}var No=`{ [native code] }`;function Po(e,t){let n=e.length-t.length;return n>=0&&e.indexOf(t,n)===n}function Fo(e,t){let n=ko.get(e);if(n){if(n.has(t))return!0}else ko.set(e,n=new Set);return n.add(t),!1}function Io(e,{data:t,...n},{data:r,...i},a){return V(n,i)&&Lo(Ha(e).selectionSet,t,r,{fragmentMap:ja(Va(e)),variables:a})}function Lo(e,t,n,r){if(t===n)return!0;let i=new Set;return e.selections.every(e=>{if(i.has(e)||(i.add(e),!bo(e,r.variables))||Ro(e))return!0;if(no(e)){let i=yo(e),a=t&&t[i],o=n&&n[i],s=e.selectionSet;if(!s)return V(a,o);let c=Array.isArray(a),l=Array.isArray(o);if(c!==l)return!1;if(c&&l){let e=a.length;if(o.length!==e)return!1;for(let t=0;t<e;++t)if(!Lo(s,a[t],o[t],r))return!1;return!0}return Lo(s,a,o,r)}{let i=Ra(e,r.fragmentMap);if(i)return Ro(i)?!0:Lo(i.selectionSet,t,n,r)}})}function Ro(e){return!!e.directives&&e.directives.some(zo)}function zo(e){return e.name.value===`nonreactive`}function Bo(e,t){let n,r;function i(e){return e!==n&&(n=e,r=t(n)),r}return Object.assign(e.pipe(Si(i),Li({bufferSize:1,refCount:!0})),{getCurrentResult:()=>i(e.getCurrentResult())})}var Vo=Ea(function(e,t,n){return Bo(e,n)},{max:1,makeCacheKey:e=>e.slice(0,2)}),Ho=Symbol.for(`apollo.result.extensions`),Uo=Symbol.for(`apollo.result.streamInfo`),Wo=Symbol.for(`apollo.observableQuery.variablesUnknown`),Go=null,Ko={},qo=1,Jo=()=>class{constructor(){this.id=[`slot`,qo++,Date.now(),Math.random().toString(36).slice(2)].join(`:`)}hasValue(){for(let e=Go;e;e=e.parent)if(this.id in e.slots){let t=e.slots[this.id];if(t===Ko)break;return e!==Go&&(Go.slots[this.id]=t),!0}return Go&&(Go.slots[this.id]=Ko),!1}getValue(){if(this.hasValue())return Go.slots[this.id]}withValue(e,t,n,r){let i={__proto__:null,[this.id]:e},a=Go;Go={parent:a,slots:i};try{return t.apply(r,n)}finally{Go=a}}static bind(e){let t=Go;return function(){let n=Go;try{return Go=t,e.apply(this,arguments)}finally{Go=n}}}static noContext(e,t,n){if(Go){let r=Go;try{return Go=null,e.apply(n,t)}finally{Go=r}}else return e.apply(n,t)}};function Yo(e){try{return e()}catch{}}var Xo=`@wry/context:Slot`,Zo=Yo(()=>globalThis)||Yo(()=>global)||Object.create(null),Qo=Zo[Xo]||Array[Xo]||(function(e){try{Object.defineProperty(Zo,Xo,{value:e,enumerable:!1,writable:!1,configurable:!0})}finally{return e}})(Jo()),{bind:$o,noContext:es}=Qo,ts=new Qo,{hasOwnProperty:ns}=Object.prototype,rs=Array.from||function(e){let t=[];return e.forEach(e=>t.push(e)),t};function is(e){let{unsubscribe:t}=e;typeof t==`function`&&(e.unsubscribe=void 0,t())}var as=[],os=100;function ss(e,t){if(!e)throw Error(t||`assertion failure`)}function cs(e,t){let n=e.length;return n>0&&n===t.length&&e[n-1]===t[n-1]}function ls(e){switch(e.length){case 0:throw Error(`unknown value`);case 1:return e[0];case 2:throw e[1]}}function us(e){return e.slice(0)}var ds=class e{constructor(t){this.fn=t,this.parents=new Set,this.childValues=new Map,this.dirtyChildren=null,this.dirty=!0,this.recomputing=!1,this.value=[],this.deps=null,++e.count}peek(){if(this.value.length===1&&!hs(this))return fs(this),this.value[0]}recompute(e){return ss(!this.recomputing,`already recomputing`),fs(this),hs(this)?ps(this,e):ls(this.value)}setDirty(){this.dirty||(this.dirty=!0,_s(this),is(this))}dispose(){this.setDirty(),Cs(this),ys(this,(e,t)=>{e.setDirty(),ws(e,this)})}forget(){this.dispose()}dependOn(e){e.add(this),this.deps||(this.deps=as.pop()||new Set),this.deps.add(e)}forgetDeps(){this.deps&&(rs(this.deps).forEach(e=>e.delete(this)),this.deps.clear(),as.push(this.deps),this.deps=null)}};ds.count=0;function fs(e){let t=ts.getValue();if(t)return e.parents.add(t),t.childValues.has(e)||t.childValues.set(e,[]),hs(e)?bs(t,e):xs(t,e),t}function ps(e,t){return Cs(e),ts.withValue(e,ms,[e,t]),Ts(e,t)&&gs(e),ls(e.value)}function ms(e,t){e.recomputing=!0;let{normalizeResult:n}=e,r;n&&e.value.length===1&&(r=us(e.value)),e.value.length=0;try{if(e.value[0]=e.fn.apply(null,t),n&&r&&!cs(r,e.value))try{e.value[0]=n(e.value[0],r[0])}catch{}}catch(t){e.value[1]=t}e.recomputing=!1}function hs(e){return e.dirty||!!(e.dirtyChildren&&e.dirtyChildren.size)}function gs(e){e.dirty=!1,!hs(e)&&vs(e)}function _s(e){ys(e,bs)}function vs(e){ys(e,xs)}function ys(e,t){let n=e.parents.size;if(n){let r=rs(e.parents);for(let i=0;i<n;++i)t(r[i],e)}}function bs(e,t){ss(e.childValues.has(t)),ss(hs(t));let n=!hs(e);if(!e.dirtyChildren)e.dirtyChildren=as.pop()||new Set;else if(e.dirtyChildren.has(t))return;e.dirtyChildren.add(t),n&&_s(e)}function xs(e,t){ss(e.childValues.has(t)),ss(!hs(t));let n=e.childValues.get(t);n.length===0?e.childValues.set(t,us(t.value)):cs(n,t.value)||e.setDirty(),Ss(e,t),!hs(e)&&vs(e)}function Ss(e,t){let n=e.dirtyChildren;n&&(n.delete(t),n.size===0&&(as.length<os&&as.push(n),e.dirtyChildren=null))}function Cs(e){e.childValues.size>0&&e.childValues.forEach((t,n)=>{ws(e,n)}),e.forgetDeps(),ss(e.dirtyChildren===null)}function ws(e,t){t.parents.delete(e),e.childValues.delete(t),Ss(e,t)}function Ts(e,t){if(typeof e.subscribe==`function`)try{is(e),e.unsubscribe=e.subscribe.apply(null,t)}catch{return e.setDirty(),!1}return!0}var Es={setDirty:!0,dispose:!0,forget:!0};function Ds(e){let t=new Map,n=e&&e.subscribe;function r(e){let r=ts.getValue();if(r){let i=t.get(e);i||t.set(e,i=new Set),r.dependOn(i),typeof n==`function`&&(is(i),i.unsubscribe=n(e))}}return r.dirty=function(e,n){let r=t.get(e);if(r){let i=n&&ns.call(Es,n)?n:`setDirty`;rs(r).forEach(e=>e[i]()),t.delete(e),is(r)}},r}var Os;function ks(...e){return(Os||(Os=new da(typeof WeakMap==`function`))).lookupArray(e)}var As=new Set;function js(e,{max:t=2**16,keyArgs:n,makeCacheKey:r=ks,normalizeResult:i,subscribe:a,cache:o=ma}=Object.create(null)){let s=typeof o==`function`?new o(t,e=>e.dispose()):o,c=function(){let t=r.apply(null,n?n.apply(null,arguments):arguments);if(t===void 0)return e.apply(null,arguments);let o=s.get(t);o||(s.set(t,o=new ds(e)),o.normalizeResult=i,o.subscribe=a,o.forget=()=>s.delete(t));let c=o.recompute(Array.prototype.slice.call(arguments));return s.set(t,o),As.add(s),ts.hasValue()||(As.forEach(e=>e.clean()),As.clear()),c};Object.defineProperty(c,"size",{get:()=>s.size,configurable:!1,enumerable:!1}),Object.freeze(c.options={max:t,keyArgs:n,makeCacheKey:r,normalizeResult:i,subscribe:a,cache:s});function l(e){let t=e&&s.get(e);t&&t.setDirty()}c.dirtyKey=l,c.dirty=function(){l(r.apply(null,arguments))};function u(e){let t=e&&s.get(e);if(t)return t.peek()}c.peekKey=u,c.peek=function(){return u(r.apply(null,arguments))};function d(e){return e?s.delete(e):!1}return c.forgetKey=d,c.forget=function(){return d(r.apply(null,arguments))},c.makeCacheKey=r,c.getKey=n?function(){return r.apply(null,n.apply(null,arguments))}:r,Object.freeze(c)}function Ms(...e){return ks.bind(null,...e)}var Ns=class{constructor(){S(this,`startRequest`,void 0)}isIncrementalResult(e){return!1}prepareRequest(e){return z(!$a([`defer`,`stream`],e.query),67),e}extractErrors(){}};function Ps(e,{client:t}){let n={query:e.query,variables:e.variables||{},extensions:e.extensions||{},operationName:oa(e.query),operationType:Ua(e.query).operation},r={...e.context},i=e=>{r=typeof e==`function`?{...r,...e(a())}:{...r,...e}},a=()=>Object.freeze({...r});return Object.defineProperty(n,"setContext",{enumerable:!1,value:i}),Object.defineProperty(n,"getContext",{enumerable:!1,value:a}),Object.defineProperty(n,"client",{enumerable:!1,value:t}),n}function Fs(e,t){let n={...e},r=new Set(Object.keys(e));return kt(t,{Variable(e,t,n){n&&n.kind!==`VariableDefinition`&&r.delete(e.name.value)}}),r.forEach(e=>{delete n[e]}),n}var Is=class e{static empty(){return new e(()=>Pr)}static from(t){if(t.length===0)return e.empty();let[n,...r]=t;return n.concat(...r)}static split(t,n,r=new e((e,t)=>t(e))){let i=new e((e,i)=>t(e)?n.request(e,i):r.request(e,i));return Object.assign(i,{left:n,right:r})}static execute(e,t,n){return e.request(Ps(t,n),()=>Pr)}static concat(...t){return e.from(t)}constructor(e){S(this,`left`,void 0),S(this,`right`,void 0),e&&(this.request=e)}split(t,n,r){return this.concat(e.split(t,n,r))}concat(...e){return e.length===0?this:e.reduce(this.combine.bind(this),this)}combine(t,n){let r=new e((e,r)=>t.request(e,e=>n.request(e,r)));return Object.assign(r,{left:t,right:n})}request(e,t){throw Zi(65)}},Ls=Is.execute;function Rs(e){return e}var zs=class e{getCacheKey(e){return[e]}static identity(){return new e(Rs,{cache:!1})}static split(t,n,r=e.identity()){return Object.assign(new e(e=>(t(e)?n:r).transformDocument(e),{cache:!1}),{left:n,right:r})}constructor(e,t={}){S(this,`transform`,void 0),S(this,`cached`,void 0),S(this,`resultCache`,new WeakSet),S(this,`left`,void 0),S(this,`right`,void 0),this.transform=e,t.getCacheKey&&(this.getCacheKey=t.getCacheKey),this.cached=t.cache!==!1,this.resetCache()}resetCache(){if(this.cached){let t=new da;this.performWork=js(e.prototype.performWork.bind(this),{makeCacheKey:e=>{let n=this.getCacheKey(e);if(n)return z(Array.isArray(n),20),t.lookupArray(n)},max:aa[`documentTransform.cache`],cache:xa})}}performWork(e){return Da(e),this.transform(e)}transformDocument(e){if(this.resultCache.has(e))return e;let t=this.performWork(e);return this.resultCache.add(t),t}concat(t){return Object.assign(new e(e=>t.transformDocument(this.transformDocument(e)),{cache:!1}),{left:this,right:t})}},Bs,Vs=Object.assign(e=>{let t=Bs.get(e);return t||(t=jt(e),Bs.set(e,t)),t},{reset(){Bs=new wa(aa.print||2e3)}});Vs.reset();function H(e){return!!(e&&typeof e==`object`&&typeof e.__ref==`string`)}var Hs={kind:we,name:{kind:be,value:`__typename`}},Us=Object.assign(function(e){return kt(e,{SelectionSet:{enter(e,t,n){if(n&&n.kind===`OperationDefinition`)return;let{selections:r}=e;if(!r||r.some(e=>e.kind===`Field`&&(e.name.value===`__typename`||e.name.value.lastIndexOf(`__`,0)===0)))return;let i=n;if(!(i.kind===`Field`&&i.directives&&i.directives.some(e=>e.name.value===`export`)))return{...e,selections:[...r,Hs]}}}})},{added(e){return e===Hs}});function Ws(e){return lo(e,`__typename`)}function Gs(e){return e===7||e===8}function Ks(e){return!Gs(e)}var qs=class{constructor(){S(this,`assumeImmutableResults`,!1),S(this,`fragmentWatches`,new da(!0)),S(this,`onAfterBroadcast`,e=>e()),S(this,`getFragmentDoc`,js(za,{max:aa[`cache.fragmentQueryDocuments`]||1e3,cache:xa,makeCacheKey:Ms(this)}))}lookupFragment(e){return null}batch(e){let t=typeof e.optimistic==`string`?e.optimistic:e.optimistic===!1?null:void 0,n;return this.performTransaction(()=>n=e.update(this),t),n}recordOptimisticTransaction(e,t){this.performTransaction(e,t)}transformDocument(e){return e}transformForLink(e){return e}identify(e){}gc(){return[]}modify(e){return!1}readQuery(e,t=!!e.optimistic){return this.read({...e,rootId:e.id||`ROOT_QUERY`,optimistic:t})}watchFragment(e){let{fragment:t,fragmentName:n,from:r}=e,i=this.getFragmentDoc(t,n),a=(Array.isArray(r)?r:[r]).map(e=>e==null?e:this.toCacheId(e));if(!Array.isArray(r)){let t=this.watchSingleFragment(a[0],i,e);return r===null?t:Vo(t,Symbol.for(`apollo.transform.individualResult`),e=>({...e,data:e.data??{}}))}let o;function s(e){let t=e.reduce((e,t,n)=>(e.data.push(t.data),e.complete&&(e.complete=t.complete),e.dataState=e.complete?`complete`:`partial`,t.missing&&(e.missing||(e.missing={}),e.missing[n]=t.missing),e),{data:[],dataState:`complete`,complete:!0});return V(o,t)||(o=t),o}if(a.length===0)return Zs;let c=!1,l=a.map(t=>this.watchSingleFragment(t,i,e)),u=ka(l).pipe(Si(s),zi({subscribe:()=>c=!0,unsubscribe:()=>c=!1}),Li({bufferSize:1,refCount:!0}));return Object.assign(u,{getCurrentResult:()=>c&&o?o:s(l.map(e=>e.getCurrentResult()))})}watchSingleFragment(e,t,n){if(e===null)return Ys;let{optimistic:r=!0,variables:i}=n,a=[t,Ga({id:e,optimistic:r,variables:i})],o=this.fragmentWatches.lookupArray(a);if(!o.observable){let s=!1,c;function l(e){let r=e.result;return(!c||!Io(t,{data:c.data},{data:r},n.variables))&&(c={data:r,dataState:e.complete?`complete`:`partial`,complete:e.complete},e.missing&&(c.missing=e.missing.missing)),c}let u=new R(n=>{s=!0;let o=this.watch({variables:i,returnPartialData:!0,id:e,query:t,optimistic:r,immediate:!0,callback:e=>{u.dirty=!0,this.onAfterBroadcast(()=>{n.next(l(e)),u.dirty=!1})}});return()=>{s=!1,o(),this.fragmentWatches.removeArray(a)}}).pipe(ji(),Fi({connector:()=>new _r(1),resetOnRefCountZero:()=>Oi(0)}));o.observable=Object.assign(u,{dirty:!1,getCurrentResult:()=>s&&c?c:l(this.diff({id:e,query:t,returnPartialData:!0,optimistic:r,variables:i}))})}return o.observable}readFragment(e,t=!!e.optimistic){let n=e.from===void 0?e.id:this.toCacheId(e.from);return this.read({...e,query:this.getFragmentDoc(e.fragment,e.fragmentName),rootId:n,optimistic:t})}writeQuery({id:e,data:t,...n}){return this.write(Object.assign(n,{dataId:e||`ROOT_QUERY`,result:t}))}writeFragment({data:e,fragment:t,fragmentName:n,...r}){let i=r.from===void 0?r.id:this.toCacheId(r.from);return this.write(Object.assign(r,{query:this.getFragmentDoc(t,n),dataId:i,result:e}))}updateQuery(e,t){return this.batch({update(n){let r=n.readQuery(e),i=t(r);return i==null?r:(n.writeQuery({...e,data:i}),i)}})}updateFragment(e,t){return this.batch({update(n){let r=n.readFragment(e),i=t(r);return i==null?r:(n.writeFragment({...e,data:i}),i)}})}toCacheId(e){return typeof e==`string`?e:this.identify(e)}},Js=Object.freeze({data:null,dataState:`complete`,complete:!0}),Ys=Object.assign(new R(e=>{e.next(Js)}),{dirty:!1,getCurrentResult:()=>Js}),Xs=Object.freeze({data:[],dataState:`complete`,complete:!0}),Zs=Object.assign(new R(e=>{e.next(Xs)}),{getCurrentResult:()=>Xs}),Qs=class e extends Error{constructor(t,n,r,i){if(super(t),S(this,`message`,void 0),S(this,`path`,void 0),S(this,`query`,void 0),S(this,`variables`,void 0),S(this,`missing`,void 0),this.message=t,this.path=n,this.query=r,this.variables=i,this.name=`MissingFieldError`,Array.isArray(this.path)){this.missing=this.message;for(let e=this.path.length-1;e>=0;--e)this.missing={[this.path[e]]:this.missing}}else this.missing=this.path;this.__proto__=e.prototype}},{hasOwnProperty:$s}=Object.prototype;function ec({__typename:e,id:t,_id:n},r){if(typeof e==`string`&&(r&&(r.keyObject=t==null?n==null?void 0:{_id:n}:{id:t}),t==null&&n!=null&&(t=n),t!=null))return`${e}:${typeof t==`number`||typeof t==`string`?t:JSON.stringify(t)}`}var tc={dataIdFromObject:ec,resultCaching:!0};function nc(e){return Aa(tc,e)}var rc=/^[_a-z][_0-9a-z]*/i;function ic(e){let t=e.match(rc);return t?t[0]:e}function ac(e,t,n){return Ma(t)?B(t)?t.every(t=>ac(e,t,n)):e.selections.every(e=>{if(no(e)&&bo(e,n)){let r=yo(e);return $s.call(t,r)&&(!e.selectionSet||ac(e.selectionSet,t[r],n))}return!0}):!1}function oc(e){return Ma(e)&&!H(e)&&!B(e)}function sc(){return new Ia}function cc(e,t){let n=ja(Va(e));return{fragmentMap:n,lookupFragment(e){let r=n[e];return!r&&t&&(r=t.lookup(e)),r||null}}}var lc={},uc=()=>lc,dc={},fc=class{constructor(e,t){S(this,`policies`,void 0),S(this,`group`,void 0),S(this,`data`,{}),S(this,`rootIds`,{}),S(this,`refs`,{}),S(this,`getFieldValue`,(e,t)=>oo(H(e)?this.get(e.__ref,t):e&&e[t])),S(this,`canRead`,e=>H(e)?this.has(e.__ref):typeof e==`object`),S(this,`toReference`,(e,t)=>{if(typeof e==`string`)return ao(e);if(H(e))return e;let[n]=this.policies.identify(e);if(n){let r=ao(n);return t&&this.merge(n,e),r}}),this.policies=e,this.group=t}toObject(){return{...this.data}}has(e){return this.lookup(e,!0)!==void 0}get(e,t){if(this.group.depend(e,t),$s.call(this.data,e)){let n=this.data[e];if(n&&$s.call(n,t))return n[t]}if(t===`__typename`&&$s.call(this.policies.rootTypenamesById,e))return this.policies.rootTypenamesById[e];if(this instanceof gc)return this.parent.get(e,t)}lookup(e,t){if(t&&this.group.depend(e,`__exists`),$s.call(this.data,e))return this.data[e];if(this instanceof gc)return this.parent.lookup(e,t);if(this.policies.rootTypenamesById[e])return{}}merge(e,t){let n;H(e)&&(e=e.__ref),H(t)&&(t=t.__ref);let r=typeof e==`string`?this.lookup(n=e):e,i=typeof t==`string`?this.lookup(n=t):t;if(!i)return;z(typeof n==`string`,105);let a=new Ia({reconciler:vc}).merge(r,i);if(this.data[n]=a,a!==r&&(delete this.refs[n],this.group.caching)){let e={};r||(e.__exists=1),Object.keys(i).forEach(t=>{if(!r||r[t]!==a[t]){e[t]=1;let n=ic(t);n!==t&&!this.policies.hasKeyArgs(a.__typename,n)&&(e[n]=1),a[t]===void 0&&!(this instanceof gc)&&delete a[t]}}),e.__typename&&!(r&&r.__typename)&&this.policies.rootTypenamesById[n]===a.__typename&&delete e.__typename,Object.keys(e).forEach(e=>this.group.dirty(n,e))}}modify(e,t,n){let r=this.lookup(e);if(r){let i={},a=!1,o=!0,s={DELETE:lc,INVALIDATE:dc,isReference:H,toReference:this.toReference,canRead:this.canRead,readField:(t,n)=>this.policies.readField(typeof t==`string`?{fieldName:t,from:n||ao(e)}:t,{store:this})};if(Object.keys(r).forEach(c=>{let l=ic(c),u=r[c];if(u===void 0)return;let d=typeof t==`function`?t:t[c]||(n?void 0:t[l]);if(d){let t=d===uc?lc:d(oo(u),{...s,fieldName:l,storeFieldName:c,storage:this.getStorage(e,c)});t===dc?this.group.dirty(e,c):(t===lc&&(t=void 0),t!==u&&(i[c]=t,a=!0,u=t))}u!==void 0&&(o=!1)}),a)return this.merge(e,i),o&&(this instanceof gc?this.data[e]=void 0:delete this.data[e],this.group.dirty(e,`__exists`)),!0}return!1}delete(e,t,n){let r=this.lookup(e);if(r){let i=this.getFieldValue(r,`__typename`),a=t&&n?this.policies.getStoreFieldName({typename:i,fieldName:t,args:n}):t;return this.modify(e,a?{[a]:uc}:uc,!!n)}return!1}evict(e,t){let n=!1;return e.id&&($s.call(this.data,e.id)&&(n=this.delete(e.id,e.fieldName,e.args)),this instanceof gc&&this!==t&&(n=this.parent.evict(e,t)||n),(e.fieldName||n)&&this.group.dirty(e.id,e.fieldName||`__exists`)),n}clear(){this.replace(null)}extract(){let e=this.toObject(),t=[];return this.getRootIdSet().forEach(e=>{$s.call(this.policies.rootTypenamesById,e)||t.push(e)}),t.length&&(e.__META={extraRootIds:t.sort()}),e}replace(e){if(Object.keys(this.data).forEach(t=>{e&&$s.call(e,t)||this.delete(t)}),e){let{__META:t,...n}=e;Object.keys(n).forEach(e=>{this.merge(e,n[e])}),t&&t.extraRootIds.forEach(this.retain,this)}}retain(e){return this.rootIds[e]=(this.rootIds[e]||0)+1}release(e){if(this.rootIds[e]>0){let t=--this.rootIds[e];return t||delete this.rootIds[e],t}return 0}getRootIdSet(e=new Set){return Object.keys(this.rootIds).forEach(e.add,e),this instanceof gc?this.parent.getRootIdSet(e):Object.keys(this.policies.rootTypenamesById).forEach(e.add,e),e}gc(){let e=this.getRootIdSet(),t=this.toObject();e.forEach(n=>{$s.call(t,n)&&(Object.keys(this.findChildRefIds(n)).forEach(e.add,e),delete t[n])});let n=Object.keys(t);if(n.length){let e=this;for(;e instanceof gc;)e=e.parent;n.forEach(t=>e.delete(t))}return n}findChildRefIds(e){if(!$s.call(this.refs,e)){let t=this.refs[e]={},n=this.data[e];if(!n)return t;let r=new Set([n]);r.forEach(e=>{H(e)&&(t[e.__ref]=!0),Ma(e)&&Object.keys(e).forEach(t=>{let n=e[t];Ma(n)&&r.add(n)})})}return this.refs[e]}makeCacheKey(){return this.group.keyMaker.lookupArray(arguments)}get supportsResultCaching(){return this.group.caching}},pc=class{constructor(e,t=null){S(this,`caching`,void 0),S(this,`parent`,void 0),S(this,`d`,null),S(this,`keyMaker`,void 0),this.caching=e,this.parent=t,this.resetCaching()}resetCaching(){this.d=this.caching?Ds():null,this.keyMaker=new da}depend(e,t){if(this.d){this.d(mc(e,t));let n=ic(t);n!==t&&this.d(mc(e,n)),this.parent&&this.parent.depend(e,t)}}dirty(e,t){this.d&&this.d.dirty(mc(e,t),t===`__exists`?`forget`:`setDirty`)}};function mc(e,t){return t+`#`+e}function hc(e,t){yc(e)&&e.group.depend(t,`__exists`)}fc.Root=class extends fc{constructor({policies:e,resultCaching:t=!0,seed:n}){super(e,new pc(t)),S(this,`stump`,new _c(this)),S(this,`storageTrie`,new da),n&&this.replace(n)}addLayer(e,t){return this.stump.addLayer(e,t)}removeLayer(){return this}getStorage(){return this.storageTrie.lookupArray(arguments)}};var gc=class e extends fc{constructor(e,t,n,r){super(t.policies,r),S(this,`id`,void 0),S(this,`parent`,void 0),S(this,`replay`,void 0),S(this,`group`,void 0),this.id=e,this.parent=t,this.replay=n,this.group=r,n(this)}addLayer(t,n){return new e(t,this,n,this.group)}removeLayer(e){let t=this.parent.removeLayer(e);return e===this.id?(this.group.caching&&Object.keys(this.data).forEach(e=>{let n=this.data[e],r=t.lookup(e);r?n?n!==r&&Object.keys(n).forEach(t=>{V(n[t],r[t])||this.group.dirty(e,t)}):(this.group.dirty(e,`__exists`),Object.keys(r).forEach(t=>{this.group.dirty(e,t)})):this.delete(e)}),t):t===this.parent?this:t.addLayer(this.id,this.replay)}toObject(){return{...this.parent.toObject(),...this.data}}findChildRefIds(e){let t=this.parent.findChildRefIds(e);return $s.call(this.data,e)?{...t,...super.findChildRefIds(e)}:t}getStorage(...e){let t=this.parent;for(;t.parent;)t=t.parent;return t.getStorage(...e)}},_c=class extends gc{constructor(e){super(`EntityStore.Stump`,e,()=>{},new pc(e.group.caching,e.group))}removeLayer(){return this}merge(e,t){return this.parent.merge(e,t)}};function vc(e,t,n){let r=e[n],i=t[n];return V(r,i)?r:i}function yc(e){return!!(e&&e.supportsResultCaching)}var bc=new Qo;function xc(e){let t=e.directives?.find(({name:e})=>e.value===`unmask`);if(!t)return`mask`;let n=t.arguments?.find(({name:e})=>e.value===`mode`);return n&&`value`in n.value&&n.value.value===`migrate`?`migrate`:`unmask`}function Sc(e,t,n){return bc.withValue(!0,()=>{let r=wc(e,t,n,!1);return Object.isFrozen(e),r})}function Cc(e,t){if(t.has(e))return t.get(e);let n=Array.isArray(e)?[]:{};return t.set(e,n),n}function wc(e,t,n,r,i){let{knownChanged:a}=n,o=Cc(e,n.mutableTargets);if(Array.isArray(e)){for(let[i,s]of Array.from(e.entries())){if(s===null){o[i]=null;continue}let e=wc(s,t,n,r,void 0);a.has(e)&&a.add(o),o[i]=e}return a.has(o)?o:e}for(let s of t.selections){let t;if(r&&a.add(o),s.kind===`Field`){let i=yo(s),c=s.selectionSet;if(t=o[i]||e[i],t===void 0)continue;if(c&&t!==null){let o=wc(e[i],c,n,r,void 0);a.has(o)&&(t=o)}o[i]=t}if(s.kind===`InlineFragment`&&(!s.typeCondition||n.cache.fragmentMatches(s,e.__typename))&&(t=wc(e,s.selectionSet,n,r,i)),s.kind===`FragmentSpread`){let r=s.name.value,a=n.fragmentMap[r]||(n.fragmentMap[r]=n.cache.lookupFragment(r));z(a,39,r);let o=xc(s);o!==`mask`&&(t=wc(e,a.selectionSet,n,o===`migrate`,i))}a.has(t)&&a.add(o)}return`__typename`in e&&!(`__typename`in o)&&(o.__typename=e.__typename),Object.keys(o).length!==Object.keys(e).length&&a.add(o),a.has(o)?o:e}function Tc(e,t,n,r){let i=t.definitions.filter(e=>e.kind===ke);r===void 0&&(z(i.length===1,41,i.length),r=i[0].name.value);let a=i.find(e=>e.name.value===r);return z(!!a,42,r),e==null||V(e,{})?e:Sc(e,a.selectionSet,{operationType:`fragment`,operationName:a.name.value,fragmentMap:ja(Va(t)),cache:n,mutableTargets:new WeakMap,knownChanged:new WeakSet})}function Ec(e,t,n){let r=Ua(t);return z(r,43),e==null?e:Sc(e,r.selectionSet,{operationType:r.operation,operationName:r.name?.value,fragmentMap:ja(Va(t)),cache:n,mutableTargets:new WeakMap,knownChanged:new WeakSet})}var Dc={};function Oc(e){let t=JSON.stringify(e);return Dc[t]||(Dc[t]={})}function kc(e){let t=Oc(e);return t.keyFieldsFn||(t.keyFieldsFn=(t,n)=>{let r=(e,t)=>n.readField(t,e),i=n.keyObject=jc(e,e=>{let i=Pc(n.storeObject,e,r);return i===void 0&&t!==n.storeObject&&$s.call(t,e[0])&&(i=Pc(t,e,Nc)),z(i!==void 0,108,e.join(`.`),t),i});return`${n.typename}:${JSON.stringify(i)}`})}function Ac(e){let t=Oc(e);return t.keyArgsFn||(t.keyArgsFn=(t,{field:n,variables:r,fieldName:i})=>{let a=jc(e,e=>{let i=e[0],a=i.charAt(0);if(a===`@`){if(n&&ro(n.directives)){let t=i.slice(1),a=n.directives.find(e=>e.name.value===t),o=a&&ra(a,r);return o&&Pc(o,e.slice(1))}return}if(a===`$`){let t=i.slice(1);if(r&&$s.call(r,t)){let n=e.slice(0);return n[0]=t,Pc(r,n)}return}if(t)return Pc(t,e)}),o=JSON.stringify(a);return(t||o!==`{}`)&&(i+=`:`+o),i})}function jc(e,t){let n=new Ia;return Mc(e).reduce((e,r)=>{let i=t(r);if(i!==void 0){for(let e=r.length-1;e>=0;--e)i={[r[e]]:i};e=n.merge(e,i)}return e},{})}function Mc(e){let t=Oc(e);if(!t.paths){let n=t.paths=[],r=[];e.forEach((t,i)=>{B(t)?(Mc(t).forEach(e=>n.push(r.concat(e))),r.length=0):(r.push(t),B(e[i+1])||(n.push(r.slice(0)),r.length=0))})}return t.paths}function Nc(e,t){return e[t]}function Pc(e,t,n){return n=n||Nc,Fc(t.reduce(function e(t,r){return B(t)?t.map(t=>e(t,r)):t&&n(t,r)},e))}function Fc(e){return Ma(e)?B(e)?e.map(Fc):jc(Object.keys(e).sort(),t=>Pc(e,t)):e}var Ic=new Qo,Lc=new WeakMap;function Rc(e){let t=Lc.get(e);return t||Lc.set(e,t={vars:new Set,dep:Ds()}),t}function zc(e){Rc(e).vars.forEach(t=>t.forgetCache(e))}function Bc(e){Rc(e).vars.forEach(t=>t.attachCache(e))}function Vc(e){let t=new Set,n=new Set,r=function(a){if(arguments.length>0){if(e!==a){e=a,t.forEach(e=>{Rc(e).dep.dirty(r),Hc(e)});let i=Array.from(n);n.clear(),i.forEach(t=>t(e))}}else{let e=Ic.getValue();e&&(i(e),Rc(e).dep(r))}return e};r.onNextChange=e=>(n.add(e),()=>{n.delete(e)});let i=r.attachCache=e=>(t.add(e),Rc(e).vars.add(r),r);return r.forgetCache=e=>t.delete(e),r}function Hc(e){e.broadcastWatches&&e.broadcastWatches()}function Uc(e){return e.args===void 0?e.field?ra(e.field,e.variables):null:e.args}var Wc=()=>void 0,Gc=(e,t)=>t.fieldName,Kc=(e,t,{mergeObjects:n})=>n(e,t),qc=(e,t)=>t,Jc=(e,t,{streamFieldInfo:n,existingData:r})=>{if(!e&&!r)return t;let i=[],a=e??r,o=n?.isLastChunk?t.length:Math.max(a.length,t.length);for(let e=0;e<o;e++)i[e]=t[e]===void 0?a[e]:t[e];return i},Yc=class{constructor(e){S(this,`config`,void 0),S(this,`typePolicies`,{}),S(this,`toBeAdded`,{}),S(this,`supertypeMap`,new Map),S(this,`fuzzySubtypes`,new Map),S(this,`cache`,void 0),S(this,`rootIdsByTypename`,{}),S(this,`rootTypenamesById`,{}),S(this,`usingPossibleTypes`,!1),this.config=e,this.config={dataIdFromObject:ec,...e},this.cache=this.config.cache,this.setRootTypename(`Query`),this.setRootTypename(`Mutation`),this.setRootTypename(`Subscription`),e.possibleTypes&&this.addPossibleTypes(e.possibleTypes),e.typePolicies&&this.addTypePolicies(e.typePolicies)}identify(e,t){let n=this,r=t&&(t.typename||t.storeObject?.__typename)||e.__typename;if(r===this.rootTypenamesById.ROOT_QUERY)return[`ROOT_QUERY`];let i=t&&t.storeObject||e,a={...t,typename:r,storeObject:i,readField:t&&t.readField||((...e)=>{let t=Qc(e,i);return n.readField(t,{store:n.cache.data,variables:t.variables})})},o,s=r&&this.getTypePolicy(r),c=s&&s.keyFn||this.config.dataIdFromObject;return bc.withValue(!0,()=>{for(;c;){let t=c({...e,...i},a);if(B(t))c=kc(t);else{o=t;break}}}),o=o?String(o):void 0,a.keyObject?[o,a.keyObject]:[o]}addTypePolicies(e){Object.keys(e).forEach(t=>{let{queryType:n,mutationType:r,subscriptionType:i,...a}=e[t];n&&this.setRootTypename(`Query`,t),r&&this.setRootTypename(`Mutation`,t),i&&this.setRootTypename(`Subscription`,t),$s.call(this.toBeAdded,t)?this.toBeAdded[t].push(a):this.toBeAdded[t]=[a]})}updateTypePolicy(e,t,n){let r=this.getTypePolicy(e),{keyFields:i,fields:a}=t;function o(e,t){e.merge=typeof t==`function`?t:t===!0?Kc:t===!1?qc:e.merge}o(r,t.merge),r.keyFn=i===!1?Wc:B(i)?kc(i):typeof i==`function`?i:r.keyFn,a&&Object.keys(a).forEach(t=>{let r=n[t];(!r||r?.typename!==e)&&(r=n[t]={typename:e});let i=a[t];if(typeof i==`function`)r.read=i;else{let{keyArgs:e,read:t,merge:n}=i;r.keyFn=e===!1?Gc:B(e)?Ac(e):typeof e==`function`?e:r.keyFn,typeof t==`function`&&(r.read=t),o(r,n)}r.read&&r.merge&&(r.keyFn=r.keyFn||Gc)})}setRootTypename(e,t=e){let n=`ROOT_`+e.toUpperCase(),r=this.rootTypenamesById[n];t!==r&&(z(!r||r===e,109,e),r&&delete this.rootIdsByTypename[r],this.rootIdsByTypename[t]=n,this.rootTypenamesById[n]=t)}addPossibleTypes(e){this.usingPossibleTypes=!0,Object.keys(e).forEach(t=>{this.getSupertypeSet(t,!0),e[t].forEach(e=>{this.getSupertypeSet(e,!0).add(t);let n=e.match(rc);(!n||n[0]!==e)&&this.fuzzySubtypes.set(e,new RegExp(e))})})}getTypePolicy(e){if(!$s.call(this.typePolicies,e)){let t=this.typePolicies[e]={};t.fields={};let n=this.supertypeMap.get(e);!n&&this.fuzzySubtypes.size&&(n=this.getSupertypeSet(e,!0),this.fuzzySubtypes.forEach((t,r)=>{if(t.test(e)){let e=this.supertypeMap.get(r);e&&e.forEach(e=>n.add(e))}})),n&&n.size&&n.forEach(e=>{let{fields:n,...r}=this.getTypePolicy(e);Object.assign(t,r),Object.assign(t.fields,n)})}let t=this.toBeAdded[e];return t&&t.length&&t.splice(0).forEach(t=>{this.updateTypePolicy(e,t,this.typePolicies[e].fields)}),this.typePolicies[e]}getFieldPolicy(e,t){if(e)return this.getTypePolicy(e).fields[t]}getSupertypeSet(e,t){let n=this.supertypeMap.get(e);return!n&&t&&this.supertypeMap.set(e,n=new Set),n}fragmentMatches(e,t,n,r){if(!e.typeCondition)return!0;if(!t)return!1;let i=e.typeCondition.name.value;if(t===i)return!0;if(this.usingPossibleTypes&&this.supertypeMap.has(i)){let a=this.getSupertypeSet(t,!0),o=[a],s=e=>{let t=this.getSupertypeSet(e,!1);t&&t.size&&o.indexOf(t)<0&&o.push(t)},c=!!(n&&this.fuzzySubtypes.size);for(let l=0;l<o.length;++l){let u=o[l];if(u.has(i))return a.has(i)||a.add(i),!0;u.forEach(s),c&&l===o.length-1&&ac(e.selectionSet,n,r)&&(c=!1,this.fuzzySubtypes.forEach((e,n)=>{let r=t.match(e);r&&r[0]===t&&s(n)}))}}return!1}hasKeyArgs(e,t){let n=this.getFieldPolicy(e,t);return!!(n&&n.keyFn)}getStoreFieldName(e){let{typename:t,fieldName:n}=e,r=this.getFieldPolicy(t,n),i,a=r&&r.keyFn;if(a&&t){let r={typename:t,fieldName:n,field:e.field||null,variables:e.variables},o=Uc(e);for(;a;){let e=a(o,r);if(B(e))a=Ac(e);else{i=e||n;break}}}return i===void 0&&(i=e.field?Co(e.field,e.variables):Za(n,Uc(e))),i===!1?n:n===ic(i)?i:n+`:`+i}readField(e,t){let n=e.from;if(!n||!(e.field||e.fieldName))return;if(e.typename===void 0){let r=t.store.getFieldValue(n,`__typename`);r&&(e.typename=r)}let r=this.getStoreFieldName(e),i=ic(r),a=t.store.getFieldValue(n,r),o=this.getFieldPolicy(e.typename,i),s=o&&o.read;if(s){let i=Xc(this,n,e,t,t.store.getStorage(H(n)?n.__ref:n,r));return Ic.withValue(this.cache,s,[a,i])}return a}getReadFunction(e,t){let n=this.getFieldPolicy(e,t);return n&&n.read}getMergeFunction(e,t,n){let r=this.getFieldPolicy(e,t),i=r&&r.merge;return!i&&n&&(r=this.getTypePolicy(n),i=r&&r.merge),i}runMergeFunction(e,t,{field:n,typename:r,merge:i,path:a},o,s){let c=e;if(i===Kc)return $c(o.store)(e,t);if(i===qc)return t;o.overwrite&&(e=void 0);let l=o.extensions?.[Uo]?.deref()?.peekArray(a);if(l){let{current:e,previous:n}=l;if(n&&V(n.incoming,t)&&V(n.streamFieldInfo,e))return n.result}let u=i(e,t,Zc(this,void 0,{typename:r,fieldName:n.name.value,field:n,variables:o.variables,path:a},o,s||{},c));return l&&(l.previous={incoming:t,streamFieldInfo:l.current,result:u}),u}};function Xc(e,t,n,r,i){let a=e.getStoreFieldName(n),o=ic(a),s=n.variables||r.variables,{toReference:c,canRead:l}=r.store;return{args:Uc(n),field:n.field||null,fieldName:o,storeFieldName:a,variables:s,isReference:H,toReference:c,storage:i,cache:e.cache,canRead:l,readField(...n){return e.readField(Qc(n,t,s),r)},mergeObjects:$c(r.store)}}function Zc(e,t,n,r,i,a){let o={...Xc(e,t,n,r,i),extensions:r.extensions,existingData:a},s=r.extensions;if(s&&Uo in s){let{[Uo]:e,...t}=s,r=e?.deref()?.peekArray(n.path);r&&(o.streamFieldInfo=r.current),o.extensions=Object.keys(t).length===0?void 0:t}return o}function Qc(e,t,n){let{0:r,1:i,length:a}=e,o;return typeof r==`string`?o={fieldName:r,from:a>1?i:t}:(o={...r},$s.call(o,`from`)||(o.from=t)),o.variables===void 0&&(o.variables=n),o}function $c(e){return function(t,n){if(B(t)||B(n))throw Zi(112);if(Ma(t)&&Ma(n)){let r=e.getFieldValue(t,`__typename`),i=e.getFieldValue(n,`__typename`);if(r&&i&&r!==i)return n;if(H(t)&&oc(n))return e.merge(t.__ref,n),t;if(oc(t)&&H(n))return e.merge(t,n.__ref),n;if(oc(t)&&oc(n))return{...t,...n}}return n}}function el(e){return[e.selectionSet,e.objectOrReference,e.context]}var tl=class{constructor(e){S(this,`executeSelectionSet`,void 0),S(this,`executeSubSelectedArray`,void 0),S(this,`config`,void 0),S(this,`knownResults`,new WeakMap),this.config=e,this.executeSelectionSet=js(e=>{let t=el(e);return this.executeSelectionSet.peek(...t)||(hc(e.context.store,e.enclosingRef.__ref),this.execSelectionSetImpl(e))},{max:aa[`inMemoryCache.executeSelectionSet`]||5e4,keyArgs:el,makeCacheKey(e,t,n){if(yc(n.store))return n.store.makeCacheKey(e,H(t)?t.__ref:t,n.varString)}}),this.executeSubSelectedArray=js(e=>(hc(e.context.store,e.enclosingRef.__ref),this.execSubSelectedArrayImpl(e)),{max:aa[`inMemoryCache.executeSubSelectedArray`]||1e4,makeCacheKey({field:e,array:t,context:n}){if(yc(n.store))return n.store.makeCacheKey(e,t,n.varString)}})}diffQueryAgainstStore({store:e,query:t,rootId:n=`ROOT_QUERY`,variables:r,returnPartialData:i=!0}){let a=this.config.cache.policies;r=Aa(La(Wa(t)),r);let o=ao(n),s=this.executeSelectionSet({selectionSet:Ha(t).selectionSet,objectOrReference:o,enclosingRef:o,context:{store:e,query:t,policies:a,variables:r,varString:Ga(r),...cc(t,this.config.fragments)}}),c;s.missing&&(c=new Qs(nl(s.missing),s.missing,t,r));let l=!c,{result:u}=s;return{result:l?u:i?Object.keys(u).length===0?null:u:null,complete:l,missing:c}}isFresh(e,t,n,r){if(yc(r.store)&&this.knownResults.get(e)===n){let i=this.executeSelectionSet.peek(n,t,r);if(i&&e===i.result)return!0}return!1}execSelectionSetImpl({selectionSet:e,objectOrReference:t,enclosingRef:n,context:r}){if(H(t)&&!r.policies.rootTypenamesById[t.__ref]&&!r.store.has(t.__ref))return{result:{},missing:`Dangling reference to missing ${t.__ref} object`};let{variables:i,policies:a,store:o}=r,s=o.getFieldValue(t,`__typename`),c=[],l,u=new Ia;typeof s==`string`&&!a.rootIdsByTypename[s]&&c.push({__typename:s});function d(e,t){return e.missing&&(l=u.merge(l,{[t]:e.missing})),e.result}let f=new Set(e.selections);f.forEach(e=>{if(bo(e,i)){if(no(e)){let i=a.readField({fieldName:e.name.value,field:e,variables:r.variables,from:t},r),o=yo(e);i===void 0?Us.added(e)||(l=u.merge(l,{[o]:`Can't find field '${e.name.value}' on ${H(t)?t.__ref+` object`:`object `+JSON.stringify(t,null,2)}`})):B(i)?i.length>0&&(i=d(this.executeSubSelectedArray({field:e,array:i,enclosingRef:n,context:r}),o)):e.selectionSet&&i!=null&&(i=d(this.executeSelectionSet({selectionSet:e.selectionSet,objectOrReference:i,enclosingRef:H(i)?i:n,context:r}),o)),i!==void 0&&c.push({[o]:i})}else{let t=Ra(e,r.lookupFragment);if(!t&&e.kind===`FragmentSpread`)throw Zi(113,e.name.value);t&&a.fragmentMatches(t,s)&&t.selectionSet.selections.forEach(f.add,f)}}});let p=oo({result:so(c),missing:l});return p.result&&this.knownResults.set(p.result,e),p}execSubSelectedArrayImpl({field:e,array:t,enclosingRef:n,context:r}){let i,a=new Ia;function o(e,t){return e.missing&&(i=a.merge(i,{[t]:e.missing})),e.result}return e.selectionSet&&(t=t.filter(e=>e===void 0||r.store.canRead(e))),t=t.map((t,i)=>t===null?null:B(t)?o(this.executeSubSelectedArray({field:e,array:t,enclosingRef:n,context:r}),i):e.selectionSet?o(this.executeSelectionSet({selectionSet:e.selectionSet,objectOrReference:t,enclosingRef:H(t)?t:n,context:r}),i):t),{result:t,missing:i}}};function nl(e){try{JSON.stringify(e,(e,t)=>{if(typeof t==`string`)throw t;return t})}catch(e){return e}}function rl(e,t,n){let r=`${t}${n}`,i=e.flavors.get(r);return i||e.flavors.set(r,i=e.clientOnly===t&&e.deferred===n?e:{...e,clientOnly:t,deferred:n}),i}var il=class{constructor(e,t,n){S(this,`cache`,void 0),S(this,`reader`,void 0),S(this,`fragments`,void 0),this.cache=e,this.reader=t,this.fragments=n}writeToStore(e,{query:t,result:n,dataId:r,variables:i,overwrite:a,extensions:o}){let s=Ua(t),c=sc();i={...La(s),...i};let l={store:e,written:{},merge(e,t){return c.merge(e,t)},variables:i,varString:Ga(i),...cc(t,this.fragments),overwrite:!!a,incomingById:new Map,clientOnly:!1,deferred:!1,flavors:new Map,extensions:o},u=this.processSelectionSet({result:n||{},dataId:r,selectionSet:s.selectionSet,mergeTree:{map:new Map},context:l,path:[]});if(!H(u))throw Zi(115,n);return l.incomingById.forEach(({storeObject:t,mergeTree:n,fieldNodeSet:r},i)=>{let a=ao(i);if(n&&n.map.size){let e=this.applyMerges(n,a,t,l);if(H(e))return;t=e}e.merge(i,t)}),e.retain(u.__ref),u}processSelectionSet({dataId:e,result:t,selectionSet:n,context:r,mergeTree:i,path:a}){let{policies:o}=this.cache,s={},c=e&&o.rootTypenamesById[e]||dl(t,n,r.fragmentMap)||e&&r.store.get(e,`__typename`);typeof c==`string`&&(s.__typename=c);let l=(...e)=>{let t=Qc(e,s,r.variables);if(H(t.from)){let e=r.incomingById.get(t.from.__ref);if(e){let n=o.readField({...t,from:e.storeObject},r);if(n!==void 0)return n}}return o.readField(t,r)},u=new Set;this.flattenFields(n,t,r,c).forEach((e,n)=>{let r=t[yo(n)],d=[...a,n.name.value];if(u.add(n),r!==void 0){let t=o.getStoreFieldName({typename:c,fieldName:n.name.value,field:n,variables:e.variables}),a=ol(i,t),u=this.processFieldValue(r,n,n.selectionSet?rl(e,!1,!1):e,a,d),f;n.selectionSet&&(H(u)||oc(u))&&(f=l(`__typename`,u));let p=o.getMergeFunction(c,n.name.value,f);p?a.info={field:n,typename:c,merge:p,path:d}:e.extensions?.[Uo]&&Array.isArray(u)&&cl(n)?a.info={field:n,typename:c,merge:Jc,path:d}:ul(i,t),s=e.merge(s,{[t]:u})}});try{let[i,a]=o.identify(t,{typename:c,selectionSet:n,fragmentMap:r.fragmentMap,storeObject:s,readField:l});e=e||i,a&&(s=r.merge(s,a))}catch(t){if(!e)throw t}if(typeof e==`string`){let a=ao(e),o=r.written[e]||(r.written[e]=[]);if(o.indexOf(n)>=0||(o.push(n),this.reader&&this.reader.isFresh(t,a,n,r)))return a;let c=r.incomingById.get(e);return c?(c.storeObject=r.merge(c.storeObject,s),c.mergeTree=sl(c.mergeTree,i),u.forEach(e=>c.fieldNodeSet.add(e))):r.incomingById.set(e,{storeObject:s,mergeTree:ll(i)?void 0:i,fieldNodeSet:u}),a}return s}processFieldValue(e,t,n,r,i){return!t.selectionSet||e===null?e:B(e)?e.map((e,a)=>{let o=this.processFieldValue(e,t,n,ol(r,a),[...i,a]);return ul(r,a),o}):this.processSelectionSet({result:e,selectionSet:t.selectionSet,context:n,mergeTree:r,path:i})}flattenFields(e,t,n,r=dl(t,e,n.fragmentMap)){let i=new Map,{policies:a}=this.cache,o=new da(!1);return(function e(s,c){let l=o.lookup(s,c.clientOnly,c.deferred);l.visited||(l.visited=!0,s.selections.forEach(o=>{if(!bo(o,n.variables))return;let{clientOnly:s,deferred:l}=c;if(!(s&&l)&&ro(o.directives)&&o.directives.forEach(e=>{let t=e.name.value;if(t===`client`&&(s=!0),t===`defer`){let t=ra(e,n.variables);(!t||t.if!==!1)&&(l=!0)}}),no(o)){let e=i.get(o);e&&(s=s&&e.clientOnly,l=l&&e.deferred),i.set(o,rl(n,s,l))}else{let i=Ra(o,n.lookupFragment);if(!i&&o.kind===`FragmentSpread`)throw Zi(117,o.name.value);i&&a.fragmentMatches(i,r,t,n.variables)&&e(i.selectionSet,rl(n,s,l))}}))})(e,n),i}applyMerges(e,t,n,r,i){if(e.map.size&&!H(n)){let a=!B(n)&&(H(t)||oc(t))?t:void 0,o=n;a&&!i&&(i=[H(a)?a.__ref:a]);let s,c=(e,t)=>B(e)?typeof t==`number`?e[t]:void 0:r.store.getFieldValue(e,String(t));e.map.forEach((e,t)=>{let n=c(a,t),l=c(o,t);if(l===void 0)return;i&&i.push(t);let u=this.applyMerges(e,n,l,r,i);u!==l&&(s=s||new Map,s.set(t,u)),i&&z(i.pop()===t)}),s&&(n=B(o)?o.slice(0):{...o},s.forEach((e,t)=>{n[t]=e}))}return e.info?this.cache.policies.runMergeFunction(t,n,e.info,r,i&&r.store.getStorage(...i)):n}},al=[];function ol({map:e},t){return e.has(t)||e.set(t,al.pop()||{map:new Map}),e.get(t)}function sl(e,t){if(e===t||!t||ll(t))return e;if(!e||ll(e))return t;let n=e.info&&t.info?{...e.info,...t.info}:e.info||t.info,r=e.map.size&&t.map.size,i={info:n,map:r?new Map:e.map.size?e.map:t.map};if(r){let n=new Set(t.map.keys());e.map.forEach((e,r)=>{i.map.set(r,sl(e,t.map.get(r))),n.delete(r)}),n.forEach(n=>{i.map.set(n,sl(t.map.get(n),e.map.get(n)))})}return i}function cl(e){return!!e.directives&&e.directives.some(e=>e.name.value===`stream`)}function ll(e){return!e||!(e.info||e.map.size)}function ul({map:e},t){let n=e.get(t);n&&ll(n)&&(al.push(n),e.delete(t))}function dl(e,t,n){let r;for(let n of t.selections)if(no(n)){if(n.name.value===`__typename`)return e[yo(n)]}else r?r.push(n):r=[n];if(typeof e.__typename==`string`)return e.__typename;if(r)for(let t of r){let r=dl(e,Ra(t,n).selectionSet,n);if(typeof r==`string`)return r}}var fl=class extends qs{constructor(e={}){super(),S(this,`data`,void 0),S(this,`optimisticData`,void 0),S(this,`config`,void 0),S(this,`watches`,new Set),S(this,`storeReader`,void 0),S(this,`storeWriter`,void 0),S(this,`addTypenameTransform`,new zs(Us)),S(this,`maybeBroadcastWatch`,void 0),S(this,`assumeImmutableResults`,!0),S(this,`policies`,void 0),S(this,`makeVar`,Vc),S(this,`txCount`,0),this.config=nc(e),this.policies=new Yc({cache:this,dataIdFromObject:this.config.dataIdFromObject,possibleTypes:this.config.possibleTypes,typePolicies:this.config.typePolicies}),this.init()}init(){let e=this.data=new fc.Root({policies:this.policies,resultCaching:this.config.resultCaching});this.optimisticData=e.stump,this.resetResultCache()}resetResultCache(){let{fragments:e}=this.config;this.addTypenameTransform.resetCache(),e?.resetCaches(),this.storeWriter=new il(this,this.storeReader=new tl({cache:this,fragments:e}),e),this.maybeBroadcastWatch=js((e,t)=>this.broadcastWatch(e,t),{max:aa[`inMemoryCache.maybeBroadcastWatch`]||5e3,makeCacheKey:e=>{let t=e.optimistic?this.optimisticData:this.data;if(yc(t)){let{optimistic:n,id:r,variables:i}=e;return t.makeCacheKey(e.query,e.callback,Ga({optimistic:n,id:r,variables:i}))}}}),new Set([this.data.group,this.optimisticData.group]).forEach(e=>e.resetCaching())}restore(e){return this.init(),e&&this.data.replace(e),this}extract(e=!1){return(e?this.optimisticData:this.data).extract()}read(e){let{returnPartialData:t=!1}=e;return this.storeReader.diffQueryAgainstStore({...e,store:e.optimistic?this.optimisticData:this.data,config:this.config,returnPartialData:t}).result}write(e){try{return++this.txCount,this.storeWriter.writeToStore(this.data,e)}finally{!--this.txCount&&e.broadcast!==!1&&this.broadcastWatches()}}modify(e){if($s.call(e,`id`)&&!e.id)return!1;let t=e.optimistic?this.optimisticData:this.data;try{return++this.txCount,t.modify(e.id||`ROOT_QUERY`,e.fields,!1)}finally{!--this.txCount&&e.broadcast!==!1&&this.broadcastWatches()}}diff(e){return this.storeReader.diffQueryAgainstStore({...e,store:e.optimistic?this.optimisticData:this.data,rootId:e.id||`ROOT_QUERY`,config:this.config})}watch(e){return this.watches.size||Bc(this),this.watches.add(e),e.immediate&&this.maybeBroadcastWatch(e),()=>{this.watches.delete(e)&&!this.watches.size&&zc(this),this.maybeBroadcastWatch.forget(e)}}gc(e){Ga.reset(),Vs.reset();let t=this.optimisticData.gc();return e&&!this.txCount&&e.resetResultCache&&this.resetResultCache(),t}retain(e,t){return(t?this.optimisticData:this.data).retain(e)}release(e,t){return(t?this.optimisticData:this.data).release(e)}identify(e){if(H(e))return e.__ref;try{return this.policies.identify(e)[0]}catch{}}evict(e){if(!e.id){if($s.call(e,`id`))return!1;e={...e,id:`ROOT_QUERY`}}try{return++this.txCount,this.optimisticData.evict(e,this.data)}finally{!--this.txCount&&e.broadcast!==!1&&this.broadcastWatches()}}reset(e){return this.init(),Ga.reset(),e&&e.discardWatches?(this.watches.forEach(e=>this.maybeBroadcastWatch.forget(e)),this.watches.clear(),zc(this)):this.broadcastWatches(),Promise.resolve()}removeOptimistic(e){let t=this.optimisticData.removeLayer(e);t!==this.optimisticData&&(this.optimisticData=t,this.broadcastWatches())}batch(e){let{update:t,optimistic:n=!0,removeOptimistic:r,onWatchUpdated:i}=e,a,o=e=>{let{data:n,optimisticData:r}=this;++this.txCount,e&&(this.data=this.optimisticData=e);try{return a=t(this)}finally{--this.txCount,this.data=n,this.optimisticData=r}},s=new Set;return i&&!this.txCount&&this.broadcastWatches({...e,onWatchUpdated(e){return s.add(e),!1}}),typeof n==`string`?this.optimisticData=this.optimisticData.addLayer(n,o):n===!1?o(this.data):o(),typeof r==`string`&&(this.optimisticData=this.optimisticData.removeLayer(r)),i&&s.size?(this.broadcastWatches({...e,onWatchUpdated(e,t){let n=i.call(this,e,t);return n!==!1&&s.delete(e),n}}),s.size&&s.forEach(e=>this.maybeBroadcastWatch.dirty(e))):this.broadcastWatches(e),a}performTransaction(e,t){return this.batch({update:e,optimistic:t||t!==null})}transformDocument(e){return this.addTypenameTransform.transformDocument(this.addFragmentsToDocument(e))}fragmentMatches(e,t){return this.policies.fragmentMatches(e,t)}lookupFragment(e){return this.config.fragments?.lookup(e)||null}resolvesClientField(e,t){return!!this.policies.getReadFunction(e,t)}broadcastWatches(e){if(!this.txCount){let t=this.onAfterBroadcast,n=new Set;this.onAfterBroadcast=e=>{n.add(e)};try{this.watches.forEach(t=>this.maybeBroadcastWatch(t,e)),n.forEach(e=>e())}finally{this.onAfterBroadcast=t}}}addFragmentsToDocument(e){let{fragments:t}=this.config;return t?t.transform(e):e}broadcastWatch(e,t){let{lastDiff:n}=e,r=this.diff(e);t&&(e.optimistic&&typeof t.optimistic==`string`&&(r.fromOptimisticTransaction=!0),t.onWatchUpdated&&t.onWatchUpdated.call(this,e,r,n)===!1)||(!n||!V(n.result,r.result))&&e.callback(e.lastDiff=r,n)}};function pl(e){return e.map(e=>e.message||`Error message not found.`).join(`
`)}var ml=class e extends Error{static is(e){return l(e,`CombinedProtocolErrors`)}constructor(t){super(e.formatMessage(t,{defaultFormatMessage:pl})),S(this,`errors`,void 0),this.name=`CombinedProtocolErrors`,this.errors=t,s(this),Object.setPrototypeOf(this,e.prototype)}};S(ml,`formatMessage`,pl);function hl(e){return typeof e==`object`&&!!e&&typeof e.message==`string`&&typeof e.name==`string`&&(typeof e.stack==`string`||e.stack===void 0)}var gl=class e extends Error{static is(e){return l(e,`UnconventionalError`)}constructor(t){super(`An error of unexpected shape occurred.`,{cause:t}),this.name=`UnconventionalError`,s(this),Object.setPrototypeOf(this,e.prototype)}},_l=new WeakSet;function vl(e){_l.add(e)}var yl=class e extends Error{static is(e){return l(e,`ServerError`)}constructor(t,n){super(t),S(this,`response`,void 0),S(this,`statusCode`,void 0),S(this,`bodyText`,void 0),this.name=`ServerError`,this.response=n.response,this.statusCode=n.response.status,this.bodyText=n.bodyText,s(this),Object.setPrototypeOf(this,e.prototype)}},bl=class e extends Error{static is(e){return l(e,`ServerParseError`)}constructor(t,n){super(t instanceof Error?t.message:`Could not parse server response`,{cause:t}),S(this,`response`,void 0),S(this,`statusCode`,void 0),S(this,`bodyText`,void 0),this.name=`ServerParseError`,this.response=n.response,this.statusCode=n.response.status,this.bodyText=n.bodyText,s(this),Object.setPrototypeOf(this,e.prototype)}},xl=Symbol();function Sl(e){return`extensions`in e&&ml.is(e.extensions[xl])}function Cl(e){return hl(e)?e:typeof e==`string`?Error(e,{cause:e}):new gl(e)}var U;(function(e){e[e.loading=1]=`loading`,e[e.setVariables=2]=`setVariables`,e[e.fetchMore=3]=`fetchMore`,e[e.refetch=4]=`refetch`,e[e.poll=6]=`poll`,e[e.ready=7]=`ready`,e[e.error=8]=`error`,e[e.streaming=9]=`streaming`})(U||(U={}));var wl,{assign:Tl,hasOwnProperty:El}=Object,Dl={loading:!0,networkStatus:U.loading,data:void 0,dataState:`empty`,partial:!0},Ol={loading:!1,networkStatus:U.ready,data:void 0,dataState:`empty`,partial:!0};wl=Symbol.observable;var kl=class{get query(){return this.lastQuery}get variables(){return this.options.variables}get networkStatus(){return this.subject.getValue().result.networkStatus}get cache(){return this.queryManager.cache}constructor({queryManager:e,options:t,transformedQuery:n=e.transform(t.query)}){S(this,`options`,void 0),S(this,`queryName`,void 0),S(this,`variablesUnknown`,!1),S(this,`_lastWrite`,void 0),S(this,`unsubscribeFromCache`,void 0),S(this,`input`,void 0),S(this,`subject`,void 0),S(this,`isTornDown`,void 0),S(this,`queryManager`,void 0),S(this,`subscriptions`,new Set),S(this,`waitForNetworkResult`,void 0),S(this,`lastQuery`,void 0),S(this,`linkSubscription`,void 0),S(this,`pollingInfo`,void 0),S(this,`subscribe`,void 0),S(this,`pipe`,void 0),S(this,wl,void 0),S(this,`@@observable`,void 0),S(this,`stableLastResult`,void 0),S(this,`didWarnCacheOnlyPolling`,!1),S(this,`dirty`,!1),S(this,`notifyTimeout`,void 0),S(this,`activeOperations`,new Set),S(this,`operator`,To(e=>{let{query:t,meta:n}=e;if(e.source===`setResult`)return{query:t,variables:this.variables,result:e.value,meta:n};if(e.kind===`C`)return;let r=`resolvedVariables`in e?e.resolvedVariables:void 0;if(e.query!==this.query)return;if(!V(r,this.variables)){if(!V(e.variables,this.variables))return;r&&(this.options.variables=r,this.resubscribeCache())}let i=this.variables,a,o=this.subject.getValue();if(e.source===`cache`){if(a=e.value,a.networkStatus===U.ready&&a.partial&&(!this.options.returnPartialData||o.result.networkStatus===U.error)&&this.options.fetchPolicy!==`cache-only`)return}else if(e.source===`network`)this.waitForNetworkResult&&(this.waitForNetworkResult=!1,this.resubscribeCache()),a=e.kind===`E`?{...Al(o,e)||r&&V(r,o.variables)?o.result:{data:void 0,dataState:`empty`,partial:!0},error:e.error,networkStatus:U.error,loading:!1}:e.value,e.kind===`E`&&a.dataState===`streaming`&&(a.dataState=`complete`),a.error&&(n.shouldEmit=1);else if(e.source===`newNetworkStatus`){let t=Al(o,e)?o.result:this.getInitialResult(n.fetchPolicy),{resetError:r}=e.value,i=r?void 0:t.error,s=i?U.error:U.ready;a={...t,error:i,networkStatus:s}}return z(a),a.error||delete a.error,a.networkStatus=this.calculateNetworkStatus(a.networkStatus),a.loading=Ks(a.networkStatus),a=this.maskResult(a),o.result.data!==void 0&&a.data!==o.result.data&&V(a.data,o.result.data)&&(a.data=o.result.data),{query:t,variables:i,result:a,meta:n}})),this.queryManager=e,this.waitForNetworkResult=t.fetchPolicy===`network-only`,this.isTornDown=!1,this.subscribeToMore=this.subscribeToMore.bind(this),this.maskResult=this.maskResult.bind(this);let{watchQuery:{fetchPolicy:r=`cache-first`}={}}=e.defaultOptions,{fetchPolicy:i=r,initialFetchPolicy:a=i===`standby`?r:i}=t;t[Wo]&&(z(i===`standby`,82),this.variablesUnknown=!0),this.lastQuery=n,this.options={...t,initialFetchPolicy:a,fetchPolicy:i,variables:this.getVariablesWithDefaults(t.variables)},this.initializeObservablesQueue(),this[`@@observable`]=()=>this,Symbol.observable&&(this[Symbol.observable]=()=>this);let o=Ua(this.query);this.queryName=o&&o.name&&o.name.value}initializeObservablesQueue(){this.subject=new hr({query:this.query,variables:this.variables,result:Dl,meta:{}});let e=this.subject.pipe(zi({subscribe:()=>{this.subject.observed||(this.reobserve(),setTimeout(()=>this.updatePolling()))},unsubscribe:()=>{this.subject.observed||this.tearDownQuery()}}),To(({query:e,variables:t,result:n,meta:r},i)=>{let{shouldEmit:a}=r;if(n===Dl&&(i.previous=void 0,i.previousVariables=void 0),this.options.fetchPolicy===`standby`||a===2)return;if(a===1)return c();let{previous:o,previousVariables:s}=i;if(o){let r=this.queryManager.getDocumentInfo(e),i=this.queryManager.dataMasking,a=i?r.nonReactiveQuery:e;if((i||r.hasNonreactiveDirective?Io(a,o,n,t):V(o,n))&&V(s,t))return}if(a===3&&(!this.options.notifyOnNetworkStatusChange||V(o,n)))return;return c();function c(){return i.previous=n,i.previousVariables=t,n}},()=>({})));this.pipe=e.pipe.bind(e),this.subscribe=e.subscribe.bind(e),this.input=new pr,this.input.complete=()=>{},this.input.pipe(this.operator).subscribe(this.subject)}getCacheDiff({optimistic:e=!0}={}){return this.cache.diff({query:this.query,variables:this.variables,returnPartialData:!0,optimistic:e})}getInitialResult(e){let t=e||this.options.fetchPolicy;this.queryManager.prioritizeCacheValues&&(t===`network-only`||t===`cache-and-network`)&&(t=`cache-first`);let n=()=>{let e=this.getCacheDiff(),t=this.options.returnPartialData||e.complete?e.result??void 0:void 0;return this.maskResult({data:t,dataState:e.complete?`complete`:t===void 0?`empty`:`partial`,loading:!e.complete,networkStatus:e.complete?U.ready:U.loading,partial:!e.complete})};switch(t){case`cache-only`:return{...n(),loading:!1,networkStatus:U.ready};case`cache-first`:return n();case`cache-and-network`:return{...n(),loading:!0,networkStatus:U.loading};case`standby`:return Ol;default:return Dl}}resubscribeCache(){let{variables:e,fetchPolicy:t}=this.options,n=this.query,r=t===`standby`||t===`no-cache`||this.waitForNetworkResult,i=!Al({query:n,variables:e},this.unsubscribeFromCache)&&!this.waitForNetworkResult;if((r||i)&&this.unsubscribeFromCache?.(),r||!i)return;let a={query:n,variables:e,optimistic:!0,watcher:this,callback:e=>{let t=this.queryManager.getDocumentInfo(n);if((t.hasClientExports||t.hasForcedResolvers)&&(a.lastDiff=void 0),a.lastOwnDiff===e)return;let{result:r}=this.subject.getValue();!e.complete&&(r.error||r===Dl||r===Ol)||V(r.data,e.result)||this.scheduleNotify()}},o=this.cache.watch(a);this.unsubscribeFromCache=Object.assign(()=>{this.unsubscribeFromCache=void 0,o()},{query:n,variables:e})}getCurrentResult(){let{result:e}=this.subject.getValue(),t=e.networkStatus===U.error||this.hasObservers()||this.options.fetchPolicy===`no-cache`?e:this.getInitialResult();return t===Dl&&(t=this.getInitialResult()),V(this.stableLastResult,t)||(this.stableLastResult=t),this.stableLastResult}refetch(e){let{fetchPolicy:t}=this.options,n={pollInterval:0};return n.fetchPolicy=t===`no-cache`?`no-cache`:`network-only`,e&&!V(this.variables,e)&&(n.variables=this.options.variables=this.getVariablesWithDefaults({...this.variables,...e})),this._lastWrite=void 0,this._reobserve(n,{newNetworkStatus:U.refetch})}fetchMore({query:e,variables:t,context:n,errorPolicy:r,updateQuery:i}){z(this.options.fetchPolicy!==`cache-only`,84,oa(this.query,`(anonymous)`));let a={...Aa(this.options,{errorPolicy:`none`},{query:e,context:n,errorPolicy:r}),variables:e?t:{...this.variables,...t},fetchPolicy:`no-cache`,notifyOnNetworkStatusChange:this.options.notifyOnNetworkStatusChange};a.query=this.transformDocument(a.query),this.lastQuery=e?this.transformDocument(this.options.query):a.query;let o=!1,s=this.options.fetchPolicy!==`no-cache`;s||z(i,85);let{finalize:c,pushNotification:l}=this.pushOperation(U.fetchMore);l({source:`newNetworkStatus`,kind:`N`,value:{}},{shouldEmit:3});let{promise:u,operator:d}=jl(),{observable:f}=this.queryManager.fetchObservableWithInfo(a,{networkStatus:U.fetchMore,exposeExtensions:!0}),p=f.pipe(d,ki(e=>e.kind===`N`&&e.source===`network`)).subscribe({next:e=>{o=!1;let t=e.value,n=t[Ho];if(Gs(e.value.networkStatus)&&c(),s){let e=this.getCacheDiff();this.cache.batch({update:e=>{i?e.updateQuery({query:this.query,variables:this.variables,returnPartialData:!0,optimistic:!1,extensions:n},e=>i(e,{fetchMoreResult:t.data,variables:a.variables})):e.writeQuery({query:a.query,variables:a.variables,data:t.data,extensions:n})},onWatchUpdated:(n,r)=>{if(n.watcher===this&&!V(r.result,e.result)){o=!0;let e=this.getCurrentResult();Ks(t.networkStatus)&&l({kind:`N`,source:`network`,value:{...e,networkStatus:t.networkStatus===U.error?U.ready:t.networkStatus,loading:!1,data:r.result,dataState:t.dataState===`streaming`?`streaming`:`complete`}})}}})}else{let e=this.getCurrentResult(),n=i(e.data,{fetchMoreResult:t.data,variables:a.variables});l({kind:`N`,value:{...e,networkStatus:U.ready,loading:!1,data:n,dataState:e.dataState===`streaming`?`streaming`:`complete`},source:`network`})}}});return fo(u.then(e=>wo(this.maskResult(e))).finally(()=>{if(p.unsubscribe(),c(),s&&!o){let e=this.getCurrentResult();e.dataState===`streaming`?l({kind:`N`,source:`network`,value:{...e,dataState:`complete`,networkStatus:U.ready}}):l({kind:`N`,source:`newNetworkStatus`,value:{}},{shouldEmit:1})}}))}subscribeToMore(e){let t=this.queryManager.startGraphQLSubscription({query:e.document,variables:e.variables,context:e.context}).subscribe({next:t=>{let{updateQuery:n,onError:r}=e,{error:i}=t;if(i){r?r(i):z.error(86,i);return}n&&this.updateQuery((e,r)=>n(e,{subscriptionData:t,...r}))}});return this.subscriptions.add(t),()=>{this.subscriptions.delete(t)&&t.unsubscribe()}}applyOptions(e){let t=Aa(this.options,e||{});Tl(this.options,t),this.updatePolling()}async setVariables(e){return e=this.getVariablesWithDefaults(e),V(this.variables,e)||(this.options.variables=e,!this.hasObservers())?wo(this.getCurrentResult()):this._reobserve({fetchPolicy:this.options.initialFetchPolicy,variables:e},{newNetworkStatus:U.setVariables})}updateQuery(e){let{queryManager:t}=this,{result:n,complete:r}=this.getCacheDiff({optimistic:!1}),i=e(n,{variables:this.variables,complete:!!r,previousData:n});i&&(this.cache.writeQuery({query:this.options.query,data:i,variables:this.variables}),t.broadcastQueries())}startPolling(e){this.options.pollInterval=e,this.updatePolling()}stopPolling(){this.options.pollInterval=0,this.updatePolling()}applyNextFetchPolicy(e,t){if(t.nextFetchPolicy){let{fetchPolicy:n=`cache-first`,initialFetchPolicy:r=n}=t;n===`standby`||(t.fetchPolicy=typeof t.nextFetchPolicy==`function`?t.nextFetchPolicy.call(t,n,{reason:e,options:t,observable:this,initialFetchPolicy:r}):e===`variables-changed`?r:t.nextFetchPolicy)}return t.fetchPolicy}fetch(e,t,n,r){let i=this.options.fetchPolicy;e.context??(e.context={});let a=!1,{observable:o,fromLink:s}=this.queryManager.fetchObservableWithInfo(e,{networkStatus:t,query:n,onCacheHit:()=>{a=!0},fetchQueryOperator:e=>new R(n=>{try{return e.subscribe({next(e){a=!0,n.next(e)},error:e=>n.error(e),complete:()=>n.complete()})}finally{a||(u.override=t,this.input.next({kind:`N`,source:`newNetworkStatus`,value:{resetError:!0},query:c,variables:l,meta:{shouldEmit:3,fetchPolicy:i}}))}}),observableQuery:this}),{query:c,variables:l}=this,u={abort:()=>{f.unsubscribe()},query:c,variables:l};this.activeOperations.add(u);let d=t==U.refetch||t==U.setVariables;o=o.pipe(r,Fi());let f=o.pipe(zi({next:e=>{e.source===`newNetworkStatus`||e.kind===`N`&&e.value.loading?u.override=t:delete u.override},finalize:()=>this.activeOperations.delete(u)})).subscribe({next:e=>{let t={};d&&e.kind===`N`&&`loading`in e.value&&!e.value.loading&&(d=!1,t.shouldEmit=1),this.input.next({...e,query:c,variables:l,meta:t})}});return{fromLink:s,subscription:f,observable:o}}updatePolling(){if(this.queryManager.ssrMode)return;let{pollingInfo:e,options:{fetchPolicy:t,pollInterval:n}}=this,r=()=>{let{options:e}=this;return!e.pollInterval||!this.hasObservers()||e.fetchPolicy===`cache-only`||e.fetchPolicy===`standby`};if(r()){this.cancelPolling();return}if(e?.interval===n)return;let i=e||(this.pollingInfo={});i.interval=n;let a=()=>{if(r())return this.cancelPolling();this.pollingInfo&&(!Ks(this.networkStatus)&&!this.options.skipPollAttempt?.()?this._reobserve({fetchPolicy:this.options.initialFetchPolicy===`no-cache`?`no-cache`:`network-only`},{newNetworkStatus:U.poll}).then(o,o):o())},o=()=>{let e=this.pollingInfo;e&&(clearTimeout(e.timeout),e.timeout=setTimeout(a,e.interval))};o()}cancelPolling(){this.pollingInfo&&(clearTimeout(this.pollingInfo.timeout),delete this.pollingInfo)}reobserve(e){return this._reobserve(e)}_reobserve(e,t){this.isTornDown=!1;let{newNetworkStatus:n}=t||{};this.queryManager.obsQueries.add(this);let r=n===U.refetch||n===U.poll,i=this.variables,a=this.options.fetchPolicy,o=Aa(this.options,e||{});this.variablesUnknown&&(this.variablesUnknown=o.fetchPolicy===`standby`);let s=r?o:Tl(this.options,o),c=this.transformDocument(s.query);this.lastQuery=c,e&&`variables`in e&&(s.variables=this.getVariablesWithDefaults(e.variables)),r||(this.updatePolling(),e&&e.variables&&!V(e.variables,i)&&s.fetchPolicy!==`standby`&&(s.fetchPolicy===a||typeof s.nextFetchPolicy==`function`)&&(this.applyNextFetchPolicy(`variables-changed`,s),n===void 0&&(n=U.setVariables)));let l=this.networkStatus;n||(n=U.loading,l!==U.loading&&e?.variables&&!V(e.variables,i)&&(n=U.setVariables),s.fetchPolicy===`standby`&&(n=U.ready)),s.fetchPolicy===`standby`&&this.cancelPolling(),this.resubscribeCache();let{promise:u,operator:d}=jl(s.fetchPolicy===`standby`?{data:void 0}:void 0),{subscription:f,observable:p,fromLink:m}=this.fetch(s,n,c,d);!r&&(m||!this.linkSubscription)&&(this.linkSubscription&&this.linkSubscription.unsubscribe(),this.linkSubscription=f);let h=Object.assign(fo(u.then(e=>wo(this.maskResult(e))).finally(()=>{!this.hasObservers()&&this.activeOperations.size===0&&this.tearDownQuery()})),{retain:()=>{let e=p.subscribe({}),t=()=>e.unsubscribe();return u.then(t,t),h}});return h}hasObservers(){return this.subject.observed}stop(){this.subject.complete(),this.initializeObservablesQueue(),this.tearDownQuery()}tearDownQuery(){this.isTornDown||(this.resetNotifications(),this.unsubscribeFromCache?.(),this.linkSubscription&&(this.linkSubscription.unsubscribe(),delete this.linkSubscription),this.stopPolling(),this.subscriptions.forEach(e=>e.unsubscribe()),this.subscriptions.clear(),this.queryManager.obsQueries.delete(this),this.isTornDown=!0,this.abortActiveOperations(),this._lastWrite=void 0)}transformDocument(e){return this.queryManager.transform(e)}maskResult(e){let t=this.queryManager.maskOperation({document:this.query,data:e.data,fetchPolicy:this.options.fetchPolicy,cause:this});return t===e.data?e:{...e,data:t}}resetNotifications(){this.notifyTimeout&&(clearTimeout(this.notifyTimeout),this.notifyTimeout=void 0),this.dirty=!1}scheduleNotify(){this.dirty||(this.dirty=!0,this.notifyTimeout||(this.notifyTimeout=setTimeout(()=>this.notify(!0),0)))}notify(e=!1){if(!e){let e=this.queryManager.getDocumentInfo(this.query);if(e.hasClientExports||e.hasForcedResolvers)return}let{dirty:t}=this;if(this.resetNotifications(),t&&(this.options.fetchPolicy===`cache-only`||this.options.fetchPolicy===`cache-and-network`||!this.activeOperations.size)){let e=this.getCacheDiff();V(e.result,this.getCacheDiff({optimistic:!1}).result)?this.reobserveCacheFirst():this.input.next({kind:`N`,value:{data:e.result,dataState:e.complete?`complete`:e.result?`partial`:`empty`,networkStatus:U.ready,loading:!1,error:void 0,partial:!e.complete},source:`cache`,query:this.query,variables:this.variables,meta:{}})}}pushOperation(e){let t=!1,{query:n,variables:r}=this,i=()=>{this.activeOperations.delete(a)},a={override:e,abort:()=>{t=!0,i()},query:n,variables:r};return this.activeOperations.add(a),{finalize:i,pushNotification:(e,i)=>{t||this.input.next({...e,query:n,variables:r,meta:{...i}})}}}calculateNetworkStatus(e){return e===U.streaming?e:Array.from(this.activeOperations.values()).reverse().find(e=>Al(e,this)&&e.override!==void 0)?.override??e}abortActiveOperations(){this.activeOperations.forEach(e=>e.abort())}reset(){let e=this.options.fetchPolicy===`cache-only`;this.setResult(e?Ol:Dl,{shouldEmit:e?1:2}),this.abortActiveOperations()}setResult(e,t){this.input.next({source:`setResult`,kind:`N`,value:e,query:this.query,variables:this.variables,meta:{...t}})}reobserveCacheFirst(){let{fetchPolicy:e,nextFetchPolicy:t}=this.options;e===`cache-and-network`||e===`network-only`?this.reobserve({fetchPolicy:`cache-first`,nextFetchPolicy(n,r){return this.nextFetchPolicy=t,typeof this.nextFetchPolicy==`function`?this.nextFetchPolicy(n,r):e}}):this.reobserve()}getVariablesWithDefaults(e){return this.queryManager.getVariables(this.query,e)}};function Al(e,t){return!!(e&&t&&e.query===t.query&&V(e.variables,t.variables))}function jl(e){let t=e,n,r;return{promise:new Promise((e,t)=>{n=e,r=t}),operator:zi({next(e){if(e.kind===`E`)return r(e.error);e.kind===`N`&&e.source!==`newNetworkStatus`&&!e.value.loading&&(t=e.value)},finalize:()=>{if(t)n(t);else{let e=`The operation was aborted.`,t=`AbortError`;r(typeof DOMException<`u`?new DOMException(e,t):Object.assign(Error(e),{name:t}))}}})}}var Ml={},Nl=new WeakMap;function Pl(e,t){let n=e[t];typeof n==`function`&&(e[t]=function(){return Nl.set(e,(Nl.get(e)+1)%0x38d7ea4c68000),n.apply(this,arguments)})}var Fl=new WeakMap,Il=class{constructor(e,t){S(this,`cache`,void 0),S(this,`queryManager`,void 0),S(this,`id`,void 0),S(this,`observableQuery`,void 0),S(this,`incremental`,void 0),S(this,`_lastWrite`,void 0);let n=this.cache=e.cache,r=(Fl.get(e)||0)+1;Fl.set(e,r),this.id=r+``,this.observableQuery=t,this.queryManager=e,Nl.has(n)||(Nl.set(n,0),Pl(n,`evict`),Pl(n,`modify`),Pl(n,`reset`))}get lastWrite(){return(this.observableQuery||this)._lastWrite}set lastWrite(e){(this.observableQuery||this)._lastWrite=e}resetLastWrite(){this.lastWrite=void 0}shouldWrite(e,t){let{lastWrite:n}=this;return!(n&&n.dmCount===Nl.get(this.cache)&&V(t,n.variables)&&V(e.data,n.result.data)&&e.extensions?.[Uo]===n.result.extensions?.[Uo])}get hasNext(){return this.incremental?this.incremental.hasNext:!1}maybeHandleIncrementalResult(e,t,n){let{incrementalHandler:r}=this.queryManager;return r.isIncrementalResult(t)?(this.incremental||(this.incremental=r.startRequest({query:n})),this.incremental.handle(e,t)):t}markQueryResult(e,{document:t,variables:n,errorPolicy:r,cacheWriteBehavior:i}){let a={query:t,variables:n,returnPartialData:!0,optimistic:!0};this.observableQuery?.resetNotifications();let o=i===0,s=o?void 0:this.cache.diff(a),c=this.maybeHandleIncrementalResult(s?.result,e,t);return o||(Ll(c,r)?this.cache.batch({onWatchUpdated:(e,t)=>{e.watcher===this.observableQuery&&(e.lastOwnDiff=t)},update:e=>{if(this.shouldWrite(c,n))e.writeQuery({query:t,data:c.data,variables:n,overwrite:i===1,extensions:c.extensions}),this.lastWrite={result:c,variables:n,dmCount:Nl.get(this.cache)};else if(s&&s.complete){c={...c,data:s.result};return}let r=e.diff(a);r.complete&&(c={...c,data:r.result})}}):this.lastWrite=void 0),c}markMutationResult(e,t,n=this.cache){let r=[],i=t.cacheWriteBehavior===0,a=this.maybeHandleIncrementalResult(i?void 0:n.diff({id:`ROOT_MUTATION`,query:this.queryManager.getDocumentInfo(t.document).asQuery,variables:t.variables,optimistic:!1,returnPartialData:!0}).result,e,t.document);if(t.errorPolicy===`ignore`&&(a={...a,errors:[]}),Qa(a)&&t.errorPolicy===`none`)return Promise.resolve(a);let o=()=>({...a,dataState:this.hasNext?`streaming`:`complete`});if(!i&&Ll(a,t.errorPolicy)){r.push({result:a.data,dataId:`ROOT_MUTATION`,query:t.document,variables:t.variables,extensions:a.extensions});let{updateQueries:e}=t;e&&this.queryManager.getObservableQueries(`all`).forEach(t=>{let n=t&&t.queryName;if(!n||!Object.hasOwnProperty.call(e,n))return;let i=e[n],{query:a,variables:s}=t,{result:c,complete:l}=t.getCacheDiff({optimistic:!1});if(l&&c){let e=i(c,{mutationResult:o(),queryName:a&&oa(a)||void 0,queryVariables:s});e&&r.push({result:e,dataId:`ROOT_QUERY`,query:a,variables:s})}})}let s=t.refetchQueries;if(typeof s==`function`&&(s=s(o())),r.length>0||(s||``).length>0||t.update||t.onQueryUpdated||t.removeOptimistic){let e=[];if(this.queryManager.refetchQueries({updateCache:e=>{i||r.forEach(t=>e.write(t));let{update:n}=t;if(n){if(!i){let n=e.diff({id:`ROOT_MUTATION`,query:this.queryManager.getDocumentInfo(t.document).asQuery,variables:t.variables,optimistic:!1,returnPartialData:!0});n.complete&&(a={...a,data:n.result})}this.hasNext||n(e,a,{context:t.context,variables:t.variables})}!i&&!t.keepRootFields&&!this.hasNext&&e.modify({id:`ROOT_MUTATION`,fields(e,{fieldName:t,DELETE:n}){return t===`__typename`?e:n}})},include:s,optimistic:!1,removeOptimistic:t.removeOptimistic,onQueryUpdated:t.onQueryUpdated||null}).forEach(t=>e.push(t)),t.awaitRefetchQueries||t.onQueryUpdated)return Promise.all(e).then(()=>a)}return Promise.resolve(a)}markMutationOptimistic(e,t){let n=typeof e==`function`?e(t.variables,{IGNORE:Ml}):e;return n!==Ml&&(this.cache.recordOptimisticTransaction(e=>{try{this.markMutationResult({data:n},t,e)}catch(e){z.error(e)}},this.id),!0)}markSubscriptionResult(e,{document:t,variables:n,errorPolicy:r,cacheWriteBehavior:i}){i!==0&&(Ll(e,r)&&this.cache.write({query:t,result:e.data,dataId:`ROOT_SUBSCRIPTION`,variables:n,extensions:e.extensions}),this.queryManager.broadcastQueries())}};function Ll(e,t=`none`){let n=t===`ignore`||t===`all`,r=!Qa(e);return!r&&n&&e.data&&(r=!0),r}var Rl=class{constructor(e){S(this,`defaultOptions`,void 0),S(this,`client`,void 0),S(this,`clientOptions`,void 0),S(this,`assumeImmutableResults`,void 0),S(this,`documentTransform`,void 0),S(this,`ssrMode`,void 0),S(this,`defaultContext`,void 0),S(this,`dataMasking`,void 0),S(this,`incrementalHandler`,void 0),S(this,`localState`,void 0),S(this,`queryDeduplication`,void 0),S(this,`prioritizeCacheValues`,!1),S(this,`onBroadcast`,void 0),S(this,`mutationStore`,void 0),S(this,`obsQueries`,new Set),S(this,`fetchCancelFns`,new Map),S(this,`transformCache`,new wa(aa[`queryManager.getDocumentInfo`]||2e3)),S(this,`inFlightLinkObservables`,new da(!1)),S(this,`noCacheWarningsByCause`,new WeakSet);let t=new zs(e=>this.cache.transformDocument(e),{cache:!1});this.client=e.client,this.defaultOptions=e.defaultOptions,this.queryDeduplication=e.queryDeduplication,this.clientOptions=e.clientOptions,this.ssrMode=e.ssrMode,this.assumeImmutableResults=e.assumeImmutableResults,this.dataMasking=e.dataMasking,this.localState=e.localState,this.incrementalHandler=e.incrementalHandler;let n=e.documentTransform;this.documentTransform=n?t.concat(n).concat(t):t,this.defaultContext=e.defaultContext||{},(this.onBroadcast=e.onBroadcast)&&(this.mutationStore={})}get link(){return this.client.link}get cache(){return this.client.cache}stop(){this.obsQueries.forEach(e=>e.stop()),this.cancelPendingFetches(Zi(90))}cancelPendingFetches(e){this.fetchCancelFns.forEach(t=>t(e)),this.fetchCancelFns.clear()}async mutate({mutation:e,variables:t,optimisticResponse:n,updateQueries:r,refetchQueries:i=[],awaitRefetchQueries:a=!1,update:s,onQueryUpdated:c,fetchPolicy:l,errorPolicy:u,keepRootFields:d,context:f}){let p=new Il(this);e=this.cache.transformForLink(this.transform(e));let{hasClientExports:m}=this.getDocumentInfo(e);t=this.getVariables(e,t),m&&(t=await this.localState.getExportedVariables({client:this.client,document:e,variables:t,context:f}));let h=this.mutationStore&&(this.mutationStore[p.id]={mutation:e,variables:t,loading:!0,error:null}),g=n&&p.markMutationOptimistic(n,{document:e,variables:t,cacheWriteBehavior:l===`no-cache`?0:2,errorPolicy:u,context:f,updateQueries:r,update:s,keepRootFields:d});return this.broadcastQueries(),new Promise((m,_)=>{let v={};return this.getObservableFromLink(e,{...f,optimisticResponse:g?n:void 0},t,l,{},!1).observable.pipe(zl(),wi(n=>{let o={...n};return fi(p.markMutationResult(o,{document:e,variables:t,cacheWriteBehavior:l===`no-cache`?0:2,errorPolicy:u,context:f,update:s,updateQueries:r,awaitRefetchQueries:a,refetchQueries:i,removeOptimistic:g?p.id:void 0,onQueryUpdated:c,keepRootFields:d}))})).pipe(Si(e=>{if(Qa(e)&&u===`none`)throw new o(Vl(e));return h&&(h.loading=!1,h.error=null),e})).subscribe({next:t=>{if(this.broadcastQueries(),!p.hasNext){let n={data:this.maskOperation({document:e,data:t.data,fetchPolicy:l,cause:v})};Qa(t)&&(n.error=new o(t)),Object.keys(t.extensions||{}).length&&(n.extensions=t.extensions),m(n)}},error:e=>{if(h&&(h.loading=!1,h.error=e),g&&this.cache.removeOptimistic(p.id),this.broadcastQueries(),u===`ignore`)return m({data:void 0});if(u===`all`)return m({data:void 0,error:e});_(e)}})})}fetchQuery(e,t){return Da(e.query,ve.QUERY),(async()=>yi(this.fetchObservableWithInfo(e,{networkStatus:t}).observable.pipe(To(e=>{switch(e.kind){case`E`:throw e.error;case`N`:if(e.source!==`newNetworkStatus`)return wo(e.value)}})),{defaultValue:{data:void 0}}))()}transform(e){return this.documentTransform.transformDocument(e)}getDocumentInfo(e){let{transformCache:t}=this;if(!t.has(e)){let n=Ua(e),r={hasClientExports:$a([`client`,`export`],e,!0),hasForcedResolvers:eo(e),hasNonreactiveDirective:$a([`nonreactive`],e),hasIncrementalDirective:$a([`defer`],e),nonReactiveQuery:Bl(e),clientQuery:$a([`client`],e)?e:null,serverQuery:po([{name:`client`,remove:!0},{name:`connection`},{name:`nonreactive`},{name:`unmask`}],e),operationType:n?.operation,defaultVars:La(n),asQuery:{...e,definitions:e.definitions.map(e=>e.kind===`OperationDefinition`&&e.operation!==`query`?{...e,operation:`query`}:e)}};t.set(e,r)}let n=t.get(e);if(n.violation)throw n.violation;return n}getVariables(e,t){let n=this.getDocumentInfo(e).defaultVars,r=Object.entries(t??{}).map(([e,t])=>[e,t===void 0?n[e]:t]);return{...n,...Object.fromEntries(r)}}watchQuery(e){Da(e.query,ve.QUERY);let t=this.transform(e.query);return e={...e,variables:this.getVariables(t,e.variables)},e.notifyOnNetworkStatusChange===void 0&&(e.notifyOnNetworkStatusChange=!0),new kl({queryManager:this,options:e,transformedQuery:t})}query(e){let t=this.transform(e.query);return this.fetchQuery({...e,query:t}).then(n=>({...n,data:this.maskOperation({document:t,data:n?.data,fetchPolicy:e.fetchPolicy})}))}clearStore(e={discardWatches:!0}){return this.cancelPendingFetches(Zi(92)),this.obsQueries.forEach(e=>{e.reset()}),this.mutationStore&&(this.mutationStore={}),this.cache.reset(e)}getObservableQueries(e=`active`){let t=new Set,n=new Map,r=new Map,i=new Set;return Array.isArray(e)&&e.forEach(e=>{if(typeof e==`string`)n.set(e,e),r.set(e,!1);else if(to(e)){let t=Vs(this.transform(e));n.set(t,oa(e)),r.set(t,!1)}else Ma(e)&&e.query&&i.add(e)}),this.obsQueries.forEach(n=>{let i=Vs(this.transform(n.options.query));if(e===`all`){t.add(n);return}let{queryName:a,options:{fetchPolicy:o}}=n;(e!==`active`||o!==`standby`)&&(e===`active`||a&&r.has(a)||i&&r.has(i))&&(t.add(n),a&&r.set(a,!0),i&&r.set(i,!0))}),i.size&&i.forEach(e=>{let n=new kl({queryManager:this,options:{...co(this.defaultOptions.watchQuery,e),fetchPolicy:`network-only`}});t.add(n)}),t}refetchObservableQueries(e=!1){let t=[];return this.getObservableQueries(e?`all`:`active`).forEach(n=>{let{fetchPolicy:r}=n.options;(e||r!==`standby`)&&r!==`cache-only`&&t.push(n.refetch())}),this.broadcastQueries(),Promise.all(t)}startGraphQLSubscription(e){let{query:t,variables:n}=e,{fetchPolicy:r=`cache-first`,errorPolicy:i=`none`,context:a={},extensions:s={}}=e;Da(t,ve.SUBSCRIPTION),t=this.transform(t),n=this.getVariables(t,n);let c,l=(this.getDocumentInfo(t).hasClientExports?fi(this.localState.getExportedVariables({client:this.client,document:t,variables:n,context:a})):pi(n)).pipe(wi(e=>{let{observable:n,restart:l}=this.getObservableFromLink(t,a,e,r,s),u=new Il(this);return c=l,n.pipe(Si(n=>{u.markSubscriptionResult(n,{document:t,variables:e,errorPolicy:i,cacheWriteBehavior:r===`no-cache`?0:2});let a={data:n.data??void 0};return Qa(n)?a.error=new o(n):Sl(n)&&(a.error=n.extensions[xl],delete n.extensions[xl]),n.extensions&&Object.keys(n.extensions).length&&(a.extensions=n.extensions),a.error&&i===`none`&&(a.data=void 0),i===`ignore`&&delete a.error,a}),Ai(e=>pi(i===`ignore`?{data:void 0}:{data:void 0,error:e})),ki(e=>!!(e.data||e.error)))}));return Object.assign(l,{restart:()=>c?.()})}broadcastQueries(){this.onBroadcast&&this.onBroadcast(),this.obsQueries.forEach(e=>e.notify())}getObservableFromLink(e,t,n,r,i,a=t?.queryDeduplication??this.queryDeduplication){let o={},{serverQuery:s,clientQuery:c,operationType:l,hasIncrementalDirective:u}=this.getDocumentInfo(e),d=oa(e),f={client:this.client};if(s){let{inFlightLinkObservables:e,link:r}=this;try{let c=this.incrementalHandler.prepareRequest({query:s,variables:n,context:{...this.defaultContext,...t,queryDeduplication:a},extensions:i});t=c.context;function u(e){return new R(t=>{var n;function r(){return e.subscribe({next:t.next.bind(t),complete:t.complete.bind(t),error:t.error.bind(t)})}let i=r();return(n=o).restart||(n.restart=()=>{i.unsubscribe(),i=r()}),()=>{i.unsubscribe(),o.restart=void 0}})}if(a){let t=Vs(s),i=Ga(n);o=e.lookup(t,i),o.observable||(o.observable=Ls(r,c,f).pipe(u,Ni(()=>{e.peek(t,i)===o&&e.remove(t,i)}),l===ve.SUBSCRIPTION?Fi():Li({refCount:!0})))}else o.observable=Ls(r,c,f).pipe(u)}catch(e){o.observable=mi(()=>e)}}else o.observable=pi({data:{}});if(c){let{operation:i}=Ua(e);z(!u,97,i[0].toUpperCase()+i.slice(1),d??`(anonymous)`),o.observable=o.observable.pipe(wi(e=>fi(this.localState.execute({client:this.client,document:c,remoteResult:e,context:t,variables:n,fetchPolicy:r}))))}return{restart:()=>o.restart?.(),observable:o.observable.pipe(Ai(e=>{throw e=Cl(e),vl(e),e}))}}getResultsFromLink(e,{queryInfo:t,cacheWriteBehavior:n,observableQuery:r,exposeExtensions:i}){let{errorPolicy:a}=e,s=this.cache.transformForLink(e.query);return this.getObservableFromLink(s,e.context,e.variables,e.fetchPolicy).observable.pipe(Si(c=>{let l=t.markQueryResult(c,{...e,document:s,cacheWriteBehavior:n}),u=Qa(l);if(u&&a===`none`)throw t.resetLastWrite(),r?.resetNotifications(),new o(Vl(l));let d={data:l.data,...t.hasNext?{loading:!0,networkStatus:U.streaming,dataState:`streaming`,partial:!0}:{dataState:l.data?`complete`:`empty`,loading:!1,networkStatus:U.ready,partial:!l.data}};return i&&`extensions`in l&&(d[Ho]=l.extensions),u&&(a===`none`&&(d.data=void 0,d.dataState=`empty`),a!==`ignore`&&(d.error=new o(Vl(l)),d.dataState!==`streaming`&&(d.networkStatus=U.error))),d}),Ai(e=>{if(a===`none`)throw t.resetLastWrite(),r?.resetNotifications(),e;let n={data:void 0,dataState:`empty`,loading:!1,networkStatus:U.ready,partial:!0};return a!==`ignore`&&(n.error=e,n.networkStatus=U.error),pi(n)}))}fetchObservableWithInfo(e,{networkStatus:t=U.loading,query:n=e.query,fetchQueryOperator:r=e=>e,onCacheHit:i=()=>{},observableQuery:a,exposeExtensions:o}){let s=this.getVariables(n,e.variables),{fetchPolicy:c=`cache-first`,errorPolicy:l=`none`,returnPartialData:u=!1,notifyOnNetworkStatusChange:d=!0,context:f={}}=e;this.prioritizeCacheValues&&(c===`network-only`||c===`cache-and-network`)&&(c=`cache-first`);let p=Object.assign({},e,{query:n,variables:s,fetchPolicy:c,errorPolicy:l,returnPartialData:u,notifyOnNetworkStatusChange:d,context:f}),m=new Il(this,a),h=n=>{p.variables=n;let s=c===`no-cache`?0:t===U.refetch&&p.refetchWritePolicy!==`merge`?1:2,l=this.fetchQueryByPolicy(p,{queryInfo:m,cacheWriteBehavior:s,onCacheHit:i,observableQuery:a,exposeExtensions:o});return l.observable=l.observable.pipe(r),p.fetchPolicy!==`standby`&&a?.applyNextFetchPolicy(`after-fetch`,e),l},g=()=>{this.fetchCancelFns.delete(m.id)};this.fetchCancelFns.set(m.id,e=>{_.next({kind:`E`,error:e,source:`network`})});let _=new pr,v,y;if(this.getDocumentInfo(p.query).hasClientExports)v=fi(this.localState.getExportedVariables({client:this.client,document:p.query,variables:p.variables,context:p.context})).pipe(wi(e=>h(e).observable)),y=!0;else{let e=h(p.variables);y=e.fromLink,v=e.observable}return{observable:new R(e=>{e.add(g),v.subscribe(e),_.subscribe(e)}).pipe(Fi()),fromLink:y}}refetchQueries({updateCache:e,include:t,optimistic:n=!1,removeOptimistic:r=n?Wi(`refetchQueries`):void 0,onQueryUpdated:i}){let a=new Map;t&&this.getObservableQueries(t).forEach(e=>{if(e.options.fetchPolicy===`cache-only`||e.variablesUnknown)return;let t=e.getCurrentResult();a.set(e,{oq:e,lastDiff:{result:t?.data,complete:!t?.partial}})});let o=new Map;if(e){let t=new Set;this.cache.batch({update:e,optimistic:n&&r||!1,removeOptimistic:r,onWatchUpdated(e,n,r){let s=e.watcher;if(s instanceof kl&&!t.has(s)){if(t.add(s),i){a.delete(s);let e=i(s,n,r);return e===!0&&(e=s.refetch().retain()),e!==!1&&o.set(s,e),e}i!==null&&s.options.fetchPolicy!==`cache-only`&&a.set(s,{oq:s,lastDiff:r,diff:n})}}})}return a.size&&a.forEach(({oq:e,lastDiff:t,diff:n})=>{let r;i&&(n||(n=e.getCacheDiff()),r=i(e,n,t)),(!i||r===!0)&&(r=e.refetch().retain()),r!==!1&&o.set(e,r)}),r&&this.cache.removeOptimistic(r),o}maskOperation(e){let{document:t,data:n}=e;return this.dataMasking?Ec(n,t,this.cache):n}maskFragment(e){let{data:t,fragment:n,fragmentName:r}=e;return this.dataMasking?Tc(t,n,this.cache,r):t}fetchQueryByPolicy({query:e,variables:t,fetchPolicy:n,errorPolicy:r,returnPartialData:i,context:a},{cacheWriteBehavior:o,onCacheHit:s,queryInfo:c,observableQuery:l,exposeExtensions:u}){let d=()=>this.cache.diff({query:e,variables:t,returnPartialData:!0,optimistic:!0}),f=(o,c)=>{let l=o.result,u=e=>(!o.complete&&!i&&(e=void 0),{data:e,dataState:o.complete?`complete`:e?`partial`:`empty`,loading:Ks(c),networkStatus:c,partial:!o.complete}),d=e=>pi({kind:`N`,value:u(e),resolvedVariables:t,source:`cache`});return(o.complete||i)&&this.getDocumentInfo(e).hasForcedResolvers?(s(),fi(this.localState.execute({client:this.client,document:e,remoteResult:l?{data:l}:void 0,context:a,variables:t,onlyRunForcedResolvers:!0,returnPartialData:!0,fetchPolicy:n}).then(e=>({kind:`N`,value:u(e.data||void 0),resolvedVariables:t,source:`cache`})))):r===`none`&&c===U.refetch&&o.missing?d(void 0):d(l||void 0)},p=()=>this.getResultsFromLink({query:e,variables:t,context:a,fetchPolicy:n,errorPolicy:r},{cacheWriteBehavior:o,queryInfo:c,observableQuery:l,exposeExtensions:u}).pipe(zl(),Pi(),Si(e=>({...e,resolvedVariables:t,source:`network`})));switch(n){default:case`cache-first`:{let e=d();return e.complete?{fromLink:!1,observable:f(e,U.ready)}:i?{fromLink:!0,observable:Di(f(e,U.loading),p())}:{fromLink:!0,observable:p()}}case`cache-and-network`:{let e=d();return e.complete||i?{fromLink:!0,observable:Di(f(e,U.loading),p())}:{fromLink:!0,observable:p()}}case`cache-only`:return{fromLink:!1,observable:Di(f(d(),U.ready))};case`network-only`:return{fromLink:!0,observable:p()};case`no-cache`:return{fromLink:!0,observable:p()};case`standby`:return{fromLink:!1,observable:Pr}}}};function zl(){let e=!1;return zi({next(){e=!0},complete(){z(e,101)}})}function Bl(e){return kt(e,{FragmentSpread:e=>{if(!e.directives?.some(e=>e.name.value===`unmask`))return{...e,directives:[...e.directives||[],{kind:Be,name:{kind:be,value:`nonreactive`}}]}}})}function Vl(e){if(e.extensions?.[Uo]==null)return e;let{extensions:{[Uo]:t,...n},...r}=e;return Object.keys(n).length>0&&(r.extensions=n),r}var Hl=class{set prioritizeCacheValues(e){this.queryManager.prioritizeCacheValues=e}get prioritizeCacheValues(){return this.queryManager.prioritizeCacheValues}constructor(e){S(this,`link`,void 0),S(this,`cache`,void 0),S(this,`disableNetworkFetches`,void 0),S(this,`version`,void 0),S(this,`queryDeduplication`,void 0),S(this,`defaultOptions`,void 0),S(this,`devtoolsConfig`,void 0),S(this,`refetchEventManager`,void 0),S(this,`queryManager`,void 0),S(this,`devToolsHookCb`,void 0),S(this,`resetStoreCallbacks`,[]),S(this,`clearStoreCallbacks`,[]),S(this,`query`,e=>(this.defaultOptions.query&&(e=co(this.defaultOptions.query,e)),this.queryManager.query(e))),S(this,`mutate`,e=>{let t=co(Aa({fetchPolicy:`network-only`,errorPolicy:`none`},this.defaultOptions.mutate),e);return Da(t.mutation,ve.MUTATION),this.queryManager.mutate(t)}),S(this,`reFetchObservableQueries`,void 0),S(this,`maskedFragmentTransform`,new zs(vo));let{cache:t,documentTransform:n,ssrMode:r=!1,ssrForceFetchDelay:i=0,queryDeduplication:a=!0,defaultOptions:o,defaultContext:s,assumeImmutableResults:c=t.assumeImmutableResults,localState:l,devtools:u,dataMasking:d,link:f,incrementalHandler:p=new Ns,experiments:m=[],refetchEventManager:h}=e;this.link=f,this.cache=t,this.queryDeduplication=a,this.defaultOptions=o||{},this.devtoolsConfig={...u,enabled:u?.enabled??!1},this.watchQuery=this.watchQuery.bind(this),this.query=this.query.bind(this),this.mutate=this.mutate.bind(this),this.watchFragment=this.watchFragment.bind(this),this.resetStore=this.resetStore.bind(this),this.reFetchObservableQueries=this.refetchObservableQueries=this.refetchObservableQueries.bind(this),this.version=Hi,this.queryManager=new Rl({client:this,defaultOptions:this.defaultOptions,defaultContext:s,documentTransform:n,queryDeduplication:a,ssrMode:r,dataMasking:!!d,clientOptions:e,incrementalHandler:p,assumeImmutableResults:c,onBroadcast:this.devtoolsConfig.enabled?()=>{this.devToolsHookCb&&this.devToolsHookCb()}:void 0,localState:l}),this.prioritizeCacheValues=r||i>0,i&&setTimeout(()=>{this.prioritizeCacheValues=!1},i),this.devtoolsConfig.enabled&&this.connectToDevTools(),m.forEach(t=>t.call(this,e)),this.refetchEventManager=h,this.refetchEventManager?.connect(this)}connectToDevTools(){if(typeof window>`u`)return;let e=window,t=Symbol.for(`apollo.devtools`);(e[t]=e[t]||[]).push(this),e.__APOLLO_CLIENT__=this}get documentTransform(){return this.queryManager.documentTransform}get localState(){return this.queryManager.localState}set localState(e){this.queryManager.localState=e}stop(){this.queryManager.stop(),this.refetchEventManager?.disconnect(this)}watchQuery(e){let{refetchOn:t}=e;if(this.defaultOptions.watchQuery){let n=this.defaultOptions.watchQuery.refetchOn,r;t&&typeof t==`object`&&(typeof n==`object`?r={...n,...t}:n!=null&&(r=e=>{let r=t[e.source]??n;return typeof r==`function`?r(e):r})),e=co(this.defaultOptions.watchQuery,e),r&&(e.refetchOn=r)}return this.queryManager.watchQuery(e)}subscribe(e){let t={},n=this.queryManager.startGraphQLSubscription(e),r=n.pipe(Si(n=>({...n,data:this.queryManager.maskOperation({document:e.query,data:n.data,fetchPolicy:e.fetchPolicy,cause:t})})));return Object.assign(r,{restart:n.restart})}readQuery(e,t=!!e.optimistic){return this.cache.readQuery({...e,query:this.transform(e.query)},t)}watchFragment(e){let t=this.queryManager.dataMasking;return this.cache.watchFragment({...e,fragment:this.transform(e.fragment,t)})}readFragment(e,t=!!e.optimistic){return this.cache.readFragment({...e,fragment:this.transform(e.fragment)},t)}writeQuery(e){let t=this.cache.writeQuery(e);return e.broadcast!==!1&&this.queryManager.broadcastQueries(),t}writeFragment(e){let t=this.cache.writeFragment(e);return e.broadcast!==!1&&this.queryManager.broadcastQueries(),t}__actionHookForDevTools(e){this.devToolsHookCb=e}__requestRaw(e){return Ls(this.link,e,{client:this})}resetStore(){return Promise.resolve().then(()=>this.queryManager.clearStore({discardWatches:!1})).then(()=>Promise.all(this.resetStoreCallbacks.map(e=>e()))).then(()=>this.refetchObservableQueries())}clearStore(){return Promise.resolve().then(()=>this.queryManager.clearStore({discardWatches:!0})).then(()=>Promise.all(this.clearStoreCallbacks.map(e=>e())))}onResetStore(e){return this.resetStoreCallbacks.push(e),()=>{this.resetStoreCallbacks=this.resetStoreCallbacks.filter(t=>t!==e)}}onClearStore(e){return this.clearStoreCallbacks.push(e),()=>{this.clearStoreCallbacks=this.clearStoreCallbacks.filter(t=>t!==e)}}refetchObservableQueries(e){return this.queryManager.refetchObservableQueries(e)}refetchQueries(e){let t=this.queryManager.refetchQueries(e),n=[],r=[];t.forEach((e,t)=>{n.push(t),r.push(e)});let i=Promise.all(r);return i.queries=n,i.results=r,i.catch(e=>{}),i}getObservableQueries(e=`active`){return this.queryManager.getObservableQueries(e)}extract(e){return this.cache.extract(e)}restore(e){return this.cache.restore(e)}setLink(e){this.link=e}get defaultContext(){return this.queryManager.defaultContext}transform(e,t=!1){let n=this.queryManager.transform(e);return t?this.maskedFragmentTransform.transformDocument(n):n}},{hasOwnProperty:Ul}=Object.prototype;function Wl(e,t){if(e.status>=300)throw new yl(`Response not successful: Received status code ${e.status}`,{response:e,bodyText:t});try{return JSON.parse(t)}catch(n){throw new bl(n,{response:e,bodyText:t})}}function Gl(e,t){try{return JSON.parse(t)}catch(n){throw new bl(n,{response:e,bodyText:t})}}function Kl(e,t){return e.headers.get(`content-type`)?.includes(`application/graphql-response+json`)?Gl(e,t):Wl(e,t)}function ql(e){return t=>t.text().then(n=>{let r=Kl(t,n);if(!Array.isArray(r)&&!Ul.call(r,`data`)&&!Ul.call(r,`errors`))throw new yl(`Server response was malformed for query '${Array.isArray(e)?e.map(e=>e.operationName):e.operationName}'.`,{response:t,bodyText:n});return r})}var Jl={http:{includeQuery:!0,includeExtensions:!0,preserveHeaderCase:!1},headers:{accept:`application/graphql-response+json,application/json;q=0.9`,"content-type":`application/json`},options:{method:`POST`}},Yl=(e,t)=>t(e);function Xl(e,t,...n){let r={},i={};n.forEach(e=>{r={...r,...e.options,headers:{...r.headers,...e.headers}},e.credentials&&(r.credentials=e.credentials),r.headers.accept=(e.http?.accept||[]).concat(r.headers.accept).join(`,`),i={...i,...e.http}}),r.headers=Zl(r.headers,i.preserveHeaderCase);let{operationName:a,extensions:o,variables:s,query:c}=e,l={operationName:a,variables:s};return i.includeExtensions&&Object.keys(o||{}).length&&(l.extensions=o),i.includeQuery&&(l.query=t(c,Vs)),{options:r,body:l}}function Zl(e,t){if(!t){let t={};return Object.keys(Object(e)).forEach(n=>{t[n.toLowerCase()]=e[n]}),t}let n={};Object.keys(Object(e)).forEach(t=>{n[t.toLowerCase()]={originalName:t,value:e[t]}});let r={};return Object.keys(n).forEach(e=>{r[n[e].originalName]=n[e].value}),r}var Ql=(e,t)=>e.getContext().uri||(typeof t==`function`?t(e):t||`/graphql`);function $l(e,t){let n=[],r=(e,t)=>{n.push(`${e}=${encodeURIComponent(t)}`)};if(`query`in t&&r(`query`,t.query),t.operationName&&r(`operationName`,t.operationName),t.variables){let e;try{e=JSON.stringify(t.variables)}catch(e){return{parseError:e}}r(`variables`,e)}if(t.extensions){let e;try{e=JSON.stringify(t.extensions)}catch(e){return{parseError:e}}r(`extensions`,e)}let i=``,a=e,o=e.indexOf(`#`);o!==-1&&(i=e.substr(o),a=e.substr(0,o));let s=a.indexOf(`?`)===-1?`?`:`&`;return{newURI:a+s+n.join(`&`)+i}}var eu=new Map,tu=new Map,nu=!0,ru=!1;function iu(e){return e.replace(/[\s,]+/g,` `).trim()}function au(e){return iu(e.source.body.substring(e.start,e.end))}function ou(e){var t=new Set,n=[];return e.definitions.forEach(function(e){if(e.kind===`FragmentDefinition`){var r=e.name.value,i=au(e.loc),a=tu.get(r);a&&!a.has(i)?nu&&console.warn(`Warning: fragment with name `+r+` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`):a||tu.set(r,a=new Set),a.add(i),t.has(i)||(t.add(i),n.push(e))}else n.push(e)}),bn(bn({},e),{definitions:n})}function su(e){var t=new Set(e.definitions);t.forEach(function(e){e.loc&&delete e.loc,Object.keys(e).forEach(function(n){var r=e[n];r&&typeof r==`object`&&t.add(r)})});var n=e.loc;return n&&(delete n.startToken,delete n.endToken),e}function cu(e){var t=iu(e);if(!eu.has(t)){var n=pn(e,{experimentalFragmentVariables:ru,allowLegacyFragmentVariables:ru,experimentalFragmentArguments:ru});if(!n||n.kind!==`Document`)throw Error(`Not a valid GraphQL document.`);eu.set(t,su(ou(n)))}return eu.get(t)}function lu(e){var t=[...arguments].slice(1);typeof e==`string`&&(e=[e]);var n=e[0];return t.forEach(function(t,r){t&&t.kind===`Document`?n+=t.loc.source.body:n+=t,n+=e[r+1]}),cu(n)}function uu(){eu.clear(),tu.clear()}function du(){nu=!1}function fu(){ru=!0}function pu(){ru=!1}var mu={gql:lu,resetCaches:uu,disableFragmentWarnings:du,enableExperimentalFragmentVariables:fu,disableExperimentalFragmentVariables:pu};(function(e){e.gql=mu.gql,e.resetCaches=mu.resetCaches,e.disableFragmentWarnings=mu.disableFragmentWarnings,e.enableExperimentalFragmentVariables=mu.enableExperimentalFragmentVariables,e.disableExperimentalFragmentVariables=mu.disableExperimentalFragmentVariables})(lu||(lu={})),lu.default=lu;var W=lu,hu=(e,t,n)=>{let r=t.lastIndexOf(`?`),i=e[r===-1||r<t.lastIndexOf(`/`)?t:t.slice(0,r)];return i?typeof i==`function`?i():Promise.resolve(i):new Promise((e,r)=>{(typeof queueMicrotask==`function`?queueMicrotask:setTimeout)(r.bind(null,Error(`Unknown variable dynamic import: `+t+(t.split(`/`).length===n?``:`. Note that variables only represent file names one level deep.`))))})},gu={name:`Portuguese; Brasil`,nativeName:`Português (Brasil)`},_u={"es-419":{name:`Spanish; Castilian`,nativeName:`Español (Latinoamérica)`},"pt-pt":{name:`Portuguese`,nativeName:`Português (Portugal)`},"pt-br":gu,"pt-BR":gu,"zh-Hans":{name:`Chinese (Simplified)`,nativeName:`中文 (HANS)`},"zh-Hant":{name:`Chinese (Traditional)`,nativeName:`中文 (HANT)`},"zh-rhk":{name:`Chinese`,nativeName:`中文 (RHK)`},"zh-rtw":{name:`Chinese`,nativeName:`中文 (RTW)`},fil:{name:`Filipino`,nativeName:`Filipino`},sh:{name:`Serbo-Croatian`,nativeName:`srpskohrvatski`},"nb-NO":{name:`Norwegian Bokmål`,nativeName:`Norsk bokmål`},aa:{name:`Afar`,nativeName:`Afaraf`},ab:{name:`Abkhaz`,nativeName:`аҧсуа бызшәа`},ae:{name:`Avestan`,nativeName:`avesta`},af:{name:`Afrikaans`,nativeName:`Afrikaans`},ak:{name:`Akan`,nativeName:`Akan`},am:{name:`Amharic`,nativeName:`አማርኛ`},an:{name:`Aragonese`,nativeName:`aragonés`},ar:{name:`Arabic`,nativeName:`اَلْعَرَبِيَّةُ`},as:{name:`Assamese`,nativeName:`অসমীয়া`},av:{name:`Avaric`,nativeName:`авар мацӀ`},ay:{name:`Aymara`,nativeName:`aymar aru`},az:{name:`Azerbaijani`,nativeName:`azərbaycan dili`},ba:{name:`Bashkir`,nativeName:`башҡорт теле`},be:{name:`Belarusian`,nativeName:`беларуская мова`},bg:{name:`Bulgarian`,nativeName:`български език`},bi:{name:`Bislama`,nativeName:`Bislama`},bm:{name:`Bambara`,nativeName:`bamanankan`},bn:{name:`Bengali`,nativeName:`বাংলা`},bo:{name:`Tibetan`,nativeName:`བོད་ཡིག`},br:{name:`Breton`,nativeName:`brezhoneg`},bs:{name:`Bosnian`,nativeName:`bosanski jezik`},ca:{name:`Catalan`,nativeName:`Català`},ce:{name:`Chechen`,nativeName:`нохчийн мотт`},ch:{name:`Chamorro`,nativeName:`Chamoru`},co:{name:`Corsican`,nativeName:`corsu`},cr:{name:`Cree`,nativeName:`ᓀᐦᐃᔭᐍᐏᐣ`},cs:{name:`Czech`,nativeName:`čeština`},cu:{name:`Old Church Slavonic`,nativeName:`ѩзыкъ словѣньскъ`},cv:{name:`Chuvash`,nativeName:`чӑваш чӗлхи`},cy:{name:`Welsh`,nativeName:`Cymraeg`},da:{name:`Danish`,nativeName:`Dansk`},de:{name:`German`,nativeName:`Deutsch`},dv:{name:`Divehi`,nativeName:`ދިވެހި`},dz:{name:`Dzongkha`,nativeName:`རྫོང་ཁ`},ee:{name:`Ewe`,nativeName:`Eʋegbe`},el:{name:`Greek`,nativeName:`Ελληνικά`},en:{name:`English`,nativeName:`English`},eo:{name:`Esperanto`,nativeName:`Esperanto`},es:{name:`Spanish`,nativeName:`Español`},et:{name:`Estonian`,nativeName:`eesti`},eu:{name:`Basque`,nativeName:`euskara`},fa:{name:`Persian`,nativeName:`فارسی`},ff:{name:`Fula`,nativeName:`Fulfulde`},fi:{name:`Finnish`,nativeName:`suomi`},fj:{name:`Fijian`,nativeName:`vosa Vakaviti`},fo:{name:`Faroese`,nativeName:`Føroyskt`},fr:{name:`French`,nativeName:`Français`},fy:{name:`Western Frisian`,nativeName:`Frysk`},ga:{name:`Irish`,nativeName:`Gaeilge`},gd:{name:`Scottish Gaelic`,nativeName:`Gàidhlig`},gl:{name:`Galician`,nativeName:`galego`},gn:{name:`Guaraní`,nativeName:`Avañe'ẽ`},gu:{name:`Gujarati`,nativeName:`ગુજરાતી`},gv:{name:`Manx`,nativeName:`Gaelg`},ha:{name:`Hausa`,nativeName:`هَوُسَ`},he:{name:`Hebrew`,nativeName:`עברית`},hi:{name:`Hindi`,nativeName:`हिन्दी`},ho:{name:`Hiri Motu`,nativeName:`Hiri Motu`},hr:{name:`Croatian`,nativeName:`Hrvatski`},ht:{name:`Haitian`,nativeName:`Kreyòl ayisyen`},hu:{name:`Hungarian`,nativeName:`magyar`},hy:{name:`Armenian`,nativeName:`Հայերեն`},hz:{name:`Herero`,nativeName:`Otjiherero`},ia:{name:`Interlingua`,nativeName:`Interlingua`},id:{name:`Indonesian`,nativeName:`Bahasa Indonesia`},ie:{name:`Interlingue`,nativeName:`Interlingue`},ig:{name:`Igbo`,nativeName:`Asụsụ Igbo`},ii:{name:`Nuosu`,nativeName:`ꆈꌠ꒿ Nuosuhxop`},ik:{name:`Inupiaq`,nativeName:`Iñupiaq`},io:{name:`Ido`,nativeName:`Ido`},is:{name:`Icelandic`,nativeName:`Íslenska`},it:{name:`Italian`,nativeName:`Italiano`},iu:{name:`Inuktitut`,nativeName:`ᐃᓄᒃᑎᑐᑦ`},ja:{name:`Japanese`,nativeName:`日本語`},jv:{name:`Javanese`,nativeName:`basa Jawa`},ka:{name:`Georgian`,nativeName:`ქართული`},kg:{name:`Kongo`,nativeName:`Kikongo`},ki:{name:`Kikuyu`,nativeName:`Gĩkũyũ`},kj:{name:`Kwanyama`,nativeName:`Kuanyama`},kk:{name:`Kazakh`,nativeName:`қазақ тілі`},kl:{name:`Kalaallisut`,nativeName:`kalaallisut`},km:{name:`Khmer`,nativeName:`ខេមរភាសា`},kn:{name:`Kannada`,nativeName:`ಕನ್ನಡ`},ko:{name:`Korean`,nativeName:`한국어`},kr:{name:`Kanuri`,nativeName:`Kanuri`},ks:{name:`Kashmiri`,nativeName:`कश्मीरी`},ku:{name:`Kurdish`,nativeName:`Kurdî`},kv:{name:`Komi`,nativeName:`коми кыв`},kw:{name:`Cornish`,nativeName:`Kernewek`},ky:{name:`Kyrgyz`,nativeName:`Кыргызча`},la:{name:`Latin`,nativeName:`latine`},lb:{name:`Luxembourgish`,nativeName:`Lëtzebuergesch`},lg:{name:`Ganda`,nativeName:`Luganda`},li:{name:`Limburgish`,nativeName:`Limburgs`},ln:{name:`Lingala`,nativeName:`Lingála`},lo:{name:`Lao`,nativeName:`ພາສາລາວ`},lt:{name:`Lithuanian`,nativeName:`lietuvių kalba`},lu:{name:`Luba-Katanga`,nativeName:`Kiluba`},lv:{name:`Latvian`,nativeName:`latviešu valoda`},mg:{name:`Malagasy`,nativeName:`fiteny malagasy`},mh:{name:`Marshallese`,nativeName:`Kajin M̧ajeļ`},mi:{name:`Māori`,nativeName:`te reo Māori`},mk:{name:`Macedonian`,nativeName:`македонски јазик`},ml:{name:`Malayalam`,nativeName:`മലയാളം`},mn:{name:`Mongolian`,nativeName:`Монгол хэл`},mr:{name:`Marathi`,nativeName:`मराठी`},ms:{name:`Malay`,nativeName:`Bahasa Melayu`},mt:{name:`Maltese`,nativeName:`Malti`},my:{name:`Burmese`,nativeName:`ဗမာစာ`},na:{name:`Nauru`,nativeName:`Dorerin Naoero`},nb:{name:`Norwegian Bokmål`,nativeName:`Norsk bokmål`},nd:{name:`Northern Ndebele`,nativeName:`isiNdebele`},ne:{name:`Nepali`,nativeName:`नेपाली`},ng:{name:`Ndonga`,nativeName:`Owambo`},nl:{name:`Dutch`,nativeName:`Nederlands`},nn:{name:`Norwegian Nynorsk`,nativeName:`Norsk nynorsk`},no:{name:`Norwegian`,nativeName:`Norsk`},nr:{name:`Southern Ndebele`,nativeName:`isiNdebele`},nv:{name:`Navajo`,nativeName:`Diné bizaad`},ny:{name:`Chichewa`,nativeName:`chiCheŵa`},oc:{name:`Occitan`,nativeName:`occitan`},oj:{name:`Ojibwe`,nativeName:`ᐊᓂᔑᓈᐯᒧᐎᓐ`},om:{name:`Oromo`,nativeName:`Afaan Oromoo`},or:{name:`Oriya`,nativeName:`ଓଡ଼ିଆ`},os:{name:`Ossetian`,nativeName:`ирон æвзаг`},pa:{name:`Panjabi`,nativeName:`ਪੰਜਾਬੀ`},pi:{name:`Pāli`,nativeName:`पाऴि`},pl:{name:`Polish`,nativeName:`Polski`},ps:{name:`Pashto`,nativeName:`پښتو`},pt:{name:`Portuguese`,nativeName:`Português`},qu:{name:`Quechua`,nativeName:`Runa Simi`},rm:{name:`Romansh`,nativeName:`rumantsch grischun`},rn:{name:`Kirundi`,nativeName:`Ikirundi`},ro:{name:`Romanian`,nativeName:`Română`},ru:{name:`Russian`,nativeName:`Русский`},rw:{name:`Kinyarwanda`,nativeName:`Ikinyarwanda`},sa:{name:`Sanskrit`,nativeName:`संस्कृतम्`},sc:{name:`Sardinian`,nativeName:`sardu`},sd:{name:`Sindhi`,nativeName:`सिन्धी`},se:{name:`Northern Sami`,nativeName:`Davvisámegiella`},sg:{name:`Sango`,nativeName:`yângâ tî sängö`},si:{name:`Sinhala`,nativeName:`සිංහල`},sk:{name:`Slovak`,nativeName:`slovenčina`},sl:{name:`Slovenian`,nativeName:`slovenščina`},sm:{name:`Samoan`,nativeName:`gagana fa'a Samoa`},sn:{name:`Shona`,nativeName:`chiShona`},so:{name:`Somali`,nativeName:`Soomaaliga`},sq:{name:`Albanian`,nativeName:`Shqip`},sr:{name:`Serbian`,nativeName:`српски језик`},ss:{name:`Swati`,nativeName:`SiSwati`},st:{name:`Southern Sotho`,nativeName:`Sesotho`},su:{name:`Sundanese`,nativeName:`Basa Sunda`},sv:{name:`Swedish`,nativeName:`Svenska`},sw:{name:`Swahili`,nativeName:`Kiswahili`},ta:{name:`Tamil`,nativeName:`தமிழ்`},te:{name:`Telugu`,nativeName:`తెలుగు`},tg:{name:`Tajik`,nativeName:`тоҷикӣ`},th:{name:`Thai`,nativeName:`ไทย`},ti:{name:`Tigrinya`,nativeName:`ትግርኛ`},tk:{name:`Turkmen`,nativeName:`Türkmençe`},tl:{name:`Tagalog`,nativeName:`Wikang Tagalog`},tn:{name:`Tswana`,nativeName:`Setswana`},to:{name:`Tonga`,nativeName:`faka Tonga`},tr:{name:`Turkish`,nativeName:`Türkçe`},ts:{name:`Tsonga`,nativeName:`Xitsonga`},tt:{name:`Tatar`,nativeName:`татар теле`},tw:{name:`Twi`,nativeName:`Twi`},ty:{name:`Tahitian`,nativeName:`Reo Tahiti`},ug:{name:`Uyghur`,nativeName:`ئۇيغۇرچە‎`},uk:{name:`Ukrainian`,nativeName:`Українська`},ur:{name:`Urdu`,nativeName:`اردو`},uz:{name:`Uzbek`,nativeName:`Ўзбек`},ve:{name:`Venda`,nativeName:`Tshivenḓa`},vi:{name:`Vietnamese`,nativeName:`Tiếng Việt`},vo:{name:`Volapük`,nativeName:`Volapük`},wa:{name:`Walloon`,nativeName:`walon`},wo:{name:`Wolof`,nativeName:`Wollof`},xh:{name:`Xhosa`,nativeName:`isiXhosa`},yi:{name:`Yiddish`,nativeName:`ייִדיש`},yo:{name:`Yoruba`,nativeName:`Yorùbá`},za:{name:`Zhuang`,nativeName:`Saɯ cueŋƅ`},zh:{name:`Chinese`,nativeName:`中文`},zu:{name:`Zulu`,nativeName:`isiZulu`}},vu=`i18n:selected-language`,yu=`ar.shu.sqr.ssh.xaa.yhd.yud.aao.abh.abv.acm.acq.acw.acx.acy.adf.ads.aeb.aec.afb.ajp.apc.apd.arb.arq.ars.ary.arz.auz.avl.ayh.ayl.ayn.ayp.bbz.pga.he.iw.ps.pbt.pbu.pst.prp.prd.ug.ur.ydd.yds.yih.ji.yi.hbo.men.xmn.fa.jpr.peo.pes.prs.dv.sam.ckb`.split(`.`);function bu(e,t=e,n=e){return _u[e]?{..._u[e],orgCode:t,isoCode:n}:null}function xu(e){return bu(e)??bu(e.toLowerCase(),e)??bu(e.replace(`-`,`_`),e)??bu(e.replace(`_`,`-`),e)??bu(e.split(`-`)[0],e)??bu(e.split(`_`)[0],e)}var Su=e=>{let t=e.map(e=>xu(e)).filter(e=>e!==null),n=Object.groupBy(t,e=>e.isoCode);return Object.entries(n).filter(([,e])=>!!e?.length).map(([,e])=>e[0].orgCode)};function Cu(){let e=Su([...navigator.languages]).map(e=>xu(e)?.isoCode??e);return e.length?e:[`en`]}function wu(e){let t=xu(e);return e.toLowerCase().includes(`-latn`)||t?.isoCode.includes(`-latn`)?`ltr`:e.toLowerCase().includes(`-arab`)||t?.isoCode.toLowerCase().includes(`-arab`)||yu.includes(e)||yu.includes(t?.isoCode)?`rtl`:`ltr`}function Tu(){return[b.local.getItem(`i18n:selected-language`),...Cu()].filter(e=>e!==null).filter(e=>xu(e)).filter(e=>ku.includes(e))[0]??`en`}var Eu=`modulepreload`,Du=function(e,t){return new URL(e,t).href},Ou={},G=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=Du(t,n),t=s(t),t in Ou)return;Ou[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:Eu,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},ku=[`ar`,`de`,`el`,`en`,`es`,`fr`,`he`,`hu`,`id`,`ko`,`pl`,`pt`,`ru`,`vi`,`zh-Hans`,`zh-Hant`],Au=`en`;async function ju(e){let t=ku.includes(e)?e:Au,{messages:n}=await hu(Object.assign({"./locales/ar.po":()=>G(()=>import(`./ar-BYOGlZSD.js`),[],import.meta.url),"./locales/bn.po":()=>G(()=>import(`./bn-BScWs-2I.js`),[],import.meta.url),"./locales/ca.po":()=>G(()=>import(`./ca-BScWs-2I.js`),[],import.meta.url),"./locales/da.po":()=>G(()=>import(`./da-BScWs-2I.js`),[],import.meta.url),"./locales/de.po":()=>G(()=>import(`./de-Cc2PJ7A2.js`),[],import.meta.url),"./locales/el.po":()=>G(()=>import(`./el-CpGYBiVF.js`),[],import.meta.url),"./locales/en.po":()=>G(()=>import(`./en-BScWs-2I.js`),[],import.meta.url),"./locales/es.po":()=>G(()=>import(`./es-B9KoYzBT.js`),[],import.meta.url),"./locales/fa.po":()=>G(()=>import(`./fa-BScWs-2I.js`),[],import.meta.url),"./locales/fil.po":()=>G(()=>import(`./fil-BScWs-2I.js`),[],import.meta.url),"./locales/fr.po":()=>G(()=>import(`./fr-CRjSJjKQ.js`),[],import.meta.url),"./locales/he.po":()=>G(()=>import(`./he-CIQrU04r.js`),[],import.meta.url),"./locales/hu.po":()=>G(()=>import(`./hu-C4FkUD-v.js`),[],import.meta.url),"./locales/id.po":()=>G(()=>import(`./id-C2cMTvWi.js`),[],import.meta.url),"./locales/it.po":()=>G(()=>import(`./it-BScWs-2I.js`),[],import.meta.url),"./locales/ja.po":()=>G(()=>import(`./ja-BScWs-2I.js`),[],import.meta.url),"./locales/ko.po":()=>G(()=>import(`./ko-BJ5IEtUC.js`),[],import.meta.url),"./locales/nb-NO.po":()=>G(()=>import(`./nb-NO-BScWs-2I.js`),[],import.meta.url),"./locales/nl.po":()=>G(()=>import(`./nl-BScWs-2I.js`),[],import.meta.url),"./locales/pl.po":()=>G(()=>import(`./pl-CcVjerEs.js`),[],import.meta.url),"./locales/pt-BR.po":()=>G(()=>import(`./pt-BR-BScWs-2I.js`),[],import.meta.url),"./locales/pt.po":()=>G(()=>import(`./pt-Dg59VIrO.js`),[],import.meta.url),"./locales/ro.po":()=>G(()=>import(`./ro-BScWs-2I.js`),[],import.meta.url),"./locales/ru.po":()=>G(()=>import(`./ru-NVZ8mDp0.js`),[],import.meta.url),"./locales/sk.po":()=>G(()=>import(`./sk-BScWs-2I.js`),[],import.meta.url),"./locales/sr.po":()=>G(()=>import(`./sr-BScWs-2I.js`),[],import.meta.url),"./locales/sv.po":()=>G(()=>import(`./sv-BScWs-2I.js`),[],import.meta.url),"./locales/ta.po":()=>G(()=>import(`./ta-BScWs-2I.js`),[],import.meta.url),"./locales/th.po":()=>G(()=>import(`./th-BScWs-2I.js`),[],import.meta.url),"./locales/tr.po":()=>G(()=>import(`./tr-BScWs-2I.js`),[],import.meta.url),"./locales/uk.po":()=>G(()=>import(`./uk-BScWs-2I.js`),[],import.meta.url),"./locales/vi.po":()=>G(()=>import(`./vi-DVtmaaW0.js`),[],import.meta.url),"./locales/zh-Hans.po":()=>G(()=>import(`./zh-Hans-CNiePl5K.js`),[],import.meta.url),"./locales/zh-Hant.po":()=>G(()=>import(`./zh-Hant-D_rD4LwH.js`),[],import.meta.url)}),`./locales/${t}.po`,3);p.loadAndActivate({locale:t,messages:n}),b.local.setItem(vu,t)}async function Mu(){try{await ju(Tu())}catch{await ju(Au)}}var Nu=class{constructor(e){this.milliseconds=e}},Pu=class e{createMilliseconds(e){return new Nu(e)}createSeconds(t){return new Nu(t*e.MS_PER_SECOND)}createMinutes(t){return new Nu(t*e.MS_PER_MINUTE)}createHours(t){return new Nu(t*e.MS_PER_HOUR)}createDays(t){return new Nu(t*e.MS_PER_DAY)}createWeeks(t){return new Nu(t*e.MS_PER_WEEK)}createMonths(t){return new Nu(t*e.MS_PER_MONTH)}createYears(t){return new Nu(t*e.MS_PER_YEAR)}asMilliseconds(e){return e.milliseconds}asSeconds(t){return t.milliseconds/e.MS_PER_SECOND}asMinutes(t){return t.milliseconds/e.MS_PER_MINUTE}asHours(t){return t.milliseconds/e.MS_PER_HOUR}asDays(t){return t.milliseconds/e.MS_PER_DAY}asWeeks(t){return t.milliseconds/e.MS_PER_WEEK}asMonths(t){return t.milliseconds/e.MS_PER_MONTH}asYears(t){return t.milliseconds/e.MS_PER_YEAR}plus(e,t){return new Nu(e.milliseconds+t)}minus(e,t){return new Nu(e.milliseconds-t)}times(e,t){return new Nu(e.milliseconds*t)}div(e,t){return new Nu(e.milliseconds/t)}};Pu.MS_PER_SECOND=1e3,Pu.MS_PER_MINUTE=6e4,Pu.MS_PER_HOUR=36e5,Pu.MS_PER_DAY=864e5,Pu.MS_PER_WEEK=6048e5,Pu.MS_PER_MONTH=2592e6,Pu.MS_PER_YEAR=31536e6;var Fu=new Pu;function Iu(e){Fu=e}function Lu(){return Fu}var Ru=class e{constructor(e){return this.internalDuration=e,new Proxy(this,{get(e,t,n){if(t in e){let r=Reflect.get(e,t,n);return typeof r==`function`?r.bind(e):r}let r=e.internalDuration[t];return typeof r==`function`?(...t)=>r.apply(e.internalDuration,t):r}})}get adapter(){return Lu()}get asWholeMilliseconds(){let t=Math.floor(this.adapter.asMilliseconds(this.internalDuration));return new e(this.adapter.createMilliseconds(t))}get asWholeSeconds(){let t=Math.floor(this.adapter.asSeconds(this.internalDuration));return new e(this.adapter.createSeconds(t))}get asWholeMinutes(){let t=Math.floor(this.adapter.asMinutes(this.internalDuration));return new e(this.adapter.createMinutes(t))}get asWholeHours(){let t=Math.floor(this.adapter.asHours(this.internalDuration));return new e(this.adapter.createHours(t))}get asWholeDays(){let t=Math.floor(this.adapter.asDays(this.internalDuration));return new e(this.adapter.createDays(t))}get asWholeWeeks(){let t=Math.floor(this.adapter.asWeeks(this.internalDuration));return new e(this.adapter.createWeeks(t))}get asWholeMonths(){let t=Math.floor(this.adapter.asMonths(this.internalDuration));return new e(this.adapter.createMonths(t))}get asWholeYears(){let t=Math.floor(this.adapter.asYears(this.internalDuration));return new e(this.adapter.createYears(t))}get inWholeMilliseconds(){return Math.floor(this.adapter.asMilliseconds(this.internalDuration))}get inWholeSeconds(){return Math.floor(this.adapter.asSeconds(this.internalDuration))}get inWholeMinutes(){return Math.floor(this.adapter.asMinutes(this.internalDuration))}get inWholeHours(){return Math.floor(this.adapter.asHours(this.internalDuration))}get inWholeDays(){return Math.floor(this.adapter.asDays(this.internalDuration))}get inWholeWeeks(){return Math.floor(this.adapter.asWeeks(this.internalDuration))}get inWholeMonths(){return Math.floor(this.adapter.asMonths(this.internalDuration))}get inWholeYears(){return Math.floor(this.adapter.asYears(this.internalDuration))}valueToInputValue(t){return t instanceof e?t.inWholeMilliseconds:t}plus(t){let n=this.valueToInputValue(t),r=this.adapter.plus(this.internalDuration,n);return new e(r)}minus(t){let n=this.valueToInputValue(t),r=this.adapter.minus(this.internalDuration,n);return new e(r)}times(t){let n=this.adapter.times(this.internalDuration,t);return new e(n)}div(t){let n=this.adapter.div(this.internalDuration,t);return new e(n)}},zu=class{constructor(e){this.value=e}get adapter(){return Lu()}get milliseconds(){return new Ru(this.adapter.createMilliseconds(this.value))}get seconds(){return new Ru(this.adapter.createSeconds(this.value))}get minutes(){return new Ru(this.adapter.createMinutes(this.value))}get hours(){return new Ru(this.adapter.createHours(this.value))}get days(){return new Ru(this.adapter.createDays(this.value))}get weeks(){return new Ru(this.adapter.createWeeks(this.value))}get months(){return new Ru(this.adapter.createMonths(this.value))}get years(){return new Ru(this.adapter.createYears(this.value))}};function K(e){return new zu(e)}var Bu=`default`,Vu=Bu,Hu=()=>Vu,Uu=e=>{Vu=e},Wu=(e,t=!1)=>n=>{t&&console.error(`${e} failed due to`,n)},Gu=function(e){return e.SYSTEM=`system`,e.DARK=`dark`,e.LIGHT=`light`,e}({}),Ku=class{constructor(){S(this,`orgResolve`,void 0),S(this,`orgReject`,void 0),S(this,`promise`,void 0),this.promise=new Promise((e,t)=>{this.orgResolve=e,this.orgReject=t})}resolve(e){this.orgResolve(e)}reject(e){this.orgReject(e)}};function qu(e=`mantine-`){return`${e}${Math.random().toString(36).slice(2,11)}`}var q=t(u(),1),Ju=typeof document<`u`?q.useLayoutEffect:q.useEffect;function Yu(e){let[t,n]=(0,q.useState)(`mantine-${(0,q.useId)().replace(/:/g,``)}`),r=(0,q.useRef)(!1);return Ju(()=>{r.current||(r.current=!0,n(qu()))},[]),typeof e==`string`?e:t}var Xu=Symbol.for(`__APOLLO_CONTEXT__`);function Zu(){z(`createContext`in q,37);let e=q.createContext[Xu];return e||(Object.defineProperty(q.createContext,Xu,{value:e=q.createContext({}),enumerable:!1,writable:!1,configurable:!0}),e.displayName=`ApolloContext`),e}function Qu(e){let t=q.useContext(Zu()),n=e||t.client;return z(!!n,28),n}function $u(e,t){let n=q.useRef(void 0);return(!n.current||!V(n.current.deps,t))&&(n.current={value:e(),deps:t}),n.current.value}var ed=Symbol.for(`apollo.skipToken`),td=Symbol.for(`apollo.hook.wrappers`);function nd(e,t,n){let r=[n.queryManager,e.startsWith(`use`)?q.useContext(Zu()):void 0],i=t;for(let t of r){let n=t?.[td]?.[e];n&&(i=n(i))}return i}var rd=ia?q.useLayoutEffect:q.useEffect,id=q.useSyncExternalStore,ad=Bi(()=>navigator.product)==`ReactNative`,od=Bi(()=>navigator.userAgent.indexOf(`jsdom`)>=0)||!1,sd=(ia||ad)&&!od,cd=id||((e,t,n)=>{let r=t(),[{inst:i},a]=q.useState({inst:{value:r,getSnapshot:t}});return sd?q.useLayoutEffect(()=>{Object.assign(i,{value:r,getSnapshot:t}),ld(i)&&a({inst:i})},[e,r,t]):Object.assign(i,{value:r,getSnapshot:t}),q.useEffect(()=>(ld(i)&&a({inst:i}),e(function(){ld(i)&&a({inst:i})})),[e]),r});function ld({value:e,getSnapshot:t}){try{return e!==t()}catch{return!0}}var ud=function(e,t){let n=Qu(t?.client),[r,i]=q.useState(()=>dd(n)),a=q.useRef({result:r,mutationId:0,isMounted:!0,client:n,mutation:e,options:t});rd(()=>{Object.assign(a.current,{client:n,options:t,mutation:e})});let o=q.useCallback((e={})=>{let{options:t,mutation:n}=a.current,r={...t,mutation:n},o=e.client||a.current.client,s=typeof e.context==`function`?e.context(t?.context):e.context;!a.current.result.loading&&a.current.isMounted&&i(a.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:o});let c=++a.current.mutationId,l=co(r,{...e,context:s});return fo(o.mutate(l).then(t=>{let{data:n,error:r}=t,s=e.onError||a.current.options?.onError;if(r&&s&&s(r,l),c===a.current.mutationId){let e={called:!0,loading:!1,data:n,error:r,client:o};a.current.isMounted&&!V(a.current.result,e)&&i(a.current.result=e)}let u=e.onCompleted||a.current.options?.onCompleted;return r||u?.(t.data,l),t},t=>{if(c===a.current.mutationId&&a.current.isMounted){let e={loading:!1,error:t,data:void 0,called:!0,client:o};V(a.current.result,e)||i(a.current.result=e)}let n=e.onError||a.current.options?.onError;throw n&&n(t,l),t}))},[]),s=q.useCallback(()=>{if(a.current.isMounted){let e=dd(a.current.client);Object.assign(a.current,{mutationId:0,result:e}),i(e)}},[]);return q.useEffect(()=>{let e=a.current;return e.isMounted=!0,()=>{e.isMounted=!1}},[]),[o,{reset:s,...r}]};function dd(e){return{data:void 0,error:void 0,called:!1,loading:!1,client:e}}var fd=Symbol(),pd=function(e,...[t]){"use no memo";return nd(`useQuery`,md,Qu(typeof t==`object`?t.client:void 0))(e,t)};function md(e,t={}){let n=Qu(typeof t==`object`?t.client:void 0),{ssr:r}=typeof t==`object`?t:{},i=gd(e,t,n.defaultOptions.watchQuery);function a(t){let r=n.watchQuery(i);return{client:n,query:e,observable:r,resultData:{current:r.getCurrentResult(),previousData:t?.resultData.current.data,variables:r.variables}}}let[o,s]=q.useState(a);(n!==o.client||e!==o.query)&&s(o=a(o));let{observable:c,resultData:l}=o;_d(i,c),yd(l,c,i);let u=vd(c,l,r),d=q.useMemo(()=>({refetch:c.refetch.bind(c),fetchMore:c.fetchMore.bind(c),updateQuery:c.updateQuery.bind(c),startPolling:c.startPolling.bind(c),stopPolling:c.stopPolling.bind(c),subscribeToMore:c.subscribeToMore.bind(c)}),[c]),f=l.previousData;return q.useMemo(()=>{let{partial:e,...t}=u;return{...t,client:n,observable:c,variables:c.variables,previousData:f,...d}},[u,n,c,f,d])}var hd=Symbol();function gd(e,t,n){return $u(()=>{if(t===ed){let t={...co(n,{query:e,fetchPolicy:`standby`}),[Wo]:!0};return t[hd]=!0,t}let r=co(n,{...t,query:e});return t.skip&&(r.initialFetchPolicy=t.initialFetchPolicy||t.fetchPolicy,r.fetchPolicy=`standby`),r},[e,t,n])}function _d(e,t){"use no memo";e.fetchPolicy||(e.fetchPolicy=t.options.initialFetchPolicy)}function vd(e,t,n){"use no memo";let r=e.options.fetchPolicy;return cd(q.useCallback(n=>{let r=e.pipe(ri(Mr)).subscribe(r=>{let i=t.current;V(i,r)&&V(t.variables,e.variables)||(t.variables=e.variables,i.data&&!V(i.data,r.data)&&(t.previousData=i.data),t.current=r,n())});return()=>{setTimeout(()=>r.unsubscribe())}},[e,t]),()=>t.current,()=>r!==`standby`&&n===!1||r===`no-cache`?pd.ssrDisabledResult:t.current)}function yd(e,t,n){"use no memo";if(t[fd]&&!V(t[fd],n)){t[fd][hd]&&!n.initialFetchPolicy&&(n.initialFetchPolicy=n.fetchPolicy),bd(t[fd],n)?t.reobserve(n):t.applyOptions(n);let r=t.getCurrentResult();V(r.data,e.current.data)||(e.previousData=e.current.data||e.previousData),e.current=r,e.variables=t.variables}t[fd]=n}function bd(e,t){return e.query!==t.query||!V(e.variables,t.variables)||e.fetchPolicy!==t.fetchPolicy&&(t.fetchPolicy===`standby`||e.fetchPolicy===`standby`)}pd.ssrDisabledResult=oo({loading:!0,data:void 0,dataState:`empty`,error:void 0,networkStatus:U.loading,partial:!0});function xd(e,...[t={}]){let n=Qu(t.client),{skip:r,fetchPolicy:i,errorPolicy:a,shouldResubscribe:o,context:s,extensions:c,ignoreResults:l}=t,u=$u(()=>t.variables,[t.variables]),d=()=>Sd(n,e,u,i,a,s,c),[f,p]=q.useState(t.skip?null:d),m=q.useRef(d);rd(()=>{m.current=d}),r?f&&p(f=null):(!f||(n!==f.__.client||e!==f.__.query||i!==f.__.fetchPolicy||a!==f.__.errorPolicy||!V(u,f.__.variables))&&(typeof o==`function`?!!o(t):o)!==!1)&&p(f=d());let h=q.useRef(t);q.useEffect(()=>{h.current=t});let g=!r&&!l,_=q.useMemo(()=>({loading:g,error:void 0,data:void 0}),[g]),v=q.useRef(l);rd(()=>{v.current=l});let y=cd(q.useCallback(e=>{if(!f)return()=>{};let t=!1,n=f.__.client,r=f.subscribe({next(r){if(t)return;let i={loading:!1,data:r.data,error:r.error};f.__.setResult(i),v.current||e(),i.error?h.current.onError?.(i.error):h.current.onData&&h.current.onData({client:n,data:i})},complete(){f.__.completed=!0,!t&&h.current.onComplete&&h.current.onComplete()}});return()=>{t=!0,setTimeout(()=>r.unsubscribe())}},[f]),()=>f&&!r&&!l?f.__.result:_,()=>_),b=q.useCallback(()=>{z(!h.current.skip,33),f?.__.completed?p(m.current()):f?.restart()},[f,p,h,m]);return q.useMemo(()=>({...y,restart:b}),[y,b])}function Sd(e,t,n,r,i,a,o){let s={query:t,variables:n,fetchPolicy:r,errorPolicy:i,context:a,extensions:o},c={...s,client:e,completed:!1,result:{loading:!0,data:void 0,error:void 0},setResult(e){c.result=e}};return Object.assign(e.subscribe(s),{__:c})}var Cd=0,J=class e{static subscribe(t){let n=e.subscribedCount++;return this.subscribers.set(n,t),()=>this.unsubscribe(n)}static unsubscribe(e){this.subscribers.delete(e)}static notify(){Cd=(Cd+1)%(2**53-1),this.subscribers.forEach(e=>e())}static useSession(){return(0,q.useSyncExternalStore)(e.subscribe.bind(e),()=>Cd),(0,q.useMemo)(()=>({accessToken:e.accessToken,refreshToken:e.getRefreshToken(),isAuthRequired:e.authRequired,isInitialized:e.authInitialized,isRefreshingToken:e.refreshingToken}),[e.accessToken,e.getRefreshToken(),e.authRequired,e.authInitialized,e.refreshingToken])}static useIsAuthenticated(){let{isAuthRequired:t,accessToken:n,refreshToken:r}=e.useSession();return!t||t&&(!!n||!!r)}static isAuthInitialized(){return e.authInitialized}static isAuthRequired(){return e.authRequired}static isRefreshingToken(){return e.refreshingToken}static getAccessToken(){return e.accessToken}static getRefreshToken(){return b.local.getItemParsed(e.REFRESH_TOKEN_KEY,null)}static getTokens(){return{accessToken:e.getAccessToken(),refreshToken:e.getRefreshToken()}}static setAuthInitialized(t){e.authInitialized=t,e.notify()}static setAuthRequired(t){e.authRequired=t,e.notify()}static setIsRefreshingToken(t){e.refreshingToken=t,e.notify()}static setAccessToken(t){e.accessToken=t,e.notify()}static setRefreshToken(t){b.local.setItem(e.REFRESH_TOKEN_KEY,t),e.notify()}static setTokens(t,n){e.setAccessToken(t),e.setRefreshToken(n)}static removeAccessToken(){e.accessToken=null,e.notify()}static removeRefreshToken(){b.local.setItem(e.REFRESH_TOKEN_KEY,void 0),e.notify()}static removeTokens(){e.removeAccessToken(),e.removeRefreshToken()}static shouldQueueRequests(){let t=e.isAuthRequired()===!0&&e.getAccessToken()===null;return!e.isAuthInitialized()||e.isRefreshingToken()||t}};S(J,`REFRESH_TOKEN_KEY`,`auth-refresh-token`),S(J,`subscribedCount`,0),S(J,`subscribers`,new Map),S(J,`accessToken`,null),S(J,`authInitialized`,!1),S(J,`authRequired`,null),S(J,`refreshingToken`,!1);var wd=t(C(),1),Td=class e{constructor(t){S(this,`handleRefreshToken`,void 0),S(this,`requestQueue`,[]),this.handleRefreshToken=t;let n=b.local.getItemParsed(e.RATE_LIMIT_STORAGE_KEY,{});e.rateLimitState=new Map(Object.entries(n))}reset(){e.activeTokenRefreshPromise=null,this.clearQueue(Error(`Client reset`))}static setTokenRefreshCompleteCallback(t){e.onTokenRefreshComplete=t}static async refreshAccessToken(t){let n=J.getRefreshToken();if(J.isAuthInitialized()||(J.setAuthInitialized(!0),J.setAuthRequired(!0)),!n)throw Error(`No refresh token found`);if(this.activeTokenRefreshPromise)return this.activeTokenRefreshPromise;J.setIsRefreshingToken(!0);let r=t(n).response;this.activeTokenRefreshPromise=r.then(e=>e.data);try{let{data:t}=await r;if(!t)throw Error(`No refreshed access token returned`);return J.setAccessToken(t.refreshToken.accessToken),e.onTokenRefreshComplete?.(),t}catch(e){throw J.removeTokens(),e}finally{this.activeTokenRefreshPromise=null,J.setIsRefreshingToken(!1)}}static getBaseUrl(){let{hostname:t,port:n,protocol:r}=window.location,i=`${r}//${t}${n.length?`:${n}`:``}`,a=b.local.getItemParsed(e.BASE_URL_KEY,i);return x.getApiBaseUrl(a)}getBaseUrl(){return e.getBaseUrl()}shouldQueueRequest(e){return J.shouldQueueRequests()}enqueueRequest(e,t){if(!this.shouldQueueRequest(t))return e();let n=new Ku,r=n.resolve.bind(n),i=n.reject.bind(n);return this.requestQueue.push({execute:()=>{e().then(r).catch(i)},resolve:r,reject:i}),n.promise}processQueue(){let e=[...this.requestQueue];this.requestQueue=[],e.forEach(e=>{e.execute()})}clearQueue(e){let t=[...this.requestQueue];this.requestQueue=[],t.forEach(t=>{t.reject(e??Error(`Request queue cleared`))})}static saveRateLimits(){b.local.setItem(e.RATE_LIMIT_STORAGE_KEY,Object.fromEntries([...e.rateLimitState.entries()]))}convertRetryAfter(e){if(e==null)return K(1).minutes.inWholeMilliseconds;let t=parseInt(e,10);if(!Number.isNaN(t))return K(t).seconds.inWholeMilliseconds;let n=new Date(e);return(0,wd.default)(n).diff()}getOriginFromUrl(t){let{origin:n}=new URL(t);return n.startsWith(e.getBaseUrl())?t:n}addRateLimit(t,n){e.rateLimitState.set(this.getOriginFromUrl(t),{timestamp:Date.now(),retryAfter:this.convertRetryAfter(n)}),e.saveRateLimits()}deleteRateLimit(t){e.rateLimitState.delete(t),e.saveRateLimits()}getRateLimitTimeout(t){return e.rateLimitState.get(this.getOriginFromUrl(t))?.retryAfter??0}isRateLimited(t){let n=this.getOriginFromUrl(t),r=e.rateLimitState.get(n);return r?Date.now()>=r.timestamp+r.retryAfter?(this.deleteRateLimit(n),!1):!0:!1}async awaitRateLimit(e){this.isRateLimited(e)&&await new Promise(t=>{setTimeout(t,this.getRateLimitTimeout(e))})}};S(Td,`RATE_LIMIT_STORAGE_KEY`,`RATE_LIMIT_STATE`),S(Td,`BASE_URL_KEY`,`serverBaseURL`),S(Td,`activeTokenRefreshPromise`,null),S(Td,`onTokenRefreshComplete`,null),S(Td,`rateLimitState`,new Map);var Ed=class extends Td{constructor(e){super(e),S(this,`client`,void 0),S(this,`config`,{credentials:`include`}),S(this,`fetcher`,async(e,{data:t,httpMethod:n=`GET`,config:r,checkResponseIsJson:i=!0}={})=>this.enqueueRequest(async()=>{let a=e.startsWith(`http`)?e:`${this.getBaseUrl()}${e}`,o=J.isAuthRequired(),s=J.getAccessToken();await this.awaitRateLimit(a);let c;switch(n){case`GET`:c=await this.client(a,{...this.config,...r,method:n,headers:{...o&&s?{Authorization:`Bearer ${s}`}:{},...this.config.headers,...r?.headers}});break;case`POST`:case`PATCH`:case`DELETE`:c=await this.client(a,{...o&&s?{Authorization:`Bearer ${s}`}:{},...this.config,...r,method:n,body:JSON.stringify(t)});break;default:throw Error(`Unexpected HttpMethod "${n}"`)}if(c.status===401)return await Td.refreshAccessToken(this.handleRefreshToken),this.fetcher(e,{data:t,httpMethod:n,config:r,checkResponseIsJson:i});if(c.status===429)return this.addRateLimit(a,c.headers.get(`Retry-After`)),this.fetcher(e,{data:t,httpMethod:n,config:r,checkResponseIsJson:i});if(c.status!==200)throw Error(`status ${c.status}: ${c.statusText}`);if(i&&c.headers.get(`content-type`)!==`application/json`)throw Error(`Response is not json`);return c})),this.createClient()}createClient(){this.client=fetch.bind(window)}updateConfig(e){this.config={...this.config,...e}}getClient(){return this.client}get get(){return e=>this.fetcher(e)}get post(){return(e,t)=>this.fetcher(e,{data:t,httpMethod:`POST`})}get put(){return(e,t)=>this.fetcher(e,{data:t,httpMethod:`POST`})}get patch(){return(e,t)=>this.fetcher(e,{data:t,httpMethod:`PATCH`})}get delete(){return e=>this.fetcher(e,{httpMethod:`DELETE`})}},Dd=class extends Is{constructor(e){super((t,n)=>new R(r=>{let i,a,s;try{i=n(t).subscribe({next:i=>{let c=t.client.queryManager.incrementalHandler,l=c.isIncrementalResult(i)?c.extractErrors(i):i.errors;l?s=e({error:new o(i,l),result:i,operation:t,forward:n}):Sl(i)&&(s=e({error:i.extensions[xl],result:i,operation:t,forward:n})),a=s?.subscribe(r),a||r.next(i)},error:i=>{s=e({operation:t,error:Cl(i),forward:n}),a=s?.subscribe(r),a||r.error(i)},complete:()=>{s||r.complete()}})}catch(i){e({error:Cl(i),operation:t,forward:n}),r.error(i)}return()=>{i&&i.unsubscribe(),a&&a.unsubscribe()}}))}},Od=class extends Is{constructor(e){super((t,n)=>{let{...r}=t;return Object.defineProperty(r,"client",{enumerable:!1,value:t.client}),new R(i=>{let a=!1;return Promise.resolve(r).then(n=>e(t.getContext(),n)).then(t.setContext).then(()=>{a||n(t).subscribe(i)}).catch(i.error.bind(i)),()=>{a=!0}})})}};function kd(e){if(typeof e!=`object`||!e)return!1;let t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function Ad(e,t,n=``){if(!arguments.length)throw TypeError("Argument 1 `value` is required.");if(typeof t!=`function`)throw TypeError("Argument 2 `isExtractable` must be a function.");if(typeof n!=`string`)throw TypeError("Argument 3 `path` must be a string.");let r=new Map,i=new Map;function a(e,n,o){if(t(e)){let t=i.get(e);return t?t.push(n):i.set(e,[n]),null}let s=Array.isArray(e)||typeof FileList<`u`&&e instanceof FileList,c=kd(e);if(s||c){let t=r.get(e),i=!t;if(i&&(t=s?[]:e instanceof Object?{}:Object.create(null),r.set(e,t)),!o.has(e)){let r=n?`${n}.`:``,c=new Set(o).add(e);if(s){let n=0;for(let o of e){let e=a(o,r+n++,c);i&&t.push(e)}}else for(let n in e){let o=a(e[n],r+n,c);i&&(t[n]=o)}}return t}return e}return{clone:a(e,n,new Set),files:i}}function jd(e,t,n){`name`in n?e.append(t,n,n.name):e.append(t,n)}function Md(e){return typeof File<`u`&&e instanceof File||typeof Blob<`u`&&e instanceof Blob}var Nd=class extends Is{constructor({uri:e=`/graphql`,useGETForQueries:t,isExtractableFile:n=Md,FormData:r,formDataAppendFile:i=jd,print:a=Yl,fetch:o,fetchOptions:s,credentials:c,headers:l,includeExtensions:u,includeUnusedVariables:d=!1}={}){super(f=>new R(p=>{let m=f.getContext(),{options:h,body:g}=Xl(f,a,Jl,{http:{includeExtensions:u},options:s,credentials:c,headers:l},{http:m.http,options:m.fetchOptions,credentials:m.credentials,headers:m.headers});g.variables&&!d&&(g.variables=Fs(g.variables,f.query));let{clone:_,files:v}=Ad(g,n,``),y=Ql(f,e);if(v.size){h.headers&&delete h.headers[`content-type`];let e=new(r||FormData);e.append(`operations`,JSON.stringify(_));let t={},n=0;v.forEach(e=>{t[++n]=e}),e.append(`map`,JSON.stringify(t)),n=0,v.forEach((t,r)=>{i(e,String(++n),r)}),h.body=e}else if(t&&!f.query.definitions.some(e=>e.kind===`OperationDefinition`&&e.operation===`mutation`)&&(h.method=`GET`),h.method===`GET`){let e=$l(y,g);if(`parseError`in e)throw e.parseError;y=e.newURI}else h.body=JSON.stringify(_);let b;typeof AbortController<`u`&&(b=new AbortController,h.signal&&(h.signal.aborted?b.abort():h.signal.addEventListener(`abort`,()=>{b.abort()},{once:!0})),h.signal=b.signal);let x=o||fetch,S;return x(y,h).then(e=>(f.setContext({response:e}),e)).then(ql(f)).then(e=>{p.next(e),p.complete()}).catch(e=>{S||p.error(e)}),()=>{S=!0,b&&b.abort()}}))}};function Pd(e){return Ma(e)&&`code`in e&&`reason`in e}function Fd(e){return Ma(e)&&e.target?.readyState===WebSocket.CLOSED}var Id=class extends Is{constructor(e){super(),S(this,`client`,void 0),this.client=e}request(e){return new R(t=>{let{query:n,variables:r,operationName:i,extensions:a}=e;return this.client.subscribe({variables:r,operationName:i,extensions:a,query:Vs(n)},{next:t.next.bind(t),complete:t.complete.bind(t),error:e=>{if(e instanceof Error)return t.error(e);let n=Pd(e);return n||Fd(e)?t.error(Error(`Socket closed${n?` with event ${e.code}`:``}${n?` ${e.reason}`:``}`)):t.error(new o({errors:Array.isArray(e)?e:[e]}))}})})}};function Ld(e){return e===null?`null`:Array.isArray(e)?`array`:typeof e}function Rd(e){return Ld(e)===`object`}function zd(e){return Array.isArray(e)&&e.length>0&&e.every(e=>`message`in e)}function Bd(e,t){return e.length<124?e:t}var Vd=(e=>(e[e.InternalServerError=4500]=`InternalServerError`,e[e.InternalClientError=4005]=`InternalClientError`,e[e.BadRequest=4400]=`BadRequest`,e[e.BadResponse=4004]=`BadResponse`,e[e.Unauthorized=4401]=`Unauthorized`,e[e.Forbidden=4403]=`Forbidden`,e[e.SubprotocolNotAcceptable=4406]=`SubprotocolNotAcceptable`,e[e.ConnectionInitialisationTimeout=4408]=`ConnectionInitialisationTimeout`,e[e.ConnectionAcknowledgementTimeout=4504]=`ConnectionAcknowledgementTimeout`,e[e.SubscriberAlreadyExists=4409]=`SubscriberAlreadyExists`,e[e.TooManyInitialisationRequests=4429]=`TooManyInitialisationRequests`,e))(Vd||{}),Hd=(e=>(e.ConnectionInit=`connection_init`,e.ConnectionAck=`connection_ack`,e.Ping=`ping`,e.Pong=`pong`,e.Subscribe=`subscribe`,e.Next=`next`,e.Error=`error`,e.Complete=`complete`,e))(Hd||{});function Ud(e){if(!Rd(e))throw Error(`Message is expected to be an object, but got ${Ld(e)}`);if(!e.type)throw Error(`Message is missing the 'type' property`);if(typeof e.type!=`string`)throw Error(`Message is expects the 'type' property to be a string, but got ${Ld(e.type)}`);switch(e.type){case`connection_init`:case`connection_ack`:case`ping`:case`pong`:if(e.payload!=null&&!Rd(e.payload))throw Error(`"${e.type}" message expects the 'payload' property to be an object or nullish or missing, but got "${e.payload}"`);break;case`subscribe`:if(typeof e.id!=`string`)throw Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Ld(e.id)}`);if(!e.id)throw Error(`"${e.type}" message requires a non-empty 'id' property`);if(!Rd(e.payload))throw Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${Ld(e.payload)}`);if(typeof e.payload.query!=`string`)throw Error(`"${e.type}" message payload expects the 'query' property to be a string, but got ${Ld(e.payload.query)}`);if(e.payload.variables!=null&&!Rd(e.payload.variables))throw Error(`"${e.type}" message payload expects the 'variables' property to be a an object or nullish or missing, but got ${Ld(e.payload.variables)}`);if(e.payload.operationName!=null&&Ld(e.payload.operationName)!==`string`)throw Error(`"${e.type}" message payload expects the 'operationName' property to be a string or nullish or missing, but got ${Ld(e.payload.operationName)}`);if(e.payload.extensions!=null&&!Rd(e.payload.extensions))throw Error(`"${e.type}" message payload expects the 'extensions' property to be a an object or nullish or missing, but got ${Ld(e.payload.extensions)}`);break;case`next`:if(typeof e.id!=`string`)throw Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Ld(e.id)}`);if(!e.id)throw Error(`"${e.type}" message requires a non-empty 'id' property`);if(!Rd(e.payload))throw Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${Ld(e.payload)}`);break;case`error`:if(typeof e.id!=`string`)throw Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Ld(e.id)}`);if(!e.id)throw Error(`"${e.type}" message requires a non-empty 'id' property`);if(!zd(e.payload))throw Error(`"${e.type}" message expects the 'payload' property to be an array of GraphQL errors, but got ${JSON.stringify(e.payload)}`);break;case`complete`:if(typeof e.id!=`string`)throw Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Ld(e.id)}`);if(!e.id)throw Error(`"${e.type}" message requires a non-empty 'id' property`);break;default:throw Error(`Invalid message 'type' property "${e.type}"`)}return e}function Wd(e,t){return Ud(typeof e==`string`?JSON.parse(e,t):e)}function Gd(e,t){return Ud(e),JSON.stringify(e,t)}function Kd(e){let{url:t,connectionParams:n,lazy:r=!0,onNonLazyError:i=console.error,lazyCloseTimeout:a=0,keepAlive:o=0,disablePong:s,connectionAckWaitTimeout:c=0,retryAttempts:l=5,retryWait:u=async function(e){let t=2**e;await new Promise(e=>setTimeout(e,t*1e3+Math.floor(Math.random()*2700+300)))},shouldRetry:d=Jd,on:f,webSocketImpl:p,generateID:m=function(){return`xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g,e=>{let t=Math.random()*16|0;return(e==`x`?t:t&3|8).toString(16)})},jsonMessageReplacer:h,jsonMessageReviver:g}=e,_;if(p){if(!Xd(p))throw Error(`Invalid WebSocket implementation provided`);_=p}else typeof WebSocket<`u`?_=WebSocket:typeof global<`u`?_=global.WebSocket||global.MozWebSocket:typeof window<`u`&&(_=window.WebSocket||window.MozWebSocket);if(!_)throw Error("WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`");let v=_,y=(()=>{let e=(()=>{let e={};return{on(t,n){return e[t]=n,()=>{delete e[t]}},emit(t){`id`in t&&e[t.id]?.(t)}}})(),t={connecting:f?.connecting?[f.connecting]:[],opened:f?.opened?[f.opened]:[],connected:f?.connected?[f.connected]:[],ping:f?.ping?[f.ping]:[],pong:f?.pong?[f.pong]:[],message:f?.message?[e.emit,f.message]:[e.emit],closed:f?.closed?[f.closed]:[],error:f?.error?[f.error]:[]};return{onMessage:e.on,on(e,n){let r=t[e];return r.push(n),()=>{let e=r.indexOf(n);e>-1&&r.splice(e,1)}},emit(e,...n){for(let r of[...t[e]])r(...n)}}})();function b(e){let t=[y.on(`error`,n=>{t.forEach(e=>e()),e(n)}),y.on(`closed`,n=>{t.forEach(e=>e()),e(n)})]}let x,S=0,C,w=!1,T=0,E=!1;async function D(){clearTimeout(C);let[e,r]=await(x??(x=new Promise((e,r)=>(async()=>{if(w){if(await u(T),!S)return x=void 0,r({code:1e3,reason:`All Subscriptions Gone`});T++}y.emit(`connecting`,w);let i=new v(typeof t==`function`?await t():t,`graphql-transport-ws`),a,l;function d(){isFinite(o)&&o>0&&(clearTimeout(l),l=setTimeout(()=>{i.readyState===v.OPEN&&(i.send(Gd({type:Hd.Ping})),y.emit(`ping`,!1,void 0))},o))}b(e=>{x=void 0,clearTimeout(a),clearTimeout(l),r(e),e instanceof qd&&(i.close(4499,`Terminated`),i.onerror=null,i.onclose=null)}),i.onerror=e=>y.emit(`error`,e),i.onclose=e=>y.emit(`closed`,e),i.onopen=async()=>{try{y.emit(`opened`,i);let e=typeof n==`function`?await n():n;if(i.readyState!==v.OPEN)return;i.send(Gd(e?{type:Hd.ConnectionInit,payload:e}:{type:Hd.ConnectionInit},h)),isFinite(c)&&c>0&&(a=setTimeout(()=>{i.close(Vd.ConnectionAcknowledgementTimeout,`Connection acknowledgement timeout`)},c)),d()}catch(e){y.emit(`error`,e),i.close(Vd.InternalClientError,Bd(e instanceof Error?e.message:String(e),`Internal client error`))}};let f=!1;i.onmessage=({data:t})=>{try{let n=Wd(t,g);if(y.emit(`message`,n),n.type===`ping`||n.type===`pong`){y.emit(n.type,!0,n.payload),n.type===`pong`?d():s||(i.send(Gd(n.payload?{type:Hd.Pong,payload:n.payload}:{type:Hd.Pong})),y.emit(`pong`,!1,n.payload));return}if(f)return;if(n.type!==Hd.ConnectionAck)throw Error(`First message cannot be of type ${n.type}`);clearTimeout(a),f=!0,y.emit(`connected`,i,n.payload,w),w=!1,T=0,e([i,new Promise((e,t)=>b(t))])}catch(e){i.onmessage=null,y.emit(`error`,e),i.close(Vd.BadResponse,Bd(e instanceof Error?e.message:String(e),`Bad response`))}}})())));e.readyState===v.CLOSING&&await r;let i=()=>{},l=new Promise(e=>i=e);return[e,i,Promise.race([l.then(()=>{if(!S){let t=()=>e.close(1e3,`Normal Closure`);isFinite(a)&&a>0?C=setTimeout(()=>{e.readyState===v.OPEN&&t()},a):t()}}),r])]}function ee(e){if(Jd(e)&&(Yd(e.code)||[Vd.InternalServerError,Vd.InternalClientError,Vd.BadRequest,Vd.BadResponse,Vd.Unauthorized,Vd.SubprotocolNotAcceptable,Vd.SubscriberAlreadyExists,Vd.TooManyInitialisationRequests].includes(e.code)))throw e;if(E)return!1;if(Jd(e)&&e.code===1e3)return S>0;if(!l||T>=l||!d(e))throw e;return w=!0}r||(async()=>{for(S++;;)try{let[,,e]=await D();await e}catch(e){try{if(!ee(e))return}catch(e){return i?.(e)}}})();function O(e,t){let n=m(e),r=!1,i=!1,a=()=>{S--,r=!0};return(async()=>{for(S++;;)try{let[o,s,c]=await D();if(r)return s();let l=y.onMessage(n,e=>{switch(e.type){case Hd.Next:t.next(e.payload);return;case Hd.Error:i=!0,r=!0,t.error(e.payload),a();return;case Hd.Complete:r=!0,a();return}});o.send(Gd({id:n,type:Hd.Subscribe,payload:e},h)),a=()=>{!r&&o.readyState===v.OPEN&&o.send(Gd({id:n,type:Hd.Complete},h)),S--,r=!0,s()},await c.finally(l);return}catch(e){if(!ee(e))return}})().then(()=>{i||t.complete()}).catch(e=>{t.error(e)}),()=>{r||a()}}return{on:y.on,subscribe:O,iterate(e){let t=[],n={done:!1,error:null,resolve:()=>{}},r=O(e,{next(e){t.push(e),n.resolve()},error(e){n.done=!0,n.error=e,n.resolve()},complete(){n.done=!0,n.resolve()}}),i=async function*(){for(;;){for(t.length||await new Promise(e=>n.resolve=e);t.length;)yield t.shift();if(n.error)throw n.error;if(n.done)return}}();return i.throw=async e=>(n.done||(n.done=!0,n.error=e,n.resolve()),{done:!0,value:void 0}),i.return=async()=>(r(),{done:!0,value:void 0}),i},async dispose(){if(E=!0,x){let[e]=await x;e.close(1e3,`Normal Closure`)}},terminate(){x&&y.emit(`closed`,new qd)}}}var qd=class extends Error{constructor(...e){super(...e),S(this,`name`,`TerminatedCloseEvent`),S(this,`message`,`4499: Terminated`),S(this,`code`,4499),S(this,`reason`,`Terminated`),S(this,`wasClean`,!1)}};function Jd(e){return Rd(e)&&`code`in e&&`reason`in e}function Yd(e){return![1e3,1001,1006,1005,1012,1013,1014].includes(e)&&e>=1e3&&e<=1999}function Xd(e){return typeof e==`function`&&`constructor`in e&&`CLOSED`in e&&`CLOSING`in e&&`CONNECTING`in e&&`OPEN`in e}var Zd=class extends Is{constructor(e={}){return super((t,n)=>{let{except:r}=e,{query:i,variables:a}=t;return a&&(t.variables=r?this.maybeStripTypenameUsingConfig(i,a,r):Ws(a)),n(t)}),S(this,`getVariableDefinitions`,js(e=>{let t={};return kt(e,{VariableDefinition(e){t[e.variable.name.value]=Qd(e.type)}}),t},{max:aa[`removeTypenameFromVariables.getVariableDefinitions`]||2e3,cache:xa,makeCacheKey:Ms(this)})),Object.assign(this,{})}maybeStripTypenameUsingConfig(e,t,n){let r=this.getVariableDefinitions(e);return Object.fromEntries(Object.entries(t).map(e=>{let[t,i]=e,a=n[r[t]];return e[1]=a?this.maybeStripTypename(i,a):Ws(i),e}))}maybeStripTypename(e,t){if(t===`__KEEP`)return e;if(Array.isArray(e))return e.map(e=>this.maybeStripTypename(e,t));if(io(e)){let n={};return Object.keys(e).forEach(r=>{let i=e[r];if(r===`__typename`)return;let a=t[r];n[r]=a?this.maybeStripTypename(i,a):Ws(i)}),n}return e}};function Qd(e){switch(e.kind){case Ue:return Qd(e.type);case He:return Qd(e.type);case Ve:return e.name.value}}var $d={MangaType:{fields:{trackRecords:{merge(e,t){let n=t.nodes??e?.nodes;return{...e,...t,totalCount:n?.length??e?.totalCount??t.totalCount,nodes:n}}}}},GlobalMetaType:{keyFields:[`key`]},MangaMetaType:{keyFields:[`mangaId`,`key`]},ChapterMetaType:{keyFields:[`chapterId`,`key`]},CategoryMetaType:{keyFields:[`categoryId`,`key`]},SourceMetaType:{keyFields:[`sourceId`,`key`]},ExtensionType:{keyFields:[`pkgName`]},ExtensionStoreType:{keyFields:[`indexUrl`]},AboutServerPayload:{keyFields:[]},AboutWebUI:{keyFields:[]},WebUIUpdateInfo:{keyFields:[]},WebUIUpdateCheck:{keyFields:[]},SettingsType:{keyFields:[]},DownloadStatus:{keyFields:[],fields:{queue:{merge(e,t){return t}}}},DownloadType:{keyFields:[`chapter`]},CategoryUpdateType:{keyFields:[`category`]},MangaUpdateType:{keyFields:[`manga`]},UpdaterJobsInfoType:{keyFields:[]},WebUIUpdateStatus:{keyFields:[]},UpdateStatus:{keyFields:[]},KoSyncStatusPayload:{keyFields:[]},SyncStatus:{keyFields:[]},Query:{fields:{manga(e,{args:t,toReference:n}){return n({__typename:`MangaType`,id:t?.id})},chapter(e,{args:t,toReference:n}){return n({__typename:`ChapterType`,id:t?.id})},category(e,{args:t,toReference:n}){return n({__typename:`CategoryType`,id:t?.id})},source(e,{args:t,toReference:n}){return n({__typename:`SourceType`,id:t?.id})},extension(e,{args:t,toReference:n}){return n({__typename:`ExtensionType`,pkgName:t?.pkgName})},extensionStore(e,{args:t,toReference:n}){return n({__typename:`ExtensionStoreType`,indexUrl:t?.indexUrl})},meta(e,{args:t,toReference:n}){return n({__typename:`GlobalMetaType`,key:t?.key})},downloadStatus:{read(e,{toReference:t}){return t({__typename:`DownloadStatus`,key:{}})},merge(e,t){return t}},getWebUIUpdateStatus(e,{toReference:t}){return t({__typename:`WebUIUpdateStatus`,key:{}})},updateStatus(e,{toReference:t}){return t({__typename:`UpdateStatus`,key:{}})},lastSyncStatus(e,{toReference:t}){return t({__typename:`SyncStatus`,key:{}})},tracker(e,{toReference:t}){return t({__typename:`TrackerType`,key:{}})},trackRecord(e,{toReference:t}){return t({__typename:`TrackRecordType`,key:{}})},mangas:{keyArgs:[`condition`,`filter`,`orderBy`,`orderByType`,`order`],merge(e,t,{mergeObjects:n}){return n(e,t)}},chapters:{keyArgs:[`condition`,`filter`,`orderBy`,`orderByType`,`order`],merge(e,t){if(e==null)return t;let n=!t.pageInfo.hasPreviousPage,r=e.nodes.length>t.nodes.length;return n&&!r?t:n&&r?{...e,pageInfo:{...e.pageInfo,startCursor:t.pageInfo.startCursor},nodes:[...t.nodes,...e.nodes.slice(t.nodes.length)]}:{...e,pageInfo:{...e.pageInfo,endCursor:t.pageInfo.endCursor,hasNextPage:t.pageInfo.hasNextPage},nodes:[...e.nodes,...t.nodes]}}},settings:{merge(e,t){return{...e??{},...t??{}}}}}}},ef=class extends Td{constructor(e){super(e),S(this,`fetcher`,null),S(this,`client`,void 0),S(this,`wsClient`,void 0),S(this,`wsClientAliveCheckInterval`,void 0),S(this,`activeConnectionSubscriptions`,new Map),this.createClient()}getBaseUrl(){return`${super.getBaseUrl()}/api/graphql`}reset(){super.reset(),this.client.clearStore(),this.client.stop(),this.resetWsClient(!1),this.createClient()}resetWsClient(e){this.wsClient.dispose(),this.wsClient.terminate(),e&&(this.createWSClient(!1),this.client.setLink(this.createLink()),this.restartAllSubscriptions())}restartAllSubscriptions(){this.activeConnectionSubscriptions.forEach(e=>e())}shouldQueueRequest(e){return![`GET_ABOUT`,`USER_LOGIN`,`USER_REFRESH`].includes(e)&&super.shouldQueueRequest()}createAuthGuardLink(){return new Is((e,t)=>{let{operationName:n}=e;return this.shouldQueueRequest(n)?fi(this.enqueueRequest(()=>bi(t(e)),n)):t(e)})}getOriginFromUrl(e){return e}getRateLimitOrigin(e){return`${e.operationName}::${JSON.stringify(e.variables)}`}isRateLimitError(e){return o.is(e)?e.errors.some(e=>e.message.toLowerCase().includes(`http 429`)||e.message.toLowerCase().includes(`http error 429`)||e.message.toLowerCase().includes(`too many requests`)):yl.is(e)?e.statusCode===429:!1}isAuthError(e){return e.some(e=>e.message.includes(`suwayomi.tachidesk.server.user.UnauthorizedException`))}createErrorLink(){return new Dd(({error:e,operation:t,forward:n})=>{if(this.isRateLimitError(e))return this.addRateLimit(this.getRateLimitOrigin(t),t.getContext()?.headers?.get?.(`Retry-After`)),fi(this.awaitRateLimit(this.getRateLimitOrigin(t))).pipe(Ri(()=>n(t)));if(o.is(e)&&this.isAuthError(e.errors))return fi(Td.refreshAccessToken(this.handleRefreshToken)).pipe(ki(Boolean),Si(e=>(this.restartAllSubscriptions(),e)),Ri(()=>n(t)))})}createAuthLink(){return new Od(({headers:e})=>{let t=J.isAuthRequired(),n=J.getAccessToken();return{credentials:`include`,headers:{...e,...t&&n?{Authorization:`Bearer ${n}`}:{}}}})}createUploadLink(){return new Nd({uri:()=>this.getBaseUrl()})}createWSLink(){return new Id(this.wsClient)}createLink(){let e=new Zd;return Is.split(({query:e})=>{let t=Ha(e);return t.kind===`OperationDefinition`&&t.operation===`subscription`},this.createWSLink(),Is.from([this.createAuthGuardLink(),this.createErrorLink(),this.createAuthLink(),e,this.createUploadLink()]))}createWSClient(e=!0){let t=K(20).seconds.inWholeMilliseconds;this.wsClient=Kd({lazy:e,url:()=>this.getBaseUrl().replaceAll(/http(|s)/g,`ws`),keepAlive:t,retryAttempts:2**53-1,shouldRetry:()=>!0,retryWait:async e=>{let n=Math.min(K(1).seconds.inWholeMilliseconds*2**e,t);return new Promise(e=>{setTimeout(e,n)})},connectionParams:()=>{let e=J.isAuthRequired(),t=J.getAccessToken();return{Authorization:e&&t?t:void 0}}});let n=!1,r=Date.now();this.wsClient.on(`message`,async e=>{if(r=Date.now(),n=!1,e.type===`error`&&!J.isRefreshingToken()&&this.isAuthError(e.payload))try{await Td.refreshAccessToken(this.handleRefreshToken),this.resetWsClient(!0)}catch{}});let i=t+K(30).seconds.inWholeMilliseconds;clearInterval(this.wsClientAliveCheckInterval),this.wsClientAliveCheckInterval=setInterval(()=>{if(Date.now()-r>i*1.1){if(!n){n=!0,this.wsClient.terminate();return}clearInterval(this.wsClientAliveCheckInterval),this.resetWsClient(!0)}},i)}createClient(e){this.createWSClient(e),this.client=new Hl({cache:new fl({typePolicies:$d}),devtools:{enabled:!0},link:this.createLink()})}updateConfig(){}useRestartSubscription(e){let t=Yu();this.activeConnectionSubscriptions.set(t,()=>{e()}),(0,q.useEffect)(()=>()=>{this.activeConnectionSubscriptions.delete(t)},[t])}},tf=function(e){return e.BasicAuth=`BASIC_AUTH`,e.None=`NONE`,e.SimpleLogin=`SIMPLE_LOGIN`,e.UiLogin=`UI_LOGIN`,e}({}),nf=function(e){return e.Failure=`FAILURE`,e.Idle=`IDLE`,e.RestoringCategories=`RESTORING_CATEGORIES`,e.RestoringManga=`RESTORING_MANGA`,e.RestoringMeta=`RESTORING_META`,e.RestoringSettings=`RESTORING_SETTINGS`,e.Success=`SUCCESS`,e}({}),rf=function(e){return e.Id=`ID`,e.Name=`NAME`,e.Order=`ORDER`,e}({}),af=function(e){return e.Compatible=`COMPATIBLE`,e.Legacy=`LEGACY`,e.Modern=`MODERN`,e}({}),of=function(e){return e.ChapterNumber=`CHAPTER_NUMBER`,e.FetchedAt=`FETCHED_AT`,e.Id=`ID`,e.LastReadAt=`LAST_READ_AT`,e.Name=`NAME`,e.SourceOrder=`SOURCE_ORDER`,e.UploadDate=`UPLOAD_DATE`,e}({}),sf=function(e){return e.Mixed=`MIXED`,e.Nsfw=`NSFW`,e.Safe=`SAFE`,e}({}),cf=function(e){return e.H2=`H2`,e.Postgresql=`POSTGRESQL`,e}({}),lf=function(e){return e.Downloading=`DOWNLOADING`,e.Error=`ERROR`,e.Finished=`FINISHED`,e.Queued=`QUEUED`,e}({}),uf=function(e){return e.Dequeued=`DEQUEUED`,e.Error=`ERROR`,e.Finished=`FINISHED`,e.Paused=`PAUSED`,e.Position=`POSITION`,e.Progress=`PROGRESS`,e.Queued=`QUEUED`,e.Stopped=`STOPPED`,e}({}),df=function(e){return e.Started=`STARTED`,e.Stopped=`STOPPED`,e}({}),ff=function(e){return e.Latest=`LATEST`,e.Popular=`POPULAR`,e.Search=`SEARCH`,e}({}),pf=function(e){return e.Exclude=`EXCLUDE`,e.Include=`INCLUDE`,e.Unset=`UNSET`,e}({}),mf=function(e){return e.Binary=`BINARY`,e.Filename=`FILENAME`,e}({}),hf=function(e){return e.Disabled=`DISABLED`,e.KeepLocal=`KEEP_LOCAL`,e.KeepRemote=`KEEP_REMOTE`,e.Prompt=`PROMPT`,e}({}),gf=function(e){return e.Complete=`COMPLETE`,e.Failed=`FAILED`,e.Pending=`PENDING`,e.Running=`RUNNING`,e.Skipped=`SKIPPED`,e}({}),_f=function(e){return e.Id=`ID`,e.InLibraryAt=`IN_LIBRARY_AT`,e.LastFetchedAt=`LAST_FETCHED_AT`,e.Title=`TITLE`,e}({}),vf=function(e){return e.Cancelled=`CANCELLED`,e.Completed=`COMPLETED`,e.Licensed=`LICENSED`,e.Ongoing=`ONGOING`,e.OnHiatus=`ON_HIATUS`,e.PublishingFinished=`PUBLISHING_FINISHED`,e.Unknown=`UNKNOWN`,e}({}),yf=function(e){return e.Asc=`ASC`,e.AscNullsFirst=`ASC_NULLS_FIRST`,e.AscNullsLast=`ASC_NULLS_LAST`,e.Desc=`DESC`,e.DescNullsFirst=`DESC_NULLS_FIRST`,e.DescNullsLast=`DESC_NULLS_LAST`,e}({}),bf=function(e){return e.Success=`SUCCESS`,e.SyncDisabled=`SYNC_DISABLED`,e.SyncInProgress=`SYNC_IN_PROGRESS`,e}({}),xf=function(e){return e.CreatingBackup=`CREATING_BACKUP`,e.Downloading=`DOWNLOADING`,e.Error=`ERROR`,e.Merging=`MERGING`,e.Restoring=`RESTORING`,e.Started=`STARTED`,e.Success=`SUCCESS`,e.Uploading=`UPLOADING`,e}({}),Sf=function(e){return e.Exclude=`EXCLUDE`,e.Ignore=`IGNORE`,e.Include=`INCLUDE`,e}({}),Cf=function(e){return e.Downloading=`DOWNLOADING`,e.Error=`ERROR`,e.Finished=`FINISHED`,e.Idle=`IDLE`,e}({}),wf=function(e){return e.Bundled=`BUNDLED`,e.Preview=`PREVIEW`,e.Stable=`STABLE`,e}({}),Tf=function(e){return e.Custom=`CUSTOM`,e.Vui=`VUI`,e.Webui=`WEBUI`,e}({}),Ef=function(e){return e.Browser=`BROWSER`,e.Electron=`ELECTRON`,e}({}),Df=W`
    fragment PAGE_INFO on PageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
    }
`,Of=W`
    fragment GLOBAL_METADATA on GlobalMetaType {
        key
        value
    }
`;W`
    ${Of}
    query GET_GLOBAL_METADATA($key: String!) {
        meta(key: $key) {
            ...GLOBAL_METADATA
        }
    }
`;var kf=W`
    ${Of}
    ${Df}
    query GET_GLOBAL_METADATAS(
        $after: Cursor
        $before: Cursor
        $condition: MetaConditionInput
        $filter: MetaFilterInput
        $first: Int
        $last: Int
        $offset: Int
        $order: [MetaOrderInput!]
    ) {
        metas(
            after: $after
            before: $before
            condition: $condition
            filter: $filter
            first: $first
            last: $last
            offset: $offset
            order: $order
        ) {
            nodes {
                ...GLOBAL_METADATA
            }
            pageInfo {
                ...PAGE_INFO
            }
            totalCount
        }
    }
`,Af=W`
    ${Of}
    mutation UPDATE_GLOBAL_METADATA(
        $preUpdateDeleteInput: DeleteGlobalMetasInput!
        $hasPreUpdateDeletions: Boolean!
        $updateInput: SetGlobalMetasInput!
        $hasUpdates: Boolean!
        $postUpdateDeleteInput: DeleteGlobalMetasInput!
        $hasPostUpdateDeletions: Boolean!
        $migrateInput: SetGlobalMetasInput!
        $isMigration: Boolean!
    ) {
        preUpdateDeletedMeta: deleteGlobalMetas(input: $preUpdateDeleteInput) @include(if: $hasPreUpdateDeletions) {
            metas {
                ...GLOBAL_METADATA
            }
        }
        updatedMeta: setGlobalMetas(input: $updateInput) @include(if: $hasUpdates) {
            metas {
                ...GLOBAL_METADATA
            }
        }
        postUpdateDeletedMeta: deleteGlobalMetas(input: $postUpdateDeleteInput) @include(if: $hasPostUpdateDeletions) {
            metas {
                ...GLOBAL_METADATA
            }
        }
        migrationMeta: setGlobalMetas(input: $migrateInput) @include(if: $isMigration) {
            metas {
                ...GLOBAL_METADATA
            }
        }
    }
`,jf=W`
    fragment ABOUT_WEBUI on AboutWebUI {
        channel
        tag
        updateTimestamp
    }
`,Mf=W`
    fragment WEBUI_UPDATE_CHECK on WebUIUpdateCheck {
        channel
        tag
        updateAvailable
    }
`,Nf=W`
    fragment WEBUI_UPDATE_INFO on WebUIUpdateInfo {
        channel
        tag
    }
`,Pf=W`
    ${Nf}
    fragment WEBUI_UPDATE_STATUS on WebUIUpdateStatus {
        info {
            ...WEBUI_UPDATE_INFO
        }
        progress
        state
    }
`,Ff=W`
    ${jf}
    query GET_ABOUT {
        aboutServer {
            buildTime
            buildType
            discord
            github
            name
            version
            platformInfo {
                os {
                    name
                    build
                    version
                }
                arch
                headless
                jvm {
                    javaVersion
                    vmName
                    vmVendor
                    vmVersion
                }
            }
        }
        aboutWebUI {
            ...ABOUT_WEBUI
        }
    }
`,If=W`
    query CHECK_FOR_SERVER_UPDATES {
        checkForServerUpdates {
            channel
            tag
            url
        }
    }
`,Lf=W`
    ${Mf}
    query CHECK_FOR_WEBUI_UPDATE {
        checkForWebUIUpdate {
            ...WEBUI_UPDATE_CHECK
        }
    }
`,Rf=W`
    ${Pf}
    query GET_WEBUI_UPDATE_STATUS {
        getWebUIUpdateStatus {
            ...WEBUI_UPDATE_STATUS
        }
    }
`,zf=W`
    fragment EXTENSION_LIST_FIELDS on ExtensionType {
        pkgName
        name
        lang
        versionCodeLong
        versionName
        iconUrl
        storeIndexUrl
        contentWarning
        isInstalled
        isObsolete
        hasUpdate
        extensionLib
        extensionStore {
            indexUrl
            name
        }
    }
`,Bf=W`
    ${zf}

    query GET_EXTENSION($pkgName: String!) {
        extension(pkgName: $pkgName) {
            ...EXTENSION_LIST_FIELDS
        }
    }
`,Vf=W`
    ${zf}
    ${Df}

    query GET_EXTENSIONS(
        $after: Cursor
        $before: Cursor
        $condition: ExtensionConditionInput
        $filter: ExtensionFilterInput
        $first: Int
        $last: Int
        $offset: Int
        $order: [ExtensionOrderInput!]
    ) {
        extensions(
            after: $after
            before: $before
            condition: $condition
            filter: $filter
            first: $first
            last: $last
            offset: $offset
            order: $order
        ) {
            nodes {
                ...EXTENSION_LIST_FIELDS
            }
            pageInfo {
                ...PAGE_INFO
            }
            totalCount
        }
    }
`,Hf=W`
    fragment EXTENSION_STORE_FIELDS on ExtensionStoreType {
        badgeLabel
        contactDiscord
        contactWebsite
        extensionListUrl
        indexUrl
        isLegacy
        name
        signingKey
        extensions {
            totalCount
        }
    }
`,Uf=W`
    ${zf}
    ${Hf}

    mutation GET_EXTENSIONS_FETCH($input: FetchExtensionsInput = {}) {
        fetchExtensions(input: $input) {
            extensions {
                ...EXTENSION_LIST_FIELDS
            }
            extensionStores {
                ...EXTENSION_STORE_FIELDS
            }
        }
    }
`,Wf=W`
    ${zf}

    mutation UPDATE_EXTENSION($input: UpdateExtensionInput!) {
        updateExtension(input: $input) {
            extension {
                ...EXTENSION_LIST_FIELDS
            }
        }
    }
`,Gf=W`
    ${zf}

    mutation UPDATE_EXTENSIONS($input: UpdateExtensionsInput!) {
        updateExtensions(input: $input) {
            extensions {
                ...EXTENSION_LIST_FIELDS
            }
        }
    }
`,Kf=W`
    ${zf}

    mutation INSTALL_EXTERNAL_EXTENSION($file: Upload!) {
        installExternalExtension(input: { extensionFile: $file }) {
            extension {
                ...EXTENSION_LIST_FIELDS
            }
        }
    }
`,qf=W`
    fragment SOURCE_META_FIELDS on SourceMetaType {
        sourceId
        key
        value
    }
`,Jf=W`
    fragment SOURCE_BASE_FIELDS on SourceType {
        id
        name
        displayName
        lang
        iconUrl
    }
`,Yf=W`
    ${Jf}
    ${qf}

    fragment SOURCE_LIST_FIELDS on SourceType {
        ...SOURCE_BASE_FIELDS

        lang
        iconUrl
        contentWarning
        isConfigurable
        supportsLatest

        meta {
            ...SOURCE_META_FIELDS
        }

        extension {
            pkgName
            storeIndexUrl
            extensionStore {
                indexUrl
                name
            }
        }
    }
`,Xf=W`
    ${Jf}
    ${qf}

    fragment CHECKBOX_FIELDS on CheckBoxFilter {
        type: __typename
        CheckBoxFilterDefault: default
        name
    }

    fragment HEADER_FIELDS on HeaderFilter {
        type: __typename
        name
    }

    fragment SELECT_FIELDS on SelectFilter {
        type: __typename
        SelectFilterDefault: default
        name
        values
    }

    fragment TRI_STATE_FIELDS on TriStateFilter {
        type: __typename
        TriStateFilterDefault: default
        name
    }

    fragment TEXT_FIELDS on TextFilter {
        type: __typename
        TextFilterDefault: default
        name
    }

    fragment SORT_FIELDS on SortFilter {
        type: __typename
        SortFilterDefault: default {
            ascending
            index
        }
        name
        values
    }

    fragment SEPARATOR_FIELDS on SeparatorFilter {
        type: __typename
        name
    }

    fragment SOURCE_BROWSE_FIELDS on SourceType {
        ...SOURCE_BASE_FIELDS

        homeUrl

        isConfigurable
        supportsLatest

        meta {
            ...SOURCE_META_FIELDS
        }

        filters {
            ... on CheckBoxFilter {
                ...CHECKBOX_FIELDS
            }
            ... on HeaderFilter {
                ...HEADER_FIELDS
            }
            ... on SelectFilter {
                ...SELECT_FIELDS
            }
            ... on TriStateFilter {
                ...TRI_STATE_FIELDS
            }
            ... on TextFilter {
                ...TEXT_FIELDS
            }
            ... on SortFilter {
                ...SORT_FIELDS
            }
            ... on SeparatorFilter {
                ...SEPARATOR_FIELDS
            }
            ... on GroupFilter {
                type: __typename
                name
                filters {
                    ... on CheckBoxFilter {
                        ...CHECKBOX_FIELDS
                    }
                    ... on HeaderFilter {
                        ...HEADER_FIELDS
                    }
                    ... on SelectFilter {
                        ...SELECT_FIELDS
                    }
                    ... on TriStateFilter {
                        ...TRI_STATE_FIELDS
                    }
                    ... on TextFilter {
                        ...TEXT_FIELDS
                    }
                    ... on SortFilter {
                        ...SORT_FIELDS
                    }
                    ... on SeparatorFilter {
                        ...SEPARATOR_FIELDS
                    }
                    ... on GroupFilter {
                        type: __typename
                        name
                        filters {
                            ... on CheckBoxFilter {
                                ...CHECKBOX_FIELDS
                            }
                            ... on HeaderFilter {
                                ...HEADER_FIELDS
                            }
                            ... on SelectFilter {
                                ...SELECT_FIELDS
                            }
                            ... on TriStateFilter {
                                ...TRI_STATE_FIELDS
                            }
                            ... on TextFilter {
                                ...TEXT_FIELDS
                            }
                            ... on SortFilter {
                                ...SORT_FIELDS
                            }
                            ... on SeparatorFilter {
                                ...SEPARATOR_FIELDS
                            }
                            ... on GroupFilter {
                                type: __typename
                                name
                                filters {
                                    ... on CheckBoxFilter {
                                        ...CHECKBOX_FIELDS
                                    }
                                    ... on HeaderFilter {
                                        ...HEADER_FIELDS
                                    }
                                    ... on SelectFilter {
                                        ...SELECT_FIELDS
                                    }
                                    ... on TriStateFilter {
                                        ...TRI_STATE_FIELDS
                                    }
                                    ... on TextFilter {
                                        ...TEXT_FIELDS
                                    }
                                    ... on SortFilter {
                                        ...SORT_FIELDS
                                    }
                                    ... on SeparatorFilter {
                                        ...SEPARATOR_FIELDS
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`,Zf=W`
    ${Jf}

    fragment SOURCE_SETTING_FIELDS on SourceType {
        ...SOURCE_BASE_FIELDS

        preferences {
            ... on CheckBoxPreference {
                type: __typename
                CheckBoxCheckBoxCurrentValue: currentValue
                summary
                CheckBoxDefault: default
                key
                CheckBoxTitle: title
            }
            ... on EditTextPreference {
                type: __typename
                EditTextPreferenceCurrentValue: currentValue
                EditTextPreferenceDefault: default
                EditTextPreferenceTitle: title
                text
                summary
                key
                dialogTitle
                dialogMessage
            }
            ... on SwitchPreference {
                type: __typename
                SwitchPreferenceCurrentValue: currentValue
                summary
                key
                SwitchPreferenceDefault: default
                SwitchPreferenceTitle: title
            }
            ... on MultiSelectListPreference {
                type: __typename
                dialogMessage
                dialogTitle
                MultiSelectListPreferenceTitle: title
                summary
                key
                entryValues
                entries
                MultiSelectListPreferenceDefault: default
                MultiSelectListPreferenceCurrentValue: currentValue
            }
            ... on ListPreference {
                type: __typename
                ListPreferenceCurrentValue: currentValue
                ListPreferenceDefault: default
                ListPreferenceTitle: title
                summary
                key
                entryValues
                entries
            }
        }
    }
`,Qf=W`
    ${Xf}

    query GET_SOURCE_BROWSE($id: LongString!) {
        source(id: $id) {
            ...SOURCE_BROWSE_FIELDS
        }
    }
`,$f=W`
    ${Zf}

    query GET_SOURCE_SETTINGS($id: LongString!) {
        source(id: $id) {
            ...SOURCE_SETTING_FIELDS
        }
    }
`,ep=W`
    ${Jf}

    query GET_SOURCE_MIGRATABLE($id: LongString!) {
        source(id: $id) {
            ...SOURCE_BASE_FIELDS
        }
    }
`,tp=W`
    ${Yf}

    query GET_SOURCES_LIST {
        sources {
            nodes {
                ...SOURCE_LIST_FIELDS
            }
        }
    }
`,np=W`
    ${Jf}

    query GET_MIGRATABLE_SOURCES {
        mangas(condition: { inLibrary: true }) {
            nodes {
                sourceId
                source {
                    ...SOURCE_BASE_FIELDS
                }
            }
        }
    }
`,rp=W`
    fragment MANGA_META_FIELDS on MangaMetaType {
        mangaId
        key
        value
    }
`,ip=W`
    fragment MANGA_BASE_FIELDS on MangaType {
        id
        title

        thumbnailUrl
        thumbnailUrlLastFetched
        inLibrary
        initialized
        sourceId
    }
`,ap=W`
    fragment MANGA_CHAPTER_STAT_FIELDS on MangaType {
        id
        unreadCount
        downloadCount
        bookmarkCount
        hasDuplicateChapters

        chapters {
            totalCount
        }
    }
`,op=W`
    fragment MANGA_CHAPTER_NODE_FIELDS on MangaType {
        firstUnreadChapter {
            id
            sourceOrder
            isRead
            mangaId
            chapterNumber
            name
            scanlator
        }
        lastReadChapter {
            id
            sourceOrder
            lastReadAt
        }
        latestReadChapter {
            id
            sourceOrder
            lastReadAt
        }
        latestFetchedChapter {
            id
            fetchedAt
        }
        latestUploadedChapter {
            id
            uploadDate
        }
        highestNumberedChapter {
            id
            chapterNumber
        }
    }
`,sp=W`
    ${ip}
    ${rp}
    ${Jf}

    fragment MANGA_READER_FIELDS on MangaType {
        ...MANGA_BASE_FIELDS

        genre
        source {
            ...SOURCE_BASE_FIELDS
        }

        meta {
            ...MANGA_META_FIELDS
        }

        chapters {
            totalCount
        }

        trackRecords {
            totalCount
        }
    }
`,cp=W`
    ${ip}
    ${ap}
    ${op}
    ${rp}
    ${Jf}

    fragment MANGA_LIBRARY_FIELDS on MangaType {
        ...MANGA_BASE_FIELDS
        ...MANGA_CHAPTER_STAT_FIELDS
        ...MANGA_CHAPTER_NODE_FIELDS

        genre
        lastFetchedAt
        inLibraryAt
        status

        artist
        author
        description

        meta {
            ...MANGA_META_FIELDS
        }

        source {
            ...SOURCE_BASE_FIELDS
        }

        trackRecords {
            totalCount

            nodes {
                id
                trackerId
            }
        }
    }
`,lp=W`
    ${ip}
    ${op}

    fragment MANGA_MIGRATION_FIELDS on MangaType {
        ...MANGA_BASE_FIELDS
        ...MANGA_CHAPTER_NODE_FIELDS
        artist
        author
        source {
            id
            name
            displayName
        }
    }
`,up=W`
    ${cp}
    ${rp}
    ${op}
    ${lp}

    fragment MANGA_SCREEN_FIELDS on MangaType {
        ...MANGA_LIBRARY_FIELDS
        ...MANGA_CHAPTER_NODE_FIELDS
        ...MANGA_MIGRATION_FIELDS

        artist
        author
        description

        status
        realUrl

        meta {
            ...MANGA_META_FIELDS
        }

        sourceId
        source {
            id
            name
            displayName
        }

        trackRecords {
            totalCount

            nodes {
                id
                trackerId
            }
        }
    }
`,dp=W`
    ${ip}
    ${ap}

    fragment MANGA_LIBRARY_DUPLICATE_SCREEN_FIELDS on MangaType {
        ...MANGA_BASE_FIELDS
        ...MANGA_CHAPTER_STAT_FIELDS

        description
    }
`,fp=W`
    fragment CHAPTER_META_FIELDS on ChapterMetaType {
        chapterId
        key
        value
    }
`,pp=W`
    fragment CHAPTER_BASE_FIELDS on ChapterType {
        id
        name

        mangaId
        scanlator
        realUrl

        sourceOrder
        chapterNumber
    }
`,mp=W`
    fragment CHAPTER_STATE_FIELDS on ChapterType {
        id
        isRead
        isDownloaded
        isBookmarked
    }
`,hp=W`
    ${pp}
    ${mp}

    fragment CHAPTER_READER_FIELDS on ChapterType {
        ...CHAPTER_BASE_FIELDS
        ...CHAPTER_STATE_FIELDS

        uploadDate
        lastPageRead
        pageCount
    }
`,gp=W`
    ${pp}
    ${mp}

    fragment CHAPTER_LIST_FIELDS on ChapterType {
        ...CHAPTER_BASE_FIELDS
        ...CHAPTER_STATE_FIELDS

        fetchedAt
        uploadDate
        lastReadAt
    }
`,_p=W`
    ${gp}
    ${ip}
    ${ap}

    fragment CHAPTER_UPDATE_LIST_FIELDS on ChapterType {
        ...CHAPTER_LIST_FIELDS

        manga {
            ...MANGA_BASE_FIELDS
            ...MANGA_CHAPTER_STAT_FIELDS
        }
    }
`,vp=W`
    ${gp}
    ${ip}
    ${ap}

    fragment CHAPTER_HISTORY_LIST_FIELDS on ChapterType {
        ...CHAPTER_LIST_FIELDS

        manga {
            ...MANGA_BASE_FIELDS
            ...MANGA_CHAPTER_STAT_FIELDS
        }
    }
`,yp=W`
    ${up}
    ${gp}

    mutation REFRESH_MANGA($id: Int!, $fetchManga: Boolean!, $fetchChapters: Boolean!) {
        fetchMangaAndChapters(input: { id: $id, fetchManga: $fetchManga, fetchChapters: $fetchChapters }) {
            manga @include(if: $fetchManga) {
                ...MANGA_SCREEN_FIELDS
            }
            chapters @include(if: $fetchChapters) {
                ...CHAPTER_LIST_FIELDS
            }
        }
    }
`,bp=W`
    mutation GET_MANGA_TO_MIGRATE_TO_FETCH(
        $id: Int!
        $migrateChapters: Boolean!
        $migrateCategories: Boolean!
        $migrateTracking: Boolean!
    ) {
        fetchMangaAndChapters(input: { id: $id, fetchManga: true, fetchChapters: $migrateChapters }) {
            manga {
                id
                title
                inLibrary
                categories @include(if: $migrateCategories) {
                    nodes {
                        id
                    }
                }
                trackRecords @include(if: $migrateTracking) {
                    nodes {
                        id
                        remoteId
                        trackerId
                    }
                }
            }
            chapters @include(if: $migrateChapters) {
                id
                manga {
                    id
                }
                chapterNumber
                isRead
                isDownloaded
                isBookmarked
            }
        }
    }
`,xp=W`
    mutation UPDATE_MANGA(
        $input: UpdateMangaInput!
        $updateCategoryInput: UpdateMangaCategoriesInput!
        $updateCategories: Boolean!
    ) {
        updateMangaCategories(input: $updateCategoryInput) @include(if: $updateCategories) {
            manga {
                id
                categories {
                    nodes {
                        id
                        mangas {
                            totalCount
                        }
                    }
                    totalCount
                }
            }
        }
        updateManga(input: $input) {
            manga {
                id
                inLibrary
                inLibraryAt
            }
        }
    }
`,Sp=W`
    mutation UPDATE_MANGAS(
        $input: UpdateMangasInput!
        $updateCategoryInput: UpdateMangasCategoriesInput!
        $updateCategories: Boolean!
    ) {
        updateMangasCategories(input: $updateCategoryInput) @include(if: $updateCategories) {
            mangas {
                id
                categories {
                    nodes {
                        id
                        mangas {
                            totalCount
                        }
                    }
                    totalCount
                }
            }
        }
        updateMangas(input: $input) {
            mangas {
                id
                inLibrary
                inLibraryAt
                categories {
                    nodes {
                        id
                        mangas {
                            totalCount
                        }
                    }
                    totalCount
                }
            }
        }
    }
`,Cp=W`
    mutation UPDATE_MANGA_CATEGORIES($input: UpdateMangaCategoriesInput!) {
        updateMangaCategories(input: $input) {
            manga {
                id
                categories {
                    nodes {
                        id
                        mangas {
                            totalCount
                        }
                    }
                    totalCount
                }
            }
        }
    }
`,wp=W`
    mutation UPDATE_MANGAS_CATEGORIES($input: UpdateMangasCategoriesInput!) {
        updateMangasCategories(input: $input) {
            mangas {
                id
                categories {
                    nodes {
                        id
                        mangas {
                            totalCount
                        }
                    }
                    totalCount
                }
            }
        }
    }
`,Tp=W`
    ${rp}

    mutation UPDATE_MANGA_METADATA(
        $preUpdateDeleteInput: DeleteMangaMetasInput!
        $hasPreUpdateDeletions: Boolean!
        $updateInput: SetMangaMetasInput!
        $hasUpdates: Boolean!
        $postUpdateDeleteInput: DeleteMangaMetasInput!
        $hasPostUpdateDeletions: Boolean!
        $migrateInput: SetMangaMetasInput!
        $isMigration: Boolean!
    ) {
        preUpdateDeletedMeta: deleteMangaMetas(input: $preUpdateDeleteInput) @include(if: $hasPreUpdateDeletions) {
            metas {
                ...MANGA_META_FIELDS
            }
        }
        updatedMeta: setMangaMetas(input: $updateInput) @include(if: $hasUpdates) {
            metas {
                ...MANGA_META_FIELDS
            }
        }
        postUpdateDeletedMeta: deleteMangaMetas(input: $postUpdateDeleteInput) @include(if: $hasPostUpdateDeletions) {
            metas {
                ...MANGA_META_FIELDS
            }
        }
        migrationMeta: setMangaMetas(input: $migrateInput) @include(if: $isMigration) {
            metas {
                ...MANGA_META_FIELDS
            }
        }
    }
`,Ep=W`
    fragment TRACK_RECORD_SEARCH_FIELDS on TrackSearchType {
        id
        remoteId
        title
        trackingUrl
        coverUrl
        publishingType
        startDate
        publishingStatus
        summary
        score
        totalChapters
    }
`,Dp=W`
    fragment TRACK_RECORD_BIND_FIELDS on TrackRecordType {
        id
        remoteId
        trackerId
        remoteUrl
        title
        status
        lastChapterRead
        totalChapters
        score
        displayScore
        startDate
        finishDate
        private
    }
`,Op=W`
    ${rp}

    query GET_MANGA_META($id: Int!) {
        manga(id: $id) {
            id
            meta {
                ...MANGA_META_FIELDS
            }
        }
    }
`,kp=W`
    ${up}

    query GET_MANGA_SCREEN($id: Int!) {
        manga(id: $id) {
            ...MANGA_SCREEN_FIELDS
        }
    }
`,Ap=W`
    ${sp}

    query GET_MANGA_READER($id: Int!) {
        manga(id: $id) {
            ...MANGA_READER_FIELDS
        }
    }
`,jp=W`
    ${Dp}

    query GET_MANGA_TRACK_RECORDS($id: Int!) {
        manga(id: $id) {
            id

            trackRecords {
                totalCount

                nodes {
                    ...TRACK_RECORD_BIND_FIELDS
                }
            }
        }
    }
`,Mp=W`
    query GET_MANGA_CATEGORIES($id: Int!) {
        manga(id: $id) {
            id
            categories {
                totalCount
                nodes {
                    id
                }
            }
        }
    }
`,Np=W`
    ${rp}
    ${fp}

    query GET_MANGA_TO_MIGRATE(
        $id: Int!
        $getChapterData: Boolean!
        $migrateCategories: Boolean!
        $migrateTracking: Boolean!
        $migrateMetadata: Boolean!
    ) {
        manga(id: $id) {
            id
            inLibrary
            title
            chapters @include(if: $getChapterData) {
                nodes {
                    id
                    manga {
                        id
                    }
                    chapterNumber
                    isRead
                    isDownloaded
                    isBookmarked
                    meta @include(if: $migrateMetadata) {
                        ...CHAPTER_META_FIELDS
                    }
                }
                totalCount
            }
            categories @include(if: $migrateCategories) {
                nodes {
                    id
                }
            }
            trackRecords @include(if: $migrateTracking) {
                nodes {
                    id
                    remoteId
                    trackerId
                    private
                }
            }
            meta @include(if: $migrateMetadata) {
                ...MANGA_META_FIELDS
            }
        }
    }
`,Pp=W`
    ${ip}
    ${Df}

    query GET_MANGAS_BASE(
        $after: Cursor
        $before: Cursor
        $condition: MangaConditionInput
        $filter: MangaFilterInput
        $first: Int
        $last: Int
        $offset: Int
        $order: [MangaOrderInput!]
    ) {
        mangas(
            after: $after
            before: $before
            condition: $condition
            filter: $filter
            first: $first
            last: $last
            offset: $offset
            order: $order
        ) {
            nodes {
                ...MANGA_BASE_FIELDS
            }
            pageInfo {
                ...PAGE_INFO
            }
            totalCount
        }
    }
`,Fp=W`
    ${cp}
    ${Df}

    query GET_MANGAS_LIBRARY(
        $after: Cursor
        $before: Cursor
        $condition: MangaConditionInput
        $filter: MangaFilterInput
        $first: Int
        $last: Int
        $offset: Int
        $order: [MangaOrderInput!]
    ) {
        mangas(
            after: $after
            before: $before
            condition: $condition
            filter: $filter
            first: $first
            last: $last
            offset: $offset
            order: $order
        ) {
            nodes {
                ...MANGA_LIBRARY_FIELDS
            }
            pageInfo {
                ...PAGE_INFO
            }
            totalCount
        }
    }
`,Ip=W`
    ${dp}
    ${Df}

    query GET_MANGAS_DUPLICATES(
        $after: Cursor
        $before: Cursor
        $condition: MangaConditionInput
        $filter: MangaFilterInput
        $first: Int
        $last: Int
        $offset: Int
        $order: [MangaOrderInput!]
    ) {
        mangas(
            after: $after
            before: $before
            condition: $condition
            filter: $filter
            first: $first
            last: $last
            offset: $offset
            order: $order
        ) {
            nodes {
                ...MANGA_LIBRARY_DUPLICATE_SCREEN_FIELDS
            }
            pageInfo {
                ...PAGE_INFO
            }
            totalCount
        }
    }
`,Lp=W`
    ${lp}

    query GET_MIGRATABLE_SOURCE_MANGAS(
        $after: Cursor
        $before: Cursor
        $condition: MangaConditionInput
        $filter: MangaFilterInput
        $first: Int
        $last: Int
        $offset: Int
        $order: [MangaOrderInput!]
    ) {
        mangas(
            after: $after
            before: $before
            condition: $condition
            filter: $filter
            first: $first
            last: $last
            offset: $offset
            order: $order
        ) {
            nodes {
                ...MANGA_MIGRATION_FIELDS
            }
        }
    }
`,Rp=W`
    query GET_MANGAS_COUNT(
        $after: Cursor
        $before: Cursor
        $condition: MangaConditionInput
        $filter: MangaFilterInput
        $first: Int
        $last: Int
        $offset: Int
        $order: [MangaOrderInput!]
    ) {
        mangas(
            after: $after
            before: $before
            condition: $condition
            filter: $filter
            first: $first
            last: $last
            offset: $offset
            order: $order
        ) {
            totalCount
        }
    }
`,zp=W`
    fragment CATEGORY_META_FIELDS on CategoryMetaType {
        categoryId
        key
        value
    }
`,Bp=W`
    fragment CATEGORY_BASE_FIELDS on CategoryType {
        id
        name

        default
        order
    }
`,Vp=W`
    ${Bp}
    ${zp}

    fragment CATEGORY_LIBRARY_FIELDS on CategoryType {
        ...CATEGORY_BASE_FIELDS

        meta {
            ...CATEGORY_META_FIELDS
        }
        mangas {
            totalCount
        }
    }
`,Hp=W`
    ${Bp}

    fragment CATEGORY_SETTING_FIELDS on CategoryType {
        ...CATEGORY_BASE_FIELDS

        includeInUpdate
        includeInDownload
    }
`,Up=W`
    ${Bp}
    ${Df}

    query GET_CATEGORIES_BASE(
        $after: Cursor
        $before: Cursor
        $condition: CategoryConditionInput
        $filter: CategoryFilterInput
        $first: Int
        $last: Int
        $offset: Int
        $order: [CategoryOrderInput!]
    ) {
        categories(
            after: $after
            before: $before
            condition: $condition
            filter: $filter
            first: $first
            last: $last
            offset: $offset
            order: $order
        ) {
            nodes {
                ...CATEGORY_BASE_FIELDS
            }
            pageInfo {
                ...PAGE_INFO
            }
            totalCount
        }
    }
`,Wp=W`
    ${Vp}
    ${Df}

    query GET_CATEGORIES_LIBRARY(
        $after: Cursor
        $before: Cursor
        $condition: CategoryConditionInput
        $filter: CategoryFilterInput
        $first: Int
        $last: Int
        $offset: Int
        $order: [CategoryOrderInput!]
    ) {
        categories(
            after: $after
            before: $before
            condition: $condition
            filter: $filter
            first: $first
            last: $last
            offset: $offset
            order: $order
        ) {
            nodes {
                ...CATEGORY_LIBRARY_FIELDS
            }
            pageInfo {
                ...PAGE_INFO
            }
            totalCount
        }
    }
`,Gp=W`
    ${Hp}
    ${Df}

    query GET_CATEGORIES_SETTINGS(
        $after: Cursor
        $before: Cursor
        $condition: CategoryConditionInput
        $filter: CategoryFilterInput
        $first: Int
        $last: Int
        $offset: Int
        $order: [CategoryOrderInput!]
    ) {
        categories(
            after: $after
            before: $before
            condition: $condition
            filter: $filter
            first: $first
            last: $last
            offset: $offset
            order: $order
        ) {
            nodes {
                ...CATEGORY_SETTING_FIELDS
            }
            pageInfo {
                ...PAGE_INFO
            }
            totalCount
        }
    }
`,Kp=W`
    ${cp}
    ${Df}

    query GET_CATEGORY_MANGAS($id: Int!) {
        category(id: $id) {
            id
            mangas {
                nodes {
                    ...MANGA_LIBRARY_FIELDS
                }
                pageInfo {
                    ...PAGE_INFO
                }
                totalCount
            }
        }
    }
`,qp=W`
    ${ip}

    mutation GET_SOURCE_MANGAS_FETCH($input: FetchSourceMangaInput!) {
        fetchSourceManga(input: $input) {
            hasNextPage
            mangas {
                ...MANGA_BASE_FIELDS
            }
        }
    }
`,Jp=W`
    ${lp}

    mutation GET_MIGRATION_SOURCE_MANGAS_FETCH($input: FetchSourceMangaInput!) {
        fetchSourceManga(input: $input) {
            hasNextPage
            mangas {
                ...MANGA_MIGRATION_FIELDS
            }
        }
    }
`,Yp=W`
    ${Zf}

    mutation UPDATE_SOURCE_PREFERENCES($input: UpdateSourcePreferenceInput!) {
        updateSourcePreference(input: $input) {
            source {
                ...SOURCE_SETTING_FIELDS
            }
        }
    }
`,Xp=W`
    ${qf}

    mutation UPDATE_SOURCE_METADATA(
        $preUpdateDeleteInput: DeleteSourceMetasInput!
        $hasPreUpdateDeletions: Boolean!
        $updateInput: SetSourceMetasInput!
        $hasUpdates: Boolean!
        $postUpdateDeleteInput: DeleteSourceMetasInput!
        $hasPostUpdateDeletions: Boolean!
        $migrateInput: SetSourceMetasInput!
        $isMigration: Boolean!
    ) {
        preUpdateDeletedMeta: deleteSourceMetas(input: $preUpdateDeleteInput) @include(if: $hasPreUpdateDeletions) {
            metas {
                ...SOURCE_META_FIELDS
            }
        }
        updatedMeta: setSourceMetas(input: $updateInput) @include(if: $hasUpdates) {
            metas {
                ...SOURCE_META_FIELDS
            }
        }
        postUpdateDeletedMeta: deleteSourceMetas(input: $postUpdateDeleteInput) @include(if: $hasPostUpdateDeletions) {
            metas {
                ...SOURCE_META_FIELDS
            }
        }
        migrationMeta: setSourceMetas(input: $migrateInput) @include(if: $isMigration) {
            metas {
                ...SOURCE_META_FIELDS
            }
        }
    }
`,Zp=W`
    ${ip}
    ${Jf}
    ${pp}

    fragment DOWNLOAD_TYPE_FIELDS on DownloadType {
        chapter {
            ...CHAPTER_BASE_FIELDS
            isDownloaded
            pageCount
        }

        manga {
            ...MANGA_BASE_FIELDS
            downloadCount
            source {
                ...SOURCE_BASE_FIELDS
            }
        }

        progress
        state
        tries
        position
    }
`,Qp=W`
    ${Zp}

    fragment DOWNLOAD_STATUS_FIELDS on DownloadStatus {
        state

        queue {
            ...DOWNLOAD_TYPE_FIELDS
        }
    }
`,$p=W`
    ${Zp}

    fragment DOWNLOAD_UPDATES_FIELDS on DownloadUpdates {
        state
        omittedUpdates

        updates {
            type
            download {
                ...DOWNLOAD_TYPE_FIELDS
            }
        }
    }
`,em=W`
    ${Qp}

    mutation CLEAR_DOWNLOADER($input: ClearDownloaderInput = {}) {
        clearDownloader(input: $input) {
            downloadStatus {
                ...DOWNLOAD_STATUS_FIELDS
            }
        }
    }
`,tm=W`
    mutation DELETE_DOWNLOADED_CHAPTER($input: DeleteDownloadedChapterInput!) {
        deleteDownloadedChapter(input: $input) {
            chapters {
                id
                isDownloaded
                manga {
                    id
                    downloadCount
                }
            }
        }
    }
`,nm=W`
    mutation DELETE_DOWNLOADED_CHAPTERS($input: DeleteDownloadedChaptersInput!) {
        deleteDownloadedChapters(input: $input) {
            chapters {
                id
                isDownloaded
                manga {
                    id
                    downloadCount
                }
            }
        }
    }
`,rm=W`
    ${Qp}

    mutation DEQUEUE_CHAPTER_DOWNLOAD($input: DequeueChapterDownloadInput!) {
        dequeueChapterDownload(input: $input) {
            downloadStatus {
                ...DOWNLOAD_STATUS_FIELDS
            }
        }
    }
`,im=W`
    ${Qp}

    mutation DEQUEUE_CHAPTER_DOWNLOADS($input: DequeueChapterDownloadsInput!) {
        dequeueChapterDownloads(input: $input) {
            downloadStatus {
                ...DOWNLOAD_STATUS_FIELDS
            }
        }
    }
`,am=W`
    ${Qp}

    mutation ENQUEUE_CHAPTER_DOWNLOAD($input: EnqueueChapterDownloadInput!) {
        enqueueChapterDownload(input: $input) {
            downloadStatus {
                ...DOWNLOAD_STATUS_FIELDS
            }
        }
    }
`,om=W`
    ${Qp}

    mutation ENQUEUE_CHAPTER_DOWNLOADS($input: EnqueueChapterDownloadsInput!) {
        enqueueChapterDownloads(input: $input) {
            downloadStatus {
                ...DOWNLOAD_STATUS_FIELDS
            }
        }
    }
`,sm=W`
    ${Qp}

    mutation REORDER_CHAPTER_DOWNLOAD($input: ReorderChapterDownloadInput!) {
        reorderChapterDownload(input: $input) {
            downloadStatus {
                ...DOWNLOAD_STATUS_FIELDS
            }
        }
    }
`,cm=W`
    ${Qp}

    mutation REORDER_CHAPTER_DOWNLOADS($input: ReorderChapterDownloadsInput!) {
        reorderChapterDownloads(input: $input) {
            downloadStatus {
                ...DOWNLOAD_STATUS_FIELDS
            }
        }
    }
`,lm=W`
    mutation START_DOWNLOADER($input: StartDownloaderInput = {}) {
        startDownloader(input: $input) {
            downloadStatus {
                state
            }
        }
    }
`,um=W`
    mutation STOP_DOWNLOADER($input: StopDownloaderInput = {}) {
        stopDownloader(input: $input) {
            downloadStatus {
                state
            }
        }
    }
`,dm=W`
    ${hp}
    ${Df}

    query GET_CHAPTERS_READER(
        $after: Cursor
        $before: Cursor
        $condition: ChapterConditionInput
        $filter: ChapterFilterInput
        $first: Int
        $last: Int
        $offset: Int
        $order: [ChapterOrderInput!]
    ) {
        chapters(
            after: $after
            before: $before
            condition: $condition
            filter: $filter
            first: $first
            last: $last
            offset: $offset
            order: $order
        ) {
            nodes {
                ...CHAPTER_READER_FIELDS
            }
            pageInfo {
                ...PAGE_INFO
            }
            totalCount
        }
    }
`,fm=W`
    ${gp}
    ${Df}

    query GET_CHAPTERS_MANGA(
        $after: Cursor
        $before: Cursor
        $condition: ChapterConditionInput
        $filter: ChapterFilterInput
        $first: Int
        $last: Int
        $offset: Int
        $order: [ChapterOrderInput!]
    ) {
        chapters(
            after: $after
            before: $before
            condition: $condition
            filter: $filter
            first: $first
            last: $last
            offset: $offset
            order: $order
        ) {
            nodes {
                ...CHAPTER_LIST_FIELDS
            }
            pageInfo {
                ...PAGE_INFO
            }
            totalCount
        }
    }
`,pm=W`
    ${_p}
    ${Df}

    query GET_CHAPTERS_UPDATES(
        $after: Cursor
        $before: Cursor
        $condition: ChapterConditionInput
        $filter: ChapterFilterInput
        $first: Int
        $last: Int
        $offset: Int
        $order: [ChapterOrderInput!]
    ) {
        lastUpdateTimestamp {
            timestamp
        }
        chapters(
            after: $after
            before: $before
            condition: $condition
            filter: $filter
            first: $first
            last: $last
            offset: $offset
            order: $order
        ) {
            nodes {
                ...CHAPTER_UPDATE_LIST_FIELDS
            }
            pageInfo {
                ...PAGE_INFO
            }
            totalCount
        }
    }
`,mm=W`
    ${vp}
    ${Df}

    query GET_CHAPTERS_HISTORY(
        $after: Cursor
        $before: Cursor
        $condition: ChapterConditionInput
        $filter: ChapterFilterInput
        $first: Int
        $last: Int
        $offset: Int
        $order: [ChapterOrderInput!]
    ) {
        chapters(
            after: $after
            before: $before
            condition: $condition
            filter: $filter
            first: $first
            last: $last
            offset: $offset
            order: $order
        ) {
            nodes {
                ...CHAPTER_HISTORY_LIST_FIELDS
            }
            pageInfo {
                ...PAGE_INFO
            }
            totalCount
        }
    }
`,hm=W`
    ${mp}
    ${Df}

    query GET_MANGAS_CHAPTER_IDS_WITH_STATE(
        $after: Cursor
        $before: Cursor
        $condition: ChapterConditionInput
        $filter: ChapterFilterInput
        $first: Int
        $last: Int
        $offset: Int
        $order: [ChapterOrderInput!]
    ) {
        chapters(
            after: $after
            before: $before
            condition: $condition
            filter: $filter
            first: $first
            last: $last
            offset: $offset
            order: $order
        ) {
            nodes {
                ...CHAPTER_STATE_FIELDS
                mangaId
                scanlator
                chapterNumber
            }
            pageInfo {
                ...PAGE_INFO
            }
            totalCount
        }
    }
`,gm=W`
    mutation GET_CHAPTER_PAGES_FETCH($input: FetchChapterPagesInput!) {
        fetchChapterPages(input: $input) {
            chapter {
                id
                pageCount
                isDownloaded
                manga {
                    id
                    downloadCount
                }
            }
            pages
        }
    }
`,_m=W`
    ${Dp}

    mutation UPDATE_CHAPTER(
        $input: UpdateChapterInput!
        $getBookmarked: Boolean!
        $getRead: Boolean!
        $getLastPageRead: Boolean!
        $chapterIdToDelete: Int!
        $deleteChapter: Boolean!
        $mangaId: Int!
        $trackProgress: Boolean!
    ) {
        updateChapter(input: $input) {
            chapter {
                id
                isBookmarked @include(if: $getBookmarked)
                isRead @include(if: $getRead)
                lastReadAt @include(if: $getRead)
                lastPageRead @include(if: $getLastPageRead)
                manga @include(if: $getRead) {
                    id
                    unreadCount
                    lastReadChapter {
                        id
                    }
                    latestReadChapter {
                        id
                    }
                    firstUnreadChapter {
                        id
                    }
                }
                manga @include(if: $getBookmarked) {
                    id
                    bookmarkCount
                }
            }
        }
        deleteDownloadedChapter(input: { id: $chapterIdToDelete }) @include(if: $deleteChapter) {
            chapters {
                id
                isDownloaded
                manga {
                    id
                    downloadCount
                }
            }
        }
        trackProgress(input: { mangaId: $mangaId }) @include(if: $trackProgress) {
            trackRecords {
                ...TRACK_RECORD_BIND_FIELDS
            }
        }
    }
`,vm=W`
    ${Dp}

    mutation UPDATE_CHAPTERS(
        $input: UpdateChaptersInput!
        $getBookmarked: Boolean!
        $getRead: Boolean!
        $getLastPageRead: Boolean!
        $chapterIdsToDelete: [Int!]!
        $deleteChapters: Boolean!
        $mangaId: Int!
        $trackProgress: Boolean!
    ) {
        updateChapters(input: $input) {
            chapters {
                id
                isBookmarked @include(if: $getBookmarked)
                isRead @include(if: $getRead)
                lastReadAt @include(if: $getRead)
                lastPageRead @include(if: $getLastPageRead)
                manga @include(if: $getRead) {
                    id
                    unreadCount
                    lastReadChapter {
                        id
                    }
                    latestReadChapter {
                        id
                    }
                    firstUnreadChapter {
                        id
                    }
                }
                manga @include(if: $getBookmarked) {
                    id
                    bookmarkCount
                }
            }
        }
        deleteDownloadedChapters(input: { ids: $chapterIdsToDelete }) @include(if: $deleteChapters) {
            chapters {
                id
                isDownloaded
                manga {
                    id
                    downloadCount
                }
            }
        }
        trackProgress(input: { mangaId: $mangaId }) @include(if: $trackProgress) {
            trackRecords {
                ...TRACK_RECORD_BIND_FIELDS
            }
        }
    }
`,ym=W`
    ${fp}

    mutation UPDATE_CHAPTER_METADATA(
        $preUpdateDeleteInput: DeleteChapterMetasInput!
        $hasPreUpdateDeletions: Boolean!
        $updateInput: SetChapterMetasInput!
        $hasUpdates: Boolean!
        $postUpdateDeleteInput: DeleteChapterMetasInput!
        $hasPostUpdateDeletions: Boolean!
        $migrateInput: SetChapterMetasInput!
        $isMigration: Boolean!
    ) {
        preUpdateDeletedMeta: deleteChapterMetas(input: $preUpdateDeleteInput) @include(if: $hasPreUpdateDeletions) {
            metas {
                ...CHAPTER_META_FIELDS
            }
        }
        updatedMeta: setChapterMetas(input: $updateInput) @include(if: $hasUpdates) {
            metas {
                ...CHAPTER_META_FIELDS
            }
        }
        postUpdateDeletedMeta: deleteChapterMetas(input: $postUpdateDeleteInput) @include(if: $hasPostUpdateDeletions) {
            metas {
                ...CHAPTER_META_FIELDS
            }
        }
        migrationMeta: setChapterMetas(input: $migrateInput) @include(if: $isMigration) {
            metas {
                ...CHAPTER_META_FIELDS
            }
        }
    }
`,bm=W`
    ${Hp}
    mutation CREATE_CATEGORY($input: CreateCategoryInput!) {
        createCategory(input: $input) {
            category {
                ...CATEGORY_SETTING_FIELDS
            }
        }
    }
`,xm=W`
    mutation DELETE_CATEGORY($input: DeleteCategoryInput!) {
        deleteCategory(input: $input) {
            category {
                id
            }
        }
    }
`,Sm=W`
    mutation UPDATE_CATEGORY(
        $input: UpdateCategoryInput!
        $getDefault: Boolean!
        $getIncludeInUpdate: Boolean!
        $getIncludeInDownload: Boolean!
        $getName: Boolean!
    ) {
        updateCategory(input: $input) {
            category {
                id
                default @include(if: $getDefault)
                includeInUpdate @include(if: $getIncludeInUpdate)
                includeInDownload @include(if: $getIncludeInDownload)
                name @include(if: $getName)
            }
        }
    }
`;W`
    mutation UPDATE_CATEGORIES(
        $input: UpdateCategoriesInput!
        $getDefault: Boolean!
        $getIncludeInUpdate: Boolean!
        $getIncludeInDownload: Boolean!
        $getName: Boolean!
    ) {
        updateCategories(input: $input) {
            categories {
                id
                default @include(if: $getDefault)
                includeInUpdate @include(if: $getIncludeInUpdate)
                includeInDownload @include(if: $getIncludeInDownload)
                name @include(if: $getName)
            }
        }
    }
`;var Cm=W`
    mutation UPDATE_CATEGORY_ORDER($input: UpdateCategoryOrderInput!) {
        updateCategoryOrder(input: $input) {
            categories {
                id
                order
            }
        }
    }
`,wm=W`
    ${zp}

    mutation UPDATE_CATEGORY_METADATA(
        $preUpdateDeleteInput: DeleteCategoryMetasInput!
        $hasPreUpdateDeletions: Boolean!
        $updateInput: SetCategoryMetasInput!
        $hasUpdates: Boolean!
        $postUpdateDeleteInput: DeleteCategoryMetasInput!
        $hasPostUpdateDeletions: Boolean!
        $migrateInput: SetCategoryMetasInput!
        $isMigration: Boolean!
    ) {
        preUpdateDeletedMeta: deleteCategoryMetas(input: $preUpdateDeleteInput) @include(if: $hasPreUpdateDeletions) {
            metas {
                ...CATEGORY_META_FIELDS
            }
        }
        updatedMeta: setCategoryMetas(input: $updateInput) @include(if: $hasUpdates) {
            metas {
                ...CATEGORY_META_FIELDS
            }
        }
        postUpdateDeletedMeta: deleteCategoryMetas(input: $postUpdateDeleteInput)
            @include(if: $hasPostUpdateDeletions) {
            metas {
                ...CATEGORY_META_FIELDS
            }
        }
        migrationMeta: setCategoryMetas(input: $migrateInput) @include(if: $isMigration) {
            metas {
                ...CATEGORY_META_FIELDS
            }
        }
    }
`,Tm=W`
    ${ap}
    ${op}

    fragment UPDATER_MANGA_FIELDS on MangaUpdateType {
        status
        manga {
            id
            title
            thumbnailUrl

            ...MANGA_CHAPTER_STAT_FIELDS
            ...MANGA_CHAPTER_NODE_FIELDS
        }
    }
`,Em=W`
    fragment UPDATER_CATEGORY_FIELDS on CategoryUpdateType {
        status
        category {
            id
            name
        }
    }
`,Dm=W`
    fragment UPDATER_JOB_INFO_FIELDS on UpdaterJobsInfoType {
        isRunning
        totalJobs
        finishedJobs
        skippedCategoriesCount
        skippedMangasCount
    }
`,Om=W`
    ${Dm}
    ${Em}
    ${Tm}

    fragment UPDATER_STATUS_FIELDS on LibraryUpdateStatus {
        jobsInfo {
            ...UPDATER_JOB_INFO_FIELDS
        }

        categoryUpdates {
            ...UPDATER_CATEGORY_FIELDS
        }

        mangaUpdates {
            ...UPDATER_MANGA_FIELDS
        }
    }
`,km=W`
    ${Dm}
    ${Em}
    ${Tm}

    fragment UPDATER_SUBSCRIPTION_FIELDS on UpdaterUpdates {
        omittedUpdates

        jobsInfo {
            ...UPDATER_JOB_INFO_FIELDS
        }

        categoryUpdates {
            ...UPDATER_CATEGORY_FIELDS
        }

        mangaUpdates {
            ...UPDATER_MANGA_FIELDS
        }
    }
`;W`
    fragment UPDATER_START_STOP_FIELDS on UpdateStatus {
        isRunning
    }
`;var Am=W`
    ${Om}

    mutation UPDATE_LIBRARY($input: UpdateLibraryInput = {}) {
        updateLibrary(input: $input) {
            updateStatus {
                ...UPDATER_STATUS_FIELDS
            }
        }
    }
`,jm=W`
    mutation STOP_UPDATER($input: UpdateStopInput = {}) {
        updateStop(input: $input) {
            clientMutationId
        }
    }
`,Mm=W`
    ${Om}

    query GET_UPDATE_STATUS {
        libraryUpdateStatus {
            ...UPDATER_STATUS_FIELDS
        }
    }
`,Nm=W`
    query GET_LAST_UPDATE_TIMESTAMP {
        lastUpdateTimestamp {
            timestamp
        }
    }
`,Pm=class{constructor(e){S(this,`keyToResponseMap`,new Map),S(this,`keyToFetchTimestampMap`,new Map),S(this,`createKeyFn`,(e,t)=>`${e}_${JSON.stringify(t)}`),this.createKeyFn=e??this.createKeyFn}getKeyFor(e,t){return this.createKeyFn(e,t)}cacheResponse(e,t,n){let r=this.getKeyFor(e,t);this.keyToFetchTimestampMap.set(r,Date.now()),this.keyToResponseMap.set(r,n)}getFetchTimestampFor(e,t){let n=this.getKeyFor(e,t);return this.keyToFetchTimestampMap.get(n)}getResponseFor(e,t,n){let r=this.getKeyFor(e,t);return n&&Date.now()-(this.getFetchTimestampFor(e,t)??0)>=n&&this.keyToResponseMap.delete(r),this.keyToResponseMap.get(r)}getAllKeys(){return[...this.keyToResponseMap.keys()]}getMatchingKeys(e){return this.getAllKeys().filter(t=>!!e.exec(t))}clearFor(...e){e.forEach(e=>{this.keyToResponseMap.delete(e),this.keyToFetchTimestampMap.delete(e)})}clear(){this.keyToResponseMap.clear(),this.keyToFetchTimestampMap.clear()}},Fm=W`
    mutation CREATE_BACKUP($input: CreateBackupInput!) {
        createBackup(input: $input) {
            url
        }
    }
`,Im=W`
    mutation RESTORE_BACKUP($backup: Upload!, $flags: PartialBackupFlagsInput) {
        restoreBackup(input: { backup: $backup, flags: $flags }) {
            id
            status {
                mangaProgress
                state
                totalManga
            }
        }
    }
`,Lm=W`
    query VALIDATE_BACKUP($backup: Upload!) {
        validateBackup(input: { backup: $backup }) {
            missingSources {
                id
                name
            }
            missingTrackers {
                name
            }
        }
    }
`,Rm=W`
    query GET_RESTORE_STATUS($id: String!) {
        restoreStatus(id: $id) {
            mangaProgress
            state
            totalManga
        }
    }
`,zm=W`
    ${$p}

    subscription DOWNLOAD_STATUS_SUBSCRIPTION($input: DownloadChangedInput!) {
        downloadStatusChanged(input: $input) {
            ...DOWNLOAD_UPDATES_FIELDS
        }
    }
`,Bm=W`
    ${km}

    subscription UPDATER_SUBSCRIPTION($input: LibraryUpdateStatusChangedInput!) {
        libraryUpdateStatusChanged(input: $input) {
            ...UPDATER_SUBSCRIPTION_FIELDS
        }
    }
`,Vm=W`
    fragment SERVER_SETTINGS on SettingsType {
        # Server ip and port bindings
        ip
        port

        # Socks proxy
        socksProxyEnabled
        socksProxyVersion
        socksProxyHost
        socksProxyPort
        socksProxyUsername
        socksProxyPassword

        # webUI
        webUIFlavor
        initialOpenInBrowserEnabled
        webUIInterface
        electronPath
        webUIChannel
        webUIUpdateCheckInterval

        # downloader
        downloadAsCbz
        downloadsPath
        autoDownloadNewChapters
        excludeEntryWithUnreadChapters
        autoDownloadNewChaptersLimit
        autoDownloadIgnoreReUploads
        downloadConversions {
            mimeType
            target
            compressionLevel
            headers {
                name
                value
            }
            callTimeout
            connectTimeout
        }
        serveConversions {
            mimeType
            target
            compressionLevel
            headers {
                name
                value
            }
            callTimeout
            connectTimeout
        }

        # extension/source
        maxSourcesInParallel

        # updater
        excludeUnreadChapters
        excludeNotStarted
        excludeCompleted
        globalUpdateInterval
        updateMangas

        # Authentication
        authMode
        authPassword
        authUsername
        jwtAudience
        jwtTokenExpiry
        jwtRefreshExpiry

        # misc
        debugLogsEnabled
        systemTrayEnabled
        maxLogFileSize
        maxLogFiles
        maxLogFolderSize

        # backup
        backupPath
        backupTime
        backupInterval
        backupTTL

        autoBackupIncludeCategories
        autoBackupIncludeChapters
        autoBackupIncludeClientData
        autoBackupIncludeHistory
        autoBackupIncludeManga
        autoBackupIncludeServerSettings
        autoBackupIncludeTracking

        # local source
        localSourcePath

        # Cloudflare bypass
        flareSolverrEnabled
        flareSolverrUrl
        flareSolverrTimeout
        flareSolverrSessionName
        flareSolverrSessionTtl
        flareSolverrAsResponseFallback

        # OPDS
        opdsUseBinaryFileSizes
        opdsItemsPerPage
        opdsEnablePageReadProgress
        opdsMarkAsReadOnDownload
        opdsShowOnlyUnreadChapters
        opdsShowOnlyDownloadedChapters
        opdsChapterSortOrder
        opdsCbzMimetype
        opdsSkipChapterMetadataFeed

        # KOReader sync
        koreaderSyncChecksumMethod
        koreaderSyncStrategyBackward
        koreaderSyncStrategyForward
        koreaderSyncPercentageTolerance

        # Database
        databaseType
        databaseUrl
        databaseUsername
        databasePassword
        useHikariConnectionPool

        # WebView
        kcefEnabled

        # Sync
        syncDataCategories
        syncDataChapters
        syncDataHistory
        syncDataManga
        syncDataTracking
        syncInterval
        syncYomiApiKey
        syncYomiEnabled
        syncYomiHost
    }
`,Hm=W`
    ${Vm}
    query GET_SERVER_SETTINGS {
        settings {
            ...SERVER_SETTINGS
        }
    }
`;W`
    ${Vm}
    mutation RESET_SERVER_SETTINGS($input: ResetSettingsInput!) {
        resetSettings(input: $input) {
            settings {
                ...SERVER_SETTINGS
            }
        }
    }
`;var Um=W`
    ${Vm}
    mutation UPDATE_SERVER_SETTINGS($input: SetSettingsInput!) {
        setSettings(input: $input) {
            settings {
                ...SERVER_SETTINGS
            }
        }
    }
`,Wm=W`
    mutation CLEAR_SERVER_CACHE($input: ClearCachedImagesInput!) {
        clearCachedImages(input: $input) {
            cachedPages
            cachedThumbnails
            downloadedThumbnails
        }
    }
`,Gm=W`
    ${Pf}
    mutation UPDATE_WEBUI($input: WebUIUpdateInput = {}) {
        updateWebUI(input: $input) {
            updateStatus {
                ...WEBUI_UPDATE_STATUS
            }
        }
    }
`,Km=W`
    ${Nf}
    mutation RESET_WEBUI_UPDATE_STATUS {
        resetWebUIUpdateStatus {
            info {
                ...WEBUI_UPDATE_INFO
            }
            state
        }
    }
`,qm=W`
    ${Pf}
    subscription WEBUI_UPDATE_SUBSCRIPTION {
        webUIUpdateStatusChange {
            ...WEBUI_UPDATE_STATUS
        }
    }
`,Jm=W`
    ${Qp}

    query GET_DOWNLOAD_STATUS {
        downloadStatus {
            ...DOWNLOAD_STATUS_FIELDS
        }
    }
`;function Ym(e,t){if(t.has(e))throw TypeError(`Cannot initialize the same private elements twice on an object`)}function Xm(e,t,n){Ym(e,t),t.set(e,n)}function Zm(e,t,n){if(typeof e==`function`?e===t:e.has(t))return arguments.length<3?t:n;throw TypeError(`Private element is not present on this object`)}function Qm(e,t){return e.get(Zm(e,t))}function $m(e,t,n){return e.set(Zm(e,t),n),n}var eh,th=class{constructor(e){S(this,`value`,void 0),S(this,`next`,void 0),this.value=e}},nh=new WeakMap,rh=new WeakMap,ih=new WeakMap;eh=Symbol.iterator;var ah=class{constructor(){Xm(this,nh,void 0),Xm(this,rh,void 0),Xm(this,ih,void 0),this.clear()}enqueue(e){var t;let n=new th(e);Qm(nh,this)?(Qm(rh,this).next=n,$m(rh,this,n)):($m(nh,this,n),$m(rh,this,n)),$m(ih,this,(t=Qm(ih,this),t++,t))}dequeue(){var e;let t=Qm(nh,this);if(t)return $m(nh,this,Qm(nh,this).next),$m(ih,this,(e=Qm(ih,this),e--,e)),Qm(nh,this)||$m(rh,this,void 0),t.value}peek(){if(Qm(nh,this))return Qm(nh,this).value}clear(){$m(nh,this,void 0),$m(rh,this,void 0),$m(ih,this,0)}get size(){return Qm(ih,this)}*[eh](){let e=Qm(nh,this);for(;e;)yield e.value,e=e.next}*drain(){for(;Qm(nh,this);)yield this.dequeue()}};function oh(e){let t=!1;if(typeof e==`object`&&({concurrency:e,rejectOnClear:t=!1}=e),sh(e),typeof t!=`boolean`)throw TypeError("Expected `rejectOnClear` to be a boolean");let n=new ah,r=0,i=()=>{r<e&&n.size>0&&(r++,n.dequeue().run())},a=()=>{r--,i()},o=async(e,t,n)=>{let r=(async()=>e(...n))();t(r);try{await r}catch{}a()},s=(t,a,s,c)=>{let l={reject:s};new Promise(e=>{l.run=e,n.enqueue(l)}).then(o.bind(void 0,t,a,c)),r<e&&i()},c=(e,...t)=>new Promise((n,r)=>{s(e,n,r,t)});return Object.defineProperties(c,{activeCount:{get:()=>r},pendingCount:{get:()=>n.size},clearQueue:{value(){if(!t){n.clear();return}let e=AbortSignal.abort().reason;for(;n.size>0;)n.dequeue().reject(e)}},concurrency:{get:()=>e,set(t){sh(t),e=t,queueMicrotask(()=>{for(;r<e&&n.size>0;)i()})}},map:{async value(e,t){let n=Array.from(e,(e,n)=>c(t,e,n));return Promise.all(n)}}}),c}function sh(e){if(!((Number.isInteger(e)||e===1/0)&&e>0))throw TypeError("Expected `concurrency` to be a number from 1 and up")}var ch=class{constructor(e){S(this,`queue`,void 0),S(this,`counter`,0),S(this,`pendingKeyToPriorityMap`,new Map),S(this,`pendingKeyToFnMap`,new Map),S(this,`pendingKeyToPromiseMap`,new Map),this.queue=oh(e)}clear(){this.pendingKeyToPromiseMap.forEach(e=>{e.reject(Error(`Queue::clear: called`))}),this.pendingKeyToPriorityMap.clear(),this.pendingKeyToFnMap.clear(),this.pendingKeyToPromiseMap.clear()}enqueue(e,t,n=1){this.counter=(this.counter+1)%(2**53-1);let r=`${e}_${this.counter}`;this.pendingKeyToPriorityMap.set(r,n),this.pendingKeyToFnMap.set(r,t);let i=new Ku;return this.pendingKeyToPromiseMap.set(r,i),this.queue(()=>this.process()),{key:r,promise:i.promise}}isProcessing(e){return!this.pendingKeyToFnMap.has(e)}async process(){let{fn:e,promise:t}=this.getNextItemToProcess();try{let n=await e();t.resolve(n)}catch(e){t.reject(e)}}getNextItemToProcess(){let[[e]]=[...this.pendingKeyToPriorityMap.entries()].toSorted(([,e],[,t])=>t-e),t=this.pendingKeyToFnMap.get(e),n=this.pendingKeyToPromiseMap.get(e);return this.pendingKeyToPriorityMap.delete(e),this.pendingKeyToFnMap.delete(e),this.pendingKeyToPromiseMap.delete(e),{key:e,fn:t,promise:n}}},lh=function(e){return e.ALL=`all`,e.OTHER=`other`,e.LOCAL_SOURCE=`localsourcelang`,e.PINNED=`pinned`,e.LAST_USED_SOURCE=`last_used_source`,e}({}),uh={all:{id:`BclIqb`},other:{id:`_IX_7x`},localsourcelang:{id:`_IX_7x`},pinned:{id:`kNiQp6`},last_used_source:{id:`JGvwnU`}};function dh(e){return xu(e)||{orgCode:e,isoCode:e,name:p._({id:`Ss_iYC`,values:{code:e}}),nativeName:p._({id:`Ss_iYC`,values:{code:e}})}}function fh(e){return Object.keys(uh).includes(e)?p._(uh[e]):dh(e).nativeName}var ph=e=>{let t=e.map(e=>dh(e)),n=Object.groupBy(t,e=>e.isoCode);return Object.entries(n).filter(([,e])=>!!e?.length).map(([,e])=>e[0].orgCode)},mh=e=>dh(e).isoCode,hh=e=>e.map(mh);function gh(){return[...Cu(),`all`]}var _h=(e,t,n)=>{let r=e===`all`,i=e===`other`||e===`localsourcelang`,a=t===`all`,o=t===`other`||t===`localsourcelang`;if(n){if(r||o)return-1;if(i||a)return 1}return fh(e).localeCompare(fh(t))},vh=(e,t)=>_h(e,t,!0),yh=function(e){return e[e.HIDDEN=0]=`HIDDEN`,e[e.STANDARD=1]=`STANDARD`,e}({}),bh=function(e){return e[e.AUTO=0]=`AUTO`,e[e.BOTTOM=1]=`BOTTOM`,e[e.LEFT=2]=`LEFT`,e[e.RIGHT=3]=`RIGHT`,e}({}),xh={2:2,3:3},Sh=function(e){return e[e.LTR=0]=`LTR`,e[e.RTL=1]=`RTL`,e}({}),Y=function(e){return e[e.SINGLE_PAGE=0]=`SINGLE_PAGE`,e[e.DOUBLE_PAGE=1]=`DOUBLE_PAGE`,e[e.CONTINUOUS_VERTICAL=2]=`CONTINUOUS_VERTICAL`,e[e.CONTINUOUS_HORIZONTAL=3]=`CONTINUOUS_HORIZONTAL`,e[e.WEBTOON=4]=`WEBTOON`,e}({}),Ch=function(e){return e[e.WIDTH=0]=`WIDTH`,e[e.HEIGHT=1]=`HEIGHT`,e[e.SCREEN=2]=`SCREEN`,e[e.ORIGINAL=3]=`ORIGINAL`,e}({}),wh=function(e){return e[e.AUTO=0]=`AUTO`,e[e.DESKTOP=1]=`DESKTOP`,e[e.MOBILE=2]=`MOBILE`,e}({}),Th=function(e){return e[e.PREVIOUS=0]=`PREVIOUS`,e[e.MANGA=1]=`MANGA`,e}({}),Eh=function(e){return e[e.THEME=0]=`THEME`,e[e.BLACK=1]=`BLACK`,e[e.GRAY=2]=`GRAY`,e[e.WHITE=3]=`WHITE`,e[e.AUTO=4]=`AUTO`,e}({}),Dh=function(e){return e.DEFAULT=`normal`,e.MULTIPLY=`multiply`,e.SCREEN=`screen`,e.OVERLAY=`overlay`,e.DARKEN=`darken`,e.LIGHTEN=`lighten`,e}({}),Oh=function(e){return e[e.TINY=10]=`TINY`,e[e.SMALL=25]=`SMALL`,e[e.MEDIUM=75]=`MEDIUM`,e[e.LARGE=95]=`LARGE`,e}({}),kh=function(e){return e[e.PREVIOUS_PAGE=0]=`PREVIOUS_PAGE`,e[e.NEXT_PAGE=1]=`NEXT_PAGE`,e[e.SCROLL_BACKWARD=2]=`SCROLL_BACKWARD`,e[e.SCROLL_FORWARD=3]=`SCROLL_FORWARD`,e[e.PREVIOUS_CHAPTER=4]=`PREVIOUS_CHAPTER`,e[e.NEXT_CHAPTER=5]=`NEXT_CHAPTER`,e[e.TOGGLE_MENU=6]=`TOGGLE_MENU`,e[e.CYCLE_SCALE_TYPE=7]=`CYCLE_SCALE_TYPE`,e[e.STRETCH_IMAGE=8]=`STRETCH_IMAGE`,e[e.OFFSET_SPREAD_PAGES=9]=`OFFSET_SPREAD_PAGES`,e[e.CYCLE_READING_MODE=10]=`CYCLE_READING_MODE`,e[e.CYCLE_READING_DIRECTION=11]=`CYCLE_READING_DIRECTION`,e[e.TOGGLE_AUTO_SCROLL=12]=`TOGGLE_AUTO_SCROLL`,e[e.AUTO_SCROLL_SPEED_INCREASE=13]=`AUTO_SCROLL_SPEED_INCREASE`,e[e.AUTO_SCROLL_SPEED_DECREASE=14]=`AUTO_SCROLL_SPEED_DECREASE`,e[e.EXIT_READER=15]=`EXIT_READER`,e}({}),Ah=function(e){return e[e.X=0]=`X`,e[e.Y=1]=`Y`,e}({}),jh=function(e){return e[e.NONE=0]=`NONE`,e[e.PREVIOUS=1]=`PREVIOUS`,e[e.NEXT=2]=`NEXT`,e[e.BOTH=3]=`BOTH`,e}({}),Mh=function(e){return e[e.START=0]=`START`,e[e.END=1]=`END`,e[e.LAST_READ=2]=`LAST_READ`,e}({}),X=a(),Nh=g((0,X.jsx)(`path`,{d:`M2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2 2 6.48 2 12m10-1h4v2h-4v3l-4-4 4-4z`}),`ArrowCircleLeft`),Ph=g((0,X.jsx)(`path`,{d:`M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10m-10 1H8v-2h4V8l4 4-4 4z`}),`ArrowCircleRight`),Fh=g((0,X.jsx)(`path`,{d:`m15 3 2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3zm6 12-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6zm12-6-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6z`}),`ZoomOutMap`),Ih=g((0,X.jsx)(`path`,{d:`M4 20h16v2H4zM4 2h16v2H4zm9 7h3l-4-4-4 4h3v6H8l4 4 4-4h-3z`}),`Expand`),Lh=g((0,X.jsx)(`path`,{d:`M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14zm-5.04-6.71-2.75 3.54-1.96-2.36L6.5 17h11z`}),`CropOriginal`),Rh=()=>(0,X.jsx)(y,{children:(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,children:[(0,X.jsx)(`path`,{fill:`none`,stroke:`currentColor`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`2`,d:`M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z`}),(0,X.jsx)(`path`,{fill:`none`,stroke:`currentColor`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`2`,d:`M13 2v7h7`})]})}),zh=()=>(0,X.jsx)(y,{children:(0,X.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,children:(0,X.jsx)(`path`,{fill:`none`,stroke:`currentColor`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`2`,d:`M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zm20 0h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z`})})}),Bh=()=>(0,X.jsx)(y,{children:(0,X.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,children:(0,X.jsx)(`path`,{fill:`none`,stroke:`currentColor`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`2`,d:`M20 2v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2m0 20v-6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6`})})}),Vh=()=>(0,X.jsx)(y,{children:(0,X.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,children:(0,X.jsx)(`path`,{fill:`none`,stroke:`currentColor`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`2`,d:`M22 20h-6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6M2 4h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2`})})}),Hh=function(e){return e[e.EDGE=0]=`EDGE`,e[e.KINDLE=1]=`KINDLE`,e[e.L_SHAPE=2]=`L_SHAPE`,e[e.RIGHT_LEFT=3]=`RIGHT_LEFT`,e[e.DISABLED=4]=`DISABLED`,e}({}),Uh=function(e){return e[e.MENU=0]=`MENU`,e[e.PREVIOUS=1]=`PREVIOUS`,e[e.NEXT=2]=`NEXT`,e}({}),Wh=()=>(0,X.jsx)(y,{children:(0,X.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,children:(0,X.jsx)(`path`,{fill:`none`,stroke:`currentColor`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`2`,d:`M20 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2m0 20v-8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8`})})}),Gh={min:.5,max:60,step:.5,default:5},Kh={min:5,max:100,default:Oh.LARGE,step:5},qh={min:2,max:20,step:1,default:4},Jh={min:1,max:20,default:5,step:1},Yh={min:0,max:20,default:5,step:1},Z={brightness:{min:5,max:200,step:1,default:100},contrast:{min:5,max:200,step:1,default:100},saturate:{min:0,max:200,step:1,default:100},hue:{min:0,max:200,step:1,default:0},rgba:{red:{min:0,max:255,step:1,default:0},green:{min:0,max:255,step:1,default:0},blue:{min:0,max:255,step:1,default:0},alpha:{min:0,max:100,step:1,default:0}}},Xh={[Sh.LTR]:`ltr`,[Sh.RTL]:`rtl`},Zh=Object.keys({overlayMode:void 0,exitMode:void 0,customFilter:void 0,shouldSkipDupChapters:void 0,shouldSkipFilteredChapters:void 0,progressBarType:void 0,progressBarSize:void 0,progressBarPosition:void 0,progressBarPositionAutoVertical:void 0,shouldShowPageNumber:void 0,isStaticNav:void 0,backgroundColor:void 0,useAutoBackgroundColorContinuousMode:void 0,hotkeys:void 0,imagePreLoadAmount:void 0,shouldUseAutoWebtoonMode:void 0,autoScroll:void 0,shouldShowReadingModePreview:void 0,shouldShowTapZoneLayoutPreview:void 0,shouldInformAboutMissingChapter:void 0,shouldInformAboutScanlatorChange:void 0,shouldWakeLockScreen:void 0,scrollAmount:void 0,shouldUseInfiniteScroll:void 0,shouldShowTransitionPage:void 0,safeAreaInset:void 0,shouldEnterFullscreen:void 0}),Qh={readerWidth:{value:50,enabled:!1},overlayMode:wh.AUTO,tapZoneLayout:Hh.RIGHT_LEFT,tapZoneInvertMode:{vertical:!1,horizontal:!1},progressBarType:yh.STANDARD,progressBarSize:qh.default,progressBarPosition:bh.AUTO,progressBarPositionAutoVertical:bh.RIGHT,pageScaleMode:Ch.ORIGINAL,shouldStretchPage:!1,shouldOffsetDoubleSpreads:!1,shouldSkipDupChapters:!0,shouldSkipFilteredChapters:!1,shouldShowPageNumber:!0,isStaticNav:!1,readingDirection:Sh.LTR,readingMode:Y.SINGLE_PAGE,exitMode:Th.PREVIOUS,backgroundColor:Eh.THEME,useAutoBackgroundColorContinuousMode:!1,customFilter:{brightness:{value:Z.brightness.default,enabled:!1},contrast:{value:Z.contrast.default,enabled:!1},saturate:{value:Z.saturate.default,enabled:!1},hue:{value:Z.hue.default,enabled:!1},rgba:{value:{red:Z.rgba.red.default,green:Z.rgba.green.default,blue:Z.rgba.blue.default,alpha:Z.rgba.alpha.default,blendMode:Dh.DEFAULT},enabled:!1},sepia:!1,grayscale:!1,invert:!1},pageGap:Yh.default,hotkeys:{[kh.PREVIOUS_PAGE]:[`arrowleft`,`a`],[kh.NEXT_PAGE]:[`arrowright`,`d`],[kh.SCROLL_BACKWARD]:[`arrowup`,`w`],[kh.SCROLL_FORWARD]:[`arrowdown`,`s`],[kh.PREVIOUS_CHAPTER]:[`comma`],[kh.NEXT_CHAPTER]:[`period`],[kh.TOGGLE_MENU]:[`m`],[kh.CYCLE_SCALE_TYPE]:[`i`],[kh.STRETCH_IMAGE]:[`f`],[kh.OFFSET_SPREAD_PAGES]:[`o`],[kh.CYCLE_READING_MODE]:[`r`],[kh.CYCLE_READING_DIRECTION]:[`t`],[kh.TOGGLE_AUTO_SCROLL]:[`space`],[kh.AUTO_SCROLL_SPEED_INCREASE]:[`b`],[kh.AUTO_SCROLL_SPEED_DECREASE]:[`v`],[kh.EXIT_READER]:[`c`]},imagePreLoadAmount:Jh.default,shouldUseAutoWebtoonMode:!0,autoScroll:{value:Gh.default,smooth:!0},shouldShowReadingModePreview:!0,shouldShowTapZoneLayoutPreview:!0,shouldInformAboutMissingChapter:!0,shouldInformAboutScanlatorChange:!0,shouldWakeLockScreen:!0,scrollAmount:Oh.LARGE,shouldUseInfiniteScroll:!0,shouldShowTransitionPage:!0,safeAreaInset:{top:!0,right:!0,bottom:!0,left:!0},shouldEnterFullscreen:!1},$h={[bh.BOTTOM]:`top`,[bh.LEFT]:`right`,[bh.RIGHT]:`left`,[bh.AUTO]:`left`},eg={[Sh.LTR]:{title:{id:`1zAee9`},icon:(0,X.jsx)(Ph,{})},[Sh.RTL]:{title:{id:`isgNhH`},icon:(0,X.jsx)(Nh,{})}},tg=Object.values(Sh).filter(e=>typeof e==`number`),ng={[Ch.WIDTH]:{title:{id:`vIxrEk`},icon:(0,X.jsx)(Ih,{sx:{transform:`rotate(90deg)`}})},[Ch.HEIGHT]:{title:{id:`YlDuro`},icon:(0,X.jsx)(Ih,{})},[Ch.SCREEN]:{title:{id:`vqvpvw`},icon:(0,X.jsx)(Fh,{})},[Ch.ORIGINAL]:{title:{id:`r3D_A0`},icon:(0,X.jsx)(Lh,{})}},rg=Object.values(Ch).filter(e=>typeof e==`number`),ig={[Ch.WIDTH]:!0,[Ch.HEIGHT]:!0,[Ch.SCREEN]:!0,[Ch.ORIGINAL]:!1},ag={[Y.SINGLE_PAGE]:{title:{id:`BGHHtQ`},icon:(0,X.jsx)(Rh,{})},[Y.DOUBLE_PAGE]:{title:{id:`hfcykS`},icon:(0,X.jsx)(zh,{})},[Y.CONTINUOUS_VERTICAL]:{title:{id:`Udw_N_`},icon:(0,X.jsx)(Bh,{})},[Y.CONTINUOUS_HORIZONTAL]:{title:{id:`r5ERag`},icon:(0,X.jsx)(Vh,{})},[Y.WEBTOON]:{title:{id:`xU2hUU`},icon:(0,X.jsx)(Wh,{})}},og=Object.values(Y).filter(e=>typeof e==`number`),sg=function(e){return e[e.LAYOUT=0]=`LAYOUT`,e[e.GENERAL=1]=`GENERAL`,e[e.FILTER=2]=`FILTER`,e[e.BEHAVIOUR=3]=`BEHAVIOUR`,e[e.HOTKEYS=4]=`HOTKEYS`,e}({}),cg={0:{id:0,label:{id:`rdU729`},supportsTouchDevices:!0},1:{id:1,label:{id:`Weq9zb`},supportsTouchDevices:!0},2:{id:2,label:{id:`ZU1pMB`},supportsTouchDevices:!0},3:{id:3,label:{id:`PnX_UF`},supportsTouchDevices:!0},4:{id:4,label:{id:`YeXRE0`},supportsTouchDevices:!1}},lg=Object.values(kh).filter(e=>typeof e==`number`),ug={[Eh.THEME]:`background.default`,[Eh.BLACK]:`common.black`,[Eh.GRAY]:`grey.200`,[Eh.WHITE]:`common.white`,[Eh.AUTO]:`background.default`},dg={[Y.SINGLE_PAGE]:v.Y,[Y.DOUBLE_PAGE]:v.Y,[Y.CONTINUOUS_VERTICAL]:v.Y,[Y.CONTINUOUS_HORIZONTAL]:v.X,[Y.WEBTOON]:v.Y},fg={[Dh.DEFAULT]:{title:{id:`ovBPCi`},icon:null},[Dh.MULTIPLY]:{title:{id:`pqULT-`},icon:null},[Dh.SCREEN]:{title:{id:`PnVUnz`},icon:null},[Dh.OVERLAY]:{title:{id:`c9uQvi`},icon:null},[Dh.DARKEN]:{title:{id:`x1nrTB`},icon:null},[Dh.LIGHTEN]:{title:{id:`zc1hRD`},icon:null}},pg=Object.values(Dh),mg={min:2,max:10,default:2,step:1},hg=function(e){return e[e.SOURCE_NAME=0]=`SOURCE_NAME`,e[e.MANGA_COUNT=1]=`MANGA_COUNT`,e}({}),gg=function(e){return e[e.ASC=0]=`ASC`,e[e.DESC=1]=`DESC`,e}({}),_g=function(e){return e.IDLE=`idle`,e.SELECT_SOURCE=`select_source`,e.SELECT_MANGAS=`select_mangas`,e.SELECTING_SOURCES=`selecting_sources`,e.SEARCHING=`searching`,e.MIGRATING=`migrating`,e}({}),Q=function(e){return e.SEARCH_PENDING=`search_pending`,e.SEARCHING=`searching`,e.SEARCH_COMPLETE=`search_complete`,e.SEARCH_FAILED=`search_failed`,e.SEARCH_ABORTED=`search_aborted`,e.SEARCH_OUTDATED=`search_outdated`,e.SEARCH_NO_MATCH=`search_no_match`,e.MIGRATION_PENDING=`migration_pending`,e.MIGRATING=`migrating`,e.MIGRATION_COMPLETE=`migration_complete`,e.MIGRATION_FAILED=`migration_failed`,e.MIGRATION_ABORTED=`migration_aborted`,e.EXCLUDED=`excluded`,e}({}),vg={[hg.SOURCE_NAME]:{id:`bEE6j4`},[hg.MANGA_COUNT]:{id:`NfWYfH`}},yg={[gg.ASC]:{id:`nYD_Cq`},[gg.DESC]:{id:`Cko536`}},bg={sortBy:hg.SOURCE_NAME,sortOrder:gg.ASC},xg=`migration_state`,Sg={phase:_g.IDLE,sourceIds:null,entries:{},destinationSourceIds:[],searchOptions:null,migrateOptions:null,startedAt:null,lastUpdatedAt:null,groupExpandState:{},isAborted:!1},Cg={[Q.SEARCH_PENDING]:{id:`X-eIAi`},[Q.SEARCHING]:{id:`SBTElJ`},[Q.SEARCH_COMPLETE]:{id:`eINaRS`},[Q.SEARCH_FAILED]:{id:`rg9pXu`},[Q.SEARCH_NO_MATCH]:{id:`PQ-3aC`},[Q.SEARCH_OUTDATED]:{id:`Qa_AVN`},[Q.SEARCH_ABORTED]:{id:`hG2g_b`},[Q.MIGRATION_PENDING]:{id:`X-eIAi`},[Q.MIGRATING]:{id:`i4pNZP`},[Q.MIGRATION_COMPLETE]:{id:`RAXstK`},[Q.MIGRATION_FAILED]:{id:`n-9S_a`},[Q.MIGRATION_ABORTED]:{id:`hG2g_b`},[Q.EXCLUDED]:{id:`KJ_eAL`}};Q.SEARCHING,Q.SEARCH_FAILED,Q.SEARCH_ABORTED,Q.SEARCH_NO_MATCH,Q.SEARCH_OUTDATED,Q.SEARCH_COMPLETE;var wg={[Q.SEARCHING]:!0,[Q.SEARCH_FAILED]:!1,[Q.SEARCH_ABORTED]:!1,[Q.SEARCH_NO_MATCH]:!1,[Q.SEARCH_OUTDATED]:!1,[Q.SEARCH_COMPLETE]:!1};Q.MIGRATING,Q.MIGRATION_FAILED,Q.MIGRATION_ABORTED,Q.SEARCH_NO_MATCH,Q.SEARCH_OUTDATED,Q.EXCLUDED,Q.MIGRATION_COMPLETE;var Tg={[Q.MIGRATING]:!0,[Q.MIGRATION_FAILED]:!1,[Q.MIGRATION_ABORTED]:!1,[Q.SEARCH_NO_MATCH]:!1,[Q.SEARCH_OUTDATED]:!1,[Q.EXCLUDED]:!1,[Q.MIGRATION_COMPLETE]:!1},Eg=function(e){return e.DISABLED=`disabled`,e.IMAGE=`image`,e.URL=`url`,e}({}),Dg=function(e){return e.DOWNLOAD=`download`,e.SERVE=`serve`,e}({}),Og={min:100,max:1e3,step:10,default:300},kg={deleteChaptersManuallyMarkedRead:!1,deleteChaptersWhileReading:0,deleteChaptersWithBookmark:!1,downloadAheadLimit:0,showAddToLibraryCategorySelectDialog:!0,ignoreFilters:!1,removeMangaFromCategories:!1,showTabSize:!1,showContinueReadingButton:!1,showDownloadBadge:!1,showUnreadBadge:!1,gridLayout:h.Compact,devices:[Bu],migrateChapters:!0,migrateCategories:!0,migrateTracking:!0,deleteChapters:!0,migrateMetadata:!0,migrateSortSettings:bg,hideLibraryEntries:!1,browseLanguages:gh(),showNsfw:!0,lastUsedSourceId:null,shouldShowOnlySourcesWithResults:!0,hideHistory:!1,updateProgressAfterReading:!0,updateProgressManualMarkRead:!1,webUIInformAvailableUpdate:!0,webUIInformVersionUpdated:!0,serverInformAvailableUpdate:!0,serverInformVersionUpdated:!0,locale:Cu()[0],appTheme:`default`,themeMode:Gu.SYSTEM,shouldUsePureBlackMode:!1,customThemes:{},mangaThumbnailBackdrop:!0,mangaDynamicColorSchemes:!0,mangaGridItemWidth:Og.default},Ag=[tf.None].concat(Object.values(tf).filter(e=>e!==tf.None)),jg={[tf.None]:{text:{id:`EdQY6l`},description:{id:`nwiFr7`},disclaimer:{id:`zdLrR0`}},[tf.BasicAuth]:{text:{id:`ckBGYp`},description:{id:`8zqc3q`}},[tf.SimpleLogin]:{text:{id:`ysBJPO`},description:{id:`VhSb67`},disclaimer:{id:`439FMi`}},[tf.UiLogin]:{text:{id:`Lnjlyi`},description:{id:`XrtrlG`}}},Mg=Ag.map(e=>[e,jg[e]]),Ng=Object.values(Tf),Pg={[Tf.Webui]:{text:{id:`GYkIV-`},description:{id:`RrMnZg`},disclaimer:{id:`B9SpzN`}},[Tf.Vui]:{text:{id:`9oNeZn`},description:{id:`AWVhNs`},disclaimer:{id:`B9SpzN`}},[Tf.Custom]:{text:{id:`8Tg_JR`},description:{id:`d7K7cY`}}},Fg=Ng.map(e=>[e,Pg[e]]),Ig=Object.values(wf),Lg={[wf.Bundled]:{text:{id:`gxG5Ip`},description:{id:`35wZc0`},disclaimer:{id:`B9SpzN`}},[wf.Stable]:{text:{id:`B6aXGH`},description:{id:`GISGGW`},disclaimer:{id:`B9SpzN`}},[wf.Preview]:{text:{id:`rdUucN`},description:{id:`-lc8Y0`},disclaimer:{id:`BccEk8`}}},Rg=Ig.map(e=>[e,Lg[e]]),zg=Object.values(Ef),Bg={[Ef.Browser]:{text:{id:`0DGrp8`},description:{id:`zudA94`}},[Ef.Electron]:{text:{id:`uXAo7w`},description:{id:`zudA94`}}},Vg=zg.map(e=>[e,Bg[e]]),Hg={default:K(12).hours.inWholeHours,min:K(6).hours.inWholeHours,max:K(1).months.inWholeHours},Ug={excludeUnreadChapters:{id:`h0KQmq`},excludeNotStarted:{id:`FAVjGr`},excludeCompleted:{id:`g5YzUQ`}},Wg={default:K(23).hours.inWholeHours,min:K(1).hours.inWholeHours,max:K(23).hours.inWholeHours},Gg={default:K(5).minutes.inWholeMinutes,min:K(1).minutes.inWholeMinutes,max:K(4).hours.inWholeMinutes},Kg={default:K(60).days.inWholeDays,min:K(1).days.inWholeDays,max:K(1).years.inWholeDays},qg={default:1e-15,min:1e-15,max:1,step:.05},Jg=Object.values(hf),Yg={[hf.Disabled]:{text:{id:`E_QGRL`}},[hf.KeepLocal]:{text:{id:`8HgsLv`}},[hf.KeepRemote]:{text:{id:`HRk2MA`}},[hf.Prompt]:{text:{id:`W9uQXX`}}},Xg=Jg.map(e=>[e,Yg[e]]),Zg=Object.values(mf),Qg={[mf.Binary]:{text:{id:`uDUdRI`}},[mf.Filename]:{text:{id:`GN6L5F`}}},$g=Zg.map(e=>[e,Qg[e]]),e_={min:0,max:1,step:.01},t_={min:K(10).seconds.inWholeSeconds,max:K(10).minutes.inWholeSeconds,step:K(10).seconds.inWholeSeconds},n_={min:K(10).seconds.inWholeSeconds,max:K(10).minutes.inWholeSeconds,step:K(10).seconds.inWholeSeconds},r_=Object.values(Eg),i_={[Eg.DISABLED]:{text:{id:`E_QGRL`}},[Eg.IMAGE]:{text:{id:`hG89Ed`},description:{id:`YBI4AK`}},[Eg.URL]:{text:{id:`IagCbF`},description:{id:`YBI4AK`}}},a_=r_.map(e=>[e,i_[e]]),o_=`default`,s_=`image/`,c_=`none`,l_={[Dg.DOWNLOAD]:{id:`yIl0jv`},[Dg.SERVE]:{id:`fgt8UH`}},u_={[Dg.DOWNLOAD]:`downloadConversions`,[Dg.SERVE]:`serveConversions`},d_={[K(0).seconds.asWholeMinutes.toISOString()]:{text:{id:`E_QGRL`}},[K(30).minutes.asWholeMinutes.toISOString()]:{text:{id:`zKvP6I`}},[K(1).hours.asWholeMinutes.toISOString()]:{text:{id:`Xfrnmo`}},[K(3).hours.asWholeMinutes.toISOString()]:{text:{id:`qfrNWm`}},[K(6).hours.asWholeMinutes.toISOString()]:{text:{id:`yNDqF2`}},[K(12).hours.asWholeMinutes.toISOString()]:{text:{id:`2QaVHA`}},[K(1).days.asWholeMinutes.toISOString()]:{text:{id:`U0sC6H`}},[K(7).days.asWholeMinutes.toISOString()]:{text:{id:`4XSc4l`}}},f_=K(10).days.asWholeMinutes.toISOString(),p_=Object.keys(d_),m_=p_.map(e=>[e,d_[e]]),h_=[...m_,[f_,{text:{id:`8Tg_JR`}}]],g_=[`includeServerSettings`,`includeClientData`],__={[bf.Success]:{id:`DFElxV`},[bf.SyncDisabled]:{id:`DrYM2Z`},[bf.SyncInProgress]:{id:`MYYxqs`}},v_={[xf.CreatingBackup]:{id:`LJp2_f`},[xf.Downloading]:{id:`9hg9mc`},[xf.Error]:{id:`SlfejT`},[xf.Merging]:{id:`MvRYlF`},[xf.Restoring]:{id:`oajJTs`},[xf.Started]:{id:`JEGlfK`},[xf.Success]:{id:`zzDlyQ`},[xf.Uploading]:{id:`_eguJc`}};function y_(e){if(e==null)throw Error(`Value is undefined or null`)}var b_=/^\[\d+(?:,\d+)*]$/g,x_=`webUI`,S_=(e,t)=>{if(e===`null`)return null;if(e!==`undefined`)return t(e)},C_=e=>e,w_=(e,t)=>Number.isNaN(+e)?t:+e,$=e=>e===`true`,T_=e=>S_(e,C_),E_=e=>S_(e,$),D_=(e,t)=>{let n=i(e)??t;return Array.isArray(n)||t==null?n:f(t,n)},O_={migration:{convert:w_},deleteChaptersManuallyMarkedRead:{convert:$},deleteChaptersWhileReading:{convert:w_},deleteChaptersWithBookmark:{convert:$},downloadAheadLimit:{convert:w_,toConstrainedValue:e=>e===0?e:d(e,mg.min,mg.max)},showAddToLibraryCategorySelectDialog:{convert:$},ignoreFilters:{convert:$},removeMangaFromCategories:{convert:$},showTabSize:{convert:$},devices:{convert:D_},migrateChapters:{convert:$},migrateCategories:{convert:$},migrateTracking:{convert:$},deleteChapters:{convert:$},migrateMetadata:{convert:$},migrateSortSettings:{convert:D_},hideLibraryEntries:{convert:$},updateProgressAfterReading:{convert:$},updateProgressManualMarkRead:{convert:$},webUIInformAvailableUpdate:{convert:$},webUIInformVersionUpdated:{convert:$},serverInformAvailableUpdate:{convert:$},serverInformVersionUpdated:{convert:$},readerWidth:{convert:D_},savedSearches:{convert:D_},showContinueReadingButton:{convert:$},showDownloadBadge:{convert:$},showUnreadBadge:{convert:$},gridLayout:{convert:w_},sortBy:{convert:T_},sortDesc:{convert:E_},hasDownloadedChapters:{convert:E_},hasBookmarkedChapters:{convert:E_},hasUnreadChapters:{convert:E_},hasReadChapters:{convert:E_},hasDuplicateChapters:{convert:E_},hasTrackerBinding:{convert:D_},hasStatus:{convert:D_},hasSource:{convert:D_},customThemes:{convert:D_},mangaThumbnailBackdrop:{convert:$},mangaDynamicColorSchemes:{convert:$},tapZoneLayout:{convert:w_},tapZoneInvertMode:{convert:D_},readingDirection:{convert:w_},progressBarType:{convert:w_},progressBarSize:{convert:w_,toConstrainedValue:e=>d(e,qh.min,qh.max)},progressBarPosition:{convert:w_},progressBarPositionAutoVertical:{convert:w_},readingMode:{convert:w_},pageScaleMode:{convert:w_},shouldOffsetDoubleSpreads:{convert:$},exitMode:{convert:w_},customFilter:{convert:D_,toConstrainedValue:e=>({...e,brightness:{...e.brightness,value:d(e.brightness.value,Z.brightness.min,Z.brightness.max)},contrast:{...e.contrast,value:d(e.contrast.value,Z.contrast.min,Z.contrast.max)},saturate:{...e.saturate,value:d(e.saturate.value,Z.saturate.min,Z.saturate.max)},hue:{...e.hue,value:d(e.hue.value,Z.hue.min,Z.hue.max)},rgba:{...e.rgba,value:{...e.rgba.value,red:d(e.rgba.value.red,Z.rgba.red.min,Z.rgba.red.max),green:d(e.rgba.value.green,Z.rgba.green.min,Z.rgba.green.max),blue:d(e.rgba.value.blue,Z.rgba.blue.min,Z.rgba.blue.max),alpha:d(e.rgba.value.alpha,Z.rgba.alpha.min,Z.rgba.alpha.max)}}})},shouldSkipDupChapters:{convert:$},shouldSkipFilteredChapters:{convert:$},isStaticNav:{convert:$},overlayMode:{convert:w_},shouldStretchPage:{convert:$},shouldShowPageNumber:{convert:$},backgroundColor:{convert:w_},useAutoBackgroundColorContinuousMode:{convert:$},pageGap:{convert:w_,toConstrainedValue:e=>d(e,Yh.min,Yh.max)},hotkeys:{convert:D_},imagePreLoadAmount:{convert:w_,toConstrainedValue:e=>d(e,Jh.min,Jh.max)},shouldUseAutoWebtoonMode:{convert:$},autoScroll:{convert:D_,toConstrainedValue:e=>({...e,value:d(e.value,Gh.min,Gh.max)})},shouldShowReadingModePreview:{convert:$},shouldShowTapZoneLayoutPreview:{convert:$},shouldInformAboutMissingChapter:{convert:$},shouldInformAboutScanlatorChange:{convert:$},shouldWakeLockScreen:{convert:$},hideHistory:{convert:$},scrollAmount:{convert:w_,toConstrainedValue:e=>d(e,Kh.min,Kh.max)},reverse:{convert:$},bookmarked:{convert:E_},downloaded:{convert:E_},unread:{convert:E_},showChapterNumber:{convert:$},browseLanguages:{convert:D_},showNsfw:{convert:$},shouldUseInfiniteScroll:{convert:$},shouldShowTransitionPage:{convert:$},appTheme:{convert:C_},themeMode:{convert:C_},shouldUsePureBlackMode:{convert:$},mangaGridItemWidth:{convert:w_,toConstrainedValue:e=>d(e,Og.min,Og.max)},isPinned:{convert:$},isEnabled:{convert:$},lastUsedSourceId:{convert:C_},shouldShowOnlySourcesWithResults:{convert:$},excludedScanlators:{convert:D_},notes:{convert:C_},locale:{convert:C_,toConstrainedValue:e=>{let t=xu(e)?.isoCode;return!t||!ku.includes(t)?Tu():t}},safeAreaInset:{convert:D_},shouldEnterFullscreen:{convert:$}},k_=Object.keys(O_),A_=`migration.deleteChaptersManuallyMarkedRead.deleteChaptersWhileReading.deleteChaptersWithBookmark.showAddToLibraryCategorySelectDialog.ignoreFilters.removeMangaFromCategories.showTabSize.hasDownloadedChapters.hasBookmarkedChapters.hasUnreadChapters.hasReadChapters.hasDuplicateChapters.hasTrackerBinding.hasStatus.hasSource.sortBy.sortDesc.showDownloadBadge.showUnreadBadge.showTabSize.showContinueReadingButton.devices.migrateChapters.migrateCategories.migrateTracking.deleteChapters.migrateMetadata.migrateSortSettings.hideLibraryEntries.browseLanguages.showNsfw.lastUsedSourceId.shouldShowOnlySourcesWithResults.hideHistory.updateProgressAfterReading.updateProgressManualMarkRead.webUIInformAvailableUpdate.webUIInformVersionUpdated.serverInformAvailableUpdate.serverInformVersionUpdated.savedSearches.isPinned.isEnabled.locale.customThemes.mangaThumbnailBackdrop.mangaDynamicColorSchemes.exitMode.shouldSkipDupChapters.shouldSkipFilteredChapters.hotkeys.shouldShowTransitionPage.reverse.bookmarked.downloaded.unread.showChapterNumber.excludedScanlators.notes`.split(`.`),j_=[{keys:[{oldKey:`loadNextonEnding`,newKey:`loadNextOnEnding`}]},{keys:[{oldKey:`deleteChaptersAutoMarkedRead`,newKey:`deleteChaptersWhileReading`}]},{keys:[{oldKey:`readerType`,newKey:`readingMode`},{oldKey:`offsetFirstPage`,newKey:`shouldOffsetDoubleSpreads`},{oldKey:`fitPageToWindow`,newKey:`pageScaleMode`},{oldKey:`scalePage`,newKey:`shouldStretchPage`},{oldKey:`skipDupChapters`,newKey:`shouldSkipDupChapters`},{oldKey:`showPageNumber`,newKey:`shouldShowPageNumber`},{oldKey:`staticNav`,newKey:`isStaticNav`}],values:[{key:`readerType`,oldValue:`ContinuesVertical`,newValue:`${Y.CONTINUOUS_VERTICAL}`},{key:`readerType`,oldValue:`Webtoon`,newValue:`${Y.WEBTOON}`},{key:`readerType`,oldValue:`SingleRTL`,newValue:`${Y.SINGLE_PAGE}`},{key:`readerType`,oldValue:`SingleLTR`,newValue:`${Y.SINGLE_PAGE}`},{key:`readerType`,oldValue:`DoubleRTL`,newValue:`${Y.DOUBLE_PAGE}`},{key:`readerType`,oldValue:`DoubleLTR`,newValue:`${Y.DOUBLE_PAGE}`},{key:`readerType`,oldValue:`ContinuesHorizontalLTR`,newValue:`${Y.CONTINUOUS_HORIZONTAL}`},{key:`readerType`,oldValue:`ContinuesHorizontalRTL`,newValue:`${Y.CONTINUOUS_HORIZONTAL}`},{key:`fitPageToWindow`,oldValue:`false`,newValue:`${Ch.ORIGINAL}`},{key:`fitPageToWindow`,oldValue:`true`,newValue:`${Ch.SCREEN}`},{key:`readerWidth`,oldValue:/^[0-9]+$/g,newValue:e=>JSON.stringify({value:Number(e),enabled:!0})}]},{deleteKeys:[`pageScaleMode`,`shouldStretchPage`,`readerWidth`]},{values:[{key:`progressBarPositionAutoVertical`,oldValue:`-1`,newValue:`${Qh.progressBarPositionAutoVertical}`},{key:`progressBarPosition`,oldValue:`0`,newValue:`${bh.BOTTOM}`},{key:`progressBarPosition`,oldValue:`1`,newValue:`${bh.LEFT}`},{key:`progressBarPosition`,oldValue:`2`,newValue:`${bh.RIGHT}`}]},{values:[{key:`sourceLanguages`,oldValue:/^\[.*]$/g,newValue:(e,t,n)=>{let r=n[t.replace(`sourceLanguages`,`extensionLanguages`)],i=D_(e,[]),a=D_(r,[]);return JSON.stringify(ph([...i,...a]))}}],keys:[{oldKey:`sourceLanguages`,newKey:`browseLanguages`}],deleteKeys:[`sourceLanguages`,`extensionLanguages`]},{values:[...[`pageScaleMode`,`readingDirection`,`readingMode`,`tapZoneLayout`].map(e=>({key:e,oldValue:b_,newValue:e=>{let t=i(e);return y_(t),JSON.stringify(t[0])}}))]},{values:[{key:`browseLanguages`,oldValue:/^\[.*]$/g,newValue:e=>{let t=D_(e,[]).map(e=>xu(e)?.isoCode??e);return JSON.stringify(t)}}]}],M_=[...j_.reduce((e,t)=>(t.appKeyPrefix?.oldPrefix&&e.add(t.appKeyPrefix.oldPrefix),e),new Set),x_],N_=e=>e.split(`_`).slice(-1)[0],P_=(e,t)=>`${t.join(`_`)}_${e}`,F_=(e,t=[],n=x_)=>P_(e,[n,...A_.includes(e)?[]:[Hu()],...t].filter(e=>e.toLowerCase()!=="default")),I_=(e,t)=>Object.prototype.hasOwnProperty.call(e??{},t),L_=(e,t=[],n=x_)=>{let r={};return Object.entries(e).forEach(([e,i])=>{e.startsWith([n,...t].join(`_`))&&(r[e]=i)}),r},R_=(e,t,n)=>O_[e].convert(t,n),z_=(e,t=()=>!0)=>{if(!e)return;let n={};return e.forEach(({key:e,value:r})=>{t(e)&&(n[e]=r)}),n},B_=e=>{if(e)return Object.entries(e).map(([e,t])=>({key:e,value:t}))},V_=class{static getChunkLengthKey(e){return`${e}_length`}static getChunkIndexKey(e,t){return`${e}_${t}`}static isChunkedInMetadata(e,t){return e?I_(e,this.getChunkLengthKey(t)):!1}static getExistingChunkCount(e,t){if(!e)return 0;let n=this.getChunkLengthKey(t);if(!I_(e,n))return 0;let r=Number(e[n]);return Number.isNaN(r)?0:r}static getStaleChunkKeyCount(e,t){if(!e)return 0;let n=r=>I_(e,this.getChunkIndexKey(t,r))?n(r+1):r;return n(this.getExistingChunkCount(e,t))}static reassembleChunkedValue(e,t){let n=this.getExistingChunkCount(e,t);if(!(n<=0))return Array(n).fill(1).reduce((n,r,i)=>{if(n===void 0)return;let a=this.getChunkIndexKey(t,i);if(I_(e,a))return`${n}${e[a]}`},``)}static reassembleAllChunkedValues(e){if(e===void 0)return;let t=new Set,n=Object.entries(e).map(([n])=>{if(!n.endsWith(`_length`))return null;let r=n.slice(0,-7),i=Number(e[n]);if(Number.isNaN(i)||i<=0)return null;let a=this.reassembleChunkedValue(e,r);if(a===void 0)return null;t.add(n);for(let e=0;e<i;e++)t.add(this.getChunkIndexKey(r,e));return[r,a]}).filter(e=>e!==null),r=Object.entries(e).map(([e,n])=>t.has(e)?null:[e,n]).filter(e=>e!==null);return Object.fromEntries([...r,...n])}static chunkValue(e,t){if(t.length<=this.MAX_METADATA_VALUE_LENGTH)return[{key:e,value:t}];let n=[],r=0,i=0;for(;r<t.length;){let a=t.substring(r,r+this.MAX_METADATA_VALUE_LENGTH);n.push({key:this.getChunkIndexKey(e,i),value:a}),r+=this.MAX_METADATA_VALUE_LENGTH,i+=1}return n.push({key:this.getChunkLengthKey(e),value:`${i}`}),n}static computeChunkDeletions(e,t,n){if(!e)return[];let r=n>0,i=I_(e,t),a=I_(e,this.getChunkLengthKey(t)),o=this.getStaleChunkKeyCount(e,t),s=[];i&&r&&s.push(t),a&&!r&&s.push(this.getChunkLengthKey(t));let c=r?n:0;for(let e=c;e<o;e++)s.push(this.getChunkIndexKey(t,e));return s}static getExistingMetadata(e,t){if(t===`global`&&e.meta===void 0){let e=RC.graphQLClient.client.readQuery({query:kf});return e?z_(e.metas.nodes):void 0}return z_(e.meta)}};S(V_,`MAX_METADATA_VALUE_LENGTH`,4e3);var H_=(e,t,{update:n=[],delete:r=[],migrate:i=[],keyPrefixes:a,isMetadataKey:o=!1})=>{if(i?.length>1||i?.length===1&&i[0][0]!==`migration`)throw Error(`requestMetadataUpdate: "migrate" option must only contain a single key-value pair with the key "migration"`);let s=V_.getExistingMetadata(e,t),c=[],l=[];return n.forEach(([e,t])=>{let n=o?e:F_(e,a),r=`${t}`,i=V_.chunkValue(n,r);if(c.push(...i),s){let e=i.length-1;l.push(...V_.computeChunkDeletions(s,n,e))}else i.length>1||l.push(V_.getChunkLengthKey(n))}),r.forEach(e=>{let t=o?e:F_(e,a);l.push(t),l.push(...V_.computeChunkDeletions(s,t,0))}),{updateMetas:c,postUpdateDeleteKeys:[...new Set(l)],migrateMetas:i.map(([e,t])=>({key:F_(e,a),value:`${t}`}))}},U_=e=>{let t=new Map,n=new Map,r=new Map;for(let i of e){let{id:e}=i.metadataHolder;if(i.updateMetas.length>0){let n=JSON.stringify(i.updateMetas),r=t.get(n);r?r.ids.push(e):t.set(n,{ids:[e],metas:i.updateMetas})}if(i.postUpdateDeleteKeys.length>0){let t=JSON.stringify(i.postUpdateDeleteKeys),r=n.get(t);r?r.ids.push(e):n.set(t,{ids:[e],keys:i.postUpdateDeleteKeys})}if(i.migrateMetas.length>0){let t=JSON.stringify(i.migrateMetas),n=r.get(t);n?n.ids.push(e):r.set(t,{ids:[e],metas:i.migrateMetas})}}return{updateGroups:[...t.values()],postUpdateDeleteGroups:[...n.values()],migrateGroups:[...r.values()]}},W_=(e,t)=>{let{updateGroups:n,postUpdateDeleteGroups:r,migrateGroups:i}=U_(e);return{preUpdateDeleteInput:{items:[]},updateInput:{items:n.map(({ids:e,metas:n})=>({[t]:e,metas:n}))},postUpdateDeleteInput:{items:r.map(({ids:e,keys:n})=>({[t]:e,keys:n}))},migrateInput:{items:i.map(({ids:e,metas:n})=>({[t]:e,metas:n}))}}},G_=async(e,t)=>{if(t.length===0)return;let n=t.flatMap(({metadataHolders:t,options:n})=>t.map(t=>({metadataHolder:t,...H_(t,e,n)})));switch(e){case`global`:{let e=n.filter(({updateMetas:e})=>e.length>0),t=n.filter(({postUpdateDeleteKeys:e})=>e.length>0),r=n.filter(({migrateMetas:e})=>e.length>0);await RC.updateGlobalMeta({preUpdateDeleteInput:{keys:[]},updateInput:{metas:e.flatMap(({updateMetas:e})=>e)},postUpdateDeleteInput:{keys:t.flatMap(({postUpdateDeleteKeys:e})=>e)},migrateInput:{metas:r.flatMap(({migrateMetas:e})=>e)}}).response;break}case`category`:await RC.updateCategoryMeta(W_(n,`categoryIds`)).response;break;case`chapter`:await RC.updateChapterMeta(W_(n,`chapterIds`)).response;break;case`manga`:await RC.updateMangaMeta(W_(n,`mangaIds`)).response;break;case`source`:await RC.updateSourceMeta(W_(n,`sourceIds`)).response;break;default:throw Error(`requestBatchMetadataUpdate: unknown holderType "${e}"`)}},K_=async e=>G_(`global`,e.map(({options:e})=>({metadataHolders:[{}],options:e}))),q_=async e=>G_(`manga`,e.map(({mangas:e,options:t})=>({metadataHolders:e,options:t}))),J_=async e=>G_(`chapter`,e.map(({chapters:e,options:t})=>({metadataHolders:e,options:t}))),Y_=async e=>G_(`category`,e.map(({categories:e,options:t})=>({metadataHolders:e,options:t}))),X_=async e=>G_(`source`,e.map(({sources:e,options:t})=>({metadataHolders:e,options:t}))),Z_=async e=>K_([{options:e}]),Q_=async(e,t)=>q_([{mangas:[e],options:t}]),$_=async(e,t)=>J_([{chapters:[e],options:t}]),ev=async(e,t)=>Y_([{categories:[e],options:t}]),tv=async(e,t)=>X_([{sources:[e],options:t}]),nv=(e,t)=>{switch(e){case`global`:return e=>Z_(e);case`manga`:return e=>Q_({id:t.id,meta:B_(t.meta)},e);case`chapter`:return e=>$_({id:t.id,meta:B_(t.meta)},e);case`category`:return e=>ev({id:t.id,meta:B_(t.meta)},e);case`source`:return e=>tv({id:t.id,meta:B_(t.meta)},e);default:throw Error(`Unexpected "type" (${e})`)}},rv=e=>j_.slice(0,e).reverse().find(e=>!!e.appKeyPrefix)?.appKeyPrefix?.newPrefix??`webUI`,iv=(e,t)=>{let n={...e};if(!t.appKeyPrefix)return n;let{oldPrefix:r,newPrefix:i}=t.appKeyPrefix,a=L_(e,void 0,r);return Object.keys(a).forEach(e=>{let t=e.replace(r,i);n[t]=a[e]}),n},av=(e,t,n)=>{let r={...e};if(!t.values)return r;let i=L_(e,void 0,n);return t.values.forEach(({key:t,oldValue:n,newValue:a})=>{let o=t=>{(n===void 0&&e[t]===n||n!==void 0&&e[t].match(n))&&(r[t]=typeof a==`function`?a(e[t],t,i):a)},s=t===void 0;Object.keys(i).forEach(e=>{(s||e.endsWith(t))&&o(e)})}),r},ov=(e,t,n)=>{let r={...e};if(!t.keys)return r;let i=L_(e,void 0,n);return t.keys.forEach(({oldKey:e,newKey:t})=>{Object.keys(i).forEach(n=>{if(!n.endsWith(e))return;let a=n.split(`_`),o=`${a.slice(0,a.length-1).join(`_`)}_${t}`;r[o]=i[n]})}),r},sv=(e,t,n)=>{let r={};if(!t.deleteKeys)return{...e};let i=L_(e,void 0,n);return Object.keys(i).forEach(e=>{t.deleteKeys?.includes(N_(e))||(r[e]=i[e])}),r},cv=(e,t)=>{if(!e)return[];let n=j_.slice(t).reduce((e,t)=>{let n=t.appKeyPrefix?.oldPrefix;return n?[...e,n]:e},[]),r=j_.slice(t).reduce((e,t)=>[...e,...t.deleteKeys??[]],[]);return Object.keys(e).filter(e=>{let[t]=e.split(`_`);if(![...n,`webUI`].includes(t))return!1;if(n.includes(t))return!0;let i=N_(e);return r.includes(i)?!0:!k_.includes(i)})},lv=(e,t,n,r)=>{if(!e)return[];let i=j_.slice(r).reduce((e,t)=>{if(!t.keys)return e;let n=t.keys.map(({newKey:e})=>e).filter(e=>e!==void 0);return[...e,...n]},[]);return Object.keys(t).filter(t=>{let r=N_(t),a=i.includes(r),o=n.includes(r);return!Object.hasOwn(e,t)&&a&&!o})},uv=(e,t,n)=>{if(!e)return[];let r=j_.slice(n).reduce((t,n)=>{let r=Object.keys(e).filter(t=>n.values?.some(({key:n,oldValue:r})=>{let i=e[t],a=!n,o=r instanceof RegExp?i.match(r):i===r;return(a||t.endsWith(n))&&o}));return[...t,...r]},[]);return[...new Set([...r.filter(e=>!t.includes(e))])]},dv=new Set,fv=(e,t,n,r=e=>e())=>{let i=t?.meta,a=V_.reassembleAllChunkedValues(i),o=Number(a?.[F_(`migration`)]??1),s=cv(a,o),c=lv(a,n,s,o),l=uv(a,[...s,...c],o),u=[...c,...l].map(e=>[e,n[e]]),d=s.flatMap(e=>{if(i&&V_.isChunkedInMetadata(i,e)){let t=V_.getExistingChunkCount(i,e),n=Array.from({length:t},(t,n)=>V_.getChunkIndexKey(e,n));return[V_.getChunkLengthKey(e),...n]}return[e]}),f=nv(e,t??{id:-1,meta:{}});r(()=>{(async()=>{let n=`${e}_${e===`global`?``:t?.id}`;if(!dv.has(n)&&!(!a||o>=j_.length)){dv.add(n);try{await f({update:u,delete:d,migrate:[[`migration`,j_.length]],isMetadataKey:!0})}catch(r){dv.delete(n),Wu(`MetadataMigrations#commitMigrateMetadata(${e}, ${t?.id})`)(r)}}})()})},pv=(e,t,n=e=>e())=>{let r=t?.meta??{},i=V_.reassembleAllChunkedValues(r)??{},a=F_(`migration`),o=Number.isNaN(Number(i[a]))?0:Math.max(0,Number(i[a])),s=j_.slice(o).reduce((e,t,n)=>{let r=rv(n+1);return sv(ov(av(iv(e,t),t,r),t,r),t,r)},i);return fv(e,t,s,n),s},mv=class{static getCacheKey(e,t,n){return`${e}::${t??``}::${n}`}static getCachedValue(e,t,n){return this.convertedValueByKey.get(this.getCacheKey(e,t,n))}static getStableValue(e,t,n,r,i){let a=this.getCacheKey(e,t,n),o=this.rawValueByKey.get(a),s=this.getCachedValue(e,t,n);return o!==void 0&&r===o?s:(this.rawValueByKey.set(a,r),this.convertedValueByKey.set(a,i),i)}};S(mv,`convertedValueByKey`,new Map),S(mv,`rawValueByKey`,new Map);var hv=(e,t)=>{switch(e){case`global`:return;case`manga`:return t.id;case`chapter`:return t.id;case`category`:return t.id;case`source`:return t.id;default:return}},gv=(e,t,n)=>{if(e===void 0)return;let r=F_(t,n);if(I_(e,r)&&e[r]!==void 0)return e[r];if(V_.isChunkedInMetadata(e,r))return V_.reassembleChunkedValue(e,r)},_v=(e,t,n,r)=>{let i=gv(e,t,r);if(i===void 0)return n;let a=R_(t,i,n);return O_[t].toConstrainedValue?.(a)??a};function vv(e,t,n,r,i=e=>e()){let a=pv(e,t,i),o={},s=hv(e,t);return Object.entries(n).forEach(([t,n])=>{let i=gv(a,t,r),c=_v(a,t,n,r);o[t]=mv.getStableValue(e,s,F_(t,r),i,c)}),o}var yv={savedSearches:void 0,isPinned:!1,isEnabled:!0},bv=e=>({...e,savedSearches:e.savedSearches?JSON.stringify(e.savedSearches):void 0}),xv=(e,t)=>vv(`source`,{...e,meta:z_(e.meta)},yv,void 0,t),Sv=e=>xv(e),Cv=e=>{let t=xv(e,q.useEffect);return(0,q.useMemo)(()=>t,[e])},wv=async(e,t,n)=>tv(e,{update:[[t,bv({[t]:n})[t]]]}),Tv=async e=>X_(e.map(({sources:e,update:t,delete:n})=>({sources:e,options:{update:t?.map(({key:e,value:t})=>[e,bv({[e]:t})[e]]),delete:n}}))),Ev=(e,t=Wu(`createUpdateSourceMetadata`))=>(n,r)=>wv(e,n,r).catch(t),Dv=function(e){return e.UPDATE=`UPDATE`,e.UNINSTALL=`UNINSTALL`,e.INSTALL=`INSTALL`,e}({}),Ov=function(e){return e.OBSOLETE=`OBSOLETE`,e.UPDATING=`UPDATING`,e.UNINSTALLING=`UNINSTALLING`,e.INSTALLING=`INSTALLING`,e}({}),kv={...Dv,...Ov},Av=function(e){return e.INSTALLED=`INSTALLED`,e.UPDATE_PENDING=`UPDATE_PENDING`,e.OBSOLETE=`OBSOLETE`,e}({}),jv={[Dv.UPDATE]:Ov.UPDATING,[Dv.UNINSTALL]:Ov.UNINSTALLING,[Dv.INSTALL]:Ov.INSTALLING},Mv={[Dv.UPDATE]:Dv.UNINSTALL,[Dv.UNINSTALL]:Dv.INSTALL,[Dv.INSTALL]:Dv.UNINSTALL},Nv={[kv.UNINSTALL]:{id:`fo0VXg`},[kv.INSTALL]:{id:`TKQ7K-`},[kv.UPDATE]:{id:`EkH9pt`},[kv.OBSOLETE]:{id:`fo0VXg`},[kv.UPDATING]:{id:`JL3si7`},[kv.UNINSTALLING]:{id:`ApzjxN`},[kv.INSTALLING]:{id:`Wtw22s`}},Pv={[Dv.UPDATE]:{id:`iM9yOn`},[Dv.INSTALL]:{id:`mWouW_`},[Dv.UNINSTALL]:{id:`hkyq0q`}},Fv={[Av.INSTALLED]:{id:`eQkgKV`},[Av.UPDATE_PENDING]:{id:`ardOlT`},[Av.OBSOLETE]:{id:`l4sJpX`},[lh.ALL]:{id:`BclIqb`},[lh.OTHER]:{id:`_IX_7x`},[lh.LOCAL_SOURCE]:{id:`_IX_7x`},[lh.PINNED]:{id:`kNiQp6`},[lh.LAST_USED_SOURCE]:{id:`JGvwnU`}},Iv=e=>e.toLowerCase().trim(),Lv=e=>Iv(e).normalize(`NFKC`).replaceAll(/[^\p{L}\p{N}]+/gu,` `).trim(),Rv=(e,t=``)=>e.split(t).reverse().join(t),zv=(e,t,n)=>n.repeat(t)+e,Bv=e=>e!==sf.Safe,Vv=(e,t,n)=>t?kv.OBSOLETE:n?kv.UPDATE:e?kv.UNINSTALL:kv.INSTALL,Hv=e=>[Av.INSTALLED,Av.UPDATE_PENDING,Av.OBSOLETE].includes(e),Uv=e=>[lh.PINNED,lh.LAST_USED_SOURCE].includes(e),Wv=e=>Hv(e)||Uv(e)||[lh.ALL,lh.OTHER,lh.LOCAL_SOURCE].includes(e),Gv=e=>Wv(e)?p._(Fv[e]):fh(e);function Kv(e){let t=Object.groupBy(e,e=>e.isInstalled?e.hasUpdate&&!e.isObsolete?Av.UPDATE_PENDING:Av.INSTALLED:e.lang);return Object.entries(t).toSorted(([e],[t])=>{let n=Object.values(Av),r=n.includes(e),i=Av.OBSOLETE===e,a=Av.UPDATE_PENDING===e,o=n.includes(t),s=Av.OBSOLETE===t,c=Av.UPDATE_PENDING===t;return i||r&&!o||a&&!s?-1:s||!r&&o||!a&&c?1:vh(e,t)}).map(([e,t])=>[e,(t??[]).toSorted((e,t)=>e.name.localeCompare(t.name))]).filter(([,e])=>!!e.length)}var qv=e=>[...new Set(e.map(e=>e.lang))],Jv=(e,{selectedLanguages:t,showNsfw:n,query:r}={})=>{let i=hh(ph(t??[]));return e.filter(e=>!t||i.includes(mh(e.lang))||e.isInstalled).filter(e=>n===void 0||n||!Bv(e.contentWarning)).filter(e=>r==null||Lv(e.name).includes(Lv(r)))},Yv=async(e,t,n)=>{try{switch(n){case Dv.INSTALL:await RC.updateExtension(e,{install:!0,isObsolete:t}).response;break;case Dv.UNINSTALL:await RC.updateExtension(e,{uninstall:!0,isObsolete:t}).response;break;case Dv.UPDATE:await RC.updateExtension(e,{update:!0,isObsolete:t}).response;break;default:throw Error(`Unexpected ExtensionAction "${n}"`)}}catch(e){throw c(p.t({...Pv[n],values:{count:1}}),`error`,r(e)),e}},Xv=Object.freeze({}),Zv=Object.freeze([]),Qv=class e{static getIds(e){return e.map(e=>e.id)}static getFromCache(e,t=Jf,n=`SOURCE_BASE_FIELDS`){return RC.graphQLClient.client.cache.readFragment({id:RC.graphQLClient.client.cache.identify({__typename:`SourceType`,id:e}),fragment:t,fragmentName:n})}static isLocalSource(t){return t.id===e.LOCAL_SOURCE_ID}static getLanguage(t){return e.isLocalSource(t)?lh.OTHER:t.lang}static getLanguages(t,{excludeLocalSource:n=!1}={}){let r=n?t.filter(t=>!e.isLocalSource(t)):t;return[...new Set(r.map(e.getLanguage))]}static groupByLanguage(t,{withPinnedGroup:n=!1}={}){let r=Object.groupBy(t,t=>n&&Sv(t).isPinned?lh.PINNED:e.getLanguage(t)),i=Object.entries(r).toSorted(([e],[t])=>{let r=e===lh.PINNED,i=t===lh.PINNED;return n&&r?-1:n&&i?1:vh(e,t)}).map(([e,t])=>[e,(t??[]).toSorted((e,t)=>e.displayName.localeCompare(t.displayName))]);return Object.fromEntries(i)}static filter(t,{isNsfw:n,languages:r,keepLocalSource:i,pinned:a,enabled:o,removeLocalSource:s}={}){let c=hh(ph(r??[]));return[[n,!0,e=>Bv(e.contentWarning)===n],[r,!0,t=>c.includes(mh(e.getLanguage(t)))],[a,!0,e=>Sv(e).isPinned===a],[o,!0,e=>Sv(e).isEnabled===o],[s,!1,t=>!s||!e.isLocalSource(t)]].reduce((t,[n,r,a])=>n===void 0?t:t.filter(t=>a(t)||r&&i&&e.isLocalSource(t)),t)}static areFromMultipleStores(t){let n=t.find(e=>!!e.extension.storeIndexUrl)?.extension.storeIndexUrl;return!n||!t.length?!1:t.some(t=>t.extension.storeIndexUrl!==n&&!e.isLocalSource(t))}static getLastUsedSource(e,t){return t.find(t=>t.id===e)}static useLanguages(){let{i18n:e,_:t}=_(),{settings:{browseLanguages:n}}=VC(),i=WC(t=>c(e._({id:`cBoXe4`}),`error`,r(t)));return{languages:n,setLanguages:(0,q.useCallback)(e=>i(`browseLanguages`,e),[])}}static useGetMigratableSources({sortBy:e,sortOrder:t}={sortBy:hg.SOURCE_NAME,sortOrder:gg.ASC}){let n=RC.useGetMigratableSources(),r=n.data?.mangas.nodes??Zv;if(!r)return{sources:Zv,request:n};let i=(0,q.useMemo)(()=>{let t={};return r.forEach(({sourceId:e,source:n})=>{let r=t[e]??{id:e,name:e,lang:`unknown`,iconUrl:null,mangaCount:0,...n};t[e]={...r,mangaCount:r.mangaCount+1}}),Object.values(t).toSorted((t,n)=>{switch(e){case hg.SOURCE_NAME:return t.name.localeCompare(n.name);case hg.MANGA_COUNT:return t.mangaCount-n.mangaCount;default:throw Error(`Unexpected "sortBy" "${e}"`)}})},[r,e,t]);switch(t){case gg.ASC:return{sources:i,request:n};case gg.DESC:return{sources:i.toReversed(),request:n};default:throw Error(`Unexpected "sortOrder" "${t}"`)}}};S(Qv,`LOCAL_SOURCE_ID`,`0`);var $v=class e{constructor(t,n=5){S(this,`areConnectionsLimited`,void 0),S(this,`concurrencyPerSource`,void 0),S(this,`queueBySource`,void 0),this.areConnectionsLimited=t,this.concurrencyPerSource=n,this.queueBySource=new Map([[e.DEFAULT_ID,new ch(this.concurrencyPerSource)]])}getConcurrencyFor(e){return e===Qv.LOCAL_SOURCE_ID?2**53-1:this.concurrencyPerSource}getQueueFor(t){let n=t??e.DEFAULT_ID,r=this.areConnectionsLimited?e.DEFAULT_ID:n;return this.queueBySource.has(r)||this.queueBySource.set(r,new ch(this.getConcurrencyFor(n))),this.queueBySource.get(r)}enqueue(e,t,n,r){return this.getQueueFor(e).enqueue(t,n,r)}isProcessing(e,t){return this.getQueueFor(e).isProcessing(t)}clear(){for(let e of this.queueBySource.values())e.clear();this.queueBySource.clear()}};S($v,`DEFAULT_ID`,`__global__`);var ey=W`
    fragment TRACKER_BASE_FIELDS on TrackerType {
        id
        name
        icon
        isLoggedIn
        isTokenExpired
    }
`,ty=W`
    ${ey}

    fragment TRACKER_SETTING_FIELDS on TrackerType {
        ...TRACKER_BASE_FIELDS

        authUrl
    }
`,ny=W`
    ${ey}
    ${Dp}

    fragment TRACKER_BIND_FIELDS on TrackerType {
        ...TRACKER_BASE_FIELDS

        icon

        supportsPrivateTracking
        supportsTrackDeletion
        scores
        statuses {
            name
            value
        }

        trackRecords {
            nodes {
                ...TRACK_RECORD_BIND_FIELDS
            }
        }
    }
`,ry=W`
    ${Df}
    ${ty}

    query GET_TRACKERS_SETTINGS {
        trackers {
            totalCount
            pageInfo {
                ...PAGE_INFO
            }
            nodes {
                ...TRACKER_SETTING_FIELDS
            }
        }
    }
`,iy=W`
    ${Df}
    ${ny}

    query GET_TRACKERS_BIND {
        trackers {
            totalCount
            pageInfo {
                ...PAGE_INFO
            }
            nodes {
                ...TRACKER_BIND_FIELDS
            }
        }
    }
`,ay=W`
    ${Ep}

    query TRACKER_SEARCH($query: String!, $trackerId: Int!) {
        searchTracker(input: { query: $query, trackerId: $trackerId }) {
            trackSearches {
                ...TRACK_RECORD_SEARCH_FIELDS
            }
        }
    }
`,oy=W`
    ${ty}

    mutation TRACKER_LOGIN_OAUTH($input: LoginTrackerOAuthInput!) {
        loginTrackerOAuth(input: $input) {
            tracker {
                ...TRACKER_SETTING_FIELDS
            }
        }
    }
`,sy=W`
    ${ty}

    mutation TRACKER_LOGIN_CREDENTIALS($input: LoginTrackerCredentialsInput!) {
        loginTrackerCredentials(input: $input) {
            isLoggedIn
            tracker {
                ...TRACKER_SETTING_FIELDS
            }
        }
    }
`,cy=W`
    ${ty}

    mutation TRACKER_LOGOUT($trackerId: Int!) {
        logoutTracker(input: { trackerId: $trackerId }) {
            tracker {
                ...TRACKER_SETTING_FIELDS
            }
        }
    }
`,ly=W`
    ${Dp}

    mutation TRACKER_BIND($input: BindTrackInput!) {
        bindTrack(input: $input) {
            trackRecord {
                ...TRACK_RECORD_BIND_FIELDS
                manga {
                    id
                    trackRecords {
                        totalCount
                        nodes {
                            id
                            trackerId
                        }
                    }
                }
            }
        }
    }
`,uy=W`
    ${Dp}

    mutation TRACKER_BIND_TRACK_RECORD($input: BindTrackRecordInput!) {
        bindTrackRecord(input: $input) {
            trackRecord {
                ...TRACK_RECORD_BIND_FIELDS
                manga {
                    id
                    trackRecords {
                        totalCount
                        nodes {
                            id
                            trackerId
                        }
                    }
                }
            }
        }
    }
`,dy=W`
    mutation TRACKER_UNBIND($input: UnbindTrackInput!) {
        unbindTrack(input: $input) {
            trackRecord {
                id
                manga {
                    id
                    trackRecords {
                        totalCount
                        nodes {
                            id
                            trackerId
                        }
                    }
                }
            }
        }
    }
`,fy=W`
    ${Dp}

    mutation TRACKER_UPDATE_BIND($input: UpdateTrackInput!) {
        updateTrack(input: $input) {
            trackRecord {
                ...TRACK_RECORD_BIND_FIELDS
                manga {
                    id
                    trackRecords {
                        totalCount
                        nodes {
                            id
                            trackerId
                        }
                    }
                }
            }
        }
    }
`,py=W`
    ${Dp}

    mutation TRACKER_FETCH_BIND($recordId: Int!) {
        fetchTrack(input: { recordId: $recordId }) {
            trackRecord {
                ...TRACK_RECORD_BIND_FIELDS
            }
        }
    }
`,my=(e,t,n,r,i=!1)=>{if(!t)return t;if(i)return t.filter(t=>e.some(({key:e})=>e===n(`key`,t)));let a=e.filter(({key:e})=>t.every(t=>n(`key`,t)!==e)).map(r);return[...t,...a]},hy=W`
    mutation USER_LOGIN($password: String!, $username: String!) {
        login(input: { password: $password, username: $username }) {
            accessToken
            refreshToken
        }
    }
`,gy=W`
    mutation USER_REFRESH($refreshToken: String!) {
        refreshToken(input: { refreshToken: $refreshToken }) {
            accessToken
        }
    }
`,_y=W`
    fragment KO_SYNC_STATUS on KoSyncStatusPayload {
        isLoggedIn
        serverAddress
        username
    }
`,vy=W`
    ${_y}

    mutation KO_SYNC_LOGIN($serverAddress: String!, $username: String!, $password: String!) {
        connectKoSyncAccount(input: { serverAddress: $serverAddress, username: $username, password: $password }) {
            message
            status {
                ...KO_SYNC_STATUS
            }
        }
    }
`,yy=W`
    ${_y}

    mutation KO_SYNC_LOGOUT {
        logoutKoSyncAccount(input: {}) {
            status {
                ...KO_SYNC_STATUS
            }
        }
    }
`,by=W`
    ${_y}

    query GET_KO_SYNC_STATUS {
        koSyncStatus {
            ...KO_SYNC_STATUS
        }
    }
`,xy=Object.values(function(e){return e.OTHER=`image-cache-other`,e.EXTENSION_ICONS=`image-cache-extension-icons`,e.MANGA_THUMBNAILS=`image-cache-manga-thumbnails`,e.CHAPTER_PAGES=`image-cache-chapter-pages`,e}({}));window.caches&&caches.delete(`image-cache`).catch(Wu(`ImageCache: delete removed "image-cache"`));var Sy=class e{static getKeyFor(e){return e.match(/\/chapter\/[0-9]+\/page\/[0-9]+/g)?`image-cache-chapter-pages`:e.match(/\/manga\/[0-9]+\/thumbnail/g)?`image-cache-manga-thumbnails`:e.includes(`/extension/icon/`)?`image-cache-extension-icons`:`image-cache-other`}static async has(e,t=this.getKeyFor(e)){try{return await(await caches.open(t)).match(e,{ignoreVary:!0})!==void 0}catch{return!1}}static async get(e,t=this.getKeyFor(e)){try{return await(await caches.open(t)).match(e)||null}catch{return null}}static async clear(e){let t=await caches.open(e),n=await t.keys();await Promise.all(n.map(e=>t.delete(e)))}static async clearAll(){xy.forEach(e.clear)}},Cy=n((e=>{e.aliasToReal={each:`forEach`,eachRight:`forEachRight`,entries:`toPairs`,entriesIn:`toPairsIn`,extend:`assignIn`,extendAll:`assignInAll`,extendAllWith:`assignInAllWith`,extendWith:`assignInWith`,first:`head`,conforms:`conformsTo`,matches:`isMatch`,property:`get`,__:`placeholder`,F:`stubFalse`,T:`stubTrue`,all:`every`,allPass:`overEvery`,always:`constant`,any:`some`,anyPass:`overSome`,apply:`spread`,assoc:`set`,assocPath:`set`,complement:`negate`,compose:`flowRight`,contains:`includes`,dissoc:`unset`,dissocPath:`unset`,dropLast:`dropRight`,dropLastWhile:`dropRightWhile`,equals:`isEqual`,identical:`eq`,indexBy:`keyBy`,init:`initial`,invertObj:`invert`,juxt:`over`,omitAll:`omit`,nAry:`ary`,path:`get`,pathEq:`matchesProperty`,pathOr:`getOr`,paths:`at`,pickAll:`pick`,pipe:`flow`,pluck:`map`,prop:`get`,propEq:`matchesProperty`,propOr:`getOr`,props:`at`,symmetricDifference:`xor`,symmetricDifferenceBy:`xorBy`,symmetricDifferenceWith:`xorWith`,takeLast:`takeRight`,takeLastWhile:`takeRightWhile`,unapply:`rest`,unnest:`flatten`,useWith:`overArgs`,where:`conformsTo`,whereEq:`isMatch`,zipObj:`zipObject`},e.aryMethod={1:`assignAll.assignInAll.attempt.castArray.ceil.create.curry.curryRight.defaultsAll.defaultsDeepAll.floor.flow.flowRight.fromPairs.invert.iteratee.memoize.method.mergeAll.methodOf.mixin.nthArg.over.overEvery.overSome.rest.reverse.round.runInContext.spread.template.trim.trimEnd.trimStart.uniqueId.words.zipAll`.split(`.`),2:`add.after.ary.assign.assignAllWith.assignIn.assignInAllWith.at.before.bind.bindAll.bindKey.chunk.cloneDeepWith.cloneWith.concat.conformsTo.countBy.curryN.curryRightN.debounce.defaults.defaultsDeep.defaultTo.delay.difference.divide.drop.dropRight.dropRightWhile.dropWhile.endsWith.eq.every.filter.find.findIndex.findKey.findLast.findLastIndex.findLastKey.flatMap.flatMapDeep.flattenDepth.forEach.forEachRight.forIn.forInRight.forOwn.forOwnRight.get.groupBy.gt.gte.has.hasIn.includes.indexOf.intersection.invertBy.invoke.invokeMap.isEqual.isMatch.join.keyBy.lastIndexOf.lt.lte.map.mapKeys.mapValues.matchesProperty.maxBy.meanBy.merge.mergeAllWith.minBy.multiply.nth.omit.omitBy.overArgs.pad.padEnd.padStart.parseInt.partial.partialRight.partition.pick.pickBy.propertyOf.pull.pullAll.pullAt.random.range.rangeRight.rearg.reject.remove.repeat.restFrom.result.sampleSize.some.sortBy.sortedIndex.sortedIndexOf.sortedLastIndex.sortedLastIndexOf.sortedUniqBy.split.spreadFrom.startsWith.subtract.sumBy.take.takeRight.takeRightWhile.takeWhile.tap.throttle.thru.times.trimChars.trimCharsEnd.trimCharsStart.truncate.union.uniqBy.uniqWith.unset.unzipWith.without.wrap.xor.zip.zipObject.zipObjectDeep`.split(`.`),3:`assignInWith.assignWith.clamp.differenceBy.differenceWith.findFrom.findIndexFrom.findLastFrom.findLastIndexFrom.getOr.includesFrom.indexOfFrom.inRange.intersectionBy.intersectionWith.invokeArgs.invokeArgsMap.isEqualWith.isMatchWith.flatMapDepth.lastIndexOfFrom.mergeWith.orderBy.padChars.padCharsEnd.padCharsStart.pullAllBy.pullAllWith.rangeStep.rangeStepRight.reduce.reduceRight.replace.set.slice.sortedIndexBy.sortedLastIndexBy.transform.unionBy.unionWith.update.xorBy.xorWith.zipWith`.split(`.`),4:[`fill`,`setWith`,`updateWith`]},e.aryRearg={2:[1,0],3:[2,0,1],4:[3,2,0,1]},e.iterateeAry={dropRightWhile:1,dropWhile:1,every:1,filter:1,find:1,findFrom:1,findIndex:1,findIndexFrom:1,findKey:1,findLast:1,findLastFrom:1,findLastIndex:1,findLastIndexFrom:1,findLastKey:1,flatMap:1,flatMapDeep:1,flatMapDepth:1,forEach:1,forEachRight:1,forIn:1,forInRight:1,forOwn:1,forOwnRight:1,map:1,mapKeys:1,mapValues:1,partition:1,reduce:2,reduceRight:2,reject:1,remove:1,some:1,takeRightWhile:1,takeWhile:1,times:1,transform:2},e.iterateeRearg={mapKeys:[1],reduceRight:[1,0]},e.methodRearg={assignInAllWith:[1,0],assignInWith:[1,2,0],assignAllWith:[1,0],assignWith:[1,2,0],differenceBy:[1,2,0],differenceWith:[1,2,0],getOr:[2,1,0],intersectionBy:[1,2,0],intersectionWith:[1,2,0],isEqualWith:[1,2,0],isMatchWith:[2,1,0],mergeAllWith:[1,0],mergeWith:[1,2,0],padChars:[2,1,0],padCharsEnd:[2,1,0],padCharsStart:[2,1,0],pullAllBy:[2,1,0],pullAllWith:[2,1,0],rangeStep:[1,2,0],rangeStepRight:[1,2,0],setWith:[3,1,2,0],sortedIndexBy:[2,1,0],sortedLastIndexBy:[2,1,0],unionBy:[1,2,0],unionWith:[1,2,0],updateWith:[3,1,2,0],xorBy:[1,2,0],xorWith:[1,2,0],zipWith:[1,2,0]},e.methodSpread={assignAll:{start:0},assignAllWith:{start:0},assignInAll:{start:0},assignInAllWith:{start:0},defaultsAll:{start:0},defaultsDeepAll:{start:0},invokeArgs:{start:2},invokeArgsMap:{start:2},mergeAll:{start:0},mergeAllWith:{start:0},partial:{start:1},partialRight:{start:1},without:{start:1},zipAll:{start:0}},e.mutate={array:{fill:!0,pull:!0,pullAll:!0,pullAllBy:!0,pullAllWith:!0,pullAt:!0,remove:!0,reverse:!0},object:{assign:!0,assignAll:!0,assignAllWith:!0,assignIn:!0,assignInAll:!0,assignInAllWith:!0,assignInWith:!0,assignWith:!0,defaults:!0,defaultsAll:!0,defaultsDeep:!0,defaultsDeepAll:!0,merge:!0,mergeAll:!0,mergeAllWith:!0,mergeWith:!0},set:{set:!0,setWith:!0,unset:!0,update:!0,updateWith:!0}},e.realToAlias=function(){var t=Object.prototype.hasOwnProperty,n=e.aliasToReal,r={};for(var i in n){var a=n[i];t.call(r,a)?r[a].push(i):r[a]=[i]}return r}(),e.remap={assignAll:`assign`,assignAllWith:`assignWith`,assignInAll:`assignIn`,assignInAllWith:`assignInWith`,curryN:`curry`,curryRightN:`curryRight`,defaultsAll:`defaults`,defaultsDeepAll:`defaultsDeep`,findFrom:`find`,findIndexFrom:`findIndex`,findLastFrom:`findLast`,findLastIndexFrom:`findLastIndex`,getOr:`get`,includesFrom:`includes`,indexOfFrom:`indexOf`,invokeArgs:`invoke`,invokeArgsMap:`invokeMap`,lastIndexOfFrom:`lastIndexOf`,mergeAll:`merge`,mergeAllWith:`mergeWith`,padChars:`pad`,padCharsEnd:`padEnd`,padCharsStart:`padStart`,propertyOf:`get`,rangeStep:`range`,rangeStepRight:`rangeRight`,restFrom:`rest`,spreadFrom:`spread`,trimChars:`trim`,trimCharsEnd:`trimEnd`,trimCharsStart:`trimStart`,zipAll:`zip`},e.skipFixed={castArray:!0,flow:!0,flowRight:!0,iteratee:!0,mixin:!0,rearg:!0,runInContext:!0},e.skipRearg={add:!0,assign:!0,assignIn:!0,bind:!0,bindKey:!0,concat:!0,difference:!0,divide:!0,eq:!0,gt:!0,gte:!0,isEqual:!0,lt:!0,lte:!0,matchesProperty:!0,merge:!0,multiply:!0,overArgs:!0,partial:!0,partialRight:!0,propertyOf:!0,random:!0,range:!0,rangeRight:!0,subtract:!0,zip:!0,zipObject:!0,zipObjectDeep:!0}})),wy=n(((e,t)=>{t.exports={}})),Ty=n(((e,t)=>{var n=Cy(),r=wy(),i=Array.prototype.push;function a(e,t){return t==2?function(t,n){return e.apply(void 0,arguments)}:function(t){return e.apply(void 0,arguments)}}function o(e,t){return t==2?function(t,n){return e(t,n)}:function(t){return e(t)}}function s(e){for(var t=e?e.length:0,n=Array(t);t--;)n[t]=e[t];return n}function c(e){return function(t){return e({},t)}}function l(e,t){return function(){for(var n=arguments.length,r=n-1,a=Array(n);n--;)a[n]=arguments[n];var o=a[t],s=a.slice(0,t);return o&&i.apply(s,o),t!=r&&i.apply(s,a.slice(t+1)),e.apply(this,s)}}function u(e,t){return function(){var n=arguments.length;if(n){for(var r=Array(n);n--;)r[n]=arguments[n];var i=r[0]=t.apply(void 0,r);return e.apply(void 0,r),i}}}function d(e,t,i,f){var p=typeof t==`function`,m=t===Object(t);if(m&&(f=i,i=t,t=void 0),i==null)throw TypeError();f||(f={});var h={cap:`cap`in f?f.cap:!0,curry:`curry`in f?f.curry:!0,fixed:`fixed`in f?f.fixed:!0,immutable:`immutable`in f?f.immutable:!0,rearg:`rearg`in f?f.rearg:!0},g=p?i:r,_=`curry`in f&&f.curry,v=`fixed`in f&&f.fixed,y=`rearg`in f&&f.rearg,b=p?i.runInContext():void 0,x=p?i:{ary:e.ary,assign:e.assign,clone:e.clone,curry:e.curry,forEach:e.forEach,isArray:e.isArray,isError:e.isError,isFunction:e.isFunction,isWeakMap:e.isWeakMap,iteratee:e.iteratee,keys:e.keys,rearg:e.rearg,toInteger:e.toInteger,toPath:e.toPath},S=x.ary,C=x.assign,w=x.clone,T=x.curry,E=x.forEach,D=x.isArray,ee=x.isError,O=x.isFunction,te=x.isWeakMap,k=x.keys,ne=x.rearg,re=x.toInteger,A=x.toPath,ie=k(n.aryMethod),ae={castArray:function(e){return function(){var t=arguments[0];return D(t)?e(s(t)):e.apply(void 0,arguments)}},iteratee:function(e){return function(){var t=arguments[0],n=arguments[1],r=e(t,n),i=r.length;return h.cap&&typeof n==`number`?(n=n>2?n-2:1,i&&i<=n?r:o(r,n)):r}},mixin:function(e){return function(t){var n=this;if(!O(n))return e(n,Object(t));var r=[];return E(k(t),function(e){O(t[e])&&r.push([e,n.prototype[e]])}),e(n,Object(t)),E(r,function(e){var t=e[1];O(t)?n.prototype[e[0]]=t:delete n.prototype[e[0]]}),n}},nthArg:function(e){return function(t){var n=t<0?1:re(t)+1;return T(e(t),n)}},rearg:function(e){return function(t,n){var r=n?n.length:0;return T(e(t,n),r)}},runInContext:function(t){return function(n){return d(e,t(n),f)}}};function oe(e,t){if(h.cap){var r=n.iterateeRearg[e];if(r)return me(t,r);var i=!p&&n.iterateeAry[e];if(i)return pe(t,i)}return t}function se(e,t,n){return _||h.curry&&n>1?T(t,n):t}function ce(e,t,r){if(h.fixed&&(v||!n.skipFixed[e])){var i=n.methodSpread[e],a=i&&i.start;return a===void 0?S(t,r):l(t,a)}return t}function le(e,t,r){return h.rearg&&r>1&&(y||!n.skipRearg[e])?ne(t,n.methodRearg[e]||n.aryRearg[r]):t}function ue(e,t){t=A(t);for(var n=-1,r=t.length,i=r-1,a=w(Object(e)),o=a;o!=null&&++n<r;){var s=t[n],c=o[s];c!=null&&!(O(c)||ee(c)||te(c))&&(o[s]=w(n==i?c:Object(c))),o=o[s]}return a}function de(e){return _e.runInContext.convert(e)(void 0)}function fe(e,t){var r=n.aliasToReal[e]||e,i=n.remap[r]||r,a=f;return function(e){return d(p?b:x,r,p?b[i]:t,C(C({},a),e))}}function pe(e,t){return he(e,function(e){return typeof e==`function`?o(e,t):e})}function me(e,t){return he(e,function(e){var n=t.length;return a(ne(o(e,n),t),n)})}function he(e,t){return function(){var n=arguments.length;if(!n)return e();for(var r=Array(n);n--;)r[n]=arguments[n];var i=h.rearg?0:n-1;return r[i]=t(r[i]),e.apply(void 0,r)}}function ge(e,t,r){var i,a=n.aliasToReal[e]||e,o=t,l=ae[a];return l?o=l(t):h.immutable&&(n.mutate.array[a]?o=u(t,s):n.mutate.object[a]?o=u(t,c(t)):n.mutate.set[a]&&(o=u(t,ue))),E(ie,function(e){return E(n.aryMethod[e],function(t){if(a==t){var r=n.methodSpread[a];return i=r&&r.afterRearg?ce(a,le(a,o,e),e):le(a,ce(a,o,e),e),i=oe(a,i),i=se(a,i,e),!1}}),!i}),i||(i=o),i==t&&(i=_?T(i,1):function(){return t.apply(this,arguments)}),i.convert=fe(a,t),i.placeholder=t.placeholder=r,i}if(!m)return ge(t,i,g);var _e=i,ve=[];return E(ie,function(e){E(n.aryMethod[e],function(e){var t=_e[n.remap[e]||e];t&&ve.push([e,ge(e,t,_e)])})}),E(k(_e),function(e){var t=_e[e];if(typeof t==`function`){for(var n=ve.length;n--;)if(ve[n][0]==e)return;t.convert=fe(e,t),ve.push([e,t])}}),E(ve,function(e){_e[e[0]]=e[1]}),_e.convert=de,_e.placeholder=_e,E(k(_e),function(e){E(n.realToAlias[e]||[],function(t){_e[t]=_e[e]})}),_e}t.exports=d})),Ey=n(((e,t)=>{function n(e){return e}t.exports=n})),Dy=n(((e,t)=>{t.exports=typeof global==`object`&&global&&global.Object===Object&&global})),Oy=n(((e,t)=>{var n=Dy(),r=typeof self==`object`&&self&&self.Object===Object&&self;t.exports=n||r||Function(`return this`)()})),ky=n(((e,t)=>{t.exports=Oy().Symbol})),Ay=n(((e,t)=>{var n=ky(),r=Object.prototype,i=r.hasOwnProperty,a=r.toString,o=n?n.toStringTag:void 0;function s(e){var t=i.call(e,o),n=e[o];try{e[o]=void 0;var r=!0}catch{}var s=a.call(e);return r&&(t?e[o]=n:delete e[o]),s}t.exports=s})),jy=n(((e,t)=>{var n=Object.prototype.toString;function r(e){return n.call(e)}t.exports=r})),My=n(((e,t)=>{var n=ky(),r=Ay(),i=jy(),a=`[object Null]`,o=`[object Undefined]`,s=n?n.toStringTag:void 0;function c(e){return e==null?e===void 0?o:a:s&&s in Object(e)?r(e):i(e)}t.exports=c})),Ny=n(((e,t)=>{function n(e){var t=typeof e;return e!=null&&(t==`object`||t==`function`)}t.exports=n})),Py=n(((e,t)=>{var n=My(),r=Ny(),i=`[object AsyncFunction]`,a=`[object Function]`,o=`[object GeneratorFunction]`,s=`[object Proxy]`;function c(e){if(!r(e))return!1;var t=n(e);return t==a||t==o||t==i||t==s}t.exports=c})),Fy=n(((e,t)=>{t.exports=Oy()[`__core-js_shared__`]})),Iy=n(((e,t)=>{var n=Fy(),r=function(){var e=/[^.]+$/.exec(n&&n.keys&&n.keys.IE_PROTO||``);return e?`Symbol(src)_1.`+e:``}();function i(e){return!!r&&r in e}t.exports=i})),Ly=n(((e,t)=>{var n=Function.prototype.toString;function r(e){if(e!=null){try{return n.call(e)}catch{}try{return e+``}catch{}}return``}t.exports=r})),Ry=n(((e,t)=>{var n=Py(),r=Iy(),i=Ny(),a=Ly(),o=/[\\^$.*+?()[\]{}|]/g,s=/^\[object .+?Constructor\]$/,c=Function.prototype,l=Object.prototype,u=c.toString,d=l.hasOwnProperty,f=RegExp(`^`+u.call(d).replace(o,`\\$&`).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,`$1.*?`)+`$`);function p(e){return!i(e)||r(e)?!1:(n(e)?f:s).test(a(e))}t.exports=p})),zy=n(((e,t)=>{function n(e,t){return e?.[t]}t.exports=n})),By=n(((e,t)=>{var n=Ry(),r=zy();function i(e,t){var i=r(e,t);return n(i)?i:void 0}t.exports=i})),Vy=n(((e,t)=>{t.exports=By()(Oy(),`WeakMap`)})),Hy=n(((e,t)=>{var n=Vy();t.exports=n&&new n})),Uy=n(((e,t)=>{var n=Ey(),r=Hy();t.exports=r?function(e,t){return r.set(e,t),e}:n})),Wy=n(((e,t)=>{var n=Ny(),r=Object.create;t.exports=function(){function e(){}return function(t){if(!n(t))return{};if(r)return r(t);e.prototype=t;var i=new e;return e.prototype=void 0,i}}()})),Gy=n(((e,t)=>{var n=Wy(),r=Ny();function i(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var i=n(e.prototype),a=e.apply(i,t);return r(a)?a:i}}t.exports=i})),Ky=n(((e,t)=>{var n=Gy(),r=Oy(),i=1;function a(e,t,a){var o=t&i,s=n(e);function c(){return(this&&this!==r&&this instanceof c?s:e).apply(o?a:this,arguments)}return c}t.exports=a})),qy=n(((e,t)=>{function n(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}t.exports=n})),Jy=n(((e,t)=>{var n=Math.max;function r(e,t,r,i){for(var a=-1,o=e.length,s=r.length,c=-1,l=t.length,u=n(o-s,0),d=Array(l+u),f=!i;++c<l;)d[c]=t[c];for(;++a<s;)(f||a<o)&&(d[r[a]]=e[a]);for(;u--;)d[c++]=e[a++];return d}t.exports=r})),Yy=n(((e,t)=>{var n=Math.max;function r(e,t,r,i){for(var a=-1,o=e.length,s=-1,c=r.length,l=-1,u=t.length,d=n(o-c,0),f=Array(d+u),p=!i;++a<d;)f[a]=e[a];for(var m=a;++l<u;)f[m+l]=t[l];for(;++s<c;)(p||a<o)&&(f[m+r[s]]=e[a++]);return f}t.exports=r})),Xy=n(((e,t)=>{function n(e,t){for(var n=e.length,r=0;n--;)e[n]===t&&++r;return r}t.exports=n})),Zy=n(((e,t)=>{function n(){}t.exports=n})),Qy=n(((e,t)=>{var n=Wy(),r=Zy(),i=4294967295;function a(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=i,this.__views__=[]}a.prototype=n(r.prototype),a.prototype.constructor=a,t.exports=a})),$y=n(((e,t)=>{function n(){}t.exports=n})),eb=n(((e,t)=>{var n=Hy(),r=$y();t.exports=n?function(e){return n.get(e)}:r})),tb=n(((e,t)=>{t.exports={}})),nb=n(((e,t)=>{var n=tb(),r=Object.prototype.hasOwnProperty;function i(e){for(var t=e.name+``,i=n[t],a=r.call(n,t)?i.length:0;a--;){var o=i[a],s=o.func;if(s==null||s==e)return o.name}return t}t.exports=i})),rb=n(((e,t)=>{var n=Wy(),r=Zy();function i(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=void 0}i.prototype=n(r.prototype),i.prototype.constructor=i,t.exports=i})),ib=n(((e,t)=>{t.exports=Array.isArray})),ab=n(((e,t)=>{function n(e){return typeof e==`object`&&!!e}t.exports=n})),ob=n(((e,t)=>{function n(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}t.exports=n})),sb=n(((e,t)=>{var n=Qy(),r=rb(),i=ob();function a(e){if(e instanceof n)return e.clone();var t=new r(e.__wrapped__,e.__chain__);return t.__actions__=i(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}t.exports=a})),cb=n(((e,t)=>{var n=Qy(),r=rb(),i=Zy(),a=ib(),o=ab(),s=sb(),c=Object.prototype.hasOwnProperty;function l(e){if(o(e)&&!a(e)&&!(e instanceof n)){if(e instanceof r)return e;if(c.call(e,`__wrapped__`))return s(e)}return new r(e)}l.prototype=i.prototype,l.prototype.constructor=l,t.exports=l})),lb=n(((e,t)=>{var n=Qy(),r=eb(),i=nb(),a=cb();function o(e){var t=i(e),o=a[t];if(typeof o!=`function`||!(t in n.prototype))return!1;if(e===o)return!0;var s=r(o);return!!s&&e===s[0]}t.exports=o})),ub=n(((e,t)=>{var n=Date.now;function r(e){var t=0,r=0;return function(){var i=n(),a=16-(i-r);if(r=i,a>0){if(++t>=800)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}t.exports=r})),db=n(((e,t)=>{var n=Uy();t.exports=ub()(n)})),fb=n(((e,t)=>{var n=/\{\n\/\* \[wrapped with (.+)\] \*/,r=/,? & /;function i(e){var t=e.match(n);return t?t[1].split(r):[]}t.exports=i})),pb=n(((e,t)=>{var n=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;function r(e,t){var r=t.length;if(!r)return e;var i=r-1;return t[i]=(r>1?`& `:``)+t[i],t=t.join(r>2?`, `:` `),e.replace(n,`{
/* [wrapped with `+t+`] */
`)}t.exports=r})),mb=n(((e,t)=>{function n(e){return function(){return e}}t.exports=n})),hb=n(((e,t)=>{var n=By();t.exports=function(){try{var e=n(Object,`defineProperty`);return e({},``,{}),e}catch{}}()})),gb=n(((e,t)=>{var n=mb(),r=hb(),i=Ey();t.exports=r?function(e,t){return r(e,`toString`,{configurable:!0,enumerable:!1,value:n(t),writable:!0})}:i})),_b=n(((e,t)=>{var n=gb();t.exports=ub()(n)})),vb=n(((e,t)=>{function n(e,t){for(var n=-1,r=e==null?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}t.exports=n})),yb=n(((e,t)=>{function n(e,t,n,r){for(var i=e.length,a=n+(r?1:-1);r?a--:++a<i;)if(t(e[a],a,e))return a;return-1}t.exports=n})),bb=n(((e,t)=>{function n(e){return e!==e}t.exports=n})),xb=n(((e,t)=>{function n(e,t,n){for(var r=n-1,i=e.length;++r<i;)if(e[r]===t)return r;return-1}t.exports=n})),Sb=n(((e,t)=>{var n=yb(),r=bb(),i=xb();function a(e,t,a){return t===t?i(e,t,a):n(e,r,a)}t.exports=a})),Cb=n(((e,t)=>{var n=Sb();function r(e,t){return!!(e!=null&&e.length)&&n(e,t,0)>-1}t.exports=r})),wb=n(((e,t)=>{var n=vb(),r=Cb(),i=[[`ary`,128],[`bind`,1],[`bindKey`,2],[`curry`,8],[`curryRight`,16],[`flip`,512],[`partial`,32],[`partialRight`,64],[`rearg`,256]];function a(e,t){return n(i,function(n){var i=`_.`+n[0];t&n[1]&&!r(e,i)&&e.push(i)}),e.sort()}t.exports=a})),Tb=n(((e,t)=>{var n=fb(),r=pb(),i=_b(),a=wb();function o(e,t,o){var s=t+``;return i(e,r(s,a(n(s),o)))}t.exports=o})),Eb=n(((e,t)=>{var n=lb(),r=db(),i=Tb(),a=1,o=2,s=4,c=8,l=32,u=64;function d(e,t,d,f,p,m,h,g,_,v){var y=t&c,b=y?h:void 0,x=y?void 0:h,S=y?m:void 0,C=y?void 0:m;t|=y?l:u,t&=~(y?u:l),t&s||(t&=~(a|o));var w=[e,t,p,S,b,C,x,g,_,v],T=d.apply(void 0,w);return n(e)&&r(T,w),T.placeholder=f,i(T,e,t)}t.exports=d})),Db=n(((e,t)=>{function n(e){return e.placeholder}t.exports=n})),Ob=n(((e,t)=>{var n=/^(?:0|[1-9]\d*)$/;function r(e,t){var r=typeof e;return t=t??9007199254740991,!!t&&(r==`number`||r!=`symbol`&&n.test(e))&&e>-1&&e%1==0&&e<t}t.exports=r})),kb=n(((e,t)=>{var n=ob(),r=Ob(),i=Math.min;function a(e,t){for(var a=e.length,o=i(t.length,a),s=n(e);o--;){var c=t[o];e[o]=r(c,a)?s[c]:void 0}return e}t.exports=a})),Ab=n(((e,t)=>{var n=`__lodash_placeholder__`;function r(e,t){for(var r=-1,i=e.length,a=0,o=[];++r<i;){var s=e[r];(s===t||s===n)&&(e[r]=n,o[a++]=r)}return o}t.exports=r})),jb=n(((e,t)=>{var n=Jy(),r=Yy(),i=Xy(),a=Gy(),o=Eb(),s=Db(),c=kb(),l=Ab(),u=Oy(),d=1,f=2,p=8,m=16,h=128,g=512;function _(e,t,v,y,b,x,S,C,w,T){var E=t&h,D=t&d,ee=t&f,O=t&(p|m),te=t&g,k=ee?void 0:a(e);function ne(){for(var d=arguments.length,f=Array(d),p=d;p--;)f[p]=arguments[p];if(O)var m=s(ne),h=i(f,m);if(y&&(f=n(f,y,b,O)),x&&(f=r(f,x,S,O)),d-=h,O&&d<T){var g=l(f,m);return o(e,t,_,ne.placeholder,v,f,g,C,w,T-d)}var re=D?v:this,A=ee?re[e]:e;return d=f.length,C?f=c(f,C):te&&d>1&&f.reverse(),E&&w<d&&(f.length=w),this&&this!==u&&this instanceof ne&&(A=k||a(A)),A.apply(re,f)}return ne}t.exports=_})),Mb=n(((e,t)=>{var n=qy(),r=Gy(),i=jb(),a=Eb(),o=Db(),s=Ab(),c=Oy();function l(e,t,l){var u=r(e);function d(){for(var r=arguments.length,f=Array(r),p=r,m=o(d);p--;)f[p]=arguments[p];var h=r<3&&f[0]!==m&&f[r-1]!==m?[]:s(f,m);return r-=h.length,r<l?a(e,t,i,d.placeholder,void 0,f,h,void 0,void 0,l-r):n(this&&this!==c&&this instanceof d?u:e,this,f)}return d}t.exports=l})),Nb=n(((e,t)=>{var n=qy(),r=Gy(),i=Oy(),a=1;function o(e,t,o,s){var c=t&a,l=r(e);function u(){for(var t=-1,r=arguments.length,a=-1,d=s.length,f=Array(d+r),p=this&&this!==i&&this instanceof u?l:e;++a<d;)f[a]=s[a];for(;r--;)f[a++]=arguments[++t];return n(p,c?o:this,f)}return u}t.exports=o})),Pb=n(((e,t)=>{var n=Jy(),r=Yy(),i=Ab(),a=`__lodash_placeholder__`,o=1,s=2,c=4,l=8,u=128,d=256,f=Math.min;function p(e,t){var p=e[1],m=t[1],h=p|m,g=h<(o|s|u),_=m==u&&p==l||m==u&&p==d&&e[7].length<=t[8]||m==(u|d)&&t[7].length<=t[8]&&p==l;if(!(g||_))return e;m&o&&(e[2]=t[2],h|=p&o?0:c);var v=t[3];if(v){var y=e[3];e[3]=y?n(y,v,t[4]):v,e[4]=y?i(e[3],a):t[4]}return v=t[5],v&&(y=e[5],e[5]=y?r(y,v,t[6]):v,e[6]=y?i(e[5],a):t[6]),v=t[7],v&&(e[7]=v),m&u&&(e[8]=e[8]==null?t[8]:f(e[8],t[8])),e[9]??(e[9]=t[9]),e[0]=t[0],e[1]=h,e}t.exports=p})),Fb=n(((e,t)=>{var n=/\s/;function r(e){for(var t=e.length;t--&&n.test(e.charAt(t)););return t}t.exports=r})),Ib=n(((e,t)=>{var n=Fb(),r=/^\s+/;function i(e){return e&&e.slice(0,n(e)+1).replace(r,``)}t.exports=i})),Lb=n(((e,t)=>{var n=My(),r=ab(),i=`[object Symbol]`;function a(e){return typeof e==`symbol`||r(e)&&n(e)==i}t.exports=a})),Rb=n(((e,t)=>{var n=Ib(),r=Ny(),i=Lb(),a=NaN,o=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt;function u(e){if(typeof e==`number`)return e;if(i(e))return a;if(r(e)){var t=typeof e.valueOf==`function`?e.valueOf():e;e=r(t)?t+``:t}if(typeof e!=`string`)return e===0?e:+e;e=n(e);var u=s.test(e);return u||c.test(e)?l(e.slice(2),u?2:8):o.test(e)?a:+e}t.exports=u})),zb=n(((e,t)=>{var n=Rb(),r=1/0,i=17976931348623157e292;function a(e){return e?(e=n(e),e===r||e===-r?(e<0?-1:1)*i:e===e?e:0):e===0?e:0}t.exports=a})),Bb=n(((e,t)=>{var n=zb();function r(e){var t=n(e),r=t%1;return t===t?r?t-r:t:0}t.exports=r})),Vb=n(((e,t)=>{var n=Uy(),r=Ky(),i=Mb(),a=jb(),o=Nb(),s=eb(),c=Pb(),l=db(),u=Tb(),d=Bb(),f=`Expected a function`,p=1,m=2,h=8,g=16,_=32,v=64,y=Math.max;function b(e,t,b,x,S,C,w,T){var E=t&m;if(!E&&typeof e!=`function`)throw TypeError(f);var D=x?x.length:0;if(D||(t&=~(_|v),x=S=void 0),w=w===void 0?w:y(d(w),0),T=T===void 0?T:d(T),D-=S?S.length:0,t&v){var ee=x,O=S;x=S=void 0}var te=E?void 0:s(e),k=[e,t,b,x,S,ee,O,C,w,T];if(te&&c(k,te),e=k[0],t=k[1],b=k[2],x=k[3],S=k[4],T=k[9]=k[9]===void 0?E?0:e.length:y(k[9]-D,0),!T&&t&(h|g)&&(t&=~(h|g)),!t||t==p)var ne=r(e,t,b);else ne=t==h||t==g?i(e,t,T):(t==_||t==(p|_))&&!S.length?o(e,t,b,x):a.apply(void 0,k);return u((te?n:l)(ne,k),e,t)}t.exports=b})),Hb=n(((e,t)=>{var n=Vb(),r=128;function i(e,t,i){return t=i?void 0:t,t=e&&t==null?e.length:t,n(e,r,void 0,void 0,void 0,void 0,t)}t.exports=i})),Ub=n(((e,t)=>{var n=hb();function r(e,t,r){t==`__proto__`&&n?n(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}t.exports=r})),Wb=n(((e,t)=>{function n(e,t){return e===t||e!==e&&t!==t}t.exports=n})),Gb=n(((e,t)=>{var n=Ub(),r=Wb(),i=Object.prototype.hasOwnProperty;function a(e,t,a){var o=e[t];(!(i.call(e,t)&&r(o,a))||a===void 0&&!(t in e))&&n(e,t,a)}t.exports=a})),Kb=n(((e,t)=>{var n=Gb(),r=Ub();function i(e,t,i,a){var o=!i;i||(i={});for(var s=-1,c=t.length;++s<c;){var l=t[s],u=a?a(i[l],e[l],l,i,e):void 0;u===void 0&&(u=e[l]),o?r(i,l,u):n(i,l,u)}return i}t.exports=i})),qb=n(((e,t)=>{function n(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}t.exports=n})),Jb=n(((e,t)=>{var n=My(),r=ab(),i=`[object Arguments]`;function a(e){return r(e)&&n(e)==i}t.exports=a})),Yb=n(((e,t)=>{var n=Jb(),r=ab(),i=Object.prototype,a=i.hasOwnProperty,o=i.propertyIsEnumerable;t.exports=n(function(){return arguments}())?n:function(e){return r(e)&&a.call(e,`callee`)&&!o.call(e,`callee`)}})),Xb=n(((e,t)=>{function n(){return!1}t.exports=n})),Zb=n(((e,t)=>{var n=Oy(),r=Xb(),i=typeof e==`object`&&e&&!e.nodeType&&e,a=i&&typeof t==`object`&&t&&!t.nodeType&&t,o=a&&a.exports===i?n.Buffer:void 0;t.exports=(o?o.isBuffer:void 0)||r})),Qb=n(((e,t)=>{function n(e){return typeof e==`number`&&e>-1&&e%1==0&&e<=9007199254740991}t.exports=n})),$b=n(((e,t)=>{var n=My(),r=Qb(),i=ab(),a=`[object Arguments]`,o=`[object Array]`,s=`[object Boolean]`,c=`[object Date]`,l=`[object Error]`,u=`[object Function]`,d=`[object Map]`,f=`[object Number]`,p=`[object Object]`,m=`[object RegExp]`,h=`[object Set]`,g=`[object String]`,_=`[object WeakMap]`,v=`[object ArrayBuffer]`,y=`[object DataView]`,b=`[object Float32Array]`,x=`[object Float64Array]`,S=`[object Int8Array]`,C=`[object Int16Array]`,w=`[object Int32Array]`,T=`[object Uint8Array]`,E=`[object Uint8ClampedArray]`,D=`[object Uint16Array]`,ee=`[object Uint32Array]`,O={};O[b]=O[x]=O[S]=O[C]=O[w]=O[T]=O[E]=O[D]=O[ee]=!0,O[a]=O[o]=O[v]=O[s]=O[y]=O[c]=O[l]=O[u]=O[d]=O[f]=O[p]=O[m]=O[h]=O[g]=O[_]=!1;function te(e){return i(e)&&r(e.length)&&!!O[n(e)]}t.exports=te})),ex=n(((e,t)=>{function n(e){return function(t){return e(t)}}t.exports=n})),tx=n(((e,t)=>{var n=Dy(),r=typeof e==`object`&&e&&!e.nodeType&&e,i=r&&typeof t==`object`&&t&&!t.nodeType&&t,a=i&&i.exports===r&&n.process;t.exports=function(){try{return i&&i.require&&i.require(`util`).types||a&&a.binding&&a.binding(`util`)}catch{}}()})),nx=n(((e,t)=>{var n=$b(),r=ex(),i=tx(),a=i&&i.isTypedArray;t.exports=a?r(a):n})),rx=n(((e,t)=>{var n=qb(),r=Yb(),i=ib(),a=Zb(),o=Ob(),s=nx(),c=Object.prototype.hasOwnProperty;function l(e,t){var l=i(e),u=!l&&r(e),d=!l&&!u&&a(e),f=!l&&!u&&!d&&s(e),p=l||u||d||f,m=p?n(e.length,String):[],h=m.length;for(var g in e)(t||c.call(e,g))&&!(p&&(g==`length`||d&&(g==`offset`||g==`parent`)||f&&(g==`buffer`||g==`byteLength`||g==`byteOffset`)||o(g,h)))&&m.push(g);return m}t.exports=l})),ix=n(((e,t)=>{var n=Object.prototype;function r(e){var t=e&&e.constructor;return e===(typeof t==`function`&&t.prototype||n)}t.exports=r})),ax=n(((e,t)=>{function n(e,t){return function(n){return e(t(n))}}t.exports=n})),ox=n(((e,t)=>{t.exports=ax()(Object.keys,Object)})),sx=n(((e,t)=>{var n=ix(),r=ox(),i=Object.prototype.hasOwnProperty;function a(e){if(!n(e))return r(e);var t=[];for(var a in Object(e))i.call(e,a)&&a!=`constructor`&&t.push(a);return t}t.exports=a})),cx=n(((e,t)=>{var n=Py(),r=Qb();function i(e){return e!=null&&r(e.length)&&!n(e)}t.exports=i})),lx=n(((e,t)=>{var n=rx(),r=sx(),i=cx();function a(e){return i(e)?n(e):r(e)}t.exports=a})),ux=n(((e,t)=>{var n=Kb(),r=lx();function i(e,t){return e&&n(t,r(t),e)}t.exports=i})),dx=n(((e,t)=>{function n(){this.__data__=[],this.size=0}t.exports=n})),fx=n(((e,t)=>{var n=Wb();function r(e,t){for(var r=e.length;r--;)if(n(e[r][0],t))return r;return-1}t.exports=r})),px=n(((e,t)=>{var n=fx(),r=Array.prototype.splice;function i(e){var t=this.__data__,i=n(t,e);return i<0?!1:(i==t.length-1?t.pop():r.call(t,i,1),--this.size,!0)}t.exports=i})),mx=n(((e,t)=>{var n=fx();function r(e){var t=this.__data__,r=n(t,e);return r<0?void 0:t[r][1]}t.exports=r})),hx=n(((e,t)=>{var n=fx();function r(e){return n(this.__data__,e)>-1}t.exports=r})),gx=n(((e,t)=>{var n=fx();function r(e,t){var r=this.__data__,i=n(r,e);return i<0?(++this.size,r.push([e,t])):r[i][1]=t,this}t.exports=r})),_x=n(((e,t)=>{var n=dx(),r=px(),i=mx(),a=hx(),o=gx();function s(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}s.prototype.clear=n,s.prototype.delete=r,s.prototype.get=i,s.prototype.has=a,s.prototype.set=o,t.exports=s})),vx=n(((e,t)=>{var n=_x();function r(){this.__data__=new n,this.size=0}t.exports=r})),yx=n(((e,t)=>{function n(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}t.exports=n})),bx=n(((e,t)=>{function n(e){return this.__data__.get(e)}t.exports=n})),xx=n(((e,t)=>{function n(e){return this.__data__.has(e)}t.exports=n})),Sx=n(((e,t)=>{t.exports=By()(Oy(),`Map`)})),Cx=n(((e,t)=>{t.exports=By()(Object,`create`)})),wx=n(((e,t)=>{var n=Cx();function r(){this.__data__=n?n(null):{},this.size=0}t.exports=r})),Tx=n(((e,t)=>{function n(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=+!!t,t}t.exports=n})),Ex=n(((e,t)=>{var n=Cx(),r=`__lodash_hash_undefined__`,i=Object.prototype.hasOwnProperty;function a(e){var t=this.__data__;if(n){var a=t[e];return a===r?void 0:a}return i.call(t,e)?t[e]:void 0}t.exports=a})),Dx=n(((e,t)=>{var n=Cx(),r=Object.prototype.hasOwnProperty;function i(e){var t=this.__data__;return n?t[e]!==void 0:r.call(t,e)}t.exports=i})),Ox=n(((e,t)=>{var n=Cx(),r=`__lodash_hash_undefined__`;function i(e,t){var i=this.__data__;return this.size+=+!this.has(e),i[e]=n&&t===void 0?r:t,this}t.exports=i})),kx=n(((e,t)=>{var n=wx(),r=Tx(),i=Ex(),a=Dx(),o=Ox();function s(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}s.prototype.clear=n,s.prototype.delete=r,s.prototype.get=i,s.prototype.has=a,s.prototype.set=o,t.exports=s})),Ax=n(((e,t)=>{var n=kx(),r=_x(),i=Sx();function a(){this.size=0,this.__data__={hash:new n,map:new(i||r),string:new n}}t.exports=a})),jx=n(((e,t)=>{function n(e){var t=typeof e;return t==`string`||t==`number`||t==`symbol`||t==`boolean`?e!==`__proto__`:e===null}t.exports=n})),Mx=n(((e,t)=>{var n=jx();function r(e,t){var r=e.__data__;return n(t)?r[typeof t==`string`?`string`:`hash`]:r.map}t.exports=r})),Nx=n(((e,t)=>{var n=Mx();function r(e){var t=n(this,e).delete(e);return this.size-=+!!t,t}t.exports=r})),Px=n(((e,t)=>{var n=Mx();function r(e){return n(this,e).get(e)}t.exports=r})),Fx=n(((e,t)=>{var n=Mx();function r(e){return n(this,e).has(e)}t.exports=r})),Ix=n(((e,t)=>{var n=Mx();function r(e,t){var r=n(this,e),i=r.size;return r.set(e,t),this.size+=r.size==i?0:1,this}t.exports=r})),Lx=n(((e,t)=>{var n=Ax(),r=Nx(),i=Px(),a=Fx(),o=Ix();function s(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}s.prototype.clear=n,s.prototype.delete=r,s.prototype.get=i,s.prototype.has=a,s.prototype.set=o,t.exports=s})),Rx=n(((e,t)=>{var n=_x(),r=Sx(),i=Lx(),a=200;function o(e,t){var o=this.__data__;if(o instanceof n){var s=o.__data__;if(!r||s.length<a-1)return s.push([e,t]),this.size=++o.size,this;o=this.__data__=new i(s)}return o.set(e,t),this.size=o.size,this}t.exports=o})),zx=n(((e,t)=>{var n=_x(),r=vx(),i=yx(),a=bx(),o=xx(),s=Rx();function c(e){var t=this.__data__=new n(e);this.size=t.size}c.prototype.clear=r,c.prototype.delete=i,c.prototype.get=a,c.prototype.has=o,c.prototype.set=s,t.exports=c})),Bx=n(((e,t)=>{function n(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}t.exports=n})),Vx=n(((e,t)=>{var n=Ny(),r=ix(),i=Bx(),a=Object.prototype.hasOwnProperty;function o(e){if(!n(e))return i(e);var t=r(e),o=[];for(var s in e)s==`constructor`&&(t||!a.call(e,s))||o.push(s);return o}t.exports=o})),Hx=n(((e,t)=>{var n=rx(),r=Vx(),i=cx();function a(e){return i(e)?n(e,!0):r(e)}t.exports=a})),Ux=n(((e,t)=>{var n=Kb(),r=Hx();function i(e,t){return e&&n(t,r(t),e)}t.exports=i})),Wx=n(((e,t)=>{var n=Oy(),r=typeof e==`object`&&e&&!e.nodeType&&e,i=r&&typeof t==`object`&&t&&!t.nodeType&&t,a=i&&i.exports===r?n.Buffer:void 0,o=a?a.allocUnsafe:void 0;function s(e,t){if(t)return e.slice();var n=e.length,r=o?o(n):new e.constructor(n);return e.copy(r),r}t.exports=s})),Gx=n(((e,t)=>{function n(e,t){for(var n=-1,r=e==null?0:e.length,i=0,a=[];++n<r;){var o=e[n];t(o,n,e)&&(a[i++]=o)}return a}t.exports=n})),Kx=n(((e,t)=>{function n(){return[]}t.exports=n})),qx=n(((e,t)=>{var n=Gx(),r=Kx(),i=Object.prototype.propertyIsEnumerable,a=Object.getOwnPropertySymbols;t.exports=a?function(e){return e==null?[]:(e=Object(e),n(a(e),function(t){return i.call(e,t)}))}:r})),Jx=n(((e,t)=>{var n=Kb(),r=qx();function i(e,t){return n(e,r(e),t)}t.exports=i})),Yx=n(((e,t)=>{function n(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}t.exports=n})),Xx=n(((e,t)=>{t.exports=ax()(Object.getPrototypeOf,Object)})),Zx=n(((e,t)=>{var n=Yx(),r=Xx(),i=qx(),a=Kx();t.exports=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)n(t,i(e)),e=r(e);return t}:a})),Qx=n(((e,t)=>{var n=Kb(),r=Zx();function i(e,t){return n(e,r(e),t)}t.exports=i})),$x=n(((e,t)=>{var n=Yx(),r=ib();function i(e,t,i){var a=t(e);return r(e)?a:n(a,i(e))}t.exports=i})),eS=n(((e,t)=>{var n=$x(),r=qx(),i=lx();function a(e){return n(e,i,r)}t.exports=a})),tS=n(((e,t)=>{var n=$x(),r=Zx(),i=Hx();function a(e){return n(e,i,r)}t.exports=a})),nS=n(((e,t)=>{t.exports=By()(Oy(),`DataView`)})),rS=n(((e,t)=>{t.exports=By()(Oy(),`Promise`)})),iS=n(((e,t)=>{t.exports=By()(Oy(),`Set`)})),aS=n(((e,t)=>{var n=nS(),r=Sx(),i=rS(),a=iS(),o=Vy(),s=My(),c=Ly(),l=`[object Map]`,u=`[object Object]`,d=`[object Promise]`,f=`[object Set]`,p=`[object WeakMap]`,m=`[object DataView]`,h=c(n),g=c(r),_=c(i),v=c(a),y=c(o),b=s;(n&&b(new n(new ArrayBuffer(1)))!=m||r&&b(new r)!=l||i&&b(i.resolve())!=d||a&&b(new a)!=f||o&&b(new o)!=p)&&(b=function(e){var t=s(e),n=t==u?e.constructor:void 0,r=n?c(n):``;if(r)switch(r){case h:return m;case g:return l;case _:return d;case v:return f;case y:return p}return t}),t.exports=b})),oS=n(((e,t)=>{var n=Object.prototype.hasOwnProperty;function r(e){var t=e.length,r=new e.constructor(t);return t&&typeof e[0]==`string`&&n.call(e,`index`)&&(r.index=e.index,r.input=e.input),r}t.exports=r})),sS=n(((e,t)=>{t.exports=Oy().Uint8Array})),cS=n(((e,t)=>{var n=sS();function r(e){var t=new e.constructor(e.byteLength);return new n(t).set(new n(e)),t}t.exports=r})),lS=n(((e,t)=>{var n=cS();function r(e,t){var r=t?n(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}t.exports=r})),uS=n(((e,t)=>{var n=/\w*$/;function r(e){var t=new e.constructor(e.source,n.exec(e));return t.lastIndex=e.lastIndex,t}t.exports=r})),dS=n(((e,t)=>{var n=ky(),r=n?n.prototype:void 0,i=r?r.valueOf:void 0;function a(e){return i?Object(i.call(e)):{}}t.exports=a})),fS=n(((e,t)=>{var n=cS();function r(e,t){var r=t?n(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}t.exports=r})),pS=n(((e,t)=>{var n=cS(),r=lS(),i=uS(),a=dS(),o=fS(),s=`[object Boolean]`,c=`[object Date]`,l=`[object Map]`,u=`[object Number]`,d=`[object RegExp]`,f=`[object Set]`,p=`[object String]`,m=`[object Symbol]`,h=`[object ArrayBuffer]`,g=`[object DataView]`,_=`[object Float32Array]`,v=`[object Float64Array]`,y=`[object Int8Array]`,b=`[object Int16Array]`,x=`[object Int32Array]`,S=`[object Uint8Array]`,C=`[object Uint8ClampedArray]`,w=`[object Uint16Array]`,T=`[object Uint32Array]`;function E(e,t,E){var D=e.constructor;switch(t){case h:return n(e);case s:case c:return new D(+e);case g:return r(e,E);case _:case v:case y:case b:case x:case S:case C:case w:case T:return o(e,E);case l:return new D;case u:case p:return new D(e);case d:return i(e);case f:return new D;case m:return a(e)}}t.exports=E})),mS=n(((e,t)=>{var n=Wy(),r=Xx(),i=ix();function a(e){return typeof e.constructor==`function`&&!i(e)?n(r(e)):{}}t.exports=a})),hS=n(((e,t)=>{var n=aS(),r=ab(),i=`[object Map]`;function a(e){return r(e)&&n(e)==i}t.exports=a})),gS=n(((e,t)=>{var n=hS(),r=ex(),i=tx(),a=i&&i.isMap;t.exports=a?r(a):n})),_S=n(((e,t)=>{var n=aS(),r=ab(),i=`[object Set]`;function a(e){return r(e)&&n(e)==i}t.exports=a})),vS=n(((e,t)=>{var n=_S(),r=ex(),i=tx(),a=i&&i.isSet;t.exports=a?r(a):n})),yS=n(((e,t)=>{var n=zx(),r=vb(),i=Gb(),a=ux(),o=Ux(),s=Wx(),c=ob(),l=Jx(),u=Qx(),d=eS(),f=tS(),p=aS(),m=oS(),h=pS(),g=mS(),_=ib(),v=Zb(),y=gS(),b=Ny(),x=vS(),S=lx(),C=Hx(),w=1,T=2,E=4,D=`[object Arguments]`,ee=`[object Array]`,O=`[object Boolean]`,te=`[object Date]`,k=`[object Error]`,ne=`[object Function]`,re=`[object GeneratorFunction]`,A=`[object Map]`,ie=`[object Number]`,ae=`[object Object]`,oe=`[object RegExp]`,se=`[object Set]`,ce=`[object String]`,le=`[object Symbol]`,ue=`[object WeakMap]`,de=`[object ArrayBuffer]`,fe=`[object DataView]`,pe=`[object Float32Array]`,me=`[object Float64Array]`,he=`[object Int8Array]`,ge=`[object Int16Array]`,_e=`[object Int32Array]`,ve=`[object Uint8Array]`,ye=`[object Uint8ClampedArray]`,be=`[object Uint16Array]`,xe=`[object Uint32Array]`,j={};j[D]=j[ee]=j[de]=j[fe]=j[O]=j[te]=j[pe]=j[me]=j[he]=j[ge]=j[_e]=j[A]=j[ie]=j[ae]=j[oe]=j[se]=j[ce]=j[le]=j[ve]=j[ye]=j[be]=j[xe]=!0,j[k]=j[ne]=j[ue]=!1;function Se(e,t,ee,O,te,k){var A,ie=t&w,oe=t&T,se=t&E;if(ee&&(A=te?ee(e,O,te,k):ee(e)),A!==void 0)return A;if(!b(e))return e;var ce=_(e);if(ce){if(A=m(e),!ie)return c(e,A)}else{var le=p(e),ue=le==ne||le==re;if(v(e))return s(e,ie);if(le==ae||le==D||ue&&!te){if(A=oe||ue?{}:g(e),!ie)return oe?u(e,o(A,e)):l(e,a(A,e))}else{if(!j[le])return te?e:{};A=h(e,le,ie)}}k||(k=new n);var de=k.get(e);if(de)return de;k.set(e,A),x(e)?e.forEach(function(n){A.add(Se(n,t,ee,n,e,k))}):y(e)&&e.forEach(function(n,r){A.set(r,Se(n,t,ee,r,e,k))});var fe=ce?void 0:(se?oe?f:d:oe?C:S)(e);return r(fe||e,function(n,r){fe&&(r=n,n=e[r]),i(A,r,Se(n,t,ee,r,e,k))}),A}t.exports=Se})),bS=n(((e,t)=>{var n=yS(),r=4;function i(e){return n(e,r)}t.exports=i})),xS=n(((e,t)=>{var n=Vb(),r=8;function i(e,t,a){t=a?void 0:t;var o=n(e,r,void 0,void 0,void 0,void 0,void 0,t);return o.placeholder=i.placeholder,o}i.placeholder={},t.exports=i})),SS=n(((e,t)=>{var n=My(),r=Xx(),i=ab(),a=`[object Object]`,o=Function.prototype,s=Object.prototype,c=o.toString,l=s.hasOwnProperty,u=c.call(Object);function d(e){if(!i(e)||n(e)!=a)return!1;var t=r(e);if(t===null)return!0;var o=l.call(t,`constructor`)&&t.constructor;return typeof o==`function`&&o instanceof o&&c.call(o)==u}t.exports=d})),CS=n(((e,t)=>{var n=My(),r=ab(),i=SS(),a=`[object DOMException]`,o=`[object Error]`;function s(e){if(!r(e))return!1;var t=n(e);return t==o||t==a||typeof e.message==`string`&&typeof e.name==`string`&&!i(e)}t.exports=s})),wS=n(((e,t)=>{var n=aS(),r=ab(),i=`[object WeakMap]`;function a(e){return r(e)&&n(e)==i}t.exports=a})),TS=n(((e,t)=>{function n(e){return this.__data__.set(e,`__lodash_hash_undefined__`),this}t.exports=n})),ES=n(((e,t)=>{function n(e){return this.__data__.has(e)}t.exports=n})),DS=n(((e,t)=>{var n=Lx(),r=TS(),i=ES();function a(e){var t=-1,r=e==null?0:e.length;for(this.__data__=new n;++t<r;)this.add(e[t])}a.prototype.add=a.prototype.push=r,a.prototype.has=i,t.exports=a})),OS=n(((e,t)=>{function n(e,t){for(var n=-1,r=e==null?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}t.exports=n})),kS=n(((e,t)=>{function n(e,t){return e.has(t)}t.exports=n})),AS=n(((e,t)=>{var n=DS(),r=OS(),i=kS(),a=1,o=2;function s(e,t,s,c,l,u){var d=s&a,f=e.length,p=t.length;if(f!=p&&!(d&&p>f))return!1;var m=u.get(e),h=u.get(t);if(m&&h)return m==t&&h==e;var g=-1,_=!0,v=s&o?new n:void 0;for(u.set(e,t),u.set(t,e);++g<f;){var y=e[g],b=t[g];if(c)var x=d?c(b,y,g,t,e,u):c(y,b,g,e,t,u);if(x!==void 0){if(x)continue;_=!1;break}if(v){if(!r(t,function(e,t){if(!i(v,t)&&(y===e||l(y,e,s,c,u)))return v.push(t)})){_=!1;break}}else if(!(y===b||l(y,b,s,c,u))){_=!1;break}}return u.delete(e),u.delete(t),_}t.exports=s})),jS=n(((e,t)=>{function n(e){var t=-1,n=Array(e.size);return e.forEach(function(e,r){n[++t]=[r,e]}),n}t.exports=n})),MS=n(((e,t)=>{function n(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=e}),n}t.exports=n})),NS=n(((e,t)=>{var n=ky(),r=sS(),i=Wb(),a=AS(),o=jS(),s=MS(),c=1,l=2,u=`[object Boolean]`,d=`[object Date]`,f=`[object Error]`,p=`[object Map]`,m=`[object Number]`,h=`[object RegExp]`,g=`[object Set]`,_=`[object String]`,v=`[object Symbol]`,y=`[object ArrayBuffer]`,b=`[object DataView]`,x=n?n.prototype:void 0,S=x?x.valueOf:void 0;function C(e,t,n,x,C,w,T){switch(n){case b:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case y:return!(e.byteLength!=t.byteLength||!w(new r(e),new r(t)));case u:case d:case m:return i(+e,+t);case f:return e.name==t.name&&e.message==t.message;case h:case _:return e==t+``;case p:var E=o;case g:var D=x&c;if(E||(E=s),e.size!=t.size&&!D)return!1;var ee=T.get(e);if(ee)return ee==t;x|=l,T.set(e,t);var O=a(E(e),E(t),x,C,w,T);return T.delete(e),O;case v:if(S)return S.call(e)==S.call(t)}return!1}t.exports=C})),PS=n(((e,t)=>{var n=eS(),r=1,i=Object.prototype.hasOwnProperty;function a(e,t,a,o,s,c){var l=a&r,u=n(e),d=u.length;if(d!=n(t).length&&!l)return!1;for(var f=d;f--;){var p=u[f];if(!(l?p in t:i.call(t,p)))return!1}var m=c.get(e),h=c.get(t);if(m&&h)return m==t&&h==e;var g=!0;c.set(e,t),c.set(t,e);for(var _=l;++f<d;){p=u[f];var v=e[p],y=t[p];if(o)var b=l?o(y,v,p,t,e,c):o(v,y,p,e,t,c);if(!(b===void 0?v===y||s(v,y,a,o,c):b)){g=!1;break}_||(_=p==`constructor`)}if(g&&!_){var x=e.constructor,S=t.constructor;x!=S&&`constructor`in e&&`constructor`in t&&!(typeof x==`function`&&x instanceof x&&typeof S==`function`&&S instanceof S)&&(g=!1)}return c.delete(e),c.delete(t),g}t.exports=a})),FS=n(((e,t)=>{var n=zx(),r=AS(),i=NS(),a=PS(),o=aS(),s=ib(),c=Zb(),l=nx(),u=1,d=`[object Arguments]`,f=`[object Array]`,p=`[object Object]`,m=Object.prototype.hasOwnProperty;function h(e,t,h,g,_,v){var y=s(e),b=s(t),x=y?f:o(e),S=b?f:o(t);x=x==d?p:x,S=S==d?p:S;var C=x==p,w=S==p,T=x==S;if(T&&c(e)){if(!c(t))return!1;y=!0,C=!1}if(T&&!C)return v||(v=new n),y||l(e)?r(e,t,h,g,_,v):i(e,t,x,h,g,_,v);if(!(h&u)){var E=C&&m.call(e,`__wrapped__`),D=w&&m.call(t,`__wrapped__`);if(E||D){var ee=E?e.value():e,O=D?t.value():t;return v||(v=new n),_(ee,O,h,g,v)}}return T?(v||(v=new n),a(e,t,h,g,_,v)):!1}t.exports=h})),IS=n(((e,t)=>{var n=FS(),r=ab();function i(e,t,a,o,s){return e===t?!0:e==null||t==null||!r(e)&&!r(t)?e!==e&&t!==t:n(e,t,a,o,i,s)}t.exports=i})),LS=n(((e,t)=>{var n=zx(),r=IS(),i=1,a=2;function o(e,t,o,s){var c=o.length,l=c,u=!s;if(e==null)return!l;for(e=Object(e);c--;){var d=o[c];if(u&&d[2]?d[1]!==e[d[0]]:!(d[0]in e))return!1}for(;++c<l;){d=o[c];var f=d[0],p=e[f],m=d[1];if(u&&d[2]){if(p===void 0&&!(f in e))return!1}else{var h=new n;if(s)var g=s(p,m,f,e,t,h);if(!(g===void 0?r(m,p,i|a,s,h):g))return!1}}return!0}t.exports=o})),RS=n(((e,t)=>{var n=Ny();function r(e){return e===e&&!n(e)}t.exports=r})),zS=n(((e,t)=>{var n=RS(),r=lx();function i(e){for(var t=r(e),i=t.length;i--;){var a=t[i],o=e[a];t[i]=[a,o,n(o)]}return t}t.exports=i})),BS=n(((e,t)=>{function n(e,t){return function(n){return n!=null&&n[e]===t&&(t!==void 0||e in Object(n))}}t.exports=n})),VS=n(((e,t)=>{var n=LS(),r=zS(),i=BS();function a(e){var t=r(e);return t.length==1&&t[0][2]?i(t[0][0],t[0][1]):function(r){return r===e||n(r,e,t)}}t.exports=a})),HS=n(((e,t)=>{var n=ib(),r=Lb(),i=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,a=/^\w*$/;function o(e,t){if(n(e))return!1;var o=typeof e;return o==`number`||o==`symbol`||o==`boolean`||e==null||r(e)?!0:a.test(e)||!i.test(e)||t!=null&&e in Object(t)}t.exports=o})),US=n(((e,t)=>{var n=Lx(),r=`Expected a function`;function i(e,t){if(typeof e!=`function`||t!=null&&typeof t!=`function`)throw TypeError(r);var a=function(){var n=arguments,r=t?t.apply(this,n):n[0],i=a.cache;if(i.has(r))return i.get(r);var o=e.apply(this,n);return a.cache=i.set(r,o)||i,o};return a.cache=new(i.Cache||n),a}i.Cache=n,t.exports=i})),WS=n(((e,t)=>{var n=US(),r=500;function i(e){var t=n(e,function(e){return i.size===r&&i.clear(),e}),i=t.cache;return t}t.exports=i})),GS=n(((e,t)=>{var n=WS(),r=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,i=/\\(\\)?/g;t.exports=n(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(``),e.replace(r,function(e,n,r,a){t.push(r?a.replace(i,`$1`):n||e)}),t})})),KS=n(((e,t)=>{function n(e,t){for(var n=-1,r=e==null?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}t.exports=n})),qS=n(((e,t)=>{var n=ky(),r=KS(),i=ib(),a=Lb(),o=1/0,s=n?n.prototype:void 0,c=s?s.toString:void 0;function l(e){if(typeof e==`string`)return e;if(i(e))return r(e,l)+``;if(a(e))return c?c.call(e):``;var t=e+``;return t==`0`&&1/e==-o?`-0`:t}t.exports=l})),JS=n(((e,t)=>{var n=qS();function r(e){return e==null?``:n(e)}t.exports=r})),YS=n(((e,t)=>{var n=ib(),r=HS(),i=GS(),a=JS();function o(e,t){return n(e)?e:r(e,t)?[e]:i(a(e))}t.exports=o})),XS=n(((e,t)=>{var n=Lb(),r=1/0;function i(e){if(typeof e==`string`||n(e))return e;var t=e+``;return t==`0`&&1/e==-r?`-0`:t}t.exports=i})),ZS=n(((e,t)=>{var n=YS(),r=XS();function i(e,t){t=n(t,e);for(var i=0,a=t.length;e!=null&&i<a;)e=e[r(t[i++])];return i&&i==a?e:void 0}t.exports=i})),QS=n(((e,t)=>{var n=ZS();function r(e,t,r){var i=e==null?void 0:n(e,t);return i===void 0?r:i}t.exports=r})),$S=n(((e,t)=>{function n(e,t){return e!=null&&t in Object(e)}t.exports=n})),eC=n(((e,t)=>{var n=YS(),r=Yb(),i=ib(),a=Ob(),o=Qb(),s=XS();function c(e,t,c){t=n(t,e);for(var l=-1,u=t.length,d=!1;++l<u;){var f=s(t[l]);if(!(d=e!=null&&c(e,f)))break;e=e[f]}return d||++l!=u?d:(u=e==null?0:e.length,!!u&&o(u)&&a(f,u)&&(i(e)||r(e)))}t.exports=c})),tC=n(((e,t)=>{var n=$S(),r=eC();function i(e,t){return e!=null&&r(e,t,n)}t.exports=i})),nC=n(((e,t)=>{var n=IS(),r=QS(),i=tC(),a=HS(),o=RS(),s=BS(),c=XS(),l=1,u=2;function d(e,t){return a(e)&&o(t)?s(c(e),t):function(a){var o=r(a,e);return o===void 0&&o===t?i(a,e):n(t,o,l|u)}}t.exports=d})),rC=n(((e,t)=>{function n(e){return function(t){return t?.[e]}}t.exports=n})),iC=n(((e,t)=>{var n=ZS();function r(e){return function(t){return n(t,e)}}t.exports=r})),aC=n(((e,t)=>{var n=rC(),r=iC(),i=HS(),a=XS();function o(e){return i(e)?n(a(e)):r(e)}t.exports=o})),oC=n(((e,t)=>{var n=VS(),r=nC(),i=Ey(),a=ib(),o=aC();function s(e){return typeof e==`function`?e:e==null?i:typeof e==`object`?a(e)?r(e[0],e[1]):n(e):o(e)}t.exports=s})),sC=n(((e,t)=>{var n=yS(),r=oC(),i=1;function a(e){return r(typeof e==`function`?e:n(e,i))}t.exports=a})),cC=n(((e,t)=>{var n=ky(),r=Yb(),i=ib(),a=n?n.isConcatSpreadable:void 0;function o(e){return i(e)||r(e)||!!(a&&e&&e[a])}t.exports=o})),lC=n(((e,t)=>{var n=Yx(),r=cC();function i(e,t,a,o,s){var c=-1,l=e.length;for(a||(a=r),s||(s=[]);++c<l;){var u=e[c];t>0&&a(u)?t>1?i(u,t-1,a,o,s):n(s,u):o||(s[s.length]=u)}return s}t.exports=i})),uC=n(((e,t)=>{var n=lC();function r(e){return e!=null&&e.length?n(e,1):[]}t.exports=r})),dC=n(((e,t)=>{var n=qy(),r=Math.max;function i(e,t,i){return t=r(t===void 0?e.length-1:t,0),function(){for(var a=arguments,o=-1,s=r(a.length-t,0),c=Array(s);++o<s;)c[o]=a[t+o];o=-1;for(var l=Array(t+1);++o<t;)l[o]=a[o];return l[t]=i(c),n(e,this,l)}}t.exports=i})),fC=n(((e,t)=>{var n=uC(),r=dC(),i=_b();function a(e){return i(r(e,void 0,n),e+``)}t.exports=a})),pC=n(((e,t)=>{var n=Vb(),r=fC(),i=256;t.exports=r(function(e,t){return n(e,i,void 0,void 0,void 0,t)})})),mC=n(((e,t)=>{var n=KS(),r=ob(),i=ib(),a=Lb(),o=GS(),s=XS(),c=JS();function l(e){return i(e)?n(e,s):a(e)?[e]:r(o(c(e)))}t.exports=l})),hC=n(((e,t)=>{t.exports={ary:Hb(),assign:ux(),clone:bS(),curry:xS(),forEach:vb(),isArray:ib(),isError:CS(),isFunction:Py(),isWeakMap:wS(),iteratee:sC(),keys:sx(),rearg:pC(),toInteger:Bb(),toPath:mC()}})),gC=n(((e,t)=>{var n=Ty(),r=hC();function i(e,t,i){return n(r,e,t,i)}t.exports=i})),_C=n(((e,t)=>{function n(e,t,n){for(var r=-1,i=e==null?0:e.length;++r<i;)if(n(t,e[r]))return!0;return!1}t.exports=n})),vC=n(((e,t)=>{var n=iS(),r=$y(),i=MS();t.exports=n&&1/i(new n([,-0]))[1]==1/0?function(e){return new n(e)}:r})),yC=n(((e,t)=>{var n=DS(),r=Cb(),i=_C(),a=kS(),o=vC(),s=MS(),c=200;function l(e,t,l){var u=-1,d=r,f=e.length,p=!0,m=[],h=m;if(l)p=!1,d=i;else if(f>=c){var g=t?null:o(e);if(g)return s(g);p=!1,d=a,h=new n}else h=t?[]:m;outer:for(;++u<f;){var _=e[u],v=t?t(_):_;if(_=l||_!==0?_:0,p&&v===v){for(var y=h.length;y--;)if(h[y]===v)continue outer;t&&h.push(v),m.push(_)}else d(h,v,l)||(h!==m&&h.push(v),m.push(_))}return m}t.exports=l})),bC=n(((e,t)=>{var n=oC(),r=yC();function i(e,t){return e&&e.length?r(e,n(t,2)):[]}t.exports=i})),xC=n(((e,t)=>{var n=gC()(`uniqBy`,bC());n.placeholder=wy(),t.exports=n})),SC=W`
    ${Hf}

    mutation ADD_EXTENSION_STORE($input: AddExtensionStoreInput!) {
        addExtensionStore(input: $input) {
            extensionStore {
                ...EXTENSION_STORE_FIELDS
            }
        }
    }
`,CC=W`
    ${Hf}

    mutation REMOVE_EXTENSION_STORE($input: RemoveExtensionStoreInput!) {
        removeExtensionStore(input: $input) {
            extensionStore {
                ...EXTENSION_STORE_FIELDS
            }
        }
    }
`,wC=W`
    ${Hf}

    query GET_EXTENSION_STORE($indexUrl: String!) {
        extensionStore(indexUrl: $indexUrl) {
            ...EXTENSION_STORE_FIELDS
        }
    }
`,TC=W`
    ${Hf}
    ${Df}

    query GET_EXTENSION_STORES {
        extensionStores {
            nodes {
                ...EXTENSION_STORE_FIELDS
            }
            pageInfo {
                ...PAGE_INFO
            }
            totalCount
        }
    }
`,EC=W`
    fragment SYNC_STATUS_FIELDS on SyncStatus {
        backupRestoreId
        endDate
        errorMessage
        startDate
        state
    }
`,DC=W`
    ${EC}

    subscription SYNC_SUBSCRIPTION {
        syncStatusChanged {
            ...SYNC_STATUS_FIELDS
        }
    }
`,OC=W`
    mutation START_SYNC($input: StartSyncInput = {}) {
        startSync(input: $input) {
            result
        }
    }
`,kC=W`
    ${EC}

    query GET_SYNC_STATUS {
        lastSyncStatus {
            ...SYNC_STATUS_FIELDS
        }
    }
`,AC=W`
    mutation WEBVIEW_CLEAR_CACHE_COOKIES {
        clearCookiesAndCache {
            clientMutationId
        }
    }
`,jC=t(xC(),1),MC=`useExtensionListFetch`,NC=`GET_SOURCE_MANGAS_FETCH_FETCHING_INITIAL_PAGES`,PC=`GET_SOURCE_MANGAS_FETCH_PAGES`,FC=`GET_SOURCE_MANGAS_FETCH`,IC={REVALIDATION_UNSUPPORTED:[`57122881048805941`],REVALIDATION_SKIP_TTL:[Qv.LOCAL_SOURCE_ID]},LC=class e{constructor(){S(this,`graphQLClient`,new ef(this.refreshUser.bind(this))),S(this,`restClient`,new Ed(this.refreshUser.bind(this))),S(this,`cache`,new Pm),S(this,`imageQueue`,void 0);let e=typeof window<`u`&&window.location.protocol===`https:`&&this.detectHttp2();this.imageQueue=new $v(!e,5),Td.setTokenRefreshCompleteCallback(()=>{this.processQueues()})}detectHttp2(){let e=performance.getEntriesByType(`navigation`);return e.length?[`h2`,`h3`].includes(e[0].nextHopProtocol):!1}getClient(){return this.restClient}updateClient(e){this.restClient.updateConfig(e),this.graphQLClient.updateConfig()}reset(){J.setAuthRequired(null),J.setAuthInitialized(!1),J.removeTokens(),this.graphQLClient.reset(),this.restClient.reset(),this.cache.clear(),this.imageQueue.clear()}processQueues(){this.graphQLClient.processQueue(),this.restClient.processQueue()}getBaseUrl(){return this.restClient.getBaseUrl()}useBaseUrl(){return m(Td.BASE_URL_KEY,()=>this.getBaseUrl())}getValidUrlFor(t,n=e.API_VERSION){return`${this.getBaseUrl()}${n}${t}`}getWebviewUrl(e){return`${this.getValidUrlFor(`webview`)}#${e}`}clearBrowseCacheFor(e){let t=this.cache.getMatchingKeys(RegExp(`${NC}|${PC}|${FC}.*${e}`));this.cache.clearFor(...t)}clearExtensionCache(){this.cache.clearFor(this.cache.getKeyFor(MC,void 0))}createAbortController(){let e=new AbortController;return{signal:e.signal,abortRequest:t=>{e.signal.aborted||e.abort(t)}}}createPaginatedResult(e,t,n){let r=!e?.error&&(e?.isLoading||!e?.called),i=n??e?.size??t;return{client:this.graphQLClient.client,abortRequest:()=>{},reset:()=>{},called:!1,data:void 0,error:void 0,size:i,isLoading:r,isLoadingMore:r&&i>1,isValidating:!!e?.isValidating,...e}}async revalidatePage(e,t,n,r,i,a,o,s,c,l){if(IC.REVALIDATION_UNSUPPORTED.includes(e))return;let u=s===1,d=Date.now()-(this.cache.getFetchTimestampFor(t,r(s))??0)>=K(5).minutes.inWholeMilliseconds;if(u&&!d&&!IC.REVALIDATION_SKIP_TTL.includes(e))return;let{response:f}=this.doRequest(`MUTATION`,qp,r(s),{...i,context:{fetchOptions:{signal:l}}}),p=await f,m=a(this.cache.getResponseFor(t,r(s)),p);if(this.cache.cacheResponse(t,r(s),{...p,called:!0,isLoading:!1,size:s}),!o(p)){let e=this.cache.getResponseFor(n,r(0));this.cache.cacheResponse(n,r(0),[...e].filter(e=>e<=s)),[...e].filter(e=>e>s).forEach(e=>this.cache.cacheResponse(t,r(e),void 0));return}m&&s<c&&await this.revalidatePage(e,t,n,r,i,a,o,s+1,c,l)}async revalidatePages(e,t,n,r,i,a,o,s,c){t(!0);let[l,u,d]=e??[],f=JSON.stringify(l)===JSON.stringify(r(0));i(!0),f||d?.(Error(`Abort revalidation for different input`));let p=u;f||(p=a(1,o,c),n([r(0),p,s]));try{await p,n(null)}catch(e){Wu(`RequestManager..revalidatePages(${r(0)})`)(e)}finally{i(!1)}}async fetchPaginatedMutationPage(e,t,n,r,i,a,s,c,l,u,d,f){let p={size:f,isLoading:!1,isLoadingMore:!1,called:!0},m={data:void 0};try{let{signal:o,abortRequest:h}=this.createAbortController();t(h),f===[...d][d.size-1]&&(this.cache.cacheResponse(l,e(0),new Set([...d].slice(0,d.size-1))),this.cache.clearFor(this.cache.getKeyFor(u,e(f)))),i({...n(),...r({isLoading:!0,abortRequest:h,size:f,called:!0})}),f!==1&&d.size&&await a(f,h,o);let{response:g}=this.doRequest(`MUTATION`,c,e(f),{...s,context:{fetchOptions:{signal:o}}});m=await g,p.data=m.data}catch(e){Wu(`RequestManager::fetchPaginatedMutationPage`)(e),p.error=o.is(e)?e:Error(e?.message??String(e))}let h={...n(),...r(p)};i(h);let g=this.cache.getResponseFor(l,e(0))??[];return this.cache.cacheResponse(l,e(0),new Set([...g,f])),this.cache.cacheResponse(u,e(f),h),m}fetchInitialPages(e,t,n,r,i,a,o,s,c){(0,q.useEffect)(()=>{if(!(!e?.skipRequest&&!t&&!n))return;r(!0),this.cache.cacheResponse(i,a(0),!0);let l=async e=>{e>o||c(await s(e))&&await l(e+1)};l(1).finally(()=>this.cache.cacheResponse(i,a(0),!1))},[!e?.skipRequest,!t,!n])}returnPaginatedMutationResult(e,t,n,r,i,a,o){let s=e&&t.length;return s?s&&a?[i,[...t.slice(0,t.length-1),o({...t[t.length-1],isValidating:r.isValidating})]]:[i,[...t,r]]:[i,[r]]}revalidateInitialPages(e,t,n,r,i,a,o){let s=(0,q.useRef)(!1);(0,q.useEffect)(()=>{s.current&&t&&(r(!1),a())},[JSON.stringify(i(0))]),(0,q.useEffect)(()=>{if(s.current&&!e&&t){r(!0);let{signal:e,abortRequest:t}=this.createAbortController();o(Math.max(...n),t,e)}},[s.current,e]),(0,q.useEffect)(()=>{s.current=!0},[])}getValidImgUrlFor(e,t=``){return`${this.getValidUrlFor(e,t)}`}abortImageRequest(e,t,n){this.imageQueue.isProcessing(t,e)||n()}async optionallyDecodeImage(e,t,n){if(!t)return e;let r=new Ku,i=new Image;return n||(i.crossOrigin=`anonymous`),i.src=e,i.onload=async()=>{try{await i.decode()}catch(e){r.reject(e)}r.resolve()},i.onerror=e=>r.reject(e),i.onabort=e=>r.reject(e),await r.promise,e}getSourceIdFromUrl(e){try{return new URL(e).searchParams.get(`sourceId`)}catch{return null}}async maybeEnqueueImageRequest(e,t,n,r){let i=this.getSourceIdFromUrl(e);try{let a=await Sy.has(e);return r||a?{key:`image-cache-${e}`,promise:t(),fromCache:a}:this.imageQueue.enqueue(i,e,t,n)}catch{return this.imageQueue.enqueue(i,e,t,n)}}async fetchImageViaTag(e,{priority:t,shouldDecode:n,disableCors:r,ignoreQueue:i}={}){let a=new Ku;a.promise.catch(()=>{});let o=new Image,s=e=>{o.src=``,o.onload=null,o.onerror=null,o.onabort=null,a.reject(e)},{key:c,promise:l,fromCache:u}=await this.maybeEnqueueImageRequest(e,async()=>(await Promise.race([a.promise,Promise.resolve()]),r||(o.crossOrigin=`anonymous`),o.src=e,o.onload=async()=>{try{await this.optionallyDecodeImage(e,n),a.resolve(e)}catch(e){a.reject(e)}},o.onerror=e=>a.reject(e),o.onabort=e=>a.reject(e),a.promise),t,i);return{response:l,abortRequest:t=>this.abortImageRequest(c,this.getSourceIdFromUrl(e),()=>s(t)),cleanup:()=>{},fromCache:!!u}}async fetchImageViaFetchApi(e,{priority:t,shouldDecode:n,disableCors:r,ignoreQueue:i}={}){let a=``,{abortRequest:o,signal:s}=this.createAbortController(),{key:c,promise:l,fromCache:u}=await this.maybeEnqueueImageRequest(e,()=>this.restClient.fetcher(e,{checkResponseIsJson:!1,config:{signal:s,priority:`low`}}).then(e=>e.blob()).then(e=>URL.createObjectURL(e)).then(async e=>(a=e,await this.optionallyDecodeImage(e,n,r),e)),t,i);return{response:l,abortRequest:t=>this.abortImageRequest(c,this.getSourceIdFromUrl(e),()=>o(t)),cleanup:()=>URL.revokeObjectURL(a),fromCache:!!u}}async requestImage(e,t={}){let n={useFetchApi:J.isAuthRequired(),shouldDecode:!1,disableCors:!1,ignoreQueue:!1,...Object.fromEntries(Object.entries(t).filter(([,e])=>e!==void 0))},r=n.shouldDecode&&navigator.userAgent.toLowerCase().includes(`firefox`);return n.useFetchApi?this.fetchImageViaFetchApi(e,{...n,shouldDecode:r}):this.fetchImageViaTag(e,{...n,shouldDecode:r})}doRequest(e,t,n,r){let{signal:i,abortRequest:a}=this.createAbortController();switch(e){case`QUERY`:{let{addAbortSignal:e,...o}=r??{};return{response:this.graphQLClient.client.query({query:t,variables:n,...o,context:{...o?.context,fetchOptions:{signal:e?i:void 0,...o?.context?.fetchOptions}}}),abortRequest:a}}case`USE_QUERY`:{let{addAbortSignal:e,...o}=r??{};return{...pd(t,{variables:n,client:this.graphQLClient.client,...o,context:{...o?.context,fetchOptions:{signal:e?i:void 0,...o?.context?.fetchOptions}}}),abortRequest:a}}case`USE_MUTATION`:{let{addAbortSignal:e,...o}=r??{},s=ud(t,{variables:n,client:this.graphQLClient.client,...o,context:{...o?.context,fetchOptions:{signal:e?i:void 0,...o?.context?.fetchOptions}}});return[s[0],{...s[1],abortRequest:a}]}case`MUTATION`:{let{addAbortSignal:e,...o}=r??{};return{response:this.graphQLClient.client.mutate({mutation:t,variables:n,...o,context:{...o?.context,fetchOptions:{signal:e?i:void 0,...o?.context?.fetchOptions}}}),abortRequest:a}}case`USE_SUBSCRIPTION`:{let e=xd(t,{client:this.graphQLClient.client,variables:n,...r});return this.graphQLClient.useRestartSubscription(e.restart),e}default:throw Error(`unexpected GQLRequest type "${e}"`)}}getGlobalMeta(e){return this.doRequest(`QUERY`,kf,{},e)}useGetGlobalMeta(e){return this.doRequest(`USE_QUERY`,kf,{},e)}updateGlobalMeta({preUpdateDeleteInput:e={keys:[]},updateInput:t={metas:[]},postUpdateDeleteInput:n={keys:[]},migrateInput:r={metas:[]}},i){return this.doRequest(`MUTATION`,Af,{preUpdateDeleteInput:e,hasPreUpdateDeletions:!!e.keys?.length||!!e.prefixes?.length,updateInput:t,hasUpdates:!!t.metas.length,postUpdateDeleteInput:n,hasPostUpdateDeletions:!!n.keys?.length||!!n.prefixes?.length,migrateInput:r,isMigration:!!r.metas.length},{optimisticResponse:{__typename:`Mutation`,preUpdateDeletedMeta:{__typename:`DeleteGlobalMetasPayload`,metas:(e?.keys??[]).map(e=>({__typename:`GlobalMetaType`,key:e,value:``}))},updatedMeta:{__typename:`SetGlobalMetasPayload`,metas:(t?.metas??[]).map(e=>({__typename:`GlobalMetaType`,key:e.key,value:e.value}))},postUpdateDeletedMeta:{__typename:`DeleteGlobalMetasPayload`,metas:(n?.keys??[]).map(e=>({__typename:`GlobalMetaType`,key:e,value:``}))},migrationMeta:{__typename:`SetGlobalMetasPayload`,metas:(r?.metas??[]).map(e=>({__typename:`GlobalMetaType`,key:e.key,value:e.value}))}},update(t,{data:r}){e?.keys?.forEach(e=>{t.evict({id:t.identify({__typename:`GlobalMetaType`,key:e})})}),n?.keys?.forEach(e=>{t.evict({id:t.identify({__typename:`GlobalMetaType`,key:e})})}),t.modify({fields:{metas(e,{readField:n}){if(!e||!r?.updatedMeta&&!r?.migrationMeta)return e;let i=[...r?.updatedMeta?.metas??[],...r?.migrationMeta?.metas??[]].filter(t=>e.nodes.every(e=>n(`key`,e)!==t.key)).map(e=>t.writeFragment({data:e,fragment:Of}));return{...e,nodes:[...e.nodes,...i]}}}})},...i})}useGetAbout(e){return this.doRequest(`USE_QUERY`,Ff,{},e)}useCheckForServerUpdate(e){return this.doRequest(`USE_QUERY`,If,{},e)}useCheckForWebUIUpdate(e){return this.doRequest(`USE_QUERY`,Lf,{},e)}updateWebUI(e){return this.doRequest(`MUTATION`,Gm,void 0,e)}useGetExtensionStore(e,t){return this.doRequest(`USE_QUERY`,wC,{indexUrl:e},t)}useGetExtensionStores(e){return this.doRequest(`USE_QUERY`,TC,void 0,e)}useAddExtensionStore(e){return this.doRequest(`USE_MUTATION`,SC,void 0,{refetchQueries:[TC],...e})}useRemoveExtensionStore(e){let[t,n]=this.doRequest(`USE_MUTATION`,CC,void 0,{refetchQueries:[TC],...e});return[e=>{let n=e?.variables;y_(n);let{indexUrl:r}=n.input;return t({update:e=>{e.updateQuery({query:TC},e=>({...e,extensionStores:{...e.extensionStores,nodes:e.extensionStores.nodes.filter(e=>e.indexUrl!==r)}}))},optimisticResponse:{__typename:`Mutation`,removeExtensionStore:{__typename:`RemoveExtensionStorePayload`,extensionStore:{__typename:`ExtensionStoreType`,indexUrl:r,signingKey:``,name:`store`,isLegacy:!1,badgeLabel:``,contactWebsite:``,contactDiscord:null,extensionListUrl:null,extensions:{__typename:`ExtensionNodeList`,totalCount:0}}}},...e})},n]}useGetExtension(e,t){return this.doRequest(`USE_QUERY`,Bf,{pkgName:e},t)}useGetExtensionList(e){return this.doRequest(`USE_QUERY`,Vf,{},e)}useExtensionListFetch(e){let[t,n]=this.doRequest(`USE_MUTATION`,Uf,{},{...e,refetchQueries:[Vf],update(e,{data:t}){t?.fetchExtensions?.extensions&&e.updateQuery({query:Vf},()=>({__typename:`Query`,extensions:{__typename:`ExtensionNodeList`,nodes:t?.fetchExtensions?.extensions??[],pageInfo:{__typename:`PageInfo`,hasNextPage:!1,hasPreviousPage:!1,startCursor:null,endCursor:null},totalCount:t?.fetchExtensions?.extensions.length??0}}))}}),[,r]=(0,q.useState)({});(0,q.useEffect)(()=>{n.loading||n.data?.fetchExtensions?.extensions&&(this.cache.cacheResponse(MC,void 0,n),r({}))},[n.loading]);let i=()=>this.cache.getResponseFor(MC,void 0,K(1).minutes.inWholeMilliseconds),a=i(),o=(0,q.useMemo)(()=>a?{...a,data:a?.data?.fetchExtensions?.extensions?{...a.data,fetchExtensions:{...a.data.fetchExtensions,extensions:a.data.fetchExtensions.extensions.map(e=>this.graphQLClient.client.cache.readFragment({id:this.graphQLClient.client.cache.identify(e),fragment:zf})??e),extensionStores:a.data.fetchExtensions.extensionStores.map(e=>this.graphQLClient.client.cache.readFragment({id:this.graphQLClient.client.cache.identify(e),fragment:Hf}))}}:a?.data}:n,[this.cache.getFetchTimestampFor(MC,void 0),n.loading]);return[async e=>i()?o:t(e),o]}installExternalExtension(e,t){let n=this.doRequest(`MUTATION`,Kf,{file:e},{refetchQueries:[Vf],...t});return n.response.then(e=>{if(!e.data?.installExternalExtension?.extension)return;this.graphQLClient.client.cache.evict({fieldName:`sources`});let t=this.cache.getResponseFor(MC,void 0),n=e.data?.installExternalExtension.extension;if(!t||!t.data){this.cache.cacheResponse(MC,void 0,{data:{fetchExtensions:{extensions:[n]}}});return}let r=!!t.data.fetchExtensions?.extensions.find(e=>n?.pkgName===e.pkgName),i={...t,data:{...t.data,fetchExtensions:{__typename:`FetchExtensionsPayload`,...t.data.fetchExtensions,extensions:r?t.data.fetchExtensions.extensions.map(e=>n?.pkgName===e.pkgName?{...e,...n,hasUpdate:Number(n?.versionCodeLong??-1)<Number(e.versionCodeLong)}:e):[...t.data.fetchExtensions?.extensions??[],n],extensionStores:t.data?.fetchExtensions.extensionStores}}};this.cache.cacheResponse(MC,void 0,i)}),n}updateExtension(e,{isObsolete:t=!1,...n},r){let i=this.doRequest(`MUTATION`,Wf,{input:{id:e,patch:n}},r);return i.response.then(n=>{if(n.error)return;this.graphQLClient.client.cache.evict({fieldName:`sources`});let r=this.cache.getResponseFor(MC,void 0);if(!r||!r.data)return;let i={...r,data:{...r.data,fetchExtensions:{__typename:`FetchExtensionsPayload`,...r.data.fetchExtensions,extensions:r.data.fetchExtensions?.extensions.filter(n=>!t||e!==n.pkgName).map(t=>e===t.pkgName?{...t,...n.data?.updateExtension?.extension??[]}:t)??[],extensionStores:r.data.fetchExtensions?.extensionStores??[]}}};this.cache.cacheResponse(MC,void 0,i)}),i}updateExtensions(e,{isObsolete:t=!1,...n},r){let i=this.doRequest(`MUTATION`,Gf,{input:{ids:e,patch:n}},r);return i.response.then(n=>{if(n.error)return;this.graphQLClient.client.cache.evict({fieldName:`sources`});let r=this.cache.getResponseFor(MC,void 0);if(!r||!r.data)return;let i={...r,data:{...r.data,fetchExtensions:{__typename:`FetchExtensionsPayload`,...r.data.fetchExtensions,extensions:r.data.fetchExtensions?.extensions.filter(n=>!t||!e.includes(n.pkgName)).map(t=>e.includes(t.pkgName)?{...t,...n.data?.updateExtensions?.extensions.find(e=>e.pkgName===t.pkgName)??[]}:t)??[],extensionStores:r.data.fetchExtensions?.extensionStores??[]}}};this.cache.cacheResponse(MC,void 0,i)}),i}getExtensionIconUrl(e){return this.getValidImgUrlFor(`extension/icon/${e}`)}useGetSourceList(e){return this.doRequest(`USE_QUERY`,tp,{},e)}useGetSource(e,t,n){return this.doRequest(`USE_QUERY`,e,{id:t},n)}updateSourceMeta({preUpdateDeleteInput:e={items:[]},updateInput:t={items:[]},postUpdateDeleteInput:n={items:[]},migrateInput:r={items:[]}},i){return this.doRequest(`MUTATION`,Xp,{preUpdateDeleteInput:e,hasPreUpdateDeletions:e.items.some(e=>!!e.keys?.length||!!e.prefixes?.length),updateInput:t,hasUpdates:t.items.some(e=>!!e.metas?.length),postUpdateDeleteInput:n,hasPostUpdateDeletions:n.items.some(e=>!!e.keys?.length||!!e.prefixes?.length),migrateInput:r,isMigration:r.items.some(e=>!!e.metas?.length)},{optimisticResponse:{__typename:`Mutation`,preUpdateDeletedMeta:{__typename:`DeleteSourceMetasPayload`,metas:(e?.items??[]).flatMap(e=>e.sourceIds.flatMap(t=>(e.keys??[]).map(e=>({__typename:`SourceMetaType`,sourceId:t,key:e,value:``}))))},updatedMeta:{__typename:`SetSourceMetasPayload`,metas:(t?.items??[]).flatMap(e=>e.sourceIds.flatMap(t=>e.metas.map(e=>({__typename:`SourceMetaType`,sourceId:t,key:e.key,value:e.value}))))},postUpdateDeletedMeta:{__typename:`DeleteSourceMetasPayload`,metas:(n?.items??[]).flatMap(e=>e.sourceIds.flatMap(t=>(e.keys??[]).map(e=>({__typename:`SourceMetaType`,sourceId:t,key:e,value:``}))))},migrationMeta:{__typename:`SetSourceMetasPayload`,metas:(r?.items??[]).flatMap(e=>e.sourceIds.flatMap(t=>e.metas.map(e=>({__typename:`SourceMetaType`,sourceId:t,key:e.key,value:e.value}))))}},update(i,{data:a}){e?.items.forEach(e=>e.sourceIds.forEach(t=>e.keys?.forEach(e=>{i.evict({id:i.identify({__typename:`SourceMetaType`,sourceId:t,key:e})})}))),n?.items.forEach(e=>e.sourceIds.forEach(t=>e.keys?.forEach(e=>{i.evict({id:i.identify({__typename:`SourceMetaType`,sourceId:t,key:e})})}))),!(!a?.updatedMeta&&!a?.migrationMeta)&&[...t.items.flatMap(e=>e.sourceIds),...r.items.flatMap(e=>e.sourceIds)].forEach(e=>{i.modify({id:i.identify({__typename:`SourceType`,id:e}),fields:{meta(t,{readField:n}){return my([...a?.updatedMeta?.metas.filter(t=>t.sourceId===e)??[],...a?.migrationMeta?.metas.filter(t=>t.sourceId===e)??[]],t,n,e=>i.writeFragment({data:e,fragment:qf}))}}})})},...i})}useGetSourceMangas(e,t=1,n){let r=(t,n)=>this.createPaginatedResult(t,e.page,n),i=t=>({input:{...e,page:t}}),a=(0,q.useRef)(!1),o=(0,q.useRef)(null),s=(0,q.useRef)(()=>{}),c=(0,q.useRef)(null),l=c.current,[,u]=(0,q.useState)(0),d=()=>u(e=>e+1),f=e=>{c.current=e,d()},p=this.cache.getResponseFor(PC,i(0))??new Set,m=[...p].map(e=>this.cache.getResponseFor(FC,i(e))).sort((e,t)=>e.size-t.size),h=!!this.cache.getResponseFor(NC,i(0)),g=m.length>=t||!!m.length&&!m[m.length-1].data?.fetchSourceManga?.hasNextPage,_=l?.forInput===JSON.stringify(i(0)),v=p.size?Math.max(...p):e.page,y=_?l.size:v,b=_&&g?l:r(void 0,y);b.abortRequest=s.current,c.current={forInput:JSON.stringify(i(0)),...b};let x=!!this.cache.getResponseFor(FC,i(y)),S=async(t,r,a)=>this.revalidatePage(e.source,FC,PC,i,n,(e,t)=>!e||!e.data?.fetchSourceManga?.mangas.length||e.data.fetchSourceManga.mangas.some((e,n)=>e.id!==t.data?.fetchSourceManga?.mangas[n]?.id),e=>!!e.data?.fetchSourceManga?.hasNextPage,t,r,a),C=async(e,t,n)=>this.revalidatePages(o.current,e=>{a.current=e},e=>{o.current=e},i,e=>{f({...r(c.current),isValidating:e,forInput:JSON.stringify(i(0))})},S,e,t,n),w=async t=>this.fetchPaginatedMutationPage(i,e=>{s.current=e},()=>({forType:e.type,forQuery:e.query}),r,f,C,n,qp,PC,FC,p,t);this.fetchInitialPages(n,h,g,e=>{a.current=e},NC,i,t,w,e=>!!e.data?.fetchSourceManga?.hasNextPage),this.revalidateInitialPages(a.current,m.length,p,e=>{a.current=e},i,d,C);let T=m.map(e=>e.data?.fetchSourceManga?.mangas?{...e,data:{...e.data,fetchSourceManga:{...e.data?.fetchSourceManga,mangas:e.data?.fetchSourceManga?.mangas.map(e=>this.graphQLClient.client.cache.readFragment({id:this.graphQLClient.client.cache.identify(e),fragment:ip,fragmentName:`MANGA_BASE_FIELDS`})??e)}}}:e);return this.returnPaginatedMutationResult(g,T,i,b,w,x,r)}useGetSourcePopularMangas(e,t,n){return this.useGetSourceMangas({type:ff.Popular,source:e,page:1},t,n)}useGetSourceLatestMangas(e,t,n){return this.useGetSourceMangas({type:ff.Latest,source:e,page:1},t,n)}setSourcePreferences(e,t,n){return this.doRequest(`MUTATION`,Yp,{input:{source:e,change:t}},n)}useSourceSearch(e,t,n,r,i){return this.useGetSourceMangas({type:ff.Search,source:e,query:t,filters:n,page:1},r,i)}useGetManga(e,t,n){return this.doRequest(`USE_QUERY`,e,{id:Number(t)},n)}getManga(e,t,n){return this.doRequest(`QUERY`,e,{id:Number(t)},n)}getMangaToMigrate(e,{migrateChapters:t=!1,migrateCategories:n=!1,migrateTracking:r=!1,deleteChapters:i=!1,migrateMetadata:a=!1,apolloOptions:o}={}){return this.doRequest(`QUERY`,Np,{id:Number(e),getChapterData:t||i,migrateCategories:n,migrateTracking:r,migrateMetadata:a},o)}refreshManga(e,{fetchManga:t=!0,fetchChapters:n=!0,...r}={}){return this.doRequest(`MUTATION`,yp,{id:Number(e),fetchManga:t,fetchChapters:n},{refetchQueries:[fm,dm],...r})}getMangaToMigrateToFetch(e,{migrateChapters:t=!1,migrateCategories:n=!1,migrateTracking:r=!1,apolloOptions:i}={}){return this.doRequest(`MUTATION`,bp,{id:Number(e),migrateChapters:t,migrateCategories:n,migrateTracking:r},i)}useGetMangas(e,t,n){return this.doRequest(`USE_QUERY`,e,t,n)}getMangas(e,t,n){return this.doRequest(`QUERY`,e,t,n)}useUpdateMangaCategories(e){let[t,n]=this.doRequest(`USE_MUTATION`,Cp,void 0,e);return[e=>t({onCompleted:()=>{this.graphQLClient.client.refetchQueries({updateCache(e){let t=e.extract();for(let[n,r]of Object.entries(t))r.__typename===`CategoryType`&&e.evict({id:n});e.evict({fieldName:`categories`}),e.evict({fieldName:`mangas`})}})},...e}),n]}updateMangasCategories(e,t,n){let r=this.doRequest(`MUTATION`,wp,{input:{ids:e,patch:t}},n);return r.response.then(()=>{this.graphQLClient.client.refetchQueries({updateCache(e){let t=e.extract();for(let[n,r]of Object.entries(t))r.__typename===`CategoryType`&&e.evict({id:n});e.evict({fieldName:`categories`}),e.evict({fieldName:`mangas`})}})}),r}updateManga(e,t,n){let r=this.doRequest(`MUTATION`,xp,{input:{id:e,patch:t.updateManga},updateCategoryInput:{id:e,patch:t.updateMangaCategories??{}},updateCategories:!!t.updateMangaCategories},n);return r.response.then(()=>{this.graphQLClient.client.refetchQueries({updateCache(e){e.evict({fieldName:`categories`}),e.evict({fieldName:`category`}),e.evict({fieldName:`mangas`})}})}),r}updateMangas(e,t,n){let r=this.doRequest(`MUTATION`,Sp,{input:{ids:e,patch:t.updateMangas},updateCategoryInput:{ids:e,patch:t.updateMangasCategories??{}},updateCategories:!!t.updateMangasCategories},n);return r.response.then(()=>{this.graphQLClient.client.refetchQueries({updateCache(e){e.evict({fieldName:`categories`}),e.evict({fieldName:`category`}),e.evict({fieldName:`mangas`})}})}),r}updateMangaMeta({preUpdateDeleteInput:e={items:[]},updateInput:t={items:[]},postUpdateDeleteInput:n={items:[]},migrateInput:r={items:[]}},i){return this.doRequest(`MUTATION`,Tp,{preUpdateDeleteInput:e,hasPreUpdateDeletions:e.items.some(e=>!!e.keys?.length||!!e.prefixes?.length),updateInput:t,hasUpdates:t.items.some(e=>!!e.metas?.length),postUpdateDeleteInput:n,hasPostUpdateDeletions:n.items.some(e=>!!e.keys?.length||!!e.prefixes?.length),migrateInput:r,isMigration:r.items.some(e=>!!e.metas?.length)},{optimisticResponse:{__typename:`Mutation`,preUpdateDeletedMeta:{__typename:`DeleteMangaMetasPayload`,metas:(e?.items??[]).flatMap(e=>e.mangaIds.flatMap(t=>(e.keys??[]).map(e=>({__typename:`MangaMetaType`,mangaId:t,key:e,value:``}))))},updatedMeta:{__typename:`SetMangaMetasPayload`,metas:(t?.items??[]).flatMap(e=>e.mangaIds.flatMap(t=>e.metas.map(e=>({__typename:`MangaMetaType`,mangaId:t,key:e.key,value:e.value}))))},postUpdateDeletedMeta:{__typename:`DeleteMangaMetasPayload`,metas:(n?.items??[]).flatMap(e=>e.mangaIds.flatMap(t=>(e.keys??[]).map(e=>({__typename:`MangaMetaType`,mangaId:t,key:e,value:``}))))},migrationMeta:{__typename:`SetMangaMetasPayload`,metas:(r?.items??[]).flatMap(e=>e.mangaIds.flatMap(t=>e.metas.map(e=>({__typename:`MangaMetaType`,mangaId:t,key:e.key,value:e.value}))))}},update(i,{data:a}){e?.items.forEach(e=>e.mangaIds.forEach(t=>e.keys?.forEach(e=>{i.evict({id:i.identify({__typename:`MangaMetaType`,mangaId:t,key:e})})}))),n?.items.forEach(e=>e.mangaIds.forEach(t=>e.keys?.forEach(e=>{i.evict({id:i.identify({__typename:`MangaMetaType`,mangaId:t,key:e})})}))),!(!a?.updatedMeta&&!a?.migrationMeta)&&[...t.items.flatMap(e=>e.mangaIds),...r.items.flatMap(e=>e.mangaIds)].forEach(e=>{i.modify({id:i.identify({__typename:`MangaType`,id:e}),fields:{meta(t,{readField:n}){return my([...a?.updatedMeta?.metas.filter(t=>t.mangaId===e)??[],...a?.migrationMeta?.metas.filter(t=>t.mangaId===e)??[]],t,n,e=>i.writeFragment({data:e,fragment:rp}))}}})})},...i})}useGetChapters(e,t,n){return this.doRequest(`USE_QUERY`,e,t,n)}getChapters(e,t,n){return this.doRequest(`QUERY`,e,t,n)}useGetMangaChapters(e,t,n){return this.useGetChapters(e,{condition:{mangaId:Number(t)},order:[{by:of.SourceOrder,byType:yf.Desc}]},n)}useGetMangaChapter(e,t,n){let r=this.useGetChapters(fm,{condition:{mangaId:Number(e),sourceOrder:Number(t)}},n);return r.data?{...r,data:{chapter:r.data.chapters.nodes[0]}}:r}useGetChapterPagesFetch(e,t){return this.doRequest(`USE_MUTATION`,gm,{input:{chapterId:Number(e)}},t)}deleteDownloadedChapter(e,t){return this.doRequest(`MUTATION`,tm,{input:{id:e}},t)}deleteDownloadedChapters(e,t){return this.doRequest(`MUTATION`,nm,{input:{ids:e}},t)}updateChapter(e,t,n){let{chapterIdToDelete:r=-1,trackProgressMangaId:i=-1,...a}=t;return this.doRequest(`MUTATION`,_m,{input:{id:e,patch:a},getBookmarked:t.isBookmarked!=null,getRead:t.isRead!=null,getLastPageRead:t.lastPageRead!=null,chapterIdToDelete:r,deleteChapter:r>=0,mangaId:i,trackProgress:i>=0},n)}updateChapterMeta({preUpdateDeleteInput:e={items:[]},updateInput:t={items:[]},postUpdateDeleteInput:n={items:[]},migrateInput:r={items:[]}},i){return this.doRequest(`MUTATION`,ym,{preUpdateDeleteInput:e,hasPreUpdateDeletions:e.items.some(e=>!!e.keys?.length||!!e.prefixes?.length),updateInput:t,hasUpdates:t.items.some(e=>!!e.metas?.length),postUpdateDeleteInput:n,hasPostUpdateDeletions:n.items.some(e=>!!e.keys?.length||!!e.prefixes?.length),migrateInput:r,isMigration:r.items.some(e=>!!e.metas?.length)},{optimisticResponse:{__typename:`Mutation`,preUpdateDeletedMeta:{__typename:`DeleteChapterMetasPayload`,metas:(e?.items??[]).flatMap(e=>e.chapterIds.flatMap(t=>(e.keys??[]).map(e=>({__typename:`ChapterMetaType`,chapterId:t,key:e,value:``}))))},updatedMeta:{__typename:`SetChapterMetasPayload`,metas:(t?.items??[]).flatMap(e=>e.chapterIds.flatMap(t=>e.metas.map(e=>({__typename:`ChapterMetaType`,chapterId:t,key:e.key,value:e.value}))))},postUpdateDeletedMeta:{__typename:`DeleteChapterMetasPayload`,metas:(n?.items??[]).flatMap(e=>e.chapterIds.flatMap(t=>(e.keys??[]).map(e=>({__typename:`ChapterMetaType`,chapterId:t,key:e,value:``}))))},migrationMeta:{__typename:`SetChapterMetasPayload`,metas:(r?.items??[]).flatMap(e=>e.chapterIds.flatMap(t=>e.metas.map(e=>({__typename:`ChapterMetaType`,chapterId:t,key:e.key,value:e.value}))))}},update(i,{data:a}){e?.items.forEach(e=>e.chapterIds.forEach(t=>e.keys?.forEach(e=>{i.evict({id:i.identify({__typename:`ChapterMetaType`,chapterId:t,key:e})})}))),n?.items.forEach(e=>e.chapterIds.forEach(t=>e.keys?.forEach(e=>{i.evict({id:i.identify({__typename:`ChapterMetaType`,chapterId:t,key:e})})}))),!(!a?.updatedMeta&&!a?.migrationMeta)&&[...t.items.flatMap(e=>e.chapterIds),...r.items.flatMap(e=>e.chapterIds)].forEach(e=>{i.modify({id:i.identify({__typename:`ChapterType`,id:e}),fields:{meta(t,{readField:n}){return my([...a?.updatedMeta?.metas.filter(t=>t.chapterId===e)??[],...a?.migrationMeta?.metas.filter(t=>t.chapterId===e)??[]],t,n,e=>i.writeFragment({data:e,fragment:fp}))}}})})},...i})}getChapterPageUrl(t,n,r){return this.getValidImgUrlFor(`manga/${t}/chapter/${n}/page/${r}`,e.API_VERSION)}updateChapters(e,t,n){let{chapterIdsToDelete:r=[],trackProgressMangaId:i=-1,...a}=t;return this.doRequest(`MUTATION`,vm,{input:{ids:e,patch:a},getBookmarked:t.isBookmarked!=null,getRead:t.isRead!=null,getLastPageRead:t.lastPageRead!=null,chapterIdsToDelete:r,deleteChapters:!!r.length,mangaId:i,trackProgress:i>=0},n)}useGetCategories(e,t){return this.doRequest(`USE_QUERY`,e,{order:[{by:rf.Order}]},t)}getCategories(e,t){return this.doRequest(`QUERY`,e,{order:[{by:rf.Order}]},t)}createCategory(e,t){return this.doRequest(`MUTATION`,bm,{input:e},{refetchQueries:[Up,Wp,Gp],...t})}useReorderCategory(e){let[t,n]=this.doRequest(`USE_MUTATION`,Cm,void 0,{refetchQueries:[Up,Wp],...e});return[e=>{let n=e?.variables?.input,r=this.graphQLClient.client.readQuery({query:Gp,variables:{order:[{by:rf.Order}]}})?.categories.nodes;if(!n)throw Error(`useReorderCategory: no variables passed`);if(!r)throw Error(`useReorderCategory: there are no cached results`);let i=r.findIndex(e=>e.id===n.id),a=[...r.map(e=>({...e}))],[o]=a.splice(i,1);return a.splice(n.position,0,o),o.order=n.position,a[i].order=i,t({update:e=>{e.updateQuery({id:e.identify({__typename:`CategoryNodeList`}),query:Gp,variables:{order:[{by:rf.Order}]}},e=>({...e,categories:{...e.categories,nodes:a}}))},optimisticResponse:{__typename:`Mutation`,updateCategoryOrder:{__typename:`UpdateCategoryOrderPayload`,categories:a}},...e})},n]}useGetCategoryMangas(e,t){if(e===0){let{data:n,...r}=this.doRequest(`USE_QUERY`,Kp,{id:e},t);return{...r,data:n?{...n?.category,__typename:`Query`}:void 0}}return this.useGetMangas(Fp,{condition:{inLibrary:!0,categoryIds:[e]}},t)}deleteCategory(e,t){let n=this.doRequest(`MUTATION`,xm,{input:{categoryId:e}},t);return n.response.then(()=>{this.graphQLClient.client.refetchQueries({updateCache(t){t.evict({id:t.identify({__typename:`CategoryType`,id:e.toString()})})}})}),n}updateCategory(e,t,n){return this.doRequest(`MUTATION`,Sm,{input:{id:e,patch:t},getIncludeInUpdate:t.includeInUpdate!=null,getIncludeInDownload:t.includeInDownload!=null,getDefault:t.default!=null,getName:t.name!=null},n)}updateCategoryMeta({preUpdateDeleteInput:e={items:[]},updateInput:t={items:[]},postUpdateDeleteInput:n={items:[]},migrateInput:r={items:[]}},i){return this.doRequest(`MUTATION`,wm,{preUpdateDeleteInput:e,hasPreUpdateDeletions:e.items.some(e=>!!e.keys?.length||!!e.prefixes?.length),updateInput:t,hasUpdates:t.items.some(e=>!!e.metas?.length),postUpdateDeleteInput:n,hasPostUpdateDeletions:n.items.some(e=>!!e.keys?.length||!!e.prefixes?.length),migrateInput:r,isMigration:r.items.some(e=>!!e.metas?.length)},{optimisticResponse:{__typename:`Mutation`,preUpdateDeletedMeta:{__typename:`DeleteCategoryMetasPayload`,metas:(e?.items??[]).flatMap(e=>e.categoryIds.flatMap(t=>(e.keys??[]).map(e=>({__typename:`CategoryMetaType`,categoryId:t,key:e,value:``}))))},updatedMeta:{__typename:`SetCategoryMetasPayload`,metas:(t?.items??[]).flatMap(e=>e.categoryIds.flatMap(t=>e.metas.map(e=>({__typename:`CategoryMetaType`,categoryId:t,key:e.key,value:e.value}))))},postUpdateDeletedMeta:{__typename:`DeleteCategoryMetasPayload`,metas:(n?.items??[]).flatMap(e=>e.categoryIds.flatMap(t=>(e.keys??[]).map(e=>({__typename:`CategoryMetaType`,categoryId:t,key:e,value:``}))))},migrationMeta:{__typename:`SetCategoryMetasPayload`,metas:(r?.items??[]).flatMap(e=>e.categoryIds.flatMap(t=>e.metas.map(e=>({__typename:`CategoryMetaType`,categoryId:t,key:e.key,value:e.value}))))}},update(i,{data:a}){e?.items.forEach(e=>e.categoryIds.forEach(t=>e.keys?.forEach(e=>{i.evict({id:i.identify({__typename:`CategoryMetaType`,categoryId:t,key:e})})}))),n?.items.forEach(e=>e.categoryIds.forEach(t=>e.keys?.forEach(e=>{i.evict({id:i.identify({__typename:`CategoryMetaType`,categoryId:t,key:e})})}))),!(!a?.updatedMeta&&!a?.migrationMeta)&&[...t.items.flatMap(e=>e.categoryIds),...r.items.flatMap(e=>e.categoryIds)].forEach(e=>{i.modify({id:i.identify({__typename:`CategoryType`,id:e}),fields:{meta(t,{readField:n}){return my([...a?.updatedMeta?.metas.filter(t=>t.categoryId===e)??[],...a?.migrationMeta?.metas.filter(t=>t.categoryId===e)??[]],t,n,e=>i.writeFragment({data:e,fragment:zp}))}}})})},...i})}createBackupFile(e,t){return this.doRequest(`MUTATION`,Fm,{input:e},{...t})}restoreBackupFile(e,t){return this.doRequest(`MUTATION`,Im,e,{...t})}validateBackupFile(e,t){return this.doRequest(`QUERY`,Lm,{backup:e},t)}useGetBackupRestoreStatus(e,t){return this.doRequest(`USE_QUERY`,Rm,{id:e},t)}startDownloads(e){return this.doRequest(`MUTATION`,lm,{},e)}stopDownloads(e){return this.doRequest(`MUTATION`,um,{},e)}clearDownloads(e){return this.doRequest(`MUTATION`,em,{},e)}addChapterToDownloadQueue(e,t){return this.doRequest(`MUTATION`,am,{input:{id:e}},t)}removeChapterFromDownloadQueue(e,t){return this.doRequest(`MUTATION`,rm,{input:{id:e}},t)}useReorderChapterInDownloadQueue(e){let[t,n]=this.doRequest(`USE_MUTATION`,sm,void 0,e);return[e=>{let n=e?.variables?.input,r=this.graphQLClient.client.readFragment({id:`DownloadStatus:{}`,fragment:Qp,fragmentName:`DOWNLOAD_STATUS_FIELDS`});if(!n)throw Error(`useReorderChapterInDownloadQueue: no variables passed`);if(!r)throw Error(`useReorderChapterInDownloadQueue: there are no cached results`);let i=r.queue.findIndex(({chapter:e})=>e.id===n.chapterId),a=r.queue[i],o=r.queue.toSpliced(i,1).toSpliced(n.to,0,a);return t({optimisticResponse:{__typename:`Mutation`,reorderChapterDownload:{__typename:`ReorderChapterDownloadPayload`,downloadStatus:{...r,queue:o}}},...e})},n]}useReorderChaptersInDownloadQueue(e){let[t,n]=this.doRequest(`USE_MUTATION`,cm,void 0,e);return[e=>{let n=e?.variables?.input,r=this.graphQLClient.client.readFragment({id:`DownloadStatus:{}`,fragment:Qp,fragmentName:`DOWNLOAD_STATUS_FIELDS`});if(!n)throw Error(`useReorderChapterInDownloadQueue: no variables passed`);if(!r)throw Error(`useReorderChapterInDownloadQueue: there are no cached results`);let i=new Set(n.reorders.map(({chapterId:e})=>e)),a=n.reorders.map(({chapterId:e})=>r.queue.find(({chapter:t})=>t.id===e)).filter(e=>e!=null),o=r.queue.filter(({chapter:e})=>!i.has(e.id)),s=n.reorders.reduce((e,t,n)=>e.toSpliced(t.to,0,a[n]),o);return t({optimisticResponse:{__typename:`Mutation`,reorderChapterDownloads:{__typename:`ReorderChapterDownloadPayload`,downloadStatus:{...r,queue:s}}},...e})},n]}addChaptersToDownloadQueue(e,t){return this.doRequest(`MUTATION`,om,{input:{ids:e}},t)}removeChaptersFromDownloadQueue(e,t){return this.doRequest(`MUTATION`,im,{input:{ids:e}},t)}useGetRecentlyUpdatedChapters(e=1,t){let n=`useGetRecentlyUpdatedChapters`,r=this.cache.getResponseFor(n,void 0)??0,[i]=(0,q.useState)(r),a=this.useGetChapters(pm,{filter:{inLibrary:{equalTo:!0}},order:[{by:of.FetchedAt,byType:yf.Desc},{by:of.SourceOrder,byType:yf.Desc}],first:e*150+i},t);return(0,q.useEffect)(()=>{this.graphQLClient.client.refetchQueries({updateCache(e){(0,jC.default)(`mangaId`,a.data?.chapters.nodes).forEach(t=>{Object.keys(e.extract().ROOT_QUERY).filter(e=>e.includes(`chapters`)&&e.includes(`mangaId":${t.mangaId}`)).forEach(t=>e.evict({fieldName:t}))})}})},[a]),{...a,fetchMore:(...e)=>{let t=e[0]??{};return this.cache.cacheResponse(n,void 0,t.variables?.offset),a.fetchMore({...t,variables:{first:150,...t.variables}})}}}useGetRecentlyReadChapters(e=1,t){let n=`useGetRecentlyReadChapters`,r=this.cache.getResponseFor(n,void 0)??0,[i]=(0,q.useState)(r),a=this.useGetChapters(mm,{filter:{lastReadAt:{isNull:!1,notEqualToAll:[`0`]}},order:[{by:of.LastReadAt,byType:yf.Desc},{by:of.SourceOrder,byType:yf.Desc}],first:e*150+i},t);return{...a,fetchMore:(...e)=>{let t=e[0]??{};return this.cache.cacheResponse(n,void 0,t.variables?.offset),a.fetchMore({...t,variables:{first:150,...t.variables}})}}}startGlobalUpdate(e,t){return this.doRequest(`MUTATION`,Am,{input:{categories:e}},t)}resetGlobalUpdate(e){return this.doRequest(`MUTATION`,jm,{},e)}useGetGlobalUpdateSummary(e){return this.doRequest(`USE_QUERY`,Mm,{},e)}useGetDownloadStatus(e){return this.doRequest(`USE_QUERY`,Jm,{},e)}useDownloadSubscription(e){return this.doRequest(`USE_SUBSCRIPTION`,zm,{input:{maxUpdates:30}},{...e,onData:e=>{let t=e.data.data?.downloadStatusChanged,{cache:n}=this.graphQLClient.client;if(t?.omittedUpdates){let e=n.extract();this.graphQLClient.client.refetchQueries({updateCache(){for(let[t,r]of Object.entries(e))r?.__typename===`DownloadType`&&n.evict({id:t});n.evict({id:`DownloadStatus:{}`}),n.evict({fieldName:`downloadStatus`})}});return}t?.state&&n.modify({id:`DownloadStatus:{}`,fields:{state(){return t.state}}});let r=n.readQuery({query:Jm}),i=t?.updates.filter(e=>![uf.Dequeued,uf.Finished].includes(e.type)&&!r?.downloadStatus.queue.some(t=>t.chapter.id===e.download.chapter.id));i?.length&&n.writeQuery({query:Jm,data:{__typename:`Query`,...r,downloadStatus:{__typename:`DownloadStatus`,state:t?.state??r?.downloadStatus.state??df.Stopped,queue:[...r?.downloadStatus?.queue??[],...i?.map(e=>e.download)??[]]}}}),t?.updates.forEach(e=>{[uf.Dequeued,uf.Finished].includes(e.type)&&n.evict({id:n.identify({__typename:`DownloadType`,chapter:{__ref:n.identify({__typename:`ChapterType`,id:e.download.chapter.id})}})})})}})}useUpdaterSubscription(e){return this.doRequest(`USE_SUBSCRIPTION`,Bm,{input:{maxUpdates:30}},{...e,onData:e=>{let t=e.data.data?.libraryUpdateStatusChanged,n=this.graphQLClient.client.cache;if(!t?.omittedUpdates){t?.mangaUpdates.filter(e=>e.status===gf.Complete).forEach(e=>Object.keys(n.extract().ROOT_QUERY).filter(t=>t.includes(`chapters`)&&t.includes(`mangaId":${e.manga.id}`)).forEach(e=>n.evict({fieldName:e})));return}this.graphQLClient.client.refetchQueries({updateCache(){n.evict({fieldName:`chapters`}),n.evict({fieldName:`libraryUpdateStatus`})}})}})}getServerSettings(e){return this.doRequest(`QUERY`,Hm,void 0,e)}useGetServerSettings(e){return this.doRequest(`USE_QUERY`,Hm,void 0,e)}useUpdateServerSettings(e){let[t,n]=this.doRequest(`USE_MUTATION`,Um,void 0,e);return[async e=>t({optimisticResponse:{__typename:`Mutation`,setSettings:{__typename:`SetSettingsPayload`,settings:{__typename:`SettingsType`,...e?.variables?.input.settings??{}}}},...e}),n]}useGetLastGlobalUpdateTimestamp(e){return this.doRequest(`USE_QUERY`,Nm,{},e)}useClearServerCache(e){return this.doRequest(`USE_MUTATION`,Wm,{input:{}},e)}useWebUIUpdateSubscription(e){return this.doRequest(`USE_SUBSCRIPTION`,qm,void 0,e)}resetWebUIUpdateStatus(e){return this.doRequest(`MUTATION`,Km,void 0,e)}useGetWebUIUpdateStatus(e){return this.doRequest(`USE_QUERY`,Rf,void 0,e)}useGetMigratableSources(e){return this.doRequest(`USE_QUERY`,np,void 0,e)}useGetTrackerList(e,t){return this.doRequest(`USE_QUERY`,e,void 0,t)}logoutFromTracker(e,t){return this.doRequest(`MUTATION`,cy,{trackerId:e},t)}loginToTrackerOauth(e,t,n){return this.doRequest(`MUTATION`,oy,{input:{trackerId:e,callbackUrl:t}},n)}loginTrackerCredentials(e,t,n,r){return this.doRequest(`MUTATION`,sy,{input:{trackerId:e,username:t,password:n}},r)}useTrackerSearch(e,t,n){return this.doRequest(`USE_QUERY`,ay,{trackerId:e,query:t},n)}useBindTracker(e){return this.doRequest(`USE_MUTATION`,ly,void 0,e)}bindTracker(e,t,n,r,i){return this.doRequest(`MUTATION`,ly,{input:{mangaId:e,remoteId:n,trackerId:t,private:r}},i)}bindTrackRecord(e,t,n){return this.doRequest(`MUTATION`,uy,{input:{mangaId:e,trackRecordId:t}},n)}unbindTracker(e,t,n){return this.doRequest(`MUTATION`,dy,{input:{recordId:e,deleteRemoteTrack:t}},{refetchQueries:[jp],...n})}updateTrackerBind(e,t,n){return this.doRequest(`MUTATION`,fy,{input:{...t,recordId:e}},n)}fetchTrackBind(e,t){return this.doRequest(`MUTATION`,py,{recordId:e},t)}useLoginUser(e){return this.doRequest(`USE_MUTATION`,hy,void 0,e)}startSync(e){return this.doRequest(`MUTATION`,OC,{},e)}useGetSyncStatus(e){return this.doRequest(`USE_QUERY`,kC,{},e)}useSyncSubscription(e){return this.doRequest(`USE_SUBSCRIPTION`,DC,void 0,e)}useKoSyncStatus(e){return this.doRequest(`USE_QUERY`,by,void 0,e)}koSyncLogin(e,t,n,r){return this.doRequest(`MUTATION`,vy,{serverAddress:e,username:t,password:n},r)}koSyncLogout(e){return this.doRequest(`MUTATION`,yy,void 0,e)}refreshUser(e,t){return this.doRequest(`MUTATION`,gy,{refreshToken:e??void 0},t)}useClearWebViewCookiesCache(e){return this.doRequest(`USE_MUTATION`,AC,{},e)}};S(LC,`API_VERSION`,`/api/v1/`);var RC=new LC,zC=e=>({...e,devices:JSON.stringify(e.devices),customThemes:JSON.stringify(e.customThemes),migrateSortSettings:JSON.stringify(e.migrateSortSettings),browseLanguages:JSON.stringify(e.browseLanguages)}),BC=(e,t=kg,n)=>vv(`global`,{meta:e},t,void 0,n),VC=()=>{let e=RC.useGetGlobalMeta(),{data:t,loading:n}=e,r=(0,q.useMemo)(()=>z_(t?.metas.nodes),[t?.metas.nodes]),i=BC(r,void 0,q.useEffect),a=(0,q.useMemo)(()=>i,[r]);return(0,q.useMemo)(()=>({metadata:r,settings:a,loading:n,request:e}),[r,a,n,e])},HC=async()=>{let{data:e,error:t}=await RC.getGlobalMeta().response;if(t)throw t;return BC(z_(e?.metas.nodes))},UC=async(e,t)=>Z_({update:[[e,zC({[e]:t})[e]]]}),WC=(e=Wu(`createUpdateMetadataServerSettings`))=>(t,n)=>UC(t,n).catch(e);export{ry as $,Hh as $n,Of as $r,$g as $t,lx as A,Uu as Ai,dg as An,Up as Ar,Y_ as At,Lb as B,fg as Bn,jp as Br,y_ as Bt,yS as C,Qu as Ci,xg as Cn,Hm as Cr,Tv as Ct,Wx as D,Wu as Di,_g as Dn,hm as Dr,vv as Dt,tS as E,Gu as Ei,Q as En,dm as Er,Cv as Et,Yb as F,ju as Fi,Yh as Fn,Ip as Fr,B_ as Ft,ab as G,cg as Gn,ap as Gr,t_ as Gt,Cb as H,ig as Hn,gp as Hr,o_ as Ht,Kb as I,G as Ii,ng as In,Mp as Ir,N_ as It,Ny as J,eg as Jn,Qf as Jr,a_ as Jt,ib as K,Xh as Kn,rp as Kr,e_ as Kt,Gb as L,wu as Li,qh as Ln,Op as Lr,F_ as Lt,nx as M,K as Mi,Qh as Mn,Gp as Mr,Q_ as Mt,ex as N,ku as Ni,Zh as Nn,Pp as Nr,V_ as Nt,Hx as O,Bu as Oi,mg as On,Zp as Or,mv as Ot,Zb as P,Mu as Pi,Jh as Pn,Rp as Pr,z_ as Pt,iy as Q,Kh as Qn,Mf as Qr,Kg as Qt,Wb as R,W as Ri,ug as Rn,Ap as Rr,M_ as Rt,SS as S,$u as Si,wg as Sn,oh as Sr,kv as St,fS as T,Ku as Ti,yg as Tn,fm as Tr,Sv as Tt,_b as U,rg as Un,hp as Ur,Hg as Ut,Ob as V,lg as Vn,Lp as Vr,Mg as Vt,ob as W,$h as Wn,ip as Wr,Ug as Wt,wy as X,ag as Xn,$f as Xr,l_ as Xt,Ey as Y,og as Yn,ep as Yr,u_ as Yt,Sy as Z,sg as Zn,jf as Zr,Gg as Zt,YS as _,wf as _i,Eg as _n,lh as _r,jv as _t,IC as a,cf as ai,f_ as an,xh as ar,qv as at,kS as b,cd as bi,Cg as bn,ph as br,Av as bt,yC as c,ff as ci,p_ as cn,Th as cr,Uv as ct,fC as d,vf as di,v_ as dn,Ch as dr,Iv as dt,tf as ei,Xg as en,Uh as er,Qv as et,dC as f,yf as fi,c_ as fn,Mh as fr,Lv as ft,XS as g,Cf as gi,Wg as gn,Y as gr,Mv as gt,ZS as h,Sf as hi,Vg as hn,Sh as hr,Pv as ht,VC as i,sf as ii,kg as in,bh as ir,Vv as it,cx as j,Iu as ji,Z as jn,Wp as jr,ev as jt,zx as k,Hu as ki,Gh as kn,Jp as kr,nv as kt,_C as l,pf as li,g_ as ln,kh as lr,Gv as lt,oC as m,xf as mi,Fg as mn,jh as mr,Rv as mt,HC as n,af as ni,Og as nn,Nh as nr,Xv as nt,RC as o,lf as oi,m_ as on,yh as or,Kv as ot,lC as p,bf as pi,Rg as pn,Oh as pr,zv as pt,Py as q,tg as qn,lp as qr,n_ as qt,UC as r,of as ri,s_ as rn,Ah as rr,Jv as rt,xC as s,df as si,h_ as sn,Eh as sr,Bv as st,WC as t,nf as ti,qg as tn,Ph as tr,Zv as tt,gC as u,_f as ui,__ as un,wh as ur,Yv as ut,KS as v,Tf as vi,Dg as vn,fh as vr,Nv as vt,mS as w,Ju as wi,vg as wn,Pm as wr,Ev as wt,DS as x,nd as xi,Tg as xn,ch as xr,Ov as xt,IS as y,J as yi,Sg as yn,_h as yr,Dv as yt,Ub as z,Ks as zi,pg as zn,kp as zr,x_ as zt};