$(function(){
    mainInit();
})
function mainInit(){
    // page();
    language();
    header();
    mainProduct();
    breadcrumb();
}


// language

function language(){
    var $lan = $('#header .top-menu .language a')
    var $lanul = $('#header .top-menu .lan');
    
    $lanul.animate({opacity:0},400).hide();
    $lan.on('click',function(){
        $lanul.animate({opacity:1},400).toggle();
    })

}



// header
function header(){
    var $header = $('#header');
    var $gnb = $('#header .nav .gnb');
    var $gnb_a = $('#header .nav .gnb .gnb_a');
    var $gnb_a_a = $('#header .nav .gnb .gnb_a > a');
    var $sub = $('#header .nav .gnb .gnb_a .sub');
    var $top_menu = $('#header .top-menu p a');
    var $top_span = $('#header .top-menu p a span');

    var head = 0, current = 0;
    

    $(window).on('scroll',function(){
        head = $(window).scrollTop();
        if(head>200){
            $header.addClass('on');
            $gnb_a.addClass('on');
            $top_menu.addClass('on');
            $top_span.addClass('on');

        } else{
            $header.removeClass('on');
            $gnb_a.removeClass('on');
            $top_menu.removeClass('on');
            $top_span.removeClass('on');
        }
    })
    

    
    $header.hover(function(){
        $header.addClass('on');
        $gnb_a.addClass('on');
        $top_menu.addClass('on');
        $top_span.addClass('on');
        
    })

    $header.on('mouseleave',function(){
        if(head<200){
        $header.removeClass('on');
        $gnb_a.removeClass('on');
        $top_menu.removeClass('on');
        $top_span.removeClass('on');
        }
    })

    $gnb_a.hover(function(){
        current = $(this).index();

        $header.stop().animate({height:305},400);
        $sub.hide();
        // $gnb_a_a.css({'border':'none'});
        // $gnb_a_a.eq(current).css({'color':'#2f86ed','border-bottom':'2px solid #2f86ed','padding-bottom':36});
        $(this).find('.sub').show();
        $header.addClass('on');
        $gnb_a.addClass('on');
        $gnb_a_a.addClass('on');
    })
    
    $gnb_a.on('mouseleave',function(){
        $header.stop().css({height:90});
        $gnb_a_a.removeClass('on');
    })

}

function mainProduct(){
    var $maskul = $('.product .con .mask ul');
    var $maskli = $('.product .con .mask ul li');

    var $pagingli = $('.product .con .paging li');

    var first='', last='', current=0, old=0, n=0;
    

    $pagingli.click(function(){
        current = $(this).index();
        
        if(current>old){
            n = current - old;
            for(var i=0; i<n; i++){
                first = $('.product .con .mask ul li').first();
                $maskul.append(first);
                $maskli.removeClass('on');
                $maskli.eq(current).addClass('on');

            }
            old = current;
        }else if(current<old){
            n = old - current;
            for(var i=0; i<n; i++){
                last = $('.product .con .mask ul li').last();
                $maskul.prepend(last);
                $maskli.removeClass('on');
                $maskli.eq(current).addClass('on');
            }
            old = current;
        }

        $pagingli.removeClass('on');
        $pagingli.eq(current).addClass('on');
    })

}


function breadcrumb(){
    var $ulli = $('#subvisual .breadcrumb >ul>li>a');
    var $subul = $('#subvisual .breadcrumb >ul>li .subul');

    $subul.css({opacity:0}).hide();

    $ulli.mouseover(function(){
        $subul.mouseover(function(){
            $(this).stop().animate({opacity:1},400).show();
        })
        $(this).siblings('.subul').stop().animate({opacity:1},400).show();

    })
    $ulli.mouseleave(function(){
        $subul.stop().animate({opacity:0},400).hide();

        $subul.mouseleave(function(){
            $(this).stop().animate({opacity:0},400).hide();
        })
    })
    
}


