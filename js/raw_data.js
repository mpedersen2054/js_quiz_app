var rawData = [
    [
        'q1 a1',
        'q1 a2',
        'q1 a3',
        'q1 a4'
    ],
    [
        'q2 a1',
        'q2 a2',
        'q2 a3',
        'q2 a4'
    ],
    [
        'q3 a1',
        'q3 a2',
        'q3 a3',
        'q3 a4'
    ],
    [
        'q4 a1',
        'q4 a2',
        'q4 a3',
        'q4 a4'
    ],
    [
        'q5 a1',
        'q5 a2',
        'q5 a3',
        'q5 a4'
    ]
]

var q1text = 'this is question 1, hello!',
    q2text = 'hello from question 2',
    q3text = 'dont forget about question 3',
    q4text = 'what is good, question 4',
    q5text = 'gutten tag question 5';

// for inserting during askQuestion(i)
var ansHtml="";
ansHtml += "<div class=\"answer\">";
ansHtml += "<input type=\"radio\" name=\"q\" id=\"a\" value=\"a\" \/>";
ansHtml += "<label for=\"a\"> + ans[0] + <\/label>";
ansHtml += "<\/div>";
ansHtml += "<div class=\"answer\">";
ansHtml += "<input type=\"radio\" name=\"q\" id=\"b\" value=\"b\" \/>";
ansHtml += "<label for=\"b\"> + ans[1] + <\/label>";
ansHtml += "<\/div>";
ansHtml += "<div class=\"answer\">";
ansHtml += "<input type=\"radio\" name=\"q\" id=\"c\" value=\"c\" \/>";
ansHtml += "<label for=\"c\"> + ans[2] + <\/label>";
ansHtml += "<\/div>";
ansHtml += "<div class=\"answer\">";
ansHtml += "<input type=\"radio\" name=\"q\" id=\"d\" value=\"d\" \/>";
ansHtml += "<label for=\"d\"> + ans[3] + <\/label>";
ansHtml += "<\/div>";
