# QA Automation Assessment – Excelerate (Magento Website)

This project is submitted as part of the QA Internship Assessment for Excelerate. It automates essential authentication flows on the Magento demo website using **Cypress** and follows the **Page Object Model (POM)** structure.

---

## ✅ Features Automated

1. **User Sign-Up**
2. **User Login**
3. *(Other flows like Logout and Change Password are under debugging and will be added soon)*

---

## 🧰 Tech Stack

- **Automation Tool:** Cypress
- **Language:** JavaScript
- **Design Pattern:** Page Object Model (POM)
- **Test Runner:** Cypress GUI (`npx cypress open`)

---

## 📁 Folder Structure
cypress/
├── e2e/
│ └── magento/
        └──auth_flow.cy.js // Test file for Signup and Login flows
├── pages/
│ ├── SignupPage.js // Signup page actions
│ ├── LoginPage.js // Login page actions
│ └── MyAccountPage.js // Account & Logout page actions
  └── ChangePasswordPage.js // Changing password Action
├── fixtures/
      test_users.json
├── screenshots/ // Screenshots of test execution
├── Test_Cases.xslx

---

## 🚀 How to Run the Project

1. Clone the repository:
```bash
git clone https://github.com/SuprabhaPanigrahi/Excelerate-QA-Task
cd Excelerate-QA-Task
npm install
npx cypress open
Select auth_flow.cy.js and observe the automated test steps in the browser.
```

📸 Proof of Execution
Please refer to the /screenshots folder or attachment for screenshots showing the test cases passed successfully.

📄 Test Case Document
You can find the Excel file containing all manual test cases and expected results in the submission or in the root folder as:
```bash
Test_Cases.xlsx
```

✍️ Notes
The project follows POM for better code organization and maintainability.

Some test cases (like Logout and Change Password) are still under improvement and debugging.

Cypress waits and selectors were carefully handled based on dynamic site behavior.

🙏 Thank You
Thank you for the opportunity to take this assessment. I look forward to contributing and growing as a QA Intern at Excelerate.

---


