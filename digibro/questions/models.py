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