import{f as c,j as l,k as p,l as d,h as n}from"./app.c377cc7e.js";var u=c({name:"SkipLink",props:{content:{type:String,default:"main-content"}},setup(r){const i=l(),t=p();d(()=>i.path,()=>t.value.focus());const a=({target:s})=>{const e=document.querySelector(s.hash);if(e){const o=()=>{e.removeAttribute("tabindex"),e.removeEventListener("blur",o)};e.setAttribute("tabindex","-1"),e.addEventListener("blur",o),e.focus(),window.scrollTo(0,0)}};return()=>[n("span",{ref:t,tabindex:"-1"}),n("a",{href:`#${r.content}`,class:"skip-link sr-only",onClick:a},"Skip to content")]}});export{u as S};
