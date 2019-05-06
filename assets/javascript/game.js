$(document).ready(function () {//I need jQuery to run!

    var targetScore, current, redNumber, purpleNumber, blueNumber, greenNumber;

    var wins = 0
    var losses = 0

    var resetGame = function () {
        current = 0;
        targetScore = Math.floor((Math.random() * 120) + 19);
        $("#targetScore").html(targetScore);
        $("#currentScore").html(current);
        redNumber = Math.floor((Math.random() * 12) + 1);
        purpleNumber = Math.floor((Math.random() * 12) + 1);
        blueNumber = Math.floor((Math.random() * 12) + 1);
        greenNumber = Math.floor((Math.random() * 12) + 1);
        $("#button-red").attr('value', redNumber);
        $("#button-blue").attr('value', blueNumber);
        $("#button-purple").attr('value', purpleNumber);
        $("#button-green").attr('value', greenNumber);
        $("#targetScore").attr('value', targetScore);
    }

    resetGame();


    $('.crystal').click(function () {
        current += parseInt($(this).attr('value'));
        console.log(current);
        $("#currentScore").html(current);
        if (current == targetScore) {
            // Increments wins by 1
            wins++;
            current = 0;
            resetGame();
            // Adds an additional value to wins on HTML
            $("#wins").html("Wins: " + wins);
            console.log('win: ', wins);
            alert("A winner is you!");
            $("#currentScore").html("0");
        } else if (current > targetScore) {
            // Increments losses by 1
            losses++;
            current = 0;
            resetGame();
            // Adds an additional value to losses on HTML
            $("#losses").html("Losses: " + losses);
            console.log('loss: ', losses);
            alert("You lose. Good day!");
            $("#currentScore").html("0");
        }

    });

    var targetScore = Math.floor(Math.random() * 120) + 19;
    console.log(targetScore);
    $("#targetScore").html(targetScore);

});