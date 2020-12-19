/*fetch("http://localhost:4200/players",{
        method: 'GET',
        headers:{
                'Content-Type': 'application/json'
        }

})
    .then(res=>{
        console.log(res);
        if(res.ok) {
        console.log("success")
        }
        else { console.log("not")
        }})
    .then(res=>{
            return res.json()
    })
    .then(data=>console.log(data))
    .catch(error=>console.error(error))*/

fetch("http://localhost:4200/players")

    // Converting received data to JSON
    .then(response => response.json())
    .then(json => {

            // Create a variable to store HTML
            let li = `<tr><th>User</th><th>Score</th></tr>`;

            // Loop through each data and add a table row
            json.forEach(user => {
                    li += `<tr> 
                <td>${user.username} </td> 
                <td>${user.points}</td>          
            </tr>`;
            });

            // Display result
            document.getElementById("classement").innerHTML = li;
    });

