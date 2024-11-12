function displayEditorContents() {
    // #editor altındaki .ql-editor içeriğini al
    const qlEditorContent1 = document.querySelector('#editor .ql-editor');
    const qlEditorContent2 = document.querySelector('#editor2 .ql-editor');

    let mailTextClient = '';
    let mailTextPlacement = '';

    // İlk editor içeriğini kontrol et
    if (qlEditorContent1) {
        const paragraphs1 = qlEditorContent1.querySelectorAll('p');
        let texts1 = [];
        
        for (let i = 0; i < paragraphs1.length; i++) {
            if (paragraphs1[i].textContent.includes("Saygılarımla,")) {
                break;
            }
            const text = paragraphs1[i].textContent.trim();
            if (text) {
                texts1.push(text);
            }
        }
        
        // İlk editor sonuçlarını birleştir
        const result1 = texts1.join('\n');
        mailTextClient += result1 + '\n'; // İlk içerik ile birleştir
    } else {
        console.error("#editor içeriği bulunamadı.");
    }

    // İkinci editor içeriğini kontrol et
    if (qlEditorContent2) {
        const paragraphs2 = qlEditorContent2.querySelectorAll('p');
        let texts2 = [];
        
        for (let i = 0; i < paragraphs2.length; i++) {
            if (paragraphs2[i].textContent.includes("Saygılarımla,")) {
                break;
            }
            const text = paragraphs2[i].textContent.trim();
            if (text) {
                texts2.push(text);
            }
        }

        // İkinci editor sonuçlarını birleştir
        const result2 = texts2.join('\n');
        mailTextPlacement += result2 + '\n'; // İkinci içerik ile birleştir
    } else {
        console.error("#editor2 içeriği bulunamadı.");
    }

    // mailTextClient ve mailTextPlacement değerlerini p etiketine yazdır ve id'lerini ekle
    const pClient = document.createElement('p');
    pClient.id = 'mailTextClient';
    pClient.textContent = mailTextClient;
    document.body.appendChild(pClient); // pClient etiketini body'ye ekle

    const pPlacement = document.createElement('p');
    pPlacement.id = 'mailTextPlacement';
    pPlacement.textContent = mailTextPlacement;
    document.body.appendChild(pPlacement); // pPlacement etiketini body'ye ekle

    // Konsola da yazdırmak isterseniz:
    console.log("mailTextClient:\n", mailTextClient);
    console.log("mailTextPlacement:\n", mailTextPlacement);
    const mailTextClientContent = document.getElementById('mailTextClient').textContent;
    console.log(mailTextClientContent); // mailTextClient içeriğini konsola yazdırır

const mailTextPlacementContent = document.getElementById('mailTextPlacement').textContent;
console.log(mailTextPlacementContent); // mailTextPlacement içeriğini konsola yazdırır
}

