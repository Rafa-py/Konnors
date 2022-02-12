


//Menu Mobile 
function animationMenu(){
   let mobileMenu = document.querySelector(".menu-toggle");
   let Menu = document.querySelector('.menu'); 
   mobileMenu.addEventListener('click', ()=>{
        mobileMenu.classList.toggle('active')
        Menu.classList.toggle('active')
    });
}
animationMenu();
