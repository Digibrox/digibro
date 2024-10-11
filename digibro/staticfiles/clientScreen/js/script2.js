function controlCheckBoxAndInputs(element) {
    // En yakın üst öğeyi bul
    var a = element.closest('.questionInputDiv.mainQuestionDiv');
    if (!a) return; // Eğer bulunamazsa işleme devam etme
  
    // `checkBoxRightDiv` öğelerini bul
    var checkBoxRightDiv = a.querySelector('.checkBoxRightDiv');
    if (!checkBoxRightDiv) return; // Eğer bulunamazsa işleme devam etme
  
    // `checkbox` ve `text` türündeki giriş elemanlarını bul
    const checkboxesAndInputs = a.querySelectorAll('input[type="checkbox"], input[type="text"]');
  
    var checkboxValue = 0;
    var inputValue = 0;
  
    // Giriş elemanlarını kontrol et
    checkboxesAndInputs.forEach(item => {
      var attr = item.getAttribute("attr");
      if (attr !== "broker-select" && attr !== "client-select" && attr !== "spec") {
        if (item.type === 'checkbox' && item.checked) {
          checkboxValue += 1;
        } else if (item.type === 'text' && item.value.trim() !== '') {
          inputValue += 1;
        }
      }
    });
  
    // `checkBoxRightDiv` içindeki `client-select-box` sınıfına sahip `input`'u işaretle veya işareti kaldır
    var clientSelectBox = checkBoxRightDiv.querySelector('input.client-select-box');
    if (clientSelectBox) {
      clientSelectBox.checked = (checkboxValue > 0 || inputValue > 0);
    }
  }
  

$(".custom-button").click(function() {
    // Butona tıklandığında yapılacak işlemler burada gerçekleştirilir

    // Hangi ürüne tıklandığını bulmak için data-index özelliğini kullanın
    var index = $(this).data("index");
    var clickedProduct = data[index];

    // Örnek olarak, tıklanan ürünün bilgilerini konsola yazdırabiliriz
    console.log("Clicked product:", clickedProduct);

    // containerFilter'ın display özelliğini "none" olarak ayarlayın
    $("#containerFilter").css("display", "none");

    // results class'ının display özelliğini "block" olarak ayarlayın
    $(".results").css("display", "block");
});
// backForms butonunun tıklama olayını yakalayın
$("#backForms").click(function() {
    // containerFilter'ın display özelliğini "block" olarak ayarlayın
    $("#containerFilter").css("display", "flex");

    // results class'ının display özelliğini "none" olarak ayarlayın
    $(".results").css("display", "none");
});

document.addEventListener('DOMContentLoaded', function() {
  var idList = ["informationAccordion2", "yanginAccordion","ECAccordion", "MKAccordion", "IMMAccordion", "TPLAccordion"]

  for(var e of idList){
    var elem = document.getElementById(e)
   
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

// Filter function to apply filters based on user input
function filter() {
  let searchInput = document.getElementById('searchCompany').value.toLowerCase();
  let companyCards = document.querySelectorAll('.company-card');
  
  let companyFilter = document.querySelector('.filter-company').value;
  let industryFilter = document.querySelector('.filter-industry').value;
  let scopeFilter = document.querySelector('.filter-scope').value;
  let policiesFilter = document.querySelector('.filter-policies').value;
  let quoteFilter = document.querySelector('.filter-quote').value;

  companyCards.forEach(function(card) {
      let companyName = card.getAttribute('data-company').toLowerCase();
      let industry = card.getAttribute('data-industry');
      let scope = card.getAttribute('data-scope');
      let policies = card.getAttribute('data-policies');
      let quote = card.getAttribute('data-quote');
      
      let matchesSearch = companyName.includes(searchInput);
      let matchesCompany = (companyFilter === '' || companyFilter === companyName);
      let matchesIndustry = (industryFilter === '' || industryFilter === industry);
      let matchesScope = (scopeFilter === '' || scopeFilter === scope);
      let matchesPolicies = (policiesFilter === '' || policiesFilter === policies);
      let matchesQuote = (quoteFilter === '' || quoteFilter === quote);

      if (matchesSearch && matchesCompany && matchesIndustry && matchesScope && matchesPolicies && matchesQuote) {
          card.style.display = 'block';
      } else {
          card.style.display = 'none';
      }
  });
}

// Event listeners for filter inputs
document.querySelectorAll('.filter').forEach(select => {
  select.addEventListener('change', filter);
});

// Run filter when search input changes
document.getElementById('searchCompany').addEventListener('input', filter);
