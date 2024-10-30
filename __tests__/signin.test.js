const signin = require('../modules/signin')
const users = require('../modules/userData')

describe('testar signin funktionen', () => {
  beforeEach(() => {
    // Återställ användardata före varje test
    users.length = 0
    users.push({ username: 'TestUser', password: 'Password1' })
  })

  it('Lyckad inloggning med korrekta uppgifter', () => {
    expect(signin('TestUser', 'Password1')).toBe(true)
  })

  it('Misslyckad inloggning med fel lösenord', () => {
    expect(signin('TestUser', 'WrongPass')).toBe(
      'Felaktigt användarnamn eller lösenord.'
    )
  })

  it('Inloggning utan användarnamn', () => {
    expect(signin('', 'Password1')).toBe('Användarnamn och lösenord krävs.')
  })

  it('Inloggning utan lösenord', () => {
    expect(signin('TestUser', '')).toBe('Användarnamn och lösenord krävs.')
  })
})

