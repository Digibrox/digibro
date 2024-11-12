
const modalconfirm = document.getElementById('confirmationModal');
const confirmYes = document.getElementById('confirmYes');
const confirmNo = document.getElementById('confirmNo');

// Modalı gösteren fonksiyon, evet/hayır yanıtına göre işlem yapar
function showConfirmationModal(callbackFunction) {
  modalconfirm.style.display = 'flex'; 
  confirmYes.onclick = function() {
    modalconfirm.style.display = 'none';  
    callbackFunction();  // Onaydan sonra ilgili fonksiyon çalışır
  };

  confirmNo.onclick = function() {
    modalconfirm.style.display = 'none'; 
  };
}
function openPopupSigorta() {
  document.getElementById("popupSigorta").style.display = "flex";
  document.getElementById("questionCheckDiv").style.filter = "blur(4px)";
}
function closePopupSigorta() {
  document.getElementById("popupSigorta").style.display = "none";
  document.getElementById("questionCheckDiv").style.filter = "none";
}
function openPopup() {
  document.getElementById("popup").style.display = "block";
  document.getElementById("questionCheckDiv").style.filter = "blur(4px)";
}
function closePopup() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("questionCheckDiv").style.filter = "none";
}
function axaSelect() {
 
  document.getElementById("axaSelectButton").textContent = "Selected";
  document.getElementById("popupAxaInputaxa").value = "Mutlu Akü & Axa Sigorta Questionnaire Form";
  document.getElementById("axaSelectButton").style.background = "#102a43";
  document.getElementById("axaSelectButton").style.color = "#fff";
  document.getElementById("ibrahimAxaaxa").click();
  document.getElementById("oguzAxaaxa").click();
  document.getElementById("aliaxaCcaxa").click();
}
function agesaSelect() {
 
  document.getElementById("agesaSelectButton").textContent = "Selected";
  document.getElementById("popupAxaInputagesa").value = "Mutlu Akü & Agesa Sigorta Questionnaire Form";
  document.getElementById("agesaSelectButton").style.background = "#102a43";
  document.getElementById("agesaSelectButton").style.color = "#fff";
  document.getElementById("ibrahimAxaagesa").click();
  document.getElementById("oguzAxaagesa").click();
  document.getElementById("aliaxaCcagesa").click();
}
function arkasSelect() {
 
  document.getElementById("arkasSelectButton").textContent = "Selected";
  document.getElementById("popupAxaInputarkas").value = "Mutlu Akü & Arkas Sigorta Questionnaire Form";
  document.getElementById("arkasSelectButton").style.background = "#102a43";
  document.getElementById("arkasSelectButton").style.color = "#fff";
  document.getElementById("ibrahimAxaarkas").click();
  document.getElementById("oguzAxaarkas").click();
  document.getElementById("aliaxaCcarkas").click();
}
function allianzSelect() {
 
  document.getElementById("allianzSelectButton").textContent = "Selected";
  document.getElementById("allianzSelectButton").style.background = "#102a43";
  document.getElementById("allianzSelectButton").style.color = "#fff";
  document.getElementById("popupAxaInputallianz").value = "Mutlu Akü & Allianz Sigorta Questionnaire Form";
  document.getElementById("ibrahimAxaallianz").click();
  document.getElementById("oguzAxaallianz").click();
  document.getElementById("aliaxaCcallianz").click();
}
function avivasaSelect() {
 
  document.getElementById("avivasaSelectButton").textContent = "Selected";
  document.getElementById("avivasaSelectButton").style.background = "#102a43";
  document.getElementById("avivasaSelectButton").style.color = "#fff";
  document.getElementById("popupAxaInputaviva").value = "Mutlu Akü & AvivaSA Sigorta Questionnaire Form";
  document.getElementById("ibrahimAxaaviva").click();
  document.getElementById("oguzAxaaviva").click();
  document.getElementById("aliaxaCcaviva").click();
}


document.addEventListener("DOMContentLoaded", function () {
  const dropdownItems = document.querySelectorAll(".dropdownMenuButton11item");

  dropdownItems.forEach((item) => {
    item.addEventListener("click", function () {
      this.classList.toggle("selectedMail");
    });
  });
});


