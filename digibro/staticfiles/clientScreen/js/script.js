

function localSaveCS(){
  // İlgili metni alın
var tarihMetin = document.getElementById('tarih__input__check').value;
var teklifNoMetin = document.getElementById('teklif__no__check').value;
var sigortaliAdi = document.getElementById('sigortali__adi__check').value;
var vknMetin = document.getElementById('vkn__input__check').value;
var ilMetin = document.getElementById('il__input__check').value;
var ilceMetin = document.getElementById('ilce__input__check').value;
var mahalleMetin = document.getElementById('mahalle__input__check').value;
var faaliyetMetin = document.getElementById('faaliyet__input__check').value;
var BinaMetin = document.getElementById('bina__faaliyet__input__check').value;
var personelMetin = document.getElementById('personel__sayisi__check').value;
var vardiyaMetin = document.getElementById('vardiya__sayisi__check').value;
var koordinatnMetin = document.getElementById('koordinat__n__check').value;
var koordinateMetin = document.getElementById('koordinat__e__check').value;
var gerekliMetin = document.getElementById('yetkili__kisi__check').value;
var telefonMetin = document.getElementById('telefon__input__check').value;
var emailMetin = document.getElementById('email__input__check').value;
var oncekiSigortaMetin = document.getElementById('onceki__sigorta__check').value;
var hasarTarihMetin = document.getElementById('hasar__input__check').value;
var hasarTutarMetin = document.getElementById('tutar__input__check').value;
var hasarOlayMetin = document.getElementById('olay__textarea__check').value;
var parabirimi1 = document.getElementById('tutarParaBirimi1').textContent;
/////////////
var yanginCheckbox1 = document.getElementById('c1-13 yanginVar1check');
var isyanginCheckbox1 = yanginCheckbox1.checked;
var yanginCheckbox2 = document.getElementById('c1-13 yanginVar2check');
var isyanginCheckbox2 = yanginCheckbox2.checked;
var yanginCheckbox3 = document.getElementById('c1-13 yanginVar3check');
var isyanginCheckbox3 = yanginCheckbox3.checked;
var yanginCheckbox4 = document.getElementById('c1-13 yanginVar4check');
var isyanginCheckbox4 = yanginCheckbox4.checked;
var yanginCheckbox5 = document.getElementById('c1-13 yanginVar5check');
var isyanginCheckbox5 = yanginCheckbox5.checked;
var yanginCheckbox6 = document.getElementById('c1-13 yangin61check');
var isyanginCheckbox6 = yanginCheckbox6.checked;
var yanginCheckbox7 = document.getElementById('c1-13 yanginVar7check');
var isyanginCheckbox7 = yanginCheckbox7.checked;
var yanginCheckbox8 = document.getElementById('c1-13 yanginVar8check');
var isyanginCheckbox8 = yanginCheckbox8.checked;
var yanginCheckbox9 = document.getElementById('c1-13 yanginVar9check');
var isyanginCheckbox9 = yanginCheckbox9.checked;

var adetMetin1 = document.getElementById('adet__input__check').value;
var adetMetin2 = document.getElementById('adet__input__check2').value;
var adetMetin3 = document.getElementById('adet__input__check3').value;
var adetMetin4 = document.getElementById('yuzde__input__check').value;
var adetMetin5 = document.getElementById('ton__input__check').value;
var adetMetin6 = document.getElementById('aciklama__input__check').value;
var adetMetin7 = document.getElementById('tesis__input2__check').value;

/////////////
var bedelMetin1 = document.getElementById('bedel__input2__check').value;
var modelMetin1 = document.getElementById('model__input__check').value;
var markaMetin1 = document.getElementById('marka__input__check').value;
var seriMetin1 = document.getElementById('seriNo__input__check').value;
var yasMetin1 = document.getElementById('yasi__input__check').value;
/////////////
var bedelMetin2 = document.getElementById('bedel__input22__check').value;
var modelMetin2 = document.getElementById('model__input__check2').value;
var markaMetin2 = document.getElementById('marka__input__check2').value;
var seriMetin2 = document.getElementById('seriNo__input__check2').value;
var yasMetin2 = document.getElementById('yasi__input__check2').value;
/////////////
var maviYakaMetin = document.getElementById('maviYaka__input__check').value;
var beyazYakaMetin = document.getElementById('beyazYaka__input__check').value;
var brutMetin = document.getElementById('yillik__input__check').value;
/////////////
var ciroMetin = document.getElementById('ciro__input__check').value;
var arr = {
"tesis__input2__check": adetMetin7,
"aciklama__input__check": adetMetin6,
"ton__input__check": adetMetin5,
"adet__input__check": adetMetin1,
"yuzde__input__check": adetMetin4,
"adet__input__check2": adetMetin2,
"adet__input__check3": adetMetin3,
"tarih__input__check": tarihMetin,
"teklif__no__check": teklifNoMetin,
"sigortali__adi__check": sigortaliAdi,
"vkn__input__check": vknMetin,
"il__input__check": ilMetin,
"ilce__input__check": ilceMetin,
"mahalle__input__check": mahalleMetin,
"faaliyet__input__check": faaliyetMetin,
"bina__faaliyet__input__check": BinaMetin,
"personel__sayisi__check": personelMetin,
"vardiya__sayisi__check": vardiyaMetin,
"koordinat__n__check": koordinatnMetin,
"koordinat__e__check": koordinateMetin,
"yetkili__kisi__check": gerekliMetin,
"telefon__input__check": telefonMetin,
"email__input__check": emailMetin,
"onceki__sigorta__check": oncekiSigortaMetin,
"hasar__input__check": hasarTarihMetin,
"tutar__input__check": hasarTutarMetin,
"olay__textarea__check": hasarOlayMetin,
"tutarParaBirimi1": parabirimi1,
"bedel__input2__check": bedelMetin1,
"model__input__check": modelMetin1,
"marka__input__check": markaMetin1,
"seriNo__input__check": seriMetin1,
"yasi__input__check": yasMetin1,
"bedel__input22__check": bedelMetin2,
"model__input__check2": modelMetin2,
"marka__input__check2": markaMetin2,
"seriNo__input__check2": seriMetin2,
"yasi__input__check2": yasMetin2,
"maviYaka__input__check": maviYakaMetin,
"beyazYaka__input__check": beyazYakaMetin,
"yillik__input__check": brutMetin,
"ciro__input__check": ciroMetin,
"c1-13 yanginVar1check": isyanginCheckbox1,
"c1-13 yanginVar2check": isyanginCheckbox2,
"c1-13 yanginVar3check": isyanginCheckbox3,
"c1-13 yanginVar4check": isyanginCheckbox4,
"c1-13 yanginVar5check": isyanginCheckbox5,
"c1-13 yangin61check": isyanginCheckbox6,
"c1-13 yanginVar7check": isyanginCheckbox7,
"c1-13 yanginVar8check": isyanginCheckbox8,
"c1-13 yanginVar9check": isyanginCheckbox9
}

  localStorage.setItem('kaydedilen_metin', JSON.stringify(arr));
}

