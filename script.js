$(function() {
    $("#title").fadeIn(2000);
    $("#subtitle").fadeIn(2700);
    $("#discord-join-button").click(function(){
        $("#discord-join-button").css("box-shadow", "0px 3px rgb(0, 116, 67)");
        $("#discord-join-button").text("Joined");
        $("#discord-join-button").css("left", "1420px");
    });
});
