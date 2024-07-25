// Function to send emails based on form responses
function onFormSubmit(e) {
  const responses = e.values;
  const fullName = responses[1]; // Adjust index if necessary
  const email = responses[2]; // Adjust index if necessary
  const skills = responses[4]; // Adjust index if necessary
  const tools = responses[5]; // Adjust index if necessary
  const certifications = responses[6]; // Adjust index if necessary

  // Rejection criteria
  const rejectionCriteria = [
    "Don't have any relevant skills stated above",
    "Never used any marketing tools and marketing software before",
    "Don't have any marketing certifications"
  ];

  // Function to send email
  const sendEmail = (subject, body) => {
    MailApp.sendEmail(email, subject, '', {
      htmlBody: body,
      name: 'ABC Company'
    });
  };

  // Check if any rejection criteria are met
  if (rejectionCriteria.some(criteria => skills.includes(criteria) || tools.includes(criteria) || certifications.includes(criteria))) {
    const rejectEmailBody = `<p>Dear ${fullName},</p>
<p>Thank you for applying for the Marketing Specialist role at ABC Company. We appreciate the time and effort you put into your application and the interest you have shown in joining our team.</p>
<p>After careful consideration and a thorough review of your qualifications and experience, we regret to inform you that we have decided to move forward with another candidate for this position. This decision was not easy, given the high quality of applicants we received, including yourself.</p>
<p>Please know that this decision does not diminish the value of your skills and achievements. We were particularly impressed with your certain aspect of your skills. However, we had to make a difficult choice based on the specific needs and strategic direction of our team at this time.</p>
<p>We encourage you to keep an eye on our careers page for future opportunities that align with your expertise and interests. We will retain your resume in our database and may contact you should a more suitable opportunity arise.</p>
<p>Thank you once again for your interest in ABC Company. We wish you all the best in your job search and future professional endeavors.</p>
<p>Warm regards,<br>ABC Company</p>`;
    sendEmail('Application Status - ABC Company', rejectEmailBody);
  } else {
    const acceptEmailBody = `<p>Dear ${fullName},</p>
<p>Thank you for applying for the Marketing Specialist role at ABC Company. After reviewing your application, we were impressed with your qualifications and experiences, and we would like to learn more about you.</p>
<p>We are interested in scheduling an interview to discuss your background and the potential fit for our team. Please reply to this email with your availability over the next week, and we will do our best to accommodate a time that works for you.</p>
<p>The interview will be conducted by Shawn, the HR Manager of ABC Company. Moreover, the meeting will last approximately 30 minutes. We will send you a confirmation email with the details once the date and time have been finalized.</p>
<p>If you have any questions or need further information, please do not hesitate to reach out. We look forward to speaking with you and learning more about how your skills and experiences align with the goals of our marketing department.</p>
<p>Thank you once again for your interest in ABC Company.</p>
<p>Best regards,<br>ABC Company</p>`;
    sendEmail('Interview Invitation - ABC Company', acceptEmailBody);
  }
}

// Function to set up the trigger for form submission
function setupTrigger() {
  ScriptApp.newTrigger('onFormSubmit')
    .forSpreadsheet(SpreadsheetApp.getActiveSpreadsheet())
    .onFormSubmit()
    .create();
}
