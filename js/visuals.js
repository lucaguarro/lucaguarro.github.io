document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// function openNav() {
//     document.getElementById("side-nav-closed").style.display = "none";
//     document.getElementById("side-nav-open").style.display = "block";
// }

// function closeNav() {
//     document.getElementById("side-nav-closed").style.display = "block";
//     document.getElementById("side-nav-open").style.display = "none";
// }

// $(".project").hover(
// function(){
//   $(this).filter(':not(:animated)').animate({
//      marginLeft:'9px'
//   },'slow');
// // This only fires if the row is not undergoing an animation when you mouseover it
// },
// function() {
//   $(this).animate({
//      marginLeft:'0px'
//   },'slow');
// });

// $(function(){
//     $('.project').hover(
//         function(){
//         $(this).filter(':not(:animated)').animate({
//         },'fast');
//         // This only fires if the row is not undergoing an animation when you mouseover it
//         },
//         function() {
//         $(this).animate({

//         },'fast');
//         });
// });