function closeMail1() {
  showConfirmationModal(function() {
  document.getElementById("popupMailItem1").style.display = "none";
  document.getElementById("oguzAxaTo2").style.backgroundColor = "white";
});
}
function closeMail2() {
  showConfirmationModal(function() {
  document.getElementById("popupMailItem2").style.display = "none";
  document.getElementById("ibrahimAxaTo2").style.backgroundColor = "white";
});
}
function closeMail3() {
  showConfirmationModal(function() {
  document.getElementById("popupMailItem3").style.display = "none";
  document.getElementById("aliAxaTo2").style.backgroundColor = "white";
});
}
function closeMail11() {
  showConfirmationModal(function() {
  document.getElementById("oguzAxaCc2").style.backgroundColor = "white";
  document.getElementById("popupMailItem11").style.display = "none";
});
}
function closeMail22() {
  showConfirmationModal(function() {
  document.getElementById("ibrahimAxaCc2").style.backgroundColor = "white";
  document.getElementById("popupMailItem22").style.display = "none";
});
}
function closeMail33() {
  showConfirmationModal(function() {
  document.getElementById("popupMailItem33").style.display = "none";
  document.getElementById("aliAxaCc2").style.backgroundColor = "white";
});
}
function openTo1() {
  document.getElementById("popupMailItem1").style.display = "flex";
}
function openTo2() {
  document.getElementById("popupMailItem2").style.display = "flex";
}
function openTo3() {
  document.getElementById("popupMailItem3").style.display = "flex";
}
function openCc1() {
  document.getElementById("popupMailItem11").style.display = "flex";
}
function openCc2() {
  document.getElementById("popupMailItem22").style.display = "flex";
}
function openCc3() {
  document.getElementById("popupMailItem33").style.display = "flex";
}

function closeMail1axa() {
  showConfirmationModal(function() {
  document.getElementById("oguzAxa").style.backgroundColor = "white";
  document.getElementById("popupMailItem1axa").style.display = "none";
});
}
function closeMail2axa() {
  showConfirmationModal(function() {
  document.getElementById("popupMailItem2axa").style.display = "none";
  document.getElementById("ibrahimAxa").style.background = "white";
});
}
function closeMail3axa() {
  showConfirmationModal(function() {
  document.getElementById("aliAxa").style.background = "white";
  document.getElementById("popupMailItem3axa").style.display = "none";
});
}
function closeMail11axa() {
  showConfirmationModal(function() {
  document.getElementById("oguzAxaCc").style.backgroundColor = "white";
  document.getElementById("popupMailItem11axa").style.display = "none";
});
}
function closeMail22axa() {
  showConfirmationModal(function() {
  document.getElementById("popupMailItem22axa").style.display = "none";
  document.getElementById("ibrahimAxaCc").style.background = "white";
});
}
function closeMail33axa() {
  showConfirmationModal(function() {
  document.getElementById("popupMailItem33axa").style.display = "none";
  document.getElementById("aliAxaCc").style.background = "white";
});
}
function openTo1axa() {
  document.getElementById("popupMailItem1axa").style.display = "flex";
}
function openTo2axa() {
  document.getElementById("popupMailItem2axa").style.display = "flex";
}
function openTo3axa() {
  document.getElementById("popupMailItem3axa").style.display = "flex";
}
function openCc1axa() {
  document.getElementById("popupMailItem11axa").style.display = "flex";
}
function openCc2axa() {
  document.getElementById("popupMailItem22axa").style.display = "flex";
}
function openCc3axa() {
  document.getElementById("popupMailItem33axa").style.display = "flex";
}
/////// AVIVA ////////////////
function closeMail1aviva() {
  showConfirmationModal(function() {
  document.getElementById("popupMailItemaviva1").style.display = "none";
  document.getElementById("oguzAxaTo2aviva").style.backgroundColor = "white";
});
}
function closeMail2aviva() {
  showConfirmationModal(function() {
  document.getElementById("popupMailItem2aviva").style.display = "none";
  document.getElementById("ibrahimAxaTo2aviva").style.backgroundColor = "white";
});
}
function closeMail3aviva() {
  showConfirmationModal(function() {
  document.getElementById("popupMailItem3aviva").style.display = "none";
  document.getElementById("aliAxaTo2aviva").style.backgroundColor = "white";
});
}
function closeMail11aviva() {
  showConfirmationModal(function() {
  document.getElementById("oguzAxaCc2aviva").style.backgroundColor = "white";
  document.getElementById("popupMailItem11aviva").style.display = "none";
});
}
function closeMail22aviva() {
  showConfirmationModal(function() {
  document.getElementById("ibrahimAxaCc2aviva").style.backgroundColor = "white";
  document.getElementById("popupMailItem22aviva").style.display = "none";
});
}
function closeMail33() {
  showConfirmationModal(function() {
  document.getElementById("popupMailItem33aviva").style.display = "none";
  document.getElementById("aliAxaCc2aviva").style.backgroundColor = "white";
});
}
function openTo1aviva() {
  document.getElementById("popupMailItem1aviva").style.display = "flex";
}
function openTo2aviva() {
  document.getElementById("popupMailItem2aviva").style.display = "flex";
}
function openTo3aviva() {
  document.getElementById("popupMailItem3aviva").style.display = "flex";
}
function openCc1aviva() {
  document.getElementById("popupMailItem11aviva").style.display = "flex";
}
function openCc2aviva() {
  document.getElementById("popupMailItem22aviva").style.display = "flex";
}
function openCc3aviva() {
  document.getElementById("popupMailItem33aviva").style.display = "flex";
}

