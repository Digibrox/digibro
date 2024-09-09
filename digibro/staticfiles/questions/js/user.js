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
  document.getElementById("mailID").textContent = "AXA Sigorta Create Mail";
  document.getElementById("axaButton").textContent = "Selected";
  document.getElementById("popupAxaInput").value = "Mutlu Akü Axa Sigorta P&C";
  document.getElementById("axaCard").style.background = "#f2f2f2";
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
  document.getElementById("popupMailItem1").style.display = "none";
  document.getElementById("oguzAxaTo2").style.backgroundColor = "white";
}
function closeMail2() {
  document.getElementById("popupMailItem2").style.display = "none";
  document.getElementById("ibrahimAxaTo2").style.backgroundColor = "white";
}
function closeMail3() {
  document.getElementById("popupMailItem3").style.display = "none";
  document.getElementById("aliAxaTo2").style.backgroundColor = "white";
}
function closeMail11() {
  document.getElementById("oguzAxaCc2").style.backgroundColor = "white";
  document.getElementById("popupMailItem11").style.display = "none";
}
function closeMail22() {
  document.getElementById("ibrahimAxaCc2").style.backgroundColor = "white";
  document.getElementById("popupMailItem22").style.display = "none";
}
function closeMail33() {
  document.getElementById("popupMailItem33").style.display = "none";
  document.getElementById("aliAxaCc2").style.backgroundColor = "white";
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
  document.getElementById("oguzAxa").style.backgroundColor = "white";
  document.getElementById("popupMailItem1axa").style.display = "none";
}
function closeMail2axa() {
  document.getElementById("popupMailItem2axa").style.display = "none";
  document.getElementById("ibrahimAxa").style.background = "white";
}
function closeMail3axa() {
  document.getElementById("aliAxa").style.background = "white";
  document.getElementById("popupMailItem3axa").style.display = "none";
}
function closeMail11axa() {
  document.getElementById("oguzAxaCc").style.backgroundColor = "white";
  document.getElementById("popupMailItem11axa").style.display = "none";
}
function closeMail22axa() {
  document.getElementById("popupMailItem22axa").style.display = "none";
  document.getElementById("ibrahimAxaCc").style.background = "white";
}
function closeMail33axa() {
  document.getElementById("popupMailItem33axa").style.display = "none";
  document.getElementById("aliAxaCc").style.background = "white";
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
// function myFunction3() {
//   document.getElementById("myDropdown2").classList.toggle("show");
// }
function filterFunction2() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput2");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown2");
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
function clearSearch2() {
  var input = document.getElementById("myInput2");
  input.value = "";
  filterFunction2();
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