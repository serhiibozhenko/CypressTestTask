import { NavigateSite } from ".//pageObjects/pomVisitSite";

describe("logic pizza constructor", () => {
  const navigateSite = new NavigateSite();
  beforeEach(() => {
    navigateSite.navigate();
  });

  it("The logic of the pizza constructor without authorization", () => {
    cy.get(":nth-child(6) > .cmsmenu__link").should("be.visible").click();
    cy.get(
      ":nth-child(1) > .tovars__item > .tovars__item__cover > .tovars__item__name"
    )
      .should("be.visible")
      .click();
    cy.get(
      ".one-tovar__name-and-buy > .tovars__item__buy > .tovars__item__buy__ingr > .btn"
    )
      .should("be.visible")
      .click();

    cy.get(
      "#dcat1-203 > .one-tovar__addingr__itemstoadd > :nth-child(1) > label"
    )
      .should("be.visible")
      .click();

    cy.get(
      ".one-tovar__addingr.active > .one-tovar__addingr__tabs > :nth-child(3) > .one-tovar__addingr__tabs__tab"
    )
      .should("be.visible")
      .click();

    cy.get(
      "#dcat3-203 > .one-tovar__addingr__itemstoadd > :nth-child(3) > label"
    )
      .should("be.visible")
      .click();

    cy.wait(3000);

    cy.get('[data-id-input="addingr3-203-305"]').should("be.visible").click();

    cy.wait(3000);
    cy.get(
      ".one-tovar__addingr.active > .one-tovar__addingr__tovar > .container- > .one-tovar__addingr__tovar__calc > .one-tovar__addingr__tovar__calc__itogo > .btn"
    )
      .should("be.visible")
      .click();

    cy.get(".text-right > .btn").should("be.visible").click();
  });
});
