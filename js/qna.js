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
    }
    function qna(){
        $('.faq ul li').on('click',function(){
            if( $(this).hasClass('active') ){
                $(this).removeClass('active').find('div').stop().slideUp();
                $(this).find('p').stop().fadeIn(1000);
                return;
            }
            $(this).addClass('active').find('div').stop().slideDown();
            $(this).find('p').stop().fadeOut(50);
        })
    }


    fetch('data/data_qna.json')
    .then( res => res.json() )
    .then( data => callback(data) );

    const elUl = document.querySelector('.faq ul');
    let tagList = '';

    function callback(data){
        data.work.forEach(function(v,k){
            tagList += `
            <li>
            <h3>${v.q}</h3>
            <p class="active">></p>
            <div>${v.a}</div>
            </li>
            `;
            elUl.innerHTML = tagList;
        })
        qna();
    }


}
window.onload = init;