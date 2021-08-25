// script for register.html 

let buttonSubmit=document.getElementById("btnSubmit");
buttonSubmit.onclick=function (){
	let pwsCreate=document.getElementById("password_create");
	let pwsConfirm=document.getElementById("password_confirm");
	if(pwsCreate.value!=pwsConfirm.value){
		alert("You typed a wrong password");
	}
	else{
		alert("Thank you for your register. Please check your email to confirm.")
	}	
}