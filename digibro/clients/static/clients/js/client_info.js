// document.querySelectorAll(".accordion-item").forEach((item) => {
//   item.querySelector(".accordion-item-header").addEventListener("click", () => {
//     item.classList.toggle("open");
//   });
// });

// document.querySelector('.masakButton').addEventListener('click', function() {
//   document.querySelector('.upload-area__title').textContent = "Upload Masak Document";
//   document.getElementById('masakDoc').style.display = "flex";
//   document.getElementById('generalDocumentDiv').style.display = "none";
  
//   document.getElementById('openFilters').click();
// });
// document.getElementById('closeMasak').addEventListener('click', closeMasak);
// function closeMasak(){
//   document.getElementById('masakDoc').style.display= "none";
//   document.getElementById('generalDocumentDiv').style.display = "flex";
// }
// document.querySelector('.authorityButton').addEventListener('click', function() {
//   document.querySelector('.upload-area__title').textContent = "Upload Authority Letter Document";
//   document.getElementById('masakDoc').style.display = "flex";
//   document.getElementById('openFilters').click();
//   document.getElementById('generalDocumentDiv').style.display = "none";
// });
// document.getElementById('authAccordionItem').addEventListener('click', closeMasak);
// document.getElementById('masakAccordionItem').addEventListener('click', closeMasak);

// document.addEventListener('DOMContentLoaded', () => {
//   const closeFilters = document.getElementById('closeFilters');
//   const openFilters = document.getElementById('openFilters');
//   const filtersBottom = document.getElementById('filtersBottom');
//   const filtersHr = document.getElementById('filtersHr');



// });

// Select Upload-Area
const uploadArea = document.querySelector('#uploadArea');

// Select Drop-Zoon Area
const dropZoon = document.querySelector('#dropZoon');

// Loading Text
const loadingText = document.querySelector('#loadingText');

// Select File Input 
const fileInput = document.querySelector('#fileInput');

// Remove accept attribute to allow all file types
fileInput.removeAttribute('accept');

// Select Preview Image
const previewImage = document.querySelector('#previewImage');

// File-Details Area
const fileDetails = document.querySelector('#fileDetails');

// Uploaded File
const uploadedFile = document.querySelector('#uploadedFile');

// Uploaded File Info
const uploadedFileInfo = document.querySelector('#uploadedFileInfo');

// Uploaded File Name
const uploadedFileName = document.querySelector('.uploaded-file__name');

// Uploaded File Icon
const uploadedFileIconText = document.querySelector('.uploaded-file__icon-text');

// Uploaded File Counter
const uploadedFileCounter = document.querySelector('.uploaded-file__counter');

// ToolTip Data
const toolTipData = document.querySelector('.upload-area__tooltip-data');

// Upload Button
const uploadButton = document.querySelector('#uploadButton'); // ID'si uploadButton olan öğeyi seçin

// When (drop-zoon) has (dragover) Event 
dropZoon.addEventListener('dragover', function (event) {
  event.preventDefault();
  dropZoon.classList.add('drop-zoon--over');
});

// When (drop-zoon) has (dragleave) Event 
dropZoon.addEventListener('dragleave', function (event) {
  dropZoon.classList.remove('drop-zoon--over');
});

// When (drop-zoon) has (drop) Event 
dropZoon.addEventListener('drop', function (event) {
  event.preventDefault();
  dropZoon.classList.remove('drop-zoon--over');
  const file = event.dataTransfer.files[0];
  uploadFile(file);
});

// When (drop-zoon) has (click) Event 
dropZoon.addEventListener('click', function (event) {
  fileInput.click();
});

// When (fileInput) has (change) Event 
fileInput.addEventListener('change', function (event) {
  const file = event.target.files[0];
  uploadFile(file);
});

// Upload File Function
function uploadFile(file) {
  const fileReader = new FileReader();
  const fileType = file.type;
  const fileSize = file.size;

  if (fileValidate(fileType, fileSize)) {
    dropZoon.classList.add('drop-zoon--Uploaded');
    loadingText.style.display = "block";
    previewImage.style.display = 'none';
    uploadedFile.classList.remove('uploaded-file--open');
    uploadedFileInfo.classList.remove('uploaded-file__info--active');

    fileReader.addEventListener('load', function () {
      setTimeout(function () {
        uploadArea.classList.add('upload-area--open');
        loadingText.style.display = "none";

        if (fileType.startsWith('image/')) {
          previewImage.style.display = 'block';
          previewImage.setAttribute('src', fileReader.result);
        } else {
          previewImage.style.display = 'block';
          previewImage.setAttribute('src', '/static/clients/img/folderIcon.png');
        }

        fileDetails.classList.add('file-details--open');
        uploadedFile.classList.add('uploaded-file--open');
        uploadedFileInfo.classList.add('uploaded-file__info--active');
      }, 500);

      uploadedFileName.innerHTML = file.name;

      progressMove();
    });

    fileReader.readAsDataURL(file);
  }
}

