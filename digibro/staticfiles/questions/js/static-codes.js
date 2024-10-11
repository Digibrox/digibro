// Sayfa yüklendiğinde input_checked_Q1 id'li input'u checked yap

// customerButton tıklandığında değerlerin atanması
document.getElementById("customerButton").addEventListener("click", function() {
    document.getElementById("input_1-1-1").value = "2024-08-29"; // Tarih formatı YYYY-MM-DD
    document.getElementById("broker-checkbox_informationAccordion2_Q1").checked = true;

    document.getElementById("input_1-2-1").value = "DGBXMTL001";
    document.getElementById("broker-checkbox_informationAccordion2_Q2").checked = true;
    document.getElementById("input_1-3-1").value = "Mutlu Akü";
    document.getElementById("broker-checkbox_informationAccordion2_Q3").checked = true;
    document.getElementById("input_1-4-1").value = "Ankara";
    document.getElementById("input_1-4-2").value = "Çankaya";
    document.getElementById("input_1-4-3").value = "Prof. Dr. Aziz Sancar";
    document.getElementById("broker-checkbox_informationAccordion2_Q4").checked = true;
    document.getElementById("input_1-5-1").value = "Pil İmalatı";
    document.getElementById("input_1-5-2").value = "Pil Kontrol";
    document.getElementById("broker-checkbox_informationAccordion2_Q5").checked = true;
    document.getElementById("input_1-6-1").value = "70";
    document.getElementById("input_1-6-2").value = "3";
    document.getElementById("broker-checkbox_informationAccordion2_Q6").checked = true;
    document.getElementById("input_1-7-1").value = "39.9179° N";
    document.getElementById("input_1-7-2").value = "32.8627° E";
    document.getElementById("broker-checkbox_informationAccordion2_Q7").checked = true;
    document.getElementById("input_1-8-1").value = "Oğuzhan YILDIRIM";
    document.getElementById("broker-checkbox_informationAccordion2_Q8").checked = true;
    document.getElementById("input_1-9-1").value = "+90 506 051 88 99";
    document.getElementById("input_1-9-2").value = "infoankara@mutluaku.com";
    document.getElementById("broker-checkbox_informationAccordion2_Q9").checked = true;
    document.getElementById("input_1-10-1").value = "AXA Sigorta";
    document.getElementById("broker-checkbox_informationAccordion2_Q10").checked = true;
    document.getElementById("input_1-11-1").value = "2024-05-24"; // Tarih formatı YYYY-MM-DD
    document.getElementById("1-11_current_selection").value = "7500"; 
    document.getElementById("broker-checkbox_informationAccordion2_Q11").checked = true;
    document.getElementById("textarea_1-11").value = "Tesis depolama alanındaki yetersiz havalandırma nedeniyle aşırı ısınma sonucu patlama meydana geldi."; // Tarih formatı YYYY-MM-DD

    
});

// resetCustomerButton tıklandığında değerlerin sıfırlanması
document.getElementById("resetCustomerButton").addEventListener("click", function() {
    document.getElementById("input_1-1-1").value = ""; // Tarih input sıfırlanır
    document.getElementById("broker-checkbox_informationAccordion2_Q1").checked = false;
    document.getElementById("input_1-2-1").value = ""; // Text input sıfırlanır
    document.getElementById("broker-checkbox_informationAccordion2_Q2").checked = false;
    document.getElementById("input_1-3-1").value = "";
    document.getElementById("broker-checkbox_informationAccordion2_Q3").checked = false;
    document.getElementById("input_1-4-1").value = "";
    document.getElementById("input_1-4-2").value = "";
    document.getElementById("input_1-4-3").value = "";
    document.getElementById("broker-checkbox_informationAccordion2_Q4").checked = false;
    document.getElementById("input_1-5-1").value = "";
    document.getElementById("broker-checkbox_informationAccordion2_Q5").checked = false;
    document.getElementById("input_1-5-2").value = "";
    document.getElementById("input_1-6-1").value = "";
    document.getElementById("input_1-6-2").value = "";
    document.getElementById("broker-checkbox_informationAccordion2_Q6").checked = false;
    document.getElementById("input_1-7-1").value = "";
    document.getElementById("input_1-7-2").value = "";
    document.getElementById("broker-checkbox_informationAccordion2_Q7").checked = false;
    document.getElementById("input_1-8-1").value = "";
    document.getElementById("broker-checkbox_informationAccordion2_Q8").checked = false;
    document.getElementById("input_1-9-1").value = "";
    document.getElementById("input_1-9-2").value = "";
    document.getElementById("broker-checkbox_informationAccordion2_Q9").checked = false;
    document.getElementById("input_1-10-1").value = "";
    document.getElementById("broker-checkbox_informationAccordion2_Q10").checked = false;
    document.getElementById("input_1-11-1").value = ""; 
    document.getElementById("1-11_current_selection").value = ""; 
    document.getElementById("textarea_1-11").value = ""; 
    document.getElementById("broker-checkbox_informationAccordion2_Q11").checked = false;

});

// Date input değiştiğinde checkbox'ı checked yap
document.getElementById("input_1-1-1").addEventListener("change", function() {
    document.getElementById("broker-checkbox_informationAccordion2_Q1").checked = true;
});
// Date input değiştiğinde checkbox'ı checked yap
document.getElementById("input_1-11-1").addEventListener("change", function() {
    document.getElementById("broker-checkbox_informationAccordion2_Q11").checked = true;
});