function closeMail1axaaviva() {
  showConfirmationModal(function() {
  document.getElementById("oguzAxaaviva").style.backgroundColor = "white";
  document.getElementById("popupMailItem1axaaviva").style.display = "none";
});
}
function closeMail2axaaviva() {
  showConfirmationModal(function() {
  document.getElementById("popupMailItem2axaaviva").style.display = "none";
  document.getElementById("ibrahimAxaaviva").style.background = "white";
});
}
function closeMail3axaaviva() {
  showConfirmationModal(function() {
  document.getElementById("aliAxaaviva").style.background = "white";
  document.getElementById("popupMailItem3axaaviva").style.display = "none";
});
}
function closeMail11axaaviva() {
  showConfirmationModal(function() {
  document.getElementById("oguzaxaavivaCc").style.backgroundColor = "white";
  document.getElementById("popupMailItem11axaaviva").style.display = "none";
});
}
function closeMail22axaaviva() {
  showConfirmationModal(function() {
  document.getElementById("popupMailItem22axaaviva").style.display = "none";
  document.getElementById("ibrahimaxaavivaCc").style.background = "white";
});
}
function closeMail33axaaviva() {
  showConfirmationModal(function() {
  document.getElementById("popupMailItem33axaaviva").style.display = "none";
  document.getElementById("aliaxaCcaviva").style.background = "white";
});
}
function openTo1axaaviva() {
  
  document.getElementById("popupMailItem1axaaviva").style.display = "flex";
}
function openTo2axaaviva() {
  document.getElementById("popupMailItem2axaaviva").style.display = "flex";
}
function openTo3axaaviva() {
  document.getElementById("popupMailItem3axaaviva").style.display = "flex";
}
function openCc1axaaviva() {
  document.getElementById("popupMailItem11axaaviva").style.display = "flex";
}
function openCc2axaaviva() {
  document.getElementById("popupMailItem22axaaviva").style.display = "flex";
}
function openCc3axaaviva() {
  document.getElementById("popupMailItem33axaaviva").style.display = "flex";
}
////////// Allianz
function closeMail1allianz() {
  document.getElementById("popupMailItemallianz1").style.display = "none";
  document.getElementById("oguzAxaTo2allianz").style.backgroundColor = "white";
}
function closeMail2allianz() {
  document.getElementById("popupMailItem2allianz").style.display = "none";
  document.getElementById("ibrahimAxaTo2allianz").style.backgroundColor = "white";
}
function closeMail3allianz() {
  document.getElementById("popupMailItem3allianz").style.display = "none";
  document.getElementById("aliAxaTo2allianz").style.backgroundColor = "white";
}
function closeMail11allianz() {
  document.getElementById("oguzAxaCc2allianz").style.backgroundColor = "white";
  document.getElementById("popupMailItem11allianz").style.display = "none";
}
function closeMail22allianz() {
  document.getElementById("ibrahimAxaCc2allianz").style.backgroundColor = "white";
  document.getElementById("popupMailItem22allianz").style.display = "none";
}
function closeMail33() {
  document.getElementById("popupMailItem33allianz").style.display = "none";
  document.getElementById("aliAxaCc2allianz").style.backgroundColor = "white";
}
function openTo1allianz() {
  document.getElementById("popupMailItem1allianz").style.display = "flex";
}
function openTo2allianz() {
  document.getElementById("popupMailItem2allianz").style.display = "flex";
}
function openTo3allianz() {
  document.getElementById("popupMailItem3allianz").style.display = "flex";
}
function openCc1allianz() {
  document.getElementById("popupMailItem11allianz").style.display = "flex";
}
function openCc2allianz() {
  document.getElementById("popupMailItem22allianz").style.display = "flex";
}
function openCc3allianz() {
  document.getElementById("popupMailItem33allianz").style.display = "flex";
}

