const logIn = require('../modules/logIn')
const users = require('../modules/userData')

describe('testar logIn funktionen', () => {
  beforeEach(() => {
    // Återställ användardata före varje test
    users.length = 0
    users.push({ username: 'TestUser', password: 'Password1' })
  })

  it('Lyckad inloggning med korrekta uppgifter', () => {
    expect(logIn('TestUser', 'Password1')).toBe(true)
  })

  it('Misslyckad inloggning med fel lösenord', () => {
    expect(logIn('TestUser', 'WrongPass')).toBe(
      'Felaktigt användarnamn eller lösenord.'
    )
  })

  it('Inloggning utan användarnamn', () => {
    expect(logIn('', 'Password1')).toBe('Användarnamn och lösenord krävs.')
  })

  it('Inloggning utan lösenord', () => {
    expect(logIn('TestUser', '')).toBe('Användarnamn och lösenord krävs.')
  })
})