document.addEventListener('DOMContentLoaded', function() {
  // Session Storage'dan metni alın
  var kaydedilenMetin = localStorage.getItem('kaydedilen_metin');
  
  // Eğer kaydedilenMetin varsa JSON formatından çıkarın
  if (kaydedilenMetin) {
      kaydedilenMetin = JSON.parse(kaydedilenMetin);
      
      // kaydedilenMetin nesnesinin anahtarlarını dolaşarak input alanlarını doldurun
      Object.keys(kaydedilenMetin).forEach(function(key) {
          var inputElement = document.getElementById(key);
          
          if (inputElement) {
              inputElement.value = kaydedilenMetin[key];
              
              var checkboxElement = document.getElementById(key + "__checkbox");
              if (checkboxElement) {
                  // Checkbox elementi varsa işlemleri gerçekleştirin
                  checkboxElement.checked = true;
                  
                  // Kapsayıcı div'i bulun
                  var kapsayiciDiv = checkboxElement.closest('.mainQuestionDiv');
                  
                  if (kapsayiciDiv) {
                      // Kapsayıcı div bulunduğunda işlemleri gerçekleştirin
                      kapsayiciDiv.style.display = "flex";
                      console.log(kapsayiciDiv);
                  }
              }
          }
      });
  } else {
      console.log('Session Storage\'da kaydedilmiş metin bulunamadı.');
  }
  // "c1-13 yanginVar1check" adlı checkbox durumunu kontrol edin ve gerekli işlemleri gerçekleştirin
  var isyanginVar1CheckboxChecked = kaydedilenMetin && kaydedilenMetin['c1-13 yanginVar1check'];
  var yanginVar1Checkbox = document.getElementById('c1-13 yanginVar1check');
  if (yanginVar1Checkbox) {
    yanginVar1Checkbox.checked = isyanginVar1CheckboxChecked;
  }
  
    // "c1-13 yanginVar1check" adlı checkbox durumunu kontrol edin ve gerekli işlemleri gerçekleştirin
    var isyanginVar2CheckboxChecked = kaydedilenMetin && kaydedilenMetin['c1-13 yanginVar2check'];
    var yanginVar1Checkbox2 = document.getElementById('c1-13 yanginVar2check');
    if (yanginVar1Checkbox2) {
      yanginVar1Checkbox2.checked = isyanginVar2CheckboxChecked;
    }
 // "c1-13 yanginVar1check" adlı checkbox durumunu kontrol edin ve gerekli işlemleri gerçekleştirin
 var isyanginVar3CheckboxChecked = kaydedilenMetin && kaydedilenMetin['c1-13 yanginVar3check'];
 var yanginVar1Checkbox3 = document.getElementById('c1-13 yanginVar3check');
 if (yanginVar1Checkbox3) {
   yanginVar1Checkbox3.checked = isyanginVar3CheckboxChecked;
 }
// "c1-13 yanginVar1check" adlı checkbox durumunu kontrol edin ve gerekli işlemleri gerçekleştirin
var isyanginVar4CheckboxChecked = kaydedilenMetin && kaydedilenMetin['c1-13 yanginVar4check'];
var yanginVar1Checkbox4 = document.getElementById('c1-13 yanginVar4check');
if (yanginVar1Checkbox4) {
  yanginVar1Checkbox4.checked = isyanginVar4CheckboxChecked;
}
// "c1-13 yanginVar1check" adlı checkbox durumunu kontrol edin ve gerekli işlemleri gerçekleştirin
var isyanginVar5CheckboxChecked = kaydedilenMetin && kaydedilenMetin['c1-13 yanginVar5check'];
var yanginVar1Checkbox5 = document.getElementById('c1-13 yanginVar5check');
if (yanginVar1Checkbox5) {
  yanginVar1Checkbox5.checked = isyanginVar5CheckboxChecked;
}


// "c1-13 yanginVar1check" adlı checkbox durumunu kontrol edin ve gerekli işlemleri gerçekleştirin
var isyanginVar6CheckboxChecked = kaydedilenMetin && kaydedilenMetin['c1-13 yangin61check'];
var yanginVar1Checkbox6 = document.getElementById('c1-13 yangin61check');
if (yanginVar1Checkbox6) {
  yanginVar1Checkbox6.checked = isyanginVar6CheckboxChecked;
}


// "c1-13 yanginVar1check" adlı checkbox durumunu kontrol edin ve gerekli işlemleri gerçekleştirin
var isyanginVar7CheckboxChecked = kaydedilenMetin && kaydedilenMetin['c1-13 yanginVar7check'];
var yanginVar1Checkbox7 = document.getElementById('c1-13 yanginVar7check');
if (yanginVar1Checkbox7) {
  yanginVar1Checkbox7.checked = isyanginVar7CheckboxChecked;
}

// "c1-13 yanginVar1check" adlı checkbox durumunu kontrol edin ve gerekli işlemleri gerçekleştirin
var isyanginVar8CheckboxChecked = kaydedilenMetin && kaydedilenMetin['c1-13 yanginVar8check'];
var yanginVar1Checkbox8 = document.getElementById('c1-13 yanginVar8check');
if (yanginVar1Checkbox8) {
  yanginVar1Checkbox8.checked = isyanginVar8CheckboxChecked;
}

// "c1-13 yanginVar1check" adlı checkbox durumunu kontrol edin ve gerekli işlemleri gerçekleştirin
var isyanginVar9CheckboxChecked = kaydedilenMetin && kaydedilenMetin['c1-13 yanginVar9check'];
var yanginVar1Checkbox9 = document.getElementById('c1-13 yanginVar9check');
if (yanginVar1Checkbox9) {
  yanginVar1Checkbox9.checked = isyanginVar9CheckboxChecked;
}







});
document.addEventListener('DOMContentLoaded', function() {
  // Checkbox'ların bilgilerini içeren bir dizi oluştur
  var checkboxPairs = [
    { checkId: 'c1-13 yanginVar1check', checkboxId: 'yanginVar1checkbox' },
    { checkId: 'c1-13 yanginVar2check', checkboxId: 'yanginVar2checkbox' },
    { checkId: 'c1-13 yanginVar3check', checkboxId: 'yanginVar3checkbox' },
    { checkId: 'c1-13 yanginVar4check', checkboxId: 'yanginVar4checkbox' },
    { checkId: 'c1-13 yanginVar5check', checkboxId: 'yanginVar5checkbox' },
    { checkId: 'c1-13 yangin61check', checkboxId: 'yanginVar6checkbox' },
    { checkId: 'c1-13 yanginVar7check', checkboxId: 'yanginVar7checkbox' },
    { checkId: 'c1-13 yanginVar8check', checkboxId: 'yanginVar8checkbox' },
    { checkId: 'c1-13 yanginVar9check', checkboxId: 'yanginVar9checkbox' },
    // İhtiyaca göre diğer checkbox çiftlerini ekleyebilirsiniz
  ];

  // Her checkbox çifti için işlemleri gerçekleştir
  checkboxPairs.forEach(function(pair) {
    // Checkbox'ları seç
    var check = document.getElementById(pair.checkId);
    var checkbox = document.getElementById(pair.checkboxId);

    // Checkbox'lar bulunduysa işlemleri gerçekleştir
    if (check && checkbox) {
      // Sayfa yüklendiğinde mevcut duruma göre kontrol et
      checkbox.checked = check.checked;

      // Checkbox'un durumunu dinleyerek işlem yap
      check.addEventListener('change', function() {
        // Checkbox işaretli ise
        if (check.checked) {
          // İlgili checkbox'u da işaretle
          checkbox.checked = true;
        } else {
          // Checkbox işaretli değilse
          // İlgili checkbox'u işaretsiz bırak
          checkbox.checked = false;
        }
      });
    }
  });
  // Bedel input ve checkbox
  var bedelInput = document.getElementById("bedel__input2__check");
  var bedelCheckbox = document.getElementById("bedel__input2__check__checkbox");

  // Model input ve checkbox
  var modelInput = document.getElementById("model__input__check");
  var modelCheckbox = document.getElementById("model__input__check__checkbox");

  // Marka input ve checkbox
  var markaInput = document.getElementById("marka__input__check");
  var markaCheckbox = document.getElementById("marka__input__check__checkbox");

  // Seri No input ve checkbox
  var seriNoInput = document.getElementById("seriNo__input__check");
  var seriNoCheckbox = document.getElementById("seriNo__input__check__checkbox");

  var yasInput = document.getElementById("yasi__input__check");
  var yasCheckbox = document.getElementById("yasi__input__check__checkbox");

  // Bedel22 input ve checkbox
  var bedel22Input = document.getElementById("bedel__input22__check");
  var bedel22Checkbox = document.getElementById("bedel__input22__check__checkbox");

  // Model2 input ve checkbox
  var model2Input = document.getElementById("model__input__check2");
  var model2Checkbox = document.getElementById("model__input__check2__checkbox");

  // Marka2 input ve checkbox
  var marka2Input = document.getElementById("marka__input__check2");
  var marka2Checkbox = document.getElementById("marka__input__check2__checkbox");

  var seriNo2Input = document.getElementById("seriNo__input__check2");
  var seriNo2Checkbox = document.getElementById("seriNo__input__check2__checkbox");

  // Yasi2 input ve checkbox
  var yasi2Input = document.getElementById("yasi__input__check2");
  var yasi2Checkbox = document.getElementById("yasi__input__check2__checkbox");

  // Fonksiyonlar
  function updateBedelCheckbox() {
    bedelCheckbox.checked = bedelInput.value.trim() !== "";
  }

  function updateModelCheckbox() {
    modelCheckbox.checked = modelInput.value.trim() !== "";
  }

  function updateMarkaCheckbox() {
    markaCheckbox.checked = markaInput.value.trim() !== "";
  }

  function updateSeriNoCheckbox() {
    seriNoCheckbox.checked = seriNoInput.value.trim() !== "";
  }
    // Fonksiyonlar
    function updateYasCheckbox() {
      yasCheckbox.checked = yasInput.value.trim() !== "";
    }
  
    function updateBedel22Checkbox() {
      bedel22Checkbox.checked = bedel22Input.value.trim() !== "";
    }
  
    function updateModel2Checkbox() {
      model2Checkbox.checked = model2Input.value.trim() !== "";
    }
  
    function updateMarka2Checkbox() {
      marka2Checkbox.checked = marka2Input.value.trim() !== "";
    }
    function updateSeriNo2Checkbox() {
      seriNo2Checkbox.checked = seriNo2Input.value.trim() !== "";
    }
  
    function updateYasi2Checkbox() {
      yasi2Checkbox.checked = yasi2Input.value.trim() !== "";
    }

  // Input olay dinleyicileri
  bedelInput.addEventListener("input", updateBedelCheckbox);
  modelInput.addEventListener("input", updateModelCheckbox);
  markaInput.addEventListener("input", updateMarkaCheckbox);
  seriNoInput.addEventListener("input", updateSeriNoCheckbox);
  yasInput.addEventListener("input", updateYasCheckbox);
  bedel22Input.addEventListener("input", updateBedel22Checkbox);
  model2Input.addEventListener("input", updateModel2Checkbox);
  marka2Input.addEventListener("input", updateMarka2Checkbox);
  seriNo2Input.addEventListener("input", updateSeriNo2Checkbox);
  yasi2Input.addEventListener("input", updateYasi2Checkbox);
  var yillikInputCheck = document.getElementById("yillik__input__check");
  var yillikCheckbox = document.getElementById("yillik__input__check__checkbox");
  
  function updateYillikCheckbox() {
    yillikCheckbox.checked = yillikInputCheck.value.trim() !== "";
  }
  
  yillikInputCheck.addEventListener("input", updateYillikCheckbox);
  
  var ciroInputCheck = document.getElementById("ciro__input__check");
  var ciroCheckbox = document.getElementById("ciro__input__check__checkbox");
  
  function updateCiroCheckbox() {
    ciroCheckbox.checked = ciroInputCheck.value.trim() !== "";
  }
  
  ciroInputCheck.addEventListener("input", updateCiroCheckbox);
  // Sayfa yüklendiğinde ve her yenilendiğinde çalışacak işlemler
  var maviYakaInputCheck = document.getElementById("maviYaka__input__check");
var maviYakaCheckbox = document.getElementById("maviYaka__input__check__checkbox");

function updateMaviYakaCheckbox() {
  maviYakaCheckbox.checked = maviYakaInputCheck.value.trim() !== "";
}

maviYakaInputCheck.addEventListener("input", updateMaviYakaCheckbox);

var beyazYakaInputCheck = document.getElementById("beyazYaka__input__check");
var beyazYakaCheckbox = document.getElementById("beyazYaka__input__check__checkbox");

function updateBeyazYakaCheckbox() {
  beyazYakaCheckbox.checked = beyazYakaInputCheck.value.trim() !== "";
}

beyazYakaInputCheck.addEventListener("input", updateBeyazYakaCheckbox);
var tutarInputCheck = document.getElementById("tutar__input__check");
var tutarCheckbox = document.getElementById("tutar__input__check__checkbox");

function updateTutarCheckbox() {
  tutarCheckbox.checked = tutarInputCheck.value.trim() !== "";
}

tutarInputCheck.addEventListener("input", updateTutarCheckbox);

var oncekiSigortaInputCheck = document.getElementById("onceki__sigorta__check");
var oncekiSigortaCheckbox = document.getElementById("onceki__sigorta__check__checkbox");

function updateOncekiSigortaCheckbox() {
  oncekiSigortaCheckbox.checked = oncekiSigortaInputCheck.value.trim() !== "";
}

oncekiSigortaInputCheck.addEventListener("input", updateOncekiSigortaCheckbox);

var telefonInputCheck = document.getElementById("telefon__input__check");
var telefonCheckbox = document.getElementById("telefon__input__check__checkbox");

function updateTelefonCheckbox() {
  telefonCheckbox.checked = telefonInputCheck.value.trim() !== "";
}
var yetkiliKisiCheck = document.getElementById("yetkili__kisi__check");
var yetkiliKisiCheckbox = document.getElementById("yetkili__kisi__check__checkbox");

function updateYetkiliKisiCheckbox() {
  yetkiliKisiCheckbox.checked = yetkiliKisiCheck.value.trim() !== "";
}

yetkiliKisiCheck.addEventListener("input", updateYetkiliKisiCheckbox);

var koordinatNCheck = document.getElementById("koordinat__n__check");
var koordinatNCheckbox = document.getElementById("koordinat__n__check__checkbox");

function updateKoordinatNCheckbox() {
  koordinatNCheckbox.checked = koordinatNCheck.value.trim() !== "";
}

koordinatNCheck.addEventListener("input", updateKoordinatNCheckbox);

telefonInputCheck.addEventListener("input", updateTelefonCheckbox);
var personelSayisiCheck = document.getElementById("personel__sayisi__check");
var personelSayisiCheckbox = document.getElementById("personel__sayisi__check__checkbox");

function updatePersonelSayisiCheckbox() {
  personelSayisiCheckbox.checked = personelSayisiCheck.value.trim() !== "";
}

personelSayisiCheck.addEventListener("input", updatePersonelSayisiCheckbox);

var faaliyetInputCheck = document.getElementById("faaliyet__input__check");
var faaliyetInputCheckbox = document.getElementById("faaliyet__input__check__checkbox");

function updateFaaliyetInputCheckbox() {
  faaliyetInputCheckbox.checked = faaliyetInputCheck.value.trim() !== "";
}

faaliyetInputCheck.addEventListener("input", updateFaaliyetInputCheckbox);
var ilInputCheck = document.getElementById("il__input__check");
var ilInputCheckbox = document.getElementById("il__input__check__checkbox");

function updateIlInputCheckbox() {
  ilInputCheckbox.checked = ilInputCheck.value.trim() !== "";
}

ilInputCheck.addEventListener("input", updateIlInputCheckbox);

var sigortaliAdiCheck = document.getElementById("sigortali__adi__check");
var sigortaliAdiCheckbox = document.getElementById("sigortali__adi__check__checkbox");

function updateSigortaliAdiCheckbox() {
  sigortaliAdiCheckbox.checked = sigortaliAdiCheck.value.trim() !== "";
}

sigortaliAdiCheck.addEventListener("input", updateSigortaliAdiCheckbox);
var teklifNoCheck = document.getElementById("teklif__no__check");
var teklifNoCheckbox = document.getElementById("teklif__no__check__checkbox");

function updateTeklifNoCheckbox() {
  teklifNoCheckbox.checked = teklifNoCheck.value.trim() !== "";
}

teklifNoCheck.addEventListener("input", updateTeklifNoCheckbox);

var tarihInputCheck = document.getElementById("tarih__input__check");
var tarihInputCheckbox = document.getElementById("tarih__input__check__checkbox");

function updateTarihInputCheckbox() {
  tarihInputCheckbox.checked = tarihInputCheck.value.trim() !== "";
}

tarihInputCheck.addEventListener("input", updateTarihInputCheckbox);

  function updateCheckboxes() {
updateBeyazYakaCheckbox();
updatePersonelSayisiCheckbox();
updateIlInputCheckbox();
updateTeklifNoCheckbox();
updateYetkiliKisiCheckbox();
updateTarihInputCheckbox();
updateSigortaliAdiCheckbox();
updateFaaliyetInputCheckbox();
updateCiroCheckbox();
updateKoordinatNCheckbox();
updateBedelCheckbox();
  updateYillikCheckbox();
updateMaviYakaCheckbox();
updateTutarCheckbox();
updateOncekiSigortaCheckbox();
updateTelefonCheckbox();

  updateModelCheckbox();
    updateMarkaCheckbox();
    updateSeriNoCheckbox();
    updateYasCheckbox();
    updateBedel22Checkbox();
    updateModel2Checkbox();
    updateMarka2Checkbox();
    updateSeriNo2Checkbox();
    updateYasi2Checkbox();
  }

  // Olay dinleyicileri ekle
  updateCheckboxes();
});

