(function($, document) {
var q1 = new Question(q1text, rawData[0], 'd'),
    q2 = new Question(q2text, rawData[1], 'a'),
    q3 = new Question(q3text, rawData[2], 'b'),
    q4 = new Question(q4text, rawData[3], 'b'),
    q5 = new Question(q5text, rawData[4], 'a');


var GAME = GAME || {
    questions: [],
    numCorrect: 0,
    currentQ: 0,

    init: function() {
        GAME.questions.push(q1,q2,q3,q4,q5);
        GAME.askQuestion(GAME.currentQ);
    },

    askQuestion: function(i) {
        var currentPos = (GAME.questions[i] || false),
            q = currentPos['question'],
            ans = currentPos['answers'];

        if (!currentPos) {  //  if no more q's, end
            GAME.showFinalResults();
        }
        else {  // update score // update question&answers
            $('.correct-num span').text(GAME.numCorrect + '/' + GAME.questions.length);
            $('.question-num span').text(GAME.currentQ+1 + '/'+ GAME.questions.length);

            $('.question h2').text(q);
            $('.answers').html(ansHtml) // ansHtml from rawData
                .find('.answer').children('label')
                    .each(function(i) {
                        $(this).text(ans[i]);
                    })

            $('#submit').off();  // avoid multi click events
            GAME.checkAnswer(GAME.currentQ);
        }
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
        var submit = $('#submit'),
            showres = $('#showres');

        submit.attr('data-featherlight', '#showres');
        showres.html(
            '<h2>Well Done</h2>' +
            '<p>You answered ' +
            GAME.numCorrect +
            ' out of ' +
            GAME.questions.length +
            ' correctly.</p>' +
            '<a class="pure-button" href="game.html">' +
            'Play Again</a>'
        )
    }
}

GAME.init();

function Question(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
}

})(jQuery, document);