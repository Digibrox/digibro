from django.shortcuts import render, redirect
from companies.models import Company
from django.http import Http404

def client_info(request, company_name):
    # Boşlukları kaldırarak ve küçük harfe çevirerek şirket adını normalleştirin
    normalized_company_name = company_name.replace('_', ' ').lower()

    try:
        # Şirket adına göre veritabanından şirket bilgilerini alın
        company = Company.objects.get(name__iexact=normalized_company_name)
    except Company.DoesNotExist:
        # Boşlukları kaldırılmış ad ile eşleşen bir şirket bulunamazsa, 
        # orijinal (boşluksuz) adı kullanarak tekrar deneyin
        try:
            company = Company.objects.get(name__iexact=company_name)
        except Company.DoesNotExist:
            # Şirket bulunamazsa, Http404 hatası gönderin veya uygun bir işlem yapın
            raise Http404("Şirket bulunamadı")

    # Şirket bilgilerini profil bilgi sayfasına gönderin
    return render(request, 'clients/client_info.html', {'company': company})

def index(request):
    if request.method == 'POST':
        company_name = request.POST.get('company_name')
        industry = request.POST.get('industry')
        scope = request.POST.get('scope')
        policies = request.POST.get('policies')
        quote = request.POST.get('quote')
        
        if company_name:
            # Yeni bir Company örneği oluştur
            new_company = Company.objects.create(name=company_name, industry=industry, scope=scope, policies=policies, quote=quote)
            # Yeni örneği veritabanına kaydet
            new_company.save()
            # Index sayfasına yönlendir
            return redirect('clients:index')

    companies = Company.objects.all()
    context = {
        'companies': companies,
    }
    return render(request, 'clients/index.html', context)

