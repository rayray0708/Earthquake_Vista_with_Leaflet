![Illustration of worldwide earthquakes]("https://caltechsites-prod.s3.amazonaws.com/scienceexchange/images/what-happens-earthquake-diagram_.max-1000x1000.png")
# leaflet_challenge
## Description
The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

The USGS is interested in building a new set of tools that will allow them to visualise their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. In this challenge, I have been tasked with developing a way to visualise USGS data that will allow them to better educate the public and other government organisations (and hopefully secure more funding) on issues facing our planet. 
## Instruction
To see the code for the interactive map, please navigate to the 'Starter_Code' folder, select the 'Static' and then 'js' folder. Open 'logic.js' with your preferred code editor. Please navigate to the 'css' folder to see the code for CSS. To see the code for the HTML, please right-click on the 'index.html' file and open it with your preferred web-browser.
## Installations
The following dependencies were used to generate the interactive map:
1. Leaflet.js
2. D3.js
3. CSS
4. HTML
![Alt text](<Screenshot 2023-12-18 at 3.31.06 pm.png>)

## Earthquakes analysis 
The following image is a sampling of earthquake data in JSON format:

![Alt text](<Screenshot 2023-12-18 at 3.43.02 pm.png>)

Our interactive map plots all the earthquakes from the current dataset based on their longitude and latitude. The map contains the following features:

* data markers that reflect the magnitude of the earthquake by their size and the depth of the earthquake by colour. 

* earthquakes with higher magnitudes appear larger, and earthquakes with greater depth appear darker in colour.

* popups that provide additional information about the earthquake when its associated marker is clicked.

* a legend that provides context for our map data.

## Contribution
Special thanks to the following individuals for their contribution:
- Camilo Vargas (Instructor team)
- BCS Learning Assistants