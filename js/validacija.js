function registracija() {
    korisnik_info = {
        "adresa": document.getElementById("adresa").value,
        "datumRodjenja": document.getElementById("datum").value,
        "email": document.getElementById("email").value,
        "ime": document.getElementById("ime").value,
        "lozinka": document.getElementById("lozinka").value,
        "prezime": document.getElementById("prezime").value,
        "telefon": document.getElementById("broj").value,
        "korisnickoIme": document.getElementById("korisnik").value
    }

var xhr = new XMLHttpRequest();
xhr.open("POST", "https://wd-sr4-2022-default-rtdb.europe-west1.firebasedatabase.app/korisnici.json");
xhr.setRequestHeader("Content-type","application/json");
var korisnik_json = JSON.stringify(korisnik_info);
xhr.send(korisnik_json);
xhr.onload = function(){
    if (xhr.status == 200){
        window.location.reload()
        console.log(korisnik_info)
        //Zahtev je poslat. odgovor mozete napisati ovde
    }
    //desila se greska, mozete je ispisati ovde
}
}

let inputs = document.querySelectorAll('input');
let errors = {
    "korisnik" : [],
    "ime" : [],
    "prezime" : [],
    "adresa" : [],
    "datum" : [],
    "broj" : [],
    "email" : [],
    "lozinka" : [],
    "ponovilozinku" : []
}
inputs.forEach(element =>{
    element.addEventListener('keyup',e =>{
        let currentInput = e.target;
        let inputValue = currentInput.value;
        let inputName = currentInput.getAttribute('name');
        
        if(inputValue.length > 4){
            errors[inputName] = []

            switch(inputName){
                case 'ime' :
                    if(!validateIme(inputValue)){
                        errors[inputName].push("Ime moze sadrzati samo slova")
                    }
                break;
                
                case 'prezime' :
                    if(!validatePrezime(inputValue)){
                        errors[inputName].push("Prezime moze sadrzati samo slova")
                    }
                break;

                case 'email' :
                    if(!validateEmail(inputValue)){
                        errors[inputName].push("Neispravno uneta email adresa")
                    }
                break;

                case 'broj' :
                    if(!validateBroj(inputValue)){
                        errors[inputName].push("Morate uneti pravilan oblik broja telefona")
                    }
                break;

                case 'ponovilozinku' :
                    let lozinka = document.querySelector('input[name="lozinka"]').value;
                    if(inputValue != lozinka){
                        errors[inputName].push("Lozinke moraju da se poklapaju");
                    }
                break;
                
            }

        }else{
            errors[inputName] = ['Polje ne moze imati manje od 5 karaktera']
        }
        populateErrors();
        
    });
})
const populateErrors = () => {

    for(let elem of document.querySelectorAll('ul.validation')){
        elem.remove();
    }

    for(let key of Object.keys(errors)){
        let input = document.querySelector(`input[name="${key}"]`)
        let parentElement = input.parentElement;
        let errorsElement = document.createElement("ul");
        errorsElement.classList.add("validation");
        parentElement.appendChild(errorsElement);

        console.log(parentElement)
        errors[key].forEach(error =>{
            let li = document.createElement("li");
            li.innerText = error;
            errorsElement.appendChild(li);
        });
        

    }
}
const validateEmail = email =>{
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        return true;
    }
    return false;
}
const validateIme = name =>{
    if(/^[\p{L} ,.'-]+$/u.test(name)){
        return true;
    }
    return false;
}
const validatePrezime = surname =>{
    if(/^[\p{L} ,.'-]+$/u.test(surname)){
        return true;
    }
    return false;
}

const validateBroj = mobile =>{
    if(/^06[\d.-]*$/.test(mobile)){
        return true;
    }
    return false;
}