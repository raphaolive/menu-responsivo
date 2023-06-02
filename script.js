$(".mobile-menu-icon").on("click", () => {
  $(".mobile-menu").toggleClass("open");
  let src = $(".mobile-menu").hasClass("open")
    ? "./assets/img/close_white_36dp.svg"
    : "./assets/img/menu_white_36dp.svg";

  $(".icon").attr("src", src);
});
