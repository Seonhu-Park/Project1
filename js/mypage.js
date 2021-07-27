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

}
window.onload = init;