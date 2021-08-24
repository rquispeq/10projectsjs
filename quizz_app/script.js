const quizData = [
    {
        question: 'En que año se independizó Perú?',
        a: '1921',
        b: '1821',
        c: '1221',
        d: '1765',
        correct: 'b'
    },
    {
        question: 'Cuantos departamentos hay?',
        a: '24',
        b: '50',
        c: '23 (Arequipa es una ciudad independiente)',
        d: '21',
        correct: 'a'
    },
    {
        question: 'Quién fue el presidente en el año 2014?',
        a: 'Alejandro Toledo',
        b: 'Chibolín',
        c: 'Martín Vizcarra',
        d: 'Alan García',
        correct: 'c'
    },
    {
        question: 'Cuantas regiones tiene el país?',
        a: '4',
        b: '2',
        c: '1',
        d: '3',
        correct: 'd'
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submit = document.getElementById('submit');
const error = document.querySelector('.error');

const quiz = document.getElementById('quiz');

loadQuiz();

function loadQuiz(){
    error.style.display = 'none';

    answers = document.querySelectorAll('.answer');
    answers.forEach(answer => {
        answer.checked = false;
    });

    const currentQuizData = quizData[currentQuestion];
    questionEl.textContent = currentQuizData.question;
    a_text.textContent = currentQuizData.a;
    b_text.textContent = currentQuizData.b;
    c_text.textContent = currentQuizData.c;
    d_text.textContent = currentQuizData.d;
}

submit.addEventListener('click',() => {
    const answer = getSelected();

    if (answer) {
        score += quizData[currentQuestion].correct === answer.id ? 1 : 0;
        console.log(score);
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>Contestaste correctamente ${score}/${quizData.length}</h2>
                <button onClick="location.reload()">Recargar</button>`;
        }
    } else {
        error.style.display = 'block';
    }
    

    
    // currentQuestion++;
    // if (currentQuestion < quizData.length) {
    //     loadQuiz()
    // } else {
    //     // TODO: Show
    //     alert('Terminaste el cuestionario')
    // }
})

function getSelected(){
    let answer_checked = undefined;
    answers = Array.from(document.querySelectorAll('.answer'));
    answer_checked = answers.filter((answer) => answer.checked);
    return answer_checked[0];
}