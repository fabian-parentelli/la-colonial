const $form = document.querySelector("#form");
const $buttonMailto = document.querySelector("#trucazo"); 

$form.addEventListener("submit", handleSubmite);
function handleSubmite(event) {
    event.preventDefault();
    const form = new FormData(this);
    console.log(form.get("nombre"));
    $buttonMailto.setAttribute("href", `mailtoo:charruarecord@gmail.com? subject= ${form.get("nombre")} ${form.get("telefono")}&body=${form.get("comentario")}`)
    $buttonMailto.click()
}