// closeMail1axaallianz fonksiyonunu güncelleme
function closeMail1axaallianz() {
  showConfirmationModal(function() {
    document.getElementById("oguzAxaallianz").style.backgroundColor = "white";
    document.getElementById("popupMailItem1axaallianz").style.display = "none";
  });
}

// closeMail2axaallianz fonksiyonunu güncelleme
function closeMail2axaallianz() {
  showConfirmationModal(function() {
    document.getElementById("popupMailItem2axaallianz").style.display = "none";
    document.getElementById("ibrahimAxaallianz").style.background = "white";
  });
}

// closeMail3axaallianz fonksiyonunu güncelleme
function closeMail3axaallianz() {
  showConfirmationModal(function() {
    document.getElementById("aliAxaallianz").style.background = "white";
    document.getElementById("popupMailItem3axaallianz").style.display = "none";
  });
}
function closeMail11axaallianz() {
  showConfirmationModal(function() {
  document.getElementById("oguzaxaCcallianz").style.backgroundColor = "white";
  document.getElementById("popupMailItem11axaallianz").style.display = "none";
});
}
function closeMail22axaallianz() {
  showConfirmationModal(function() {
  document.getElementById("popupMailItem22axaallianz").style.display = "none";
  document.getElementById("ibrahimaxaCcallianz").style.background = "white";
});
}
function closeMail33axaallianz() {
  showConfirmationModal(function() {
  document.getElementById("popupMailItem33axaallianz").style.display = "none";
  document.getElementById("aliaxaCcallianz").style.background = "white";
});
}
function openTo1axaallianz() {
  document.getElementById("popupMailItem1axaallianz").style.display = "flex";
}
function openTo2axaallianz() {
  document.getElementById("popupMailItem2axaallianz").style.display = "flex";
}
function openTo3axaallianz() {
  document.getElementById("popupMailItem3axaallianz").style.display = "flex";
}
function openCc1axaallianz() {
  document.getElementById("popupMailItem11axaallianz").style.display = "flex";
}
function openCc2axaallianz() {
  document.getElementById("popupMailItem22axaallianz").style.display = "flex";
}
function openCc3axaallianz() {
  document.getElementById("popupMailItem33axaallianz").style.display = "flex";
}
/////// AXA ////////////////
function closeMail1axa() {
  showConfirmationModal(function() {
  document.getElementById("popupMailItemaxa1").style.display = "none";
  document.getElementById("oguzAxaTo2axa").style.backgroundColor = "white";
});
}
function closeMail2axa() {
  showConfirmationModal(function() {
  document.getElementById("popupMailItem2axa").style.display = "none";
  document.getElementById("ibrahimAxaTo2axa").style.backgroundColor = "white";
});
}
function closeMail3axa() {
  showConfirmationModal(function() {
  document.getElementById("popupMailItem3axa").style.display = "none";
  document.getElementById("aliAxaTo2axa").style.backgroundColor = "white";
});
}
function closeMail11axa() {
  showConfirmationModal(function() {
  document.getElementById("oguzAxaCc2axa").style.backgroundColor = "white";
  document.getElementById("popupMailItem11axa").style.display = "none";
});
}
function closeMail22axa() {
  showConfirmationModal(function() {
  document.getElementById("ibrahimAxaCc2axa").style.backgroundColor = "white";
  document.getElementById("popupMailItem22axa").style.display = "none";
});
}
function closeMail33axa() {
  showConfirmationModal(function() {
  document.getElementById("popupMailItem33axa").style.display = "none";
  document.getElementById("aliAxaCc2axa").style.backgroundColor = "white";
});
}
function openTo1axa() {
  document.getElementById("popupMailItem1axa").style.display = "flex";
}
function openTo2axa() {
  document.getElementById("popupMailItem2axa").style.display = "flex";
}
function openTo3axa() {
  document.getElementById("popupMailItem3axa").style.display = "flex";
}
function openCc1axa() {
  document.getElementById("popupMailItem11axa").style.display = "flex";
}
function openCc2axa() {
  document.getElementById("popupMailItem22axa").style.display = "flex";
}
function openCc3axa() {
  document.getElementById("popupMailItem33axa").style.display = "flex";
}

