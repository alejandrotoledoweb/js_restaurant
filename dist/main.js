(()=>{"use strict";function t(t,e){const n=document.createElement("button");n.setAttribute("id",t);const c=document.createElement("span");return c.textContent=e,n.appendChild(c),n.classList.add("tab"),n}const e=function(){const t=document.getElementById("tab-content");t.classList.add("d-flex"),t.classList.remove("grid-lay"),t.textContent="";const e=function(){const t=document.createElement("section");t.classList.add("section"),t.className=" mt-5 mb-5 w-75 text-center mx-auto bg-light";const e=document.createElement("h2");e.classList.add("section-title"),e.textContent="Taste our best dishes",e.className="text-left text-info",t.appendChild(e);const n=document.createElement("p");return n.classList.add("section-description"),n.textContent="The best from our cuisine for your taste and enjoy!, Please order want you want as fast as possible!.",t.appendChild(n),t}();!function(t){const e=document.querySelector(".tab.active");e&&e.classList.remove("active"),document.getElementById("home").classList.add("active")}(),t.appendChild(e)};function n(t,e,n,c){const s=document.createElement("div");s.classList.add("food"),s.className="mt-5 d-flex flex-column pr-5 justify-content-center mx-auto";const a=document.createElement("img");a.className="img-fluid rounded img-fit w-50 mx-auto",a.setAttribute("src",t),a.setAttribute("alt",c);const o=document.createElement("div");o.className="text-center mx-auto pt-3",o.classList.add("description");const i=document.createElement("h3");i.className="",i.textContent=e;const d=document.createElement("h2");return d.className="",d.textContent=n,o.appendChild(i),o.appendChild(d),s.appendChild(a),s.appendChild(o),s}const c=function(){const t=document.getElementById("tab-content");t.classList.add("d-flex"),t.textContent="",function(t){const e=document.querySelector(".tab.active");e&&e.classList.remove("active"),document.getElementById("menu").classList.add("active")}(),[n("https://images.immediate.co.uk/production/volatile/sites/30/2020/08/mexican-chicken-burger_1-b5cca6f.jpg?quality=90&resize=440%2C400","Mega Hamburguer","10.00 $","it comes with french fries"),n("https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/38/1474395998-ghk-0216-comfortfoodcover-meatballs.jpg?crop=0.856xw:0.571xh;0.0224xw,0.296xh&resize=640:*","Spaguetti with meat and cheese","9.00 $","Speciality of the house"),n("https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/10/3/0/FNM_110117-Insert-Opener-2_s4x3.jpg.rend.hgtvcom.616.462.suffix/1507047894789.jpeg","Family Combo for Christmas","20.00 $","Rice with chicken and vegetables"),n("https://www.baconismagic.ca/wp-content/uploads/2019/05/antigua-food-stewed-chicken.jpg","Curry chicke with rice and salad","5.00 $","0ne person menu"),n("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-lasagna-bolognese-vertical-1543346980.png","Lasagna of cow meat","7.00 $","You can have it with salad of french fries")].forEach((e=>{t.appendChild(e)}))};function s(t,e){const n=document.createElement("section");n.className="mx-auto text-center bg-light w-50 mt-4",n.classList.add("section");const c=document.createElement("h2");return c.className="text-success",c.classList.add("section-title"),c.textContent=t,n.appendChild(c),e.forEach((t=>{const e=document.createElement("p");e.classList.add("section-description"),e.textContent=t,n.appendChild(e)})),n}const a=function(){const t=document.getElementById("tab-content");t.classList.add("d-flex"),t.textContent="",function(t){const e=document.querySelector(".tab.active");e&&e.classList.remove("active"),document.getElementById("contact").classList.add("active")}();const e=s("Call us:",["001 4587-8754-987","001 9875-8874-887"]),n=s("Where to find us",["First Street, 192733 Blvr Ocean."]);t.appendChild(e),t.appendChild(n)};(function(){const e=document.getElementById("content"),n=document.createElement("h1");n.textContent="Restaurant JS",n.className="text-center pl-5 pt-5 pr-5 pr-5 pb-5 font-weight-bold h1p",e.appendChild(n);const c=function(e){const n=document.createElement("nav");n.setAttribute("id","nav"),n.className="nav nav-tabs justify-content-center font-weight-bold";const c=t("home","HOME");c.className="nav-link active nav-item";const s=t("menu","MENU");s.className="nav-link active nav-item";const a=t("contact","CONTACT");return a.className="nav-link active nav-item",n.appendChild(c),n.appendChild(s),n.appendChild(a),n}();e.appendChild(c);const s=function(t){const e=document.createElement("main");return e.setAttribute("id","tab-content"),e}();s.className="container d-flex flex-column justify-content-center w-75",e.appendChild(s)})(),e(),function(){const t=document.getElementById("home"),n=document.getElementById("menu"),s=document.getElementById("contact");t.addEventListener("click",e),n.addEventListener("click",c),s.addEventListener("click",a)}()})();