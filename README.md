# Googlidoo 
Google Workspace Hackathon (Case Study: Human Resources)

Our solution integrates a Google Form into your company's recruitment webpage to streamline the application process. Applicants fill out the form, and within approximately 4 seconds, they receive an email informing them whether they have been invited for an interview or rejected based on predefined criteria. This automated process ensures efficient and timely communication, enhancing the candidate experience and reducing HR workload.

To achieve the goal of automatically sending emails based on responses from your Google Form, follow these steps:

Create the Google Form with the specified questions and options as mentioned.
Link the form to a Google Sheet where responses will be collected.
Open the Google Sheet where the form responses are collected.
Create a Google Apps Script to process the form responses and send the appropriate email.
Here is a detailed guide:

# Step 1: Set up the Google Form
Create a Google Form with the following questions:

1. Full Name (Short answer text)
2. Email address (Short answer text)
3. Phone Number (Short answer text)
4. Skill And Qualification

a) Relevant Marketing Skills (Checkboxes)

-SEO

-Content Creation

-Social Media Management

-Email Marketing

-Marketing Analytics

-Don't have any relevant skills stated above

-Others (Please state out)

b) Tools and Software Proficiency (Checkboxes)
Google Analytics
Hootsuite
MailChimp
Adobe Creative Suite
Never used any marketing tools and marketing software before
Others (Please state out)

c). Certifications (Checkboxes)
Google Analytics Certification
HubSpot Content Marketing Certification
Don't have any marketing certifications
Others (Please state out)

# Step 2: Link the Form to a Google Sheet
In the Google Form, click on the "Responses" tab.
Click on the green Sheets icon to create a Google Sheet that will store the form responses.

# Step 3: Open the Google Sheet
Open the Google Sheet linked to your Google Form.
Go to Extensions > Apps Script.

# Step 4: Create the Google Apps Script
(The details of the code is at Code.gs)

# Step 5: Save and Deploy the Script
Save the script with an appropriate name, e.g., "Form Response Emailer".
Click on the clock icon in the toolbar to open the triggers menu.
Click on "Add Trigger" and configure as follows:
Choose which function to run: OnFormSubmit
Choose which deployment should run: Head
Select event source: From spreadsheet
Select event type: On form submit
Click "Save".

# Step 6: Authorize the Script
After saving the trigger, you will be prompted to authorize the script. Click "Review Permissions" and allow the necessary permissions.

# Step 7: Test the Form
Submit a test response to the form to ensure emails are sent correctly based on the criteria.
Check the provided email addresses for the appropriate acceptance or rejection email.

By following these steps, you will set up an automated process that sends customized emails to applicants based on their responses in your Google Form.
