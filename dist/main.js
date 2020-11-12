(()=>{"use strict";const e=e=>{let t=document.createElement("div");t.setAttribute("id","footer"),e.append(t);let n=document.createElement("p");n.setAttribute("id","footer-message"),n.innerHTML="Created by Tyler Nagano for <a href='https://www.theodinproject.com/'>The Odin Project.</a> Code on <a href='https://github.com/tnagano99/Restaurant-Page'>Github</a>.",t.appendChild(n)},t=e=>{let t=document.createElement("div");t.setAttribute("id","titleHome"),t.setAttribute("class","title-container"),e.appendChild(t);let n=document.createElement("h1");n.setAttribute("class","title"),n.textContent="Welcome to The 19th Hole",t.appendChild(n);let i=document.createElement("div");i.setAttribute("id","main-page"),e.appendChild(i);let l=document.createElement("img");l.setAttribute("id","golf-course"),l.setAttribute("src","images/Golf-Course.jpg"),l.setAttribute("alt","Golf Course Flyover"),i.appendChild(l);let r=document.createElement("p");r.setAttribute("id","message"),r.textContent="Welcome to The 19th Hole! The 19th hole is a golfer's paradise after a long day on the links. We provide first class service with a wide selection of specialty items and beverages.",i.append(r)},n=document.getElementById("content");let i="Home";(e=>{let t=document.createElement("div");t.setAttribute("id","nav"),e.appendChild(t);let n=document.createElement("ul");n.setAttribute("id","nav-container"),t.appendChild(n);let i=["Home","Menu","Contact Us"];for(let e=0;e<i.length;e++){let t=document.createElement("li");t.setAttribute("class","nav-bar"),t.setAttribute("id",i[e]);let l=document.createElement("a");l.setAttribute("href","#"),l.textContent=i[e],t.appendChild(l),n.appendChild(t)}})(n),t(n),e(n),Array.from(document.querySelectorAll(".nav-bar")).forEach((l=>l.addEventListener("click",(()=>{let r=l.getAttribute("id");console.log(r),function(l){l!==i&&(function(){for(;"nav"!==n.lastChild.getAttribute("id");)n.removeChild(n.lastChild)}(),"Home"===l?t(n):"Menu"===l?(e=>{let t=document.createElement("div");t.setAttribute("id","menu-container"),e.appendChild(t);let n=document.createElement("h1");n.setAttribute("class","title"),n.textContent="The 19th Hole Menu",t.appendChild(n);let i=["Food","Drinks"],l=[{name:"Hot Dog",price:"$4.50"},{name:"Hamburger",price:"$5.50"},{name:"Nachos",price:"$8.50"},{name:"Fries",price:"$2.50"}],r=[{name:"Heineken",price:"$5.50"},{name:"Stella Artois",price:"$5.50"},{name:"Coors Light",price:"$4.50"},{name:"Bud Light",price:"$4.00"}];for(let t=0;t<i.length;t++){let n=document.createElement("div");n.setAttribute("id",i[t]+"-container"),e.appendChild(n);let a=document.createElement("div");a.setAttribute("id",i[t]+"-title-container"),n.appendChild(a);let d=document.createElement("h2");d.setAttribute("id",i[t]+"-title"),d.textContent=""+i[t],a.appendChild(d);let o=document.createElement("div");o.setAttribute("id",i[t]+"-table-container"),n.appendChild(o);let c=document.createElement("table");c.setAttribute("id",i[t]+"-table"),o.appendChild(c);let m=document.createElement("tbody");m.setAttribute("id",i[t]+"-body"),c.appendChild(m);let s=r;"Food"===i[t]&&(s=l);for(let e=0;e<s.length;e++){let n=document.createElement("tr");n.setAttribute("class",""+i[t]),m.appendChild(n);let l=document.createElement("td");l.setAttribute("class","items"),l.textContent=s[e].name,n.appendChild(l);let r=document.createElement("td");r.setAttribute("class","prices"),r.textContent=s[e].price,n.appendChild(r)}}})(n):"Contact Us"===l&&(e=>{let t=document.createElement("div");t.setAttribute("id","contact-container"),e.appendChild(t);let n=document.createElement("h1");n.setAttribute("class","title"),n.textContent="Contact Us",t.appendChild(n);let i=document.createElement("div");i.setAttribute("id","form-container"),e.appendChild(i);let l=["Name","E-mail","Inquiry"];for(let e=0;e<l.length;e++){let t=document.createElement("label");t.setAttribute("for","form"+l[e]),t.textContent=l[e]+": ",i.append(t);let n=document.createElement("br");i.appendChild(n);let r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("id","form"+l[e]),r.setAttribute("class","formElements"),r.setAttribute("placeholder","Enter your "+l[e]),i.append(r);let a=document.createElement("br");i.appendChild(a)}let r=document.createElement("input");r.setAttribute("type","submit"),r.setAttribute("id","formSubmit"),r.setAttribute("value","Submit Form"),i.append(r)})(n),e(n),i=l)}(r)}))))})();