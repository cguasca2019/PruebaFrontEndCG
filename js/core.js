$(document).ready(function(){
    readData();
});

function readData() {
    $.getJSON('https://raw.githubusercontent.com/cguasca2019/PruebaFrontEndCG/master/js/data.json',function(data){
     var oferts = data.offerts;
     var sliders = data.slides; 
    
    console.log(data.offerts);
        var output = '<ul>';  
        // $.each(data, function(key,val){
        //     output += '<li>'+ val.name + " " + val.zipcode+ '</li>';
        // });
        // output += '</ul>';
        // $('#update').html(output);
    });
}