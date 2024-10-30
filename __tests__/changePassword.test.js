const changePassword = require('../modules/changePassword');
const users = require('../modules/userData');

describe("testar changePassword funktionen", () => {
  beforeEach(() => {
    users.length = 0;
    users.push({ username: "TestUser", password: "OldPass1" });
  });

  test("Lyckad lösenordsändring med korrekta uppgifter", () => {
    const result = changePassword("TestUser", "OldPass1", "NewPass1");
    expect(result).toBe(true);
    expect(users[0].password).toBe("NewPass1");
  });

  test("Försök att ändra lösenord på obefintlig användare", () => {
    const result = changePassword("UnknownUser", "OldPass1", "NewPass1");
    expect(result).toBe("Användaren finns inte.");
  });

  test("Försök att ändra lösenord med felaktigt gammalt lösenord", () => {
    const result = changePassword("TestUser", "WrongOldPass", "NewPass1");
    expect(result).toBe("Felaktigt gammalt lösenord.");
  });

  test("Försök att ändra till samma lösenord", () => {
    const result = changePassword("TestUser", "OldPass1", "OldPass1");
    expect(result).toBe(
      "Det nya lösenordet får inte vara samma som det gamla."
    );
  });

  test("Försök att ändra till osäkert nytt lösenord", () => {
    const result = changePassword("TestUser", "OldPass1", "short");
    expect(result).toBe("Det nya lösenordet uppfyller inte säkerhetskraven.");
  });
});
