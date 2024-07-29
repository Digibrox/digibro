from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth.models import Group
from django.contrib.auth.models import User
from .models import FormVerisi
import json
from django.conf import settings
import os

def kaydet(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        kayit_yolu = os.path.join(settings.STATIC_ROOT, 'kayit.json')
        with open(kayit_yolu, 'w') as file:
            json.dump(data, file)
        return JsonResponse({'success': True})
    else:
        return JsonResponse({'error': 'Yanlış istek türü'})

from django.shortcuts import render
from django.contrib.auth.models import User, Group

def index(request):
    # Kullanıcı admin grubunda mı kontrol et
    is_admin = False
    if request.user.is_authenticated:
        admin_group_name = 'Admin'  # 'Admin' grubunun ismini gruplarınıza göre ayarlayın
        try:
            admin_group = Group.objects.get(name=admin_group_name)
            is_admin = admin_group in request.user.groups.all()
        except Group.DoesNotExist:
            admin_group = None

    # Tüm grupları al
    groups = Group.objects.all()

    # Tüm kullanıcıları ve e-posta adreslerini veritabanından al
    users_with_emails = []
    users = User.objects.all()
    for user in users:
        user_with_email = {
            'username': user.username,
            'email': user.email
        }
        users_with_emails.append(user_with_email)
      
    basliklar = [
        {
            'qsc_id': 1,
            'qsc_name': 'Ön Bilgi',
            'qsc_json_title': 'Ön Bilgi',
            'accordion_id': 'informationAccordion22',
            'accordion_input': 'accordion42',
            'accordion_label': 'accordion4Label2',
            'accordion_divClass': 'accordion4LabelDiv2',
            'Q1': {
                'question': 'Tarih:',
                'input_type': 'date'
            },
            'Q2': {
                'question': 'Poliçe / Teklif No:',
                'input_type': 'text'
            },
            'Q3':{
                "question": "Sigortalı Adı :",
                "input_type": "text"
            },
            'Q4':{
                "question": "Adres Bilgileri :",
                "inputName": "İl :",
                "input_type": "text",
                "inputName2": "İlçe :",
                "input_type2": "text",
                "inputName3": "Mahalle :",
                "input_type3": "text"
            },
            'Q5':{
                "question": "Faaliyet :",
                "input_type": "text",
                "inputName2": "Bina içerisindeki diğer faaliyetler :",
                "input_type2": "text"
            },
            'Q6':{
                "question": "Personel Sayısı :",
                "input_type": "text",
                "inputName2": "Vardiya Sayısı :",
                "input_type2": "number"
            },
            'Q7':{
                "question": "Koordinatlar,",
                "inputName": "N :",
                "input_type": "text",
                "inputName2": "E :",
                "input_type2": "text"
            },
            'Q8':{
                "question": "Gerekli Durumda İletişime Geçilecek Yetkili Kişi :",
                "input_type": "text"
            },
            'Q9':{
                "question": "Telefon :",
                "input_type": "text",
                "inputName2": "E-Mail :",
                "input_type2": "text"
            },
            'Q10':{
                "question": "Önceki Sigorta Şirketi :",
                "input_type": "text"
            },
            'Q11':{
                "question": "Hasar Geçmişi :",
                "inputName": "Tarih ve Tutar :",
                "input_type": "date",
                "currentSelection": " ",
                "textarea": "Olayı yazınız."
            },

        },
        {
            "qsc_id": 2,
            "qsc_name": "Hasar2",
            "qsc_json_title": "Hasar",
            "accordion_id": "HasarAccordion2",
            "accordion_input": "accordionHasar2",
            "accordion_label": "accordionHasarLabel2",
            "accordion_divClass": "accordionHasarDiv2",
            "Q1": {
                "question": "Hasar Teminatı ve Tutarı:",
                "inputName": "",
                "input_type": "text",
                "currentSelection": " ",
                "textarea": "Hasar nedenini ve ilgili iyileştirmeleri yazınız."
            }
        },
         {
            "qsc_id": 3,
            "qsc_name": "Yangın2",
            "qsc_json_title": "Yangın Önlemleri",
            "accordion_id": "yanginAccordion2",
            "accordion_input": "accordionYangin2",
            "accordion_label": "accordionYanginLabel2",
            "accordion_divClass": "accordionYanginDiv2",
            "Q1": {
                "question": "Yangın Tüpleri:",
                "radio": " ",
                "radio_option1": "Var",
                "radio_option2": "Yok",
                "inputName": "Adet :",
                "input_type": "text",
            },
            "Q2": {
                "question": "Yangın Dolapları:",
                "radio": " ",
                "radio_option1": "Var",
                "radio_option2": "Yok",
                "inputName": "Adet :",
                "input_type": "text",
            },
            "Q3": {
                "question": "Yangın Hidrantları:",
                "radio": " ",
                "radio_option1": "Var",
                "radio_option2": "Yok",
                "inputName": "Adet :",
                "input_type": "text",
            },
            "Q4": {
                "question": "Duman Dedektörleri:",
                "radio": " ",
                "radio_option1": "Var",
                "radio_option2": "Yok",
                "inputName": "Tesisin % kaçını kapsıyor? :",
                "input_type": "text",
                "placeholder": "%"
            },
            "Q5": {
                "question": "Yangın Suyu Deposu:",
                "radio": " ",
                "radio_option1": "Var",
                "radio_option2": "Yok",
                "inputName": "Depo Hacmi :",
                "input_type": "text",
                "placeholder": "m³"
            },
            "Q6": {
                "question": "Yangın Pompa Grubu:",
                "radio": " ",
                "radio_option1": "Elektrikli",
                "radio_option2": "Dizel",
                "radio_option3": "Dizel-Elektrikli",
                "radio_option4": "Yok",
                "inputName": "Açıklama :",
                "input_type": "text"
            },
            "Q7": {
                "question": "Yangın Pompası İçin Otomatik Jeneratör:",
                "radio": " ",
                "radio_option1": "Var",
                "radio_option2": "Yok",
                "inputName": "Tesisin % kaçını kapsıyor? :",
                "input_type": "text",
                "placeholder": "%"
            },
            "Q8": {
                "question": "Lokal Söndürme Sistemleri:",
                "radio": " ",
                "radio_option1": "Var",
                "radio_option2": "Yok"
            },
            "Q9": {
                "question": "Bina Bedeli Tutarı:",
                "currentSelection": " "
            },
            "Q10": {
                "question": "Bina Alanı (m²):",
                "inputName": "",
                "input_type": "number",
                "placeholder": "m²"
            },
            "Q11": {
                "question": "Demirbaş Bedeli Tutarı:",
                "currentSelection": " "
            },
            "Q12": {
                "question": "Dekorasyon Bedeli Tutarı:",
                "currentSelection": " "
            },
            "Q13": {
                "question": "Makina Bedeli Tutarı:",
                "currentSelection": " "
            },
            "Q14": {
                "question": "Emtia Tutarı:",
                "currentSelection": " "
            },
            
            
        },
        {
            "qsc_id": 4,
            "qsc_name": "Elektronik Cihaz2",
            "qsc_json_title": "Elektronik Cihaz",
            "accordion_id": "ECAccordion2",
            "accordion_input": "accordionEC2",
            "accordion_label": "accordionECLabel2",
            "accordion_divClass": "accordionECDiv2",
            "Q1": {
                "question": "Bedel:",
                "currentSelection": " "
            },
            "Q2": {
                "question": "Model:",
                "inputName": "",
                "input_type": "text"
            },
            "Q3": {
                "question": "Marka:",
                "inputName": "",
                "input_type": "text"
            },
            "Q4": {
                "question": "Seri Numarası:",
                "inputName": "",
                "input_type": "text"
            },
            "Q5": {
                "question": "Yaşı:",
                "inputName": "",
                "input_type": "number"
            },
        },
        {
            "qsc_id": 5,
            "qsc_name": "Makine Kırılması2",
            "qsc_json_title": "Makine Kırılması",
            "accordion_id": "MKAccordion2",
            "accordion_input": "accordionMK2",
            "accordion_label": "accordionMKLabel2",
            "accordion_divClass": "accordionMKDiv2",
            "Q1": {
                "question": "Bedel:",
                "currentSelection": " "
            },
            "Q2": {
                "question": "Model:",
                "inputName": "",
                "input_type": "text"
            },
            "Q3": {
                "question": "Marka:",
                "inputName": "",
                "input_type": "text"
            },
            "Q4": {
                "question": "Seri Numarası:",
                "inputName": "",
                "input_type": "text"
            },
            "Q5": {
                "question": "Yaşı:",
                "inputName": "",
                "input_type": "number"
            },
        },
        {
            "qsc_id": 6,
            "qsc_name": "İşveren Mali Mesuliyet2",
            "qsc_json_title": "İşveren Mali Mesuliyet",
            "accordion_id": "IMMAccordion2",
            "accordion_input": "accordionIMM2",
            "accordion_label": "accordionIMMLabel2",
            "accordion_divClass": "accordionIMMDiv2",
            "Q1": {
                "question": "Bedel:",
                "currentSelection": " "
            },
            "Q2": {
                "question": "Model:",
                "inputName": "",
                "input_type": "text"
            },
            "Q3": {
                "question": "Marka:",
                "inputName": "",
                "input_type": "text"
            },
            "Q4": {
                "question": "Seri Numarası:",
                "inputName": "",
                "input_type": "text"
            },
            "Q5": {
                "question": "Yaşı:",
                "inputName": "",
                "input_type": "number"
            },
        },
        {
            "qsc_id": 7,
            "qsc_name": "Şahıs Mali Mesuliyet2",
            "qsc_json_title": "Şahıs Mali Mesuliyet",
            "accordion_id": "TPLAccordion2",
            "accordion_input": "accordionTPL2",
            "accordion_label": "accordionTPLLabel2",
            "accordion_divClass": "accordionTPLDiv2",
            "Q1": {
                "question": "Ciro:",
                "currentSelection": " "
            },
            "Q2": {
                "question": "Ek Olarak İstenen Limit 1. Alternatif:",
                "currentSelection": " "
            },
            "Q3": {
                "question": "Ek Olarak İstenen Limit 2. Alternatif:",
                "currentSelection": " "
            },
            "Q4": {
                "question": "Ek Olarak İstenen Limit 3. Alternatif:",
                "currentSelection": " "
            }
        },
        {
            "qsc_id": 8,
            "qsc_name": "Hırsızlık Önlemleri2",
            "qsc_json_title": "Hırsızlık Önlemleri",
            "accordion_id": "HirsizlikAccordion2",
            "accordion_input": "accordionHirsizlik2",
            "accordion_label": "accordionHirsizlikLabel2",
            "accordion_divClass": "accordionHirsizlikDiv2",
            "Q1": {
                "question": "Tesis çevresi çevrili mi ?",
                "radio": " ",
                "radio_option1": "Evet",
                "radio_option2": "Hayır",
            },
            "Q2": {
                "question": "Bekçi köpeği var mı ?",
                "radio": " ",
                "radio_option1": "Var",
                "radio_option2": "Yok",
            },
            "Q3": {
               "question": "Çevre Aydınlatması var mı ?",
                "radio": " ",
                "radio_option1": "Var",
                "radio_option2": "Yok",
            },
            "Q4": {
                "question": "Kepenk var mı ?",
                "radio": " ",
                "radio_option1": "Var",
                "radio_option2": "Yok",
            },
            "Q5": {
                "question": "24 saat güvenlik var mı ?",
                "radio": " ",
                "radio_option1": "Var",
                "radio_option2": "Yok",
            },
            "Q6": {
                "question": "Kayıt alabilen kamera sistemi var mı ?",
                "radio": " ",
                "radio_option1": "Var",
                "radio_option2": "Yok",
            },
            "Q7": {
                "question": "Güvenlik şirketi ve/veya karakola bağlı alarm sistemi var mı ?",
                "radio": " ",
                "radio_option1": "Var",
                "radio_option2": "Yok",
            },
            "Q8": {
                "question": "Karakola bağlı alarm sistemi var mı ?",
                "radio": " ",
                "radio_option1": "Var",
                "radio_option2": "Yok",
                "textarea": "Ek tedbirleriniz varsa yazınız."
            }
        }
    ]



    context = {
        'is_admin': is_admin,
        'groups': groups,
        'users_with_emails': users_with_emails,
        'basliklar' : basliklar
    }

    return render(request, 'questions/index.html', context)

def get_emails_by_group(request):
    if request.method == 'GET':
        group_name = request.GET.get('group_name')
        users = User.objects.filter(groups__name=group_name)
        emails = [user.email for user in users]
        return JsonResponse({'emails': emails})

def form_gonder(request):
    if request.method == 'POST':
        # Form verilerini al
        tarih = request.POST.get('tarih')
        teklif_no = request.POST.get('teklif_no')
        sigortali_adi = request.POST.get('sigortali_adi')
        vkn = request.POST.get('vkn')

        # Form verilerini veritabanına kaydet
        form_verisi = FormVerisi(
            tarih=tarih,
            teklif_no=teklif_no,
            sigortali_adi=sigortali_adi,
            vkn=vkn
        )
        form_verisi.save()

        return JsonResponse({'success': True})

    return JsonResponse({'success': False})