d3.json('/data').then(function(data){
    let year_2000_index=6
    console.log(data);
    function plotNO2Year(year){
        let year_index=parseInt(year)-2000+year_2000_index
        let cities=[];
        let values=[];
        // define function to calculate pollution level across cities
        data.forEach(function(row){
            if ((row[3]=='NO2')&(row[4]=='Annual Mean')){
                cities.push(row[1]);
                values.push(row[year_index]);
            }
        })
        return [cities, values]
    };

    let [cities, values]=plotNO2Year('2021')
    let trace={
        'x': cities,
        'y': values,
        'type': 'bar'
        }
    let layout = {
            title: {
              text:'NO2 Trend',
              font: {
                family: 'Courier New, monospace',
                size: 24
              },
              xref: 'paper',
              x: 0.05,
            },
            xaxis: {
              title: {
                text: 'Cities',
                font: {
                  family: 'Courier New, monospace',
                  size: 18,
                  color: '#969696'
                }
              },
            },
            yaxis: {
              title: {
                text: 'Pollutant level',
                font: {
                  family: 'Courier New, monospace',
                  size: 20,
                  color: '#7f7f7f'
                }
              }
            }
          };
    Plotly.newPlot('bar', [trace], layout)

    function plotPM2Year(year){
        let year_index1=parseInt(year)-2000+year_2000_index
        let cities1=[];
        let values1=[];
        // define function to calculate pollution level across cities
        data.forEach(function(row){
            if ((row[3]=='PM2.5')&(row[4]=='Weighted Annual Mean')){
                cities1.push(row[1]);
                values1.push(row[year_index1]);
            }
        })
        return [cities1, values1]
    };

    let [cities1, values1]=plotPM2Year('2021')
    let trace1={
        'x': cities1,
        'y': values1,
        'type': 'bar'
        }
    let layout1 = {
            title: {
              text:'PM2.5 Trend',
              font: {
                family: 'Courier New, monospace',
                size: 24
              },
              xref: 'paper',
              x: 0.05,
            },
            xaxis: {
              title: {
                text: 'Cities',
                font: {
                  family: 'Courier New, monospace',
                  size: 18,
                  color: '#969696'
                }
              },
            },
            yaxis: {
              title: {
                text: 'Pollutant level',
                font: {
                  family: 'Courier New, monospace',
                  size: 20,
                  color: '#7f7f7f'
                }
              }
            }
          };
    Plotly.newPlot('bar1', [trace1], layout1)
});



