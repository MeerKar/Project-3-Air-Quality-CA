## Background

This is group project done on ETL, Python Flask, JavaScript, HTML and Data Visualizations



Contributors: 

Shweta Joshi

Meera G K

Antonette Goroch

Dang Tran

Reed Zimpfer

### Introduction

In this Project we have taken  data  shows  air pollution which  is a leading cause of death across the globe, and contributes to stroke, heart disease, lung cancer, and other respiratory illness. The goal of this project is to explore the air quality of the California state area.
The datasets used in this project cover the daily data between year 2000 – 2021 for California state area. 
Air quality data are collected at outdoor monitors across the United States and can be download from EPA(https://www.epa.gov/air-trends/air-quality-cities-and-counties)

<img width="618" alt="image" src="https://user-images.githubusercontent.com/116701851/230517802-3e1f1db3-bd76-4c33-8087-cf52158a77da.png">


### Project Overview:

Who is the target audience?
General Public
Why is it relevant to them?
Health Awareness & Protection
Community Engagement & AdvocacyPlanning & Decision Making


Our core dataset came from the Environmental Protection Association (EPA)'s AQS (Air Quality System) database. 

https://www.epa.gov/air-trends/air-quality-cities-and-counties

The EPA is mandated by several laws, going back to the 1970s, to monitor and report key metrics about air quality annually.
From this database, we selected an initial file of Air Quality Statistics By City for the period 2000-2021.
This was the most recently available data and was published on May 4, 2022. 
It included 1600+ records and covered six of the most hazardous air pollutants covered by the Clean Air Act:
Ozone
Particulate Matter
Carbon Monoxide
Nitrogen Oxides
Sulfur Dioxide

## Data Processing and Software(ETL)

From the source data , data from the Sate California and Cities has been extracted and converted into a CSV file. By applying the GeoApfy Key , the coordinates have been determined and using the pandas dataframe a final CSV data file has been created.

## DataBase

Using the CSV file created a Database has been created using SQlite

<img width="603" alt="image" src="https://user-images.githubusercontent.com/116701851/230516560-a68d1dd2-7181-4f0f-ade4-9a30b156140d.png">



With the help of the Database created , a python Flask has been deployed.
Using Javascript ,leaflet and HTML a dash board had been created in the local port, which includes, a map which tells the  statewide , showing the pollutant level for each city/county, and whether or not it is above/below the established healthy level with a pop up hover box that shows the city/county name, pollutant level.

<img width="1276" alt="image" src="https://user-images.githubusercontent.com/116701851/230517026-5eca9799-96a7-4cec-af9a-2449e140c696.png">



and Bar and Linear graphs which plots the Annual mean of NO2 and PM2.5 on each City and Year.

<img width="596" alt="image" src="https://user-images.githubusercontent.com/116701851/230517490-cdcfa1c8-b3d3-41ca-b0a5-e0af6bc9ea64.png">

<img width="595" alt="image" src="https://user-images.githubusercontent.com/116701851/230517465-264a2f96-fe29-403f-9d51-968a895a7079.png">

<img width="624" alt="image" src="https://user-images.githubusercontent.com/116701851/230517527-df7e89ca-ea09-4f9c-808a-8950412dfe0a.png">

<img width="610" alt="image" src="https://user-images.githubusercontent.com/116701851/230517559-6116ded2-6068-4d28-8d99-fe0306b38d0b.png">

## Data Visualization and Analysis

Pollutant Levels of CO, SO2, and PM10 have been continuously dropping to low level, which means we have moderate to good 
Air conditions in California State.But we see that Ozone, NO2, and PM2.5 haven't dropped that much are related to 
high number of factories, high number of vehicles, and other source of pollution that are still not under well controlled.


## Summary

As air quality has been improved and there are still pollutants (Ozone, NO2, and PM2.5) retain at high pollution Level. 
Effort should continuously be made to reduce them. How can we make a difference? Drive less, use less electricity, don't burn wood or trash, support measures in your community that can cut air pollution, etc.
Also air quality continues to worsen in cities across the world, especially in low-income countries and developing countries.  Cooperation should be setup among countries in combating air pollution.






