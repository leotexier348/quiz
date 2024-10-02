window.onload = function() {
    init();
};



// ===================================================================================

function init() {
    let counterQuestion = 0;
    let containerQuiz = document.getElementById('quiz');

    // Affichage de la première question
    quiz.afficherQuestion(counterQuestion, containerQuiz);

    // Soumission de la réponse
    let buttonSubmit = document.getElementById('submit');
    buttonSubmit.addEventListener('click', (e) => {
        quiz.verifierReponse(counterQuestion);
        quiz.afficherResultatDOM()
        counterQuestion++;


        // Nettoyage du conteneur et affichage de la question suivante
        containerQuiz.innerHTML = ''; // On efface l'ancienne question
        if (counterQuestion < quiz.questions.length) {
            quiz.afficherQuestion(counterQuestion, containerQuiz);
        } else {
            quiz.afficherResultat();
            init();
        }
    });
}
