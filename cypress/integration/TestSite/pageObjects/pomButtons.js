//кнопки

class Buttons {
  //buttons header

  butShares() {
    return cy.get(
      "#menu866cf8fa08a083bbc18c05b0e7f0f0c3 > .cmsmenu > :nth-child(1) > .cmsmenu__link"
    );
  }

  deliveryPay() {
    return cy.get(
      "#menu866cf8fa08a083bbc18c05b0e7f0f0c3 > .cmsmenu > :nth-child(2) > .cmsmenu__link"
    );
  }

  dickount() {
    return cy.get(
      "#menu866cf8fa08a083bbc18c05b0e7f0f0c3 > .cmsmenu > :nth-child(3) > .cmsmenu__link"
    );
  }

  feedback() {
    return cy.get(
      "#menu866cf8fa08a083bbc18c05b0e7f0f0c3 > .cmsmenu > :nth-child(5) > .cmsmenu__link"
    );
  }

  //buttons menu

  buttonPizza() {
    return cy.get(
      "#menu0a2c92b001fd2dd921e7ab862eaa7a0e > .cmsmenu > :nth-child(1) > .cmsmenu__link"
    );
  }

  buttonFri() {
    return cy.get(
      "#menu0a2c92b001fd2dd921e7ab862eaa7a0e > .cmsmenu > :nth-child(2) > .cmsmenu__link"
    );
  }

  buttonThaifood() {
    return cy.get(
      "#menu0a2c92b001fd2dd921e7ab862eaa7a0e > .cmsmenu > :nth-child(3) > .cmsmenu__link"
    );
  }

  buttonVegeter() {
    return cy.get(
      "#menu0a2c92b001fd2dd921e7ab862eaa7a0e > .cmsmenu > :nth-child(4) > .cmsmenu__link"
    );
  }

  buttonDrink() {
    return cy.get(
      "#menu0a2c92b001fd2dd921e7ab862eaa7a0e > .cmsmenu > :nth-child(5) > .cmsmenu__link"
    );
  }

  buttonConstructorPizza() {
    return cy.get(
      "#menu0a2c92b001fd2dd921e7ab862eaa7a0e > .cmsmenu > :nth-child(6) > .cmsmenu__link"
    );
  }

  buttonAkcii() {
    return cy.get(
      "#menu0a2c92b001fd2dd921e7ab862eaa7a0e > .cmsmenu > :nth-child(7) > .cmsmenu__link"
    );
  }
}

export default Buttons;
