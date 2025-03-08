import nodemailer from 'nodemailer';
 
/**
 * Sends an email using the specified email, subject, and message.
 *
 * @param {Object} params - The parameters for sending the email.
 * @param {string} params.email - The recipient's email address.
 * @param {string} params.subject - The subject of the email.
 * @param {string} params.message - The message content of the email.
 * @returns {Promise<void>} A promise that resolves when the email is sent.
 */
const sendEmail = async ({ email, subject, message }) => {
    // Create a transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Replace with your email provider (e.g., 'gmail', 'yahoo')
        auth: {
            user: process.env.EMAIL, // Your email address
            pass: process.env.EMAIL_PASSWORD, // Your email password or app-specific password
        },
    });
    // Send mail with defined transport object
    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: subject,
        text: message,
    };
    // Send the email
    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${email}`);
};
 
export default sendEmail;
 
 