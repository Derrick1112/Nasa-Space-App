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
    var probeInfo1 = document.getElementById("info-probe-1");
    var probeInfo2 = document.getElementById("info-probe-2");
    var probeInfo3 = document.getElementById("info-probe-3");
    var twt1 = document.getElementById("tweetbtn1");
    var twt2 = document.getElementById("tweetbtn2");
    var tweetimg1 = document.getElementById("tweetimg1");
    var tweetname1 = document.getElementById("tweetname1");
    var tweetcontent1 = document.getElementById("tweetcontent1");
    var tweetimg2 = document.getElementById("tweetimg2");
    var tweetname2 = document.getElementById("tweetname2");
    var tweetcontent2 = document.getElementById("tweetcontent2");
    var tweetimg3 = document.getElementById("tweetimg3");
    var tweetname3 = document.getElementById("tweetname3");
    var tweetcontent3 = document.getElementById("tweetcontent3");

    probeTitle.textContent = "What is the Parker Solar Probe?";
    probetext.textContent="NASA's historic Parker Solar Probe mission is revolutionizing our understanding of the Sun, where changing conditions can propagate out into the solar system, affecting Earth and other worlds. Parker Solar Probe travels through the Sun’s atmosphere, closer to the surface than any spacecraft before it, facing brutal heat and radiation conditions to provide humanity with the closest-ever observations of a star.";
    probeInfo1.innerHTML  = "<strong>30/9/2021-5:00AM</strong> - Parker has reported odd solar winds. Cell towers may be affected!";
    probeInfo2.innerHTML  ="<strong>30/9/2021-10:00AM</strong> - Maintanence work ongoing!";
    probeInfo3.innerHTML  = "<strong>30/9/2021-1:00PM</strong> - Successful Ninth Solar Flyby for Parker Solar Probe";
    twt1.innerText = "#ParkerSolarProbe";
    twt2.innerHTML = "#Parker";
    tweetimg1.src = "https://pbs.twimg.com/profile_images/1409429964710105089/-ZI94Ari_400x400.jpg";
    tweetname1.innerHTML = "<strong>Lando Norris</strong> @landoNorris";
    tweetcontent1.innerText = "The #ParkerSolarProbe is such a magnificient sight!";
    tweetimg2.src = "https://dazedimg-dazedgroup.netdna-ssl.com/640/azure/dazed-prod/1300/6/1306452.jpg";
    tweetname2.innerHTML = "<strong>James Charles</strong> @jCharles";
    tweetcontent2.innerText = "Watch out! Solar winds were detected recently! #ParkerSolarProbe";
    tweetimg3.src = "https://cdn.vox-cdn.com/thumbor/f-kLehFRin8YfrmLC9GVERuQTPg=/0x0:2530x3354/1200x800/filters:focal(882x1220:1286x1624)/cdn.vox-cdn.com/uploads/chorus_image/image/69295916/1309409409.0.jpg";
    tweetname3.innerHTML = "<strong>Jake Paul</strong> @JPaul";
    tweetcontent3.innerText = "Did you know? Today was the first day #ParkerSolarProbe orbitted the sun! #ParkerRevolution";

    probeUpdates.textContent = "Latest Updates from Parker Solar Probe";
    probeImages.src = "https://www.nasa.gov/sites/default/files/thumbnails/image/01_wispr-crop.png";

    //document.getElementById("probe-img").src = "../img/p-parker.png"; 
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
    var probeInfo1 = document.getElementById("info-probe-1");
    var probeInfo2 = document.getElementById("info-probe-2");
    var probeInfo3 = document.getElementById("info-probe-3");
    var twt1 = document.getElementById("tweetbtn1");
    var twt2 = document.getElementById("tweetbtn2");
    var tweetimg1 = document.getElementById("tweetimg1");
    var tweetname1 = document.getElementById("tweetname1");
    var tweetcontent1 = document.getElementById("tweetcontent1");
    var tweetimg2 = document.getElementById("tweetimg2");
    var tweetname2 = document.getElementById("tweetname2");
    var tweetcontent2 = document.getElementById("tweetcontent2");
    var tweetimg3 = document.getElementById("tweetimg3");
    var tweetname3 = document.getElementById("tweetname3");
    var tweetcontent3 = document.getElementById("tweetcontent3");

    probeTitle.textContent = "What is the Stereo Solar Probe?";
    probetext.textContent="STEREO is a solar observation mission. Two nearly identical spacecraft were launched in 2006 into orbits around the Sun that cause them to respectively pull farther ahead of and fall gradually behind the Earth. This enabled stereoscopic imaging of the Sun and solar phenomena, such as coronal mass ejections.";
    probeInfo1.innerHTML  = "<strong>30/9/2021-5:00AM</strong> - Parker has reported odd solar winds. Cell towers may be affected!";
    probeInfo2.innerHTML  ="<strong>30/9/2021-10:00AM</strong> - Maintanence work ongoing!";
    probeInfo3.innerHTML  = "<strong>30/9/2021-1:00PM</strong> - Successful Ninth Solar Flyby for Parker Solar Probe";
    twt1.innerText = "#StereoSolarProbe";
    twt2.innerHTML = "#Stereo-A";
    tweetimg1.src = "https://wallpapercave.com/wp/wp4291526.jpg";
    tweetname1.innerHTML = "<strong>Jack Black</strong> @JBlinsky";
    tweetcontent1.innerText = "This Satellite is on fire #Stereo-A";
    tweetimg2.src = "https://wallpapercave.com/wp/wp1944266.jpg";
    tweetname2.innerHTML = "<strong>Chris Pratt</strong> @PrattFrat";
    tweetcontent2.innerText = "Wife and I just looked at #Stereo-A pretty cool";
    tweetimg3.src = "https://wallpapercave.com/uwp/uwp1091760.jpeg";
    tweetname3.innerHTML = "<strong>Taylor Swift</strong> @liltay";
    tweetcontent3.innerText = "Oh my god the images from Stereo look so cool #Stereo-A";

    probeUpdates.textContent = "Updates from Stereo Solar Probe";
    probeImages.src = "https://www.nasa.gov/sites/default/files/thumbnails/image/20150715_062759_n7eua_171.jpg";

    document.getElementById("probe-img").src = "../img/p-stereo.png"; 
}

