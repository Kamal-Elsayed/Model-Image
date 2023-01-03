let logo = document.getElementById("myImg");
let imgModel = document.getElementById("imgModel");
let close = document.getElementById("close");
let img = document.getElementById("img");
let desc = document.getElementById("desc");


logo.addEventListener ("click", () => {


    imgModel.style.display = "block";
    desc.innerHTML = "Our Services";
    img.src = "images/img.png";

});

close.addEventListener("click", () => {
    imgModel.style.display = "none"
})