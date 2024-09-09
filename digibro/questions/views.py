from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth.models import Group
from django.contrib.auth.models import User
from .models import FormVerisi
import json
from django.conf import settings
import os
from .get_qf import generate_questionnsire_forms
def dashboard_view(request):
    return render(request, 'questions/dashboard.html')
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
      
    # basliklar = [
    #     {
    #         'form_qsc_id': 1,
    #         'form_qsc_name': 'Questionnaire Form',
    #         'form_qsc_client': 'Mutlu Akü',
    #         'form_qsc_date': '25.25.2024',
    #         'form_last_user': 'client',
    #         'Q1': {
    #             'answer_id': '1-1_input_type_answer',
    #             'input_type': 'date'
    #         },
    #         'Q2': {
    #             'question': '2-1_input_type_answer',
    #             'input_type': 'text'
    #         },
    #         'Q3':{
    #             "question": "3-1_input_type_answer",
    #             "input_type": "text"
    #         },
    #         'Q4':{
    #             "question": "4-1_input_type_answer,
    #             "input_type": "text"
    #         },
    #         'Q5':{
    #             "question":"4-1_input_type_answer_2",
    #             "input_type": "text"
    #         },
    #         'Q6':{
    #             "question":"4-1_input_type_answer_3",
    #             "input_type": "text"
    #         },
    #         'Q7':{
    #             "question": "5-1_input_type_answer",
    #             "input_type": "text"
    #         },
    #         'Q8':{
    #             "question":"5-1_input_type_answer_2",
    #             "input_type": "text"
    #         },
    #         'Q9':{
    #             "question": "6-1_input_type_answer",
    #             "input_type": "number"
    #         },
    #         'Q10':{
    #             "question":"6-1_input_type_answer_2",
    #             "input_type": "number"
    #         },
    #         'Q11':{
    #             "question": "7-1_input_type_answer",
    #             "input_type": "text"
    #         },
    #         'Q12':{
    #             "question":"7-1_input_type_answer_2",
    #             "input_type": "text"
    #         },
    #         'Q13':{
    #             "question": "8-1_input_type_answer",
    #             "input_type": "text"
    #         },
    #         'Q14':{
    #             "question": "9-1_input_type_answer",
    #             "input_type": "text"
    #         },
    #         'Q15':{
    #             "question":"9-1_input_type_answer_2",
    #             "input_type": "text"
    #         },
    #         'Q16':{
    #             "question": "10-1_input_type_answer",
    #             "input_type": "text"
    #         },
    #         'Q17':{
    #             "question": "11-1_input_type_answer",
    #             "input_type": "date"
    #         },
    #         'Q18':{
    #             "question": "11-1_current_selection",
    #             "input_type": "number",
    #             "currencyClass": "11-1_currency"
    #         },
    #         'Q19':{
    #             "question": "1-2_input_type_answer",
    #             "input_type": "text"
    #         },
    #         'Q20':{
    #             "question": "1-2_current_selection",
    #             "input_type": "number"
    #             "currencyClass": "1-2_currency"
    #         },
    #         'Q21':{
    #             "question": "textarea_2-1",
    #             "input_type": "textarea"
    #         },
    #         'Q22':{
    #             "inputRadio": "radio_3-1",
    #             "labelRadio": "label_3-1",
    #             "inputRadio2": "radio_3-1",
    #             "labelRadio2": "label_3-1",
    #         },
    #         'Q23':{
    #             "question": "textarea_1-11",
    #             "input_type": "textarea"
    #         },
    #         'Q24':{
    #             "question": "textarea_1-11",
    #             "input_type": "textarea"
    #         },
    #         'Q25':{
    #             "question": "textarea_1-11",
    #             "input_type": "textarea"
    #         },
    #         'Q26':{
    #             "question": "textarea_1-11",
    #             "input_type": "textarea"
    #         },
    #         'Q27':{
    #             "question": "textarea_1-11",
    #             "input_type": "textarea"
    #         },
    #         'Q28':{
    #             "question": "textarea_1-11",
    #             "input_type": "textarea"
    #         },
    #         'Q29':{
    #             "question": "textarea_1-11",
    #             "input_type": "textarea"
    #         },
    #         'Q30':{
    #             "question": "textarea_1-11",
    #             "input_type": "textarea"
    #         },
    #         'Q31':{
    #             "question": "textarea_1-11",
    #             "input_type": "textarea"
    #         },
    #         'Q32':{
    #             "question": "textarea_1-11",
    #             "input_type": "textarea"
    #         },
    #         'Q33':{
    #             "question": "textarea_1-11",
    #             "input_type": "textarea"
    #         },
    #         'Q34':{
    #             "question": "textarea_1-11",
    #             "input_type": "textarea"
    #         },
    
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
    basliklar = generate_questionnsire_forms()


    context = {
<<<<<<< HEAD
        "is_admin": is_admin,  # is_admin'i context'e ekle
        'groups': groups,  # grupları context'e ekle
        'users_with_emails': users_with_emails,
        'data' : {
            'Categories' : ['P&C','Health','Cagro'],
            'Subcategories' : {
                'default' : ['Bilgilendirme Metni','Ön Bilgi','Hasar','Hırsızlık Önlemleri','Fotoğraflar'],
                'additional' : ['Yangın Önlemleri','Elektronik Cihaz','Makine Kırılması','İşveren Mali Mesuliyet','Şahıs Mali Mesuliyet']
            },
            'Bilgilendirme Metni' : {
                'default' : {
                    'qsdc_text' : '''İş bu form rizikoya ait bilgilerin temin edilmesi ve Ön Risk Analizi çalışmasının gerçekleştirilebilmesi \
                        adına talep edilmektedir.Formda yer alan rizikoya ait bilgi, fotoğraf ve önlemlerin eksik, yanlış veya tahrif edilmiş \
                        şekilde beyanı ve ibrazı sebebiyle oluşabilecek beyana aykırılık kaynaklı zararlar, formu dolduran kişi ve kurumun \
                        sorumluluğunda olacak olup AXA Sigorta A.Ş. bu gibi konularda sorumluluk kabul etmemektedir.\
                        \nRisk Bilgi Formu hazırlanması sürecinde ve sigorta teminatlarını kapsayacak teknik konularda şirketimizin her türlü \
                        yardım ve desteğe hazır olduğunu ayrıca belirtiriz.''',
                    'qsdc_check' : False
                },
                "Bilgilendirme Metni'ni okudum ve onaylıyorum." : 'check'
            },
            'Ön Bilgi' : {
                'default' : {
                    'qsdc_text' : 'Risk Bilgi Formu hazırlanması sürecinde ve sigorta teminatlarını kapsayacak teknik konularda şirketimizin her \
                        türlü yardım ve desteğe hazır olduğunu ayrıca belirtiriz.',
                    'qsdc_check' : True
                },
                'Tarih' : 'date',
                'Poliçe / Teklif No' : 'input',
                'Sigortalı Bilgileri' : {
                    'Sigortalı Adı' : 'input',
                    'VKN' : 'input'
                },
                'Adres Bilgileri' : {
                    'İl' : 'input',
                    'İlçe' : 'input',
                    'Mahalle' : 'input',
                    'Açık Adres' : 'textarea',
                },
                'Faaliyet Bilgisi' : {
                    'Faaliyet' : 'input',
                    'Bina içerisindeki diğer faaliyetler' : 'input'
                },
                'Personel/Vardiya' : {
                    'Personel Sayısı' : 'input',
                    'Vardiya Sayısı' : 'input'
                },
                'Koordinatlar' : {
                    'N' : 'input',
                    'E' : 'input'
                },
                'Gerekli Durumda İletişime Geçilecek Yetkili Kişi' : 'input',
                'İletişim' : {
                    'Telefon' : 'phone',
                    'E-Mail' : 'mail'
                },
                'Önceki Sigorta Şirketi' : 'input',
                'Hasar Geçmişi' : {
                    'Tarih' : 'date',
                    "Tutar" : {
                        "currency": ["TL","USD","EUR"],
                        "currency_text" : "Para Birimi Seçin"
                    }
                },
                'Olayı Yazınız.' : 'textarea'
            },
            'Hasar' : {
                'default' : {
                    'qsdc_text' : 'Risk Bilgi Formu hazırlanması sürecinde ve sigorta teminatlarını kapsayacak teknik konularda şirketimizin her \
                        türlü yardım ve desteğe hazır olduğunu ayrıca belirtiriz.',
                    'qsdc_check' : True
                },
                'Hasar Geçmişi' : {
                    "select" : ['Hasar Ücreti','Ödendi','Muallak'],
                    'Hasar Teminatı' : 'input',
                    "Hasar Bedeli Tutar" : {
                        "currency": ["TL","USD","EUR"],
                        "currency_text" : "Para Birimi Seçin"
                    }
                },
                'Hasar Açıklama' : {
                    'Hasar nedenini yazınız.' : 'textarea',
                    'İlgili iyileştirmeleri yazınız.' : 'textarea',
                }
            },
            'Yangın Önlemleri' : {
                'default' : {
                    'qsdc_text' : 'Risk Bilgi Formu hazırlanması sürecinde ve sigorta teminatlarını kapsayacak teknik konularda şirketimizin her \
                        türlü yardım ve desteğe hazır olduğunu ayrıca belirtiriz.',
                    'qsdc_check' : True
                },
                'Yangın Tüpleri' : {
                    "radio" : ["Yangın Tüpleri","Var","Yok"],
                    'Adet' : 'input'
                },
                'Yangın Dolapları' : {
                    "radio" : ["Yangın Dolapları","Var","Yok"],
                    'Adet' : 'input'
                },
                'Yangın Hidrantları' : {
                    "radio" : ["Yangın Hidrantları","Var","Yok"],
                    'Adet' : 'input'
                },
                'Duman Dedektörleri' : {
                    "radio" : ["Duman Dedektörleri","Var","Yok"],
                    'Tesisin % kaçını kapsıyor?' : 'int'
                },
                'Yangın Suyu Deposu' : {
                    "radio" : ["Yangın Suyu Deposu","Var","Yok"],
                    'Top' : 'float'
                },
                'Yangın Pompa Grubu' : {
                    "radio" : ["Yangın Pompa Grubu","Elektrikli","Dizel","Dizel-Elektrikli","Yok"],
                    'Açıklama' : 'input'
                },
                "radio" : ["Yangın Pompası İçin Otomatik Jeneratör","Var","Yok"],
                'Sprinkler Tesisatı' : {
                    "radio" : ["Sprinkler Tesisatı","Var","Yok"],
                    'Tesisin % kaçını kapsıyor?' : 'int'
                },
                "radio" : ["Lokal Söndürme Sistemleri","Var","Yok"],
                "Bina Bedeli Tutarı" : {
                    "currency": ["TL","USD","EUR"],
                    "currency_text" : "Para Birimi Seçin"
                },
                'Bina Alanı (m²)' : 'float',
                "Demirbaş Bedeli" : {
                    "currency": ["TL","USD","EUR"],
                    "currency_text" : "Para Birimi Seçin"
                },
                "Dekorasyon Bedeli" : {
                    "currency": ["TL","USD","EUR"],
                    "currency_text" : "Para Birimi Seçin"
                },
                "Makina Bedeli" : {
                    "currency": ["TL","USD","EUR"],
                    "currency_text" : "Para Birimi Seçin"
                },
                "Emtia" : {
                    "currency": ["TL","USD","EUR"],
                    "currency_text" : "Para Birimi Seçin"
                }
            },
            'Elektronik Cihaz' : {
                'default' : {
                    'qsdc_text' : 'Risk Bilgi Formu hazırlanması sürecinde ve sigorta teminatlarını kapsayacak teknik konularda şirketimizin her \
                        türlü yardım ve desteğe hazır olduğunu ayrıca belirtiriz.',
                    'qsdc_check' : True
                },
                "Bedel" : {
                    "currency": ["TL","USD","EUR"],
                    "currency_text" : "Para Birimi Seçin"
                },
                'Model' : 'input',
                'Marka' : 'input',
                'Seri No' : 'input',
                'Yaşı' : 'int',
            },
            'Makine Kırılması' : {
                'default' : {
                    'qsdc_text' : 'Risk Bilgi Formu hazırlanması sürecinde ve sigorta teminatlarını kapsayacak teknik konularda şirketimizin her \
                        türlü yardım ve desteğe hazır olduğunu ayrıca belirtiriz.',
                    'qsdc_check' : True
                },
                "Bedel" : {
                    "currency": ["TL","USD","EUR"],
                    "currency_text" : "Para Birimi Seçin"
                },
                'Model' : 'input',
                'Marka' : 'input',
                'Seri No' : 'input',
                'Yaşı' : 'int',
            },
            'İşveren Mali Mesuliyet' : {
                'default' : {
                    'qsdc_text' : 'Risk Bilgi Formu hazırlanması sürecinde ve sigorta teminatlarını kapsayacak teknik konularda şirketimizin her \
                        türlü yardım ve desteğe hazır olduğunu ayrıca belirtiriz.',
                    'qsdc_check' : True
                },
                'Mavi Yaka Çalışan Sayısı' : 'int',
                'Beyaz Yaka Çalışan Sayısı' : 'int',
                "Yıllık Brüt İşçilik Ücretleri Toplamı" : {
                    "currency": ["TL","USD","EUR"],
                    "currency_text" : "Para Birimi Seçin"
                },
                "Ek Olarak İstenen Limit 1. Alternatif" : {
                    "currency": ["TL","USD","EUR"],
                    "currency_text" : "Limit Para Birimi Seçin"
                },
                "Ek Olarak İstenen Limit 2. Alternatif" : {
                    "currency": ["TL","USD","EUR"],
                    "currency_text" : "Limit Para Birimi Seçin"
                },
                "Ek Olarak İstenen Limit 3. Alternatif" : {
                    "currency": ["TL","USD","EUR"],
                    "currency_text" : "Limit Para Birimi Seçin"
                },
            },
            'Şahıs Mali Mesuliyet' : {
                'default' : {
                    'qsdc_text' : 'Risk Bilgi Formu hazırlanması sürecinde ve sigorta teminatlarını kapsayacak teknik konularda şirketimizin her \
                        türlü yardım ve desteğe hazır olduğunu ayrıca belirtiriz.',
                    'qsdc_check' : True
                },
                "Ciro" : {
                    "currency": ["TL","USD","EUR"],
                    "currency_text" : "Para Birimi Seçin"
                },
                "Ek Olarak İstenen Limit 1. Alternatif" : {
                    "currency": ["TL","USD","EUR"],
                    "currency_text" : "Limit Para Birimi Seçin"
                },
                "Ek Olarak İstenen Limit 2. Alternatif" : {
                    "currency": ["TL","USD","EUR"],
                    "currency_text" : "Limit Para Birimi Seçin"
                },
                "Ek Olarak İstenen Limit 3. Alternatif" : {
                    "currency": ["TL","USD","EUR"],
                    "currency_text" : "Limit Para Birimi Seçin"
                },
            },
            'Hırsızlık Önlemleri' : {
                'default' : {
                    'qsdc_text' : 'Risk Bilgi Formu hazırlanması sürecinde ve sigorta teminatlarını kapsayacak teknik konularda şirketimizin her \
                        türlü yardım ve desteğe hazır olduğunu ayrıca belirtiriz.',
                    'qsdc_check' : True
                },
                'radio' : ['Tesis çevresi çevrili mi?','Evet','Hayır'],
                'radio' : ['Bekçi köpeği var mı?','Var','Yok'],
                'radio' : ['Çevre Aydınlatması var mı?','Var','Yok'],
                'radio' : ['Kepenk var mı?','Var','Yok'],
                'radio' : ['24 saat güvenlik var mı?','Var','Yok'],
                'radio' : ['Kayıt alabilen kamera sistemi var mı?','Var','Yok'],
                'radio' : ['Güvenlik şirketi ve/veya karakola bağlı alarm sistemi var mı?','Var','Yok'],
                'radio' : ['Karakola bağlı alarm sistemi var mı?','Var','Yok'],
                'Ek tedbirleriniz varsa yazınız.' : 'textarea'
            },
            'Fotoğraflar' : {
                'default' : {
                    'qsdc_text' : """Risk Değerlendirmesi Çalışması için ihtiyaç duyacağımız fotoğraflar aşağıda maddeler halinde paylaşılmıştır. ilgili fotoğrafların aşağıda bulunan fotoğraf yükleme alanlarınayüklenmesini rica ederiz. Her bir fotoğrafın 1 MI311 geçmemesi dosyanın mail ile paylaşılabilmesi açısından önem arz etmektedir. Gerekli görülmesi halinde fotoğrafların küçültüldükten sonra yüklenmesi uygun olacaktır.

- İşletme içerisinden genel vaziyeti gösterecek şekilde olabildiğince geniş açılı birkaç fotoğraf, - İşletmede bulunan tüm yangın önlemlerini (Yangın tüpleri, yangın dola pları, duman dedektörleri, sprinkler vb.) gösterir şekilde geniş açılı birkaç fotoğraf,

- İşletmede bulunan tüm sel önlemlerini(Palet/raf üzeri depolama, mazgallar, su toplama kuyuları, menfezler vb.) gösterir şekil-de geniş açılı birkaç fotoğraf,

- İşletmede bulunan tüm hırsızlık önlemlerini(kepenk, kamera sistemleri, hırsızlık alarmları vb.) gösterir şekilde geniş açılı birkaç fotoğraf,

- İşletme çevresinden binayı ve çevresini görebileceğimiz şekilde geniş açılı birkaç fotoğraf, - Yangın pompa grubu, pompa basınç göstergesi, yangın kollektörü ve yangın suyu deposundann geniş açılı birkaç fotoğraf,

- Elektrik panolarının bulunduğu alanlardan, aydınlatma armatürlerinden, elektrik tesisatından ve jeneratörden geniş açılı birkaç fotoğraf,

- Duman dedektörü kontrol panosundan bir adet fotoğraf,""",
                    'qsdc_check' : True
                },
                'Fotoğraf yüklemek için tıklayın veya sürükleyip bırakın' : 'photo',
                'Fotoğraf yüklemek için tıklayın veya sürükleyip bırakın' : 'photo',
                'Fotoğraf yüklemek için tıklayın veya sürükleyip bırakın' : 'photo',
                'Fotoğraf yüklemek için tıklayın veya sürükleyip bırakın' : 'photo',
                'Fotoğraf yüklemek için tıklayın veya sürükleyip bırakın' : 'photo',
                'Fotoğraf yüklemek için tıklayın veya sürükleyip bırakın' : 'photo',
                'Fotoğraf yüklemek için tıklayın veya sürükleyip bırakın' : 'photo',
                'Fotoğraf yüklemek için tıklayın veya sürükleyip bırakın' : 'photo',
                'Fotoğraf yüklemek için tıklayın veya sürükleyip bırakın' : 'photo',
                'Fotoğraf yüklemek için tıklayın veya sürükleyip bırakın' : 'photo',
                'Fotoğraf yüklemek için tıklayın veya sürükleyip bırakın' : 'photo',
                'Fotoğraf yüklemek için tıklayın veya sürükleyip bırakın' : 'photo',
                'Fotoğraf yüklemek için tıklayın veya sürükleyip bırakın' : 'photo',
                'Fotoğraf yüklemek için tıklayın veya sürükleyip bırakın' : 'photo',
                'Fotoğraf yüklemek için tıklayın veya sürükleyip bırakın' : 'photo',
                'Fotoğraf yüklemek için tıklayın veya sürükleyip bırakın' : 'photo',
                'Fotoğraf yüklemek için tıklayın veya sürükleyip bırakın' : 'photo',
                'Fotoğraf yüklemek için tıklayın veya sürükleyip bırakın' : 'photo',
                'Fotoğraf yüklemek için tıklayın veya sürükleyip bırakın' : 'photo',
                'Fotoğraf yüklemek için tıklayın veya sürükleyip bırakın' : 'photo',
                'Fotoğraf yüklemek için tıklayın veya sürükleyip bırakın' : 'photo',
                'Fotoğraf yüklemek için tıklayın veya sürükleyip bırakın' : 'photo',
                'Fotoğraf yüklemek için tıklayın veya sürükleyip bırakın' : 'photo',
                'Fotoğraf yüklemek için tıklayın veya sürükleyip bırakın' : 'photo',
                'Fotoğraf yüklemek için tıklayın veya sürükleyip bırakın' : 'photo',
                'Fotoğraf yüklemek için tıklayın veya sürükleyip bırakın' : 'photo',
                'Fotoğraf yüklemek için tıklayın veya sürükleyip bırakın' : 'photo'
            }
        }
=======
        'is_admin': is_admin,
        'groups': groups,
        'users_with_emails': users_with_emails,
        'basliklar' : basliklar
>>>>>>> local
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

