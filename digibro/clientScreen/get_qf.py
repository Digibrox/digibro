from .models import QFSubCategory,QFQuestions,QFQAnswer



def get_qfq_answers():
    # Veritabanındaki tüm QFQAnswer nesnelerini al
    answers = QFQAnswer.objects.all()

    # Her bir nesneyi JSON formatına dönüştür
    data = []
    for answer in answers:
        print(answer.input_1_1_1)
        data.append({
            "qfqa_id" : answer.qfqa_id,
            "last_user" : answer.last_user,
            "input_1-1-1": str(answer.input_1_1_1),
            "input_1-2-1": answer.input_1_2_1,
            "input_1-3-1": answer.input_1_3_1,
            "input_1-4-1": answer.input_1_4_1,
            "input_1-4-2": answer.input_1_4_2,
            "input_1-4-3": answer.input_1_4_3,
            "input_1-5-1": answer.input_1_5_1,
            "input_1-5-2": answer.input_1_5_2,
            "input_1-6-1": answer.input_1_6_1,
            "input_1-6-2": answer.input_1_6_2,
            "input_1-7-1": answer.input_1_7_1,
            "input_1-7-2": answer.input_1_7_2,
            "input_1-8-1": answer.input_1_8_1,
            "input_1-9-1": answer.input_1_9_1,
            "input_1-9-2": answer.input_1_9_2,
            "input_1-10-1": answer.input_1_10_1,
            "input_1-11-1": str(answer.input_1_11_1),
            "1-11-2_current_selection": answer.input_1_11_2_current_selection,
            "textarea_1-11-3": answer.textarea_1_11_3,
            "input_2-1-1": answer.input_2_1_1,
            "2-1-2_current_selection": answer.input_2_1_2_current_selection,
            "textarea_2-1-3": answer.textarea_2_1_3,
            "yanginAccordion_radio_Q1_3-1-1": answer.yanginAccordion_radio_Q1_3_1_1,
            "input_3-1-2": answer.input_3_1_2,
            "yanginAccordion_radio_Q1_3-2-1": answer.yanginAccordion_radio_Q1_3_2_1,
            "input_3-2-2": answer.input_3_2_2,
            "yanginAccordion_radio_Q1_3-3-1": answer.yanginAccordion_radio_Q1_3_3_1,
            "input_3-3-2": answer.input_3_3_2,
            "yanginAccordion_radio_Q1_3-4-1": answer.yanginAccordion_radio_Q1_3_4_1,
            "input_3-4-2": answer.input_3_4_2,
            "yanginAccordion_radio_Q1_3-5-1": answer.yanginAccordion_radio_Q1_3_5_1,
            "input_3-5-2": answer.input_3_5_2,
            "yanginAccordion_radio_Q1_3-6-1": answer.yanginAccordion_radio_Q1_3_6_1,
            "input_3-6-2": answer.input_3_6_2,
            "yanginAccordion_radio_Q1_3-7-1":answer.yanginAccordion_radio_Q1_3_7_1,
            "input_3-7-2":answer.input_3_7_2,
            "yanginAccordion_radio_Q1_3-8-1":answer.yanginAccordion_radio_Q1_3_8_1,
            "3-9-1_current_selection":answer.input_3_9_1_current_selection,
            "input_3-10-1":answer.input_3_10_1,
            "3-11-1_current_selection":answer.input_3_11_1_current_selection,
            "3-12-1_current_selection":answer.input_3_12_1_current_selection,
            "3-13-1_current_selection":answer.input_3_13_1_current_selection,
            "3-14-1_current_selection":answer.input_3_14_1_current_selection,
            "4-1-1_current_selection":answer.input_4_1_1_current_selection,
            "input_4-2-1":answer.input_4_2_1,
            "input_4-3-1":answer.input_4_3_1,
            "input_4-4-1":answer.input_4_4_1,
            "input_4-5-1":answer.input_4_5_1,
            "5-1-1_current_selection":answer.input_5_1_1_current_selection,
            "input_5-2-1":answer.input_5_2_1,
            "input_5-3-1":answer.input_5_3_1,
            "input_5-4-1":answer.input_5_4_1,
            "input_5-5-1":answer.input_5_5_1,
            "6-1-1_current_selection":answer.input_6_1_1_current_selection,
            "input_6-2-1":answer.input_6_2_1,
            "input_6-3-1":answer.input_6_3_1,
            "input_6-4-1":answer.input_6_4_1,
            "input_6-5-1":answer.input_6_5_1,
            "7-1-1_current_selection":answer.input_7_1_1_current_selection,
            "7-2-1_current_selection":answer.input_7_2_1_current_selection,
            "7-3-1_current_selection":answer.input_7_3_1_current_selection,
            "7-4-1_current_selection":answer.input_7_4_1_current_selection,
            "HirsizlikAccordion_radio_Q1_8-1-1":answer.HirsizlikAccordion_radio_Q1_8_1_1,
            "HirsizlikAccordion_radio_Q1_8-2-1":answer.HirsizlikAccordion_radio_Q1_8_2_1,
            "HirsizlikAccordion_radio_Q1_8-3-1":answer.HirsizlikAccordion_radio_Q1_8_3_1,
            "HirsizlikAccordion_radio_Q1_8-4-1":answer.HirsizlikAccordion_radio_Q1_8_4_1,
            "HirsizlikAccordion_radio_Q1_8-5-1":answer.HirsizlikAccordion_radio_Q1_8_5_1,
            "HirsizlikAccordion_radio_Q1_8-6-1":answer.HirsizlikAccordion_radio_Q1_8_6_1,
            "HirsizlikAccordion_radio_Q1_8-7-1":answer.HirsizlikAccordion_radio_Q1_8_7_1,
            "HirsizlikAccordion_radio_Q1_8-8-1":answer.HirsizlikAccordion_radio_Q1_8_8_1,
            "textarea_8-8-2":answer.textarea_8_8_2
        })

    return data

