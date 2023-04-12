const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    const blockID = anchor.getAttribute("href");
    document.querySelector("" + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
$(document).ready(function () {
  $(".header-burger").click(function (event) {
    $(".header-nav").toggleClass("active");
  });
});
if ($(window).width() <= 1024) {
  $(".process-item").click(function (event) {
    $(this).closest("li").find(".process-body").toggleClass("open");
  });
} else if ($(window).width() > 1024) {
  $(".process-body").addClass("open");
}

// const filterSlide = document.querySelectorAll(".swiper-slide");
// console.log(filterSlide);
// document.querySelector(".service-filter-list").addEventListener("click", (event) => {
//   if (event.target.tagName !== "LI") return false;
//   let filterClass = event.target.dataset["f"];
//   filterSlide.forEach((elem) => {
//     elem.style.display = "flex";
//     if (!elem.classList.contains(filterClass) && filterClass !== "All") {
//       elem.style.display = "none";
//     }
//   });
// });
