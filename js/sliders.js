$(function () {
  $(".services-slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    breakpoint: 768,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".filter li").on("click", function () {
    var filter = $(this).data("filter");
    $(".services-slider").slick("slickUnfilter");

    if (filter == "design") {
      $(".services-slider").slick("slickFilter", ".design");
    } else if (filter == "landing") {
      $(".services-slider").slick("slickFilter", ".landing");
    } else if (filter == "seo") {
      $(".services-slider").slick("slickFilter", ".seo");
    } else if (filter == "All") {
      $(".services-slider").slick("slickUnfilter");
    }
  });

  $(".works").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    breakpoint: 768,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(" .reviews-slider ").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    breakpoint: 768,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
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
