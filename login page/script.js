var lst = [{name:"charan",email:"charan",password:"charan"}];
function signup(){
	var obj = {};
	var sign_name = document.getElementsByClassName("signup_name")[0];
	var sign_email = document.getElementsByClassName("signup_email")[0];
	var sign_password = document.getElementsByClassName("signup_password")[1];
	var sign_cfmpassword = document.getElementsByClassName("signup_cfmpassword")[0];
	// console.log(lst[0].includes(sign_name.value));
	var userExists = false;
	for(let i=0;i<lst.length;i++){
		if(lst[i].name===sign_name.value && lst[i].email===sign_email.value){
			userExists = true;
			window.alert("User already exits please login.")
			var x = document.getElementsByClassName("signup_div")[0];
			x.style = "display : none";
			var y = document.getElementsByClassName("login_div")[0];
			y.style = "display : block";
		}

	}
	if(userExists===false){
		if(sign_name.value==="" || sign_email.value==="" || sign_password.value==="" || sign_cfmpassword.value===""){
			window.alert("Please all the details inorder to signup.")
		}
		else{
			if(sign_password.value!==sign_cfmpassword.value){
				window.alert("the password didn't match");
				sign_cfmpassword.value=""
			}
			else{
				obj.name=sign_name.value;
				obj.email=sign_email.value;
				obj.password=sign_password.value;
				lst.push(obj);
				console.log(lst);
				window.alert("You have successfully registered. Now please Login.")
				sign_name.value="";
				sign_email.value="";
				sign_password.value="";
				sign_cfmpassword.value="";
				var x = document.getElementsByClassName("signup_div")[0];
				x.style = "display : none";
				var y = document.getElementsByClassName("login_div")[0];
				y.style = "display : block";
			}
		}
	}
}
function signup_from_login(){
	var x = document.getElementsByClassName("login_div")[0];
	x.style = "display : none";
	var y = document.getElementsByClassName("signup_div")[0];
	y.style = "display : block";
}

// console.log(lst);
// console.log(lst[0].name);
function login(){
	var email = document.getElementsByClassName("user_name")[0];
	var password = document.getElementsByClassName("user_password")[0];
	console.log(email.value,password.value);
	if(email.value==="" || password.value===""){
		window.alert("Please Enter Valid Deatils");
	}
	else{
		var user_found = false;
		for(let i=0;i<lst.length;i++){
			console.log(lst[i].name," ",lst[i].email," ",lst[i].password);
			if((lst[i].name===email.value || lst[i].email===email.value) && (lst[i].password===password.value)){
				console.log("User Exists");
				window.alert("Logged in Successfully");
				user_found = true;
			}
		}
		if(!user_found){
			window.alert("No user found with given details please signup.");
		}
	}

}
var c=0;
function showpassword(){
	var x = document.getElementsByClassName('user_password')[0];
	if(c==0){
		var y1 = document.getElementsByClassName('fa-eye-slash');
		y1.style = "display : none";
		var y2 = document.getElementsByClassName('fa-eye');
		y2.style = "display : inline-block";
		x.type = "text";
		c=1;
	}
	else{
		var y1 = document.getElementsByClassName('fa-eye-slash');
		y1.style = "display : inline-block";
		var y2 = document.getElementsByClassName('fa-eye');
		y2.style = "display : none";
		x.type = "password";
		c=0;
	}
}