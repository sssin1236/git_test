let enableclick = true;

$(".prev").on("click", function(e){
    e.preventDefault();
    
    $(".panel li").first().appendTo(".panel");
    $(".panel li").removeClass("on");
    $(".panel li").eq(2).addClass("on");
});

$(".next").on("click", function(e){
    e.preventDefault();

    $(".panel li").last().prependTo(".panel");
    $(".panel li").removeClass("on");
    $(".panel li").eq(2).addClass("on");
});

//마우스무브 이벤트
$("body").on("mousemove", ".panel li.on", function(e){
    var cx = $(this).offset().left;
    var cy = $(this).offset().top;
    var x = (e.pageX-cx)/5;
    var y = (e.pageY-cy)/5;

    $(this).find("span").css({
        top: -y, left: -x
    })
});