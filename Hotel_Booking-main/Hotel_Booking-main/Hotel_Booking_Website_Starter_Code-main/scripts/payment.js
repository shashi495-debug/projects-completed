function payNow(){
    if(document.getElementById("loginButton").innerHTML==="LOGOUT")
    alert("hi your booking is successful !!!")
    else
    alert("you need to login first!!!")
}


document.getElementById("dataAboutCustomer").innerHTML= "<p><b><i>Name:</i></b>"+sessionStorage.getItem('Name')+"</p>"+
                                        "<p><b><i>Number of Adults:</i></b>"+sessionStorage.getItem('No of Adults')+"</p>"+
                       "<p><b><i>Check-in Data::</i></b>"+sessionStorage.getItem('from Date')+"</p>"+
              "<p><b><i>Check-out Data::</i></b>"+sessionStorage.getItem('to Date')+"</p>";
document.getElementById("dataAboutAmount").innerHTML= "<p><b><i>Tariff Breakdown:</i></b>Rs 1000 x "+sessionStorage.getItem('No of Adults')+"Adults x "+ sessionStorage.getItem('dayDuration')+ "Nights</p>"+
                                                       "<p><b><i>Total Amount::</i></b>"+sessionStorage.getItem('totalAmount')+"</p>"