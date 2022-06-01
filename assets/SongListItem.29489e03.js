import{b as k,P as f,d as x}from"./index.980fee34.js";import{I as w,_ as o}from"./IconPark.87a29eca.js";import{k as i,c as g,I as y,s as A,h as a,i as u,j as s,u as t,K as r,v as D,m as d,M as m}from"./vendor.57e2cb7c.js";import{_ as N}from"./plugin-vue_export-helper.21dcd24c.js";import{L,P as z,D as B,M as C}from"./PlayTwo.4a436487.js";import{P as j}from"./PlayOne.7701f3d2.js";var P=w("add",!1,function(e){return i("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},[i("rect",{x:"6",y:"6",width:"36",height:"36",rx:"3",fill:e.colors[1],stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linejoin":e.strokeLinejoin},null),i("path",{d:"M24 16V32",stroke:e.colors[2],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),i("path",{d:"M16 24L32 24",stroke:e.colors[2],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null)])});const b={class:"flex-shrink-0 flex-1 flex items-center justify-between pr-5"},I={class:"items-center flex flex-1 w-10 flex-shrink-0"},$={class:"truncate",style:{"max-width":"75%"}},F={class:"hidden icon-action flex-shrink-0"},M={class:"flex items-center gap-x-1.5 text-gray-400 ml-2"},S={class:"w-9/12 truncate"},T={class:"w-9/12 truncate"},V={class:"w-20 flex-shrink-0"},W={class:"w-20 truncate"},q=g({props:{song:null,showArName:{type:Boolean},showAlName:{type:Boolean}},setup(e){const c=y(),{play:h}=k(),{id:v}=A(k());return(E,n)=>(a(),u("div",{class:m(["flex song-item items-center w-full hover-bg-main",{playing:t(v)===e.song.id}]),onDblclick:n[4]||(n[4]=l=>t(h)(e.song.id))},[s("div",b,[s("div",I,[i(o,{icon:t(L),size:"16",class:"text-gray-500 mr-1 cursor-pointer hover:text-red-400"},null,8,["icon"]),s("div",$,[s("small",null,r(e.song.name),1)]),e.song.mv>0?(a(),D(o,{key:0,class:"ml-2 text-orange-400 cursor-pointer",size:"16",icon:t(z),onClick:n[0]||(n[0]=l=>t(c).push({name:t(f).mvDetail,query:{id:e.song.mv}}))},null,8,["icon"])):d("",!0)]),s("div",F,[s("div",M,[i(o,{title:"\u64AD\u653E",icon:t(j),size:"20",class:"hover-text",onClick:n[1]||(n[1]=l=>t(h)(e.song.id))},null,8,["icon"]),i(o,{title:"\u6DFB\u52A0\u5230",icon:t(P),size:"16",class:"hover-text"},null,8,["icon"]),i(o,{title:"\u4E0B\u8F7D",icon:t(B),size:"16",class:"hover-text"},null,8,["icon"]),i(o,{title:"\u66F4\u591A\u64CD\u4F5C",icon:t(C),size:"16",class:"hover-text"},null,8,["icon"])])])]),e.showArName?(a(),u("div",{key:0,class:m(["flex-shrink-0",{"w-1/4":e.showAlName,"w-1/3":!e.showAlName}])},[s("div",S,[s("small",{class:"truncate max-w-full hover-text",onClick:n[2]||(n[2]=l=>t(c).push({name:"artistDetail",query:{id:e.song.ar.first().id}}))},r(e.song.ar.first().name),1)])],2)):d("",!0),e.showAlName?(a(),u("div",{key:1,class:m(["flex-shrink-0",{"w-1/4":e.showArName,"w-1/3":!e.showArName}])},[s("div",T,[s("small",{class:"truncate hover-text",onClick:n[3]||(n[3]=l=>t(c).push({name:"album",query:{id:e.song.al.id}}))},r(e.song.al.name),1)])],2)):d("",!0),s("div",V,[s("div",W,[s("small",null,r(t(x)(e.song.dt/1e3)),1)])])],34))}});var Q=N(q,[["__scopeId","data-v-938b689c"]]);export{Q as S};
