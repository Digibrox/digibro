from django.shortcuts import render,get_object_or_404
from django.http import JsonResponse
from django.contrib.auth.models import Group
from django.contrib.auth.models import User
from .models import FormVerisi,QFQAnswer
import json
from django.conf import settings
import os
from .get_qf import generate_questionnsire_forms
from django.shortcuts import render
from django.contrib.auth.models import User, Group
from django.views.decorators.csrf import csrf_exempt
from .send_mail import send_email

def dashboard_view(request):
    return render(request, 'questions/dashboard.html')

@csrf_exempt
def save_data(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            print("\n\n\nDataaa:\n")
            print(data)
            qfq_answer = QFQAnswer(
                last_user = "broker",
                input_1_1_1=data.get("input_1-1-1"),
                input_1_2_1=data.get("input_1-2-1"),
                input_1_3_1=data.get("input_1-3-1"),
                input_1_4_1=data.get("input_1-4-1"),
                input_1_4_2=data.get("input_1-4-2"),
                input_1_4_3=data.get("input_1-4-3"),
                input_1_5_1=data.get("input_1-5-1"),
                input_1_5_2=data.get("input_1-5-2"),
                input_1_6_1=data.get("input_1-6-1"),
                input_1_6_2=data.get("input_1-6-2"),
                input_1_7_1=data.get("input_1-7-1"),
                input_1_7_2=data.get("input_1-7-2"),
                input_1_8_1=data.get("input_1-8-1"),
                input_1_9_1=data.get("input_1-9-1"),
                input_1_9_2=data.get("input_1-9-2"),
                input_1_10_1=data.get("input_1-10-1"),
                input_1_11_1=data.get("input_1-11-1"),
                input_1_11_2_current_selection=data.get("1-11-2_current_selection"),
                textarea_1_11_3=data.get("textarea_1-11-3"),
                input_2_1_1=data.get("input_2-1-1"),
                input_2_1_2_current_selection=data.get("2-1-2_current_selection"),
                textarea_2_1_3=data.get("textarea_2-1-3"),
                yanginAccordion_radio_Q1_3_1_1=data.get("yanginAccordion_radio_Q1_3-1-1"),
                input_3_1_2=data.get("input_3-1-2"),
                yanginAccordion_radio_Q1_3_2_1=data.get("yanginAccordion_radio_Q1_3-2-1"),
                input_3_2_2=data.get("input_3-2-2"),
                yanginAccordion_radio_Q1_3_3_1=data.get("yanginAccordion_radio_Q1_3-3-1"),
                input_3_3_2=data.get("input_3-3-2"),
                yanginAccordion_radio_Q1_3_4_1=data.get("yanginAccordion_radio_Q1_3-4-1"),
                input_3_4_2=data.get("input_3-4-2"),
                yanginAccordion_radio_Q1_3_5_1=data.get("yanginAccordion_radio_Q1_3-5-1"),
                input_3_5_2=data.get("input_3-5-2"),
                yanginAccordion_radio_Q1_3_6_1=data.get("yanginAccordion_radio_Q1_3-6-1"),
                input_3_6_2=data.get("input_3-6-2"),
                yanginAccordion_radio_Q1_3_7_1=data.get("yanginAccordion_radio_Q1_3-7-1"),
                input_3_7_2=data.get("input_3-7-2"),
                yanginAccordion_radio_Q1_3_8_1=data.get("yanginAccordion_radio_Q1_3-8-1"),
                input_3_9_1_current_selection=data.get("3-9-1_current_selection"),
                input_3_10_1=data.get("input_3-10-1"),
                input_3_11_1_current_selection=data.get("3-11-1_current_selection"),
                input_3_12_1_current_selection=data.get("3-12-1_current_selection"),
                input_3_13_1_current_selection=data.get("3-13-1_current_selection"),
                input_3_14_1_current_selection=data.get("3-14-1_current_selection"),
                input_4_1_1_current_selection=data.get("4-1-1_current_selection"),
                input_4_2_1=data.get("input_4-2-1"),
                input_4_3_1=data.get("input_4-3-1"),
                input_4_4_1=data.get("input_4-4-1"),
                input_4_5_1=data.get("input_4-5-1"),
                input_5_1_1_current_selection=data.get("5-1-1_current_selection"),
                input_5_2_1=data.get("input_5-2-1"),
                input_5_3_1=data.get("input_5-3-1"),
                input_5_4_1=data.get("input_5-4-1"),
                input_5_5_1=data.get("input_5-5-1"),
                input_6_1_1_current_selection=data.get("6-1-1_current_selection"),
                input_6_2_1=data.get("input_6-2-1"),
                input_6_3_1=data.get("input_6-3-1"),
                input_6_4_1=data.get("input_6-4-1"),
                input_6_5_1=data.get("input_6-5-1"),
                input_7_1_1_current_selection=data.get("7-1-1_current_selection"),
                input_7_2_1_current_selection=data.get("7-2-1_current_selection"),
                input_7_3_1_current_selection=data.get("7-3-1_current_selection"),
                input_7_4_1_current_selection=data.get("7-4-1_current_selection"),
                HirsizlikAccordion_radio_Q1_8_1_1=data.get("HirsizlikAccordion_radio_Q1_8-1-1"),
                HirsizlikAccordion_radio_Q1_8_2_1=data.get("HirsizlikAccordion_radio_Q1_8-2-1"),
                HirsizlikAccordion_radio_Q1_8_3_1=data.get("HirsizlikAccordion_radio_Q1_8-3-1"),
                HirsizlikAccordion_radio_Q1_8_4_1=data.get("HirsizlikAccordion_radio_Q1_8-4-1"),
                HirsizlikAccordion_radio_Q1_8_5_1=data.get("HirsizlikAccordion_radio_Q1_8-5-1"),
                HirsizlikAccordion_radio_Q1_8_6_1=data.get("HirsizlikAccordion_radio_Q1_8-6-1"),
                HirsizlikAccordion_radio_Q1_8_7_1=data.get("HirsizlikAccordion_radio_Q1_8-7-1"),
                HirsizlikAccordion_radio_Q1_8_8_1=data.get("HirsizlikAccordion_radio_Q1_8-8-1"),
                textarea_8_8_2=data.get("textarea_8-8-2"),
            )

            # Veritabanına kaydet
            qfq_answer.save()

            # # #DB den çekilen bilgiler
            # smtp_server = 'mail.digibrox.com'
            # stmp_port = 465
            # password = "FSO3yWZqM7qNS4C"  # Gönderici e-posta şifresi

            # sender_email = "fatihaydin@digibrox.com"  # Gönderici e-posta adresi
            # # receiver_emails = ['oguzhanyildirim@digibrox.com',]  # test e-posta adresleri
            # receiver_emails = ["oguzhanyildirim@digibrox.com","ibrahimyasar@digibrox.com",]  # Alıcı e-posta adresleri
            # # subject = 'New Questionnaire Form Notification'  # E-posta konusu
            # # #E-posta mesajı
            # # body = "Hello,\n\n"\
            # #     + "I kindly request you to fill out the newly created questionnaire form.\n"\
            # #     + "Best regards,\n"\
            # #     + "Have a good work day."

            # # send_email(sender_email, password, receiver_emails, smtp_server, stmp_port, subject, body)

            return JsonResponse({'message': 'Veri başarıyla kaydedildi!'})
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON'}, status=400)
    else:
        return JsonResponse({'error': 'GET is not allowed DENEME'}, status=405)


@csrf_exempt
def update_data(request):
    if request.method == 'POST':
        try:
            cevap_json = json.loads(request.body)
            qfqa_id = cevap_json.get("qfqa_id")  # JSON'dan ID'yi alın
            
            # Belirtilen ID'ye sahip kaydı bulun
            qfq_answer = get_object_or_404(QFQAnswer, qfqa_id=qfqa_id)

            # JSON'dan gelen verileri model alanlarına atayın
            qfq_answer.last_user = cevap_json.get("last_user", qfq_answer.last_user)
            qfq_answer.input_1_1_1 = cevap_json.get("input_1-1-1", qfq_answer.input_1_1_1)
            qfq_answer.input_1_2_1 = cevap_json.get("input_1-2-1", qfq_answer.input_1_2_1)
            qfq_answer.input_1_3_1 = cevap_json.get("input_1-3-1", qfq_answer.input_1_3_1)
            qfq_answer.input_1_4_1 = cevap_json.get("input_1-4-1", qfq_answer.input_1_4_1)
            qfq_answer.input_1_4_2 = cevap_json.get("input_1-4-2", qfq_answer.input_1_4_2)
            qfq_answer.input_1_4_3 = cevap_json.get("input_1-4-3", qfq_answer.input_1_4_3)
            qfq_answer.input_1_5_1 = cevap_json.get("input_1-5-1", qfq_answer.input_1_5_1)
            qfq_answer.input_1_5_2 = cevap_json.get("input_1-5-2", qfq_answer.input_1_5_2)
            qfq_answer.input_1_6_1 = cevap_json.get("input_1-6-1", qfq_answer.input_1_6_1)
            qfq_answer.input_1_6_2 = cevap_json.get("input_1-6-2", qfq_answer.input_1_6_2)
            qfq_answer.input_1_7_1 = cevap_json.get("input_1-7-1", qfq_answer.input_1_7_1)
            qfq_answer.input_1_7_2 = cevap_json.get("input_1-7-2", qfq_answer.input_1_7_2)
            qfq_answer.input_1_8_1 = cevap_json.get("input_1-8-1", qfq_answer.input_1_8_1)
            qfq_answer.input_1_9_1 = cevap_json.get("input_1-9-1", qfq_answer.input_1_9_1)
            qfq_answer.input_1_9_2 = cevap_json.get("input_1-9-2", qfq_answer.input_1_9_2)
            qfq_answer.input_1_10_1 = cevap_json.get("input_1-10-1", qfq_answer.input_1_10_1)
            qfq_answer.input_1_11_1 = cevap_json.get("input_1-11-1", qfq_answer.input_1_11_1)
            qfq_answer.input_1_11_2_current_selection = cevap_json.get("input_1-11-2_current_selection", qfq_answer.input_1_11_2_current_selection)
            qfq_answer.textarea_1_11_3 = cevap_json.get("textarea_1-11-3", qfq_answer.textarea_1_11_3)
            qfq_answer.input_2_1_1 = cevap_json.get("input_2-1-1", qfq_answer.input_2_1_1)
            qfq_answer.input_2_1_2_current_selection = cevap_json.get("input_2-1-2_current_selection", qfq_answer.input_2_1_2_current_selection)
            qfq_answer.textarea_2_1_3 = cevap_json.get("textarea_2-1-3", qfq_answer.textarea_2_1_3)
            qfq_answer.yanginAccordion_radio_Q1_3_1_1 = cevap_json.get("yanginAccordion_radio_Q1_3-1-1", qfq_answer.yanginAccordion_radio_Q1_3_1_1)
            qfq_answer.input_3_1_2 = cevap_json.get("input_3-1-2", qfq_answer.input_3_1_2)
            qfq_answer.yanginAccordion_radio_Q1_3_2_1 = cevap_json.get("yanginAccordion_radio_Q1_3-2-1", qfq_answer.yanginAccordion_radio_Q1_3_2_1)
            qfq_answer.input_3_2_2 = cevap_json.get("input_3-2-2", qfq_answer.input_3_2_2)
            qfq_answer.yanginAccordion_radio_Q1_3_3_1 = cevap_json.get("yanginAccordion_radio_Q1_3-3-1", qfq_answer.yanginAccordion_radio_Q1_3_3_1)
            qfq_answer.input_3_3_2 = cevap_json.get("input_3-3-2", qfq_answer.input_3_3_2)
            qfq_answer.yanginAccordion_radio_Q1_3_4_1 = cevap_json.get("yanginAccordion_radio_Q1_3-4-1", qfq_answer.yanginAccordion_radio_Q1_3_4_1)
            qfq_answer.input_3_4_2 = cevap_json.get("input_3-4-2", qfq_answer.input_3_4_2)
            qfq_answer.yanginAccordion_radio_Q1_3_5_1 = cevap_json.get("yanginAccordion_radio_Q1_3-5-1", qfq_answer.yanginAccordion_radio_Q1_3_5_1)
            qfq_answer.input_3_5_2 = cevap_json.get("input_3-5-2", qfq_answer.input_3_5_2)
            qfq_answer.yanginAccordion_radio_Q1_3_6_1 = cevap_json.get("yanginAccordion_radio_Q1_3-6-1", qfq_answer.yanginAccordion_radio_Q1_3_6_1)
            qfq_answer.input_3_6_2 = cevap_json.get("input_3-6-2", qfq_answer.input_3_6_2)
            qfq_answer.yanginAccordion_radio_Q1_3_7_1 = cevap_json.get("yanginAccordion_radio_Q1_3-7-1", qfq_answer.yanginAccordion_radio_Q1_3_7_1)
            qfq_answer.input_3_7_2 = cevap_json.get("input_3-7-2", qfq_answer.input_3_7_2)
            qfq_answer.yanginAccordion_radio_Q1_3_8_1 = cevap_json.get("yanginAccordion_radio_Q1_3-8-1", qfq_answer.yanginAccordion_radio_Q1_3_8_1)
            qfq_answer.input_3_9_1_current_selection = cevap_json.get("input_3-9-1_current_selection", qfq_answer.input_3_9_1_current_selection)
            qfq_answer.input_3_10_1 = cevap_json.get("input_3-10-1", qfq_answer.input_3_10_1)
            qfq_answer.input_3_11_1_current_selection = cevap_json.get("input_3-11-1_current_selection", qfq_answer.input_3_11_1_current_selection)
            qfq_answer.input_3_12_1_current_selection = cevap_json.get("input_3-12-1_current_selection", qfq_answer.input_3_12_1_current_selection)
            qfq_answer.input_3_13_1_current_selection = cevap_json.get("input_3-13-1_current_selection", qfq_answer.input_3_13_1_current_selection)
            qfq_answer.input_3_14_1_current_selection = cevap_json.get("input_3-14-1_current_selection", qfq_answer.input_3_14_1_current_selection)
            qfq_answer.input_4_1_1_current_selection = cevap_json.get("input_4-1-1_current_selection", qfq_answer.input_4_1_1_current_selection)
            qfq_answer.input_4_2_1 = cevap_json.get("input_4-2-1", qfq_answer.input_4_2_1)
            qfq_answer.input_4_3_1 = cevap_json.get("input_4-3-1", qfq_answer.input_4_3_1)
            qfq_answer.input_4_4_1 = cevap_json.get("input_4-4-1", qfq_answer.input_4_4_1)
            qfq_answer.input_4_5_1 = cevap_json.get("input_4-5-1", qfq_answer.input_4_5_1)
            qfq_answer.input_5_1_1_current_selection = cevap_json.get("input_5-1-1_current_selection", qfq_answer.input_5_1_1_current_selection)
            qfq_answer.input_5_2_1 = cevap_json.get("input_5-2-1", qfq_answer.input_5_2_1)
            qfq_answer.input_5_3_1 = cevap_json.get("input_5-3-1", qfq_answer.input_5_3_1)
            qfq_answer.input_5_4_1 = cevap_json.get("input_5-4-1", qfq_answer.input_5_4_1)
            qfq_answer.input_5_5_1 = cevap_json.get("input_5-5-1", qfq_answer.input_5_5_1)
            qfq_answer.input_6_1_1_current_selection = cevap_json.get("input_6-1-1_current_selection", qfq_answer.input_6_1_1_current_selection)
            qfq_answer.input_6_2_1 = cevap_json.get("input_6-2-1", qfq_answer.input_6_2_1)
            qfq_answer.input_6_3_1 = cevap_json.get("input_6-3-1", qfq_answer.input_6_3_1)
            qfq_answer.input_6_4_1 = cevap_json.get("input_6-4-1", qfq_answer.input_6_4_1)
            qfq_answer.input_6_5_1 = cevap_json.get("input_6-5-1", qfq_answer.input_6_5_1)
            qfq_answer.input_7_1_1_current_selection = cevap_json.get("input_7-1-1_current_selection", qfq_answer.input_7_1_1_current_selection)
            qfq_answer.input_7_2_1_current_selection = cevap_json.get("input_7-2-1_current_selection", qfq_answer.input_7_2_1_current_selection)
            qfq_answer.input_7_3_1_current_selection = cevap_json.get("input_7-3-1_current_selection", qfq_answer.input_7_3_1_current_selection)
            qfq_answer.input_7_4_1_current_selection = cevap_json.get("input_7-4-1_current_selection", qfq_answer.input_7_4_1_current_selection)
            qfq_answer.HirsizlikAccordion_radio_Q1_8_1_1 = cevap_json.get("HirsizlikAccordion_radio_Q1_8-1-1", qfq_answer.HirsizlikAccordion_radio_Q1_8_1_1)
            qfq_answer.HirsizlikAccordion_radio_Q1_8_2_1 = cevap_json.get("HirsizlikAccordion_radio_Q1_8-2-1", qfq_answer.HirsizlikAccordion_radio_Q1_8_2_1)
            qfq_answer.HirsizlikAccordion_radio_Q1_8_3_1 = cevap_json.get("HirsizlikAccordion_radio_Q1_8-3-1", qfq_answer.HirsizlikAccordion_radio_Q1_8_3_1)
            qfq_answer.HirsizlikAccordion_radio_Q1_8_4_1 = cevap_json.get("HirsizlikAccordion_radio_Q1_8-4-1", qfq_answer.HirsizlikAccordion_radio_Q1_8_4_1)
            qfq_answer.HirsizlikAccordion_radio_Q1_8_5_1 = cevap_json.get("HirsizlikAccordion_radio_Q1_8-5-1", qfq_answer.HirsizlikAccordion_radio_Q1_8_5_1)
            qfq_answer.HirsizlikAccordion_radio_Q1_8_6_1 = cevap_json.get("HirsizlikAccordion_radio_Q1_8-6-1", qfq_answer.HirsizlikAccordion_radio_Q1_8_6_1)
            qfq_answer.HirsizlikAccordion_radio_Q1_8_7_1 = cevap_json.get("HirsizlikAccordion_radio_Q1_8-7-1", qfq_answer.HirsizlikAccordion_radio_Q1_8_7_1)
            qfq_answer.HirsizlikAccordion_radio_Q1_8_8_1 = cevap_json.get("HirsizlikAccordion_radio_Q1_8-8-1", qfq_answer.HirsizlikAccordion_radio_Q1_8_8_1)
            qfq_answer.textarea_8_8_2 = cevap_json.get("textarea_8-8-2", qfq_answer.textarea_8_8_2)

            # Değişiklikleri kaydet
            qfq_answer.save()

            return JsonResponse({"success": True, "message": "Update successful!"})
        
        except Exception as e:
            return JsonResponse({"success": False, "message": str(e)}, status=400)

    return JsonResponse({"success": False, "message": "Invalid request method."}, status=405)



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
    
    basliklar = generate_questionnsire_forms()


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
