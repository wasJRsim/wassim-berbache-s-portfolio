const images = [
    "https://res.cloudinary.com/dshmhktwh/image/upload/ChatGPT_Image_Apr_24_2026_11_42_52_AM_hmg3c7.jpg",
    "https://res.cloudinary.com/dshmhktwh/image/upload/ChatGPT_Image_Apr_24_2026_11_42_52_AM_2_qieneu.jpg",
    "https://res.cloudinary.com/dshmhktwh/image/upload/ChatGPT_Image_Apr_24_2026_11_42_52_AM_1_otpgut.jpg",
    "https://res.cloudinary.com/dshmhktwh/image/upload/Capture_d_%C3%A9cran_2026-03-23_074444_2_5_liaciu.png",
    "https://res.cloudinary.com/dshmhktwh/image/upload/Capture_d_%C3%A9cran_2026-03-23_074444_2_4_t4rhl5.png",
    "https://res.cloudinary.com/dshmhktwh/image/upload/Capture_d_%C3%A9cran_2026-03-23_074444_2_7_fev3us.png",
];
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const photo = document.querySelector('.photo-container');

    photo.style.transform = `translateY(-${scrollY * 0.5}px)`;
});

document.addEventListener('DOMContentLoaded', () => {
    // Select elements
    const photo = document.querySelector('.photo-container');
    const logo = document.querySelector('.logo');

    logo.addEventListener('mouseenter', () =>{
        logo.classList.add('glow');
    });
    logo.addEventListener('mouseleave', () =>{
        logo.classList.remove('glow');
    });

    // Hover on photo → add glow to logo
    photo.addEventListener('mouseenter', () => {
        logo.classList.add('glow');
    });

    // Mouse leaves photo → remove glow
    photo.addEventListener('mouseleave', () => {
        logo.classList.remove('glow');
    });
});

const container = document.getElementById("container");

let currentImageIndex = 0;
let lastX = 0;
let lastY = 0;
let distanceThreshold = 130;

window.addEventListener("mousemove", (e) => {
    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance > distanceThreshold) {
        createTrail(e.clientX, e.clientY);
        lastX = e.clientX;
        lastY = e.clientY;

    }
});

function createTrail(x, y) {
    const img = document.createElement("img");
    img.classList.add("image-trail");
    img.src = images[currentImageIndex];
    container.appendChild(img);

    currentImageIndex = (currentImageIndex + 1) % images.length;

    gsap.set(img, {
        x: x,
        y: y,
        scale: 0,
        opacity: 0,

    });

    gsap.to(img, {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
    });

    gsap.to(img, {
        opacity: 0,
        duration: 0.7,
        delay: 0.3,
        ease: "power2.in",
        onComplete: () => {
            img.remove();
        }
    });
}
const navbar=document.querySelector('.navbar');

window.addEventListener('scroll' , () =>{
    if (window.scrollY >50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const title = document.querySelector('.firsttitle');
const creative = document.querySelector('.creative');
const websites = document.querySelector('.websites');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      creative.classList.add('animate');
      websites.classList.add('animate');
      observer.unobserve(entry.target);
    } else {
      /* Optional: reset when scrolled away */
      creative.classList.remove('animate');
      websites.classList.remove('animate');
    }
  });
}, { threshold: 0.8 });
observer.observe(title);


const video = document.getElementById("cursorvideo");
video.addEventListener("ended",() => {
    video.style.display = "none";
});
const observerq = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.intersectionRatio >= 0.8) {
            video.style.opacity = "1";
            video.play();
        }else{
            video.style.opacity = "0";
            video.pause();
        }
    });
}, {
    threshold: [0, 0.8, 1]
});
observerq.observe(video);


const eweb = document.querySelector('.eweb');
const ephone = document.querySelector('.ephone');
const emoney = document.querySelector('.emoney');
const eincrease = document.querySelector('.eincrease');
const erocket = document.querySelector('.erocket');
const eheart = document.querySelector('.eheart');
const estar = document.querySelector('.estar');
const pc = document.querySelector('.pc');
const phone = document.querySelector('.phone');
   // Hover on photo → add glow to logo
    eheart.addEventListener('mouseenter', () => {
        pc.classList.add('dropred');
    });

    // Mouse leaves photo → remove glow
    eheart.addEventListener('mouseleave', () => {
        pc.classList.remove('dropred');
    });

    estar.addEventListener('mouseenter', () => {
        pc.classList.add('dropyellow');
    }); 

    // Mouse leaves photo → remove glow
    estar.addEventListener('mouseleave', () => {
        pc.classList.remove('dropyellow');
    });

    erocket.addEventListener('mouseenter', () => {
        pc.classList.add('droporange');
    });

    // Mouse leaves photo → remove glow
    erocket.addEventListener('mouseleave', () => {
        pc.classList.remove('droporange');
    });

    
    emoney.addEventListener('mouseenter', () => {
        pc.classList.add('dropgreen');
    });

    // Mouse leaves photo → remove glow
    emoney.addEventListener('mouseleave', () => {
        pc.classList.remove('dropgreen');
    });
    eincrease.addEventListener('mouseenter', () => {
        pc.classList.add('dropincrease');
    });

    // Mouse leaves photo → remove glow
    eincrease.addEventListener('mouseleave', () => {
        pc.classList.remove('dropincrease');
    });

    eweb.addEventListener('mouseenter', () => {
        phone.classList.add('dropweb');
    });

    // Mouse leaves photo → remove glow
    eweb.addEventListener('mouseleave', () => {
        phone.classList.remove('dropweb');
    });
    ephone.addEventListener('mouseenter', () => {
        phone.classList.add('dropphone');
    });

    // Mouse leaves photo → remove glow
    ephone.addEventListener('mouseleave', () => {
        phone.classList.remove('dropphone');
    });


const loginlink = document.getElementById('loginlink');
const loginrectangle = document.getElementById('loginrectangle');
const closerrectangle = document.getElementById('closerrectangle');
const overlay = document.getElementById('overlay');
loginlink.addEventListener('click' , function(e) {
    e.preventDefault();
    loginrectangle.style.display = 'block';
    overlay.style.display = 'block';
});
closerrectangle.addEventListener('click' ,function(){
    loginrectangle.style.display='none';
    overlay.style.display='none';
});
overlay.addEventListener('click' , () => {
    loginrectangle.style.display='none' ;
    overlay.style.display = 'none';
});


const spotlight = document.querySelector(".spotlight");

spotlight.addEventListener("mousemove", (e) => {
    const rect = spotlight.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    spotlight.style.setProperty("--x", x + "px");
    spotlight.style.setProperty("--y", y + "px");
});

const ofcourse = document.getElementById('ofcourse');
const hiddenbox = document.getElementById('hiddenbox');
ofcourse.addEventListener("click", () => {
    hiddenbox.classList.remove("hidden");
});

