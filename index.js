demos= document.querySelectorAll('.navContent li');

for (var i = 0; i < demos.length; i++) {
    demos[i].addEventListener('click', function() {
    	let classify = "." + this.id;
    	$('html,body').animate({
        scrollTop: $(classify).offset().top},
        'slow');
        $('#menu').toggleClass('open');
		$('.navContent').slideToggle('fast','linear');
    });
}


$('#menu').click(function(){
  $(this).toggleClass('open');
  $('.navContent').slideToggle('fast','linear');
});

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
