$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    pagination:false,
    autoplay: 1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})
// $('.loop').owlCarousel({
//     center: true,
//     items:2,
//     loop:true,
//     margin:10,
//     autoplay:true,
//     autoplayTimeout:1000,
//     autoplayHoverPause:true,
//     responsive:{
//         600:{
//             items:2
//         }
//     }
// });