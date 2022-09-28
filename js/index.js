console.log("Its Done")

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("portfolio-btn") || e.target.classList.contains("popup")) {
        togglePopup();
        portfolioItem(e.target.parentElement.parentElement.parentElement);
    }
})

function togglePopup() {
    document.querySelector(".portfolio-descripiton").classList.toggle("open");
    document.querySelector(".main").classList.toggle("fade");
}

document.querySelector(".fa-xmark").addEventListener("click", togglePopup)

function portfolioItem(portItem) {
    console.log("thissssss")
    console.log(portItem)
    document.querySelector(".desc-thumbnail img").src =
        portItem.querySelector(".portfolio-thumbnail img").src;
}




// =========== Exp and Education ===================

const edu = document.querySelector(".education-container"),
    eduSection = document.querySelector(".edu-section")

edu.addEventListener("click", (e) => {

    if (e.target.classList.contains("edu-box") && !e.target.classList.contains("active") || e.target.classList.contains("edu-h3") && !e.target.classList.contains("active")) {

        edu.querySelector(".active").classList.remove("active")
        e.target.classList.add("active");

        let target = e.target.getAttribute("data-target")
        console.log(target)

        eduSection.querySelector(".education-content.active").classList.remove("active")
        eduSection.querySelector(target).classList.add("active")
    }
})


// ===================== Services =================

const serviceBtn = document.querySelectorAll(".services-btn")
const serviceBox = document.querySelectorAll(".services-desc")
const serviceClose = document.querySelectorAll(".services-close")

serviceBtn.forEach((e, i) => {
    e.addEventListener('click', () => {
        serviceBox[i].classList.toggle('show-service')
    })
})

serviceClose.forEach((ele) => {
    ele.addEventListener('click', () => {
        console.log("trigger")
        serviceBox.forEach((item) => {
            item.classList.remove('show-service')
        })
    })
})



// ====================== Scroll ==========================

ScrollReveal({
    reset: true,
    distance: '3rem',
    duration: 1000,
    delay: 400
});

ScrollReveal().reveal('.heading-highlight', { delay: 200, origin: 'left' });
ScrollReveal().reveal('.highlight-span', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.info', { delay: 100, origin: 'left' });
ScrollReveal().reveal('.line', { delay: 100, origin: 'left' });
// ScrollReveal().reveal('.education-item', { delay: 100, origin: 'left' });
ScrollReveal().reveal('.info #info-sub-head', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.info_icons a , .about-box .about-card', { delay: 200, origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.button .btn', { delay: 500, origin: 'bottom', interval: 200 });

ScrollReveal().reveal('.home_img img , .about_img img', {
    delay: 100, origin: 'left', interval: 200, rotate: {
        x: 20,
        y: 20,
    }
});

// ===================== Mix It Up ========================

let mixerPortfolio = mixitup('.portfolio-content', {
    selectors: {
        target: '.portfolio-project'
    },
    animation: {
        duration: 300
    }
});

let workItem = document.querySelectorAll('.work-item');
let work = document.querySelector('.work-filter');

workItem.forEach(e => {
    e.addEventListener('click',()=> {
        if (!e.classList.contains("active-item")) {
            work.querySelector('.active-item').classList.remove('active-item')
            e.classList.add('active-item')
        }
    })
})