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




/*
1. The nave pictures should slide on the screen once scrolled down to this option
2. When an element is clicked, the nav clicked should become the superbox background
3.
4. 
*/

//nav

let content = [{title: 'Inspiration',
                content1: '<p>Yoga is designed to take people on an inward journey, exploring all of the idiosyncrasies that make us unique beings. Things that have developed within us over a lifetime, and now no longer serve a beneficial purpose to our spirit, can be released. First, you must take inventory of all features within.</p>',
                content2: '<p>Then, you must do the analysis to determine if the characteristics are beneficial for you at this particular stage on your journey. Yoga is a great mechanism to facilitate this exploration. While taking this deep examination of your inner self, you will discover positive qualities that have been within you the entire time however, they have been virtually untapped or dormant.</p>',
                content3: '<p>Your life can change dramatically once you reawaken those positive traits within. You will start to become the person you always knew you could be, viewing the world from an entirely new lens. Your creativity will increase, while your frustration decreases. You will begin to accomplish things you previously thought were beyond your grasp.</p>',
              color: '#3D1632',
              contentPic: './ProfPhotos/10.jpg'},
              {title: 'Balance',
               content1: '<p>Balance is such an important part of our journey. Whether it is the equilibrium of chakras or adding some diversity to your physical workouts, yoga is an excellent tool. As we or our loved ones age, balancing becomes more important and yet more difficult.  A regular yoga practice will ease some of the difficulty.</p>',
               content2: '<p>On our journey, sometimes our energy centers (also known as chakras) become unbalanced. This generally manifest itself in our physical world through stagnation, agitation, discontentment, disease etc.... A consistent yoga practice can be the avenue to realign the chakra balance necessary for one to live a happier, healthier life.</p>',
               content3:'<p>If you have a regular workout routine that is becoming boring or stale, yoga could be the added mix needed to provide some variety and keep the body in motion.</p><p>As we age, our bones no longer heal as fast as they once did. Falling can not only lead to extended recovery time, but also lead to some severely damaged internal organs. A consistent yoga practice will increase ones equilibrium to the point that falling becomes an unlikely occurrence.</p>',
              color: '#004B9C',
              contentPic: './ProfPhotos/14.jpg'},
              {title: 'Social Justice',
               content1: '<p>Social Justice is one of The Nubian Yogi’s most passionate areas. He has a natural aptitude for combining socially conscious musical soundtracks with spirit awakening yoga sequences. You can raise the conscious awareness of your corporate culture, staff or individuals, while also promoting a physical healthy lifestyle.</p><p>He can provide 3-day workshops, integrating yoga with Racial Education, or you can sign your organization up for a one-time social justice yoga session.</p>',
               content2:'<p>The Nubian Yogi honed this unique talent while pursuing his Master’s Degree from Southern University in the discipline of Mass Communication, with an emphasis on the Socialization Effect of Media Images. This awakened him to the power of intention.</p>',
               content3:'<p>He has facilitated Conversations on Race : professional development seminars for educators at the National Museum for African American History and Culture.</p><p>The Nubian Yogi regularly conducts his social justice yoga at the John F Kennedy Center and the nostalgic Potter’s House Restaurant in Washington, DC.</p>',
              color:'#DB8400',
              contentPic: './ProfPhotos/15.png'},
              {title: 'Athletics',
               content1: '<p>The Nubian Yogi was Coach Perry Daniels for several years, coaching football and basketball for various schools for the Louisiana High School Athletic Association and for the Prince George’s County, Maryland system.</p><p>He has coached high profile athletes such as Lenard Tillery (Southwestern Athletic Conference all-time leading rusher) and Chad Williams (Arizona Cardinals, WR)</p>',
               content2: '<p>Yoga works well for athletes as an integral part of their conditioning program by increasing focus and flexibility while simultaneously expanding lung capacity.</p>',
               content3: '<p class="quote">“From my experience, It is important to keep athletes healthy and their bodies ready to play in order for them to perform at their highest levels” – The Nubian Yogi</p><p>The Nubian Yogi can design tailored yoga routines for your team or an individual athlete</p>',
              color:'#038A6A',
              contentPic: './ProfPhotos/5.jpg'}];

let area = document.getElementsByClassName("box");
//let image = document.getElementsByClassName("secImage");
let wholeBox = document.getElementsByClassName("keyAreas");

function clearState() {
 // $(image).css('visibility','visible');
  //$(area).css('width', '100px');
}

function navClicks() {
  for (let i = 0; i < area.length; i++){
      $(area[i]).click(function(){
        $(this).css('width', '160px');
        clearState();
        wholeBox[0].style.backgroundColor = content[i].color;
        $(".contentPic").html(`<img src=${content[i].contentPic} class="secImage" alt="random image">`);
        $(".content1").html(`${content[i].content1} ${content[i].content2}`);
        $(".content2").html(`${content[i].content3}`);
        //$(".content3").html(``);
       // $(image).css('visibility','hidden');
    });
  }
}
navClicks();