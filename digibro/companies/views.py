# views.py

from django.shortcuts import render, redirect
from .models import Company

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
            return redirect('companies:index')

    companies = Company.objects.all()
    return render(request, 'companies/index.html', {'companies': companies})
def delete_company(request, company_id):
    company = Company.objects.get(id=company_id)
    company.delete()
    return redirect('companies:index')  # companies:index'e yönlendirme
def edit_company(request, company_id):
    company = Company.objects.get(id=company_id)
    if request.method == 'POST':
        new_name = request.POST.get('new_name')
        new_logo = request.FILES.get('new_logo')
        new_industry = request.POST.get('new_industry')
        new_scope = request.POST.get('new_scope')
        new_policies = request.POST.get('new_policies')
        new_quote = request.POST.get('new_quote')
        
        if new_name:
            company.name = new_name
        if new_logo:
            company.logo = new_logo
        if new_industry:
            company.industry = new_industry
        if new_scope:
            company.scope = new_scope
        if new_policies:
            company.policies = new_policies
        if new_quote:
            company.quote = new_quote
        company.save()
        return redirect('companies:index')

    return render(request, 'companies/index.html', {'companies': Company.objects.all()})
