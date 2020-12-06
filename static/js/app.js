// from data.js
const tableData = data;
// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
var filters = {};

// 3. Use this function to update the filters. 
function updateFilters() {

  // 4a. Save the element that was changed as a variable.
  let datetime = d3.select("#datetime");

  let city = d3.select("#city");

  let state = d3.select("#state");

  let shape = d3.select("#shape");

  // 4b. Save the value that was changed as a variable.  
  let dateValue = datetime.property("value");
  console.log(dateValue);

  let cityValue = city.property("value");
  console.log(cityValue);

  let stateValue = state.property("value");
  console.log(stateValue);

  let shapeValue = shape.property("value");
  console.log(shapeValue);

  // 4c. Save the id of the filter that was changed as a variable.
  let filterDate = datetime.attr("id");
  console.log(filterDate);

  let filterCity = city.attr("id");
  console.log(filterCity);

  let filterState = state.attr("id");
  console.log(filterState);

  let filterShape = shape.attr("id");
  console.log(filterShape);

  // 5. If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object.

  if (dateValue) {
    filters[filterDate] = dateValue;
  }
  else {
    delete filters[filterDate];
  }

  if (cityValue) {
    filters[filterCity] = cityValue;
  }
  else {
    delete filters[filterCity];
  }

  if (stateValue) {
    filters[filterState] = stateValue;
  }
  else {
    delete filters[filterState];
  }

  if (shapeValue) {
    filters[filterShape] = shapeValue;
  }
  else {
    delete filters[filterShape];
  }

  // 6. Call function to apply all filters and rebuild the table

  filterTable();

}

// 7. Use this function to filter the table when data is entered.
function filterTable() {

  console.log(filters);
  // 8. Set the filtered data to the tableData.

  let filteredData = tableData;

  // 9. Loop through all of the filters and keep any data that
  // matches the filter values
  for (let key in filters) {
    filteredData = filteredData.filter(row => row[key] === filters[key]);
    console.log(key)
  }

  // 10. Finally, rebuild the table using the filtered data

  buildTable(filteredData);


}



// 2. Attach an event to listen for changes to each filter

d3.selectAll("input").on("change", updateFilters);

// Build the table when the page loads
buildTable(tableData);


