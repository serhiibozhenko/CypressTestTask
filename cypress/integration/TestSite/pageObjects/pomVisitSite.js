export class NavigateSite {
  navigate = () => {
    cy.visit(Cypress.env("src"));
  };
}

//вернуть назад

export class Comeback {
  back() {
    return cy.go("back");
  }
}

//акаунт для входа

// export class LogintoCabinet {

// }
