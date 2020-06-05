
# UFO Sightings Search
This takes data from 2010 UFO sightings and uses Dom manipulation to input the data into a table for the user to view and search for sightings. 

* UFO-Level-1 allows for the user to input the date and will return all sightings on that date.
    * Below is an image of the output for a date search for 1/1/2010.
    ![Level1 Search](/Images/Level1Search.png)  

* UFO-Level-2 allows the user to search for all criteria: date, city, state, country and UFO shape, and will return any matching results.
    * Below shows the for all results that match the date 1/1/2011 or the city Benton. Since there are no sightings with that date it just displays the one that matches the city.
    ![Level2 Search](/Images/Level2Search.png)

* For both levels, if no results are found that match the user's input, they get a message to keep searching.
![Keep Searching Message](/Images/NothingFound.png)

### Built With
* JavaScript and D3
* HTML
* Bootstrap/CSS

