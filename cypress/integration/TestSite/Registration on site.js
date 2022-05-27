import Registr from ".//pageObjects/pomRegistration";

describe("Registration on site ", () => {
  const navigateSite = new NavigateSite();
  beforeEach(() => {
    navigateSite.navigate();
  });

  const regis = new Registr();
  it(" Registration on the site of a new user", () => {
    cy.get(".header__top-line__login > a").should("be.visible").click();
    cy.get(":nth-child(2) > .pop-up__link").should("be.visible").click();

    //ввод формы, для каждого теста менять емейл

    regis.inputName().type("Sergey").should("have.value", "Sergey");
    regis
      .inputEmail()
      .type("221lqqwsiga7cereqrrid813@duetube.com")
      .should("have.value", "221lqqwsiga7cereqrrid813@duetube.com");
    regis
      .inputPhone()
      .type("+380975628198")
      .should("have.value", "+380975628198");
    regis.inputPas().type("version1").should("have.value", "version1");

    cy.get(".modal-content__maxwidth > .btn").should("be.visible").click();

    cy.visit("https://www.miopizza.ua/ua/golovna/logout/");
  });
});

//2 попытка повтор емейла

describe("Registration on site", () => {
  const navigateSite = new NavigateSite();
  beforeEach(() => {
    navigateSite.navigate();
  });
  const regis = new Registr();

  it(" Registration on the site of a new user using an email that is repeated", () => {
    cy.get(".header__top-line__login > a").should("be.visible").click();
    cy.get(":nth-child(2) > .pop-up__link").should("be.visible").click();

    //ввод формы, для каждого теста менять емейл
    regis.inputName().type("Sergey").should("have.value", "Sergey");
    regis
      .inputEmail()
      .type("221lqqwsiga7cereqrrid813@duetube.com")
      .should("have.value", "221lqqwsiga7cereqrrid813@duetube.com");
    regis
      .inputPhone()
      .type("+380975628198")
      .should("have.value", "+380975628198");
    regis.inputPas().type("version1").should("have.value", "version1");

    cy.get(".modal-content__maxwidth > .btn").should("be.visible").click();

    cy.wait(3000);
    //2 вход

    regis.visitSite();

    cy.wait(3000);

    cy.get(".header__top-line__login > a").should("be.visible").click();
    cy.get(":nth-child(2) > .pop-up__link").should("be.visible").click();

    //ввод формы, для каждого теста менять емейл
    regis.inputName().type("Sergey");
    regis
      .inputEmail()
      .type("d813@duetube.com")
      .should("have.value", "d813@duetube.com");
    regis
      .inputPhone()
      .type("+380975628198")
      .should("have.value", "+380975628198");
    regis.inputPas().type("version1").should("have.value", "version1");

    cy.get(".modal-content__maxwidth > .btn").should("be.visible").click();

    cy.wait(3000);

    cy.visit("https://www.miopizza.ua/ua/golovna/logout/");
  });
});

//3 попытка повтор номера телефона

describe("Registration on site", () => {
  const navigateSite = new NavigateSite();
  beforeEach(() => {
    navigateSite.navigate();
  });

  const regis = new Registr();

  it("Registration on the site of a new user with a phone number that repeated", () => {
    cy.get(".header__top-line__login > a").click();
    cy.get(":nth-child(2) > .pop-up__link").click();

    regis.inputName().type("Sergey");
    regis.inputEmail().type("liwefsgsgeqrr5eid813@duetube.com");
    regis.inputPhone().type("+380975628198");
    regis.inputPas().type("version1");

    cy.get(".modal-content__maxwidth > .btn").click();

    cy.visit("https://www.miopizza.ua/ua/golovna/logout/");

    cy.get(".header__top-line__login > a").click();
    cy.get(":nth-child(2) > .pop-up__link").click();

    regis.inputName().type("Sergey");
    regis.inputEmail().type("lierreeesrwreteqrr5eid813@duetube.com");
    regis.inputPhone().type("+380975628198");
    regis.inputPas().type("version1");

    cy.get(".modal-content__maxwidth > .btn").click();

    cy.wait(3000);

    cy.visit("https://www.miopizza.ua/ua/golovna/logout/");

    cy.wait(300);
  });
});

//4 попытка использовать кириличн символы в инпута емейла

describe("Registration on site", () => {
  const navigateSite = new NavigateSite();
  beforeEach(() => {
    navigateSite.navigate();
  });
  const regis = new Registr();

  it("Cyrillic characters in the input email", () => {
    cy.get(".header__top-line__login > a").click();
    cy.get(":nth-child(2) > .pop-up__link").click();

    regis.inputName().type("Sergey");
    regis.inputEmail().type("приветеАндрей@duetube.com");
    regis.inputPhone().type("+380975628198");
    regis.inputPas().type("version1");

    cy.get(".modal-content__maxwidth > .btn").click();
  });
});
