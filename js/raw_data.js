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
]

var q1text = 'this is question 1, hello!',
    q2text = 'hello from question 2',
    q3text = 'dont forget about question 3';

// for inserting during askQuestion(i)
var ansHtml="";
ansHtml += "<div class=\"answer\">";
ansHtml += "<input type=\"radio\" name=\"q\" id=\"a\" value=\"a\" \/>";
ansHtml += "<label for=\"a\"> + ans[0] + <\/label>";
ansHtml += "<\/div>";
ansHtml += "<div class=\"answer\">";
ansHtml += "<input type=\"radio\" name=\"q\" id=\"b\" value=\"b\" \/>";
ansHtml += "<label for=\"a\"> + ans[1] + <\/label>";
ansHtml += "<\/div>";
ansHtml += "<div class=\"answer\">";
ansHtml += "<input type=\"radio\" name=\"q\" id=\"c\" value=\"c\" \/>";
ansHtml += "<label for=\"a\"> + ans[2] + <\/label>";
ansHtml += "<\/div>";
ansHtml += "<div class=\"answer\">";
ansHtml += "<input type=\"radio\" name=\"q\" id=\"d\" value=\"d\" \/>";
ansHtml += "<label for=\"a\"> + ans[3] + <\/label>";
ansHtml += "<\/div>";
