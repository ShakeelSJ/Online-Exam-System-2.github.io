$(document).ready(function(){
    var navbar = $('.navbar');
    var content = $(".paralex-container"); 
    $(window).scroll(function(){
        var abc = $(window).scrollTop();
        $("#main_image").css("background-position-y",+(abc*0.1)+"px");
        if($(window).scrollTop() <= 40){
            navbar.removeClass('navbar-scroll');
        } 
        else if($(window).scrollTop() >= 40 || window.matchMedia("(max-width: 768px)").matches){
            navbar.addClass('navbar-scroll');
        }
    });

    
    $(".sec-container>*").hide();
    $(".sec-container>*").slideDown(1500);
    $("#panel-hide").click(function(){
        // if ( $(window).width() > 768 ) {
        // }
        if($(".side_nav").width() > 50){
          $("#user_image").hide(300);
          $(".sec-container>*").slideUp(800);
          $(".side_nav").animate({width: "50px"});
        }
        else{
          $("#user_image ").show();
          $(".side_nav").animate({width: "100%"});
          $(".sec-container>*").slideDown(800);
        }
    });

    $("button").click(function(){
      $("#navigaton-mobile").fadeOut(250);
    });
    $("#nav-mobile-button").click(function(){
      $(".nav-mobile").fadeIn(250);
    });
    
  });// jquery
  //--------------- charts
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ["January" , "February" , "March" , "April", "May","June", "July", "August", "September"],
          datasets: [{
              label: 'Number Of Exams',
              data: [12, 19, 3, 8, 13, 6,10,15,7],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(50, 115, 220, 0.2)',
                  'rgba(32, 252, 3, 0.2)',
                  'rgba(3, 227, 252,0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(50, 115, 220, 1)',
                  'rgba(32, 252, 3, 1)',
                  'rgba(3, 227, 252, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
    }
  });
  //--------------- chart2

  var ctx2 = document.getElementById('myChart2').getContext('2d');
  var myChart = new Chart(ctx2, {
      type: 'doughnut',
      data: {
          labels: ["Pass" , "Fail"],
          datasets: [{
              data: [30, 20],
              backgroundColor: [
                'rgba(3, 227, 252, 1)',
                'rgba(255, 99, 132, 1)'
              ],
              borderColor: [
                '#fff',
                '#fff'
                  // 'rgba(255, 99, 132, 1)',
                  // 'rgba(3, 227, 252, 1)'
              ],
              borderWidth: 2
          }]
      }
  });


  //--------------- chart3 
  var years = ["January" , "February" , "March" , "April", "May","June", "July", "August", "September","October","November","December"];
  var pass = [10,20,25,15,5,8,30,45,40,37,21,12];
  var fail = [40,30,25,35,45,42,20,5,10,13,29,38];
  
  var ctx3 = document.getElementById("myChart3");
  var myChart = new Chart(ctx3, {
    type: 'line',
    data: {
      labels: years,
      datasets: [
        { 
          data: pass,
          label: "Pass",
          borderColor: "#3e95cd",
          fill: false
        },
        { 
          data: fail,
          label: "Fail",
          borderColor: "#8e5ea2",
          fill: false
        }
      ]
    }
  });



