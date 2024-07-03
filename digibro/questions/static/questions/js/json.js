var kayitYolu = "/static/questions/js/kayit.json";

document.getElementById("applyButton").addEventListener("click", function() {
    // Tarih ve teklif inputlarının değerlerini al
    var tarihInput = document.getElementById("tarih__input").value;
    var teklifInput = document.getElementById("teklif__no").value;

    // Boş alanları filtrele
    var data = {};
    if (tarihInput.trim() !== '') {
        data.tarih = tarihInput;
    }
    if (teklifInput.trim() !== '') {
        data.teklif = teklifInput;
    }

    // Kaydedilen bilgileri JSON dosyasına yaz
    kayitJSON(data);
});
function kayitJSON(data) {
    // JSON dosyasına veriyi kaydetmek için fetch API'sini kullan
    fetch(kayitYolu, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            console.log("Veri başarıyla kaydedildi.");
        } else {
            console.error("Veri kaydedilirken bir hata oluştu. Sunucu yanıtı:", response.statusText);
        }
    })
    .catch(error => {
        console.error("Veri kaydedilirken bir hata oluştu:", error);
    });
}
