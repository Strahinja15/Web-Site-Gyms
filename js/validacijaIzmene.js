let inputChange = document.querySelectorAll('input');
let korisnik_errors = {
    "korisnik_" : [],
    "korisnik_ime" : [],
    "korisnik_prezime" : [],
    "korisnik_adresa" : [],
    "korisnik_datum" : [],
    "korisnik_broj" : [],
    "korisnik_email" : [],
}
console.log(inputChange)
inputChange.forEach(element =>{
    element.addEventListener('keyup',e =>{
        let currentInput = e.target;
        let inputValue = currentInput.value;
        let changeName = currentInput.getAttribute('name');
        
        if(inputValue.length > 4){
            korisnik_errors[changeName] = []

            switch(changeName){
                case 'korisnik_ime' :
                    if(!validateImeChange(inputValue)){
                        korisnik_errors[changeName].push("Ime moze sadrzati samo slova")
                    }
                break;
                
                case 'korisnik_prezime' :
                    if(!validatePrezimeChange(inputValue)){
                        korisnik_errors[changeName].push("Prezime moze sadrzati samo slova")
                    }
                break;

                case 'korisnik_email' :
                    if(!validateEmailChange(inputValue)){
                        korisnik_errors[changeName].push("Neispravno uneta email adresa")
                    }
                break;

                case 'korisnik_broj' :
                    if(!validateBrojChange(inputValue)){
                        korisnik_errors[changeName].push("Morate uneti pravilan oblik broja telefona")
                    }
                break;
                
            }

        }else{
            korisnik_errors[changeName] = ['Polje ne moze imati manje od 5 karaktera']
        }
        populatekorisnik_errors();
        
    });
})
const populatekorisnik_errors = () => {

    for(let elem of document.querySelectorAll('ul.changeuser')){
        elem.remove();
    }

    for(let key of Object.keys(korisnik_errors)){
        let input = document.querySelector(`input[name="${key}"]`)
        let parentElement = input.parentElement;
        let korisnik_errorsElement = document.createElement("ul");
        korisnik_errorsElement.classList.add("changeuser");
        parentElement.appendChild(korisnik_errorsElement);

        console.log(parentElement)
        korisnik_errors[key].forEach(error =>{
            let li = document.createElement("li");
            li.innerText = error;
            korisnik_errorsElement.appendChild(li);
        });
        

    }
}
const validateEmailChange = email =>{
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        return true;
    }
    return false;
}
const validateImeChange = name =>{
    if(/^[\p{L} ,.'-]+$/u.test(name)){
        return true;
    }
    return false;
}
const validatePrezimeChange = surname =>{
    if(/^[\p{L} ,.'-]+$/u.test(surname)){
        return true;
    }
    return false;
}

const validateBrojChange = mobile =>{
    if(/^06[\d.-]*$/.test(mobile)){
        return true;
    }
    return false;
}