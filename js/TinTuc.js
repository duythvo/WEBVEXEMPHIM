
function hidedienanh(){
    var a = document.getElementById("dienanh");
    var b = document.getElementById("tuyendung");
    a.style.display='none';
    b.style.display='block';
}
function hidetuyendung(){
    var a = document.getElementById("dienanh");
    var b = document.getElementById("tuyendung");    
    a.style.display='block';
    b.style.display='none';
}
window.addEventListener('scroll',function(){
    var header = document.getElementById('header');
    var headerhide = document.getElementById('headerhide');
    if(this.window.scrollY > 0){
        header.classList.remove('active');
        header.classList.add('hidden');
        headerhide.classList.add('active');
        headerhide.classList.remove('hidden');

    }else{
        if(this.window.scrollY == 0){
            header.classList.remove('hidden');
            header.classList.add('active');
            headerhide.classList.remove('active');
            headerhide.classList.add('hidden');
        }
    }
})
