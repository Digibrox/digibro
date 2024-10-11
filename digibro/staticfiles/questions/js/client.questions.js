    
      $(document).ready(function() {
        $(".filter-industry").change(function() {
            // Tüm kartları göstermek için
            $("#mutluCard, #beraCard, #enerjisaCard").show();

            var selectedOption = $(this).val();
            if (selectedOption === "Mutlu Akü") {
                $("#beraCard, #enerjisaCard").hide();
            } else if (selectedOption === "Bera Holding") {
                $("#mutluCard, #enerjisaCard").hide();
            } else if (selectedOption === "EnerjiSA") {
                $("#mutluCard, #beraCard").hide();
            }
        });
    });
    $(".btn").click(function () {
      var attr = $(this).attr("data-li");

      // İlk buton grubu
      if (attr !== "all") {
        $(".btn").removeClass("active");
        $(this).addClass("active");

        $(".item").each(function () {
          var itemClasses = $(this).attr("class").split(" ");
          if (itemClasses.includes(attr)) {
            $(this).show();
          } else {
            $(this).hide();
          }
        });
      } else {
        $(".btn").removeClass("active");
        $(this).addClass("active");
        $(".item").show();
      }

      // İkinci buton grubu
      $(".filter-btn").click(function () {
        var filterAttr = $(this).attr("data-li");

        // İlk buton grubundan seçilen sınıfı ve ikinci buton grubundan seçilen sınıfı birleştir
        var combinedClasses = attr + " " + filterAttr;

        // Tüm öğeleri gizle
        $(".item").hide();

        // İki sınıfa da sahip olan öğeleri göster
        $(".item")
          .filter("." + combinedClasses)
          .show();
      });
    });
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
  document.getElementById("client-search-div").style.marginRight = "0px";
}
const applyButton = document.getElementById("applyButton");
const titleP = document.getElementById("mainTitleP");

document
  .getElementById("closeCheckPanel")
  .addEventListener("click", closeCheckPanel);
function closeCheckPanel() {
 
  titleP.textContent = "SORU FORMU OLUŞTUR";
  document.getElementById("questionCheckDiv").style.display = "none";
  document.body.style.overflow = "auto";

}


document.addEventListener("DOMContentLoaded", function() {
  var applyButton = document.getElementById("applyButton");
  var questionCheckDiv = document.getElementById("questionCheckDiv");
  var mainDesc = document.getElementById("mainDesc");

  if (applyButton) {
    applyButton.addEventListener("click", function(event) {
      event.preventDefault();


      // Scroll to the top of the page
      document.documentElement.scrollTop = 0; // For modern browsers
      document.body.scrollTop = 0; // For older browsers

      // Make questionCheckDiv visible
      if (questionCheckDiv) {
        questionCheckDiv.style.display = "block";
      }
      
      // body'nin overflow özelliğini hidden yap
      document.body.style.overflow = "hidden";


    });
  }
});












const topDivImg = document.getElementById("topDivImg");
const cardImg = document.getElementById("cardImg");
const topDivName = document.getElementById("topDivP__check");
const cardName = document.getElementById("client__card__name");

topDivName.textContent = cardName.textContent;

topDivImg.src = cardImg.src;


