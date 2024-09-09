var PCRadio = document.getElementById("PCRadio");
var informationAccordion = document.getElementById("informationAccordion");
var informationAccordion2 = document.getElementById("informationAccordion2");
var HasarAccordion = document.getElementById("HasarAccordion");
var HirsizlikAccordion = document.getElementById("HirsizlikAccordion");
var FotografAccordion = document.getElementById("FotografAccordion");

var productRadios = document.getElementById("productRadios");

PCRadio.addEventListener("click", function () {

  var checkboxElement = informationAccordion2.querySelector("#accordion4");

  if (informationAccordion2 && checkboxElement) {
    informationAccordion.style.display = "block";
    informationAccordion2.style.display = "block";
    checkboxElement.click();

  }
});

var yanginDivButton = document.getElementById("yanginDivButton");
var yanginDivButton2 = document.getElementById("yanginDivButton2");
var yanginAccordion = document.getElementById("yanginAccordion");
var yanginClicked = false;

function toggleAccordionYangin() {
  if (!yanginClicked) {
    yanginAccordion.style.display = "block";
    yanginDivButton.classList.add("clicked");
    yanginClicked = true;
  } else {
    yanginAccordion.style.display = "none";
    yanginDivButton.classList.remove("clicked");
    yanginClicked = false;
  }
}

yanginDivButton.addEventListener("click", toggleAccordionYangin);
yanginDivButton2.addEventListener("click", toggleAccordionYangin);

var ECDivButton = document.getElementById("ECDivButton");
var ECDivButton2 = document.getElementById("ECDivButton2");
var ECAccordion = document.getElementById("ECAccordion");
var ECClicked = false;

function toggleAccordionEC() {
  if (!ECClicked) {
    ECAccordion.style.display = "block";
    ECDivButton.classList.add("clicked");
    ECClicked = true;
  } else {
    ECAccordion.style.display = "none";
    ECDivButton.classList.remove("clicked");
    ECClicked = false;
  }
}

ECDivButton.addEventListener("click", toggleAccordionEC);
ECDivButton2.addEventListener("click", toggleAccordionEC);

var MKDivButton = document.getElementById("MKDivButton");
var MKDivButton2 = document.getElementById("MKDivButton2");
var MKAccordion = document.getElementById("MKAccordion");
var MKClicked = false;

function toggleAccordionMK() {
  if (!MKClicked) {
    MKAccordion.style.display = "block";
    MKDivButton.classList.add("clicked");
    MKClicked = true;
  } else {
    MKAccordion.style.display = "none";
    MKDivButton.classList.remove("clicked");
    MKClicked = false;
  }
}

MKDivButton.addEventListener("click", toggleAccordionMK);
MKDivButton2.addEventListener("click", toggleAccordionMK);

var IMMDivButton = document.getElementById("IMMDivButton");
var IMMDivButton2 = document.getElementById("IMMDivButton2");
var IMMAccordion = document.getElementById("IMMAccordion");
var IMMClicked = false;

function toggleAccordionIMM() {
  if (!IMMClicked) {
    IMMAccordion.style.display = "block";
    IMMDivButton.classList.add("clicked");
    IMMDivButton2.classList.add("clicked"); // İkinci butonu da işaretleyelim
    IMMClicked = true;
  } else {
    IMMAccordion.style.display = "none";
    IMMDivButton.classList.remove("clicked");
    IMMDivButton2.classList.remove("clicked"); // İkinci butonun işaretini kaldıralım
    IMMClicked = false;
  }
}

IMMDivButton.addEventListener("click", toggleAccordionIMM);
IMMDivButton2.addEventListener("click", toggleAccordionIMM);
var TPLDivButton = document.getElementById("TPLDivButton");
var TPLDivButton2 = document.getElementById("TPLDivButton2");
var TPLAccordion = document.getElementById("TPLAccordion");
var TPLClicked = false;

function toggleAccordionTPL() {
  if (!TPLClicked) {
    TPLAccordion.style.display = "block";
    TPLDivButton.classList.add("clicked");
    TPLDivButton2.classList.add("clicked");
    TPLClicked = true;
  } else {
    TPLAccordion.style.display = "none";
    TPLDivButton.classList.remove("clicked");
    TPLDivButton2.classList.remove("clicked");
    TPLClicked = false;
  }
}

TPLDivButton.addEventListener("click", toggleAccordionTPL);
TPLDivButton2.addEventListener("click", toggleAccordionTPL);

var yanginButton = document.getElementById("yanginDivButton");
var ECButton = document.getElementById("ECDivButton");
var MKButton = document.getElementById("MKDivButton");
var IMMButton = document.getElementById("IMMDivButton");
var TPLButton = document.getElementById("TPLDivButton");

yanginButton.addEventListener("click", function () {
  this.classList.toggle("active");
});

ECButton.addEventListener("click", function () {
  this.classList.toggle("active");
});

MKButton.addEventListener("click", function () {
  this.classList.toggle("active");
});

IMMButton.addEventListener("click", function () {
  this.classList.toggle("active");
});

TPLButton.addEventListener("click", function () {
  this.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
  // Tüm checkboxları seç
  var checkboxes = document.querySelectorAll(".form-check-input");

  // Her bir checkbox için
  checkboxes.forEach(function (checkbox) {
    // Checkbox değiştiğinde çalışacak kod
    checkbox.addEventListener("change", function () {
      // Checkbox işaretli ise
      // if (checkbox.checked) {
      //   // Checkbox'un üstündeki .item öğesine checkedQuestion sınıfını ekle
      //   checkbox.closest(".item").classList.add("checkedQuestion");
      // } else {
      //   // Checkbox işaretli değilse checkedQuestion sınıfını kaldır
      //   checkbox.closest(".item").classList.remove("checkedQuestion");
      // }
    });
  });
});


