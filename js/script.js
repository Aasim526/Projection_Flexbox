window.addEventListener('scroll', function(){
    var a = document.querySelector(".nav-area");
    a.classList.toggle("sticky", window.scrollY > 0);
});

$(".toggle-btn").click(function(){
    $("#ul").slideToggle();
});