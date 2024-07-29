document.addEventListener('DOMContentLoaded', function() {
  const folderNameActive = document.getElementById('folderNameActive');
  const folderName5Elements = document.querySelectorAll('.folder-name5'); // .folder-name5 öğelerinin tümünü seç

  // Tüm folder-name5 öğelerinin textContent'ini değiştiren fonksiyon
  function updateFolderName5(text) {
    folderNameActive.textContent = text;
    folderName5Elements.forEach(function(element) {
      element.textContent = text;
    });
  }

  document.getElementById('questionnaireDivFlex').addEventListener('click', function() {
    updateFolderName5('Questionnaire');
  });

  document.getElementById('tecnicalInfoDivFlex').addEventListener('click', function() {
    updateFolderName5('Technical Info');
  });

  document.getElementById('conversationDivFlex').addEventListener('click', function() {
    updateFolderName5('Conversation');
  });

  document.getElementById('quotationsDivFlex').addEventListener('click', function() {
    updateFolderName5('Quotations');
  });

  document.getElementById('othersDivFlex').addEventListener('click', function() {
    updateFolderName5('Others');
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const addItemFolderButton = document.getElementById('addItemFolder');
  const folderModal = new bootstrap.Modal(document.getElementById('folderModal'));

  addItemFolderButton.addEventListener('click', function() {
    folderModal.show();
  });
});
$(document).ready(function() {
  $('#previewPdfButton, #previewPdfButton2').click(function() {
      $('#pdfPreviewModal').modal('show'); // Modalı açma işlemi
  });
});


function updateFolderName(value) {
  const folderNameDiv = document.getElementById('folder-nameAdd');
  if (value.trim() !== '') {
    folderNameDiv.textContent = value;
  } else {
    folderNameDiv.textContent = 'Folder Name';
  }
} document.addEventListener('DOMContentLoaded', function() {
  const folderOptionAddInput = document.getElementById('folderOptionAdd');
  const saveOptionButton = document.getElementById('saveOptionButton');

  saveOptionButton.addEventListener('click', function() {
    const newOptionText = folderOptionAddInput.value.trim();
    if (newOptionText !== '') {
      const selects = document.querySelectorAll('.folderOptionsClass select');
      selects.forEach(select => {
        // Önce mevcut tüm optionları temizle
        select.innerHTML = '';
        
        // Yeni option ekle
        const newOption = document.createElement('option');
        newOption.value = newOptionText;
        newOption.textContent = newOptionText;
        select.appendChild(newOption);
        
        // Varsayılan "Select Item" seçeneğini tekrar ekle
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = 'Select Item';
        select.appendChild(defaultOption);
      });
      folderOptionAddInput.value = ''; // Input alanını temizle
    }
  });
});

