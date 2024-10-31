const changePassword = require('../modules/changePassword')
const users = require('../modules/userData')

describe('testar changePassword funktionen', () => {
  beforeEach(() => {
    users.length = 0
    users.push({ username: 'TestUser', password: 'OldPass1' })
  })

  test('Lyckad lösenordsändring med korrekta uppgifter', () => {
    const result = changePassword('TestUser', 'OldPass1', 'NewPass1')
    expect(result).toBe(true)
    expect(users[0].password).toBe('NewPass1')
  })

  test('Försök att ändra lösenord utan användarnamn', () => {
    const result = changePassword('', 'OldPass1', 'NewPass1')
    expect(result).toBe('Användarnamn, gammalt lösenord och nytt lösenord krävs.')
  })

  test('Försök att ändra lösenord utan gammalt lösenord', () => {
    const result = changePassword('TestUser', '', 'NewPass1')
    expect(result).toBe('Användarnamn, gammalt lösenord och nytt lösenord krävs.')
  })

  test('Försök att ändra lösenord utan nytt lösenord', () => {
    const result = changePassword('TestUser', 'OldPass1', '')
    expect(result).toBe('Användarnamn, gammalt lösenord och nytt lösenord krävs.')
  })

  test('Försök att ändra lösenord på okänd användare', () => {
    const result = changePassword('UnknownUser', 'OldPass1', 'NewPass1')
    expect(result).toBe('Användaren finns inte.')
  })

  test('Försök att ändra lösenord rätt användarnamn men med gemener', () => {
    const result = changePassword('testuser', 'OldPass1', 'NewPass1')
    expect(result).toBe('Användaren finns inte.')
  })

  test('Försök att ändra lösenord rätt användarnamn men med extra mellanslag', () => {
    const result = changePassword('Test User', 'OldPass1', 'NewPass1')
    expect(result).toBe('Användaren finns inte.')
  })

  test('Försök att ändra lösenord med felaktigt gammalt lösenord', () => {
    const result = changePassword('TestUser', 'WrongOldPass', 'NewPass1')
    expect(result).toBe('Felaktigt gammalt lösenord.')
  })

  test('Försök att ändra till samma lösenord', () => {
    const result = changePassword('TestUser', 'OldPass1', 'OldPass1')
    expect(result).toBe(
      'Det nya lösenordet får inte vara samma som det gamla.'
    )
  })

  test('Försök att ändra till nytt lösenord som är för kort', () => {
    const result = changePassword('TestUser', 'OldPass1', 'Short1')
    expect(result).toBe('Det nya lösenordet uppfyller inte säkerhetskraven.')
  })

  test('Försök att ändra till nytt lösenord utan stor bokstav', () => {
    const result = changePassword('TestUser', 'OldPass1', 'newpass1')
    expect(result).toBe('Det nya lösenordet uppfyller inte säkerhetskraven.')
  })

  test('Försök att ändra till nytt lösenord utan siffra', () => {
    const result = changePassword('TestUser', 'OldPass1', 'NewPassw')
    expect(result).toBe('Det nya lösenordet uppfyller inte säkerhetskraven.')
  })
})
