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
});