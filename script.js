var inputBox = {
    input9 : "",
    input10 : "",
    input11 : "",
    input12 : "",
    input1 : "",
    input2 : "",
    input3 : "",
    input4 : "",
    input5 : "",
};

$(document).ready(function() {
    if(!localStorage.getItem("inputBox")) {
        updateInput("inputBox");
    }
    else {
        updateInput(JSON.parse(localStorage.getItem("inputBox")));
    }
});

$("#todays-date h2").text(moment().format("dddd") + ", " + moment().format("MMMM Do YYYY, h:mm:ss a"));


function saveButton() {
    saveButton.addEventListner("click", function(event){
        event.preventDefault();
    });

    if (inputBox === "") {
        localStorage.setItem("inputBox", JSON.stringify(inputBox));
    }
      
      console.log(inputBox);
      localStorage.setItem("inputBox", inputBox);

      var lastSave = localStorage.getItem("inputBox")
      print.textContent = lastSave;

};







