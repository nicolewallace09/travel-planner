// Disable previous days in calender variable
var minDate = new Date();

// // Calender Start
$(document).ready(function () {
  $(".datepicker-start").datepicker({
    minDate: minDate,
    firstDay: 1,
  });
});

// Calender End
$(document).ready(function () {
  $(".datepicker-end").datepicker({
    minDate: minDate,
    firstDay: 1,
  });
});

// Mobile Navi
$(document).ready(function () {
  $(".sidenav").sidenav();
});

// Carousel
$(document).ready(function () {
  $(".carousel.carousel-slider").carousel();
  setInterval(function () {
    $(".carousel.carousel-slider").carousel("next");
  }, 5000);

  $(".carousel.carousel-slider").carousel({
    indicators: true,
    fullWidth: true,
  });
});

//global variables

//input form elements
var userFormEl = document.querySelector("#valueinputform");
var valueinputformEl = document.querySelector("#valueinputform");
var submitButtonEl = document.querySelector("#search-button");
var startdatepickerinputEl = document.querySelector("#datepicker-start-id");
var enddatepickerinputEl = document.querySelector("#datepicker-end-id");
var fromLocationInputIdEl = document.querySelector("#from-location-input-id");
var toLocationInputIdEl = document.querySelector("#to-location-input-id");

var outboundDate1El = document.querySelector("#outbounddate1");
var outboundDate2El = document.querySelector("#outbounddate2");
var outboundDate3El = document.querySelector("#outbounddate3");

var inbounddate1El = document.querySelector("#inbounddate1");
var inbounddate2El = document.querySelector("#inbounddate2");
var inbounddate3El = document.querySelector("#inbounddate3");

var origin1El = document.querySelector("#origin1");
var origin2El = document.querySelector("#origin2");
var origin3El = document.querySelector("#origin3");

var destination1El = document.querySelector("#destination1");
var destination2El = document.querySelector("#destination2");
var destination3El = document.querySelector("#destination3");

var airlinecode1El = document.querySelector("#airlinecode1");
var airlinecode2El = document.querySelector("#airlinecode2");
var airlinecode3El = document.querySelector("#airlinecode3");

var price1El = document.querySelector("#price1");
var price2El = document.querySelector("#price2");
var price3El = document.querySelector("#price3");

var direct1El = document.querySelector("#direct1");
var direct2El = document.querySelector("#direct2");
var direct3El = document.querySelector("#direct3");

var directFlightIconEl1 = document.querySelector("#direct-flight-icon1");
var directFlightIconEl2 = document.querySelector("#direct-flight-icon2");
var directFlightIconEl3 = document.querySelector("#direct-flight-icon3");

var showHiddenEl = document.querySelector("#hidden");

var flight1buttonEl = document.querySelector("#flight1button");
var flight2buttonEl = document.querySelector("#flight2button");
var flight3buttonEl = document.querySelector("#flight3button");

// Links hotel names to index
var hotelID1El = document.querySelector("#hotelID1");
var hotelID2El = document.querySelector("#hotelID2");
var hotelID3El = document.querySelector("#hotelID3");
// Link hotel stars to index
var hotelStars1El = document.querySelector("#hotelStars1");
var hotelStars2El = document.querySelector("#hotelStars2");
var hotelStars3El = document.querySelector("#hotelStars3");
// Links hotel prices to index
var hotelPrice1El = document.querySelector("#hotelPrice1");
var hotelPrice2El = document.querySelector("#hotelPrice2");
var hotelPrice3El = document.querySelector("#hotelPrice3");

// Hotel buttons
var hotel1buttonEl = document.querySelector("#hotel1button");
var hotel2buttonEl = document.querySelector("#hotel2button");
var hotel3buttonEl = document.querySelector("#hotel3button");

//flight 1 arrays for local storage
var startDateArrayFlight1 = [];
var endDateArrayFlight1 = [];
var fromLocationArrayFlight1 = [];
var toLocationArrayFlight1 = [];
var carrierArrayFlight1 = [];
var priceArrayFlight1 = [];
var directArrayFlight1 = [];

