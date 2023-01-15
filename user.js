const themeToggler = document.querySelector(".theme-toggler");


themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
  
    themeToggler.querySelector('i:nth-child(1)').classList.toggle('activee');
    themeToggler.querySelector('i:nth-child(2)').classList.toggle('activee');
})
  
function toggleMenu(){
    let nav = document.getElementById("navigation");
    if(nav.style.display == "block"){
        nav.style.display = "none";
    }else{
        nav.style.display = "block";
    }
}
