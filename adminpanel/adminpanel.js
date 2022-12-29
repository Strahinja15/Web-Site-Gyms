var firebaseUrl = 'https://wd-sr4-2022-default-rtdb.europe-west1.firebasedatabase.app';
var fitnes_centri_kljuc = {}
var lista_korisnika = []

function init() {
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4) {
            if (xhttp.status == 200) {
                window.addEventListener('load', init)
                fitnes_centri_kljuc = JSON.parse(xhttp.responseText)
                for (let index in fitnes_centri_kljuc) {
                    lista_korisnika.push(fitnes_centri_kljuc[index])
                }
                const t_bodies = document.getElementById("table_body")
                for (let i = 0; i < lista_korisnika.length; i++) {

                    let tr = document.createElement("tr")
                    tr.id = "row-" + i
                    

                    let korisnik = document.createElement("td")
                    korisnik.setAttribute("data-label","Korisnik:")
                    korisnik.innerText = lista_korisnika[i].korisnickoIme
                    tr.appendChild(korisnik)

                    let email = document.createElement("td")
                    email.setAttribute("data-label","Email:")
                    email.innerText = lista_korisnika[i].email
                    tr.appendChild(email)

                    let puno_ime = document.createElement("td")
                    puno_ime.setAttribute("data-label","Puno ime:")
                    puno_ime.innerText = lista_korisnika[i].ime + " " + lista_korisnika[i].prezime
                    tr.appendChild(puno_ime)

                    let adresa = document.createElement("td")
                    adresa.setAttribute("data-label","Adresa:")
                    adresa.innerText = lista_korisnika[i].adresa
                    tr.appendChild(adresa)

                    let datum_rodjenja = document.createElement("td")
                    datum_rodjenja.setAttribute("data-label","Datum rodjenja:")
                    datum_rodjenja.innerText = lista_korisnika[i].datumRodjenja
                    tr.appendChild(datum_rodjenja)

                    let telefon = document.createElement("td")
                    telefon.setAttribute("data-label","Telefon:")
                    telefon.innerText = lista_korisnika[i].telefon
                    tr.appendChild(telefon)

                    let dugme = document.createElement("td")
                    dugme.setAttribute("data-label", "Radnja:")
                    let izmeni = document.createElement("button")
                    izmeni.classList.add("change")
                    izmeni.innerText = "Izmeni"
                    izmeni.onclick = function(){
                        document.getElementById("User_popup").style.display = "block";
                        row = document.getElementById("row-" + i)
                        elementi = row.children
                        document.getElementById("korisnik").value = elementi[0].innerText
                        document.getElementById("lozinka").value = elementi[1].innerText
                        document.getElementById("email").value = elementi[2].innerText
                        document.getElementById("ime").value = elementi[3].innerText
                        document.getElementById("prezime").value = elementi[4].innerText
                        document.getElementById("datum").value = elementi[5].innerText
                    }
                    
                    izmeni.setAttribute("data-label","Radnja:")
                    dugme.appendChild(izmeni)

                    let obrisi = document.createElement("button")
                    obrisi.classList.add("clear")
                    obrisi.innerText = "Obrisi"
                    dugme.appendChild(obrisi)
                    
                    tr.appendChild(dugme)
                    t_bodies.appendChild(tr)
                    
                    
                    
                    
                }
                
            }

        }
    }
    xhttp.open('GET', firebaseUrl + '/korisnici.json')
    xhttp.send()
}
var fitnes_centri_kljuc1 = {}
var lista_teretana = []
function onit() {
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4) {
            if (xhttp.status == 200) {
                window.addEventListener('load', onit)
                fitnes_centri_kljuc1 = JSON.parse(xhttp.responseText)
                for (let index in fitnes_centri_kljuc1) {
                    lista_teretana.push(fitnes_centri_kljuc1[index])
                }
                
                const t_gym = document.getElementById("table-body")
                for (let i = 0; i < lista_teretana.length; i++) {
                    console.log(lista_teretana[i])

                    let tr = document.createElement("tr")
                    tr.id = "row" + i

                    let naziv = document.createElement("td")
                    naziv.setAttribute("data-label","Naziv:")
                    naziv.innerText = lista_teretana[i].naziv
                    tr.appendChild(naziv)

                    let adresa = document.createElement("td")
                    adresa.setAttribute("data-label","Adresa:")
                    adresa.innerText = lista_teretana[i].adresa
                    tr.appendChild(adresa)

                    let godinaOtvaranja = document.createElement("td")
                    godinaOtvaranja.setAttribute("data-label","Godina otvaranja:")
                    godinaOtvaranja.innerText = lista_teretana[i].godinaOtvaranja
                    tr.appendChild(godinaOtvaranja)

                    let brojDostupnihTreninga = document.createElement("td")
                    brojDostupnihTreninga.setAttribute("data-label","Broj dostupnih treninga:")
                    brojDostupnihTreninga.innerText = lista_teretana[i].brojDostupnihTreninga
                    tr.appendChild(brojDostupnihTreninga)

                    let clanarina = document.createElement("td")
                    clanarina.setAttribute("data-label","Broj dostupnih treninga:")
                    clanarina.innerText = lista_teretana[i].mesecnaClanarina
                    tr.appendChild(clanarina)

                    let broj_ocena = document.createElement("td")
                    broj_ocena.setAttribute("data-label","Broj ocena:")
                    broj_ocena.innerText = lista_teretana[i].ocene.length
                    tr.appendChild(broj_ocena)

                    let prosecna_ocena = document.createElement("td")
                    prosecna_ocena.setAttribute("data-label","Broj ocena:")
                    prosecna_ocena.innerText = lista_teretana[i].prosecnaOcena
                    tr.appendChild(prosecna_ocena)

                    let dugme = document.createElement("td")
                    dugme.setAttribute("data-label", "Radnja:")
                    let izmeni = document.createElement("button")
                    izmeni.classList.add("change")
                    izmeni.onclick = function openUser(){
                        document.getElementById("gym_popup").style.display = "block";
                        row = document.getElementById("row" + i)
                        elementi = row.children
                        document.getElementById("naziv").value = elementi[0].innerText
                        document.getElementById("adresa").value = elementi[1].innerText
                        document.getElementById("godina_otvaranja").value = elementi[2].innerText
                        document.getElementById("treninzi").value = elementi[3].innerText
                        document.getElementById("clanarina").value = elementi[4].innerText
                        document.getElementById("broj_ocena").value = elementi[5].innerText
                        document.getElementById("prosek").value = elementi[6].innerText
                    }
                    izmeni.innerText = "Izmeni"
                    izmeni.setAttribute("data-label","Radnja:")
                    dugme.appendChild(izmeni)

                    let obrisi = document.createElement("button")
                    obrisi.classList.add("clear")
                    obrisi.innerText = "Obrisi"
                    obrisi.setAttribute("data-label","Radnja:")
                    dugme.appendChild(obrisi)
                    tr.appendChild(dugme)
                    
                    

                    t_gym.appendChild(tr)
                    
                }
                
            }

        }
    }
    xhttp.open('GET', firebaseUrl + '/fitnesCentri.json')
    xhttp.send()
}
function prikaziTeretane(){
    document.getElementById("table_container").style["display"] = "none";
    document.getElementById("table_gym").style["display"] = "block";

}
function prikaziKorisnike(){
    document.getElementById("table_container").style["display"] = "block";
    document.getElementById("table_gym").style["display"] = "none";

}

function closeUser(){
        document.getElementById("User_popup").style.display = "none";
}
function closeGym(){
    document.getElementById("gym_popup").style.display ="none";
}

window.addEventListener('load', init)
window.addEventListener('load', onit)
