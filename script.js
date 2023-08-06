alert("Github is linked.");

/*JS for hamMenu*/
const hamBtn = document.querySelector("#hamIcon");
hamBtn.addEventListener("click", toggleMenus);
const menuItemsList=document.querySelector("nav ul");

function toggleMenus(){ /*open and close menu*/
    if (menuLinks.style.display === "block") 
        menuLinks.style.display = "none";
    else menuLinks.style.display = "block";
}
