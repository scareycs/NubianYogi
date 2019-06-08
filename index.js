moveNav= document.querySelectorAll('.navContent li');



for (var i = 0; i < moveNav.length; i++) {
    moveNav[i].addEventListener('click', function() {
    	let classify = "." + this.id;
    	$('html,body').animate({
        scrollTop: $(classify).offset().top - 50},
        'slow');
        $('#menu').toggleClass('open');
		$('.navContent').slideToggle('fast','linear');
    });
}


$('#menu').click(function(){
  $(this).toggleClass('open');
  $('.navContent').slideToggle('fast','linear');
});

 $("form").submit(function (e) {
   $.post("https://gmail.us20.list-manage.com/subscribe/post?u=ec475fa405be635371ab3e558&amp;id=9e8514d043", {
      FNAME: $("#mce-FNAME").val(),
      LNAME: $("#mce-LNAME").val(),
      EMAIL: $("#mce-EMAIL").val()
   }).success(function (data) {
    alert("success!");
   });
   e.preventDefault()
 });
