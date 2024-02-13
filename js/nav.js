document.addEventListener("DOMContentLoaded", function () {
   const navigation = document.querySelector("#toggle");
   const mobiletoggle = document.querySelector(".mobile-nav-toggle");
 
   mobiletoggle.addEventListener("click", () => {
     const visibility = navigation.getAttribute("data-visible");
 
     if (visibility === "false") {
       navigation.setAttribute("data-visible", true);
       mobiletoggle.setAttribute("aria-expanded", true);
     } else if (visibility === "true") {
       navigation.setAttribute("data-visible", false);
       mobiletoggle.setAttribute("aria-expanded", false);
     }
   });
 });
 