def find_value_in_json(json_data, search_key):
    if isinstance(json_data, dict):  # JSON verisi bir sözlükse
        for key, value in json_data.items():
            if search_key in key:  # Anahtar aranan kelimeyi içeriyorsa
                return value  # Değeri döndür
            else:
                # Eğer değer bir sözlük veya listeyse, recursive olarak aramaya devam et
                result = find_value_in_json(value, search_key)
                if result is not None:
                    return result
    elif isinstance(json_data, list):  # JSON verisi bir listeyse
        for item in json_data:
            result = find_value_in_json(item, search_key)
            if result is not None:
                return result
    return None  # Anahtar bulunamazsa None döndür


#qf oluşturmak için çağırılası gerek fonksiyon
def generate_questionnsire_forms():
    #gönderilmesi gereken tüm başlıkları birleştirecek değşken oluşturuluyor
    basliklar_deneme = []
    cevap_json = get_qfq_answers()[-1]
    print(cevap_json)
    #db den tüm başlıklar çekiliyor be basliklar değişkenine aktarılıyor
    #from questions.models import QFSubCategory,QFQuestions
    basliklar = QFSubCategory.objects.all()

    #tüm başlıklar basliklar_deneme değişkeninin içine eklenmek için döngü başlatılıyor
    for b in basliklar: #b database deki başlıkların bulunduğu satırlar objesi

        #basliklar_deneme değişkenini içine eklenecek dic için değişken oluşturuluyor
        basliklar_deneme_dic_item = {
                'qfqa_id' : cevap_json['qfqa_id'],
                'last_user' : cevap_json['last_user'],
                'qsc_id': int(b.qsc_id),
                'qsc_name': str(b.qsc_name),
                'qsc_json_title': str(b.qsc_json_title),
                'accordion_id': str(b.accordion_id),
                'accordion_input': str(b.accordion_input),
                'accordion_label': str(b.accordion_label),
                'accordion_divClass': str(b.accordion_divClass),
                'accordion_label_id': str(b.accordion_label_id),
                'accordion_item_desc': str(b.accordion_item_desc),
                'Q0': {
                    'title_pyx': str(b.qsc_json_title)
                },
        }
        
        #basliklar_deneme_dic_item değişkeninne soruları eklemek için dbden sorular çekilerek sorular değişkenine aktarılıyor
        sorular = QFQuestions.objects.filter(qsc_id=b.qsc_id)
        #tüm sorular basliklar_deneme_dic_item değişkeninin içine eklenmek için döngü başlatılıyor
        c = 0
        for s in sorular: #s database deki soruların bulunduğu satırlar objesi
            c += 1
            
            #basliklar_deneme_dic_item değişkenini içine eklenecek dic için değişken oluşturuluyor 
            basliklar_deneme_dic_item_question_item = {
                "question": str(s.question),
                "qfq_sort_number": str(s.qfq_sort_number),
                "qsc_id": str(s.qsc_id)
            }

            if s.radio :
                basliklar_deneme_dic_item_question_item["radio"] = " ",
                #'checked': 'option1'      _radio_Q1_3-3-
                check_answer = str(s.qsc_id) + "-" + str(s.qfq_sort_number) + "-"
                search_key = "_radio_Q1_" + check_answer # Aranacak anahtarın bir parçası
                value = find_value_in_json(cevap_json, search_key)
                print(search_key)
                print(value)
                if value is not None:
                    basliklar_deneme_dic_item_question_item["checked"] = value
                else:
                    print(f"{search_key} anahtarı bulunamadı.")
            if s.radio_option1 :
                basliklar_deneme_dic_item_question_item["radio_option1"] = s.radio_option1
                if "checked" in basliklar_deneme_dic_item_question_item:
                    if basliklar_deneme_dic_item_question_item["checked"] == s.radio_option1:
                        basliklar_deneme_dic_item_question_item["checked"] = "option1"
            if s.radio_option2 : 
                basliklar_deneme_dic_item_question_item["radio_option2"] = s.radio_option2
                if "checked" in basliklar_deneme_dic_item_question_item:
                    if basliklar_deneme_dic_item_question_item["checked"] == s.radio_option2:
                        basliklar_deneme_dic_item_question_item["checked"] = "option2"
            if s.radio_option3 : 
                basliklar_deneme_dic_item_question_item["radio_option3"] = s.radio_option3
                if "checked" in basliklar_deneme_dic_item_question_item:
                    if basliklar_deneme_dic_item_question_item["checked"] == s.radio_option3:
                        basliklar_deneme_dic_item_question_item["checked"] = "option3"
            if s.radio_option4 : 
                basliklar_deneme_dic_item_question_item["radio_option4"] = s.radio_option4
                if "checked" in basliklar_deneme_dic_item_question_item:
                    if basliklar_deneme_dic_item_question_item["checked"] == s.radio_option4:
                        basliklar_deneme_dic_item_question_item["checked"] = "option4"
            
            if s.inputName : basliklar_deneme_dic_item_question_item["inputName"] = s.inputName
            if s.input_type : basliklar_deneme_dic_item_question_item["input_type"] = s.input_type
            if s.inputName2 : basliklar_deneme_dic_item_question_item["inputName2"] = s.inputName2
            if s.input_type2 : basliklar_deneme_dic_item_question_item["input_type2"] = s.input_type2
            if s.inputName3 : basliklar_deneme_dic_item_question_item["inputName3"] = s.inputName3
            if s.input_type3 : basliklar_deneme_dic_item_question_item["input_type3"] = s.input_type3
            if s.currentSelection : 
                total = []
                basliklar_deneme_dic_item_question_item["currentSelection"] = " "
                #2-1-2_current_selection
                check_answer = str(s.qsc_id) + "-" + str(s.qfq_sort_number) + "-"
                if  check_answer + "1_current_selection" in cevap_json:
                    if cevap_json[check_answer + "1_current_selection"]:
                        total = cevap_json[check_answer + "1_current_selection"].split(" ")
                elif  check_answer + "2_current_selection" in cevap_json:
                    if cevap_json[check_answer + "2_current_selection"]:
                        total = cevap_json[check_answer + "2_current_selection"].split(" ")
                else:
                    print("\n\n\n\n_________________________________\n\n\nOLMADI1")
                print("\n\n\n",check_answer)
                if len(total) == 2:
                    basliklar_deneme_dic_item_question_item["currency_answer"] = total[0]
                    basliklar_deneme_dic_item_question_item["ca_selection"] = total[1]
                elif len(total) == 1:
                    basliklar_deneme_dic_item_question_item["currency_answer"] = total[0]
                    basliklar_deneme_dic_item_question_item["ca_selection"] = "$"
            if s.textarea :
                #textarea_8-9-3
                check_answer = "textarea_" + str(s.qsc_id) + "-" + str(s.qfq_sort_number) + "-"
                basliklar_deneme_dic_item_question_item["textarea"] = s.textarea
                if  check_answer + "1" in cevap_json:
                    basliklar_deneme_dic_item_question_item["text_area_answer"] = cevap_json[check_answer + "1"]
                elif  check_answer + "2" in cevap_json:
                    basliklar_deneme_dic_item_question_item["text_area_answer"] = cevap_json[check_answer + "2"]
                elif  check_answer + "3" in cevap_json:
                    basliklar_deneme_dic_item_question_item["text_area_answer"] = cevap_json[check_answer + "3"]
                else:
                    print("\n\n\n\n_________________________________\n\n\nOLMADI2")
            if s.placeholder : basliklar_deneme_dic_item_question_item["placeholder"] = s.placeholder
            
            #bu aşamada her bir Q için cevapları da eklememz gerekiyor
            #input için 'answer' : 'Answer'+
            #inputName2 için 'answer2' : 'Answer'+
            #inputName3 için 'answer3' : 'Answer'+
            #currentSelection için 'currency_answer' : 123,'ca_selection':'TL'  ('TL','USD','EUR','GBP')+
            #textarea için 'text_area_answer' : 'Olaylar olaylar!'+
            #radio için 'checked': 'option1' ('option1','option2','option3','option4')
            check_answer = "input_" + str(s.qsc_id) + "-" + str(s.qfq_sort_number) + "-"
            if  check_answer + "1" in cevap_json:
                basliklar_deneme_dic_item_question_item["answer"] = cevap_json[check_answer + "1"]
            if  check_answer + "2" in cevap_json:
                if "answer" in basliklar_deneme_dic_item_question_item:
                    basliklar_deneme_dic_item_question_item["answer2"] = cevap_json[check_answer + "2"]
                else:
                    basliklar_deneme_dic_item_question_item["answer"] = cevap_json[check_answer + "2"]
            if  check_answer + "3" in cevap_json:
                if "answer" in basliklar_deneme_dic_item_question_item:
                    basliklar_deneme_dic_item_question_item["answer3"] = cevap_json[check_answer + "3"]
                else:
                    basliklar_deneme_dic_item_question_item["answer"] = cevap_json[check_answer + "3"]

            #hazırlanan basliklar_deneme_dic_item_question_item  değişkeni basliklar_deneme_dic_item değişkenine ekleniyor 
            basliklar_deneme_dic_item['Q'+str(c)] = basliklar_deneme_dic_item_question_item
        
        #hazırlanan basliklar_deneme_dic_item html e gönderilmesi gereken basliklar_deneme değişkenine ekleniyor 
        basliklar_deneme.append(basliklar_deneme_dic_item)
    

    return basliklar_deneme

