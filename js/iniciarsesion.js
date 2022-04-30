const BTNREGISTRATE = document.querySelector("#myBtn");

BTNREGISTRATE.addEventListener('click', () => {
    Swal.fire({
        title: "Genial!",
        text: "Se ha efectuado el registro!",
        icon: "success",
        confirmButtonText: "Genial",
    })
})
