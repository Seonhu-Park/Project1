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


    fetch('data/data_exh.json')
    .then( res => res.json() )
    .then( data => callback(data) );

    const elCon1 = document.querySelector('.list1');
    const elCon2 = document.querySelector('.list2');
    let tagList='', tagList2='';

    function callback(data){
        data.work.forEach(function(v,k){
            tagList += `
            <li>
            <a href="${v.link}" target="_blank" title="홈페이지 바로가기">
            <figure>
            <img src="${v.thum}">
            <figcaption></figcaption>
            </figure>
            <h2>${v.tit}</h2>
            <p>${v.date}</p>
            <p>${v.where}</p>
            </a>
            </li>
            `;
    
        });
        elCon1.innerHTML = tagList;

        data.work2.forEach(function(e,w){
            tagList2 += `
            <li>
            <a href="${e.link}" target="_blank" title="홈페이지 바로가기">
            <figure>
            <img src="${e.thum}">
            <figcaption></figcaption>
            </figure>
            <h2>${e.tit}</h2>
            <p>${e.date}</p>
            <p>${e.where}</p>
            </a>
            </li>
            `;
        });
        elCon2.innerHTML = tagList2;
    }

}
window.onload = init;