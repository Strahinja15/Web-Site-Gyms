var firebaseUrl = 'https://wd-sr4-2022-default-rtdb.europe-west1.firebasedatabase.app';
var fitnes_centri_kljuc = {}
var lista_teretana = []

function init() {
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4) {
            if (xhttp.status == 200) {
                window.addEventListener('load', init)
                fitnes_centri_kljuc = JSON.parse(xhttp.responseText)
                for (let index in fitnes_centri_kljuc) {
                    lista_teretana.push(fitnes_centri_kljuc[index])
                }
                const container = document.getElementById("container")
                for (let i = 0; i < lista_teretana.length; i++) {
                    console.log(lista_teretana[i])
                    let card = document.createElement("div");
                    card.classList.add("card");

                    let card_image = document.createElement("div");
                    let image = document.createElement("img");
                    image.style["width"] = "270px"
                    image.style["height"] = "150px"
                    image.style["border-radius"] = "15px 15px 0 0"
                    image.src = lista_teretana[i].slika
                    card_image.appendChild(image)
                    card.appendChild(card_image)

                    let card_description = document.createElement("div");
                    card_description.classList.add("card-description");

                    let header = document.createElement("h2");
                    header.innerText = lista_teretana[i].naziv
                    card_description.appendChild(header)

                    let godinaOtvaranja = document.createElement("p");
                    godinaOtvaranja.innerText = "Otvoreno " + lista_teretana[i].godinaOtvaranja + " godine."
                    card_description.appendChild(godinaOtvaranja)

                    let adresa = document.createElement("p");
                    adresa.innerText = "Adresa: " + lista_teretana[i].adresa
                    card_description.appendChild(adresa)
                    
                    let mesecnaClanarina = document.createElement("p");
                    mesecnaClanarina.innerText = "Mesecna clanarina: " + lista_teretana[i].mesecnaClanarina
                    card_description.appendChild(mesecnaClanarina)

                    let dugme = document.createElement("a");
                    dugme.classList.add("link");
                    dugme.innerHTML = "citaj vise"
                    dugme.addEventListener('click',  function (){

                        window.document.location.href = "teretana/teretana.html" + "?id=" +i})
                    card_description.appendChild(dugme)
                    card.appendChild(card_description)
                    container.appendChild(card)
                }
            }

        }
    }
    xhttp.open('GET', firebaseUrl + '/fitnesCentri.json')
    xhttp.send()
}

window.addEventListener('load', init)

