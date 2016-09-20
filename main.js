$(document).ready(function(){
            $("a").attr("href");
            $(".title:contains(User)").on("click",function(){
                 $(".side-sub-menu").not($(".side-sub-menu").eq(0)).hide(500);
                $(".side-sub-menu").eq(0).toggle(2000);
            })

            $(".title:contains(Mastercard)").on("click",function(){
                $(".side-sub-menu").not($(".side-sub-menu").eq(1)).hide(500);
                $(".side-sub-menu").eq(1).toggle(2000);
            })

            $(".title:contains(Internal Transaction)").on("click",function(){
                $(".side-sub-menu").not($(".side-sub-menu").eq(2)).hide(500);
                $(".side-sub-menu").eq(2).toggle(2000);
            })
            $(".title:contains(Withdraw)").on("click",function(){
                $(".side-sub-menu").not($(".side-sub-menu").eq(3)).hide(500);
                $(".side-sub-menu").eq(3).toggle(2000);
            })
            $(".title:contains(History)").on("click",function(){
                $(".side-sub-menu").not($(".side-sub-menu").eq(4)).hide(500);
                $(".side-sub-menu").eq(4).toggle(2000);
            })

            //THis is submenu
            // $(".title:contains(Cabinet)").on("click",function(){
            //     $(".mc-side-sub-menu").not($(".mc-side-sub-menu").eq(9)).hide(500);
            //     $(".mc-side-sub-menu").eq(9).toggle(2000);
            // })

            $(".title:contains(Partnership)").on("click",function(){
                $(".side-sub-menu").not($(".side-sub-menu").eq(5)).hide(500);
                $(".side-sub-menu").eq(5).toggle(2000);
            })
            $(".title:contains(Support)").on("click",function(){
                $(".side-sub-menu").not($(".side-sub-menu").eq(6)).hide(500);
                $(".side-sub-menu").eq(6).toggle(2000);
            })


            $(".side-sub-menu li").on("click",function(){
                $(".side-sub-menu li").removeClass("active");
                $(this).addClass("active");
            })


            $(".side-sub-menu li a").hover(function(e){
           /** Remove selected class first **/
           $(".side-sub-menu li a").removeClass("selected");
           /** add selected class on hover**/ 
           $(this).addClass("selected");
            });
        
        });

// $(document).ready(function(){

//     $("a").attr("href");
//     $(".title:contains(Cabinet)").on("click",function(){
//     $(".mc-side-sub-menu").not($(".mc-side-sub-menu").eq(0)).hide(500);
//     $(".mc-side-sub-menu").eq(0).toggle(2000);
    
//     })
// });



