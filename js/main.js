$(function () {

//header modal
$(function () {
  $("#modal_nav").click(function () {
    $(".modal").addClass("modal_active");
  });

  $(".modal__close-button").click(function () {
    $(".modal").removeClass("modal_active");
  });

  $("#submit1").click(function () {
    $(".modal").removeClass("modal_active");
  });
});

$(function () {
  $("#modal_nav_mob").click(function () {
    $(".modal").addClass("modal_active");
  });

  $(".modal__close-button").click(function () {
    $(".modal").removeClass("modal_active");
  });

  $("#submit1").click(function () {
    $(".modal").removeClass("modal_active");
  });
});

$(function () {
  $("#submit1").click(function () {
    $(".modal2").addClass("modal_active");
  });

  $(".modal__close-button").click(function () {
    $(".modal2").removeClass("modal_active");
  });
});
 

// footer modal
$(function () {
  $("#submit1f").click(function () {
    $(".modal2").addClass("modal_active");
  });

  $(".modal__close-button").click(function () {
    $(".modal2").removeClass("modal_active");
  });
});
 });