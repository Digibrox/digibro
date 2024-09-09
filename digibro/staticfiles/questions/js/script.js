// document.getElementById("platform2").addEventListener("change", function () {
//   var selectedOption = this.options[this.selectedIndex];
//   if (selectedOption.id === "blaze") {
//     document.getElementById("platformBlaze").style.display = "flex";
//     document.getElementById("platformBlazeP").innerText = "Yangın Kâr Kaybı";
//     document.getElementById("yangin1").style.display = "block";
//     document.getElementById("yangin2").style.display = "block";
//     document.getElementById("yangin3").style.display = "block";
//     document.getElementById("engineering1").style.display = "none";
//     document.getElementById("engineering2").style.display = "none";
//     document.getElementById("engineering3").style.display = "none";
//     document.getElementById("Sorumluluk1").style.display = "none";
//     document.getElementById("Sorumluluk2").style.display = "none";
//     document.getElementById("Sorumluluk3").style.display = "none";
//   } else if (selectedOption.id === "engineering") {
//     document.getElementById("platformBlaze").style.display = "flex";
//     document.getElementById("platformBlazeP").innerText = "Mühendislik";
//     document.getElementById("yangin1").style.display = "none";
//     document.getElementById("yangin2").style.display = "none";
//     document.getElementById("yangin3").style.display = "none";
//     document.getElementById("engineering1").style.display = "block";
//     document.getElementById("engineering2").style.display = "block";
//     document.getElementById("engineering3").style.display = "block";
//     document.getElementById("Sorumluluk1").style.display = "none";
//     document.getElementById("Sorumluluk2").style.display = "none";
//     document.getElementById("Sorumluluk3").style.display = "none";
//   } else if (selectedOption.id === "Sorumluluk") {
//     document.getElementById("platformBlaze").style.display = "flex";
//     document.getElementById("platformBlazeP").innerText = "Sorumluluk";
//     document.getElementById("yangin1").style.display = "none";
//     document.getElementById("yangin2").style.display = "none";
//     document.getElementById("yangin3").style.display = "none";
//     document.getElementById("engineering1").style.display = "none";
//     document.getElementById("engineering2").style.display = "none";
//     document.getElementById("engineering3").style.display = "none";
//     document.getElementById("Sorumluluk1").style.display = "block";
//     document.getElementById("Sorumluluk2").style.display = "block";
//     document.getElementById("Sorumluluk3").style.display = "block";
//   }
// });
// Tüm checkbox'ları seç
var checkboxes = document.querySelectorAll(".form-check-input");

// Her bir checkbox değiştiğinde
checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    // Seçilen checkbox'ların sayısını bul
    var selectedCount = document.querySelectorAll(
      ".form-check-input:checked"
    ).length;

    // Seçilen checkbox'ların sayısını yazdır
    document.getElementById("selected-count").textContent = selectedCount;
  });
});
function selectCurrency(event, currency, buttonId) {
  const dropdownButton = document.getElementById(buttonId);
  dropdownButton.textContent = currency;
  const dropdownMenu = event.target.closest(".dropdown-menu");
  // dropdownMenu.classList.remove("show");
  event.preventDefault();
}

function stopPropagation(event) {
  event.stopPropagation();
}

function updateCiroParaBirimi() {
  const dropdownButton5 = document.getElementById("dropdownMenuButton5");
  const ciroParaBirimi = document.getElementById("ciroParaBirimi");

  const selectedCurrency = dropdownButton5.textContent.trim();
  switch (selectedCurrency) {
    case "TL":
      ciroParaBirimi.textContent = "TL";
      break;
    case "USD":
      ciroParaBirimi.textContent = "USD";
      break;
    case "EURO":
      ciroParaBirimi.textContent = "EURO";
      break;
    default:
      ciroParaBirimi.textContent = "";
      break;
  }
}

function updateTutarParaBirimi1() {
  const dropdownButton1 = document.getElementById("dropdownMenuButton1");
  const tutarParaBirimi1 = document.getElementById("tutarParaBirimi1");

  const selectedCurrency = dropdownButton1.textContent.trim();
  switch (selectedCurrency) {
    case "TL":
      tutarParaBirimi1.textContent = "TL";
      break;
    case "USD":
      tutarParaBirimi1.textContent = "USD";
      break;
    case "EURO":
      tutarParaBirimi1.textContent = "EURO";
      break;
    default:
      tutarParaBirimi1.textContent = "";
      break;
  }
}

