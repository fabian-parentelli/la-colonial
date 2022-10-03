const $form = document.querySelector("#form");

$form.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
    event.preventDeFault();
    const form = new FormData(this);
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            "acept": "application/jsom"
        }
    })
    if (response.ok) {
        this.reset ();
        alert("gracias por comunicarte con nosotros, pronto nos contactaremos");
    }
}