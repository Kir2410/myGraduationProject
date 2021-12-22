(()=>{"use strict";const e=({timing:e,draw:t,duration:l})=>{let o=performance.now();requestAnimationFrame((function n(r){let s=(r-o)/l;s>1&&(s=1);let c=e(s);t(c),s<1&&requestAnimationFrame(n)}))};(()=>{const e=document.querySelector("#benefits"),t=document.querySelector(".benefits-wrap"),l=document.querySelectorAll(".benefits__item");let o,n=0,r=1,s=2;if(window.innerWidth>=576){const c=()=>{l[s].style.display="none",n--,r--,s--,n<0&&(n=l.length-1),r<0&&(r=l.length-1),s<0&&(s=l.length-1),t.prepend(l[n]),l[n].style.display="block"},a=()=>{t.append(l[n]),l[n].style.display="none",n++,r++,s++,n>=l.length&&(n=0),r>=l.length&&(r=0),s>=l.length&&(s=0),l[n].style.display="block",l[r].style.display="block",l[s].style.display="block"},i=(e=1500)=>{o=setInterval(a,e)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.closest(".benefits__arrow--right")?a():e.target.closest(".benefits__arrow--left")&&c()})),l.forEach((e=>{e.style.display="none"})),l[n].style.display="block",l[r].style.display="block",l[s].style.display="block",i(2e3)}else{const r=()=>{l[n].style.display="none",n--,n<0&&(n=l.length-1),t.prepend(l[n]),l[n].style.display="block"},s=()=>{t.append(l[n]),l[n].style.display="none",n++,n>=l.length&&(n=0),l[n].style.display="block"},c=(e=1500)=>{o=setInterval(s,e)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.closest(".benefits__arrow--right")?s():e.target.closest(".benefits__arrow--left")&&r()})),l.forEach((e=>{e.style.display="none",e.style.maxWidth="100%"})),l[n].style.display="block",c(2e3)}})(),(()=>{document.querySelector("#services");const e=document.querySelector("#services").querySelector(".row"),t=document.querySelector("#services").querySelectorAll(".col-md-12"),l=document.querySelector("#services").querySelector(".services-arrows");let o,n=0,r=1;if(window.innerWidth>=576){const s=()=>{t[r].style.display="none",n--,r--,n<0&&(n=t.length-1),r<0&&(r=t.length-1),t[r].before(t[n]),t[n].style.display="block"},c=()=>{l.before(t[n]),t[n].style.display="none",n++,r++,n>=t.length&&(n=0),r>=t.length&&(r=0),t[n].style.display="block",t[r].style.display="block"},a=(e=1500)=>{o=setInterval(c,e)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.closest(".services__arrow--right")?c():e.target.closest(".services__arrow--left")&&s()})),t.forEach((e=>{e.style.display="none"})),t[n].style.display="block",t[r].style.display="block",a(2e3)}else{const s=()=>{t[n].style.display="none",n--,n<0&&(n=t.length-1),t[r].before(t[n]),t[n].style.display="block"},c=()=>{l.before(t[n]),t[n].style.display="none",n++,n>=t.length&&(n=0),t[n].style.display="block"},a=(e=1500)=>{o=setInterval(c,e)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.closest(".services__arrow--right")?c():e.target.closest(".services__arrow--left")&&s()})),t.forEach((e=>{e.style.display="none"})),t[n].style.display="block",a(2e3)}})(),((e=1e3)=>{const t=document.querySelector("#calc"),l=document.querySelector("#calc-type"),o=document.querySelector("#calc-type-material"),n=document.querySelector("#calc-input"),r=document.querySelector("#calc-total");try{t&&t.addEventListener("input",(t=>{t.target!==l&&t.target!==o&&t.target!==n||(()=>{n.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^0-9]+/,"")}));const t=+l.options[l.selectedIndex].value,s=+o.options[o.selectedIndex].value;let c=0,a=1;n.value>1&&(a=n.value),c=t&&s?e*t*s*a:0,r.value=c})()}))}catch(e){console.log(e.message)}})(1e3),(e=>{const t=document.querySelector(".count_1").querySelector("span"),l=document.querySelector(".count_2").querySelector("span"),o=document.querySelector(".count_3").querySelector("span"),n=document.querySelector(".count_4").querySelector("span"),r=e=>e<10?`0${e}`:e;let s=setInterval((()=>{let c=(()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3;return{timeRemainig:t,days:Math.floor(t/60/60/24%31),hours:Math.floor(t/60/60%24),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}})();t.textContent=r(c.days),l.textContent=r(c.hours),o.textContent=r(c.minutes),n.textContent=r(c.seconds),c.timeRemainig<=1&&(clearInterval(s),t.textContent="00",l.textContent="00",o.textContent="00",n.textContent="00")}),1e3)})("31 december 2021 23:59"),(({forms:e,someElem:t=[]})=>{const l=document.querySelectorAll(e),o=e=>{let t=!0;return e.forEach((e=>{""==e.value&&(t=!1)})),t};l.forEach((e=>{e.addEventListener("submit",(l=>{l.preventDefault(),((e,t)=>{const l=new FormData(e),n=e.querySelectorAll('input[type="text"]'),r={};var s;l.forEach(((e,t)=>{r[t]=e})),t.forEach((e=>{const t=document.getElementById(e.id);t&&""!==t.value&&(r[e.id]=t.value)})),o(n)?(s=r,fetch("http://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((e=>{n.forEach((e=>{e.value=""}))})).catch((e=>{console.log(e.message)})):(alert("Заполните пустые поля!"),o(n))})(e,t)}))}))})({forms:".form-horizontal",someElem:[{type:"input",id:"calc-total"}]}),(()=>{const e=document.querySelector(".smooth-scroll");e.style.cursor="pointer",e.style.display="none",document.addEventListener("scroll",(()=>{let t=document.getElementById("header").scrollHeight,l=document.getElementById("navigation").scrollHeight,o=document.getElementById("offer").scrollHeight;scrollY>t+l+o?e.style.display="block":e.style.display="none"})),e.addEventListener("click",(()=>{scrollTo({top:0,behavior:"smooth"})}))})(),(()=>{const t=document.querySelector(".overlay"),l=document.querySelector(".header-modal ");document.querySelectorAll(".fancyboxModal").forEach((o=>{o.addEventListener("click",(()=>{e({duration:500,timing:e=>e,draw(e){t.style.display="block",l.style.display="block",l.style.opacity=e}})}))})),l.addEventListener("click",(e=>{e.target.classList.contains("header-modal__close")&&(t.style.display="none",l.style.display="none")}))})(),(()=>{const t=document.querySelector(".overlay"),l=document.querySelector(".services-modal "),o=document.querySelectorAll(".service-button"),n=document.querySelector(".fadeInUp").querySelector("a.fancyboxModal");o.forEach((o=>{o.addEventListener("click",(()=>{e({duration:500,timing:e=>e,draw(e){t.style.display="block",l.style.display="block",l.style.opacity=e}})}))})),n.addEventListener("click",(o=>{e({duration:500,timing:e=>e,draw(e){t.style.display="block",l.style.display="block",l.style.opacity=e}})})),l.addEventListener("click",(e=>{e.target.classList.contains("services-modal__close")&&(t.style.display="none",l.style.display="none")}))})(),document.querySelectorAll('input[name="fio"]').forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^А-Яа-яA-Za-z]+/,"")}))})),document.querySelectorAll('input[name="phone"]').forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^0-9\+]/,""),e.target.value=e.target.value.replace(/[0-9]{17}/,"")}))}))})();