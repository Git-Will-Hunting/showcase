// fetch JSON data
fetch('./past-projects.json')
  .then(response => response.json())
  .then(data => {
    // get the table body
    const tableBody = document.querySelector('#pastProjects tbody');
    // loop through the data
    data.projects.forEach(project => {
      // create a new row
      const row = document.createElement('tr');

      // create a new cell for each column
      const tableData = document.createElement('td');
      row.innerHTML = `
        <td>${project.title}</td>
        <td><a href="${project.repo}" target="_blank">Repo</a></td>
        <td><a href="${project.liveSite}" target="_blank">Demo</a></td>
        <td>${project.skills.join(', ')}</td>
        <td>${project.description}</td>
        <td>${project.date}</td>
        `;
      // append the row to the table body
      tableBody.appendChild(row);
    });
    fixTableHeaders();
  })
  // catch any errors and log them to the console
  .catch(error => {
    console.log(error);
  });

function fixTableHeaders() {
// Get the table rows
var tableRows = document.querySelectorAll("tr");

tableRows.forEach(row => {
  row.cells[0].style.width = "12%";
  row.cells[1].style.width = "8%";
  row.cells[2].style.width = "8%";
  row.cells[3].style.width = "10%";
  row.cells[4].style.width = "auto";
  row.cells[5].style.width = "8%";
});
}


// set variables for the table and the table body
const table = document.getElementById('pastProjects');

let sortColumn = null;
let sortOrder = 'ascending';

// add event listener to the table header
table.querySelectorAll('th').forEach( headerCell => {
  headerCell.addEventListener('click', () => {
    // get column index of header cell
    const column = headerCell.cellIndex;
    // get the rows in the table body
    const rows = Array.from(table.rows).slice(1);

    // if the column is the same as the last column clicked, reverse the order
    if (column === sortColumn) {
      sortOrder = sortOrder === 'ascending' ? 'descending' : 'ascending';
    } else {
      // otherwise, sort ascending
      sortOrder = 'ascending';
    }

    // sort the rows
    rows.sort( (a, b) => {
      const aData = a.cells[column].textContent;
      const bData = b.cells[column].textContent;
      if (sortOrder === 'ascending') {
        return aData.localeCompare(bData);
      } else {
        return bData.localeCompare(aData);
      }
    });

    // append the rows to the table body
    rows.forEach(row => {
      table.appendChild(row);
    });

    // set the sort column to the current column
    sortColumn = column;
    fixTableHeaders();
  });
});
