# models.py
from django.db import models

class FormVerisi(models.Model):
    tarih = models.DateField()
    teklif_no = models.CharField(max_length=100)
    sigortali_adi = models.CharField(max_length=100)
    vkn = models.CharField(max_length=100, blank=True, null=True)


class QuestionnaireFormCategory(models.Model):
    qfc_id = models.AutoField(primary_key=True)
    category_name = models.CharField(max_length=255, unique=True)
    default_qsc_id = models.TextField(blank=True, null=True)
    additional_qsc_id = models.TextField(blank=True, null=True)

    class Meta:
        db_table = 'questionnaire_form_category'
        managed = False  # Veritabanındaki mevcut tabloyu yönetmemesi için

    def __str__(self):
        return self.category_name
    
class QFSubCategory(models.Model):
    qsc_id = models.AutoField(primary_key=True)
    qsc_sort_number = models.IntegerField(unique=True)
    qsc_name = models.CharField(max_length=255, unique=True)
    qsc_color = models.CharField(max_length=255, blank=True, null=True)
    qsc_json_title = models.TextField()
    accordion_id = models.TextField()
    accordion_input = models.TextField()
    accordion_label = models.TextField()
    accordion_divClass = models.TextField()
    accordion_label_id = models.TextField()
    accordion_item_desc = models.TextField()

    class Meta:
        db_table = 'qf_sub_category'
        managed = False  # Veritabanındaki mevcut tabloyu yönetmemesi için

    def __str__(self):
        return self.qsc_name
    

class QFQuestions(models.Model):
    qfq_id = models.AutoField(primary_key=True)
    qfq_sort_number = models.IntegerField()
    qsc_id = models.IntegerField()
    question = models.TextField()
    radio = models.IntegerField(blank=True, null=True)
    radio_option1 = models.TextField(blank=True, null=True)
    radio_option2 = models.TextField(blank=True, null=True)
    radio_option3 = models.TextField(blank=True, null=True)
    radio_option4 = models.TextField(blank=True, null=True)
    inputName = models.TextField(blank=True, null=True)
    input_type = models.TextField(blank=True, null=True)
    inputName2 = models.TextField(blank=True, null=True)
    input_type2 = models.TextField(blank=True, null=True)
    inputName3 = models.TextField(blank=True, null=True)
    input_type3 = models.TextField(blank=True, null=True)
    currentSelection = models.TextField(blank=True, null=True)
    textarea = models.TextField(blank=True, null=True)
    placeholder = models.TextField(blank=True, null=True)


    class Meta:
        db_table = 'qf_questions'
        managed = False  # Veritabanındaki mevcut tabloyu yönetmemesi için

    def __str__(self):
        return self.question


