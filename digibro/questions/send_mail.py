import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email import encoders
from datetime import datetime

def send_email(sender_email, password, receiver_emails, smtp_server, stmp_port, subject, body):
    try:
        add_url = "\n\n\n\tErişim Linki : " + "https://www.digibrox.com/clientScreen/"
        full_message = body + add_url
        
        # E-posta mesajını oluştur
        message = MIMEMultipart()
        message['From'] = sender_email
        message['To'] = ", ".join(receiver_emails)
        message['Subject'] = subject
        message.attach(MIMEText(full_message, 'plain'))

        # SMTP sunucusuna bağlan ve e-postayı gönder
        # with smtplib.SMTP('smtp.office365.com', 587) as server:
        #     server.starttls()
        with smtplib.SMTP_SSL(smtp_server, stmp_port) as server:
            server.login(sender_email, password)
            server.sendmail(sender_email, receiver_emails, message.as_string())
        print(f"E-posta başarılı bir şekilde gönderildi.")
    except smtplib.SMTPException as e:
        print(f"E-posta gönderilirken bir hata oluştu: {e}")

# #DB den çekilen bilgiler
# smtp_server = 'mail.digibrox.com'
# stmp_port = 465
# password = "FSO3yWZqM7qNS4C"  # Gönderici e-posta şifresi

# sender_email = "fatihaydin@digibrox.com"  # Gönderici e-posta adresi
# receiver_emails = ['oguzhanyildirim@digibrox.com',]  # test e-posta adresleri
# # receiver_emails = ["oguzhanyildirim@digibrox.com","oguzhanyildirim@digibrox.com","oguzhanyildirim@digibrox.com",]  # Alıcı e-posta adresleri
# subject = 'New Questionnaire Form Notification'  # E-posta konusu
# #E-posta mesajı
# body = "Hello,\n\n"\
#     + "I kindly request you to fill out the newly created questionnaire form.\n"\
#     + "Best regards,\n"\
#     + "Have a good work day."


# send_email(sender_email, password, receiver_emails, smtp_server, stmp_port, subject, body)