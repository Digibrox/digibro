document.addEventListener("DOMContentLoaded", function () {
  const input = document.querySelector(".user-search__input");
  const closeBtn = document.querySelector(".user-search__close");
  const options = document.querySelector(".user-search__list");
  const allOptions = options.querySelectorAll(".user-search__option");

  input.addEventListener("click", function (event) {
    event.stopPropagation();
    options.style.display = "block";
    allOptions.forEach((option) => {
      option.style.display = "block";
    });
  });

  closeBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    options.style.display = "none";
    input.value = "";
  });

  document.addEventListener("click", function () {
    options.style.display = "none";
  });

  input.addEventListener("input", function () {
    const filter = this.value.trim().toLowerCase();
    allOptions.forEach((option) => {
      const optionName = option.textContent.toLowerCase();
      if (filter && optionName.includes(filter)) {
        option.style.display = "block";
      } else {
        option.style.display = "none";
      }
    });
  });

  options.addEventListener("click", function (event) {
    const target = event.target;
    if (target.classList.contains("user-search__option")) {
      input.value = target.textContent.trim();
      options.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const customerButton = document.getElementById("customerButton");
  const resetCustomerButton = document.getElementById("resetCustomerButton");

  const options = document.querySelector(".user-search__list");
  options.addEventListener("click", function (event) {
    const target = event.target;
    if (target.classList.contains("user-search__option")) {
      customerButton.classList.remove("disabled");
      resetCustomerButton.classList.remove("disabled");
    }
  });
});

document.getElementById("agesa").addEventListener("click", openClientCard);
function openClientCard() {
  document.getElementById("client__card").style.display = "flex";
  document.getElementById("customerInfoButtons").style.display = "flex";
  document.getElementById("customUploadContainer").style.display = "flex";
  

}

const applyButton = document.getElementById("applyButton");
const titleP = document.getElementById("mainTitleP");

document
  .getElementById("closeCheckPanel")
  .addEventListener("click", closeCheckPanel);
function closeCheckPanel() {
  document.body.style.overflowY = "auto";
  titleP.textContent = "SORU FORMU OLUŞTUR";
  document.getElementById("questionCheckDiv").style.display = "none";

}

applyButton.addEventListener("click", function (event) {
  event.preventDefault();
  updateCiroParaBirimi()
  updateBedelParaBirimi1()
  updateTutarParaBirimi1()
  updateBedelParaBirimi2()
  updateBrutParaBirimi()
  checkQuestionFunction()
  
  titleP.textContent = "SORU FORMU KONTROL";
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
  document.body.style.overflow = "hidden";
  document.getElementById("questionCheckDiv").style.display = "block";
 
  const tarihInput = document.getElementById("tarih__input");
  const tarihCheckInput = document.getElementById("tarih__input__check");
  const teklifNoInput = document.getElementById("teklif__no");
  const teklifNoCheckInput = document.getElementById("teklif__no__check");
  const sigortaliAdiInput = document.getElementById("sigortali__adi");
  const sigortaliAdiCheckInput = document.getElementById(
    "sigortali__adi__check"
  );
  const vknInput = document.getElementById("vkn__input");
  const vknCheckInput = document.getElementById("vkn__input__check");
  const ilInput = document.getElementById("il__input");
  const ilCheckInput = document.getElementById("il__input__check");
  const ilceInput = document.getElementById("ilce__input");
  const ilceCheckInput = document.getElementById("ilce__input__check");
  const mahalleInput = document.getElementById("mahalle__input");
  const mahalleCheckInput = document.getElementById("mahalle__input__check");
  const faaliyetInput = document.getElementById("faaliyet__input");
  const faaliyetCheckInput = document.getElementById("faaliyet__input__check");
  const binaInput = document.getElementById("bina__faaliyet__input");
  const binaCheckInput = document.getElementById(
    "bina__faaliyet__input__check"
  );
  const personelInput = document.getElementById("personel__sayisi");
  const personelCheckInput = document.getElementById("personel__sayisi__check");
  const vardiyaInput = document.getElementById("vardiya__sayisi");
  const vardiyaCheckInput = document.getElementById("vardiya__sayisi__check");
  const koordinatEInput = document.getElementById("koordinat__e");
  const koordinatECheckInput = document.getElementById("koordinat__e__check");
  const koordinatNInput = document.getElementById("koordinat__n");
  const koordinatNCheckInput = document.getElementById("koordinat__n__check");
  const yetkiliInput = document.getElementById("yetkili__kisi");
  const yetkiliCheckInput = document.getElementById("yetkili__kisi__check");
  const telefonInput = document.getElementById("telefon__input");
  const telefonCheckInput = document.getElementById("telefon__input__check");
  const mailInput = document.getElementById("email__input");
  const mailCheckInput = document.getElementById("email__input__check");
  const oncekiInput = document.getElementById("onceki__sigorta");
  const oncekiCheckInput = document.getElementById("onceki__sigorta__check");
  const hasarInput = document.getElementById("hasar__input");
  const hasarCheckInput = document.getElementById("hasar__input__check");
  const tutarInput = document.getElementById("tutar__input");
  const tutarCheckInput = document.getElementById("tutar__input__check");
  const olayInput = document.getElementById("olay__textarea");
  const olayCheckInput = document.getElementById("olay__textarea__check");
  const adetInput = document.getElementById("adet__input");
  const adetCheckInput = document.getElementById("adet__input__check");
  const adetInput2 = document.getElementById("adet__input2");
  const adetCheckInput2 = document.getElementById("adet__input__check2");
  const adetInput3 = document.getElementById("adet__input3");
  const adetCheckInput3 = document.getElementById("adet__input__check3");
  const yuzdeInput = document.getElementById("yuzde__input");
  const yuzdeCheckInput = document.getElementById("yuzde__input__check");
  const tonInput = document.getElementById("ton__input");
  const tonCheckInput = document.getElementById("ton__input__check");
  const aciklamaInput = document.getElementById("aciklama__input");
  const aciklamaCheckInput = document.getElementById("aciklama__input__check");
  const tesisInput2 = document.getElementById("tesis__input2");
  const tesisCheckInput2 = document.getElementById("tesis__input2__check");
  const bedelInput2 = document.getElementById("bedel__input2");
  const bedelCheckInput2 = document.getElementById("bedel__input2__check");
  const modelInput = document.getElementById("model__input");
  const modelCheckInput = document.getElementById("model__input__check");
  const markaInput = document.getElementById("marka__input");
  const markaCheckInput = document.getElementById("marka__input__check");
  const seriNoInput = document.getElementById("seriNo__input");
  const seriNoCheckInput = document.getElementById("seriNo__input__check");
  const yasiInput = document.getElementById("yasi__input");
  const yasiCheckInput = document.getElementById("yasi__input__check");
  const bedelInput22 = document.getElementById("bedel__input22");
  const bedelCheckInput22 = document.getElementById("bedel__input22__check");
  const modelInput2 = document.getElementById("model__input2");
  const modelCheckInput2 = document.getElementById("model__input__check2");
  const markaInput2 = document.getElementById("marka__input2");
  const markaCheckInput2 = document.getElementById("marka__input__check2");
  const seriNoInput2 = document.getElementById("seriNo__input2");
  const seriNoCheckInput2 = document.getElementById("seriNo__input__check2");
  const yasiInput2 = document.getElementById("yasi__input2");
  const yasiCheckInput2 = document.getElementById("yasi__input__check2");
  const maviYakaInput = document.getElementById("maviYaka__input");
  const maviYakaCheckInput = document.getElementById("maviYaka__input__check");
  const beyazYakaInput = document.getElementById("beyazYaka__input");
  const beyazYakaCheckInput = document.getElementById(
    "beyazYaka__input__check"
  );
  const yillikInput = document.getElementById("yillik__input");
  const yillikCheckInput = document.getElementById("yillik__input__check");
  const ciroInput = document.getElementById("ciro__input");
  const ciroCheckInput = document.getElementById("ciro__input__check");

  tarihCheckInput.value = tarihInput.value;
  teklifNoCheckInput.value = teklifNoInput.value;
  sigortaliAdiCheckInput.value = sigortaliAdiInput.value;
  vknCheckInput.value = vknInput.value;
  ilCheckInput.value = ilInput.value;
  ilceCheckInput.value = ilceInput.value;
  mahalleCheckInput.value = mahalleInput.value;
  faaliyetCheckInput.value = faaliyetInput.value;
  binaCheckInput.value = binaInput.value;
  personelCheckInput.value = personelInput.value;
  vardiyaCheckInput.value = vardiyaInput.value;
  koordinatECheckInput.value = koordinatEInput.value;
  koordinatNCheckInput.value = koordinatNInput.value;
  yetkiliCheckInput.value = yetkiliInput.value;
  telefonCheckInput.value = telefonInput.value;
  mailCheckInput.value = mailInput.value;
  oncekiCheckInput.value = oncekiInput.value;
  hasarCheckInput.value = hasarInput.value;
  tutarCheckInput.value = tutarInput.value;
  olayCheckInput.value = olayInput.value;
  adetCheckInput.value = adetInput.value;
  adetCheckInput2.value = adetInput2.value;
  adetCheckInput3.value = adetInput3.value;
  yuzdeCheckInput.value = yuzdeInput.value;
  tonCheckInput.value = tonInput.value;
  aciklamaCheckInput.value = aciklamaInput.value;
  tesisCheckInput2.value = tesisInput2.value;
  bedelCheckInput2.value = bedelInput2.value;
  modelCheckInput.value = modelInput.value;
  markaCheckInput.value = markaInput.value;
  seriNoCheckInput.value = seriNoInput.value;
  yasiCheckInput.value = yasiInput.value;
  bedelCheckInput22.value = bedelInput22.value;
  modelCheckInput2.value = modelInput2.value;
  markaCheckInput2.value = markaInput2.value;
  seriNoCheckInput2.value = seriNoInput2.value;
  yasiCheckInput2.value = yasiInput2.value;
  maviYakaCheckInput.value = maviYakaInput.value;
  beyazYakaCheckInput.value = beyazYakaInput.value;
  yillikCheckInput.value = yillikInput.value;
  ciroCheckInput.value = ciroInput.value;

  const tutarParaBirimi1 = document.getElementById("tutarParaBirimi1");
  const links = document.querySelectorAll('a[id="TL1"], a[id="USD1"], a[id="EUR1"]');
  
  links.forEach(link => {
      // Arkaplan rengini kontrol edin
      const backgroundColor = window.getComputedStyle(link).backgroundColor;
      
      // Eğer arkaplan rengi beyaz değilse, textContent'ini alın
      if (backgroundColor !== 'rgb(255, 255, 255)') {
          const textContent2 = link.textContent;
          console.log(textContent2);
          tutarParaBirimi1.textContent = textContent2;
      }
    deneme()
  });




  function deneme(){
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













  const bedelParaBirimi2 = document.getElementById("bedelParaBirimi2");
  const links2 = document.querySelectorAll('a[id="TL2"], a[id="USD2"], a[id="EUR2"]');
  
  links2.forEach(link2 => {
      // Arkaplan rengini kontrol edin
      const backgroundColor = window.getComputedStyle(link2).backgroundColor;
      
      // Eğer arkaplan rengi beyaz değilse, textContent'ini alın
      if (backgroundColor !== 'rgb(255, 255, 255)') {
          const textContentBedel2 = link2.textContent;
          bedelParaBirimi2.textContent = textContentBedel2;
      }
  });


  const bedelParaBirimi3 = document.getElementById("bedelParaBirimi3");
  const links3 = document.querySelectorAll('a[id="TL3"], a[id="USD3"], a[id="EUR3"]');
  
  links3.forEach(link3 => {
      // Arkaplan rengini kontrol edin
      const backgroundColor = window.getComputedStyle(link3).backgroundColor;
      
      // Eğer arkaplan rengi beyaz değilse, textContent'ini alın
      if (backgroundColor !== 'rgb(255, 255, 255)') {
          const textContentBedel3 = link3.textContent;
          bedelParaBirimi3.textContent = textContentBedel3;
      }
  });


  const brutParaBirimi = document.getElementById("brutParaBirimi");
  const links4 = document.querySelectorAll('a[id="TL4"], a[id="USD4"], a[id="EUR4"]');
  
  links4.forEach(link4 => {
      // Arkaplan rengini kontrol edin
      const backgroundColor = window.getComputedStyle(link4).backgroundColor;
      
      // Eğer arkaplan rengi beyaz değilse, textContent'ini alın
      if (backgroundColor !== 'rgb(255, 255, 255)') {
          const textContentBrut = link4.textContent;
          brutParaBirimi.textContent = textContentBrut;
      }
  });


  const ciroParaBirimi = document.getElementById("ciroParaBirimi");
const links5 = document.querySelectorAll('a[id="TL5"], a[id="USD5"], a[id="EUR5"]');

links5.forEach(link5 => {
    // Arkaplan rengini kontrol edin
    const backgroundColor = window.getComputedStyle(link5).backgroundColor;
    
    // Eğer arkaplan rengi beyaz değilse, textContent'ini alın
    if (backgroundColor !== 'rgb(255, 255, 255)') {
        const textContentCiro = link5.textContent;
        ciroParaBirimi.textContent = textContentCiro;
    }
});
});
const yanginVar1Checkbox = document.getElementById("c1-13 yanginVar1");
const yanginVar1CheckCheckbox = document.getElementById(
  "c1-13 yanginVar1check"
);

yanginVar1Checkbox.addEventListener("change", function () {
  if (this.checked) {
    yanginVar1CheckCheckbox.checked = true;
  } else {
    yanginVar1CheckCheckbox.checked = false;
  }
});

const yanginYok1Checkbox = document.getElementById("c1-13 yanginYok1");
const yanginYok1CheckCheckbox = document.getElementById(
  "c1-13 yanginYok1check"
);

yanginYok1Checkbox.addEventListener("change", function () {
  if (this.checked) {
    yanginYok1CheckCheckbox.checked = true;
  } else {
    yanginYok1CheckCheckbox.checked = false;
  }
});

const yanginVar2Checkbox = document.getElementById("c1-13 yanginVar2");
const yanginVar2CheckCheckbox = document.getElementById(
  "c1-13 yanginVar2check"
);

yanginVar2Checkbox.addEventListener("change", function () {
  if (this.checked) {
    yanginVar2CheckCheckbox.checked = true;
  } else {
    yanginVar2CheckCheckbox.checked = false;
  }
});

const yanginYok2Checkbox = document.getElementById("c1-13 yanginYok2");
const yanginYok2CheckCheckbox = document.getElementById(
  "c1-13 yanginYok2check"
);

yanginYok2Checkbox.addEventListener("change", function () {
  if (this.checked) {
    yanginYok2CheckCheckbox.checked = true;
  } else {
    yanginYok2CheckCheckbox.checked = false;
  }
});

const yanginVar3Checkbox = document.getElementById("c1-13 yanginVar3");
const yanginVar3CheckCheckbox = document.getElementById(
  "c1-13 yanginVar3check"
);

yanginVar3Checkbox.addEventListener("change", function () {
  if (this.checked) {
    yanginVar3CheckCheckbox.checked = true;
  } else {
    yanginVar3CheckCheckbox.checked = false;
  }
});

const yanginYok3Checkbox = document.getElementById("c1-13 yanginYok3");
const yanginYok3CheckCheckbox = document.getElementById(
  "c1-13 yanginYok3check"
);

yanginYok3Checkbox.addEventListener("change", function () {
  if (this.checked) {
    yanginYok3CheckCheckbox.checked = true;
  } else {
    yanginYok3CheckCheckbox.checked = false;
  }
});

const yanginVar4Checkbox = document.getElementById("c1-13 yanginVar4");
const yanginVar4CheckCheckbox = document.getElementById(
  "c1-13 yanginVar4check"
);

yanginVar4Checkbox.addEventListener("change", function () {
  if (this.checked) {
    yanginVar4CheckCheckbox.checked = true;
  } else {
    yanginVar4CheckCheckbox.checked = false;
  }
});

const yanginYok4Checkbox = document.getElementById("c1-13 yanginYok4");
const yanginYok4CheckCheckbox = document.getElementById(
  "c1-13 yanginYok4check"
);

yanginYok4Checkbox.addEventListener("change", function () {
  if (this.checked) {
    yanginYok4CheckCheckbox.checked = true;
  } else {
    yanginYok4CheckCheckbox.checked = false;
  }
});

const yanginVar5Checkbox = document.getElementById("c1-13 yanginVar5");
const yanginVar5CheckCheckbox = document.getElementById(
  "c1-13 yanginVar5check"
);

yanginVar5Checkbox.addEventListener("change", function () {
  if (this.checked) {
    yanginVar5CheckCheckbox.checked = true;
  } else {
    yanginVar5CheckCheckbox.checked = false;
  }
});

const yanginYok5Checkbox = document.getElementById("c1-13 yanginYok5");
const yanginYok5CheckCheckbox = document.getElementById(
  "c1-13 yanginYok5check"
);

yanginYok5Checkbox.addEventListener("change", function () {
  if (this.checked) {
    yanginYok5CheckCheckbox.checked = true;
  } else {
    yanginYok5CheckCheckbox.checked = false;
  }
});

const yangin61Checkbox = document.getElementById("c1-13 yangin61");
const yangin61CheckCheckbox = document.getElementById("c1-13 yangin61check");

yangin61Checkbox.addEventListener("change", function () {
  if (this.checked) {
    yangin61CheckCheckbox.checked = true;
  } else {
    yangin61CheckCheckbox.checked = false;
  }
});

const yangin62Checkbox = document.getElementById("c1-13 yangin62");
const yangin62CheckCheckbox = document.getElementById("c1-13 yangin62check");

yangin62Checkbox.addEventListener("change", function () {
  if (this.checked) {
    yangin62CheckCheckbox.checked = true;
  } else {
    yangin62CheckCheckbox.checked = false;
  }
});

const yangin63Checkbox = document.getElementById("c1-13 yangin63");
const yangin63CheckCheckbox = document.getElementById("c1-13 yangin63check");

yangin63Checkbox.addEventListener("change", function () {
  if (this.checked) {
    yangin63CheckCheckbox.checked = true;
  } else {
    yangin63CheckCheckbox.checked = false;
  }
});

const yangin64Checkbox = document.getElementById("c1-13 yangin64");
const yangin64CheckCheckbox = document.getElementById("c1-13 yangin64check");

yangin64Checkbox.addEventListener("change", function () {
  if (this.checked) {
    yangin64CheckCheckbox.checked = true;
  } else {
    yangin64CheckCheckbox.checked = false;
  }
});

const yanginVar7Checkbox = document.getElementById("c1-13 yanginVar7");
const yanginVar7CheckCheckbox = document.getElementById(
  "c1-13 yanginVar7check"
);

yanginVar7Checkbox.addEventListener("change", function () {
  if (this.checked) {
    yanginVar7CheckCheckbox.checked = true;
  } else {
    yanginVar7CheckCheckbox.checked = false;
  }
});

const yanginYok7Checkbox = document.getElementById("c1-13 yanginYok7");
const yanginYok7CheckCheckbox = document.getElementById(
  "c1-13 yanginYok7check"
);

yanginYok7Checkbox.addEventListener("change", function () {
  if (this.checked) {
    yanginYok7CheckCheckbox.checked = true;
  } else {
    yanginYok7CheckCheckbox.checked = false;
  }
});

const yanginVar8Checkbox = document.getElementById("c1-13 yanginVar8");
const yanginVar8CheckCheckbox = document.getElementById(
  "c1-13 yanginVar8check"
);

yanginVar8Checkbox.addEventListener("change", function () {
  if (this.checked) {
    yanginVar8CheckCheckbox.checked = true;
  } else {
    yanginVar8CheckCheckbox.checked = false;
  }
});

const yanginYok8Checkbox = document.getElementById("c1-13 yanginYok8");
const yanginYok8CheckCheckbox = document.getElementById(
  "c1-13 yanginYok8check"
);

yanginYok8Checkbox.addEventListener("change", function () {
  if (this.checked) {
    yanginYok8CheckCheckbox.checked = true;
  } else {
    yanginYok8CheckCheckbox.checked = false;
  }
});

const yanginVar9Checkbox = document.getElementById("c1-13 yanginVar9");
const yanginVar9CheckCheckbox = document.getElementById(
  "c1-13 yanginVar9check"
);

yanginVar9Checkbox.addEventListener("change", function () {
  if (this.checked) {
    yanginVar9CheckCheckbox.checked = true;
  } else {
    yanginVar9CheckCheckbox.checked = false;
  }
});

const yanginYok9Checkbox = document.getElementById("c1-13 yanginYok9");
const yanginYok9CheckCheckbox = document.getElementById(
  "c1-13 yanginYok9check"
);

yanginYok9Checkbox.addEventListener("change", function () {
  if (this.checked) {
    yanginYok9CheckCheckbox.checked = true;
  } else {
    yanginYok9CheckCheckbox.checked = false;
  }
});

const topDivImg = document.getElementById("topDivImg");
const cardImg = document.getElementById("cardImg");
const topDivName = document.getElementById("topDivP__check");
const cardName = document.getElementById("client__card__name");

topDivName.textContent = cardName.textContent;

topDivImg.src = cardImg.src;


