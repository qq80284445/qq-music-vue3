import{c as y,G as r,h as l,i as n,L as p,K as i,j as e,n as $,X as E,k as c,J as w,u as _,e as F,v as L,l as h,m as B,ae as P,p as V,H as D,o as S,a9 as z,aa as N}from"./vendor.57e2cb7c.js";/* empty css                    */import{b as j,r as M,s as T}from"./index.980fee34.js";/* empty css                  */import{_ as f}from"./IconPark.87a29eca.js";import{M as U}from"./More.bf473fd8.js";import{P as I}from"./PlayOne.7701f3d2.js";import{L as q}from"./PlayTwo.4a436487.js";import{S as G}from"./SongListItem.29489e03.js";import"./plugin-vue_export-helper.21dcd24c.js";const H={class:"leading-5"},J={key:0},K={key:1},O=y({props:{text:null,end:null},setup(t){const u=t,o=r(!1),s=r(!1);return u.text&&u.text.length>u.end&&(o.value=!0),(a,d)=>(l(),n("div",H,[o.value?(l(),n(p,{key:0},[s.value?(l(),n("span",K,i(t.text)+"...",1)):(l(),n("span",J,i(t.text.substring(0,t.end))+"...",1)),e("span",{class:"ml-5 text-gray-700 hover-text",onClick:d[0]||(d[0]=x=>s.value=!s.value)},"["+i(s.value?"\u6536\u8D77":"\u8BE6\u60C5")+"]",1)],64)):(l(),n(p,{key:1},[$(i(t.text),1)],64))]))}}),R={class:"flex items-stretch"},X=["src"],Q={class:"pl-5 flex flex-col justify-between py-1 flex-1"},W={class:"text-2xl font-bold"},Y={class:"flex items-center text-xs text-dc pb-2 pt-3"},Z={class:"ml-2"},tt={class:"ml-5 flex text-dc"},et={class:"text-xs text-gray-500 leading-normal"},st={class:"justify-self-stretch mt-5 gap-x-2 flex items-center"},lt=e("span",null,"\u64AD\u653E\u5168\u90E8",-1),at={class:"w-32 button-outline"},nt=e("span",null,"\u6536\u85CF",-1),ot={class:"button-outline w-8"},ct=y({props:{playlist:null,playAll:null},setup(t){return(u,o)=>{const s=E;return l(),n("div",R,[e("img",{src:t.playlist.coverImgUrl,alt:"",class:"w-44 h-44 object-cover rounded-xl flex-shrink-0"},null,8,X),e("div",Q,[e("div",null,[e("div",W,i(t.playlist.name),1),e("div",Y,[c(s,{src:t.playlist.creator.avatarUrl,size:"small",round:""},null,8,["src"]),e("span",Z,i(t.playlist.creator.nickname),1),e("div",tt,[(l(!0),n(p,null,w(t.playlist.tags,a=>(l(),n("div",{class:"ml-2 hover-text",key:a},"#"+i(a),1))),128))])]),e("div",et,[c(O,{text:t.playlist.description,end:90},null,8,["text"])])]),e("div",st,[e("button",{class:"w-32 button",onClick:o[0]||(o[0]=(...a)=>t.playAll&&t.playAll(...a))},[c(f,{icon:_(I),size:"22",class:"mr-1"},null,8,["icon"]),lt]),e("button",at,[c(f,{icon:_(q),size:"18",class:"mr-1"},null,8,["icon"]),nt]),e("button",ot,[c(f,{icon:_(U)},null,8,["icon"])])])])])}}}),ut={class:"mt-2"},it=P('<div class="flex text-xs text-gray-400 py-2"><div class="flex-auto">\u6B4C\u66F2</div><div class="w-1/4">\u6B4C\u624B</div><div class="w-1/4">\u4E13\u8F91</div><div class="w-20">\u65F6\u957F</div></div>',1),rt={class:"text-sm"},dt={key:0,class:"flex justify-center py-5"},mt=$("\u52A0\u8F7D\u66F4\u591A"),vt=y({props:{songs:null},setup(t){const u=t,o=r(10),s=r(1),a=F(()=>s.value-u.songs.length/o.value>=0),d=()=>{s.value=s.value+1};return(x,g)=>{const b=V;return l(),n("div",ut,[it,e("div",rt,[(l(!0),n(p,null,w(t.songs.slice(0,o.value*s.value),m=>(l(),L(G,{key:m.id,song:m,"show-ar-name":"","show-al-name":""},null,8,["song"]))),128))]),t.songs.length>o.value&&!_(a)?(l(),n("div",dt,[c(b,{type:"text",class:"text-center w-full",onClick:d},{default:h(()=>[mt]),_:1})])):B("",!0)])}}});const _t={class:"playlist"},pt={key:0,class:"p-5"},Ct=y({setup(t){const u=r("tracks"),o=D(),s=r(),a=r([]),{pushPlayList:d,play:x}=j(),g=()=>{d(!0,...a.value),x(a.value.first().id)};return S(()=>{const m=Number(o.query.id);M(m).then(v=>{s.value=v}),T(m).then(v=>{a.value=v})}),(m,v)=>{const k=z,C=N;return l(),n("div",_t,[s.value?(l(),n("div",pt,[c(ct,{playlist:s.value,"play-all":()=>g()},null,8,["playlist","play-all"]),c(C,{class:"mt-3",modelValue:u.value,"onUpdate:modelValue":v[0]||(v[0]=A=>u.value=A)},{default:h(()=>[c(k,{lazy:"",label:`\u6B4C\u66F2 ${a.value.length}`,name:"tracks"},{default:h(()=>[c(vt,{songs:a.value},null,8,["songs"])]),_:1},8,["label"]),c(k,{lazy:"",label:"\u8BC4\u8BBA",name:"comments"})]),_:1},8,["modelValue"])])):B("",!0)])}}});export{Ct as default};
