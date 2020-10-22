$(document).ready(function () {
  // Кнопка вызова мобильного меню =========
  $(".button-collapse").click(function () {
    $(".header-nav__list, .header-nav__contact").slideToggle(300);
    $(this).toggleClass("nav-button-active");
  });
  // Модальное окно ========================
  $(".toggle-modal").click(function () {
    $(".modal").show(300);
  });
  $(".modal").click(function () {
    $(this).hide(300);
  });
  // Маска для телефона ====================
  $(function () {
    $("#telmask").mask("+38(999) 999-99-99");
  });
  // Карусель =========================
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  // Полоса прокрутки Perfect Scrollbar циклом ===============
  $(".box-scrollbar").each(function () {
    const ps = new PerfectScrollbar($(this)[0]);
  });

  // Адаптивность картинок под IE 10+ =============================
  function ibg(){
    $.each($('.ibg'), function(index, val) {
      if($(this).find('img').length>0){
        $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
      }
    });
  };
  ibg();

});