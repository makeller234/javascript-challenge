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

var button = d3.select("button");

button.on("click", function(){


    //read in user input
    var userDate = d3.select(".form-control");
    var dateValue = userDate.property("value");

    //test user date is recording right
    // console.log(dateValue);

    // filter table by the date the user input
    var dateFilter = tableData.filter(date =>date.datetime===dateValue);

    // test that filter is correct
    // console.log(dateFilter);

    // // first attempt to add filters row, doesn't work, just adds them to bottom of existing table
    // dateFilter.forEach(function(date){
    //     var row = tbody.append("tr");
    //     Object.entries(date).forEach(function([key,value]){
    //         var cell = row.append("td");
    //         cell.text(value);
    //     });
    // });


    // // second attempt to filter row, by hiding ones that don't match the values
    // var rows = tableData.length;
    //  for (var i = 0; i < rows; i++){

    //      if (tableData[i].datetime != dateValue){
    //         hideValue = tableData[i];
    //         hideValue.style.display = "none";
    //      }
    //  }

    // //third attempt: remove previous table and put in a new one. Only works for one call, because table is removed
    // d3.select("tbody").remove();
    // var add = d3.select("table");
    // var tbody2 = add.append("tbody")

    // dateFilter.forEach(function(date){
    //     var row = tbody2.append("tr");
    //     Object.entries(date).forEach(function([key,value]){
    //         var cell = row.append("td");
    //         cell.text(value);
    //     });
    // });




});

