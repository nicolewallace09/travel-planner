# Travel Planner
The Travel planner application is aimed to allow users to search for flights and hotels for their desired dates and cities and allow the users to save the selected flights and hotels to their trip. The the users are further enabled to manage their trips in the My Trip page where they can decide to keep or delete the trip from the list.

## User Story 
AS A traveler <br>
I WANT to plan out my flight and hotel to the city I am traveling to<br>
SO THAT I have proper travel arrangements<br>
GIVEN a search feature with inputs of start date, end date, from, and to city inputs.<br>
WHEN I search for above inputs<br>
THEN I am presented with three recommended flight and hotel options <br>
WHEN I view recommended flights <br>
THEN I am given outbound/inbound dates, origin/destination cities, airline and price for the flights and information about the flight being direct or not <br>
WHEN I view recommended hotels <br>
THEN I am given hotel name, number of stars and prices per night<br>
WHEN I click the add icon of a flight or hotel card<br>
THEN I am able to save the information to My Trips <br>
WHEN I click on the My Trips button on the navigation<br>
THEN I am able to view my saved flights and hotels<br>
WHEN I click the remove icon of a fight or hotel card<br>
THEN I am removing the saved flights and hotels from the local storage as well as from the page<br>


## Deployment
This website is available live on: [GitHub.io](https://izabelacloud.github.io/Travel-Planner/)

## Versioning
We use GitHub (https://github.com/) for versioning. For the versions available, see the [Travel Planner](https://github.com/izabelacloud/Travel-Planner).

## Considerations 
1. The API is considering the UTC time, therefore some flights searched for for the same date might return an error as the UTC time might be already progressed. Please use future date for flight search.
1. The data returned from the flight API is inconsistent for the origin at times causing that the origin shows the destination city. This has been noticed when searching for NYC.
1. Search is enabled for City codes rather than Airport code (examples: NYC instead of JFK for NYC). Testing was successful for SFO, NYC, MIA, ATL, SEA.


## Website Preview

![Travel Planner - Header](https://github.com/izabelacloud/Travel-Planner/blob/master/assets/images/App1.png?raw=true)
![Travel Planner - Search Results](https://github.com/izabelacloud/Travel-Planner/blob/master/assets/images/App2.png?raw=true)
![Travel Planner - My Trips](https://github.com/izabelacloud/Travel-Planner/blob/master/assets/images/App3.png?raw=true)


## API Resources
[Sky Scanner](https://rapidapi.com/skyscanner/api/skyscanner-flight-search?endpoint=5aa1eab3e4b00687d3574279) and [Hotel Look](https://support.travelpayouts.com/hc/en-us/articles/115000343268-Hotels-data-API#31).

## CSS Framework
MaterializeCSS [Link](https://materializecss.com/)

## Application Created By: 
Application created by Izabela Petrovicova, Josh Price, and Nicole Wallace