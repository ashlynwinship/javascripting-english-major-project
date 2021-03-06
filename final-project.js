let myMap, tileLayer;
myMap = L.map("first-map");
tileLayer =
L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
      attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
      subdomains: "abcd",
      maxZoom: 18
    });
tileLayer.addTo(myMap);
myMap.setView([40.777502, -73.964427], 12);

//Derive 1
let stLukesMarker, pier40, pier45, hollandTunnel, aveOfAmericas;
stLukesMarker = L.marker([40.730391, -74.006171]).addTo(myMap).bindPopup("Starting point for Dérive 1");
pier40 = L.marker([40.729419, -74.011886]).addTo(myMap).bindPopup("Pier 40");
pier45 = L.marker([40.733193, -74.011694]).addTo(myMap).bindPopup("Pier 45");
hollandTunnel = L.marker([40.726062, -74.011167]).addTo(myMap).bindPopup("Holland Tunnel");
aveOfAmericas = L.marker([40.722012, -74.005449]).addTo(myMap).bindPopup("Canal Street and 6th Avenue");
let derive1;
derive1 = [[40.730391, -74.006171],
           [40.729419, -74.011886],
           [40.733193, -74.011694],
           [40.726062, -74.011167],
           [40.722012, -74.005449]];
let derive1Polyline;
derive1Polyline = L.polyline(derive1, {color: "#ff9933"}
).addTo(myMap);

let pilates, pilatesMarker, miscDerive1;
pilates = [40.730048, -73.998508];
pilatesMarker = L.marker(pilates).addTo(myMap).bindPopup("Pilates place");
miscDerive1 = [[40.722012, -74.005449],
               [40.730048, -73.998508]];
let miscDerive1Line;
miscDerive1Line = L.polyline(miscDerive1, {color: "#ff0000"}
).addTo(myMap);
//Derive 2
let worthStMarker, wBroadwayCorner, worldTradeCenter, oculus, stPaulsChapel, cityHallPark;
worthStMarker = L.marker([40.717097, -74.006755]);
worthStMarker.addTo(myMap);
worthStMarker.bindPopup("Starting point for Dérive 2");
wBroadwayCorner = L.marker([40.717609, -74.007571]);
wBroadwayCorner.addTo(myMap);
wBroadwayCorner.bindPopup("'Head toward the heart of the city.'");
worldTradeCenter = L.marker([40.711801, -74.01312]);
worldTradeCenter.addTo(myMap);
worldTradeCenter.bindPopup("One World Trade Center");
oculus = L.marker([40.711591, -74.011482]);
oculus.addTo(myMap);
oculus.bindPopup("The Oculus");
stPaulsChapel = L.marker([40.71132, -74.009185]);
stPaulsChapel.addTo(myMap);
stPaulsChapel.bindPopup("St. Paul's Cathedral");
cityHallPark = L.marker([40.71285, -74.006465]);
cityHallPark.addTo(myMap);
cityHallPark.bindPopup("City Hall Park");
let derive2;
derive2 = [[40.717097, -74.006755],
           [40.717609, -74.007571],
           [40.711801, -74.01312],
           [40.711591, -74.011482],
           [40.71132, -74.009185],
           [40.71285, -74.006465]];
let derive2Polyline;
derive2Polyline = L.polyline(derive2, {color: "#cc00ff"}
).addTo(myMap);

let subStation, lafAndWorth, miscDerive2;
subStation = L.marker([40.713011, -74.00328]).addTo(myMap).bindPopup("Brooklyn Bridge-City Hall/Chambers Street Station");
lafAndWorth = L.marker([40.715496, -74.003032]).addTo(myMap).bindPopup("Turn here onto Worth.");
miscDerive2 = [[40.713011, -74.00328],
               [40.715496, -74.003032],
               [40.717097, -74.006755]];
let miscDerive2Line;
miscDerive2Line = L.polyline(miscDerive2, {color: "#ff0000"}
).addTo(myMap);

