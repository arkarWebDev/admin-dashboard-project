document.querySelector(".nav-show").addEventListener("click", (_) => {
  document.querySelector(".aside-bar").style.marginLeft = "0%";
});

document.querySelector(".nav-hide").addEventListener("click", (_) => {
  document.querySelector(".aside-bar").style.marginLeft = "-100%";
});

let deviceHeight = $(window).height();
let menuPosition = $(".aside-li .active-li").offset().top;

if (menuPosition > deviceHeight * 0.8) {
  $(".aside-bar").animate(
    {
      scrollTop: menuPosition - 20,
    },
    1000
  );
}
