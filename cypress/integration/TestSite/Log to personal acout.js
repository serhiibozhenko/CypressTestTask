import Login from ".//pageObjects/pomAuthorization";
import { NavigateSite } from ".//pageObjects/pomVisitSite";

describe("Log to pesonal account", () => {
  const navigateSite = new NavigateSite();
  beforeEach(() => {
    navigateSite.navigate();
  });
  const login = new Login();

  it("Login to your personal account after successful registration", () => {
    cy.get(".header__top-line__login > a").should("be.visible").click();
    login
      .email()
      .type("lqqwsiga7cereqrrid813@duetube.com")
      .should("have.value", "lqqwsiga7cereqrrid813@duetube.com");
    login.password().type("version1").should("have.value", "version1");

    cy.get(".modal-content__maxwidth > .btn").should("be.visible").click();
  });
});