function toggleClientSelections() {
  var selectAllCheckboxClient = document.getElementById("client-select-all");
  var clientCheckboxes = document.getElementsByClassName("client-select-box");

  for (var i = 0; i < clientCheckboxes.length; i++) {
    clientCheckboxes[i].checked = selectAllCheckboxClient.checked;
  }
}

function toggleBrokerSelectionsYangin() {
  var selectAllCheckboxYangin = document.getElementById(
    "broker-select-allYangin"
  );
  var brokerCheckboxesYangin = document.getElementsByClassName(
    "broker-select-boxYangin"
  );

  for (var i = 0; i < brokerCheckboxesYangin.length; i++) {
    brokerCheckboxesYangin[i].checked = selectAllCheckboxYangin.checked;
  }
}
function toggleClientSelectionsYangin() {
  var selectAllCheckboxClientYangin = document.getElementById(
    "client-select-allYangin"
  );
  var clientCheckboxesYangin = document.getElementsByClassName(
    "client-select-boxYangin"
  );

  for (var i = 0; i < clientCheckboxesYangin.length; i++) {
    clientCheckboxesYangin[i].checked = selectAllCheckboxClientYangin.checked;
  }
}

function toggleBrokerSelectionsEC() {
  var selectAllCheckboxEC = document.getElementById("broker-select-allEC");
  var brokerCheckboxesEC = document.getElementsByClassName(
    "broker-select-boxEC"
  );

  for (var i = 0; i < brokerCheckboxesEC.length; i++) {
    brokerCheckboxesEC[i].checked = selectAllCheckboxEC.checked;
  }
}
function toggleClientSelectionsEC() {
  var selectAllCheckboxClientEC = document.getElementById(
    "client-select-allEC"
  );
  var clientCheckboxesEC = document.getElementsByClassName(
    "client-select-boxEC"
  );

  for (var i = 0; i < clientCheckboxesEC.length; i++) {
    clientCheckboxesEC[i].checked = selectAllCheckboxClientEC.checked;
  }
}

function toggleBrokerSelectionsMK() {
  var selectAllCheckboxMK = document.getElementById("broker-select-allMK");
  var brokerCheckboxesMK = document.getElementsByClassName(
    "broker-select-boxMK"
  );

  for (var i = 0; i < brokerCheckboxesMK.length; i++) {
    brokerCheckboxesMK[i].checked = selectAllCheckboxMK.checked;
  }
}
function toggleClientSelectionsMK() {
  var selectAllCheckboxClientMK = document.getElementById(
    "client-select-allMK"
  );
  var clientCheckboxesMK = document.getElementsByClassName(
    "client-select-boxMK"
  );

  for (var i = 0; i < clientCheckboxesMK.length; i++) {
    clientCheckboxesMK[i].checked = selectAllCheckboxClientMK.checked;
  }
}

function toggleBrokerSelectionsIMM() {
  var selectAllCheckboxIMM = document.getElementById("broker-select-allIMM");
  var brokerCheckboxesIMM = document.getElementsByClassName(
    "broker-select-boxIMM"
  );

  for (var i = 0; i < brokerCheckboxesIMM.length; i++) {
    brokerCheckboxesIMM[i].checked = selectAllCheckboxIMM.checked;
  }
}
function toggleClientSelectionsIMM() {
  var selectAllCheckboxClientIMM = document.getElementById(
    "client-select-allIMM"
  );
  var clientCheckboxesIMM = document.getElementsByClassName(
    "client-select-boxIMM"
  );

  for (var i = 0; i < clientCheckboxesIMM.length; i++) {
    clientCheckboxesIMM[i].checked = selectAllCheckboxClientIMM.checked;
  }
}

function toggleBrokerSelectionsTPL() {
  var selectAllCheckboxTPL = document.getElementById("broker-select-allTPL");
  var brokerCheckboxesTPL = document.getElementsByClassName(
    "broker-select-boxTPL"
  );

  for (var i = 0; i < brokerCheckboxesTPL.length; i++) {
    brokerCheckboxesTPL[i].checked = selectAllCheckboxTPL.checked;
  }
}
function toggleClientSelectionsTPL() {
  var selectAllCheckboxClientTPL = document.getElementById(
    "client-select-allTPL"
  );
  var clientCheckboxesTPL = document.getElementsByClassName(
    "client-select-boxTPL"
  );

  for (var i = 0; i < clientCheckboxesTPL.length; i++) {
    clientCheckboxesTPL[i].checked = selectAllCheckboxClientTPL.checked;
  }
}

var bilgilendirmeMetni = document.getElementById("bilgilendirmeMetni");
var bilgilendirmeDiv = document.getElementById("bilgilendirmeDiv");
var isDisplay = false;

bilgilendirmeMetni.addEventListener("click", function() {
  if (!isDisplay) {
    bilgilendirmeDiv.style.display = "block";
    isDisplay = true;
  } else {
    bilgilendirmeDiv.style.display = "none";
    isDisplay = false;
  }
});

var onBilgiAcc = document.getElementById("onBilgiAcc");
var onBilgiDiv = document.getElementById("onBilgiDiv");
var isDisplayOnBilgi = false;

onBilgiAcc.addEventListener("click", function() {
  if (!isDisplayOnBilgi) {
    onBilgiDiv.style.display = "block";
    isDisplayOnBilgi = true;
  } else {
    onBilgiDiv.style.display = "none";
    isDisplayOnBilgi = false;
  }
});
function openedAccordions(){

    informationAccordion.children[1].click()
    informationAccordion2.children[1].click()
    HasarAccordion.children[1].click()
    HirsizlikAccordion.children[1].click()
    FotografAccordion.children[1].click()
}
openedAccordions()