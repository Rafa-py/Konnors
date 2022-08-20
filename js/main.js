AOS.init();

var nav = document.querySelector('.nav');
var mobileBtn = document.querySelector('.mobileButton');

function toggleMobileMenu() {
    mobileBtn.addEventListener('click', () => {
        nav.classList.toggle('mobile');
    })
}
toggleMobileMenu();

// technologys slide

$('.slide').slick({
    infinite: false,
    slidesToShow: 3.17,
    slidesToScroll: 1,
    centerMode: false
});

//price increasing animation

var prices = document.querySelectorAll('.js-price');

function recursiveIncreasingNumbers(i, element, endI) {
    if (i <= endI) {
        element.innerHTML = "R$" + i + ",00";
        setTimeout(function () {
            recursiveIncreasingNumbers(i + 1, element, endI)
        }, 1);
    }
}

function getAllPrices() {
    prices.forEach(price => {
        priceNumber = parseInt(price.innerHTML.replace("R$", ''));
        recursiveIncreasingNumbers(0, price, priceNumber);
    })
}

var executed = false;
console.log(executed)

function initGetAllPrices() {
    var maxYoffset = 2600;
    var minYoffset = 1900;

    if (window.pageYOffset > minYoffset && window.pageYOffset < maxYoffset) {
        document.addEventListener('scroll', function myFunction() {
            getAllPrices();
           
            if(executed) {
                document.removeEventListener('scroll', myFunction);
            }
        })
    } 

   
}

function once(fn, context) { 
    var result;
    return function() { 
        if (fn) {
            result = fn.apply(context || this, arguments);
            fn = null;
        }
        return result;
    };
}

once(initGetAllPrices());

console.log(executed)

//increase template animation duration by 100ms

