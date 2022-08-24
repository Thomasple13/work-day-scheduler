let momentCurrentDate = moment().format("dddd, MMMM Do YYYY, hh:mm:ss a");

// Create variable for the current date and time and display it to browser
let displayDateTime = $("#currentDay");
displayDateTime.text(momentCurrentDate);

let currentTime = moment().format("HH:mm:ss");

$(".time-block").each(function () {
  let hour = parseInt($(this).attr("id"));

  if (currentTime > hour) {
    $(this).addClass("past");
  } else if (currentTime < hour) {
    $(this).addClass("future");
  } else {
    $(this).addClass("present");
  }
});

//Click save button to save
$("#saveButton8").on("click", () => {
  let block = $("#saveButton8").siblings("div.hour").text();
  let toDo = $("#textArea8").val();
  console.log("block: ", block);

  localStorage.setItem(block, toDo);
});

$("#saveButton9").on("click", () => {
  let block = $("#saveButton9").siblings("div.hour").text();
  let toDo = $("#textArea9").val();
  console.log("block: ", block);

  localStorage.setItem(block, toDo);
});

$("#saveButton10").on("click", () => {
  let block = $("#saveButton10").siblings("div.hour").text();
  let toDo = $("#textArea10").val();
  console.log("block: ", block);

  localStorage.setItem(block, toDo);
});

$("#saveButton11").on("click", () => {
  let block = $("#saveButton11").siblings("div.hour").text();
  let toDo = $("#textArea11").val();
  console.log("block: ", block);

  localStorage.setItem(block, toDo);
});

$("#saveButton12").on("click", () => {
  let block = $("#saveButton12").siblings("div.hour").text();
  let toDo = $("#textArea12").val();
  console.log("block: ", block);

  localStorage.setItem(block, toDo);
});

$("#saveButton13").on("click", () => {
  let block = $("#saveButton13").siblings("div.hour").text();
  let toDo = $("#textArea13").val();
  console.log("block: ", block);

  localStorage.setItem(block, toDo);
});

$("#saveButton14").on("click", () => {
  let block = $("#saveButton14").siblings("div.hour").text();
  let toDo = $("#textArea14").val();
  console.log("block: ", block);

  localStorage.setItem(block, toDo);
});

$("#saveButton15").on("click", () => {
  let block = $("#saveButton15").siblings("div.hour").text();
  let toDo = $("#textArea15").val();
  console.log("block: ", block);

  localStorage.setItem(block, toDo);
});

$("#saveButton16").on("click", () => {
  let block = $("#saveButton16").siblings("div.hour").text();
  let toDo = $("#textArea16").val();
  console.log("block: ", block);

  localStorage.setItem(block, toDo);
});

$("#saveButton17").on("click", () => {
  let block = $("#saveButton17").siblings("div.hour").text();
  let toDo = $("#textArea17").val();
  console.log("block: ", block);

  localStorage.setItem(block, toDo);
});

function start() {
    $('.time-block').each(function(){
        let key = $(this).children('div.hour').text()
        let storedTodo = localStorage.getItem(key)
        if(storedTodo !== null){
            $(this).children('.description').val(storedTodo)
        }
    })
}

start();
