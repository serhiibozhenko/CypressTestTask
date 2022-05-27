import Login from ".//pageObjects/pomAuthorization";
import { NavigateSite } from ".//pageObjects/pomVisitSite";
describe("Order", () => {
  const navigateSite = new NavigateSite();
  beforeEach(() => {
    navigateSite.navigate();
  });

  it("Ordering pizza without authorization (filling in the order form - pickup)", () => {
    cy.get(
      "#menu0a2c92b001fd2dd921e7ab862eaa7a0e > .cmsmenu > :nth-child(1) > .cmsmenu__link"
    )
      .should("be.visible")
      .click();
    cy.get(
      '[data-filter-value-list-66="1"][data-filter-value-list-28="1"] > .tovars__item > .tovars__item__cover > .tovars__item__buy > .btn'
    )
      .should("be.visible")
      .click();
    cy.get(".text-right > .btn").should("be.visible").click();

    //заполнение формы

    cy.get(
      "#order-form-1 > :nth-child(3) > :nth-child(1) > :nth-child(1) > .form-control"
    )
      .type("Sergey")
      .should("have.value", "Sergey");

    cy.get("#order-phones").type("555555555");
    cy.get("#order-form-email > .col-sm-12 > .form-control")
      .type("shgs@gmail.com")
      .should("have.value", "shgs@gmail.com");
    cy.get(":nth-child(2) > label").click();

    cy.get(":nth-child(9) > .col-sm-12 > .form-control").select("Готівка");
  });
});

describe("Order", () => {
  const navigateSite = new NavigateSite();
  beforeEach(() => {
    navigateSite.navigate();
  });
  const login = new Login();

  it("Order with authorization (filling in the order form - pickup)", () => {
    cy.get(".header__top-line__login > a").should("be.visible").click();

    login
      .email()
      .type("liga7creqrrid813@duetube.com")
      .should("have.value", "liga7creqrrid813@duetube.com");
    login.password().type("version1").should("have.value", "version1");

    cy.get(".modal-content__maxwidth > .btn").should("be.visible").click();

    cy.wait(4000);
    cy.get(
      "#menu0a2c92b001fd2dd921e7ab862eaa7a0e > .cmsmenu > :nth-child(1) > .cmsmenu__link"
    )
      .should("be.visible")
      .click();
    cy.get(
      '[data-filter-value-list-66="1"][data-filter-value-list-28="1"] > .tovars__item > .tovars__item__cover > .tovars__item__buy > .btn'
    )
      .should("be.visible")
      .click();
    cy.get(".text-right > .btn").should("be.visible").click();

    //заполнение формы

    cy.get(":nth-child(2) > label > input").should("be.visible").click();

    cy.get(":nth-child(9) > .col-sm-12 > .form-control").select("Готівка");
  });
});

describe("Order", () => {
  const login = new Login();

  const navigateSite = new NavigateSite();
  beforeEach(() => {
    navigateSite.navigate();
  });

  it("Order with authorization and exit from the personal account to check whether the order will remain in the basket", () => {
    cy.get(".header__top-line__login > a").should("be.visible").click();

    login
      .email()
      .type("liga7creqrrid813@duetube.com")
      .should("have.value", "liga7creqrrid813@duetube.com");
    login.password().type("version1").should("have.value", "version1");

    cy.get(".modal-content__maxwidth > .btn").should("be.visible").click();

    cy.wait(4000);
    cy.get(
      ":nth-child(1) > .tovars__item > .tovars__item__cover > .tovars__item__buy > .btn"
    )
      .should("be.visible")
      .click();
    cy.wait(2000);
    cy.get(
      "#ajaxModal > .modal-dialog > .modal-content > .modal-header > .pop-up__close-btn > .lnr"
    )
      .should("be.visible")
      .click();
    cy.get(
      "#home > div.header__top-line > div > div > div.col-lg-2.col-md-2.col-sm-6.col-xs-12.text-right-lg.text-right-md.text-right-sm.text-right-xs > div.header__top-line__login > a:nth-child(2)"
    )
      .should("be.visible")
      .click();

    cy.get(".header__cart__cnt").click();
    cy.get(".catalog-tovars__h1").should("not.contain", "ОФОРМЛЕНИЕ ЗАКАЗА");
  });
});