// Progress Counter Increase Function
function progressMove() {
  let counter = 0;
  setTimeout(() => {
    let counterIncrease = setInterval(() => {
      if (counter === 100) {
        clearInterval(counterIncrease);
      } else {
        counter = counter + 10;
        uploadedFileCounter.innerHTML = `${counter}%`;
      }
    }, 100);
  }, 600);
}

// Simple File Validate Function
function fileValidate(fileType, fileSize) {
  if (fileSize <= 2000000) {
    return true;
  } else {
    alert('Please Your File Should be 2 Megabytes or Less');
    return false;
  }
}
$(document).ready(function() {
  new DataTable('#mainTable', {
    layout: {
      topStart: {
        buttons: ['pdf', 'excel', 'copy']
      }
    }
  });
  new DataTable('#mainTable2', {
    layout: {
      topStart: {
        buttons: ['pdf', 'excel', 'copy']
      }
    }
  });
  new DataTable('#example2', {
    layout: {
      topStart: {
        buttons: ['pdf', 'excel', 'copy']
      }
    }
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const checkboxes = document.querySelectorAll('.custom-checkbox');
  checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener('change', function() {
          uncheckOtherCheckboxes(this);
      });
  });
});

function uncheckOtherCheckboxes(checkedCheckbox) {
  const checkboxes = document.querySelectorAll('.custom-checkbox');
  checkboxes.forEach(function(checkbox) {
      if (checkbox !== checkedCheckbox && checkbox.checked) {
          checkbox.checked = false;
      }
  });
}


document.addEventListener("DOMContentLoaded", function() {
  const checkboxes = document.querySelectorAll('.custom-checkbox');
  checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener('change', function() {
          const filterValue = this.getAttribute('data-filter');
          filterData(filterValue);
      });
  });

  const buttons = document.querySelectorAll('.optionDiv2 button');
  buttons.forEach(function(button) {
      button.addEventListener('click', function() {
          const filterValue = this.getAttribute('data-filter');
          filterData(filterValue);
      });
  });
});

function filterData(filterValue) {
  const rows = document.querySelectorAll('tr[data-year][data-policy][data-company]');
  rows.forEach(function(row) {
      const rowYear = row.getAttribute('data-year');
      const rowPolicy = row.getAttribute('data-policy');
      const rowCompany = row.getAttribute('data-company');
      if (
          (filterValue === 'all' || rowYear === filterValue || rowPolicy === filterValue || rowCompany === filterValue)
      ) {
          row.style.display = '';
      } else {
          row.style.display = 'none';
      }
  });
}
// script.js
document.addEventListener('DOMContentLoaded', (event) => {
  const year2022Button = document.getElementById('year2022');
  const year2023Button = document.getElementById('year2023');
  const yearAllButton = document.getElementById('yearAll');

  function resetButtons() {
      year2022Button.classList.remove('hover');
      year2023Button.classList.remove('hover');
      yearAllButton.classList.remove('hover');
  }

  year2022Button.addEventListener('click', () => {
      resetButtons();
      year2022Button.classList.add('hover');
  });

  year2023Button.addEventListener('click', () => {
      resetButtons();
      year2023Button.classList.add('hover');
  });

  yearAllButton.addEventListener('click', () => {
      resetButtons();
      yearAllButton.classList.add('hover');
  });
});


document.addEventListener('DOMContentLoaded', (event) => {
    const year2022Button = document.getElementById('year2022');
    const year2023Button = document.getElementById('year2023');
    const yearAllButton = document.getElementById('yearAll');

    // Başlangıçta "yearAll" butonunu seçili olarak ayarla
    yearAllButton.classList.add('hover');

    // Click olay dinleyicilerini ekle
    year2022Button.addEventListener('click', buttonControlRed);
    year2023Button.addEventListener('click', buttonControlRed);
    yearAllButton.addEventListener('click', buttonControlRed);

    function buttonControlRed(event) {
        // Önce tüm butonların hover sınıfını kaldır
        year2022Button.classList.remove('hover');
        year2023Button.classList.remove('hover');
        yearAllButton.classList.remove('hover');

        // Tıklanan butona hover sınıfını ekle
        if (event.target.id === 'year2022') {
            year2022Button.classList.add('hover');
        } else if (event.target.id === 'year2023') {
            year2023Button.classList.add('hover');
        } else if (event.target.id === 'yearAll') {
            yearAllButton.classList.add('hover');
        }
    }
});


