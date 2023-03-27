function storeNoOfAdults() {
    sessionStorage.setItem("No of Adults", document.getElementById("number").value);
}

function storeName() {
    sessionStorage.setItem("Name", document.getElementById("Name").value);
}

function storeFromDate() {
    sessionStorage.setItem("from Date", document.getElementById("fromDate").value);
}

function sum() {
    if (document.getElementById("toDate").value < document.getElementById("fromDate").value) {
        alert("toDate should be greater than fromDate")
        document.getElementById("toDate").value = "";
    }
    var dayDuration = (document.getElementById("toDate").valueAsNumber - document.getElementById("fromDate").valueAsNumber) / (24 * 60 * 60 * 1000);
    var totalAmount = document.getElementById("number").value * 1000 * ((document.getElementById("toDate").valueAsNumber - document.getElementById("fromDate").valueAsNumber) / (24 * 60 * 60 * 1000) + 1);
    document.getElementById("total").value = totalAmount
    sessionStorage.setItem("to Date", document.getElementById("toDate").value)
    sessionStorage.setItem("dayDuration", dayDuration)
    sessionStorage.setItem("totalAmount", totalAmount)
}


function myFunction() {
    myVar = setTimeout(showPage, 3000);


    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        var url = "https://travel-advisor.p.rapidapi.com/photos/list?location_id=304216&currency=USD&limit=50&lang=en_US";
        xhr.open("GET", url);
        xhr.setRequestHeader("X-RapidAPI-Host", "travel-advisor.p.rapidapi.com");
        xhr.setRequestHeader("X-RapidAPI-Key", "6d56d52dd7msh93a4e9d9359610fp149bbdjsn904d321f9246");
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                const resp = JSON.parse(xhr.responseText);
                if (xhr.status === 200) {
                    var output = JSON.parse(xhr.responseText);
                    document.getElementById("block1").innerHTML +=`<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img class="d-block w-100"
                          src="`+ output.data[0].images.small.url +`" alt="First slide">
                      </div>
                      <div class="carousel-item">
                        <img class="d-block w-100" src="`+ output.data[1].images.small.url +`"
                          >
                      </div>
                      <div class="carousel-item">
                        <img class="d-block w-100" src="`+ output.data[2].images.small.url +`"
                          >
                      </div>
                      <div class="carousel-item">
                        <img class="d-block w-100" src="`+ output.data[3].images.small.url +`"
                          >
                      </div>
                      <div class="carousel-item">
                        <img class="d-block w-100" src="`+ output.data[4].images.small.url +`"
                          >
                      </div>
                      <div class="carousel-item">
                        <img class="d-block w-100" src="`+ output.data[5].images.small.url +`"
                          >
                      </div>
                      <div class="carousel-item">
                        <img class="d-block w-100" src="`+ output.data[6].images.small.url +`"
                          >
                      </div>
                      <div class="carousel-item">
                        <img class="d-block w-100" src="`+ output.data[7].images.small.url +`"
                          >
                      </div>
                      <div class="carousel-item">
                        <img class="d-block w-100" src="`+ output.data[8].images.small.url +`"
                          >
                      </div>
                      <div class="carousel-item">
                        <img class="d-block w-100" src="`+ output.data[9].images.small.url +`"
                          >
                      </div>
                      <div class="carousel-item">
                        <img class="d-block w-100" src="`+ output.data[10].images.small.url +`"
                          >
                      </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                    </a>
                  </div>`
                    
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