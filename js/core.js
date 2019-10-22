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
        $.each(data.offerts, function(key,val){
           var template = '<div class="card cardStyle">'+
           '<img src="'+ val.url +'" class="card-img-top" width="100%" alt="'+ val.title +'">'+
                '<div class="card-body cardBody">'+
                    '<div class="cardTitle"><h4>'+ val.title +'</h4></div>'+
                    '<p class="card-text">'+ val.content +'</p>'+
                    '<button type="button" style="margin-top: 25px;" class="btn btn-primary btn btn-block">Conoce más</button>'+
                '</div>'+
            '</div>';
            $(template).appendTo( ".grid-1" );
        });
    });
}