# basliklar_deneme = [
#     {
#         'qsc_id': 1, 'qsc_name': 'Ön Bilgi', 'qsc_json_title': 'Ön Bilgi', 'accordion_id': 'informationAccordion2', 'accordion_input': 'accordion4', 'accordion_label': 'accordion4Label', 'accordion_divClass': 'accordion4LabelDiv', 'accordion_label_id': 'onBilgiAcc', 'accordion_item_desc': 'onBilgiDiv',
#         'Q0': {'title_pyx': 'Ön Bilgi','answer' : "2024-10-05"},
#         'Q1': {'question': 'Tarih:', 'qfq_sort_number': '1', 'qsc_id': '1', 'input_type': 'date','answer' : "2024-10-05"},
#         'Q2': {'question': 'Poliçe / Teklif No:', 'qfq_sort_number': '2', 'qsc_id': '1', 'input_type': 'text','answer' : "Pol123"}, 
#         'Q3': {'question': 'Sigortalı Adı :', 'qfq_sort_number': '3', 'qsc_id': '1', 'input_type': 'text','answer' : "Ali Veli"}, 
#         'Q4': {'question': 'Adres Bilgileri :', 'qfq_sort_number': '4', 'qsc_id': '1',
#                 'inputName': 'İl :', 'input_type': 'text','answer' : "İstanbul",
#                 'inputName2': 'İlçe :', 'input_type2': 'text','answer2' : "Ataşehir",
#                 'inputName3': 'Mahalle :', 'input_type3': 'text','answer3' : "İçerenköy"}, 
#         'Q5': {'question': 'Faaliyet :', 'qfq_sort_number': '5', 'qsc_id': '1', 'input_type': 'text','answer' : "Faaliyet Adı",
#                 'inputName2': 'Bina içerisindeki diğer faaliyetler :', 'input_type2': 'text','answer2' : "Diğer Faaliyetler"}, 
#         'Q6': {'question': 'Personel Sayısı :', 'qfq_sort_number': '6', 'qsc_id': '1', 'input_type': 'text','answer' : 3,
#                 'inputName2': 'Vardiya Sayısı :', 'input_type2': 'number','answer2' : 1}, 
#         'Q7': {'question': 'Koordinatlar,', 'qfq_sort_number': '7', 'qsc_id': '1', 'inputName': 'N :', 'input_type': 'text','answer' : "40.9866",
#                 'inputName2': 'E :', 'input_type2': 'text','answer2' : "29.1876"}, 
#         'Q8': {'question': 'Gerekli Durumda İletişime Geçilecek Yetkili Kişi :', 'qfq_sort_number': '8', 'qsc_id': '1', 'input_type': 'text','answer' : "Fatih Bey"}, 
#         'Q9': {'question': 'Telefon :', 'qfq_sort_number': '9', 'qsc_id': '1', 'input_type': 'text','answer' : "5555555555",
#                 'inputName2': 'E-Mail :', 'input_type2': 'text','answer2' : "fatih@digibro.com"}, 
#         'Q10': {'question': 'Önceki Sigorta Şirketi :', 'qfq_sort_number': '10', 'qsc_id': '1', 'input_type': 'text','answer' : "Mapfre Sigorta"}, 
#         'Q11': {'question': 'Hasar Geçmişi :', 'qfq_sort_number': '11', 'qsc_id': '1',
#                 'inputName': 'Tarih ve Tutar :', 'input_type': 'date','answer' : "2024-10-05",
#                 'currentSelection': ' ','currency_answer' : 10000,'ca_selection':'TL',
#                 'textarea': 'Olayı yazınız.','text_area_answer' : "Olaylar olaylar!"}
#     },
#     {  
#         'qsc_id': 2,
#         'qsc_name': 'Hasar',
#         'qsc_json_title': 'Hasar',
#         'accordion_id': 'HasarAccordion',
#         'accordion_input': 'accordionHasar',
#         'accordion_label': 'accordionHasarLabel',
#         'accordion_divClass': 'accordionHasarDiv',
#         'accordion_label_id': 'HasarAcc',
#         'accordion_item_desc': 'HasarDiv', 
#         'Q0': {'title_pyx': 'Hasar','answer' : '2024-10-05'}, 
#         'Q1': {'question': 'Hasar Teminatı ve Tutarı:', 'qfq_sort_number': '1', 'qsc_id': '2', 'input_type': 'text','answer':200, 
#                'currentSelection': ' ','currency_answer' : 255,'ca_selection':'USD', 
#                'textarea': 'Hasar nedenini ve ilgili iyileştirmeleri yazınız.','text_area_answer' : 'Olaylar olaylar olaaaaaaaaaay!'}
#     },
#     {
#         'qsc_id': 3, 'qsc_name': 'Yangın', 'qsc_json_title': 'Yangın Önlemleri', 'accordion_id': 'yanginAccordion', 'accordion_input': 'accordionYangin', 'accordion_label': 'accordionYanginLabel', 'accordion_divClass': 'accordionYanginDiv', 'accordion_label_id': 'YanginAcc', 'accordion_item_desc': 'YanginDiv', 
#         'Q0': {'title_pyx': 'Yangın Önlemleri','answer' : '2024-10-05'}, 
#         'Q1': {'question': 'Yangın Tüpleri:', 'qfq_sort_number': '1', 'qsc_id': '3', 'radio': (' ',), 
#                'radio_option1': 'Var', 'radio_option2': 'Yok','checked': 'option1',
#                'inputName': 'Adet :', 'input_type': 'text','answer' : 17}, 
#         'Q2': {'question': 'Yangın Dolapları:', 'qfq_sort_number': '2', 'qsc_id': '3', 'radio': (' ',), 
#                'radio_option1': 'Var', 'radio_option2': 'Yok','checked': 'option2',
#                'inputName': 'Adet :', 'input_type': 'text','answer' : 17}, 
#         'Q3': {'question': 'Yangın Hidrantları:', 'qfq_sort_number': '3', 'qsc_id': '3', 'radio': (' ',), 
#                'radio_option1': 'Var', 'radio_option2': 'Yok', 'checked': 'option2',
#                'inputName': 'Adet :', 'input_type': 'text','answer' : 11}, 
#         'Q4': {'question': 'Duman Dedektörleri:', 'qfq_sort_number': '4', 'qsc_id': '3', 'radio': (' ',), 
#                'radio_option1': 'Var', 'radio_option2': 'Yok', 'checked': 'option1',
#                'inputName': 'Tesisin % kaçını kapsıyor? :', 'input_type': 'text', 'placeholder': '%','answer' : 55}, 
#         'Q5': {'question': 'Yangın Suyu Deposu:', 'qfq_sort_number': '5', 'qsc_id': '3', 'radio': (' ',), 
#                'radio_option1': 'Var', 'radio_option2': 'Yok', 'checked': 'option2',
#                'inputName': 'Depo Hacmi :', 'input_type': 'text', 'placeholder': 'm³','answer' : 123}, 
#         'Q6': {'question': 'Yangın Pompa Grubu:', 'qfq_sort_number': '6', 'qsc_id': '3', 'radio': (' ',), 
#                'radio_option1': 'Elektrikli', 'radio_option2': 'Dizel', 'radio_option3': 'Dizel-Elektrikli', 'radio_option4': 'Yok', 'checked': 'option3',
#                'inputName': 'Açıklama :', 'input_type': 'text','answer' : "açıklama yapmışımdır"}, 
#         'Q7': {'question': 'Yangın Pompası İçin Otomatik Jeneratör:', 'qfq_sort_number': '7', 'qsc_id': '3', 'radio': (' ',), 
#                'radio_option1': 'Var', 'radio_option2': 'Yok', 'checked': 'option1',
#                'inputName': 'Tesisin % kaçını kapsıyor? :', 'input_type': 'text', 'placeholder': '%','answer' : 60}, 
#         'Q8': {'question': 'Lokal Söndürme Sistemleri:', 'qfq_sort_number': '8', 'qsc_id': '3', 'radio': (' ',), 
#                'radio_option1': 'Var', 'radio_option2': 'Yok', 'checked': 'option2'},
#         'Q9': {'question': 'Bina Bedeli Tutarı:', 'qfq_sort_number': '9', 'qsc_id': '3', 
#                'currentSelection': ' ','currency_answer' : 2500000,'ca_selection':'EUR'}, 
#         'Q10': {'question': 'Bina Alanı (m²):', 'qfq_sort_number': '10', 'qsc_id': '3', 'input_type': 'number', 'placeholder': 'm²','answer' :378}, 
#         'Q11': {'question': 'Demirbaş Bedeli Tutarı:', 'qfq_sort_number': '11', 'qsc_id': '3', 
#                 'currentSelection': ' ','currency_answer' : 1250,'ca_selection':'GBP'}, 
#         'Q12': {'question': 'Dekorasyon Bedeli Tutarı:', 'qfq_sort_number': '12', 'qsc_id': '3', 
#                 'currentSelection': ' ','currency_answer' : 1250,'ca_selection':'GBP'}, 
#         'Q13': {'question': 'Makina Bedeli Tutarı:', 'qfq_sort_number': '13', 'qsc_id': '3', 
#                 'currentSelection': ' ','currency_answer' : 1250,'ca_selection':'GBP'}, 
#         'Q14': {'question': 'Emtia Tutarı:', 'qfq_sort_number': '14', 'qsc_id': '3', 
#                 'currentSelection': ' ','currency_answer' : 1250,'ca_selection':'GBP'}
#     },
#     {
#         'qsc_id': 4, 'qsc_name': 'Elektronik Cihaz', 'qsc_json_title': 'Elektronik Cihaz', 'accordion_id': 'ECAccordion', 'accordion_input': 'accordionEC', 'accordion_label': 'accordionECLabel', 'accordion_divClass': 'accordionECDiv', 'accordion_label_id': 'ECAcc', 'accordion_item_desc': 'ECDiv', 
#         'Q0': {'title_pyx': 'Elektronik Cihaz'}, 
#         'Q1': {'question': 'Bedel:', 'qfq_sort_number': '1', 'qsc_id': '4', 
#                'currentSelection': ' ','currency_answer' : 27950,'ca_selection':'TL'}, 
#         'Q2': {'question': 'Model:', 'qfq_sort_number': '2', 'qsc_id': '4', 'input_type': 'text','answer' : "S20"}, 
#         'Q3': {'question': 'Marka:', 'qfq_sort_number': '3', 'qsc_id': '4', 'input_type': 'text','answer' : "Samsung"}, 
#         'Q4': {'question': 'Seri Numarası:', 'qfq_sort_number': '4', 'qsc_id': '4', 'input_type': 'text','answer' : '321123123'}, 
#         'Q5': {'question': 'Yaşı:', 'qfq_sort_number': '5', 'qsc_id': '4', 'input_type': 'number','answer' : 5}
#     },
#     {
#         'qsc_id': 5, 'qsc_name': 'Makine Kırılması', 'qsc_json_title': 'Makine Kırılması', 'accordion_id': 'MKAccordion', 'accordion_input': 'accordionMK', 'accordion_label': 'accordionMKLabel', 'accordion_divClass': 'accordionMKDiv', 'accordion_label_id': 'MKAcc', 'accordion_item_desc': 'MKDiv', 
#         'Q0': {'title_pyx': 'Makine Kırılması'}, 
#         'Q1': {'question': 'Bedel:', 'qfq_sort_number': '1', 'qsc_id': '5', 
#                'currentSelection': ' ','currency_answer' : 267950,'ca_selection':'TL'}, 
#         'Q2': {'question': 'Model:', 'qfq_sort_number': '2', 'qsc_id': '5', 'input_type': 'text','answer' : 'AL-928'}, 
#         'Q3': {'question': 'Marka:', 'qfq_sort_number': '3', 'qsc_id': '5', 'input_type': 'text','answer' : 'TOSHIBA'}, 
#         'Q4': {'question': 'Seri Numarası:', 'qfq_sort_number': '4', 'qsc_id': '5', 'input_type': 'text','answer' : '323123121123123'}, 
#         'Q5': {'question': 'Yaşı:', 'qfq_sort_number': '5', 'qsc_id': '5', 'input_type': 'number','answer' : 3}
#     },
#     {
#         'qsc_id': 6, 'qsc_name': 'İşveren Mali Mesuliyet', 'qsc_json_title': 'İşveren Mali Mesuliyet', 'accordion_id': 'IMMAccordion', 'accordion_input': 'accordionIMM', 'accordion_label': 'accordionIMMLabel', 'accordion_divClass': 'accordionIMMDiv', 'accordion_label_id': 'IMMAcc', 'accordion_item_desc': 'IMMDiv', 
#         'Q0': {'title_pyx': 'İşveren Mali Mesuliyet'}, 
#         'Q1': {'question': 'Bedel:', 'qfq_sort_number': '1', 'qsc_id': '6', 
#                'currentSelection': ' ','currency_answer' : 2950,'ca_selection':'USD'}, 
#         'Q2': {'question': 'Model:', 'qfq_sort_number': '2', 'qsc_id': '6', 'input_type': 'text','answer' : "Pavilion"}, 
#         'Q3': {'question': 'Marka:', 'qfq_sort_number': '3', 'qsc_id': '6', 'input_type': 'text','answer' : "HP"}, 
#         'Q4': {'question': 'Seri Numarası:', 'qfq_sort_number': '4', 'qsc_id': '6', 'input_type': 'text','answer' : "12873612asd2"}, 
#         'Q5': {'question': 'Yaşı:', 'qfq_sort_number': '5', 'qsc_id': '6', 'input_type': 'number','answer' : 3}
#     },
#     {
#         'qsc_id': 7, 'qsc_name': 'Şahıs Mali Mesuliyet', 'qsc_json_title': 'Şahıs Mali Mesuliyet', 'accordion_id': 'TPLAccordion', 'accordion_input': 'accordionTPL', 'accordion_label': 'accordionTPLLabel', 'accordion_divClass': 'accordionTPLDiv', 'accordion_label_id': 'TPLAcc', 'accordion_item_desc': 'TPLDiv', 
#         'Q0': {'title_pyx': 'Şahıs Mali Mesuliyet'}, 
#         'Q1': {'question': 'Ciro:', 'qfq_sort_number': '1', 'qsc_id': '7', 
#                'currentSelection': ' ','currency_answer' : 123,'ca_selection':'TL'}, 
#         'Q2': {'question': 'Ek Olarak İstenen Limit 1. Alternatif:', 'qfq_sort_number': '2', 'qsc_id': '7', 
#                'currentSelection': ' ','currency_answer' : 123,'ca_selection':'TL'}, 
#         'Q3': {'question': 'Ek Olarak İstenen Limit 2. Alternatif:', 'qfq_sort_number': '3', 'qsc_id': '7', 
#                'currentSelection': ' ','currency_answer' : 123,'ca_selection':'TL'}, 
#         'Q4': {'question': 'Ek Olarak İstenen Limit 3. Alternatif:', 'qfq_sort_number': '4', 'qsc_id': '7', 
#                'currentSelection': ' ','currency_answer' : 123,'ca_selection':'TL'}
#     },
#     {
#         'qsc_id': 8, 'qsc_name': 'Hırsızlık Önlemleri', 'qsc_json_title': 'Hırsızlık Önlemleri', 'accordion_id': 'HirsizlikAccordion', 'accordion_input': 'accordionHirsizlik', 'accordion_label': 'accordionHirsizlikLabel', 'accordion_divClass': 'accordionHirsizlikDiv', 'accordion_label_id': 'hirsizlikAcc', 'accordion_item_desc': 'hirsizlikDiv', 
#         'Q0': {'title_pyx': 'Hırsızlık Önlemleri'}, 
#         'Q1': {'question': 'Tesis çevresi çevrili mi ?', 'qfq_sort_number': '1', 'qsc_id': '8', 'radio': (' ',), 
#                'radio_option1': 'Evet', 'radio_option2': 'Hayır','checked': 'option'}, 
#         'Q2': {'question': 'Bekçi köpeği var mı ?', 'qfq_sort_number': '2', 'qsc_id': '8', 'radio': (' ',), 
#                 'radio_option1': 'Var', 'radio_option2': 'Yok','checked': 'option1'}, 
#         'Q3': {'question': 'Çevre Aydınlatması var mı ?', 'qfq_sort_number': '3', 'qsc_id': '8', 'radio': (' ',), 
#                 'radio_option1': 'Var', 'radio_option2': 'Yok','checked': 'option2'}, 
#         'Q4': {'question': 'Kepenk var mı ?', 'qfq_sort_number': '4', 'qsc_id': '8', 'radio': (' ',), 
#                 'radio_option1': 'Var', 'radio_option2': 'Yok','checked': 'option1'}, 
#         'Q5': {'question': '24 saat güvenlik var mı ?', 'qfq_sort_number': '5', 'qsc_id': '8', 'radio': (' ',), 
#                 'radio_option1': 'Var', 'radio_option2': 'Yok','checked': 'option2'}, 
#         'Q6': {'question': 'Kayıt alabilen kamera sistemi var mı ?', 'qfq_sort_number': '6', 'qsc_id': '8', 'radio': (' ',), 
#                 'radio_option1': 'Var', 'radio_option2': 'Yok','checked': 'option1'}, 
#         'Q7': {'question': 'Güvenlik şirketi ve/veya karakola bağlı alarm sistemi var mı ?', 'qfq_sort_number': '7', 'qsc_id': '8', 'radio': (' ',), 
#                 'radio_option1': 'Var', 'radio_option2': 'Yok','checked': 'option2'}, 
#         'Q8': {'question': 'Karakola bağlı alarm sistemi var mı ?', 'qfq_sort_number': '8', 'qsc_id': '8', 'radio': (' ',), 
#                 'radio_option1': 'Var', 'radio_option2': 'Yok','checked': 'option1',
#                 'textarea': 'Ek tedbirleriniz varsa yazınız.','text_area_answer' : "Olaylar ama ne olaylar"}
#     }
# ]

