
(function() {
    var q1 = new Question(q1text, rawData[0], 'd'),
        q2 = new Question(q2text, rawData[1], 'a'),
        q3 = new Question(q3text, rawData[2], 'b');


    var GAME = GAME || {
        questions: [],
        numCorrect: 0,

        initiate: function() {
            GAME.questions.push(q1,q2,q3);
        },

        
    }

    GAME.initiate();
    // GAME.askQuestion(0);
    // GAME.checkAnswer(0);
    // GAME.askQuestion(1);
    // GAME.checkAnswer(1);
    // GAME.askQuestion(2);
    // GAME.checkAnswer(2);



    function Question(question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }

})();
