$(".sidebar-open").on("click", function(){
  $(".sidebar").css("display", "flex")  
  $("#navbar").animate({left:-0},1000)
})

$(".sidebar-close").on("click", function(){
  let sideBarWidth = $(".sidebar").width();
  $("#navbar").animate({left:-sideBarWidth},1000)
});

$(".toggle-text").on("click", function () {
  $(".inner").not($(this).next(".inner")).slideUp();
  $(this).next(".inner").slideToggle();
});

$('.nav-item a[href^="#"]').on('click',function(){
  let aHref= $(this).attr('href')
  let sectionOffset = $(aHref).offset().top
  $('body').animate({scrollTop:sectionOffset},5000)
})



var initialDurationInSeconds = (10* 24 * 60 * 60 )+ (4 * 60 * 60) +( 4 * 60);
var interval = setInterval(function () {
  var days = Math.floor(initialDurationInSeconds / (24 * 60 * 60));
  var hours = Math.floor((initialDurationInSeconds % (24 * 60 * 60)) / 3600);
  var minutes = Math.floor((initialDurationInSeconds % 3600) / 60);
  var seconds = initialDurationInSeconds % 60;
  $(".box-day").text(days + "D");
  $(".box-hour").text(pad(hours) + "h");
  $(".box-mintue").text(pad(minutes) + "min");
  $(".box-second").text(pad(seconds) + "sec");

  initialDurationInSeconds--;
  if (initialDurationInSeconds < 0) {
    clearInterval(interval);
    $(".box-day").text("Time's up!"); 
  }
}, 1000); 
function pad(number) {
  return (number < 10 ? "0" : "") + number;
}

let maxCharacters = 100;
  $('#message').on('input', function() {
    let remaining = maxCharacters - $(this).val().length;
    $('#charCount').text(remaining + ' characters remaining');
  });