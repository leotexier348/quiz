class Question {
    #enonce;
    #reponses;
    #reponseCorrecte;

    constructor(enonce, reponses, reponseCorrecte) {
        this.#enonce = enonce;
        this.#reponses = reponses;
        this.#reponseCorrecte = reponseCorrecte;
    }


    get reponseCorrecte() {
        return this.#reponseCorrecte;
    }

    afficher(contexte) {
        // Création de la question
        let questionElement = document.createElement('h4');
        questionElement.textContent = this.#enonce;
        contexte.appendChild(questionElement);

        // Création des différentes réponses
        for (let i = 0; i < this.#reponses.length; i++) {
            let reponseLabel = document.createElement('label');
            let reponseInput = document.createElement('input');
            reponseInput.type = 'radio';
            reponseInput.name = 'reponse';
            reponseInput.value = i;

            reponseLabel.textContent = this.#reponses[i];

            contexte.appendChild(reponseInput);
            contexte.appendChild(reponseLabel);
            contexte.appendChild(document.createElement('br')); // Saut de ligne entre les réponses
        }
    }
}


class Quiz {
    #questions;
    #score;
    #index;

    constructor() {
        this.#questions = [];
        this.#score = 0;
        this.#index = 0;
    }

    // Getter et setter pour les questions (pas nécessaire si vous n'avez pas besoin de les exposer)
    get questions() {
        return this.#questions;
    }

    ajouterQuestion(question) {
        this.#questions.push(question);
    }

    afficherQuestion(counter, contexte) {
        // Vérifie si la question existe
        if (counter < this.#questions.length) {
            this.#questions[counter].afficher(contexte);
        }
    }

    collecterReponse() {
        // Logique pour collecter et valider la réponse
        let reponses = document.getElementsByName('reponse');
        for (let reponse of reponses) {
            if (reponse.checked) {
                return parseInt(reponse.value); // Retourne l'index de la réponse sélectionnée
            }
        }
        return null;
    }

    afficherResultat() {
        alert("Votre score est : " + this.#score);

    }

    verifierReponse(counter) {
        let reponseChoisie = this.collecterReponse();
        if (reponseChoisie === this.#questions[counter].reponseCorrecte) {
            this.#score++;
        }
    }

    afficherResultatDOM() {
        // Vérifie si l'élément avec l'ID 'scoreEcrit' existe déjà
        let scoreEcrit = document.getElementById('scoreEcrit');

        if (scoreEcrit === null) {
            // Si l'élément n'existe pas, crée un nouvel élément <h4> pour afficher le score
            scoreEcrit = document.createElement('h4');
            scoreEcrit.textContent = "Votre score est de: " + this.#score + " / 10";
            scoreEcrit.id = 'scoreEcrit'; // Assigne un ID à cet élément
            document.body.appendChild(scoreEcrit); // Ajoute l'élément au body
        } else {
            // Si l'élément existe déjà, met à jour son contenu
            scoreEcrit.textContent = "Votre score est de: " + this.#score + " / 10";
        }
    }
}
