const requestUrl = "https://jsonplaceholder.typicode.com/users";


// function SendRequest(url){
//     return fetch(url).then((response)=>{
//         return response.json();
//     })
// }


// SendRequest(requestUrl+"/2")
// .then(data=>console.log(data))
// .catch(err =>console.log(err));


function SendRequest(method,url,body=null){
    const headers = {
        "Content-type":"application/json"
    };

    return fetch(url,{
        method:method,
        body:JSON.stringify(body),
        headers:headers
    });
}



const obj = {
    name:"Rubail",
    username:"rubail123",
    email:"rubaik@gmail.com"
};

SendRequest("POST", requestUrl, obj)
.then((data)=>console.log(data))
.catch((err)=>console.log(err));