function start() {
    $("#quiz").show();
    $(".info").hide();
}

function done() {
    var questionOne = $("input#one").val().toUpperCase();
    var questionTwo = $("input#two").val().toUpperCase();
    var questionThree = $("input#three").val().toUpperCase();
    var questionFour = $("input#four").val().toUpperCase();
    var questionFive = $("input#five").val().toUpperCase();

    if ((questionOne === "") || (questionTwo === "") || (questionThree === "") || (questionFour === "") || (questionFive === "")) {
        alert("Please answer all the questions");
    } else {
        $("input#hidden").show();
    }
    event.preventDefault();
}

$(document).ready(function () {
    $("#quiz form").submit(function (event) {
        var questionOne = $("input#one").val().toUpperCase();
        var questionTwo = $("input#two").val().toUpperCase();
        var questionThree = $("input#three").val().toUpperCase();
        var questionFour = $("input#four").val().toUpperCase();
        var questionFive = $("input#five").val().toUpperCase();




        if (questionOne === "B") {
            $("input#one").addClass("green")
        } else {
            $("input#one").addClass("red")
        }

        if (questionTwo === "C") {
            $("input#two").addClass("green")
        } else {
            $("input#two").addClass("red")
        }
        if (questionThree === "D") {
            $("input#three").addClass("green")
        } else {
            $("input#three").addClass("red")
        }
        if (questionFour === "D") {
            $("input#four").addClass("green")
        } else {
            $("input#four").addClass("red")
        }
        if (questionFive === "A") {
            $("input#five").addClass("green")
        } else {
            $("input#five").addClass("red")
        }



        event.preventDefault();


    });
});

var score = 0;

if (Q1 === "A") {
    score++;
}
if (Q2 === "B") {
    score++;
}

var percent = score / 2 * 100;

document.getElementById("marks").innerHTML = percent