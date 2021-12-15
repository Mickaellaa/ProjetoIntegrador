<<<<<<< HEAD
 //Inicio Menu//
 $('.btn').click(function(){
=======
$('.btn').click(function(){
>>>>>>> cd4013a425dd1ee246ba305b231ae2746ba57033
    $(this).toggleClass("click");
    $('.sidebar').toggleClass("show");
   });
   $('.livros-btn').click(function(){
    $('nav ul .livros-show').toggleClass("show");
    $('nav ul .first').toggleClass("rotate");
   });
   $('.nov-btn').click(function(){
    $('nav ul .nov-show').toggleClass("show1");
    $('nav ul .second').toggleClass("rotate");
   });
   $('nav ul li').click(function(){
    $(this).addClass("active").siblings().removeClass("active");
<<<<<<< HEAD
});
//Fim Menu//

=======
});
>>>>>>> cd4013a425dd1ee246ba305b231ae2746ba57033
