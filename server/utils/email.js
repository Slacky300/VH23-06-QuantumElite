const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer');
require('dotenv').config();
const {sendVideoCallInvitation} = require('./emailTemplate')




const generateverificationToken = (email) => {
    console.log(secret_key)
    return jwt.sign({ email: email }, secret_key, { expiresIn: '1d' })
}


const sendVideoLink = async (recipientEmail, videoCode,doctorName,patientName,time,date) => {
    try {
        console.log("Gone")
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            }

        })
        const emailcontent = sendVideoCallInvitation(videoCode,doctorName,patientName,time,date);
        console.log("Content...")
        await transporter.sendMail({
            from: process.env.EMAIL,
            to: recipientEmail,
            subject: 'Email Verification',
            html: emailcontent
        })

        console.log("Verification email has been sent");

    } catch (error) {
        console.error('Error sending verification email:', error);
    }
}



const resetPasswordEmail = async (receipentEmail, otpcode) => {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        }
    });

    const emailcontent = OtpContent(otpcode);
    await transporter.sendMail({
        from: process.env.EMAIL,
        to: receipentEmail,
        subject: 'Reset Password',
        html: emailcontent
    });
}

const generateOTP = () => {
    const otpLength = 6;
    const characters = '0123456789';
    let otpcode = '';
    for (let i = 0; i < otpLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        otpcode += characters[randomIndex];
    }
    return otpcode;
}





// const sendPromotionalEmail = async (recipientEmail, TopUsers) => {
//     try {
//         const transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 user: process.env.EMAIL,
//                 pass: process.env.PASSWORD,
//             },
//         });

//         const emailContent = promotionalEmail(TopUsers);

//         await transporter.sendMail({
//             from: process.env.EMAIL,
//             to: recipientEmail,
//             subject: 'BoostedUsers Posts',
//             html: emailContent,
//         });

//         console.log("Email has been sent  " + recipientEmail);
//     } catch (error) {
//         console.log(error);
//     }
// };



module.exports = {
    generateverificationToken,
    sendVideoLink,
    generateOTP,
    resetPasswordEmail,
    // sendPromotionalEmail
}