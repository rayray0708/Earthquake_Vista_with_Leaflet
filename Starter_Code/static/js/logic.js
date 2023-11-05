// Link to earthquake data in the last 30 days
let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson";

// Create a map object, with Alaska [-152.9437, 64.5896] as the center and with a zoom level of 5
let myMap = L.map("map", {
  center: [40.7, -94.5
  ],
  zoom: 5
});

// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

//Define a function that will give each earthquake a different radius based on its magnitude
function markerSize(magnitude) {
    return magnitude * 3;
}

//Import the data
d3.json(url).then(createMarkers);

function addColour(depth){
    if (depth > 90) return "#634d8c";
    else if (depth > 70) return "#8e5b8f";
    else if (depth > 50) return "#c76b8e";
    else if (depth > 30) return "#dd828d";
    else if (depth > 10) return "#ec988e";
    else return "#ffcc9b"
};


// function createMap() {
// }


//Define a function that creates a marker for each earthquake, 
// earthquakes with higher magnitudes appear larger, 
// and earthquakes with greater depth appear darker in colour.
function createMarkers(response) {
    let earthquakes = response.features;

    //Loop through each earthquake in the geoJson
    for (let index = 0; index < earthquakes.length; index++){
        let earthquake = earthquakes[index];

        let coordinatesArray = [earthquake.geometry.coordinates[1], earthquake.geometry.coordinates[0]];

        // coordinatesArray.push([earthquake.geometry.coordinates[1], earthquake.geometry.coordinates[0]]); 

        // L.cricle() is just a circle, L.circleMarker() has the radius parameter as well
        L.circleMarker(coordinatesArray, {
            fillOpacity: earthquake.geometry.coordinates[2],
            color: "white",
            fillColor: addColour(earthquake.geometry.coordinates[2]),
            radius: markerSize(earthquake.properties.mag)
        //Add a pop-up to each marker
        }).addTo(myMap);
    };
};

//Function to create legend
let legend = L.control({position: "bottomright"}); 

legend.onAdd = function () {
    let div = L.DomUtil.create("div","info legend");

    let grid = [-10,10,30,50,70,90];
    
    let colors = ["#98ee00",
    "#d4ee00",
    "#eecc00",
    "#ee9c00",
    "#ea822c",
    "#ea2c2c"];

    for (let i = 0; i < grid.length; i ++) {
        console.log(colors[i]);

        div.innerHTML += "<i style='background: " + colors[i] + "'></i> " + grid[i] + (grid[i + 1] ? "&ndash;" + grid[i + 1] + "<br>" : "+");

    }
    return div; 
};

legend.addTo(myMap);
