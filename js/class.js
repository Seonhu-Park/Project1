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


    fetch('data/data_class.json')
    .then( res => res.json() )
    .then( data => callback(data) );

    const elCon = document.querySelector('.con-2');
    let tagList='';

    function callback(data){
        
        data.work.forEach(function(v,k){
            tagList += `
            <a href="class-2.html">
            <ul>
                <li><img src="${v.thum}"></li>
                <li>
                    <p class="cl_tt">${v.tit}</p>
                    <p class="cl_sbtt">${v.detail}</p>
                    <p class="cl_info">
                        <b>${v.date}</b>${v.date_info}<br>
                        <b>${v.where}</b>${v.where_info}<br>
                        <b>${v.teacher}</b>${v.teacher_info}
                    </p>
                </li>
                <li class="join">
                ${v.join}
                </li>
                <li class="cl_in">
                ${v.join_us}
                </li>
            </ul>
        </a>
            `;
            elCon.innerHTML = tagList;
        })


    }
}
window.onload = init;