const requestUrl = "https://jsonplaceholder.typicode.com/users";

function SendRequest(method, url, body = null){
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open(method,url);
        xhr.onload = ()=>{
            if(xhr.status >=400){
                reject(xhr.response);
            }
            else{
                resolve(xhr.response);
            }
        };
        xhr.onerror = ()=>{
            reject(xhr.response);
        }

        xhr.send(body);
    });
}


SendRequest("GET", requestUrl)
.then(data=>{
    console.log(data);
    FillDataToHTML(data);
})
.catch(err=>{
    console.error(err);
});

function FillDataToHTML(response){
    let jsonResult = JSON.parse(response);
    let myTable = document.getElementById("mytable");


    let content = "";
    content+=`
        <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th></th>
        </tr>
    `;

    jsonResult.forEach(e => {
        content+=`
            <tr>
                <td>${e.name}</td>
                <td>${e.username}</td>
                <td>${e.email}</td>
                <td>
                    <button id = "#deleteBtn" onclick="DeleteUser(${e.id})">Delete User</button>
                </td>
            </tr>
        `;
    });

    myTable.innerHTML = content;

}

function DeleteUser(id){
    SendRequest("DELETE",requestUrl+"/"+id)
    .then(data=>{
        console.log(data);
        alert("Deleted successfuly");
    })
    .catch(err=>{
        console.error(err);
    });
}


function AddRequest(){
    const name = document.getElementById("name");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const obj = {
        name:name,
        username:username,
        email:email
    };

    SendRequest("POST", requestUrl, obj)
    .then(data=>{
        console.log(data);
        alert("Added successfuly");
    })
    .catch(err=>{
        console.error(err);
    });
}


