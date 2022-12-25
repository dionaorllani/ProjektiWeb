//SliderBanner
var array = [
    'img/SliderBanner/Banner1.jpg',
    'img/SliderBanner/Banner2.jpg',
    'img/SliderBanner/Banner3.jpg'
]
var index = 0;

function Slider(){
    document.getElementById('banner').src = array[index++];
    if(index == array.length){
        index = 0;
    }
    setTimeout("Slider()", 2000); 
}
Slider();



//Validation of Message
var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName(){
	var name = document.getElementById ('contact-name').value;
	if(name.length == 0){
		nameError.innerHTML = 'Name is required';
		return false;
	}
	if(!name.match(/^[a-zA-Z]+ [a-zA-Z]+$/)){ 
		nameError.innerHTML = 'Write full name';
		return false;
	}
	nameError.innerHTML = '<i class = "fas fa fa-check-circle"></i>';
	return true;
} function validatePhone (){
	var phone = document.getElementById ('contact-phone').value;
	if (phone.length == 0){
		phoneError.innerHTML = 'Phone number is required';
		return false;
	}
	if(phone.length !== 9){
		phoneError.innerHTML = 'error';
		return false;
	}
	if(!phone.match(/^[0-9]{9}$/)){
		phoneError.innerHTML = 'Wrong input';
		return false;
	}
	phoneError.innerHTML = '<i class = "fas fa fa-check-circle"></i>';
	return true;
}
function validateEmail (){
	var email = document.getElementById('contact-email').value;
	if(email.length == 0){
		emailError.innerHTML = 'Email required';
		return false;
	}
	if(!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
		emailError.innerHTML = 'Invalid email';
		return false;
	}
	emailError.innerHTML = '<i class = "fas fa fa-check-circle"></i>';
	return true;
}

function validateMessage (){
	var message = document.getElementById('contact-message').value;
	var required = 30;
	var left = required - message.length;
	if(left>0){
		messageError.innerHTML = left + 'more characters needed';
		return false;

	}
	messageError.innerHTML = '<i class = "fas fa fa-check-circle"></i>';
	return true;
}
function validateForm(){
	if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage() ){
		submitError.style.display = 'block';
		submitError.innerHTML = 'Please correct your information!';
	setTimeout(function() {submitError.style.display = 'none';}, 3000); 
		return false;
	}
  
}