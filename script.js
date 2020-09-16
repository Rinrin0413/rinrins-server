var $discord_join_button = $("#discord-join-button");
var navigationOpenFlag = false;
var navButtonFlag = true;
var focusFlag = false;
/** {min}以上{max}未満の乱数を返す関数 */
function randomValue(min, max) {
  return Math.random() * (max - min) + min;
}

/*jQuery*/
$(function() {
  $("#title-img").fadeIn(1000 * 3);
  $("#title-img").css('transform', 'translateY(0%)');
  $("#title").fadeIn(4700);
  $("#subtitle").fadeIn(2500);
  $("#discord-join-button").click(function(){
    $discord_join_button.css("box-shadow", "0px 3px rgb(0, 116, 67)");
    $discord_join_button.text("|=+=< Joined >=+=|");
  });
  $(".news-contents").hover(
    function() {
      $(this).css('transform', 'rotate(' + randomValue(-7, 7) + 'deg)');
    },
    function() {
      $(this).css('transform', 'rotate(0deg)');
    }
);
});

$(function() {
    $("#top_move").on('click touchstart', function () {
        $('html,body').animate({
             scrollTop: 0 
            }, 'swing');
        return false;
    });
});


/******その他******/
/* ▼ ハンバーガー*/
$(function() {
  $('.nav-toggle').click(function(){
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $('.header-menu').addClass('active');
    } 
    else {
      $('.header-menu').removeClass('active');
    }
  });
});
/* ▲ ハンバーガー */
