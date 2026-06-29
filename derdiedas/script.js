let words = [];
let currentIndex = 0;

async function loadWords() {
    const response = await fetch('words.json');
    words = await response.json();
    shuffle(words);
    nextCard();
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function nextCard() {
    if (currentIndex >= words.length) {
        alert("You've completed all the cards!");
        return;
    }

    document.getElementById('word').textContent = words[currentIndex].word;
    document.getElementById('answer').value = "";
    document.getElementById('feedback').classList.add('hidden');
    document.getElementById('next').classList.add('hidden');
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.toLowerCase().trim();
    const correctAnswer = words[currentIndex].article;
    const explanation = words[currentIndex].explanation;
    
    let feedbackText = userAnswer === correctAnswer 
        ? `✅ Correct! ${explanation}` 
        : `❌ Incorrect. The correct answer is '${correctAnswer}'. ${explanation}`;
    
    document.getElementById('feedback').textContent = feedbackText;
    document.getElementById('feedback').classList.remove('hidden');
    document.getElementById('next').classList.remove('hidden');

    currentIndex++;
}

document.addEventListener("DOMContentLoaded", loadWords);
