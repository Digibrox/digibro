document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const todoRows = document.querySelectorAll('tr[data-todo-search]');

    // Search inputuna her yazıldığında çalışacak fonksiyon
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase(); // Arama terimini küçük harfe çevir

        todoRows.forEach(row => {
            const todoText = row.getAttribute('data-todo-search').toLowerCase(); // data-todo-search attribute'undaki değeri al
            if (todoText.includes(searchTerm)) {
                row.style.display = ''; // Eşleşiyorsa satırı göster
            } else {
                row.style.display = 'none'; // Eşleşmiyorsa satırı gizle
            }
        });
    });
});



  document.addEventListener('DOMContentLoaded', () => {
    const oppoIndustryFilter = document.getElementById('oppoIndustryFilter');
    const oppoRegionFilter = document.getElementById('oppoRegionFilter');
    const oppoStatusFilter = document.getElementById('oppoStatusFilter');
    const oppoCards = document.querySelectorAll('.rowPaddOppoTd'); // Tüm kartlar
    const opportunitiesEditTr = document.getElementById('OpportunitiesEditTr'); // OpportunitiesEditTr elementi
const opportunitiesEditName = document.getElementById('OpportunitiesEditName'); // OpportunitiesEditName elementi


    // Filtreleme işlemini yapan fonksiyon
    function filterOppoCards() {
        const selectedIndustry = oppoIndustryFilter.value;
        const selectedRegion = oppoRegionFilter.value;
        const selectedStatus = oppoStatusFilter.value;

        oppoCards.forEach(card => {
            const cardIndustry = card.getAttribute('data-oppo-industry');
            const cardRegion = card.getAttribute('data-oppo-region');
            const cardStatus = card.getAttribute('data-oppo-status');

            // Filtre eşleşme kontrolleri
            const industryMatch = (selectedIndustry === 'all' || cardIndustry === selectedIndustry);
            const regionMatch = (selectedRegion === 'all' || cardRegion === selectedRegion);
            const statusMatch = (selectedStatus === 'all' || cardStatus === selectedStatus);

            // Eğer tüm filtreler eşleşiyorsa kartı göster, değilse gizle
            if (industryMatch && regionMatch && statusMatch) {
                card.style.display = 'table-row';
            } else {
                card.style.display = 'none';
            }
            if (opportunitiesEditName && opportunitiesEditName.textContent.trim() === 'Default') {
              opportunitiesEditTr.style.display = 'none'; // OpportunitiesEditTr gizleniyor
          } else {
              opportunitiesEditTr.style.display = 'table-row'; // Eğer "Default" değilse OpportunitiesEditTr görünür
          }
        });
    }

    // Filtrelerdeki her bir değişiklik için filtreleme fonksiyonunu çalıştır
    oppoIndustryFilter.addEventListener('change', filterOppoCards);
    oppoRegionFilter.addEventListener('change', filterOppoCards);
    oppoStatusFilter.addEventListener('change', filterOppoCards);
});

  ///////////////////////////////////////////////////////////
  document.addEventListener('DOMContentLoaded', () => {
    const industryFilter = document.getElementById('accountFilterIndustry');
    const policyFilter = document.getElementById('accountFilterPolicyType');
    const regionFilter = document.getElementById('accountFilterRegion'); // Burada policyFilter yerine regionFilter tanımladık
    const accountCards = document.querySelectorAll('.rowPadd');
   

    // Filtreleme işlemini yapan fonksiyon
    function filterCards() {
        const selectedIndustry = industryFilter.value;
        const selectedPolicy = policyFilter.value;
        const selectedRegion = regionFilter.value; // Region için yeni bir değişken ekledik

        accountCards.forEach(card => {
            const cardIndustry = card.getAttribute('data-industry');
            const cardPolicy = card.getAttribute('data-policy');
            const cardRegion = card.getAttribute('data-region'); // Region için yeni bir değişken tanımladık

            // Hem industry, hem policy, hem de region kontrolü yapıyoruz
            const industryMatch = (selectedIndustry === 'all' || cardIndustry === selectedIndustry);
            const policyMatch = (selectedPolicy === 'all' || cardPolicy === selectedPolicy);
            const regionMatch = (selectedRegion === 'all' || cardRegion === selectedRegion); // Region eşleşme kontrolü

            // Üç filtre de eşleşiyorsa kartı göster, değilse gizle
            if (industryMatch && policyMatch && regionMatch) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Dropdown değiştiğinde filtreleme işlemi
    industryFilter.addEventListener('change', filterCards);
    policyFilter.addEventListener('change', filterCards);
    regionFilter.addEventListener('change', filterCards);

    // accountListSearch butonuna tıklandığında filtreleme işlemi
  
});

  ///////////////////////////////////////////////////
  document.addEventListener('DOMContentLoaded', () => {
    const accountAddingModalSaveButton = document.getElementById('accountAddingModalSaveButton');
    const accoundAddingModalClient = document.getElementById('accoundAddingModalClient');
    const accountCardSpanClient = document.getElementById('accountCardSpanClient');
    const accoundAddingModalImg = document.getElementById('accoundAddingModalImg'); // File input
    const accountCardSpanImg = document.getElementById('accountCardSpanImg'); // Image tag
    const closeModalButtonAccount = document.getElementById('closeModalButtonAccount'); // Image tag

    
    accountAddingModalSaveButton.addEventListener('click', () => {
      document.getElementById('accountCardSpanDiv').style.display = "block";
        // Resim dosyasını yükleme işlemi
        const file = accoundAddingModalImg.files[0]; // File input'tan seçilen ilk dosya
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                accountCardSpanImg.src = e.target.result; // Resmi img etiketine yaz
            };
            reader.readAsDataURL(file); // Resmi base64 formatında oku
        }

        // Diğer inputlardan gelen verileri yazdır
        accountCardSpanClient.textContent = accoundAddingModalClient.value;
        
        document.getElementById("accountCardSpanIndustry").textContent = document.getElementById("accoundAddingModalIndustry").value;
        document.getElementById("accountCardSpanScope").textContent = document.getElementById("accoundAddingModalScope").value;
        document.getElementById("accountCardSpanPolicies").textContent = document.getElementById("accoundAddingModalPolicy").value;
        document.getElementById("accountCardSpanHealth").textContent = document.getElementById("accoundAddingModalQuote").value;
        closeModalButtonAccount.click();
    });
});


  /////////////////////////////////////////////////////////////////////////////
  document.addEventListener('DOMContentLoaded', () => {
    const opportunitiesDetailSaveButton = document.getElementById('opportunitiesDetailSaveButton');
    const oppDetailDisplayTr = document.getElementById('oppDetailDisplayTr');
    const opportunitiesDetailDeleteButton = document.getElementById('opportunitiesDetailDeleteButton');
    const closeModalButtonOpp2 = document.getElementById('closeModalButtonOpp2');
    const opportunitiesDetailModalClient = document.getElementById('opportunitiesDetailModalClient');
    const oppDetailTdClient = document.getElementById('oppDetailTdClient');
    const opportunitiesDetailModalPolicy = document.getElementById('opportunitiesDetailModalPolicy');
    const oppDetailTdPolicyType = document.getElementById('oppDetailTdPolicyType');
    const opportunitiesDetailModalTurnover = document.getElementById('opportunitiesDetailModalTurnover');
    const oppDetailTdTurnover = document.getElementById('oppDetailTdTurnover');
    const opportunitiesDetailModalWebsite = document.getElementById('opportunitiesDetailModalWebsite');
    const oppDetailTdWebsite = document.getElementById('oppDetailTdWebsite');
    const opportunitiesDetailModalStatus = document.getElementById('opportunitiesDetailModalStatus');
    const oppDetailTdStatus = document.getElementById('oppDetailTdStatus');
    
    
    opportunitiesDetailDeleteButton.addEventListener('click', () => {
      oppDetailDisplayTr.style.display = 'none';
      closeModalButtonOpp2.click();
    });
    
    // saveToDoListButton'a tıklanıldığında
    opportunitiesDetailSaveButton.addEventListener('click', () => {
      

      const opportunitiesDetailModalClient2 = opportunitiesDetailModalClient.value;
      
      const opportunitiesDetailModalPolicy2 = opportunitiesDetailModalPolicy.value;
      const opportunitiesDetailModalTurnover2 = opportunitiesDetailModalTurnover.value;
      const opportunitiesDetailModalWebsite2 = opportunitiesDetailModalWebsite.value;
      const opportunitiesDetailModalStatus2 = opportunitiesDetailModalStatus.value;
      console.log(opportunitiesDetailModalClient2)
      console.log(opportunitiesDetailModalPolicy2)
      console.log(opportunitiesDetailModalTurnover2)
      oppDetailTdClient.textContent = opportunitiesDetailModalClient2;
      oppDetailTdPolicyType.textContent = opportunitiesDetailModalPolicy2;
      oppDetailTdTurnover.textContent = opportunitiesDetailModalTurnover2;
      oppDetailTdWebsite.textContent = opportunitiesDetailModalWebsite2;
      oppDetailTdStatus.textContent = opportunitiesDetailModalStatus2;
      if (opportunitiesDetailModalStatus2 === 'Questionnaire') {
        oppDetailTdStatus.style.borderBottom = '2px solid #6a78f4'; // Mavi renk
      } else if (opportunitiesDetailModalStatus2 === 'Client') {
        oppDetailTdStatus.style.borderBottom = '2px solid #34c38f'; // Yeşil renk
      } else if (opportunitiesDetailModalStatus2 === 'Quotations') {
        oppDetailTdStatus.style.borderBottom = '2px solid #f4946a'; // Turuncu renk
      }
      


      closeModalButtonOpp2.click();
    });
   
  });
  /////////////////////////////////////////////////////////////////////////////
  document.addEventListener('DOMContentLoaded', () => {
    const OpportunitiesEditTr = document.getElementById('OpportunitiesEditTr');
    const OpportunitiessaveButton = document.getElementById('saveModalButtonOpp');
    const closeModalButtonOpp = document.getElementById('closeModalButtonOpp');
    const selectElementOppClient = document.getElementById('opportunitiesEditModalClientName');
    const outputDiv = document.getElementById('OpportunitiesEditName');
    const opportunitiesEditModalPolicyType = document.getElementById('opportunitiesEditModalPolicyType');
    const OpportunitiesEditPolicyType = document.getElementById('OpportunitiesEditPolicyType');
    const opportunitiesEditModalTurnover = document.getElementById('opportunitiesEditModalTurnover');
    const OpportunitiesEditTurnover = document.getElementById('OpportunitiesEditTurnover');
    const opportunitiesEditModalWebsite = document.getElementById('opportunitiesEditModalWebsite');
    const OpportunitiesEditWebsite = document.getElementById('OpportunitiesEditWebsite');
    const opportunitiesEditModalStatus = document.getElementById('opportunitiesEditModalStatus');
    const OpportunitiesEditStatus = document.getElementById('OpportunitiesEditStatus');
    
    OpportunitiessaveButton.addEventListener('click', () => {
      OpportunitiesEditTr.style.display = 'table-row'; 

      
      const selectElementOppClientValue = selectElementOppClient.value;
      const opportunitiesEditModalPolicyType2 = opportunitiesEditModalPolicyType.value;
      const opportunitiesEditModalTurnover2 = opportunitiesEditModalTurnover.value;
      const opportunitiesEditModalWebsite2 = opportunitiesEditModalWebsite.value;
      const OpportunitiesEditStatus2  = opportunitiesEditModalStatus.value;

      outputDiv.textContent = selectElementOppClientValue;
      OpportunitiesEditPolicyType.textContent = opportunitiesEditModalPolicyType2;
      OpportunitiesEditTurnover.textContent = opportunitiesEditModalTurnover2;
      OpportunitiesEditWebsite.textContent = opportunitiesEditModalWebsite2;
      OpportunitiesEditWebsite.href = opportunitiesEditModalWebsite2;
      OpportunitiesEditStatus.textContent = OpportunitiesEditStatus2;
      if (OpportunitiesEditStatus2 === 'Questionnaire') {
        OpportunitiesEditStatus.style.borderBottom = '2px solid #6a78f4'; // Mavi renk
      } else if (OpportunitiesEditStatus2 === 'Client') {
        OpportunitiesEditStatus.style.borderBottom = '2px solid #34c38f'; // Yeşil renk
      } else if (OpportunitiesEditStatus2 === 'Quotations') {
        OpportunitiesEditStatus.style.borderBottom = '2px solid #f4946a'; // Turuncu renk
      }
      closeModalButtonOpp.click();
    });
  });
  ////////////////////////////////////////////////////
  document.addEventListener('DOMContentLoaded', () => {
    const editButtonToDo = document.getElementById('saveToDoListButtonTd1');
    const deleteButtonToDo = document.getElementById('editTodoDeleteButton');
    const editTdToDoList = document.getElementById('editToDoTdDisplay');
    const todolistEditTitle = document.getElementById('todolistEditTitle');
    const todolistEditTd1 = document.getElementById('todolistEditTd1');
    const todolistStatusToDo = document.getElementById('todolistStatusToDo');
    const todolistEditTd3 = document.getElementById('todolistEditTd3');
    const todolistEditTd2 = document.getElementById('todolistEditTd2');
    const closeModalButtonToDo1 = document.getElementById('closeModalButtonToDo1');
    
    deleteButtonToDo.addEventListener('click', () => {
      editTdToDoList.style.display = 'none';
      closeModalButtonToDo1.click();
    });
    
    // saveToDoListButton'a tıklanıldığında
    editButtonToDo.addEventListener('click', () => {
      
      todolistEditTd1.textContent = todolistEditTitle.value;
      const selectedStatus = todolistStatusToDo.value; // Seçili durumu al
      console.log(selectedStatus);
      // Seçili duruma göre displayNoneToDoTd2'nin içeriğini güncelle
      if (selectedStatus === 'Active') {
        todolistEditTd2.textContent = 'Active';
        todolistEditTd3.style.backgroundColor = '#13ac00'; // Active için yeşil
      } else if (selectedStatus === 'Close') {
        todolistEditTd2.textContent = 'Close';
        todolistEditTd3.style.backgroundColor = '#ac0000'; // Close için kırmızı
      }
      closeModalButtonToDo1.click();
    });
   
  });
//////////////////////////////////////////////////////////////    
document.addEventListener('DOMContentLoaded', () => {
const saveButton = document.getElementById('saveToDoListButton');
const toDoElement = document.getElementById('displayNoneToDoTd');
const toDoTitleInput = document.getElementById('toDoListTitle');
const toDoTitleDisplay = document.getElementById('displayNoneToDoTd1');
const statusSelect = document.getElementById('toDoListStatusSelect');
const statusDisplay = document.getElementById('displayNoneToDoTd2');
const statusBackground = document.getElementById('displayNoneToDoTd3');
const closeModalButtonToDo = document.getElementById('closeModalButtonToDo');

// saveToDoListButton'a tıklanıldığında
saveButton.addEventListener('click', () => {
toDoElement.style.display = 'table-row'; // display: block yap
toDoTitleDisplay.textContent = toDoTitleInput.value;
const selectedStatus = statusSelect.value; // Seçili durumu al
console.log(selectedStatus);
// Seçili duruma göre displayNoneToDoTd2'nin içeriğini güncelle
if (selectedStatus === 'Active') {
    statusDisplay.textContent = 'Active';
    statusBackground.style.backgroundColor = '#13ac00'; // Active için yeşil
} else if (selectedStatus === 'Close') {
    statusDisplay.textContent = 'Close';
    statusBackground.style.backgroundColor = '#ac0000'; // Close için kırmızı
}
closeModalButtonToDo.click();
});

});

  // DOM yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
const addNewClientOpporButton = document.getElementById('addNewClientOppor');
const closeModalButtonOpp = document.getElementById('closeModalButtonOpp');
const addAccountButton = document.getElementById('addAccountButton');

// addNewClientOppor butonuna tıklanınca
addNewClientOpporButton.addEventListener('click', () => {
  // Önce closeModalButtonOpp butonuna tıklama işlemi simüle edilir
  closeModalButtonOpp.click();
  
  // Ardından addAccountButton butonuna tıklama işlemi simüle edilir
  addAccountButton.click();
});
});

  document.addEventListener('DOMContentLoaded', () => {
    const regionTypeSelect = document.getElementById('regionType');
    const showValueButton = document.getElementById('calculateDivButton');
    const imgElement = document.getElementById('calculateDynamicImg');
   // ID'leri seçiyoruz
     // ID'leri seçiyoruz (select elementleri)
     const calculatorPolicyTypeSelect = document.getElementById('calculatorPolicyTypeSelect');
     const regionType = document.getElementById('regionType');
     const calculatorIndustrySelect = document.getElementById('calculatorIndustrySelect');
     const calculatorInstallmentSelect = document.getElementById('calculatorInstallmentSelect');

     // Sonuçların yazılacağı elementler
     const calculateResultPolicy = document.getElementById('calculateResultPolicy');
     const calculateResultRegion = document.getElementById('calculateResultRegion');
     const calculateResultIndustry = document.getElementById('calculateResultIndustry');
     const calculateResultInstallment = document.getElementById('calculateResultInstallment');
   
     // Seçili olan option'ların text değerlerini alıyoruz
  

    showValueButton.addEventListener('click', () => {
        const selectedValue = regionTypeSelect.value;

        // Eğer seçilen değer Marmara ise img src'sini güncelle
        if (selectedValue === 'Marmara Region') {
            imgElement.src = "https://www.konusarakogren.com/blog/wp-content/uploads/2019/06/marmara.jpg";
        }
        else if (selectedValue === 'all') {
            imgElement.src = " https://cdn.pixabay.com/photo/2013/07/13/10/34/turkey-157515_1280.png";
         
        }
        else if (selectedValue === 'Central Anatolia Region') {
        imgElement.src = "https://megaanadolu.com.tr/wp-content/uploads/2023/04/ambar-tasima-diyarbakir-mardin-konya-ankara-1024x484.jpg";
        }  
        else if (selectedValue === 'Aegean Region') {
        imgElement.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX_hTRIbQbGaNNm7_bzWKWDwkoCyquYCuQyw&s";
        }
        else if (selectedValue === 'Mediterranean Region') {
          imgElement.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ycj-2nTL63s7oddhbsOLY75KkIkyCVkzaw&s";
        }  
        else if (selectedValue === 'Black Sea Region') {
          imgElement.src = "https://kozanbilgi.net/wp-content/uploads/2024/07/Karadeniz-Bolgesi.jpg";
        }   
        else if (selectedValue === 'Eastern Anatolia Region') {
          imgElement.src = "https://www.konusarakogren.com/blog/wp-content/uploads/2019/06/dogu-anadolu-1.jpg";
        }   
        else if (selectedValue === 'Southeastern Anatolia Region') {
          imgElement.src = "https://www.konusarakogren.com/blog/wp-content/uploads/2019/06/dogu-anadolu-1.jpg";
        }   
        
        else {
            // Eğer başka bir şey seçilirse img boş olabilir veya başka bir link olabilir
            imgElement.src = '';
        }
        const calculatorPolicyTypeSelectvalue = calculatorPolicyTypeSelect.value;
        const calculatorRegionSelectvalue = regionType.value;
        const calculateResultIndustryvalue = calculatorIndustrySelect.value;
        const calculateResultInstallmentvalue = calculatorInstallmentSelect.value;
        
        calculateResultPolicy.textContent = "- " + calculatorPolicyTypeSelectvalue;
        calculateResultRegion.textContent = "- " + calculatorRegionSelectvalue;
        calculateResultIndustry.textContent = "- " + calculateResultIndustryvalue;
        calculateResultInstallment.textContent = "- " + calculateResultInstallmentvalue;

        const fromSliderTooltip = document.getElementById("fromSliderTooltip").textContent; 
        const calculateminCount = document.getElementById("calculateminCount");
        const toSliderTooltip = document.getElementById("toSliderTooltip").textContent; 
        const calculatemaxCount = document.getElementById("calculatemaxCount");
        
        // 'fromSliderTooltip' içeriğine " - " ekleniyor
        calculateminCount.textContent = fromSliderTooltip + " - "; 
        calculatemaxCount.textContent = toSliderTooltip; 
        
        
        console.log(fromSliderTooltip);
        console.log(calculatorPolicyTypeSelectvalue);
        console.log(calculatorRegionSelectvalue);
        
    });
   
});
  
  document.addEventListener('DOMContentLoaded', () => {

    const modal = document.getElementById('opporActionButtonModal');
    const closeBtn = document.querySelector('.closeOppor');
  

    const buttons = document.querySelectorAll('.opporActionButton');
  
    // Butonlara tıklanıldığında modalı açacak fonksiyon
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            modal.style.display = 'block'; // Modalı görünür yap
        });
    });
  
    // Modalı kapatmak için çarpı butonuna tıklanıldığında
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none'; // Modalı gizle
    });
  
    // Modalın dışına tıklanıldığında kapat
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none'; // Modalı gizle
        }
    });
  });
