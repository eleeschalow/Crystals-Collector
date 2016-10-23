$(document).ready(function() {

	// =============================
	// Set up global variables first
	// =============================

	// initialize global variables
	var gemOneValue, gemTwoValue, gemThreeValue, gemFourValue;
	var wins = 0;
	var losses = 0;
	var randomComputerNumber;
	var userTallyScore;

	// ================
	// Set up functions
	// ================

	// function that initializes the variables for each now round of the game
	function initializeVariables() {
		randomComputerNumber = 19 + Math.floor(Math.random() * 102);
		gemOneValue = 1 + Math.floor(Math.random() * 12);
		gemTwoValue = 1 + Math.floor(Math.random() * 12);
		gemThreeValue = 1 + Math.floor(Math.random() * 12);
		gemFourValue = 1 + Math.floor(Math.random() * 12);
		userTallyScore = 0;
		// update the html for the game board
		$("#winsTally").html("Wins: " + wins);
		$("#lossesTally").html("Losses: " + losses);
		$("#randomNumber").html(randomComputerNumber);
		$("#userScore").html(userTallyScore);
		consoleLogVariables();
	}

	// function to check if user has won or lost
	// increment wins / losses in either case
	// and then re-initialize variables for new round
	// if user hasn't won or lost then nothing happens
	function hasUserWonOrLost() {
		// check if user has lost
		if (userTallyScore > randomComputerNumber) {
			losses++;
			console.log("user lost");
			initializeVariables();
		}

		// check if user has won
		if (userTallyScore == randomComputerNumber) {
			wins++;
			console.log("user won");
			initializeVariables();
		}
	}

	// debugging functionality function
	function consoleLogVariables() {
		console.log("wins: " + wins + " losses: " + losses);
		console.log("gemOneValue: ", gemOneValue + " gemTwoValue: " + gemTwoValue + " gemThreeValue: " + gemThreeValue + " gemFourValue: " + gemFourValue);
		console.log("randomComputerNumber: " + randomComputerNumber + " userTallyScore: " + userTallyScore);
		console.log("----------------------------------");

	}

	// =====================================
	// Now comes the main game functionality
	// =====================================

	initializeVariables();

	$(".gem").on("click", function() {
		var pressed = $(this).attr("value");
        console.log(pressed);
        if (pressed == "gem1") {
        	userTallyScore += gemOneValue;
        } else if (pressed == "gem2") {
        	userTallyScore += gemTwoValue;
        } else if (pressed == "gem3") {
        	userTallyScore += gemThreeValue;
        } else if (pressed == "gem4") {
        	userTallyScore += gemFourValue;
        } else {
        	console.log("error");
        }
        $("#userScore").html(userTallyScore);
        consoleLogVariables();
        hasUserWonOrLost();

	});

});