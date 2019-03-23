var link=document.querySelector(".query_form");
var popup=document.querySelector(".modal_login");
var close=document.querySelector(".modal_close");
var login=document.querySelector("[name=name]");
var form=document.querySelector(".modal_login");
var email=document.querySelector("[name=mail]");
var textarea=document.querySelector("textarea");

form.addEventListener("submit", function(evt) {
	evt.preventDefault();
	console.log(login.value);
	console.log(email.value);
	console.log(textarea.value);
});

link.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.add("modal_show");
	login.focus();
});

close.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.remove("modal_show");
});

