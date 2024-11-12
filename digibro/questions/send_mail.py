import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.image import MIMEImage
import requests

def send_email(sender_email, password, receiver_emails, smtp_server, stmp_port, subject, body, image_url):
    try:
        # E-posta mesajını oluştur
        message = MIMEMultipart('related')
        message['From'] = sender_email
        message['To'] = ", ".join(receiver_emails)
        message['Subject'] = subject
        
        # HTML mesajını oluştur
        html_body = """
        <html>
        <body>
            <p>{}</p>
            <p>Erişim Linki: <a href="https://www.digibrox.com/clientScreen/">Buraya Tıklayın</a></p>
            <img src="cid:image1">
        </body>
        </html>
        """.format(body.replace('\n', '<br>'))

        message.attach(MIMEText(html_body, 'html'))

        # Resmi yükle ve ekle
        response = requests.get(image_url)
        image = MIMEImage(response.content)
        image.add_header('Content-ID', '<image1>')  # Resmin kimliği
        message.attach(image)

        # SMTP sunucusuna bağlan ve e-postayı gönder
        with smtplib.SMTP_SSL(smtp_server, stmp_port) as server:
            server.login(sender_email, password)
            server.sendmail(sender_email, receiver_emails, message.as_string())
        print("E-posta başarılı bir şekilde gönderildi.")
    except smtplib.SMTPException as e:
        print(f"E-posta gönderilirken bir hata oluştu: {e}")



# # DB'den çekilen bilgiler
# smtp_server = 'mail.digibrox.com'
# stmp_port = 465
# password = "FSO3yWZqM7qNS4C"  # Gönderici e-posta şifresi

# sender_email = "fatihaydin@digibrox.com"  # Gönderici e-posta adresi
# receiver_emails = ['oguzhanyildirim@digibrox.com']  # Alıcı e-posta adresleri
# subject = 'Fronttan gelen başlık burada'  # E-posta konusu
# body_first = 'Fronttan gelen mesaj burada'
# image_url = "http://127.0.0.1:8000/static/questions/img/lockton.png"
# # E-posta mesajı
# body_last =  "Saygılarımla,\n"\
#         +"Melis Deniz\n"\
#         +"Broker\n"\
#         +"Lockton | Omni\n"\
#         +"Telefon: +90 555 444 33 22\n"\
#         +"E-posta: example@locktonomni.com\n"\
#         +"Web: www.locktonomni.com\n"\

# body = body_first + "\n\n\n" +body_last
# send_email(sender_email, password, receiver_emails, smtp_server, stmp_port, subject, body, image_url)
