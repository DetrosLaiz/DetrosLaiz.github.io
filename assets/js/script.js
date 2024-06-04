// document.addEventListener("DOMContentLoaded", function() {
//     const translateButton = document.getElementById("translateButton");
//     const languageIndicator = document.getElementById("languageIndicator");

//     let isTranslated = false;

//     translateButton.addEventListener("click", function() {
//         if (isTranslated) {
//             // Se já foi traduzido, voltar para PT(BR)
//             languageIndicator.textContent = "PT(BR)";
//             isTranslated = false;
//         } else {
//             // Se não foi traduzido, mudar para EN(UK)
//             languageIndicator.textContent = "EN(UK)";
//             isTranslated = true;
//         }
//     });
// });

function changesize() {
    if (window.innerWidth >= 768) {
        iten.style.display = 'block'
    } else {
        iten.style.display = 'none'
    }
}

function clickmenu() {
    if (iten.style.display == 'block'){
        iten.style.display = 'none'
} else { 
    iten.style.display = 'block'
}
}