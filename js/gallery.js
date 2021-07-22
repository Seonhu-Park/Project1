
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

    let tagList='', tagList2='';

    function callback(data){
        data.work.forEach(function(v,k){
            tagList += `<li>
            <a href="${v.link}">
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
        })

        data.work2.forEach(function(e,w){
            tagList2 += `<li>
            <a href="${e.link}">
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
        })
    }

}
window.onload = init;