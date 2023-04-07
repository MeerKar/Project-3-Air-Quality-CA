## Background

This is group project done on ETL, Python Flask, JavaScript, HTML and Data Visualizations
Contributors: Shweta Joshi
Meera G K
Antonette Goroch
Dang Tran
Reed Zimpfer

### Introduction

In this Project we have taken  data  shows  air pollution which  is a leading cause of death across the globe, and contributes to stroke, heart disease, lung cancer, and other respiratory illness. The goal of this project is to explore the air quality of the California state area.
The datasets used in this project cover the daily data between year 2000 – 2021 for California state area. 
Air quality data are collected at outdoor monitors across the United States and can be download from EPA(https://www.epa.gov/air-trends/air-quality-cities-and-counties)

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



and Bar and Linear graphs which shows the 


# AirQuality_Cal-DataVisualization
Requirements
For Project 3, you will work with your group to tell a story using data visualizations. Here are the specific requirements:

Your visualization must include a Python Flask-powered API, HTML/CSS, JavaScript, and at least one database (SQL, MongoDB, SQLite, etc.).

Your project should fall into one of the following three tracks:

A combination of web scraping and Leaflet or Plotly

A dashboard page with multiple charts that update from the same data

A server that performs multiple manipulations on data in a database prior to visualization (must be approved)

Your project should include at least one JS library that we did not cover.

Your project must be powered by a dataset with at least 100 records.

Your project must include some level of user-driven interaction (e.g., menus, dropdowns, textboxes).

Your final visualization should ideally include at least three views.
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

DataSet link  : https://www.epa.gov/air-trends/air-quality-cities-and-counties
