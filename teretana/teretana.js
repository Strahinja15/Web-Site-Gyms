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
                
                document.getElementById()

            }

        }
    }
    xhttp.open('GET', firebaseUrl + '/fitnesCentri.json')
    xhttp.send()
}

window.addEventListener('load', init)