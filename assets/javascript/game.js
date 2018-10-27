$(document).ready(function(){

    let wins = 0;
    let losses = 0;
    let target = 0;
    let score = 0;
    let btn1;
    let btn2;
    let btn3;
    let btn4;

    function assignValues() {
    var random = Math.floor(Math.random() * (12-1) + 1);
        btn1 = random;

    var random = Math.floor(Math.random() * (12-1) + 1);
        btn2 = random;

    var random = Math.floor(Math.random() * (12-1) + 1);
        btn3 = random;

    var random = Math.floor(Math.random() * (12-1) + 1);
        btn4 = random;
    }

    assignValues();

    target = Math.floor(Math.random() * (120-19) + 19);
    $(".targetValue").html("<div>" + target + "</div>");

    function scoreAdd(gem) {
        score += gem;
        scoreCheck();
        $(".userScore").html(score);
    };

    $("#btn1").click(function(){
        scoreAdd(btn1);
    });

    $("#btn2").click(function(){
        scoreAdd(btn2);
    });

    $("#btn3").click(function(){
        scoreAdd(btn3);
    });

    $("#btn4").click(function(){
        scoreAdd(btn4);
    });


    function scoreCheck() {
    if (target === score) {
        alert('You win!');
        wins++;
        $(".win").html(wins);
        reset();
    } else if (score > target) {
        alert("You lose!");
        losses++;
        $(".lose").html(losses);
        reset();
    }
}

    function reset() {
        score = 0;
        assignValues();
        target = Math.floor(Math.random() * (120-19) + 19);
        $(".targetValue").html("<div>" + target + "</div>");
    }

});