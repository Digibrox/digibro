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
    #             "inputRadioClass": "yanginAccordion_radio_Q1_1",
    #             "labelRadio": "label_3-1",
    #         },
    #          'Q23':{
    #             "inputRadioClass": "yanginAccordion_radio_Q1_2",
    #             "labelRadio": "label_3-2",  
    #                }
    #          'Q24':{
    #             "question":"1-3_input_type_answer",
    #             "input_type":"number"
    #                }
    #          'Q25':{
    #             "inputRadioClass": "yanginAccordion_radio_Q2_1",
    #             "labelRadio": "label_3-2",
    #                }
    #          'Q26':{
    #             "inputRadio2": "yanginAccordion_radio_Q2_2",
    #             "labelRadio2": "label_3-2_2", 
    #                }
    #          'Q27':{
    #             "question":"2-3_input_type_answer",
    #             "input_type":"number"
    #                }
    #          'Q28':{
    #             "inputRadioClass": "yanginAccordion_radio_Q3_1",
    #             "labelRadio": "label_3-3", 
    #                }
    #          'Q29':{
    #             "inputRadio2": "yanginAccordion_radio_Q3_2",
    #             "labelRadio2": "label_3-3_2", 
    #                }
    #          'Q30:{
    #             "question":"3-3_input_type_answer",
    #             "input_type":"number"   
    #                }
    #          'Q31':{
    #             "inputRadioClass": "yanginAccordion_radio_Q4_1",
    #             "labelRadio": "label_3-4",
    #                }
    #          'Q32':{
    #             "inputRadio2": "yanginAccordion_radio_Q3_2",
    #             "labelRadio2": "label_3-4_2",  
    #                }
    #          'Q33':{
    #             "question":"4-3_input_type_answer",
    #             "input_type":"text"
    #                }
    #          'Q34':{
    #             "inputRadioClass": "yanginAccordion_radio_Q5_1",
    #             "labelRadio": "label_3-5", 
    #                }
    #          'Q35':{
    #             "inputRadio2": "yanginAccordion_radio_Q3_2",
    #             "labelRadio2": "label_3-5_2", 
    #                }
    #          'Q36':{
    #             "question":"5-3_input_type_answer",
    #             "input_type":"text"
    #                }
    #          'Q37':{
    #             "inputRadioClass": "yanginAccordion_radio_Q6_1",
    #             "labelRadio": "label_3-6",
    #                }
    #           'Q38':{
    #             "inputRadio2": "yanginAccordion_radio_Q6_2",
    #             "labelRadio2": "label_3-6_2",
    #                },
    #           'Q39':{
    #             "inputRadio3": "yanginAccordion_radio_Q6_3",
    #             "labelRadio3": "label_3-6_3",
    #                },
    #           'Q40':{
    #             "inputRadio4": "yanginAccordion_radio_Q6_4",
    #             "labelRadio4": "label_3-6_4",
    #                },
    #           'Q41':{
    #             "question":"6-3_input_type_answer",
    #             "input_type":"text"
    #                },
    #           'Q42':{
    #             "inputRadioClass": "yanginAccordion_radio_Q7_1",
    #             "labelRadio": "label_3-7",
    #                },
    #           'Q43':{
    #             "inputRadio2": "yanginAccordion_radio_Q7_2",
    #             "labelRadio2": "label_3-7_2",
    #                },
    #           'Q44':{
    #             "question":"7-3_input_type_answer",
    #             "input_type":"text"
    #                },
    #           'Q45':{
    #             "inputRadioClass": "yanginAccordion_radio_Q8_1",
    #             "labelRadio": "label_3-8",
    #                },
    #           'Q46':{
    #             "inputRadio2": "yanginAccordion_radio_Q8_2",
    #             "labelRadio2": "label_3-8_2",
    #                },
    #           'Q47':{
    #             "question": "9-3_current_selection",
    #             "input_type": "number"
    #             "currencyClass": "9-3_currency"
    #                },
    #           'Q48':{
    #             "question": "10-3_input_type_answer",
    #             "input_type": "text"
    #                },
    #           'Q49':{
    #             "question": "11-3_current_selection",
    #             "input_type": "number"
    #             "currencyClass": "11-3_currency"
    #                },
    #           'Q50':{
    #             "question": "12-3_current_selection",
    #             "input_type": "number"
    #             "currencyClass": "12-3_currency"
    #                },
    #           'Q51':{
    #             "question": "13-3_current_selection",
    #             "input_type": "number"
    #             "currencyClass": "13-3_currency"
    #                },
    #           'Q52':{
    #             "question": "14-3_current_selection",
    #             "input_type": "number"
    #             "currencyClass": "14-3_currency"
    #                },
    #           'Q53':{
    #             "question": "1-4_current_selection",
    #             "input_type": "number"
    #             "currencyClass": "1-4_currency"
    #                },
    #           'Q54':{
    #             "question": "2-4_input_type_answer",
    #             "input_type": "text"
    #                },
    #           'Q55':{
    #             "question": "3-4_input_type_answer",
    #             "input_type": "text"
    #                },
    #           'Q56':{
    #             "question": "4-4_input_type_answer",
    #             "input_type": "text"
    #                },
    #           'Q57':{
    #             "question": "5-4_input_type_answer",
    #             "input_type": "text"
    #                },
    #           'Q58':{
    #             "question": "1-5_current_selection",
    #             "input_type": "number"
    #             "currencyClass": "1-5_currency"
    #                },
    #           'Q59':{
    #             "question": "2-5_input_type_answer",
    #             "input_type": "text"
    #                },
    #           'Q60':{
    #             "question": "3-5_input_type_answer",
    #             "input_type": "text"
    #                },
    #           'Q61':{
    #             "question": "4-5_input_type_answer",
    #             "input_type": "text"
    #                },
    #           'Q62':{
    #             "question": "5-5_input_type_answer",
    #             "input_type": "text"
    #                },
    #           'Q63':{
    #             "question": "1-6_current_selection",
    #             "input_type": "number"
    #             "currencyClass": "1-6_currency"
    #                },
    #           'Q64':{
    #             "question": "2-6_input_type_answer",
    #             "input_type": "text"
    #                },
    #           'Q65':{
    #             "question": "3-6_input_type_answer",
    #             "input_type": "text"
    #                },
    #           'Q66':{
    #             "question": "4-6_input_type_answer",
    #             "input_type": "text"
    #                },
    #           'Q67':{
    #             "question": "5-6_input_type_answer",
    #             "input_type": "text"
    #                },
    #           'Q68':{
    #             "question": "1-7_current_selection",
    #             "input_type": "number"
    #             "currencyClass": "1-7_currency"
    #                },
    #           'Q69':{
    #             "question": "2-7_current_selection",
    #             "input_type": "number"
    #             "currencyClass": "2-7_currency"
    #                },
    #           'Q70':{
    #             "question": "3-7_current_selection",
    #             "input_type": "number"
    #             "currencyClass": "3-7_currency"
    #                },
    #           'Q71':{
    #             "question": "4-7_current_selection",
    #             "input_type": "number"
    #             "currencyClass": "4-7_currency"
    #                },
    #           'Q72':{
    #             "inputRadioClass": "HirsizlikAccordion_radio_Q1_1",
    #             "labelRadio": "label_8-1",
    #                },
    #           'Q73':{
    #             "inputRadioClass": "HirsizlikAccordion_radio_Q1_2",
    #             "labelRadio": "label_8-1_2",
    #                },
    #           'Q74':{
    #             "inputRadioClass": "HirsizlikAccordion_radio_Q2_1",
    #             "labelRadio": "label_8-2",
    #                },
    #           'Q75':{
    #             "inputRadioClass": "HirsizlikAccordion_radio_Q2_2",
    #             "labelRadio": "label_8-2_2",
    #                },
    #           'Q76':{
    #             "inputRadioClass": "HirsizlikAccordion_radio_Q3_1",
    #             "labelRadio": "label_8-3",
    #                },
    #           'Q77':{
    #             "inputRadioClass": "HirsizlikAccordion_radio_Q3_2",
    #             "labelRadio": "label_8-3_2",
    #                },
    #           'Q78':{
    #             "inputRadioClass": "HirsizlikAccordion_radio_Q4_1",
    #             "labelRadio": "label_8-4",
    #                },
    #           'Q79':{
    #             "inputRadioClass": "HirsizlikAccordion_radio_Q4_2",
    #             "labelRadio": "label_8-4_2",
    #               },
    #           'Q80':{
    #             "inputRadioClass": "HirsizlikAccordion_radio_Q5_1",
    #             "labelRadio": "label_8-5",
    #                },
    #           'Q81':{
    #             "inputRadioClass": "HirsizlikAccordion_radio_Q5_2",
    #             "labelRadio": "label_8-5_2",
    #               },
    #           'Q82':{
    #             "inputRadioClass": "HirsizlikAccordion_radio_Q6_1",
    #             "labelRadio": "label_8-6",
    #                },
    #           'Q83':{
    #             "inputRadioClass": "HirsizlikAccordion_radio_Q6_2",
    #             "labelRadio": "label_8-6_2",
    #               },
    #           'Q84':{
    #             "inputRadioClass": "HirsizlikAccordion_radio_Q7_1",
    #             "labelRadio": "label_8-7",
    #                },
    #           'Q85':{
    #             "inputRadioClass": "HirsizlikAccordion_radio_Q7_2",
    #             "labelRadio": "label_8-7_2",
    #               },
    #           'Q86':{
    #             "inputRadioClass": "HirsizlikAccordion_radio_Q8_1",
    #             "labelRadio": "label_8-8",
    #                },
    #           'Q87':{
    #             "inputRadioClass": "HirsizlikAccordion_radio_Q8_2",
    #             "labelRadio": "label_8-8_2",
    #               },
    #           'Q88':{
    #             "question": "textarea_8-8",
    #             "input_type": "textarea"
    #               },
    # ]
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

