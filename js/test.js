const buttonLogin = document.getElementById('button-login');
const width = window.innerWidth;

buttonLogin.addEventListener('mouseover',()=>{
    var listLogin = document.getElementById('list-login');
    if(width>600){
        listLogin.classList.remove('d-none');
    }

})

buttonLogin.addEventListener('mouseout',()=>{
    var listLogin = document.getElementById('list-login');
        if(width>600){
            listLogin.classList.add('d-none');
        }
})

buttonLogin.addEventListener('click',()=>{
    if(width <=600){
        var listLogin = document.getElementById('list-login');
        if(listLogin.classList.contains('d-none')){
            listLogin.classList.remove('d-none');
        }else {
            listLogin.classList.add('d-none');
        }
    }
})
