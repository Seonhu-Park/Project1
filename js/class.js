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
            <a>
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

            <form class="form">
            <div><b>주 최</b>&nbsp;&nbsp;&nbsp;&nbsp;행복이가득한집</div>
            <div><b>인 원</b>&nbsp;&nbsp;&nbsp;&nbsp;8명</div>
            <div><b>장 소</b>&nbsp;&nbsp;&nbsp;&nbsp;디자인하우스 </div>
            <div><b>비 용</b>&nbsp;&nbsp;&nbsp;&nbsp;110,000원 (재료비 포함)</div>
            
            <div><b>이 름</b>&nbsp;&nbsp;&nbsp;&nbsp;<input type="name" placeholder="이름" required></div>
            <div><b>전 화</b>&nbsp;&nbsp;&nbsp;&nbsp;<input type="tel" placeholder="전화번호" required></div>
            <div><b>메 일</b>&nbsp;&nbsp;&nbsp;&nbsp;<input type="email" placeholder="이메일"></div>
            <div class="label">수강취소는 강의일시로부터 일주일 전까지만 가능합니다. ( 동의<input type="checkbox" id="chk"> )</div>
            <div><input type="submit" value="등록" id="submit"></div>
            </form>
            `;
        })
        
        elCon.innerHTML = tagList;
        
        const elBtn = document.querySelectorAll('.cl_in');
        const elForm = document.querySelectorAll('.form');
        const elThum = document.querySelectorAll('.con-2 > a');

        for(let i=0; i<elBtn.length; i++){
            elBtn[i].addEventListener('click',function(){
                elForm[i].classList.add('active');
            })
        }

        for(let i=0; i<elThum.length; i++){
            elThum[i].addEventListener('click',function(){
                elForm[i].classList.add('active');
            })
        }
        

    }
}
window.onload = init;