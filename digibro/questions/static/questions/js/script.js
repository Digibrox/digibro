function updateSymbol(e){
  var selected = $(".currency-selector option:selected");
  $(".currency-symbol").text(selected.data("symbol"))
  $(".currency-amount").prop("placeholder", selected.data("placeholder"))
  $('.currency-addon-fixed').text(selected.text())
}

$(".currency-selector").on("change", updateSymbol)

updateSymbol()

const svg = `
  <svg
                    width="120"
                    height="25"
                    id="locktonSvg3"
                    viewBox="0 0 134 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M118.906 9.04643V11.9296C122.942 11.1853 126.349 11.3177 129.088 11.8248C128.807 9.79064 127.617 8.77631 125.505 8.77631C124.259 8.77631 123.195 9.35514 122.324 10.5183V9.04091H118.906V9.04643Z"
                      fill="white"
                    />
                    <path
                      d="M129.805 9.48187V11.9681C131.255 12.2823 132.506 12.7013 133.543 13.1313V12.2768L129.805 9.48187Z"
                      fill="white"
                    />
                    <path
                      d="M129.805 9.04639L133.543 11.8578V9.04639H129.805Z"
                      fill="white"
                    />
                    <path
                      d="M90.0419 7.0122C88.8071 8.21947 88.1896 9.84571 88.1896 11.8854C88.1896 12.7509 88.2889 13.5447 88.4818 14.2669C89.9813 14.5756 91.602 14.8181 93.3385 14.9835C93.1841 14.8181 93.0518 14.6252 92.9361 14.4047C92.5998 13.7707 92.4344 12.9438 92.4344 11.924C92.4344 10.9648 92.6053 10.1654 92.9581 9.53148C93.3881 8.74317 94.0496 8.34626 94.9372 8.34626C95.8247 8.34626 96.5138 8.73766 96.9713 9.51495C97.3407 10.1489 97.5281 10.9538 97.5281 11.924C97.5281 13.5282 97.1698 14.6142 96.4587 15.182C97.9526 15.2316 99.5127 15.2206 101.139 15.1379C101.558 14.2062 101.767 13.1368 101.767 11.924C101.767 11.5987 101.751 11.2845 101.718 10.9813C102.071 10.2261 102.451 9.85122 102.864 9.85122C103.206 9.85122 103.372 10.0993 103.372 10.5899C103.372 10.7994 103.35 10.9979 103.311 11.1908L102.49 15.0497C103.344 14.989 104.215 14.9064 105.097 14.8016C105.417 13.7597 105.759 12.8556 106.133 12.0839C106.916 10.4631 107.716 9.65276 108.526 9.65276C109.094 9.65276 109.38 9.96699 109.38 10.5899C109.38 10.8435 109.303 11.3452 109.143 12.0894L108.669 14.2889C109.59 14.1291 110.516 13.9471 111.464 13.7432C111.685 13.1368 111.911 12.5855 112.153 12.0894C112.942 10.4686 113.741 9.65828 114.546 9.65828C115.097 9.65828 115.378 9.9725 115.378 10.5954C115.378 10.8656 115.301 11.3617 115.147 12.0783L114.976 12.8832C115.224 12.817 115.472 12.7509 115.72 12.6792C116.359 12.4973 116.982 12.343 117.6 12.2051C117.677 11.731 117.721 11.3672 117.721 11.1026C117.721 10.408 117.506 9.85673 117.076 9.43777C116.652 9.01329 116.084 8.80382 115.362 8.80382C113.862 8.80382 112.605 9.95596 111.58 12.2547C111.585 12.1941 111.596 12.139 111.602 12.1004C111.674 11.6318 111.707 11.2955 111.707 11.1026C111.707 10.3915 111.497 9.82366 111.084 9.4102C110.676 8.99675 110.119 8.78728 109.413 8.78728C107.897 8.78728 106.619 9.94494 105.577 12.2603C105.659 11.7035 105.703 11.2459 105.703 10.8766C105.703 10.2261 105.544 9.71341 105.224 9.33855C104.904 8.95817 104.474 8.76522 103.934 8.76522C103.443 8.76522 102.953 8.94714 102.467 9.31649C102.131 9.56456 101.845 9.87328 101.613 10.2426C101.354 8.9692 100.786 7.90525 99.9041 7.03976C98.6582 5.80492 97.0209 5.1875 94.9868 5.1875H94.9702C92.9361 5.1875 91.2988 5.79941 90.0529 7.02322L90.0419 7.0122Z"
                      fill="white"
                    />
                    <path
                      d="M129.805 18.848H133.543V13.5117C132.506 13.0817 131.255 12.6682 129.805 12.3485V18.848Z"
                      fill="white"
                    />
                    <path
                      d="M99.9095 17.2989C100.422 16.7752 100.83 16.1798 101.133 15.5128C99.5071 15.5955 97.947 15.6065 96.453 15.5569C96.0671 15.8656 95.571 16.02 94.9701 16.02C94.2976 16.02 93.7518 15.7994 93.3439 15.3584C91.6074 15.1931 89.9867 14.9505 88.4872 14.6418C88.7739 15.6947 89.27 16.5878 89.9701 17.332C91.1664 18.5668 92.8367 19.1842 94.9701 19.1842C97.1035 19.1842 98.6802 18.5558 99.915 17.2989H99.9095Z"
                      fill="white"
                    />
                    <path
                      d="M105.102 15.182C104.215 15.2867 103.344 15.3694 102.489 15.4301L101.706 19.107C102.181 18.8535 102.605 18.7211 102.985 18.7211C103.41 18.7211 103.801 18.8424 104.16 19.085C104.441 17.6241 104.749 16.3176 105.097 15.182H105.102Z"
                      fill="white"
                    />
                    <path
                      d="M111.464 14.118C110.516 14.322 109.584 14.5039 108.669 14.6638L107.716 19.107C108.184 18.8534 108.614 18.7211 108.995 18.7211C109.419 18.7211 109.805 18.8424 110.158 19.085C110.533 17.1445 110.968 15.4907 111.464 14.118Z"
                      fill="white"
                    />
                    <path
                      d="M117.423 13.4951C117.44 13.4234 117.451 13.3683 117.456 13.3297C117.511 13.0541 117.561 12.806 117.599 12.58C116.988 12.7178 116.359 12.8777 115.72 13.0596C115.472 13.1313 115.224 13.1974 114.975 13.2636L114.501 15.4907L114.452 15.7608C114.319 16.4003 114.253 16.8468 114.253 17.1004C114.253 17.7288 114.419 18.2305 114.749 18.5998C115.086 18.9692 115.532 19.1511 116.1 19.1511C117.291 19.1511 118.178 18.462 118.763 17.0839C118.818 16.9571 118.862 16.8413 118.906 16.731V18.8534H122.644V14.0519C122.644 12.7564 123.129 12.1114 124.099 12.1114C124.975 12.1114 125.411 12.7013 125.411 13.8755V18.8589H129.149V13.214C129.149 12.8611 129.127 12.5249 129.088 12.2162C126.348 11.709 122.941 11.5712 118.906 12.3209V15.5624C118.796 15.612 118.708 15.7663 118.636 16.0199C118.614 16.0916 118.603 16.1467 118.592 16.1853C118.195 17.4256 117.726 18.0486 117.181 18.0486C116.839 18.0486 116.673 17.8115 116.673 17.3319C116.673 17.1996 116.695 17.0177 116.734 16.7807L117.418 13.5061L117.423 13.4951Z"
                      fill="white"
                    />
                    <path
                      d="M35.3732 6.28998L35.3842 6.29549V6.28998H35.3787H35.3732Z"
                      fill="white"
                    />
                    <path
                      d="M4.46913 7.75635H0.5V17.7123H7.35777V15.2756H4.46913V7.75635Z"
                      fill="white"
                    />
                    <path
                      d="M12.3579 7.54138C9.31491 7.54138 6.83972 9.65274 6.83972 12.7674C6.83972 15.8821 9.32594 17.8556 12.38 17.8556C15.434 17.8556 17.9202 15.9537 17.9202 12.7674C17.9202 9.58108 15.4009 7.54138 12.3579 7.54138ZM12.38 15.2646C11.2774 15.2646 10.9522 13.7983 10.9522 12.6682C10.9522 11.6153 11.2223 10.1158 12.38 10.1158C13.5376 10.1158 13.8077 11.6097 13.8077 12.6682C13.8077 13.7983 13.488 15.2646 12.38 15.2646Z"
                      fill="white"
                    />
                    <path
                      d="M24.3641 9.95043C25.2847 9.83466 25.8966 10.1158 26.4754 10.5899V7.81151C25.6044 7.5469 24.7665 7.54138 23.8404 7.54138C20.5273 7.54138 17.9969 9.93389 17.9969 12.8336C17.9969 15.7332 20.5162 17.8666 23.7356 17.8666C24.4688 17.8666 25.8084 17.7454 26.4699 17.4697V14.8732C25.8084 15.3087 25.213 15.4245 24.3641 15.3143C23.2064 15.215 22.0598 14.0298 22.0598 12.6847C22.0598 11.3396 22.8426 10.1379 24.3586 9.94491L24.3641 9.95043Z"
                      fill="white"
                    />
                    <path
                      d="M37.3136 7.74533H32.8594C32.8594 7.74533 30.7205 11.5932 30.6433 11.7365V7.74533H26.6521V17.7288H30.6433V13.6549L32.7822 17.7122H37.4184L34.1824 12.5083L37.3191 7.73981L37.3136 7.74533Z"
                      fill="white"
                    />
                    <path
                      d="M45.8636 7.74536H37.3685V10.3694H39.5846L39.5957 17.7178H43.5979L43.6089 10.3694H45.8636V7.74536Z"
                      fill="white"
                    />
                    <path
                      d="M63.6419 12.7233L61.2825 7.78949H56.9275V17.7509L61.0069 17.7619V12.9769L63.1954 17.7509H67.589V7.78949H63.5978L63.6419 12.7233Z"
                      fill="white"
                    />
                    <path
                      d="M51.134 7.53589C48.0194 7.53589 45.4615 9.61968 45.4615 12.7399C45.4615 15.86 47.9146 17.8722 51.0458 17.8722H51.0569C54.1825 17.8722 56.8121 15.9207 56.8121 12.7399C56.8121 9.55904 54.2542 7.53589 51.1395 7.53589H51.134ZM51.134 15.2095C50.0039 15.2095 49.6732 13.7873 49.6732 12.6627C49.6732 11.6098 49.9488 10.0827 51.134 10.0827C52.3193 10.0827 52.5949 11.6042 52.5949 12.6627C52.5949 13.7928 52.2641 15.2095 51.134 15.2095Z"
                      fill="white"
                    />
                    <path
                      d="M78.835 25H77.6333V0H78.835V12.4972V25Z"
                      fill="white"
                    />
                  </svg>
`;

