
document.addEventListener('DOMContentLoaded', () => {
  // Function to check and hide divs
  const hideDivsWithTitlePy = () => {
    // Select all py_questionDiv elements
    const questionDivs = document.querySelectorAll('.py_questionDiv');

    questionDivs.forEach(questionDiv => {
      // Check if the div contains a child with class title_py
      const titlePyElement = questionDiv.querySelector('.title_py');
      
      if (titlePyElement) {
        // If title_py exists, hide the parent py_questionDiv
        questionDiv.style.display = 'none';
      }
    });
  };

  // Call the function to hide divs
  hideDivsWithTitlePy();
});
document.addEventListener('DOMContentLoaded', () => {
  // Tüm accordionBg sınıfına sahip div'leri seç
  const accordionBgDivs = document.querySelectorAll('.accordionBg');

  accordionBgDivs.forEach(accordionBg => {
      // Her accordionBg içindeki ilk py_questionDiv div'ini seç
      const firstQuestionDiv = accordionBg.querySelector('.py_questionDiv');

      if (firstQuestionDiv) {
          firstQuestionDiv.style.display = 'none';
      }
  });
});


document.addEventListener('DOMContentLoaded', function() {
  var idList = ["informationAccordion2", "HasarAccordion", "yanginAccordion", "ECAccordion", "MKAccordion", "IMMAccordion", "TPLAccordion", "HirsizlikAccordion"];

  idList.forEach(e => {
    var elem = document.getElementById(e);
    const controlElements = elem.querySelectorAll('input[type="radio"], input[type="text"], input[type="number"], input[type="date"]');
    controlElements.forEach(item => {
      if (item.type === 'text' || item.type === 'number') {
        item.addEventListener('input', () => {
          controlCheckBoxAndInputs(item);
        });
      } else if (item.type === 'radio' || item.type === 'checkbox') {
        item.addEventListener('change', () => {
          if (item.id != "accordionYangin2") {
            controlCheckBoxAndInputs(item);
          }
        });
      }
    });
  });
});
function updateSymbol(e) {
  var parentDiv = e.target.closest('.input-group');
  var selected = parentDiv.querySelector(".currency-selector option:checked");
  var currencySymbol = parentDiv.querySelector(".currency-symbol");
  var currencyAmount = parentDiv.querySelector(".currency-amount");
  var currencyAddonFixed = parentDiv.querySelector(".currency-addon-fixed");

  if (currencySymbol) {
    currencySymbol.textContent = selected.getAttribute("data-symbol");
  }

  if (currencyAmount) {
    currencyAmount.placeholder = selected.getAttribute("data-placeholder");
  }

  if (currencyAddonFixed) {
    currencyAddonFixed.textContent = selected.textContent;
  }
}

var currencySelectors = document.querySelectorAll(".currency-selector");

for (var i = 0; i < currencySelectors.length; i++) {
  currencySelectors[i].addEventListener("change", updateSymbol);
}

// İlk yükleme sırasında her seçici için updateSymbol fonksiyonunu çağırın
for (var i = 0; i < currencySelectors.length; i++) {
  var event = new Event('change');
  currencySelectors[i].dispatchEvent(event);
}


document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('.select-all-checkbox').forEach((selectAllCheckbox) => {
      selectAllCheckbox.addEventListener('change', function() {
          let targetId = this.dataset.target;
          let checkboxes = document.querySelectorAll(`#${targetId} .question-checkbox`);
          checkboxes.forEach((checkbox) => {
              checkbox.checked = this.checked;
          });
      });
  });
});





document.querySelectorAll(".openQuestionForm").forEach(function(button) {
  button.addEventListener("click", function() {
      document.getElementById("applyButton").click();
  });
});


