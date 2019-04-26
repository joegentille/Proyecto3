$(function(){
    /* var boton = $('#btn-menu'); */
    var boton = $('.menu_izq');
    var enlaces = $('.barra-lateral');
    /* var fondo_enlace = $('#') */
    boton.on('click', function(){
        if(enlaces.css('display','block')){
            /* enlaces.css('display','none'); */
            /* enlaces.css('min-width','auto'); */
            /* $('.barra-lateral .logo').css('display','none'); */
            /* $('.barra-lateral').css('min-width','auto'); */
            $('.barra-lateral').css('min-width','80px'); 
            /* $('.barra-lateral').css('padding','0 5px'); */
            $('.barra-lateral .menu a span').css('display', 'none');
            $('.barra-lateral .logo h2').text("JOE");
            /* $('.barra-lateral .menu a i').css('margin','0px'); */
            $('.barra-lateral .menu a').css('transition','none');
            $('.barra-lateral .menu a').css('padding','10px');
            $('.barra-lateral .menu a i').css('padding','0 0 0 18px');
        }else{
            /* $('.barra-lateral').css('min-width','80px');  */
            $('.barra-lateral .menu a span').css('display', 'block');
            $('.barra-lateral .logo h2').text("Mi DashBoard");
            /* $('.barra-lateral .menu a i').css('margin','0px'); */
            /* $('.barra-lateral .menu a').css('transition','none'); */
            /* $('.barra-lateral .menu a').css('padding','10px'); */
            /* $('.barra-lateral .menu a i').css('padding','0 0 0 18px'); */
        }
        /* alert("Hola"); */
    });
}())