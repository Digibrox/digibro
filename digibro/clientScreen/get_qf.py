from .models import QFSubCategory,QFQuestions

#qf oluşturmak için çağırılası gerek fonksiyon
def generate_questionnsire_forms():
    #gönderilmesi gereken tüm başlıkları birleştirecek değşken oluşturuluyor
    basliklar_deneme = []

    #db den tüm başlıklar çekiliyor be basliklar değişkenine aktarılıyor
    #from questions.models import QFSubCategory,QFQuestions
    basliklar = QFSubCategory.objects.all()

    #tüm başlıklar basliklar_deneme değişkeninin içine eklenmek için döngü başlatılıyor
    for b in basliklar: #b database deki başlıkların bulunduğu satırlar objesi

        #basliklar_deneme değişkenini içine eklenecek dic için değişken oluşturuluyor
        basliklar_deneme_dic_item = {
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
            if s.radio : basliklar_deneme_dic_item_question_item["radio"] = " ",
            if s.radio_option1 : basliklar_deneme_dic_item_question_item["radio_option1"] = s.radio_option1
            if s.radio_option2 : basliklar_deneme_dic_item_question_item["radio_option2"] = s.radio_option2
            if s.radio_option3 : basliklar_deneme_dic_item_question_item["radio_option3"] = s.radio_option3
            if s.radio_option4 : basliklar_deneme_dic_item_question_item["radio_option4"] = s.radio_option4
            if s.inputName : basliklar_deneme_dic_item_question_item["inputName"] = s.inputName
            if s.input_type : basliklar_deneme_dic_item_question_item["input_type"] = s.input_type
            if s.inputName2 : basliklar_deneme_dic_item_question_item["inputName2"] = s.inputName2
            if s.input_type2 : basliklar_deneme_dic_item_question_item["input_type2"] = s.input_type2
            if s.inputName3 : basliklar_deneme_dic_item_question_item["inputName3"] = s.inputName3
            if s.input_type3 : basliklar_deneme_dic_item_question_item["input_type3"] = s.input_type3
            if s.currentSelection : basliklar_deneme_dic_item_question_item["currentSelection"] = " "
            if s.textarea : basliklar_deneme_dic_item_question_item["textarea"] = s.textarea
            if s.placeholder : basliklar_deneme_dic_item_question_item["placeholder"] = s.placeholder

            #hazırlanan basliklar_deneme_dic_item_question_item  değişkeni basliklar_deneme_dic_item değişkenine ekleniyor 
            basliklar_deneme_dic_item['Q'+str(c)] = basliklar_deneme_dic_item_question_item
        
        #hazırlanan basliklar_deneme_dic_item html e gönderilmesi gereken basliklar_deneme değişkenine ekleniyor 
        basliklar_deneme.append(basliklar_deneme_dic_item)

    return basliklar_deneme
