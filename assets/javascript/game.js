<<<<<<< HEAD
$(document).ready(function(){//I need jQuery to run!

    var targetScore, current, redNumber, purpleNumber, blueNumber, greenNumber;

    var wins = 0
    var losses = 0

    var resetGame = function(){
        goal = Math.floor(Math.random() * 101 + 19);
        current = 0;
        redNumber = Math.floor(Math.random()*12);
	    purpleNumber = Math.floor(Math.random()*12);
	    blueNumber = Math.floor(Math.random()*12);
	    greenNumber = Math.floor(Math.random()*12);
    }

    resetGame();

	$("#button-red").attr('value', redNumber);
    $("#button-blue").attr('value', blueNumber);
    $("#button-purple").attr('value', purpleNumber);
    $("#button-green").attr('value', greenNumber);

	$('.crystal').click(function(){
        current += parseInt($(this).attr('value'));
        console.log(current);
        if (current == targetScore) {
            // Increments wins by 1
            wins++;
            current = 0;
            // Adds an additional value to wins on HTML
            $("#wins").html("Wins: " + wins);
            console.log('win: ', wins)
        } else if (current > targetScore) {
            // Increments losses by 1
            losses++;
            resetGame();
            // Adds an additional value to losses on HTML
            $("#losses").html("Losses: " + losses);
        }

    });

    var targetScore = Math.floor(Math.random() * 120) + 19;
        console.log(targetScore);
        $("#targetScore").html(targetScore);

=======
$(document).ready(function(){//I need jQuery to run!

    var targetScore, current, redNumber, purpleNumber, blueNumber, greenNumber;

    var wins = 0
    var losses = 0

    var resetGame = function(){
        goal = Math.floor(Math.random() * 101 + 19);
        current = 0;
        redNumber = Math.floor(Math.random()*12);
	    purpleNumber = Math.floor(Math.random()*12);
	    blueNumber = Math.floor(Math.random()*12);
	    greenNumber = Math.floor(Math.random()*12);
    }

    resetGame();

	$("#button-red").attr('value', redNumber);
    $("#button-blue").attr('value', blueNumber);
    $("#button-purple").attr('value', purpleNumber);
    $("#button-green").attr('value', greenNumber);

	$('.crystal').click(function(){
        current += parseInt($(this).attr('value'));
        console.log(current);

    });

    var targetScore = Math.floor(Math.random() * 120) + 19;
        console.log(targetScore);
        $("#targetScore").html(targetScore);

>>>>>>> ec47c1a00f664d19e7933d6e3ab8a5153d2025ca
});