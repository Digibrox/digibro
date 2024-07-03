var PCRadio = document.getElementById("PCRadio");
var informationAccordion = document.getElementById("informationAccordion");
var informationAccordion2 = document.getElementById("informationAccordion2");
var productRadios = document.getElementById("productRadios");

PCRadio.addEventListener("click", function () {
  //console.log("PCRadio butonuna tıklandı.");
  
  // informationAccordion2 ve accordion4 elemanlarının içeriğini kontrol et
  //console.log("informationAccordion2:", informationAccordion2);
  var checkboxElement = informationAccordion2.querySelector("#accordion4");
  //console.log("checkboxElement:", checkboxElement);
  
  // informationAccordion2 ve accordion4 elemanları doğru bir şekilde seçiliyor mu?
  if (informationAccordion2 && checkboxElement) {
    informationAccordion.style.display = "block";
    informationAccordion2.style.display = "block";
    productRadios.style.display = "flex";
    
    // Checkbox elemanını tıkla
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
      if (checkbox.checked) {
        // Checkbox'un üstündeki .item öğesine checkedQuestion sınıfını ekle
        checkbox.closest(".item").classList.add("checkedQuestion");
      } else {
        // Checkbox işaretli değilse checkedQuestion sınıfını kaldır
        checkbox.closest(".item").classList.remove("checkedQuestion");
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const selectAllCheckbox = document.getElementById("checkmark__selectAll");
  const questionCheckboxes = document.querySelectorAll(
    'input[type="checkbox"][id="question__checkbox"]'
  );

  selectAllCheckbox.addEventListener("click", function () {
    questionCheckboxes.forEach(function (checkbox) {
      checkbox.checked = selectAllCheckbox.checked;
    });
  });

  questionCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      if (!checkbox.checked) {
        selectAllCheckbox.checked = false;
      } else {
        // Check if all other question checkboxes are checked
        const allChecked = Array.from(questionCheckboxes).every(function (cb) {
          return cb.checked;
        });
        selectAllCheckbox.checked = allChecked;
      }
    });
  });
});

const selectAllCheckbox2 = document.getElementById("checkmark__selectAll2");
const questionCheckboxes2 = document.querySelectorAll(
  'input[type="checkbox"][id="question__checkbox2"]'
);

selectAllCheckbox2.addEventListener("click", function () {
  questionCheckboxes2.forEach(function (checkbox) {
    checkbox.checked = selectAllCheckbox2.checked;
  });
});

questionCheckboxes2.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    if (!checkbox.checked) {
      selectAllCheckbox2.checked = false;
    } else {
      const allChecked = Array.from(questionCheckboxes2).every(function (cb) {
        return cb.checked;
      });
      selectAllCheckbox2.checked = allChecked;
    }
  });
});

const selectAllCheckbox3 = document.getElementById("checkmark__selectAll3");
const questionCheckboxes3 = document.querySelectorAll(
  'input[type="checkbox"][id="question__checkbox3"]'
);

selectAllCheckbox3.addEventListener("click", function () {
  questionCheckboxes3.forEach(function (checkbox) {
    checkbox.checked = selectAllCheckbox3.checked;
  });
});

questionCheckboxes3.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    if (!checkbox.checked) {
      selectAllCheckbox3.checked = false;
    } else {
      const allChecked = Array.from(questionCheckboxes3).every(function (cb) {
        return cb.checked;
      });
      selectAllCheckbox3.checked = allChecked;
    }
  });
});

const selectAllCheckbox4 = document.getElementById("checkmark__selectAll4");
const questionCheckboxes4 = document.querySelectorAll(
  'input[type="checkbox"][id="question__checkbox4"]'
);

selectAllCheckbox4.addEventListener("click", function () {
  questionCheckboxes4.forEach(function (checkbox) {
    checkbox.checked = selectAllCheckbox4.checked;
  });
});

questionCheckboxes4.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    if (!checkbox.checked) {
      selectAllCheckbox4.checked = false;
    } else {
      const allChecked = Array.from(questionCheckboxes4).every(function (cb) {
        return cb.checked;
      });
      selectAllCheckbox4.checked = allChecked;
    }
  });
});

const selectAllCheckbox5 = document.getElementById("checkmark__selectAll5");
const questionCheckboxes5 = document.querySelectorAll(
  'input[type="checkbox"][id="question__checkbox5"]'
);

selectAllCheckbox5.addEventListener("click", function () {
  questionCheckboxes5.forEach(function (checkbox) {
    checkbox.checked = selectAllCheckbox5.checked;
  });
});

questionCheckboxes5.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    if (!checkbox.checked) {
      selectAllCheckbox5.checked = false;
    } else {
      const allChecked = Array.from(questionCheckboxes5).every(function (cb) {
        return cb.checked;
      });
      selectAllCheckbox5.checked = allChecked;
    }
  });
});

