// Sayfa yüklendiğinde input_checked_Q1 id'li input'u checked yap

// customerButton tıklandığında değerlerin atanması
document.getElementById("customerButton").addEventListener("click", function() {
    document.getElementById("1-1_input_type_answer").value = "2024-08-29"; // Tarih formatı YYYY-MM-DD
    document.getElementById("broker-checkbox_informationAccordion2_Q1").checked = true;

    document.getElementById("2-1_input_type_answer").value = "DGBXMTL001";
    document.getElementById("broker-checkbox_informationAccordion2_Q2").checked = true;
    document.getElementById("3-1_input_type_answer").value = "Mutlu Akü";
    document.getElementById("broker-checkbox_informationAccordion2_Q3").checked = true;
    document.getElementById("4-1_input_type_answer").value = "Ankara";
    document.getElementById("4-1_input_type_answer_2").value = "Çankaya";
    document.getElementById("4-1_input_type_answer_3").value = "Prof. Dr. Aziz Sancar";
    document.getElementById("broker-checkbox_informationAccordion2_Q4").checked = true;
    document.getElementById("5-1_input_type_answer").value = "Pil İmalatı";
    document.getElementById("5-1_input_type_answer_2").value = "Pil Kontrol";
    document.getElementById("broker-checkbox_informationAccordion2_Q5").checked = true;
    document.getElementById("6-1_input_type_answer").value = "70";
    document.getElementById("6-1_input_type_answer_2").value = "3";
    document.getElementById("broker-checkbox_informationAccordion2_Q6").checked = true;
    document.getElementById("7-1_input_type_answer").value = "39.9179° N";
    document.getElementById("7-1_input_type_answer_2").value = "32.8627° E";
    document.getElementById("broker-checkbox_informationAccordion2_Q7").checked = true;
    document.getElementById("8-1_input_type_answer").value = "Oğuzhan YILDIRIM";
    document.getElementById("broker-checkbox_informationAccordion2_Q8").checked = true;
    document.getElementById("9-1_input_type_answer").value = "+90 506 051 88 99";
    document.getElementById("9-1_input_type_answer_2").value = "infoankara@mutluaku.com";
    document.getElementById("broker-checkbox_informationAccordion2_Q9").checked = true;
    document.getElementById("10-1_input_type_answer").value = "AXA Sigorta";
    document.getElementById("broker-checkbox_informationAccordion2_Q10").checked = true;
    document.getElementById("11-1_input_type_answer").value = "2024-05-24"; // Tarih formatı YYYY-MM-DD
    document.getElementById("11-1_current_selection").value = "7500"; // Tarih formatı YYYY-MM-DD
    document.getElementById("broker-checkbox_informationAccordion2_Q11").checked = true;
    document.getElementById("textarea_1-11").value = "Tesis depolama alanındaki yetersiz havalandırma nedeniyle aşırı ısınma sonucu patlama meydana geldi."; // Tarih formatı YYYY-MM-DD

    
});

// resetCustomerButton tıklandığında değerlerin sıfırlanması
document.getElementById("resetCustomerButton").addEventListener("click", function() {
    document.getElementById("1-1_input_type_answer").value = ""; // Tarih input sıfırlanır
    document.getElementById("broker-checkbox_informationAccordion2_Q1").checked = false;

    document.getElementById("2-1_input_type_answer").value = ""; // Text input sıfırlanır
    document.getElementById("broker-checkbox_informationAccordion2_Q2").checked = false;
    document.getElementById("3-1_input_type_answer").value = "";
    document.getElementById("broker-checkbox_informationAccordion2_Q3").checked = false;
    document.getElementById("4-1_input_type_answer").value = "";
    document.getElementById("4-1_input_type_answer_2").value = "";
    document.getElementById("4-1_input_type_answer_3").value = "";
    document.getElementById("broker-checkbox_informationAccordion2_Q4").checked = false;
    document.getElementById("5-1_input_type_answer").value = "";
    document.getElementById("broker-checkbox_informationAccordion2_Q5").checked = false;
    document.getElementById("5-1_input_type_answer_2").value = "";
    document.getElementById("6-1_input_type_answer").value = "";
    document.getElementById("6-1_input_type_answer_2").value = "";
    document.getElementById("broker-checkbox_informationAccordion2_Q6").checked = false;
    document.getElementById("7-1_input_type_answer").value = "";
    document.getElementById("7-1_input_type_answer_2").value = "";
    document.getElementById("broker-checkbox_informationAccordion2_Q7").checked = false;
    document.getElementById("8-1_input_type_answer").value = "";
    document.getElementById("broker-checkbox_informationAccordion2_Q8").checked = false;
    document.getElementById("9-1_input_type_answer").value = "";
    document.getElementById("9-1_input_type_answer_2").value = "";
    document.getElementById("broker-checkbox_informationAccordion2_Q9").checked = false;
    document.getElementById("10-1_input_type_answer").value = "";
    document.getElementById("broker-checkbox_informationAccordion2_Q10").checked = false;
    document.getElementById("11-1_input_type_answer").value = ""; 
    document.getElementById("11-1_current_selection").value = ""; 
    document.getElementById("textarea_1-11").value = ""; 
    document.getElementById("broker-checkbox_informationAccordion2_Q11").checked = false;

});

// Date input değiştiğinde checkbox'ı checked yap
document.getElementById("1-1_input_type_answer").addEventListener("change", function() {
    document.getElementById("broker-checkbox_informationAccordion2_Q1").checked = true;
});
// Date input değiştiğinde checkbox'ı checked yap
document.getElementById("11-1_input_type_answer").addEventListener("change", function() {
    document.getElementById("broker-checkbox_informationAccordion2_Q11").checked = true;
});