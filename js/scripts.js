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

        $("#blur").addClass("blur");
        $("#blur").addClass("position");

        event.preventDefault();

        $("#results").show();

        var score = 0;
        var percent = 100;

        if (questionOne === "B") {
            score++;
        }
        if (questionTwo === "C") {
            score++;
        }
        if (questionThree === "D") {
            score++;
        }
        if (questionFour === "D") {
            score++;
        }
        if (questionFive === "A") {
            score++;
        }

        document.getElementById("score").innerHTML = score;


        var percentage = (score / 5) * percent;




        if ((percent >= 80) && (percent < 100)) {
            document.getElementById("message").innerHTML = +percentage + "%. Which is AMAZING. Keep it up!";
        }

        if ((percent >= 50) && (percent < 80)) {
            document.getElementById("message").innerHTML = +percentage + "%. You have passed fairly!";
        }

        if (percent >= 50) {
            document.getElementById("message").innerHTML = +percentage + "%. You have not passed. Please re-take the test.";
        }



    });
});

function goback() {
    $("#blur").removeClass("blur");
    $("#blur").removeClass("position");
    $("#results").hide();
}