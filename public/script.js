// Array of quiz objects
const quizzes = [
    {
        questions: [
            {
                question: "What is the capital of Canada?",
                options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
                correctAnswer: "Ottawa"
            },
            // Add more Quiz 1 questions here...
        ]
    },
    {
        questions: [
            {
                question: "What is the largest ocean on Earth?",
                options: ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"],
                correctAnswer: "Pacific Ocean"
            },
            // Add more Quiz 2 questions here...
        ]
    },
    {
        questions: [
            {
                question: "What is question 3",
                options: ["A", "B", "C", "D"],
                correctAnswer: "A"
            },
            // Add more Quiz 3 questions here...
        ]
    },
    {
        questions: [
            {
                question: "What is question 4",
                options: ["A", "B", "C", "D"],
                correctAnswer: "B"
            },
            // Add more Quiz 4 questions here...
        ]
    },
    {
        questions: [
            {
                question: "What is question 5",
                options: ["A", "B", "C", "D"],
                correctAnswer: "C"
            },
            // Add more Quiz 5 questions here...
        ]
    },
    {
        questions: [
            {
                question: "What is question 6",
                options: ["A", "B", "C", "D"],
                correctAnswer: "D"
            },
            // Add more Quiz 6 questions here...
        ]
    },
    {
        questions: [
            {
                question: "What is question 7",
                options: ["A", "B", "C", "D"],
                correctAnswer: "A"
            },
            // Add more Quiz 7 questions here...
        ]
    },
    {
        questions: [
            {
                question: "What is question 8",
                options: ["A", "B", "C", "D"],
                correctAnswer: "B"
            },
            // Add more Quiz 8 questions here...
        ]
    },
    {
        questions: [
            {
                question: "What is question 9",
                options: ["A", "B", "C", "D"],
                correctAnswer: "C"
            },
            // Add more Quiz 9 questions here...
        ]
    },
    {
        questions: [
            {
                question: "What is question 10",
                options: ["A", "B", "C", "D"],
                correctAnswer: "D"
            },
            // Add more Quiz 10 questions here...
        ]
    },
    {
        questions: [
            {
                question: "What is question Final Assesment",
                options: ["A", "B", "C", "D"],
                correctAnswer: "A"
            },
            // Add more Final Assessment questions here...
        ]
    },
];

// Shuffle function to randomize the order of options
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

// Function to generate the quiz based on quizIndex
function generateQuiz(quizIndex) {
    const quizContainer = document.getElementById("quiz-container");

    // Check if quizContainer exists
    if (quizContainer) {
        const selectedQuiz = quizzes[quizIndex];

        // Clear previous quiz questions
        quizContainer.innerHTML = '';

        selectedQuiz.questions.forEach((q, index) => {
            // Shuffle the order of options
            const shuffledOptions = shuffle([...q.options]);

            // Create a question div
            const questionDiv = document.createElement("div");
            questionDiv.classList.add("question");
            questionDiv.innerHTML = `
                <p>${index + 1}. ${q.question}</p>
                ${shuffledOptions.map(option => `<label><input type="radio" name="q${index}" value="${option}">${option}</label>`).join('')}
            `;

            // Append the question div to the quiz container
            quizContainer.appendChild(questionDiv);
        });

        // Set the data-quiz-index attribute
        quizContainer.dataset.quizIndex = quizIndex;
    } else {
        console.error("Quiz container not found");
    }
}


// Function to grade the quiz
function gradeQuiz() {
    const resultContainer = document.getElementById("result");
    const userAnswers = [];
    
    // Determine the current quiz index dynamically
    const currentQuizIndex = document.getElementById("quiz-container").dataset.quizIndex;
  
    // Collect user's answers
    const currentQuiz = quizzes[currentQuizIndex];
    currentQuiz.questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
        userAnswers.push(selectedOption ? selectedOption.value : null);
    });

    // Calculate the score
    const score = userAnswers.reduce((acc, answer, index) => {
        return answer === currentQuiz.questions[index].correctAnswer ? acc + 1 : acc;
    }, 0);

    // Calculate the percentage
  const percentage = (score / currentQuiz.questions.length) * 100;

    // Display the score as a percentage
    resultContainer.textContent = `Your score: ${percentage.toFixed(2)}%`;

    // Send data to the server
    fetch('/saveQuiz', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            quizNumber: parseInt(currentQuizIndex) + 1, // Add 1 to match the index-based quiz numbering
            quizScore: percentage,
        }),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

// Array of button IDs to hide
const buttonsToHide = [
    "module2Btn", "module3Btn", "module4Btn","module5Btn", "module6Btn",
    "module7Btn", "module8Btn","module9Btn", "module10Btn", "finalAssessmentBtn"
    ];

// Loop through the array and hide each button
buttonsToHide.forEach(buttonId => {
    const button = document.getElementById(buttonId);
    if (button) {
        button.style.display = "none";
    }
}); 

document.addEventListener("DOMContentLoaded", function() {
    // Fetch the quiz scores for the logged-in user from the database
    fetch('/quizScores', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(quizScores => {

        console.log('quizScores:', quizScores);

        // Get the reference to each module button
        const module2Btn = document.getElementById("module2Btn");
        const module3Btn = document.getElementById("module3Btn");
        const module4Btn = document.getElementById("module4Btn");
        const module5Btn = document.getElementById("module5Btn");
        const module6Btn = document.getElementById("module6Btn");
        const module7Btn = document.getElementById("module7Btn");
        const module8Btn = document.getElementById("module8Btn");
        const module9Btn = document.getElementById("module9Btn");
        const module10Btn = document.getElementById("module10Btn");
        const finalAssessmentBtn = document.getElementById("finalAssessmentBtn");

        // Check the quiz scores and show/hide buttons accordingly
        if (quizScores.quiz1 >= 80) {
            module2Btn.style.display = "inline-block"; // Show module 2 button
        }
        if (quizScores.quiz2 >= 80) {
            module3Btn.style.display = "inline-block"; // Show module 3 button
        }
        if (quizScores.quiz3 >= 80) {
            module4Btn.style.display = "inline-block"; // Show module 4 button
        }
        if (quizScores.quiz4 >= 80) {
            module5Btn.style.display = "inline-block"; // Show module 5 button
        }
        if (quizScores.quiz5 >= 80) {
            module6Btn.style.display = "inline-block"; // Show module 6 button
        }
        if (quizScores.quiz6 >= 80) {
            module7Btn.style.display = "inline-block"; // Show module 7 button
        }
        if (quizScores.quiz7 >= 80) {
            module8Btn.style.display = "inline-block"; // Show module 8 button
        }
        if (quizScores.quiz8 >= 80) {
            module9Btn.style.display = "inline-block"; // Show module 9 button
        }
        if (quizScores.quiz9 >= 80) {
            module10Btn.style.display = "inline-block"; // Show module 10 button
        }
        if (quizScores.quiz10 >= 80) {
            finalAssessmentBtn.style.display = "inline-block"; // Show module final assessment button
        }
    })
    .catch(error => {
        console.error('Error fetching quiz scores:', error);
    });
});
