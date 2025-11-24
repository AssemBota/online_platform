function toggleMobileMenu(btn){
  const menu = document.getElementById("mobileMenu");
  const expanded = btn.getAttribute("aria-expanded") === "true";

  if(expanded){
    btn.setAttribute("aria-expanded", "false");
    menu.style.display = "none";
  } else {
    btn.setAttribute("aria-expanded", "true");
    menu.style.display = "block";
  }
}


window.addEventListener("resize", () => {
  const menu = document.getElementById("mobileMenu");
  const burger = document.querySelector(".burger");

  if(window.innerWidth > 900){
    menu.style.display = "none";
    if(burger) burger.setAttribute("aria-expanded", "false");
  }
});
