var calculatorContent = document.getElementById('calculator-content');

// Hesap makinesi işlevselliği
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    var result;
    try {
        result = eval(document.getElementById('display').value);
        if (isNaN(result) || !isFinite(result)) {
            throw "Invalid expression";
        }
    } catch (error) {
        result = "Error";
    }
    document.getElementById('display').value = result;
}

var closeCalculator = document.getElementById('closeCalculator');
closeCalculator.addEventListener('click', function() {
    calculator.style.display = 'none';
});

var calculatorOpen = document.getElementById('calculatorOpen');
var calculator = document.getElementById('calculator');

calculatorOpen.addEventListener('click', function() {
    calculator.style.display = 'block';
});

// Klavye olaylarını dinle
var displayInput = document.getElementById('display');
displayInput.removeAttribute('readonly'); // Readonly özelliğini kaldır
displayInput.focus(); // Input alanına odaklan

displayInput.addEventListener('keydown', function(event) {
    // Enter tuşuna basıldığında işlem yap
    if (event.key === 'Enter') {
        event.preventDefault(); // Formun gönderilmesini engelle
        calculateResult(); // Hesaplama yap
    }
});


var closeNotes = document.getElementById('closeNotes');
closeNotes.addEventListener('click', function() {
    notes.style.display = 'none';
});
var notesOpen = document.getElementById('notesOpen');
var notes = document.getElementById('notes');

notesOpen.addEventListener('click', function() {
    notes.style.display = 'flex';
});

// addNote butonuna tıklama olayı
document.getElementById('addNote').addEventListener('click', function() {
    // notesAdd id'li div'in görünürlüğünü "block" yap
    document.getElementById('notesAdd').style.display = 'block';
});

// cancelButton butonuna tıklama olayı
document.getElementById('cancelButton').addEventListener('click', function() {
    // notesAdd id'li div'in görünürlüğünü "none" yap
    document.getElementById('notesAdd').style.display = 'none';
});
