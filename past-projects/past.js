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
  });
});
