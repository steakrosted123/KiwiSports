import smtplib
from flask import Flask, jsonify,request

app = Flask(__name__)

@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
    response.headers.add('Access-Control-Allow-Methods', 'POST')
    print(response)
    return response

@app.route('/',methods=['POST'])
def index():
    data = request.json['data1']
    ur=data[2]
    latitude = ur['latitude']
    longitude = ur['longitude']
    url = f'https://www.google.com/maps/search/?api=1&query={latitude},{longitude}'
    smtp_server = 'smtp.office365.com'
    smtp_port = 587  # 587 is the default SMTP port for Gmail
    sender_email = 'HSM28484457@outlook.com'
    sender_password = '28484457hsm'
    receiver_email = data[3]

    # Create the email message
    subject = 'OTP AND PAYMENT ID'
    body = data[0]
    body1=data[1]
    message = f'Subject: {subject}\n\nPayment_OTP:\t{body}\n\nPayment_ID:\t{body1}\n\nLocation\t{url}'

    # Send the email
    with smtplib.SMTP(smtp_server, smtp_port) as smtp:
        smtp.starttls()  # Enable TLS encryption
        smtp.login(sender_email, sender_password)
        smtp.sendmail(sender_email, receiver_email, message)

    print('Email sent successfully!')
    return 'Data received'

if __name__ == '__main__':
    app.run(debug=True)