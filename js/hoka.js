$(function(){
    $("#videoBox").fitVids();
    justBack();
    muiClose();
    slider(".way3Carousel",3,590,35,false,true);
    slider(".humanFlySlider",6,290,20,false,false);
    slider("section.finderContainer ul",3,400,100,false,false);
    slider(".techSlider",1,1840,0,false,false);
    popupOffset(".detailContainer .humanFlySlider li",".detailContainer > div:last-of-type");
    popupOffset(".detailContainer .bx-wrapper + input",".detailContainer > div:last-of-type");
    panelOffset(".detailContainer input[value='View more']",".detailContainer > div:nth-of-type(2)");
    popupControl("footer div input[value='SUBMIT']");
    popupControl(".accountContainer input[value='Add address']");
    popupControl(".returnCenterContainer > div > form > div > input:first-of-type");
    popupControl(".balanceContainer > div:first-of-type > input:last-of-type");
    panelControl("header div input");
    panelControl(".detailContainer input[value='How to find my HOKA size']");
    panelControl("input[value='Add to Cart']");
    justToggle("button.mui");
    justToggle("section.storeContainer > div > div > ul > li")
    parentToggle("footer > div:nth-of-type(2) > div strong");
    parentToggle("footer > div:nth-of-type(2) > ul > li strong");
    parentToggle(".detailContainer ol li span");
    parentToggle(".filterContainer > aside > input[type=button]");
    parentToggle(".detailContainer > div:first-of-type aside > h2");
    parentToggle("section[class*=920p] > aside > button");
    asideFold(".detailContainer > div:first-of-type > aside");
    imgHover(".itemContainer > ul > li > a > img");
    imgHover(".detailContainer > .detailBox + div > ul > li > a > img");
    imgHover(".saleContainer > ul > li > a > img")
    photoPopup("[class*=addPhoto] input[type='button']");
    asideNone("button.mui");
    $(window).resize(autoHeight);
});
function justBack(){
    $(".btnBack").click(function(){
        history.back();
    });
}
function slider(target,maxVal,slideW,slideM,state,pagers){
    $(target).bxSlider({
        maxSlides: maxVal,
        minSlides: 1,
        slideWidth: slideW,
        slideMargin: slideM,
        touchEnabled: state,
        pager: pagers
    });
}
function popupControl(target){
    var currentPopup = null;
    $(target).click(function(){
        currentPopup = "." + $(this).attr("data-popup");
        $(currentPopup).addClass("active");
        $(currentPopup).siblings().removeClass("active");
    });
    $(".btn_close").click(function(){
        $(currentPopup).removeClass("active");
    });
}
function panelControl(target){
    var currentPanel = null;
    $(target).click(function(){
        currentPanel = "." + $(this).attr("data-panel");
        $(currentPanel).addClass("active");
        $(currentPanel).siblings().removeClass("active");
    });
    $(".btn_close").click(function(){
        $(currentPanel).removeClass("active");
    });
}
function justToggle(target){
    $(target).click(function(){
        $(this).toggleClass("active");
        $(this).siblings().removeClass("active");
    });
}
function parentToggle(target){
    $(target).click(function(){
        $(this).parent().toggleClass("active");
        $(this).parent().siblings().removeClass("active");
    });
}
function asideFold(target){
    var scrollFold = $(".detailContainer > div:first-of-type > ul").height() - $(target).height();
    $(window).scroll(function(){
        if($(this).scrollTop() >= scrollFold){
            $(target).addClass("fold");
        }else{
            $(target).removeClass("fold");
        }
    });
}
function imgHover(target){
    $(target).hover(function(){
        $(this).attr("src", $(this).attr("src").replace(".png", "_hover.png"));
    }, function(){
        $(this).attr("src", $(this).attr("src").replace("_hover.png", ".png"));
    });
}
function stepper(target){
    var currentStep = 1;
    var totalSteps = $('.stepper li').length;
    $(target).click(function(){
        if(currentStep <= totalSteps){
            var result = currentStep;
            currentStep++;
            $(this).parent().siblings(".stepper").children('li').eq(result).addClass("active");
            $(".btn_close").click(function(){
                currentStep = 1;
                $("[class=addPhoto01").addClass("active");
                $(".addPhotoPanel > .stepper > li").removeClass("active");
                $(".addPhotoPanel > .stepper > li:first-child").addClass("active");
            });
        }if(currentStep > totalSteps){
            currentStep = 1;
        }
    });
}
function photoPopup(target){
    var currentPopup = null;
    $(target).click(function(){
        currentPopup = "." + $(this).attr("data-popup");
        $(target).parent().siblings().removeClass("active");
        $(currentPopup).addClass("active");
    });
    stepper(target);
}
function autoHeight(){
    var applyVal, target;
    applyVal = $(".detailContainer > div > ul li img").height();
    target = $(".detailContainer > div > ul li video");
    $(target).css("height",applyVal);
}
function muiClose(){
    var mui = $("button.mui");
    $("header div input").click(function(){
        mui.removeClass("active");
    });
}
function popupOffset(target,positionT){
    var currentPopup, yPos;
    currentPopup = null;
    yPos = 0;
    $(target).click(function(){
        currentPopup = "." + $(this).attr("data-popup");
        $(currentPopup).addClass("active");
        $(currentPopup).siblings().removeClass("active");
        yPos = $(positionT).offset().top;
        $(currentPopup).css("top",yPos);
        $(window).resize(function(){
            yPos = $(positionT).offset().top;
            $(currentPopup).css("top",yPos);        
        });
    });
    $(".btn_close").click(function(){
        $(currentPopup).removeClass("active");
    });
}
function panelOffset(target,positionT){
    var currentPanel, yPos;
    currentPanel = null;
    yPos = 0;
    $(target).click(function(){
        currentPanel = "." + $(this).attr("data-panel");
        $(currentPanel).addClass("active");
        $(currentPanel).siblings().removeClass("active");
        yPos = $(positionT).offset().top;
        $(currentPanel).css("top",yPos);
        $(window).resize(function(){
            yPos = $(positionT).offset().top;
            $(currentPanel).css("top",yPos);        
        });
    });
    $(".btn_close").click(function(){
        $(currentPanel).removeClass("active");
    });
}
function asideNone(target){
    var aside, screenWidth;
    aside = $(".detailContainer aside");
    screenWidth = $(window).width();
    $(target).click(function(){
        if($(this).hasClass("active")){
            $(aside).css("display","none");
        }else{
            $(aside).css("display","block");
        }
    });
    $(window).resize(function(){
        screenWidth = $(window).width(); 
        if(screenWidth < 1280){
            $(window).scroll(function(){
                var asideHide, scrollTop;
                asideHide = $(".detailContainer").height() - $("footer").height();
                scrollTop = $(window).scrollTop();
                if(scrollTop >= asideHide){
                    $(aside).css("display","none");
                }else{
                    $(aside).css("display","block");
                }
            });
        }
    });
}