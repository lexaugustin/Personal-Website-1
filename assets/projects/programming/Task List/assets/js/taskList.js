//if task is bright, make it pale, and if task is pale, make it bright
// This code select the parent element (ul)and run the function only when an "li" inside of the "ul" is cliked.
$("ul").on("click", "li", function() {
  $(this).toggleClass("task-completed");
});

// Click on X to delete a task
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(1000, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

// Add new task to the list
$("input[type='text']").keypress(function(key){
  if(key.which === 13){
    var enteredTask = $(this).val();
    // Empty the input after the task has been inserted
    $(this).val(" ");
    // Append the task to the list
    $('ul').append("<li><span><img src='assets/icons/garbage.svg'></i></span> " + enteredTask + "</li>")
  }
});


// $("li").click(function() {
//   //if task is bright, make it pale
//   if ($(this).css("color") === "rgb(, 0, 0)") {
//     $(this).css({
//       color: "rgb(221, 221, 221)",
//       textDecoration: "line-through"
//     });
//   }
//   //if task is pale, make it bright
//   else {
//     $(this).css({
//       color: "black",
//       textDecoration: "none"
//     });
//   }
// });
