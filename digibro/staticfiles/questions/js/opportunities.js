

document.addEventListener("DOMContentLoaded", function() {
    const riskInfoButton = document.getElementById("riskInfoButtonDiv");
    const riskInfoButton2 = document.getElementById("riskInfoButton2");
    const offersButton = document.getElementById("offersButtonDiv");
    const offersButton2 = document.getElementById("offersButton2");
    const claimsButton = document.getElementById("claimsButtonDiv");
    const claimsButton2 = document.getElementById("claimsButton2");



    if (riskInfoButton && riskInfoButton2) {
        riskInfoButton.addEventListener("click", function() {
            riskInfoButton2.click();
        });

        riskInfoButton2.addEventListener("click", function() {
            riskInfoButton.click();
        });
    }

    if (offersButton && offersButton2) {
        offersButton.addEventListener("click", function() {
            offersButton2.click();
        });

        offersButton2.addEventListener("click", function() {
            offersButton.click();
        });
    }

    if (claimsButton && claimsButton2) {
        claimsButton.addEventListener("click", function() {
            claimsButton2.click();
        });

        claimsButton2.addEventListener("click", function() {
            claimsButton.click();
        });
    }
});



    // claimButtonDiv'e tıklanınca claimButton'un click olayını tetikler
document.getElementById("claimsButtonDiv").addEventListener("click", function() {
document.getElementById("claimsButton").click();
});

// offersButtonDiv'e tıklanınca offersButton'un click olayını tetikler
document.getElementById("offersButtonDiv").addEventListener("click", function() {
document.getElementById("offersButton").click();
});
document.getElementById("riskInfoButtonDiv").addEventListener("click", function() {
document.getElementById("riskInfoButton").click();
});

document.getElementById("riskInfoButtonDiv").addEventListener("click", function() {
    document.getElementById("riskInfoButton2").classList.add("selectedButton");
    document.getElementById("offersButton2").classList.remove("selectedButton");
    document.getElementById("claimsButton2").classList.remove("selectedButton");
});
document.getElementById("offersButtonDiv").addEventListener("click", function() {
    document.getElementById("riskInfoButton2").classList.remove("selectedButton");
    document.getElementById("offersButton2").classList.add("selectedButton");
    document.getElementById("claimsButton2").classList.remove("selectedButton");
});
document.getElementById("claimsButtonDiv").addEventListener("click", function() {
    document.getElementById("riskInfoButton2").classList.remove("selectedButton");
    document.getElementById("offersButton2").classList.remove("selectedButton");
    document.getElementById("claimsButton2").classList.add("selectedButton");
});

const riskInfoMainDiv = document.getElementById("riskInfoMainDiv");
const offersMainDiv = document.getElementById("offersMainDiv");
const claimsMainDiv = document.getElementById("claimsMainDiv");

const riskInfoButtonDiv = document.getElementById("riskInfoButtonDiv");
const offersButtonDiv = document.getElementById("offersButtonDiv");
const claimsButtonDiv = document.getElementById("claimsButtonDiv");
const riskInfoButtonDiv2 = document.getElementById("riskInfoButtonDiv2");
const offersButtonDiv2 = document.getElementById("offersButtonDiv2");
const claimsButtonDiv2 = document.getElementById("claimsButtonDiv2");


riskInfoButtonDiv.addEventListener("click", function() {
    riskInfoMainDiv.style.display = "block";
    offersMainDiv.style.display = "none";
    claimsMainDiv.style.display = "none";
});

offersButtonDiv.addEventListener("click", function() {
    riskInfoMainDiv.style.display = "none";
    offersMainDiv.style.display = "block";
    claimsMainDiv.style.display = "none";
});

claimsButtonDiv.addEventListener("click", function() {
    riskInfoMainDiv.style.display = "none";
    offersMainDiv.style.display = "none";
    claimsMainDiv.style.display = "block";
});





// Select elements
const riskInfoImgPreviewButton = document.getElementById("riskInfoImgPreviewButton");
const imageModal = document.getElementById("imageModal");
const closeModalButton = document.getElementById("closeModalButton");

// Show modal on button click
riskInfoImgPreviewButton.addEventListener("click", function() {
    imageModal.style.display = "flex";
});

// Close modal on button click
closeModalButton.addEventListener("click", function() {
    imageModal.style.display = "none";
});

// Close modal when clicking outside the modal content
window.addEventListener("click", function(event) {
    if (event.target === imageModal) {
        imageModal.style.display = "none";
    }
});
document.querySelectorAll('.questionSpanP').forEach(span => {
    if (span.offsetWidth < 340) {
        span.classList.add('no-hover'); // 300'den küçükse no-hover eklenir
        span.style.cursor = ''; // cursor-pointer kaldırılır
    } else {
        span.classList.remove('no-hover'); // 300'den büyükse no-hover kaldırılır
        span.setAttribute('data-tooltip', span.textContent.trim()); // tooltip içeriği
        if (span.offsetWidth > 330) {
            span.style.cursor = 'pointer'; // 320'den büyükse cursor-pointer eklenir
        }
    }
});

    document.getElementById("confirmButtonReminder").addEventListener("click", function() {
        // Butonu seç
        var button = document.getElementById("confirmButtonReminder");

        // Butonun metnini değiştir
        button.innerText = "Successful";
        
        // Butonun genişliği ve arka plan rengini ayarla
        button.style.width = "129px";
        button.style.backgroundColor = "green !important";

    });



