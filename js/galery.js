let familyTab = document.getElementById("familyTab");
let loveTab = document.getElementById("loveTab");
let lifestyleTab = document.getElementById("lifestyleTab");
let fashionTab = document.getElementById("fashionTab");
let glmourTab = document.getElementById("glmourTab");
let family = document.getElementById('family');
let love = document.getElementById('love');
let lifestyle = document.getElementById('lifestyle');
let fashion = document.getElementById('fashion');
let glamour = document.getElementById('glamour');
let onFocus = document.querySelector(".focus");

let galery = document.querySelectorAll('.galery');

window.onload=()=>{
    glamour.classList.add('galery');
}

let tabClick = ()=>{
    


    familyTab.addEventListener("click", (event)=>{
        event.preventDefault()
/*         familyTab.classList.add('focus');
        loveTab.classList.remove('focus');
        lifestyleTab.classList.remove('focus');
        fashionTab.classList.remove('focus');
        glmourTab.classList.remove('focus');
 */
        family.classList.add('galery');
        love.classList.remove('galery');
        lifestyle.classList.remove('galery');
        fashion.classList.remove('galery');
        glamour.classList.remove('galery');
        console.log('click');
    })
    loveTab.addEventListener("click", (event)=>{
        event.preventDefault()
/*         familyTab.classList.remove('focus');
        loveTab.classList.add('focus');
        lifestyleTab.classList.remove('focus');
        fashionTab.classList.remove('focus');
        glmourTab.classList.remove('focus');
 */

        family.classList.remove('galery');
        love.classList.add('galery');
        lifestyle.classList.remove('galery');
        fashion.classList.remove('galery');
        glamour.classList.remove('galery');
    })
    lifestyleTab.addEventListener("click", (event)=>{
        event.preventDefault()
        family.classList.remove('galery');
        love.classList.remove('galery');
        lifestyle.classList.add('galery');
        fashion.classList.remove('galery');
        glamour.classList.remove('galery');
    })
    fashionTab.addEventListener("click", (event)=>{
        event.preventDefault()
        family.classList.remove('galery');
        love.classList.remove('galery');
        lifestyle.classList.remove('galery');
        fashion.classList.add('galery');
        glamour.classList.remove('galery');
    })
    glmourTab.addEventListener("click", (event)=>{
        event.preventDefault()
        family.classList.remove('galery');
        love.classList.remove('galery');
        lifestyle.classList.remove('galery');
        fashion.classList.remove('galery');
        glamour.classList.add('galery');
    })

}

tabClick();



	$(document).ready(function() {
		$(".fancybox").fancybox();
	});


    
/* let swipe = function(){
    document.addEventListener('mousemove',function (event) {
        this.querySelectorAll('.galery').forEach(galery => {
            let speed = galery.getAttribute('data-speed');
            if(event.clientX > document.documentElement.clientWidth/2) {
                galery.style.transform = `translateX(${ speed}px)`
            }
            galery.style.transform = `translateX(${event.clientX*speed/100}px)`
            console.log(event.clientX);
            window.requestAnimationFrame(swipe);
        });
    });
}
swipe(); */