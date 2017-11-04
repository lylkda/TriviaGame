$(document).ready(function() {

	var questions = [
	{question: "1. How many petals are on Bing Bong's flower that is on his shirt?",
	response: ["4", "6", "8", "5"],
	answer: "6"},

	{question: "2. What did Jasmine steal from the Market Place?",
	response: ["Watermelon", "Bread", "Apple", "Beads"],
	answer: "Apple"},

	{question: "3. What was Aladdin's second wish?",
	response: ["To become a prince", "To get out of the cave", "To set Genie free", "To be saved from drowning"],
	answer: "To be saved from drowning"},

	{question: "4. What is the name of the leader of the 7 Dwarves?",
	response: ["Happy", "Grumpy", "Dopey", "Doc"],
	answer: "Doc"},

	{question: "5. Who was the first Disney Princess?",
	response: ["Belle", "Ariel", "Snow White", "Cinderella"],
	answer: "Snow White"},

	{question: "6. What is Moana's pig's name?",
	response: ["Pui", "Padma", "Pakpoa", "Pua"],
	answer: "Pua"},

	{question: "7. How many mermaids are in Peter Pan?",
	response: ["6", "7", "5", "4"],
	answer: "6"},

	{question: "8. How old is Cinderellea?",
	response: ["17", "19", "18", "16"],
	answer: "19"}]

	var intervalId;

	var trivia = {
		correct: 0,
		incorrect: 0,
		unanswered: 0,
		count: 60,
	}

	//Displays the results after checking each question
	function display(){
		for (let j=0; j<questions.length; j++){
			check(j);
		}
		//After checking, blank div that displays results
		$("#main").html("<h1>All done!</h1><p><h2>Correct Answers: " + trivia.correct + "</p>" +
			"<p>Incorrect Answers: " + trivia.incorrect + "<p>Unanswered questions: " + trivia.unanswered + "</h2></p>");

	} //End display

	//Check Questions' Answers
	function check(number){
		console.log($("input[name=q-" + number + "]:checked"));
		var val = $("input[name=q-" + number + "]:checked").val();
		console.log(val)
		if(val === questions[number].answer){
			trivia.correct++;
		}
		else if (!val){
			trivia.unanswered++;
		}
		else {
			trivia.incorrect++;
		}
	} //End check()

	//Count
	function count(){
		intervalId = setInterval(countdown, 1000);
	}
	//Countdown
	function countdown(){
		trivia.count--;
		$("#timer").html(trivia.count + "s");
		if (trivia.count === 0){
			display();
		}
	} 




	//After clicking the Start Button, show timer and questions
	$("#Start").on("click", function(){
		$("#main").html("<h1>Time Remaining: <span id='timer'>" + trivia.count + "s</span></h1>");
		count();

		for (var i=0; i<questions.length; i++){
			var obj = questions[i];
			$("#main").append("<div><h3>" + obj.question  + "</h3></div>");
			for (var j=0; j<obj.response.length; j++){
				$("#main").append("<input class='form-check-inline' type='radio' name='q-" + i + "' value='"+ obj.response[j] + "'>" + obj.response[j] + "</input>");
			}
		}

		$("#main").append("<div class='holder'><button id='submit' class='btn btn-warning'>Submit</button><div>");


		//After Clicking the button, for all the questions, we will check
		$("#submit").on("click", display);

	});	 

});