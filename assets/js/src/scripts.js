const message = "Thank you for submitting your message. We will respond as soon as possible.";

// document.getElementById("contactForm").addEventListener("button", function(event) {
//     event.preventDefault();
//     alert(message);
//   }); 

  $("#contactForm .button").click(function(e) {
    e.preventDefault();
    alert(message);
  });

  $(document).ready(function(){
      $(window).scroll(function(){
          if (this.scrollY > 20){
              $('.nav').addClass("sticky")

          } else{
               $('.nav')
          }
            
      })
  });
 

 
//  $('.title1').show("slide", {direction:"left"},5000);
