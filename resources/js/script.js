
$(document).ready(function () {


  //-----sticky navbar------//

    $(".js-waypoint-stickynav-feature").waypoint(function (direction) {

        if (direction == "down") {
          $(".waypoint").addClass("sticky-nav");          
    
        }
        else {
          $(".waypoint").removeClass("sticky-nav");
        }
    
      }, {
        offset: '4%'
      });

     
      

  //-----mobile navbar------//



  $(".on-icon").click(function(){

    $(".on-icon").hide()
    $(".off-icon").show()
    $(".a-on").addClass("nav-menu-off-icon")

  });

  $(".off-icon").click(function(){

    $(".on-icon").show()
    $(".off-icon").hide()
  
  });



  
  //------Home page animation------//

      $(".wp-calculate-sec-animation").waypoint(function (direction) {

        $(".calculater-img").addClass("animate__animated animate__fadeInUp")
    
      }, { offset: "30%" });


      $(".wp-feature-sec-animation").waypoint(function (direction) {

        $(".wp-feature-sec-animation").addClass("animate__animated animate__fadeIn")
    
      }, { offset: "60%" });
  

  //-----about page animation-------//

  //-----detail page animation-----//

      $(".wp-carspec1-sec-animation").waypoint(function (direction) {

        $(".wp-carspec1-sec-animation").addClass("animate__animated animate__fadeIn")

      }, { offset: "60%" });

      $(".wp-carspec2-sec-animation").waypoint(function (direction) {

        $(".wp-carspec2-sec-animation").addClass("animate__animated animate__fadeIn")

      }, { offset: "60%" });

      

      $(".wp-discover-sec-animation").waypoint(function (direction) {

        $(".dicover1-sec-animation").addClass("animate__animated animate__fadeInLeft")

      }, { offset: "60%" });

      $(".wp-discover-sec-animation").waypoint(function (direction) {

        $(".dicover2-sec-animation").addClass("animate__animated animate__fadeInRight")

      }, { offset: "60%" });


     

});

