var div1 = document.createElement("div");
div1.setAttribute("class", "container overflow-hidden");
div1.setAttribute("id", "containerDiv");

var div2 = document.createElement("div");
div2.setAttribute("class", "row mt-3 gy-4 justify-content-center");
div2.setAttribute("id", "rowDiv");

div1.appendChild(div2);

document.body.appendChild(div1);

var rowParent = document.getElementById("rowDiv");

fetch("https://restcountries.eu/rest/v2/all")
  .then((data) => data.json())
  .then((data2) => {
    for (let v of data2) {
      let dd = document.createElement("div");
      dd.setAttribute(
        "class",
        "col-11 col-sm-10 col-md-6 col-lg-4 col-xl-4 column"
      );

      let cd = document.createElement("div");
      cd.setAttribute("class", "card fullcard text-white bg-secondary");

      let hed = document.createElement("h5");
      hed.setAttribute("class", "card-title");
      hed.innerText = v.name;

      cd.appendChild(hed);

      let ig = document.createElement("img");
      ig.setAttribute("class", "card-img-top immgg");
      ig.setAttribute("src", v.flag);
      ig.setAttribute("alt", "");

      cd.appendChild(ig);

      let dd2 = document.createElement("div");
      dd2.setAttribute("class", "card-body cardbody");

      let par = document.createElement("p");
      par.setAttribute("class", "card-text cardtext");

      let itext =
        "Capital : " +
        v.capital +
        "<br />  Region : " +
        v.region +
        "<br /> Country Code : " +
        v.alpha3Code +
        "<br />";

      par.innerHTML = itext;

      dd2.appendChild(par);

      let butn = document.createElement("button");
      butn.setAttribute("class", "bttn btn btn-primary");
      butn.innerText = "Check for whether";
      butn.addEventListener("click", () => {
        handleClick(v.latlng);
      });

      dd2.appendChild(butn);

      cd.appendChild(dd2);

      dd.appendChild(cd);
      rowParent.appendChild(dd);
    }
  })
  .catch((err) => console.log(err));

function handleClick(x) {
  let url =
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
    x[0] +
    "&lon=" +
    x[1] +
    "&appid=a1564106a808823a36bc6e4d8702533d";
  fetch(url)
    .then((data) => data.json())
    .then((data) => {
      let temp = data.main.temp;
      let x = "Temperature : " + temp;
      alert(x);
    })
    .catch((err) => console.log(err));
}
