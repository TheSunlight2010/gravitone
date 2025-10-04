let isHebrew = true;
const subtitle = document.getElementById('subtitle');

function toggleLanguage() {
    if (isHebrew) {
        subtitle.textContent = "AH, WELCOME TO MY TEST. MY GAME. A GAME I CREATED, AND A GAME. YOU. WILL PLAY.";
        subtitle.classList.add('english');
        isHebrew = false;
    } else {
        subtitle.textContent = "אה, ברוך הבא למבחן שלי. המשחק שלי. משחק שיצרתי, ומשחק שתשחק.";
        subtitle.classList.remove('english');
        isHebrew = true;
    }
    
    // Add a subtle animation effect
    subtitle.style.transform = 'scale(1.05)';
    setTimeout(() => {
        subtitle.style.transform = 'scale(1)';
    }, 200);
}

function showCharacters() {
    // Navigate to characters page
    window.location.href = 'characters.html';
}

function showTests() {
    // Navigate to tests page
    window.location.href = 'tests.html';
}