//flight 2 arrays for local storage
var startDateArrayFlight2 = [];
var endDateArrayFlight2 = [];
var fromLocationArrayFlight2 = [];
var toLocationArrayFlight2 = [];
var carrierArrayFlight2 = [];
var priceArrayFlight2 = [];
var directArrayFlight2 = [];

//flight 3 arrays for local storage
var startDateArrayFlight3 = [];
var endDateArrayFlight3 = [];
var fromLocationArrayFlight3 = [];
var toLocationArrayFlight3 = [];
var carrierArrayFlight3 = [];
var priceArrayFlight3 = [];
var directArrayFlight3 = [];

// Hotel 1 arrays for local storage
var nameArrayHotel1 = [];
var starsArrayHotel1 = [];
var priceArrayHotel1 = [];

// Hotel 2 arrays for local storage
var nameArrayHotel2 = [];
var starsArrayHotel2 = [];
var priceArrayHotel2 = [];

// Hotel 3 arrays for local storage
var nameArrayHotel3 = [];
var starsArrayHotel3 = [];
var priceArrayHotel3 = [];

//variables used further down in the code
var formattedEndDate;
var fromLocation;
var carrierName1;
var carrierName2;
var carrierName3;
var minPrice1;
var minPrice2;
var minPrice3;
var directFlight1;
var directFlight2;
var directFlight3;

var hotelID1;
var hotelID2;
var hotelID3;

var hotelStars1;
var hotelStars2;
var hotelStars3;

var hotelPrice1;
var hotelPrice2;
var hotelPrice3;

//this function passes the input data to the function
var formSubmitHandler = function (event) {
  event.preventDefault();

  //get the value from the startDate field
  startDate = startdatepickerinputEl.value.trim();
  // console.log("startDate " + startDate);

  //format the startDate field into the format that API needs
  formattedStartDate = moment(startDate).format("YYYY-MM-DD");
  // console.log("formattedStartDate " + formattedStartDate);

  //get the value from the endDate field
  endDate = enddatepickerinputEl.value.trim();
  // console.log(endDate);

  //format the endDate field into the format that API needs
  formattedEndDate = moment(endDate).format("YYYY-MM-DD");
  // console.log("formattedEndDate " + formattedEndDate);

  //get the value of the fromLocation
  fromLocation = fromLocationInputIdEl.value.trim();
  // console.log(fromLocation);

  //get the value of the toLocation
  toLocation = toLocationInputIdEl.value.trim();
  // console.log(toLocation);

  if (formattedStartDate && formattedEndDate && fromLocation && toLocation) {
    //to call the functions if the data above was input
    getFlightData();
    getHotelData();

    //to clear the input form field after submit
    startdatepickerinputEl.value = "";
    enddatepickerinputEl.value = "", 
    fromLocationInputIdEl.value = "";
    toLocationInputIdEl.value = "";
  } else {
    $(document).ready(function () {
      $("#data-entry-modal").modal();
      $("#data-entry-modal").modal("open");
    });
  }
  // console.log(event);
};

//function to get flight data