function closeMail1axaaxa() {
  showConfirmationModal(function() {
  document.getElementById("oguzAxaaxa").style.backgroundColor = "white";
  document.getElementById("popupMailItem1axaaxa").style.display = "none";
});
}
function closeMail2axaaxa() {
  showConfirmationModal(function() {
  document.getElementById("popupMailItem2axaaxa").style.display = "none";
  document.getElementById("ibrahimAxaaxa").style.background = "white";
});
}
function closeMail3axaaxa() {
  showConfirmationModal(function() {
  document.getElementById("aliAxaaxa").style.background = "white";
  document.getElementById("popupMailItem3axaaxa").style.display = "none";
});
}
function closeMail11axaaxa() {
  showConfirmationModal(function() {
  document.getElementById("oguzaxaaxaCc").style.backgroundColor = "white";
  document.getElementById("popupMailItem11axaaxa").style.display = "none";
});
}
function closeMail22axaaxa() {
  showConfirmationModal(function() {
  document.getElementById("popupMailItem22axaaxa").style.display = "none";
  document.getElementById("ibrahimaxaaxaCc").style.background = "white";
});
}
function closeMail33axaaxa() {
  showConfirmationModal(function() {
  document.getElementById("popupMailItem33axaaxa").style.display = "none";
  document.getElementById("aliaxaCcaxa").style.background = "white";
});
}
function openTo1axaaxa() {
  document.getElementById("popupMailItem1axaaxa").style.display = "flex";
}
function openTo2axaaxa() {
  document.getElementById("popupMailItem2axaaxa").style.display = "flex";
}
function openTo3axaaxa() {
  document.getElementById("popupMailItem3axaaxa").style.display = "flex";
}
function openCc1axaaxa() {
  document.getElementById("popupMailItem11axaaxa").style.display = "flex";
}
function openCc2axaaxa() {
  document.getElementById("popupMailItem22axaaxa").style.display = "flex";
}
function openCc3axaaxa() {
  document.getElementById("popupMailItem33axaaxa").style.display = "flex";
}
/////// Agesa ////////////////
function closeMail1agesa() {
  showConfirmationModal(function() {
  document.getElementById("popupMailItemagesa1").style.display = "none";
  document.getElementById("oguzAxaTo2agesa").style.backgroundColor = "white";
});
}
function closeMail2agesa() {
  showConfirmationModal(function() {
  document.getElementById("popupMailItem2agesa").style.display = "none";
  document.getElementById("ibrahimAxaTo2agesa").style.backgroundColor = "white";
});
}
function closeMail3agesa() {
  showConfirmationModal(function() {
  document.getElementById("popupMailItem3agesa").style.display = "none";
  document.getElementById("aliAxaTo2agesa").style.backgroundColor = "white";
});
}
function closeMail11agesa() {
  showConfirmationModal(function() {
  document.getElementById("oguzAxaCc2agesa").style.backgroundColor = "white";
  document.getElementById("popupMailItem11agesa").style.display = "none";
});
}
function closeMail22agesa() {
  showConfirmationModal(function() {
  document.getElementById("ibrahimAxaCc2agesa").style.backgroundColor = "white";
  document.getElementById("popupMailItem22agesa").style.display = "none";
});
}
function closeMail33agesa() {
  showConfirmationModal(function() {
  document.getElementById("popupMailItem33agesa").style.display = "none";
  document.getElementById("aliAxaCc2agesa").style.backgroundColor = "white";
});
}
function openTo1agesa() {
  document.getElementById("popupMailItem1agesa").style.display = "flex";
}
function openTo2agesa() {
  document.getElementById("popupMailItem2agesa").style.display = "flex";
}
function openTo3agesa() {
  document.getElementById("popupMailItem3agesa").style.display = "flex";
}
function openCc1agesa() {
  document.getElementById("popupMailItem11agesa").style.display = "flex";
}
function openCc2agesa() {
  document.getElementById("popupMailItem22agesa").style.display = "flex";
}
function openCc3agesa() {
  document.getElementById("popupMailItem33agesa").style.display = "flex";
}

