import Login from ".//pageObjects/pomAuthorization";
import { NavigateSite } from ".//pageObjects/pomVisitSite";

describe("Adding information to your personal account", () => {
  const login = new Login();

  const navigateSite = new NavigateSite();
  beforeEach(() => {
    navigateSite.navigate();
  });

  it("Adding information (additional phone number) in your account", () => {
    cy.get(".header__top-line__login > a").should("be.visible").click();

    login
      .email()
      .type("lieeqrreid813@duetube.com")
      .should("have.value", "lieeqrreid813@duetube.com");
    login.password().type("version1").should("have.value", "version1");

    cy.get(".modal-content__maxwidth > .btn").click().should("be.visible");

    //действия с моим кабинетом

    cy.wait(4000);

    cy.contains("Мой кабинет").should("be.visible").click();
    cy.get(".col-sm-12 > .profile__edit__additem").should("be.visible").click();
    cy.get(
      ":nth-child(3) > .form-group > :nth-child(2) > .relative > .form-control"
    )
      .should("be.visible")
      .click();
    cy.get(
      ":nth-child(3) > .form-group > :nth-child(2) > .relative > .form-control"
    )
      .should("be.visible")
      .type("975655628");

    cy.get(".btn").should("be.visible").click();
  });
});
