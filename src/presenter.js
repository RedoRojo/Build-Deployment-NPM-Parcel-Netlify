const name = document.querySelector("#user-name");
const age = document.querySelector("#user-age"); 

const button = document.querySelector("#greeting-button");
const div = document.querySelector("#response-container");
const masculino = document.querySelector("#male-gender");
const femenino = document.querySelector("#female-gender");

button.addEventListener("click", () => {

    let saludo = "Hola! ";
    let date = new Date(); 
    let hour = date.getHours(); 
    let userLang = navigator.language

    
    if(userLang == "en-US") saludo = "Hello! "; 

    if(hour >= 6 && hour<= 12) {
        if(userLang == "en-US") saludo += "Good morning ";
        else saludo += "Buenos dias "; 
    }
    else if(hour > 12 && hour < 19) {
        if(userLang == "en-US") saludo += "Good afternoon ";
        else saludo += "Buenas tardes ";
    }
    else {
        if(userLang == "en-US") saludo += "Good evening ";
        else saludo += "Buenas noches ";
        
    } 

    if(Number.parseInt(age.value) > 30) { 
        if(masculino.checked) {
            if(userLang == "en-US") saludo += "Mr.  "; 
            else saludo += "Sr.  ";
        }
        else if(femenino.checked) {
            if(userLang == "en-US") saludo += "Mrs.  "; 
            else saludo += "Sra.  ";
        }
    }
    

    div.innerHTML = "<p>" + saludo + name.value + "</p"
}
)
