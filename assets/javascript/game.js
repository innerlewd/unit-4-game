var crystal1 = Math.floor(Math.random() * (12) + 1);
var crystal2 = Math.floor(Math.random() * (12) + 1);
var crystal3 = Math.floor(Math.random() * (12) + 1);
var crystal4 = Math.floor(Math.random() * (12) + 1);
var counter = 0;
var wins = 0;
var losses = 0;
var targetScore = Math.floor(19 + Math.random() * 102);
$("#wins").append(wins);
$("#losses").append(losses);
function reset() {
    crystal1 = Math.floor(Math.random() * (12) + 1);
    crystal2 = Math.floor(Math.random() * (12) + 1);
    crystal3 = Math.floor(Math.random() * (12) + 1);
    crystal4 = Math.floor(Math.random() * (12) + 1);
    counter = 0;
    targetScore = Math.floor(19 + Math.random() * 102);
    $("#numberToGuess").html("<h3><b>" + targetScore + "</b></h3>");
    $("#currentScore").html("<h3><b>" + counter + "</b></h3>");
}

$("#currentScore").html("<h3><b>" + counter + "</b></h3>");

$("#numberToGuess").html("<h3><b>" + targetScore + "</b></h3>");

$("#crystal1Button").on("click", function() {
    counter+=crystal1;
    $("#currentScore").html("<h3><b>" + counter + "</b></h3>");
    if (counter === targetScore) {
        wins++;
        $("#wins").html("<b>Wins: " + wins + "</b>");
        reset();
    }
    else if (counter >= targetScore) {
        losses++;
        $("#losses").html("<b>Losses: " + losses + "</b>");
        reset();
    }
});

$("#crystal2Button").on("click", function() {
    counter+=crystal2;
    $("#currentScore").html("<h3><b>" + counter + "</b></h3>");
    if (counter === targetScore) {
        wins++;
        $("#wins").html("<b>Wins: " + wins + "</b>");
        reset();
    }
    else if (counter >= targetScore) {
        losses++;
        $("#losses").html("<b>Losses: " + losses + "</b>");
        reset();
    }
});

$("#crystal3Button").on("click", function() {
    counter+=crystal3;
    $("#currentScore").html("<h3><b>" + counter + "</b></h3>");
    if (counter === targetScore) {
        wins++;
        $("#wins").html("<b>Wins: " + wins + "</b>");
        reset();
    }
    else if (counter >= targetScore) {
        losses++;
        $("#losses").html("<b>Losses: " + losses + "</b>");
        reset();
    }
});

$("#crystal4Button").on("click", function() {
    counter+=crystal4;
    $("#currentScore").html("<h3><b>" + counter + "</b></h3>");
    if (counter === targetScore) {
        wins++;
        $("#wins").html("<b>Wins: " + wins + "</b>");
        reset();
    }
    else if (counter >= targetScore) {
        losses++;
        $("#losses").html("<b>Losses: " + losses + "</b>");
        reset();
    }
});