var getFlightData = function () {

  //skyScannerSearchUrl   
  var skyScannerSearchUrl =
    "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/" + fromLocation + "/" + toLocation + "/" + formattedStartDate + "?inboundpartialdate=" + formattedEndDate;

  //fetch call
  fetch(skyScannerSearchUrl, {
    method: "GET",
    headers: {
      "x-rapidapi-host":
        "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
      "x-rapidapi-key": "5748a536b5mshfe885049fe60f17p14f38fjsn322ccf2c0aa7",
    },
  })
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (jsonResponse) {
          console.log(jsonResponse);

          //conditionality to handle an empty response from the API and show a message to the user that different data needs to be entered
          quotesArray = [];
          var quotesArrayCheck = jsonResponse.Quotes[0];
          // console.log("quotesArrayCheck" + quotesArrayCheck);
          quotesArray.push(quotesArrayCheck);
          // console.log(quotesArray);

          //error handling in case the api returns no data
          if (quotesArray[0] === undefined) {
            $(document).ready(function () {
              $("#city-date-modal").modal();
              $("#city-date-modal").modal("open");
            });
          } 
          else {
            //get outBoundDates for the Quotes
            var outBoundDate1 =
              jsonResponse.Quotes[0].OutboundLeg.DepartureDate;
            // console.log(outBoundDate1);
            var outBoundDate1Formatted = moment(outBoundDate1).format(
              "YYYY-MM-DD"
            );
            // console.log("outBoundDate1Formatted " + outBoundDate1Formatted);

            if (jsonResponse.Quotes.length > 1) {
              var outBoundDate2 =
                jsonResponse.Quotes[1].OutboundLeg.DepartureDate;
              // console.log(outBoundDate2);
              var outBoundDate2Formatted = moment(outBoundDate2).format(
                "YYYY-MM-DD"
              );
              // console.log("outBoundDate2Formatted " + outBoundDate2Formatted);
            }

            if (jsonResponse.Quotes.length > 2) {
              var outBoundDate3 =
                jsonResponse.Quotes[2].OutboundLeg.DepartureDate;
              // console.log(outBoundDate3);
              var outBoundDate3Formatted = moment(outBoundDate3).format(
                "YYYY-MM-DD"
              );
              // console.log("outBoundDate3Formatted " + outBoundDate3Formatted);
            }

            //get inboundDates for the Quotes

            //get originCityName from the jsonResponse
            var originCityName = jsonResponse.Places[1].CityName;
            // console.log(originCityName);

            //get destinationCityName from the jsonResponse
            var destinationCityName = jsonResponse.Places[0].CityName;
            // console.log(destinationCityName);

            //get 3 carriers from the jsonResponse
            var carrierID1 = jsonResponse.Quotes[0].OutboundLeg.CarrierIds[0];
            // console.log("carrierID1 " + carrierID1);

            if (jsonResponse.Quotes.length > 1) {
            var carrierID2 = jsonResponse.Quotes[1].OutboundLeg.CarrierIds[0];
            // console.log("carrierID2 " + carrierID2);
            }

            if (jsonResponse.Quotes.length > 2) {
            var carrierID3 = jsonResponse.Quotes[2].OutboundLeg.CarrierIds[0];
            // console.log("carrierID3 " + carrierID3);
            }

            //get places(airports codes)
            var destinationID1 = jsonResponse.Quotes[0].OutboundLeg.DestinationId;
            // console.log("destinationID1 " + destinationID1);

            if (jsonResponse.Quotes.length > 1) {
            var destinationID2 = jsonResponse.Quotes[1].OutboundLeg.DestinationId;
            // console.log("destinationID2 " + destinationID2);
            }

            if (jsonResponse.Quotes.length > 2) {
            var destinationID3 = jsonResponse.Quotes[2].OutboundLeg.DestinationId;
            // console.log("destinationID3 " + destinationID3);
            }


            //match up the places ID with the Quote Place ID
            var destinationAirportCode1;
            var destinationAirportCode2;
            var destinationAirportCode3;

            for (var i = 0; i < jsonResponse.Places.length; i++) {
              var destinationAirportCodes = jsonResponse.Places[i];
            //   console.log(destinationAirportCodes);
              if (destinationID1 === destinationAirportCodes.PlaceId) {
                destinationAirportCode1 = destinationAirportCodes.IataCode;
                // console.log("destinationAirportCode1 " + destinationAirportCode1);
              }
              if (destinationID2 === destinationAirportCodes.PlaceId) {
                destinationAirportCode2 = destinationAirportCodes.IataCode;
                // console.log("destinationAirportCode2 " + destinationAirportCode2);
              }
              if (destinationID3 === destinationAirportCodes.PlaceId) {
                destinationAirportCode3 = destinationAirportCodes.IataCode;
                // console.log("destinationAirportCode3 " + destinationAirportCode3);
              }
            }

            //get the 3 quote min prices from the jsonResponse
            minPrice1 = jsonResponse.Quotes[0].MinPrice;
            // console.log("$" + minPrice1);
            minPrice2 = jsonResponse.Quotes[1].MinPrice;
            // console.log("$" + minPrice2);

            minPrice3 = jsonResponse.Quotes[2].MinPrice;
            // console.log("$" + minPrice3);

            //match up the carrier ID with the Carrier Name
            carrierName1;
            carrierName2;
            carrierName3;

            for (var i = 0; i < jsonResponse.Carriers.length; i++) {
              var carriers = jsonResponse.Carriers[i];
              // console.log(carriers);
              if (carrierID1 === carriers.CarrierId) {
                carrierName1 = carriers.Name;
                // console.log("carrierName1 " + carrierName1);
              }
              if (carrierID2 === carriers.CarrierId) {
                carrierName2 = carriers.Name;
                // console.log("carrierName2 " + carrierName2);
              }
              if (carrierID3 === carriers.CarrierId) {
                carrierName3 = carriers.Name;
                // console.log("carrierName3 " + carrierName3);
              }
            }

            //get direct flight data
            directFlight1 = jsonResponse.Quotes[0].Direct;
            // console.log(directFlight1);

            //conditionality to show and hide checkbox based on the flight being direct or not
            if (directFlight1) {
              directFlightIconEl1.setAttribute("src", "./assets/images/checked_checkbox.png");
            } else {
              directFlightIconEl1.setAttribute("src", "./assets/images/unchecked-checkbox.png");
            }

            directFlight2 = jsonResponse.Quotes[1].Direct;
            // console.log(directFlight2);
            if (directFlight2) {
              directFlightIconEl2.setAttribute("src", "./assets/images/checked_checkbox.png");
            } else {
              directFlightIconEl2.setAttribute("src", "./assets/images/unchecked-checkbox.png");
            }

            directFlight3 = jsonResponse.Quotes[2].Direct;
            // console.log(directFlight3);
            if (directFlight3) {
              directFlightIconEl3.setAttribute("src", "./assets/images/checked_checkbox.png");
            } else {
              directFlightIconEl3.setAttribute("src", "./assets/images/unchecked-checkbox.png");
            }


            //Display data on the main page

            direct1El.innerHTML = "Direct Flight: ";
            direct2El.innerHTML = "Direct Flight: ";
            direct3El.innerHTML = "Direct Flight: ";

            outboundDate1El.innerHTML = "Outbound: " + outBoundDate1Formatted;
            outboundDate2El.innerHTML = "Outbound: " + outBoundDate2Formatted;
            outboundDate3El.innerHTML = "Outbound: " + outBoundDate3Formatted;

            inbounddate1El.innerHTML = "Inbound: " + formattedEndDate;
            inbounddate2El.innerHTML = "Inbound: " + formattedEndDate;
            inbounddate3El.innerHTML = "Inbound: " + formattedEndDate;

            origin1El.innerHTML = "Origin: " + originCityName + " " + "(" + fromLocation + ")";
            origin2El.innerHTML = "Origin: " + originCityName + " " + "(" + fromLocation + ")";
            origin3El.innerHTML = "Origin: " + originCityName + " " + "(" + fromLocation + ")";

            destination1El.innerHTML = "Destination: " + destinationCityName + " " + "(" + destinationAirportCode1 + ")";
            destination2El.innerHTML = "Destination: " + destinationCityName + " " + "(" + destinationAirportCode2 + ")";
            destination3El.innerHTML = "Destination: " + destinationCityName + " " + "(" + destinationAirportCode3 + ")";

            airlinecode1El.innerHTML = "Carrier: " + carrierName1;
            airlinecode2El.innerHTML = "Carrier: " + carrierName2;
            airlinecode3El.innerHTML = "Carrier: " + carrierName3;

            price1El.innerHTML = "Price: $" + minPrice1;
            price2El.innerHTML = "Price: $" + minPrice2;
            price3El.innerHTML = "Price: $" + minPrice3;

            //this will remove the class that was defaulted from the HTML file so that the data placeholders show up
            showHiddenEl.classList.remove("hidden");
          }
        });
      } else {
        $(document).ready(function () {
          $("#generic-error-modal").modal();
          $("#generic-error-modal").modal("open");
          document.getElementById("generic-error-modal-p").innerHTML =
            "Error: " + response.statusText;
        });
      }
    })
    .catch(function (error) {
      $(document).ready(function () {
        $("#flight-error-modal").modal();
        $("#flight-error-modal").modal("open");
      });
    });
};

