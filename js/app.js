
$(function() {
    var q1 = new Question(q1text, rawData[0], 'd'),
        q2 = new Question(q2text, rawData[1], 'a'),
        q3 = new Question(q3text, rawData[2], 'b');


    var GAME = GAME || {
        questions: [],
        numCorrect: 0,

        initiate: function() {
            GAME.questions.push(q1,q2,q3);
        },

        askQuestion: function(i) {
            var currentPos = GAME.questions[i],
                q = currentPos['question'],
                ans = currentPos['answers'];

            $('.question h2').text(q);
            $('.answers').html(ansHtml) // ansHtml from rawData
                .find('.answer').children('label')
                    .each(function(i) {
                        $(this).text(ans[i]);
                    })

            GAME.checkAnswer(currentQuestion)
        },

        checkAnswer: function(i) {
            $('#submit').on('click', function() {
                var corrAns = GAME.questions[i]['correctAnswer'],
                    subAns = $('.answer input[name="q"]:checked').val();

                console.log(corrAns)

                if (subAns != corrAns) {
                    console.log('wrong!')
                }

                if (subAns == corrAns) {
                    console.log('that is right!')
                    GAME.numCorrect += 1;
                    currentQuestion += 1;
                    GAME.askQuestion(currentQuestion);
                }
            })
        }
    }

    GAME.initiate();
    var currentQuestion = 0;
    GAME.askQuestion(0)


    function Question(question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }

})();
