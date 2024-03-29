let inputChange = document.querySelectorAll('inputChange');
let korisnik_errors = {
    "korisnik_": [],
    "korisnik_ime": [],
    "korisnik_prezime": [],
    "korisnik_adresa": [],
    "korisnik_datum": [],
    "korisnik_broj": [],
    "korisnik_email": [],
}
console.log(inputChange)
inputChange.forEach(element => {
    element.addEventListener('keyup', e => {
        let changeinput = e.target;
        let changeValue = changeinput.value;
        let changeName = changeinput.getAttribute('name');

        if (changeValue.length > 4) {
            korisnik_errors[changeName] = []

            switch (changeName) {
                case 'korisnik_ime':
                    if (!validateImeChange(changeValue)) {
                        korisnik_errors[changeName].push("Ime moze sadrzati samo slova")
                    }
                    break;

                case 'korisnik_prezime':
                    if (!validatePrezimeChange(changeValue)) {
                        korisnik_errors[changeName].push("Prezime moze sadrzati samo slova")
                    }
                    break;

                case 'korisnik_email':
                    if (!validateEmailChange(changeValue)) {
                        korisnik_errors[changeName].push("Neispravno uneta email adresa")
                    }
                    break;

                case 'korisnik_broj':
                    if (!validateBrojChange(changeValue)) {
                        korisnik_errors[changeName].push("Morate uneti pravilan oblik broja telefona")
                    }
                    break;
                    
                case 'ponovilozinku':
                    let lozinka = document.querySelector('inputChange[name="lozinka"]').value;
                    if (inputChangeValue != lozinka) {
                        errors[inputChangeName].push("Lozinke moraju da se poklapaju");
                    }
                    break;

                case 'korisnik_datum':
                    if (!validateDate(changeValue)) {
                        korisnik_errors[changeName].push("Morate ispravivno napisati datum svog rodjenja")
                    }
                    break;
            }

        } else {
            korisnik_errors[changeName] = ['Polje ne moze imati manje od 5 karaktera']
        }
        IzmeniKorisnika();

    });
})
const IzmeniKorisnika = () => {

    for (let elem of document.querySelectorAll('ul.change')) {
        elem.remove();
    }

    for (let key of Object.keys(korisnik_errors)) {
        let inputChange = document.querySelector(`inputChange[name="${key}"]`)
        let parentChangeElement = inputChange.parentChangeElement;
        let korisnik_errorsElement = document.createElement("ul");
        korisnik_errorsElement.classList.add("change");
        parentChangeElement.appendChild(korisnik_errorsElement);

        console.log(parentChangeElement)
        korisnik_errors[key].forEach(error => {
            let li = document.createElement("li");
            li.innerText = error;
            korisnik_errorsElement.appendChild(li);
        });


    }
}
const validateEmailChange = email => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true;
    }
    return false;
}
const validateImeChange = name => {
    if (/^[\p{L} ,.'-]+$/u.test(name)) {
        return true;
    }
    return false;
}
const validatePrezimeChange = surname => {
    if (/^[\p{L} ,.'-]+$/u.test(surname)) {
        return true;
    }
    return false;
}

const validateBrojChange = mobile => {
    if (/^06[\d.-]*$/.test(mobile)) {
        return true;
    }
    return false;
}
const validateDate = datum => {
    if (/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(datum)) {
        return true;
    }
    return false;
}