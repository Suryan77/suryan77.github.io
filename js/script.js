function myFunction(){
    var navbar = document.getElementById('nav');
    var nav = document.querySelector('.toggle-btn');
    navbar.classList.toggle('show');
    nav.classList.toggle('active');
}

var loginBtn = document.querySelectorAll(".login-btn");
var log = document.querySelector('.reg-btn');


log.addEventListener("click",reg);
function reg(){
	var log1 = document.querySelector("#reg-btn1");
	if(log1.style.display = "" ||  log1.style.display === 'none'){
		log1.style.display = "block";
	}
	else {
		log1.style.display = "none";
	}
}
loginBtn[0].addEventListener("click",openHiddenlogin);
loginBtn[1].addEventListener("click",openHiddenlogin);


function openHiddenlogin(){
	var loginbox = document.querySelector("#login-box");
	if(loginbox.style.display = "" ||  loginbox.style.display === 'none'){
		loginbox.style.display = "block";
	}
	else {
		loginbox.style.display = "none";
	}
}