function closeMail1axaagesa() {
  showConfirmationModal(function() {
  document.getElementById("oguzAxaagesa").style.backgroundColor = "white";
  document.getElementById("popupMailItem1axaagesa").style.display = "none";
});
}
function closeMail2axaagesa() {
  showConfirmationModal(function() {
  document.getElementById("popupMailItem2axaagesa").style.display = "none";
  document.getElementById("ibrahimAxaagesa").style.background = "white";
});
}
function closeMail3axaagesa() {
  showConfirmationModal(function() {
  document.getElementById("aliAxaagesa").style.background = "white";
  document.getElementById("popupMailItem3axaagesa").style.display = "none";
});
}
function closeMail11axaagesa() {
  showConfirmationModal(function() {
  document.getElementById("oguzaxaagesaCc").style.backgroundColor = "white";
  document.getElementById("popupMailItem11axaagesa").style.display = "none";
});
}
function closeMail22axaagesa() {
  showConfirmationModal(function() {
  document.getElementById("popupMailItem22axaagesa").style.display = "none";
  document.getElementById("ibrahimaxaagesaCc").style.background = "white";
});
}
function closeMail33axaagesa() {
  showConfirmationModal(function() {
  document.getElementById("popupMailItem33axaagesa").style.display = "none";
  document.getElementById("aliaxaCcagesa").style.background = "white";
});
}
function openTo1axaagesa() {
  document.getElementById("popupMailItem1axaagesa").style.display = "flex";
}
function openTo2axaagesa() {
  document.getElementById("popupMailItem2axaagesa").style.display = "flex";
}
function openTo3axaagesa() {
  document.getElementById("popupMailItem3axaagesa").style.display = "flex";
}
function openCc1axaagesa() {
  document.getElementById("popupMailItem11axaagesa").style.display = "flex";
}
function openCc2axaagesa() {
  document.getElementById("popupMailItem22axaagesa").style.display = "flex";
}
function openCc3axaagesa() {
  document.getElementById("popupMailItem33axaagesa").style.display = "flex";
}
/////// Arkas ////////////////
function closeMail1arkas() {
  showConfirmationModal(function() {
  document.getElementById("popupMailItemarkas1").style.display = "none";
  document.getElementById("oguzAxaTo2arkas").style.backgroundColor = "white";
});
}
function closeMail2arkas() {
  showConfirmationModal(function() {
  document.getElementById("popupMailItem2arkas").style.display = "none";
  document.getElementById("ibrahimAxaTo2arkas").style.backgroundColor = "white";
});
}
function closeMail3arkas() {
  showConfirmationModal(function() {
  document.getElementById("popupMailItem3arkas").style.display = "none";
  document.getElementById("aliAxaTo2arkas").style.backgroundColor = "white";
});
}
function closeMail11arkas() {
  showConfirmationModal(function() {
  document.getElementById("oguzAxaCc2arkas").style.backgroundColor = "white";
  document.getElementById("popupMailItem11arkas").style.display = "none";
});
}
function closeMail22arkas() {
  showConfirmationModal(function() {
  document.getElementById("ibrahimAxaCc2arkas").style.backgroundColor = "white";
  document.getElementById("popupMailItem22arkas").style.display = "none";
});
}
function closeMail33arkas() {
  showConfirmationModal(function() {
  document.getElementById("popupMailItem33arkas").style.display = "none";
  document.getElementById("aliAxaCc2arkas").style.backgroundColor = "white";
});
}
function openTo1arkas() {
  document.getElementById("popupMailItem1arkas").style.display = "flex";
}
function openTo2arkas() {
  document.getElementById("popupMailItem2arkas").style.display = "flex";
}
function openTo3arkas() {
  document.getElementById("popupMailItem3arkas").style.display = "flex";
}
function openCc1arkas() {
  document.getElementById("popupMailItem11arkas").style.display = "flex";
}
function openCc2arkas() {
  document.getElementById("popupMailItem22arkas").style.display = "flex";
}
function openCc3arkas() {
  document.getElementById("popupMailItem33arkas").style.display = "flex";
}

