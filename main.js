$(".prev").on("click", function(e){
    e.preventDefault();
    
    $(".panel li").last().prependTo(".panel");
    $(".panel").removeClass("on");
    $(".panel li").eq(2).addClass("on");
});

$(".next").on("click", function(e){
    e.preventDefault();

    $(".panel li").first().appendTo(".panel");
    $(".panel").removeClass("on");
    $(".panel li").eq(2).addClass("on");
});