function updateBedelParaBirimi1() {
  const dropdownButton2 = document.getElementById("dropdownMenuButton2");
  const bedelParaBirimi2 = document.getElementById("bedelParaBirimi2");

  const selectedCurrency = dropdownButton2.textContent.trim();
  switch (selectedCurrency) {
    case "TL":
      bedelParaBirimi2.textContent = "TL";
      break;
    case "USD":
      bedelParaBirimi2.textContent = "USD";
      break;
    case "EURO":
      bedelParaBirimi2.textContent = "EURO";
      break;
    default:
      bedelParaBirimi2.textContent = "";
      break;
  }
}
function updateBedelParaBirimi2() {
  const dropdownButton3 = document.getElementById("dropdownMenuButton3");
  const bedelParaBirimi3 = document.getElementById("bedelParaBirimi3");

  const selectedCurrency = dropdownButton3.textContent.trim();
  switch (selectedCurrency) {
    case "TL":
      bedelParaBirimi3.textContent = "TL";
      break;
    case "USD":
      bedelParaBirimi3.textContent = "USD";
      break;
    case "EURO":
      bedelParaBirimi3.textContent = "EURO";
      break;
    default:
      bedelParaBirimi3.textContent = "";
      break;
  }
}
function updateBrutParaBirimi() {
  const dropdownButton4 = document.getElementById("dropdownMenuButton4");
  const brutParaBirimi = document.getElementById("brutParaBirimi");

  const selectedCurrency = dropdownButton4.textContent.trim();
  switch (selectedCurrency) {
    case "TL":
      brutParaBirimi.textContent = "TL";
      break;
    case "USD":
      brutParaBirimi.textContent = "USD";
      break;
    case "EURO":
      brutParaBirimi.textContent = "EURO";
      break;
    default:
      brutParaBirimi.textContent = "";
      break;
  }
}
function checkQuestionFunction() {
  const checkboxTarih = document.querySelector(".soruTarih");
  const checkTarihDiv = document.getElementById("check__tarih");
  const soruTeklif = document.querySelector(".soruTeklif");
  const soruTeklifDiv = document.getElementById("check__teklif2");
  const sigortaliAdi = document.querySelector(".sigortaliAdi");
  const sigortaliAdiDiv = document.getElementById("sigortali_adi2");
  const adresBilgileri = document.querySelector(".adresBilgileri");
  const adresBilgileriDiv = document.getElementById("adresBilgileriDiv");
  const faaliyet = document.querySelector(".faaliyetInput");
  const faaliyetDiv = document.getElementById("faaliyetDiv");
  const personel = document.querySelector(".personelInput");
  const personelSayisiDiv = document.getElementById("personelSayisiDiv");
  const koordinat = document.querySelector(".koordinatInput");
  const koordinatDiv = document.getElementById("koordinatDiv");
  const gerekli = document.querySelector(".gerekliInput");
  const gerekliDiv = document.getElementById("gerekliDiv");
  const telefon = document.querySelector(".telefonInput");
  const telefonDiv = document.getElementById("telefonDiv");
  const onceki = document.querySelector(".oncekiInput");
  const oncekiDiv = document.getElementById("oncekiDiv");
  const hasar = document.querySelector(".hasarInput");
  const hasarDiv = document.getElementById("hasarDiv");

  const yanginTup = document.querySelector(".yanginTup");
  const yanginTupDiv = document.getElementById("yanginTupDiv");
  const yanginDolap = document.querySelector(".yanginDolap");
  const yanginDolapDiv = document.getElementById("yanginDolapDiv");
  const yanginHidrant = document.querySelector(".yanginHidrant");
  const yanginHidrantDiv = document.getElementById("yanginHidrantDiv");
  const yanginDuman = document.querySelector(".yanginDuman");
  const yanginDumanDiv = document.getElementById("yanginDumanDiv");
  const yanginDepo = document.querySelector(".yanginDepo");
  const yanginDepoDiv = document.getElementById("yanginDepoDiv");
  const yanginPompa = document.querySelector(".yanginPompa");
  const yanginPompaDiv = document.getElementById("yanginPompaDiv");
  const yanginPompa2 = document.querySelector(".yanginPompa2");
  const yanginPompaDiv2 = document.getElementById("yanginPompaDiv2");
  const yanginSprinkler = document.querySelector(".yanginSprinkler");
  const yanginSprinklerDiv = document.getElementById("yanginSprinklerDiv");
  const yanginLokal = document.querySelector(".yanginLokal");
  const yanginLokalDiv = document.getElementById("yanginLokalDiv");
  const bedelInput1 = document.querySelector(".bedelInput1");
  const bedelDiv1 = document.getElementById("bedelDiv1");
  const modelInput1 = document.querySelector(".modelInput1");
  const modelDiv1 = document.getElementById("modelDiv1");
  const markaInput1 = document.querySelector(".markaInput1");
  const markaDiv1 = document.getElementById("markaDiv1");
  const seriInput1 = document.querySelector(".seriInput1");
  const seriDiv1 = document.getElementById("seriDiv1");
  const yasInput1 = document.querySelector(".yasInput1");
  const yasDiv1 = document.getElementById("yasDiv1");
  const bedelInput2 = document.querySelector(".bedelInput2");
  const bedelDiv2 = document.getElementById("bedelDiv2");
  const modelInput2 = document.querySelector(".modelInput2");
  const modelDiv2= document.getElementById("modelDiv2");
  const markaInput2 = document.querySelector(".markaInput2");
  const markaDiv2 = document.getElementById("markaDiv2");
  const seriInput2 = document.querySelector(".seriInput2");
  const seriDiv2 = document.getElementById("seriDiv2");
  const yasInput2 = document.querySelector(".yasInput2");
  const yasDiv2 = document.getElementById("yasDiv2");
  const maviYaka = document.querySelector(".maviYaka");
  const maviYakaDiv = document.getElementById("maviYakaDiv");
  const beyazYaka = document.querySelector(".beyazYaka");
  const beyazYakaDiv = document.getElementById("beyazYakaDiv");
  const brutInput = document.querySelector(".brutInput");
  const brutInputDiv = document.getElementById("brutInputDiv");
  const ciroInput = document.querySelector(".ciroInput");
  const ciroInputDiv = document.getElementById("ciroInputDiv");


  if (checkboxTarih.checked) {
    checkTarihDiv.style.display = "flex";
  } else {
    checkTarihDiv.style.display = "none";
  }
  if (soruTeklif.checked) {
    soruTeklifDiv.style.display = "flex";
  } else {
    soruTeklifDiv.style.display = "none";
  }
  if (sigortaliAdi.checked) {
    sigortaliAdiDiv.style.display = "flex";
  } else {
    sigortaliAdiDiv.style.display = "none";
  }
  if (adresBilgileri.checked) {
    adresBilgileriDiv.style.display = "flex";
  } else {
    adresBilgileriDiv.style.display = "none";
  }
  if (faaliyet.checked) {
    faaliyetDiv.style.display = "flex";
  } else {
    faaliyetDiv.style.display = "none";
  }
  if (personel.checked) {
    personelSayisiDiv.style.display = "flex";
  } else {
    personelSayisiDiv.style.display = "none";
  }
  if (koordinat.checked) {
    koordinatDiv.style.display = "flex";
  } else {
    koordinatDiv.style.display = "none";
  }
  if (hasar.checked) {
    hasarDiv.style.display = "flex";
    document.getElementById("subQuestionDiv2").style.display = "block";
    
  } else {
    hasarDiv.style.display = "none";
    document.getElementById("subQuestionDiv2").style.display = "none";
  }
  if (gerekli.checked) {
    gerekliDiv.style.display = "flex";
  } else {
    gerekliDiv.style.display = "none";
  }
  if (telefon.checked) {
    telefonDiv.style.display = "flex";
  } else {
    telefonDiv.style.display = "none";
  }
  if (onceki.checked) {
    oncekiDiv.style.display = "flex";
  } else {
    oncekiDiv.style.display = "none";
  }
  if (yanginTup.checked) {
    yanginTupDiv.style.display = "flex";
  } else {
    yanginTupDiv.style.display = "none";
  }
  if (yanginDolap.checked) {
    yanginDolapDiv.style.display = "flex";
  } else {
    yanginDolapDiv.style.display = "none";
  }
  if (yanginHidrant.checked) {
    yanginHidrantDiv.style.display = "flex";
  } else {
    yanginHidrantDiv.style.display = "none";
  }
  if (yanginDuman.checked) {
    yanginDumanDiv.style.display = "flex";
  } else {
    yanginDumanDiv.style.display = "none";
  }
  if (yanginDepo.checked) {
    yanginDepoDiv.style.display = "flex";
  } else {
    yanginDepoDiv.style.display = "none";
  }
  if (yanginPompa.checked) {
    yanginPompaDiv.style.display = "flex";
  } else {
    yanginPompaDiv.style.display = "none";
  }
  if (yanginPompa2.checked) {
    yanginPompaDiv2.style.display = "flex";
  } else {
    yanginPompaDiv2.style.display = "none";
  }
  if (yanginSprinkler.checked) {
    yanginSprinklerDiv.style.display = "flex";
  } else {
    yanginSprinklerDiv.style.display = "none";
  }
  if (yanginLokal.checked) {
    yanginLokalDiv.style.display = "flex";
  } else {
    yanginLokalDiv.style.display = "none";
  }
  if (bedelInput1.checked) {
    bedelDiv1.style.display = "flex";
  } else {
    bedelDiv1.style.display = "none";
  }
  if (modelInput1.checked) {
    modelDiv1.style.display = "flex";
  } else {
    modelDiv1.style.display = "none";
  }
  if (markaInput1.checked) {
    markaDiv1.style.display = "flex";
  } else {
    markaDiv1.style.display = "none";
  }
  if (seriInput1.checked) {
    seriDiv1.style.display = "flex";
  } else {
    seriDiv1.style.display = "none";
  }
  if (yasInput1.checked) {
    yasDiv1.style.display = "flex";
  } else {
    yasDiv1.style.display = "none";
  }
  if (bedelInput2.checked) {
    bedelDiv2.style.display = "flex";
  } else {
    bedelDiv2.style.display = "none";
  }
  if (modelInput2.checked) {
    modelDiv2.style.display = "flex";
  } else {
    modelDiv2.style.display = "none";
  }
  if (markaInput2.checked) {
    markaDiv2.style.display = "flex";
  } else {
    markaDiv2.style.display = "none";
  }
  if (seriInput2.checked) {
    seriDiv2.style.display = "flex";
  } else {
    seriDiv2.style.display = "none";
  }
  if (yasInput2.checked) {
    yasDiv2.style.display = "flex";
  } else {
    yasDiv2.style.display = "none";
  }
  if (maviYaka.checked) {
    maviYakaDiv.style.display = "flex";
  } else {
    maviYakaDiv.style.display = "none";
  }
  if (beyazYaka.checked) {
    beyazYakaDiv.style.display = "flex";
  } else {
    beyazYakaDiv.style.display = "none";
  }
  if (brutInput.checked) {
    brutInputDiv.style.display = "flex";
  } else {
    brutInputDiv.style.display = "none";
  }
  if (ciroInput.checked) {
    ciroInputDiv.style.display = "flex";
  } else {
    ciroInputDiv.style.display = "none";
  }
}