document.getElementById('locktonSvg_py').innerHTML = svg;


// tutar_py değişkenindeki HTML içeriği
const currentSelection_py = `
<div class="wrapper2">
  <form class="form-inline">
    <label class="sr-only" for="inlineFormInputGroup">Amount</label>
    <div class="input-group mb-2 mr-sm-2 mb-sm-0">
      <div class="input-group-addon currency-symbol" id="currencySubAmountDiv">$</div>
      <input type="text" class="form-control currency-amount" style="width: 156px; font-family: 'Rubik' !important;" id="inlineFormInputGroup" placeholder="0" size="8">
      <div style="background: #e4e4e469;" class="input-group-addon currency-addon">
        <select class="currency-selector">
          <option data-symbol="$" data-placeholder="0" selected>USD</option>
          <option data-symbol="€" data-placeholder="0">EUR</option>
          <option data-symbol="£" data-placeholder="0">GBP</option>
          <option data-symbol="₺" data-placeholder="0">TL</option>
        </select>
      </div>
    </div>
  </form>
</div>
`;

document.getElementById('currentSelection_py').innerHTML = currentSelection_py;



// Tüm checkbox'ları seç
var checkboxes = document.querySelectorAll(".form-check-input");

// Her bir checkbox değiştiğinde
checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    // Seçilen checkbox'ların sayısını bul
    var selectedCount = document.querySelectorAll(
      ".form-check-input:checked"
    ).length;

    // Seçilen checkbox'ların sayısını yazdır
    document.getElementById("selected-count").textContent = selectedCount;
  });
});
function selectCurrency(event, currency, buttonId) {
  const dropdownButton = document.getElementById(buttonId);
  dropdownButton.textContent = currency;
  const dropdownMenu = event.target.closest(".dropdown-menu");
  // dropdownMenu.classList.remove("show");
  event.preventDefault();
}

