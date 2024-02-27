import http.server
import socketserver
import smtplib
from email.message import EmailMessage

# Define the port on which you want to run the server
port = 5501

# Email configuration
sender_email = ''
receiver_email = ''
smtp_server = 'smtp.gmail.com'
smtp_port = 587
smtp_username = ''
smtp_password = ''

# Create a SimpleHTTPRequestHandler to handle POST requests
class FormHandler(http.server.SimpleHTTPRequestHandler):
    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length).decode('utf-8')

        # Process the form data
        form_data = {}
        for pair in post_data.split('&'):
            key, value = pair.split('=')
            form_data[key] = value

        # Send the form data as an email
        message = EmailMessage()
        message.set_content(f"Name: {form_data['name']}\nEmail: {form_data['email']}\nMessage: {form_data['message']}")
        message['Subject'] = 'Contact Form Submission'
        message['From'] = sender_email
        message['To'] = receiver_email

        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()
        server.login(smtp_username, smtp_password)
        server.send_message(message)
        server.quit()

        # Respond to the client
        self.send_response(200)
        self.end_headers()
        self.wfile.write(b'Form submitted successfully. Thank you!')

# Start the server
with socketserver.TCPServer(("", port), FormHandler) as httpd:
    print(f"Serving on port {port}")
    httpd.serve_forever()
