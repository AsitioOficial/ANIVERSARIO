/* =================================
   CONFIGURACIÓN
================================= */

const correctPassword = "09092023";


/* =================================
   DESBLOQUEAR PÁGINA
================================= */

function unlockPage() {

    const password =
        document
            .getElementById("password")
            .value;

    const error =
        document
            .getElementById("error");


    if (password === correctPassword) {

        const lockScreen =
            document
                .getElementById("lockScreen");


        const mainContent =
            document
                .getElementById("mainContent");


        lockScreen.style.opacity = "0";


        setTimeout(() => {

            lockScreen.style.display = "none";

            mainContent.classList
                .remove("hidden");

        }, 800);


    } else {

        error.textContent =
            "Contraseña incorrecta ❤️";

    }

}


/* =================================
   PERMITIR ENTER
================================= */

document
    .getElementById("password")
    .addEventListener(
        "keypress",
        function(event) {

            if (event.key === "Enter") {

                unlockPage();

            }

        }
    );



/* =================================
   IR AL CONTADOR
================================= */

function scrollToTime() {

    document
        .getElementById("timeSection")
        .scrollIntoView({
            behavior: "smooth"
        });

}



/* =================================
   CONTADOR
   9 SEPTIEMBRE 2023
================================= */

function updateCounter() {


    const startDate =
        new Date(2023, 8, 9, 0, 0, 0);


    const now =
        new Date();


    let years =
        now.getFullYear()
        -
        startDate.getFullYear();


    let anniversary =
        new Date(
            now.getFullYear(),
            startDate.getMonth(),
            startDate.getDate()
        );


    if (now < anniversary) {

        years--;

    }


    let lastAnniversary =
        new Date(
            startDate.getFullYear() + years,
            startDate.getMonth(),
            startDate.getDate(),
            0,
            0,
            0
        );


    let difference =
        now - lastAnniversary;


    let totalSeconds =
        Math.floor(
            difference / 1000
        );


    let days =
        Math.floor(
            totalSeconds / 86400
        );


    totalSeconds =
        totalSeconds % 86400;


    let hours =
        Math.floor(
            totalSeconds / 3600
        );


    totalSeconds =
        totalSeconds % 3600;


    let minutes =
        Math.floor(
            totalSeconds / 60
        );


    let seconds =
        totalSeconds % 60;


    document
        .getElementById("years")
        .textContent = years;


    document
        .getElementById("days")
        .textContent = days;


    document
        .getElementById("hours")
        .textContent = hours;


    document
        .getElementById("minutes")
        .textContent = minutes;


    document
        .getElementById("seconds")
        .textContent = seconds;

}


updateCounter();


setInterval(
    updateCounter,
    1000
);



/* =================================
   ÁLBUM DE FOTOS
================================= */


const photos = [

    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg",
    "6.jpeg"

];


let currentPhoto = 0;



function updateAlbum() {


    const leftPhoto =
        document
            .getElementById("photoLeft");


    const rightPhoto =
        document
            .getElementById("photoRight");


    leftPhoto.src =
        photos[currentPhoto];


    let nextPhotoIndex =
        currentPhoto + 1;


    if (
        nextPhotoIndex
        >=
        photos.length
    ) {

        nextPhotoIndex = 0;

    }


    rightPhoto.src =
        photos[nextPhotoIndex];


    document
        .getElementById("photoNumber")
        .textContent =

        "Recuerdo "
        +
        (currentPhoto + 1)
        +
        " - "
        +
        (nextPhotoIndex + 1);


    updateDots();

}



/* =================================
   SIGUIENTE FOTO
================================= */

function nextPhoto() {


    currentPhoto =
        currentPhoto + 2;


    if (
        currentPhoto
        >=
        photos.length
    ) {

        currentPhoto = 0;

    }


    updateAlbum();

}



/* =================================
   FOTO ANTERIOR
================================= */

function previousPhoto() {


    currentPhoto =
        currentPhoto - 2;


    if (
        currentPhoto < 0
    ) {

        currentPhoto =
            photos.length - 2;

    }


    updateAlbum();

}



/* =================================
   PUNTOS DEL ÁLBUM
================================= */

function createDots() {


    const dotsContainer =
        document
            .getElementById("dots");


    const numberOfPages =
        Math.ceil(
            photos.length / 2
        );


    for (
        let i = 0;
        i < numberOfPages;
        i++
    ) {

        const dot =
            document
                .createElement("span");


        dot.classList
            .add("dot");


        dotsContainer
            .appendChild(dot);

    }

}


function updateDots() {


    const dots =
        document
            .querySelectorAll(".dot");


    const activeDot =
        Math.floor(
            currentPhoto / 2
        );


    dots.forEach(
        (dot, index) => {

            dot.classList
                .remove("active");


            if (
                index === activeDot
            ) {

                dot.classList
                    .add("active");

            }

        }
    );

}


createDots();

updateAlbum();