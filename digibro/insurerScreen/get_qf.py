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