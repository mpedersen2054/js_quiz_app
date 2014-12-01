$(function() {
    var q1 = new Question(q1text, rawData[0], 'd'),
        q2 = new Question(q2text, rawData[1], 'a'),
        q3 = new Question(q3text, rawData[2], 'b'),
        q4 = new Question(q4text, rawData[3], 'b'),
        q5 = new Question(q5text, rawData[4], 'a');


    var GAME = GAME || {
        questions: [],
        numCorrect: 0,
        currentQ: 0,

        initiate: function() {
            GAME.questions.push(q1,q2,q3,q4,q5);
            GAME.askQuestion(GAME.currentQ);
        },

        askQuestion: function(i) {
            var currentPos = (GAME.questions[i] || false),
                q = currentPos['question'],
                ans = currentPos['answers'];

            !currentPos ? GAME.showFinalResults() :

            $('.correct-num span').text(GAME.numCorrect);
            $('.question-num span').text(GAME.currentQ+1);

            $('.question h2').text(q);
            $('.answers').html(ansHtml) // ansHtml from rawData
                .find('.answer').children('label')
                    .each(function(i) {
                        $(this).text(ans[i]);
                    })

            $('#submit').off();
            GAME.checkAnswer(GAME.currentQ);
        },

        checkAnswer: function(i) {
            $('#submit').on('click', function() {
                var corrAns = GAME.questions[i]['correctAnswer'],
                    subAns = $('.answer input[name="q"]:checked').val();

                if (subAns != corrAns) {
                    showResults(false);
                }
                if (subAns == corrAns) {
                    showResults(true);
                }

                function showResults(outcome) {
                    if (outcome) {
                        var text = "That is correct!";
                        alert(text);
                        GAME.numCorrect += 1;
                        GAME.currentQ += 1;
                        GAME.askQuestion(GAME.currentQ);
                    }
                    else {
                        var text = "Sorry, the answer was " + corrAns;
                        alert(text);
                        GAME.currentQ += 1;
                        GAME.askQuestion(GAME.currentQ);
                    }
                }
            })
        },

        showFinalResults: function() {
            window.location.href = 'http://localhost:1337/results.html';
        }
    }


    GAME.initiate();


    function Question(question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }

})();