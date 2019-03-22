var link=document.querySelector(".query_form");
var popup=document.querySelector(".modal_login");
var close=document.querySelector(".modal_close");

link.addEventListener("click", function(evt) {
evt.preventDefault();
popup.classList.add("modal_show");
});

close.addEventListener("click", function(evt) {
evt.preventDefault();
console.log("нормально");
popup.classList.remove("modal_show");
});