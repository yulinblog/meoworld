import{p as k,b7 as g,v as T,W as y,c as _,w as s,f as B,o,a as t,C as c,Q as L,I as w,bn as z,e as u,r as f,m as n,bx as F,A as I,B as N,n as v,t as m,F as h,k as S,h as U,q as A,O as q,_ as D}from"./index-238de57f.js";const E={class:"todo-item d-flex align-center pa-5"},G={class:"flex-fill mx-5"},K=k({__name:"TodoList",props:{tasks:null},setup(V){const x=V,p=g(),r=T(""),b=i=>{const l=p.labels.find(d=>d.id===i);return l?l.color:""},C=y(()=>x.tasks.filter(i=>i.title.toLowerCase().includes(r.value.toLowerCase())));return(i,l)=>{const d=q("perfect-scrollbar");return o(),_(B,{height:"100%"},{default:s(()=>[t(w,{clearable:"",variant:"solo",class:"elevation-1 ma-3","hide-details":"","prepend-inner-icon":"mdi-magnify",placeholder:"Filter Tasks",modelValue:c(r),"onUpdate:modelValue":l[0]||(l[0]=e=>L(r)?r.value=e:null)},null,8,["modelValue"]),t(d,{class:"todo-list"},{default:s(()=>[t(z,{name:"fade"},{default:s(()=>[(o(!0),u(h,null,f(c(C),e=>(o(),u("div",{key:e.id},[n("div",E,[t(F,{modelValue:e.completed,"onUpdate:modelValue":a=>e.completed=a,color:"primary",class:"pe-2"},null,8,["modelValue","onUpdate:modelValue"]),t(I,{size:"40"},{default:s(()=>[t(N,{src:"https://avatars.githubusercontent.com/u/35951244?v=4",alt:"alt"})]),_:1}),n("div",G,[n("div",{class:v(["font-weight-bold",e.completed?"text-decoration-line-through":""])},m(e.title),3),n("div",{class:v(e.completed?"text-decoration-line-through":"")},m(e.detail),3),n("div",null,[(o(!0),u(h,null,f(e.tags,a=>(o(),_(S,{key:a,size:"x-small",variant:"outlined",class:"mr-1 mt-1",color:b(a)},{default:s(()=>[U(m(a),1)]),_:2},1032,["color"]))),128))])]),t(A,{size:"small",icon:"mdi-delete-outline",variant:"text",onClick:a=>c(p).deleteTodoById(e.id)},null,8,["onClick"])])]))),128))]),_:1})]),_:1})]),_:1})}}});const Q=D(K,[["__scopeId","data-v-c5dd4bfe"]]);export{Q as T};
