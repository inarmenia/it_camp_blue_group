function respons() {

let url = 'http://localhost:3000/authors';
let app =  document.getElementById("app");


fetch(url)
.then(response => response.json())
.then(json => {
  for (var i = 0; i <= json.length-1; i++) {
    let el = document.createElement("div");
    let el3 = document.createElement("div");
    let name= json[i].name; 
    let images= json[i].img; 
    let works = json[i]['works'];
    el.classList.add('main');
    el.innerHTML = `<div class="main-pers"> 
    <div class="main-pers-cont">
    <div class="main-pers-cont-img">
    <img src="${images}" onclick="window.open('author.html')">
    </div>
    <div class="main-pers-cont-inf">
    <p>
    <span onclick="window.open('author.html')"  id="app" >${name}</span>
    <span>Sea painter</span>
    <span>Lorem Ipsum is simply dummy text</span>
    </p>
    </div></div></div>`; 
    app.appendChild(el);
    for(let j = 0; j < works.length; j++){
            let img = works[j];
            let el2 = document.createElement("div");
            el2.classList.add('main-works');
            el2.innerHTML = `
            
            <a href="${img}"><img class="preview" src="${img}" alt="window"></a>`;
       
            el.appendChild(el2);       
        }
      }
      
}).catch(function(err) {
  console.log(err);
  });


};

export default respons();