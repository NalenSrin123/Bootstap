$(document).ready(function(){
     $.ajax({
          url : 'home.html',
          catch : false,
          beforeSend:function(){
               $('section').html(`<img width="200" src="image/loading-gif.gif" alt="">`);
          },
          success : function(response){
               $('section').html(`${response}`);
          }
     })
     // route home page
     const content_home=()=>{
          $('#btn-home').click(function(){
               $.ajax({
                    url : 'home.html',
                    catch : false,
                    beforeSend:function(){
                         $('section').html(`<img width="200" src="image/loading-gif.gif" alt="">`);
                    },
                    success : function(response){
                         $('section').html(`${response}`);
                    }
               })
          })
     }
     content_home();

     // news product
     const new_product=()=>{
          $('body').on('click','#btn-new',function(){
               $.ajax({
                    url : 'news.html',
                    catch : false,
                    beforeSend:function(){
                         $('section').html(`<img width="200" src="image/loading-gif.gif" alt="">`);
                    },
                    success : function(response){
                         $('section').html(`${response}`);
                    }
               })  
          })
     }
     new_product();

     // route shop
     const content_shop=()=>{
          $('#btn-shop').click(function(){
               $.ajax({
                    url : 'shop.html',
                    catch : false,
                    beforeSend:function(){
                         $('section').html(`<img width="200" src="image/loading-gif.gif" alt="">`);
                    },
                    success : function(response){
                         $('section').html(`${response}`);
                    }
               })  
          })
     }
     content_shop();

     // detail product
     const detail_product=()=>{
          $('body').on('click','#btn-detail',function(){
               $.ajax({
                    url : 'detail.html',
                    catch : false,
                    beforeSend:function(){
                         $('section').html(`<img width="200" src="image/loading-gif.gif" alt="">`);
                    },
                    success : function(response){
                         $('section').html(`${response}`);
                    }
               })  
          })
     }
     detail_product();

     // route contact
     const btn_contect=()=>{
          $('.popup-contect').hide();
          $('#btn-contect').click(function(){
               $('.popup-contect').show();
          })
          $('.btn-close-contect').click(function(){
               $('.popup-contect').hide();
          })
          $('.btn-cancel-contect').click(function(){
               $('.popup-contect').hide();
          })
     }
     btn_contect();

     // btn add to cart
     $('.btn-add-to-cart').click(function(){
          var eThis = $(this);
          var box = eThis.parents('.user').find('.box-add-to-cart');
          box.slideToggle(200);
     });

     $('#btn-close').click(function(){
          var eThis = $(this);
          var btn_close = eThis.parent()
          btn_close.slideToggle(200);
     });

})