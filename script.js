var $discord_join_button = $("#discord-join-button");
var navigationOpenFlag = false;
var navButtonFlag = true;
var focusFlag = false;

$(function() {
    $("#title").fadeIn(2000);
    $("#subtitle").fadeIn(2700);
    $("#discord-join-button").click(function(){
        $discord_join_button.css("box-shadow", "0px 3px rgb(0, 116, 67)");
        $discord_join_button.text("|=+=< Joined >=+=|");
    });
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
$(function(){
 
    $(document).on('click','.el_humburger',function(){
      if(navButtonFlag){
        spNavInOut.switch();
        //一時的にボタンを押せなくする
        setTimeout(function(){
          navButtonFlag = true;
        },200);
        navButtonFlag = false;
      }
    });
    $(document).on('click touchend', function(event) {
      if (!$(event.target).closest('.bl_header,.el_humburger').length && $('body').hasClass('js_humburgerOpen') && focusFlag) {
        focusFlag = false;
        //scrollBlocker(false);
        spNavInOut.switch();
      }
    });
  });

//ナビ開く処理
function spNavIn(){
$('body').removeClass('js_humburgerClose');
$('body').addClass('js_humburgerOpen');
setTimeout(function(){
  focusFlag = true;
},200);
setTimeout(function(){
  navigationOpenFlag = true;
},200);
}

//ナビ閉じる処理
function spNavOut(){
$('body').removeClass('js_humburgerOpen');
$('body').addClass('js_humburgerClose');
setTimeout(function(){
  $(".uq_spNavi").removeClass("js_appear");
  focusFlag = false;
},200);
navigationOpenFlag = false;
}

//ナビ開閉コントロール
var spNavInOut = {
switch:function(){
  if($('body.spNavFreez').length){
    return false;
  }
  if($('body').hasClass('js_humburgerOpen')){
   spNavOut();
  } else {
   spNavIn();
  }
}
};
/* ▲ ハンバーガー */
