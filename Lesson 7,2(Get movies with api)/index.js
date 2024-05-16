async function GetMovies() {
  let content = "";
  let movie = document.getElementById("movie").value;
  let url = `https://www.omdbapi.com/?t=${movie}&apikey=ddee1dae&`;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onload = () => {
    const obj = JSON.parse(xhr.responseText);

    obj.Search.forEach((e) => {
      console.log(e);

      content = `
        <div class="card m-5" style="width: 18rem;">
        <img src="${e.Poster}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${e.Title}</h5>
          <p class="card-text">Year: ${e.Year}</p>
          <p class="card-text">Description: ${e.Plot}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
        `;
    });

    let section = document.getElementById("result");
    section.innerHTML += content;
  };
  xhr.send();
}
GetMoviesCall;

async function GetMoviesCall() {
  const result = await GetMovies();
}




function SendRequest(method,url,body=null){
    return fetch(url)
    .then((r)=>{
        return r.json();
    }
    )
}

function TestFetch(){
    let movie  = document.getElementById('result');
}