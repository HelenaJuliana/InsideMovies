const btn = document.getElementById("btnAdd");
const input = document.querySelector("#id");
const text = document.querySelector("#text");
conteudo = document.getElementById("conteudo");
const span1 = document.querySelector(".span");
const span2 = document.querySelector(".span2");
const email = document.querySelector("#email");
const fone = document.querySelector("#telefone");

btn.addEventListener("click", function() {
  console.log("Clicou!");
  let pesquisa = text.value;
  loadapi(pesquisa);
});
function loadapi(e) {
  const pesquisa = e;
  const url = `http://www.omdbapi.com/?s=${pesquisa}&apikey=312efa61`;
  fetch(url)
    .then(res => res.json())
    .then(json => {
      conteudo.innerHTML = "";
      console.log(json.Search[0]);

      // forEach pra pegar as informações pelo id do filme!
      json.Search.forEach(movie => {
        let movieInfo = `<div class="col">
            <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${
              movie.Poster
            }" alt="Card image cap">
            <div class="card-body">
              <h6 class="card-title">${movie.Title}</h6>
              <p class="card-text"><span class="negrito">Type: </span>${
                movie.Type
              }</p>
              <p class="card-text"><span class="negrito">Year: </span>${
                movie.Year
              }</p>
            </div>
          </div>
          </div>`;
        conteudo.insertAdjacentHTML("beforeend", movieInfo);
      });
    });
}

function validarnome(x) {
  var regex = /^[A-Z]{1}[a-z]+\s[A-Z][a-z]+(\s[A-Z][a-z]+)*$/;
  var nome = document.getElementById("nome").value;

  if (regex.test(nome)) {
    x.style.background = "white";
    dados += "<b>Nome do Responsável:</b> " + nome + "<br>";
  } else {
    x.style.background = "red";
  }
}

fone.addEventListener("keyup", function() {
  var regex = /^\(\d{2}\)(\d{4}|\d{5})-\d{4}$/;

  if (regex.test(fone.value)) {
    console.log(fone.value);
    span2.innerHTML = "";
  } else span2.innerHTML = "Telefone inválido";
});

email.addEventListener("keyup", function() {
  var regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

  if (regex.test(email.value)) {
    console.log(email.value);
    span1.innerHTML = "";
  } else span1.innerHTML = "Email inválido";
});

module.exports = loadapi(e);
module.exports = validarnome(x);
module.exports = validartelefone(x);
module.exports = validaremail(x);
