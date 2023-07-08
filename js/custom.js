 $(document).ready(function(){
     $(".menu-btn").click(function(){
         $(".menu-btn").hide();
         $(".menu-x").show();
         $("nav").show();
     });

     $(".menu-x").click(function(){
         $(".menu-btn").show();
         $(".menu-x").hide();
         $("nav").hide();
     });

    
 });

// Review Slider
 $('.owl-carousel').owlCarousel({
            item:3,
            singleItem: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause:true,
            loop: true,
            nav: false,
            responsiveClass: true,
            responsive:{
                0:{
                    items: 1,
                    // dots: false
                },
                767:{
                    items: 2,
                    // dots: false
                },
                991:{
                    items: 3
                }
            }
        });


// Question drop down
const questionItem = document.querySelectorAll(".single-question-section");
Array.from(questionItem).map((questionItem) =>{
    questionItem.addEventListener("click", function(e){
        let rightArrow = questionItem.querySelector("#qright");
        let downArrow = questionItem.querySelector("#qdown");
        let questionLink = questionItem.querySelector(".question-link");
        rightArrow.style.display = "none";
        downArrow.style.display = "block";
        questionLink.style.display = "block";
  
    });     
});


// Footer Item Link drop down
const footerItem = document.querySelectorAll(".footer-s-item");
Array.from(footerItem).map((footerItem) =>{
    footerItem.addEventListener("click", function(e){
        let rightArrow = footerItem.querySelector(".right");
        let downArrow = footerItem.querySelector(".down");
        let itemLink = footerItem.querySelector(".item-link");
        rightArrow.style.display = "none";
        downArrow.style.display = "block";
        itemLink.style.display = "block";
  
    });     
});