function stopPropagation(event) {
  event.stopPropagation();
}

function updateCiroParaBirimi() {
  const dropdownButton5 = document.getElementById("dropdownMenuButton5");
  const ciroParaBirimi = document.getElementById("ciroParaBirimi");

  const selectedCurrency = dropdownButton5.textContent.trim();
  switch (selectedCurrency) {
    case "TL":
      ciroParaBirimi.textContent = "TL";
      break;
    case "USD":
      ciroParaBirimi.textContent = "USD";
      break;
    case "EURO":
      ciroParaBirimi.textContent = "EURO";
      break;
    default:
      ciroParaBirimi.textContent = "";
      break;
  }
}

function updateTutarParaBirimi1() {
  const dropdownButton1 = document.getElementById("dropdownMenuButton1");
  const tutarParaBirimi1 = document.getElementById("tutarParaBirimi1");

  const selectedCurrency = dropdownButton1.textContent.trim();
  switch (selectedCurrency) {
    case "TL":
      tutarParaBirimi1.textContent = "TL";
      break;
    case "USD":
      tutarParaBirimi1.textContent = "USD";
      break;
    case "EURO":
      tutarParaBirimi1.textContent = "EURO";
      break;
    default:
      tutarParaBirimi1.textContent = "";
      break;
  }
}

