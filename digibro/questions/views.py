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