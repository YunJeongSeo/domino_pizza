$(document).ready(function(){

  
  // $('.event_wrap').css({
  //   left : -200,
  // });

  // $('.event_con').prependTo('.event_wrap');

  // setInterval(function(){
  //   $('.event_wrap').animate({
  //     left : -2810,
  //   }, 15000, function(){
  //     $('.event_wrap').css({
  //       left : -200,
  //     }).find('.event_con').first().appendTo('.event_wrap');

  //   });
    
  // }, 0);

  var interval = setInterval(function(){
    $('.event_wrap').animate({
      left : [-2810, 'linear']
    }, 15000, function(){
      $('.event_wrap').css({
        left : -200,
      }).find('.event_con').first().appendTo('.event_wrap');
    })
  });

  
  function react(){

    if($(window).width() > 450){
  
      interval;

      $(window).scroll(function(){
        var scrollValue = $(document).scrollTop();
  
        if(scrollValue > 500 ){
          $('.quick_wrap').addClass('active');
          $('.quick').css({
            opacity : 1,
          })
        }else{
          $('.quick_wrap').removeClass('active');
        }
  
  
      })
  
    }else{
  
      // $(window).resize(function(){
      //   if($(window).width() <= 450){
      //     clearInterval(interval)
      //   }
      // })
  
      clearInterval(interval);

      var j = 3;
      setInterval(function(){
        j--;
        if(j == 0){
          j =3;
          $('.event').fadeIn();
        }else{
          $('.event').eq(j).fadeOut();
        }
      
      }, 3500)

      $('.quick_wrap').css({
        opacity : 1,
      })

      
      
        }
      }
  react();

  
  // $(window).resize(function(){document.location.reload();})
  // var delay = 300;
  // var timer = null; 
  // $(window).on('resize', function(){
  //   clearTimeout(timer);
  //   timer = setTimeout(function(){
  //   document.location.reload();
  //   }, delay);
  // });
  

  
  
  


  
  


  

   
  


  // slide script end ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
  
  var i = 0;
  $('.left_btn04').click(function(){
    // console.log('hello world')
    i++;
    if(i > 4){
      i = 0;
    }

    $('.menu_wrap04').animate({
      left : 0
    }, function(){
      $('.menu_wrap04').animate({
        left: 0,
      }).find('.menu_img04').last().prependTo('.menu_wrap04')
    })

    $('.blind_wrap04').animate({
      left: 0
    }, function(){
      $('.blind_wrap04').animate({
        left : 0,
      }).find('.blind_box04').last().prependTo('.blind_wrap04')
    })

    
  })


  $('.right_btn04').click(function(){
    // console.log('hello world')

    i--;
    if(i < -3){
      i = 0;
    }

    $('.menu_wrap04').animate({
      left : 0
    }, function(){
      $('.menu_wrap04').animate({
        left: 0,
      }).find('.menu_img04').first().appendTo('.menu_wrap04')
    })

    $('.blind_wrap04').animate({
      left : 0
    }, function(){
      $('.blind_wrap04').animate({
        left: 0,
      }).find('.blind_box04').first().appendTo('.blind_wrap04')
    })
  })




  // quick menu script  -----------------------------------------------------------
  
    // 일정 높이값이 되면 quick menu가 보이지 않게 만들고 싶다
    // 1)문서의 높이값을 알 수 있는 함수를 작성한다
    // 2)일정 높이값이 되었을 때 quick menu가 보이지 않도록 속성을 변경한다
  
    
    
    




  // swiper ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
  
  
  

  


  
  



  



}); //end