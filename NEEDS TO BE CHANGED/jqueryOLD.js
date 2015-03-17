// var turn = "in";
var focused = false;

// function signInPHP() {
//             // function below will run clear.php?h=michael
//             $.ajax({
//                 type: "GET",
//                 url: "profilepage.inc.php" ,
//                 data: null;
//                 success : function() { 

//                     // here is the code that will run on client side after running clear.php on server

//                     // function below reloads current page
//                     location.reload();

//                 }
//             });
// }

// function togglesign1(){
//     if($('tDROP').attr("href") == "indexProfile.php"){
//         $('tDROP').attr("href", "index.php");
//         $('t4').attr("href", "index.php");        
//     } else{
//         $('tDROP').attr("href", "indexProfile.php");
//         $('t4').attr("href", "indexProfile.php"); 
//     }

// }

// function signOut(){
//         $('#biggesthero').show();
//         $('#new_div').hide();
//         $('#main_section2').hide();
//         $('#top_menu > #inner_menu').hide();
//         $("#t4").text("Sign in");
//         $('#log1').addClass('signin').removeClass('signout');
//         $('#log2').addClass('signin').removeClass('signout');
//         // turn = "in";
// }

// function signOut1(){
//         $('#log2').addClass('signin').removeClass('signout');
// }

// function signIn(){
//         $('#biggesthero').hide();
//         $('#new_div').show();
//         $('#main_section2').show();
//         $('#top_menu > #inner_menu').show();
//         $("#t4").text("Sign out");
//         $('#log1').addClass('signout').removeClass('signin');
//         // turn = "out";
// }

// function signIn1(){
//         $('#log2').addClass('signout').removeClass('signin');
// }

// function togglesign(){
//     if(turn == "in" || turn == "in1"){
//         signIn();
//         if(turn == "in"){
//             turn = "in1";
//         }
//         signIn1();
//         if(turn == "in1"){
//             turn = "out";
//         }
//     } else{
//         signOut();
//         if(turn == "out"){
//             turn = "out1";
//         }
//         signOut1();
//         if(turn == "out1"){
//             turn = "in";
//         }
//     }
// }

function togglesubject(newActive){
    var olditemsId = $('.active').attr("id");
    
    if (olditemsId == "home"){
        olditemsId = 'home span';
    }
    $('#items #'+ olditemsId).hide();
    $('.active').removeClass('active');
    
    $(newActive).addClass('active');
    var itemsId = $(newActive).attr("id");
    if(itemsId == "home"){
        itemsId = "home span";
    }
    $("#items #" + itemsId).show();
}


$(document).ready(function() {
    $('#subjecttabs a li').click(function(){
        togglesubject(this);
    });
    /*$(function() {
    while( $('#heading1span #heading1').height() < $('#heading1span').height() ) {
        $('#heading1span').css('font-size', (parseInt($('#heading1span #heading1').css('font-size')) + 1) + "px");
    }
});*/
    // $('#t4').click(function() {
    //     togglesign();
    // });
    
    // $('#tDROP').click(function() {
    //     togglesign();
    // });
    

});
