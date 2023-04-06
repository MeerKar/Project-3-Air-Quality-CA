const CSV2 = 'static/data/PM2.csv'

function plotFromCSV() {
    d3.csv(CSV2).then(function(rows) {
        console.log(rows);
        processData2(rows);
    });
}

function processData2(allRows) {
    let dateX = [];
    let bakersfield = [];
    let bishop = [];
    let elcentro = [];
    let fresno = [];
    let hanfordcorcoran = [];
    let losangeles = [];
    let merced = [];
    let modesto = [];
    let oxnard = [];
    let redding = [];
    let riverside = [];
    let sacramento = [];
    let salinas = [];
    let sandiego = [];
    let sanfrancisco = [];
    let santacruz = [];
    let santamaria = [];
    let stockton = [];
    let ukiah = [];
    let vallejo = [];
    let visalia = [];
    let yuba = [];
    let row;

    let i = 0;
    while (i < allRows.length) {
      row = allRows[i];
      dateX.push(row["Date"]);
      bakersfield.push(row["Bakersfield"]);
      bishop.push(row["Bishop"]);
      elcentro.push(row["El Centro"]);
      fresno.push(row["Fresno"]);
      hanfordcorcoran.push(row["Handford-Corcoran"]);
      losangeles.push(row["Los Angeles-Long Beach-Anaheim"]);
      merced.push(row["Merced"]);
      modesto.push(row["Modesto"]);
      oxnard.push(row["Oxnard-Thousand Oaks-Ventura"]);
      redding.push(row["Redding"]);
      riverside.push(row["Riverside-San Bernardino-Ontario"]);
      sacramento.push(row["Sacramento--Roseville--Arden-Arcade"]);
      salinas.push(row["Salinas"]);
      sandiego.push(row["San Diego-Carlsbad"]);
      sanfrancisco.push(row["San Francisco-Oakland-Hayward"]);
      santacruz.push(row["Santa Cruz-Watsonville"]);
      santamaria.push(row["Santa Maria-Santa Barbara"]);
      stockton.push(row["Stockton-Lodi"]);
      ukiah.push(row["Ukiah"]);
      vallejo.push(row["Vallejo-Fairfield"]);
      visalia.push(row["Visalia-Porterville"]);
      yuba.push(row["Yuba City"]);
      i += 1;
    }
    
    console.log("X", dateX);

    makePlotly2(dateX, bakersfield,bishop, elcentro, fresno, hanfordcorcoran, losangeles, merced, modesto, oxnard, redding, riverside, sacramento, salinas, sandiego, sanfrancisco, santacruz, santamaria, stockton, ukiah, vallejo, visalia, yuba);
}

function makePlotly2(dateX, bakersfield, bishop, elcentro, fresno, hanfordcorcoran, losangeles, merced, modesto, oxnard, redding, riverside, sacramento, salinas, sandiego, sanfrancisco, santacruz, santamaria, stockton, ukiah, vallejo, visalia, yuba) {
    let traces2 = [
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
            y: bishop,
            name: "Bishop",
            line: {
                color: "#ff97ff",
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
            y: hanfordcorcoran,
            name: "Hanford-Corcoran",
            line: {
                color: "#54ba38",
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
            y: redding,
            name: "Redding",
            line: {
                color: "#54ba38",
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
            y: santacruz,
            name: "Santa Cruz",
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
            y: ukiah,
            name: "Ukiah",
            line: {
                color: "#b82e2e",
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
        title: "PM2.5 Levels Over Years[2000 to 2021]",
        yaxis: {
            title:{
                text: "Pollutant Level"
            },
            range: [0, 25]
        },
        xaxis: {
            autotick: false,
            tickangle: -45, 
        },
    };

    
    let config = { 
        responsive: true,
    };


    Plotly.newPlot('plot2', traces2, layout, config);
}

plotFromCSV();



