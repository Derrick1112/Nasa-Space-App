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
    var popup1 = document.getElementById("card-parker");
    var popup2 =  document.getElementById("card-parker-2");
    if(!popup1.classList.contains("show")){
        popup1.classList.toggle("show");
        popup2.classList.toggle("show");
    }

    var probeTitle = document.getElementById("probe-title");
    var probetext = document.getElementById("probe-text");
    var probeUpdates = document.getElementById("Updates-Probe");
    var probeImages = document.getElementById("Updates-img-Probe");

    probeTitle.textContent = "What is the Parker Solar Probe?";
    probetext.textContent="NASA's historic Parker Solar Probe mission is revolutionizing our understanding of the Sun, where changing conditions can propagate out into the solar system, affecting Earth and other worlds. Parker Solar Probe travels through the Sun’s atmosphere, closer to the surface than any spacecraft before it, facing brutal heat and radiation conditions to provide humanity with the closest-ever observations of a star.";

    probeUpdates.textContent = "Latest Updates from Parker Solar Probe";
    probeImages.src = "https://www.nasa.gov/sites/default/files/thumbnails/image/01_wispr-crop.png";

    document.getElementById("probe-img").src = "img/p-parker.png"; 
}

function ChangeToStereoInfo() {
    var popup1 = document.getElementById("card-parker");
    var popup2 =  document.getElementById("card-parker-2");
    if(!popup1.classList.contains("show")){
        popup1.classList.toggle("show");
        popup2.classList.toggle("show");
    }
    var probeTitle = document.getElementById("probe-title");
    var probetext = document.getElementById("probe-text");
    var probeUpdates = document.getElementById("Updates-Probe");
    var probeImages = document.getElementById("Updates-img-Probe");

    probeTitle.textContent = "What is the Stereo Solar Probe?";
    probetext.textContent="STEREO is a solar observation mission. Two nearly identical spacecraft were launched in 2006 into orbits around the Sun that cause them to respectively pull farther ahead of and fall gradually behind the Earth. This enabled stereoscopic imaging of the Sun and solar phenomena, such as coronal mass ejections.";

    probeUpdates.textContent = "Updates from Stereo Solar Probe";
    probeImages.src = "https://www.nasa.gov/sites/default/files/thumbnails/image/20150715_062759_n7eua_171.jpg";

    document.getElementById("probe-img").src = "img/p-stereo.png"; 
}