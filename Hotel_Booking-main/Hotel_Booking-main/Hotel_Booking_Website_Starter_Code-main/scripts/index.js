let divimages=`<div class="siteImageDiv col-12 col-xs-12 col-sm-12 col-md-6 col-lg-3 " id="firstImageSiteDiv"><a
            href="list.html" onclick="chennaiButton()" target="_self"><img class="siteImages"
              src="https://media-cdn.tripadvisor.com/media/photo-s/15/4d/46/b8/chennai-madras.jpg" /></a>
          <div id="delhicentered">chennai</div>
        </div>
        <div class="siteImageDiv col-12 col-xs-12 col-sm-12 col-md-6 col-lg-3" id="secondImageSiteDiv"><a
        href="list.html" onclick="agraButton()" target="_self"><img class="siteImages" 
          src="https://media-cdn.tripadvisor.com/media/photo-s/15/33/fc/fc/agra.jpg" /></a>
          <div id="goacentered">Agra</div>
        </div>
        <div class="siteImageDiv col-12 col-xs-12 col-sm-12 col-md-6 col-lg-3" id="thirdImageSiteDiv"><a
        href="list.html" onclick="jaipurButton()" target="_self"><img class="siteImages" 
        src="https://media-cdn.tripadvisor.com/media/photo-s/10/a3/3b/8a/screenshot-2017-09-12.jpg" /></a>
          <div id="charminarcentered">Jaipur</div>
        </div>
        <div class="siteImageDiv col-12 col-xs-12 col-sm-12 col-md-6 col-lg-3" id="fourthImageSiteDiv"><a
        href="list.html" onclick="bengaluruButton()" target="_self"><img class="siteImages" id="lastImageSite"
            src="https://media-cdn.tripadvisor.com/media/photo-s/0c/d2/2f/7a/palace-from-the-outside.jpg" /></a>
          <div id="calcuttacentered">Bengaluru</div>
        </div><br></br>`
document.getElementById("row").innerHTML=divimages;        
function popUp() {
  

}
function popUp() {
    if (document.getElementById('row').style.display === "none") {
      document.getElementById('row').style.display = "flex";
      document.getElementById("viewButton").innerHTML = "View less";
      document.getElementById('createSpace').style.display = "block";
    }
    else{
      document.getElementById('row').style.display = "none";
      document.getElementById("viewButton").innerHTML = "View More";
      document.getElementById('createSpace').style.display = "none";
    }
  }

function searchButton(){
  sessionStorage.setItem("placeName",document.getElementById("searchBar").value);
}

function delhiButton(){
  sessionStorage.setItem("placeName","delhi");
}

function goaButton(){
  sessionStorage.setItem("placeName","goa");
}

function charminarButton(){
  sessionStorage.setItem("placeName","charminar");
}

function calcuttaButton(){
  sessionStorage.setItem("placeName","calcutta");
}

function chennaiButton(){
  sessionStorage.setItem("placeName","chennai");
}

function agraButton(){
  sessionStorage.setItem("placeName","agra");
}

function jaipurButton(){
  sessionStorage.setItem("placeName","jaipur");
}

function bengaluruButton(){
  sessionStorage.setItem("placeName","bengaluru");
}