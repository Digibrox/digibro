function  controlCheckBoxAndInputs(element){
  var a = element.closest('.questionInputDiv.mainQuestionDiv');
  var checkBoxRightDivs = a.getElementsByClassName("checkBoxRightDiv");
  const checkboxesAndInputs = a.querySelectorAll('input[type="checkbox"], input[type="text"]');

  var checkboxValue = 0
  var inputValue = 0

  checkboxesAndInputs.forEach(item => {
      var attr = item.getAttribute("attr")
      if (attr !== "broker-select" && attr !== "client-select" && attr !== "spec") {
        if (item.type === 'checkbox') {
            if (item.checked) {
                checkboxValue += 1
            }
        }

        if (item.type === 'text') {
            if (item.value.trim() !== '') {
                inputValue += 1
            }
        }
      }
  });

  if (checkboxValue > 0 || inputValue > 0){
    checkBoxRightDivs[0].children[0].children[0].checked = true
  }
  else{
    checkBoxRightDivs[0].children[0].children[0].checked = false
  }
}


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




function checkHasarInput() {
  if (hasarInput.value.trim() !== '') { // Eğer input alanı doluysa
      checkbox2.checked = true; // Checkbox'u seçili yap
  } else {
      checkbox2.checked = false; // Checkbox'u seçimden kaldır
  }
}

document.addEventListener('DOMContentLoaded', checkHasarInput);
var data = [
    {
        "Company": "Mutlu Akü",
        "Code": "DGBMA0001",
        "Policies": "P&C",
        "RelatedArea": "Yangın - EC - MK",
        "UpdatedTime": "17 May 2024",
        "image": "/static/clients/img/mutlu.jpg"
    },
    {
        "Company": "Mutlu Akü",
        "Code": "DGBMA0002",
        "Policies": "P&C",
        "RelatedArea": "EC - MK - IMM - TPL",
        "UpdatedTime": "27 March 2024",
        "image": "/static/clients/img/mutlu.jpg"
    },
    {
        "Company": "Mutlu Akü",
        "Code": "DGBMA0003",
        "Policies": "Health",
        "RelatedArea": "Yangın - MK - IMM - TPL",
        "UpdatedTime": "06 March 2024",
        "image": "/static/clients/img/mutlu.jpg"
    },
    {
        "Company": "Bera Holding",
        "Code": "DGBMA0004",
        "Policies": "Health",
        "RelatedArea": "Yangın - EC - MK - IMM - TPL",
        "UpdatedTime": "11 June 2024",
        "image": "/static/clients/img/bera.jpg"
    },
    {
        "Company": "Bera Holding",
        "Code": "DGBMA0005",
        "Policies": "P&C",
        "RelatedArea": "MK - IMM - TPL",
        "UpdatedTime": "09 July 2024",
        "image": "/static/clients/img/bera.jpg"
    },
    {
        "Company": "Bera Holding",
        "Code": "DGBMA0006",
        "Policies": "Health",
        "RelatedArea": "Yangın - MK - IMM - TPL",
        "UpdatedTime": "30 September 2023",
        "image": "/static/clients/img/bera.jpg"
    }
];

var products = "";
var Codes = "";
var Policiess = "";
var RelatedArea = "";
var UpdatedTime = "";
var CompanyNames = ""; 

var policiesArray = [];
var companyNamesArray = []; 

for (var i = 0; i < data.length; i++) {
    var Company = data[i].Company; 
    var Code = data[i].Code;
    var Policies = data[i].Policies;
    var RelatedAreaValue = data[i].RelatedArea;
    var UpdatedTime = data[i].UpdatedTime;
    var rawUpdatedTime = UpdatedTime.replace("$", "");
    rawUpdatedTime = parseInt(rawUpdatedTime.replace(",", ""));
    var image = data[i].image;

    products += "<div class='col-sm-4 product' data-Code='" + Code + "' data-Policies='" + Policies + "' data-RelatedArea='" + RelatedAreaValue + "' data-Company='" + Company + "' data-UpdatedTime='" + rawUpdatedTime + "'><div class='product-inner'><img src='" + image + "'><br />Company: " + Company + "<br />Code: " + Code + "<br />Policies: " + Policies + "<br />Related Area: " + RelatedAreaValue + "<br />Updated Time: " + UpdatedTime + "<br /><button class='custom-button btn-primary btn' data-index='" + i + "'>Open Questionnaire Form</button></div></div>";

    // Şirket isimlerini diziye ekle
    if (companyNamesArray.indexOf(Company) === -1) {
        companyNamesArray.push(Company);
    }

    //create dropdown of Codes
    if (Codes.indexOf("<option value='" + Code + "'>" + Code + "</option>") == -1) {
        Codes += "<option value='" + Code + "'>" + Code + "</option>";
    }

    if (policiesArray.indexOf(Policies) === -1) {
        policiesArray.push(Policies);
    }

    //create dropdown of RelatedArea
    if (RelatedArea.indexOf("<option value='" + RelatedAreaValue + "'>" + RelatedAreaValue + "</option>") == -1) {
        RelatedArea += "<option value='" + RelatedAreaValue + "'>" + RelatedAreaValue + "</option>";
    }
}

// create dropdown of CompanyNames
for (var k = 0; k < companyNamesArray.length; k++) {
    CompanyNames += "<option value='" + companyNamesArray[k] + "'>" + companyNamesArray[k] + "</option>";
}

// create dropdown of Policies
for (var j = 0; j < policiesArray.length; j++) {
    Policiess += "<option value='" + policiesArray[j] + "'>" + policiesArray[j] + "</option>";
}

$("#products").html(products);
$(".filter-Code").append(Codes);
$(".filter-Policies").append(Policiess);
$(".filter-RelatedArea").append(RelatedArea);
$(".filter-Company").append(CompanyNames); 

var filtersObject = {};

// Button click event
$(".custom-button").click(function() {
    var index = $(this).data("index");
    var clickedProduct = data[index];
    console.log("Clicked product:", clickedProduct);
});

// Filter change event
$(".filter").on("change", function() {
    var filterName = $(this).data("filter");
    var filterVal = $(this).val();

    if (filterVal == "") {
        delete filtersObject[filterName];
    } else {
        filtersObject[filterName] = filterVal;
    }

    var filters = "";

    for (var key in filtersObject) {
        if (filtersObject.hasOwnProperty(key)) {
            filters += "[data-" + key + "='" + filtersObject[key] + "']";
        }
    }

    if (filters == "") {
        $(".product").show();
    } else {
        $(".product").hide().filter(filters).show();
    }
});

// Search form submit event
$("#search-form").submit(function(e) {
    e.preventDefault();
    var query = $("#search-form input").val().toLowerCase();

    $(".product").hide().each(function() {
        var Code = $(this).data("Code").toLowerCase();

        if (query === '' || Code.indexOf(query) > -1) {
            $(this).show();
        }
    });
});




// Date input değiştiğinde checkbox'ı checked yap
document.getElementById("input_1-1-1").addEventListener("change", function() {
    document.getElementById("client-checkbox_informationAccordion2_11").checked = true;
});
// Date input değiştiğinde checkbox'ı checked yap
document.getElementById("input_1-11-1").addEventListener("change", function() {
    document.getElementById("client-checkbox_informationAccordion2_21").checked = true;
});


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
