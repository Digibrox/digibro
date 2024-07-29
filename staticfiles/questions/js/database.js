

    // $(document).ready(function() {
    //     $(".filter-industry").change(function() {
    //         var selectedIndustry = $(this).val();
    //         $(".card-company").each(function() {
    //             if ($(this).text().trim() === selectedIndustry) {
    //                 $(this).parent().show();
    //             } else {
    //                 $(this).parent().hide();
    //             }
    //         });
    //     });
    // });

    var formData = new FormData(document.getElementById('myForm'));
    document.getElementById('sendQF').addEventListener('click', function() {
        var formData = new FormData(document.getElementById('myForm'));
    
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '{% url "questions:form_gonder" %}', true);
        xhr.setRequestHeader('X-CSRFToken', '{{ csrf_token }}');
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                if (response.success) {
                    alert('Form verileri başarıyla gönderildi!');
                } else {
                    alert('Form verileri gönderilirken bir hata oluştu!');
                }
            }
        };
        xhr.send(formData);
    });

    