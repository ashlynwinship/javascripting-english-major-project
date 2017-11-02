let deriveMap, tileLayer;
deriveMap = L.map("first-map");
tileLayer =
L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
      attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
      subdomains: "abcd",
      maxZoom: 18
    });
tileLayer.addTo(deriveMap);
deriveMap.setView([40.722622, -74.000849], 15);

let stLukesMarker, pier40, pier45, hollandTunnel, aveOfAmericas;
stLukesMarker = L.marker([40.730391, -74.006171]);
stLukesMarker.addTo(deriveMap);
stLukesMarker.bindPopup("Starting point for Dérive 1");
pier40 = L.marker([40.729419, -74.011886]);
pier40.addTo(deriveMap);
pier40.bindPopup("Pier 40");
pier45 = L.marker([40.733193, -74.011694]);
pier45.addTo(deriveMap);
pier45.bindPopup("Pier 45");
hollandTunnel = L.marker([40.726062, -74.011167]);
hollandTunnel.addTo(deriveMap);
hollandTunnel.bindPopup("Holland Tunnel");
aveOfAmericas = L.marker([40.722012, -74.005449]);
aveOfAmericas.addTo(deriveMap);
aveOfAmericas.bindPopup("Canal Street and 6th Avenue");
let derive1;
derive1 = [[40.730391, -74.006171],
           [40.729419, -74.011886],
           [40.733193, -74.011694],
           [40.726062, -74.011167],
           [40.722012, -74.005449]];
let derive1Polyline;
derive1Polyline = L.polyline(derive1, {color: "#cccc00"}
                    ).addTo(deriveMap);

let worthStMarker, wBroadwayCorner, worldTradeCenter, oculus, stPaulsChapel, cityHallPark;
worthStMarker = L.circleMarker([40.717097, -74.006755]);
worthStMarker.addTo(deriveMap);
worthStMarker.bindPopup("Starting point for Dérive 2");
wBroadwayCorner = L.circleMarker([40.717609, -74.007571]);
wBroadwayCorner.addTo(deriveMap);
wBroadwayCorner.bindPopup("'Head toward the heart of the city.'");
worldTradeCenter = L.circleMarker([40.711801, -74.01312]);
worldTradeCenter.addTo(deriveMap);
worldTradeCenter.bindPopup("One World Trade Center");
oculus = L.circleMarker([40.711591, -74.011482]);
oculus.addTo(deriveMap);
oculus.bindPopup("The Oculus");
stPaulsChapel = L.circleMarker([40.71132, -74.009185]);
stPaulsChapel.addTo(deriveMap);
stPaulsChapel.bindPopup("St. Paul's Cathedral");
cityHallPark = L.circleMarker([40.71285, -74.006465]);
cityHallPark.addTo(deriveMap);
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
                    ).addTo(deriveMap);
