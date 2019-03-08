
demos= document.querySelectorAll('.navContent li');

for (var i = 0; i < demos.length; i++) {
    demos[i].addEventListener('click', function() {
    	let classify = "." + this.id;
    	$('html,body').animate({
        scrollTop: $(classify).offset().top},
        'slow'); 
    });
}

