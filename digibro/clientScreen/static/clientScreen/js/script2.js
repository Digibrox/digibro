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

