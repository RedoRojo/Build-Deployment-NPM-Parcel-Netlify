const name = document.querySelector("#user-name");
const button = document.querySelector("#greeting-button");
const div = document.querySelector("#response-container");
const saludo = "Hola! ";
button.addEventListener("click", () => {
    console.log(name.value);
    div.innerHTML = "<p>" + saludo + name.value + "</p"
}
)
