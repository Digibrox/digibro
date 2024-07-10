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

def index(request):
    # Kullanıcı admin grubunda mı kontrol et
    is_admin = False
    if request.user.is_authenticated:
        admin_group_name = 'Admin'  # 'Admin' grubunun ismini gruplarınıza göre ayarlayın
        admin_group = Group.objects.get(name=admin_group_name)

        # Kullanıcının "Admin" grubuna üye olup olmadığını kontrol et
        is_admin = admin_group in request.user.groups.all()

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

    context = {
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
                }
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
            }
        }
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