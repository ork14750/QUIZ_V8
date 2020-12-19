var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
var questions = [];


    fetch("http://localhost:4300/questions/random")

        // Converting received data to JSON
        .then(response => response.json())
        .then(json => {

            // Create a variable to store HTML
            // Loop through each data and add a table row
            json.forEach(quest => {
                questions.push([quest.question,quest.answer1,quest.answer2,quest.answer3,quest.goodAnswer]);
            });
        });

function _(x){
    return document.getElementById(x);
}
function renderQuestion(){
    test = _("test");
    if(pos >= questions.length){
        test.innerHTML = "<h2>Tu as "+correct+" questions correctes sur les  "+questions.length+" </h2>";
        _("test_status").innerHTML = "FIN DE QUIZZ";
        pos = 0;
        correct = 0;
        return false;
    }
    _("test_status").innerHTML = "Question "+(pos+1)+" sur "+questions.length;
    question = questions[pos][0];
    chA = questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];
    test.innerHTML = "<h3>"+question+"</h3>";
    test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";
    test.innerHTML += "<button onclick='checkAnswer()'>Suivant !</button>";
}
function checkAnswer(){
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
    renderQuestion();
}
window.addEventListener("load", renderQuestion, false);