document.addEventListener("DOMContentLoaded", function() {
  const policyPCButton = document.getElementById('policyPC');
  const policyHealthButton = document.getElementById('policyHealth');
  const policyAllButton = document.getElementById('policyAll');

  // Başlangıçta "All" butonunu seçili olarak ayarla
  policyAllButton.classList.add('hover');

  // Click olay dinleyicilerini ekle
  policyPCButton.addEventListener('click', buttonControlRed2);
  policyHealthButton.addEventListener('click', buttonControlRed2);
  policyAllButton.addEventListener('click', buttonControlRed2);

  function buttonControlRed2(event) {
      // Önce tüm butonların hover sınıfını kaldır
      policyPCButton.classList.remove('hover');
      policyHealthButton.classList.remove('hover');
      policyAllButton.classList.remove('hover');

      // Tıklanan butona hover sınıfını ekle
      if (event.target.id === 'policyPC') {
          policyPCButton.classList.add('hover');
      } else if (event.target.id === 'policyHealth') {
          policyHealthButton.classList.add('hover');
      } else if (event.target.id === 'policyAll') {
          policyAllButton.classList.add('hover');
      }
  }
  const icon = document.getElementById('rejectSpecID');
  const infoSpecDiv = document.getElementById('infoSpecDiv');


});

/// Table row add 
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('addRowForm');
  const addItemButton = document.getElementById('addItemOffer');
  const closeAddOfferIcon = document.getElementById('closeAddOffer');
  const commentModal = new bootstrap.Modal(document.getElementById('commentModal'));
  const modalCommentText = document.getElementById('modalCommentText');



  const statusSelect = document.getElementById('status');
  const rejectReasonWrapper = document.getElementById('rejectReasonWrapper');
  const rejectReasonSelect = document.getElementById('rejectReason');
  const otherRejectReasonWrapper = document.getElementById('otherRejectReasonWrapper');
  const otherRejectReasonInput = document.getElementById('otherRejectReason');
  const rejectCommentWrapper = document.getElementById('rejectCommentWrapper');
  const rejectCommentInput = document.getElementById('rejectComment');

  statusSelect.addEventListener('change', function() {
    if (statusSelect.value === 'Rejected') {
      rejectReasonWrapper.style.display = 'block';
      rejectCommentWrapper.style.display = 'block';
    } else {
      rejectReasonWrapper.style.display = 'none';
      otherRejectReasonWrapper.style.display = 'none';
      rejectCommentWrapper.style.display = 'none';
    }
  });

  rejectReasonSelect.addEventListener('change', function() {
    if (rejectReasonSelect.value === 'Others') {
      otherRejectReasonWrapper.style.display = 'block';
    } else {
      otherRejectReasonWrapper.style.display = 'none';
    }
  });

  const limitInput = document.getElementById('limitInput');
  limitInput.addEventListener('input', function() {
    let value = limitInput.value;

    // Remove non-digit characters except $
    value = value.replace(/[^\d]/g, '');

    // Format number with commas every 3 digits
    value = parseFloat(value).toLocaleString('en-US');

    // Update input field with formatted value
    limitInput.value = value;
  });

  const premiumInput = document.getElementById('premiumInput');
  premiumInput.addEventListener('input', function() {
    let value = premiumInput.value;

    // Remove non-digit characters except $
    value = value.replace(/[^\d]/g, '');

    // Format number with commas every 3 digits
    value = parseFloat(value).toLocaleString('en-US');

    // Update input field with formatted value
    premiumInput.value = value;
  });

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const company = document.getElementById('company').value.trim();
    const offerID = document.getElementById('offerID').value.trim();
    const policyType = document.getElementById('policyType').value.trim();
    const quoteDate = document.getElementById('quoteDate').value.trim();
    const quoteValidUntil = document.getElementById('quoteValidUntil').value.trim();
    const reinsurers = document.getElementById('reinsurers').value.trim();
    const shortAddress = document.getElementById('shortAddress').value.trim();
    const limit = document.getElementById('limitInput').value.trim();
    const premium = document.getElementById('premiumInput').value.trim();
    const status = statusSelect.value;
    let rejectReason = '-';
    let otherRejectReason = '';
    let rejectComment = '';

    if (status === 'Rejected') {
      rejectReason = rejectReasonSelect.value;
      if (rejectReason === 'Others') {
        otherRejectReason = otherRejectReasonInput.value.trim();
        rejectReason = otherRejectReason;
      }
      rejectComment = rejectCommentInput.value.trim();
    }

    // Add icon to reject reason if rejected
    let rejectReasonContent = rejectReason;
    if (status === 'Rejected') {
      rejectReasonContent = `${rejectReason} <i class="bi bi-info-square-fill rejectIcon" data-comment="${rejectComment}"></i>`;
    }

    // Create new table row
    const table = document.querySelector('#example2 tbody');
    const newRow = table.insertRow();

    newRow.innerHTML = `
      <td><div class="checkbox-wrapper-13"><input type="checkbox" id="c1-13" disabled></div></td>
      <td>${company}</td>
      <td>${offerID}</td>
      <td>${policyType}</td>
      <td class="text-center">${quoteDate}</td>
      <td class="text-center">${quoteValidUntil}</td>
      <td>${reinsurers}</td>
      <td>${shortAddress}</td>
      <td class="text-center">${limit}$</td>
      <td>${premium}$</td>
      <td>${status}</td>
      <td class="text-center">${rejectReasonContent}</td>
      <td style="display:none;" id="rejectCommentData">${rejectComment}</td>
    `;

    // Save to local storage
    const tableData = JSON.parse(localStorage.getItem('tableData')) || [];
    tableData.push({
      company,
      offerID,
      policyType,
      quoteDate,
      quoteValidUntil,
      reinsurers,
      shortAddress,
      limit,
      premium,
      status,
      rejectReason,
      rejectComment
    });
    localStorage.setItem('tableData', JSON.stringify(tableData));

    // Reset form
    form.reset();
    rejectReasonWrapper.style.display = 'none';
    otherRejectReasonWrapper.style.display = 'none';
    rejectCommentWrapper.style.display = 'none';
    form.style.display = 'none';
    addItemButton.style.display = 'block';

    // Add event listener to new icon
    const newIcon = newRow.querySelector('.rejectIcon');
    if (newIcon) {
      newIcon.addEventListener('click', function() {
        const comment = this.getAttribute('data-comment');
        modalCommentText.textContent = comment;
        commentModal.show();
      });
    }
  });

  // Load from local storage
  const savedData = JSON.parse(localStorage.getItem('tableData')) || [];
  const table = document.querySelector('#example2 tbody');
  savedData.forEach(data => {
    let rejectReasonContent = data.rejectReason;
    if (data.status === 'Rejected') {
      rejectReasonContent = `${data.rejectReason} <i class="bi bi-info-square-fill rejectIcon" data-comment="${data.rejectComment}"></i>`;
    }
    const newRow = table.insertRow();
    newRow.innerHTML = `
      <td><div class="checkbox-wrapper-13"><input type="checkbox" id="c1-13" disabled></div></td>
      <td>${data.company}</td>
      <td>${data.offerID}</td>
      <td>${data.policyType}</td>
      <td class="text-center">${data.quoteDate}</td>
      <td class="text-center">${data.quoteValidUntil}</td>
      <td>${data.reinsurers}</td>
      <td>${data.shortAddress}</td>
      <td class="text-center">${data.limit}</td>
      <td>${data.premium}</td>
      <td>${data.status}</td>
      <td class="text-center">${rejectReasonContent}</td>
      <td style="display:none;" id="rejectCommentData">${data.rejectComment}</td>
    `;

    // Add event listener to icon
    const icon = newRow.querySelector('.rejectIcon');
    if (icon) {
      icon.addEventListener('click', function() {
        const comment = this.getAttribute('data-comment');
        modalCommentText.textContent = comment;
        commentModal.show();
      });
    }
  });

  // Add event listener to the static icon
  const staticIcon = document.querySelector('#rejectSpecID2');
  if (staticIcon) {
    staticIcon.addEventListener('click', function() {
      const comment = this.getAttribute('data-comment');
      modalCommentText.textContent = comment;
      commentModal.show();
    });
  }
});