// document.getElementById("platform2").addEventListener("change", function () {
//   var selectedOption = this.options[this.selectedIndex];
//   if (selectedOption.id === "blaze") {
//     document.getElementById("platformBlaze").style.display = "flex";
//     document.getElementById("platformBlazeP").innerText = "Yangın Kâr Kaybı";
//     document.getElementById("yangin1").style.display = "block";
//     document.getElementById("yangin2").style.display = "block";
//     document.getElementById("yangin3").style.display = "block";
//     document.getElementById("engineering1").style.display = "none";
//     document.getElementById("engineering2").style.display = "none";
//     document.getElementById("engineering3").style.display = "none";
//     document.getElementById("Sorumluluk1").style.display = "none";
//     document.getElementById("Sorumluluk2").style.display = "none";
//     document.getElementById("Sorumluluk3").style.display = "none";

//   } else if(selectedOption.id === "engineering") {
//     document.getElementById("platformBlaze").style.display = "flex";
//     document.getElementById("platformBlazeP").innerText = "Mühendislik";
//     document.getElementById("yangin1").style.display = "none";
//     document.getElementById("yangin2").style.display = "none";
//     document.getElementById("yangin3").style.display = "none";
// 	document.getElementById("engineering1").style.display = "block";
//     document.getElementById("engineering2").style.display = "block";
//     document.getElementById("engineering3").style.display = "block";
//     document.getElementById("Sorumluluk1").style.display = "none";
//     document.getElementById("Sorumluluk2").style.display = "none";
//     document.getElementById("Sorumluluk3").style.display = "none";

//   } else if(selectedOption.id === "Sorumluluk") {
//     document.getElementById("platformBlaze").style.display = "flex";
//     document.getElementById("platformBlazeP").innerText = "Sorumluluk";
//     document.getElementById("yangin1").style.display = "none";
//     document.getElementById("yangin2").style.display = "none";
//     document.getElementById("yangin3").style.display = "none";
// 	document.getElementById("engineering1").style.display = "none";
//     document.getElementById("engineering2").style.display = "none";
//     document.getElementById("engineering3").style.display = "none";
//     document.getElementById("Sorumluluk1").style.display = "block";
//     document.getElementById("Sorumluluk2").style.display = "block";
//     document.getElementById("Sorumluluk3").style.display = "block";

//   }
// });
// Tüm checkbox'ları seç
var checkboxes = document.querySelectorAll('.form-check-input');

// Her bir checkbox değiştiğinde
checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    // Seçilen checkbox'ların sayısını bul
    var selectedCount = document.querySelectorAll('.form-check-input:checked').length;
    
    // Seçilen checkbox'ların sayısını yazdır
    document.getElementById('selected-count').textContent = selectedCount;
  });
});




