var vargu = [
    'img/SliderBanner/Banner1.jpg',
    'img/SliderBanner/Banner2.jpg',
    'img/SliderBanner/Banner3.jpg'
]
var index = 0;

function krijoSlider(){
    document.getElementById('banner').src = vargu[index++];
    if(index == vargu.length){
        index = 0;
    }
    setTimeout("krijoSlider()", 2000); 
}
krijoSlider();