// tarih__input__check input alanını al
var tarihInput = document.getElementById('tarih__input');
var hasarInput = document.getElementById('hasar__input');


// tarih__input__check__checkbox checkbox'unu al
var checkbox = document.getElementById('tarihCheckbox');
var checkbox2 = document.getElementById('hasarCheckbox');
// tarih__input__check input alanının değerini kontrol et
function checkTarihInput() {
    if (tarihInput.value.trim() !== '') { // Eğer input alanı doluysa
        checkbox.checked = true; // Checkbox'u seçili yap
    } else {
        checkbox.checked = false; // Checkbox'u seçimden kaldır
    }
}

function checkHasarInput() {
  if (hasarInput.value.trim() !== '') { // Eğer input alanı doluysa
      checkbox2.checked = true; // Checkbox'u seçili yap
  } else {
      checkbox2.checked = false; // Checkbox'u seçimden kaldır
  }
}
// Herhangi bir değişiklik olduğunda tarih__input__check input alanını kontrol et
tarihInput.addEventListener('input', checkTarihInput);
hasarInput.addEventListener('input', checkHasarInput);

// Sayfa yüklendiğinde tarih__input__check input alanını kontrol et
document.addEventListener('DOMContentLoaded', checkTarihInput);
document.addEventListener('DOMContentLoaded', checkHasarInput);