//function to Flight 1 data on button click to localStorage
var saveFlight1ToMyTrip = function (event) {
  // console.log(event);

  //push selected startDate into the startDateArray
  startDateArrayFlight1.push(formattedStartDate);
  //set the startDate to the localStorage
  localStorage.setItem("startDateFlight1", JSON.stringify(startDateArrayFlight1));

  // //push selected endDate into the endDateArray
  endDateArrayFlight1.push(formattedEndDate);
  //set the endDate to the localStorage
  localStorage.setItem("endDateFlight1", JSON.stringify(endDateArrayFlight1));

  //push selected fromLocation into the fromLocationArray
  fromLocationArrayFlight1.push(fromLocation);
  //set the fromLocation to the localStorage
  localStorage.setItem("fromLocationFlight1", JSON.stringify(fromLocationArrayFlight1));

  //push selected toLocation into the toLocationArray
  toLocationArrayFlight1.push(toLocation);
  //set the toLocation to the localStorage
  localStorage.setItem("toLocationFlight1",JSON.stringify(toLocationArrayFlight1));

  //push carrier info into the carrierArray and then save to localStorage
  carrierArrayFlight1.push(carrierName1);
  localStorage.setItem("carrierFlight1", JSON.stringify(carrierArrayFlight1));

  //push price info into the priceArray and then save to localStorage
  priceArrayFlight1.push(minPrice1);
  localStorage.setItem("priceFlight1", JSON.stringify(priceArrayFlight1));

  //push direct info into the directArray and then save to localStorage
  directArrayFlight1.push(directFlight1);
  localStorage.setItem("directFlight1", JSON.stringify(directArrayFlight1));
};

