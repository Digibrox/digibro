
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
function selectCheckbox() {
  // Tüm checkboxları seç
  var checkboxes = document.querySelectorAll('.selectedCheckbox');

  // Her bir checkbox için checked özelliğini ayarla
  checkboxes.forEach(function(checkbox) {
      checkbox.checked = true;
  });
}

document.getElementById("customerInfos").addEventListener("click", function () {
    selectCheckbox()
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
    document.getElementById("vardiya__sayisi").value = "3 Vardiya (24 Saat)";
    document.getElementById("telefon__input").value = "+90 506 999 99 99";
    document.getElementById("email__input").value = "oguzhanyildirim@digibrox.com";
    document.getElementById("onceki__sigorta").value = "X Sigorta";
  });

  document.getElementById("resetCustomerButton").addEventListener("click", function () {
    document.getElementById("teklif__no").value = "";
    document.getElementById("sigortali__adi").value = "";
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