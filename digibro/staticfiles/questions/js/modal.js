// Radio count dropdown ve container'ı seç
const radioCountDropdown = document.getElementById('radioCount');
const radioContainer = document.getElementById('radioContainer');

// Input count dropdown ve container'ı seç
const inputCountDropdown = document.getElementById('inputCount');
const inputContainer = document.getElementById('inputContainer');

// Radio count dropdown'da seçim yapıldığında
radioCountDropdown.addEventListener('change', function() {
    // Önce mevcut içerikleri temizle
    radioContainer.innerHTML = '';

    // Seçilen değere göre radio button ve input oluştur
    const selectedValue = parseInt(this.value);
    for (let i = 1; i <= selectedValue; i++) {
        const label = document.createElement('label');
       
        
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'radioOption';
       

        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = `Radio ${i} text`;
        
        // Hepsini div içine ekle
        const div = document.createElement('div');
        div.className="modalDivRadio"
        div.appendChild(radio);
        div.appendChild(label);
        div.appendChild(input);
        
        radioContainer.appendChild(div);
    }
});

// Input count dropdown'da seçim yapıldığında
inputCountDropdown.addEventListener('change', function() {
    // Önce mevcut içerikleri temizle
    inputContainer.innerHTML = '';

    // Seçilen değere göre input oluştur
    const selectedValue = parseInt(this.value);
    for (let i = 1; i <= selectedValue; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = `Input ${i}`;
        
        inputContainer.appendChild(input);
     
    }
});

