
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


    fetch('data/data_gallery.json')
    .then(  res => res.json()    )
    .then(  data => callback(data)   );

    const elUl1 = document.querySelector('.ul-1');
    const elUl2 = document.querySelector('.ul-2');
    const con_hd = document.querySelector('.con_hd');
    const con_thm = document.querySelector('.con_thm');
    const bd_hd = document.querySelector('.bd_hd');
    const elGal = document.querySelector('.gal_in');
    let tagList='', tagList2='', con='';

    function callback(data){
        data.work.forEach(function(v,k){
            tagList += `<li>
            <figure>
            <img src="${v.thum}">
            <span class="img_hv"></span>
            <div class="img_hv_ic">
            <span></span>
            <span></span>
            </div>
            </figure>
            <div class="figcaption">
            <p class="galtt">
            <strong>${v.tit}</strong>
            </p>
            <p class="galtxt">${v.detail}</p>
            </div>
            </a>
            </li>`;

            elUl1.innerHTML = tagList;

            const elLi1 = document.querySelectorAll('.ul-1 li');
            
            for(let i=0; i<elLi1.length; i++){
                elLi1[i].addEventListener('click',function(){
    
                    con = `
                    <article>
                    <h2>"${data.work[i].tit}"</h2>
                    <p class="in_date">${data.work[i].date}</p>
                    <div class="gl_fav">
                    <a href="#" title="좋아요"><span></span></a>
                    <a href="#" title="공유하기"><span></span></a>
                    </div>
                    <figure><img src="${data.work[i].thum}"></figure>
                    <p class="in_con">
                    ${data.work[i].con}
                    </p>
                    <div class="back">
                    <a href="gallery.html"><p>목록 보기</p></a>
                    </div>
                    </article>
                    `;

                    elGal.innerHTML = con;
    
    
                    elGal.classList.add('active');
                    con_hd.classList.add('active');
                    con_thm.classList.add('active');
                    bd_hd.classList.add('active');
                })
            }
        })


        data.work2.forEach(function(e,w){
            tagList2 += `<li>
            <figure>
            <img src="${e.thum}">
            <span class="img_hv"></span>
            <div class="img_hv_ic">
            <span></span>
            <span></span>
            </div>
            </figure>
            <div class="figcaption">
            <p class="galtt">
            <strong>${e.tit}</strong>
            </p>
            <p class="galtxt">${e.detail}</p>
            </div>
            </a>
            </li>`;

            elUl2.innerHTML = tagList2;

            const elLi2 = document.querySelectorAll('.ul-2 li');
            
            for(let i=0; i<elLi2.length; i++){
                elLi2[i].addEventListener('click',function(){
    
                    con = `
                    <article>
                    <h2>"${data.work2[i].tit}"</h2>
                    <p class="in_date">${data.work2[i].date}</p>
                    <div class="gl_fav">
                    <a href="#" title="좋아요"><span></span></a>
                    <a href="#" title="공유하기"><span></span></a>
                    </div>
                    <figure><img src="${data.work2[i].thum}"></figure>
                    <p class="in_con">
                    ${data.work2[i].con}
                    </p>
                    <div class="back">
                    <a href="gallery.html"><p>목록 보기</p></a>
                    </div>
                    </article>
                    `;

                    elGal.innerHTML = con;
    
    
                    elGal.classList.add('active');
                    con_hd.classList.add('active');
                    con_thm.classList.add('active');
                    bd_hd.classList.add('active');
                })
            }
        })
    }

}
window.onload = init;