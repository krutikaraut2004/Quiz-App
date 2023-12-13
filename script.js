// Quiz data with questions, options, and correct answers
const quizData = [

    {   question: "What is the primary purpose of a compiler?",
        a: "Translate high-level code to machine code",
        b: "Execute code directly",
        c: "Debug code",
        d: "Manage memory allocation",
        correct: "a",   
     },

    {
        question: "Which data structure follows the Last In, First Out (LIFO) principle?",
        a: "Queue",
        b: "Stack",
        c: "Linked List",
        d: "Tree",
        correct: "b",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborghinis",
        correct: "a",
    },
    {
        question: "What programming language is often used for developing web-based applications?",
        a: "Java",
        b: "C++",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
];

// Elements
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

// Track current quiz index and user's score
let currentQuiz = 0
let score = 0

// Immediately invoke the loadQuiz function to start the quiz with the first question
loadQuiz();

// Load the current quiz question and answer options
function loadQuiz() 
{
    resetAnswers()

    // Retrieve the current quiz data
    const currentQuizData = quizData[currentQuiz]

    // Display the current quiz question and options
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

// Reset user's selected answers
function resetAnswers() 
{
    answerEls.forEach(answerEl => answerEl.checked = false)
}

// Get the user's selected answer
function getSelected() 
{
    let answer

    // Find the selected answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) 
        {
            answer = answerEl.id
        }
    })

    return answer
}

// Event listener for the submit button
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        // Check if the selected answer is correct and update the score
        if(answer === quizData[currentQuiz].correct) 
        {
            score++
        }

        // Move to the next quiz question
        currentQuiz++

        // Check if there are more questions to load
        if(currentQuiz < quizData.length)
         {
            loadQuiz()
        } 
        else 
        {
            // Display the final score and provide an option to reload the quiz
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload Quiz</button>
            `
        }
    }
})