document.getElementById("PCRadio").addEventListener("click", function() {
  document.querySelector(".applyButton").style.display = "block";
});

document.querySelectorAll(".openQuestionForm").forEach(function(button) {
  button.addEventListener("click", function() {
      document.getElementById("applyButton").click();
  });
});
const container = document.getElementById('imageUploadGrid');

for (let i = 0; i < 27; i++) {
    const uploadContainer = document.createElement('div');
    uploadContainer.className = 'upload-container';
    uploadContainer.innerHTML = `
        <input type="file" accept="image/*" style="display: none;">
        <img alt="Uploaded Image">
        <span>Fotoğraf yüklemek için tıklayın veya sürükleyip bırakın</span>
    `;
    container.appendChild(uploadContainer);

    const fileInput = uploadContainer.querySelector('input[type="file"]');
    const previewImage = uploadContainer.querySelector('img');
    const placeholderText = uploadContainer.querySelector('span');

    uploadContainer.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', (event) => {
        handleFiles(event.target.files, previewImage, placeholderText);
    });

    uploadContainer.addEventListener('dragover', (event) => {
        event.preventDefault();
        uploadContainer.style.borderColor = 'blue';
    });

    uploadContainer.addEventListener('dragleave', () => {
        uploadContainer.style.borderColor = '#ccc';
    });

    uploadContainer.addEventListener('drop', (event) => {
        event.preventDefault();
        uploadContainer.style.borderColor = '#ccc';
        handleFiles(event.dataTransfer.files, previewImage, placeholderText);
    });
}

