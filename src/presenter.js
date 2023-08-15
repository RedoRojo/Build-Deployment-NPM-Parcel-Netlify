const name = document.querySelector("#user-name");
const age = document.querySelector("#user-age"); 

const button = document.querySelector("#greeting-button");
const div = document.querySelector("#response-container");
const masculino = document.querySelector("#male-gender");
const femenino = document.querySelector("#female-gender");

let saludo = "Hola! ";
button.addEventListener("click", () => {
    let date = new Date(); 
    let hour = date.getHours(); 

    if(hour >= 6 && hour<= 12)  saludo += "Buenos dias "; 
    else if(hour > 12 && hour < 19) saludo += "Buenas tardes ";
    else saludo += "Buenas noches ";

    if(Number.parseInt(age.value) > 30) { 
        if(masculino.checked) saludo += "Sr.  ";
        else if(femenino.checked) saludo += "Sra.  ";
    }

    div.innerHTML = "<p>" + saludo + name.value + "</p"
}
)
