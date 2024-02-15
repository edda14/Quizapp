let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3

    },
    {
        "question": "Was bedeutet das HTML Tag &lt;a&gt;?",
        "answer_1": "Fetter Text",
        "answer_2": "Container",
        "answer_3": "Ein Link",
        "answer_4": "Kursiv",
        "right_answer": 3
    },
    {
        "question": "Wie bindet man eine Webseite in eine Webseite ein?",
        "answer_1": "&lt;iframe&gt;, &lt;frame&gt;, and &lt;frameset&gt;",
        "answer_2": "&lt;iframe&gt;",
        "answer_3": "&lt;frame&gt;",
        "answer_4": "&lt;frameset&gt;",
        "right_answer": 2
    },
    {
        "question": "Wie definiert man in Javascript eine Variable",
        "answer_1": "let 100 = rate;",
        "answer_2": "100 = let rate;",
        "answer_3": "rate = 100;",
        "answer_4": "let rate = 100;",
        "right_answer": 4
    },
    {
        "question": "Wie wählst du alle Elemente vom Typ &lt;a&gt; mit dem attribut title aus?",
        "answer_1": "a[title] {...}",
        "answer_2": "a > title {...}",
        "answer_3": "a.title {...}",
        "answer_4": "a=title {...}",
        "right_answer": 1
    },
    {
        "question": "Wie greift man auf den inhalt einer Id zu?",
        "answer_1": "document.getElementById",
        "answer_2": "content.getElementById",
        "answer_3": "content.getelementbyid",
        "answer_4": "document.getelementbyid",
        "right_answer": 1
    },
    {
        "question": "Wie werden Sekunden in Javascript dargestellt?",
        "answer_1": "Zehntelsekunden",
        "answer_2": "Millisekunden",
        "answer_3": "Sekunden",
        "answer_4": "Makrosekunden",
        "right_answer": 2
    }

];

let rightQuestions = 0;
let currentQuestion = 0;

function init() {
    document.getElementById("all-questions").innerHTML = questions.length;
    showQuestion();

}

function showQuestion() {
    let question = questions[currentQuestion];
    if (currentQuestion >= questions.length) {
        document.getElementById('card-end-screen').classList.remove('d-none');
        document.getElementById('card-screen').classList.add('d-none');
        document.getElementById('all-question-number').innerHTML = questions.length;
        document.getElementById('right-answers').innerHTML = rightQuestions;
    } else {
        document.getElementById('question-number').innerHTML = currentQuestion + 1;
        document.getElementById("question-text").innerHTML = question["question"];
        document.getElementById("answer_1").innerHTML = question["answer_1"];
        document.getElementById("answer_2").innerHTML = question["answer_2"];
        document.getElementById("answer_3").innerHTML = question["answer_3"];
        document.getElementById("answer_4").innerHTML = question["answer_4"];
    }
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedquestionnumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question["right_answer"]}`;
    if (selectedquestionnumber == question["right_answer"]) {
        console.log("Richtige Antwort");
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightQuestions++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++; // z.B von 1 auf 0.
    showQuestion();
    document.getElementById('next-button').disabled = true; //sperrt den 'nächste Frage Button'
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    resetAnswerButtons();

}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}