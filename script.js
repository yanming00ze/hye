/* ==========================================
   BRAWL STARS EVENT
   script.js
========================================== */

window.addEventListener("load", () => {
    const loading = document.getElementById("loading");
    setTimeout(() => {
        loading.style.opacity = "0";
        loading.style.pointerEvents = "none";
        setTimeout(() => {
            loading.remove();
        },600);
    },800);
});

/*==========================================
Countdown
==========================================*/

// 修改這裡即可設定活動結束時間
const endTime = new Date("2026-07-20T23:59:59").getTime();
const countdown = document.getElementById("countdown");

function updateCountdown(){
    const now = new Date().getTime();
    const distance = endTime - now;
    if(distance <= 0){
        countdown.innerHTML="活動已結束";
        return;
    }
    const day=Math.floor(distance/(1000*60*60*24));
    const hour=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    const min=Math.floor((distance%(1000*60*60))/(1000*60));
    const sec=Math.floor((distance%(1000*60))/1000);
    countdown.innerHTML=
    `${day}天 ${hour}時 ${min}分 ${sec}秒`;
}

updateCountdown();
setInterval(updateCountdown,1000);

/*==========================================
FAQ
==========================================*/

document.querySelectorAll(".faq-title")
.forEach(button=>{
button.addEventListener("click",()=>{
const item=button.parentElement;
item.classList.toggle("active");
});
});

/*==========================================
Scroll Reveal
==========================================*/

const reveals=document.querySelectorAll(".reveal");

function revealElements(){
const trigger=
window.innerHeight*0.88;
reveals.forEach(el=>{
const top=
el.getBoundingClientRect().top;
if(top<trigger){
el.classList.add("show");
}
});
}

window.addEventListener("scroll",revealElements);
revealElements();

/*==========================================
Particle Background
==========================================*/

const background=document.querySelector(".background");

function createParticle(){
    const particle=document.createElement("span");
    particle.className="particle";
    const size=Math.random()*8+4;
    particle.style.width=size+"px";
    particle.style.height=size+"px";
    particle.style.left=Math.random()*100+"vw";
    particle.style.animationDuration=
    8+Math.random()*10+"s";
    particle.style.opacity=
    Math.random()*0.6+0.2;
    background.appendChild(particle);
    setTimeout(()=>{
        particle.remove();
    },18000);
}

setInterval(createParticle,350);

/*==========================================
Mouse Light Effect
==========================================*/

const hero=document.querySelector(".hero-card");

document.addEventListener("mousemove",(e)=>{
    const rect=hero.getBoundingClientRect();
    const x=e.clientX-rect.left;
    const y=e.clientY-rect.top;
    hero.style.setProperty("--x",x+"px");
    hero.style.setProperty("--y",y+"px");
});

/*==========================================
Hero Parallax
==========================================*/

document.addEventListener("mousemove",(e)=>{
    const moveX=(e.clientX/window.innerWidth-.5)*12;
    const moveY=(e.clientY/window.innerHeight-.5)*12;
    document.querySelector(".light.one").style.transform=
    `translate(${moveX}px,${moveY}px)`;
    document.querySelector(".light.two").style.transform=
    `translate(${-moveX}px,${-moveY}px)`;
    document.querySelector(".light.three").style.transform=
    `translate(${moveX/2}px,${moveY/2}px)`;
});

/*==========================================
Button Ripple
==========================================*/

document.querySelectorAll(".enter-btn").forEach(btn=>{
btn.addEventListener("click",function(e){
const circle=document.createElement("span");
const diameter=Math.max(
this.clientWidth,
this.clientHeight
);
circle.style.width=diameter+"px";
circle.style.height=diameter+"px";
circle.className="ripple";
const rect=this.getBoundingClientRect();
circle.style.left=
e.clientX-rect.left-diameter/2+"px";
circle.style.top=
e.clientY-rect.top-diameter/2+"px";
this.appendChild(circle);
setTimeout(()=>{
circle.remove();
},700);
});
});

/*==========================================
Logo Floating
==========================================*/

let angle=0;
setInterval(()=>{
angle+=0.03;
const logo=document.querySelector(".logo");
if(logo){
logo.style.transform=
`translateY(${Math.sin(angle)*6}px)`;
}
},16);

/*==========================================
Auto Active Navigation
==========================================*/

const sections=document.querySelectorAll("section");
window.addEventListener("scroll",()=>{
sections.forEach(sec=>{
const top=window.scrollY;
const offset=sec.offsetTop-200;
const height=sec.offsetHeight;
if(top>=offset && top<offset+height){
sec.classList.add("active");
}
});
});

/*==========================================
Back To Top
==========================================*/

const topButton=document.createElement("button");
topButton.innerHTML="↑";
topButton.className="backTop";
document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{
if(window.scrollY>500){
topButton.classList.add("show");
}else{
topButton.classList.remove("show");
}
});

topButton.onclick=()=>{
window.scrollTo({
top:0,
behavior:"smooth"
});
};

/*==========================================
Console
==========================================*/

console.log(
"%cBrawl Stars Event Ready",
"color:#FFD54A;font-size:18px;font-weight:bold;"
);

/*==========================================
Performance Optimize
==========================================*/

let pageHidden = false;
document.addEventListener("visibilitychange", () => {
    pageHidden = document.hidden;
});

setInterval(() => {
    if (pageHidden) return;
}, 1000);

/*==========================================
Lazy Image
==========================================*/

const lazyImages = document.querySelectorAll("img");
const lazyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
                img.src = img.dataset.src;
            }
            lazyObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => {
    if (img.dataset.src) {
        lazyObserver.observe(img);
    }
});

/*==========================================
Mobile Touch Active
==========================================*/

document.querySelectorAll(".enter-btn,.reward-card,.faq-item").forEach(el => {
    el.addEventListener("touchstart", () => {
        el.classList.add("touch");
    });
    el.addEventListener("touchend", () => {
        setTimeout(() => {
            el.classList.remove("touch");
        }, 180);
    });
});

/*==========================================
Smooth Anchor
==========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

/*==========================================
Resize Optimize
==========================================*/

let resizeTimer;
window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        revealElements();
        updateCountdown();
    }, 200);
});

/*==========================================
Particle Density
==========================================*/

const isMobile = window.innerWidth < 768;
if (isMobile) {
    clearInterval();
}

/*==========================================
Hero Intro Animation
==========================================*/

window.addEventListener("load", () => {
    const heroCard = document.querySelector(".hero-card");
    heroCard.animate(
        [
            {
                opacity: 0,
                transform: "translateY(60px) scale(.95)"
            },
            {
                opacity: 1,
                transform: "translateY(0) scale(1)"
            }
        ],
        {
            duration: 900,
            easing: "ease-out",
            fill: "forwards"
        }
    );
});

/*==========================================
Keyboard Support
==========================================*/

document.querySelectorAll(".faq-title").forEach(btn => {
    btn.addEventListener("keydown", e => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            btn.click();
        }
    });
});

/*==========================================
Prevent Double Click
==========================================*/

let clickLock = false;
document.querySelectorAll(".enter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        if (clickLock) return;
        clickLock = true;
        setTimeout(() => {
            clickLock = false;
        }, 800);
    });
});

/*==========================================
Footer Year
==========================================*/

const yearElement = document.querySelector(".footer-year");
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

/*==========================================
Finished
==========================================*/

console.log("%c✔ Website Loaded Successfully", "color:#6b32ff;font-size:18px;font-weight:bold;");
