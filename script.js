// Global variables
let currentUser = null;
let currentSubject = '';
let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let score = 0;

// Page navigation
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

// Login/Register tabs
document.getElementById('login-tab').addEventListener('click', () => {
    document.getElementById('login-tab').classList.add('active');
    document.getElementById('register-tab').classList.remove('active');
    document.getElementById('login-form').classList.add('active');
    document.getElementById('register-form').classList.remove('active');
});

document.getElementById('register-tab').addEventListener('click', () => {
    document.getElementById('register-tab').classList.add('active');
    document.getElementById('login-tab').classList.remove('active');
    document.getElementById('register-form').classList.add('active');
    document.getElementById('login-form').classList.remove('active');
});

// Register functionality
document.getElementById('register-btn').addEventListener('click', () => {
    const name = document.getElementById('reg-name').value;
    const phone = document.getElementById('reg-phone').value;
    const institute = document.getElementById('reg-institute').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    const error = document.getElementById('register-error');

    if (!name || !phone || !institute || !email || !password) {
        error.textContent = 'All fields are required.';
        return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        error.textContent = 'Invalid email format.';
        return;
    }

    // Simulate email verification (in real app, send verification email)
    alert('Registration successful! (Email verification simulated)');

    // Store user data in localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ name, phone, institute, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    // Clear form
    document.getElementById('reg-name').value = '';
    document.getElementById('reg-phone').value = '';
    document.getElementById('reg-institute').value = '';
    document.getElementById('reg-email').value = '';
    document.getElementById('reg-password').value = '';
    error.textContent = '';
});

// Login functionality
document.getElementById('login-btn').addEventListener('click', () => {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const error = document.getElementById('login-error');

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        currentUser = user;
        showPage('home-page');
        error.textContent = '';
    } else {
        error.textContent = 'Invalid email or password.';
    }
});

// Subject selection
document.querySelectorAll('.subject-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        currentSubject = btn.dataset.subject;
        startQuiz();
    });
});

// Start quiz
function startQuiz() {
    currentQuestions = quizData[currentSubject];
    // For demo, select 10 random questions (in real app, select based on level)
    currentQuestions = currentQuestions.sort(() => 0.5 - Math.random()).slice(0, 10);
    currentQuestionIndex = 0;
    userAnswers = [];
    score = 0;
    showPage('quiz-page');
    loadQuestion();
}

// Load question
function loadQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    document.getElementById('quiz-subject').textContent = `${currentSubject} Quiz`;
    document.getElementById('question-text').textContent = question.question;
    document.getElementById('options').innerHTML = '';

    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option;
        optionDiv.addEventListener('click', () => selectOption(index));
        document.getElementById('options').appendChild(optionDiv);
    });

    document.getElementById('next-btn').disabled = true;
    document.getElementById('progress').textContent = `Question ${currentQuestionIndex + 1} of ${currentQuestions.length}`;
}

// Select option
function selectOption(index) {
    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
    document.querySelectorAll('.option')[index].classList.add('selected');
    userAnswers[currentQuestionIndex] = index;
    document.getElementById('next-btn').disabled = false;
}

// Next button
document.getElementById('next-btn').addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        loadQuestion();
    } else {
        document.getElementById('next-btn').style.display = 'none';
        document.getElementById('submit-quiz').style.display = 'block';
    }
});

// Submit quiz
document.getElementById('submit-quiz').addEventListener('click', () => {
    calculateScore();
    showPage('score-page');
    displayScore();
});

// Calculate score
function calculateScore() {
    score = 0;
    currentQuestions.forEach((q, i) => {
        if (userAnswers[i] === q.correct) {
            score++;
        }
    });
}

// Display score
function displayScore() {
    document.getElementById('score-display').innerHTML = `
        <h2>Your Score: ${score}/${currentQuestions.length}</h2>
        <p>Percentage: ${((score / currentQuestions.length) * 100).toFixed(2)}%</p>
    `;
}

// View answers
document.getElementById('view-answers').addEventListener('click', () => {
    showPage('answers-page');
    displayAnswers();
});

// Display answers
function displayAnswers() {
    const answersList = document.getElementById('answers-list');
    answersList.innerHTML = '';
    currentQuestions.forEach((q, i) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>Question ${i + 1}:</strong> ${q.question}<br>
            <strong>Your Answer:</strong> ${q.options[userAnswers[i] || 'Not answered']}<br>
            <strong>Correct Answer:</strong> ${q.options[q.correct]}<br>
            <strong>Status:</strong> ${userAnswers[i] === q.correct ? 'Correct' : 'Incorrect'}
        `;
        answersList.appendChild(li);
    });
}

// Concept finder
document.getElementById('concept-finder').addEventListener('click', () => {
    showPage('concept-page');
    displayFaultyConcepts();
});

// Display faulty concepts
function displayFaultyConcepts() {
    const faultyList = document.getElementById('faulty-concepts');
    faultyList.innerHTML = '';
    currentQuestions.forEach((q, i) => {
        if (userAnswers[i] !== q.correct) {
            const li = document.createElement('li');
            li.textContent = `Question ${i + 1}: ${q.question}`;
            faultyList.appendChild(li);
        }
    });
    if (faultyList.children.length === 0) {
        faultyList.innerHTML = '<li>No faulty areas! Great job!</li>';
    }
}

// Suggested videos (placeholder)
document.getElementById('suggested-videos').addEventListener('click', () => {
    showPage('videos-page');
});

// Back buttons
document.getElementById('exit-to-home').addEventListener('click', () => showPage('home-page'));
document.getElementById('back-to-score').addEventListener('click', () => showPage('score-page'));
document.getElementById('back-to-answers').addEventListener('click', () => showPage('answers-page'));
document.getElementById('back-to-concept').addEventListener('click', () => showPage('concept-page'));

// Initialize
showPage('login-page');
