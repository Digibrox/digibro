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

    data = {
        'Categories': ['P&C', 'Health', 'Cagro'],
        'Subcategories': {
            'default': ['Bilgilendirme Metni', 'Ön Bilgi', 'Hasar', 'Hırsızlık Önlemleri', 'Fotoğraflar'],
            'additional': ['Yangın Önlemleri', 'Elektronik Cihaz', 'Makine Kırılması', 'İşveren Mali Mesuliyet', 'Şahıs Mali Mesuliyet']
        },
        'Bilgilendirme Metni': {
            'default': {
                'qsdc_text': '''İş bu form rizikoya ait bilgilerin temin edilmesi ve Ön Risk Analizi çalışmasının gerçekleştirilebilmesi
                        adına talep edilmektedir.Formda yer alan rizikoya ait bilgi, fotoğraf ve önlemlerin eksik, yanlış veya tahrif edilmiş
                        şekilde beyanı ve ibrazı sebebiyle oluşabilecek beyana aykırılık kaynaklı zararlar, formu dolduran kişi ve kurumun
                        sorumluluğunda olacak olup AXA Sigorta A.Ş. bu gibi konularda sorumluluk kabul etmemektedir.
                        \nRisk Bilgi Formu hazırlanması sürecinde ve sigorta teminatlarını kapsayacak teknik konularda şirketimizin her türlü
                        yardım ve desteğe hazır olduğunu ayrıca belirtiriz.''',
                'qsdc_check': False
            },
            "Bilgilendirme Metni'ni okudum ve onaylıyorum.": 'check'
        },
        'Ön Bilgi': {
            'default': {
                'qsdc_text': 'Risk Bilgi Formu hazırlanması sürecinde ve sigorta teminatlarını kapsayacak teknik konularda şirketimizin her türlü yardım ve desteğe hazır olduğunu ayrıca belirtiriz.',
                'qsdc_check': True
            },
            'Tarih': 'date',
            'Poliçe / Teklif No': 'input',
            'Sigortalı Bilgileri': {
                'Sigortalı Adı': 'input',
                'VKN': 'input'
            },
            'Adres Bilgileri': {
                'İl': 'input',
                'İlçe': 'input',
                'Mahalle': 'input',
                'Açık Adres': 'textarea',
            },
            'Faaliyet Bilgisi': {
                'Faaliyet': 'input',
                'Bina içerisindeki diğer faaliyetler': 'input'
            },
            'Personel/Vardiya': {
                'Personel Sayısı': 'input',
                'Vardiya Sayısı': 'input'
            },
            'Koordinatlar': {
                'N': 'input',
                'E': 'input'
            },
            'Gerekli Durumda İletişime Geçilecek Yetkili Kişi': 'input',
            'İletişim': {
                'Telefon': 'phone',
                'E-Mail': 'mail'
            },
            'Önceki Sigorta Şirketi': 'input',
            'Hasar Geçmişi': {
                'Tarih': 'date',
                "Tutar": {
                    "currency": ["TL", "USD", "EUR"],
                    "currency_text": "Para Birimi Seçin"
                }
            },
            'Olayı Yazınız.': 'textarea'
        },
        'Hasar': {
            'default': {
                'qsdc_text': 'Risk Bilgi Formu hazırlanması sürecinde ve sigorta teminatlarını kapsayacak teknik konularda şirketimizin her türlü yardım ve desteğe hazır olduğunu ayrıca belirtiriz.',
                'qsdc_check': True
            },
            'Hasar Geçmişi': {
                "select": ['Hasar Ücreti', 'Ödendi', 'Muallak'],
                'Hasar Teminatı': 'input',
                "Hasar Bedeli Tutar": {
                    "currency": ["TL", "USD", "EUR"],
                    "currency_text": "Para Birimi Seçin"
                }
            },
            'Hasar Açıklama': {
                'Hasar nedenini yazınız.': 'textarea',
                'İlgili iyileştirmeleri yazınız.': 'textarea',
            }
        },
        'Yangın Önlemleri': {
            'default': {
                'qsdc_text': 'Risk Bilgi Formu hazırlanması sürecinde ve sigorta teminatlarını kapsayacak teknik konularda şirketimizin her türlü yardım ve desteğe hazır olduğunu ayrıca belirtiriz.',
                'qsdc_check': True
            },
            'Yangın Tüpleri': {
                "radio": ["Yangın Tüpleri", "Var", "Yok"],
                'Adet': 'input'
            },
            'Yangın Dolapları': {
                "radio": ["Yangın Dolapları", "Var", "Yok"],
                'Adet': 'input'
            },
            'Yangın Hidrantları': {
                "radio": ["Yangın Hidrantları", "Var", "Yok"],
                'Adet': 'input'
            },
            'Duman Dedektörleri': {
                "radio": ["Duman Dedektörleri", "Var", "Yok"],
                'Tesisin % kaçını kapsıyor?': 'int'
            },
            'Yangın Suyu Deposu': {
                "radio": ["Yangın Suyu Deposu", "Var", "Yok"],
                'Top': 'float'
            },
            'Yangın Pompa Grubu': {
                "radio": ["Yangın Pompa Grubu", "Elektrikli", "Dizel", "Dizel-Elektrikli", "Yok"],
                'Açıklama': 'input'
            },
            "radio": ["Yangın Pompası İçin Otomatik Jeneratör", "Var", "Yok"],
            'Sprinkler Tesisatı': {
                "radio": ["Sprinkler Tesisatı", "Var", "Yok"],
                'Tesisin % kaçını kapsıyor?': 'int'
            },
            "radio": ["Lokal Söndürme Sistemleri", "Var", "Yok"],
            "Bina Bedeli Tutarı": {
                "currency": ["TL", "USD", "EUR"],
                "currency_text": "Para Birimi Seçin"
            },
            'Bina Alanı (m²)': 'float',
            "Demirbaş Bedeli": {
                "currency": ["TL", "USD", "EUR"],
                "currency_text": "Para Birimi Seçin"
            },
            "Dekorasyon Bedeli": {
                "currency": ["TL", "USD", "EUR"],
                "currency_text": "Para Birimi Seçin"
            },
            "Makina Bedeli": {
                "currency": ["TL", "USD", "EUR"],
                "currency_text": "Para Birimi Seçin"
            },
            "Emtia": {
                "currency": ["TL", "USD", "EUR"],
                "currency_text": "Para Birimi Seçin"
            }
        },
        'Elektronik Cihaz': {
            'default': {
                'qsdc_text': 'Risk Bilgi Formu hazırlanması sürecinde ve sigorta teminatlarını kapsayacak teknik konularda şirketimizin her   türlü yardım ve desteğe hazır olduğunu ayrıca belirtiriz.',
                'qsdc_check': True
            },
            "Bedel": {
                "currency": ["TL", "USD", "EUR"],
                "currency_text": "Para Birimi Seçin"
            },
            'Model': 'input',
            'Marka': 'input',
            'Seri No': 'input',
            'Yaşı': 'int',
        },
        'Makine Kırılması': {
            'default': {
                'qsdc_text': 'Risk Bilgi Formu hazırlanması sürecinde ve sigorta teminatlarını kapsayacak teknik konularda şirketimizin her türlü yardım ve desteğe hazır olduğunu ayrıca belirtiriz.',
                'qsdc_check': True
            },
            "Bedel": {
                "currency": ["TL", "USD", "EUR"],
                "currency_text": "Para Birimi Seçin"
            },
            'Model': 'input',
            'Marka': 'input',
            'Seri No': 'input',
            'Yaşı': 'int',
        },
        'İşveren Mali Mesuliyet': {
            'default': {
                'qsdc_text': 'Risk Bilgi Formu hazırlanması sürecinde ve sigorta teminatlarını kapsayacak teknik konularda şirketimizin her                        türlü yardım ve desteğe hazır olduğunu ayrıca belirtiriz.',
                'qsdc_check': True
            },
            'Sigortalı Bilgileri': {
                'Sigortalı Adı': 'input',
                'VKN': 'input'
            },
            'Çalışan Bilgileri': {
                'Çalışan Sayısı': 'int',
                'Vardiya Sayısı': 'int',
                'Görevleri': 'input',
                'İş Kolu': 'input',
                'Sözleşme Tipi': 'input',
                'Sigorta Başlangıç Tarihi': 'date'
            },
            'İletişim': {
                'Telefon': 'phone',
                'E-Mail': 'mail'
            }
        },
        'Şahıs Mali Mesuliyet': {
            'default': {
                'qsdc_text': 'Risk Bilgi Formu hazırlanması sürecinde ve sigorta teminatlarını kapsayacak teknik konularda şirketimizin her                        türlü yardım ve desteğe hazır olduğunu ayrıca belirtiriz.',
                'qsdc_check': True
            },
            'Sigortalı Bilgileri': {
                'Sigortalı Adı': 'input',
                'VKN': 'input'
            },
            'Çalışan Bilgileri': {
                'Çalışan Sayısı': 'int',
                'Vardiya Sayısı': 'int',
                'Görevleri': 'input',
                'İş Kolu': 'input',
                'Sözleşme Tipi': 'input',
                'Sigorta Başlangıç Tarihi': 'date'
            },
            'İletişim': {
                'Telefon': 'phone',
                'E-Mail': 'mail'
            }
        }
    }
    data2 = {
        "data2": [
            {
                "id": 1,
                "title": "komple web geliştirme1",

                "description": "çok iyi bir kurs"
            },
            {
                "id": 2,
                "title": "python kursu",

                "description": "çok iyi bir kurs"
            },
            {
                "id": 3,
                "title": "django kursu",

                "description": "çok iyi bir kurs"
            }
        ]
    }
    yangin = {
         "yangin": [
            {
                "id": 1,
                "question": "Kısa soru,",
                "input_type": "text",
                "inputName2": "Deneme Adet :",
                "input_type2": "number",
                "inputName3": "Deneme Tarih :",
                "input_type3": "date"
            },
            {
                "id": 2,
                "question": "Orta uzunluktaki soru,",
                "input_type": "text",
                "inputName2": "Adet :",
                "input_type2": "number"
            },
            {
                "id": 3,
                "question": "Bu bir uzun yazılabilecek  soru denemesidir,",
                "inputName": "Tarih :",
                "input_type": "date"
            },
            {
                "id": 4,
                "question": "Tarih :",
                "input_type": "date"
            },
            {
                "id": 5,
                "question": "Poliçe / Teklif No :",
                "input_type": "text"
            },
            {
                "id": 6,
                "question": "Sigortalı Adı :",
                "input_type": "text"
            },
            {
                "id": 7,
                "question": "Adres Bilgileri,",
                "inputName": "İl :",
                "input_type": "text",
                "inputName2": "İlçe :",
                "input_type2": "text",
                "inputName3": "Mahalle :",
                "input_type3": "text"
            },
            {
                "id": 8,
                "question": "Faaliyet :",
                "input_type": "text",
                "inputName2": "Bina içerisindeki diğer faaliyetler :",
                "input_type2": "text"
            },
            {
                "id": 9,
                "question": "Personel Sayısı :",
                "input_type": "text",
                "inputName2": "Vardiya Sayısı :",
                "input_type2": "number"
            },
            {
                "id": 10,
                "question": "Koordinatlar,",
                "inputName": "N :",
                "input_type": "text",
                "inputName2": "E :",
                "input_type2": "text"
            },
            {
                "id": 11,
                "question": "Gerekli Durumda İletişime Geçilecek Yetkili Kişi :",
                "input_type": "text"
            },
            {
                "id": 12,
                "question": "Telefon :",
                "input_type": "text",
                "inputName2": "E-Mail :",
                "input_type2": "text"
            },
            {
                "id": 13,
                "question": "Önceki Sigorta Şirketi :",
                "input_type": "text"
            },
            {
                "id": 14,
                "question": "Hasar Geçmişi, ",
                "inputName": "Tarih ve Tutar :",
                "input_type": "date",
                "currentSelection": " "
            }
                ]
            }
    textarea = {
         "textarea": [
            {
                "textarea": " ",
                "placeholder": "Olayı yazınız."
            }
                ]
            }
            
    context = {
        'is_admin': is_admin,
        'groups': groups,
        'users_with_emails': users_with_emails,
        "data": data["Hasar"],
        "data2": data2["data2"],
        "yangin": yangin["yangin"],
        "textarea": textarea["textarea"]
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