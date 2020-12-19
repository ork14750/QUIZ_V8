var id = "classement";
fetch("http://localhost:4200/players")

    // Converting received data to JSON
    .then(response => response.json())
    .then(json => {

            // Create a variable to store HTML
            let li = `<tr><th>Players</th><th>Score</th></tr>`;

            // Loop through each data and add a table row
            json.forEach(user => {
                    li += `<tr> 
                <td>${user.username} </td> 
                <td>${user.points}</td>          
            </tr>`;
            });

            // Display result

            document.getElementById(id).innerHTML = li;
            sortTable(id);
    });

function sortTable(id) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById(id);
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /*Loop through all table rows (except the
        first, which contains table headers):*/
        for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("TD")[1];
            y = rows[i + 1].getElementsByTagName("TD")[1];
            //check if the two rows should switch place:
            if (Number(x.innerHTML) < Number(y.innerHTML)) {
                //if so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

//sortTable();
//document.getElementById("classement").innerHTML;