function ChangeToOsirisInfo() {
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
    var probeInfo1 = document.getElementById("info-probe-1");
    var probeInfo2 = document.getElementById("info-probe-2");
    var probeInfo3 = document.getElementById("info-probe-3");
	//var probeImg = document.getElementById("probe-img");

	//probeImg.src = "../img/p-osiris.png";
    probeTitle.textContent = "What is the OSIRIS-REx?";
    probetext.textContent="Launched on Sept. 8, 2016, the Origins, Spectral Interpretation, Resource Identification, Security-Regolith Explorer (OSIRIS-REx) spacecraft traveled to a near-Earth asteroid called Bennu (formerly 1999 RQ36), and collected a sample of the of rocks and material from the surface that it will return to Earth in 2023. The mission will help scientists investigate how planets formed and how life began, as well as improve our understanding of asteroids that could impact Earth.";
    probeInfo1.innerHTML  = "<strong>Jun 04, 2021</strong> - NASA’s OSIRIS-REx spacecraft is 328,000 miles, or 528,000 kilometers, away from the asteroid Bennu, having fired its engines on May 10 to initiate a return trip to Earth. The spacecraft is on track to deliver an asteroid sample to Earth on September 24, 2023.";
    probeInfo2.innerHTML  ="<strong>Mar 29, 2021</strong> - The OSIRIS-REx spacecraft continues to slowly approach asteroid Bennu – traveling approximately 6 cm/s – and is currently about 30 km from the asteroid.";
    probeInfo3.innerHTML  = "<strong>Mar 15, 2021</strong> - OSIRIS-REx continues operating in the Post-TAG Observation phase, as the spacecraft journeys back to Bennu for the Apr. 7 final flyover. On Mar. 6, the spacecraft successfully executed the second propulsive maneuver of 34 cm/s to adjust course as OSIRIS-REx approaches the asteroid. The next maneuver is scheduled for Mar. 20.";

    probeUpdates.textContent = "Updates from OSIRIS-REx";
    probeImages.src = "https://www.nasa.gov/sites/default/files/thumbnails/image/twelve-image_polycam_mosaic_12-2-18.png";

    document.getElementById("probe-img").src = "../img/p-osiris.png"; 
}