//function to save Flight 2 data on button click to localStorage
var saveFlight2ToMyTrip = function (event) {
  // console.log(event);

  //push selected startDate into the startDateArray
  startDateArrayFlight2.push(formattedStartDate);
  //set the startDate to the localStorage
  localStorage.setItem("startDateFlight2", JSON.stringify(startDateArrayFlight2));

  // //push selected endDate into the endDateArray
  endDateArrayFlight2.push(formattedEndDate);
  //set the endDate to the localStorage
  localStorage.setItem("endDateFlight2", JSON.stringify(endDateArrayFlight2));

  //push selected fromLocation into the fromLocationArray
  fromLocationArrayFlight2.push(fromLocation);
  //set the fromLocation to the localStorage
  localStorage.setItem("fromLocationFlight2", JSON.stringify(fromLocationArrayFlight2));

  //push selected toLocation into the toLocationArray
  toLocationArrayFlight2.push(toLocation);
  //set the toLocation to the localStorage
  localStorage.setItem("toLocationFlight2", JSON.stringify(toLocationArrayFlight2));

  //push carrier info into the carrierArray and then save to localStorage
  carrierArrayFlight2.push(carrierName2);
  localStorage.setItem("carrierFlight2", JSON.stringify(carrierArrayFlight2));

  //push price info into the priceArray and then save to localStorage
  priceArrayFlight2.push(minPrice2);
  localStorage.setItem("priceFlight2", JSON.stringify(priceArrayFlight2));

  //push direct info into the directArray and then save to localStorage
  directArrayFlight2.push(directFlight2);
  localStorage.setItem("directFlight2", JSON.stringify(directArrayFlight2));
};

