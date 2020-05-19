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

// Filter Table button
var button = d3.select("button");

button.on("click", function(){

    //read in user input
    var userDate = d3.select("#datetime");
    var dateValue = userDate.property("value");

    // filter by user input and display what they select
    var filteredResults = tableData.filter(options=>options.datetime===dateValue);

    
    var rows = filteredResults.length

    // condition to check if there are results to display or if it should display the else statement
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

    // clear the search input value
    d3.select("#datetime").node().value = "";

});
//end of filter table button function


