var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
var questions = [
    ["Quel est l'ordre le plus élévé chez les ange ?", "Séraphins", "Chérubins", "Gabriel", "A"],
    ["Quel était le nom de l'apôtre qui a accompagné Jésus et qui a ensuite nié le connaître ?", "Pierre", "Paul", "Jacques", "A"],
    ["Où Jésus prêchait-il lorsqu'il était enfant ?", "Chez lui à la maison", "Dans le temple de Jérusalem", "Chez 2 3 poto par-ci, par-là", "B"],
    ["Quel est le 5e commandement de la loi de Dieu ?", "Tu n'auras qu'un seul Dieu", "Le plus important c'est la santé", "Honore ton père et ta mère", "C"],
    ["Quel personnage biblique a été avalé par un grand poisson ?", "Moïse", "Jonas" , "Habakuk", "B"],
    ["Comment s'appelait l'homme le plus fort dans la Bible ?", "Maxime", "Patrick la terreur", "Samson", "C"],
    ["Qui a été jeté dans la fosse aux lions ?", "Daniel", "Lebron", "James", "A"],
    ["Quel est le chapitre le plus court de la Bible ?", "Marc 16", "Il y en a 2", "Le psaume 117", "C"],
    ["Comment s'appelle l'homme que Dieu a utilisé pour écarter la mer Rouge ?", "Moïse", "Daniel", "Pharaon", "A"],
    ["Qui a construit la Tour de Babel ?", "C'est la mif", "Ce sont les fils de Cham", "Les fils de Noé", "B" ],
    ["Qui est devenu le premier roi des 10 tribus qui se sont séparées ?", "Manassé", "Kévin Durant", "Jéroboam", "C"],
    ["Qui était Mathusalem ?", "Un  bon gars", "Un sacrificateur", "la personne qui a vécu le plus longtemps sur terre", "C"],
    ["Qui a été le premier prophète nommé dans la Bible ? ", "Abraham", "Jacob", "Bishop Kouadio Olivier", "A"],
    ["Quels autres noms donne-t-on au diable ?", "Prince des ténèbres", "Diego Maradonna", "Enfer", "A"],
    ["Où dans la Bible est-il mentionné que la terre est ronde ?", "Psaumes  118", "dans l'Ancien Testament, livre d'Esaïe 40:22", "Dans l'évangile selon Daniel Safu", "B"],
    ["Quels hommes ne sont pas morts selon la Bible ?", "Hénoc et Élie", "Biggy et 2Pac", "Jonas et Salem", "A"],
    ["Qui a douté que Jésus ait marché sur l'eau ?", "Jack", "Obama", "Pierre", "C"],
    ["Où est-il dit que Satan sera attaché pendant mille ans ?", "Psaumes de Jean-Paul 17:3-6", "Apocalypse 20:1-3", "Habakuk 18:3-6", "B"],
    ["En quelle langue Jésus parla-t-il à Saul ?", "En latin", "En langue hébraïque", "En cainf", "B"],
    ["Où est né Jésus ?", "à Bethléem", "à San Francisco", "en Egypte", "A"]



];
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