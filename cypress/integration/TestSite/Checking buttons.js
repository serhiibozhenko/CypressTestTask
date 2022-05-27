import Buttons from ".//pageObjects/pomButtons";
import { NavigateSite } from ".//pageObjects/pomVisitSite";
import { Comeback } from ".//pageObjects/pomVisitSite";

describe("Checking buttons for clickability", () => {
  const buttons = new Buttons();

  const navigateSite = new NavigateSite();
  beforeEach(() => {
    navigateSite.navigate();
  });

  const comeback = new Comeback();

  it("Checking header buttons for clickability without phone numbers", () => {
    buttons.butShares().should("be.visible").click();
    comeback.back();

    buttons.deliveryPay().should("be.visible").click();
    comeback.back();

    buttons.dickount().should("be.visible").click();
    comeback.back();

    buttons.feedback().should("be.visible").click();
    comeback.back();

    cy.wait(4000);

    cy.get("#menu276aaef823fa2620c0d098906a4c5847 > ul > li:nth-child(4) > a")
      // .should("be.visible")
      .click();
    cy.wait(4000);
    comeback.back();
  });
});

describe("Checking buttons for clickability", () => {
  const navigateSite = new NavigateSite();
  const buttons = new Buttons();
  const comeback = new Comeback();

  beforeEach(() => {
    navigateSite.navigate();
  });

  it("Checking menu buttons for clickability and checking element stealth", () => {
    buttons.buttonPizza().should("be.visible").click();
    comeback.back();

    buttons.buttonFri().should("be.visible").click();
    comeback.back();

    buttons.buttonThaifood().should("be.visible").click();
    comeback.back();

    buttons.buttonVegeter().should("be.visible").click();
    comeback.back();

    buttons.buttonDrink().should("be.visible").click();
    comeback.back();

    buttons.buttonConstructorPizza().should("be.visible").click();
    comeback.back();

    buttons.buttonAkcii().should("be.visible").click();
    comeback.back();
  });
});