const selectAllCheckbox6 = document.getElementById("checkmark__selectAll6");
const questionCheckboxes6 = document.querySelectorAll(
  'input[type="checkbox"][id="question__checkbox6"]'
);

selectAllCheckbox6.addEventListener("click", function () {
  questionCheckboxes6.forEach(function (checkbox) {
    checkbox.checked = selectAllCheckbox6.checked;
  });
});

questionCheckboxes6.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    if (!checkbox.checked) {
      selectAllCheckbox6.checked = false;
    } else {
      const allChecked = Array.from(questionCheckboxes6).every(function (cb) {
        return cb.checked;
      });
      selectAllCheckbox6.checked = allChecked;
    }
  });
});

function toggleBrokerSelections() {
  var selectAllCheckbox = document.getElementById("broker-select-all");
  var brokerCheckboxes = document.getElementsByClassName("broker-select-box");

  for (var i = 0; i < brokerCheckboxes.length; i++) {
    brokerCheckboxes[i].checked = selectAllCheckbox.checked;
  }
}

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

document
  .getElementById("customerButton")
  .addEventListener("click", function () {
    document.getElementById("teklifCheckbox").checked = true;
    document.getElementById("sigortaCheckbox").checked = true;
    document.getElementById("adresCheckbox").checked = true;
    document.getElementById("faaliyetCheckbox").checked = true;
    document.getElementById("personelCheckbox").checked = true;
    document.getElementById("koordinatCheckbox").checked = true;
    document.getElementById("gerekliCheckbox").checked = true;
    document.getElementById("telefonCheckbox").checked = true;
    document.getElementById("oncekiCheckbox").checked = true;
    
    document.getElementById("teklif__no").value = "DBX00001";
    document.getElementById("sigortali__adi").value =
      "Dose Gayrimenkul İşletmeleri ve Danışmanlık A.Ş.";
    document.getElementById("vkn__input").value = "3101034522.00";
    document.getElementById("il__input").value = "Kocaeli";
    document.getElementById("ilce__input").value = "Gebze";
    document.getElementById("mahalle__input").value = "Gebze OSB2";
    document.getElementById("faaliyet__input").value = "Döküm Sektörü";
    document.getElementById("personel__sayisi").value = "210";
    document.getElementById("koordinat__n").value = "41.0282";
    document.getElementById("koordinat__e").value = "58.0282";
    document.getElementById("yetkili__kisi").value = "Oğuzhan YILDIRIM";
    document.getElementById("email__input").value = "oguzhan@digibrox.com";
    document.getElementById("telefon__input").value = "+90 506 999 99 99";
    document.getElementById("vardiya__sayisi").value = "3 Vardiya / 8 Saat";
    document.getElementById("onceki__sigorta").value = "X Sigorta";
  });
  notificationBack.addEventListener("click", function () {
    //console.log("notificationBack butonuna tıklandı.");
    
    PCRadio.click(); // PCRadyo butonunu manuel olarak tıkla
    customerButton.click();
  });
  document
  .getElementById("resetCustomerButton")
  .addEventListener("click", function () {
    document.getElementById("teklifCheckbox").checked = false;
    document.getElementById("sigortaCheckbox").checked = false;
    document.getElementById("adresCheckbox").checked = false;
    document.getElementById("faaliyetCheckbox").checked = false;
    document.getElementById("personelCheckbox").checked = false;
    document.getElementById("koordinatCheckbox").checked = false;
    document.getElementById("gerekliCheckbox").checked = false;
    document.getElementById("telefonCheckbox").checked = false;
    document.getElementById("oncekiCheckbox").checked = false;
    document.getElementById("teklif__no").value = "";
    document.getElementById("sigortali__adi").value =
      "";
    document.getElementById("vkn__input").value = "";
    document.getElementById("il__input").value = "";
    document.getElementById("ilce__input").value = "";
    document.getElementById("mahalle__input").value = "";
    document.getElementById("faaliyet__input").value = "";
    document.getElementById("personel__sayisi").value = "";
    document.getElementById("koordinat__n").value = "";
    document.getElementById("koordinat__e").value = "";
    document.getElementById("yetkili__kisi").value = "";
    document.getElementById("vardiya__sayisi").value = "";
    document.getElementById("telefon__input").value = "";
    document.getElementById("vardiya__sayisi").value = "";
    document.getElementById("onceki__sigorta").value = "";
  });



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


