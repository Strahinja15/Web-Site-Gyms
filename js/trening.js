var firebaseUrl = 'https://wd-sr4-2022-default-rtdb.europe-west1.firebasedatabase.app';
var trening_kljuc = {}
var lista_treniga = []

function it(string_od_treninga) {
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4) {
            if (xhttp.status == 200) {
                window.addEventListener('load', it)
                trening_kljuc = JSON.parse(xhttp.responseText)
                for (let index3 in trening_kljuc) {
                    lista_treniga.push(trening_kljuc[index3])
                }
                console.log(lista_treniga)
                let location = document.location.search
                let treningID = location.slice(-1)
                let treninziID = location.slice(1, -2)

                let treninzi = trening_kljuc[treninziID]
                lista = []
                for (k in treninzi) {
                    lista.push(treninzi[k])
                }

                let trening = lista[treningID]


                document.getElementById("title").innerText = "- " + trening.naziv + " -"
                document.getElementById("capacity").innerText = "Broj osoba: " + trening.maxOsobe
                document.getElementById("time").innerText = "Vreme trajanja treniga: " + trening.trajanje + " minuta"
                document.getElementById("genre").innerText = "Vrsta treninga: " + trening.zanr
                document.getElementById("description").innerText = "Sta je to " + trening.naziv + "?" + "\n" + "\n" + trening.opis
            }
        }
    }
    xhttp.open('GET', firebaseUrl + '/treninzi.json')
    xhttp.send()
}
window.addEventListener('load', it)




