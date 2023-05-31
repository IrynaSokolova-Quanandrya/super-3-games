var e=[{id:1,name:"Високосний калькулятор",category:"numerical"},{id:2,name:"Вгадай число",category:"numerical"},{id:3,name:"Камінь-Ножиці-Папір",category:"game"},{id:4,name:"Калькулятор",category:"numerical"},{id:5,name:"Калькулятор часу",category:"numerical"},{id:6,name:"Google динозаврик",category:"game"},{id:7,name:"Футбол",category:"game"},{id:8,name:"Найбільше число",category:"numerical"},{id:9,name:"Наша команда",category:"acquaintance"},{id:10,name:"Вчений",category:"acquaintance"},{id:11,name:"Tic-Tac-Toe",category:"game"}];const t=document.querySelector(".theme-switch__toggle");document.querySelector(".container"),document.querySelector(".light"),document.querySelector(".dark");t.addEventListener("change",(function(){t.checked,document.body.classList.toggle("black-theme")}));const n=document.querySelector(".modal"),c=document.querySelector(".backdrop"),a=document.querySelector("#name-input"),o=document.querySelector("#submit-btn"),i=document.querySelector(".user");function d(){c.style.width="0px",n.style.display="none"}document.addEventListener("DOMContentLoaded",(()=>{c.style.opacity="1",n.style.opacity="1"})),c.addEventListener("click",(function(e){e.target==c&&d()})),window.addEventListener("keydown",(function(e){"Escape"==e.key&&d()})),o.addEventListener("click",(function(e){e.preventDefault();const t=a.value;i.innerHTML=`Вітаємо, ${t}!`,d()}));const s=document.querySelector(".class-list"),r=e.map((e=>`\n    <li class="li-main ${e.category}" id='${e.id}'>\n        <h2 class='h2-main'>${e.name}</h2>\n    </li>`));s.innerHTML=r.join("");const l=document.querySelector(".interactif"),u=document.querySelector(".class-list"),m=document.querySelectorAll("li");l.addEventListener("change",(function(){const e=l.value,t=Array.from(m).filter((t=>t.classList.contains(e)));console.log(t),u.innerHTML="",u.append(...t)}));const p=document.querySelector(".form-submit"),f=(document.querySelector("[data-modal-close]"),document.querySelector(".close-btn")),b=(document.querySelector("[data-modal]"),document.querySelector(".backdrop"));document.querySelector(".foot-input");function g(e){e.preventDefault(),b.classList.toggle("is-hidden")}p.addEventListener("submit",g),f.addEventListener("click",g);let v=document.getElementById("1"),L=document.createElement("input");L.setAttribute("type","text"),L.classList.add("input-1"),L.placeholder="Pік народження";let h=document.createElement("button");h.setAttribute("type","button"),h.textContent="Пошук",h.classList.add("button-1");let E=document.createElement("p");E.classList.add("p-1"),E.textContent="",v.append(L,h,E),h.addEventListener("click",(function(){let e=document.querySelector(".input-1").value;E.textContent=e%4==0?"Вітаю, ви народилися у високосний рік":"На жаль, це не високосний рік"}));let x=document.createElement("input");x.setAttribute("type","text"),x.classList.add("input-2"),x.placeholder="Число від 1 до 10";let y=document.createElement("button");y.setAttribute("type","button"),y.classList.add("button-2"),y.textContent="Пошук";let C=document.createElement("p");C.classList.add("p-2"),C.textContent="",document.getElementById("2").append(x,y,C);const M=Math.floor(10*Math.random())+1;y.addEventListener("click",(function(){const e=document.querySelector(".input-2").value;C.textContent=e===M?`Вітаю, ви вгадали число ${M}`:`Ви програли, компʼютер загадав число ${M}`}));const S=document.getElementById("3"),H=document.createElement("div"),q=(document.createElement("h3"),document.createElement("ul"));H.id="RPSSection",q.id="RPSBtnList";let w=0,k=0;const T=["https://www.svgrepo.com/download/111747/stone.svg","https://www.clker.com/cliparts/N/5/T/b/T/l/white-scissors.svg.hi.png","https://freesvg.org/img/blackwhitepaperstack.png"],B=["КАМІНЬ","НОЖИЦІ","ПАПІР"];for(let e=0;e<B.length;e++){const t=document.createElement("li"),n=document.createElement("button");n.classList.add("RPSBtn"),n.id=e+1;const c=document.createElement("img");c.id="img",c.src=T[e],n.appendChild(c),t.appendChild(n),q.appendChild(t)}const A=document.createElement("p");A.textContent="Хто переміг",A.id="gameResults";const _=document.createElement("div");_.id="score";const $=document.createElement("p");$.textContent="Рахунок:";const j=document.createElement("p"),I=document.createElement("p");j.textContent=`Ви - ${w}`,I.textContent=`Комп’ютер - ${k}`,_.appendChild($),_.appendChild(j),_.appendChild(I);const D=document.createElement("button");D.textContent="Варіант комп’ютера",D.classList.add("computerChoise");const G=document.createElement("div");G.id="gamePart",G.appendChild(q),G.appendChild(A),G.appendChild(D),H.appendChild(G),H.appendChild(_),S.appendChild(H);const N=document.querySelectorAll(".RPSBtn");function W(e){e.currentTarget.classList.add("btnHover")}function P(e){e.currentTarget.classList.remove("btnHover")}let Z;function Y(e){const t=e.currentTarget.id,n=Math.floor(3*Math.random())+1;D.textContent=`Комп'ютер обрав ${B[n-1]}`,t==n&&(A.textContent="Нічия!",w+=1,k+=1,Z="rgb(255, 153, 0)"),(1==t&&2==n||2==t&&3==n||3==t&&1==n)&&(A.textContent="Ви виграли раунд!",w+=1,Z="yellowgreen"),(1==t&&3==n||2==t&&1==n||3==t&&2==n)&&(A.textContent="Комп'ютер виграв раунд!",k+=1,Z="red"),A.style.color=Z,j.textContent=`Ви - ${w}`,I.textContent=`Комп’ютер - ${k}`}N.forEach((e=>{e.addEventListener("mouseover",W)})),N.forEach((e=>{e.addEventListener("mouseout",P)})),N.forEach((e=>{e.addEventListener("click",Y)})),calculatorGameContainer=document.getElementById("4");const z=document.createElement("div"),F=document.createElement("div"),R=document.createElement("ul"),V=document.createElement("div");z.classList.add("calculator__div"),F.classList.add("calculator__func"),R.classList.add("calc--btns__list"),V.classList.add(".calc__result-box");const K=document.createElement("li"),O=document.createElement("li"),J=document.createElement("li"),X=document.createElement("li");K.classList.add("calc--list__item-plus"),O.classList.add("calc--list__item-mult"),J.classList.add("calc--list__item-minus"),X.classList.add("calc--list__item-divis"),R.append(K,O,J,X),F.append(R,V),z.append(F),calculatorGameContainer.append(F);const Q=document.createElement("p");Q.classList.add("p-result"),Q.textContent="_",V.prepend(Q);const U=document.createElement("button");U.textContent="+",U.classList.add("calcBtn");const ee=document.createElement("button");ee.textContent="*",ee.classList.add("calcBtn");const te=document.createElement("button");te.textContent="-",te.classList.add("calcBtn");const ne=document.createElement("button");ne.textContent="/",ne.classList.add("calcBtn");const ce=document.createElement("button");ce.textContent="=",ce.classList.add("calcBtnEqual");const ae=document.createElement("input");ae.classList.add("calculator__input"),ae.placeholder="Введіть число";const oe=document.createElement("input");oe.classList.add("calculator__input"),oe.placeholder="Введіть число",F.prepend(ae),R.after(oe),oe.after(ce),K.prepend(U),O.prepend(ee),J.prepend(te),X.prepend(ne);let ie=0,de=0;ae.addEventListener("blur",(function(){ie=Number(ae.value)})),oe.addEventListener("blur",(function(){de=Number(oe.value)}));let se=0;U.addEventListener("click",(function(){se=ie+de})),ee.addEventListener("click",(function(){se=ie*de})),te.addEventListener("click",(function(){se=ie-de})),ne.addEventListener("click",(function(){se=ie/de})),ce.addEventListener("click",(function(){Q.textContent=se}));document.getElementById("5").innerHTML='<section class="time-calculator">\n   <div class="container">\n      <div class="wrapper-title">\n         <div class="title">\n            <h2>Калькулятор часу</h2>\n         </div>\n      </div>\n      <div class="wrapper-content">\n         <div class="wrapper-input">\n            <input type="text" placeholder="Введіть число">\n            <div class="wrapper-svg">\n               <img src="/src/images/Group 104.svg" alt="">\n            </div>\n         </div>\n         <div class="wrapper-time">\n            <h4>00:00</h4>\n         </div>\n      </div>\n   </div>\n</section>';const re=document.querySelector(".wrapper-input > input"),le=document.querySelector("h4");re.value;let ue;re.addEventListener("input",(function(e){const t=Math.floor(e.currentTarget.value/60),n=e.currentTarget.value%60,c=`${t.toString().padStart(2,"0")}:${n.toString().padStart(2,"0")}`;le.textContent=c}));let me=null;document.getElementById("6").innerHTML='\n    <div class="dino-container">\n    <div user-select="text" class="name">Google динозавр</div>\n    <div class="dino-game">\n        <div class="message">Press any button to start</div>\n        <div class="counter">0</div>\n        <div class="dino"></div>\n        <div class="cactus"></div>\n        <div class="ground"></div>\n    </div>\n</div>\n';const pe=document.querySelector(".dino"),fe=document.querySelector(".cactus"),be=document.querySelector(".message");let ge=document.querySelector(".counter"),ve=0;setInterval((()=>{let e=parseInt(window.getComputedStyle(pe).getPropertyValue("top"));if(parseInt(window.getComputedStyle(fe).getPropertyValue("left"))<55&&e>=165){me=null,console.log(me),fe.classList.remove("cactus-anim"),pe.classList.remove("dino-running"),be.classList.remove("message-hide"),pe.classList.add("dino-lose");
//!Important
let e=new Audio;e.src="../src/audio/die.wav",e.play(),clearInterval(ue),setTimeout((function(){pe.classList.remove("dino-lose")}),200)}}),10);document.addEventListener("keydown",(function(){"dino-jump"!=pe.classList&&(pe.classList.add("dino-jump"),setTimeout((function(){pe.classList.remove("dino-jump")}),300)),pe.classList.contains("dino-running")&&clearInterval(ue),null===me&&(ue=setInterval((function(){ve+=1,ge.innerHTML=ve}),300)),fe.classList.add("cactus-anim"),pe.classList.add("dino-running"),be.classList.add("message-hide")}));const Le=document.getElementById("7");let he="ball-moving";(()=>{const e=document.createElement("div"),t=document.createElement("div");e.classList.add("football-field"),t.classList.add("ball"),e.append(t),Le.append(e);e.addEventListener("click",(e=>{"ball-moving"!==he?he="ball-moving":"ball-moving"===he&&(he="ball-moving2"),t.style.left=`${e.offsetX}px`,t.style.top=`${e.offsetY}px`,t.style.animationName=`${he}`}))})();const Ee=document.getElementById("8");Ee.classList.add("container");let xe=0;const ye=document.createElement("ul");Ee.appendChild(ye);const Ce=document.createElement("p");Ee.appendChild(Ce),Ce.textContent="Найбільше число, яке ви ввели - ";let Me=[],Se=[];for(let e=0;e<3;e+=1)Me[e]=document.createElement("li"),ye.appendChild(Me[e]),Se[e]=document.createElement("input"),Se[e].type="number",Se[e].placeholder="Введіть число",Me[e].appendChild(Se[e]),Se[e].addEventListener("change",(e=>{xe=Math.max(xe,e.target.value),Ce.textContent="Найбільше число, яке ви ввели - "+String(xe)}));const He=[{id:0,name:"Настя Скрицька ",discription:"Створення хедера, футера та модального вікна до футера",img:"https://images.unsplash.com/photo-1566765790386-c43812572bc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fGNhdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"},{id:1,name:"Даніїл",discription:" Написати програму, яка отримає від користувача число та виведе на екран рядок в форматі години та хвилини",img:"https://images.unsplash.com/photo-1568152950566-c1bf43f4ab28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"},{id:2,name:"Іван",discription:"Верстка модального вікна. Реалізація відкриття модального вікна привітання користувач",img:"https://images.unsplash.com/photo-1536589961747-e239b2abbec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGNhdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"},{id:3,name:"Анастасія Бунякіна",discription:"Програма, яка буде перевіряти чи рік народження користувача був високосним & Програма, де комп‘ютер загадає число від 1 до 10 і запропонує користувачу вгадати його Користувач вводить свій варіант і отримує результат (Виграв чи ні)",img:"https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80"},{id:4,name:" Федір Борисенко",discription:"Калькулятор",img:"https://images.unsplash.com/photo-1548546738-8509cb246ed3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNhdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},{id:5,name:"Нєма Вероніка",discription:"Зробити слайдер зображень - перелистування зображення по кнопкам вліво та вправо, якщо зображення закінчилися, кнопка повиння зникнути або стати неактивною",img:"https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNhdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"}],qe=document.getElementById("9"),we=document.createElement("div");we.classList.add("mainDiv");const ke=document.createElement("div");ke.classList.add("main"),we.append(ke);const Te=document.createElement("button");Te.classList.add("leftButton"),ke.append(Te);const Be=document.createElement("img");Be.classList.add("photo"),Be.src=He[0].img,ke.append(Be);const Ae=document.createElement("button");Ae.classList.add("rightButton"),ke.append(Ae);const _e=document.createElement("h4");_e.textContent=He[0].name,_e.classList.add("nameText"),we.append(_e);const $e=document.createElement("p");$e.textContent=He[0].discription,$e.classList.add("discriptionText"),we.append($e),qe.append(we),Te.addEventListener("click",(function(){for(let e=He.length-1;e<He.length+1;e-=1){if(He[e].img===Be.src)return Be.src=He[e-1].img}})),Te.addEventListener("click",(function(){for(let e=He.length-1;e<He.length+1;e-=1){if(He[e].name===_e.textContent)return _e.textContent=He[e-1].name}})),Te.addEventListener("click",(function(){for(let e=He.length-1;e<He.length+1;e-=1){if(He[e].discription===$e.textContent)return $e.textContent=He[e-1].discription}})),Ae.addEventListener("click",(function(){for(let e=0;e<He.length;e+=1){if(He[e].img===Be.src){if(e===He.length-1)return;return Be.src=He[e+1].img}}})),Ae.addEventListener("click",(function(){for(let e=0;e<He.length;e+=1){if(He[e].name===_e.textContent){if(e===He.length-1)return;return _e.textContent=He[e+1].name}}})),Ae.addEventListener("click",(function(){for(let e=0;e<He.length;e+=1){if(He[e].discription===$e.textContent){if(e===He.length-1)return;return $e.textContent=He[e+1].discription}}}));const je=[{name:"Albert",surname:"Einstein",born:1879,dead:1955,id:1},{name:"Isaac",surname:"Newton",born:1643,dead:1727,id:2},{name:"Galileo",surname:"Galilei",born:1564,dead:1642,id:3},{name:"Marie",surname:"Curie",born:1867,dead:1934,id:4},{name:"Johannes",surname:"Kepler",born:1571,dead:1630,id:5},{name:"Nicolaus",surname:"Copernicus",born:1473,dead:1543,id:6},{name:"Max",surname:"Planck",born:1858,dead:1947,id:7},{name:"Katherine",surname:"Blodgett",born:1898,dead:1979,id:8},{name:"Ada",surname:"Lovelace",born:1815,dead:1852,id:9},{name:"Sarah E.",surname:"Goode",born:1855,dead:1905,id:10},{name:"Lise",surname:"Meitner",born:1878,dead:1968,id:11},{name:"Hanna",surname:"Hammarström",born:1829,dead:1909,id:12}],Ie=document.getElementById("10"),De=document.createElement("ul");function Ge(e){return` \n\t\t<li class="cards">\n\t\t\t<h2>${e.name} ${e.surname}</h2>\n\t\t\t<p>${e.born} <br> ${e.dead}</p>\n\t\t</li>\n   `}De.classList.add("scientist-list"),Ie.append(De),function(){for(let e=0;e<je.length;e++){let t=Ge(je[e]);De.innerHTML+=t}}(),function(e){for(let n=0;n<e.length;n++){let c=`\n\t<button \n\t\ttype="button" \n\t\tclass="buttons ${(t=e[n]).class}">\n\t\t${t.text}\n\t</button>\n\t`;Ie.insertAdjacentHTML("beforeend",c)}var t}([{class:"button-3",text:"Відсортувати вчених за кількістю прожитих років"},{class:"button-4",text:"Знайти вченого, який народився найпізніше"},{class:"button-5",text:"Знайти вчених, в яких співпадають перші літери імені і прізвища"},{class:"button-6",text:"Знайти рік народження Albert Einshtein "},{class:"button-7",text:'Знайти вчених, прізвища яких починаються не на літеру "С"'},{class:"button-8",text:"Видалити всіх вчених, ім’я яких починається на “А”"},{class:"button-9",text:" Знайти вченого, який прожив найдовше і вченого, який прожив найменше"},{class:"button-10",text:"Які вчені народилися в 19 ст."},{class:"button-11",text:"Відсортувати вчених за алфавітом"}]);document.querySelector(".button-10").addEventListener("click",(function(){const e=je.filter((e=>e.born>=1800&&e.born<=1900)).sort(((e,t)=>e.born-t.born)).map(Ge).join("");De.innerHTML=e}));document.querySelector(".button-11").addEventListener("click",(function(){const e=je.sort(((e,t)=>e.name.localeCompare(t.name))).map(Ge).join("");De.innerHTML=e}));document.querySelector(".button-3").addEventListener("click",(function(){const e=je.sort(((e,t)=>t.dead-t.born-(e.dead-e.born))).map(Ge).join("");De.innerHTML=e}));document.querySelector(".button-4").addEventListener("click",(function(){const e=Ge(je.reduce(((e,t)=>t.born>e.born?t:e)));De.innerHTML="",De.insertAdjacentHTML("beforeend",e)}));document.querySelector(".button-5").addEventListener("click",(function(){const e=je.filter((e=>e.name[0]===e.surname[0])).map(Ge).join("");De.innerHTML=e}));document.querySelector(".button-6").addEventListener("click",(function(){const e=Ge(je.find((e=>"Albert"===e.name&&"Einstein"===e.surname)));De.innerHTML="",De.insertAdjacentHTML("beforeend",e)}));document.querySelector(".button-7").addEventListener("click",(function(){const e=je.filter((e=>"C"!==e.surname.charAt(0))).map(Ge).join("");De.innerHTML=e}));document.querySelector(".button-8").addEventListener("click",(function(){const e=je.filter((e=>!e.name.startsWith("A"))).map(Ge).join("");De.innerHTML=e}));document.querySelector(".button-9").addEventListener("click",(function(){const e=je.sort(((e,t)=>e.dead-e.born-(t.dead-t.born))),t=e[0],n=e[e.length-1],c=Ge(t),a=Ge(n);De.innerHTML="",De.insertAdjacentHTML("beforeend",c),De.insertAdjacentHTML("beforeend",a)}));
//# sourceMappingURL=index.e89d9f95.js.map