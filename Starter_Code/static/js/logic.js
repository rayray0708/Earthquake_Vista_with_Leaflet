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

//Define a function that creates a marker for each earthquake, 
// earthquakes with higher magnitudes appear larger, 
// and earthquakes with greater depth appear darker in colour.
function createMarkers(response) {
    let earthquakes = response.features;
    console.log(earthquakes);

    //Loop through each earthquake in the geoJson
    for (let index = 0; index < earthquakes.length; index++){
        let earthquake = earthquakes[index];

        let coordinatesArray = [earthquake.geometry.coordinates[1], earthquake.geometry.coordinates[0]];

        // coordinatesArray.push([earthquake.geometry.coordinates[1], earthquake.geometry.coordinates[0]]); 

        // L.cricle() is just a circle, L.circleMarker() has the radius parameter as well
        let marker = L.circleMarker(coordinatesArray, {
            fillOpacity: earthquake.geometry.coordinates[2],
            color: "transparent", //set border colour to transparent
            fillColor: addColour(earthquake.geometry.coordinates[2]), //the earthquake colour is based on its depth
            radius: markerSize(earthquake.properties.mag) // the earthquake's marker size is based on it's magnitude
        //Add a pop-up to each marker
        })
        marker.bindPopup("<h2> Magnitude: " + earthquake.properties.mag + "</h2> <hr> <h2> Location: " + earthquake.properties.place + "</h2> <hr> <h2> Depth: " + earthquake.geometry.coordinates[2] + "</h2>" );
        marker.addTo(myMap);
    };
};

// //Function to create legend
let legend = L.control({position: "bottomright"}); 

legend.onAdd = function () {
    let div = L.DomUtil.create("div","info legend");

    let grid = [-10,10,30,50,70,90];
    
    let colors = ["#ffcc9b",
    "#ec988e",
    "#dd828d",
    "#c76b8e",
    "#8e5b8f",
    "#634d8c"];

    for (let i = 0; i < grid.length; i ++) {
        console.log(colors[i]);

        div.innerHTML += "<i style='background: " + colors[i] + "'></i> " + grid[i] + (grid[i + 1] ? "&ndash;" + grid[i + 1] + "<br>" : "+");
        console.log(div.innerHTML);
    }
    return div; 
    
};

legend.addTo(myMap);