# cevap_json = {
#     "input_1-1-1" :"2024-06-01",
#     "input_1-2-1":"Pol123",
#     "input_1-3-1":"Ali Veli",
#     "input_1-4-1":"İstanbul",
#     "input_1-4-2":"Ataşehir",
#     "input_1-4-3":"İçerenköy",
#     "input_1-5-1":"Faaliyet Adı",
#     "input_1-5-2":"Diğer Faaliyetler",
#     "input_1-6-1":3,
#     "input_1-6-2":1,
#     "input_1-7-1":"40.9866",
#     "input_1-7-2":"29.1876",
#     "input_1-8-1":"Fatih Bey",
#     "input_1-9-1":"5555555555",
#     "input_1-9-2":"fatih@digibro.com",
#     "input_1-10-1":"Mapfre Sigorta",
#     "input_1-11-1":"2024-10-05",
#     "1-11-2_current_selection":"10000 ₺",
#     "textarea_1-11-3":"Olaylar olaylar!",
#     "input_2-1-1":"200",
#     "2-1-2_current_selection":"255 $",
#     "textarea_2-1-3":"Olaylar olaylar olaaaaaaaaaay!",
#     "yanginAccordion_radio_Q1_3-1-1":"Var",
#     "input_3-1-2":17,
#     "yanginAccordion_radio_Q1_3-2-1":"Yok",
#     "input_3-2-2":17,
#     "yanginAccordion_radio_Q1_3-3-1":"Yok",
#     "input_3-3-2":11,
#     "yanginAccordion_radio_Q1_3-4-1":"Var",
#     "input_3-4-2":55,
#     "yanginAccordion_radio_Q1_3-5-1":"Yok",
#     "input_3-5-2":123,
#     "yanginAccordion_radio_Q1_3-6-1":"Dizel-Elektrikli",
#     "input_3-6-2":"açıklama yapmışımdır",
#     "yanginAccordion_radio_Q1_3-7-1":"Var",
#     "input_3-7-2":60,
#     "yanginAccordion_radio_Q1_3-8-1":"Yok",
#     "3-9-1_current_selection":"2500000 €",
#     "input_3-10-1":378,
#     "3-11-1_current_selection":"1250 £",
#     "3-12-1_current_selection":"1250 £",
#     "3-13-1_current_selection":"1250 £",
#     "3-14-1_current_selection":"1250 £",
#     "4-1-1_current_selection":"27950 ₺",
#     "input_4-2-1":"S20",
#     "input_4-3-1":"Samsung",
#     "input_4-4-1":"321123123",
#     "input_4-5-1":5,
#     "5-1-1_current_selection":"267950 ₺",
#     "input_5-2-1":"AL-928",
#     "input_5-3-1":"TOSHIBA",
#     "input_5-4-1":"323123121123123",
#     "input_5-5-1":3,
#     "6-1-1_current_selection":"2950 $",
#     "input_6-2-1":"Pavilion",
#     "input_6-3-1":"HP",
#     "input_6-4-1":"12873612asd2",
#     "input_6-5-1":1,
#     "7-1-1_current_selection":"123 ₺",
#     "7-2-1_current_selection":"123 ₺",
#     "7-3-1_current_selection":"123 ₺",
#     "7-4-1_current_selection":"123 ₺",
#     "HirsizlikAccordion_radio_Q1_8-1-1":"Hayır",
#     "HirsizlikAccordion_radio_Q1_8-2-1":"Var",
#     "HirsizlikAccordion_radio_Q1_8-3-1":"Yok",
#     "HirsizlikAccordion_radio_Q1_8-4-1":"Var",
#     "HirsizlikAccordion_radio_Q1_8-5-1":"Yok",
#     "HirsizlikAccordion_radio_Q1_8-6-1":"Var",
#     "HirsizlikAccordion_radio_Q1_8-7-1":"Yok",
#     "HirsizlikAccordion_radio_Q1_8-8-1":"Var",
#     "textarea_8-8-2":"Olaylar olaylar son!"
# }