function closeMail1axaarkas() {
  showConfirmationModal(function() {
  document.getElementById("oguzAxaarkas").style.backgroundColor = "white";
  document.getElementById("popupMailItem1axaarkas").style.display = "none";
});
}
function closeMail2axaarkas() {
  showConfirmationModal(function() {
  document.getElementById("popupMailItem2axaarkas").style.display = "none";
  document.getElementById("ibrahimAxaarkas").style.background = "white";
});
}
function closeMail3axaarkas() {
  showConfirmationModal(function() {
  document.getElementById("aliAxaarkas").style.background = "white";
  document.getElementById("popupMailItem3axaarkas").style.display = "none";
});
}
function closeMail11axaarkas() {
  showConfirmationModal(function() {
  document.getElementById("oguzaxaarkasCc").style.backgroundColor = "white";
  document.getElementById("popupMailItem11axaarkas").style.display = "none";
});
}
function closeMail22axaarkas() {
  showConfirmationModal(function() {
  document.getElementById("popupMailItem22axaarkas").style.display = "none";
  document.getElementById("ibrahimaxaarkasCc").style.background = "white";
});
}
function closeMail33axaarkas() {
  showConfirmationModal(function() {
  document.getElementById("popupMailItem33axaarkas").style.display = "none";
  document.getElementById("aliaxaCcarkas").style.background = "white";
});
}
function openTo1axaarkas() {
  document.getElementById("popupMailItem1axaarkas").style.display = "flex";
}
function openTo2axaarkas() {
  document.getElementById("popupMailItem2axaarkas").style.display = "flex";
}
function openTo3axaarkas() {
  document.getElementById("popupMailItem3axaarkas").style.display = "flex";
}
function openCc1axaarkas() {
  document.getElementById("popupMailItem11axaarkas").style.display = "flex";
}
function openCc2axaarkas() {
  document.getElementById("popupMailItem22axaarkas").style.display = "flex";
}
function openCc3axaarkas() {
  document.getElementById("popupMailItem33axaarkas").style.display = "flex";
}
// function myFunction2() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

