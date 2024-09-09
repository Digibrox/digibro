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

const TL1 = document.getElementById("TL1");
const USD1 = document.getElementById("USD1");
const EUR1 = document.getElementById("EUR1");
const TL2 = document.getElementById("TL2");
const USD2 = document.getElementById("USD2");
const EUR2 = document.getElementById("EUR2");
const TL3 = document.getElementById("TL3");
const USD3 = document.getElementById("USD3");
const EUR3 = document.getElementById("EUR3");
const TL4 = document.getElementById("TL4");
const USD4 = document.getElementById("USD4");
const EUR4 = document.getElementById("EUR4");
TL1.addEventListener("click", function (event) {
  event.preventDefault();
  USD1.style.backgroundColor = "white";
  EUR1.style.backgroundColor = "white";
});

USD1.addEventListener("click", function (event) {
  event.preventDefault();
  TL1.style.backgroundColor = "white";
  EUR1.style.backgroundColor = "white";
});

EUR1.addEventListener("click", function (event) {
  event.preventDefault();
  TL1.style.backgroundColor = "white";
  USD1.style.backgroundColor = "white";
});
TL2.addEventListener("click", function (event) {
  event.preventDefault();
  USD2.style.backgroundColor = "white";
  EUR2.style.backgroundColor = "white";
});

USD2.addEventListener("click", function (event) {
  event.preventDefault();
  TL2.style.backgroundColor = "white";
  EUR2.style.backgroundColor = "white";
});

EUR2.addEventListener("click", function (event) {
  event.preventDefault();
  TL2.style.backgroundColor = "white";
  USD2.style.backgroundColor = "white";
});
TL3.addEventListener("click", function (event) {
  event.preventDefault();
  USD3.style.backgroundColor = "white";
  EUR3.style.backgroundColor = "white";
});

USD3.addEventListener("click", function (event) {
  event.preventDefault();
  TL3.style.backgroundColor = "white";
  EUR3.style.backgroundColor = "white";
});

EUR3.addEventListener("click", function (event) {
  event.preventDefault();
  TL3.style.backgroundColor = "white";
  USD3.style.backgroundColor = "white";
});
TL4.addEventListener("click", function (event) {
  event.preventDefault();
  USD4.style.backgroundColor = "white";
  EUR4.style.backgroundColor = "white";
});

USD4.addEventListener("click", function (event) {
  event.preventDefault();
  TL4.style.backgroundColor = "white";
  EUR4.style.backgroundColor = "white";
});

EUR4.addEventListener("click", function (event) {
  event.preventDefault();
  TL4.style.backgroundColor = "white";
  USD4.style.backgroundColor = "white";
});
TL5.addEventListener("click", function (event) {
  event.preventDefault();
  USD5.style.backgroundColor = "white";
  EUR5.style.backgroundColor = "white";
});

USD5.addEventListener("click", function (event) {
  event.preventDefault();
  TL5.style.backgroundColor = "white";
  EUR5.style.backgroundColor = "white";
});

EUR5.addEventListener("click", function (event) {
  event.preventDefault();
  TL5.style.backgroundColor = "white";
  USD5.style.backgroundColor = "white";
});