//define Julius's markers
let stJohns, morningside, columbusCircle, profSaito, towerRecords, milstein, riverside, folkArtMuseum, wallStStation, pennStation, photoCenter, unionSq, morningsideDr, washHeights, bowery, newApt, carnegieHall, worldTrade, notreDame;
stJohns = L.circleMarker([40.803795, -73.96165]).addTo(myMap).bindPopup("Cathedral of St. John");
morningside = L.circleMarker([40.805046, -73.958925]).addTo(myMap).bindPopup("Morningside Park");
columbusCircle = L.circleMarker([40.768097, -73.981729]).addTo(myMap).bindPopup("Columbus Circle");
profSaito = L.circleMarker([40.765995, -73.976793]).addTo(myMap).bindPopup("Professor Saito's apartment");
towerRecords = L.circleMarker([40.77418, -73.982566]).addTo(myMap).bindPopup("The old Tower Records store");
milstein = L.circleMarker([40.841947, -73.943353]).addTo(myMap).bindPopup("Milstein Hospital");
riverside = L.circleMarker([40.802072, -73.972599]).addTo(myMap).bindPopup("Riverside Park");
folkArtMuseum = L.circleMarker([40.773166, -73.981261]).addTo(myMap).bindPopup("American Folk Art Museum");
wallStStation = L.circleMarker([40.706607, -74.008702]).addTo(myMap).bindPopup("Wall St. Station");
pennStation = L.circleMarker([40.750467, -73.993666]).addTo(myMap).bindPopup("Penn Station");
photoCenter = L.circleMarker([40.723013, -73.993432]).addTo(myMap).bindPopup("International Center of Photography");
unionSq = L.circleMarker([40.735788, -73.990437]).addTo(myMap).bindPopup("Union Square");
morningsideDr = L.circleMarker([40.805937, -73.959471]).addTo(myMap).bindPopup("Morningside Dr.");
washHeights = L.circleMarker([40.843231, -73.94063]).addTo(myMap).bindPopup("Washington Heights");
bowery = L.circleMarker([40.721114, -73.992012]).addTo(myMap).bindPopup("The Bowery");
newApt = L.circleMarker([40.744285, -73.999808]).addTo(myMap).bindPopup("Julius's new apartment");
carnegieHall = L.circleMarker([40.765045, -73.979913]).addTo(myMap).bindPopup("Carnegie Hall");
worldTrade = L.circleMarker([40.712775, -74.013236]).addTo(myMap).bindPopup("One World Trade Center");
notreDame = L.circleMarker([40.805052, -73.9604]).addTo(myMap).bindPopup("Notre Dame de la Chapelle");

//My Triangle
let washingtonSqPk, founders, palladium, astorPl, myTriangle, myTrianglePolygon;
washingtonSqPk = L.marker([40.730885, -73.997838]).addTo(myMap).bindPopup("Washington Square Park");
founders = L.marker([40.732454, -73.989180]).addTo(myMap).bindPopup("Founders Hall");
palladium = L.marker([40.733202, -73.988493]).addTo(myMap).bindPopup("Palladium");
astorPl = L.marker([40.730064, -73.991176]).addTo(myMap).bindPopup("Astor Place");
myTriangle = [[40.732454, -73.989180],
              [40.734689, -73.994587],
              [40.730885, -73.997838],
              [40.730714, -73.995607],
              [40.731584, -73.994791],
              [40.730064, -73.991176],
              [40.733202, -73.988493]];
myTrianglePolygon = L.polygon(myTriangle, {
                        color: "#ffff00",
                        fillColor: "#ffff80"
                      }
).addTo(myMap);

//Markdown
let md;
md = window.markdownit({html: true}).use(window.markdownitFootnote);
["my-city", "derive1", "derive2", "julius-city"].forEach(function(tab){
  $.ajax({
    url: "https://ashlynwinship.github.io/javascripting-english-major-project/" + tab + ".md",
    success: function(markdown){
      let html;
      html = md.render(markdown);
      $("#" + tab).html(html);
    }
  });
});
