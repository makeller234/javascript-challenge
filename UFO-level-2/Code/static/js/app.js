// from data.js
var tableData = data;

var tbody = d3.select("tbody");

// add row, then table data to table, and then add data from dataset into table.
tableData.forEach(function(UFOs){
    var row = tbody.append("tr");
    Object.entries(UFOs).forEach(function([key,value]){
        var cell = row.append("td");
        cell.text(value);
    });
});

// Start of Filter Table button code
var button = d3.select("button");

button.on("click", function(){

    //read in user input
    var userDate = d3.select("#datetime");
    var dateValue = userDate.property("value");

    var userCity = d3.select("#city");
    var cityValue = userCity.property("value");
    cityValue = cityValue.toLowerCase();

    var userState = d3.select("#state");
    var stateValue = userState.property("value");
    stateValue = stateValue.toLowerCase();

    var userCountry = d3.select("#country");
    var countryValue = userCountry.property("value");
    countryValue = countryValue.toLowerCase();

    var userShape = d3.select("#shape");
    var shapeValue = userShape.property("value");
    shapeValue = shapeValue.toLowerCase();

    // filter by user input and display what they select
    var filteredResults = tableData.filter(options=>options.datetime===dateValue || 
        options.city===cityValue ||
        options.state===stateValue ||
        options.country===countryValue ||
        options.shape===shapeValue);

        // condition to check if there are any returned results
        rows = filteredResults.length;
        if (rows>=1){
            d3.select("tbody").remove();
            var add = d3.select("table");
            var tbody2 = add.append("tbody");

            filteredResults.forEach(function(date){
                var row = tbody2.append("tr");
                Object.entries(date).forEach(function([key,value]){
                    var cell = row.append("td");
                    cell.text(value);
                });
            });
        // assign the output message and "hide" it.  Needs to happen here otherwise after the else statement is met, 
        // it won't go away even if a new search is entered.
        var output = d3.select(".output");
        output.html("");
        }
        
        else {
            d3.select("tbody").remove();
            var output = d3.select(".output");
            output.text("Nothing found that matches your criteria. Keep searching...the truth is out there.");
        }

    // clear the search input values
    d3.select("#datetime").node().value = "";
    d3.select("#city").node().value = "";
    d3.select("#state").node().value = "";
    d3.select("#country").node().value = "";
    d3.select("#shape").node().value = "";

});
// end of Filter Table button function

