document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('container_py');

  document.getElementById('applyButton').addEventListener('click', () => {
      // Temizle
      container.innerHTML = '';

      // Py_questionDiv sınıfına sahip tüm div'leri seç
      const questionDivs = document.querySelectorAll('.py_questionDiv');

      questionDivs.forEach(questionDiv => {
          // Yeni bir div oluştur
          const newDiv = document.createElement('div');

          // Tüm p etiketlerini al ve yeni div'e ekle
          const paragraphs = Array.from(questionDiv.querySelectorAll('p'));
          paragraphs.forEach((p) => {
              const newP = document.createElement('p');
              const attr = p.getAttribute("order");

              // Boşluk kontrolü ve "Boş" yazma
              newP.textContent = p.textContent.trim() === '' ? 'Boş' : p.textContent;
              // Dinamik sınıf atama
              newP.className = `p${attr}_py`;
              newDiv.appendChild(newP);
          });

          // input-alt sınıfına sahip tüm input değerlerini al ve bir p etiketi olarak ekle
          const inputs = Array.from(questionDiv.querySelectorAll('.inputSize_py .input-alt'));
          inputs.forEach((input) => {
              const inputValueP = document.createElement('p');
              const attr = input.getAttribute("order");

              // Boşluk kontrolü ve "Boş" yazma
              inputValueP.textContent = input.value.trim() === '' ? 'Boş' : input.value;
              // Dinamik sınıf atama
              inputValueP.className = `p${attr}_py`;
              newDiv.appendChild(inputValueP);
          });

          // Radyo butonları için <label> içeriğini al ve ekle
          const radioButtons = Array.from(questionDiv.querySelectorAll('input[type="radio"]'));
          radioButtons.forEach((radio) => {
              if (radio.checked) {
                  const label = document.querySelector(`label[for="${radio.id}"]`);
                  if (label) {
                      const newP = document.createElement('p');
                      const attr = label.getAttribute("order");

                      // Boşluk kontrolü ve "Boş" yazma
                      newP.textContent = label.textContent.trim() === '' ? 'Boş' : label.textContent;
                      // Dinamik sınıf atama
                      newP.className = `p${attr}_py`;
                      newDiv.appendChild(newP);
                  }
              }
          });

          // Döviz ve miktarı işlemek için
          const currencyGroups = Array.from(questionDiv.querySelectorAll('.input-group'));
          let currencyCounter = 1;
          currencyGroups.forEach((group) => {
              const currencySelector = group.querySelector('.currency-selector');
              const amountInput = group.querySelector('.input-alt');

              if (currencySelector && amountInput) {
                  const selectedCurrency = currencySelector.options[currencySelector.selectedIndex].dataset.symbol;
                  const amount = amountInput.value.trim();

                  const currencyP = document.createElement('p');
                  if (amount === '' || amount === '0') {
                      currencyP.textContent = 'Boş';
                  } else {
                      currencyP.textContent = `${amount} ${selectedCurrency}`;
                  }
                  let currencyCounter = 1;

                  // currencyP elemanını oluşturduktan sonra
                  currencyP.className = `currency_${group.dataset.index}_py`;
                  
                  currencyP.id = `currency_${currencyCounter}`;
                  currencyCounter++; // Bir sonraki için sayacı artırın
              
                  
                  newDiv.appendChild(currencyP);
                  
              }
          });

          // Textarea içeriklerini işlemek için
          const textareaContainer = questionDiv.nextElementSibling; // questionDiv'in bir sonraki kardeş elemanını al
          if (textareaContainer) {
              const textareas = Array.from(textareaContainer.querySelectorAll('.textarea_py_sub'));
              textareas.forEach((textarea) => {
                  const attr = textarea.getAttribute("order");
                  const id = textarea.id;

                  // Eğer textarea'nın içeriği boşsa, display: none yap
                  if (textarea.value.trim() === '') {
                      textarea.style.display = 'none';
                  } else {
                      const textareaP = document.createElement('p');

                      // Boşluk kontrolü ve "Boş" yazma
                      textareaP.textContent = textarea.value.trim() === '' ? 'Boş' : textarea.value;
                      // Dinamik sınıf atama
                      textareaP.className = `textarea_${attr}_py`;
                      newDiv.appendChild(textareaP);
                  }
              });
          }

          // Oluşturulan yeni div'i container_py içerisine ekle
          container.appendChild(newDiv);
      });
  });
});
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

