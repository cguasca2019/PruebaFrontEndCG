$(document).ready(function(){
    readData();
});

function readData() {
    $.getJSON('https://raw.githubusercontent.com/cguasca2019/PruebaFrontEndCG/master/js/data.json',function(data){
        // var oferts = data.offerts;
        // var sliders = data.slides; 
        var output1 = '';  
        var output2 = '';  
        var item = 0;
        $.each(data.slides, function(key,val){
            output1 += '<div class="item"><img src="'+ val.url +'" alt="'+ val.name +'"><div class="carousel-caption"> '+ val.name +' </div></div>';
            output2 += '<li data-target="#carousel1" data-slide-to="' + item +'"></li>'
            item ++;           
        });
        $('.carousel-inner').html(output1);
        $('.carousel-indicators').html(output2);
        $('.carousel-inner > div').first().addClass('active');
        $('.carousel-indicators > li').first().addClass('active');       
        $('#carousel1').carousel();      
    });
}