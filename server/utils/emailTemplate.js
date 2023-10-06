

const sendVideoCallInvitation = (videoCode,doctorName,patientName,time,date) => {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Happy Home Insurance AGM Invitation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #f5f5f5;
            color: #333;
        }

        .container {
            max-width: 600px;
            margin: auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            margin-top: 30px;
        }

        h1 {
            text-align: center;
            color: #333;
        }

        p {
            margin-bottom: 20px;
        }

        .meeting-details {
            padding: 20px;
            background-color: #f9f9f9;
            border-radius: 10px;
            margin-top: 20px;
        }

        .btn {
            display: inline-block;
            font-size: 16px;
            padding: 10px 20px;
            text-decoration: none;
            background-color: #007bff;
            color: #fff;
            border-radius: 5px;
            margin: 10px 0;
        }

        .btn:hover {
            background-color: #0056b3;
        }
    </style>
</head>

<body>

    <div class="container">
        <img src="https://telemedix.vercel.app/static/media/logo.523bdedd86f2c7988cc1.png" style="width: 40%;" alt="">


        <p>Dear ${patientName},</p>

        <p>You appointment for docotor: <b>${doctorName}</b> made on TELEMEDIX is accepted, we’d like to thank you for
            your ongoing support. Your meeting is scheduled for
        <p${date}at ${time} a.m. on TELEMEDIX. You’ll find the link below.</p>
        </p>

        <div class="meeting-details" style="">
            <p><strong>Meeting Details:</strong></p>
            <p>Date: March 3, 2022</p>
            <p>Time: 11:00 AM</p>
            <p>Location: <a href="${process.env.FRONTEND_URL}/room/${videoCode}"> Meeting Link</a></p>
            <center>
                OR
            </center>
            <p>Enter code on here : ${videoCode}</p>





        </div>
        <p>Kind regards,</p>
        <p>TELEMEDIX</p>




    </div>

</body>

</html>
        `;
  
  }



  const sendVerificationEmail = async (verificationToken) => `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Email Verification</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              margin: 0;
              padding: 0;
              background-color: #f5f5f5;
              color: #333;
          }
  
          .container {
              max-width: 600px;
              margin: auto;
              background-color: #fff;
              padding: 20px;
              border-radius: 10px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              margin-top: 30px;
          }
  
          h1 {
              text-align: center;
              color: #333;
          }
  
          p {
              margin-bottom: 20px;
          }
  
          .verification-button {
              display: inline-block;
              font-size: 16px;
              padding: 10px 20px;
              text-decoration: none;
              background-color: #007bff;
              color: #fff;
              border-radius: 5px;
              margin: 10px 0;
          }
  
          .verification-button:hover {
              background-color: #0056b3;
          }
      </style>
  </head>
  
  <body>
  
      <div class="container">
          <img src="https://telemedix.vercel.app/static/media/logo.523bdedd86f2c7988cc1.png" style="width: 40%;" alt="">
  
  
          <h1>Email Verification</h1>
  
          <p>Thank you for registering with us. To complete your registration, please click the button below to verify your email address:</p>
  
          <a href="${process.env.BACKEND_URL}/api/v1/auth/${verificationToken}" class="verification-button">Verify Email</a>
  
          <p>If you did not register for an account, please ignore this email.</p>
  
      </div>
  
  </body>
  
  </html>`
  const OtpContent = (otpcode) => {
    return `
        <h1 style="color: #008080; font-family: 'Arial', sans-serif; text-align: center;">Entrepreneurs Connect</h1>
        <h1 style="color: #008080; font-family: 'Arial', sans-serif; text-align: center;">Reset Password</h1>
        <div style="background-color: #f0f0f0; padding: 20px; border-radius: 8px;">
            <p style="font-size: 16px; font-family: 'Arial', sans-serif; color: #444; text-align: center;">Your OTP for resetting password is:</p>
            <div style="text-align: center; margin-top: 20px;">
                <h1>${otpcode}</h1>
            </div>
        </div>
        `;
  }
  
  const successFullVerification = () => {
    return `
      <h1 style="color: #008080; font-family: 'Arial', sans-serif; text-align: center;">Congratulations!</h1>
      <div style="background-color: #f0f0f0; padding: 20px; border-radius: 8px;">
        <p style="font-size: 16px; font-family: 'Arial', sans-serif; color: #444; text-align: center;">You have successfully verified your email.</p>
        <div style="text-align: center; margin-top: 20px;">
          <a href="http://localhost:3000/login" style="display: inline-block; background-color: #008080; color: #fff; font-size: 18px; font-family: 'Arial', sans-serif; text-decoration: none; padding: 10px 20px; border-radius: 5px; border: 2px solid #008080; transition: background-color 0.3s ease-in-out;">
            Go to Home Page
          </a>
        </div>
      </div>
    `;
  }
  
  
  const promotionalEmail = (topUsers) => {
    const topUsersHTML = topUsers.map((user) => `
        <div style="border: 1px solid #ccc; border-radius: 5px; margin: 10px; padding: 10px; display: flex; align-items: center;">
          <a href="http://localhost:3000/${user._id}" style="text-decoration: none; color: inherit; display: flex; align-items: center; cursor:pointer">
            <img src="${user.avatar.url}" alt="${user.username}" style="width: 50px; height: 50px; border-radius: 50%; margin-right: 10px;">
            <div>
              <h2 style="font-size: 18px; color: #333;">${user.username}</h2>
              <p style="font-size: 16px; color: #777;">Points: ${user.points}</p>
            </div>
          </a>
        </div>
      `).join('');
  
    return `
        <div style="font-family: Arial, sans-serif; text-align: center;">
          <h1 style="color: #008080; font-size: 24px;">Entrepreneurs Connect</h1>
          <h2 style="color: #008080; font-size: 20px;">Top Users</h2>
          <div style="background-color: #f0f0f0; border-radius: 8px; padding: 20px;">
            <p style="font-size: 16px; color: #444;">Top Users of this week are:</p>
            <div style="margin-top: 20px;">
              ${topUsersHTML}
            </div>
          </div>
        </div>
    
        <div style="text-align: center; margin-top: 20px;">
          <a href="http://localhost:3000" style="display: inline-block; background-color: #008080; color: #fff; font-size: 18px; font-family: 'Arial', sans-serif; text-decoration: none; padding: 10px 20px; border-radius: 5px; border: 2px solid #008080; transition: background-color 0.3s ease-in-out;">
            Go to Home Page
          </a>
        </div>
      `;
  };
  
  
  module.exports = {
    sendVideoCallInvitation,
    OtpContent,
    successFullVerification,
    promotionalEmail
  }