// navbar change style when we scroll
window.addEventListener('scroll' , () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll' , window.scrollY > 0)
});


// opening the answer in FAQS section 

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click' , () => {
        faq.classList.toggle('open');

        // changing the icons 
        const icon = faq.querySelector('.faq__icon i');

        if(icon.className ==='fa-solid fa-plus')
        {
            icon.className ='fa-solid fa-minus'
        }
        else
        {
            icon.className ='fa-solid fa-plus'
        }
    })
});


 // show and hide humberger menu for tablets

const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click" , ()=>{
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
});

// to  close navbar
closeBtn.addEventListener("click" , ()=>{
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
});