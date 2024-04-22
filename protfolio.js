 'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

  // skills toggle 

  const toggleBtnBox = document.querySelector("[data-toggle-box]");
  const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
  const skillsBox = document.querySelector("[data-skills-box]");

  for(let i =0; i<toggleBtns.length; i++){
    toggleBtns[i].addEventListener("click", function(){
      elementToggleFunc(toggleBtnBox);
      for(let i=0; i< toggleBtns.length; i++){
        elementToggleFunc[i];
      }
      elementToggleFunc(skillsBox);
    })
  }



  // sticky go to top

  const goTopBtn = document.querySelector("[data-go-top]");

  window.addEventListener("scroll", function(){
    if(window.screenY >= 0){
      goTopBtn.classList.add("active");
    }else{
      goTopBtn.classList.remove("active");
    }
  });