class QFQAnswer(models.Model):
    qfqa_id = models.AutoField(primary_key=True)
    last_user = models.CharField(max_length=255,blank=False, null=False)
    input_1_1_1 = models.DateField()  # "2024-06-01"
    input_1_2_1 = models.CharField(max_length=255)  # "Pol123"
    input_1_3_1 = models.CharField(max_length=255)  # "Ali Veli"
    input_1_4_1 = models.CharField(max_length=255)  # "İstanbul"
    input_1_4_2 = models.CharField(max_length=255)  # "Ataşehir"
    input_1_4_3 = models.CharField(max_length=255)  # "İçerenköy"
    input_1_5_1 = models.CharField(max_length=255)  # "Faaliyet Adı"
    input_1_5_2 = models.CharField(max_length=255)  # "Diğer Faaliyetler"
    input_1_6_1 = models.IntegerField()  # 3
    input_1_6_2 = models.IntegerField()  # 1
    input_1_7_1 = models.CharField(max_length=255)  # 40.9866
    input_1_7_2 = models.CharField(max_length=255)  # 29.1876
    input_1_8_1 = models.CharField(max_length=255)  # "Fatih Bey"
    input_1_9_1 = models.CharField(max_length=255)  # "5555555555"
    input_1_9_2 = models.EmailField()  # "fatih@digibro.com"
    input_1_10_1 = models.CharField(max_length=255)  # "Mapfre Sigorta"
    input_1_11_1 = models.DateField()  # "2024-10-05"
    input_1_11_2_current_selection = models.CharField(max_length=255)  # "10000 ₺"
    textarea_1_11_3 = models.TextField()  # "Olaylar olaylar!"
    input_2_1_1 = models.CharField(max_length=255)  # "200"
    input_2_1_2_current_selection = models.CharField(max_length=255)  # "255 $"
    textarea_2_1_3 = models.TextField()  # "Olaylar olaylar olaaaaaaaaaay!"
    yanginAccordion_radio_Q1_3_1_1 = models.CharField(max_length=255)  # "Var"
    input_3_1_2 = models.IntegerField()  # 17
    yanginAccordion_radio_Q1_3_2_1 = models.CharField(max_length=255)  # "Yok"
    input_3_2_2 = models.IntegerField()  # 17
    yanginAccordion_radio_Q1_3_3_1 = models.CharField(max_length=255)  # "Yok"
    input_3_3_2 = models.IntegerField()  # 11
    yanginAccordion_radio_Q1_3_4_1 = models.CharField(max_length=255)  # "Var"
    input_3_4_2 = models.IntegerField()  # 55
    yanginAccordion_radio_Q1_3_5_1 = models.CharField(max_length=255)  # "Yok"
    input_3_5_2 = models.IntegerField()  # 123
    yanginAccordion_radio_Q1_3_6_1 = models.CharField(max_length=255)  # "Dizel-Elektrikli"
    input_3_6_2 = models.TextField()  # "açıklama yapmışımdır"
    yanginAccordion_radio_Q1_3_7_1 = models.CharField(max_length=255)  # "Var"
    input_3_7_2 = models.IntegerField()  # 60
    yanginAccordion_radio_Q1_3_8_1 = models.CharField(max_length=255)  # "Yok"
    input_3_9_1_current_selection = models.CharField(max_length=255)  # 2500000 €
    input_3_10_1 = models.IntegerField()  # 378
    input_3_11_1_current_selection = models.CharField(max_length=255)  # "1250 £"
    input_3_12_1_current_selection = models.CharField(max_length=255)  # "1250 £"
    input_3_13_1_current_selection = models.CharField(max_length=255)  # "1250 £"
    input_3_14_1_current_selection = models.CharField(max_length=255)  # "1250 £"
    input_4_1_1_current_selection = models.CharField(max_length=255)  # "27950 ₺"
    input_4_2_1 = models.CharField(max_length=255)  # "S20"
    input_4_3_1 = models.CharField(max_length=255)  # "Samsung"
    input_4_4_1 = models.CharField(max_length=255)  # "321123123"
    input_4_5_1 = models.IntegerField()  # 5
    input_5_1_1_current_selection = models.CharField(max_length=255)  # "267950 ₺"
    input_5_2_1 = models.CharField(max_length=255)  # "AL-928"
    input_5_3_1 = models.CharField(max_length=255)  # "TOSHIBA"
    input_5_4_1 = models.CharField(max_length=255)  # "323123121123123"
    input_5_5_1 = models.IntegerField()  # 3
    input_6_1_1_current_selection = models.CharField(max_length=255)  # "2950 $"
    input_6_2_1 = models.CharField(max_length=255)  # "Pavilion"
    input_6_3_1 = models.CharField(max_length=255)  # "HP"
    input_6_4_1 = models.CharField(max_length=255)  # "12873612asd2"
    input_6_5_1 = models.IntegerField()  # 1
    input_7_1_1_current_selection = models.CharField(max_length=255)  # "123 ₺"
    input_7_2_1_current_selection = models.CharField(max_length=255)  # "123 ₺"
    input_7_3_1_current_selection = models.CharField(max_length=255)  # "123 ₺"
    input_7_4_1_current_selection = models.CharField(max_length=255)  # "123 ₺"
    HirsizlikAccordion_radio_Q1_8_1_1 = models.CharField(max_length=255)  # "Hayır"
    HirsizlikAccordion_radio_Q1_8_2_1 = models.CharField(max_length=255)  # "Var"
    HirsizlikAccordion_radio_Q1_8_3_1 = models.CharField(max_length=255)  # "Yok"
    HirsizlikAccordion_radio_Q1_8_4_1 = models.CharField(max_length=255)  # "Var"
    HirsizlikAccordion_radio_Q1_8_5_1 = models.CharField(max_length=255)  # "Yok"
    HirsizlikAccordion_radio_Q1_8_6_1 = models.CharField(max_length=255)  # "Var"
    HirsizlikAccordion_radio_Q1_8_7_1 = models.CharField(max_length=255)  # "Yok"
    HirsizlikAccordion_radio_Q1_8_8_1 = models.CharField(max_length=255)  # "Var"
    textarea_8_8_2 = models.TextField()  # "Olaylar olaylar son!"

    class Meta:
        db_table = 'qfq_answer'
        managed = False  # Veritabanındaki mevcut tabloyu yönetmemesi için

    def __str__(self):
        return self.input_1_3_1