function filterFunction5() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput5");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown5");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
function filterFunction5allianz() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput5allianz");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown5allianz");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
function filterFunction5axa() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput5axa");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown5axa");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
function filterFunction5agesa() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput5agesa");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown5agesa");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
function filterFunction5arkas() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput5arkas");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown5arkas");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
// function myFunction3() {
//   document.getElementById("myDropdown2").classList.toggle("show");
// }
function filterFunction2aviva() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput2aviva");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown2aviva");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
function filterFunction2axa() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput2axa");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown2axa");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
function filterFunction2agesa() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput2agesa");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown2agesa");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
function filterFunction2arkas() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput2arkas");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown2arkas");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
function filterFunction3() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput3");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown3");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
function filterFunction4() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput4");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown4");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

function changeBackgroundColor(element) {
  element.style.backgroundColor = "#baffc1";
}

var dropdownItems = document.querySelectorAll(".dropdown-content a");
dropdownItems.forEach(function (item) {
  item.addEventListener("click", function () {
    changeBackgroundColor(this);
  });
});

function clearSearch5() {
  var input = document.getElementById("myInput5");
  input.value = "";
  filterFunction5();
}
function clearSearch5allianz() {
  var input = document.getElementById("myInput5allianz");
  input.value = "";
  filterFunction5allianz();
}



function clearSearch5axa() {
  var input = document.getElementById("myInput5axa");
  input.value = "";
  filterFunction5axa();
}
function clearSearch5agesa() {
  var input = document.getElementById("myInput5agesa");
  input.value = "";
  filterFunction5agesa();
}
function clearSearch2allianz() {
  var input = document.getElementById("myInput2");
  input.value = "";
  filterFunction2allianz();
}
function clearSearch2axa() {
  var input = document.getElementById("myInput2axa");
  input.value = ""; // Input içeriğini temizle
  filterFunction2axa(); // Arama fonksiyonunu çağırarak içeriği sıfırla
}
function clearSearch2agesa() {
  var input = document.getElementById("myInput2agesa");
  input.value = ""; // Input içeriğini temizle
  filterFunction2agesa(); // Arama fonksiyonunu çağırarak içeriği sıfırla
}

function clearSearch3() {
  var input = document.getElementById("myInput3");
  input.value = ""; // Input içeriğini temizle
  filterFunction3(); // Arama fonksiyonunu çağırarak içeriği sıfırla
}
function clearSearch4() {
  var input = document.getElementById("myInput4");
  input.value = ""; // Input içeriğini temizle
  filterFunction4(); // Arama fonksiyonunu çağırarak içeriği sıfırla
}
const beraButton = document.getElementById("beraButton");
const mutluButton = document.getElementById("mutluButton");

beraButton.addEventListener("click", clickBera);
function clickBera() {
  mutluButton.style.backgroundColor = "white";
}

mutluButton.addEventListener("click", clickMutlu);
function clickMutlu() {
  beraButton.style.backgroundColor = "white";
  document.getElementById("mutluAkuInput").value = "Mutlu Akü P&C Questionnaire Form";
}

var quill = new Quill('#editor', {
  theme: 'snow'
});
var quill2 = new Quill('#editor2', {
  theme: 'snow'
});

const saveButton = document.getElementById('save_answers_client');
const saveSvg = document.getElementById('save_answers_clientSvg');
const saveSpan = document.getElementById('save_answers_clientSpan');

saveButton.addEventListener('click', () => {
  // Butonu devre dışı bırak
  saveButton.style.pointerEvents = 'none';
  saveButton.style.backgroundColor = '#009f39'; // Arka planı güncelle
  
  // SVG'yi gizle
  saveSvg.style.display = 'none';
  
  // Span içeriğini 'Successful' yap
  saveSpan.textContent = 'Successful';
});

const saveButton2 = document.getElementById('save_answers_placement');
const saveSvg2 = document.getElementById('save_answers_placementSvg');
const saveSpan2 = document.getElementById('save_answers_placementSpan');

saveButton2.addEventListener('click', () => {
  // Butonu devre dışı bırak
  saveButton2.style.pointerEvents = 'none';
  saveButton2.style.backgroundColor = '#009f39'; // Arka planı güncelle
  
  // SVG'yi gizle
  saveSvg2.style.display = 'none';
  
  // Span içeriğini 'Successful' yap
  saveSpan2.textContent = 'Successful';
});