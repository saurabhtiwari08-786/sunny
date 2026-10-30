function showSection(id){
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  burst();
  window.scrollTo({top:0,behavior:"smooth"});
}
function heart(){
  const h=document.createElement("div");
  h.className="float-heart";
  h.textContent=Math.random()>.25?"♥":"♡";
  h.style.left=Math.random()*100+"vw";
  h.style.fontSize=14+Math.random()*24+"px";
  h.style.animationDuration=4+Math.random()*4+"s";
  document.getElementById("hearts").appendChild(h);
  setTimeout(()=>h.remove(),8500);
}
function burst(){
  for(let i=0;i<30;i++) setTimeout(heart,i*55);
}
setInterval(()=>{if(Math.random()>.3)heart()},1000);
burst();