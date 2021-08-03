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
            transform:translate(10%,10%);
            `;
        })

    const login = document.querySelector('.login');
    const xBtn = document.querySelector('.con-1');
    const xBtn2 = document.querySelector('.con-2');
    const xBtn3 = document.querySelector('.bd_hd');
    const hd = document.querySelector('header');

    xBtn.addEventListener('click',function(){
        login.classList.add('active');
    })
    xBtn2.addEventListener('click',function(){
        login.classList.add('active');
    })
    xBtn3.addEventListener('click',function(){
        login.classList.add('active');
    })
    hd.addEventListener('click',function(){
        login.classList.add('active');
    })

    const elOpt = document.querySelector('select');
    const goBtn = document.querySelector('.go');

    goBtn.addEventListener('click',function(){
        if(elOpt.value == '좋아요'){
                alert("'좋아요'한 아이템이 없습니다.");
            }
    })




    fetch('data/data_fav.json')
    .then(  res => res.json()    )
    .then(  data => callback(data)   );

    tagList = '';

    function callback(data){

        let favArr = localStorage.liked.split(',');
        console.log(favArr)
        favArr.forEach(function(v,k){
            data.work.forEach(function(v2,k2){
                if(v == k2){
                    tagList +=`
                    <article>
                    <h1></h1>
                    <figure>
                    <a href="http://mdesign.designhouse.co.kr/" target="_blank" title="보러가기"><img src="${v2.thum}"><span class="fav"></span></a>
                    <figcaption>
                    <a href="http://mdesign.designhouse.co.kr/" target="_blank" title="보러가기"><p>자세히></p></a>
                    </figcaption>
                    </figure>
                    <p>${v2.title}</p>
                    </article>
                    `;
                }
            })
        })
        const favpage = document.querySelector('.favlist')
        favpage.innerHTML = tagList;

    }




}
window.onload = init;