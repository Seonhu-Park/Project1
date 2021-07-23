function init(){

$('header').load('inc.html .hdmain',burger);
$('footer').load('inc.html .end');




function burger(){
    const elBurger = document.querySelector('.bgmenu1');
    const elNav = document.querySelector('.bgmenu2');
    const elBurBtn = document.querySelectorAll('.bgmenu1 > a span');
    for(let i=0; i<elBurBtn.length; i++){
        elBurger.addEventListener('click',function(){
            // this.classList.toggle('active');
            elNav.classList.toggle('active');
            elBurBtn[i].classList.toggle('xbtn');
        });
    }
};


$(".figure").slick({
    arrows:true, //좌우버튼
    dots: true, //인디게이터
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000,
    fade:true,
    cssEase:'linear',
    responsive:[
        {
            breakpoint: 767,
            settings : {
                fade:false
            }
        }
    ]
});

$(".exh_thm").slick({
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000,
    centerPadding: '30px',
    responsive:[
        {
            breakpoint: 767,
            settings : {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
            }
        }
    ]
  });

const elScr = document.querySelectorAll('.scr-con');

for(let i=0; i<elScr.length; i++){
    window.addEventListener('scroll',function(){
        if(window.innerWidth > 767){
            if(elScr[i].offsetTop - window.innerHeight <= window.scrollY){
                elScr[i].classList.add('active');
            }
        }
    })
    if(window.innerWidth < 767){
        elScr[i].classList.add('active');
        elScr[i].style = `transition:0s;`;
    }
}

}
window.onload = init;
