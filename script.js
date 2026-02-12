const openBtn=document.getElementById("openBtn");
const noBtn=document.getElementById("noBtn");
const envelope=document.getElementById("envelope");
const openSound=document.getElementById("openSound");
const heartsContainer=document.querySelector(".hearts");

let noScale=1;
let openScale=1;
let clickCount=0;

noBtn.addEventListener("click",()=>{
  clickCount++;

  noScale-=0.25;
  if(noScale<0.2) noScale=0.2;

  openScale+=0.35;

  noBtn.style.transform=`scale(${noScale})`;
  openBtn.style.transform=`scale(${openScale})`;

  if(clickCount===1){
    openBtn.textContent="Buka Yaaa";
  }

  if(clickCount===2){
    openBtn.textContent="Buka Pleassseeeeee";
  }

  if(noScale<=0.2){
    noBtn.style.display="none";
  }
});

openBtn.addEventListener("click",()=>{
  envelope.classList.add("open");
  openSound.play();
});

/* Floating hearts */
function createHeart(){
  const heart=document.createElement("span");
  heart.innerHTML="❤️";
  heart.style.left=Math.random()*100+"vw";
  heart.style.animationDuration=(Math.random()*4+6)+"s";
  heartsContainer.appendChild(heart);
  setTimeout(()=>heart.remove(),10000);
}
setInterval(createHeart,800);
