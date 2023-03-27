var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);


  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    var url = "https://travel-advisor.p.rapidapi.com/locations/search?query=" + sessionStorage.getItem('placeName') + "&limit=30&offset=0&units=km&location_id=1&currency=USD&sort=relevance&lang=en_US";
    xhr.open("GET", url);
    xhr.setRequestHeader("X-RapidAPI-Host", "travel-advisor.p.rapidapi.com");
    xhr.setRequestHeader("X-RapidAPI-Key", "6d56d52dd7msh93a4e9d9359610fp149bbdjsn904d321f9246");
    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        const resp = JSON.parse(xhr.responseText);
        if (xhr.status === 200) {
          var output = JSON.parse(xhr.responseText);
          output.data.map((e) => {
            document.getElementById("siteImages").innerHTML +=
              `<div class="imageWithData" id="pic1" class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <div class="siteImagesDiv">
              <a href="detail.html" target="_self" onclick="hotelId()">
                <img class="siteImages" id="list-view"
                  src="` + e.result_object.photo.images.small.url + `"/>
              </a>
            </div>
            <div class="hotelInfo">
              <a href="detail.html" target="_self" onclick="hotelId()">
                <h3>`+ e.result_object.name + `</h3>
                <p><span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                </p>
                <p>`+ e.result_object.location_string + `</p>
              </a>
            </div>
          </div>`;

          })
          
          resolve(resp);
        } else {
          reject(
            JSON.stringify({
              error: "Failed to GET cities for " + country,
            })
          );
        }
      }
    };
  });
}

if (typeof exports !== "undefined") {
  module.exports = {
    enterTheCode,
  };
}

function hotelId(){
  sessionStorage.setItem("hotel_Id",3042168)
}