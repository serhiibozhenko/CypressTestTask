//авторизация, ввод пароля и емейла, а также кнопки

class Login {
  visitSite() {
    return cy.visit("https://www.miopizza.ua/");
  }

  email() {
    return cy.get("#login_email");
  }

  password() {
    return cy.get("#login_password");
  }
}

export default Login;
