import{c as F,t as B,s as k,G as _,o as V,O as A,T as D,ac as S,ab as L,h as t,i as s,j as e,k as i,l,L as u,J as n,u as r,m,K as f}from"./vendor.e8d640e7.js";/* empty css                   *//* empty css                  */import{u as v}from"./video.5971b3af.js";import{_ as G}from"./IconPark.e2a46cef.js";import{u as R,A as N}from"./index.b505fc82.js";import{_ as T}from"./CoverPlay.2e4aeab2.js";import{R as j}from"./Right.c14e057b.js";import"./el-image-viewer.7c2d3485.js";import"./PlayOne.0cbf87cc.js";const J={class:"p-5 video-page"},P={class:"flex items-center justify-between"},U={class:"button-outline px-5"},$=e("span",{class:"mr-2"},"\u5168\u90E8\u89C6\u9891",-1),q=e("div",{class:"text-xl pt-5 pl-5"},"\u5168\u90E8\u89C6\u9891",-1),K={class:"h-96 py-5 pl-5"},M={class:"text-xs gap-5 grid grid-flow-row grid-cols-5"},O={class:"text-xs flex gap-x-4"},z={key:0,class:"grid grid-flow-row grid-cols-3 gap-5 mt-5"},H={key:1,class:"mt-4 w-full"},I=e("iframe",{class:"w-full",height:"500",src:"//player.bilibili.com/player.html?aid=926106212&bvid=BV1qT4y1J74A&cid=203303939&page=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"},`
      `,-1),Q=e("div",{class:"mt-4 text-center"}," \u75AB\u60C5\u65E0\u60C5\uFF0C\u4EBA\u95F4\u6709\u60C5\uFF0C\u6211\u4EEC\u4E00\u8D77\u52A0\u6CB9\u3002\u60F3\u8981\u770B\u5230\u97F3\u4E50\u89C6\u9891\u9700\u8981\u767B\u5F55\u54E6\u{1F62F} ",-1),W=[I,Q],ne=F({setup(X){const{videoGroup:c}=B(v()),{getVideoGroup:h}=v(),g=R(),{isLogin:d}=k(g),a=_(!1),p=_([]),x=async()=>{try{a.value=!0,p.value=await N()}catch{}finally{a.value=!1}},y=()=>{console.log("\u64AD\u653E")};return V(()=>{h(),x()}),(E,Y)=>{const C=A,b=D,w=S;return L((t(),s("div",J,[e("div",P,[i(b,{width:"60%",placement:"bottom-start","popper-style":"padding:0;"},{reference:l(()=>[e("button",U,[$,i(G,{icon:r(j)},null,8,["icon"])])]),default:l(()=>[e("div",null,[q,e("div",K,[i(C,null,{default:l(()=>[e("div",M,[(t(!0),s(u,null,n(r(c),o=>(t(),s("div",{class:"hover-text",key:o.id},f(o.name),1))),128))])]),_:1})])])]),_:1}),e("div",O,[(t(!0),s(u,null,n(r(c).slice(0,8),o=>(t(),s("div",{class:"hover-text",key:o.id},f(o.name),1))),128))])]),r(d)?(t(),s("div",z,[(t(!0),s(u,null,n(p.value,({data:o})=>(t(),s("div",{key:o.vid},[i(T,{onPlay:y,"pic-url":o.coverUrl,video:""},null,8,["pic-url"])]))),128))])):m("",!0),r(d)?m("",!0):(t(),s("div",H,W))])),[[w,a.value]])}}});export{ne as default};
