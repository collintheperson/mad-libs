$(function(){
  $("#formOne").submit(function(event) {
    var timeInput = $("input#time").val();
    var hpInput = $("input#hp").val();
    var stInput = $("input#st").val();
    var actionInput = $("input#action").val();
    var person1Input = $("input#person1").val();
    var cityInput = $("input#city").val();

    $(".time").text(timeInput);
    $(".hp").text(hpInput);
    $(".st").text(stInput);
    $(".action").text(actionInput);
    $(".person1").text(person1Input);
    $(".city").text(cityInput);

    $("#story").show();
    event.preventDefault();
  });
});
