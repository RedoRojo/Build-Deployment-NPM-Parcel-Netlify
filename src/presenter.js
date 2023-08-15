const name = document.querySelector("#user-name");
const button = document.querySelector("#greeting-button");
const div = document.querySelector("#response-container");
const masculino = document.querySelector("#male-gender");
const femenino = document.querySelector("#female-gender");

let saludo = "Hola! ";
button.addEventListener("click", () => {
    
    if(masculino.checked) saludo += "Sr.  ";
    else if(femenino.checked) saludo += "Sra.  ";

    div.innerHTML = "<p>" + saludo + name.value + "</p"
}
)