//function to save Flight 3 data on button click to localStorage
var saveFlight3ToMyTrip = function (event) {
  // console.log(event);

  //push selected startDate into the startDateArray
  startDateArrayFlight3.push(formattedStartDate);
  //set the startDate to the localStorage
  localStorage.setItem("startDateFlight3",JSON.stringify(startDateArrayFlight3));

  // //push selected endDate into the endDateArray
  endDateArrayFlight3.push(formattedEndDate);
  //set the endDate to the localStorage
  localStorage.setItem("endDateFlight3", JSON.stringify(endDateArrayFlight3));

  //push selected fromLocation into the fromLocationArray
  fromLocationArrayFlight3.push(fromLocation);
  //set the fromLocation to the localStorage
  localStorage.setItem("fromLocationFlight3", JSON.stringify(fromLocationArrayFlight3));

  //push selected toLocation into the toLocationArray
  toLocationArrayFlight3.push(toLocation);
  //set the toLocation to the localStorage
  localStorage.setItem("toLocationFlight3", JSON.stringify(toLocationArrayFlight3));

  //push carrier info into the carrierArray and then save to localStorage
  carrierArrayFlight3.push(carrierName3);
  localStorage.setItem("carrierFlight3", JSON.stringify(carrierArrayFlight3));

  //push price info into the priceArray and then save to localStorage
  priceArrayFlight3.push(minPrice3);
  localStorage.setItem("priceFlight3", JSON.stringify(priceArrayFlight3));

  //push direct info into the directArray and then save to localStorage
  directArrayFlight3.push(directFlight3);
  localStorage.setItem("directFlight3", JSON.stringify(directArrayFlight3));
};

//function to get hotel data
var getHotelData = function () {

    //hotel search URL
    var hotelSearchUrl2 = "https://engine.hotellook.com/api/v2/cache.json?location=" + toLocation + "&checkIn=" + formattedStartDate + "&checkOut=" + formattedEndDate + "&currency=usd&limit=3&token=065c3b8c9e2bb6252bf699eacc8fd32c";

    //fetch request
    fetch(hotelSearchUrl2)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (jsonResponse) {
          console.log(jsonResponse);

          //get hotel Name from the jsonResponse
          hotelID1 = jsonResponse[0].hotelName;
          hotelID2 = jsonResponse[1].hotelName;
          hotelID3 = jsonResponse[2].hotelName;
          // console.log(hotelID1, hotelID2, hotelID3);


          //get hotel Stars from the jsonResponse
          hotelStars1 = jsonResponse[0].stars;
          hotelStars2 = jsonResponse[1].stars;
          hotelStars3 = jsonResponse[2].stars;
          // console.log(hotelStars1, hotelStars2, hotelStars3);


          //get hotel Price from the jsonResponse
          hotelPrice1 = jsonResponse[0].priceAvg;
          hotelPrice2 = jsonResponse[1].priceAvg;
          hotelPrice3 = jsonResponse[2].priceAvg;
          // console.log(hotelPrice1, hotelPrice2, hotelPrice3);

          //display hotel data on the page
          hotelID1El.innerHTML = "Hotel Name: " + hotelID1;
          hotelID2El.innerHTML = "Hotel Name: " + hotelID2;
          hotelID3El.innerHTML = "Hotel Name: " + hotelID3;

          hotelStars1El.innerHTML = "Stars: " + hotelStars1;
          hotelStars2El.innerHTML = "Stars: " + hotelStars2;
          hotelStars3El.innerHTML = "Stars: " + hotelStars3;

          hotelPrice1El.innerHTML = "Price: " + "$" + hotelPrice1;
          hotelPrice2El.innerHTML = "Price: " + "$" + hotelPrice2;
          hotelPrice3El.innerHTML = "Price: " + "$" + hotelPrice3;
        });
      } else {
        $(document).ready(function () {

        //modal to show errors
          $("#generic-error-modal").modal();
          $("#generic-error-modal").modal("open");
          document.getElementById("generic-error-modal-p").innerHTML =
            "Error: " + response.statusText;
        });
      }
    })
    .catch(function (error) {
      $(document).ready(function () {
        $("#hotel-error-modal").modal();
        $("#hotel-error-modal").modal("open");
      });
    });
};


