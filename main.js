$(".prev").on("click", function(e){
    e.preventDefault();
    
    $(".panel li").last().prependTo(".panel");
});

$(".next").on("click", function(e){
    e.preventDefault();

    $(".panel li").first().appendTo(".panel");
});