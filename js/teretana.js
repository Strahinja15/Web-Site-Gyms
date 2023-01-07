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

                let iTeretane = document.location.search.slice("-1")
                document.getElementById("heading").innerText = lista_teretana[iTeretane].naziv

                document.getElementById("head-info").innerText = "Kako izgleda " + lista_teretana[iTeretane].naziv + "?"

                document.getElementById("image").setAttribute("src", lista_teretana[iTeretane].slika)

                document.getElementById("info-title").innerText = lista_teretana[iTeretane].naziv + " informacije !"

                document.getElementById("p1").innerHTML = "<b>Godina otvaranja:</b> " + lista_teretana[iTeretane].godinaOtvaranja

                document.getElementById("p2").innerHTML = "<b>Mesecna clanarina:</b> " + lista_teretana[iTeretane].mesecnaClanarina

                document.getElementById("p3").innerHTML = "<b>Prosecna ocena:</b> " + lista_teretana[iTeretane].prosecnaOcena

                document.getElementById("p4").innerHTML = "<b>Broj ocena:</b> " + lista_teretana[iTeretane].ocene.length

                document.getElementById("p5").innerHTML = "<b>Adresa:</b> " + lista_teretana[iTeretane].adresa

                document.getElementById("paragraph-title").innerText = "Nesto o " + lista_teretana[iTeretane].naziv + "-u"

                document.getElementById("paragraph").innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat orci non tortor elementum semper. Proin nec mauris eu ante ullamcorper hendrerit vel nec dolor. Integer non lorem sit amet lectus rutrum tempor. Phasellus consectetur, augue non pellentesque laoreet, erat leo lacinia magna, lobortis malesuada nibh dui sed tortor."

                document.getElementById("card-title").innerText = "Najbolji treninzi " + lista_teretana[iTeretane].naziv + " teretane ?!?"

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

                console.log(idTreninga_json)

                for (i in treninzi_teretane) {
                    treninzi_lista.push(treninzi_teretane[i])
                }

                const card_container = document.getElementById("container")
                console.log(treninzi_lista[0].kratakOpis)
                for (index2 = 0; index2 < treninzi_lista.length; index2++) {
                    console.log(treninzi_lista[index2].kratakOpis)


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
                    console.log(cards)
                    card_container.appendChild(cards)
                }

            }

        }
    }
    xhttp.open('GET', firebaseUrl + '/treninzi.json')
    xhttp.send()
}


window.addEventListener('load', init)
window.addEventListener('load', unit)






