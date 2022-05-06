const FORMULARIO = document.querySelector('#contactoForm');

FORMULARIO.addEventListener('submit', handleSubmit)
async function handleSubmit(event) {
    event.preventDefault()

    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })
    if (response.ok) {
        this.reset()
        Swal.fire({
            position: 'bottom-end',
            title: "Gracias!",
            text: "Tu mensaje se ha enviado correctamente.",
            icon: "success",
            confirmButtonText: "Genial",
        })
    }

}