document.addEventListener('DOMContentLoaded', () => {

const modal = document.getElementById('toDoListActionButtonModal');
const closeBtn = document.querySelector('.close');

const buttons = document.querySelectorAll('.toDoListActionButton');

// Butonlara tıklanıldığında modalı açacak fonksiyon
buttons.forEach(button => {
  button.addEventListener('click', () => {
      modal.style.display = 'block'; // Modalı görünür yap
  });
});

// Modalı kapatmak için çarpı butonuna tıklanıldığında
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none'; // Modalı gizle
});

// Modalın dışına tıklanıldığında kapat
window.addEventListener('click', (event) => {
  if (event.target === modal) {
      modal.style.display = 'none'; // Modalı gizle
  }
});
});
            // Modal ve butonlar için gerekli değişkenler
const addToDoButton = document.getElementById('addToDoButton');
const modalToDo = document.getElementById('addToDoModal');
const closeModalButtonToDo = document.getElementById('closeModalButtonToDo');

// "Add Account" butonuna tıklandığında modal açılır
addToDoButton.addEventListener('click', () => {
modalToDo.style.display = 'block'; // Modal görünür hale getir
});

// Kapatma (X) butonuna tıklandığında modal kapanır
closeModalButtonToDo.addEventListener('click', () => {
modalToDo.style.display = 'none'; // Modal gizlenir
});

