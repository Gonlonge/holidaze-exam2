// Login test

describe("Login", () => {
  beforeEach(() => {
    cy.visit("https://gregarious-medovik-61d889.netlify.app/Login"); // Replace with the URL of your login page
  });

  it("should log in successfully with valid credentials", () => {
    const testEmail = "supermetroid123@noroff.no";
    const testPassword = "supermetroid123";

    cy.get('input[type="email"]').type(testEmail);
    cy.get('input[type="password"]').type(testPassword);
    cy.get('button[type="submit"]').click();

    cy.location("pathname").should("include", "/Profile");
  });
});
