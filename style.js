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

//SingleProduct Slider