function handleFiles(files, previewImage, placeholderText) {
    if (files.length === 0) return;

    const file = files[0];
    if (!file.type.startsWith('image/')) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        previewImage.src = e.target.result;
        previewImage.style.display = 'block';
        placeholderText.style.display = 'none';
    };
    reader.readAsDataURL(file);
}





const customUploadContainer = document.getElementById('customUploadContainer');
const customFileInput = document.getElementById('customFileInput');
const customPreviewImage = document.getElementById('customPreviewImage');
const customPlaceholderText = document.getElementById('customPlaceholderText');
const customFileNameElement = document.getElementById('customFileName');

const fileIcons = {
    pdf: 'https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg',
    excel: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Microsoft_Excel_2013_logo.svg',
    txt: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Text_document_icon_2021.svg',
};

customUploadContainer.addEventListener('click', () => {
    customFileInput.click();
});

customFileInput.addEventListener('change', (event) => {
    customHandleFiles(event.target.files);
});

customUploadContainer.addEventListener('dragover', (event) => {
    event.preventDefault();
    customUploadContainer.style.borderColor = 'blue';
});

customUploadContainer.addEventListener('dragleave', () => {
    customUploadContainer.style.borderColor = '#ccc';
});

customUploadContainer.addEventListener('drop', (event) => {
    event.preventDefault();
    customUploadContainer.style.borderColor = '#ccc';
    customHandleFiles(event.dataTransfer.files);
});

function customHandleFiles(files) {
    if (files.length === 0) return;

    const file = files[0];
    const fileType = file.type;
    const fileName = file.name;

    customFileNameElement.style.display = 'none';
    customPreviewImage.style.display = 'none';
    customPlaceholderText.style.display = 'none';

    if (fileType === 'application/pdf') {
        customFileNameElement.textContent = fileName;
        customPreviewImage.src = fileIcons.pdf;
        customPreviewImage.style.display = 'block';
        customFileNameElement.style.display = 'block';
    } else if (fileType.includes('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
            customPreviewImage.src = e.target.result;
            customPreviewImage.style.display = 'block';
        };
        reader.readAsDataURL(file);
    } else if (fileType.includes('excel') || fileType.includes('spreadsheetml') || fileType.includes('csv')) {
        customFileNameElement.textContent = fileName;
        customPreviewImage.src = fileIcons.excel;
        customPreviewImage.style.display = 'block';
        customFileNameElement.style.display = 'block';
    } else if (fileType === 'text/plain') {
        customFileNameElement.textContent = fileName;
        customPreviewImage.src = fileIcons.txt;
        customPreviewImage.style.display = 'block';
        customFileNameElement.style.display = 'block';
    } else {
        customPlaceholderText.style.display = 'block';
        alert('Desteklenmeyen dosya türü.');
    }
}