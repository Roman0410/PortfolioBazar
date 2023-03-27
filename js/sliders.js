$(function () {
  $(".slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
  });

  $(".filter li").on("click", function () {
    var filter = $(this).data("filter");
    $(".slider").slick("slickUnfilter");

    if (filter == "design") {
      $(".slider").slick("slickFilter", ".design");
    } else if (filter == "landing") {
      $(".slider").slick("slickFilter", ".landing");
    } else if (filter == "seo") {
      $(".slider").slick("slickFilter", ".seo");
    } else if (filter == "All") {
      $(".slider").slick("slickUnfilter");
    }
  });
});
let btnContainer = document.getElementById("service-filter");
let btns = btnContainer.getElementsByClassName("filter-btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("current-filter");
    current[0].className = current[0].className.replace(" current-filter", "");
    this.className += " current-filter";
  });
}
// if ($(".services-swiper").length) {
//   const swiper = new Swiper(".services-swiper", {
//     loop: true,
//     slidesPerView: 2,
//     // autoplay: { enabled: true, delay: 3000 },
//     spaceBetween: 16,
//     navigation: {
//       nextEl: $(".services-swiper").find(".button-next")[0],
//       prevEl: $(".services-swiper").find(".button-prev")[0],
//     },
//     breakpoints: {},
//   });
// }
