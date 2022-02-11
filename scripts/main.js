//Faq
button = document.querySelector('.btn');

button.addEventListener('click', ()=>{
    form = document.querySelector('.forms');
    form.classList.toggle('hide');
    contact = document.querySelector('.contact__us');
    contact.classList.toggle('hide_us');
});


//Menu Mobile 
function animationMenu(){
    mobileMenu = document.querySelector(".menu-mobile");
    mobileMenu.addEventListener('click', ()=>{
        mobileMenu.classList.toggle('active')
    });
    console.log(mobileMenu);
}
animationMenu();
