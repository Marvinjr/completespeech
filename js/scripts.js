// funcion para agregar color al menu al dar click en el boton menu
$('#main-menu-button').on('click', function (e){
    $('.sideMenu').addClass('open');
    e.preventDefault();
})

$('#closeMenu').on('click', function (e){
    $('.sideMenu').removeClass('open');
    e.preventDefault();
})

$('#languaje-link').on('click', function (e){
    $('.languaje-section').toggleClass('langOpen');
    e.preventDefault();
})

// funcion para shopping cart

$(document).ready(function(){

    $('.radio-group .radio').click(function(){
    $('.radio').addClass('gray');
    $(this).removeClass('gray');
    });
    
    $('.plus-minus .plus').click(function(){
    var count = $(this).parent().prev().text();
    $(this).parent().prev().html(Number(count) + 1);
    });
    
    $('.plus-minus .minus').click(function(){
    var count = $(this).parent().prev().text();
    $(this).parent().prev().html(Number(count) - 1);
    });
    
    });