function controlCheckBoxAndInputs(element) {
  var a = element.closest('.questionInputDiv.mainQuestionDiv');
  var checkBoxRightDivs = a.getElementsByClassName("checkBoxRightDiv");
  const checkboxesAndInputs = a.querySelectorAll('input[type="radio"], input[type="text"], input[type="number"], input[type="date"]');

  var inputValue = 0;
  var numberValue = 0;
  var radioValue = 0;
  var dateValue = 0;

  checkboxesAndInputs.forEach(item => {
    var attr = item.getAttribute("attr");
    if (attr !== "broker-select" && attr !== "spec") {
      if (item.type === 'number') {
        if (item.value.trim() !== '') {
          numberValue += 1;
        }
      }

      if (item.type === 'text') {
        if (item.value.trim() !== '') {
          inputValue += 1;
        }
      }

      if (item.type === 'date') {
        // Tarih girişinin boş olup olmadığını doğrudan kontrol edin
        if (item.value) {
          dateValue += 1;
        }
      }

      if (item.type === 'radio') {
        var name = item.name;
        var checkedRadios = a.querySelectorAll(`input[name="${name}"]:checked`);
        if (checkedRadios.length > 0) {
          radioValue += 1;
        }
      }
    }
  });

  if (numberValue > 0 || inputValue > 0 || radioValue > 0 || dateValue > 0) {
    checkBoxRightDivs[0].children[0].children[0].checked = true;
  } else {
    checkBoxRightDivs[0].children[0].children[0].checked = false;
  }
}


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



