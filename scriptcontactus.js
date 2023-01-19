var hamburger = document.querySelector(".hamb");
var navlist = document.querySelector(".nav-list");
var links = document.querySelector(".navlist li");

hamburger.addEventListener("click", function(){
	this.classList.toggle("click");
	navlist.classList.toggle("open");
});