var vargu = [
    'img/Banner1.jpg',
    'img/Banner2.jpg',
    'img/Banner3.jpg'
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