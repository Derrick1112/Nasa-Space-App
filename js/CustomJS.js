function filterTweetsSolarProbe (){
    $(".block-update-card").not('#parkersolarprobetweet').hide();
    $('.block-update-card').filter('#parkersolarprobetweet').show();
}

function filterTweetsProbe2 (){
    $(".block-update-card").not('#ParkerRevolution').hide();
    $('.block-update-card').filter('#ParkerRevolution').show();
}


    /* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function myFunction() {
    var popup1 = document.getElementById("card-parker")
    var popup2 =  document.getElementById("card-parker-2")
    popup1.classList.toggle("show");
    popup2.classList.toggle("show");
}
