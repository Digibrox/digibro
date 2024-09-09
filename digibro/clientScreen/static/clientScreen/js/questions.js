
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
  var brokerCheckboxes = document.getElementsByClassName("client-select-box");

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
    "client-select-boxYangin"
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
    "client-select-boxEC"
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
    "client-select-boxMK"
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
    "client-select-boxIMM"
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
    "client-select-boxTPL"
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