function updateBedelParaBirimi1() {
  const dropdownButton2 = document.getElementById("dropdownMenuButton2");
  const bedelParaBirimi2 = document.getElementById("bedelParaBirimi2");

  const selectedCurrency = dropdownButton2.textContent.trim();
  switch (selectedCurrency) {
    case "TL":
      bedelParaBirimi2.textContent = "TL";
      break;
    case "USD":
      bedelParaBirimi2.textContent = "USD";
      break;
    case "EURO":
      bedelParaBirimi2.textContent = "EURO";
      break;
    default:
      bedelParaBirimi2.textContent = "";
      break;
  }
}
function updateBedelParaBirimi2() {
  const dropdownButton3 = document.getElementById("dropdownMenuButton3");
  const bedelParaBirimi3 = document.getElementById("bedelParaBirimi3");

  const selectedCurrency = dropdownButton3.textContent.trim();
  switch (selectedCurrency) {
    case "TL":
      bedelParaBirimi3.textContent = "TL";
      break;
    case "USD":
      bedelParaBirimi3.textContent = "USD";
      break;
    case "EURO":
      bedelParaBirimi3.textContent = "EURO";
      break;
    default:
      bedelParaBirimi3.textContent = "";
      break;
  }
}
function updateBrutParaBirimi() {
  const dropdownButton4 = document.getElementById("dropdownMenuButton4");
  const brutParaBirimi = document.getElementById("brutParaBirimi");

  const selectedCurrency = dropdownButton4.textContent.trim();
  switch (selectedCurrency) {
    case "TL":
      brutParaBirimi.textContent = "TL";
      break;
    case "USD":
      brutParaBirimi.textContent = "USD";
      break;
    case "EURO":
      brutParaBirimi.textContent = "EURO";
      break;
    default:
      brutParaBirimi.textContent = "";
      break;
  }
}
function checkQuestionFunction() {
  const checkboxTarih = document.querySelector(".soruTarih");
  const checkTarihDiv = document.getElementById("check__tarih");
  const soruTeklif = document.querySelector(".soruTeklif");
  const soruTeklifDiv = document.getElementById("check__teklif2");
  const sigortaliAdi = document.querySelector(".sigortaliAdi");
  const sigortaliAdiDiv = document.getElementById("sigortali_adi2");
  const adresBilgileri = document.querySelector(".adresBilgileri");
  const adresBilgileriDiv = document.getElementById("adresBilgileriDiv");
  const faaliyet = document.querySelector(".faaliyetInput");
  const faaliyetDiv = document.getElementById("faaliyetDiv");
  const personel = document.querySelector(".personelInput");
  const personelSayisiDiv = document.getElementById("personelSayisiDiv");
  const koordinat = document.querySelector(".koordinatInput");
  const koordinatDiv = document.getElementById("koordinatDiv");
  const gerekli = document.querySelector(".gerekliInput");
  const gerekliDiv = document.getElementById("gerekliDiv");
  const telefon = document.querySelector(".telefonInput");
  const telefonDiv = document.getElementById("telefonDiv");
  const onceki = document.querySelector(".oncekiInput");
  const oncekiDiv = document.getElementById("oncekiDiv");
  const hasar = document.querySelector(".hasarInput");
  const hasarDiv = document.getElementById("hasarDiv");

  const yanginTup = document.querySelector(".yanginTup");
  const yanginTupDiv = document.getElementById("yanginTupDiv");
  const yanginDolap = document.querySelector(".yanginDolap");
  const yanginDolapDiv = document.getElementById("yanginDolapDiv");
  const yanginHidrant = document.querySelector(".yanginHidrant");
  const yanginHidrantDiv = document.getElementById("yanginHidrantDiv");
  const yanginDuman = document.querySelector(".yanginDuman");
  const yanginDumanDiv = document.getElementById("yanginDumanDiv");
  const yanginDepo = document.querySelector(".yanginDepo");
  const yanginDepoDiv = document.getElementById("yanginDepoDiv");
  const yanginPompa = document.querySelector(".yanginPompa");
  const yanginPompaDiv = document.getElementById("yanginPompaDiv");
  const yanginPompa2 = document.querySelector(".yanginPompa2");
  const yanginPompaDiv2 = document.getElementById("yanginPompaDiv2");
  const yanginSprinkler = document.querySelector(".yanginSprinkler");
  const yanginSprinklerDiv = document.getElementById("yanginSprinklerDiv");
  const yanginLokal = document.querySelector(".yanginLokal");
  const yanginLokalDiv = document.getElementById("yanginLokalDiv");
  const bedelInput1 = document.querySelector(".bedelInput1");
  const bedelDiv1 = document.getElementById("bedelDiv1");
  const modelInput1 = document.querySelector(".modelInput1");
  const modelDiv1 = document.getElementById("modelDiv1");
  const markaInput1 = document.querySelector(".markaInput1");
  const markaDiv1 = document.getElementById("markaDiv1");
  const seriInput1 = document.querySelector(".seriInput1");
  const seriDiv1 = document.getElementById("seriDiv1");
  const yasInput1 = document.querySelector(".yasInput1");
  const yasDiv1 = document.getElementById("yasDiv1");
  const bedelInput2 = document.querySelector(".bedelInput2");
  const bedelDiv2 = document.getElementById("bedelDiv2");
  const modelInput2 = document.querySelector(".modelInput2");
  const modelDiv2= document.getElementById("modelDiv2");
  const markaInput2 = document.querySelector(".markaInput2");
  const markaDiv2 = document.getElementById("markaDiv2");
  const seriInput2 = document.querySelector(".seriInput2");
  const seriDiv2 = document.getElementById("seriDiv2");
  const yasInput2 = document.querySelector(".yasInput2");
  const yasDiv2 = document.getElementById("yasDiv2");
  const maviYaka = document.querySelector(".maviYaka");
  const maviYakaDiv = document.getElementById("maviYakaDiv");
  const beyazYaka = document.querySelector(".beyazYaka");
  const beyazYakaDiv = document.getElementById("beyazYakaDiv");
  const brutInput = document.querySelector(".brutInput");
  const brutInputDiv = document.getElementById("brutInputDiv");
  const ciroInput = document.querySelector(".ciroInput");
  const ciroInputDiv = document.getElementById("ciroInputDiv");


  if (checkboxTarih.checked) {
    checkTarihDiv.style.display = "flex";
  } else {
    checkTarihDiv.style.display = "none";
  }
  if (soruTeklif.checked) {
    soruTeklifDiv.style.display = "flex";
  } else {
    soruTeklifDiv.style.display = "none";
  }
  if (sigortaliAdi.checked) {
    sigortaliAdiDiv.style.display = "flex";
  } else {
    sigortaliAdiDiv.style.display = "none";
  }
  if (adresBilgileri.checked) {
    adresBilgileriDiv.style.display = "flex";
  } else {
    adresBilgileriDiv.style.display = "none";
  }
  if (faaliyet.checked) {
    faaliyetDiv.style.display = "flex";
  } else {
    faaliyetDiv.style.display = "none";
  }
  if (personel.checked) {
    personelSayisiDiv.style.display = "flex";
  } else {
    personelSayisiDiv.style.display = "none";
  }
  if (koordinat.checked) {
    koordinatDiv.style.display = "flex";
  } else {
    koordinatDiv.style.display = "none";
  }
  if (hasar.checked) {
    hasarDiv.style.display = "flex";
    document.getElementById("subQuestionDiv2").style.display = "block";
    
  } else {
    hasarDiv.style.display = "none";
    document.getElementById("subQuestionDiv2").style.display = "none";
  }
  if (gerekli.checked) {
    gerekliDiv.style.display = "flex";
  } else {
    gerekliDiv.style.display = "none";
  }
  if (telefon.checked) {
    telefonDiv.style.display = "flex";
  } else {
    telefonDiv.style.display = "none";
  }
  if (onceki.checked) {
    oncekiDiv.style.display = "flex";
  } else {
    oncekiDiv.style.display = "none";
  }
  if (yanginTup.checked) {
    yanginTupDiv.style.display = "flex";
  } else {
    yanginTupDiv.style.display = "none";
  }
  if (yanginDolap.checked) {
    yanginDolapDiv.style.display = "flex";
  } else {
    yanginDolapDiv.style.display = "none";
  }
  if (yanginHidrant.checked) {
    yanginHidrantDiv.style.display = "flex";
  } else {
    yanginHidrantDiv.style.display = "none";
  }
  if (yanginDuman.checked) {
    yanginDumanDiv.style.display = "flex";
  } else {
    yanginDumanDiv.style.display = "none";
  }
  if (yanginDepo.checked) {
    yanginDepoDiv.style.display = "flex";
  } else {
    yanginDepoDiv.style.display = "none";
  }
  if (yanginPompa.checked) {
    yanginPompaDiv.style.display = "flex";
  } else {
    yanginPompaDiv.style.display = "none";
  }
  if (yanginPompa2.checked) {
    yanginPompaDiv2.style.display = "flex";
  } else {
    yanginPompaDiv2.style.display = "none";
  }
  if (yanginSprinkler.checked) {
    yanginSprinklerDiv.style.display = "flex";
  } else {
    yanginSprinklerDiv.style.display = "none";
  }
  if (yanginLokal.checked) {
    yanginLokalDiv.style.display = "flex";
  } else {
    yanginLokalDiv.style.display = "none";
  }
  if (bedelInput1.checked) {
    bedelDiv1.style.display = "flex";
  } else {
    bedelDiv1.style.display = "none";
  }
  if (modelInput1.checked) {
    modelDiv1.style.display = "flex";
  } else {
    modelDiv1.style.display = "none";
  }
  if (markaInput1.checked) {
    markaDiv1.style.display = "flex";
  } else {
    markaDiv1.style.display = "none";
  }
  if (seriInput1.checked) {
    seriDiv1.style.display = "flex";
  } else {
    seriDiv1.style.display = "none";
  }
  if (yasInput1.checked) {
    yasDiv1.style.display = "flex";
  } else {
    yasDiv1.style.display = "none";
  }
  if (bedelInput2.checked) {
    bedelDiv2.style.display = "flex";
  } else {
    bedelDiv2.style.display = "none";
  }
  if (modelInput2.checked) {
    modelDiv2.style.display = "flex";
  } else {
    modelDiv2.style.display = "none";
  }
  if (markaInput2.checked) {
    markaDiv2.style.display = "flex";
  } else {
    markaDiv2.style.display = "none";
  }
  if (seriInput2.checked) {
    seriDiv2.style.display = "flex";
  } else {
    seriDiv2.style.display = "none";
  }
  if (yasInput2.checked) {
    yasDiv2.style.display = "flex";
  } else {
    yasDiv2.style.display = "none";
  }
  if (maviYaka.checked) {
    maviYakaDiv.style.display = "flex";
  } else {
    maviYakaDiv.style.display = "none";
  }
  if (beyazYaka.checked) {
    beyazYakaDiv.style.display = "flex";
  } else {
    beyazYakaDiv.style.display = "none";
  }
  if (brutInput.checked) {
    brutInputDiv.style.display = "flex";
  } else {
    brutInputDiv.style.display = "none";
  }
  if (ciroInput.checked) {
    ciroInputDiv.style.display = "flex";
  } else {
    ciroInputDiv.style.display = "none";
  }
}





// tarih__input__check input alanını al
var tarihInput = document.getElementById('tarih__input');
var hasarInput = document.getElementById('hasar__input');


// tarih__input__check__checkbox checkbox'unu al
var checkbox = document.getElementById('tarihCheckbox');
var checkbox2 = document.getElementById('hasarCheckbox');
// tarih__input__check input alanının değerini kontrol et
function checkTarihInput() {
    if (tarihInput.value.trim() !== '') { // Eğer input alanı doluysa
        checkbox.checked = true; // Checkbox'u seçili yap
    } else {
        checkbox.checked = false; // Checkbox'u seçimden kaldır
    }
}

function checkHasarInput() {
  if (hasarInput.value.trim() !== '') { // Eğer input alanı doluysa
      checkbox2.checked = true; // Checkbox'u seçili yap
  } else {
      checkbox2.checked = false; // Checkbox'u seçimden kaldır
  }
}





document.getElementById("PCRadio").addEventListener("click", function() {
  document.querySelector(".applyButton").style.display = "block";
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









