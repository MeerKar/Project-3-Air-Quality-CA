const CSV = 'static/data/NO2.csv'

    function plotFromCSV() {
        d3.csv(CSV).then(function(rows) {
            // for (let i = 0; i < rows.length; i++) {
            //    console.log(rows)
            // } 
            console.log(rows);
            processData(rows);
        });
    }
    
    function processData(allRows) {
        let dateX = [];
        let bakersfield = [];
        let elcentro = [];
        let fresno = [];
        let losangeles = [];
        let madera = [];
        let merced = [];
        let modesto = [];
        let oxnard = [];
        let riverside = [];
        let sacramento = [];
        let salinas = [];
        let sandiego = [];
        let sanfrancisco = [];
        let sanluisobispo = [];
        let santamaria = [];
        let stockton = [];
        let vallejo = [];
        let visalia = [];
        let yuba = [];
        let row;
    
        let i = 0;
        while (i < allRows.length) {
          row = allRows[i];
          dateX.push(row["Date"]);
          bakersfield.push(row["Bakersfield"]);
          elcentro.push(row["El Centro"]);
          fresno.push(row["Fresno"]);
          losangeles.push(row["Los Angeles-Long Beach-Anaheim"]);
          madera.push(row["Madera"]);
          merced.push(row["Merced"]);
          modesto.push(row["Modesto"]);
          oxnard.push(row["Oxnard-Thousand Oaks-Ventura"]);
          riverside.push(row["Riverside-San Bernardino-Ontario"]);
          sacramento.push(row["Sacramento--Roseville--Arden-Arcade"]);
          salinas.push(row["Salinas"]);
          sandiego.push(row["San Diego-Carlsbad"]);
          sanfrancisco.push(row["San Francisco-Oakland-Hayward"]);
          sanluisobispo.push(row["San Luis Obispo-Paso Robles-Arroyo Grande"]);
          santamaria.push(row["Santa Maria-Santa Barbara"]);
          stockton.push(row["Stockton-Lodi"]);
          vallejo.push(row["Vallejo-Fairfield"]);
          visalia.push(row["Visalia-Porterville"]);
          yuba.push(row["Yuba City"]);
          i += 1;
        }
        
        console.log("X", dateX);
        
    
        makePlotly(dateX, bakersfield, elcentro, fresno, losangeles, madera, merced, modesto, oxnard, riverside, sacramento, salinas, sandiego, sanfrancisco, sanluisobispo, santamaria, stockton, vallejo, visalia, yuba);
    }
    
    function makePlotly(dateX, bakersfield, elcentro, fresno, losangeles, madera, merced, modesto, oxnard, riverside, sacramento, salinas, sandiego, sanfrancisco, sanluisobispo, santamaria, stockton, vallejo, visalia, yuba) {
        let traces = [
            {
                x: dateX,
                y: bakersfield,
                name: "Bakersfield",
                line: {
                    color: "#ff7f0e",
                    width: 3
                }
            },
            {
                x: dateX,
                y: elcentro,
                name: "El Centro",
                line: {
                    color: "#1f77b4",
                    width: 3,

                }
            },
            {
                x: dateX,
                y: fresno,
                name: "Fresno",
                line: {
                    color: "#d62728",
                    width: 3,
                }
            },
            {
                x: dateX,
                y: losangeles,
                name: "Los Angeles",
                line: {
                    color: "#d62728",
                    width: 3,
                }
            },
            {
                x: dateX,
                y: madera,
                name: "Madera",
                line: {
                    color: "#54ba38",
                    width: 3,
                }
            },
            {
                x: dateX,
                y: merced,
                name: "Merced",
                line: {
                    color: "#8c564b",
                    width: 3,
                }
            },
            {
                x: dateX,
                y: modesto,
                name: "Modesto",
                line: {
                    color: "#e377c2",
                    width: 3,
                }
            },
            {
                x: dateX,
                y: oxnard,
                name: "Oxnard",
                line: {
                    color: "#7f7f7f",
                    width: 3,
                }
            },
            {
                x: dateX,
                y: riverside,
                name: "Riverside",
                line: {
                    color: "#bcbd22",
                    width: 3,
                }
            },
            {
                x: dateX,
                y: sacramento,
                name: "Sacramento",
                line: {
                    color: "#17becf",
                    width: 3,
                }
            },
            {
                x: dateX,
                y: salinas,
                name: "Salinas",
                line: {
                    color: "#fecb52",
                    width: 3,
                }
            },
            {
                x: dateX,
                y: sandiego,
                name: "San Diego",
                line: {
                    color: "#ff6692",
                    width: 3,
                }
            },
            {
                x: dateX,
                y: sanfrancisco,
                name: "San Francisco",
                line: {
                    color: "#d62728",
                    width: 3,
                }
            },
            {
                x: dateX,
                y: sanluisobispo,
                name: "San Luis Obispo",
                line: {
                    color: "#54ba38",
                    width: 3,
                }
            },
            {
                x: dateX,
                y: santamaria,
                name: "Santa Maria",
                line: {
                    color: "#3366cc",
                    width: 3,
                }
            },
            {
                x: dateX,
                y: stockton,
                name: "Stockton",
                line: {
                    color: "#72b7b2",
                    width: 3,
                }
            },
            {
                x: dateX,
                y: vallejo,
                name: "Vallejo",
                line: {
                    color: "#2ca02c",
                    width: 3,
                }
            },
            {
                x: dateX,
                y: visalia,
                name: "Visalia",
                line: {
                    color: "#ff6692",
                    width: 3,
                }
            },
            {
                x: dateX,
                y: yuba,
                name: "Yuba",
                line: {
                    color: "#66aa00",
                    width: 3,
                }
            }
        ];
    
        let layout = {
            title: "NO2 Level Over Years[2000 to 2021]",
            yaxis: {
                title:{
                    text: "Pollutant Level"
                },
                range: [0, 35]
            },
            xaxis: {
                autotick: false,
                tickangle: -45, 
            },
        };
    
        let config = { 
            responsive: true,
        };
    
        Plotly.newPlot('plot1', traces, layout, config);
        
    }
    
    plotFromCSV();
    