function getFormData() {
    displayEditorContents()
    let jsonData = {};

    // 1. Blok: Genel Bilgiler
    jsonData["input_1-1-1"] = document.getElementById('input_1-1-1').value;  // Tarih
    jsonData["input_1-2-1"] = document.getElementById('input_1-2-1').value;  // Pol numarası
    jsonData["input_1-3-1"] = document.getElementById('input_1-3-1').value;  // İsim
    jsonData["input_1-4-1"] = document.getElementById('input_1-4-1').value;  // Şehir
    jsonData["input_1-4-2"] = document.getElementById('input_1-4-2').value;  // İlçe
    jsonData["input_1-4-3"] = document.getElementById('input_1-4-3').value;  // Mahalle
    jsonData["input_1-5-1"] = document.getElementById('input_1-5-1').value;  // Faaliyet Adı
    jsonData["input_1-5-2"] = document.getElementById('input_1-5-2').value;  // Faaliyet Detayları
    jsonData["input_1-6-1"] = parseInt(document.getElementById('input_1-6-1').value);  // Faaliyet Puanı
    jsonData["input_1-6-2"] = parseInt(document.getElementById('input_1-6-2').value);  // Diğer Puan
    jsonData["input_1-7-1"] = document.getElementById('input_1-7-1').value;  // Enlem
    jsonData["input_1-7-2"] = document.getElementById('input_1-7-2').value;  // Boylam
    jsonData["input_1-8-1"] = document.getElementById('input_1-8-1').value;  // Kişi adı
    jsonData["input_1-9-1"] = document.getElementById('input_1-9-1').value;  // Telefon
    jsonData["input_1-9-2"] = document.getElementById('input_1-9-2').value;  // E-posta
    jsonData["input_1-10-1"] = document.getElementById('input_1-10-1').value;  // Sigorta Şirketi
    jsonData["input_1-11-1"] = document.getElementById('input_1-11-1').value;  // Tarih
    jsonData["1-11-2_current_selection"] = document.getElementById('1-11_current_selection').value;  // Tutar Seçimi
    jsonData["textarea_1-11-3"] = document.getElementById('textarea_1-11').value;  // Olaylar açıklaması

    // 2. Blok: Diğer Değerler
    jsonData["input_2-1-1"] = document.getElementById('input_2-1-1').value;  // Miktar
    jsonData["2-1-2_current_selection"] = document.getElementById('2-1_current_selection').value;  // Para birimi
    jsonData["textarea_2-1-3"] = document.getElementById('textarea_2-1').value;  // Açıklama

    // 3. Blok: Yangın Accordion
    let yanginAccordionRadioQ1_3_1_1 = document.querySelector('input[name="radio_3-1"]:checked');
    jsonData["yanginAccordion_radio_Q1_3-1-1"] = yanginAccordionRadioQ1_3_1_1 ? yanginAccordionRadioQ1_3_1_1.value : null;  // Var/Yok seçimi

    jsonData["input_3-1-1"] = document.getElementById('input_3-1-1').value;

    let yanginAccordionRadioQ1_3_2_1 = document.querySelector('input[name="radio_3-2"]:checked');
    jsonData["yanginAccordion_radio_Q1_3-2-1"] = yanginAccordionRadioQ1_3_2_1 ? yanginAccordionRadioQ1_3_2_1.value : null;  // Var/Yok seçimi

    jsonData["input_3-2-1"] = document.getElementById('input_3-2-1').value;

    let yanginAccordionRadioQ1_3_3_1 = document.querySelector('input[name="radio_3-3"]:checked');
    jsonData["yanginAccordion_radio_Q1_3-3-1"] = yanginAccordionRadioQ1_3_3_1 ? yanginAccordionRadioQ1_3_3_1.value : null;  // Var/Yok seçimi

    jsonData["input_3-3-1"] = document.getElementById('input_3-3-1').value;
    
    let yanginAccordionRadioQ1_3_4_1 = document.querySelector('input[name="radio_3-4"]:checked');
    jsonData["yanginAccordion_radio_Q1_3-4-1"] = yanginAccordionRadioQ1_3_4_1 ? yanginAccordionRadioQ1_3_4_1.value : null;  // Var/Yok seçimi

    jsonData["input_3-4-1"] = document.getElementById('input_3-4-1').value;

    let yanginAccordionRadioQ1_3_5_1 = document.querySelector('input[name="radio_3-5"]:checked');
    jsonData["yanginAccordion_radio_Q1_3-5-1"] = yanginAccordionRadioQ1_3_5_1 ? yanginAccordionRadioQ1_3_5_1.value : null;  // Var/Yok seçimi

    jsonData["input_3-5-1"] = document.getElementById('input_3-5-1').value;

    let yanginAccordionRadioQ1_3_6_1 = document.querySelector('input[name="radio_3-6"]:checked');
    jsonData["yanginAccordion_radio_Q1_3-6-1"] = yanginAccordionRadioQ1_3_6_1 ? yanginAccordionRadioQ1_3_6_1.value : null;  // Var/Yok seçimi

    jsonData["input_3-6-1"] = document.getElementById('input_3-6-1').value;

    let yanginAccordionRadioQ1_3_7_1 = document.querySelector('input[name="radio_3-7"]:checked');
    jsonData["yanginAccordion_radio_Q1_3-7-1"] = yanginAccordionRadioQ1_3_7_1 ? yanginAccordionRadioQ1_3_7_1.value : null;  // Var/Yok seçimi

    jsonData["input_3-7-1"] = document.getElementById('input_3-7-1').value;

    let yanginAccordionRadioQ1_3_8_1 = document.querySelector('input[name="radio_3-8"]:checked');
    jsonData["yanginAccordion_radio_Q1_3-8-1"] = yanginAccordionRadioQ1_3_8_1 ? yanginAccordionRadioQ1_3_8_1.value : null;  // Var/Yok seçimi

    jsonData["3-9-1_current_selection"] = document.getElementById('3-9_current_selection').value;  // Tutar Seçimi
    jsonData["input_3-10-1"] = document.getElementById('input_3-10-1').value;
    jsonData["3-11-1_current_selection"] = document.getElementById('3-11_current_selection').value;  // Tutar Seçimi
    jsonData["3-12-1_current_selection"] = document.getElementById('3-12_current_selection').value;  // Tutar Seçimi
    jsonData["3-13-1_current_selection"] = document.getElementById('3-13_current_selection').value;  // Tutar Seçimi
    jsonData["3-14-1_current_selection"] = document.getElementById('3-14_current_selection').value;  // Tutar Seçimi

     // 4. Blok: EC Accordion
     jsonData["4-1-1_current_selection"] = document.getElementById('4-1_current_selection').value;  // Tutar Seçimi
     jsonData["input_4-2-1"] = document.getElementById('input_4-2-1').value;
     jsonData["input_4-3-1"] = document.getElementById('input_4-3-1').value;
     jsonData["input_4-4-1"] = document.getElementById('input_4-4-1').value;
     jsonData["input_4-5-1"] = document.getElementById('input_4-5-1').value;

     // 5. Blok: MK Accordion
     jsonData["5-1-1_current_selection"] = document.getElementById('5-1_current_selection').value;  // Tutar Seçimi
     jsonData["input_5-2-1"] = document.getElementById('input_5-2-1').value;
     jsonData["input_5-3-1"] = document.getElementById('input_5-3-1').value;
     jsonData["input_5-4-1"] = document.getElementById('input_5-4-1').value;
     jsonData["input_5-5-1"] = document.getElementById('input_5-5-1').value;

     // 6. Blok: IMM Accordion
     jsonData["6-1-1_current_selection"] = document.getElementById('6-1_current_selection').value;  // Tutar Seçimi
     jsonData["input_6-2-1"] = document.getElementById('input_6-2-1').value;
     jsonData["input_6-3-1"] = document.getElementById('input_6-3-1').value;
     jsonData["input_6-4-1"] = document.getElementById('input_6-4-1').value;
     jsonData["input_6-5-1"] = document.getElementById('input_6-5-1').value;

     // 7. Blok: TPL Accordion
     jsonData["7-1-1_current_selection"] = document.getElementById('7-1_current_selection').value;  // Tutar Seçimi
     jsonData["7-2-1_current_selection"] = document.getElementById('7-2_current_selection').value;  // Tutar Seçimi
     jsonData["7-3-1_current_selection"] = document.getElementById('7-3_current_selection').value;  // Tutar Seçimi
     jsonData["7-4-1_current_selection"] = document.getElementById('7-4_current_selection').value;  // Tutar Seçimi
     // 8. Blok: Hırsızlık Accordion
     let HirsizlikAccordion_radio_Q1_1 = document.querySelector('input[name="radio_8-1"]:checked');
     jsonData["HirsizlikAccordion_radio_Q1_8-1-1"] = HirsizlikAccordion_radio_Q1_1 ? HirsizlikAccordion_radio_Q1_1.value : null;  
     let HirsizlikAccordion_radio_Q2_1 = document.querySelector('input[name="radio_8-2"]:checked');
     jsonData["HirsizlikAccordion_radio_Q1_8-2-1"] = HirsizlikAccordion_radio_Q2_1 ? HirsizlikAccordion_radio_Q2_1.value : null;  
     let HirsizlikAccordion_radio_Q3_1 = document.querySelector('input[name="radio_8-3"]:checked');
     jsonData["HirsizlikAccordion_radio_Q1_8-3-1"] = HirsizlikAccordion_radio_Q3_1 ? HirsizlikAccordion_radio_Q3_1.value : null;  
     let HirsizlikAccordion_radio_Q4_1 = document.querySelector('input[name="radio_8-4"]:checked');
     jsonData["HirsizlikAccordion_radio_Q1_8-4-1"] = HirsizlikAccordion_radio_Q4_1 ? HirsizlikAccordion_radio_Q4_1.value : null;  
     let HirsizlikAccordion_radio_Q5_1 = document.querySelector('input[name="radio_8-5"]:checked');
     jsonData["HirsizlikAccordion_radio_Q1_8-5-1"] = HirsizlikAccordion_radio_Q5_1 ? HirsizlikAccordion_radio_Q5_1.value : null;  
     let HirsizlikAccordion_radio_Q6_1 = document.querySelector('input[name="radio_8-6"]:checked');
     jsonData["HirsizlikAccordion_radio_Q1_8-6-1"] = HirsizlikAccordion_radio_Q6_1 ? HirsizlikAccordion_radio_Q6_1.value : null;  
     let HirsizlikAccordion_radio_Q7_1 = document.querySelector('input[name="radio_8-7"]:checked');
     jsonData["HirsizlikAccordion_radio_Q1_8-7-1"] = HirsizlikAccordion_radio_Q7_1 ? HirsizlikAccordion_radio_Q7_1.value : null;  
     let HirsizlikAccordion_radio_Q8_1 = document.querySelector('input[name="radio_8-8"]:checked');
     jsonData["HirsizlikAccordion_radio_Q1_8-8-1"] = HirsizlikAccordion_radio_Q8_1 ? HirsizlikAccordion_radio_Q8_1.value : null;  
     jsonData["textarea_8-8-2"] = document.getElementById('textarea_8-8').value;  // Olaylar açıklaması

    //jsonData["qfqa_id"] = document.getElementById('qfqa_id').value;  
    jsonData["last_user"] = "Broker";  
    


 

    let popupAxaInputElement = document.getElementById("popupAxaInput");
    let mutluAkuInputElement = document.getElementById("mutluAkuInput");

    let mail_text_placementElement = document.getElementById('mailTextPlacement');
    let mailTextClientElement = document.getElementById('mailTextClient');

    // Eğer mutluAkuInput mevcut ve değeri varsa, onu kullan
    if (popupAxaInputElement && popupAxaInputElement.value) {
        jsonData["popupAxaInput"] = popupAxaInputElement.value;
    } else if (mutluAkuInputElement && mutluAkuInputElement.value) {
        // Eğer mutluAkuInput yoksa, mail_text_client değerini kullan
        jsonData["mutluAkuInput"] = mutluAkuInputElement.value;
    }
     
  
   

    // Eğer mutluAkuInput mevcut ve değeri varsa, onu kullan
    if (mail_text_placementElement && mail_text_placementElement.value) {
        jsonData["mail_text_placement"] = mail_text_placementElement.value;
    } else if (mailTextClientElement && mailTextClientElement.value) {
        // Eğer mutluAkuInput yoksa, mail_text_client değerini kullan
        jsonData["mail_text_client"] = mailTextClientElement.value;
    }
    jsonData["mailTextClient"] = document.getElementById('mailTextClient').textContent;
    jsonData["mailTextPlacement"] = document.getElementById('mailTextPlacement').textContent;
    return jsonData;
}

document.getElementById("save_answers_placement").addEventListener("click", function() {
    let dataToSend = getFormData();
    // Boş veya null değerleri kaldır
    for (const key in dataToSend) {
        if (dataToSend[key] === "" || dataToSend[key] === null) {
            delete dataToSend[key];
        }
    }
    console.log(dataToSend)
    fetch("http://185.87.252.236:5555/questions/save-data/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": getCookie('csrftoken')  // Django'nun CSRF koruması için token
        },
        body: JSON.stringify(dataToSend)
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Something went wrong with the request');
    })
    .then(data => {
        console.log("Success:", data);
        // İstersen burada kullanıcıya bir başarı mesajı gösterebilirsin
    })
    .catch((error) => {
        console.error("Error:", error);
    });
});


// CSRF tokenini almak için bir yardımcı fonksiyon
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        let cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
