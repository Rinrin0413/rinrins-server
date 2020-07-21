var $discord_join_button = $("#discord-join-button");
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
