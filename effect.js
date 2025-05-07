$(window).on("load", function () {
  $(".loading").fadeOut("fast");
  $(".container").fadeIn("fast");
});

$(document).ready(function () {
  let vw;

  // Fungsi Reposisi Balon saat resize
  $(window).resize(function () {
    vw = $(window).width() / 2;
    for (let i = 1; i <= 7; i++) {
      $(`#b${i}`).stop(); // stop semua animasi
    }
    const leftOffsets = [-350, -250, -150, -50, 50, 150, 250];
    leftOffsets.forEach((offset, i) => {
      $(`#b${i + 1}1`).animate({ top: 240, left: vw + offset }, 500);
    });
  });

  // Tombol nyalakan lampu
  $("#turn_on").click(function () {
    $("#bulb_yellow").addClass("bulb-glow-yellow");
    $("#bulb_red").addClass("bulb-glow-red");
    $("#bulb_blue").addClass("bulb-glow-blue");
    $("#bulb_green").addClass("bulb-glow-green");
    $("#bulb_pink").addClass("bulb-glow-pink");
    $("#bulb_orange").addClass("bulb-glow-orange");
    $("body").addClass("peach");

    $(this)
      .fadeOut("slow")
      .delay(5000)
      .promise()
      .done(function () {
        $("#play").fadeIn("slow");
      });
  });

  // Tombol play musik
  $("#play").click(function () {
    $(".song")[0].play();
    $("#bulb_yellow").addClass("bulb-glow-yellow-after");
    $("#bulb_red").addClass("bulb-glow-red-after");
    $("#bulb_blue").addClass("bulb-glow-blue-after");
    $("#bulb_green").addClass("bulb-glow-green-after");
    $("#bulb_pink").addClass("bulb-glow-pink-after");
    $("#bulb_orange").addClass("bulb-glow-orange-after");

    $("body").css("background-color", "#FFF").addClass("peach-after");

    $(this)
      .fadeOut("slow")
      .delay(6000)
      .promise()
      .done(function () {
        $("#bannar_coming").fadeIn("slow");
      });
  });

  // Banner masuk
  $("#bannar_coming").click(function () {
    $(".bannar").addClass("bannar-come");
    $(this)
      .fadeOut("slow")
      .delay(6000)
      .promise()
      .done(function () {
        $("#balloons_flying").fadeIn("slow");
      });
  });

  // Fungsi animasi balon secara acak
  function loopBalloon(id) {
    const randleft = 1000 * Math.random();
    const randtop = 500 * Math.random();
    $(`#${id}`).animate(
      { left: randleft, bottom: randtop },
      10000,
      function () {
        loopBalloon(id);
      }
    );
  }

  // Balon terbang
  $("#balloons_flying").click(function () {
    $(".balloon-border").animate({ top: -500 }, 8000);
    $("#b1,#b4,#b5,#b7").addClass("balloons-rotate-behaviour-one");
    $("#b2,#b3,#b6").addClass("balloons-rotate-behaviour-two");

    for (let i = 1; i <= 7; i++) {
      loopBalloon(`b${i}`);
    }

    $(this)
      .fadeOut("slow")
      .delay(5000)
      .promise()
      .done(function () {
        $("#cake_fadein").fadeIn("slow");
      });
  });

  // Tampilkan kue
  $("#cake_fadein").click(function () {
    $(".cake").fadeIn("slow");
    $(this)
      .fadeOut("slow")
      .delay(1000)
      .promise()
      .done(function () {
        $("#light_candle").fadeIn("slow");
      });
  });

  // Nyalakan lilin
  $("#light_candle").click(function () {
    $(".fuego").fadeIn("slow");
    $(this)
      .fadeOut("slow")
      .promise()
      .done(function () {
        $("#wish_message").fadeIn("slow");
      });
  });

  // Tampilkan pesan harapan
  $("#wish_message").click(function () {
    vw = $(window).width() / 2;

    for (let i = 1; i <= 7; i++) {
      $(`#b${i}`).stop().attr("id", `b${i}${i}`);
    }

    const leftOffsets = [-350, -250, -150, -50, 50, 150, 250];
    leftOffsets.forEach((offset, i) => {
      $(`#b${i + 1}${i + 1}`).animate({ top: 240, left: vw + offset }, 500);
    });

    $(".balloons").css("opacity", "0.9");
    $(".balloons h2").fadeIn(3000);

    $(this)
      .fadeOut("slow")
      .delay(3000)
      .promise()
      .done(function () {
        $("#story").fadeIn("slow");
      });
  });

  // Cerita atau pesan terakhir
  $("#story").click(function () {
    $(this).fadeOut("slow");
    $(".cake")
      .fadeOut("fast")
      .promise()
      .done(function () {
        $(".message").fadeIn("slow");
      });

    // Tampilkan paragraf satu per satu
    function msgLoop(i) {
      $(`p:nth-child(${i})`)
        .fadeOut("slow")
        .delay(800)
        .promise()
        .done(function () {
          const next = i + 1;
          $(`p:nth-child(${next})`).fadeIn("slow").delay(1000);
          if (next === 50) {
            $(`p:nth-child(49)`)
              .fadeOut("slow")
              .promise()
              .done(function () {
                $(".cake").fadeIn("fast");
              });
          } else {
            msgLoop(next);
          }
        });
    }

    msgLoop(0);
  });
});
