//轮播图的效果实现
$(document).ready(function(){
    slider();
    $(window).bind('scroll', function() {
        console.log($(window).scrollTop());
        if(Number($(window).scrollTop()) >= 800) {
            $(".entecr_c0").attr("style","visibility: hidden;");
        }

        if(Number($(window).scrollTop()) < 800) {
            $(".entecr_c0").attr("style","visibility: visible;");
        }
    });
 });

function slider() {
    var count=0; //用来计数  以便后面判断是否已经翻到最后一张

    $(".arrow-right").click(function(){
        count++;
        if(count==$(".slider li").length){
            count=0;
        }
        $(".slider li").eq(count).fadeIn().siblings("li").fadeOut();
    });

    $(".arrow-left").click(function(){
        count--;
        if(count==-1){
            count = $(".slider li").length-1;
        }
        $(".slider li").eq(count).fadeIn().siblings("li").fadeOut();
    });
} 
