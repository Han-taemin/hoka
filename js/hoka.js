$(function(){
    $("#videoBox").fitVids();
    justBack();
    muiClose();
    slider(".way3Carousel",3,590,35,false,true);
    slider(".humanFlySlider",6,290,20,false,false);
    slider("section.finderContainer ul",3,400,100,false,false);
    slider(".techSlider",1,1840,0,false,false);
    popupControl(".detailContainer .humanFlySlider li");
    popupControl(".detailContainer .bx-wrapper + input");
    popupControl("footer div input[value='SUBMIT']");
    popupControl(".accountContainer input[value='Add address']");
    popupControl(".returnCenterContainer > div > form > div > input:first-of-type");
    popupControl(".balanceContainer > div:first-of-type > input:last-of-type");
    panelControl("header div input");
    panelControl(".detailContainer input[value='View more']");
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
    positionOffset(".detailContainer > div:nth-of-type(2)","div.rundownPanel");
    positionOffset(".detailContainer > .detailBox + div + div","[class^=humanFlyPopup]");
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
};
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
};
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
        }
    });
};
function photoPopup(target){
    var currentPopup = null;
    $(target).click(function(){
        currentPopup = "." + $(this).attr("data-popup");
        $(currentPopup).addClass("active");
    });
    stepper(target);
};
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
function positionOffset(position,target){
    var positionY = $(position).offset().top;
    $(target).css("top",positionY);
}