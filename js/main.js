// loader
$(window).on("load", function () {
  setTimeout(function () {
    $(".loader").fadeOut("slow", function () {
      $(".loader").remove();
    });
  }, 0);
});

// toggle sidebar
let bars = document.querySelector(".bars");
let sideBar = document.querySelector(".links");

if (bars) {
  bars.addEventListener("click", function () {
    this.classList.toggle("bar-tog");
    sideBar.classList.toggle("slideto");
  });
}

//  add active class to cuurent link
$(".links li a").each(function () {
  console.log(window.location.href);
  if (window.location.href.includes($(this).attr("href"))) {
    $(this).addClass("active");
  }
});

// toggle drop-down
let myBtndrop = document.querySelector(".flex-profile-d");
let drop = document.querySelector(".my-drop-now");

if(drop){

  myBtndrop.addEventListener("click", function (e) {
    drop.classList.toggle("show-drop");
    e.stopPropagation();
  });
  document.body.addEventListener("click", function () {
    drop.classList.remove("show-drop");
  });
  drop.addEventListener("click", function (e) {
    e.stopPropagation();
  });

}


// add bg color to header
let header = document.querySelector(".header");

if(header){
  window.onscroll = function () {
    if (window.pageYOffset > 30) {
      header.classList.add("bg-header");
    } else {
      header.classList.remove("bg-header");
    }
  };

}

