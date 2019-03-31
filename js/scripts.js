function start(){
    $(".quiz").show();
    $(".info").hide();
}

function done() {
    var questionOne = $("input#one").val().toUpperCase();
    var questionTwo = $("input#two").val().toUpperCase();
    var questionThree = $("input#three").val().toUpperCase();
    var questionFour = $("input#four").val().toUpperCase();
    var questionFive = $("input#five").val().toUpperCase();
  
    if ((questionOne === "") || (questionTwo === "")||(questionThree === "")||(questionFour === "")||(questionFive === "")) {
      alert("please answer all the questions");
    } else {
      $("input#hidden").show();
    }
    event.preventDefault();
  }