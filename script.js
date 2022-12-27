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
                    for (let i in lista_teretana){
                        console.log(lista_teretana[i])
                    }
                }
                
            }
        }
    }
    xhttp.open('GET', firebaseUrl + '/fitnesCentri.json')
    xhttp.send()
    
    
}
window.addEventListener('load', init)

