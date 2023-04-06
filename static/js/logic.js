d3.json('/data').then(function(data){
    console.log(data);
    
    var map = L.map('map').setView([36.7783, -119.4179], 5); 

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    var cityNamesArray = new Array(10000);
    for (let i=0; i<data.length; i++){
        cityNamesArray.push(data[i][1]);
    }
    
    let uniquecityNamesArray = [...new Set(cityNamesArray)];

    var pollutantsNamesArray = new Array(10000);
    for (let i=0; i<data.length; i++){
        pollutantsNamesArray.push(data[i][1]);
    }
    
    let uniquePollutantsNamesArray = [...new Set(pollutantsNamesArray)];
  
    createMapMarkers(data, map, uniquecityNamesArray[2], uniquePollutantsNamesArray[0]);

    var legend = L.control({
      position: 'bottomleft'
    });
    legend.onAdd = function(map) {
      var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 10, 20, 30, 40, 50, 60, 100],
        labels = [],
        from, to;
      for (var i = 0; i < grades.length; i++) {
        from = grades[i];
        to = grades[i + 1];
        labels.push(
          '<i style="background:' + getColor(from + 1) + '">[color]</i> ' +
          from + (to ? '&ndash;' + to : '+'));
      }
      div.innerHTML = labels.join('<br>');
      return div;
    };
    legend.addTo(map);
        
});

function getColor(d) {
    return (d > 0 & d <= 10) ? 'green' :
           (d > 10 & d <= 20)  ? 'blue' :
           (d > 20 & d <= 30)  ? 'yellow' :
           (d > 30 & d <= 40)  ? 'magenta' :
           (d > 40 & d <= 50)   ? 'purple' :
           (d > 50 & d <= 60)   ? 'orange' :
           (d > 60)   ? 'red' :
                      '#FFEDA0';
}

function createMapMarkers(data, map, city, pollutant) { 
    const colors = ["red", "oragne", "magenta", "yellow", "blue", "green"];
    for (let i=0; i<data.length; i++){
        let currentCity=data[i];
        lat=currentCity[28]; 
        lng=currentCity[29];

        if ((lat!==null) & (lng!==null)){
            markerId = L.marker([lat, lng]).addTo(map);
            let j = 6;
            
            for (j; j < 28; j++) {
                let pollutantLevel = currentCity[j];
                let rad = 10000;
                let c = colors[0];
                if (pollutantLevel > 0 & pollutantLevel <= 10) {
                    c = colors[5];
                    rad = 1000;
                } else if (pollutantLevel > 11 & pollutantLevel <= 20) {
                    c = colors[4];
                    rad = 2000;
                } else if (pollutantLevel > 21 & pollutantLevel <= 30) {
                    c = colors[3];
                    rad = 4000;
                } else if (pollutantLevel > 31 & pollutantLevel <= 40) {
                    c = colors[2];
                    rad = 6000;
                } else if (pollutantLevel > 40 & pollutantLevel < 50) {
                    c = colors[1];
                    rad = 8000;
                } else {
                    c = colors[0];
                    rad = 10000;
                }

                var circle = L.circle([lat, lng], {
                    color: getColor(pollutantLevel),
                    fillColor: getColor(pollutantLevel),
                    weight: 1,
                    opacity: 0.8,
                    fillOpacity: 0.35,
                    radius: rad
                }).addTo(map);
                
                markerId.bindPopup(`<h3>Where: ${currentCity[1]}</h3><hr><p>Pollutant: ${currentCity[3]}</p><hr><p>"Year 2000": ${currentCity[6]}</p><hr><p>"Year 2021": ${pollutantLevel}</p>`).openPopup();
                
            };
                        
        };

    }
}

