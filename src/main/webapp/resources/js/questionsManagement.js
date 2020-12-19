var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;

var listquestions= [];


fetch("http://localhost:4300/questions/random")
    .then(response => response.json())
    .then(json => {
        json.forEach(user=> {
            listquestions.push([user.question,user.answer1,user.answer2,user.answer3,user.goodAnswer]);
        });

        renderQuestion(listquestions);
    });




function _(x){
    return document.getElementById(x);
}
function renderQuestion(questions) {
    test = _("test");
    if (pos >= questions.length) {
        test.innerHTML = "<h2>Tu as " + correct + " questions correctes sur les  " + questions.length + " </h2>";
        _("test_status").innerHTML = "FIN DE QUIZZ";
        pos = 0;
        correct = 0;
        return false;
    }
    _("test_status").innerHTML = "Question " + (pos + 1) + " sur " + questions.length;
    question = questions[pos][0];
    chA = questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];
    test.innerHTML = "<h3>" + question + "</h3>";
    test.innerHTML += "<input type='radio' name='choices' value='A'> " + chA + "<br>";
    test.innerHTML += "<input type='radio' name='choices' value='B'> " + chB + "<br>";
    test.innerHTML += "<input type='radio' name='choices' value='C'> " + chC + "<br><br>";
    test.innerHTML += "<input type='button' id='checkAnswerID' />";
    document.getElementById("checkAnswerID").addEventListener("click", function() {
        checkAnswer(questions);
    }, false);
}
function checkAnswer(questions){
    choices = document.getElementsByName("choices");
    for(var i=0; i<choices.length; i++){
        if(choices[i].checked){
            choice = choices[i].value;
        }
    }
    if(choice == questions[pos][4]){
        correct++;
    }
    pos++;
    renderQuestion(questions);
}
//window.addEventListener("load", renderQuestion, false);