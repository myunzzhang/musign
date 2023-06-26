// 메인메뉴의 움직이는 바
$('.gnb li a').mouseenter(function () {
    let bar = $(this).position().left;
    console.log(bar)
    let widNum = $(this).width();
    $('.bar').animate({
        'left': bar + "px",
        'width': widNum + "px",
        'opacity': 1
    }, 300)
})

$('.gnb').mouseleave(function () {
    $('.bar').animate({
        'left': 0,
        'width': 0,
        'opacity': 0
    }, 10)
})

//화면전환 애니메이션
$('.animate').scrolla({
    // default
    mobile: true, // 모바일 버전에서 활성화?
    once: false, // scroll시 한번 or 여러번? -- 반복실행
    animateCssVersion: 4 // scrolla css 버전 (3 or 4)
});


// menuOpen
//$('.menuOpen .open').on('click',function(){})
$('.menuOpen .open').click(function (e) {
    e.preventDefault();
    $('.menuOpen .menuWrap').addClass('on')
})
$('.menuWrap .close').click(function (e) {
    e.preventDefault();
    $('.menuOpen .menuWrap').removeClass('on')
})


$('.menuWrap ul li').click(function (e) {
    e.preventDefault();
    $('.menuOpen .menuWrap').removeClass('on')
});

//bgc변경

$(window).scroll(function(){
    //this는 window
    let scrollTop=$(this).scrollTop();
    let offset=$('.service').offset().top - 400;
    if(scrollTop>offset){
        $('body').addClass('on')
    }else{
        $('body').removeClass('on')
    }
});