// Kullanıcı modal dışında bir yere tıkladığında modal kapanır
window.addEventListener('click', (event) => {
if (event.target === modal) {
    modalToDo.style.display = 'none'; // Modal gizlenir
}
});
    // Modal ve butonlar için gerekli değişkenler
const addAccountButton = document.getElementById('addAccountButton');
const modal = document.getElementById('addAccountModal');
const closeModalButton = document.getElementById('closeModalButtonAccount');

// "Add Account" butonuna tıklandığında modal açılır
addAccountButton.addEventListener('click', () => {
modal.style.display = 'block'; // Modal görünür hale getir
});

// Kapatma (X) butonuna tıklandığında modal kapanır
closeModalButton.addEventListener('click', () => {
modal.style.display = 'none'; // Modal gizlenir
});

// Kullanıcı modal dışında bir yere tıkladığında modal kapanır
window.addEventListener('click', (event) => {
if (event.target === modal) {
    modal.style.display = 'none'; // Modal gizlenir
}
});
    // Modal ve butonlar için gerekli değişkenler
    const addOppButton = document.getElementById('addOppButton');
    const modalOpp = document.getElementById('addOppModal');
    const closeModalButtonOpp = document.getElementById('closeModalButtonOpp');
    
    // "Add Account" butonuna tıklandığında modal açılır
    addOppButton.addEventListener('click', () => {
        modalOpp.style.display = 'block'; // Modal görünür hale getir
    });
    
    // Kapatma (X) butonuna tıklandığında modal kapanır
    closeModalButtonOpp.addEventListener('click', () => {
        modalOpp.style.display = 'none'; // Modal gizlenir
    });
    
    // Kullanıcı modal dışında bir yere tıkladığında modal kapanır
    window.addEventListener('click', (event) => {
        if (event.target === modalOpp) {
            modalOpp.style.display = 'none'; // Modal gizlenir
        }
    });
  window.onload = function() {
    window.scrollTo(0, 0); // Sayfanın en üst kısmında kalmasını sağlar
 
};