//function to save hotel1 data to my trip
var saveHotel1ToMyTrip = function (event) {
  //push hotel name into the hotelArrayName1
  nameArrayHotel1.push(hotelID1);
  // set the hotel name to the localStorage
  localStorage.setItem("nameArrayHotel1", JSON.stringify(nameArrayHotel1));

  // push hotel stars into the hotelArrayStars1
  starsArrayHotel1.push(hotelStars1);
  // set the hotel stars to the localStorage
  localStorage.setItem("starsArrayHotel1", JSON.stringify(starsArrayHotel1));

  // push hotel price into the hotelArrayPrice1
  priceArrayHotel1.push("$" + hotelPrice1);
  // set the hotel name to the localStorage
  localStorage.setItem("priceArrayHotel1", JSON.stringify(priceArrayHotel1));
};


//function to save hotel2 data to my trip
var saveHotel2ToMyTrip = function (event) {
  //push hotel name into the hotelArrayName2
  nameArrayHotel2.push(hotelID2);
  // set the hotel name to the localStorage
  localStorage.setItem("nameArrayHotel2", JSON.stringify(nameArrayHotel2));
  // push hotel stars into the hotelArrayStars2
  starsArrayHotel2.push(hotelStars2);
  localStorage.setItem("starsArrayHotel2", JSON.stringify(starsArrayHotel2));
  // push hotel price into the hotelArrayPrice2
  priceArrayHotel2.push("$" + hotelPrice2);
  // set the hotel name to the localStorage
  localStorage.setItem("priceArrayHotel2", JSON.stringify(priceArrayHotel2));
};


//function to save hotel3 data to my trip
var saveHotel3ToMyTrip = function (event) {
  //push hotel name into the hotelArrayName3
  nameArrayHotel3.push(hotelID3);
  //set the hotel name to the localStorage
  localStorage.setItem("nameArrayHotel3", JSON.stringify(nameArrayHotel3));
  // push hotel stars into the hotelArrayStars3
  starsArrayHotel3.push(hotelStars3);
  localStorage.setItem("starsArrayHotel3", JSON.stringify(starsArrayHotel3));
  // push hotel price into the hotelArrayPrice3
  priceArrayHotel3.push("$" + hotelPrice3);
  // set the hotel name to the localStorage
  localStorage.setItem("priceArrayHotel3", JSON.stringify(priceArrayHotel3));
};




//event listener for the submit button so that it calls the formSubmitHandler function when the button is clicked
submitButtonEl.addEventListener("click", formSubmitHandler);

//event listener for flight 1 button so that it saves data to local storage for the 1st flight
flight1buttonEl.addEventListener("click", saveFlight1ToMyTrip);
//event listener for flight 2 button so that it saves data to local storage for the 2nd flight
flight2buttonEl.addEventListener("click", saveFlight2ToMyTrip);
//event listener for flight 3 button so that it saves data to local storage for the 3rd flight
flight3buttonEl.addEventListener("click", saveFlight3ToMyTrip);

//event listener for hotel 1 button so that it saves data to local storage for the 1st hotel
hotel1buttonEl.addEventListener("click", saveHotel1ToMyTrip);
//event listener for hotel 2 button so that it saves data to local storage for the 2nd hotel
hotel2buttonEl.addEventListener("click", saveHotel2ToMyTrip);
//event listener for hotel 3 button so that it saves data to local storage for the 3rd hotel
hotel3buttonEl.addEventListener("click", saveHotel3ToMyTrip);
