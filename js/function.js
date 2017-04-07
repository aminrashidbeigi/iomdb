function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function addRow() {
    var table = document.getElementById("tableID");

    var title = document.getElementById("title").value;
    var year= document.getElementById("year").value;
    var dir = document.getElementById("dir").value;
    var rate = document.getElementById("rate").value;
    var row = table.insertRow(1);
    var titleCell = row.insertCell(0);
    var yearCell = row.insertCell(1);
    var dirCell = row.insertCell(2);
    var rateCell = row.insertCell(3);
    var deleteCell = row.insertCell(4);

    titleCell.innerHTML = title;
    yearCell.innerHTML = year;
    dirCell.innerHTML = dir;
    rateCell.innerHTML = rate;
    deleteCell.innerHTML = '<input class="btn btn-default" type="button" value="Delete" onclick="deleteRow(this)"/>';
}

function addYourMovie() {
    var table = document.getElementById("tableID");
  var movieTitle = document.getElementById('addMovie').value;
  console.log(movieTitle);
  var movieOMDB = 'https://www.omdbapi.com/?t=' + encodeURI(movieTitle);

  console.log(movieOMDB);
    $.getJSON(movieOMDB,function (response) {
        console.log(response.Director);
        movieDirector = response.Director;
        movieYear = response.Year;
        movieRate = response.imdbRating;
        if (movieYear != null){

            var row = table.insertRow(1);
            var titleCell = row.insertCell(0);
            var yearCell = row.insertCell(1);
            var dirCell = row.insertCell(2);
            var rateCell = row.insertCell(3);
            var deleteCell = row.insertCell(4);

            titleCell.innerHTML = movieTitle;
            yearCell.innerHTML = movieYear;
            dirCell.innerHTML = movieDirector;
            rateCell.innerHTML = movieRate;
            deleteCell.innerHTML = '<input type="button" value="Delete" onclick="deleteRow(this)"/>';
        }
    });
}

function inputKeyUp(e) {
    e.which = e.which || e.keyCode;
    if(e.which == 13) {
        return true;
    }
    return false;
}


function sortTable(col) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("tableID");
    switching = true;
    while (switching) {
      switching = false;
      rows = table.getElementsByTagName("TR");
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[col];
        y = rows[i + 1].getElementsByTagName("TD")[col];
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch= true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
}
