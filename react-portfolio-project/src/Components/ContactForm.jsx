const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'brianahlershomepage@gmail.com',
    pass: 'Stealthepass100$',
  },
});



function sendEmail(name, email, message) {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'brianahlershomepage@gmail.com',
        pass: 'Stealthepass100$',
      },
    });
  
    const mailOptions = {
      from: 'brianahlershomepage@gmail.com',
      to: 'brianahlershomepage@gmail.com',
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };
  
    return transporter.sendMail(mailOptions);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  
    sendEmail(name, email, message)
      .then(() => {
        alert('Message sent successfully');
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch(() => {
        alert('Error sending message');
      });
  };

  export default ContactForm;