// Inputları seç
var teklifNoInput = document.getElementById("teklif__no");
var teklifCheckbox = document.getElementById("teklifCheckbox");
var sigortaCheckboxInput = document.getElementById("sigortali__adi");
var sigortaCheckbox = document.getElementById("sigortaCheckbox");
var ilCheckboxInput = document.getElementById("il__input");
var ilCheckbox = document.getElementById("adresCheckbox");
var faaliyetCheckboxInput = document.getElementById("faaliyet__input");
var faaliyetCheckbox = document.getElementById("faaliyetCheckbox");
var personelCheckboxInput = document.getElementById("personel__sayisi");
var personelCheckbox = document.getElementById("personelCheckbox");
var gerekliCheckboxInput = document.getElementById("yetkili__kisi");
var gerekliCheckbox = document.getElementById("gerekliCheckbox");
var telefonCheckboxInput = document.getElementById("telefon__input");
var telefonCheckbox = document.getElementById("telefonCheckbox");
var oncekiCheckboxInput = document.getElementById("onceki__sigorta");
var oncekiCheckbox = document.getElementById("oncekiCheckbox");
var tarihCheckboxInput = document.getElementById("tarih__input");
var tarihCheckbox = document.getElementById("tarihCheckbox");
var koordinatCheckboxInput = document.getElementById("koordinat__n");
var koordinatCheckbox = document.getElementById("koordinatCheckbox");
var hasarCheckboxInput = document.getElementById("hasar__input");
var hasarCheckbox = document.getElementById("hasarCheckbox");
var bedelCheckboxInput = document.getElementById("bedel__input2");
var bedelCheckbox = document.getElementById("bedelCheckbox");
var modelCheckboxInput = document.getElementById("model__input");
var modelCheckbox = document.getElementById("modelCheckbox");
var markaCheckboxInput = document.getElementById("marka__input");
var markaCheckbox = document.getElementById("markaCheckbox");
var seriCheckboxInput = document.getElementById("seriNo__input");
var seriCheckbox = document.getElementById("seriCheckbox");
var yasiCheckboxInput = document.getElementById("yasi__input");
var yasiCheckbox = document.getElementById("yasiCheckbox");
var bedelCheckboxInput2 = document.getElementById("bedel__input22");
var bedelCheckbox2 = document.getElementById("bedelCheckbox2");
var modelCheckboxInput2 = document.getElementById("model__input2");
var modelCheckbox2 = document.getElementById("modelCheckbox2");
var markaCheckboxInput2 = document.getElementById("marka__input2");
var markaCheckbox2 = document.getElementById("markaCheckbox2");
var seriCheckboxInput2 = document.getElementById("seriNo__input2");
var seriCheckbox2 = document.getElementById("seriCheckbox2");
var yasiCheckboxInput2 = document.getElementById("yasi__input2");
var yasiCheckbox2 = document.getElementById("yasiCheckbox2");
var maviCheckboxInput = document.getElementById("maviYaka__input");
var maviCheckbox = document.getElementById("maviCheckbox");
var beyazCheckboxInput = document.getElementById("beyazYaka__input");
var beyazCheckbox = document.getElementById("beyazCheckbox");
var brutCheckboxInput = document.getElementById("yillik__input");
var brutCheckbox = document.getElementById("brutCheckbox");
var ciroCheckboxInput = document.getElementById("ciro__input");
var ciroCheckbox = document.getElementById("ciroCheckbox");



function  controlCheckBoxAndInputs(element){
  var a = element.closest('.questionInputDiv.mainQuestionDiv');
  var checkBoxRightDivs = a.getElementsByClassName("checkBoxRightDiv");
  const checkboxesAndInputs = a.querySelectorAll('input[type="checkbox"], input[type="text"]');

  var checkboxValue = 0
  var inputValue = 0

  checkboxesAndInputs.forEach(item => {
      var attr = item.getAttribute("attr")
      if (attr !== "broker-select" && attr !== "client-select" && attr !== "spec") {
        if (item.type === 'checkbox') {
            if (item.checked) {
                checkboxValue += 1
            }
        }

        if (item.type === 'text') {
            if (item.value.trim() !== '') {
                inputValue += 1
            }
        }
      }
  });

  if (checkboxValue > 0 || inputValue > 0){
    checkBoxRightDivs[0].children[0].children[0].checked = true
  }
  else{
    checkBoxRightDivs[0].children[0].children[0].checked = false
  }
}


document.addEventListener('DOMContentLoaded', function() {
  var idList = ["informationAccordion2", "yanginAccordion","ECAccordion", "MKAccordion", "IMMAccordion", "TPLAccordion"]

  for(var e of idList){
    var elem = document.getElementById(e)
    console.log(elem)
    const controlElements = elem.querySelectorAll('input[type="checkbox"], input[type="text"]');
    controlElements.forEach(item => {
        item.addEventListener('change', () => {
          if(item.id != "accordionYangin"){
            controlCheckBoxAndInputs(item)
          }        
        });

        if (item.type === 'text') {
            item.addEventListener('input', () => {
              controlCheckBoxAndInputs(item)
            });
        }
    });
  }
});

function openedAccordions(){

    informationAccordion.children[1].click()
    informationAccordion2.children[1].click()
}
openedAccordions()