document.addEventListener('DOMContentLoaded', () => {
  const calculateDiv = document.getElementById('calculateDiv');
  const calculateDivButton = document.getElementById('calculateDivButton');

  // Olay dinleyici ekliyoruz
  calculateDivButton.addEventListener('click', () => {
    calculateDiv.style.display = 'flex';
  });
});

document.getElementById('mutluAkuProfile').addEventListener('click', function() {
    window.location.href = 'http://185.87.252.236:5555/clients/client_info/mutlu_ak%C3%BC/';
});
document.getElementById('beraProfile').addEventListener('click', function() {
    window.location.href = 'http://185.87.252.236:5555/clients/client_info/bera_holding/';
});
document.getElementById('digibroxProfile').addEventListener('click', function() {
    window.location.href = 'http://185.87.252.236:5555/clients/client_info/digibrox/';
});
document.getElementById('cosmosProfile').addEventListener('click', function() {
    window.location.href = 'http://185.87.252.236:5555/clients/client_info/cosmos_yat%C4%B1r%C4%B1m_holding/';
});
document.getElementById('enerjisaProfile').addEventListener('click', function() {
    window.location.href = 'http://185.87.252.236:5555/clients/client_info/cosmos_yat%C4%B1r%C4%B1m_holding/';
});
document.getElementById('izProfile').addEventListener('click', function() {
    window.location.href = 'http://185.87.252.236:5555/clients/client_info/iz_yat%C4%B1r%C4%B1m_holding/';
});
document.getElementById('mazharProfile').addEventListener('click', function() {
    window.location.href = 'http://185.87.252.236:5555/clients/client_info/mazhar_zorlu_holding/';
});
document.getElementById('coligoProfile').addEventListener('click', function() {
    window.location.href = 'http://185.87.252.236:5555/clients/client_info/coligo/';
});

document.getElementById('coligo2Profile').addEventListener('click', function() {
    window.location.href = 'http://185.87.252.236:5555/clients/client_info/coligo/';
});
