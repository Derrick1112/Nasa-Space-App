function filterTweetsSolarProbe (){
    $(".block-update-card").not('#parkersolarprobetweet').hide();
    $('.block-update-card').filter('#parkersolarprobetweet').show();
}

function filterTweetsProbe2 (){
    $(".block-update-card").not('#ParkerRevolution').hide();
    $('.block-update-card').filter('#ParkerRevolution').show();
}