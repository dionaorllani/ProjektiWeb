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


function validoMeRegex(){
    var usernameRegex = /^[a-z A-Z]{5,10}$/;
    var username = document.getElementById('username').value;
    var emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    var email = document.getElementById('email').value;

    //Le te fillon me shkronje te madhe le te permbaje karaktere te vogla sa ka qef perdoruesi dhe le te perfundoj me numer
    var passwordRegex =/^[A-Z]{1}[a-z]{1,}[0-9]{1}$/
    var password = document.getElementById('password').value;

    if(usernameRegex.test(username)){
        console.log("Username is fine!");
    }else{
        alert("Username is Wrong!");
    }
    if(passwordRegex.test(password)){
        console.log("Password is fine!");
    }else{
        alert("Password is Wrong!");
    }
    if(emailPattern.test(email)){
        console.log("Email is fine!");
    }
    else{
        alert("Email is wrong!");
    }

}