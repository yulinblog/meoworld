import{c as v,B as y}from"./unsplashConfig-8eaca464.js";import{p as A,W as k,v as d,u as G,e as m,C as l,c as o,w as e,y as n,S as L,a as s,F as V,aq as b,o as a,G as x,z as C,B as w,m as h,t as P,h as r,E as p,r as S,k as Q,d as H,bo as J,Q as j,bp as I,j as K,bq as M,br as R,bw as O,a1 as X,a2 as Y,_ as Z}from"./index-238de57f.js";import{u as $,a as ee,C as se}from"./PhotoDetailModal-c3bd60ba.js";import"./install-47547726.js";const ae=f=>(X("data-v-82c70252"),f=f(),Y(),f),te={class:"text-h3 font-weight-bold"},le={class:"my-5"},oe={key:0},re=ae(()=>h("p",{class:"mb-3"},"Interests",-1)),ue=A({__name:"UserPage",setup(f){$();const _=O(),N=k(()=>y+"users/"+_.params.username),T=k(()=>y+"users/"+_.params.username+"/photos"),q=k(()=>y+"users/"+_.params.username+"/likes"),E=k(()=>y+"users/"+_.params.username+"/collections"),u=d(null),W=d(null),g=d([]),U=d([]),i=d(null),B=d(!1),F=async()=>{B.value=!0;const D=await b.get(N.value,v),c=await b.get(T.value,v),t=await b.get(q.value,v),z=await b.get(E.value,v);W.value=c.data,u.value=D.data,g.value=t.data,U.value=z.data,B.value=!1};return G({isShow:!1,timeout:1e3,text:""}),F(),(D,c)=>(a(),m(V,null,[l(u)?(a(),o(n,{key:0,class:"profile-sheet"},{default:e(()=>[s(H,{class:"profile-container"},{default:e(()=>[s(x,null,{default:e(()=>[s(C,{cols:"12",md:"3",class:"pr-5"},{default:e(()=>[s(w,{class:"mx-auto",width:"200",style:{"border-radius":"50%"},src:l(u).profile_image.large},null,8,["src"])]),_:1}),s(C,{cols:"12",md:"9"},{default:e(()=>[h("h1",te,P(l(u).username),1),h("p",le,[r(" Download free, beautiful high-quality photos curated by "),h("b",null,P(l(u).first_name),1)]),l(u).location?(a(),m("p",oe,[s(p,null,{default:e(()=>[r("mdi-map-marker")]),_:1}),r(P(l(u).location),1)])):L("",!0),re,h("div",null,[(a(!0),m(V,null,S(l(u).tags.aggregated,t=>(a(),o(Q,{class:"interest-chip ma-2",color:"primary",label:"",key:t.title},{default:e(()=>[s(p,{start:"",icon:"mdi-bookmark-outline"}),r(" "+P(t.title),1)]),_:2},1024))),128))])]),_:1})]),_:1})]),_:1})]),_:1})):L("",!0),s(n,{class:"mt-5 shadow-1"},{default:e(()=>[s(J,{color:"primary",modelValue:l(i),"onUpdate:modelValue":c[0]||(c[0]=t=>j(i)?i.value=t:null),"bg-color":"transparent",sliderColor:"primary"},{default:e(()=>[s(I,{value:"photos"},{default:e(()=>[s(p,{class:"mr-2"},{default:e(()=>[r("mdi-image")]),_:1}),r("Photos")]),_:1}),s(I,{value:"likes"},{default:e(()=>[s(p,{class:"mr-2"},{default:e(()=>[r("mdi-heart")]),_:1}),r("Likes")]),_:1}),s(I,{value:"collections"},{default:e(()=>[s(p,{class:"mr-2"},{default:e(()=>[r("mdi-image")]),_:1}),r("Collections")]),_:1})]),_:1},8,["modelValue"]),s(K,null,{default:e(()=>[s(M,{modelValue:l(i),"onUpdate:modelValue":c[1]||(c[1]=t=>j(i)?i.value=t:null)},{default:e(()=>[s(R,{value:"photos"},{default:e(()=>[l(g).length>0?(a(),o(n,{key:0,"min-height":"80vh"},{default:e(()=>[s(x)]),_:1})):(a(),o(n,{key:1,"min-height":"80vh",class:"d-flex align-center justify-center"},{default:e(()=>[s(w,{src:"https://unsplash-assets.imgix.net/empty-states/photos.png",height:"400"})]),_:1}))]),_:1}),s(R,{value:"likes"},{default:e(()=>[l(g).length>0?(a(),o(n,{key:0,"min-height":"80vh"},{default:e(()=>[s(x,null,{default:e(()=>[(a(!0),m(V,null,S(l(g),t=>(a(),o(C,{cols:"12",sm:"6",md:"4",lg:"3",key:t.id},{default:e(()=>[s(ee,{photo:t},null,8,["photo"])]),_:2},1024))),128))]),_:1})]),_:1})):(a(),o(n,{key:1,"min-height":"80vh",class:"d-flex align-center justify-center"},{default:e(()=>[s(w,{src:"https://unsplash-assets.imgix.net/empty-states/photos.png",height:"400"})]),_:1}))]),_:1}),s(R,{value:"collections",class:"pa-1"},{default:e(()=>[l(U).length>0?(a(),o(n,{key:0,"min-height":"80vh"},{default:e(()=>[s(x,null,{default:e(()=>[(a(!0),m(V,null,S(l(U),t=>(a(),o(C,{cols:"12",sm:"6",lg:"4",key:t.id},{default:e(()=>[s(se,{collection:t},null,8,["collection"])]),_:2},1024))),128))]),_:1})]),_:1})):(a(),o(n,{key:1,"min-height":"80vh",class:"d-flex align-center justify-center"},{default:e(()=>[s(w,{src:"https://unsplash-assets.imgix.net/empty-states/photos.png",height:"400"})]),_:1}))]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})],64))}});const me=Z(ue,[["__scopeId","data-v-82c70252"]]);export{me as default};
