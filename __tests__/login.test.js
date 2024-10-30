const login = require('../modules/Login');
const users = require('../modules/userData');

describe("testar login funktionen", () => {
  beforeEach(() => {
    // Återställ användardata före varje test
    users.length = 0;
    users.push({ username: "TestUser", password: "Password1" });
  });

  it("Lyckad inloggning med korrekta uppgifter", () => {
    expect(login("TestUser", "Password1")).toBe(true);
  });

  it("Misslyckad inloggning med fel lösenord", () => {
    expect(login("TestUser", "WrongPass")).toBe(
      "Felaktigt användarnamn eller lösenord."
    );
  });

  it("Inloggning utan användarnamn", () => {
    expect(login("", "Password1")).toBe("Användarnamn och lösenord krävs.");
  });

  it("Inloggning utan lösenord", () => {
    expect(login("TestUser", "")).toBe("Användarnamn och lösenord krävs.");
  });
});
