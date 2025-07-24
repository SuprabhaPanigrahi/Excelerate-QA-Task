import SignupPage from '../pages/SignupPage';
import LoginPage from '../pages/LoginPage';
import MyAccountPage from '../pages/MyAccountPage';

const signupPage = new SignupPage();
const loginPage = new LoginPage();
const myAccountPage = new MyAccountPage();

describe('Magento Auth Flow', () => {
  const user = {
    firstname: "Situ",
    lastname: "QA",
    email: `situ_qa_${Date.now()}@testmail.com`,
    password: "Password123!"
  };

  it('Sign up new user', () => {
    signupPage.visit();
    signupPage.fillForm(user.firstname, user.lastname, user.email, user.password);
    signupPage.submit();
  });

  it('Login with created user', () => {
    loginPage.visit();
    loginPage.login(user.email, user.password);
    cy.get('.page-title').should('contain', 'My Account');
  });

  it('Sign out', () => {
    myAccountPage.signOut();
  });
});