//регистрация

class Registr {
  visitSite() {
    return cy.visit("https://www.miopizza.ua/");
  }

  inputName() {
    return cy.get(
      "#registerAJAX > div.cms-form-login > div:nth-child(2) > div > input"
    );
  }

  inputEmail() {
    return cy.get(":nth-child(4) > .col-sm-12 > .form-control");
  }

  inputPhone() {
    return cy.get(":nth-child(3) > .col-sm-12 > .form-control");
  }

  inputPas() {
    return cy.get(":nth-child(5) > .col-sm-12 > .form-control");
  }
}

export default Registr;
