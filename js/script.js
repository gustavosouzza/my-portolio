const header = document.querySelector("header");
window.addEventListener ("scroll", function(){
     header.classList.toggle ("sticky", window.scrollY > 100 );
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => { 
     menu.classList.toggle('bx-x')
     navlist.classList.toggle('open')
}
window.onscroll = () => { 
     menu.classList.remove('bx-x')
     navlist.classList.remove('open')
}

function smoothScrollTo(target, duration) {
     const targetPosition = document.querySelector(target).offsetTop;
     const startPosition = window.pageYOffset;
     const distance = targetPosition - startPosition;
     let startTime = null;
   
     function animation(currentTime) {
       if (startTime === null) startTime = currentTime;
       const timeElapsed = currentTime - startTime;
       const progress = Math.min(timeElapsed / duration, 1);
       window.scrollTo(0, startPosition + distance * easeInOutQuad(progress));
   
       if (timeElapsed < duration) requestAnimationFrame(animation);
     }
   
     function easeInOutQuad(t) {
       return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
     }
   
     requestAnimationFrame(animation);
   }
   
 
   document.querySelectorAll('.navlist a').forEach(anchor => {
     anchor.addEventListener('click', function(e) {
       e.preventDefault(); 
       const targetId = this.getAttribute('href');
       smoothScrollTo(targetId, 100); 
     });
   });
   