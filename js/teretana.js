var firebaseUrl = 'https://wd-sr4-2022-default-rtdb.europe-west1.firebasedatabase.app';
var fitnes_centri_kljuc = {}
var lista_teretana = []
var ocene = [];
var lista_indexa = []
var ocenjivanje_teretane;
let test;
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

                let iTeretane = document.location.search.slice("-1")
                test = iTeretane
                teretana_i = lista_teretana[iTeretane]
                ocenjivanje_teretane = teretana_i
                lista_indexa = Object.keys(fitnes_centri_kljuc)
                ocene = teretana_i.ocene;
                console.log(teretana_i)
                console.log(ocene)

                document.getElementById("heading").innerText = teretana_i.naziv

                document.getElementById("head-info").innerText = "Kako izgleda " + teretana_i.naziv + "?"

                document.getElementById("image").setAttribute("src", teretana_i.slika)

                document.getElementById("info-title").innerText = teretana_i.naziv + " informacije !"

                document.getElementById("p1").innerHTML = "<b>Godina otvaranja:</b> " + teretana_i.godinaOtvaranja

                document.getElementById("p2").innerHTML = "<b>Mesecna clanarina:</b> " + teretana_i.mesecnaClanarina

                document.getElementById("p3").innerHTML = "<b>Prosecna ocena:</b> " + teretana_i.prosecnaOcena

                document.getElementById("p4").innerHTML = "<b>Broj ocena:</b> " + teretana_i.ocene.length

                document.getElementById("p5").innerHTML = "<b>Adresa:</b> " + teretana_i.adresa

                document.getElementById("paragraph-title").innerText = "Nesto o " + teretana_i.naziv + "-u"

                document.getElementById("paragraph").innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat orci non tortor elementum semper. Proin nec mauris eu ante ullamcorper hendrerit vel nec dolor. Integer non lorem sit amet lectus rutrum tempor. Phasellus consectetur, augue non pellentesque laoreet, erat leo lacinia magna, lobortis malesuada nibh dui sed tortor."

                document.getElementById("card-title").innerText = "Najbolji treninzi " + teretana_i.naziv + " teretane ?!?"

            }

        }
    }
    xhttp.open('GET', firebaseUrl + '/fitnesCentri.json')
    xhttp.send()
}


let treninzi_kljuc = {}

function unit() {
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4) {
            if (xhttp.status == 200) {

                treninzi_kljuc = JSON.parse(xhttp.responseText)
                for (let i in treninzi_kljuc) {
                    lista_teretana.push(treninzi_kljuc[i])
                }
                let index_kljuc = document.location.search.slice("-1")

                idTreninga_json = lista_teretana[index_kljuc].idTreninga //pasuje posebno  za svaku teretanu njene treninge zasebno za sebe

                treninzi_teretane = treninzi_kljuc[idTreninga_json]

                treninzi_lista = []



                for (i in treninzi_teretane) {
                    treninzi_lista.push(treninzi_teretane[i])
                }

                const card_container = document.getElementById("container")
                console.log(treninzi_lista[0].kratakOpis)
                for (index2 = 0; index2 < treninzi_lista.length; index2++) {



                    let cards = document.createElement("div")
                    cards.classList.add("cards")

                    let cardBody = document.createElement("div")
                    cardBody.classList.add("card-body")
                    cards.appendChild(cardBody)

                    let header = document.createElement("h2")
                    header.innerText = treninzi_lista[index2].naziv
                    cardBody.appendChild(header)

                    let zanr = document.createElement("p")
                    zanr.innerHTML = "<b>Tip treninga:</b> " + treninzi_lista[index2].zanr
                    cardBody.appendChild(zanr)

                    let opis = document.createElement("p")
                    opis.innerText = treninzi_lista[index2].kratakOpis
                    cardBody.appendChild(opis)

                    let cardFooter = document.createElement("div")
                    cardFooter.classList.add("card-footer")
                    cards.appendChild(cardFooter)
                    let viseInformacija = document.createElement("a")
                    viseInformacija.innerText = "Vise informacija"
                    viseInformacija.setAttribute("href", "trening.html" + "?" + idTreninga_json + "=" + index2)

                    cardFooter.appendChild(viseInformacija)

                    card_container.appendChild(cards)
                }

            }

        }
    }
    xhttp.open('GET', firebaseUrl + '/treninzi.json')
    xhttp.send()
}
const starIndex = document.querySelector(".stars");
const stars = document.querySelectorAll(".stars .star");

let ocena = 0
stars.forEach((star, clickedIdx) => {

    star.addEventListener("click", () => {

        starIndex.classList.add("disabled");

        stars.forEach((otherStar, otherIdx) => {

            if (otherIdx <= clickedIdx) {

                otherStar.classList.add("active");
                ocena = clickedIdx + 1

            }
        });

    });
})




function ocenjivanjeTeretane() {
    ocene.push(ocena)
    console.log(ocene)
    if (ocena != 0) { //ako ocena nije 0 onda radi

        function roundToTwo(num) { //pomocna funckija da zaokruzi broj na 2 decimale
            return +(Math.round(num + "e+2") + "e-2");
        }
        function calculateSum(array) { // pomocna funckija da nadje sumu niza
            return array.reduce((amburator, vrednos) => {
                return amburator + vrednos;
            }, 0);
        }

        document.getElementById("p4").innerHTML = "<b>Broj ocena:</b> " + ocene.length
        document.getElementById("p3").innerHTML = "<b>Prosecna ocena:</b> " + roundToTwo(calculateSum(ocene) / ocene.length)


        let rezultat = {
            "ocene": ocene,
            "prosecnaOcena": roundToTwo(calculateSum(ocene) / ocene.length)
        }
        var xhr = new XMLHttpRequest();
        xhr.open("PATCH", "https://wd-sr4-2022-default-rtdb.europe-west1.firebasedatabase.app/fitnesCentri/" + lista_indexa[test] + ".json");
        xhr.setRequestHeader("Content-type", "application/json");
        var ocena_json = JSON.stringify(rezultat);
        xhr.send(ocena_json);
        
    }
}






window.addEventListener('load', init)
window.addEventListener('load', unit)






