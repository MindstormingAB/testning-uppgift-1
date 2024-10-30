const { createUser } = require('../modules/createUser');
const users = require('../modules/userData');

describe("testar createUser funktionen", () => {
  beforeEach(() => {
    users.length = 0;
    users.push({ username: "ExistingUser", password: "Password1" });
  });

  it("Skapa användare med unikt användarnamn och säkert lösenord", () => {
    const result = createUser("NewUser", "SecurePass1");
    expect(result.username).toBe("NewUser");
    expect(users.length).toBe(2);
  });

  it("Försök att skapa användare med befintligt användarnamn", () => {
    const result = createUser("ExistingUser", "SecurePass1");
    expect(result).toBe("Användarnamnet används redan.");
  });

  it("Försök att skapa användare med osäkert lösenord", () => {
    const result = createUser("UniqueUser", "pass");
    expect(result).toBe("Lösenordet uppfyller inte säkerhetskraven.");
  });
});
