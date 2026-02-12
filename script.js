const openBtn = document.getElementById("openBtn");
const noBtn = document.getElementById("noBtn");
const envelope = document.getElementById("envelope");
const openSound = document.getElementById("openSound");

let noScale = 1;
let openScale = 1;
let clickCount = 0;

noBtn.addEventListener("click",()=>{
    clickCount++;

    noScale -= 0.2;
    if(noScale < 0.15) noScale = 0.15;
    gsap.to(noBtn,{scale:noScale,duration:0.3});

    openScale += 0.35;
    gsap.to(openBtn,{scale:openScale,duration:0.3});

    if(clickCount==1) openBtn.innerText="Buka Yaaa 🥺";
    if(clickCount==2) openBtn.innerText="Buka Pleassseeeeee 😭";

    if(noScale<=0.15) noBtn.style.display="none";
});

openBtn.addEventListener("click",()=>{

    openSound.play();

    gsap.to(".flap",{rotateX:-180,duration:1,ease:"power2.inOut"});
    gsap.to(".letter",{y:-30,opacity:1,duration:1,delay:0.5});

    confetti({
        particleCount:150,
        spread:120,
        origin:{y:0.6}
    });
});

/* Floating Hearts */
const heartsContainer=document.querySelector(".hearts");

function createHeart(){
    const heart=document.createElement("span");
    heart.innerHTML="❤️";
    heart.style.left=Math.random()*100+"vw";
    heart.style.animationDuration=(Math.random()*5+5)+"s";
    heartsContainer.appendChild(heart);
    setTimeout(()=>heart.remove(),10000);
}
setInterval(createHeart,800);
