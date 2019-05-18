demos= document.querySelectorAll('.navContent li');


  window.fnames = new Array(); window.ftypes = new Array();
  fnames[0]='EMAIL';
  ftypes[0]='email';
  fnames[1]='FNAME';
  ftypes[1]='text';
  fnames[2]='LNAME';
  ftypes[2]='text';


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


