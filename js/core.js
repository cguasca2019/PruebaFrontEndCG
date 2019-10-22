$(document).ready(function(){
    readData();
});

function readData() {
    $.getJSON('js/data.json',function(data){
        console.log(data);
        // var output = '<ul>';  
        // $.each(data, function(key,val){
        //     output += '<li>'+ val.name + " " + val.zipcode+ '</li>';
        // });
        // output += '</ul>';
        // $('#update').html(output);
    });
}