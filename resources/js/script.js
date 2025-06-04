//Arquivo JavaScript
// Quando o documento html tiver carregado 
// ou seja, pronto para uso...
$(document).ready(function(){
    /* Quando o elemento com a classe 
     js--mobile-nav-icon for clicado,
     vai executar uma função*/
     $('.js--mobile-nav-icon').click(
        function(){
            var nav = $('.js--list-nav');
            nav.slideToggle(200);
        }
     );
});