$( document ).ready(function() {
  // Grid or list selection
  $('#btn-list').on('click', function() {
    $('#main-folders').addClass('flex-column');
    $('#btn-grid').removeClass('active')
    $(this).addClass('active')
  });
  $('#btn-grid').on('click', function() {
    $('#main-folders').removeClass('flex-column');
    $('#btn-list').removeClass('active')
    $(this).addClass('active')
  });
  $('#btn-list').on('click', function() {
    $('#main-files').addClass('flex-column');
    $('#btn-grid').removeClass('active')
    $(this).addClass('active')
  });
  $('#btn-grid').on('click', function() {
    $('#main-files').removeClass('flex-column');
    $('#btn-list').removeClass('active')
    $(this).addClass('active')
  });
  
  // Open folder and see files
  $('button.folder-container').on('click', function() {
    $('#filesGroup').removeClass('d-none');
    $('#foldersGroup').addClass('d-none')
  });
  $('a#backToFolders').on('click', function() {
    event.preventDefault();
    $('#foldersGroup').removeClass('d-none');
    $('#filesGroup').addClass('d-none')
  });
});
document.getElementById('addItemOffer').addEventListener('click', function() {
  var modal = new bootstrap.Modal(document.getElementById('modal2'), {
    keyboard: false
  });
  modal.show();
});