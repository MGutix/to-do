(()=>{"use strict";const e=class{constructor(e,t,n,d,l){this.title=e,this.description=t,this.dueDate=n,this.priority=d,this.project=l,this.isDone=!1}edit(){console.log("im editting")}delete(){console.log("im deleteting")}toggleIsDone(){!1===this.isDone?this.isDone=!0:this.isDone=!1,console.log(`isDone toggled to ${this.isDone}`)}},t=document.getElementById("add");let n=document.querySelector("[data-modal]"),d=document.getElementById("submit"),l=[];function o(){let t=document.getElementById("title").value,n=document.getElementById("description").value,d=document.getElementById("dueDate").value,o=document.getElementById("priority").value,i=document.getElementById("projects").value;const c=new e(t,n,d,o,i);l.push(c),console.table(l),function(){let e=document.getElementById("todoArea");e.innerHTML="",l.map((t=>{let n=document.createElement("div");n.classList.add("card-body"),n.classList.add("card"),e.appendChild(n);let d=document.createElement("h3");d.textContent=t.title,d.classList.add("card-title"),n.appendChild(d);let o=document.createElement("p");o.textContent=t.description,o.classList.add("card-text"),n.appendChild(o);let i=document.createElement("p");i.textContent=t.dueDate,n.appendChild(i);let c=document.createElement("p");c.textContent=t.priority,n.appendChild(c);let s=document.createElement("button");s.textContent="Delete",s.classList.add("btn"),s.classList.add("btn-danger"),n.appendChild(s),s.addEventListener("click",(()=>{l.splice(t,1),n.remove(),console.log(l)}))}))}()}t.addEventListener("click",(()=>{n.showModal(),document.querySelectorAll("input").forEach((e=>{e.value=""})),d.addEventListener("click",o)}))})();