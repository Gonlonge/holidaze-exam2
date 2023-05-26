// Registation

describe("Registration", () => {
  beforeEach(() => {
    cy.visit("https://gregarious-medovik-61d889.netlify.app/register");
  });

  it("should register a new user successfully", () => {
    cy.get('input[name="name"]').type("Johnny");
    cy.get('input[name="email"]').type("johndoe99@noroff.com");
    cy.get('input[name="password"]').type("password123");
    cy.get('input[name="confirmPassword"]').type("password123");
    cy.get('input[name="venueManager"]').check();
    cy.get("form").submit();
  });

  it("should display validation errors for invalid inputs", () => {
    cy.get("form").submit();

    cy.get('input[name="name"]').should("be.visible");
    cy.get('input[name="email"]').should("be.visible");
    cy.get('input[name="password"]').should("be.visible");
    cy.get('input[name="confirmPassword"]').should("be.visible");
  });
});
