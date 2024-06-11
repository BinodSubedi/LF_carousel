var m=Object.defineProperty;var v=(c,i,r)=>i in c?m(c,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):c[i]=r;var n=(c,i,r)=>(v(c,typeof i!="symbol"?i+"":i,r),r);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))g(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&g(s)}).observe(document,{childList:!0,subtree:!0});function r(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function g(t){if(t.ep)return;t.ep=!0;const e=r(t);fetch(t.href,e)}})();class f{constructor(i){n(this,"images");n(this,"toggleSwitcher",1);this.images=i}elementBuilder(){return`<div class='carousel-container'>

        <div class='carousel-container__inner'>
        
        </div>
      
        <div class='carousel__quick-move'>

        <div id='quick-move__left'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#CCCCCC" class='arrow-back'><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg></div>

        ${this.images.map((i,r)=>`<div class='quick-move__toggler' id='quick-move-${r+1}' ></div>`)}



        <div id='quick-move__right'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#CCCCCC" class='arrow-forward'><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg></div>


        </div>

    </div>`}imageAppender(){var t;const i=document.querySelector(".carousel-container__inner");this.images.forEach((e,s)=>{const o=document.createElement("img");o.src=`./images/${e}`,o.classList.add("carousel__image"),o.id=`carousel-img-${s+1}`,i.appendChild(o)}),(t=document.querySelector("#quick-move-1"))==null||t.classList.add("active-toggler");const r=document.querySelector(".carousel-container__inner");setInterval(()=>{const e=document.querySelector(`#quick-move-${this.toggleSwitcher}`);e==null||e.classList.toggle("active-toggler"),this.toggleSwitcher<this.images.length?(this.toggleSwitcher++,r.style.left=`-${(this.toggleSwitcher-1)*100}%`):this.toggleSwitcher==this.images.length&&(this.toggleSwitcher=1,r.style.left="0%"),document.querySelector(`#quick-move-${this.toggleSwitcher}`).classList.toggle("active-toggler")},8e3);const g=Array.from(document.querySelector(".carousel__quick-move").childNodes);g.forEach((e,s)=>{(s+1)%2==0&&(s==1?e.addEventListener("click",()=>{var o,l;this.toggleSwitcher>1&&((o=document.querySelector(`#quick-move-${this.toggleSwitcher}`))==null||o.classList.toggle("active-toggler"),this.toggleSwitcher--,r.style.left=`-${(this.toggleSwitcher-1)*100}%`,(l=document.querySelector(`#quick-move-${this.toggleSwitcher}`))==null||l.classList.toggle("active-toggler"))}):s==g.length-2?e.addEventListener("click",()=>{var o,l;this.toggleSwitcher<this.images.length&&((o=document.querySelector(`#quick-move-${this.toggleSwitcher}`))==null||o.classList.toggle("active-toggler"),this.toggleSwitcher++,r.style.left=`-${(this.toggleSwitcher-1)*100}%`,(l=document.querySelector(`#quick-move-${this.toggleSwitcher}`))==null||l.classList.toggle("active-toggler"))}):e.addEventListener("click",o=>{var a,u;const h=o.target.id.split("-").pop();(a=document.querySelector(`#quick-move-${this.toggleSwitcher}`))==null||a.classList.toggle("active-toggler"),this.toggleSwitcher=h,(u=document.querySelector(`#quick-move-${this.toggleSwitcher}`))==null||u.classList.toggle("active-toggler"),r.style.left=`-${(this.toggleSwitcher-1)*100}%`}))})}}const w=["france.jpg","england.jpg","times_square.jpg","amsterdam.jpg"],d=new f(w);document.querySelector("#app").innerHTML=d.elementBuilder();d.imageAppender();
