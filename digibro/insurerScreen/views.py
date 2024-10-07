from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth.models import Group
from django.contrib.auth.models import User
from .models import FormVerisi

from django.conf import settings

from .get_qf import generate_questionnsire_forms
def dashboard_view(request):
    return render(request, 'insurerScreen/dashboard.html')
def index(request):
    # Kullanıcı admin grubunda mı kontrol et
    is_admin = False
    if request.user.is_authenticated:
        admin_group_name = 'Admin'  # 'Admin' grubunun ismini gruplarınıza göre ayarlayın
        admin_group = Group.objects.get(name=admin_group_name)

        # Kullanıcının "Admin" grubuna üye olup olmadığını kontrol et
        is_admin = admin_group in request.user.groups.all()

    context = {
        "is_admin": is_admin  # is_admin'i context'e ekle
    }

    basliklar = generate_questionnsire_forms()

    # basliklar = [
    #     {
    #         'qsc_id': 1,
    #         'qsc_name': 'Ön Bilgi',
    #         'qsc_json_title': 'Ön Bilgi',
    #         'accordion_id': 'informationAccordion22',
    #         'accordion_input': 'accordion42',
    #         'accordion_label': 'accordion4Label2',
    #         'accordion_divClass': 'accordion4LabelDiv2',
    #         'Q0': {
    #             'title_pyx': 'Ön Bilgi'
                
    #         },
    #         'Q1': {
    #             'question': 'Tarih:',
    #             'input_type': 'date'
    #         },
    #         'Q2': {
    #             'question': 'Poliçe / Teklif No:',
    #             'input_type': 'text'
    #         },
    #         'Q3':{
    #             "question": "Sigortalı Adı :",
    #             "input_type": "text"
    #         },
    #         'Q4':{
    #             "question": "Adres Bilgileri :",
    #             "inputName": "İl :",
    #             "input_type": "text",
    #             "inputName2": "İlçe :",
    #             "input_type2": "text",
    #             "inputName3": "Mahalle :",
    #             "input_type3": "text"
    #         },
    #         'Q11':{
    #             "question": "Hasar Geçmişi :",
    #             "inputName": "Tarih ve Tutar :",
    #             "input_type": "date",
    #             "currentSelection": " ",
    #             "textarea": "Olayı yazınız."
    #         },

    #     },
    #     {
    #         "qsc_id": 2,
    #         "qsc_name": "Hasar2",
    #         "qsc_json_title": "Hasar",
    #         "accordion_id": "HasarAccordion2",
    #         "accordion_input": "accordionHasar2",
    #         "accordion_label": "accordionHasarLabel2",
    #         "accordion_divClass": "accordionHasarDiv2",
    #         'Q0': {
    #             'title_pyx': 'Hasar'
                
    #         },
    #         "Q1": {
    #             "question": "Hasar Teminatı ve Tutarı:",
    #             "inputName": "",
    #             "input_type": "text",
    #             "currentSelection": " ",
    #             "textarea": "Hasar nedenini ve ilgili iyileştirmeleri yazınız."
    #         }
    #     },
    #      {
    #         "qsc_id": 3,
    #         "qsc_name": "Yangın2",
    #         "qsc_json_title": "Yangın Önlemleri",
    #         "accordion_id": "yanginAccordion2",
    #         "accordion_input": "accordionYangin2",
    #         "accordion_label": "accordionYanginLabel2",
    #         "accordion_divClass": "accordionYanginDiv2",
    #         'Q0': {
    #             'title_pyx': 'Yangın Önlemleri'
                
    #         },
    #         "Q1": {
    #             "question": "Yangın Tüpleri:",
    #             "radio": " ",
    #             "radio_option1": "Var",
    #             "radio_option2": "Yok",
    #             "inputName": "Adet :",
    #             "input_type": "text",
    #         },
    #         "Q2": {
    #             "question": "Yangın Dolapları:",
    #             "radio": " ",
    #             "radio_option1": "Var",
    #             "radio_option2": "Yok",
    #             "inputName": "Adet :",
    #             "input_type": "text",
    #         },
    #         "Q3": {
    #             "question": "Yangın Hidrantları:",
    #             "radio": " ",
    #             "radio_option1": "Var",
    #             "radio_option2": "Yok",
    #             "inputName": "Adet :",
    #             "input_type": "text",
    #         },
    #         "Q4": {
    #             "question": "Duman Dedektörleri:",
    #             "radio": " ",
    #             "radio_option1": "Var",
    #             "radio_option2": "Yok",
    #             "inputName": "Tesisin % kaçını kapsıyor? :",
    #             "input_type": "text",
    #             "placeholder": "%"
    #         },
    #         "Q5": {
    #             "question": "Yangın Suyu Deposu:",
    #             "radio": " ",
    #             "radio_option1": "Var",
    #             "radio_option2": "Yok",
    #             "inputName": "Depo Hacmi :",
    #             "input_type": "text",
    #             "placeholder": "m³"
    #         },
    #         "Q6": {
    #             "question": "Yangın Pompa Grubu:",
    #             "radio": " ",
    #             "radio_option1": "Elektrikli",
    #             "radio_option2": "Dizel",
    #             "radio_option3": "Dizel-Elektrikli",
    #             "radio_option4": "Yok",
    #             "inputName": "Açıklama :",
    #             "input_type": "text"
    #         },
    #         "Q7": {
    #             "question": "Yangın Pompası İçin Otomatik Jeneratör:",
    #             "radio": " ",
    #             "radio_option1": "Var",
    #             "radio_option2": "Yok",
    #             "inputName": "Tesisin % kaçını kapsıyor? :",
    #             "input_type": "text",
    #             "placeholder": "%"
    #         },
    #         "Q8": {
    #             "question": "Lokal Söndürme Sistemleri:",
    #             "radio": " ",
    #             "radio_option1": "Var",
    #             "radio_option2": "Yok"
    #         },
    #         "Q9": {
    #             "question": "Bina Bedeli Tutarı:",
    #             "currentSelection": " "
    #         },
    #         "Q10": {
    #             "question": "Bina Alanı (m²):",
    #             "inputName": "",
    #             "input_type": "number",
    #             "placeholder": "m²"
    #         },
    #         "Q11": {
    #             "question": "Demirbaş Bedeli Tutarı:",
    #             "currentSelection": " "
    #         },
    #         "Q12": {
    #             "question": "Dekorasyon Bedeli Tutarı:",
    #             "currentSelection": " "
    #         },
    #         "Q13": {
    #             "question": "Makina Bedeli Tutarı:",
    #             "currentSelection": " "
    #         },
    #         "Q14": {
    #             "question": "Emtia Tutarı:",
    #             "currentSelection": " "
    #         },
    # ]
    context = {
        'basliklar' : basliklar
    }
    return render(request, 'insurerScreen/index.html', context)