document.getElementById("PCRadio").addEventListener("click", function() {
  document.querySelector(".applyButton").style.display = "flex";

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


const elements = document.getElementsByClassName("locktonSvgAdd");

const svgElement = `
   <svg
                width="150"
                height="50"
                id="locktonSvg2"
                viewBox="0 0 134 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M118.906 9.04643V11.9296C122.942 11.1853 126.349 11.3177 129.088 11.8248C128.807 9.79064 127.617 8.77631 125.505 8.77631C124.259 8.77631 123.195 9.35514 122.324 10.5183V9.04091H118.906V9.04643Z"
                  fill="#495057"
                />
                <path
                  d="M129.805 9.48187V11.9681C131.255 12.2823 132.506 12.7013 133.543 13.1313V12.2768L129.805 9.48187Z"
                  fill="#495057"
                />
                <path
                  d="M129.805 9.04639L133.543 11.8578V9.04639H129.805Z"
                  fill="#495057"
                />
                <path
                  d="M90.0419 7.0122C88.8071 8.21947 88.1896 9.84571 88.1896 11.8854C88.1896 12.7509 88.2889 13.5447 88.4818 14.2669C89.9813 14.5756 91.602 14.8181 93.3385 14.9835C93.1841 14.8181 93.0518 14.6252 92.9361 14.4047C92.5998 13.7707 92.4344 12.9438 92.4344 11.924C92.4344 10.9648 92.6053 10.1654 92.9581 9.53148C93.3881 8.74317 94.0496 8.34626 94.9372 8.34626C95.8247 8.34626 96.5138 8.73766 96.9713 9.51495C97.3407 10.1489 97.5281 10.9538 97.5281 11.924C97.5281 13.5282 97.1698 14.6142 96.4587 15.182C97.9526 15.2316 99.5127 15.2206 101.139 15.1379C101.558 14.2062 101.767 13.1368 101.767 11.924C101.767 11.5987 101.751 11.2845 101.718 10.9813C102.071 10.2261 102.451 9.85122 102.864 9.85122C103.206 9.85122 103.372 10.0993 103.372 10.5899C103.372 10.7994 103.35 10.9979 103.311 11.1908L102.49 15.0497C103.344 14.989 104.215 14.9064 105.097 14.8016C105.417 13.7597 105.759 12.8556 106.133 12.0839C106.916 10.4631 107.716 9.65276 108.526 9.65276C109.094 9.65276 109.38 9.96699 109.38 10.5899C109.38 10.8435 109.303 11.3452 109.143 12.0894L108.669 14.2889C109.59 14.1291 110.516 13.9471 111.464 13.7432C111.685 13.1368 111.911 12.5855 112.153 12.0894C112.942 10.4686 113.741 9.65828 114.546 9.65828C115.097 9.65828 115.378 9.9725 115.378 10.5954C115.378 10.8656 115.301 11.3617 115.147 12.0783L114.976 12.8832C115.224 12.817 115.472 12.7509 115.72 12.6792C116.359 12.4973 116.982 12.343 117.6 12.2051C117.677 11.731 117.721 11.3672 117.721 11.1026C117.721 10.408 117.506 9.85673 117.076 9.43777C116.652 9.01329 116.084 8.80382 115.362 8.80382C113.862 8.80382 112.605 9.95596 111.58 12.2547C111.585 12.1941 111.596 12.139 111.602 12.1004C111.674 11.6318 111.707 11.2955 111.707 11.1026C111.707 10.3915 111.497 9.82366 111.084 9.4102C110.676 8.99675 110.119 8.78728 109.413 8.78728C107.897 8.78728 106.619 9.94494 105.577 12.2603C105.659 11.7035 105.703 11.2459 105.703 10.8766C105.703 10.2261 105.544 9.71341 105.224 9.33855C104.904 8.95817 104.474 8.76522 103.934 8.76522C103.443 8.76522 102.953 8.94714 102.467 9.31649C102.131 9.56456 101.845 9.87328 101.613 10.2426C101.354 8.9692 100.786 7.90525 99.9041 7.03976C98.6582 5.80492 97.0209 5.1875 94.9868 5.1875H94.9702C92.9361 5.1875 91.2988 5.79941 90.0529 7.02322L90.0419 7.0122Z"
                  fill="#495057"
                />
                <path
                  d="M129.805 18.848H133.543V13.5117C132.506 13.0817 131.255 12.6682 129.805 12.3485V18.848Z"
                  fill="#495057"
                />
                <path
                  d="M99.9095 17.2989C100.422 16.7752 100.83 16.1798 101.133 15.5128C99.5071 15.5955 97.947 15.6065 96.453 15.5569C96.0671 15.8656 95.571 16.02 94.9701 16.02C94.2976 16.02 93.7518 15.7994 93.3439 15.3584C91.6074 15.1931 89.9867 14.9505 88.4872 14.6418C88.7739 15.6947 89.27 16.5878 89.9701 17.332C91.1664 18.5668 92.8367 19.1842 94.9701 19.1842C97.1035 19.1842 98.6802 18.5558 99.915 17.2989H99.9095Z"
                  fill="#495057"
                />
                <path
                  d="M105.102 15.182C104.215 15.2867 103.344 15.3694 102.489 15.4301L101.706 19.107C102.181 18.8535 102.605 18.7211 102.985 18.7211C103.41 18.7211 103.801 18.8424 104.16 19.085C104.441 17.6241 104.749 16.3176 105.097 15.182H105.102Z"
                  fill="#495057"
                />
                <path
                  d="M111.464 14.118C110.516 14.322 109.584 14.5039 108.669 14.6638L107.716 19.107C108.184 18.8534 108.614 18.7211 108.995 18.7211C109.419 18.7211 109.805 18.8424 110.158 19.085C110.533 17.1445 110.968 15.4907 111.464 14.118Z"
                  fill="#495057"
                />
                <path
                  d="M117.423 13.4951C117.44 13.4234 117.451 13.3683 117.456 13.3297C117.511 13.0541 117.561 12.806 117.599 12.58C116.988 12.7178 116.359 12.8777 115.72 13.0596C115.472 13.1313 115.224 13.1974 114.975 13.2636L114.501 15.4907L114.452 15.7608C114.319 16.4003 114.253 16.8468 114.253 17.1004C114.253 17.7288 114.419 18.2305 114.749 18.5998C115.086 18.9692 115.532 19.1511 116.1 19.1511C117.291 19.1511 118.178 18.462 118.763 17.0839C118.818 16.9571 118.862 16.8413 118.906 16.731V18.8534H122.644V14.0519C122.644 12.7564 123.129 12.1114 124.099 12.1114C124.975 12.1114 125.411 12.7013 125.411 13.8755V18.8589H129.149V13.214C129.149 12.8611 129.127 12.5249 129.088 12.2162C126.348 11.709 122.941 11.5712 118.906 12.3209V15.5624C118.796 15.612 118.708 15.7663 118.636 16.0199C118.614 16.0916 118.603 16.1467 118.592 16.1853C118.195 17.4256 117.726 18.0486 117.181 18.0486C116.839 18.0486 116.673 17.8115 116.673 17.3319C116.673 17.1996 116.695 17.0177 116.734 16.7807L117.418 13.5061L117.423 13.4951Z"
                  fill="#495057"
                />
                <path
                  d="M35.3732 6.28998L35.3842 6.29549V6.28998H35.3787H35.3732Z"
                  fill="#495057"
                />
                <path
                  d="M4.46913 7.75635H0.5V17.7123H7.35777V15.2756H4.46913V7.75635Z"
                  fill="#495057"
                />
                <path
                  d="M12.3579 7.54138C9.31491 7.54138 6.83972 9.65274 6.83972 12.7674C6.83972 15.8821 9.32594 17.8556 12.38 17.8556C15.434 17.8556 17.9202 15.9537 17.9202 12.7674C17.9202 9.58108 15.4009 7.54138 12.3579 7.54138ZM12.38 15.2646C11.2774 15.2646 10.9522 13.7983 10.9522 12.6682C10.9522 11.6153 11.2223 10.1158 12.38 10.1158C13.5376 10.1158 13.8077 11.6097 13.8077 12.6682C13.8077 13.7983 13.488 15.2646 12.38 15.2646Z"
                  fill="#495057"
                />
                <path
                  d="M24.3641 9.95043C25.2847 9.83466 25.8966 10.1158 26.4754 10.5899V7.81151C25.6044 7.5469 24.7665 7.54138 23.8404 7.54138C20.5273 7.54138 17.9969 9.93389 17.9969 12.8336C17.9969 15.7332 20.5162 17.8666 23.7356 17.8666C24.4688 17.8666 25.8084 17.7454 26.4699 17.4697V14.8732C25.8084 15.3087 25.213 15.4245 24.3641 15.3143C23.2064 15.215 22.0598 14.0298 22.0598 12.6847C22.0598 11.3396 22.8426 10.1379 24.3586 9.94491L24.3641 9.95043Z"
                  fill="#495057"
                />
                <path
                  d="M37.3136 7.74533H32.8594C32.8594 7.74533 30.7205 11.5932 30.6433 11.7365V7.74533H26.6521V17.7288H30.6433V13.6549L32.7822 17.7122H37.4184L34.1824 12.5083L37.3191 7.73981L37.3136 7.74533Z"
                  fill="#495057"
                />
                <path
                  d="M45.8636 7.74536H37.3685V10.3694H39.5846L39.5957 17.7178H43.5979L43.6089 10.3694H45.8636V7.74536Z"
                  fill="#495057"
                />
                <path
                  d="M63.6419 12.7233L61.2825 7.78949H56.9275V17.7509L61.0069 17.7619V12.9769L63.1954 17.7509H67.589V7.78949H63.5978L63.6419 12.7233Z"
                  fill="#495057"
                />
                <path
                  d="M51.134 7.53589C48.0194 7.53589 45.4615 9.61968 45.4615 12.7399C45.4615 15.86 47.9146 17.8722 51.0458 17.8722H51.0569C54.1825 17.8722 56.8121 15.9207 56.8121 12.7399C56.8121 9.55904 54.2542 7.53589 51.1395 7.53589H51.134ZM51.134 15.2095C50.0039 15.2095 49.6732 13.7873 49.6732 12.6627C49.6732 11.6098 49.9488 10.0827 51.134 10.0827C52.3193 10.0827 52.5949 11.6042 52.5949 12.6627C52.5949 13.7928 52.2641 15.2095 51.134 15.2095Z"
                  fill="#495057"
                />
                <path
                  d="M78.835 25H77.6333V0H78.835V12.4972V25Z"
                  fill="#495057"
                />
              </svg>
`;

for (let i = 0; i < elements.length; i++) {
  elements[i].innerHTML = svgElement;
}



