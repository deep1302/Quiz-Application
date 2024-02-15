let quizData = [
    {
        question: 'Question 1',
        options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
        answer: 'Option 1'
    },
    // More questions...
];
let score = 0;
let questionNumber = 0;

function startQuiz() {
    if (questionNumber < quizData.length) {
        document.getElementById('question-number').textContent = 'Question ' + (questionNumber + 1);
        document.getElementById('question').textContent = quizData[questionNumber].question;
        document.getElementById('options').innerHTML = '';
        for (let i = 0; i < quizData[questionNumber].options.length; i++) {
            let btn = document.createElement('button');
            btn.textContent = quizData[questionNumber].options[i];
            btn.onclick = function() {
                if (this.textContent === quizData[questionNumber].answer) {
                    score++;
                }
                questionNumber++;
                startQuiz();
            };
            document.getElementById('options').appendChild(btn);
        }
    } else {
        document.getElementById('quiz').innerHTML = '<h2>You scored ' + score + ' out of ' + quizData.length + '</h2>';
    }
}

startQuiz();