function downloadPdf() {
  // Input alanlarından metinleri al
  var img =
    "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABQAAD/4QNtaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjAtYzA2MCA2MS4xMzQ3NzcsIDIwMTAvMDIvMTItMTc6MzI6MDAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MTE2MUIxRDQyQTI5RTcxMUFFRDY5QTVERDBDMjVENEMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTJBM0ZBODIyQkE5MTFFQUI4QUZERDFENzE2QjZDNDMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTJBM0ZBODEyQkE5MTFFQUI4QUZERDFENzE2QjZDNDMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N0M2QzY5MkZBODJCRUExMThGMjlEQTU1QkRDNDI3RjIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTE2MUIxRDQyQTI5RTcxMUFFRDY5QTVERDBDMjVENEMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94Onht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";
  var tarih = document.getElementById("tarih__input__check").value;

  var poliçeNo = document.getElementById("teklif__no__check").value;
  var sigortalıAdı = document.getElementById("sigortali__adi__check").value;
  var vkn = document.getElementById("vkn__input__check").value;
  var il = document.getElementById("il__input__check").value;
  var ilce = document.getElementById("ilce__input__check").value;
  var mahalle = document.getElementById("mahalle__input__check").value;
  var faaliyet = document.getElementById("faaliyet__input__check").value;
  var digerFaaliyetler = document.getElementById(
    "bina__faaliyet__input__check"
  ).value;
  var personelSayisi = document.getElementById("personel__sayisi__check").value;
  var vardiyaSayisi = document.getElementById("vardiya__sayisi__check").value;
  var koordinatInputN = document.getElementById("koordinat__n__check").value;
  var koordinatInputE = document.getElementById("koordinat__e__check").value;
  var gerekliDurumIletisim = document.getElementById("yetkili__kisi__check").value;
  var telefonInput = document.getElementById("telefon__input__check").value;
  var mailInput = document.getElementById("email__input__check").value;
  var öncekiSigorta = document.getElementById("onceki__sigorta__check").value;
  var hasarTarih = document.getElementById("hasar__input__check").value;
  var hasarTutar = document.getElementById("tutar__input__check").value;
  var hasarOlay = document.getElementById("olay__textarea__check").value;
  var hasarTutarBirim = document.getElementById("dropdownMenuButton1").textContent;
  ///////
  var yanginVarCheckbox1 = document.getElementById("c1-13 yanginVar1check");
  var yanginYokCheckbox1 = document.getElementById("c1-13 yanginYok1check");
  var yanginTüpüAdet = document.getElementById("adet__input__check").value;

  
  
  var yanginVar = yanginVarCheckbox1.checked ? "Var" : null;
  var yanginYok = yanginYokCheckbox1.checked ? "Yok" : null;
  
  var yanginTupText = "";
  
  if (yanginVar !== null) {
    yanginTupText += "Var";
  }
  if (yanginYok !== null) {
    yanginTupText += "Yok";
  }

  var yanginVarCheckbox2 = document.getElementById("c1-13 yanginVar2check");
  var yanginYokCheckbox2 = document.getElementById("c1-13 yanginYok2check");
  var yanginDolapAdet = document.getElementById("adet__input__check2").value;

  
  
  var yanginVar2 = yanginVarCheckbox2.checked ? "Var" : null;
  var yanginYok2 = yanginYokCheckbox2.checked ? "Yok" : null;
  
  var yanginDolapText = "";
  
  if (yanginVar2 !== null) {
    yanginDolapText += "Var";
  }
  if (yanginYok2 !== null) {
    yanginDolapText += "Yok";
  }

  var yanginVarCheckbox3 = document.getElementById("c1-13 yanginVar3check");
  var yanginYokCheckbox3 = document.getElementById("c1-13 yanginYok3check");
  var yanginHidrantAdet = document.getElementById("adet__input__check3").value;

  
  
  var yanginVar3 = yanginVarCheckbox3.checked ? "Var" : null;
  var yanginYok3 = yanginYokCheckbox3.checked ? "Yok" : null;
  
  var yanginHidrantText = "";
  
  if (yanginVar3 !== null) {
    yanginHidrantText += "Var";
  }
  if (yanginYok3 !== null) {
    yanginHidrantText += "Yok";
  }

  var yanginVarCheckbox4 = document.getElementById("c1-13 yanginVar4check");
  var yanginYokCheckbox4 = document.getElementById("c1-13 yanginYok4check");
  var yanginDumanYuzde = document.getElementById("yuzde__input__check").value;

  
  
  var yanginVar4 = yanginVarCheckbox4.checked ? "Var" : null;
  var yanginYok4 = yanginYokCheckbox4.checked ? "Yok" : null;
  
  var yanginDumanText = "";
  
  if (yanginVar4 !== null) {
    yanginDumanText += "Var";
  }
  if (yanginYok4 !== null) {
    yanginDumanText += "Yok";
  }

  var yanginVarCheckbox5 = document.getElementById("c1-13 yanginVar5check");
  var yanginYokCheckbox5 = document.getElementById("c1-13 yanginYok5check");
  var yanginSuyuTon = document.getElementById("ton__input__check").value;

  
  
  var yanginVar5 = yanginVarCheckbox5.checked ? "Var" : null;
  var yanginYok5 = yanginYokCheckbox5.checked ? "Yok" : null;
  
  var yanginSuyuText = "";
  
  if (yanginVar5 !== null) {
    yanginSuyuText += "Var";
  }
  if (yanginYok5 !== null) {
    yanginSuyuText += "Yok";
  }
  
  // var yangin61check = document.getElementById("yangin61check");
  // var yangin61Value = yangin61check ? (yangin61check.checked ? "Elektrikli" : null) : null;
  
  // var yangin62check = document.getElementById("yangin62check");
  // var yangin62Value = yangin62check ? (yangin62check.checked ? "Dizel" : null) : null;
  
  // var yangin63check = document.getElementById("yangin63check");
  // var yangin63Value = yangin63check ? (yangin63check.checked ? "Dizel-Elektrikli" : null) : null;
  
  // var yangin64check = document.getElementById("yangin64check");
  // var yangin64Value = yangin64check ? (yangin64check.checked ? "Yok" : null) : null;
  
  // var yanginPompaAciklama = document.getElementById("aciklama__input__check").value;
  
  // var yanginPompaText = "";
  
  // if (yangin61Value !== null) {
  //   yanginPompaText += "Elektrikli ";
  // }
  // if (yangin62Value !== null) {
  //   yanginPompaText += "Dizel ";
  // }
  // if (yangin63Value !== null) {
  //   yanginPompaText += "Dizel-Elektrikli ";
  // }
  // if (yangin64Value !== null) {
  //   yanginPompaText += "Yok ";
  // }
  
  var title = document.getElementById("topDivP__check").textContent;
  var docDefinition = {
    content: [
      [
        {
          image: img,
          width: 100,
          height: 75,
          alignment: "center",
        },
      ],
      [
        {
          text: title + " Soru Formu",
          alignment: "center",
          fontSize: 16,
          bold: true,
          margin: [0, 12, 0, 12],
        },
      ],
      [
        {
          canvas: [
            {
              type: "line",
              x1: 0,
              y1: 0, // Başlangıç noktası (sol üst köşe)
              x2: 507,
              y2: 0, // Bitiş noktası (sağ üst köşe)
              lineWidth: 0.5,
            },
          ],
        },
      ],
      [{ text: "Ön Bilgi", bold: true, margin: [0, 10, 0, 10] }],
      [{ text: "Tarih: " + tarih, margin: [0, 0, 0, 10] }],
      [{ text: "Poliçe / Teklif No: " + poliçeNo, margin: [0, 0, 0, 10] }],
      [
        {
          text: "Sigortalı Adı: " + sigortalıAdı + "  |  " + "VKN: " + vkn,
          margin: [0, 0, 0, 10],
        },
      ],
      [
        {
          text:
            "Adres Bilgileri, İl: " +
            il +
            "  |  " +
            "İlçe: " +
            ilce +
            "  |  " +
            "Mahalle: " +
            mahalle,
          margin: [0, 0, 0, 10],
        },
      ],
      [{ text: "Faaliyet: " + faaliyet, margin: [0, 0, 0, 10] }],
      [
        {
          text: "Bina içerisindeki diğer faaliyetler: " + digerFaaliyetler,
          margin: [0, 0, 0, 10],
        },
      ],
      [
        {
          text:
            "Personel Sayısı: " +
            personelSayisi +
            "  |  " +
            "Vardiya Sayısı: " +
            vardiyaSayisi,
          margin: [0, 0, 0, 10],
        },
      ],
      [
        {text: "Koordinatlar: " + "N: " + koordinatInputN + "  |  " +"E: " +koordinatInputE, margin: [0, 0, 0, 10],},
      ],
      [
        {text: "Gerekli Durumda İletişime Geçilecek Yetkili Kişi: " + gerekliDurumIletisim, margin: [0, 0, 0, 10],},
      ], 
      [
        {text: "Telefon: "  + telefonInput + "  |  " + "E-Mail: " + mailInput, margin: [0, 0, 0, 10],}
      ],
      [
        {text: "Önceki Sigorta Şirketi: " + öncekiSigorta, margin: [0, 0, 0, 10],},
      ], 
      [
        {text: "Hasar Geçmişi : " + "Tarih: "  + hasarTarih + "  |  " + "Tutar: " + hasarTutar + " " + hasarTutarBirim, margin: [0, 0, 0, 10],}
      ],
      [
        {text: "Olay: " + hasarOlay, margin: [0, 0, 0, 10],},
      ],
      [
        {
          canvas: [
            {
              type: "line",
              x1: 0,
              y1: 0, // Başlangıç noktası (sol üst köşe)
              x2: 507,
              y2: 0, // Bitiş noktası (sağ üst köşe)
              lineWidth: 0.5,
            },
          ],
        },
      ],
      [{ text: "Yangın Önlemleri", bold: true, margin: [0, 10, 0, 10] }],
      [{ text: "Yangın Tüpleri: " + yanginTupText + " | " + "Adet: " + yanginTüpüAdet, margin: [0, 0, 0, 10] }],
      [{ text: "Yangın Dolapları: " + yanginDolapText + " | " + "Adet: " + yanginDolapAdet, margin: [0, 0, 0, 10] }],
      [{ text: "Yangın Hidrantları: " + yanginHidrantText + " | " + "Adet: " + yanginHidrantAdet, margin: [0, 0, 0, 10] }],
      [{ text: "Yangın Hidrantları: " + yanginDumanText + " | " + "Tesisin % kaçını kapsıyor?: %" + yanginDumanYuzde, margin: [0, 0, 0, 10] }],
      [{ text: "Yangın Suyu Deposu: " + yanginSuyuText + " | " + "Ton: " + yanginSuyuTon, margin: [0, 0, 0, 10] }]   
    ],
  };

  // PDF oluştur ve indir
  pdfMake.createPdf(docDefinition).download("Question-Form.pdf");
}
