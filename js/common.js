function init(){

    $('header').load('inc.html .hdmain',burger);
    $('footer').load('inc.html .end',top);
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
    function top(){
        const elTop = document.querySelector('.topbtn');
        window.addEventListener('scroll',function(){
            if(window.innerHeight < window.scrollY){
                elTop.classList.add('active');
            }else{
                elTop.classList.remove('active');
            }
        })
        $('.topbtn a').click(function(){
            $('html,body').animate({
                scrollTop : 0
            },400);
            return false;
        })
    }

    const cur = document.querySelector('.cursor');
        window.addEventListener('mousemove',function(e){
            const x = e.pageX;
            const y = e.pageY;
            // console.log(x,y);
            cur.style =
            `
            left:${x}px;
            top:${y}px;
            display:inline-block;
            transform:translate(-10%,-10%);
            `;
        })


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



    fetch('data/data_fav.json')
    .then(  res => res.json()    )
    .then(  data => callback(data)   );

    function callback(data){

        const elMgz = document.querySelector('.mgz')
        let tagList='';
        data.work.forEach(function(v,k){
            tagList += `
            <article>
            <h1></h1>
            <figure>
            <a title="찜하기"><img src="${v.thum}"><span class="fav"></span></a>
            </figure>
            <a href="${v.link}" target="_blank" title="보러가기"><p><b>${v.title} ></b></p></a>
            </article>
            `;
        })
        elMgz.innerHTML = tagList;



        const mpIcon = document.querySelector('.my');
        mpIcon.addEventListener('cilick',function(e){
            localStorage.pageName = this.textContent;
            console.log(localStorage.pageName);
        })



        const elFav = document.querySelectorAll('.fav');
        let fav = [];
        
        elFav.forEach(function(a,i){
            a.addEventListener('click',function(){
                fav.push(i);
                localStorage.liked = fav;
            })
        })


        


    }
}
window.onload = init;
